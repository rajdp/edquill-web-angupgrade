import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { urls } from '../../../../shared/utils/urls';
import { dateOptions } from '../../../../shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "../../../../shared/service/auth.service";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
import * as i5 from "ngx-toastr";
import * as i6 from "../../../../environment.service";
import * as i7 from "@angular/platform-browser";
import * as i8 from "../../../../shared/service/validation.service";
import * as i9 from "@ng-bootstrap/ng-bootstrap";
import * as i10 from "@ng-select/ng-select";
import * as i11 from "@nodro7/angular-mydatepicker";
import * as i12 from "../../../auth/tiny-mice/tiny-mice.component";
const _c0 = ["myInput"];
const _c1 = ["scheduleConfirmation"];
const _c2 = a0 => ({ "active": a0 });
function CourseDetailsAddComponent_div_25_em_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 53);
    i0.ɵɵtext(1, "Category is required");
    i0.ɵɵelementEnd();
} }
function CourseDetailsAddComponent_div_25_em_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 53);
    i0.ɵɵtext(1, "Subject is required");
    i0.ɵɵelementEnd();
} }
function CourseDetailsAddComponent_div_25_em_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 53);
    i0.ɵɵtext(1, "Short Description is required");
    i0.ɵɵelementEnd();
} }
function CourseDetailsAddComponent_div_25_em_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 53);
    i0.ɵɵtext(1, "Description is required");
    i0.ɵɵelementEnd();
} }
function CourseDetailsAddComponent_div_25_div_106_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 79)(1, "label", 58)(2, "span", 18);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, "Cover Image");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 80)(6, "i", 81);
    i0.ɵɵlistener("click", function CourseDetailsAddComponent_div_25_div_106_Template_i_click_6_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.deleteImg()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 82);
    i0.ɵɵelement(8, "img", 83);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("src", ctx_r2.sanitizer.bypassSecurityTrustResourceUrl(ctx_r2.webhost + "/" + ctx_r2.imagePath), i0.ɵɵsanitizeUrl);
} }
function CourseDetailsAddComponent_div_25_em_119_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 53);
    i0.ɵɵtext(1, "Start Date is required");
    i0.ɵɵelementEnd();
} }
function CourseDetailsAddComponent_div_25_em_130_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 53);
    i0.ɵɵtext(1, "End Date is required");
    i0.ɵɵelementEnd();
} }
function CourseDetailsAddComponent_div_25_em_138_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 53);
    i0.ɵɵtext(1, "Display Order Number is required");
    i0.ɵɵelementEnd();
} }
function CourseDetailsAddComponent_div_25_option_149_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 84);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", data_r7.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(data_r7.value);
} }
function CourseDetailsAddComponent_div_25_em_150_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 53);
    i0.ɵɵtext(1, "Status is required");
    i0.ɵɵelementEnd();
} }
function CourseDetailsAddComponent_div_25_div_174_em_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 53);
    i0.ɵɵtext(1, "Course Type is required");
    i0.ɵɵelementEnd();
} }
function CourseDetailsAddComponent_div_25_div_174_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 15)(2, "label", 27)(3, "span", 35);
    i0.ɵɵtext(4, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, "Registration Start Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 47)(7, "input", 85, 4);
    i0.ɵɵlistener("dateChanged", function CourseDetailsAddComponent_div_25_div_174_Template_input_dateChanged_7_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onDateChanged($event, "registartionEndDate")); })("click", function CourseDetailsAddComponent_div_25_div_174_Template_input_click_7_listener() { i0.ɵɵrestoreView(_r8); const dp3_r9 = i0.ɵɵreference(8); return i0.ɵɵresetView(dp3_r9.toggleCalendar()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 44)(10, "button", 45);
    i0.ɵɵlistener("click", function CourseDetailsAddComponent_div_25_div_174_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r8); const dp3_r9 = i0.ɵɵreference(8); return i0.ɵɵresetView(dp3_r9.toggleCalendar()); });
    i0.ɵɵelement(11, "i", 46);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "label", 27)(13, "span", 35);
    i0.ɵɵtext(14, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(15, "Registration End Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 47)(17, "input", 86, 5);
    i0.ɵɵlistener("click", function CourseDetailsAddComponent_div_25_div_174_Template_input_click_17_listener() { i0.ɵɵrestoreView(_r8); const dp4_r10 = i0.ɵɵreference(18); return i0.ɵɵresetView(dp4_r10.toggleCalendar()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 44)(20, "button", 87);
    i0.ɵɵlistener("click", function CourseDetailsAddComponent_div_25_div_174_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r8); const dp4_r10 = i0.ɵɵreference(18); return i0.ɵɵresetView(dp4_r10.toggleCalendar()); });
    i0.ɵɵelement(21, "i", 46);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(22, "div", 15)(23, "label", 27)(24, "span", 31);
    i0.ɵɵtext(25, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(26, "Course Start Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 47)(28, "input", 88, 6);
    i0.ɵɵlistener("click", function CourseDetailsAddComponent_div_25_div_174_Template_input_click_28_listener() { i0.ɵɵrestoreView(_r8); const dp5_r11 = i0.ɵɵreference(29); return i0.ɵɵresetView(dp5_r11.toggleCalendar()); })("dateChanged", function CourseDetailsAddComponent_div_25_div_174_Template_input_dateChanged_28_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onDateChanged($event, "courseEndDate")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "div", 44)(31, "button", 45);
    i0.ɵɵlistener("click", function CourseDetailsAddComponent_div_25_div_174_Template_button_click_31_listener() { i0.ɵɵrestoreView(_r8); const dp5_r11 = i0.ɵɵreference(29); return i0.ɵɵresetView(dp5_r11.toggleCalendar()); });
    i0.ɵɵelement(32, "i", 46);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(33, "label", 27)(34, "span", 31);
    i0.ɵɵtext(35, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(36, "Course End Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "div", 47)(38, "input", 89, 7);
    i0.ɵɵlistener("click", function CourseDetailsAddComponent_div_25_div_174_Template_input_click_38_listener() { i0.ɵɵrestoreView(_r8); const dp6_r12 = i0.ɵɵreference(39); return i0.ɵɵresetView(dp6_r12.toggleCalendar()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "div", 44)(41, "button", 87);
    i0.ɵɵlistener("click", function CourseDetailsAddComponent_div_25_div_174_Template_button_click_41_listener() { i0.ɵɵrestoreView(_r8); const dp6_r12 = i0.ɵɵreference(39); return i0.ɵɵresetView(dp6_r12.toggleCalendar()); });
    i0.ɵɵelement(42, "i", 46);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(43, "div", 15)(44, "label", 27)(45, "span", 54);
    i0.ɵɵtext(46, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(47, "Course Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "div", 90)(49, "div", 33)(50, "select", 91)(51, "option", 92);
    i0.ɵɵtext(52, "Select Course Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "option", 93);
    i0.ɵɵtext(54, "Online");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "option", 94);
    i0.ɵɵtext(56, "In-Person");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(57, CourseDetailsAddComponent_div_25_div_174_em_57_Template, 2, 0, "em", 29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "label", 95)(59, "span", 35);
    i0.ɵɵtext(60, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(61, "Slots Available");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "div", 90)(63, "input", 96);
    i0.ɵɵlistener("keypress", function CourseDetailsAddComponent_div_25_div_174_Template_input_keypress_63_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.numberValidation($event)); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("options", ctx_r2.myDpOptions2);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("options", ctx_r2.myDpOptions3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r2.validatorService.disableEndDateCondition("registartionStartDate", "registartionEndDate", ctx_r2.CourseDetails));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("options", ctx_r2.myDpOptions4);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("options", ctx_r2.myDpOptions5);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r2.validatorService.disableEndDateCondition("courseStartDate", "courseEndDate", ctx_r2.CourseDetails));
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("ngIf", !ctx_r2.CourseDetails.get("course_type").valid && (ctx_r2.CourseDetails.get("course_type").dirty || ctx_r2.CourseDetails.get("course_type").touched));
} }
function CourseDetailsAddComponent_div_25_div_197_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "label", 71)(2, "span", 35);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, "Fees");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 24);
    i0.ɵɵelement(6, "input", 97);
    i0.ɵɵelementEnd()();
} }
function CourseDetailsAddComponent_div_25_div_198_em_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 53);
    i0.ɵɵtext(1, "Amount is required");
    i0.ɵɵelementEnd();
} }
function CourseDetailsAddComponent_div_25_div_198_em_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 53);
    i0.ɵɵtext(1, "Discount Amount is required");
    i0.ɵɵelementEnd();
} }
function CourseDetailsAddComponent_div_25_div_198_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 15)(2, "label", 23)(3, "span", 54);
    i0.ɵɵtext(4, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, "Amount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 24)(7, "div", 98)(8, "div", 44)(9, "button", 99);
    i0.ɵɵtext(10, " $ ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "input", 100);
    i0.ɵɵlistener("input", function CourseDetailsAddComponent_div_25_div_198_Template_input_input_11_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.calculateAmount()); })("keypress", function CourseDetailsAddComponent_div_25_div_198_Template_input_keypress_11_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.numberValidation($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, CourseDetailsAddComponent_div_25_div_198_em_12_Template, 2, 0, "em", 29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 15)(14, "label", 23)(15, "span", 54);
    i0.ɵɵtext(16, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17, "Discount Amount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 24)(19, "div", 98)(20, "div", 44)(21, "button", 99);
    i0.ɵɵtext(22, " $ ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "input", 101);
    i0.ɵɵlistener("input", function CourseDetailsAddComponent_div_25_div_198_Template_input_input_23_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.calculateAmount()); })("keypress", function CourseDetailsAddComponent_div_25_div_198_Template_input_keypress_23_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.numberValidation($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(24, CourseDetailsAddComponent_div_25_div_198_em_24_Template, 2, 0, "em", 29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 15)(26, "label", 23)(27, "span", 54);
    i0.ɵɵtext(28, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(29, "Actual Amount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "div", 102)(31, "div", 44)(32, "button", 99);
    i0.ɵɵtext(33, " $ ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(34, "input", 103);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngIf", !ctx_r2.CourseDetails.get("fees").valid && (ctx_r2.CourseDetails.get("fees").dirty || ctx_r2.CourseDetails.get("fees").touched));
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngIf", !ctx_r2.CourseDetails.get("discount").valid && (ctx_r2.CourseDetails.get("discount").dirty || ctx_r2.CourseDetails.get("discount").touched));
} }
function CourseDetailsAddComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 15)(2, "label", 23)(3, "span", 18);
    i0.ɵɵtext(4, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, "Course Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 24);
    i0.ɵɵelement(7, "input", 25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 26)(9, "label", 27)(10, "span", 18);
    i0.ɵɵtext(11, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 24)(14, "ng-select", 28);
    i0.ɵɵlistener("change", function CourseDetailsAddComponent_div_25_Template_ng_select_change_14_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.categoryChanged($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, CourseDetailsAddComponent_div_25_em_15_Template, 2, 0, "em", 29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 26)(17, "label", 27)(18, "span", 18);
    i0.ɵɵtext(19, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(20, "Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 24);
    i0.ɵɵelement(22, "ng-select", 30);
    i0.ɵɵtemplate(23, CourseDetailsAddComponent_div_25_em_23_Template, 2, 0, "em", 29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 26)(25, "label", 27)(26, "span", 31);
    i0.ɵɵtext(27, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(28, "Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "div", 24);
    i0.ɵɵelement(30, "ng-select", 32);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div", 15)(32, "label", 27)(33, "span", 18);
    i0.ɵɵtext(34, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(35, "Short Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "div", 24)(37, "div", 33)(38, "app-tiny-mice", 34);
    i0.ɵɵlistener("emitEditorValue", function CourseDetailsAddComponent_div_25_Template_app_tiny_mice_emitEditorValue_38_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editorValue($event, "short_description")); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(39, CourseDetailsAddComponent_div_25_em_39_Template, 2, 0, "em", 29);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(40, "div", 15)(41, "label", 27)(42, "span", 35);
    i0.ɵɵtext(43, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(44, "Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "div", 24)(46, "div", 33)(47, "app-tiny-mice", 34);
    i0.ɵɵlistener("emitEditorValue", function CourseDetailsAddComponent_div_25_Template_app_tiny_mice_emitEditorValue_47_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editorValue($event, "description")); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(48, CourseDetailsAddComponent_div_25_em_48_Template, 2, 0, "em", 29);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(49, "div", 15)(50, "label", 27)(51, "span", 35);
    i0.ɵɵtext(52, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(53, "Overview content");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "div", 24)(55, "div", 33)(56, "app-tiny-mice", 34);
    i0.ɵɵlistener("emitEditorValue", function CourseDetailsAddComponent_div_25_Template_app_tiny_mice_emitEditorValue_56_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editorValue($event, "overview_content")); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(57, "div", 15)(58, "label", 27)(59, "span", 35);
    i0.ɵɵtext(60, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(61, "Course Content");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "div", 24)(63, "div", 33)(64, "app-tiny-mice", 34);
    i0.ɵɵlistener("emitEditorValue", function CourseDetailsAddComponent_div_25_Template_app_tiny_mice_emitEditorValue_64_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editorValue($event, "course_content")); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(65, "div", 15)(66, "label", 27)(67, "span", 35);
    i0.ɵɵtext(68, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(69, "Course Pre Requisites");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "div", 24)(71, "div", 33)(72, "app-tiny-mice", 34);
    i0.ɵɵlistener("emitEditorValue", function CourseDetailsAddComponent_div_25_Template_app_tiny_mice_emitEditorValue_72_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editorValue($event, "prerequisites")); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(73, "div", 15)(74, "label", 27)(75, "span", 35);
    i0.ɵɵtext(76, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(77, "Other Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(78, "div", 24)(79, "div", 33)(80, "app-tiny-mice", 34);
    i0.ɵɵlistener("emitEditorValue", function CourseDetailsAddComponent_div_25_Template_app_tiny_mice_emitEditorValue_80_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editorValue($event, "other_details")); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(81, "div", 15)(82, "label", 27)(83, "span", 35);
    i0.ɵɵtext(84, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(85, "Lesson");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(86, "div", 24)(87, "div", 33)(88, "app-tiny-mice", 34);
    i0.ɵɵlistener("emitEditorValue", function CourseDetailsAddComponent_div_25_Template_app_tiny_mice_emitEditorValue_88_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editorValue($event, "lessons")); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(89, "div", 15)(90, "label", 36)(91, "span", 35);
    i0.ɵɵtext(92, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(93, "Author");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(94, "div", 24);
    i0.ɵɵelement(95, "input", 37);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(96, "div", 15)(97, "label", 27)(98, "span", 18);
    i0.ɵɵtext(99, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(100, "Cover Image");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(101, "div", 24)(102, "input", 38, 1);
    i0.ɵɵlistener("change", function CourseDetailsAddComponent_div_25_Template_input_change_102_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.encodeImageFileAsURL($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(104, "span", 39);
    i0.ɵɵtext(105, "Recommended Size 1MB");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(106, CourseDetailsAddComponent_div_25_div_106_Template, 9, 1, "div", 40);
    i0.ɵɵelementStart(107, "div", 15)(108, "label", 27)(109, "span", 18);
    i0.ɵɵtext(110, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(111, "Validity Start Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(112, "div", 41)(113, "div", 42)(114, "input", 43, 2);
    i0.ɵɵlistener("dateChanged", function CourseDetailsAddComponent_div_25_Template_input_dateChanged_114_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onDateChanged($event, "endDate")); })("click", function CourseDetailsAddComponent_div_25_Template_input_click_114_listener() { i0.ɵɵrestoreView(_r2); const dp_r5 = i0.ɵɵreference(115); return i0.ɵɵresetView(dp_r5.toggleCalendar()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(116, "div", 44)(117, "button", 45);
    i0.ɵɵlistener("click", function CourseDetailsAddComponent_div_25_Template_button_click_117_listener() { i0.ɵɵrestoreView(_r2); const dp_r5 = i0.ɵɵreference(115); return i0.ɵɵresetView(dp_r5.toggleCalendar()); });
    i0.ɵɵelement(118, "i", 46);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(119, CourseDetailsAddComponent_div_25_em_119_Template, 2, 0, "em", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(120, "label", 27)(121, "span", 35);
    i0.ɵɵtext(122, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(123, "Validity End Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(124, "div", 47)(125, "input", 48, 3);
    i0.ɵɵlistener("click", function CourseDetailsAddComponent_div_25_Template_input_click_125_listener() { i0.ɵɵrestoreView(_r2); const dp1_r6 = i0.ɵɵreference(126); return i0.ɵɵresetView(dp1_r6.toggleCalendar()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(127, "div", 44)(128, "button", 45);
    i0.ɵɵlistener("click", function CourseDetailsAddComponent_div_25_Template_button_click_128_listener() { i0.ɵɵrestoreView(_r2); const dp1_r6 = i0.ɵɵreference(126); return i0.ɵɵresetView(dp1_r6.toggleCalendar()); });
    i0.ɵɵelement(129, "i", 46);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(130, CourseDetailsAddComponent_div_25_em_130_Template, 2, 0, "em", 29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(131, "div", 49)(132, "label", 50)(133, "span", 12);
    i0.ɵɵtext(134, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(135, " Display Order");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(136, "div", 51)(137, "input", 52);
    i0.ɵɵlistener("keypress", function CourseDetailsAddComponent_div_25_Template_input_keypress_137_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.numberValidate($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(138, CourseDetailsAddComponent_div_25_em_138_Template, 2, 0, "em", 29);
    i0.ɵɵelementStart(139, "em", 53);
    i0.ɵɵtext(140);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(141, "div", 15)(142, "label", 27)(143, "span", 54);
    i0.ɵɵtext(144, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(145, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(146, "div", 24)(147, "div", 33)(148, "select", 55);
    i0.ɵɵtemplate(149, CourseDetailsAddComponent_div_25_option_149_Template, 2, 2, "option", 56);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(150, CourseDetailsAddComponent_div_25_em_150_Template, 2, 0, "em", 29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(151, "div", 57)(152, "label", 58)(153, "span");
    i0.ɵɵtext(154, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(155, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(156, "div", 59)(157, "div", 60)(158, "div", 61);
    i0.ɵɵelement(159, "input", 62);
    i0.ɵɵelementStart(160, "label", 63);
    i0.ɵɵtext(161, "Certified Course");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(162, "div", 61);
    i0.ɵɵelement(163, "input", 64);
    i0.ɵɵelementStart(164, "label", 65);
    i0.ɵɵtext(165, "Popular");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(166, "div", 61);
    i0.ɵɵelement(167, "input", 66);
    i0.ɵɵelementStart(168, "label", 67);
    i0.ɵɵtext(169, "One-on-One");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(170, "div", 61);
    i0.ɵɵelement(171, "input", 68);
    i0.ɵɵelementStart(172, "label", 69);
    i0.ɵɵtext(173, "Webinar Event");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(174, CourseDetailsAddComponent_div_25_div_174_Template, 64, 7, "div", 21);
    i0.ɵɵelementStart(175, "div", 15)(176, "label", 27)(177, "span", 35);
    i0.ɵɵtext(178, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(179, "Purchase Contact Info");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(180, "div", 24);
    i0.ɵɵelement(181, "input", 70);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(182, "div", 15)(183, "label", 71)(184, "span", 54);
    i0.ɵɵtext(185, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(186, "Is Paid Course");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(187, "div", 72)(188, "div", 60)(189, "div", 73)(190, "input", 74);
    i0.ɵɵlistener("change", function CourseDetailsAddComponent_div_25_Template_input_change_190_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.checkbox("paid_fee_yes", "paid_fee_no")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(191, "label", 75);
    i0.ɵɵtext(192, "Yes");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(193, "div", 73)(194, "input", 76);
    i0.ɵɵlistener("change", function CourseDetailsAddComponent_div_25_Template_input_change_194_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.checkbox("paid_fee_no", "paid_fee_yes")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(195, "label", 77);
    i0.ɵɵtext(196, "No");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(197, CourseDetailsAddComponent_div_25_div_197_Template, 7, 0, "div", 78)(198, CourseDetailsAddComponent_div_25_div_198_Template, 35, 2, "div", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("items", ctx_r2.categoryListData)("multiple", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.CourseDetails.get("category_id").valid && (ctx_r2.CourseDetails.get("category_id").dirty || ctx_r2.CourseDetails.get("category_id").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("items", ctx_r2.subjectListData)("clearable", false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.CourseDetails.get("subject_id").valid && (ctx_r2.CourseDetails.get("subject_id").dirty || ctx_r2.CourseDetails.get("subject_id").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("items", ctx_r2.gradeListData)("multiple", true)("clearable", false);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("height", 300)("hideMatEditor", true)("editorPatchValue", ctx_r2.type == "add" ? false : ctx_r2.emittedEditorValue == null ? null : ctx_r2.emittedEditorValue.short_description);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.CourseDetails.get("short_description").valid && (ctx_r2.CourseDetails.get("short_description").dirty || ctx_r2.CourseDetails.get("short_description").touched));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("height", 300)("hideMatEditor", true)("editorPatchValue", ctx_r2.type == "add" ? false : ctx_r2.emittedEditorValue == null ? null : ctx_r2.emittedEditorValue.description);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.CourseDetails.get("description").valid && (ctx_r2.CourseDetails.get("description").dirty || ctx_r2.CourseDetails.get("description").touched));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("height", 300)("hideMatEditor", true)("editorPatchValue", ctx_r2.type == "add" ? false : ctx_r2.emittedEditorValue == null ? null : ctx_r2.emittedEditorValue.overview_content);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("height", 300)("hideMatEditor", true)("editorPatchValue", ctx_r2.type == "add" ? false : ctx_r2.emittedEditorValue == null ? null : ctx_r2.emittedEditorValue.course_content);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("height", 300)("hideMatEditor", true)("editorPatchValue", ctx_r2.type == "add" ? false : ctx_r2.emittedEditorValue == null ? null : ctx_r2.emittedEditorValue.prerequisites);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("height", 300)("hideMatEditor", true)("editorPatchValue", ctx_r2.type == "add" ? false : ctx_r2.emittedEditorValue == null ? null : ctx_r2.emittedEditorValue.other_details);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("height", 300)("hideMatEditor", true)("editorPatchValue", ctx_r2.type == "add" ? false : ctx_r2.emittedEditorValue == null ? null : ctx_r2.emittedEditorValue.lessons);
    i0.ɵɵadvance(18);
    i0.ɵɵproperty("ngIf", ctx_r2.imagePath != "");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("options", ctx_r2.myDpOptions);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", !ctx_r2.CourseDetails.get("startDate").valid && (ctx_r2.CourseDetails.get("startDate").dirty || ctx_r2.CourseDetails.get("startDate").touched));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("options", ctx_r2.myDpOptions1);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", !ctx_r2.CourseDetails.get("endDate").valid && (ctx_r2.CourseDetails.get("endDate").dirty || ctx_r2.CourseDetails.get("endDate").touched));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r2.CourseDetails.get("display_order").valid && (ctx_r2.CourseDetails.get("display_order").dirty || ctx_r2.CourseDetails.get("display_order").touched));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.showErrorMessage());
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r2.courseStatus);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.CourseDetails.get("status").valid && (ctx_r2.CourseDetails.get("status").dirty || ctx_r2.CourseDetails.get("status").touched));
    i0.ɵɵadvance(24);
    i0.ɵɵproperty("ngIf", ctx_r2.selectedToogleStatus == "No");
    i0.ɵɵadvance(23);
    i0.ɵɵproperty("ngIf", ctx_r2.CourseDetails.controls.paid_fee_yes.value && ctx_r2.selectedToogleStatus == "Yes");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.CourseDetails.controls.paid_fee_yes.value && ctx_r2.selectedToogleStatus == "No");
} }
function CourseDetailsAddComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 104)(1, "button", 105);
    i0.ɵɵlistener("click", function CourseDetailsAddComponent_div_26_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r14); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.addOrEditCourseDetails()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 106);
    i0.ɵɵtext(4, "Close");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r2.type == "add" ? "Add" : "Update", " Course");
} }
function CourseDetailsAddComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 107)(1, "h4", 108)(2, "b");
    i0.ɵɵtext(3, "Schedule Change");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 109)(5, "h5", 110);
    i0.ɵɵtext(6, " All classes associated with this course schedule will be removed. Would you like to proceed? ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 111)(8, "button", 112);
    i0.ɵɵlistener("click", function CourseDetailsAddComponent_ng_template_27_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r15); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵtext(9, "No");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 113);
    i0.ɵɵlistener("click", function CourseDetailsAddComponent_ng_template_27_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r15); const ctx_r2 = i0.ɵɵnextContext(); ctx_r2.close(); return i0.ɵɵresetView(ctx_r2.updateScheduleType(ctx_r2.selectedToogleStatus == "Yes" ? "No" : "Yes")); });
    i0.ɵɵtext(11, "Yes");
    i0.ɵɵelementEnd()();
} }
export class CourseDetailsAddComponent {
    constructor(auth, fb, datepipe, route, router, toastr, env, sanitizer, validatorService, modalService) {
        this.auth = auth;
        this.fb = fb;
        this.datepipe = datepipe;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.env = env;
        this.sanitizer = sanitizer;
        this.validatorService = validatorService;
        this.modalService = modalService;
        this.type = 'add';
        this.categoryListData = [];
        this.subjectListData = [];
        this.gradeListData = [];
        this.imagePath = '';
        this.courseStatus = [{ id: 'D', value: 'Draft' }, { id: 'P', value: 'Ready for review' }, {
                id: 'A',
                value: 'Approved'
            },
            { id: 'R', value: 'Rework' }, { id: 'C', value: 'Cancelled' }];
        this.myDpOptions = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat
        };
        this.selectedToogleStatus = '-';
        this.previewFromArrayValue = [];
        this.myDpOptions1 = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat
        };
        this.myDpOptions2 = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat
        };
        this.myDpOptions3 = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat
        };
        this.myDpOptions4 = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat
        };
        this.myDpOptions5 = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat
        };
        this.errorMessage = '';
        this.maximumCount = 100;
        this.fullSubjectList = [];
        this.emittedEditorValue = {
            short_description: '',
            description: '',
            overview_content: '',
            course_content: '',
            prerequisites: '',
            other_details: '',
            lessons: ''
        };
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.webhost = this.env.imgUrl;
        this.init();
        this.declareFormGroup();
    }
    ngOnInit() {
        setTimeout(() => {
            if (this.type == 'edit') {
                this.maximumCount = parseInt(this.auth.getSessionData('course_detail_maximumCount'));
                this.patchCourseDetails();
            }
            else {
                this.maximumCount = parseInt(this.auth.getSessionData('course_detail_maximumCount')) + 1;
                this.CourseDetails.controls.display_order.patchValue(this.maximumCount);
            }
        }, 200);
    }
    init() {
        this.getCategoryList();
        this.getGradeList();
        this.getSubjectList();
    }
    declareFormGroup() {
        this.CourseDetails = this.fb.group({
            course_id: '',
            course_name: ['', Validators.required],
            description: '',
            short_description: ['', Validators.required],
            category_id: [[], Validators.required],
            subject_id: [[], Validators.required],
            grade_id: [[]],
            lessons: '',
            overview_content: '',
            course_content: '',
            prerequisites: '',
            other_details: '',
            path: '',
            fees: '',
            author: '',
            contact_info: '',
            status: ['A', Validators.required],
            certified_course: false,
            multiple_schedule: true,
            is_popular: false,
            is_exclusive: false,
            is_webinar_event: false,
            // redirect_url: '',
            startDate: ['', Validators.required],
            endDate: '',
            registartionStartDate: [''],
            registartionEndDate: [''],
            courseStartDate: [''],
            courseEndDate: [''],
            course_type: [''],
            discount: '',
            actual_amount: '',
            slot_available: '',
            paid_fee_yes: [true, Validators.required],
            paid_fee_no: [false, Validators.required],
            // button_name: '',
            display_order: ['']
        });
    }
    numberValidate(event) {
        this.validatorService.numberOnlyValidate(event);
    }
    editorValue(event, forcontrolName) {
        this.CourseDetails.controls[forcontrolName].patchValue(event.content);
    }
    showErrorMessage() {
        const maximumAllowedNumber = this.maximumCount;
        const orderValue = parseInt(this.CourseDetails.controls.display_order.value);
        if (this.CourseDetails.controls.display_order.value == 0 && this.CourseDetails.controls.display_order.value != '') {
            this.errorMessage = 'Display Order number should not be zero';
        }
        else if (this.CourseDetails.controls.display_order.value != '') {
            this.errorMessage = orderValue > maximumAllowedNumber ?
                'Display order number should not be greater than' + ' ' + maximumAllowedNumber : '';
        }
        else if (this.CourseDetails.controls.display_order.value == '') {
            this.errorMessage = '';
        }
        return this.errorMessage;
    }
    checkbox(selectedFormControl, otherFormControl) {
        const paidSelection = this.CourseDetails.controls[selectedFormControl].value;
        this.CourseDetails.controls[otherFormControl].patchValue(!paidSelection);
        console.log(this.CourseDetails.controls[otherFormControl].value, 'other');
        console.log(this.CourseDetails.controls[selectedFormControl].value, 'selected');
        this.updateScheduleType(this.selectedToogleStatus, 'checkBox');
    }
    confirmScheduleChange(type) {
        if (this.type == 'edit' && (type == 'Yes' || type == 'No')) {
            this.modalRef = this.modalService.open(this.scheduleConfirmation);
        }
        else {
            this.updateScheduleType(type);
        }
    }
    close() {
        this.modalRef.close();
    }
    updateScheduleType(type, checkBoxType = '') {
        this.selectedToogleStatus = type;
        const formArrayValue = checkBoxType == '' ? ['course_type'] : [];
        const paidArrayValue = this.CourseDetails.controls.paid_fee_yes.value ?
            this.selectedToogleStatus == 'Yes' ? ['fees'] : ['fees', 'discount', 'actual_amount'] : [];
        console.log(paidArrayValue, 'padiArra');
        console.log(formArrayValue, 'formArray');
        const finalFormArrayValue = [...formArrayValue, ...paidArrayValue];
        console.log(finalFormArrayValue, 'finalArra');
        finalFormArrayValue.forEach((formcontrolName) => {
            if (this.selectedToogleStatus == 'No') {
                this.CourseDetails.controls[formcontrolName].setValidators([Validators.required]);
                this.CourseDetails.controls[formcontrolName].updateValueAndValidity();
            }
            else if (this.selectedToogleStatus == 'Yes') {
                this.CourseDetails.controls[formcontrolName].clearValidators();
                this.CourseDetails.controls[formcontrolName].updateValueAndValidity();
            }
        });
        if (this.selectedToogleStatus == 'No' && this.CourseDetails.controls.paid_fee_yes.value) {
            this.previewFromArrayValue = finalFormArrayValue;
        }
        else if (this.selectedToogleStatus == 'No' && !this.CourseDetails.controls.paid_fee_yes.value && this.previewFromArrayValue.length != 0) {
            this.previewFromArrayValue.forEach((formcontrolName) => {
                this.CourseDetails.controls[formcontrolName].clearValidators();
                this.CourseDetails.controls[formcontrolName].updateValueAndValidity();
            });
            this.previewFromArrayValue = [];
        }
    }
    onDateChanged(event, endDateFormcontrol) {
        const dateObject = this.validatorService.validateEndDate(event, endDateFormcontrol, this.CourseDetails);
        console.log(dateObject, 'dateObjecte');
        if (endDateFormcontrol == 'courseEndDate') {
            this.myDpOptions5 = {};
            this.myDpOptions5 = dateObject;
        }
        else if (endDateFormcontrol == 'registartionEndDate') {
            this.myDpOptions3 = {};
            this.myDpOptions3 = dateObject;
        }
        else {
            this.myDpOptions1 = {};
            this.myDpOptions1 = dateObject;
        }
    }
    numberValidation(event) {
        this.validatorService.numberValidate(event);
    }
    calculateAmount() {
        const amount = this.CourseDetails.controls.fees.value - this.CourseDetails.controls.discount.value;
        this.CourseDetails.controls.actual_amount.patchValue(amount);
    }
    categoryChanged(data) {
        console.log(data, 'category');
        this.updateSubjectList(data);
    }
    updateSubjectList(data, type = '') {
        let subject = [];
        this.categoryListData.forEach((category) => {
            data.forEach((items) => {
                if ((type != '' && category.category_id == items) || (type == '' && category.category_id == items.category_id)) {
                    subject = [...category.subject_id, ...subject];
                }
            });
        });
        subject = [...new Set(subject)];
        const fullSubjectList = JSON.parse(this.fullSubjectList);
        if (subject.length != 0) {
            this.subjectListData = [];
            fullSubjectList.forEach((subjectData) => {
                if (subject.includes(subjectData.subject_id)) {
                    this.subjectListData.push(subjectData);
                }
            });
        }
        else {
            this.subjectListData = fullSubjectList;
        }
        if (!this.subjectListData.some(code => code.subject_id == this.CourseDetails.controls.subject_id.value)) {
            this.CourseDetails.controls.subject_id.patchValue([]);
        }
    }
    getCategoryList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            type: 'active',
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(data, urls.categoryList).subscribe((successData) => {
            this.categoryListSuccess(successData);
        }, (error) => {
            console.error(error, ' error');
        });
    }
    categoryListSuccess(successData) {
        this.categoryListData = successData.IsSuccess ? successData.ResponseObject : [];
        console.log(this.maximumCount, 'maximumCount');
    }
    getSubjectList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(data, urls.subjectList).subscribe((successData) => {
            this.subjectListSuccess(successData);
        }, (error) => {
            console.error(error, ' error');
        });
    }
    subjectListSuccess(successData) {
        this.subjectListData = successData.IsSuccess ? successData.ResponseObject : [];
        this.fullSubjectList = successData.IsSuccess ? JSON.stringify(successData.ResponseObject) : JSON.stringify([]);
        if (this.type == 'edit') {
            this.courseEditDetails = JSON.parse(sessionStorage.getItem('getCourseDetails'));
            this.updateSubjectList(this.courseEditDetails.category_id, 'edit');
        }
    }
    getGradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            type: 'active',
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(data, urls.getGradeList).subscribe((successData) => {
            this.gradeListSuccess(successData);
        }, (error) => {
            console.error(error, ' error');
        });
    }
    gradeListSuccess(successData) {
        this.gradeListData = successData.IsSuccess ? successData.ResponseObject : [];
    }
    patchCourseDetails() {
        this.courseEditDetails = JSON.parse(sessionStorage.getItem('getCourseDetails'));
        console.log(this.courseEditDetails, 'editCourseDetails');
        this.CourseDetails.controls.course_id.patchValue(this.courseEditDetails.course_id);
        this.CourseDetails.controls.course_name.patchValue(this.courseEditDetails.course_name);
        this.emittedEditorValue = {
            short_description: this.courseEditDetails.short_description,
            description: this.courseEditDetails.description,
            overview_content: this.courseEditDetails.overview_content,
            course_content: this.courseEditDetails.course_content,
            prerequisites: this.courseEditDetails.prerequisites,
            other_details: this.courseEditDetails.other_details,
            lessons: this.courseEditDetails.lessons
        };
        this.CourseDetails.controls.description.patchValue(this.courseEditDetails.description);
        this.CourseDetails.controls.short_description.patchValue(this.courseEditDetails.short_description);
        this.CourseDetails.controls.subject_id.patchValue(this.courseEditDetails.subject_id.length != 0 ? this.courseEditDetails.subject_id[0] : []);
        this.CourseDetails.controls.contact_info.patchValue(this.courseEditDetails.contact_info ?? '');
        this.CourseDetails.controls.category_id.patchValue(this.courseEditDetails.category_id);
        this.CourseDetails.controls.grade_id.patchValue(this.courseEditDetails.grade_id.length != 0 ? this.courseEditDetails.grade_id : []);
        this.CourseDetails.controls.path.patchValue(this.courseEditDetails.path);
        this.CourseDetails.controls.fees.patchValue(this.courseEditDetails.fees);
        this.CourseDetails.controls.author.patchValue(this.courseEditDetails.author);
        this.CourseDetails.controls.status.patchValue(this.courseEditDetails.status);
        this.CourseDetails.controls.lessons.patchValue(this.courseEditDetails.lessons);
        this.CourseDetails.controls.overview_content.patchValue(this.courseEditDetails.overview_content);
        this.CourseDetails.controls.course_content.patchValue(this.courseEditDetails.course_content);
        this.CourseDetails.controls.prerequisites.patchValue(this.courseEditDetails.prerequisites);
        this.CourseDetails.controls.other_details.patchValue(this.courseEditDetails.other_details);
        this.CourseDetails.controls.overview_content.patchValue(this.courseEditDetails.overview_content);
        this.CourseDetails.controls.display_order.patchValue(this.courseEditDetails.display_order ?? '');
        this.imagePath = this.courseEditDetails.path;
        this.CourseDetails.controls.certified_course.patchValue(this.courseEditDetails.certified_course == 'Y');
        this.CourseDetails.controls.multiple_schedule.patchValue(this.courseEditDetails.multiple_schedule == 'Y');
        this.selectedToogleStatus = this.courseEditDetails.schedule == '1' ? 'Yes' : 'No';
        this.CourseDetails.controls.is_popular.patchValue(this.courseEditDetails.is_popular == 'Y');
        this.CourseDetails.controls.is_exclusive.patchValue(this.courseEditDetails.is_exclusive == 'Y');
        this.CourseDetails.controls.is_webinar_event.patchValue(this.courseEditDetails?.event == '1');
        // this.CourseDetails.controls.redirect_url.patchValue(this.courseEditDetails.redirect_url);
        // this.CourseDetails.controls.button_name.patchValue(this.courseEditDetails.button_name ?? '');
        this.CourseDetails.controls.paid_fee_yes.patchValue(this.courseEditDetails.fees != 0);
        this.CourseDetails.controls.course_type.patchValue(this.selectedToogleStatus == 'No' ? this.courseEditDetails.course_type : '');
        this.CourseDetails.controls.slot_available.patchValue(this.selectedToogleStatus == 'No' ? this.courseEditDetails.slot_available : '');
        this.CourseDetails.controls.discount.patchValue(this.selectedToogleStatus == 'No' ? this.courseEditDetails.discount_amount : 0);
        this.CourseDetails.controls.actual_amount.patchValue(this.selectedToogleStatus == 'No' ? this.courseEditDetails.cost : 0);
        if (this.selectedToogleStatus == 'No') {
            this.patchDate('registartionStartDate', this.courseEditDetails.registration_start_date ?? '', 'startDate', 'register');
            this.patchDate('registartionEndDate', this.courseEditDetails.registration_end_date ?? '', '', 'register');
            this.patchDate('courseStartDate', this.courseEditDetails.course_start_date ?? '', 'startDate', 'course');
            this.patchDate('courseEndDate', this.courseEditDetails.course_end_date ?? '', '', 'course');
        }
        if (this.courseEditDetails.validity_start_date != '0000-00-00' && this.courseEditDetails.validity_start_date
            && this.courseEditDetails.validity_start_date != '') {
            const rsd = this.courseEditDetails.validity_start_date.split('-');
            const rsdObject = {
                isRange: false,
                singleDate: { jsDate: new Date(parseInt(rsd[0]), parseInt(String(rsd[1] - 1)), parseInt(rsd[2])) },
                dateRange: null
            };
            this.CourseDetails.controls.startDate.patchValue(rsdObject);
            this.myDpOptions1 = {};
            this.myDpOptions1 = {
                dateRange: false,
                dateFormat: dateOptions.pickerFormat,
                firstDayOfWeek: 'su',
                disableUntil: {
                    year: parseInt(rsd[0]),
                    month: parseInt(rsd[1]),
                    day: parseInt(rsd[2]) - 1
                },
            };
            console.log(dateOptions.pickerFormat, 'picke');
        }
        else {
            this.CourseDetails.controls.startDate.patchValue('');
        }
        if (this.courseEditDetails.validity_end_date != '0000-00-00' && this.courseEditDetails.validity_end_date
            && this.courseEditDetails.validity_end_date != '') {
            const rsd = this.courseEditDetails.validity_end_date.split('-');
            const rsdObject = {
                isRange: false,
                singleDate: { jsDate: new Date(parseInt(rsd[0]), parseInt(String(rsd[1] - 1)), parseInt(rsd[2])) },
                dateRange: null
            };
            this.CourseDetails.controls.endDate.patchValue(rsdObject);
        }
        else {
            this.CourseDetails.controls.endDate.patchValue('');
        }
    }
    patchDate(formControlName, date, type, calledFor) {
        if (date != '0000-00-00' && date != '') {
            const splitedDate = date.split('-');
            const splitedDateObject = {
                isRange: false,
                // singleDate: {jsDate: new Date(parseInt(splitedDate[0]), parseInt(String(splitedDate[1] == 1 ? 1 : splitedDate[1] - 1)), parseInt(splitedDate[2]))},
                singleDate: { jsDate: new Date(parseInt(splitedDate[0]), parseInt(String(splitedDate[1] - 1)), parseInt(splitedDate[2])) },
                dateRange: null
            };
            this.CourseDetails.controls[formControlName].patchValue(splitedDateObject);
            if (type == 'startDate') {
                const dateOption = {
                    dateRange: false,
                    dateFormat: dateOptions.pickerFormat,
                    firstDayOfWeek: 'su',
                    disableUntil: {
                        year: parseInt(splitedDate[0]),
                        month: parseInt(splitedDate[1]),
                        day: parseInt(splitedDate[2]) - 1
                    },
                };
                if (calledFor == 'course') {
                    this.myDpOptions5 = {};
                    this.myDpOptions5 = dateOption;
                }
                else if (calledFor == 'register') {
                    this.myDpOptions3 = {};
                    this.myDpOptions3 = dateOption;
                }
            }
        }
        else {
            this.CourseDetails.controls[formControlName].patchValue('');
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
                if (pic[1] == 'jpeg' || pic[1] == 'png' || pic[1] == 'jpg' || pic[1] === 'webp') {
                    this.onUploadComplete(getUrl, imgDetails);
                }
                else {
                    this.toastr.error('JPEG ,PNG, JPG  & WEBP are the required type');
                }
            };
            reader.readAsDataURL(event.target.files[i]);
        }
    }
    onUploadComplete(imagePath, imageList) {
        this.recordBase64Url = imagePath[1];
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
            uploadtype: 'course'
        };
        this.auth.postService(data, urls.fileUpload).subscribe((successData) => {
            this.uploadSuccess(successData);
        }, error => {
            console.log(error, 'error');
        });
    }
    uploadSuccess(successData) {
        if (successData.IsSuccess) {
            this.deleteImg();
            this.toastr.success(successData.ResponseObject.message);
            setTimeout(() => {
                this.imagePath = successData.ResponseObject.imagepath[0]?.original_image_url;
            }, 0);
        }
    }
    deleteImg() {
        this.imagePath = '';
        this.myInputVariable.nativeElement.value = '';
    }
    disableEndDateCondition(startDateFormControl, endDateFormControl) {
        const startDate = this.CourseDetails.controls[startDateFormControl].value ?? '';
        if (startDate == '') {
            this.CourseDetails.controls[endDateFormControl].disable({ onlySelf: true });
        }
        else {
            this.CourseDetails.controls[endDateFormControl].enable({ onlySelf: true });
        }
        return startDate == '';
    }
    addOrEditCourseDetails() {
        console.log(this.CourseDetails.valid, 'formValidation');
        console.log(this.imagePath != '', 'imagePath');
        Object.keys(this.CourseDetails.controls).forEach(key => {
            if (this.CourseDetails.get(key).errors) {
                console.log(this.CourseDetails.get(key).errors, key, 'ddadsas');
            }
        });
        if (this.CourseDetails.valid && this.imagePath != '') {
            if (this.errorMessage == '') {
                const data = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    school_id: this.auth.getSessionData('school_id'),
                    course_name: this.CourseDetails.controls.course_name.value ? this.CourseDetails.controls.course_name.value : '',
                    description: this.CourseDetails.controls.description.value ? this.CourseDetails.controls.description.value : '',
                    short_description: this.CourseDetails.controls.short_description.value ? this.CourseDetails.controls.short_description.value : '',
                    overview_content: this.CourseDetails.controls.overview_content.value ? this.CourseDetails.controls.overview_content.value : '',
                    prerequisites: this.CourseDetails.controls.prerequisites.value ? this.CourseDetails.controls.prerequisites.value : '',
                    course_content: this.CourseDetails.controls.course_content.value ? this.CourseDetails.controls.course_content.value : '',
                    other_details: this.CourseDetails.controls.other_details.value ? this.CourseDetails.controls.other_details.value : '',
                    author: this.CourseDetails.controls.author.value ? this.CourseDetails.controls.author.value : '',
                    lessons: this.CourseDetails.controls.lessons.value ? this.CourseDetails.controls.lessons.value : '',
                    path: this.imagePath,
                    category_id: this.CourseDetails.controls.category_id.value,
                    display_order: this.CourseDetails.controls.display_order.value,
                    subject_id: [this.CourseDetails.controls.subject_id.value],
                    grade_id: this.CourseDetails.controls.grade_id.value ? this.CourseDetails.controls.grade_id.value : [],
                    status: this.CourseDetails.controls.status.value,
                    course_id: this.type == 'edit' ? this.courseEditDetails.course_id : '',
                    fees: this.CourseDetails.controls.paid_fee_yes.value ? this.CourseDetails.controls.fees.value : 0,
                    certified_course: this.CourseDetails.controls.certified_course.value == false ? 'N' : 'Y',
                    multiple_schedule: this.CourseDetails.controls.multiple_schedule.value == false ? 'N' : 'Y',
                    schedule: this.selectedToogleStatus == 'Yes' ? '1' : '0',
                    is_popular: this.CourseDetails.controls.is_popular.value == false ? 'N' : 'Y',
                    is_exclusive: this.CourseDetails.controls.is_exclusive.value == false ? 'N' : 'Y',
                    // redirect_url: this.CourseDetails.controls.redirect_url.value,
                    redirect_url: '',
                    // button_name: this.CourseDetails.controls.button_name.value,
                    button_name: '',
                    validity_start_date: this.CourseDetails.controls.startDate.value != '' ? this.datepipe.transform(this.CourseDetails.controls.startDate.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                    validity_end_date: this.CourseDetails.controls.endDate.value != '' ? this.datepipe.transform(this.CourseDetails.controls.endDate.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                    course_start_date: this.CourseDetails.controls.courseStartDate.value != '' ? this.datepipe.transform(this.CourseDetails.controls.courseStartDate.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                    course_end_date: this.CourseDetails.controls.courseEndDate.value != '' ? this.datepipe.transform(this.CourseDetails.controls.courseEndDate.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                    registration_start_date: this.CourseDetails.controls.registartionStartDate.value != '' ? this.datepipe.transform(this.CourseDetails.controls.registartionStartDate.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                    registration_end_date: this.CourseDetails.controls.registartionEndDate.value != '' ? this.datepipe.transform(this.CourseDetails.controls.registartionEndDate.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                    course_type: this.selectedToogleStatus == 'No' ? this.CourseDetails.controls.course_type.value : '',
                    cost: this.selectedToogleStatus == 'No' ? this.CourseDetails.controls.actual_amount.value != '' ? this.CourseDetails.controls.actual_amount.value : 0 : 0,
                    discount: this.selectedToogleStatus == 'No' ? this.CourseDetails.controls.discount.value != '' ? this.CourseDetails.controls.discount.value : 0 : 0,
                    total_slots: this.selectedToogleStatus == 'No' ? this.CourseDetails.controls.slot_available.value : '',
                    is_paid: this.CourseDetails.controls.paid_fee_yes.value ? '1' : '0',
                    event: this.CourseDetails.controls.is_webinar_event.value == false ? '0' : '1',
                    contact_info: this.CourseDetails.controls.contact_info.value
                };
                console.log(data, 'data');
                const url = this.type == 'add' ? urls.addCourseDetails : urls.updateCourseDetails;
                this.auth.postService(data, url).subscribe((successData) => {
                    this.addCourseSuccess(successData);
                }, (error) => {
                    console.error(error, 'booking error');
                });
            }
            else {
                this.toastr.error('Please enter valid display order number');
            }
        }
        else {
            this.validatorService.validateAllFormFields(this.CourseDetails);
            this.toastr.error('Please fill all Mandatory fields');
        }
    }
    addCourseSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.router.navigate(['/course/details/list']);
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    static { this.ɵfac = function CourseDetailsAddComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CourseDetailsAddComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.DatePipe), i0.ɵɵdirectiveInject(i4.ActivatedRoute), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i5.ToastrService), i0.ɵɵdirectiveInject(i6.EnvironmentService), i0.ɵɵdirectiveInject(i7.DomSanitizer), i0.ɵɵdirectiveInject(i8.ValidationService), i0.ɵɵdirectiveInject(i9.NgbModal)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CourseDetailsAddComponent, selectors: [["app-course-details-add"]], viewQuery: function CourseDetailsAddComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInputVariable = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.scheduleConfirmation = _t.first);
        } }, decls: 29, vars: 13, consts: [["scheduleConfirmation", ""], ["myInput", ""], ["dp", "angular-mydatepicker"], ["dp1", "angular-mydatepicker"], ["dp3", "angular-mydatepicker"], ["dp4", "angular-mydatepicker"], ["dp5", "angular-mydatepicker"], ["dp6", "angular-mydatepicker"], [1, "container-fluid", "card", "px-0"], [1, "card-header", "my-2", 2, "border-bottom", "1px solid #e7e7e7", "padding", "24px"], [1, "text-capitalize", "mb-2"], [1, "mb-0"], [1, "text-danger"], [1, "card-body"], [3, "formGroup"], [1, "form-group", "row", "mt-2"], [1, "col-md-6", "d-flex", "flex-row", "align-items-center"], [1, "px-0", "col-form-label", "mr-4"], [1, "text-danger", "mr-1"], [1, "tri-state-toggle", 2, "width", "fit-content"], [1, "tri-state-toggle-button", 3, "click", "ngClass"], [4, "ngIf"], ["class", "card-footer", 4, "ngIf"], ["for", "inputCourse", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["id", "inputCourse", "placeholder", "Course Name", "formControlName", "course_name", 1, "form-control"], [1, "form-group", "row", "mt-1"], [1, "col-sm-2", "col-form-label"], ["bindLabel", "category_name", "bindValue", "category_id", "formControlName", "category_id", "placeholder", "Select Category", "typeToSearchText", "", 3, "change", "items", "multiple"], ["class", "error", 4, "ngIf"], ["bindLabel", "subject_name", "bindValue", "subject_id", "formControlName", "subject_id", "placeholder", "Select Subject", "typeToSearchText", "", 3, "items", "clearable"], [1, "text-danger", "mr-1", 2, "visibility", "hidden"], ["bindLabel", "grade_name", "bindValue", "grade_id", "formControlName", "grade_id", "placeholder", "Select Grade", "typeToSearchText", "", 3, "items", "multiple", "clearable"], [1, "main-content"], [3, "emitEditorValue", "height", "hideMatEditor", "editorPatchValue"], [1, "mr-1", 2, "visibility", "hidden"], ["for", "author", 1, "col-sm-2", "col-form-label"], ["id", "author", "placeholder", "Author", "formControlName", "author", 1, "form-control"], ["accept", ".png, .jpg, .jpeg,.webp", "type", "file", 1, "custom-upload-input", "col-md-12", "px-0", 3, "change"], [1, "color-grey", "mb-0", "font-weight-bold", 2, "font-size", "12px"], ["class", "form-group col-12 d-flex", 4, "ngIf"], [1, "col-4"], [1, "w-100", "d-flex", "align-items-baseline"], ["formControlName", "startDate", "placeholder", "Start Date", "name", "dp", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "dateChanged", "click", "options"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 2, "padding", "6px 18px", 3, "click"], [1, "fa", "fa-calendar-o"], [1, "d-flex", "align-items-baseline", "col-4"], ["formControlName", "endDate", "placeholder", "End Date", "name", "dp1", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "click", "options"], [1, "form-group", "row"], [1, "col-xl-2", "col-md-2"], [1, "col-xl-10", "col-md-10"], ["maxlength", "4", "formControlName", "display_order", "placeholder", "Enter Display Order Number", "type", "text", 1, "form-control", 3, "keypress"], [1, "error"], [1, "mr-1", "text-danger"], ["formControlName", "status", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "row", "mt-2", "mb-0"], [1, "col-sm-2", "col-form-label", 2, "visibility", "hidden"], [1, "col-10"], [1, "row"], [1, "col-3", "col-md-3", "d-flex", "align-items-center"], ["id", "certifiedCourse", "type", "checkbox", "formControlName", "certified_course", 1, "mr-2", "cursor"], ["for", "certifiedCourse", 1, "cursor", "mb-0"], ["id", "popular", "type", "checkbox", "formControlName", "is_popular", 1, "mr-2", "cursor"], ["for", "popular", 1, "cursor", "mb-0"], ["id", "exclusive", "type", "checkbox", "formControlName", "is_exclusive", 1, "mr-2", "cursor"], ["for", "exclusive", 1, "cursor", "mb-0"], ["id", "webinar", "type", "checkbox", "formControlName", "is_webinar_event", 1, "mr-2", "cursor"], ["for", "webinar", 1, "cursor", "mb-0"], ["formControlName", "contact_info", "placeholder", "Enter Purchase Contact Info", 1, "w-100", "form-control"], ["for", "fees", 1, "col-sm-2", "col-form-label"], [1, "col-10", "col-form-label"], [1, "col-1", "col-md-1"], ["id", "paid_fee_yes", "type", "checkbox", "formControlName", "paid_fee_yes", 1, "mr-2", "cursor", 3, "change"], ["for", "paid_fee_yes", 1, "cursor", "mb-0"], ["id", "paid_fee_no", "type", "checkbox", "formControlName", "paid_fee_no", 1, "mr-2", "cursor", 3, "change"], ["for", "paid_fee_no", 1, "cursor", "mb-0"], ["class", "form-group row mt-2", 4, "ngIf"], [1, "form-group", "col-12", "d-flex"], [1, "col-xl-10", "col-md-10", "px-0"], ["title", "close", 1, "fa", "fa-times-circle", "close-icon", 3, "click"], [1, "files-list", "fit-img2"], ["alt", "profile Image", 1, "w-30", 3, "src"], [3, "value"], ["formControlName", "registartionStartDate", "placeholder", "Start Date", "name", "dp1", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "dateChanged", "click", "options"], ["formControlName", "registartionEndDate", "placeholder", "End Date", "name", "dp1", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "click", "options"], ["type", "button", 1, "btn", "btn-primary", 2, "padding", "6px 18px", 3, "click", "disabled"], ["formControlName", "courseStartDate", "placeholder", "Start Date", "name", "dp1", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "click", "dateChanged", "options"], ["formControlName", "courseEndDate", "placeholder", "End Date", "name", "dp1", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "click", "options"], [1, "col-sm-4"], ["formControlName", "course_type", 1, "form-control"], ["value", "", "selected", "", "disabled", "", "hidden", ""], ["value", "O"], ["value", "I"], ["for", "inputSlot", 1, "col-sm-2", "col-form-label"], ["id", "inputSlot", "placeholder", "Slots Available", "formControlName", "slot_available", 1, "form-control", 3, "keypress"], ["id", "fees", "placeholder", "Fees", "formControlName", "fees", 1, "form-control"], [1, "input-group"], ["type", "button", 1, "btn", "btn-primary", 2, "padding", "6px 18px"], ["maxlength", "6", "id", "inputAmount", "placeholder", "Amount", "formControlName", "fees", 1, "form-control", 3, "input", "keypress"], ["maxlength", "6", "id", "inputDiscount", "placeholder", "Discount Amount", "formControlName", "discount", 1, "form-control", 3, "input", "keypress"], [1, "col-sm-10", "input-group"], ["placeholder", "Actual Amount", "formControlName", "actual_amount", "readonly", "", 1, "form-control"], [1, "card-footer"], [1, "button", "float-right", "btn", "btn-primary", "mb-2", 3, "click"], ["routerLink", "/course/category/list", 1, "float-right", "btn", "cancel", "mb-2", "mr-2"], [1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [1, "color-primary"], [1, "modal-footer"], [1, "btn", "cancel", 3, "click"], [1, "btn", "btn-primary", 3, "click"]], template: function CourseDetailsAddComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "section")(1, "div", 8)(2, "div", 9)(3, "h5", 10);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "label", 11);
            i0.ɵɵtext(6, "All fields marked with ");
            i0.ɵɵelementStart(7, "span", 12);
            i0.ɵɵtext(8, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(9, " are required");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 13)(11, "form", 14)(12, "div", 15)(13, "div", 16)(14, "label", 17)(15, "span", 18);
            i0.ɵɵtext(16, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(17, "Does this course have schedules");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 19)(19, "button", 20);
            i0.ɵɵlistener("click", function CourseDetailsAddComponent_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.confirmScheduleChange("Yes")); });
            i0.ɵɵtext(20, "Yes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "button", 20);
            i0.ɵɵlistener("click", function CourseDetailsAddComponent_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.confirmScheduleChange("-")); });
            i0.ɵɵtext(22, "-");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "button", 20);
            i0.ɵɵlistener("click", function CourseDetailsAddComponent_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.confirmScheduleChange("No")); });
            i0.ɵɵtext(24, "No");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(25, CourseDetailsAddComponent_div_25_Template, 199, 44, "div", 21);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(26, CourseDetailsAddComponent_div_26_Template, 5, 1, "div", 22);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(27, CourseDetailsAddComponent_ng_template_27_Template, 12, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.type == "add" ? "Add" : "Update", " Course Details");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("formGroup", ctx.CourseDetails);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c2, ctx.selectedToogleStatus == "Yes"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c2, ctx.selectedToogleStatus == "-"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c2, ctx.selectedToogleStatus == "No"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.selectedToogleStatus != "-");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.selectedToogleStatus != "-");
        } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i4.RouterLink, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.MaxLengthValidator, i2.FormGroupDirective, i2.FormControlName, i10.NgSelectComponent, i11.AngularMyDatePickerDirective, i12.TinyMiceComponent], styles: [".tri-state-toggle[_ngcontent-%COMP%] {\n  background: rgba(165,170,174,0.25);\n  box-shadow: inset 0 2px 8px 0 rgba(165,170,174,0.25);\n  border-radius: 24px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  transition: all 500ms ease;\n}\n\n.tri-state-toggle-button[_ngcontent-%COMP%] {\n  border-radius: 24px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  background-color: transparent;\n  border: 0 solid transparent;\n  margin: 2px;\n  color: #727C8F;\n  cursor: pointer;\n  transition:         all 0.5s ease;\n}\n\n.tri-state-toggle-button.active[_ngcontent-%COMP%] {\n  background-image: linear-gradient(-180deg, #fff 0%, #FAFAFA 81%, #F2F2F2 100%);\n  border: 1px solid rgba(207,207,207,0.6);\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.1);\n  color: #26CDBE !important;\n  font-weight: 500 !important;\n  transition: all .2s ease-in !important;\n}\n\n.tri-state-toggle-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CourseDetailsAddComponent, [{
        type: Component,
        args: [{ selector: 'app-course-details-add', template: "<section>\n  <div class=\"container-fluid card px-0\">\n    <div class=\"card-header my-2\" style=\"border-bottom: 1px solid #e7e7e7; padding: 24px\">\n      <h5 class=\"text-capitalize mb-2\"> {{type == 'add' ? 'Add' : 'Update'}} Course Details</h5>\n      <label class=\"mb-0\">All fields marked with <span class=\"text-danger\">*</span>  are required</label>\n    </div>\n    <div class=\"card-body\">\n      <form [formGroup]=\"CourseDetails\">\n\n        <div class=\"form-group row mt-2\">\n          <div class=\"col-md-6 d-flex flex-row align-items-center\">\n            <label class=\"px-0 col-form-label mr-4\"><span class=\"text-danger mr-1\">*</span>Does this course have schedules</label>\n            <div style=\"width: fit-content\" class=\"tri-state-toggle\">\n\n              <button [ngClass]=\"{'active' : selectedToogleStatus == 'Yes'}\" class=\"tri-state-toggle-button\"\n                      (click)=\"confirmScheduleChange('Yes')\">Yes</button>\n\n              <button [ngClass]=\"{'active' : selectedToogleStatus == '-'}\" class=\"tri-state-toggle-button\"\n                      (click)=\"confirmScheduleChange('-')\">-</button>\n\n              <button [ngClass]=\"{'active' : selectedToogleStatus == 'No'}\" class=\"tri-state-toggle-button\"\n                      (click)=\"confirmScheduleChange('No')\">No</button>\n\n            </div>\n          </div>\n        </div>\n\n        <div *ngIf=\"selectedToogleStatus != '-'\">\n          <div class=\"form-group row mt-2\">\n            <label for=\"inputCourse\" class=\"col-sm-2 col-form-label\"><span class=\"text-danger mr-1\">*</span>Course Name</label>\n            <div class=\"col-sm-10\">\n              <input class=\"form-control\" id=\"inputCourse\" placeholder=\"Course Name\" formControlName=\"course_name\">\n            </div>\n          </div>\n          <div class=\"form-group row mt-1\">\n            <label  class=\"col-sm-2 col-form-label\"><span class=\"text-danger mr-1\">*</span>Category</label>\n            <div class=\"col-sm-10\">\n              <ng-select\n                [items]=\"categoryListData\"\n                bindLabel=\"category_name\"\n                bindValue=\"category_id\"\n                formControlName=\"category_id\"\n                placeholder=\"Select Category\"\n                typeToSearchText=\"\"\n                (change)=\"categoryChanged($event)\"\n                [multiple]=\"true\">\n              </ng-select>\n              <em *ngIf=\"!CourseDetails.get('category_id').valid && (CourseDetails.get('category_id').dirty || CourseDetails.get('category_id').touched)\"\n                  class=\"error\">Category is required</em>\n            </div>\n          </div>\n\n          <div class=\"form-group row mt-1\">\n            <label  class=\"col-sm-2 col-form-label\"><span class=\"text-danger mr-1\">*</span>Subject</label>\n            <div class=\"col-sm-10\">\n              <ng-select\n                [items]=\"subjectListData\"\n                bindLabel=\"subject_name\"\n                bindValue=\"subject_id\"\n                formControlName=\"subject_id\"\n                placeholder=\"Select Subject\"\n                typeToSearchText=\"\"\n                [clearable]=\"false\">\n              </ng-select>\n              <em *ngIf=\"!CourseDetails.get('subject_id').valid && (CourseDetails.get('subject_id').dirty || CourseDetails.get('subject_id').touched)\"\n                  class=\"error\">Subject is required</em>\n            </div>\n          </div>\n\n          <div class=\"form-group row mt-1\">\n            <label  class=\"col-sm-2 col-form-label\"><span class=\"text-danger mr-1\" style=\"visibility: hidden\">*</span>Grade</label>\n            <div class=\"col-sm-10\">\n              <ng-select\n                [items]=\"gradeListData\"\n                bindLabel=\"grade_name\"\n                bindValue=\"grade_id\"\n                formControlName=\"grade_id\"\n                placeholder=\"Select Grade\"\n                typeToSearchText=\"\"\n                [multiple]=\"true\"\n              [clearable]=\"false\">\n              </ng-select>\n            </div>\n          </div>\n\n          <div class=\"form-group row mt-2\">\n            <label  class=\"col-sm-2 col-form-label\"><span class=\"text-danger mr-1\">*</span>Short Description</label>\n            <div class=\"col-sm-10\">\n              <div class=\"main-content\">\n                <app-tiny-mice [height]=\"300\" [hideMatEditor]=\"true\" [editorPatchValue]=\"type == 'add' ? false : emittedEditorValue?.short_description\"\n                               (emitEditorValue)=\"editorValue($event, 'short_description')\"></app-tiny-mice>\n                <em *ngIf=\"!CourseDetails.get('short_description').valid && (CourseDetails.get('short_description').dirty || CourseDetails.get('short_description').touched)\"\n                    class=\"error\">Short Description is required</em>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group row mt-2\">\n            <label class=\"col-sm-2 col-form-label\"><span style=\"visibility: hidden;\" class=\"mr-1\">*</span>Description</label>\n            <div class=\"col-sm-10\">\n              <div class=\"main-content\">\n                <app-tiny-mice [height]=\"300\" [hideMatEditor]=\"true\" [editorPatchValue]=\"type == 'add' ? false : emittedEditorValue?.description\"\n                               (emitEditorValue)=\"editorValue($event, 'description')\"></app-tiny-mice>\n                <em *ngIf=\"!CourseDetails.get('description').valid && (CourseDetails.get('description').dirty || CourseDetails.get('description').touched)\"\n                    class=\"error\">Description is required</em>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row mt-2\">\n            <label  class=\"col-sm-2 col-form-label\"><span style=\"visibility: hidden;\" class=\"mr-1\">*</span>Overview content</label>\n            <div class=\"col-sm-10\">\n              <div class=\"main-content\">\n                <app-tiny-mice [height]=\"300\" [hideMatEditor]=\"true\" [editorPatchValue]=\"type == 'add' ? false : emittedEditorValue?.overview_content\"\n                               (emitEditorValue)=\"editorValue($event, 'overview_content')\"></app-tiny-mice>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row mt-2\">\n            <label  class=\"col-sm-2 col-form-label\"><span style=\"visibility: hidden;\" class=\"mr-1\">*</span>Course Content</label>\n            <div class=\"col-sm-10\">\n              <div class=\"main-content\">\n                <app-tiny-mice [height]=\"300\" [hideMatEditor]=\"true\" [editorPatchValue]=\"type == 'add' ? false : emittedEditorValue?.course_content\"\n                               (emitEditorValue)=\"editorValue($event, 'course_content')\"></app-tiny-mice>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row mt-2\">\n            <label  class=\"col-sm-2 col-form-label\"><span style=\"visibility: hidden;\" class=\"mr-1\">*</span>Course Pre Requisites</label>\n            <div class=\"col-sm-10\">\n              <div class=\"main-content\">\n                <app-tiny-mice [height]=\"300\" [hideMatEditor]=\"true\" [editorPatchValue]=\"type == 'add' ? false : emittedEditorValue?.prerequisites\"\n                               (emitEditorValue)=\"editorValue($event, 'prerequisites')\"></app-tiny-mice>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row mt-2\">\n            <label  class=\"col-sm-2 col-form-label\"><span style=\"visibility: hidden;\" class=\"mr-1\">*</span>Other Details</label>\n            <div class=\"col-sm-10\">\n              <div class=\"main-content\">\n                <app-tiny-mice [height]=\"300\" [hideMatEditor]=\"true\" [editorPatchValue]=\"type == 'add' ? false : emittedEditorValue?.other_details\"\n                               (emitEditorValue)=\"editorValue($event, 'other_details')\"></app-tiny-mice>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row mt-2\">\n            <label  class=\"col-sm-2 col-form-label\"><span style=\"visibility: hidden;\" class=\"mr-1\">*</span>Lesson</label>\n            <div class=\"col-sm-10\">\n              <div class=\"main-content\">\n                <app-tiny-mice [height]=\"300\" [hideMatEditor]=\"true\" [editorPatchValue]=\"type == 'add' ? false : emittedEditorValue?.lessons\"\n                               (emitEditorValue)=\"editorValue($event, 'lessons')\"></app-tiny-mice>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group row mt-2\">\n            <label for=\"author\" class=\"col-sm-2 col-form-label\"><span style=\"visibility: hidden;\" class=\"mr-1\">*</span>Author</label>\n            <div class=\"col-sm-10\">\n              <input class=\"form-control\" id=\"author\" placeholder=\"Author\" formControlName=\"author\">\n            </div>\n          </div>\n\n          <div class=\"form-group row mt-2\">\n            <label class=\"col-sm-2 col-form-label\"><span class=\"text-danger mr-1\">*</span>Cover Image</label>\n            <div class=\"col-sm-10\">\n              <input #myInput (change)=\"encodeImageFileAsURL($event)\" accept=\".png, .jpg, .jpeg,.webp\" class=\"custom-upload-input col-md-12 px-0\" type=\"file\" >\n              <span class=\"color-grey mb-0 font-weight-bold\" style=\"font-size: 12px\">Recommended Size 1MB</span>\n            </div>\n          </div>\n\n          <div class=\"form-group col-12 d-flex\" *ngIf=\"imagePath != ''\">\n            <label style=\"visibility: hidden\"  class=\"col-sm-2 col-form-label\"><span class=\"text-danger mr-1\">*</span>Cover Image</label>\n            <div class=\"col-xl-10 col-md-10 px-0\">\n              <i (click)=\"deleteImg()\" class=\"fa fa-times-circle close-icon\" title=\"close\"></i>\n              <div class=\"files-list fit-img2\">\n                <img alt=\"profile Image\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost  + '/' + imagePath)\" class=\"w-30\">\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row mt-2\">\n            <label class=\"col-sm-2 col-form-label\"><span class=\"text-danger mr-1\">*</span>Validity Start Date</label>\n            <div class=\"col-4\">\n              <div class=\"w-100 d-flex align-items-baseline\">\n                <input class=\"form-control\" formControlName=\"startDate\" placeholder=\"Start Date\"\n                      name=\"dp\" angular-mydatepicker #dp=\"angular-mydatepicker\" autocomplete=\"off\"\n                      [options]=\"myDpOptions\" (dateChanged)=\"onDateChanged($event, 'endDate')\"  (click)=\"dp.toggleCalendar()\">\n                <div class=\"input-group-append\">\n                  <button style=\"padding: 6px 18px\" type=\"button\" class=\"btn btn-primary\" (click)=\"dp.toggleCalendar()\">\n                    <i class=\"fa fa-calendar-o\"></i></button>\n                </div>\n              </div>\n              <em *ngIf=\"!CourseDetails.get('startDate').valid && (CourseDetails.get('startDate').dirty || CourseDetails.get('startDate').touched)\"\n                  class=\"error\">Start Date is required</em>\n            </div>\n\n            <label class=\"col-sm-2 col-form-label\"><span style=\"visibility: hidden\" class=\"mr-1\">*</span>Validity End Date</label>\n            <div class=\"d-flex align-items-baseline col-4\">\n              <input class=\"form-control\" formControlName=\"endDate\" placeholder=\"End Date\"\n                     name=\"dp1\" angular-mydatepicker #dp1=\"angular-mydatepicker\" autocomplete=\"off\"\n                     [options]=\"myDpOptions1\" (click)=\"dp1.toggleCalendar()\">\n              <div class=\"input-group-append\">\n                <button style=\"padding: 6px 18px\" type=\"button\" class=\"btn btn-primary\" (click)=\"dp1.toggleCalendar()\">\n                  <i class=\"fa fa-calendar-o\"></i></button>\n              </div>\n              <em *ngIf=\"!CourseDetails.get('endDate').valid && (CourseDetails.get('endDate').dirty || CourseDetails.get('endDate').touched)\"\n                  class=\"error\">End Date is required</em>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label class=\"col-xl-2 col-md-2\"><span class=\"text-danger\">*</span>\n              Display Order</label>\n            <div class=\"col-xl-10 col-md-10\">\n              <input maxlength=\"4\" (keypress)=\"numberValidate($event)\" class=\"form-control\" formControlName=\"display_order\"\n                     placeholder=\"Enter Display Order Number\" type=\"text\">\n              <em *ngIf=\"!CourseDetails.get('display_order').valid && (CourseDetails.get('display_order').dirty || CourseDetails.get('display_order').touched)\" class=\"error\">Display Order Number is required</em>\n              <em class=\"error\">{{showErrorMessage()}}</em>\n            </div>\n          </div>\n\n          <div class=\"form-group row mt-2\">\n            <label class=\"col-sm-2 col-form-label\"><span class=\"mr-1 text-danger\">*</span>Status</label>\n            <div class=\"col-sm-10\">\n              <div class=\"main-content\">\n                <select class=\"form-control\" formControlName=\"status\">\n                  <option *ngFor=\"let data of courseStatus\" [value]=\"data.id\">{{data.value}}</option>\n                </select>\n              </div>\n              <em *ngIf=\"!CourseDetails.get('status').valid && (CourseDetails.get('status').dirty || CourseDetails.get('status').touched)\"\n                  class=\"error\">Status is required</em>\n            </div>\n          </div>\n<!--          <div class=\"form-group row\">-->\n<!--            <label class=\"col-sm-2 col-form-label\" for=\"validationCustom5\"><span style=\"visibility: hidden\">*</span>-->\n<!--              Redirect Url</label>-->\n<!--            <div class=\"col-sm-10\">-->\n<!--              <input class=\"form-control\" formControlName=\"redirect_url\" id=\"validationCustom5\"-->\n<!--                     placeholder=\"Enter Redirect Url\" type=\"text\">-->\n<!--            </div>-->\n<!--          </div>-->\n\n<!--          <div class=\"form-group row\">-->\n<!--            <label class=\"col-xl-2 col-md-2\"><span style=\"visibility: hidden\">*</span>-->\n<!--              Button Name</label>-->\n<!--            <div class=\"col-xl-10 col-md-10\">-->\n<!--              <input maxlength=\"20\" class=\"form-control\" formControlName=\"button_name\"-->\n<!--                     placeholder=\"Enter Button Name\" type=\"text\">-->\n<!--            </div>-->\n<!--          </div>-->\n\n          <div class=\"form-group row mt-2 mb-0\">\n            <label style=\"visibility:hidden\" class=\"col-sm-2 col-form-label\"><span>*</span>Status</label>\n            <div class=\"col-10\">\n              <div class=\"row\">\n                <div class=\"col-3 col-md-3 d-flex align-items-center\">\n                  <input id=\"certifiedCourse\" type=\"checkbox\" formControlName=\"certified_course\" class=\"mr-2 cursor\">\n                  <label class=\"cursor mb-0\" for=\"certifiedCourse\">Certified Course</label>\n                </div>\n                <div class=\"col-3 col-md-3 d-flex align-items-center\">\n                  <input id=\"popular\" type=\"checkbox\" formControlName=\"is_popular\" class=\"mr-2 cursor\">\n                  <label class=\"cursor mb-0\" for=\"popular\">Popular</label>\n                </div>\n                <div class=\"col-3 col-md-3 d-flex align-items-center\">\n                  <input id=\"exclusive\" type=\"checkbox\" formControlName=\"is_exclusive\" class=\"mr-2 cursor\">\n                  <label class=\"cursor mb-0\" for=\"exclusive\">One-on-One</label>\n                </div>\n                <div class=\"col-3 col-md-3 d-flex align-items-center\">\n                  <input id=\"webinar\" type=\"checkbox\" formControlName=\"is_webinar_event\" class=\"mr-2 cursor\">\n                  <label class=\"cursor mb-0\" for=\"webinar\">Webinar Event</label>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"selectedToogleStatus == 'No'\">\n\n            <div class=\"form-group row mt-2\">\n              <label class=\"col-sm-2 col-form-label\"><span style=\"visibility: hidden\" class=\"mr-1\">*</span>Registration Start Date</label>\n              <div class=\"d-flex align-items-baseline col-4\">\n                <input class=\"form-control\" formControlName=\"registartionStartDate\" placeholder=\"Start Date\"\n                       name=\"dp1\" angular-mydatepicker #dp3=\"angular-mydatepicker\" autocomplete=\"off\"\n                       [options]=\"myDpOptions2\" (dateChanged)=\"onDateChanged($event, 'registartionEndDate')\" (click)=\"dp3.toggleCalendar()\">\n                <div class=\"input-group-append\">\n                  <button style=\"padding: 6px 18px\" type=\"button\" class=\"btn btn-primary\" (click)=\"dp3.toggleCalendar()\">\n                    <i class=\"fa fa-calendar-o\"></i></button>\n                </div>\n              </div>\n\n              <label class=\"col-sm-2 col-form-label\"><span style=\"visibility: hidden\" class=\"mr-1\">*</span>Registration End Date</label>\n              <div class=\"d-flex align-items-baseline col-4\">\n                <input class=\"form-control\" formControlName=\"registartionEndDate\" placeholder=\"End Date\"\n                       name=\"dp1\" angular-mydatepicker #dp4=\"angular-mydatepicker\" autocomplete=\"off\"\n                       [options]=\"myDpOptions3\" (click)=\"dp4.toggleCalendar()\">\n                <div class=\"input-group-append\">\n                  <button style=\"padding: 6px 18px\" [disabled]=\"validatorService.disableEndDateCondition('registartionStartDate', 'registartionEndDate', CourseDetails)\"\n                          type=\"button\" class=\"btn btn-primary\" (click)=\"dp4.toggleCalendar()\">\n                    <i class=\"fa fa-calendar-o\"></i></button>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group row mt-2\">\n              <label class=\"col-sm-2 col-form-label\"><span style=\"visibility: hidden\" class=\"text-danger mr-1\">*</span>Course Start Date</label>\n              <div class=\"d-flex align-items-baseline col-4\">\n                <input class=\"form-control\" formControlName=\"courseStartDate\" placeholder=\"Start Date\"\n                       name=\"dp1\" angular-mydatepicker #dp5=\"angular-mydatepicker\" autocomplete=\"off\"\n                       [options]=\"myDpOptions4\" (click)=\"dp5.toggleCalendar()\" (dateChanged)=\"onDateChanged($event, 'courseEndDate')\" >\n                <div class=\"input-group-append\">\n                  <button style=\"padding: 6px 18px\" type=\"button\" class=\"btn btn-primary\" (click)=\"dp5.toggleCalendar()\">\n                    <i class=\"fa fa-calendar-o\"></i></button>\n                </div>\n              </div>\n\n              <label class=\"col-sm-2 col-form-label\"><span style=\"visibility: hidden\" class=\"text-danger mr-1\">*</span>Course End Date</label>\n              <div class=\"d-flex align-items-baseline col-4\">\n                <input class=\"form-control\" formControlName=\"courseEndDate\" placeholder=\"End Date\"\n                       name=\"dp1\" angular-mydatepicker #dp6=\"angular-mydatepicker\" autocomplete=\"off\"\n                       [options]=\"myDpOptions5\" (click)=\"dp6.toggleCalendar()\">\n                <div class=\"input-group-append\">\n                  <button style=\"padding: 6px 18px\" [disabled]=\"validatorService.disableEndDateCondition('courseStartDate', 'courseEndDate', CourseDetails)\"\n                        type=\"button\" class=\"btn btn-primary\" (click)=\"dp6.toggleCalendar()\">\n                    <i class=\"fa fa-calendar-o\"></i></button>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group row mt-2\"><label class=\"col-sm-2 col-form-label\"><span class=\"mr-1 text-danger\">*</span>Course Type</label>\n              <div class=\"col-sm-4\">\n                <div class=\"main-content\">\n                  <select class=\"form-control\" formControlName=\"course_type\">\n                    <option value=\"\" selected disabled hidden>Select Course Type</option>\n                    <option value=\"O\">Online</option>\n                    <option value=\"I\">In-Person</option>\n                  </select>\n                  <em *ngIf=\"!CourseDetails.get('course_type').valid && (CourseDetails.get('course_type').dirty || CourseDetails.get('course_type').touched)\"\n                      class=\"error\">Course Type is required</em>\n                </div>\n              </div>\n              <label for=\"inputSlot\" class=\"col-sm-2 col-form-label\"><span style=\"visibility: hidden\" class=\"mr-1\">*</span>Slots Available</label>\n              <div class=\"col-sm-4\">\n                <input class=\"form-control\" id=\"inputSlot\" placeholder=\"Slots Available\" formControlName=\"slot_available\" (keypress)=\"numberValidation($event)\">\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group row mt-2\">\n            <label class=\"col-sm-2 col-form-label\"><span style=\"visibility: hidden\" class=\"mr-1\">*</span>Purchase Contact Info</label>\n            <div class=\"col-sm-10\">\n              <input formControlName=\"contact_info\" class=\"w-100 form-control\" placeholder=\"Enter Purchase Contact Info\" >\n            </div>\n          </div>\n\n          <div class=\"form-group row mt-2\">\n            <label for=\"fees\" class=\"col-sm-2 col-form-label\"><span class=\"mr-1 text-danger\">*</span>Is Paid Course</label>\n            <div class=\"col-10 col-form-label\">\n              <div class=\"row\">\n                <div class=\"col-1 col-md-1\">\n                  <input (change)=\"checkbox('paid_fee_yes', 'paid_fee_no')\" id=\"paid_fee_yes\" type=\"checkbox\" formControlName=\"paid_fee_yes\" class=\"mr-2 cursor\">\n                  <label class=\"cursor mb-0\" for=\"paid_fee_yes\">Yes</label>\n                </div>\n                <div class=\"col-1 col-md-1\">\n                  <input (change)=\"checkbox('paid_fee_no', 'paid_fee_yes')\" id=\"paid_fee_no\" type=\"checkbox\" formControlName=\"paid_fee_no\" class=\"mr-2 cursor\">\n                  <label class=\"cursor mb-0\" for=\"paid_fee_no\">No</label>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row mt-2\" *ngIf=\"CourseDetails.controls.paid_fee_yes.value && selectedToogleStatus == 'Yes'\">\n            <label for=\"fees\" class=\"col-sm-2 col-form-label\"><span style=\"visibility: hidden;\" class=\"mr-1\">*</span>Fees</label>\n            <div class=\"col-sm-10\">\n              <input class=\"form-control\" id=\"fees\" placeholder=\"Fees\" formControlName=\"fees\">\n            </div>\n          </div>\n\n          <div *ngIf=\"CourseDetails.controls.paid_fee_yes.value && selectedToogleStatus == 'No'\">\n\n            <div class=\"form-group row mt-2\">\n              <label for=\"inputCourse\" class=\"col-sm-2 col-form-label\"><span class=\"mr-1 text-danger\">*</span>Amount</label>\n              <div class=\"col-sm-10\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-append\">\n                    <button style=\"padding: 6px 18px\" type=\"button\" class=\"btn btn-primary\">\n                      $\n                    </button>\n                  </div>\n                  <input maxlength=\"6\" class=\"form-control\" id=\"inputAmount\" placeholder=\"Amount\" formControlName=\"fees\" (input)=\"calculateAmount()\" (keypress)=\"numberValidation($event)\">\n\n                </div>\n                <em *ngIf=\"!CourseDetails.get('fees').valid && (CourseDetails.get('fees').dirty || CourseDetails.get('fees').touched)\"\n                    class=\"error\">Amount is required</em>\n              </div>\n            </div>\n            <div class=\"form-group row mt-2\">\n              <label for=\"inputCourse\" class=\"col-sm-2 col-form-label\"><span class=\"mr-1 text-danger\">*</span>Discount Amount</label>\n              <div class=\"col-sm-10\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-append\">\n                    <button style=\"padding: 6px 18px\" type=\"button\" class=\"btn btn-primary\">\n                      $\n                    </button>\n                  </div>\n                  <input maxlength=\"6\" class=\"form-control\" id=\"inputDiscount\" placeholder=\"Discount Amount\" formControlName=\"discount\" (input)=\"calculateAmount()\" (keypress)=\"numberValidation($event)\">\n                </div>\n                <em *ngIf=\"!CourseDetails.get('discount').valid && (CourseDetails.get('discount').dirty || CourseDetails.get('discount').touched)\"\n                    class=\"error\">Discount Amount is required</em>\n              </div>\n            </div>\n            <div class=\"form-group row mt-2\">\n              <label for=\"inputCourse\" class=\"col-sm-2 col-form-label\"><span class=\"mr-1 text-danger\">*</span>Actual Amount</label>\n              <div class=\"col-sm-10 input-group\">\n                <div class=\"input-group-append\">\n                  <button style=\"padding: 6px 18px\" type=\"button\" class=\"btn btn-primary\">\n                    $\n                  </button>\n                </div>\n                <input class=\"form-control\" placeholder=\"Actual Amount\" formControlName=\"actual_amount\" readonly>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"card-footer\" *ngIf=\"selectedToogleStatus != '-'\">\n      <button class=\"button float-right btn btn-primary mb-2\" (click)=\"addOrEditCourseDetails()\">{{type == 'add' ? 'Add' : 'Update'}} Course</button>\n      <a class=\"float-right btn cancel mb-2 mr-2\" routerLink=\"/course/category/list\">Close</a>\n    </div>\n  </div>\n</section>\n\n<ng-template #scheduleConfirmation let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\"><b>Schedule Change</b></h4>\n  </div>\n  <div class=\"modal-body\">\n    <h5 class=\"color-primary\">\n      All classes associated with this course schedule will be removed. Would you like to proceed?\n    </h5>\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn cancel\" (click)=\"close()\">No</button>\n    <button class=\"btn btn-primary\" (click)=\"close();updateScheduleType(this.selectedToogleStatus == 'Yes' ? 'No' : 'Yes')\">Yes</button>\n  </div>\n</ng-template>\n", styles: ["\n.tri-state-toggle {\n  background: rgba(165,170,174,0.25);\n  box-shadow: inset 0 2px 8px 0 rgba(165,170,174,0.25);\n  border-radius: 24px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  transition: all 500ms ease;\n}\n\n.tri-state-toggle-button {\n  border-radius: 24px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  background-color: transparent;\n  border: 0 solid transparent;\n  margin: 2px;\n  color: #727C8F;\n  cursor: pointer;\n  transition:         all 0.5s ease;\n}\n\n.tri-state-toggle-button.active {\n  background-image: linear-gradient(-180deg, #fff 0%, #FAFAFA 81%, #F2F2F2 100%);\n  border: 1px solid rgba(207,207,207,0.6);\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.1);\n  color: #26CDBE !important;\n  font-weight: 500 !important;\n  transition: all .2s ease-in !important;\n}\n\n.tri-state-toggle-button:focus {\n  outline: none;\n}\n\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.FormBuilder }, { type: i3.DatePipe }, { type: i4.ActivatedRoute }, { type: i4.Router }, { type: i5.ToastrService }, { type: i6.EnvironmentService }, { type: i7.DomSanitizer }, { type: i8.ValidationService }, { type: i9.NgbModal }], { myInputVariable: [{
            type: ViewChild,
            args: ['myInput']
        }], scheduleConfirmation: [{
            type: ViewChild,
            args: ['scheduleConfirmation', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CourseDetailsAddComponent, { className: "CourseDetailsAddComponent" }); })();
//# sourceMappingURL=course-details-add.component.js.map