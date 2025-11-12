import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, inject } from '@angular/core';
import { NewsubjectService } from '../../service/newsubject.service';
import { CommonService } from '../../service/common.service';
import { SchoolService } from '../../service/School.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../feather-icons/feather-icons.component';
import { ToggleFullscreenDirective } from '../../directives/fullscreen.directive';
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
import * as i1 from "../../service/nav.service";
import * as i2 from "../../service/subject.services";
import * as i3 from "@angular/common";
import * as i4 from "../../service/creator.service";
import * as i5 from "@angular/router";
import * as i6 from "../../service/configuration.service";
import * as i7 from "../../service/auth.service";
import * as i8 from "@angular/forms";
import * as i9 from "@ng-bootstrap/ng-bootstrap";
const _c0 = () => ["2", "4", "5"];
const _c1 = () => ["3", "6"];
const _c2 = () => ["2", "3", "4", "6"];
function HeaderComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelement(1, "i", 30);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, " Dear Customer, your subscription is due for renewal. Please complete the payment ");
    i0.ɵɵelementStart(4, "a", 31);
    i0.ɵɵtext(5, " here ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, " before ");
    i0.ɵɵelementStart(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(9, " to continue the service. ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r0.showDate());
} }
function HeaderComponent_Conditional_14_select_3_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 37);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const school_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", school_r3.school_id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", school_r3.name, " ");
} }
function HeaderComponent_Conditional_14_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 35);
    i0.ɵɵlistener("change", function HeaderComponent_Conditional_14_select_3_Template_select_change_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.schoolChangeList($event.target.value)); });
    i0.ɵɵtwoWayListener("ngModelChange", function HeaderComponent_Conditional_14_select_3_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.sclName, $event) || (ctx_r0.sclName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(1, HeaderComponent_Conditional_14_select_3_option_1_Template, 2, 2, "option", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r0.allowSelect);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.sclName);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.schoolName);
} }
function HeaderComponent_Conditional_14_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 38);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.schoolName[0].name);
} }
function HeaderComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "label", 32);
    i0.ɵɵtext(2, "Institution");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, HeaderComponent_Conditional_14_select_3_Template, 2, 3, "select", 33)(4, HeaderComponent_Conditional_14_span_4_Template, 2, 1, "span", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", (ctx_r0.schoolName == null ? null : ctx_r0.schoolName.length) > 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r0.schoolName == null ? null : ctx_r0.schoolName.length) === 1);
} }
function HeaderComponent_Conditional_15_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Corporate ID: ", ctx_r0.corporateCode, "");
} }
function HeaderComponent_Conditional_15_select_5_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 37);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const school_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", school_r5.school_id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", school_r5.name, " ");
} }
function HeaderComponent_Conditional_15_select_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 44);
    i0.ɵɵlistener("change", function HeaderComponent_Conditional_15_select_5_Template_select_change_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.schoolChangeList($event.target.value)); });
    i0.ɵɵtwoWayListener("ngModelChange", function HeaderComponent_Conditional_15_select_5_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.sclName, $event) || (ctx_r0.sclName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(1, HeaderComponent_Conditional_15_select_5_option_1_Template, 2, 2, "option", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r0.allowSelect);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.sclName);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.schoolName);
} }
function HeaderComponent_Conditional_15_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.schoolName[0] == null ? null : ctx_r0.schoolName[0].name, " ");
} }
function HeaderComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 39)(2, "span", 40);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, HeaderComponent_Conditional_15_Conditional_4_Template, 2, 1, "span", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, HeaderComponent_Conditional_15_select_5_Template, 2, 3, "select", 42)(6, HeaderComponent_Conditional_15_span_6_Template, 2, 1, "span", 43);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.name);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.roleid == 6 && ctx_r0.corporateCode ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.overallData && ctx_r0.roleid == 6 && !ctx_r0.hideSchoolDropdown && (ctx_r0.schoolName == null ? null : ctx_r0.schoolName.length) > 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.overallData && ctx_r0.roleid == 6 && !ctx_r0.hideSchoolDropdown && (ctx_r0.schoolName == null ? null : ctx_r0.schoolName.length) === 1);
} }
function HeaderComponent_img_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 46);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r0.imgUrl + "/" + ctx_r0.profile, i0.ɵɵsanitizeUrl);
} }
function HeaderComponent_img_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 46);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r0.profile, i0.ɵɵsanitizeUrl);
} }
function HeaderComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 47);
    i0.ɵɵelement(1, "i", 48);
    i0.ɵɵelementEnd();
} }
function HeaderComponent_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵelement(1, "i", 49);
    i0.ɵɵtext(2, " My Profile ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/settings/profile/view");
} }
function HeaderComponent_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵelement(1, "i", 49);
    i0.ɵɵtext(2, " My Profile ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/studentlogin/profile/view");
} }
export class HeaderComponent {
    constructor(navServices, subject, datePipe, creatorService, router, config, auth, cdr) {
        this.navServices = navServices;
        this.subject = subject;
        this.datePipe = datePipe;
        this.creatorService = creatorService;
        this.router = router;
        this.config = config;
        this.auth = auth;
        this.cdr = cdr;
        this.open = false;
        this.openNav = false;
        this.timeZoneList = [];
        this.newsubject = inject(NewsubjectService);
        this.common = inject(CommonService);
        this.schoolService = inject(SchoolService);
        this.hideSchoolDropdown = false;
        this.rightSidebarEvent = new EventEmitter();
        const url = window.location.href;
        if (url.toString().indexOf('xtracurriculum') > -1) {
            this.logo = 'xtraCurriculum.png';
        }
        else if (url.toString().indexOf('elevenace') > -1) {
            this.logo = 'elevenAce.png';
        }
        else if (url.toString().indexOf('uniqprep') > -1) {
            this.logo = 'uniqprep.png';
        }
        else if (url.toString().indexOf('safeteen') > -1) {
            this.logo = 'safeTeensOrg.png';
        }
        else if (url.toString().indexOf('localhost') > -1 || url.toString().indexOf('uthkal') > -1 || url.toString().indexOf('edquill') > -1 || url.toString().indexOf('edveda') > -1) {
            this.logo = 'EdQuill.png';
        }
        this.imgUrl = this.config.getimgUrl();
        this.roleid = this.auth.getRoleId();
        this.overallData = this.auth.getSessionData('school_id');
        this.creatorService.contentView.subscribe((res) => {
            if (res == true) {
                this.open = true;
                this.navServices.collapseSidebar = true;
            }
            else if (res != true || res == '' || res == null) {
                this.open = false;
                this.navServices.collapseSidebar = false;
            }
            this.name = this.auth.getSessionData('firstname') + ' ' + this.auth.getSessionData('lastname');
            setTimeout(() => {
                this.cdr.detectChanges();
            }, 0);
        });
        if (this.roleid != 3) {
            this.newsubject.allowChange.subscribe((params) => {
                this.allowSelect = !(params != '' && params != false);
                setTimeout(() => {
                    this.cdr.detectChanges();
                }, 0);
            });
        }
        if (this.roleid == 2) {
            this.schoolName = JSON.parse(this.auth.getSessionData('school_details'));
        }
        else if (this.roleid == 3) {
            this.name = this.auth.getSessionData('schooldetails');
        }
        else if (['4', '5', '6'].includes(this.roleid)) {
            this.schoolName = JSON.parse(this.auth.getSessionData('school_details'));
            this.sclName = this.auth.getSessionData('school_id');
            this.corporateCode = this.auth.getSessionData('corporate_code');
        }
        else if (this.roleid == 7) {
            this.schoolName = JSON.parse(this.auth.getSessionData('school_details'));
        }
        if (this.roleid != 3 && this.roleid != 6) {
            if (this.auth.getSessionData('school_id') != '' && this.auth.getSessionData('school_id') != null) {
                this.sclName = this.auth.getSessionData('school_id');
            }
            else {
                this.sclName = this.schoolName[0]?.school_id;
            }
        }
        this.schoolService.corporateSchoolView.subscribe((res) => {
            if (res == true) {
                this.hideSchoolDropdown = true;
            }
            else if (res != true || res == '' || res == null) {
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
            const givenDate = new Date(schoolDetails?.display_until);
            const currentDate = new Date();
            if (this.auth.getRoleId() == '2') {
                showWarning = schoolDetails.payment_status == 'N' && (currentDate < givenDate || currentDate.toDateString() == givenDate.toDateString());
            }
            else {
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
        }
        else if (this.roleid == 4) {
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
        else if (this.roleid == 5) {
            this.schoolName.forEach((item) => {
                if (item.school_id == data) {
                    this.auth.setSessionData('school_name', item.name);
                    this.auth.setSessionData('rista_data1', JSON.stringify(item));
                    this.auth.setSessionData('school_profile', item.profile_url);
                    this.auth.setSessionData('teacher_id', item.school_idno);
                }
            });
        }
        else if (this.roleid == 6) {
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
    static { this.ɵfac = function HeaderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HeaderComponent)(i0.ɵɵdirectiveInject(i1.NavService), i0.ɵɵdirectiveInject(i2.SubjectServices), i0.ɵɵdirectiveInject(i3.DatePipe), i0.ɵɵdirectiveInject(i4.CreatorService), i0.ɵɵdirectiveInject(i5.Router), i0.ɵɵdirectiveInject(i6.ConfigurationService), i0.ɵɵdirectiveInject(i7.AuthService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HeaderComponent, selectors: [["app-header"]], outputs: { rightSidebarEvent: "rightSidebarEvent" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 38, vars: 16, consts: [[1, "app-topbar", "shadow-sm"], [1, "topbar-inner", "container-fluid"], [1, "topbar-left"], ["type", "button", "ngbTooltip", "Toggle navigation", "placement", "bottom", 1, "btn", "btn-icon", "btn-outline-primary", "topbar-icon", "d-none", "d-lg-inline-flex", 3, "click"], [1, "bi", "bi-layout-sidebar-inset"], ["type", "button", "ngbTooltip", "Toggle navigation", "placement", "bottom", 1, "btn", "btn-icon", "btn-outline-primary", "topbar-icon", "d-inline-flex", "d-lg-none", "me-2", 3, "click"], [1, "bi", "bi-list"], ["role", "button", 1, "topbar-logo", "d-flex", "align-items-center", "gap-2", 3, "click"], ["alt", "EdQuill logo", "height", "34", 1, "topbar-logo__image", 3, "src"], [1, "topbar-logo__text", "d-none", "d-md-inline", "fw-semibold", "text-neutral-900"], [1, "topbar-center"], [1, "subscription-banner"], [1, "topbar-actions"], [1, "topbar-switcher", "d-none", "d-md-flex", "align-items-center"], ["type", "button", "toggleFullscreen", "", "ngbTooltip", "Toggle full screen", "placement", "bottom", 1, "btn", "btn-icon", "btn-outline-secondary", "topbar-icon", "ms-2"], [1, "bi", "bi-arrows-fullscreen"], ["ngbDropdown", "", "placement", "bottom-end", 1, "dropdown", "topbar-user", "ms-2"], ["ngbDropdownToggle", "", "type", "button", "aria-label", "Open user menu", 1, "btn", "btn-user", "d-flex", "align-items-center"], [1, "avatar", "avatar-sm"], ["alt", "Profile image", "class", "avatar-img", 3, "src", 4, "ngIf"], ["class", "avatar-placeholder", 4, "ngIf"], [1, "d-none", "d-md-inline", "ms-2", "text-start"], [1, "fw-semibold", "text-neutral-900", "d-block"], [1, "bi", "bi-chevron-down", "ms-2", "text-neutral-500"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end", "shadow-sm", "p-2"], ["type", "button", 1, "dropdown-item", 3, "routerLink"], [1, "bi", "bi-shield-lock", "me-2", "text-success"], [1, "dropdown-divider"], ["type", "button", 1, "dropdown-item", "text-danger", 3, "click"], [1, "bi", "bi-box-arrow-right", "me-2"], [1, "bi", "bi-info-circle-fill", "me-2"], ["href", "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-8YL46966WX816621MMWSYSKQ", "target", "_blank", "rel", "noopener", 1, "subscription-banner__link"], [1, "form-label", "text-neutral-600", "me-2", "mb-0"], ["class", "form-select form-select-sm w-auto", 3, "disabled", "ngModel", "change", "ngModelChange", 4, "ngIf"], ["class", "fw-medium text-neutral-700", 4, "ngIf"], [1, "form-select", "form-select-sm", "w-auto", 3, "change", "ngModelChange", "disabled", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "fw-medium", "text-neutral-700"], [1, "d-flex", "flex-column"], [1, "fw-semibold", "text-neutral-800"], [1, "text-neutral-500", "small"], ["class", "form-select form-select-sm w-auto ms-3", 3, "disabled", "ngModel", "change", "ngModelChange", 4, "ngIf"], ["class", "fw-medium text-neutral-700 ms-3", 4, "ngIf"], [1, "form-select", "form-select-sm", "w-auto", "ms-3", 3, "change", "ngModelChange", "disabled", "ngModel"], [1, "fw-medium", "text-neutral-700", "ms-3"], ["alt", "Profile image", 1, "avatar-img", 3, "src"], [1, "avatar-placeholder"], [1, "bi", "bi-person-fill"], [1, "bi", "bi-person-circle", "me-2", "text-primary"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
            i0.ɵɵlistener("click", function HeaderComponent_Template_button_click_3_listener() { return ctx.collapseSidebar(); });
            i0.ɵɵelement(4, "i", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "button", 5);
            i0.ɵɵlistener("click", function HeaderComponent_Template_button_click_5_listener() { return ctx.collapseSidebar(); });
            i0.ɵɵelement(6, "i", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "a", 7);
            i0.ɵɵlistener("click", function HeaderComponent_Template_a_click_7_listener() { return ctx.navigateToDefaultPages(); });
            i0.ɵɵelement(8, "img", 8);
            i0.ɵɵelementStart(9, "span", 9);
            i0.ɵɵtext(10, " Enterprise");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(11, "div", 10);
            i0.ɵɵtemplate(12, HeaderComponent_Conditional_12_Template, 10, 1, "div", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 12);
            i0.ɵɵtemplate(14, HeaderComponent_Conditional_14_Template, 5, 2, "div", 13)(15, HeaderComponent_Conditional_15_Template, 7, 4, "div", 13);
            i0.ɵɵelementStart(16, "button", 14);
            i0.ɵɵelement(17, "i", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 16)(19, "button", 17)(20, "span", 18);
            i0.ɵɵtemplate(21, HeaderComponent_img_21_Template, 1, 1, "img", 19)(22, HeaderComponent_img_22_Template, 1, 1, "img", 19)(23, HeaderComponent_span_23_Template, 2, 0, "span", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "span", 21)(25, "span", 22);
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(27, "i", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div", 24);
            i0.ɵɵtemplate(29, HeaderComponent_Conditional_29_Template, 3, 1, "button", 25)(30, HeaderComponent_Conditional_30_Template, 3, 1, "button", 25);
            i0.ɵɵelementStart(31, "button", 25);
            i0.ɵɵelement(32, "i", 26);
            i0.ɵɵtext(33, " Change Password ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(34, "div", 27);
            i0.ɵɵelementStart(35, "button", 28);
            i0.ɵɵlistener("click", function HeaderComponent_Template_button_click_35_listener() { return ctx.logout(); });
            i0.ɵɵelement(36, "i", 29);
            i0.ɵɵtext(37, " Logout ");
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            let tmp_3_0;
            let tmp_4_0;
            let tmp_9_0;
            i0.ɵɵclassProp("sidebar-collapsed", !ctx.open);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("src", "assets/images/" + ctx.logo, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.auth.loggedIn() && ctx.showPaymentMessage() ? 12 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(i0.ɵɵpureFunction0(13, _c0).includes((tmp_3_0 = ctx.roleid) !== null && tmp_3_0 !== undefined ? tmp_3_0 : "") ? 14 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(i0.ɵɵpureFunction0(14, _c1).includes((tmp_4_0 = ctx.roleid) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "") ? 15 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.profile && !ctx.listCheck);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.profile && ctx.listCheck);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.profile);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("Welcome ", ctx.name, "");
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(i0.ɵɵpureFunction0(15, _c2).includes((tmp_9_0 = ctx.roleid) !== null && tmp_9_0 !== undefined ? tmp_9_0 : "") ? 29 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.roleid == "5" ? 30 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("routerLink", "/users/change-password");
        } }, dependencies: [CommonModule, i3.NgForOf, i3.NgIf, FormsModule, i8.NgSelectOption, i8.ɵNgSelectMultipleOption, i8.SelectControlValueAccessor, i8.NgControlStatus, i8.NgModel, RouterModule, i5.RouterLink, ToggleFullscreenDirective,
            NgbDropdownModule, i9.NgbDropdown, i9.NgbDropdownToggle, i9.NgbDropdownMenu, NgbTooltipModule, i9.NgbTooltip], styles: [".app-topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1040;\n  width: 100%;\n  background-color: #fff;\n  border-bottom: 1px solid var(--neutral-200);\n\n  &.sidebar-collapsed {\n    .topbar-logo__text {\n      display: none;\n    }\n  }\n}\n\n.topbar-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 64px;\n  gap: var(--spacing-4);\n}\n\n.topbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-3);\n}\n\n.topbar-icon[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: var(--radius-md);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--neutral-700);\n\n  i {\n    font-size: 1.1rem;\n  }\n}\n\n.topbar-logo[_ngcontent-%COMP%] {\n  text-decoration: none;\n\n  &__image {\n    max-height: 36px;\n    border-radius: var(--radius-sm);\n  }\n\n  &__text {\n    font-size: 1rem;\n    color: var(--neutral-800);\n  }\n}\n\n.topbar-center[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n\n.subscription-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-2);\n  padding: var(--spacing-3) var(--spacing-4);\n  background: linear-gradient(135deg, rgba(255, 208, 0, 0.16), rgba(255, 234, 167, 0.32));\n  border: 1px solid rgba(255, 193, 7, 0.35);\n  border-radius: var(--radius-lg);\n  color: var(--neutral-800);\n  font-size: 0.9rem;\n\n  .subscription-banner__link {\n    font-weight: 600;\n    color: var(--color-primary);\n  }\n}\n\n.topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-3);\n}\n\n.topbar-switcher[_ngcontent-%COMP%] {\n  background-color: var(--neutral-50);\n  border: 1px solid var(--neutral-200);\n  padding: var(--spacing-2) var(--spacing-3);\n  border-radius: var(--radius-lg);\n\n  .form-select {\n    min-width: 180px;\n  }\n}\n\n.btn-user[_ngcontent-%COMP%] {\n  border: 1px solid var(--neutral-200);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-2) var(--spacing-3);\n  background-color: #fff;\n  min-height: 2.5rem;\n  transition: box-shadow var(--transition-fast) ease;\n\n  &:hover,\n  &:focus {\n    box-shadow: var(--shadow-sm);\n  }\n}\n\n.avatar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: var(--neutral-100);\n  overflow: hidden;\n\n  &-img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  &-placeholder {\n    color: var(--color-primary);\n    font-size: 1.25rem;\n  }\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n\n  .dropdown-item {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-2);\n    border-radius: var(--radius-md);\n    padding: var(--spacing-2) var(--spacing-3);\n\n    &:hover {\n      background-color: var(--neutral-100);\n    }\n  }\n}\n\n@media (max-width: 991.98px) {\n  .topbar-inner[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: var(--spacing-2);\n  }\n\n  .topbar-center[_ngcontent-%COMP%], \n   .subscription-banner[_ngcontent-%COMP%] {\n    width: 100%;\n    order: 3;\n  }\n\n  .topbar-actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: var(--spacing-2);\n    width: 100%;\n    justify-content: flex-end;\n  }\n\n  .btn-user[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: space-between;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HeaderComponent, [{
        type: Component,
        args: [{ selector: 'app-header', standalone: true, imports: [
                    CommonModule,
                    FormsModule,
                    RouterModule,
                    FeatherIconsComponent,
                    ToggleFullscreenDirective,
                    NgbDropdownModule,
                    NgbTooltipModule
                ], template: "<header class=\"app-topbar shadow-sm\" [class.sidebar-collapsed]=\"!open\">\n  <div class=\"topbar-inner container-fluid\">\n    <div class=\"topbar-left\">\n      <button\n        type=\"button\"\n        class=\"btn btn-icon btn-outline-primary topbar-icon d-none d-lg-inline-flex\"\n        (click)=\"collapseSidebar()\"\n        ngbTooltip=\"Toggle navigation\"\n        placement=\"bottom\"\n      >\n        <i class=\"bi bi-layout-sidebar-inset\"></i>\n      </button>\n\n      <button\n        type=\"button\"\n        class=\"btn btn-icon btn-outline-primary topbar-icon d-inline-flex d-lg-none me-2\"\n        (click)=\"collapseSidebar()\"\n        ngbTooltip=\"Toggle navigation\"\n        placement=\"bottom\"\n      >\n        <i class=\"bi bi-list\"></i>\n      </button>\n\n      <a class=\"topbar-logo d-flex align-items-center gap-2\" role=\"button\" (click)=\"navigateToDefaultPages()\">\n        <img class=\"topbar-logo__image\" [src]=\"'assets/images/' + logo\" alt=\"EdQuill logo\" height=\"34\" />\n        <span class=\"topbar-logo__text d-none d-md-inline fw-semibold text-neutral-900\">EdQuill Enterprise</span>\n      </a>\n    </div>\n\n    <div class=\"topbar-center\">\n      @if (auth.loggedIn() && showPaymentMessage()) {\n        <div class=\"subscription-banner\">\n          <i class=\"bi bi-info-circle-fill me-2\"></i>\n          <span>\n            Dear Customer, your subscription is due for renewal.\n            Please complete the payment\n            <a\n              class=\"subscription-banner__link\"\n              href=\"https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-8YL46966WX816621MMWSYSKQ\"\n              target=\"_blank\"\n              rel=\"noopener\"\n            >\n              here\n            </a>\n            before <strong>{{ showDate() }}</strong> to continue the service.\n          </span>\n        </div>\n      }\n    </div>\n\n    <div class=\"topbar-actions\">\n      @if (['2', '4', '5'].includes(roleid ?? '')) {\n        <div class=\"topbar-switcher d-none d-md-flex align-items-center\">\n          <label class=\"form-label text-neutral-600 me-2 mb-0\">Institution</label>\n          <select\n            class=\"form-select form-select-sm w-auto\"\n            *ngIf=\"schoolName?.length > 1\"\n            [disabled]=\"!allowSelect\"\n            (change)=\"schoolChangeList($event.target.value)\"\n            [(ngModel)]=\"sclName\"\n          >\n            <option *ngFor=\"let school of schoolName\" [value]=\"school.school_id\">\n              {{ school.name }}\n            </option>\n          </select>\n          <span *ngIf=\"schoolName?.length === 1\" class=\"fw-medium text-neutral-700\">{{ schoolName[0].name }}</span>\n        </div>\n      }\n\n      @if (['3', '6'].includes(roleid ?? '')) {\n        <div class=\"topbar-switcher d-none d-md-flex align-items-center\">\n          <div class=\"d-flex flex-column\">\n            <span class=\"fw-semibold text-neutral-800\">{{ name }}</span>\n            @if (roleid == 6 && corporateCode) {\n              <span class=\"text-neutral-500 small\">Corporate ID: {{ corporateCode }}</span>\n            }\n          </div>\n          <select\n            class=\"form-select form-select-sm w-auto ms-3\"\n            *ngIf=\"overallData && roleid == 6 && !hideSchoolDropdown && schoolName?.length > 1\"\n            [disabled]=\"!allowSelect\"\n            (change)=\"schoolChangeList($event.target.value)\"\n            [(ngModel)]=\"sclName\"\n          >\n            <option *ngFor=\"let school of schoolName\" [value]=\"school.school_id\">\n              {{ school.name }}\n            </option>\n          </select>\n          <span\n            *ngIf=\"overallData && roleid == 6 && !hideSchoolDropdown && schoolName?.length === 1\"\n            class=\"fw-medium text-neutral-700 ms-3\"\n          >\n            {{ schoolName[0]?.name }}\n          </span>\n        </div>\n      }\n\n      <button\n        type=\"button\"\n        class=\"btn btn-icon btn-outline-secondary topbar-icon ms-2\"\n        toggleFullscreen\n        ngbTooltip=\"Toggle full screen\"\n        placement=\"bottom\"\n      >\n        <i class=\"bi bi-arrows-fullscreen\"></i>\n      </button>\n\n      <div class=\"dropdown topbar-user ms-2\" ngbDropdown placement=\"bottom-end\">\n        <button\n          class=\"btn btn-user d-flex align-items-center\"\n          ngbDropdownToggle\n          type=\"button\"\n          aria-label=\"Open user menu\"\n        >\n          <span class=\"avatar avatar-sm\">\n            <img\n              *ngIf=\"profile && !listCheck\"\n              [src]=\"imgUrl + '/' + profile\"\n              alt=\"Profile image\"\n              class=\"avatar-img\"\n            />\n            <img\n              *ngIf=\"profile && listCheck\"\n              [src]=\"profile\"\n              alt=\"Profile image\"\n              class=\"avatar-img\"\n            />\n            <span *ngIf=\"!profile\" class=\"avatar-placeholder\">\n              <i class=\"bi bi-person-fill\"></i>\n            </span>\n          </span>\n          <span class=\"d-none d-md-inline ms-2 text-start\">\n            <span class=\"fw-semibold text-neutral-900 d-block\">Welcome {{ name }}</span>\n\n          </span>\n          <i class=\"bi bi-chevron-down ms-2 text-neutral-500\"></i>\n        </button>\n        <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-end shadow-sm p-2\">\n          @if (['2', '3', '4', '6'].includes(roleid ?? '')) {\n            <button class=\"dropdown-item\" type=\"button\" [routerLink]=\"'/settings/profile/view'\">\n              <i class=\"bi bi-person-circle me-2 text-primary\"></i>\n              My Profile\n            </button>\n          }\n          @if (roleid == '5') {\n            <button class=\"dropdown-item\" type=\"button\" [routerLink]=\"'/studentlogin/profile/view'\">\n              <i class=\"bi bi-person-circle me-2 text-primary\"></i>\n              My Profile\n            </button>\n          }\n          <button class=\"dropdown-item\" type=\"button\" [routerLink]=\"'/users/change-password'\">\n            <i class=\"bi bi-shield-lock me-2 text-success\"></i>\n            Change Password\n          </button>\n          <div class=\"dropdown-divider\"></div>\n          <button class=\"dropdown-item text-danger\" type=\"button\" (click)=\"logout()\">\n            <i class=\"bi bi-box-arrow-right me-2\"></i>\n            Logout\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n", styles: [".app-topbar {\n  position: sticky;\n  top: 0;\n  z-index: 1040;\n  width: 100%;\n  background-color: #fff;\n  border-bottom: 1px solid var(--neutral-200);\n\n  &.sidebar-collapsed {\n    .topbar-logo__text {\n      display: none;\n    }\n  }\n}\n\n.topbar-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 64px;\n  gap: var(--spacing-4);\n}\n\n.topbar-left {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-3);\n}\n\n.topbar-icon {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: var(--radius-md);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--neutral-700);\n\n  i {\n    font-size: 1.1rem;\n  }\n}\n\n.topbar-logo {\n  text-decoration: none;\n\n  &__image {\n    max-height: 36px;\n    border-radius: var(--radius-sm);\n  }\n\n  &__text {\n    font-size: 1rem;\n    color: var(--neutral-800);\n  }\n}\n\n.topbar-center {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n\n.subscription-banner {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-2);\n  padding: var(--spacing-3) var(--spacing-4);\n  background: linear-gradient(135deg, rgba(255, 208, 0, 0.16), rgba(255, 234, 167, 0.32));\n  border: 1px solid rgba(255, 193, 7, 0.35);\n  border-radius: var(--radius-lg);\n  color: var(--neutral-800);\n  font-size: 0.9rem;\n\n  .subscription-banner__link {\n    font-weight: 600;\n    color: var(--color-primary);\n  }\n}\n\n.topbar-actions {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-3);\n}\n\n.topbar-switcher {\n  background-color: var(--neutral-50);\n  border: 1px solid var(--neutral-200);\n  padding: var(--spacing-2) var(--spacing-3);\n  border-radius: var(--radius-lg);\n\n  .form-select {\n    min-width: 180px;\n  }\n}\n\n.btn-user {\n  border: 1px solid var(--neutral-200);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-2) var(--spacing-3);\n  background-color: #fff;\n  min-height: 2.5rem;\n  transition: box-shadow var(--transition-fast) ease;\n\n  &:hover,\n  &:focus {\n    box-shadow: var(--shadow-sm);\n  }\n}\n\n.avatar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: var(--neutral-100);\n  overflow: hidden;\n\n  &-img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  &-placeholder {\n    color: var(--color-primary);\n    font-size: 1.25rem;\n  }\n}\n\n.dropdown-menu {\n  border-radius: var(--radius-lg);\n\n  .dropdown-item {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-2);\n    border-radius: var(--radius-md);\n    padding: var(--spacing-2) var(--spacing-3);\n\n    &:hover {\n      background-color: var(--neutral-100);\n    }\n  }\n}\n\n@media (max-width: 991.98px) {\n  .topbar-inner {\n    flex-wrap: wrap;\n    gap: var(--spacing-2);\n  }\n\n  .topbar-center,\n  .subscription-banner {\n    width: 100%;\n    order: 3;\n  }\n\n  .topbar-actions {\n    flex-wrap: wrap;\n    gap: var(--spacing-2);\n    width: 100%;\n    justify-content: flex-end;\n  }\n\n  .btn-user {\n    flex: 1 1 auto;\n    justify-content: space-between;\n  }\n}\n"] }]
    }], () => [{ type: i1.NavService }, { type: i2.SubjectServices }, { type: i3.DatePipe }, { type: i4.CreatorService }, { type: i5.Router }, { type: i6.ConfigurationService }, { type: i7.AuthService }, { type: i0.ChangeDetectorRef }], { rightSidebarEvent: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HeaderComponent, { className: "HeaderComponent" }); })();
//# sourceMappingURL=header.component.js.map