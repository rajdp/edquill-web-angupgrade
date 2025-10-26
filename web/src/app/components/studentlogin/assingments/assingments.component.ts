import {Component, inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {StudentService} from '../../../shared/service/student.service';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {NewsubjectService} from '../../../shared/service/newsubject.service';
import {ToastrService} from 'ngx-toastr';
import {SessionConstants} from '../../../shared/data/sessionConstants';
import {CommonService} from '../../../shared/service/common.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {EnvironmentService} from '../../../environment.service';
import {CreatorService} from '../../../shared/service/creator.service';

@Component({
    selector: 'app-assessment',
    templateUrl: './assingments.component.html',
    styleUrls: ['./assingments.component.scss']
})

export class AssingmentsComponent implements OnInit {
    public answerKeyPath: any;
    public listData: any = [];
    public listData1: any;
    public filterType: any;
    public webhost: any;
    public sortButton: any;
    public allowSelect: boolean;
    public searchAssign: any;
    @ViewChild('answerKey') answerKey: TemplateRef<any>;
    @ViewChild('submitPopUp') submitPopUp: TemplateRef<any>;
    private modalRef: NgbModalRef;
    public mobileView = false;
    public contentData: any;
    @ViewChild('submitTestPopUp') submitTestPopUp: TemplateRef<any>;
    public creatorService = inject(CreatorService);
    public testContentData: any;
    @ViewChild('startTimerDuration') startTimerDuration: TemplateRef<any>;
    public contentDetails: any;
    @ViewChild('feedbackStatus') feedbackStatus: TemplateRef<any>;
    public popUpMessage = '';

    constructor(public auth: AuthService, public student: StudentService, public confi: ConfigurationService, public sanitizer: DomSanitizer, private modalService: NgbModal,
                public route: Router, public newSubject: NewsubjectService, public toastr: ToastrService,
                public common: CommonService, public env: EnvironmentService) {
        this.webhost = this.confi.getimgUrl();
        this.mobileView = this.env.mobileView;
        this.newSubject.schoolChange.subscribe((params) => {
            if (params != '') {
                if (this.route.url.includes('assignment')) {
                    this.init(params);
                }
            } else {
                this.init(this.auth.getSessionData('school_id'));
            }
        });
    }

    ngOnInit(): void {
        this.allowSelect = false;
        this.newSubject.allowSchoolChange(this.allowSelect);
        this.auth.setAssignmentRef(this);
    }

    init(data) {
        this.getSearch_Filter();
        this.assignmentList(this.filterType);
    }

    onSave() {
        this.modalRef.close();
    }

    assessmentSearch() {
        if (this.searchAssign != '') {
            this.updateFilter(this.searchAssign);
        }
    }

    updateFilter(event) {
        const val = event.toLowerCase();
        const temp = this.listData1.filter(function (d) {
            return d.content_name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.listData = temp;
        this.setSearch_Filter(this.filterType);
    }

    downloadPdf(list) {
        console.log(list);
        const path = this.common.convertBase64(list.file_path);
        console.log(path, 'path');
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', path.original_image_url);
        link.setAttribute('download', path.name);
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    openAnswerKey(list) {
        // this.modalRef = this.modalService.open(this.answerKey, {size: 'xl'});
        console.log(list.downloadPDF[0].original_image_url, 'list.downloadPDF[0].original_image_url')
        this.answerKeyPath = this.webhost + '/' + list.downloadPDF[0].original_image_url;
        console.log(this.answerKeyPath, 'answer')
    }

    viewAnswerKeyPdf(event, list) {
        this.auth.setSessionData('view_pdf_url_details', JSON.stringify(list));
        window.open(this.env.envProperties.envURL + '#/studentlogin/viewAnswerKeyPdf', '_blank');
        event.stopPropagation();
    }

    answerPage(data) {
        console.log(data, 'assign_data');
        this.auth.setSessionData('ContentType', 'Assignments');
        if (data.student_content_status != 3) {
            if (data.content_format == '3' && data.content_started_at == null && (data.student_content_status == '1' || data.student_content_status == '2')) {
                this.contentDetails = data;
                if (data?.is_test == '1') {
                    this.modalRef = this.modalService.open(this.startTimerDuration);
                } else {
                    this.updateContentStatus(this.contentDetails);
                }
            } else if (data.content_format == '3' && data.content_started_at != '' && data.content_started_at && data.content_duration != '0'
                && (data.student_content_status == '1' || data.student_content_status == '2')) {
                this.auth.getCurrentDateAndTime(data, '', 'assignment').subscribe((isAllowed: boolean) => {
                    if (!isAllowed) {
                        console.log('Access denied');
                        this.contentData = data;
                        this.modalRef = this.modalService.open(this.submitPopUp);
                    }
                });
            } else {
                data.available_content_duration = data.content_duration != '0' ? parseInt(data.content_duration) * 60 :
                    data.content_time_taken != '0' ? parseInt(data.content_time_taken) : 0;
                if (data?.is_test == '1') {
                    this.testDetails(data);
                } else {
                    this.auth.setSessionData('classDetails', JSON.stringify(data));
                    this.route.navigate(['/studentlogin/answering']);
                }
            }
        } else {
            this.auth.setSessionData('student-card', JSON.stringify(data));
            this.route.navigate(['/studentlogin/score-card']);
        }
    }

    updateContentStatus(data) {
        data.available_content_duration = data.content_duration != '0' ? parseInt(data.content_duration) * 60 :
            data.content_time_taken != '0' ? parseInt(data.content_time_taken) : 0;
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_content_id: data.student_content_id,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        this.auth.postService(payload, 'student/updateContentStartTime').subscribe((successData: any) => {
            console.log(successData, 'successData');
            if (successData.IsSuccess) {
                if (data?.is_test == '1' && data.content_format == '3') {
                    this.testDetails(data);
                } else {
                    this.auth.setSessionData('classDetails', JSON.stringify(data));
                    this.route.navigate(['/studentlogin/answering']);
                }
                this.modalRef?.close();
            }
        }, error => console.error(error, 'error_updateStatus'));
    }

    testDetails(event, calledFrom = '') {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: event.content_id,
            student_content_id: event.student_content_id,
            school_id: this.auth.getSessionData('school_id')
        };
        this.creatorService.testDetail(data).subscribe((successData) => {
                this.testSuccess(successData, calledFrom);
            },
            (error) => {
                console.error(error, 'error_lisDetails');
            });
    }

    testSuccess(successData, calledFrom) {
        if (successData.IsSuccess) {
            successData.ResponseObject.forEach(items => {
                items.contents.forEach(content => {
                    content.content_format = items.content_format;
                    content.class_id = items.class_id;
                    content.test_student_content_status = items.student_content_status;
                });
            });
            console.log(successData.ResponseObject, 'successData.ResponseObject');
            if (calledFrom != '') {
                this.modalRef?.close();
                this.popUpMessage = 'Please wait while we submitting all module...';
                this.modalRef = this.modalService.open(this.feedbackStatus , {backdrop : 'static'});
                this.submitAllTestAnswer(successData.ResponseObject);
            } else {
                this.auth.testDetailsRoutingPage(successData.ResponseObject, 'assignment');
            }
        }
    }

    async submitAllTestAnswer(arrayValue = []) {
        const promises = [];

        for (const item of arrayValue) {
            for (const content of item.contents) {
                if (content?.student_content_status == '1' || content?.student_content_status == '2') {
                    promises.push(this.auth.questionList(content));
                }
            }
        }

        await Promise.all(promises);
        await this.assignmentList(this.filterType);
        await this.modalRef.close();
    }

    submitTestFromAuthService(value) {
        console.log(value, 'value');
        this.testContentData = value;
        this.modalRef = this.modalService.open(this.submitTestPopUp);
    }

    async submitAnswer(contentData, calledFrom = '') {
        console.log(contentData, 'contentData');
        if (contentData?.is_test == '1' && calledFrom == '') {
            this.testDetails(contentData, 'submit');
        } else {
            try {
                await this.auth.questionList(contentData);
                await this.modalRef.close();
                if (!contentData?.lastQuestions) {
                    await this.auth.updateContentStatus(contentData?.nextModuleData, 'list');
                } else {
                    await this.assignmentList(this.filterType);
                }
            } catch (error) {
                console.error('Error during submitAnswer:', error);
            }
        }
    }

    assignmentList(id) {
        this.setSearch_Filter(id);
        this.filterType = id;
        let data;
        data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            type: this.filterType,
        };
        this.student.assingmentList(data).subscribe((successData) => {
                this.assingmentListSuccess(successData);
            },
            (error) => {
                console.error(error, 'error_assignmentList');
            });
    }

    assingmentListSuccess(successData) {
        if (successData.IsSuccess) {
            successData.ResponseObject.forEach((val) => {
                val.downloadPDF = this.common.convertBase64(val.answerkey_path);
            });
            this.listData1 = successData.ResponseObject;
            this.listData = successData.ResponseObject;
            this.listData.forEach((items) => {
                items.overdueStatus = true;
                if (items.overdue < 0) {
                    items.overdueStatus = false;
                    Math.abs(items.overdue);
                    items.overdue = Math.abs(items.overdue);
                }
            });
            this.assessmentSearch();
        }
    }

    request(list) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_id: this.auth.getUserId(),
            content_id: list.content_id,
            class_id: list.class_id
        };
        this.student.answerKeyRequest(data).subscribe((successData) => {
                this.answerKeyRequestSuccess(successData);
            },
            (error) => {
                console.error(error, 'error_assessmentList');
            });
    }

    answerKeyRequestSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success('Download request sent');
        }
    }

    setSearch_Filter(id) {
        let data = JSON.parse(this.auth.getSessionData(SessionConstants.studentAssignmentSearch));
        if (data != null) {
            data.forEach((items) => {
                if (items.school_id == this.auth.getSessionData('school_id')) {
                    items.assignmentDateStatus = id;
                    items.assignmentName = this.searchAssign;
                } else {
                    const searchData = {
                        assignmentName: this.searchAssign,
                        assignmentDateStatus: id,
                        school_id: this.auth.getSessionData('school_id')
                    };
                    data.push(searchData);
                }
            });
            data = data.filter((test, index, array) =>
                    index === array.findIndex((findTest) =>
                        findTest.school_id === test.school_id
                    )
            );
            this.auth.setSessionData(SessionConstants.studentAssignmentSearch, JSON.stringify(data));
        }
    }

    getSearch_Filter() {
        const data = JSON.parse(this.auth.getSessionData(SessionConstants.studentAssignmentSearch));
        data.every((items) => {
            if (items.school_id == this.auth.getSessionData('school_id')) {
                this.filterType = items.assignmentDateStatus;
                this.searchAssign = items.assignmentName;
                return false;
            } else {
                this.searchAssign = '';
                this.filterType = '3';
            }
            return true;
        });
    }

    navigateToSATReport(value, event) {
        console.log(value, 'value');
        const satReportDetails = {
            class_id: value?.class_id,
            class_name: value?.class_name,
            student_id: this.auth.getUserId(),
            content_id: value.content_id,
            student_content_id: value.student_content_id,
            test_type_id: value?.test_type_id ?? '0',
        };
        console.log(satReportDetails, 'satReportDetails');
        this.auth.setSessionData('satReportData', JSON.stringify(satReportDetails));
        this.auth.setSessionData('reportCalledFrom', 'assignment');
        this.route.navigate(['sat-report']);
        event ? event.stopPropagation() : '';
    }
}
