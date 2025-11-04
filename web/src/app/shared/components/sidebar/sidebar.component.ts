import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Menu, NavService} from '../../service/nav.service';
import {AuthService} from '../../service/auth.service';
import {ConfigurationService} from '../../service/configuration.service';
import {SubjectServices} from '../../service/subject.services';
import {LoginService} from '../../service/login.service';
import {CommonService} from '../../service/common.service';
import {NewsubjectService} from '../../service/newsubject.service';
import {SchoolService} from '../../service/School.service';
import {environment} from '../../../../environments/environment';
import {CreatorService} from '../../service/creator.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../feather-icons/feather-icons.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule, FeatherIconsComponent, NgbTooltipModule],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

    public menuItems: Menu[];
    public url: any;
    public name: any;
    public role: any;
    public profile: any;
    public imgUrl: string;
    public listCheck: boolean;
    public schoolName: any;
    public allowSelect: boolean;
    public sclName: any;
    public hideSchoolDropdown = false;
    public corporateCode: any;
    public overallData: any;
    public logo: any;
    public newsubject = inject(NewsubjectService);
    public timeZoneList: any = [];
    public version = environment.version;
    public creatorService = inject(CreatorService);
    public sideBarOpened = true;

    constructor(private router: Router, public subject: SubjectServices, public login: LoginService, public navServices: NavService, public schoolService: SchoolService,
                public auth: AuthService, public config: ConfigurationService, public common: CommonService) {
        const url = window.location.href;
        if (url.toString().indexOf('xtracurriculum') > -1) {
            this.logo = 'xtraCurriculum.png';
        } else if (url.toString().indexOf('safeteen') > -1) {
            this.logo = 'safeTeensOrg.png';
        }  else if (url.toString().indexOf('uniqprep') > -1) {
            this.logo = 'uniqprep.png';
        }   else if (url.toString().indexOf('elevenace') > -1) {
            this.logo = 'elevenAce.png';
        }  else if (url.toString().indexOf('localhost') > -1 || url.toString().indexOf('uthkal') > -1 || url.toString().indexOf('edquill') > -1 || url.toString().indexOf('edveda') > -1) {
            this.logo = 'EdQuill.png';
        }
        this.imgUrl = this.config.getimgUrl();
        this.overallData = this.auth.getSessionData('school_id');
        this.name = this.auth.getSessionData('firstname') + ' ' + this.auth.getSessionData('lastname');
        this.role = this.auth.getRoleId();
        if (this.role == 2) {
            this.schoolName = JSON.parse(this.auth.getSessionData('school_details'));
        } else if (this.role == 3) {
            this.name = this.auth.getSessionData('schooldetails');
        } else if (this.role == 4 || this.role == 5 || this.role == 6) {
            this.schoolName = JSON.parse(this.auth.getSessionData('school_details'));
            this.sclName = this.auth.getSessionData('school_id');
            this.corporateCode = this.auth.getSessionData('corporate_code');
        }else if (this.role == 7){
            this.schoolName = JSON.parse(this.auth.getSessionData('school_details'));
        }
        if (this.role != 3 && this.role != 6) {
            if (this.auth.getSessionData('school_id') != '' && this.auth.getSessionData('school_id') != null) {
                this.sclName = this.auth.getSessionData('school_id');
            } else {
                this.sclName = this.schoolName[0]?.school_id;
            }
        }
        this.subject.profileList.subscribe((res: any) => {
            this.profile = res;
            const profilepic = this.profile?.split('/');
            if (profilepic[0] == 'assets') {
                this.listCheck = true;
            } else if (profilepic[0] == 'uploads') {
                this.listCheck = false;
            }
        });

        this.newsubject.sideBar.subscribe((res: any) => {
            if (res != '') {
                this.toggletNavActive(res, '');
            }
        });

        if (this.role == 4 || this.role == 2) {
            this.newsubject.navUpdate.subscribe((params) => {
                this.navServiceUpdated();
            });
        } else {
            this.navServiceUpdated();
        }
        if (this.role != 3){
            this.newsubject.allowChange.subscribe((params) => {
                this.allowSelect = !(params != '' && params != false);
            });
        }
        this.schoolService.corporateSchoolView.subscribe((res: any) => {
            if (res == true) {
                this.hideSchoolDropdown = true;
            } else if (res != true || res == '' || res == null) {
                this.hideSchoolDropdown = false;
            }
        });
        
        // Set initial sidebar state based on navServices.collapseSidebar
        // This ensures the sidebar state is synchronized with user's preference
        this.sideBarOpened = !this.navServices.collapseSidebar;
        
        // Subscribe to sidebar toggle events from header
        // This keeps the sidebar state in sync when user explicitly toggles it
        this.creatorService.contentView.subscribe((collapseState: any) => {
            // Only update when there's an actual change (not initial empty string)
            if (collapseState !== '') {
                this.sideBarOpened = !collapseState;
            }
        });
    }

    removeSessionData() {
        this.auth.removeSessionData('content_assign');
    }

    // Active Nave state
    setNavActive(item) {
        this.menuItems.filter(menuItem => {
            if (menuItem != item)
                menuItem.active = false;
            if (menuItem.children && menuItem.children.includes(item))
                menuItem.active = true;
            if (menuItem.children) {
                menuItem.children.filter(submenuItems => {
                    if (submenuItems.path == item.path) {
                        menuItem.active = true;
                        submenuItems.active = true;
                    } else {
                        submenuItems.active = false;
                    }
                });
            }
        });
    }

    // Click Toggle menu
    public toggletNavActive(item, type) {
        this.menuItems.forEach(a => {
            if (type == 'link') {
                a.active = false;
            }
            if (a.children) {
                a.children.forEach(b => {
                    b.active = false;
                });
            }
        });
        item.active = !item.active;
    }

    toggleSubMenu(children, menuItems, childIndex) {
        menuItems.active = true;
        menuItems.children.forEach((child, index) => {
            child.active = index == childIndex;
        });
        console.log(menuItems, 'childIndex');
    }

    //Fileupload
    readUrl(event: any) {
        if (event.target.files.length === 0)
            return;
        //Image upload validation
        var mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        // Image upload
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
            this.url = reader.result;
        };
    }


    ngOnInit(): void {
        if (this.role == 4 || this.role == 5 || this.role == 2 || this.role == 6) {
            this.profile = this.auth.getSessionData('school_profile');
        } else {
            this.profile = this.auth.getSessionData('school_profile_url');
        }
        const profilepic = this.profile ? this.profile.split('/') : '';
        if (profilepic[0] == 'assets') {
            this.listCheck = true;
        } else if (profilepic[0] == 'uploads') {
            this.listCheck = false;
        }
    }

//  school change list
    schoolChangeList(data) {
        if (this.role == 2) {
            this.schoolName.forEach((item) => {
                if (item.school_id == data) {
                    this.auth.setSessionData('school_name', item.name);
                    this.auth.setSessionData('rista_data1', JSON.stringify(item));
                    this.auth.setSessionData('school_profile', item.profile_url);
                    this.auth.setSessionData('teacher_id', item.school_idno);
                }
            });
            this.newsubject.newNav(this.auth.getSessionData('rista_data1'));
        } else if (this.role == 4) {
            this.schoolName.forEach((item) => {
                if (item.school_id == data) {
                    this.auth.setSessionData('school_name', item.name);
                    this.auth.setSessionData('rista_data1', JSON.stringify(item));
                    this.auth.setSessionData('teacher_type', item.individual_teacher);
                    this.auth.setSessionData('school_profile', item.profile_url);
                }
            });
            this.newsubject.newNav(this.auth.getSessionData('rista_data1'));
        } else if (this.role == 5) {
            this.schoolName.forEach((item) => {
                if (item.school_id == data) {
                    this.auth.setSessionData('school_name', item.name);
                    this.auth.setSessionData('rista_data1', JSON.stringify(item));
                    this.auth.setSessionData('school_profile', item.profile_url);
                    this.auth.setSessionData('teacher_id', item.school_idno);
                }
            });
        } else if (this.role == 6) {
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
        this.role != '6' ? this.getTimeZone() : '';
        this.newsubject.changeSchoolList(data);
    }

    navServiceUpdated() {
        this.navServices.items.subscribe(menuItems => {
            this.menuItems = menuItems;
            if (menuItems[3].children == '') {
                menuItems.forEach((item, index) => {
                    if (menuItems[3].title == item.title) {
                        this.menuItems.splice(index, 1);
                    }
                });
            }
            // page reload set side nav links
            const url = this.router.url;
            this.menuItems.filter((list) => {
                if (list.children) {
                    // list.active = false;
                    list.children.filter((child) => {
                        if(child.path == url) {
                            child.active = true;
                            list.active= true;
                        } else  {
                            child.active = false;
                        }
                    });
                } else {
                    if (url[1].toLowerCase() == list.title.toLowerCase()) {
                        list.active = true;
                    }
                }
            });
            // page side nav click set nav links
            this.router.events.subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    menuItems.filter(items => {
                        const url = event.url.split('/');
                        if (!items.children) {
                            this.menuItems.filter((list) => {
                                if (list.children) {
                                    // list.active = false;
                                    // list.children.filter((child) => {
                                    //     child.active = child.active;
                                    // });
                                } else {
                                    if (url[1].toLowerCase() == list.title.toLowerCase()) {
                                        list.active = true;
                                    }
                                }
                            });
                        } else {
                            items.children.filter(subItems => {
                                // const menusplit = subItems.path.split('/');
                                if (subItems.path === event.url)
                                    this.setNavActive(subItems);
                                if (!subItems.children) return false;
                                subItems.children.filter(subSubItems => {
                                    const menusplit = subSubItems.path.split('/');
                                    if (menusplit[1] === url[1])
                                        this.setNavActive(subSubItems);
                                });
                            });
                        }
                    });
                }
            });
        });
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
}
