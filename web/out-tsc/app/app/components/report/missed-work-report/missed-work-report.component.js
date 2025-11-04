import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { AnswerSheetComponent } from '../../studentlogin/answer-sheet/answer-sheet.component';
import { dateOptions, timeZone } from '../../../shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/report.service";
import * as i3 from "../../../shared/service/configuration.service";
import * as i4 from "@angular/platform-browser";
import * as i5 from "@angular/common";
import * as i6 from "ngx-sse-client";
import * as i7 from "@angular/router";
import * as i8 from "../../../shared/service/student.service";
import * as i9 from "../../../shared/service/common-data.service";
import * as i10 from "@ng-bootstrap/ng-bootstrap";
import * as i11 from "ngx-toastr";
import * as i12 from "../../../shared/service/teacher.service";
import * as i13 from "../../../shared/service/validation.service";
import * as i14 from "@angular/forms";
import * as i15 from "../../../shared/service/common.service";
import * as i16 from "../../../shared/service/contentdetail.service";
import * as i17 from "@ng-select/ng-select";
import * as i18 from "@nodro7/angular-mydatepicker";
import * as i19 from "../../studentlogin/overalldetails/overalldetails.component";
import * as i20 from "../../studentlogin/answer-sheet/answer-sheet.component";
import * as i21 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["viewoveralldetails"];
const _c1 = ["contentnow"];
const _c2 = ["notStarted"];
const _c3 = ["viewStudentDetails"];
function MissedWorkReportComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "label", 21);
    i0.ɵɵtext(2, "Class Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 22);
    i0.ɵɵelement(4, "input", 28);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r1.reportData.class_name);
} }
function MissedWorkReportComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "label", 21);
    i0.ɵɵtext(2, "Student List");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 22)(4, "ng-select", 29);
    i0.ɵɵlistener("change", function MissedWorkReportComponent_div_4_Template_ng_select_change_4_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.studentReportDetails()); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("items", ctx_r1.studentList);
} }
function MissedWorkReportComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "label", 12);
    i0.ɵɵtext(2, "Content Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 30);
    i0.ɵɵlistener("change", function MissedWorkReportComponent_div_5_Template_select_change_3_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.contentTypeSelect()); });
    i0.ɵɵelementStart(4, "option", 16);
    i0.ɵɵtext(5, "Assignment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "option", 17);
    i0.ɵɵtext(7, "Assessment");
    i0.ɵɵelementEnd()()();
} }
function MissedWorkReportComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "label", 12);
    i0.ɵɵtext(2, "Content Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 22);
    i0.ɵɵelement(4, "input", 28);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r1.showContent);
} }
function MissedWorkReportComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "label", 12);
    i0.ɵɵtext(2, "Performance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 31);
    i0.ɵɵlistener("change", function MissedWorkReportComponent_div_23_Template_select_change_3_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.studentReportDetails()); });
    i0.ɵɵelementStart(4, "option", 14);
    i0.ɵɵtext(5, "All");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "option", 15);
    i0.ɵɵtext(7, "Master");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "option", 16);
    i0.ɵɵtext(9, "Excellent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "option", 17);
    i0.ɵɵtext(11, "Proficient");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "option", 18);
    i0.ɵɵtext(13, "Average");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "option", 19);
    i0.ɵɵtext(15, "Below Average");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "option", 32);
    i0.ɵɵtext(17, "Missed");
    i0.ɵɵelementEnd()()();
} }
function MissedWorkReportComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "label", 21);
    i0.ɵɵtext(2, "From Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 33)(4, "div", 34)(5, "input", 35, 4);
    i0.ɵɵlistener("dateChanged", function MissedWorkReportComponent_div_24_Template_input_dateChanged_5_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onDateChanged1($event, "1")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 36)(8, "button", 37);
    i0.ɵɵlistener("click", function MissedWorkReportComponent_div_24_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r6); const dp_r7 = i0.ɵɵreference(6); return i0.ɵɵresetView(dp_r7.toggleCalendar()); });
    i0.ɵɵelement(9, "i", 38);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("options", ctx_r1.myDpOptions);
} }
function MissedWorkReportComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "label", 21);
    i0.ɵɵtext(2, "To Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 33)(4, "div", 34)(5, "input", 39, 5);
    i0.ɵɵlistener("dateChanged", function MissedWorkReportComponent_div_25_Template_input_dateChanged_5_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onDateChanged1($event, "2")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 36)(8, "button", 37);
    i0.ɵɵlistener("click", function MissedWorkReportComponent_div_25_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r8); const dp1_r9 = i0.ɵɵreference(6); return i0.ɵɵresetView(dp1_r9.toggleCalendar()); });
    i0.ɵɵelement(9, "i", 38);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("options", ctx_r1.myDpOptions1);
} }
function MissedWorkReportComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "h5", 40);
    i0.ɵɵlistener("click", function MissedWorkReportComponent_ng_template_31_Template_h5_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSelectAll()); });
    i0.ɵɵtext(1, "Select All");
    i0.ɵɵelementEnd();
} }
function MissedWorkReportComponent_div_32_h3_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3", 57);
    i0.ɵɵtext(1, "Assignment Details");
    i0.ɵɵelementEnd();
} }
function MissedWorkReportComponent_div_32_h3_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3", 57);
    i0.ɵɵtext(1, "Assessment Details");
    i0.ɵɵelementEnd();
} }
function MissedWorkReportComponent_div_32_thead_29_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1, "Student Name");
    i0.ɵɵelementEnd();
} }
function MissedWorkReportComponent_div_32_thead_29_ng_container_2_th_1_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, item_r11.end_date));
} }
function MissedWorkReportComponent_div_32_thead_29_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 61)(1, "span", 62);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, MissedWorkReportComponent_div_32_thead_29_ng_container_2_th_1_span_3_Template, 3, 3, "span", 58);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r11.content_name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r11.end_date != "0000-00-00");
} }
function MissedWorkReportComponent_div_32_thead_29_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MissedWorkReportComponent_div_32_thead_29_ng_container_2_th_1_Template, 4, 2, "th", 60);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const table_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", table_r12.content);
} }
function MissedWorkReportComponent_div_32_thead_29_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 61);
    i0.ɵɵtext(1, "Performance");
    i0.ɵɵelementEnd();
} }
function MissedWorkReportComponent_div_32_thead_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "thead");
    i0.ɵɵtemplate(1, MissedWorkReportComponent_div_32_thead_29_th_1_Template, 2, 0, "th", 58)(2, MissedWorkReportComponent_div_32_thead_29_ng_container_2_Template, 2, 1, "ng-container", 58)(3, MissedWorkReportComponent_div_32_thead_29_th_3_Template, 2, 0, "th", 59);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r13 = ctx.index;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i_r13 == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i_r13 == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i_r13 == 0);
} }
function MissedWorkReportComponent_div_32_tr_30_td_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 76)(1, "span", 77);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, "/");
    i0.ɵɵelementStart(4, "span", 77);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r16.attend_questions);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r16.total_questions);
} }
function MissedWorkReportComponent_div_32_tr_30_td_3_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r16 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("(", item_r16.parents_notify_count, ")");
} }
function MissedWorkReportComponent_div_32_tr_30_td_3_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 78);
    i0.ɵɵlistener("click", function MissedWorkReportComponent_div_32_tr_30_td_3_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r17); const item_r16 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.notifyParent(item_r16, 2)); });
    i0.ɵɵtext(1, " Notify Contact ");
    i0.ɵɵtemplate(2, MissedWorkReportComponent_div_32_tr_30_td_3_a_2_span_2_Template, 2, 1, "span", 58);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r16.status == "6");
} }
function MissedWorkReportComponent_div_32_tr_30_td_3_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 79);
    i0.ɵɵlistener("click", function MissedWorkReportComponent_div_32_tr_30_td_3_span_3_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r18); const item_r16 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.notifyParent(item_r16, 2)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r16.parents_notify_count);
} }
function MissedWorkReportComponent_div_32_tr_30_td_3_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 80);
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function MissedWorkReportComponent_div_32_tr_30_td_3_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 81);
    i0.ɵɵlistener("click", function MissedWorkReportComponent_div_32_tr_30_td_3_span_5_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r19); const item_r16 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.studentCorrectionDetail(item_r16)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r16.student_average_score);
} }
function MissedWorkReportComponent_div_32_tr_30_td_3_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 82);
    i0.ɵɵlistener("click", function MissedWorkReportComponent_div_32_tr_30_td_3_span_6_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r20); const item_r16 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.studentCorrectionDetail(item_r16)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r16.student_average_score);
} }
function MissedWorkReportComponent_div_32_tr_30_td_3_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 83);
    i0.ɵɵlistener("click", function MissedWorkReportComponent_div_32_tr_30_td_3_span_7_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r21); const item_r16 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.studentCorrectionDetail(item_r16)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r16.student_average_score);
} }
function MissedWorkReportComponent_div_32_tr_30_td_3_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 84);
    i0.ɵɵlistener("click", function MissedWorkReportComponent_div_32_tr_30_td_3_span_8_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r22); const item_r16 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.studentNotAnswer(item_r16)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r16.student_average_score);
} }
function MissedWorkReportComponent_div_32_tr_30_td_3_span_9_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 85);
    i0.ɵɵlistener("click", function MissedWorkReportComponent_div_32_tr_30_td_3_span_9_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r23); const item_r16 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.studentCorrectionDetail(item_r16)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r16.student_average_score);
} }
function MissedWorkReportComponent_div_32_tr_30_td_3_span_10_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 86);
    i0.ɵɵlistener("click", function MissedWorkReportComponent_div_32_tr_30_td_3_span_10_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r24); const item_r16 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.scoreRedirect(item_r16.student_content_id)); });
    i0.ɵɵelement(1, "i", 87);
    i0.ɵɵelementEnd();
} }
function MissedWorkReportComponent_div_32_tr_30_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 65);
    i0.ɵɵtemplate(1, MissedWorkReportComponent_div_32_tr_30_td_3_div_1_Template, 6, 2, "div", 66)(2, MissedWorkReportComponent_div_32_tr_30_td_3_a_2_Template, 3, 1, "a", 67)(3, MissedWorkReportComponent_div_32_tr_30_td_3_span_3_Template, 2, 1, "span", 68)(4, MissedWorkReportComponent_div_32_tr_30_td_3_span_4_Template, 2, 0, "span", 69)(5, MissedWorkReportComponent_div_32_tr_30_td_3_span_5_Template, 2, 1, "span", 70)(6, MissedWorkReportComponent_div_32_tr_30_td_3_span_6_Template, 2, 1, "span", 71)(7, MissedWorkReportComponent_div_32_tr_30_td_3_span_7_Template, 2, 1, "span", 72)(8, MissedWorkReportComponent_div_32_tr_30_td_3_span_8_Template, 2, 1, "span", 73)(9, MissedWorkReportComponent_div_32_tr_30_td_3_span_9_Template, 2, 1, "span", 74)(10, MissedWorkReportComponent_div_32_tr_30_td_3_span_10_Template, 2, 0, "span", 75);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r16.status == "2" || item_r16.status == "3" || item_r16.status == "6" || item_r16.status == "7");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r16.status == "4" || item_r16.status == "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r16.status == "4");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r16.status == "0" || item_r16.status == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r16.status == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r16.status == "2" || item_r16.status == "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r16.status == "3");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r16.status == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r16.status == "7");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r16.testcode_id > 0);
} }
function MissedWorkReportComponent_div_32_tr_30_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "%");
    i0.ɵɵelementEnd();
} }
function MissedWorkReportComponent_div_32_tr_30_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 63);
    i0.ɵɵlistener("click", function MissedWorkReportComponent_div_32_tr_30_Template_td_click_1_listener() { const table_r15 = i0.ɵɵrestoreView(_r14).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getStudentFullDetail(table_r15)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, MissedWorkReportComponent_div_32_tr_30_td_3_Template, 11, 10, "td", 64);
    i0.ɵɵelementStart(4, "td", 61);
    i0.ɵɵtext(5);
    i0.ɵɵtemplate(6, MissedWorkReportComponent_div_32_tr_30_span_6_Template, 2, 0, "span", 58);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const table_r15 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", table_r15.student_name, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", table_r15.content);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(table_r15.performance);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", table_r15.performance != "-");
} }
function MissedWorkReportComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41)(1, "div", 42)(2, "div", 41)(3, "div", 43);
    i0.ɵɵtemplate(4, MissedWorkReportComponent_div_32_h3_4_Template, 2, 0, "h3", 44)(5, MissedWorkReportComponent_div_32_h3_5_Template, 2, 0, "h3", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 45)(7, "p", 46)(8, "small", 47);
    i0.ɵɵelement(9, "i", 48);
    i0.ɵɵtext(10, " - UpComing");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "small", 47);
    i0.ɵɵelement(12, "i", 49);
    i0.ɵɵtext(13, " - In Progress");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "small", 47);
    i0.ɵɵelement(15, "i", 50);
    i0.ɵɵtext(16, " - Completed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "small", 47);
    i0.ɵɵelement(18, "i", 51);
    i0.ɵɵtext(19, " - Pending");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "small", 47);
    i0.ɵɵelement(21, "i", 52);
    i0.ɵɵtext(22, " - Overdue");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "small", 47);
    i0.ɵɵelement(24, "i", 53);
    i0.ɵɵtext(25, " - Not Started");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(26, "div", 41)(27, "div", 54)(28, "table", 55);
    i0.ɵɵtemplate(29, MissedWorkReportComponent_div_32_thead_29_Template, 4, 3, "thead", 56)(30, MissedWorkReportComponent_div_32_tr_30_Template, 7, 4, "tr", 56);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.studentReport.controls.contentType.value == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentReport.controls.contentType.value == "3");
    i0.ɵɵadvance(24);
    i0.ɵɵproperty("ngForOf", ctx_r1.rows);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.rows);
} }
function MissedWorkReportComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 88)(1, "div", 89)(2, "button", 90);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.message);
} }
function MissedWorkReportComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 91)(1, "h4", 92)(2, "b");
    i0.ɵɵtext(3, "Notify Contact");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 93)(5, "div", 94)(6, "h5", 95);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 96)(9, "button", 37);
    i0.ɵɵlistener("click", function MissedWorkReportComponent_ng_template_34_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.confirmNotifiy()); });
    i0.ɵɵtext(10, "Confirm");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 97);
    i0.ɵɵlistener("click", function MissedWorkReportComponent_ng_template_34_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(12, "Cancel");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("Are you sure want to notify ", ctx_r1.studentname[0].student_name, " contacts ?");
} }
function MissedWorkReportComponent_ng_template_36_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Assignment");
    i0.ɵɵelementEnd();
} }
function MissedWorkReportComponent_ng_template_36_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Assessment");
    i0.ɵɵelementEnd();
} }
function MissedWorkReportComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 91)(1, "h4", 92)(2, "b");
    i0.ɵɵtext(3, "Not Started");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 93)(5, "div", 94)(6, "h5", 95);
    i0.ɵɵtext(7, " Not submitted the ");
    i0.ɵɵtemplate(8, MissedWorkReportComponent_ng_template_36_span_8_Template, 2, 0, "span", 58)(9, MissedWorkReportComponent_ng_template_36_span_9_Template, 2, 0, "span", 58);
    i0.ɵɵtext(10, " yet.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 96)(12, "button", 97);
    i0.ɵɵlistener("click", function MissedWorkReportComponent_ng_template_36_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeNotstarted()); });
    i0.ɵɵtext(13, "Ok");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r1.studentReport.controls.contentType.value == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentReport.controls.contentType.value == "3");
} }
function MissedWorkReportComponent_ng_template_38_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 103);
    i0.ɵɵelement(1, "img", 104);
    i0.ɵɵelementEnd();
} }
function MissedWorkReportComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 91)(1, "h4", 98);
    i0.ɵɵtext(2, "Student Answer Report - ");
    i0.ɵɵelementStart(3, "span", 99);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "i", 100);
    i0.ɵɵlistener("click", function MissedWorkReportComponent_ng_template_38_Template_i_click_5_listener() { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 93);
    i0.ɵɵtemplate(7, MissedWorkReportComponent_ng_template_38_div_7_Template, 2, 0, "div", 101);
    i0.ɵɵelementStart(8, "app-answer-sheet", 102);
    i0.ɵɵlistener("studentName", function MissedWorkReportComponent_ng_template_38_Template_app_answer_sheet_studentName_8_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getStudentName($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.contentData);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.contentData == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("answerShow", true)("backStatus", false)("classId", ctx_r1.classId)("contentFormat", ctx_r1.contentFormat)("contentId", ctx_r1.contentId)("studentReportId", ctx_r1.studentId)("is_test", ctx_r1.is_test)("studentContentId", ctx_r1.studentContentId);
} }
function MissedWorkReportComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 91)(1, "h4", 105);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 106);
    i0.ɵɵlistener("click", function MissedWorkReportComponent_ng_template_40_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r28); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeOverAll()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 93);
    i0.ɵɵelement(5, "app-overalldetails", 107);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.studentName, " Overall details");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("studentdata", ctx_r1.viewdetail);
} }
export class MissedWorkReportComponent {
    constructor(auth, report, confi, sanitizer, datePipe, sseClient, route, studented, commondata, modalService, toastr, teacher, validationService, formBuilder, common, contentDetail) {
        this.auth = auth;
        this.report = report;
        this.confi = confi;
        this.sanitizer = sanitizer;
        this.datePipe = datePipe;
        this.sseClient = sseClient;
        this.route = route;
        this.studented = studented;
        this.commondata = commondata;
        this.modalService = modalService;
        this.toastr = toastr;
        this.teacher = teacher;
        this.validationService = validationService;
        this.formBuilder = formBuilder;
        this.common = common;
        this.contentDetail = contentDetail;
        this.setDate = new Date().toLocaleString('en-US', { timeZone: timeZone.location });
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
        };
        this.calledForm = '';
        this.value = new EventEmitter();
        this.coloumValues = [];
        this.missedWorkStudentNoRecord = false;
        this.missedWorkNoRecord = false;
        this.studentName = '';
        this.dragQuestionsList = [];
        this.selectContentFormate = [];
        this.subs = [];
        this.is_test = '0';
        this.missedWorkReport = {
            hideSubHeader: false,
            actions: {
                add: false,
                edit: false,
                delete: false,
                position: 'right',
            },
            columns: {
                student_name: {
                    title: 'Student Name',
                    type: 'html',
                    valuePrepareFunction: (data) => {
                        return `<span class="text-capitalize font-weight-bold table-name">${data}</span>`;
                    }
                },
                assignment1: {
                    title: 'assignment1',
                    type: 'html',
                    valuePrepareFunction: (data) => {
                        return `<span class="select-red"></span>`;
                    }
                },
                assignment2: {
                    title: 'assignment2',
                    type: 'html',
                    valuePrepareFunction: (data) => {
                        return `<span class="select-yellow"></span>`;
                    }
                },
                assignment3: {
                    title: 'assignment3',
                    type: 'html',
                    valuePrepareFunction: (data) => {
                        return `<span class="select-green"></span>`;
                    }
                },
                assignment4: {
                    title: 'assignment4',
                    type: 'html',
                    valuePrepareFunction: (data) => {
                        return `<span class="select-green"></span>`;
                    }
                },
                performance: {
                    title: 'performance'
                }
            }
        };
        // mobile and tab hide side navbar
        // this.windowSize = (window.screen.width);
        // if (this.windowSize <= 1200) {
        //     this.harizontalScroll = true;
        // } else {
        this.harizontalScroll = true;
        const date = new Date(this.setDate);
        this.from1Date = this.datePipe.transform(new Date(this.setDate).setDate(date.getDate() - 30), 'yyyy-MM-dd');
        this.to1Date = this.datePipe.transform(date, 'yyyy-MM-dd');
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: date.getFullYear(),
                month: date.getMonth(),
                day: date.getDate() != 1 ? date.getDate() - 1 : -1,
            },
        };
        this.roleId = this.auth.getRoleId();
        this.recordsperpage = 10;
        this.pageOffSet = 0;
        this.pageno = 1;
        this.webhost = this.confi.getimgUrl();
        this.studentReport = this.formBuilder.group({
            className: '',
            contentType: '2',
            contentName: '',
            studentName: '',
            submitted: '',
            performance: '',
            fromDate: '',
            toDate: ''
        });
        this.reportData = JSON.parse(this.auth.getSessionData('Individual-Class-Report'));
        this.reportStudentData = JSON.parse(this.auth.getSessionData('Individual-student-Report'));
        this.studentReport.controls.className.patchValue(this.reportData.class_id);
        this.classID = this.reportData.class_id;
    }
    //  public newSettings = { columns: { first_column: { title: 'first_column', type: 'number' } } };
    //  public missedWork = Object.assign({}, this.newSettings );
    ngOnInit() {
        if (this.classShow) {
            if (this.contentNameValue != '') {
                this.studentReport.controls.contentName.patchValue([this.contentNameValue]);
            }
            else {
                this.studentReport.controls.contentName.patchValue([]);
            }
        }
        if (this.showContent == 'Assignment') {
            this.studentReport.controls.contentType.patchValue('2');
        }
        else if (this.showContent == 'Assessment') {
            this.studentReport.controls.contentType.patchValue('3');
        }
        else if (this.showContent == 'Resource') {
            this.studentReport.controls.contentType.patchValue('1');
        }
        if (this.timeView) {
            const fd = this.from1Date.split('-');
            const fdObject = {
                isRange: false,
                singleDate: { jsDate: new Date(parseInt(fd[0]), parseInt(fd[1]) - 1, parseInt(fd[2])) },
                dateRange: null
            };
            this.studentReport.controls.fromDate.patchValue(fdObject);
            const cd = this.to1Date.split('-');
            const cdObject = {
                isRange: false,
                singleDate: { jsDate: new Date(parseInt(cd[0]), parseInt(cd[1]) - 1, parseInt(cd[2])) },
                dateRange: null
            };
            this.studentReport.controls.toDate.patchValue(cdObject);
        }
        else {
            this.studentReport.controls.fromDate.patchValue('');
            this.studentReport.controls.toDate.patchValue('');
            this.from1Date = '';
            this.to1Date = '';
        }
        this.classDetails();
        // this.studentDetails();
    }
    ngAfterContentInit() {
    }
    ngOnDestroy() {
        this.subs.forEach(val => {
            val.unsubscribe();
        });
    }
    sseClientService() {
        // const sseUrl = 'https://uthkal.com/rista/api/index.php/v1/report/studentReportClassPrint';
        const sseUrl = 'report/studentReportClassPrint';
        // console.log(sseUrl, 'sseURL');
        this.subs.push(this.sseClient.stream(sseUrl, {
            keepAlive: true, reconnectionDelay: 5_000,
            responseType: 'event'
        }, { body: this.bodyValue }, 'POST').subscribe((event) => {
            // console.log(event , 'event');
            if (event.type === 'error') {
                const errorEvent = event;
                // console.error(errorEvent, errorEvent.message);
            }
            else {
                const messageEvent = event;
                // this.notificationEvent = messageEvent.data;
                // console.log(typeof messageEvent.data, 'SSE client called');
                this.studentReportDetailsSSESuccess(messageEvent.data === 'No Records found' ? messageEvent.data : JSON.parse(messageEvent.data));
                // console.info(SSE request with type "${messageEvent.type}" and data "${messageEvent.data}");
            }
        }));
    }
    studentReportDetailsSSESuccess(successData) {
        console.log(successData, 'successData SSE client call');
        if (successData === 'No Records found') {
            this.missedWorkNoRecord = false;
            this.message = successData;
        }
        else {
            this.missedWorkNoRecord = true;
            this.rows = successData.data;
            this.totalrecords = successData.total_count;
            if (this.rows.length != '') {
                for (let i = 0; i < this.rows.length; i++) {
                    if (this.rows[i].content == '') {
                        this.missedWorkNoRecord = false;
                        this.message = 'No Records found';
                    }
                    else {
                        this.missedWorkNoRecord = true;
                        this.missedWorkStudentNoRecord = true;
                        this.rowContent = this.rows[i].content;
                        this.coloumValues[i] = [];
                        this.rows[i].content.forEach((item) => {
                            this.coloumValues[i].push(item);
                        });
                    }
                }
            }
            else {
                this.missedWorkNoRecord = false;
                this.message = 'No Records found';
            }
        }
    }
    numberValidate(event) {
        this.validationService.numberValidate(event);
    }
    notifyParent(data, id) {
        this.notifyType = id;
        this.studentname = [data];
        this.modalRef = this.modalService.open(this.modalContentnow);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    studentNotAnswer(data) {
        this.modalRef = this.modalService.open(this.notStarted);
        this.studentname = [data];
    }
    setPage(pageInfo) {
        this.pageno = pageInfo.offset + 1;
        this.pageOffSet = pageInfo.offset;
    }
    close() {
        this.modalRef.close('modalContentnow');
        this.notifyType = '';
    }
    onSave() {
        this.modalRef.close('viewStudentDetails');
    }
    closeAnswer() {
        this.modalRef.close('viewStudentDetails');
    }
    closeNotstarted() {
        this.modalRef.close('notStarted');
    }
    onDateChanged1(event, type) {
        if (type == '1') {
            this.myDpOptions1 = {
                dateRange: false,
                dateFormat: dateOptions.pickerFormat,
                firstDayOfWeek: 'su',
                disableUntil: {
                    year: event.singleDate.date.year,
                    month: event.singleDate.date.month,
                    day: event.singleDate.date.day != 1 ? event.singleDate.date.day - 1 : -1,
                },
            };
            this.from1Date = event.singleDate.formatted;
            this.studentContentDetails();
        }
        else {
            this.to1Date = event.singleDate.formatted;
            this.studentContentDetails();
        }
    }
    confirmNotifiy() {
        let notifyStudent = [];
        this.studentname.forEach((items) => {
            console.log(items, 'items');
            notifyStudent.push({
                class_id: items.class_id,
                content_id: items.content_id,
                student_id: items.student_id,
                student_content_id: items.student_content_id
            });
        });
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            notify: notifyStudent
        };
        console.log(notifyStudent, 'notifyStudent');
        this.contentDetail.notifiyParent(data).subscribe((successData) => {
            this.teacherNotifyParentSuccess(successData);
        }, (error) => {
            this.teacherNotifiyParentError(error);
        });
    }
    teacherNotifyParentSuccess(successData) {
        if (successData.IsSuccess) {
            this.modalRef.close();
            this.toastr.success(successData.ResponseObject);
            this.notifyType = '';
            this.studentDetails();
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    teacherNotifiyParentError(error) {
        console.log(error);
        this.notifyType = '';
    }
    classDetails() {
        if (this.auth.getRoleId() == '2') {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                teacher_id: '0'
            };
            this.report.getMissedWorkClassList(data).subscribe((successData) => {
                this.classDetailsSuccess(successData);
            }, (error) => {
                this.classDetailsFailure(error);
            });
        }
        else {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                teacher_id: this.auth.getUserId(),
            };
            this.report.getMissedWorkClassList(data).subscribe((successData) => {
                this.classDetailsSuccess(successData);
            }, (error) => {
                this.classDetailsFailure(error);
            });
        }
    }
    classDetailsSuccess(successData) {
        if (successData.IsSuccess) {
            this.classList = successData.ResponseObject;
            this.studentReport.controls.className.patchValue(this.classList[0].class_id);
            this.studentDetails();
        }
    }
    selectClass() {
        this.studentDetails();
    }
    classDetailsFailure(error) {
        console.log(error, 'error');
    }
    studentDetails() {
        if (this.studentReport.controls.className.value != '') {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                teacher_id: this.auth.getUserId(),
                class_id: this.studentReport.controls.className.value
            };
            if (this.classShow) {
                data['class_id'] = this.classID;
            }
            this.report.getMissedWorkStudentList(data).subscribe((successData) => {
                this.studentDetailsSuccess(successData);
            }, (error) => {
                this.studentDetailsFailure(error);
            });
        }
        else {
            this.missedWorkStudentNoRecord = false;
        }
    }
    studentDetailsSuccess(successData) {
        if (successData.IsSuccess) {
            this.missedWorkStudentNoRecord = true;
            this.studentList = successData.ResponseObject;
            this.studentList.unshift({ student_id: '', student_name: 'All' });
            this.studentContentDetails();
        }
        else {
            this.missedWorkNoRecord = false;
            this.missedWorkStudentNoRecord = false;
            this.message = 'No Records found';
            this.studentContentDetails();
        }
    }
    studentDetailsFailure(error) {
        console.log(error, 'error');
    }
    contentTypeSelect() {
        this.studentReport.controls.contentName.patchValue([]);
        this.studentContentDetails();
    }
    studentContentDetails() {
        if (this.studentReport.controls.className.value != '') {
            console.log(this.from1Date, 'this.from1Date');
            let dateSearchShow = this.timeView == true ? '1' : '2';
            if (this.from1Date == '' && this.to1Date == '' && this.timeView) {
                dateSearchShow = '3';
            }
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                teacher_id: this.auth.getUserId(),
                class_id: this.studentReport.controls.className.value,
                content_type: this.studentReport.controls.contentType.value,
                content_id: this.studentReport.controls.contentName.value,
                from_date: this.datePipe.transform(this.from1Date, 'yyyy-MM-dd'),
                to_date: this.datePipe.transform(this.to1Date, 'yyyy-MM-dd'),
                date_filter: dateSearchShow
            };
            if (this.classShow) {
                data['class_id'] = this.classID;
                if (this.showContent == 'Assignment') {
                    data['content_type'] = '2';
                }
                else if (this.showContent == 'Assessment') {
                    data['content_type'] = '3';
                }
                else {
                    data['content_type'] = this.studentReport.controls.contentType.value;
                }
            }
            this.report.getPerformanceContent(data).subscribe((successData) => {
                this.studentContentDetailsSuccess(successData);
            }, (error) => {
                this.studentContentDetailsFailure(error);
            });
        }
        else {
            this.missedWorkStudentNoRecord = false;
        }
    }
    studentContentDetailsSuccess(successData) {
        if (successData.IsSuccess) {
            this.missedWorkNoRecord = true;
            this.studentContentList = successData.ResponseObject;
            const selected = this.studentContentList.map(item => item.content_id);
            const selectedFormate = this.studentContentList.map(item => item.content_format);
            if (this.studentView) {
                let patchData = [];
                let patachDataFormate = [];
                selected.forEach((item) => {
                    if (parseInt(item) === parseInt(this.reportStudentData.content_id)) {
                        patchData.push(item);
                    }
                    if (parseInt(item) === parseInt(this.reportStudentData.content_format)) {
                        patachDataFormate.push(item);
                    }
                });
                this.studentReport.controls.contentName.patchValue(patchData);
                this.selectContentFormate = patachDataFormate;
                this.showContentDetails = true;
            }
            else {
                this.studentReport.get('contentName').patchValue(selected);
                this.selectContentFormate = selectedFormate;
                this.showContentDetails = false;
            }
            this.studentReportDetails();
        }
        else {
            this.missedWorkNoRecord = false;
            this.studentList = [];
            this.studentContentList = [];
            this.studentReport.get('contentName').patchValue([]);
            this.message = 'No Records found';
        }
    }
    studentContentDetailsFailure(error) {
        console.log(error, 'error');
    }
    onSelectAll() {
        const selected = this.studentContentList.map(item => item.content_id);
        const selectedFomat = this.studentContentList.map(item => item.content_format);
        this.selectContentFormate = selectedFomat;
        this.studentReport.controls.contentName.patchValue(selected);
        this.studentReportDetails();
    }
    selectContantName(eve) {
        const selected = eve.map(item => item.content_id);
        const selectedFomat = eve.map(item => item.content_format);
        this.selectContentFormate = selectedFomat;
        this.studentReport.controls.contentName.patchValue(selected);
        this.studentReportDetails();
    }
    studentReportDetails() {
        if (this.studentReport.controls.contentName.value != '') {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                teacher_id: this.auth.getUserId(),
                content_type: this.studentReport.controls.contentType.value,
                class_id: this.studentReport.controls.className.value,
                student_id: this.studentReport.controls.studentName.value,
                type: this.studentReport.controls.submitted.value,
                performance: this.studentReport.controls.performance.value,
                content_id: this.studentReport.controls.contentName.value,
                content_format: this.selectContentFormate,
                class_content_id: this.calledForm == 'class' ? '' : this.reportStudentData?.class_content_id
            };
            if (this.classShow) {
                data['class_id'] = this.classID;
                if (this.showContent == 'Assignment') {
                    data['content_type'] = '2';
                }
                else if (this.showContent == 'Assessment') {
                    data['content_type'] = '3';
                }
                else {
                    data['content_type'] = this.studentReport.controls.contentType.value;
                }
            }
            this.subs.forEach(val => {
                val.unsubscribe();
            });
            console.log(this.subs, 'subs');
            // this.subs = [];
            this.bodyValue = data;
            this.sseClientService();
            this.report.getMissedWorkReport(data).subscribe((successData) => {
                this.studentReportDetailsSuccess(successData);
            }, (error) => {
                this.studentReportDetailsFailure(error);
            });
        }
        else {
            this.missedWorkStudentNoRecord = false;
        }
    }
    studentReportDetailsSuccess(successData) {
        if (successData.IsSuccess) {
            this.missedWorkNoRecord = true;
            this.rows = successData.ResponseObject?.data;
            this.totalrecords = successData.ResponseObject.total_count;
            if (this.rows.length != '') {
                for (let i = 0; i < this.rows.length; i++) {
                    if (this.rows[i].content == '') {
                        this.missedWorkNoRecord = false;
                        this.message = 'No Records found';
                        // this.missedWorkStudentNoRecord = false;
                        this.message = 'No Records found';
                    }
                    else {
                        this.missedWorkNoRecord = true;
                        this.missedWorkStudentNoRecord = true;
                        this.rowContent = this.rows[i].content;
                        this.coloumValues[i] = [];
                        this.rows[i].content.forEach((item) => {
                            this.coloumValues[i].push(item);
                        });
                    }
                }
            }
            else {
                this.missedWorkNoRecord = false;
                this.message = 'No Records found';
            }
        }
        else {
            this.missedWorkNoRecord = false;
            this.message = 'No Records found';
        }
    }
    studentReportDetailsFailure(error) {
        console.log(error, 'error');
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
        this.studented.getStudentList(data).subscribe((successData) => {
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
    closeOverAll() {
        this.modalRef.close('viewoveralldetails');
    }
    studentContentAll() {
        const selected = this.studentContentList.map(item => item.content_id);
        let patchData = [];
        let patachDataFormate = [];
        selected.forEach((item) => {
            if (parseInt(item) === parseInt(this.reportStudentData.content_id)) {
                patchData.push(item);
            }
            if (parseInt(item) === parseInt(this.reportStudentData.content_format)) {
                patachDataFormate.push(item);
            }
        });
        this.studentReport.controls.contentName.patchValue(patchData);
        this.selectContentFormate = patachDataFormate;
        console.log(this.selectContentFormate, 'formate');
        this.showContentDetails = true;
    }
    getDismissReason(reason) {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    getMonths(row) {
        return row[0].color;
        // here you can see that I always pass index as zero. I need to access the row index I am at in the view and pass it to this method
    }
    getRowIndex(row) {
        return this.table.bodyComponent.getRowIndex(row); // row being data object passed into the template
    }
    studentCorrectionDetail(data) {
        this.contentData = '';
        console.log(data, 'data');
        this.contentId = data.content_id;
        this.contentFormat = data.content_format;
        this.classId = data.class_id;
        this.studentId = data.student_id;
        this.studentContentId = data.student_content_id;
        this.is_test = data?.is_test ?? '0';
        this.modalRef = this.modalService.open(this.viewStudentDetails, { size: 'xl', windowClass: 'answer-sheet' });
    }
    getStudentName(event) {
        this.contentData = event;
    }
    scoreRedirect(value) {
        console.log(value);
        this.route.navigate(['/score/score-details/' + '' + value]);
        this.value.emit();
    }
    static { this.ɵfac = function MissedWorkReportComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MissedWorkReportComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.ReportService), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i4.DomSanitizer), i0.ɵɵdirectiveInject(i5.DatePipe), i0.ɵɵdirectiveInject(i6.SseClient), i0.ɵɵdirectiveInject(i7.Router), i0.ɵɵdirectiveInject(i8.StudentService), i0.ɵɵdirectiveInject(i9.CommonDataService), i0.ɵɵdirectiveInject(i10.NgbModal), i0.ɵɵdirectiveInject(i11.ToastrService), i0.ɵɵdirectiveInject(i12.TeacherService), i0.ɵɵdirectiveInject(i13.ValidationService), i0.ɵɵdirectiveInject(i14.FormBuilder), i0.ɵɵdirectiveInject(i15.CommonService), i0.ɵɵdirectiveInject(i16.ContentdetailService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MissedWorkReportComponent, selectors: [["app-missed-work-report"]], viewQuery: function MissedWorkReportComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(AnswerSheetComponent, 5);
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(DatatableComponent, 5);
            i0.ɵɵviewQuery(_c3, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.answerCom = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewoveralldetails = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContentnow = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.notStarted = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.table = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewStudentDetails = _t.first);
        } }, inputs: { classShow: "classShow", calledForm: "calledForm", studentView: "studentView", showContent: "showContent", timeView: "timeView", contentNameValue: "contentNameValue" }, outputs: { value: "value" }, decls: 42, vars: 13, consts: [["contentnow", ""], ["notStarted", ""], ["viewStudentDetails", ""], ["viewoveralldetails", ""], ["dp", "angular-mydatepicker"], ["dp1", "angular-mydatepicker"], [1, "container-fluid", "missed-work-report"], [3, "formGroup"], [1, "row", "my-2"], ["class", "form-group col-6 col-md-3 px-0", 4, "ngIf"], ["class", "form-group col-6 col-md-2 pl-0", 4, "ngIf"], [1, "form-group", "col-6", "col-md-2", "pl-0"], [1, "col-xl-12", "col-md-12", "px-0", "font-weight-bold"], ["formControlName", "submitted", 1, "custom-select", "col-md-12", 3, "change"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], [1, "form-group", "col-6", "col-md-6", "px-0"], [1, "col-xl-12", "col-md-12", "font-weight-bold"], [1, "col-xl-12", "col-md-12"], ["bindLabel", "content_name", "bindValue", "content_id", "formControlName", "contentName", "placeholder", "Content Name", 3, "change", "items", "multiple", "readonly"], ["ng-header-tmp", ""], ["class", "row", 4, "ngIf"], ["class", "row d-flex justify-content-center list-card mt-3", 4, "ngIf"], [1, "form-group", "col-6", "col-md-3", "px-0"], ["type", "text", "placeholder", "Class Name", "readonly", "", 1, "form-control", 3, "value"], ["bindLabel", "student_name", "bindValue", "student_id", "formControlName", "studentName", "placeholder", "Student List", 3, "change", "items"], ["formControlName", "contentType", 1, "custom-select", "col-md-12", 3, "change"], ["formControlName", "performance", 1, "custom-select", "col-md-12", 3, "change"], ["value", "6"], [1, "col-xl-12", "col-md-12", "form-group"], [1, "input-group"], ["name", "fromdate", "placeholder", "mm/dd/yyyy", "formControlName", "fromDate", "angular-mydatepicker", "", 1, "form-control", 3, "dateChanged", "options"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-calendar-o"], ["name", "todate", "placeholder", "mm/dd/yyyy", "formControlName", "toDate", "angular-mydatepicker", "", 1, "form-control", 3, "dateChanged", "options"], [1, "cursor", "letter", "pt-2", 3, "click"], [1, "row"], [1, "col-12", "card", "p-3"], [1, "col-4"], ["class", "letter mt-3 mb-3", 4, "ngIf"], [1, "col-8", "d-flex", "justify-content-end"], [1, "p-3"], [1, "ml-3"], [1, "fa", "fa-square", "yet-to-start-color-bg", "p-1"], [1, "fa", "fa-square", "in-progress-color-bg", "p-1"], [1, "fa", "fa-square", "completed-color-bg", "p-1"], [1, "fa", "fa-square", "pending-color-bg", "p-1"], [1, "fa", "fa-square", "over-due-bg", "p-1"], [1, "fa", "fa-square", "never-bg", "p-1"], [1, "col-12", "table-responsive-ipad"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "letter", "mt-3", "mb-3"], [4, "ngIf"], ["class", "text-center align-middle", 4, "ngIf"], ["class", "text-center align-middle", 4, "ngFor", "ngForOf"], [1, "text-center", "align-middle"], [1, "d-block"], [1, "color-primary", "cursor", 3, "click"], ["class", "text-center align-bottom", 4, "ngFor", "ngForOf"], [1, "text-center", "align-bottom"], ["class", "col-12 mb-1 color-primary px-0", 4, "ngIf"], ["class", "d-block cursor notify-parent mb-1", 3, "click", 4, "ngIf"], ["class", "over-due cursor", 3, "click", 4, "ngIf"], ["class", "cursor", 4, "ngIf"], ["class", "yet-to-start-color cursor", 3, "click", 4, "ngIf"], ["class", "in-progress-color cursor", 3, "click", 4, "ngIf"], ["class", "completed-color cursor", 3, "click", 4, "ngIf"], ["class", "never cursor", 3, "click", 4, "ngIf"], ["class", "pending-color cursor", 3, "click", 4, "ngIf"], ["class", "ml-2 cursor bg-primary p-1", "title", "score Details", 3, "click", 4, "ngIf"], [1, "col-12", "mb-1", "color-primary", "px-0"], [2, "border", "none", "padding", "2px 8px"], [1, "d-block", "cursor", "notify-parent", "mb-1", 3, "click"], [1, "over-due", "cursor", 3, "click"], [1, "cursor"], [1, "yet-to-start-color", "cursor", 3, "click"], [1, "in-progress-color", "cursor", 3, "click"], [1, "completed-color", "cursor", 3, "click"], [1, "never", "cursor", 3, "click"], [1, "pending-color", "cursor", 3, "click"], ["title", "score Details", 1, "ml-2", "cursor", "bg-primary", "p-1", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-line-chart"], [1, "row", "d-flex", "justify-content-center", "list-card", "mt-3"], [1, "col-12"], [1, "nodataList"], [1, "modal-header"], [1, "modal-title", "col-12", "text-center"], [1, "modal-body"], [1, "container-fluid"], [1, "text-center"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "modal-title"], [1, "color-primary"], [1, "fa", "fa-close", "cursor", 3, "click"], ["id", "custom-pdf-loader", "style", "height: 40vh;", 4, "ngIf"], [3, "studentName", "answerShow", "backStatus", "classId", "contentFormat", "contentId", "studentReportId", "is_test", "studentContentId"], ["id", "custom-pdf-loader", 2, "height", "40vh"], ["alt", "", "src", "assets/images/pre-loader/loader-01.svg"], ["id", "modal-basic-title", 1, "modal-title", "color-primary"], ["aria-hidden", "true", 1, "fa", "fa-close", "fa-lg", "mt-1", 2, "color", "#7F3486", "cursor", "pointer", "float", "right", 3, "click"], [3, "studentdata"]], template: function MissedWorkReportComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "section", 6)(1, "form", 7)(2, "div", 8);
            i0.ɵɵtemplate(3, MissedWorkReportComponent_div_3_Template, 5, 1, "div", 9)(4, MissedWorkReportComponent_div_4_Template, 5, 1, "div", 9)(5, MissedWorkReportComponent_div_5_Template, 8, 0, "div", 10)(6, MissedWorkReportComponent_div_6_Template, 5, 1, "div", 10);
            i0.ɵɵelementStart(7, "div", 11)(8, "label", 12);
            i0.ɵɵtext(9, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "select", 13);
            i0.ɵɵlistener("change", function MissedWorkReportComponent_Template_select_change_10_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.studentReportDetails()); });
            i0.ɵɵelementStart(11, "option", 14);
            i0.ɵɵtext(12, "All");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "option", 15);
            i0.ɵɵtext(14, "Up Coming");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "option", 16);
            i0.ɵɵtext(16, "In Progress");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "option", 17);
            i0.ɵɵtext(18, "Completed");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "option", 18);
            i0.ɵɵtext(20, "Overdue");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "option", 19);
            i0.ɵɵtext(22, "Not Started");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(23, MissedWorkReportComponent_div_23_Template, 18, 0, "div", 10)(24, MissedWorkReportComponent_div_24_Template, 10, 1, "div", 9)(25, MissedWorkReportComponent_div_25_Template, 10, 1, "div", 9);
            i0.ɵɵelementStart(26, "div", 20)(27, "label", 21);
            i0.ɵɵtext(28, "Content Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "div", 22)(30, "ng-select", 23);
            i0.ɵɵlistener("change", function MissedWorkReportComponent_Template_ng_select_change_30_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.selectContantName($event)); });
            i0.ɵɵtemplate(31, MissedWorkReportComponent_ng_template_31_Template, 2, 0, "ng-template", 24);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(32, MissedWorkReportComponent_div_32_Template, 31, 4, "div", 25)(33, MissedWorkReportComponent_div_33_Template, 4, 1, "div", 26)(34, MissedWorkReportComponent_ng_template_34_Template, 13, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(36, MissedWorkReportComponent_ng_template_36_Template, 14, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(38, MissedWorkReportComponent_ng_template_38_Template, 9, 10, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(40, MissedWorkReportComponent_ng_template_40_Template, 6, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.studentReport);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.classShow);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.missedWorkStudentNoRecord);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.classShow && ctx.showContent == "other");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.classShow && (ctx.showContent == "Assignment" || ctx.showContent == "Assessment"));
            i0.ɵɵadvance(17);
            i0.ɵɵproperty("ngIf", ctx.showContent != "Resource");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.timeView);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.timeView);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("items", ctx.studentContentList)("multiple", true)("readonly", ctx.showContentDetails);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.missedWorkNoRecord);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.missedWorkNoRecord);
        } }, dependencies: [i5.NgForOf, i5.NgIf, i14.ɵNgNoValidate, i14.NgSelectOption, i14.ɵNgSelectMultipleOption, i14.DefaultValueAccessor, i14.SelectControlValueAccessor, i14.NgControlStatus, i14.NgControlStatusGroup, i14.FormGroupDirective, i14.FormControlName, i17.NgSelectComponent, i17.NgHeaderTemplateDirective, i18.AngularMyDatePickerDirective, i19.OveralldetailsComponent, i20.AnswerSheetComponent, i21.CustomDateFormatPipe], styles: ["table[_ngcontent-%COMP%]{\n  margin-bottom: 0 !important;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MissedWorkReportComponent, [{
        type: Component,
        args: [{ selector: 'app-missed-work-report', template: "<section class=\" container-fluid missed-work-report\">\n    <form [formGroup]=\"studentReport\">\n        <div class=\"row my-2\">\n            <!--            <div class=\"form-group col-6 col-md-2\" *ngIf=\"!classShow\">-->\n            <!--                <label class=\"col-xl-12 col-md-12\"><span style=\"visibility: hidden\">*</span>-->\n            <!--                    Class List</label>-->\n            <!--                <div class=\"col-xl-12 col-md-12\">-->\n            <!--                    <ng-select (change)=\"selectClass()\"-->\n            <!--                               [items]=\"classList\"-->\n            <!--                               bindLabel=\"class_name\"-->\n            <!--                               bindValue=\"class_id\"-->\n            <!--                               formControlName=\"className\"-->\n            <!--                               placeholder=\"Class List\">-->\n            <!--                    </ng-select>-->\n            <!--                </div>-->\n            <!--            </div>-->\n            <div class=\"form-group col-6 col-md-3 px-0\" *ngIf=\"classShow\">\n                <label class=\"col-xl-12 col-md-12 font-weight-bold\">Class Name</label>\n                <div class=\"col-xl-12 col-md-12\">\n                    <input type=\"text\" placeholder=\"Class Name\" readonly class=\"form-control\"\n                           [value]=\"reportData.class_name\">\n                </div>\n            </div>\n            <div class=\"form-group col-6 col-md-3 px-0\" *ngIf=\"missedWorkStudentNoRecord\">\n                <label class=\"col-xl-12 col-md-12 font-weight-bold\">Student List</label>\n                <div class=\"col-xl-12 col-md-12\">\n                    <ng-select (change)=\"studentReportDetails()\"\n                               [items]=\"studentList\"\n                               bindLabel=\"student_name\"\n                               bindValue=\"student_id\"\n                               formControlName=\"studentName\"\n                               placeholder=\"Student List\">\n                    </ng-select>\n                </div>\n            </div>\n            <!--            <div class=\"form-group col-12 col-md-3\" *ngIf=\"missedWorkStudentNoRecord == true\">-->\n            <!--                <label class=\"col-xl-12 col-md-12\">Student</label>-->\n            <!--                <select class=\"custom-select col-md-12\" formControlName=\"studentName\" (change)=\"studentReportDetails()\">-->\n            <!--                    <option value=\"\">All</option>-->\n            <!--                    <option *ngFor=\"let student of studentList\" [value]=\"student.student_id\">{{student.student_name}}</option>-->\n            <!--                </select>-->\n            <!--            </div>-->\n            <div class=\"form-group col-6 col-md-2 pl-0\" *ngIf=\"classShow && showContent == 'other'\">\n                <label class=\"col-xl-12 col-md-12 px-0 font-weight-bold\">Content Type</label>\n                <select class=\"custom-select col-md-12\" formControlName=\"contentType\" (change)=\"contentTypeSelect()\">\n                    <option value=\"2\">Assignment</option>\n                    <option value=\"3\">Assessment</option>\n                </select>\n            </div>\n            <div class=\"form-group col-6 col-md-2 pl-0\"\n                 *ngIf=\"classShow && (showContent == 'Assignment' || showContent == 'Assessment')\">\n                <label class=\"col-xl-12 col-md-12 px-0 font-weight-bold\">Content Type</label>\n                <div class=\"col-xl-12 col-md-12\">\n                    <input type=\"text\" placeholder=\"Class Name\" readonly class=\"form-control\" [value]=\"showContent\">\n                </div>\n            </div>\n            <div class=\"form-group col-6 col-md-2 pl-0\">\n                <label class=\"col-xl-12 col-md-12 px-0 font-weight-bold\">Status</label>\n                <select class=\"custom-select col-md-12\" formControlName=\"submitted\" (change)=\"studentReportDetails()\">\n                    <option value=\"\">All</option>\n                    <option value=\"1\">Up Coming</option>\n                    <option value=\"2\">In Progress</option>\n                    <option value=\"3\">Completed</option>\n                    <option value=\"4\">Overdue</option>\n                    <option value=\"5\">Not Started</option>\n                </select>\n            </div>\n\n            <div class=\"form-group col-6 col-md-2 pl-0\" *ngIf=\"showContent != 'Resource'\">\n                <label class=\"col-xl-12 col-md-12 px-0 font-weight-bold\">Performance</label>\n                <select class=\"custom-select col-md-12\" formControlName=\"performance\" (change)=\"studentReportDetails()\">\n                    <option value=\"\">All</option>\n                    <option value=\"1\">Master</option>\n                    <option value=\"2\">Excellent</option>\n                    <option value=\"3\">Proficient</option>\n                    <option value=\"4\">Average</option>\n                    <option value=\"5\">Below Average</option>\n                    <option value=\"6\">Missed</option>\n                </select>\n            </div>\n\n            <div class=\"form-group col-6 col-md-3 px-0\" *ngIf=\"timeView\">\n                <label class=\"col-xl-12 col-md-12 font-weight-bold\">From Date</label>\n                <div class=\"col-xl-12 col-md-12 form-group\">\n                    <div class=\"input-group\">\n                        <input class=\"form-control\" name=\"fromdate\" placeholder=\"mm/dd/yyyy\" [options]=\"myDpOptions\"\n                               formControlName=\"fromDate\" angular-mydatepicker #dp=\"angular-mydatepicker\"\n                               (dateChanged)=\"onDateChanged1($event, '1')\">\n                        <div class=\"input-group-append\">\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp.toggleCalendar()\">\n                                <i class=\"fa fa-calendar-o\"></i>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group col-6 col-md-3 px-0\" *ngIf=\"timeView\">\n                <label class=\"col-xl-12 col-md-12 font-weight-bold\">To Date</label>\n                <div class=\"col-xl-12 col-md-12 form-group\">\n                    <div class=\"input-group\">\n                        <input class=\"form-control\" name=\"todate\" placeholder=\"mm/dd/yyyy\"\n                               formControlName=\"toDate\" angular-mydatepicker #dp1=\"angular-mydatepicker\"\n                               [options]=\"myDpOptions1\" (dateChanged)=\"onDateChanged1($event, '2')\"/>\n                        <div class=\"input-group-append\">\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp1.toggleCalendar()\">\n                                <i class=\"fa fa-calendar-o\"></i>\n                            </button>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group col-6 col-md-6 px-0\">\n                <label class=\"col-xl-12 col-md-12 font-weight-bold\">Content Name</label>\n                <div class=\"col-xl-12 col-md-12\">\n                    <ng-select (change)=\"selectContantName($event)\"\n                               [items]=\"studentContentList\"\n                               bindLabel=\"content_name\"\n                               bindValue=\"content_id\"\n                               formControlName=\"contentName\"\n                               placeholder=\"Content Name\"\n                               [multiple]=\"true\"\n                               [readonly]=\"showContentDetails\">\n                        <ng-template ng-header-tmp>\n                            <h5 class=\"cursor letter pt-2\" (click)=\"onSelectAll()\">Select All</h5>\n                        </ng-template>\n                    </ng-select>\n                </div>\n            </div>\n        </div>\n    </form>\n    <!--    <div class=\"row\" *ngIf=\"missedWorkNoRecord\">-->\n    <!--        <div class=\"col-md-6\">-->\n    <!--        </div>-->\n    <!--        <div class=\"col-md-6\">-->\n    <!--            <h6 class=\"yet-to-start-color\">Yet To Start</h6>-->\n    <!--            <h6 class=\"in-progress-color\">In Progress</h6>-->\n    <!--            <h6 class=\"completed-color\">Completed</h6>-->\n    <!--            <h6 class=\"over-due\">Overdue</h6>-->\n    <!--            <h6 class=\"yet-to-start-color\">In Progress - Not Started</h6>-->\n    <!--        </div>-->\n    <!--    </div>-->\n    <div class=\"row\" *ngIf=\"missedWorkNoRecord\">\n        <div class=\"col-12 card p-3\">\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <h3 class=\"letter mt-3 mb-3\" *ngIf=\"studentReport.controls.contentType.value  == '2'\">Assignment\n                        Details</h3>\n                    <h3 class=\"letter mt-3 mb-3\" *ngIf=\"studentReport.controls.contentType.value  == '3'\">Assessment\n                        Details</h3>\n                </div>\n                <div class=\"col-8 d-flex justify-content-end\">\n                    <p class=\"p-3\">\n                        <small class=\"ml-3\"><i class=\"fa fa-square yet-to-start-color-bg p-1\"></i> - UpComing</small>\n                        <small class=\"ml-3\"><i class=\"fa fa-square in-progress-color-bg p-1\"></i> - In Progress</small>\n                        <small class=\"ml-3\"><i class=\"fa fa-square completed-color-bg p-1\"></i> - Completed</small>\n                        <small class=\"ml-3\"><i class=\"fa fa-square pending-color-bg p-1\"></i> - Pending</small>\n                        <small class=\"ml-3\"><i class=\"fa fa-square over-due-bg p-1\"></i> - Overdue</small>\n                        <small class=\"ml-3\"><i class=\"fa fa-square never-bg p-1\"></i> - Not Started</small>\n                    </p>\n                </div>\n            </div>\n            <!--        <ng2-smart-table [settings]=\"missedWorkReport\"  [source]=\"rows\"></ng2-smart-table>-->\n            <!--            <ngx-datatable-->\n            <!--                    class=\"bootstrap\"-->\n            <!--                    [rows]=\"rows\"-->\n            <!--                    [columnMode]=\"'force'\"-->\n            <!--                    [headerHeight]=\"50\"-->\n            <!--                    [footerHeight]=\"50\"-->\n            <!--                    [rowHeight]=\"'auto'\"-->\n            <!--                    [externalPaging]=\"true\"-->\n            <!--                    [count]=\"totalrecords\"-->\n            <!--                    [offset]=\"pageOffSet\"-->\n            <!--                    [limit]=\"recordsperpage\"-->\n            <!--                    (page)='setPage($event)'-->\n            <!--                    [scrollbarH]=\"harizontalScroll\">-->\n\n            <!--                <ngx-datatable-column name=\"Student Name\" prop=\"student_name\">-->\n            <!--                    <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">-->\n            <!--                        <h6>{{row.student_name}}</h6>-->\n            <!--                    </ng-template>-->\n            <!--                </ngx-datatable-column>-->\n            <!--getRowIndex(rows-->\n            <!--                <ngx-datatable-column *ngFor=\"let col1 of coloumValues[0]; let i = index\" [name]=\"rows.content_name\">-->\n            <!--                    <ng-template *ngFor=\"let col of col1[i];\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">-->\n            <!--&lt;!&ndash;                        <p>&ndash;&gt;-->\n            <!--                            <span class=\"yet-to-start-color\" *ngIf=\"col.color == '1'\"></span>-->\n            <!--&lt;!&ndash;                        </p>&ndash;&gt;-->\n            <!--                        <span class=\"in-progress-color\" *ngIf=\"col.color == '2'\"></span>-->\n            <!--                        <span class=\"completed-color\" *ngIf=\"col.color == '3'\"></span>-->\n            <!--                        <span class=\"over-due\" *ngIf=\"col.color == '4'\" (click)=\"notifyParent(col, 2)\"> Notify Parent</span>-->\n            <!--                        <span class=\"never\" *ngIf=\"col.color == '5'\"></span>-->\n            <!--                    </ng-template>-->\n            <!--                </ngx-datatable-column>-->\n\n            <!--                <ngx-datatable-column name=\"Performance\" prop=\"performance\">-->\n            <!--                    <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">-->\n            <!--                        <h6>{{value}}<span *ngIf=\"value != '-'\">%</span></h6>-->\n            <!--                    </ng-template>-->\n            <!--                </ngx-datatable-column>-->\n            <!--            </ngx-datatable>-->\n            <div class=\"row\">\n                <div class=\"col-12 table-responsive-ipad\">\n                    <table class=\"table table-bordered\">\n                        <thead *ngFor=\"let table of rows; let i=index;\">\n                        <th *ngIf=\"i==0;\">Student Name</th>\n                        <ng-container *ngIf=\"i==0;\">\n                            <th *ngFor=\"let item of table.content\" class=\"text-center align-middle\"><span\n                                    class=\"d-block\">{{item.content_name}}</span> <span\n                                    *ngIf=\"item.end_date != '0000-00-00'\">{{item.end_date | customDateFormat}}</span>\n                            </th>\n                        </ng-container>\n                        <th *ngIf=\"i==0;\" class=\"text-center align-middle\">Performance</th>\n                        </thead>\n                        <tr *ngFor=\"let table of rows; let i=index;\">\n                            <td (click)=\"getStudentFullDetail(table)\"\n                                class=\"color-primary cursor\"> {{table.student_name}}</td>\n                            <td *ngFor=\"let item of table.content\" class=\"text-center align-bottom\">\n                                <div *ngIf=\"item.status == '2' || item.status == '3' || item.status == '6' || item.status == '7'\"\n                                     class=\"col-12 mb-1 color-primary px-0\">\n                                    <span style=\"border: none; padding: 2px 8px\">{{item.attend_questions}}</span>/<span\n                                        style=\"border: none; padding: 2px 8px\">{{item.total_questions}}</span>\n                                </div>\n                                <a (click)=\"notifyParent(item, 2)\" *ngIf=\"item.status == '4' || item.status == '6'\"\n                                   class=\"d-block cursor notify-parent mb-1\"> Notify Contact <span\n                                        *ngIf=\"item.status == '6'\">({{item.parents_notify_count}})</span></a>\n                                <span (click)=\"notifyParent(item, 2)\" *ngIf=\"item.status == '4'\"\n                                      class=\"over-due cursor\">{{item.parents_notify_count}}</span>\n                                <span class=\"cursor\" *ngIf=\"item.status == '0' || item.status == ''\">-</span>\n                                <span class=\"yet-to-start-color cursor\" (click)=\"studentCorrectionDetail(item)\"\n                                      *ngIf=\"item.status == '1'\">{{item.student_average_score}}</span>\n                                <!--                        </p>-->\n                                <span (click)=\"studentCorrectionDetail(item)\"\n                                      *ngIf=\"item.status == '2' || item.status == '6'\"\n                                      class=\"in-progress-color cursor\">{{item.student_average_score}}</span>\n                                <span class=\"completed-color cursor\" (click)=\"studentCorrectionDetail(item)\"\n                                      *ngIf=\"item.status == '3'\">{{item.student_average_score}}</span>\n                                <span class=\"never cursor\" (click)=\"studentNotAnswer(item)\"\n                                      *ngIf=\"item.status == '5'\">{{item.student_average_score}}</span>\n                                <span (click)=\"studentCorrectionDetail(item)\" *ngIf=\"item.status == '7'\"\n                                      class=\"pending-color cursor\">{{item.student_average_score}}</span>\n                                <span *ngIf=\"item.testcode_id > 0\" class=\"ml-2 cursor bg-primary p-1\"\n                                      title=\"score Details\" (click)=\"scoreRedirect(item.student_content_id)\"><i\n                                        class=\"fa fa-line-chart\" aria-hidden=\"true\"></i></span>\n                            </td>\n                            <td class=\"text-center align-middle\">{{table.performance}}<span\n                                    *ngIf=\"table.performance != '-'\">%</span></td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-center list-card mt-3\" *ngIf=\"!missedWorkNoRecord\">\n        <div class=\"col-12\">\n            <button class=\"nodataList\">{{message}}</button>\n        </div>\n    </div>\n    <ng-template #contentnow let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title col-12 text-center\"><b>Notify Contact</b></h4>\n        </div>\n        <div class=\"modal-body\">\n            <!-- Container-fluid starts-->\n            <div class=\"container-fluid\">\n                <h5 class=\"text-center\">Are you sure want to notify {{studentname[0].student_name}} contacts ?</h5>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirmNotifiy()\">Confirm</button>\n            <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"close()\">Cancel</button>\n        </div>\n    </ng-template>\n</section>\n\n<ng-template #notStarted let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title col-12 text-center\"><b>Not Started</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n            <h5 class=\"text-center\"> Not submitted the\n                <span *ngIf=\"studentReport.controls.contentType.value  == '2'\">Assignment</span>\n                <span *ngIf=\"studentReport.controls.contentType.value  == '3'\">Assessment</span> yet.</h5>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"closeNotstarted()\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #viewStudentDetails let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Student Answer Report - <span class=\"color-primary\">{{contentData}}</span></h4>\n        <i class=\"fa fa-close cursor\" (click)=\"onSave()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div *ngIf=\"contentData == ''\" id=\"custom-pdf-loader\" style=\"height: 40vh;\">\n            <img alt=\"\" src=\"assets/images/pre-loader/loader-01.svg\">\n        </div>\n        <app-answer-sheet (studentName)=\"getStudentName($event)\" [answerShow]=\"true\"\n                          [backStatus]=\"false\" [classId]=\"classId\" [contentFormat]=\"contentFormat\"\n                          [contentId]=\"contentId\" [studentReportId]=\"studentId\" [is_test]=\"is_test\"\n                          [studentContentId]=\"studentContentId\"></app-answer-sheet>\n    </div>\n</ng-template>\n\n<ng-template #viewoveralldetails let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title color-primary\" id=\"modal-basic-title\">{{studentName}} Overall details</h4>\n        <i (click)=\"closeOverAll()\" aria-hidden=\"true\"\n           class=\"fa fa-close fa-lg mt-1\" style=\"color:#7F3486; cursor: pointer; float: right;\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <app-overalldetails\n                [studentdata]=\"viewdetail\"\n        >\n        </app-overalldetails>\n    </div>\n</ng-template>\n", styles: ["table{\n  margin-bottom: 0 !important;\n}"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.ReportService }, { type: i3.ConfigurationService }, { type: i4.DomSanitizer }, { type: i5.DatePipe }, { type: i6.SseClient }, { type: i7.Router }, { type: i8.StudentService }, { type: i9.CommonDataService }, { type: i10.NgbModal }, { type: i11.ToastrService }, { type: i12.TeacherService }, { type: i13.ValidationService }, { type: i14.FormBuilder }, { type: i15.CommonService }, { type: i16.ContentdetailService }], { classShow: [{
            type: Input
        }], calledForm: [{
            type: Input
        }], studentView: [{
            type: Input
        }], showContent: [{
            type: Input
        }], timeView: [{
            type: Input
        }], contentNameValue: [{
            type: Input
        }], value: [{
            type: Output
        }], answerCom: [{
            type: ViewChild,
            args: [AnswerSheetComponent, { static: false }]
        }], viewoveralldetails: [{
            type: ViewChild,
            args: ['viewoveralldetails']
        }], modalContentnow: [{
            type: ViewChild,
            args: ['contentnow']
        }], notStarted: [{
            type: ViewChild,
            args: ['notStarted']
        }], table: [{
            type: ViewChild,
            args: [DatatableComponent]
        }], viewStudentDetails: [{
            type: ViewChild,
            args: ['viewStudentDetails']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MissedWorkReportComponent, { className: "MissedWorkReportComponent" }); })();
//# sourceMappingURL=missed-work-report.component.js.map