import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter, ViewChild, inject, ChangeDetectorRef } from '@angular/core';
import {NavService} from '../../service/nav.service';
import {Router} from '@angular/router';
import {ConfigurationService} from '../../service/configuration.service';
import {AuthService} from '../../service/auth.service';
import {SubjectServices} from '../../service/subject.services';
import {CreatorService} from '../../service/creator.service';
import {DatePipe} from '@angular/common';
import {NewsubjectService} from '../../service/newsubject.service';
import {CommonService} from '../../service/common.service';
import {SchoolService} from '../../service/School.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../feather-icons/feather-icons.component';
import { ToggleFullscreenDirective } from '../../directives/fullscreen.directive';
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        FeatherIconsComponent,
        ToggleFullscreenDirective,
        NgbDropdownModule,
        NgbTooltipModule
    ],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    public open = false;
    public openNav = false;
    public imgUrl: string;
    public profile: any;
    public listCheck: any;
    public roleid: any;
    public name: any;
    public logo: any;
    public schoolName: any;
    public timeZoneList: any = [];
    public newsubject = inject(NewsubjectService);
    public common = inject(CommonService);
    public schoolService = inject(SchoolService);
    public sclName: any;
    public corporateCode: any;
    public allowSelect: boolean;
    public hideSchoolDropdown = false;
    public overallData: any;
    @Output() rightSidebarEvent = new EventEmitter<boolean>();

    constructor(public navServices: NavService, public subject: SubjectServices, public datePipe: DatePipe,
                public creatorService: CreatorService, public router: Router, public config: ConfigurationService,
                public auth: AuthService, private cdr: ChangeDetectorRef) {
        const url = window.location.href;
        if (url.toString().indexOf('xtracurriculum') > -1) {
            this.logo = 'xtraCurriculum.png';
        } else if (url.toString().indexOf('elevenace') > -1) {
            this.logo = 'elevenAce.png';
        } else if (url.toString().indexOf('uniqprep') > -1) {
            this.logo = 'uniqprep.png';
        } else if (url.toString().indexOf('safeteen') > -1) {
            this.logo = 'safeTeensOrg.png';
        } else if (url.toString().indexOf('localhost') > -1 || url.toString().indexOf('uthkal') > -1 || url.toString().indexOf('edquill') > -1 || url.toString().indexOf('edveda') > -1) {
            this.logo = 'EdQuill.png';
        }
        this.imgUrl = this.config.getimgUrl();
        this.roleid = this.auth.getRoleId();
        this.overallData = this.auth.getSessionData('school_id');
        // Removed automatic sidebar control subscription to prevent auto-hide/show behavior
        // this.creatorService.contentView.subscribe((res: any) => {
        //     if (res == true) {
        //         this.open = true;
        //         this.navServices.collapseSidebar = true;
        //     } else if (res != true || res == '' || res == null) {
        //         this.open = false;
        //         this.navServices.collapseSidebar = false;
        //     }
        //     this.name = this.auth.getSessionData('firstname') + ' ' + this.auth.getSessionData('lastname');
        //     setTimeout(() => {
        //         this.cdr.detectChanges();
        //     }, 0);
        // });
        this.name = this.auth.getSessionData('firstname') + ' ' + this.auth.getSessionData('lastname');
        if (this.roleid != 3){
            this.newsubject.allowChange.subscribe((params) => {
                this.allowSelect = !(params != '' && params != false);
                setTimeout(() => {
                    this.cdr.detectChanges();
                }, 0);
            });
        }
        if (this.roleid == 2) {
            this.schoolName = JSON.parse(this.auth.getSessionData('school_details'));
        } else if (this.roleid == 3) {
            this.name = this.auth.getSessionData('schooldetails');
        } else if (['4', '5', '6'].includes(this.roleid)) {
            this.schoolName = JSON.parse(this.auth.getSessionData('school_details'));
            this.sclName = this.auth.getSessionData('school_id');
            this.corporateCode = this.auth.getSessionData('corporate_code');
        }else if (this.roleid == 7){
            this.schoolName = JSON.parse(this.auth.getSessionData('school_details'));
        }
        if (this.roleid != 3 && this.roleid != 6) {
            if (this.auth.getSessionData('school_id') != '' && this.auth.getSessionData('school_id') != null) {
                this.sclName = this.auth.getSessionData('school_id');
            } else {
                this.sclName = this.schoolName[0]?.school_id;
            }
        }
        this.schoolService.corporateSchoolView.subscribe((res: any) => {
            if (res == true) {
                this.hideSchoolDropdown = true;
            } else if (res != true || res == '' || res == null) {
                this.hideSchoolDropdown = false;
            }
            setTimeout(() => {
                this.cdr.detectChanges();
            }, 0);
        });
    }

    showDate() {
        const schoolDetails = JSON.parse(this.auth.getSessionData('rista_data1'));
        return schoolDetails.display_until ? this.datePipe.transform(schoolDetails.display_until, 'MMMM d, y') : '';
    }

    showPaymentMessage() {
        let showWarning = false;
        const schoolDetails = JSON.parse(this.auth.getSessionData('rista_data1'));
        if (schoolDetails?.display_until) {
            const givenDate: Date = new Date(schoolDetails?.display_until);
            const currentDate = new Date();
            if (this.auth.getRoleId() == '2') {
                showWarning = schoolDetails.payment_status == 'N' && (currentDate < givenDate || currentDate.toDateString() == givenDate.toDateString());
            } else {
                showWarning = false;
            }
        }
        return showWarning;
    }

    schoolChangeList(data) {
        if (this.roleid == 2) {
            this.schoolName.forEach((item) => {
                if (item.school_id == data) {
                    this.auth.setSessionData('school_name', item.name);
                    this.auth.setSessionData('rista_data1', JSON.stringify(item));
                    this.auth.setSessionData('school_profile', item.profile_url);
                    this.auth.setSessionData('teacher_id', item.school_idno);
                }
            });
            this.newsubject.newNav(this.auth.getSessionData('rista_data1'));
        } else if (this.roleid == 4) {
            this.schoolName.forEach((item) => {
                if (item.school_id == data) {
                    this.auth.setSessionData('school_name', item.name);
                    this.auth.setSessionData('rista_data1', JSON.stringify(item));
                    this.auth.setSessionData('teacher_type', item.individual_teacher);
                    this.auth.setSessionData('school_profile', item.profile_url);
                }
            });
            this.newsubject.newNav(this.auth.getSessionData('rista_data1'));
        } else if (this.roleid == 5) {
            this.schoolName.forEach((item) => {
                if (item.school_id == data) {
                    this.auth.setSessionData('school_name', item.name);
                    this.auth.setSessionData('rista_data1', JSON.stringify(item));
                    this.auth.setSessionData('school_profile', item.profile_url);
                    this.auth.setSessionData('teacher_id', item.school_idno);
                }
            });
        } else if (this.roleid == 6) {
            this.schoolName.forEach((item) => {
                if (item.school_id == data) {
                    this.auth.setSessionData('school_name', item.name);
                    this.auth.setSessionData('rista_data1', JSON.stringify(item));
                    this.auth.setSessionData('school_profile', item.profile_url);
                }
            });
        }
        this.auth.setSessionData('school_id', data);
        this.auth.setSessionData('selected-name', data);
        this.roleid != '6' ? this.getTimeZone() : '';
        this.newsubject.changeSchoolList(data);
    }

    collapseSidebar() {
        this.open = !this.open;
        this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
        this.creatorService.changeViewList(this.navServices.collapseSidebar);
    }

    navigateToDefaultPages() {
        if (this.auth.getRoleId() == '1' || this.auth.getRoleId() == '2') {
            this.router.navigate(['/class/list-class']);
        } else if (this.auth.getRoleId() == '3') {
            this.router.navigate(['/repository/content-home']);
        } else if (this.auth.getRoleId() == '4') {
            this.router.navigate(['/class/list-class']);
        } else if (this.auth.getRoleId() == '5') {
            this.router.navigate(['/student/dashboard']);
        } else if (this.auth.getRoleId() == '6') {
            this.router.navigate(['/dashboard/default']);
        } else if (this.auth.getRoleId() == '7') {
            this.router.navigate(['/student-content/list-content/old']);
        }
    }

    logout() {
        this.router.navigate(['/auth/login']);
        sessionStorage.clear();
        localStorage.clear();
    }

    ngOnInit() {
        this.subject.cast.subscribe(data => {
            this.profile = data;
            const profilepicSubject = this.profile.split('/');
            this.listCheck = profilepicSubject[0] == 'assets';
        });
        this.profile = this.auth.getSessionData('profile_url');
        const profilepic = this.profile.split('/');
        this.listCheck = profilepic[0] == 'assets';
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
                        this.newsubject.changeDateFormat(item.date);
                    } else if (item.name == 'timezone') {
                        this.timeZoneList.forEach((list) => {
                            if (item.value == list.id) {
                                const split = list.time_zone.split('(');
                                this.newsubject.changeTimeZone(split[0]);
                            }
                        });
                    }
                });
            }
            this.auth.setSessionData('settingList', JSON.stringify(successData.ResponseObject));
        }
    }

}
