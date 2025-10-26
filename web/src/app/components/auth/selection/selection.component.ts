import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {LoginService} from '../../../shared/service/login.service';
import {AuthService} from '../../../shared/service/auth.service';
import {Router} from '@angular/router';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {CommonService} from '../../../shared/service/common.service';
import {NewsubjectService} from '../../../shared/service/newsubject.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-selection',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './selection.component.html',
    styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
    public webHost: any;
    public listData: any;
    public schoolDetails: any = [];
    public common = inject(CommonService);
    public behavior = inject(NewsubjectService);
    public timeZoneList: any = [];

    constructor(
        public commondata: CommonDataService, public sanitizer: DomSanitizer,
        public auth: AuthService, public confi: ConfigurationService, public loginService: LoginService,
        public router: Router) {
        this.webHost = this.confi.getimgUrl();
        this.listData = JSON.parse(this.auth.getSessionData('permission'));
        this.schoolDetails = JSON.parse(this.auth.getSessionData('school_details'));
        console.log(this.listData, 'console.log(data, \'school_id\');');
    }

    ngOnInit(): void {
    }

    loginIntoSchool(data) {
        console.log(data, 'dasdasdas');
        this.auth.setSessionData('rista_data1', JSON.stringify(data));
        this.auth.setSessionData('school_id', data.school_id);
        this.auth.setSessionData('school_name', data.name);
        this.auth.setSessionData('school_profile', data.profile_url);
        this.auth.setSessionData('resourceAccess', false);

        this.loginService.changeHomePage(this.auth.getRoleId());
        if (this.auth.getRoleId() == '2') {
            this.getTimeZone();
            setTimeout(() => {
                data.allow_dashboard == '1' ? this.router.navigate(['/dashboard/default']) :
                    this.router.navigate(['/schedule/schedule-page']);
            }, 700);
        } else if (this.auth.getRoleId() == '3') {
            this.auth.setSessionData('designation', data.designation);
            this.router.navigate(['/repository/content-home']);
        } else if (this.auth.getRoleId() == '4') {
            this.getTimeZone();
            this.auth.setSessionData('teacher_type', data.individual_teacher);
            this.auth.setSessionData('teacher_id', data.school_idno);
            setTimeout(() => {
                this.router.navigate(['/schedule/schedule-page']);
            }, 700);
        } else if (this.auth.getRoleId() == '5') {
            this.getTimeZone();
            this.auth.setSessionData('selected-name', data.school_id);
            const getClassCode = localStorage.getItem('studentClassCode');
            if (getClassCode) {
                if (getClassCode != '') {
                    this.router.navigate(['/studentlogin/enrollclass']);
                } else {
                    this.router.navigate(['/student/dashboard']);
                    // this.router.navigate(['/studentlogin/list-home']);
                }
            } else {
                // this.router.navigate(['/studentlogin/list-home']);
                this.router.navigate(['/student/dashboard']);
            }
        } else if (this.auth.getRoleId() == '6') {
            this.router.navigate(['/dashboard/default']);
        } else if (this.auth.getRoleId() == '7') {
            this.auth.setSessionData('teacher_type', data.individual_teacher);
            this.router.navigate(['/student-content/list-content/old']);
        }
    }

    getTimeZone() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.common.timeZone(data).subscribe((successData) => {
                this.timeZoneSuccess(successData);
            },
            (error) => {
                console.error(error, 'error');
            });
    }

    timeZoneSuccess(successData) {
        if (successData.IsSuccess) {
            this.timeZoneList = successData.ResponseObject;
            this.settingList();
        }
    }

    settingList() {
        const data = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.common.settingsDetails(data).subscribe((successData) => {
                this.listSuccess(successData);
            },
            (error) => {
                console.error(error, 'error');
            });
    }

    listSuccess(successData) {
        if (successData.IsSuccess) {
            this.auth.setSessionData('settingList', JSON.stringify(successData.ResponseObject));
            if (this.auth.getRoleId() != '5') {
                successData.ResponseObject.forEach((item) => {
                    if (item.name == 'date_format') {
                        this.behavior.changeDateFormat(item.date);
                    } else if (item.name == 'timezone') {
                        this.timeZoneList.forEach((list) => {
                            if (item.value == list.id) {
                                const split = list.time_zone.split('(');
                                this.behavior.changeTimeZone(split[0]);
                            }
                        });
                    }
                });
            }
            this.auth.setSessionData('settingList', JSON.stringify(successData.ResponseObject));
        }
    }
}
