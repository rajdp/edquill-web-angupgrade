import {Component, inject, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {DatePipe} from '@angular/common';
import {AuthService} from '../../../shared/service/auth.service';
import {ClassService} from '../../../shared/service/class.service';
import {Router} from '@angular/router';
import {SseClient} from 'ngx-sse-client';
import {Subscription} from 'rxjs';
import {NewsubjectService} from '../../../shared/service/newsubject.service';
import {ToastrService} from 'ngx-toastr';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ZoomServiceService} from '../../../shared/service/zoom-service.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {StudentService} from '../../../shared/service/student.service';
import {DomSanitizer} from '@angular/platform-browser';
import {CreatorService} from '../../../shared/service/creator.service';
import {EnvironmentService} from '../../../environment.service';
import {CommonService} from '../../../shared/service/common.service';

@Component({
    selector: 'app-dashboard',
    standalone: false,
    templateUrl: './dashboard3.component.html',
    styleUrls: ['./dashboard3.component.scss']
})

export class Dashboard3Component implements OnInit, OnDestroy{
    public modalRef: NgbModalRef;
    public scheduleData = [];
    public classData: any = [];
    public filteredClassData = [];
    public selectedButtonForClass = '2';
    public globalAnnouncementList = [];
    public toastr = inject(ToastrService);
    public buttonName = [{name: 'In-Progress', id: '2', count: '0', className: 'inProgress_button', badge_class: 'badge-warning', active: true},
        {name: 'Upcoming', id: '1', count: '0', className: 'upcoming_button ml-2', badge_class: 'badge-info', active: false},
        {name: 'Completed', id: '3', count: '0', className: 'completed_button ml-2', badge_class: 'badge-success', active: false}];

    public overdueTask = [];

    public upcomingTask = [];

    public recentScore = [];

    public recentUpdate = [];

    public days = [
        {id: 1, day: 'Mo', value: 'Mon'},
        {id: 2, day: 'Tu', value: 'Tue'},
        {id: 3, day: 'We', value: 'Wed'},
        {id: 4, day: 'Th', value: 'Thu'},
        {id: 5, day: 'Fr', value: 'Fri'},
        {id: 6, day: 'Sa', value: 'Sat'},
        {id: 7, day: 'Su', value: 'Sun'},
    ];

    public auth = inject(AuthService);
    public classes = inject(ClassService);
    public router = inject(Router);
    public sseClient = inject(SseClient);
    public newSubject = inject(NewsubjectService);
    public zoomService = inject(ZoomServiceService);
    public commondata = inject(CommonDataService);
    public commonServiceFile = inject(CommonService);
    public student = inject(StudentService);
    public creator = inject(CreatorService);
    private subscriptions: Subscription[] = [];
    public ErrorTitle = '';
    public message = '';
    public classInfo: any;
    public customLoader = false;
    public selectedClass: any;
    public contentData: any;
    public testContentData: any;

    @ViewChild('throwError') throwError: TemplateRef<any>;
    @ViewChild('showInform') showInform: TemplateRef<any>;
    @ViewChild('zoomDialog') zoomDialog: TemplateRef<any>;
    @ViewChild('zoomDialog1') zoomDialog1: TemplateRef<any>;
    @ViewChild('submitPopUp') submitPopUp: TemplateRef<any>;
    @ViewChild('submitTestPopUp') submitTestPopUp: TemplateRef<any>;
    @ViewChild('startTimerDuration') startTimerDuration: TemplateRef<any>;
    public contentDetails: any;
    @ViewChild('feedbackStatus') feedbackStatus: TemplateRef<any>;
    public popUpMessage = '';

    constructor(public datePipe: DatePipe, private modalService: NgbModal, private sanitizer: DomSanitizer, public env: EnvironmentService) {
        this.auth.setSessionData('sse_loader', 'true');
        this.newSubject.schoolChange.subscribe(params => {
            if (params != '') {
                if (this.router.url.includes('student/dashboard')) {
                    this.commonService();
                }
            } else {
                this.commonService();
            }
        });
        this.creator.changeViewList(true);
    }

    commonService() {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
        this.subscriptions = [];
        this.scheduleData = [];
        this.recentUpdate = [];
        this.filteredClassData = [];
        this.recentScore = [];
        this.upcomingTask = [];
        this.overdueTask = [];
        this.buttonName.forEach(button => button.count = '0');
        this.globalAnnouncement();
        this.serviceList();
    }

    ngOnInit() {
        this.auth.setDashboardRef(this);
    }

    ngOnDestroy() {
        this.creator.changeViewList(false);
        this.auth.setDashboardRef(this);
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
        this.subscriptions = [];
        this.auth.setSessionData('sse_loader', 'false');
    }

    globalAnnouncement() {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(payload, 'school/announcementList').subscribe((successData: any) => {
            this.globalAnnouncementList = successData.IsSuccess ? successData.ResponseObject : [];
            console.log(this.globalAnnouncementList, 'sssss');
        }, (error) => console.error(error, 'error_announcement'));
    }

    routePage(type) {
        if (type == 'schedule') {
            this.router.navigate(['schedule/daily-schedule']);
        } else if (type == 'class') {
            this.router.navigate(['/studentlogin/list-class']);
        }
    }

    enterList(item) {
        console.log(item, 'itens');
        if (item.class_details.status == '1') {
            this.toastr.info('This Class Not Started');
        } else {
            this.auth.setSessionData('class-id', item.class_details.class_id);
            this.auth.setSessionData('schedule_id', item.class_details.schedule_id);
            this.router.navigate(['/studentlogin/class-detail']);
        }
    }

    classEnterList(item) {
        if (item.status == '3') {
            this.message = 'This Class has already completed';
            this.ErrorTitle = item.class_name;
            this.modalRef = this.modalService.open(this.throwError, {size: 'md'});
        } else if (item.status == '1') {
            this.toastr.info('This Class Not Started');
        } else {
            this.auth.setSessionData('class-id', item.class_id);
            this.auth.setSessionData('schedule_id', item.schedule_id);
            this.router.navigate(['/studentlogin/class-detail']);
        }
    }

    redirectToAnnouncementOrInbox(value, messageType = '') {
        console.log(value, 'redirectedValue');
        this.auth.setSessionData('class-id', value.class_id);
        this.auth.setSessionData('schedule_id', value.class_details.schedule_id);
        this.router.navigate(['/studentlogin/class-detail/' + (messageType != '' ? messageType : value.message_type)]);
        event.stopPropagation();
    }

    serviceList() {
        const payload = {
            platform: 'web',
            type: '1',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            response_type: 'SSE'
        };

        // Fetch class list immediately on load
        this.fetchClassList(payload);

        // Then fetch every 60 seconds (60000ms)
        const classListInterval = setInterval(() => {
            this.fetchClassList(payload);
        }, 60000);

        // Store interval reference for cleanup
        this.subscriptions.push({
            unsubscribe: () => clearInterval(classListInterval)
        } as any);

        // Fetch curriculum list immediately on load
        this.fetchCurriculumList(payload);

        // Then fetch every 60 seconds (60000ms)
        const curriculumListInterval = setInterval(() => {
            this.fetchCurriculumList(payload);
        }, 60000);

        // Store interval reference for cleanup
        this.subscriptions.push({
            unsubscribe: () => clearInterval(curriculumListInterval)
        } as any);
    }

    fetchClassList(payload: any) {
        const classService = this.sseClient.stream('student/classList', { keepAlive: false, reconnectionDelay: 0,
            responseType: 'event' }, {body: payload}, 'POST').subscribe((event) => {
            if (event.type === 'error') {
                const errorEvent = event as ErrorEvent;
                console.error('Class list error:', errorEvent);
            } else if (event.type == 'message') {
                const messageEvent = event as MessageEvent;
                const classListData = JSON.parse(messageEvent.data);
                console.log(classListData.classList, 'classListData');
                classListData.classList = classListData.classList.filter((data, i, a) => i === a.indexOf(a.find(f => f.class_id === data.class_id)));

                this.classData = JSON.stringify(classListData.classList ?? []);
                this.buttonName.forEach(button => button.count = '0');
                classListData.classList.forEach(item => {
                    // Use classDate_status which is returned by the backend
                    const button = this.buttonName.find(btn => btn.id === item.classDate_status);
                    if (button) {
                        button.count = (parseInt(button.count) + 1).toString();
                    }
                });
                const todayDate = this.datePipe.transform(new Date(), 'EEE');
                console.log(todayDate, 'todayData');
                const dayMap = { Mon: '1', Tue: '2', Wed: '3', Thu: '4', Fri: '5', Sat: '6', Sun: '7' };
                this.recentUpdate = [];
                this.scheduleData = [];
                classListData.classList.forEach((item) => {
                    const processMessage = (messageType: string, messages: any[]) => {
                        messages.forEach((messageData) => {
                            this.recentUpdate.push({
                                class_id: item.class_id,
                                class_name: item.class_name,
                                message_type: messageType,
                                message: messageData,
                                class_details: item
                            });
                        });
                    };

                    processMessage('inbox', item.inbox_message);
                    processMessage('announcement', item.announcement_message);

                    item.availabilityDate.forEach((items) => {
                        items.inbox_count = item.inbox_count;
                        items.announcement_count = item.announcement_count;
                        items.class_start_date = item.start_date;
                        items.class_end_date = item.end_date;
                        items.subject_name = item.subject_name;
                        items.grade_name = item.grade_name;
                        items.class_details = item;
                        // Use classDate_status instead of status
                        if (items.slotday === dayMap[todayDate] && item.classDate_status == '2') {
                            this.scheduleData.push(items);
                        }
                    });
                });
                console.log(this.scheduleData, 'schedule');
                this.filteredClassData = [];
                this.filteredClassData = classListData.classList.filter((value) => {
                    // Use classDate_status instead of status
                    return value.classDate_status == this.selectedButtonForClass;
                });

                this.recentUpdate.forEach((item) => {
                    if (item.message_type != 'inbox') {
                        item.message.convertedText = this.convertInnerHtmlToNormalText(item.message.note, 40);
                        item.message.convertedFullText = this.convertInnerHtmlToNormalText(item.message.note);
                    } else {
                        item.message.convertedFullText = item.message.body;
                        item.message.convertedText = item.message.body.length > 40 ? item.message.body.slice(0, 40) + '......' :
                            item.message.body;
                    }
                });
                const now = new Date();
                const oneMonthAgo = new Date();
                oneMonthAgo.setMonth(now.getMonth() - 1);

                this.recentUpdate = this.recentUpdate.filter(item => {
                        const itemDate = new Date(item.message.created_date);
                        return itemDate >= oneMonthAgo && itemDate <= now;
                    })
                    .sort((a, b) => new Date(b.message.created_date).getTime() - new Date(a.message.created_date).getTime());
                this.recentUpdate = this.recentUpdate.slice(0 , 10);
                console.log(this.recentUpdate, 'res');
            }
        });
        
        this.subscriptions.push(classService);
    }

    fetchCurriculumList(payload: any) {
        const curriculumPayload = {...payload};
        delete curriculumPayload.type;
        const curriculumService = this.sseClient.stream('student/curriculumList', { keepAlive: false, reconnectionDelay: 0,
            responseType: 'event' }, {body: curriculumPayload}, 'POST').subscribe((event) => {
            if (event.type === 'error') {
                const errorEvent = event as ErrorEvent;
                console.error('Curriculum list error:', errorEvent);
            } else if (event.type == 'message') {
                const messageEvent = event as MessageEvent;
                const curriculumListData = JSON.parse(messageEvent.data);
                console.log(curriculumListData, 'curriculumListData');
                this.upcomingTask = curriculumListData.LatestCurriculum;
                this.recentScore = [];
                this.overdueTask = [];
                curriculumListData.curriculumList.forEach((curriculumData) => {
                    curriculumData.downloadPDF = curriculumData.answerkey_path ? this.commonServiceFile.convertBase64(curriculumData.answerkey_path) : [];
                    curriculumData.overdueStatus = true;
                    if (curriculumData.overdue < 0) {
                        curriculumData.overdueStatus = false;
                        Math.abs(curriculumData.overdue);
                        curriculumData.overdue = Math.abs(curriculumData.overdue);
                    }
                    if (curriculumData.student_content_status == '3') {
                        this.recentScore.push(curriculumData);
                    } else if (!curriculumData.overdueStatus && curriculumData.content_type != '1') {
                        this.overdueTask.push(curriculumData);
                    }
                });
                this.recentScore = this.recentScore.slice(0 , 10);
                this.overdueTask = this.overdueTask.slice(0 , 10);
            }
        });
        
        this.subscriptions.push(curriculumService);
    }

    updateClassData(id) {
        this.selectedButtonForClass = id;
        this.buttonName.forEach(items => items.active = items.id == id);
        const classData = JSON.parse(this.classData);
        this.filteredClassData = classData.filter((value) => {
            // Use classDate_status instead of status
            return value.classDate_status == id;
        });
    }

    checkAvailabilityDate(data, id) {
        return data.availabilityDate.some((code => code.slotday == id));
    }

    returnDayTitle(data, id, day) {
        if (data.availabilityDate.some((code => code.slotday == id))) {
            let value = '';
            data.availabilityDate.forEach(item => {
                if (item.slotday == id) {
                    value = value + (value != '' ? ', ' : '') + day + ' : ' + item.slotstarttime + ' - ' + item.slotendtime;
                }
            });
            return value;
        } else {
            return '';
        }
    }

    onSave() {
        this.modalRef.close();
    }

    showInformation(data, event) {
        this.classInfo = data;
        this.modalRef = this.modalService.open(this.showInform, {size: 'sm'});
        event.stopPropagation();
    }

    getMeetingLink(datum, index) {
        console.log(datum, 'datum');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: datum.class_id,
            class_type: datum.availabilityDate[index].class_type,
            allow_zoom_api: datum.allow_zoom_api,
            notes: !datum.notes ? [] : datum.notes,
            schedule_id: datum.availabilityDate[index].shechdule_id,
            slotday: datum.availabilityDate[index].slotday,
            slotstarttime: datum.availabilityDate[index].slotstarttime,
            slotendtime: datum.availabilityDate[index].slotendtime,
            slotselected: datum.availabilityDate[index].slotselected,
        };
        this.classes.zoomInstant(data).subscribe((successData: any) => {
            this.zoomInstantSuccess(successData, datum);
        }, (error) => {
            this.toastr.error(error.ErrorObject, 'Failed!');
            this.commondata.showLoader(false);
        });
    }

    zoomInstantSuccess(successData, datum) {
        this.commondata.showLoader(false);
        if (successData.IsSuccess) {
            console.log(successData.ResponseObject, 'successData.ResponseObject');
            if (datum.allow_zoom_api == '0') {
                this.navigateOutsideZoom(successData.ResponseObject);
            } else if (datum.allow_zoom_api == '1') {
                this.zoomService.initZoomMeeting(datum);
            }
        } else {
            this.toastr.error(successData.ErrorObject, 'Failed!');
        }
    }

    navigateOutsideZoom(data) {
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        if (this.selectedClass.allow_zoom_api == '0') {
            link.setAttribute('href', data.meeting_link);
            console.log(data.meeting_link, 'data.meeting_link');
        } else {
            link.setAttribute('href', data.teacher_link);
        }
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    openZoomDialog(data, event) {
        if (!this.customLoader) {
            this.customLoader = true;
            this.selectedClass = data.class_details;
            console.log(this.selectedClass, 'selectedClass');
            console.log(data.class_details, 'class_details');
            if (data.class_details.availabilityDate.length == 0) {
                this.modalRef = this.modalService.open(this.zoomDialog1, {size: 's'});
            } else {
                if (this.selectedClass.allow_zoom_api == '0') {
                    this.navigateOutsideZoom(data.class_details.availabilityDate[0]);
                } else {
                    this.getMeetingLink(data.class_details, 0);
                }
            }
            this.customLoader = false;
        }
        event.stopPropagation();
    }

    answerPage(value){
        console.log(value, 'value');
        if (value.content_type == '2') {
            this.auth.setSessionData('ContentType',  'Assignments');
            if (value.student_content_status != 3) {
                if (value.content_format == '3' && value.content_started_at == null && (value.student_content_status == '1' || value.student_content_status == '2')) {
                    this.contentDetails = value;
                    if (value?.is_test == '1') {
                        this.modalRef = this.modalService.open(this.startTimerDuration);
                    } else {
                        this.updateContentStatus(this.contentDetails);
                    }
                } else if (value.content_format == '3' && value.content_started_at && value.content_started_at != '' &&
                    value.content_started_at && value.content_duration != '0' && (value.student_content_status == '1' || value.student_content_status == '2')) {
                    this.auth.getCurrentDateAndTime(value, '', value?.is_test == '1' ? 'dashboard' : '').subscribe((isAllowed: boolean) => {
                        if (!isAllowed) {
                            console.log('Access denied');
                            this.contentData = value;
                            console.log(this.contentData, 'contentData');
                            this.modalRef = this.modalService.open(this.submitPopUp);
                        }
                    });
                } else {
                    value.available_content_duration = value.content_duration != '0' ? parseInt(value.content_duration) * 60 :
                        value.content_time_taken != '0' ? parseInt(value.content_time_taken) : 0;
                    if (value?.is_test == '1') {
                        this.testDetails(value);
                    } else {
                        this.auth.setSessionData('classDetails', JSON.stringify(value));
                        this.router.navigate(['/studentlogin/answering']);
                    }
                }
            } else {
                this.auth.setSessionData('student-card', JSON.stringify(value));
                this.router.navigate(['/studentlogin/score-card']);
            }
        } else if (value.content_type == '3') {
            if (value.student_content_status == 3) {
                this.auth.setSessionData('ContentType', 'Quiz');
                this.auth.setSessionData('student-card', JSON.stringify(value));
                this.router.navigate(['/studentlogin/score-card']);
            } else {
                this.checkContentTime(value);
            }
        } else if (value.content_type == '1') {
            this.router.navigate(['/studentlogin/resource/' + value.content_id]);
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
                    this.router.navigate(['/studentlogin/answering']);
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
        await this.commonService();
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
                    await this.subscriptions.forEach(sub => sub.unsubscribe());
                    this.subscriptions = [];
                    this.scheduleData = [];
                    this.recentUpdate = [];
                    this.filteredClassData = [];
                    this.recentScore = [];
                    this.upcomingTask = [];
                    this.overdueTask = [];
                    this.buttonName.forEach(button => button.count = '0');
                    this.globalAnnouncement();
                    await this.serviceList();
                }
            } catch (error) {
                console.error('Error during submitAnswer:', error);
            }
        }
    }

    checkContentTime(selectedData) {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: selectedData.class_id,
            content_id: selectedData.content_id,
            class_content_id: selectedData.class_content_id,
            school_id: this.auth.getSessionData('school_id')
        };
        this.student.checkTime(payload).subscribe((successData) => {
                this.checkContentTimeSuccess(successData, selectedData);
            },
            (error) => {
                console.error(error, 'check_time');
            });
    }

    checkContentTimeSuccess(successData, selectedData) {
        if (successData.IsSuccess) {
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
                this.auth.setSessionData('ContentType', 'Quiz');
                this.auth.setSessionData('student-card', JSON.stringify(selectedData));
                this.router.navigate(['/studentlogin/score-card']);
            } else {
                this.auth.setSessionData('ContentType', 'Quiz');
                if (selectedData.content_format == '3' && selectedData.content_started_at == null &&
                    (selectedData.student_content_status == '1' || selectedData.student_content_status == '2')) {
                        this.contentDetails = selectedData;
                        if (selectedData?.is_test == '1') {
                            this.modalRef = this.modalService.open(this.startTimerDuration);
                        } else {
                            this.updateContentStatus(this.contentDetails);
                        }
                } else if (selectedData.content_format == '3' && selectedData.content_started_at && selectedData.content_started_at != ''
                    && selectedData.content_started_at && selectedData.content_duration != '0' &&
                    (selectedData.student_content_status == '1' || selectedData.student_content_status == '2')) {
                    this.auth.getCurrentDateAndTime(selectedData, '', selectedData?.is_test == '1' ? 'dashboard' : '').subscribe((isAllowed: boolean) => {
                        if (!isAllowed) {
                            console.log('Access denied');
                            this.contentData = selectedData;
                            this.modalRef = this.modalService.open(this.submitPopUp);
                        }
                    });
                } else {
                    this.auth.setSessionData('ContentType', 'Quiz');
                    if (selectedData?.is_test == '1') {
                        this.testDetails(selectedData);
                    } else {
                        this.auth.setSessionData('classDetails', JSON.stringify(selectedData));
                        this.router.navigate(['/studentlogin/answering']);
                    }
                }
            }
        } else {
            this.message = successData.ResponseObject;
            this.ErrorTitle = selectedData.class_name;
            this.modalRef = this.modalService.open(this.throwError, {size: 'md'});
        }
    }

    viewAnswerKeyPdf(event, list) {
        this.auth.setSessionData('view_pdf_url_details', JSON.stringify(list));
        window.open(this.env.envProperties.envURL + '#/studentlogin/viewAnswerKeyPdf', '_blank');
        event.stopPropagation();
    }

    convertInnerHtmlToNormalText(htmContent, splitCount = 0) {
        const div = document.createElement('div');
        div.innerHTML = htmContent;
        let html = '';
        if (splitCount != 0) {
            const words = div.innerText;
            if (words.length > splitCount) {
                html = words.slice(0, splitCount) + '......';
            } else {
                html = div.innerText;
            }
        } else {
            html = div.innerText;
        }
        return html;
    }
}
