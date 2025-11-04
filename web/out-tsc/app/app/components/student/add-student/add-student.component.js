import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { dateOptions, timeZone } from '../../../shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
import * as i3 from "../../../shared/service/configuration.service";
import * as i4 from "../../../shared/service/common-data.service";
import * as i5 from "ngx-toastr";
import * as i6 from "@angular/platform-browser";
import * as i7 from "../../../shared/service/auth.service";
import * as i8 from "../../../shared/service/student.service";
import * as i9 from "../../../shared/service/common.service";
import * as i10 from "../../../shared/service/newsubject.service";
import * as i11 from "../../../shared/service/validation.service";
import * as i12 from "../../../shared/service/School.service";
import * as i13 from "@angular/common";
import * as i14 from "../../../shared/service/classroom.service";
import * as i15 from "../../../shared/services/terminology.service";
import * as i16 from "@ng-select/ng-select";
import * as i17 from "@nodro7/angular-mydatepicker";
import * as i18 from "../../../shared/components/form-controls/form-section.component";
import * as i19 from "../../../shared/components/form-controls/contact-info-group.component";
const _c0 = ["myInput"];
const _c1 = a0 => ({ field: a0 });
function AddStudentComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "h2", 11);
    i0.ɵɵelement(4, "i", 12);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 13);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2(" ", ctx_r0.type === "add" ? "Add New" : "Edit", " ", ctx_r0.terminology.get("student.singular"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r0.terminology.getSectionHeader("personalInfo"), " and ", ctx_r0.terminology.getSectionHeader("contactInfo"), " ");
} }
function AddStudentComponent_div_2_em_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 70);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getValidationMessage("required", i0.ɵɵpureFunction1(1, _c1, ctx_r0.terminology.getFieldLabel("first_name"))), " ");
} }
function AddStudentComponent_div_2_em_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 70);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getValidationMessage("required", i0.ɵɵpureFunction1(1, _c1, ctx_r0.terminology.getFieldLabel("last_name"))), " ");
} }
function AddStudentComponent_div_2_input_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 71);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("placeholder", ctx_r0.terminology.getPlaceholder("email_id"));
} }
function AddStudentComponent_div_2_input_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 72);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("placeholder", ctx_r0.terminology.getPlaceholder("email_id"));
} }
function AddStudentComponent_div_2_em_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 70);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getValidationMessage("required", i0.ɵɵpureFunction1(1, _c1, ctx_r0.terminology.getFieldLabel("email_id"))), " ");
} }
function AddStudentComponent_div_2_em_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 70);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getValidationMessage("email"), " ");
} }
function AddStudentComponent_div_2_em_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 70);
    i0.ɵɵtext(1, " Date of birth is invalid ");
    i0.ɵɵelementEnd();
} }
function AddStudentComponent_div_2_em_66_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 70);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getValidationMessage("required", i0.ɵɵpureFunction1(1, _c1, ctx_r0.terminology.getFieldLabel("grade"))), " ");
} }
function AddStudentComponent_div_2_option_105_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 73);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.terminology.getStatusLabel("4"));
} }
function AddStudentComponent_div_2_div_118_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 44)(1, "div", 18)(2, "label", 35)(3, "span", 20);
    i0.ɵɵtext(4, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 36)(7, "input", 74, 3);
    i0.ɵɵlistener("inputFieldChanged", function AddStudentComponent_div_2_div_118_Template_input_inputFieldChanged_7_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.droppedDateCheckValue($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 38)(10, "button", 39);
    i0.ɵɵlistener("click", function AddStudentComponent_div_2_div_118_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r5); const dp2_r6 = i0.ɵɵreference(8); return i0.ɵɵresetView(dp2_r6.toggleCalendar()); });
    i0.ɵɵelement(11, "i", 40);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "small", 28);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getFieldLabel("dropped_date"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("options", ctx_r0.myDpOptions1);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.terminology.getHelpText("dropped_date"));
} }
function AddStudentComponent_div_2_div_129_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 77);
    i0.ɵɵelement(1, "img", 78);
    i0.ɵɵelementStart(2, "button", 79);
    i0.ɵɵlistener("click", function AddStudentComponent_div_2_div_129_div_1_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.deleteImg()); });
    i0.ɵɵelement(3, "i", 80);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const file_r8 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r0.sanitizer.bypassSecurityTrustResourceUrl(ctx_r0.webhost + "/" + file_r8), i0.ɵɵsanitizeUrl);
} }
function AddStudentComponent_div_2_div_129_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 75);
    i0.ɵɵtemplate(1, AddStudentComponent_div_2_div_129_div_1_Template, 4, 1, "div", 76);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.imagepath);
} }
function AddStudentComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 9)(2, "form", 15)(3, "app-form-section", 16)(4, "div", 14)(5, "div", 17)(6, "div", 18)(7, "label", 19)(8, "span", 20);
    i0.ɵɵtext(9, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "input", 21);
    i0.ɵɵtemplate(12, AddStudentComponent_div_2_em_12_Template, 2, 3, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 17)(14, "div", 18)(15, "label", 23)(16, "span", 20);
    i0.ɵɵtext(17, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(19, "input", 24);
    i0.ɵɵtemplate(20, AddStudentComponent_div_2_em_20_Template, 2, 3, "em", 22);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "div", 14)(22, "div", 17)(23, "div", 18)(24, "label", 25)(25, "span", 20);
    i0.ɵɵtext(26, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(28, AddStudentComponent_div_2_input_28_Template, 1, 1, "input", 26)(29, AddStudentComponent_div_2_input_29_Template, 1, 1, "input", 27);
    i0.ɵɵelementStart(30, "small", 28);
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(32, AddStudentComponent_div_2_em_32_Template, 2, 3, "em", 22)(33, AddStudentComponent_div_2_em_33_Template, 2, 1, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 17)(35, "div", 18)(36, "label", 29);
    i0.ɵɵtext(37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "select", 30)(39, "option", 31);
    i0.ɵɵtext(40, "Select Gender");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "option", 32);
    i0.ɵɵtext(42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "option", 33);
    i0.ɵɵtext(44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "option", 34);
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(47, "div", 14)(48, "div", 17)(49, "div", 18)(50, "label", 35);
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "div", 36)(53, "input", 37, 0);
    i0.ɵɵlistener("keypress", function AddStudentComponent_div_2_Template_input_keypress_53_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.datePattern($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "div", 38)(56, "button", 39);
    i0.ɵɵlistener("click", function AddStudentComponent_div_2_Template_button_click_56_listener() { i0.ɵɵrestoreView(_r2); const dp_r3 = i0.ɵɵreference(54); return i0.ɵɵresetView(dp_r3.toggleCalendar()); });
    i0.ɵɵelement(57, "i", 40);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(58, AddStudentComponent_div_2_em_58_Template, 2, 0, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(59, "div", 17)(60, "div", 18)(61, "label", 35)(62, "span", 20);
    i0.ɵɵtext(63, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(64);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(65, "ng-select", 41);
    i0.ɵɵtemplate(66, AddStudentComponent_div_2_em_66_Template, 2, 3, "em", 22);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(67, "div", 14)(68, "div", 17)(69, "div", 18)(70, "label", 42);
    i0.ɵɵtext(71);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(72, "input", 43);
    i0.ɵɵelementStart(73, "small", 28);
    i0.ɵɵtext(74);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(75, "div", 14)(76, "div", 44)(77, "div", 18)(78, "label", 45);
    i0.ɵɵtext(79);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(80, "input", 46);
    i0.ɵɵlistener("keypress", function AddStudentComponent_div_2_Template_input_keypress_80_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.numberPattern($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(81, "small", 28);
    i0.ɵɵtext(82);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(83, "div", 44)(84, "div", 18)(85, "label", 47);
    i0.ɵɵtext(86);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(87, "input", 48);
    i0.ɵɵlistener("keypress", function AddStudentComponent_div_2_Template_input_keypress_87_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.numberPattern($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(88, "div", 44)(89, "div", 18)(90, "label", 49);
    i0.ɵɵtext(91);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(92, "input", 50);
    i0.ɵɵlistener("keypress", function AddStudentComponent_div_2_Template_input_keypress_92_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.numberPattern($event)); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(93, "div", 14)(94, "div", 44)(95, "div", 18)(96, "label", 51)(97, "span", 20);
    i0.ɵɵtext(98, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(99);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(100, "select", 52);
    i0.ɵɵlistener("change", function AddStudentComponent_div_2_Template_select_change_100_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.statusChange()); });
    i0.ɵɵelementStart(101, "option", 53);
    i0.ɵɵtext(102);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(103, "option", 54);
    i0.ɵɵtext(104);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(105, AddStudentComponent_div_2_option_105_Template, 2, 1, "option", 55);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(106, "div", 44)(107, "div", 18)(108, "label", 35);
    i0.ɵɵtext(109);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(110, "div", 36)(111, "input", 56, 1);
    i0.ɵɵlistener("keypress", function AddStudentComponent_div_2_Template_input_keypress_111_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.datePattern($event)); })("inputFieldChanged", function AddStudentComponent_div_2_Template_input_inputFieldChanged_111_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.checkValue($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(113, "div", 38)(114, "button", 39);
    i0.ɵɵlistener("click", function AddStudentComponent_div_2_Template_button_click_114_listener() { i0.ɵɵrestoreView(_r2); const dp1_r4 = i0.ɵɵreference(112); return i0.ɵɵresetView(dp1_r4.toggleCalendar()); });
    i0.ɵɵelement(115, "i", 40);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(116, "small", 28);
    i0.ɵɵtext(117);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(118, AddStudentComponent_div_2_div_118_Template, 14, 3, "div", 57);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(119, "div", 14)(120, "div", 58)(121, "div", 18)(122, "label", 35);
    i0.ɵɵtext(123);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(124, "div", 59)(125, "input", 60, 2);
    i0.ɵɵlistener("change", function AddStudentComponent_div_2_Template_input_change_125_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.encodeImageFileAsURL($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(127, "small", 28);
    i0.ɵɵtext(128);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(129, AddStudentComponent_div_2_div_129_Template, 2, 1, "div", 61);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelement(130, "app-contact-info-group", 62)(131, "app-contact-info-group", 63);
    i0.ɵɵelementStart(132, "div", 64)(133, "div", 65)(134, "button", 66);
    i0.ɵɵlistener("click", function AddStudentComponent_div_2_Template_button_click_134_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.backAction()); });
    i0.ɵɵelement(135, "i", 67);
    i0.ɵɵtext(136);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(137, "div")(138, "button", 68);
    i0.ɵɵlistener("click", function AddStudentComponent_div_2_Template_button_click_138_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.addstudent()); });
    i0.ɵɵelement(139, "i", 69);
    i0.ɵɵtext(140);
    i0.ɵɵelementEnd()()()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formGroup", ctx_r0.studentform);
    i0.ɵɵadvance();
    i0.ɵɵproperty("title", ctx_r0.terminology.getSectionHeader("personalInfo"));
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getFieldLabel("first_name"), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("placeholder", ctx_r0.terminology.getPlaceholder("first_name"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.studentform.get("first_name").valid && (ctx_r0.studentform.get("first_name").dirty || ctx_r0.studentform.get("first_name").touched));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getFieldLabel("last_name"), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("placeholder", ctx_r0.terminology.getPlaceholder("last_name"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.studentform.get("last_name").valid && (ctx_r0.studentform.get("last_name").dirty || ctx_r0.studentform.get("last_name").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getFieldLabel("email_id"), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.type == "add" || ctx_r0.email);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.type != "add" && !ctx_r0.email);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.terminology.getHelpText("email_id"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.studentform.get("email_id").hasError("required") && (ctx_r0.studentform.get("email_id").dirty || ctx_r0.studentform.get("email_id").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.studentform.get("email_id").hasError("pattern"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getFieldLabel("gender"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.terminology.getGenderLabel("male"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.terminology.getGenderLabel("female"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.terminology.getGenderLabel("n/a"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getFieldLabel("dob"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("options", ctx_r0.myDpOptions);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r0.studentform.get("dob").invalid && (ctx_r0.studentform.get("dob").dirty || ctx_r0.studentform.get("dob").touched));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getFieldLabel("grade"), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r0.gradeData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.studentform.get("grade").valid && (ctx_r0.studentform.get("grade").dirty || ctx_r0.studentform.get("grade").touched));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getFieldLabel("studentId"), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("placeholder", ctx_r0.terminology.getPlaceholder("studentId"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.terminology.getHelpText("studentId"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getFieldLabel("mobile"), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("placeholder", ctx_r0.terminology.getPlaceholder("mobile"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.terminology.getHelpText("mobile"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getFieldLabel("mobile1"), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("placeholder", ctx_r0.terminology.getPlaceholder("mobile"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getFieldLabel("mobile2"), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("placeholder", ctx_r0.terminology.getPlaceholder("mobile"));
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getFieldLabel("status"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.terminology.getStatusLabel("1"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.terminology.getStatusLabel("2"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.type == "edit");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getFieldLabel("registration_date"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("options", ctx_r0.myDpOptions1);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.terminology.getHelpText("registration_date"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showDroppedDate);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getFieldLabel("profile_photo"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.terminology.getHelpText("profile_photo"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.imagepath.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r0.studentform)("contactNumber", 1)("countryList", ctx_r0.countryListData)("stateList", ctx_r0.stateListData)("onCountryChange", ctx_r0.stateList.bind(ctx_r0));
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r0.studentform)("contactNumber", 2)("countryList", ctx_r0.countryListData)("stateList", ctx_r0.stateListData1)("onCountryChange", ctx_r0.stateList1.bind(ctx_r0))("showAddress", false);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getButtonLabel("cancel"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("fa-save", ctx_r0.type == "add")("fa-check", ctx_r0.type == "edit");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.type == "add" ? ctx_r0.terminology.getButtonLabel("save") : ctx_r0.terminology.getButtonLabel("update"), " ");
} }
function AddStudentComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 81)(1, "div", 58)(2, "div", 82);
    i0.ɵɵelement(3, "i", 83);
    i0.ɵɵtext(4, " You do not have permission to manage students. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 84);
    i0.ɵɵlistener("click", function AddStudentComponent_div_3_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.backAction()); });
    i0.ɵɵelement(6, "i", 67);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getButtonLabel("back"), " ");
} }
export class AddStudentComponent {
    constructor(route, formBuilder, config, commondata, toastr, sanitizer, auth, student, common, newSubject, router, validationService, brandservices, datePipe, classroom, terminology) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.config = config;
        this.commondata = commondata;
        this.toastr = toastr;
        this.sanitizer = sanitizer;
        this.auth = auth;
        this.student = student;
        this.common = common;
        this.newSubject = newSubject;
        this.router = router;
        this.validationService = validationService;
        this.brandservices = brandservices;
        this.datePipe = datePipe;
        this.classroom = classroom;
        this.terminology = terminology;
        this.setDate = new Date().toLocaleString('en-US', { timeZone: timeZone.location });
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getMonth() + 1,
                day: new Date(this.setDate).getDate() - 1
            },
        };
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableSince: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getMonth() + 1,
                day: new Date(this.setDate).getDate() + 1
            },
        };
        this.manageStudent = true;
        this.studentform = this.formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            gender: '',
            dob: '',
            grade: ['', Validators.required],
            schoolId: '',
            studentId: '',
            email_id: ['', [Validators.required, Validators.pattern(this.auth.emailValidatorPattern)]],
            mobile: '',
            mobile1: '',
            mobile2: '',
            parent1FirstName: '',
            parent1LastName: '',
            email_id1_p1: ['', Validators.pattern(this.auth.emailValidatorPattern)],
            email_id2_p1: ['', Validators.pattern(this.auth.emailValidatorPattern)],
            address1: '',
            address2: '',
            city: '',
            batchname: '',
            state: '',
            country: '231',
            postalCode: '',
            status: ['1', Validators.required],
            parent2FirstName: '',
            parent2LastName: '',
            email_id1_p2: ['', Validators.pattern(this.auth.emailValidatorPattern)],
            email_id2_p2: ['', Validators.pattern(this.auth.emailValidatorPattern)],
            addressp21: '',
            addressp22: '',
            city1: '',
            state1: '',
            country1: '231',
            postalCode1: '',
            registration_date: '',
            dropped_date: ''
        });
        this.schoolId = JSON.parse(this.auth.getSessionData('rista_data1'));
        this.newSubject.schoolChange.subscribe(params => {
            if (params != '') {
                if (this.router.url.includes('create-student')) {
                    this.init();
                }
            }
            else {
                this.init();
            }
        });
        this.webhost = this.config.getimgUrl();
        this.imagepath = [];
        this.imagepaththumb = [];
        this.model = { isRange: false, singleDate: { jsDate: new Date() } };
        this.showDroppedDate = false;
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        if (this.auth.getRoleId() == '2') {
            this.showBatch = true;
            this.email = true;
        }
        else if (this.auth.getRoleId() == '4') {
            if (this.schoolId.individual_teacher == '1') {
                this.showBatch = false;
                this.email = true;
            }
            else if (this.schoolId.individual_teacher == '0') {
                this.showBatch = true;
                this.email = false;
            }
        }
        if (this.type == 'edit') {
            this.allowSelect = true;
            this.newSubject.allowSchoolChange(this.allowSelect);
            this.editData = JSON.parse(this.auth.getSessionData('editStudent'));
            this.studentform.controls.first_name.patchValue(this.editData.first_name);
            this.studentform.controls.last_name.patchValue(this.editData.last_name);
            if (this.editData.gender != null) {
                this.studentform.controls.gender.patchValue(this.editData.gender.toLowerCase().trim());
            }
            else {
                this.studentform.controls.gender.patchValue('');
            }
            this.studentform.controls.batchname.patchValue(this.editData.batch_id == '0' ? null : this.editData.batch_id);
            this.studentform.controls.grade.patchValue(this.editData.grade_id == '0' ? null : this.editData.grade_id);
            console.log(this.studentform.controls.status.value, 'hjfjhfhf');
            this.studentform.controls.schoolId.patchValue(this.editData.school_name);
            this.studentform.controls.studentId.patchValue(this.editData.school_idno);
            this.studentform.controls.email_id.patchValue(this.editData.email_id);
            this.studentform.controls.email_id1_p1.patchValue(this.editData.parent1_email_ids ? this.editData.parent1_email_ids[0] : '');
            this.studentform.controls.email_id2_p1.patchValue(this.editData.parent1_email_ids ? this.editData.parent1_email_ids[1] : '');
            this.studentform.controls.email_id1_p2.patchValue(this.editData.parent2_email_ids ? this.editData.parent2_email_ids[0] : '');
            this.studentform.controls.email_id2_p2.patchValue(this.editData.parent2_email_ids ? this.editData.parent2_email_ids[1] : '');
            this.studentform.controls.mobile.patchValue(this.editData.mobile ? this.editData.mobile[0] : '');
            this.studentform.controls.mobile1.patchValue(this.editData.mobile ? this.editData.mobile[1] : '');
            this.studentform.controls.mobile2.patchValue(this.editData.mobile ? this.editData.mobile[2] : '');
            this.studentform.controls.parent1FirstName.patchValue(this.editData.parent1_firstname);
            this.studentform.controls.parent1LastName.patchValue(this.editData.parent1_lastname);
            this.studentform.controls.parent2FirstName.patchValue(this.editData.parent2_firstname);
            this.studentform.controls.parent2LastName.patchValue(this.editData.parent2_lastname);
            if (this.editData.address && this.editData.address[0]) {
                this.stateList(this.editData.address[0].country_id);
                this.studentform.controls.address1.patchValue(this.editData.address[0].address1);
                this.studentform.controls.address2.patchValue(this.editData.address[0].address2);
                this.studentform.controls.city.patchValue(this.editData.address[0].city);
            }
            if (this.editData.birthday != '0000-00-00' && this.editData.birthday != null && this.editData.birthday != '') {
                const dob = this.editData.birthday.split('-');
                // tslint:disable-next-line:radix
                const dobObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(dob[0]), parseInt(dob[1]) - 1, parseInt(dob[2])) },
                    dateRange: null
                };
                this.studentform.controls.dob.patchValue(dobObject);
            }
            else {
                this.studentform.controls.dob.patchValue(null);
            }
            if (this.editData.registration_date != '0000-00-00' && this.editData.registration_date != null) {
                const registration = this.editData.registration_date.split('-');
                // tslint:disable-next-line:radix
                const dobObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(registration[0]), parseInt(registration[1]) - 1, parseInt(registration[2])) },
                    dateRange: null
                };
                this.studentform.controls.registration_date.patchValue(dobObject);
            }
            else {
                const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
                const dropped = dr1.split('-');
                // tslint:disable-next-line:radix
                const droppedObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
                    dateRange: null
                };
                this.studentform.controls.registration_date.patchValue(droppedObject);
            }
            if (this.editData.dropped_date != '0000-00-00' && this.editData.dropped_date != null) {
                const dropped = this.editData.dropped_date.split('-');
                // tslint:disable-next-line:radix
                const dobObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
                    dateRange: null
                };
                this.studentform.controls.dropped_date.patchValue(dobObject);
            }
            else {
                const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
                const dropped = dr1.split('-');
                const droppedObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
                    dateRange: null
                };
                this.studentform.controls.dropped_date.patchValue(droppedObject);
            }
            if (this.editData.address && this.editData.address[0]) {
                this.studentform.controls.state1.patchValue(this.editData.address[0].state_id != '0' ?
                    this.editData.address[0].state_id : null);
                this.studentform.controls.country.patchValue(this.editData.address[0].country_id == '0' ? '231' :
                    this.editData.address[0].state_id);
                this.studentform.controls.postalCode.patchValue(this.editData.address[0].postal_code);
            }
            if (this.editData.address && this.editData.address.length > 1) {
                this.stateList1(this.editData.address[1].country_id);
                this.studentform.controls.addressp21.patchValue(this.editData.address[1].address1);
                this.studentform.controls.addressp22.patchValue(this.editData.address[1].address2);
                this.studentform.controls.city1.patchValue(this.editData.address[1].city);
                this.studentform.controls.state1.patchValue(this.editData.address[1].state_id != '0' ?
                    this.editData.address[1].state_id : null);
                this.studentform.controls.country1.patchValue(this.editData.address[1].country_id == '0' ? '231' :
                    this.editData.address[1].state_id);
                this.studentform.controls.postalCode1.patchValue(this.editData.address[1].postal_code);
            }
            if (this.editData.status == 'Active') {
                this.studentform.controls.status.patchValue('1');
            }
            else if (this.editData.status == 'Suspended') {
                this.studentform.controls.status.patchValue('2');
                this.showDroppedDate = true;
            }
            else if (this.editData.status == 'Disengaged') {
                this.studentform.controls.status.patchValue('3');
                this.showDroppedDate = true;
            }
            else if (this.editData.status == 'Deleted') {
                this.studentform.controls.status.patchValue('4');
                this.showDroppedDate = true;
            }
            if (this.editData.profile_url != '') {
                this.imagepath.push(this.editData.profile_url);
            }
            this.imagepaththumb.push(this.editData.profile_thumb_url);
        }
        else {
            this.allowSelect = false;
            this.newSubject.allowSchoolChange(this.allowSelect);
            this.stateList('231');
            this.stateList1('231');
            this.studentform.controls.first_name.patchValue('');
            this.studentform.controls.last_name.patchValue('');
            this.studentform.controls.gender.patchValue('');
            this.studentform.controls.dob.patchValue(null);
            this.studentform.controls.registration_date.patchValue(null);
            this.studentform.controls.dropped_date.patchValue(null);
            this.studentform.controls.grade.patchValue(null);
            this.studentform.controls.schoolId.patchValue(this.auth.getRoleId() == '2' ? this.auth.getSessionData('school_name') : this.schoolId.name);
            this.studentform.controls.studentId.patchValue('');
            this.studentform.controls.email_id.patchValue('');
            this.studentform.controls.email_id1_p1.patchValue('');
            this.studentform.controls.email_id2_p1.patchValue('');
            this.studentform.controls.email_id1_p2.patchValue('');
            this.studentform.controls.email_id2_p2.patchValue('');
            this.studentform.controls.mobile.patchValue('');
            this.studentform.controls.mobile1.patchValue('');
            this.studentform.controls.mobile2.patchValue('');
            this.studentform.controls.batchname.patchValue(null);
            this.studentform.controls.parent1FirstName.patchValue('');
            this.studentform.controls.parent1LastName.patchValue('');
            this.studentform.controls.address1.patchValue('');
            this.studentform.controls.address2.patchValue('');
            this.studentform.controls.city.patchValue('');
            this.studentform.controls.state.patchValue(null);
            this.studentform.controls.dob.patchValue(null);
            this.studentform.controls.dropped_date.patchValue(null);
            this.studentform.controls.country.patchValue('231');
            this.studentform.controls.postalCode.patchValue('');
            this.studentform.controls.parent2FirstName.patchValue('');
            this.studentform.controls.parent2LastName.patchValue('');
            this.studentform.controls.addressp21.patchValue('');
            this.studentform.controls.addressp22.patchValue('');
            this.studentform.controls.city1.patchValue('');
            this.studentform.controls.state1.patchValue(null);
            this.studentform.controls.country1.patchValue('231');
            this.studentform.controls.postalCode1.patchValue('');
            this.studentform.controls.status.patchValue('1');
            const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
            const dropped = dr1.split('-');
            // tslint:disable-next-line:radix
            const droppedObject = {
                isRange: false,
                singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
                dateRange: null
            };
            this.studentform.controls.registration_date.patchValue(droppedObject);
            this.imagepath = [];
            this.imagepaththumb = [];
        }
    }
    ngOnInit() {
    }
    init() {
        this.manageStudent = this.auth.manageStudent;
        this.studentform.controls.grade.patchValue(null);
        this.countryList();
        this.gradeList();
        this.getBatchList();
    }
    backAction() {
        if (this.auth.getSessionData('navigation') == 'class') {
            this.router.navigate(['/class/list-class']);
        }
        else {
            this.router.navigate(['users/user-list']);
        }
    }
    statusChange() {
        const selectStudent = document.getElementById('selectStudent');
        const selectedStudentValue = selectStudent.options[selectStudent.selectedIndex].value;
        if (selectedStudentValue == 1) {
            this.showDroppedDate = false;
            this.studentform.controls.dropped_date.setValidators(null);
            this.studentform.controls.dropped_date.updateValueAndValidity();
        }
        else {
            this.showDroppedDate = true;
            this.studentform.controls.dropped_date.setValidators(Validators.required);
            const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
            const dropped = dr1.split('-');
            const droppedObject = {
                isRange: false,
                singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
                dateRange: null
            };
            this.studentform.controls.dropped_date.patchValue(droppedObject);
        }
    }
    addstudent() {
        const addresslist = [];
        addresslist.push({
            address1: this.studentform.controls.address1.value,
            address2: this.studentform.controls.address2.value,
            city: this.studentform.controls.city.value,
            state: this.studentform.controls.state.value,
            country: this.studentform.controls.country.value,
            postal_code: this.studentform.controls.postalCode.value,
            address_type: '2'
        }, {
            address1: this.studentform.controls.addressp21.value,
            address2: this.studentform.controls.addressp22.value,
            city: this.studentform.controls.city1.value,
            state: this.studentform.controls.state1.value,
            country: this.studentform.controls.country1.value,
            postal_code: this.studentform.controls.postalCode1.value,
            address_type: '3'
        });
        if (this.showBatch == true) {
            this.batchid = this.studentform.controls.batchname.value == null ? '' : this.studentform.controls.batchname.value;
        }
        else if (this.showBatch == false) {
            this.batchid = '';
        }
        if (this.studentform.valid) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                first_name: this.studentform.controls.first_name.value,
                last_name: this.studentform.controls.last_name.value,
                gender: this.studentform.controls.gender.value,
                birthday: this.studentform.controls.dob.value == null ? '' : this.datePipe.transform(this.studentform.controls.dob.value.singleDate.jsDate, 'yyyy-MM-dd'),
                school_id: this.auth.getSessionData('school_id'),
                school_idno: this.studentform.controls.studentId.value,
                grade_id: this.studentform.controls.grade.value,
                email_id: this.studentform.controls.email_id.value,
                mobile: [this.studentform.controls.mobile.value, this.studentform.controls.mobile1.value, this.studentform.controls.mobile2.value],
                batch_id: this.batchid == null ? '' : this.batchid,
                registration_date: this.studentform.controls.registration_date.value == null ? '' : this.datePipe.transform(this.studentform.controls.registration_date.value.singleDate.jsDate, 'yyyy-MM-dd'),
                dropped_date: this.studentform.controls.dropped_date.value == null ? '' : this.datePipe.transform(this.studentform.controls.dropped_date.value.singleDate.jsDate, 'yyyy-MM-dd'),
                address: addresslist,
                parent1_firstname: this.studentform.controls.parent1FirstName.value,
                parent1_lastname: this.studentform.controls.parent1LastName.value,
                parent2_firstname: this.studentform.controls.parent2FirstName.value,
                parent2_lastname: this.studentform.controls.parent2LastName.value,
                parent1_email_ids: [this.studentform.controls.email_id1_p1.value, this.studentform.controls.email_id2_p1.value],
                parent2_email_ids: [this.studentform.controls.email_id1_p2.value, this.studentform.controls.email_id2_p2.value],
                profile_url: this.imagepath.toString(),
                profile_thumb_url: this.imagepaththumb.toString(),
                status: this.studentform.controls.status.value
            };
            console.log(data, 'data');
            if (this.type != 'edit') {
                this.student.studentAdd(data).subscribe((successData) => {
                    this.addStudentSuccess(successData);
                }, (error) => {
                    this.addStudentFailure(error);
                });
            }
            else if (this.type == 'edit') {
                data['selected_user_id'] = this.editData.user_id;
                this.student.studentEdit(data).subscribe((successData) => {
                    this.addStudentSuccess(successData);
                }, (error) => {
                    this.addStudentFailure(error);
                });
            }
        }
        else {
            this.validationService.validateAllFormFields(this.studentform);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    addStudentSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject, 'Student');
            if (this.auth.getSessionData('navigation') == 'class') {
                this.router.navigate(['/class/list-class']);
            }
            else {
                this.router.navigate(['/users/user-list']);
            }
        }
        else {
            this.toastr.error(successData.ErrorObject, 'Student ');
        }
    }
    addStudentFailure(error) {
        console.log(error, 'error');
    }
    checkValue(eve) {
        if (this.type == 'add') {
            // this.studentform.controls.registration_date.setValidators([Validators.nullValidator]);
            // this.studentform.controls.registration_date.updateValueAndValidity();
        }
        else {
            this.studentform.controls.registration_date.clearValidators();
            this.studentform.controls.registration_date.setValidators(null);
            this.studentform.controls.registration_date.updateValueAndValidity();
        }
    }
    droppedDateCheckValue(eve) {
        if (this.type == 'add') {
        }
        else {
            if (eve.value == '') {
                this.studentform.controls.dropped_date.setValidators(Validators.required);
                this.studentform.controls.dropped_date.updateValueAndValidity();
            }
            else {
                this.studentform.controls.dropped_date.clearValidators();
                this.studentform.controls.dropped_date.setValidators(null);
                this.studentform.controls.dropped_date.updateValueAndValidity();
            }
        }
    }
    getBatchList() {
        this.commondata.showLoader(true);
        const data = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.classroom.batchList(data).subscribe((successData) => {
            this.batchListSuccess(successData);
        }, (error) => {
            this.batchListFailure(error);
        });
    }
    batchListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.batchlistData = successData.ResponseObject;
            this.batchlistData.forEach((value, index, array) => {
                this.batchlistData[index].status = this.batchlistData[index].status == 1 ? 'Active' : this.batchlistData[index].status == 2 ?
                    'Suspended' : this.batchlistData[index].status == 3 ? 'Disengaged' : this.batchlistData[index].status == 4 ? 'Deleted' : '';
            });
        }
    }
    batchListFailure(error) {
        this.commondata.showLoader(false);
        console.log(error, 'error');
    }
    stateList(event) {
        this.stateListData = '';
        this.studentform.controls.state.patchValue(null);
        const countryVal = event;
        console.log(this.studentform.controls.country.value, 'jhkj');
        const data = {
            platform: 'web',
            country_id: countryVal,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.student.stateList(data).subscribe((successData) => {
            this.stateListSuccess(successData);
        }, (error) => {
            this.stateListFailure(error);
        });
    }
    stateListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.stateListData = successData.ResponseObject;
        }
    }
    stateListFailure(error) {
        console.log(error, 'error');
    }
    stateList1(event) {
        this.stateListData1 = '';
        this.studentform.controls.state1.patchValue(null);
        console.log(event, 'event');
        const selectedCountry = event;
        const data = {
            platform: 'web',
            country_id: selectedCountry,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.student.stateList(data).subscribe((successData) => {
            this.stateList1Success(successData);
        }, (error) => {
            this.stateList1Failure(error);
        });
    }
    stateList1Success(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.stateListData1 = successData.ResponseObject;
        }
    }
    stateList1Failure(error) {
        console.log(error, 'error');
    }
    countryList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.student.countryList(data).subscribe((successData) => {
            this.countryListSuccess(successData);
        }, (error) => {
            this.countryListFailure(error);
        });
    }
    countryListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.countryListData = successData.ResponseObject;
        }
    }
    countryListFailure(error) {
        console.log(error, 'error');
    }
    gradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: 'active'
        };
        this.student.getgradeList(data).subscribe((successData) => {
            this.gradeListSuccess(successData);
        }, (error) => {
            this.gradeListFailure(error);
        });
    }
    gradeListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.gradeData = successData.ResponseObject;
        }
    }
    gradeListFailure(error) {
        console.log(error, 'error');
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
                console.log(getUrl, 'geturl');
                const pic = imgDetails.type.split('/');
                console.log(pic, 'Type');
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
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            image_path: [{
                    image: this.recordBase64Url,
                    size: imageList.size,
                    type: imageList.type,
                    name: imageList.name
                }],
            uploadtype: 'student'
        };
        this.common.fileUpload(data).subscribe((successData) => {
            this.uploadSuccess(successData);
            console.log(successData, 'successData');
        }, (error) => {
            this.uploadFailure(error);
            console.log(error, 'wrongFormat');
        });
    }
    uploadSuccess(successData) {
        // this.settings.loadingSpinner = false;
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.imagepath = [];
            this.imagepaththumb = [];
            this.imagepath.push(successData.ResponseObject.imagepath[0].original_image_url);
            this.imagepaththumb.push(successData.ResponseObject.imagepath[0].resized_url);
            // if (typing == 1) {
            // for (let i = 0; i < successData.ResponseObject.imagepath.length; i++) {
            //   this.imagepath.push(successData.ResponseObject.imagepath[i].original_image_url);
            //   this.imagepaththumb.push(successData.ResponseObject.imagepath[i].resized_url);
            //
            // }
        }
        else {
            this.toastr.error('Invalid File Format');
        }
    }
    uploadFailure(error) {
        // this.toastr.error('Invalid File Format');
        console.log(error, 'error');
    }
    deleteImg() {
        this.imagepath = [];
        this.clearUploadfilename();
    }
    clearUploadfilename() {
        console.log(this.myInputVariable.nativeElement.files);
        this.myInputVariable.nativeElement.value = '';
        console.log(this.myInputVariable.nativeElement.files);
    }
    static { this.ɵfac = function AddStudentComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddStudentComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i4.CommonDataService), i0.ɵɵdirectiveInject(i5.ToastrService), i0.ɵɵdirectiveInject(i6.DomSanitizer), i0.ɵɵdirectiveInject(i7.AuthService), i0.ɵɵdirectiveInject(i8.StudentService), i0.ɵɵdirectiveInject(i9.CommonService), i0.ɵɵdirectiveInject(i10.NewsubjectService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i11.ValidationService), i0.ɵɵdirectiveInject(i12.SchoolService), i0.ɵɵdirectiveInject(i13.DatePipe), i0.ɵɵdirectiveInject(i14.ClassroomService), i0.ɵɵdirectiveInject(i15.TerminologyService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddStudentComponent, selectors: [["app-add-template"]], viewQuery: function AddStudentComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInputVariable = _t.first);
        } }, decls: 4, vars: 3, consts: [["dp", "angular-mydatepicker"], ["dp1", "angular-mydatepicker"], ["myInput", ""], ["dp2", "angular-mydatepicker"], [1, "container-fluid"], ["class", "row mb-4", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "row mt-4", 4, "ngIf"], [1, "row", "mb-4"], [1, "col-12"], [1, "page-header"], [1, "page-title"], [1, "fa", "fa-user-graduate", "mr-2"], [1, "page-subtitle", "text-muted"], [1, "row"], ["novalidate", "", 1, "enterprise-form", 3, "formGroup"], ["subtitle", "Basic information about the student", 3, "title"], [1, "col-md-6"], [1, "form-group"], ["for", "first_name", 1, "form-label"], [1, "text-danger"], ["id", "first_name", "formControlName", "first_name", "type", "text", "required", "", 1, "form-control", 3, "placeholder"], ["class", "error", 4, "ngIf"], ["for", "last_name", 1, "form-label"], ["id", "last_name", "formControlName", "last_name", "type", "text", "required", "", 1, "form-control", 3, "placeholder"], ["for", "email_id", 1, "form-label"], ["id", "email_id", "formControlName", "email_id", "type", "email", "class", "form-control", "required", "", 3, "placeholder", 4, "ngIf"], ["readonly", "", "id", "email_id_readonly", "formControlName", "email_id", "type", "email", "class", "form-control", 3, "placeholder", 4, "ngIf"], [1, "form-text", "text-muted"], ["for", "gender", 1, "form-label"], ["id", "gender", "formControlName", "gender", 1, "form-control"], ["value", ""], ["value", "male"], ["value", "female"], ["value", "n/a"], [1, "form-label"], [1, "input-group"], ["placeholder", "mm/dd/yyyy", "name", "dp", "formControlName", "dob", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "keypress", "options"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "fa", "fa-calendar"], ["bindLabel", "grade_name", "bindValue", "grade_id", "formControlName", "grade", "placeholder", "Select Grade Level", 3, "items"], ["for", "studentId", 1, "form-label"], ["id", "studentId", "formControlName", "studentId", "type", "text", 1, "form-control", 3, "placeholder"], [1, "col-md-4"], ["for", "mobile", 1, "form-label"], ["id", "mobile", "formControlName", "mobile", "type", "tel", "maxlength", "15", "minlength", "10", 1, "form-control", 3, "keypress", "placeholder"], ["for", "mobile1", 1, "form-label"], ["id", "mobile1", "formControlName", "mobile1", "type", "tel", "maxlength", "15", "minlength", "10", 1, "form-control", 3, "keypress", "placeholder"], ["for", "mobile2", 1, "form-label"], ["id", "mobile2", "formControlName", "mobile2", "type", "tel", "maxlength", "15", "minlength", "10", 1, "form-control", 3, "keypress", "placeholder"], ["for", "status", 1, "form-label"], ["id", "status", "formControlName", "status", 1, "form-control", 3, "change"], ["value", "1"], ["value", "2"], ["value", "4", 4, "ngIf"], ["placeholder", "mm/dd/yyyy", "name", "dp1", "formControlName", "registration_date", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "keypress", "inputFieldChanged", "options"], ["class", "col-md-4", 4, "ngIf"], [1, "col-md-12"], [1, "file-upload-wrapper"], ["type", "file", "accept", ".png, .jpeg, .jpg", 1, "file-upload-input", 3, "change"], ["class", "mt-3", 4, "ngIf"], [3, "formGroup", "contactNumber", "countryList", "stateList", "onCountryChange"], [3, "formGroup", "contactNumber", "countryList", "stateList", "onCountryChange", "showAddress"], [1, "form-actions"], [1, "d-flex", "justify-content-between", "align-items-center"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-arrow-left", "mr-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa"], [1, "error"], ["id", "email_id", "formControlName", "email_id", "type", "email", "required", "", 1, "form-control", 3, "placeholder"], ["readonly", "", "id", "email_id_readonly", "formControlName", "email_id", "type", "email", 1, "form-control", 3, "placeholder"], ["value", "4"], ["placeholder", "mm/dd/yyyy", "name", "dp2", "formControlName", "dropped_date", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "inputFieldChanged", "options"], [1, "mt-3"], ["class", "image-preview-wrapper", 4, "ngFor", "ngForOf"], [1, "image-preview-wrapper"], ["alt", "Profile Photo", 1, "profile-preview-img", 3, "src"], ["type", "button", "title", "Remove photo", 1, "btn", "btn-sm", "btn-danger", "remove-image-btn", 3, "click"], [1, "fa", "fa-times"], [1, "row", "mt-4"], [1, "alert", "alert-warning"], [1, "fa", "fa-exclamation-triangle", "mr-2"], [1, "btn", "btn-outline-primary", 3, "click"]], template: function AddStudentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 4);
            i0.ɵɵtemplate(1, AddStudentComponent_div_1_Template, 8, 4, "div", 5)(2, AddStudentComponent_div_2_Template, 141, 62, "div", 6)(3, AddStudentComponent_div_3_Template, 8, 1, "div", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.manageStudent || ctx.type == "edit");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.manageStudent || ctx.type == "edit");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.manageStudent && ctx.type != "edit");
        } }, dependencies: [i13.NgForOf, i13.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.FormGroupDirective, i2.FormControlName, i16.NgSelectComponent, i17.AngularMyDatePickerDirective, i18.FormSectionComponent, i19.ContactInfoGroupComponent], styles: ["\n\n\n\n\n\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-4);\n  \n  .page-title {\n    font-size: 1.75rem;\n    font-weight: 600;\n    color: var(--neutral-900);\n    margin-bottom: var(--spacing-2);\n    display: flex;\n    align-items: center;\n    \n    i {\n      color: var(--color-primary);\n    }\n  }\n  \n  .page-subtitle {\n    font-size: 1rem;\n    color: var(--neutral-600);\n    margin: 0;\n  }\n}\n\n\n\n.enterprise-form[_ngcontent-%COMP%] {\n  .form-group {\n    margin-bottom: var(--spacing-4);\n  }\n  \n  .form-label {\n    font-size: 0.875rem;\n    font-weight: 500;\n    color: var(--neutral-700);\n    margin-bottom: var(--spacing-2);\n    display: block;\n    \n    .text-danger {\n      color: var(--color-error);\n      margin-right: var(--spacing-1);\n    }\n  }\n  \n  .form-control {\n    height: 2.5rem;\n    padding: 0.5rem 0.75rem;\n    font-size: 0.9375rem;\n    border-radius: var(--radius-md);\n    border: 1px solid var(--neutral-400);\n    transition: border-color var(--transition-fast) ease-in-out,\n                box-shadow var(--transition-fast) ease-in-out;\n    \n    &:focus {\n      border-color: var(--color-primary);\n      box-shadow: var(--shadow-focus);\n      outline: 0;\n    }\n    \n    &:disabled,\n    &[readonly] {\n      background-color: var(--neutral-100);\n      opacity: 0.7;\n      cursor: not-allowed;\n    }\n  }\n  \n  select.form-control {\n    appearance: none;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-position: right 0.75rem center;\n    background-size: 12px;\n    padding-right: 2.5rem;\n  }\n}\n\n\n\n.input-group[_ngcontent-%COMP%] {\n  .form-control {\n    border-right: 0;\n  }\n  \n  .input-group-append {\n    .btn {\n      border: 1px solid var(--neutral-400);\n      border-left: 0;\n      background: white;\n      color: var(--color-primary);\n      \n      &:hover {\n        background: var(--neutral-50);\n        border-color: var(--color-primary);\n      }\n      \n      &:focus {\n        box-shadow: var(--shadow-focus);\n      }\n    }\n  }\n}\n\n\n\n  .ng-select {\n  .ng-select-container {\n    min-height: 2.5rem;\n    border-radius: var(--radius-md);\n    border: 1px solid var(--neutral-400);\n    \n    &:hover {\n      box-shadow: var(--shadow-sm);\n    }\n  }\n  \n  &.ng-select-focused .ng-select-container {\n    border-color: var(--color-primary);\n    box-shadow: var(--shadow-focus);\n  }\n  \n  .ng-placeholder {\n    color: var(--neutral-500);\n  }\n  \n  .ng-value {\n    background-color: var(--color-primary);\n    border-radius: var(--radius-sm);\n  }\n}\n\n\n\nem.error[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: var(--spacing-1);\n  font-size: 0.75rem;\n  color: var(--color-error);\n  font-style: normal;\n  \n  &::before {\n    content: \"\u26A0 \";\n    margin-right: var(--spacing-1);\n  }\n}\n\n\n\n.form-text[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: var(--spacing-1);\n  font-size: 0.75rem;\n  color: var(--neutral-600);\n  font-style: italic;\n}\n\n\n\n.file-upload-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.file-upload-input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: var(--spacing-3);\n  border: 2px dashed var(--neutral-400);\n  border-radius: var(--radius-lg);\n  background-color: var(--neutral-50);\n  cursor: pointer;\n  transition: all var(--transition-base) ease;\n  \n  &:hover {\n    border-color: var(--color-primary);\n    background-color: var(--color-primary-light);\n    background-color: rgba(29, 106, 165, 0.05);\n  }\n  \n  &::-webkit-file-upload-button {\n    padding: 0.5rem 1rem;\n    background-color: var(--color-primary);\n    color: white;\n    border: none;\n    border-radius: var(--radius-md);\n    cursor: pointer;\n    font-weight: 500;\n    margin-right: var(--spacing-3);\n    transition: background-color var(--transition-fast) ease;\n    \n    &:hover {\n      background-color: var(--color-primary-dark);\n    }\n  }\n}\n\n\n\n.image-preview-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin-right: var(--spacing-4);\n  \n  .profile-preview-img {\n    width: 150px;\n    height: 150px;\n    object-fit: cover;\n    border-radius: var(--radius-lg);\n    border: 2px solid var(--neutral-200);\n    box-shadow: var(--shadow-md);\n  }\n  \n  .remove-image-btn {\n    position: absolute;\n    top: -8px;\n    right: -8px;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: var(--shadow-md);\n    \n    &:hover {\n      transform: scale(1.1);\n    }\n  }\n}\n\n\n\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-8);\n  padding-top: var(--spacing-6);\n  border-top: 2px solid var(--neutral-200);\n  \n  .btn {\n    min-width: 120px;\n    \n    i {\n      margin-right: var(--spacing-2);\n    }\n    \n    &.btn-primary {\n      &:hover {\n        transform: translateY(-2px);\n        box-shadow: var(--shadow-lg);\n      }\n    }\n  }\n}\n\n\n\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    .page-title {\n      font-size: 1.5rem;\n    }\n  }\n  \n  .form-actions[_ngcontent-%COMP%] {\n    .d-flex {\n      flex-direction: column;\n      gap: var(--spacing-3);\n      \n      .btn {\n        width: 100%;\n      }\n    }\n  }\n  \n  .image-preview-wrapper[_ngcontent-%COMP%] {\n    .profile-preview-img {\n      width: 120px;\n      height: 120px;\n    }\n  }\n}\n\n\n\n.alert[_ngcontent-%COMP%] {\n  padding: var(--spacing-4);\n  border-radius: var(--radius-lg);\n  border-left: 4px solid;\n  \n  &.alert-warning {\n    background-color: rgba(255, 193, 7, 0.1);\n    border-left-color: var(--color-warning);\n    color: var(--neutral-900);\n  }\n  \n  i {\n    color: var(--color-warning);\n  }\n}\n\n\n\n.subsection-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--neutral-800);\n  padding-bottom: var(--spacing-2);\n  border-bottom: 1px solid var(--neutral-200);\n  margin-bottom: var(--spacing-3);\n}\n\n\n\napp-form-section[_ngcontent-%COMP%], \napp-contact-info-group[_ngcontent-%COMP%] {\n  display: block;\n  animation: _ngcontent-%COMP%_fadeInUp 0.3s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n\n.form-loading[_ngcontent-%COMP%] {\n  position: relative;\n  pointer-events: none;\n  opacity: 0.6;\n  \n  &::after {\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 40px;\n    height: 40px;\n    border: 3px solid var(--neutral-300);\n    border-top-color: var(--color-primary);\n    border-radius: 50%;\n    animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n\n\n\n*[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 2px;\n  border-radius: var(--radius-sm);\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddStudentComponent, [{
        type: Component,
        args: [{ selector: 'app-add-template', template: "<div class=\"container-fluid\">\n    <!-- Page Header -->\n    <div class=\"row mb-4\" *ngIf=\"manageStudent || type == 'edit'\">\n        <div class=\"col-12\">\n            <div class=\"page-header\">\n                <h2 class=\"page-title\">\n                    <i class=\"fa fa-user-graduate mr-2\"></i>\n                    {{ type === 'add' ? 'Add New' : 'Edit' }} {{ terminology.get('student.singular') }}\n                </h2>\n                <p class=\"page-subtitle text-muted\">\n                    {{ terminology.getSectionHeader('personalInfo') }} and {{ terminology.getSectionHeader('contactInfo') }}\n                </p>\n            </div>\n        </div>\n    </div>\n\n    <!-- Main Form -->\n    <div class=\"row\" *ngIf=\"manageStudent || type == 'edit'\">\n        <div class=\"col-12\">\n            <form [formGroup]=\"studentform\" class=\"enterprise-form\" novalidate>\n                \n                <!-- Personal Information Section -->\n                <app-form-section \n                    [title]=\"terminology.getSectionHeader('personalInfo')\"\n                    subtitle=\"Basic information about the student\">\n                    \n                    <!-- Name Row -->\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"first_name\" class=\"form-label\">\n                                    <span class=\"text-danger\">*</span>\n                                    {{ terminology.getFieldLabel('first_name') }}\n                                </label>\n                                <input \n                                    id=\"first_name\"\n                                    formControlName=\"first_name\"\n                                    type=\"text\"\n                                    class=\"form-control\"\n                                    [placeholder]=\"terminology.getPlaceholder('first_name')\"\n                                    required\n                                />\n                                <em class=\"error\" *ngIf=\"!studentform.get('first_name').valid && (studentform.get('first_name').dirty || studentform.get('first_name').touched)\">\n                                    {{ terminology.getValidationMessage('required', {field: terminology.getFieldLabel('first_name')}) }}\n                                </em>\n                            </div>\n                        </div>\n                        \n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"last_name\" class=\"form-label\">\n                                    <span class=\"text-danger\">*</span>\n                                    {{ terminology.getFieldLabel('last_name') }}\n                                </label>\n                                <input \n                                    id=\"last_name\"\n                                    formControlName=\"last_name\"\n                                    type=\"text\"\n                                    class=\"form-control\"\n                                    [placeholder]=\"terminology.getPlaceholder('last_name')\"\n                                    required\n                                />\n                                <em class=\"error\" *ngIf=\"!studentform.get('last_name').valid && (studentform.get('last_name').dirty || studentform.get('last_name').touched)\">\n                                    {{ terminology.getValidationMessage('required', {field: terminology.getFieldLabel('last_name')}) }}\n                                </em>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- Email & Gender Row -->\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"email_id\" class=\"form-label\">\n                                    <span class=\"text-danger\">*</span>\n                                    {{ terminology.getFieldLabel('email_id') }}\n                                </label>\n                                <input \n                                    *ngIf=\"type == 'add' || email\"\n                                    id=\"email_id\"\n                                    formControlName=\"email_id\"\n                                    type=\"email\"\n                                    class=\"form-control\"\n                                    [placeholder]=\"terminology.getPlaceholder('email_id')\"\n                                    required\n                                />\n                                <input \n                                    *ngIf=\"type != 'add' && !email\"\n                                    readonly\n                                    id=\"email_id_readonly\"\n                                    formControlName=\"email_id\"\n                                    type=\"email\"\n                                    class=\"form-control\"\n                                    [placeholder]=\"terminology.getPlaceholder('email_id')\"\n                                />\n                                <small class=\"form-text text-muted\">{{ terminology.getHelpText('email_id') }}</small>\n                                <em class=\"error\" *ngIf=\"studentform.get('email_id').hasError('required') && (studentform.get('email_id').dirty || studentform.get('email_id').touched)\">\n                                    {{ terminology.getValidationMessage('required', {field: terminology.getFieldLabel('email_id')}) }}\n                                </em>\n                                <em class=\"error\" *ngIf=\"studentform.get('email_id').hasError('pattern')\">\n                                    {{ terminology.getValidationMessage('email') }}\n                                </em>\n                            </div>\n                        </div>\n                        \n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"gender\" class=\"form-label\">\n                                    {{ terminology.getFieldLabel('gender') }}\n                                </label>\n                                <select id=\"gender\" formControlName=\"gender\" class=\"form-control\">\n                                    <option value=\"\">Select Gender</option>\n                                    <option value=\"male\">{{ terminology.getGenderLabel('male') }}</option>\n                                    <option value=\"female\">{{ terminology.getGenderLabel('female') }}</option>\n                                    <option value=\"n/a\">{{ terminology.getGenderLabel('n/a') }}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- DOB & Grade Row -->\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">\n                                    {{ terminology.getFieldLabel('dob') }}\n                                </label>\n                                <div class=\"input-group\">\n                                    <input \n                                        class=\"form-control\" \n                                        placeholder=\"mm/dd/yyyy\"\n                                        name=\"dp\"  \n                                        formControlName=\"dob\" \n                                        angular-mydatepicker \n                                        #dp=\"angular-mydatepicker\" \n                                        (keypress)=\"datePattern($event)\"\n                                        [options]=\"myDpOptions\" \n                                        autocomplete=\"off\"\n                                    />\n                                    <div class=\"input-group-append\">\n                                        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"dp.toggleCalendar()\">\n                                            <i class=\"fa fa-calendar\"></i>\n                                        </button>\n                                    </div>\n                                </div>\n                                <em class=\"error\" *ngIf=\"studentform.get('dob').invalid && (studentform.get('dob').dirty || studentform.get('dob').touched)\">\n                                    Date of birth is invalid\n                                </em>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">\n                                    <span class=\"text-danger\">*</span>\n                                    {{ terminology.getFieldLabel('grade') }}\n                                </label>\n                                <ng-select \n                                    [items]=\"gradeData\"\n                                           bindLabel=\"grade_name\"\n                                           bindValue=\"grade_id\"\n                                           formControlName=\"grade\"\n                                    placeholder=\"Select Grade Level\"\n                                >\n                                </ng-select>\n                                <em class=\"error\" *ngIf=\"!studentform.get('grade').valid && (studentform.get('grade').dirty || studentform.get('grade').touched)\">\n                                    {{ terminology.getValidationMessage('required', {field: terminology.getFieldLabel('grade')}) }}\n                                </em>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- Student ID Row -->\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"studentId\" class=\"form-label\">\n                                    {{ terminology.getFieldLabel('studentId') }}\n                                </label>\n                                <input \n                                    id=\"studentId\"\n                                    formControlName=\"studentId\"\n                                    type=\"text\"\n                                    class=\"form-control\"\n                                    [placeholder]=\"terminology.getPlaceholder('studentId')\"\n                                />\n                                <small class=\"form-text text-muted\">{{ terminology.getHelpText('studentId') }}</small>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- Contact Numbers Row -->\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <div class=\"form-group\">\n                                <label for=\"mobile\" class=\"form-label\">\n                                    {{ terminology.getFieldLabel('mobile') }}\n                                </label>\n                                <input \n                                    id=\"mobile\"\n                                    formControlName=\"mobile\"\n                                    type=\"tel\"\n                                    class=\"form-control\"\n                                    [placeholder]=\"terminology.getPlaceholder('mobile')\"\n                                    (keypress)=\"numberPattern($event)\" \n                                    maxlength=\"15\" \n                                    minlength=\"10\"\n                                />\n                                <small class=\"form-text text-muted\">{{ terminology.getHelpText('mobile') }}</small>\n                            </div>\n                        </div>\n                        \n                        <div class=\"col-md-4\">\n                            <div class=\"form-group\">\n                                <label for=\"mobile1\" class=\"form-label\">\n                                    {{ terminology.getFieldLabel('mobile1') }}\n                                </label>\n                                <input \n                                    id=\"mobile1\"\n                                    formControlName=\"mobile1\"\n                                    type=\"tel\"\n                                    class=\"form-control\"\n                                    [placeholder]=\"terminology.getPlaceholder('mobile')\"\n                                    (keypress)=\"numberPattern($event)\" \n                                    maxlength=\"15\" \n                                    minlength=\"10\"\n                                />\n                            </div>\n                        </div>\n                        \n                        <div class=\"col-md-4\">\n                            <div class=\"form-group\">\n                                <label for=\"mobile2\" class=\"form-label\">\n                                    {{ terminology.getFieldLabel('mobile2') }}\n                                </label>\n                                <input \n                                    id=\"mobile2\"\n                                    formControlName=\"mobile2\"\n                                    type=\"tel\"\n                                    class=\"form-control\"\n                                    [placeholder]=\"terminology.getPlaceholder('mobile')\"\n                                    (keypress)=\"numberPattern($event)\" \n                                    maxlength=\"15\" \n                                    minlength=\"10\"\n                                />\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- Status & Dates Row -->\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <div class=\"form-group\">\n                                <label for=\"status\" class=\"form-label\">\n                                    <span class=\"text-danger\">*</span>\n                                    {{ terminology.getFieldLabel('status') }}\n                                </label>\n                                <select id=\"status\" formControlName=\"status\" class=\"form-control\" (change)=\"statusChange()\">\n                                    <option value=\"1\">{{ terminology.getStatusLabel('1') }}</option>\n                                    <option value=\"2\">{{ terminology.getStatusLabel('2') }}</option>\n                                    <option *ngIf=\"type =='edit'\" value=\"4\">{{ terminology.getStatusLabel('4') }}</option>\n                                </select>\n                            </div>\n                        </div>\n                        \n                        <div class=\"col-md-4\">\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">\n                                    {{ terminology.getFieldLabel('registration_date') }}\n                                </label>\n                                <div class=\"input-group\">\n                                    <input \n                                        class=\"form-control\" \n                                        placeholder=\"mm/dd/yyyy\"\n                                        name=\"dp1\"  \n                                        formControlName=\"registration_date\" \n                                        angular-mydatepicker \n                                        #dp1=\"angular-mydatepicker\" \n                                        (keypress)=\"datePattern($event)\"\n                                        [options]=\"myDpOptions1\" \n                                        (inputFieldChanged)=\"checkValue($event)\" \n                                        autocomplete=\"off\"\n                                    />\n                                    <div class=\"input-group-append\">\n                                        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"dp1.toggleCalendar()\">\n                                            <i class=\"fa fa-calendar\"></i>\n                                        </button>\n                                    </div>\n                                </div>\n                                <small class=\"form-text text-muted\">{{ terminology.getHelpText('registration_date') }}</small>\n                            </div>\n                        </div>\n                        \n                        <div class=\"col-md-4\" *ngIf=\"showDroppedDate\">\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">\n                                    <span class=\"text-danger\">*</span>\n                                    {{ terminology.getFieldLabel('dropped_date') }}\n                                </label>\n                                <div class=\"input-group\">\n                                    <input \n                                        class=\"form-control\" \n                                        placeholder=\"mm/dd/yyyy\"\n                                        name=\"dp2\"  \n                                        formControlName=\"dropped_date\" \n                                        angular-mydatepicker \n                                        #dp2=\"angular-mydatepicker\"\n                                        [options]=\"myDpOptions1\" \n                                        (inputFieldChanged)=\"droppedDateCheckValue($event)\" \n                                        autocomplete=\"off\"\n                                    />\n                                    <div class=\"input-group-append\">\n                                        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"dp2.toggleCalendar()\">\n                                            <i class=\"fa fa-calendar\"></i>\n                                        </button>\n                                    </div>\n                                </div>\n                                <small class=\"form-text text-muted\">{{ terminology.getHelpText('dropped_date') }}</small>\n                            </div>\n                        </div>\n                            </div>\n\n                    <!-- Profile Photo -->\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">\n                                    {{ terminology.getFieldLabel('profile_photo') }}\n                                </label>\n                                <div class=\"file-upload-wrapper\">\n                                    <input \n                                        #myInput \n                                        type=\"file\" \n                                        class=\"file-upload-input\" \n                                        (change)=\"encodeImageFileAsURL($event)\" \n                                        accept=\".png, .jpeg, .jpg\"\n                                    />\n                                    <small class=\"form-text text-muted\">{{ terminology.getHelpText('profile_photo') }}</small>\n                                </div>\n\n                                <div *ngIf=\"imagepath.length > 0\" class=\"mt-3\">\n                                    <div class=\"image-preview-wrapper\" *ngFor=\"let file of imagepath; let i = index\">\n                                        <img [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + file)\" alt=\"Profile Photo\" class=\"profile-preview-img\" />\n                                        <button \n                                            type=\"button\"\n                                            class=\"btn btn-sm btn-danger remove-image-btn\" \n                                            (click)=\"deleteImg()\"\n                                            title=\"Remove photo\">\n                                            <i class=\"fa fa-times\"></i>\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                                    </div>\n                                </div>\n                </app-form-section>\n\n                <!-- Primary Contact Section -->\n                <app-contact-info-group\n                    [formGroup]=\"studentform\"\n                    [contactNumber]=\"1\"\n                    [countryList]=\"countryListData\"\n                    [stateList]=\"stateListData\"\n                    [onCountryChange]=\"stateList.bind(this)\">\n                </app-contact-info-group>\n\n                <!-- Secondary Contact Section -->\n                <app-contact-info-group\n                    [formGroup]=\"studentform\"\n                    [contactNumber]=\"2\"\n                    [countryList]=\"countryListData\"\n                    [stateList]=\"stateListData1\"\n                    [onCountryChange]=\"stateList1.bind(this)\"\n                    [showAddress]=\"false\">\n                </app-contact-info-group>\n\n                <!-- Form Actions -->\n                <div class=\"form-actions\">\n                    <div class=\"d-flex justify-content-between align-items-center\">\n                        <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"backAction()\">\n                            <i class=\"fa fa-arrow-left mr-2\"></i>\n                            {{ terminology.getButtonLabel('cancel') }}\n                        </button>\n                        \n                        <div>\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"addstudent()\">\n                                <i class=\"fa\" [class.fa-save]=\"type == 'add'\" [class.fa-check]=\"type == 'edit'\"></i>\n                                {{ type == 'add' ? terminology.getButtonLabel('save') : terminology.getButtonLabel('update') }}\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <!-- Permission Denied Message -->\n    <div class=\"row mt-4\" *ngIf=\"!manageStudent && type != 'edit'\">\n        <div class=\"col-md-12\">\n            <div class=\"alert alert-warning\">\n                <i class=\"fa fa-exclamation-triangle mr-2\"></i>\n                You do not have permission to manage students.\n            </div>\n            <button class=\"btn btn-outline-primary\" (click)=\"backAction()\">\n                <i class=\"fa fa-arrow-left mr-2\"></i> \n                {{ terminology.getButtonLabel('back') }}\n            </button>\n        </div>\n    </div>\n</div>\n", styles: ["/* ========================================\n   ENTERPRISE STUDENT FORM STYLING\n   ======================================== */\n\n/* Page Header - Optimized spacing */\n.page-header {\n  margin-bottom: var(--spacing-4);\n  \n  .page-title {\n    font-size: 1.75rem;\n    font-weight: 600;\n    color: var(--neutral-900);\n    margin-bottom: var(--spacing-2);\n    display: flex;\n    align-items: center;\n    \n    i {\n      color: var(--color-primary);\n    }\n  }\n  \n  .page-subtitle {\n    font-size: 1rem;\n    color: var(--neutral-600);\n    margin: 0;\n  }\n}\n\n/* Enterprise Form */\n.enterprise-form {\n  .form-group {\n    margin-bottom: var(--spacing-4);\n  }\n  \n  .form-label {\n    font-size: 0.875rem;\n    font-weight: 500;\n    color: var(--neutral-700);\n    margin-bottom: var(--spacing-2);\n    display: block;\n    \n    .text-danger {\n      color: var(--color-error);\n      margin-right: var(--spacing-1);\n    }\n  }\n  \n  .form-control {\n    height: 2.5rem;\n    padding: 0.5rem 0.75rem;\n    font-size: 0.9375rem;\n    border-radius: var(--radius-md);\n    border: 1px solid var(--neutral-400);\n    transition: border-color var(--transition-fast) ease-in-out,\n                box-shadow var(--transition-fast) ease-in-out;\n    \n    &:focus {\n      border-color: var(--color-primary);\n      box-shadow: var(--shadow-focus);\n      outline: 0;\n    }\n    \n    &:disabled,\n    &[readonly] {\n      background-color: var(--neutral-100);\n      opacity: 0.7;\n      cursor: not-allowed;\n    }\n  }\n  \n  select.form-control {\n    appearance: none;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-position: right 0.75rem center;\n    background-size: 12px;\n    padding-right: 2.5rem;\n  }\n}\n\n/* Input Groups (for date pickers) */\n.input-group {\n  .form-control {\n    border-right: 0;\n  }\n  \n  .input-group-append {\n    .btn {\n      border: 1px solid var(--neutral-400);\n      border-left: 0;\n      background: white;\n      color: var(--color-primary);\n      \n      &:hover {\n        background: var(--neutral-50);\n        border-color: var(--color-primary);\n      }\n      \n      &:focus {\n        box-shadow: var(--shadow-focus);\n      }\n    }\n  }\n}\n\n/* ng-select Styling */\n::ng-deep .ng-select {\n  .ng-select-container {\n    min-height: 2.5rem;\n    border-radius: var(--radius-md);\n    border: 1px solid var(--neutral-400);\n    \n    &:hover {\n      box-shadow: var(--shadow-sm);\n    }\n  }\n  \n  &.ng-select-focused .ng-select-container {\n    border-color: var(--color-primary);\n    box-shadow: var(--shadow-focus);\n  }\n  \n  .ng-placeholder {\n    color: var(--neutral-500);\n  }\n  \n  .ng-value {\n    background-color: var(--color-primary);\n    border-radius: var(--radius-sm);\n  }\n}\n\n/* Error Messages */\nem.error {\n  display: block;\n  margin-top: var(--spacing-1);\n  font-size: 0.75rem;\n  color: var(--color-error);\n  font-style: normal;\n  \n  &::before {\n    content: \"\u26A0 \";\n    margin-right: var(--spacing-1);\n  }\n}\n\n/* Help Text */\n.form-text {\n  display: block;\n  margin-top: var(--spacing-1);\n  font-size: 0.75rem;\n  color: var(--neutral-600);\n  font-style: italic;\n}\n\n/* File Upload Styling */\n.file-upload-wrapper {\n  position: relative;\n}\n\n.file-upload-input {\n  display: block;\n  width: 100%;\n  padding: var(--spacing-3);\n  border: 2px dashed var(--neutral-400);\n  border-radius: var(--radius-lg);\n  background-color: var(--neutral-50);\n  cursor: pointer;\n  transition: all var(--transition-base) ease;\n  \n  &:hover {\n    border-color: var(--color-primary);\n    background-color: var(--color-primary-light);\n    background-color: rgba(29, 106, 165, 0.05);\n  }\n  \n  &::-webkit-file-upload-button {\n    padding: 0.5rem 1rem;\n    background-color: var(--color-primary);\n    color: white;\n    border: none;\n    border-radius: var(--radius-md);\n    cursor: pointer;\n    font-weight: 500;\n    margin-right: var(--spacing-3);\n    transition: background-color var(--transition-fast) ease;\n    \n    &:hover {\n      background-color: var(--color-primary-dark);\n    }\n  }\n}\n\n/* Image Preview */\n.image-preview-wrapper {\n  position: relative;\n  display: inline-block;\n  margin-right: var(--spacing-4);\n  \n  .profile-preview-img {\n    width: 150px;\n    height: 150px;\n    object-fit: cover;\n    border-radius: var(--radius-lg);\n    border: 2px solid var(--neutral-200);\n    box-shadow: var(--shadow-md);\n  }\n  \n  .remove-image-btn {\n    position: absolute;\n    top: -8px;\n    right: -8px;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: var(--shadow-md);\n    \n    &:hover {\n      transform: scale(1.1);\n    }\n  }\n}\n\n/* Form Actions */\n.form-actions {\n  margin-top: var(--spacing-8);\n  padding-top: var(--spacing-6);\n  border-top: 2px solid var(--neutral-200);\n  \n  .btn {\n    min-width: 120px;\n    \n    i {\n      margin-right: var(--spacing-2);\n    }\n    \n    &.btn-primary {\n      &:hover {\n        transform: translateY(-2px);\n        box-shadow: var(--shadow-lg);\n      }\n    }\n  }\n}\n\n/* Responsive Adjustments */\n@media (max-width: 768px) {\n  .page-header {\n    .page-title {\n      font-size: 1.5rem;\n    }\n  }\n  \n  .form-actions {\n    .d-flex {\n      flex-direction: column;\n      gap: var(--spacing-3);\n      \n      .btn {\n        width: 100%;\n      }\n    }\n  }\n  \n  .image-preview-wrapper {\n    .profile-preview-img {\n      width: 120px;\n      height: 120px;\n    }\n  }\n}\n\n/* Alert Styling */\n.alert {\n  padding: var(--spacing-4);\n  border-radius: var(--radius-lg);\n  border-left: 4px solid;\n  \n  &.alert-warning {\n    background-color: rgba(255, 193, 7, 0.1);\n    border-left-color: var(--color-warning);\n    color: var(--neutral-900);\n  }\n  \n  i {\n    color: var(--color-warning);\n  }\n}\n\n/* Subsection Titles */\n.subsection-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--neutral-800);\n  padding-bottom: var(--spacing-2);\n  border-bottom: 1px solid var(--neutral-200);\n  margin-bottom: var(--spacing-3);\n}\n\n/* Animation for form sections */\napp-form-section,\napp-contact-info-group {\n  display: block;\n  animation: fadeInUp 0.3s ease-out;\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/* Loading State */\n.form-loading {\n  position: relative;\n  pointer-events: none;\n  opacity: 0.6;\n  \n  &::after {\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 40px;\n    height: 40px;\n    border: 3px solid var(--neutral-300);\n    border-top-color: var(--color-primary);\n    border-radius: 50%;\n    animation: spin 0.8s linear infinite;\n  }\n}\n\n@keyframes spin {\n  to {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n\n/* Focus Visible for Accessibility */\n*:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 2px;\n  border-radius: var(--radius-sm);\n}\n"] }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.FormBuilder }, { type: i3.ConfigurationService }, { type: i4.CommonDataService }, { type: i5.ToastrService }, { type: i6.DomSanitizer }, { type: i7.AuthService }, { type: i8.StudentService }, { type: i9.CommonService }, { type: i10.NewsubjectService }, { type: i1.Router }, { type: i11.ValidationService }, { type: i12.SchoolService }, { type: i13.DatePipe }, { type: i14.ClassroomService }, { type: i15.TerminologyService }], { myInputVariable: [{
            type: ViewChild,
            args: ['myInput']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddStudentComponent, { className: "AddStudentComponent" }); })();
//# sourceMappingURL=add-student.component.js.map