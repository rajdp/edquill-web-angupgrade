import {Component, inject, OnDestroy, TemplateRef, ViewChild} from '@angular/core';
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

@Component({
    selector: 'app-dashboard',
    standalone: false,
    templateUrl: './dashboard2.component.html',
    styleUrls: ['./dashboard2.component.scss']
})

export class Dashboard2Component implements OnDestroy{
    public modalRef: NgbModalRef;
    public scheduleData = [];
    public classData: any = [];
    public filteredClassData = [];
    public selectedButtonForClass = '2';
    public globalAnnouncementList = [];
    public toastr = inject(ToastrService);
    public buttonName = [{name: 'In-Progress', id: '2', count: '0', className: 'inProgress_button', badge_class: 'badge-warning', active: true},
        {name: 'Upcoming', id: '4', count: '0', className: 'upcoming_button ml-2', badge_class: 'badge-info', active: false},
        {name: 'Completed', id: '3', count: '0', className: 'completed_button ml-2', badge_class: 'badge-success', active: false}];

    public overdueTask = [];

    public recentTask = [];

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
    public student = inject(StudentService);
    private subscriptions: Subscription[] = [];
    public ErrorTitle = '';
    public message = '';
    public classInfo: any;
    public customLoader = false;
    public selectedClass: any;

    @ViewChild('throwError') throwError: TemplateRef<any>;
    @ViewChild('showInform') showInform: TemplateRef<any>;
    @ViewChild('zoomDialog') zoomDialog: TemplateRef<any>;
    @ViewChild('zoomDialog1') zoomDialog1: TemplateRef<any>;

    constructor(public datePipe: DatePipe, private modalService: NgbModal) {
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
    }

    commonService() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
        this.scheduleData = [];
        this.recentUpdate = [];
        this.filteredClassData = [];
        this.recentScore = [];
        this.recentTask = [];
        this.overdueTask = [];
        this.buttonName.forEach(button => button.count = '0');
        this.globalAnnouncement();
        this.serviceList();
    }

    ngOnDestroy() {
        this.auth.setSessionData('sse_loader', 'false');
        this.subscriptions.forEach(sub => sub.unsubscribe());
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

        const classService = this.sseClient.stream('student/classList', { keepAlive: false, reconnectionDelay: 10000,
            responseType: 'event' }, {body: payload}, 'POST').subscribe((event) => {
            if (event.type === 'error') {
                const errorEvent = event as ErrorEvent;
            } else if (event.type == 'message') {
                const messageEvent = event as MessageEvent;
                const classListData = JSON.parse(messageEvent.data);
                console.log(classListData.classList, 'classListData');
                this.classData = JSON.stringify(classListData.classList ?? []);
                this.buttonName.forEach(button => button.count = '0');
                classListData.classList.forEach(item => {
                    const button = this.buttonName.find(btn => btn.id === item.status);
                    if (button) {
                        button.count = (parseInt(button.count) + 1).toString();
                    }
                });
                const todayDate = this.datePipe.transform(new Date(), 'EEE');
                console.log(todayDate, 'todayData');
                const dayMap = { Mon: '1', Tue: '2', Wed: '3', Thu: '4', Fri: '5', Sat: '6', Sun: '7' };

                classListData.classList.forEach((item) => {
                    const processMessage = (count: number, messageType: string, messages: any[]) => {
                        if (count !== 0) {
                            this.recentUpdate.push({
                                class_id: item.class_id,
                                class_name: item.class_name,
                                message_type: messageType,
                                message: messages.pop(),
                                class_details: item
                            });
                        }
                    };

                    processMessage(item.inbox_count, 'inbox', item.inbox_message);
                    processMessage(item.announcement_count, 'announcement', item.announcement_message);

                    item.availabilityDate.forEach((items) => {
                        items.inbox_count = item.inbox_count;
                        items.announcement_count = item.announcement_count;
                        items.class_start_date = item.start_date;
                        items.class_end_date = item.end_date;
                        items.subject_name = item.subject_name;
                        items.grade_name = item.grade_name;
                        items.class_details = item;
                        if (items.slotday === dayMap[todayDate] && item.status == '2') {
                            this.scheduleData.push(items);
                        }
                    });
                });
                this.filteredClassData = classListData.classList.filter((value) => {
                    return value.status == this.selectedButtonForClass;
                });
            }
        });

        const curriculumPayload = payload;
        delete curriculumPayload.type;
        const curriculumService = this.sseClient.stream('student/curriculumList', { keepAlive: false, reconnectionDelay: 10000,
            responseType: 'event' }, {body: curriculumPayload}, 'POST').subscribe((event) => {
            if (event.type === 'error') {
                const errorEvent = event as ErrorEvent;
            } else if (event.type == 'message') {
                const messageEvent = event as MessageEvent;
                const curriculumListData = JSON.parse(messageEvent.data);
                console.log(curriculumListData, 'curriculumListData');
                curriculumListData.forEach((curriculumData) => {
                    curriculumData.overdueStatus = true;
                    if (curriculumData.overdue < 0) {
                        curriculumData.overdueStatus = false;
                        Math.abs(curriculumData.overdue);
                        curriculumData.overdue = Math.abs(curriculumData.overdue);
                    }
                    if ((curriculumData.student_content_status == '1' && curriculumData.overdueStatus) || curriculumData.student_content_status == '2') {
                        this.recentTask.push(curriculumData);
                    } else if (curriculumData.student_content_status == '3') {
                        this.recentScore.push(curriculumData);
                    } else if (curriculumData.student_content_status == '1' && !curriculumData.overdueStatus && curriculumData.content_type != '1') {
                        this.overdueTask.push(curriculumData);
                    }
                });
                console.log(this.recentTask, 'recent Task');
                console.log(this.recentScore, 'recent Score');
                console.log(this.overdueTask, 'overdue Task');
                console.log(this.scheduleData, 'schedule data');
            }
        });

        this.subscriptions.push(classService, curriculumService);
    }

    updateClassData(id) {
        this.selectedButtonForClass = id;
        this.buttonName.forEach(items => items.active = items.id == id);
        const classData = JSON.parse(this.classData);
        this.filteredClassData = classData.filter((value) => {
            return value.status == id;
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
                // if (this.settingValue == '2') {
                //     this.modalRef = this.modalService.open(this.zoomDialog, {size: 's'});
                // } else if (this.settingValue == '1') {
                //     this.navigateOutsideZoom(successData.ResponseObject);
                // } else if (this.settingValue == '0') {
                // }
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

    answerPage(value) {
        if (value.content_type == '2') {
            this.auth.setSessionData('ContentType',  'Assignments');
            if (value.student_content_status != 3) {
                this.auth.setSessionData('classDetails', JSON.stringify(value));
                this.router.navigate(['/studentlogin/answering']);
            } else {
                this.auth.setSessionData('student-card', JSON.stringify(value));
                this.router.navigate(['/studentlogin/score-card']);
            }
        } else if (value.content_type == '3') {
            this.checkContentTime(value);
        } else if (value.content_type == '1') {
            this.router.navigate(['/studentlogin/resource/' + value.content_id]);
        }
    }

    checkContentTime(selectedData) {
        let data;
        data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: selectedData.class_id,
            content_id: selectedData.content_id,
            class_content_id: selectedData.class_content_id,
            school_id: this.auth.getSessionData('school_id')
        };
        this.student.checkTime(data).subscribe((successData) => {
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
                this.auth.setSessionData('classDetails', JSON.stringify(selectedData));
                this.router.navigate(['/studentlogin/answering']);
            }
        } else {
            this.message = successData.ResponseObject;
            this.ErrorTitle = selectedData.class_name;
            this.modalRef = this.modalService.open(this.throwError, {size: 'md'});
        }
    }
}
