import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { dateOptions } from '../../../shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/common-data.service";
import * as i2 from "../../../shared/service/subject.services";
import * as i3 from "@angular/router";
import * as i4 from "@angular/forms";
import * as i5 from "../../../shared/service/configuration.service";
import * as i6 from "ngx-toastr";
import * as i7 from "../../../shared/service/auth.service";
import * as i8 from "../../../shared/service/category.service";
import * as i9 from "../../../shared/service/validation.service";
import * as i10 from "@angular/common";
import * as i11 from "../../../shared/service/common.service";
import * as i12 from "../../../shared/components/feather-icons/feather-icons.component";
import * as i13 from "@nodro7/angular-mydatepicker";
import * as i14 from "@ng-select/ng-select";
import * as i15 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["carousel"];
function ProfileComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 27);
} }
function ProfileComponent_img_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 28);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r0.profile, i0.ɵɵsanitizeUrl);
} }
function ProfileComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 29);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-image", "url(" + ctx_r0.imgUrl + "/" + ctx_r0.profile + ")");
} }
function ProfileComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30)(1, "img", 31);
    i0.ɵɵlistener("click", function ProfileComponent_div_19_Template_img_click_1_listener() { const ctx_r2 = i0.ɵɵrestoreView(_r2); const imgIdx_r4 = ctx_r2.$implicit; const i_r5 = ctx_r2.index; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.getImage(i_r5, imgIdx_r4)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const imgIdx_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", imgIdx_r4.thumbImage, i0.ɵɵsanitizeUrl);
} }
function ProfileComponent_div_28_tr_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2, "Gender:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 37);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "titlecase");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 1, ctx_r0.gender));
} }
function ProfileComponent_div_28_tr_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2, "Corporate Name:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.corporateName);
} }
function ProfileComponent_div_28_tr_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2, "DOB:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "customDateFormat");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 1, ctx_r0.birthday));
} }
function ProfileComponent_div_28_tr_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2, "Address1:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "titlecase");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 1, ctx_r0.address1));
} }
function ProfileComponent_div_28_tr_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2, "Address2:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.address2);
} }
function ProfileComponent_div_28_tr_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2, "City:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "titlecase");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 1, ctx_r0.city));
} }
function ProfileComponent_div_28_tr_31_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r0.state), "");
} }
function ProfileComponent_div_28_tr_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2, "State:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtemplate(4, ProfileComponent_div_28_tr_31_span_4_Template, 3, 3, "span", 34);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.state != "null" && ctx_r0.stateId != 0 && ctx_r0.countryId != 0 && ctx_r0.countryId != null && ctx_r0.stateId != null);
} }
function ProfileComponent_div_28_tr_32_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r0.country), "");
} }
function ProfileComponent_div_28_tr_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2, "Country:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtemplate(4, ProfileComponent_div_28_tr_32_span_4_Template, 3, 3, "span", 34);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.state != "null" && ctx_r0.country != "null" && ctx_r0.countryId != 0 && ctx_r0.stateId != 0 && ctx_r0.countryId != null && ctx_r0.stateId != null);
} }
function ProfileComponent_div_28_h4_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 20);
    i0.ɵɵelement(1, "app-feather-icons", 21);
    i0.ɵɵtext(2, " Professional Details ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", "user");
} }
function ProfileComponent_div_28_table_34_tr_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2, "Teacher ID:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "titlecase");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 1, ctx_r0.teacherid));
} }
function ProfileComponent_div_28_table_34_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2, "Designation:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "titlecase");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 1, ctx_r0.designation));
} }
function ProfileComponent_div_28_table_34_tr_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2, "Designation:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "titlecase");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 1, ctx_r0.designation));
} }
function ProfileComponent_div_28_table_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 33)(1, "tbody")(2, "tr")(3, "td");
    i0.ɵɵtext(4, "Institution Name:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(8, ProfileComponent_div_28_table_34_tr_8_Template, 6, 3, "tr", 34)(9, ProfileComponent_div_28_table_34_tr_9_Template, 6, 3, "tr", 34)(10, ProfileComponent_div_28_table_34_tr_10_Template, 6, 3, "tr", 34);
    i0.ɵɵelementStart(11, "tr")(12, "td");
    i0.ɵɵtext(13, "Status:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 5, ctx_r0.schoolname));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification == "teacher" && ctx_r0.normalTeacher == true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification == "student");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.normalTeacher == true);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.status);
} }
function ProfileComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "table", 33)(2, "tbody")(3, "tr")(4, "td");
    i0.ɵɵtext(5, "First Name:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "tr")(10, "td");
    i0.ɵɵtext(11, "Last Name:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "tr")(16, "td");
    i0.ɵɵtext(17, "Email:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(20, ProfileComponent_div_28_tr_20_Template, 6, 3, "tr", 34);
    i0.ɵɵelementStart(21, "tr")(22, "td");
    i0.ɵɵtext(23, "Mobile Number:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "td");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(26, ProfileComponent_div_28_tr_26_Template, 5, 1, "tr", 34)(27, ProfileComponent_div_28_tr_27_Template, 6, 3, "tr", 34)(28, ProfileComponent_div_28_tr_28_Template, 6, 3, "tr", 34)(29, ProfileComponent_div_28_tr_29_Template, 5, 1, "tr", 34)(30, ProfileComponent_div_28_tr_30_Template, 6, 3, "tr", 34)(31, ProfileComponent_div_28_tr_31_Template, 5, 1, "tr", 34)(32, ProfileComponent_div_28_tr_32_Template, 5, 1, "tr", 34);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(33, ProfileComponent_div_28_h4_33_Template, 3, 1, "h4", 35)(34, ProfileComponent_div_28_table_34_Template, 16, 7, "table", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(8, 14, ctx_r0.firstname));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(14, 16, ctx_r0.lastname));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.email);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification != "corporates");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.mobile);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification == "corporates");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification != "corporates");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification != "admin" && ctx_r0.userVerification != "corporates");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.address2 != "" && (ctx_r0.userVerification != "admin" && ctx_r0.userVerification != "corporates"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification != "admin" && ctx_r0.userVerification != "corporates");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification != "admin" && ctx_r0.userVerification != "corporates");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification != "admin" && ctx_r0.userVerification != "corporates");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.type == "view" && !ctx_r0.editView && ctx_r0.userVerification != "admin" && ctx_r0.userVerification != "corporates");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification != "admin" && ctx_r0.userVerification != "corporates");
} }
function ProfileComponent_form_29_em_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 50);
    i0.ɵɵtext(1, "First name is required");
    i0.ɵɵelementEnd();
} }
function ProfileComponent_form_29_em_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 50);
    i0.ɵɵtext(1, "Last name is required");
    i0.ɵɵelementEnd();
} }
function ProfileComponent_form_29_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39)(1, "label", 51)(2, "span", 52);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Gender");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 41)(6, "select", 53)(7, "option", 54);
    i0.ɵɵtext(8, "--Select Gender--");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "option", 55);
    i0.ɵɵtext(10, "Male");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "option", 56);
    i0.ɵɵtext(12, "Female");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "option", 57);
    i0.ɵɵtext(14, "Do not want to disclose");
    i0.ɵɵelementEnd()()()();
} }
function ProfileComponent_form_29_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 39)(1, "label", 58)(2, "span", 52);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Date Of Birth");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 59)(6, "div", 60);
    i0.ɵɵelement(7, "input", 61, 0);
    i0.ɵɵelementStart(9, "div", 62)(10, "button", 63);
    i0.ɵɵlistener("click", function ProfileComponent_form_29_div_18_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r7); const dp_r8 = i0.ɵɵreference(8); return i0.ɵɵresetView(dp_r8.toggleCalendar()); });
    i0.ɵɵelement(11, "i", 64);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("options", ctx_r0.myDpOptions);
} }
function ProfileComponent_form_29_em_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 50);
    i0.ɵɵtext(1, "Mobile is required");
    i0.ɵɵelementEnd();
} }
function ProfileComponent_form_29_em_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 50);
    i0.ɵɵtext(1, "Email is required");
    i0.ɵɵelementEnd();
} }
function ProfileComponent_form_29_div_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39)(1, "label", 65)(2, "span");
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Corporate Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 41);
    i0.ɵɵelement(6, "input", 66);
    i0.ɵɵelementEnd()();
} }
function ProfileComponent_form_29_div_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39)(1, "label", 67)(2, "span", 52);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Address1");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 41);
    i0.ɵɵelement(6, "input", 68);
    i0.ɵɵelementEnd()();
} }
function ProfileComponent_form_29_div_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39)(1, "label", 69)(2, "span", 52);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Address2");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 41);
    i0.ɵɵelement(6, "input", 70);
    i0.ɵɵelementEnd()();
} }
function ProfileComponent_form_29_div_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39)(1, "label", 71)(2, "span", 52);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " City");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 41);
    i0.ɵɵelement(6, "input", 72);
    i0.ɵɵelementEnd()();
} }
function ProfileComponent_form_29_div_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39)(1, "label", 58)(2, "span", 52);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " State");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 41);
    i0.ɵɵelement(6, "ng-select", 73);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("items", ctx_r0.stateListData);
} }
function ProfileComponent_form_29_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 39)(1, "label", 58)(2, "span", 52);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Country");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 41)(6, "ng-select", 74);
    i0.ɵɵlistener("change", function ProfileComponent_form_29_div_40_Template_ng_select_change_6_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.stateList($event.country_id)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("items", ctx_r0.countryListData);
} }
function ProfileComponent_form_29_div_41_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39)(1, "label", 79)(2, "span", 52);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Teacher ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 41);
    i0.ɵɵelement(6, "input", 80);
    i0.ɵɵelementEnd()();
} }
function ProfileComponent_form_29_div_41_div_14_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵelement(1, "input", 83);
    i0.ɵɵelementEnd();
} }
function ProfileComponent_form_29_div_41_div_14_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵelement(1, "input", 84);
    i0.ɵɵelementEnd();
} }
function ProfileComponent_form_29_div_41_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39)(1, "label", 81)(2, "span", 52);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Designation");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, ProfileComponent_form_29_div_41_div_14_div_5_Template, 2, 0, "div", 82)(6, ProfileComponent_form_29_div_41_div_14_div_6_Template, 2, 0, "div", 82);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r0.rolId != "3");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.rolId == "3");
} }
function ProfileComponent_form_29_div_41_em_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 50);
    i0.ɵɵtext(1, "status is required");
    i0.ɵɵelementEnd();
} }
function ProfileComponent_form_29_div_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 75)(2, "h5");
    i0.ɵɵtext(3, "Professional Details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 76);
    i0.ɵɵelement(5, "hr");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 39)(7, "label", 58)(8, "span", 52);
    i0.ɵɵtext(9, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " Institution Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 41);
    i0.ɵɵelement(12, "input", 77);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(13, ProfileComponent_form_29_div_41_div_13_Template, 7, 0, "div", 46)(14, ProfileComponent_form_29_div_41_div_14_Template, 7, 2, "div", 46);
    i0.ɵɵelementStart(15, "div", 39)(16, "label", 58)(17, "span", 52);
    i0.ɵɵtext(18, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(19, " Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 41);
    i0.ɵɵelement(21, "input", 78);
    i0.ɵɵtemplate(22, ProfileComponent_form_29_div_41_em_22_Template, 2, 0, "em", 43);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification == "teacher" && ctx_r0.normalTeacher == true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.normalTeacher == true);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r0.accountForm.get("status").valid && (ctx_r0.accountForm.get("status").dirty || ctx_r0.accountForm.get("status").touched));
} }
function ProfileComponent_form_29_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 38)(1, "div", 39)(2, "label", 40)(3, "span");
    i0.ɵɵtext(4, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, " First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 41);
    i0.ɵɵelement(7, "input", 42);
    i0.ɵɵtemplate(8, ProfileComponent_form_29_em_8_Template, 2, 0, "em", 43);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 39)(10, "label", 44)(11, "span");
    i0.ɵɵtext(12, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, " Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 41);
    i0.ɵɵelement(15, "input", 45);
    i0.ɵɵtemplate(16, ProfileComponent_form_29_em_16_Template, 2, 0, "em", 43);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(17, ProfileComponent_form_29_div_17_Template, 15, 0, "div", 46)(18, ProfileComponent_form_29_div_18_Template, 12, 1, "div", 46);
    i0.ɵɵelementStart(19, "div", 39)(20, "label", 44)(21, "span");
    i0.ɵɵtext(22, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(23, " Mobile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 41)(25, "input", 47);
    i0.ɵɵlistener("keypress", function ProfileComponent_form_29_Template_input_keypress_25_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.numberPattern($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(26, ProfileComponent_form_29_em_26_Template, 2, 0, "em", 43);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 39)(28, "label", 48)(29, "span");
    i0.ɵɵtext(30, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(31, " Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "div", 41);
    i0.ɵɵelement(33, "input", 49);
    i0.ɵɵtemplate(34, ProfileComponent_form_29_em_34_Template, 2, 0, "em", 43);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(35, ProfileComponent_form_29_div_35_Template, 7, 0, "div", 46)(36, ProfileComponent_form_29_div_36_Template, 7, 0, "div", 46)(37, ProfileComponent_form_29_div_37_Template, 7, 0, "div", 46)(38, ProfileComponent_form_29_div_38_Template, 7, 0, "div", 46)(39, ProfileComponent_form_29_div_39_Template, 7, 1, "div", 46)(40, ProfileComponent_form_29_div_40_Template, 7, 1, "div", 46)(41, ProfileComponent_form_29_div_41_Template, 23, 3, "div", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r0.accountForm);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r0.accountForm.get("fname").valid && (ctx_r0.accountForm.get("fname").dirty || ctx_r0.accountForm.get("fname").touched));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r0.accountForm.get("lname").valid && (ctx_r0.accountForm.get("lname").dirty || ctx_r0.accountForm.get("lname").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification != "corporates");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification != "corporates");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r0.accountForm.get("mobile").valid && (ctx_r0.accountForm.get("mobile").dirty || ctx_r0.accountForm.get("mobile").touched));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r0.accountForm.get("email").valid && (ctx_r0.accountForm.get("email").dirty || ctx_r0.accountForm.get("email").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification == "corporates");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification != "admin" && ctx_r0.userVerification != "corporates");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification != "admin" && ctx_r0.userVerification != "corporates");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification != "admin" && ctx_r0.userVerification != "corporates");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification != "admin" && ctx_r0.userVerification != "corporates");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification != "admin" && ctx_r0.userVerification != "corporates");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification != "admin" && ctx_r0.userVerification != "corporates");
} }
function ProfileComponent_div_30_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 63);
    i0.ɵɵlistener("click", function ProfileComponent_div_30_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.saveProfile()); });
    i0.ɵɵtext(1, "Save ");
    i0.ɵɵelementEnd();
} }
function ProfileComponent_div_30_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 63);
    i0.ɵɵlistener("click", function ProfileComponent_div_30_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.adminProfile()); });
    i0.ɵɵtext(1, "Save ");
    i0.ɵɵelementEnd();
} }
function ProfileComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 85);
    i0.ɵɵtemplate(1, ProfileComponent_div_30_button_1_Template, 2, 0, "button", 86)(2, ProfileComponent_div_30_button_2_Template, 2, 0, "button", 86);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification != "admin");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification == "admin");
} }
export class ProfileComponent {
    constructor(commondata, subjectList, route, formBuilder, subject, config, toastr, auth, category, router, validation, subjectservice, datePipe, common) {
        this.commondata = commondata;
        this.subjectList = subjectList;
        this.route = route;
        this.formBuilder = formBuilder;
        this.subject = subject;
        this.config = config;
        this.toastr = toastr;
        this.auth = auth;
        this.category = category;
        this.router = router;
        this.validation = validation;
        this.subjectservice = subjectservice;
        this.datePipe = datePipe;
        this.common = common;
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            disableSince: {
                year: new Date().getFullYear(),
                month: new Date().getMonth() + 1,
                day: new Date().getDate() + 1
            },
            firstDayOfWeek: 'su'
        };
        this.imgUrl = this.config.getimgUrl();
        this.recordBase64Url = '';
        this.subjectList.profileList.subscribe((res) => {
            this.profile = res;
            this.rolId = this.auth.getRoleId();
            const profilepic = this.profile.split('/');
            if (profilepic[0] == 'assets') {
                this.listCheck = true;
            }
            else if (profilepic[0] == 'uploads') {
                this.listCheck = false;
            }
        });
        this.contentschool = this.auth.getSessionData('schooldetails');
        this.normalTeacher = this.auth.getRoleId() == '4' && this.auth.getSessionData('teacher_type') == '0' || this.auth.getRoleId() == '2';
        this.firstname = this.auth.getSessionData('firstname');
        this.lastname = this.auth.getSessionData('lastname');
        this.role = this.auth.getSessionData('user_role');
        this.mobile = this.auth.getSessionData('mobile');
        this.email = this.auth.getSessionData('email_id');
        this.gender = this.auth.getSessionData('gender');
        this.profile = this.auth.getSessionData('profile_url');
        if (this.auth.getSessionData('birthday') != '0000-00-00' && this.auth.getSessionData('birthday') != null && this.auth.getSessionData('birthday') != '') {
            this.birthday = this.auth.getSessionData('birthday');
        }
        else {
            this.birthday = null;
        }
        if (this.auth.getRoleId() == '3') {
            this.userVerification = 'contentCreator';
            this.normalTeacher = true;
            this.address1 = this.auth.getSessionData('address1') == 'null' ? '' : this.auth.getSessionData('address1');
            this.address2 = this.auth.getSessionData('address2') == 'null' ? '' : this.auth.getSessionData('address2');
            this.city = this.auth.getSessionData('city') == 'null' ? '' : this.auth.getSessionData('city');
            this.state = this.auth.getSessionData('statename');
            this.stateId = this.auth.getSessionData('state');
            this.country = this.auth.getSessionData('countryname');
            this.countryId = this.auth.getSessionData('country');
            this.teacherid = this.auth.getSessionData('teacher_id');
            this.schoolname = this.auth.getSessionData('schooldetails');
            this.designation = this.auth.getSessionData('designation');
            if (this.auth.getSessionData('status') == '1') {
                this.status = 'Active';
            }
            else if (this.auth.getSessionData('status') == '2') {
                this.status = 'Suspended';
            }
        }
        else if (this.auth.getRoleId() == '4') {
            this.userVerification = 'teacher';
            this.address1 = this.auth.getSessionData('address1') == 'null' ? '' : this.auth.getSessionData('address1');
            this.address2 = this.auth.getSessionData('address2') == 'null' ? '' : this.auth.getSessionData('address2');
            this.city = this.auth.getSessionData('city') == 'null' ? '' : this.auth.getSessionData('city');
            this.state = this.auth.getSessionData('statename');
            this.stateId = this.auth.getSessionData('state');
            this.country = this.auth.getSessionData('countryname');
            this.countryId = this.auth.getSessionData('country');
            this.teacherid = this.auth.getSessionData('teacher_id');
            this.schooldetails = JSON.parse(this.auth.getSessionData('rista_data1'));
            this.schoolname = this.schooldetails.name;
            if (this.auth.getSessionData('teacher_type') == '0') {
                this.designation = this.schooldetails.designation;
            }
            if (this.auth.getSessionData('status') == '1') {
                this.status = 'Active';
            }
            else if (this.auth.getSessionData('status') == '2') {
                this.status = 'Suspended';
            }
        }
        else if (this.auth.getRoleId() == '2') {
            this.userVerification = 'admin';
        }
        else if (this.auth.getRoleId() == '5') {
            this.userVerification = 'student';
        }
        else if (this.auth.getRoleId() == '6') {
            this.userVerification = 'corporates';
            this.corporateName = this.auth.getSessionData('corporate_name');
        }
        const profilepic = this.profile.split('/');
        if (profilepic[0] == 'assets') {
            this.listCheck = true;
        }
        else if (profilepic[0] == 'uploads') {
            this.listCheck = false;
        }
        this.updateUserProfile();
        this.editView = false;
        this.profile1 = [];
        this.accountForm = this.formBuilder.group({
            fname: ['', Validators.required],
            lname: ['', Validators.required],
            email: ['', Validators.required],
            mobile: ['', Validators.required],
            role: ['', Validators.required],
            gender: '',
            dob: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            country: '231',
            teacherId: this.teacherid,
            designation: '',
            schoolId: '',
            status: '',
            corporate: ''
        });
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.imageObject = [{ thumbImage: 'assets/images/Avatar1.png', id: '0' },
            { thumbImage: 'assets/images/Avatar2.png', id: '1' },
            { thumbImage: 'assets/images/Avatar3.png', id: '2' },
            { thumbImage: 'assets/images/Avatar4.png', id: '3' },
            { thumbImage: 'assets/images/Avatar5.png', id: '4' },
            { thumbImage: 'assets/images/Avatar6.png', id: '5' },
            { thumbImage: 'assets/images/Avatar7.png', id: '6' },
            { thumbImage: 'assets/images/Avatar8.png', id: '7' },
            { thumbImage: 'assets/images/Avatar9.png', id: '8' },
        ];
        if (this.editView) {
            const editData = JSON.parse(this.auth.getSessionData('editUser'));
            this.accountForm.controls.fname.patchValue(editData.first_name);
            this.accountForm.controls.lname.patchValue(editData.last_name);
            this.accountForm.controls.email.patchValue(editData.email_id);
            this.accountForm.controls.mobile.patchValue(editData.mobile);
            this.accountForm.controls.gender.patchValue(editData.gender);
            this.accountForm.controls.location.patchValue(editData.location);
            this.accountForm.controls.role.patchValue(this.role == 'User' ? 1 : 2);
            this.accountForm.controls.address1.patchValue(editData.address1);
            this.accountForm.controls.address2.patchValue(editData.address2);
            this.accountForm.controls.city.patchValue(editData.city);
            this.accountForm.controls.country.patchValue(editData.country);
            this.accountForm.controls.state.patchValue(editData.state);
            if (editData.birthday != '0000-00-00' && editData.birthday != null && editData.birthday != '') {
                let dob = editData.birthday.split('-');
                const dobObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(dob[0]), parseInt(dob[1]) - 1, parseInt(dob[2])) },
                    dateRange: null
                };
                this.accountForm.controls.dob.patchValue(dobObject);
            }
            else {
                this.accountForm.controls.dob.patchValue(null);
            }
        }
    }
    updateUserProfile() {
    }
    ngOnInit() {
        this.commondata.showLoader(false);
    }
    editPage() {
        this.editView = true;
        this.accountForm.controls.fname.patchValue(this.firstname == 'null' ? '' : this.firstname);
        this.accountForm.controls.lname.patchValue(this.lastname == 'null' ? '' : this.lastname);
        this.accountForm.controls.email.patchValue(this.email == 'null' ? '' : this.email);
        this.accountForm.controls.mobile.patchValue(this.mobile == 'null' ? '' : this.mobile);
        this.accountForm.controls.gender.patchValue(this.gender == 'null' ? '' : this.gender);
        this.accountForm.controls.role.patchValue(this.role == 'User' ? 1 : 2);
        this.accountForm.controls.corporate.patchValue(this.corporateName == 'null' ? '' : this.corporateName);
        this.accountForm.controls.address1.patchValue(this.address1 == 'null' ? '' : this.address1);
        this.accountForm.controls.address2.patchValue(this.address2 == 'null' ? '' : this.address2);
        this.accountForm.controls.city.patchValue(this.city == null ? '' : this.city == 'null' ? '' : this.city);
        this.accountForm.controls.country.patchValue(this.countryId == 'null' ? '231' : this.countryId);
        this.countryList(this.countryId);
        this.accountForm.controls.schoolId.patchValue(this.schoolname == 'null' ? '' : this.schoolname);
        this.accountForm.controls.teacherId.patchValue(this.teacherid == 'null' ? '' : this.teacherid);
        this.accountForm.controls.designation.patchValue(this.designation == 'null' ? '' : this.designation);
        if (this.birthday != '0000-00-00' && this.birthday != null && this.birthday != '') {
            const dob = this.birthday.split('-');
            const dobObject1 = {
                isRange: false,
                singleDate: { jsDate: new Date(parseInt(dob[0]), parseInt(dob[1]) - 1, parseInt(dob[2])) },
                dateRange: null
            };
            this.accountForm.controls.dob.patchValue(dobObject1);
        }
        else {
            this.accountForm.controls.dob.patchValue(null);
        }
        if (this.auth.getRoleId() == '3' || this.auth.getRoleId() == '4') {
            if (this.auth.getSessionData('status') == '1') {
                this.accountForm.controls.status.patchValue('Active');
            }
            else if (this.auth.getSessionData('status') == '2') {
                this.accountForm.controls.status.patchValue('Suspended');
            }
        }
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
    onUploadKYCFinished(getUrlEdu, data) {
        this.recordBase64Url = getUrlEdu[1];
        const imgData = [{
                image: this.recordBase64Url,
                size: data.size,
                type: data.type,
                name: data.name
            }];
        this.getUrlImage(imgData);
    }
    saveProfile() {
        if (this.accountForm.valid) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                uploadtype: 'profile',
                first_name: this.accountForm.controls.fname.value,
                last_name: this.accountForm.controls.lname.value,
                gender: this.accountForm.controls.gender.value,
                mobile: this.accountForm.controls.mobile.value,
                birthday: this.accountForm.controls.dob.value == null ? '' : this.datePipe.transform(this.accountForm.controls.dob.value.singleDate.jsDate, 'yyyy-MM-dd'),
                designation: this.accountForm.controls.designation.value,
                address1: this.accountForm.controls.address1.value,
                address2: this.accountForm.controls.address2.value,
                city: this.accountForm.controls.city.value,
                state: this.accountForm.controls.state.value,
                country: this.accountForm.controls.country.value
            };
            this.category.editProfile(data).subscribe((successData) => {
                this.getEditSuccess(successData, data);
            }, (error) => {
                this.getEditFailure(error);
            });
        }
        else {
            this.toastr.error('Please Fill all Mandatory Field');
        }
    }
    adminProfile() {
        const firstname = this.accountForm.controls.fname.value;
        const lastname = this.accountForm.controls.lname.value;
        const mobile = this.accountForm.controls.mobile.value;
        if (firstname != '' && lastname != '' && mobile != '') {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                uploadtype: 'profile',
                first_name: this.accountForm.controls.fname.value,
                last_name: this.accountForm.controls.lname.value,
                gender: this.accountForm.controls.gender.value,
                mobile: this.accountForm.controls.mobile.value,
                birthday: this.accountForm.controls.dob.value == null ? '' : this.datePipe.transform(this.accountForm.controls.dob.value.singleDate.jsDate, 'yyyy-MM-dd'),
            };
            this.category.editProfile(data).subscribe((successData) => {
                this.getEditSuccess(successData, data);
            }, (error) => {
                this.getEditFailure(error);
            });
        }
        else {
            this.toastr.error('Please Fill all Mandatory Field');
        }
    }
    getEditSuccess(successData, data) {
        if (successData.IsSuccess) {
            this.editView = false;
            this.firstname = data.first_name;
            this.lastname = data.last_name;
            this.role = this.role == 'User' ? 1 : 2;
            this.mobile = data.mobile;
            if (data.birthday != '' && data.birthday != '0000-00-00' && data.birthday != null) {
                this.birthday = data.birthday;
            }
            else {
                this.birthday = null;
            }
            this.gender = data.gender;
            this.address1 = data.address1;
            this.address2 = data.address2;
            this.designation = data.designation;
            this.city = data.city;
            this.stateId = data.state;
            this.countryId = data.country;
            this.stateListEdit(data.country);
            this.countryListEdit(data.country);
            this.auth.setSessionData('mobile', data.mobile);
            this.auth.setSessionData('birthday', this.birthday);
            this.auth.setSessionData('gender', data.gender);
            this.auth.setSessionData('firstname', data.first_name);
            this.auth.setSessionData('lastname', data.last_name);
            this.auth.setSessionData('designation', data.designation);
            this.auth.setSessionData('address1', data.address1);
            this.auth.setSessionData('address2', data.address2);
            this.auth.setSessionData('city', data.city);
            this.auth.setSessionData('state', data.state);
            this.auth.setSessionData('country', data.country);
            this.toastr.success(successData.ResponseObject);
        }
    }
    getEditFailure(error) {
    }
    getUrlImage(imgData) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            image_path: imgData,
            uploadtype: 'profile'
        };
        this.category.getImgUrl(data).subscribe((successData) => {
            this.getUrlImageSuccess(successData);
        }, (error) => {
            this.getUrlImageFailure(error);
        });
    }
    getUrlImageSuccess(successData) {
        if (successData.IsSuccess) {
            this.uploadImage(successData.ResponseObject.imagepath[0].original_image_url);
            this.auth.setSessionData('go-profile_url', successData.ResponseObject.imagepath[0].original_image_url);
            this.profile = successData.ResponseObject.imagepath[0].original_image_url;
            this.subject.changeProfile(successData.ResponseObject.imagepath[0].original_image_url);
        }
        else {
            this.toastr.error(successData.ErrorObject, '');
        }
    }
    getUrlImageFailure(error) {
        console.log(error);
    }
    getImage(image, value) {
        this.profile = [];
        this.profile = value.thumbImage;
        this.listCheck = true;
        this.auth.setSessionData('avatarimg', this.profile);
        this.uploadImage(value.thumbImage);
    }
    uploadImage(imgData) {
        this.commondata.showLoader(true);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            uploadtype: 'profile',
            imagepath: [{
                    original_image_url: imgData,
                    resized_url: ''
                }]
        };
        this.category.updateImgUrl(data).subscribe((successData) => {
            this.uploadImageSuccess(successData, imgData);
        }, (error) => {
            this.uploadImageFailure(error);
        });
    }
    uploadImageSuccess(successData, imgData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.toastr.success(successData.ResponseObject, '');
            this.subjectservice.changeProfile(this.profile);
            this.auth.setSessionData('profile_url', imgData);
        }
        else {
            this.commondata.showLoader(false);
            this.toastr.error(successData.ErrorObject, '');
        }
    }
    uploadImageFailure(error) {
        console.log(error);
    }
    countryList(value) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.common.getCountryList(data).subscribe((successData) => {
            this.countryListSuccess(successData, value);
        }, (error) => {
            this.countryListFailure(error);
        });
    }
    countryListSuccess(successData, value) {
        if (successData.IsSuccess) {
            this.countryListData = successData.ResponseObject;
        }
        if (this.editView == true) {
            this.stateList(value);
            this.accountForm.controls.state.patchValue(value.state_id);
        }
    }
    countryListFailure(error) {
        console.log(error, 'error');
    }
    countryListEdit(value) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.common.getCountryList(data).subscribe((successData) => {
            this.countryListEditSuccess(successData, value);
        }, (error) => {
            this.countryListFailure(error);
        });
    }
    countryListEditSuccess(successData, value) {
        if (successData.IsSuccess) {
            this.countryListData = successData.ResponseObject;
            this.countryListData.forEach((id) => {
                if (id.country_id == value) {
                    this.country = id.name;
                    this.auth.setSessionData('countryname', this.country);
                }
            });
        }
    }
    countryListEditFailure(error) {
        console.log(error, 'error');
    }
    stateList(id) {
        const data = {
            platform: 'web',
            country_id: id,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.common.getStateList(data).subscribe((successData) => {
            this.stateListSuccess(successData, id);
        }, (error) => {
            this.stateListFailure(error);
        });
    }
    stateListSuccess(successData, id) {
        if (successData.IsSuccess) {
            this.stateListData = successData.ResponseObject;
            this.accountForm.controls.state.patchValue(null);
            if (this.editView == true) {
                this.stateListData.forEach((value) => {
                    if (value.state_id == this.stateId) {
                        this.accountForm.controls.state.patchValue(value.state_id);
                    }
                });
            }
        }
    }
    stateListFailure(error) {
        console.log(error, 'error');
    }
    stateListEdit(id) {
        const data = {
            platform: 'web',
            country_id: id,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.common.getStateList(data).subscribe((successData) => {
            this.stateListEditSuccess(successData, id);
        }, (error) => {
            this.stateListEditFailure(error);
        });
    }
    stateListEditSuccess(successData, id) {
        if (successData.IsSuccess) {
            this.stateListData = successData.ResponseObject;
            this.stateListData.forEach((value) => {
                if (this.stateId != null) {
                    if (value.state_id == this.stateId) {
                        this.state = value.name;
                    }
                }
                else {
                    this.state = 'null';
                }
            });
        }
    }
    stateListEditFailure(error) {
        console.log(error, 'error');
    }
    numberPattern(event) {
        this.validation.numberValidate1(event);
    }
    static { this.ɵfac = function ProfileComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProfileComponent)(i0.ɵɵdirectiveInject(i1.CommonDataService), i0.ɵɵdirectiveInject(i2.SubjectServices), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i4.FormBuilder), i0.ɵɵdirectiveInject(i2.SubjectServices), i0.ɵɵdirectiveInject(i5.ConfigurationService), i0.ɵɵdirectiveInject(i6.ToastrService), i0.ɵɵdirectiveInject(i7.AuthService), i0.ɵɵdirectiveInject(i8.CategoryService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i9.ValidationService), i0.ɵɵdirectiveInject(i2.SubjectServices), i0.ɵɵdirectiveInject(i10.DatePipe), i0.ɵɵdirectiveInject(i11.CommonService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfileComponent, selectors: [["app-profile"]], viewQuery: function ProfileComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.carousel = _t.first);
        } }, decls: 31, vars: 12, consts: [["dp", "angular-mydatepicker"], [1, "container-fluid"], [1, "row"], [1, "col-xl-4"], [1, "card"], [1, "card-body"], [1, "profile-details", "text-center"], [1, "avatar-upload"], [1, "avatar-edit"], ["type", "file", "id", "imageUpload", "accept", ".png, .jpg, .jpeg", 3, "change"], ["for", "imageUpload"], [1, "avatar-preview"], ["class", "blur-up lazyloaded", "id", "imagePreview", "style", "background-image: url(assets/images/dashboard/default.png)", 4, "ngIf"], ["class", "blur-up lazyloaded", "id", "imagePreview2", "width", "100%", 3, "src", 4, "ngIf"], ["class", "blur-up lazyloaded", "width", "100%", "id", "imagePreview1", 3, "background-image", 4, "ngIf"], [1, "f-w-600", "mb-0"], [1, "row", "mt-3"], ["class", "col-md-3", "style", "cursor: pointer", 4, "ngFor", "ngForOf"], [1, "col-xl-8"], [1, "card", "tab2-card"], [1, "position-relative", "border-bottom", "pb-2", "letter"], [3, "icon"], [1, "cursor", 2, "float", "right", "position", "absolute", "left", "40rem", 3, "click", "icon"], ["id", "top-profile", "role", "tabpanel", "aria-labelledby", "top-profile-tab", 1, "tab-pane", "fade", "show", "active"], ["class", "table-responsive profile-table", 4, "ngIf"], ["class", "needs-validation user-add", "novalida", "", 3, "formGroup", 4, "ngIf"], ["class", "pull-right mt-3", 4, "ngIf"], ["id", "imagePreview", 1, "blur-up", "lazyloaded", 2, "background-image", "url(assets/images/dashboard/default.png)"], ["id", "imagePreview2", "width", "100%", 1, "blur-up", "lazyloaded", 3, "src"], ["width", "100%", "id", "imagePreview1", 1, "blur-up", "lazyloaded"], [1, "col-md-3", 2, "cursor", "pointer"], ["width", "50", "alt", "", 3, "click", "src"], [1, "table-responsive", "profile-table"], [1, "table", "table-responsive"], [4, "ngIf"], ["class", "position-relative border-bottom pb-2 letter", 4, "ngIf"], ["class", "table table-responsive", 4, "ngIf"], [1, "capital"], ["novalida", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], [1, "col-xl-8", "col-md-7"], ["formControlName", "fname", "id", "validationCustom0", "type", "text", "required", "", 1, "form-control"], ["class", "error", 4, "ngIf"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], ["formControlName", "lname", "id", "validationCustom1", "type", "text", "required", "", 1, "form-control"], ["class", "form-group row", 4, "ngIf"], ["formControlName", "mobile", "id", "validationCustom3", "maxlength", "15", "minlength", "10", "type", "text", "required", "", 1, "form-control", 3, "keypress"], ["for", "validationCustom2", 1, "col-xl-3", "col-md-4"], ["formControlName", "email", "id", "validationCustom2", "type", "text", "required", "", "readonly", "", 1, "form-control"], [1, "error"], ["for", "validationCustom6", 1, "col-xl-3", "col-md-4"], [2, "visibility", "hidden"], ["formControlName", "gender", "id", "validationCustom6", 1, "form-control"], ["value", ""], ["value", "male"], ["value", "female"], ["value", "n/a"], [1, "col-xl-3", "col-md-4"], [1, "col-xl-8", "col-md-7", "form-group"], [1, "d-flex", "align-items-baseline"], ["placeholder", "mm/dd/yyyy", "name", "dp", "formControlName", "dob", "angular-mydatepicker", "", 1, "form-control", 3, "options"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-calendar-o"], ["for", "validationCustom22", 1, "col-xl-3", "col-md-4"], ["formControlName", "corporate", "id", "validationCustom22", "type", "text", "readonly", "", 1, "form-control"], ["for", "validationCustom7", 1, "col-xl-3", "col-md-4"], ["formControlName", "address1", "id", "validationCustom7", "type", "text", "placeholder", "Enter the address1", 1, "form-control"], ["for", "validationCustom8", 1, "col-xl-3", "col-md-4"], ["formControlName", "address2", "id", "validationCustom8", "type", "text", "placeholder", "Enter the address2", 1, "form-control"], ["for", "validationCustom9", 1, "col-xl-3", "col-md-4"], ["formControlName", "city", "id", "validationCustom9", "type", "text", "placeholder", "Enter the city", 1, "form-control"], ["bindLabel", "name", "bindValue", "state_id", "formControlName", "state", "placeholder", "Please Select", 3, "items"], ["bindLabel", "name", "bindValue", "country_id", "formControlName", "country", "placeholder", "Please Select", 3, "change", "items"], [1, "card-header", 2, "position", "relative", "right", "22px"], [1, "col-md-12"], ["readonly", "", "formControlName", "schoolId", "id", "validationCustom11", "type", "text", "placeholder", "Institution Name", 1, "form-control"], ["readonly", "", "formControlName", "status", "id", "validationCustom13", "type", "text", "placeholder", "status", 1, "form-control"], ["for", "validationCustom4", 1, "col-xl-3", "col-md-4"], ["readonly", "", "formControlName", "teacherId", "id", "validationCustom4", "type", "text", "placeholder", "Teacher ID", 1, "form-control"], ["for", "validationCustom12", 1, "col-xl-3", "col-md-4"], ["class", "col-xl-8 col-md-7", 4, "ngIf"], ["readonly", "", "formControlName", "designation", "id", "validationCustom12", "type", "text", "placeholder", "Designation", 1, "form-control"], ["formControlName", "designation", "id", "validationCustom14", "type", "text", "placeholder", "Designation", 1, "form-control"], [1, "pull-right", "mt-3"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "input", 9);
            i0.ɵɵlistener("change", function ProfileComponent_Template_input_change_8_listener($event) { return ctx.encodeImageFileAsURL($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "label", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 11);
            i0.ɵɵtemplate(11, ProfileComponent_div_11_Template, 1, 0, "div", 12)(12, ProfileComponent_img_12_Template, 1, 1, "img", 13)(13, ProfileComponent_div_13_Template, 1, 2, "div", 14);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "h5", 15);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "span");
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 16);
            i0.ɵɵtemplate(19, ProfileComponent_div_19_Template, 2, 1, "div", 17);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(20, "div", 18)(21, "div", 19)(22, "div", 5)(23, "h4", 20);
            i0.ɵɵelement(24, "app-feather-icons", 21);
            i0.ɵɵtext(25, " Personal Details ");
            i0.ɵɵelementStart(26, "app-feather-icons", 22);
            i0.ɵɵlistener("click", function ProfileComponent_Template_app_feather_icons_click_26_listener() { return ctx.editPage(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "div", 23);
            i0.ɵɵtemplate(28, ProfileComponent_div_28_Template, 35, 18, "div", 24)(29, ProfileComponent_form_29_Template, 42, 14, "form", 25)(30, ProfileComponent_div_30_Template, 3, 2, "div", 26);
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngIf", ctx.profile == "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.listCheck && ctx.profile != "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.listCheck && ctx.profile != "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2("", ctx.firstname, " ", ctx.lastname, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.email);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.imageObject);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("icon", "user");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", "edit");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.type == "view" && !ctx.editView);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "edit" || ctx.editView);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "edit" || ctx.editView);
        } }, dependencies: [i10.NgForOf, i10.NgIf, i4.ɵNgNoValidate, i4.NgSelectOption, i4.ɵNgSelectMultipleOption, i4.DefaultValueAccessor, i4.SelectControlValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.MinLengthValidator, i4.MaxLengthValidator, i4.FormGroupDirective, i4.FormControlName, i12.FeatherIconsComponent, i13.AngularMyDatePickerDirective, i14.NgSelectComponent, i10.TitleCasePipe, i15.CustomDateFormatPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfileComponent, [{
        type: Component,
        args: [{ selector: 'app-profile', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xl-4\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"profile-details text-center\">\n                        <div class=\"avatar-upload\">\n                            <div class=\"avatar-edit\">\n                                <input type='file' id=\"imageUpload\" (change)=\"encodeImageFileAsURL($event)\"\n                                       accept=\".png, .jpg, .jpeg\"/>\n                                <label for=\"imageUpload\"></label>\n                            </div>\n                            <div class=\"avatar-preview\">\n                                <div class=\"blur-up lazyloaded\" *ngIf=\"profile == ''\" id=\"imagePreview\"\n                                     style=\"background-image: url(assets/images/dashboard/default.png)\"></div>\n                                <img class=\"blur-up lazyloaded\" *ngIf=\"listCheck && profile != ''\" id=\"imagePreview2\"\n                                     [src]=\"profile\" width=\"100%\">\n                                <div class=\"blur-up lazyloaded\" *ngIf=\"!listCheck && profile != ''\" width=\"100%\"\n                                     id=\"imagePreview1\"\n                                     [style.background-image]=\"'url('+imgUrl+ '/' + profile +')'\"></div>\n                            </div>\n                        </div>\n\n                        <h5 class=\"f-w-600 mb-0\">{{firstname}} {{lastname}}</h5>\n                        <span>{{email}}</span>\n\n                        <div class=\"row mt-3\">\n                            <div class=\"col-md-3\" *ngFor=\"let imgIdx of imageObject; let i = index\"\n                                 style=\"cursor: pointer\">\n                                <img [src]=\"imgIdx.thumbImage\" (click)=\"getImage(i, imgIdx)\" width=\"50\" alt=\"\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-8\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-body\">\n                    <h4 class=\"position-relative border-bottom pb-2 letter\">\n                        <app-feather-icons [icon]=\"'user'\"></app-feather-icons>\n                        Personal Details\n                        <app-feather-icons [icon]=\"'edit'\" class=\"cursor\"\n                                           style=\"float: right; position: absolute; left: 40rem\"\n                                           (click)=\"editPage()\"></app-feather-icons>\n                    </h4>\n                    <div class=\"tab-pane fade show active\" id=\"top-profile\" role=\"tabpanel\"\n                         aria-labelledby=\"top-profile-tab\">\n                        <div *ngIf=\"type == 'view' && !editView\" class=\"table-responsive profile-table\">\n                            <table class=\"table table-responsive\">\n                                <tbody>\n                                <tr>\n                                    <td>First Name:</td>\n                                    <td>{{firstname | titlecase}}</td>\n                                </tr>\n                                <tr>\n                                    <td>Last Name:</td>\n                                    <td>{{lastname | titlecase}}</td>\n                                </tr>\n                                <tr>\n                                    <td>Email:</td>\n                                    <td>{{email}}</td>\n                                </tr>\n                                <tr *ngIf=\"userVerification != 'corporates'\">\n                                    <td>Gender:</td>\n                                    <td class=\"capital\">{{gender | titlecase}}</td>\n                                </tr>\n                                <tr>\n                                    <td>Mobile Number:</td>\n                                    <td>{{mobile}}</td>\n                                </tr>\n                                <tr *ngIf=\"userVerification == 'corporates'\">\n                                    <td>Corporate Name:</td>\n                                    <td>{{corporateName}}</td>\n                                </tr>\n                                <tr *ngIf=\"userVerification != 'corporates'\">\n                                    <td>DOB:</td>\n                                    <td>{{birthday | customDateFormat}}</td>\n                                </tr>\n                                <tr *ngIf=\"userVerification !='admin' && userVerification != 'corporates'\">\n                                    <td>Address1:</td>\n                                    <td>{{address1 |titlecase}}</td>\n                                </tr>\n                                <tr *ngIf=\"address2 != '' && (userVerification !='admin' && userVerification != 'corporates')\">\n                                    <td>Address2:</td>\n                                    <td>{{address2}}</td>\n                                </tr>\n                                <tr *ngIf=\"userVerification !='admin' && userVerification != 'corporates'\">\n                                    <td>City:</td>\n                                    <td>{{city | titlecase}}</td>\n                                </tr>\n                                <tr *ngIf=\"userVerification !='admin' && userVerification != 'corporates'\">\n                                    <td>State:</td>\n                                    <td><span\n                                            *ngIf=\"state != 'null' && stateId != 0 && countryId != 0 && countryId != null && stateId != null\">\n                                                    {{state | titlecase}}</span></td>\n                                </tr>\n                                <tr *ngIf=\"userVerification !='admin' && userVerification != 'corporates'\">\n                                    <td>Country:</td>\n                                    <td><span\n                                            *ngIf=\"state != 'null' && country != 'null' && countryId != 0 && stateId != 0 &&  countryId != null && stateId != null\">\n                                                    {{country | titlecase}}</span></td>\n                                </tr>\n                                </tbody>\n                            </table>\n                            <h4 class=\"position-relative border-bottom pb-2 letter\"\n                                *ngIf=\"type == 'view' && !editView && userVerification !='admin' && userVerification != 'corporates'\">\n                                <app-feather-icons [icon]=\"'user'\"></app-feather-icons>\n                                Professional Details\n                            </h4>\n                            <table class=\"table table-responsive\"\n                                   *ngIf=\"userVerification !='admin' && userVerification != 'corporates'\">\n                                <tbody>\n                                <tr>\n                                    <td>Institution Name:</td>\n                                    <td>{{schoolname | titlecase}}</td>\n                                </tr>\n                                <tr *ngIf=\"userVerification =='teacher' && normalTeacher == true\">\n                                    <td>Teacher ID:</td>\n                                    <td>{{teacherid | titlecase}}</td>\n                                </tr>\n                                <tr *ngIf=\"userVerification == 'student'\">\n                                    <td>Designation:</td>\n                                    <td>{{designation | titlecase}}</td>\n                                </tr>\n                                <tr *ngIf=\"normalTeacher == true\">\n                                    <td>Designation:</td>\n                                    <td>{{designation | titlecase}}</td>\n                                </tr>\n                                <tr>\n                                    <td>Status:</td>\n                                    <td>{{status}}</td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n\n                        <form *ngIf=\"type == 'edit' || editView\" [formGroup]=\"accountForm\"\n                              class=\"needs-validation user-add\" novalida>\n                            <div class=\"form-group row\">\n                                <label for=\"validationCustom0\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                    First Name</label>\n                                <div class=\"col-xl-8 col-md-7\">\n                                    <input class=\"form-control \" formControlName=\"fname\" id=\"validationCustom0\"\n                                           type=\"text\" required>\n                                    <em class=\"error\"\n                                        *ngIf=\"!accountForm.get('fname').valid && (accountForm.get('fname').dirty || accountForm.get('fname').touched)\">First\n                                        name is required</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label for=\"validationCustom1\" class=\"col-xl-3 col-md-4\"><span>*</span> Last\n                                    Name</label>\n                                <div class=\"col-xl-8 col-md-7\">\n                                    <input class=\"form-control\" formControlName=\"lname\" id=\"validationCustom1\"\n                                           type=\"text\" required>\n                                    <em class=\"error\"\n                                        *ngIf=\"!accountForm.get('lname').valid && (accountForm.get('lname').dirty || accountForm.get('lname').touched)\">Last\n                                        name is required</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\" *ngIf=\"userVerification != 'corporates'\">\n                                <label for=\"validationCustom6\" class=\"col-xl-3 col-md-4\"><span\n                                        style=\"visibility: hidden\">*</span>\n                                    Gender</label>\n                                <div class=\"col-xl-8 col-md-7\">\n                                    <select class=\"form-control\" formControlName=\"gender\" id=\"validationCustom6\">\n                                        <option value=\"\">--Select Gender--</option>\n                                        <option value=\"male\">Male</option>\n                                        <option value=\"female\">Female</option>\n                                        <option value=\"n/a\">Do not want to disclose</option>\n                                    </select>\n                                    <!--                                                <em class=\"error\" *ngIf=\"!accountForm.get('gender').valid && (accountForm.get('gender').dirty || accountForm.get('gender').touched)\">Gender is required</em>-->\n                                </div>\n                            </div>\n                            <div class=\"form-group row\" *ngIf=\"userVerification != 'corporates'\">\n                                <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                    Date Of Birth</label>\n                                <div class=\"col-xl-8 col-md-7 form-group\">\n                                    <div class=\"d-flex align-items-baseline\">\n                                        <input class=\"form-control\" placeholder=\"mm/dd/yyyy\"\n                                               name=\"dp\" formControlName=\"dob\" angular-mydatepicker\n                                               #dp=\"angular-mydatepicker\" [options]=\"myDpOptions\"/>\n                                        <div class=\"input-group-append\">\n                                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp.toggleCalendar()\">\n                                                <i class=\"fa fa-calendar-o\"></i></button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label for=\"validationCustom1\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                    Mobile</label>\n                                <div class=\"col-xl-8 col-md-7\">\n                                    <input class=\"form-control\" formControlName=\"mobile\" id=\"validationCustom3\"\n                                           (keypress)=\"numberPattern($event)\" maxlength=\"15\" minlength=\"10\"\n                                           type=\"text\" required>\n                                    <em class=\"error\"\n                                        *ngIf=\"!accountForm.get('mobile').valid && (accountForm.get('mobile').dirty || accountForm.get('mobile').touched)\">Mobile\n                                        is required</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label for=\"validationCustom2\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                    Email</label>\n                                <div class=\"col-xl-8 col-md-7\">\n                                    <input class=\"form-control\" formControlName=\"email\" id=\"validationCustom2\"\n                                           type=\"text\" required readonly>\n                                    <em class=\"error\"\n                                        *ngIf=\"!accountForm.get('email').valid && (accountForm.get('email').dirty || accountForm.get('email').touched)\">Email\n                                        is required</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\" *ngIf=\"userVerification == 'corporates'\">\n                                <label for=\"validationCustom22\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                    Corporate Name</label>\n                                <div class=\"col-xl-8 col-md-7\">\n                                    <input class=\"form-control\" formControlName=\"corporate\" id=\"validationCustom22\"\n                                           type=\"text\" readonly>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\"\n                                 *ngIf=\"userVerification !='admin' && userVerification !='corporates'\">\n                                <label for=\"validationCustom7\" class=\"col-xl-3 col-md-4\"><span\n                                        style=\"visibility: hidden\">*</span>\n                                    Address1</label>\n                                <div class=\"col-xl-8 col-md-7\">\n                                    <input class=\"form-control\" formControlName=\"address1\" id=\"validationCustom7\"\n                                           type=\"text\" placeholder=\"Enter the address1\">\n                                </div>\n                            </div>\n                            <div class=\"form-group row\"\n                                 *ngIf=\"userVerification !='admin' && userVerification !='corporates'\">\n                                <label for=\"validationCustom8\" class=\"col-xl-3 col-md-4\"><span\n                                        style=\"visibility: hidden\">*</span>\n                                    Address2</label>\n                                <div class=\"col-xl-8 col-md-7\">\n                                    <input class=\"form-control\" formControlName=\"address2\" id=\"validationCustom8\"\n                                           type=\"text\" placeholder=\"Enter the address2\">\n                                </div>\n                            </div>\n                            <div class=\"form-group row\"\n                                 *ngIf=\"userVerification !='admin' && userVerification !='corporates'\">\n                                <label for=\"validationCustom9\" class=\"col-xl-3 col-md-4\"><span\n                                        style=\"visibility: hidden\">*</span>\n                                    City</label>\n                                <div class=\"col-xl-8 col-md-7\">\n                                    <input class=\"form-control\" formControlName=\"city\" id=\"validationCustom9\"\n                                           type=\"text\" placeholder=\"Enter the city\">\n                                </div>\n                            </div>\n                            <div class=\"form-group row\"\n                                 *ngIf=\"userVerification !='admin' && userVerification !='corporates'\">\n                                <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                    State</label>\n                                <div class=\"col-xl-8 col-md-7\">\n                                    <ng-select [items]=\"stateListData\"\n                                               bindLabel=\"name\"\n                                               bindValue=\"state_id\"\n                                               formControlName=\"state\"\n                                               placeholder=\"Please Select\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\"\n                                 *ngIf=\"userVerification !='admin' && userVerification !='corporates'\">\n                                <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                    Country</label>\n                                <div class=\"col-xl-8 col-md-7\">\n                                    <ng-select [items]=\"countryListData\"\n                                               bindLabel=\"name\"\n                                               bindValue=\"country_id\"\n                                               formControlName=\"country\"\n                                               placeholder=\"Please Select\"\n                                               (change)=\"stateList($event.country_id)\"\n                                    >\n                                    </ng-select>\n                                </div>\n                            </div>\n                            <div *ngIf=\"userVerification !='admin' && userVerification !='corporates'\">\n                                <div class=\"card-header\" style=\"position: relative; right: 22px\">\n                                    <h5>Professional Details</h5>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <hr>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                        Institution Name</label>\n                                    <div class=\"col-xl-8 col-md-7\">\n                                        <input readonly class=\"form-control\" formControlName=\"schoolId\"\n                                               id=\"validationCustom11\"\n                                               type=\"text\" placeholder=\"Institution Name\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\"\n                                     *ngIf=\"userVerification =='teacher' && normalTeacher == true\">\n                                    <label for=\"validationCustom4\" class=\"col-xl-3 col-md-4\"><span\n                                            style=\"visibility: hidden\">*</span>\n                                        Teacher ID</label>\n                                    <div class=\"col-xl-8 col-md-7\">\n                                        <input readonly class=\"form-control\" formControlName=\"teacherId\"\n                                               id=\"validationCustom4\"\n                                               type=\"text\" placeholder=\"Teacher ID\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\" *ngIf=\"normalTeacher == true\">\n                                    <label for=\"validationCustom12\" class=\"col-xl-3 col-md-4\"><span\n                                            style=\"visibility: hidden\">*</span>\n                                        Designation</label>\n                                    <div class=\"col-xl-8 col-md-7\" *ngIf=\"rolId != '3'\">\n                                        <input readonly class=\"form-control\" formControlName=\"designation\"\n                                               id=\"validationCustom12\"\n                                               type=\"text\" placeholder=\"Designation\">\n                                    </div>\n                                    <div class=\"col-xl-8 col-md-7\" *ngIf=\"rolId == '3'\">\n                                        <input class=\"form-control\" formControlName=\"designation\"\n                                               id=\"validationCustom14\"\n                                               type=\"text\" placeholder=\"Designation\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                        Status</label>\n                                    <div class=\"col-xl-8 col-md-7\">\n                                        <input readonly class=\"form-control\" formControlName=\"status\"\n                                               id=\"validationCustom13\"\n                                               type=\"text\" placeholder=\"status\">\n                                        <em class=\"error\"\n                                            *ngIf=\"!accountForm.get('status').valid && (accountForm.get('status').dirty || accountForm.get('status').touched)\">status\n                                            is required</em>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                        <div class=\"pull-right mt-3\" *ngIf=\"type == 'edit' || editView\">\n                            <button type=\"button\" *ngIf=\"userVerification != 'admin'\" class=\"btn btn-primary\"\n                                    (click)=\"saveProfile()\">Save\n                            </button>\n                            <button type=\"button\" *ngIf=\"userVerification == 'admin'\" class=\"btn btn-primary\"\n                                    (click)=\"adminProfile()\">Save\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n" }]
    }], () => [{ type: i1.CommonDataService }, { type: i2.SubjectServices }, { type: i3.ActivatedRoute }, { type: i4.FormBuilder }, { type: i2.SubjectServices }, { type: i5.ConfigurationService }, { type: i6.ToastrService }, { type: i7.AuthService }, { type: i8.CategoryService }, { type: i3.Router }, { type: i9.ValidationService }, { type: i2.SubjectServices }, { type: i10.DatePipe }, { type: i11.CommonService }], { carousel: [{
            type: ViewChild,
            args: ['carousel']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProfileComponent, { className: "ProfileComponent" }); })();
//# sourceMappingURL=profile.component.js.map