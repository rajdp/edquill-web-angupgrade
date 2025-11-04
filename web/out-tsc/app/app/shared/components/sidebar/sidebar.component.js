import { CommonModule } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { NewsubjectService } from '../../service/newsubject.service';
import { environment } from '../../../../environments/environment';
import { CreatorService } from '../../service/creator.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../feather-icons/feather-icons.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../service/subject.services";
import * as i3 from "../../service/login.service";
import * as i4 from "../../service/nav.service";
import * as i5 from "../../service/School.service";
import * as i6 from "../../service/auth.service";
import * as i7 from "../../service/configuration.service";
import * as i8 from "../../service/common.service";
import * as i9 from "@angular/common";
import * as i10 from "@ng-bootstrap/ng-bootstrap";
const _forTrack0 = ($index, $item) => $item.title;
const _c0 = a0 => [a0];
const _c1 = () => ({ exact: true });
function SidebarComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 13);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r0.imgUrl + "/" + ctx_r0.profile, i0.ɵɵsanitizeUrl);
} }
function SidebarComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 13);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r0.profile, i0.ɵɵsanitizeUrl);
} }
function SidebarComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵelement(1, "i", 15);
    i0.ɵɵelementEnd();
} }
function SidebarComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16)(1, "span", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.name);
} }
function SidebarComponent_For_13_Conditional_1_span_3_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r3 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngClass", "badge-" + menuItem_r3.badgeType);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", menuItem_r3.badgeValue, " ");
} }
function SidebarComponent_For_13_Conditional_1_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, SidebarComponent_For_13_Conditional_1_span_3_Conditional_2_Template, 2, 2, "span", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", menuItem_r3.title, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(menuItem_r3.badgeType ? 2 : -1);
} }
function SidebarComponent_For_13_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 20);
    i0.ɵɵlistener("click", function SidebarComponent_For_13_Conditional_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r2); const menuItem_r3 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggletNavActive(menuItem_r3, "link")); });
    i0.ɵɵelementStart(1, "span", 21);
    i0.ɵɵelement(2, "app-feather-icons", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SidebarComponent_For_13_Conditional_1_span_3_Template, 3, 2, "span", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(4, _c0, menuItem_r3.path))("ngbTooltip", ctx_r0.sideBarOpened ? null : menuItem_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", menuItem_r3.icon);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.sideBarOpened);
} }
function SidebarComponent_For_13_Conditional_2_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelement(2, "i", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", menuItem_r3.title, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", menuItem_r3.active ? "bi-chevron-up" : "bi-chevron-down");
} }
function SidebarComponent_For_13_Conditional_2_Conditional_4_For_2_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenItem_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", "badge-" + childrenItem_r7.badgeType);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", childrenItem_r7.badgeValue, " ");
} }
function SidebarComponent_For_13_Conditional_2_Conditional_4_For_2_Conditional_6_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 18)(1, "a", 33);
    i0.ɵɵelement(2, "i", 34);
    i0.ɵɵelementStart(3, "span", 24);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const childrenSubItem_r9 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(3, _c0, childrenSubItem_r9.path))("routerLinkActiveOptions", i0.ɵɵpureFunction0(5, _c1));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(childrenSubItem_r9.title);
} }
function SidebarComponent_For_13_Conditional_2_Conditional_4_For_2_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 32);
    i0.ɵɵrepeaterCreate(1, SidebarComponent_For_13_Conditional_2_Conditional_4_For_2_Conditional_6_For_2_Template, 5, 6, "li", 18, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenItem_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵrepeater(childrenItem_r7.children);
} }
function SidebarComponent_For_13_Conditional_2_Conditional_4_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 18)(1, "a", 30);
    i0.ɵɵlistener("click", function SidebarComponent_For_13_Conditional_2_Conditional_4_For_2_Template_a_click_1_listener() { const ctx_r5 = i0.ɵɵrestoreView(_r5); const childrenItem_r7 = ctx_r5.$implicit; const ɵ$index_74_r8 = ctx_r5.$index; const menuItem_r3 = i0.ɵɵnextContext(3).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggleSubMenu(childrenItem_r7, menuItem_r3, ɵ$index_74_r8)); });
    i0.ɵɵelement(2, "i", 31);
    i0.ɵɵelementStart(3, "span", 24);
    i0.ɵɵtext(4);
    i0.ɵɵtemplate(5, SidebarComponent_For_13_Conditional_2_Conditional_4_For_2_Conditional_5_Template, 2, 2, "span", 25);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, SidebarComponent_For_13_Conditional_2_Conditional_4_For_2_Conditional_6_Template, 3, 0, "ul", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenItem_r7 = ctx.$implicit;
    i0.ɵɵclassProp("active", childrenItem_r7.active);
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(7, _c0, childrenItem_r7.path))("routerLinkActiveOptions", i0.ɵɵpureFunction0(9, _c1));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", childrenItem_r7.title, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(childrenItem_r7.badgeType ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(childrenItem_r7.children ? 6 : -1);
} }
function SidebarComponent_For_13_Conditional_2_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 29);
    i0.ɵɵrepeaterCreate(1, SidebarComponent_For_13_Conditional_2_Conditional_4_For_2_Template, 7, 10, "li", 11, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("show", menuItem_r3.active && ctx_r0.sideBarOpened);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(menuItem_r3.children);
} }
function SidebarComponent_For_13_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 26);
    i0.ɵɵlistener("click", function SidebarComponent_For_13_Conditional_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const menuItem_r3 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggletNavActive(menuItem_r3, "sub")); });
    i0.ɵɵelementStart(1, "span", 21);
    i0.ɵɵelement(2, "app-feather-icons", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SidebarComponent_For_13_Conditional_2_span_3_Template, 3, 2, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, SidebarComponent_For_13_Conditional_2_Conditional_4_Template, 3, 2, "ul", 27);
} if (rf & 2) {
    const menuItem_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-expanded", menuItem_r3.active);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", menuItem_r3.icon);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.sideBarOpened);
    i0.ɵɵadvance();
    i0.ɵɵconditional(menuItem_r3.children ? 4 : -1);
} }
function SidebarComponent_For_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 18);
    i0.ɵɵtemplate(1, SidebarComponent_For_13_Conditional_1_Template, 4, 6, "a", 19)(2, SidebarComponent_For_13_Conditional_2_Template, 5, 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r3 = ctx.$implicit;
    i0.ɵɵclassProp("active", menuItem_r3.active);
    i0.ɵɵadvance();
    i0.ɵɵconditional(menuItem_r3.type === "link" ? 1 : menuItem_r3.type === "sub" ? 2 : -1);
} }
function SidebarComponent_div_14_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 38);
    i0.ɵɵtext(1, "Version");
    i0.ɵɵelementEnd();
} }
function SidebarComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵtemplate(1, SidebarComponent_div_14_span_1_Template, 2, 0, "span", 36);
    i0.ɵɵelementStart(2, "span", 37);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.sideBarOpened);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.version);
} }
export class SidebarComponent {
    constructor(router, subject, login, navServices, schoolService, auth, config, common) {
        this.router = router;
        this.subject = subject;
        this.login = login;
        this.navServices = navServices;
        this.schoolService = schoolService;
        this.auth = auth;
        this.config = config;
        this.common = common;
        this.hideSchoolDropdown = false;
        this.newsubject = inject(NewsubjectService);
        this.timeZoneList = [];
        this.version = environment.version;
        this.creatorService = inject(CreatorService);
        this.sideBarOpened = true;
        const url = window.location.href;
        if (url.toString().indexOf('xtracurriculum') > -1) {
            this.logo = 'xtraCurriculum.png';
        }
        else if (url.toString().indexOf('safeteen') > -1) {
            this.logo = 'safeTeensOrg.png';
        }
        else if (url.toString().indexOf('uniqprep') > -1) {
            this.logo = 'uniqprep.png';
        }
        else if (url.toString().indexOf('elevenace') > -1) {
            this.logo = 'elevenAce.png';
        }
        else if (url.toString().indexOf('localhost') > -1 || url.toString().indexOf('uthkal') > -1 || url.toString().indexOf('edquill') > -1 || url.toString().indexOf('edveda') > -1) {
            this.logo = 'EdQuill.png';
        }
        this.imgUrl = this.config.getimgUrl();
        this.overallData = this.auth.getSessionData('school_id');
        this.name = this.auth.getSessionData('firstname') + ' ' + this.auth.getSessionData('lastname');
        this.role = this.auth.getRoleId();
        if (this.role == 2) {
            this.schoolName = JSON.parse(this.auth.getSessionData('school_details'));
        }
        else if (this.role == 3) {
            this.name = this.auth.getSessionData('schooldetails');
        }
        else if (this.role == 4 || this.role == 5 || this.role == 6) {
            this.schoolName = JSON.parse(this.auth.getSessionData('school_details'));
            this.sclName = this.auth.getSessionData('school_id');
            this.corporateCode = this.auth.getSessionData('corporate_code');
        }
        else if (this.role == 7) {
            this.schoolName = JSON.parse(this.auth.getSessionData('school_details'));
        }
        if (this.role != 3 && this.role != 6) {
            if (this.auth.getSessionData('school_id') != '' && this.auth.getSessionData('school_id') != null) {
                this.sclName = this.auth.getSessionData('school_id');
            }
            else {
                this.sclName = this.schoolName[0]?.school_id;
            }
        }
        this.subject.profileList.subscribe((res) => {
            this.profile = res;
            const profilepic = this.profile?.split('/');
            if (profilepic[0] == 'assets') {
                this.listCheck = true;
            }
            else if (profilepic[0] == 'uploads') {
                this.listCheck = false;
            }
        });
        this.newsubject.sideBar.subscribe((res) => {
            if (res != '') {
                this.toggletNavActive(res, '');
            }
        });
        if (this.role == 4 || this.role == 2) {
            this.newsubject.navUpdate.subscribe((params) => {
                this.navServiceUpdated();
            });
        }
        else {
            this.navServiceUpdated();
        }
        if (this.role != 3) {
            this.newsubject.allowChange.subscribe((params) => {
                this.allowSelect = !(params != '' && params != false);
            });
        }
        this.schoolService.corporateSchoolView.subscribe((res) => {
            if (res == true) {
                this.hideSchoolDropdown = true;
            }
            else if (res != true || res == '' || res == null) {
                this.hideSchoolDropdown = false;
            }
        });
        this.creatorService.contentView.subscribe((res) => {
            this.sideBarOpened = !(res == true);
        });
    }
    onSidebarHover() {
        this.sideBarOpened = true;
    }
    onSidebarLeave() {
        this.sideBarOpened = !this.navServices.collapseSidebar;
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
                    }
                    else {
                        submenuItems.active = false;
                    }
                });
            }
        });
    }
    // Click Toggle menu
    toggletNavActive(item, type) {
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
    readUrl(event) {
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
    ngOnInit() {
        if (this.role == 4 || this.role == 5 || this.role == 2 || this.role == 6) {
            this.profile = this.auth.getSessionData('school_profile');
        }
        else {
            this.profile = this.auth.getSessionData('school_profile_url');
        }
        const profilepic = this.profile ? this.profile.split('/') : '';
        if (profilepic[0] == 'assets') {
            this.listCheck = true;
        }
        else if (profilepic[0] == 'uploads') {
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
        }
        else if (this.role == 4) {
            this.schoolName.forEach((item) => {
                if (item.school_id == data) {
                    this.auth.setSessionData('school_name', item.name);
                    this.auth.setSessionData('rista_data1', JSON.stringify(item));
                    this.auth.setSessionData('teacher_type', item.individual_teacher);
                    this.auth.setSessionData('school_profile', item.profile_url);
                }
            });
            this.newsubject.newNav(this.auth.getSessionData('rista_data1'));
        }
        else if (this.role == 5) {
            this.schoolName.forEach((item) => {
                if (item.school_id == data) {
                    this.auth.setSessionData('school_name', item.name);
                    this.auth.setSessionData('rista_data1', JSON.stringify(item));
                    this.auth.setSessionData('school_profile', item.profile_url);
                    this.auth.setSessionData('teacher_id', item.school_idno);
                }
            });
        }
        else if (this.role == 6) {
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
                        if (child.path == url) {
                            child.active = true;
                            list.active = true;
                        }
                        else {
                            child.active = false;
                        }
                    });
                }
                else {
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
                                }
                                else {
                                    if (url[1].toLowerCase() == list.title.toLowerCase()) {
                                        list.active = true;
                                    }
                                }
                            });
                        }
                        else {
                            items.children.filter(subItems => {
                                // const menusplit = subItems.path.split('/');
                                if (subItems.path === event.url)
                                    this.setNavActive(subItems);
                                if (!subItems.children)
                                    return false;
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
        }, (error) => {
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
        }, (error) => {
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
                    }
                    else if (item.name == 'timezone') {
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
        }
        else if (this.auth.getRoleId() == '3') {
            this.router.navigate(['/repository/content-home']);
        }
        else if (this.auth.getRoleId() == '4') {
            this.router.navigate(['/class/list-class']);
        }
        else if (this.auth.getRoleId() == '5') {
            this.router.navigate(['/student/dashboard']);
        }
        else if (this.auth.getRoleId() == '6') {
            this.router.navigate(['/dashboard/default']);
        }
        else if (this.auth.getRoleId() == '7') {
            this.router.navigate(['/student-content/list-content/old']);
        }
    }
    static { this.ɵfac = function SidebarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SidebarComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.SubjectServices), i0.ɵɵdirectiveInject(i3.LoginService), i0.ɵɵdirectiveInject(i4.NavService), i0.ɵɵdirectiveInject(i5.SchoolService), i0.ɵɵdirectiveInject(i6.AuthService), i0.ɵɵdirectiveInject(i7.ConfigurationService), i0.ɵɵdirectiveInject(i8.CommonService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SidebarComponent, selectors: [["app-sidebar"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 15, vars: 7, consts: [[1, "app-sidebar", "custom-scrollbar", 3, "mouseenter", "mouseleave"], [1, "sidebar-header"], ["type", "button", 1, "btn", "btn-icon", "btn-outline-primary", "sidebar-nav-toggle", "d-lg-none", 3, "click"], [1, "bi", "bi-x-lg"], [1, "sidebar-user-card"], [1, "sidebar-avatar"], ["alt", "Profile image", 3, "src", 4, "ngIf"], ["class", "sidebar-avatar__placeholder", 4, "ngIf"], ["class", "sidebar-user-info", 4, "ngIf"], [1, "sidebar-navigation", 3, "click"], [1, "nav", "flex-column"], [1, "nav-item", 3, "active"], ["class", "sidebar-footer", 4, "ngIf"], ["alt", "Profile image", 3, "src"], [1, "sidebar-avatar__placeholder"], [1, "bi", "bi-person-fill"], [1, "sidebar-user-info"], [1, "sidebar-user-name"], [1, "nav-item"], ["routerLinkActive", "active", "placement", "right", 1, "nav-link", 3, "routerLink", "ngbTooltip"], ["routerLinkActive", "active", "placement", "right", 1, "nav-link", 3, "click", "routerLink", "ngbTooltip"], [1, "nav-icon"], [3, "icon"], ["class", "nav-text", 4, "ngIf"], [1, "nav-text"], [1, "badge", "ms-2", 3, "ngClass"], ["type", "button", 1, "nav-link", "nav-link--toggle", 3, "click"], [1, "nav", "flex-column", "sub-menu", 3, "show"], [1, "bi", "ms-auto", 3, "ngClass"], [1, "nav", "flex-column", "sub-menu"], ["routerLinkActive", "active", 1, "nav-link", 3, "click", "routerLink", "routerLinkActiveOptions"], [1, "bi", "bi-dot", "nav-icon"], [1, "nav", "flex-column", "sub-menu", "sub-menu--nested"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "bi", "bi-caret-right-fill", "nav-icon"], [1, "sidebar-footer"], ["class", "sidebar-footer__label", 4, "ngIf"], [1, "sidebar-footer__value"], [1, "sidebar-footer__label"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "aside", 0);
            i0.ɵɵlistener("mouseenter", function SidebarComponent_Template_aside_mouseenter_0_listener() { return ctx.onSidebarHover(); })("mouseleave", function SidebarComponent_Template_aside_mouseleave_0_listener() { return ctx.onSidebarLeave(); });
            i0.ɵɵelementStart(1, "div", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function SidebarComponent_Template_button_click_2_listener() { return ctx.navServices.collapseSidebar = !ctx.navServices.collapseSidebar; });
            i0.ɵɵelement(3, "i", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 4)(5, "span", 5);
            i0.ɵɵtemplate(6, SidebarComponent_img_6_Template, 1, 1, "img", 6)(7, SidebarComponent_img_7_Template, 1, 1, "img", 6)(8, SidebarComponent_span_8_Template, 2, 0, "span", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, SidebarComponent_div_9_Template, 3, 1, "div", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "nav", 9);
            i0.ɵɵlistener("click", function SidebarComponent_Template_nav_click_10_listener() { return ctx.removeSessionData(); });
            i0.ɵɵelementStart(11, "ul", 10);
            i0.ɵɵrepeaterCreate(12, SidebarComponent_For_13_Template, 3, 3, "li", 11, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(14, SidebarComponent_div_14_Template, 4, 2, "div", 12);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("is-collapsed", !ctx.sideBarOpened);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.profile && !ctx.listCheck);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.profile && ctx.listCheck);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.profile);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.sideBarOpened);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.menuItems);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.version);
        } }, dependencies: [CommonModule, i9.NgClass, i9.NgIf, FormsModule, RouterModule, i1.RouterLink, i1.RouterLinkActive, FeatherIconsComponent, NgbTooltipModule, i10.NgbTooltip], styles: [".app-sidebar {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 270px;\n  min-height: 100%;\n  background: linear-gradient(180deg, #f5f3ff 0%, #ffffff 100%);\n  border-right: 1px solid var(--neutral-200);\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.04);\n  transition: width var(--transition-base) ease;\n  padding: var(--spacing-4) var(--spacing-3);\n\n  &.is-collapsed {\n    width: 84px;\n\n    .sidebar-user-info,\n    .nav-text,\n    .sidebar-footer__label {\n      display: none;\n    }\n\n    .sub-menu {\n      display: none !important;\n    }\n  }\n}\n\n.sidebar-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--spacing-4);\n}\n\n.sidebar-nav-toggle {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.sidebar-user-card {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-3);\n}\n\n.sidebar-avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background-color: var(--neutral-100);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  border: 2px solid rgba(143, 0, 138, 0.12);\n  box-shadow: var(--shadow-sm);\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  &__placeholder {\n    color: var(--color-primary);\n    font-size: 1.25rem;\n  }\n}\n\n.sidebar-user-info {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-1);\n}\n\n.sidebar-user-name {\n  font-weight: 600;\n  color: var(--neutral-800);\n}\n\n.sidebar-navigation {\n  flex: 1 1 auto;\n  padding-bottom: var(--spacing-4);\n\n  .nav {\n    gap: 0.25rem;\n  }\n}\n\n.nav-link {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-3);\n  padding: var(--spacing-3) var(--spacing-3);\n  border-radius: var(--radius-lg);\n  color: var(--neutral-600);\n  font-weight: 500;\n  transition: background-color var(--transition-fast) ease, color var(--transition-fast) ease;\n\n  &.active,\n  &:hover {\n    color: var(--color-primary);\n    background-color: rgba(143, 0, 138, 0.08);\n    text-decoration: none;\n  }\n\n  &.nav-link--toggle {\n    width: 100%;\n    background: transparent;\n    border: none;\n\n    &:focus {\n      outline: none;\n      box-shadow: none;\n    }\n  }\n}\n\n.nav-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n}\n\n.sub-menu {\n  margin-left: var(--spacing-3);\n  border-left: 2px solid rgba(143, 0, 138, 0.08);\n  padding-left: var(--spacing-2);\n  display: none;\n\n  &.show {\n    display: block;\n  }\n\n  .nav-link {\n    padding: var(--spacing-2) var(--spacing-3);\n    font-size: 0.875rem;\n    color: var(--neutral-500);\n\n    &.active,\n    &:hover {\n      color: var(--color-primary);\n      background-color: rgba(143, 0, 138, 0.06);\n    }\n  }\n\n  &--nested {\n    margin-left: var(--spacing-3);\n    border: none;\n  }\n}\n\n.sidebar-footer {\n  margin-top: auto;\n  padding-top: var(--spacing-4);\n  border-top: 1px solid var(--neutral-200);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--neutral-500);\n  font-size: 0.8rem;\n}\n\n.sidebar-footer__value {\n  font-weight: 600;\n  color: var(--neutral-700);\n}\n\n@media (max-width: 991.98px) {\n  .app-sidebar {\n    position: fixed;\n    top: 64px;\n    left: 0;\n    height: calc(100vh - 64px);\n    z-index: 1045;\n    transform: translateX(-100%);\n    transition: transform var(--transition-base) ease;\n    box-shadow: var(--shadow-lg);\n\n    &:not(.is-collapsed) {\n      transform: translateX(0);\n    }\n  }\n}\n"], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidebarComponent, [{
        type: Component,
        args: [{ selector: 'app-sidebar', standalone: true, imports: [CommonModule, FormsModule, RouterModule, FeatherIconsComponent, NgbTooltipModule], encapsulation: ViewEncapsulation.None, template: "<aside\n  class=\"app-sidebar custom-scrollbar\"\n  (mouseenter)=\"onSidebarHover()\"\n  (mouseleave)=\"onSidebarLeave()\"\n  [class.is-collapsed]=\"!sideBarOpened\"\n>\n  <div class=\"sidebar-header\">\n    <button class=\"btn btn-icon btn-outline-primary sidebar-nav-toggle d-lg-none\" type=\"button\" (click)=\"navServices.collapseSidebar = !navServices.collapseSidebar\">\n      <i class=\"bi bi-x-lg\"></i>\n    </button>\n    <div class=\"sidebar-user-card\">\n      <span class=\"sidebar-avatar\">\n        <img\n          *ngIf=\"profile && !listCheck\"\n          [src]=\"imgUrl + '/' + profile\"\n          alt=\"Profile image\"\n        />\n        <img\n          *ngIf=\"profile && listCheck\"\n          [src]=\"profile\"\n          alt=\"Profile image\"\n        />\n        <span *ngIf=\"!profile\" class=\"sidebar-avatar__placeholder\">\n          <i class=\"bi bi-person-fill\"></i>\n        </span>\n      </span>\n      <div class=\"sidebar-user-info\" *ngIf=\"sideBarOpened\">\n        <span class=\"sidebar-user-name\">{{ name }}</span>\n      </div>\n    </div>\n  </div>\n\n  <nav class=\"sidebar-navigation\" (click)=\"removeSessionData()\">\n    <ul class=\"nav flex-column\">\n      @for (menuItem of menuItems; track menuItem.title) {\n        <li class=\"nav-item\" [class.active]=\"menuItem.active\">\n          @if (menuItem.type === 'link') {\n            <a\n              class=\"nav-link\"\n              [routerLink]=\"[menuItem.path]\"\n              routerLinkActive=\"active\"\n              (click)=\"toggletNavActive(menuItem, 'link')\"\n              [ngbTooltip]=\"sideBarOpened ? null : menuItem.title\"\n              placement=\"right\"\n            >\n              <span class=\"nav-icon\">\n                <app-feather-icons [icon]=\"menuItem.icon\"></app-feather-icons>\n              </span>\n              <span class=\"nav-text\" *ngIf=\"sideBarOpened\">\n                {{ menuItem.title }}\n                @if (menuItem.badgeType) {\n                  <span class=\"badge ms-2\" [ngClass]=\"'badge-' + menuItem.badgeType\">\n                    {{ menuItem.badgeValue }}\n                  </span>\n                }\n              </span>\n            </a>\n          } @else if (menuItem.type === 'sub') {\n            <button\n              class=\"nav-link nav-link--toggle\"\n              type=\"button\"\n              (click)=\"toggletNavActive(menuItem, 'sub')\"\n              [attr.aria-expanded]=\"menuItem.active\"\n            >\n              <span class=\"nav-icon\">\n                <app-feather-icons [icon]=\"menuItem.icon\"></app-feather-icons>\n              </span>\n              <span class=\"nav-text\" *ngIf=\"sideBarOpened\">\n                {{ menuItem.title }}\n                <i class=\"bi ms-auto\" [ngClass]=\"menuItem.active ? 'bi-chevron-up' : 'bi-chevron-down'\"></i>\n              </span>\n            </button>\n            @if (menuItem.children) {\n              <ul class=\"nav flex-column sub-menu\" [class.show]=\"menuItem.active && sideBarOpened\">\n                @for (childrenItem of menuItem.children; track childrenItem.title; let childIndex = $index) {\n                  <li class=\"nav-item\" [class.active]=\"childrenItem.active\">\n                    <a\n                      class=\"nav-link\"\n                      [routerLink]=\"[childrenItem.path]\"\n                      routerLinkActive=\"active\"\n                      [routerLinkActiveOptions]=\"{ exact: true }\"\n                      (click)=\"toggleSubMenu(childrenItem, menuItem, childIndex)\"\n                    >\n                      <i class=\"bi bi-dot nav-icon\"></i>\n                      <span class=\"nav-text\">\n                        {{ childrenItem.title }}\n                        @if (childrenItem.badgeType) {\n                          <span class=\"badge ms-2\" [ngClass]=\"'badge-' + childrenItem.badgeType\">\n                            {{ childrenItem.badgeValue }}\n                          </span>\n                        }\n                      </span>\n                    </a>\n                    @if (childrenItem.children) {\n                      <ul class=\"nav flex-column sub-menu sub-menu--nested\">\n                        @for (childrenSubItem of childrenItem.children; track childrenSubItem.title) {\n                          <li class=\"nav-item\">\n                            <a\n                              class=\"nav-link\"\n                              [routerLink]=\"[childrenSubItem.path]\"\n                              routerLinkActive=\"active\"\n                              [routerLinkActiveOptions]=\"{ exact: true }\"\n                            >\n                              <i class=\"bi bi-caret-right-fill nav-icon\"></i>\n                              <span class=\"nav-text\">{{ childrenSubItem.title }}</span>\n                            </a>\n                          </li>\n                        }\n                      </ul>\n                    }\n                  </li>\n                }\n              </ul>\n            }\n          }\n        </li>\n      }\n    </ul>\n  </nav>\n\n  <div class=\"sidebar-footer\" *ngIf=\"version\">\n    <span class=\"sidebar-footer__label\" *ngIf=\"sideBarOpened\">Version</span>\n    <span class=\"sidebar-footer__value\">{{ version }}</span>\n  </div>\n</aside>\n", styles: [".app-sidebar {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 270px;\n  min-height: 100%;\n  background: linear-gradient(180deg, #f5f3ff 0%, #ffffff 100%);\n  border-right: 1px solid var(--neutral-200);\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.04);\n  transition: width var(--transition-base) ease;\n  padding: var(--spacing-4) var(--spacing-3);\n\n  &.is-collapsed {\n    width: 84px;\n\n    .sidebar-user-info,\n    .nav-text,\n    .sidebar-footer__label {\n      display: none;\n    }\n\n    .sub-menu {\n      display: none !important;\n    }\n  }\n}\n\n.sidebar-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--spacing-4);\n}\n\n.sidebar-nav-toggle {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.sidebar-user-card {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-3);\n}\n\n.sidebar-avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background-color: var(--neutral-100);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  border: 2px solid rgba(143, 0, 138, 0.12);\n  box-shadow: var(--shadow-sm);\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  &__placeholder {\n    color: var(--color-primary);\n    font-size: 1.25rem;\n  }\n}\n\n.sidebar-user-info {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-1);\n}\n\n.sidebar-user-name {\n  font-weight: 600;\n  color: var(--neutral-800);\n}\n\n.sidebar-navigation {\n  flex: 1 1 auto;\n  padding-bottom: var(--spacing-4);\n\n  .nav {\n    gap: 0.25rem;\n  }\n}\n\n.nav-link {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-3);\n  padding: var(--spacing-3) var(--spacing-3);\n  border-radius: var(--radius-lg);\n  color: var(--neutral-600);\n  font-weight: 500;\n  transition: background-color var(--transition-fast) ease, color var(--transition-fast) ease;\n\n  &.active,\n  &:hover {\n    color: var(--color-primary);\n    background-color: rgba(143, 0, 138, 0.08);\n    text-decoration: none;\n  }\n\n  &.nav-link--toggle {\n    width: 100%;\n    background: transparent;\n    border: none;\n\n    &:focus {\n      outline: none;\n      box-shadow: none;\n    }\n  }\n}\n\n.nav-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n}\n\n.sub-menu {\n  margin-left: var(--spacing-3);\n  border-left: 2px solid rgba(143, 0, 138, 0.08);\n  padding-left: var(--spacing-2);\n  display: none;\n\n  &.show {\n    display: block;\n  }\n\n  .nav-link {\n    padding: var(--spacing-2) var(--spacing-3);\n    font-size: 0.875rem;\n    color: var(--neutral-500);\n\n    &.active,\n    &:hover {\n      color: var(--color-primary);\n      background-color: rgba(143, 0, 138, 0.06);\n    }\n  }\n\n  &--nested {\n    margin-left: var(--spacing-3);\n    border: none;\n  }\n}\n\n.sidebar-footer {\n  margin-top: auto;\n  padding-top: var(--spacing-4);\n  border-top: 1px solid var(--neutral-200);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--neutral-500);\n  font-size: 0.8rem;\n}\n\n.sidebar-footer__value {\n  font-weight: 600;\n  color: var(--neutral-700);\n}\n\n@media (max-width: 991.98px) {\n  .app-sidebar {\n    position: fixed;\n    top: 64px;\n    left: 0;\n    height: calc(100vh - 64px);\n    z-index: 1045;\n    transform: translateX(-100%);\n    transition: transform var(--transition-base) ease;\n    box-shadow: var(--shadow-lg);\n\n    &:not(.is-collapsed) {\n      transform: translateX(0);\n    }\n  }\n}\n"] }]
    }], () => [{ type: i1.Router }, { type: i2.SubjectServices }, { type: i3.LoginService }, { type: i4.NavService }, { type: i5.SchoolService }, { type: i6.AuthService }, { type: i7.ConfigurationService }, { type: i8.CommonService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SidebarComponent, { className: "SidebarComponent" }); })();
//# sourceMappingURL=sidebar.component.js.map