import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { SessionConstants } from '../../../shared/data/sessionConstants';
import { urls } from '../../../shared/utils/urls';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/router";
import * as i3 from "../../../shared/service/login.service";
import * as i4 from "../../../environment.service";
import * as i5 from "../../../shared/service/common-data.service";
import * as i6 from "../../../shared/service/common.service";
import * as i7 from "ngx-device-detector";
import * as i8 from "../../../shared/service/student.service";
import * as i9 from "../../../shared/service/auth.service";
import * as i10 from "../../../shared/service/configuration.service";
import * as i11 from "ngx-toastr";
import * as i12 from "../../../shared/service/validation.service";
import * as i13 from "@ng-bootstrap/ng-bootstrap";
import * as i14 from "../../../shared/service/School.service";
import * as i15 from "../../../shared/service/newsubject.service";
import * as i16 from "@angular/common";
const _c0 = ["tcupdate"];
function TutorconnectComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelement(1, "img", 6);
    i0.ɵɵelementEnd();
} }
function TutorconnectComponent_section_3_em_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "User name is required");
    i0.ɵɵelementEnd();
} }
function TutorconnectComponent_section_3_em_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function TutorconnectComponent_section_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "div", 11);
    i0.ɵɵelement(5, "img", 12);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 13)(7, "div", 14)(8, "div", 15)(9, "h4", 16);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 17)(12, "div", 18);
    i0.ɵɵelement(13, "div", 19)(14, "div", 20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 21)(16, "p");
    i0.ɵɵtext(17, "or Sign in with Email");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 22)(19, "form", 23)(20, "div", 24);
    i0.ɵɵelement(21, "input", 25);
    i0.ɵɵtemplate(22, TutorconnectComponent_section_3_em_22_Template, 2, 0, "em", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 24)(24, "div", 27);
    i0.ɵɵelement(25, "input", 28);
    i0.ɵɵelementStart(26, "div", 29);
    i0.ɵɵlistener("click", function TutorconnectComponent_section_3_Template_div_click_26_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.conps = !ctx_r1.conps); });
    i0.ɵɵelementStart(27, "span", 30);
    i0.ɵɵelement(28, "i", 31);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(29, TutorconnectComponent_section_3_em_29_Template, 2, 0, "em", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "div", 32)(31, "div", 33);
    i0.ɵɵelement(32, "input", 34);
    i0.ɵɵelementStart(33, "label", 35);
    i0.ɵɵtext(34, "Remember me");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "a", 36);
    i0.ɵɵtext(36, "Forgot password");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(37, "div", 37)(38, "button", 38);
    i0.ɵɵtext(39, "Login");
    i0.ɵɵelement(40, "i", 39);
    i0.ɵɵelementEnd()()()()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵpropertyInterpolate1("src", "assets/images/", ctx_r1.logo, "", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Login To ", ctx_r1.siteName, "");
    i0.ɵɵadvance(3);
    i0.ɵɵattribute("data-login_uri", ctx_r1.backEndURLSignIn);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r1.loginForm);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.loginForm.get("userName").valid && (ctx_r1.loginForm.get("userName").dirty || ctx_r1.loginForm.get("userName").touched));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", ctx_r1.conps ? "password" : "text");
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r1.conps ? "fa fa-eye-slash" : "fa fa-eye");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.loginForm.get("password").valid && (ctx_r1.loginForm.get("password").dirty || ctx_r1.loginForm.get("password").touched));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("routerLink", "/forgotPassword/content");
} }
function TutorconnectComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41)(1, "h4", 42);
    i0.ɵɵtext(2, "Terms & Conditions and Privacy Policy");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 43)(4, "div", 44)(5, "div", 8)(6, "div", 45)(7, "input", 46);
    i0.ɵɵtwoWayListener("ngModelChange", function TutorconnectComponent_ng_template_4_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.checkterms, $event) || (ctx_r1.checkterms = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9, "I accept ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "a", 47)(11, "span", 48);
    i0.ɵɵtext(12, "Terms & Conditions");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14, " and ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "a", 49);
    i0.ɵɵtext(16, "Privacy Policy");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(17, "div", 50)(18, "button", 51);
    i0.ɵɵlistener("click", function TutorconnectComponent_ng_template_4_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.confirmtermDetails()); });
    i0.ɵɵtext(19, "Submit");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.checkterms);
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("disabled", ctx_r1.checkterms == undefined || !ctx_r1.checkterms);
} }
export class TutorconnectComponent {
    constructor(formBuilder, activateRoute, loginService, env, commondata, common, deviceService, student, authService, config, router, toastr, validation, modalService, schoolService, behavior, renderer) {
        this.formBuilder = formBuilder;
        this.activateRoute = activateRoute;
        this.loginService = loginService;
        this.env = env;
        this.commondata = commondata;
        this.common = common;
        this.deviceService = deviceService;
        this.student = student;
        this.authService = authService;
        this.config = config;
        this.router = router;
        this.toastr = toastr;
        this.validation = validation;
        this.modalService = modalService;
        this.schoolService = schoolService;
        this.behavior = behavior;
        this.renderer = renderer;
        this.conps = true;
        this.conps1 = true;
        this.settingData = [];
        this.timeZoneList = [];
        this.backEndURLSignIn = '';
        this.gradeList = [];
        this.siteName = '';
        this.activateRoute.params.forEach((params) => {
            console.log(params, 'params');
            this.type = params.enc_key;
            this.remember = false;
            console.log('servuce');
            console.log(this.type, 'type');
        });
        localStorage.clear();
        const url = window.location.href;
        console.log(url, 'url');
        this.loginForm = this.formBuilder.group({
            userName: '',
            password: '',
            checkbox: '',
        });
        if (url.toString().indexOf('xtracurriculum') > -1) {
            this.logo = 'xtraCurriculum.png';
            this.siteName = 'XtraCurriculum';
        }
        else if (url.toString().indexOf('safeteen') > -1) {
            this.logo = 'safeTeensOrg.png';
            this.siteName = 'SafeTeensOrg';
        }
        else if (url.toString().indexOf('elevenace') > -1) {
            this.logo = 'elevenAce.png';
        }
        else if (url.toString().indexOf('uniqprep') > -1) {
            this.logo = 'uniqprep.png';
            this.siteName = 'Uniqprep';
        }
        else if (url.toString().indexOf('localhost') > -1 || url.toString().indexOf('uthkal') > -1 || url.toString().indexOf('edquill') > -1 || url.toString().indexOf('edveda') > -1) {
            this.logo = 'EdQuill_2.png';
            this.siteName = 'EdQuill';
        }
    }
    ngOnInit() {
        this.userValidate();
        this.loadGoogleSignInScript();
    }
    loadGoogleSignInScript() {
        const script = this.renderer.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.defer = true;
        document.body.appendChild(script);
    }
    userValidate() {
        const payload = {
            platform: 'web',
            enc_key: this.type
        };
        this.authService.postService(payload, urls.validateUser).subscribe((successData) => {
            if (successData.IsSuccess) {
                this.loginSuccess(successData);
            }
            else {
                this.toastr.error(successData.ErrorObject);
                this.router.navigate(['/auth/login']);
            }
        });
    }
    loginSuccess(successData) {
        if (successData.ResponseObject.user_role == '2') {
            this.loginAdminSuccess(successData);
        }
        else if (successData.ResponseObject.user_role == '3') {
            this.loginCreatorSuccess(successData);
        }
        else if (successData.ResponseObject.user_role == '4') {
            this.loginSchoolSuccess(successData);
        }
        else if (successData.ResponseObject.user_role == '5') {
            this.loginStudentSuccess(successData);
        }
        else if (successData.ResponseObject.user_role == '6') {
            this.loginCorporatesSuccess(successData);
        }
        else if (successData.ResponseObject.user_role == '7') {
            this.loginGraderSuccess(successData);
        }
    }
    loginAdminSuccess(successData) {
        this.admindata = successData.ResponseObject;
        if (successData.IsSuccess) {
            this.userId = this.admindata.user_id;
            this.roleId = this.admindata.user_role;
            this.authService.setToken(this.admindata.user_id, this.admindata.first_name, this.admindata.last_name, this.admindata.user_role, this.admindata.Accesstoken);
            this.authService.setSessionData('status', this.admindata.status);
            this.authService.setSessionData('default_password', this.admindata.default_password);
            this.authService.setSessionData('birthday', this.admindata.birthday);
            this.authService.setSessionData('email_id', this.admindata.email_id);
            this.authService.setSessionData('mobile', this.admindata.mobile);
            this.authService.setSessionData('profile_url', this.admindata.profile_url);
            this.authService.setSessionData('profile_thumb_url', this.admindata.profile_thumb_url);
            this.authService.setSessionData('gender', this.admindata.gender);
            this.authService.setSessionData('location', this.admindata.location);
            this.authService.setSessionData('school_id', this.admindata.school_details[0].school_id);
            this.authService.setSessionData('school_name', this.admindata.school_details[0].name);
            this.authService.setSessionData('school_details', JSON.stringify(this.admindata.school_details));
            this.authService.setSessionData('resourceAccess', false);
            this.authService.setSessionData('rista_data1', JSON.stringify(this.admindata.school_details[0]));
            this.loginService.changeHomePage(this.admindata.user_role);
            // this.authService.setSessionData('preview_type', 'no');
            this.loginService.changeHomePage(this.admindata.user_role);
            this.settingList();
            this.getTimeZone();
            this.searchFunction();
            this.setCourseSearchValue();
            if (this.admindata.tc_status == '0') {
                this.modalRef = this.modalService.open(this.updateContent, { backdrop: 'static' });
            }
            else {
                if (this.admindata.school_details.length > 1) {
                    this.router.navigate(['/auth/select']);
                }
                else {
                    // this.toastr.success(successData.ResponseObject.message, 'Login');
                    setTimeout(() => {
                        this.admindata.school_details[0].allow_dashboard == '1' ? this.router.navigate(['/dashboard/default']) :
                            this.router.navigate(['/schedule/schedule-page']);
                    }, 700);
                    this.toastr.success(successData.ResponseObject.message, 'Login');
                }
            }
        }
        else {
            this.toastr.error(successData.ErrorObject, 'Login');
        }
    }
    settingList() {
        const data = {
            platform: 'web',
            type: 'list',
            role_id: this.authService.getRoleId(),
            user_id: this.authService.getUserId(),
            school_id: this.authService.getSessionData('school_id'),
        };
        this.common.settingsDetails(data).subscribe((successData) => {
            this.listSuccess(successData, data);
        }, (error) => {
            console.error(error, 'error');
        });
    }
    listSuccess(successData, data) {
        if (successData.IsSuccess) {
            this.settingData = successData.ResponseObject;
            this.authService.setSessionData('settingList', JSON.stringify(this.settingData));
            if (data.role_id != '5') {
                this.settingData.forEach((item) => {
                    if (item.name == 'date_format') {
                        this.behavior.changeDateFormat(item.date);
                    }
                    else if (item.name == 'timezone') {
                        this.timeZoneList.forEach((list) => {
                            if (item.value == list.id) {
                                const split = list.time_zone.split('(');
                                this.behavior.changeTimeZone(split[0]);
                            }
                        });
                    }
                });
            }
            this.authService.setSessionData('settingList', JSON.stringify(this.settingData));
        }
    }
    getTimeZone() {
        const data = {
            platform: 'web',
            role_id: this.authService.getRoleId(),
            user_id: this.authService.getUserId()
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
        }
    }
    loginCreatorSuccess(successData) {
        this.creatorData = successData.ResponseObject;
        if (successData.IsSuccess) {
            this.userId = this.creatorData.user_id;
            this.roleId = this.creatorData.user_role;
            this.authService.setToken(this.creatorData.user_id, this.creatorData.first_name, this.creatorData.last_name, this.creatorData.user_role, this.creatorData.Accesstoken);
            this.authService.setSessionData('status', this.creatorData.status);
            this.authService.setSessionData('first_name', this.creatorData.first_name);
            this.authService.setSessionData('last_name', this.creatorData.last_name);
            this.authService.setSessionData('default_password', this.creatorData.default_password);
            this.authService.setSessionData('email_id', this.creatorData.email_id);
            this.authService.setSessionData('mobile', this.creatorData.mobile);
            this.authService.setSessionData('birthday', this.creatorData.birthday);
            this.authService.setSessionData('profile_url', this.creatorData.profile_url);
            this.authService.setSessionData('profile_thumb_url', this.creatorData.profile_thumb_url);
            this.authService.setSessionData('gender', this.creatorData.gender);
            this.authService.setSessionData('location', this.creatorData.location);
            this.authService.setSessionData('school_id', this.creatorData.school_details[0].school_id);
            this.authService.setSessionData('creator_id', this.creatorData.school_idno);
            this.authService.setSessionData('address1', this.creatorData.address1);
            this.authService.setSessionData('address2', this.creatorData.address2);
            this.authService.setSessionData('city', this.creatorData.city);
            this.authService.setSessionData('statename', this.creatorData.state_name);
            this.authService.setSessionData('countryname', this.creatorData.country_name);
            this.authService.setSessionData('country', this.creatorData.country);
            this.authService.setSessionData('state', this.creatorData.state);
            this.authService.setSessionData('schooldetails', this.creatorData.school_details[0].name);
            this.authService.setSessionData('designation', this.creatorData.school_details[0].designation);
            this.authService.setSessionData('school_profile_url', this.creatorData.school_details[0].profile_url);
            this.authService.setSessionData('resourceAccess', false);
            this.behavior.changeDateFormat('MM/dd/yyyy');
            this.searchFunction();
            this.loginService.changeHomePage(this.creatorData.user_role);
            if (this.creatorData.tc_status == '0') {
                this.modalRef = this.modalService.open(this.updateContent, { backdrop: 'static' });
            }
            else {
                if (this.creatorData.school_details.length > 1) {
                    this.router.navigate(['/auth/select']);
                }
                else {
                    this.router.navigate(['/repository/content-home']);
                }
                this.toastr.success(successData.ResponseObject.message, 'Login');
            }
        }
        else {
            this.toastr.error(successData.ErrorObject, 'Login');
        }
    }
    loginSchoolSuccess(successData) {
        this.teacherdata = successData.ResponseObject;
        if (successData.IsSuccess) {
            this.userId = this.teacherdata.user_id;
            this.roleId = this.teacherdata.user_role;
            this.authService.setToken(this.teacherdata.user_id, this.teacherdata.first_name, this.teacherdata.last_name, this.teacherdata.user_role, this.teacherdata.Accesstoken);
            this.authService.setSessionData('status', this.teacherdata.status);
            this.authService.setSessionData('default_password', this.teacherdata.default_password);
            this.authService.setSessionData('email_id', this.teacherdata.email_id);
            this.authService.setSessionData('mobile', this.teacherdata.mobile);
            this.authService.setSessionData('birthday', this.teacherdata.birthday);
            this.authService.setSessionData('profile_url', this.teacherdata.profile_url);
            this.authService.setSessionData('profile_thumb_url', this.teacherdata.profile_thumb_url);
            this.authService.setSessionData('gender', this.teacherdata.gender);
            this.authService.setSessionData('address1', this.teacherdata.address1);
            this.authService.setSessionData('address2', this.teacherdata.address2);
            this.authService.setSessionData('city', this.teacherdata.city);
            this.authService.setSessionData('statename', this.teacherdata.state_name);
            this.authService.setSessionData('countryname', this.teacherdata.country_name);
            this.authService.setSessionData('country', this.teacherdata.country);
            this.authService.setSessionData('state', this.teacherdata.state);
            this.authService.setSessionData('userDetails', JSON.stringify(this.teacherdata));
            this.authService.setSessionData('resourceAccess', false);
            this.behavior.changeDateFormat('MM/dd/yyyy');
            ////Check Nav Permission////
            for (let i = 0; i < this.teacherdata.schoolDetails.length; i++) {
                for (let j = 0; j < this.teacherdata.schoolDetails[i].permissions.length; j++) {
                    this.teacherdata.schoolDetails[i].permissions[j].allowNav = false;
                    for (let k = 0; k < this.teacherdata.schoolDetails[i].permissions[j].permission.length; k++) {
                        if (this.teacherdata.schoolDetails[i].permissions[j].permission[k].status == 1) {
                            this.teacherdata.schoolDetails[i].permissions[j].allowNav = true;
                            break;
                        }
                    }
                }
            }
            this.authService.setSessionData('school_details', JSON.stringify(this.teacherdata.schoolDetails));
            this.authService.setSessionData('rista_data1', JSON.stringify(this.teacherdata.schoolDetails[0]));
            this.authService.setSessionData('school_id', this.teacherdata.schoolDetails[0].school_id);
            this.authService.setSessionData('school_name', this.teacherdata.schoolDetails[0].name);
            this.authService.setSessionData('teacher_type', this.teacherdata.schoolDetails[0].individual_teacher);
            this.authService.setSessionData('school_profile', this.teacherdata.schoolDetails[0].profile_url);
            this.settingList();
            this.loginService.changeHomePage(this.teacherdata.user_role);
            this.searchFunction();
            this.getTimeZone();
            if (this.teacherdata.tc_status == '0') {
                this.modalRef = this.modalService.open(this.updateContent, { backdrop: 'static' });
            }
            else {
                if (this.teacherdata.schoolDetails.length > 1) {
                    this.router.navigate(['/auth/select']);
                }
                else {
                    setTimeout(() => {
                        this.router.navigate(['/schedule/schedule-page']);
                    }, 700);
                    this.toastr.success(successData.ResponseObject.message, 'Login');
                }
            }
        }
        else {
            this.toastr.error(successData.ErrorObject, 'Login');
        }
    }
    loginStudentSuccess(successData) {
        this.studentdata = successData.ResponseObject;
        if (successData.IsSuccess) {
            this.userId = this.studentdata.user_id;
            this.roleId = this.studentdata.user_role;
            this.authService.setToken(this.studentdata.user_id, this.studentdata.first_name, this.studentdata.last_name, this.studentdata.user_role, this.studentdata.Accesstoken);
            this.authService.setSessionData('status', this.studentdata.status);
            this.authService.setSessionData('default_password', this.studentdata.default_password);
            this.authService.setSessionData('email_id', this.studentdata.email_id);
            this.authService.setSessionData('mobile', this.studentdata.mobile);
            this.authService.setSessionData('birthday', this.studentdata.birthday);
            this.authService.setSessionData('profile_url', this.studentdata.profile_url);
            this.authService.setSessionData('profile_thumb_url', this.studentdata.profile_thumb_url);
            this.authService.setSessionData('gender', this.studentdata.gender);
            this.authService.setSessionData('location', this.studentdata.location);
            this.loginService.changeHomePage(this.studentdata.user_role);
            this.behavior.changeDateFormat('MM/dd/yyyy');
            this.authService.setSessionData('permission', JSON.stringify(this.studentdata.school_details));
            // this.loginService.changeHomePage(this.auth.getRoleId());
            this.authService.setSessionData('school_details', JSON.stringify(this.studentdata.school_details));
            this.authService.setSessionData('rista_data1', JSON.stringify(this.studentdata.school_details[0]));
            this.authService.setSessionData('school_id', this.studentdata.school_details[0].school_id);
            this.authService.setSessionData('school_profile', this.studentdata.school_details[0].profile_url);
            this.authService.setSessionData('school_name', this.studentdata.school_details[0].name);
            this.settingList();
            this.studentSearchFunction();
            setTimeout(() => {
                if (this.studentdata.tc_status == '0') {
                    this.modalRef = this.modalService.open(this.updateContent, { backdrop: 'static' });
                }
                else {
                    if (this.studentdata.school_details.length > 1) {
                        this.router.navigate(['/auth/select']);
                    }
                    else {
                        this.router.navigate(['/student/dashboard']);
                    }
                    this.toastr.success(successData.ResponseObject.message, 'Login');
                }
            }, 700);
        }
        else {
            this.toastr.error(successData.ErrorObject, 'Login');
        }
    }
    loginCorporatesSuccess(successData) {
        const data = successData.ResponseObject;
        if (successData.IsSuccess) {
            this.userId = data.user_id;
            this.roleId = data.user_role;
            this.corporateId = data.corporate_id;
            this.authService.setToken(data.user_id, data.first_name, data.last_name, data.user_role, data.Accesstoken);
            this.authService.setSessionData('first_name', data.first_name);
            this.authService.setSessionData('last_name', data.last_name);
            this.authService.setSessionData('email_id', data.email_id);
            this.authService.setSessionData('mobile', data.mobile);
            this.authService.setSessionData('corporate_id', data.corporate_id);
            this.authService.setSessionData('corporate_code', data.corporate_code);
            this.authService.setSessionData('corporate_name', data.corporate_name);
            this.authService.setSessionData('school_profile', data.profile_url);
            this.authService.setSessionData('profile_url', data.profile_url);
            this.authService.setSessionData('resourceAccess', false);
            this.behavior.changeDateFormat('MM/dd/yyyy');
            this.loginService.changeHomePage(data.user_role);
            this.searchFunction();
            this.schoolList();
            this.toastr.success('Logged in Successfully', 'Login');
        }
        else {
            this.toastr.error(successData.ErrorObject, 'Login');
        }
    }
    loginGraderSuccess(successData) {
        this.gradedata = successData.ResponseObject;
        console.log(this.gradedata, 'gradedata');
        if (successData.IsSuccess) {
            this.userId = this.gradedata.user_id;
            this.roleId = this.gradedata.user_role;
            this.authService.setToken(this.gradedata.user_id, this.gradedata.first_name, this.gradedata.last_name, this.gradedata.user_role, this.gradedata.Accesstoken);
            this.authService.setSessionData('status', this.gradedata.status);
            this.authService.setSessionData('default_password', this.gradedata.default_password);
            this.authService.setSessionData('email_id', this.gradedata.email_id);
            this.authService.setSessionData('mobile', this.gradedata.mobile);
            this.authService.setSessionData('birthday', this.gradedata.birthday);
            this.authService.setSessionData('profile_url', this.gradedata.profile_url);
            this.authService.setSessionData('profile_thumb_url', this.gradedata.profile_thumb_url);
            this.authService.setSessionData('gender', this.gradedata.gender);
            this.authService.setSessionData('location', this.gradedata.location);
            this.behavior.changeDateFormat('MM/dd/yyyy');
            // this.authService.setSessionData('preview_type', 'no');
            this.searchFunction();
            ////Check Nav Permission////
            for (let i = 0; i < this.gradedata.schoolDetails.length; i++) {
                for (let j = 0; j < this.gradedata.schoolDetails[i].permissions.length; j++) {
                    this.gradedata.schoolDetails[i].permissions[j].allowNav = false;
                    for (let k = 0; k < this.gradedata.schoolDetails[i].permissions[j].permission.length; k++) {
                        if (this.gradedata.schoolDetails[i].permissions[j].permission[k].status == 1) {
                            this.gradedata.schoolDetails[i].permissions[j].allowNav = true;
                            break;
                        }
                    }
                }
            }
            this.authService.setSessionData('school_details', JSON.stringify(this.gradedata.schoolDetails));
            this.authService.setSessionData('rista_data1', JSON.stringify(this.gradedata.schoolDetails[0]));
            this.authService.setSessionData('school_id', this.gradedata.schoolDetails[0].school_id);
            this.authService.setSessionData('school_name', this.gradedata.schoolDetails[0].name);
            this.authService.setSessionData('teacher_type', this.gradedata.schoolDetails[0].individual_teacher);
            this.authService.setSessionData('school_profile', this.gradedata.schoolDetails[0].profile_url);
            this.loginService.changeHomePage(this.gradedata.user_role);
            this.searchFunction();
            this.loginService.changeHomePage(this.gradedata.user_role);
            this.gradedata.schoolDetails > 1 ? this.router.navigate(['/auth/select']) : this.router.navigate(['/student-content/list-content/old']);
            this.toastr.success(successData.ResponseObject.message);
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    schoolList() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.roleId ? this.roleId : '',
            user_id: this.userId ? this.userId : '',
            corporate_id: this.corporateId ? this.corporateId : ''
        };
        this.schoolService.getSchoolList(data).subscribe((successData) => {
            this.schoolListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_schoolList');
        });
    }
    schoolListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.schoolData = successData.ResponseObject;
            this.authService.setSessionData('school_details', JSON.stringify(this.schoolData));
            this.authService.setSessionData('rista_data1', this.schoolData.length != 0 ?
                JSON.stringify(this.schoolData[this.schoolData.length - 1]) : JSON.stringify(this.schoolData));
            this.authService.setSessionData('school_id', this.schoolData.length != 0 ?
                this.schoolData[this.schoolData.length - 1]?.school_id : '');
            this.authService.setSessionData('school_profile', this.schoolData.length != 0 ?
                this.schoolData[this.schoolData.length - 1]?.profile_url : '');
            // this.authService.setSessionData('profile_url', this.schoolData.length != 0 ?
            //     this.schoolData[this.schoolData.length - 1]?.profile_url : '');
            this.authService.setSessionData('school_name', this.schoolData.length != 0 ?
                this.schoolData[this.schoolData.length - 1]?.name : '');
            this.schoolData.length > 1 ? this.router.navigate(['/auth/select']) : this.router.navigate(['/dashboard/default']);
            this.searchFunction();
        }
    }
    confirmtermDetails() {
        const data = {
            platform: 'web',
            role_id: this.roleId ? this.roleId : '',
            user_id: this.userId ? this.userId : '',
            status: this.checkterms ? '1' : '0',
        };
        this.loginService.tcUpdateList(data).subscribe((successData) => {
            this.getTcListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_TermLists');
        });
    }
    getTcListSuccess(successData) {
        this.modalRef.close();
        this.toastr.success('Logged in Successfully', 'Login');
        if (this.roleId == '2') {
            if (this.admindata.school_details.length > 1) {
                this.router.navigate(['/auth/select']);
            }
            else {
                this.admindata.school_details[0].allow_dashboard == '1' ? this.router.navigate(['/dashboard/default']) :
                    this.router.navigate(['/class/list-class']);
            }
        }
        else if (this.roleId == '3') {
            this.creatorData.school_details.length > 1 ? this.router.navigate(['/auth/select']) : this.router.navigate(['/repository/content-home']);
        }
        else if (this.roleId == '4') {
            this.teacherdata.schoolDetails.length > 1 ? this.router.navigate(['/auth/select']) : this.router.navigate(['/schedule/schedule-page']);
        }
        else if (this.roleId == '5') {
            this.studentdata.school_details.length > 1 ? this.router.navigate(['/auth/select']) :
                this.router.navigate(['/student/dashboard']);
        }
        else if (this.roleId == '7') {
            this.gradedata.schoolDetails.length > 1 ? this.router.navigate(['/auth/select']) : this.router.navigate(['/student-content/list-content/old']);
        }
    }
    searchFunction() {
        const classSearchData = [{
                curriculum_Folder: undefined,
                grade: [],
                subject: [],
                teacher: null,
                className: '',
                studentName: '',
                classDateStatus: '3',
                school_id: this.authService.getSessionData('school_id'),
                course_id: []
            }];
        this.authService.setSessionData(SessionConstants.classSearch, JSON.stringify(classSearchData));
        const classCurriculumData = [{
                list_type: '',
                curriculum_type: '2',
                school_id: this.authService.getSessionData('school_id')
            }];
        this.authService.setSessionData(SessionConstants.classCurriculumSearch, JSON.stringify(classCurriculumData));
        const assignmentData = [{
                curriculum_Folder: undefined,
                teacher: undefined,
                className: '',
                assignmentDateStatus: 2,
                studentName: '',
                assignmentName: '',
                sortType: 1,
                sortButton: 'Sort by',
                school_id: this.authService.getSessionData('school_id')
            }];
        this.authService.setSessionData(SessionConstants.assignSearch, JSON.stringify(assignmentData));
        const assessmentData = [{
                curriculum_Folder: undefined,
                teacher: undefined,
                className: '',
                assessmentDateStatus: 2,
                assessmentName: '',
                studentName: '',
                sortType: 1,
                sortButton: 'Sort by',
                school_id: this.authService.getSessionData('school_id')
            }];
        this.authService.setSessionData(SessionConstants.assessSearch, JSON.stringify(assessmentData));
        const studentWorkData = [{
                curriculum_Folder: undefined,
                teacher: undefined,
                class: undefined,
                contentType: 2,
                studentName: '',
                contentName: '',
                date: '',
                teacherCorrectionStatus: '0',
                school_id: this.authService.getSessionData('school_id')
            }];
        this.authService.setSessionData(SessionConstants.studentWorkSearch, JSON.stringify(studentWorkData));
        const directContentData = [{
                contentName: '',
                extact_Search: false,
                libary: '0',
                content_userid: '0',
                sortFilter: '0',
                type_id: 'list',
                grade_id: [],
                subject_id: [],
                tag_id: [],
                selectAuthored: '',
                selectDraft: '',
                school_id: this.authService.getSessionData('school_id')
            }];
        this.authService.setSessionData(SessionConstants.directcontentSearch, JSON.stringify(directContentData));
        const contentData = [{
                contentName: '',
                extact_Search: false,
                libary: '0',
                content_userid: '0',
                sortFilter: '0',
                type_id: 'list',
                grade_id: [],
                subject_id: [],
                tag_id: [],
                selectAuthored: '',
                selectDraft: '',
                school_id: this.authService.getSessionData('school_id')
            }];
        this.authService.setSessionData(SessionConstants.non_directcontentSearch, JSON.stringify(contentData));
    }
    studentSearchFunction() {
        const classSearchData = [{
                className: '',
                classDateStatus: '3',
                school_id: this.authService.getSessionData('school_id')
            }];
        this.authService.setSessionData(SessionConstants.studentClassSearch, JSON.stringify(classSearchData));
        const resourceData = [{
                resourceName: '',
                school_id: this.authService.getSessionData('school_id')
            }];
        this.authService.setSessionData(SessionConstants.studentResourceSearch, JSON.stringify(resourceData));
        const assignmentData = [{
                assignmentDateStatus: 3,
                assignmentName: '',
                school_id: this.authService.getSessionData('school_id')
            }];
        this.authService.setSessionData(SessionConstants.studentAssignmentSearch, JSON.stringify(assignmentData));
        const assessmentData = [{
                assessmentDateStatus: 3,
                assessmentName: '',
                school_id: this.authService.getSessionData('school_id')
            }];
        this.authService.setSessionData(SessionConstants.studentAssessmentSearch, JSON.stringify(assessmentData));
        const homeData = [{
                // Class Data //
                classDateStatus: '3',
                className: '',
                classButton: 'In Progress',
                classSortType: '0',
                classSortButton: 'Sort',
                // Assignment Data //
                assignmentDateStatus: '3',
                assignmentName: '',
                assignButton: 'In Progress',
                assignSortType: '0',
                assignSortButton: 'Sort',
                // Assessment Data //
                assessmentDateStatus: '3',
                assessmentName: '',
                assessButton: 'In Progress',
                assessSortButton: 'Sort',
                assessSortType: '0',
                school_id: this.authService.getSessionData('school_id')
            }];
        this.authService.setSessionData(SessionConstants.studentHomeSearch, JSON.stringify(homeData));
    }
    setCourseSearchValue() {
        const threeLevelFilter = ['contentListSearchValue', 'courseDetailsSearchValue'];
        const singleLevelInputFilter = ['courseCategory', 'courseCreator', 'contentCategory'];
        const singleLevelFilter = ['courseSeo', 'courseFaq'];
        threeLevelFilter.forEach((items) => {
            this.authService.setSessionData(items, JSON.stringify({
                category_id: [],
                status: [],
                searchValue: ''
            }));
        });
        const inputFilterSearch = {};
        singleLevelInputFilter.forEach((items1) => {
            inputFilterSearch[items1 + 'SearchValue'] = { searchValue: '' };
        });
        singleLevelFilter.forEach((items2) => {
            inputFilterSearch[items2 + 'SearchValue'] = { course_id: null };
        });
        inputFilterSearch['contentSeoSearchValue'] = { content_id: null };
        console.log(inputFilterSearch, 'input');
        this.authService.setSessionData('commonInputSearchValue', JSON.stringify(inputFilterSearch));
        this.authService.setSessionData('courseScheduleSearchValue', JSON.stringify({ course_id: '', searchValue: '' }));
    }
    static { this.ɵfac = function TutorconnectComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TutorconnectComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.LoginService), i0.ɵɵdirectiveInject(i4.EnvironmentService), i0.ɵɵdirectiveInject(i5.CommonDataService), i0.ɵɵdirectiveInject(i6.CommonService), i0.ɵɵdirectiveInject(i7.DeviceDetectorService), i0.ɵɵdirectiveInject(i8.StudentService), i0.ɵɵdirectiveInject(i9.AuthService), i0.ɵɵdirectiveInject(i10.ConfigurationService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i11.ToastrService), i0.ɵɵdirectiveInject(i12.ValidationService), i0.ɵɵdirectiveInject(i13.NgbModal), i0.ɵɵdirectiveInject(i14.SchoolService), i0.ɵɵdirectiveInject(i15.NewsubjectService), i0.ɵɵdirectiveInject(i0.Renderer2)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TutorconnectComponent, selectors: [["app-login"]], viewQuery: function TutorconnectComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.updateContent = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 6, vars: 2, consts: [["tcupdate", ""], ["id", "pre-loader", 4, "ngIf"], [1, "page-wrapper", "auth-bg"], [1, "authentication-box-web"], ["class", "container", "style", "display: block", 4, "ngIf"], ["id", "pre-loader"], ["src", "assets/images/pre-loader/loader-01.svg", "alt", ""], [1, "container", 2, "display", "block"], [1, "row"], [1, "col-12", "col-md-5", "p-0", "card-left"], [1, "card", "bg-primary", "mb-0"], [1, "svg-icon", "d-flex", "justify-content-center", 2, "min-height", "15rem"], ["alt", "", 1, "my-2", 2, "height", "auto", "object-fit", "fill", 3, "src"], [1, "col-12", "col-md-7", "p-0", "mt-2", "card-right"], [1, "card", "tab2-card", "p-4"], [1, "card-body"], [1, "login-text"], [1, "d-flex", "justify-content-center", "google-sign"], [1, "col-6"], ["id", "g_id_onload", "data-client_id", "854159816646-f2oidr960elk0akcu27dddb9dveoj9r3.apps.googleusercontent.com", "data-context", "use", "data-ux_mode", "popup", "data-auto_prompt", "false"], ["data-type", "standard", "data-shape", "rectangular", "data-theme", "outline", "data-text", "signin_with", "data-size", "large", "data-logo_alignment", "left", 1, "g_id_signin"], [1, "tp-login-mail", "text-center", "my-4"], ["id", "account", "role", "tabpanel", "aria-labelledby", "account-tab", 1, "tab-pane", "fade", "active", "show"], ["novalidate", "", 1, "form-horizontal", "auth-form1", 3, "formGroup"], [1, "form-group"], ["autofocus", "", "required", "true", "formControlName", "userName", "name", "login[username]", "type", "email", "placeholder", "Username", "id", "exampleInputEmail1", 1, "form-control"], ["class", "error", 4, "ngIf"], [1, "input-group"], ["required", "true", "name", "login[password]", "type", "text", "formControlName", "password", "placeholder", "Password", "aria-label", "Recipient's username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "type"], [1, "input-group-append", "cursor", 3, "click"], ["id", "basic-addon3", 1, "input-group-text"], ["aria-hidden", "true"], [1, "form-terms"], [1, "custom-control", "custom-checkbox", "mr-sm-2"], ["type", "checkbox", "formControlName", "checkbox", "id", "customControlAutosizing", 1, "custom-control-input", "cursor"], ["for", "customControlAutosizing", 1, "custom-control-label"], [1, "btn", "btn-default", "forgot-pass", "italic_text", 3, "routerLink"], [1, "form-button", "align-items-center", "justify-content-end", "d-flex", "mt-3"], [1, "btn", "btn-primary", "mb-1", "w-100"], ["aria-hidden", "true", 1, "ml-2", "fa", "fa-long-arrow-right", "fa-1x"], [1, "error"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-body"], [1, "container-fluid"], [1, "col-12"], ["type", "checkbox", 1, "form-check-input", "text-center", 3, "ngModelChange", "ngModel"], ["href", "https://edquill.com/terms_and_conditions.html", "target", "_blank"], [2, "font-style", "italic", "text-decoration", "underline"], ["href", "https://edquill.com/privacy_policy.html", "target", "_blank", 2, "font-style", "italic", "text-decoration", "underline"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "disabled"]], template: function TutorconnectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TutorconnectComponent_div_0_Template, 2, 0, "div", 1);
            i0.ɵɵelementStart(1, "div", 2)(2, "div", 3);
            i0.ɵɵtemplate(3, TutorconnectComponent_section_3_Template, 41, 11, "section", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(4, TutorconnectComponent_ng_template_4_Template, 20, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.commondata.loader.value);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.type);
        } }, dependencies: [CommonModule, i16.NgIf, FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.NgModel, ReactiveFormsModule, i1.FormGroupDirective, i1.FormControlName, RouterModule, i2.RouterLink, NgbModalModule], styles: ["figure[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TutorconnectComponent, [{
        type: Component,
        args: [{ selector: 'app-login', standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, NgbModalModule], template: "<!--=================================\n preloader -->\n<div id=\"pre-loader\" *ngIf=\"commondata.loader.value\">\n    <img src=\"assets/images/pre-loader/loader-01.svg\" alt=\"\">\n</div>\n<div class=\"page-wrapper auth-bg\">\n    <div class=\"authentication-box-web\">\n\n        <section class=\"container\" style=\"display: block\" *ngIf=\"!type\">\n            <div class=\"row\">\n                <div class=\"col-12 col-md-5 p-0 card-left\">\n                    <div class=\"card bg-primary mb-0\">\n                        <div class=\"svg-icon d-flex justify-content-center\" style=\"min-height: 15rem\">\n                            <img alt=\"\" class=\"my-2\" src=\"assets/images/{{logo}}\" style=\"height: auto; object-fit: fill\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-12 col-md-7 p-0 mt-2 card-right\">\n                    <div class=\"card tab2-card p-4\">\n                        <div class=\"card-body\">\n                            <h4 class=\"login-text\">Login To {{siteName}}</h4>\n\n                            <div class=\"d-flex justify-content-center google-sign\">\n                                <div class=\"col-6\">\n\n                                    <div id=\"g_id_onload\"\n                                         data-client_id=\"854159816646-f2oidr960elk0akcu27dddb9dveoj9r3.apps.googleusercontent.com\"\n                                         data-context=\"use\"\n                                         data-ux_mode=\"popup\"\n                                         [attr.data-login_uri]=\"backEndURLSignIn\"\n                                         data-auto_prompt=\"false\">\n                                    </div>\n\n                                    <div class=\"g_id_signin\"\n                                         data-type=\"standard\"\n                                         data-shape=\"rectangular\"\n                                         data-theme=\"outline\"\n                                         data-text=\"signin_with\"\n                                         data-size=\"large\"\n                                         data-logo_alignment=\"left\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"tp-login-mail text-center my-4\"><p>or Sign in with Email</p></div>\n\n                            <div class=\"tab-pane fade active show\" id=\"account\" role=\"tabpanel\"\n                                 aria-labelledby=\"account-tab\">\n                                <form [formGroup]=\"loginForm\"\n                                      class=\"form-horizontal auth-form1\" novalidate=\"\">\n                                    <div class=\"form-group\">\n                                        <input autofocus required=\"true\" formControlName=\"userName\" name=\"login[username]\" type=\"email\"\n                                               class=\"form-control\" placeholder=\"Username\"\n                                               id=\"exampleInputEmail1\">\n                                        <em class=\"error\" *ngIf=\"!loginForm.get('userName').valid && (loginForm.get('userName').dirty || loginForm.get('userName').touched)\">User name is required</em>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <div class=\"input-group\">\n                                            <input required=\"true\"  name=\"login[password]\" type=\"text\" formControlName=\"password\"\n                                                   class=\"form-control\" placeholder=\"Password\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon1\" [type]=\"conps ? 'password' : 'text'\">\n                                            <div class=\"input-group-append cursor\" (click)=\"conps = !conps\">\n                                                <span class=\"input-group-text\" id=\"basic-addon3\">\n                                                    <i [class]=\"conps ? 'fa fa-eye-slash' : 'fa fa-eye'\" aria-hidden=\"true\"></i>\n                                                </span>\n                                            </div>\n                                        </div>\n                                        <em class=\"error\" *ngIf=\"!loginForm.get('password').valid && (loginForm.get('password').dirty || loginForm.get('password').touched)\">Password is required</em>\n                                    </div>\n                                    <div class=\"form-terms\">\n                                        <div class=\"custom-control custom-checkbox mr-sm-2\">\n                                            <input type=\"checkbox\" class=\"custom-control-input cursor\" formControlName=\"checkbox\"\n                                                   id=\"customControlAutosizing\">\n                                            <label class=\"custom-control-label\"\n                                                   for=\"customControlAutosizing\">Remember me</label>\n                                            <a [routerLink]=\"'/forgotPassword/content'\"\n                                               class=\"btn btn-default forgot-pass italic_text\">Forgot\n                                                password</a>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-button align-items-center justify-content-end d-flex mt-3\">\n                                        <button class=\"btn btn-primary mb-1 w-100\">Login<i class=\"ml-2 fa fa-long-arrow-right fa-1x\" aria-hidden=\"true\"></i></button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </div>\n</div>\n<ng-template #tcupdate let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Terms & Conditions and Privacy Policy</h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <input type=\"checkbox\" class=\"form-check-input text-center\" [(ngModel)]=\"checkterms\" ><span>I accept </span><a href=\"https://edquill.com/terms_and_conditions.html\" target=\"_blank\"><span style=\"font-style: italic; text-decoration: underline;\">Terms & Conditions</span></a> <span> and </span> <a href=\"https://edquill.com/privacy_policy.html\" target=\"_blank\" style=\"font-style: italic; text-decoration: underline;\">Privacy Policy</a>\n                </div>\n            </div>\n        </div>\n\n        <!-- Container-fluid Ends-->\n\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"confirmtermDetails()\" [disabled]=\"checkterms == undefined || !checkterms\">Submit</button>\n    </div>\n</ng-template>\n", styles: ["figure {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n"] }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.ActivatedRoute }, { type: i3.LoginService }, { type: i4.EnvironmentService }, { type: i5.CommonDataService }, { type: i6.CommonService }, { type: i7.DeviceDetectorService }, { type: i8.StudentService }, { type: i9.AuthService }, { type: i10.ConfigurationService }, { type: i2.Router }, { type: i11.ToastrService }, { type: i12.ValidationService }, { type: i13.NgbModal }, { type: i14.SchoolService }, { type: i15.NewsubjectService }, { type: i0.Renderer2 }], { updateContent: [{
            type: ViewChild,
            args: ['tcupdate']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TutorconnectComponent, { className: "TutorconnectComponent" }); })();
//# sourceMappingURL=tutorconnect.component.js.map