import { Component, ViewChild } from '@angular/core';
import { Validators } from "@angular/forms";
import { dateOptions } from "../../../shared/data/config";
import { timeZone } from "../../../shared/data/config";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
import * as i3 from "../../../shared/service/teacher.service";
import * as i4 from "ngx-toastr";
import * as i5 from "../../../shared/service/common.service";
import * as i6 from "../../../shared/service/common-data.service";
import * as i7 from "../../../shared/service/auth.service";
import * as i8 from "../../../shared/service/configuration.service";
import * as i9 from "../../../shared/service/validation.service";
import * as i10 from "@angular/platform-browser";
import * as i11 from "@angular/common";
import * as i12 from "@ng-select/ng-select";
const _c0 = ["myInput"];
function ParentRegistrationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "img", 10);
    i0.ɵɵelementEnd();
} }
function ParentRegistrationComponent_div_5_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 15);
} }
function ParentRegistrationComponent_div_5_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 16);
} }
function ParentRegistrationComponent_div_5_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 17);
} }
function ParentRegistrationComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, ParentRegistrationComponent_div_5_img_1_Template, 1, 0, "img", 12)(2, ParentRegistrationComponent_div_5_img_2_Template, 1, 0, "img", 13)(3, ParentRegistrationComponent_div_5_img_3_Template, 1, 0, "img", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.viewer == "Teacher");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.viewer == "school");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.viewer == "Parent");
} }
function ParentRegistrationComponent_div_6_h5_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 40);
    i0.ɵɵtext(1, "Contact Registration");
    i0.ɵɵelementEnd();
} }
function ParentRegistrationComponent_div_6_h5_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 40);
    i0.ɵɵtext(1, "Educator Registration");
    i0.ɵɵelementEnd();
} }
function ParentRegistrationComponent_div_6_h5_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 40);
    i0.ɵɵtext(1, "Institution Registration");
    i0.ɵɵelementEnd();
} }
function ParentRegistrationComponent_div_6_em_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 41);
    i0.ɵɵtext(1, "First name is required");
    i0.ɵɵelementEnd();
} }
function ParentRegistrationComponent_div_6_em_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 41);
    i0.ɵɵtext(1, "Last name is required");
    i0.ɵɵelementEnd();
} }
function ParentRegistrationComponent_div_6_em_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 41);
    i0.ɵɵtext(1, "Email-id is required");
    i0.ɵɵelementEnd();
} }
function ParentRegistrationComponent_div_6_em_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 41);
    i0.ɵɵtext(1, "Please Enter valid Email-id");
    i0.ɵɵelementEnd();
} }
function ParentRegistrationComponent_div_6_em_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 41);
    i0.ɵɵtext(1, "Contact Number is required");
    i0.ɵɵelementEnd();
} }
function ParentRegistrationComponent_div_6_em_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 41);
    i0.ɵɵtext(1, "Institution is required");
    i0.ɵɵelementEnd();
} }
function ParentRegistrationComponent_div_6_em_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 41);
    i0.ɵɵtext(1, "Enter Zip is required");
    i0.ɵɵelementEnd();
} }
function ParentRegistrationComponent_div_6_button_41_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 42);
    i0.ɵɵlistener("click", function ParentRegistrationComponent_div_6_button_41_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.add()); });
    i0.ɵɵtext(1, "Submit");
    i0.ɵɵelementEnd();
} }
function ParentRegistrationComponent_div_6_button_42_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 42);
    i0.ɵɵlistener("click", function ParentRegistrationComponent_div_6_button_42_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.schoolAdd()); });
    i0.ɵɵtext(1, "Submit");
    i0.ɵɵelementEnd();
} }
function ParentRegistrationComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "div", 22);
    i0.ɵɵtemplate(5, ParentRegistrationComponent_div_6_h5_5_Template, 2, 0, "h5", 23)(6, ParentRegistrationComponent_div_6_h5_6_Template, 2, 0, "h5", 23)(7, ParentRegistrationComponent_div_6_h5_7_Template, 2, 0, "h5", 23);
    i0.ɵɵelementStart(8, "p", 24);
    i0.ɵɵtext(9, "All fields is required");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 25)(11, "form", 26)(12, "div", 27)(13, "div", 28);
    i0.ɵɵelement(14, "input", 29);
    i0.ɵɵtemplate(15, ParentRegistrationComponent_div_6_em_15_Template, 2, 0, "em", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 28);
    i0.ɵɵelement(17, "input", 31);
    i0.ɵɵtemplate(18, ParentRegistrationComponent_div_6_em_18_Template, 2, 0, "em", 30);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 27)(20, "div", 20);
    i0.ɵɵelement(21, "input", 32);
    i0.ɵɵtemplate(22, ParentRegistrationComponent_div_6_em_22_Template, 2, 0, "em", 30)(23, ParentRegistrationComponent_div_6_em_23_Template, 2, 0, "em", 30);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 27)(25, "div", 20)(26, "input", 33);
    i0.ɵɵlistener("keypress", function ParentRegistrationComponent_div_6_Template_input_keypress_26_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.numberPattern($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(27, ParentRegistrationComponent_div_6_em_27_Template, 2, 0, "em", 30);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 27)(29, "div", 20);
    i0.ɵɵelement(30, "input", 34);
    i0.ɵɵtemplate(31, ParentRegistrationComponent_div_6_em_31_Template, 2, 0, "em", 30);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 27)(33, "div", 28)(34, "ng-select", 35);
    i0.ɵɵlistener("change", function ParentRegistrationComponent_div_6_Template_ng_select_change_34_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.stateList($event.country_id)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "div", 28)(36, "input", 36);
    i0.ɵɵlistener("keypress", function ParentRegistrationComponent_div_6_Template_input_keypress_36_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.numberPattern($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(37, ParentRegistrationComponent_div_6_em_37_Template, 2, 0, "em", 30);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(38, "div", 37)(39, "button", 38);
    i0.ɵɵlistener("click", function ParentRegistrationComponent_div_6_Template_button_click_39_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.pageType = 1); });
    i0.ɵɵtext(40, "Back");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(41, ParentRegistrationComponent_div_6_button_41_Template, 2, 0, "button", 39)(42, ParentRegistrationComponent_div_6_button_42_Template, 2, 0, "button", 39);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r0.viewer == "Parent");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.viewer == "Teacher");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.viewer == "school");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r0.registerForm);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r0.registerForm.get("firstName").valid && (ctx_r0.registerForm.get("firstName").dirty || ctx_r0.registerForm.get("firstName").touched));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r0.registerForm.get("lastName").valid && (ctx_r0.registerForm.get("lastName").dirty || ctx_r0.registerForm.get("lastName").touched));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.registerForm.get("email_id").hasError("required") && (ctx_r0.registerForm.get("email_id").dirty || ctx_r0.registerForm.get("email_id").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.registerForm.get("email_id").hasError("pattern"));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r0.registerForm.get("mobile").valid && (ctx_r0.registerForm.get("mobile").dirty || ctx_r0.registerForm.get("mobile").touched));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r0.registerForm.get("institution").valid && (ctx_r0.registerForm.get("institution").dirty || ctx_r0.registerForm.get("institution").touched));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("items", ctx_r0.countryListData);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r0.registerForm.get("postalCode").valid && (ctx_r0.registerForm.get("postalCode").dirty || ctx_r0.registerForm.get("postalCode").touched));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.viewer == "Teacher" || ctx_r0.viewer == "Parent");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.viewer == "school");
} }
function ParentRegistrationComponent_div_7_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 15);
} }
function ParentRegistrationComponent_div_7_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 16);
} }
function ParentRegistrationComponent_div_7_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 17);
} }
function ParentRegistrationComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, ParentRegistrationComponent_div_7_img_1_Template, 1, 0, "img", 12)(2, ParentRegistrationComponent_div_7_img_2_Template, 1, 0, "img", 13)(3, ParentRegistrationComponent_div_7_img_3_Template, 1, 0, "img", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.viewer == "Teacher");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.viewer == "school");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.viewer == "Parent");
} }
function ParentRegistrationComponent_div_8_h5_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 40);
    i0.ɵɵtext(1, "Contact Registration");
    i0.ɵɵelementEnd();
} }
function ParentRegistrationComponent_div_8_h5_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 40);
    i0.ɵɵtext(1, "Educator Registration");
    i0.ɵɵelementEnd();
} }
function ParentRegistrationComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 43)(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "div", 22);
    i0.ɵɵtemplate(5, ParentRegistrationComponent_div_8_h5_5_Template, 2, 0, "h5", 23)(6, ParentRegistrationComponent_div_8_h5_6_Template, 2, 0, "h5", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 25)(8, "div", 44)(9, "p");
    i0.ɵɵtext(10, "Thank you for registering with EdQuill. You would have received an email to login to the platform. Kindly check your spam folder as well.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 37)(12, "button", 42);
    i0.ɵɵlistener("click", function ParentRegistrationComponent_div_8_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.redirectPage("web")); });
    i0.ɵɵtext(13, "Ok");
    i0.ɵɵelementEnd()()()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r0.viewer == "Parent");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.viewer == "Teacher");
} }
function ParentRegistrationComponent_div_9_h5_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 40);
    i0.ɵɵtext(1, "Institution Registration");
    i0.ɵɵelementEnd();
} }
function ParentRegistrationComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 43)(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "div", 22);
    i0.ɵɵtemplate(5, ParentRegistrationComponent_div_9_h5_5_Template, 2, 0, "h5", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 25)(7, "div", 44)(8, "p");
    i0.ɵɵtext(9, "Thank you for Registering with EdQuill. Our team will get in touch with you within 48 hours.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 37)(11, "button", 42);
    i0.ɵɵlistener("click", function ParentRegistrationComponent_div_9_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.redirectPage("static")); });
    i0.ɵɵtext(12, "Ok");
    i0.ɵɵelementEnd()()()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r0.viewer == "school");
} }
function ParentRegistrationComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45)(1, "div", 19)(2, "h3", 46)(3, "b");
    i0.ɵɵtext(4, "Register as ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 47);
    i0.ɵɵlistener("click", function ParentRegistrationComponent_div_10_Template_div_click_5_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.pageNav("Teacher")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(6, "svg", 48)(7, "g", 49);
    i0.ɵɵelement(8, "path", 50);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(9, "div", 51)(10, "span", 52);
    i0.ɵɵtext(11, "Educator");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 47);
    i0.ɵɵlistener("click", function ParentRegistrationComponent_div_10_Template_div_click_12_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.pageNav("Parent")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(13, "svg", 53)(14, "g", 54);
    i0.ɵɵelement(15, "circle", 55)(16, "path", 56)(17, "circle", 57)(18, "path", 58)(19, "path", 59)(20, "path", 60)(21, "path", 61)(22, "path", 62);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(23, "div", 51)(24, "span", 52);
    i0.ɵɵtext(25, "Contact");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 47);
    i0.ɵɵlistener("click", function ParentRegistrationComponent_div_10_Template_div_click_26_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.pageNav("school")); });
    i0.ɵɵelement(27, "i", 63);
    i0.ɵɵelementStart(28, "div", 51)(29, "span", 52);
    i0.ɵɵtext(30, "Institution");
    i0.ɵɵelementEnd()()()()();
} }
export class ParentRegistrationComponent {
    constructor(route, formBuilder, teacher, toastr, common, commondata, auth, router, config, validationService, sanitizer, datePipe) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.teacher = teacher;
        this.toastr = toastr;
        this.common = common;
        this.commondata = commondata;
        this.auth = auth;
        this.router = router;
        this.config = config;
        this.validationService = validationService;
        this.sanitizer = sanitizer;
        this.datePipe = datePipe;
        this.setDate = new Date().toLocaleString('en-US', { timeZone: timeZone.location });
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getDate() != 1 ? new Date(this.setDate).getMonth() + 1 : new Date(this.setDate).getMonth(),
                day: new Date(this.setDate).getDate() != 1 ? new Date(this.setDate).getDate() - 1 : new Date(this.setDate).getMonth() === 1 || 3 || 5 || 7 || 8 || 10 || 12 ? 31 : 30,
            },
        };
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableSince: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getMonth() + 1,
                day: new Date(this.setDate).getDate() + 1
            },
        };
        this.pageType = 1;
        this.webhost = this.config.getimgUrl();
        // this.route.params.forEach((params) => {
        //   this.type = params.type;
        // });
        this.type = 'add';
        this.model = { isRange: false, singleDate: { jsDate: new Date(this.setDate) } };
        this.imagepath = [];
        this.imagepaththumb = [];
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email_id: ['', Validators.required],
            mobile: ['', Validators.required],
            institution: ['', Validators.required],
            doj: null,
            dob: null,
            gender: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            country: '231',
            postalCode: ['', Validators.required],
            status: ['1', Validators.required],
            addStudent: '',
            updateStudent: '',
            addContent: '',
            updateContent: '',
            addSubject: '',
            updateSubject: '',
            addBooks: '',
            updateBooks: '',
            addContents: '',
            updateContents: '',
            addRoom: '',
            updateRoom: '',
            addClass: '',
            updateClass: '',
        });
        const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
        const dropped = dr1.split('-');
        // tslint:disable-next-line:radix
        const droppedObject = {
            isRange: false,
            singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
            dateRange: null
        };
        this.registerForm.controls.doj.patchValue(droppedObject);
    }
    ngOnInit() {
        this.countryList();
        this.stateList('231');
    }
    onDateChanged(event) {
    }
    numberPattern(event) {
        this.validationService.numberValidate1(event);
    }
    datePattern(event) {
        this.validationService.dateValidation(event);
    }
    encodeImageFileAsURL(event) {
        for (let i = 0; i < event.target.files.length; i++) {
            const getUrlEdu = '';
            const imgDetails = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const url = event.target.result;
                const getUrl = url.split(',');
                const pic = imgDetails.type.split('/');
                if (pic[1] == 'jpeg' || pic[1] == 'png' || pic[1] == 'jpg') {
                    this.onUploadKYCFinished(getUrl, imgDetails);
                }
                else {
                    this.toastr.error('JPEG ,PNG & JPG are the required type');
                }
            };
            reader.readAsDataURL(event.target.files[i]);
        }
    }
    onUploadKYCFinished(getUrlEdu, imageList) {
        this.recordBase64Url = getUrlEdu[1];
        const data = {
            platform: 'web',
            role_id: '4',
            user_id: '56',
            image_path: [{
                    image: this.recordBase64Url,
                    size: imageList.size,
                    type: imageList.type,
                    name: imageList.name
                }],
            uploadtype: 'teacher'
        };
        this.commondata.showLoader(true);
        this.common.fileUpload(data).subscribe((successData) => {
            this.uploadSuccess(successData);
        }, (error) => {
            this.uploadFailure(error);
        });
    }
    uploadSuccess(successData) {
        this.commondata.showLoader(false);
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.imagepath = [];
            this.imagepaththumb = [];
            this.imagepath.push(successData.ResponseObject.imagepath[0].original_image_url);
            this.imagepaththumb.push(successData.ResponseObject.imagepath[0].resized_url);
        }
        else {
            this.toastr.error('Invalid File Format');
        }
    }
    uploadFailure(error) {
        this.commondata.showLoader(false);
        console.log(error, 'error');
    }
    deleteImg() {
        this.imagepath = [];
        this.reset();
    }
    reset() {
        this.myInputVariable.nativeElement.value = '';
    }
    pageNav(id) {
        this.pageType = 2;
        this.viewer = id;
        this.registerFormReset();
    }
    countryList() {
        const data = {
            platform: 'web'
        };
        this.common.getCountryList(data).subscribe((successData) => {
            this.countryListSuccess(successData);
        }, (error) => {
            this.countryListFailure(error);
        });
    }
    countryListSuccess(successData) {
        if (successData.IsSuccess) {
            this.countryListData = successData.ResponseObject;
            if (this.type == 'edit') {
                this.stateList(this.editData.country);
            }
        }
    }
    countryListFailure(error) {
        console.log(error, 'error');
    }
    stateList(id) {
        this.registerForm.controls.state.patchValue(null);
        const data = {
            platform: 'web',
            country_id: id,
        };
        this.common.getStateList(data).subscribe((successData) => {
            this.stateListSuccess(successData);
        }, (error) => {
            this.stateListFailure(error);
        });
    }
    stateListSuccess(successData) {
        if (successData.IsSuccess) {
            this.stateListData = successData.ResponseObject;
            if (this.type == 'edit') {
                this.stateListData.forEach((value) => {
                    if (value.state_id == this.editData.state) {
                        this.registerForm.controls.state.patchValue(value.state_id);
                    }
                });
            }
        }
    }
    stateListFailure(error) {
        console.log(error, 'error');
    }
    add() {
        this.showLoader = true;
        if (this.registerForm.valid) {
            let data = {
                platform: 'web',
                // role_id: '4',
                // user_id: '56',
                first_name: this.registerForm.controls.firstName.value,
                last_name: this.registerForm.controls.lastName.value,
                email_id: this.registerForm.controls.email_id.value,
                mobile: this.registerForm.controls.mobile.value,
                institution: this.registerForm.controls.institution.value == null ? this.registerForm.controls.firstName.value : this.registerForm.controls.institution.value,
                doj: this.registerForm.controls.doj.value == null ? '' : this.datePipe.transform(this.registerForm.controls.doj.value.singleDate.jsDate, 'yyyy-MM-dd'),
                birthday: this.registerForm.controls.dob.value == null ? '' : this.datePipe.transform(this.registerForm.controls.dob.value.singleDate.jsDate, 'yyyy-MM-dd'),
                gender: this.registerForm.controls.gender.value,
                address1: this.registerForm.controls.address1.value == null ? '' : this.registerForm.controls.address1.value,
                address2: this.registerForm.controls.address2.value == null ? '' : this.registerForm.controls.address2.value,
                city: this.registerForm.controls.city.value == null ? '' : this.registerForm.controls.city.value,
                state: this.registerForm.controls.state.value ? this.registerForm.controls.state.value : '',
                country: this.registerForm.controls.country.value,
                postal_code: this.registerForm.controls.postalCode.value == null ? '' : this.registerForm.controls.postalCode.value,
                status: this.registerForm.controls.status.value,
                profile_url: this.imagepath.toString(),
                profile_thumb_url: this.imagepaththumb.toString(),
                individual_role: this.viewer == 'Parent' ? 1 : 0,
                permission: [{
                        group_id: 1,
                        group_name: 'Students',
                        permission: [{
                                id: 1,
                                status: 1
                            }, {
                                id: 2,
                                status: 1
                            }, {
                                id: 3,
                                status: 1
                            }]
                    }, {
                        group_id: 2,
                        group_name: 'Content Creator',
                        permission: [{
                                id: 5,
                                status: 1
                            }, {
                                id: 6,
                                status: 1
                            }, {
                                id: 7,
                                status: 1
                            }]
                    }, {
                        group_id: 3,
                        group_name: 'Subjects',
                        permission: [{
                                id: 9,
                                status: 1
                            }, {
                                id: 10,
                                status: 1
                            }, {
                                id: 11,
                                status: 1
                            }]
                    }, {
                        group_id: 4,
                        group_name: 'Books',
                        permission: [{
                                id: 13,
                                status: 1
                            }, {
                                id: 14,
                                status: 1
                            }, {
                                id: 15,
                                status: 1
                            }]
                    }, {
                        group_id: 5,
                        group_name: 'Content',
                        permission: [{
                                id: 17,
                                status: 1
                            }, {
                                id: 18,
                                status: 1
                            }, {
                                id: 19,
                                status: 1
                            }]
                    }, {
                        group_id: 6,
                        group_name: 'Content Folder',
                        permission: [{
                                id: 21,
                                status: 1
                            }, {
                                id: 23,
                                status: 1
                            }, {
                                id: 24,
                                status: 1
                            }]
                    }, {
                        group_id: 7,
                        group_name: 'Classes',
                        permission: [{
                                id: 25,
                                status: 1
                            }, {
                                id: 27,
                                status: 1
                            }, {
                                id: 26,
                                status: 1
                            }]
                    }
                ]
            };
            this.teacher.teacherParentAdd(data).subscribe((successData) => {
                this.addTeacherSuccess(successData);
            }, (error) => {
                this.addTeacherFailure(error);
            });
            // else  if (value == 'edit') {
            //   data['selected_user_id'] = this.editData.user_id;
            //   data['institution_id'] = this.editData.institution_id;
            //   this.teacher.teacherEdit(data).subscribe((successData) => {
            //         this.addTeacherSuccess(successData);
            //       },
            //       (error) => {
            //         this.addTeacherFailure(error);
            //       });
            // }
        }
        else {
            this.showLoader = false;
            this.validationService.validateAllFormFields(this.registerForm);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    addTeacherSuccess(successData) {
        if (successData.IsSuccess) {
            this.showLoader = false;
            this.toastr.success(successData.ResponseObject, this.viewer);
            this.pageType = 3;
        }
        else {
            this.showLoader = false;
            this.toastr.error(successData.ErrorObject, this.viewer);
        }
    }
    addTeacherFailure(error) {
        this.showLoader = false;
        console.log(error, 'error');
        this.toastr.error(error.ResponseObject, this.viewer);
    }
    schoolAdd() {
        this.showLoader = true;
        if (this.registerForm.valid) {
            let data = {
                platform: 'web',
                first_name: this.registerForm.controls.firstName.value,
                last_name: this.registerForm.controls.lastName.value,
                email_id: this.registerForm.controls.email_id.value,
                mobile: this.registerForm.controls.mobile.value,
                institution_name: this.registerForm.controls.institution.value == null ? this.registerForm.controls.firstName.value : this.registerForm.controls.institution.value,
                country: this.registerForm.controls.country.value,
                postal_code: this.registerForm.controls.postalCode.value == null ? '' : this.registerForm.controls.postalCode.value,
            };
            this.teacher.schoolRegistrationAdd(data).subscribe((successData) => {
                this.addschoolSuccess(successData);
            }, (error) => {
                this.addschoolFailure(error);
            });
        }
        else {
            this.showLoader = false;
            this.validationService.validateAllFormFields(this.registerForm);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    addschoolSuccess(successData) {
        if (successData.IsSuccess) {
            this.showLoader = false;
            this.toastr.success(successData.ResponseObject, this.viewer);
            this.pageType = 4;
        }
        else {
            this.showLoader = false;
            this.toastr.error(successData.ErrorObject, this.viewer);
        }
    }
    addschoolFailure(error) { }
    redirectPage(type) {
        if (type == 'web') {
            this.router.navigate(['/auth/login']);
        }
        else {
            document.location.href = 'https://edquill.com';
        }
    }
    registerFormReset() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email_id: ['', Validators.required],
            mobile: ['', Validators.required],
            institution: ['', Validators.required],
            doj: null,
            dob: null,
            gender: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            country: '231',
            postalCode: ['', Validators.required],
            status: ['1', Validators.required],
            addStudent: '',
            updateStudent: '',
            addContent: '',
            updateContent: '',
            addSubject: '',
            updateSubject: '',
            addBooks: '',
            updateBooks: '',
            addContents: '',
            updateContents: '',
            addRoom: '',
            updateRoom: '',
            addClass: '',
            updateClass: '',
        });
    }
    static { this.ɵfac = function ParentRegistrationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ParentRegistrationComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.TeacherService), i0.ɵɵdirectiveInject(i4.ToastrService), i0.ɵɵdirectiveInject(i5.CommonService), i0.ɵɵdirectiveInject(i6.CommonDataService), i0.ɵɵdirectiveInject(i7.AuthService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i8.ConfigurationService), i0.ɵɵdirectiveInject(i9.ValidationService), i0.ɵɵdirectiveInject(i10.DomSanitizer), i0.ɵɵdirectiveInject(i11.DatePipe)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ParentRegistrationComponent, selectors: [["app-parent-registration"]], viewQuery: function ParentRegistrationComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInputVariable = _t.first);
        } }, decls: 11, vars: 7, consts: [["id", "pre-loader", 4, "ngIf"], [1, "page-wrapper", "auth-bg"], [1, "authentication-box"], [1, "container-fluid"], [1, "row", "d-flex", "align-items-center", "justify-content-center"], ["class", "col-6", 4, "ngIf"], ["class", "col-6 d-flex align-items-center justify-content-center", 4, "ngIf"], ["class", "col-5 d-flex align-items-center justify-content-center", 4, "ngIf"], ["class", "col-4 vh-100 d-flex align-items-center justify-content-center", 4, "ngIf"], ["id", "pre-loader"], ["alt", "", "src", "assets/images/pre-loader/loader-01.svg"], [1, "col-6"], ["src", "assets/images/teacher-login.png", "class", "w-100", "alt", "", 4, "ngIf"], ["src", "assets/images/institution.png", "class", "w-100", "alt", "", 4, "ngIf"], ["src", "assets/images/parent.png", "class", "w-100", "alt", "", 4, "ngIf"], ["src", "assets/images/teacher-login.png", "alt", "", 1, "w-100"], ["src", "assets/images/institution.png", "alt", "", 1, "w-100"], ["src", "assets/images/parent.png", "alt", "", 1, "w-100"], [1, "col-6", "d-flex", "align-items-center", "justify-content-center"], [1, "row"], [1, "col-md-12"], [1, "card", "tab2-card"], [1, "card-header", "px-5", "py-3"], ["class", "color-primary text-capitalize card-title", 4, "ngIf"], [1, "text-danger"], [1, "card-body", "tab2-card", "px-5", "py-3"], [1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], [1, "col-md-6"], ["formControlName", "firstName", "id", "validationCustom0", "placeholder", "First Name", "required", "", "type", "text", 1, "form-control"], ["class", "error", 4, "ngIf"], ["formControlName", "lastName", "id", "validationCustom1", "placeholder", "Last Name", "required", "", "type", "text", 1, "form-control"], ["formControlName", "email_id", "id", "validationCustom2", "pattern", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$", "placeholder", "Email", "required", "", "type", "email", 1, "form-control"], ["formControlName", "mobile", "id", "validationCustom3", "maxlength", "15", "minlength", "10", "placeholder", "Contact Number", "required", "", "type", "text", 1, "form-control", 3, "keypress"], ["formControlName", "institution", "id", "validationCustom5", "placeholder", "Institution Name", "type", "text", 1, "form-control"], ["bindLabel", "name", "bindValue", "country_id", "formControlName", "country", "placeholder", "Please Select", 3, "change", "items"], ["formControlName", "postalCode", "id", "validationCustom13", "maxlength", "9", "minlength", "3", "multiple", "", "placeholder", "Enter Zip", "type", "text", 1, "form-control", 3, "keypress"], [1, "pull-right"], ["type", "button", 1, "btn", "btn-outline-primary", "mt-3", 3, "click"], ["class", "btn btn-primary mt-3 ml-3", "type", "button", 3, "click", 4, "ngIf"], [1, "color-primary", "text-capitalize", "card-title"], [1, "error"], ["type", "button", 1, "btn", "btn-primary", "mt-3", "ml-3", 3, "click"], [1, "col-5", "d-flex", "align-items-center", "justify-content-center"], [1, "w-100"], [1, "col-4", "vh-100", "d-flex", "align-items-center", "justify-content-center"], [1, "color-primary", "mb-5", "w-100", 2, "text-align", "center"], [1, "secondary-border", "w-100", "d-flex", "justify-content-center", "bg-white", "p-3", "ml-3", "mb-3", "cursor", 3, "click"], ["height", "30", "id", "noun_Teacher_1073953", "viewBox", "0 0 164 164", "width", "40", "xmlns", "http://www.w3.org/2000/svg"], ["data-name", "Group 17429", "id", "Group_17429"], ["d", "M164,0V3.38H0V0ZM5.756,5.069H158.244v92.66H58.661l.013-35.416c0-.864.19-1.929,1.064-1.925l3.9,11.99A4.387,4.387,0,0,0,66,75.027l18.25,8.351a4.452,4.452,0,0,0,5.83-1.858,4.561,4.561,0,0,0-1.4-5.661L117.629,46.9a1.146,1.146,0,0,0-1.62-1.62L86.523,74.768,71.407,67.85,66.218,51.706a4.746,4.746,0,0,0-1.947-2.452A33.009,33.009,0,0,0,50.84,45.225l-3.578,5.048,3.61,29.377-4.029,4.7-4.028-4.7,3.61-29.377-3.58-5.048a33.167,33.167,0,0,0-13.463,4.067,4.921,4.921,0,0,0-1.86,2.414s-6,18.942-5.991,19.436l.426,17.853a4.389,4.389,0,0,0,4.385,4.284c.034,0,.071,0,.107,0a4.387,4.387,0,0,0,4.282-4.49l-.41-17.112,3.649-11.282c.874,0,1.038,1.058,1.038,1.922l.013,35.416H5.756ZM34.907,31.1A11.935,11.935,0,1,0,46.842,19.162,11.933,11.933,0,0,0,34.907,31.1Zm9.456,83.537A11.127,11.127,0,1,0,33.236,125.76,11.127,11.127,0,0,0,44.364,114.633ZM33.24,127.677c-12.166,0-22.024,3.759-22.024,14.6V164h8.046l0-20.262a1.474,1.474,0,0,1,2.947,0l0,20.262H44.267l0-20.262a1.474,1.474,0,0,1,2.947,0V164h8.046V142.277C55.263,131.436,45.407,127.677,33.24,127.677Zm61.328-13.045A11.127,11.127,0,1,0,83.44,125.76,11.127,11.127,0,0,0,94.567,114.633ZM83.443,127.677c-12.166,0-22.024,3.759-22.024,14.6V164h8.046l0-20.262a1.474,1.474,0,0,1,2.949,0l0,20.262H94.474l0-20.262a1.474,1.474,0,0,1,2.947,0l0,20.262h8.046V142.277C105.468,131.436,95.61,127.677,83.443,127.677Zm61.328-13.045a11.127,11.127,0,1,0-11.126,11.127A11.126,11.126,0,0,0,144.771,114.633Zm-11.124,13.045c-12.166,0-22.024,3.759-22.024,14.6V164h8.044l0-20.262a1.474,1.474,0,0,1,2.949,0L122.62,164h22.056l.007-20.262a1.473,1.473,0,0,1,2.945,0l0,20.262h8.046V142.277C155.672,131.436,145.814,127.677,133.647,127.677Z", "data-name", "Path 3300", "fill", "#8F008A", "id", "Path_3300"], [1, "color-primary", "ml-2", 2, "text-align", "center", "font-size", "1.3rem"], [1, "font-weight-bold"], ["height", "30", "viewBox", "0 0 133.472 163.904", "width", "40", "xmlns", "http://www.w3.org/2000/svg"], ["data-name", "noun_Parent and Student_1567444", "id", "noun_Parent_and_Student_1567444", "transform", "translate(-23.252 -8.62)"], ["cx", "14.805", "cy", "14.805", "data-name", "Ellipse 68", "fill", "#8F008A", "id", "Ellipse_68", "r", "14.805", "transform", "translate(39.363 8.62)"], ["d", "M83.753,53.323S79.359,40.715,77.34,35.114A15.26,15.26,0,0,0,70.215,26.7,15.082,15.082,0,0,0,63.208,25H31.541A15.3,15.3,0,0,0,16.617,37.153a5.027,5.027,0,0,0-.317,1.742V75.55a5.205,5.205,0,0,0,4.394,5.225,5.087,5.087,0,0,0,5.76-5.027V46.91a3.107,3.107,0,0,1,1.247.831,4.73,4.73,0,0,1,.653,2.474v96.607a9.481,9.481,0,0,0,8.352,9.52A9.3,9.3,0,0,0,46.9,147.119v-57.4h3.088v57.2a9.481,9.481,0,0,0,8.352,9.52,9.3,9.3,0,0,0,10.193-9.223V45.465a3.958,3.958,0,0,1,.811-2.514l.218-.238,4.612,13.855a5.087,5.087,0,1,0,9.639-3.187Z", "data-name", "Path 3294", "fill", "#8F008A", "id", "Path_3294", "transform", "translate(6.952 16.04)"], ["cx", "13.103", "cy", "13.103", "data-name", "Ellipse 69", "fill", "#8F008A", "id", "Ellipse_69", "r", "13.103", "transform", "translate(94.089 27.423)"], ["d", "M96.114,38.9h0a4.513,4.513,0,0,1-.93,6.294L77.37,58.728a4.513,4.513,0,0,1-6.294-.93h0a4.513,4.513,0,0,1,.93-6.294L89.82,37.966a4.513,4.513,0,0,1,6.294.93Z", "data-name", "Path 3295", "fill", "#8F008A", "id", "Path_3295", "transform", "translate(59.728 27.874)"], ["d", "M85.228,75.124a17.457,17.457,0,0,1-9.243-15.557V32.887a1.326,1.326,0,0,1,0-.277H58.964a1.345,1.345,0,0,1,0,.277c0,.218,0,.356,0,.356V59.567A17.457,17.457,0,0,1,49.74,75.085V140.4a8.392,8.392,0,0,0,7.4,8.432,8.234,8.234,0,0,0,9.025-8.174V89.85H68.9v50.629a8.392,8.392,0,0,0,7.4,8.432,8.234,8.234,0,0,0,9.025-8.174V75.2h0Z", "data-name", "Path 3296", "fill", "#8F008A", "id", "Path_3296", "transform", "translate(39.698 23.492)"], ["d", "M82.581,57.609S78.622,46.446,76.9,41.5a13.5,13.5,0,0,0-6.294-7.442A13.36,13.36,0,0,0,66.45,32.71a1.3,1.3,0,0,1,0,.158V59.786a10.252,10.252,0,0,0,2.593,6.789V50.741a3.563,3.563,0,0,1,.713-2.217l.178-.218,4.077,12.212a4.493,4.493,0,0,0,8.531-2.811Z", "data-name", "Path 3297", "fill", "#8F008A", "id", "Path_3297", "transform", "translate(56.061 23.59)"], ["d", "M52.911,74.432l-1.5-3.8a1.425,1.425,0,0,1,.653-1.762h0A10.312,10.312,0,0,0,53.366,68V52.007a2.751,2.751,0,0,1,1.108.732,4.176,4.176,0,0,1,.574,2.2v11.42a10.252,10.252,0,0,0,2.415-6.492V32.927a1.345,1.345,0,0,1,0-.3A13.518,13.518,0,0,0,44.677,43.259,4.433,4.433,0,0,0,44.4,44.8v32.46a4.612,4.612,0,0,0,3.958,4.631,4.513,4.513,0,0,0,5.106-4.453V74.926a1.365,1.365,0,0,1-.554-.495Z", "data-name", "Path 3298", "fill", "#8F008A", "id", "Path_3298", "transform", "translate(34.469 23.512)"], ["d", "M44.677,38a4.453,4.453,0,0,0-.277,1.544V72a4.612,4.612,0,0,0,3.958,4.631,4.513,4.513,0,0,0,5.106-4.453V46.748", "data-name", "Path 3299", "fill", "#8F008A", "id", "Path_3299", "transform", "translate(34.469 28.77)"], [1, "color-primary", "fa", "fa-2x", "fa-university", 2, "height", "30px", "width", "40px"]], template: function ParentRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ParentRegistrationComponent_div_0_Template, 2, 0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
            i0.ɵɵtemplate(5, ParentRegistrationComponent_div_5_Template, 4, 3, "div", 5)(6, ParentRegistrationComponent_div_6_Template, 43, 14, "div", 6)(7, ParentRegistrationComponent_div_7_Template, 4, 3, "div", 5)(8, ParentRegistrationComponent_div_8_Template, 14, 2, "div", 7)(9, ParentRegistrationComponent_div_9_Template, 13, 1, "div", 7)(10, ParentRegistrationComponent_div_10_Template, 31, 0, "div", 8);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showLoader);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.pageType == 2);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pageType == 2 && !ctx.showLoader);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pageType == 3 || ctx.pageType == 4);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pageType == 3 && !ctx.showLoader);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pageType == 4 && !ctx.showLoader);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pageType == 1 && !ctx.showLoader);
        } }, dependencies: [i11.NgIf, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.FormGroupDirective, i2.FormControlName, i12.NgSelectComponent], styles: [".imageBack[_ngcontent-%COMP%] {\n  background-image: url(../../../../assets/images/dashboard/login-bg.png);\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ParentRegistrationComponent, [{
        type: Component,
        args: [{ selector: 'app-parent-registration', template: "<div *ngIf=\"showLoader\" id=\"pre-loader\">\n    <img alt=\"\" src=\"assets/images/pre-loader/loader-01.svg\">\n</div>\n<div class=\"page-wrapper auth-bg\">\n    <div class=\"authentication-box\">\n        <div class=\"container-fluid\">\n            <div class=\"row d-flex align-items-center justify-content-center\">\n                <div *ngIf=\"pageType == 2\" class=\"col-6\">\n                    <img *ngIf=\"viewer == 'Teacher'\" src=\"assets/images/teacher-login.png\" class=\"w-100\" alt=\"\">\n                    <img *ngIf=\"viewer == 'school'\" src=\"assets/images/institution.png\" class=\"w-100\" alt=\"\">\n                    <img *ngIf=\"viewer == 'Parent'\" src=\"assets/images/parent.png\" class=\"w-100\" alt=\"\">\n                </div>\n                <div *ngIf=\"pageType == 2 && !showLoader\" class=\"col-6 d-flex align-items-center justify-content-center\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"card tab2-card\">\n                                <div class=\"card-header px-5 py-3\">\n                                    <h5 *ngIf=\"viewer == 'Parent'\" class=\"color-primary text-capitalize card-title\">Contact Registration</h5>\n                                    <h5 *ngIf=\"viewer == 'Teacher'\" class=\"color-primary text-capitalize card-title\">Educator Registration</h5>\n                                    <h5 *ngIf=\"viewer == 'school'\" class=\"color-primary text-capitalize card-title\">Institution\n                                        Registration</h5>\n                                    <p class=\"text-danger\">All fields is required</p>\n                                    <!--                        <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>-->\n                                </div>\n                                <div class=\"card-body tab2-card px-5 py-3\">\n                                    <form [formGroup]=\"registerForm\" class=\"needs-validation user-add\">\n                                        <div class=\"form-group row\">\n                                            <!--                            <label class=\"col-xl-3 col-md-4\" for=\"validationCustom0\"><span>*</span>-->\n                                            <!--                                First Name</label>-->\n                                            <div class=\"col-md-6\">\n                                                <input class=\"form-control \" formControlName=\"firstName\" id=\"validationCustom0\"\n                                                       placeholder=\"First Name\" required=\"\" type=\"text\">\n                                                <em *ngIf=\"!registerForm.get('firstName').valid && (registerForm.get('firstName').dirty || registerForm.get('firstName').touched)\"\n                                                    class=\"error\">First name is required</em>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <input class=\"form-control \" formControlName=\"lastName\" id=\"validationCustom1\"\n                                                       placeholder=\"Last Name\" required=\"\" type=\"text\">\n                                                <em *ngIf=\"!registerForm.get('lastName').valid && (registerForm.get('lastName').dirty || registerForm.get('lastName').touched)\"\n                                                    class=\"error\">Last name is required</em>\n                                            </div>\n                                        </div>\n                                        <!--                        <div class=\"form-group row\">-->\n                                        <!--                            <label class=\"col-xl-3 col-md-4\" for=\"validationCustom1\"><span>*</span>-->\n                                        <!--                                Last Name</label>-->\n                                        <!--                        </div>-->\n                                        <div class=\"form-group row\">\n                                            <!--                            <label class=\"col-xl-3 col-md-4\" for=\"validationCustom2\"><span>*</span>-->\n                                            <!--                                Email Address</label>-->\n                                            <div class=\"col-md-12\">\n                                                <input class=\"form-control\" formControlName=\"email_id\" id=\"validationCustom2\"\n                                                       pattern=\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$\"\n                                                       placeholder=\"Email\" required=\"\" type=\"email\">\n                                                <em *ngIf=\"registerForm.get('email_id').hasError('required') && (registerForm.get('email_id').dirty || registerForm.get('email_id').touched)\"\n                                                    class=\"error\">Email-id is required</em>\n                                                <em *ngIf=\"registerForm.get('email_id').hasError('pattern')\" class=\"error\">Please\n                                                    Enter valid Email-id</em>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <!--                            <label class=\"col-xl-3 col-md-4\" for=\"validationCustom3\"><span>*</span>-->\n                                            <!--                                Contact Number</label>-->\n                                            <div class=\"col-md-12\">\n                                                <input (keypress)=\"numberPattern($event)\" class=\"form-control \"\n                                                       formControlName=\"mobile\"\n                                                       id=\"validationCustom3\" maxlength=\"15\" minlength=\"10\"\n                                                       placeholder=\"Contact Number\" required=\"\" type=\"text\">\n                                                <em *ngIf=\"!registerForm.get('mobile').valid && (registerForm.get('mobile').dirty || registerForm.get('mobile').touched)\"\n                                                    class=\"error\">Contact Number is required</em>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <!--                            <label class=\"col-xl-3 col-md-4\" for=\"validationCustom5\"><span style=\"visibility: hidden\">*</span>-->\n                                            <!--                                Institution Name</label>-->\n                                            <div class=\"col-md-12\">\n                                                <input class=\"form-control \" formControlName=\"institution\"\n                                                       id=\"validationCustom5\"\n                                                       placeholder=\"Institution Name\" type=\"text\">\n                                                <em *ngIf=\"!registerForm.get('institution').valid && (registerForm.get('institution').dirty || registerForm.get('institution').touched)\"\n                                                    class=\"error\">Institution is required</em>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <!--                            <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>-->\n                                            <!--                                Country</label>-->\n                                            <div class=\"col-md-6\">\n                                                <ng-select (change)=\"stateList($event.country_id)\"\n                                                           [items]=\"countryListData\"\n                                                           bindLabel=\"name\"\n                                                           bindValue=\"country_id\"\n                                                           formControlName=\"country\"\n                                                           placeholder=\"Please Select\"\n                                                >\n                                                </ng-select>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <input (keypress)=\"numberPattern($event)\" class=\"form-control\"\n                                                       formControlName=\"postalCode\" id=\"validationCustom13\"\n                                                       maxlength=\"9\" minlength=\"3\" multiple placeholder=\"Enter Zip\" type=\"text\">\n                                                <em *ngIf=\"!registerForm.get('postalCode').valid && (registerForm.get('postalCode').dirty || registerForm.get('postalCode').touched)\"\n                                                    class=\"error\">Enter Zip is required</em>\n                                            </div>\n                                        </div>\n                                        <!--                        <div class=\"form-group row\">-->\n                                        <!--                            <label class=\"col-xl-3 col-md-4\" for=\"validationCustom13\"><span style=\"visibility: hidden\">*</span>-->\n                                        <!--                                Zip </label>-->\n                                        <!--                        </div>-->\n                                        <!--                        <div class=\"form-group row\">-->\n                                        <!--                            <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>-->\n                                        <!--                                Date Of Joining</label>-->\n                                        <!--                            <div class=\"col-xl-8 col-md-7 form-group\">-->\n                                        <!--                                <div class=\"input-group\">-->\n                                        <!--                                    &lt;!&ndash; input box &ndash;&gt;-->\n                                        <!--                                    <input #dp=\"angular-mydatepicker\" (dateChanged)=\"onDateChanged($event)\" [options]=\"myDpOptions\"-->\n                                        <!--                                           angular-mydatepicker class=\"form-control\" formControlName=\"doj\" name=\"mydate\"-->\n                                        <!--                                           placeholder=\"mm/dd/yyyy\"/>-->\n                                        <!--                                    <div class=\"input-group-append\">-->\n                                        <!--                                        <button (click)=\"dp.toggleCalendar()\" class=\"btn btn-primary\" type=\"button\">-->\n                                        <!--                                            <i class=\"fa fa-calendar-o\"></i>-->\n                                        <!--                                        </button>-->\n                                        <!--                                    </div>-->\n                                        <!--                                </div>-->\n                                        <!--                                <em *ngIf=\"!registerForm.get('doj').valid && (registerForm.get('doj').dirty || registerForm.get('doj').touched)\" class=\"error\">Please enter Valid Date</em>-->\n                                        <!--                            </div>-->\n                                        <!--                        </div>-->\n                                        <!--                        <div class=\"form-group row\">-->\n                                        <!--                            <label class=\"col-xl-3 col-md-4\" ><span style=\"visibility: hidden\">*</span>-->\n                                        <!--                                Date Of Birth</label>-->\n                                        <!--                            <div class=\"col-xl-8 col-md-7 form-group\">-->\n                                        <!--                                <div class=\"input-group\">-->\n                                        <!--                                    &lt;!&ndash; input box &ndash;&gt;-->\n                                        <!--                                    <input #dp1=\"angular-mydatepicker\" (dateChanged)=\"onDateChanged($event)\" [options]=\"myDpOptions1\"-->\n                                        <!--                                           angular-mydatepicker class=\"form-control\" formControlName=\"dob\" name=\"mydate\"-->\n                                        <!--                                           placeholder=\"mm/dd/yyyy\"/>-->\n                                        <!--                                    <div class=\"input-group-append\">-->\n                                        <!--                                        <button (click)=\"dp1.toggleCalendar()\" class=\"btn btn-primary\" type=\"button\">-->\n                                        <!--                                            <i class=\"fa fa-calendar-o\"></i>-->\n                                        <!--                                        </button>-->\n                                        <!--                                    </div>-->\n                                        <!--                                </div>-->\n                                        <!--                            </div>-->\n                                        <!--                        </div>-->\n                                        <!--                        <div class=\"form-group row\">-->\n                                        <!--                            <label class=\"col-xl-3 col-md-4\" for=\"validationCustom7\"><span style=\"visibility: hidden\">*</span>-->\n                                        <!--                                Gender</label>-->\n                                        <!--                            <div class=\"col-xl-8 col-md-7\">-->\n                                        <!--                                <select class=\"form-control\"  formControlName=\"gender\" id=\"validationCustom7\">-->\n                                        <!--                                    <option value=\"\">Select Gender</option>-->\n                                        <!--                                    <option value=\"male\">Male</option>-->\n                                        <!--                                    <option value=\"female\">Female</option>-->\n                                        <!--                                    <option value=\"n/a\">Do not want to disclose</option>-->\n                                        <!--                                </select>-->\n                                        <!--                            </div>-->\n                                        <!--                        </div>-->\n\n                                        <!--                        <div class=\"form-group row\">-->\n                                        <!--                            <label class=\"col-xl-3 col-md-4\" for=\"validationCustom8\"><span style=\"visibility: hidden\">*</span>-->\n                                        <!--                                Address 1</label>-->\n                                        <!--                            <div class=\"col-xl-8 col-md-7\">-->\n                                        <!--                                <input class=\"form-control\" formControlName=\"address1\" id=\"validationCustom8\"-->\n                                        <!--                                       placeholder=\"Address1\" type=\"text\">-->\n                                        <!--                            </div>-->\n                                        <!--                        </div>-->\n                                        <!--                        <div class=\"form-group row\">-->\n                                        <!--                            <label class=\"col-xl-3 col-md-4\" for=\"validationCustom9\"><span style=\"visibility: hidden\">*</span>-->\n                                        <!--                                Address 2</label>-->\n                                        <!--                            <div class=\"col-xl-8 col-md-7\">-->\n                                        <!--                                <input class=\"form-control\" formControlName=\"address2\" id=\"validationCustom9\"-->\n                                        <!--                                       placeholder=\"Address2\" type=\"text\">-->\n                                        <!--                            </div>-->\n                                        <!--                        </div>-->\n                                        <!--                        <div class=\"form-group row\">-->\n                                        <!--                            <label class=\"col-xl-3 col-md-4\" for=\"validationCustom10\"><span style=\"visibility: hidden\">*</span>-->\n                                        <!--                                City</label>-->\n                                        <!--                            <div class=\"col-xl-8 col-md-7\">-->\n                                        <!--                                <input class=\"form-control\" formControlName=\"city\" id=\"validationCustom10\"-->\n                                        <!--                                       placeholder=\"City\" type=\"text\">-->\n                                        <!--                            </div>-->\n                                        <!--                        </div>-->\n                                        <!--                        <div class=\"form-group row\">-->\n                                        <!--                            <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>-->\n                                        <!--                                State</label>-->\n                                        <!--                            <div class=\"col-xl-8 col-md-7\">-->\n                                        <!--                                <ng-select [items]=\"stateListData\"-->\n                                        <!--                                           bindLabel=\"name\"-->\n                                        <!--                                           bindValue=\"state_id\"-->\n                                        <!--                                           formControlName=\"state\"-->\n                                        <!--                                           placeholder=\"Please Select\"-->\n                                        <!--                                >-->\n                                        <!--                                </ng-select>-->\n                                        <!--                            </div>-->\n                                        <!--                        </div>-->\n\n                                        <!--                        <div class=\"form-group row\">-->\n                                        <!--                            <label class=\"col-xl-3 col-md-4\"><span>*</span>-->\n                                        <!--                                Status</label>-->\n                                        <!--                            <div class=\"col-xl-8 col-md-7\">-->\n                                        <!--                                <select class=\"form-control \" formControlName=\"status\">-->\n                                        <!--                                    <option value=\"1\">Active</option>-->\n                                        <!--                                    <option value=\"2\">Suspended</option>-->\n                                        <!--                                    <option *ngIf=\"type == 'edit'\" value=\"3\">Disengaged</option>-->\n                                        <!--                                    <option *ngIf=\"type == 'edit'\" value=\"4\">Deleted</option>-->\n                                        <!--                                </select>-->\n                                        <!--                                <em *ngIf=\"!registerForm.get('status').valid && (registerForm.get('status').dirty || registerForm.get('status').touched)\" class=\"error\">status is required</em>-->\n                                        <!--                            </div>-->\n                                        <!--                        </div>-->\n                                        <!--                        <div class=\"form-group row\">-->\n                                        <!--                            <label class=\"col-xl-3 col-md-4 \"><span style=\"visibility: hidden\">*</span>Profile Photo</label>-->\n                                        <!--                            <div class=\"col-xl-8 col-md-7\">-->\n                                        <!--                                <input #myInput (change)=\"encodeImageFileAsURL($event)\" accept=\".png, .jpeg, .jpg\" class=\"custom-upload-input\" type=\"file\" >-->\n                                        <!--                            </div>-->\n                                        <!--                        </div>-->\n                                        <!--                        <div class=\"form-group row\">-->\n                                        <!--                            <div class=\"col-xl-3 col-md-4\"  style=\"position: relative;left: 25%\">-->\n                                        <!--                                <div  *ngFor=\"let file of imagepath;let i= index\" class=\"files-list fit-image\">-->\n                                        <!--                                    <img *ngIf=\"imagepath != ''\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + file)\" alt=\"\">-->\n                                        <!--                                    <i (click)=\"deleteImg()\" *ngIf=\"imagepath != ''\" class=\"fa fa-times\" style=\"position: relative; right: 26px; bottom: 85px; cursor: pointer;  background: #eeeeee;-->\n                                        <!--       padding: 10px; border-radius: 45px;\" title=\"close\" ></i>-->\n                                        <!--                                </div>-->\n                                        <!--                            </div>-->\n                                        <!--                        </div>-->\n                                    </form>\n                                    <div class=\"pull-right\">\n                                        <button (click)=\"pageType = 1\" class=\"btn btn-outline-primary mt-3\" type=\"button\">Back</button>\n                                        <button *ngIf=\"viewer == 'Teacher' || viewer == 'Parent'\" (click)=\"add()\" class=\"btn btn-primary mt-3 ml-3\" type=\"button\">Submit</button>\n                                        <button *ngIf=\"viewer == 'school'\" (click)=\"schoolAdd()\" class=\"btn btn-primary mt-3 ml-3\" type=\"button\">Submit</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"pageType == 3 || pageType == 4\" class=\"col-6\">\n                    <img *ngIf=\"viewer == 'Teacher'\" src=\"assets/images/teacher-login.png\" class=\"w-100\" alt=\"\">\n                    <img *ngIf=\"viewer == 'school'\" src=\"assets/images/institution.png\" class=\"w-100\" alt=\"\">\n                    <img *ngIf=\"viewer == 'Parent'\" src=\"assets/images/parent.png\" class=\"w-100\" alt=\"\">\n                </div>\n                <div *ngIf=\"pageType == 3 && !showLoader\" class=\"col-5 d-flex align-items-center justify-content-center\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"card tab2-card\">\n                                <div class=\"card-header px-5 py-3\">\n                                    <h5 *ngIf=\"viewer == 'Parent'\" class=\"color-primary text-capitalize card-title\">Contact Registration</h5>\n                                    <h5 *ngIf=\"viewer == 'Teacher'\" class=\"color-primary text-capitalize card-title\">Educator Registration</h5>\n                                    <!--                        <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>-->\n                                </div>\n                                <div class=\"card-body tab2-card px-5 py-3\">\n                                    <div class=\"w-100\">\n                                        <p>Thank you for registering with EdQuill. You would have received an email to login to the platform. Kindly check your spam folder as well.</p>\n                                    </div>\n                                    <div class=\"pull-right\">\n                                        <button (click)=\"redirectPage('web')\" class=\"btn btn-primary mt-3 ml-3\" type=\"button\">Ok</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"pageType == 4 && !showLoader\" class=\"col-5 d-flex align-items-center justify-content-center\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"card tab2-card\">\n                                <div class=\"card-header px-5 py-3\">\n                                    <h5 *ngIf=\"viewer == 'school'\" class=\"color-primary text-capitalize card-title\">Institution\n                                        Registration</h5>\n                                    <!--                        <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>-->\n                                </div>\n                                <div class=\"card-body tab2-card px-5 py-3\">\n                                    <div class=\"w-100\">\n                                        <p>Thank you for Registering with EdQuill. Our team will get in touch with you within 48 hours.</p>\n                                    </div>\n                                    <div class=\"pull-right\">\n                                        <button (click)=\"redirectPage('static')\" class=\"btn btn-primary mt-3 ml-3\" type=\"button\">Ok</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"pageType == 1 && !showLoader\" class=\"col-4 vh-100 d-flex align-items-center justify-content-center\">\n                    <div class=\"row\">\n                        <h3 class=\"color-primary mb-5 w-100\" style=\"text-align: center\"><b>Register as </b></h3>\n                        <div (click)=\"pageNav('Teacher')\" class=\"secondary-border w-100 d-flex justify-content-center bg-white p-3 ml-3 mb-3 cursor\">\n                            <svg height=\"30\" id=\"noun_Teacher_1073953\" viewBox=\"0 0 164 164\" width=\"40\"\n                                 xmlns=\"http://www.w3.org/2000/svg\">\n                                <g data-name=\"Group 17429\" id=\"Group_17429\">\n                                    <path d=\"M164,0V3.38H0V0ZM5.756,5.069H158.244v92.66H58.661l.013-35.416c0-.864.19-1.929,1.064-1.925l3.9,11.99A4.387,4.387,0,0,0,66,75.027l18.25,8.351a4.452,4.452,0,0,0,5.83-1.858,4.561,4.561,0,0,0-1.4-5.661L117.629,46.9a1.146,1.146,0,0,0-1.62-1.62L86.523,74.768,71.407,67.85,66.218,51.706a4.746,4.746,0,0,0-1.947-2.452A33.009,33.009,0,0,0,50.84,45.225l-3.578,5.048,3.61,29.377-4.029,4.7-4.028-4.7,3.61-29.377-3.58-5.048a33.167,33.167,0,0,0-13.463,4.067,4.921,4.921,0,0,0-1.86,2.414s-6,18.942-5.991,19.436l.426,17.853a4.389,4.389,0,0,0,4.385,4.284c.034,0,.071,0,.107,0a4.387,4.387,0,0,0,4.282-4.49l-.41-17.112,3.649-11.282c.874,0,1.038,1.058,1.038,1.922l.013,35.416H5.756ZM34.907,31.1A11.935,11.935,0,1,0,46.842,19.162,11.933,11.933,0,0,0,34.907,31.1Zm9.456,83.537A11.127,11.127,0,1,0,33.236,125.76,11.127,11.127,0,0,0,44.364,114.633ZM33.24,127.677c-12.166,0-22.024,3.759-22.024,14.6V164h8.046l0-20.262a1.474,1.474,0,0,1,2.947,0l0,20.262H44.267l0-20.262a1.474,1.474,0,0,1,2.947,0V164h8.046V142.277C55.263,131.436,45.407,127.677,33.24,127.677Zm61.328-13.045A11.127,11.127,0,1,0,83.44,125.76,11.127,11.127,0,0,0,94.567,114.633ZM83.443,127.677c-12.166,0-22.024,3.759-22.024,14.6V164h8.046l0-20.262a1.474,1.474,0,0,1,2.949,0l0,20.262H94.474l0-20.262a1.474,1.474,0,0,1,2.947,0l0,20.262h8.046V142.277C105.468,131.436,95.61,127.677,83.443,127.677Zm61.328-13.045a11.127,11.127,0,1,0-11.126,11.127A11.126,11.126,0,0,0,144.771,114.633Zm-11.124,13.045c-12.166,0-22.024,3.759-22.024,14.6V164h8.044l0-20.262a1.474,1.474,0,0,1,2.949,0L122.62,164h22.056l.007-20.262a1.473,1.473,0,0,1,2.945,0l0,20.262h8.046V142.277C155.672,131.436,145.814,127.677,133.647,127.677Z\"\n                                          data-name=\"Path 3300\" fill=\"#8F008A\" id=\"Path_3300\"/>\n                                </g>\n                            </svg>\n                            <div class=\"color-primary ml-2\" style=\"text-align: center; font-size: 1.3rem\"><span class=\"font-weight-bold\">Educator</span>\n                            </div>\n                        </div>\n                        <div (click)=\"pageNav('Parent')\" class=\"secondary-border w-100 d-flex justify-content-center bg-white p-3 ml-3 mb-3 cursor\">\n                            <svg height=\"30\" viewBox=\"0 0 133.472 163.904\" width=\"40\"\n                                 xmlns=\"http://www.w3.org/2000/svg\">\n                                <g data-name=\"noun_Parent and Student_1567444\" id=\"noun_Parent_and_Student_1567444\"\n                                   transform=\"translate(-23.252 -8.62)\">\n                                    <circle cx=\"14.805\" cy=\"14.805\" data-name=\"Ellipse 68\" fill=\"#8F008A\" id=\"Ellipse_68\"\n                                            r=\"14.805\" transform=\"translate(39.363 8.62)\"/>\n                                    <path d=\"M83.753,53.323S79.359,40.715,77.34,35.114A15.26,15.26,0,0,0,70.215,26.7,15.082,15.082,0,0,0,63.208,25H31.541A15.3,15.3,0,0,0,16.617,37.153a5.027,5.027,0,0,0-.317,1.742V75.55a5.205,5.205,0,0,0,4.394,5.225,5.087,5.087,0,0,0,5.76-5.027V46.91a3.107,3.107,0,0,1,1.247.831,4.73,4.73,0,0,1,.653,2.474v96.607a9.481,9.481,0,0,0,8.352,9.52A9.3,9.3,0,0,0,46.9,147.119v-57.4h3.088v57.2a9.481,9.481,0,0,0,8.352,9.52,9.3,9.3,0,0,0,10.193-9.223V45.465a3.958,3.958,0,0,1,.811-2.514l.218-.238,4.612,13.855a5.087,5.087,0,1,0,9.639-3.187Z\"\n                                          data-name=\"Path 3294\" fill=\"#8F008A\" id=\"Path_3294\"\n                                          transform=\"translate(6.952 16.04)\"/>\n                                    <circle cx=\"13.103\" cy=\"13.103\" data-name=\"Ellipse 69\" fill=\"#8F008A\" id=\"Ellipse_69\"\n                                            r=\"13.103\" transform=\"translate(94.089 27.423)\"/>\n                                    <path d=\"M96.114,38.9h0a4.513,4.513,0,0,1-.93,6.294L77.37,58.728a4.513,4.513,0,0,1-6.294-.93h0a4.513,4.513,0,0,1,.93-6.294L89.82,37.966a4.513,4.513,0,0,1,6.294.93Z\"\n                                          data-name=\"Path 3295\" fill=\"#8F008A\" id=\"Path_3295\"\n                                          transform=\"translate(59.728 27.874)\"/>\n                                    <path d=\"M85.228,75.124a17.457,17.457,0,0,1-9.243-15.557V32.887a1.326,1.326,0,0,1,0-.277H58.964a1.345,1.345,0,0,1,0,.277c0,.218,0,.356,0,.356V59.567A17.457,17.457,0,0,1,49.74,75.085V140.4a8.392,8.392,0,0,0,7.4,8.432,8.234,8.234,0,0,0,9.025-8.174V89.85H68.9v50.629a8.392,8.392,0,0,0,7.4,8.432,8.234,8.234,0,0,0,9.025-8.174V75.2h0Z\"\n                                          data-name=\"Path 3296\" fill=\"#8F008A\" id=\"Path_3296\"\n                                          transform=\"translate(39.698 23.492)\"/>\n                                    <path d=\"M82.581,57.609S78.622,46.446,76.9,41.5a13.5,13.5,0,0,0-6.294-7.442A13.36,13.36,0,0,0,66.45,32.71a1.3,1.3,0,0,1,0,.158V59.786a10.252,10.252,0,0,0,2.593,6.789V50.741a3.563,3.563,0,0,1,.713-2.217l.178-.218,4.077,12.212a4.493,4.493,0,0,0,8.531-2.811Z\"\n                                          data-name=\"Path 3297\" fill=\"#8F008A\" id=\"Path_3297\"\n                                          transform=\"translate(56.061 23.59)\"/>\n                                    <path d=\"M52.911,74.432l-1.5-3.8a1.425,1.425,0,0,1,.653-1.762h0A10.312,10.312,0,0,0,53.366,68V52.007a2.751,2.751,0,0,1,1.108.732,4.176,4.176,0,0,1,.574,2.2v11.42a10.252,10.252,0,0,0,2.415-6.492V32.927a1.345,1.345,0,0,1,0-.3A13.518,13.518,0,0,0,44.677,43.259,4.433,4.433,0,0,0,44.4,44.8v32.46a4.612,4.612,0,0,0,3.958,4.631,4.513,4.513,0,0,0,5.106-4.453V74.926a1.365,1.365,0,0,1-.554-.495Z\"\n                                          data-name=\"Path 3298\" fill=\"#8F008A\" id=\"Path_3298\"\n                                          transform=\"translate(34.469 23.512)\"/>\n                                    <path d=\"M44.677,38a4.453,4.453,0,0,0-.277,1.544V72a4.612,4.612,0,0,0,3.958,4.631,4.513,4.513,0,0,0,5.106-4.453V46.748\"\n                                          data-name=\"Path 3299\" fill=\"#8F008A\" id=\"Path_3299\"\n                                          transform=\"translate(34.469 28.77)\"/>\n                                </g>\n                            </svg>\n                            <div class=\"color-primary ml-2\" style=\"text-align: center; font-size: 1.3rem\"><span class=\"font-weight-bold\">Contact</span>\n                            </div>\n                        </div>\n                        <div (click)=\"pageNav('school')\" class=\"secondary-border w-100 d-flex justify-content-center bg-white p-3 ml-3 mb-3 cursor\">\n                            <!--                    <svg height=\"30\" viewBox=\"0 0 133.472 163.904\" width=\"40\"-->\n                            <!--                         xmlns=\"http://www.w3.org/2000/svg\">-->\n                            <!--                        <g data-name=\"noun_Parent and Student_1567444\" id=\"noun_Parent_and_Student_1567444\"-->\n                            <!--                           transform=\"translate(-23.252 -8.62)\">-->\n                            <!--                            <circle cx=\"14.805\" cy=\"14.805\" data-name=\"Ellipse 68\" fill=\"#8F008A\" id=\"Ellipse_68\"-->\n                            <!--                                    r=\"14.805\" transform=\"translate(39.363 8.62)\"/>-->\n                            <!--                            <path d=\"M83.753,53.323S79.359,40.715,77.34,35.114A15.26,15.26,0,0,0,70.215,26.7,15.082,15.082,0,0,0,63.208,25H31.541A15.3,15.3,0,0,0,16.617,37.153a5.027,5.027,0,0,0-.317,1.742V75.55a5.205,5.205,0,0,0,4.394,5.225,5.087,5.087,0,0,0,5.76-5.027V46.91a3.107,3.107,0,0,1,1.247.831,4.73,4.73,0,0,1,.653,2.474v96.607a9.481,9.481,0,0,0,8.352,9.52A9.3,9.3,0,0,0,46.9,147.119v-57.4h3.088v57.2a9.481,9.481,0,0,0,8.352,9.52,9.3,9.3,0,0,0,10.193-9.223V45.465a3.958,3.958,0,0,1,.811-2.514l.218-.238,4.612,13.855a5.087,5.087,0,1,0,9.639-3.187Z\"-->\n                            <!--                                  data-name=\"Path 3294\" fill=\"#8F008A\" id=\"Path_3294\"-->\n                            <!--                                  transform=\"translate(6.952 16.04)\"/>-->\n                            <!--                            <circle cx=\"13.103\" cy=\"13.103\" data-name=\"Ellipse 69\" fill=\"#8F008A\" id=\"Ellipse_69\"-->\n                            <!--                                    r=\"13.103\" transform=\"translate(94.089 27.423)\"/>-->\n                            <!--                            <path d=\"M96.114,38.9h0a4.513,4.513,0,0,1-.93,6.294L77.37,58.728a4.513,4.513,0,0,1-6.294-.93h0a4.513,4.513,0,0,1,.93-6.294L89.82,37.966a4.513,4.513,0,0,1,6.294.93Z\"-->\n                            <!--                                  data-name=\"Path 3295\" fill=\"#8F008A\" id=\"Path_3295\"-->\n                            <!--                                  transform=\"translate(59.728 27.874)\"/>-->\n                            <!--                            <path d=\"M85.228,75.124a17.457,17.457,0,0,1-9.243-15.557V32.887a1.326,1.326,0,0,1,0-.277H58.964a1.345,1.345,0,0,1,0,.277c0,.218,0,.356,0,.356V59.567A17.457,17.457,0,0,1,49.74,75.085V140.4a8.392,8.392,0,0,0,7.4,8.432,8.234,8.234,0,0,0,9.025-8.174V89.85H68.9v50.629a8.392,8.392,0,0,0,7.4,8.432,8.234,8.234,0,0,0,9.025-8.174V75.2h0Z\"-->\n                            <!--                                  data-name=\"Path 3296\" fill=\"#8F008A\" id=\"Path_3296\"-->\n                            <!--                                  transform=\"translate(39.698 23.492)\"/>-->\n                            <!--                            <path d=\"M82.581,57.609S78.622,46.446,76.9,41.5a13.5,13.5,0,0,0-6.294-7.442A13.36,13.36,0,0,0,66.45,32.71a1.3,1.3,0,0,1,0,.158V59.786a10.252,10.252,0,0,0,2.593,6.789V50.741a3.563,3.563,0,0,1,.713-2.217l.178-.218,4.077,12.212a4.493,4.493,0,0,0,8.531-2.811Z\"-->\n                            <!--                                  data-name=\"Path 3297\" fill=\"#8F008A\" id=\"Path_3297\"-->\n                            <!--                                  transform=\"translate(56.061 23.59)\"/>-->\n                            <!--                            <path d=\"M52.911,74.432l-1.5-3.8a1.425,1.425,0,0,1,.653-1.762h0A10.312,10.312,0,0,0,53.366,68V52.007a2.751,2.751,0,0,1,1.108.732,4.176,4.176,0,0,1,.574,2.2v11.42a10.252,10.252,0,0,0,2.415-6.492V32.927a1.345,1.345,0,0,1,0-.3A13.518,13.518,0,0,0,44.677,43.259,4.433,4.433,0,0,0,44.4,44.8v32.46a4.612,4.612,0,0,0,3.958,4.631,4.513,4.513,0,0,0,5.106-4.453V74.926a1.365,1.365,0,0,1-.554-.495Z\"-->\n                            <!--                                  data-name=\"Path 3298\" fill=\"#8F008A\" id=\"Path_3298\"-->\n                            <!--                                  transform=\"translate(34.469 23.512)\"/>-->\n                            <!--                            <path d=\"M44.677,38a4.453,4.453,0,0,0-.277,1.544V72a4.612,4.612,0,0,0,3.958,4.631,4.513,4.513,0,0,0,5.106-4.453V46.748\"-->\n                            <!--                                  data-name=\"Path 3299\" fill=\"#8F008A\" id=\"Path_3299\"-->\n                            <!--                                  transform=\"translate(34.469 28.77)\"/>-->\n                            <!--                        </g>-->\n                            <!--                    </svg>-->\n                            <i class=\"color-primary fa fa-2x fa-university\" style=\"height: 30px; width: 40px\"></i>\n                            <div class=\"color-primary ml-2\" style=\"text-align: center; font-size: 1.3rem\"><span class=\"font-weight-bold\">Institution</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n", styles: [".imageBack {\n  background-image: url(../../../../assets/images/dashboard/login-bg.png);\n}\n"] }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.FormBuilder }, { type: i3.TeacherService }, { type: i4.ToastrService }, { type: i5.CommonService }, { type: i6.CommonDataService }, { type: i7.AuthService }, { type: i1.Router }, { type: i8.ConfigurationService }, { type: i9.ValidationService }, { type: i10.DomSanitizer }, { type: i11.DatePipe }], { myInputVariable: [{
            type: ViewChild,
            args: ['myInput']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ParentRegistrationComponent, { className: "ParentRegistrationComponent" }); })();
//# sourceMappingURL=parent-registration.component.js.map