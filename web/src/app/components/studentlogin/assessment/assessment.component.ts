import {Component, inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {StudentService} from '../../../shared/service/student.service';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {NewsubjectService} from '../../../shared/service/newsubject.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {SessionConstants} from '../../../shared/data/sessionConstants';
import {CommonService} from '../../../shared/service/common.service';
import {EnvironmentService} from '../../../environment.service';
import {CreatorService} from '../../../shared/service/creator.service';

@Component({
    selector: 'app-assessment',
    templateUrl: './assessment.component.html',
    styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
    private modalRef: NgbModalRef;
    public listData: any = [];
    public listData1: any;
    public sortType: any;
    public filterType: any;
    public webhost: any;
    public sortButton: any;
    public allowSelect: boolean;
    public searchAssess: any;
    public checkTime: any;
    public message: any;
    public answerKeyPath: any;
    public ErrorTitle: any;
    public mobileView = false;
    public contentData: any;
    @ViewChild('throwError') throwError: TemplateRef<any>;
    @ViewChild('answerKey') answerKey: TemplateRef<any>;
    @ViewChild('submitPopUp') submitPopUp: TemplateRef<any>;
    @ViewChild('submitTestPopUp') submitTestPopUp: TemplateRef<any>;
    @ViewChild('startTimerDuration') startTimerDuration: TemplateRef<any>;
    @ViewChild('feedbackStatus') feedbackStatus: TemplateRef<any>;
    public popUpMessage = '';
    public creatorService = inject(CreatorService);
    public testContentData: any;
    public contentDetails: any;

    constructor(public auth: AuthService, public student: StudentService, public confi: ConfigurationService, public sanitizer: DomSanitizer,
                public route: Router, public toastr: ToastrService, public newSubject: NewsubjectService,
                private modalService: NgbModal, public common: CommonService, public env: EnvironmentService) {
        this.webhost = this.confi.getimgUrl();
        this.mobileView = this.env.mobileView;
        this.newSubject.schoolChange.subscribe((params) => {
            if (params != '') {
                if (this.route.url.includes('assessment')) {
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
        this.auth.setAssessmentRef(this);
    }

    init(data) {
        this.getSearch_Filter();
        this.assessmentList(this.filterType);
    }

    onSave() {
        this.modalRef.close();
    }

    assessmentSearch() {
        if (this.searchAssess != '') {
            this.updateFilter(this.searchAssess);
        }
    }

    answerPage(list) {
        console.log(list, 'assess_data');
        if (list.student_content_status == 3) {
            this.auth.setSessionData('ContentType', 'Assessments');
            this.auth.setSessionData('student-card', JSON.stringify(list));
            this.route.navigate(['/studentlogin/score-card']);
        } else if (list.student_content_status == 4) {
            list.available_content_duration = list.content_duration != '0' ? parseInt(list.content_duration) * 60
                : list.content_time_taken != '0' ? parseInt(list.content_time_taken) : 0;
            if (list.is_test == '1') {
                this.testDetails(list);
            } else {
                this.auth.setSessionData('classDetails', JSON.stringify(list));
                this.route.navigate(['/studentlogin/answering']);
            }
        } else {
            this.checkContentTime(list);
        }
    }

    sendRequest(list, val) {
        console.log(list, 'list');
        list.answer_request = val;
        this.request(list);
    }

    downloadPdf(list) {
        console.log(list);
        let path = this.common.convertBase64(list.file_path);
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', path.original_image_url);
        link.setAttribute('download', path.name);
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    openAnswerKey(list) {
        this.modalRef = this.modalService.open(this.answerKey, {size: 'xl'});
        this.answerKeyPath = this.webhost + '/' + list.downloadPDF[0].original_image_url;
    }

    viewAnswerKeyPdf(event, list) {
        this.auth.setSessionData('view_pdf_url_details', JSON.stringify(list));
        window.open(this.env.envProperties.envURL + '#/studentlogin/viewAnswerKeyPdf', '_blank');
        event.stopPropagation();
    }
    
    checkContentTime(selectedData) {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: selectedData.class_id,
            content_id: selectedData.content_id,
            school_id: this.auth.getSessionData('school_id'),
            class_content_id: selectedData.class_content_id
        };
        this.student.checkTime(payload).subscribe((successData) => {
                this.checkContentTimeSuccess(successData, selectedData);
            },
            (error) => {
                console.error(error);
            });
    }

    checkContentTimeSuccess(successData, selectedData) {
        if (successData.IsSuccess) {
            this.checkTime = successData.ResponseObject;
            if (selectedData.status == 1) {
                this.message = selectedData.content_name + ' ' + 'is' + ' ' + 'assessments' + ' not started';
                this.ErrorTitle = selectedData.class_name;
                this.modalRef = this.modalService.open(this.throwError, {size: 'md'});
            } else if (selectedData.status == 3 && (selectedData.student_content_status == 1 || selectedData.student_content_status == 2)) {
                this.toastr.error('Assessment End date is over');
                this.message = selectedData.content_name + ' ' + 'is assessment End date is over';
                this.ErrorTitle = selectedData.class_name;
                this.modalRef = this.modalService.open(this.throwError, {size: 'md'});
            } else if (selectedData.student_content_status == 3) {
                this.auth.setSessionData('ContentType', 'Assessments');
                this.auth.setSessionData('student-card', JSON.stringify(selectedData));
                this.route.navigate(['/studentlogin/score-card']);
            } else {
                this.auth.setSessionData('ContentType', 'Assessments');
                if (selectedData.content_format == '3' && selectedData.content_started_at == null &&
                    (selectedData.student_content_status == '1' || selectedData.student_content_status == '2')) {
                        this.contentDetails = selectedData;
                        if (selectedData?.is_test == '1') {
                            this.modalRef = this.modalService.open(this.startTimerDuration);
                        } else {
                            this.updateContentStatus(this.contentDetails);
                        }
                } else if (selectedData.content_format == '3' && selectedData.content_started_at != '' && selectedData.content_started_at &&
                    selectedData.content_duration != '0' && (selectedData.student_content_status == '1' || selectedData.student_content_status == '2')) {
                    this.auth.getCurrentDateAndTime(selectedData, '', 'assessment').subscribe((isAllowed: boolean) => {
                        if (!isAllowed) {
                            console.log('Access denied');
                            this.contentData = selectedData;
                            this.modalRef = this.modalService.open(this.submitPopUp);
                        }
                    });
                } else {
                    selectedData.available_content_duration = selectedData.content_duration != '0' ? parseInt(selectedData.content_duration) * 60 :
                        selectedData.content_time_taken != '0' ? parseInt(selectedData.content_time_taken) : 0;
                    if (selectedData.is_test == '1') {
                        this.testDetails(selectedData);
                    } else {
                        this.auth.setSessionData('classDetails', JSON.stringify(selectedData));
                        this.route.navigate(['/studentlogin/answering']);
                    }
                }
            }
        } else {
            this.message = successData.ResponseObject;
            this.ErrorTitle = selectedData.class_name;
            this.modalRef = this.modalService.open(this.throwError, {size: 'md'});
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
                this.auth.testDetailsRoutingPage(successData.ResponseObject, 'assessment');
            }
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

    assessmentList(id) {
        this.setSearch_Filter(id);
        this.filterType = id;
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            type: this.filterType,
        };
        this.student.assessmentList(data).subscribe((successData) => {
                this.assessmentListSuccess(successData);
            },
            (error) => {
                console.error(error, 'error_assessmentList');
            });
    }

    assessmentListSuccess(successData) {
        if (successData.IsSuccess) {
            successData.ResponseObject.forEach((val) => {
                val.downloadPDF = this.common.convertBase64(val.answerkey_path);
            });
            this.listData = successData.ResponseObject;
            this.listData1 = successData.ResponseObject;
            this.listData.forEach((items) => {
               items.overdueStatus = true;
               if (items.overdue < 0){
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
        let data = JSON.parse(this.auth.getSessionData(SessionConstants.studentAssessmentSearch));
        if (data != null) {
            data.forEach((items) => {
                if (items.school_id == this.auth.getSessionData('school_id')) {
                    items.assessmentDateStatus = id;
                    items.assessmentName = this.searchAssess;
                } else {
                    const searchData = {
                        assessmentName: this.searchAssess,
                        assessmentDateStatus: id,
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
            this.auth.setSessionData(SessionConstants.studentAssessmentSearch, JSON.stringify(data));
        }
    }

    getSearch_Filter() {
        const data = JSON.parse(this.auth.getSessionData(SessionConstants.studentAssessmentSearch));
        data.every((items) => {
            if (items.school_id == this.auth.getSessionData('school_id')) {
                this.filterType = items.assessmentDateStatus;
                this.searchAssess = items.assessmentName;
                return false;
            } else {
                this.searchAssess = '';
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
        this.auth.setSessionData('reportCalledFrom', 'assessment');
        this.route.navigate(['sat-report']);
        event ? event.stopPropagation() : '';
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
        await this.assessmentList(this.filterType);
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
                    await this.assessmentList(this.filterType);
                }
            } catch (error) {
                console.error('Error during submitAnswer:', error);
            }
        }
    }
}
