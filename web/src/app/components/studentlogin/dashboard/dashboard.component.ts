import {Component, inject, OnDestroy} from '@angular/core';
import {DatePipe} from '@angular/common';
import {AuthService} from '../../../shared/service/auth.service';
import {ClassService} from '../../../shared/service/class.service';
import {Router} from '@angular/router';
import {SseClient} from 'ngx-sse-client';
import {Subscription} from 'rxjs';
import {NewsubjectService} from '../../../shared/service/newsubject.service';

@Component({
    selector: 'app-dashboard',
    standalone: false,
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnDestroy{
    public scheduleData = [];
    public classData: any = [];
    public filteredClassData = [];
    public selectedButtonForClass = '2';
    public globalAnnouncementList = [];
    public buttonName = [{name: 'In-Progress', id: '2', count: '0', className: 'inProgress_button', badge_class: 'badge-warning', active: true},
        {name: 'Upcoming', id: '4', count: '0', className: 'upcoming_button ml-2', badge_class: 'badge-info', active: false},
        {name: 'Completed', id: '3', count: '0', className: 'completed_button ml-2', badge_class: 'badge-success', active: false}];

    public overdueTask = [];

    public recentTask = [];

    public recentScore = [];

    public recentUpdate = [];

    public days = [
        {id: 1, day: 'M', value: 'Mon'},
        {id: 2, day: 'T', value: 'Tue'},
        {id: 3, day: 'W', value: 'Wed'},
        {id: 4, day: 'T', value: 'Thu'},
        {id: 5, day: 'F', value: 'Fri'},
        {id: 6, day: 'S', value: 'Sat'},
        {id: 7, day: 'S', value: 'Sun'},
    ];

    public auth = inject(AuthService);
    public classes = inject(ClassService);
    public router = inject(Router);
    public sseClient = inject(SseClient);
    public newSubject = inject(NewsubjectService);
    private subscriptions: Subscription[] = [];

    constructor(public datePipe: DatePipe) {
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
                const dayMap = { Mon: '1', Tue: '2', Wed: '3', Thu: '4', Fri: '5', Sat: '6', Sun: '7' };

                classListData.classList.forEach((item) => {
                    const processMessage = (count: number, messageType: string, messages: any[]) => {
                        if (count !== 0) {
                            this.recentUpdate.push({
                                class_id: item.class_id,
                                class_name: item.class_name,
                                message_type: messageType,
                                message: messages.pop(),
                            });
                        }
                    };

                    processMessage(item.inbox_count, 'inbox', item.inbox_message);
                    processMessage(item.announcement_count, 'announcement', item.announcement_message);

                    item.availabilityDate.forEach((items) => {
                        items.inbox_count = item.inbox_count;
                        items.announcement_count = item.announcement_count;
                        if (items.slotday === dayMap[todayDate] && item.status == '2') {
                            this.scheduleData.push(items);
                        }
                    });
                });
                this.filteredClassData = classListData.classList.filter((value) => {
                    return value.status == this.selectedButtonForClass;
                });
                console.log(this.scheduleData, 'sss');
                console.log(this.recentUpdate, 'recentUpdate');
                console.log(this.filteredClassData, 'filterClassData');
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
}
