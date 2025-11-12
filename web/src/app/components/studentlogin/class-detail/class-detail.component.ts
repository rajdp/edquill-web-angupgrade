import {Component, ElementRef, inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal, NgbModalConfig, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {DatePipe, TitleCasePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {CommonService} from '../../../shared/service/common.service';
import {IAngularMyDpOptions} from '@nodro7/angular-mydatepicker';
import {FormBuilder} from '@angular/forms';
import {ClassService} from '../../../shared/service/class.service';
import {DomSanitizer} from '@angular/platform-browser';
import {NewsubjectService} from '../../../shared/service/newsubject.service';
import {StudentService} from '../../../shared/service/student.service';
import {ZoomServiceService} from '../../../shared/service/zoom-service.service';
import {dateOptions} from '../../../shared/data/config';
import {EnvironmentService} from '../../../environment.service';
import {CreatorService} from '../../../shared/service/creator.service';

@Component({
    selector: 'app-list-class-detail',
    templateUrl: './class-detail.component.html',
    styleUrls: ['./class-detail.component.scss']
})
export class ClassDetailComponent implements OnInit {
    myDpOptions: IAngularMyDpOptions = {
        dateRange: false,
        dateFormat: dateOptions.pickerFormat,
        firstDayOfWeek: 'su'
    };
    public listData: any;
    public deleteUser: any;
    public modalRef: NgbModalRef;
    public closeResult: string;
    public filetype: any;
    public url: any;
    public getUrl: any;
    public getUrl1: any;
    public schoolData: any;
    public schoolId: any;
    public webhost: any;
    public zoomResponse: any;
    public fileUploader: any;
    public choosedData: any = [];
    public type: any;
    public tabShow = 'curriculum';
    public detailData: any;
    public gradeData: any;
    public subjectData: any;
    public videoSource: any = [];
    public settingList = [];
    public settingValue = '0';
    public assignData: any = [];
    public allowSelect: boolean;
    public linkdata: any = [];
    public notesdata: any = [];
    public message: any;
    public ErrorTitle: any;
    public selectedClass: any;
    public selectedRecording: any;
    public topicListData = [];
    public totalCurriculumList = [];
    public curriculumListWithoutTopic = [];
    public contentFilterType = '0';
    public announcementCommentData = [];

    @ViewChild('throwError') throwError: TemplateRef<any>;
    @ViewChild('content') link: TemplateRef<any>;
    @ViewChild('notesDetail') notesDetail: TemplateRef<any>;
    @ViewChild('zoomDialog') zoomDialog: TemplateRef<any>;
    @ViewChild('zoomDialog1') zoomDialog1: TemplateRef<any>;
    @ViewChild('video') video: TemplateRef<any>;
    @ViewChild('messageInput') messageInput!: ElementRef;
    @ViewChild('messagerChat', {static: false}) messagerChat: ElementRef;
    @ViewChild('submitPopUp') submitPopUp: TemplateRef<any>;
    @ViewChild('submitTestPopUp') submitTestPopUp: TemplateRef<any>;
    @ViewChild('startTimerDuration') startTimerDuration: TemplateRef<any>;
    public contentDetails: any;
    @ViewChild('feedbackStatus') feedbackStatus: TemplateRef<any>;
    public popUpMessage = '';
    public isCollapsed = false;
    public updatedAnnouncementList = [];
    public announcementList = [];
    public announcementSend = '';
    protected arrayValue: any = [];
    protected messageList: any = [];
    public creator = inject(CreatorService);
    public router = inject(ActivatedRoute);
    public contentData: any;
    public testContentData: any;

    constructor(private formBuilder: FormBuilder, public config: NgbModalConfig, public confi: ConfigurationService, public student: StudentService,
                public auth: AuthService, public commondata: CommonDataService, private modalService: NgbModal, public sanitizer: DomSanitizer,
                public route: Router, public firstcaps: TitleCasePipe, public toastr: ToastrService, public newSubject: NewsubjectService, private el: ElementRef,
                public common: CommonService, public classes: ClassService, public env: EnvironmentService, public datePipe: DatePipe, public zoomService: ZoomServiceService) {
        this.classList(this.contentFilterType);
        this.webhost = this.confi.getimgUrl();
        config.backdrop = 'static';
        config.keyboard = false;
        this.creator.changeViewList(true);
        this.listMessage();
    }

    ngOnInit() {
        this.allowSelect = true;
        this.newSubject.allowSchoolChange(this.allowSelect);
        this.auth.setClassDetailsRef(this);
        this.router.params.forEach((params) => {
            this.type = params.type;
            setTimeout(() => {
                if (this.type == 'announcement' && this.choosedData[0]?.notes != '') {
                    this.showNotes(this.choosedData[0]?.notes);
                    this.tabShow = 'notes';
                } else if (this.type == 'inbox') {
                    this.tabShow = 'inbox';
                }
            }, 1000);
        });
    }

    listMessage(calledFrom = '') {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.auth.getSessionData('class-id')
        };
        this.auth.postService(payload, 'mailbox/listMessages').subscribe((successData: any) => {
            console.log(successData, 'successData');
            if (successData.IsSuccess) {
                successData.ResponseObject.forEach((item) => {
                    item.createdByMe = item.from_id == this.auth.getUserId();
                });
                this.messageList = successData.ResponseObject;
                setTimeout(() => {
                    if (calledFrom) {
                        const element = document.getElementById('messagerChat');
                        if (element) {
                            element.scrollTo({ behavior: 'smooth', top: element.scrollHeight });
                        }
                    }
                }, 0);

                console.log(this.messageList, 'messageList');
            }
        }, (error) => console.error(error, 'error_listMessage'));
    }

    open(content) {
        this.modalService.open(content);
    }

    onSave() {
        this.modalRef.close();
    }

    close() {
        this.modalRef.close();
        this.schoolId = null;
        this.fileUploader = '';
        this.filetype = '';
    }

    inbox() {
        setTimeout(() => {
            this.messageInput.nativeElement.focus();
            this.listMessage('inbox');
        }, 0);
    }

    checkContentTime(selectedData) {
        if (selectedData.content_type == '1') {
            this.auth.setSessionData('classDetails', JSON.stringify(selectedData));
            this.route.navigate(['studentlogin/preview']);
        } else if (selectedData.content_type == '2') {
            this.auth.setSessionData('ContentType', selectedData.content_type == '2' ? 'Assignments' : 'Quiz');
            if (selectedData.student_content_status != 3) {
                if (selectedData.content_format == '3' && selectedData.content_started_at == null && (selectedData.student_content_status == '1' || selectedData.student_content_status == '2')) {
                        this.contentDetails = selectedData;
                        if (selectedData?.is_test == '1') {
                            this.modalRef = this.modalService.open(this.startTimerDuration);
                        } else {
                            this.updateContentStatus(this.contentDetails);
                        }
                    } else if (selectedData.content_format == '3' && selectedData.content_started_at != '' && selectedData.content_started_at && selectedData.content_duration != '0'
                    && (selectedData.student_content_status == '1' || selectedData.student_content_status == '2')) {
                    this.auth.getCurrentDateAndTime(selectedData, '', 'class-details').subscribe((isAllowed: boolean) => {
                        if (!isAllowed) {
                            console.log('Access denied');
                            this.contentData = selectedData;
                            this.modalRef = this.modalService.open(this.submitPopUp);
                        }
                    });
                } else {
                    selectedData.available_content_duration = selectedData.content_duration != '0' ? parseInt(selectedData.content_duration) * 60
                        : selectedData.content_time_taken != '0' ? parseInt(selectedData.content_time_taken) : 0;
                    if (selectedData?.is_test == '1') {
                        this.testDetails(selectedData);
                    } else {
                        this.auth.setSessionData('classDetails', JSON.stringify(selectedData));
                        this.route.navigate(['/studentlogin/answering']);
                    }
                }
            } else {
                this.auth.setSessionData('student-card', JSON.stringify(selectedData));
                this.route.navigate(['/studentlogin/score-card']);
            }
        } else {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                class_id: selectedData.class_id,
                content_id: selectedData.content_id,
                school_id: this.auth.getSessionData('school_id'),
                class_content_id: selectedData.class_content_id
            };
            this.student.checkTime(data).subscribe((successData) => {
                    this.checkContentTimeSuccess(successData, selectedData);
                },
                (error) => {
                    console.error(error, 'checkContentTimeError');
                });
        }
    }

    checkContentTimeSuccess(successData, selectedData) {
        if (successData.IsSuccess) {
            this.enterCurriculum(selectedData);
        } else {
            this.message = successData.ResponseObject;
            this.ErrorTitle = this.choosedData[0]?.class_name;
            this.modalRef = this.modalService.open(this.throwError, {size: 'md'});
        }
    }

    enterCurriculum(detail) {
        console.log(detail, 'detail');
        detail.class_id = this.auth.getSessionData('class-id');
        if (detail.status == 1 && detail.content_type != '2') {
            this.message = detail.content_name + ' ' + 'is' + ' ' + 'assessments not started';
            this.ErrorTitle = this.choosedData[0]?.class_name;
            this.modalRef = this.modalService.open(this.throwError, {size: 'md'});
        } else if (detail.status == 3 && (detail.student_content_status == 1 || detail.student_content_status == 2) && detail.content_type != '2') {
            console.log(detail, 'assessment321');
            this.message = detail.content_name + ' ' + 'is assessment End date is over';
            this.ErrorTitle = this.choosedData[0]?.class_name;
            this.modalRef = this.modalService.open(this.throwError, {size: 'md'});
        } else if (detail.student_content_status != 3) {
            this.auth.setSessionData('ContentType', detail.content_type == '2' ? 'Assignments' : 'Quiz');
            if (detail.content_format == '3' && detail.content_started_at == null &&
                    (detail.student_content_status == '1' || detail.student_content_status == '2')) {
                        this.contentDetails = detail;
                        if (detail?.is_test == '1') {
                            this.modalRef = this.modalService.open(this.startTimerDuration);
                        } else {
                            this.updateContentStatus(this.contentDetails);
                        }
            } else if (detail.content_format == '3' && detail.content_started_at && detail.content_started_at != '' &&
                    detail.content_duration != '0' && (detail.student_content_status == '1' || detail.student_content_status == '2')) {
                this.auth.getCurrentDateAndTime(detail, '', 'class-details').subscribe((isAllowed: boolean) => {
                    if (!isAllowed) {
                        console.log('Access denied');
                        this.contentData = detail;
                        this.modalRef = this.modalService.open(this.submitPopUp);
                    }
                });
            } else {
                this.auth.setSessionData('ContentType', detail.content_type == '2' ? 'Assignments' : 'Quiz');
                detail.available_content_duration = detail.content_duration != '0' ? parseInt(detail.content_duration) * 60 :
                    detail.content_time_taken != '0' ? parseInt(detail.content_time_taken) : 0;
                if (detail?.is_test == '1') {
                    this.testDetails(detail);
                } else {
                    this.auth.setSessionData('classDetails', JSON.stringify(detail));
                    this.route.navigate(['/studentlogin/answering']);
                }
            }
        } else {
            this.auth.setSessionData('student-card', JSON.stringify(detail));
            this.route.navigate(['/studentlogin/score-card']);
        }
    }

    updateContentStatus(data) {
        data.available_content_duration = data.content_duration != '0' ? parseInt(data.content_duration) * 60
            : data.content_time_taken != '0' ? parseInt(data.content_time_taken) : 0;
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
        this.creator.testDetail(data).subscribe((successData) => {
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
            if (calledFrom == 'submit') {
                this.modalRef?.close();
                this.popUpMessage = 'Please wait while we submitting all module...';
                this.modalRef = this.modalService.open(this.feedbackStatus , {backdrop : 'static'});
                this.submitAllTestAnswer(successData.ResponseObject);
            } else {
                this.modalRef?.close();
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
        await this.classList(this.contentFilterType);
        await this.modalRef.close();
    }

    submitTestFromAuthService(value) {
        console.log(value, 'value');
        this.testContentData = value;
        this.modalRef = this.modalService.open(this.submitTestPopUp);
    }

    async submitAnswer(contentData, calledFrom = '') {
        if (contentData?.is_test == '1' && calledFrom == '') {
            this.testDetails(contentData, 'submit');
        } else {
            try {
                await this.auth.questionList(contentData);
                await this.modalRef.close();
                if (!contentData?.lastQuestions) {
                    await this.auth.updateContentStatus(contentData?.nextModuleData, 'list');
                } else {
                    await this.classList('1');
                }
            } catch (error) {
                console.error('Error during submitAnswer:', error);
                // Show user feedback if needed
            }
        }
    }

    classList(id) {
        this.contentFilterType = id;
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            class_id: this.auth.getSessionData('class-id'),
            schedule_id: this.auth.getSessionData('schedule_id'),
            type: id
        };
        this.classes.studentClassDetail(data).subscribe((successData) => {
                this.classListSuccess(successData);
            },
            (error) => {
                console.error(error, 'error');
            });
    }

    classListSuccess(successData) {
        if (successData.IsSuccess) {
            this.choosedData = successData.ResponseObject.class_detail;
            console.log(this.choosedData, 'studentChoosed');
            this.settingValue = this.choosedData[0].student_zoom_view;
            this.totalCurriculumList = successData.ResponseObject.curriculum_detail;
            this.getClassRecording(this.choosedData[0]);
            this.getTopicList();
            this.curriculumListWithoutTopic = [];
            this.curriculumListWithoutTopic = this.totalCurriculumList.filter(value => value.topic_id == '0' || value.topic_id == '');
        }
    }

    getTopicList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: [this.choosedData[0].class_id],
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        this.classes.topicList(data).subscribe((successData) => {
                this.viewTopicListSuccess(successData);
            },
            (error) => {
                console.error(error, 'error_topic');
            });
    }

    viewTopicListSuccess(successData) {
        if (successData.IsSuccess) {
            this.topicListData = successData.ResponseObject;
            this.topicListData.forEach((items) => {
                items.topicArray = [];
                this.totalCurriculumList.forEach((curriculum) => {
                    if (curriculum.topic_id == items.topic_id) {
                        items.contentCollapse = true;
                        items.topicArray.push(curriculum);
                    }
                });
            });
            console.log(this.topicListData, 'topicList');
        }
    }

    showNotes(data) {
        this.announcementList = data;
        console.log(this.notesdata, 'daataa');
        this.updatedAnnouncementList = [];
        this.updatedAnnouncementList.push({
            class_id: this.choosedData[0].class_id,
            class_name: this.choosedData[0].class_name,
            announcement_type: this.choosedData[0].announcement_type,
            announcement_data: []
        });
        this.announcementList.forEach((items) => {
            const checkAnnouncementExistAlready = this.updatedAnnouncementList[0].announcement_data.some((announcement) => announcement.id == items.id);
            if (!checkAnnouncementExistAlready) {
                items.comment = '';
                this.updatedAnnouncementList[0].announcement_data.push(items);
            }
        });
    }

    otherlink(data) {
        // this.modalRef = this.modalService.open(this.link);
        this.linkdata = data;
        console.log(this.linkdata, 'daataa');
    }

    openZoomDialog(classData) {
        this.selectedClass = classData;
        if (classData.allow_zoom_api[0].value == '0') {
            this.navigateOutsideZoom(this.selectedClass);
        } else {
            this.getZoomMeeting(classData);
        }
    }

    getZoomMeeting(classData) {
        console.log(classData, 'classData');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            schedule_id: classData.schedule_id
        };
        this.student.zoomLink(data).subscribe((successData: any) => {
            this.commondata.showLoader(false);
            this.getZoomMeetingSuccess(successData);
        }, (error) => {
            this.commondata.showLoader(false);
            this.toastr.error(error.ErrorObject);
        });
    }

    getZoomMeetingSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(successData.ResponseObject, 'zoom link success');
            this.zoomResponse = successData.ResponseObject;
            if (this.selectedClass.allow_zoom_api[0].value == '0') {
                this.navigateOutsideZoom(successData.ResponseObject);
            } else if (this.selectedClass.allow_zoom_api[0].value == '1') {
                if (this.settingValue == '2') {
                    this.modalRef = this.modalService.open(this.zoomDialog, {size: 's'});
                } else if (this.settingValue == '1') {
                    this.navigateOutsideZoom(successData.ResponseObject);
                } else if (this.settingValue == '0') {
                    this.zoomService.initZoomMeeting(this.selectedClass);
                }
            }
        } else {
            this.toastr.error(successData.ResponseObject.message);
        }
    }

    getClassRecording(classData) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: classData.class_id,
            grade: [classData.grade],
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0'
        };
        this.classes.recording(data).subscribe((successData: any) => {
            this.commondata.showLoader(false);
            if (successData.IsSuccess) {
                console.log(successData, 'su');
                const recordings = [];
                successData.ResponseObject.forEach((item) => {
                    recordings.push(...item.meeting_recording);
                });
                this.videoSource = recordings;
                // this.videoSource = successData.ResponseObject;
            }
        }, (error) => {
            this.commondata.showLoader(false);

        });
    }

    navigateOutsideZoom(data) {
        console.log(data, 'datd');
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        if (this.selectedClass.allow_zoom_api[0].value == '0') {
            link.setAttribute('href', data.meeting_link);
        } else {
            link.setAttribute('href', data.student_link);
        }
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    navigateOutsideRecording(data) {
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        // link.setAttribute('href', data.meeting_recording);
        link.setAttribute('href', data.play_video);
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    announcementView(value) {
        console.log(value);
        this.announcementSend = value.id;
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            note_id: value.id
        };
        this.auth.postService(data, 'classes/getAnnouncementComments').subscribe((successData: any) => {
                if (successData.IsSuccess) {
                    this.announcementCommentData = successData.ResponseObject;
                    console.log(this.announcementCommentData, 'value111');
                } else {
                    this.toastr.error(successData.ErrorObject);
                }
            },
            (error) => {
                console.error(error, 'announcementView');
            });
    }

    announcementCommentDetails(value) {
        console.log(value);
        console.log(value.comment, 'comment');
        if (value.comment != '') {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                note_id: value.id,
                comment: value.comment,
                status: '1'
            };
            this.auth.postService(data, 'classes/addAnnouncementComments').subscribe((successData: any) => {
                    if (successData.IsSuccess) {
                        this.announcementCommentData = successData.ResponseObject;
                        value.comment_count = this.announcementCommentData.length;
                        value.comment = '';
                        console.log(this.announcementCommentData, 'value111');
                    } else {
                        this.toastr.error(successData.ErrorObject);
                    }
                },
                (error) => {
                });
        } else {
            this.toastr.error('Please enter the Comment');
        }
    }

    navigateToSATReport(calledFrom?, event?) {
        const satReportDetails = {
            class_id: this.auth.getSessionData('class-id'),
            class_name: this.choosedData[0]?.class_name,
            student_id: this.auth.getRoleId() == '5' ? this.auth.getUserId() : '0',
            content_id: calledFrom ? calledFrom.content_id : '0',
            student_content_id: calledFrom ? calledFrom.student_content_id : '0',
            test_type_id: calledFrom ? calledFrom.test_type_id : '0',
        };
        this.auth.setSessionData('satReportData', JSON.stringify(satReportDetails));
        this.auth.setSessionData('reportCalledFrom', 'class');
        this.route.navigate(['sat-report']);
        event ? event.stopPropagation() : '';
    }

}
