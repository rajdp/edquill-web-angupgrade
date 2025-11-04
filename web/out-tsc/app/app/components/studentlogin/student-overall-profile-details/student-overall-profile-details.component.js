import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { timeZone } from '../../../shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/category.service";
import * as i3 from "../../../shared/service/configuration.service";
import * as i4 from "ngx-toastr";
import * as i5 from "@ng-bootstrap/ng-bootstrap";
import * as i6 from "../../../shared/service/student.service";
import * as i7 from "../../../shared/service/validation.service";
import * as i8 from "../../../shared/service/common.service";
import * as i9 from "../../../shared/service/class.service";
import * as i10 from "@angular/forms";
import * as i11 from "@angular/router";
import * as i12 from "../../../shared/service/nav.service";
import * as i13 from "../../../shared/service/creator.service";
import * as i14 from "@angular/common";
import * as i15 from "@ng-select/ng-select";
import * as i16 from "@nodro7/angular-mydatepicker";
import * as i17 from "../student-report/student-report.component";
import * as i18 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["viewoveralldetails"];
const _c1 = ["voidClass"];
const _c2 = () => ["0", ""];
function StudentOverallProfileDetailsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40)(1, "div", 41)(2, "span", 42);
    i0.ɵɵtext(3, "Loading...");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "p", 43);
    i0.ɵɵtext(5, "Loading student details...");
    i0.ɵɵelementEnd()();
} }
function StudentOverallProfileDetailsComponent_div_13_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 45);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].first_name) != "" ? ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].first_name : "-");
} }
function StudentOverallProfileDetailsComponent_div_13_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "input", 46);
    i0.ɵɵelementEnd();
} }
function StudentOverallProfileDetailsComponent_div_13_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 45);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].last_name) != "" ? ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].last_name : "-");
} }
function StudentOverallProfileDetailsComponent_div_13_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "input", 47);
    i0.ɵɵelementEnd();
} }
function StudentOverallProfileDetailsComponent_div_13_td_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 48);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].email_id) != "" ? ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].email_id : "-");
} }
function StudentOverallProfileDetailsComponent_div_13_td_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "input", 49);
    i0.ɵɵelementEnd();
} }
function StudentOverallProfileDetailsComponent_div_13_td_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 45);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].gender) != "" ? ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].gender : "-");
} }
function StudentOverallProfileDetailsComponent_div_13_td_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "select", 50)(2, "option", 51);
    i0.ɵɵtext(3, "Select Gender");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "option", 52);
    i0.ɵɵtext(5, "Male");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "option", 53);
    i0.ɵɵtext(7, "Female");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "option", 54);
    i0.ɵɵtext(9, "Do not want to disclose");
    i0.ɵɵelementEnd()()();
} }
function StudentOverallProfileDetailsComponent_div_13_td_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 48);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].birthday) != "0000-00-00" ? i0.ɵɵpipeBind2(3, 1, ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].birthday, "MM/dd/yyyy") : "-");
} }
function StudentOverallProfileDetailsComponent_div_13_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td")(1, "div", 55)(2, "input", 56, 2);
    i0.ɵɵlistener("keypress", function StudentOverallProfileDetailsComponent_div_13_td_26_Template_input_keypress_2_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.datePattern($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 57)(5, "button", 58);
    i0.ɵɵlistener("click", function StudentOverallProfileDetailsComponent_div_13_td_26_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r3); const dp_r4 = i0.ɵɵreference(3); return i0.ɵɵresetView(dp_r4.toggleCalendar()); });
    i0.ɵɵelement(6, "i", 59);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("options", ctx_r1.dobDpOtions);
} }
function StudentOverallProfileDetailsComponent_div_13_td_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 45);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].grade_id) != "0" && (ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].grade_id) ? ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].grade_name : "-");
} }
function StudentOverallProfileDetailsComponent_div_13_td_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "ng-select", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.gradeData);
} }
function StudentOverallProfileDetailsComponent_div_13_td_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 45);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].school_idno) != "" ? ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].school_idno : "-");
} }
function StudentOverallProfileDetailsComponent_div_13_td_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "input", 61);
    i0.ɵɵelementEnd();
} }
function StudentOverallProfileDetailsComponent_div_13_td_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 48);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].mobile[0]) != "" ? ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].mobile[0] : "-");
} }
function StudentOverallProfileDetailsComponent_div_13_td_39_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td")(1, "input", 62);
    i0.ɵɵlistener("keypress", function StudentOverallProfileDetailsComponent_div_13_td_39_Template_input_keypress_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.numberPattern($event)); });
    i0.ɵɵelementEnd()();
} }
function StudentOverallProfileDetailsComponent_div_13_td_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 48);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].mobile[1]) != "" ? ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].mobile[1] : "-");
} }
function StudentOverallProfileDetailsComponent_div_13_td_44_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td")(1, "input", 63);
    i0.ɵɵlistener("keypress", function StudentOverallProfileDetailsComponent_div_13_td_44_Template_input_keypress_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.numberPattern($event)); });
    i0.ɵɵelementEnd()();
} }
function StudentOverallProfileDetailsComponent_div_13_td_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 48);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].mobile[2]) != "" ? ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].mobile[2] : "-");
} }
function StudentOverallProfileDetailsComponent_div_13_td_48_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td")(1, "input", 64);
    i0.ɵɵlistener("keypress", function StudentOverallProfileDetailsComponent_div_13_td_48_Template_input_keypress_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.numberPattern($event)); });
    i0.ɵɵelementEnd()();
} }
function StudentOverallProfileDetailsComponent_div_13_td_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 45)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].status) == "1" ? "Active" : (ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].status) == "2" ? "Suspended" : (ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].status) == "3" ? "Disengaged" : (ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].status) == "4" ? "Deleted" : "-");
} }
function StudentOverallProfileDetailsComponent_div_13_td_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "select", 65)(2, "option", 66);
    i0.ɵɵtext(3, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "option", 67);
    i0.ɵɵtext(5, "Suspended");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "option", 68);
    i0.ɵɵtext(7, "Disengaged");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "option", 69);
    i0.ɵɵtext(9, "Deleted");
    i0.ɵɵelementEnd()()();
} }
function StudentOverallProfileDetailsComponent_div_13_td_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 48);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].registration_date) != "0000-00-00" ? i0.ɵɵpipeBind2(3, 1, ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].registration_date, "MM/dd/yyyy") : "-");
} }
function StudentOverallProfileDetailsComponent_div_13_td_58_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td")(1, "div", 55)(2, "input", 70, 2);
    i0.ɵɵlistener("keypress", function StudentOverallProfileDetailsComponent_div_13_td_58_Template_input_keypress_2_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.datePattern($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 57)(5, "button", 58);
    i0.ɵɵlistener("click", function StudentOverallProfileDetailsComponent_div_13_td_58_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r8); const dp_r9 = i0.ɵɵreference(3); return i0.ɵɵresetView(dp_r9.toggleCalendar()); });
    i0.ɵɵelement(6, "i", 59);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("options", ctx_r1.myDpOptions2);
} }
function StudentOverallProfileDetailsComponent_div_13_td_61_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Available");
    i0.ɵɵelementEnd();
} }
function StudentOverallProfileDetailsComponent_div_13_td_61_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Not-Available");
    i0.ɵɵelementEnd();
} }
function StudentOverallProfileDetailsComponent_div_13_td_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, StudentOverallProfileDetailsComponent_div_13_td_61_span_1_Template, 2, 0, "span", 28)(2, StudentOverallProfileDetailsComponent_div_13_td_61_span_2_Template, 2, 0, "span", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].profile_url) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.studentProfileDetails[0] == null ? null : ctx_r1.studentProfileDetails[0].profile_url) == "");
} }
function StudentOverallProfileDetailsComponent_div_13_td_62_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td")(1, "div", 71)(2, "input", 72, 3);
    i0.ɵɵlistener("change", function StudentOverallProfileDetailsComponent_div_13_td_62_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.encodeImageFileAsURL($event)); });
    i0.ɵɵelementEnd()()();
} }
function StudentOverallProfileDetailsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "form", 26)(2, "table", 27)(3, "tbody")(4, "tr")(5, "td");
    i0.ɵɵtext(6, "First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, StudentOverallProfileDetailsComponent_div_13_td_7_Template, 3, 1, "td", 28)(8, StudentOverallProfileDetailsComponent_div_13_td_8_Template, 2, 0, "td", 28);
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10, "Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, StudentOverallProfileDetailsComponent_div_13_td_11_Template, 3, 1, "td", 28)(12, StudentOverallProfileDetailsComponent_div_13_td_12_Template, 2, 0, "td", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "tr")(14, "td");
    i0.ɵɵtext(15, "Email Address");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, StudentOverallProfileDetailsComponent_div_13_td_16_Template, 3, 1, "td", 28)(17, StudentOverallProfileDetailsComponent_div_13_td_17_Template, 2, 0, "td", 28);
    i0.ɵɵelementStart(18, "td");
    i0.ɵɵtext(19, "Gender");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(20, StudentOverallProfileDetailsComponent_div_13_td_20_Template, 3, 1, "td", 28)(21, StudentOverallProfileDetailsComponent_div_13_td_21_Template, 10, 0, "td", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "tr")(23, "td");
    i0.ɵɵtext(24, "Date of Birth");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(25, StudentOverallProfileDetailsComponent_div_13_td_25_Template, 4, 4, "td", 28)(26, StudentOverallProfileDetailsComponent_div_13_td_26_Template, 7, 1, "td", 28);
    i0.ɵɵelementStart(27, "td");
    i0.ɵɵtext(28, "Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(29, StudentOverallProfileDetailsComponent_div_13_td_29_Template, 3, 1, "td", 28)(30, StudentOverallProfileDetailsComponent_div_13_td_30_Template, 2, 1, "td", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "tr")(32, "td");
    i0.ɵɵtext(33, "Student ID");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(34, StudentOverallProfileDetailsComponent_div_13_td_34_Template, 3, 1, "td", 28)(35, StudentOverallProfileDetailsComponent_div_13_td_35_Template, 2, 0, "td", 28);
    i0.ɵɵelementStart(36, "td");
    i0.ɵɵtext(37, "Contact Number");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(38, StudentOverallProfileDetailsComponent_div_13_td_38_Template, 3, 1, "td", 28)(39, StudentOverallProfileDetailsComponent_div_13_td_39_Template, 2, 0, "td", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "tr")(41, "td");
    i0.ɵɵtext(42, "Contact Number 2");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(43, StudentOverallProfileDetailsComponent_div_13_td_43_Template, 3, 1, "td", 28)(44, StudentOverallProfileDetailsComponent_div_13_td_44_Template, 2, 0, "td", 28);
    i0.ɵɵelementStart(45, "td");
    i0.ɵɵtext(46, "Contact Number 3");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(47, StudentOverallProfileDetailsComponent_div_13_td_47_Template, 3, 1, "td", 28)(48, StudentOverallProfileDetailsComponent_div_13_td_48_Template, 2, 0, "td", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "tr")(50, "td");
    i0.ɵɵtext(51, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(52, StudentOverallProfileDetailsComponent_div_13_td_52_Template, 3, 1, "td", 44)(53, StudentOverallProfileDetailsComponent_div_13_td_53_Template, 10, 0, "td", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "tr")(55, "td");
    i0.ɵɵtext(56, "Registration Date");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(57, StudentOverallProfileDetailsComponent_div_13_td_57_Template, 4, 4, "td", 28)(58, StudentOverallProfileDetailsComponent_div_13_td_58_Template, 7, 1, "td", 28);
    i0.ɵɵelementStart(59, "td");
    i0.ɵɵtext(60, "Profile Photo");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(61, StudentOverallProfileDetailsComponent_div_13_td_61_Template, 3, 2, "td", 28)(62, StudentOverallProfileDetailsComponent_div_13_td_62_Template, 4, 0, "td", 28);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r1.studentForm);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", !ctx_r1.studentTableEdit);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentTableEdit);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.studentTableEdit);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentTableEdit);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1.studentTableEdit);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentTableEdit);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.studentTableEdit);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentTableEdit);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1.studentTableEdit);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentTableEdit);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.studentTableEdit);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentTableEdit);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1.studentTableEdit);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentTableEdit);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.studentTableEdit);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentTableEdit);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1.studentTableEdit);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentTableEdit);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.studentTableEdit);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentTableEdit);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1.studentTableEdit);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentTableEdit);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1.studentTableEdit);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentTableEdit);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.studentTableEdit);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentTableEdit);
} }
function StudentOverallProfileDetailsComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 45);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.studentProfileDetails.length != 0 && ctx_r1.serviceCalled ? ctx_r1.studentProfileDetails[0]["parent" + ctx_r1.selectedParent + "_firstname"] != "" ? ctx_r1.studentProfileDetails[0]["parent" + ctx_r1.selectedParent + "_firstname"] : "-" : "-", "");
} }
function StudentOverallProfileDetailsComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "input", 73);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("formControlName", "parent" + ctx_r1.selectedParent + "first_name");
} }
function StudentOverallProfileDetailsComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 45);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.studentProfileDetails.length != 0 && ctx_r1.serviceCalled ? ctx_r1.studentProfileDetails[0]["parent" + ctx_r1.selectedParent + "_lastname"] && ctx_r1.studentProfileDetails[0]["parent" + ctx_r1.selectedParent + "_lastname"] != "" ? ctx_r1.studentProfileDetails[0]["parent" + ctx_r1.selectedParent + "_lastname"] : "-" : "-", "");
} }
function StudentOverallProfileDetailsComponent_td_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "input", 73);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("formControlName", "parent" + ctx_r1.selectedParent + "last_name");
} }
function StudentOverallProfileDetailsComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 48);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.studentProfileDetails.length != 0 && ctx_r1.serviceCalled && ctx_r1.studentProfileDetails[0]["parent" + ctx_r1.selectedParent + "_email_ids"] && ctx_r1.studentProfileDetails[0]["parent" + ctx_r1.selectedParent + "_email_ids"][0] != "" ? ctx_r1.studentProfileDetails[0]["parent" + ctx_r1.selectedParent + "_email_ids"][0] : "-", "");
} }
function StudentOverallProfileDetailsComponent_td_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "input", 74);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("formControlName", "parent" + ctx_r1.selectedParent + "email_id1");
} }
function StudentOverallProfileDetailsComponent_td_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 48);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.studentProfileDetails.length != 0 && ctx_r1.serviceCalled && ctx_r1.studentProfileDetails[0]["parent" + ctx_r1.selectedParent + "_email_ids"] && ctx_r1.studentProfileDetails[0]["parent" + ctx_r1.selectedParent + "_email_ids"][1] != "" ? ctx_r1.studentProfileDetails[0]["parent" + ctx_r1.selectedParent + "_email_ids"][1] : "-", "");
} }
function StudentOverallProfileDetailsComponent_td_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "input", 75);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("formControlName", "parent" + ctx_r1.selectedParent + "email_id2");
} }
function StudentOverallProfileDetailsComponent_td_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 45);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.studentProfileDetails.length != 0 && ctx_r1.serviceCalled && ctx_r1.studentProfileDetails[0].address && ctx_r1.studentProfileDetails[0].address[ctx_r1.selectedParent - 1] && ctx_r1.studentProfileDetails[0].address[ctx_r1.selectedParent - 1].address1 != "" ? ctx_r1.studentProfileDetails[0].address[ctx_r1.selectedParent - 1].address1 : "-", "");
} }
function StudentOverallProfileDetailsComponent_td_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "input", 76);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("formControlName", "parent" + ctx_r1.selectedParent + "address1");
} }
function StudentOverallProfileDetailsComponent_td_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 45);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.studentProfileDetails.length != 0 && ctx_r1.serviceCalled && ctx_r1.studentProfileDetails[0].address && ctx_r1.studentProfileDetails[0].address[ctx_r1.selectedParent - 1] && ctx_r1.studentProfileDetails[0].address[ctx_r1.selectedParent - 1].address2 != "" ? ctx_r1.studentProfileDetails[0].address[ctx_r1.selectedParent - 1].address2 : "-", "");
} }
function StudentOverallProfileDetailsComponent_td_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "input", 77);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("formControlName", "parent" + ctx_r1.selectedParent + "address2");
} }
function StudentOverallProfileDetailsComponent_td_64_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 45);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.studentProfileDetails.length != 0 && ctx_r1.serviceCalled && ctx_r1.studentProfileDetails[0].address && ctx_r1.studentProfileDetails[0].address[ctx_r1.selectedParent - 1] && ctx_r1.studentProfileDetails[0].address[ctx_r1.selectedParent - 1].city != "" ? ctx_r1.studentProfileDetails[0].address[ctx_r1.selectedParent - 1].city : "-", "");
} }
function StudentOverallProfileDetailsComponent_td_65_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "input", 78);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("formControlName", "parent" + ctx_r1.selectedParent + "city");
} }
function StudentOverallProfileDetailsComponent_td_68_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 79)(1, "span", 45);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.studentProfileDetails.length != 0 && ctx_r1.serviceCalled && ctx_r1.studentProfileDetails[0].address && ctx_r1.studentProfileDetails[0].address[ctx_r1.selectedParent - 1] && ctx_r1.studentProfileDetails[0].address[ctx_r1.selectedParent - 1].state_name != "" ? ctx_r1.studentProfileDetails[0].address[ctx_r1.selectedParent - 1].state_name : "-", "");
} }
function StudentOverallProfileDetailsComponent_td_69_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "ng-select", 80);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.stateListData);
} }
function StudentOverallProfileDetailsComponent_td_73_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 79)(1, "span", 45);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.studentProfileDetails.length != 0 && ctx_r1.serviceCalled && ctx_r1.studentProfileDetails[0].address && ctx_r1.studentProfileDetails[0].address[ctx_r1.selectedParent - 1] && ctx_r1.studentProfileDetails[0].address[ctx_r1.selectedParent - 1].country_name != "" ? ctx_r1.studentProfileDetails[0].address[ctx_r1.selectedParent - 1].country_name : "-", "");
} }
function StudentOverallProfileDetailsComponent_td_74_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td")(1, "ng-select", 81);
    i0.ɵɵlistener("change", function StudentOverallProfileDetailsComponent_td_74_Template_ng_select_change_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.stateList($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.countryListData);
} }
function StudentOverallProfileDetailsComponent_td_77_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 45);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.studentProfileDetails.length != 0 && ctx_r1.serviceCalled && ctx_r1.studentProfileDetails[0].address && ctx_r1.studentProfileDetails[0].address[ctx_r1.selectedParent - 1] && ctx_r1.studentProfileDetails[0].address[ctx_r1.selectedParent - 1].postal_code != "" ? ctx_r1.studentProfileDetails[0].address[ctx_r1.selectedParent - 1].postal_code : "-", "");
} }
function StudentOverallProfileDetailsComponent_td_78_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "input", 82);
    i0.ɵɵelementEnd();
} }
function StudentOverallProfileDetailsComponent_tr_105_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 83)(1, "td", 84)(2, "span", 85);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function StudentOverallProfileDetailsComponent_tr_106_span_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 48);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const classData_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(classData_r13.notify_status == "0" ? "No" : "Yes");
} }
function StudentOverallProfileDetailsComponent_tr_106_select_22_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 93);
    i0.ɵɵlistener("change", function StudentOverallProfileDetailsComponent_tr_106_select_22_Template_select_change_0_listener($event) { i0.ɵɵrestoreView(_r14); const classData_r13 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.studentNotifyStatus(classData_r13, $event.target.value)); });
    i0.ɵɵelementStart(1, "option", 66);
    i0.ɵɵtext(2, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "option", 94);
    i0.ɵɵtext(4, "No");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const classData_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", classData_r13.notify_status);
} }
function StudentOverallProfileDetailsComponent_tr_106_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 86);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 87)(4, "span", 88);
    i0.ɵɵlistener("click", function StudentOverallProfileDetailsComponent_tr_106_Template_span_click_4_listener() { const classData_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.viewClassDetails(classData_r13)); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td", 86);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td", 86);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "customDateFormat");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td", 86);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "customDateFormat");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td", 86);
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "customDateFormat");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td", 86);
    i0.ɵɵtext(18);
    i0.ɵɵpipe(19, "customDateFormat");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "td", 89);
    i0.ɵɵlistener("click", function StudentOverallProfileDetailsComponent_tr_106_Template_td_click_20_listener() { const classData_r13 = i0.ɵɵrestoreView(_r12).$implicit; return i0.ɵɵresetView(classData_r13.showText = false); });
    i0.ɵɵtemplate(21, StudentOverallProfileDetailsComponent_tr_106_span_21_Template, 2, 1, "span", 90)(22, StudentOverallProfileDetailsComponent_tr_106_select_22_Template, 5, 1, "select", 91);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "td", 86)(24, "img", 92);
    i0.ɵɵlistener("click", function StudentOverallProfileDetailsComponent_tr_106_Template_img_click_24_listener() { const classData_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getStudentFullDetail(classData_r13)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const classData_r13 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(classData_r13.subject != "" ? classData_r13.subject : "-");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(classData_r13.class_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(classData_r13.class_code);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 9, classData_r13.start_date));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(13, 11, classData_r13.end_date));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(16, 13, classData_r13.joining_date));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(classData_r13.drafted_date != "0000-00-00" ? i0.ɵɵpipeBind1(19, 15, classData_r13.drafted_date) : "-");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", classData_r13.showText);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !classData_r13.showText);
} }
function StudentOverallProfileDetailsComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 95)(1, "label", 96);
    i0.ɵɵtext(2, "Class List");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ng-select", 97);
    i0.ɵɵlistener("change", function StudentOverallProfileDetailsComponent_div_112_Template_ng_select_change_3_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.attendanceFilter($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("items", ctx_r1.classList)("ngModel", ctx_r1.selectedClassId);
} }
function StudentOverallProfileDetailsComponent_tr_127_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 83)(1, "td", 84)(2, "span", 85);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function StudentOverallProfileDetailsComponent_tr_128_i_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 103);
} }
function StudentOverallProfileDetailsComponent_tr_128_i_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 104);
} }
function StudentOverallProfileDetailsComponent_tr_128_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function StudentOverallProfileDetailsComponent_tr_128_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 105);
    i0.ɵɵlistener("click", function StudentOverallProfileDetailsComponent_tr_128_button_15_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r16); const attendance_r17 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addMakeUpClass(attendance_r17)); });
    i0.ɵɵelement(1, "i", 106);
    i0.ɵɵtext(2, "Schedule Make-up Class ");
    i0.ɵɵelementEnd();
} }
function StudentOverallProfileDetailsComponent_tr_128_label_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 107)(1, "span", 108);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "customDateFormat");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const attendance_r17 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", attendance_r17 == null ? null : attendance_r17.makeup_class_name, " - ", i0.ɵɵpipeBind1(3, 2, attendance_r17 == null ? null : attendance_r17.makeup_class_date), "");
} }
function StudentOverallProfileDetailsComponent_tr_128_i_17_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 109);
    i0.ɵɵlistener("click", function StudentOverallProfileDetailsComponent_tr_128_i_17_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r18 = i0.ɵɵnextContext(); const attendance_r17 = ctx_r18.$implicit; const i_r20 = ctx_r18.index; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.voidFunctionCalled(attendance_r17, i_r20)); });
    i0.ɵɵelementEnd();
} }
function StudentOverallProfileDetailsComponent_tr_128_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 87)(2, "span", 48);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td", 86);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "customDateFormat");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td", 86)(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "td", 86);
    i0.ɵɵtemplate(11, StudentOverallProfileDetailsComponent_tr_128_i_11_Template, 1, 0, "i", 98)(12, StudentOverallProfileDetailsComponent_tr_128_i_12_Template, 1, 0, "i", 99)(13, StudentOverallProfileDetailsComponent_tr_128_span_13_Template, 2, 0, "span", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td", 86);
    i0.ɵɵtemplate(15, StudentOverallProfileDetailsComponent_tr_128_button_15_Template, 3, 0, "button", 100)(16, StudentOverallProfileDetailsComponent_tr_128_label_16_Template, 4, 4, "label", 101)(17, StudentOverallProfileDetailsComponent_tr_128_i_17_Template, 1, 0, "i", 102);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const attendance_r17 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(attendance_r17.class_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(6, 10, attendance_r17.date));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", attendance_r17.start_time, " - ", attendance_r17.end_time, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", attendance_r17.attendance == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", attendance_r17.attendance == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", attendance_r17.attendance == "" && attendance_r17.attendance);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (attendance_r17 == null ? null : attendance_r17.makeup_class_id) == "" && (attendance_r17 == null ? null : attendance_r17.attendance) == "0" && (ctx_r1.auth.getRoleId() == "2" || ctx_r1.auth.getRoleId() == "4" && ctx_r1.auth.getSessionData("teacher_type") != "0"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (attendance_r17 == null ? null : attendance_r17.makeup_class_id) != "" && (attendance_r17 == null ? null : attendance_r17.attendance) == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (attendance_r17 == null ? null : attendance_r17.makeup_class_id) != "" && i0.ɵɵpureFunction0(12, _c2).indexOf(attendance_r17.attendance) > -1 && attendance_r17.allow_void_class);
} }
function StudentOverallProfileDetailsComponent_ng_template_129_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 110)(1, "h4", 111);
    i0.ɵɵtext(2, "Assignment Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 112);
    i0.ɵɵlistener("click", function StudentOverallProfileDetailsComponent_ng_template_129_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r21); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeOverAll()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 113);
    i0.ɵɵelement(5, "app-student-report", 114);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("classData", ctx_r1.classData)("studentId", ctx_r1.studentId);
} }
function StudentOverallProfileDetailsComponent_ng_template_131_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 115)(1, "h5", 116);
    i0.ɵɵtext(2, "Void Class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 117);
    i0.ɵɵlistener("click", function StudentOverallProfileDetailsComponent_ng_template_131_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 113)(5, "div", 118)(6, "p", 119)(7, "strong");
    i0.ɵɵtext(8, " Are you sure want to void the");
    i0.ɵɵelementStart(9, "span", 120);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, "?");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(12, "div", 121)(13, "button", 122);
    i0.ɵɵlistener("click", function StudentOverallProfileDetailsComponent_ng_template_131_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.modalRef.close()); });
    i0.ɵɵtext(14, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 58);
    i0.ɵɵlistener("click", function StudentOverallProfileDetailsComponent_ng_template_131_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deleteStudentList()); });
    i0.ɵɵtext(16, "Yes");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r1.voidClassData.makeup_class_name);
} }
export class StudentOverallProfileDetailsComponent {
    constructor(auth, category, confi, toastr, modalService, student, validation, common, classes, formBuilder, router, navServices, creatorService, datePipe) {
        this.auth = auth;
        this.category = category;
        this.confi = confi;
        this.toastr = toastr;
        this.modalService = modalService;
        this.student = student;
        this.validation = validation;
        this.common = common;
        this.classes = classes;
        this.formBuilder = formBuilder;
        this.router = router;
        this.navServices = navServices;
        this.creatorService = creatorService;
        this.datePipe = datePipe;
        this.dobDpOtions = {
            dateRange: false,
            dateFormat: 'mm/dd/yyyy',
            firstDayOfWeek: 'su',
            disableSince: {
                year: new Date().getFullYear(),
                month: new Date().getMonth() + 1,
                day: new Date().getDate() + 1
            },
        };
        this.myDpOptions2 = {
            dateRange: false,
            dateFormat: 'mm/dd/yyyy',
            firstDayOfWeek: 'su'
        };
        this.studentProfileDetails = [];
        this.gradeData = [];
        this.studentTableEdit = false;
        this.selectedParent = 1;
        this.parentTableEdit = false;
        this.stateListData = [];
        this.countryListData = [];
        this.studentFullClassListData = [];
        this.attendanceListData = [];
        this.classList = [];
        this.selectedClassId = '';
        this.serviceCalled = false;
        this.voidClassData = {};
        this.voidClassIndex = 0;
        this.setDate = new Date().toLocaleString('en-US', { timeZone: timeZone.location });
        this.studentId = JSON.parse(this.auth.getSessionData('student-profile-details')).user_id;
        this.studentDetails();
        this.studentForm = this.formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            email_id: ['', Validators.required],
            gender: [''],
            dob: [''],
            grade: ['', Validators.required],
            studentid: [''],
            mobile: [''],
            mobile1: [''],
            mobile2: [''],
            status: ['', Validators.required],
            registration_date: [''],
            parent1first_name: [''],
            parent2first_name: [''],
            parent1last_name: [''],
            parent2last_name: [''],
            parent1email_id1: [''],
            parent2email_id1: [''],
            parent1address1: '',
            parent2address1: '',
            parent1address2: '',
            parent2address2: '',
            parent1city: '',
            parent2city: '',
            parent1state: '',
            parent2state: '',
            parent1country: '',
            parent2country: '',
        });
        this.imgUrl = this.confi.getimgUrl();
        console.log(this.studentId, 'studentId');
        const date = new Date(this.setDate);
        this.currentDate = this.datePipe.transform(date, 'dd-MM-yyyy');
    }
    ngOnDestroy() {
        this.creatorService.changeViewList(false);
        this.navServices.collapseSidebar = false;
    }
    ngOnInit() {
        this.creatorService.changeViewList(true);
        this.navServices.collapseSidebar = true;
    }
    numberPattern(event) {
        this.validation.numberValidate1(event);
    }
    datePattern(event) {
        this.validation.dateValidation(event);
    }
    tabChange(id) {
        this.selectedParent = id;
        this.parentTableEdit = false;
    }
    backFunction() {
        this.router.navigate(['/users/user-list']);
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
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            image_path: [{
                    image: getUrlEdu[1],
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
            console.error(error, 'wrongFormat');
        });
    }
    uploadSuccess(successData) {
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
    attendanceFilter(value) {
        console.log(value, 'class');
        this.attendanceList(value ? value.class_id : '');
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
            console.log(successData, 'successData');
            if (successData.IsSuccess) {
                this.gradeData = successData.ResponseObject;
                // Check if studentProfileDetails exists and has data before accessing
                if (this.studentProfileDetails && this.studentProfileDetails.length > 0) {
                    this.gradeData.forEach((items) => {
                        if (items.grade_id == this.studentProfileDetails[0].grade_id) {
                            this.studentProfileDetails[0].grade_name = items.grade_name;
                        }
                    });
                }
            }
        }, (error) => {
            console.error(error, 'error');
        });
    }
    studentNotifyStatus(classData, notifyType) {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.studentId,
            class_id: classData.class_id,
            notify_status: notifyType
        };
        this.student.studentNotifyStatus(payload).subscribe((successData) => {
            this.studentFullClassList();
        }, (error) => {
            console.error(error, 'studentFullClassList');
        });
    }
    studentFullClassList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.studentId
        };
        console.log('Fetching class list with data:', data);
        this.student.getAllClassOfStudent(data).subscribe((successData) => {
            this.studentFullClassListSuccess(successData);
        }, (error) => {
            console.error('Error fetching class list:', error);
            this.studentFullClassListData = [];
            this.classList = [];
        });
    }
    studentFullClassListSuccess(successData) {
        console.log(successData, 'studentFullClassListSuccess');
        if (successData.IsSuccess) {
            this.studentFullClassListData = successData.ResponseObject || [];
            this.classList = []; // Clear classList before populating
            this.studentFullClassListData.forEach((items) => {
                items.showText = true;
                this.classList.push(items);
            });
            this.classList.unshift({ class_id: '', class_name: 'All Class' });
            console.log(this.classList, 'classList');
            console.log(this.studentFullClassListData, 'studentFullClassListData');
            this.attendanceList('');
        }
        else {
            console.error('Failed to load class list:', successData.ErrorObject);
            this.studentFullClassListData = [];
            this.classList = [];
        }
    }
    stateList(event) {
        this.stateListData = [];
        this.studentForm.controls['parent' + this.selectedParent + 'state'].patchValue(null);
        const countryVal = event;
        // console.log(this.studentform.controls.country.value, 'jhkj');
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
    attendanceList(classId) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_id: this.studentId,
            class_id: classId
        };
        this.student.studentAttendanceList(data).subscribe((successData) => {
            this.attendanceListSuccess(successData);
        }, (error) => {
            console.error(error, 'AttendanceList');
        });
    }
    attendanceListSuccess(successData) {
        console.log(successData, 'attendanceListSuccess');
        if (successData.IsSuccess) {
            this.attendanceListData = successData.ResponseObject || [];
            console.log('Attendance records loaded:', this.attendanceListData.length);
            this.attendanceListData.forEach((student) => {
                if (student.makeup_class_id != '') {
                    const currentDate = new Date(new Date().toLocaleString('en-US', { timeZone: timeZone.location }));
                    const makeupDate = new Date(student.makeup_class_date);
                    student.allow_void_class = currentDate < makeupDate;
                    console.log(student.allow_void_class, 'student.allow_void_class');
                }
                else {
                    student.allow_void_class = false;
                }
            });
        }
        else {
            console.error('Failed to load attendance list:', successData.ErrorObject);
            this.attendanceListData = [];
        }
    }
    studentDetails() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            type: 'list',
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.studentId
        };
        this.student.getStudentList(data).subscribe((successData) => {
            this.studentProfileDetailsSuccess(successData);
        }, (error) => {
            this.serviceCalled = false;
            console.error(error, 'error_studentDetails');
        });
    }
    studentProfileDetailsSuccess(successData) {
        console.log(successData, 'successData');
        this.studentProfileDetails = successData.ResponseObject;
        this.serviceCalled = true;
        this.gradeList();
        this.studentFullClassList();
        console.log(this.studentProfileDetails, 'studentProfileDetails');
    }
    closeOverAll() {
        this.modalRef.close('viewoveralldetails');
    }
    getStudentFullDetail(item) {
        this.classData = item;
        this.modalRef = this.modalService.open(this.viewoveralldetails, { size: 'xl', windowClass: 'reportcardContent' });
    }
    addMakeUpClass(event) {
        event.absent_date = {
            isRange: false,
            singleDate: { jsDate: new Date(event.date) }
        };
        event.student_name = this.studentProfileDetails[0]?.first_name + ' ' + this.studentProfileDetails[0]?.last_name;
        this.auth.setSessionData('makeUpClass_calledFrom', 'profile');
        this.auth.setSessionData('classSelected_makeUp', JSON.stringify(event));
        this.auth.setSessionData('studentSelected_makeUp', event.student_id);
        this.router.navigate(['/schedule/schedule-page']);
    }
    voidFunctionCalled(data, index) {
        console.log(data, 'attendance');
        this.voidClassData = data;
        this.voidClassIndex = index;
        this.modalRef = this.modalService.open(this.voidClass);
    }
    deleteStudentList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.voidClassData.makeup_class_id,
            student_id: this.studentId,
            make_up: '1'
        };
        this.classes.deleteStudentList(data).subscribe((successData) => {
            this.deleteStudentListSuccess(successData);
        }, (error) => {
            console.log(error);
        });
    }
    deleteStudentListSuccess(successData) {
        if (successData.IsSuccess) {
            this.modalRef.close();
            this.toastr.success(successData.ResponseObject);
            this.attendanceList('');
        }
        else {
            this.toastr.error(successData.ResponseObject);
        }
    }
    viewClassDetails(classData) {
        console.log('Viewing class details:', classData);
        // Store class information in session
        this.auth.setSessionData('class-id', classData.class_id);
        // Set schedule_id to empty string if not available (backend will handle it)
        this.auth.setSessionData('schedule_id', classData.schedule_id || '');
        // Navigate to class details page
        this.router.navigate(['/studentlogin/class-detail']);
    }
    static { this.ɵfac = function StudentOverallProfileDetailsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentOverallProfileDetailsComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.CategoryService), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i4.ToastrService), i0.ɵɵdirectiveInject(i5.NgbModal), i0.ɵɵdirectiveInject(i6.StudentService), i0.ɵɵdirectiveInject(i7.ValidationService), i0.ɵɵdirectiveInject(i8.CommonService), i0.ɵɵdirectiveInject(i9.ClassService), i0.ɵɵdirectiveInject(i10.FormBuilder), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(i12.NavService), i0.ɵɵdirectiveInject(i13.CreatorService), i0.ɵɵdirectiveInject(i14.DatePipe)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentOverallProfileDetailsComponent, selectors: [["app-student-overall-profile-details"]], viewQuery: function StudentOverallProfileDetailsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewoveralldetails = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.voidClass = _t.first);
        } }, decls: 133, vars: 28, consts: [["viewoveralldetails", ""], ["voidClass", ""], ["dp", "angular-mydatepicker"], ["myInput", ""], [1, "container-fluid"], [1, "card"], [1, "card-body", "p-4"], [1, "row"], [1, "col-md-12"], [1, "pull-right", "btn", "btn-outline-primary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-long-arrow-left", "fa-1x"], [1, "row", "mt-2"], [1, "col-md-12", "col-12", "mb-2"], [1, "font-weight-bold", "color-primary", 2, "font-size", "18px"], ["class", "col-12 text-center py-5", 4, "ngIf"], ["class", "col-12 table-responsive userTable", 4, "ngIf"], [1, "row", "mt-4"], [1, "col-md-12", "col-12"], ["role", "tablist", 1, "nav", "nav-tabs", "justify-content-left"], [1, "nav-item"], ["data-toggle", "tab", "href", "#home", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active", 3, "click"], ["data-toggle", "tab", "href", "#home", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link", 3, "click"], [1, "col-md-12", "col-12", "mt-3"], ["id", "myTabContent", 1, "tab-content"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "col-12", "table-responsive", "userTable"], [3, "formGroup"], [1, "table", "text-left", "table-bordered"], [4, "ngIf"], ["class", "text-capitalize", 4, "ngIf"], [1, "font-weight-bold", 2, "font-size", "18px"], [1, "col-md-12", "col-12", "table-responsive", "student-profile", 2, "overflow-y", "auto", "max-height", "70vh"], [1, "table", "table-bordered"], [2, "background", "#cdd9f6"], [2, "position", "sticky", "top", "0", "background", "#cdd9f6"], ["class", "text-center", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "col-12"], ["class", "form-group col-4 col-md-4 pl-0", 4, "ngIf"], [1, "col-md-12", "col-12", "student-profile", 2, "overflow-y", "auto", "max-height", "70vh"], [1, "col-12", "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "sr-only"], [1, "mt-2"], ["class", "text-capitalize font-weight-bold", 4, "ngIf"], [1, "text-capitalize", "font-weight-bold"], ["placeholder", "First Name", "type", "text", "formControlName", "first_name", "required", "", 1, "form-control"], ["placeholder", "Last Name", "type", "text", "formControlName", "last_name", "required", "", 1, "form-control"], [1, "font-weight-bold"], ["placeholder", "Email_id", "type", "text", "pattern", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$", "formControlName", "email_id", "required", "", 1, "form-control"], ["id", "validationCustom07", "formControlName", "gender", 1, "form-control"], ["value", "", "disabled", ""], ["value", "male"], ["value", "female"], ["value", "n/a"], [1, "d-flex", "align-items-baseline"], ["placeholder", "MM/dd/yyyy", "name", "dp", "formControlName", "dob", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "keypress", "options"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-calendar-o"], ["bindLabel", "grade_name", "bindValue", "grade_id", "placeholder", "Please Select", "typeToSearchText", "", "formControlName", "grade", 3, "items"], ["placeholder", "Student ID", "type", "text", "formControlName", "studentid", 1, "form-control"], ["placeholder", "Contact Number 1", "type", "text", "formControlName", "mobile", "maxlength", "15", "minlength", "10", 1, "form-control", 3, "keypress"], ["placeholder", "Contact Number 2", "type", "text", "formControlName", "mobile1", "maxlength", "15", "minlength", "10", 1, "form-control", 3, "keypress"], ["placeholder", "Contact Number 3", "type", "text", "formControlName", "mobile2", "maxlength", "15", "minlength", "10", 1, "form-control", 3, "keypress"], ["id", "selectStudent", "formControlName", "status", 1, "form-control"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["placeholder", "MM/dd/yyyy", "name", "dp", "formControlName", "registration_date", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "keypress", "options"], [1, "col-xl-8", "col-md-7", "color-primary"], ["type", "file", "accept", ".png, .jpeg, .jpg", 1, "custom-upload-input", 3, "change"], ["placeholder", "First Name", "type", "text", 1, "form-control", 3, "formControlName"], ["placeholder", "Email_id 1", "pattern", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$", "type", "text", 1, "form-control", 3, "formControlName"], ["placeholder", "Email_id 2", "pattern", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$", "type", "text", 1, "form-control", 3, "formControlName"], ["placeholder", "Address 1", "type", "text", 1, "form-control", 3, "formControlName"], ["placeholder", "Address 2", "type", "text", 1, "form-control", 3, "formControlName"], ["placeholder", "City", "type", "text", 1, "form-control", 3, "formControlName"], [1, "text-capitalize"], ["bindLabel", "name", "bindValue", "state_id", "placeholder", "Please Select", "formControlName", "state", 3, "items"], ["bindLabel", "name", "bindValue", "country_id", "placeholder", "Please Select", "formControlName", "country", 3, "change", "items"], ["placeholder", "Zip Code", "type", "text", "formControlName", "zip", 1, "form-control"], [1, "text-center"], ["colspan", "12"], [1, "color-primary"], [2, "vertical-align", "middle"], [1, "color-primary", 2, "vertical-align", "middle"], [1, "font-weight-bold", "cursor", 3, "click"], [1, "color-primary", "cursor", 2, "vertical-align", "middle", 3, "click"], ["class", "font-weight-bold", 4, "ngIf"], ["class", "form-control", 3, "value", "change", 4, "ngIf"], ["alt", "", "src", "assets/images/icons/report.png", "title", "Report", 1, "mx-2", 2, "width", "23px", 3, "click"], [1, "form-control", 3, "change", "value"], ["value", "0"], [1, "form-group", "col-4", "col-md-4", "pl-0"], [1, "col-xl-12", "col-md-12", "pl-0", "font-weight-bold", 2, "font-size", "16px"], ["bindLabel", "class_name", "bindValue", "class_id", "placeholder", "Please Select", 3, "change", "items", "ngModel"], ["style", "font-size: 18px", "class", "fa fa-check-circle color-green", 4, "ngIf"], ["style", "font-size: 18px", "class", "fa fa-times-circle color-red", 4, "ngIf"], ["class", "btn-sm-view cancel px-2 py-1", 3, "click", 4, "ngIf"], ["class", "makUpClass_text mb-0", 4, "ngIf"], ["title", "Void Class", "style", "font-size: 18px", "class", "fa fa-times-circle color-red ml-2 cursor", 3, "click", 4, "ngIf"], [1, "fa", "fa-check-circle", "color-green", 2, "font-size", "18px"], [1, "fa", "fa-times-circle", "color-red", 2, "font-size", "18px"], [1, "btn-sm-view", "cancel", "px-2", "py-1", 3, "click"], ["title", "Schedule Make-up Class", "aria-hidden", "true", 1, "fa", "fa-calendar-plus-o", "mr-1", 2, "font-size", "16px"], [1, "makUpClass_text", "mb-0"], [1, "ml-1", "color-primary", "font-weight-bold", 2, "font-size", "14px"], ["title", "Void Class", 1, "fa", "fa-times-circle", "color-red", "ml-2", "cursor", 2, "font-size", "18px", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title", "color-primary"], ["aria-hidden", "true", 1, "fa", "fa-close", "fa-lg", "mt-1", 2, "color", "#7F3486", "cursor", "pointer", "float", "right", 3, "click"], [1, "modal-body"], [3, "classData", "studentId"], [1, "modal-header", "align-items-center"], [1, "modal-title", "align-items-center", "font-weight-bold"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "col-md-12", "px-0"], [1, "mb-0"], [1, "color-primary", "ml-1"], [1, "modal-footer"], ["type", "button", 1, "btn", "cancel", 3, "click"]], template: function StudentOverallProfileDetailsComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "button", 9);
            i0.ɵɵlistener("click", function StudentOverallProfileDetailsComponent_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.backFunction()); });
            i0.ɵɵelement(6, "i", 10);
            i0.ɵɵtext(7, " Back");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "div", 11)(9, "div", 12)(10, "label", 13);
            i0.ɵɵtext(11, "Personal Details");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(12, StudentOverallProfileDetailsComponent_div_12_Template, 6, 0, "div", 14)(13, StudentOverallProfileDetailsComponent_div_13_Template, 63, 27, "div", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 16)(15, "div", 12)(16, "label", 13);
            i0.ɵɵtext(17, "Contact Details");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "div", 17)(19, "ul", 18)(20, "li", 19)(21, "a", 20);
            i0.ɵɵlistener("click", function StudentOverallProfileDetailsComponent_Template_a_click_21_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.tabChange(1)); });
            i0.ɵɵtext(22, "Contact 1");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "li", 19)(24, "a", 21);
            i0.ɵɵlistener("click", function StudentOverallProfileDetailsComponent_Template_a_click_24_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.tabChange(2)); });
            i0.ɵɵtext(25, "Contact 2");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(26, "div", 22)(27, "div", 23)(28, "div", 24)(29, "div", 7)(30, "div", 25)(31, "form", 26)(32, "table", 27)(33, "tbody")(34, "tr")(35, "td");
            i0.ɵɵtext(36, "First Name");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(37, StudentOverallProfileDetailsComponent_td_37_Template, 3, 1, "td", 28)(38, StudentOverallProfileDetailsComponent_td_38_Template, 2, 1, "td", 28);
            i0.ɵɵelementStart(39, "td");
            i0.ɵɵtext(40, "Last Name");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(41, StudentOverallProfileDetailsComponent_td_41_Template, 3, 1, "td", 28)(42, StudentOverallProfileDetailsComponent_td_42_Template, 2, 1, "td", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "tr")(44, "td");
            i0.ɵɵtext(45, "Email Address 1");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(46, StudentOverallProfileDetailsComponent_td_46_Template, 3, 1, "td", 28)(47, StudentOverallProfileDetailsComponent_td_47_Template, 2, 1, "td", 28);
            i0.ɵɵelementStart(48, "td");
            i0.ɵɵtext(49, "Email Address 2");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(50, StudentOverallProfileDetailsComponent_td_50_Template, 3, 1, "td", 28)(51, StudentOverallProfileDetailsComponent_td_51_Template, 2, 1, "td", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "tr")(53, "td");
            i0.ɵɵtext(54, "Address1");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(55, StudentOverallProfileDetailsComponent_td_55_Template, 3, 1, "td", 28)(56, StudentOverallProfileDetailsComponent_td_56_Template, 2, 1, "td", 28);
            i0.ɵɵelementStart(57, "td");
            i0.ɵɵtext(58, "Address2");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(59, StudentOverallProfileDetailsComponent_td_59_Template, 3, 1, "td", 28)(60, StudentOverallProfileDetailsComponent_td_60_Template, 2, 1, "td", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "tr")(62, "td");
            i0.ɵɵtext(63, "City");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(64, StudentOverallProfileDetailsComponent_td_64_Template, 3, 1, "td", 28)(65, StudentOverallProfileDetailsComponent_td_65_Template, 2, 1, "td", 28);
            i0.ɵɵelementStart(66, "td");
            i0.ɵɵtext(67, "State");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(68, StudentOverallProfileDetailsComponent_td_68_Template, 3, 1, "td", 29)(69, StudentOverallProfileDetailsComponent_td_69_Template, 2, 1, "td", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "tr")(71, "td");
            i0.ɵɵtext(72, "Country");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(73, StudentOverallProfileDetailsComponent_td_73_Template, 3, 1, "td", 29)(74, StudentOverallProfileDetailsComponent_td_74_Template, 2, 1, "td", 28);
            i0.ɵɵelementStart(75, "td");
            i0.ɵɵtext(76, "Zip Code");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(77, StudentOverallProfileDetailsComponent_td_77_Template, 3, 1, "td", 28)(78, StudentOverallProfileDetailsComponent_td_78_Template, 2, 0, "td", 28);
            i0.ɵɵelementEnd()()()()()()()()()();
            i0.ɵɵelementStart(79, "div", 16)(80, "div", 12)(81, "label", 30);
            i0.ɵɵtext(82, "Class Details");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(83, "div", 31)(84, "table", 32)(85, "thead", 33)(86, "th", 34);
            i0.ɵɵtext(87, "Subject");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(88, "th", 34);
            i0.ɵɵtext(89, "Class Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(90, "th", 34);
            i0.ɵɵtext(91, "Class Code");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(92, "th", 34);
            i0.ɵɵtext(93, "Start Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(94, "th", 34);
            i0.ɵɵtext(95, "End Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(96, "th", 34);
            i0.ɵɵtext(97, "Joined Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(98, "th", 34);
            i0.ɵɵtext(99, "Dropped Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(100, "th", 34);
            i0.ɵɵtext(101, "Notify Contact");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(102, "th", 34);
            i0.ɵɵtext(103, "Action");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(104, "tbody");
            i0.ɵɵtemplate(105, StudentOverallProfileDetailsComponent_tr_105_Template, 4, 0, "tr", 35)(106, StudentOverallProfileDetailsComponent_tr_106_Template, 25, 17, "tr", 36);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(107, "div", 16)(108, "div", 12)(109, "label", 30);
            i0.ɵɵtext(110, "Attendance Details");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(111, "div", 37);
            i0.ɵɵtemplate(112, StudentOverallProfileDetailsComponent_div_112_Template, 4, 2, "div", 38);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(113, "div", 39)(114, "table", 32)(115, "thead", 33)(116, "th", 34);
            i0.ɵɵtext(117, "Class Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(118, "th", 34);
            i0.ɵɵtext(119, "Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(120, "th", 34);
            i0.ɵɵtext(121, "Time Slot");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(122, "th", 34);
            i0.ɵɵtext(123, "Attendance");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(124, "th", 34);
            i0.ɵɵtext(125, "Make-up Class");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(126, "tbody");
            i0.ɵɵtemplate(127, StudentOverallProfileDetailsComponent_tr_127_Template, 4, 0, "tr", 35)(128, StudentOverallProfileDetailsComponent_tr_128_Template, 18, 13, "tr", 36);
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵtemplate(129, StudentOverallProfileDetailsComponent_ng_template_129_Template, 6, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(131, StudentOverallProfileDetailsComponent_ng_template_131_Template, 17, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("ngIf", !ctx.studentProfileDetails || ctx.studentProfileDetails.length === 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.studentProfileDetails && ctx.studentProfileDetails.length > 0);
            i0.ɵɵadvance(18);
            i0.ɵɵproperty("formGroup", ctx.studentForm);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", !ctx.parentTableEdit);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.parentTableEdit);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.parentTableEdit);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.parentTableEdit);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx.parentTableEdit);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.parentTableEdit);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.parentTableEdit);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.parentTableEdit);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx.parentTableEdit);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.parentTableEdit);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.parentTableEdit);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.parentTableEdit);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx.parentTableEdit);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.parentTableEdit);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.parentTableEdit);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.parentTableEdit);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx.parentTableEdit);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.parentTableEdit);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.parentTableEdit);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.parentTableEdit);
            i0.ɵɵadvance(27);
            i0.ɵɵproperty("ngIf", ctx.studentFullClassListData.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.studentFullClassListData);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.classList.length != 0);
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("ngIf", ctx.attendanceListData.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.attendanceListData);
        } }, dependencies: [i14.NgForOf, i14.NgIf, i10.ɵNgNoValidate, i10.NgSelectOption, i10.ɵNgSelectMultipleOption, i10.DefaultValueAccessor, i10.SelectControlValueAccessor, i10.NgControlStatus, i10.NgControlStatusGroup, i10.RequiredValidator, i10.MinLengthValidator, i10.MaxLengthValidator, i10.PatternValidator, i10.FormGroupDirective, i10.FormControlName, i15.NgSelectComponent, i10.NgModel, i16.AngularMyDatePickerDirective, i17.StudentReportComponent, i14.DatePipe, i18.CustomDateFormatPipe], styles: [".userTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n  width: 15%;\n}\n\n.userTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 35%;\n}\n\n.userTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  width: 15%;\n}\n\n.userTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n  width: 35%;\n}\n\nstudent-profile[_ngcontent-%COMP%] {\n  .table td {\n    color: #8F008AFF !important;\n  }\n}\n\n.cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n  \n  &:hover {\n    text-decoration: underline;\n    opacity: 0.8;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentOverallProfileDetailsComponent, [{
        type: Component,
        args: [{ selector: 'app-student-overall-profile-details', template: "<div class=\"container-fluid\">\n    <div class=\"card\">\n        <div class=\"card-body p-4\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <button class=\"pull-right btn btn-outline-primary\" (click)=\"backFunction()\"><i class=\"fa fa-long-arrow-left fa-1x\"\n                                                                     aria-hidden=\"true\"></i> Back</button>\n                </div>\n            </div>\n\n            <div class=\"row mt-2\">\n                <div class=\"col-md-12 col-12 mb-2\">\n                    <label style=\"font-size: 18px\" class=\"font-weight-bold color-primary\">Personal Details</label>\n                </div>\n                <div class=\"col-12 text-center py-5\" *ngIf=\"!studentProfileDetails || studentProfileDetails.length === 0\">\n                    <div class=\"spinner-border text-primary\" role=\"status\">\n                        <span class=\"sr-only\">Loading...</span>\n                    </div>\n                    <p class=\"mt-2\">Loading student details...</p>\n                </div>\n                <div class=\"col-12 table-responsive userTable\" *ngIf=\"studentProfileDetails && studentProfileDetails.length > 0\">\n                    <form [formGroup]=\"studentForm\">\n                        <table class=\"table text-left table-bordered\">\n                            <tbody>\n                            <tr>\n                                <td>First Name</td>\n                                <td *ngIf=\"!studentTableEdit\">\n                                                <span class=\"text-capitalize font-weight-bold\">{{studentProfileDetails[0]?.first_name != '' ?\n                                                    studentProfileDetails[0]?.first_name : '-'}}</span>\n                                </td>\n                                <td *ngIf=\"studentTableEdit\">\n                                    <input class=\"form-control\" placeholder=\"First Name\" type=\"text\"\n                                           formControlName=\"first_name\" required>\n                                </td>\n                                <td>Last Name</td>\n                                <td *ngIf=\"!studentTableEdit\">\n                                            <span class=\"text-capitalize font-weight-bold\">{{studentProfileDetails[0]?.last_name != '' ?\n                                                studentProfileDetails[0]?.last_name : '-'}}</span>\n                                </td>\n                                <td *ngIf=\"studentTableEdit\">\n                                    <input class=\"form-control\" placeholder=\"Last Name\" type=\"text\"\n                                           formControlName=\"last_name\" required>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Email Address</td>\n                                <td *ngIf=\"!studentTableEdit\">\n                                                    <span class=\"font-weight-bold\">{{studentProfileDetails[0]?.email_id != '' ?\n                                                        studentProfileDetails[0]?.email_id : '-'}}</span>\n                                </td>\n                                <td *ngIf=\"studentTableEdit\">\n                                    <input class=\"form-control\" placeholder=\"Email_id\" type=\"text\"\n                                           pattern=\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$\"\n                                           formControlName=\"email_id\" required=\"\">\n                                </td>\n                                <td>Gender</td>\n                                <td *ngIf=\"!studentTableEdit\">\n                                            <span class=\"text-capitalize font-weight-bold\">{{studentProfileDetails[0]?.gender != '' ?\n                                                studentProfileDetails[0]?.gender : '-'}}</span>\n                                </td>\n                                <td *ngIf=\"studentTableEdit\">\n                                    <select class=\"form-control\" id=\"validationCustom07\"\n                                            formControlName=\"gender\">\n                                        <option value=\"\" disabled>Select Gender</option>\n                                        <option value=\"male\">Male</option>\n                                        <option value=\"female\">Female</option>\n                                        <option value=\"n/a\">Do not want to disclose</option>\n                                    </select>\n                                </td>\n\n                            </tr>\n                            <tr>\n                                <td>Date of Birth</td>\n                                <td *ngIf=\"!studentTableEdit\">\n                                                    <span class=\"font-weight-bold\">{{studentProfileDetails[0]?.birthday != '0000-00-00' ?\n                                                        (studentProfileDetails[0]?.birthday |date:'MM/dd/yyyy') : '-'}}</span>\n                                </td>\n                                <td *ngIf=\"studentTableEdit\">\n                                    <div class=\"d-flex align-items-baseline\">\n                                        <input class=\"form-control\" placeholder=\"MM/dd/yyyy\"\n                                               name=\"dp\" formControlName=\"dob\" angular-mydatepicker\n                                               #dp=\"angular-mydatepicker\" (keypress)=\"datePattern($event)\"\n                                               [options]=\"dobDpOtions\" autocomplete=\"off\">\n                                        <div class=\"input-group-append\">\n                                            <button type=\"button\" class=\"btn btn-primary\"\n                                                    (click)=\"dp.toggleCalendar()\">\n                                                <i class=\"fa fa-calendar-o\"></i></button>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>Grade</td>\n                                <td *ngIf=\"!studentTableEdit\">\n                                            <span class=\"text-capitalize font-weight-bold\">{{studentProfileDetails[0]?.grade_id != '0' && studentProfileDetails[0]?.grade_id ?\n                                                studentProfileDetails[0]?.grade_name : '-'}}</span>\n                                </td>\n                                <td *ngIf=\"studentTableEdit\">\n                                    <ng-select [items]=\"gradeData\"\n                                               bindLabel=\"grade_name\"\n                                               bindValue=\"grade_id\"\n                                               placeholder=\"Please Select\"\n                                               typeToSearchText=\"\"\n                                               formControlName=\"grade\"\n                                    >\n                                    </ng-select>\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td>Student ID</td>\n                                <td *ngIf=\"!studentTableEdit\">\n                                            <span class=\"text-capitalize font-weight-bold\">{{studentProfileDetails[0]?.school_idno != '' ?\n                                                studentProfileDetails[0]?.school_idno : '-'}}</span>\n                                </td>\n                                <td *ngIf=\"studentTableEdit\">\n                                    <input class=\"form-control\" placeholder=\"Student ID\" type=\"text\"\n                                           formControlName=\"studentid\">\n                                </td>\n                                <td>Contact Number</td>\n                                <td *ngIf=\"!studentTableEdit\">\n                                                    <span class=\"font-weight-bold\">{{studentProfileDetails[0]?.mobile[0] != '' ?\n                                                        studentProfileDetails[0]?.mobile[0] : '-'}}</span>\n                                </td>\n                                <td *ngIf=\"studentTableEdit\">\n                                    <input class=\"form-control\" placeholder=\"Contact Number 1\" type=\"text\"\n                                           formControlName=\"mobile\" (keypress)=\"numberPattern($event)\"\n                                           maxlength=\"15\" minlength=\"10\">\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td>Contact Number 2</td>\n                                <td *ngIf=\"!studentTableEdit\">\n                                                    <span class=\"font-weight-bold\">{{studentProfileDetails[0]?.mobile[1] != '' ?\n                                                        studentProfileDetails[0]?.mobile[1] : '-'}}</span>\n                                </td>\n                                <td *ngIf=\"studentTableEdit\">\n                                    <input class=\"form-control\" placeholder=\"Contact Number 2\" type=\"text\"\n                                           formControlName=\"mobile1\" (keypress)=\"numberPattern($event)\"\n                                           maxlength=\"15\" minlength=\"10\">\n                                </td>\n                                <td>Contact Number 3</td>\n                                <td *ngIf=\"!studentTableEdit\">\n                                                    <span class=\"font-weight-bold\">{{studentProfileDetails[0]?.mobile[2] != '' ?\n                                                        studentProfileDetails[0]?.mobile[2] : '-'}}</span>\n                                </td>\n                                <td *ngIf=\"studentTableEdit\">\n                                    <input class=\"form-control\" placeholder=\"Contact Number 3\" type=\"text\"\n                                           formControlName=\"mobile2\" (keypress)=\"numberPattern($event)\"\n                                           maxlength=\"15\" minlength=\"10\">\n                                </td>\n                            </tr>\n                            <tr>\n\n                                <td>Status</td>\n                                <td class=\"text-capitalize font-weight-bold\" *ngIf=\"!studentTableEdit\">\n                                                    <span>{{studentProfileDetails[0]?.status == '1' ? 'Active' : studentProfileDetails[0]?.status == '2' ? 'Suspended' :\n                                                        studentProfileDetails[0]?.status == '3' ? 'Disengaged' : studentProfileDetails[0]?.status == '4' ? 'Deleted' : '-'}}</span>\n                                </td>\n                                <td *ngIf=\"studentTableEdit\">\n                                    <select id=\"selectStudent\" class=\"form-control\" formControlName=\"status\">\n                                        <option value=\"1\">Active</option>\n                                        <option value=\"2\">Suspended</option>\n                                        <option value=\"3\">Disengaged</option>\n                                        <option value=\"4\">Deleted</option>\n                                    </select>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Registration Date</td>\n                                <td *ngIf=\"!studentTableEdit\">\n                                                    <span class=\"font-weight-bold\">{{studentProfileDetails[0]?.registration_date != '0000-00-00' ?\n                                                        (studentProfileDetails[0]?.registration_date |date:'MM/dd/yyyy') : '-'}}</span>\n                                </td>\n                                <td *ngIf=\"studentTableEdit\">\n                                    <div class=\"d-flex align-items-baseline\">\n                                        <input class=\"form-control\" placeholder=\"MM/dd/yyyy\"\n                                               name=\"dp\" formControlName=\"registration_date\"\n                                               angular-mydatepicker #dp=\"angular-mydatepicker\"\n                                               (keypress)=\"datePattern($event)\"\n                                               [options]=\"myDpOptions2\" autocomplete=\"off\">\n                                        <div class=\"input-group-append\">\n                                            <button type=\"button\" class=\"btn btn-primary\"\n                                                    (click)=\"dp.toggleCalendar()\">\n                                                <i class=\"fa fa-calendar-o\"></i></button>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>Profile Photo</td>\n                                <td *ngIf=\"!studentTableEdit\">\n                                    <span *ngIf=\"studentProfileDetails[0]?.profile_url != ''\">Available</span>\n                                    <span *ngIf=\"studentProfileDetails[0]?.profile_url == ''\">Not-Available</span>\n                                </td>\n                                <td *ngIf=\"studentTableEdit\">\n                                    <div class=\"col-xl-8 col-md-7 color-primary\">\n                                        <input #myInput type=\"file\" class=\"custom-upload-input\"\n                                               (change)=\"encodeImageFileAsURL($event)\"\n                                               accept=\".png, .jpeg, .jpg\">\n                                    </div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n\n                    </form>\n                </div>\n            </div>\n            <div class=\"row mt-4\">\n                <div class=\"col-md-12 col-12 mb-2\">\n                    <label style=\"font-size: 18px\" class=\"font-weight-bold color-primary\">Contact Details</label>\n                </div>\n                <div class=\"col-md-12 col-12\">\n                    <ul class=\"nav nav-tabs justify-content-left\" role=\"tablist\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\"\n                               role=\"tab\" aria-controls=\"home\" aria-selected=\"true\" (click)=\"tabChange(1)\">Contact 1</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#home\"\n                               role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\" (click)=\"tabChange(2)\">Contact\n                                2</a>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"col-md-12 col-12 mt-3\">\n                    <div class=\"tab-content\" id=\"myTabContent\">\n                        <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\"\n                             aria-labelledby=\"home-tab\">\n                            <div class=\"row\">\n                                <div class=\"col-12 table-responsive userTable\">\n                                    <form [formGroup]=\"studentForm\">\n                                        <table class=\"table text-left table-bordered\">\n                                            <tbody>\n                                            <tr>\n                                                <td>First Name</td>\n                                                <td *ngIf=\"!parentTableEdit\">\n                                                    <span class=\"text-capitalize font-weight-bold\">\n                                                        {{ studentProfileDetails.length != 0 && serviceCalled ? studentProfileDetails[0]['parent' + selectedParent + '_firstname'] != '' ?\n                                                        studentProfileDetails[0]['parent' + selectedParent + '_firstname'] : '-' : '-'}}</span>\n                                                </td>\n                                                <td *ngIf=\"parentTableEdit\">\n                                                    <input class=\"form-control\" placeholder=\"First Name\"\n                                                           formControlName=\"{{'parent' + selectedParent + 'first_name'}}\"\n                                                           type=\"text\">\n                                                </td>\n                                                <td>Last Name</td>\n                                                <td *ngIf=\"!parentTableEdit\">\n                                                    <span class=\"text-capitalize font-weight-bold\">\n                                                        {{ studentProfileDetails.length != 0 && serviceCalled ? studentProfileDetails[0]['parent' + selectedParent + '_lastname'] && studentProfileDetails[0]['parent' + selectedParent + '_lastname'] != '' ?\n                                                    studentProfileDetails[0]['parent' + selectedParent + '_lastname'] : '-' : '-'}}</span>\n                                                </td>\n                                                <td *ngIf=\"parentTableEdit\">\n                                                    <input class=\"form-control\" placeholder=\"First Name\"\n                                                           formControlName=\"{{'parent' + selectedParent + 'last_name'}}\"\n                                                           type=\"text\">\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>Email Address 1</td>\n                                                <td *ngIf=\"!parentTableEdit\">\n                                                    <span class=\"font-weight-bold\">\n                                                        {{ studentProfileDetails.length != 0 && serviceCalled && studentProfileDetails[0]['parent' + selectedParent + '_email_ids'] && studentProfileDetails[0]['parent' + selectedParent + '_email_ids'][0] != ''\n                                                        ? studentProfileDetails[0]['parent' + selectedParent + '_email_ids'][0] : '-'}}</span>\n                                                </td>\n                                                <td *ngIf=\"parentTableEdit\">\n                                                    <input class=\"form-control\" placeholder=\"Email_id 1\"\n                                                           pattern=\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$\"\n                                                           formControlName=\"{{'parent' + selectedParent + 'email_id1'}}\"\n                                                           type=\"text\">\n                                                </td>\n                                                <td>Email Address 2</td>\n                                                <td *ngIf=\"!parentTableEdit\">\n                                                    <span class=\"font-weight-bold\">\n                                                        {{ studentProfileDetails.length != 0 && serviceCalled && studentProfileDetails[0]['parent' + selectedParent + '_email_ids'] && studentProfileDetails[0]['parent' + selectedParent + '_email_ids'][1] != ''\n                                                        ? studentProfileDetails[0]['parent' + selectedParent + '_email_ids'][1] : '-'}}</span>\n                                                </td>\n                                                <td *ngIf=\"parentTableEdit\">\n                                                    <input class=\"form-control\" placeholder=\"Email_id 2\"\n                                                           pattern=\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$\"\n                                                           formControlName=\"{{'parent' + selectedParent + 'email_id2'}}\"\n                                                           type=\"text\">\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>Address1</td>\n                                                <td *ngIf=\"!parentTableEdit\">\n                                                <span class=\"text-capitalize font-weight-bold\">\n                                                    {{ studentProfileDetails.length != 0 && serviceCalled && studentProfileDetails[0].address && studentProfileDetails[0].address[selectedParent - 1] && studentProfileDetails[0].address[selectedParent - 1].address1 != '' ?\n                                                        studentProfileDetails[0].address[selectedParent - 1].address1 : '-'}}</span>\n                                                </td>\n                                                <td *ngIf=\"parentTableEdit\">\n                                                    <input class=\"form-control\" placeholder=\"Address 1\"\n                                                           formControlName=\"{{'parent' + selectedParent + 'address1'}}\"\n                                                           type=\"text\">\n                                                </td>\n                                                <td>Address2</td>\n                                                <td *ngIf=\"!parentTableEdit\">\n                                                    <span class=\"text-capitalize font-weight-bold\">\n                                                        {{ studentProfileDetails.length != 0 && serviceCalled && studentProfileDetails[0].address && studentProfileDetails[0].address[selectedParent - 1] && studentProfileDetails[0].address[selectedParent - 1].address2 != '' ?\n                                                        studentProfileDetails[0].address[selectedParent - 1].address2 : '-'}}</span>\n                                                </td>\n                                                <td *ngIf=\"parentTableEdit\">\n                                                    <input class=\"form-control\" placeholder=\"Address 2\" type=\"text\"\n                                                           formControlName=\"{{'parent' + selectedParent + 'address2'}}\">\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>City</td>\n                                                <td *ngIf=\"!parentTableEdit\">\n                                                    <span class=\"text-capitalize font-weight-bold\">\n                                                        {{ studentProfileDetails.length != 0 && serviceCalled && studentProfileDetails[0].address && studentProfileDetails[0].address[selectedParent - 1] && studentProfileDetails[0].address[selectedParent - 1].city != '' ?\n                                                            studentProfileDetails[0].address[selectedParent - 1].city : '-'}}</span>\n                                                </td>\n                                                <td *ngIf=\"parentTableEdit\">\n                                                    <input class=\"form-control\" placeholder=\"City\" type=\"text\"\n                                                           formControlName=\"{{'parent' + selectedParent + 'city'}}\">\n                                                </td>\n                                                <td>State</td>\n                                                <td class=\"text-capitalize\" *ngIf=\"!parentTableEdit\">\n                                                    <span class=\"text-capitalize font-weight-bold\">\n                                                        {{ studentProfileDetails.length != 0 && serviceCalled && studentProfileDetails[0].address && studentProfileDetails[0].address[selectedParent - 1] && studentProfileDetails[0].address[selectedParent - 1].state_name != '' ?\n                                                            studentProfileDetails[0].address[selectedParent - 1].state_name : '-'}}</span>\n                                                </td>\n                                                <td *ngIf=\"parentTableEdit\">\n                                                    <ng-select [items]=\"stateListData\"\n                                                               bindLabel=\"name\"\n                                                               bindValue=\"state_id\"\n                                                               placeholder=\"Please Select\"\n                                                               formControlName=\"state\"\n                                                    >\n                                                    </ng-select>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>Country</td>\n                                                <td class=\"text-capitalize\" *ngIf=\"!parentTableEdit\">\n                                                    <span class=\"text-capitalize font-weight-bold\">\n                                                        {{ studentProfileDetails.length != 0 && serviceCalled && studentProfileDetails[0].address && studentProfileDetails[0].address[selectedParent - 1] && studentProfileDetails[0].address[selectedParent - 1].country_name != '' ?\n                                                        studentProfileDetails[0].address[selectedParent - 1].country_name : '-'}}</span>\n                                                </td>\n                                                <td *ngIf=\"parentTableEdit\">\n                                                    <ng-select [items]=\"countryListData\"\n                                                               bindLabel=\"name\"\n                                                               bindValue=\"country_id\"\n                                                               placeholder=\"Please Select\"\n                                                               formControlName=\"country\"\n                                                               (change)=\"stateList($event)\"\n                                                    >\n                                                    </ng-select>\n                                                </td>\n                                                <td>Zip Code</td>\n                                                <td *ngIf=\"!parentTableEdit\">\n                                                    <span class=\"text-capitalize font-weight-bold\">\n                                                        {{ studentProfileDetails.length != 0 && serviceCalled && studentProfileDetails[0].address && studentProfileDetails[0].address[selectedParent - 1] && studentProfileDetails[0].address[selectedParent - 1].postal_code != '' ?\n                                                        studentProfileDetails[0].address[selectedParent - 1].postal_code : '-'}}</span>\n                                                </td>\n                                                <td *ngIf=\"parentTableEdit\">\n                                                    <input class=\"form-control\" placeholder=\"Zip Code\" type=\"text\" formControlName=\"zip\">\n                                                </td>\n                                            </tr>\n                                            </tbody>\n                                        </table>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row mt-4\">\n                <div class=\"col-md-12 col-12 mb-2\">\n                    <label style=\"font-size: 18px\" class=\"font-weight-bold\">Class Details</label>\n                </div>\n\n                <div class=\"col-md-12 col-12 table-responsive student-profile\" style=\"overflow-y: auto; max-height: 70vh\">\n                    <table class=\"table table-bordered\">\n                        <thead style=\"background: #cdd9f6\">\n\n                        <th style=\"position: sticky; top: 0;background: #cdd9f6\">Subject</th>                            \n                        <th style=\"position: sticky; top: 0;background: #cdd9f6\">Class Name</th>\n                        <th style=\"position: sticky; top: 0;background: #cdd9f6\">Class Code</th>\n                        <th style=\"position: sticky; top: 0;background: #cdd9f6\">Start Date</th>\n                        <th style=\"position: sticky; top: 0;background: #cdd9f6\">End Date</th>\n                        <th style=\"position: sticky; top: 0;background: #cdd9f6\">Joined Date</th>\n                        <th style=\"position: sticky; top: 0;background: #cdd9f6\">Dropped Date</th>\n                        <th style=\"position: sticky; top: 0;background: #cdd9f6\">Notify Contact</th>\n                        <th style=\"position: sticky; top: 0;background: #cdd9f6\">Action</th>\n                        </thead>\n                        <tbody>\n                        <tr *ngIf=\"studentFullClassListData.length == 0\" class=\"text-center\">\n                            <td colspan=\"12\">\n                                <span class=\"color-primary\">No Data Available!</span>\n                            </td>\n                        </tr>\n                        <tr *ngFor=\"let classData of studentFullClassListData;\">\n\n                            <td style=\"vertical-align: middle\">{{classData.subject != '' ? classData.subject : '-'}}</td>                            \n                            <td style=\"vertical-align: middle\" class=\"color-primary\">\n                                <span class=\"font-weight-bold cursor\" (click)=\"viewClassDetails(classData)\">{{classData.class_name}}</span></td>\n                            <td style=\"vertical-align: middle\">{{classData.class_code}}</td>\n                            <td style=\"vertical-align: middle\">{{classData.start_date | customDateFormat}}</td>\n                            <td style=\"vertical-align: middle\">{{classData.end_date | customDateFormat}}</td>\n                            <td style=\"vertical-align: middle\">{{classData.joining_date | customDateFormat}}</td>\n                            <td style=\"vertical-align: middle\">{{classData.drafted_date != '0000-00-00' ? (classData.drafted_date | customDateFormat) : '-'}}</td>\n                            <td (click)=\"classData.showText = false\" class=\"color-primary cursor\" style=\"vertical-align: middle\">\n                                <span *ngIf=\"classData.showText\" class=\"font-weight-bold\">{{classData.notify_status == '0' ? 'No' : 'Yes'}}</span>\n                                <select (change)=\"studentNotifyStatus(classData, $event.target.value)\" *ngIf=\"!classData.showText\" class=\"form-control\" [value]=\"classData.notify_status\">\n                                    <option value=\"1\">Yes</option>\n                                    <option value=\"0\">No</option>\n                                </select>\n                            </td>\n                            <td style=\"vertical-align: middle\">\n                                <img alt=\"\" class=\"mx-2\" style=\"width:23px\" src=\"assets/images/icons/report.png\" title=\"Report\" (click)=\"getStudentFullDetail(classData)\">\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n\n            <div class=\"row mt-4\">\n                <div class=\"col-md-12 col-12 mb-2\">\n                    <label style=\"font-size: 18px\" class=\"font-weight-bold\">Attendance Details</label>\n                </div>\n\n                <div class=\"col-12\">\n                    <div class=\"form-group col-4 col-md-4 pl-0\" *ngIf=\"classList.length != 0\">\n                        <label class=\"col-xl-12 col-md-12 pl-0 font-weight-bold\" style=\"font-size: 16px\">Class List</label>\n                        <ng-select [items]=\"classList\"\n                                   bindLabel=\"class_name\"\n                                   bindValue=\"class_id\"\n                                   placeholder=\"Please Select\"\n                                   [ngModel]=\"selectedClassId\"\n                                   (change)=\"attendanceFilter($event)\"\n                        >\n                        </ng-select>\n                    </div>\n                </div>\n\n                <div class=\"col-md-12 col-12 student-profile\" style=\"overflow-y: auto; max-height: 70vh\">\n                    <table class=\"table table-bordered\">\n                        <thead style=\"background: #cdd9f6\">\n                        <th style=\"position: sticky; top: 0;background: #cdd9f6\">Class Name</th>\n                        <th style=\"position: sticky; top: 0;background: #cdd9f6\">Date</th>\n                        <th style=\"position: sticky; top: 0;background: #cdd9f6\">Time Slot</th>\n                        <th style=\"position: sticky; top: 0;background: #cdd9f6\">Attendance</th>\n                        <th style=\"position: sticky; top: 0;background: #cdd9f6\">Make-up Class</th>\n                        </thead>\n                        <tbody>\n                        <tr *ngIf=\"attendanceListData.length == 0\" class=\"text-center\">\n                            <td colspan=\"12\">\n                                <span class=\"color-primary\">No Data Available!</span>\n                            </td>\n                        </tr>\n                        <tr *ngFor=\"let attendance of attendanceListData; let i = index\">\n                            <td style=\"vertical-align: middle\" class=\"color-primary\">\n                                <span class=\"font-weight-bold\">{{attendance.class_name}}</span></td>\n                            <td style=\"vertical-align: middle\" >{{attendance.date | customDateFormat}}</td>\n                            <td style=\"vertical-align: middle\">\n                                <span>{{attendance.start_time}} - {{attendance.end_time}}</span>\n                                </td>\n                            <td style=\"vertical-align: middle\">\n                                <i style=\"font-size: 18px\" *ngIf=\"attendance.attendance == '1'\" class=\"fa fa-check-circle color-green\"></i>\n                                <i style=\"font-size: 18px\" *ngIf=\"attendance.attendance == '0'\" class=\"fa fa-times-circle color-red\"></i>\n                                <span *ngIf=\"attendance.attendance == '' && attendance.attendance\">-</span>\n                            </td>\n                            <td style=\"vertical-align: middle\">\n                                <button (click)=\"addMakeUpClass(attendance)\" *ngIf=\"attendance?.makeup_class_id == '' && attendance?.attendance == '0'\n                                    && (auth.getRoleId() == '2' || (auth.getRoleId() == '4' && auth.getSessionData('teacher_type') != '0'))\" class=\"btn-sm-view cancel px-2 py-1\">\n                                    <i style=\"font-size: 16px\" class=\"fa fa-calendar-plus-o mr-1\" title=\"Schedule Make-up Class\" aria-hidden=\"true\"></i>Schedule Make-up Class\n                                </button>\n                                <label *ngIf=\"attendance?.makeup_class_id != '' && attendance?.attendance == '0'\" class=\"makUpClass_text mb-0\">\n                                    <span style=\"font-size: 14px\" class=\"ml-1 color-primary font-weight-bold\">{{attendance?.makeup_class_name}} - {{attendance?.makeup_class_date | customDateFormat}}</span>\n                                </label>\n                                <i (click)=\"voidFunctionCalled(attendance, i)\" title=\"Void Class\"\n                                   *ngIf=\"attendance?.makeup_class_id != '' && ['0', ''].indexOf(attendance.attendance) > - 1 && attendance.allow_void_class\" style=\"font-size: 18px\"\n                                   class=\"fa fa-times-circle color-red ml-2 cursor\"></i>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #viewoveralldetails let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title color-primary\" id=\"modal-basic-title\">Assignment Details</h4>\n        <i (click)=\"closeOverAll()\" aria-hidden=\"true\"\n           class=\"fa fa-close fa-lg mt-1\" style=\"color:#7F3486; cursor: pointer; float: right;\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <app-student-report [classData]=\"classData\" [studentId]=\"studentId\"></app-student-report>\n    </div>\n</ng-template>\n\n<ng-template #voidClass>\n    <div class=\"modal-header align-items-center\">\n        <h5 class=\"modal-title align-items-center font-weight-bold\">Void Class</h5>\n        <i class=\"fa fa-close cursor\" (click)=\"modalRef.close()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-md-12 px-0\">\n            <p class=\"mb-0\"><strong>\n                Are you sure want to void the<span class=\"color-primary ml-1\">{{voidClassData.makeup_class_name}}</span>?</strong>\n            </p>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn cancel\" type=\"button\" (click)=\"modalRef.close()\">Cancel</button>\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"deleteStudentList()\">Yes</button>\n    </div>\n</ng-template>\n", styles: [".userTable table td:nth-child(1) {\n  width: 15%;\n}\n\n.userTable table td:nth-child(2) {\n  width: 35%;\n}\n\n.userTable table td:nth-child(3) {\n  width: 15%;\n}\n\n.userTable table td:nth-child(4) {\n  width: 35%;\n}\n\nstudent-profile {\n  .table td {\n    color: #8F008AFF !important;\n  }\n}\n\n.cursor {\n  cursor: pointer;\n  \n  &:hover {\n    text-decoration: underline;\n    opacity: 0.8;\n  }\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.CategoryService }, { type: i3.ConfigurationService }, { type: i4.ToastrService }, { type: i5.NgbModal }, { type: i6.StudentService }, { type: i7.ValidationService }, { type: i8.CommonService }, { type: i9.ClassService }, { type: i10.FormBuilder }, { type: i11.Router }, { type: i12.NavService }, { type: i13.CreatorService }, { type: i14.DatePipe }], { viewoveralldetails: [{
            type: ViewChild,
            args: ['viewoveralldetails']
        }], voidClass: [{
            type: ViewChild,
            args: ['voidClass']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentOverallProfileDetailsComponent, { className: "StudentOverallProfileDetailsComponent" }); })();
//# sourceMappingURL=student-overall-profile-details.component.js.map