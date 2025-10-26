import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {NewsubjectService} from '../../../shared/service/newsubject.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-schedule-page',
    templateUrl: './schedule-page.component.html',
    styleUrls: ['./schedule-page.component.scss']
})
export class SchedulePageComponent implements OnInit {
    public page = 'Attendance';
    public schoolid = '';

    constructor(public auth: AuthService, public newSubject: NewsubjectService, public route: Router) {
        this.newSubject.schoolChange.subscribe(params => {
            if (params != '') {
                if (this.route.url.includes('schedule-page')) {
                    this.schoolid = this.auth.getSessionData('school_id');
                }
            } else {
                this.schoolid = this.auth.getSessionData('school_id');
            }
        });
    }

    ngOnInit(): void {
    }

}
