import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { AuthService } from '../../../shared/service/auth.service';
import { CreatorService } from '../../../shared/service/creator.service';
import { NavService } from '../../../shared/service/nav.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeacherService } from '../../../shared/service/teacher.service';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-multiselect-dropdown";
import * as i4 from "ng-apexcharts";
import * as i5 from "@ng-bootstrap/ng-bootstrap";
import * as i6 from "../question-report/question-report.component";
import * as i7 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["showQuestion"];
const _c1 = ["modalBody"];
const _c2 = a0 => ({ "display": a0 });
const _c3 = a0 => ({ data: a0 });
const _c4 = a0 => ({ $implicit: a0 });
const _c5 = a0 => ({ "active": a0 });
const _c6 = a0 => ({ "progress-novoice-border": a0 });
const _c7 = (a0, a1, a2, a3) => ({ "progress-master": a0, "progress-advanced": a1, "progress-expert": a2, "progress-novoice": a3 });
const _c8 = () => [];
const _c9 = a0 => ({ "show-scroll": a0 });
const _c10 = a0 => ({ value: a0 });
function SatReportComponent_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 42)(1, "a", 43);
    i0.ɵɵlistener("click", function SatReportComponent_ul_3_li_1_Template_a_click_1_listener() { const data_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.callViewAnalytic(data_r3)); });
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 44);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(6, _c2, ctx_r3.commonContentList[data_r3.test_type.toLowerCase()].length != 0 ? "block" : "none"));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("nav-link ", ctx_r3.tabShow == data_r3.test_type.toLowerCase() ? "active" : "", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r3.test_type);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.commonContentList[data_r3.test_type.toLowerCase()].length);
} }
function SatReportComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 40);
    i0.ɵɵtemplate(1, SatReportComponent_ul_3_li_1_Template, 6, 8, "li", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.testTypeListData);
} }
function SatReportComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 45);
    i0.ɵɵlistener("click", function SatReportComponent_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.backToClass()); });
    i0.ɵɵelement(1, "i", 46);
    i0.ɵɵtext(2, "Back ");
    i0.ɵɵelementEnd();
} }
function SatReportComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15)(1, "label", 16);
    i0.ɵɵtext(2, "Student Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ng-multiselect-dropdown", 47, 6);
    i0.ɵɵtwoWayListener("ngModelChange", function SatReportComponent_div_18_Template_ng_multiselect_dropdown_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.studentSelected, $event) || (ctx_r3.studentSelected = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("onSelect", function SatReportComponent_div_18_Template_ng_multiselect_dropdown_onSelect_3_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onStudentChange($event, "single")); })("onDeSelect", function SatReportComponent_div_18_Template_ng_multiselect_dropdown_onDeSelect_3_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onStudentChange($event, "single")); })("onSelectAll", function SatReportComponent_div_18_Template_ng_multiselect_dropdown_onSelectAll_3_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onStudentChange($event, "all")); })("onDeSelectAll", function SatReportComponent_div_18_Template_ng_multiselect_dropdown_onDeSelectAll_3_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onStudentChange($event, "all")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("placeholder", "Select Student")("settings", ctx_r3.settings2)("data", ctx_r3.studentList);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.studentSelected);
} }
function SatReportComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48)(1, "div", 49)(2, "div", 9)(3, "div", 50);
    i0.ɵɵelement(4, "img", 51);
    i0.ɵɵelementEnd()()()();
} }
function SatReportComponent_div_20_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function SatReportComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48)(1, "div", 49)(2, "div", 9)(3, "div", 10)(4, "h4", 26);
    i0.ɵɵtext(5, "Summary");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, SatReportComponent_div_20_ng_container_6_Template, 1, 0, "ng-container", 52);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const summaryAndTotalContentReport_r7 = i0.ɵɵreference(65);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngTemplateOutlet", summaryAndTotalContentReport_r7)("ngTemplateOutletContext", i0.ɵɵpureFunction1(4, _c4, i0.ɵɵpureFunction1(2, _c3, ctx_r3.summaryRecordListData)));
} }
function SatReportComponent_div_21_ul_8_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 63)(1, "a", 64);
    i0.ɵɵlistener("click", function SatReportComponent_div_21_ul_8_li_1_Template_a_click_1_listener() { const subject_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r3 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r3.tabSelected(subject_r9, "topic")); });
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const subject_r9 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c5, ctx_r3.selectedTopicSubject == subject_r9));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r9);
} }
function SatReportComponent_div_21_ul_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 61);
    i0.ɵɵtemplate(1, SatReportComponent_div_21_ul_8_li_1_Template, 4, 4, "li", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.commonSubjectList);
} }
function SatReportComponent_div_21_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function SatReportComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "div", 53)(4, "h4", 26);
    i0.ɵɵtext(5, "Topics Analysis");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h6", 54);
    i0.ɵɵtext(7, "Note: Click on the bar charts to view details");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, SatReportComponent_div_21_ul_8_Template, 2, 1, "ul", 55);
    i0.ɵɵelementStart(9, "div", 56);
    i0.ɵɵelement(10, "apx-chart", 57);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 58)(12, "div", 59);
    i0.ɵɵtemplate(13, SatReportComponent_div_21_ng_container_13_Template, 1, 0, "ng-container", 60);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const tableDetails_r10 = i0.ɵɵreference(63);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r3.tabShow != "content" && ctx_r3.commonSubjectList.length != 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("series", ctx_r3.chartOptions.series)("chart", ctx_r3.chartOptions.chart)("stroke", ctx_r3.chartOptions.stroke)("dataLabels", ctx_r3.chartOptions.dataLabels)("plotOptions", ctx_r3.chartOptions.plotOptions)("xaxis", ctx_r3.chartOptions.xaxis)("colors", ctx_r3.chartOptions.colors)("fill", ctx_r3.chartOptions.fill)("yaxis", ctx_r3.chartOptions.yaxis)("legend", ctx_r3.chartOptions.legend)("tooltip", ctx_r3.chartOptions.toolTip);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("id", (ctx_r3.selectedContent == null ? null : ctx_r3.selectedContent.question_topic) + (ctx_r3.selectedContent == null ? null : ctx_r3.selectedContent.question_topic_id));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngbCollapse", !ctx_r3.showTable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", tableDetails_r10);
} }
function SatReportComponent_div_22_ul_9_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 63)(1, "a", 64);
    i0.ɵɵlistener("click", function SatReportComponent_div_22_ul_9_li_1_Template_a_click_1_listener() { const subject_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r3 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r3.tabSelected(subject_r12, "subTopic")); });
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const subject_r12 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c5, ctx_r3.selectedSubTopicSubject == subject_r12));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r12);
} }
function SatReportComponent_div_22_ul_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 68);
    i0.ɵɵtemplate(1, SatReportComponent_div_22_ul_9_li_1_Template, 4, 4, "li", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.commonSubjectList);
} }
function SatReportComponent_div_22_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function SatReportComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "div", 9)(4, "div", 65)(5, "h4", 26);
    i0.ɵɵtext(6, "Sub Topics Analysis");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h6", 54);
    i0.ɵɵtext(8, "Note: Click on the bar charts to view details");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, SatReportComponent_div_22_ul_9_Template, 2, 1, "ul", 66);
    i0.ɵɵelementStart(10, "div", 67);
    i0.ɵɵelement(11, "apx-chart", 57);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 58)(13, "div", 59);
    i0.ɵɵtemplate(14, SatReportComponent_div_22_ng_container_14_Template, 1, 0, "ng-container", 60);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const tableDetails_r10 = i0.ɵɵreference(63);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", ctx_r3.tabShow != "content" && ctx_r3.commonSubjectList.length != 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("series", ctx_r3.chartOptions1.series)("chart", ctx_r3.chartOptions1.chart)("stroke", ctx_r3.chartOptions1.stroke)("dataLabels", ctx_r3.chartOptions1.dataLabels)("plotOptions", ctx_r3.chartOptions1.plotOptions)("xaxis", ctx_r3.chartOptions1.xaxis)("colors", ctx_r3.chartOptions1.colors)("fill", ctx_r3.chartOptions1.fill)("yaxis", ctx_r3.chartOptions1.yaxis)("legend", ctx_r3.chartOptions1.legend)("tooltip", ctx_r3.chartOptions1.toolTip);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("id", (ctx_r3.selectedContent == null ? null : ctx_r3.selectedContent.sub_topic) + (ctx_r3.selectedContent == null ? null : ctx_r3.selectedContent.question_sub_topic_id));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngbCollapse", !ctx_r3.showTable1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", tableDetails_r10);
} }
function SatReportComponent_div_23_ul_16_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 63)(1, "a", 64);
    i0.ɵɵlistener("click", function SatReportComponent_div_23_ul_16_li_1_Template_a_click_1_listener() { const subject_r14 = i0.ɵɵrestoreView(_r13).$implicit; const ctx_r3 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r3.tabSelected(subject_r14, "timeAnalysis")); });
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const subject_r14 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c5, ctx_r3.selectedTimeAnalysisSubject == subject_r14));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r14);
} }
function SatReportComponent_div_23_ul_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 76);
    i0.ɵɵtemplate(1, SatReportComponent_div_23_ul_16_li_1_Template, 4, 4, "li", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.commonSubjectList);
} }
function SatReportComponent_div_23_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 77)(1, "label", 16);
    i0.ɵɵtext(2, "Module Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ng-multiselect-dropdown", 78, 0);
    i0.ɵɵtwoWayListener("ngModelChange", function SatReportComponent_div_23_div_17_Template_ng_multiselect_dropdown_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r3 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r3.timeAnalysisModuleSelected, $event) || (ctx_r3.timeAnalysisModuleSelected = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("onSelect", function SatReportComponent_div_23_div_17_Template_ng_multiselect_dropdown_onSelect_3_listener() { i0.ɵɵrestoreView(_r15); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.buildSubTopicOrTimeOrErrorAnalysisChartOptions("timeAnalysis", "changed")); })("onDeSelect", function SatReportComponent_div_23_div_17_Template_ng_multiselect_dropdown_onDeSelect_3_listener() { i0.ɵɵrestoreView(_r15); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.timeAnalysisModuleSelected = []); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("placeholder", "Select Module Name")("settings", ctx_r3.questionAnalysisModuleSetting)("data", ctx_r3.selectedTimeModule);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.timeAnalysisModuleSelected);
} }
function SatReportComponent_div_23_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵelement(1, "img", 51);
    i0.ɵɵelementEnd();
} }
function SatReportComponent_div_23_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 65)(1, "div", 79);
    i0.ɵɵelement(2, "apx-chart", 80);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("series", ctx_r3.chartOptions2.series)("chart", ctx_r3.chartOptions2.chart)("xaxis", ctx_r3.chartOptions2.xaxis)("stroke", ctx_r3.chartOptions2.stroke)("colors", ctx_r3.chartOptions2.colors)("dataLabels", ctx_r3.chartOptions2.dataLabels)("legend", ctx_r3.chartOptions2.legend)("markers", ctx_r3.chartOptions2.markers)("grid", ctx_r3.chartOptions2.grid)("yaxis", ctx_r3.chartOptions2.yaxis)("title", ctx_r3.chartOptions2.title)("tooltip", ctx_r3.chartOptions2.toolTip);
} }
function SatReportComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "div", 69)(2, "div", 24)(3, "div", 9)(4, "div", 25)(5, "h4", 26);
    i0.ɵɵtext(6, "Time Analysis");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 25)(8, "p", 27)(9, "span", 70);
    i0.ɵɵelement(10, "i", 71);
    i0.ɵɵtext(11, "Actual Time Taken");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span", 72);
    i0.ɵɵelement(13, "i", 73);
    i0.ɵɵtext(14, "Predicted Solving Time");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "div", 10);
    i0.ɵɵtemplate(16, SatReportComponent_div_23_ul_16_Template, 2, 1, "ul", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(17, SatReportComponent_div_23_div_17_Template, 5, 4, "div", 36)(18, SatReportComponent_div_23_div_18_Template, 2, 0, "div", 75)(19, SatReportComponent_div_23_div_19_Template, 3, 12, "div", 34);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("ngIf", ctx_r3.tabShow != "content" && ctx_r3.commonSubjectList.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.tabShow != "content" && ctx_r3.selectedTimeModule.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.tabShow != "content" && ctx_r3.timeAnalysisModuleSelected.length == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.tabShow != "content" && ctx_r3.timeAnalysisModuleSelected.length != 0 || ctx_r3.tabShow == "content");
} }
function SatReportComponent_div_24_ul_24_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 63)(1, "a", 64);
    i0.ɵɵlistener("click", function SatReportComponent_div_24_ul_24_li_1_Template_a_click_1_listener() { const subject_r17 = i0.ɵɵrestoreView(_r16).$implicit; const ctx_r3 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r3.tabSelected(subject_r17, "errorAnalysis")); });
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const subject_r17 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c5, ctx_r3.selectedErrorAnalysisSubject == subject_r17));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r17);
} }
function SatReportComponent_div_24_ul_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 40);
    i0.ɵɵtemplate(1, SatReportComponent_div_24_ul_24_li_1_Template, 4, 4, "li", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.commonSubjectList);
} }
function SatReportComponent_div_24_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 77)(1, "label", 16);
    i0.ɵɵtext(2, "Module Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ng-multiselect-dropdown", 78, 0);
    i0.ɵɵtwoWayListener("ngModelChange", function SatReportComponent_div_24_div_25_Template_ng_multiselect_dropdown_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r3 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r3.errorAnalysisModuleSelected, $event) || (ctx_r3.errorAnalysisModuleSelected = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("onSelect", function SatReportComponent_div_24_div_25_Template_ng_multiselect_dropdown_onSelect_3_listener() { i0.ɵɵrestoreView(_r18); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.buildSubTopicOrTimeOrErrorAnalysisChartOptions("errorAnalysis", "changed")); })("onDeSelect", function SatReportComponent_div_24_div_25_Template_ng_multiselect_dropdown_onDeSelect_3_listener() { i0.ɵɵrestoreView(_r18); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.errorAnalysisModuleSelected = []); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("placeholder", "Select Module Name")("settings", ctx_r3.questionAnalysisModuleSetting)("data", ctx_r3.selectedErrorModule);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.errorAnalysisModuleSelected);
} }
function SatReportComponent_div_24_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵelement(1, "img", 51);
    i0.ɵɵelementEnd();
} }
function SatReportComponent_div_24_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 82);
    i0.ɵɵelement(2, "apx-chart", 83);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("series", ctx_r3.chartOptions3.series)("chart", ctx_r3.chartOptions3.chart)("dataLabels", ctx_r3.chartOptions3.dataLabels)("plotOptions", ctx_r3.chartOptions3.plotOptions)("yaxis", ctx_r3.chartOptions3.yaxis)("xaxis", ctx_r3.chartOptions3.xaxis)("legend", ctx_r3.chartOptions3.legend)("colors", ctx_r3.chartOptions3.colors)("grid", ctx_r3.chartOptions3.grid);
} }
function SatReportComponent_div_24_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function SatReportComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "div", 9)(4, "div", 25)(5, "h4", 26);
    i0.ɵɵtext(6, "Error Analysis");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h6", 54);
    i0.ɵɵtext(8, "Note: Click on the bar charts to view details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 25)(10, "p", 27)(11, "span", 32);
    i0.ɵɵelement(12, "i", 33);
    i0.ɵɵtext(13, " High (\u2265 90%) ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span", 28);
    i0.ɵɵelement(15, "i", 31);
    i0.ɵɵtext(16, " Mid-High (80\u201389%)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span", 28);
    i0.ɵɵelement(18, "i", 30);
    i0.ɵɵtext(19, " Moderate (50\u201379%)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "span", 28);
    i0.ɵɵelement(21, "i", 29);
    i0.ɵɵtext(22, " Low (< 50%)");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "div", 65);
    i0.ɵɵtemplate(24, SatReportComponent_div_24_ul_24_Template, 2, 1, "ul", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(25, SatReportComponent_div_24_div_25_Template, 5, 4, "div", 36)(26, SatReportComponent_div_24_div_26_Template, 2, 0, "div", 75)(27, SatReportComponent_div_24_div_27_Template, 3, 9, "div", 81);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 58)(29, "div", 59);
    i0.ɵɵtemplate(30, SatReportComponent_div_24_ng_container_30_Template, 1, 0, "ng-container", 60);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const tableDetails_r10 = i0.ɵɵreference(63);
    i0.ɵɵadvance(24);
    i0.ɵɵproperty("ngIf", ctx_r3.tabShow != "content" && ctx_r3.commonSubjectList.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.tabShow != "content" && ctx_r3.selectedErrorModule.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.tabShow != "content" && ctx_r3.errorAnalysisModuleSelected.length == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.tabShow != "content" && ctx_r3.errorAnalysisModuleSelected.length != 0 || ctx_r3.tabShow == "content");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("id", "error_analysis_", (ctx_r3.selectedContent == null ? null : ctx_r3.selectedContent.sub_topic) + (ctx_r3.selectedContent == null ? null : ctx_r3.selectedContent.question_sub_topic_id), "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngbCollapse", !ctx_r3.showTable2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", tableDetails_r10);
} }
function SatReportComponent_div_25_div_6_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 63)(1, "a", 64);
    i0.ɵɵlistener("click", function SatReportComponent_div_25_div_6_li_2_Template_a_click_1_listener() { const subject_r21 = i0.ɵɵrestoreView(_r20).$implicit; const ctx_r3 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r3.tabSelected(subject_r21, "questionAnalysis")); });
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const subject_r21 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c5, ctx_r3.selectedQuestionAnalysisSubject == subject_r21));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r21);
} }
function SatReportComponent_div_25_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "ul", 40);
    i0.ɵɵtemplate(2, SatReportComponent_div_25_div_6_li_2_Template, 4, 4, "li", 62);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.questionAnalysisSubjectList);
} }
function SatReportComponent_div_25_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 77)(1, "label", 16);
    i0.ɵɵtext(2, "Module Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ng-multiselect-dropdown", 78, 0);
    i0.ɵɵtwoWayListener("ngModelChange", function SatReportComponent_div_25_div_12_Template_ng_multiselect_dropdown_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r3 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r3.questionAnalysisModuleSelected, $event) || (ctx_r3.questionAnalysisModuleSelected = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("onSelect", function SatReportComponent_div_25_div_12_Template_ng_multiselect_dropdown_onSelect_3_listener() { i0.ɵɵrestoreView(_r22); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.formQuestionAnalysisData("changed")); })("onDeSelect", function SatReportComponent_div_25_div_12_Template_ng_multiselect_dropdown_onDeSelect_3_listener() { i0.ɵɵrestoreView(_r22); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.formQuestionAnalysisData("changed")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("placeholder", "Select Module Name")("settings", ctx_r3.questionAnalysisModuleSetting)("data", ctx_r3.selectedQuestionModule);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.questionAnalysisModuleSelected);
} }
function SatReportComponent_div_25_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 77)(1, "label", 16);
    i0.ɵɵtext(2, "Student Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ng-multiselect-dropdown", 47, 6);
    i0.ɵɵtwoWayListener("ngModelChange", function SatReportComponent_div_25_div_13_Template_ng_multiselect_dropdown_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r3 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r3.questionAnalysisStudentSelected, $event) || (ctx_r3.questionAnalysisStudentSelected = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("onSelect", function SatReportComponent_div_25_div_13_Template_ng_multiselect_dropdown_onSelect_3_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.onStudentChange($event, "single", "questionAnalysis")); })("onDeSelect", function SatReportComponent_div_25_div_13_Template_ng_multiselect_dropdown_onDeSelect_3_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.onStudentChange($event, "single", "questionAnalysis")); })("onSelectAll", function SatReportComponent_div_25_div_13_Template_ng_multiselect_dropdown_onSelectAll_3_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.onStudentChange($event, "all", "questionAnalysis")); })("onDeSelectAll", function SatReportComponent_div_25_div_13_Template_ng_multiselect_dropdown_onDeSelectAll_3_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.onStudentChange($event, "all", "questionAnalysis")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("placeholder", "Select Student")("settings", ctx_r3.settings3)("data", ctx_r3.questionAnalysisStudentList);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.questionAnalysisStudentSelected);
} }
function SatReportComponent_div_25_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function SatReportComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22)(1, "div", 23)(2, "div", 84)(3, "div", 9)(4, "h4", 85);
    i0.ɵɵtext(5, "Question By Question Analysis");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, SatReportComponent_div_25_div_6_Template, 3, 1, "div", 86);
    i0.ɵɵelementStart(7, "div")(8, "label", 16);
    i0.ɵɵtext(9, "Content Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "ng-multiselect-dropdown", 47, 0);
    i0.ɵɵtwoWayListener("ngModelChange", function SatReportComponent_div_25_Template_ng_multiselect_dropdown_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.questionAnalysisContentSelected, $event) || (ctx_r3.questionAnalysisContentSelected = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("onSelect", function SatReportComponent_div_25_Template_ng_multiselect_dropdown_onSelect_10_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onContentSelectionChange($event, "single", "questionAnalysis")); })("onDeSelect", function SatReportComponent_div_25_Template_ng_multiselect_dropdown_onDeSelect_10_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onContentSelectionChange($event, "single", "questionAnalysis")); })("onSelectAll", function SatReportComponent_div_25_Template_ng_multiselect_dropdown_onSelectAll_10_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onContentSelectionChange($event, "all", "questionAnalysis")); })("onDeSelectAll", function SatReportComponent_div_25_Template_ng_multiselect_dropdown_onDeSelectAll_10_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onContentSelectionChange($event, "all", "questionAnalysis")); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, SatReportComponent_div_25_div_12_Template, 5, 4, "div", 36)(13, SatReportComponent_div_25_div_13_Template, 5, 4, "div", 36);
    i0.ɵɵelementStart(14, "div", 65);
    i0.ɵɵtemplate(15, SatReportComponent_div_25_ng_container_15_Template, 1, 0, "ng-container", 60);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const questionAnalysis_r24 = i0.ɵɵreference(61);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r3.tabShow != "content");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-", ctx_r3.tabShow != "content" && ctx_r3.selectedQuestionModule.length != 0 ? "4" : "5", " mt-2");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("placeholder", "Select Content Name")("settings", ctx_r3.questionAnalysisSetting)("data", ctx_r3.contentList);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.questionAnalysisContentSelected);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.tabShow != "content" && ctx_r3.selectedQuestionModule.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.questionAnalysisStudentList.length != 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", questionAnalysis_r24);
} }
function SatReportComponent_div_47_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 63)(1, "a", 64);
    i0.ɵɵlistener("click", function SatReportComponent_div_47_li_2_Template_a_click_1_listener() { const subject_r26 = i0.ɵɵrestoreView(_r25).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.tabSelected(subject_r26, "mastery")); });
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const subject_r26 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c5, ctx_r3.selectedMasterySubject == subject_r26));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r26);
} }
function SatReportComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 65)(1, "ul", 40);
    i0.ɵɵtemplate(2, SatReportComponent_div_47_li_2_Template, 4, 4, "li", 62);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.masterySubjectList);
} }
function SatReportComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 77)(1, "label", 16);
    i0.ɵɵtext(2, "Student Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ng-multiselect-dropdown", 47, 6);
    i0.ɵɵtwoWayListener("ngModelChange", function SatReportComponent_div_53_Template_ng_multiselect_dropdown_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.masteryStudentSelected, $event) || (ctx_r3.masteryStudentSelected = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("onSelect", function SatReportComponent_div_53_Template_ng_multiselect_dropdown_onSelect_3_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onStudentChange($event, "single", "mastery")); })("onDeSelect", function SatReportComponent_div_53_Template_ng_multiselect_dropdown_onDeSelect_3_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onStudentChange($event, "single", "mastery")); })("onSelectAll", function SatReportComponent_div_53_Template_ng_multiselect_dropdown_onSelectAll_3_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onStudentChange($event, "all", "mastery")); })("onDeSelectAll", function SatReportComponent_div_53_Template_ng_multiselect_dropdown_onDeSelectAll_3_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onStudentChange($event, "all", "mastery")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("placeholder", "Select Student")("settings", ctx_r3.settings3)("data", ctx_r3.masteryStudentList);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.masteryStudentSelected);
} }
function SatReportComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 87)(1, "div", 15)(2, "button", 88);
    i0.ɵɵtext(3, "No Data Available! ");
    i0.ɵɵelementEnd()()();
} }
function SatReportComponent_div_56_div_1_div_3_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 100);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const progressbar_r29 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("- ", progressbar_r29 == null ? null : progressbar_r29.module_name, "");
} }
function SatReportComponent_div_56_div_1_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 97);
    i0.ɵɵlistener("click", function SatReportComponent_div_56_div_1_div_3_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r28); const progressbar_r29 = i0.ɵɵnextContext().$implicit; const i_r30 = i0.ɵɵnextContext().index; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.showMasterData(progressbar_r29, i_r30)); });
    i0.ɵɵelementStart(1, "span", 98);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, SatReportComponent_div_56_div_1_div_3_div_1_span_3_Template, 2, 1, "span", 99);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const progressbar_r29 = i0.ɵɵnextContext().$implicit;
    const mastery_r31 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", progressbar_r29.percentage, "%");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(6, _c7, progressbar_r29.percentage >= 90, progressbar_r29.percentage > 80 && progressbar_r29.percentage < 90, progressbar_r29.percentage > 50 && progressbar_r29.percentage <= 80, progressbar_r29.percentage < 50));
    i0.ɵɵattribute("aria-valuenow", mastery_r31.percentage);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(progressbar_r29.content_name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.tabShow != "content");
} }
function SatReportComponent_div_56_div_1_div_3_span_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 100);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const progressbar_r29 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("- ", progressbar_r29 == null ? null : progressbar_r29.module_name, "");
} }
function SatReportComponent_div_56_div_1_div_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 98);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, SatReportComponent_div_56_div_1_div_3_span_2_span_2_Template, 2, 1, "span", 99);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const progressbar_r29 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(progressbar_r29.content_name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.tabShow != "content");
} }
function SatReportComponent_div_56_div_1_div_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 101);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const progressbar_r29 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", progressbar_r29.percentage, "%");
} }
function SatReportComponent_div_56_div_1_div_3_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 101);
    i0.ɵɵtext(1, " - N/A");
    i0.ɵɵelementEnd();
} }
function SatReportComponent_div_56_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 93);
    i0.ɵɵtemplate(1, SatReportComponent_div_56_div_1_div_3_div_1_Template, 4, 11, "div", 94)(2, SatReportComponent_div_56_div_1_div_3_span_2_Template, 3, 2, "span", 95)(3, SatReportComponent_div_56_div_1_div_3_span_3_Template, 2, 1, "span", 96)(4, SatReportComponent_div_56_div_1_div_3_span_4_Template, 2, 0, "span", 96);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const progressbar_r29 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("progress cursor my-2 ", ctx_r3.parseInt(progressbar_r29.percentage) == 0 ? "justify-content-center" : "", "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c6, progressbar_r29.percentage == 0 && progressbar_r29.student_content_id != "0"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.parseInt(progressbar_r29.percentage) != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.parseInt(progressbar_r29.percentage) == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", progressbar_r29.student_content_id != "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", progressbar_r29.student_content_id == "0");
} }
function SatReportComponent_div_56_div_1_div_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function SatReportComponent_div_56_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 102)(1, "div", 10)(2, "div", 103)(3, "div", 104)(4, "div", 59);
    i0.ɵɵtemplate(5, SatReportComponent_div_56_div_1_div_4_ng_container_5_Template, 1, 0, "ng-container", 60);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    const tableDetails_r10 = i0.ɵɵreference(63);
    i0.ɵɵpropertyInterpolate1("id", "master_analysis_", (ctx_r3.selectedContent == null ? null : ctx_r3.selectedContent.sub_topic) + (ctx_r3.selectedContent == null ? null : ctx_r3.selectedContent.question_sub_topic_id), "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngbCollapse", !ctx_r3.showTable3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", tableDetails_r10);
} }
function SatReportComponent_div_56_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "h5", 90);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SatReportComponent_div_56_div_1_div_3_Template, 5, 10, "div", 91)(4, SatReportComponent_div_56_div_1_div_4_Template, 6, 4, "div", 92);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const mastery_r31 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(mastery_r31.question_sub_topic_name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", mastery_r31.data);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", mastery_r31.showStudentData);
} }
function SatReportComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, SatReportComponent_div_56_div_1_Template, 5, 3, "div", 89);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.masteryData);
} }
function SatReportComponent_div_57_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function SatReportComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48)(1, "div", 49)(2, "div", 9)(3, "div", 10)(4, "h4", 26);
    i0.ɵɵtext(5, "Overall Summary");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, SatReportComponent_div_57_ng_container_6_Template, 1, 0, "ng-container", 52);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const summaryAndTotalContentReport_r7 = i0.ɵɵreference(65);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngTemplateOutlet", summaryAndTotalContentReport_r7)("ngTemplateOutletContext", i0.ɵɵpureFunction1(4, _c4, i0.ɵɵpureFunction1(2, _c3, ctx_r3.overallSummary)));
} }
function SatReportComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 105)(1, "h5", 106);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 107);
    i0.ɵɵlistener("click", function SatReportComponent_ng_template_58_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r32); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 108, 7);
    i0.ɵɵelement(6, "app-question-report", 109);
    i0.ɵɵelementStart(7, "i", 110);
    i0.ɵɵlistener("click", function SatReportComponent_ng_template_58_Template_i_click_7_listener() { i0.ɵɵrestoreView(_r32); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.windowScrollUp()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 111)(9, "div", 112)(10, "button", 113);
    i0.ɵɵlistener("click", function SatReportComponent_ng_template_58_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r32); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.modalRef.close()); });
    i0.ɵɵtext(11, "Close");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.selectedContent == null ? null : ctx_r3.selectedContent.content_name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("questionArray", ctx_r3.questionArray)("showFullQuestion", ctx_r3.showAllQuestion)("topicId", ctx_r3.showAllQuestion ? i0.ɵɵpureFunction0(10, _c8) : ctx_r3.selectedContent == null ? null : ctx_r3.selectedContent.question_topic_id)("subTopicId", ctx_r3.showAllQuestion ? "" : ctx_r3.selectedContent.question_sub_topic_id)("student_content_id", ctx_r3.selectedContent == null ? null : ctx_r3.selectedContent.student_content_id)("selectedQuestion", ctx_r3.selectedQuestion)("selectedType", ctx_r3.showAllQuestion ? "" : ctx_r3.showTable ? "topic" : "subTopic")("showAll", ctx_r3.nameOrContentSelected ? ctx_r3.nameOrContentSelected : ctx_r3.selectedContent.showAll);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c9, ctx_r3.showScroll));
} }
function SatReportComponent_ng_template_60_div_6_th_5_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 126)(1, "span", 127);
    i0.ɵɵlistener("click", function SatReportComponent_ng_template_60_div_6_th_5_Template_span_click_1_listener() { const student_r34 = i0.ɵɵrestoreView(_r33).$implicit; const ctx_r3 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r3.questionSelectedFromTable(student_r34.question_no, "questionAnalysis")); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const student_r34 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r3.questionAnalysisListData.length < 2 ? "cursor" : "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(student_r34.question_no);
} }
function SatReportComponent_ng_template_60_div_6_tr_7_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 131);
    i0.ɵɵlistener("click", function SatReportComponent_ng_template_60_div_6_tr_7_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r35); const student_r36 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r3.openContent(student_r36, "questionAnalysis")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_13_0;
    const student_r36 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((tmp_13_0 = student_r36 == null ? null : student_r36.student_name) !== null && tmp_13_0 !== undefined ? tmp_13_0 : "-");
} }
function SatReportComponent_ng_template_60_div_6_tr_7_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 132);
    i0.ɵɵtext(1, "Total Correct Answer");
    i0.ɵɵelementEnd();
} }
function SatReportComponent_ng_template_60_div_6_tr_7_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 132);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_13_0;
    const student_r36 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((tmp_13_0 = student_r36 == null ? null : student_r36.student_name) !== null && tmp_13_0 !== undefined ? tmp_13_0 : "-");
} }
function SatReportComponent_ng_template_60_div_6_tr_7_td_5_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 136);
    i0.ɵɵlistener("click", function SatReportComponent_ng_template_60_div_6_tr_7_td_5_i_1_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r37); const data_r38 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(4); ctx_r3.showAllQuestion = false; return i0.ɵɵresetView(ctx_r3.studentsAnswerList(data_r38, data_r38.question_no, "questionAnalysis")); });
    i0.ɵɵelementEnd();
} }
function SatReportComponent_ng_template_60_div_6_tr_7_td_5_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 137);
    i0.ɵɵlistener("click", function SatReportComponent_ng_template_60_div_6_tr_7_td_5_i_2_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r39); const data_r38 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(4); ctx_r3.showAllQuestion = false; return i0.ɵɵresetView(ctx_r3.studentsAnswerList(data_r38, data_r38.question_no, "questionAnalysis")); });
    i0.ɵɵelementEnd();
} }
function SatReportComponent_ng_template_60_div_6_tr_7_td_5_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 138);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r38 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngClass", ctx_r3.calculatePercentage(data_r38.total_in_correct_answer, data_r38.total_questions) <= "25" ? "" : ctx_r3.calculatePercentage(data_r38.total_in_correct_answer, data_r38.total_questions) <= "50" ? "text-yellow" : "text-red");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", data_r38.total_in_correct_answer, "/", data_r38.total_questions, " ");
} }
function SatReportComponent_ng_template_60_div_6_tr_7_td_5_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 138);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r38 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngClass", ctx_r3.calculatePercentage(data_r38.total_correct_answer, data_r38.total_questions) <= "50" ? "text-red" : ctx_r3.calculatePercentage(data_r38.total_correct_answer, data_r38.total_questions) <= "80" ? "text-yellow" : ctx_r3.calculatePercentage(data_r38.total_correct_answer, data_r38.total_questions) <= "90" ? "text-green" : "text-blue");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", data_r38.total_correct_answer, "/", data_r38.total_questions, " ");
} }
function SatReportComponent_ng_template_60_div_6_tr_7_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 126);
    i0.ɵɵtemplate(1, SatReportComponent_ng_template_60_div_6_tr_7_td_5_i_1_Template, 1, 0, "i", 133)(2, SatReportComponent_ng_template_60_div_6_tr_7_td_5_i_2_Template, 1, 0, "i", 134)(3, SatReportComponent_ng_template_60_div_6_tr_7_td_5_span_3_Template, 2, 3, "span", 135)(4, SatReportComponent_ng_template_60_div_6_tr_7_td_5_span_4_Template, 2, 3, "span", 135);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r38 = ctx.$implicit;
    const first_r40 = i0.ɵɵnextContext().first;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r38.is_correct == "true");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r38.is_correct == "false");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", first_r40 && !ctx_r3.showTable3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", first_r40 && ctx_r3.showTable3);
} }
function SatReportComponent_ng_template_60_div_6_tr_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 128)(1, "td", 123);
    i0.ɵɵtemplate(2, SatReportComponent_ng_template_60_div_6_tr_7_span_2_Template, 2, 1, "span", 129)(3, SatReportComponent_ng_template_60_div_6_tr_7_span_3_Template, 2, 0, "span", 130)(4, SatReportComponent_ng_template_60_div_6_tr_7_span_4_Template, 2, 1, "span", 130);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, SatReportComponent_ng_template_60_div_6_tr_7_td_5_Template, 5, 4, "td", 124);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const student_r36 = ctx.$implicit;
    const first_r40 = ctx.first;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", first_r40 ? "tableFixedRow" : "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !first_r40);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", first_r40 && ctx_r3.showTable3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", first_r40 && !ctx_r3.showTable3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", student_r36 == null ? null : student_r36.questionData);
} }
function SatReportComponent_ng_template_60_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 120)(1, "table", 121)(2, "thead", 122)(3, "th", 123);
    i0.ɵɵtext(4, "Question");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, SatReportComponent_ng_template_60_div_6_th_5_Template, 3, 4, "th", 124);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "tbody");
    i0.ɵɵtemplate(7, SatReportComponent_ng_template_60_div_6_tr_7_Template, 6, 5, "tr", 125);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r3.questionAnalysisListData[1] == null ? null : ctx_r3.questionAnalysisListData[1].questionData);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.questionAnalysisListData);
} }
function SatReportComponent_ng_template_60_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 139)(1, "div", 15)(2, "button", 140);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function SatReportComponent_ng_template_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 114)(2, "div", 115)(3, "h4", 116)(4, "span", 117);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(6, SatReportComponent_ng_template_60_div_6_Template, 8, 2, "div", 118)(7, SatReportComponent_ng_template_60_div_7_Template, 4, 0, "div", 119);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r3.questionAnalysisContentSelected[0] == null ? null : ctx_r3.questionAnalysisContentSelected[0].content_name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.questionAnalysisListData.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.questionAnalysisListData.length == 0);
} }
function SatReportComponent_ng_template_62_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((ctx_r3.selectedContent == null ? null : ctx_r3.selectedContent.question_topic_id) ? ctx_r3.selectedContent == null ? null : ctx_r3.selectedContent.question_topic : ctx_r3.selectedContent == null ? null : ctx_r3.selectedContent.sub_topic);
} }
function SatReportComponent_ng_template_62_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 147);
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function SatReportComponent_ng_template_62_th_17_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 126)(1, "span", 127);
    i0.ɵɵlistener("click", function SatReportComponent_ng_template_62_th_17_Template_span_click_1_listener() { const student_r43 = i0.ɵɵrestoreView(_r42).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.questionSelectedFromTable(student_r43.question_no)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const student_r43 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r3.studentQuestionListData.length <= 2 ? "cursor" : "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(student_r43.question_no);
} }
function SatReportComponent_ng_template_62_tr_19_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 131);
    i0.ɵɵlistener("click", function SatReportComponent_ng_template_62_tr_19_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r44); const student_r45 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.openContent(student_r45, "graph")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_12_0;
    const student_r45 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((tmp_12_0 = student_r45 == null ? null : student_r45.student_name) !== null && tmp_12_0 !== undefined ? tmp_12_0 : "-");
} }
function SatReportComponent_ng_template_62_tr_19_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 132);
    i0.ɵɵtext(1, "Total Correct Answer");
    i0.ɵɵelementEnd();
} }
function SatReportComponent_ng_template_62_tr_19_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 132);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_12_0;
    const student_r45 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((tmp_12_0 = student_r45 == null ? null : student_r45.student_name) !== null && tmp_12_0 !== undefined ? tmp_12_0 : "-");
} }
function SatReportComponent_ng_template_62_tr_19_td_5_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 136);
    i0.ɵɵlistener("click", function SatReportComponent_ng_template_62_tr_19_td_5_i_1_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r46); const data_r47 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(3); ctx_r3.showAllQuestion = false; return i0.ɵɵresetView(ctx_r3.studentsAnswerList(data_r47, data_r47.question_no)); });
    i0.ɵɵelementEnd();
} }
function SatReportComponent_ng_template_62_tr_19_td_5_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 137);
    i0.ɵɵlistener("click", function SatReportComponent_ng_template_62_tr_19_td_5_i_2_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r48); const data_r47 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(3); ctx_r3.showAllQuestion = false; return i0.ɵɵresetView(ctx_r3.studentsAnswerList(data_r47, data_r47.question_no)); });
    i0.ɵɵelementEnd();
} }
function SatReportComponent_ng_template_62_tr_19_td_5_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 138);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r47 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", ctx_r3.calculatePercentage(data_r47.total_in_correct_answer, data_r47.total_questions) <= "25" ? "" : ctx_r3.calculatePercentage(data_r47.total_in_correct_answer, data_r47.total_questions) <= "50" ? "text-yellow" : "text-red");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", data_r47.total_in_correct_answer, "/", data_r47.total_questions, " ");
} }
function SatReportComponent_ng_template_62_tr_19_td_5_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 138);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r47 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", ctx_r3.calculatePercentage(data_r47.total_correct_answer, data_r47.total_questions) <= "50" ? "text-red" : ctx_r3.calculatePercentage(data_r47.total_correct_answer, data_r47.total_questions) <= "80" ? "text-yellow" : ctx_r3.calculatePercentage(data_r47.total_correct_answer, data_r47.total_questions) <= "90" ? "text-green" : "text-blue");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", data_r47.total_correct_answer, "/", data_r47.total_questions, " ");
} }
function SatReportComponent_ng_template_62_tr_19_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 126);
    i0.ɵɵtemplate(1, SatReportComponent_ng_template_62_tr_19_td_5_i_1_Template, 1, 0, "i", 133)(2, SatReportComponent_ng_template_62_tr_19_td_5_i_2_Template, 1, 0, "i", 134)(3, SatReportComponent_ng_template_62_tr_19_td_5_span_3_Template, 2, 3, "span", 135)(4, SatReportComponent_ng_template_62_tr_19_td_5_span_4_Template, 2, 3, "span", 135);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r47 = ctx.$implicit;
    const first_r49 = i0.ɵɵnextContext().first;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r47.is_correct == "true");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r47.is_correct == "false");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", first_r49 && !ctx_r3.showTable3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", first_r49 && ctx_r3.showTable3);
} }
function SatReportComponent_ng_template_62_tr_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 128)(1, "td", 123);
    i0.ɵɵtemplate(2, SatReportComponent_ng_template_62_tr_19_span_2_Template, 2, 1, "span", 129)(3, SatReportComponent_ng_template_62_tr_19_span_3_Template, 2, 0, "span", 130)(4, SatReportComponent_ng_template_62_tr_19_span_4_Template, 2, 1, "span", 130);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, SatReportComponent_ng_template_62_tr_19_td_5_Template, 5, 4, "td", 124);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const student_r45 = ctx.$implicit;
    const first_r49 = ctx.first;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", first_r49 ? "tableFixedRow" : "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !first_r49);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", first_r49 && ctx_r3.showTable3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", first_r49 && !ctx_r3.showTable3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", student_r45 == null ? null : student_r45.questionData);
} }
function SatReportComponent_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 114)(2, "div", 115)(3, "h4", 141);
    i0.ɵɵtemplate(4, SatReportComponent_ng_template_62_span_4_Template, 2, 1, "span", 142)(5, SatReportComponent_ng_template_62_span_5_Template, 2, 0, "span", 143);
    i0.ɵɵelementStart(6, "span", 117);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "h6", 144)(9, "input", 145);
    i0.ɵɵlistener("change", function SatReportComponent_ng_template_62_Template_input_change_9_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.showAllSelected($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "label", 146);
    i0.ɵɵtext(11, "Show All");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 120)(13, "table", 121)(14, "thead", 122)(15, "th", 123);
    i0.ɵɵtext(16, "Question");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(17, SatReportComponent_ng_template_62_th_17_Template, 3, 4, "th", 124);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "tbody");
    i0.ɵɵtemplate(19, SatReportComponent_ng_template_62_tr_19_Template, 6, 5, "tr", 125);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !(ctx_r3.selectedContent == null ? null : ctx_r3.selectedContent.showAll));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(ctx_r3.selectedContent == null ? null : ctx_r3.selectedContent.showAll));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.selectedContent == null ? null : ctx_r3.selectedContent.content_name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", ctx_r3.selectedContent == null ? null : ctx_r3.selectedContent.showAll);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r3.studentQuestionListData[1] == null ? null : ctx_r3.studentQuestionListData[1].questionData);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.studentQuestionListData);
} }
function SatReportComponent_ng_template_64_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 149);
    i0.ɵɵtext(1, "Student Name");
    i0.ɵɵelementEnd();
} }
function SatReportComponent_ng_template_64_th_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 149);
    i0.ɵɵtext(1, "Overall Score");
    i0.ɵɵelementEnd();
} }
function SatReportComponent_ng_template_64_th_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 149);
    i0.ɵɵtext(1, "Raw Score");
    i0.ɵɵelementEnd();
} }
function SatReportComponent_ng_template_64_th_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 149);
    i0.ɵɵtext(1, "Math Score");
    i0.ɵɵelementEnd();
} }
function SatReportComponent_ng_template_64_th_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 149);
    i0.ɵɵtext(1, "R&W Score");
    i0.ɵɵelementEnd();
} }
function SatReportComponent_ng_template_64_th_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 149);
    i0.ɵɵtext(1, "Calculated Score");
    i0.ɵɵelementEnd();
} }
function SatReportComponent_ng_template_64_ng_container_18_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 154)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_13_0;
    const report_r52 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_13_0 = report_r52.student_name) !== null && tmp_13_0 !== undefined ? tmp_13_0 : "-");
} }
function SatReportComponent_ng_template_64_ng_container_18_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function SatReportComponent_ng_template_64_ng_container_18_td_18_span_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function SatReportComponent_ng_template_64_ng_container_18_td_18_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 100);
    i0.ɵɵtext(1, "(");
    i0.ɵɵtemplate(2, SatReportComponent_ng_template_64_ng_container_18_td_18_span_3_ng_container_2_Template, 1, 0, "ng-container", 52);
    i0.ɵɵtext(3, ") ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const report_r52 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(2);
    const percentageTemplate_r55 = i0.ɵɵreference(67);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", percentageTemplate_r55)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c10, report_r52.Math_Percentage));
} }
function SatReportComponent_ng_template_64_ng_container_18_td_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 154)(1, "span", 158);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SatReportComponent_ng_template_64_ng_container_18_td_18_span_3_Template, 4, 4, "span", 99);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_13_0;
    const report_r52 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_13_0 = report_r52.math_score) !== null && tmp_13_0 !== undefined ? tmp_13_0 : "-");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", report_r52.Math_Percentage != "");
} }
function SatReportComponent_ng_template_64_ng_container_18_td_19_span_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function SatReportComponent_ng_template_64_ng_container_18_td_19_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 100);
    i0.ɵɵtext(1, "(");
    i0.ɵɵtemplate(2, SatReportComponent_ng_template_64_ng_container_18_td_19_span_3_ng_container_2_Template, 1, 0, "ng-container", 52);
    i0.ɵɵtext(3, ") ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const report_r52 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(2);
    const percentageTemplate_r55 = i0.ɵɵreference(67);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", percentageTemplate_r55)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c10, report_r52.RW_Percentage));
} }
function SatReportComponent_ng_template_64_ng_container_18_td_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 154)(1, "span", 158);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SatReportComponent_ng_template_64_ng_container_18_td_19_span_3_Template, 4, 4, "span", 99);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_13_0;
    const report_r52 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_13_0 = report_r52.rw_score) !== null && tmp_13_0 !== undefined ? tmp_13_0 : "-");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", report_r52.RW_Percentage != "");
} }
function SatReportComponent_ng_template_64_ng_container_18_td_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 154)(1, "span", 158);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_13_0;
    const report_r52 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_13_0 = report_r52.score) !== null && tmp_13_0 !== undefined ? tmp_13_0 : "-");
} }
function SatReportComponent_ng_template_64_ng_container_18_tr_39_span_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 163);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const module_r57 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((module_r57 == null ? null : module_r57.percentage) + "%");
} }
function SatReportComponent_ng_template_64_ng_container_18_tr_39_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 164);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const module_r57 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(module_r57.percentage + "%");
} }
function SatReportComponent_ng_template_64_ng_container_18_tr_39_span_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 165);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const module_r57 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((module_r57 == null ? null : module_r57.percentage) + "%");
} }
function SatReportComponent_ng_template_64_ng_container_18_tr_39_span_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 166);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const module_r57 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((module_r57 == null ? null : module_r57.percentage) + "%");
} }
function SatReportComponent_ng_template_64_ng_container_18_tr_39_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 152)(2, "span", 131);
    i0.ɵɵlistener("click", function SatReportComponent_ng_template_64_ng_container_18_tr_39_Template_span_click_2_listener() { const module_r57 = i0.ɵɵrestoreView(_r56).$implicit; const ctx_r3 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r3.openContent(module_r57)); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td", 154)(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td", 154)(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "customDateFormat");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "td", 154)(12, "span");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "td", 154)(15, "span");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td", 154);
    i0.ɵɵtemplate(18, SatReportComponent_ng_template_64_ng_container_18_tr_39_span_18_Template, 2, 1, "span", 159)(19, SatReportComponent_ng_template_64_ng_container_18_tr_39_span_19_Template, 2, 1, "span", 160)(20, SatReportComponent_ng_template_64_ng_container_18_tr_39_span_20_Template, 2, 1, "span", 161)(21, SatReportComponent_ng_template_64_ng_container_18_tr_39_span_21_Template, 2, 1, "span", 162);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_15_0;
    let tmp_16_0;
    let tmp_18_0;
    let tmp_19_0;
    const module_r57 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((tmp_15_0 = module_r57 == null ? null : module_r57.module_name) !== null && tmp_15_0 !== undefined ? tmp_15_0 : "-");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((tmp_16_0 = module_r57 == null ? null : module_r57.subject_name) !== null && tmp_16_0 !== undefined ? tmp_16_0 : "-");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((module_r57 == null ? null : module_r57.content_start_date) ? i0.ɵɵpipeBind1(10, 9, module_r57 == null ? null : module_r57.content_start_date) : "-");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate((tmp_18_0 = module_r57 == null ? null : module_r57.correct_answer) !== null && tmp_18_0 !== undefined ? tmp_18_0 : "-");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((tmp_19_0 = module_r57 == null ? null : module_r57.incorrect_answer) !== null && tmp_19_0 !== undefined ? tmp_19_0 : "-");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (module_r57 == null ? null : module_r57.percentage) >= 90);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (module_r57 == null ? null : module_r57.percentage) >= 80 && (module_r57 == null ? null : module_r57.percentage) < 90);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (module_r57 == null ? null : module_r57.percentage) > 50 && (module_r57 == null ? null : module_r57.percentage) < 80);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (module_r57 == null ? null : module_r57.percentage) < 50);
} }
function SatReportComponent_ng_template_64_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "tr")(2, "td", 152)(3, "span", 131);
    i0.ɵɵlistener("click", function SatReportComponent_ng_template_64_ng_container_18_Template_span_click_3_listener() { const ctx_r50 = i0.ɵɵrestoreView(_r50); const report_r52 = ctx_r50.$implicit; const i_r53 = ctx_r50.index; const context_r54 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.tabShow === "content" ? ctx_r3.openContent(report_r52) : ctx_r3.openAccordian(i_r53, context_r54 == null ? null : context_r54.data)); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, SatReportComponent_ng_template_64_ng_container_18_td_5_Template, 3, 1, "td", 153);
    i0.ɵɵelementStart(6, "td", 154)(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "customDateFormat");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "td", 154)(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "td", 154)(14, "span");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "td", 154);
    i0.ɵɵtemplate(17, SatReportComponent_ng_template_64_ng_container_18_ng_container_17_Template, 1, 0, "ng-container", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(18, SatReportComponent_ng_template_64_ng_container_18_td_18_Template, 4, 2, "td", 153)(19, SatReportComponent_ng_template_64_ng_container_18_td_19_Template, 4, 2, "td", 153)(20, SatReportComponent_ng_template_64_ng_container_18_td_20_Template, 3, 1, "td", 153);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "tr", 155)(22, "td", 156)(23, "div", 157)(24, "table", 148)(25, "thead", 122)(26, "th", 152);
    i0.ɵɵtext(27, "Module Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "th", 152);
    i0.ɵɵtext(29, "Subject Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "th", 152);
    i0.ɵɵtext(31, "Test Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "th", 152);
    i0.ɵɵtext(33, "Correct Answers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "th", 152);
    i0.ɵɵtext(35, "Incorrect Answers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "th", 152);
    i0.ɵɵtext(37, "Raw Score");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "tbody");
    i0.ɵɵtemplate(39, SatReportComponent_ng_template_64_ng_container_18_tr_39_Template, 22, 11, "tr", 151);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    let tmp_12_0;
    let tmp_15_0;
    let tmp_16_0;
    const report_r52 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    const percentageTemplate_r55 = i0.ɵɵreference(67);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate((tmp_12_0 = report_r52.content_name) !== null && tmp_12_0 !== undefined ? tmp_12_0 : "-");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.auth.getRoleId() != "5");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(report_r52.content_start_date ? i0.ɵɵpipeBind1(9, 12, report_r52.content_start_date) : "-");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate((tmp_15_0 = report_r52.correct_answer) !== null && tmp_15_0 !== undefined ? tmp_15_0 : "-");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((tmp_16_0 = report_r52.incorrect_answer) !== null && tmp_16_0 !== undefined ? tmp_16_0 : "-");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", percentageTemplate_r55)("ngTemplateOutletContext", i0.ɵɵpureFunction1(14, _c10, report_r52.percentage));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.tabShow != "content");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.tabShow != "content");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.tabShow != "content");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngbCollapse", !report_r52.showAccordian);
    i0.ɵɵadvance(18);
    i0.ɵɵproperty("ngForOf", report_r52 == null ? null : report_r52.modules);
} }
function SatReportComponent_ng_template_64_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 120)(1, "table", 148)(2, "thead", 122)(3, "th", 149);
    i0.ɵɵtext(4, "Content Name");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, SatReportComponent_ng_template_64_th_5_Template, 2, 0, "th", 150);
    i0.ɵɵelementStart(6, "th", 149);
    i0.ɵɵtext(7, "Test Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th", 149);
    i0.ɵɵtext(9, "Correct Answers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th", 149);
    i0.ɵɵtext(11, "Incorrect Answers");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, SatReportComponent_ng_template_64_th_12_Template, 2, 0, "th", 150)(13, SatReportComponent_ng_template_64_th_13_Template, 2, 0, "th", 150)(14, SatReportComponent_ng_template_64_th_14_Template, 2, 0, "th", 150)(15, SatReportComponent_ng_template_64_th_15_Template, 2, 0, "th", 150)(16, SatReportComponent_ng_template_64_th_16_Template, 2, 0, "th", 150);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "tbody");
    i0.ɵɵtemplate(18, SatReportComponent_ng_template_64_ng_container_18_Template, 40, 16, "ng-container", 151);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const context_r54 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r3.auth.getRoleId() != "5");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r3.tabShow == "content");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.tabShow != "content");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.tabShow != "content");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.tabShow != "content");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.tabShow != "content");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", context_r54 == null ? null : context_r54.data);
} }
function SatReportComponent_ng_template_66_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 163);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r58 = i0.ɵɵnextContext().value;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(value_r58 + "%");
} }
function SatReportComponent_ng_template_66_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 164);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r58 = i0.ɵɵnextContext().value;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(value_r58 + "%");
} }
function SatReportComponent_ng_template_66_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 165);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r58 = i0.ɵɵnextContext().value;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(value_r58 + "%");
} }
function SatReportComponent_ng_template_66_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 166);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r58 = i0.ɵɵnextContext().value;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(value_r58 + "%");
} }
function SatReportComponent_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SatReportComponent_ng_template_66_span_0_Template, 2, 1, "span", 159)(1, SatReportComponent_ng_template_66_span_1_Template, 2, 1, "span", 167)(2, SatReportComponent_ng_template_66_span_2_Template, 2, 1, "span", 168)(3, SatReportComponent_ng_template_66_span_3_Template, 2, 1, "span", 162);
} if (rf & 2) {
    const value_r58 = ctx.value;
    i0.ɵɵproperty("ngIf", value_r58 >= 90);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", value_r58 >= 80 && value_r58 < 90);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", value_r58 > 50 && value_r58 < 80);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", value_r58 <= 50);
} }
export class SatReportComponent {
    constructor() {
        this.studentList = [];
        this.settings1 = {};
        this.settings2 = {
            singleSelection: false,
            idField: 'student_id',
            textField: 'student_name',
            enableCheckAll: true,
            selectAllText: 'Select all',
            unSelectAllText: 'UnSelect all',
            allowSearchFilter: true,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 139,
            itemsShowLimit: 3,
            searchPlaceholderText: 'Search Student',
            noDataAvailablePlaceholderText: 'No student available',
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
        };
        this.settings3 = {
            singleSelection: false,
            idField: 'student_id',
            textField: 'student_name',
            enableCheckAll: true,
            selectAllText: 'Select all',
            unSelectAllText: 'UnSelect all',
            allowSearchFilter: true,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 139,
            itemsShowLimit: 3,
            searchPlaceholderText: 'Search Student',
            noDataAvailablePlaceholderText: 'No student available',
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
        };
        this.selectClass = [];
        this.contentSelected = [];
        this.studentSelected = [];
        this.commonContentList = { content: [], sat: [], act: [] };
        this.contentList = [];
        this.showTable = false;
        this.showTable1 = false;
        this.showTable2 = false;
        this.showTable3 = false;
        this.auth = inject(AuthService);
        this.creatorService = inject(CreatorService);
        this.navService = inject(NavService);
        this.modalService = inject(NgbModal);
        this.teacher = inject(TeacherService);
        this.cdr = inject(ChangeDetectorRef);
        this.router = inject(Router);
        this.selectedQuestion = 0;
        this.questionArray = [];
        this.totalReport = [];
        this.questionAnalysisRecord = [];
        this.selectedQuestionModule = [];
        this.selectedErrorModule = [];
        this.selectedTimeModule = [];
        this.totalMasteryRecord = [];
        this.dataloaded = false;
        this.masteryContentSelected = [];
        this.masteryStudentSelected = [];
        this.masteryStudentList = [];
        this.masteryData = [];
        this.questionAnalysisContentSelected = {};
        this.questionAnalysisStudentSelected = [];
        this.questionAnalysisStudentList = [];
        this.parseInt = parseInt;
        this.studentQuestionListData = [];
        this.questionAnalysisListData = [];
        this.showAllQuestion = false;
        this.overallSummary = [];
        this.allowSingleSelectStudent = false;
        this.summaryRecordListData = [];
        this.questionAnalysisSetting = {
            singleSelection: true,
            idField: 'content_id',
            textField: 'content_name',
            allowSearchFilter: true,
            clearSearchFilter: true,
            maxHeight: 139,
            searchPlaceholderText: 'Search Content',
            noDataAvailablePlaceholderText: 'No Content available',
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
        };
        this.tabShow = 'content';
        this.testTypeListData = [];
        this.questionAnalysisSubjectList = [];
        this.masterySubjectList = [];
        this.commonSubjectList = [];
        this.selectedTopicSubject = '';
        this.selectedSubTopicSubject = '';
        this.selectedTimeAnalysisSubject = '';
        this.selectedErrorAnalysisSubject = '';
        this.selectedMasterySubject = '';
        this.selectedQuestionAnalysisSubject = '';
        this.reportCalledFrom = '';
        this.questionAnalysisModuleSetting = {
            singleSelection: true,
            idField: 'module_id',
            textField: 'module_name',
            allowSearchFilter: true,
            clearSearchFilter: true,
            maxHeight: 139,
            searchPlaceholderText: 'Search Module',
            noDataAvailablePlaceholderText: 'No Module available',
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
        };
        this.questionAnalysisModuleSelected = {};
        this.errorAnalysisModuleSelected = {};
        this.timeAnalysisModuleSelected = {};
        this.showContentTypeTab = false;
        this.nameOrContentSelected = false;
        this.showScroll = false;
        this.showScrollHeight = 300;
        this.hideScrollHeight = 10;
        this.settings1 = {
            singleSelection: false,
            idField: this.auth.getRoleId() == '5' ? 'student_content_id' : 'content_id',
            textField: 'content_name',
            enableCheckAll: true,
            selectAllText: 'Select all',
            unSelectAllText: 'UnSelect all',
            allowSearchFilter: true,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 139,
            itemsShowLimit: 2,
            searchPlaceholderText: 'Search Content',
            noDataAvailablePlaceholderText: 'No data available',
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
        };
        this.studentData = this.auth.getSessionData('satReportData') ? JSON.parse(this.auth.getSessionData('satReportData')) : null;
        console.log(this.studentData, 'studentData');
        this.testTypeList();
    }
    ngOnInit() {
        this.reportCalledFrom = this.auth.getSessionData('reportCalledFrom') ?? '';
        this.creatorService.changeViewList(true);
        this.navService.collapseSidebar = true;
    }
    ngAfterViewInit() {
        if (this.modalBody) {
            this.modalBody.nativeElement.addEventListener('scroll', () => this.onModalScroll());
        }
    }
    ngOnDestroy() {
        this.creatorService.changeViewList(false);
        this.navService.collapseSidebar = false;
    }
    studentSetting() {
        this.settings2 = {
            singleSelection: this.allowSingleSelectStudent,
            idField: 'student_id',
            textField: 'student_name',
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
    }
    setSeriesAndCategories(objectName, keyId, keyName, calledBy = '') {
        const idArray = [];
        const isContentTab = this.tabShow === 'content';
        this.totalReport.forEach(content => {
            if (!isContentTab) {
                content.subject.forEach((subject) => {
                    const selectedSubject = calledBy == 'subTopic' ? this.selectedSubTopicSubject : calledBy == 'timeAnalysis' ? this.selectedTimeAnalysisSubject
                        : calledBy == 'errorAnalysis' ? this.selectedErrorAnalysisSubject : this.selectedTopicSubject;
                    // const selectedSubject = calledBy == 'question_topics' ? this.selectedTopicSubject : this.selectedSubTopicSubject;
                    if (selectedSubject == subject.subject_name) {
                        subject.modules.forEach((module) => {
                            module[objectName].forEach(item => {
                                idArray.push({ id: item[keyId], name: item[keyName] });
                            });
                        });
                    }
                });
            }
            else {
                content[objectName].forEach(item => {
                    idArray.push({ id: item[keyId], name: item[keyName] });
                });
            }
        });
        const uniqueTopics = idArray.filter((item, index, self) => index === self.findIndex(obj => obj.id === item.id));
        uniqueTopics.sort((a, b) => parseInt(a.id) - parseInt(b.id));
        let contentArray = [];
        if (!isContentTab) {
            this.totalReport.forEach((content) => {
                content.subject.forEach((subject) => {
                    const selectedSubject = objectName == 'question_topics' ? this.selectedTopicSubject : this.selectedSubTopicSubject;
                    if (selectedSubject == subject.subject_name) {
                        subject.modules.forEach((value, i) => {
                            contentArray.push({
                                content_id: value.module_id,
                                student_content_id: content.student_content_id,
                                content_name: value.module_name,
                                group: value.module_name + i
                            });
                        });
                    }
                });
            });
        }
        else {
            contentArray = this.totalReport.map((content, i) => ({
                content_id: content.content_id,
                student_content_id: content.student_content_id,
                content_name: content.content_name,
                group: content.content_name + i
            }));
        }
        const seriesStructure = [];
        contentArray.forEach((content) => {
            seriesStructure.push({
                name: content.group + '-' + 'Correct',
                group: content.group,
                type: isContentTab ? content.student_content_id : content.student_content_id + '-' + content.content_id,
                data: uniqueTopics.map(topic => ({
                    x: topic.name,
                    y: 0,
                    data: { topic_id: topic.id, topic_name: topic.name, content_id: content.content_id, content_name: content.content_name },
                    color: '#00E396'
                }))
            });
            seriesStructure.push({
                name: content.group + '-' + 'Incorrect',
                group: content.group,
                type: isContentTab ? content.student_content_id : content.student_content_id + '-' + content.content_id,
                data: uniqueTopics.map(topic => ({
                    x: topic.name,
                    y: 0,
                    data: { topic_id: topic.id, topic_name: topic.name, content_id: content.content_id, content_name: content.content_name },
                    color: '##ff0000'
                }))
            });
        });
        this.totalReport.forEach(content => {
            if (!isContentTab) {
                content.subject.forEach((subject) => {
                    const selectedSubject = objectName == 'question_topics' ? this.selectedTopicSubject : this.selectedSubTopicSubject;
                    if (selectedSubject == subject.subject_name) {
                        subject.modules.forEach((module) => {
                            const studentContentIdAndModuleId = content.student_content_id + '-' + module.module_id;
                            const topicItems = module[objectName];
                            topicItems.forEach(item => {
                                const topicName = item[keyName];
                                const correct = item.correct_answers || 0;
                                const total = item.total_questions || 0;
                                const incorrect = total - correct;
                                const correctAnswerPercentage = Math.round(correct / total * 100);
                                const inCorrectAnswerPercentage = Math.round(incorrect / total * 100);
                                seriesStructure.forEach(series => {
                                    if (series.type === studentContentIdAndModuleId) {
                                        const point = series.data.find(d => d.x === topicName);
                                        if (point) {
                                            const seriesName = series.name.split('-');
                                            if (seriesName.includes('Correct')) {
                                                point.y = correctAnswerPercentage;
                                            }
                                            else if (seriesName.includes('Incorrect')) {
                                                point.y = inCorrectAnswerPercentage;
                                            }
                                            point.data = { ...item, content_id: module.module_id, student_content_id: content.student_content_id, content_name: module.module_name };
                                        }
                                    }
                                });
                            });
                        });
                    }
                });
            }
            else {
                const studentContentId = content.student_content_id;
                const topicItems = content[objectName];
                topicItems.forEach(item => {
                    const topicName = item[keyName];
                    const correct = item.correct_answers || 0;
                    const total = item.total_questions || 0;
                    const incorrect = total - correct;
                    const correctAnswerPercentage = Math.round(correct / total * 100);
                    const inCorrectAnswerPercentage = Math.round(incorrect / total * 100);
                    seriesStructure.forEach(series => {
                        if (series.type === studentContentId) {
                            const point = series.data.find(d => d.x === topicName);
                            if (point) {
                                const seriesName = series.name.split('-');
                                if (seriesName[1] === 'Correct') {
                                    point.y = correctAnswerPercentage;
                                }
                                else if (seriesName[1] === 'Incorrect') {
                                    point.y = inCorrectAnswerPercentage;
                                }
                                point.data = { ...item, content_id: content.content_id, student_content_id: studentContentId, content_name: content.content_name };
                            }
                        }
                    });
                });
            }
        });
        return { series: seriesStructure, categories: uniqueTopics };
    }
    tabSelected(value, calledBy) {
        if (['timeAnalysis', 'errorAnalysis', 'subTopic'].includes(calledBy)) {
            calledBy == 'timeAnalysis' ? this.selectedTimeAnalysisSubject = value : calledBy == 'errorAnalysis' ?
                this.selectedErrorAnalysisSubject = value : this.selectedSubTopicSubject = value;
            this.buildSubTopicOrTimeOrErrorAnalysisChartOptions(calledBy);
        }
        else if (calledBy == 'topic') {
            this.selectedTopicSubject = value;
            this.buildTopicChartOptions();
        }
        else if (calledBy == 'mastery') {
            this.selectedMasterySubject = value;
            this.createMasteryData();
        }
        else if (calledBy == 'questionAnalysis') {
            this.selectedQuestionAnalysisSubject = value;
            console.log(this.selectedQuestionAnalysisSubject, 'selectedQuestionAnalysisSubject');
            this.formQuestionAnalysisData();
        }
    }
    buildTopicChartOptions() {
        const topic = this.setSeriesAndCategories('question_topics', 'question_topic_id', 'question_topic');
        const topicSeries = topic.series;
        console.log(topicSeries, 'topicSeries');
        topicSeries.forEach(data => delete data.type);
        let filteredSeries;
        const isContentTab = this.tabShow === 'content';
        if (!isContentTab) {
            filteredSeries = topicSeries.filter((item, index, self) => index === self.findIndex(obj => obj.name === item.name));
        }
        this.chartOptions = {
            series: !isContentTab ? filteredSeries : topicSeries,
            toolTip: {
                custom({ series, seriesIndex, dataPointIndex, w }) {
                    const data = w.config.series[seriesIndex].data[dataPointIndex];
                    const correctAnswerPercentage = Math.round(data.data.correct_answers / data.data.total_questions * 100);
                    const inCorrectAnswerPercentage = Math.round((data.data.total_questions - data.data.correct_answers) / data.data.total_questions * 100);
                    return `
                        <div>
                            <div style="padding: 8px; background: #eceff1">
                                <strong>${data.x}</strong>
                            </div>
                            <div style="padding: 8px">
                                <span>${data.data.content_name}</span></br>
                                <span>Correct Answer - </span><span style="color: #00E396; font-weight: bold;">${data.data.correct_answers} (${correctAnswerPercentage}%)</span></br>
                                <span>Incorrect Answer - </span><span  style="color: #FF4560; font-weight: bold;">${data.data.total_questions - data.data.correct_answers}
                                    (${inCorrectAnswerPercentage}%)</span></br>
                            </div>
                        </div>
                    `;
                }
            },
            chart: {
                type: 'bar',
                height: 500,
                stacked: true,
                stackType: 'normal',
                events: {
                    dataPointSelection: ((e, chart, config) => {
                        const yValue = config.w.config.series[config.seriesIndex].data[config.dataPointIndex];
                        this.selectedContent = yValue.data;
                        this.selectedContent.showAll = false;
                        this.showTable = true;
                        this.showTable1 = false;
                        this.showTable2 = false;
                        this.showTable3 = false;
                        this.createStudentDataTable(yValue.data.question_data);
                        const id = this.selectedContent?.question_topic + this.selectedContent?.question_topic_id;
                        setTimeout(() => {
                            if (document.getElementById(id)) {
                                document.getElementById(id).scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'nearest',
                                    inline: 'nearest'
                                });
                            }
                        }, 500);
                    })
                },
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    barHeight: '100%',
                    columnWidth: this.totalReport.length <= 2 ? '25%' : (this.totalReport.length > 2 && this.totalReport.length <= 4) ? '50%' : '50%',
                    dataLabels: {
                        total: {
                            enabled: false,
                            style: {
                                fontSize: '12px',
                                fontWeight: 800
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: true,
                formatter: ((val) => {
                    return val.toString() + '%';
                })
            },
            stroke: {
                width: 1,
                colors: ['#fff']
            },
            xaxis: {
                type: 'category'
            },
            fill: {
                opacity: 1
            },
            colors: ['#00E396', '#ff0000'],
            legend: {
                show: false
            }
        };
    }
    buildSubTopicOrTimeOrErrorAnalysisChartOptions(calledBy, moduleChanged = '') {
        const subTopic = this.setSeriesAndCategories('question_sub_topics', 'question_sub_topic_id', 'sub_topic', calledBy);
        const subTopicSeries = subTopic.series;
        subTopicSeries.forEach(data => delete data.type);
        let filteredSeries;
        const isContentTab = this.tabShow === 'content';
        if (!isContentTab) {
            filteredSeries = subTopicSeries.filter((item, index, self) => index === self.findIndex(obj => obj.name === item.name));
        }
        if (calledBy == 'subTopic') {
            this.chartOptions1 = {
                series: !isContentTab ? filteredSeries : subTopicSeries,
                toolTip: {
                    custom({ series, seriesIndex, dataPointIndex, w }) {
                        const data = w.config.series[seriesIndex].data[dataPointIndex];
                        const correctAnswerPercentage = Math.round(data.data.correct_answers / data.data.total_questions * 100);
                        const inCorrectAnswerPercentage = Math.round((data.data.total_questions - data.data.correct_answers) / data.data.total_questions * 100);
                        return `
                        <div>
                            <div style="padding: 8px; background: #eceff1">
                                <strong>${data.x}</strong>
                            </div>
                            <div style="padding: 8px">
                                <span>${data.data.content_name}</span></br>
                                <span>Correct Answer - </span><span style="color: #00E396; font-weight: bold;">${data.data.correct_answers} (${correctAnswerPercentage}%)</span></br>
                                <span>Incorrect Answer - </span><span  style="color: #FF4560; font-weight: bold;">${data.data.total_questions - data.data.correct_answers}
                                    (${inCorrectAnswerPercentage}%)</span></br>
                            </div>
                        </div>
                    `;
                    }
                },
                chart: {
                    type: 'bar',
                    stacked: true,
                    height: 500,
                    events: {
                        dataPointSelection: ((e, chart, config) => {
                            const yValue = config.w.config.series[config.seriesIndex].data[config.dataPointIndex];
                            this.selectedContent = yValue.data;
                            this.selectedContent.showAll = false;
                            this.showTable1 = true;
                            this.showTable = false;
                            this.showTable2 = false;
                            this.showTable3 = false;
                            this.createStudentDataTable(yValue.data.question_data);
                            const id = this.selectedContent?.sub_topic + this.selectedContent?.question_sub_topic_id;
                            setTimeout(() => {
                                if (document.getElementById(id)) {
                                    document.getElementById(id).scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'nearest',
                                        inline: 'nearest'
                                    });
                                }
                            }, 500);
                        })
                    },
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        barHeight: '100%',
                        columnWidth: this.totalReport.length <= 2 ? '35%' : (this.totalReport.length > 2 && this.totalReport.length <= 4) ? '50%' : '50%',
                        dataLabels: {
                            total: {
                                enabled: false,
                                style: {
                                    fontSize: '12px',
                                    fontWeight: 800
                                }
                            }
                        }
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: ((val) => {
                        return val.toString() + '%';
                    }),
                    style: {
                        fontSize: '12px',
                        fontWeight: 'bold',
                        colors: ['#fff']
                    }
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                xaxis: {
                    type: 'category'
                },
                fill: {
                    opacity: 1
                },
                colors: ['#00E396', '#ff0000'],
                legend: {
                    show: false
                }
            };
        }
        else {
            subTopic.categories.forEach((items) => {
                items.time_taken = 0;
                items.total_questions = 0;
                items.average_predicted_time = 0;
                items.predicted_time = 0;
                items.correct_answers = 0;
                items.wrong_answers = 0;
                items.question_data = [];
                this.totalReport.forEach((value) => {
                    if (!isContentTab) {
                        value.subject.forEach((subject) => {
                            const selectedSubject = calledBy == 'timeAnalysis' ? this.selectedTimeAnalysisSubject : this.selectedErrorAnalysisSubject;
                            if (selectedSubject == subject.subject_name) {
                                calledBy == 'errorAnalysis' ? this.selectedErrorModule = subject.modules :
                                    this.selectedTimeModule = subject.modules;
                                if (moduleChanged == '' && calledBy == 'errorAnalysis') {
                                    this.errorAnalysisModuleSelected = [subject.modules[0]] ?? [];
                                }
                                else if (moduleChanged == '' && calledBy == 'timeAnalysis') {
                                    this.timeAnalysisModuleSelected = [subject.modules[0]] ?? [];
                                }
                                const selectedModuleValue = calledBy == 'errorAnalysis' ? this.errorAnalysisModuleSelected : this.timeAnalysisModuleSelected;
                                if (selectedModuleValue.length != 0) {
                                    subject.modules.forEach((module) => {
                                        if (module.module_id == selectedModuleValue[0]?.module_id) {
                                            module.question_sub_topics.forEach((subTopicData) => {
                                                if (items.id == subTopicData.question_sub_topic_id) {
                                                    subTopicData.question_data.forEach((data) => {
                                                        data.module_id = module.module_id;
                                                        data.module_name = module.module_name;
                                                        items.question_data.push(data);
                                                        const getTime = data.predicted_solving_time ? data.predicted_solving_time.split(':') : [];
                                                        subTopicData.predicted_solving_time = getTime.length != 0 ? (parseInt(getTime[0]) * 60 + parseInt(getTime[1])) : 0;
                                                    });
                                                    items.time_taken = items.time_taken + subTopicData.time_taken;
                                                    items.total_questions = items.total_questions + subTopicData.total_questions;
                                                    items.predicted_time = items.predicted_time + subTopicData.predicted_solving_time;
                                                    items.wrong_answers = items.wrong_answers + (parseInt(subTopicData.total_questions) - parseInt(subTopicData.correct_answers));
                                                    items.correct_answers = items.correct_answers + subTopicData.correct_answers;
                                                }
                                            });
                                        }
                                    });
                                }
                            }
                        });
                    }
                    else {
                        value.question_sub_topics.forEach((subTopicData) => {
                            if (items.id == subTopicData.question_sub_topic_id) {
                                subTopicData.question_data.forEach((data) => {
                                    items.question_data.push(data);
                                    const getTime = data.predicted_solving_time ? data.predicted_solving_time.split(':') : [];
                                    subTopicData.predicted_solving_time = getTime.length != 0 ? (parseInt(getTime[0]) * 60 + parseInt(getTime[1])) : 0;
                                });
                                items.time_taken = items.time_taken + subTopicData.time_taken;
                                items.total_questions = items.total_questions + subTopicData.total_questions;
                                items.predicted_time = items.predicted_time + subTopicData.predicted_solving_time;
                                items.wrong_answers = items.wrong_answers + (parseInt(subTopicData.total_questions) - parseInt(subTopicData.correct_answers));
                                items.correct_answers = items.correct_answers + subTopicData.correct_answers;
                            }
                        });
                    }
                });
                items.average_error_percentage = Math.round((items.wrong_answers / items.total_questions) * 100);
                items.average_time_taken = Math.round(items.time_taken / items.total_questions);
                items.average_predicted_time = items.predicted_time == 0 ? 0 : Math.round((items.predicted_time / items.total_questions) * items.total_questions);
            });
            if (calledBy == 'timeAnalysis' && ((!isContentTab && this.timeAnalysisModuleSelected.length != 0) || isContentTab)) {
                this.chartOptions2 = {
                    series: [
                        {
                            name: 'Actual Time Taken',
                            data: subTopic.categories.map((value) => value.average_time_taken)
                        },
                        {
                            name: 'Predicted Solving Time',
                            data: subTopic.categories.map((value) => value.average_predicted_time)
                        }
                    ],
                    plotOptions: {
                        bar: {
                            columnWidth: '10%',
                            distributed: false,
                            dataLabels: {
                                position: 'top',
                            }
                        }
                    },
                    toolTip: {
                        y: {
                            formatter: function (val) {
                                return val + ' (Sec)';
                            }
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        formatter: ((val) => {
                            return val == 0 ? '' : val.toString();
                        }),
                        style: {
                            fontSize: '12px',
                            fontWeight: 'bold',
                            colors: ['#fff']
                        }
                    },
                    chart: {
                        height: 500,
                        type: 'bar',
                        toolbar: {
                            show: false
                        }
                    },
                    colors: ['#2082cc', '#00E396'],
                    stroke: {
                        curve: 'smooth'
                    },
                    grid: {
                        borderColor: '#f3f3f3',
                        yaxis: {
                            lines: {
                                show: true
                            }
                        },
                        padding: {
                            bottom: 50,
                        },
                        row: {
                            colors: ['#f3f3f3', 'transparent']
                        }
                    },
                    markers: {
                        size: 1
                    },
                    xaxis: {
                        categories: subTopic.categories.map(value => value.name),
                        labels: {
                            rotate: -45,
                            rotateAlways: true,
                            trim: false
                        }
                    },
                    yaxis: {
                        title: {
                            text: 'Seconds'
                        }
                    },
                    legend: {
                        show: false
                    }
                };
            }
            else {
                const colorString = [];
                subTopic.categories.map((value) => value.average_error_percentage).forEach((items) => {
                    if (items >= 90) {
                        colorString.push('#ff0000');
                    }
                    else if (items > 80 && items <= 90) {
                        colorString.push('#ffc107');
                    }
                    else if (items >= 50 && items <= 80) {
                        colorString.push('#28A745');
                    }
                    else if (items < 50 || items == 0) {
                        colorString.push('#007bff');
                    }
                });
                this.chartOptions3 = {
                    series: [
                        {
                            name: 'Percentage',
                            data: subTopic.categories.map((value) => value.average_error_percentage)
                        }
                    ],
                    legend: {
                        show: false
                    },
                    chart: {
                        height: 450,
                        width: '100%',
                        type: 'bar',
                        events: {
                            dataPointSelection: ((e, chart, config) => {
                                this.selectedContent = subTopic.categories[config.dataPointIndex];
                                this.selectedContent.showAll = false;
                                this.selectedContent.sub_topic = subTopic.categories[config.dataPointIndex].name;
                                this.selectedContent.question_sub_topic_id = subTopic.categories[config.dataPointIndex].id;
                                this.selectedContent.content_name = subTopic.categories[config.dataPointIndex].question_data[0]?.content_name;
                                if (!isContentTab) {
                                    this.selectedContent.actual_content_id = subTopic.categories[config.dataPointIndex].question_data[0]?.content_id;
                                    this.selectedContent.content_id = subTopic.categories[config.dataPointIndex].question_data[0]?.module_id;
                                    this.selectedContent.module_name = subTopic.categories[config.dataPointIndex].question_data[0]?.module_name;
                                    // this.selectedContent.content_name = subTopic.categories[config.dataPointIndex].question_data[0]?.content_name + ' - '
                                    //     + this.selectedErrorAnalysisSubject + ' - ' + subTopic.categories[config.dataPointIndex].question_data[0]?.module_name;
                                }
                                this.showTable2 = true;
                                this.showTable = false;
                                this.showTable1 = false;
                                this.showTable3 = false;
                                this.createStudentDataTable(subTopic.categories[config.dataPointIndex].question_data);
                                const id = 'error_analysis_' + this.selectedContent?.sub_topic + this.selectedContent?.question_sub_topic_id;
                                setTimeout(() => {
                                    if (document.getElementById(id)) {
                                        document.getElementById(id).scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'nearest',
                                            inline: 'nearest'
                                        });
                                    }
                                }, 500);
                            })
                        },
                        toolbar: {
                            show: false
                        },
                    },
                    colors: colorString,
                    plotOptions: {
                        bar: {
                            columnWidth: '10%',
                            distributed: true,
                            dataLabels: {
                                position: 'top'
                            }
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        formatter: ((val) => {
                            return val + '%';
                        }),
                        offsetY: -20,
                        style: {
                            fontSize: '12px',
                            colors: ['#304758']
                        }
                    },
                    grid: {
                        show: true
                    },
                    xaxis: {
                        categories: subTopic.categories.map(value => value.name),
                        labels: {
                            rotate: -45,
                            rotateAlways: true,
                            trim: false
                        }
                    }
                };
            }
        }
    }
    // buildChartOptions() {
    //
    //     const topic = this.setSeriesAndCategories('question_topics', 'question_topic_id', 'question_topic');
    //     const subTopic = this.setSeriesAndCategories('question_sub_topics', 'question_sub_topic_id', 'sub_topic');
    //     const topicSeries = topic.series;
    //     const subTopicSeries = subTopic.series;
    //     console.log(topic, subTopic);
    //     topicSeries.forEach(data => delete data.type);
    //     subTopicSeries.forEach(data => delete data.type);
    //
    //     this.chartOptions = {
    //         series: topicSeries,
    //         toolTip: {
    //             custom({series, seriesIndex, dataPointIndex, w}) {
    //                 const data = w.config.series[seriesIndex].data[dataPointIndex];
    //                 const correctAnswerPercentage = Math.round(data.data.correct_answers / data.data.total_questions * 100);
    //                 const inCorrectAnswerPercentage = Math.round(( data.data.total_questions - data.data.correct_answers) / data.data.total_questions * 100);
    //                 return `
    //                     <div>
    //                         <div style="padding: 8px; background: #eceff1">
    //                             <strong>${data.x}</strong>
    //                         </div>
    //                         <div style="padding: 8px">
    //                             <span>${data.data.content_name}</span></br>
    //                             <span>Correct Answer - </span><span style="color: #00E396; font-weight: bold;">${data.data.correct_answers} (${correctAnswerPercentage}%)</span></br>
    //                             <span>Incorrect Answer - </span><span  style="color: #FF4560; font-weight: bold;">${data.data.total_questions - data.data.correct_answers}
    //                                 (${inCorrectAnswerPercentage}%)</span></br>
    //                         </div>
    //                     </div>
    //                 `;
    //             }
    //         },
    //         chart: {
    //             type: 'bar',
    //             height: 500,
    //             stacked: true,
    //             stackType: 'normal',
    //             events: {
    //                 dataPointSelection: ((e, chart, config) => {
    //                     const yValue = config.w.config.series[config.seriesIndex].data[config.dataPointIndex];
    //                     this.selectedContent = yValue.data;
    //                     this.selectedContent.showAll = false;
    //                     this.showTable = true;
    //                     this.showTable1 = false;
    //                     this.showTable2 = false;
    //                     this.showTable3 = false;
    //                     this.createStudentDataTable(yValue.data.question_data);
    //                     const id = this.selectedContent?.question_topic + this.selectedContent?.question_topic_id;
    //                     setTimeout(() => {
    //                         document.getElementById(id).scrollIntoView({
    //                             behavior: 'smooth',
    //                             block: 'nearest',
    //                             inline: 'nearest'
    //                         });
    //                     }, 500);
    //                 })
    //             },
    //             toolbar: {
    //                 show: false
    //             }
    //         },
    //         plotOptions: {
    //             bar: {
    //                 horizontal: false,
    //                 barHeight: '100%',
    //                 columnWidth: this.totalReport.length <= 2 ? '25%' : (this.totalReport.length > 2 && this.totalReport.length <= 4) ? '50%' : '100%',
    //                 dataLabels: {
    //                     total: {
    //                         enabled: false,
    //                         style: {
    //                             fontSize: '12px',
    //                             fontWeight: 800
    //                         }
    //                     }
    //                 }
    //             }
    //         },
    //         dataLabels: {
    //             enabled: true,
    //             formatter: ((val) => {
    //                 return val.toString() + '%';
    //             })
    //         },
    //         stroke: {
    //             width: 1,
    //             colors: ['#fff']
    //         },
    //         xaxis: {
    //             type: 'category'
    //         },
    //         fill: {
    //             opacity: 1
    //         },
    //         colors: ['#00E396', '#ff0000'],
    //         legend: {
    //             show: false
    //         }
    //     };
    //
    //     this.chartOptions1 = {
    //         series: subTopicSeries,
    //         toolTip: {
    //             custom({series, seriesIndex, dataPointIndex, w}) {
    //                 const data = w.config.series[seriesIndex].data[dataPointIndex];
    //                 const correctAnswerPercentage = Math.round(data.data.correct_answers / data.data.total_questions * 100);
    //                 const inCorrectAnswerPercentage = Math.round(( data.data.total_questions - data.data.correct_answers) / data.data.total_questions * 100);
    //                 return `
    //                     <div>
    //                         <div style="padding: 8px; background: #eceff1">
    //                             <strong>${data.x}</strong>
    //                         </div>
    //                         <div style="padding: 8px">
    //                             <span>${data.data.content_name}</span></br>
    //                             <span>Correct Answer - </span><span style="color: #00E396; font-weight: bold;">${data.data.correct_answers} (${correctAnswerPercentage}%)</span></br>
    //                             <span>Incorrect Answer - </span><span  style="color: #FF4560; font-weight: bold;">${data.data.total_questions - data.data.correct_answers}
    //                                 (${inCorrectAnswerPercentage}%)</span></br>
    //                         </div>
    //                     </div>
    //                 `;
    //             }
    //         },
    //         chart: {
    //             type: 'bar',
    //             stacked: true,
    //             height: 500,
    //             events: {
    //                 dataPointSelection: ((e, chart, config) => {
    //                     const yValue = config.w.config.series[config.seriesIndex].data[config.dataPointIndex];
    //                     this.selectedContent = yValue.data;
    //                     this.selectedContent.showAll = false;
    //                     this.showTable1 = true;
    //                     this.showTable = false;
    //                     this.showTable2 = false;
    //                     this.showTable3 = false;
    //                     this.createStudentDataTable(yValue.data.question_data);
    //                     const id = this.selectedContent?.sub_topic + this.selectedContent?.question_sub_topic_id;
    //                     setTimeout(() => {
    //                         document.getElementById(id).scrollIntoView({
    //                             behavior: 'smooth',
    //                             block: 'nearest',
    //                             inline: 'nearest'
    //                         });
    //                     }, 500);
    //                 })
    //             },
    //             toolbar: {
    //                 show: false
    //             }
    //         },
    //         plotOptions: {
    //             bar: {
    //                 horizontal: false,
    //                 barHeight: '100%',
    //                 columnWidth: this.totalReport.length <= 2 ? '35%' : (this.totalReport.length > 2 && this.totalReport.length <= 4) ? '50%' : '100%',
    //                 dataLabels: {
    //                     total: {
    //                         enabled: false,
    //                         style: {
    //                             fontSize: '12px',
    //                             fontWeight: 800
    //                         }
    //                     }
    //                 }
    //             }
    //         },
    //         dataLabels: {
    //             enabled: true,
    //             formatter: ((val) => {
    //                 return val.toString() + '%';
    //             }),
    //             style: {
    //                 fontSize: '12px',
    //                 fontWeight: 'bold',
    //                 colors: ['#fff']
    //             }
    //         },
    //         stroke: {
    //             width: 1,
    //             colors: ['#fff']
    //         },
    //         xaxis: {
    //             type: 'category'
    //         },
    //         fill: {
    //             opacity: 1
    //         },
    //         colors: ['#00E396', '#ff0000'],
    //         legend: {
    //             show: false
    //         }
    //     };
    //
    //     subTopic.categories.forEach((items) => {
    //         items.time_taken = 0;
    //         items.total_questions = 0;
    //         items.average_predicted_time = 0;
    //         items.predicted_time = 0;
    //         items.correct_answers = 0;
    //         items.wrong_answers = 0;
    //         items.question_data = [];
    //         this.totalReport.forEach((value) => {
    //             if (this.tabShow != 'content') {
    //                 value.subject.forEach((subject) => {
    //                     subject.modules.forEach((module) => {
    //                         module.question_sub_topics.forEach((subTopicData) => {
    //                             if (items.id == subTopicData.question_sub_topic_id) {
    //                                 subTopicData.question_data.forEach((data) => {
    //                                     items.question_data.push(data);
    //                                     const getTime = data.predicted_solving_time ? data.predicted_solving_time.split(':') : [];
    //                                     subTopicData.predicted_solving_time = getTime.length != 0 ? (parseInt(getTime[0]) * 60 + parseInt(getTime[1])) : 0;
    //                                 });
    //                                 items.time_taken = items.time_taken + subTopicData.time_taken;
    //                                 items.total_questions = items.total_questions + subTopicData.total_questions;
    //                                 items.predicted_time = items.predicted_time + subTopicData.predicted_solving_time;
    //                                 items.wrong_answers = items.wrong_answers + (parseInt(subTopicData.total_questions) - parseInt(subTopicData.correct_answers));
    //                                 items.correct_answers = items.correct_answers + subTopicData.correct_answers;
    //                             }
    //                         });
    //                     });
    //                 });
    //             } else {
    //                 value.question_sub_topics.forEach((subTopicData) => {
    //                     if (items.id == subTopicData.question_sub_topic_id) {
    //                         subTopicData.question_data.forEach((data) => {
    //                             items.question_data.push(data);
    //                             const getTime = data.predicted_solving_time ? data.predicted_solving_time.split(':') : [];
    //                             subTopicData.predicted_solving_time = getTime.length != 0 ? (parseInt(getTime[0]) * 60 + parseInt(getTime[1])) : 0;
    //                         });
    //                         items.time_taken = items.time_taken + subTopicData.time_taken;
    //                         items.total_questions = items.total_questions + subTopicData.total_questions;
    //                         items.predicted_time = items.predicted_time + subTopicData.predicted_solving_time;
    //                         items.wrong_answers = items.wrong_answers + (parseInt(subTopicData.total_questions) - parseInt(subTopicData.correct_answers));
    //                         items.correct_answers = items.correct_answers + subTopicData.correct_answers;
    //                     }
    //                 });
    //             }
    //         });
    //         items.average_error_percentage = Math.round((items.wrong_answers / items.total_questions) * 100);
    //         items.average_time_taken = Math.round(items.time_taken / items.total_questions);
    //         items.average_predicted_time = items.predicted_time == 0 ? 0 : Math.round((items.predicted_time / items.total_questions) * items.total_questions);
    //     });
    //
    //     this.chartOptions2 = {
    //         series: [
    //             {
    //                 name: 'Actual Time Taken',
    //                 data: subTopic.categories.map((value) => value.average_time_taken)
    //             },
    //             {
    //                 name: 'Predicted Solving Time',
    //                 data: subTopic.categories.map((value) => value.average_predicted_time)
    //             }
    //         ],
    //         plotOptions: {
    //             bar: {
    //                 columnWidth: '10%',
    //                 distributed: false,
    //                 dataLabels: {
    //                     position: 'top',
    //                 }
    //             }
    //         },
    //         toolTip: {
    //             y: {
    //                 formatter: function (val) {
    //                     return val + ' (Sec)';
    //                 }
    //             }
    //         },
    //         dataLabels: {
    //             enabled: true,
    //             formatter: ((val) => {
    //                 return val == 0 ? '' : val.toString();
    //             }),
    //             style: {
    //                 fontSize: '12px',
    //                 fontWeight: 'bold',
    //                 colors: ['#fff']
    //             }
    //         },
    //         chart: {
    //             height: 500,
    //             type: 'bar',
    //             toolbar: {
    //                 show: false
    //             }
    //         },
    //         colors: ['#2082cc', '#00E396'],
    //         stroke: {
    //             curve: 'smooth'
    //         },
    //         grid: {
    //             borderColor: '#f3f3f3',
    //             yaxis: {
    //                 lines: {
    //                     show: true
    //                 }
    //             },
    //             padding: {
    //                 bottom: 50,
    //             },
    //             row: {
    //                 colors: ['#f3f3f3', 'transparent']
    //             }
    //         },
    //         markers: {
    //             size: 1
    //         },
    //         xaxis: {
    //             categories: subTopic.categories.map(value => value.name),
    //             labels: {
    //                 rotate: -45,
    //                 rotateAlways: true,
    //                 trim: false
    //             }
    //         },
    //         yaxis: {
    //             title: {
    //                 text: 'Seconds'
    //             }
    //         },
    //         legend: {
    //             show: false
    //         }
    //     };
    //
    //     const colorString = [];
    //     subTopic.categories.map((value) => value.average_error_percentage).forEach((items) => {
    //         if (items >= 90) {
    //             colorString.push('#ff0000');
    //         } else if (items > 80 && items <= 90) {
    //             colorString.push('#ffc107');
    //         } else if (items >= 50 && items <= 80) {
    //             colorString.push('#28A745');
    //         } else if (items < 50 || items == 0) {
    //             colorString.push('#007bff');
    //         }
    //     });
    //
    //     this.chartOptions3 = {
    //         series: [
    //             {
    //                 name: 'Percentage',
    //                 data: subTopic.categories.map((value) => value.average_error_percentage)
    //             }
    //         ],
    //         legend: {
    //             show: false
    //         },
    //         chart: {
    //             height: 450,
    //             width: '100%',
    //             type: 'bar',
    //             events: {
    //                 dataPointSelection: ((e, chart, config) => {
    //                     this.selectedContent = subTopic.categories[config.dataPointIndex];
    //                     this.selectedContent.showAll = false;
    //                     this.selectedContent.sub_topic = subTopic.categories[config.dataPointIndex].name;
    //                     this.selectedContent.question_sub_topic_id = subTopic.categories[config.dataPointIndex].id;
    //                     this.selectedContent.content_name = subTopic.categories[config.dataPointIndex].question_data[0]?.content_name;
    //                     this.showTable2 = true;
    //                     this.showTable = false;
    //                     this.showTable1 = false;
    //                     this.showTable3 = false;
    //                     this.createStudentDataTable(subTopic.categories[config.dataPointIndex].question_data);
    //                     const id = 'error_analysis_' + this.selectedContent?.sub_topic + this.selectedContent?.question_sub_topic_id;
    //                     setTimeout(() => {
    //                         document.getElementById(id).scrollIntoView({
    //                             behavior: 'smooth',
    //                             block: 'nearest',
    //                             inline: 'nearest'
    //                         });
    //                     }, 500);
    //                 })
    //             },
    //             toolbar: {
    //                 show: false
    //             },
    //         },
    //         colors: colorString,
    //         plotOptions: {
    //             bar: {
    //                 columnWidth: '10%',
    //                 distributed: true,
    //                 dataLabels: {
    //                     position: 'top'
    //                 }
    //             }
    //         },
    //         dataLabels: {
    //             enabled: true,
    //             formatter: ((val) => {
    //                 return val + '%';
    //             }),
    //             offsetY: -20,
    //             style: {
    //                 fontSize: '12px',
    //                 colors: ['#304758']
    //             }
    //         },
    //         grid: {
    //             show: true
    //         },
    //         xaxis: {
    //             categories: subTopic.categories.map(value => value.name),
    //             labels: {
    //                 rotate: -45,
    //                 rotateAlways: true,
    //                 trim: false
    //             }
    //         }
    //     };
    //
    //     // this.dataloaded = true;
    // }
    openContent(value, calledBy = '') {
        console.log(value, calledBy);
        const isContentTab = this.tabShow === 'content';
        if (calledBy == '') {
            if (isContentTab) {
                this.selectedContent = {
                    student_content_id: this.selectedContent?.student_content_id ?? value.student_content_id,
                    content_id: this.selectedContent?.content_id ?? value.content_id,
                    content_name: this.selectedContent?.content_name ?? value.content_name,
                    // showAll: true
                };
            }
            else {
                this.selectedContent = {
                    student_content_id: value.student_content_id,
                    content_id: value.module_id,
                    content_name: value.module_name,
                    // showAll: true
                };
            }
        }
        else if (calledBy == 'graph') {
            const subjectName = this.showTable ? this.selectedTopicSubject : this.showTable1 ? this.selectedSubTopicSubject :
                this.showTable2 ? this.selectedErrorAnalysisSubject : this.showTable3 ? this.selectedMasterySubject : '';
            const data = {
                student_content_id: value.questionData[0]?.student_content_id,
                content_id: isContentTab ? this.selectedContent?.content_id ?? value.questionData[0]?.content_id :
                    this.selectedContent.module_id ? this.selectedContent.module_id : (this.selectedContent?.content_id ?? value.questionData[0]?.content_id),
                content_name: isContentTab ? this.selectedContent?.content_name ?? value.questionData[0]?.content_name :
                    this.selectedContent?.module_name ? (this.selectedContent?.content_name + ' - ' + subjectName + ' - ' + this.selectedContent?.module_name) :
                        this.selectedContent?.content_name ?? value.questionData[0]?.content_name,
                // showAll: true
            };
            this.selectedContent = { ...this.selectedContent, ...data };
            value.student_content_id = value.questionData[0]?.student_content_id;
        }
        else {
            console.log(value.questionData, 'ques');
            this.selectedContent = {
                student_content_id: value.questionData[0]?.student_content_id,
                content_id: isContentTab ? this.questionAnalysisContentSelected[0]?.content_id :
                    value.questionData[0]?.module_id,
                content_name: isContentTab ? this.questionAnalysisContentSelected[0]?.content_name :
                    this.questionAnalysisContentSelected[0]?.content_name + ' - ' + this.selectedQuestionAnalysisSubject + ' - ' + value.questionData[0]?.module_name,
                // showAll: true
            };
            value.student_content_id = value.questionData[0]?.student_content_id;
        }
        this.showAllQuestion = true;
        this.nameOrContentSelected = true;
        console.log(this.selectedContent, 'selectedContent');
        this.studentsAnswerList(value, 1);
    }
    questionSelectedFromTable(index, calledBy = '') {
        if (this.studentQuestionListData.length <= 2) {
            this.showAllQuestion = false;
            this.studentsAnswerList(this.selectedContent, index, calledBy);
        }
    }
    studentsAnswerList(value, index, calledBy = '') {
        this.selectedQuestion = index;
        const isContentTab = this.tabShow === 'content';
        if (calledBy != '') {
            value.content_name = calledBy == 'questionAnalysis' && !isContentTab ?
                this.questionAnalysisContentSelected[0]?.content_name + ' - ' + this.selectedQuestionAnalysisSubject + ' - ' +
                    value.module_name : this.questionAnalysisContentSelected[0]?.content_name;
            value.question_topic_id = '';
            value.showAll = true;
            this.selectedContent = value;
        }
        const content_id = calledBy == 'questionAnalysis' && !isContentTab ? value.module_id : calledBy != ''
            ? this.questionAnalysisContentSelected[0]?.content_id : this.selectedContent.content_id;
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id,
            content_format: '3',
            class_id: this.studentData ? this.studentData.class_id : '',
            student_id: value.student_id ?? this.auth.getUserId(),
            student_content_id: value.student_content_id
        };
        this.teacher.studentAnswerList(data).subscribe((successData) => {
            console.log(successData, 'successData');
            this.questionArray = successData.IsSuccess ? successData.ResponseObject : [];
            this.modalRef = this.modalService.open(this.showQuestion, { size: 'xl' });
        }, (error) => {
            console.error(error, 'student_answetlist');
        });
    }
    getContentList(calledFrom = '') {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getRoleId() == '5' ? this.auth.getUserId() : '',
            class_id: this.studentData ? this.studentData.class_id : '',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        };
        this.auth.postService(payload, 'student/completedCfsContent').subscribe((successData) => {
            if (calledFrom != 'tabChanged') {
                const test_type_id = this.studentData?.test_type_id ?? '';
                if (test_type_id != '' && test_type_id != '0') {
                    this.tabShow = test_type_id == '1' ? 'content' : test_type_id == '2' ? 'sat' : 'act';
                }
                else {
                    Object.entries(successData.ResponseObject).every(items => {
                        console.log(items, 'key');
                        if (successData.ResponseObject[items[0]].length != 0) {
                            this.tabShow = items[0];
                            return false;
                        }
                        return true;
                    });
                }
            }
            this.commonContentList = successData.ResponseObject;
            this.testTypeListData.every(value => {
                if (this.commonContentList[value.test_type.toLowerCase()].length != 0) {
                    this.showContentTypeTab = true;
                    return false;
                }
                return true;
            });
            console.log(this.showContentTypeTab, 'showContentTypeTab');
            const content = successData.ResponseObject[this.tabShow];
            this.contentList = successData.IsSuccess ? successData.ResponseObject[this.tabShow] : [];
            // this.contentList = successData.IsSuccess ? successData.ResponseObject : [];
            //// OverAllSummary Code Start Here ////
            let overAllSummaryArray = [];
            if (this.auth.getRoleId() != '5') {
                content.forEach(({ content_id, student_details }) => {
                    student_details.forEach(({ student_id, student_name, student_content_id }) => {
                        student_content_id.forEach(id => {
                            const contentExists = overAllSummaryArray.some(entry => entry.content_id === content_id && entry.student_id === student_id && entry.student_content_id === id);
                            if (!contentExists) {
                                overAllSummaryArray.push({ content_id, student_id, student_content_id: id });
                            }
                        });
                        const studentExists = this.studentList.some(s => s.student_id === student_id);
                        if (!studentExists) {
                            this.studentList.push({ student_id, student_name });
                        }
                    });
                });
            }
            else {
                overAllSummaryArray = content;
            }
            this.getReportList(overAllSummaryArray, 'overall');
            //// OverAllSummary Code End Here ////
            //// Common Graph like Topic, Subtopic, Error Analysis, Summary Table Code Start Here ////
            const keyName = this.auth.getRoleId() == '5' ? 'student_content_id' : 'content_id';
            if (this.studentData[keyName] == '0') {
                this.contentSelected = successData.IsSuccess ? content : [];
            }
            else {
                const selectedContent = content.find(items => items[keyName] == this.studentData[keyName]);
                // content.forEach((items) => {
                //     if (items[keyName] == this.studentData[keyName]) {
                //         this.contentSelected = [items];
                //     }
                // });
                if (selectedContent) {
                    this.contentSelected = [selectedContent];
                }
                else {
                    this.contentSelected = content.length != 0 ? [content[0]] : [];
                }
            }
            if (this.auth.getRoleId() != '5') {
                this.allowSingleSelectStudent = this.contentSelected.length > 1;
                this.studentSetting();
                let student;
                if (this.studentData.student_id != '0') {
                    student = this.studentList.find(value => value.student_id == this.studentData.student_id);
                }
                if (this.allowSingleSelectStudent) {
                    this.studentSelected = this.studentData.student_id == '0' ? [this.studentList[0]] : student;
                }
                else {
                    this.studentSelected = this.studentData.student_id == '0' ? this.studentList : [student];
                }
            }
            const commonGraphData = this.auth.getRoleId() != '5' ? this.formArrayValue(this.contentList, this.studentSelected)
                : this.contentSelected;
            const isContentTab = this.tabShow === 'content';
            !isContentTab ? this.getSubjectList(commonGraphData) : this.getReportList(commonGraphData);
            //// Common Graph like Topic, Subtopic, Error Analysis, Summary Table Code End Here ////
            //// Mastery Score Code Start Here ////
            if (this.auth.getRoleId() == '5') {
                this.masteryContentSelected = this.contentSelected.length != 0 ? [this.contentSelected[0]] : [];
                this.getSubjectList(this.masteryContentSelected, 'mastery');
            }
            else {
                /// Question Analysis Code Start Here ///
                const contentList = this.contentList[0];
                // delete contentList.student_details;
                this.questionAnalysisContentSelected = this.contentList.length != 0 ? [contentList] : [];
                this.questionAnalysisStudentList = this.formStudentList('questionAnalysis').studentList;
                /// Question Analysis Code End Here ///
                this.masteryContentSelected = this.contentSelected.length != 0 ? [this.contentSelected[0]] : [];
                this.masteryStudentList = this.formStudentList('mastery').studentList;
                setTimeout(() => {
                    let student;
                    let masteryStudent;
                    if (this.studentData.student_id != '0') {
                        student = this.questionAnalysisStudentList.find(value => value.student_id == this.studentData.student_id);
                        masteryStudent = this.masteryStudentList.find(value => value.student_id == this.studentData.student_id);
                    }
                    this.questionAnalysisStudentSelected = this.studentData.student_id == '0' ? this.questionAnalysisStudentList : [student];
                    this.masteryStudentSelected = this.studentData.student_id == '0' ? this.masteryStudentList : [masteryStudent];
                    this.cdr.detectChanges();
                    const commonQuestionAnalysisData = this.formArrayValue(this.contentList, this.questionAnalysisStudentSelected, 'questionAnalysis');
                    const commonMasteryData = this.formArrayValue(this.contentList, this.masteryStudentSelected, 'mastery');
                    if (isContentTab) {
                        this.getReportList(commonQuestionAnalysisData, 'questionAnalysis');
                        this.getReportList(commonMasteryData, 'mastery');
                    }
                    else {
                        this.getSubjectList(commonQuestionAnalysisData, 'questionAnalysis');
                        this.getSubjectList(commonMasteryData, 'mastery');
                    }
                }, 0);
            }
            //// Mastery Score Code End Here ////
        }, (error) => console.error(error, 'error_contentList'));
    }
    formArrayValue(arrayValue, studentSelected, calledBy = '') {
        const createNewObject = [];
        const contentSelected = calledBy == 'mastery' ? this.masteryContentSelected : calledBy == 'questionAnalysis' ?
            this.questionAnalysisContentSelected : this.contentSelected;
        arrayValue.forEach((value) => {
            contentSelected.forEach((content) => {
                if (value.content_id === content.content_id) {
                    studentSelected.forEach((student) => {
                        const matchedContent = this.contentList.find(contentValue => contentValue.content_id == content.content_id);
                        const matchedStudent = matchedContent.student_details.find(data => data.student_id === student.student_id);
                        if (!matchedStudent)
                            return;
                        matchedStudent.student_content_id.forEach((id) => {
                            const alreadyExists = createNewObject.some((entry) => entry.content_id === content.content_id && entry.student_id === matchedStudent.student_id &&
                                entry.student_content_id === id);
                            if (!alreadyExists) {
                                createNewObject.push({
                                    content_id: content.content_id,
                                    student_id: matchedStudent.student_id,
                                    student_content_id: id
                                });
                            }
                        });
                    });
                }
            });
        });
        return createNewObject;
    }
    mergeByIdAndSum(array, idKey) {
        const merged = {};
        array.forEach((item) => {
            const id = item[idKey];
            const studentId = item.student_id;
            // Enrich question_data with student info
            const enrichedQuestions = (item.question_data || []).map(q => ({
                ...q
            }));
            if (!merged[id]) {
                merged[id] = {
                    ...item,
                    correct_answers: item.correct_answers || 0,
                    total_questions: item.total_questions || 0,
                    time_taken: item.time_taken || 0,
                    percentage: parseFloat(item.percentage || '0'),
                    average_time_taken: item.average_time_taken || 0,
                    _total_weight: item.total_questions || 1,
                    _student_ids: new Set(studentId ? [studentId] : []),
                    question_data: enrichedQuestions
                };
            }
            else {
                const existing = merged[id];
                existing.correct_answers += item.correct_answers || 0;
                existing.total_questions += item.total_questions || 0;
                existing.time_taken += item.time_taken || 0;
                // Weighted average: percentage
                const weight1 = existing._total_weight;
                const weight2 = item.total_questions || 0;
                const totalWeight = weight1 + weight2;
                const percent1 = existing.percentage * weight1;
                const percent2 = parseFloat(item.percentage || '0') * weight2;
                existing.percentage = totalWeight ? (percent1 + percent2) / totalWeight : 0;
                // Weighted average: average_time_taken
                const time1 = existing.average_time_taken * weight1;
                const time2 = (item.average_time_taken || 0) * weight2;
                existing.average_time_taken = totalWeight ? (time1 + time2) / totalWeight : 0;
                existing._total_weight = totalWeight;
                // Merge enriched question_data
                existing.question_data = existing.question_data.concat(enrichedQuestions);
                // Add to student set
                if (studentId) {
                    existing._student_ids.add(studentId);
                }
            }
        });
        return Object.values(merged).map((item) => {
            item.percentage = parseFloat(item.percentage.toFixed(2));
            item.average_time_taken = Math.round(item.average_time_taken);
            item.student_count = item._student_ids.size;
            delete item._student_ids;
            delete item._total_weight;
            return item;
        });
    }
    openAccordian(index, arrayvalue) {
        arrayvalue.forEach((value, i) => value.showAccordian = index == i ? value.showAccordian = !value.showAccordian : false);
    }
    getSubjectList(contentArray = [], calledFrom = '') {
        let content = [];
        if (this.auth.getRoleId() == '5') {
            contentArray.forEach((items) => {
                this.contentList.forEach((value) => {
                    if (items.student_content_id == value.student_content_id) {
                        content.push({ content_id: value.content_id, student_content_id: value.student_content_id });
                    }
                });
            });
        }
        else {
            content = contentArray;
        }
        if (content.length != 0) {
            const payload = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                class_id: this.studentData ? this.studentData.class_id : '',
                student_id: this.auth.getUserId(),
                content
            };
            this.auth.postService(payload, 'student/getModuleSubject').subscribe((successData) => {
                if (successData.IsSuccess) {
                    if (calledFrom == '') {
                        this.commonSubjectList = successData.ResponseObject ?? [];
                        const getValidSubject = (selected) => this.commonSubjectList.includes(selected) ? selected : (this.commonSubjectList[0] ?? '');
                        this.selectedTopicSubject = getValidSubject(this.selectedTopicSubject);
                        this.selectedSubTopicSubject = getValidSubject(this.selectedSubTopicSubject);
                        this.selectedErrorAnalysisSubject = getValidSubject(this.selectedErrorAnalysisSubject);
                        this.selectedTimeAnalysisSubject = getValidSubject(this.selectedTimeAnalysisSubject);
                    }
                    else if (calledFrom == 'questionAnalysis') {
                        this.questionAnalysisSubjectList = successData.ResponseObject ?? [];
                        const getValidSubject = (selected) => this.questionAnalysisSubjectList.includes(selected) ? selected : (this.questionAnalysisSubjectList[0] ?? '');
                        this.selectedQuestionAnalysisSubject = getValidSubject(this.selectedQuestionAnalysisSubject);
                    }
                    else if (calledFrom == 'mastery') {
                        this.masterySubjectList = successData.ResponseObject ?? [];
                        const getValidSubject = (selected) => this.masterySubjectList.includes(selected) ? selected : (this.masterySubjectList[0] ?? '');
                        this.selectedMasterySubject = getValidSubject(this.selectedMasterySubject);
                    }
                    this.getReportList(contentArray, calledFrom);
                }
                this.cdr.detectChanges();
            }, (error) => console.error(error, 'error_reportList'));
        }
    }
    getReportList(contentArray = [], calledFrom = '') {
        let content = [];
        if (this.auth.getRoleId() == '5') {
            contentArray.forEach((items) => {
                this.contentList.forEach((value) => {
                    if (items.student_content_id == value.student_content_id) {
                        content.push({ content_id: value.content_id, student_content_id: value.student_content_id });
                    }
                });
            });
        }
        else {
            content = contentArray;
        }
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            class_id: this.studentData ? this.studentData.class_id : '',
            student_id: this.auth.getUserId(),
            content,
            test_type_id: this.tabShow == 'content' ? '1' : this.tabShow == 'sat' ? '2' : '3'
        };
        this.auth.postService(payload, 'student/cfsReport').subscribe((successData) => {
            const isContentTab = this.tabShow === 'content';
            successData.ResponseObject.forEach(data => {
                let modules = [];
                if (!isContentTab) {
                    data.subject.forEach(subject => subject.modules.forEach(module => {
                        module.subject_name = subject.subject_name;
                        module.student_content_id = data.student_content_id;
                    }));
                    modules = data.subject.flatMap(sub => sub.modules);
                    data.modules = modules;
                }
                else {
                    modules = [data];
                }
                modules.forEach((moudle) => {
                    moudle.question_topics.forEach((topic) => {
                        topic.question_data.map(value => {
                            value.student_id = data.student_id;
                            value.student_name = data.student_name;
                            value.student_content_id = data.student_content_id;
                            value.content_id = data.content_id;
                            value.content_name = data.content_name;
                            if (!isContentTab) {
                                value.module_id = moudle.module_id;
                                value.module_name = moudle.module_name;
                            }
                        });
                    });
                    moudle.question_sub_topics.forEach(subTopic => {
                        subTopic.question_data.map(value => {
                            value.student_id = data.student_id;
                            value.student_name = data.student_name;
                            value.student_content_id = data.student_content_id;
                            value.content_id = data.content_id;
                            value.content_name = data.content_name;
                            if (!isContentTab) {
                                value.module_id = moudle.module_id;
                                value.module_name = moudle.module_name;
                            }
                        });
                    });
                });
            });
            if (calledFrom == '') {
                this.summaryRecordListData = successData.ResponseObject;
            }
            if (this.auth.getRoleId() != '5' && calledFrom != 'overall') {
                let newArray = [];
                const studentSelected = calledFrom == 'mastery' ? this.masteryStudentSelected : calledFrom == 'questionAnalysis' ?
                    this.questionAnalysisStudentSelected : this.studentSelected;
                const contentSelected = calledFrom == 'mastery' ? this.masteryContentSelected : calledFrom == 'questionAnalysis' ?
                    this.questionAnalysisContentSelected : this.contentSelected;
                this.updateCorrectOrIncorrect(calledFrom == '' ? this.summaryRecordListData : successData.ResponseObject);
                successData.ResponseObject.forEach((contentValue) => {
                    studentSelected.forEach((items) => {
                        if (items.student_id === contentValue.student_id) {
                            let studentObj = newArray.find(value => value.student_id === items.student_id);
                            if (!studentObj) {
                                studentObj = {
                                    student_id: items.student_id,
                                    student_name: items.student_name,
                                    data: []
                                };
                                newArray.push(studentObj);
                            }
                            const existingContent = studentObj.data.find(entry => entry.content_id === contentValue.content_id);
                            if (!existingContent) {
                                studentObj.data.push(contentValue);
                            }
                            else {
                                const existingDate = new Date(existingContent.content_start_date).getTime();
                                const newDate = new Date(contentValue.content_start_date).getTime();
                                if (newDate > existingDate || (newDate == existingDate && existingContent.percentage < contentValue.percentage)) {
                                    const index = studentObj.data.indexOf(existingContent);
                                    studentObj.data[index] = contentValue;
                                }
                            }
                        }
                    });
                });
                let newMapped = [];
                newMapped = newArray.map(value => value.data).reduce((acc, curr) => acc.concat(curr), []);
                if (contentSelected.length == 1 && studentSelected.length > 1) {
                    const singleContentMultiStudent = [];
                    if (!isContentTab) {
                        newMapped.forEach(item => {
                            item.subject.forEach((subject) => {
                                subject.modules.forEach((module) => {
                                    const existing = singleContentMultiStudent.find(value => value.content_id === module.module_id);
                                    if (!existing) {
                                        singleContentMultiStudent.push({
                                            content_id: module.module_id,
                                            content_name: module.module_name,
                                            question_topics: [...module.question_topics],
                                            question_sub_topics: [...module.question_sub_topics],
                                            student_content_id: [item.student_content_id]
                                        });
                                    }
                                    else {
                                        existing.question_topics.push(...module.question_topics);
                                        existing.question_sub_topics.push(...module.question_sub_topics);
                                        existing.student_content_id.push(item.student_content_id);
                                    }
                                });
                            });
                            singleContentMultiStudent.forEach((newContentValue) => {
                                newContentValue.question_topics = this.mergeByIdAndSum(newContentValue.question_topics, 'question_topic_id');
                                newContentValue.question_sub_topics = this.mergeByIdAndSum(newContentValue.question_sub_topics, 'question_sub_topic_id');
                            });
                        });
                        successData.ResponseObject.forEach((value) => {
                            value.subject.forEach((subject) => {
                                singleContentMultiStudent.forEach((contentData) => {
                                    subject.modules.forEach((module) => {
                                        if (contentData.content_id == module.module_id) {
                                            module.question_topics = contentData.question_topics;
                                            module.question_sub_topics = contentData.question_sub_topics;
                                        }
                                    });
                                });
                            });
                        });
                    }
                    else {
                        newMapped.forEach(({ content_id, content_name, question_topics, question_sub_topics, student_content_id }) => {
                            const existing = singleContentMultiStudent.find(item => item.content_id === content_id);
                            if (!existing) {
                                singleContentMultiStudent.push({
                                    content_id,
                                    content_name,
                                    question_topics: [...question_topics],
                                    question_sub_topics: [...question_sub_topics],
                                    student_content_id: [student_content_id]
                                });
                            }
                            else {
                                existing.question_topics.push(...question_topics);
                                existing.question_sub_topics.push(...question_sub_topics);
                                existing.student_content_id.push(student_content_id);
                            }
                        });
                        singleContentMultiStudent.forEach((newContentValue) => {
                            newContentValue.question_topics = this.mergeByIdAndSum(newContentValue.question_topics, 'question_topic_id');
                            newContentValue.question_sub_topics = this.mergeByIdAndSum(newContentValue.question_sub_topics, 'question_sub_topic_id');
                        });
                        successData.ResponseObject = singleContentMultiStudent;
                    }
                }
                else {
                    successData.ResponseObject = newMapped;
                }
            }
            this.auth.getRoleId() != '5' && calledFrom != 'overall' ? '' : this.updateCorrectOrIncorrect(calledFrom == '' ? this.summaryRecordListData : successData.ResponseObject);
            if (calledFrom == '') {
                this.totalReport = successData.IsSuccess ? successData.ResponseObject : [];
                this.summaryRecordListData.sort((a, b) => {
                    const dateA = new Date(a.content_start_date).getTime();
                    const dateB = new Date(b.content_start_date).getTime();
                    if (dateA !== dateB) {
                        return dateB - dateA;
                    }
                    return b.percentage - a.percentage;
                });
                this.buildTopicChartOptions();
                this.buildSubTopicOrTimeOrErrorAnalysisChartOptions('subTopic');
                this.buildSubTopicOrTimeOrErrorAnalysisChartOptions('timeAnalysis');
                this.buildSubTopicOrTimeOrErrorAnalysisChartOptions('errorAnalysis');
                setTimeout(() => {
                    this.dataloaded = true;
                }, 300);
            }
            else if (calledFrom == 'overall') {
                this.overallSummary = successData.IsSuccess ? successData.ResponseObject : [];
                this.overallSummary.sort((a, b) => {
                    const dateA = new Date(a.content_start_date).getTime();
                    const dateB = new Date(b.content_start_date).getTime();
                    if (dateA !== dateB) {
                        return dateB - dateA;
                    }
                    return b.percentage - a.percentage;
                });
            }
            else if (calledFrom == 'questionAnalysis') {
                this.questionAnalysisRecord = successData.IsSuccess ? successData.ResponseObject : [];
                if (!isContentTab) {
                    this.questionAnalysisRecord.forEach((value) => {
                        value.subject.forEach(subjectValue => {
                            subjectValue.modules.forEach(moduleValue => {
                                moduleValue.question_sub_topics.forEach(subTopicValue => {
                                    subTopicValue.question_data.forEach(questionValue => {
                                        questionValue.module_id = moduleValue.module_id;
                                        questionValue.module_name = moduleValue.module_name;
                                    });
                                });
                            });
                        });
                    });
                }
                this.formQuestionAnalysisData();
            }
            else {
                this.totalMasteryRecord = successData.IsSuccess ? successData.ResponseObject : [];
                if (!isContentTab) {
                    this.totalMasteryRecord.forEach(value => {
                        value.subject.forEach(subject => {
                            subject.modules.forEach(module => {
                                module.question_sub_topics.forEach(subTopic => {
                                    subTopic.module_name = module.module_name;
                                    subTopic.module_id = module.module_id;
                                });
                            });
                        });
                    });
                }
                this.createMasteryData();
            }
        }, (error) => console.error(error, 'error_reportList'));
    }
    createMasteryData() {
        let contentData = [];
        const keyName = this.auth.getRoleId() != '5' ? 'content_id' : 'student_content_id';
        const isContentTab = this.tabShow === 'content';
        this.masteryContentSelected.forEach(masteryContent => {
            this.totalMasteryRecord.forEach(masteryRecord => {
                if (masteryContent[keyName] === masteryRecord[keyName] &&
                    !contentData.some(c => c[keyName] === masteryRecord[keyName])) {
                    if (!isContentTab) {
                        const subject = masteryRecord.subject.find(s => s.subject_name === this.selectedMasterySubject);
                        if (subject) {
                            subject.modules.forEach(module => {
                                module.question_sub_topics.forEach(subTopicValue => {
                                    subTopicValue.question_data.forEach(value => {
                                        value.module_id = module.module_id;
                                        value.module_name = module.module_name;
                                    });
                                });
                                contentData = contentData.concat(module.question_sub_topics);
                            });
                        }
                    }
                    else {
                        contentData = contentData.concat(masteryRecord.question_sub_topics);
                    }
                }
            });
        });
        const formMasteryData = [];
        contentData.forEach(data => {
            const index = formMasteryData.findIndex(item => item.question_sub_topic_id === data.question_sub_topic_id);
            if (index === -1) {
                formMasteryData.push({
                    question_sub_topic_id: data.question_sub_topic_id,
                    question_sub_topic_name: data.sub_topic,
                    data: [data],
                    average_percentage: 0
                });
            }
            else {
                formMasteryData[index].data.push(data);
            }
        });
        formMasteryData.forEach((items) => {
            this.masteryContentSelected.forEach((value) => {
                const checkContentAlreadyExist = items.data.some((code) => code[keyName] == value[keyName]);
                if (!checkContentAlreadyExist) {
                    items.data.push({
                        student_content_id: '0',
                        content_id: value.content_id,
                        content_name: value.content_name,
                        percentage: '0', average_percentage: 0
                    });
                }
            });
        });
        formMasteryData.forEach((items) => {
            const valid = items.data.filter(d => d.student_content_id !== '0');
            const sum = valid.reduce((acc, d) => acc + parseInt(d.percentage), 0);
            items.average_percentage = valid.length ? sum / valid.length : 0;
        });
        this.masteryData = formMasteryData.sort((a, b) => b.average_percentage - a.average_percentage);
    }
    onContentSelectionChange(event, calledFrom, calledBy = '') {
        if (calledFrom == 'all') {
            calledBy == 'mastery' ? this.masteryContentSelected = event : calledBy == 'questionAnalysis' ?
                this.questionAnalysisContentSelected = event : this.contentSelected = event;
        }
        const isContentTab = this.tabShow === 'content';
        const selectedContent = calledBy == 'mastery' ? this.masteryContentSelected : calledBy == 'questionAnalysis' ?
            this.questionAnalysisContentSelected : this.contentSelected;
        if (calledBy == '') {
            this.showTable = this.showTable1 = this.showTable2 = false;
        }
        else {
            this.showTable3 = false;
        }
        if (this.auth.getRoleId() == '5') {
            this.getReportList(selectedContent, 'mastery');
        }
        else {
            const selectedStudent = calledBy == 'mastery' ? this.masteryStudentSelected : calledBy == 'questionAnalysis' ?
                this.questionAnalysisStudentSelected : this.studentSelected;
            const studentList = this.formStudentList(calledBy).studentList;
            if (calledBy == '') {
                this.allowSingleSelectStudent = this.contentSelected.length > 1;
                this.studentSetting();
            }
            setTimeout(() => {
                calledBy == 'mastery' ? this.masteryStudentSelected = studentList : calledBy == 'questionAnalysis' ?
                    this.questionAnalysisStudentSelected = studentList : this.studentSelected = studentList;
                let selectStudent = [];
                if (selectedStudent.length > 1 || selectedStudent.length == 0) {
                    selectStudent = studentList.length != 0 ? [studentList[0]] : [];
                }
                else if (selectedStudent.length == 1) {
                    const checkStudentAlreadyExist = selectedStudent.some(value => studentList.some(student => student.student_id == value.student_id));
                    selectStudent = checkStudentAlreadyExist ? selectedStudent : studentList.length != 0 ? [studentList[0]] : [];
                }
                calledBy == 'mastery' ? this.masteryStudentList = studentList : calledBy == 'questionAnalysis' ?
                    this.questionAnalysisStudentList = studentList : this.studentList = studentList;
                calledBy == 'mastery' ? this.masteryStudentSelected = selectStudent : calledBy == 'questionAnalysis' ?
                    this.questionAnalysisStudentSelected = selectedStudent : this.studentSelected = selectStudent;
                const commonGraphData = this.formArrayValue(this.contentList, selectStudent, calledBy);
                !isContentTab ? this.getSubjectList(commonGraphData, calledBy) : this.getReportList(commonGraphData, calledBy);
            }, 0);
        }
    }
    updateCorrectOrIncorrect(arrayValue) {
        const isContentTab = this.tabShow === 'content';
        arrayValue.forEach(data => {
            const modules = isContentTab ? [data] : data.subject.flatMap(sub => sub.modules);
            modules.forEach(module => {
                let correct = 0, incorrect = 0;
                module.question_topics.forEach(topic => {
                    const correctAns = parseInt(topic.correct_answers);
                    const totalQ = parseInt(topic.total_questions);
                    correct += correctAns;
                    incorrect += totalQ - correctAns;
                    topic.question_data.forEach(q => {
                        q.question_topic_id = topic.question_topic_id;
                        q.question_topic = topic.question_topic;
                    });
                });
                const total = correct + incorrect;
                module.correct_answer = correct;
                module.incorrect_answer = incorrect;
                module.correct_answer_percentage = Math.round((correct / total) * 100);
                module.incorrect_answer_percentage = Math.round((incorrect / total) * 100);
                module.percentage = Math.round((correct / total) * 100);
                module.question_sub_topics?.forEach(sub => {
                    sub.content_id = data.content_id;
                    sub.content_name = data.content_name;
                    sub.question_data.forEach(q => {
                        q.question_sub_topic_id = sub.question_sub_topic_id;
                        q.sub_topic = sub.sub_topic;
                    });
                });
            });
            if (!isContentTab) {
                // Subject-level aggregation
                data.subject.forEach(sub => {
                    const subModules = sub.modules;
                    const correct = subModules.reduce((acc, mod) => acc + (mod.correct_answer || 0), 0);
                    const incorrect = subModules.reduce((acc, mod) => acc + (mod.incorrect_answer || 0), 0);
                    const total = correct + incorrect;
                    sub.correct_answer = correct;
                    sub.incorrect_answer = incorrect;
                    sub.correct_answer_percentage = total ? Math.round((correct / total) * 100) : 0;
                    sub.incorrect_answer_percentage = total ? Math.round((incorrect / total) * 100) : 0;
                    sub.percentage = total ? Math.round((correct / total) * 100) : 0;
                    // Store only Reading & Writing and Math percentages
                    if (sub.subject_name === 'Reading & Writing') {
                        data.RW_Percentage = sub.percentage;
                    }
                    else if (sub.subject_name === 'Math') {
                        data.Math_Percentage = sub.percentage;
                    }
                });
                const correct = modules.map(num => num.correct_answer).reduce((acc, curr) => acc + curr, 0);
                const incorrect = modules.map(num => num.incorrect_answer).reduce((acc, curr) => acc + curr, 0);
                const total = correct + incorrect;
                data.correct_answer = correct;
                data.incorrect_answer = incorrect;
                data.correct_answer_percentage = Math.round((correct / total) * 100);
                data.incorrect_answer_percentage = Math.round((incorrect / total) * 100);
                data.percentage = Math.round((correct / total) * 100);
            }
        });
    }
    onStudentChange(event, calledFrom, calledBy = '') {
        if (calledFrom == 'all') {
            calledBy == 'mastery' ? this.masteryStudentSelected = event : calledBy == 'questionAnalysis' ?
                this.questionAnalysisStudentSelected = event : this.studentSelected = event;
        }
        const isContentTab = this.tabShow === 'content';
        const studentSelected = calledBy == 'mastery' ? this.masteryStudentSelected : calledBy == 'questionAnalysis' ?
            this.questionAnalysisStudentSelected : this.studentSelected;
        const commonGraphData = this.formArrayValue(this.contentList, studentSelected, calledBy);
        if (calledBy == '') {
            this.showTable = this.showTable1 = this.showTable2 = false;
        }
        else {
            this.showTable3 = false;
        }
        !isContentTab ? this.getSubjectList(commonGraphData, calledBy) : this.getReportList(commonGraphData, calledBy);
    }
    // showAllSelected(event) {
    //     this.selectedContent.showAll = event.target.checked;
    //     let studentList = [];
    //     this.totalReport.forEach(items => {
    //         let selectAllData = [];
    //         if (this.tabShow !== 'content') {
    //             items.subject.forEach((subject) => {
    //                 const subjectSelected = this.showTable ? this.selectedTopicSubject : this.showTable1 ? this.selectedSubTopicSubject :
    //                     this.showTable2 ? this.selectedQuestionAnalysisSubject : this.showTable3 ? this.selectedMasterySubject : '';
    //                 console.log(subjectSelected, 'subjectSelected');
    //                 if (subject.subject_name == subjectSelected) {
    //                     subject.modules.forEach((module) => {
    //                         const totalData = this.selectedContent?.question_topic_id ? module.question_topics : module.question_sub_topics;
    //                         selectAllData.push(totalData);
    //                     });
    //                     const flatData = [].concat(...selectAllData);
    //                     console.log(flatData, 'flatData');
    //                     if (event.target.checked) {
    //                         studentList = [].concat(...flatData.map(value => value.question_data));
    //                     } else {
    //                         const id = this.selectedContent?.question_topic_id ? 'question_topic_id' : 'question_sub_topic_id';
    //                         studentList = [].concat(...flatData.filter((value) => value[id] == this.selectedContent[id]).map(data => data.question_data));
    //                     }
    //                     console.log(studentList, 'studentList');
    //                     this.createStudentDataTable(studentList, this.showTable3 ? 'mastery' : '');
    //                 }
    //             });
    //
    //         } else {
    //             const totalData = this.selectedContent?.question_topic_id ? items.question_topics : items.question_sub_topics;
    //             console.log(totalData, 'totalData');
    //             if (event.target.checked) {
    //                 studentList = totalData.map(value => value.question_data).flat();
    //             } else {
    //                 const id = this.selectedContent?.question_topic_id ? 'question_topic_id' : 'question_sub_topic_id';
    //                 studentList = totalData.filter((value) => value[id] == this.selectedContent[id]).map(data => data.question_data).flat();
    //             }
    //             console.log(studentList, 'studentList');
    //             this.createStudentDataTable(studentList, this.showTable3 ? 'mastery' : '');
    //         }
    //     });
    // }
    showAllSelected(event) {
        this.selectedContent.showAll = event.target.checked;
        let studentList = [];
        console.log(this.totalReport, 'totalReport');
        this.totalReport.forEach(items => {
            let selectAllData = [];
            const isContentTab = this.tabShow === 'content';
            const idKey = this.selectedContent?.question_topic_id ? 'question_topic_id' : 'question_sub_topic_id';
            if (!isContentTab) {
                items.subject.forEach(subject => {
                    const subjectSelected = this.showTable ? this.selectedTopicSubject : this.showTable1 ? this.selectedSubTopicSubject
                        : this.showTable2 ? this.selectedQuestionAnalysisSubject : this.showTable3 ? this.selectedMasterySubject : '';
                    if (subject.subject_name !== subjectSelected)
                        return;
                    subject.modules.forEach(module => {
                        const data = this.selectedContent?.question_topic_id ? module.question_topics : module.question_sub_topics;
                        if (Array.isArray(data))
                            selectAllData.push(data);
                    });
                    const flatData = [].concat(...selectAllData);
                    studentList = event.target.checked ? [].concat(...flatData.map(v => v.question_data))
                        : [].concat(...flatData.filter(v => v[idKey] == this.selectedContent[idKey]).map(v => v.question_data));
                    this.createStudentDataTable(studentList, this.showTable3 ? 'mastery' : '');
                });
            }
            else {
                const totalData = this.selectedContent?.question_topic_id ? items.question_topics : items.question_sub_topics;
                console.log(totalData, 'totaldaa');
                if (!Array.isArray(totalData))
                    return;
                studentList = event.target.checked
                    ? [].concat(...totalData.map(v => v.question_data))
                    : [].concat(...totalData.filter(v => v[idKey] == this.selectedContent[idKey]).map(v => v.question_data));
                console.log(studentList, 'syuden');
                this.createStudentDataTable(studentList, this.showTable3 ? 'mastery' : '');
            }
        });
    }
    formQuestionAnalysisData(moduleSelected = '') {
        let studentList = [];
        const isContentTab = this.tabShow === 'content';
        if (this.questionAnalysisRecord.length != 0) {
            this.questionAnalysisRecord.forEach(items => {
                if (!isContentTab) {
                    items.subject.forEach((subject) => {
                        if (this.selectedQuestionAnalysisSubject == subject.subject_name) {
                            this.selectedQuestionModule = subject.modules;
                            if (moduleSelected == '') {
                                this.questionAnalysisModuleSelected = [subject.modules[0]] ?? [];
                            }
                            subject.modules.forEach((module) => {
                                if (module.module_id == this.questionAnalysisModuleSelected[0]?.module_id) {
                                    const totalData = module.question_sub_topics;
                                    studentList = totalData.map(value => value.question_data).flat();
                                    this.createStudentDataTable(studentList, 'questionAnalysis');
                                }
                            });
                        }
                    });
                }
                else {
                    const totalData = items.question_sub_topics;
                    studentList = totalData.map(value => value.question_data).flat();
                    this.createStudentDataTable(studentList, 'questionAnalysis');
                }
            });
        }
        else {
            this.questionAnalysisListData = [];
        }
    }
    createStudentDataTable(arrayValue, calledBy = '') {
        const studentListData = [];
        const studentSelected = calledBy == 'mastery' ? this.masteryStudentSelected : calledBy == 'questionAnalysis' ?
            this.questionAnalysisStudentSelected : this.studentSelected;
        const selectedStudentList = this.auth.getRoleId() != '5' ? studentSelected : [{
                student_id: this.auth.getUserId(),
                student_name: this.auth.getSessionData('firstname') + ' ' + this.auth.getSessionData('lastname')
            }];
        selectedStudentList.forEach((studentList) => {
            arrayValue.forEach((student) => {
                const isContentTab = this.tabShow === 'content';
                const checkCondition = isContentTab ? studentList.student_id == student.student_id : this.selectedContent ?
                    studentList.student_id == student.student_id && this.selectedContent?.content_id == student.module_id :
                    studentList.student_id == student.student_id;
                if (checkCondition) {
                    const checkStudentExist = studentListData.find((value) => value.student_id == student.student_id);
                    if (checkStudentExist) {
                        // Push only unique question_no values
                        const existingQuestions = new Set(checkStudentExist.questionData.map(q => q.question_no));
                        if (!existingQuestions.has(student.question_no)) {
                            checkStudentExist.questionData.push(student);
                        }
                    }
                    else {
                        studentListData.push({
                            student_id: student.student_id,
                            student_name: student.student_name,
                            questionData: [student]
                        });
                    }
                }
            });
        });
        studentListData.forEach(items => items.questionData.sort((a, b) => parseInt(a.question_no) - parseInt(b.question_no)));
        this.studentQuestionListData = studentListData;
        studentListData.unshift({
            student_name: 'Total Incorrect Answer',
            student_id: '0',
            questionData: []
        });
        const incorrectSummary = {};
        studentListData.forEach((student) => {
            if (student.student_id !== '0') {
                student.questionData.forEach((question) => {
                    const qNo = question.question_no;
                    if (!incorrectSummary[qNo]) {
                        incorrectSummary[qNo] = { total_questions: 0, total_correct_answer: 0, total_in_correct_answer: 0, question_no: question.question_no };
                    }
                    incorrectSummary[qNo].total_questions += 1;
                    if (question.is_correct === 'false') {
                        incorrectSummary[qNo].total_in_correct_answer += 1;
                    }
                    else {
                        incorrectSummary[qNo].total_correct_answer += 1;
                    }
                });
            }
        });
        const totalRow = studentListData.find(student => student.student_id === '0');
        studentListData[1].questionData.forEach((value) => {
            Object.entries(incorrectSummary).forEach(([question_no, data]) => {
                if (value.question_no == data.question_no) {
                    totalRow.questionData.push({
                        total_questions: data.total_questions,
                        total_in_correct_answer: data.total_in_correct_answer,
                        total_correct_answer: data.total_correct_answer
                    });
                }
            });
        });
        calledBy == 'questionAnalysis' ? this.questionAnalysisListData = studentListData : this.studentQuestionListData = studentListData;
    }
    formStudentList(calledBy) {
        const studentList = [];
        const contentSelected = calledBy == 'mastery' ? this.masteryContentSelected : calledBy == 'questionAnalysis' ?
            this.questionAnalysisContentSelected : this.contentSelected;
        this.contentList.forEach(({ content_id, student_details }) => {
            contentSelected.forEach((items) => {
                if (items.content_id == content_id) {
                    student_details.forEach(({ student_id, student_name }) => {
                        const studentExists = studentList.some(s => s.student_id === student_id);
                        if (!studentExists) {
                            studentList.push({ student_id, student_name });
                        }
                    });
                }
            });
        });
        return { studentList };
    }
    showMasterData(selectedData, index) {
        this.masteryData.forEach((items, idnx) => {
            if (index == idnx) {
                items.showStudentData = !items.showStudentData;
            }
            else {
                items.showStudentData = false;
            }
        });
        this.selectedContent = selectedData;
        if (this.tabShow != 'content') {
            this.selectedContent.content_id = selectedData.module_id;
        }
        this.selectedContent.showAll = false;
        this.showTable = false;
        this.showTable1 = false;
        this.showTable2 = false;
        this.showTable3 = true;
        this.createStudentDataTable(selectedData.question_data, 'mastery');
        const id = 'master_analysis_' + this.selectedContent?.sub_topic + this.selectedContent?.question_sub_topic_id;
        setTimeout(() => {
            if (document.getElementById(id)) {
                document.getElementById(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'nearest'
                });
            }
        }, 500);
    }
    backToClass() {
        const reportCalledFrom = this.auth.getSessionData('reportCalledFrom') ?? '';
        if (reportCalledFrom == 'list') {
            this.router.navigate(['/class/list-class']);
        }
        else if (['assessment_correction', 'assignment_correction'].includes(reportCalledFrom)) {
            const studentContent = JSON.parse(this.auth.getSessionData('correction_student-content'));
            const redirect = this.auth.getSessionData('correction_return');
            this.auth.setSessionData('student-content', JSON.stringify(studentContent));
            this.auth.setSessionData('correction-return', redirect);
            if (reportCalledFrom == 'assessment_correction') {
                this.router.navigate(['assessment-correction/correction-page']);
            }
            else {
                this.router.navigate(['assignment-correction/correction-page']);
            }
        }
        else if (['assessment', 'assignment'].includes(reportCalledFrom)) {
            this.router.navigate(['studentlogin/' + reportCalledFrom]);
        }
        else if (reportCalledFrom == 'student-content') {
            this.router.navigate(['student-content/list-content/new']);
        }
        else if (reportCalledFrom != '') {
            this.router.navigate([this.auth.getRoleId() == '5' ? 'studentlogin/class-detail' : 'class/topicsAndCurriculum/3']);
        }
    }
    calculatePercentage(part, total) {
        if (total === 0) {
            return 'Cannot calculate percentage with a total of zero.';
        }
        const percentage = Math.round((part / total) * 100);
        return percentage;
    }
    close() {
        this.nameOrContentSelected = false;
        this.modalRef.close();
    }
    testTypeList() {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
        };
        this.auth.postService(payload, 'content/testType').subscribe((successData) => {
            console.log(successData, 'tets_type');
            this.testTypeListData = successData.IsSuccess ? successData.ResponseObject : [];
            this.tabShow = this.testTypeListData[0]?.test_type.toLowerCase();
            this.getContentList();
        }, (error => { this.getContentList(); console.error(error, 'error_test_type'); }));
    }
    callViewAnalytic(type) {
        this.tabShow = type.test_type.toLowerCase();
        console.log(type);
        this.studentList = [];
        this.totalReport = [];
        this.summaryRecordListData = [];
        this.questionAnalysisListData = [];
        this.overallSummary = [];
        this.masteryData = [];
        this.contentSelected = [];
        this.getContentList('tabChanged');
    }
    onModalScroll() {
        const scrollTop = this.modalBody.nativeElement.scrollTop;
        if (scrollTop > this.showScrollHeight) {
            this.showScroll = true;
        }
        else if (this.showScroll && scrollTop < this.hideScrollHeight) {
            this.showScroll = false;
        }
    }
    windowScrollUp() {
        if (this.modalBody) {
            this.modalBody.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    static { this.ɵfac = function SatReportComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SatReportComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SatReportComponent, selectors: [["app-sat-report"]], viewQuery: function SatReportComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.showQuestion = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalBody = _t.first);
        } }, decls: 68, vars: 26, consts: [["multiSelect1", ""], ["showQuestion", ""], ["questionAnalysis", ""], ["tableDetails", ""], ["summaryAndTotalContentReport", ""], ["percentageTemplate", ""], ["multiSelect2", ""], ["modalBody", ""], [1, "container-fluid", "pt-2"], [1, "row"], [1, "col-12"], ["class", "nav nav-tabs mb-0 color-primary col-12", 4, "ngIf"], ["class", "btn btn-outline-primary pull-right button-absolute", 3, "click", 4, "ngIf"], [1, "card", "mt-1"], [1, "card-body", "py-3", 2, "z-index", "unset !important"], [1, "col-4"], [1, "font-weight-bold", "mb-1"], [1, "color-primary"], [3, "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll", "placeholder", "settings", "data", "disabled", "ngModel"], ["class", "col-4", 4, "ngIf"], ["class", "card mt-2", 4, "ngIf"], ["class", "row mt-3 px-3", 4, "ngIf"], [1, "row", "mt-3", "px-3"], [1, "card", "col-12"], [1, "card-body", "py-3", "px-0"], [1, "col-6"], [1, "font-weight-bold"], [1, "mb-0", "text-right"], [1, "mr-1", 2, "font-size", "12px"], [1, "fa", "fa-square", "p-1", 2, "font-size", "14px", "color", "#007bff"], [1, "fa", "fa-square", "p-1", 2, "font-size", "14px", "color", "#28A745"], [1, "fa", "fa-square", "p-1", 2, "font-size", "14px", "color", "#ffc107"], [2, "font-size", "12px"], [1, "fa", "fa-square", "p-1", 2, "font-size", "14px", "color", "#ff0000"], ["class", "col-12 mt-2", 4, "ngIf"], [1, "col-5", "mt-2"], ["class", "col-4 mt-2", 4, "ngIf"], [1, "col-12", "mt-3"], ["class", "row my-4 justify-content-center list-card", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "nav", "nav-tabs", "mb-0", "color-primary", "col-12"], ["class", "nav-item cursor", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "nav-item", "cursor", 3, "ngStyle"], ["aria-current", "page", 3, "click"], [1, "report-count"], [1, "btn", "btn-outline-primary", "pull-right", "button-absolute", 3, "click"], [1, "fa", "fa-long-arrow-left", "mr-1"], [3, "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll", "placeholder", "settings", "data", "ngModel"], [1, "card", "mt-2"], [1, "card-body", "p-3"], [1, "col-12", "d-flex", "justify-content-center"], ["alt", "No Report Available", "src", "assets/images/no_report_available.png", 2, "width", "30%"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "col-12", "mt-2", "px-0"], [1, "mb-0"], ["class", "nav nav-tabs mt-2 mb-0 color-primary col-12", 4, "ngIf"], ["id", "chart"], [3, "series", "chart", "stroke", "dataLabels", "plotOptions", "xaxis", "colors", "fill", "yaxis", "legend", "tooltip"], [1, "row", "mt-3", 3, "id"], [1, "col-12", 3, "ngbCollapse"], [4, "ngTemplateOutlet"], [1, "nav", "nav-tabs", "mt-2", "mb-0", "color-primary", "col-12"], ["class", "nav-item cursor", 4, "ngFor", "ngForOf"], [1, "nav-item", "cursor"], ["aria-current", "page", 1, "nav-link", 3, "click", "ngClass"], [1, "col-12", "mt-2"], ["class", "mt-2 nav nav-tabs mb-0 color-primary col-12", 4, "ngIf"], ["id", "chart1"], [1, "mt-2", "nav", "nav-tabs", "mb-0", "color-primary", "col-12"], [1, "card", "col-12", "mt-2"], [2, "font-size", "12px", "color", "#313131"], [1, "fa", "fa-square", "p-1", 2, "font-size", "14px", "color", "#2082cc"], [1, "mx-1", 2, "font-size", "12px", "color", "#313131"], [1, "fa", "fa-square", "p-1", 2, "font-size", "14px", "color", "#00E396"], ["class", "nav nav-tabs mb-0 color-primary col-12 mt-2", 4, "ngIf"], ["class", "col-12 d-flex justify-content-center", 4, "ngIf"], [1, "nav", "nav-tabs", "mb-0", "color-primary", "col-12", "mt-2"], [1, "col-4", "mt-2"], [3, "ngModelChange", "onSelect", "onDeSelect", "placeholder", "settings", "data", "ngModel"], ["id", "chart3"], [3, "series", "chart", "xaxis", "stroke", "colors", "dataLabels", "legend", "markers", "grid", "yaxis", "title", "tooltip"], ["class", "col-12", 4, "ngIf"], ["id", "chart4"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "xaxis", "legend", "colors", "grid"], [1, "card-body", "px-0", "py-3"], [1, "font-weight-bold", "col-12"], ["class", "col-12 mt-3", 4, "ngIf"], [1, "row", "my-4", "justify-content-center", "list-card"], [1, "nodataList", 2, "background", "#FFFFFF", "cursor", "default"], ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "font-weight-bold", 2, "font-size", "14px"], ["style", "height: 20px", 3, "ngClass", "class", 4, "ngFor", "ngForOf"], ["class", "row", 3, "id", 4, "ngIf"], [2, "height", "20px", 3, "ngClass"], ["class", "progress-bar", "role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 3, "width", "ngClass", "click", 4, "ngIf"], ["style", "font-weight: 600", 4, "ngIf"], ["style", "font-weight: 600", "class", "ml-2", 4, "ngIf"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 3, "click", "ngClass"], [2, "font-weight", "600"], ["class", "ml-1", 4, "ngIf"], [1, "ml-1"], [1, "ml-2", 2, "font-weight", "600"], [1, "row", 3, "id"], [1, "card"], [1, "resource-link-card"], [1, "modal-header", "align-items-center"], [1, "contenttext", "text-center", "mb-0"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "modal-body", "px-3", "py-2", "position-relative", 2, "overflow-y", "auto", "max-height", "75vh", "background-color", "#f7f7f9"], [3, "questionArray", "showFullQuestion", "topicId", "subTopicId", "student_content_id", "selectedQuestion", "selectedType", "showAll"], ["title", "Scroll To Top", "aria-hidden", "true", 1, "cursor", "color-primary", "fa", "fa-3x", "fa-chevron-circle-up", "scroll-to-top", 3, "click", "ngClass"], [1, "modal-footer"], [1, "col-12", "px-0"], [1, "btn", "cancel", "pull-right", 3, "click"], [1, "col-md-12", "col-12", "sticky-table", "my-3"], [1, "row", "align-items-center", "justify-content-between", "mb-2"], [1, "col-12", "mb-0"], [1, "color-primary", "font-weight-bold"], ["class", "tableFixHead mt-2", 4, "ngIf"], ["class", "row d-flex justify-content-center list-card mt-5", 4, "ngIf"], [1, "tableFixHead", "mt-2"], [1, "table", "table-bordered", "table-striped", "table-hover", "mb-0", 2, "min-width", "max-content"], [2, "background", "#cdd9f6"], [1, "text-center", "sticky-col", 2, "width", "120px"], ["style", "width: 60px", "class", "text-center", 4, "ngFor", "ngForOf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "text-center", 2, "width", "60px"], [3, "click"], [3, "ngClass"], ["class", "color-primary cursor", 3, "click", 4, "ngIf"], ["class", "font-weight-bold font-16", 4, "ngIf"], [1, "color-primary", "cursor", 3, "click"], [1, "font-weight-bold", "font-16"], ["style", "font-size: 18px", "class", "fa fa-check-circle color-green cursor", 3, "click", 4, "ngIf"], ["style", "font-size: 18px", "class", "fa fa-times-circle color-red cursor", 3, "click", 4, "ngIf"], ["class", "font-weight-bold mb-0 font-16", 3, "ngClass", 4, "ngIf"], [1, "fa", "fa-check-circle", "color-green", "cursor", 2, "font-size", "18px", 3, "click"], [1, "fa", "fa-times-circle", "color-red", "cursor", 2, "font-size", "18px", 3, "click"], [1, "font-weight-bold", "mb-0", "font-16", 3, "ngClass"], [1, "row", "d-flex", "justify-content-center", "list-card", "mt-5"], [1, "nodataList"], [1, "col-8", "mb-0"], ["class", "font-weight-bold", 4, "ngIf"], ["class", "mx-1", 4, "ngIf"], ["title", "Show All Questions", 1, "col-4", "font-weight-bold", "d-flex", "align-items-center", "justify-content-end", "mb-0", 2, "color", "black"], ["id", "showAll", "type", "checkbox", 1, "cursor", 3, "change", "checked"], ["for", "showAll", 1, "pl-2", "cursor", "mb-0"], [1, "mx-1"], [1, "table", "table-bordered", "table-striped", "table-hover", "mb-0"], [1, "text-center", "sticky-col", "align-middle"], ["class", "text-center sticky-col align-middle", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "text-center", "sticky-col"], ["class", "text-center", 4, "ngIf"], [1, "text-center"], [3, "ngbCollapse"], ["colspan", "12"], [1, "p-3", "border", "rounded", 2, "background", "#FFFFFF !important"], [1, "font-weight-bold", "color-primary"], ["class", "font-weight-bold", "style", "color: #007bff", 4, "ngIf"], ["style", "color: #28A745", "class", "font-weight-bold", 4, "ngIf"], ["style", "color: #ffc107", "class", "font-weight-bold", 4, "ngIf"], ["class", "font-weight-bold", "style", "color: #ff0000", 4, "ngIf"], [1, "font-weight-bold", 2, "color", "#007bff"], [1, "font-weight-bold", 2, "color", "#28A745"], [1, "font-weight-bold", 2, "color", "#ffc107"], [1, "font-weight-bold", 2, "color", "#ff0000"], ["class", "font-weight-bold", "style", "color: #28A745", 4, "ngIf"], ["class", "font-weight-bold", "style", "color: #ffc107", 4, "ngIf"]], template: function SatReportComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 8)(1, "div", 9)(2, "div", 10);
            i0.ɵɵtemplate(3, SatReportComponent_ul_3_Template, 2, 1, "ul", 11)(4, SatReportComponent_button_4_Template, 3, 0, "button", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div", 13)(6, "div", 14)(7, "div", 9)(8, "div", 15)(9, "label", 16);
            i0.ɵɵtext(10, "Class Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "h5", 17);
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 15)(14, "label", 16);
            i0.ɵɵtext(15, "Content Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "ng-multiselect-dropdown", 18, 0);
            i0.ɵɵtwoWayListener("ngModelChange", function SatReportComponent_Template_ng_multiselect_dropdown_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.contentSelected, $event) || (ctx.contentSelected = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("onSelect", function SatReportComponent_Template_ng_multiselect_dropdown_onSelect_16_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onContentSelectionChange($event, "single")); })("onDeSelect", function SatReportComponent_Template_ng_multiselect_dropdown_onDeSelect_16_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onContentSelectionChange($event, "single")); })("onSelectAll", function SatReportComponent_Template_ng_multiselect_dropdown_onSelectAll_16_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onContentSelectionChange($event, "all")); })("onDeSelectAll", function SatReportComponent_Template_ng_multiselect_dropdown_onDeSelectAll_16_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onContentSelectionChange($event, "all")); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(18, SatReportComponent_div_18_Template, 5, 4, "div", 19);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(19, SatReportComponent_div_19_Template, 5, 0, "div", 20)(20, SatReportComponent_div_20_Template, 7, 6, "div", 20)(21, SatReportComponent_div_21_Template, 14, 15, "div", 21)(22, SatReportComponent_div_22_Template, 15, 15, "div", 21)(23, SatReportComponent_div_23_Template, 20, 4, "div", 21)(24, SatReportComponent_div_24_Template, 31, 8, "div", 21)(25, SatReportComponent_div_25_Template, 16, 11, "div", 21);
            i0.ɵɵelementStart(26, "div", 22)(27, "div", 23)(28, "div", 24)(29, "div", 9)(30, "div", 25)(31, "h4", 26);
            i0.ɵɵtext(32, "Mastery Score");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(33, "div", 25)(34, "p", 27)(35, "span", 28);
            i0.ɵɵelement(36, "i", 29);
            i0.ɵɵtext(37, "- Master");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "span", 28);
            i0.ɵɵelement(39, "i", 30);
            i0.ɵɵtext(40, "- Advanced");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "span", 28);
            i0.ɵɵelement(42, "i", 31);
            i0.ɵɵtext(43, "- Expert");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "span", 32);
            i0.ɵɵelement(45, "i", 33);
            i0.ɵɵtext(46, "- NoVoice");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(47, SatReportComponent_div_47_Template, 3, 1, "div", 34);
            i0.ɵɵelementStart(48, "div", 35)(49, "label", 16);
            i0.ɵɵtext(50, "Content Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "ng-multiselect-dropdown", 18, 0);
            i0.ɵɵtwoWayListener("ngModelChange", function SatReportComponent_Template_ng_multiselect_dropdown_ngModelChange_51_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.masteryContentSelected, $event) || (ctx.masteryContentSelected = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("onSelect", function SatReportComponent_Template_ng_multiselect_dropdown_onSelect_51_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onContentSelectionChange($event, "single", "mastery")); })("onDeSelect", function SatReportComponent_Template_ng_multiselect_dropdown_onDeSelect_51_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onContentSelectionChange($event, "single", "mastery")); })("onSelectAll", function SatReportComponent_Template_ng_multiselect_dropdown_onSelectAll_51_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onContentSelectionChange($event, "all", "mastery")); })("onDeSelectAll", function SatReportComponent_Template_ng_multiselect_dropdown_onDeSelectAll_51_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onContentSelectionChange($event, "all", "mastery")); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(53, SatReportComponent_div_53_Template, 5, 4, "div", 36);
            i0.ɵɵelementStart(54, "div", 37);
            i0.ɵɵtemplate(55, SatReportComponent_div_55_Template, 4, 0, "div", 38)(56, SatReportComponent_div_56_Template, 2, 1, "div", 39);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(57, SatReportComponent_div_57_Template, 7, 6, "div", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(58, SatReportComponent_ng_template_58_Template, 12, 13, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(60, SatReportComponent_ng_template_60_Template, 8, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(62, SatReportComponent_ng_template_62_Template, 20, 6, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(64, SatReportComponent_ng_template_64_Template, 19, 7, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(66, SatReportComponent_ng_template_66_Template, 4, 4, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.showContentTypeTab);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.auth.getRoleId() == "5" || ctx.auth.getRoleId() != "5" && ctx.reportCalledFrom != "schedule" && ctx.reportCalledFrom != "classDetails" && ctx.reportCalledFrom != "list" && ctx.showContentTypeTab);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.studentData.class_name);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("placeholder", "Select Content")("settings", ctx.settings1)("data", ctx.contentList)("disabled", false);
            i0.ɵɵtwoWayProperty("ngModel", ctx.contentSelected);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.auth.getRoleId() != "5" && ctx.studentList.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.totalReport.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.totalReport.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.dataloaded && ctx.totalReport.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.dataloaded && ctx.totalReport.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.dataloaded && ctx.totalReport.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.totalReport.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.totalReport.length != 0 && ctx.auth.getRoleId() != "5" && ctx.questionAnalysisSubjectList.length != 0);
            i0.ɵɵadvance(22);
            i0.ɵɵproperty("ngIf", ctx.tabShow != "content" && ctx.masterySubjectList.length != 0);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("placeholder", "Select Content Name")("settings", ctx.settings1)("data", ctx.contentList)("disabled", false);
            i0.ɵɵtwoWayProperty("ngModel", ctx.masteryContentSelected);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.auth.getRoleId() != "5" && ctx.masteryStudentList.length != 0);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.masteryData.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.masteryData.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.overallSummary.length != 0);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i2.NgControlStatus, i2.NgModel, i3.MultiSelectComponent, i4.ChartComponent, i5.NgbCollapse, i6.QuestionReportComponent, i7.CustomDateFormatPipe], styles: ["span[_ngcontent-%COMP%] {\n  i {\n    font-size: 20px;\n    color: #1e6bb8;\n  }\n  img {\n    font-size: 20px;\n    color: #1e6bb8;\n  }\n}\n\n.table-spacing[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n\n.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd) {\n  //background-color: #cdd9f633;\n  background-color: white;\n}\n\n.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even) {\n  //background-color: #cdd9f633;\n  background-color: rgba(241, 244, 251, .5);\n}\n\n.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.searchInput[_ngcontent-%COMP%]:hover {\n  //background-color: #cdd9f633;\n  background-color: white;\n}\n\n.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgba(241, 244, 251, .5);\n}\n\n.table-input[_ngcontent-%COMP%] {\n  font-weight: 400;\n  line-height: normal;\n  padding: 0.375em 0.75em;\n  margin-bottom: 0;\n  width: 100%;\n}\n\n.sticky-table[_ngcontent-%COMP%] {\n  .sticky-col {\n    position: sticky;\n    z-index: 1;\n    left: -1px; \n    background: #cdd9f6; \n    min-width: 150px; \n    max-width: 150px;\n  }\n\n  thead .sticky-col {\n    z-index: 2; \n\n  }\n\n  tbody .sticky-col {\n    background: #FFFFFF !important;\n  }\n\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  z-index: unset !important;\n}\n\n.progress-novoice-border[_ngcontent-%COMP%] {\n  border: 1px solid #ff0000;\n  background: #FFFFFF !important;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  border-radius: 6px !important;\n}\n\n.progress-master[_ngcontent-%COMP%] {\n  background-color: #007bff !important;\n}\n\n.progress-advanced[_ngcontent-%COMP%] {\n  background-color: #28A745 !important;\n}\n\n.progress-expert[_ngcontent-%COMP%] {\n  background-color: #ffc107 !important;\n}\n\n.progress-novoice[_ngcontent-%COMP%] {\n  background-color: #ff0000 !important;\n}\n\n.tableFixHead[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: 400px;\n}\n\n.tableFixHead[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: -1px;\n  background: #cdd9f6 !important;\n}\n\n.font-16[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.text-blue[_ngcontent-%COMP%] {\n  color: #007bff !important;\n}\n\n.text-green[_ngcontent-%COMP%] {\n  color: #28A745 !important;\n}\n\n.text-yellow[_ngcontent-%COMP%] {\n  color: #ffc107 !important;\n}\n\n.text-red[_ngcontent-%COMP%] {\n  color: #ff0000 !important;\n}\n\n.tableFixedRow[_ngcontent-%COMP%], .tableFixedRow[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  position: sticky;\n  left: 1px;\n  top: 2.7rem;\n  z-index: 999;\n  background: #fff;\n  border: 1px solid #dee2e6;\n}\n.tableFixedRow[_ngcontent-%COMP%]:hover {\n  background: #fff !important;\n  border: 1px solid #dee2e6 !important;\n }\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.nav-tabs[_ngcontent-%COMP%] {\n\n  border-bottom: 1px solid #8F008A;\n\n  .nav-link {\n    margin-bottom: -2px;\n    &:hover {\n      border: 1px solid #8F008A;\n      border-bottom: none #fff;\n    }\n  }\n\n  .nav-link.active, .nav-tabs .nav-item.show .nav-link {\n    color: #8F008A;\n    background-color: #fff;\n    border: 1px solid #8F008A;\n    border-bottom: none #fff;\n  }\n}\n\n.button-absolute[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: 17px;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  position: relative; \n\n}\n\n.scroll-to-top[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15px;\n  right: 15px;\n  opacity: 0;\n  transition: all .2s ease-in-out;\n  z-index: 1051;\n}\n\n.show-scroll[_ngcontent-%COMP%] {\n  opacity: 1;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SatReportComponent, [{
        type: Component,
        args: [{ selector: 'app-sat-report', template: "<script src=\"sat-report.component.ts\"></script>\n<div class=\"container-fluid pt-2\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <ul class=\"nav nav-tabs mb-0 color-primary col-12\" *ngIf=\"showContentTypeTab\">\n                <li [ngStyle]=\"{'display': commonContentList[data.test_type.toLowerCase()].length != 0 ? 'block' : 'none'}\"\n                     class=\"nav-item cursor\" *ngFor=\"let data of testTypeListData; let i = index\">\n                    <a (click)=\"callViewAnalytic(data)\" aria-current=\"page\"\n                       class=\"nav-link {{tabShow == data.test_type.toLowerCase() ? 'active' : ''}}\"><b>{{data.test_type}}</b>\n                        <span class=\"report-count\">{{commonContentList[data.test_type.toLowerCase()].length}}</span>\n                    </a>\n                </li>\n            </ul>\n            <button *ngIf=\"auth.getRoleId() == '5' || (auth.getRoleId() != '5' && reportCalledFrom != 'schedule'\n                && reportCalledFrom != 'classDetails' && reportCalledFrom != 'list' && showContentTypeTab)\"\n                    (click)=\"backToClass()\" class=\"btn btn-outline-primary pull-right button-absolute\">\n                <i class=\"fa fa-long-arrow-left mr-1\"></i>Back\n            </button>\n        </div>\n    </div>\n    <div class=\"card mt-1\">\n        <div class=\"card-body py-3\" style=\"z-index: unset !important;\">\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <label class=\"font-weight-bold mb-1\">Class Name</label>\n                    <h5 class=\"color-primary\">{{studentData.class_name}}</h5>\n                </div>\n                <div class=\"col-4\">\n                    <label class=\"font-weight-bold mb-1\">Content Name</label>\n                    <ng-multiselect-dropdown #multiSelect1\n                                             [placeholder]=\"'Select Content'\"\n                                             [settings]=\"settings1\"\n                                             [data]=\"contentList\"\n                                             [disabled]=\"false\"\n                                             [(ngModel)]=\"contentSelected\"\n                                             (onSelect)=\"onContentSelectionChange($event, 'single')\"\n                                             (onDeSelect)=\"onContentSelectionChange($event, 'single')\"\n                                             (onSelectAll)=\"onContentSelectionChange($event, 'all')\"\n                                             (onDeSelectAll)=\"onContentSelectionChange($event, 'all')\">\n                    </ng-multiselect-dropdown>\n                </div>\n                <div class=\"col-4\" *ngIf=\"auth.getRoleId() != '5' && studentList.length != 0\">\n                    <label class=\"font-weight-bold mb-1\">Student Name</label>\n                    <ng-multiselect-dropdown #multiSelect2\n                                             [placeholder]=\"'Select Student'\"\n                                             [settings]=\"settings2\"\n                                             [data]=\"studentList\"\n                                             [(ngModel)]=\"studentSelected\"\n                                             (onSelect)=\"onStudentChange($event, 'single')\"\n                                             (onDeSelect)=\"onStudentChange($event, 'single')\"\n                                             (onSelectAll)=\"onStudentChange($event, 'all')\"\n                                             (onDeSelectAll)=\"onStudentChange($event, 'all')\">\n                    </ng-multiselect-dropdown>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"card mt-2\" *ngIf=\"totalReport.length == 0\">\n        <div class=\"card-body p-3\">\n            <div class=\"row\">\n                <div class=\"col-12 d-flex justify-content-center\">\n                    <img alt=\"No Report Available\" style=\"width: 30%\" src=\"assets/images/no_report_available.png\">\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"card mt-2\" *ngIf=\"totalReport.length != 0\">\n        <div class=\"card-body p-3\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <h4 class=\"font-weight-bold\">Summary</h4>\n                    <ng-container *ngTemplateOutlet=\"summaryAndTotalContentReport, context : { $implicit:\n                        {data: summaryRecordListData}}\"></ng-container>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row mt-3 px-3\" *ngIf=\"dataloaded && totalReport.length != 0\">\n        <div class=\"card col-12\">\n            <div class=\"card-body py-3 px-0\">\n                <div class=\"col-12 mt-2 px-0\">\n                    <h4 class=\"font-weight-bold\">Topics Analysis</h4>\n                    <h6 class=\"mb-0\">Note: Click on the bar charts to view details</h6>\n                    <ul class=\"nav nav-tabs mt-2 mb-0 color-primary col-12\" *ngIf=\"tabShow != 'content' && commonSubjectList.length != 0\">\n                        <li class=\"nav-item cursor\" *ngFor=\"let subject of commonSubjectList\">\n                            <a (click)=\"tabSelected(subject, 'topic')\" aria-current=\"page\" [ngClass]=\"{'active': selectedTopicSubject == subject}\"\n                               class=\"nav-link\"><b>{{subject}}</b></a>\n                        </li>\n                    </ul>\n                    <div id=\"chart\">\n                        <apx-chart\n                                [series]=\"chartOptions.series\"\n                                [chart]=\"chartOptions.chart\"\n                                [stroke]=\"chartOptions.stroke\"\n                                [dataLabels]=\"chartOptions.dataLabels\"\n                                [plotOptions]=\"chartOptions.plotOptions\"\n                                [xaxis]=\"chartOptions.xaxis\"\n                                [colors]=\"chartOptions.colors\"\n                                [fill]=\"chartOptions.fill\"\n                                [yaxis]=\"chartOptions.yaxis\"\n                                [legend]=\"chartOptions.legend\"\n                                [tooltip]=\"chartOptions.toolTip\"\n                        ></apx-chart>\n                    </div>\n                </div>\n            </div>\n            <div id=\"{{selectedContent?.question_topic + selectedContent?.question_topic_id}}\" class=\"row mt-3\">\n                <div class=\"col-12\" [ngbCollapse]=\"!showTable\">\n                    <ng-container *ngTemplateOutlet=\"tableDetails\">\n                    </ng-container>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row mt-3 px-3\" *ngIf=\"dataloaded && totalReport.length != 0\">\n        <div class=\"card col-12\">\n            <div class=\"card-body py-3 px-0\">\n                <div class=\"row\">\n                    <div class=\"col-12 mt-2\">\n                        <h4 class=\"font-weight-bold\">Sub Topics Analysis</h4>\n                        <h6 class=\"mb-0\">Note: Click on the bar charts to view details</h6>\n                        <ul class=\"mt-2 nav nav-tabs mb-0 color-primary col-12\" *ngIf=\"tabShow != 'content' && commonSubjectList.length != 0\">\n                            <li class=\"nav-item cursor\" *ngFor=\"let subject of commonSubjectList\">\n                                <a (click)=\"tabSelected(subject, 'subTopic')\" aria-current=\"page\" [ngClass]=\"{'active': selectedSubTopicSubject == subject}\"\n                                   class=\"nav-link\"><b>{{subject}}</b></a>\n                            </li>\n                        </ul>\n                        <div id=\"chart1\">\n                            <apx-chart\n                                    [series]=\"chartOptions1.series\"\n                                    [chart]=\"chartOptions1.chart\"\n                                    [stroke]=\"chartOptions1.stroke\"\n                                    [dataLabels]=\"chartOptions1.dataLabels\"\n                                    [plotOptions]=\"chartOptions1.plotOptions\"\n                                    [xaxis]=\"chartOptions1.xaxis\"\n                                    [colors]=\"chartOptions1.colors\"\n                                    [fill]=\"chartOptions1.fill\"\n                                    [yaxis]=\"chartOptions1.yaxis\"\n                                    [legend]=\"chartOptions1.legend\"\n                                    [tooltip]=\"chartOptions1.toolTip\"\n                            ></apx-chart>\n                        </div>\n                    </div>\n                </div>\n\n                <div id=\"{{selectedContent?.sub_topic + selectedContent?.question_sub_topic_id}}\" class=\"row mt-3\">\n                    <div class=\"col-12\" [ngbCollapse]=\"!showTable1\">\n                        <ng-container *ngTemplateOutlet=\"tableDetails\">\n                        </ng-container>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row mt-3 px-3\" *ngIf=\"dataloaded && totalReport.length != 0\">\n        <div class=\"card col-12 mt-2\">\n            <div class=\"card-body py-3 px-0\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <h4 class=\"font-weight-bold\">Time Analysis</h4>\n                    </div>\n                    <div class=\"col-6\">\n                        <p class=\"mb-0 text-right\">\n                        <span style=\"font-size: 12px; color: #313131\"><i style=\"font-size: 14px; color: #2082cc\"\n                                                                         class=\"fa fa-square p-1\"></i>Actual Time Taken</span>\n                            <span class=\"mx-1\" style=\"font-size: 12px; color: #313131\"><i\n                                    style=\"font-size: 14px; color: #00E396\" class=\"fa fa-square p-1\"></i>Predicted Solving Time</span>\n                        </p>\n                    </div>\n                    <div class=\"col-12\">\n                        <ul class=\"nav nav-tabs mb-0 color-primary col-12 mt-2\" *ngIf=\"tabShow != 'content' && commonSubjectList.length != 0\">\n                            <li class=\"nav-item cursor\" *ngFor=\"let subject of commonSubjectList\">\n                                <a (click)=\"tabSelected(subject, 'timeAnalysis')\" aria-current=\"page\" [ngClass]=\"{'active': selectedTimeAnalysisSubject == subject}\"\n                                   class=\"nav-link\"><b>{{subject}}</b></a>\n                            </li>\n                        </ul>\n                    </div>\n\n                    <div class=\"col-4 mt-2\" *ngIf=\"tabShow != 'content' && selectedTimeModule.length != 0\">\n                        <label class=\"font-weight-bold mb-1\">Module Name</label>\n                        <ng-multiselect-dropdown #multiSelect1\n                                                 [placeholder]=\"'Select Module Name'\"\n                                                 [settings]=\"questionAnalysisModuleSetting\"\n                                                 [data]=\"selectedTimeModule\"\n                                                 [(ngModel)]=\"timeAnalysisModuleSelected\"\n                                                 (onSelect)=\"buildSubTopicOrTimeOrErrorAnalysisChartOptions('timeAnalysis', 'changed')\"\n                                                 (onDeSelect)=\"timeAnalysisModuleSelected = [];\"\n                        >\n                        </ng-multiselect-dropdown>\n                    </div>\n\n                    <div class=\"col-12 d-flex justify-content-center\" *ngIf=\"tabShow != 'content' && timeAnalysisModuleSelected.length == 0\">\n                        <img alt=\"No Report Available\" style=\"width: 30%\" src=\"assets/images/no_report_available.png\">\n                    </div>\n\n                    <div class=\"col-12 mt-2\" *ngIf=\"(tabShow != 'content' && timeAnalysisModuleSelected.length != 0) ||\n                        tabShow == 'content'\">\n                        <div id=\"chart3\">\n                            <apx-chart\n                                    [series]=\"chartOptions2.series\"\n                                    [chart]=\"chartOptions2.chart\"\n                                    [xaxis]=\"chartOptions2.xaxis\"\n                                    [stroke]=\"chartOptions2.stroke\"\n                                    [colors]=\"chartOptions2.colors\"\n                                    [dataLabels]=\"chartOptions2.dataLabels\"\n                                    [legend]=\"chartOptions2.legend\"\n                                    [markers]=\"chartOptions2.markers\"\n                                    [grid]=\"chartOptions2.grid\"\n                                    [yaxis]=\"chartOptions2.yaxis\"\n                                    [title]=\"chartOptions2.title\"\n                                    [tooltip]=\"chartOptions2.toolTip\"\n                            ></apx-chart>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row mt-3 px-3\" *ngIf=\"totalReport.length != 0\">\n        <div class=\"card col-12\">\n            <div class=\"card-body py-3 px-0\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <h4 class=\"font-weight-bold\">Error Analysis</h4>\n                        <h6 class=\"mb-0\">Note: Click on the bar charts to view details</h6>\n                    </div>\n\n                    <div class=\"col-6\">\n                        <p class=\"mb-0 text-right\">\n                        <span style=\"font-size: 12px\"><i style=\"font-size: 14px; color: #ff0000\"\n                                                         class=\"fa fa-square p-1\"></i> High (\u2265 90%) </span>\n                            <span class=\"mr-1\" style=\"font-size: 12px\"><i style=\"font-size: 14px; color: #ffc107\"\n                                                                          class=\"fa fa-square p-1\"></i> Mid-High (80\u201389%)</span>\n                            <span class=\"mr-1\" style=\"font-size: 12px\"><i style=\"font-size: 14px; color: #28A745\"\n                                                                          class=\"fa fa-square p-1\"></i> Moderate (50\u201379%)</span>\n                            <span class=\"mr-1\" style=\"font-size: 12px\"><i style=\"font-size: 14px; color: #007bff\"\n                                                                          class=\"fa fa-square p-1\"></i> Low (< 50%)</span>\n                        </p>\n                    </div>\n\n                    <div class=\"col-12 mt-2\">\n                        <ul class=\"nav nav-tabs mb-0 color-primary col-12\" *ngIf=\"tabShow != 'content' && commonSubjectList.length != 0\">\n                            <li class=\"nav-item cursor\" *ngFor=\"let subject of commonSubjectList\">\n                                <a (click)=\"tabSelected(subject, 'errorAnalysis')\" aria-current=\"page\" [ngClass]=\"{'active': selectedErrorAnalysisSubject == subject}\"\n                                   class=\"nav-link\"><b>{{subject}}</b></a>\n                            </li>\n                        </ul>\n                    </div>\n\n                    <div class=\"col-4 mt-2\" *ngIf=\"tabShow != 'content' && selectedErrorModule.length != 0\">\n                        <label class=\"font-weight-bold mb-1\">Module Name</label>\n                        <ng-multiselect-dropdown #multiSelect1\n                                                 [placeholder]=\"'Select Module Name'\"\n                                                 [settings]=\"questionAnalysisModuleSetting\"\n                                                 [data]=\"selectedErrorModule\"\n                                                 [(ngModel)]=\"errorAnalysisModuleSelected\"\n                                                 (onSelect)=\"buildSubTopicOrTimeOrErrorAnalysisChartOptions('errorAnalysis', 'changed')\"\n                                                 (onDeSelect)=\"errorAnalysisModuleSelected = []\"\n                        >\n                        </ng-multiselect-dropdown>\n                    </div>\n\n                    <div class=\"col-12 d-flex justify-content-center\" *ngIf=\"tabShow != 'content' && errorAnalysisModuleSelected.length == 0\">\n                        <img alt=\"No Report Available\" style=\"width: 30%\" src=\"assets/images/no_report_available.png\">\n                    </div>\n\n                    <div class=\"col-12\" *ngIf=\"(tabShow != 'content' && errorAnalysisModuleSelected.length != 0) ||\n                        tabShow == 'content'\">\n                        <div id=\"chart4\">\n\n                            <apx-chart\n                                    [series]=\"chartOptions3.series\"\n                                    [chart]=\"chartOptions3.chart\"\n                                    [dataLabels]=\"chartOptions3.dataLabels\"\n                                    [plotOptions]=\"chartOptions3.plotOptions\"\n                                    [yaxis]=\"chartOptions3.yaxis\"\n                                    [xaxis]=\"chartOptions3.xaxis\"\n                                    [legend]=\"chartOptions3.legend\"\n                                    [colors]=\"chartOptions3.colors\"\n                                    [grid]=\"chartOptions3.grid\"\n                            ></apx-chart>\n                        </div>\n                    </div>\n                </div>\n\n                <div id=\"error_analysis_{{selectedContent?.sub_topic + selectedContent?.question_sub_topic_id}}\"\n                     class=\"row mt-3\">\n                    <div class=\"col-12\" [ngbCollapse]=\"!showTable2\">\n                        <ng-container *ngTemplateOutlet=\"tableDetails\">\n                        </ng-container>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row mt-3 px-3\" *ngIf=\"totalReport.length != 0 && auth.getRoleId() != '5' && questionAnalysisSubjectList.length != 0\">\n\n        <div class=\"card col-12\">\n            <div class=\"card-body px-0 py-3\">\n                <div class=\"row\">\n                    <h4 class=\"font-weight-bold col-12\">Question By Question Analysis</h4>\n\n                    <div class=\"col-12 mt-3\" *ngIf=\"tabShow != 'content'\">\n                        <ul class=\"nav nav-tabs mb-0 color-primary col-12\">\n                            <li class=\"nav-item cursor\" *ngFor=\"let subject of questionAnalysisSubjectList\">\n                                <a (click)=\"tabSelected(subject, 'questionAnalysis')\" aria-current=\"page\" [ngClass]=\"{'active': selectedQuestionAnalysisSubject == subject}\"\n                                   class=\"nav-link\"><b>{{subject}}</b></a>\n                            </li>\n                        </ul>\n                    </div>\n\n                    <div class=\"col-{{tabShow != 'content' && selectedQuestionModule.length != 0 ? '4' : '5'}} mt-2\">\n                        <label class=\"font-weight-bold mb-1\">Content Name</label>\n                        <ng-multiselect-dropdown #multiSelect1\n                                                 [placeholder]=\"'Select Content Name'\"\n                                                 [settings]=\"questionAnalysisSetting\"\n                                                 [data]=\"contentList\"\n                                                 [(ngModel)]=\"questionAnalysisContentSelected\"\n                                                 (onSelect)=\"onContentSelectionChange($event, 'single', 'questionAnalysis')\"\n                                                 (onDeSelect)=\"onContentSelectionChange($event, 'single','questionAnalysis')\"\n                                                 (onSelectAll)=\"onContentSelectionChange($event, 'all', 'questionAnalysis')\"\n                                                 (onDeSelectAll)=\"onContentSelectionChange($event, 'all', 'questionAnalysis')\">\n                        </ng-multiselect-dropdown>\n                    </div>\n\n                    <div class=\"col-4 mt-2\" *ngIf=\"tabShow != 'content' && selectedQuestionModule.length != 0\">\n                        <label class=\"font-weight-bold mb-1\">Module Name</label>\n                        <ng-multiselect-dropdown #multiSelect1\n                                                 [placeholder]=\"'Select Module Name'\"\n                                                 [settings]=\"questionAnalysisModuleSetting\"\n                                                 [data]=\"selectedQuestionModule\"\n                                                 [(ngModel)]=\"questionAnalysisModuleSelected\"\n                                                 (onSelect)=\"formQuestionAnalysisData('changed')\"\n                                                 (onDeSelect)=\"formQuestionAnalysisData('changed')\"\n                        >\n                        </ng-multiselect-dropdown>\n                    </div>\n\n                    <div class=\"col-4 mt-2\" *ngIf=\"questionAnalysisStudentList.length != 0\">\n                        <label class=\"font-weight-bold mb-1\">Student Name</label>\n                        <ng-multiselect-dropdown #multiSelect2\n                                                 [placeholder]=\"'Select Student'\"\n                                                 [settings]=\"settings3\"\n                                                 [data]=\"questionAnalysisStudentList\"\n                                                 [(ngModel)]=\"questionAnalysisStudentSelected\"\n                                                 (onSelect)=\"onStudentChange($event, 'single', 'questionAnalysis')\"\n                                                 (onDeSelect)=\"onStudentChange($event, 'single', 'questionAnalysis')\"\n                                                 (onSelectAll)=\"onStudentChange($event, 'all', 'questionAnalysis')\"\n                                                 (onDeSelectAll)=\"onStudentChange($event, 'all', 'questionAnalysis')\">\n                        </ng-multiselect-dropdown>\n                    </div>\n\n                    <div class=\"col-12 mt-2\">\n                        <ng-container *ngTemplateOutlet=\"questionAnalysis\">\n                        </ng-container>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row mt-3 px-3\">\n        <div class=\"card col-12\">\n            <div class=\"card-body py-3 px-0\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <h4 class=\"font-weight-bold\">Mastery Score</h4>\n                    </div>\n\n                    <div class=\"col-6\">\n                        <p class=\"mb-0 text-right\">\n                        <span class=\"mr-1\" style=\"font-size: 12px\"><i style=\"font-size: 14px; color: #007bff\"\n                                                                      class=\"fa fa-square p-1\"></i>- Master</span>\n                            <span class=\"mr-1\" style=\"font-size: 12px\"><i style=\"font-size: 14px; color: #28A745\"\n                                                                          class=\"fa fa-square p-1\"></i>- Advanced</span>\n                            <span class=\"mr-1\" style=\"font-size: 12px\"><i style=\"font-size: 14px; color: #ffc107\"\n                                                                          class=\"fa fa-square p-1\"></i>- Expert</span>\n                            <span style=\"font-size: 12px\"><i style=\"font-size: 14px; color: #ff0000\"\n                                                             class=\"fa fa-square p-1\"></i>- NoVoice</span>\n                        </p>\n                    </div>\n\n                    <div class=\"col-12 mt-2\" *ngIf=\"tabShow != 'content' && masterySubjectList.length != 0\">\n                        <ul class=\"nav nav-tabs mb-0 color-primary col-12\">\n                            <li class=\"nav-item cursor\" *ngFor=\"let subject of masterySubjectList\">\n                                <a (click)=\"tabSelected(subject, 'mastery')\" aria-current=\"page\" [ngClass]=\"{'active': selectedMasterySubject == subject}\"\n                                   class=\"nav-link\"><b>{{subject}}</b></a>\n                            </li>\n                        </ul>\n                    </div>\n\n                    <div class=\"col-5 mt-2\">\n                        <label class=\"font-weight-bold mb-1\">Content Name</label>\n                        <ng-multiselect-dropdown #multiSelect1\n                                                 [placeholder]=\"'Select Content Name'\"\n                                                 [settings]=\"settings1\"\n                                                 [data]=\"contentList\"\n                                                 [disabled]=\"false\"\n                                                 [(ngModel)]=\"masteryContentSelected\"\n                                                 (onSelect)=\"onContentSelectionChange($event, 'single', 'mastery')\"\n                                                 (onDeSelect)=\"onContentSelectionChange($event, 'single','mastery')\"\n                                                 (onSelectAll)=\"onContentSelectionChange($event, 'all', 'mastery')\"\n                                                 (onDeSelectAll)=\"onContentSelectionChange($event, 'all', 'mastery')\">\n                        </ng-multiselect-dropdown>\n                    </div>\n                    <div class=\"col-4 mt-2\" *ngIf=\"auth.getRoleId() != '5' && masteryStudentList.length != 0\">\n                        <label class=\"font-weight-bold mb-1\">Student Name</label>\n                        <ng-multiselect-dropdown #multiSelect2\n                                                 [placeholder]=\"'Select Student'\"\n                                                 [settings]=\"settings3\"\n                                                 [data]=\"masteryStudentList\"\n                                                 [(ngModel)]=\"masteryStudentSelected\"\n                                                 (onSelect)=\"onStudentChange($event, 'single', 'mastery')\"\n                                                 (onDeSelect)=\"onStudentChange($event, 'single', 'mastery')\"\n                                                 (onSelectAll)=\"onStudentChange($event, 'all', 'mastery')\"\n                                                 (onDeSelectAll)=\"onStudentChange($event, 'all', 'mastery')\">\n                        </ng-multiselect-dropdown>\n                    </div>\n                    <div class=\"col-12 mt-3\">\n                        <div class=\"row my-4 justify-content-center list-card\" *ngIf=\"masteryData.length == 0\">\n                            <div class=\"col-4\">\n                                <button style=\"background: #FFFFFF; cursor: default\" class=\"nodataList\">No Data Available!\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"row\" *ngIf=\"masteryData.length != 0\">\n                            <div class=\"col-12\" *ngFor=\"let mastery of masteryData; let i = index\">\n                                <h5 class=\"font-weight-bold\"\n                                    style=\"font-size: 14px\">{{mastery.question_sub_topic_name}}</h5>\n                                <div [ngClass]=\"{'progress-novoice-border' : progressbar.percentage == 0 && progressbar.student_content_id != '0'}\"\n                                     class=\"progress cursor my-2 {{parseInt(progressbar.percentage) == 0 ? 'justify-content-center' : ''}}\"\n                                     *ngFor=\"let progressbar of mastery.data\" style=\"height: 20px\">\n                                    <div (click)=\"showMasterData(progressbar, i)\"\n                                         *ngIf=\"parseInt(progressbar.percentage) != 0\" class=\"progress-bar\"\n                                         role=\"progressbar\"\n                                         [style.width.%]=\"progressbar.percentage\"\n                                         [ngClass]=\"{'progress-master': progressbar.percentage >= 90,'progress-advanced': progressbar.percentage > 80 && progressbar.percentage < 90,\n                                        'progress-expert': progressbar.percentage > 50 && progressbar.percentage <= 80,'progress-novoice': progressbar.percentage < 50}\"\n                                         [attr.aria-valuenow]=\"mastery.percentage\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                                        <span style=\"font-weight: 600\">{{progressbar.content_name}}<span class=\"ml-1\" *ngIf=\"tabShow != 'content'\">- {{progressbar?.module_name}}</span></span>\n                                    </div>\n                                    <span style=\"font-weight: 600\"\n                                          *ngIf=\"parseInt(progressbar.percentage) == 0\">{{progressbar.content_name}}<span class=\"ml-1\" *ngIf=\"tabShow != 'content'\">- {{progressbar?.module_name}}</span></span>\n                                    <span style=\"font-weight: 600\" *ngIf=\"progressbar.student_content_id != '0'\"\n                                          class=\"ml-2\">{{progressbar.percentage}}%</span>\n                                    <span style=\"font-weight: 600\" *ngIf=\"progressbar.student_content_id == '0'\"\n                                          class=\"ml-2\"> - N/A</span>\n                                </div>\n                                <div *ngIf=\"mastery.showStudentData\"\n                                     id=\"master_analysis_{{selectedContent?.sub_topic + selectedContent?.question_sub_topic_id}}\"\n                                     class=\"row\">\n                                    <div class=\"col-12\">\n                                        <div class=\"card\">\n                                            <div class=\"resource-link-card\">\n                                                <div class=\"col-12\" [ngbCollapse]=\"!showTable3\">\n                                                    <ng-container *ngTemplateOutlet=\"tableDetails\">\n                                                    </ng-container>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n    <div class=\"card mt-2\" *ngIf=\"overallSummary.length != 0\">\n        <div class=\"card-body p-3\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <h4 class=\"font-weight-bold\">Overall Summary</h4>\n                    <ng-container\n                            *ngTemplateOutlet=\"summaryAndTotalContentReport, context : { $implicit: {data: overallSummary}}\"></ng-container>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #showQuestion>\n    <div class=\"modal-header align-items-center\">\n        <h5 class=\"contenttext text-center mb-0\">{{selectedContent?.content_name}}</h5>\n        <i (click)=\"close()\" class=\"fa fa-close cursor\"></i>\n    </div>\n    <div #modalBody class=\"modal-body px-3 py-2 position-relative\" style=\"overflow-y: auto; max-height: 75vh; background-color: #f7f7f9\">\n        <app-question-report\n                [questionArray]=\"questionArray\"\n                [showFullQuestion]=\"showAllQuestion\"\n                [topicId]=\"showAllQuestion ? [] : selectedContent?.question_topic_id\"\n                [subTopicId]=\"showAllQuestion ? '' : selectedContent.question_sub_topic_id\"\n                [student_content_id]=\"selectedContent?.student_content_id\"\n                [selectedQuestion]=\"selectedQuestion\"\n                [selectedType]=\"showAllQuestion ? '' : showTable ? 'topic' : 'subTopic'\"\n                [showAll]=\"nameOrContentSelected ? nameOrContentSelected : selectedContent.showAll\"\n        ></app-question-report>\n\n        <i [ngClass]=\"{'show-scroll': showScroll}\" (click)=\"windowScrollUp()\" title=\"Scroll To Top\"\n           class=\"cursor color-primary fa fa-3x fa-chevron-circle-up scroll-to-top\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"col-12 px-0\">\n            <button class=\"btn cancel pull-right\" (click)=\"modalRef.close()\">Close</button>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #questionAnalysis>\n    <div class=\"row\">\n        <div class=\"col-md-12 col-12 sticky-table my-3\">\n            <div class=\"row align-items-center justify-content-between mb-2\">\n                <h4 class=\"col-12 mb-0\">\n                    <span class=\"color-primary font-weight-bold\">{{questionAnalysisContentSelected[0]?.content_name}}</span>\n                </h4>\n            </div>\n            <div class=\"tableFixHead mt-2\" *ngIf=\"questionAnalysisListData.length != 0\">\n                <table class=\"table table-bordered table-striped table-hover mb-0\" style=\"min-width: max-content;\">\n                    <thead style=\"background: #cdd9f6\">\n                    <th style=\"width: 120px\" class=\"text-center sticky-col\">Question</th>\n                    <th style=\"width: 60px\" class=\"text-center\"\n                        *ngFor=\"let student of questionAnalysisListData[1]?.questionData; let i = index\">\n                        <span class=\"{{questionAnalysisListData.length < 2 ? 'cursor' : ''}}\"\n                              (click)=\"questionSelectedFromTable(student.question_no, 'questionAnalysis')\">{{student.question_no}}</span>\n                    </th>\n                    </thead>\n                    <tbody>\n                    <tr [ngClass]=\"first ? 'tableFixedRow' : ''\"\n                        *ngFor=\"let student of questionAnalysisListData; let first = first\">\n                        <td style=\"width: 120px\" class=\"text-center sticky-col\">\n                            <span (click)=\"openContent(student, 'questionAnalysis')\" *ngIf=\"!first\"\n                                  class=\"color-primary cursor\">{{student?.student_name ?? '-'}}</span>\n                            <span *ngIf=\"first && showTable3\"\n                                  class=\"font-weight-bold font-16\">Total Correct Answer</span>\n                            <span *ngIf=\"first && !showTable3\"\n                                  class=\"font-weight-bold font-16\">{{student?.student_name ?? '-'}}</span>\n                        </td>\n                        <td style=\"width: 60px\" class=\"text-center\"\n                            *ngFor=\"let data of student?.questionData; let i = index\">\n                            <i (click)=\"showAllQuestion = false;studentsAnswerList(data, data.question_no, 'questionAnalysis')\"\n                               *ngIf=\"data.is_correct == 'true'\" style=\"font-size: 18px\"\n                               class=\"fa fa-check-circle color-green cursor\"></i>\n                            <i (click)=\"showAllQuestion = false;studentsAnswerList(data, data.question_no, 'questionAnalysis')\"\n                               *ngIf=\"data.is_correct == 'false'\" style=\"font-size: 18px\"\n                               class=\"fa fa-times-circle color-red cursor\"></i>\n                            <span class=\"font-weight-bold mb-0 font-16\" *ngIf=\"first && !showTable3\"\n                                  [ngClass]=\"calculatePercentage(data.total_in_correct_answer, data.total_questions) <= '25' ? '' : calculatePercentage(data.total_in_correct_answer, data.total_questions) <= '50' ? 'text-yellow' : 'text-red'\">\n                                {{data.total_in_correct_answer}}/{{data.total_questions}}\n                            </span>\n                            <span class=\"font-weight-bold mb-0 font-16\" *ngIf=\"first && showTable3\"\n                                  [ngClass]=\"calculatePercentage(data.total_correct_answer, data.total_questions) <= '50' ? 'text-red' : calculatePercentage(data.total_correct_answer, data.total_questions) <= '80' ? 'text-yellow' : calculatePercentage(data.total_correct_answer, data.total_questions) <= '90' ? 'text-green' : 'text-blue'\">\n                                {{data.total_correct_answer}}/{{data.total_questions}}\n                            </span>\n                        </td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <div class=\"row d-flex justify-content-center list-card mt-5\" *ngIf=\"questionAnalysisListData.length == 0\">\n                <div class=\"col-4\">\n                    <button class=\"nodataList\">No Data Available!</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #tableDetails>\n    <div class=\"row\">\n        <div class=\"col-md-12 col-12 sticky-table my-3\">\n            <div class=\"row align-items-center justify-content-between mb-2\">\n                <h4 class=\"col-8 mb-0\">\n                    <span class=\"font-weight-bold\"\n                          *ngIf=\"!selectedContent?.showAll\">{{selectedContent?.question_topic_id ? selectedContent?.question_topic : selectedContent?.sub_topic}}</span>\n                    <span class=\"mx-1\" *ngIf=\"!selectedContent?.showAll\">-</span>\n                    <span class=\"color-primary font-weight-bold\">{{selectedContent?.content_name}}</span>\n                </h4>\n                <h6 title=\"Show All Questions\" style=\"color: black\"\n                    class=\"col-4 font-weight-bold d-flex align-items-center justify-content-end mb-0\">\n                    <input [checked]=\"selectedContent?.showAll\" (change)=\"showAllSelected($event)\" id=\"showAll\"\n                           class=\"cursor\" type=\"checkbox\">\n                    <label for=\"showAll\" class=\"pl-2 cursor mb-0\">Show All</label>\n                </h6>\n            </div>\n            <div class=\"tableFixHead mt-2\">\n                <table class=\"table table-bordered table-striped table-hover mb-0\" style=\"min-width: max-content;\">\n                    <thead style=\"background: #cdd9f6\">\n                    <th style=\"width: 120px\" class=\"text-center sticky-col\">Question</th>\n                    <th style=\"width: 60px\" class=\"text-center\"\n                        *ngFor=\"let student of studentQuestionListData[1]?.questionData; let i = index\">\n                        <span class=\"{{studentQuestionListData.length <= 2 ? 'cursor' : ''}}\"\n                              (click)=\"questionSelectedFromTable(student.question_no)\">{{student.question_no}}</span>\n                    </th>\n                    </thead>\n                    <tbody>\n                    <tr [ngClass]=\"first ? 'tableFixedRow' : ''\"\n                        *ngFor=\"let student of studentQuestionListData; let first = first\">\n                        <td style=\"width: 120px\" class=\"text-center sticky-col\">\n                            <span (click)=\"openContent(student, 'graph')\" *ngIf=\"!first\"\n                                  class=\"color-primary cursor\">{{student?.student_name ?? '-'}}</span>\n                            <span *ngIf=\"first && showTable3\"\n                                  class=\"font-weight-bold font-16\">Total Correct Answer</span>\n                            <span *ngIf=\"first && !showTable3\"\n                                  class=\"font-weight-bold font-16\">{{student?.student_name ?? '-'}}</span>\n                        </td>\n                        <td style=\"width: 60px\" class=\"text-center\"\n                            *ngFor=\"let data of student?.questionData; let i = index\">\n                            <i (click)=\"showAllQuestion = false;studentsAnswerList(data, data.question_no)\"\n                               *ngIf=\"data.is_correct == 'true'\" style=\"font-size: 18px\"\n                               class=\"fa fa-check-circle color-green cursor\"></i>\n                            <i (click)=\"showAllQuestion = false;studentsAnswerList(data, data.question_no)\"\n                               *ngIf=\"data.is_correct == 'false'\" style=\"font-size: 18px\"\n                               class=\"fa fa-times-circle color-red cursor\"></i>\n                            <span class=\"font-weight-bold mb-0 font-16\" *ngIf=\"first && !showTable3\"\n                                  [ngClass]=\"calculatePercentage(data.total_in_correct_answer, data.total_questions) <= '25' ? '' : calculatePercentage(data.total_in_correct_answer, data.total_questions) <= '50' ? 'text-yellow' : 'text-red'\">\n                                {{data.total_in_correct_answer}}/{{data.total_questions}}\n                            </span>\n                            <span class=\"font-weight-bold mb-0 font-16\" *ngIf=\"first && showTable3\"\n                                  [ngClass]=\"calculatePercentage(data.total_correct_answer, data.total_questions) <= '50' ? 'text-red' : calculatePercentage(data.total_correct_answer, data.total_questions) <= '80' ? 'text-yellow' : calculatePercentage(data.total_correct_answer, data.total_questions) <= '90' ? 'text-green' : 'text-blue'\">\n                                {{data.total_correct_answer}}/{{data.total_questions}}\n                            </span>\n                        </td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #summaryAndTotalContentReport let-context>\n    <div class=\"tableFixHead mt-2\">\n        <table class=\"table table-bordered table-striped table-hover mb-0\">\n            <thead style=\"background: #cdd9f6\">\n            <th class=\"text-center sticky-col align-middle\">Content Name</th>\n            <th *ngIf=\"auth.getRoleId() != '5'\" class=\"text-center sticky-col align-middle\">Student Name</th>\n            <th class=\"text-center sticky-col align-middle\">Test Date</th>\n            <th class=\"text-center sticky-col align-middle\">Correct Answers</th>\n            <th class=\"text-center sticky-col align-middle\">Incorrect Answers</th>\n            <th *ngIf=\"tabShow == 'content'\" class=\"text-center sticky-col align-middle\">Overall Score</th>\n            <th *ngIf=\"tabShow != 'content'\" class=\"text-center sticky-col align-middle\">Raw Score</th>\n            <th *ngIf=\"tabShow != 'content'\" class=\"text-center sticky-col align-middle\">Math Score</th>\n            <th *ngIf=\"tabShow != 'content'\" class=\"text-center sticky-col align-middle\">R&W Score</th>\n            <th *ngIf=\"tabShow != 'content'\" class=\"text-center sticky-col align-middle\">Calculated Score</th>\n            </thead>\n            <tbody>\n            <ng-container *ngFor=\"let report of context?.data; let i = index\">\n                <tr>\n                    <td class=\"text-center sticky-col\">\n                        <span (click)=\"tabShow === 'content' ? openContent(report) : openAccordian(i, context?.data)\" class=\"color-primary cursor\">{{report.content_name ?? '-'}}</span>\n                    </td>\n                    <td *ngIf=\"auth.getRoleId() != '5'\" class=\"text-center\">\n                        <span>{{report.student_name ?? '-'}}</span>\n                    </td>\n                    <td class=\"text-center\">\n                        <span>{{report.content_start_date ? (report.content_start_date | customDateFormat) : '-'}}</span>\n                    </td>\n                    <td class=\"text-center\">\n                        <span>{{report.correct_answer ?? '-'}}</span>\n                    </td>\n                    <td class=\"text-center\">\n                        <span>{{report.incorrect_answer ?? '-'}}</span>\n                    </td>\n                    <!-- Overall Percentage -->\n                    <td class=\"text-center\">\n                        <ng-container *ngTemplateOutlet=\"percentageTemplate; context: { value: report.percentage }\"></ng-container>\n                    </td>\n\n                    <td class=\"text-center\" *ngIf=\"tabShow != 'content'\">\n                        <span class=\"font-weight-bold color-primary\">{{report.math_score ?? '-'}}</span>\n                        <span *ngIf=\"report.Math_Percentage != ''\" class=\"ml-1\">(<ng-container *ngTemplateOutlet=\"percentageTemplate; context: { value: report.Math_Percentage }\"></ng-container>)\n                        </span>\n                    </td>\n                    <td class=\"text-center\" *ngIf=\"tabShow != 'content'\">\n                        <span class=\"font-weight-bold color-primary\">{{report.rw_score ?? '-'}}</span>\n                        <span *ngIf=\"report.RW_Percentage != ''\" class=\"ml-1\">(<ng-container *ngTemplateOutlet=\"percentageTemplate; context: { value: report.RW_Percentage }\"></ng-container>)\n                        </span>\n                    </td>\n                    <td class=\"text-center\" *ngIf=\"tabShow != 'content'\">\n                        <span class=\"font-weight-bold color-primary\">{{report.score ?? '-'}}</span>\n                    </td>\n                </tr>\n                <tr [ngbCollapse]=\"!report.showAccordian\">\n                    <td colspan=\"12\">\n                        <div style=\"background: #FFFFFF !important;\" class=\"p-3 border rounded\">\n                            <table class=\"table table-bordered table-striped table-hover mb-0\">\n                                <thead style=\"background: #cdd9f6\">\n                                    <th class=\"text-center sticky-col\">Module Name</th>\n                                    <th class=\"text-center sticky-col\">Subject Name</th>\n                                    <th class=\"text-center sticky-col\">Test Date</th>\n                                    <th class=\"text-center sticky-col\">Correct Answers</th>\n                                    <th class=\"text-center sticky-col\">Incorrect Answers</th>\n                                    <th class=\"text-center sticky-col\">Raw Score</th>\n<!--                                    <th class=\"text-center sticky-col\">Calculated Score</th>-->\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let module of report?.modules; let i = index\">\n                                        <td class=\"text-center sticky-col\">\n                                            <span (click)=\"openContent(module)\" class=\"color-primary cursor\">{{module?.module_name ?? '-'}}</span>\n                                        </td>\n                                        <td class=\"text-center\">\n                                            <span>{{module?.subject_name ?? '-'}}</span>\n                                        </td>\n                                        <td class=\"text-center\">\n                                            <span>{{module?.content_start_date ? (module?.content_start_date | customDateFormat) : '-'}}</span>\n                                        </td>\n                                        <td class=\"text-center\">\n                                            <span>{{module?.correct_answer ?? '-'}}</span>\n                                        </td>\n                                        <td class=\"text-center\">\n                                            <span>{{module?.incorrect_answer ?? '-'}}</span>\n                                        </td>\n                                        <td class=\"text-center\">\n                                            <span class=\"font-weight-bold\" style=\"color: #007bff\" *ngIf=\"module?.percentage >= 90\">{{module?.percentage + '%'}}</span>\n                                            <span style=\"color: #28A745\" *ngIf=\"module?.percentage >= 80 && module?.percentage < 90\"\n                                              class=\"font-weight-bold\">{{module.percentage + '%'}}</span>\n                                            <span style=\"color: #ffc107\" *ngIf=\"module?.percentage > 50 && module?.percentage < 80\"\n                                              class=\"font-weight-bold\">{{module?.percentage + '%'}}</span>\n                                            <span class=\"font-weight-bold\" style=\"color: #ff0000\"\n                                              *ngIf=\"module?.percentage < 50\">{{module?.percentage + '%'}}</span>\n                                        </td>\n<!--                                        <td class=\"text-center\">-->\n<!--                                            <span class=\"font-weight-bold color-primary\">{{module?.score ?? '-'}}</span>-->\n<!--                                        </td>-->\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </td>\n                </tr>\n            </ng-container>\n            </tbody>\n        </table>\n    </div>\n</ng-template>\n\n<ng-template #percentageTemplate let-value=\"value\">\n    <span *ngIf=\"value >= 90\" class=\"font-weight-bold\" style=\"color: #007bff\">{{ value + '%' }}</span>\n    <span *ngIf=\"value >= 80 && value < 90\" class=\"font-weight-bold\" style=\"color: #28A745\">{{ value + '%' }}</span>\n    <span *ngIf=\"value > 50 && value < 80\" class=\"font-weight-bold\" style=\"color: #ffc107\">{{ value + '%' }}</span>\n    <span *ngIf=\"value <= 50\" class=\"font-weight-bold\" style=\"color: #ff0000\">{{ value + '%' }}</span>\n</ng-template>\n", styles: ["span {\n  i {\n    font-size: 20px;\n    color: #1e6bb8;\n  }\n  img {\n    font-size: 20px;\n    color: #1e6bb8;\n  }\n}\n\n.table-spacing {\n  vertical-align: middle;\n}\n\n\n.table-striped tbody tr:nth-of-type(odd) {\n  //background-color: #cdd9f633;\n  background-color: white;\n}\n\n.table-striped tbody tr:nth-of-type(even) {\n  //background-color: #cdd9f633;\n  background-color: rgba(241, 244, 251, .5);\n}\n\n.table-striped tbody tr.searchInput:hover {\n  //background-color: #cdd9f633;\n  background-color: white;\n}\n\n.table-hover tbody tr:hover {\n  background-color: rgba(241, 244, 251, .5);\n}\n\n.table-input {\n  font-weight: 400;\n  line-height: normal;\n  padding: 0.375em 0.75em;\n  margin-bottom: 0;\n  width: 100%;\n}\n\n.sticky-table {\n  .sticky-col {\n    position: sticky;\n    z-index: 1;\n    left: -1px; \n    background: #cdd9f6; \n    min-width: 150px; \n    max-width: 150px;\n  }\n\n  thead .sticky-col {\n    z-index: 2; /* ensure header cell stays above body cells */\n  }\n\n  tbody .sticky-col {\n    background: #FFFFFF !important;\n  }\n\n}\n\n.card .card-body {\n  z-index: unset !important;\n}\n\n.progress-novoice-border {\n  border: 1px solid #ff0000;\n  background: #FFFFFF !important;\n}\n\n.progress-bar {\n  border-radius: 6px !important;\n}\n\n.progress-master {\n  background-color: #007bff !important;\n}\n\n.progress-advanced {\n  background-color: #28A745 !important;\n}\n\n.progress-expert {\n  background-color: #ffc107 !important;\n}\n\n.progress-novoice {\n  background-color: #ff0000 !important;\n}\n\n.tableFixHead {\n  overflow-y: auto;\n  max-height: 400px;\n}\n\n.tableFixHead thead th {\n  position: sticky;\n  top: -1px;\n  background: #cdd9f6 !important;\n}\n\n.font-16 {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.text-blue {\n  color: #007bff !important;\n}\n\n.text-green {\n  color: #28A745 !important;\n}\n\n.text-yellow {\n  color: #ffc107 !important;\n}\n\n.text-red {\n  color: #ff0000 !important;\n}\n\n.tableFixedRow, .tableFixedRow tr td:first-child {\n  position: sticky;\n  left: 1px;\n  top: 2.7rem;\n  z-index: 999;\n  background: #fff;\n  border: 1px solid #dee2e6;\n}\n.tableFixedRow:hover {\n  background: #fff !important;\n  border: 1px solid #dee2e6 !important;\n }\n.table tbody tr td {\n  vertical-align: middle;\n}\n\n.nav-tabs {\n\n  border-bottom: 1px solid #8F008A;\n\n  .nav-link {\n    margin-bottom: -2px;\n    &:hover {\n      border: 1px solid #8F008A;\n      border-bottom: none #fff;\n    }\n  }\n\n  .nav-link.active, .nav-tabs .nav-item.show .nav-link {\n    color: #8F008A;\n    background-color: #fff;\n    border: 1px solid #8F008A;\n    border-bottom: none #fff;\n  }\n}\n\n.button-absolute {\n  position: absolute;\n  top: -8px;\n  right: 17px;\n}\n\n.modal-body {\n  position: relative; /* makes it the reference for absolute children */\n}\n\n.scroll-to-top {\n  position: absolute;\n  bottom: 15px;\n  right: 15px;\n  opacity: 0;\n  transition: all .2s ease-in-out;\n  z-index: 1051;\n}\n\n.show-scroll {\n  opacity: 1;\n}\n"] }]
    }], () => [], { showQuestion: [{
            type: ViewChild,
            args: ['showQuestion']
        }], modalBody: [{
            type: ViewChild,
            args: ['modalBody']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SatReportComponent, { className: "SatReportComponent" }); })();
//# sourceMappingURL=sat-report.component.js.map