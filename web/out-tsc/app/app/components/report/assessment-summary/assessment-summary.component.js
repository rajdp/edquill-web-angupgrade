import { Component, ViewChild } from '@angular/core';
import { parse } from 'flatted';
import { dateOptions } from '../../../shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/common-data.service";
import * as i2 from "@angular/common";
import * as i3 from "../../../shared/service/configuration.service";
import * as i4 from "../../../shared/service/teacher.service";
import * as i5 from "@angular/forms";
import * as i6 from "../../../shared/service/report.service";
import * as i7 from "../../../shared/service/auth.service";
import * as i8 from "ngx-toastr";
import * as i9 from "../../../shared/service/common.service";
import * as i10 from "@ng-bootstrap/ng-bootstrap";
import * as i11 from "../../../shared/service/validation.service";
import * as i12 from "@angular/router";
import * as i13 from "../../../shared/service/newsubject.service";
import * as i14 from "@ng-select/ng-select";
import * as i15 from "@nodro7/angular-mydatepicker";
import * as i16 from "ng-apexcharts";
import * as i17 from "../../auth/graph-component/graph-component.component";
import * as i18 from "../../auth/annotation/annotation.component";
import * as i19 from "../../auth/table/table.component";
import * as i20 from "../../corporateschool/emptyschool/emptyschool.component";
import * as i21 from "../../../shared/pipes/sanitizer/SanitizeHtmlPipe.pipe";
const _c0 = ["viewStudentDetails"];
const _c1 = ["studentCorrection"];
const _c2 = (a0, a1, a2) => ({ "ans-correct": a0, "ans-selected": a1, "ans-wrong": a2 });
const _c3 = (a0, a1) => ({ "wrong-ans": a0, "correct-ans": a1 });
const _c4 = (a0, a1) => ({ "correct-ans": a0, "wrong-ans": a1 });
function AssessmentSummaryComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "label", 11)(2, "span", 12);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " From Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 20)(6, "div", 21)(7, "input", 22, 1);
    i0.ɵɵlistener("dateChanged", function AssessmentSummaryComponent_div_0_div_13_Template_input_dateChanged_7_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onDateChanged1($event, "1")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 23)(10, "button", 24);
    i0.ɵɵlistener("click", function AssessmentSummaryComponent_div_0_div_13_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r3); const dp_r4 = i0.ɵɵreference(8); return i0.ɵɵresetView(dp_r4.toggleCalendar()); });
    i0.ɵɵelement(11, "i", 25);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("options", ctx_r1.myDpOptions);
} }
function AssessmentSummaryComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "label", 11)(2, "span", 12);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " To Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 20)(6, "div", 21)(7, "input", 26, 2);
    i0.ɵɵlistener("dateChanged", function AssessmentSummaryComponent_div_0_div_14_Template_input_dateChanged_7_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onDateChanged1($event, "2")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 23)(10, "button", 24);
    i0.ɵɵlistener("click", function AssessmentSummaryComponent_div_0_div_14_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r5); const dp1_r6 = i0.ɵɵreference(8); return i0.ɵɵresetView(dp1_r6.toggleCalendar()); });
    i0.ɵɵelement(11, "i", 25);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("options", ctx_r1.myDpOptions1);
} }
function AssessmentSummaryComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "button", 30);
    i0.ɵɵlistener("click", function AssessmentSummaryComponent_div_0_div_15_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.assessmentPrint()); });
    i0.ɵɵtext(4, "Print");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r1.assessmentShow == true ? "col-3" : "col-9");
} }
function AssessmentSummaryComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "label", 11)(2, "span", 12);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Assessment List");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 13)(6, "ng-select", 32);
    i0.ɵɵlistener("change", function AssessmentSummaryComponent_div_0_div_16_Template_ng_select_change_6_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.assessmentDetailReport()); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("items", ctx_r1.assessmentDetails);
} }
function AssessmentSummaryComponent_div_0_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "label", 11)(2, "span", 12);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Assignment List");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 13)(6, "ng-select", 33);
    i0.ɵɵlistener("change", function AssessmentSummaryComponent_div_0_div_17_Template_ng_select_change_6_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.assignmentDetailReport()); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("items", ctx_r1.assignmentDetails);
} }
function AssessmentSummaryComponent_div_0_div_18_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53)(1, "app-table", 54);
    i0.ɵɵlistener("clickValue", function AssessmentSummaryComponent_div_0_div_18_div_56_Template_app_table_clickValue_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.viewDetail($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("TableType", "ReportAssessment")("TableArray", ctx_r1.listData);
} }
function AssessmentSummaryComponent_div_0_div_18_div_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 55);
    i0.ɵɵelement(1, "i", 56);
    i0.ɵɵtext(2, " No student performance data available yet. This feature requires full implementation of performance statistics calculation. ");
    i0.ɵɵelementEnd();
} }
function AssessmentSummaryComponent_div_0_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34)(1, "div", 35)(2, "div", 36)(3, "h3");
    i0.ɵɵtext(4, "Assessment Statistics");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 37)(6, "div", 38)(7, "div", 39)(8, "h4", 40);
    i0.ɵɵtext(9, "Average Score");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "h4", 40)(11, "span", 41);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 38)(15, "div", 39)(16, "h4", 40);
    i0.ɵɵtext(17, "Average student Score");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "h4", 40)(19, "span", 41);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(21, "div", 37)(22, "div", 42)(23, "h4", 43);
    i0.ɵɵtext(24, "Students Assigned");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "h4", 41);
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 42)(28, "h4", 43);
    i0.ɵɵtext(29, "Students Graded");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "h4", 41);
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 42)(33, "h4", 43);
    i0.ɵɵtext(34, "Students Absent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "h4", 41);
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(37, "div", 35)(38, "div", 36)(39, "div", 6)(40, "div", 7)(41, "h3");
    i0.ɵɵtext(42, "Students Assessment Performance Bands (%)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "div", 44);
    i0.ɵɵelement(44, "apx-chart", 45);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(45, "div", 46)(46, "div", 36)(47, "div", 6)(48, "div", 35)(49, "h3");
    i0.ɵɵtext(50, "Assessment Statistics");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(51, "div", 47)(52, "button", 48);
    i0.ɵɵlistener("click", function AssessmentSummaryComponent_div_0_div_18_Template_button_click_52_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.downloadExcelData()); });
    i0.ɵɵtext(53, "Download CSV");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(54, "div", 49)(55, "div", 50);
    i0.ɵɵtemplate(56, AssessmentSummaryComponent_div_0_div_18_div_56_Template, 2, 2, "div", 51)(57, AssessmentSummaryComponent_div_0_div_18_div_57_Template, 3, 0, "div", 52);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(ctx_r1.assessmentReportDetails.studentAverage);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" / ", ctx_r1.assessmentReportDetails.totalAverage, "");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.assessmentReportDetails.AverageStudentScore);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.assessmentReportDetails.totalStudentAssigned);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.assessmentReportDetails.totalStudentGraded);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.assessmentReportDetails.totalAbsent);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("series", ctx_r1.chartOptions.series)("chart", ctx_r1.chartOptions.chart)("labels", ctx_r1.chartOptions.labels)("responsive", ctx_r1.chartOptions.responsive);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngIf", ctx_r1.listData && ctx_r1.listData.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.listData || ctx_r1.listData.length === 0);
} }
function AssessmentSummaryComponent_div_0_div_19_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53)(1, "app-table", 54);
    i0.ɵɵlistener("clickValue", function AssessmentSummaryComponent_div_0_div_19_div_56_Template_app_table_clickValue_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.viewDetail($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("TableType", "ReportAssignment")("TableArray", ctx_r1.listData1);
} }
function AssessmentSummaryComponent_div_0_div_19_div_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 55);
    i0.ɵɵelement(1, "i", 56);
    i0.ɵɵtext(2, " No student performance data available yet. This feature requires full implementation of performance statistics calculation. ");
    i0.ɵɵelementEnd();
} }
function AssessmentSummaryComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34)(1, "div", 35)(2, "div", 36)(3, "h3");
    i0.ɵɵtext(4, "Assignment Statistics");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 37)(6, "div", 38)(7, "div", 39)(8, "h4", 40);
    i0.ɵɵtext(9, "Average Score");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "h4", 40)(11, "span", 41);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 38)(15, "div", 39)(16, "h4", 40);
    i0.ɵɵtext(17, "Average student Score");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "h4", 40)(19, "span", 41);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(21, "div", 37)(22, "div", 42)(23, "h4", 43);
    i0.ɵɵtext(24, "Students Assigned");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "h4", 41);
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 42)(28, "h4", 43);
    i0.ɵɵtext(29, "Students Graded");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "h4", 41);
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 42)(33, "h4", 43);
    i0.ɵɵtext(34, "Students Absent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "h4", 41);
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(37, "div", 35)(38, "div", 36)(39, "div", 6)(40, "div", 7)(41, "h3");
    i0.ɵɵtext(42, "Students Assignment Performance Bands (%)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "div", 57);
    i0.ɵɵelement(44, "apx-chart", 45);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(45, "div", 46)(46, "div", 36)(47, "div", 6)(48, "div", 35)(49, "h3");
    i0.ɵɵtext(50, "Assignment Statistics");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(51, "div", 47)(52, "button", 48);
    i0.ɵɵlistener("click", function AssessmentSummaryComponent_div_0_div_19_Template_button_click_52_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.downloadAssignmentExcelData()); });
    i0.ɵɵtext(53, "Download CSV");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(54, "div", 49)(55, "div", 58);
    i0.ɵɵtemplate(56, AssessmentSummaryComponent_div_0_div_19_div_56_Template, 2, 2, "div", 51)(57, AssessmentSummaryComponent_div_0_div_19_div_57_Template, 3, 0, "div", 52);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(ctx_r1.assignmentReportDetails.studentAverage);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" / ", ctx_r1.assignmentReportDetails.totalAverage, "");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.assignmentReportDetails.AverageStudentScore);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.assignmentReportDetails.totalStudentAssigned);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.assignmentReportDetails.totalStudentGraded);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.assignmentReportDetails.totalAbsent);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("series", ctx_r1.chartOptions1.series)("chart", ctx_r1.chartOptions1.chart)("labels", ctx_r1.chartOptions1.labels)("responsive", ctx_r1.chartOptions1.responsive);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngIf", ctx_r1.listData1 && ctx_r1.listData1.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.listData1 || ctx_r1.listData1.length === 0);
} }
function AssessmentSummaryComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 59)(1, "div", 60)(2, "button", 61);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.message);
} }
function AssessmentSummaryComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "form", 9)(5, "div", 6)(6, "div", 10)(7, "label", 11)(8, "span", 12);
    i0.ɵɵtext(9, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " Class List");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 13)(12, "ng-select", 14);
    i0.ɵɵlistener("change", function AssessmentSummaryComponent_div_0_Template_ng_select_change_12_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.assessmentReport(); return i0.ɵɵresetView(ctx_r1.assignmentReport()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(13, AssessmentSummaryComponent_div_0_div_13_Template, 12, 1, "div", 15)(14, AssessmentSummaryComponent_div_0_div_14_Template, 12, 1, "div", 15)(15, AssessmentSummaryComponent_div_0_div_15_Template, 5, 1, "div", 16)(16, AssessmentSummaryComponent_div_0_div_16_Template, 7, 1, "div", 17)(17, AssessmentSummaryComponent_div_0_div_17_Template, 7, 1, "div", 17);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(18, AssessmentSummaryComponent_div_0_div_18_Template, 58, 12, "div", 18)(19, AssessmentSummaryComponent_div_0_div_19_Template, 58, 12, "div", 18)(20, AssessmentSummaryComponent_div_0_div_20_Template, 4, 1, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r1.assessmentForm);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("items", ctx_r1.classDetails);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.assessmentShow);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.assessmentShow);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.assessmentReportShow);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.assessmentShow);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.assessmentShow);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.assessmentReportShow);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.assignmentReportShow);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.assessmentReportShow && !ctx_r1.assignmentReportShow);
} }
function AssessmentSummaryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-emptyschool");
    i0.ɵɵelementEnd();
} }
function AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 89);
    i0.ɵɵelement(1, "input", 90);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", sec_r16.heading);
} }
function AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 107);
    i0.ɵɵtext(1, "Invalid Points");
    i0.ɵɵelementEnd();
} }
function AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_ul_12_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 27)(1, "span")(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "i", 111)(5, "i", 112);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r22 = ctx.$implicit;
    const item_r19 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c2, option_r22 == item_r19.answer, option_r22 == item_r19.student_answer, option_r22 != item_r19.answer && option_r22 == item_r19.student_answer));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(option_r22);
} }
function AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_ul_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 108);
    i0.ɵɵelement(1, "p", 109);
    i0.ɵɵtemplate(2, AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_ul_12_li_2_Template, 6, 6, "li", 110);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r19 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", item_r19.question == "")("innerHTML", item_r19.question, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r19.array);
} }
function AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_ul_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 108);
    i0.ɵɵelement(1, "p", 109);
    i0.ɵɵelementStart(2, "li", 27)(3, "span");
    i0.ɵɵelement(4, "input", 113);
    i0.ɵɵtext(5, " True ");
    i0.ɵɵelement(6, "i", 111)(7, "i", 112);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "li", 27)(9, "span");
    i0.ɵɵelement(10, "input", 114);
    i0.ɵɵtext(11, " False ");
    i0.ɵɵelement(12, "i", 111)(13, "i", 112);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r19 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", item_r19.question == "")("innerHTML", item_r19.question, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(6, _c2, item_r19.answer == "true", item_r19.student_answer == "true", item_r19.answer == "false" && item_r19.student_answer == "true"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", item_r19.student_answer == "true");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(10, _c2, item_r19.answer == "false", item_r19.student_answer == "false", item_r19.answer == "true" && item_r19.student_answer == "false"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", item_r19.student_answer == "false");
} }
function AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_ul_14_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 27)(1, "span", 115);
    i0.ɵɵtext(2);
    i0.ɵɵelement(3, "i", 111)(4, "i", 112);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r23 = ctx.$implicit;
    const item_r19 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c2, option_r23 == item_r19.answer, option_r23 == item_r19.student_answer, option_r23 != item_r19.answer && option_r23 == item_r19.student_answer));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", option_r23, " ");
} }
function AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_ul_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 108);
    i0.ɵɵelement(1, "p", 109);
    i0.ɵɵtemplate(2, AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_ul_14_li_2_Template, 5, 6, "li", 110);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r19 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", item_r19.question == "")("innerHTML", item_r19.question, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r19.mob_options);
} }
function AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 116);
    i0.ɵɵelement(1, "p", 109)(2, "input", 117);
    i0.ɵɵelementStart(3, "label", 118);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r19 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", item_r19.question == "")("innerHTML", item_r19.question, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(5, _c3, item_r19.match_case ? item_r19.answer != item_r19.student_answer : item_r19.answer.toLowerCase() != item_r19.student_answer.toLowerCase(), item_r19.match_case ? item_r19.answer == item_r19.student_answer : item_r19.answer.toLowerCase() == item_r19.student_answer.toLowerCase()))("value", item_r19.student_answer);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Correct answer : ", item_r19.answer, "");
} }
function AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 119)(1, "textarea", 120);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r19 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r19.student_answer);
} }
function AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 119)(1, "div", 121)(2, "label");
    i0.ɵɵtext(3, "Student Answer: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "h4", 122);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 121)(7, "label");
    i0.ɵɵtext(8, "Correct Answer: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "h4", 122);
    i0.ɵɵpipe(10, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r19 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, item_r19.student_answer), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(10, 4, item_r19.answer), i0.ɵɵsanitizeHtml);
} }
function AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_div_18_app_graph_component_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-graph-component", 125);
} if (rf & 2) {
    const item_r19 = i0.ɵɵnextContext(2).$implicit;
    const i_r21 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("editMode", false)("editPatchValue", ctx_r1.parseVal(item_r19.student_answer[0].correctAnswer))("graphId", i_r21 + "Editgraph" + item_r19.sub_question_no + "id")("questionType", "40");
} }
function AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_div_18_app_graph_component_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-graph-component", 125);
} if (rf & 2) {
    const item_r19 = i0.ɵɵnextContext(2).$implicit;
    const i_r21 = i0.ɵɵnextContext().index;
    i0.ɵɵproperty("editMode", false)("editPatchValue", false)("graphId", i_r21 + "Editgraph" + item_r19.sub_question_no + "idoo")("questionType", "40");
} }
function AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 123)(1, "div", 124)(2, "label");
    i0.ɵɵtext(3, "Correct Answer: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "app-graph-component", 125);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 124)(6, "label");
    i0.ɵɵtext(7, "Student Answer: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_div_18_app_graph_component_8_Template, 1, 4, "app-graph-component", 126)(9, AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_div_18_app_graph_component_9_Template, 1, 4, "app-graph-component", 126);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r19 = i0.ɵɵnextContext().$implicit;
    const i_r21 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("editMode", false)("editPatchValue", ctx_r1.parseVal(item_r19.answer))("graphId", i_r21 + "correctgraph" + item_r19.sub_question_no + "id")("questionType", "40");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", item_r19.student_answer != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r19.student_answer == "");
} }
function AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_div_19_div_1_textarea_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "textarea", 131);
    i0.ɵɵtext(1, "\n                                                            ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r24 = i0.ɵɵnextContext().index;
    const item_r19 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c4, item_r19.match_case == "1" ? item_r19.answer[k_r24].value.trim() == item_r19.student_answer[k_r24].trim() : item_r19.answer[k_r24].value.trim().toLowerCase().split(" ").join("") == item_r19.student_answer[k_r24].trim().toLowerCase().split(" ").join(""), item_r19.match_case ? item_r19.answer[k_r24].value.trim() != item_r19.student_answer[k_r24].trim() : item_r19.answer[k_r24].value.trim().toLowerCase().split(" ").join("") != item_r19.student_answer[k_r24].trim().toLowerCase().split(" ").join("")))("value", item_r19.student_answer[k_r24]);
} }
function AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_div_19_div_1_textarea_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "textarea", 132);
} }
function AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_div_19_div_1_textarea_1_Template, 2, 5, "textarea", 128)(2, AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_div_19_div_1_textarea_2_Template, 1, 0, "textarea", 129);
    i0.ɵɵelementStart(3, "label", 130);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const k_r24 = ctx.index;
    const item_r19 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r19.student_answer != "" && item_r19.student_answer != null);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r19.student_answer == "" || item_r19.student_answer == null);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Correct Answer : ", item_r19.answer[k_r24].value, "");
} }
function AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 119);
    i0.ɵɵtemplate(1, AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_div_19_div_1_Template, 5, 3, "div", 127);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r19 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r19.answer);
} }
function AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 91)(1, "div", 92)(2, "div", 93)(3, "button", 94);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 95)(6, "input", 96);
    i0.ɵɵlistener("input", function AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_Template_input_input_6_listener($event) { const ctx_r17 = i0.ɵɵrestoreView(_r17); const item_r19 = ctx_r17.$implicit; const j_r20 = ctx_r17.index; const i_r21 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.getPoints($event, i_r21, j_r20); return i0.ɵɵresetView(ctx_r1.markValidation($event, item_r19.points, i_r21, j_r20)); })("keypress", function AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_Template_input_keypress_6_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 97);
    i0.ɵɵlistener("keypress", function AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_Template_input_keypress_7_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "br");
    i0.ɵɵtemplate(9, AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_span_9_Template, 2, 0, "span", 98);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 6)(11, "div", 79);
    i0.ɵɵtemplate(12, AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_ul_12_Template, 3, 3, "ul", 99)(13, AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_ul_13_Template, 14, 14, "ul", 99)(14, AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_ul_14_Template, 3, 3, "ul", 99)(15, AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_div_15_Template, 5, 8, "div", 100)(16, AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_div_16_Template, 3, 1, "div", 101)(17, AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_div_17_Template, 11, 6, "div", 101)(18, AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_div_18_Template, 10, 6, "div", 102)(19, AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_div_19_Template, 2, 1, "div", 101);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 103)(21, "div", 104)(22, "label");
    i0.ɵɵtext(23, "Student feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(24, "textarea", 105);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 104)(26, "label");
    i0.ɵɵtext(27, "Feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "textarea", 106);
    i0.ɵɵlistener("input", function AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_Template_textarea_input_28_listener($event) { const j_r20 = i0.ɵɵrestoreView(_r17).index; const i_r21 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.getFeedback($event, i_r21, j_r20)); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r19.sub_question_no);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", item_r19.given_points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", item_r19.points);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r19.maxValErr);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r19.question_type_id == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r19.question_type_id == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r19.question_type_id == 9);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r19.question_type_id == 10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r19.question_type_id == 20);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r19.question_type_id == 30);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r19.question_type_id == 40);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r19.question_type_id == 54);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", item_r19.student_feedback == null ? "" : item_r19.student_feedback);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", item_r19.feedback);
} }
function AssessmentSummaryComponent_ng_template_2_div_21_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 86);
    i0.ɵɵtemplate(1, AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_1_Template, 2, 1, "div", 87)(2, AssessmentSummaryComponent_ng_template_2_div_21_div_8_div_2_Template, 29, 14, "div", 88);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r16 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r16.heading != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", sec_r16.section);
} }
function AssessmentSummaryComponent_ng_template_2_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 73)(1, "div", 6)(2, "div", 64)(3, "h4", 65);
    i0.ɵɵtext(4, "Correction Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 66)(6, "i", 67);
    i0.ɵɵlistener("click", function AssessmentSummaryComponent_ng_template_2_div_21_Template_i_click_6_listener() { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.back()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 74);
    i0.ɵɵtemplate(8, AssessmentSummaryComponent_ng_template_2_div_21_div_8_Template, 3, 2, "div", 75);
    i0.ɵɵelementStart(9, "div", 76)(10, "div", 77)(11, "div", 78)(12, "div", 79)(13, "label");
    i0.ɵɵtext(14, "Obtained Points");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 80);
    i0.ɵɵtwoWayListener("ngModelChange", function AssessmentSummaryComponent_ng_template_2_div_21_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.studentPoints, $event) || (ctx_r1.studentPoints = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 81)(17, "label");
    i0.ɵɵtext(18, "Total Points");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "input", 80);
    i0.ɵɵtwoWayListener("ngModelChange", function AssessmentSummaryComponent_ng_template_2_div_21_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.totalPoints, $event) || (ctx_r1.totalPoints = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "div", 82)(21, "label");
    i0.ɵɵtext(22, "Feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "textarea", 83);
    i0.ɵɵtwoWayListener("ngModelChange", function AssessmentSummaryComponent_ng_template_2_div_21_Template_textarea_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.totalFeedBack, $event) || (ctx_r1.totalFeedBack = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(24, "div", 84);
    i0.ɵɵelement(25, "app-annotation", 85);
    i0.ɵɵelementStart(26, "div", 76)(27, "div", 77)(28, "div", 78)(29, "div", 79)(30, "label");
    i0.ɵɵtext(31, "Obtained Points");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "input", 80);
    i0.ɵɵtwoWayListener("ngModelChange", function AssessmentSummaryComponent_ng_template_2_div_21_Template_input_ngModelChange_32_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.studentPoints, $event) || (ctx_r1.studentPoints = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "div", 81)(34, "label");
    i0.ɵɵtext(35, "Total Points");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "input", 80);
    i0.ɵɵtwoWayListener("ngModelChange", function AssessmentSummaryComponent_ng_template_2_div_21_Template_input_ngModelChange_36_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.totalPoints, $event) || (ctx_r1.totalPoints = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(37, "div", 82)(38, "label");
    i0.ɵɵtext(39, "Feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "textarea", 83);
    i0.ɵɵtwoWayListener("ngModelChange", function AssessmentSummaryComponent_ng_template_2_div_21_Template_textarea_ngModelChange_40_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.totalFeedBack, $event) || (ctx_r1.totalFeedBack = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("hidden", ctx_r1.studentAnswer.answers.length == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.totalAns);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.studentPoints);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.totalPoints);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.totalFeedBack);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.studentAnswer.answers.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("getAnnotate", ctx_r1.areaInfo)("getDragQues", ctx_r1.dragQuestionsList)("pdfPath", ctx_r1.pdfTemplate)("toolHide", true)("userType", "teacher");
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.studentPoints);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.totalPoints);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.totalFeedBack);
} }
function AssessmentSummaryComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 62)(1, "div", 63)(2, "div", 6)(3, "div", 64)(4, "h4", 65);
    i0.ɵɵtext(5, "Itemized Reports");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 66)(7, "i", 67);
    i0.ɵɵlistener("click", function AssessmentSummaryComponent_ng_template_2_Template_i_click_7_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 68)(9, "div", 69);
    i0.ɵɵelement(10, "apx-chart", 70);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 35)(12, "h3");
    i0.ɵɵtext(13, "Student Statistics");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 47)(15, "button", 48);
    i0.ɵɵlistener("click", function AssessmentSummaryComponent_ng_template_2_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.downloadStudentExcelData()); });
    i0.ɵɵtext(16, "Download CSV");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 49)(18, "div", 71)(19, "div", 53)(20, "app-table", 54);
    i0.ɵɵlistener("clickValue", function AssessmentSummaryComponent_ng_template_2_Template_app_table_clickValue_20_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.studentCorrectionDetail($event)); });
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵtemplate(21, AssessmentSummaryComponent_ng_template_2_div_21_Template, 41, 14, "div", 72);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.correctionData == true);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("series", ctx_r1.chartOptions2.series)("chart", ctx_r1.chartOptions2.chart)("dataLabels", ctx_r1.chartOptions2.dataLabels)("plotOptions", ctx_r1.chartOptions2.plotOptions)("responsive", ctx_r1.chartOptions2.responsive)("xaxis", ctx_r1.chartOptions2.xaxis)("legend", ctx_r1.chartOptions2.legend)("fill", ctx_r1.chartOptions2.fill);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("TableType", "StudentReport")("TableArray", ctx_r1.listData2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.correctionData == true);
} }
export class AssessmentSummaryComponent {
    constructor(commondata, firstcaps, confi, teacher, formBuilder, report, auth, toastr, common, modalService, datePipe, validationService, router, newSubject) {
        this.commondata = commondata;
        this.firstcaps = firstcaps;
        this.confi = confi;
        this.teacher = teacher;
        this.formBuilder = formBuilder;
        this.report = report;
        this.auth = auth;
        this.toastr = toastr;
        this.common = common;
        this.modalService = modalService;
        this.datePipe = datePipe;
        this.validationService = validationService;
        this.router = router;
        this.newSubject = newSubject;
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableSince: { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() + 1 }
        };
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableSince: { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() + 1 },
        };
        this.assessmentShow = false;
        this.assessmentReportShow = false;
        this.assignmentReportShow = false;
        this.message = 'Select a Class List.';
        this.correctionData = false;
        this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };
        this.areaInfo = [];
        this.zoom = 1.0;
        this.originalSize = false;
        this.dragQuestionsList = [];
        this.from1Date = '';
        this.to1Date = '';
        this.dateFormat = localStorage.getItem('currentFormat');
        this.webhost = this.confi.getimgUrl();
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        this.assessmentForm = this.formBuilder.group({
            class: null,
            assessment: null,
            assignment: null,
            fromDate: null,
            toDate: null
        });
        if (this.schoolStatus.length != 0) {
            this.newSubject.schoolChange.subscribe(params => {
                if (params != '') {
                    if (this.router.url.includes('assessment-summary')) {
                        this.init(params);
                        this.assessmentShow = false;
                        this.assessmentReportShow = false;
                        this.assignmentReportShow = false;
                        this.assessmentForm.reset();
                    }
                }
                else {
                    this.init(this.auth.getSessionData('school_id'));
                }
            });
        }
        if (this.auth.getRoleId() == '2') {
            this.teacherID = '0';
        }
        else {
            this.teacherID = this.auth.getUserId();
        }
    }
    init(id) {
        this.schoolId = id;
        console.log('🏫 Assessment Summary - Initialized with school_id:', this.schoolId);
        // Set default date range: 3 months ago to today
        const today = new Date();
        const threeMonthsAgo = new Date();
        threeMonthsAgo.setMonth(today.getMonth() - 3);
        console.log('📅 DEBUG - Creating date models:', {
            today: today,
            threeMonthsAgo: threeMonthsAgo,
            todayISO: today.toISOString(),
            threeMonthsAgoISO: threeMonthsAgo.toISOString()
        });
        // Set default "From Date" (3 months ago)
        const fromDateModel = {
            isRange: false,
            singleDate: { jsDate: threeMonthsAgo },
            dateRange: null
        };
        console.log('📅 DEBUG - fromDateModel created:', fromDateModel);
        this.assessmentForm.controls.fromDate.patchValue(fromDateModel);
        this.from1Date = this.datePipe.transform(threeMonthsAgo, 'yyyy-MM-dd');
        console.log('📅 DEBUG - After setting fromDate:', {
            formValue: this.assessmentForm.controls.fromDate.value,
            from1Date: this.from1Date
        });
        // Set default "To Date" (today)
        const toDateModel = {
            isRange: false,
            singleDate: { jsDate: today },
            dateRange: null
        };
        console.log('📅 DEBUG - toDateModel created:', toDateModel);
        this.assessmentForm.controls.toDate.patchValue(toDateModel);
        this.to1Date = this.datePipe.transform(today, 'yyyy-MM-dd');
        console.log('📅 DEBUG - After setting toDate:', {
            formValue: this.assessmentForm.controls.toDate.value,
            to1Date: this.to1Date
        });
        console.log('📅 SUMMARY - Default dates set:', {
            from1Date: this.from1Date,
            to1Date: this.to1Date,
            formFromDate: this.assessmentForm.controls.fromDate.value,
            formToDate: this.assessmentForm.controls.toDate.value,
            entireFormValue: this.assessmentForm.value
        });
        this.classReport();
    }
    ngOnInit() {
        console.log('🔄 ngOnInit - Starting initialization');
        this.auth.setSessionData('resourceAccess', false);
        this.auth.removeSessionData('backOption');
        this.allowSelect = false;
        this.newSubject.allowSchoolChange(this.allowSelect);
        console.log('📅 DEBUG - Form state before dateCountDetails:', this.assessmentForm.value);
        this.dateCountDetails();
        console.log('📅 DEBUG - Form state after dateCountDetails:', this.assessmentForm.value);
        // Initialize with current school_id
        const currentSchoolId = this.auth.getSessionData('school_id');
        console.log('🏫 Assessment Summary - ngOnInit with school_id:', currentSchoolId);
        if (currentSchoolId) {
            this.init(currentSchoolId);
        }
        console.log('📅 DEBUG - Form state after init():', this.assessmentForm.value);
    }
    close() {
        this.modalRef.close();
    }
    back() {
        this.correctionData = false;
    }
    numberValidate(event) {
        this.validationService.numberValidate(event);
    }
    markValidation(event, high, i, j) {
        const val = parseFloat(event.target.value);
        const pt = parseFloat(high);
        this.totalAns[i].section[j].maxValErr = val > pt;
    }
    getFeedback(event, i, j) {
        this.totalAns[i].section[j].feedback = event.target.value;
    }
    getPoints(event, index, id) {
        if (event.target.value != '') {
            this.totalAns[index].section[id].givenpoints = event.target.value;
            let count = 0;
            for (let i = 0; i < this.totalAns.length; i++) {
                for (let j = 0; j < this.totalAns[i].section.length; j++) {
                    count += 1;
                    if (index == i && id == j) {
                        this.studentPointsArray[count - 1].point = parseFloat(event.target.value);
                    }
                }
            }
            this.studentPoints = this.studentPointsArray.reduce((acc, value) => acc += value.point, 0);
        }
    }
    parseVal(val) {
        if (val != '' && val != null) {
            return parse(val);
        }
        else {
            return false;
        }
    }
    classReport() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolId,
            teacher_id: this.teacherID
        };
        console.log('🔍 Assessment Summary - Calling classReport with data:', data);
        this.report.classReport(data).subscribe((successData) => {
            this.classReportSuccess(successData);
        }, (error) => {
            console.error(error, 'classReport');
        });
    }
    classReportSuccess(successData) {
        console.log('📦 Assessment Summary - classReport response:', successData);
        if (successData.IsSuccess) {
            this.classDetails = successData.ResponseObject;
            console.log('📋 Assessment Summary - Class list length:', this.classDetails.length);
            if (this.classDetails.length != 0) {
                console.log('✅ Assessment Summary - Setting first class:', this.classDetails[0].class_id);
                this.assessmentForm.controls.class.patchValue(this.classDetails[0].class_id);
                this.assessmentReport();
                this.assignmentReport();
            }
            else {
                console.warn('⚠️ Assessment Summary - No classes found! Check school_id:', this.schoolId);
                this.message = 'No classes found for your school. Please check your profile settings.';
            }
        }
        else {
            console.error('❌ Assessment Summary - classReport failed:', successData.ErrorObject);
            this.message = 'Failed to load classes: ' + successData.ErrorObject;
        }
    }
    onDateChanged1(event, type) {
        if (type == '1') {
            // Validate date before processing
            if (!event?.singleDate?.formatted) {
                console.warn('⚠️ Invalid date event:', event);
                return;
            }
            const inputDate = new Date(event.singleDate.formatted);
            if (isNaN(inputDate.getTime())) {
                console.warn('⚠️ Invalid date value:', event.singleDate.formatted);
                return;
            }
            const maxDate = new Date().toISOString();
            const min = new Date(event.singleDate.formatted);
            const min1 = new Date(event.singleDate.formatted);
            const validTo = new Date(min.setDate(min.getDate() + (this.dateCount - 1))).toISOString();
            if (maxDate >= validTo) {
                const minToDate = new Date(event.singleDate.formatted);
                const maxToDate1 = new Date(min1.setDate(min1.getDate() + (this.dateCount - 1)));
                this.myDpOptions1 = {
                    dateRange: false,
                    dateFormat: dateOptions.pickerFormat,
                    firstDayOfWeek: 'su',
                    disableUntil: {
                        year: new Date(minToDate).getFullYear(),
                        month: new Date(minToDate).getMonth(),
                        day: new Date(minToDate).getDate()
                    },
                    disableSince: {
                        year: new Date(maxToDate1).getFullYear(),
                        month: new Date(maxToDate1).getMonth() + 1,
                        day: new Date(maxToDate1).getDate()
                    },
                };
                this.from1Date = event.singleDate.formatted && !isNaN(new Date(event.singleDate.formatted).getTime())
                    ? this.datePipe.transform(event.singleDate.formatted, 'yyyy-MM-dd')
                    : '';
                const dObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(maxToDate1) },
                    dateRange: null
                };
                this.assessmentForm.controls.toDate.patchValue(dObject);
                const toDateValue = this.assessmentForm.controls.toDate.value?.singleDate?.jsDate;
                this.to1Date = toDateValue && !isNaN(new Date(toDateValue).getTime())
                    ? this.datePipe.transform(toDateValue, 'yyyy-MM-dd')
                    : '';
                this.assessmentReport();
                this.assignmentReport();
            }
            else {
                this.myDpOptions1 = {
                    dateRange: false,
                    dateFormat: dateOptions.pickerFormat,
                    firstDayOfWeek: 'su',
                    disableUntil: {
                        year: event.singleDate.date.year,
                        month: event.singleDate.date.month,
                        day: event.singleDate.date.day - 1
                    },
                    disableSince: {
                        year: new Date().getFullYear(),
                        month: new Date().getMonth() + 1,
                        day: new Date().getDate() + 1
                    },
                };
                this.from1Date = event.singleDate.formatted && !isNaN(new Date(event.singleDate.formatted).getTime())
                    ? this.datePipe.transform(event.singleDate.formatted, 'yyyy-MM-dd')
                    : '';
                const cObject = { isRange: false, singleDate: { jsDate: new Date() }, dateRange: null };
                this.assessmentForm.controls.toDate.patchValue(cObject);
                const toDateValue = this.assessmentForm.controls.toDate.value?.singleDate?.jsDate;
                this.to1Date = toDateValue && !isNaN(new Date(toDateValue).getTime())
                    ? this.datePipe.transform(toDateValue, 'yyyy-MM-dd')
                    : '';
                this.assessmentReport();
                this.assignmentReport();
            }
        }
        else {
            // Validate date before processing
            if (!event?.singleDate?.formatted) {
                this.to1Date = '';
            }
            else {
                const inputDate = new Date(event.singleDate.formatted);
                if (isNaN(inputDate.getTime())) {
                    console.warn('⚠️ Invalid "to" date value:', event.singleDate.formatted);
                    this.to1Date = '';
                }
                else {
                    this.to1Date = this.datePipe.transform(event.singleDate.formatted, 'yyyy-MM-dd');
                }
            }
            this.assessmentReport();
            this.assignmentReport();
        }
    }
    assessmentReport() {
        const classValue = this.assessmentForm.get('class').value;
        console.log('🎯 Assessment Summary - assessmentReport called with class value:', classValue);
        console.log('📅 DEBUG - Date values before API call:', {
            from1Date: this.from1Date,
            to1Date: this.to1Date,
            from1DateType: typeof this.from1Date,
            to1DateType: typeof this.to1Date,
            formFromDate: this.assessmentForm.controls.fromDate.value,
            formToDate: this.assessmentForm.controls.toDate.value
        });
        if (classValue != null) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.schoolId,
                class_id: classValue,
                from_date: this.from1Date == '' ? '' : this.datePipe.transform(this.from1Date, 'yyyy-MM-dd'),
                to_date: this.to1Date == '' ? '' : this.datePipe.transform(this.to1Date, 'yyyy-MM-dd')
            };
            console.log('📤 Assessment Summary - Calling assessmentReport API with:', data);
            console.log('📅 DEBUG - Final dates being sent:', {
                from_date: data.from_date,
                to_date: data.to_date
            });
            this.report.assessmentReport(data).subscribe((successData) => {
                console.log('📥 Assessment Summary - assessmentReport response:', successData);
                this.assessmentReportSuccess(successData);
            }, (error) => {
                console.error('❌ Assessment Summary - assessmentReport error:', error);
            });
        }
        else {
            console.warn('⚠️ Assessment Summary - Class value is null!');
            this.message = 'Class should not be empty';
            this.assessmentShow = false;
            this.assessmentReportShow = false;
        }
    }
    assessmentReportSuccess(successData) {
        console.log('✅ Assessment Summary - assessmentReportSuccess:', successData);
        if (successData.IsSuccess) {
            this.assessmentDetails = successData.ResponseObject;
            console.log('📊 Assessment Summary - Found', this.assessmentDetails.length, 'assessments');
            this.assessmentValue = this.assessmentDetails.map(item => item.content_id);
            this.assessmentShow = true;
            // Log current form values to verify dates are set
            console.log('📅 Date values when assessmentShow becomes true:', {
                fromDate: this.assessmentForm.controls.fromDate.value,
                toDate: this.assessmentForm.controls.toDate.value,
                from1Date: this.from1Date,
                to1Date: this.to1Date
            });
            this.assessmentDetailReport();
        }
        else {
            console.error('❌ Assessment Summary - assessmentReport failed');
            this.message = 'Class should not be empty';
            this.assessmentShow = false;
            this.assessmentReportShow = false;
        }
    }
    assessmentDetailReport() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolId,
            class_id: this.assessmentForm.get('class').value,
            content_id: ((this.assessmentForm.get('assessment').value && this.assessmentForm.get('assessment').value.length > 0) ? this.assessmentForm.get('assessment').value : this.assessmentValue)
        };
        this.report.assessmentDetailReport(data).subscribe((successData) => {
            this.assessmentDetailReportSuccess(successData);
        }, (error) => {
            console.error(error, 'assessmentDetailReport');
        });
    }
    assessmentDetailReportSuccess(successData) {
        console.log('📊 Assessment Detail Report Success:', successData);
        if (successData.IsSuccess) {
            this.assessmentReportDetails = successData.ResponseObject;
            console.log('📊 Assessment Detail - ResponseObject:', this.assessmentReportDetails);
            this.listData = this.assessmentReportDetails.contentList || [];
            console.log('📊 Assessment Detail - contentList length:', this.listData.length);
            if (this.listData.length > 0) {
                this.listData.forEach((item) => {
                    if (item.assessment_date != '00-00-0000' && item.assessment_date && !isNaN(new Date(item.assessment_date).getTime())) {
                        item.assessment_date = this.datePipe.transform(item.assessment_date, dateOptions.dateFormat);
                    }
                    else {
                        item.assessment_date = '';
                    }
                });
            }
            // Only create chart if we have chart data
            if (this.assessmentReportDetails.chartValues && this.assessmentReportDetails.chartValues[0]) {
                this.chartOptions = {
                    series: [this.assessmentReportDetails.chartValues[0].Master, this.assessmentReportDetails.chartValues[0].Excellent, this.assessmentReportDetails.chartValues[0].Proficient, this.assessmentReportDetails.chartValues[0].Average, this.assessmentReportDetails.chartValues[0].belowAverage],
                    chart: {
                        width: 480,
                        type: 'pie'
                    },
                    labels: ['Master(90% and above)', 'Excellent(80% - 89.99%)', 'Proficient(70% - 79.99%)', 'Average(50% - 69.99%)', 'Below Average(less than 50%)'],
                    responsive: [
                        {
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: 400
                                },
                                legend: {
                                    position: 'bottom'
                                }
                            }
                        }
                    ]
                };
            }
            console.log('✅ Setting assessmentReportShow = true');
            this.assessmentReportShow = true;
        }
        else {
            console.warn('⚠️ assessmentDetailReport failed, hiding section');
            this.assessmentReportShow = false;
            this.message = 'No Records found';
        }
    }
    assignmentReport() {
        const classValue = this.assessmentForm.get('class').value;
        console.log('🎯 Assessment Summary - assignmentReport called with class value:', classValue);
        console.log('📅 DEBUG - Date values before assignment API call:', {
            from1Date: this.from1Date,
            to1Date: this.to1Date,
            formFromDate: this.assessmentForm.controls.fromDate.value,
            formToDate: this.assessmentForm.controls.toDate.value
        });
        if (classValue != null) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.schoolId,
                class_id: classValue,
                from_date: this.from1Date == '' ? '' : this.datePipe.transform(this.from1Date, 'yyyy-MM-dd'),
                to_date: this.to1Date == '' ? '' : this.datePipe.transform(this.to1Date, 'yyyy-MM-dd')
            };
            console.log('📤 Assessment Summary - Calling assignmentReport API with:', data);
            console.log('📅 DEBUG - Final assignment dates being sent:', {
                from_date: data.from_date,
                to_date: data.to_date
            });
            this.report.assignmentReport(data).subscribe((successData) => {
                console.log('📥 Assessment Summary - assignmentReport response:', successData);
                this.assignmentReportSuccess(successData);
            }, (error) => {
                console.error('❌ Assessment Summary - assignmentReport error:', error);
            });
        }
        else {
            console.warn('⚠️ Assessment Summary - Class value is null for assignment!');
            this.message = 'Class should not be empty';
            this.assessmentShow = false;
            this.assignmentReportShow = false;
        }
    }
    assignmentReportSuccess(successData) {
        console.log('✅ Assessment Summary - assignmentReportSuccess:', successData);
        if (successData.IsSuccess) {
            this.assignmentDetails = successData.ResponseObject;
            console.log('📊 Assessment Summary - Found', this.assignmentDetails.length, 'assignments');
            this.assignmentValue = this.assignmentDetails.map(item => item.content_id);
            this.assessmentShow = true;
            this.assignmentDetailReport();
        }
        else {
            console.error('❌ Assignment Summary - assignmentReport failed');
            this.message = 'Class should not be empty';
            this.assessmentShow = false;
            this.assignmentReportShow = false;
        }
    }
    assignmentDetailReport() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolId,
            class_id: this.assessmentForm.get('class').value,
            content_id: ((this.assessmentForm.get('assignment').value && this.assessmentForm.get('assignment').value.length > 0) ? this.assessmentForm.get('assignment').value : this.assignmentValue)
        };
        console.log('📤 Calling assignmentDetailReport with:', data);
        console.log('📊 Assignment value array:', this.assignmentValue);
        this.report.assignmentDetailReport(data).subscribe((successData) => {
            console.log('📥 assignmentDetailReport response:', successData);
            this.assignmentDetailReportSuccess(successData);
        }, (error) => {
            console.error(error, 'error_assignmentDetails');
        });
    }
    assignmentDetailReportSuccess(successData) {
        console.log('📊 Assignment Detail Report Success:', successData);
        if (successData.IsSuccess) {
            this.assignmentReportDetails = successData.ResponseObject;
            console.log('📊 Assignment Detail - ResponseObject:', this.assignmentReportDetails);
            this.listData1 = this.assignmentReportDetails.contentList || [];
            console.log('📊 Assignment Detail - contentList length:', this.listData1.length);
            if (this.listData1.length > 0) {
                this.listData1.forEach((item) => {
                    if (item.assignment_date != '00-00-0000' && item.assignment_date && !isNaN(new Date(item.assignment_date).getTime())) {
                        item.assignment_date = this.datePipe.transform(item.assignment_date, dateOptions.dateFormat);
                    }
                    else {
                        item.assignment_date = '';
                    }
                });
            }
            // Only create chart if we have chart data
            if (this.assignmentReportDetails.chartValues && this.assignmentReportDetails.chartValues[0]) {
                this.chartOptions1 = {
                    series: [this.assignmentReportDetails.chartValues[0].Master, this.assignmentReportDetails.chartValues[0].Excellent, this.assignmentReportDetails.chartValues[0].Proficient, this.assignmentReportDetails.chartValues[0].Average, this.assignmentReportDetails.chartValues[0].belowAverage],
                    chart: {
                        width: 480,
                        type: 'pie'
                    },
                    labels: ['Master(90% and above)', 'Excellent(80% - 89.99%)', 'Proficient(70% - 79.99%)', 'Average(50% - 69.99%)', 'Below Average(less than 50%)'],
                    responsive: [
                        {
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: 400
                                },
                                legend: {
                                    position: 'bottom'
                                }
                            }
                        }
                    ]
                };
            }
            console.log('✅ Setting assignmentReportShow = true');
            this.assignmentReportShow = true;
        }
        else {
            console.warn('⚠️ assignmentDetailReport failed, hiding section');
            this.assignmentReportShow = false;
            this.message = 'No Records found';
        }
    }
    studentCorrectionDetail(event) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolId,
            content_id: event.emitData.content_id,
            content_format: event.emitData.content_format,
            class_id: event.emitData.class_id,
            student_id: event.emitData.student_id,
            student_content_id: event.emitData.student_content_id
        };
        this.teacher.studentAnswerList(data).subscribe((successData) => {
            this.answerListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_StudentAnswerList');
        });
    }
    answerListSuccess(successData) {
        if (successData.IsSuccess) {
            this.studentAnswer = successData.ResponseObject;
            this.totalAns = [];
            this.totalPoints = '';
            this.totalPointsArray = [];
            this.studentPoints = '';
            this.totalFeedBack = '';
            this.studentPointsArray = [];
            if (this.studentAnswer.status == '5' || this.studentAnswer.status == '3') {
                if (this.studentAnswer.answers.length != 0) {
                    for (let i = 0; i < this.studentAnswer.answers.length; i++) {
                        this.totalAns[i] = { heading: this.studentAnswer.answers[i].heading, section: [] };
                        for (let x = 0; x < this.studentAnswer.answers[i].section.length; x++) {
                            for (let j = 0; j < this.studentAnswer.answers[i].section[x].sub_questions.length; j++) {
                                const val = this.studentAnswer.answers[i].section[x].sub_questions[j].match_case === '1';
                                this.studentAnswer.answers[i].section[x].sub_questions[j].match_case = val;
                                if (this.studentAnswer.answers[i].section[x].sub_questions[j].auto_grade == '1') {
                                    const ans = this.studentAnswer.answers[i].section[x].sub_questions[j].answer;
                                    const student_ans = this.studentAnswer.answers[i].section[x].sub_questions[j].student_answer;
                                    if (this.studentAnswer.answers[i].section[x].sub_questions[j].question_type_id != '54') {
                                        if (val == false) {
                                            if (ans.toLowerCase() == student_ans.toLowerCase()) {
                                                this.studentAnswer.answers[i].section[x].sub_questions[j].given_points = this.studentAnswer.answers[i].section[x].sub_questions[j].points;
                                            }
                                        }
                                        if (ans == student_ans) {
                                            this.studentAnswer.answers[i].section[x].sub_questions[j].given_points = this.studentAnswer.answers[i].section[x].sub_questions[j].points;
                                        }
                                    }
                                    else {
                                        let allCorrect = true;
                                        for (let y = 0; y < ans.length; y++) {
                                            if (this.matchcase(ans[y].value, val) != this.matchcase(student_ans[y], val)) {
                                                allCorrect = false;
                                            }
                                        }
                                        if (allCorrect) {
                                            this.studentAnswer.answers[i].section[x].sub_questions[j].given_points = this.studentAnswer.answers[i].section[x].sub_questions[j].points;
                                            this.studentAnswer.answers[i].section[x].sub_questions[j].correction_status = '1';
                                        }
                                    }
                                }
                                this.totalPointsArray.push({ point: parseFloat(this.studentAnswer.answers[i].section[x].sub_questions[j].points) });
                                this.studentPointsArray.push({ point: parseFloat(this.studentAnswer.answers[i].section[x].sub_questions[j].given_points) });
                                this.totalAns[i].section.push(this.studentAnswer.answers[i].section[x].sub_questions[j]);
                            }
                        }
                        this.totalAns[i].section.forEach((item) => {
                            item.maxValErr = false;
                        });
                        this.totalFeedBack = this.studentAnswer.feedback;
                        this.totalPoints = this.totalPointsArray.reduce((acc, value) => acc += value.point, 0);
                        this.studentPoints = this.studentPointsArray.reduce((acc, value) => acc += value.point, 0);
                    }
                }
                else {
                    this.dragQuestionsList = [...this.studentAnswer.question_annotation];
                    this.areaInfo = [...this.studentAnswer.annotation, ...this.studentAnswer.student_annotation, ...this.studentAnswer.teacher_annotation];
                    this.pdfpath = this.studentAnswer.file_path[0];
                    if (this.studentAnswer?.base64_data) {
                        this.pdfTemplate = this.studentAnswer.base64_data == '' ? this.webhost + '/' + this.pdfpath.original_image_url : this.common.convertBase64PdfPath(this.studentAnswer.base64_data);
                    }
                    else {
                        this.pdfTemplate = this.webhost + '/' + this.pdfpath.original_image_url;
                    }
                    this.studentPoints = this.studentAnswer.earned_points;
                    this.totalPoints = this.studentAnswer.points;
                    this.totalFeedBack = this.studentAnswer.feedback;
                }
                this.correctionData = true;
            }
            else if (this.studentAnswer.status == '1' || this.studentAnswer.status == '2') {
                this.toastr.error('Student not answered');
            }
            else if (this.studentAnswer.status == '6' || this.studentAnswer.status == '4') {
                this.toastr.error('Correction pending');
            }
        }
    }
    matchcase(val, match) {
        let value;
        if (val != '' && val != undefined && val != 'undefined' && val != null) {
            if (match) {
                value = val.trim();
            }
            else {
                value = val.trim().toLowerCase().split(' ').join('');
            }
        }
        else {
            value = val;
        }
        return value;
    }
    viewDetail(event) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolId,
            class_id: event.emitData.class_id,
            content_id: event.emitData.content_id
        };
        this.report.studentContentReport(data).subscribe((successData) => {
            this.viewDetailReportSuccess(successData);
        }, (error) => {
            console.error(error, 'error_studentContentReport');
        });
    }
    viewDetailReportSuccess(successData) {
        this.chartOptions2 = {
            series: [
                {
                    name: 'Master(90% and above)',
                    data: []
                },
                {
                    name: 'Excellent(80% - 89.99%)',
                    data: []
                },
                {
                    name: 'Proficient(70% - 79.99%)',
                    data: []
                },
                {
                    name: 'Average(50% - 69.99%)',
                    data: []
                },
                {
                    name: 'Below Average(less than 50%)',
                    data: []
                }
            ],
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                    show: true
                },
                zoom: {
                    enabled: true
                }
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }
            ],
            plotOptions: {
                bar: {
                    horizontal: false
                }
            },
            xaxis: {
                type: 'category',
                categories: []
            },
            legend: {
                position: 'right',
                offsetY: 40
            },
            fill: {
                opacity: 1
            }
        };
        this.viewStudentList = successData.ResponseObject;
        this.listData2 = this.viewStudentList.studentList;
        this.studentContentDetails = this.viewStudentList.chart;
        for (let i = 0; i < this.studentContentDetails.length; i++) {
            const datalist = this.studentContentDetails[i].data;
            const dataBelow = datalist.filter(function (val) {
                return Number(val) < 50;
            });
            const dataAverage = datalist.filter(function (val) {
                return Number(val) >= 50 && Number(val) <= 70;
            });
            const dataProficient = datalist.filter(function (val) {
                return Number(val) > 70 && Number(val) <= 80;
            });
            const dataExcellent = datalist.filter(function (val) {
                return Number(val) > 80 && Number(val) <= 90;
            });
            const dataMaster = datalist.filter(function (val) {
                return Number(val) > 90;
            });
            this.chartOptions2.xaxis.categories.push(this.studentContentDetails[i].name == null ? '' : this.studentContentDetails[i].name);
            for (var a = 0; a < dataMaster.length; a++) {
                if (dataMaster[a]) {
                    this.chartOptions2.series[0]['data'].push(dataMaster[a] + '%');
                    this.chartOptions2.series[1]['data'].push(0);
                    this.chartOptions2.series[2]['data'].push(0);
                    this.chartOptions2.series[3]['data'].push(0);
                    this.chartOptions2.series[4]['data'].push(0);
                }
            }
            for (var b = 0; b < dataExcellent.length; b++) {
                if (dataExcellent[b]) {
                    this.chartOptions2.series[0]['data'].push(0);
                    this.chartOptions2.series[1]['data'].push(dataProficient[b] + '%');
                    this.chartOptions2.series[2]['data'].push(0);
                    this.chartOptions2.series[3]['data'].push(0);
                    this.chartOptions2.series[4]['data'].push(0);
                }
            }
            for (var c = 0; c < dataProficient.length; c++) {
                if (dataProficient[c]) {
                    this.chartOptions2.series[0]['data'].push(0);
                    this.chartOptions2.series[1]['data'].push(0);
                    this.chartOptions2.series[2]['data'].push(dataProficient[c] + '%');
                    this.chartOptions2.series[3]['data'].push(0);
                    this.chartOptions2.series[4]['data'].push(0);
                }
            }
            for (var d = 0; d < dataAverage.length; d++) {
                if (dataAverage[d]) {
                    this.chartOptions2.series[0]['data'].push(0);
                    this.chartOptions2.series[1]['data'].push(0);
                    this.chartOptions2.series[2]['data'].push(0);
                    this.chartOptions2.series[3]['data'].push(dataAverage[d] + '%');
                    this.chartOptions2.series[4]['data'].push(0);
                }
            }
            for (var e = 0; e < dataBelow.length; e++) {
                if (dataBelow[e]) {
                    this.chartOptions2.series[0]['data'].push(0);
                    this.chartOptions2.series[1]['data'].push(0);
                    this.chartOptions2.series[2]['data'].push(0);
                    this.chartOptions2.series[3]['data'].push(0);
                    this.chartOptions2.series[4]['data'].push(dataBelow[e] + '%');
                }
            }
            /*dataMaster.forEach(val => {
                  this.chartOptions2.series[0]['data'].push(val ? val + '%' : 0);
            });
            dataExcellent.forEach(val => {
              this.chartOptions2.series[1]['data'].push(val ? val + '%' : 0);
            });
            dataProficient.forEach(val => {
              this.chartOptions2.series[2]['data'].push(val ? val + '%' : 0);
            });
            dataAverage.forEach(val => {
              this.chartOptions2.series[3]['data'].push(val ? val + '%' : 0);
            });
            dataBelow.forEach(val => {
              this.chartOptions2.series[4]['data'].push(val ? val + '%' : 0);
            });*/
        }
        this.modalRef = this.modalService.open(this.viewStudentDetails, { size: "xl" });
    }
    downloadExcelData() {
        // let fileName = `EnergyData_${this.downloadDate}.csv`;
        // let fileName = `transaction_${this.form.controls.fromDate.value}-${this.form.controls.toDate.value}.csv`;
        const columnNames = [
            'Assessment Name',
            'Avg. Student Score(%)',
            'Assigned',
            'Graded',
            'Absent',
            'Assessment Date',
            'Min. Score',
            'Max. Score',
            'Avg. Score'
        ];
        this.csv = columnNames.join(',');
        this.csv += '\r\n';
        for (let i = 0; i < this.listData.length; i++) {
            this.csv += [
                this.listData[i].content_name,
                this.listData[i].average_student_score,
                this.listData[i].assigned,
                this.listData[i].graded,
                this.listData[i].absent,
                this.listData[i].assessment_date,
                this.listData[i].min_score,
                this.listData[i].max_score,
                this.listData[i].average_score,
            ].join(',');
            this.csv += '\r\n';
        }
        var blob = new Blob([this.csv], { type: 'text/csv;charset=utf-8;' });
        var link = document.createElement('a');
        var url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'Assessment-Report.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    downloadAssignmentExcelData() {
        // let fileName = `EnergyData_${this.downloadDate}.csv`;
        // let fileName = `transaction_${this.form.controls.fromDate.value}-${this.form.controls.toDate.value}.csv`;
        const columnNames1 = [
            'Assignment Name',
            'Avg. Student Score(%)',
            'Assigned',
            'Graded',
            'Absent',
            'Assignment Date',
            'Min. Score',
            'Max. Score',
            'Avg. Score'
        ];
        this.csv1 = columnNames1.join(',');
        this.csv1 += '\r\n';
        for (let i = 0; i < this.listData1.length; i++) {
            this.csv1 += [
                this.listData1[i].content_name,
                this.listData1[i].average_student_score,
                this.listData1[i].assigned,
                this.listData1[i].graded,
                this.listData1[i].absent,
                this.listData1[i].assignment_date,
                this.listData1[i].min_score,
                this.listData1[i].max_score,
                this.listData1[i].average_score,
            ].join(',');
            this.csv1 += '\r\n';
        }
        var blob1 = new Blob([this.csv1], { type: 'text/csv1;charset=utf-8;' });
        var link1 = document.createElement('a');
        var url1 = URL.createObjectURL(blob1);
        link1.setAttribute('href', url1);
        link1.setAttribute('download', 'Assignment-Report.csv');
        document.body.appendChild(link1);
        link1.click();
        document.body.removeChild(link1);
    }
    downloadStudentExcelData() {
        // let fileName = `EnergyData_${this.downloadDate}.csv`;
        // let fileName = `transaction_${this.form.controls.fromDate.value}-${this.form.controls.toDate.value}.csv`;
        const columnNames2 = [
            'Student Name',
            'Avg. Student Score(%)',
            'Assigned',
            'Graded',
            'Absent',
            'student Score',
            'Total Score',
        ];
        this.csv2 = columnNames2.join(',');
        this.csv2 += '\r\n';
        for (let i = 0; i < this.listData2.length; i++) {
            this.csv2 += [
                this.listData2[i].student_name,
                this.listData2[i].student_average_score,
                this.listData2[i].assigned,
                this.listData2[i].graded,
                this.listData2[i].absent,
                this.listData2[i].student_score,
                this.listData2[i].total_score,
            ].join(',');
            this.csv2 += '\r\n';
        }
        var blob2 = new Blob([this.csv2], { type: 'text/csv1;charset=utf-8;' });
        var link2 = document.createElement('a');
        var url2 = URL.createObjectURL(blob2);
        link2.setAttribute('href', url2);
        link2.setAttribute('download', 'Student-Report.csv');
        document.body.appendChild(link2);
        link2.click();
        document.body.removeChild(link2);
    }
    assessmentPrint() {
        let printContents, popupWin;
        printContents = document.getElementById('assessmentPrint').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
      <html>
        <head>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
          <style>
          @media print {
          body{
          font-family: 'Roboto', sans-serif;
          }
          .card-body{
          display: none;
          }
          .form-group {
           display: none;
          }
          .group-btn {
           display: none;
          }
          .bg-secondary-assessment{
            background: #f3f3f3;
            color: #adb3b8;
          }
          .text-secondary-assessment{
            color: #adb3b8;
          }
          .letter{
            color: #7F3486;
          }
          h3{
            font-size: 16px;
            color: #adb3b8;
          }
          }
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`);
        popupWin.document.close();
    }
    dateCountDetails() {
        const data = {
            platform: 'web',
        };
        this.report.reportDateCount(data).subscribe((successData) => {
            this.dateCountSuccess(successData);
        }, (error) => {
            this.dateCountFailure(error);
        });
    }
    dateCountSuccess(successData) {
        if (successData.IsSuccess) {
            this.dateCount = successData.ResponseObject.class_report_days;
            console.log('📅 DEBUG - dateCountSuccess - Backend returned days:', this.dateCount);
            // Use 3 months (90 days) as default instead of backend value
            const daysToGoBack = 90; // 3 months
            console.log('📅 DEBUG - Using 90 days (3 months) for default date range');
            const today = new Date();
            const fromDate = new Date();
            fromDate.setDate(today.getDate() - daysToGoBack);
            console.log('📅 DEBUG - dateCountSuccess setting dates:', {
                today: today,
                fromDate: fromDate,
                todayISO: today.toISOString(),
                fromDateISO: fromDate.toISOString()
            });
            const aObject = { isRange: false, singleDate: { jsDate: fromDate }, dateRange: null };
            const bObject = { isRange: false, singleDate: { jsDate: today }, dateRange: null };
            this.assessmentForm.controls.fromDate.patchValue(aObject);
            console.log('📅 DEBUG - After patchValue fromDate:', this.assessmentForm.controls.fromDate.value);
            const aa = this.assessmentForm.controls.fromDate.value.singleDate.jsDate;
            this.myDpOptions1 = {
                dateRange: false,
                dateFormat: dateOptions.pickerFormat,
                firstDayOfWeek: 'su',
                disableUntil: {
                    year: new Date(aa).getFullYear(),
                    month: new Date(aa).getMonth() + 1,
                    day: new Date(aa).getDate() - 1,
                },
            };
            this.assessmentForm.controls.toDate.patchValue(bObject);
            console.log('📅 DEBUG - After patchValue toDate:', this.assessmentForm.controls.toDate.value);
            // Safely transform dates with validation
            const formFromDate = this.assessmentForm.controls.fromDate.value?.singleDate?.jsDate;
            const formToDate = this.assessmentForm.controls.toDate.value?.singleDate?.jsDate;
            this.from1Date = formFromDate && !isNaN(new Date(formFromDate).getTime())
                ? this.datePipe.transform(formFromDate, 'yyyy-MM-dd')
                : '';
            this.to1Date = formToDate && !isNaN(new Date(formToDate).getTime())
                ? this.datePipe.transform(formToDate, 'yyyy-MM-dd')
                : '';
            console.log('📅 DEBUG - dateCountSuccess FINAL values:', {
                from1Date: this.from1Date,
                to1Date: this.to1Date,
                formFromDate: this.assessmentForm.controls.fromDate.value,
                formToDate: this.assessmentForm.controls.toDate.value
            });
            this.assessmentReport();
            this.assignmentReport();
        }
    }
    dateCountFailure(error) {
        console.log(error, 'error');
    }
    static { this.ɵfac = function AssessmentSummaryComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AssessmentSummaryComponent)(i0.ɵɵdirectiveInject(i1.CommonDataService), i0.ɵɵdirectiveInject(i2.TitleCasePipe), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i4.TeacherService), i0.ɵɵdirectiveInject(i5.FormBuilder), i0.ɵɵdirectiveInject(i6.ReportService), i0.ɵɵdirectiveInject(i7.AuthService), i0.ɵɵdirectiveInject(i8.ToastrService), i0.ɵɵdirectiveInject(i9.CommonService), i0.ɵɵdirectiveInject(i10.NgbModal), i0.ɵɵdirectiveInject(i2.DatePipe), i0.ɵɵdirectiveInject(i11.ValidationService), i0.ɵɵdirectiveInject(i12.Router), i0.ɵɵdirectiveInject(i13.NewsubjectService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AssessmentSummaryComponent, selectors: [["app-assessment-summary"]], viewQuery: function AssessmentSummaryComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewStudentDetails = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.studentCorrection = _t.first);
        } }, decls: 4, vars: 2, consts: [["viewStudentDetails", ""], ["dp", "angular-mydatepicker"], ["dp1", "angular-mydatepicker"], ["class", "container-fluid", "id", "assessmentPrint", 4, "ngIf"], [4, "ngIf"], ["id", "assessmentPrint", 1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "card-body", "tab2-card", "p-0"], [1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "col-4", "px-0"], [1, "col-xl-12", "col-md-12", "px-2"], [2, "visibility", "hidden"], [1, "col-xl-12", "col-md-12"], ["bindLabel", "class_name", "bindValue", "class_id", "formControlName", "class", "placeholder", "Class List", 3, "change", "items"], ["class", "form-group col-4 px-0", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["class", "form-group col-3 px-0", 4, "ngIf"], ["class", "row d-flex justify-content-between mt-3", 4, "ngIf"], ["class", "row d-flex justify-content-center list-card mt-3 px-3", 4, "ngIf"], [1, "col-xl-12", "col-md-12", "form-group"], [1, "input-group"], ["name", "fromdate", "placeholder", "mm/dd/yyyy", "formControlName", "fromDate", "angular-mydatepicker", "", 1, "form-control", 3, "dateChanged", "options"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", "px-3", "py-1", 3, "click"], [1, "fa", "fa-calendar-o"], ["name", "todate", "placeholder", "mm/dd/yyyy", "formControlName", "toDate", "angular-mydatepicker", "", 1, "form-control", 3, "dateChanged", "options"], [3, "ngClass"], [1, "row", "group-btn", "mt-3"], [1, "col-12", "text-right"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "form-group", "col-3", "px-0"], ["bindLabel", "content_name", "bindValue", "content_id", "formControlName", "assessment", "placeholder", "Please Select", "typeToSearchText", "", "multiple", "true", 3, "change", "items"], ["bindLabel", "content_name", "bindValue", "content_id", "formControlName", "assignment", "placeholder", "Please Select", "typeToSearchText", "", "multiple", "true", 3, "change", "items"], [1, "row", "d-flex", "justify-content-between", "mt-3"], [1, "col-6"], [1, "card", "p-3"], [1, "row", "mt-3"], [1, "col-6", "p-2"], [1, "bg-secondary-assessment", "p-3"], [1, "p-2"], [1, "letter"], [1, "col-4"], [1, "text-secondary-assessment"], ["id", "chart"], [3, "series", "chart", "labels", "responsive"], [1, "col-12", "mt-3"], [1, "col-6", "text-right"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "col-12", "mt-2"], ["id", "batchDelete", 1, "category-table", "custom-datatable", "transcation-datatable", "user-image"], ["class", "table-responsive", 4, "ngIf"], ["class", "alert alert-info text-center", 4, "ngIf"], [1, "table-responsive"], [3, "clickValue", "TableType", "TableArray"], [1, "alert", "alert-info", "text-center"], [1, "fa", "fa-info-circle", "me-2"], ["id", "chart1"], ["id", "batchDelete1", 1, "category-table", "custom-datatable", "transcation-datatable", "user-image"], [1, "row", "d-flex", "justify-content-center", "list-card", "mt-3", "px-3"], [1, "col-12", "p-0"], [1, "nodataList"], [1, "modal-body"], [1, "container-fluid", 3, "hidden"], [1, "col-md-12", "modal-header"], [1, "modal-title"], [1, "text-right"], ["aria-hidden", "true", 1, "fa", "fa-close", "fa-2x", 2, "cursor", "pointer", 3, "click"], [1, "col-md-12", "mb-2"], ["id", "chart2"], [3, "series", "chart", "dataLabels", "plotOptions", "responsive", "xaxis", "legend", "fill"], ["id", "batchDelete2", 1, "category-table", "custom-datatable", "transcation-datatable", "user-image"], ["class", "container-fluid", 4, "ngIf"], [1, "container-fluid"], [1, "col-md-12", "scrollPanel", "view-question", 2, "height", "100vh", 3, "hidden"], ["class", "card mt-2 div-disable", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mt-3", "card", "p-4"], [1, "col-md-12", "d-flex"], [1, "col-md-6", "px-0", "mb-2"], [1, "col-md-12"], ["type", "text", 1, "form-control", "div-disable", 3, "ngModelChange", "ngModel"], [1, "col-md-12", "mt-3"], [1, "col-md-6", "mb-1"], ["cols", "30", "rows", "5", 1, "form-control", "div-disable", 3, "ngModelChange", "ngModel"], [1, "col-md-12", 3, "hidden"], [3, "getAnnotate", "getDragQues", "pdfPath", "toolHide", "userType"], [1, "card", "mt-2", "div-disable"], ["class", "col-md-12 mb-3", 4, "ngIf"], ["class", "card-body mb-3", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mb-3"], ["type", "text", 1, "input-custom-modal", "div-disable", 3, "value"], [1, "card-body", "mb-3"], [1, "row", "d-flex", "justify-content-between"], [1, "col-md-1"], [1, "btn", "btn-primary", "mr-3"], [1, "col-md-3", "text-right"], ["autocomplete", "off", "name", "points", 1, "mark-input", 2, "text-align", "center", 3, "input", "keypress", "value"], [1, "mark-input", "div-disable", 2, "text-align", "center", 3, "keypress", "value"], ["class", "errormessage", 4, "ngIf"], ["class", "mt-4", 4, "ngIf"], ["class", "col-md-6 mt-4 px-0", 4, "ngIf"], ["class", "col-md-12 mt-4 px-0", 4, "ngIf"], ["class", "col-md-12 mt-4 px-0 d-flex", 4, "ngIf"], [1, "row", "mt-4", "d-flex"], [1, "col-md-6"], ["rows", "3", 1, "form-control", "div-disable", 3, "value"], ["placeholder", "Feed Back", "rows", "3", 1, "form-control", "div-disable", 3, "input", "value"], [1, "errormessage"], [1, "mt-4"], [1, "mb-0", "mt-2", 3, "hidden", "innerHTML"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "fa", "fa-check"], ["aria-hidden", "true", 1, "fa", "fa-times"], ["name", "ans", "type", "radio", "value", "true", 1, "radio-size", "form-control", "mr-2", "div-disable", 3, "checked"], ["name", "ans", "type", "radio", "value", "false", 1, "radio-size", "form-control", "mr-2", "div-disable", 3, "checked"], [1, "capital"], [1, "col-md-6", "mt-4", "px-0"], ["type", "text", 1, "form-control", "div-disable", "mt-2", 3, "ngClass", "value"], ["value", "Correct answer", 1, "mt-4"], [1, "col-md-12", "mt-4", "px-0"], ["cols", "30", "rows", "4", 1, "form-control", "div-disable"], [1, "d-flex"], [1, "ml-3", 3, "innerHTML"], [1, "col-md-12", "mt-4", "px-0", "d-flex"], [1, "col-md-6", "div-disable"], [3, "editMode", "editPatchValue", "graphId", "questionType"], [3, "editMode", "editPatchValue", "graphId", "questionType", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "form-control mt-2", "cols", "30", "readonly", "", "rows", "4", 3, "ngClass", "value", 4, "ngIf"], ["class", "form-control mt-2", "cols", "30", "placeholder", "Student Not Answered", "readonly", "", "rows", "2", 4, "ngIf"], [1, "mt-1"], ["cols", "30", "readonly", "", "rows", "4", 1, "form-control", "mt-2", 3, "ngClass", "value"], ["cols", "30", "placeholder", "Student Not Answered", "readonly", "", "rows", "2", 1, "form-control", "mt-2"]], template: function AssessmentSummaryComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AssessmentSummaryComponent_div_0_Template, 21, 10, "div", 3)(1, AssessmentSummaryComponent_div_1_Template, 2, 0, "div", 4)(2, AssessmentSummaryComponent_ng_template_2_Template, 22, 12, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length == 0);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i5.ɵNgNoValidate, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.FormGroupDirective, i5.FormControlName, i14.NgSelectComponent, i5.NgModel, i15.AngularMyDatePickerDirective, i16.ChartComponent, i17.GraphComponentComponent, i18.AnnotationComponent, i19.TableComponent, i20.EmptyschoolComponent, i21.SanitizeHtmlPipe], styles: ["//[_ngcontent-%COMP%]   Make[_ngcontent-%COMP%]   ng-select[_ngcontent-%COMP%]   dropdown[_ngcontent-%COMP%]   panels[_ngcontent-%COMP%]   wider[_ngcontent-%COMP%]   to[_ngcontent-%COMP%]   show[_ngcontent-%COMP%]   full[_ngcontent-%COMP%]   class[_ngcontent-%COMP%]   names\n[_ngcontent-%COMP%]  .ng-dropdown-panel {\n    min-width: 400px !important; // Ensure dropdown is at least 400px wide\n    max-width: 600px !important; // Cap at 600px for very long names\n}\n\n//[_ngcontent-%COMP%]   Prevent[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]   truncation[_ngcontent-%COMP%]   in[_ngcontent-%COMP%]   dropdown[_ngcontent-%COMP%]   options\n[_ngcontent-%COMP%]  .ng-option {\n    white-space: normal !important; // Allow text wrapping\n    word-wrap: break-word !important;\n    padding: 8px 12px !important;\n    line-height: 1.4 !important;\n}\n\n//[_ngcontent-%COMP%]   Ensure[_ngcontent-%COMP%]   selected[_ngcontent-%COMP%]   value[_ngcontent-%COMP%]   shows[_ngcontent-%COMP%]   full[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]   in[_ngcontent-%COMP%]   the[_ngcontent-%COMP%]   input\n[_ngcontent-%COMP%]  .ng-select .ng-select-container .ng-value-container .ng-value {\n    overflow: visible !important;\n}\n\n//[_ngcontent-%COMP%]   Make[_ngcontent-%COMP%]   the[_ngcontent-%COMP%]   dropdown[_ngcontent-%COMP%]   container[_ngcontent-%COMP%]   itself[_ngcontent-%COMP%]   wider[_ngcontent-%COMP%]   if[_ngcontent-%COMP%]   needed\n[_ngcontent-%COMP%]  .ng-select {\n    min-width: 100% !important;\n}\n\n//[_ngcontent-%COMP%]   Optional[_ngcontent-%COMP%]:   Add[_ngcontent-%COMP%]   tooltip[_ngcontent-%COMP%]   on[_ngcontent-%COMP%]   hover[_ngcontent-%COMP%]   for[_ngcontent-%COMP%]   truncated[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]   in[_ngcontent-%COMP%]   the[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   box\n[_ngcontent-%COMP%]  .ng-select .ng-select-container {\n    cursor: pointer;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AssessmentSummaryComponent, [{
        type: Component,
        args: [{ selector: 'app-assessment-summary', template: "<div *ngIf=\"schoolStatus.length != 0\" class=\"container-fluid\" id=\"assessmentPrint\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card-body tab2-card p-0\">\n                <form [formGroup]=\"assessmentForm\" class=\"needs-validation user-add\">\n                    <div class=\"row\">\n                        <div class=\"form-group col-4 px-0\">\n                            <label class=\"col-xl-12 col-md-12 px-2\"><span style=\"visibility: hidden\">*</span>\n                                Class List</label>\n                            <div class=\"col-xl-12 col-md-12\">\n                                <ng-select (change)=\"assessmentReport(); assignmentReport()\"\n                                           [items]=\"classDetails\"\n                                           bindLabel=\"class_name\"\n                                           bindValue=\"class_id\"\n                                           formControlName=\"class\"\n                                           placeholder=\"Class List\">\n                                </ng-select>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-4 px-0\" *ngIf=\"assessmentShow\">\n                            <label class=\"col-xl-12 col-md-12 px-2\"><span style=\"visibility: hidden\">*</span> From Date</label>\n                            <div class=\"col-xl-12 col-md-12 form-group\">\n                                <div class=\"input-group\">\n                                    <input class=\"form-control\" name=\"fromdate\" placeholder=\"mm/dd/yyyy\"\n                                           formControlName=\"fromDate\" angular-mydatepicker #dp=\"angular-mydatepicker\" [options]=\"myDpOptions\" (dateChanged)=\"onDateChanged1($event, '1')\"/>\n                                    <div class=\"input-group-append\">\n                                        <button type=\"button\" class=\"btn btn-primary px-3 py-1\" (click)=\"dp.toggleCalendar()\">\n                                            <i class=\"fa fa-calendar-o\"></i>\n                                        </button>\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-4 px-0\" *ngIf=\"assessmentShow\">\n                            <label class=\"col-xl-12 col-md-12 px-2\"><span style=\"visibility: hidden\">*</span> To Date</label>\n                            <div class=\"col-xl-12 col-md-12 form-group\">\n                                <div class=\"input-group\">\n                                    <input class=\"form-control\" name=\"todate\" placeholder=\"mm/dd/yyyy\"\n                                           formControlName=\"toDate\" angular-mydatepicker #dp1=\"angular-mydatepicker\" [options]=\"myDpOptions1\" (dateChanged)=\"onDateChanged1($event, '2')\"/>\n                                    <div class=\"input-group-append\">\n                                        <button type=\"button\" class=\"btn btn-primary px-3 py-1\" (click)=\"dp1.toggleCalendar()\">\n                                            <i class=\"fa fa-calendar-o\"></i>\n                                        </button>\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"assessmentReportShow\" [ngClass]=\"assessmentShow == true ? 'col-3' : 'col-9'\">\n                            <div class=\"row group-btn mt-3\">\n                                <div class=\"col-12 text-right\">\n                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"assessmentPrint()\">Print</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-3 px-0\" *ngIf=\"assessmentShow\">\n                            <label class=\"col-xl-12 col-md-12 px-2\"><span style=\"visibility: hidden\">*</span> Assessment List</label>\n                            <div class=\"col-xl-12 col-md-12\">\n                                <ng-select (change)=\"assessmentDetailReport()\"\n                                           [items]=\"assessmentDetails\"\n                                           bindLabel=\"content_name\"\n                                           bindValue=\"content_id\"\n                                           formControlName=\"assessment\"\n                                           placeholder=\"Please Select\"\n                                           typeToSearchText=\"\"\n                                           multiple=\"true\">\n                                </ng-select>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-3 px-0\" *ngIf=\"assessmentShow\">\n                            <label class=\"col-xl-12 col-md-12 px-2\"><span style=\"visibility: hidden\">*</span> Assignment List</label>\n                            <div class=\"col-xl-12 col-md-12\">\n                                <ng-select (change)=\"assignmentDetailReport()\"\n                                           [items]=\"assignmentDetails\"\n                                           bindLabel=\"content_name\"\n                                           bindValue=\"content_id\"\n                                           formControlName=\"assignment\"\n                                           placeholder=\"Please Select\"\n                                           typeToSearchText=\"\"\n                                           multiple=\"true\">\n                                </ng-select>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-between mt-3\" *ngIf=\"assessmentReportShow\">\n        <div class=\"col-6\">\n            <div class=\"card p-3\">\n                <h3>Assessment Statistics</h3>\n                <div class=\"row mt-3\">\n                    <div class=\"col-6  p-2\">\n                        <div class=\"bg-secondary-assessment p-3\">\n                            <h4 class=\"p-2\">Average Score</h4>\n                            <h4 class=\"p-2\"><span class=\"letter\">{{assessmentReportDetails.studentAverage}}</span> / {{assessmentReportDetails.totalAverage}}</h4>\n                        </div>\n                    </div>\n                    <div class=\"col-6 p-2\">\n                        <div class=\"bg-secondary-assessment p-3\">\n                            <h4 class=\"p-2\">Average student Score</h4>\n                            <h4 class=\"p-2\"><span class=\"letter\">{{assessmentReportDetails.AverageStudentScore}}</span></h4>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-4\">\n                        <h4 class=\"text-secondary-assessment\">Students Assigned</h4>\n                        <h4 class=\"letter\">{{assessmentReportDetails.totalStudentAssigned}}</h4>\n                    </div>\n                    <div class=\"col-4\">\n                        <h4 class=\"text-secondary-assessment\">Students Graded</h4>\n                        <h4 class=\"letter\">{{assessmentReportDetails.totalStudentGraded}}</h4>\n                    </div>\n                    <div class=\"col-4\">\n                        <h4 class=\"text-secondary-assessment\">Students Absent</h4>\n                        <h4 class=\"letter\">{{assessmentReportDetails.totalAbsent}}</h4>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-6\">\n            <div class=\"card p-3\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <h3>Students Assessment Performance Bands (%)</h3>\n                        <div id=\"chart\">\n                            <apx-chart\n                                    [series]=\"chartOptions.series\"\n                                    [chart]=\"chartOptions.chart\"\n                                    [labels]=\"chartOptions.labels\"\n                                    [responsive]=\"chartOptions.responsive\"\n                            ></apx-chart>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12 mt-3\">\n            <div class=\"card p-3\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <h3>Assessment Statistics</h3>\n                    </div>\n                    <div class=\"col-6 text-right\">\n                        <button type=\"button\" class=\"btn btn-success\" (click)=\"downloadExcelData()\">Download CSV</button>\n                    </div>\n                    <div class=\"col-12 mt-2\">\n                        <div id=\"batchDelete\" class=\"category-table custom-datatable transcation-datatable user-image\">\n                            <div class=\"table-responsive\" *ngIf=\"listData && listData.length > 0\">\n                                <app-table [TableType]=\"'ReportAssessment'\" [TableArray]=\"listData\" (clickValue)=\"viewDetail($event)\" ></app-table>\n                            </div>\n                            <div class=\"alert alert-info text-center\" *ngIf=\"!listData || listData.length === 0\">\n                                <i class=\"fa fa-info-circle me-2\"></i>\n                                No student performance data available yet. This feature requires full implementation of performance statistics calculation.\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-between mt-3\" *ngIf=\"assignmentReportShow\">\n        <div class=\"col-6\">\n            <div class=\"card p-3\">\n                <h3>Assignment Statistics</h3>\n                <div class=\"row mt-3\">\n                    <div class=\"col-6  p-2\">\n                        <div class=\"bg-secondary-assessment p-3\">\n                            <h4 class=\"p-2\">Average Score</h4>\n                            <h4 class=\"p-2\"><span class=\"letter\">{{assignmentReportDetails.studentAverage}}</span> / {{assignmentReportDetails.totalAverage}}</h4>\n                        </div>\n                    </div>\n                    <div class=\"col-6 p-2\">\n                        <div class=\"bg-secondary-assessment p-3\">\n                            <h4 class=\"p-2\">Average student Score</h4>\n                            <h4 class=\"p-2\"><span class=\"letter\">{{assignmentReportDetails.AverageStudentScore}}</span></h4>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-4\">\n                        <h4 class=\"text-secondary-assessment\">Students Assigned</h4>\n                        <h4 class=\"letter\">{{assignmentReportDetails.totalStudentAssigned}}</h4>\n                    </div>\n                    <div class=\"col-4\">\n                        <h4 class=\"text-secondary-assessment\">Students Graded</h4>\n                        <h4 class=\"letter\">{{assignmentReportDetails.totalStudentGraded}}</h4>\n                    </div>\n                    <div class=\"col-4\">\n                        <h4 class=\"text-secondary-assessment\">Students Absent</h4>\n                        <h4 class=\"letter\">{{assignmentReportDetails.totalAbsent}}</h4>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-6\">\n            <div class=\"card p-3\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <h3>Students Assignment Performance Bands (%)</h3>\n                        <div id=\"chart1\">\n                            <apx-chart\n                                    [series]=\"chartOptions1.series\"\n                                    [chart]=\"chartOptions1.chart\"\n                                    [labels]=\"chartOptions1.labels\"\n                                    [responsive]=\"chartOptions1.responsive\"\n                            ></apx-chart>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12 mt-3\">\n            <div class=\"card p-3\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <h3>Assignment Statistics</h3>\n                    </div>\n                    <div class=\"col-6 text-right\">\n                        <button type=\"button\" class=\"btn btn-success\" (click)=\"downloadAssignmentExcelData()\">Download CSV</button>\n                    </div>\n                    <div class=\"col-12 mt-2\">\n                        <div id=\"batchDelete1\" class=\"category-table custom-datatable transcation-datatable user-image\">\n                            <div class=\"table-responsive\" *ngIf=\"listData1 && listData1.length > 0\">\n                                <app-table [TableType]=\"'ReportAssignment'\" [TableArray]=\"listData1\" (clickValue)=\"viewDetail($event)\" ></app-table>\n                            </div>\n                            <div class=\"alert alert-info text-center\" *ngIf=\"!listData1 || listData1.length === 0\">\n                                <i class=\"fa fa-info-circle me-2\"></i>\n                                No student performance data available yet. This feature requires full implementation of performance statistics calculation.\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-center list-card mt-3 px-3\" *ngIf=\"!assessmentReportShow && !assignmentReportShow\">\n        <div class=\"col-12 p-0\">\n            <button class=\"nodataList\">{{message}}</button>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"schoolStatus.length == 0\">\n    <app-emptyschool>\n    </app-emptyschool>\n</div>\n<ng-template #viewStudentDetails let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div [hidden]=\"correctionData == true\"  class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-12 modal-header\">\n                    <h4 class=\"modal-title\">Itemized Reports</h4>\n                    <p class=\"text-right\">\n                        <i class=\"fa fa-close fa-2x\" aria-hidden=\"true\" style=\"cursor:pointer\" (click)=\"close()\"></i>\n                    </p>\n                </div>\n                <div class=\"col-md-12 mb-2\">\n                    <div id=\"chart2\">\n                        <apx-chart\n                                [series]=\"chartOptions2.series\"\n                                [chart]=\"chartOptions2.chart\"\n                                [dataLabels]=\"chartOptions2.dataLabels\"\n                                [plotOptions]=\"chartOptions2.plotOptions\"\n                                [responsive]=\"chartOptions2.responsive\"\n                                [xaxis]=\"chartOptions2.xaxis\"\n                                [legend]=\"chartOptions2.legend\"\n                                [fill]=\"chartOptions2.fill\"\n                        ></apx-chart>\n                    </div>\n                </div>\n                <div class=\"col-6\">\n                    <h3>Student Statistics</h3>\n                </div>\n                <div class=\"col-6 text-right\">\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"downloadStudentExcelData()\">Download CSV</button>\n                </div>\n                <div class=\"col-12 mt-2\">\n                    <div id=\"batchDelete2\" class=\"category-table custom-datatable transcation-datatable user-image\">\n                        <div class=\"table-responsive\">\n                            <app-table [TableType]=\"'StudentReport'\" [TableArray]=\"listData2\" (clickValue)=\"studentCorrectionDetail($event)\"></app-table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"correctionData == true\" class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-12 modal-header\">\n                    <h4 class=\"modal-title\">Correction Details</h4>\n                    <p class=\"text-right\">\n                        <i (click)=\"back()\" aria-hidden=\"true\" class=\"fa fa-close fa-2x\" style=\"cursor:pointer\"></i>\n                    </p>\n                </div>\n                <div [hidden]=\"studentAnswer.answers.length == 0\" class=\"col-md-12 scrollPanel view-question\" style=\"height: 100vh\">\n                    <div *ngFor=\"let sec of totalAns; let i = index\" class=\"card mt-2 div-disable\">\n                        <div *ngIf=\"sec.heading != ''\" class=\"col-md-12 mb-3\">\n                            <input [value]=\"sec.heading\" class=\"input-custom-modal div-disable\" type=\"text\">\n                        </div>\n                        <div *ngFor=\"let item of sec.section; let j = index\" class=\"card-body mb-3\">\n                            <div class=\"row d-flex justify-content-between\">\n                                <div class=\"col-md-1\">\n                                    <button class=\"btn btn-primary mr-3\">{{item.sub_question_no}}</button>\n                                </div>\n                                <div class=\"col-md-3 text-right\">\n                                    <input (input)=\"getPoints($event , i, j); markValidation($event, item.points, i, j)\" (keypress)=\"numberValidate($event)\" [value]=\"item.given_points\" autocomplete=\"off\" class=\"mark-input\" name=\"points\" style=\"text-align: center\">\n                                    <input (keypress)=\"numberValidate($event)\" [value]=\"item.points\" class=\"mark-input div-disable\" style=\"text-align: center\">\n                                    <br>\n                                    <span *ngIf=\"item.maxValErr\" class=\"errormessage\">Invalid Points</span>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <ul *ngIf=\"item.question_type_id == 1\" class=\"mt-4\">\n                                        <p [hidden]=\"item.question == ''\" class=\"mb-0 mt-2\" [innerHTML]=\"item.question\"></p>\n                                        <li *ngFor=\"let option of item.array\" [ngClass]=\"{'ans-correct': option == item.answer, 'ans-selected': option == item.student_answer, 'ans-wrong': option != item.answer && option == item.student_answer}\"><span><span>{{option}}</span>\n                            <i aria-hidden=\"true\" class=\"fa fa-check\"></i>\n                            <i aria-hidden=\"true\" class=\"fa fa-times\"></i>\n                        </span>\n                                        </li>\n                                    </ul>\n                                    <ul *ngIf=\"item.question_type_id == 3\" class=\"mt-4\">\n                                        <p [hidden]=\"item.question == ''\" class=\"mb-0 mt-2\" [innerHTML]=\"item.question\"></p>\n                                        <li [ngClass]=\"{'ans-correct': item.answer == 'true', 'ans-selected': item.student_answer == 'true', 'ans-wrong': item.answer == 'false' && item.student_answer == 'true'}\">\n                            <span><input [checked]=\"item.student_answer == 'true'\" class=\"radio-size form-control mr-2 div-disable\" name=\"ans\" type=\"radio\" value=\"true\"> True\n                            <i aria-hidden=\"true\" class=\"fa fa-check\"></i>\n                            <i aria-hidden=\"true\" class=\"fa fa-times\"></i>\n                            </span>\n                                        </li>\n                                        <li [ngClass]=\"{'ans-correct': item.answer == 'false', 'ans-selected': item.student_answer == 'false', 'ans-wrong': item.answer == 'true' && item.student_answer == 'false'}\">\n                            <span><input [checked]=\"item.student_answer == 'false'\" class=\"radio-size form-control mr-2 div-disable\" name=\"ans\" type=\"radio\" value=\"false\"> False\n                            <i aria-hidden=\"true\" class=\"fa fa-check\"></i>\n                            <i aria-hidden=\"true\" class=\"fa fa-times\"></i>\n                            </span>\n                                        </li>\n                                    </ul>\n                                    <ul *ngIf=\"item.question_type_id == 9\" class=\"mt-4\">\n                                        <p [hidden]=\"item.question == ''\" class=\"mb-0 mt-2\" [innerHTML]=\"item.question\"></p>\n                                        <li *ngFor=\"let option of item.mob_options\" [ngClass]=\"{'ans-correct': option == item.answer, 'ans-selected': option == item.student_answer, 'ans-wrong': option != item.answer && option == item.student_answer}\"><span class=\"capital\">{{option}}\n                                            <i aria-hidden=\"true\" class=\"fa fa-check\"></i>\n                            <i aria-hidden=\"true\" class=\"fa fa-times\"></i>\n                        </span></li>\n                                    </ul>\n                                    <div *ngIf=\"item.question_type_id == 10\" class=\"col-md-6 mt-4 px-0\">\n                                        <p [hidden]=\"item.question == ''\" class=\"mb-0 mt-2\" [innerHTML]=\"item.question\"></p>\n                                        <input [ngClass]=\"{'wrong-ans': item.match_case ? (item.answer != item.student_answer) : (item.answer.toLowerCase() != item.student_answer.toLowerCase()),\n                                'correct-ans': item.match_case ? (item.answer == item.student_answer) : (item.answer.toLowerCase() == item.student_answer.toLowerCase())}\"\n                                               [value]=\"item.student_answer\"\n                                               class=\"form-control div-disable mt-2\"\n                                               type=\"text\">\n                                        <label class=\"mt-4\" value=\"Correct answer\">Correct answer : {{item.answer}}</label>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 20\" class=\"col-md-12 mt-4 px-0\">\n                                        <textarea class=\"form-control div-disable\" cols=\"30\" rows=\"4\">{{item.student_answer}}</textarea>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 30\" class=\"col-md-12 mt-4 px-0\">\n                                        <div class=\"d-flex\">\n                                            <label>Student Answer: </label>\n                                            <h4 [innerHTML]=\"item.student_answer | sanitizeHtml\" class=\"ml-3\"></h4>\n                                        </div>\n                                        <div class=\"d-flex\">\n                                            <label>Correct Answer: </label>\n                                            <h4 [innerHTML]=\"item.answer | sanitizeHtml\" class=\"ml-3\"></h4>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 40\" class=\"col-md-12 mt-4 px-0 d-flex\">\n                                        <div class=\"col-md-6 div-disable\">\n                                            <label>Correct Answer: </label>\n                                            <app-graph-component [editMode]=\"false\"\n                                                                 [editPatchValue]=\"parseVal(item.answer)\"\n                                                                 [graphId]=\"i+'correctgraph'+item.sub_question_no+'id'\"\n                                                                 [questionType]=\"'40'\"></app-graph-component>\n                                        </div>\n                                        <div class=\"col-md-6 div-disable\">\n                                            <label>Student Answer: </label>\n                                            <app-graph-component *ngIf=\"item.student_answer != ''\"\n                                                                 [editMode]=\"false\"\n                                                                 [editPatchValue]=\"parseVal(item.student_answer[0].correctAnswer)\"\n                                                                 [graphId]=\"i+'Editgraph'+item.sub_question_no+'id'\"\n                                                                 [questionType]=\"'40'\"></app-graph-component>\n                                            <app-graph-component *ngIf=\"item.student_answer == ''\"\n                                                                 [editMode]=\"false\"\n                                                                 [editPatchValue]=\"false\"\n                                                                 [graphId]=\"i+'Editgraph'+item.sub_question_no+'idoo'\"\n                                                                 [questionType]=\"'40'\"></app-graph-component>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 54\" class=\"col-md-12 mt-4 px-0\">\n                                        <div *ngFor=\"let blank of item.answer; let k = index\">\n                                                            <textarea *ngIf=\"item.student_answer != '' && item.student_answer != null\" [ngClass]=\"{'correct-ans': item.match_case == '1' ? (item.answer[k].value.trim() == item.student_answer[k].trim()) : item.answer[k].value.trim().toLowerCase().split(' ').join('') == item.student_answer[k].trim().toLowerCase().split(' ').join(''),\n                                                            'wrong-ans': item.match_case ? (item.answer[k].value.trim() != item.student_answer[k].trim()) : item.answer[k].value.trim().toLowerCase().split(' ').join('') != item.student_answer[k].trim().toLowerCase().split(' ').join('')}\"\n                                                                      [value]=\"item.student_answer[k]\"\n                                                                      class=\"form-control mt-2\" cols=\"30\" readonly rows=\"4\">\n\n                                                            </textarea>\n                                            <textarea *ngIf=\"item.student_answer == '' || item.student_answer == null\" class=\"form-control mt-2\" cols=\"30\" placeholder=\"Student Not Answered\"\n                                                      readonly rows=\"2\"></textarea>\n                                            <label class=\"mt-1\">Correct Answer : {{item.answer[k].value}}</label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row mt-4 d-flex\">\n                                <div class=\"col-md-6\">\n                                    <label>Student feedback</label>\n                                    <textarea [value]=\"item.student_feedback == null ? '' : item.student_feedback\" class=\"form-control div-disable\" rows=\"3\"></textarea>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <label>Feedback</label>\n                                    <textarea (input)=\"getFeedback($event, i, j)\" [value]=\"item.feedback\" class=\"form-control div-disable\" placeholder=\"Feed Back\" rows=\"3\"></textarea>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 mt-3 card p-4\">\n                        <div class=\"col-md-12 d-flex\">\n                            <div class=\"col-md-6 px-0 mb-2\">\n                                <div class=\"col-md-12\">\n                                    <label>Obtained Points</label>\n                                    <input [(ngModel)]=\"studentPoints\" class=\"form-control div-disable\" type=\"text\">\n                                </div>\n                                <div class=\"col-md-12 mt-3\">\n                                    <label>Total Points</label>\n                                    <input [(ngModel)]=\"totalPoints\" class=\"form-control div-disable\" type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-6 mb-1\">\n                                <label>Feedback</label>\n                                <textarea [(ngModel)]=\"totalFeedBack\" class=\"form-control div-disable\" cols=\"30\" rows=\"5\"></textarea>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div [hidden]=\"studentAnswer.answers.length != 0\" class=\"col-md-12\">\n                    <app-annotation [getAnnotate]=\"areaInfo\"\n                                    [getDragQues]=\"dragQuestionsList\"\n                                    [pdfPath]=\"pdfTemplate\"\n                                    [toolHide]=\"true\"\n                                    [userType]=\"'teacher'\"></app-annotation>\n                    <div class=\"col-md-12 mt-3 card p-4\">\n                        <div class=\"col-md-12 d-flex\">\n                            <div class=\"col-md-6 px-0 mb-2\">\n                                <div class=\"col-md-12\">\n                                    <label>Obtained Points</label>\n                                    <input [(ngModel)]=\"studentPoints\" class=\"form-control div-disable\" type=\"text\">\n                                </div>\n                                <div class=\"col-md-12 mt-3\">\n                                    <label>Total Points</label>\n                                    <input [(ngModel)]=\"totalPoints\" class=\"form-control div-disable\" type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-6 mb-1\">\n                                <label>Feedback</label>\n                                <textarea [(ngModel)]=\"totalFeedBack\" class=\"form-control div-disable\" cols=\"30\" rows=\"5\"></textarea>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- Container-fluid Ends-->\n    </div>\n</ng-template>\n", styles: ["// Make ng-select dropdown panels wider to show full class names\n::ng-deep .ng-dropdown-panel {\n    min-width: 400px !important; // Ensure dropdown is at least 400px wide\n    max-width: 600px !important; // Cap at 600px for very long names\n}\n\n// Prevent text truncation in dropdown options\n::ng-deep .ng-option {\n    white-space: normal !important; // Allow text wrapping\n    word-wrap: break-word !important;\n    padding: 8px 12px !important;\n    line-height: 1.4 !important;\n}\n\n// Ensure selected value shows full text in the input\n::ng-deep .ng-select .ng-select-container .ng-value-container .ng-value {\n    overflow: visible !important;\n}\n\n// Make the dropdown container itself wider if needed\n::ng-deep .ng-select {\n    min-width: 100% !important;\n}\n\n// Optional: Add tooltip on hover for truncated text in the select box\n::ng-deep .ng-select .ng-select-container {\n    cursor: pointer;\n}\n\n\n"] }]
    }], () => [{ type: i1.CommonDataService }, { type: i2.TitleCasePipe }, { type: i3.ConfigurationService }, { type: i4.TeacherService }, { type: i5.FormBuilder }, { type: i6.ReportService }, { type: i7.AuthService }, { type: i8.ToastrService }, { type: i9.CommonService }, { type: i10.NgbModal }, { type: i2.DatePipe }, { type: i11.ValidationService }, { type: i12.Router }, { type: i13.NewsubjectService }], { viewStudentDetails: [{
            type: ViewChild,
            args: ['viewStudentDetails']
        }], studentCorrection: [{
            type: ViewChild,
            args: ['studentCorrection']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AssessmentSummaryComponent, { className: "AssessmentSummaryComponent" }); })();
//# sourceMappingURL=assessment-summary.component.js.map