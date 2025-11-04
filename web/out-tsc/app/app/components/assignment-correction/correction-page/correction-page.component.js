import { Component, HostListener, ViewChild } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { parse, stringify } from 'flatted';
import { jsPDF } from 'jspdf';
import { urls } from '../../../shared/utils/urls';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "../../../shared/service/configuration.service";
import * as i3 from "@angular/platform-browser";
import * as i4 from "../../../shared/service/teacher.service";
import * as i5 from "@angular/forms";
import * as i6 from "../../../shared/service/auth.service";
import * as i7 from "../../../shared/service/common-data.service";
import * as i8 from "../../../shared/service/nav.service";
import * as i9 from "../../../shared/service/common.service";
import * as i10 from "@angular/router";
import * as i11 from "../../../shared/service/validation.service";
import * as i12 from "ngx-sse-client";
import * as i13 from "ngx-toastr";
import * as i14 from "../../../shared/service/creator.service";
import * as i15 from "../../../shared/service/newsubject.service";
import * as i16 from "../../../shared/service/student.service";
import * as i17 from "../../../shared/service/contentdetail.service";
import * as i18 from "@angular/common";
import * as i19 from "@ng-select/ng-select";
import * as i20 from "../../auth/graph-component/graph-component.component";
import * as i21 from "../../auth/annotation/annotation.component";
import * as i22 from "ngx-infinite-scroll";
import * as i23 from "ng-apexcharts";
import * as i24 from "../../../shared/pipes/sanitizer/SanitizeHtmlPipe.pipe";
import * as i25 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["pdfPage"];
const _c1 = ["class"];
const _c2 = ["deleteAlert"];
const _c3 = ["workArea"];
const _c4 = ["loaderStatus"];
const _c5 = ["releaseScoreAlert"];
const _c6 = ["deleteFeedBack"];
const _c7 = a0 => ({ "active1": a0 });
const _c8 = a0 => ({ "padding": a0 });
const _c9 = (a0, a1, a2) => ({ "ans-correct": a0, "ans-selected": a1, "ans-wrong": a2 });
const _c10 = (a0, a1) => ({ "correct-ans": a0, "wrong-ans": a1 });
const _c11 = a0 => ({ "max-height": a0 });
const _c12 = () => ["20"];
const _c13 = () => ["21", "22"];
const _c14 = () => ["55"];
const _c15 = (a0, a1) => ({ "correct-ans-selected": a0, "wrong-ans-selected": a1 });
const _c16 = a0 => ({ "correct-ans-selected": a0 });
const _c17 = a0 => ({ "color-primary": a0 });
const _c18 = (a0, a1, a2) => ({ "badge-exceptional": a0, "badge-good": a1, "badge-improve": a2 });
function CorrectionPageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "button", 22);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_4_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.studentsDetails(ctx_r1.classData, 0)); });
    i0.ɵɵtext(2, "All");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 22);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_4_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.studentsDetails(ctx_r1.classData, 1)); });
    i0.ɵɵtext(4, "Pending");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 22);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_4_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.studentsDetails(ctx_r1.classData, 2)); });
    i0.ɵɵtext(6, "In Progress");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 22);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_4_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.studentsDetails(ctx_r1.classData, 3)); });
    i0.ɵɵtext(8, "Completed");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c7, ctx_r1.studentListHighlight == "0"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c7, ctx_r1.studentListHighlight == "1"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c7, ctx_r1.studentListHighlight == "2"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c7, ctx_r1.studentListHighlight == "3"));
} }
function CorrectionPageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h5")(2, "span", 23);
    i0.ɵɵtext(3, "Student Name: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small", 24);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, " \u00A0 \u00A0 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h5", 25)(8, "span", 23);
    i0.ɵɵtext(9, "Assignment: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "small", 24);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12, " \u00A0 \u00A0 ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.pageType == 1 ? "6" : "3", "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.studentName);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.classData.content_name);
} }
function CorrectionPageComponent_div_7_div_2_h4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 34)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elapsed_r3 = ctx.ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(elapsed_r3.hours);
} }
function CorrectionPageComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_7_div_2_h4_1_Template, 3, 1, "h4", 30);
    i0.ɵɵelementStart(2, "h6", 31);
    i0.ɵɵtext(3, "Hours");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.getElapsedOverAllTime());
} }
function CorrectionPageComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "h4", 33);
    i0.ɵɵtext(2, ":");
    i0.ɵɵelementEnd()();
} }
function CorrectionPageComponent_div_7_h4_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 34)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elapsed_r4 = ctx.ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(elapsed_r4.minutes);
} }
function CorrectionPageComponent_div_7_h4_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 34)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elapsed_r5 = ctx.ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(elapsed_r5.seconds);
} }
function CorrectionPageComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 26);
    i0.ɵɵtemplate(2, CorrectionPageComponent_div_7_div_2_Template, 4, 1, "div", 27)(3, CorrectionPageComponent_div_7_div_3_Template, 3, 0, "div", 28);
    i0.ɵɵelementStart(4, "div", 29);
    i0.ɵɵtemplate(5, CorrectionPageComponent_div_7_h4_5_Template, 3, 1, "h4", 30);
    i0.ɵɵelementStart(6, "h6", 31);
    i0.ɵɵtext(7, "Minutes");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 32)(9, "h4", 33);
    i0.ɵɵtext(10, ":");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 29);
    i0.ɵɵtemplate(12, CorrectionPageComponent_div_7_h4_12_Template, 3, 1, "h4", 30);
    i0.ɵɵelementStart(13, "h6", 31);
    i0.ɵɵtext(14, "Seconds");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.contentTimeTaken >= 3600 ? "3" : "2", "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.contentTimeTaken >= 3600);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.contentTimeTaken >= 3600);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.getElapsedOverAllTime());
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.getElapsedOverAllTime());
} }
function CorrectionPageComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35)(1, "select", 36);
    i0.ɵɵlistener("change", function CorrectionPageComponent_div_8_Template_select_change_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.filterQues($event)); });
    i0.ɵɵelementStart(2, "option", 37);
    i0.ɵɵtext(3, "All Answers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "option", 38);
    i0.ɵɵtext(5, "Correct");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "option", 39);
    i0.ɵɵtext(7, "Incorrect");
    i0.ɵɵelementEnd()()();
} }
function CorrectionPageComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 40);
    i0.ɵɵtext(1, "Back To Class");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/class/topicsAndCurriculum/1");
} }
function CorrectionPageComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 41);
    i0.ɵɵlistener("click", function CorrectionPageComponent_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.moveToPendingAlert("")); });
    i0.ɵɵtext(1, "Rework");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 42);
    i0.ɵɵlistener("click", function CorrectionPageComponent_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveAndRelease(ctx_r1.pageType == 2 && ctx_r1.totalAnsSample == "" ? 3 : 2)); });
    i0.ɵɵtext(1, "Submit and Release");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("hidden", ctx_r1.scoreStatus == 2);
} }
function CorrectionPageComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 41);
    i0.ɵɵlistener("click", function CorrectionPageComponent_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveAndRelease(1)); });
    i0.ɵɵtext(1, "Release Score");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 43);
    i0.ɵɵlistener("click", function CorrectionPageComponent_button_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.back()); });
    i0.ɵɵtext(1, "Back");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44)(1, "p", 45);
    i0.ɵɵtext(2, "Student uploaded answer sheet");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("hidden", ctx_r1.scoreStatus == 2 || (ctx_r1.uploadAnswerPath == null ? null : ctx_r1.uploadAnswerPath.length) == 0);
} }
function CorrectionPageComponent_hr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr", 46);
} }
function CorrectionPageComponent_div_16_input_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 56);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_16_input_11_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deSelect($event)); });
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_16_h5_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 57);
    i0.ɵɵtext(1, "Select All");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 47)(1, "div")(2, "h4", 48);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 49)(5, "button", 50);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_16_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.listView(1)); });
    i0.ɵɵelement(6, "i", 51);
    i0.ɵɵtext(7, " List");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 52);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_16_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.listView(2)); });
    i0.ɵɵelement(9, "i", 53);
    i0.ɵɵtext(10, " Grid");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, CorrectionPageComponent_div_16_input_11_Template, 1, 0, "input", 54)(12, CorrectionPageComponent_div_16_h5_12_Template, 2, 0, "h5", 55);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Assignment : ", ctx_r1.classData.content_name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c7, ctx_r1.gridView == "1"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c7, ctx_r1.gridView == "2"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.showGrid);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showGrid);
} }
function CorrectionPageComponent_div_17_div_3_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 66);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_17_div_3_li_10_Template_li_click_0_listener() { const i_r15 = i0.ɵɵrestoreView(_r14).index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.selectAnswerSheet(i_r15)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r16 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(items_r16.image);
} }
function CorrectionPageComponent_div_17_div_3_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 73);
} }
function CorrectionPageComponent_div_17_div_3_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 66);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_17_div_3_a_12_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showType("3")); });
    i0.ɵɵtext(1, "Hide pdf");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_17_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 63)(1, "button", 64);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 65)(4, "a", 66);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_17_div_3_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.showType("1")); });
    i0.ɵɵtext(5, "Assignments and uploads");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "li", 67)(7, "a", 68);
    i0.ɵɵtext(8, "Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "ul", 69);
    i0.ɵɵtemplate(10, CorrectionPageComponent_div_17_div_3_li_10_Template, 2, 1, "li", 70);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, CorrectionPageComponent_div_17_div_3_div_11_Template, 1, 0, "div", 71)(12, CorrectionPageComponent_div_17_div_3_a_12_Template, 2, 0, "a", 72);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.buttonName, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("hidden", ctx_r1.scoreStatus == 2 || (ctx_r1.uploadAnswerPath == null ? null : ctx_r1.uploadAnswerPath.length) == 0);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.uploadAnswerPath);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.totalAnsSample != "" && (ctx_r1.correctPdfPath == null ? null : ctx_r1.correctPdfPath.length) == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.totalAnsSample != "" && (ctx_r1.correctPdfPath == null ? null : ctx_r1.correctPdfPath.length) == 1);
} }
function CorrectionPageComponent_div_17_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 74)(1, "div", 75)(2, "input", 76);
    i0.ɵɵlistener("change", function CorrectionPageComponent_div_17_div_4_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.showAnswerPdf($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 77);
    i0.ɵɵtext(4, "Answer key pdf");
    i0.ɵɵelementEnd()()();
} }
function CorrectionPageComponent_div_17_div_5_div_2_select_1_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 87);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    i0.ɵɵpropertyInterpolate("value", i_r21);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r20.heading);
} }
function CorrectionPageComponent_div_17_div_5_div_2_select_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 85);
    i0.ɵɵlistener("change", function CorrectionPageComponent_div_17_div_5_div_2_select_1_Template_select_change_0_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.sectionFilter($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CorrectionPageComponent_div_17_div_5_div_2_select_1_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.sectionFilterVal, $event) || (ctx_r1.sectionFilterVal = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(1, "option", 37);
    i0.ɵɵtext(2, "All Section");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CorrectionPageComponent_div_17_div_5_div_2_select_1_option_3_Template, 2, 2, "option", 86);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.sectionFilterVal);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.totalAnsSample);
} }
function CorrectionPageComponent_div_17_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 83);
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_17_div_5_div_2_select_1_Template, 4, 2, "select", 84);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.totalAnsSample == null ? null : ctx_r1.totalAnsSample.length) > 1 || ctx_r1.totalAnsSample[0].heading != "");
} }
function CorrectionPageComponent_div_17_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 83)(1, "select", 36);
    i0.ɵɵlistener("change", function CorrectionPageComponent_div_17_div_5_div_4_Template_select_change_1_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.filterQues($event)); });
    i0.ɵɵelementStart(2, "option", 37);
    i0.ɵɵtext(3, "All Answers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "option", 38);
    i0.ɵɵtext(5, "Correct");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "option", 39);
    i0.ɵɵtext(7, "Incorrect");
    i0.ɵɵelementEnd()()();
} }
function CorrectionPageComponent_div_17_div_5_div_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 91);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r24 = ctx.item;
    i0.ɵɵpropertyInterpolate("title", item_r24.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r24.name);
} }
function CorrectionPageComponent_div_17_div_5_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 88)(1, "ng-select", 89);
    i0.ɵɵlistener("change", function CorrectionPageComponent_div_17_div_5_div_5_Template_ng_select_change_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.changeQuestionListFromTest($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CorrectionPageComponent_div_17_div_5_div_5_Template_ng_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.testContentData, $event) || (ctx_r1.testContentData = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(2, CorrectionPageComponent_div_17_div_5_div_5_ng_template_2_Template, 2, 2, "ng-template", 90);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.testContentDetail == null ? null : ctx_r1.testContentDetail.contents);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.testContentData);
    i0.ɵɵproperty("clearable", false);
} }
function CorrectionPageComponent_div_17_div_5_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 92)(1, "ng-select", 93);
    i0.ɵɵlistener("change", function CorrectionPageComponent_div_17_div_5_form_6_Template_ng_select_change_1_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.testStatus = $event.status; return i0.ɵɵresetView(ctx_r1.studentsAnswerList($event, $event.status)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("formGroup", ctx_r1.filterForm);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.correctionStudentList);
} }
function CorrectionPageComponent_div_17_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 78)(1, "div");
    i0.ɵɵtemplate(2, CorrectionPageComponent_div_17_div_5_div_2_Template, 2, 1, "div", 79);
    i0.ɵɵelementStart(3, "div", 80);
    i0.ɵɵtemplate(4, CorrectionPageComponent_div_17_div_5_div_4_Template, 8, 0, "div", 79)(5, CorrectionPageComponent_div_17_div_5_div_5_Template, 3, 3, "div", 81)(6, CorrectionPageComponent_div_17_div_5_form_6_Template, 2, 2, "form", 82);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-md-12 d-flex justify-content-", ctx_r1.totalAnsSample != "" && (ctx_r1.correctPdfPath == null ? null : ctx_r1.correctPdfPath.length) != 0 ? "between" : "end", " px-0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.totalAnsSample != "" && (ctx_r1.correctPdfPath == null ? null : ctx_r1.correctPdfPath.length) != 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.totalAnsSample != "" && (ctx_r1.totalAns[0] == null ? null : ctx_r1.totalAns[0].question_type_id) != 55 && ctx_r1.correctPdfPath.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.testContentDetail);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showstudentContentlist && (ctx_r1.correctionStudentList == null ? null : ctx_r1.correctionStudentList.length) > 1);
} }
function CorrectionPageComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div", 58)(2, "div", 59);
    i0.ɵɵtemplate(3, CorrectionPageComponent_div_17_div_3_Template, 13, 5, "div", 60)(4, CorrectionPageComponent_div_17_div_4_Template, 5, 0, "div", 61);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, CorrectionPageComponent_div_17_div_5_Template, 7, 7, "div", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", (ctx_r1.totalAnsSample != "" || ctx_r1.totalAnsSample == "") && (ctx_r1.correctPdfPath == null ? null : ctx_r1.correctPdfPath.length) == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.correctAnswerKeyPath == null ? null : ctx_r1.correctAnswerKeyPath.length) != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.totalAnsSample != "" && (ctx_r1.correctPdfPath == null ? null : ctx_r1.correctPdfPath.length) || ctx_r1.totalAnsSample != "" && (ctx_r1.totalAns[0] == null ? null : ctx_r1.totalAns[0].question_type_id) != 55 || !ctx_r1.showstudentContentlist && (ctx_r1.correctionStudentList == null ? null : ctx_r1.correctionStudentList.length) > 1);
} }
function CorrectionPageComponent_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 97)(1, "div", 98)(2, "button", 99);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function CorrectionPageComponent_div_18_div_3_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 124);
} }
function CorrectionPageComponent_div_18_div_3_div_1_img_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 125);
} if (rf & 2) {
    const list_r27 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("src", ctx_r1.sanitizer.bypassSecurityTrustResourceUrl(ctx_r1.webhost + "/" + list_r27.student_profile), i0.ɵɵsanitizeUrl);
} }
function CorrectionPageComponent_div_18_div_3_div_1_h6_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 126);
    i0.ɵɵtext(1, "Pending");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_18_div_3_div_1_h6_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 127);
    i0.ɵɵtext(1, "In Progress");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_18_div_3_div_1_h6_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 128);
    i0.ɵɵtext(1, "Completed");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_18_div_3_div_1_h6_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 128);
    i0.ɵɵtext(1, "Score Released");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_18_div_3_div_1_h6_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 128);
    i0.ɵɵtext(1, "Correction Saved");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_18_div_3_div_1_h6_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 128);
    i0.ɵɵtext(1, "Correction Pending");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_18_div_3_div_1_i_34_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 129);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_18_div_3_div_1_i_34_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r30); const list_r27 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.navigateToSATReport(list_r27)); });
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_18_div_3_div_1_img_35_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 130);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_18_div_3_div_1_img_35_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r31); const list_r27 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.moveToPendingAlert(list_r27)); });
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_18_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 102)(1, "div", 103)(2, "div", 104)(3, "div", 105)(4, "div", 106);
    i0.ɵɵtemplate(5, CorrectionPageComponent_div_18_div_3_div_1_img_5_Template, 1, 0, "img", 107)(6, CorrectionPageComponent_div_18_div_3_div_1_img_6_Template, 1, 1, "img", 108);
    i0.ɵɵelementStart(7, "h4", 109);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "input", 110);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_18_div_3_div_1_Template_input_click_9_listener() { const ctx_r27 = i0.ɵɵrestoreView(_r26); const list_r27 = ctx_r27.$implicit; const i_r29 = ctx_r27.index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.listSelect(list_r27.checked, i_r29)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CorrectionPageComponent_div_18_div_3_div_1_Template_input_ngModelChange_9_listener($event) { const list_r27 = i0.ɵɵrestoreView(_r26).$implicit; i0.ɵɵtwoWayBindingSet(list_r27.checked, $event) || (list_r27.checked = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 111)(11, "div")(12, "label", 112);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 113)(15, "div")(16, "label");
    i0.ɵɵtext(17, "Score");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "h6");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div")(21, "label");
    i0.ɵɵtext(22, "No. of Qs");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "h6", 114);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 115)(26, "div", 116);
    i0.ɵɵtemplate(27, CorrectionPageComponent_div_18_div_3_div_1_h6_27_Template, 2, 0, "h6", 117)(28, CorrectionPageComponent_div_18_div_3_div_1_h6_28_Template, 2, 0, "h6", 118)(29, CorrectionPageComponent_div_18_div_3_div_1_h6_29_Template, 2, 0, "h6", 119)(30, CorrectionPageComponent_div_18_div_3_div_1_h6_30_Template, 2, 0, "h6", 119)(31, CorrectionPageComponent_div_18_div_3_div_1_h6_31_Template, 2, 0, "h6", 119)(32, CorrectionPageComponent_div_18_div_3_div_1_h6_32_Template, 2, 0, "h6", 119);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div", 120);
    i0.ɵɵtemplate(34, CorrectionPageComponent_div_18_div_3_div_1_i_34_Template, 1, 0, "i", 121)(35, CorrectionPageComponent_div_18_div_3_div_1_img_35_Template, 1, 0, "img", 122);
    i0.ɵɵelementStart(36, "button", 123);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_18_div_3_div_1_Template_button_click_36_listener() { const list_r27 = i0.ɵɵrestoreView(_r26).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.testStatus = list_r27.status; return i0.ɵɵresetView(ctx_r1.studentsAnswerList(list_r27, list_r27.status)); });
    i0.ɵɵtext(37, "Responses");
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const list_r27 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", list_r27.student_profile == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r27.student_profile != "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(list_r27.student_name);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", list_r27.checked);
    i0.ɵɵproperty("disabled", list_r27.status != 5 && list_r27.status != 3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Performance: ", list_r27.percentage, "");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2("", list_r27.marks, "/", list_r27.total_marks, "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("", list_r27.attend_questions, "/", list_r27.total_question, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r27.status == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r27.status == 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r27.status == 4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r27.status == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r27.status == 5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r27.status == 6);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r27.status == 3 && list_r27.content_format == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r27.status != 1 && list_r27.status != 2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("", list_r27.status == 1 ? "btn btn-outline-primary" : "btn btn-primary", " custom-btn");
    i0.ɵɵproperty("disabled", list_r27.status == 1);
} }
function CorrectionPageComponent_div_18_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 100);
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_18_div_3_div_1_Template, 38, 22, "div", 101);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.studentList);
} }
function CorrectionPageComponent_div_18_div_4_div_24_img_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 124);
} }
function CorrectionPageComponent_div_18_div_4_div_24_img_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 125);
} if (rf & 2) {
    const list_r35 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("src", ctx_r1.sanitizer.bypassSecurityTrustResourceUrl(ctx_r1.webhost + "/" + list_r35.student_profile), i0.ɵɵsanitizeUrl);
} }
function CorrectionPageComponent_div_18_div_4_div_24_h6_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 126);
    i0.ɵɵtext(1, "Pending");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_18_div_4_div_24_h6_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 127);
    i0.ɵɵtext(1, "In Progress");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_18_div_4_div_24_h6_24_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "br");
    i0.ɵɵelementStart(2, "small", 151);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "customDateFormat");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r35 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("SD: ", i0.ɵɵpipeBind1(4, 1, list_r35.answer_completed_date), "");
} }
function CorrectionPageComponent_div_18_div_4_div_24_h6_24_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "br");
    i0.ɵɵelementStart(2, "small", 152);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "customDateFormat");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r35 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("SR: ", i0.ɵɵpipeBind1(4, 1, list_r35.score_release_date), "");
} }
function CorrectionPageComponent_div_18_div_4_div_24_h6_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 128);
    i0.ɵɵtext(1, "Completed ");
    i0.ɵɵtemplate(2, CorrectionPageComponent_div_18_div_4_div_24_h6_24_span_2_Template, 5, 3, "span", 150)(3, CorrectionPageComponent_div_18_div_4_div_24_h6_24_span_3_Template, 5, 3, "span", 150);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r35 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r35.answer_completed_date != "00-00-0000");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r35.score_release_date != "00-00-0000");
} }
function CorrectionPageComponent_div_18_div_4_div_24_h6_25_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "br");
    i0.ɵɵelementStart(2, "small", 151);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "customDateFormat");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r35 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("SD: ", i0.ɵɵpipeBind1(4, 1, list_r35.answer_completed_date), "");
} }
function CorrectionPageComponent_div_18_div_4_div_24_h6_25_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "br");
    i0.ɵɵelementStart(2, "small", 152);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "customDateFormat");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r35 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("SR: ", i0.ɵɵpipeBind1(4, 1, list_r35.score_release_date), "");
} }
function CorrectionPageComponent_div_18_div_4_div_24_h6_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 128);
    i0.ɵɵtext(1, "Score Released ");
    i0.ɵɵtemplate(2, CorrectionPageComponent_div_18_div_4_div_24_h6_25_span_2_Template, 5, 3, "span", 150)(3, CorrectionPageComponent_div_18_div_4_div_24_h6_25_span_3_Template, 5, 3, "span", 150);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r35 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r35.answer_completed_date != "00-00-0000");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r35.score_release_date != "00-00-0000");
} }
function CorrectionPageComponent_div_18_div_4_div_24_h6_26_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "br");
    i0.ɵɵelementStart(2, "small", 151);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "customDateFormat");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r35 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("SD: ", i0.ɵɵpipeBind1(4, 1, list_r35.answer_completed_date), "");
} }
function CorrectionPageComponent_div_18_div_4_div_24_h6_26_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "br");
    i0.ɵɵelementStart(2, "small", 152);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "customDateFormat");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r35 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("SR: ", i0.ɵɵpipeBind1(4, 1, list_r35.score_release_date), "");
} }
function CorrectionPageComponent_div_18_div_4_div_24_h6_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 128);
    i0.ɵɵtext(1, "Correction Saved ");
    i0.ɵɵtemplate(2, CorrectionPageComponent_div_18_div_4_div_24_h6_26_span_2_Template, 5, 3, "span", 150)(3, CorrectionPageComponent_div_18_div_4_div_24_h6_26_span_3_Template, 5, 3, "span", 150);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r35 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r35.answer_completed_date != "00-00-0000");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r35.score_release_date != "00-00-0000");
} }
function CorrectionPageComponent_div_18_div_4_div_24_h6_27_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "br");
    i0.ɵɵelementStart(2, "small", 151);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "customDateFormat");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r35 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("SD: ", i0.ɵɵpipeBind1(4, 1, list_r35.answer_completed_date), "");
} }
function CorrectionPageComponent_div_18_div_4_div_24_h6_27_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "br");
    i0.ɵɵelementStart(2, "small", 152);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "customDateFormat");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r35 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("SR: ", i0.ɵɵpipeBind1(4, 1, list_r35.score_release_date), "");
} }
function CorrectionPageComponent_div_18_div_4_div_24_h6_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 128);
    i0.ɵɵtext(1, "Correction Pending ");
    i0.ɵɵtemplate(2, CorrectionPageComponent_div_18_div_4_div_24_h6_27_span_2_Template, 5, 3, "span", 150)(3, CorrectionPageComponent_div_18_div_4_div_24_h6_27_span_3_Template, 5, 3, "span", 150);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r35 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r35.answer_completed_date != "00-00-0000");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r35.score_release_date != "00-00-0000");
} }
function CorrectionPageComponent_div_18_div_4_div_24_i_28_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 153);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_18_div_4_div_24_i_28_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r37); const list_r35 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.navigateToSATReport(list_r35)); });
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_18_div_4_div_24_img_29_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 154);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_18_div_4_div_24_img_29_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r38); const list_r35 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.moveToPendingAlert(list_r35)); });
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_18_div_4_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 131)(1, "div", 103)(2, "div", 132)(3, "div", 139)(4, "input", 140);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_18_div_4_div_24_Template_input_click_4_listener() { const ctx_r33 = i0.ɵɵrestoreView(_r33); const list_r35 = ctx_r33.$implicit; const i_r36 = ctx_r33.index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.listSelect(list_r35.checked, i_r36)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CorrectionPageComponent_div_18_div_4_div_24_Template_input_ngModelChange_4_listener($event) { const list_r35 = i0.ɵɵrestoreView(_r33).$implicit; i0.ɵɵtwoWayBindingSet(list_r35.checked, $event) || (list_r35.checked = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 141)(6, "div", 98);
    i0.ɵɵtemplate(7, CorrectionPageComponent_div_18_div_4_div_24_img_7_Template, 1, 0, "img", 107)(8, CorrectionPageComponent_div_18_div_4_div_24_img_8_Template, 1, 1, "img", 108);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 142)(10, "h5", 109);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 143)(13, "h6");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 144)(16, "h6", 145);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 146)(19, "h6", 145);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 144);
    i0.ɵɵtemplate(22, CorrectionPageComponent_div_18_div_4_div_24_h6_22_Template, 2, 0, "h6", 117)(23, CorrectionPageComponent_div_18_div_4_div_24_h6_23_Template, 2, 0, "h6", 118)(24, CorrectionPageComponent_div_18_div_4_div_24_h6_24_Template, 4, 2, "h6", 119)(25, CorrectionPageComponent_div_18_div_4_div_24_h6_25_Template, 4, 2, "h6", 119)(26, CorrectionPageComponent_div_18_div_4_div_24_h6_26_Template, 4, 2, "h6", 119)(27, CorrectionPageComponent_div_18_div_4_div_24_h6_27_Template, 4, 2, "h6", 119)(28, CorrectionPageComponent_div_18_div_4_div_24_i_28_Template, 1, 0, "i", 147)(29, CorrectionPageComponent_div_18_div_4_div_24_img_29_Template, 1, 0, "img", 148);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "div", 149)(31, "button", 123);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_18_div_4_div_24_Template_button_click_31_listener() { const list_r35 = i0.ɵɵrestoreView(_r33).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.testStatus = list_r35.status; return i0.ɵɵresetView(ctx_r1.studentsAnswerList(list_r35, list_r35.status)); });
    i0.ɵɵtext(32, "Responses");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const list_r35 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", list_r35.checked);
    i0.ɵɵproperty("disabled", list_r35.status != 5 && list_r35.status != 3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r35.student_profile == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r35.student_profile != "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(list_r35.student_name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(list_r35.percentage);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", list_r35.attend_questions, "/", list_r35.total_question, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", list_r35.marks, "/", list_r35.total_marks, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r35.status == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r35.status == 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r35.status == 4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r35.status == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r35.status == 5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r35.status == 6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r35.status == 3 && list_r35.content_format == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r35.status != 1 && list_r35.status != 2);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("", list_r35.status == 1 ? "btn btn-outline-primary" : "btn btn-primary", " custom-btn");
    i0.ɵɵproperty("disabled", list_r35.status == 1);
} }
function CorrectionPageComponent_div_18_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 100)(1, "div", 131)(2, "div", 103)(3, "div", 132)(4, "div", 133)(5, "input", 134);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_18_div_4_Template_input_click_5_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deSelect($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 135)(7, "h4", 136);
    i0.ɵɵtext(8, "Student Name");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 133)(10, "h4", 136);
    i0.ɵɵtext(11, "Performance");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 137)(13, "h4", 136);
    i0.ɵɵtext(14, "No of Qs");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 133)(16, "h4", 136);
    i0.ɵɵtext(17, "Score");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 137)(19, "h4", 136);
    i0.ɵɵtext(20, "Status");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 137)(22, "h4", 136);
    i0.ɵɵtext(23, "Action");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(24, CorrectionPageComponent_div_18_div_4_div_24_Template, 33, 22, "div", 138);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(24);
    i0.ɵɵproperty("ngForOf", ctx_r1.studentList);
} }
function CorrectionPageComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "div", 94);
    i0.ɵɵtemplate(2, CorrectionPageComponent_div_18_div_2_Template, 4, 0, "div", 95)(3, CorrectionPageComponent_div_18_div_3_Template, 2, 1, "div", 96)(4, CorrectionPageComponent_div_18_div_4_Template, 25, 1, "div", 96);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.studentList == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentList != "" && !ctx_r1.showGrid);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentList != "" && ctx_r1.showGrid);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 184);
    i0.ɵɵelement(1, "img", 185);
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_3_img_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 194);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_3_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 195);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_3_img_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 196);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_3_img_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 197);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_3_img_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 198);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 94)(1, "a", 186)(2, "div", 187)(3, "div", 188);
    i0.ɵɵtemplate(4, CorrectionPageComponent_div_19_div_1_div_3_div_3_img_4_Template, 1, 0, "img", 189)(5, CorrectionPageComponent_div_19_div_1_div_3_div_3_img_5_Template, 1, 0, "img", 190)(6, CorrectionPageComponent_div_19_div_1_div_3_div_3_img_6_Template, 1, 0, "img", 191)(7, CorrectionPageComponent_div_19_div_1_div_3_div_3_img_7_Template, 1, 0, "img", 192)(8, CorrectionPageComponent_div_19_div_1_div_3_div_3_img_8_Template, 1, 0, "img", 193);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "a", 186);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("title", ctx_r1.pdfpath.link)("href", ctx_r1.pdfpath.link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.pdfpath.type == "document");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdfpath.type == "audio");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdfpath.type == "video");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdfpath.type == "ppt");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdfpath.type == "Others");
    i0.ɵɵadvance();
    i0.ɵɵproperty("title", ctx_r1.pdfpath.link)("href", ctx_r1.pdfpath.link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.pdfpath.name);
} }
function CorrectionPageComponent_div_19_div_1_div_3_app_annotation_4_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-annotation", 199);
    i0.ɵɵlistener("annotate", function CorrectionPageComponent_div_19_div_1_div_3_app_annotation_4_Template_app_annotation_annotate_0_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.getAnnotation($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("getAnnotate", ctx_r1.areaInfo)("getDragQues", ctx_r1.dragQuestion)("pdfPath", ctx_r1.pdfTemplate)("toolHide", false)("userType", "teacher");
} }
function CorrectionPageComponent_div_19_div_1_div_3_app_annotation_5_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-annotation", 200);
    i0.ɵɵlistener("annotate", function CorrectionPageComponent_div_19_div_1_div_3_app_annotation_5_Template_app_annotation_annotate_0_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.getSheetInfo($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("getAnnotate", ctx_r1.sheetInfo)("pdfPath", ctx_r1.answerSheetPath)("toolHide", false)("userType", "teacher");
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 204);
    i0.ɵɵelement(1, "input", 205);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r42 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.showingType != "3" || ctx_r1.showPDFAnswer ? 12 : 6, " mb-3");
    i0.ɵɵproperty("hidden", (sec_r42 == null ? null : sec_r42.section == null ? null : sec_r42.section.length) == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", sec_r42 == null ? null : sec_r42.heading);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_i_7_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 233);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_i_7_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r44); const ctx_r44 = i0.ɵɵnextContext(); const item_r46 = ctx_r44.$implicit; const j_r47 = ctx_r44.index; const i_r48 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.givePoints("true", item_r46, "pdf", i_r48, j_r47)); });
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_i_8_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 234);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_i_8_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r49); const ctx_r44 = i0.ɵɵnextContext(); const item_r46 = ctx_r44.$implicit; const j_r47 = ctx_r44.index; const i_r48 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.givePoints("false", item_r46, "pdf", i_r48, j_r47)); });
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_button_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 235);
    i0.ɵɵtext(1, "Work Space");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r47 = i0.ɵɵnextContext().index;
    const i_r48 = i0.ɵɵnextContext().index;
    i0.ɵɵattribute("aria-controls", "#roughArea" + i_r48 + "sec" + j_r47)("data-target", "#roughArea" + i_r48 + "sec" + j_r47);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_button_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 235);
    i0.ɵɵtext(1, "Student Feedback");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r47 = i0.ɵɵnextContext().index;
    const i_r48 = i0.ɵɵnextContext().index;
    i0.ɵɵattribute("aria-controls", "#studentFeedback" + i_r48 + "sec" + j_r47)("data-target", "#studentFeedback" + i_r48 + "sec" + j_r47);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 236);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_button_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r50); const item_r46 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.openWorkArea(item_r46)); });
    i0.ɵɵtext(1, "Work Area");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_span_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 237);
    i0.ɵɵtext(1, "Invalid Points");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_ul_29_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 240)(1, "span")(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "i", 241)(5, "i", 242);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r52 = ctx.$implicit;
    const item_r46 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c9, option_r52.trim().toLowerCase() == item_r46.answer.toString().trim().toLowerCase(), option_r52.trim().toLowerCase() == item_r46.student_answer.trim().toLowerCase(), option_r52.trim().toLowerCase() != item_r46.answer.toString().trim().toLowerCase() && option_r52.trim().toLowerCase() == item_r46.student_answer.trim().toLowerCase()));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(option_r52);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_ul_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 238);
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_ul_29_li_1_Template, 6, 6, "li", 239);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r46 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r46.array);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_ul_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 238)(1, "li", 240)(2, "span");
    i0.ɵɵelement(3, "input", 243);
    i0.ɵɵtext(4, " True ");
    i0.ɵɵelement(5, "i", 241)(6, "i", 242);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "li", 240)(8, "span");
    i0.ɵɵelement(9, "input", 244);
    i0.ɵɵtext(10, " False ");
    i0.ɵɵelement(11, "i", 241)(12, "i", 242);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r44 = i0.ɵɵnextContext();
    const item_r46 = ctx_r44.$implicit;
    const j_r47 = ctx_r44.index;
    const i_r48 = i0.ɵɵnextContext().index;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(10, _c9, item_r46.answer.toString() == "true", item_r46.student_answer == "true", item_r46.answer.toString() == "false" && item_r46.student_answer == "true"));
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("name", "", i_r48, "ans", j_r47, "");
    i0.ɵɵproperty("checked", item_r46.student_answer == "true");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(14, _c9, item_r46.answer.toString() == "false", item_r46.student_answer == "false", item_r46.answer.toString() == "true" && item_r46.student_answer == "false"));
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("name", "", i_r48, "ans", j_r47, "");
    i0.ɵɵproperty("checked", item_r46.student_answer == "false");
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_ul_31_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 240)(1, "span", 245);
    i0.ɵɵtext(2);
    i0.ɵɵelement(3, "i", 241)(4, "i", 242);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r53 = ctx.$implicit;
    const item_r46 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c9, option_r53 == item_r46.answer.toString(), option_r53 == item_r46.student_answer, option_r53 != item_r46.answer.toString() && option_r53 == item_r46.student_answer));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", option_r53, " ");
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_ul_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 238);
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_ul_31_li_1_Template, 5, 6, "li", 239);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r46 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r46.mob_options);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_32_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label")(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "span", 249);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const answer_r54 = ctx.$implicit;
    const k_r55 = ctx.index;
    const first_r56 = ctx.first;
    i0.ɵɵclassMapInterpolate1("mt-", first_r56 ? "4" : "2", " col-12");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Correct answer ", k_r55 + 1, " : ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(answer_r54);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 246);
    i0.ɵɵelement(1, "textarea", 247);
    i0.ɵɵtemplate(2, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_32_label_2_Template, 5, 5, "label", 248);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r46 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", item_r46.enteredAnswer ? "correct-ans" : "wrong-ans")("value", item_r46.student_answer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r46.answer);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 246)(1, "textarea", 250);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r46 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r46.student_answer);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_34_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 256);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_34_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 257);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_34_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 251)(1, "label", 23)(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(4, "h4", 254);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const answer_r57 = ctx.$implicit;
    const k_r58 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Correct Answer ", k_r58 + 1, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, answer_r57), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 246)(1, "div", 251)(2, "label", 120)(3, "b");
    i0.ɵɵtext(4, "Student Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_34_i_5_Template, 1, 0, "i", 252)(6, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_34_i_6_Template, 1, 0, "i", 253);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "h4", 254);
    i0.ɵɵpipe(8, "sanitizeHtml");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_34_div_9_Template, 6, 4, "div", 255);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r46 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r46.given_points == item_r46.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r46.given_points != item_r46.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(8, 4, item_r46.student_answer), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r46.answer);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_35_div_1_textarea_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "textarea", 247);
    i0.ɵɵtext(1, "                                                            ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r59 = i0.ɵɵnextContext().index;
    const item_r46 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c10, item_r46.match_case == "1" ? item_r46.answer[k_r59].value.trim() == item_r46.student_answer[k_r59].trim() : item_r46.answer[k_r59].value.trim().toLowerCase().split(" ").join("") == item_r46.student_answer[k_r59].trim().toLowerCase().split(" ").join(""), item_r46.match_case ? item_r46.answer[k_r59].value.trim() != item_r46.student_answer[k_r59].trim() : item_r46.answer[k_r59].value.trim().toLowerCase().split(" ").join("") != item_r46.student_answer[k_r59].trim().toLowerCase().split(" ").join("")))("value", item_r46.student_answer[k_r59]);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_35_div_1_textarea_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "textarea", 261);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_35_div_1_textarea_1_Template, 2, 5, "textarea", 258)(2, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_35_div_1_textarea_2_Template, 1, 0, "textarea", 259);
    i0.ɵɵelementStart(3, "label", 260)(4, "b");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const k_r59 = ctx.index;
    const item_r46 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r46.student_answer != "" && item_r46.student_answer != null);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r46.student_answer == "" || item_r46.student_answer == null);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Correct Answer : ", item_r46.answer[k_r59].value, "");
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 246);
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_35_div_1_Template, 6, 3, "div", 203);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r46 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r46.answer);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_img_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 262);
} if (rf & 2) {
    const item_r46 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("src", ctx_r1.sanitizer.bypassSecurityTrustResourceUrl(ctx_r1.webhost + "/" + item_r46.rough_image_url), i0.ɵɵsanitizeUrl);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 263);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const item_r46 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, item_r46.student_roughdata), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 264);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r46 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r46.student_feedback);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 265);
    i0.ɵɵtext(1, "No Feedback Found");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_47_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 256);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_47_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 257);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_47_div_7_app_graph_component_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-graph-component", 268);
} if (rf & 2) {
    const item_r46 = i0.ɵɵnextContext(3).$implicit;
    const i_r48 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("editMode", false)("editPatchValue", ctx_r1.parseVal(item_r46.student_answer[0].correctAnswer))("graphId", i_r48 + "Editgraph" + item_r46.sub_question_no + "id")("questionType", "40");
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_47_div_7_app_graph_component_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-graph-component", 268);
} if (rf & 2) {
    const item_r46 = i0.ɵɵnextContext(3).$implicit;
    const i_r48 = i0.ɵɵnextContext().index;
    i0.ɵɵproperty("editMode", false)("editPatchValue", false)("graphId", i_r48 + "Editgraphnull" + item_r46.sub_question_no + "id")("questionType", "40");
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_47_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_47_div_7_app_graph_component_1_Template, 1, 4, "app-graph-component", 269)(2, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_47_div_7_app_graph_component_2_Template, 1, 4, "app-graph-component", 269);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r46 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r46 == null ? null : item_r46.student_answer == null ? null : item_r46.student_answer.length) != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r46.student_answer == null ? null : item_r46.student_answer.length) == 0);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_47_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 270);
    i0.ɵɵelement(1, "h4", 271);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r46 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, item_r46.editor_answer), i0.ɵɵsanitizeHtml)("ngClass", item_r46.given_points == item_r46.points ? "form-span-correct" : "form-span-wrong");
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_47_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 270);
    i0.ɵɵelement(1, "h4", 272);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r46 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, item_r46.question_editor_answer), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div")(2, "label", 120)(3, "b");
    i0.ɵɵtext(4, "Student Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_47_i_5_Template, 1, 0, "i", 252)(6, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_47_i_6_Template, 1, 0, "i", 253);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_47_div_7_Template, 3, 2, "div", 150)(8, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_47_div_8_Template, 3, 4, "div", 266);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div")(10, "label", 267)(11, "b");
    i0.ɵɵtext(12, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(13, "app-graph-component", 268);
    i0.ɵɵtemplate(14, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_47_div_14_Template, 3, 3, "div", 266);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r46 = i0.ɵɵnextContext().$implicit;
    const i_r48 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("col-md-12 mt-4 px-0 ", ctx_r1.showingType == "3" && !ctx_r1.showPDFAnswer ? "d-flex" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.showingType == "3" && !ctx_r1.showPDFAnswer ? 6 : 12, " px-0");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", item_r46.given_points == item_r46.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r46.given_points != item_r46.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r46.student_answer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r46.editor_answer != "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.showingType == "3" && !ctx_r1.showPDFAnswer ? 6 : 12, " px-0");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("editMode", false)("editPatchValue", ctx_r1.parseVal(item_r46.answer))("graphId", i_r48 + "correctgraph" + item_r46.sub_question_no + "id")("questionType", "40");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r46.question_editor_answer != "");
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 273)(1, "div", 94)(2, "label", 231);
    i0.ɵɵtext(3, "Explanation");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 274);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r46 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 1, item_r46.answer_explanation), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 206)(2, "div", 207)(3, "div")(4, "div", 208);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div");
    i0.ɵɵtemplate(7, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_i_7_Template, 1, 0, "i", 209)(8, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_i_8_Template, 1, 0, "i", 210);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div")(10, "div");
    i0.ɵɵtemplate(11, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_button_11_Template, 2, 2, "button", 211)(12, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_button_12_Template, 2, 2, "button", 211)(13, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_button_13_Template, 2, 0, "button", 212);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div")(15, "div", 213)(16, "span", 214);
    i0.ɵɵtext(17, "Points: ");
    i0.ɵɵelementStart(18, "input", 215);
    i0.ɵɵlistener("input", function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_Template_input_input_18_listener($event) { const ctx_r50 = i0.ɵɵrestoreView(_r43); const item_r46 = ctx_r50.$implicit; const j_r47 = ctx_r50.index; const i_r48 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); ctx_r1.getPoints($event, i_r48, j_r47, "pdf"); return i0.ɵɵresetView(ctx_r1.markValidation($event, item_r46.points, i_r48, j_r47, "pdf")); })("keypress", function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_Template_input_keypress_18_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 216);
    i0.ɵɵtext(20, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "span", 217);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(23, "br");
    i0.ɵɵtemplate(24, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_span_24_Template, 2, 0, "span", 218);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 219)(26, "div", 94);
    i0.ɵɵelement(27, "div", 220);
    i0.ɵɵpipe(28, "sanitizeHtml");
    i0.ɵɵtemplate(29, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_ul_29_Template, 2, 1, "ul", 221)(30, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_ul_30_Template, 13, 18, "ul", 221)(31, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_ul_31_Template, 2, 1, "ul", 221)(32, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_32_Template, 3, 3, "div", 222)(33, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_33_Template, 3, 1, "div", 222)(34, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_34_Template, 10, 6, "div", 222)(35, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_35_Template, 2, 1, "div", 222);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "div")(37, "div", 223)(38, "div", 224);
    i0.ɵɵtemplate(39, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_img_39_Template, 1, 1, "img", 225)(40, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_40_Template, 2, 3, "div", 226);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(41, "div")(42, "div", 223)(43, "div", 224);
    i0.ɵɵtemplate(44, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_44_Template, 2, 1, "div", 227)(45, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_45_Template, 2, 0, "div", 228);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(46, "div", 219);
    i0.ɵɵtemplate(47, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_47_Template, 15, 18, "div", 11);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(48, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_div_48_Template, 6, 3, "div", 229);
    i0.ɵɵelementStart(49, "div", 230)(50, "div", 94)(51, "label", 231);
    i0.ɵɵtext(52, "Feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "textarea", 232);
    i0.ɵɵlistener("input", function CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_Template_textarea_input_53_listener($event) { const j_r47 = i0.ɵɵrestoreView(_r43).index; const i_r48 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.getFeedback($event, i_r48, j_r47)); });
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const item_r46 = ctx.$implicit;
    const j_r47 = ctx.index;
    const i_r48 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", !item_r46.isShow);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.showingType == "3" ? 1 : 2, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r46 == null ? null : item_r46.sub_question_no);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.showingType == "3" ? 2 : 1, " pt-2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r46.points != item_r46.given_points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r46.points == item_r46.given_points);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.showingType == "3" ? 9 : 9, " text-right d-flex justify-content-end");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("pull-right px-0 ", ctx_r1.showingType == "3" ? "mr-2" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r46.rough_image_url != "" || item_r46.student_roughdata != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r46.student_feedback != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r46 == null ? null : item_r46.workarea == null ? null : item_r46.workarea.length) != 0);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.showingType == "3" && !ctx_r1.showPDFAnswer ? 2 : ctx_r1.showPDFAnswer ? 5 : 4, " px-0");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", item_r46.given_points);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r46.points);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r46.maxValErr);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("hidden", item_r46.question == "")("innerHTML", i0.ɵɵpipeBind1(28, 53, item_r46.question), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r46.question_type_id == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r46.question_type_id == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r46.question_type_id == 9);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r46.question_type_id == 10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r46.question_type_id == 20);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r46.question_type_id == 30);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r46.question_type_id == 54);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.showingType == "3" ? 3 : 6, "");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("id", "roughArea", i_r48, "sec", j_r47, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r46.rough_image_url != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r46.rough_image_url == "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.showingType == "3" ? 3 : 6, "");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("id", "studentFeedback", i_r48, "sec", j_r47, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r46.student_feedback != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r46.student_feedback == "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r46.question_type_id == 40);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r46.answer_explanation != "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", item_r46.feedback);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 201);
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_1_Template, 2, 5, "div", 202)(2, CorrectionPageComponent_div_19_div_1_div_3_div_9_div_2_Template, 54, 55, "div", 203);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r42 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(3, _c8, ctx_r1.showingType == "3" ? "2rem" : "0.3rem"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (sec_r42 == null ? null : sec_r42.heading) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", sec_r42 == null ? null : sec_r42.section);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 275);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.totalStudentFeedBack);
} }
function CorrectionPageComponent_div_19_div_1_div_3_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 276);
    i0.ɵɵtext(1, "No Feedback Found");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "div");
    i0.ɵɵtemplate(2, CorrectionPageComponent_div_19_div_1_div_3_div_2_Template, 2, 0, "div", 159)(3, CorrectionPageComponent_div_19_div_1_div_3_div_3_Template, 11, 10, "div", 160)(4, CorrectionPageComponent_div_19_div_1_div_3_app_annotation_4_Template, 1, 5, "app-annotation", 161)(5, CorrectionPageComponent_div_19_div_1_div_3_app_annotation_5_Template, 1, 4, "app-annotation", 162);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 163)(7, "div", 164)(8, "div", 165);
    i0.ɵɵlistener("scrolled", function CorrectionPageComponent_div_19_div_1_div_3_Template_div_scrolled_8_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.onScrollDown($event)); });
    i0.ɵɵtemplate(9, CorrectionPageComponent_div_19_div_1_div_3_div_9_Template, 3, 5, "div", 166);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 167)(11, "div", 168)(12, "div", 94)(13, "div", 94)(14, "button", 169);
    i0.ɵɵtext(15, "Student Overall Feedback");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(16, "div", 170)(17, "div", 171)(18, "div", 94);
    i0.ɵɵtemplate(19, CorrectionPageComponent_div_19_div_1_div_3_div_19_Template, 2, 1, "div", 172)(20, CorrectionPageComponent_div_19_div_1_div_3_div_20_Template, 2, 0, "div", 173);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "div", 174)(22, "div", 175)(23, "div", 94)(24, "label");
    i0.ɵɵtext(25, "Obtained Points");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "input", 176);
    i0.ɵɵtwoWayListener("ngModelChange", function CorrectionPageComponent_div_19_div_1_div_3_Template_input_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.studentPoints, $event) || (ctx_r1.studentPoints = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 177)(28, "label");
    i0.ɵɵtext(29, "Total Points");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "input", 178);
    i0.ɵɵtwoWayListener("ngModelChange", function CorrectionPageComponent_div_19_div_1_div_3_Template_input_ngModelChange_30_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.totalPoints, $event) || (ctx_r1.totalPoints = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(31, "div", 179)(32, "label");
    i0.ɵɵtext(33, "Overall Feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "textarea", 180);
    i0.ɵɵtwoWayListener("ngModelChange", function CorrectionPageComponent_div_19_div_1_div_3_Template_textarea_ngModelChange_34_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.totalFeedBack, $event) || (ctx_r1.totalFeedBack = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(35, "div", 181)(36, "button", 182);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_19_div_1_div_3_Template_button_click_36_listener() { i0.ɵɵrestoreView(_r39); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.saveAnswer(1, 1, true)); });
    i0.ɵɵtext(37, "Submit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "button", 183);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_19_div_1_div_3_Template_button_click_38_listener() { i0.ɵɵrestoreView(_r39); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.saveAnswer(2, 1, true)); });
    i0.ɵɵtext(39, "Save");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.showPDFAnswer ? 12 : 7, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.functionCalled || ctx_r1.showingType == "2" && ctx_r1.blink == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.functionCalled && ctx_r1.showingType == "1" && !ctx_r1.isPdfAvailable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.functionCalled && ctx_r1.showingType == "1" && ctx_r1.isPdfAvailable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.functionCalled && ctx_r1.showingType == "2" && ctx_r1.blink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.deleteAnnatation)("ngClass", ctx_r1.showingType == 3 ? "col-md-12" : ctx_r1.showPDFAnswer ? "col-md-6 px-0" : "col-md-5 px-0");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("fromRoot", true)("infiniteScrollContainer", ctx_r1.selector)("infiniteScrollDistance", 5)("infiniteScrollThrottle", 50);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.totalAns);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngIf", ctx_r1.totalStudentFeedBack != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.totalStudentFeedBack == "");
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.studentPoints);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.totalPoints);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.totalFeedBack);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.scoreStatus == 3 || ctx_r1.scoreStatus == 2);
} }
function CorrectionPageComponent_div_19_div_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 184);
    i0.ɵɵelement(1, "img", 185);
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_1_div_4_div_2_app_annotation_1_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-annotation", 281);
    i0.ɵɵlistener("annotate", function CorrectionPageComponent_div_19_div_1_div_4_div_2_app_annotation_1_Template_app_annotation_annotate_0_listener($event) { i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.getAnnotation($event)); })("deleteAnnotation", function CorrectionPageComponent_div_19_div_1_div_4_div_2_app_annotation_1_Template_app_annotation_deleteAnnotation_0_listener($event) { i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.getDelete($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("getAnnotate", ctx_r1.areaInfo)("getDragQues", ctx_r1.dragQuestion)("pdfPath", ctx_r1.pdfTemplate)("toolHide", false)("userType", "teacher");
} }
function CorrectionPageComponent_div_19_div_1_div_4_div_2_app_annotation_2_Template(rf, ctx) { if (rf & 1) {
    const _r61 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-annotation", 282);
    i0.ɵɵlistener("annotate", function CorrectionPageComponent_div_19_div_1_div_4_div_2_app_annotation_2_Template_app_annotation_annotate_0_listener($event) { i0.ɵɵrestoreView(_r61); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.getSheetInfo($event)); })("deleteAnnotation", function CorrectionPageComponent_div_19_div_1_div_4_div_2_app_annotation_2_Template_app_annotation_deleteAnnotation_0_listener($event) { i0.ɵɵrestoreView(_r61); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.getDelete($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("getAnnotate", ctx_r1.sheetInfo)("pdfPath", ctx_r1.answerSheetPath)("toolHide", false)("userType", "teacher");
} }
function CorrectionPageComponent_div_19_div_1_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_1_div_4_div_2_app_annotation_1_Template, 1, 5, "app-annotation", 279)(2, CorrectionPageComponent_div_19_div_1_div_4_div_2_app_annotation_2_Template, 1, 4, "app-annotation", 280);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.showPDFAnswer ? 12 : 8, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showingType == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showingType == "2" && ctx_r1.blink);
} }
function CorrectionPageComponent_div_19_div_1_div_4_div_3_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 275);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.totalStudentFeedBack);
} }
function CorrectionPageComponent_div_19_div_1_div_4_div_3_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 276);
    i0.ɵɵtext(1, "No feedback found");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_1_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 283)(1, "div", 94)(2, "div", 168)(3, "div", 94)(4, "div", 94)(5, "button", 284);
    i0.ɵɵtext(6, "Student Overall Feedback");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(7, "div", 170)(8, "div", 285)(9, "div", 94);
    i0.ɵɵtemplate(10, CorrectionPageComponent_div_19_div_1_div_4_div_3_div_10_Template, 2, 1, "div", 172)(11, CorrectionPageComponent_div_19_div_1_div_4_div_3_div_11_Template, 2, 0, "div", 173);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 286)(13, "div", 287)(14, "div", 288)(15, "label", 289);
    i0.ɵɵtext(16, "Total Points");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div")(18, "input", 290);
    i0.ɵɵlistener("keypress", function CorrectionPageComponent_div_19_div_1_div_4_div_3_Template_input_keypress_18_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CorrectionPageComponent_div_19_div_1_div_4_div_3_Template_input_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.totalPoints, $event) || (ctx_r1.totalPoints = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(19, "div", 291)(20, "div", 287)(21, "div", 288)(22, "label", 289);
    i0.ɵɵtext(23, "Obtained Points");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div")(25, "input", 292);
    i0.ɵɵlistener("keypress", function CorrectionPageComponent_div_19_div_1_div_4_div_3_Template_input_keypress_25_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CorrectionPageComponent_div_19_div_1_div_4_div_3_Template_input_ngModelChange_25_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.studentPoints, $event) || (ctx_r1.studentPoints = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(26, "div", 291)(27, "div", 287)(28, "div", 288)(29, "label", 289);
    i0.ɵɵtext(30, "Feedback");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div")(32, "textarea", 293);
    i0.ɵɵtwoWayListener("ngModelChange", function CorrectionPageComponent_div_19_div_1_div_4_div_3_Template_textarea_ngModelChange_32_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.totalFeedBack, $event) || (ctx_r1.totalFeedBack = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(33, "div", 181)(34, "button", 182);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_19_div_1_div_4_div_3_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r62); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.saveAnswer(1, 4, true)); });
    i0.ɵɵtext(35, "Submit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "button", 183);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_19_div_1_div_4_div_3_Template_button_click_36_listener() { i0.ɵɵrestoreView(_r62); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.saveAnswer(2, 4, true)); });
    i0.ɵɵtext(37, "Save");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngIf", ctx_r1.totalStudentFeedBack != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.totalStudentFeedBack == "");
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.totalPoints);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.studentPoints);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.totalFeedBack);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.scoreStatus == 3 || ctx_r1.scoreStatus == 2);
} }
function CorrectionPageComponent_div_19_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 277);
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_1_div_4_div_1_Template, 2, 0, "div", 159)(2, CorrectionPageComponent_div_19_div_1_div_4_div_2_Template, 3, 5, "div", 11)(3, CorrectionPageComponent_div_19_div_1_div_4_div_3_Template, 38, 6, "div", 278);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.functionCalled || ctx_r1.showingType == "2" && ctx_r1.blink == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.functionCalled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showPDFAnswer);
} }
function CorrectionPageComponent_div_19_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-annotation", 294);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.showingType != "3" ? 4 : 6, " px-1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("getAnnotate", ctx_r1.previewInfo)("pdfPath", ctx_r1.anserPdfTemplate)("toolHide", true);
} }
function CorrectionPageComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 157)(1, "div")(2, "div");
    i0.ɵɵtemplate(3, CorrectionPageComponent_div_19_div_1_div_3_Template, 40, 20, "div", 20)(4, CorrectionPageComponent_div_19_div_1_div_4_Template, 4, 3, "div", 158);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, CorrectionPageComponent_div_19_div_1_div_5_Template, 2, 6, "div", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.showPDFAnswer && ctx_r1.showingType != "3" ? 8 : ctx_r1.showPDFAnswer && ctx_r1.showingType == "3" ? 6 : 12, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.pageType == 2 && ctx_r1.totalAnsSample != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pageType == 2 && ctx_r1.totalAnsSample == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.correctAnswerKeyPath == null ? null : ctx_r1.correctAnswerKeyPath.length) != 0 && ctx_r1.showPDFAnswer);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_2_i_5_Template(rf, ctx) { if (rf & 1) {
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 326);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_2_i_5_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r65); const ctx_r65 = i0.ɵɵnextContext(2); const item_r67 = ctx_r65.$implicit; const i_r68 = ctx_r65.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.givePoints("true", item_r67, "scratch", i_r68, 0)); });
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_2_i_6_Template(rf, ctx) { if (rf & 1) {
    const _r69 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 327);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_2_i_6_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r69); const ctx_r65 = i0.ɵɵnextContext(2); const item_r67 = ctx_r65.$implicit; const i_r68 = ctx_r65.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.givePoints("false", item_r67, "scratch", i_r68, 0)); });
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_2_span_8_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 330)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elapsed_r70 = ctx.ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(elapsed_r70.minutes);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_2_span_8_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 330)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elapsed_r71 = ctx.ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(elapsed_r71.seconds);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_2_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_2_span_8_span_1_Template, 3, 1, "span", 328);
    i0.ɵɵelementStart(2, "span", 329);
    i0.ɵɵtext(3, ":");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_2_span_8_span_4_Template, 3, 1, "span", 328);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.getElapsedTime(item_r67));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.getElapsedTime(item_r67));
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_2_span_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 237);
    i0.ɵɵtext(1, "Invalid Points");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 317)(1, "div", 318)(2, "p", 319);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 320);
    i0.ɵɵtemplate(5, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_2_i_5_Template, 1, 0, "i", 321)(6, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_2_i_6_Template, 1, 0, "i", 322);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 323);
    i0.ɵɵtemplate(8, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_2_span_8_Template, 5, 2, "span", 150);
    i0.ɵɵelementStart(9, "span", 324);
    i0.ɵɵtext(10, "Points: ");
    i0.ɵɵelementStart(11, "input", 325);
    i0.ɵɵlistener("input", function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_2_Template_input_input_11_listener($event) { i0.ɵɵrestoreView(_r64); const ctx_r65 = i0.ɵɵnextContext(); const item_r67 = ctx_r65.$implicit; const i_r68 = ctx_r65.index; const ctx_r1 = i0.ɵɵnextContext(4); ctx_r1.getPoints($event, i_r68, 0, "scratch"); return i0.ɵɵresetView(ctx_r1.markValidation($event, item_r67.points, i_r68, 0, "scratch")); })("keypress", function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_2_Template_input_keypress_11_listener($event) { i0.ɵɵrestoreView(_r64); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span", 216);
    i0.ɵɵtext(13, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span", 217);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(16, "br");
    i0.ɵɵtemplate(17, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_2_span_17_Template, 2, 0, "span", 218);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r65 = i0.ɵɵnextContext();
    const item_r67 = ctx_r65.$implicit;
    const i_r68 = ctx_r65.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i_r68 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r67.points != item_r67.given_points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.points == item_r67.given_points);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isSingleQnsWithFeedbackType);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", item_r67.given_points);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r67.points);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r67.maxValErr);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 333);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, item_r67.question), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 333);
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("innerHTML", ctx_r1.convertMarkdownToHtml(item_r67.question, "single"), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 333);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, item_r67.subQuestions[0] == null ? null : item_r67.subQuestions[0].passage), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 331);
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_4_span_1_Template, 2, 3, "span", 332)(2, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_4_span_2_Template, 1, 1, "span", 332)(3, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_4_span_3_Template, 2, 3, "span", 332);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.question_type_id != 24 && item_r67.question_type_id != 55);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.question_type_id == 55);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.question_type_id == 24 && (item_r67.subQuestions[0] == null ? null : item_r67.subQuestions[0].passage) && (item_r67.subQuestions[0] == null ? null : item_r67.subQuestions[0].passage) != "");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_5_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 256);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_5_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 257);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_5_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 337)(1, "button", 338);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 339);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r72 = ctx.$implicit;
    const k_r73 = ctx.index;
    const item_r67 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(5, _c15, (option_r72 == null ? null : option_r72.isSelected) === "" ? false : (option_r72 == null ? null : option_r72.isSelected) == k_r73 ? item_r67.given_points == item_r67.points : false, (option_r72 == null ? null : option_r72.isSelected) === "" ? false : (option_r72 == null ? null : option_r72.isSelected) == k_r73 ? item_r67.given_points != item_r67.points : false));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((k_r73 + 1 + 9).toString(36).toUpperCase());
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 3, option_r72.options), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_5_div_12_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 343);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r74 = i0.ɵɵnextContext().index;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((k_r74 + 1 + 9).toString(36).toUpperCase());
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_5_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 344);
    i0.ɵɵelement(1, "span", 339);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r74 = i0.ɵɵnextContext().index;
    const item_r67 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, item_r67.options[k_r74].options), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_5_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 340);
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_5_div_12_button_1_Template, 2, 1, "button", 341)(2, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_5_div_12_div_2_Template, 3, 3, "div", 342);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r75 = ctx.$implicit;
    i0.ɵɵclassMap(option_r75.correctAnswer != "" ? "mx-2 p-2 mb-2 overflow-auto row" : "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c16, option_r75.correctAnswer != ""));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r75.correctAnswer != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r75.correctAnswer != "");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 168)(1, "div", 334)(2, "label", 120)(3, "b");
    i0.ɵɵtext(4, "Student Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_5_i_5_Template, 1, 0, "i", 252)(6, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_5_i_6_Template, 1, 0, "i", 253);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_5_div_7_Template, 5, 8, "div", 335);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 334)(9, "label", 267)(10, "b");
    i0.ɵɵtext(11, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_5_div_12_Template, 3, 8, "div", 336);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r67.given_points == item_r67.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.given_points != item_r67.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r67.student_answer);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", item_r67.answer);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 256);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 257);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_th_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 339);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r76 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r76), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_tr_14_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 350);
} if (rf & 2) {
    const k_r77 = i0.ɵɵnextContext().index;
    const j_r78 = i0.ɵɵnextContext().index;
    const i_r68 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate2("id", "", k_r77, "chooseSinglett", j_r78, "");
    i0.ɵɵpropertyInterpolate2("name", "", i_r68, "choosesingle", j_r78, "");
    i0.ɵɵproperty("checked", (ctx_r1.totalAns[i_r68].student_answer[j_r78] == null ? null : ctx_r1.totalAns[i_r68].student_answer[j_r78].isSelected) == "" ? false : (ctx_r1.totalAns[i_r68].student_answer[j_r78] == null ? null : ctx_r1.totalAns[i_r68].student_answer[j_r78].isSelected) == k_r77.toString());
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_tr_14_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 351);
} if (rf & 2) {
    const k_r77 = i0.ɵɵnextContext().index;
    const j_r78 = i0.ɵɵnextContext().index;
    const i_r68 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate2("id", "", k_r77, "chooseMultitt", j_r78, "");
    i0.ɵɵproperty("checked", ctx_r1.splitMultiChoose(ctx_r1.totalAns[i_r68].student_answer[j_r78] == null ? null : ctx_r1.totalAns[i_r68].student_answer[j_r78].isSelected, k_r77));
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_tr_14_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_tr_14_td_3_input_1_Template, 1, 7, "input", 348)(2, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_tr_14_td_3_input_2_Template, 1, 4, "input", 349);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.question_type_id == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.question_type_id == "7");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_tr_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 339);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_tr_14_td_3_Template, 3, 2, "td", 203);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r79 = ctx.$implicit;
    const item_r67 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, list_r79.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r67.answer);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_th_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 339);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r80 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r80), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_tr_26_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 354);
} if (rf & 2) {
    const k_r81 = i0.ɵɵnextContext().index;
    const j_r82 = i0.ɵɵnextContext().index;
    const i_r68 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate2("name", "", i_r68, "choosesingle", j_r82, "corect");
    i0.ɵɵproperty("checked", ctx_r1.totalAns[i_r68].heading_option[j_r82].correctActive === k_r81);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_tr_26_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 355);
} if (rf & 2) {
    const k_r81 = i0.ɵɵnextContext().index;
    const j_r82 = i0.ɵɵnextContext().index;
    const i_r68 = i0.ɵɵnextContext(2).index;
    i0.ɵɵpropertyInterpolate3("id", "chooseMultipass", i_r68, "", j_r82, "", k_r81, "");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_tr_26_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_tr_26_td_3_input_1_Template, 1, 4, "input", 352)(2, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_tr_26_td_3_input_2_Template, 1, 4, "input", 353);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.question_type_id == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.question_type_id == "7");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_tr_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 339);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_tr_26_td_3_Template, 3, 2, "td", 203);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r83 = ctx.$implicit;
    const item_r67 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, list_r83.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r67.answer);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 174)(1, "div", 345)(2, "label", 120)(3, "b");
    i0.ɵɵtext(4, "Student Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_i_5_Template, 1, 0, "i", 252)(6, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_i_6_Template, 1, 0, "i", 253);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "table", 346)(8, "thead")(9, "tr")(10, "th");
    i0.ɵɵtext(11, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_th_12_Template, 2, 3, "th", 347);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "tbody");
    i0.ɵɵtemplate(14, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_tr_14_Template, 4, 4, "tr", 203);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "div", 345)(16, "label", 267)(17, "b");
    i0.ɵɵtext(18, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "table", 346)(20, "thead")(21, "tr")(22, "th");
    i0.ɵɵtext(23, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(24, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_th_24_Template, 2, 3, "th", 347);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "tbody");
    i0.ɵɵtemplate(26, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_tr_26_Template, 4, 4, "tr", 203);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r67.given_points == item_r67.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.given_points != item_r67.points);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", item_r67.answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r67.student_answer);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngForOf", item_r67.answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r67.student_answer);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_7_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 256);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_7_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 257);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_7_div_7_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 363);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const option_r84 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, option_r84.listOption), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_7_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 358)(1, "div", 240)(2, "h6", 25);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 359);
    i0.ɵɵelement(5, "div", 360);
    i0.ɵɵelementStart(6, "div", 361);
    i0.ɵɵtemplate(7, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_7_div_7_span_7_Template, 2, 3, "span", 362);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ans_r85 = ctx.$implicit;
    const j_r86 = ctx.index;
    const ctx_r65 = i0.ɵɵnextContext(2);
    const item_r67 = ctx_r65.$implicit;
    const i_r68 = ctx_r65.index;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", item_r67.given_points == item_r67.points ? "question-no-small-correct" : "question-no-small-wrong");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(j_r86 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("id", "", i_r68, "dropdownStudent", j_r86, "");
    i0.ɵɵproperty("ngClass", item_r67.given_points == item_r67.points ? "dropdown-border-correct" : "dropdown-border-wrong");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ans_r85.options);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_7_div_12_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 363);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const option_r87 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, option_r87.listOption), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_7_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 358)(1, "div", 364)(2, "h6", 25);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 359);
    i0.ɵɵelement(5, "div", 365);
    i0.ɵɵelementStart(6, "div", 361);
    i0.ɵɵtemplate(7, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_7_div_12_span_7_Template, 2, 3, "span", 362);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const answer_r88 = ctx.$implicit;
    const j_r89 = ctx.index;
    const i_r68 = i0.ɵɵnextContext(2).index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(j_r89 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("id", "", i_r68, "dropdownCorrect", j_r89, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", answer_r88.options);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 174)(1, "div", 356)(2, "label", 120)(3, "b");
    i0.ɵɵtext(4, "Student Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_7_i_5_Template, 1, 0, "i", 252)(6, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_7_i_6_Template, 1, 0, "i", 253);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_7_div_7_Template, 8, 7, "div", 357);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 356)(9, "label", 267)(10, "b");
    i0.ɵɵtext(11, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_7_div_12_Template, 8, 5, "div", 357);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r67.given_points == item_r67.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.given_points != item_r67.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r67.student_answer);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", item_r67.answer);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_8_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 256);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_8_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 257);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_8_div_7_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 370);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const item_r90 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 2, item_r90 == null ? null : item_r90.isSelected), i0.ɵɵsanitizeHtml)("ngClass", item_r90.given_points == item_r90.points ? "form-span-correct" : "form-span-wrong");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_8_div_7_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 371);
    i0.ɵɵtext(1, "Student Not Answered");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r90 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", item_r90.given_points == item_r90.points ? "form-span-correct" : "form-span-wrong");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_8_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 367)(1, "div", 364)(2, "h6", 25);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_8_div_7_span_4_Template, 2, 4, "span", 368)(5, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_8_div_7_span_5_Template, 2, 1, "span", 369);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r90 = ctx.$implicit;
    const j_r91 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(j_r91 + 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r90 == null ? null : item_r90.isSelected) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r90 == null ? null : item_r90.isSelected) == "");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_8_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 367)(1, "div", 364)(2, "h6", 25);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(4, "span", 372);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ans_r92 = ctx.$implicit;
    const j_r93 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(j_r93 + 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, ans_r92.options[0].value), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 174)(1, "div", 356)(2, "label", 120)(3, "b");
    i0.ɵɵtext(4, "Student Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_8_i_5_Template, 1, 0, "i", 252)(6, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_8_i_6_Template, 1, 0, "i", 253);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_8_div_7_Template, 6, 3, "div", 366);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 356)(9, "label", 267)(10, "b");
    i0.ɵɵtext(11, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_8_div_12_Template, 6, 4, "div", 366);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r67.given_points == item_r67.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.given_points != item_r67.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r67.student_answer);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", item_r67.answer);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_9_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 256);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_9_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 257);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_9_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 375)(1, "div", 376)(2, "span", 377);
    i0.ɵɵelement(3, "img", 378);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(4, "div", 379);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r94 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 1, list_r94.options), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_9_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 375)(1, "div", 376)(2, "span", 377);
    i0.ɵɵelement(3, "img", 378);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(4, "div", 379);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r95 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 1, list_r95.correctAnswer), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 174)(1, "div", 373)(2, "label", 120)(3, "b");
    i0.ɵɵtext(4, "Student Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_9_i_5_Template, 1, 0, "i", 252)(6, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_9_i_6_Template, 1, 0, "i", 253);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_9_div_7_Template, 6, 3, "div", 374);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 373)(9, "label", 267)(10, "b");
    i0.ɵɵtext(11, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_9_div_12_Template, 6, 3, "div", 374);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r67.given_points == item_r67.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.given_points != item_r67.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r67.student_answer);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", item_r67.answer);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_10_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 256);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_10_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 257);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_10_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 383);
    i0.ɵɵelement(1, "span", 333);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, item_r67.student_answer[0] == null ? null : item_r67.student_answer[0].isSelected), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_10_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 384)(1, "span");
    i0.ɵɵtext(2, "Student Not Answered");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", item_r67.given_points == item_r67.points ? "form-span-correct" : "form-span-wrong");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_10_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "label", 267)(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 385);
    i0.ɵɵelement(5, "div", 333);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const answer_r96 = ctx.$implicit;
    const i_r97 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Correct Answer ", i_r97 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 2, answer_r96.correctAnswer), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 380)(1, "div", 356)(2, "label", 120)(3, "b");
    i0.ɵɵtext(4, "Student Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_10_i_5_Template, 1, 0, "i", 252)(6, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_10_i_6_Template, 1, 0, "i", 253);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_10_div_7_Template, 3, 3, "div", 381)(8, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_10_div_8_Template, 3, 1, "div", 382);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 356);
    i0.ɵɵtemplate(10, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_10_div_10_Template, 7, 4, "div", 203);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r67.given_points == item_r67.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.given_points != item_r67.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r67.student_answer[0] == null ? null : item_r67.student_answer[0].isSelected) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r67.student_answer[0] == null ? null : item_r67.student_answer[0].isSelected) == "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r67.answer);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_11_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 256);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_11_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 257);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_11_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 388);
    i0.ɵɵelement(1, "span", 333);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", item_r67.given_points == item_r67.points ? "form-span-correct" : "form-span-wrong");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, item_r67.student_answer[0] == null ? null : item_r67.student_answer[0].isSelected), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_11_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 384)(1, "span", 389);
    i0.ɵɵtext(2, "Student Not Answered");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", item_r67.given_points == item_r67.points ? "form-span-correct" : "form-span-wrong");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 380)(1, "div", 356)(2, "label", 120)(3, "b");
    i0.ɵɵtext(4, "Student Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_11_i_5_Template, 1, 0, "i", 252)(6, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_11_i_6_Template, 1, 0, "i", 253);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_11_div_7_Template, 3, 4, "div", 386)(8, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_11_div_8_Template, 3, 1, "div", 382);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 356)(10, "label", 267)(11, "b");
    i0.ɵɵtext(12, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 387);
    i0.ɵɵelement(14, "span", 333);
    i0.ɵɵpipe(15, "sanitizeHtml");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r67.given_points == item_r67.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.given_points != item_r67.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r67.student_answer[0] == null ? null : item_r67.student_answer[0].isSelected) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r67.student_answer[0] == null ? null : item_r67.student_answer[0].isSelected) == "");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(15, 5, item_r67.answer[0] == null ? null : item_r67.answer[0].correctAnswer), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_12_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " - Current Version");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_12_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" - Version ", ctx_r1.selectedFeedBackIndex, "");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_12_div_9_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 402)(1, "div")(2, "h5", 403);
    i0.ɵɵtext(3);
    i0.ɵɵelementStart(4, "span", 404);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "span", 405);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const feedback_r99 = ctx.item;
    const index_r100 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c17, ctx_r1.selectedFeedBackIndex === ctx_r1.previousFeedBack.length - index_r100));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Version ", ctx_r1.previousFeedBack.length - index_r100, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", feedback_r99 == null ? null : feedback_r99.student_score, " / ", feedback_r99 == null ? null : feedback_r99.total_score, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(8, _c18, ctx_r1.getFeedbackLabel(feedback_r99).label === "Exceptional", ctx_r1.getFeedbackLabel(feedback_r99).label === "Good", ctx_r1.getFeedbackLabel(feedback_r99).label === "Improve"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getFeedbackLabel(feedback_r99).label, "");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_12_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r98 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 399)(1, "label", 400);
    i0.ɵɵtext(2, "Select Version");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ng-select", 401);
    i0.ɵɵlistener("change", function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_12_div_9_Template_ng_select_change_3_listener($event) { i0.ɵɵrestoreView(_r98); const ctx_r1 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r1.feedbackSelected($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_12_div_9_Template_ng_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r98); const ctx_r1 = i0.ɵɵnextContext(6); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedVersion, $event) || (ctx_r1.selectedVersion = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(4, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_12_div_9_ng_template_4_Template, 8, 12, "ng-template", 90);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("items", ctx_r1.previousFeedBack)("clearable", false);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedVersion);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_12_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r101 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 406)(1, "button", 407);
    i0.ɵɵelement(2, "i", 408);
    i0.ɵɵtext(3, "Print");
    i0.ɵɵelement(4, "i", 409);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 410)(6, "a", 411);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_12_div_10_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r101); const ctx_r1 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r1.common.printReport("Without")); });
    i0.ɵɵelement(7, "img", 412);
    i0.ɵɵtext(8, "Without Feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "a", 411);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_12_div_10_Template_a_click_9_listener() { i0.ɵɵrestoreView(_r101); const ctx_r1 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r1.common.printReport()); });
    i0.ɵɵelement(10, "img", 413);
    i0.ɵɵtext(11, "With Feedback");
    i0.ɵɵelementEnd()()();
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_12_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 414);
    i0.ɵɵelement(1, "span", 333);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.convertedText && ctx_r1.convertedText != "" ? ctx_r1.convertMarkdownToHtml(ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.student_answer) : ctx_r1.convertMarkdownToHtml(item_r67.student_answer[0] == null ? null : item_r67.student_answer[0].isSelected, "single"), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_12_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 415)(1, "span", 389);
    i0.ɵɵtext(2, "Student Not Answered");
    i0.ɵɵelementEnd()();
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 390)(1, "div", 391)(2, "div", 8)(3, "h5", 392);
    i0.ɵɵtext(4, "Student Answer ");
    i0.ɵɵtemplate(5, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_12_span_5_Template, 2, 0, "span", 150)(6, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_12_span_6_Template, 2, 1, "span", 150);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 393)(8, "div", 394);
    i0.ɵɵtemplate(9, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_12_div_9_Template, 5, 3, "div", 395)(10, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_12_div_10_Template, 12, 0, "div", 396);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(11, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_12_div_11_Template, 2, 1, "div", 397)(12, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_12_div_12_Template, 3, 0, "div", 398);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.selectedFeedBackIndex == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedFeedBackIndex != "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.previousFeedBack.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedFeedBackIndex == ctx_r1.previousFeedBack.length && (ctx_r1.studentAnswer == null ? null : ctx_r1.studentAnswer.status) == "3" && (ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.version) != "V1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r67.student_answer[0] == null ? null : item_r67.student_answer[0].isSelected) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r67.student_answer[0] == null ? null : item_r67.student_answer[0].isSelected) == "");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_13_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 256);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_13_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 257);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 174)(1, "div", 356)(2, "label", 120)(3, "b");
    i0.ɵɵtext(4, "Student Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_13_i_5_Template, 1, 0, "i", 252)(6, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_13_i_6_Template, 1, 0, "i", 253);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 388);
    i0.ɵɵelement(8, "span", 333);
    i0.ɵɵpipe(9, "sanitizeHtml");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 356)(11, "label", 267)(12, "b");
    i0.ɵɵtext(13, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 416);
    i0.ɵɵelement(15, "span", 333);
    i0.ɵɵpipe(16, "sanitizeHtml");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r67.given_points == item_r67.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.given_points != item_r67.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", item_r67.given_points == item_r67.points ? "form-span-correct" : "form-span-wrong");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(9, 5, item_r67.student_answer[0] == null ? null : item_r67.student_answer[0].isSelected), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(16, 7, item_r67.answer[0].correctAnswer), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_14_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 256);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_14_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 257);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_14_app_graph_component_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-graph-component", 268);
} if (rf & 2) {
    const ctx_r65 = i0.ɵɵnextContext(2);
    const item_r67 = ctx_r65.$implicit;
    const i_r68 = ctx_r65.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("editMode", false)("editPatchValue", ctx_r1.parseVal(item_r67.student_answer[0].correctAnswer))("graphId", "previewo" + i_r68)("questionType", item_r67.question_type_id);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_14_app_graph_component_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-graph-component", 268);
} if (rf & 2) {
    const ctx_r65 = i0.ɵɵnextContext(2);
    const item_r67 = ctx_r65.$implicit;
    const i_r68 = ctx_r65.index;
    i0.ɵɵproperty("editMode", false)("editPatchValue", false)("graphId", "previewo" + i_r68)("questionType", item_r67.question_type_id);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_14_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 418);
    i0.ɵɵelement(1, "h4", 271);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, item_r67.student_editor_answer), i0.ɵɵsanitizeHtml)("ngClass", item_r67.given_points == item_r67.points ? "form-span-correct" : "form-span-wrong");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_14_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 418);
    i0.ɵɵelement(1, "h4", 272);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, item_r67.question_editor_answer), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 174)(1, "div", 356)(2, "label", 120)(3, "b");
    i0.ɵɵtext(4, "Student Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_14_i_5_Template, 1, 0, "i", 252)(6, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_14_i_6_Template, 1, 0, "i", 253);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 358);
    i0.ɵɵtemplate(8, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_14_app_graph_component_8_Template, 1, 4, "app-graph-component", 269)(9, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_14_app_graph_component_9_Template, 1, 4, "app-graph-component", 269);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_14_div_10_Template, 3, 4, "div", 417);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 356)(12, "label", 267)(13, "b");
    i0.ɵɵtext(14, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 358);
    i0.ɵɵelement(16, "app-graph-component", 268);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(17, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_14_div_17_Template, 3, 3, "div", 417);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r65 = i0.ɵɵnextContext();
    const item_r67 = ctx_r65.$implicit;
    const i_r68 = ctx_r65.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r67.given_points == item_r67.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.given_points != item_r67.points);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (item_r67.student_answer == null ? null : item_r67.student_answer.length) == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r67.student_answer == null ? null : item_r67.student_answer.length) == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.student_editor_answer != "");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("editMode", false)("editPatchValue", ctx_r1.parseVal(item_r67.answer[0].correctAnswer))("graphId", "preview" + i_r68)("questionType", item_r67.question_type_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.question_editor_answer != "");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_15_p_26_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_15_p_26_span_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, ", ");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_15_p_26_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_15_p_26_span_2_span_2_Template, 2, 0, "span", 150);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const skill_r102 = ctx.$implicit;
    const last_r103 = ctx.last;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(skill_r102);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !last_r103);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_15_p_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_15_p_26_span_1_Template, 2, 0, "span", 150)(2, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_15_p_26_span_2_Template, 3, 2, "span", 203);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r67 == null ? null : item_r67.skill == null ? null : item_r67.skill.length) == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r67 == null ? null : item_r67.skill);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_15_p_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 419)(1, "div", 420)(2, "div", 104)(3, "div", 8)(4, "div", 421)(5, "label", 422)(6, "b");
    i0.ɵɵtext(7, "Subject:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 421)(11, "label", 422)(12, "b");
    i0.ɵɵtext(13, "Topic:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "p");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 421)(17, "label", 422)(18, "b");
    i0.ɵɵtext(19, "Sub Topic:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "p");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 421)(23, "label", 422)(24, "b");
    i0.ɵɵtext(25, "Skill:");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(26, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_15_p_26_Template, 3, 2, "p", 150)(27, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_15_p_27_Template, 2, 0, "p", 150);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 421)(29, "label", 422)(30, "b");
    i0.ɵɵtext(31, "Standard:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "p");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 421)(35, "label", 422)(36, "b");
    i0.ɵɵtext(37, "Difficulty:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "p");
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "div", 98)(41, "label", 422)(42, "b");
    i0.ɵɵtext(43, "Points:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "p");
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(46, "div", 98)(47, "label", 422)(48, "b");
    i0.ɵɵtext(49, "Predicted Solving Time:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(50, "p");
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate((item_r67 == null ? null : item_r67.subject_name) ? item_r67 == null ? null : item_r67.subject_name : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r67 == null ? null : item_r67.question_topic) ? item_r67 == null ? null : item_r67.question_topic : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r67 == null ? null : item_r67.sub_topic) ? item_r67 == null ? null : item_r67.sub_topic : "-");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r67 == null ? null : item_r67.skill);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !item_r67.skill);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r67 == null ? null : item_r67.question_standard_name) ? item_r67 == null ? null : item_r67.question_standard_name : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(item_r67.level == "1" ? "Easy" : item_r67.level == "2" ? "Medium" : "Difficult");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r67 == null ? null : item_r67.points) ? item_r67 == null ? null : item_r67.points : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r67 == null ? null : item_r67.predicted_solving_time) ? item_r67 == null ? null : item_r67.predicted_solving_time : "-");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    const _r105 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 233);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_i_7_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r105); const ctx_r105 = i0.ɵɵnextContext(); const item_r107 = ctx_r105.$implicit; const j_r108 = ctx_r105.index; const i_r68 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.givePoints("true", item_r107, "passage", i_r68, j_r108)); });
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_i_8_Template(rf, ctx) { if (rf & 1) {
    const _r109 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 234);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_i_8_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r109); const ctx_r105 = i0.ɵɵnextContext(); const item_r107 = ctx_r105.$implicit; const j_r108 = ctx_r105.index; const i_r68 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.givePoints("false", item_r107, "passage", i_r68, j_r108)); });
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_h4_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 330)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elapsed_r110 = ctx.ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(elapsed_r110.minutes);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_h4_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 330)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elapsed_r111 = ctx.ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(elapsed_r111.seconds);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_span_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 237);
    i0.ɵɵtext(1, "Invalid Points");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_31_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 256);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_31_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 257);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_31_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 337)(1, "button", 338);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 339);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r113 = ctx.$implicit;
    const k_r114 = ctx.index;
    const item_r107 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(5, _c15, (option_r113 == null ? null : option_r113.isSelected) === "" ? false : (option_r113 == null ? null : option_r113.isSelected) == k_r114 ? item_r107.given_points == item_r107.points : false, (option_r113 == null ? null : option_r113.isSelected) === "" ? false : (option_r113 == null ? null : option_r113.isSelected) == k_r114 ? item_r107.given_points != item_r107.points : false));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((k_r114 + 1 + 9).toString(36).toUpperCase());
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 3, option_r113.options), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_31_div_12_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 343);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r115 = i0.ɵɵnextContext().index;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((k_r115 + 1 + 9).toString(36).toUpperCase());
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_31_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 344);
    i0.ɵɵelement(1, "span", 339);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r115 = i0.ɵɵnextContext().index;
    const item_r107 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, item_r107.options[k_r115].options), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_31_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 340);
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_31_div_12_button_1_Template, 2, 1, "button", 341)(2, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_31_div_12_div_2_Template, 3, 3, "div", 342);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r116 = ctx.$implicit;
    i0.ɵɵclassMap(option_r116.correctAnswer != "" ? "mx-2 p-2 mb-2 overflow-auto row" : "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c16, option_r116.correctAnswer != ""));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r116.correctAnswer != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r116.correctAnswer != "");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "div", 334)(2, "label", 120)(3, "b");
    i0.ɵɵtext(4, "Student Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_31_i_5_Template, 1, 0, "i", 252)(6, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_31_i_6_Template, 1, 0, "i", 253);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_31_div_7_Template, 5, 8, "div", 335);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 334)(9, "label", 267)(10, "b");
    i0.ɵɵtext(11, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_31_div_12_Template, 3, 8, "div", 336);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r107 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r107.given_points == item_r107.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r107.given_points != item_r107.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r107.student_answer);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", item_r107.answer);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 256);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 257);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_th_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 339);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r117 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r117), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_tr_14_td_2_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 350);
} if (rf & 2) {
    const k_r118 = i0.ɵɵnextContext().index;
    const ctx_r118 = i0.ɵɵnextContext();
    const list_r120 = ctx_r118.$implicit;
    const l_r121 = ctx_r118.index;
    const j_r108 = i0.ɵɵnextContext(2).index;
    const i_r68 = i0.ɵɵnextContext(2).index;
    i0.ɵɵpropertyInterpolate2("id", "", k_r118, "chooseSinglett1", j_r108, "");
    i0.ɵɵpropertyInterpolate4("name", "", i_r68, "passage", j_r108, "cho", k_r118, "ose", l_r121, "ans");
    i0.ɵɵproperty("checked", (list_r120 == null ? null : list_r120.isSelected) === "" ? false : (list_r120 == null ? null : list_r120.isSelected) == k_r118.toString());
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_tr_14_td_2_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 445);
} if (rf & 2) {
    const k_r118 = i0.ɵɵnextContext().index;
    const l_r121 = i0.ɵɵnextContext().index;
    const j_r108 = i0.ɵɵnextContext(2).index;
    const i_r68 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("checked", ctx_r1.splitMultiChoose(ctx_r1.totalAns[i_r68].subQuestions[j_r108].student_answer[l_r121] == null ? null : ctx_r1.totalAns[i_r68].subQuestions[j_r108].student_answer[l_r121].isSelected, k_r118));
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_tr_14_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_tr_14_td_2_input_1_Template, 1, 9, "input", 348)(2, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_tr_14_td_2_input_2_Template, 1, 1, "input", 444);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r107 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r107.question_type_id == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r107.question_type_id == "7");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_tr_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 339);
    i0.ɵɵtemplate(2, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_tr_14_td_2_Template, 3, 2, "td", 203);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r120 = ctx.$implicit;
    const item_r107 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", list_r120.options, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r107.answer);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_th_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 339);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r122 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r122), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_tr_26_td_2_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 354);
} if (rf & 2) {
    const l_r123 = i0.ɵɵnextContext().index;
    const k_r124 = i0.ɵɵnextContext().index;
    const ctx_r105 = i0.ɵɵnextContext(2);
    const item_r107 = ctx_r105.$implicit;
    const j_r108 = ctx_r105.index;
    const i_r68 = i0.ɵɵnextContext(2).index;
    i0.ɵɵpropertyInterpolate4("name", "", i_r68, "passage", j_r108, "cho", k_r124, "ose", l_r123, "");
    i0.ɵɵproperty("checked", item_r107.heading_option[k_r124].correctActive == l_r123);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_tr_26_td_2_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 355);
} if (rf & 2) {
    const l_r123 = i0.ɵɵnextContext().index;
    const k_r124 = i0.ɵɵnextContext().index;
    const j_r108 = i0.ɵɵnextContext(2).index;
    const i_r68 = i0.ɵɵnextContext(2).index;
    i0.ɵɵpropertyInterpolate4("id", "chooseMultipass1", i_r68, "", j_r108, "", k_r124, "", l_r123, "");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_tr_26_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_tr_26_td_2_input_1_Template, 1, 6, "input", 352)(2, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_tr_26_td_2_input_2_Template, 1, 5, "input", 353);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r107 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r107.question_type_id == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r107.question_type_id == "7");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_tr_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 339);
    i0.ɵɵtemplate(2, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_tr_26_td_2_Template, 3, 2, "td", 203);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r125 = ctx.$implicit;
    const item_r107 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", list_r125.options, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r107.answer);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "div", 345)(2, "label", 120)(3, "b");
    i0.ɵɵtext(4, "Student Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_i_5_Template, 1, 0, "i", 252)(6, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_i_6_Template, 1, 0, "i", 253);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "table", 346)(8, "thead")(9, "tr")(10, "th");
    i0.ɵɵtext(11, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_th_12_Template, 2, 3, "th", 347);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "tbody");
    i0.ɵɵtemplate(14, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_tr_14_Template, 3, 2, "tr", 203);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "div", 345)(16, "label", 267)(17, "b");
    i0.ɵɵtext(18, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "table", 346)(20, "thead")(21, "tr")(22, "th");
    i0.ɵɵtext(23, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(24, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_th_24_Template, 2, 3, "th", 347);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "tbody");
    i0.ɵɵtemplate(26, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_tr_26_Template, 3, 2, "tr", 203);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r107 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r107.given_points == item_r107.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r107.given_points != item_r107.points);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", item_r107.answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r107.student_answer);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngForOf", item_r107.answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r107.student_answer);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_33_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 256);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_33_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 257);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_33_div_7_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 370);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const ans_r126 = i0.ɵɵnextContext().$implicit;
    const item_r107 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 2, ans_r126 == null ? null : ans_r126.isSelected), i0.ɵɵsanitizeHtml)("ngClass", item_r107.given_points == item_r107.points ? "form-span-correct" : "form-span-wrong");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_33_div_7_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 371);
    i0.ɵɵtext(1, "Student Not Answered");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r107 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngClass", item_r107.given_points == item_r107.points ? "form-span-correct" : "form-span-wrong");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_33_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 367)(1, "div", 240)(2, "h6", 25);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_33_div_7_span_4_Template, 2, 4, "span", 368)(5, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_33_div_7_span_5_Template, 2, 1, "span", 369);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ans_r126 = ctx.$implicit;
    const k_r127 = ctx.index;
    const item_r107 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", item_r107.given_points == item_r107.points ? "question-no-small-correct" : "question-no-small-wrong");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(k_r127 + 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ans_r126 == null ? null : ans_r126.isSelected) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ans_r126 == null ? null : ans_r126.isSelected) == "");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_33_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 367)(1, "div", 364)(2, "h6", 25);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(4, "span", 372);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ans_r128 = ctx.$implicit;
    const k_r129 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(k_r129 + 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, ans_r128.options[0].value), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 446)(1, "div", 447)(2, "label", 120)(3, "b");
    i0.ɵɵtext(4, "Student Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_33_i_5_Template, 1, 0, "i", 252)(6, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_33_i_6_Template, 1, 0, "i", 253);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_33_div_7_Template, 6, 4, "div", 366);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 447)(9, "label", 267)(10, "b");
    i0.ɵɵtext(11, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_33_div_12_Template, 6, 4, "div", 366);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r107 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r107.given_points == item_r107.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r107.given_points != item_r107.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r107.student_answer);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", item_r107.answer);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_34_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 256);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_34_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 257);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_34_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 388);
    i0.ɵɵelement(1, "span", 333);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r107 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", item_r107.given_points == item_r107.points ? "form-span-correct" : "form-span-wrong");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, item_r107.student_answer[0] == null ? null : item_r107.student_answer[0].isSelected), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_34_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 384)(1, "span");
    i0.ɵɵtext(2, "Student Not Answered");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r107 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", item_r107.given_points == item_r107.points ? "form-span-correct" : "form-span-wrong");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 448)(1, "div", 356)(2, "label", 120)(3, "b");
    i0.ɵɵtext(4, "Student Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_34_i_5_Template, 1, 0, "i", 252)(6, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_34_i_6_Template, 1, 0, "i", 253);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_34_div_7_Template, 3, 4, "div", 386)(8, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_34_div_8_Template, 3, 1, "div", 382);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 356)(10, "label", 267)(11, "b");
    i0.ɵɵtext(12, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 387);
    i0.ɵɵelement(14, "span", 333);
    i0.ɵɵpipe(15, "sanitizeHtml");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r107 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r107.given_points == item_r107.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r107.given_points != item_r107.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r107.student_answer[0] == null ? null : item_r107.student_answer[0].isSelected) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r107.student_answer[0] == null ? null : item_r107.student_answer[0].isSelected) == "");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(15, 5, item_r107.answer[0].correctAnswer), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_p_61_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_p_61_span_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, ", ");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_p_61_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_p_61_span_2_span_2_Template, 2, 0, "span", 150);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const skill_r130 = ctx.$implicit;
    const last_r131 = ctx.last;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(skill_r130);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !last_r131);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_p_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_p_61_span_1_Template, 2, 0, "span", 150)(2, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_p_61_span_2_Template, 3, 2, "span", 203);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r107 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r107 == null ? null : item_r107.skill == null ? null : item_r107.skill.length) == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r107 == null ? null : item_r107.skill);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_p_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_87_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 449)(1, "div", 219)(2, "label", 23);
    i0.ɵɵtext(3, "Explanation: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 450);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r107 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 1, item_r107.explanation), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_88_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 451)(1, "label", 23);
    i0.ɵɵtext(2, "Resource: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 450);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r107 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 1, item_r107.resource), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_89_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 454)(1, "h5", 23);
    i0.ɵɵtext(2, "Student Feedback:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 455);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r107 = i0.ɵɵnextContext(2).$implicit;
    const i_r68 = i0.ɵɵnextContext(2).index;
    i0.ɵɵclassMapInterpolate1("col-md-", item_r107.student_roughdata != "" ? "6" : "12", " px-0");
    i0.ɵɵpropertyInterpolate1("id", "studentFeedback", i_r68, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r107.student_feedback);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_89_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 454)(1, "h5");
    i0.ɵɵtext(2, "Student Workspace");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 456);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r107 = i0.ɵɵnextContext(2).$implicit;
    const i_r68 = i0.ɵɵnextContext(2).index;
    i0.ɵɵclassMapInterpolate1("col-md-", item_r107.student_feedback != "" ? "6" : "12", " px-0");
    i0.ɵɵpropertyInterpolate1("id", "studentRoughData", i_r68, "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("font-weight-bold ml-", item_r107.student_feedback == "" ? "0" : "3", "");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("feedback-card innerhtml-margin-clear col-md-12 ml-", item_r107.student_feedback == "" ? "0" : "3", "");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 12, item_r107.student_roughdata), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_89_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 452)(1, "div", 223);
    i0.ɵɵtemplate(2, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_89_div_2_Template, 5, 6, "div", 453)(3, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_89_div_3_Template, 5, 14, "div", 453);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r107 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r107.student_feedback != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r107.student_roughdata != "");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r104 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 424)(1, "div", 425)(2, "div", 426)(3, "div")(4, "p", 319);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 427);
    i0.ɵɵtemplate(7, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_i_7_Template, 1, 0, "i", 209)(8, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_i_8_Template, 1, 0, "i", 210);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 428)(10, "div", 429)(11, "div", 430)(12, "div", 29);
    i0.ɵɵtemplate(13, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_h4_13_Template, 3, 1, "h4", 328);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 431)(15, "h4", 33);
    i0.ɵɵtext(16, ":");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 432);
    i0.ɵɵtemplate(18, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_h4_18_Template, 3, 1, "h4", 328);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 433);
    i0.ɵɵtext(20, "Points: ");
    i0.ɵɵelementStart(21, "input", 434);
    i0.ɵɵlistener("input", function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_Template_input_input_21_listener($event) { const ctx_r111 = i0.ɵɵrestoreView(_r104); const item_r107 = ctx_r111.$implicit; const j_r108 = ctx_r111.index; const i_r68 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(4); ctx_r1.getPoints($event, i_r68, j_r108, "passage"); return i0.ɵɵresetView(ctx_r1.markValidation($event, item_r107.points, i_r68, j_r108, "passage")); })("keypress", function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_Template_input_keypress_21_listener($event) { i0.ɵɵrestoreView(_r104); const ctx_r1 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span", 216);
    i0.ɵɵtext(23, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span", 217);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(26, "br");
    i0.ɵɵtemplate(27, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_span_27_Template, 2, 0, "span", 218);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "div", 435);
    i0.ɵɵelement(29, "span", 436);
    i0.ɵɵpipe(30, "sanitizeHtml");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(31, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_31_Template, 13, 4, "div", 20)(32, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_32_Template, 27, 6, "div", 20)(33, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_33_Template, 13, 4, "div", 437)(34, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_34_Template, 16, 7, "div", 438);
    i0.ɵɵelementStart(35, "div", 419)(36, "div", 420)(37, "div", 104)(38, "div", 8)(39, "div", 421)(40, "label", 422)(41, "b");
    i0.ɵɵtext(42, "Subject:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(43, "p");
    i0.ɵɵtext(44);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "div", 421)(46, "label", 422)(47, "b");
    i0.ɵɵtext(48, "Topic:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(49, "p");
    i0.ɵɵtext(50);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(51, "div", 421)(52, "label", 422)(53, "b");
    i0.ɵɵtext(54, "Sub Topic:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(55, "p");
    i0.ɵɵtext(56);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(57, "div", 421)(58, "label", 422)(59, "b");
    i0.ɵɵtext(60, "Skill:");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(61, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_p_61_Template, 3, 2, "p", 150)(62, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_p_62_Template, 2, 0, "p", 150);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "div", 421)(64, "label", 422)(65, "b");
    i0.ɵɵtext(66, "Standard:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(67, "p");
    i0.ɵɵtext(68);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(69, "div", 421)(70, "label", 422)(71, "b");
    i0.ɵɵtext(72, "Difficulty:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(73, "p");
    i0.ɵɵtext(74);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(75, "div", 98)(76, "label", 422)(77, "b");
    i0.ɵɵtext(78, "Points:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(79, "p");
    i0.ɵɵtext(80);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(81, "div", 98)(82, "label", 422)(83, "b");
    i0.ɵɵtext(84, "Predicted Solving Time:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(85, "p");
    i0.ɵɵtext(86);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵtemplate(87, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_87_Template, 6, 3, "div", 439)(88, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_88_Template, 5, 3, "div", 440)(89, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_div_89_Template, 4, 2, "div", 441);
    i0.ɵɵelementStart(90, "div", 442)(91, "textarea", 443);
    i0.ɵɵlistener("input", function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_Template_textarea_input_91_listener($event) { const j_r108 = i0.ɵɵrestoreView(_r104).index; const i_r68 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.cfsGetPassageFeedback($event, i_r68, j_r108)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r107 = ctx.$implicit;
    const i_r68 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i_r68 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r107.points != item_r107.given_points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r107.points == item_r107.given_points);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.getElapsedTime(item_r107));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.getElapsedTime(item_r107));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", item_r107.given_points);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r107.points);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r107.maxValErr);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(30, 26, item_r107.question), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r107.question_type_id == 1 || item_r107.question_type_id == 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r107.question_type_id == "5" || item_r107.question_type_id == "7");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r107.question_type_id == "10");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r107.question_type_id == "20");
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate((item_r107 == null ? null : item_r107.subject_name) ? item_r107 == null ? null : item_r107.subject_name : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r107 == null ? null : item_r107.question_topic) ? item_r107 == null ? null : item_r107.question_topic : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r107 == null ? null : item_r107.sub_topic) ? item_r107 == null ? null : item_r107.sub_topic : "-");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r107 == null ? null : item_r107.skill);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !item_r107.skill);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r107 == null ? null : item_r107.question_standard_name) ? item_r107 == null ? null : item_r107.question_standard_name : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(item_r107.level == "1" ? "Easy" : item_r107.level == "2" ? "Medium" : "Difficult");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r107 == null ? null : item_r107.points) ? item_r107 == null ? null : item_r107.points : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r107 == null ? null : item_r107.predicted_solving_time) ? item_r107 == null ? null : item_r107.predicted_solving_time : "-");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r107.explanation != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r107.resource != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r107.student_feedback != "" || item_r107.student_roughdata != "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", item_r107.feedback);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 131);
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_div_1_Template, 92, 28, "div", 423);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r67.subQuestions);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 94)(1, "label", 23);
    i0.ɵɵtext(2, "Explanation: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 450);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 1, item_r67.explanation), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_17_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 177)(1, "label", 23);
    i0.ɵɵtext(2, "Resource: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 450);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 1, item_r67.resource), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 246)(1, "div", 8);
    i0.ɵɵtemplate(2, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_17_div_2_Template, 5, 3, "div", 160)(3, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_17_div_3_Template, 5, 3, "div", 457);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r67.explanation != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.resource != "");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 454)(1, "h5", 23);
    i0.ɵɵtext(2, "Student Feedback:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 455);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r65 = i0.ɵɵnextContext(2);
    const item_r67 = ctx_r65.$implicit;
    const i_r68 = ctx_r65.index;
    i0.ɵɵclassMapInterpolate1("col-md-", item_r67.student_roughdata != "" ? "6" : "12", " px-0");
    i0.ɵɵpropertyInterpolate1("id", "studentFeedback", i_r68, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r67.student_feedback);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_18_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 103)(1, "div", 460)(2, "h5", 461);
    i0.ɵɵtext(3, "Cited Source");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 462);
    i0.ɵɵelement(5, "div", 463);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵclassMapInterpolate1("feedback-card innerhtml-margin-clear col-md-12 ml-", item_r67.question_type_id == "55" || item_r67.student_feedback == "" ? "0" : "3", "");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 4, item_r67.student_roughdata), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_18_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h5");
    i0.ɵɵtext(2, "Student Workspace:");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 456);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("font-weight-bold editor_bullet ml-", item_r67.student_feedback == "" ? "0" : "3", "");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("feedback-card innerhtml-margin-clear col-md-12 ml-", item_r67.student_feedback == "" ? "0" : "3", "");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 7, item_r67.student_roughdata), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_18_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 454);
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_18_div_3_div_1_Template, 7, 6, "div", 459)(2, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_18_div_3_div_2_Template, 5, 9, "div", 150);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r65 = i0.ɵɵnextContext(2);
    const item_r67 = ctx_r65.$implicit;
    const i_r68 = ctx_r65.index;
    i0.ɵɵclassMapInterpolate1("col-md-", item_r67.question_type_id == "55" ? "12" : item_r67.student_feedback != "" ? "6" : "12", " px-0");
    i0.ɵɵpropertyInterpolate1("id", "studentRoughData", i_r68, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.question_type_id == "55");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.question_type_id != "55");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 458)(1, "div", 223);
    i0.ɵɵtemplate(2, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_18_div_2_Template, 5, 6, "div", 453)(3, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_18_div_3_Template, 3, 7, "div", 453);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r67.student_feedback != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.student_roughdata != "");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r132 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 464)(1, "textarea", 443);
    i0.ɵɵlistener("input", function CorrectionPageComponent_div_19_div_2_div_1_div_1_div_19_Template_textarea_input_1_listener($event) { i0.ɵɵrestoreView(_r132); const i_r68 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.cfsGetFeedback($event, i_r68)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r67 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", item_r67.feedback);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 306)(1, "div", 7);
    i0.ɵɵtemplate(2, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_2_Template, 18, 7, "div", 307);
    i0.ɵɵelementStart(3, "div", 308);
    i0.ɵɵtemplate(4, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_4_Template, 4, 3, "div", 309)(5, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_5_Template, 13, 4, "div", 300)(6, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_6_Template, 27, 6, "div", 310)(7, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_7_Template, 13, 4, "div", 310)(8, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_8_Template, 13, 4, "div", 310)(9, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_9_Template, 13, 4, "div", 310)(10, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_10_Template, 11, 5, "div", 311)(11, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_11_Template, 16, 7, "div", 311)(12, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_12_Template, 13, 6, "div", 312)(13, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_13_Template, 17, 9, "div", 310)(14, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_14_Template, 18, 10, "div", 310)(15, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_15_Template, 52, 9, "div", 313)(16, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_16_Template, 2, 1, "div", 314)(17, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_17_Template, 4, 2, "div", 222)(18, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_18_Template, 4, 2, "div", 315)(19, CorrectionPageComponent_div_19_div_2_div_1_div_1_div_19_Template, 2, 1, "div", 316);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r67 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("", ctx_r1.isSingleQnsWithFeedbackType && ctx_r1.previousFeedBack.length != 0 ? "col-md-6 content-card" : "col-md-12", " px-0");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(22, _c11, ctx_r1.totalFeedbackMaxHeight))("hidden", !item_r67.isShow);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r67.question_type_id != "24");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r67.question_type_id != 24 && item_r67.question_type_id != 55 || item_r67.question_type_id == 55 || item_r67.question_type_id == 24 && (item_r67.subQuestions[0] == null ? null : item_r67.subQuestions[0].passage) && (item_r67.subQuestions[0] == null ? null : item_r67.subQuestions[0].passage) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.question_type_id == "1" || item_r67.question_type_id == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.question_type_id == "5" || item_r67.question_type_id == "7");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.question_type_id == "9");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.question_type_id == "10");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.question_type_id == "16");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(24, _c12).indexOf(item_r67.question_type_id) > -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(25, _c13).indexOf(item_r67.question_type_id) > -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(26, _c14).indexOf(item_r67.question_type_id) > -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.question_type_id == "28");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.question_type_id == "40" || item_r67.question_type_id == "41");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.question_type_id != 24 && item_r67.question_type_id != "55");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.question_type_id == "24");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.question_type_id != 24 && (item_r67.explanation != "" || item_r67.resource != ""));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r67.student_feedback != "" || item_r67.student_roughdata != "") && item_r67.question_type_id != "24");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r67.question_type_id != "24" && item_r67.question_type_id != "55");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 471)(1, "div", 103)(2, "div", 460)(3, "h5", 472);
    i0.ɵɵtext(4, "Student Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 473);
    i0.ɵɵelement(6, "span", 474);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("innerHTML", ctx_r1.convertedText && ctx_r1.convertedText != "" ? ctx_r1.convertMarkdownToHtml(ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.student_answer) : ctx_r1.convertMarkdownToHtml(ctx_r1.totalAns[0] == null ? null : ctx_r1.totalAns[0].student_answer[0] == null ? null : ctx_r1.totalAns[0].student_answer[0].isSelected, "single"), i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 480);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("innerHTML", ctx_r1.convertedText, i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_h5_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" (", i0.ɵɵpipeBind1(2, 2, ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.created_date), " | ", i0.ɵɵpipeBind2(3, 4, ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.created_date, "h:mm a"), ") ");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_h5_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 23);
    i0.ɵɵtext(1, "Final Feedback");
    i0.ɵɵtemplate(2, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_h5_1_span_2_Template, 4, 7, "span", 150);
    i0.ɵɵtext(3, ": ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.created_date);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_h5_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" (", i0.ɵɵpipeBind1(2, 2, ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.created_date), " | ", i0.ɵɵpipeBind2(3, 4, ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.created_date, "h:mm a"), ") ");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_h5_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 23);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_h5_2_span_2_Template, 4, 7, "span", 150);
    i0.ɵɵtext(3, ": ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Feedback For Version ", ctx_r1.selectedFeedBackIndex, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.created_date);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_3_span_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 501);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ctx_r1.previousFeedBack[(ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.index) + 1].student_score, " / ", ctx_r1.previousFeedBack[(ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.index) + 1].total_score, " ");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_3_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " - ");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_3_div_23_div_1_h5_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 504);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r133 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(value_r133);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_3_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "label", 23);
    i0.ɵɵtext(2, "Strengths: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_3_div_23_div_1_h5_3_Template, 2, 1, "h5", 503);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(9);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.selectedPreviousStudentAnswer.strengths);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_3_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 502);
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_3_div_23_div_1_Template, 4, 1, "div", 150);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedPreviousStudentAnswer.strengths.length != 0);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_3_div_24_div_1_h5_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 507);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r134 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(value_r134);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_3_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "label", 23);
    i0.ɵɵtext(2, "Top Opportunities: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_3_div_24_div_1_h5_3_Template, 2, 1, "h5", 506);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(9);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.selectedPreviousStudentAnswer.top_opportunities);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_3_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 505);
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_3_div_24_div_1_Template, 4, 1, "div", 150);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedPreviousStudentAnswer.top_opportunities.length != 0);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 75)(1, "div", 103)(2, "div", 460)(3, "h5", 485);
    i0.ɵɵtext(4, "Score Chart");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 486)(6, "div", 490)(7, "div", 491)(8, "div", 492)(9, "h5", 23);
    i0.ɵɵtext(10, "Feedback Score");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p", 493)(12, "span");
    i0.ɵɵtext(13, "Current Version : ");
    i0.ɵɵelementStart(14, "span", 494);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "span", 495);
    i0.ɵɵtext(17, "Previous Version :");
    i0.ɵɵtemplate(18, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_3_span_18_Template, 2, 2, "span", 496)(19, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_3_span_19_Template, 2, 0, "span", 150);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(20, "div", 131)(21, "div", 497);
    i0.ɵɵelement(22, "apx-chart", 498);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(23, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_3_div_23_Template, 2, 1, "div", 499)(24, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_3_div_24_Template, 2, 1, "div", 500);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(15);
    i0.ɵɵtextInterpolate2(" ", ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.student_score, " / ", ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.total_score, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.selectedFeedBackIndex != 1 && ctx_r1.selectedFeedBackIndex != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedFeedBackIndex == 1);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("series", ctx_r1.chartOptions == null ? null : ctx_r1.chartOptions.series)("chart", ctx_r1.chartOptions == null ? null : ctx_r1.chartOptions.chart)("xaxis", ctx_r1.chartOptions == null ? null : ctx_r1.chartOptions.xaxis)("yaxis", ctx_r1.chartOptions == null ? null : ctx_r1.chartOptions.yaxis)("plotOptions", ctx_r1.chartOptions == null ? null : ctx_r1.chartOptions.plotOptions)("dataLabels", ctx_r1.chartOptions == null ? null : ctx_r1.chartOptions.dataLabels)("legend", ctx_r1.chartOptions == null ? null : ctx_r1.chartOptions.legend);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedPreviousStudentAnswer.strengths);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedPreviousStudentAnswer.top_opportunities);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 508);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("innerHTML", ctx_r1.convertedText, i0.ɵɵsanitizeHtml);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_11_div_11_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "strong", 523);
    i0.ɵɵtext(2, "Rationale:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const feedback_r136 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMapInterpolate1("rationale_design col-12 px-0 ", (feedback_r136[1] == null ? null : feedback_r136[1].feedback.length) == 0 ? "mb-0" : "", "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", feedback_r136[1] == null ? null : feedback_r136[1].rationale, " ");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_11_div_11_div_11_label_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 530);
    i0.ɵɵtext(1, "Why: ");
    i0.ɵɵelementStart(2, "span", 528);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const value_r137 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(value_r137.why);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_11_div_11_div_11_label_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 530);
    i0.ɵɵtext(1, "Example: ");
    i0.ɵɵelementStart(2, "span", 531);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const value_r137 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(value_r137.example_rewrite);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_11_div_11_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 524)(2, "h5", 525);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 526)(5, "label", 527);
    i0.ɵɵtext(6, "Suggestion: ");
    i0.ɵɵelementStart(7, "span", 528);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_11_div_11_div_11_label_9_Template, 4, 1, "label", 529)(10, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_11_div_11_div_11_label_10_Template, 4, 1, "label", 529);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const value_r137 = ctx.$implicit;
    const lastValue_r138 = ctx.last;
    i0.ɵɵclassMapInterpolate1("col-md-12 ", lastValue_r138 ? "" : "mb-2", "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", value_r137.snippet, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(value_r137.suggestion);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", value_r137 == null ? null : value_r137.why);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", value_r137 == null ? null : value_r137.example_rewrite);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_11_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r135 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 517);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_11_div_11_Template_div_click_0_listener() { const feedback_r136 = i0.ɵɵrestoreView(_r135).$implicit; return i0.ɵɵresetView(feedback_r136.collaspsed = !feedback_r136.collaspsed); });
    i0.ɵɵelementStart(1, "div", 518)(2, "span", 519);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 120)(5, "span", 520);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "i", 521);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 522);
    i0.ɵɵtemplate(9, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_11_div_11_div_9_Template, 4, 4, "div", 11);
    i0.ɵɵelementStart(10, "div", 8);
    i0.ɵɵtemplate(11, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_11_div_11_div_11_Template, 11, 7, "div", 248);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_19_0;
    const feedback_r136 = ctx.$implicit;
    const last_r139 = ctx.last;
    const first_r140 = ctx.first;
    const ctx_r1 = i0.ɵɵnextContext(8);
    i0.ɵɵproperty("ngClass", last_r139 ? "feedback-panel_last" : first_r140 ? "feedback-panel_first" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", !feedback_r136.collaspsed ? "open" : "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_19_0 = ctx_r1.getValue(feedback_r136[0])) !== null && tmp_19_0 !== undefined ? tmp_19_0 : "-");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" Score: ", feedback_r136[1] == null ? null : feedback_r136[1].score, " / ", ctx_r1.totalIndivialScore, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", feedback_r136.collaspsed ? "fa-chevron-down" : "fa-chevron-up");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngbCollapse", feedback_r136.collaspsed);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", feedback_r136[1] == null ? null : feedback_r136[1].rationale);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", feedback_r136[1] == null ? null : feedback_r136[1].feedback);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 509)(1, "div", 510)(2, "div", 131)(3, "h5", 511);
    i0.ɵɵtext(4, "Total Score");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8)(6, "div", 512)(7, "div", 513);
    i0.ɵɵelement(8, "div", 514);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "span", 515);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(11, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_11_div_11_Template, 12, 9, "div", 516);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(8);
    i0.ɵɵstyleProp("width", ctx_r1.scorePercentage, "%");
    i0.ɵɵattribute("aria-valuenow", ctx_r1.score)("aria-valuemin", 0)("aria-valuemax", ctx_r1.totalScore);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.student_score, " / ", ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.total_score, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.feedbackList);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_12_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 533);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 534)(4, "label", 535);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "label", 536);
    i0.ɵɵtext(7, "Example: ");
    i0.ɵɵelementStart(8, "span", 537);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_18_0;
    let tmp_19_0;
    const data_r141 = ctx.$implicit;
    const i_r142 = ctx.index;
    const last_r143 = ctx.last;
    i0.ɵɵclassMapInterpolate1("col-12 row ", !last_r143 ? "mb-2" : "", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", (tmp_18_0 = data_r141 == null ? null : data_r141.priority) !== null && tmp_18_0 !== undefined ? tmp_18_0 : i_r142, ".");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((tmp_19_0 = data_r141 == null ? null : data_r141.action) !== null && tmp_19_0 !== undefined ? tmp_19_0 : "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(data_r141.example_rewrite);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 484)(1, "div", 103)(2, "div", 460)(3, "h5", 485);
    i0.ɵɵtext(4, "Next Edit Plan");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 532);
    i0.ɵɵtemplate(6, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_12_div_6_Template, 10, 6, "div", 248);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r1.selectedPreviousStudentAnswer.next_edit_plan);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 481);
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_h5_1_Template, 4, 1, "h5", 482)(2, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_h5_2_Template, 4, 2, "h5", 482)(3, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_3_Template, 25, 13, "div", 483);
    i0.ɵɵelementStart(4, "div", 484)(5, "div", 103)(6, "div", 460)(7, "h5", 485);
    i0.ɵɵtext(8, "Trait Analysis");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 486);
    i0.ɵɵtemplate(10, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_10_Template, 1, 1, "div", 487)(11, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_11_Template, 12, 8, "div", 488);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(12, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_div_12_Template, 7, 1, "div", 489);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedFeedBackIndex == ctx_r1.previousFeedBack.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedFeedBackIndex != ctx_r1.previousFeedBack.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.version) != "V1");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", (ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.version) == "V1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.version) != "V1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedPreviousStudentAnswer.next_edit_plan);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 477);
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_1_Template, 1, 1, "div", 478)(2, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_div_2_Template, 13, 6, "div", 479);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.version) == "V1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.version) != "V1");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 471)(1, "div", 103)(2, "div", 460)(3, "h5", 472);
    i0.ɵɵtext(4, "Teacher FeedBack");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 473)(6, "span", 538);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.totalFeedBack);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 465)(1, "div", 466)(2, "div", 103)(3, "div", 467)(4, "div", 8)(5, "div", 468)(6, "h5")(7, "span", 469);
    i0.ɵɵtext(8, "Student Name: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 24);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "h5", 25)(12, "span", 469);
    i0.ɵɵtext(13, "Class: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span", 24);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 470)(17, "h5", 25)(18, "span", 469);
    i0.ɵɵtext(19, "Assignment: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "span", 24);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(22, " \u00A0 \u00A0 ");
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(23, "div", 471)(24, "div", 103)(25, "div", 460)(26, "h5", 472);
    i0.ɵɵtext(27, "Essay Prompt");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 473);
    i0.ɵɵelement(29, "span", 474);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(30, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_30_Template, 7, 1, "div", 475)(31, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_31_Template, 3, 2, "div", 476)(32, CorrectionPageComponent_div_19_div_2_div_1_div_2_div_32_Template, 8, 1, "div", 475);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_12_0;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(8, _c11, ctx_r1.totalFeedbackMaxHeight));
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r1.studentAnswer.student_name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate((tmp_12_0 = ctx_r1.studentAnswer.class_name) !== null && tmp_12_0 !== undefined ? tmp_12_0 : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.classData.content_name);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("innerHTML", ctx_r1.convertMarkdownToHtml(ctx_r1.totalAns[0] == null ? null : ctx_r1.totalAns[0].question, "single"), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.totalAns[0] == null ? null : ctx_r1.totalAns[0].student_answer[0] == null ? null : ctx_r1.totalAns[0].student_answer[0].isSelected) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.previousFeedBack.length != 0 && ctx_r1.convertedText != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.totalFeedBack != "");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 539)(1, "div", 94)(2, "div", 219)(3, "button", 540);
    i0.ɵɵtext(4, "Student Overall Feedback");
    i0.ɵɵelementEnd()()()();
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 544);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.totalStudentFeedBack);
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 545);
    i0.ɵɵtext(1, "No Feedback Found");
    i0.ɵɵelementEnd();
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 168)(1, "div", 541);
    i0.ɵɵtemplate(2, CorrectionPageComponent_div_19_div_2_div_1_div_5_div_2_Template, 2, 1, "div", 542)(3, CorrectionPageComponent_div_19_div_2_div_1_div_5_div_3_Template, 2, 0, "div", 543);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.totalStudentFeedBack != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.totalStudentFeedBack == "");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_24_div_6_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " - ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r145 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Version ", data_r145.version, "");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_24_div_6_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r145 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, data_r145.created_date, "medium"));
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_24_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r144 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 550)(1, "div")(2, "div", 8)(3, "div", 551)(4, "h5", 552);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 553);
    i0.ɵɵtemplate(7, CorrectionPageComponent_div_19_div_2_div_1_div_24_div_6_span_7_Template, 4, 1, "span", 150)(8, CorrectionPageComponent_div_19_div_2_div_1_div_24_div_6_span_8_Template, 3, 4, "span", 150);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 554)(10, "i", 555);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_19_div_2_div_1_div_24_div_6_Template_i_click_10_listener() { const data_r145 = i0.ɵɵrestoreView(_r144).$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.deleteConfirmation(data_r145)); });
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const data_r145 = ctx.$implicit;
    const last_r146 = ctx.last;
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-12 card class-card1 py-2 ", last_r146 ? "mb-0" : "mb-3", "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(data_r145.feedback);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", data_r145.version != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r145.created_date != "");
} }
function CorrectionPageComponent_div_19_div_2_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 546)(1, "div", 547)(2, "div", 460)(3, "h5", 461);
    i0.ɵɵtext(4, "Overall FeedBack");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 548);
    i0.ɵɵtemplate(6, CorrectionPageComponent_div_19_div_2_div_1_div_24_div_6_Template, 11, 6, "div", 549);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r1.feedbackListData);
} }
function CorrectionPageComponent_div_19_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_2_div_1_div_1_Template, 20, 27, "div", 296)(2, CorrectionPageComponent_div_19_div_2_div_1_div_2_Template, 33, 10, "div", 297);
    i0.ɵɵelementStart(3, "div", 298);
    i0.ɵɵtemplate(4, CorrectionPageComponent_div_19_div_2_div_1_div_4_Template, 5, 0, "div", 299)(5, CorrectionPageComponent_div_19_div_2_div_1_div_5_Template, 4, 2, "div", 300);
    i0.ɵɵelementStart(6, "div", 168)(7, "div")(8, "div", 94)(9, "label", 23);
    i0.ɵɵtext(10, "Obtained Points");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 176);
    i0.ɵɵtwoWayListener("ngModelChange", function CorrectionPageComponent_div_19_div_2_div_1_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r63); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.studentPoints, $event) || (ctx_r1.studentPoints = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 177)(13, "label", 23);
    i0.ɵɵtext(14, "Total Points");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 178);
    i0.ɵɵtwoWayListener("ngModelChange", function CorrectionPageComponent_div_19_div_2_div_1_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r63); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.totalPoints, $event) || (ctx_r1.totalPoints = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div")(17, "label", 301);
    i0.ɵɵtext(18, "Overall Feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "textarea", 302);
    i0.ɵɵtwoWayListener("ngModelChange", function CorrectionPageComponent_div_19_div_2_div_1_Template_textarea_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r63); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.newFeedBackEntered, $event) || (ctx_r1.newFeedBackEntered = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div")(21, "button", 303);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_19_div_2_div_1_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r63); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.saveFeedback()); });
    i0.ɵɵelement(22, "i", 304);
    i0.ɵɵtext(23, "Save Feedback");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(24, CorrectionPageComponent_div_19_div_2_div_1_div_24_Template, 7, 1, "div", 305);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 181)(26, "button", 182);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_19_div_2_div_1_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r63); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.saveAnswer(1, 1, true)); });
    i0.ɵɵtext(27, "Submit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "button", 183);
    i0.ɵɵlistener("click", function CorrectionPageComponent_div_19_div_2_div_1_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r63); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.saveAnswer(2, 1, true)); });
    i0.ɵɵtext(29, "Save");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.totalAns);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isSingleQnsWithFeedbackType && ctx_r1.convertedText && ctx_r1.convertedText != "" && (ctx_r1.previousFeedBack == null ? null : ctx_r1.previousFeedBack.length) != 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (ctx_r1.totalAns == null ? null : ctx_r1.totalAns.length) == 1 && (ctx_r1.totalAns[0] == null ? null : ctx_r1.totalAns[0].question_type_id) != "55");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.totalAns == null ? null : ctx_r1.totalAns.length) == 1 && (ctx_r1.totalAns[0] == null ? null : ctx_r1.totalAns[0].question_type_id) != "55");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("col-md-3 px-0 mb-", ctx_r1.feedbackListData.length == 0 ? "2" : "0", "");
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.studentPoints);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.totalPoints);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-md-9 mb-", ctx_r1.feedbackListData.length == 0 ? "1" : "0", "");
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newFeedBackEntered);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("text-right col-12 px-0 mt-3 mb-", ctx_r1.feedbackListData.length == 0 ? "1" : "0", "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.feedbackListData.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.scoreStatus == 3 || ctx_r1.scoreStatus == 2);
} }
function CorrectionPageComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 295);
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_2_div_1_Template, 30, 18, "div", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pageType == 2);
} }
function CorrectionPageComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CorrectionPageComponent_div_19_div_1_Template, 6, 6, "div", 155)(2, CorrectionPageComponent_div_19_div_2_Template, 2, 1, "div", 156);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("mt-", ctx_r1.totalAnsSample != "" && (ctx_r1.totalAns[0] == null ? null : ctx_r1.totalAns[0].question_type_id) != 55 ? "3" : "0", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.correctPdfPath == null ? null : ctx_r1.correctPdfPath.length) != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.correctPdfPath == null ? null : ctx_r1.correctPdfPath.length) == 0);
} }
function CorrectionPageComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r147 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 556)(1, "div", 6)(2, "div", 8)(3, "div", 557)(4, "i", 558);
    i0.ɵɵlistener("click", function CorrectionPageComponent_ng_template_20_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r147); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 559)(6, "h3", 560);
    i0.ɵɵtext(7, "Delete Annotation");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 131)(9, "h5", 561);
    i0.ɵɵtext(10, "Are you sure want to delete Annotation(s) ?");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(11, "div", 562)(12, "button", 563);
    i0.ɵɵtext(13, "All Page ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 563);
    i0.ɵɵtext(15, "This Page");
    i0.ɵɵelementEnd()();
} }
function CorrectionPageComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r148 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 564)(1, "h4", 565);
    i0.ɵɵtext(2, "Rework");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 566)(4, "div", 6)(5, "div", 168)(6, "div", 75)(7, "p");
    i0.ɵɵtext(8, "Note: Changing the status will allow student to update the answers");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 567)(10, "input", 568);
    i0.ɵɵlistener("click", function CorrectionPageComponent_ng_template_22_Template_input_click_10_listener($event) { i0.ɵɵrestoreView(_r148); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetStudentAns($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 569);
    i0.ɵɵtext(12, "Reset student answers");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(13, "div", 570)(14, "button", 571);
    i0.ɵɵlistener("click", function CorrectionPageComponent_ng_template_22_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r148); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(15, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 572);
    i0.ɵɵlistener("click", function CorrectionPageComponent_ng_template_22_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r148); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.moveToPending()); });
    i0.ɵɵtext(17, "Ok");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("checked", ctx_r1.resetAnswer);
} }
function CorrectionPageComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r149 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 573);
    i0.ɵɵtext(1, " \u00A0,");
    i0.ɵɵelementStart(2, "h4", 25);
    i0.ɵɵtext(3, "Work Area");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "i", 574);
    i0.ɵɵlistener("click", function CorrectionPageComponent_ng_template_24_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r149); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 556)(6, "div", 6)(7, "div");
    i0.ɵɵelement(8, "app-annotation", 575);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("getAnnotate", ctx_r1.workAnnotate)("id", "workAreaAns")("pdfPath", ctx_r1.workAnnotatePDF)("toolHide", true)("userType", "teacher");
} }
function CorrectionPageComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 566)(1, "div", 576);
    i0.ɵɵelement(2, "div", 577);
    i0.ɵɵelementStart(3, "span", 578);
    i0.ɵɵtext(4, "Please wait, we are submitting the module...");
    i0.ɵɵelementEnd()()();
} }
function CorrectionPageComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r150 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 564)(1, "h4", 565);
    i0.ɵɵtext(2, "Release Score Confirmation");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 579)(4, "div", 6)(5, "div", 8)(6, "div", 131)(7, "p", 580);
    i0.ɵɵtext(8, "All the module will be submitted and score released. Would you like to proceed further?");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(9, "div", 570)(10, "button", 571);
    i0.ɵɵlistener("click", function CorrectionPageComponent_ng_template_28_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r150); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(11, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 572);
    i0.ɵɵlistener("click", function CorrectionPageComponent_ng_template_28_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r150); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitAllTestAndReleaseScore()); });
    i0.ɵɵtext(13, "Ok");
    i0.ɵɵelementEnd()()();
} }
function CorrectionPageComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r151 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 564)(1, "h4", 565);
    i0.ɵɵtext(2, "Delete Feedback");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 579)(4, "div", 6)(5, "div", 8)(6, "div", 131)(7, "p", 581);
    i0.ɵɵtext(8, "Are you sure want to delete the selected feedback?");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(9, "div", 570)(10, "button", 571);
    i0.ɵɵlistener("click", function CorrectionPageComponent_ng_template_30_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r151); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(11, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 572);
    i0.ɵɵlistener("click", function CorrectionPageComponent_ng_template_30_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r151); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updateOrDeleteFeedback("2", ctx_r1.selectedTeacherFeedback == null ? null : ctx_r1.selectedTeacherFeedback.id)); });
    i0.ɵɵtext(13, "Ok");
    i0.ɵɵelementEnd()()();
} }
export class CorrectionPageComponent {
    constructor(config, confi, sanitizer, teacher, formBuilder, modalService, auth, commondata, navServices, common, route, validationService, sseClient, toastr, creator, newSubject, student, content) {
        this.config = config;
        this.confi = confi;
        this.sanitizer = sanitizer;
        this.teacher = teacher;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.auth = auth;
        this.commondata = commondata;
        this.navServices = navServices;
        this.common = common;
        this.route = route;
        this.validationService = validationService;
        this.sseClient = sseClient;
        this.toastr = toastr;
        this.creator = creator;
        this.newSubject = newSubject;
        this.student = student;
        this.content = content;
        this.sectionFilterVal = 'all';
        this.totalAns = [];
        this.totalAnsSample = [];
        this.releaseStudent = [];
        this.releaseStudentContentId = [];
        this.dragQuestion = [];
        this.workAnnotate = [];
        this.workAnnotatePage = 0;
        this.functionCalled = false;
        this.resetAnswer = false;
        this.showfeed = false;
        this.invalidScore = false;
        this.answerSheet = false;
        this.blink = false;
        this.page = 0;
        this.selector = '.scrollPanelCorrection';
        this.questionFilter = 'all';
        this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };
        this.lastMousePosition = { x: 0, y: 0 };
        this.canvasPosition = { x: 0, y: 0 };
        this.mousePosition = { x: 0, y: 0 };
        this.mouseDownFlag = false;
        this.pagePosition = { x: 0, y: 0 };
        this.show = false;
        this.shapesType = 'select';
        this.roughArea = false;
        this.mathDelayer = false;
        this.isPdfAvailable = true;
        this.sheetIndex = 0;
        this.element = null;
        this.areaInfo = [];
        this.previewInfo = [];
        this.sheetInfo = [];
        this.subs = [];
        this.showPopup = false;
        this.listRectangleId = '';
        this.count = 0;
        this.totalPointsArray = [];
        this.studentPointsArray = [];
        this.zoom = 1.0;
        this.getTag = [];
        this.detailData = [];
        this.subQuestion = [];
        this.totalSheetInfo = [];
        this.itemsList = [];
        this.totalsub = [];
        this.selectedDeleteIcon = false;
        // ];
        this.dragQuestionsList = [];
        this.currentPage = 1;
        this.itemSelect = [];
        this.redoListArray = [];
        this.redirect = '';
        this.testStatus = '';
        this.selectedFeedBackIndex = '';
        this.previousFeedBack = [];
        this.listPassageDetails = [];
        this.contentTimeTaken = 0;
        this.feedbackList = [];
        this.totalIndivialScore = 5;
        this.totalScore = 0;
        this.score = 0;
        this.totalFeedBackCount = 0;
        this.newFeedBackEntered = '';
        this.feedbackListData = [];
        this.selectedVersion = 0;
        this.totalFeedbackMaxHeight = 'auto';
        this.studentContentlist = this.auth.getSessionData('student-content');
        console.log(this.studentContentlist, 'studentContent');
        console.log(this.auth.getSessionData('student-content'), 'this.auth.getSessionData(\'student-content\')');
        if (this.auth.getSessionData('correction-return')) {
            this.redirect = this.auth.getSessionData('correction-return');
        }
        this.showstudentContentlist = this.studentContentlist == 1;
        if (this.showstudentContentlist) {
            this.pageType = 2;
        }
        else {
            this.pageType = 1;
        }
        this.invalidData = false;
        this.showpdf = false;
        this.buttonName = 'Assignments and uploads';
        this.questionType = 4;
        this.showingType = 1;
        this.showPDFAnswer = false;
        this.webhost = this.confi.getimgUrl();
        this.filterForm = this.formBuilder.group({
            studentlist: '',
        });
        this.classData = JSON.parse(this.auth.getSessionData('classDetails'));
        this.studentName = this.classData.student_name;
        this.studentsDetails(this.classData, 0);
        this.auth.removeSessionData('readonly_data');
        this.studentContentlist = this.auth.getSessionData('student-content');
        this.showstudentContentlist = this.studentContentlist == 1;
        this.showInput = true;
        this.svgColor = '#ff0000';
        this.disable = true;
        this.showInput = true;
        this.savaText = false;
        this.queDrag = false;
        this.deleteAnnatation = false;
        this.textFontSize = '16';
        this.queNum = [];
        this.previewInfo = [];
        this.roleId = this.auth.getRoleId();
        this.creator.changeViewList(true);
    }
    onResize() {
        this.updateContentHeight();
    }
    ngOnInit() {
        this.passageList();
        this.clickEvent();
        const myPics = document.getElementById('pdf-page1');
        this.listView(1);
        this.allowSelect = true;
        this.newSubject.allowSchoolChange(this.allowSelect);
        if (this.showstudentContentlist) {
            this.studentsAnswerList(this.classData, this.classData.status);
            this.scoreStatus = this.classData.status;
        }
        else {
            console.log(this.showstudentContentlist, 'showcontent');
        }
    }
    ngOnDestroy() {
        this.auth.removeSessionData('student-content');
        this.auth.removeSessionData('correction-return');
        this.creator.changeViewList(false);
        clearInterval(this.interval);
        this.subs.forEach((val) => {
            val.unsubscribe();
        });
    }
    updateContentHeight() {
        const availableHeight = window.innerHeight - (146);
        this.totalFeedbackMaxHeight = this.isSingleQnsWithFeedbackType ? `${availableHeight}px` : 'auto';
        console.log(this.totalFeedbackMaxHeight, 'totalFeedbackMaxHeight');
    }
    showAnswerPdf(event) {
        this.showPDFAnswer = !!event.target.checked;
        this.showCorrectPdf();
    }
    selectAnswerSheet(index) {
        this.blink = false;
        this.sheetIndex = index;
        this.answerSheetPath = this.webhost + '/' + this.uploadAnswerPath[index]?.original_image_url;
        this.sheetInfo = [...this.totalSheetInfo[index]];
        this.showType('2');
    }
    showType(id) {
        this.showingType = id;
        if (id == '1') {
            this.buttonName = 'Assignments and uploads';
        }
        else if (id == '2') {
            this.buttonName = 'Answer sheet';
        }
        else if (id == '3') {
            this.buttonName = 'Show PDF';
        }
        this.showCorrectPdf();
    }
    showCorrectPdf() {
        if ((this.showingType == '1' || this.showingType == '2') && this.showPDFAnswer) {
            this.deleteAnnatation = true;
            setTimeout(() => {
                this.blink = true;
            }, 1000);
        }
        else if (this.showingType == '3' && this.showPDFAnswer) {
            this.deleteAnnatation = false;
        }
        else if (this.showingType == '3' && !this.showPDFAnswer) {
            this.deleteAnnatation = false;
        }
        else if ((this.showingType == '1' || this.showingType == '2') && !this.showPDFAnswer) {
            this.deleteAnnatation = false;
            setTimeout(() => {
                this.blink = true;
            }, 1000);
        }
    }
    feedbackSelected(value) {
        console.log(value, 'value');
        if (value != '' && value != 'current') {
            this.selectedFeedBackIndex = this.previousFeedBack.length - value.index;
            this.selectedPreviousStudentAnswer = value;
            this.selectedVersion = value.index;
            if (this.selectedPreviousStudentAnswer.version != 'V1') {
                this.convertedText = value?.feedback;
                this.updateFeedback();
            }
            else {
                this.convertedText = this.convertMarkdownToHtml(value.feedback);
            }
        }
        else if (value == 'current') {
            // this.selectedFeedBackIndex = '';
            // this.convertedText = '';
            this.selectedVersion = 0;
            this.selectedFeedBackIndex = this.previousFeedBack.length - 1;
            this.selectedPreviousStudentAnswer = this.previousFeedBack[0];
        }
    }
    get scorePercentage() {
        return (this.score / this.totalScore) * 100;
    }
    convertMarkdownToHtml(markdown, breakTagType = 'double') {
        markdown = markdown.replace(/^'+|'+$/g, '');
        let html = markdown.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        html = html.replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
    getValue(value) {
        if (!value)
            return '';
        const parts = value.split('_');
        const formatted = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
        return formatted;
    }
    updateFeedback() {
        this.feedbackList = this.getUpdatedConvertedFeedback(this.convertedText);
        this.totalScore = this.feedbackList.length * this.totalIndivialScore;
        this.score = 0;
        setTimeout(() => {
            this.feedbackList.forEach(feedback => this.score = this.score + feedback[1]?.score);
        }, 500);
        this.feedbackList.forEach(feedback => {
            feedback.collaspsed = true;
            feedback[1]?.feedback.forEach(items => items.collaspsed = true);
        });
        this.versionComparsionBarChart();
    }
    // scrollToFeedBack() {
    //     setTimeout(() => {
    //         document.getElementById('feedback_got').scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'start',
    //             inline: 'start'
    //         });
    //     }, 0);
    // }
    getUpdatedConvertedFeedback(value) {
        return Object.entries(value);
    }
    versionComparsionBarChart() {
        const seriesData = this.feedbackList.map((items) => {
            return { name: items[0], categories: this.getValue(items[0]), score: items[1]?.score ?? 0 };
        });
        const previousFeedback = this.selectedFeedBackIndex == '' ? this.totalFeedBackCount - 1 :
            this.selectedFeedBackIndex == 1 ? this.previousFeedBack.length - 1 : this.selectedPreviousStudentAnswer.index + 1;
        let previousSeriesData = [];
        if (this.selectedFeedBackIndex != '' && this.selectedFeedBackIndex != 1) {
            const previousFeedBackList = this.getUpdatedConvertedFeedback(this.previousFeedBack[previousFeedback]?.feedback);
            previousSeriesData = previousFeedBackList.map((items) => {
                return { score: items[1]?.score ?? 0 };
            });
        }
        else {
            seriesData.map(value => value.score).forEach(items => {
                previousSeriesData.push({ score: 0 });
            });
        }
        this.chartOptions = {
            series: [
                {
                    name: 'Current Version',
                    data: seriesData.map(value => value.score)
                },
                {
                    name: 'Previous Version',
                    data: previousSeriesData.map(value => value.score)
                }
            ],
            chart: {
                type: 'bar',
                height: 300,
                id: 'feedbackChart',
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '40%'
                }
            },
            dataLabels: {
                enabled: true
            },
            xaxis: {
                categories: seriesData.map(value => value.categories)
            },
            yaxis: {
                min: 0,
                max: 5,
                tickAmount: 5,
                labels: {
                    formatter: val => val.toFixed(0)
                }
            },
            legend: {
                position: 'bottom'
            }
        };
    }
    getFeedbackCount(data) {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.studentAnswer.student_id,
            question_id: data.question_id,
            student_content_id: this.studentAnswer.student_content_id,
        };
        this.student.getOpenAiFeedbackCount(payload).subscribe((successData) => {
            this.getFeedbackCountSuccess(successData);
        }, (error) => console.error(error, 'error_APICount'));
    }
    getFeedbackCountSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            successData.ResponseObject.forEach((items, index) => {
                items.index = index;
                items.version_name = 'Version' + ' ' + (successData.ResponseObject.length - index);
            });
            this.previousFeedBack = successData.ResponseObject;
            this.totalFeedBackCount = successData.count ?? 0;
            if (this.previousFeedBack.length != 0) {
                this.selectedFeedBackIndex = this.previousFeedBack.length - this.previousFeedBack[0]?.index;
                this.selectedPreviousStudentAnswer = this.previousFeedBack[0];
                if (this.selectedPreviousStudentAnswer.version != 'V1') {
                    this.convertedText = this.previousFeedBack[0]?.feedback;
                    this.updateFeedback();
                }
                else {
                    this.convertedText = this.convertMarkdownToHtml(this.previousFeedBack[0]?.feedback);
                }
            }
            else if (this.previousFeedBack.length != 0 && this.scoreStatus == 2) {
                this.selectedFeedBackIndex = '';
                this.convertedText = '';
            }
            if (this.isSingleQnsWithFeedbackType) {
                this.totalAns.forEach(value => {
                    value.points = this.selectedFeedBackIndex != '' ? this.selectedPreviousStudentAnswer.total_score : value.points;
                    value.given_points = this.selectedFeedBackIndex != '' ? this.selectedPreviousStudentAnswer.student_score : value.given_points;
                });
                this.totalPoints = this.totalAns.reduce((acc, value) => acc += parseFloat(value.points), 0);
                this.studentPoints = this.totalAns.reduce((acc, value) => acc += parseFloat(value.given_points), 0);
            }
            this.updateContentHeight();
        }
    }
    back() {
        if (this.showstudentContentlist) {
            this.route.navigate(['/student-content/list-content/old']);
        }
        else {
            const datum = JSON.parse(this.auth.getSessionData('correctionDetail'));
            this.pageType = 1;
            this.studentsDetails(datum, 0);
        }
        this.sectionFilterVal = 'all';
        clearInterval(this.interval);
    }
    filterQues(event) {
        this.questionFilter = event.target.value;
        if (event.target.value == 'all') {
            if (this.correctPdfPath?.length == 0) {
                this.totalAns.forEach((item) => {
                    item.isShow = true;
                });
            }
            else {
                console.log('pdf type');
                this.totalAns.forEach((value) => {
                    value.section.forEach((item) => {
                        item.isShow = true;
                    });
                });
            }
        }
        else if (event.target.value == 'correct') {
            if (this.correctPdfPath?.length == 0) {
                this.totalAns.forEach((item) => {
                    item.isShow = item.given_points != '0';
                });
            }
            else {
                console.log('pdf type');
                this.correctFilter();
            }
            console.log(this.totalAns, 'totalAns');
        }
        else if (event.target.value == 'wrong') {
            if (this.correctPdfPath?.length == 0) {
                this.totalAns.forEach((item) => {
                    if (item.given_points == '0') {
                        item.isShow = true;
                    }
                    else {
                        item.isShow = false;
                    }
                });
            }
            else {
                console.log('pdf type');
                this.wrongFilter();
            }
        }
    }
    correctFilter() {
        this.totalAns.forEach((value, index) => {
            let len = 0;
            value.section.forEach((item) => {
                if (item.given_points != '0') {
                    len += 1;
                    item.isShow = true;
                }
                else {
                    item.isShow = false;
                }
            });
            if (len < 3 && this.totalAns.length < this.totalAnsSample.length && index == (this.totalAns.length - 1) && this.sectionFilterVal == 'all') {
                this.page += 1;
                this.totalAns.push(this.totalAnsSample[this.page]);
                this.correctFilter();
            }
        });
    }
    wrongFilter() {
        this.totalAns.forEach((value, index) => {
            let len = 0;
            value.section.forEach((item) => {
                if (item.given_points == '0') {
                    len += 1;
                    item.isShow = true;
                }
                else {
                    item.isShow = false;
                }
            });
            if (len < 3 && this.totalAns.length < this.totalAnsSample.length && index == (this.totalAns.length - 1) && this.sectionFilterVal == 'all') {
                this.page += 1;
                this.totalAns.push(this.totalAnsSample[this.page]);
                this.wrongFilter();
            }
        });
    }
    openRoughArea() {
        this.roughArea = !this.roughArea;
    }
    openWorkArea(item) {
        this.workAnnotate = [...item.workarea];
        this.workAnnotatePage = 0;
        if (this.workAnnotate.length != 0) {
            this.workAnnotate.forEach((val) => {
                if (val.pageNumber > this.workAnnotatePage) {
                    this.workAnnotatePage = val.pageNumber;
                }
            });
            this.jsPDF = new jsPDF();
            for (let i = 0; i < this.workAnnotatePage - 1; i++) {
                this.jsPDF.addPage();
            }
            this.workAnnotatePDF = this.jsPDF.output('datauristring');
            console.log(this.workAnnotatePDF, 'this.workAnnotatePDF');
        }
        this.modalRef = this.modalService.open(this.workArea, { size: 'xl', backdrop: 'static' });
    }
    showAnswerSheet() {
        this.answerSheet = !this.answerSheet;
        this.showpdf = true;
        this.buttonName = 'Hide PDF';
    }
    getSheetInfo(event) {
        this.sheetInfo = event;
        this.totalSheetInfo[this.sheetIndex] = this.sheetInfo;
        this.saveAnswerAnnotation();
    }
    openStudentFeedback() {
        this.showfeed = !this.showfeed;
    }
    moveToPendingAlert(value) {
        this.pendingCall = value;
        this.resetAnswer = false;
        this.modalRef = this.modalService.open(this.deleteAlert);
    }
    moveToPending() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.pendingCall != '' ? this.pendingCall.student_id : this.studentAnswer.student_id,
            student_content_id: this.pendingCall != '' ? this.pendingCall.student_content_id : this.studentAnswer.student_content_id,
            content_id: this.classData.content_id,
            class_id: this.classData.class_id,
            reset_answer: this.resetAnswer == true ? '1' : '0',
            teacher_feedback: this.pendingCall == '' ? this.totalFeedBack : this.pendingCall.teacher_feedback
        };
        if (this.testContentDetail) {
            data['is_test'] = '1';
        }
        this.teacher.changeToPending(data).subscribe((successData) => {
            this.moveToPendingSuccess(successData);
        }, (error) => {
            this.moveToPendingFailure(error);
        });
    }
    moveToPendingSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.close();
            clearInterval(this.interval);
            if (this.showstudentContentlist) {
                this.route.navigate(['/student-content/list-content/old']);
            }
            else {
                this.pageType = 1;
                this.studentsDetails(this.classData, 0);
            }
        }
    }
    moveToPendingFailure(error) {
        console.log(error);
    }
    resetStudentAns(event) {
        this.resetAnswer = event.target.checked;
    }
    matchcase(val, match, questionId) {
        let value = [];
        if (val != '' && val != undefined && val != 'undefined' && val != null) {
            if (questionId != '54') {
                val.forEach((answer) => {
                    value.push(match ? answer.trim() : answer.trim().toLowerCase().split(' ').join(''));
                });
            }
            else {
                value = match ? val.trim() : val.trim().toLowerCase().split(' ').join('');
            }
        }
        else {
            value = val;
        }
        return value;
    }
    clickEvent() {
        if (!this.mathDelayer) {
            this.mathDelayer = true;
            setTimeout(() => {
                document.getElementById('myDiv').click();
            }, 1000);
        }
        setTimeout(() => {
            this.mathDelayer = false;
        }, 1500);
    }
    parseVal(val) {
        if (val != '' && val != null) {
            return parse(val);
        }
        else {
            return false;
        }
    }
    listView(id) {
        this.gridView = id;
        this.showGrid = id == 1;
    }
    navigateToSATReport(list) {
        const satReportDetails = {
            class_id: list?.class_id ?? '936',
            class_name: list?.class_name ?? '',
            student_id: list.student_id,
            content_id: list.content_id,
            student_content_id: list.student_content_id,
            test_type_id: list?.test_type_id ?? '0'
        };
        this.auth.setSessionData('satReportData', JSON.stringify(satReportDetails));
        this.auth.setSessionData('reportCalledFrom', 'assignment_correction');
        this.auth.setSessionData('correction_student-content', JSON.stringify(this.studentContentlist));
        this.auth.setSessionData('correction_return', this.redirect);
        this.route.navigate(['sat-report']);
    }
    studentsDetails(val, id) {
        this.auth.setSessionData('correctionDetail', JSON.stringify(val));
        this.studentListHighlight = id;
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: val.content_id,
            content_format: val.content_format,
            class_id: val.class_id,
            type: id,
            class_content_id: val.class_content_id
        };
        this.teacher.studentList(data).subscribe((successData) => {
            this.detailsSuccess(successData, data);
        }, (error) => {
            this.detailsFailure(error);
        });
    }
    detailsSuccess(successData, data) {
        if (successData.IsSuccess) {
            this.correctionStudentList = [];
            this.studentList = successData.ResponseObject;
            this.studentList.forEach((item) => {
                item.checked = false;
                item.content_format = data.content_format;
                if (item.status != '1') {
                    this.correctionStudentList.push(item);
                }
            });
            if (this.pageType == 1) {
                $('#selectAll').prop('checked', false);
                $('#selectAllAlt').prop('checked', false);
                // sse client service call //
                this.subs.forEach((item) => {
                    item.unsubscribe();
                });
                this.sseClientService(data);
            }
        }
    }
    sseClientService(bodyValue) {
        const sseUrl = 'teacher/teacherassignStudentPrint';
        this.subs.push(this.sseClient.stream(sseUrl, {
            keepAlive: true, reconnectionDelay: 3_000,
            responseType: 'event'
        }, { body: bodyValue }, 'POST').subscribe((event) => {
            if (event.type === 'error') {
                const errorEvent = event;
                console.error(errorEvent, errorEvent.message);
            }
            else {
                const messageEvent = event;
                console.log(typeof messageEvent.data, 'SSE client called');
                this.studentReportDetailsSSESuccess(messageEvent.data === 'No Records found' ? messageEvent.data : JSON.parse(messageEvent.data), bodyValue);
            }
        }));
    }
    studentReportDetailsSSESuccess(successData, bodyValue) {
        this.correctionStudentList = [];
        const updatedStudentList = successData;
        updatedStudentList.forEach((item, index) => {
            item.checked = this.studentList[index].checked;
        });
        this.studentList = [...updatedStudentList];
        for (let i = 0; i < this.studentList.length; i++) {
            this.studentList[i].content_format = bodyValue.content_format;
            if (this.studentList[i].status != '1') {
                this.correctionStudentList.push(this.studentList[i]);
            }
        }
    }
    detailsFailure(error) {
        console.log(error, 'error');
    }
    studentsData() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.classData.class_id,
            content_id: this.classData.content_id
        };
        this.teacher.studentData(data).subscribe((successData) => {
            this.dataSuccess(successData);
        }, (error) => {
            this.dataFailure(error);
        });
    }
    dataSuccess(successData) {
        if (successData.IsSuccess) {
            this.studentData = successData.ResponseObject;
        }
    }
    dataFailure(error) {
        console.log(error, 'error');
    }
    passageList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: this.classData.content_id
        };
        this.content.passageAllService(data, 'list').subscribe((successData) => {
            this.passageListSuccess(successData);
        }, (error) => {
            console.error(error, 'error');
        });
    }
    passageListSuccess(successData) {
        this.listPassageDetails = successData.IsSuccess ? successData.ResponseObject : [];
        console.log(this.listPassageDetails, 'listPassageDetails');
        if (this.listPassageDetails.length != 0) {
            for (let i = 0; i < this.totalAns.length; i++) {
                if (this.totalAns[i].question_type_id == '24') {
                    for (let j = 0; j < this.totalAns[i].subQuestions.length; j++) {
                        const findIndex = this.listPassageDetails.length != 0 ?
                            this.listPassageDetails.findIndex(value => value.passage_id == this.totalAns[i].subQuestions[j].passage_id) : '';
                        this.totalAns[i].subQuestions[j].passage = findIndex != '' ? this.listPassageDetails[findIndex].passage : this.totalAns[i].subQuestions[j].passage;
                    }
                }
            }
        }
    }
    studentsAnswerList(id, status, calledType = '') {
        this.functionCalled = false;
        this.scoreStatus = status;
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: calledType == '' ? this.classData.content_id : id.content_id,
            content_format: this.classData.content_format,
            class_id: this.classData.class_id,
            student_id: calledType == '' ? id.student_id : this.testContentDetail.student_id,
            student_content_id: id.student_content_id
        };
        this.teacher.studentAnswerList(data).subscribe((successData) => {
            this.answerListSuccess(successData, id, status, calledType);
        }, (error) => {
            console.error(error);
        });
    }
    answerListSuccess(successData, id, status, calledType) {
        if (successData.IsSuccess) {
            this.subs.forEach((val) => {
                val.unsubscribe();
            });
            //// sidenav closes///
            // this.openmenu = true;
            // this.creator.changeViewList(this.openmenu);
            // this.navServices.collapseSidebar = true;
            //// sidenav closes///
            this.studentAnswer = successData.ResponseObject;
            this.studentAnswer['student_content_id'] = id.student_content_id;
            this.studentName = this.studentAnswer.student_name;
            this.totalAns = [];
            this.areaInfo = [];
            let pdfpath;
            pdfpath = this.common.convertBase64(this.studentAnswer?.file_path);
            this.correctPdfPath = this.common.convertBase64(this.studentAnswer?.file_path);
            this.uploadAnswerPath = this.common.convertBase64(this.studentAnswer.upload_answer);
            if (this.studentAnswer.answer_sheet_annotation.length === 0) {
                this.totalSheetInfo = [];
                this.uploadAnswerPath.forEach((item) => this.totalSheetInfo.push([]));
            }
            else {
                this.totalSheetInfo = this.studentAnswer.answer_sheet_annotation;
            }
            this.answerSheetPath = this.webhost + '/' + this.uploadAnswerPath[0]?.original_image_url;
            this.correctAnswerKeyPath = this.common.convertBase64(this.studentAnswer.answerkey_path);
            if (pdfpath.length != 0) {
                this.studentAnswer.annotation.forEach((item) => {
                    item.isTeacherCorrection = false;
                });
                this.studentAnswer.student_annotation.forEach((item) => {
                    item.isTeacherCorrection = false;
                });
                this.areaInfo = [...this.studentAnswer.student_annotation,
                    ...this.studentAnswer.teacher_annotation, ...this.studentAnswer.annotation];
                this.dragQuestion = [...this.studentAnswer.question_annotation];
                if (this.studentAnswer.answer_sheet_annotation.length != 0) {
                    this.sheetInfo = this.studentAnswer.answer_sheet_annotation[0];
                }
                else {
                    this.sheetInfo = [];
                }
                // this.sheetInfo = this.studentAnswer.answer_sheet_annotation;
                console.log(this.sheetInfo, 'sheetInfo');
                this.pdfpath = pdfpath[0];
                if (pdfpath[0].original_image_url != undefined) {
                    this.common.downloadfilewithbytes(this.webhost + '/' + pdfpath[0]?.original_image_url)
                        .subscribe((filebytes) => {
                        this.pdfTemplate = filebytes;
                        this.functionCalled = true;
                        this.isPdfAvailable = true;
                    });
                }
                else {
                    this.functionCalled = true;
                    this.isPdfAvailable = false;
                }
                // this.pdfTemplate = this.webhost + '/' + this.pdfpath.original_image_url;
                // this.uploadAnswerPath = this.common.convertBase64(this.studentAnswer.upload_answer);
                this.correctAnswerKeyPath = this.common.convertBase64(this.studentAnswer.answerkey_path);
                // this.common.downloadfilewithbytes(this.webhost + '/' + this.uploadAnswerPath[0]?.original_image_url)
                //     .subscribe((filebytes: ArrayBuffer) => {
                //       this.answerSheetPath = filebytes;
                //     });
                this.anserPdfTemplate = this.webhost + '/' + this.correctAnswerKeyPath[0]?.original_image_url;
                // this.common.downloadfilewithbytes(this.webhost + '/' + this.correctAnswerKeyPath[0]?.original_image_url)
                //     .subscribe((filebytes: ArrayBuffer) => {
                //       this.anserPdfTemplate = filebytes;
                //     });
                if (this.studentAnswer.answers.length != 0) {
                    this.totalPoints = '';
                    this.totalPointsArray = [];
                    this.studentPoints = '';
                    this.totalFeedBack = '';
                    this.totalStudentFeedBack = '';
                    this.studentPointsArray = [];
                    for (let i = 0; i < this.studentAnswer.answers.length; i++) {
                        this.totalAns[i] = { heading: this.studentAnswer.answers[i].heading, section: [] };
                        for (let x = 0; x < this.studentAnswer.answers[i].section.length; x++) {
                            for (let j = 0; j < this.studentAnswer.answers[i].section[x].sub_questions.length; j++) {
                                const val = this.studentAnswer.answers[i].section[x].sub_questions[j].match_case == '1';
                                this.studentAnswer.answers[i].section[x].sub_questions[j].match_case = val;
                                const questionTypeId = this.studentAnswer.answers[i].section[x].sub_questions[j].question_type_id;
                                if (this.studentAnswer.answers[i].section[x].sub_questions[j].auto_grade == '1' && (this.studentAnswer.status == '4' || this.studentAnswer.status == '2')) {
                                    const ans = this.studentAnswer.answers[i].section[x].sub_questions[j].answer;
                                    const student_ans = this.studentAnswer.answers[i].section[x].sub_questions[j].student_answer;
                                    if (this.studentAnswer.answers[i].section[x].sub_questions[j].question_type_id != '54') {
                                        const correctAnswer = this.matchcase(ans, val, questionTypeId);
                                        const studentAnswer = this.matchcase([student_ans], val, questionTypeId);
                                        const enteredAnswer = correctAnswer.every((answer) => {
                                            return !studentAnswer.some((code) => code == answer);
                                        });
                                        this.studentAnswer.answers[i].section[x].sub_questions[j].enteredAnswer = !enteredAnswer;
                                        if (!enteredAnswer) {
                                            this.studentAnswer.answers[i].section[x].sub_questions[j].given_points = this.studentAnswer.answers[i].section[x].sub_questions[j].points;
                                            this.studentAnswer.answers[i].section[x].sub_questions[j].correction_status = '1';
                                        }
                                    }
                                    else {
                                        let allCorrect = true;
                                        for (let y = 0; y < ans.length; y++) {
                                            if (this.matchcase(ans[y].value, val, questionTypeId) != this.matchcase(student_ans[y], val, questionTypeId)) {
                                                allCorrect = false;
                                            }
                                        }
                                        if (allCorrect) {
                                            this.studentAnswer.answers[i].section[x].sub_questions[j].given_points = this.studentAnswer.answers[i].section[x].sub_questions[j].points;
                                            this.studentAnswer.answers[i].section[x].sub_questions[j].correction_status = '1';
                                        }
                                    }
                                    // if (this.studentAnswer.answers[i].section[x].sub_questions[j].question_type_id != '54') {
                                    //   if (ans == student_ans || this.matchcase(ans) == this.matchcase(student_ans)) {
                                    //     this.studentAnswer.answers[i].section[x].sub_questions[j].given_points = this.studentAnswer.answers[i].section[x].sub_questions[j].points;
                                    //   }
                                    // }
                                }
                                else if (this.studentAnswer.answers[i].section[x].sub_questions[j].auto_grade == '1' &&
                                    this.studentAnswer.status == '6' && this.studentAnswer.answers[i].section[x].sub_questions[j].question_type_id == '10') {
                                    const ans = this.studentAnswer.answers[i].section[x].sub_questions[j].answer;
                                    const student_ans = this.studentAnswer.answers[i].section[x].sub_questions[j].student_answer;
                                    const correctAnswer = this.matchcase(ans, val, questionTypeId);
                                    const studentAnswer = this.matchcase([student_ans], val, questionTypeId);
                                    const enteredAnswer = correctAnswer.every((answer) => {
                                        return !studentAnswer.some((code) => code == answer);
                                    });
                                    this.studentAnswer.answers[i].section[x].sub_questions[j].enteredAnswer = !enteredAnswer;
                                }
                                // auto grading ends //
                                this.totalPointsArray.push({ point: parseFloat(this.studentAnswer.answers[i].section[x].sub_questions[j].points) });
                                this.studentPointsArray.push({ point: parseFloat(this.studentAnswer.answers[i].section[x].sub_questions[j].given_points) });
                                this.totalAns[i].section.push(this.studentAnswer.answers[i].section[x].sub_questions[j]);
                            }
                        }
                        this.totalAns[i].section.forEach((item) => {
                            item.maxValErr = false;
                            item.isShow = true;
                        });
                        this.totalFeedBack = this.studentAnswer.feedback;
                        this.totalStudentFeedBack = this.studentAnswer.student_feedback;
                        if (this.studentAnswer.status == '2' || this.studentAnswer.status == '4') {
                            this.totalPoints = this.totalPointsArray.reduce((acc, value) => acc += value.point, 0);
                            this.studentPoints = this.studentPointsArray.reduce((acc, value) => acc += value.point, 0);
                        }
                        else {
                            this.totalPoints = this.studentAnswer.points;
                            this.studentPoints = this.studentAnswer.earned_points;
                        }
                    }
                    this.totalAnsSample = this.totalAns;
                    this.page = 0;
                    this.totalAns = [];
                    this.totalAns.push(this.totalAnsSample[this.page]);
                    if (this.totalAnsSample.length > 1 && this.totalAnsSample[this.page].section.length < 3) {
                        this.page += 1;
                        this.totalAns.push(this.totalAnsSample[this.page]);
                    }
                    if (this.scoreStatus != 2 && this.scoreStatus != 3) {
                        this.interval = setInterval(() => {
                            this.saveAnswer(2, 1, false);
                        }, 60000);
                    }
                }
                else {
                    this.showingType = '1';
                    this.buttonName = 'Assignments and uploads';
                    this.studentPoints = this.studentAnswer.earned_points;
                    this.totalPoints = this.studentAnswer.points;
                    this.totalFeedBack = this.studentAnswer.feedback;
                    this.totalStudentFeedBack = this.studentAnswer.student_feedback;
                }
                this.pageType = 2;
                if (this.pageType == 2) {
                    this.clickEvent();
                    this.filterForm.controls.studentlist.patchValue(this.studentAnswer.student_id);
                }
                // console.log(this.areaInfo[2]?.rectangleId, 'afterLOaded');
                // console.log(this.areaInfo, 'afterLOaded');
            }
            else {
                this.totalAns = this.studentAnswer.answers;
                this.totalAnsSample = this.studentAnswer.answers;
                this.pageType = 2;
                if (this.studentAnswer.answers.some(code => code.question_type_id == '55')) {
                    this.getFeedbackCount(this.studentAnswer.answers[0]);
                }
                console.log(this.studentAnswer.status, 'status');
                if (['2', '3', '4'].includes(this.studentAnswer.status)) {
                    this.autoGradeScratch(this.totalAns);
                }
                this.contentTimeTaken = this.studentAnswer.content_time_taken && this.studentAnswer.content_time_taken != '' &&
                    this.studentAnswer.content_time_taken != '0' ? parseInt(this.studentAnswer.content_time_taken) : 0;
                this.filterForm.controls.studentlist.patchValue(this.studentAnswer.student_id);
                this.totalFeedBack = this.studentAnswer.feedback;
                this.totalStudentFeedBack = this.studentAnswer.student_feedback;
                if (this.isSingleQnsWithFeedbackType) {
                    this.totalAns.forEach(value => {
                        value.points = this.selectedFeedBackIndex != '' ? this.selectedPreviousStudentAnswer.total_score : value.points;
                        value.given_points = this.selectedFeedBackIndex != '' ? this.selectedPreviousStudentAnswer.student_score : value.given_points;
                    });
                }
                this.totalPoints = this.totalAns.reduce((acc, value) => acc += parseFloat(value.points), 0);
                this.studentPoints = this.totalAns.reduce((acc, value) => acc += parseFloat(value.given_points), 0);
                this.totalAns.forEach((item) => {
                    item.maxValErr = false;
                    item.isShow = true;
                });
                this.totalAnsSample = this.totalAns;
                this.commonPatchValue(this.totalAns);
                if (successData.ResponseObject.is_test == '1' && calledType == '') {
                    this.getTestContentDetails(id, successData.ResponseObject, status);
                }
                this.getFeedBackList();
            }
        }
    }
    changeQuestionListFromTest(event) {
        console.log(event, 'event');
        // this.modalRef = this.modalService.open(this.feedbackStatus , {backdrop : 'static'});
        this.studentsAnswerList(event, this.testStatus, 'test');
    }
    saveFeedback() {
        if (this.newFeedBackEntered.trim() != '') {
            const payload = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                student_content_id: this.studentAnswer.student_content_id,
                school_id: this.auth.getSessionData('school_id'),
                feedback: this.newFeedBackEntered,
                version: this.selectedFeedBackIndex
            };
            this.auth.postService(payload, urls.addOverallFeedback).subscribe((successData) => {
                if (successData.IsSuccess) {
                    this.newFeedBackEntered = '';
                    this.toastr.success(successData.ResponseObject);
                    this.getFeedBackList();
                }
                else {
                    this.toastr.error(successData.ErrorObject);
                }
            });
        }
        else {
            this.toastr.error('Overall Feedback should not be empty');
        }
    }
    deleteConfirmation(value) {
        this.selectedTeacherFeedback = value;
        this.modalRef = this.modalService.open(this.deleteFeedBack);
    }
    updateOrDeleteFeedback(type, id) {
        // type -2 -> Update // type -4 -> Delete
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_content_id: this.studentAnswer.student_content_id,
            school_id: this.auth.getSessionData('school_id'),
            type,
            id
        };
        this.auth.postService(payload, urls.updateOverallFeedback).subscribe((successData) => {
            if (successData.IsSuccess) {
                this.modalRef?.close();
                this.toastr.success(successData.ResponseObject);
                this.getFeedBackList();
            }
            else {
                this.toastr.error(successData.ErrorObject);
            }
        });
    }
    getFeedBackList() {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_content_id: this.studentAnswer.student_content_id,
            school_id: this.auth.getSessionData('school_id'),
        };
        this.auth.postService(payload, urls.getOverallFeedback).subscribe((successData) => {
            if (successData.IsSuccess) {
                this.feedbackListData = successData.IsSuccess ? successData.ResponseObject : [];
                console.log(this.feedbackListData, 'feedbackListData');
            }
        });
    }
    getTestContentDetails(id, value, status) {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.classData.content_id,
            student_content_id: id.student_content_id,
            school_id: this.auth.getSessionData('school_id')
        };
        this.creator.testDetail(payload).subscribe((successData) => {
            this.testSuccess(successData, value, status);
        }, (error) => {
            console.error(error, 'error_lisDetails');
        });
    }
    testSuccess(successData, value, status) {
        if (successData.IsSuccess) {
            console.log(successData.ResponseObject, 'successData.ResponseObject');
            successData.ResponseObject[0]?.contents.forEach(item => item.name = item.subject + ' - ' + item.module_name);
            this.testContentDetail = successData.ResponseObject[0];
            this.studentsAnswerList(this.testContentDetail?.contents[0], status, 'test');
            this.testContentData = this.testContentDetail?.contents[0]?.content_id;
        }
    }
    commonPatchValue(arrayValue) {
        setTimeout(() => {
            for (let i = 0; i < arrayValue.length; i++) {
                if (arrayValue[i].question_type_id == 7) {
                    for (let j = 0; j < arrayValue[i].heading_option.length; j++) {
                        const index = i;
                        const row = arrayValue[i].heading_option[j].correctActive;
                        const column = arrayValue[i].heading_option[j].correctAnswer;
                        const final = index.toString() + row.toString() + column.toString();
                        document.getElementById('chooseMultipass' + final).setAttribute('checked', 'true');
                    }
                }
                else if (arrayValue[i].question_type_id == 9) {
                    for (let j = 0; j < arrayValue[i].answer.length; j++) {
                        for (let k = 0; k < arrayValue[i].answer[j].options.length; k++) {
                            if (arrayValue[i].answer[j].options[k].selected == 'true') {
                                document.getElementById(i + 'dropdownCorrect' + j).innerHTML = arrayValue[i].answer[j].options[k].listOption;
                            }
                        }
                    }
                    for (let j = 0; j < arrayValue[i].student_answer.length; j++) {
                        const val = arrayValue[i].student_answer[j].isSelected;
                        if (val !== '') {
                            document.getElementById(i + 'dropdownStudent' + j).innerHTML = arrayValue[i].answer[j].options[val].listOption;
                        }
                        else {
                            document.getElementById(i + 'dropdownStudent' + j).innerHTML = 'Student Not Answered';
                        }
                    }
                }
                if (arrayValue[i].question_type_id == 24) {
                    for (let j = 0; j < arrayValue[i].subQuestions.length; j++) {
                        for (let k = 0; k < arrayValue[i].subQuestions[j].heading_option.length; k++) {
                            const index1 = i;
                            const id = j;
                            const row1 = arrayValue[i].subQuestions[j].heading_option[k].correctActive;
                            const column1 = arrayValue[i].subQuestions[j].heading_option[k].correctAnswer;
                            const final1 = index1.toString() + id.toString() + row1.toString() + column1.toString();
                            document.getElementById('chooseMultipass1' + final1)?.setAttribute('checked', 'true');
                        }
                        const findIndex = this.listPassageDetails.findIndex(value => value.passage_id == arrayValue[i].subQuestions[j].passage_id);
                        arrayValue[i].subQuestions[j].passage = this.listPassageDetails[findIndex]?.passage ?? '';
                    }
                }
            }
            this.clickEvent();
        }, 3000);
    }
    get isSingleQnsWithFeedbackType() {
        return this.totalAns.length === 1 && this.totalAns.some(qns => qns.question_type_id === '55');
    }
    checkEnteredAnswer(value) {
        let correctAnswer;
        if (value.question_type_id == '1') {
            correctAnswer = value.answer.every((items, index) => {
                return !(items.correctActive == '1' && value.student_answer[index].isSelected == '');
            });
            value.given_points = correctAnswer ? value.points : 0;
        }
        else if (value.question_type_id == '2') {
            correctAnswer = value.answer.every((items, index) => {
                return !((items.correctActive == '1' && value.student_answer[index].isSelected == '') || (items.correctActive == '' && value.student_answer[index].isSelected != ''));
            });
            value.given_points = correctAnswer ? value.points : 0;
        }
        else if (value.question_type_id == '5') {
            correctAnswer = value.student_answer.every((items, index) => {
                return items.isSelected == value.heading_option[index].correctActive.toString();
            });
            value.given_points = correctAnswer ? value.points : 0;
        }
        else if (value.question_type_id == '7') {
            let pushArrayValue = [];
            value.student_answer.forEach((item) => {
                const splitedValue = item.isSelected != '' ? item.isSelected.split(',') : [];
                splitedValue.forEach((splitForEach) => {
                    pushArrayValue.push({
                        question: item.options,
                        isSelected: splitForEach
                    });
                });
            });
            const result = pushArrayValue.filter((o1) => {
                return !value.heading_option.some((o2) => {
                    return o1.question == o2.correctOption && o1.isSelected == o2.correctAnswer;
                });
            });
            correctAnswer = pushArrayValue.length == value.heading_option.length && result.length == 0;
            value.given_points = correctAnswer ? value.points : 0;
        }
        else if (value.question_type_id == '9') {
            correctAnswer = value.student_answer.every((item) => {
                return !(item.isSelected == '' || item.options[item.isSelected].selected != 'true');
            });
            value.given_points = correctAnswer ? value.points : 0;
        }
        else if (value.question_type_id == '10') {
            correctAnswer = value.student_answer.every((items) => {
                const enteredValue = items.options[0]?.value.trim().toLowerCase().split(' ').join('');
                return !(items.isSelected == '' || enteredValue != items.isSelected.trim().toLowerCase().split(' ').join(''));
            });
            value.given_points = correctAnswer ? value.points : 0;
        }
        else if (value.question_type_id == '16') {
            correctAnswer = value.answer.every((items, index) => {
                return items.correctAnswer == value.student_answer[index].options;
            });
            value.given_points = correctAnswer ? value.points : 0;
        }
        else if (value.question_type_id == '20') {
            if (value.student_answer[0]?.isSelected) {
                const enteredValue = value.student_answer[0]?.isSelected.trim().toLowerCase().split(' ').join('');
                correctAnswer = value.answer.some(answer => answer.correctAnswer.trim().toLowerCase().split(' ').join('') == enteredValue);
            }
            else {
                correctAnswer = false;
            }
            value.given_points = correctAnswer ? value.points : 0;
        }
    }
    getElapsedOverAllTime() {
        let totalSeconds = this.studentAnswer.content_time_taken && this.studentAnswer.content_time_taken != '' && this.studentAnswer.content_time_taken != '0'
            ? parseInt(this.studentAnswer.content_time_taken) : 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        if (totalSeconds >= 3600) {
            hours = Math.floor(totalSeconds / 3600);
            totalSeconds -= 3600 * hours;
        }
        if (totalSeconds >= 60) {
            minutes = Math.floor(totalSeconds / 60);
            totalSeconds -= 60 * minutes;
        }
        seconds = totalSeconds;
        seconds = seconds <= 9 ? '0' + seconds : seconds;
        hours = hours <= 9 ? '0' + hours : hours;
        minutes = minutes <= 9 ? '0' + minutes : minutes;
        return {
            hours,
            minutes,
            seconds
        };
    }
    getElapsedTime(value) {
        const timeTaken = value.question_type_id != '24' ? value.time_taken && value.time_taken != '' ? (value.time_taken ?? 0) : 0
            : value.subQuestions[0]?.time_taken && value.subQuestions[0]?.time_taken != '' ? (value.subQuestions[0]?.time_taken ?? 0) : 0;
        let totalSeconds = parseInt(timeTaken);
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        if (totalSeconds >= 3600) {
            hours = Math.floor(totalSeconds / 3600);
            totalSeconds -= 3600 * hours;
        }
        if (totalSeconds >= 60) {
            minutes = Math.floor(totalSeconds / 60);
            totalSeconds -= 60 * minutes;
        }
        seconds = totalSeconds;
        seconds = seconds <= 9 ? '0' + seconds : seconds;
        hours = hours <= 9 ? '0' + hours : hours;
        minutes = minutes <= 9 ? '0' + minutes : minutes;
        return {
            hours,
            minutes,
            seconds
        };
    }
    autoGradeScratch(arrayValue) {
        arrayValue.forEach((value) => {
            if (value.question_type_id != '24' && (this.studentAnswer.status == '2' ||
                (['3', '4'].includes(this.studentAnswer.status) && value.correction_status == '0'))) {
                this.checkEnteredAnswer(value);
            }
            else if (value.question_type_id == '24') {
                value.subQuestions.forEach((sub) => {
                    if ((this.studentAnswer.status == '2' || (['3', '4'].includes(this.studentAnswer.status) && sub.correction_status == '0'))) {
                        this.checkEnteredAnswer(sub);
                    }
                });
                value.given_points = value.subQuestions.reduce((acc, val) => acc += parseFloat(val.given_points), 0);
            }
        });
    }
    onScrollDown(event) {
        if ((this.page + 1) < this.totalAnsSample.length && this.sectionFilterVal == 'all') {
            this.page += 1;
            this.totalAns.push(this.totalAnsSample[this.page]);
            this.answerFiter();
            this.clickEvent();
        }
    }
    answerFiter() {
        this.totalAns.forEach((item) => {
            if (this.questionFilter == 'correct') {
                item.section.forEach((value) => {
                    value.isShow = value.points == value.given_points;
                });
            }
            else if (this.questionFilter == 'wrong') {
                item.section.forEach((value) => {
                    value.isShow = value.points != value.given_points;
                });
            }
            else {
                item.section.forEach((value) => {
                    value.isShow = true;
                });
            }
        });
    }
    onPageChange(data) {
        this.page = data;
        this.studentsAnswerList(this.classData, this.classData.status);
        window.scrollTo(0, 0);
        this.clickEvent();
        // this.save
        // this.saveAnswer('2', 'noExit');
    }
    async saveAnswer(id, type, loader) {
        if (loader) {
            this.commondata.showLoader(true);
        }
        let pdfpath;
        let filterArr = [];
        pdfpath = this.common.convertBase64(this.studentAnswer.file_path);
        if (pdfpath.length == 1 && this.totalAnsSample.length != 0 && this.sectionFilterVal == 'all') {
            for (let i = 0; i < this.totalAns.length; i++) {
                this.totalAnsSample[i] = this.totalAns[i];
            }
        }
        // this.areaInfo = this.areaInfo.filter(value => value.isTeacherCorrection == true);
        this.invalidData = false;
        this.dataMissing = false;
        this.invalidScore = false;
        if (parseInt(this.studentPoints) > parseInt(this.totalPoints)) {
            this.invalidScore = true;
        }
        let contentFormat = 1;
        if (type != 3 && type != 4) {
            if (pdfpath.length == 1) {
                contentFormat = 1;
                for (let i = 0; i < this.studentAnswer.answers.length; i++) {
                    for (let x = 0; x < this.studentAnswer.answers[i].section.length; x++) {
                        for (let j = 0; j < this.studentAnswer.answers[i].section[x].sub_questions.length; j++) {
                            const ans = this.studentAnswer.answers[i].section[x].sub_questions[j];
                            for (let k = 0; k < this.totalAnsSample[i].section.length; k++) {
                                if (this.totalAnsSample[i].section[k].sub_question_no == ans.sub_question_no) {
                                    if (this.totalAnsSample[i].section[k].givenpoints != undefined) {
                                        ans.given_points = this.totalAnsSample[i].section[k].givenpoints;
                                    }
                                    if (this.totalAnsSample[i].section[k].feedback != undefined) {
                                        ans.feedback = this.totalAnsSample[i].section[k].feedback;
                                    }
                                }
                                if (this.totalAnsSample[i].section[k].maxValErr == true) {
                                    this.invalidData = true;
                                }
                            }
                        }
                    }
                }
                filterArr = parse(stringify(this.studentAnswer.answers));
                filterArr = filterArr.filter((val) => {
                    val.section = val.section.filter((item) => {
                        item.sub_questions = item.sub_questions.filter((sub) => {
                            if (sub.correction_status == '1') {
                                sub.correction_status = '2';
                                return true;
                            }
                            else {
                                return false;
                            }
                        });
                        return item.sub_questions.length !== 0;
                    });
                    return val.section.length !== 0;
                });
                this.totalAns.forEach((val) => {
                    val.section.forEach((item) => {
                        if (item.correction_status == '1') {
                            item.correction_status = '2';
                        }
                    });
                });
                console.log(filterArr, 'filtered array');
                console.log(this.studentAnswer.answers, 'studentAnswer.answers array');
                if (filterArr.length == 0 && !loader && contentFormat != 3) {
                    return false;
                }
            }
            else if (pdfpath.length == 0) {
                contentFormat = 3;
                this.studentAnswer.answers = this.totalAns;
                for (let i = 0; i < this.studentAnswer.answers.length; i++) {
                    console.log(this.studentAnswer.answers[i].given_points, 'this.studentAnswer.answers[i].given_points');
                    if (this.studentAnswer.answers[i].given_points === '') {
                        this.dataMissing = true;
                    }
                    if (this.studentAnswer.answers[i].maxValErr == true) {
                        this.dataMissing = true;
                    }
                }
            }
        }
        if (((!this.invalidData && !this.dataMissing && !this.invalidScore) || id == 2) && (type != 3 && type != 4)) {
            let answers;
            if (contentFormat == 3) {
                const keyName = ['editor_context', 'question', 'level', 'passage_id', 'passage_title', 'passage', 'resource',
                    'question_topic', 'sub_topic', 'question_standard_name', 'subject_name', 'answer_instructions',
                    'rough_image_url', 'rough_image_thumb_url', 'student_answer_image', 'jiixdata', 'roughdata',
                    'student_roughdata', 'multiple_response', 'exact_match', 'hint', 'explanation', 'word_limit',
                    'scoring_instruction', 'source', 'target', 'has_sub_question', 'editor_answer', 'editor_type'];
                const removeKeys = (obj) => {
                    keyName.forEach((key) => {
                        if (key in obj) {
                            delete obj[key];
                        }
                    });
                    return obj;
                };
                answers = this.studentAnswer.answers.map((question) => {
                    const newQuestion = JSON.parse(JSON.stringify(question));
                    if (newQuestion.question_type_id == '24') {
                        delete newQuestion.editor_context;
                        newQuestion.subQuestions = newQuestion.subQuestions.map(subQ => removeKeys(subQ));
                    }
                    else {
                        removeKeys(newQuestion);
                    }
                    return newQuestion;
                });
            }
            else {
                answers = filterArr;
            }
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                student_id: this.studentAnswer.student_id,
                content_id: this.studentAnswer.content_id,
                student_content_id: this.studentAnswer.student_content_id,
                content_format: contentFormat,
                class_id: this.classData.class_id,
                type: id,
                answers,
                points: this.totalPoints,
                feedback: this.totalFeedBack,
                earned_points: this.studentPoints,
            };
            if (this.testContentDetail) {
                data['is_test'] = '1';
                data['module_id'] = this.testContentData;
            }
            this.teacher.saveCorrection(data).subscribe((successData) => {
                this.correctionSuccess(successData, data, type, loader, pdfpath, id);
            }, (error) => {
                this.correctionFailure(error);
            });
        }
        else if (type == 3 || type == 4) {
            if (!this.invalidScore) {
                const data = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    student_id: this.studentAnswer.student_id,
                    content_id: this.studentAnswer.content_id,
                    student_content_id: this.studentAnswer.student_content_id,
                    class_id: this.classData.class_id,
                    type: id,
                    answers: [],
                    points: this.totalPoints,
                    feedback: this.totalFeedBack,
                    earned_points: this.studentPoints
                };
                if (this.testContentDetail) {
                    data['is_test'] = '1';
                    data['module_id'] = this.testContentData;
                }
                this.teacher.saveCorrection(data).subscribe((successData) => {
                    this.correctionSuccess(successData, data, type, loader, pdfpath, id);
                }, (error) => {
                    this.correctionFailure(error);
                });
            }
            else if (loader) {
                this.commondata.showLoader(false);
                if (type == 2 || type == 3) {
                    this.toastr.error('Invalid obtained points', 'Release Score failed');
                }
                else {
                    this.toastr.error('Invalid obtained points', 'Saving correction failed');
                }
            }
        }
        else if (this.invalidData == true && loader) {
            this.commondata.showLoader(false);
            if (type == 2 || type == 3) {
                this.toastr.error('Invalid correction', 'Release Score failed');
            }
            else {
                this.toastr.error('Invalid correction', 'Saving correction failed');
            }
        }
        else if (this.dataMissing === true && loader) {
            this.commondata.showLoader(false);
            if (type == 2 || type == 3) {
                this.toastr.error('Please correct all the questions', 'Release Score failed');
            }
            else {
                this.toastr.error('Please correct all the questions', 'Saving correction failed');
            }
        }
        else if (this.invalidScore) {
            this.commondata.showLoader(false);
            if (type == 2 || type == 3) {
                this.toastr.error('Obtained points must be lesser than Total points', 'Release Score failed');
            }
            else {
                this.toastr.error('Obtained points must be lesser than Total points', 'Saving correction failed');
            }
        }
    }
    correctionSuccess(successData, data, type, loader, pdfpath, id) {
        this.commondata.showLoader(false);
        if (successData.IsSuccess) {
            this.studentList.forEach((item) => {
                if (item.student_id === data.student_id) {
                    item.saved = true;
                }
            });
            if (this.studentAnswer.answers && pdfpath.length == 1) {
                this.studentAnswer.answers.forEach((value) => {
                    value.section.forEach((sec) => {
                        sec.sub_questions.forEach((item) => {
                            if (item.answer_attended == '1') {
                                item.answer_attended = '2';
                            }
                        });
                    });
                });
            }
            if (loader) {
                if (this.testContentDetail) {
                    if ([2, 3].indexOf(type) > -1) {
                    }
                    else {
                        const testDetailsIndex = this.testContentDetail.contents.findIndex((value) => value.content_id == this.testContentData);
                        console.log(testDetailsIndex, 'index');
                        if (testDetailsIndex == this.testContentDetail.contents.length - 1) {
                            this.toastr.success(successData.ResponseObject, 'Saved');
                            if (this.showstudentContentlist) {
                                this.route.navigate(['/student-content/list-content/old']);
                                this.auth.removeSessionData('student-content');
                            }
                            else {
                                this.pageType = 1;
                                const datum = JSON.parse(this.auth.getSessionData('correctionDetail'));
                                this.studentsDetails(datum, 0);
                                this.sectionFilterVal = 'all';
                            }
                            clearInterval(this.interval);
                        }
                        else {
                            if (id == 1) {
                                this.testContentData = this.testContentDetail?.contents[testDetailsIndex + 1].content_id;
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                this.studentsAnswerList(this.testContentDetail?.contents[testDetailsIndex + 1], this.testStatus, 'test');
                            }
                            else {
                                this.toastr.success(successData.ResponseObject, 'Saved');
                                if (this.showstudentContentlist) {
                                    this.route.navigate(['/student-content/list-content/old']);
                                    this.auth.removeSessionData('student-content');
                                }
                                else {
                                    this.pageType = 1;
                                    const datum = JSON.parse(this.auth.getSessionData('correctionDetail'));
                                    this.studentsDetails(datum, 0);
                                    this.sectionFilterVal = 'all';
                                }
                                clearInterval(this.interval);
                            }
                        }
                    }
                }
                else {
                    if (type == 2 || type == 3) {
                        this.releaseScore();
                    }
                    else {
                        this.toastr.success(successData.ResponseObject, 'Saved');
                    }
                    if (this.showstudentContentlist) {
                        this.route.navigate(['/student-content/list-content/old']);
                        this.auth.removeSessionData('student-content');
                    }
                    else {
                        this.pageType = 1;
                        const datum = JSON.parse(this.auth.getSessionData('correctionDetail'));
                        this.studentsDetails(datum, 0);
                        this.sectionFilterVal = 'all';
                    }
                    clearInterval(this.interval);
                }
            }
        }
    }
    correctionFailure(error) {
        this.commondata.showLoader(false);
        this.toastr.error(error, 'Failed');
    }
    saveAndRelease(id) {
        this.releaseStudent = [];
        this.releaseStudentContentId = [];
        if (id == 1) {
            this.studentList.forEach((item) => {
                if (item.checked == true) {
                    this.releaseStudent.push(item.student_id);
                    this.releaseStudentContentId.push(item.student_content_id);
                }
            });
            this.releaseScore();
        }
        else if ([2, 3].indexOf(id) > -1) {
            if (this.testContentDetail) {
                this.modalRef = this.modalService.open(this.releaseScoreAlert);
            }
            else {
                this.saveAnswer(1, id, true);
                this.releaseStudent.push(this.studentAnswer.student_id);
                this.releaseStudentContentId.push(this.studentAnswer.student_content_id);
            }
        }
    }
    async submitAllTestAndReleaseScore() {
        this.modalRef.close();
        this.releaseStudent.push(this.studentAnswer.student_id);
        this.releaseStudentContentId.push(this.studentAnswer.student_content_id);
        this.modalRef = this.modalService.open(this.loaderStatus);
        const promises = [];
        for (const content of this.testContentDetail.contents) {
            promises.push(this.studentsAnswerListForTest(content, this.classData.status));
        }
        await Promise.all(promises);
        await this.releaseScore();
        await this.modalRef?.close();
    }
    studentsAnswerListForTest(id, status) {
        return new Promise((resolve, reject) => {
            this.functionCalled = false;
            this.scoreStatus = status;
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                content_id: this.classData.content_id,
                content_format: this.classData.content_format,
                class_id: this.classData.class_id,
                student_id: this.testContentDetail.student_id,
                student_content_id: id.student_content_id,
                is_test: '1',
                module_id: id.content_id
            };
            this.teacher.studentAnswerList(data).subscribe((successData) => {
                this.answerListSuccessForTest(successData, id, resolve, reject);
            }, (error) => {
                reject('Question list API failed');
            });
        });
    }
    answerListSuccessForTest(successData, id, resolve, reject) {
        if (successData.IsSuccess) {
            this.subs.forEach(val => val.unsubscribe());
            const studentAnswer = successData.ResponseObject;
            studentAnswer['student_content_id'] = id.student_content_id;
            this.studentName = studentAnswer.student_name;
            let pdfpath;
            pdfpath = this.common.convertBase64(studentAnswer?.file_path);
            if (pdfpath.length != 0) {
            }
            else {
                this.pageType = 2;
                let studentPoints = 0;
                let answers = [];
                let totalFeedBack = '';
                const totalPoints = studentAnswer.answers.reduce((acc, value) => acc += parseFloat(value.points), 0);
                if (this.testContentData == studentAnswer.answers[0]?.content_id) {
                    answers = this.totalAns;
                    studentPoints = this.totalAns.reduce((acc, value) => acc += parseFloat(value.given_points), 0);
                    totalFeedBack = this.totalFeedBack;
                }
                else {
                    answers = studentAnswer.answers;
                    totalFeedBack = studentAnswer.feedback;
                    if (['2', '3', '4'].includes(studentAnswer.status)) {
                        this.autoGradeScratch(answers);
                    }
                }
                this.filterForm.controls.studentlist.patchValue(studentAnswer.student_id);
                const totalStudentFeedBack = studentAnswer.student_feedback;
                studentAnswer.answers.forEach((item) => {
                    item.maxValErr = false;
                    item.isShow = true;
                });
                studentPoints = studentAnswer.answers.reduce((acc, value) => acc += parseFloat(value.given_points), 0);
                const data = {
                    answers,
                    points: totalPoints,
                    feedback: totalFeedBack,
                    earned_points: studentPoints,
                };
                console.log(data, 'answer_service_payload');
                this.saveAnswerForTest(1, 2, false, resolve, reject, id, data);
            }
        }
        else {
            reject();
        }
    }
    async saveAnswerForTest(id, type, loader, resolve, reject, value, dataValue) {
        let dataMissing = false;
        const invalidScore = parseInt(this.studentPoints) > parseInt(this.totalPoints);
        for (let i = 0; i < dataValue.answers.length; i++) {
            if (dataValue.answers[i].given_points === '') {
                dataMissing = true;
            }
            if (dataValue.answers[i].maxValErr == true) {
                dataMissing = true;
            }
        }
        const keyName = ['editor_context', 'question', 'level', 'passage_id', 'passage_title', 'passage', 'resource',
            'question_topic', 'sub_topic', 'question_standard_name', 'subject_name', 'answer_instructions',
            'rough_image_url', 'rough_image_thumb_url', 'student_answer_image', 'jiixdata', 'roughdata',
            'student_roughdata', 'multiple_response', 'exact_match', 'hint', 'explanation', 'word_limit',
            'scoring_instruction', 'source', 'target', 'has_sub_question', 'editor_answer', 'editor_type'];
        const removeKeys = (obj) => {
            keyName.forEach((key) => {
                if (key in obj) {
                    delete obj[key];
                }
            });
            return obj;
        };
        const answers = dataValue.answers.map((question) => {
            const newQuestion = JSON.parse(JSON.stringify(question));
            if (newQuestion.question_type_id == '24') {
                delete newQuestion.editor_context;
                newQuestion.subQuestions = newQuestion.subQuestions.map(subQ => removeKeys(subQ));
            }
            else {
                removeKeys(newQuestion);
            }
            return newQuestion;
        });
        if (((!dataMissing && !invalidScore) || id == 2) && (type != 3 && type != 4)) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                student_id: this.studentAnswer.student_id,
                content_id: this.testContentDetail.content_id,
                student_content_id: this.studentAnswer.student_content_id,
                content_format: '3',
                class_id: this.classData.class_id,
                type: id,
                answers,
                points: dataValue.points,
                feedback: dataValue.feedback,
                earned_points: dataValue.earned_points,
                is_test: '1',
                module_id: value.content_id
            };
            this.teacher.saveCorrection(data).subscribe((successData) => {
                resolve();
            }, (error) => {
                reject();
            });
        }
        else if (loader) {
            if (type == 2 || type == 3) {
                this.toastr.error('Invalid correction', 'Release Score failed');
            }
            else {
                this.toastr.error('Invalid correction', 'Saving correction failed');
            }
            reject();
        }
        else if (this.dataMissing === true && loader) {
            if (type == 2 || type == 3) {
                this.toastr.error('Please correct all the questions', 'Release Score failed');
            }
            else {
                this.toastr.error('Please correct all the questions', 'Saving correction failed');
            }
            reject();
        }
        else if (this.invalidScore) {
            if (type == 2 || type == 3) {
                this.toastr.error('Obtained points must be lesser than Total points', 'Release Score failed');
            }
            else {
                this.toastr.error('Obtained points must be lesser than Total points', 'Saving correction failed');
            }
            reject();
        }
    }
    releaseScore() {
        if (this.releaseStudent.length > 0) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                student_id: this.releaseStudent,
                content_id: this.studentAnswer && !this.testContentDetail ? this.studentAnswer.content_id : this.classData.content_id,
                student_content_id: this.releaseStudentContentId,
                class_id: this.classData.class_id,
                release_score: '1'
            };
            this.teacher.releaseScore(data).subscribe((successData) => {
                this.releaseScoreSuccess(successData);
            }, (error) => {
                this.toastr.error(error, 'Failed');
            });
        }
        else {
            this.toastr.error('Select atleast one student');
        }
    }
    releaseScoreSuccess(successData) {
        if (successData.IsSuccess) {
            if (this.pageType == 1) {
                const datum = JSON.parse(this.auth.getSessionData('correctionDetail'));
                this.studentsDetails(datum, 0);
            }
            else {
                if (this.showstudentContentlist) {
                    this.route.navigate(['/student-content/list-content/old']);
                    this.auth.removeSessionData('student-content');
                }
                else {
                    this.pageType = 1;
                    const datum = JSON.parse(this.auth.getSessionData('correctionDetail'));
                    this.studentsDetails(datum, 0);
                    this.sectionFilterVal = 'all';
                }
                clearInterval(this.interval);
            }
            this.toastr.success(successData.ResponseObject, 'Score released');
        }
    }
    saveCorrectionAnnotation() {
        console.log(this.studentAnswer, 'this.studentAnswer');
        console.log(this.classData, 'this.classData');
        const val = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.studentAnswer.school_id,
            content_id: this.studentAnswer.content_id,
            class_id: this.classData.class_id,
            student_id: this.studentAnswer.student_id,
            student_content_id: this.studentAnswer.student_content_id,
            annotation: this.areaInfo,
            type: '1'
        };
        this.teacher.saveTeacherCorrectionAnnotation(val).subscribe((successData) => {
            this.AnnotateSuccess(successData);
        }, (error) => {
            console.log(error);
        });
    }
    AnnotateSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(successData.isSuccess);
        }
    }
    saveAnswerAnnotation() {
        const val = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.studentAnswer.school_id,
            content_id: this.studentAnswer.content_id,
            class_id: this.classData.class_id,
            student_content_id: this.studentAnswer.student_content_id,
            student_id: this.studentAnswer.student_id,
            answer_sheet_annotation: this.totalSheetInfo,
        };
        this.teacher.saveAnswerSheetAnnotation(val).subscribe((successData) => {
            this.answerSheetSuccess(successData);
        }, (error) => {
            console.log(error);
        });
    }
    answerSheetSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(successData.isSuccess);
        }
    }
    /// number validation///
    numberValidate(event) {
        this.validationService.numberValidate(event);
    }
    markValidation(event, high, i, j, type) {
        let val = parseFloat(event.target.value);
        let pt = parseFloat(high);
        if (val > pt) {
            if (type == 'scratch') {
                this.totalAns[i].maxValErr = true;
            }
            else if (type == 'passage') {
                this.totalAns[i].subQuestions[j].maxValErr = true;
            }
            else {
                this.totalAns[i].section[j].maxValErr = true;
            }
        }
        else {
            if (type == 'scratch') {
                this.totalAns[i].maxValErr = false;
            }
            else if (type == 'passage') {
                this.totalAns[i].subQuestions[j].maxValErr = false;
            }
            else {
                this.totalAns[i].section[j].maxValErr = false;
            }
        }
    }
    listSelect(event, id) {
        this.studentList[id].checked = !event;
    }
    deSelect(event) {
        if (event.target.checked) {
            this.studentList.forEach((item) => {
                if (item.status == 5 || item.status == 3) {
                    item.checked = true;
                }
            });
        }
        else {
            this.studentList.forEach((item) => {
                item.checked = false;
            });
        }
    }
    sectionFilter(event) {
        const scroll = document.getElementById('scrollinnnersection');
        scroll.scrollTo(0, 0);
        if (event.target.value == 'all') {
            this.page = 0;
            this.totalAns = [];
            if (this.totalAnsSample.length > 2) {
                for (let i = 0; i < 3; i++) {
                    this.page = i;
                    this.totalAns.push(this.totalAnsSample[this.page]);
                }
            }
            else {
                this.totalAns = [...this.totalAnsSample];
            }
            // this.totalAns.push(this.totalAnsSample[this.page]);
            // if (this.totalAnsSample.length > 1 && this.totalAnsSample[this.page].section.length < 3) {
            //   this.page += 1;
            //   this.totalAns.push(this.totalAnsSample[this.page]);
            // }
        }
        else {
            this.totalAns = [this.totalAnsSample[parseInt(event.target.value)]];
        }
        this.answerFiter();
    }
    givePoints(val, item, type, index, id) {
        item.correction_status = '1';
        console.log(item, 'correction');
        if (val == 'true') {
            item.given_points = item.points;
        }
        else {
            if (this.correctPdfPath?.length == 0 && item.question_type_id == '55') {
                item.given_points = this.previousFeedBack[0]?.student_score ?? 0;
            }
            else {
                item.given_points = 0;
            }
        }
        if (type == 'scratch') {
            item.correction_status = '2';
            this.studentPoints = this.totalAns.reduce((acc, value) => acc += parseFloat(value.given_points), 0);
        }
        else if (type == 'pdf') {
            let count = 0;
            console.log(this.totalAns, 'totalAns');
            for (let i = 0; i < this.totalAns.length; i++) {
                for (let j = 0; j < this.totalAns[i].section.length; j++) {
                    count += 1;
                    if (index == i && id == j) {
                        console.log(this.studentPointsArray[count - 1], 'enter studentIndex');
                        this.studentPointsArray[count - 1].point = parseFloat(item.given_points);
                    }
                }
            }
            this.studentPoints = this.studentPointsArray.reduce((acc, value) => acc += value.point, 0);
        }
        else {
            item.correction_status = '2';
            this.totalAns[index].given_points = this.totalAns[index].subQuestions.reduce((acc, value) => acc += parseFloat(value.given_points), 0);
            this.studentPoints = this.totalAns.reduce((acc, value) => acc += parseFloat(value.given_points), 0);
        }
    }
    getFeedbackLabel(feedback) {
        if (feedback.student_score >= 30) {
            return { label: 'Exceptional' };
        }
        else if (feedback.student_score > 20 && feedback.student_score <= 29) {
            return { label: 'Good' };
        }
        else {
            return { label: 'Improve' };
        }
    }
    getPoints(event, index, id, type) {
        if (type == 'scratch') {
            if (event.target.value != '') {
                this.totalAns[index].correction_status = '2';
                this.totalAns[index].given_points = parseFloat(event.target.value);
                this.studentPoints = this.totalAns.reduce((acc, value) => acc += parseFloat(value.given_points), 0);
            }
        }
        else if (type == 'passage') {
            if (event.target.value != '') {
                this.totalAns[index].correction_status = '2';
                this.totalAns[index].subQuestions[id].given_points = parseFloat(event.target.value);
                this.totalAns[index].given_points = this.totalAns[index].subQuestions.reduce((acc, value) => acc += parseFloat(value.given_points), 0);
                this.studentPoints = this.totalAns.reduce((acc, value) => acc += parseFloat(value.given_points), 0);
            }
        }
        else {
            if (event.target.value != '') {
                this.totalAns[index].section[id].givenpoints = event.target.value;
                this.totalAns[index].section[id].correction_status = '1';
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
    }
    getFeedback(event, i, j) {
        this.totalAns[i].section[j].feedback = event.target.value;
        this.totalAns[i].section[j].correction_status = '1';
    }
    cfsGetFeedback(event, i) {
        this.totalAns[i].feedback = event.target.value;
    }
    cfsGetPassageFeedback(event, i, j) {
        this.totalAns[i].subQuestions[j].feedback = event.target.value;
    }
    getDelete(event) {
        this.deleteAnnatation = event;
    }
    getAnnotation(event) {
        this.areaInfo = event;
        this.saveCorrectionAnnotation();
        let other = [...this.studentAnswer.annotation, ...this.studentAnswer.student_annotation];
        other.forEach((item) => {
            item.isTeacherCorrection = false;
        });
        this.areaInfo = [...this.areaInfo, ...other];
    }
    pdfshow() {
        this.showpdf = !this.showpdf;
        if (this.showpdf == true) {
            this.buttonName = 'Hide PDF';
        }
        else {
            this.buttonName = 'Show PDF';
            this.answerSheet = false;
        }
    }
    splitMultiChoose(val, index) {
        if (val != '') {
            val = val.toString();
            let value = val.split(',');
            for (let i = 0; i < value.length; i++) {
                if (value[i] == index) {
                    return true;
                }
            }
        }
        else {
            return false;
        }
    }
    close() {
        this.modalRef.close();
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
    static { this.ɵfac = function CorrectionPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CorrectionPageComponent)(i0.ɵɵdirectiveInject(i1.NgbModalConfig), i0.ɵɵdirectiveInject(i2.ConfigurationService), i0.ɵɵdirectiveInject(i3.DomSanitizer), i0.ɵɵdirectiveInject(i4.TeacherService), i0.ɵɵdirectiveInject(i5.FormBuilder), i0.ɵɵdirectiveInject(i1.NgbModal), i0.ɵɵdirectiveInject(i6.AuthService), i0.ɵɵdirectiveInject(i7.CommonDataService), i0.ɵɵdirectiveInject(i8.NavService), i0.ɵɵdirectiveInject(i9.CommonService), i0.ɵɵdirectiveInject(i10.Router), i0.ɵɵdirectiveInject(i11.ValidationService), i0.ɵɵdirectiveInject(i12.SseClient), i0.ɵɵdirectiveInject(i13.ToastrService), i0.ɵɵdirectiveInject(i14.CreatorService), i0.ɵɵdirectiveInject(i15.NewsubjectService), i0.ɵɵdirectiveInject(i16.StudentService), i0.ɵɵdirectiveInject(i17.ContentdetailService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CorrectionPageComponent, selectors: [["app-correction-page"]], viewQuery: function CorrectionPageComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
            i0.ɵɵviewQuery(_c4, 5);
            i0.ɵɵviewQuery(_c5, 5);
            i0.ɵɵviewQuery(_c6, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pdfPage = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteClass = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteAlert = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.workArea = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.loaderStatus = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.releaseScoreAlert = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteFeedBack = _t.first);
        } }, hostBindings: function CorrectionPageComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function CorrectionPageComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, i0.ɵɵresolveWindow);
        } }, decls: 32, vars: 18, consts: [["class", ""], ["deleteAlert", ""], ["workArea", ""], ["loaderStatus", ""], ["releaseScoreAlert", ""], ["deleteFeedBack", ""], [1, "container-fluid"], [1, "card", "p-3"], [1, "row"], [1, "col-md-12", "d-flex", "justify-content-between"], ["class", "group-btn col-md-7 px-0", 4, "ngIf"], [3, "class", 4, "ngIf"], ["class", "col-md-3", 4, "ngIf"], ["class", "btn btn-outline-primary pull-right ml-3", 3, "routerLink", 4, "ngIf"], ["class", "btn btn-primary pull-right mx-2", 3, "click", 4, "ngIf"], ["class", "btn btn-primary pull-right mx-2", 3, "hidden", "click", 4, "ngIf"], ["class", "btn btn-outline-primary pull-right ml-2", 3, "click", 4, "ngIf"], ["class", "text-center position-absolute custom-alert", 3, "hidden", 4, "ngIf"], ["class", "mx-3 my-2 bg-primary w-100", 4, "ngIf"], ["class", "col-md-12 d-flex align-items-center justify-content-between", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "group-btn", "col-md-7", "px-0"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "ngClass"], [1, "font-weight-bold"], [1, "content-heading-name"], [1, "mb-0"], [1, "row", "justify-content-center", "timer_button", "px-2", "py-1"], ["class", "w-auto text-center", 4, "ngIf"], ["class", "w-auto mx-2", "style", "margin-top: 2px", 4, "ngIf"], [1, "w-auto", "text-center"], ["style", "font-size: 24px", "class", "mb-0", 4, "ngIf"], [1, "color-primary", "mb-0", 2, "font-size", "12px"], [1, "w-auto", "mx-2", 2, "margin-top", "2px"], [1, "mb-0", "font-weight-bold"], [1, "mb-0", 2, "font-size", "24px"], [1, "col-md-3"], [1, "form-control", 3, "change"], ["value", "all"], ["value", "correct"], ["value", "wrong"], [1, "btn", "btn-outline-primary", "pull-right", "ml-3", 3, "routerLink"], [1, "btn", "btn-primary", "pull-right", "mx-2", 3, "click"], [1, "btn", "btn-primary", "pull-right", "mx-2", 3, "click", "hidden"], [1, "btn", "btn-outline-primary", "pull-right", "ml-2", 3, "click"], [1, "text-center", "position-absolute", "custom-alert", 3, "hidden"], [1, "mb-0", "border-info", "para"], [1, "mx-3", "my-2", "bg-primary", "w-100"], [1, "col-md-12", "d-flex", "align-items-center", "justify-content-between"], [1, "content-heading"], [1, "d-flex", "align-items-center", "justify-content-end"], [1, "btn-sm", "btn-outline-primary", "pull-right", "mr-2", 3, "click", "ngClass"], [1, "fa", "fa-bars"], [1, "btn-sm", "btn-outline-primary", "pull-right", 2, "margin-right", "10px", 3, "click", "ngClass"], [1, "fa", "fa-th-large"], ["class", "checkbox_animated mb-1", "id", "selectAll", "type", "checkbox", 3, "click", 4, "ngIf"], ["class", "mb-0", "style", "color: #8e3996", 4, "ngIf"], ["id", "selectAll", "type", "checkbox", 1, "checkbox_animated", "mb-1", 3, "click"], [1, "mb-0", 2, "color", "#8e3996"], [1, "col-md-4", "mt-2"], [1, "col-md-12", "d-flex", "justify-content-start", "px-0"], ["class", "btn-group mr-3 px-0", 4, "ngIf"], ["class", "col-md-6 align-self-center px-0", 4, "ngIf"], ["class", "col-md-8 mt-2 p-0", 4, "ngIf"], [1, "btn-group", "mr-3", "px-0"], ["aria-expanded", "false", "aria-haspopup", "true", "data-toggle", "dropdown", "type", "button", 1, "btn-outline-primary", "btn", "dropdown-toggle"], [1, "dropdown-menu", "multi-level"], [1, "dropdown-item", "dropdown-link", 3, "click"], [1, "dropdown-submenu", 3, "hidden"], ["href", "#", "tabindex", "-1"], [1, "dropdown-menu"], ["class", "dropdown-item dropdown-link", 3, "click", 4, "ngFor", "ngForOf"], ["class", "dropdown-divider", 4, "ngIf"], ["class", "dropdown-item dropdown-link", 3, "click", 4, "ngIf"], [1, "dropdown-divider"], [1, "col-md-6", "align-self-center", "px-0"], [1, "col-12", "px-0"], ["id", "download", "type", "checkbox", 1, "align-self-center", "form-span", "cursor", "mr-2", 2, "margin-top", "0.6rem", 3, "change"], ["for", "download", 1, "color-primary"], [1, "col-md-8", "mt-2", "p-0"], ["class", "col-md-6 px-0", 4, "ngIf"], [1, "col-md-6", "d-flex", "px-0", "justify-content-end", "align-items-center"], ["class", "col-6 px-0", 4, "ngIf"], ["class", "col-md-6 px-0 ml-2 pull-right", 3, "formGroup", 4, "ngIf"], [1, "col-md-6", "px-0"], ["class", "form-control", 3, "ngModel", "change", "ngModelChange", 4, "ngIf"], [1, "form-control", 3, "change", "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "col-6", "px-0"], ["bindLabel", "name", "bindValue", "content_id", "placeholder", "Content List", 3, "change", "ngModelChange", "items", "ngModel", "clearable"], ["ng-option-tmp", ""], [3, "title"], [1, "col-md-6", "px-0", "ml-2", "pull-right", 3, "formGroup"], ["bindLabel", "student_name", "bindValue", "student_id", "formControlName", "studentlist", "typeToSearchText", "", 3, "change", "items"], [1, "col-md-12"], ["class", "row d-flex justify-content-center list-card mt-5", 4, "ngIf"], ["class", "row d-flex", 4, "ngIf"], [1, "row", "d-flex", "justify-content-center", "list-card", "mt-5"], [1, "col-4"], [1, "nodataList"], [1, "row", "d-flex"], ["class", "col-12 col-md-6 col-lg-4", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "col-lg-4"], [1, "card"], [1, "card-body"], [1, "col-md-12", "d-flex", "align-items-center", "justify-content-between", "mx-0", "my-2"], [1, "d-flex", "align-items-center", "justify-content-start"], ["alt", "", "class", "rounded-circle image-size", "src", "assets/images/digital-product/student.png", 4, "ngIf"], ["class", "rounded-circle image-size", "alt", "", 3, "src", 4, "ngIf"], [1, "pl-4", "m-0"], ["name", "chk", "type", "checkbox", 1, "checkbox_animated", "pull-right", "mr-2", "mb-1", 3, "click", "ngModelChange", "ngModel", "disabled"], [1, "col-md-12", "d-flex", "justify-content-start", "mx-0", "mt-2"], [2, "color", "#8F008A"], [1, "col-md-12", "d-flex", "justify-content-between", "mx-0", "mt-2"], [1, "right"], [1, "col-md-12", "d-flex", "align-items-center", "justify-content-between", "mx-0", "mt-3", "mb-2"], [1, "mt-2", "d-flex"], ["style", "color: #1597bb", 4, "ngIf"], ["style", "color: #ffc478", 4, "ngIf"], ["style", "color: #4f8a8b", 4, "ngIf"], [1, "d-flex", "align-items-center"], ["title", "View Analytics", "style", "font-size: 20px", "class", "fa fa-bar-chart color-primary mr-1 cursor", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["alt", "", "class", "mr-2", "src", "assets/images/ristaschool/Pending.png", "title", "Rework", 3, "click", 4, "ngIf"], [3, "click", "disabled"], ["alt", "", "src", "assets/images/digital-product/student.png", 1, "rounded-circle", "image-size"], ["alt", "", 1, "rounded-circle", "image-size", 3, "src"], [2, "color", "#1597bb"], [2, "color", "#ffc478"], [2, "color", "#4f8a8b"], ["title", "View Analytics", "aria-hidden", "true", 1, "fa", "fa-bar-chart", "color-primary", "mr-1", "cursor", 2, "font-size", "20px", 3, "click"], ["alt", "", "src", "assets/images/ristaschool/Pending.png", "title", "Rework", 1, "mr-2", 3, "click"], [1, "col-12"], [1, "card-body", "row"], [1, "col-1", "d-flex", "justify-content-center"], ["id", "selectAllAlt", "type", "checkbox", 1, "checkbox_animated", "ml-5", "mb-0", 3, "click"], [1, "col-3", "pl-0", "d-flex", "justify-content-center"], [1, "listview"], [1, "col-2", "d-flex", "justify-content-center"], ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "col-1", "d-flex", "justify-content-center", "align-items-center", "mx-o", "my-2"], ["name", "chk", "type", "checkbox", 1, "checkbox_animated", "pull-right", "ml-5", "mb-1", 3, "click", "ngModelChange", "ngModel", "disabled"], [1, "col-3", "d-flex", "justify-content-center", "align-items-center", "mx-0", "my-2"], [1, "col-8"], [1, "col-1", "d-flex", "justify-content-center", "align-items-center"], [1, "col-2", "d-flex", "justify-content-center", "align-items-center", "mx-0"], ["title", "marks", 1, "right"], [1, "col-1", "d-flex", "justify-content-center", "align-items-center", "mx-0"], ["title", "View Analytics", "style", "font-size: 20px", "class", "fa fa-bar-chart color-primary ml-2 cursor", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["alt", "", "class", "ml-2", "src", "assets/images/ristaschool/Pending.png", "title", "Rework", 3, "click", 4, "ngIf"], [1, "col-2", "d-flex", "justify-content-center", "align-items-center", "mx-0", "my-2"], [4, "ngIf"], ["title", "Submitted Date", 1, "cursor"], ["title", "Score Released Date", 1, "cursor"], ["title", "View Analytics", "aria-hidden", "true", 1, "fa", "fa-bar-chart", "color-primary", "ml-2", "cursor", 2, "font-size", "20px", 3, "click"], ["alt", "", "src", "assets/images/ristaschool/Pending.png", "title", "Rework", 1, "ml-2", 3, "click"], ["class", "scrollPanel4 row", 4, "ngIf"], ["class", "col-md-12 scrollPanel4", 4, "ngIf"], [1, "scrollPanel4", "row"], ["class", "row mt-4", 4, "ngIf"], ["id", "custom-pdf-loader", "style", "height: 100vh;", 4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], [3, "getAnnotate", "getDragQues", "pdfPath", "toolHide", "userType", "annotate", 4, "ngIf"], [3, "getAnnotate", "pdfPath", "toolHide", "userType", "annotate", 4, "ngIf"], [3, "hidden", "ngClass"], [1, "view-question"], ["id", "scrollinnnersection", "infiniteScroll", "", 1, "card", "scrollPanelCorrection", 3, "scrolled", "fromRoot", "infiniteScrollContainer", "infiniteScrollDistance", "infiniteScrollThrottle"], [3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mt-3", "card", "p-4"], [1, "row", "px-3"], ["aria-controls", "#overallFeedback", "aria-expanded", "false", "data-target", "#overallFeedback", "data-toggle", "collapse", 1, "btn-sm", "btn-primary", "mr-2"], [1, "row", "mt-3", "mb-3", "px-3"], ["id", "overallFeedback", 1, "col-md-12", "collapse"], ["class", "col-md-12 customize-card", 4, "ngIf"], ["class", "col-md-12 customize-card text-center", 4, "ngIf"], [1, "col-md-12", "d-flex"], [1, "col-md-6", "px-0", "mb-2"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-12", "mt-3"], ["type", "text", 1, "form-control", "div-disable", 3, "ngModelChange", "ngModel"], [1, "col-md-6", "mb-1"], ["cols", "30", "placeholder", "Overall Feedback", "rows", "5", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-12", "mt-4", "mb-4", 3, "hidden"], [1, "btn", "btn-primary", "pull-right", "ml-2", 3, "click"], [1, "btn", "btn-outline-primary", "pull-right", 3, "click"], ["id", "custom-pdf-loader", 2, "height", "100vh"], ["alt", "", "src", "assets/images/pre-loader/loader-01.svg"], ["target", "_blank", 3, "title", "href"], [1, "col-md-12", "flex-center", "flex-wrap", "link-card", 2, "height", "90vh"], [1, "col-md-12", "d-flex", "justify-content-center"], ["class", "size-120px", "src", "assets/images/icons/doc-icon.png", "alt", "doc", 4, "ngIf"], ["class", "size-120px", "src", "assets/images/icons/audio-icon.png", "alt", "mp3", 4, "ngIf"], ["class", "size-120px", "src", "assets/images/icons/video-icon.png", "alt", "mp4", 4, "ngIf"], ["class", "size-120px", "src", "assets/images/icons/ppt-icon.png", "alt", "ppt", 4, "ngIf"], ["class", "size-120px", "src", "assets/images/icons/others-icon.png", "alt", "others", 4, "ngIf"], ["src", "assets/images/icons/doc-icon.png", "alt", "doc", 1, "size-120px"], ["src", "assets/images/icons/audio-icon.png", "alt", "mp3", 1, "size-120px"], ["src", "assets/images/icons/video-icon.png", "alt", "mp4", 1, "size-120px"], ["src", "assets/images/icons/ppt-icon.png", "alt", "ppt", 1, "size-120px"], ["src", "assets/images/icons/others-icon.png", "alt", "others", 1, "size-120px"], [3, "annotate", "getAnnotate", "getDragQues", "pdfPath", "toolHide", "userType"], [3, "annotate", "getAnnotate", "pdfPath", "toolHide", "userType"], [3, "ngStyle"], [3, "hidden", "class", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "hidden"], ["type", "text", 1, "input-custom-modal", "div-disable", 3, "value"], [1, "mb-3", 3, "hidden"], [1, "col-12", "px-0", "d-flex", "justify-content-between"], [1, "question-no"], ["aria-hidden", "true", "class", "fa fa-2x fa-circle-thin", "style", "color: darkgrey", 3, "click", 4, "ngIf"], ["aria-hidden", "true", "class", "fa fa-2x fa-check-circle", "style", "color: green", 3, "click", 4, "ngIf"], ["aria-expanded", "false", "class", "btn-sm btn-primary mr-2", "data-toggle", "collapse", 4, "ngIf"], ["class", "btn-sm btn-primary mr-2", 3, "click", 4, "ngIf"], [1, "d-flex", "px-0"], [1, "mb-0", "ml-1", "font-weight-bold", "align-content-center", 2, "font-size", "18px"], ["autocomplete", "off", "name", "points", 1, "mark-input", "input-field", "p-0", "border-0", 2, "width", "10%", 3, "input", "keypress", "value"], [1, "mx-2", "align-content-center"], [1, "color-primary", "font-weight-bold"], ["class", "errormessage", 4, "ngIf"], [1, "col-md-12", "px-0"], [1, "mb-4", "mt-3", "div-disable", 3, "hidden", "innerHTML"], ["class", "mt-4", 4, "ngIf"], ["class", "col-md-12 mt-4 px-0", 4, "ngIf"], [1, "row", "mt-3", "px-3"], [1, "col-md-12", "collapse", "px-0", 3, "id"], ["class", "customize-card2 col-md-12 pull-right", "alt", "", 3, "src", 4, "ngIf"], ["class", "customize-card col-md-12 px-3", "style", "text-align: center", 3, "innerHTML", 4, "ngIf"], ["class", "customize-card col-md-12 px-3", 4, "ngIf"], ["class", "customize-card col-md-12 px-3", "style", "text-align: center", 4, "ngIf"], ["class", "col-md-12 mt-3 mb-3 px-0", 4, "ngIf"], [1, "col-12", "px-0", "mt-4", "d-flex"], [1, "color-primary"], ["placeholder", "Teacher Feedback", "rows", "3", 1, "form-control", 3, "input", "value"], ["aria-hidden", "true", 1, "fa", "fa-2x", "fa-circle-thin", 2, "color", "darkgrey", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-2x", "fa-check-circle", 2, "color", "green", 3, "click"], ["aria-expanded", "false", "data-toggle", "collapse", 1, "btn-sm", "btn-primary", "mr-2"], [1, "btn-sm", "btn-primary", "mr-2", 3, "click"], [1, "errormessage"], [1, "mt-4"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["aria-hidden", "true", 1, "fa", "fa-check"], ["aria-hidden", "true", 1, "fa", "fa-times"], ["type", "radio", "value", "true", 1, "radio-size", "form-control", "mr-2", "div-disable", 3, "checked", "name"], ["type", "radio", "value", "false", 1, "radio-size", "form-control", "mr-2", "div-disable", 3, "checked", "name"], [1, "capital"], [1, "col-md-12", "mt-4", "px-0"], ["cols", "30", "readonly", "", "rows", "4", 1, "form-control", "mt-2", 3, "ngClass", "value"], [3, "class", 4, "ngFor", "ngForOf"], [1, "font-weight-light"], ["cols", "30", "readonly", "", "rows", "4", 1, "form-control"], [1, "d-flex", "col-12"], ["class", "fa fa-check-circle fa-2x text-success ml-2", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-times-circle fa-2x text-danger ml-2", "aria-hidden", "true", 4, "ngIf"], [1, "ml-3", "overflow-auto", 3, "innerHTML"], ["class", "d-flex col-12", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "fa-2x", "text-success", "ml-2"], ["aria-hidden", "true", 1, "fa", "fa-times-circle", "fa-2x", "text-danger", "ml-2"], ["class", "form-control mt-2", "cols", "30", "readonly", "", "rows", "4", 3, "ngClass", "value", 4, "ngIf"], ["class", "form-control mt-2", "cols", "30", "placeholder", "Student Not Answered", "readonly", "", "rows", "2", 4, "ngIf"], [1, "mt-1", "py-1"], ["cols", "30", "placeholder", "Student Not Answered", "readonly", "", "rows", "2", 1, "form-control", "mt-2"], ["alt", "", 1, "customize-card2", "col-md-12", "pull-right", 3, "src"], [1, "customize-card", "col-md-12", "px-3", 2, "text-align", "center", 3, "innerHTML"], [1, "customize-card", "col-md-12", "px-3"], [1, "customize-card", "col-md-12", "px-3", 2, "text-align", "center"], ["class", "col-md-12 mt-4", 4, "ngIf"], [1, "py-1"], [3, "editMode", "editPatchValue", "graphId", "questionType"], [3, "editMode", "editPatchValue", "graphId", "questionType", 4, "ngIf"], [1, "col-md-12", "mt-4"], [1, "innerhtml-margin-clear", 3, "innerHTML", "ngClass"], [1, "innerhtml-margin-clear", "form-span", 3, "innerHTML"], [1, "col-md-12", "mt-3", "mb-3", "px-0"], [1, "col-md-12", "custom-card", 3, "innerHTML"], [1, "col-md-12", "customize-card"], [1, "col-md-12", "customize-card", "text-center"], [1, "row", "mt-4"], ["class", "col-md-4", 4, "ngIf"], [3, "getAnnotate", "getDragQues", "pdfPath", "toolHide", "userType", "annotate", "deleteAnnotation", 4, "ngIf"], [3, "getAnnotate", "pdfPath", "toolHide", "userType", "annotate", "deleteAnnotation", 4, "ngIf"], [3, "annotate", "deleteAnnotation", "getAnnotate", "getDragQues", "pdfPath", "toolHide", "userType"], [3, "annotate", "deleteAnnotation", "getAnnotate", "pdfPath", "toolHide", "userType"], [1, "col-md-4"], ["aria-controls", "#overallFeedbackPdf", "aria-expanded", "false", "data-target", "#overallFeedbackPdf", "data-toggle", "collapse", 1, "btn-sm", "btn-primary", "mr-2"], ["id", "overallFeedbackPdf", 1, "col-md-12", "collapse"], [1, "col-12", "ml-2", "mt-2"], [1, "form-group", "d-flex", "flex-column"], [1, "mt-2", "ml-2"], [1, "labelName"], ["maxlength", "3", "type", "text", 1, "form-control", "w-100", "ml-2", "pointInput", 3, "keypress", "ngModelChange", "ngModel"], [1, "col-12", "ml-2"], ["maxlength", "4", "type", "text", 1, "form-control", "w-100", "ml-2", "pointInput", 3, "keypress", "ngModelChange", "ngModel"], ["type", "text", 1, "form-control", "w-100", "ml-2", "pointInput", 3, "ngModelChange", "ngModel"], [3, "getAnnotate", "pdfPath", "toolHide"], [1, "col-md-12", "scrollPanel4"], [3, "ngStyle", "hidden", "class", 4, "ngFor", "ngForOf"], ["class", "col-6 content-card px-0", "id", "print-section", 3, "ngStyle", 4, "ngIf"], [1, "col-md-12", "mt-3", "card", "px-3", "pt-4", "pb-3"], ["class", "row px-3 mb-3", 4, "ngIf"], ["class", "row px-3", 4, "ngIf"], [1, "font-weight-bold", "col-6", "px-0"], ["cols", "25", "placeholder", "Overall Feedback", "rows", "5", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "fa", "fa-floppy-o", "mr-2"], ["class", "row px-3 mt-3", 4, "ngIf"], [3, "ngStyle", "hidden"], ["class", "d-flex justify-content-between align-items-center", 4, "ngIf"], [1, "col-md-12", "view-question"], ["class", "col-12 mt-3 editor_bullet", 4, "ngIf"], ["class", "col-md-12 d-flex", 4, "ngIf"], ["class", "col-md-12 d-flex px-0", 4, "ngIf"], ["class", "row px-0", 4, "ngIf"], ["class", "col-12 px-0 my-3", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], ["class", "col-md-12 px-0 mb-3", 4, "ngIf"], ["class", "my-3 px-0 col-md-12", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "col-md-1"], [1, "question-no", "col-10", "m-0"], [1, "col-md-1", "px-0"], ["aria-hidden", "true", "class", "fa fa-2x fa-circle-thin cursor", "style", "color: darkgrey", 3, "click", 4, "ngIf"], ["aria-hidden", "true", "class", "fa fa-2x fa-check-circle cursor", "style", "color: green", 3, "click", 4, "ngIf"], [1, "col-md-10", "text-right"], [1, "mb-0", "ml-4", "font-weight-bold", "align-content-center", 2, "font-size", "18px"], ["autocomplete", "off", "name", "points", 1, "mark-input", "input-field", "p-0", "border-0", 2, "width", "2%", 3, "input", "keypress", "value"], ["aria-hidden", "true", 1, "fa", "fa-2x", "fa-circle-thin", "cursor", 2, "color", "darkgrey", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-2x", "fa-check-circle", "cursor", 2, "color", "green", 3, "click"], ["style", "font-size: 18px", "class", "mb-0", 4, "ngIf"], [1, "mb-0", "font-weight-bold", "mx-2"], [1, "mb-0", 2, "font-size", "18px"], [1, "col-12", "mt-3", "editor_bullet"], ["class", "innerhtml-margin-clear", 3, "innerHTML", 4, "ngIf"], [1, "innerhtml-margin-clear", 3, "innerHTML"], [1, "col-6", "mt-3"], ["class", "col-md-12 mb-3 mx-3 p-2 d-flex align-items-center", 3, "ngClass", 4, "ngFor", "ngForOf"], ["style", "max-height: 20rem", 3, "ngClass", "class", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mb-3", "mx-3", "p-2", "d-flex", "align-items-center", 3, "ngClass"], [1, "btn-primary", "inner_button", "mr-3"], [1, "remove-margin-bottom", 3, "innerHTML"], [2, "max-height", "20rem", 3, "ngClass"], ["class", "btn-primary inner_button", 4, "ngIf"], ["class", "col-11 pt-1 pr-0", 4, "ngIf"], [1, "btn-primary", "inner_button"], [1, "col-11", "pt-1", "pr-0"], [1, "col-md-6", "table-flexible"], [1, "table", "table-bordered", "text-center", "div-disable"], ["class", "remove-margin-bottom", 3, "innerHTML", 4, "ngFor", "ngForOf"], ["class", "radio_animated", "type", "radio", 3, "checked", "id", "name", 4, "ngIf"], ["type", "checkbox", 3, "checked", "id", 4, "ngIf"], ["type", "radio", 1, "radio_animated", 3, "checked", "id", "name"], ["type", "checkbox", 3, "checked", "id"], ["class", "radio_animated", "type", "radio", 3, "checked", "name", 4, "ngIf"], ["type", "checkbox", 3, "id", 4, "ngIf"], ["type", "radio", 1, "radio_animated", 3, "checked", "name"], ["type", "checkbox", 3, "id"], [1, "col-md-6"], ["class", "mb-3 d-flex", 4, "ngFor", "ngForOf"], [1, "mb-3", "d-flex"], [1, "col-md-11"], ["data-toggle", "dropdown", 1, "col-md-12", "bg-white", "innerhtml-margin-clear", "p-2", "dropdown-toggle", "d-flex", "justify-content-between", 3, "ngClass", "id"], [1, "col-md-11", "dropdown-menu"], ["class", "dropdown-item dropdown-link innerhtml-margin-clear", "style", "overflow: scroll; overflow-y: hidden", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "dropdown-item", "dropdown-link", "innerhtml-margin-clear", 2, "overflow", "scroll", "overflow-y", "hidden", 3, "innerHTML"], [1, "question-no-small"], ["data-toggle", "dropdown", 1, "col-md-12", "bg-white", "innerhtml-margin-clear", "p-2", "dropdown-border", "dropdown-toggle", "d-flex", "justify-content-between", 3, "id"], ["class", "col-md-12 mb-3 d-flex justify-content-between", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mb-3", "d-flex", "justify-content-between"], ["class", "col-md-11", 3, "innerHTML", "ngClass", 4, "ngIf"], ["class", "col-md-11", 3, "ngClass", 4, "ngIf"], [1, "col-md-11", 3, "innerHTML", "ngClass"], [1, "col-md-11", 3, "ngClass"], [1, "col-md-11", "form-span", 3, "innerHTML"], [1, "col-md-6", "form-group", "mt-2"], ["class", "input-group mb-3 mt-3 inputMenu", 4, "ngFor", "ngForOf"], [1, "input-group", "mb-3", "mt-3", "inputMenu"], [1, "input-group-prepend"], [1, "input-group-text"], ["src", "assets/images/pdf-icons/equal@2x.png", 1, "img-fluid", 2, "width", "25px", "height", "25px"], [1, "w-75", "px-3", "pt-4", "pb-3", "border", "border-dark", 3, "innerHTML"], [1, "col-md-12", "d-flex", "px-0"], ["class", "form-span col-md-12 mb-3 d-flex editor_bullet", 4, "ngIf"], ["class", "col-md-12 mb-3 d-flex p-2", 3, "ngClass", 4, "ngIf"], [1, "form-span", "col-md-12", "mb-3", "d-flex", "editor_bullet"], [1, "col-md-12", "mb-3", "d-flex", "p-2", 3, "ngClass"], [1, "mb-2", "form-span", "editor_bullet"], ["class", "col-md-12 mb-3 d-flex editor_bullet", 3, "ngClass", 4, "ngIf"], [1, "col-md-12", "mb-3", "form-span", "editor_bullet"], [1, "col-md-12", "mb-3", "d-flex", "editor_bullet", 3, "ngClass"], [1, "form-span"], [1, "row", "px-0"], [1, "col-md-12", "my-3"], [1, "font-weight-bold", "col-5", "align-self-center"], [1, "col-7", "text-right", "mb-2"], [1, "row", "justify-content-end", "align-items-end", "pr-3"], ["class", "col-8 text-left pr-2", 4, "ngIf"], ["class", "dropdown", 4, "ngIf"], ["style", "height: 74vh", "class", "form-span editor_bullet feedback-card col-md-12 d-flex", 4, "ngIf"], ["class", "col-md-12 d-flex p-2", 4, "ngIf"], [1, "col-8", "text-left", "pr-2"], [1, "label_design"], ["bindLabel", "version_name", "bindValue", "index", "placeholder", "Please Select", 3, "change", "ngModelChange", "items", "clearable", "ngModel"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100"], [1, "mb-0", "d-inline-flex", 2, "font-size", "14px", 3, "ngClass"], [1, "badge", "badge-info", "ml-2", 2, "align-content", "center", "padding", "4px 8px"], [1, "badge", 3, "ngClass"], [1, "dropdown"], [1, "btn", "btn-outline-primary", "px-3"], ["aria-hidden", "true", 1, "fa", "fa-print", "mr-2"], ["aria-hidden", "true", 1, "fa", "fa-sort-desc", "float-right", "ml-2"], [1, "dropdown-content", "text-left", 2, "right", "1px"], [1, "cursor", 3, "click"], ["src", "assets/images/without-feedback.png", 1, "mr-2", 2, "width", "20px"], ["src", "assets/images/report-feedback.png", 1, "mr-2", 2, "width", "18px"], [1, "form-span", "editor_bullet", "feedback-card", "col-md-12", "d-flex", 2, "height", "74vh"], [1, "col-md-12", "d-flex", "p-2"], [1, "col-md-12", "mb-3", "d-flex", "form-span", "editor_bullet"], ["class", "col-md-12 editor_bullet", 4, "ngIf"], [1, "col-md-12", "editor_bullet"], [1, "col-12", "px-0", "my-3"], [1, "card", "explanation"], [1, "col-4", "mb-3"], [1, "m-0"], ["class", "mb-3 mt-3", 4, "ngFor", "ngForOf"], [1, "mb-3", "mt-3"], [1, "col-md-12", "px-0", "d-flex", "justify-content-between"], [1, "d-flex", "justify-content-start"], [1, "ml-3", "pt-2"], [1, "col-md-10", "text-right", "d-flex", "justify-content-end"], [1, "col-md-3", "px-0"], [1, "d-flex", "px-0", "align-items-center", "justify-content-end"], [1, "w-auto", "mx-2"], [1, "w-auto", "text-center", "mr-4"], [1, "mb-0", "font-weight-bold", "align-content-center", 2, "font-size", "18px", "width", "122px !important"], ["autocomplete", "off", "name", "points", 1, "mark-input", "input-field", "p-0", "border-0", 2, "width", "15%", 3, "input", "keypress", "value"], [1, "editor_bullet"], [1, "innerhtml-margin-clear", "col-12", "mt-3", 3, "innerHTML"], ["class", "col-12 mt-3 d-flex", 4, "ngIf"], ["class", "row mt-2 d-flex", 4, "ngIf"], ["class", "col-md-12 mt-4 d-flex px-0", 4, "ngIf"], ["class", "col-md-12 mt-3 px-0", 4, "ngIf"], ["class", "col-md-12 px-0 mt-3 mb-3", 4, "ngIf"], [1, "col-md-12", "px-0", "mt-4"], ["cols", "30", "placeholder", "Feedback", "rows", "3", 1, "form-control", 3, "input", "value"], ["type", "checkbox", 3, "checked", 4, "ngIf"], ["type", "checkbox", 3, "checked"], [1, "col-12", "mt-3", "d-flex"], [1, "col-md-6", "mt-3"], [1, "row", "mt-2", "d-flex"], [1, "col-md-12", "mt-4", "d-flex", "px-0"], [1, "explanation", "innerhtml-margin-clear", 3, "innerHTML"], [1, "col-md-12", "mt-3", "px-0"], [1, "col-md-12", "px-0", "mt-3", "mb-3"], [3, "class", "id", 4, "ngIf"], [3, "id"], [1, "feedback-card", "col-md-12"], [3, "innerHTML"], ["class", "col-md-12 mt-3", 4, "ngIf"], [1, "col-md-12", "px-0", "mb-3"], ["class", "card", 4, "ngIf"], [1, "card-header", "p-3", "background_gradient"], [2, "color", "white"], [1, "card-body", "editor_bullet", "custom_feedback_card_body", "p-3"], [2, "border", "0 !important", 3, "innerHTML"], [1, "my-3", "px-0", "col-md-12"], ["id", "print-section", 1, "col-6", "content-card", "px-0", 3, "ngStyle"], [1, "mt-3", "col-md-12", "display-block", 2, "display", "none"], [1, "card-body", "p-3"], [1, "col-6"], [1, "font-weight-bold", 2, "font-size", "18px !important"], [1, "col-6", "text-right"], [1, "mt-3", "editor_bullet", "col-md-12", "display-block", 2, "display", "none"], [1, "font-weight-bold", 2, "color", "white"], [1, "card-body", "p-3", "custom_feedback_card_body"], [1, "innerhtml-margin-clear", "f-18", 3, "innerHTML"], ["style", "display: none", "class", "mt-3 editor_bullet col-md-12 display-block", 4, "ngIf"], ["id", "feedback_got", "class", "col-12 row pr-0 content-card", 4, "ngIf"], ["id", "feedback_got", 1, "col-12", "row", "pr-0", "content-card"], ["class", "feedback-card p-0", "style", "height: 74vh; border: 0 !important;", 3, "innerHTML", 4, "ngIf"], ["class", "col-12 pr-0", 4, "ngIf"], [1, "feedback-card", "p-0", 2, "height", "74vh", "border", "0 !important", 3, "innerHTML"], [1, "col-12", "pr-0"], ["class", "font-weight-bold", 4, "ngIf"], ["class", "col-12 px-0", 4, "ngIf"], [1, "col-12", "mt-3", "px-0"], [1, "font-weight-bold", 2, "color", "white", "font-size", "16px"], [1, "card-body", "custom_feedback_card_body", "p-3"], ["style", "border: 0 !important;", "class", "feedback-card", 3, "innerHTML", 4, "ngIf"], ["class", "feedback-card p-0", "style", "overflow-x: hidden;border: 0 !important", 4, "ngIf"], ["class", "col-12 mt-3 px-0", 4, "ngIf"], [1, "row", "justify-content-center", "flex-column"], [1, "col-12", "d-flex", "justify-content-center"], [1, "text-center"], [1, "mb-0", 2, "font-size", "14px"], [1, "font-weight-bold", 2, "color", "#008ffb"], [1, "ml-2"], ["style", "color: #00e396", "class", "font-weight-bold", 4, "ngIf"], ["id", "chart2"], [3, "series", "chart", "xaxis", "yaxis", "plotOptions", "dataLabels", "legend"], ["class", "col-12 mt-2", 4, "ngIf"], ["class", "col-12 mt-3", 4, "ngIf"], [1, "font-weight-bold", 2, "color", "#00e396"], [1, "col-12", "mt-2"], ["class", "strength_text", 4, "ngFor", "ngForOf"], [1, "strength_text"], [1, "col-12", "mt-3"], ["class", "top_opportunity_text", 4, "ngFor", "ngForOf"], [1, "top_opportunity_text"], [1, "feedback-card", 2, "border", "0 !important", 3, "innerHTML"], [1, "feedback-card", "p-0", 2, "overflow-x", "hidden", "border", "0 !important"], [1, "row", "mb-2"], [1, "mb-0", "font-weight-bold", 2, "font-size", "18px"], [1, "col-10"], [1, "progress", "cursor", "my-2"], ["role", "progressbar", 1, "progress-bar"], [1, "align-self-center", "font-weight-bold", "color-primary"], ["class", "feedback-panel", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "feedback-panel", 3, "click", "ngClass"], [1, "feedback-header", "d-flex", "justify-content-between", "align-items-center", 3, "ngClass"], [1, "title-text"], [1, "badge", "badge-info", "mr-2"], [1, "fa", 2, "color", "black", 3, "ngClass"], [1, "feedback-body", 3, "ngbCollapse"], [2, "color", "black"], [1, "collapse-card"], [1, "snippet-text"], [1, "inner-collapse", "mt-2"], [1, "font-weight-bold", "col-12", "px-0"], [1, "font-weight-normal", "italic"], ["class", "font-weight-bold mt-2 col-12 px-0", 4, "ngIf"], [1, "font-weight-bold", "mt-2", "col-12", "px-0"], [1, "font-weight-normal", "color-primary", "italic"], [1, "card-body", "custom_feedback_card_body", "py-3", "px-0"], [1, "text-center", "font-weight-bold", 2, "width", "6%", "padding-left", "16px"], [2, "width", "94%"], [1, "font-weight-bold", "mb-1", "col-12", "px-0"], [2, "color", "#007BFF"], [1, "color-primary", "col-12", "px-0"], [1, "innerhtml-margin-clear", "f-18"], [1, "row", "px-3", "mb-3"], ["aria-controls", "#overallFeedback", "aria-expanded", "false", "data-target", "#overallFeedbackcfs", "data-toggle", "collapse", 1, "btn", "btn-primary", "mr-2"], ["id", "overallFeedbackcfs", 1, "col-md-12", "collapse", "mb-3"], ["style", "padding: 1rem", "class", "col-md-12 release-card", 4, "ngIf"], ["style", "padding: 1rem", "class", "col-md-12 release-card text-center", 4, "ngIf"], [1, "col-md-12", "release-card", 2, "padding", "1rem"], [1, "col-md-12", "release-card", "text-center", 2, "padding", "1rem"], [1, "row", "px-3", "mt-3"], [1, "col-12", 2, "padding", "0 10px"], [1, "card-body", "py-3", "px-4", "custom_feedback_card_body"], ["class", "row px-2", 4, "ngFor", "ngForOf"], [1, "row", "px-2"], [1, "col-11"], [1, "color-primary", 2, "word-wrap", "break-word"], [1, "text-dark", 2, "font-size", "12px"], [1, "col-1", "d-flex", "align-items-center", "justify-content-end"], ["aria-hidden", "true", "title", "Delete Feedback", 1, "fa", "fa-trash", "fa-size", "text-danger", "cursor", "feedback-delete", 3, "click"], [1, "modal-body", 2, "border", "0"], [1, "col-12", "text-right"], [1, "fa", "fa-close", "cursor", 2, "font-size", "2rem", 3, "click"], [1, "col-12", "text-center"], [1, "modal-title", "headerText"], [1, "text-center", "mt-3"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary"], [1, "modal-header"], [1, "modal-title", "letter"], [1, "modal-body"], [1, "row", "d-flex", "justify-content-end", "px-3"], ["type", "checkbox", 1, "align-self-center", "mr-2", 3, "click", "checked"], [1, "color-primary", "align-self-center"], [1, "modal-footer", "d-flex", "justify-content-right"], ["type", "button", 1, "btn", "cancel", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "modal-header", "d-flex", "justify-content-between"], [1, "fa", "fa-times-circle", "cursor", 2, "font-size", "1.2rem", 3, "click"], [3, "getAnnotate", "id", "pdfPath", "toolHide", "userType"], [1, "col-12", "px-0", "my-3", "d-flex", "flex-row", "align-items-center"], [1, "feedback_spinner"], [1, "ml-3", 2, "font-size", "16px"], [1, "modal-body", "p-0"], [1, "mb-0", "my-3", "font-weight-bold", 2, "color", "#313131"], [1, "mb-0", "my-3", 2, "color", "#313131"]], template: function CorrectionPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9);
            i0.ɵɵtemplate(4, CorrectionPageComponent_div_4_Template, 9, 12, "div", 10)(5, CorrectionPageComponent_div_5_Template, 13, 5, "div", 11);
            i0.ɵɵelementStart(6, "div");
            i0.ɵɵtemplate(7, CorrectionPageComponent_div_7_Template, 15, 7, "div", 11)(8, CorrectionPageComponent_div_8_Template, 8, 0, "div", 12)(9, CorrectionPageComponent_button_9_Template, 2, 1, "button", 13)(10, CorrectionPageComponent_button_10_Template, 2, 0, "button", 14)(11, CorrectionPageComponent_button_11_Template, 2, 1, "button", 15)(12, CorrectionPageComponent_button_12_Template, 2, 0, "button", 14)(13, CorrectionPageComponent_button_13_Template, 2, 0, "button", 16);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(14, CorrectionPageComponent_div_14_Template, 3, 1, "div", 17)(15, CorrectionPageComponent_hr_15_Template, 1, 0, "hr", 18)(16, CorrectionPageComponent_div_16_Template, 13, 9, "div", 19)(17, CorrectionPageComponent_div_17_Template, 6, 3, "div", 19);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(18, CorrectionPageComponent_div_18_Template, 5, 3, "div", 20)(19, CorrectionPageComponent_div_19_Template, 3, 5, "div", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(20, CorrectionPageComponent_ng_template_20_Template, 16, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(22, CorrectionPageComponent_ng_template_22_Template, 18, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(24, CorrectionPageComponent_ng_template_24_Template, 9, 5, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(26, CorrectionPageComponent_ng_template_26_Template, 5, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(28, CorrectionPageComponent_ng_template_28_Template, 14, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(30, CorrectionPageComponent_ng_template_30_Template, 14, 0, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.pageType == 1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pageType == 2);
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("col-md-", ctx.pageType == 1 ? "5" : "9", " d-flex align-items-center justify-content-end px-0");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.correctPdfPath == null ? null : ctx.correctPdfPath.length) == 0 && ctx.pageType == 2 && !ctx.isSingleQnsWithFeedbackType || ctx.isSingleQnsWithFeedbackType && ctx.studentAnswer.show_timer == "1");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pageType == 2 && ctx.totalAnsSample != "" && (ctx.totalAns[0] == null ? null : ctx.totalAns[0].question_type_id) != 55 && ctx.correctPdfPath.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pageType == 1 && ctx.redirect != "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.scoreStatus != 1 && ctx.scoreStatus != 2 && ctx.pageType == 2);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pageType == 2 && (ctx.totalAnsSample == "" || ctx.totalAnsSample != ""));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pageType == 1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pageType == 2 && ctx.roleId != 7);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pageType == "2" && ctx.functionCalled);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pageType != 2);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pageType == 1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pageType == 2 && (ctx.totalAnsSample != "" && (ctx.totalAns[0] == null ? null : ctx.totalAns[0].question_type_id) != 55 || (ctx.correctAnswerKeyPath == null ? null : ctx.correctAnswerKeyPath.length) != 0 || !ctx.showstudentContentlist && (ctx.correctionStudentList == null ? null : ctx.correctionStudentList.length) > 1 || (ctx.totalAnsSample != "" || ctx.totalAnsSample == "") && (ctx.correctPdfPath == null ? null : ctx.correctPdfPath.length) == 1));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pageType == 1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pageType == 2);
        } }, dependencies: [i18.NgClass, i18.NgForOf, i18.NgIf, i18.NgStyle, i1.NgbCollapse, i5.ɵNgNoValidate, i5.NgSelectOption, i5.ɵNgSelectMultipleOption, i5.DefaultValueAccessor, i5.CheckboxControlValueAccessor, i5.SelectControlValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.MaxLengthValidator, i5.FormGroupDirective, i5.FormControlName, i5.NgModel, i10.RouterLink, i19.NgSelectComponent, i19.NgOptionTemplateDirective, i20.GraphComponentComponent, i21.AnnotationComponent, i22.InfiniteScrollDirective, i23.ChartComponent, i18.DatePipe, i24.SanitizeHtmlPipe, i25.CustomDateFormatPipe], styles: [".inner_button[_ngcontent-%COMP%] {\n  padding: 4px 8px !important;\n  background: #ffff !important;\n  color: black;\n  border: 2px solid #e1e4eb !important;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 16px;\n  height: 30px;\n  cursor: text;\n}\n\n.button_design[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.inner_button[_ngcontent-%COMP%]:focus, .button_design[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  outline: none;\n}\n\n.button_design[_ngcontent-%COMP%]:active {\n  color: #FFFFFF !important;\n}\n\n.inner_button[_ngcontent-%COMP%]:active {\n  color: black !important;\n}\n\n.inner_button[_ngcontent-%COMP%]:focus-visible, .button_design[_ngcontent-%COMP%]:focus-visible {\n  outline: none !important;\n}\n\n.timer_button[_ngcontent-%COMP%] {\n  border: 1px solid #8f008a;\n  background: #fff !important;\n  border-radius: 4px;\n}\n\n.student-selected[_ngcontent-%COMP%] {\n  background-color: #e9ccec !important;\n  border-radius: 4px !important;\n}\n\n.correct-ans-selected[_ngcontent-%COMP%] {\n  background-color: #d4edda !important;\n  border-radius: 4px !important;\n}\n\n.wrong-ans-selected[_ngcontent-%COMP%] {\n  background-color: #ffb7b7 !important;\n  border-radius: 4px !important;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  height: 60px !important;\n}\n\n.mark-input[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #8F008A !important;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  transition: width 0.8s ease-in-out;\n  background-color: #00a8ff;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CorrectionPageComponent, [{
        type: Component,
        args: [{ selector: 'app-correction-page', template: "<div class=\"container-fluid\">\n    <div class=\"card p-3\">\n        <div class=row>\n            <div class=\"col-md-12 d-flex justify-content-between\">\n                <div *ngIf=\"pageType == 1\" class=\"group-btn col-md-7 px-0\">\n                    <button type=\"button\" [ngClass]=\"{'active1': studentListHighlight == '0'}\" class=\"btn btn-outline-primary\" (click)=\"studentsDetails(classData,0)\">All</button>\n                    <button (click)=\"studentsDetails(classData,1)\" [ngClass]=\"{'active1': studentListHighlight == '1'}\" class=\"btn btn-outline-primary\" type=\"button\">Pending</button>\n                    <button type=\"button\" [ngClass]=\"{'active1': studentListHighlight == '2'}\" class=\"btn btn-outline-primary\" (click)=\"studentsDetails(classData,2)\">In Progress</button>\n                    <button type=\"button\" [ngClass]=\"{'active1': studentListHighlight == '3'}\" class=\"btn btn-outline-primary\" (click)=\"studentsDetails(classData,3)\">Completed</button>\n                </div>\n                <div *ngIf=\"pageType == 2\" class=\"col-md-{{pageType == 1 ? '6' : '3'}}\">\n                    <h5><span class=\"font-weight-bold\">Student Name: </span> <small class=\"content-heading-name\">{{studentName}}</small>  &nbsp; &nbsp;\n                    </h5>\n                    <h5 class=\"mb-0\"><span class=\"font-weight-bold\">Assignment: </span> <small class=\"content-heading-name\">{{classData.content_name}}</small>  &nbsp; &nbsp;\n                    </h5>\n                </div>\n                <div class=\"col-md-{{pageType == 1 ? '5' : '9'}} d-flex align-items-center justify-content-end px-0\">\n                    <div class=\"col-md-{{contentTimeTaken >= 3600 ? '3' : '2'}}\" *ngIf=\"correctPdfPath?.length == 0 && pageType == 2 && !isSingleQnsWithFeedbackType\n                        || (isSingleQnsWithFeedbackType && studentAnswer.show_timer == '1')\">\n                        <div class=\"row justify-content-center timer_button px-2 py-1\">\n                            <div class=\"w-auto text-center\" *ngIf=\"contentTimeTaken >= 3600\">\n                                <h4 style=\"font-size: 24px\" class=\"mb-0\" *ngIf=\"getElapsedOverAllTime() as elapsed\"><b>{{elapsed.hours}}</b></h4>\n                                <h6 style=\"font-size: 12px\" class=\"color-primary mb-0\">Hours</h6>\n                            </div>\n                            <div class=\"w-auto mx-2\" *ngIf=\"contentTimeTaken >= 3600\" style=\"margin-top: 2px\">\n                                <h4 class=\"mb-0 font-weight-bold\">:</h4>\n                            </div>\n                            <div class=\"w-auto text-center\">\n                                <h4 style=\"font-size: 24px\" class=\"mb-0\" *ngIf=\"getElapsedOverAllTime() as elapsed\"><b>{{elapsed.minutes}}</b></h4>\n                                <h6 style=\"font-size: 12px\" class=\"color-primary mb-0\">Minutes</h6>\n                            </div>\n                            <div class=\"w-auto mx-2\" style=\"margin-top: 2px\">\n                                <h4 class=\"mb-0 font-weight-bold\">:</h4>\n                            </div>\n                            <div class=\"w-auto text-center\">\n                                <h4 style=\"font-size: 24px\" class=\"mb-0\" *ngIf=\"getElapsedOverAllTime() as elapsed\"><b>{{elapsed.seconds}}</b></h4>\n                                <h6 style=\"font-size: 12px\"  class=\"color-primary mb-0\">Seconds</h6>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\" *ngIf=\"pageType == 2 && totalAnsSample != '' && totalAns[0]?.question_type_id != 55 && correctPdfPath.length == 0\">\n                        <select (change)=\"filterQues($event)\" class=\"form-control\">\n                            <option value=\"all\">All Answers</option>\n                            <option value=\"correct\">Correct</option>\n                            <option value=\"wrong\">Incorrect</option>\n                        </select>\n                    </div>\n                    <button *ngIf=\"pageType == 1 && redirect != ''\" [routerLink]=\"'/class/topicsAndCurriculum/1'\" class=\"btn btn-outline-primary pull-right ml-3\">Back To Class</button>\n                    <button (click)=\"moveToPendingAlert('')\" *ngIf=\"scoreStatus != 1 && scoreStatus != 2 && pageType == 2\" class=\"btn btn-primary pull-right mx-2\">Rework</button>\n                    <button (click)=\"saveAndRelease(pageType == 2 && totalAnsSample == '' ? 3 : 2)\" *ngIf=\"pageType == 2 && (totalAnsSample == '' || totalAnsSample != '')\" [hidden]=\"scoreStatus == 2\"\n                        class=\"btn btn-primary pull-right mx-2\">Submit and Release</button>\n                    <button (click)=\"saveAndRelease(1)\" *ngIf=\"pageType == 1\" class=\"btn btn-primary pull-right mx-2\">Release Score</button>\n                    <button (click)=\"back()\" *ngIf=\"pageType == 2 && roleId != 7\" class=\"btn btn-outline-primary pull-right ml-2\">Back</button>\n                </div>\n            </div>\n\n            <div *ngIf=\"pageType == '2' && functionCalled\" [hidden]=\"scoreStatus == 2 || uploadAnswerPath?.length == 0\" class=\"text-center position-absolute custom-alert\">\n                <p class=\"mb-0 border-info para\">Student uploaded answer sheet</p>\n            </div>\n            <hr class=\"mx-3 my-2 bg-primary w-100\" *ngIf=\"pageType != 2\">\n            <div class=\"col-md-12 d-flex align-items-center justify-content-between\" *ngIf=\"pageType == 1\">\n                <div>\n                    <h4 class=\"content-heading\">Assignment : {{classData.content_name}}</h4>\n                </div>\n                <div class=\"d-flex align-items-center justify-content-end\">\n                    <button (click)=\"listView(1)\" [ngClass]=\"{'active1': this.gridView == '1'}\" class=\"btn-sm btn-outline-primary pull-right mr-2\"><i class=\"fa fa-bars\"></i> List</button>\n                    <button (click)=\"listView(2)\" [ngClass]=\"{'active1': this.gridView == '2'}\" class=\"btn-sm btn-outline-primary pull-right\" style=\"margin-right: 10px\"><i class=\"fa fa-th-large\"></i> Grid</button>\n                    <input *ngIf=\"!showGrid\" (click)=\"deSelect($event)\" class=\"checkbox_animated mb-1\" id=\"selectAll\" type=\"checkbox\">\n                    <h5 class=\"mb-0\" style=\"color: #8e3996\" *ngIf=\"!showGrid\">Select All</h5>\n                    <!--            <button class=\"btn btn-outline-primary ml-3\">Release Score</button>-->\n                </div>\n            </div>\n            <div class=\"col-md-12 d-flex align-items-center justify-content-between\"\n                 *ngIf=\"pageType == 2 && ((totalAnsSample != '' && totalAns[0]?.question_type_id != 55) || (correctAnswerKeyPath?.length != 0)\n                 || (!showstudentContentlist && correctionStudentList?.length > 1) || ((totalAnsSample != '' || totalAnsSample == '') && correctPdfPath?.length == 1))\">\n                <div class=\"col-md-4 mt-2\">\n                    <div class=\"col-md-12 d-flex justify-content-start px-0\">\n                        <div *ngIf=\"(totalAnsSample != '' || totalAnsSample == '') && correctPdfPath?.length == 1\" class=\"btn-group mr-3 px-0\">\n                            <button aria-expanded=\"false\" aria-haspopup=\"true\" class=\"btn-outline-primary btn dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n                                {{buttonName}}\n                            </button>\n                            <div class=\"dropdown-menu multi-level\">\n                                <a (click)=\"showType('1')\" class=\"dropdown-item dropdown-link\">Assignments and uploads</a>\n                                <li [hidden]=\"scoreStatus == 2 || uploadAnswerPath?.length == 0\" class=\"dropdown-submenu\">\n                                    <a href=\"#\" tabindex=\"-1\">Answer</a>\n                                    <ul class=\"dropdown-menu\">\n                                        <li (click)=\"selectAnswerSheet(i)\" *ngFor=\"let items of uploadAnswerPath; let i = index\" class=\"dropdown-item dropdown-link\">{{items.image}}</li>\n                                    </ul>\n                                </li>\n                                <div *ngIf=\"totalAnsSample != '' && correctPdfPath?.length == 1\" class=\"dropdown-divider\"></div>\n                                <a *ngIf=\"totalAnsSample != '' && correctPdfPath?.length == 1\" (click)=\"showType('3')\" class=\"dropdown-item dropdown-link\">Hide pdf</a>\n                            </div>\n                        </div>\n<!--                        <div *ngIf=\"totalAnsSample == '' && correctPdfPath?.length == 1\" class=\"btn-group mr-3 px-0\">-->\n<!--                            <button aria-expanded=\"false\" aria-haspopup=\"true\" class=\"btn-outline-primary btn dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">-->\n<!--                                {{buttonName}}-->\n<!--                            </button>-->\n<!--                            <div class=\"dropdown-menu multi-level\">-->\n<!--                                <a (click)=\"showType('1')\" class=\"dropdown-item dropdown-link\">Assignments and uploads</a>-->\n<!--                                <li [hidden]=\"scoreStatus == 2 || uploadAnswerPath?.length == 0\" class=\"dropdown-submenu\">-->\n<!--                                    <a href=\"#\" tabindex=\"-1\">Answer</a>-->\n<!--                                    <ul class=\"dropdown-menu\">-->\n<!--                                        <li (click)=\"selectAnswerSheet(i)\" *ngFor=\"let items of uploadAnswerPath; let i = index\" class=\"dropdown-item dropdown-link\">{{items.image}}</li>-->\n<!--                                    </ul>-->\n<!--                                </li>                        &lt;!&ndash;                        <div class=\"dropdown-divider\"></div>&ndash;&gt;-->\n<!--                                &lt;!&ndash;                        <a (click)=\"showType('3')\" class=\"dropdown-item dropdown-link\">Hide pdf</a>&ndash;&gt;-->\n<!--                            </div>-->\n<!--                        </div>-->\n                        <div *ngIf=\"correctAnswerKeyPath?.length != 0\" class=\"col-md-6 align-self-center px-0\">\n                            <div class=\"col-12 px-0\">\n                                <input (change)=\"showAnswerPdf($event)\" class=\"align-self-center form-span cursor mr-2\" id=\"download\" style=\"margin-top: 0.6rem\" type=\"checkbox\" >\n                                <label class=\"color-primary\" for=\"download\">Answer key pdf</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"(totalAnsSample != '' && correctPdfPath?.length) || (totalAnsSample != '' && totalAns[0]?.question_type_id != 55) || (!showstudentContentlist && correctionStudentList?.length > 1)\"\n                     class=\"col-md-8 mt-2 p-0\">\n                    <div class=\"col-md-12 d-flex justify-content-{{totalAnsSample != '' && correctPdfPath?.length != 0 ? 'between' : 'end'}} px-0\">\n                        <div *ngIf=\"totalAnsSample != '' && correctPdfPath?.length != 0\" class=\"col-md-6 px-0\">\n                            <select (change)=\"sectionFilter($event)\" *ngIf=\"totalAnsSample?.length > 1 || totalAnsSample[0].heading != ''\" [(ngModel)]=\"sectionFilterVal\" class=\"form-control\">\n                                <option value=\"all\">All Section</option>\n                                <option *ngFor=\"let item of totalAnsSample; let i = index\" value=\"{{i}}\">{{item.heading}}</option>\n                            </select>\n                        </div>\n                        <div class=\"col-md-6 d-flex px-0 justify-content-end align-items-center\">\n                            <div class=\"col-md-6 px-0\" *ngIf=\"totalAnsSample != '' && totalAns[0]?.question_type_id != 55 && correctPdfPath.length != 0\">\n                                <select (change)=\"filterQues($event)\" class=\"form-control\">\n                                    <option value=\"all\">All Answers</option>\n                                    <option value=\"correct\">Correct</option>\n                                    <option value=\"wrong\">Incorrect</option>\n                                </select>\n                            </div>\n                            <div class=\"col-6 px-0\" *ngIf=\"testContentDetail\">\n                                <ng-select (change)=\"changeQuestionListFromTest($event)\"\n                                           [items]=\"testContentDetail?.contents\"\n                                           bindLabel=\"name\"\n                                           bindValue=\"content_id\"\n                                           [(ngModel)]=\"testContentData\"\n                                           placeholder=\"Content List\"\n                                           [clearable]=\"false\">\n                                    <ng-template ng-option-tmp let-item=\"item\">\n                                        <div title=\"{{item.name}}\">{{item.name}}</div>\n                                    </ng-template>\n                                </ng-select>\n                            </div>\n                            <form *ngIf=\"!showstudentContentlist && correctionStudentList?.length > 1\" [formGroup]=\"filterForm\" class=\"col-md-6 px-0 ml-2 pull-right\">\n                                <ng-select (change)=\"testStatus = $event.status;studentsAnswerList($event, $event.status)\"\n                                           [items]=\"correctionStudentList\"\n                                           bindLabel=\"student_name\"\n                                           bindValue=\"student_id\"\n                                           formControlName=\"studentlist\"\n                                           typeToSearchText=\"\"\n                                >\n                                </ng-select>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!--    ////consolidated student list design opens///-->\n\n    <div *ngIf=\"pageType == 1\" class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"row d-flex justify-content-center list-card mt-5\" *ngIf=\"studentList==''\">\n                <div class=\"col-4\">\n                    <button class=\"nodataList\">No Data Available!</button>\n                </div>\n            </div>\n            <div class=\"row d-flex\" *ngIf=\"studentList != '' && !showGrid\">\n                <div *ngFor=\"let list of studentList; let i = index\" class=\"col-12 col-md-6 col-lg-4\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"col-md-12 d-flex align-items-center justify-content-between mx-0 my-2\">\n                                <div class=\"d-flex align-items-center justify-content-start\">\n                                    <img *ngIf=\"list.student_profile == ''\" alt=\"\" class=\"rounded-circle image-size\" src=\"assets/images/digital-product/student.png\">\n                                    <img *ngIf=\"list.student_profile != ''\" class=\"rounded-circle image-size\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + list.student_profile)\" alt=\"\">\n                                    <h4 class=\"pl-4 m-0\">{{list.student_name}}</h4>\n                                </div>\n                                <input (click)=\"listSelect(list.checked, i)\" [(ngModel)]=\"list.checked\" [disabled]=\"list.status != 5 && list.status != 3\"\n                                       class=\"checkbox_animated pull-right mr-2 mb-1\" name=\"chk\" type=\"checkbox\">\n                            </div>\n                            <div class=\"col-md-12 d-flex justify-content-start mx-0 mt-2\">\n                                <div>\n                                    <label style=\"color: #8F008A\">Performance: {{list.percentage}}</label>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12 d-flex justify-content-between mx-0 mt-2\">\n                                <div>\n                                    <label>Score</label>\n                                    <h6>{{list.marks}}/{{list.total_marks}}</h6>\n                                </div>\n                                <div>\n                                    <label>No. of Qs</label>\n                                    <h6 class=\"right\">{{list.attend_questions}}/{{list.total_question}}</h6>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12 d-flex align-items-center justify-content-between mx-0 mt-3 mb-2\">\n                                <div class=\"mt-2 d-flex\">\n                                    <h6 *ngIf=\"list.status == 1\" style=\"color: #1597bb\">Pending</h6>\n                                    <h6 *ngIf=\"list.status == 2\" style=\"color: #ffc478\">In Progress</h6>\n                                    <h6 *ngIf=\"list.status == 4\" style=\"color: #4f8a8b\">Completed</h6>\n                                    <h6 *ngIf=\"list.status == 3\" style=\"color: #4f8a8b\">Score Released</h6>\n                                    <h6 *ngIf=\"list.status == 5\" style=\"color: #4f8a8b\">Correction Saved</h6>\n                                    <h6 *ngIf=\"list.status == 6\" style=\"color: #4f8a8b\">Correction Pending</h6>\n                                </div>\n                                <div class=\"d-flex align-items-center\">\n                                    <i *ngIf=\"list.status == 3 && list.content_format == 3\" title=\"View Analytics\"\n                                       (click)=\"navigateToSATReport(list)\" style=\"font-size: 20px\" class=\"fa fa-bar-chart color-primary mr-1 cursor\" aria-hidden=\"true\"></i>\n                                    <img (click)=\"moveToPendingAlert(list)\" *ngIf=\"list.status != 1 && list.status != 2\" alt=\"\" class=\"mr-2\" src=\"assets/images/ristaschool/Pending.png\" title=\"Rework\">\n                                    <button (click)=\"testStatus = list.status;studentsAnswerList(list, list.status)\" [disabled]=\"list.status == 1\" class=\"{{list.status == 1 ? 'btn btn-outline-primary' : 'btn btn-primary'}} custom-btn\">Responses</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row d-flex\" *ngIf=\"studentList != '' && showGrid\">\n                <div class=\"col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-body row\">\n                            <div class=\"col-1 d-flex justify-content-center\">\n                                <input (click)=\"deSelect($event)\" class=\"checkbox_animated ml-5 mb-0\" id=\"selectAllAlt\" type=\"checkbox\">\n                            </div>\n                            <div class=\"col-3 pl-0 d-flex justify-content-center\">\n                                <h4 class=\"listview\">Student Name</h4>\n                            </div>\n                            <div class=\"col-1 d-flex justify-content-center\">\n                                <h4 class=\"listview\" >Performance</h4>\n                            </div>\n                            <div class=\"col-2 d-flex justify-content-center\">\n                                <h4 class=\"listview\">No of Qs</h4>\n                            </div>\n                            <div class=\"col-1 d-flex justify-content-center\">\n                                <h4 class=\"listview\">Score</h4>\n                            </div>\n                            <div class=\"col-2 d-flex justify-content-center\">\n                                <h4 class=\"listview\">Status</h4>\n                            </div>\n                            <div class=\"col-2 d-flex justify-content-center\">\n                                <h4 class=\"listview\">Action</h4>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div *ngFor=\"let list of studentList; let i = index\" class=\"col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-body row\">\n                            <div class=\"col-1 d-flex justify-content-center align-items-center mx-o my-2\">\n                                <input (click)=\"listSelect(list.checked, i)\" [(ngModel)]=\"list.checked\" [disabled]=\"list.status != 5 && list.status != 3\"\n                                       class=\"checkbox_animated pull-right ml-5 mb-1\" name=\"chk\" type=\"checkbox\">\n                            </div>\n                            <div class=\"col-3 d-flex justify-content-center align-items-center mx-0 my-2\">\n                                <div class=\"col-4\">\n                                    <img *ngIf=\"list.student_profile == ''\" alt=\"\" class=\"rounded-circle image-size\" src=\"assets/images/digital-product/student.png\">\n                                    <img *ngIf=\"list.student_profile != ''\" class=\"rounded-circle image-size\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + list.student_profile)\" alt=\"\">\n                                </div>\n                                <div class=\"col-8\">\n                                    <h5 class=\"pl-4 m-0\">{{list.student_name}}</h5>\n                                </div>\n                            </div>\n                            <div class=\"col-1 d-flex justify-content-center align-items-center\">\n                                <h6>{{list.percentage}}</h6>\n                            </div>\n                            <div class=\"col-2 d-flex justify-content-center align-items-center mx-0\">\n                                <h6 class=\"right\" title=\"marks\">{{list.attend_questions}}/{{list.total_question}}</h6>\n                            </div>\n                            <div class=\"col-1 d-flex justify-content-center align-items-center mx-0\">\n                                <h6 class=\"right\" title=\"marks\">{{list.marks}}/{{list.total_marks}}</h6>\n                            </div>\n                            <div class=\"col-2 d-flex justify-content-center align-items-center mx-0\">\n                                <h6 *ngIf=\"list.status == 1\" style=\"color: #1597bb\">Pending</h6>\n                                <h6 *ngIf=\"list.status == 2\" style=\"color: #ffc478\">In Progress</h6>\n                                <h6 *ngIf=\"list.status == 4\" style=\"color: #4f8a8b\">Completed <span *ngIf=\"list.answer_completed_date != '00-00-0000'\"><br/><small class=\"cursor\" title=\"Submitted Date\">SD: {{list.answer_completed_date | customDateFormat}}</small></span><span *ngIf=\"list.score_release_date != '00-00-0000'\"><br/><small class=\"cursor\" title=\"Score Released Date\">SR: {{list.score_release_date | customDateFormat}}</small></span></h6>\n                                <h6 *ngIf=\"list.status == 3\" style=\"color: #4f8a8b\">Score Released <span *ngIf=\"list.answer_completed_date != '00-00-0000'\"><br/><small class=\"cursor\" title=\"Submitted Date\">SD: {{list.answer_completed_date | customDateFormat}}</small></span><span *ngIf=\"list.score_release_date != '00-00-0000'\"><br/><small class=\"cursor\" title=\"Score Released Date\">SR: {{list.score_release_date | customDateFormat}}</small></span></h6>\n                                <h6 *ngIf=\"list.status == 5\" style=\"color: #4f8a8b\">Correction Saved <span *ngIf=\"list.answer_completed_date != '00-00-0000'\"><br/><small class=\"cursor\" title=\"Submitted Date\">SD: {{list.answer_completed_date | customDateFormat}}</small></span><span *ngIf=\"list.score_release_date != '00-00-0000'\"><br/><small class=\"cursor\" title=\"Score Released Date\">SR: {{list.score_release_date | customDateFormat}}</small></span></h6>\n                                <h6 *ngIf=\"list.status == 6\" style=\"color: #4f8a8b\">Correction Pending <span *ngIf=\"list.answer_completed_date != '00-00-0000'\"><br/><small class=\"cursor\" title=\"Submitted Date\">SD: {{list.answer_completed_date | customDateFormat}}</small></span><span *ngIf=\"list.score_release_date != '00-00-0000'\"><br/><small class=\"cursor\" title=\"Score Released Date\">SR: {{list.score_release_date | customDateFormat}}</small></span></h6>\n                                <i *ngIf=\"list.status == 3 && list.content_format == 3\" title=\"View Analytics\"\n                                   (click)=\"navigateToSATReport(list)\" style=\"font-size: 20px\" class=\"fa fa-bar-chart color-primary ml-2 cursor\" aria-hidden=\"true\"></i>\n                                <img (click)=\"moveToPendingAlert(list)\" *ngIf=\"list.status != 1 && list.status != 2\" alt=\"\" class=\"ml-2\" src=\"assets/images/ristaschool/Pending.png\" title=\"Rework\">\n                            </div>\n                            <div class=\"col-2 d-flex justify-content-center align-items-center mx-0 my-2\">\n                                <button (click)=\"testStatus = list.status;studentsAnswerList(list, list.status)\" [disabled]=\"list.status == 1\" class=\"{{list.status == 1 ? 'btn btn-outline-primary' : 'btn btn-primary'}} custom-btn\">Responses</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"pageType == 2\" class=\"mt-{{totalAnsSample != '' && totalAns[0]?.question_type_id != 55 ? '3' : '0'}}\">\n        <div *ngIf=\"correctPdfPath?.length != 0\" class=\"scrollPanel4 row\">\n            <div class=\"col-md-{{(showPDFAnswer && showingType != '3') ? 8 : (showPDFAnswer && showingType == '3') ? 6 : 12}}\">\n                <div>\n                    <div *ngIf=\"pageType == 2 && totalAnsSample != ''\" class=\"row\">\n                        <div class=\"col-md-{{showPDFAnswer ? 12 : 7}}\">\n                            <div *ngIf=\"!functionCalled || (showingType == '2' && blink == false)\" id=\"custom-pdf-loader\" style=\"height: 100vh;\">\n                                <img alt=\"\" src=\"assets/images/pre-loader/loader-01.svg\">\n                            </div>\n                            <div class=\"col-md-12\" *ngIf=\"functionCalled && showingType == '1' && !isPdfAvailable\">\n                                <a [title]=\"pdfpath.link\" [href]=\"pdfpath.link\" target=\"_blank\">\n                                    <div class=\"col-md-12 flex-center flex-wrap link-card\" style=\"height: 90vh\">\n                                        <div class=\"col-md-12 d-flex justify-content-center\">\n                                            <img *ngIf=\"pdfpath.type == 'document'\" class=\"size-120px\" src=\"assets/images/icons/doc-icon.png\" alt=\"doc\">\n                                            <img *ngIf=\"pdfpath.type == 'audio'\" class=\"size-120px\" src=\"assets/images/icons/audio-icon.png\" alt=\"mp3\">\n                                            <img *ngIf=\"pdfpath.type == 'video'\" class=\"size-120px\" src=\"assets/images/icons/video-icon.png\" alt=\"mp4\">\n                                            <img *ngIf=\"pdfpath.type == 'ppt'\" class=\"size-120px\" src=\"assets/images/icons/ppt-icon.png\" alt=\"ppt\">\n                                            <img *ngIf=\"pdfpath.type == 'Others'\" class=\"size-120px\" src=\"assets/images/icons/others-icon.png\" alt=\"others\">\n                                        </div>\n                                        <a [title]=\"pdfpath.link\" [href]=\"pdfpath.link\" target=\"_blank\">{{pdfpath.name}}</a>\n                                    </div>\n                                </a>\n                            </div>\n                            <app-annotation *ngIf=\"functionCalled && showingType == '1' && isPdfAvailable\"\n                                            (annotate)=\"getAnnotation($event)\"\n                                            [getAnnotate]=\"areaInfo\"\n                                            [getDragQues]=\"dragQuestion\"\n                                            [pdfPath]=\"pdfTemplate\"\n                                            [toolHide]=\"false\"\n                                            [userType]=\"'teacher'\"></app-annotation>\n                            <app-annotation (annotate)=\"getSheetInfo($event)\"\n                                            *ngIf=\"functionCalled && showingType == '2' && blink\"\n                                            [getAnnotate]=\"sheetInfo\"\n                                            [pdfPath]=\"answerSheetPath\"\n                                            [toolHide]=\"false\"\n                                            [userType]=\"'teacher'\"></app-annotation>\n                        </div>\n                        <div [hidden]=\"deleteAnnatation\" [ngClass]=\"showingType == 3 ? 'col-md-12' : showPDFAnswer ? 'col-md-6 px-0' : 'col-md-5 px-0'\">\n                            <div class=\"view-question\">\n                                <div (scrolled)=\"onScrollDown($event)\"\n                                     [fromRoot]=\"true\"\n                                     id=\"scrollinnnersection\"\n                                     [infiniteScrollContainer]=\"selector\"\n                                     [infiniteScrollDistance]=\"5\"\n                                     [infiniteScrollThrottle]=\"50\"\n                                     class=\"card scrollPanelCorrection\"\n                                     infiniteScroll>\n                                    <div *ngFor=\"let sec of totalAns; let i = index\" [ngStyle]=\"{'padding': showingType == '3' ? '2rem' : '0.3rem' }\">\n                                        <div *ngIf=\"sec?.heading != ''\" [hidden]=\"sec?.section?.length == 0\" class=\"col-md-{{showingType != '3' || showPDFAnswer ? 12 : 6}} mb-3\">\n                                            <input [value]=\"sec?.heading\" class=\"input-custom-modal div-disable\" type=\"text\">\n                                        </div>\n\n                                        <div *ngFor=\"let item of sec?.section; let j = index\">\n                                            <div [hidden]=\"!item.isShow\" class=\"mb-3\">\n                                                <div class=\"col-12 px-0 d-flex justify-content-between\">\n                                                    <div class=\"col-md-{{showingType == '3' ? 1 : 2}}\">\n                                                        <div class=\"question-no\">{{item?.sub_question_no}}</div>\n                                                    </div>\n                                                    <div class=\"col-md-{{showingType == '3' ? 2 : 1}} pt-2\">\n                                                        <i (click)=\"givePoints('true', item, 'pdf', i, j)\" *ngIf=\"item.points != item.given_points\" aria-hidden=\"true\" class=\"fa fa-2x fa-circle-thin\" style=\"color: darkgrey\"></i>\n                                                        <i (click)=\"givePoints('false', item, 'pdf', i, j)\" *ngIf=\"item.points == item.given_points\" aria-hidden=\"true\" class=\"fa fa-2x fa-check-circle\" style=\"color: green\"></i>\n                                                    </div>\n                                                    <div class=\"col-md-{{showingType == '3' ? 9 : 9}} text-right d-flex justify-content-end\">\n                                                        <div class=\"pull-right px-0 {{showingType == '3' ? 'mr-2' : ''}}\">\n                                                            <button *ngIf=\"item.rough_image_url != '' || item.student_roughdata != ''\" [attr.aria-controls]=\"'#roughArea' + i + 'sec' + j\" [attr.data-target]=\"'#roughArea' + i + 'sec' + j\" aria-expanded=\"false\" class=\"btn-sm btn-primary mr-2\" data-toggle=\"collapse\">Work Space</button>\n                                                            <button *ngIf=\"item.student_feedback != ''\" [attr.aria-controls]=\"'#studentFeedback' + i + 'sec' + j\" [attr.data-target]=\"'#studentFeedback' + i + 'sec' + j\" aria-expanded=\"false\" class=\"btn-sm btn-primary mr-2\" data-toggle=\"collapse\">Student Feedback</button>\n                                                            <button (click)=\"openWorkArea(item)\" *ngIf=\"item?.workarea?.length != 0\" class=\"btn-sm btn-primary mr-2\">Work Area</button>\n                                                        </div>\n                                                        <div class=\"col-md-{{(showingType == '3' && !showPDFAnswer) ? 2 : showPDFAnswer ? 5 : 4}} px-0\">\n                                                            <div class=\"d-flex px-0\">\n                                                                <span style=\"font-size: 18px\" class=\"mb-0 ml-1 font-weight-bold align-content-center\">Points:\n                                                                    <input style=\"width: 10%\" (input)=\"getPoints($event , i, j, 'pdf'); markValidation($event, item.points , i, j, 'pdf')\" (keypress)=\"numberValidate($event)\" [value]=\"item.given_points\" autocomplete=\"off\"\n                                                                           class=\"mark-input input-field p-0 border-0\" name=\"points\">\n                                                                    <span class=\"mx-2 align-content-center\">/</span>\n                                                                    <span class=\"color-primary font-weight-bold\">{{item.points}}</span>\n                                                                </span>\n                                                                <!-- <input (input)=\"getPoints($event , i, j, 'pdf'); markValidation($event, item.points , i, j, 'pdf')\" (keypress)=\"numberValidate($event)\" [value]=\"item.given_points\" autocomplete=\"off\" class=\"mark-input\" name=\"points\" style=\"text-align: center\">\n                                                                <input (keypress)=\"numberValidate($event)\" [value]=\"item.points\" class=\"mark-input div-disable\" style=\"text-align: center\"> -->\n                                                            </div>\n                                                            <br>\n                                                            <span *ngIf=\"item.maxValErr\" class=\"errormessage\">Invalid Points</span>\n                                                        </div>\n                                                    </div>\n                                                    <!--                        <div *ngIf=\"showpdf == false\" class=\"col-md-10 text-right\">-->\n                                                    <!--                            <button [attr.aria-controls]=\"'#studentFeedback' + j\" [attr.data-target]=\"'#studentFeedback' + j\" aria-expanded=\"false\" class=\"btn-sm btn-primary mr-2\" data-toggle=\"collapse\">student feedback</button>-->\n                                                    <!--                            <input (input)=\"getPoints($event , i, j); markValidation($event, item.points, i, j)\" (keypress)=\"numberValidate($event)\" [value]=\"item.given_points\" autocomplete=\"off\" class=\"mark-input\" name=\"points\" style=\"text-align: center\">-->\n                                                    <!--                            <input (keypress)=\"numberValidate($event)\" [value]=\"item.points\" class=\"mark-input div-disable\" style=\"text-align: center\">-->\n                                                    <!--                            <br>-->\n                                                    <!--                            <span *ngIf=\"item.maxValErr\" class=\"errormessage\">Invalid Points</span>-->\n                                                    <!--                        </div>-->\n                                                </div>\n                                                <div class=\"col-md-12 px-0\">\n                                                    <div class=\"col-md-12\">\n                                                        <div [hidden]=\"item.question == ''\" [innerHTML]=\"item.question | sanitizeHtml\" class=\"mb-4 mt-3 div-disable\"></div>\n                                                        <ul *ngIf=\"item.question_type_id == 1\" class=\"mt-4\">\n                                                            <li *ngFor=\"let option of item.array\" [ngClass]=\"{'ans-correct': option.trim().toLowerCase() == item.answer.toString().trim().toLowerCase(), 'ans-selected': option.trim().toLowerCase() == item.student_answer.trim().toLowerCase(), 'ans-wrong': option.trim().toLowerCase() != item.answer.toString().trim().toLowerCase() && option.trim().toLowerCase() == item.student_answer.trim().toLowerCase()}\">\n                                                                <span><span>{{option}}</span>\n                                                                    <i aria-hidden=\"true\" class=\"fa fa-check\"></i>\n                                                                    <i aria-hidden=\"true\" class=\"fa fa-times\"></i>\n                                                                </span>\n                                                            </li>\n                                                        </ul>\n                                                        <ul *ngIf=\"item.question_type_id == 3\" class=\"mt-4\">\n                                                            <li [ngClass]=\"{'ans-correct': item.answer.toString() == 'true', 'ans-selected': item.student_answer == 'true', 'ans-wrong': item.answer.toString() == 'false' && item.student_answer == 'true'}\">\n                                                                <span><input [checked]=\"item.student_answer == 'true'\" class=\"radio-size form-control mr-2 div-disable\" name=\"{{i}}ans{{j}}\" type=\"radio\" value=\"true\"> True\n                                                                    <i aria-hidden=\"true\" class=\"fa fa-check\"></i>\n                                                                    <i aria-hidden=\"true\" class=\"fa fa-times\"></i>\n                                                                </span>\n                                                            </li>\n                                                            <li [ngClass]=\"{'ans-correct': item.answer.toString() == 'false', 'ans-selected': item.student_answer == 'false', 'ans-wrong': item.answer.toString() == 'true' && item.student_answer == 'false'}\">\n                                                                <span><input [checked]=\"item.student_answer == 'false'\" class=\"radio-size form-control mr-2 div-disable\" name=\"{{i}}ans{{j}}\" type=\"radio\" value=\"false\"> False\n                                                                    <i aria-hidden=\"true\" class=\"fa fa-check\"></i>\n                                                                    <i aria-hidden=\"true\" class=\"fa fa-times\"></i>\n                                                                </span>\n                                                            </li>\n                                                        </ul>\n                                                        <ul *ngIf=\"item.question_type_id == 9\" class=\"mt-4\">\n                                                            <li *ngFor=\"let option of item.mob_options\" [ngClass]=\"{'ans-correct': option == item.answer.toString(), 'ans-selected': option == item.student_answer, 'ans-wrong': option != item.answer.toString() && option == item.student_answer}\">\n                                                                <span class=\"capital\">{{option}}\n                                                                    <i aria-hidden=\"true\" class=\"fa fa-check\"></i>\n                                                                    <i aria-hidden=\"true\" class=\"fa fa-times\"></i>\n                                                                </span>\n                                                            </li>\n                                                        </ul>\n                                                        <div *ngIf=\"item.question_type_id == 10\" class=\"col-md-12 mt-4 px-0\">\n                                                            <textarea [ngClass]=\"item.enteredAnswer ? 'correct-ans' : 'wrong-ans'\" [value]=\"item.student_answer\" class=\"form-control mt-2\" cols=\"30\" readonly rows=\"4\"></textarea>\n                                                            <label *ngFor=\"let answer of item.answer;let k = index; let first = first\" class=\"mt-{{first ? '4' : '2'}} col-12\"><b>Correct answer {{k+1}} :\n                                                                <span class=\"font-weight-light\">{{answer}}</span></b></label>\n                                                        </div>\n                                                        <div *ngIf=\"item.question_type_id == 20\" class=\"col-md-12 mt-4 px-0\">\n                                                            <textarea class=\"form-control\" cols=\"30\" readonly rows=\"4\">{{item.student_answer}}</textarea>\n                                                        </div>\n                                                        <div *ngIf=\"item.question_type_id == 30\" class=\"col-md-12 mt-4 px-0\">\n                                                            <div class=\"d-flex col-12\">\n                                                                <label class=\"d-flex align-items-center\">\n                                                                    <b>Student Answer</b>\n                                                                    <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                                                    <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                                                </label>\n                                                                <h4 [innerHTML]=\"item.student_answer | sanitizeHtml\" class=\"ml-3 overflow-auto\"></h4>\n                                                            </div>\n                                                            <div class=\"d-flex col-12\" *ngFor=\"let answer of item.answer; let k = index;\">\n                                                                <label class=\"font-weight-bold\"><b>Correct Answer {{k+1}}</b></label>\n                                                                <h4 [innerHTML]=\"answer | sanitizeHtml\" class=\"ml-3 overflow-auto\"></h4>\n                                                            </div>\n                                                        </div>\n                                                        <div *ngIf=\"item.question_type_id == 54\" class=\"col-md-12 mt-4 px-0\">\n                                                            <div *ngFor=\"let blank of item.answer; let k = index\">\n                                                            <textarea *ngIf=\"item.student_answer != '' && item.student_answer != null\" [ngClass]=\"{'correct-ans': item.match_case == '1' ? (item.answer[k].value.trim() == item.student_answer[k].trim()) : item.answer[k].value.trim().toLowerCase().split(' ').join('') == item.student_answer[k].trim().toLowerCase().split(' ').join(''),\n                                                            'wrong-ans': item.match_case ? (item.answer[k].value.trim() != item.student_answer[k].trim()) : item.answer[k].value.trim().toLowerCase().split(' ').join('') != item.student_answer[k].trim().toLowerCase().split(' ').join('')}\"\n                                                                [value]=\"item.student_answer[k]\"\n                                                                class=\"form-control mt-2\" cols=\"30\" readonly rows=\"4\">\n                                                            </textarea>\n                                                                <textarea *ngIf=\"item.student_answer == '' || item.student_answer == null\" class=\"form-control mt-2\" cols=\"30\" placeholder=\"Student Not Answered\"\n                                                                          readonly rows=\"2\"></textarea>\n                                                            <label class=\"mt-1 py-1\"><b>Correct Answer : {{item.answer[k].value}}</b></label>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-md-{{showingType == '3' ? 3 : 6}}\">\n                                                        <div class=\"row mt-3 px-3\">\n                                                            <div class=\"col-md-12 collapse px-0\" id=\"roughArea{{i}}sec{{j}}\">\n                                                                <img *ngIf=\"item.rough_image_url != ''\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + item.rough_image_url)\" class=\"customize-card2 col-md-12 pull-right\" alt=\"\">\n                                                                <div *ngIf=\"item.rough_image_url == ''\" [innerHTML]=\"item.student_roughdata | sanitizeHtml\" class=\"customize-card col-md-12 px-3\" style=\"text-align: center\"></div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-md-{{showingType == '3' ? 3 : 6}}\">\n                                                        <div class=\"row mt-3 px-3\">\n                                                            <div class=\"col-md-12 collapse px-0\" id=\"studentFeedback{{i}}sec{{j}}\">\n                                                                <div *ngIf=\"item.student_feedback != ''\" class=\"customize-card col-md-12 px-3\">{{item.student_feedback}}</div>\n                                                                <div *ngIf=\"item.student_feedback == ''\" class=\"customize-card col-md-12 px-3\" style=\"text-align: center\">No Feedback Found</div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-md-12 px-0\">\n                                                        <div *ngIf=\"item.question_type_id == 40\" class=\"col-md-12 mt-4 px-0 {{showingType == '3' && !showPDFAnswer ? 'd-flex' : ''}}\">\n                                                            <div class=\"col-md-{{showingType == '3' && !showPDFAnswer ? 6 : 12}} px-0\">\n                                                                <label class=\"d-flex align-items-center\">\n                                                                    <b>Student Answer</b>\n                                                                    <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                                                    <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                                                </label>\n                                                                <div *ngIf=\"item.student_answer\">\n                                                                    <app-graph-component *ngIf=\"item?.student_answer?.length != 0\"\n                                                                                         [editMode]=\"false\"\n                                                                                         [editPatchValue]=\"parseVal(item.student_answer[0].correctAnswer)\"\n                                                                                         [graphId]=\"i+'Editgraph'+item.sub_question_no+'id'\"\n                                                                                         [questionType]=\"'40'\"></app-graph-component>\n                                                                    <app-graph-component *ngIf=\"item.student_answer?.length == 0\"\n                                                                                         [editMode]=\"false\"\n                                                                                         [editPatchValue]=\"false\"\n                                                                                         [graphId]=\"i+'Editgraphnull'+item.sub_question_no+'id'\"\n                                                                                         [questionType]=\"'40'\"></app-graph-component>\n                                                                </div>\n                                                                <div *ngIf=\"item.editor_answer != ''\" class=\"col-md-12 mt-4\">\n                                                                    <h4 [innerHTML]=\"item.editor_answer | sanitizeHtml\" class=\"innerhtml-margin-clear\"  [ngClass]=\"item.given_points == item.points ? 'form-span-correct' : 'form-span-wrong'\"></h4>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"col-md-{{showingType == '3' && !showPDFAnswer ? 6 : 12}} px-0\">\n                                                                <label class=\"py-1\"><b>Correct Answer</b></label>\n                                                                <app-graph-component [editMode]=\"false\"\n                                                                                     [editPatchValue]=\"parseVal(item.answer)\"\n                                                                                     [graphId]=\"i+'correctgraph'+item.sub_question_no+'id'\"\n                                                                                     [questionType]=\"'40'\"></app-graph-component>\n                                                                <div *ngIf=\"item.question_editor_answer != ''\" class=\"col-md-12 mt-4\">\n                                                                    <h4 [innerHTML]=\"item.question_editor_answer | sanitizeHtml\" class=\"innerhtml-margin-clear form-span\"></h4>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n<!--                                                <div *ngIf=\"item.answer_explanation != ''\" class=\"row mt-4 d-flex\">-->\n<!--                                                    <div class=\"col-md-12\">-->\n<!--                                                        <button [attr.aria-controls]=\"'#explanation' + i + 'sec' + j\" [attr.data-target]=\"'#explanation' + i + 'sec' + j\" class=\"btn-secondary btn-sm\" data-toggle=\"collapse\">explanation</button>-->\n<!--                                                    </div>-->\n<!--                                                </div>-->\n                                                <div *ngIf=\"item.answer_explanation != ''\" class=\"col-md-12 mt-3 mb-3 px-0\">\n                                                    <div  class=\"col-md-12\">\n                                                        <label class=\"color-primary\">Explanation</label>\n                                                        <div [innerHTML]=\"item.answer_explanation | sanitizeHtml\" class=\"col-md-12 custom-card\"></div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-12 px-0 mt-4 d-flex\">\n                                                    <div class=\"col-md-12\">\n                                                        <label class=\"color-primary\">Feedback</label>\n                                                        <textarea (input)=\"getFeedback($event, i, j)\" [value]=\"item.feedback\" class=\"form-control\" placeholder=\"Teacher Feedback\" rows=\"3\"></textarea>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12 mt-3 card p-4\">\n                                    <div class=\"row px-3\">\n                                        <div class=\"col-md-12\">\n                                            <div class=\"col-md-12\">\n                                                <button aria-controls=\"#overallFeedback\" aria-expanded=\"false\" class=\"btn-sm btn-primary mr-2\" data-target=\"#overallFeedback\" data-toggle=\"collapse\">Student Overall Feedback</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mt-3 mb-3 px-3\">\n                                        <div class=\"col-md-12 collapse\" id=\"overallFeedback\">\n                                            <div class=\"col-md-12\">\n                                                <div *ngIf=\"totalStudentFeedBack != ''\" class=\"col-md-12 customize-card\">{{totalStudentFeedBack}}</div>\n                                                <div *ngIf=\"totalStudentFeedBack == ''\" class=\"col-md-12 customize-card text-center\">No Feedback Found</div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12 d-flex\">\n                                        <div class=\"col-md-6 px-0 mb-2\">\n                                            <div class=\"col-md-12\">\n                                                <label>Obtained Points</label>\n                                                <input [(ngModel)]=\"studentPoints\" class=\"form-control\" type=\"text\">\n                                            </div>\n                                            <div class=\"col-md-12 mt-3\">\n                                                <label>Total Points</label>\n                                                <input [(ngModel)]=\"totalPoints\" class=\"form-control div-disable\" type=\"text\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-6 mb-1\">\n                                            <label>Overall Feedback</label>\n                                            <textarea [(ngModel)]=\"totalFeedBack\" class=\"form-control\" cols=\"30\" placeholder=\"Overall Feedback\" rows=\"5\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div [hidden]=\"scoreStatus == 3 || scoreStatus == 2\" class=\"col-md-12 mt-4 mb-4\">\n                                    <button (click)=\"saveAnswer(1, 1, true)\" class=\"btn btn-primary pull-right ml-2\">Submit</button>\n                                    <button (click)=\"saveAnswer(2, 1, true)\" class=\"btn btn-outline-primary pull-right\">Save</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"pageType == 2 && totalAnsSample == ''\" class=\"row mt-4\">\n                        <div *ngIf=\"!functionCalled || (showingType == '2' && blink == false)\" id=\"custom-pdf-loader\" style=\"height: 100vh;\">\n                            <img alt=\"\" src=\"assets/images/pre-loader/loader-01.svg\">\n                        </div>\n                        <div *ngIf=\"functionCalled\" class=\"col-md-{{showPDFAnswer ? 12 : 8}}\">\n                            <app-annotation (annotate)=\"getAnnotation($event)\"\n                                            (deleteAnnotation)=\"getDelete($event)\"\n                                            *ngIf=\"showingType == '1'\"\n                                            [getAnnotate]=\"areaInfo\"\n                                            [getDragQues]=\"dragQuestion\"\n                                            [pdfPath]=\"pdfTemplate\"\n                                            [toolHide]=\"false\"\n                                            [userType]=\"'teacher'\"></app-annotation>\n                            <app-annotation (annotate)=\"getSheetInfo($event)\"\n                                            (deleteAnnotation)=\"getDelete($event)\"\n                                            *ngIf=\"showingType == '2' && blink\"\n                                            [getAnnotate]=\"sheetInfo\"\n                                            [pdfPath]=\"answerSheetPath\"\n                                            [toolHide]=\"false\"\n                                            [userType]=\"'teacher'\"></app-annotation>\n                        </div>\n                        <div *ngIf=\"!showPDFAnswer\" class=\"col-md-4\">\n                            <div class=\"col-md-12\">\n                                <div class=\"row px-3\">\n                                    <div class=\"col-md-12\">\n                                        <div class=\"col-md-12\">\n                                            <button aria-controls=\"#overallFeedbackPdf\" aria-expanded=\"false\" class=\"btn-sm btn-primary mr-2\" data-target=\"#overallFeedbackPdf\" data-toggle=\"collapse\">Student Overall Feedback</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row mt-3 mb-3 px-3\">\n                                    <div class=\"col-md-12 collapse\" id=\"overallFeedbackPdf\">\n                                        <div class=\"col-md-12\">\n                                            <div *ngIf=\"totalStudentFeedBack != ''\" class=\"col-md-12 customize-card\">{{totalStudentFeedBack}}</div>\n                                            <div *ngIf=\"totalStudentFeedBack == ''\" class=\"col-md-12 customize-card text-center\">No feedback found</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-12 ml-2 mt-2\">\n                                    <div class=\"form-group  d-flex flex-column\">\n                                        <div class=\"mt-2 ml-2\">\n                                            <label class=\"labelName\">Total Points</label>\n                                        </div>\n                                        <div>\n                                            <input (keypress)=\"numberValidate($event)\" [(ngModel)]=\"totalPoints\" class=\"form-control  w-100 ml-2 pointInput\" maxlength=\"3\" type=\"text\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-12 ml-2\">\n                                    <div class=\"form-group d-flex flex-column\">\n                                        <div class=\"mt-2 ml-2\">\n                                            <label class=\"labelName\">Obtained Points</label>\n                                        </div>\n                                        <div>\n                                            <input (keypress)=\"numberValidate($event)\" [(ngModel)]=\"studentPoints\" class=\"form-control w-100 ml-2 pointInput\" maxlength=\"4\" type=\"text\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-12 ml-2\">\n                                    <div class=\"form-group d-flex flex-column\">\n                                        <div class=\"mt-2 ml-2\">\n                                            <label class=\"labelName\">Feedback</label>\n                                        </div>\n                                        <div>\n                                            <textarea [(ngModel)]=\"totalFeedBack\" class=\"form-control  w-100 ml-2 pointInput\" type=\"text\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div [hidden]=\"scoreStatus == 3 || scoreStatus == 2\" class=\"col-md-12 mt-4 mb-4\">\n                                    <button (click)=\"saveAnswer(1, 4, true)\" class=\"btn btn-primary pull-right ml-2\">Submit</button>\n                                    <button (click)=\"saveAnswer(2, 4, true)\" class=\"btn btn-outline-primary pull-right\">Save</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"correctAnswerKeyPath?.length != 0 && showPDFAnswer\" class=\"col-md-{{showingType != '3' ? 4 : 6}} px-1\">\n                <app-annotation\n                        [getAnnotate]=\"previewInfo\"\n                        [pdfPath]=\"anserPdfTemplate\"\n                        [toolHide]=\"true\"></app-annotation>\n            </div>\n        </div>\n        <div *ngIf=\"correctPdfPath?.length == 0\" class=\"col-md-12 scrollPanel4\">\n            <div *ngIf=\"pageType == 2\" class=\"row\">\n                <div [ngStyle]=\"{'max-height': totalFeedbackMaxHeight}\" [hidden]=\"!item.isShow\" *ngFor=\"let item of totalAns; let i = index\"\n                     class=\"{{isSingleQnsWithFeedbackType && previousFeedBack.length != 0 ? 'col-md-6 content-card' : 'col-md-12'}} px-0\">\n                    <div class=\"card p-3\">\n                        <div *ngIf=\"item.question_type_id != '24'\" class=\"d-flex justify-content-between align-items-center\">\n                            <div class=\"col-md-1\">\n                                <p class=\"question-no col-10 m-0\">{{i + 1}}</p>\n                            </div>\n                            <div class=\"col-md-1 px-0\">\n                                <i (click)=\"givePoints('true', item, 'scratch', i, 0)\" *ngIf=\"item.points != item.given_points\" aria-hidden=\"true\" class=\"fa fa-2x fa-circle-thin cursor\" style=\"color: darkgrey\"></i>\n                                <i (click)=\"givePoints('false', item, 'scratch', i, 0)\" *ngIf=\"item.points == item.given_points\" aria-hidden=\"true\" class=\"fa fa-2x fa-check-circle cursor\" style=\"color: green\"></i>\n                            </div>\n                            <div class=\"col-md-10 text-right\">\n                                    <span *ngIf=\"!isSingleQnsWithFeedbackType\">\n                                        <span style=\"font-size: 18px\" class=\"mb-0\" *ngIf=\"getElapsedTime(item) as elapsed\"><b>{{elapsed.minutes}}</b></span>\n                                        <span class=\"mb-0 font-weight-bold mx-2\">:</span>\n                                        <span style=\"font-size: 18px\" class=\"mb-0\" *ngIf=\"getElapsedTime(item) as elapsed\"><b>{{elapsed.seconds}}</b></span>\n                                    </span>\n\n                                <span style=\"font-size: 18px\" class=\"mb-0 ml-4 font-weight-bold align-content-center\">Points:\n                                        <input style=\"width: 2%\" (input)=\"getPoints($event , i, 0, 'scratch'); markValidation($event, item.points , i, 0, 'scratch')\"\n                                               (keypress)=\"numberValidate($event)\" [value]=\"item.given_points\" autocomplete=\"off\"\n                                               class=\"mark-input input-field p-0 border-0\" name=\"points\">\n                                        <span class=\"mx-2 align-content-center\">/</span>\n                                        <span class=\"color-primary font-weight-bold\">{{item.points}}</span>\n                                    </span>\n                                <br>\n                                <span *ngIf=\"item.maxValErr\" class=\"errormessage\">Invalid Points</span>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-12 view-question\">\n                            <div *ngIf=\"item.question_type_id != 24 && item.question_type_id != 55 || item.question_type_id == 55 || item.question_type_id == 24 && item.subQuestions[0]?.passage && item.subQuestions[0]?.passage != ''\"\n                                 class=\"col-12 mt-3 editor_bullet\">\n                                <span *ngIf=\"item.question_type_id != 24 && item.question_type_id != 55\" [innerHTML]=\"item.question | sanitizeHtml\" class=\"innerhtml-margin-clear\"></span>\n                                <span *ngIf=\"item.question_type_id == 55\" [innerHTML]=\"convertMarkdownToHtml(item.question, 'single')\" class=\"innerhtml-margin-clear\"></span>\n                                <span *ngIf=\"item.question_type_id == 24 && item.subQuestions[0]?.passage && item.subQuestions[0]?.passage != ''\"\n                                      [innerHTML]=\"item.subQuestions[0]?.passage | sanitizeHtml\" class=\"innerhtml-margin-clear\"></span>\n                            </div>\n                            <div *ngIf=\"item.question_type_id == '1' || item.question_type_id == '2'\" class=\"row px-3\">\n                                <div class=\"col-6 mt-3\">\n                                    <label class=\"d-flex align-items-center\">\n                                        <b>Student Answer</b>\n                                        <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                        <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                    </label>\n                                    <div *ngFor=\"let option of item.student_answer; let k = index\" [ngClass]=\"{'correct-ans-selected' : option?.isSelected === '' ? false : option?.isSelected == k ? item.given_points == item.points : false, 'wrong-ans-selected' : option?.isSelected === '' ? false : option?.isSelected == k ? item.given_points != item.points : false}\" class=\"col-md-12 mb-3 mx-3 p-2 d-flex align-items-center\">\n                                        <button class=\"btn-primary inner_button mr-3\">{{((k+1) + 9).toString(36).toUpperCase()}}</button>\n                                        <span [innerHTML]=\"option.options | sanitizeHtml\" class=\"remove-margin-bottom\"></span>\n                                    </div>\n                                </div>\n                                <div class=\"col-6 mt-3\">\n                                    <label class=\"py-1\"><b>Correct Answer</b></label>\n                                    <div [ngClass]=\"{'correct-ans-selected' : option.correctAnswer != ''}\"\n                                         *ngFor=\"let option of item.answer; let k = index\" style=\"max-height: 20rem\"\n                                         class=\"{{option.correctAnswer != '' ? 'mx-2 p-2 mb-2 overflow-auto row' : ''}}\">\n                                        <button *ngIf=\"option.correctAnswer != ''\" class=\"btn-primary inner_button\">{{((k+1) + 9).toString(36).toUpperCase()}}</button>\n                                        <div class=\"col-11 pt-1 pr-0\" *ngIf=\"option.correctAnswer != ''\">\n                                            <span [innerHTML]=\"item.options[k].options | sanitizeHtml\" class=\"remove-margin-bottom\"></span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"item.question_type_id == '5' || item.question_type_id == '7'\" class=\"col-md-12 d-flex\">\n                                <div class=\"col-md-6 table-flexible\">\n                                    <label class=\"d-flex align-items-center\">\n                                        <b>Student Answer</b>\n                                        <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                        <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                    </label>\n                                    <table class=\"table table-bordered text-center div-disable\">\n                                        <thead>\n                                        <tr>\n                                            <th>Questions</th>\n                                            <th *ngFor=\"let list of item.answer; let k=index\" [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\"></th>\n                                        </tr>\n                                        </thead>\n                                        <tbody>\n                                        <tr *ngFor=\"let list of item.student_answer; let j=index\">\n                                            <td [innerHTML]=\"list.options | sanitizeHtml\" class=\"remove-margin-bottom\"></td>\n                                            <td *ngFor=\"let ans of item.answer; let k=index\">\n                                                <input *ngIf=\"item.question_type_id == '5'\" [checked]=\"this.totalAns[i].student_answer[j]?.isSelected == '' ? false : this.totalAns[i].student_answer[j]?.isSelected == k.toString()\" class=\"radio_animated\" id=\"{{k}}chooseSinglett{{j}}\" name=\"{{i}}choosesingle{{j}}\" type=\"radio\">\n                                                <input *ngIf=\"item.question_type_id == '7'\" [checked]=\"splitMultiChoose(this.totalAns[i].student_answer[j]?.isSelected, k)\" id=\"{{k}}chooseMultitt{{j}}\" type=\"checkbox\">\n                                            </td>\n                                        </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div class=\"col-md-6 table-flexible\">\n                                    <label class=\"py-1\"><b>Correct Answer</b></label>\n                                    <table class=\"table table-bordered text-center div-disable\">\n                                        <thead>\n                                        <tr>\n                                            <th>Questions</th>\n                                            <th *ngFor=\"let list of item.answer; let k=index\" [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\"></th>\n                                        </tr>\n                                        </thead>\n                                        <tbody>\n                                        <tr *ngFor=\"let list of item.student_answer; let j=index\">\n                                            <td [innerHTML]=\"list.options | sanitizeHtml\" class=\"remove-margin-bottom\"></td>\n                                            <td *ngFor=\"let ans of item.answer; let k=index\">\n                                                <input *ngIf=\"item.question_type_id == '5'\" [checked]=\"this.totalAns[i].heading_option[j].correctActive === k\" class=\"radio_animated\" name=\"{{i}}choosesingle{{j}}corect\" type=\"radio\">\n                                                <input *ngIf=\"item.question_type_id == '7'\" id=\"chooseMultipass{{i}}{{j}}{{k}}\" type=\"checkbox\">\n                                            </td>\n                                        </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                            <div *ngIf=\"item.question_type_id == '9'\" class=\"col-md-12 d-flex\">\n                                <div class=\"col-md-6\">\n                                    <label class=\"d-flex align-items-center\">\n                                        <b>Student Answer</b>\n                                        <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                        <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                    </label>\n                                    <div *ngFor=\"let ans of item.student_answer; let j = index\" class=\"mb-3 d-flex\">\n                                        <div  [ngClass]=\"item.given_points == item.points ? 'question-no-small-correct' : 'question-no-small-wrong'\">\n                                            <h6 class=\"mb-0\">{{j+1}}</h6>\n                                        </div>\n                                        <!--                                    <select *ngIf=\"item.isSelected != ''\" class=\"form-control ml-3\">-->\n                                        <!--                                        <option *ngFor=\"let option of item.options; let k = index\"-->\n                                        <!--                                                [innerHTML]=\"option.listOption | sanitizeHtml\"-->\n                                        <!--                                                [selected]=\"item.isSelected == k\" disabled>-->\n                                        <!--                                        </option>-->\n                                        <!--                                    </select>-->\n                                        <div class=\"col-md-11\">\n                                            <div class=\"col-md-12 bg-white innerhtml-margin-clear p-2 dropdown-toggle d-flex justify-content-between\"  [ngClass]=\"item.given_points == item.points ? 'dropdown-border-correct' : 'dropdown-border-wrong'\" data-toggle=\"dropdown\" id=\"{{i}}dropdownStudent{{j}}\"></div>\n                                            <div class=\"col-md-11 dropdown-menu\">\n                                                <span *ngFor=\"let option of ans.options; let k = index\"\n                                                      [innerHTML]=\"option.listOption | sanitizeHtml\"\n                                                      class=\"dropdown-item dropdown-link innerhtml-margin-clear\"\n                                                      style=\"overflow: scroll; overflow-y: hidden\"></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <label class=\"py-1\"><b>Correct Answer</b></label>\n                                    <div *ngFor=\"let answer of item.answer; let j = index\" class=\"mb-3 d-flex\">\n                                        <div class=\"question-no-small\">\n                                            <h6 class=\"mb-0\">{{j+1}}</h6>\n                                        </div>\n                                        <div class=\"col-md-11\">\n                                            <div class=\"col-md-12 bg-white innerhtml-margin-clear p-2 dropdown-border dropdown-toggle d-flex justify-content-between\" data-toggle=\"dropdown\" id=\"{{i}}dropdownCorrect{{j}}\"></div>\n                                            <div class=\"col-md-11 dropdown-menu\">\n                                                <span *ngFor=\"let option of answer.options; let k = index\"\n                                                      [innerHTML]=\"option.listOption | sanitizeHtml\"\n                                                      class=\"dropdown-item dropdown-link innerhtml-margin-clear\"\n                                                      style=\"overflow: scroll; overflow-y: hidden\"></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"item.question_type_id == '10'\" class=\"col-md-12 d-flex\">\n                                <div class=\"col-md-6\">\n                                    <label class=\"d-flex align-items-center\">\n                                        <b>Student Answer</b>\n                                        <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                        <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                    </label>\n                                    <div *ngFor=\"let item of item.student_answer; let j = index\" class=\"col-md-12 mb-3 d-flex justify-content-between\">\n                                        <div class=\"question-no-small\">\n                                            <h6 class=\"mb-0\">{{j+1}}</h6>\n                                        </div>\n                                        <!--                            <input class=\"form-control ml-3\" type=\"text\" [value]=\"item.value\" disabled>-->\n                                        <span *ngIf=\"item?.isSelected != ''\" [innerHTML]=\"item?.isSelected | sanitizeHtml\" class=\"col-md-11\"  [ngClass]=\"item.given_points == item.points ? 'form-span-correct' : 'form-span-wrong'\"></span>\n                                        <span *ngIf=\"item?.isSelected == ''\" class=\"col-md-11\"  [ngClass]=\"item.given_points == item.points ? 'form-span-correct' : 'form-span-wrong'\">Student Not Answered</span>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <label class=\"py-1\"><b>Correct Answer</b></label>\n                                    <div *ngFor=\"let ans of item.answer; let j = index\" class=\"col-md-12 mb-3 d-flex justify-content-between\">\n                                        <div class=\"question-no-small\">\n                                            <h6 class=\"mb-0\">{{j+1}}</h6>\n                                        </div>\n                                        <!--                            <input class=\"form-control ml-3\" type=\"text\" [value]=\"item.value\" disabled>-->\n                                        <span [innerHTML]=\"ans.options[0].value | sanitizeHtml\" class=\"col-md-11 form-span\"></span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"item.question_type_id == '16'\" class=\"col-md-12 d-flex\">\n                                <div class=\"col-md-6 form-group mt-2\">\n                                    <label class=\"d-flex align-items-center\">\n                                        <b>Student Answer</b>\n                                        <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                        <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                    </label>\n                                    <!--                                <h6 *ngIf=\"item.target != ''\" class=\"text-center\"><b>{{item.target}}</b></h6>-->\n                                    <!--                                <h6 *ngIf=\"item.target == ''\" class=\"text-center\"><b>Target</b></h6>-->\n                                    <div *ngFor=\"let list of item.student_answer\" class=\"input-group mb-3 mt-3 inputMenu\">\n                                        <div class=\"input-group-prepend\">\n                                            <span class=\"input-group-text\"><img class=\"img-fluid\" src=\"assets/images/pdf-icons/equal@2x.png\" style=\"width: 25px; height: 25px;\"></span>\n                                        </div>\n                                        <div [innerHTML]=\"list.options | sanitizeHtml\" class=\"w-75 px-3 pt-4 pb-3 border border-dark\"></div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6 form-group mt-2\">\n                                    <label class=\"py-1\"><b>Correct Answer</b></label>\n                                    <!--                                <h6 *ngIf=\"item.target != ''\" class=\"text-center\"><b>{{item.target}}</b></h6>-->\n                                    <!--                                <h6 *ngIf=\"item.target == ''\" class=\"text-center\"><b>Target</b></h6>-->\n                                    <div *ngFor=\"let list of item.answer\" class=\"input-group mb-3 mt-3 inputMenu\">\n                                        <div class=\"input-group-prepend\">\n                                            <span class=\"input-group-text\"><img class=\"img-fluid\" src=\"assets/images/pdf-icons/equal@2x.png\" style=\"width: 25px; height: 25px;\"></span>\n                                        </div>\n                                        <div [innerHTML]=\"list.correctAnswer | sanitizeHtml\" class=\"w-75 px-3 pt-4 pb-3 border border-dark\"></div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div *ngIf=\"['20'].indexOf(item.question_type_id) > -1\" class=\"col-md-12 d-flex px-0\">\n                                <div class=\"col-md-6\">\n                                    <label class=\"d-flex align-items-center\">\n                                        <b>Student Answer</b>\n                                        <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                        <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                    </label>\n                                    <div *ngIf=\"item.student_answer[0]?.isSelected != ''\" class=\"form-span col-md-12 mb-3 d-flex editor_bullet\">\n                                        <span [innerHTML]=\"item.student_answer[0]?.isSelected | sanitizeHtml\" class=\"innerhtml-margin-clear\"></span>\n                                    </div>\n                                    <div *ngIf=\"item.student_answer[0]?.isSelected == ''\" class=\"col-md-12 mb-3 d-flex p-2\"  [ngClass]=\"item.given_points == item.points ? 'form-span-correct' : 'form-span-wrong'\">\n                                        <span>Student Not Answered</span>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div *ngFor=\"let answer of item.answer;let i = index\">\n                                        <label class=\"py-1\"><b>Correct Answer {{i + 1}}</b></label>\n                                        <div class=\"mb-2 form-span editor_bullet\">\n                                            <div [innerHTML]=\"answer.correctAnswer | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div *ngIf=\"['21', '22'].indexOf(item.question_type_id) > -1\" class=\"col-md-12 d-flex px-0\">\n                                <div class=\"col-md-6\">\n                                    <label class=\"d-flex align-items-center\">\n                                        <b>Student Answer</b>\n                                        <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                        <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                    </label>\n                                    <div *ngIf=\"item.student_answer[0]?.isSelected != ''\" class=\"col-md-12 mb-3 d-flex editor_bullet\"  [ngClass]=\"item.given_points == item.points ? 'form-span-correct' : 'form-span-wrong'\">\n                                        <span [innerHTML]=\"item.student_answer[0]?.isSelected | sanitizeHtml\" class=\"innerhtml-margin-clear\"></span>\n                                    </div>\n                                    <div *ngIf=\"item.student_answer[0]?.isSelected == ''\" class=\"col-md-12 mb-3 d-flex p-2\"  [ngClass]=\"item.given_points == item.points ? 'form-span-correct' : 'form-span-wrong'\">\n                                        <span class=\"form-span\">Student Not Answered</span>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <label class=\"py-1\"><b>Correct Answer</b></label>\n                                    <div class=\"col-md-12 mb-3 form-span editor_bullet\">\n                                        <span [innerHTML]=\"item.answer[0]?.correctAnswer | sanitizeHtml\" class=\"innerhtml-margin-clear\"></span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"['55'].indexOf(item.question_type_id) > -1\" class=\"row px-0\">\n<!--                                <div class=\"col-md-12 mt-3 mb-2\" *ngIf=\"item.answer[0]?.correctAnswer.trimStart() != ''\">-->\n<!--                                    <h5><b>Sample Essay: </b></h5>-->\n<!--                                    <div class=\"col-md-12 form-span feedback-card editor_bullet\">-->\n<!--                                        <span [innerHTML]=\"convertMarkdownToHtml(item.answer[0]?.correctAnswer, 'single')\" class=\"innerhtml-margin-clear\"></span>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n\n<!--                                <div class=\"col-3 my-3\" *ngIf=\"previousFeedBack?.length != 0\">-->\n<!--                                    <div class=\"col-12 sidebar-widget\">-->\n<!--                                        <h5 class=\"font-weight-bold\">Version History</h5>-->\n<!--                                        <ul class=\"widget-post pt-15\">-->\n<!--                                            <li *ngIf=\"scoreStatus == 2\" (click)=\"feedbackSelected('current')\" [ngClass]=\"{'active': selectedFeedBackIndex === ''}\">-->\n<!--                                                <a>Student Answer</a>-->\n<!--                                            </li>-->\n<!--                                            <li *ngFor=\"let feedback of previousFeedBack; let i = index; let first = first\" [ngClass]=\"{'active': selectedFeedBackIndex === previousFeedBack?.length - i}\"-->\n<!--                                                (click)=\"feedbackSelected(feedback)\">-->\n<!--&lt;!&ndash;                                                <a *ngIf=\"first && scoreStatus != 2\">Student Answer</a>&ndash;&gt;-->\n<!--&lt;!&ndash;                                                <a *ngIf=\"first && scoreStatus == 2\" class=\"d-flex align-items-center justify-content-between\">&ndash;&gt;-->\n<!--&lt;!&ndash;                                                    Version {{previousFeedBack?.length - i}}<span class=\"font-weight-bold\">{{feedback.student_score + ' / ' + feedback.total_score}} </span>&ndash;&gt;-->\n<!--&lt;!&ndash;                                                </a>&ndash;&gt;-->\n<!--                                                <a class=\"d-flex align-items-center justify-content-between\">-->\n<!--                                                    <h5 [ngClass]=\"{'color-primary': selectedFeedBackIndex === previousFeedBack?.length - i}\" class=\"mb-0 d-inline-flex\" style=\"font-size: 14px\">Version {{previousFeedBack.length - i}}-->\n<!--                                                        <span class=\"badge badge-info ml-2\">{{feedback?.student_score}} / {{feedback?.total_score}}</span>-->\n<!--                                                    </h5>-->\n<!--                                                    <span class=\"badge\" [ngClass]=\"{'badge-exceptional': getFeedbackLabel(feedback).label === 'Exceptional', 'badge-good': getFeedbackLabel(feedback).label === 'Good',-->\n<!--                                                    'badge-improve': getFeedbackLabel(feedback).label === 'Improve'}\">{{getFeedbackLabel(feedback).label}}</span></a>-->\n<!--                                            </li>-->\n<!--                                        </ul>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n\n                                <div class=\"col-md-12 my-3\">\n                                    <div class=\"row\">\n                                        <h5 class=\"font-weight-bold col-5 align-self-center\">Student Answer\n                                            <span *ngIf=\"selectedFeedBackIndex == ''\"> - Current Version</span>\n                                            <span *ngIf=\"selectedFeedBackIndex != ''\"> - Version {{selectedFeedBackIndex}}</span>\n                                        </h5>\n                                        <div class=\"col-7 text-right mb-2\">\n                                            <div class=\"row justify-content-end align-items-end pr-3\">\n                                                <div class=\"col-8 text-left pr-2\" *ngIf=\"previousFeedBack.length != 0\">\n                                                    <label class=\"label_design\">Select Version</label>\n                                                    <ng-select\n                                                            [items]=\"previousFeedBack\"\n                                                            bindLabel=\"version_name\"\n                                                            bindValue=\"index\"\n                                                            [clearable]=\"false\"\n                                                            (change)=\"feedbackSelected($event)\"\n                                                            [(ngModel)]=\"selectedVersion\"\n                                                            placeholder=\"Please Select\"\n                                                    >\n                                                        <ng-template ng-option-tmp let-feedback=\"item\" let-index=\"index\">\n                                                            <div class=\"d-flex align-items-center justify-content-between w-100\">\n                                                                <div>\n                                                                    <h5 class=\"mb-0 d-inline-flex\" style=\"font-size: 14px\"\n                                                                        [ngClass]=\"{'color-primary': selectedFeedBackIndex === previousFeedBack.length - index}\">\n                                                                        Version {{ previousFeedBack.length - index }}\n                                                                        <span class=\"badge badge-info ml-2\" style=\"align-content: center; padding: 4px 8px\">\n                                                                        {{ feedback?.student_score }} / {{ feedback?.total_score }}\n                                                                    </span>\n                                                                    </h5>\n                                                                </div>\n                                                                <span class=\"badge\" [ngClass]=\"{'badge-exceptional':\n                                                                getFeedbackLabel(feedback).label === 'Exceptional','badge-good': getFeedbackLabel(feedback).label === 'Good',\n                                                                'badge-improve': getFeedbackLabel(feedback).label === 'Improve'}\">\n                                                                {{ getFeedbackLabel(feedback).label }}</span>\n                                                            </div>\n                                                        </ng-template>\n                                                    </ng-select>\n                                                </div>\n                                                <div class=\"dropdown\" *ngIf=\"selectedFeedBackIndex == previousFeedBack.length && studentAnswer?.status == '3'\n                                        && selectedPreviousStudentAnswer?.version != 'V1'\">\n                                                    <button class=\"btn btn-outline-primary px-3\"><i\n                                                            class=\"fa fa-print mr-2\" aria-hidden=\"true\"></i>Print<i\n                                                            class=\"fa fa-sort-desc float-right ml-2\" aria-hidden=\"true\"></i>\n                                                    </button>\n                                                    <div class=\"dropdown-content text-left\" style=\"right: 1px\">\n                                                        <a class=\"cursor\" (click)=\"common.printReport('Without')\">\n                                                            <img style=\"width: 20px\" src=\"assets/images/without-feedback.png\" class=\"mr-2\">Without Feedback</a>\n                                                        <a class=\"cursor\" (click)=\"common.printReport()\">\n                                                            <img style=\"width: 18px\" src=\"assets/images/report-feedback.png\" class=\"mr-2\">With Feedback</a>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div style=\"height: 74vh\" *ngIf=\"item.student_answer[0]?.isSelected != ''\" class=\"form-span editor_bullet feedback-card col-md-12 d-flex\">\n                                        <span [innerHTML]=\"convertedText && convertedText != '' ? convertMarkdownToHtml(selectedPreviousStudentAnswer?.student_answer) : convertMarkdownToHtml(item.student_answer[0]?.isSelected, 'single')\" class=\"innerhtml-margin-clear\"></span>\n                                    </div>\n                                    <div *ngIf=\"item.student_answer[0]?.isSelected == ''\" class=\"col-md-12 d-flex p-2\">\n                                        <span class=\"form-span\">Student Not Answered</span>\n                                    </div>\n                                </div>\n\n<!--                                <div class=\"col-12 my-3\" id=\"print-section\" *ngIf=\"convertedText && convertedText != '' && previousFeedBack?.length != 0\">-->\n\n<!--                                    <div style=\"display: none\" class=\"mt-3 col-md-12 display-block\">-->\n<!--                                        <div class=\"card\">-->\n<!--                                            <div class=\"card-body p-3\">-->\n<!--                                                <div class=\"row\">-->\n<!--                                                    <div class=\"col-6\">-->\n<!--                                                        <h5><span style=\"font-size: 18px !important;\" class=\"font-weight-bold\">Student Name: </span> <span class=\"content-heading-name\">{{studentAnswer.student_name}}</span></h5>-->\n<!--                                                        <h5 class=\"mb-0\"><span style=\"font-size: 18px !important;\" class=\"font-weight-bold\">Class: </span> <span class=\"content-heading-name\">{{studentAnswer.class_name ?? '-'}}</span></h5>-->\n<!--                                                    </div>-->\n<!--                                                    <div class=\"col-6 text-right\">-->\n<!--                                                        <h5 class=\"mb-0\"><span style=\"font-size: 18px !important;\" class=\"font-weight-bold\">Assignment: </span> <span class=\"content-heading-name\">{{classData.content_name}}</span>  &nbsp; &nbsp;-->\n<!--                                                        </h5>-->\n<!--                                                    </div>-->\n<!--                                                </div>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n\n<!--                                    <div style=\"display: none\" class=\"mt-3 editor_bullet col-md-12 display-block\">-->\n<!--                                        <div class=\"card\">-->\n<!--                                            <div class=\"card-header p-3 background_gradient\">-->\n<!--                                                <h5 style=\"color: white\" class=\"font-weight-bold\">Essay Prompt</h5>-->\n<!--                                            </div>-->\n<!--                                            <div class=\"card-body p-3 custom_feedback_card_body\">-->\n<!--                                                <span [innerHTML]=\"convertMarkdownToHtml(item.question, 'single')\" class=\"innerhtml-margin-clear f-18\"></span>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n\n<!--                                    <div style=\"display: none\" *ngIf=\"item.student_answer[0]?.isSelected != ''\" class=\"mt-3 editor_bullet col-md-12 display-block\">-->\n<!--                                        <div class=\"card\">-->\n<!--                                            <div class=\"card-header p-3 background_gradient\">-->\n<!--                                                <h5 style=\"color: white\" class=\"font-weight-bold\">Student Answer</h5>-->\n<!--                                            </div>-->\n<!--                                            <div class=\"card-body p-3 custom_feedback_card_body\">-->\n<!--                                                <span [innerHTML]=\"convertedText && convertedText != '' ? convertMarkdownToHtml(selectedPreviousStudentAnswer?.student_answer) : convertMarkdownToHtml(item.student_answer[0]?.isSelected, 'single')\" class=\"innerhtml-margin-clear f-18\"></span>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n\n<!--                                    <div id=\"feedback_got\" class=\"row\">-->\n\n<!--                                        <div class=\"col-12 my-3\" *ngIf=\"selectedPreviousStudentAnswer?.version != 'V1' && convertedText-->\n<!--                                            && convertedText != '' && previousFeedBack?.length != 0\">-->\n<!--                                            <div class=\"card\">-->\n<!--                                                <div class=\"card-header p-3 background_gradient\">-->\n<!--                                                    <h5 style=\"color: white\" class=\"font-weight-bold\">Score Chart</h5>-->\n<!--                                                </div>-->\n<!--                                                <div class=\"card-body p-3 custom_feedback_card_body\">-->\n<!--                                                    <div class=\"row justify-content-center flex-column\">-->\n<!--                                                        <div class=\"col-12 d-flex justify-content-center\">-->\n<!--                                                            <div class=\"col-6 text-center\">-->\n<!--                                                                <h5 class=\"font-weight-bold\">Feedback Score</h5>-->\n<!--                                                                <p style=\"font-size: 14px\" class=\"mb-0\">-->\n<!--                                                                    <span>Current Version : <span style=\"color: #008ffb\" class=\"font-weight-bold\">-->\n<!--                                                                        {{selectedPreviousStudentAnswer?.student_score}} / {{selectedPreviousStudentAnswer?.total_score}}</span></span>-->\n<!--                                                                    <span class=\"ml-2\">Previous Version :-->\n<!--                                                                        <span style=\"color: #00e396\" *ngIf=\"selectedFeedBackIndex != 1 && selectedFeedBackIndex != ''\" class=\"font-weight-bold\">-->\n<!--                                                                            {{previousFeedBack[selectedPreviousStudentAnswer?.index + 1].student_score}} / {{previousFeedBack[selectedPreviousStudentAnswer?.index + 1].total_score}}-->\n<!--                                                                        </span>-->\n<!--                                                                    <span *ngIf=\"selectedFeedBackIndex == 1\"> - </span></span>-->\n<!--                                                                </p>-->\n<!--                                                            </div>-->\n<!--                                                        </div>-->\n\n<!--                                                        <div class=\"col-12\">-->\n<!--                                                            <div id=\"chart2\">-->\n<!--                                                                <apx-chart #chartRef-->\n<!--                                                                        [series]=\"chartOptions?.series\"-->\n<!--                                                                        [chart]=\"chartOptions?.chart\"-->\n<!--                                                                        [xaxis]=\"chartOptions?.xaxis\"-->\n<!--                                                                        [yaxis]=\"chartOptions?.yaxis\"-->\n<!--                                                                        [plotOptions]=\"chartOptions?.plotOptions\"-->\n<!--                                                                        [dataLabels]=\"chartOptions?.dataLabels\"-->\n<!--                                                                        [legend]=\"chartOptions?.legend\">-->\n<!--                                                                </apx-chart>-->\n<!--                                                            </div>-->\n<!--                                                        </div>-->\n<!--                                                    </div>-->\n<!--                                                </div>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n\n<!--                                        <div class=\"col-12 mt-2\">-->\n<!--                                            <div class=\"card\">-->\n<!--                                                <div class=\"card-header p-3 background_gradient\">-->\n<!--                                                    <h5 style=\"color: white\" *ngIf=\"selectedFeedBackIndex == previousFeedBack?.length\" class=\"font-weight-bold\">Final Feedback <span *ngIf=\"selectedPreviousStudentAnswer?.created_date\"> ({{selectedPreviousStudentAnswer?.created_date | customDateFormat}} | {{selectedPreviousStudentAnswer?.created_date | date:'h:mm a'}}) </span>: </h5>-->\n<!--                                                    <h5 style=\"color: white\" *ngIf=\"selectedFeedBackIndex != previousFeedBack?.length\" class=\"font-weight-bold\">Feedback For Version {{selectedFeedBackIndex}} <span *ngIf=\"selectedPreviousStudentAnswer?.created_date\"> ({{selectedPreviousStudentAnswer?.created_date | customDateFormat}} | {{selectedPreviousStudentAnswer?.created_date | date:'h:mm a'}}) </span>: </h5>-->\n<!--                                                </div>-->\n<!--                                                <div class=\"card-body p-3 custom_feedback_card_body\">-->\n<!--                                                    <div style=\"border: 0 !important;\" class=\"feedback-card\" *ngIf=\"selectedPreviousStudentAnswer?.version == 'V1'\" [innerHTML]=\"convertedText\"></div>-->\n<!--                                                    <div class=\"feedback-card p-0\" *ngIf=\"selectedPreviousStudentAnswer?.version != 'V1'\" style=\"overflow-x: hidden; border: 0 !important;\">-->\n<!--                                                        <div class=\"row px-2 mb-2\">-->\n<!--                                                            <div class=\"col-6\">-->\n<!--                                                                <h5 style=\"font-size: 18px\" class=\"mb-0 font-weight-bold\">Total Score</h5>-->\n<!--                                                                <div class=\"row\">-->\n<!--                                                                    <div class=\"col-10\">-->\n<!--                                                                        <div class=\"progress cursor my-2\">-->\n<!--                                                                            <div class=\"progress-bar\"-->\n<!--                                                                                 role=\"progressbar\"-->\n<!--                                                                                 [style.width.%]=\"scorePercentage\"-->\n<!--                                                                                 [attr.aria-valuenow]=\"score\"-->\n<!--                                                                                 [attr.aria-valuemin]=\"0\"-->\n<!--                                                                                 [attr.aria-valuemax]=\"totalScore\">-->\n<!--                                                                            </div>-->\n<!--                                                                        </div>-->\n<!--                                                                    </div>-->\n<!--                                                                    <span class=\"align-self-center w-auto font-weight-bold color-primary\">{{selectedPreviousStudentAnswer?.student_score}} / {{selectedPreviousStudentAnswer?.total_score}}</span>-->\n<!--                                                                </div>-->\n<!--                                                            </div>-->\n<!--                                                        </div>-->\n<!--                                                        <div class=\"row px-3 mb-3\" *ngFor=\"let feedback of feedbackList\">-->\n<!--                                                            <h5 class=\"font-weight-bold text-capitalize col-12 px-2 color-primary\" style=\"font-style: italic\">-->\n<!--                                                                <span class=\"mr-2\" style=\"font-size: 18px\">{{getValue(feedback[0]) ?? '-'}}</span>-->\n<!--                                                                <span class=\"badge badge-info\">Score: {{feedback[1]?.score}} / {{totalIndivialScore}}</span>-->\n<!--                                                            </h5>-->\n\n<!--                                                            <a class=\"col-12 px-2 rationale_design\" *ngIf=\"feedback[1]?.rationale && feedback[1]?.rationale != ''\">-->\n<!--                                                                <strong>{{feedback[1]?.rationale}}</strong></a>-->\n\n<!--                                                            <div class=\"col-6 px-2\" *ngFor=\"let value of feedback[1]?.feedback\">-->\n<!--                                                                <div class=\"sidebar-widget cursor\" (click)=\"value.collapsed = !value.collapsed\" style=\"border-left: 1px solid #ffd9fe !important;\">-->\n<!--                                                                    <h5 class=\"mb-0 justify-content-between d-flex\" style=\"font-style: italic; font-size: 14px\">\"{{value.snippet}}\"-->\n<!--                                                                        <i *ngIf=\"!value.collapsed\" class=\"fa fa-plus\"></i>-->\n<!--                                                                        <i *ngIf=\"value.collapsed\" class=\"fa fa-minus\"></i>-->\n<!--                                                                    </h5>-->\n<!--                                                                    <div [ngbCollapse]=\"!value.collapsed\">-->\n<!--                                                                        <label class=\"font-weight-bold mt-3 mb-2\">Suggestion</label>-->\n<!--                                                                        <h5 style=\"font-style: italic\" class=\"color-primary\">{{value.suggestion}}</h5>-->\n<!--                                                                        <label *ngIf=\"value?.why && value?.why != ''\" class=\"font-weight-bold my-2\">Why</label>-->\n<!--                                                                        <h5 *ngIf=\"value?.why && value?.why != ''\" style=\"font-style: italic\" class=\"color-primary\">-->\n<!--                                                                            {{value?.why}}</h5>-->\n<!--                                                                        <label *ngIf=\"value?.example_rewrite && value?.example_rewrite != ''\"-->\n<!--                                                                               class=\"font-weight-bold my-2\">Example</label>-->\n<!--                                                                        <h5 *ngIf=\"value?.example_rewrite && value?.example_rewrite != ''\"-->\n<!--                                                                            style=\"font-style: italic\" class=\"color-primary\">{{value?.example_rewrite}}</h5>-->\n<!--                                                                    </div>-->\n<!--                                                                </div>-->\n<!--                                                            </div>-->\n<!--                                                        </div>-->\n<!--                                                    </div>-->\n<!--                                                </div>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n\n<!--                                    <div style=\"display: none\" *ngIf=\"totalFeedBack != ''\" class=\"mt-3 editor_bullet col-md-12 display-block\">-->\n<!--                                        <div class=\"card\">-->\n<!--                                            <div class=\"card-header p-3 background_gradient\">-->\n<!--                                                <h5 style=\"color: white\" class=\"font-weight-bold\">Teacher FeedBack</h5>-->\n<!--                                            </div>-->\n<!--                                            <div class=\"card-body p-3 custom_feedback_card_body\">-->\n<!--                                                <span class=\"innerhtml-margin-clear f-18\">{{totalFeedBack}}</span>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n\n<!--                                </div>-->\n                            </div>\n\n                            <div *ngIf=\"item.question_type_id == '28'\" class=\"col-md-12 d-flex\">\n                                <div class=\"col-md-6\">\n                                    <label class=\"d-flex align-items-center\">\n                                        <b>Student Answer</b>\n                                        <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                        <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                    </label>\n                                    <div class=\"col-md-12 mb-3 d-flex editor_bullet\" [ngClass]=\"item.given_points == item.points ? 'form-span-correct' : 'form-span-wrong'\">\n                                        <span [innerHTML]=\"item.student_answer[0]?.isSelected | sanitizeHtml\" class=\"innerhtml-margin-clear\"></span>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <label class=\"py-1\"><b>Correct Answer</b></label>\n                                    <div class=\"col-md-12 mb-3 d-flex form-span editor_bullet\">\n                                        <span [innerHTML]=\"item.answer[0].correctAnswer | sanitizeHtml\" class=\"innerhtml-margin-clear\"></span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"item.question_type_id == '40' || item.question_type_id == '41'\" class=\"col-md-12 d-flex\">\n                                <div class=\"col-md-6\">\n                                    <label class=\"d-flex align-items-center\">\n                                        <b>Student Answer</b>\n                                        <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                        <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                    </label>\n                                    <div class=\"mb-3 d-flex\">\n                                        <app-graph-component *ngIf=\"item.student_answer?.length == 1\"\n                                                             [editMode]=\"false\"\n                                                             [editPatchValue]=\"parseVal(item.student_answer[0].correctAnswer)\"\n                                                             [graphId]=\"'previewo'+i\"\n                                                             [questionType]=\"item.question_type_id\"></app-graph-component>\n                                        <app-graph-component *ngIf=\"item.student_answer?.length == 0\"\n                                                             [editMode]=\"false\"\n                                                             [editPatchValue]=\"false\"\n                                                             [graphId]=\"'previewo'+i\"\n                                                             [questionType]=\"item.question_type_id\"></app-graph-component>\n                                    </div>\n                                    <div *ngIf=\"item.student_editor_answer != ''\" class=\"col-md-12 editor_bullet\">\n                                        <h4 [innerHTML]=\"item.student_editor_answer | sanitizeHtml\" class=\"innerhtml-margin-clear\"  [ngClass]=\"item.given_points == item.points ? 'form-span-correct' : 'form-span-wrong'\"></h4>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <label class=\"py-1\"><b>Correct Answer</b></label>\n                                    <div class=\"mb-3 d-flex\">\n                                        <app-graph-component [editMode]=\"false\" [editPatchValue]=\"parseVal(item.answer[0].correctAnswer)\" [graphId]=\"'preview'+i\" [questionType]=\"item.question_type_id\"></app-graph-component>\n                                    </div>\n                                    <div *ngIf=\"item.question_editor_answer != ''\" class=\"col-md-12 editor_bullet\">\n                                        <h4 [innerHTML]=\"item.question_editor_answer | sanitizeHtml\" class=\"innerhtml-margin-clear form-span\"></h4>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-12 px-0 my-3\" *ngIf=\"item.question_type_id != 24 && item.question_type_id != '55'\">\n                                <div class=\"card explanation\">\n                                    <div class=\"card-body\">\n                                        <div class=\"row\">\n                                            <div class=\"col-4 mb-3\">\n                                                <label class=\"m-0\"><b>Subject:</b></label>\n                                                <p>{{item?.subject_name ? item?.subject_name : '-'}}</p>\n                                            </div>\n                                            <div class=\"col-4 mb-3\">\n                                                <label class=\"m-0\"><b>Topic:</b></label>\n                                                <p>{{item?.question_topic ? item?.question_topic : '-'}}</p>\n                                            </div>\n                                            <div class=\"col-4 mb-3\">\n                                                <label class=\"m-0\"><b>Sub Topic:</b></label>\n                                                <p>{{item?.sub_topic ? item?.sub_topic : '-'}}</p>\n                                            </div>\n                                            <div class=\"col-4 mb-3\">\n                                                <label class=\"m-0\"><b>Skill:</b></label>\n                                                <p *ngIf=\"item?.skill\">\n                                                    <span *ngIf=\"item?.skill?.length == 0\">-</span>\n                                                    <span *ngFor=\"let skill of item?.skill; let last = last\">{{skill}}<span *ngIf=\"!last\">, </span></span>\n                                                </p>\n                                                <p *ngIf=\"!item.skill\">-</p>\n                                            </div>\n                                            <div class=\"col-4 mb-3\">\n                                                <label class=\"m-0\"><b>Standard:</b></label>\n                                                <p>{{item?.question_standard_name ? item?.question_standard_name : '-'}}</p>\n                                            </div>\n                                            <div class=\"col-4 mb-3\">\n                                                <label class=\"m-0\"><b>Difficulty:</b></label>\n                                                <p>{{item.level == '1' ? 'Easy' : item.level == '2' ? 'Medium' : 'Difficult'}}</p>\n                                            </div>\n                                            <div class=\"col-4\">\n                                                <label class=\"m-0\"><b>Points:</b></label>\n                                                <p>{{item?.points ? item?.points : '-'}}</p>\n                                            </div>\n                                            <div class=\"col-4\">\n                                                <label class=\"m-0\"><b>Predicted Solving Time:</b></label>\n                                                <p>{{item?.predicted_solving_time ? item?.predicted_solving_time : '-'}}</p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"item.question_type_id == '24'\" class=\"col-12\">\n                                <div *ngFor=\"let item of item.subQuestions; let j = index\" class=\"mb-3 mt-3\">\n                                    <div class=\"col-md-12 px-0 d-flex justify-content-between\">\n                                        <div class=\"d-flex justify-content-start\">\n                                            <div>\n                                                <p class=\"question-no col-10 m-0\">{{i + 1}}</p>\n                                            </div>\n                                            <div class=\"ml-3 pt-2\">\n                                                <i (click)=\"givePoints('true', item, 'passage', i, j)\" *ngIf=\"item.points != item.given_points\" aria-hidden=\"true\" class=\"fa fa-2x fa-circle-thin\" style=\"color: darkgrey\"></i>\n                                                <i (click)=\"givePoints('false', item, 'passage', i, j)\" *ngIf=\"item.points == item.given_points\" aria-hidden=\"true\" class=\"fa fa-2x fa-check-circle\" style=\"color: green\"></i>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-md-10 text-right d-flex justify-content-end\">\n                                            <div class=\"col-md-3 px-0\">\n                                                <div class=\"d-flex px-0 align-items-center justify-content-end\">\n                                                    <div class=\"w-auto text-center\">\n                                                        <h4 style=\"font-size: 18px\" class=\"mb-0\" *ngIf=\"getElapsedTime(item) as elapsed\"><b>{{elapsed.minutes}}</b></h4>\n                                                    </div>\n                                                    <div class=\"w-auto mx-2\">\n                                                        <h4 class=\"mb-0 font-weight-bold\">:</h4>\n                                                    </div>\n                                                    <div class=\"w-auto text-center mr-4\">\n                                                        <h4 style=\"font-size: 18px\" class=\"mb-0\" *ngIf=\"getElapsedTime(item) as elapsed\"><b>{{elapsed.seconds}}</b></h4>\n                                                    </div>\n                                                    <span style=\"font-size: 18px; width: 122px !important;\" class=\"mb-0 font-weight-bold align-content-center\">Points:\n                                                            <input style=\"width: 15%\" (input)=\"getPoints($event , i, j, 'passage'); markValidation($event, item.points , i, j, 'passage')\" (keypress)=\"numberValidate($event)\" [value]=\"item.given_points\" autocomplete=\"off\"\n                                                                   class=\"mark-input input-field p-0 border-0\" name=\"points\">\n                                                            <span class=\"mx-2 align-content-center\">/</span>\n                                                            <span class=\"color-primary font-weight-bold\">{{item.points}}</span>\n                                                        </span>\n                                                    <!-- <input (input)=\"getPoints($event , i, j, 'passage'); markValidation($event, item.points , i, j, 'passage')\" (keypress)=\"numberValidate($event)\" [value]=\"item.given_points\" autocomplete=\"off\" class=\"mark-input\" name=\"points\" style=\"text-align: center\">\n                                                    <input (keypress)=\"numberValidate($event)\" [value]=\"item.points\" class=\"mark-input div-disable\" style=\"text-align: center\"> -->\n                                                </div>\n                                                <br>\n                                                <span *ngIf=\"item.maxValErr\" class=\"errormessage\">Invalid Points</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"editor_bullet\">\n                                        <span [innerHTML]=\"item.question | sanitizeHtml\" class=\"innerhtml-margin-clear col-12 mt-3\"></span>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 1 || item.question_type_id == 2\" class=\"row\">\n                                        <div class=\"col-6 mt-3\">\n                                            <label class=\"d-flex align-items-center\">\n                                                <b>Student Answer</b>\n                                                <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                                <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                            </label>\n                                            <div *ngFor=\"let option of item.student_answer; let k = index\" [ngClass]=\"{'correct-ans-selected' : option?.isSelected === '' ? false : option?.isSelected == k ? item.given_points == item.points : false, 'wrong-ans-selected' : option?.isSelected === '' ? false : option?.isSelected == k ? item.given_points != item.points : false}\" class=\"col-md-12 mb-3 mx-3 p-2 d-flex align-items-center\">\n                                                <button class=\"btn-primary inner_button mr-3\">{{((k+1) + 9).toString(36).toUpperCase()}}</button>\n                                                <span [innerHTML]=\"option.options | sanitizeHtml\" class=\"remove-margin-bottom\"></span>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-6 mt-3\">\n                                            <label class=\"py-1\"><b>Correct Answer</b></label>\n                                            <div [ngClass]=\"{'correct-ans-selected' : option.correctAnswer != ''}\"\n                                                 *ngFor=\"let option of item.answer; let k = index\" style=\"max-height: 20rem\"\n                                                 class=\"{{option.correctAnswer != '' ? 'mx-2 p-2 mb-2 overflow-auto row' : ''}}\">\n                                                <button *ngIf=\"option.correctAnswer != ''\" class=\"btn-primary inner_button\">{{((k+1) + 9).toString(36).toUpperCase()}}</button>\n                                                <div class=\"col-11 pt-1 pr-0\" *ngIf=\"option.correctAnswer != ''\">\n                                                        <span [innerHTML]=\"item.options[k].options | sanitizeHtml\" class=\"remove-margin-bottom\"></span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == '5' || item.question_type_id == '7'\" class=\"row\">\n                                        <div class=\"col-md-6 table-flexible\">\n                                            <label class=\"d-flex align-items-center\">\n                                                <b>Student Answer</b>\n                                                <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                                <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                            </label>\n                                            <table class=\"table table-bordered text-center div-disable\">\n                                                <thead>\n                                                <tr>\n                                                    <th>Questions</th>\n                                                    <th *ngFor=\"let list of item.answer; let k=index\" [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\"></th>\n                                                </tr>\n                                                </thead>\n                                                <tbody>\n                                                <tr *ngFor=\"let list of item.student_answer; let l=index\">\n                                                    <td [innerHTML]=\"list.options\" class=\"remove-margin-bottom\"></td>\n                                                    <td *ngFor=\"let ans of item.answer; let k=index\">\n                                                        <input *ngIf=\"item.question_type_id == '5'\" [checked]=\"list?.isSelected === '' ? false : list?.isSelected == k.toString()\" class=\"radio_animated\" id=\"{{k}}chooseSinglett1{{j}}\" name=\"{{i}}passage{{j}}cho{{k}}ose{{l}}ans\" type=\"radio\">\n                                                        <input *ngIf=\"item.question_type_id == '7'\" [checked]=\"splitMultiChoose(this.totalAns[i].subQuestions[j].student_answer[l]?.isSelected, k)\" type=\"checkbox\">\n                                                    </td>\n                                                </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                        <div class=\"col-md-6 table-flexible\">\n                                            <label class=\"py-1\"><b>Correct Answer</b></label>\n                                            <table class=\"table table-bordered text-center div-disable\">\n                                                <thead>\n                                                <tr>\n                                                    <th>Questions</th>\n                                                    <th *ngFor=\"let list of item.answer; let l=index\" [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\"></th>\n                                                </tr>\n                                                </thead>\n                                                <tbody>\n                                                <tr *ngFor=\"let list of item.student_answer; let k=index\">\n                                                    <td [innerHTML]=\"list.options\" class=\"remove-margin-bottom\"></td>\n                                                    <td *ngFor=\"let ans of item.answer; let l=index\">\n                                                        <input *ngIf=\"item.question_type_id == '5'\" [checked]=\"item.heading_option[k].correctActive == l\" class=\"radio_animated\" name=\"{{i}}passage{{j}}cho{{k}}ose{{l}}\" type=\"radio\">\n                                                        <input *ngIf=\"item.question_type_id == '7'\" id=\"chooseMultipass1{{i}}{{j}}{{k}}{{l}}\" type=\"checkbox\">\n                                                    </td>\n                                                </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                        <!--                                    <table class=\"table table-bordered text-center col-12 mt-3\">-->\n                                        <!--                                        <thead>-->\n                                        <!--                                        <tr>-->\n                                        <!--                                            <th>Questions</th>-->\n                                        <!--                                            <th *ngFor=\"let answer of item.answer; let k=index\" [innerHTML]=\"answer | sanitizeHtml\"></th>-->\n                                        <!--                                        </tr>-->\n                                        <!--                                        </thead>-->\n                                        <!--                                        <tbody *ngIf=\"item.question_type_id == '5'\">-->\n                                        <!--                                        <tr  *ngFor=\"let answer of item.heading_option; let k=index\">-->\n                                        <!--                                            <td [innerHTML]=\"item.options[k].options | sanitizeHtml\"></td>-->\n                                        <!--                                            <td *ngFor=\"let term of item.answer; let l=index\">-->\n                                        <!--                                                <input [checked]=\"answer.correctActive === l\" class=\"radio_animated\" name=\"choose{{k}}\" type=\"radio\">-->\n                                        <!--                                            </td>-->\n                                        <!--                                        </tr>-->\n                                        <!--                                        </tbody>-->\n                                        <!--                                        <tbody *ngIf=\"item.question_type_id == '7'\">-->\n                                        <!--                                        <tr  *ngFor=\"let answer of item.options; let k=index\">-->\n                                        <!--                                            <td [innerHTML]=\"answer.options | sanitizeHtml\"></td>-->\n                                        <!--                                            <td *ngFor=\"let chk of item.answer; let l=index\">-->\n                                        <!--                                                <input id=\"checkMultiPassage{{i}}{{j}}{{k}}{{l}}\" type=\"checkbox\">-->\n                                        <!--                                            </td>-->\n                                        <!--                                        </tr>-->\n                                        <!--                                        </tbody>-->\n                                        <!--                                    </table>-->\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == '10'\" class=\"col-12 mt-3 d-flex\">\n                                        <div class=\"col-md-6 mt-3\">\n                                            <label class=\"d-flex align-items-center\">\n                                                <b>Student Answer</b>\n                                                <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                                <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                            </label>\n                                            <div *ngFor=\"let ans of item.student_answer; let k = index\" class=\"col-md-12 mb-3 d-flex justify-content-between\">\n                                                <div [ngClass]=\"item.given_points == item.points ? 'question-no-small-correct' : 'question-no-small-wrong'\">\n                                                    <h6 class=\"mb-0\">{{k+1}}</h6>\n                                                </div>\n                                                <span *ngIf=\"ans?.isSelected != ''\" [innerHTML]=\"ans?.isSelected  | sanitizeHtml\" class=\"col-md-11\"  [ngClass]=\"item.given_points == item.points ? 'form-span-correct' : 'form-span-wrong'\"></span>\n                                                <span *ngIf=\"ans?.isSelected == ''\" class=\"col-md-11\"  [ngClass]=\"item.given_points == item.points ? 'form-span-correct' : 'form-span-wrong'\">Student Not Answered</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-6 mt-3\">\n                                            <label class=\"py-1\"><b>Correct Answer</b></label>\n                                            <div *ngFor=\"let ans of item.answer; let k = index\" class=\"col-md-12 mb-3 d-flex justify-content-between\">\n                                                <div class=\"question-no-small\">\n                                                    <h6 class=\"mb-0\">{{k+1}}</h6>\n                                                </div>\n                                                <span [innerHTML]=\"ans.options[0].value  | sanitizeHtml\" class=\"col-md-11 form-span\"></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == '20'\" class=\"row mt-2 d-flex\">\n                                        <div class=\"col-md-6\">\n                                            <label class=\"d-flex align-items-center\">\n                                                <b>Student Answer</b>\n                                                <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                                <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                            </label>\n                                            <div *ngIf=\"item.student_answer[0]?.isSelected != ''\" class=\"col-md-12 mb-3 d-flex editor_bullet\" [ngClass]=\"item.given_points == item.points ? 'form-span-correct' : 'form-span-wrong'\">\n                                                <span [innerHTML]=\"item.student_answer[0]?.isSelected | sanitizeHtml\" class=\"innerhtml-margin-clear\"></span>\n                                            </div>\n                                            <div *ngIf=\"item.student_answer[0]?.isSelected == ''\" class=\"col-md-12 mb-3 d-flex p-2\"  [ngClass]=\"item.given_points == item.points ? 'form-span-correct' : 'form-span-wrong'\">\n                                                <span>Student Not Answered</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <label class=\"py-1\"><b>Correct Answer</b></label>\n                                            <div class=\"col-md-12 mb-3 form-span editor_bullet\">\n                                                <span [innerHTML]=\"item.answer[0].correctAnswer | sanitizeHtml\" class=\"innerhtml-margin-clear\"></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-12 px-0 my-3\">\n                                        <div class=\"card explanation\">\n                                            <div class=\"card-body\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-4 mb-3\">\n                                                        <label class=\"m-0\"><b>Subject:</b></label>\n                                                        <p>{{item?.subject_name ? item?.subject_name : '-'}}</p>\n                                                    </div>\n                                                    <div class=\"col-4 mb-3\">\n                                                        <label class=\"m-0\"><b>Topic:</b></label>\n                                                        <p>{{item?.question_topic ? item?.question_topic : '-'}}</p>\n                                                    </div>\n                                                    <div class=\"col-4 mb-3\">\n                                                        <label class=\"m-0\"><b>Sub Topic:</b></label>\n                                                        <p>{{item?.sub_topic ? item?.sub_topic : '-'}}</p>\n                                                    </div>\n                                                    <div class=\"col-4 mb-3\">\n                                                        <label class=\"m-0\"><b>Skill:</b></label>\n                                                        <p *ngIf=\"item?.skill\">\n                                                            <span *ngIf=\"item?.skill?.length == 0\">-</span>\n                                                            <span *ngFor=\"let skill of item?.skill; let last = last\">{{skill}}<span *ngIf=\"!last\">, </span></span>\n                                                        </p>\n                                                        <p *ngIf=\"!item.skill\">-</p>\n                                                    </div>\n                                                    <div class=\"col-4 mb-3\">\n                                                        <label class=\"m-0\"><b>Standard:</b></label>\n                                                        <p>{{item?.question_standard_name ? item?.question_standard_name : '-'}}</p>\n                                                    </div>\n                                                    <div class=\"col-4 mb-3\">\n                                                        <label class=\"m-0\"><b>Difficulty:</b></label>\n                                                        <p>{{item.level == '1' ? 'Easy' : item.level == '2' ? 'Medium' : 'Difficult'}}</p>\n                                                    </div>\n                                                    <div class=\"col-4\">\n                                                        <label class=\"m-0\"><b>Points:</b></label>\n                                                        <p>{{item?.points ? item?.points : '-'}}</p>\n                                                    </div>\n                                                    <div class=\"col-4\">\n                                                        <label class=\"m-0\"><b>Predicted Solving Time:</b></label>\n                                                        <p>{{item?.predicted_solving_time ? item?.predicted_solving_time : '-'}}</p>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"item.explanation != ''\" class=\"col-md-12 mt-4 d-flex px-0\">\n                                        <div class=\"col-md-12 px-0\">\n                                            <label class=\"font-weight-bold\">Explanation: </label>\n                                            <div class=\"explanation innerhtml-margin-clear\" [innerHTML]=\"item.explanation | sanitizeHtml\"></div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12 mt-3 px-0\" *ngIf=\"item.resource != ''\">\n                                        <label class=\"font-weight-bold\">Resource: </label>\n                                        <div class=\"explanation innerhtml-margin-clear\" [innerHTML]=\"item.resource | sanitizeHtml\"></div>\n                                    </div>\n                                    <div *ngIf=\"item.student_feedback != '' || item.student_roughdata != ''\" class=\"col-md-12 px-0 mt-3 mb-3\">\n                                        <div class=\"row mt-3 px-3\">\n                                            <div class=\"col-md-{{item.student_roughdata != '' ? '6' : '12'}} px-0\" id=\"studentFeedback{{i}}\" *ngIf=\"item.student_feedback != ''\">\n                                                <h5 class=\"font-weight-bold\">Student Feedback:</h5>\n                                                <div class=\"feedback-card col-md-12\">{{item.student_feedback}}</div>\n                                            </div>\n                                            <div *ngIf=\"item.student_roughdata != ''\" class=\"col-md-{{item.student_feedback != '' ? '6' : '12'}} px-0\" id=\"studentRoughData{{i}}\">\n                                                <h5 class=\"font-weight-bold ml-{{item.student_feedback == '' ? '0' : '3'}}\">Student Workspace</h5>\n                                                <div [innerHTML]=\"item.student_roughdata | sanitizeHtml\" class=\"feedback-card innerhtml-margin-clear col-md-12 ml-{{item.student_feedback == '' ? '0' : '3'}}\"></div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12 px-0 mt-4\">\n                                        <textarea (input)=\"cfsGetPassageFeedback($event, i, j)\" [value]=\"item.feedback\" class=\"form-control\" cols=\"30\" placeholder=\"Feedback\" rows=\"3\"></textarea>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"item.question_type_id != 24 && (item.explanation != '' || item.resource != '')\" class=\"col-md-12 mt-4 px-0\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\" *ngIf=\"item.explanation != ''\">\n                                        <label class=\"font-weight-bold\">Explanation: </label>\n                                        <div class=\"explanation innerhtml-margin-clear\" [innerHTML]=\"item.explanation | sanitizeHtml\"></div>\n                                    </div>\n\n                                    <div class=\"col-md-12 mt-3\" *ngIf=\"item.resource != ''\">\n                                        <label class=\"font-weight-bold\">Resource: </label>\n                                        <div class=\"explanation innerhtml-margin-clear\" [innerHTML]=\"item.resource | sanitizeHtml\"></div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"(item.student_feedback != '' || item.student_roughdata != '') && item.question_type_id != '24'\" class=\"col-md-12 px-0 mb-3\">\n                                <div class=\"row mt-3 px-3\">\n                                    <div class=\"col-md-{{item.student_roughdata != '' ? '6' : '12'}} px-0\" id=\"studentFeedback{{i}}\" *ngIf=\"item.student_feedback != ''\">\n                                        <h5 class=\"font-weight-bold\">Student Feedback:</h5>\n                                        <div class=\"feedback-card col-md-12\">{{item.student_feedback}}</div>\n                                    </div>\n                                    <div *ngIf=\"item.student_roughdata != ''\" class=\"col-md-{{item.question_type_id == '55' ? '12' : item.student_feedback != '' ? '6' : '12'}} px-0\" id=\"studentRoughData{{i}}\">\n                                        <div class=\"card\" *ngIf=\"item.question_type_id == '55'\">\n                                            <div class=\"card-header p-3 background_gradient\">\n                                                <h5 style=\"color: white\">Cited Source</h5>\n                                            </div>\n                                            <div class=\"card-body editor_bullet custom_feedback_card_body p-3\">\n                                                <div style=\"border: 0 !important;\" [innerHTML]=\"item.student_roughdata | sanitizeHtml\" class=\"feedback-card innerhtml-margin-clear col-md-12 ml-{{item.question_type_id == '55' || item.student_feedback == '' ? '0' : '3'}}\"></div>\n                                            </div>\n                                        </div>\n\n                                        <div *ngIf=\"item.question_type_id != '55'\">\n                                            <h5 class=\"font-weight-bold editor_bullet ml-{{item.student_feedback == '' ? '0' : '3'}}\">Student Workspace:</h5>\n                                            <div [innerHTML]=\"item.student_roughdata | sanitizeHtml\" class=\"feedback-card innerhtml-margin-clear col-md-12 ml-{{item.student_feedback == '' ? '0' : '3'}}\"></div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"item.question_type_id != '24' && item.question_type_id != '55'\" class=\"my-3 px-0 col-md-12\">\n                                <textarea (input)=\"cfsGetFeedback($event, i)\" [value]=\"item.feedback\" class=\"form-control\" cols=\"30\" placeholder=\"Feedback\" rows=\"3\"></textarea>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div [ngStyle]=\"{'max-height': totalFeedbackMaxHeight}\" class=\"col-6 content-card px-0\" id=\"print-section\"\n                     *ngIf=\"isSingleQnsWithFeedbackType && convertedText && convertedText != '' && previousFeedBack?.length != 0\">\n\n                    <div style=\"display: none\" class=\"mt-3 col-md-12 display-block\">\n                        <div class=\"card\">\n                            <div class=\"card-body p-3\">\n                                <div class=\"row\">\n                                    <div class=\"col-6\">\n                                        <h5><span style=\"font-size: 18px !important;\" class=\"font-weight-bold\">Student Name: </span> <span class=\"content-heading-name\">{{studentAnswer.student_name}}</span></h5>\n                                        <h5 class=\"mb-0\"><span style=\"font-size: 18px !important;\" class=\"font-weight-bold\">Class: </span> <span class=\"content-heading-name\">{{studentAnswer.class_name ?? '-'}}</span></h5>\n                                    </div>\n                                    <div class=\"col-6 text-right\">\n                                        <h5 class=\"mb-0\"><span style=\"font-size: 18px !important;\" class=\"font-weight-bold\">Assignment: </span> <span class=\"content-heading-name\">{{classData.content_name}}</span>  &nbsp; &nbsp;\n                                        </h5>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div style=\"display: none\" class=\"mt-3 editor_bullet col-md-12 display-block\">\n                        <div class=\"card\">\n                            <div class=\"card-header p-3 background_gradient\">\n                                <h5 style=\"color: white\" class=\"font-weight-bold\">Essay Prompt</h5>\n                            </div>\n                            <div class=\"card-body p-3 custom_feedback_card_body\">\n                                <span [innerHTML]=\"convertMarkdownToHtml(totalAns[0]?.question, 'single')\" class=\"innerhtml-margin-clear f-18\"></span>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div style=\"display: none\" *ngIf=\"totalAns[0]?.student_answer[0]?.isSelected != ''\" class=\"mt-3 editor_bullet col-md-12 display-block\">\n                        <div class=\"card\">\n                            <div class=\"card-header p-3 background_gradient\">\n                                <h5 style=\"color: white\" class=\"font-weight-bold\">Student Answer</h5>\n                            </div>\n                            <div class=\"card-body p-3 custom_feedback_card_body\">\n                                <span [innerHTML]=\"convertedText && convertedText != '' ? convertMarkdownToHtml(selectedPreviousStudentAnswer?.student_answer) : convertMarkdownToHtml(totalAns[0]?.student_answer[0]?.isSelected, 'single')\" class=\"innerhtml-margin-clear f-18\"></span>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div id=\"feedback_got\" class=\"col-12 row pr-0 content-card\"\n                         *ngIf=\"previousFeedBack.length != 0 && convertedText != ''\">\n\n                        <div class=\"feedback-card p-0\" style=\"height: 74vh; border: 0 !important;\" *ngIf=\"selectedPreviousStudentAnswer?.version == 'V1'\"\n                             [innerHTML]=\"convertedText\"></div>\n\n                        <div class=\"col-12 pr-0\" *ngIf=\"selectedPreviousStudentAnswer?.version != 'V1'\">\n                            <h5 *ngIf=\"selectedFeedBackIndex == previousFeedBack.length\"\n                                class=\"font-weight-bold\">Final Feedback<span *ngIf=\"selectedPreviousStudentAnswer?.created_date\"> ({{selectedPreviousStudentAnswer?.created_date | customDateFormat}} | {{selectedPreviousStudentAnswer?.created_date | date:'h:mm a'}}) </span>: </h5>\n                            <h5 *ngIf=\"selectedFeedBackIndex != previousFeedBack.length\"\n                                class=\"font-weight-bold\">Feedback For Version {{selectedFeedBackIndex}}<span *ngIf=\"selectedPreviousStudentAnswer?.created_date\"> ({{selectedPreviousStudentAnswer?.created_date | customDateFormat}} | {{selectedPreviousStudentAnswer?.created_date | date:'h:mm a'}}) </span>: </h5>\n                            <div class=\"col-12 px-0\" *ngIf=\"selectedPreviousStudentAnswer?.version != 'V1'\">\n                                <div class=\"card\">\n                                    <div class=\"card-header p-3 background_gradient\">\n                                        <h5 style=\"color: white;font-size: 16px\" class=\"font-weight-bold\">Score Chart</h5>\n                                    </div>\n                                    <div class=\"card-body custom_feedback_card_body p-3\">\n                                        <div class=\"row justify-content-center flex-column\">\n                                            <div class=\"col-12 d-flex justify-content-center\">\n                                                <div class=\"text-center\">\n                                                    <h5 class=\"font-weight-bold\">Feedback Score</h5>\n                                                    <p style=\"font-size: 14px\" class=\"mb-0\">\n                                                <span>Current Version : <span style=\"color: #008ffb\" class=\"font-weight-bold\">\n                                                    {{selectedPreviousStudentAnswer?.student_score}} / {{selectedPreviousStudentAnswer?.total_score}}</span></span>\n                                                        <span class=\"ml-2\">Previous Version :<span style=\"color: #00e396\" *ngIf=\"selectedFeedBackIndex != 1 && selectedFeedBackIndex != ''\" class=\"font-weight-bold\">\n                                                    {{previousFeedBack[selectedPreviousStudentAnswer?.index + 1].student_score}} / {{previousFeedBack[selectedPreviousStudentAnswer?.index + 1].total_score}}\n                                                </span>\n                                                    <span *ngIf=\"selectedFeedBackIndex == 1\"> - </span\n                                                    ></span>\n                                                    </p>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"col-12\">\n                                                <div id=\"chart2\">\n                                                    <apx-chart\n                                                            [series]=\"chartOptions?.series\"\n                                                            [chart]=\"chartOptions?.chart\"\n                                                            [xaxis]=\"chartOptions?.xaxis\"\n                                                            [yaxis]=\"chartOptions?.yaxis\"\n                                                            [plotOptions]=\"chartOptions?.plotOptions\"\n                                                            [dataLabels]=\"chartOptions?.dataLabels\"\n                                                            [legend]=\"chartOptions?.legend\">\n                                                    </apx-chart>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"col-12 mt-2\" *ngIf=\"selectedPreviousStudentAnswer.strengths\">\n                                                <div *ngIf=\"selectedPreviousStudentAnswer.strengths.length != 0\">\n                                                    <label class=\"font-weight-bold\">Strengths: </label>\n                                                    <h5 class=\"strength_text\" *ngFor=\"let value of selectedPreviousStudentAnswer.strengths\">{{value}}</h5>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"col-12 mt-3\" *ngIf=\"selectedPreviousStudentAnswer.top_opportunities\">\n                                                <div *ngIf=\"selectedPreviousStudentAnswer.top_opportunities.length != 0\">\n                                                    <label class=\"font-weight-bold\">Top Opportunities: </label>\n                                                    <h5 class=\"top_opportunity_text\" *ngFor=\"let value of selectedPreviousStudentAnswer.top_opportunities\">{{value}}</h5>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-12 mt-3 px-0\">\n                                <div class=\"card\">\n                                    <div class=\"card-header p-3 background_gradient\">\n                                        <h5 style=\"color: white;font-size: 16px\" class=\"font-weight-bold\">Trait Analysis</h5>\n                                    </div>\n                                    <div class=\"card-body custom_feedback_card_body p-3\">\n                                        <div style=\"border: 0 !important;\" class=\"feedback-card\" *ngIf=\"selectedPreviousStudentAnswer?.version == 'V1'\" [innerHTML]=\"convertedText\"></div>\n                                        <div class=\"feedback-card p-0\" *ngIf=\"selectedPreviousStudentAnswer?.version != 'V1'\" style=\"overflow-x: hidden;border: 0 !important\">\n                                            <div class=\"row mb-2\">\n                                                <div class=\"col-12\">\n                                                    <h5 style=\"font-size: 18px\" class=\"mb-0 font-weight-bold\">Total Score</h5>\n                                                    <div class=\"row\">\n                                                        <div class=\"col-10\">\n                                                            <div class=\"progress cursor my-2\">\n                                                                <div class=\"progress-bar\"\n                                                                     role=\"progressbar\"\n                                                                     [style.width.%]=\"scorePercentage\"\n                                                                     [attr.aria-valuenow]=\"score\"\n                                                                     [attr.aria-valuemin]=\"0\"\n                                                                     [attr.aria-valuemax]=\"totalScore\">\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <span class=\"align-self-center font-weight-bold color-primary\">{{selectedPreviousStudentAnswer?.student_score}} / {{selectedPreviousStudentAnswer?.total_score}}</span>\n                                                    </div>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"feedback-panel\" [ngClass]=\"last ? 'feedback-panel_last' : first ? 'feedback-panel_first' : ''\"\n                                                 *ngFor=\"let feedback of feedbackList; let last = last; let first = first\" (click)=\"feedback.collaspsed = !feedback.collaspsed\">\n                                                <div class=\"feedback-header d-flex justify-content-between align-items-center\"\n                                                     [ngClass]=\"!feedback.collaspsed ? 'open' : ''\">\n                                                    <span class=\"title-text\">{{ getValue(feedback[0]) ?? '-' }}</span>\n                                                    <div class=\"d-flex align-items-center\">\n                                            <span class=\"badge badge-info mr-2\">\n                                                Score: {{ feedback[1]?.score }} / {{ totalIndivialScore }}\n                                            </span>\n                                                        <i style=\"color: black\" class=\"fa\" [ngClass]=\"feedback.collaspsed ? 'fa-chevron-down' : 'fa-chevron-up'\"></i>\n                                                    </div>\n                                                </div>\n\n                                                <div [ngbCollapse]=\"feedback.collaspsed\" class=\"feedback-body\">\n                                                    <div *ngIf=\"feedback[1]?.rationale\" class=\"rationale_design col-12 px-0 {{feedback[1]?.feedback.length == 0 ? 'mb-0' : ''}}\">\n                                                        <strong style=\"color: black\">Rationale:</strong> {{ feedback[1]?.rationale }}\n                                                    </div>\n\n                                                    <div class=\"row\">\n                                                        <div class=\"col-md-12 {{lastValue ? '' : 'mb-2'}}\" *ngFor=\"let value of feedback[1]?.feedback; let lastValue = last\">\n                                                            <div class=\"collapse-card\">\n                                                                <h5 class=\"snippet-text\">\n                                                                    {{ value.snippet }}\n                                                                </h5>\n\n                                                                <div class=\"inner-collapse mt-2\">\n                                                                    <label class=\"font-weight-bold col-12 px-0\">Suggestion: <span class=\"font-weight-normal italic\">{{ value.suggestion }}</span></label>\n\n                                                                    <label *ngIf=\"value?.why\" class=\"font-weight-bold mt-2 col-12 px-0\">Why: <span class=\"font-weight-normal italic\">{{ value.why }}</span></label>\n\n                                                                    <label *ngIf=\"value?.example_rewrite\" class=\"font-weight-bold mt-2 col-12 px-0\">Example: <span class=\"font-weight-normal color-primary italic\">{{ value.example_rewrite }}</span></label>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-12 mt-3 px-0\" *ngIf=\"selectedPreviousStudentAnswer.next_edit_plan\">\n                                <div class=\"card\">\n                                    <div class=\"card-header p-3 background_gradient\">\n                                        <h5 style=\"color: white;font-size: 16px\" class=\"font-weight-bold\">Next Edit Plan</h5>\n                                    </div>\n                                    <div class=\"card-body custom_feedback_card_body py-3 px-0\">\n                                        <div class=\"col-12 row {{!last ? 'mb-2' : ''}}\" *ngFor=\"let data of selectedPreviousStudentAnswer.next_edit_plan; let i = index; let last = last\">\n                                            <div style=\"width: 6%;padding-left: 16px\" class=\"text-center font-weight-bold\">{{data?.priority ?? i}}.</div>\n                                            <div style=\"width: 94%;\">\n                                                <label class=\"font-weight-bold mb-1 col-12 px-0\">{{data?.action ?? ''}}</label>\n                                                <label style=\"color: #007BFF\">Example: <span class=\"color-primary col-12 px-0\">{{data.example_rewrite}}</span></label>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div style=\"display: none\" *ngIf=\"totalFeedBack != ''\" class=\"mt-3 editor_bullet col-md-12 display-block\">\n                        <div class=\"card\">\n                            <div class=\"card-header p-3 background_gradient\">\n                                <h5 style=\"color: white\" class=\"font-weight-bold\">Teacher FeedBack</h5>\n                            </div>\n                            <div class=\"card-body p-3 custom_feedback_card_body\">\n                                <span class=\"innerhtml-margin-clear f-18\">{{totalFeedBack}}</span>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n\n                <div class=\"col-md-12 mt-3 card px-3 pt-4 pb-3\">\n                    <div class=\"row px-3 mb-3\" *ngIf=\"totalAns?.length == 1 && totalAns[0]?.question_type_id != '55'\">\n                        <div class=\"col-md-12\">\n                            <div class=\"col-md-12 px-0\">\n                                <button aria-controls=\"#overallFeedback\" aria-expanded=\"false\" class=\"btn btn-primary mr-2\" data-target=\"#overallFeedbackcfs\" data-toggle=\"collapse\">Student Overall Feedback</button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row px-3\" *ngIf=\"totalAns?.length == 1 && totalAns[0]?.question_type_id != '55'\">\n                        <div class=\"col-md-12 collapse mb-3\" id=\"overallFeedbackcfs\">\n                            <div *ngIf=\"totalStudentFeedBack != ''\" style=\"padding: 1rem\" class=\"col-md-12 release-card\">{{totalStudentFeedBack}}</div>\n                            <div *ngIf=\"totalStudentFeedBack == ''\" style=\"padding: 1rem\" class=\"col-md-12 release-card text-center\">No Feedback Found</div>\n                        </div>\n                    </div>\n                    <div class=\"row px-3\">\n                        <div class=\"col-md-3 px-0 mb-{{feedbackListData.length == 0 ? '2' : '0'}}\">\n                            <div class=\"col-md-12\">\n                                <label class=\"font-weight-bold\">Obtained Points</label>\n                                <input [(ngModel)]=\"studentPoints\" class=\"form-control\" type=\"text\">\n                            </div>\n                            <div class=\"col-md-12 mt-3\">\n                                <label class=\"font-weight-bold\">Total Points</label>\n                                <input [(ngModel)]=\"totalPoints\" class=\"form-control div-disable\" type=\"text\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-9 mb-{{feedbackListData.length == 0 ? '1' : '0'}}\">\n                            <label class=\"font-weight-bold col-6 px-0\">Overall Feedback</label>\n                            <textarea [(ngModel)]=\"newFeedBackEntered\" class=\"form-control\" cols=\"25\" placeholder=\"Overall Feedback\" rows=\"5\"></textarea>\n\n                            <div class=\"text-right col-12 px-0 mt-3 mb-{{feedbackListData.length == 0 ? '1' : '0'}}\">\n                                <button (click)=\"saveFeedback()\" class=\"btn btn-outline-primary\"><i class=\"fa fa-floppy-o mr-2\"></i>Save Feedback</button>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row px-3 mt-3\" *ngIf=\"feedbackListData.length != 0\">\n                        <div class=\"col-12\" style=\"padding: 0 10px\">\n                            <div class=\"card-header p-3 background_gradient\">\n                                <h5 style=\"color: white\">Overall FeedBack</h5>\n                            </div>\n                            <div class=\"card-body py-3 px-4 custom_feedback_card_body\">\n                                <div class=\"row px-2\" *ngFor=\"let data of feedbackListData; let last = last\">\n                                    <div class=\"col-12 card class-card1 py-2 {{last ? 'mb-0' : 'mb-3'}}\">\n                                        <div class=\"row\">\n                                            <div class=\"col-11\">\n                                                <h5 class=\"color-primary\" style=\"word-wrap: break-word;\">{{data.feedback}}</h5>\n                                                <p style=\"font-size: 12px\" class=\"text-dark\"><span *ngIf=\"data.version != ''\"><strong>Version {{data.version}}</strong> - </span>\n                                                    <span *ngIf=\"data.created_date != ''\">{{data.created_date | date:'medium'}}</span></p>\n                                            </div>\n\n                                            <div class=\"col-1 d-flex align-items-center justify-content-end\">\n                                                <i class=\"fa fa-trash fa-size text-danger cursor feedback-delete\" aria-hidden=\"true\" title=\"Delete Feedback\"\n                                                   (click)=\"deleteConfirmation(data)\"></i>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div [hidden]=\"scoreStatus == 3 || scoreStatus == 2\" class=\"col-md-12 mt-4 mb-4\">\n                    <button (click)=\"saveAnswer(1, 1, true)\" class=\"btn btn-primary pull-right ml-2\">Submit</button>\n                    <button (click)=\"saveAnswer(2, 1, true)\" class=\"btn btn-outline-primary pull-right\">Save</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #class let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12 text-right\">\n                    <i class=\"fa fa-close cursor\" style=\"font-size: 2rem\" (click)=\"close()\"></i>\n                </div>\n                <div class=\"col-12 text-center\">\n                    <h3 class=\"modal-title headerText\">Delete Annotation</h3>\n                </div>\n\n                <div class=\"col-12\">\n                    <h5 class=\"text-center mt-3\">Are you sure want to delete Annotation(s) ?</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-outline-primary\" type=\"button\">All Page </button>\n        <button type=\"button\" class=\"btn btn-outline-primary\">This Page</button>\n    </div>\n</ng-template>\n<ng-template #deleteAlert let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">Rework</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n            <div class=\"row px-3\">\n                <div class=\"col-12 px-0\">\n                    <p>Note: Changing the status will allow student to update the answers</p>\n                </div>\n            </div>\n            <div class=\"row d-flex justify-content-end px-3\">\n                <input (click)=\"resetStudentAns($event)\" [checked]=\"resetAnswer\" class=\"align-self-center mr-2\" type=\"checkbox\">\n                    <span class=\"color-primary align-self-center\">Reset student answers</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer d-flex justify-content-right\">\n        <button (click)=\"close()\" class=\"btn cancel\" type=\"button\">Cancel</button>\n        <button (click)=\"moveToPending()\" class=\"btn btn-primary\" type=\"button\">Ok</button>\n    </div>\n</ng-template>\n<ng-template #workArea let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header d-flex justify-content-between\">\n        &nbsp;,<h4 class=\"mb-0\">Work Area</h4><i (click)=\"close()\" class=\"fa fa-times-circle cursor\" style=\"font-size: 1.2rem\"></i>\n    </div>\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div>\n                <app-annotation [getAnnotate]=\"workAnnotate\"\n                                [id]=\"'workAreaAns'\"\n                                [pdfPath]=\"workAnnotatePDF\"\n                                [toolHide]=\"true\"\n                                [userType]=\"'teacher'\"></app-annotation>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #loaderStatus>\n    <div class=\"modal-body\">\n        <div class=\"col-12 px-0 my-3 d-flex flex-row align-items-center\">\n            <div class=\"feedback_spinner\"></div>\n            <span class=\"ml-3\" style=\"font-size: 16px\">Please wait, we are submitting the module...</span>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #releaseScoreAlert let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">Release Score Confirmation</h4>\n    </div>\n    <div class=\"modal-body p-0\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <p style=\"color: #313131\" class=\"mb-0 my-3 font-weight-bold\">All the module will be submitted and score released. Would you like to proceed further?</p>\n                </div>\n            </div>\n            <!-- Container-fluid Ends-->\n        </div>\n        <div class=\"modal-footer d-flex justify-content-right\">\n            <button (click)=\"close()\" class=\"btn cancel\" type=\"button\">Cancel</button>\n            <button (click)=\"submitAllTestAndReleaseScore()\" class=\"btn btn-primary\" type=\"button\">Ok</button>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #deleteFeedBack let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">Delete Feedback</h4>\n    </div>\n    <div class=\"modal-body p-0\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <p style=\"color: #313131\" class=\"mb-0 my-3\">Are you sure want to delete the selected feedback?</p>\n                </div>\n            </div>\n            <!-- Container-fluid Ends-->\n        </div>\n        <div class=\"modal-footer d-flex justify-content-right\">\n            <button (click)=\"close()\" class=\"btn cancel\" type=\"button\">Cancel</button>\n            <button (click)=\"updateOrDeleteFeedback('2', selectedTeacherFeedback?.id)\" class=\"btn btn-primary\" type=\"button\">Ok</button>\n        </div>\n    </div>\n</ng-template>\n", styles: [".inner_button {\n  padding: 4px 8px !important;\n  background: #ffff !important;\n  color: black;\n  border: 2px solid #e1e4eb !important;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 16px;\n  height: 30px;\n  cursor: text;\n}\n\n.button_design {\n  cursor: default;\n}\n\n.inner_button:focus, .button_design:focus {\n  box-shadow: none !important;\n  outline: none;\n}\n\n.button_design:active {\n  color: #FFFFFF !important;\n}\n\n.inner_button:active {\n  color: black !important;\n}\n\n.inner_button:focus-visible, .button_design:focus-visible {\n  outline: none !important;\n}\n\n.timer_button {\n  border: 1px solid #8f008a;\n  background: #fff !important;\n  border-radius: 4px;\n}\n\n.student-selected {\n  background-color: #e9ccec !important;\n  border-radius: 4px !important;\n}\n\n.correct-ans-selected {\n  background-color: #d4edda !important;\n  border-radius: 4px !important;\n}\n\n.wrong-ans-selected {\n  background-color: #ffb7b7 !important;\n  border-radius: 4px !important;\n}\n\n.img-fluid {\n  height: 60px !important;\n}\n\n.mark-input {\n  border-bottom: 2px solid #8F008A !important;\n}\n\n.progress-bar {\n  transition: width 0.8s ease-in-out;\n  background-color: #00a8ff;\n}\n"] }]
    }], () => [{ type: i1.NgbModalConfig }, { type: i2.ConfigurationService }, { type: i3.DomSanitizer }, { type: i4.TeacherService }, { type: i5.FormBuilder }, { type: i1.NgbModal }, { type: i6.AuthService }, { type: i7.CommonDataService }, { type: i8.NavService }, { type: i9.CommonService }, { type: i10.Router }, { type: i11.ValidationService }, { type: i12.SseClient }, { type: i13.ToastrService }, { type: i14.CreatorService }, { type: i15.NewsubjectService }, { type: i16.StudentService }, { type: i17.ContentdetailService }], { pdfPage: [{
            type: ViewChild,
            args: ['pdfPage']
        }], deleteClass: [{
            type: ViewChild,
            args: ['class']
        }], deleteAlert: [{
            type: ViewChild,
            args: ['deleteAlert']
        }], workArea: [{
            type: ViewChild,
            args: ['workArea']
        }], loaderStatus: [{
            type: ViewChild,
            args: ['loaderStatus']
        }], releaseScoreAlert: [{
            type: ViewChild,
            args: ['releaseScoreAlert']
        }], deleteFeedBack: [{
            type: ViewChild,
            args: ['deleteFeedBack']
        }], onResize: [{
            type: HostListener,
            args: ['window:resize']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CorrectionPageComponent, { className: "CorrectionPageComponent" }); })();
//# sourceMappingURL=correction-page.component.js.map