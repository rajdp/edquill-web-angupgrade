import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import * as chartData from '../../shared/data/chart';
import { doughnutData, pieData } from '../../shared/data/chart';
import { NgbModalConfig, NgbModal, ModalDismissReasons, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { Validators, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PipesModule } from '../../shared/pipes/pipes.module';
import * as i0 from "@angular/core";
import * as i1 from "../../shared/service/auth.service";
import * as i2 from "../../shared/service/category.service";
import * as i3 from "@angular/router";
import * as i4 from "@ng-bootstrap/ng-bootstrap";
import * as i5 from "../../shared/service/common-data.service";
import * as i6 from "@angular/forms";
import * as i7 from "ngx-toastr";
import * as i8 from "../../shared/service/validation.service";
import * as i9 from "../../shared/service/newsubject.service";
import * as i10 from "../../shared/service/teacher.service";
import * as i11 from "../../shared/service/creator.service";
import * as i12 from "../../shared/service/content.service";
import * as i13 from "@angular/common";
import * as i14 from "ng-apexcharts";
import * as i15 from "../../shared/pipes/custom-date-format.pipe";
const _c0 = ["content"];
const _c1 = ["chart"];
const _forTrack0 = ($index, $item) => $item.label;
function DashboardComponent_ng_template_0_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtext(1, " Password is required. ");
    i0.ɵɵelementEnd();
} }
function DashboardComponent_ng_template_0_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtext(1, " Confirmation is required. ");
    i0.ɵɵelementEnd();
} }
function DashboardComponent_ng_template_0_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtext(1, " Passwords do not match. ");
    i0.ɵɵelementEnd();
} }
function DashboardComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "div")(2, "h5", 10);
    i0.ɵɵtext(3, "Update your temporary password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 11);
    i0.ɵɵtext(5, "Set a new password to secure your account");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "button", 12);
    i0.ɵɵlistener("click", function DashboardComponent_ng_template_0_Template_button_click_6_listener() { const dismiss_r2 = i0.ɵɵrestoreView(_r1).dismiss; return i0.ɵɵresetView(dismiss_r2("close")); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 13)(8, "form", 14)(9, "div", 15)(10, "label", 16);
    i0.ɵɵtext(11, "New password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 17)(13, "span", 18);
    i0.ɵɵelement(14, "i", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(15, "input", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, DashboardComponent_ng_template_0_div_16_Template, 2, 0, "div", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 15)(18, "label", 22);
    i0.ɵɵtext(19, "Confirm password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 17)(21, "span", 18);
    i0.ɵɵelement(22, "i", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(23, "input", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(24, DashboardComponent_ng_template_0_div_24_Template, 2, 0, "div", 21)(25, DashboardComponent_ng_template_0_div_25_Template, 2, 0, "div", 21);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 25)(27, "button", 26);
    i0.ɵɵlistener("click", function DashboardComponent_ng_template_0_Template_button_click_27_listener() { const dismiss_r2 = i0.ɵɵrestoreView(_r1).dismiss; return i0.ɵɵresetView(dismiss_r2("cancel")); });
    i0.ɵɵtext(28, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "button", 27);
    i0.ɵɵlistener("click", function DashboardComponent_ng_template_0_Template_button_click_29_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onSave()); });
    i0.ɵɵtext(30, " Save password ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("formGroup", ctx_r2.accountForm);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ((tmp_5_0 = ctx_r2.accountForm.get("password")) == null ? null : tmp_5_0.invalid) && (((tmp_5_0 = ctx_r2.accountForm.get("password")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx_r2.accountForm.get("password")) == null ? null : tmp_5_0.touched)));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ((tmp_6_0 = ctx_r2.accountForm.get("confirmPassword")) == null ? null : tmp_6_0.invalid) && (((tmp_6_0 = ctx_r2.accountForm.get("confirmPassword")) == null ? null : tmp_6_0.dirty) || ((tmp_6_0 = ctx_r2.accountForm.get("confirmPassword")) == null ? null : tmp_6_0.touched)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ((tmp_7_0 = ctx_r2.accountForm.get("password")) == null ? null : tmp_7_0.value) && ((tmp_7_0 = ctx_r2.accountForm.get("confirmPassword")) == null ? null : tmp_7_0.value) && ((tmp_7_0 = ctx_r2.accountForm.get("password")) == null ? null : tmp_7_0.value) !== ((tmp_7_0 = ctx_r2.accountForm.get("confirmPassword")) == null ? null : tmp_7_0.value));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r2.accountForm.invalid || ((tmp_8_0 = ctx_r2.accountForm.get("password")) == null ? null : tmp_8_0.value) !== ((tmp_8_0 = ctx_r2.accountForm.get("confirmPassword")) == null ? null : tmp_8_0.value));
} }
function DashboardComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "div", 29)(2, "div", 30)(3, "span", 31);
    i0.ɵɵtext(4, "Loading dashboard\u2026");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "p", 32);
    i0.ɵɵtext(6, "Preparing your dashboard insights\u2026");
    i0.ɵɵelementEnd()()();
} }
function DashboardComponent_Conditional_4_For_2_p_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 71);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const metric_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", metric_r5.subtitle, " ");
} }
function DashboardComponent_Conditional_4_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34)(1, "article", 63)(2, "div", 64)(3, "div", 65)(4, "div")(5, "p", 66);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h2", 67);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "span", 68);
    i0.ɵɵelement(11, "i", 69);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, DashboardComponent_Conditional_4_For_2_p_12_Template, 2, 1, "p", 70);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const metric_r5 = ctx.$implicit;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(metric_r5.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 6, metric_r5.value));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", metric_r5.accent);
    i0.ɵɵattribute("title", metric_r5.tooltip);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", metric_r5.icon);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", metric_r5.subtitle);
} }
function DashboardComponent_Conditional_4_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "apx-chart", 72);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("series", ctx_r2.chartOptions == null ? null : ctx_r2.chartOptions.series)("chart", ctx_r2.chartOptions == null ? null : ctx_r2.chartOptions.chart)("dataLabels", ctx_r2.chartOptions == null ? null : ctx_r2.chartOptions.dataLabels)("plotOptions", ctx_r2.chartOptions == null ? null : ctx_r2.chartOptions.plotOptions)("yaxis", ctx_r2.chartOptions == null ? null : ctx_r2.chartOptions.yaxis)("legend", ctx_r2.chartOptions == null ? null : ctx_r2.chartOptions.legend)("fill", ctx_r2.chartOptions == null ? null : ctx_r2.chartOptions.fill)("stroke", ctx_r2.chartOptions == null ? null : ctx_r2.chartOptions.stroke)("tooltip", ctx_r2.chartOptions == null ? null : ctx_r2.chartOptions.tooltip)("xaxis", ctx_r2.chartOptions == null ? null : ctx_r2.chartOptions.xaxis);
} }
function DashboardComponent_Conditional_4_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 73);
    i0.ɵɵelement(1, "i", 74);
    i0.ɵɵelementStart(2, "p", 75);
    i0.ɵɵtext(3, " We\u2019ll visualize enrollment trends as soon as data is available. ");
    i0.ɵɵelementEnd()();
} }
function DashboardComponent_Conditional_4_ng_container_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r2.orderList[0].created_date), " ");
} }
function DashboardComponent_Conditional_4_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "\u2014");
} }
function DashboardComponent_Conditional_4_ng_container_48_For_2_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 80);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const metric_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(metric_r6.caption);
} }
function DashboardComponent_Conditional_4_ng_container_48_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 76)(1, "p", 77);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4", 78);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, DashboardComponent_Conditional_4_ng_container_48_For_2_p_6_Template, 2, 1, "p", 79);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const metric_r6 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(metric_r6.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 3, metric_r6.value));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", metric_r6.caption);
} }
function DashboardComponent_Conditional_4_ng_container_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵrepeaterCreate(1, DashboardComponent_Conditional_4_ng_container_48_For_2_Template, 7, 5, "div", 76, _forTrack0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.institutionMetrics);
} }
function DashboardComponent_Conditional_4_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵelement(1, "i", 82);
    i0.ɵɵelementStart(2, "p", 83);
    i0.ɵɵtext(3, "Institution activity metrics will appear here.");
    i0.ɵɵelementEnd()();
} }
function DashboardComponent_Conditional_4_ng_container_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "apx-chart", 84);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("series", ctx_r2.chartOptions1 == null ? null : ctx_r2.chartOptions1.series)("chart", ctx_r2.chartOptions1 == null ? null : ctx_r2.chartOptions1.chart)("xaxis", ctx_r2.chartOptions1 == null ? null : ctx_r2.chartOptions1.xaxis)("dataLabels", ctx_r2.chartOptions1 == null ? null : ctx_r2.chartOptions1.dataLabels)("grid", ctx_r2.chartOptions1 == null ? null : ctx_r2.chartOptions1.grid)("stroke", ctx_r2.chartOptions1 == null ? null : ctx_r2.chartOptions1.stroke)("title", ctx_r2.chartOptions1 == null ? null : ctx_r2.chartOptions1.title);
} }
function DashboardComponent_Conditional_4_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 73);
    i0.ɵɵelement(1, "i", 85);
    i0.ɵɵelementStart(2, "p", 75);
    i0.ɵɵtext(3, " Start publishing lessons to view content performance analytics. ");
    i0.ɵɵelementEnd()();
} }
function DashboardComponent_Conditional_4_ng_container_72_For_3_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 92);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const metric_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", metric_r7.caption, " ");
} }
function DashboardComponent_Conditional_4_ng_container_72_For_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 87)(1, "div", 88)(2, "span", 89);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 90);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, DashboardComponent_Conditional_4_ng_container_72_For_3_span_7_Template, 2, 1, "span", 91);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const metric_r7 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(metric_r7.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(6, 3, metric_r7.value));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", metric_r7.caption);
} }
function DashboardComponent_Conditional_4_ng_container_72_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 86);
    i0.ɵɵrepeaterCreate(2, DashboardComponent_Conditional_4_ng_container_72_For_3_Template, 8, 5, "div", 87, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r2.institutionMetrics);
} }
function DashboardComponent_Conditional_4_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵelement(1, "i", 93);
    i0.ɵɵelementStart(2, "p", 83);
    i0.ɵɵtext(3, " Once classes are created, we\u2019ll surface institution trends here. ");
    i0.ɵɵelementEnd()();
} }
function DashboardComponent_Conditional_4_Conditional_102_For_1_small_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 102);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Code: ", item_r8.school_code || item_r8.code, " ");
} }
function DashboardComponent_Conditional_4_Conditional_102_For_1_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, item_r8.created_date), " ");
} }
function DashboardComponent_Conditional_4_Conditional_102_For_1_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "\u2014");
} }
function DashboardComponent_Conditional_4_Conditional_102_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div", 94)(3, "span", 95);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, DashboardComponent_Conditional_4_Conditional_102_For_1_small_5_Template, 2, 1, "small", 96);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td", 97)(7, "span", 98);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td", 97)(10, "span", 99);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td", 97)(13, "span", 100);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "td", 97);
    i0.ɵɵtemplate(16, DashboardComponent_Conditional_4_Conditional_102_For_1_ng_container_16_Template, 3, 3, "ng-container", 45)(17, DashboardComponent_Conditional_4_Conditional_102_For_1_ng_template_17_Template, 1, 0, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td", 97)(20, "span", 101);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const noCreatedDate_r9 = i0.ɵɵreference(18);
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", item_r8.name || item_r8.school_name || "\u2014", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r8.school_code || item_r8.code);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r8.teachers || 0, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r8.students || 0, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r8.content_creator || item_r8.content_creators || 0, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r8.created_date)("ngIfElse", noCreatedDate_r9);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", ctx_r2.getStatusTone(item_r8.status));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getStatusLabel(item_r8.status), " ");
} }
function DashboardComponent_Conditional_4_Conditional_102_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, DashboardComponent_Conditional_4_Conditional_102_For_1_Template, 22, 9, "tr", null, i0.ɵɵrepeaterTrackByIndex);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r2.orderList);
} }
function DashboardComponent_Conditional_4_Conditional_103_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 103)(2, "div", 73);
    i0.ɵɵelement(3, "i", 104);
    i0.ɵɵelementStart(4, "p", 75);
    i0.ɵɵtext(5, " Connect your first school to populate the directory. ");
    i0.ɵɵelementEnd()()()();
} }
function DashboardComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 33);
    i0.ɵɵrepeaterCreate(1, DashboardComponent_Conditional_4_For_2_Template, 13, 8, "div", 34, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "section", 35)(4, "div", 36)(5, "section", 37)(6, "div", 38)(7, "div")(8, "h5", 39);
    i0.ɵɵtext(9, "Enrollment Growth");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p", 11);
    i0.ɵɵtext(11, "Monthly student onboarding across your institution");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 40)(13, "button", 41);
    i0.ɵɵlistener("click", function DashboardComponent_Conditional_4_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.refreshDashboard()); });
    i0.ɵɵelement(14, "i", 42);
    i0.ɵɵtext(15, " Refresh ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 43)(17, "div", 44);
    i0.ɵɵtemplate(18, DashboardComponent_Conditional_4_ng_container_18_Template, 2, 10, "ng-container", 45)(19, DashboardComponent_Conditional_4_ng_template_19_Template, 4, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(21, "div", 46)(22, "section", 37)(23, "div", 47)(24, "h5", 39);
    i0.ɵɵtext(25, "Institution Snapshot");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "p", 11);
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 43)(29, "ul", 48)(30, "li", 49)(31, "span", 50);
    i0.ɵɵtext(32, "Primary institution");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "span", 51);
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "li", 49)(36, "span", 50);
    i0.ɵɵtext(37, "Linked campuses");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "span", 51);
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "li", 49)(41, "span", 50);
    i0.ɵɵtext(42, "Last roster update");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "span", 51);
    i0.ɵɵtemplate(44, DashboardComponent_Conditional_4_ng_container_44_Template, 3, 3, "ng-container", 45)(45, DashboardComponent_Conditional_4_ng_template_45_Template, 1, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(47, "div", 52);
    i0.ɵɵtemplate(48, DashboardComponent_Conditional_4_ng_container_48_Template, 3, 0, "ng-container", 45)(49, DashboardComponent_Conditional_4_ng_template_49_Template, 4, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(51, "section", 35)(52, "div", 53)(53, "section", 37)(54, "div", 54)(55, "div")(56, "h5", 39);
    i0.ɵɵtext(57, "Content Overview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "p", 11);
    i0.ɵɵtext(59, "Recent activity across content repositories");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(60, "div", 43);
    i0.ɵɵtemplate(61, DashboardComponent_Conditional_4_ng_container_61_Template, 2, 7, "ng-container", 45)(62, DashboardComponent_Conditional_4_ng_template_62_Template, 4, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(64, "div", 53)(65, "section", 37)(66, "div", 47)(67, "h5", 39);
    i0.ɵɵtext(68, "Institution Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "p", 11);
    i0.ɵɵtext(70, "Class creation and editing trends");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(71, "div", 43);
    i0.ɵɵtemplate(72, DashboardComponent_Conditional_4_ng_container_72_Template, 4, 0, "ng-container", 45)(73, DashboardComponent_Conditional_4_ng_template_73_Template, 4, 0, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(75, "section", 55)(76, "div", 54)(77, "div")(78, "h5", 39);
    i0.ɵɵtext(79, "School Directory");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(80, "p", 11);
    i0.ɵɵtext(81, " Overview of connected institutions with quick actions. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(82, "span", 56);
    i0.ɵɵtext(83);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(84, "div", 57)(85, "div", 58)(86, "table", 59)(87, "thead", 60)(88, "tr")(89, "th", 61);
    i0.ɵɵtext(90, "Institution");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(91, "th", 62);
    i0.ɵɵtext(92, "Teachers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(93, "th", 62);
    i0.ɵɵtext(94, "Students");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(95, "th", 62);
    i0.ɵɵtext(96, "Content creators");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(97, "th", 62);
    i0.ɵɵtext(98, "Created");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(99, "th", 62);
    i0.ɵɵtext(100, "Status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(101, "tbody");
    i0.ɵɵtemplate(102, DashboardComponent_Conditional_4_Conditional_102_Template, 2, 0)(103, DashboardComponent_Conditional_4_Conditional_103_Template, 6, 0, "tr");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const emptyChart_r10 = i0.ɵɵreference(20);
    const noRosterDate_r11 = i0.ɵɵreference(46);
    const noInstitutionMetrics_r12 = i0.ɵɵreference(50);
    const emptyContentChart_r13 = i0.ɵɵreference(63);
    const noInstitutionStatus_r14 = i0.ɵɵreference(74);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.summaryMetrics);
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("ngIf", ctx_r2.chartOptions == null ? null : ctx_r2.chartOptions.series == null ? null : ctx_r2.chartOptions.series.length)("ngIfElse", emptyChart_r10);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" Key metrics for ", ctx_r2.institutionName || "your institution", " ");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r2.institutionName || "\u2014");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate((ctx_r2.schoolStatus == null ? null : ctx_r2.schoolStatus.length) || 0);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", (ctx_r2.orderList == null ? null : ctx_r2.orderList.length) && (ctx_r2.orderList[0] == null ? null : ctx_r2.orderList[0].created_date))("ngIfElse", noRosterDate_r11);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r2.institutionMetrics.length)("ngIfElse", noInstitutionMetrics_r12);
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngIf", ctx_r2.chartOptions1 == null ? null : ctx_r2.chartOptions1.series == null ? null : ctx_r2.chartOptions1.series.length)("ngIfElse", emptyContentChart_r13);
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngIf", ctx_r2.institutionMetrics.length)("ngIfElse", noInstitutionStatus_r14);
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate1(" ", (ctx_r2.orderList == null ? null : ctx_r2.orderList.length) || 0, " listed ");
    i0.ɵɵadvance(19);
    i0.ɵɵconditional((ctx_r2.orderList == null ? null : ctx_r2.orderList.length) ? 102 : 103);
} }
export class DashboardComponent {
    constructor(auth, category, router, config, modalService, commondata, formBuilder, toastr, validation, newSubject, teacherService, creatorService, contentService, cdr) {
        this.auth = auth;
        this.category = category;
        this.router = router;
        this.modalService = modalService;
        this.commondata = commondata;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.validation = validation;
        this.newSubject = newSubject;
        this.teacherService = teacherService;
        this.creatorService = creatorService;
        this.contentService = contentService;
        this.cdr = cdr;
        this.doughnutData = doughnutData;
        this.pieData = pieData;
        this.overallList = {
            teachers: 0,
            students: 0,
            schools: 0,
            content_creators: 0,
            contentcreator: 0
        };
        this.functionCalled = false;
        this.view = chartData.view;
        config.backdrop = 'static';
        config.keyboard = false;
        this.allowDashboard = this.auth.getSessionData('go-default_password');
        if (this.allowDashboard == 1) {
            setTimeout(() => {
                this.showModal();
            }, 500);
        }
        this.accountForm = this.formBuilder.group({
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        });
        Object.assign(this, { doughnutData, pieData });
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        // Get institution name from school details
        console.log('🏫 School Status:', this.schoolStatus);
        if (this.schoolStatus && this.schoolStatus.length > 0) {
            this.institutionName = this.schoolStatus[0].name || this.schoolStatus[0].school_name || 'N/A';
            console.log('🏫 Institution Name from session:', this.institutionName);
        }
        // Initialize chartOptions to prevent undefined errors
        this.initializeEmptyChart();
        if (this.schoolStatus.length != 0) {
            this.newSubject.schoolChange.subscribe(params => {
                if (params != '') {
                    if (this.router.url.includes('default')) {
                        console.log('Dashboard: School changed to', params);
                        this.init(params);
                    }
                }
                else {
                    const currentSchoolId = this.auth.getSessionData('school_id');
                    console.log('Dashboard: Initializing with school_id', currentSchoolId);
                    this.init(currentSchoolId);
                }
            });
        }
        else {
            // If schoolStatus is empty, try to initialize anyway
            const currentSchoolId = this.auth.getSessionData('school_id');
            if (currentSchoolId) {
                console.log('Dashboard: No school status, but found school_id', currentSchoolId);
                this.init(currentSchoolId);
            }
            else {
                console.warn('Dashboard: No school_id available in session');
            }
        }
    }
    ngOnInit() {
        this.commondata.showLoader(false);
        // Debug: Check if school_id exists on component load
        const schoolId = this.auth.getSessionData('school_id');
        const userId = this.auth.getUserId();
        const roleId = this.auth.getRoleId();
        console.log('Dashboard ngOnInit - Session Data:', {
            school_id: schoolId,
            user_id: userId,
            role_id: roleId,
            schoolStatus: this.schoolStatus
        });
        // If school status is empty/null and we don't have school_id, show warning
        if (!schoolId) {
            console.warn('⚠️ Dashboard Warning: school_id not found in session storage');
            console.log('Available localStorage keys:', Object.keys(localStorage));
            this.toastr.warning('School information not loaded. Some data may not display correctly.', 'Dashboard');
        }
    }
    init(res) {
        if (this.auth.getRoleId() == '2') {
            this.permissionList = JSON.parse(this.auth.getSessionData('rista_data1'));
            this.permissionList.allow_dashboard == '1' ? this.serviceCalled() :
                this.router.navigate(['/class/list-class']);
        }
        else {
            this.serviceCalled();
        }
    }
    serviceCalled() {
        this.getsection1List();
        this.getorderedList();
        this.getContentList();
        this.getTeacherCount();
        this.getContentCreatorCount();
    }
    showModal() {
        this.modalRef = this.modalService.open(this.modalContent);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
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
    open(content) {
        this.modalService.open(content);
    }
    onSave() {
        this.modalRef.close();
    }
    // dashboard data
    getsection1List() {
        this.commondata.showLoader(true);
        // Ensure we have a valid school_id
        const schoolId = this.auth.getSessionData('school_id');
        const roleId = this.auth.getRoleId();
        const userId = this.auth.getUserId();
        // Debug logging to verify data
        console.log('Dashboard API Request:', {
            platform: 'web',
            role_id: roleId,
            user_id: userId,
            school_id: schoolId
        });
        // Validate required data
        if (!schoolId) {
            console.error('Dashboard Error: school_id is missing from session');
            this.toastr.error('School information not found. Please log in again.', 'Dashboard');
            this.commondata.showLoader(false);
            this.overallList = { teachers: 0, students: 0, schools: 0, content_creators: 0 };
            this.initializeEmptyChart();
            return;
        }
        if (!userId || !roleId) {
            console.error('Dashboard Error: user_id or role_id is missing');
            this.toastr.error('Authentication data missing. Please log in again.', 'Dashboard');
            this.commondata.showLoader(false);
            this.overallList = { teachers: 0, students: 0, schools: 0, content_creators: 0 };
            this.initializeEmptyChart();
            return;
        }
        const data = {
            platform: 'web',
            role_id: roleId,
            user_id: userId,
            school_id: schoolId
        };
        this.category.registerList(data).subscribe((successData) => {
            console.log('Dashboard API Response:', successData);
            this.listSuccess(successData);
        }, (error) => {
            console.error('Dashboard API Error:', error);
            this.listFailure(error);
        });
    }
    listSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            // Set functionCalled to true so dashboard displays
            this.functionCalled = true;
            // DEBUG: Log the actual ResponseObject structure
            console.log('🔍 Full API Response:', successData);
            console.log('🔍 ResponseObject keys:', successData.ResponseObject ? Object.keys(successData.ResponseObject) : 'null');
            // Extract data based on ACTUAL API structure
            const schoolCount = successData.ResponseObject?.school_count?.[0]?.count || 0;
            const dashboardCount = successData.ResponseObject?.dashboard_count?.[0] || {};
            this.monthwiseList = successData.ResponseObject?.overall || [];
            const allSchools = successData.ResponseObject?.all_schools || [];
            console.log('📊 Extracted data:', {
                schoolCount,
                dashboardCount,
                monthwiseListLength: this.monthwiseList.length,
                allSchoolsLength: allSchools.length
            });
            // Update overallList with student data (preserve existing teacher/content creator counts)
            // Note: API only returns student counts, not separate teacher/school/contentcreator
            this.overallList.students = schoolCount;
            this.overallList.schools = 0; // Not provided by this API
            // teachers and contentcreator are updated by separate API calls
            console.log('📊 Built overallList:', this.overallList);
            // Check if we have month-wise data
            if (!this.monthwiseList || this.monthwiseList.length === 0) {
                console.warn('Dashboard: No month-wise data in "overall" array');
                this.initializeEmptyChart();
                return;
            }
            console.log('📊 Month-wise data available:', this.monthwiseList.length, 'months');
            const label = [];
            const teacher = [];
            const student = [];
            const schools = [];
            const contentcreator = [];
            // Sort month data chronologically
            const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const sortedMonths = [...this.monthwiseList].sort((a, b) => {
                return monthOrder.indexOf(a.monthname) - monthOrder.indexOf(b.monthname);
            });
            console.log('📅 Processing', sortedMonths.length, 'months of data');
            // Process month-wise data based on ACTUAL API structure
            // API returns: {monthname: "Apr", student_count: "14"}
            for (let i = 0; i < sortedMonths.length; i++) {
                const monthData = sortedMonths[i];
                // Create month label
                const monthLabel = monthData.monthname + (monthData.yearname ? '/' + monthData.yearname : '');
                label.push(monthLabel);
                // Extract student count from the actual field name
                const studentCount = parseInt(monthData.student_count || monthData.count || 0);
                student.push(studentCount);
                // API doesn't provide separate counts for these, so set to 0
                teacher.push(0);
                schools.push(0);
                contentcreator.push(0);
                console.log(`  ${monthLabel}: ${studentCount} students`);
            }
            console.log('📊 Chart data processed:', {
                labels: label,
                students: student,
                totalStudents: student.reduce((a, b) => a + b, 0)
            });
            // Only include series with actual data to avoid empty bars
            const series = [];
            if (student.some(val => val > 0)) {
                series.push({
                    name: 'Students',
                    color: '#8F008A', // Purple
                    data: student
                });
            }
            if (teacher.some(val => val > 0)) {
                series.push({
                    name: 'Teachers',
                    color: '#13C9CA', // Cyan
                    data: teacher
                });
            }
            if (schools.some(val => val > 0)) {
                series.push({
                    name: 'Schools',
                    color: '#FFBC58', // Orange
                    data: schools
                });
            }
            if (contentcreator.some(val => val > 0)) {
                series.push({
                    name: 'Content Creators',
                    color: '#DC3545', // Red
                    data: contentcreator
                });
            }
            console.log('📊 Chart series created:', series.length, 'series with data');
            console.log('📊 Series data:', JSON.stringify(series, null, 2));
            // If no series have data, show at least the student series with zeros
            if (series.length === 0) {
                series.push({
                    name: 'Students',
                    color: '#8F008A',
                    data: student // Will be all zeros
                });
                console.log('📊 No data found, showing empty student series');
            }
            console.log('📊 Creating chart with labels:', label);
            console.log('📊 Label count:', label.length, 'Data points:', series[0]?.data?.length);
            this.chartOptions = {
                series: series,
                chart: {
                    type: 'bar',
                    height: 403,
                    toolbar: {
                        tools: {
                            download: false
                        }
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '50%',
                        // endingShape: 'rounded'
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: label,
                    labels: {
                        style: {
                            fontSize: '12px'
                        }
                    }
                },
                yaxis: {
                    title: {
                        text: 'Count'
                    },
                    labels: {
                        style: {
                            fontSize: '12px'
                        }
                    }
                },
                fill: {
                    opacity: 1,
                    colors: series.map(s => s.color) // Dynamic colors based on actual series
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return '' + val + '';
                        }
                    }
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left'
                }
            };
            console.log('📊 chartOptions created:', {
                hasSeries: !!this.chartOptions.series,
                seriesLength: this.chartOptions.series?.length,
                hasCategories: !!this.chartOptions.xaxis?.categories,
                categoryCount: this.chartOptions.xaxis?.categories?.length
            });
            // Trigger change detection to ensure chart renders
            setTimeout(() => {
                this.cdr.detectChanges();
                console.log('📊 Change detection triggered for chart');
            }, 0);
        }
        else {
            this.commondata.showLoader(false);
        }
    }
    listFailure(error) {
        console.log(error, 'error');
        this.commondata.showLoader(false);
        // Set functionCalled to true even on error so dashboard displays
        this.functionCalled = true;
        // Initialize empty chart and counts on error
        this.overallList = { teachers: 0, students: 0, schools: 0, content_creators: 0 };
        this.initializeEmptyChart();
        // Show error message if available
        if (error?.ResponseObject) {
            this.toastr.error(error.ResponseObject, 'Admin');
        }
        else {
            this.toastr.error('Unable to load dashboard data', 'Dashboard');
        }
    }
    /**
     * Initialize empty chart when no data is available
     */
    initializeEmptyChart() {
        const currentDate = new Date();
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const labels = [];
        // Generate last 6 months labels
        for (let i = 5; i >= 0; i--) {
            const d = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
            labels.push(monthNames[d.getMonth()] + '/' + d.getFullYear());
        }
        this.chartOptions = {
            series: [
                {
                    name: 'Students',
                    color: '#8F008A', // Purple
                    data: [0, 0, 0, 0, 0, 0]
                }
            ],
            chart: {
                type: 'bar',
                height: 403,
                toolbar: {
                    tools: {
                        download: false
                    }
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '50%',
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: labels,
                labels: {
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                title: {
                    text: 'Count'
                },
                labels: {
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            fill: {
                opacity: 1,
                colors: ['#8F008A'] // Purple for students
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return '' + val + '';
                    }
                }
            },
            legend: {
                position: 'top',
                horizontalAlign: 'left'
            }
        };
    }
    // get order list
    getorderedList() {
        this.commondata.showLoader(true);
        const schoolId = this.auth.getSessionData('school_id');
        // Skip if no school_id
        if (!schoolId) {
            console.warn('Dashboard: Skipping order list - no school_id');
            this.commondata.showLoader(false);
            return;
        }
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: schoolId
        };
        console.log('Order List API Request:', data);
        this.category.orderedList(data).subscribe((successData) => {
            console.log('Order List API Response:', successData);
            this.orderSuccess(successData);
        }, (error) => {
            console.error('Order List API Error:', error);
            this.commondata.showLoader(false);
        });
    }
    orderSuccess(successData) {
        console.log('📋 Institution Status API Response:', successData);
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            const orderList = successData.ResponseObject;
            console.log('📋 orderList:', orderList);
            console.log('📋 orderList[0]:', orderList[0]);
            if (orderList && orderList.length > 0) {
                console.log('📋 ALL properties in orderList[0]:', Object.keys(orderList[0]));
                console.log('📋 orderList[0] FULL DATA:', JSON.stringify(orderList[0], null, 2));
                // Institution name should come from school table via session (already set in constructor)
                // Don't override it from orderList as it might not have the name
                if (!this.institutionName && orderList[0].name) {
                    this.institutionName = orderList[0].name;
                }
                console.log('📋 institutionName:', this.institutionName);
                console.log('📋 class_count type:', typeof orderList[0].class_count);
                console.log('📋 class_count value:', orderList[0].class_count);
                console.log('📋 class_count is array?', Array.isArray(orderList[0].class_count));
                // Fix: Ensure institutionClassess is an array
                if (Array.isArray(orderList[0].class_count)) {
                    this.institutionClassess = orderList[0].class_count;
                }
                else if (typeof orderList[0].class_count === 'object' && orderList[0].class_count !== null) {
                    // If it's an object, wrap it in array
                    this.institutionClassess = [orderList[0].class_count];
                }
                else {
                    // If it's a primitive (number/string), create array with data from orderList[0]
                    // Try different property name variations
                    const item = orderList[0];
                    this.institutionClassess = [{
                            totalclass_count: item.class_count || item.total_class_count || item.totalclass_count || 0,
                            monthclass_count: item.month_class_count || item.monthclass_count || item.current_month_classes || 0,
                            totaledited_class: item.edited_class || item.total_edited_class || item.totaledited_class || item.edit_class_count || 0,
                            monthedit_class: item.month_edit_class || item.monthedit_class || item.current_month_edit_classes || item.month_edited_class || 0
                        }];
                }
                console.log('📋 Final institutionClassess:', this.institutionClassess);
                this.orderList = [];
                orderList.forEach((item, index) => {
                    if (index < 10) {
                        this.orderList.push(item);
                    }
                });
            }
            else {
                console.error('📋 orderList is empty or undefined');
            }
            this.functionCalled = true;
        }
        else {
            this.commondata.showLoader(false);
            console.error('📋 Institution Status API returned IsSuccess: false');
        }
    }
    // overall content
    getContentList() {
        this.commondata.showLoader(true);
        const schoolId = this.auth.getSessionData('school_id');
        // Skip if no school_id
        if (!schoolId) {
            console.warn('Dashboard: Skipping content list - no school_id');
            this.commondata.showLoader(false);
            return;
        }
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: schoolId
        };
        console.log('Content List API Request:', data);
        this.category.contentList(data).subscribe((successData) => {
            console.log('Content List API Response:', successData);
            this.contentSuccess(successData);
        }, (error) => {
            console.error('Content List API Error:', error);
            this.commondata.showLoader(false);
        });
    }
    /**
     * Get teacher count for dashboard
     */
    getTeacherCount() {
        const schoolId = this.auth.getSessionData('school_id');
        if (!schoolId) {
            console.warn('Dashboard: Skipping teacher count - no school_id');
            return;
        }
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(), // Current user's role for auth
            user_id: this.auth.getUserId(),
            school_id: schoolId,
            status: '1', // Active users only (status=1)
            filter_role: '4', // Filter by Teacher role_id (4)
            limit: 9999, // Get all to count
            offset: 0
        };
        console.log('👨‍🏫 Fetching teacher count...', data);
        this.teacherService.teacherList(data).subscribe((successData) => {
            console.log('👨‍🏫 Teacher FULL Response:', successData);
            if (successData?.IsSuccess) {
                // Check different possible response structures
                let teacherCount = 0;
                if (successData.ResponseObject) {
                    console.log('👨‍🏫 ResponseObject:', successData.ResponseObject);
                    console.log('👨‍🏫 ResponseObject type:', typeof successData.ResponseObject);
                    console.log('👨‍🏫 Is array?', Array.isArray(successData.ResponseObject));
                    if (successData.ResponseObject.total) {
                        teacherCount = parseInt(successData.ResponseObject.total);
                        console.log('👨‍🏫 Using .total:', teacherCount);
                    }
                    else if (Array.isArray(successData.ResponseObject)) {
                        teacherCount = successData.ResponseObject.length;
                        console.log('👨‍🏫 Using array length:', teacherCount);
                    }
                    else if (successData.ResponseObject.count) {
                        teacherCount = parseInt(successData.ResponseObject.count);
                        console.log('👨‍🏫 Using .count:', teacherCount);
                    }
                }
                console.log('👨‍🏫 Final Teacher count:', teacherCount);
                // Update overallList with teacher count
                console.log('👨‍🏫 Before update - overallList exists?', !!this.overallList);
                console.log('👨‍🏫 Before update - overallList:', this.overallList);
                if (this.overallList) {
                    this.overallList.teachers = teacherCount;
                    console.log('👨‍🏫 Updated overallList.teachers to:', this.overallList.teachers);
                    console.log('👨‍🏫 Current overallList:', this.overallList);
                    // Trigger Angular change detection
                    this.cdr.detectChanges();
                    console.log('👨‍🏫 Change detection triggered');
                }
                else {
                    console.error('👨‍🏫 overallList is null/undefined!');
                }
            }
            else {
                console.error('👨‍🏫 API returned IsSuccess: false');
            }
        }, (error) => {
            console.error('👨‍🏫 Teacher API error:', error);
        });
    }
    /**
     * Get content creator count for dashboard
     * Role IDs: 3=ContentCreator, 4=Teacher, 5=Student
     */
    getContentCreatorCount() {
        const schoolId = this.auth.getSessionData('school_id');
        if (!schoolId) {
            console.warn('Dashboard: Skipping content creator count - no school_id');
            return;
        }
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(), // Current user's role for auth
            user_id: this.auth.getUserId(),
            school_id: schoolId,
            status: '1', // Active users only (status=1)
            filter_role: '3', // Filter by Content Creator role_id (3)
            limit: 9999, // Get all to count
            offset: 0
        };
        console.log('✍️ Fetching content creator count...', data);
        // Use ContentService.contentList which calls 'contentcreator/list' endpoint
        this.contentService.contentList(data).subscribe((successData) => {
            console.log('✍️ Content Creator FULL Response:', successData);
            if (successData?.IsSuccess) {
                // Check different possible response structures
                let creatorCount = 0;
                if (successData.ResponseObject) {
                    console.log('✍️ ResponseObject:', successData.ResponseObject);
                    console.log('✍️ ResponseObject type:', typeof successData.ResponseObject);
                    console.log('✍️ Is array?', Array.isArray(successData.ResponseObject));
                    if (successData.ResponseObject.total) {
                        creatorCount = parseInt(successData.ResponseObject.total);
                        console.log('✍️ Using .total:', creatorCount);
                    }
                    else if (Array.isArray(successData.ResponseObject)) {
                        creatorCount = successData.ResponseObject.length;
                        console.log('✍️ Using array length:', creatorCount);
                    }
                    else if (successData.ResponseObject.count) {
                        creatorCount = parseInt(successData.ResponseObject.count);
                        console.log('✍️ Using .count:', creatorCount);
                    }
                }
                console.log('✍️ Final Content creator count:', creatorCount);
                // Update overallList with content creator count
                console.log('✍️ Before update - overallList exists?', !!this.overallList);
                console.log('✍️ Before update - overallList:', this.overallList);
                if (this.overallList) {
                    this.overallList.contentcreator = creatorCount;
                    this.overallList.content_creators = creatorCount;
                    console.log('✍️ Updated overallList.contentcreator to:', this.overallList.contentcreator);
                    console.log('✍️ Current overallList:', this.overallList);
                    // Trigger Angular change detection
                    this.cdr.detectChanges();
                    console.log('✍️ Change detection triggered');
                }
                else {
                    console.error('✍️ overallList is null/undefined!');
                }
            }
            else {
                console.error('✍️ API returned IsSuccess: false');
            }
        }, (error) => {
            console.error('✍️ Content creator API error:', error);
        });
    }
    contentSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            const contentList = successData.ResponseObject;
            const month = [];
            const percent = [];
            for (let i = 0; i < contentList.length; i++) {
                month.push(contentList[i].monthname);
                percent.push(contentList[i].percentage);
            }
            // monthname: "Jan", content: "3", percentage: "1%"}
            this.chartOptions1 = {
                series: [
                    {
                        name: 'content',
                        data: percent,
                        color: '#8F008A',
                    }
                ],
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        tools: {
                            download: false
                        }
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    }
                },
                xaxis: {
                    categories: month
                }
            };
        }
        else {
            this.commondata.showLoader(false);
        }
    }
    /**
     * Refresh dashboard cards and charts with latest data
     */
    refreshDashboard() {
        this.functionCalled = false;
        this.commondata.showLoader(true);
        this.serviceCalled();
    }
    /**
     * Surface high-level metrics for summary cards
     */
    get summaryMetrics() {
        const teachers = this.toNumber(this.overallList?.teachers);
        const students = this.toNumber(this.overallList?.students);
        const creators = this.toNumber(this.overallList?.contentcreator ?? this.overallList?.content_creators);
        const institutions = this.toNumber(this.schoolStatus?.length);
        return [
            {
                label: 'Teachers',
                value: teachers,
                subtitle: 'Active faculty roster',
                icon: 'bi-person-badge-fill',
                accent: 'accent-primary',
                tooltip: 'Total active teachers across your connected campuses.'
            },
            {
                label: 'Students',
                value: students,
                subtitle: 'Enrolled learners this term',
                icon: 'bi-mortarboard-fill',
                accent: 'accent-success',
                tooltip: 'Learners currently enrolled across institutions.'
            },
            {
                label: 'Content creators',
                value: creators,
                subtitle: 'Authors publishing new lessons',
                icon: 'bi-brush-fill',
                accent: 'accent-info',
                tooltip: 'Active content contributors with publishing permissions.'
            },
            {
                label: 'Active institutions',
                value: institutions,
                subtitle: 'Campuses connected to EdQuill',
                icon: 'bi-buildings-fill',
                accent: 'accent-warning',
                tooltip: 'Institutions linked to your administrator account.'
            }
        ];
    }
    /**
     * Micro metrics used in the institution snapshot tiles
     */
    get institutionMetrics() {
        if (!Array.isArray(this.institutionClassess) || this.institutionClassess.length === 0) {
            return [];
        }
        const snapshot = this.institutionClassess[0] ?? {};
        const totalClasses = this.toNumber(snapshot.totalclass_count ?? snapshot.total_class_count ?? snapshot.totalclasscount);
        const monthClasses = this.toNumber(snapshot.monthclass_count ?? snapshot.current_month_classes ?? snapshot.monthclasscount);
        const editedClasses = this.toNumber(snapshot.totaledited_class ?? snapshot.total_edited_class ?? snapshot.edit_class_count);
        const editedThisMonth = this.toNumber(snapshot.monthedit_class ?? snapshot.month_edit_class ?? snapshot.current_month_edit_classes);
        return [
            {
                label: 'Total classes',
                value: totalClasses,
                caption: 'All-time scheduled classes'
            },
            {
                label: 'Classes this month',
                value: monthClasses,
                caption: 'New sessions scheduled'
            },
            {
                label: 'Edited classes',
                value: editedClasses,
                caption: 'Classes updated since launch'
            },
            {
                label: 'Edited this month',
                value: editedThisMonth,
                caption: 'Recently updated sessions'
            }
        ];
    }
    /**
     * Map backend status codes to badge styling
     */
    getStatusTone(status) {
        const normalized = (status ?? '').toString().toLowerCase();
        if (['1', 'active', 'a', 'approved', 'live'].includes(normalized)) {
            return 'bg-success-subtle text-success';
        }
        if (['pending', 'p', 'awaiting', 'inreview', 'in-review'].includes(normalized)) {
            return 'bg-warning-subtle text-warning';
        }
        if (['0', 'inactive', 'd', 'disabled', 'draft'].includes(normalized)) {
            return 'bg-secondary-subtle text-secondary';
        }
        if (['blocked', 'suspended', 'b', 'hold', 'paused', 'cancelled', 'canceled', 'c'].includes(normalized)) {
            return 'bg-danger-subtle text-danger';
        }
        return 'bg-light text-neutral-600';
    }
    /**
     * Create user-friendly labels for status codes
     */
    getStatusLabel(status) {
        if (status === null || status === undefined || status === '') {
            return 'Unknown';
        }
        const normalized = status.toString().toLowerCase();
        if (['1', 'active', 'a', 'approved', 'live'].includes(normalized)) {
            return 'Active';
        }
        if (['pending', 'p', 'awaiting', 'inreview', 'in-review'].includes(normalized)) {
            return 'Pending';
        }
        if (['0', 'inactive', 'd', 'disabled', 'draft'].includes(normalized)) {
            return 'Inactive';
        }
        if (['blocked', 'suspended', 'b', 'hold'].includes(normalized)) {
            return 'Suspended';
        }
        if (['cancelled', 'canceled', 'c'].includes(normalized)) {
            return 'Cancelled';
        }
        return status.toString();
    }
    /**
     * Safely coerce values to numbers for UI display
     */
    toNumber(value) {
        if (value === null || value === undefined || value === '') {
            return 0;
        }
        const coerced = Number(value);
        return Number.isFinite(coerced) ? coerced : 0;
    }
    static { this.ɵfac = function DashboardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.CategoryService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.NgbModalConfig), i0.ɵɵdirectiveInject(i4.NgbModal), i0.ɵɵdirectiveInject(i5.CommonDataService), i0.ɵɵdirectiveInject(i6.FormBuilder), i0.ɵɵdirectiveInject(i7.ToastrService), i0.ɵɵdirectiveInject(i8.ValidationService), i0.ɵɵdirectiveInject(i9.NewsubjectService), i0.ɵɵdirectiveInject(i10.TeacherService), i0.ɵɵdirectiveInject(i11.CreatorService), i0.ɵɵdirectiveInject(i12.ContentService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.chart = _t.first);
        } }, standalone: true, features: [i0.ɵɵProvidersFeature([NgbModalConfig, NgbModal]), i0.ɵɵStandaloneFeature], decls: 5, vars: 2, consts: [["content", ""], ["emptyChart", ""], ["noRosterDate", ""], ["noInstitutionMetrics", ""], ["emptyContentChart", ""], ["noInstitutionStatus", ""], ["noCreatedDate", ""], [1, "dashboard-page", "container-fluid", "py-3"], [1, "card", "shadow-sm", "border-0", "skeleton-card", "mb-3"], [1, "modal-header", "border-0", "pb-0"], [1, "modal-title", "fw-semibold"], [1, "text-neutral-600", "small", "mb-0"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body", "pt-3"], [1, "row", "g-3", 3, "formGroup"], [1, "col-12"], ["for", "dashboardPassword", 1, "form-label", "fw-semibold"], [1, "input-group", "has-validation"], [1, "input-group-text"], [1, "bi", "bi-shield-lock"], ["type", "password", "id", "dashboardPassword", "placeholder", "Enter new password", "formControlName", "password", "required", "", 1, "form-control"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["for", "dashboardConfirmPassword", 1, "form-label", "fw-semibold"], [1, "bi", "bi-shield-check"], ["type", "password", "id", "dashboardConfirmPassword", "placeholder", "Re-enter password", "formControlName", "confirmPassword", "required", "", 1, "form-control"], [1, "modal-footer", "border-0", "pt-0"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "invalid-feedback", "d-block"], [1, "card-body", "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary", "mb-3"], [1, "visually-hidden"], [1, "text-neutral-600", "mb-0"], [1, "row", "g-3", "align-items-stretch"], [1, "col-12", "col-sm-6", "col-xl-3"], [1, "row", "g-3", "align-items-stretch", "mt-1"], [1, "col-12", "col-xl-8"], [1, "card", "shadow-sm", "border-0", "h-100"], [1, "card-header", "border-0", "pb-0", "d-flex", "flex-wrap", "gap-2", "align-items-center", "justify-content-between"], [1, "mb-1"], [1, "d-flex", "align-items-center", "gap-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "d-flex", "align-items-center", "gap-1", 3, "click"], [1, "bi", "bi-arrow-repeat"], [1, "card-body"], [1, "chart-container"], [4, "ngIf", "ngIfElse"], [1, "col-12", "col-xl-4"], [1, "card-header", "border-0", "pb-0"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "px-0", "d-flex", "align-items-center", "justify-content-between"], [1, "text-neutral-600"], [1, "fw-semibold", "text-neutral-900", "text-end"], [1, "snapshot-metrics", "mt-4"], [1, "col-12", "col-xxl-6"], [1, "card-header", "border-0", "pb-0", "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-2"], [1, "card", "shadow-sm", "border-0", "mt-3"], [1, "badge", "rounded-pill", "bg-light-subtle", "text-neutral-700"], [1, "card-body", "p-0"], [1, "table-responsive"], [1, "table", "table-modern", "align-middle", "mb-0"], [1, "table-light"], ["scope", "col"], ["scope", "col", 1, "text-center"], [1, "card", "stat-card", "border-0", "shadow-sm", "h-100"], [1, "card-body", "d-flex", "flex-column", "gap-3"], [1, "d-flex", "align-items-start", "justify-content-between"], [1, "stat-card__label", "text-uppercase", "small", "text-neutral-600", "mb-1"], [1, "stat-card__value", "mb-0"], [1, "stat-card__icon", 3, "ngClass"], [1, "bi", 3, "ngClass"], ["class", "stat-card__meta text-neutral-500 small mb-0", 4, "ngIf"], [1, "stat-card__meta", "text-neutral-500", "small", "mb-0"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "legend", "fill", "stroke", "tooltip", "xaxis"], [1, "empty-state", "text-center", "py-5"], [1, "bi", "bi-bar-chart-line", "fs-1", "text-neutral-400"], [1, "text-neutral-600", "mt-3", "mb-0"], [1, "snapshot-metric", "border", "rounded-3", "p-3"], [1, "text-neutral-600", "small", "text-uppercase", "mb-1"], [1, "fw-semibold", "mb-0"], ["class", "text-neutral-500 small mb-0", 4, "ngIf"], [1, "text-neutral-500", "small", "mb-0"], [1, "empty-state", "text-center", "py-4"], [1, "bi", "bi-collection", "text-neutral-400", "fs-4"], [1, "text-neutral-600", "small", "mb-0", "mt-2"], [3, "series", "chart", "xaxis", "dataLabels", "grid", "stroke", "title"], [1, "bi", "bi-stack", "fs-1", "text-neutral-400"], [1, "row", "g-3"], [1, "col-6"], [1, "status-tile", "border", "rounded-3", "p-3", "h-100"], [1, "status-tile__label", "text-neutral-600", "small", "text-uppercase"], [1, "status-tile__value", "fw-semibold"], ["class", "status-tile__caption text-neutral-500 small", 4, "ngIf"], [1, "status-tile__caption", "text-neutral-500", "small"], [1, "bi", "bi-building-up", "text-neutral-400", "fs-4"], [1, "d-flex", "flex-column"], [1, "fw-semibold", "text-neutral-900"], ["class", "text-neutral-500", 4, "ngIf"], [1, "text-center"], [1, "badge", "rounded-pill", "bg-primary-subtle", "text-primary", "fw-semibold"], [1, "badge", "rounded-pill", "bg-secondary-subtle", "text-secondary", "fw-semibold"], [1, "badge", "rounded-pill", "bg-info-subtle", "text-info", "fw-semibold"], [1, "badge", "rounded-pill", "fw-semibold", 3, "ngClass"], [1, "text-neutral-500"], ["colspan", "6"], [1, "bi", "bi-houses", "fs-1", "text-neutral-400"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DashboardComponent_ng_template_0_Template, 31, 5, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(2, "div", 7);
            i0.ɵɵtemplate(3, DashboardComponent_Conditional_3_Template, 7, 0, "div", 8)(4, DashboardComponent_Conditional_4_Template, 104, 15);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(!ctx.functionCalled ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.functionCalled ? 4 : -1);
        } }, dependencies: [CommonModule, i13.NgClass, i13.NgIf, i13.DecimalPipe, ReactiveFormsModule, i6.ɵNgNoValidate, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgControlStatusGroup, i6.RequiredValidator, i6.FormGroupDirective, i6.FormControlName, NgbModalModule, NgApexchartsModule, i14.ChartComponent, PipesModule, i15.CustomDateFormatPipe], styles: [".dashboard-page[_ngcontent-%COMP%] {\n  .card {\n    border-radius: var(--radius-lg);\n  }\n\n  .stat-card {\n    background: #fff;\n    transition: transform var(--transition-base) ease, box-shadow var(--transition-base) ease;\n\n    &:hover {\n      transform: translateY(-2px);\n      box-shadow: var(--shadow-md);\n    }\n  }\n\n  .stat-card__label {\n    letter-spacing: 0.08em;\n  }\n\n  .stat-card__value {\n    font-size: clamp(1.75rem, 1.6rem + 0.5vw, 2.25rem);\n    font-weight: 700;\n  }\n\n  .stat-card__icon {\n    width: 3rem;\n    height: 3rem;\n    border-radius: var(--radius-lg);\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.35rem;\n    transition: transform var(--transition-base) ease;\n\n    &:hover {\n      transform: scale(1.05);\n    }\n\n    &.accent-primary {\n      background: rgba(143, 0, 138, 0.12);\n      color: var(--color-primary);\n    }\n\n    &.accent-success {\n      background: rgba(129, 186, 0, 0.15);\n      color: var(--color-success);\n    }\n\n    &.accent-info {\n      background: rgba(19, 201, 202, 0.12);\n      color: var(--color-secondary);\n    }\n\n    &.accent-warning {\n      background: rgba(255, 188, 88, 0.18);\n      color: var(--color-warning);\n    }\n  }\n\n  .chart-container {\n    min-height: 320px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .empty-state {\n    color: var(--neutral-600);\n\n    i {\n      display: block;\n    }\n  }\n\n  .list-group-item {\n    border: none;\n    padding-left: 0;\n    padding-right: 0;\n\n    &:not(:last-child) {\n      border-bottom: 1px solid var(--neutral-200);\n    }\n  }\n\n  .snapshot-metrics {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    gap: var(--spacing-3);\n  }\n\n  .snapshot-metric {\n    background: var(--neutral-50);\n    border: 1px solid var(--neutral-200);\n    transition: border-color var(--transition-base) ease, box-shadow var(--transition-base) ease;\n\n    &:hover {\n      border-color: rgba(143, 0, 138, 0.35);\n      box-shadow: var(--shadow-sm);\n    }\n  }\n\n  .status-tile {\n    background: var(--neutral-50);\n    border: 1px solid var(--neutral-200);\n    border-radius: var(--radius-lg);\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-1);\n    transition: border-color var(--transition-base) ease, box-shadow var(--transition-base) ease;\n\n    &:hover {\n      border-color: rgba(19, 201, 202, 0.35);\n      box-shadow: var(--shadow-base);\n    }\n\n    &__label {\n      letter-spacing: 0.05em;\n    }\n\n    &__value {\n      font-size: clamp(1.5rem, 1.35rem + 0.5vw, 2rem);\n    }\n  }\n\n  .table-modern {\n    thead {\n      text-transform: uppercase;\n      font-size: 0.75rem;\n      letter-spacing: 0.05em;\n    }\n\n    tbody tr {\n      border-bottom: 1px solid var(--neutral-200);\n      transition: background var(--transition-base) ease;\n\n      &:hover {\n        background: var(--neutral-50);\n      }\n    }\n\n    td,\n    th {\n      padding: 0.875rem 1rem;\n      vertical-align: middle;\n    }\n  }\n\n  .skeleton-card {\n    background: linear-gradient(\n      90deg,\n      rgba(248, 249, 250, 1) 0%,\n      rgba(241, 243, 245, 0.35) 50%,\n      rgba(248, 249, 250, 1) 100%\n    );\n    background-size: 200% 100%;\n    animation: _ngcontent-%COMP%_shimmer 1.6s ease infinite;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .dashboard-page[_ngcontent-%COMP%] {\n    .stat-card__icon {\n      width: 2.75rem;\n      height: 2.75rem;\n    }\n\n    .status-tile__value {\n      font-size: 1.35rem;\n    }\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardComponent, [{
        type: Component,
        args: [{ selector: 'app-dashboard', standalone: true, imports: [CommonModule, ReactiveFormsModule, NgbModalModule, NgApexchartsModule, PipesModule], providers: [NgbModalConfig, NgbModal], template: "<ng-template #content let-close=\"close\" let-dismiss=\"dismiss\">\n  <div class=\"modal-header border-0 pb-0\">\n    <div>\n      <h5 class=\"modal-title fw-semibold\">Update your temporary password</h5>\n      <p class=\"text-neutral-600 small mb-0\">Set a new password to secure your account</p>\n    </div>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"dismiss('close')\"></button>\n  </div>\n  <div class=\"modal-body pt-3\">\n    <form [formGroup]=\"accountForm\" class=\"row g-3\">\n      <div class=\"col-12\">\n        <label class=\"form-label fw-semibold\" for=\"dashboardPassword\">New password</label>\n        <div class=\"input-group has-validation\">\n          <span class=\"input-group-text\">\n            <i class=\"bi bi-shield-lock\"></i>\n          </span>\n          <input\n            type=\"password\"\n            id=\"dashboardPassword\"\n            class=\"form-control\"\n            placeholder=\"Enter new password\"\n            formControlName=\"password\"\n            required\n          />\n        </div>\n        <div\n          class=\"invalid-feedback d-block\"\n          *ngIf=\"accountForm.get('password')?.invalid && (accountForm.get('password')?.dirty || accountForm.get('password')?.touched)\"\n        >\n          Password is required.\n        </div>\n      </div>\n      <div class=\"col-12\">\n        <label class=\"form-label fw-semibold\" for=\"dashboardConfirmPassword\">Confirm password</label>\n        <div class=\"input-group has-validation\">\n          <span class=\"input-group-text\">\n            <i class=\"bi bi-shield-check\"></i>\n          </span>\n          <input\n            type=\"password\"\n            id=\"dashboardConfirmPassword\"\n            class=\"form-control\"\n            placeholder=\"Re-enter password\"\n            formControlName=\"confirmPassword\"\n            required\n          />\n        </div>\n        <div\n          class=\"invalid-feedback d-block\"\n          *ngIf=\"accountForm.get('confirmPassword')?.invalid && (accountForm.get('confirmPassword')?.dirty || accountForm.get('confirmPassword')?.touched)\"\n        >\n          Confirmation is required.\n        </div>\n        <div\n          class=\"invalid-feedback d-block\"\n          *ngIf=\"\n            accountForm.get('password')?.value &&\n            accountForm.get('confirmPassword')?.value &&\n            accountForm.get('password')?.value !== accountForm.get('confirmPassword')?.value\n          \"\n        >\n          Passwords do not match.\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer border-0 pt-0\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"dismiss('cancel')\">Cancel</button>\n    <button\n      type=\"button\"\n      class=\"btn btn-primary\"\n      (click)=\"onSave()\"\n      [disabled]=\"accountForm.invalid || accountForm.get('password')?.value !== accountForm.get('confirmPassword')?.value\"\n    >\n      Save password\n    </button>\n  </div>\n</ng-template>\n\n<div class=\"dashboard-page container-fluid py-3\">\n  @if (!functionCalled) {\n    <div class=\"card shadow-sm border-0 skeleton-card mb-3\">\n      <div class=\"card-body text-center py-5\">\n        <div class=\"spinner-border text-primary mb-3\" role=\"status\">\n          <span class=\"visually-hidden\">Loading dashboard\u2026</span>\n        </div>\n        <p class=\"text-neutral-600 mb-0\">Preparing your dashboard insights\u2026</p>\n      </div>\n    </div>\n  }\n\n  @if (functionCalled) {\n    <section class=\"row g-3 align-items-stretch\">\n      @for (metric of summaryMetrics; track metric.label) {\n        <div class=\"col-12 col-sm-6 col-xl-3\">\n          <article class=\"card stat-card border-0 shadow-sm h-100\">\n            <div class=\"card-body d-flex flex-column gap-3\">\n              <div class=\"d-flex align-items-start justify-content-between\">\n                <div>\n                  <p class=\"stat-card__label text-uppercase small text-neutral-600 mb-1\">{{ metric.label }}</p>\n                  <h2 class=\"stat-card__value mb-0\">{{ metric.value | number }}</h2>\n                </div>\n                <span class=\"stat-card__icon\" [ngClass]=\"metric.accent\" [attr.title]=\"metric.tooltip\">\n                  <i class=\"bi\" [ngClass]=\"metric.icon\"></i>\n                </span>\n              </div>\n              <p class=\"stat-card__meta text-neutral-500 small mb-0\" *ngIf=\"metric.subtitle\">\n                {{ metric.subtitle }}\n              </p>\n            </div>\n          </article>\n        </div>\n      }\n    </section>\n\n    <section class=\"row g-3 align-items-stretch mt-1\">\n      <div class=\"col-12 col-xl-8\">\n        <section class=\"card shadow-sm border-0 h-100\">\n          <div class=\"card-header border-0 pb-0 d-flex flex-wrap gap-2 align-items-center justify-content-between\">\n            <div>\n              <h5 class=\"mb-1\">Enrollment Growth</h5>\n              <p class=\"text-neutral-600 small mb-0\">Monthly student onboarding across your institution</p>\n            </div>\n            <div class=\"d-flex align-items-center gap-2\">\n              <button\n                type=\"button\"\n                class=\"btn btn-sm btn-outline-secondary d-flex align-items-center gap-1\"\n                (click)=\"refreshDashboard()\"\n              >\n                <i class=\"bi bi-arrow-repeat\"></i>\n                Refresh\n              </button>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"chart-container\">\n              <ng-container *ngIf=\"chartOptions?.series?.length; else emptyChart\">\n                <apx-chart\n                  [series]=\"chartOptions?.series\"\n                  [chart]=\"chartOptions?.chart\"\n                  [dataLabels]=\"chartOptions?.dataLabels\"\n                  [plotOptions]=\"chartOptions?.plotOptions\"\n                  [yaxis]=\"chartOptions?.yaxis\"\n                  [legend]=\"chartOptions?.legend\"\n                  [fill]=\"chartOptions?.fill\"\n                  [stroke]=\"chartOptions?.stroke\"\n                  [tooltip]=\"chartOptions?.tooltip\"\n                  [xaxis]=\"chartOptions?.xaxis\"\n                ></apx-chart>\n              </ng-container>\n              <ng-template #emptyChart>\n                <div class=\"empty-state text-center py-5\">\n                  <i class=\"bi bi-bar-chart-line fs-1 text-neutral-400\"></i>\n                  <p class=\"text-neutral-600 mt-3 mb-0\">\n                    We\u2019ll visualize enrollment trends as soon as data is available.\n                  </p>\n                </div>\n              </ng-template>\n            </div>\n          </div>\n        </section>\n      </div>\n\n      <div class=\"col-12 col-xl-4\">\n        <section class=\"card shadow-sm border-0 h-100\">\n          <div class=\"card-header border-0 pb-0\">\n            <h5 class=\"mb-1\">Institution Snapshot</h5>\n            <p class=\"text-neutral-600 small mb-0\">\n              Key metrics for {{ institutionName || 'your institution' }}\n            </p>\n          </div>\n          <div class=\"card-body\">\n            <ul class=\"list-group list-group-flush\">\n              <li class=\"list-group-item px-0 d-flex align-items-center justify-content-between\">\n                <span class=\"text-neutral-600\">Primary institution</span>\n                <span class=\"fw-semibold text-neutral-900 text-end\">{{ institutionName || '\u2014' }}</span>\n              </li>\n              <li class=\"list-group-item px-0 d-flex align-items-center justify-content-between\">\n                <span class=\"text-neutral-600\">Linked campuses</span>\n                <span class=\"fw-semibold text-neutral-900 text-end\">{{ schoolStatus?.length || 0 }}</span>\n              </li>\n              <li class=\"list-group-item px-0 d-flex align-items-center justify-content-between\">\n                <span class=\"text-neutral-600\">Last roster update</span>\n                <span class=\"fw-semibold text-neutral-900 text-end\">\n                  <ng-container *ngIf=\"orderList?.length && orderList[0]?.created_date; else noRosterDate\">\n                    {{ orderList[0].created_date | customDateFormat }}\n                  </ng-container>\n                  <ng-template #noRosterDate>\u2014</ng-template>\n                </span>\n              </li>\n            </ul>\n\n            <div class=\"snapshot-metrics mt-4\">\n              <ng-container *ngIf=\"institutionMetrics.length; else noInstitutionMetrics\">\n                @for (metric of institutionMetrics; track metric.label) {\n                  <div class=\"snapshot-metric border rounded-3 p-3\">\n                    <p class=\"text-neutral-600 small text-uppercase mb-1\">{{ metric.label }}</p>\n                    <h4 class=\"fw-semibold mb-0\">{{ metric.value | number }}</h4>\n                    <p class=\"text-neutral-500 small mb-0\" *ngIf=\"metric.caption\">{{ metric.caption }}</p>\n                  </div>\n                }\n              </ng-container>\n              <ng-template #noInstitutionMetrics>\n                <div class=\"empty-state text-center py-4\">\n                  <i class=\"bi bi-collection text-neutral-400 fs-4\"></i>\n                  <p class=\"text-neutral-600 small mb-0 mt-2\">Institution activity metrics will appear here.</p>\n                </div>\n              </ng-template>\n            </div>\n          </div>\n        </section>\n      </div>\n    </section>\n\n    <section class=\"row g-3 align-items-stretch mt-1\">\n      <div class=\"col-12 col-xxl-6\">\n        <section class=\"card shadow-sm border-0 h-100\">\n          <div class=\"card-header border-0 pb-0 d-flex flex-wrap align-items-center justify-content-between gap-2\">\n            <div>\n              <h5 class=\"mb-1\">Content Overview</h5>\n              <p class=\"text-neutral-600 small mb-0\">Recent activity across content repositories</p>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <ng-container *ngIf=\"chartOptions1?.series?.length; else emptyContentChart\">\n              <apx-chart\n                [series]=\"chartOptions1?.series\"\n                [chart]=\"chartOptions1?.chart\"\n                [xaxis]=\"chartOptions1?.xaxis\"\n                [dataLabels]=\"chartOptions1?.dataLabels\"\n                [grid]=\"chartOptions1?.grid\"\n                [stroke]=\"chartOptions1?.stroke\"\n                [title]=\"chartOptions1?.title\"\n              ></apx-chart>\n            </ng-container>\n            <ng-template #emptyContentChart>\n              <div class=\"empty-state text-center py-5\">\n                <i class=\"bi bi-stack fs-1 text-neutral-400\"></i>\n                <p class=\"text-neutral-600 mt-3 mb-0\">\n                  Start publishing lessons to view content performance analytics.\n                </p>\n              </div>\n            </ng-template>\n          </div>\n        </section>\n      </div>\n\n      <div class=\"col-12 col-xxl-6\">\n        <section class=\"card shadow-sm border-0 h-100\">\n          <div class=\"card-header border-0 pb-0\">\n            <h5 class=\"mb-1\">Institution Status</h5>\n            <p class=\"text-neutral-600 small mb-0\">Class creation and editing trends</p>\n          </div>\n          <div class=\"card-body\">\n            <ng-container *ngIf=\"institutionMetrics.length; else noInstitutionStatus\">\n              <div class=\"row g-3\">\n                @for (metric of institutionMetrics; track metric.label) {\n                  <div class=\"col-6\">\n                    <div class=\"status-tile border rounded-3 p-3 h-100\">\n                      <span class=\"status-tile__label text-neutral-600 small text-uppercase\">{{ metric.label }}</span>\n                      <span class=\"status-tile__value fw-semibold\">{{ metric.value | number }}</span>\n                      <span class=\"status-tile__caption text-neutral-500 small\" *ngIf=\"metric.caption\">\n                        {{ metric.caption }}\n                      </span>\n                    </div>\n                  </div>\n                }\n              </div>\n            </ng-container>\n            <ng-template #noInstitutionStatus>\n              <div class=\"empty-state text-center py-4\">\n                <i class=\"bi bi-building-up text-neutral-400 fs-4\"></i>\n                <p class=\"text-neutral-600 small mb-0 mt-2\">\n                  Once classes are created, we\u2019ll surface institution trends here.\n                </p>\n              </div>\n            </ng-template>\n          </div>\n        </section>\n      </div>\n    </section>\n\n    <section class=\"card shadow-sm border-0 mt-3\">\n      <div class=\"card-header border-0 pb-0 d-flex flex-wrap align-items-center justify-content-between gap-2\">\n        <div>\n          <h5 class=\"mb-1\">School Directory</h5>\n          <p class=\"text-neutral-600 small mb-0\">\n            Overview of connected institutions with quick actions.\n          </p>\n        </div>\n        <span class=\"badge rounded-pill bg-light-subtle text-neutral-700\">\n          {{ orderList?.length || 0 }} listed\n        </span>\n      </div>\n      <div class=\"card-body p-0\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-modern align-middle mb-0\">\n            <thead class=\"table-light\">\n              <tr>\n                <th scope=\"col\">Institution</th>\n                <th scope=\"col\" class=\"text-center\">Teachers</th>\n                <th scope=\"col\" class=\"text-center\">Students</th>\n                <th scope=\"col\" class=\"text-center\">Content creators</th>\n                <th scope=\"col\" class=\"text-center\">Created</th>\n                <th scope=\"col\" class=\"text-center\">Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              @if (orderList?.length) {\n                @for (item of orderList; track $index) {\n                  <tr>\n                    <td>\n                      <div class=\"d-flex flex-column\">\n                        <span class=\"fw-semibold text-neutral-900\">\n                          {{ item.name || item.school_name || '\u2014' }}\n                        </span>\n                        <small class=\"text-neutral-500\" *ngIf=\"item.school_code || item.code\">\n                          Code: {{ item.school_code || item.code }}\n                        </small>\n                      </div>\n                    </td>\n                    <td class=\"text-center\">\n                      <span class=\"badge rounded-pill bg-primary-subtle text-primary fw-semibold\">\n                        {{ item.teachers || 0 }}\n                      </span>\n                    </td>\n                    <td class=\"text-center\">\n                      <span class=\"badge rounded-pill bg-secondary-subtle text-secondary fw-semibold\">\n                        {{ item.students || 0 }}\n                      </span>\n                    </td>\n                    <td class=\"text-center\">\n                      <span class=\"badge rounded-pill bg-info-subtle text-info fw-semibold\">\n                        {{ item.content_creator || item.content_creators || 0 }}\n                      </span>\n                    </td>\n                    <td class=\"text-center\">\n                      <ng-container *ngIf=\"item.created_date; else noCreatedDate\">\n                        {{ item.created_date | customDateFormat }}\n                      </ng-container>\n                      <ng-template #noCreatedDate>\u2014</ng-template>\n                    </td>\n                    <td class=\"text-center\">\n                      <span class=\"badge rounded-pill fw-semibold\" [ngClass]=\"getStatusTone(item.status)\">\n                        {{ getStatusLabel(item.status) }}\n                      </span>\n                    </td>\n                  </tr>\n                }\n              } @else {\n                <tr>\n                  <td colspan=\"6\">\n                    <div class=\"empty-state text-center py-5\">\n                      <i class=\"bi bi-houses fs-1 text-neutral-400\"></i>\n                      <p class=\"text-neutral-600 mt-3 mb-0\">\n                        Connect your first school to populate the directory.\n                      </p>\n                    </div>\n                  </td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </section>\n  }\n</div>\n", styles: [".dashboard-page {\n  .card {\n    border-radius: var(--radius-lg);\n  }\n\n  .stat-card {\n    background: #fff;\n    transition: transform var(--transition-base) ease, box-shadow var(--transition-base) ease;\n\n    &:hover {\n      transform: translateY(-2px);\n      box-shadow: var(--shadow-md);\n    }\n  }\n\n  .stat-card__label {\n    letter-spacing: 0.08em;\n  }\n\n  .stat-card__value {\n    font-size: clamp(1.75rem, 1.6rem + 0.5vw, 2.25rem);\n    font-weight: 700;\n  }\n\n  .stat-card__icon {\n    width: 3rem;\n    height: 3rem;\n    border-radius: var(--radius-lg);\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.35rem;\n    transition: transform var(--transition-base) ease;\n\n    &:hover {\n      transform: scale(1.05);\n    }\n\n    &.accent-primary {\n      background: rgba(143, 0, 138, 0.12);\n      color: var(--color-primary);\n    }\n\n    &.accent-success {\n      background: rgba(129, 186, 0, 0.15);\n      color: var(--color-success);\n    }\n\n    &.accent-info {\n      background: rgba(19, 201, 202, 0.12);\n      color: var(--color-secondary);\n    }\n\n    &.accent-warning {\n      background: rgba(255, 188, 88, 0.18);\n      color: var(--color-warning);\n    }\n  }\n\n  .chart-container {\n    min-height: 320px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .empty-state {\n    color: var(--neutral-600);\n\n    i {\n      display: block;\n    }\n  }\n\n  .list-group-item {\n    border: none;\n    padding-left: 0;\n    padding-right: 0;\n\n    &:not(:last-child) {\n      border-bottom: 1px solid var(--neutral-200);\n    }\n  }\n\n  .snapshot-metrics {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    gap: var(--spacing-3);\n  }\n\n  .snapshot-metric {\n    background: var(--neutral-50);\n    border: 1px solid var(--neutral-200);\n    transition: border-color var(--transition-base) ease, box-shadow var(--transition-base) ease;\n\n    &:hover {\n      border-color: rgba(143, 0, 138, 0.35);\n      box-shadow: var(--shadow-sm);\n    }\n  }\n\n  .status-tile {\n    background: var(--neutral-50);\n    border: 1px solid var(--neutral-200);\n    border-radius: var(--radius-lg);\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-1);\n    transition: border-color var(--transition-base) ease, box-shadow var(--transition-base) ease;\n\n    &:hover {\n      border-color: rgba(19, 201, 202, 0.35);\n      box-shadow: var(--shadow-base);\n    }\n\n    &__label {\n      letter-spacing: 0.05em;\n    }\n\n    &__value {\n      font-size: clamp(1.5rem, 1.35rem + 0.5vw, 2rem);\n    }\n  }\n\n  .table-modern {\n    thead {\n      text-transform: uppercase;\n      font-size: 0.75rem;\n      letter-spacing: 0.05em;\n    }\n\n    tbody tr {\n      border-bottom: 1px solid var(--neutral-200);\n      transition: background var(--transition-base) ease;\n\n      &:hover {\n        background: var(--neutral-50);\n      }\n    }\n\n    td,\n    th {\n      padding: 0.875rem 1rem;\n      vertical-align: middle;\n    }\n  }\n\n  .skeleton-card {\n    background: linear-gradient(\n      90deg,\n      rgba(248, 249, 250, 1) 0%,\n      rgba(241, 243, 245, 0.35) 50%,\n      rgba(248, 249, 250, 1) 100%\n    );\n    background-size: 200% 100%;\n    animation: shimmer 1.6s ease infinite;\n  }\n}\n\n@keyframes shimmer {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .dashboard-page {\n    .stat-card__icon {\n      width: 2.75rem;\n      height: 2.75rem;\n    }\n\n    .status-tile__value {\n      font-size: 1.35rem;\n    }\n  }\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.CategoryService }, { type: i3.Router }, { type: i4.NgbModalConfig }, { type: i4.NgbModal }, { type: i5.CommonDataService }, { type: i6.FormBuilder }, { type: i7.ToastrService }, { type: i8.ValidationService }, { type: i9.NewsubjectService }, { type: i10.TeacherService }, { type: i11.CreatorService }, { type: i12.ContentService }, { type: i0.ChangeDetectorRef }], { modalContent: [{
            type: ViewChild,
            args: ['content']
        }], chart: [{
            type: ViewChild,
            args: ['chart']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardComponent, { className: "DashboardComponent" }); })();
//# sourceMappingURL=dashboard.component.js.map