import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { dateOptions, timeZone } from '../../../shared/data/config';
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
import * as i10 from "../../../environment.service";
import * as i11 from "@angular/common";
import * as i12 from "../../../shared/service/common.service";
import * as i13 from "@ng-select/ng-select";
import * as i14 from "@nodro7/angular-mydatepicker";
import * as i15 from "../../../shared/components/feather-icons/feather-icons.component";
const _c0 = ["carousel"];
function StudentProfileComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 25);
} }
function StudentProfileComponent_img_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 26);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r0.profile, i0.ɵɵsanitizeUrl);
} }
function StudentProfileComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 27);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-image", "url(" + ctx_r0.imgUrl + "/" + ctx_r0.profile + ")");
} }
function StudentProfileComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "img", 29);
    i0.ɵɵlistener("click", function StudentProfileComponent_div_19_Template_img_click_1_listener() { const ctx_r2 = i0.ɵɵrestoreView(_r2); const imgIdx_r4 = ctx_r2.$implicit; const i_r5 = ctx_r2.index; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.getImage(i_r5, imgIdx_r4)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const imgIdx_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", imgIdx_r4.thumbImage, i0.ɵɵsanitizeUrl);
} }
function StudentProfileComponent_app_feather_icons_26_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-feather-icons", 30);
    i0.ɵɵlistener("click", function StudentProfileComponent_app_feather_icons_26_Template_app_feather_icons_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.editPage()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("icon", "edit");
} }
function StudentProfileComponent_div_28_h4_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 18);
    i0.ɵɵelement(1, "app-feather-icons", 19);
    i0.ɵɵtext(2, "Contact 1 Details ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", "user");
} }
function StudentProfileComponent_div_28_tr_64_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2, "State:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td")(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "titlecase");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.p1statename != "" && ctx_r0.p1statename ? i0.ɵɵpipeBind1(6, 1, ctx_r0.p1statename) : "-");
} }
function StudentProfileComponent_div_28_tr_65_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r0.p1countryname));
} }
function StudentProfileComponent_div_28_tr_65_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2, "Country:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtemplate(4, StudentProfileComponent_div_28_tr_65_span_4_Template, 3, 3, "span", 35);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.p1statename != "null" && ctx_r0.p1countryname != "null");
} }
function StudentProfileComponent_div_28_h4_72_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 18);
    i0.ɵɵelement(1, "app-feather-icons", 19);
    i0.ɵɵtext(2, "Contact 2 Details ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", "user");
} }
function StudentProfileComponent_div_28_tr_99_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2, "State:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td")(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "titlecase");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.p2statename != "" && ctx_r0.p2statename ? i0.ɵɵpipeBind1(6, 1, ctx_r0.p2statename) : "-");
} }
function StudentProfileComponent_div_28_tr_100_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r0.p2countryname));
} }
function StudentProfileComponent_div_28_tr_100_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2, "Country:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtemplate(4, StudentProfileComponent_div_28_tr_100_span_4_Template, 3, 3, "span", 35);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.p2statename != "null" && ctx_r0.p2countryname != "null");
} }
function StudentProfileComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31)(1, "table", 32)(2, "tbody")(3, "tr")(4, "td");
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
    i0.ɵɵelementStart(20, "tr")(21, "td");
    i0.ɵɵtext(22, "Gender:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "td", 33);
    i0.ɵɵtext(24);
    i0.ɵɵpipe(25, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "tr")(27, "td");
    i0.ɵɵtext(28, "Mobile Number:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "td");
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "tr")(32, "td");
    i0.ɵɵtext(33, "DOB:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "td");
    i0.ɵɵtext(35);
    i0.ɵɵpipe(36, "date");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(37, StudentProfileComponent_div_28_h4_37_Template, 3, 1, "h4", 34);
    i0.ɵɵelementStart(38, "table", 32)(39, "tbody")(40, "tr")(41, "td");
    i0.ɵɵtext(42, "Contact 1 Name:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "td");
    i0.ɵɵtext(44);
    i0.ɵɵpipe(45, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(46, "tr")(47, "td");
    i0.ɵɵtext(48, "Contact 1 Address1:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "td");
    i0.ɵɵtext(50);
    i0.ɵɵpipe(51, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "tr")(53, "td");
    i0.ɵɵtext(54, "Contact 1 Address2:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "td");
    i0.ɵɵtext(56);
    i0.ɵɵpipe(57, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "tr")(59, "td");
    i0.ɵɵtext(60, "City:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "td");
    i0.ɵɵtext(62);
    i0.ɵɵpipe(63, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(64, StudentProfileComponent_div_28_tr_64_Template, 7, 3, "tr", 35)(65, StudentProfileComponent_div_28_tr_65_Template, 5, 1, "tr", 35);
    i0.ɵɵelementStart(66, "tr")(67, "td");
    i0.ɵɵtext(68, "Zip:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "td")(70, "span");
    i0.ɵɵtext(71);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(72, StudentProfileComponent_div_28_h4_72_Template, 3, 1, "h4", 34);
    i0.ɵɵelementStart(73, "table", 32)(74, "tbody")(75, "tr")(76, "td");
    i0.ɵɵtext(77, "Contact 2 Name:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(78, "td");
    i0.ɵɵtext(79);
    i0.ɵɵpipe(80, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(81, "tr")(82, "td");
    i0.ɵɵtext(83, "Contact 2 Address1:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(84, "td");
    i0.ɵɵtext(85);
    i0.ɵɵpipe(86, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(87, "tr")(88, "td");
    i0.ɵɵtext(89, "Contact 2 Address2:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(90, "td");
    i0.ɵɵtext(91);
    i0.ɵɵpipe(92, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(93, "tr")(94, "td");
    i0.ɵɵtext(95, "City:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(96, "td");
    i0.ɵɵtext(97);
    i0.ɵɵpipe(98, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(99, StudentProfileComponent_div_28_tr_99_Template, 7, 3, "tr", 35)(100, StudentProfileComponent_div_28_tr_100_Template, 5, 1, "tr", 35);
    i0.ɵɵelementStart(101, "tr")(102, "td");
    i0.ɵɵtext(103, "Zip:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(104, "td")(105, "span");
    i0.ɵɵtext(106);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(8, 22, ctx_r0.firstname));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(14, 24, ctx_r0.lastname));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.email);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(25, 26, ctx_r0.gender));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.mobile);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(36, 28, ctx_r0.birthday, "MM/dd/yyyy"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.type == "view" && !ctx_r0.editView && ctx_r0.userVerification != "admin");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.p1name != "" && ctx_r0.p1name ? i0.ɵɵpipeBind1(45, 31, ctx_r0.p1name) : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.p1address1 != "" && ctx_r0.p1address1 ? i0.ɵɵpipeBind1(51, 33, ctx_r0.p1address1) : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.p1address2 != "" && ctx_r0.p1address2 ? i0.ɵɵpipeBind1(57, 35, ctx_r0.p1address2) : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.p1city != "" && ctx_r0.p1city ? i0.ɵɵpipeBind1(63, 37, ctx_r0.p1city) : "-");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.p1state != "null" && ctx_r0.p1country != "null" && ctx_r0.p1state != "0" && ctx_r0.p1country != "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.p1state != "null" && ctx_r0.p1country != "null" && ctx_r0.p1state != "0" && ctx_r0.p1country != "0");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.p1postalCode && ctx_r0.p1postalCode != "" ? ctx_r0.p1postalCode : "-");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.type == "view" && !ctx_r0.editView);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.p2name != "" && ctx_r0.p2name ? i0.ɵɵpipeBind1(80, 39, ctx_r0.p2name) : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.p2address1 != "" && ctx_r0.p2address1 ? i0.ɵɵpipeBind1(86, 41, ctx_r0.p2address1) : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.p2address2 != "" && ctx_r0.p2address2 ? i0.ɵɵpipeBind1(92, 43, ctx_r0.p2address2) : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.p2city != "" && ctx_r0.p2city ? i0.ɵɵpipeBind1(98, 45, ctx_r0.p2city) : "-");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.p2state != "null" && ctx_r0.p2country != "null" && ctx_r0.p2state != "0" && ctx_r0.p2country != "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.p2state != "null" && ctx_r0.p2country != "null" && ctx_r0.p2state != "0" && ctx_r0.p2country != "0");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.p2postalCode != "" && ctx_r0.p2postalCode ? ctx_r0.p2postalCode : "-");
} }
function StudentProfileComponent_form_29_em_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 86);
    i0.ɵɵtext(1, "First name is required");
    i0.ɵɵelementEnd();
} }
function StudentProfileComponent_form_29_em_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 86);
    i0.ɵɵtext(1, "Last name is required");
    i0.ɵɵelementEnd();
} }
function StudentProfileComponent_form_29_em_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 86);
    i0.ɵɵtext(1, "Email is required");
    i0.ɵɵelementEnd();
} }
function StudentProfileComponent_form_29_em_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 86);
    i0.ɵɵtext(1, "Mobile is required");
    i0.ɵɵelementEnd();
} }
function StudentProfileComponent_form_29_em_71_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 86);
    i0.ɵɵtext(1, "First name is required");
    i0.ɵɵelementEnd();
} }
function StudentProfileComponent_form_29_em_125_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 86);
    i0.ɵɵtext(1, "First name is required");
    i0.ɵɵelementEnd();
} }
function StudentProfileComponent_form_29_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 36)(1, "div", 37)(2, "label", 38)(3, "span");
    i0.ɵɵtext(4, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, " First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 39);
    i0.ɵɵelement(7, "input", 40);
    i0.ɵɵtemplate(8, StudentProfileComponent_form_29_em_8_Template, 2, 0, "em", 41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 37)(10, "label", 42)(11, "span");
    i0.ɵɵtext(12, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, " Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 39);
    i0.ɵɵelement(15, "input", 43);
    i0.ɵɵtemplate(16, StudentProfileComponent_form_29_em_16_Template, 2, 0, "em", 41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 37)(18, "label", 44)(19, "span");
    i0.ɵɵtext(20, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(21, " Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 39);
    i0.ɵɵelement(23, "input", 45);
    i0.ɵɵtemplate(24, StudentProfileComponent_form_29_em_24_Template, 2, 0, "em", 41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 37)(26, "label", 46)(27, "span", 47);
    i0.ɵɵtext(28, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(29, " Gender");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "div", 39)(31, "select", 48)(32, "option", 49);
    i0.ɵɵtext(33, "--Select Gender--");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "option", 50);
    i0.ɵɵtext(35, "Male");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "option", 51);
    i0.ɵɵtext(37, "Female");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "option", 52);
    i0.ɵɵtext(39, "Do not want to disclose");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(40, "div", 37)(41, "label", 42)(42, "span", 47);
    i0.ɵɵtext(43, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(44, " Mobile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "div", 39)(46, "input", 53);
    i0.ɵɵlistener("keypress", function StudentProfileComponent_form_29_Template_input_keypress_46_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.numberPattern($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(47, StudentProfileComponent_form_29_em_47_Template, 2, 0, "em", 41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(48, "div", 37)(49, "label", 54)(50, "span", 47);
    i0.ɵɵtext(51, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(52, " Date Of Birth");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "div", 55)(54, "div", 56)(55, "input", 57, 0);
    i0.ɵɵlistener("dateChanged", function StudentProfileComponent_form_29_Template_input_dateChanged_55_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onDateChanged($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "div", 58)(58, "button", 59);
    i0.ɵɵlistener("click", function StudentProfileComponent_form_29_Template_button_click_58_listener() { i0.ɵɵrestoreView(_r7); const dp_r8 = i0.ɵɵreference(56); return i0.ɵɵresetView(dp_r8.toggleCalendar()); });
    i0.ɵɵelement(59, "i", 60);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(60, "div", 61)(61, "h5");
    i0.ɵɵtext(62, "Contact 1 Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(63, "hr");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "div", 37)(65, "label", 62)(66, "span", 47);
    i0.ɵɵtext(67, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(68, " Contact 1 Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "div", 39);
    i0.ɵɵelement(70, "input", 63);
    i0.ɵɵtemplate(71, StudentProfileComponent_form_29_em_71_Template, 2, 0, "em", 41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(72, "div", 37)(73, "label", 64)(74, "span", 47);
    i0.ɵɵtext(75, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(76, " Address 1");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(77, "div", 39);
    i0.ɵɵelement(78, "input", 65);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(79, "div", 37)(80, "label", 66)(81, "span", 47);
    i0.ɵɵtext(82, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(83, " Address 2");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(84, "div", 39);
    i0.ɵɵelement(85, "input", 67);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(86, "div", 37)(87, "label", 68)(88, "span", 47);
    i0.ɵɵtext(89, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(90, " City");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(91, "div", 39);
    i0.ɵɵelement(92, "input", 69);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(93, "div", 37)(94, "label", 54)(95, "span", 47);
    i0.ɵɵtext(96, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(97, " State");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(98, "div", 39);
    i0.ɵɵelement(99, "ng-select", 70);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(100, "div", 37)(101, "label", 54)(102, "span", 47);
    i0.ɵɵtext(103, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(104, " Country");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(105, "div", 39)(106, "ng-select", 71);
    i0.ɵɵlistener("change", function StudentProfileComponent_form_29_Template_ng_select_change_106_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.stateList($event.country_id)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(107, "div", 37)(108, "label", 72)(109, "span", 47);
    i0.ɵɵtext(110, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(111, " Zip ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(112, "div", 39)(113, "input", 73);
    i0.ɵɵlistener("keypress", function StudentProfileComponent_form_29_Template_input_keypress_113_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.numberPattern($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(114, "div", 61)(115, "h5");
    i0.ɵɵtext(116, "Contact 2 Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(117, "hr");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(118, "div", 37)(119, "label", 74)(120, "span", 47);
    i0.ɵɵtext(121, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(122, " Contact 2 Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(123, "div", 39);
    i0.ɵɵelement(124, "input", 75);
    i0.ɵɵtemplate(125, StudentProfileComponent_form_29_em_125_Template, 2, 0, "em", 41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(126, "div", 37)(127, "label", 76)(128, "span", 47);
    i0.ɵɵtext(129, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(130, " Address 1");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(131, "div", 39);
    i0.ɵɵelement(132, "input", 77);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(133, "div", 37)(134, "label", 78)(135, "span", 47);
    i0.ɵɵtext(136, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(137, " Address 2");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(138, "div", 39);
    i0.ɵɵelement(139, "input", 79);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(140, "div", 37)(141, "label", 80)(142, "span", 47);
    i0.ɵɵtext(143, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(144, " City");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(145, "div", 39);
    i0.ɵɵelement(146, "input", 81);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(147, "div", 37)(148, "label", 54)(149, "span", 47);
    i0.ɵɵtext(150, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(151, " State");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(152, "div", 39);
    i0.ɵɵelement(153, "ng-select", 82);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(154, "div", 37)(155, "label", 54)(156, "span", 47);
    i0.ɵɵtext(157, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(158, " Country");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(159, "div", 39)(160, "ng-select", 83);
    i0.ɵɵlistener("change", function StudentProfileComponent_form_29_Template_ng_select_change_160_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.stateList1($event.country_id)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(161, "div", 37)(162, "label", 84)(163, "span", 47);
    i0.ɵɵtext(164, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(165, " Zip ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(166, "div", 39)(167, "input", 85);
    i0.ɵɵlistener("keypress", function StudentProfileComponent_form_29_Template_input_keypress_167_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.numberPattern($event)); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r0.accountForm);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r0.accountForm.get("fname").valid && (ctx_r0.accountForm.get("fname").dirty || ctx_r0.accountForm.get("fname").touched));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r0.accountForm.get("lname").valid && (ctx_r0.accountForm.get("lname").dirty || ctx_r0.accountForm.get("lname").touched));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r0.accountForm.get("email").valid && (ctx_r0.accountForm.get("email").dirty || ctx_r0.accountForm.get("email").touched));
    i0.ɵɵadvance(23);
    i0.ɵɵproperty("ngIf", !ctx_r0.accountForm.get("mobile").valid && (ctx_r0.accountForm.get("mobile").dirty || ctx_r0.accountForm.get("mobile").touched));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("options", ctx_r0.myDpOptions);
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("ngIf", !ctx_r0.accountForm.get("p1fname").valid && (ctx_r0.accountForm.get("p1fname").dirty || ctx_r0.accountForm.get("p1fname").touched));
    i0.ɵɵadvance(28);
    i0.ɵɵproperty("items", ctx_r0.stateListData);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("items", ctx_r0.countryListData);
    i0.ɵɵadvance(19);
    i0.ɵɵproperty("ngIf", !ctx_r0.accountForm.get("p2fname").valid && (ctx_r0.accountForm.get("p2fname").dirty || ctx_r0.accountForm.get("p2fname").touched));
    i0.ɵɵadvance(28);
    i0.ɵɵproperty("items", ctx_r0.stateListData1);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("items", ctx_r0.countryListData);
} }
function StudentProfileComponent_div_30_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 89);
    i0.ɵɵlistener("click", function StudentProfileComponent_div_30_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.saveProfile()); });
    i0.ɵɵtext(1, "Save");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx_r0.env.deviceType() ? "py-0 border-radius-2" : "", "");
} }
function StudentProfileComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 87);
    i0.ɵɵtemplate(1, StudentProfileComponent_div_30_button_1_Template, 2, 3, "button", 88);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userVerification != "admin");
} }
export class StudentProfileComponent {
    constructor(commondata, subjectList, route, formBuilder, subject, config, toastr, auth, category, router, validation, env, subjectservice, datePipe, common) {
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
        this.env = env;
        this.subjectservice = subjectservice;
        this.datePipe = datePipe;
        this.common = common;
        this.setDate = new Date().toLocaleString('en-US', { timeZone: timeZone.location });
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            disableSince: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getMonth() + 1,
                day: new Date(this.setDate).getDate() + 1
            },
        };
        this.birthday = '';
        this.imgUrl = this.config.getimgUrl();
        this.myProfile();
        this.recordBase64Url = '';
        this.subjectList.profileList.subscribe((res) => {
            this.profile = res;
            this.rolId = this.auth.getRoleId();
            let profilepic = this.profile.split('/');
            if (profilepic[0] == 'assets') {
                this.listCheck = true;
            }
            else if (profilepic[0] == 'uploads') {
                this.listCheck = false;
            }
        });
        this.contentschool = this.auth.getSessionData('schooldetails');
        this.firstname = this.auth.getSessionData('firstname');
        this.lastname = this.auth.getSessionData('lastname');
        this.role = this.auth.getSessionData('user_role');
        this.email = this.auth.getSessionData('email_id');
        this.gender = this.auth.getSessionData('gender');
        this.profile = this.auth.getSessionData('profile_url');
        // if (this.auth.getSessionData('birthday') != '0000-00-00' && this.auth.getSessionData('birthday') != null && this.auth.getSessionData('birthday') != ''){
        //   this.birthday = this.auth.getSessionData('birthday');
        // }
        // else{
        //   this.birthday = '';
        // }
        // this.p1name = this.auth.getSessionData('p1fname');
        // this.p2name = this.auth.getSessionData('p1fname');
        // this.p1address1 = this.auth.getSessionData('p1address1');
        // this.p1address2 = this.auth.getSessionData('p1address2');
        // this.p2address1 = this.auth.getSessionData('p2address1');
        // this.p2address2 = this.auth.getSessionData('p2address2');
        // this.p1city = this.auth.getSessionData('p1city');
        // this.p2city = this.auth.getSessionData('p2city');
        // this.p1state = this.auth.getSessionData('p1state');
        // this.p2state = this.auth.getSessionData('p2state');
        // this.p1statename = this.auth.getSessionData('p1state_name');
        // this.p2statename = this.auth.getSessionData('p2state_name');
        // this.p1country = this.auth.getSessionData('p1country');
        // this.p2country = this.auth.getSessionData('p2country');
        // this.p1countryname = this.auth.getSessionData('p1country_name');
        // this.p2countryname = this.auth.getSessionData('p2country_name');
        // this.p1postalCode = this.auth.getSessionData('p1postal_code');
        // this.p2postalCode = this.auth.getSessionData('p2postal_code');
        // this.mobile = this.auth.getSessionData('mobile');
        let profilepic = this.profile.split('/');
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
            mobile: '',
            gender: '',
            dob: '',
            p1fname: '',
            p1address1: '',
            p1address2: '',
            p1city: '',
            p1state: '',
            p1country: '231',
            p2fname: '',
            p2address1: '',
            p2address2: '',
            p2city: '',
            p2state: '',
            p2country: '231',
            postalCode1: '',
            postalCode2: ''
        });
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        // this.imgUrl + '/' + this.assetList.media_image[i].c
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
    }
    updateUserProfile() {
        //when the profile-url changes, update the user service
    }
    ngOnInit() {
        this.commondata.showLoader(false);
    }
    onDateChanged(event) {
    }
    myProfile() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.category.Profile(data).subscribe((successData) => {
            this.myProfileListSuccess(successData);
        }, (error) => {
            this.myProfileListFailure(error);
        });
    }
    myProfileListSuccess(successData) {
        console.log(successData, 'successData');
        this.profiledetail = successData.ResponseObject[0].address;
        this.mobile = successData.ResponseObject[0].mobile;
        this.p1name = successData.ResponseObject[0].parent1_name;
        this.p2name = successData.ResponseObject[0].parent2_name;
        if (successData.ResponseObject[0].birthday != '0000-00-00' && successData.ResponseObject[0].birthday != null) {
            this.birthday = successData.ResponseObject[0].birthday;
        }
        this.p1address1 = this.profiledetail[0].address1;
        this.p1address2 = this.profiledetail[0].address2;
        this.p2address1 = this.profiledetail[1].address1;
        this.p2address2 = this.profiledetail[1].address2;
        this.p1city = this.profiledetail[0].city;
        this.p2city = this.profiledetail[1].city;
        this.p1state = this.profiledetail[0].state;
        this.p2state = this.profiledetail[1].state;
        this.p1statename = this.profiledetail[0].state_name;
        this.p2statename = this.profiledetail[1].state_name;
        this.p1country = this.profiledetail[0].country;
        this.p2country = this.profiledetail[1].country;
        this.p1countryname = this.profiledetail[0].country_name;
        this.p2countryname = this.profiledetail[1].country_name;
        this.p1postalCode = this.profiledetail[0].postal_code;
        this.p2postalCode = this.profiledetail[1].postal_code;
        this.auth.setSessionData('p1fname', successData.ResponseObject[0].parent1_name);
        this.auth.setSessionData('p2fname', successData.ResponseObject[0].parent2_name);
        this.auth.setSessionData('mobile', successData.ResponseObject[0].mobile);
        this.auth.setSessionData('p1address1', this.profiledetail[0].address1);
        this.auth.setSessionData('p1address2', this.profiledetail[0].address2);
        this.auth.setSessionData('p2address1', this.profiledetail[1].address1);
        this.auth.setSessionData('p2address2', this.profiledetail[1].address2);
        this.auth.setSessionData('p1city', this.profiledetail[0].city);
        this.auth.setSessionData('p2city', this.profiledetail[1].city);
        this.auth.setSessionData('p1state', this.profiledetail[0].state);
        this.auth.setSessionData('p2state', this.profiledetail[1].state);
        this.auth.setSessionData('p1state_name', this.profiledetail[0].state_name);
        this.auth.setSessionData('p2state_name', this.profiledetail[1].state_name);
        this.auth.setSessionData('p1country', this.profiledetail[0].country);
        this.auth.setSessionData('p2country', this.profiledetail[1].country);
        this.auth.setSessionData('p1postal_code', this.profiledetail[0].postal_code);
        this.auth.setSessionData('p2postal_code', this.profiledetail[1].postal_code);
        // this.auth.setSessionData('birthday', this.profiledetail[1].postal_code);
    }
    myProfileListFailure(error) {
        console.log(error, 'error');
    }
    editPage() {
        this.editView = true;
        this.accountForm.controls.fname.patchValue(this.firstname == 'null' ? '' : this.firstname);
        this.accountForm.controls.lname.patchValue(this.lastname == 'null' ? '' : this.lastname);
        this.accountForm.controls.email.patchValue(this.email == 'null' ? '' : this.email);
        this.accountForm.controls.mobile.patchValue(this.mobile == 'null' ? '' : this.mobile);
        this.accountForm.controls.gender.patchValue(this.gender == 'null' ? '' : this.gender.toLowerCase());
        this.accountForm.controls.p1fname.patchValue(this.p1name == 'null' ? '' : this.p1name);
        this.accountForm.controls.p1address1.patchValue(this.p1address1 == 'null' ? '' : this.p1address1);
        this.accountForm.controls.p1address2.patchValue(this.p1address2 == 'null' ? '' : this.p1address2);
        this.accountForm.controls.p1city.patchValue(this.p1city == null ? '' : this.p1city == 'null' ? '' : this.p1city);
        this.accountForm.controls.p2fname.patchValue(this.p2name == 'null' ? '' : this.p2name);
        this.accountForm.controls.p2address1.patchValue(this.p2address1 == 'null' ? '' : this.p2address1);
        this.accountForm.controls.p2address2.patchValue(this.p2address2 == 'null' ? '' : this.p2address2);
        this.accountForm.controls.p2city.patchValue(this.p2city == null ? '' : this.p2city == 'null' ? '' : this.p2city);
        this.accountForm.controls.p1country.patchValue(this.p1country == 'null' ? '231' : this.p1country);
        this.countryList(this.p1country, 1);
        this.accountForm.controls.p2country.patchValue(this.p2country == 'null' ? '231' : this.p2country);
        this.countryList(this.p2country, 2);
        if (this.birthday != '0000-00-00' && this.birthday != null && this.birthday != '') {
            const dob = this.birthday.split('-');
            const dobObject1 = { isRange: false, singleDate: { jsDate: new Date(parseInt(dob[0]), parseInt(dob[1]) - 1, parseInt(dob[2])) }, dateRange: null };
            this.accountForm.controls.dob.patchValue(dobObject1);
        }
        // else {
        //   this.accountForm.controls.dob.patchValue(null);
        // }
        this.accountForm.controls.postalCode1.patchValue(this.p1postalCode == null ? '' : this.p1postalCode == 'null' ? '' : this.p1postalCode);
        this.accountForm.controls.postalCode2.patchValue(this.p2postalCode == null ? '' : this.p2postalCode == 'null' ? '' : this.p2postalCode);
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
        let imgData = [{
                image: this.recordBase64Url,
                size: data.size,
                type: data.type,
                name: data.name
            }];
        this.getUrlImage(imgData);
    }
    saveProfile() {
        const addresslist = [];
        addresslist.push({
            address1: this.accountForm.controls.p1address1.value,
            address2: this.accountForm.controls.p1address2.value,
            city: this.accountForm.controls.p1city.value,
            state: this.accountForm.controls.p1state.value,
            country: this.accountForm.controls.p1country.value,
            postal_code: this.accountForm.controls.postalCode1.value,
        }, {
            address1: this.accountForm.controls.p2address1.value,
            address2: this.accountForm.controls.p2address2.value,
            city: this.accountForm.controls.p2city.value,
            state: this.accountForm.controls.p2state.value,
            country: this.accountForm.controls.p2country.value,
            postal_code: this.accountForm.controls.postalCode2.value,
        });
        if (this.accountForm.valid) {
            console.log(this.accountForm.controls.dob.value, 'dob');
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                uploadtype: 'profile',
                first_name: this.accountForm.controls.fname.value,
                last_name: this.accountForm.controls.lname.value,
                gender: this.accountForm.controls.gender.value,
                mobile: this.accountForm.controls.mobile.value,
                birthday: this.accountForm.controls.dob.value == null || this.accountForm.controls.dob.value == '' ? '' : this.datePipe.transform(this.accountForm.controls.dob.value.singleDate.jsDate, 'yyyy-MM-dd'),
                school_id: this.auth.getSessionData('school_id'),
                parent1_name: this.accountForm.controls.p1fname.value,
                parent2_name: this.accountForm.controls.p2fname.value,
                address: addresslist
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
            this.mobile = data.mobile;
            if (data.birthday != '' && data.birthday != '0000-00-00' && data.birthday != null) {
                this.birthday = data.birthday;
            }
            else {
                this.birthday = null;
            }
            this.p1name = data.parent1_name;
            this.p2name = data.parent2_name;
            this.gender = data.gender;
            this.p1address1 = data.address[0].address1;
            this.p1address2 = data.address[0].address2;
            this.p2address1 = data.address[1].address1;
            this.p2address2 = data.address[1].address2;
            this.p1city = data.address[0].city;
            this.p2city = data.address[1].city;
            this.p1state = data.address[0].state;
            this.p2state = data.address[1].state;
            this.p1country = data.address[0].country;
            this.p2country = data.address[1].country;
            this.stateListEdit(data.address[0].country, 1);
            this.stateListEdit(data.address[1].country, 2);
            this.countryListEdit(data.address[0].country, 1);
            this.countryListEdit(data.address[1].country, 2);
            this.p1postalCode = data.address[0].postal_code;
            this.p2postalCode = data.address[1].postal_code;
            this.auth.setSessionData('mobile', data.mobile);
            this.auth.setSessionData('birthday', this.birthday);
            this.auth.setSessionData('gender', data.gender);
            this.auth.setSessionData('firstname', data.first_name);
            this.auth.setSessionData('lastname', data.last_name);
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
    countryList(value, id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.common.getCountryList(data).subscribe((successData) => {
            this.countryListSuccess(successData, value, id);
        }, (error) => {
            this.countryListFailure(error);
        });
    }
    countryListSuccess(successData, value, id) {
        if (successData.IsSuccess) {
            this.countryListData = successData.ResponseObject;
        }
        if (this.editView == true) {
            if (id == 1) {
                this.stateList(value);
            }
            if (id == 2) {
                this.stateList1(value);
            }
        }
    }
    countryListFailure(error) {
        console.log(error, 'error');
    }
    countryListEdit(value, id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.common.getCountryList(data).subscribe((successData) => {
            this.countryListEditSuccess(successData, value, id);
        }, (error) => {
            this.countryListEditFailure(error);
        });
    }
    countryListEditSuccess(successData, value, id) {
        console.log(value, 'Countrylist');
        if (successData.IsSuccess) {
            this.countryListData = successData.ResponseObject;
            if (id == 1) {
                this.countryListData.forEach((id1) => {
                    if (id1.country_id == value) {
                        this.p1countryname = id1.name;
                        this.auth.setSessionData('p1country_name', this.p1countryname);
                    }
                });
            }
            else {
                this.countryListData.forEach((id1) => {
                    if (id1.country_id == value) {
                        this.p2countryname = id1.name;
                        this.auth.setSessionData('p2country_name', this.p2countryname);
                    }
                });
            }
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
            // this.stateListData1 = successData.ResponseObject;
            this.accountForm.controls.p1state.patchValue(null);
            // this.accountForm.controls.p2state.patchValue(null);
            if (this.editView == true) {
                this.stateListData.forEach((value) => {
                    if (value.state_id == this.p1state) {
                        this.accountForm.controls.p1state.patchValue(value.state_id);
                    }
                });
            }
        }
    }
    stateListFailure(error) {
        console.log(error, 'error');
    }
    stateList1(id) {
        const data = {
            platform: 'web',
            country_id: id,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.common.getStateList(data).subscribe((successData) => {
            this.stateListSuccess1(successData, id);
        }, (error) => {
            this.stateListFailure1(error);
        });
    }
    stateListSuccess1(successData, id) {
        if (successData.IsSuccess) {
            this.stateListData1 = successData.ResponseObject;
            this.accountForm.controls.p2state.patchValue(null);
            if (this.editView == true) {
                this.stateListData1.forEach((value) => {
                    if (value.state_id == this.p2state) {
                        this.accountForm.controls.p2state.patchValue(value.state_id);
                    }
                });
            }
        }
    }
    stateListFailure1(error) {
        console.log(error, 'error');
    }
    stateListEdit(id, valve) {
        const data = {
            platform: 'web',
            country_id: id,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.common.getStateList(data).subscribe((successData) => {
            this.stateListEditSuccess(successData, id, valve);
        }, (error) => {
            this.stateListEditFailure(error);
        });
    }
    stateListEditSuccess(successData, id, valve) {
        if (successData.IsSuccess) {
            if (valve == 1) {
                this.stateListData = successData.ResponseObject;
                this.stateListData.forEach((value) => {
                    if (this.p1state != null) {
                        if (value.state_id == this.p1state) {
                            this.p1statename = value.name;
                        }
                    }
                    else {
                        this.p1statename = 'null';
                    }
                });
            }
            else {
                this.stateListData1 = successData.ResponseObject;
                this.stateListData1.forEach((value1) => {
                    if (this.p2state != null) {
                        if (value1.state_id == this.p2state) {
                            this.p2statename = value1.name;
                        }
                    }
                    else {
                        this.p2statename = 'null';
                    }
                });
            }
        }
    }
    stateListEditFailure(error) {
        console.log(error, 'error');
    }
    numberPattern(event) {
        this.validation.numberValidate1(event);
    }
    static { this.ɵfac = function StudentProfileComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentProfileComponent)(i0.ɵɵdirectiveInject(i1.CommonDataService), i0.ɵɵdirectiveInject(i2.SubjectServices), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i4.FormBuilder), i0.ɵɵdirectiveInject(i2.SubjectServices), i0.ɵɵdirectiveInject(i5.ConfigurationService), i0.ɵɵdirectiveInject(i6.ToastrService), i0.ɵɵdirectiveInject(i7.AuthService), i0.ɵɵdirectiveInject(i8.CategoryService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i9.ValidationService), i0.ɵɵdirectiveInject(i10.EnvironmentService), i0.ɵɵdirectiveInject(i2.SubjectServices), i0.ɵɵdirectiveInject(i11.DatePipe), i0.ɵɵdirectiveInject(i12.CommonService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentProfileComponent, selectors: [["app-profile"]], viewQuery: function StudentProfileComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.carousel = _t.first);
        } }, decls: 31, vars: 18, consts: [["dp", "angular-mydatepicker"], [1, "container-fluid"], [1, "row"], [1, "card"], [1, "card-body"], [1, "profile-details", "text-center"], [1, "avatar-upload"], [1, "avatar-edit"], ["type", "file", "id", "imageUpload", "accept", ".png, .jpg, .jpeg", 3, "change"], ["for", "imageUpload"], [1, "avatar-preview"], ["class", "blur-up lazyloaded", "id", "imagePreview", "style", "background-image: url(assets/images/dashboard/default.png)", 4, "ngIf"], ["class", "blur-up lazyloaded", "id", "imagePreview2", "width", "100%", 3, "src", 4, "ngIf"], ["class", "blur-up lazyloaded", "width", "100%", "id", "imagePreview1", 3, "background-image", 4, "ngIf"], [1, "f-w-600", "mb-0"], [1, "row", "mt-3"], ["class", "col-md-3", "style", "cursor: pointer", 4, "ngFor", "ngForOf"], [1, "card", "tab2-card"], [1, "position-relative", "border-bottom", "pb-2", "letter"], [3, "icon"], ["class", "cursor", "style", "float: right; position: absolute; left: 40rem", 3, "icon", "click", 4, "ngIf"], ["id", "top-profile", "role", "tabpanel", "aria-labelledby", "top-profile-tab", 1, "tab-pane", "fade", "show", "active"], ["class", "table-responsive profile-table", 4, "ngIf"], ["class", "needs-validation user-add", "novalida", "", 3, "formGroup", 4, "ngIf"], ["class", "pull-right mt-3", 4, "ngIf"], ["id", "imagePreview", 1, "blur-up", "lazyloaded", 2, "background-image", "url(assets/images/dashboard/default.png)"], ["id", "imagePreview2", "width", "100%", 1, "blur-up", "lazyloaded", 3, "src"], ["width", "100%", "id", "imagePreview1", 1, "blur-up", "lazyloaded"], [1, "col-md-3", 2, "cursor", "pointer"], ["width", "50", 3, "click", "src"], [1, "cursor", 2, "float", "right", "position", "absolute", "left", "40rem", 3, "click", "icon"], [1, "table-responsive", "profile-table"], [1, "table", "table-responsive"], [1, "capital"], ["class", "position-relative border-bottom pb-2 letter", 4, "ngIf"], [4, "ngIf"], ["novalida", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], [1, "col-xl-8", "col-md-7"], ["formControlName", "fname", "id", "validationCustom0", "type", "text", "required", "", 1, "form-control"], ["class", "error", 4, "ngIf"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], ["formControlName", "lname", "id", "validationCustom1", "type", "text", "required", "", 1, "form-control"], ["for", "validationCustom2", 1, "col-xl-3", "col-md-4"], ["formControlName", "email", "id", "validationCustom2", "type", "text", "required", "", "readonly", "", 1, "form-control"], ["for", "validationCustom6", 1, "col-xl-3", "col-md-4"], [2, "visibility", "hidden"], ["formControlName", "gender", "id", "validationCustom6", 1, "form-control"], ["value", ""], ["value", "male"], ["value", "female"], ["value", "n/a"], ["formControlName", "mobile", "id", "validationCustom3", "maxlength", "15", "minlength", "10", "type", "text", "placeholder", "Enter the mobile number", 1, "form-control", 3, "keypress"], [1, "col-xl-3", "col-md-4"], [1, "col-xl-8", "col-md-7", "form-group"], [1, "d-flex", "align-items-baseline"], ["placeholder", "mm/dd/yyyy", "name", "dp", "formControlName", "dob", "angular-mydatepicker", "", 1, "form-control", 3, "dateChanged", "options"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-calendar-o"], [1, "card-header"], ["for", "validationCustom00", 1, "col-xl-3", "col-md-4"], ["formControlName", "p1fname", "id", "validationCustom00", "type", "text", "placeholder", "Enter the contact 1 name", 1, "form-control"], ["for", "validationCustom7", 1, "col-xl-3", "col-md-4"], ["formControlName", "p1address1", "id", "validationCustom7", "type", "text", "placeholder", "Enter address 1", 1, "form-control"], ["for", "validationCustom8", 1, "col-xl-3", "col-md-4"], ["formControlName", "p1address2", "id", "validationCustom8", "type", "text", "placeholder", "Enter address 2", 1, "form-control"], ["for", "validationCustom9", 1, "col-xl-3", "col-md-4"], ["formControlName", "p1city", "id", "validationCustom9", "type", "text", "placeholder", "Enter the city", 1, "form-control"], ["bindLabel", "name", "bindValue", "state_id", "formControlName", "p1state", "placeholder", "Please Select", 3, "items"], ["bindLabel", "name", "bindValue", "country_id", "formControlName", "p1country", "placeholder", "Please Select", 3, "change", "items"], ["for", "validationCustom13", 1, "col-xl-3", "col-md-4"], ["formControlName", "postalCode1", "id", "validationCustom13", "type", "text", "placeholder", "Enter Zip", "minlength", "3", "maxlength", "9", 1, "form-control", 3, "keypress"], ["for", "validationCustom000", 1, "col-xl-3", "col-md-4"], ["formControlName", "p2fname", "id", "validationCustom000", "type", "text", "placeholder", "Enter the contact 2 name", 1, "form-control"], ["for", "validationCustom17", 1, "col-xl-3", "col-md-4"], ["formControlName", "p2address1", "id", "validationCustom17", "type", "text", "placeholder", "Enter the address 1", 1, "form-control"], ["for", "validationCustom18", 1, "col-xl-3", "col-md-4"], ["formControlName", "p2address2", "id", "validationCustom18", "type", "text", "placeholder", "Enter the address 2", 1, "form-control"], ["for", "validationCustom19", 1, "col-xl-3", "col-md-4"], ["formControlName", "p2city", "id", "validationCustom19", "type", "text", "placeholder", "Enter the city", 1, "form-control"], ["bindLabel", "name", "bindValue", "state_id", "formControlName", "p2state", "placeholder", "Please Select", 3, "items"], ["bindLabel", "name", "bindValue", "country_id", "formControlName", "p2country", "placeholder", "Please Select", 3, "change", "items"], ["for", "validationCustom12", 1, "col-xl-3", "col-md-4"], ["formControlName", "postalCode2", "id", "validationCustom12", "type", "text", "placeholder", "Enter Zip", "minlength", "3", "maxlength", "9", 1, "form-control", 3, "keypress"], [1, "error"], [1, "pull-right", "mt-3"], ["type", "button", 3, "class", "click", 4, "ngIf"], ["type", "button", 3, "click"]], template: function StudentProfileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "input", 8);
            i0.ɵɵlistener("change", function StudentProfileComponent_Template_input_change_8_listener($event) { return ctx.encodeImageFileAsURL($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "label", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 10);
            i0.ɵɵtemplate(11, StudentProfileComponent_div_11_Template, 1, 0, "div", 11)(12, StudentProfileComponent_img_12_Template, 1, 1, "img", 12)(13, StudentProfileComponent_div_13_Template, 1, 2, "div", 13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "h5", 14);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "span");
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 15);
            i0.ɵɵtemplate(19, StudentProfileComponent_div_19_Template, 2, 1, "div", 16);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(20, "div")(21, "div", 17)(22, "div", 4)(23, "h4", 18);
            i0.ɵɵelement(24, "app-feather-icons", 19);
            i0.ɵɵtext(25, "Personal Details ");
            i0.ɵɵtemplate(26, StudentProfileComponent_app_feather_icons_26_Template, 1, 1, "app-feather-icons", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 21);
            i0.ɵɵtemplate(28, StudentProfileComponent_div_28_Template, 107, 47, "div", 22)(29, StudentProfileComponent_form_29_Template, 168, 12, "form", 23)(30, StudentProfileComponent_div_30_Template, 2, 1, "div", 24);
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("col-md-4 col-xl-4 col-sm-4 ", ctx.env.deviceType() ? "pl-2 pr-0" : "", "");
            i0.ɵɵadvance(9);
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
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("col-xl-8 col-sm-8 col-md-8 ", ctx.env.deviceType() ? "px-2" : "", "");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("icon", "user");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.type == "view" && !ctx.editView);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.type == "view" && !ctx.editView);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "edit" || ctx.editView);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "edit" || ctx.editView);
        } }, dependencies: [i11.NgForOf, i11.NgIf, i4.ɵNgNoValidate, i4.NgSelectOption, i4.ɵNgSelectMultipleOption, i4.DefaultValueAccessor, i4.SelectControlValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.MinLengthValidator, i4.MaxLengthValidator, i4.FormGroupDirective, i4.FormControlName, i13.NgSelectComponent, i14.AngularMyDatePickerDirective, i15.FeatherIconsComponent, i11.TitleCasePipe, i11.DatePipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentProfileComponent, [{
        type: Component,
        args: [{ selector: 'app-profile', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-4 col-xl-4 col-sm-4 {{env.deviceType() ? 'pl-2 pr-0' : ''}}\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"profile-details text-center\">\n                        <div class=\"avatar-upload\">\n                            <div class=\"avatar-edit\">\n                                <input type='file' id=\"imageUpload\" (change)=\"encodeImageFileAsURL($event)\" accept=\".png, .jpg, .jpeg\" />\n                                <label for=\"imageUpload\"></label>\n                            </div>\n                            <div class=\"avatar-preview\">\n                                <div class=\"blur-up lazyloaded\" *ngIf=\"profile == ''\" id=\"imagePreview\" style=\"background-image: url(assets/images/dashboard/default.png)\"></div>\n                                <img class=\"blur-up lazyloaded\" *ngIf=\"listCheck && profile != ''\" id=\"imagePreview2\" [src]=\"profile\" width=\"100%\">\n                                <div class=\"blur-up lazyloaded\" *ngIf=\"!listCheck && profile != ''\"  width=\"100%\" id=\"imagePreview1\" [style.background-image]=\"'url('+imgUrl+ '/' + profile +')'\"></div>\n                            </div>\n                        </div>\n\n                        <h5 class=\"f-w-600 mb-0\">{{firstname}} {{lastname}}</h5>\n                        <span>{{email}}</span>\n\n                        <div class=\"row mt-3\">\n                            <div class=\"col-md-3\" *ngFor=\"let imgIdx of imageObject; let i = index\" style=\"cursor: pointer\">\n                                <img [src]=\"imgIdx.thumbImage\" (click)=\"getImage(i, imgIdx)\"   width=\"50\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-8 col-sm-8 col-md-8 {{env.deviceType() ? 'px-2' : ''}}\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-body\">\n                    <h4 class=\"position-relative border-bottom pb-2 letter\">\n                        <app-feather-icons [icon]=\"'user'\"></app-feather-icons>Personal Details\n                        <app-feather-icons (click)=\"editPage()\" *ngIf=\"type == 'view' && !editView\" [icon]=\"'edit'\" class=\"cursor\" style=\"float: right; position: absolute; left: 40rem\"></app-feather-icons>\n                    </h4>\n                                <div class=\"tab-pane fade show active\" id=\"top-profile\" role=\"tabpanel\"\n                                     aria-labelledby=\"top-profile-tab\">\n                                    <div *ngIf=\"type == 'view' && !editView\" class=\"table-responsive profile-table\">\n                                        <table class=\"table table-responsive\">\n                                            <tbody>\n                                            <tr>\n                                                <td>First Name:</td>\n                                                <td>{{firstname | titlecase}}</td>\n                                            </tr>\n                                            <tr>\n                                                <td>Last Name:</td>\n                                                <td>{{lastname | titlecase}}</td>\n                                            </tr>\n                                            <tr>\n                                                <td>Email:</td>\n                                                <td>{{email}}</td>\n                                            </tr>\n                                            <tr>\n                                                <td>Gender:</td>\n                                                <td class=\"capital\">{{gender | titlecase}}</td>\n                                            </tr>\n                                            <tr>\n                                                <td>Mobile Number:</td>\n                                                <td>{{mobile}}</td>\n                                            </tr>\n                                            <tr>\n                                                <td>DOB:</td>\n                                                <td>{{birthday | date: 'MM/dd/yyyy'}}</td>\n                                            </tr>\n                                            </tbody>\n                                        </table>\n                                        <h4 class=\"position-relative border-bottom pb-2 letter\" *ngIf=\"type == 'view' && !editView && userVerification !='admin'\" >\n                                            <app-feather-icons [icon]=\"'user'\"></app-feather-icons>Contact 1 Details\n                                        </h4>\n                                        <table class=\"table table-responsive\">\n                                            <tbody>\n                                            <tr>\n                                                <td>Contact 1 Name:</td>\n                                                <td>{{p1name != '' && p1name ? (p1name | titlecase) : '-'}}</td>\n                                            </tr>\n                                            <tr>\n                                                 <td>Contact 1 Address1:</td>\n                                                 <td>{{p1address1 != '' && p1address1 ? (p1address1 | titlecase) : '-' }}</td>\n                                            </tr>\n                                            <tr>\n                                                  <td>Contact 1 Address2:</td>\n                                                  <td>{{p1address2 != '' && p1address2 ? (p1address2 | titlecase) : '-'}}</td>\n                                            </tr>\n                                            <tr >\n                                                <td>City:</td>\n                                                <td>{{p1city != '' && p1city ? (p1city | titlecase) : '-'}}</td>\n                                            </tr>\n                                            <tr *ngIf=\"p1state != 'null' && p1country != 'null' && p1state != '0' && p1country != '0'\">\n                                                <td>State:</td>\n                                                <td><span>{{p1statename != '' && p1statename ? (p1statename | titlecase) : '-'}}</span></td>\n                                            </tr>\n                                            <tr  *ngIf=\"p1state != 'null' && p1country != 'null' && p1state != '0' && p1country != '0'\">\n                                                <td>Country:</td>\n                                                <td><span *ngIf=\"p1statename != 'null' && p1countryname != 'null'\">{{p1countryname | titlecase}}</span></td>\n                                            </tr>\n                                            <tr>\n                                                <td>Zip:</td>\n                                                <td><span>{{p1postalCode && p1postalCode != '' ? p1postalCode : '-'}}</span></td>\n                                            </tr>\n                                            </tbody>\n                                        </table>\n                                        <h4 class=\"position-relative border-bottom pb-2 letter\" *ngIf=\"type == 'view' && !editView\" >\n                                            <app-feather-icons [icon]=\"'user'\"></app-feather-icons>Contact 2 Details\n                                        </h4>\n                                        <table class=\"table table-responsive\">\n                                            <tbody>\n                                            <tr>\n                                                <td>Contact 2 Name:</td>\n                                                <td>{{p2name != '' && p2name ? (p2name | titlecase) : '-'}}</td>\n                                            </tr>\n                                            <tr>\n                                                <td>Contact 2 Address1:</td>\n                                                <td>{{p2address1 != '' && p2address1 ? (p2address1 |titlecase) : '-'}}</td>\n                                            </tr>\n                                            <tr>\n                                                <td>Contact 2 Address2:</td>\n                                                <td>{{p2address2 != '' && p2address2 ? (p2address2 | titlecase) : '-'}}</td>\n                                            </tr>\n                                            <tr>\n                                                <td>City:</td>\n                                                <td>{{p2city != '' && p2city ? (p2city | titlecase) : '-'}}</td>\n                                            </tr>\n                                            <tr  *ngIf=\"p2state != 'null' && p2country != 'null' && p2state != '0' && p2country != '0'\">\n                                                <td>State:</td>\n                                                <td><span>{{p2statename != '' && p2statename ? (p2statename | titlecase) : '-'}}</span></td>\n                                            </tr>\n                                            <tr  *ngIf=\"p2state != 'null' && p2country != 'null' && p2state != '0' && p2country != '0'\">\n                                                <td >Country:</td>\n                                                <td><span *ngIf=\"p2statename != 'null' && p2countryname != 'null'\">{{p2countryname | titlecase}}</span></td>\n                                            </tr>\n                                            <tr>\n                                                <td>Zip:</td>\n                                                <td><span>{{p2postalCode != '' && p2postalCode ? p2postalCode : '-'}}</span></td>\n                                            </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n\n                                    <form  *ngIf=\"type == 'edit' || editView\" [formGroup]=\"accountForm\" class=\"needs-validation user-add\" novalida>\n                                        <div class=\"form-group row\">\n                                            <label for=\"validationCustom0\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                                First Name</label>\n                                            <div class=\"col-xl-8 col-md-7\">\n                                                <input class=\"form-control \" formControlName=\"fname\" id=\"validationCustom0\"\n                                                       type=\"text\" required=\"\">\n                                                <em class=\"error\" *ngIf=\"!accountForm.get('fname').valid && (accountForm.get('fname').dirty || accountForm.get('fname').touched)\">First name is required</em>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label for=\"validationCustom1\" class=\"col-xl-3 col-md-4\"><span>*</span> Last\n                                                Name</label>\n                                            <div class=\"col-xl-8 col-md-7\">\n                                                <input class=\"form-control\" formControlName=\"lname\" id=\"validationCustom1\"\n                                                       type=\"text\" required=\"\">\n                                                <em class=\"error\" *ngIf=\"!accountForm.get('lname').valid && (accountForm.get('lname').dirty || accountForm.get('lname').touched)\">Last name is required</em>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label for=\"validationCustom2\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                                Email</label>\n                                            <div class=\"col-xl-8 col-md-7\">\n                                                <input class=\"form-control\" formControlName=\"email\" id=\"validationCustom2\"\n                                                       type=\"text\" required=\"\" readonly>\n                                                <em class=\"error\" *ngIf=\"!accountForm.get('email').valid && (accountForm.get('email').dirty || accountForm.get('email').touched)\">Email is required</em>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label for=\"validationCustom6\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                                Gender</label>\n                                            <div class=\"col-xl-8 col-md-7\">\n                                                <select class=\"form-control\" formControlName=\"gender\" id=\"validationCustom6\">\n                                                    <option value=\"\">--Select Gender--</option>\n                                                    <option value=\"male\">Male</option>\n                                                    <option value=\"female\">Female</option>\n                                                    <option value=\"n/a\">Do not want to disclose</option>\n                                                </select>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label for=\"validationCustom1\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                                Mobile</label>\n                                            <div class=\"col-xl-8 col-md-7\">\n                                                <input class=\"form-control\" formControlName=\"mobile\" id=\"validationCustom3\" (keypress)=\"numberPattern($event)\" maxlength=\"15\" minlength=\"10\"\n                                                       type=\"text\" placeholder=\"Enter the mobile number\">\n                                                <em class=\"error\" *ngIf=\"!accountForm.get('mobile').valid && (accountForm.get('mobile').dirty || accountForm.get('mobile').touched)\">Mobile is required</em>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                                Date Of Birth</label>\n                                            <div class=\"col-xl-8 col-md-7 form-group\">\n                                                <div class=\"d-flex align-items-baseline\">\n                                                    <input class=\"form-control\" placeholder=\"mm/dd/yyyy\"\n                                                           name=\"dp\"  formControlName=\"dob\" angular-mydatepicker #dp=\"angular-mydatepicker\"\n                                                           [options]=\"myDpOptions\" (dateChanged)=\"onDateChanged($event)\" />\n                                                    <div class=\"input-group-append\">\n                                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp.toggleCalendar()\">\n                                                            <i class=\"fa fa-calendar-o\"></i></button>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"card-header\">\n                                            <h5>Contact 1 Details</h5><hr>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                        <label for=\"validationCustom00\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                            Contact 1 Name</label>\n                                        <div class=\"col-xl-8 col-md-7\">\n                                            <input class=\"form-control \" formControlName=\"p1fname\" id=\"validationCustom00\"\n                                                   type=\"text\" placeholder=\"Enter the contact 1 name\">\n                                            <em class=\"error\" *ngIf=\"!accountForm.get('p1fname').valid && (accountForm.get('p1fname').dirty || accountForm.get('p1fname').touched)\">First name is required</em>\n                                        </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label for=\"validationCustom7\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                                Address 1</label>\n                                            <div class=\"col-xl-8 col-md-7\">\n                                                <input class=\"form-control\" formControlName=\"p1address1\" id=\"validationCustom7\"\n                                                       type=\"text\" placeholder=\"Enter address 1\">\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label for=\"validationCustom8\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                                Address 2</label>\n                                            <div class=\"col-xl-8 col-md-7\">\n                                                <input class=\"form-control\" formControlName=\"p1address2\" id=\"validationCustom8\"\n                                                       type=\"text\" placeholder=\"Enter address 2\">\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label for=\"validationCustom9\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                                City</label>\n                                            <div class=\"col-xl-8 col-md-7\">\n                                                <input class=\"form-control\" formControlName=\"p1city\" id=\"validationCustom9\"\n                                                       type=\"text\" placeholder=\"Enter the city\">\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                                State</label>\n                                            <div class=\"col-xl-8 col-md-7\">\n                                                <ng-select [items]=\"stateListData\"\n                                                bindLabel=\"name\"\n                                                bindValue=\"state_id\"\n                                                formControlName=\"p1state\"\n                                                placeholder=\"Please Select\">\n                                                </ng-select>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                                Country</label>\n                                            <div class=\"col-xl-8 col-md-7\">\n                                                <ng-select [items]=\"countryListData\"\n                                                           bindLabel=\"name\"\n                                                           bindValue=\"country_id\"\n                                                           formControlName=\"p1country\"\n                                                           placeholder=\"Please Select\"\n                                                           (change)=\"stateList($event.country_id)\"\n                                                >\n                                                </ng-select>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label for=\"validationCustom13\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                                Zip </label>\n                                            <div class=\"col-xl-8 col-md-7\">\n                                                <input class=\"form-control\" formControlName=\"postalCode1\" id=\"validationCustom13\"\n                                                       type=\"text\" placeholder=\"Enter Zip\" (keypress)=\"numberPattern($event)\" minlength=\"3\" maxlength=\"9\">\n                                            </div>\n                                        </div>\n                                        <div class=\"card-header\">\n                                            <h5>Contact 2 Details</h5><hr>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label for=\"validationCustom000\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                                Contact 2 Name</label>\n                                            <div class=\"col-xl-8 col-md-7\">\n                                                <input class=\"form-control \" formControlName=\"p2fname\" id=\"validationCustom000\"\n                                                       type=\"text\" placeholder=\"Enter the contact 2 name\">\n                                                <em class=\"error\" *ngIf=\"!accountForm.get('p2fname').valid && (accountForm.get('p2fname').dirty || accountForm.get('p2fname').touched)\">First name is required</em>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label for=\"validationCustom17\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                                Address 1</label>\n                                            <div class=\"col-xl-8 col-md-7\">\n                                                <input class=\"form-control\" formControlName=\"p2address1\" id=\"validationCustom17\"\n                                                       type=\"text\" placeholder=\"Enter the address 1\">\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label for=\"validationCustom18\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                                Address 2</label>\n                                            <div class=\"col-xl-8 col-md-7\">\n                                                <input class=\"form-control\" formControlName=\"p2address2\" id=\"validationCustom18\"\n                                                       type=\"text\" placeholder=\"Enter the address 2\">\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label for=\"validationCustom19\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                                City</label>\n                                            <div class=\"col-xl-8 col-md-7\">\n                                                <input class=\"form-control\" formControlName=\"p2city\" id=\"validationCustom19\"\n                                                       type=\"text\" placeholder=\"Enter the city\">\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                                State</label>\n                                            <div class=\"col-xl-8 col-md-7\">\n                                                <ng-select [items]=\"stateListData1\"\n                                                           bindLabel=\"name\"\n                                                           bindValue=\"state_id\"\n                                                           formControlName=\"p2state\"\n                                                           placeholder=\"Please Select\">\n                                                </ng-select>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                                Country</label>\n                                            <div class=\"col-xl-8 col-md-7\">\n                                                <ng-select [items]=\"countryListData\"\n                                                           bindLabel=\"name\"\n                                                           bindValue=\"country_id\"\n                                                           formControlName=\"p2country\"\n                                                           placeholder=\"Please Select\"\n                                                           (change)=\"stateList1($event.country_id)\"\n                                                >\n                                                </ng-select>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label for=\"validationCustom12\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                                Zip </label>\n                                            <div class=\"col-xl-8 col-md-7\">\n                                                <input class=\"form-control\" formControlName=\"postalCode2\" id=\"validationCustom12\"\n                                                       type=\"text\" placeholder=\"Enter Zip\" (keypress)=\"numberPattern($event)\" minlength=\"3\" maxlength=\"9\">\n                                            </div>\n                                        </div>\n                                    </form>\n                                    <div class=\"pull-right mt-3\" *ngIf=\"type == 'edit' || editView\">\n                                        <button type=\"button\" *ngIf=\"userVerification != 'admin'\" class=\"btn btn-primary {{env.deviceType() ? 'py-0 border-radius-2' : ''}}\" (click)=\"saveProfile()\">Save</button>\n                                    </div>\n                                </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n" }]
    }], () => [{ type: i1.CommonDataService }, { type: i2.SubjectServices }, { type: i3.ActivatedRoute }, { type: i4.FormBuilder }, { type: i2.SubjectServices }, { type: i5.ConfigurationService }, { type: i6.ToastrService }, { type: i7.AuthService }, { type: i8.CategoryService }, { type: i3.Router }, { type: i9.ValidationService }, { type: i10.EnvironmentService }, { type: i2.SubjectServices }, { type: i11.DatePipe }, { type: i12.CommonService }], { carousel: [{
            type: ViewChild,
            args: ['carousel']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentProfileComponent, { className: "StudentProfileComponent" }); })();
//# sourceMappingURL=student-profile.component.js.map