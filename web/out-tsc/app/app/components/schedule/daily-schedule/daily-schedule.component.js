import { Component, Input, ViewChild } from '@angular/core';
import { dateOptions, timeZone } from '../../../shared/data/config';
import { Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { urls } from '../../../shared/utils/urls';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/common-data.service";
import * as i3 from "../../../shared/service/class.service";
import * as i4 from "@angular/forms";
import * as i5 from "../../../shared/service/contentdetail.service";
import * as i6 from "@angular/common";
import * as i7 from "ngx-toastr";
import * as i8 from "../../../shared/service/zoom-service.service";
import * as i9 from "ngx-sse-client";
import * as i10 from "@ng-bootstrap/ng-bootstrap";
import * as i11 from "../../../shared/service/student.service";
import * as i12 from "@angular/router";
import * as i13 from "../../../shared/service/newsubject.service";
import * as i14 from "../../../environment.service";
import * as i15 from "../../../shared/service/validation.service";
import * as i16 from "@ng-select/ng-select";
import * as i17 from "@nodro7/angular-mydatepicker";
import * as i18 from "@angular/material/icon";
import * as i19 from "@angular/material/form-field";
import * as i20 from "@angular/material/chips";
import * as i21 from "../../studentlogin/overalldetails/overalldetails.component";
import * as i22 from "../../report/missed-work-report/missed-work-report.component";
import * as i23 from "../../auth/tiny-mice/tiny-mice.component";
import * as i24 from "ng-multiselect-dropdown";
import * as i25 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["viewoveralldetails"];
const _c1 = ["zoomDialog"];
const _c2 = ["zoomDialog1"];
const _c3 = ["meetingSelection"];
const _c4 = ["recordinglist"];
const _c5 = ["reports"];
const _c6 = ["notes"];
const _c7 = ["writeNoteOpen"];
const _c8 = ["addMultipleEmailDialog"];
const _c9 = ["showInform"];
const _c10 = ["deleteClass"];
const _c11 = ["addStudentDialog"];
const _c12 = ["confirmation"];
const _c13 = ["voidClass"];
const _c14 = () => ["2", "4"];
const _c15 = () => ["2", "4", "5"];
const _c16 = () => ["0"];
const _c17 = () => ["0", ""];
function DailyScheduleComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "div", 39)(2, "button", 40);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function DailyScheduleComponent_div_21_div_1_i_9_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 62);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.new_comments ? item_r4.new_comments : 0);
} }
function DailyScheduleComponent_div_21_div_1_i_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 60);
    i0.ɵɵlistener("click", function DailyScheduleComponent_div_21_div_1_i_9_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r6); const item_r4 = i0.ɵɵnextContext().$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.redirectToAnnouncement(item_r4, $event, "announcement")); });
    i0.ɵɵtemplate(1, DailyScheduleComponent_div_21_div_1_i_9_span_1_Template, 2, 1, "span", 61);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.auth.getRoleId() != "5");
} }
function DailyScheduleComponent_div_21_div_1_i_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 63);
    i0.ɵɵlistener("click", function DailyScheduleComponent_div_21_div_1_i_10_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r7); const item_r4 = i0.ɵɵnextContext().$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.auth.getRoleId() == "5" ? ctx_r4.redirectToAnnouncement(item_r4, $event, "inbox") : ctx_r4.classDetailsService(item_r4, "inbox", $event)); });
    i0.ɵɵelementStart(1, "span", 62);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4.newMessage);
} }
function DailyScheduleComponent_div_21_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 64)(1, "label", 46);
    i0.ɵɵtext(2, "Teacher Name :");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 65);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r4.teacher_name);
} }
function DailyScheduleComponent_div_21_div_1_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 66);
    i0.ɵɵtext(1, "Schedule :");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_div_21_div_1_button_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 67);
    i0.ɵɵtext(1, " Attendance \u00A0");
    i0.ɵɵelementStart(2, "small", 68);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    const item_r4 = ctx_r7.$implicit;
    const j_r9 = ctx_r7.index;
    i0.ɵɵattribute("aria-controls", "#studentCount" + j_r9)("data-target", "#studentCount" + j_r9);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r4.student_details.length);
} }
function DailyScheduleComponent_div_21_div_1_div_19_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 74);
    i0.ɵɵlistener("click", function DailyScheduleComponent_div_21_div_1_div_19_a_5_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r11); const item_r4 = i0.ɵɵnextContext(2).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.openZoomDialog(item_r4)); });
    i0.ɵɵelement(1, "i", 77);
    i0.ɵɵtext(2, "Enter Online Class");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_div_21_div_1_div_19_a_6_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "i", 80);
    i0.ɵɵtext(2, " Start online class");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_div_21_div_1_div_19_a_6_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 81)(1, "span", 82);
    i0.ɵɵtext(2, "Loading...");
    i0.ɵɵelementEnd()();
} }
function DailyScheduleComponent_div_21_div_1_div_19_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 74);
    i0.ɵɵlistener("click", function DailyScheduleComponent_div_21_div_1_div_19_a_6_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r12); const item_r4 = i0.ɵɵnextContext(2).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.openZoomDialog(item_r4)); });
    i0.ɵɵtemplate(1, DailyScheduleComponent_div_21_div_1_div_19_a_6_span_1_Template, 3, 0, "span", 78)(2, DailyScheduleComponent_div_21_div_1_div_19_a_6_span_2_Template, 3, 0, "span", 79);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r4.customLoader);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.customLoader);
} }
function DailyScheduleComponent_div_21_div_1_div_19_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 74);
    i0.ɵɵlistener("click", function DailyScheduleComponent_div_21_div_1_div_19_a_7_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r13); const item_r4 = i0.ɵɵnextContext(2).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.classDetailsService(item_r4)); });
    i0.ɵɵelement(1, "i", 83);
    i0.ɵɵtext(2, " Edit class");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_div_21_div_1_div_19_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 74);
    i0.ɵɵlistener("click", function DailyScheduleComponent_div_21_div_1_div_19_a_8_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r14); const item_r4 = i0.ɵɵnextContext(2).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.deleteClassModal(item_r4)); });
    i0.ɵɵelement(1, "i", 84);
    i0.ɵɵtext(2, " Delete Class");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_div_21_div_1_div_19_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 74);
    i0.ɵɵlistener("click", function DailyScheduleComponent_div_21_div_1_div_19_a_9_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r7 = i0.ɵɵnextContext(2); const item_r4 = ctx_r7.$implicit; const j_r9 = ctx_r7.index; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.addStudent(item_r4, j_r9)); });
    i0.ɵɵelement(1, "i", 85);
    i0.ɵɵtext(2, " Add Student");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_div_21_div_1_div_19_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 74);
    i0.ɵɵlistener("click", function DailyScheduleComponent_div_21_div_1_div_19_a_13_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r16); const item_r4 = i0.ɵɵnextContext(2).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.shareEmail(item_r4)); });
    i0.ɵɵelement(1, "i", 86);
    i0.ɵɵtext(2, " Share Class Code");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_div_21_div_1_div_19_a_14_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "i", 87);
    i0.ɵɵtext(2, " Recording");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_div_21_div_1_div_19_a_14_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 81)(1, "span", 82);
    i0.ɵɵtext(2, "Loading...");
    i0.ɵɵelementEnd()();
} }
function DailyScheduleComponent_div_21_div_1_div_19_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 74);
    i0.ɵɵlistener("click", function DailyScheduleComponent_div_21_div_1_div_19_a_14_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r17); const item_r4 = i0.ɵɵnextContext(2).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.openRecordingList(item_r4)); });
    i0.ɵɵtemplate(1, DailyScheduleComponent_div_21_div_1_div_19_a_14_span_1_Template, 3, 0, "span", 78)(2, DailyScheduleComponent_div_21_div_1_div_19_a_14_span_2_Template, 3, 0, "span", 79);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r4.recordLoader);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.recordLoader);
} }
function DailyScheduleComponent_div_21_div_1_div_19_a_18_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 74);
    i0.ɵɵlistener("click", function DailyScheduleComponent_div_21_div_1_div_19_a_18_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r18); const item_r4 = i0.ɵɵnextContext(2).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.allReports(item_r4)); });
    i0.ɵɵelement(1, "i", 88);
    i0.ɵɵtext(2, "Reports");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_div_21_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵlistener("click", function DailyScheduleComponent_div_21_div_1_div_19_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r10); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(1, "button", 70);
    i0.ɵɵtext(2, "Action ");
    i0.ɵɵelement(3, "i", 71);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 72);
    i0.ɵɵtemplate(5, DailyScheduleComponent_div_21_div_1_div_19_a_5_Template, 3, 0, "a", 73)(6, DailyScheduleComponent_div_21_div_1_div_19_a_6_Template, 3, 2, "a", 73)(7, DailyScheduleComponent_div_21_div_1_div_19_a_7_Template, 3, 0, "a", 73)(8, DailyScheduleComponent_div_21_div_1_div_19_a_8_Template, 3, 0, "a", 73)(9, DailyScheduleComponent_div_21_div_1_div_19_a_9_Template, 3, 0, "a", 73);
    i0.ɵɵelementStart(10, "a", 74);
    i0.ɵɵlistener("click", function DailyScheduleComponent_div_21_div_1_div_19_Template_a_click_10_listener() { i0.ɵɵrestoreView(_r10); const item_r4 = i0.ɵɵnextContext().$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.curriculum(item_r4)); });
    i0.ɵɵelement(11, "i", 75);
    i0.ɵɵtext(12, " Curriculum");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, DailyScheduleComponent_div_21_div_1_div_19_a_13_Template, 3, 0, "a", 73)(14, DailyScheduleComponent_div_21_div_1_div_19_a_14_Template, 3, 2, "a", 73);
    i0.ɵɵelementStart(15, "a", 74);
    i0.ɵɵlistener("click", function DailyScheduleComponent_div_21_div_1_div_19_Template_a_click_15_listener() { i0.ɵɵrestoreView(_r10); const item_r4 = i0.ɵɵnextContext().$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.showInformation(item_r4)); });
    i0.ɵɵelement(16, "i", 76);
    i0.ɵɵtext(17, " Information");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(18, DailyScheduleComponent_div_21_div_1_div_19_a_18_Template, 3, 0, "a", 73);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r4.class_type == "1" && item_r4.schedule_id != "" && ctx_r4.auth.getRoleId() == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.class_type == "1" && i0.ɵɵpureFunction0(8, _c14).includes(ctx_r4.auth.getRoleId()));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.checkClassDeleteConditions);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.manageStudent);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r4.roleId != "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.class_type == "1" && i0.ɵɵpureFunction0(9, _c15).includes(ctx_r4.auth.getRoleId()));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r4.roleId != "5");
} }
function DailyScheduleComponent_div_21_div_1_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 89);
    i0.ɵɵlistener("click", function DailyScheduleComponent_div_21_div_1_button_20_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r19); const item_r4 = i0.ɵɵnextContext().$implicit; const ctx_r4 = i0.ɵɵnextContext(2); ctx_r4.confirmationForMakeUpClass(item_r4); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelement(1, "i", 90);
    i0.ɵɵtext(2, "Schedule Make-up Class ");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_div_21_div_1_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 98)(1, "div", 99);
    i0.ɵɵtext(2, "No student Found");
    i0.ɵɵelementEnd()();
} }
function DailyScheduleComponent_div_21_div_1_div_21_table_9_th_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 107);
    i0.ɵɵtext(1, "Present");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_div_21_div_1_div_21_table_9_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 107);
    i0.ɵɵtext(1, "Absent");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_div_21_div_1_div_21_table_9_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 107);
    i0.ɵɵtext(1, "Make-up Class");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 94);
    i0.ɵɵtext(1, "\u2605");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_th_10_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 112)(1, "input", 115);
    i0.ɵɵlistener("change", function DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_th_10_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r22); const list_r21 = i0.ɵɵnextContext().$implicit; const item_r4 = i0.ɵɵnextContext(3).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.clickEve(list_r21, "present", $event, item_r4)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext();
    const list_r21 = ctx_r22.$implicit;
    const i_r24 = ctx_r22.index;
    const j_r9 = i0.ɵɵnextContext(3).index;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("name", "", j_r9, "attendence", i_r24, "");
    i0.ɵɵproperty("disabled", list_r21.attendance == "0")("checked", list_r21.attendance == "1");
} }
function DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_th_11_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 112)(1, "div", 116)(2, "input", 117);
    i0.ɵɵlistener("change", function DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_th_11_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r25); const list_r21 = i0.ɵɵnextContext().$implicit; const item_r4 = i0.ɵɵnextContext(3).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.clickEve(list_r21, "absent", $event, item_r4)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext();
    const list_r21 = ctx_r22.$implicit;
    const i_r24 = ctx_r22.index;
    const j_r9 = i0.ɵɵnextContext(3).index;
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("name", "", j_r9, "attendence", i_r24, "");
    i0.ɵɵproperty("checked", list_r21.attendance == "0")("disabled", list_r21.attendance == "1" || list_r21.makeup_class_id != "");
} }
function DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_th_12_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_th_12_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 122);
    i0.ɵɵlistener("click", function DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_th_12_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r26); const list_r21 = i0.ɵɵnextContext(2).$implicit; const item_r4 = i0.ɵɵnextContext(3).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.addMakeUpClass(list_r21, item_r4)); });
    i0.ɵɵelement(1, "i", 90);
    i0.ɵɵtext(2, "Schedule Make-up Class ");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_th_12_h6_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 123)(1, "span", 124);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "customDateFormat");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r21 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", list_r21.makeup_class_name, " - ", i0.ɵɵpipeBind1(3, 2, list_r21.makeup_class_date), "");
} }
function DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_th_12_i_4_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 125);
    i0.ɵɵlistener("click", function DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_th_12_i_4_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r27); const i_r24 = i0.ɵɵnextContext(2).index; const item_r4 = i0.ɵɵnextContext(3).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.voidFunctionCalled(item_r4, i_r24)); });
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_th_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 118);
    i0.ɵɵtemplate(1, DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_th_12_span_1_Template, 2, 0, "span", 78)(2, DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_th_12_button_2_Template, 3, 0, "button", 119)(3, DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_th_12_h6_3_Template, 4, 4, "h6", 120)(4, DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_th_12_i_4_Template, 1, 0, "i", 121);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r21 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r21.attendance != "0" && list_r21.makeup_class_id == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r21.makeup_class_id == "" && i0.ɵɵpureFunction0(4, _c16).indexOf(list_r21.attendance) > -1 && (ctx_r4.auth.getRoleId() == "2" || ctx_r4.auth.getRoleId() == "4" && ctx_r4.auth.getSessionData("teacher_type") != "0"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r21.makeup_class_id != "" && i0.ɵɵpureFunction0(5, _c17).indexOf(list_r21.attendance) > -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r21.makeup_class_id != "" && i0.ɵɵpureFunction0(6, _c17).indexOf(list_r21.attendance) > -1 && list_r21.allow_void_class);
} }
function DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "th", 108)(2, "div", 102);
    i0.ɵɵtemplate(3, DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_span_3_Template, 2, 0, "span", 109);
    i0.ɵɵelementStart(4, "span", 110);
    i0.ɵɵlistener("click", function DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_Template_span_click_4_listener() { const list_r21 = i0.ɵɵrestoreView(_r20).$implicit; const ctx_r4 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r4.getStudentFullDetail(list_r21)); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "i", 111);
    i0.ɵɵlistener("click", function DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_Template_i_click_6_listener() { const list_r21 = i0.ɵɵrestoreView(_r20).$implicit; const item_r4 = i0.ɵɵnextContext(3).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.openNotes(item_r4, list_r21)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "th", 112)(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(10, DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_th_10_Template, 2, 5, "th", 113)(11, DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_th_11_Template, 3, 5, "th", 113)(12, DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_th_12_Template, 5, 7, "th", 114);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_26_0;
    const list_r21 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r21.student_class_type == "2");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(list_r21.student_name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate((list_r21 == null ? null : list_r21.student_grade_name) != "" ? (tmp_26_0 = list_r21 == null ? null : list_r21.student_grade_name) !== null && tmp_26_0 !== undefined ? tmp_26_0 : "-" : "-");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r4.makeUpClassSelected);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r4.makeUpClassSelected);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r4.makeUpClassSelected);
} }
function DailyScheduleComponent_div_21_div_1_div_21_table_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 100)(1, "thead", 101)(2, "tr")(3, "th", 102);
    i0.ɵɵtext(4, "Student Name ");
    i0.ɵɵelementStart(5, "small", 103);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "th", 104);
    i0.ɵɵtext(8, "Grade Name");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, DailyScheduleComponent_div_21_div_1_div_21_table_9_th_9_Template, 2, 0, "th", 105)(10, DailyScheduleComponent_div_21_div_1_div_21_table_9_th_10_Template, 2, 0, "th", 105)(11, DailyScheduleComponent_div_21_div_1_div_21_table_9_th_11_Template, 2, 0, "th", 105);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "tbody");
    i0.ɵɵtemplate(13, DailyScheduleComponent_div_21_div_1_div_21_table_9_tr_13_Template, 13, 6, "tr", 106);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(item_r4.student_details.length);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r4.makeUpClassSelected);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r4.makeUpClassSelected);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r4.makeUpClassSelected);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r4.student_details);
} }
function DailyScheduleComponent_div_21_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 91);
    i0.ɵɵtemplate(1, DailyScheduleComponent_div_21_div_1_div_21_div_1_Template, 3, 0, "div", 92);
    i0.ɵɵelementStart(2, "div", 93)(3, "span", 94);
    i0.ɵɵtext(4, "\u2605");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 95);
    i0.ɵɵtext(6, "-");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 96);
    i0.ɵɵtext(8, "Make-up Student");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, DailyScheduleComponent_div_21_div_1_div_21_table_9_Template, 14, 5, "table", 97);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    const item_r4 = ctx_r7.$implicit;
    const j_r9 = ctx_r7.index;
    i0.ɵɵpropertyInterpolate1("id", "studentCount", j_r9, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.student_details.length == 0);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", item_r4.student_details.length != 0);
} }
function DailyScheduleComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 43)(1, "div", 44);
    i0.ɵɵlistener("click", function DailyScheduleComponent_div_21_div_1_Template_div_click_1_listener() { const item_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.cardNavigation(item_r4)); });
    i0.ɵɵelementStart(2, "div", 20)(3, "div", 45)(4, "label", 46);
    i0.ɵɵtext(5, "Class Name :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, "\u00A0\u00A0\u00A0 ");
    i0.ɵɵelementStart(7, "h4", 47);
    i0.ɵɵtext(8);
    i0.ɵɵtemplate(9, DailyScheduleComponent_div_21_div_1_i_9_Template, 2, 1, "i", 48)(10, DailyScheduleComponent_div_21_div_1_i_10_Template, 3, 1, "i", 49);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, DailyScheduleComponent_div_21_div_1_div_11_Template, 5, 1, "div", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 51)(13, "div", 52);
    i0.ɵɵtemplate(14, DailyScheduleComponent_div_21_div_1_span_14_Template, 2, 0, "span", 53);
    i0.ɵɵelementStart(15, "span", 54);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 55);
    i0.ɵɵtemplate(18, DailyScheduleComponent_div_21_div_1_button_18_Template, 4, 3, "button", 56)(19, DailyScheduleComponent_div_21_div_1_div_19_Template, 19, 10, "div", 57)(20, DailyScheduleComponent_div_21_div_1_button_20_Template, 3, 0, "button", 58);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(21, DailyScheduleComponent_div_21_div_1_div_21_Template, 10, 4, "div", 59);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const j_r9 = ctx.index;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate2("id", "class_", item_r4.class_id, "schedule_", item_r4.schedule_id, "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("id", "schedule_", item_r4.schedule_id, "");
    i0.ɵɵattribute("aria-controls", "#studentCount" + j_r9)("data-target", "#studentCount" + j_r9);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("", item_r4.class_name, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.announcement_type != "1" && !ctx_r4.makeUpClassSelected);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.auth.getRoleId() != "2" && !ctx_r4.makeUpClassSelected);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.auth.getRoleId() != "4");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r4.start_time != null);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" \u00A0\u00A0", item_r4.start_time + " - " + item_r4.end_time, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r4.roleId != "5" && !ctx_r4.makeUpClassSelected);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r4.makeUpClassSelected);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.makeUpClassSelected);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.roleId != "5");
} }
function DailyScheduleComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵtemplate(1, DailyScheduleComponent_div_21_div_1_Template, 22, 17, "div", 42);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r4.scheduleData);
} }
function DailyScheduleComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 126)(1, "h4", 127);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 128);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_22_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r28); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.closeOverAll()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 129);
    i0.ɵɵelement(5, "app-overalldetails", 130);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r4.studentName, " Overall details");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("studentdata", ctx_r4.viewdetail);
} }
function DailyScheduleComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 126)(1, "h4", 131);
    i0.ɵɵtext(2, "Zoom Meet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 132);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_24_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r29); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 133)(5, "div", 134)(6, "h5");
    i0.ɵɵtext(7, "Open zoom in ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 135)(9, "button", 136);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_24_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r29); const ctx_r4 = i0.ɵɵnextContext(); ctx_r4.modalRef.close(); return i0.ɵɵresetView(ctx_r4.zoomService.initZoomMeeting(ctx_r4.selectedClass)); });
    i0.ɵɵtext(10, "In App");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 137);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_24_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r29); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.navigateOutsideZoom(ctx_r4.selectedClass.availabilityDate[0])); });
    i0.ɵɵtext(12, "New Tab");
    i0.ɵɵelementEnd()();
} }
function DailyScheduleComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 126)(1, "h4", 131);
    i0.ɵɵtext(2, "Zoom Meet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 132);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_26_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r30); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 133)(5, "div", 134)(6, "h5");
    i0.ɵɵtext(7, "No Zoom Meet Scheduled for this day");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 135)(9, "button", 136);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_26_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r30); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.modalRef.close()); });
    i0.ɵɵtext(10, "OK");
    i0.ɵɵelementEnd()();
} }
function DailyScheduleComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 126)(1, "h4", 138);
    i0.ɵɵtext(2, "Report");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 132);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_28_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r31); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 129);
    i0.ɵɵelement(5, "app-missed-work-report", 139);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("classShow", true)("contentNameValue", ctx_r4.contentNameValue)("showContent", "other")("studentView", false)("timeView", true);
} }
function DailyScheduleComponent_ng_template_30_div_6_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 154)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " - ");
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "customDateFormat");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "br");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r34 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(list_r34.created_by);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(6, 2, list_r34.created_date));
} }
function DailyScheduleComponent_ng_template_30_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 147)(1, "div", 148)(2, "p", 149);
    i0.ɵɵtemplate(3, DailyScheduleComponent_ng_template_30_div_6_div_1_span_3_Template, 8, 4, "span", 150);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵelement(5, "span", 151);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 152)(7, "i", 153);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_30_div_6_div_1_Template_i_click_7_listener() { i0.ɵɵrestoreView(_r33); const list_r34 = i0.ɵɵnextContext().$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.deleteNotes(list_r34)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const list_r34 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r34.created_by != "" && list_r34.created_date != "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", list_r34.notes, i0.ɵɵsanitizeHtml);
} }
function DailyScheduleComponent_ng_template_30_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 145);
    i0.ɵɵtemplate(1, DailyScheduleComponent_ng_template_30_div_6_div_1_Template, 8, 2, "div", 146);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r34 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r34.created_date != "00-00-0000");
} }
function DailyScheduleComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 126)(1, "h4", 131);
    i0.ɵɵtext(2, "Add Notes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 132);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_30_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r32); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 129)(5, "div", 140);
    i0.ɵɵtemplate(6, DailyScheduleComponent_ng_template_30_div_6_Template, 2, 1, "div", 141);
    i0.ɵɵelementStart(7, "div", 142)(8, "app-tiny-mice", 143);
    i0.ɵɵlistener("emitEditorValue", function DailyScheduleComponent_ng_template_30_Template_app_tiny_mice_emitEditorValue_8_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.getEditorValue($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 144)(10, "button", 24);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_30_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r32); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.addNotes()); });
    i0.ɵɵtext(11, "Add");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r4.notesList);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("editorPatchValue", false)("height", 300)("id", "notes")("showDropBtn", false)("showInputBtn", false);
} }
function DailyScheduleComponent_ng_template_32_div_6_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 154)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " - ");
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "customDateFormat");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "br");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r37 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(list_r37.created_by);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(6, 2, list_r37.add_date));
} }
function DailyScheduleComponent_ng_template_32_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 147)(1, "div", 148)(2, "p", 149);
    i0.ɵɵtemplate(3, DailyScheduleComponent_ng_template_32_div_6_div_1_span_3_Template, 8, 4, "span", 150);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵelement(5, "span", 151);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 152)(7, "i", 153);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_32_div_6_div_1_Template_i_click_7_listener() { i0.ɵɵrestoreView(_r36); const list_r37 = i0.ɵɵnextContext().$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.deleteClassNote(list_r37)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const list_r37 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r37.created_by != "" && list_r37.add_date != "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", list_r37.note, i0.ɵɵsanitizeHtml);
} }
function DailyScheduleComponent_ng_template_32_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 145);
    i0.ɵɵtemplate(1, DailyScheduleComponent_ng_template_32_div_6_div_1_Template, 8, 2, "div", 146);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r37 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r37.add_date != "00-00-0000");
} }
function DailyScheduleComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 126)(1, "h4", 131);
    i0.ɵɵtext(2, "Add Notes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 132);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_32_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r35); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 129)(5, "div", 140);
    i0.ɵɵtemplate(6, DailyScheduleComponent_ng_template_32_div_6_Template, 2, 1, "div", 141);
    i0.ɵɵelementStart(7, "div", 142)(8, "app-tiny-mice", 143);
    i0.ɵɵlistener("emitEditorValue", function DailyScheduleComponent_ng_template_32_Template_app_tiny_mice_emitEditorValue_8_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.getEditorValue($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 144)(10, "button", 155);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_32_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r35); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.modalRef.close()); });
    i0.ɵɵtext(11, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 24);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_32_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r35); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.addClassNote()); });
    i0.ɵɵtext(13, "Add");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r4.classNotesList);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("editorPatchValue", false)("height", 300)("id", "notes")("showDropBtn", false)("showInputBtn", false);
} }
function DailyScheduleComponent_ng_template_34_mat_chip_row_10_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 169);
    i0.ɵɵtext(1, "cancel");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_ng_template_34_mat_chip_row_10_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip-row", 167);
    i0.ɵɵlistener("removed", function DailyScheduleComponent_ng_template_34_mat_chip_row_10_Template_mat_chip_row_removed_0_listener() { const item_r40 = i0.ɵɵrestoreView(_r39).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.removeEmail(item_r40)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, DailyScheduleComponent_ng_template_34_mat_chip_row_10_mat_icon_2_Template, 2, 0, "mat-icon", 168);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r40 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("color", item_r40.invalid ? "warn" : "")("removable", ctx_r4.removable);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", item_r40.value, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.removable);
} }
function DailyScheduleComponent_ng_template_34_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error", 158);
    i0.ɵɵtext(1, "Invalid email ID");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 126)(1, "h4", 131);
    i0.ɵɵtext(2, "Invite By Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 132);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_34_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r38); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 129)(5, "div", 156)(6, "form", 157)(7, "mat-form-field", 158)(8, "mat-chip-grid", 159, 14);
    i0.ɵɵtemplate(10, DailyScheduleComponent_ng_template_34_mat_chip_row_10_Template, 3, 4, "mat-chip-row", 160);
    i0.ɵɵelementStart(11, "input", 161);
    i0.ɵɵlistener("matChipInputTokenEnd", function DailyScheduleComponent_ng_template_34_Template_input_matChipInputTokenEnd_11_listener($event) { i0.ɵɵrestoreView(_r38); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.add($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(12, DailyScheduleComponent_ng_template_34_mat_error_12_Template, 2, 0, "mat-error", 162);
    i0.ɵɵelementStart(13, "div", 158)(14, "p");
    i0.ɵɵtext(15, "Note: You can give comma separator email-Id and press enter.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 158)(17, "p", 163)(18, "span")(19, "p", 164);
    i0.ɵɵtext(20, " ClassCode : ");
    i0.ɵɵelementStart(21, "strong");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(23, "br");
    i0.ɵɵtext(24, " If you are new to edquill, use the below URL to register and join class");
    i0.ɵɵelement(25, "br");
    i0.ɵɵelementStart(26, "span", 165);
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(28, "br")(29, "br");
    i0.ɵɵtext(30, " If you are an existing user, use the below URL to login and join class");
    i0.ɵɵelement(31, "br");
    i0.ɵɵelementStart(32, "span", 165);
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(34, "br");
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(35, "div", 135)(36, "button", 166);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_34_Template_button_click_36_listener() { i0.ɵɵrestoreView(_r38); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.bulkMail()); });
    i0.ɵɵtext(37, "Submit ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const chipList_r41 = i0.ɵɵreference(9);
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r4.studentEmailForm);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r4.emailList);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matChipInputFor", chipList_r41)("matChipInputSeparatorKeyCodes", ctx_r4.separatorKeysCodes)("matChipInputAddOnBlur", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r4.validationEmail && ctx_r4.emailList.length != 0);
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.selectClassData.class_code, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r4.env.envProperties.envURL + "#/auth/login/studentRegister/" + ctx_r4.selectClassData.class_code);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r4.env.envProperties.envURL + "#/enrollclasscode/" + ctx_r4.selectClassData.class_code);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", !ctx_r4.validationEmail && ctx_r4.emailList.length != 0);
} }
function DailyScheduleComponent_ng_template_36_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 171)(1, "small", 154);
    i0.ɵɵtext(2, "Start Date: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 172);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r4.classInfo.class_start_date);
} }
function DailyScheduleComponent_ng_template_36_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 171)(1, "small", 154);
    i0.ɵɵtext(2, "End Date: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 172);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r4.classInfo.class_end_date);
} }
function DailyScheduleComponent_ng_template_36_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 171)(1, "small", 154);
    i0.ɵɵtext(2, "Subject: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 172);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r4.classInfo.subject_name);
} }
function DailyScheduleComponent_ng_template_36_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 171)(1, "small", 154);
    i0.ɵɵtext(2, "Grade: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 173);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r4.classInfo.grade_name);
} }
function DailyScheduleComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 126)(1, "h4", 138);
    i0.ɵɵtext(2, "Info");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 132);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_36_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r42); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 129);
    i0.ɵɵtemplate(5, DailyScheduleComponent_ng_template_36_p_5_Template, 5, 1, "p", 170)(6, DailyScheduleComponent_ng_template_36_p_6_Template, 5, 1, "p", 170)(7, DailyScheduleComponent_ng_template_36_p_7_Template, 5, 1, "p", 170)(8, DailyScheduleComponent_ng_template_36_p_8_Template, 5, 1, "p", 170);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", (ctx_r4.classInfo == null ? null : ctx_r4.classInfo.class_start_date) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r4.classInfo == null ? null : ctx_r4.classInfo.class_end_date) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r4.classInfo == null ? null : ctx_r4.classInfo.subject_name) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r4.classInfo == null ? null : ctx_r4.classInfo.grade_name) != "");
} }
function DailyScheduleComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 126)(1, "h4", 174);
    i0.ɵɵtext(2, "Delete Class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 132);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_38_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r43); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 129)(5, "div", 175)(6, "p", 176)(7, "strong");
    i0.ɵɵtext(8, "Are you sure to delete the ");
    i0.ɵɵelementStart(9, "span", 165);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, " class?");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(12, "div", 135)(13, "button", 177);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_38_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r43); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.modalRef.close()); });
    i0.ɵɵtext(14, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 24);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_38_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r43); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.deleteClassList()); });
    i0.ɵɵtext(16, "Ok");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r4.classDetails.class_name);
} }
function DailyScheduleComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 126)(1, "h5", 178);
    i0.ɵɵtext(2, "Void Class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 132);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_40_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r44); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 129)(5, "div", 179)(6, "p", 176)(7, "strong");
    i0.ɵɵtext(8, " Are you sure want to void the class for ");
    i0.ɵɵelementStart(9, "span", 165);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, " in ");
    i0.ɵɵelementStart(12, "span", 165);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(14, "?");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(15, "div", 135)(16, "button", 177);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_40_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r44); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.modalRef.close()); });
    i0.ɵɵtext(17, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 24);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_40_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r44); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.deleteStudentList()); });
    i0.ɵɵtext(19, "Yes");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r4.voidClassData.student_details[ctx_r4.voidClassIndex] == null ? null : ctx_r4.voidClassData.student_details[ctx_r4.voidClassIndex].student_name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r4.voidClassData.student_details[ctx_r4.voidClassIndex] == null ? null : ctx_r4.voidClassData.student_details[ctx_r4.voidClassIndex].makeup_class_name);
} }
function DailyScheduleComponent_ng_template_42_label_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 204);
    i0.ɵɵtext(1, "All fields marked with ");
    i0.ɵɵelementStart(2, "span", 205);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " are required");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_ng_template_42_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 206);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_42_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r46); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.shareEmail(ctx_r4.selectClassData, "addStudent")); });
    i0.ɵɵtext(1, " Invite By Email ");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_ng_template_42_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 207);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_42_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r47); const ctx_r4 = i0.ɵɵnextContext(2); ctx_r4.searchStudentList(1); return i0.ɵɵresetView(ctx_r4.addStudentClicked()); });
    i0.ɵɵelement(1, "i", 208);
    i0.ɵɵtext(2, "Back");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_ng_template_42_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 209)(1, "label", 210);
    i0.ɵɵtext(2, "Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ng-select", 211);
    i0.ɵɵtwoWayListener("ngModelChange", function DailyScheduleComponent_ng_template_42_div_10_Template_ng_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r4 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r4.gradName, $event) || (ctx_r4.gradName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function DailyScheduleComponent_ng_template_42_div_10_Template_ng_select_change_3_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.getGradeValue($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("items", ctx_r4.gradeData);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.gradName);
} }
function DailyScheduleComponent_ng_template_42_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 209)(1, "label", 210);
    i0.ɵɵtext(2, "Student Name");
    i0.ɵɵelementStart(3, "span", 195);
    i0.ɵɵtext(4, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "ng-multiselect-dropdown", 212, 15);
    i0.ɵɵtwoWayListener("ngModelChange", function DailyScheduleComponent_ng_template_42_div_11_Template_ng_multiselect_dropdown_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r4 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r4.studentName, $event) || (ctx_r4.studentName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("onSelect", function DailyScheduleComponent_ng_template_42_div_11_Template_ng_multiselect_dropdown_onSelect_5_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.onItemSelect($event, "single")); })("onDeSelect", function DailyScheduleComponent_ng_template_42_div_11_Template_ng_multiselect_dropdown_onDeSelect_5_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.onDeSelect($event)); })("onSelectAll", function DailyScheduleComponent_ng_template_42_div_11_Template_ng_multiselect_dropdown_onSelectAll_5_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.onItemSelect($event, "all")); })("onDeSelectAll", function DailyScheduleComponent_ng_template_42_div_11_Template_ng_multiselect_dropdown_onDeSelectAll_5_listener() { i0.ɵɵrestoreView(_r49); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.onDeSelectAll()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("placeholder", "Select Student")("data", ctx_r4.studentDataList)("settings", ctx_r4.settings)("disabled", false);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.studentName);
} }
function DailyScheduleComponent_ng_template_42_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 213)(1, "button", 136);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_42_div_12_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r50); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.addStudentClicked()); });
    i0.ɵɵelement(2, "i", 214);
    i0.ɵɵtext(3, "Add Student");
    i0.ɵɵelementEnd()();
} }
function DailyScheduleComponent_ng_template_42_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 215)(1, "label", 216);
    i0.ɵɵtext(2, "Class Type");
    i0.ɵɵelementStart(3, "span", 195);
    i0.ɵɵtext(4, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 217)(6, "div", 218)(7, "input", 219);
    i0.ɵɵtwoWayListener("ngModelChange", function DailyScheduleComponent_ng_template_42_div_13_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r51); const ctx_r4 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r4.studentAddedType, $event) || (ctx_r4.studentAddedType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "label", 220);
    i0.ɵɵtext(9, "Regular");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 39)(11, "div", 218)(12, "input", 221);
    i0.ɵɵtwoWayListener("ngModelChange", function DailyScheduleComponent_ng_template_42_div_13_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r51); const ctx_r4 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r4.studentAddedType, $event) || (ctx_r4.studentAddedType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "label", 222);
    i0.ɵɵtext(14, "Make-up Class");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.studentAddedType);
    i0.ɵɵproperty("checked", ctx_r4.studentAddedType == "0");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("checked", ctx_r4.studentAddedType == "1");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.studentAddedType);
} }
function DailyScheduleComponent_ng_template_42_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 223)(1, "label", 216);
    i0.ɵɵtext(2, " Effective Date");
    i0.ɵɵelementStart(3, "span", 195);
    i0.ɵɵtext(4, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 196)(6, "div", 224)(7, "input", 225, 16);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_42_div_14_Template_input_click_7_listener() { i0.ɵɵrestoreView(_r52); const dp2_r53 = i0.ɵɵreference(8); return i0.ɵɵresetView(dp2_r53.toggleCalendar()); });
    i0.ɵɵtwoWayListener("ngModelChange", function DailyScheduleComponent_ng_template_42_div_14_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r4 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r4.effectiveStartDate, $event) || (ctx_r4.effectiveStartDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 23)(10, "button", 24);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_42_div_14_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r52); const dp2_r53 = i0.ɵɵreference(8); return i0.ɵɵresetView(dp2_r53.toggleCalendar()); });
    i0.ɵɵelement(11, "i", 25);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.effectiveStartDate);
    i0.ɵɵproperty("options", ctx_r4.myDpOptions1);
} }
function DailyScheduleComponent_ng_template_42_em_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 226);
    i0.ɵɵtext(1, "First name is required");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_ng_template_42_em_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 226);
    i0.ɵɵtext(1, "Last name is required");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_ng_template_42_em_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 226);
    i0.ɵɵtext(1, "Email is required");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_ng_template_42_em_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 226);
    i0.ɵɵtext(1, "Invalid Email-Id");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_ng_template_42_em_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 226);
    i0.ɵɵtext(1, "Grade is required");
    i0.ɵɵelementEnd();
} }
function DailyScheduleComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 126)(1, "div", 180)(2, "h4", 181);
    i0.ɵɵtext(3, "Add Student");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, DailyScheduleComponent_ng_template_42_label_4_Template, 5, 0, "label", 182);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 183);
    i0.ɵɵtemplate(6, DailyScheduleComponent_ng_template_42_button_6_Template, 2, 0, "button", 184)(7, DailyScheduleComponent_ng_template_42_button_7_Template, 3, 0, "button", 185);
    i0.ɵɵelementStart(8, "i", 186);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_42_Template_i_click_8_listener() { i0.ɵɵrestoreView(_r45); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.closeStudentModRef()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 187);
    i0.ɵɵtemplate(10, DailyScheduleComponent_ng_template_42_div_10_Template, 4, 2, "div", 188)(11, DailyScheduleComponent_ng_template_42_div_11_Template, 7, 5, "div", 188)(12, DailyScheduleComponent_ng_template_42_div_12_Template, 4, 0, "div", 189)(13, DailyScheduleComponent_ng_template_42_div_13_Template, 15, 4, "div", 190)(14, DailyScheduleComponent_ng_template_42_div_14_Template, 12, 2, "div", 191);
    i0.ɵɵelementStart(15, "div", 192)(16, "form", 157)(17, "div", 193)(18, "label", 194);
    i0.ɵɵtext(19, " First Name");
    i0.ɵɵelementStart(20, "span", 195);
    i0.ɵɵtext(21, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 196);
    i0.ɵɵelement(23, "input", 197);
    i0.ɵɵtemplate(24, DailyScheduleComponent_ng_template_42_em_24_Template, 2, 0, "em", 198);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 193)(26, "label", 199);
    i0.ɵɵtext(27, " Last Name");
    i0.ɵɵelementStart(28, "span", 195);
    i0.ɵɵtext(29, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div", 196);
    i0.ɵɵelement(31, "input", 200);
    i0.ɵɵtemplate(32, DailyScheduleComponent_ng_template_42_em_32_Template, 2, 0, "em", 198);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "div", 193)(34, "label", 201);
    i0.ɵɵtext(35, " Email Address");
    i0.ɵɵelementStart(36, "span", 195);
    i0.ɵɵtext(37, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div", 196);
    i0.ɵɵelement(39, "input", 202);
    i0.ɵɵtemplate(40, DailyScheduleComponent_ng_template_42_em_40_Template, 2, 0, "em", 198)(41, DailyScheduleComponent_ng_template_42_em_41_Template, 2, 0, "em", 198);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "div", 193)(43, "label", 201);
    i0.ɵɵtext(44, " Grade");
    i0.ɵɵelementStart(45, "span", 195);
    i0.ɵɵtext(46, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div", 196);
    i0.ɵɵelement(48, "ng-select", 203);
    i0.ɵɵtemplate(49, DailyScheduleComponent_ng_template_42_em_49_Template, 2, 0, "em", 198);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(50, "div", 135)(51, "button", 137);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_42_Template_button_click_51_listener() { i0.ɵɵrestoreView(_r45); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.addStudentEnabled ? ctx_r4.addstudent() : ctx_r4.submitClass()); });
    i0.ɵɵtext(52, "Submit");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r4.addStudentEnabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r4.addStudentEnabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.addStudentEnabled);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r4.addStudentEnabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r4.addStudentEnabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r4.addStudentEnabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r4.addStudentEnabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r4.addStudentEnabled && ctx_r4.studentAddedType == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngbCollapse", !ctx_r4.addStudentEnabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r4.addStudentForm);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r4.addStudentForm.get("first_name").valid && (ctx_r4.addStudentForm.get("first_name").dirty || ctx_r4.addStudentForm.get("first_name").touched));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r4.addStudentForm.get("last_name").valid && (ctx_r4.addStudentForm.get("last_name").dirty || ctx_r4.addStudentForm.get("last_name").touched));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r4.addStudentForm.get("email_id").hasError("required") && (ctx_r4.addStudentForm.get("email_id").dirty || ctx_r4.addStudentForm.get("email_id").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.addStudentForm.get("email_id").hasError("pattern"));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("items", ctx_r4.gradeData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r4.addStudentForm.get("grade").valid && (ctx_r4.addStudentForm.get("grade").dirty || ctx_r4.addStudentForm.get("grade").touched));
} }
function DailyScheduleComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 227)(1, "h4", 228);
    i0.ɵɵtext(2, "Add Student");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 183)(4, "button", 206);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_44_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r54); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.shareEmail(ctx_r4.selectClassData, "addStudent")); });
    i0.ɵɵtext(5, " Invite By Email ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "i", 186);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_44_Template_i_click_6_listener() { i0.ɵɵrestoreView(_r54); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.closeStudentModRef()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 129)(8, "div", 229)(9, "label");
    i0.ɵɵtext(10, "Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "ng-select", 211);
    i0.ɵɵtwoWayListener("ngModelChange", function DailyScheduleComponent_ng_template_44_Template_ng_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r54); const ctx_r4 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r4.gradName, $event) || (ctx_r4.gradName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function DailyScheduleComponent_ng_template_44_Template_ng_select_change_11_listener($event) { i0.ɵɵrestoreView(_r54); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.getGradeValue($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 229)(13, "label");
    i0.ɵɵtext(14, "Student Name");
    i0.ɵɵelementStart(15, "span", 195);
    i0.ɵɵtext(16, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "ng-multiselect-dropdown", 212);
    i0.ɵɵtwoWayListener("ngModelChange", function DailyScheduleComponent_ng_template_44_Template_ng_multiselect_dropdown_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r54); const ctx_r4 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r4.studentName, $event) || (ctx_r4.studentName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("onSelect", function DailyScheduleComponent_ng_template_44_Template_ng_multiselect_dropdown_onSelect_17_listener($event) { i0.ɵɵrestoreView(_r54); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onItemSelect($event, "single")); })("onDeSelect", function DailyScheduleComponent_ng_template_44_Template_ng_multiselect_dropdown_onDeSelect_17_listener($event) { i0.ɵɵrestoreView(_r54); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onDeSelect($event)); })("onSelectAll", function DailyScheduleComponent_ng_template_44_Template_ng_multiselect_dropdown_onSelectAll_17_listener($event) { i0.ɵɵrestoreView(_r54); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onItemSelect($event, "all")); })("onDeSelectAll", function DailyScheduleComponent_ng_template_44_Template_ng_multiselect_dropdown_onDeSelectAll_17_listener() { i0.ɵɵrestoreView(_r54); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onDeSelectAll()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "div", 135)(19, "button", 137);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_44_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r54); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.submitClass()); });
    i0.ɵɵtext(20, "Submit");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("items", ctx_r4.gradeData);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.gradName);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("placeholder", "Select Student")("data", ctx_r4.studentDataList)("settings", ctx_r4.settings)("disabled", false);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.studentName);
} }
function DailyScheduleComponent_ng_template_46_div_8_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 237);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const source_r57 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind2(2, 2, source_r57.recording_start, "MM/dd/yyyy"), " \u00A0", source_r57.recording_start, "");
} }
function DailyScheduleComponent_ng_template_46_div_8_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 237);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const source_r57 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind2(2, 2, source_r57.recording_end, "MM/dd/yyyy"), " \u00A0", source_r57.recording_end, "");
} }
function DailyScheduleComponent_ng_template_46_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 232)(1, "div", 233)(2, "div", 234);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_46_div_8_Template_div_click_2_listener() { const source_r57 = i0.ɵɵrestoreView(_r56).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.navigateOutsideRecording(source_r57)); });
    i0.ɵɵelementStart(3, "div", 147)(4, "div", 235)(5, "p")(6, "span");
    i0.ɵɵtext(7, "Start: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, DailyScheduleComponent_ng_template_46_div_8_span_8_Template, 3, 5, "span", 236);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 235)(10, "p")(11, "span");
    i0.ɵɵtext(12, "End: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, DailyScheduleComponent_ng_template_46_div_8_span_13_Template, 3, 5, "span", 236);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const source_r57 = ctx.$implicit;
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", source_r57.recording_start != "0000-00-00");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", source_r57.recording_end != "0000-00-00");
} }
function DailyScheduleComponent_ng_template_46_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 238)(1, "div", 239)(2, "div", 240)(3, "div", 147)(4, "span", 241);
    i0.ɵɵtext(5, "No Recordings Available");
    i0.ɵɵelementEnd()()()()();
} }
function DailyScheduleComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    const _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 126)(1, "h4", 131);
    i0.ɵɵtext(2, "Recordings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 132);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_46_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r55); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 129)(5, "div", 147)(6, "div")(7, "div", 147);
    i0.ɵɵtemplate(8, DailyScheduleComponent_ng_template_46_div_8_Template, 14, 2, "div", 230)(9, DailyScheduleComponent_ng_template_46_div_9_Template, 6, 0, "div", 231);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 135)(11, "button", 136);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_46_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r55); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.modalRef.close()); });
    i0.ɵɵtext(12, "close");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵclassMapInterpolate1("col-md-12 home-sec-scroll ", ctx_r4.videoSource.length != "0" ? "" : "align-content-center", "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.videoSource);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.videoSource.length == 0);
} }
function DailyScheduleComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    const _r58 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 126)(1, "h5", 178);
    i0.ɵɵtext(2, "Schedule Make-up Class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 132);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_48_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r58); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 129)(5, "div", 179)(6, "p", 176)(7, "strong");
    i0.ɵɵtext(8, " Are you sure want to schedule make-up class for the student ");
    i0.ɵɵelementStart(9, "span", 165);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, " in ");
    i0.ɵɵelementStart(12, "span", 165);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(14, "?");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(15, "div", 135)(16, "button", 177);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_48_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r58); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.modalRef.close()); });
    i0.ɵɵtext(17, "No");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 24);
    i0.ɵɵlistener("click", function DailyScheduleComponent_ng_template_48_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r58); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.submitMakeUpClass(ctx_r4.selectedFormakeUpClass)); });
    i0.ɵɵtext(19, "Yes");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r4.selectedClass.student_name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r4.selectedFormakeUpClass.class_name);
} }
export class DailyScheduleComponent {
    constructor(auth, commondata, classes, formBuilder, content, datePipe, toastr, zoomService, sseClient, modalService, student, route, newService, env, validationService, cdr) {
        this.auth = auth;
        this.commondata = commondata;
        this.classes = classes;
        this.formBuilder = formBuilder;
        this.content = content;
        this.datePipe = datePipe;
        this.toastr = toastr;
        this.zoomService = zoomService;
        this.sseClient = sseClient;
        this.modalService = modalService;
        this.student = student;
        this.route = route;
        this.newService = newService;
        this.env = env;
        this.validationService = validationService;
        this.cdr = cdr;
        this.setDate = new Date().toLocaleString('en-US', { timeZone: timeZone.location });
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            calendarAnimation: {
                in: 4,
                out: 4
            },
            firstDayOfWeek: 'su'
        };
        this.gradeData = [];
        this.subjectData = [];
        this.scheduleData = [];
        this.scheduleDataAlt = [];
        this.notesList = [];
        this.classNotesList = [];
        this.searchClass = '';
        this.searchStudent = '';
        this.searchTeacher = '';
        this.searchText = ''; // Unified search field
        this.contentNameValue = '';
        this.classNotes = '';
        this.customLoader = false;
        this.searchDate = {
            isRange: false,
            singleDate: { jsDate: new Date(this.setDate) }
        };
        this.manageClass = true;
        this.settingValue = '0';
        this.settingList = [];
        this.emailList = [];
        this.removable = true;
        this.validationEmail = false;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.blukEmailValue = [];
        this.recordLoader = false;
        this.subs = [];
        this.messageSubs = [];
        this.videoSource = [];
        this.manageStudent = true;
        this.studentDataList = [];
        this.settings = {};
        this.newlySelectedStuent = [];
        this.showEmailId = true;
        this.makeUpClassSelected = false;
        this.selectedFormakeUpClass = {};
        this.voidClassData = {};
        this.voidClassIndex = 0;
        this.lesserThanCurrentDate = false;
        this.addStudentEnabled = false;
        this.studentAddedType = '0';
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getMonth() + 1,
                day: new Date(this.setDate).getDate() - 1
            },
            calendarAnimation: {
                in: 4,
                out: 4
            }
        };
        this.roleId = this.auth.getRoleId();
        this.settings = {
            singleSelection: false,
            idField: 'student_id',
            textField: 'name_with_email',
            enableCheckAll: true,
            selectAllText: 'Select all',
            unSelectAllText: 'UnSelect all',
            allowSearchFilter: true,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 139,
            itemsShowLimit: 3,
            searchPlaceholderText: 'Search Student',
            noDataAvailablePlaceholderText: 'No data available',
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
        };
        if (this.roleId != '5') {
            const settingData = this.auth.getSessionData('settingList');
            if (settingData) {
                this.settingList = JSON.parse(settingData);
                if (this.settingList && Array.isArray(this.settingList)) {
                    this.settingList.forEach((items) => {
                        if (items.name == 'teacher_zoom_view') {
                            this.settingValue = items.value;
                        }
                    });
                }
            }
        }
        const date = new Date(this.setDate);
        this.searchDate1 = {
            isRange: false,
            singleDate: { jsDate: new Date(this.setDate) }
        };
        this.searchDate1 = this.datePipe.transform(date, 'dd-MM-yyyy');
        this.currentDate = this.datePipe.transform(date, 'dd-MM-yyyy');
        console.log(this.currentDate, 'currentDate');
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        this.setMakeUpClassForm();
        this.setStudentEmailForm();
        this.setStudentForm();
        this.newService.schoolChange.subscribe((res) => {
            console.log(res, 'res');
            if (res != '') {
                if (this.route.url.includes('daily-schedule')) {
                    this.init();
                }
            }
            else {
                this.init();
            }
        });
    }
    ngOnInit() {
        // this.init();
    }
    ngOnChanges() {
        this.init();
    }
    ngOnDestroy() {
        this.auth.removeSessionData('classSelected_makeUp');
        this.auth.removeSessionData('studentSelected_makeUp');
        this.auth.removeSessionData('makeUpClass_calledFrom');
        this.subs ? this.subs.forEach(val => val.unsubscribe()) : '';
        this.messageSubs ? this.messageSubs.forEach(value => value.unsubscribe()) : '';
    }
    cardNavigation(item) {
        if (this.roleId == '5') {
            this.enterList(item);
        }
    }
    deleteClassModal(row) {
        this.classDetails = row;
        this.modalRef = this.modalService.open(this.deleteClassDialog);
    }
    get checkClassDeleteConditions() {
        return this.auth.getRoleId() == '2' || (this.auth.getRoleId() == '4' && this.auth.getSessionData('teacher_type') == '1');
    }
    getCommentListCount() {
        const class_id = this.scheduleData.map(items => items.class_id);
        if (class_id.length != 0) {
            const payload = {
                platform: 'web',
                user_id: this.auth.getUserId(),
                role_id: this.auth.getRoleId(),
                class_id
            };
            this.subs.push(this.sseClient.stream('classes/getCommentCount', { keepAlive: true, reconnectionDelay: 2000,
                responseType: 'event' }, { body: payload }, 'POST').subscribe((event) => {
                if (event.type === 'error') {
                    const errorEvent = event;
                }
                else if (event.type == 'message') {
                    const messageEvent = event;
                    const countArray = JSON.parse(messageEvent.data);
                    countArray.forEach((items) => {
                        const index = this.scheduleData.findIndex(x => x.class_id === items.class_id);
                        this.scheduleData[index].new_comments = items.new_comments;
                    });
                }
            }));
        }
        else {
            this.subs.forEach(value => value.unsubscribe());
        }
    }
    getMessageListCount() {
        const class_id = this.scheduleData.map(items => items.class_id);
        if (class_id.length != 0) {
            const payload = {
                platform: 'web',
                user_id: this.auth.getUserId(),
                role_id: this.auth.getRoleId(),
                class_id
            };
            this.messageSubs.push(this.sseClient.stream('mailbox/getMessageCount', { keepAlive: true, reconnectionDelay: 2000,
                responseType: 'event' }, { body: payload }, 'POST').subscribe((event) => {
                if (event.type === 'error') {
                    const errorEvent = event;
                }
                else if (event.type == 'message') {
                    const messageEvent = event;
                    let cleanedData = messageEvent.data.trim();
                    const validJSONEndIndex = cleanedData.lastIndexOf(']');
                    if (validJSONEndIndex !== -1) {
                        cleanedData = cleanedData.slice(0, validJSONEndIndex + 1);
                    }
                    try {
                        const messageCountArray = JSON.parse(cleanedData);
                        messageCountArray.forEach((items) => {
                            const index = this.scheduleData.findIndex(x => x.class_id === items.class_id);
                            if (index !== -1) {
                                this.scheduleData[index].newMessage = items.newMessage;
                            }
                        });
                    }
                    catch (error) {
                        console.error('Failed to parse JSON:', error, cleanedData);
                    }
                }
            }));
        }
        else {
            this.messageSubs.forEach((value) => value.unsubscribe());
        }
    }
    enterList(item) {
        if (item.class_date_status == '1') {
            this.toastr.info('This Class Not Started');
        }
        else {
            this.auth.setSessionData('class-id', item.class_id);
            this.auth.setSessionData('schedule_id', item.schedule_id);
            this.route.navigate(['/studentlogin/class-detail']);
        }
    }
    deleteClassList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.classDetails.class_id,
        };
        this.classes.deleteclass(data).subscribe((successData) => {
            this.deleteClassSuccess(successData);
        }, (error) => {
            console.error(error, 'class_delete');
        });
    }
    deleteClassSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.toastr.success('Class deleted Successfully', 'Class');
            this.modalRef.close();
            this.getScheduleDetails();
        }
        else {
            this.toastr.error(successData.ResponseObject, 'Class');
        }
    }
    navigateOutsideRecording(data) {
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', data.play_video);
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    openRecordingList(classData) {
        this.selectedClass = classData;
        console.log(this.selectedClass, 'selectedClass');
        if (!this.recordLoader) {
            this.recordLoader = true;
            this.classDetailsService(classData, 'recording');
        }
    }
    getClassRecording(classData) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: classData.class_id,
            grade: [classData.grade_id],
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0'
        };
        this.classes.recording(data).subscribe((successData) => {
            this.commondata.showLoader(false);
            if (successData.IsSuccess) {
                console.log(successData, 'successdatasdd');
                this.videoSource = [];
                successData.ResponseObject.forEach((item) => {
                    this.videoSource.push(...item.meeting_recording);
                });
                this.modalRef = this.modalService.open(this.recordinglist, { size: 's' });
            }
        }, (error) => {
            this.commondata.showLoader(false);
        });
    }
    classDetailsService(value, type = '', event) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: value.class_id,
            grade: [value.grade_id],
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0'
        };
        this.commondata.showLoader(true);
        if (this.roleId == '5') {
            data['student_id'] = this.auth.getUserId();
            this.classes.studentClassDetail(data).subscribe((successData) => {
                this.enterListSuccess(successData, type, value);
            }, (error) => {
                console.error(error, 'error');
            });
        }
        else {
            this.classes.classDetails(data).subscribe((successData) => {
                this.enterListSuccess(successData, type, value);
            }, (error) => {
                console.error(error, 'error');
            });
        }
        if (event) {
            event.stopPropagation();
        }
    }
    enterListSuccess(successData, type, classData) {
        this.commondata.showLoader(false);
        if (successData.IsSuccess) {
            if (type == 'recording') {
                this.customLoader = false;
                this.recordLoader = false;
                this.selectedClass = successData.ResponseObject[0];
                this.getClassRecording(classData);
            }
            else if (type == 'inbox' || type == 'curriculum') {
                this.auth.setSessionData('card-data', JSON.stringify(successData.ResponseObject));
                this.route.navigate([type == 'curriculum' ? '/class/topicsAndCurriculum/3' : '/class/topicsAndCurriculum/5']);
            }
            else {
                this.commondata.showLoader(false);
                this.detailData = successData.ResponseObject;
                this.auth.setSessionData('classView', true);
                this.auth.setSessionData('studentlist', JSON.stringify(this.detailData[0].students));
                this.auth.setSessionData('studentlist1', JSON.stringify(this.detailData[0].students));
                this.auth.setSessionData('card-data', JSON.stringify(this.detailData));
                this.auth.setSessionData('editclass', JSON.stringify(successData.ResponseObject));
                this.auth.setSessionData('updatedStudent', 1);
                this.auth.removeSessionData('enterThroughSchedule');
                if (this.detailData[0].classDate_status == '2' || this.detailData[0].classDate_status == '5') {
                    if (!this.manageClass) {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        this.auth.setSessionData('readonly_data', 'true');
                    }
                    else {
                        this.auth.removeSessionData('readonly_startdate');
                        this.auth.removeSessionData('readonly_data');
                    }
                    if (this.detailData[0].class_status != '1') {
                        this.route.navigate(['/class/create-class/edit']);
                    }
                    else {
                        this.route.navigate(['/class/create-class/edit']);
                        this.auth.setSessionData('editclass', JSON.stringify(this.detailData));
                        this.auth.setSessionData('updatedStudent', 1);
                    }
                }
                else if (this.detailData[0].classDate_status == '4' && this.detailData[0].class_status == '0' && this.roleId != '2' && !this.manageClass) {
                    this.route.navigate(['/class/list-class']);
                }
                else if (this.detailData[0].classDate_status == '4' && (this.detailData[0].class_status == '1' || (this.roleId == '2' || this.manageClass))) {
                    console.log('1', 'enter logic');
                    if (!this.manageClass) {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        this.auth.setSessionData('readonly_data', 'true');
                    }
                    else {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        this.auth.setSessionData('classView', false);
                        console.log('2', 'enter complete class');
                    }
                    this.route.navigate(['/class/create-class/addEdit']);
                    this.auth.setSessionData('editclass', JSON.stringify(this.detailData));
                    this.auth.setSessionData('updatedStudent', 1);
                }
                else if (this.detailData[0].classDate_status == '3') {
                    if (this.detailData[0].class_status == '1') {
                        this.auth.removeSessionData('readonly_startdate');
                        this.auth.removeSessionData('readonly_data');
                    }
                    else {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        if (this.auth.getRoleId() == '4' && this.teacherType == '0') {
                            this.auth.setSessionData('readonly_data', 'true');
                        }
                        else {
                            this.auth.removeSessionData('readonly_data');
                        }
                    }
                    this.route.navigate(['/class/create-class/edit']);
                }
            }
        }
    }
    curriculum(value) {
        console.log(value, 'value');
        if (['2', '4'].includes(this.roleId)) {
            this.classDetailsService(value, 'curriculum');
        }
        else {
            this.enterList(value);
        }
    }
    init() {
        this.subs ? this.subs.forEach(val => val.unsubscribe()) : '';
        this.messageSubs ? this.messageSubs.forEach(value => value.unsubscribe()) : '';
        if (this.auth.getRoleId() == '4') {
            this.teacherType = this.auth.getSessionData('teacher_type');
        }
        this.manageClass = this.auth.manageClass;
        this.manageStudent = this.auth.manageStudent;
        this.showEmailId = this.auth.showStudentEmailId;
        this.loadGradeList();
        this.getScheduleDetails();
    }
    closeOverAll() {
        this.modalRef.close('viewoveralldetails');
    }
    clickEve(item, type, event, data) {
        item.attendance = type == 'present' && event.target.checked ? '1' : type == 'absent' && event.target.checked ? '0' : '';
        const selectedStudent = data.student_details.filter(studentData => studentData.student_id == item.student_id);
        this.updateStudentAttendance(data, selectedStudent);
    }
    setFilter() {
        const searchTerm = this.searchText.toLowerCase().trim();
        if (searchTerm === '') {
            // If search is empty, show all data
            this.scheduleData = this.scheduleDataAlt;
            return;
        }
        // Unified search across teacher, class, and student names
        this.scheduleData = this.scheduleDataAlt.filter((val) => {
            // Search in class name
            const classMatch = val.class_name && val.class_name.toLowerCase().indexOf(searchTerm) > -1;
            // Search in teacher name (handle both string and array)
            let teacherMatch = false;
            if (val.teacher_name) {
                if (typeof val.teacher_name === 'string') {
                    teacherMatch = val.teacher_name.toLowerCase().indexOf(searchTerm) > -1;
                }
                else if (Array.isArray(val.teacher_name)) {
                    teacherMatch = val.teacher_name.some(teacher => teacher && teacher.toLowerCase().indexOf(searchTerm) > -1);
                }
            }
            // Search in student names
            let studentMatch = false;
            if (val.student_details && val.student_details.length > 0) {
                val.student_details.forEach((student) => {
                    if (student.student_name && student.student_name.toLowerCase().indexOf(searchTerm) > -1) {
                        studentMatch = true;
                    }
                });
            }
            // Return true if match found in any field (OR logic)
            return classMatch || teacherMatch || studentMatch;
        });
    }
    onDateChanged(event) {
        this.searchDate1 = this.datePipe.transform(event.singleDate.jsDate, 'dd-MM-yyyy');
        this.searchDate = event;
        const currentDate = new Date(new Date().toLocaleString('en-US', { timeZone: timeZone.location }));
        const makeupDate = new Date(event.singleDate.jsDate);
        this.lesserThanCurrentDate = currentDate < makeupDate;
        console.log(!this.lesserThanCurrentDate);
        this.getScheduleDetails();
    }
    redirectToAnnouncement(value, event, type = '') {
        console.log(value, 'redirectedValue');
        if (this.auth.getRoleId() == '5') {
            this.auth.setSessionData('class-id', value.class_id);
            this.auth.setSessionData('schedule_id', value.schedule_id);
            this.route.navigate(['/studentlogin/class-detail/' + type]);
            event.stopPropagation();
        }
        else {
            console.log(value, 'value');
            this.auth.setSessionData('announcement-class', [value.class_id]);
            this.route.navigate(['/announcement/list/add']);
            event.stopPropagation();
        }
    }
    getScheduleDetails(classId = '', scheduleId = '') {
        const date = this.datePipe.transform(this.searchDate.singleDate.jsDate, 'dd-MM-yyyy');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            date
        };
        this.classes.overallClassAttendance(data).subscribe((successData) => {
            this.overallClassAttendanceSuccess(successData, classId, scheduleId);
        }, (error) => {
            this.scheduleData = [];
            console.log(error);
        });
    }
    overallClassAttendanceSuccess(successData, classId, scheduleId) {
        if (successData.IsSuccess) {
            console.log(successData, 'schoolListDetails');
            successData.ResponseObject.forEach(items => {
                items.new_comments = 0;
                items.newMessage = 0;
                items.student_details.forEach(student => {
                    if (student.makeup_class_id != '') {
                        const currentDate = new Date(new Date().toLocaleString('en-US', { timeZone: timeZone.location }));
                        const makeupDate = new Date(student.makeup_class_date);
                        student.allow_void_class = currentDate < makeupDate;
                        console.log(student.allow_void_class, student, 'student.allow_void_class');
                    }
                    else {
                        student.allow_void_class = false;
                    }
                });
                items.student_details.sort((a, b) => a.student_name.localeCompare(b.student_name));
            });
            console.log(successData.ResponseObject, 'ResponseObject');
            this.scheduleDataAlt = successData.ResponseObject;
            this.subs.forEach(val => val.unsubscribe());
            this.messageSubs.forEach(value => value.unsubscribe());
            this.sortByTime();
            this.scheduleData = JSON.parse(JSON.stringify(this.scheduleDataAlt));
            this.auth.getRoleId() != '5' ? this.getCommentListCount() : '';
            if (['4', '5'].includes(this.auth.getRoleId())) {
                this.getMessageListCount();
            }
            this.makeUpClassSelected = !!this.auth.getSessionData('classSelected_makeUp');
            if (this.makeUpClassSelected) {
                this.selectedClass = JSON.parse(this.auth.getSessionData('classSelected_makeUp'));
                this.selectedStudent = this.auth.getSessionData('studentSelected_makeUp');
            }
            if (scheduleId != '' && classId != '') {
                setTimeout(() => {
                    const id = 'class_' + classId + 'schedule_' + scheduleId;
                    console.log(id, 'id_name');
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollTo({ behavior: 'smooth', top: element.scrollHeight });
                        const collapse = document.getElementById('schedule_' + scheduleId);
                        collapse.click();
                    }
                }, 100);
            }
            else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
        else {
            this.scheduleData = [];
        }
    }
    confirmationForMakeUpClass(data) {
        this.selectedFormakeUpClass = data;
        this.modalRef = this.modalService.open(this.confirmation);
    }
    addMakeUpClass(event, classData) {
        this.makeUpClassSelected = true;
        classData.absent_date = this.searchDate;
        classData.student_name = event.student_name;
        this.auth.setSessionData('classSelected_makeUp', JSON.stringify(classData));
        this.auth.setSessionData('studentSelected_makeUp', event.student_id);
        this.selectedClass = classData;
        this.selectedStudent = event.student_id;
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            disableUntil: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getMonth() + 1,
                day: new Date(this.setDate).getDate() - 1
            },
            calendarAnimation: {
                in: 4,
                out: 4
            }
        };
        this.searchDate = {
            isRange: false,
            singleDate: { jsDate: new Date(this.setDate) }
        };
        this.searchDate1 = this.datePipe.transform(this.searchDate.singleDate.jsDate, 'dd-MM-yyyy');
        this.getScheduleDetails();
    }
    submitMakeUpClass(event) {
        if (this.selectedClass.class_id == event.class_id) {
            this.toastr.error('From Class and To Class should be different');
            return false;
        }
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            to_class: event.class_id,
            from_class: this.selectedClass.class_id,
            absent_date: this.selectedClass.absent_date ?
                this.datePipe.transform(this.selectedClass.absent_date.singleDate.jsDate, 'yyyy-MM-dd') : '',
            start_date: this.searchDate ?
                this.datePipe.transform(this.searchDate.singleDate.jsDate, 'yyyy-MM-dd') : '',
            end_date: this.searchDate ?
                this.datePipe.transform(this.searchDate.singleDate.jsDate, 'yyyy-MM-dd') : '',
            student_id: this.selectedStudent,
            status: '1'
        };
        this.auth.postService(payload, urls.makeUpClass).subscribe((successData) => {
            if (successData.IsSuccess) {
                const selectedClass = this.auth.getSessionData('classSelected_makeUp');
                this.auth.removeSessionData('classSelected_makeUp');
                this.auth.removeSessionData('studentSelected_makeUp');
                this.modalRef.close();
                console.log(event.class_id, 'selectedClass.class_id');
                console.log(event.schedule_id, 'schedule_id');
                this.makeUpClassSelected = false;
                this.myDpOptions = { ...this.myDpOptions, disableUntil: { year: 0, month: 0, day: 0 } };
                this.cdr.detectChanges();
                this.getScheduleDetails(event.class_id, event.schedule_id);
                this.toastr.success(successData.ResponseObject);
            }
            else {
                this.toastr.error(successData.ErrorObject);
            }
        }, (error) => console.error(error, 'makeUp_error'));
    }
    updateStudentAttendance(item, attendence) {
        console.log(item);
        console.log(attendence, 'attendence');
        const date1 = this.searchDate.singleDate.jsDate;
        const date = this.datePipe.transform(date1, 'dd-MM-yyyy');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: item.class_id,
            date,
            attendence,
            start_date: item.start_date,
            start_time: item.start_time,
            end_time: item.end_time,
            slot_day: item.slot_days == 'Monday' ? '1' : item.slot_days == 'Tuesday' ? '2' : item.slot_days == 'Wednesday' ? '3' : item.slot_days == 'Thursday' ? '4' : item.slot_days == 'Friday' ? '5' : item.slot_days == 'Saturday' ? '6' : '7',
            type: 'add'
        };
        this.classes.updateAttendance(data).subscribe((successData) => {
            if (successData.IsSuccess) {
                // this.toastr.success(successData.ResponseObject, 'Success');
            }
            else {
                this.toastr.error(successData.ErrorObject, 'Failed');
            }
        }, (error) => {
            console.log(error);
        });
    }
    getStudentFullDetail(item) {
        console.log(item, 'datum');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: 'list'
        };
        this.student.getStudentList(data).subscribe((successData) => {
            this.studentFullDetailSuccess(successData, item);
        }, (error) => {
            console.log(error);
        });
    }
    studentFullDetailSuccess(successData, item) {
        if (successData.IsSuccess) {
            successData.ResponseObject.forEach((val) => {
                if (val.user_id == item.student_id) {
                    this.viewdetail = val;
                    this.studentName = item.student_name;
                }
            });
            this.modalRef = this.modalService.open(this.viewoveralldetails, { size: 'xl' });
            console.log(this.viewdetail, 'viewDetail');
        }
    }
    getMeetingLink(datum, index) {
        console.log(datum, 'datum');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: datum.class_id,
            class_type: datum.availabilityDate[index].class_type,
            allow_zoom_api: datum.allow_zoom_api,
            notes: datum.notes == undefined ? [] : datum.notes,
            schedule_id: datum.availabilityDate[index].shechdule_id,
            slotday: datum.availabilityDate[index].slotday,
            slotstarttime: datum.availabilityDate[index].slotstarttime,
            slotendtime: datum.availabilityDate[index].slotendtime,
            slotselected: datum.availabilityDate[index].slotselected,
        };
        this.classes.zoomInstant(data).subscribe((successData) => {
            this.zoomInstantSuccess(successData, datum);
        }, (error) => {
            this.toastr.error(error.ErrorObject, 'Failed!');
            this.commondata.showLoader(false);
        });
    }
    zoomInstantSuccess(successData, datum) {
        this.commondata.showLoader(false);
        if (successData.IsSuccess) {
            console.log(successData.ResponseObject, 'successData.ResponseObject');
            if (datum.allow_zoom_api == '0') {
                this.navigateOutsideZoom(successData.ResponseObject);
            }
            else if (datum.allow_zoom_api == '1') {
                if (this.settingValue == '2') {
                    this.modalRef = this.modalService.open(this.zoomDialog, { size: 's' });
                }
                else if (this.settingValue == '1') {
                    this.navigateOutsideZoom(successData.ResponseObject);
                }
                else if (this.settingValue == '0') {
                    this.zoomService.initZoomMeeting(datum);
                }
            }
        }
        else {
            this.toastr.error(successData.ErrorObject, 'Failed!');
        }
    }
    navigateOutsideZoom(data) {
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        // if (this.selectedClass.allow_zoom_api == '0') {
        //     link.setAttribute('href', data.meeting_link);
        // } else {
        //     //role id 4 is teacher
        //     if (this.auth.getRoleId() == '4') {
        //         link.setAttribute('href', data.teacher_link);
        //     } else if (this.auth.getRoleId() == '5') {
        //         link.setAttribute('href', data.student_link);
        //     }
        // }
        if (this.selectedClass.allow_zoom_api == '0') {
            link.setAttribute('href', data.meeting_link);
            console.log(data.meeting_link, 'data.meeting_link');
        }
        else {
            link.setAttribute('href', data.teacher_link);
        }
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    openZoomDialog(data) {
        if (!this.customLoader) {
            this.customLoader = true;
            this.selectedClass = data;
            if (data.availabilityDate.length == 0) {
                this.modalRef = this.modalService.open(this.zoomDialog1, { size: 's' });
            }
            else {
                if (this.selectedClass.allow_zoom_api == '0') {
                    this.navigateOutsideZoom(data.availabilityDate[0]);
                }
                else {
                    this.getMeetingLink(data, 0);
                }
            }
            this.customLoader = false;
        }
    }
    allReports(data) {
        data.viewType = '1';
        data.manageClass = true;
        data.content_id = '0';
        data.test_type_id = '0';
        this.auth.setSessionData('report_type', 'reportFromSchedule');
        this.auth.setSessionData('reportCalledFrom', 'schedule');
        this.auth.setSessionData('All-Reports', JSON.stringify(data));
        this.route.navigate(['/report/report']);
    }
    reportDetails(data) {
        this.auth.setSessionData('Individual-Class-Report', JSON.stringify(data));
        this.modalRef = this.modalService.open(this.reports, { size: 'xl' });
        this.contentNameValue = '';
    }
    addStudent(value, index) {
        console.log(value, 'list');
        this.selectedClassid = index;
        this.studentName = [];
        this.selectClassData = value;
        this.searchStudentList(1);
        this.modalRef = this.modalService.open(this.addStudentDialog, {
            size: 'lg',
            windowClass: 'customModalRef',
            scrollable: false
        });
    }
    onItemSelect(event, select) {
        console.log(event, 'event');
        this.studentDataList.forEach((item) => {
            if (select == 'single') {
                if (item.student_id == event.student_id) {
                    this.newlySelectedStuent.push(item);
                }
            }
            else {
                event.forEach((items1) => {
                    if (item.student_id == items1.student_id) {
                        this.newlySelectedStuent.push(item);
                    }
                });
            }
        });
        console.log(this.newlySelectedStuent, 'newlySelectedstudent');
    }
    onDeSelect(event) {
        console.log(event, 'eventt');
        this.newlySelectedStuent.forEach((item, index) => {
            if (event.student_id == item.student_id) {
                this.newlySelectedStuent.splice(index, 1);
            }
        });
        console.log(this.newlySelectedStuent, 'newlySelected');
    }
    onDeSelectAll() {
        console.log('evenn');
        this.newlySelectedStuent = [];
    }
    getGradeValue(event) {
        console.log(event, 'event');
        if (typeof event == 'undefined') {
            this.gradeValue = [];
            this.searchStudentList(1);
        }
        else if (event.length == 0) {
            this.gradeValue = undefined;
            this.searchStudentList(2);
            this.studentDataList = [];
        }
        else {
            this.gradeValue = [];
            event.forEach(item => this.gradeValue.push(item.grade_id));
            this.searchStudentList(1);
        }
    }
    searchStudentList(id) {
        if (this.gradeValue != '') {
            const data = {
                platform: 'web',
                type: 'list',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                end_date: this.scheduleData[this.selectedClassid].end_date,
                grade_id: this.gradeValue,
            };
            this.classes.searchList(data).subscribe((successData) => {
                this.searchStudentListSuccess(successData, id);
            }, (error) => {
                console.error(error);
            });
        }
        else {
            this.studentDataList = [];
        }
    }
    searchStudentListSuccess(successData, id) {
        if (successData.IsSuccess) {
            this.studentDataList = successData.ResponseObject;
            const { studentDataList, scheduleData } = this;
            const studentData = scheduleData[this.selectedClassid].student_details;
            this.studentDataList = studentDataList.filter(o1 => !studentData?.some(o2 => o1.student_id === o2.student_id));
            this.studentDataList.forEach((list) => {
                if (this.auth.getRoleId() == '4' && !this.showEmailId) {
                    list.name_with_email = list.name + (list.grade_name != '' ? '  - ' + list.grade_name : '');
                }
                else {
                    list.name_with_email = list.name + ' ( ' + (list.student_id) + ' ) ' + (list.grade_name != '' ? '  - ' + list.grade_name : '');
                }
            });
            console.log(this.studentDataList, 'studentDataList');
            if (id == 2) {
                this.studentName = [];
            }
        }
    }
    loadGradeList() {
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
            console.error(error, 'error_gradeList');
        });
    }
    gradeListSuccess(successData) {
        if (successData.IsSuccess) {
            this.gradeData = successData.ResponseObject;
            console.log(this.gradeData, 'gradeData loaded');
        }
    }
    submitClass() {
        if (this.newlySelectedStuent.length != 0) {
            if (this.studentAddedType == '0' || (this.studentAddedType == '1' && this.effectiveStartDate)) {
                const data = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    school_id: this.auth.getSessionData('school_id'),
                    teacher_id: this.selectClassData.teacher_id,
                    class_name: this.selectClassData.class_name,
                    subject: this.selectClassData.subject,
                    start_date: this.studentAddedType == '0' ? this.selectClassData.start_date : (this.effectiveStartDate ?
                        this.datePipe.transform(this.effectiveStartDate.singleDate.jsDate, 'yyyy-MM-dd') : ''),
                    end_date: this.studentAddedType == '0' ? this.selectClassData.end_date : (this.effectiveStartDate ?
                        this.datePipe.transform(this.effectiveStartDate.singleDate.jsDate, 'yyyy-MM-dd') : ''),
                    start_time: this.selectClassData?.class_start_time,
                    end_time: this.selectClassData?.class_end_time,
                    grade: this.gradName == undefined ? '' : this.gradName,
                    meeting_link: this.selectClassData.meeting_link,
                    meeting_id: this.selectClassData.meeting_id,
                    passcode: this.selectClassData.passcode,
                    class_code: this.selectClassData.class_code,
                    status: this.selectClassData.status,
                    class_id: this.selectClassData.class_id,
                    students: this.newlySelectedStuent,
                    is_makeup: this.studentAddedType ?? '0'
                };
                this.classes.submit(data).subscribe((successData) => {
                    this.submitClassSuccess(successData);
                }, (error) => {
                    this.submitClassFailure(error);
                });
            }
            else {
                this.toastr.error('Please select effective start date');
            }
        }
        else {
            this.toastr.error('Please Select Student');
        }
    }
    submitClassSuccess(successData) {
        if (successData.IsSuccess) {
            this.newlySelectedStuent = [];
            this.gradName = undefined;
            this.auth.removeSessionData('class-curriculum');
            this.effectiveStartDate = null;
            const redirectSchedulePage = !!this.auth.getSessionData('enterThroughSchedule');
            this.modalRef.close();
            this.toastr.success(successData.ResponseObject, 'Class');
            this.auth.removeSessionData('editView');
            if (redirectSchedulePage == true) {
                this.auth.removeSessionData('enterThroughSchedule');
            }
            this.enterClass(this.selectedClassid, 'addStudent');
        }
        else {
            this.toastr.error(successData.ResponseObject);
        }
    }
    submitClassFailure(error) {
        console.log(error, 'error');
        this.toastr.error(error.ResponseObject);
    }
    enterClass(id, type) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.scheduleData[id].class_id,
            grade: [this.scheduleData[id].grade_id],
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0'
        };
        this.commondata.showLoader(true);
        this.classes.classDetails(data).subscribe((successData) => {
            this.enterClassSuccess(successData, type);
        }, (error) => {
            console.log(error);
        });
    }
    enterClassSuccess(successData, type) {
        this.commondata.showLoader(false);
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            if (type == 'notes') {
                this.classNotesList = successData.ResponseObject[0].notes;
            }
            else if (type == 'addStudent') {
                const studentData = this.scheduleData[this.selectedClassid]?.student_details;
                successData.ResponseObject[0]?.students.forEach(items => {
                    if (!studentData?.some(code => code.student_id === items.user_id)) {
                        const studentDetails = {
                            student_id: items.user_id,
                            student_name: items.first_name + ' ' + items.last_name,
                            student_grade_name: items.grade_name,
                            attendance: '',
                            makeup_class_id: '',
                            makeup_class_name: '',
                            makeup_class_date: '',
                            student_class_type: items.student_class_type
                        };
                        studentData?.push(studentDetails);
                    }
                });
            }
            else {
                this.detailData = successData.ResponseObject;
                this.auth.setSessionData('classView', true);
                this.auth.setSessionData('enterThroughSchedule', true);
                this.auth.setSessionData('studentlist', JSON.stringify(this.detailData[0].students));
                this.auth.setSessionData('studentlist1', JSON.stringify(this.detailData[0].students));
                this.auth.setSessionData('card-data', JSON.stringify(this.detailData));
                this.auth.setSessionData('editclass', JSON.stringify(successData.ResponseObject));
                this.auth.setSessionData('updatedStudent', 1);
                if (this.detailData[0].classDate_status == '2' || this.detailData[0].classDate_status == '5') {
                    if (!this.manageClass) {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        this.auth.setSessionData('readonly_data', 'true');
                    }
                    else {
                        this.auth.removeSessionData('readonly_startdate');
                        this.auth.removeSessionData('readonly_data');
                    }
                    if (this.detailData[0].class_status != '1') {
                        this.route.navigate(['/class/create-class/edit']);
                    }
                    else {
                        this.route.navigate(['/class/create-class/edit']);
                        this.auth.setSessionData('editclass', JSON.stringify(this.detailData));
                        this.auth.setSessionData('updatedStudent', 1);
                    }
                }
                else if (this.detailData[0].classDate_status == '4' && this.detailData[0].class_status == '0') {
                    this.route.navigate(['/class/list-class']);
                }
                else if (this.detailData[0].classDate_status == '4' && this.detailData[0].class_status == '1') {
                    if (!this.manageClass) {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        this.auth.setSessionData('readonly_data', 'true');
                    }
                    else {
                        this.auth.removeSessionData('readonly_startdate');
                        this.auth.removeSessionData('readonly_data');
                    }
                    this.route.navigate(['/class/create-class/addEdit']);
                    this.auth.setSessionData('editclass', JSON.stringify(this.detailData));
                    this.auth.setSessionData('updatedStudent', 1);
                }
                else if (this.detailData[0].classDate_status == '3') {
                    if (this.detailData[0].class_status == '1') {
                        this.auth.removeSessionData('readonly_startdate');
                        this.auth.removeSessionData('readonly_data');
                    }
                    else {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        if (this.auth.getRoleId() == '4' && this.teacherType == '0') {
                            this.auth.setSessionData('readonly_data', 'true');
                        }
                        else {
                            this.auth.removeSessionData('readonly_data');
                        }
                    }
                    this.route.navigate(['/class/create-class/edit']);
                }
            }
        }
    }
    openNotes(scheduleData, studentData) {
        this.scheduleDetail = scheduleData;
        this.studentDetail = studentData;
        this.scheduleNotesList();
        this.modalRef = this.modalService.open(this.notes, { size: 'lg' });
    }
    sortByTime() {
        this.scheduleDataAlt.forEach((items) => {
            const splitMeridian = items.start_time.split(' ');
            const splitTime = splitMeridian[0].split(':');
            if (splitMeridian[1] == 'AM' && splitTime[0] == '12') {
                const convert = '0' + '.' + splitTime[1];
                items.convertedTime = parseFloat(convert);
            }
            else if (splitMeridian[1] == 'PM' && parseInt(splitTime[0]) < 12) {
                const add12 = parseInt(splitTime[0]) + 12;
                const convert = add12.toString() + '.' + splitTime[1];
                items.convertedTime = parseFloat(convert);
            }
            else {
                splitMeridian[0] = splitMeridian[0].replace(':', '.');
                items.convertedTime = parseFloat(splitMeridian[0]);
            }
        });
        this.scheduleDataAlt.sort((a, b) => a.convertedTime - b.convertedTime);
    }
    scheduleNotesList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.scheduleDetail.class_id,
            content_id: '0',
            student_id: this.studentDetail.student_id
        };
        this.classes.scheduleNotesList(data).subscribe((successData) => {
            this.scheduleNotesListSuccess(successData);
        }, (error) => {
            console.log(error);
        });
    }
    scheduleNotesListSuccess(successData) {
        if (successData.IsSuccess) {
            this.notesList = successData.ResponseObject;
        }
    }
    addNotes() {
        if (this.classNotes != '') {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                class_id: this.scheduleDetail.class_id,
                student_id: this.studentDetail.student_id,
                content_id: '0',
                notes: this.classNotes.replace(/\r?\n/g, '<br />'),
                type: '1'
            };
            this.classes.addScheduleNotes(data).subscribe((successData) => {
                this.addScheduleNoteSuccess(successData, data);
            }, (error) => {
                console.log(error);
            });
        }
        else {
            this.toastr.error('Please enter notes');
        }
    }
    deleteNotes(item) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.scheduleDetail.class_id,
            schedule_id: this.scheduleDetail.schedule_id,
            student_id: this.studentDetail.student_id,
            id: item.id
        };
        this.content.notesDelete(data).subscribe((successData) => {
            this.addScheduleNoteSuccess(successData, data);
        }, (error) => {
            console.log(error);
        });
    }
    addScheduleNoteSuccess(successData, data) {
        if (successData.IsSuccess) {
            if (data.type == '1') {
                this.editorValue != '' ? this.editorValue.setContent('') : '';
                this.classNotes = '';
            }
            this.scheduleNotesList();
        }
    }
    getEditorValue(event) {
        this.editorValue = event.editor;
        this.classNotes = event.content;
    }
    openClassNotes(i, value) {
        this.modalRef = this.modalService.open(this.writeNoteOpen, { size: 'lg' });
        this.classNotes = '';
        this.classId = value.class_id;
        this.enterClass(i, 'notes');
    }
    addClassNote() {
        if (this.classNotes == '') {
            this.toastr.error('Notes should not be empty');
            return false;
        }
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.classId,
            note: this.classNotes.replace(/\r?\n/g, '<br />'),
            status: '1',
            add_date: this.currentDate
        };
        this.classes.getNotesList(data).subscribe((successData) => {
            if (successData.IsSuccess) {
                this.classNotesList = successData.ResponseObject;
                this.editorValue != '' ? this.editorValue.setContent('') : '';
                this.classNotes = '';
            }
            else {
                this.toastr.error(successData.ErrorObject);
            }
        }, (error) => {
        });
    }
    deleteClassNote(value) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.classId ? this.classId : '',
            note: value.note,
            status: '2',
            id: value.id,
            add_date: value.add_date
        };
        this.classes.getNotesList(data).subscribe((successData) => {
            this.commondata.showLoader(false);
            if (successData.IsSuccess) {
                this.classNotesList = successData.ResponseObject;
            }
            else {
                this.toastr.error(successData.ErrorObject);
            }
        }, (error) => {
            this.commondata.showLoader(false);
        });
    }
    showInformation(data) {
        this.classInfo = data;
        this.modalRef = this.modalService.open(this.showInform, { size: 'sm' });
    }
    closeStudentModRef() {
        this.modalRef.close();
        this.gradName = undefined;
        this.newlySelectedStuent = [];
        // this.schoolDataList = [];
    }
    shareEmail(value, calledForm = '') {
        console.log(value);
        if (calledForm == 'addStudent') {
            this.modalRef.close('addStudentDialog');
        }
        this.emailList = [];
        this.blukEmailValue = [];
        this.selectClassData = value;
        this.modalRef = this.modalService.open(this.addMultipleEmailDialog, { size: 'lg' });
    }
    add(event) {
        const a = event.value.split(/[ ,]+/);
        console.log(a.length, 'event.value');
        if (a.length != 0) {
            for (let i = 0; i < a.length; i++) {
                if (this.validateEmail(a[i])) {
                    this.emailList.push({ value: a[i], invalid: false });
                }
                else if (a[i] != '') {
                    this.emailList.push({ value: a[i], invalid: true });
                    this.studentEmailForm.controls['emails'].setErrors({ incorrectEmail: true });
                }
                console.log(this.emailList, 'emailList');
            }
        }
        else {
            if (a) {
                if (this.validateEmail(a)) {
                    this.emailList.push({ value: a, invalid: false });
                }
                else if (a != '') {
                    this.emailList.push({ value: a, invalid: true });
                    this.studentEmailForm.controls['emails'].setErrors({ incorrectEmail: true });
                }
                console.log(this.emailList, 'emailList');
            }
        }
        if (event.input) {
            event.input.value = '';
        }
        this.emailList = this.removeDuplicates(this.emailList, 'value');
        const validation = this.emailList;
        this.validationEmail = validation.every((items) => {
            if (!items.invalid) {
                return true;
            }
            return false;
        });
        console.log(this.emailList, 'emailListOveral');
    }
    removeDuplicates(originalArray, prop) {
        const newArray = [];
        const lookupObject = {};
        for (var i in originalArray) {
            lookupObject[originalArray[i][prop]] = originalArray[i];
        }
        for (i in lookupObject) {
            newArray.push(lookupObject[i]);
        }
        return newArray;
    }
    removeEmail(data) {
        if (this.emailList.indexOf(data) >= 0) {
            this.emailList.splice(this.emailList.indexOf(data), 1);
        }
        const validation = this.emailList;
        this.validationEmail = validation.every((items) => {
            if (!items.invalid) {
                return true;
            }
            return false;
        });
    }
    bulkMail() {
        if (this.emailList.length != 0) {
            for (let i = 0; i < this.emailList.length; i++) {
                this.blukEmailValue.push(this.emailList[i].value);
            }
            console.log(this.blukEmailValue, 'emaildata');
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                class_id: this.selectClassData.class_id,
                student_id: [],
                email_id: this.blukEmailValue
            };
            this.classes.bulkMail(data).subscribe((successData) => {
                this.bulkMailSuccess(successData);
            }, (error) => {
                this.bulkMailFailure(error);
            });
        }
        else {
            this.toastr.error('Enter emailId is required');
        }
    }
    bulkMailSuccess(successData) {
        if (successData.IsSuccess) {
            this.modalRef.close();
            this.toastr.success(successData.ResponseObject);
        }
        else {
            this.blukEmailValue = [];
            this.toastr.error(successData.ErrorObject);
        }
    }
    bulkMailFailure(error) {
        console.log(error, 'error');
        this.toastr.error(error.ResponseObject, 'Class');
    }
    validateArrayNotEmpty(c) {
        if (c.value && c.value.length === 0) {
            return {
                validateArrayNotEmpty: { valid: false },
            };
        }
        return null;
    }
    voidFunctionCalled(data, index) {
        this.voidClassData = data;
        this.voidClassIndex = index;
        console.log(this.voidClass, 'voidClass');
        this.modalRef = this.modalService.open(this.voidClass);
    }
    deleteStudentList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.voidClassData.student_details[this.voidClassIndex].makeup_class_id,
            student_id: this.voidClassData.student_details[this.voidClassIndex].student_id,
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
            this.getScheduleDetails(this.voidClassData.class_id, this.voidClassData.schedule_id);
        }
        else {
            this.toastr.error(successData.ResponseObject);
        }
    }
    setMakeUpClassForm() {
        this.makeUpClass = this.formBuilder.group({
            toClass: [null, Validators.required],
            from_Date: ['', Validators.required]
        });
    }
    setStudentEmailForm() {
        this.studentEmailForm = this.formBuilder.group({
            emails: this.formBuilder.array([], [this.validateArrayNotEmpty]),
            message: '',
            is_makeup: false,
            start_date: ''
        });
    }
    addStudentClicked() {
        this.addStudentEnabled = !this.addStudentEnabled;
        this.setStudentForm();
    }
    setStudentForm() {
        this.addStudentForm = this.formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            email_id: ['', Validators.required],
            grade: [null, Validators.required],
        });
    }
    addstudent() {
        const addresslist = [{ address1: '', address2: '', city: '', state: '', country: '', postal_code: '', address_type: '2' },
            { address1: '', address2: '', city: '', state: '', country: '', postal_code: '', address_type: '3' }];
        if (this.addStudentForm.valid) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                first_name: this.addStudentForm.controls.first_name.value,
                last_name: this.addStudentForm.controls.last_name.value,
                gender: '',
                birthday: '',
                school_id: this.auth.getSessionData('school_id'),
                school_idno: '',
                grade_id: this.addStudentForm.controls.grade.value ?? '',
                email_id: this.addStudentForm.controls.email_id.value,
                mobile: [],
                batch_id: '',
                registration_date: '',
                dropped_date: '',
                address: addresslist,
                parent1_firstname: '',
                parent1_lastname: '',
                parent2_firstname: '',
                parent2_lastname: '',
                parent1_email_ids: [],
                parent2_email_ids: [],
                profile_url: '',
                profile_thumb_url: '',
                status: '1'
            };
            console.log(data, 'data');
            this.student.studentAdd(data).subscribe((successData) => {
                this.addStudentSuccess(successData);
            }, (error) => {
                console.error(error, 'add_Student');
            });
        }
        else {
            this.validationService.validateAllFormFields(this.addStudentForm);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    addStudentSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject, 'Student');
            this.searchStudentList(1);
            this.addStudentEnabled = false;
        }
        else {
            this.toastr.error(successData.ErrorObject, 'Student');
        }
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    static { this.ɵfac = function DailyScheduleComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DailyScheduleComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.CommonDataService), i0.ɵɵdirectiveInject(i3.ClassService), i0.ɵɵdirectiveInject(i4.FormBuilder), i0.ɵɵdirectiveInject(i5.ContentdetailService), i0.ɵɵdirectiveInject(i6.DatePipe), i0.ɵɵdirectiveInject(i7.ToastrService), i0.ɵɵdirectiveInject(i8.ZoomServiceService), i0.ɵɵdirectiveInject(i9.SseClient), i0.ɵɵdirectiveInject(i10.NgbModal), i0.ɵɵdirectiveInject(i11.StudentService), i0.ɵɵdirectiveInject(i12.Router), i0.ɵɵdirectiveInject(i13.NewsubjectService), i0.ɵɵdirectiveInject(i14.EnvironmentService), i0.ɵɵdirectiveInject(i15.ValidationService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DailyScheduleComponent, selectors: [["app-daily-schedule"]], viewQuery: function DailyScheduleComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
            i0.ɵɵviewQuery(_c4, 5);
            i0.ɵɵviewQuery(_c5, 5);
            i0.ɵɵviewQuery(_c6, 5);
            i0.ɵɵviewQuery(_c7, 5);
            i0.ɵɵviewQuery(_c8, 5);
            i0.ɵɵviewQuery(_c9, 5);
            i0.ɵɵviewQuery(_c10, 5);
            i0.ɵɵviewQuery(_c11, 5);
            i0.ɵɵviewQuery(_c12, 5);
            i0.ɵɵviewQuery(_c13, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewoveralldetails = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.zoomDialog = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.zoomDialog1 = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.meetingSelection = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.recordinglist = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.reports = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.notes = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.writeNoteOpen = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addMultipleEmailDialog = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.showInform = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteClassDialog = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addStudentDialog = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.confirmation = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.voidClass = _t.first);
        } }, inputs: { page: "page" }, features: [i0.ɵɵNgOnChangesFeature], decls: 50, vars: 6, consts: [["dp", "angular-mydatepicker"], ["viewoveralldetails", ""], ["zoomDialog", ""], ["zoomDialog1", ""], ["reports", ""], ["notes", ""], ["writeNoteOpen", ""], ["addMultipleEmailDialog", ""], ["showInform", ""], ["deleteClass", ""], ["voidClass", ""], ["addStudentDialog", ""], ["recordinglist", ""], ["confirmation", ""], ["chipList", ""], ["multiSelect", ""], ["dp2", "angular-mydatepicker"], [1, "container-fluid"], [1, "row", "mt-3"], [1, "col-12", "col-sm-12", "col-lg-6", "align-self-center"], [1, "col-md-8", "px-0"], [1, "d-flex", "input-group", "align-items-baseline"], ["angular-mydatepicker", "", "autocomplete", "off", "name", "dp", "placeholder", "mm/dd/yyyy", 1, "form-control", 3, "click", "dateChanged", "ngModelChange", "ngModel", "options"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-calendar-o"], [1, "col-12", "col-sm-12", "col-lg-6", "px-0", "d-flex", "justify-content-end"], [1, "col-12", "px-1", "col-sm-6", "col-lg-6", "align-self-center"], [1, "pull-right"], [1, "input-group"], ["size", "50", "type", "text", 1, "form-control", 2, "height", "40px", 3, "input", "ngModelChange", "ngModel", "placeholder"], ["type", "submit", 1, "btn", "btn-primary", 2, "padding", "6px 8px", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "row", "px-3"], [1, "col-12", "px-0", "my-3"], ["class", "row my-3 d-flex justify-content-center align-items-center", "style", "height: 60vh", 4, "ngIf"], ["class", "col-md-12 my-2 d-flex flex-wrap px-0", 4, "ngIf"], [1, "customModalRef"], [1, "row", "my-3", "d-flex", "justify-content-center", "align-items-center", 2, "height", "60vh"], [1, "col-4"], [1, "nodataList"], [1, "col-md-12", "my-2", "d-flex", "flex-wrap", "px-0"], ["class", "col-12 flex-start card schedule-design class-hover cursor", 3, "id", 4, "ngFor", "ngForOf"], [1, "col-12", "flex-start", "card", "schedule-design", "class-hover", "cursor", 3, "id"], ["data-toggle", "collapse", 1, "row", "p-3", "d-flex", "flex-wrap", 3, "click", "id"], [1, "col-md-12", "px-0", "mb-2", "d-flex", "justify-content-start"], [1, "mb-0", "font-weight-bold", "px-2", "py-1", 2, "font-size", "0.8rem", "border-radius", "3px", "color", "grey"], [1, "font-weight-bold", "color-primary", "align-self-center", "mb-0"], ["title", "New Announcement", "style", "font-size: 1.4rem", "class", "ml-2 fa fa-bullhorn color-primary", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["title", "New Inbox Message", "style", "font-size: 1.4rem", "class", "fa fa-commenting-o color-primary ml-2", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["class", "col-md-12 px-0 d-flex justify-content-start", 4, "ngIf"], [1, "col-md-4", "px-0"], [1, "col-md-12", "px-0", "d-flex", "justify-content-end", "mb-2"], ["class", " px-1 align-self-center", "style", "border-radius: 2px; color: grey;", 4, "ngIf"], [1, "font-weight-bold", "color-primary"], [1, "col-md-12", "px-0", "d-flex", "justify-content-end"], ["class", "btn-sm-view btn-outline-primary px-2 py-1 mr-2", "data-toggle", "collapse", 4, "ngIf"], ["class", "dropdown", 3, "click", 4, "ngIf"], ["class", "btn-sm-view cancel px-2 py-1 mr-2", 3, "click", 4, "ngIf"], ["class", "collapse my-3", 3, "id", 4, "ngIf"], ["title", "New Announcement", "aria-hidden", "true", 1, "ml-2", "fa", "fa-bullhorn", "color-primary", 2, "font-size", "1.4rem", 3, "click"], ["class", "upload-count", 4, "ngIf"], [1, "upload-count"], ["title", "New Inbox Message", "aria-hidden", "true", 1, "fa", "fa-commenting-o", "color-primary", "ml-2", 2, "font-size", "1.4rem", 3, "click"], [1, "col-md-12", "px-0", "d-flex", "justify-content-start"], [1, "font-weight-bold", "color-primary", "align-self-center"], [1, "px-1", "align-self-center", 2, "border-radius", "2px", "color", "grey"], ["data-toggle", "collapse", 1, "btn-sm-view", "btn-outline-primary", "px-2", "py-1", "mr-2"], [1, "badge", "cursor", "align-text-bottom", 2, "min-width", "1.4rem", "background-color", "#8f008a"], [1, "dropdown", 3, "click"], [1, "btn-sm-i", "btn-outline-primary"], ["aria-hidden", "true", 1, "fa", "fa-sort-desc", "float-right", "ml-2"], [1, "dropdown-content", 2, "right", "1px"], [3, "click", 4, "ngIf"], [3, "click"], ["aria-hidden", "true", 1, "fa", "fa-book"], ["aria-hidden", "true", 1, "fa", "fa-info", "pl-1", "pr-1"], ["title", "Enter Online Class", 1, "fa", "fa-video-camera", "mr-2", 2, "color", "#8F008A"], [4, "ngIf"], ["style", "width: 1rem;height: 1rem", "class", "spinner-border text-secondary", "role", "status", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-video-camera"], ["role", "status", 1, "spinner-border", "text-secondary", 2, "width", "1rem", "height", "1rem"], [1, "sr-only"], ["aria-hidden", "true", 1, "fa", "fa-pencil"], ["title", "Delete Class", "aria-hidden", "true", 1, "fa", "fa-trash"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle"], ["aria-hidden", "true", 1, "fa", "fa-share-alt"], ["aria-hidden", "true", 1, "fa", "fa-file-video-o"], ["aria-hidden", "true", 1, "fa", "fa-bar-chart", "pr-1"], [1, "btn-sm-view", "cancel", "px-2", "py-1", "mr-2", 3, "click"], ["title", "Schedule Make-up Class", "aria-hidden", "true", 1, "fa", "fa-calendar-plus-o", "mr-1", 2, "font-size", "16px"], [1, "collapse", "my-3", 3, "id"], ["class", "row d-flex justify-content-center align-items-center", "style", "min-height: 25vh", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-end"], [1, "badge", "star_badge", "mr-1"], [1, "mx-1"], [1, "font-weight-bold"], ["class", "table table-hover mt-2", 4, "ngIf"], [1, "row", "d-flex", "justify-content-center", "align-items-center", 2, "min-height", "25vh"], [1, "col-6", "align-self-center", "customize-card4", "text-center", "font-weight-bold", "p-3"], [1, "table", "table-hover", "mt-2"], [1, "thead-light"], [1, "d-flex", "align-items-center"], [1, "badge", "badge-success", "ml-2"], [1, "text-center"], ["class", "text-center border-0", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "text-center", "border-0"], [1, "d-flex", "justify-content-between"], ["class", "badge star_badge mr-1", 4, "ngIf"], [1, "cursor", "name-hover", 3, "click"], ["title", "Add notes", 1, "fa", "fa-newspaper-o", "align-self-center", "color-primary", "cursor", 3, "click"], [1, "radial-bar-primary", "text-center"], ["class", "radial-bar-primary text-center", 4, "ngIf"], ["class", "radial-bar-primary d-flex align-items-center justify-content-center", 4, "ngIf"], ["type", "checkbox", 1, "cursor", 3, "change", "disabled", "checked", "name"], [1, "d-flex", "align-items-center", "justify-content-center"], ["type", "checkbox", 1, "cursor", 3, "change", "checked", "name", "disabled"], [1, "radial-bar-primary", "d-flex", "align-items-center", "justify-content-center"], ["class", "btn-sm-view cancel ml-2 px-2 py-1", 3, "click", 4, "ngIf"], ["class", "makUpClass_text ml-2 my-1", 4, "ngIf"], ["title", "Void Class", "style", "font-size: 18px", "class", "fa fa-times-circle color-red ml-2", 3, "click", 4, "ngIf"], [1, "btn-sm-view", "cancel", "ml-2", "px-2", "py-1", 3, "click"], [1, "makUpClass_text", "ml-2", "my-1"], [1, "ml-2", "color-primary", "font-weight-bold", 2, "font-size", "14px"], ["title", "Void Class", 1, "fa", "fa-times-circle", "color-red", "ml-2", 2, "font-size", "18px", 3, "click"], [1, "modal-header", "align-items-center"], ["id", "modal-basic-title", 1, "modal-title", "color-primary"], ["aria-hidden", "true", 1, "fa", "fa-close", "fa-lg", "mt-1", 2, "color", "#7F3486", "cursor", "pointer", "float", "right", 3, "click"], [1, "modal-body"], [3, "studentdata"], [1, "modal-title", "text-center"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "modal-body", "d-flex", "justify-content-right"], [1, "col-12", "text-center"], [1, "modal-footer"], [1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "modal-title"], [3, "classShow", "contentNameValue", "showContent", "studentView", "timeView"], [1, "row", "d-flex", "justify-content-center"], ["class", "col-11 mt-2 card class-card1 class-hover w-99", 4, "ngFor", "ngForOf"], [1, "col-11", "mt-2"], [3, "emitEditorValue", "editorPatchValue", "height", "id", "showDropBtn", "showInputBtn"], [1, "col-11", "text-right", "mt-2"], [1, "col-11", "mt-2", "card", "class-card1", "class-hover", "w-99"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-9", 2, "word-wrap", "break-word"], [1, "py-2"], ["class", "letter", 4, "ngIf"], [1, "mb-0", "mt-3", 3, "innerHTML"], [1, "col-3", "d-flex", "align-items-center", "justify-content-end"], ["aria-hidden", "true", 1, "fa", "fa-trash", "fa-1x", "text-danger", 2, "cursor", "pointer", 3, "click"], [1, "letter"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-2", 3, "click"], [1, "col-sm-12"], [3, "formGroup"], [1, "col-12"], ["formArrayName", "emails"], ["selected", "", "required", "", "name", "chips", 3, "color", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Enter Email Id", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], ["class", "col-12", 4, "ngIf"], [1, "my-2", 2, "color", "black"], [1, "mt-2", "mb-3", 2, "color", "black"], [1, "color-primary"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "disabled"], ["selected", "", "required", "", "name", "chips", 3, "removed", "color", "removable"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], ["class", "p-0", 4, "ngIf"], [1, "p-0"], [1, "t-name", "font-weight-bold"], [1, "t-name", "capital", "font-weight-bold"], [1, "modal-title", "align-items-center"], [1, "col-md-12"], [1, "mb-0"], ["type", "button", 1, "btn", "cancel", 3, "click"], [1, "modal-title", "align-items-center", "font-weight-bold"], [1, "col-md-12", "px-0"], [1, "col-7", "pl-0"], [1, "modal-title", "font-weight-bold"], ["class", "text-muted mb-0", 4, "ngIf"], [1, "col-5", "d-flex", "justify-content-end", "align-items-center", "pr-0"], ["class", "btn cancel", "title", "Invite By Email", 3, "click", 4, "ngIf"], ["class", "btn cancel", 3, "click", 4, "ngIf"], ["title", "Close Add Student", 1, "fa", "fa-close", "cursor", "ml-3", 3, "click"], [1, "modal-body", "row"], ["class", "col-md-9 form-group", 4, "ngIf"], ["class", "col-md-3 form-group align-content-end", 4, "ngIf"], ["class", "col-md-9 row", 4, "ngIf"], ["class", "col-md-9 row mt-3", 4, "ngIf"], [1, "col-12", 3, "ngbCollapse"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], [1, "text-danger", "ml-1"], [1, "col-xl-8", "col-md-7"], ["formControlName", "first_name", "id", "validationCustom0", "type", "text", "placeholder", "First Name", "required", "", 1, "form-control"], ["class", "error", 4, "ngIf"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], ["formControlName", "last_name", "id", "validationCustom1", "type", "text", "placeholder", "Last Name", "required", "", 1, "form-control"], ["for", "validationCustom5", 1, "col-xl-3", "col-md-4"], ["formControlName", "email_id", "id", "validationCustom5", "pattern", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$", "type", "email", "placeholder", "Email", "required", "", 1, "form-control"], ["bindLabel", "grade_name", "bindValue", "grade_id", "formControlName", "grade", "placeholder", "Select Grade", "typeToSearchText", "", 3, "items"], [1, "text-muted", "mb-0"], [1, "text-danger"], ["title", "Invite By Email", 1, "btn", "cancel", 3, "click"], [1, "btn", "cancel", 3, "click"], [1, "fa", "fa-long-arrow-left", "mr-1"], [1, "col-md-9", "form-group"], [2, "font-weight", "600"], ["bindLabel", "grade_name", "bindValue", "grade_id", "placeholder", "Select Grade", "typeToSearchText", "", "multiple", "true", 3, "ngModelChange", "change", "items", "ngModel"], [3, "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll", "placeholder", "data", "settings", "disabled", "ngModel"], [1, "col-md-3", "form-group", "align-content-end"], [1, "fa", "fa-plus-circle", "mr-1"], [1, "col-md-9", "row"], [1, "col-12", 2, "font-weight", "600"], [1, "col-3"], [1, "form-check"], ["id", "regular", "type", "radio", "name", "studentType", "value", "0", 1, "form-check-input", "cursor", 3, "ngModelChange", "ngModel", "checked"], ["for", "regular", 1, "form-check-label", "cursor"], ["id", "makeUp", "type", "radio", "value", "1", "name", "studentType", 1, "form-check-input", "cursor", 3, "ngModelChange", "checked", "ngModel"], ["for", "makeUp", 1, "form-check-label", "cursor"], [1, "col-md-9", "row", "mt-3"], [1, "d-flex", "align-items-baseline"], ["placeholder", "mm/dd/yyyy", "name", "dp2", "angular-mydatepicker", "", "autocomplete", "off", "required", "", 1, "form-control", 3, "click", "ngModelChange", "ngModel", "options"], [1, "error"], [1, "modal-header", "d-flex", "align-items-center"], [1, "modal-title", "pl-0", "col-7"], [1, "col-md-10", "form-group"], ["class", "col-md-12 mt-1 cursor", 4, "ngFor", "ngForOf"], ["class", "col-md-12 mt-1", 4, "ngIf"], [1, "col-md-12", "mt-1", "cursor"], [1, "card"], [1, "card-body", "card-hover2", 3, "click"], [1, "col-4", "align-self-center"], ["class", "t-name font-weight-bold", "style", "font-size: 11px;", 4, "ngIf"], [1, "t-name", "font-weight-bold", 2, "font-size", "11px"], [1, "col-md-12", "mt-1"], [1, "card", 2, "box-shadow", "2px 2px 2px 2px #e6baea"], [1, "card-body", 2, "align-self", "center"], [2, "color", "#8F008A"]], template: function DailyScheduleComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "div", 20)(4, "div", 21)(5, "input", 22, 0);
            i0.ɵɵlistener("click", function DailyScheduleComponent_Template_input_click_5_listener() { i0.ɵɵrestoreView(_r1); const dp_r2 = i0.ɵɵreference(6); return i0.ɵɵresetView(dp_r2.toggleCalendar()); })("dateChanged", function DailyScheduleComponent_Template_input_dateChanged_5_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDateChanged($event)); });
            i0.ɵɵtwoWayListener("ngModelChange", function DailyScheduleComponent_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.searchDate, $event) || (ctx.searchDate = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 23)(8, "button", 24);
            i0.ɵɵlistener("click", function DailyScheduleComponent_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r1); const dp_r2 = i0.ɵɵreference(6); return i0.ɵɵresetView(dp_r2.toggleCalendar()); });
            i0.ɵɵelement(9, "i", 25);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(10, "div", 26)(11, "div", 27)(12, "div", 28)(13, "div", 29)(14, "input", 30);
            i0.ɵɵlistener("input", function DailyScheduleComponent_Template_input_input_14_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.setFilter()); });
            i0.ɵɵtwoWayListener("ngModelChange", function DailyScheduleComponent_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 23)(16, "button", 31);
            i0.ɵɵlistener("click", function DailyScheduleComponent_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.setFilter()); });
            i0.ɵɵelement(17, "i", 32);
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵelementStart(18, "div", 33)(19, "div", 34);
            i0.ɵɵtemplate(20, DailyScheduleComponent_div_20_Template, 4, 0, "div", 35)(21, DailyScheduleComponent_div_21_Template, 2, 1, "div", 36);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(22, DailyScheduleComponent_ng_template_22_Template, 6, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(24, DailyScheduleComponent_ng_template_24_Template, 13, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(26, DailyScheduleComponent_ng_template_26_Template, 11, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(28, DailyScheduleComponent_ng_template_28_Template, 6, 5, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(30, DailyScheduleComponent_ng_template_30_Template, 12, 6, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(32, DailyScheduleComponent_ng_template_32_Template, 14, 6, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor)(34, DailyScheduleComponent_ng_template_34_Template, 38, 10, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor)(36, DailyScheduleComponent_ng_template_36_Template, 9, 4, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor)(38, DailyScheduleComponent_ng_template_38_Template, 17, 1, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor)(40, DailyScheduleComponent_ng_template_40_Template, 20, 2, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor)(42, DailyScheduleComponent_ng_template_42_Template, 53, 16, "ng-template", 37, 11, i0.ɵɵtemplateRefExtractor)(44, DailyScheduleComponent_ng_template_44_Template, 21, 7, "ng-template", 37, 11, i0.ɵɵtemplateRefExtractor)(46, DailyScheduleComponent_ng_template_46_Template, 13, 5, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor)(48, DailyScheduleComponent_ng_template_48_Template, 20, 2, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchDate);
            i0.ɵɵproperty("options", ctx.myDpOptions);
            i0.ɵɵadvance(9);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchText);
            i0.ɵɵproperty("placeholder", ctx.auth.getRoleId() == "4" ? "Search class or student" : ctx.auth.getRoleId() == "5" ? "Search teacher or class" : "Search teacher, class or student");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.scheduleData.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.scheduleData.length != 0);
        } }, dependencies: [i6.NgForOf, i6.NgIf, i10.NgbCollapse, i4.ɵNgNoValidate, i4.DefaultValueAccessor, i4.RadioControlValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.PatternValidator, i4.FormGroupDirective, i4.FormControlName, i4.FormArrayName, i16.NgSelectComponent, i4.NgModel, i17.AngularMyDatePickerDirective, i18.MatIcon, i19.MatFormField, i19.MatError, i20.MatChipGrid, i20.MatChipInput, i20.MatChipRemove, i20.MatChipRow, i21.OveralldetailsComponent, i22.MissedWorkReportComponent, i23.TinyMiceComponent, i24.MultiSelectComponent, i6.DatePipe, i25.CustomDateFormatPipe], styles: [".upload-count[_ngcontent-%COMP%] {\n  padding: 4px 6px;\n  margin-left: -8px;\n  font-size: 12px;\n  color: #fff;\n  font-weight: 400;\n  border-radius: 50%;\n  position: relative;\n  top: -12px !important;\n  background: #8F008A;\n}\n\n.makUpClass_text[_ngcontent-%COMP%] {\n  color: #808080;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.eye-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  padding: 10px 20px;\n  border: 2px solid #d4a0f0;\n  border-radius: 10px;\n  text-align: center;\n  box-shadow: 0 0 5px rgba(212, 160, 240, 0.5);\n}\n\n.eye-container[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-bottom: 10px solid #d4a0f0;\n}\n\ninput[_ngcontent-%COMP%]:disabled {\n  cursor: default !important;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DailyScheduleComponent, [{
        type: Component,
        args: [{ selector: 'app-daily-schedule', template: "<div class=\"container-fluid\">\n    <div class=\"row mt-3\">\n        <div class=\"col-12 col-sm-12 col-lg-6 align-self-center\">\n            <div class=\"col-md-8 px-0\">\n                <div class=\"d-flex input-group align-items-baseline\">\n                    <input #dp=\"angular-mydatepicker\" (click)=\"dp.toggleCalendar()\" (dateChanged)=\"onDateChanged($event)\"\n                           [(ngModel)]=\"searchDate\" [options]=\"myDpOptions\" angular-mydatepicker autocomplete=\"off\"\n                           class=\"form-control\" name=\"dp\" placeholder=\"mm/dd/yyyy\">\n                    <div class=\"input-group-append\">\n                        <button (click)=\"dp.toggleCalendar()\" class=\"btn btn-primary\" type=\"button\">\n                            <i class=\"fa fa-calendar-o\"></i></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12 col-sm-12 col-lg-6 px-0 d-flex justify-content-end\">\n            <div class=\"col-12 px-1 col-sm-6 col-lg-6 align-self-center\">\n                <div class=\"pull-right\">\n                    <div class=\"input-group\">\n                        <input (input)=\"setFilter()\" [(ngModel)]=\"searchText\" class=\"form-control\" \n                               [placeholder]=\"auth.getRoleId() == '4' ? 'Search class or student' : (auth.getRoleId() == '5' ? 'Search teacher or class' : 'Search teacher, class or student')\" \n                               size=\"50\" style=\"height:40px\" type=\"text\">\n                        <div class=\"input-group-append\">\n                            <button style=\"padding: 6px 8px\" (click)=\"setFilter()\" class=\"btn btn-primary\" type=\"submit\">\n                                <i aria-hidden=\"true\" class=\"fa fa-search\"></i>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row px-3\">\n        <div class=\"col-12 px-0 my-3\">\n            <div *ngIf=\"scheduleData.length == 0\" class=\"row my-3 d-flex justify-content-center align-items-center\" style=\"height: 60vh\">\n                <div class=\"col-4\">\n                    <button class=\"nodataList\">No Data Available!</button>\n                </div>\n            </div>\n            <div *ngIf=\"scheduleData.length != 0\" class=\"col-md-12 my-2 d-flex flex-wrap px-0\">\n                <div id=\"class_{{item.class_id}}schedule_{{item.schedule_id}}\" *ngFor=\"let item of scheduleData; let j = index\" class=\"col-12 flex-start card schedule-design class-hover cursor\">\n                    <div id=\"schedule_{{item.schedule_id}}\" class=\"row p-3 d-flex flex-wrap\" (click)=\"cardNavigation(item)\" [attr.aria-controls]=\"'#studentCount' + j\" [attr.data-target]=\"'#studentCount' + j\" data-toggle=\"collapse\">\n                        <div class=\"col-md-8 px-0\">\n                            <div class=\"col-md-12 px-0 mb-2 d-flex justify-content-start\">\n<!--                                <label class=\"col-md-4 px-0\">Class Name: </label>-->\n                                <label class=\"mb-0 font-weight-bold px-2 py-1\" style=\"font-size: 0.8rem; border-radius: 3px; color: grey\">Class Name :</label>&nbsp;&nbsp;&nbsp;\n                                <h4 class=\"font-weight-bold color-primary align-self-center mb-0\">{{item.class_name}}\n                                    <i title=\"New Announcement\" *ngIf=\"item.announcement_type != '1' && !makeUpClassSelected\" (click)=\"redirectToAnnouncement(item, $event, 'announcement')\" style=\"font-size: 1.4rem\" class=\"ml-2 fa fa-bullhorn color-primary\" aria-hidden=\"true\">\n                                        <span *ngIf=\"auth.getRoleId() != '5'\" class=\"upload-count\">{{item.new_comments ? item.new_comments : 0}}</span>\n                                    </i>\n                                    <i title=\"New Inbox Message\" (click)=\"auth.getRoleId() == '5' ? redirectToAnnouncement(item, $event, 'inbox') : classDetailsService(item, 'inbox', $event)\"\n                                       *ngIf=\"auth.getRoleId() != '2' && !makeUpClassSelected\" style=\"font-size: 1.4rem\" class=\"fa fa-commenting-o color-primary ml-2\" aria-hidden=\"true\">\n                                        <span class=\"upload-count\">{{item.newMessage}}</span>\n                                    </i>\n                                </h4>\n                            </div>\n                            <div *ngIf=\"auth.getRoleId() != '4'\" class=\"col-md-12 px-0 d-flex justify-content-start\">\n                                <label class=\"mb-0 font-weight-bold px-2 py-1\" style=\"font-size: 0.8rem; border-radius: 3px; color: grey;\">Teacher Name :</label>\n                                    <span class=\"font-weight-bold color-primary align-self-center\">{{item.teacher_name}}</span>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4 px-0\">\n                            <div class=\"col-md-12 px-0 d-flex justify-content-end mb-2\">\n                                <span *ngIf=\"item.start_time != null\" class=\" px-1 align-self-center\" style=\"border-radius: 2px; color: grey;\">Schedule :</span><span class=\"font-weight-bold color-primary\"> &nbsp;&nbsp;{{item.start_time + ' - ' + item.end_time}}</span>\n                            </div>\n                            <div class=\"col-md-12 px-0 d-flex justify-content-end\">\n                                <button *ngIf=\"roleId != '5' && !makeUpClassSelected\" [attr.aria-controls]=\"'#studentCount' + j\" [attr.data-target]=\"'#studentCount' + j\" class=\"btn-sm-view btn-outline-primary px-2 py-1 mr-2\" data-toggle=\"collapse\">\n                                    Attendance &nbsp;<small class=\"badge cursor align-text-bottom\" style=\"min-width: 1.4rem; background-color: #8f008a\">{{item.student_details.length}}</small></button>\n                                <div *ngIf=\"!makeUpClassSelected\" class=\"dropdown\" (click)=\"$event.stopPropagation()\">\n                                    <button class=\"btn-sm-i btn-outline-primary\">Action <i class=\"fa fa-sort-desc float-right ml-2\" aria-hidden=\"true\"></i></button>\n                                    <div class=\"dropdown-content\" style=\"right: 1px\">\n                                        <a *ngIf=\"item.class_type == '1' && item.schedule_id != '' && auth.getRoleId() == '5'\" (click)=\"openZoomDialog(item)\"><i class=\"fa fa-video-camera mr-2\" style=\"color:#8F008A\" title=\"Enter Online Class\" ></i>Enter Online Class</a>\n                                        <a (click)=\"openZoomDialog(item)\"\n                                           *ngIf=\"item.class_type == '1' && ['2','4'].includes(auth.getRoleId())\">\n                                            <span *ngIf=\"!customLoader\"><i class=\"fa fa-video-camera\" aria-hidden=\"true\"></i> Start online class</span>\n                                            <span *ngIf=\"customLoader\" style=\"width: 1rem;height: 1rem\" class=\"spinner-border text-secondary\" role=\"status\">\n                                                        <span class=\"sr-only\">Loading...</span>\n                                                    </span></a>\n                                        <a (click)=\"classDetailsService(item)\" *ngIf=\"manageClass\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit class</a>\n                                        <a *ngIf=\"checkClassDeleteConditions\"\n                                           (click)=\"deleteClassModal(item)\"><i class=\"fa fa-trash\" title=\"Delete Class\" aria-hidden=\"true\"></i>\n                                            Delete Class</a>\n                                        <a (click)=\"addStudent(item, j)\" *ngIf=\"manageStudent\"><i\n                                                class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i> Add Student</a>\n                                        <a (click)=\"curriculum(item)\"><i class=\"fa fa-book\" aria-hidden=\"true\"></i> Curriculum</a>\n<!--                                        <a (click)=\"reportDetails(item)\" *ngIf=\"roleId != '5'\"><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i> View class reports</a>-->\n<!--                                        <a (click)=\"openClassNotes(j, item)\" *ngIf=\"roleId != '5'\"><i class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></i> Edit Notes</a>-->\n                                        <a (click)=\"shareEmail(item)\" *ngIf=\"roleId != '5'\"><i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i> Share Class Code</a>\n                                        <a (click)=\"openRecordingList(item)\"\n                                           *ngIf=\"item.class_type == '1' && ['2','4','5'].includes(auth.getRoleId())\">\n                                                        <span *ngIf=\"!recordLoader\"><i class=\"fa fa-file-video-o\"\n                                                                                       aria-hidden=\"true\"></i> Recording</span>\n                                            <span *ngIf=\"recordLoader\" style=\"width: 1rem;height: 1rem\"\n                                                  class=\"spinner-border text-secondary\" role=\"status\">\n                                                    <span class=\"sr-only\">Loading...</span>\n                                                </span>\n                                        </a>\n                                        <a (click)=\"showInformation(item)\"><i class=\"fa fa-info pl-1 pr-1\" aria-hidden=\"true\"></i> Information</a>\n                                        <a *ngIf=\"roleId != '5'\" (click)=\"allReports(item)\"><i class=\"fa fa-bar-chart pr-1\" aria-hidden=\"true\"></i>Reports</a>\n                                    </div>\n                                </div>\n                                <button (click)=\"confirmationForMakeUpClass(item);$event.stopPropagation();\" *ngIf=\"makeUpClassSelected\" class=\"btn-sm-view cancel px-2 py-1 mr-2\">\n                                    <i style=\"font-size: 16px\" class=\"fa fa-calendar-plus-o mr-1\" title=\"Schedule Make-up Class\" aria-hidden=\"true\"></i>Schedule Make-up Class\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"collapse my-3\" id=\"studentCount{{j}}\" *ngIf=\"roleId != '5'\">\n                        <div *ngIf=\"item.student_details.length == 0\" class=\"row d-flex justify-content-center align-items-center\" style=\"min-height: 25vh\">\n                            <div class=\"col-6 align-self-center customize-card4 text-center font-weight-bold p-3\">No student Found</div>\n                        </div>\n                        <div class=\"d-flex align-items-center justify-content-end\">\n                            <span class=\"badge star_badge mr-1\">\u2605</span>\n                            <span class=\"mx-1\">-</span>\n                            <span class=\"font-weight-bold\">Make-up Student</span>\n                        </div>\n                        <table *ngIf=\"item.student_details.length != 0\" class=\"table table-hover mt-2\">\n                            <thead class=\"thead-light\">\n                            <tr>\n                                <th class=\"d-flex align-items-center\">Student Name <small class=\"badge badge-success ml-2\">{{item.student_details.length}}</small></th>\n                                <th class=\"text-center\">Grade Name</th>\n                                <th *ngIf=\"!makeUpClassSelected\" class=\"text-center border-0\">Present</th>\n                                <th *ngIf=\"!makeUpClassSelected\" class=\"text-center border-0\">Absent</th>\n<!--                                <th *ngIf=\"(currentDate == searchDate1 || lesserThanCurrentDate) && !makeUpClassSelected\" class=\"text-center border-0\">Present</th>-->\n<!--                                <th *ngIf=\"(currentDate == searchDate1 || lesserThanCurrentDate) && !makeUpClassSelected\" class=\"text-center border-0\">Absent</th>-->\n<!--                                <th *ngIf=\"currentDate != searchDate1 && !makeUpClassSelected && !lesserThanCurrentDate\" class=\"text-center border-0\">Attendance</th>-->\n                                <th *ngIf=\"!makeUpClassSelected\" class=\"text-center border-0\">Make-up Class</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let list of item.student_details; let i = index\">\n                                <th class=\"d-flex justify-content-between\">\n                                    <div class=\"d-flex align-items-center\">\n                                        <span *ngIf=\"list.student_class_type == '2'\" class=\"badge star_badge mr-1\">\u2605</span>\n                                        <span (click)=\"getStudentFullDetail(list)\" class=\"cursor name-hover\">{{list.student_name}}</span>\n                                    </div>\n                                    <i (click)=\"openNotes(item, list)\" class=\"fa fa-newspaper-o align-self-center color-primary cursor\" title=\"Add notes\"></i></th>\n                                <th class=\"radial-bar-primary text-center\">\n                                    <span>{{list?.student_grade_name != '' ? list?.student_grade_name ?? '-' : '-'}}</span>\n                                </th>\n<!--                                <th class=\"radial-bar-primary text-center\" *ngIf=\"(currentDate == searchDate1 || lesserThanCurrentDate) && !makeUpClassSelected\">-->\n                                <th class=\"radial-bar-primary text-center\" *ngIf=\"!makeUpClassSelected\">\n                                    <input (change)=\"clickEve(list, 'present', $event, item)\" [disabled]=\"list.attendance == '0'\"\n                                           class=\"cursor\" [checked]=\"list.attendance == '1'\" name=\"{{j}}attendence{{i}}\" type=\"checkbox\">\n                                </th>\n<!--                                <th class=\"radial-bar-primary text-center\" *ngIf=\"(currentDate == searchDate1 || lesserThanCurrentDate) && !makeUpClassSelected\">-->\n                                <th class=\"radial-bar-primary text-center\" *ngIf=\"!makeUpClassSelected\">\n                                    <div class=\"d-flex align-items-center justify-content-center\">\n                                        <input (change)=\"clickEve(list, 'absent', $event, item)\" [checked]=\"list.attendance == '0'\"\n                                               class=\"cursor\" name=\"{{j}}attendence{{i}}\" type=\"checkbox\" [disabled]=\"list.attendance == '1' || list.makeup_class_id != ''\">\n                                    </div>\n                                </th>\n<!--                                <th class=\"radial-bar-primary d-flex align-items-center justify-content-center\" *ngIf=\"(currentDate == searchDate1 || lesserThanCurrentDate) && !makeUpClassSelected\">-->\n<!--                                    <button (click)=\"addMakeUpClass(list, item)\" *ngIf=\"list.makeup_class_id == '' && list.attendance == '0' && (auth.getRoleId() == '2' || (auth.getRoleId() == '4' && auth.getSessionData('teacher_type') != '0'))\" class=\"btn-sm-view cancel ml-2 px-2 py-1\">-->\n<!--                                        <i style=\"font-size: 16px\" class=\"fa fa-calendar-plus-o mr-1\" title=\"Schedule Make-up Class\" aria-hidden=\"true\"></i>Schedule Make-up Class-->\n<!--                                    </button>-->\n<!--                                    <label *ngIf=\"list.makeup_class_id != '' && ['0', ''].indexOf(list.attendance) > - 1\" class=\"makUpClass_text mb-0 ml-2\">-->\n<!--                                        <span style=\"font-size: 14px\" class=\"ml-1 color-primary font-weight-bold\">{{list.makeup_class_name}} - {{list.makeup_class_date | customDateFormat}}</span>-->\n<!--                                    </label>-->\n<!--                                    <label *ngIf=\"list.makeup_class_id == '' && list.attendance == ''\" class=\"makUpClass_text mb-0 ml-2\">-->\n<!--                                        <span style=\"font-size: 14px\" class=\"ml-1 color-primary font-weight-bold\">-</span>-->\n<!--                                    </label>-->\n<!--                                    <i (click)=\"voidFunctionCalled(item, i)\" title=\"Void Class\"-->\n<!--                                       *ngIf=\"list.makeup_class_id != '' && ['0', ''].indexOf(list.attendance) > - 1 && list.allow_void_class\" style=\"font-size: 18px\"-->\n<!--                                       class=\"fa fa-times-circle color-red ml-2\"></i>-->\n<!--                                </th>-->\n<!--                                <th class=\"radial-bar-primary text-center\" *ngIf=\"currentDate != searchDate1 && !makeUpClassSelected && !lesserThanCurrentDate\">-->\n<!--                                <th class=\"radial-bar-primary text-center\" *ngIf=\"!makeUpClassSelected && !lesserThanCurrentDate\">-->\n<!--                                    <i *ngIf=\"list.attendance == '1'\" style=\"font-size: 18px\" class=\"fa fa-check-circle color-green\"></i>-->\n<!--                                    <i *ngIf=\"['0', ''].indexOf(list.attendance) > -1 && !lesserThanCurrentDate\" style=\"font-size: 18px\" class=\"fa fa-times-circle color-red\"></i>-->\n<!--                                    <span *ngIf=\"list.attendance == '' && lesserThanCurrentDate\">-</span>-->\n<!--                                </th>-->\n<!--                                <th class=\"radial-bar-primary d-flex align-items-center justify-content-center\" *ngIf=\"!makeUpClassSelected && !lesserThanCurrentDate\">-->\n                                <th class=\"radial-bar-primary d-flex align-items-center justify-content-center\" *ngIf=\"!makeUpClassSelected\">\n                                    <span *ngIf=\"list.attendance != '0' && list.makeup_class_id == ''\">-</span>\n                                    <button (click)=\"addMakeUpClass(list, item)\" *ngIf=\"list.makeup_class_id == '' && ['0'].indexOf(list.attendance) > -1\n                                       && (auth.getRoleId() == '2' || (auth.getRoleId() == '4' && auth.getSessionData('teacher_type') != '0'))\"\n                                            class=\"btn-sm-view cancel ml-2 px-2 py-1\">\n                                        <i style=\"font-size: 16px\" class=\"fa fa-calendar-plus-o mr-1\" title=\"Schedule Make-up Class\" aria-hidden=\"true\"></i>Schedule Make-up Class\n                                    </button>\n                                    <h6 *ngIf=\"list.makeup_class_id != '' && ['0', ''].indexOf(list.attendance) > - 1\" class=\"makUpClass_text ml-2 my-1\">\n                                        <span style=\"font-size: 14px\" class=\"ml-2 color-primary font-weight-bold\">{{list.makeup_class_name}} - {{list.makeup_class_date | customDateFormat}}</span>\n                                    </h6>\n                                    <i (click)=\"voidFunctionCalled(item, i)\" title=\"Void Class\"\n                                       *ngIf=\"list.makeup_class_id != '' && ['0', ''].indexOf(list.attendance) > - 1 && list.allow_void_class\" style=\"font-size: 18px\"\n                                       class=\"fa fa-times-circle color-red ml-2\"></i>\n                                </th>\n                            </tr>\n                            </tbody>\n                        </table>\n<!--                        <div *ngIf=\"searchDate1 == currentDate && item.student_details.length != 0\" class=\"col-12 px-0\">-->\n<!--                            <button (click)=\"updateStudentAnnotate(item)\" class=\"btn-sm btn-primary pull-right\">Update Attendance</button>-->\n<!--                        </div>-->\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #viewoveralldetails let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title color-primary\" id=\"modal-basic-title\">{{studentName}} Overall details</h4>\n        <i (click)=\"closeOverAll()\" aria-hidden=\"true\"\n           class=\"fa fa-close fa-lg mt-1\" style=\"color:#7F3486; cursor: pointer; float: right;\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <app-overalldetails\n                [studentdata]=\"viewdetail\"\n        >\n        </app-overalldetails>\n    </div>\n</ng-template>\n<ng-template #zoomDialog let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title text-center\">Zoom Meet</h4>\n        <i (click)=\"modalRef.close()\" class=\"fa fa-close cursor\" ></i>\n    </div>\n    <div class=\"modal-body d-flex justify-content-right\">\n        <div class=\"col-12 text-center\">\n            <h5>Open zoom in </h5>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"modalRef.close();zoomService.initZoomMeeting(selectedClass)\" class=\"btn btn-primary\">In App</button>\n        <button (click)=\"navigateOutsideZoom(this.selectedClass.availabilityDate[0])\" class=\"btn btn-outline-primary\" type=\"button\">New Tab</button>\n    </div>\n</ng-template>\n<ng-template #zoomDialog1 let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title text-center\">Zoom Meet</h4>\n        <i (click)=\"modalRef.close()\" class=\"fa fa-close cursor\" ></i>\n    </div>\n    <div class=\"modal-body d-flex justify-content-right\">\n        <div class=\"col-12 text-center\">\n            <h5>No Zoom Meet Scheduled for this day</h5>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"modalRef.close();\" class=\"btn btn-primary\">OK</button>\n    </div>\n</ng-template>\n<ng-template #reports>\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title\">Report</h4>\n        <i (click)=\"modalRef.close()\" class=\"fa fa-close cursor\" ></i>\n    </div>\n    <div class=\"modal-body\">\n        <app-missed-work-report\n                [classShow] = \"true\"\n                [contentNameValue]= \"contentNameValue\"\n                [showContent]= \"'other'\"\n                [studentView]= \"false\"\n                [timeView]= \"true\"\n        >\n        </app-missed-work-report>\n    </div>\n</ng-template>\n\n<ng-template #notes let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title text-center\">Add Notes</h4>\n        <i (click)=\"modalRef.close()\" class=\"fa fa-close cursor\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row d-flex justify-content-center\">\n\n            <div class=\"col-11 mt-2 card class-card1 class-hover w-99\" *ngFor=\"let list of notesList; let i = index\">\n                <div class=\"row\" *ngIf=\"list.created_date != '00-00-0000'\">\n                    <div class=\"col-9\" style=\"word-wrap: break-word;\">\n                        <p class=\"py-2\"><span class=\"letter\" *ngIf=\"list.created_by != '' && list.created_date != ''\"><strong>{{list.created_by}}</strong> - <small>{{list.created_date | customDateFormat}}</small><br></span></p>\n                        <p><span [innerHTML]=\"list.notes\" class=\"mb-0 mt-3\"></span></p>\n                    </div>\n                    <div class=\"col-3 d-flex align-items-center justify-content-end\">\n                        <i class=\"fa fa-trash fa-1x text-danger\" aria-hidden=\"true\" style=\"cursor:pointer\" (click)=\"deleteNotes(list)\"></i>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-11 mt-2\">\n                <app-tiny-mice  (emitEditorValue)=\"getEditorValue($event)\"\n                                [editorPatchValue]=\"false\"\n                                [height]=\"300\"\n                                [id]=\"'notes'\"\n                                [showDropBtn]=\"false\"\n                                [showInputBtn]=\"false\">\n                </app-tiny-mice>\n            </div>\n            <div class=\"col-11 text-right mt-2\">\n                <button (click)=\"addNotes()\" class=\"btn btn-primary\" type=\"button\">Add</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n<ng-template #writeNoteOpen let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title text-center\">Add Notes</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"modalRef.close()\" ></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row d-flex justify-content-center\">\n            <div class=\"col-11 mt-2 card class-card1 class-hover w-99\" *ngFor=\"let list of classNotesList; let i = index\">\n                <div class=\"row\" *ngIf=\"list.add_date != '00-00-0000'\">\n                    <div class=\"col-9\" style=\"word-wrap: break-word;\">\n                        <p class=\"py-2\"><span class=\"letter\" *ngIf=\"list.created_by != '' && list.add_date != ''\"><strong>{{list.created_by}}</strong> - <small>{{list.add_date | customDateFormat}}</small><br></span></p>\n                        <p><span [innerHTML]=\"list.note\" class=\"mb-0 mt-3\"></span></p>\n                    </div>\n                    <div class=\"col-3 d-flex align-items-center justify-content-end\">\n                        <i class=\"fa fa-trash fa-1x text-danger\" aria-hidden=\"true\" style=\"cursor:pointer\" (click)=\"deleteClassNote(list)\"></i>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-11 mt-2\">\n                <app-tiny-mice (emitEditorValue)=\"getEditorValue($event)\"\n                                [editorPatchValue]=\"false\"\n                                [height]=\"300\"\n                                [id]=\"'notes'\"\n                                [showDropBtn]=\"false\"\n                                [showInputBtn]=\"false\">\n                </app-tiny-mice>\n            </div>\n            <div class=\"col-11 text-right mt-2\">\n                <button type=\"button\" (click)=\"modalRef.close()\" class=\"btn btn-outline-primary mr-2\">Close</button>\n                <button type=\"button\" (click)=\"addClassNote()\" class=\"btn btn-primary\">Add</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n\n<ng-template #addMultipleEmailDialog let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title text-center\">Invite By Email</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"modalRef.close()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-sm-12\">\n\n            <form [formGroup]=\"studentEmailForm\">\n                <mat-form-field class=\"col-12\">\n                    <mat-chip-grid #chipList formArrayName=\"emails\">\n                        <mat-chip-row [color]=\"(item.invalid)?'warn':''\" selected *ngFor=\"let item of emailList; let i=index\" [removable]=\"removable\"\n                                  (removed)=\"removeEmail(item)\" required name=\"chips\">{{item.value}}\n                            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                        </mat-chip-row>\n                        <input placeholder=\"Enter Email Id\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"true\"\n                               (matChipInputTokenEnd)=\"add($event)\" />\n\n                    </mat-chip-grid>\n                </mat-form-field>\n                <mat-error class=\"col-12\" *ngIf=\"!validationEmail && emailList.length != 0\">Invalid email ID</mat-error>\n                <div class=\"col-12\">\n                    <p>Note: You can give comma separator email-Id and press enter.</p>\n                </div>\n\n                <div class=\"col-12\">\n                    <p class=\"my-2\" style=\"color: black\">\n                        <span><p class=\"mt-2 mb-3\" style=\"color: black\">\n                        ClassCode : <strong> {{selectClassData.class_code}} </strong> <br>\n\n                        If you are new to edquill, use the below URL to register and join class<br>\n\n                            <span class=\"color-primary\">{{env.envProperties.envURL + '#/auth/login/studentRegister/'+ selectClassData.class_code}}</span><br><br>\n\n                        If you are an existing user, use the below URL to login and join class<br>\n\n                            <span class=\"color-primary\">{{env.envProperties.envURL + '#/enrollclasscode/'+ selectClassData.class_code}}</span><br>\n\n                        </p>\n                    </span>\n                    </p>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-outline-primary\" type=\"button\" (click)=\"bulkMail()\"\n                [disabled]=\"!validationEmail && emailList.length != 0\">Submit\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #showInform>\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title\">Info</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"modalRef.close()\" ></i>\n    </div>\n    <div class=\"modal-body\">\n        <p class=\"p-0\" *ngIf=\"classInfo?.class_start_date != ''\"><small class=\"letter\">Start Date: </small> <span class=\"t-name font-weight-bold\">{{classInfo.class_start_date}}</span></p>\n        <p class=\"p-0\" *ngIf=\"classInfo?.class_end_date != ''\"><small class=\"letter\">End Date: </small> <span class=\"t-name font-weight-bold\">{{classInfo.class_end_date}}</span></p>\n        <p class=\"p-0\" *ngIf=\"classInfo?.subject_name != ''\"><small class=\"letter\">Subject: </small> <span class=\"t-name font-weight-bold\">{{classInfo.subject_name}}</span></p>\n        <p class=\"p-0\" *ngIf=\"classInfo?.grade_name != ''\"><small class=\"letter\">Grade: </small> <span class=\"t-name capital font-weight-bold\">{{classInfo.grade_name}}</span></p>\n<!--        <p class=\"p-0\" *ngIf=\"teacherType != 1 || auth.getRoleId() == '2' || auth.getRoleId() == '6' && classInfo?.classroom_name != ''\"><span><small class=\"font-weight-bold\">Content Folder: </small> <span class=\"t-name capital font-weight-bold\">{{classInfo.classroom_name}}</span></span></p>-->\n        <!--        <p class=\"p-0\" ><span class=\"letter\">class code: </span> <span class=\"t-name font-weight-bold\">{{classInfo.class_code}}</span></p>-->\n<!--        <p class=\"p-0\"><span class=\"letter\">Assessment: </span> <span class=\"t-name\">{{classInfo.no_of_assessments}}</span></p>-->\n<!--        <p class=\"p-0\"><span class=\"letter\">Assignment: </span> <span class=\"t-name\">{{classInfo.no_of_assignments}} </span></p>-->\n<!--        <p class=\"p-0\"><span class=\"letter\">Resources: </span> <span class=\"t-name\">{{classInfo.no_of_resources}} </span></p>-->\n    </div>\n\n</ng-template>\n\n<ng-template #deleteClass let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title align-items-center\">Delete Class</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"modalRef.close()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-md-12\">\n            <p class=\"mb-0\"><strong>Are you sure to delete the <span class=\"color-primary\">{{classDetails.class_name}}</span> class?</strong>\n            </p>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn cancel\" type=\"button\" (click)=\"modalRef.close()\">close</button>\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"deleteClassList()\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #voidClass>\n    <div class=\"modal-header align-items-center\">\n        <h5 class=\"modal-title align-items-center font-weight-bold\">Void Class</h5>\n        <i class=\"fa fa-close cursor\" (click)=\"modalRef.close()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-md-12 px-0\">\n            <p class=\"mb-0\"><strong>\n                Are you sure want to void the class for <span class=\"color-primary\">{{voidClassData.student_details[voidClassIndex]?.student_name}}</span> in\n                <span class=\"color-primary\">{{voidClassData.student_details[voidClassIndex]?.makeup_class_name}}</span>?</strong>\n            </p>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn cancel\" type=\"button\" (click)=\"modalRef.close()\">Cancel</button>\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"deleteStudentList()\">Yes</button>\n    </div>\n</ng-template>\n\n<ng-template #addStudentDialog class=\"customModalRef\" let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <div class=\"col-7 pl-0\">\n            <h4 class=\"modal-title font-weight-bold\">Add Student</h4>\n            <label *ngIf=\"addStudentEnabled\" class=\"text-muted mb-0\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n        </div>\n        <div class=\"col-5 d-flex justify-content-end align-items-center pr-0\">\n            <button *ngIf=\"!addStudentEnabled\" class=\"btn cancel\" title=\"Invite By Email\" (click)=\"shareEmail(selectClassData, 'addStudent')\">\n                Invite By Email\n            </button>\n            <button *ngIf=\"addStudentEnabled\" class=\"btn cancel\" (click)=\"searchStudentList(1);addStudentClicked()\"><i class=\"fa fa-long-arrow-left mr-1\"></i>Back</button>\n            <i class=\"fa fa-close cursor ml-3\" (click)=\"closeStudentModRef()\" title=\"Close Add Student\"></i>\n        </div>\n    </div>\n    <div class=\"modal-body row\">\n        <div class=\"col-md-9 form-group\" *ngIf=\"!addStudentEnabled\">\n            <label style=\"font-weight: 600\">Grade</label>\n            <ng-select [items]=\"gradeData\"\n                       bindLabel=\"grade_name\"\n                       bindValue=\"grade_id\"\n                       placeholder=\"Select Grade\"\n                       typeToSearchText=\"\"\n                       multiple=\"true\"\n                       [(ngModel)]=\"gradName\"\n                       (change)=\"getGradeValue($event)\"\n            >\n            </ng-select>\n        </div>\n        <div class=\"col-md-9 form-group\" *ngIf=\"!addStudentEnabled\">\n            <label style=\"font-weight: 600\">Student Name<span class=\"text-danger ml-1\">*</span></label>\n            <ng-multiselect-dropdown #multiSelect\n                                     [placeholder]=\"'Select Student'\"\n                                     [data]=\"studentDataList\"\n                                     [settings]=\"settings\"\n                                     [disabled]=\"false\"\n                                     [(ngModel)]=\"studentName\"\n                                     (onSelect)=\"onItemSelect($event, 'single')\"\n                                     (onDeSelect)=\"onDeSelect($event)\"\n                                     (onSelectAll)=\"onItemSelect($event, 'all')\"\n                                     (onDeSelectAll)=\"onDeSelectAll()\">\n            </ng-multiselect-dropdown>\n        </div>\n        <div class=\"col-md-3 form-group align-content-end\" *ngIf=\"!addStudentEnabled\">\n            <button (click)=\"addStudentClicked()\" class=\"btn btn-primary\"><i class=\"fa fa-plus-circle mr-1\"></i>Add Student</button>\n        </div>\n\n        <div class=\"col-md-9 row\" *ngIf=\"!addStudentEnabled\">\n            <label style=\"font-weight: 600\" class=\"col-12\">Class Type<span class=\"text-danger ml-1\">*</span></label>\n            <div class=\"col-3\">\n                <div class=\"form-check\">\n                    <input class=\"form-check-input cursor\" id=\"regular\" type=\"radio\" name=\"studentType\" value=\"0\" [(ngModel)]=\"studentAddedType\"\n                           [checked]=\"studentAddedType == '0'\">\n                    <label class=\"form-check-label cursor\" for=\"regular\">Regular</label>\n                </div>\n            </div>\n            <div class=\"col-4\">\n                <div class=\"form-check\">\n                    <input class=\"form-check-input cursor\" id=\"makeUp\" type=\"radio\" value=\"1\" name=\"studentType\"\n                           [checked]=\"studentAddedType == '1'\" [(ngModel)]=\"studentAddedType\">\n                    <label class=\"form-check-label cursor\" for=\"makeUp\">Make-up Class</label>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-md-9 row mt-3\" *ngIf=\"!addStudentEnabled && studentAddedType == '1'\">\n            <label style=\"font-weight: 600\" class=\"col-12\">\n                Effective Date<span class=\"text-danger ml-1\">*</span></label>\n            <div class=\"col-xl-8 col-md-7\">\n                <div class=\"d-flex align-items-baseline\">\n                    <input class=\"form-control\" placeholder=\"mm/dd/yyyy\"\n                           name=\"dp2\" angular-mydatepicker (click)=\"dp2.toggleCalendar()\"\n                           #dp2=\"angular-mydatepicker\" [(ngModel)]=\"effectiveStartDate\"\n                           [options]=\"myDpOptions1\" autocomplete=\"off\"\n                           required>\n                    <div class=\"input-group-append\">\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp2.toggleCalendar()\">\n                            <i class=\"fa fa-calendar-o\"></i></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-12\" [ngbCollapse]=\"!addStudentEnabled\">\n            <form [formGroup]=\"addStudentForm\">\n                <div class=\"form-group row\">\n                    <label for=\"validationCustom0\" class=\"col-xl-3 col-md-4\">\n                        First Name<span class=\"text-danger ml-1\">*</span></label>\n                    <div class=\"col-xl-8 col-md-7\">\n                        <input class=\"form-control \" formControlName=\"first_name\" id=\"validationCustom0\"\n                               type=\"text\" placeholder=\"First Name\" required>\n                        <em class=\"error\" *ngIf=\"!addStudentForm.get('first_name').valid && (addStudentForm.get('first_name').dirty\n                                || addStudentForm.get('first_name').touched)\">First name is required</em>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label for=\"validationCustom1\" class=\"col-xl-3 col-md-4\">\n                        Last Name<span class=\"text-danger ml-1\">*</span></label>\n                    <div class=\"col-xl-8 col-md-7\">\n                        <input class=\"form-control\" formControlName=\"last_name\" id=\"validationCustom1\"\n                               type=\"text\" placeholder=\"Last Name\" required>\n                        <em class=\"error\" *ngIf=\"!addStudentForm.get('last_name').valid && (addStudentForm.get('last_name').dirty ||\n                                addStudentForm.get('last_name').touched)\">Last name is required</em>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label for=\"validationCustom5\" class=\"col-xl-3 col-md-4\">\n                        Email Address<span class=\"text-danger ml-1\">*</span></label>\n                    <div class=\"col-xl-8 col-md-7\">\n                        <input class=\"form-control\" formControlName=\"email_id\" id=\"validationCustom5\" pattern=\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$\"\n                               type=\"email\" placeholder=\"Email\" required>\n                        <em class=\"error\" *ngIf=\"addStudentForm.get('email_id').hasError('required') && (addStudentForm.get('email_id').dirty\n                                || addStudentForm.get('email_id').touched)\">Email is required</em>\n                        <em class=\"error\" *ngIf=\"addStudentForm.get('email_id').hasError('pattern')\">Invalid Email-Id</em>\n                    </div>\n                </div>\n\n                <div class=\"form-group row\">\n                    <label for=\"validationCustom5\" class=\"col-xl-3 col-md-4\">\n                        Grade<span class=\"text-danger ml-1\">*</span></label>\n                    <div class=\"col-xl-8 col-md-7\">\n                        <ng-select [items]=\"gradeData\"\n                                   bindLabel=\"grade_name\"\n                                   bindValue=\"grade_id\"\n                                   formControlName=\"grade\"\n                                   placeholder=\"Select Grade\"\n                                   typeToSearchText=\"\"\n                        >\n                        </ng-select>\n                        <em class=\"error\" *ngIf=\"!addStudentForm.get('grade').valid && (addStudentForm.get('grade').dirty ||\n                                addStudentForm.get('grade').touched)\">Grade is required</em>\n                    </div>\n                </div>\n            </form>\n        </div>\n\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-outline-primary\" type=\"button\" (click)=\"addStudentEnabled ? addstudent() : submitClass()\">Submit</button>\n    </div>\n</ng-template>\n\n<ng-template #addStudentDialog class=\"customModalRef\" let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header d-flex align-items-center\">\n        <h4 class=\"modal-title pl-0 col-7\">Add Student</h4>\n        <div class=\"col-5 d-flex justify-content-end align-items-center pr-0\">\n            <button class=\"btn cancel\" title=\"Invite By Email\" (click)=\"shareEmail(selectClassData, 'addStudent')\">\n                Invite By Email\n            </button>\n            <i class=\"fa fa-close cursor ml-3\" (click)=\"closeStudentModRef()\" title=\"Close Add Student\"></i>\n        </div>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-md-10 form-group\">\n            <label>Grade</label>\n            <ng-select [items]=\"gradeData\"\n                       bindLabel=\"grade_name\"\n                       bindValue=\"grade_id\"\n                       placeholder=\"Select Grade\"\n                       typeToSearchText=\"\"\n                       multiple=\"true\"\n                       [(ngModel)]=\"gradName\"\n                       (change)=\"getGradeValue($event)\"\n            >\n            </ng-select>\n        </div>\n        <div class=\"col-md-10 form-group\">\n            <label>Student Name<span class=\"text-danger ml-1\">*</span></label>\n            <ng-multiselect-dropdown\n                                     [placeholder]=\"'Select Student'\"\n                                     [data]=\"studentDataList\"\n                                     [settings]=\"settings\"\n                                     [disabled]=\"false\"\n                                     [(ngModel)]=\"studentName\"\n                                     (onSelect)=\"onItemSelect($event, 'single')\"\n                                     (onDeSelect)=\"onDeSelect($event)\"\n                                     (onSelectAll)=\"onItemSelect($event, 'all')\"\n                                     (onDeSelectAll)=\"onDeSelectAll()\">\n            </ng-multiselect-dropdown>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-outline-primary\" (click)=\"submitClass()\" type=\"button\">Submit</button>\n    </div>\n</ng-template>\n\n<ng-template #recordinglist let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title text-center\">Recordings</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"modalRef.close()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12 home-sec-scroll {{videoSource.length != '0' ? '' : 'align-content-center'}}\">\n                <div class=\"row\">\n                    <div *ngFor=\"let source of videoSource;let i=index\" class=\"col-md-12 mt-1 cursor\">\n                        <div class=\"card\">\n                            <div (click)=\"navigateOutsideRecording(source)\" class=\"card-body card-hover2\">\n                                <div class=\"row\">\n                                    <div class=\"col-4 align-self-center\">\n                                        <p><span>Start: </span> <span *ngIf=\"source.recording_start != '0000-00-00'\"\n                                                                      class=\"t-name font-weight-bold\"\n                                                                      style=\"font-size: 11px;\">{{source.recording_start|date:'MM/dd/yyyy'}}\n                                            &nbsp;{{source.recording_start}}</span>\n                                        </p>\n                                    </div>\n                                    <div class=\"col-4 align-self-center\">\n                                        <p>\n                                            <span>End: </span> <span *ngIf=\"source.recording_end != '0000-00-00'\"\n                                                                     class=\"t-name font-weight-bold\"\n                                                                     style=\"font-size: 11px;\">{{source.recording_end|date:'MM/dd/yyyy'}}\n                                            &nbsp;{{source.recording_end}}</span>\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"videoSource.length == 0\" class=\"col-md-12 mt-1\">\n                        <div class=\"card\" style=\"box-shadow: 2px 2px 2px 2px #e6baea\">\n                            <div class=\"card-body\" style=\"align-self: center;\">\n                                <div class=\"row\">\n                                    <span style=\"color: #8F008A\">No Recordings Available</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-primary\" (click)=\"modalRef.close();\">close</button>\n    </div>\n</ng-template>\n\n<ng-template #confirmation let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h5 class=\"modal-title align-items-center font-weight-bold\">Schedule Make-up Class</h5>\n        <i class=\"fa fa-close cursor\" (click)=\"modalRef.close()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-md-12 px-0\">\n            <p class=\"mb-0\"><strong>\n                Are you sure want to schedule make-up class for the student <span class=\"color-primary\">{{selectedClass.student_name}}</span> in\n                <span class=\"color-primary\">{{selectedFormakeUpClass.class_name}}</span>?</strong>\n            </p>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn cancel\" type=\"button\" (click)=\"modalRef.close()\">No</button>\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"submitMakeUpClass(selectedFormakeUpClass)\">Yes</button>\n    </div>\n</ng-template>\n\n", styles: [".upload-count {\n  padding: 4px 6px;\n  margin-left: -8px;\n  font-size: 12px;\n  color: #fff;\n  font-weight: 400;\n  border-radius: 50%;\n  position: relative;\n  top: -12px !important;\n  background: #8F008A;\n}\n\n.makUpClass_text {\n  color: #808080;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.eye-container {\n  position: relative;\n  display: inline-block;\n  padding: 10px 20px;\n  border: 2px solid #d4a0f0;\n  border-radius: 10px;\n  text-align: center;\n  box-shadow: 0 0 5px rgba(212, 160, 240, 0.5);\n}\n\n.eye-container::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-bottom: 10px solid #d4a0f0;\n}\n\ninput:disabled {\n  cursor: default !important;\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.CommonDataService }, { type: i3.ClassService }, { type: i4.FormBuilder }, { type: i5.ContentdetailService }, { type: i6.DatePipe }, { type: i7.ToastrService }, { type: i8.ZoomServiceService }, { type: i9.SseClient }, { type: i10.NgbModal }, { type: i11.StudentService }, { type: i12.Router }, { type: i13.NewsubjectService }, { type: i14.EnvironmentService }, { type: i15.ValidationService }, { type: i0.ChangeDetectorRef }], { viewoveralldetails: [{
            type: ViewChild,
            args: ['viewoveralldetails']
        }], zoomDialog: [{
            type: ViewChild,
            args: ['zoomDialog']
        }], zoomDialog1: [{
            type: ViewChild,
            args: ['zoomDialog1']
        }], meetingSelection: [{
            type: ViewChild,
            args: ['meetingSelection']
        }], recordinglist: [{
            type: ViewChild,
            args: ['recordinglist']
        }], reports: [{
            type: ViewChild,
            args: ['reports']
        }], notes: [{
            type: ViewChild,
            args: ['notes']
        }], writeNoteOpen: [{
            type: ViewChild,
            args: ['writeNoteOpen']
        }], addMultipleEmailDialog: [{
            type: ViewChild,
            args: ['addMultipleEmailDialog']
        }], showInform: [{
            type: ViewChild,
            args: ['showInform']
        }], deleteClassDialog: [{
            type: ViewChild,
            args: ['deleteClass']
        }], addStudentDialog: [{
            type: ViewChild,
            args: ['addStudentDialog']
        }], confirmation: [{
            type: ViewChild,
            args: ['confirmation']
        }], voidClass: [{
            type: ViewChild,
            args: ['voidClass']
        }], page: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DailyScheduleComponent, { className: "DailyScheduleComponent" }); })();
//# sourceMappingURL=daily-schedule.component.js.map