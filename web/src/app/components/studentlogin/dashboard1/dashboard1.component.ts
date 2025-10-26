import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {DatePipe} from '@angular/common';
import {AuthService} from '../../../shared/service/auth.service';
import {ClassService} from '../../../shared/service/class.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: false,
    templateUrl: './dashboard1.component.html',
    styleUrls: ['./dashboard1.component.scss']
})

export class Dashboard1Component {
    public scheduleData = [];
    public classData: any = [];
    public filteredClassData = [];
    public selectedButtonForClass = '2';
    public buttonName = [{name: 'In-Progress', id: '2', count: '0', className: 'inProgress_button', badge_class: 'badge-warning', active: true},
        {name: 'Upcoming', id: '4', count: '0', className: 'upcoming_button ml-2', badge_class: 'badge-info', active: false},
        {name: 'Completed', id: '3', count: '0', className: 'completed_button ml-2', badge_class: 'badge-success', active: false}];

    public overdueTask = [{name: 'Essay Prompt Testing', class_name: 'Essay_class', type: '1', daysCount: 121},
        {name: 'CFS', class_name: 'Monday Notification', type: '2', daysCount: 2},
        {name: 'Prompt 2', class_name: '1_Essay_class', type: '1', daysCount: 11},
        {name: 'Algebra For Class 5', class_name: 'Ap Calculus', type: '2', daysCount: 45}];

    public recentTask = [{name: 'Essay Prompt Testing', class_name: 'Essay_class', type: '1', daysCount: 2},
        {name: 'CFS', class_name: 'Monday Notification', type: '2', daysCount: 3},
        {name: 'CFS - Resource', class_name: 'Algebra Class', type: '3', daysCount: 0},
        {name: 'Prompt 2', class_name: '1_Essay_class', type: '1', daysCount: 1},
        {name: 'Algebra For Class 5', class_name: 'Ap Calculus', type: '2', daysCount: 30},
        {name: 'Schedule', class_name: 'Algebra Class', type: '3', daysCount: 0}];

    public recentScore = [{name: 'Essay Prompt Testing', class_name: 'Essay_class', type: '1', score: 20},
        {name: 'CFS', class_name: 'Monday Notification', type: '2', score: 30}];

    movies = [{
        name: 'Episode I - A TypeScript class with behaviors such as handling user.',
        isDisable: false
    }, {
        name: 'Episode II - Attack of the Clones',
        isDisable: false
    }, {
        name: 'Episode III - Revenge of the Sixth',
        isDisable: false
    }, {
        name: 'Episode IV - A New Hope',
        isDisable: false
    }, {
        name: 'Episode V - The Empire Strikes Back',
        isDisable: false
    }, {
        name: 'Episode VI - Return of the Jedi',
        isDisable: false
    }
    ];
    public days = [
        {id: 1, day: 'Mon'},
        {id: 2, day: 'Tue'},
        {id: 3, day: 'Wed'},
        {id: 4, day: 'Thu'},
        {id: 5, day: 'Fri'},
        {id: 6, day: 'Sat'},
        {id: 7, day: 'Sun'},
    ];
    constructor(public datePipe: DatePipe, public auth: AuthService, public classes: ClassService, public router: Router) {
        this.getScheduleDetails();
        this.classList();
    }

    delete(index: any) {
        this.movies.splice(index, 1);
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }

    getScheduleDetails() {
        const date = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            date
        };
        this.classes.overallClassAttendance(data).subscribe((successData) => {
            this.overallClassAttendanceSuccess(successData);
        }, (error) => {
            console.log(error);
        });
    }

    overallClassAttendanceSuccess(successData) {
        if (successData.IsSuccess) {

            const scheduleDataAlt = successData.ResponseObject;
            this.scheduleData = JSON.parse(JSON.stringify(scheduleDataAlt));
            this.scheduleData.forEach((item, index) => {
                console.log(index, 'index');
                if(index == 2) {
                    item.class_name = 'Arya Vikraman - Practice Class For Academy - DO NOT DELETE UNTIL END OF DEC'
                }
            });
        }
    }

    routePage(type) {
        if (type == 'schedule') {
            this.router.navigate(['schedule/daily-schedule']);
        } else if (type == 'class') {
            this.router.navigate(['/studentlogin/list-class']);
        }
    }

    classList() {
        const data = {
            platform: 'web',
            type: '1',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
        };
        this.classes.studentClassDashboardList(data).subscribe((successData) => {
                this.classListSuccess(successData);
            },
            (error) => {
                console.error(error, 'class_list');
            });
    }

    classListSuccess(successData) {
        if (successData.IsSuccess) {
            this.classData = JSON.stringify(successData.ResponseObject);
            this.buttonName.forEach(button => button.count = '0');
            successData.ResponseObject.forEach(item => {
                const button = this.buttonName.find(btn => btn.id === item.status);
                if (button) {
                    button.count = (parseInt(button.count) + 1).toString();
                }
            });
            this.filteredClassData = successData.ResponseObject.filter((value) => {
                return value.status == this.selectedButtonForClass;
            });
            this.filteredClassData.forEach((item, index) => {
                console.log(index, 'index');
                if(index == 2) {
                    item.class_name = 'Arya Vikraman - Practice Class For Academy - DO NOT DELETE UNTIL END OF DEC'
                }
            });
            console.log(this.filteredClassData);
        }
    }

    updateClassData(id) {
        this.selectedButtonForClass = id;
        this.buttonName.forEach(items => items.active = items.id == id);
        const classData = JSON.parse(this.classData);
        this.filteredClassData = classData.filter((value) => {
            return value.status == id;
        });
    }
    dayFromInt(val) {
        return val == 1 ? 'MON' : val == 2 ? 'TUE' : val == 3 ? 'WED' : val == 4 ? 'THU' : val == 5 ? 'FRI' : val == 6 ? 'SAT' : 'SUN'
    }
    redirectToAnnouncement(value, event, type = '') {
        console.log(value, 'redirectedValue');
        if (this.auth.getRoleId() == '5') {
            this.auth.setSessionData('class-id', value.class_id);
            this.auth.setSessionData('schedule_id', value.schedule_id);
            this.router.navigate(['/studentlogin/class-detail/' + type]);
            event.stopPropagation();
        } else {
            console.log(value, 'value');
            this.auth.setSessionData('announcement-class', [value.class_id]);
            this.router.navigate(['/announcement/list/add']);
            event.stopPropagation();
        }
    }
    classDetailsService(value, type = '', event?){}
}
