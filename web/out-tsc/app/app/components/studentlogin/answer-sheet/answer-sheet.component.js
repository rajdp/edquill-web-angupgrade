import { Component, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { parse } from 'flatted';
import { jsPDF } from 'jspdf';
import { urls } from '../../../shared/utils/urls';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "../../../shared/service/configuration.service";
import * as i3 from "@angular/platform-browser";
import * as i4 from "../../../shared/service/teacher.service";
import * as i5 from "../../../shared/service/student.service";
import * as i6 from "../../../shared/service/auth.service";
import * as i7 from "../../../shared/service/common-data.service";
import * as i8 from "../../../shared/service/nav.service";
import * as i9 from "../../../shared/service/common.service";
import * as i10 from "@angular/router";
import * as i11 from "../../../environment.service";
import * as i12 from "../../../shared/service/validation.service";
import * as i13 from "ngx-toastr";
import * as i14 from "../../../shared/service/creator.service";
import * as i15 from "../../../shared/service/contentdetail.service";
import * as i16 from "@angular/common";
import * as i17 from "@angular/forms";
import * as i18 from "@ng-select/ng-select";
import * as i19 from "../../auth/graph-component/graph-component.component";
import * as i20 from "../../auth/annotation/annotation.component";
import * as i21 from "ng-apexcharts";
import * as i22 from "../../../shared/pipes/sanitizer/SanitizeHtmlPipe.pipe";
import * as i23 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["workArea"];
const _c1 = ["overallFeedback"];
const _c2 = a0 => ({ "padding": a0 });
const _c3 = (a0, a1, a2) => ({ "ans-correct": a0, "ans-selected": a1, "ans-wrong": a2 });
const _c4 = (a0, a1) => ({ "correct-ans": a0, "wrong-ans": a1 });
const _c5 = a0 => ({ "max-height": a0 });
const _c6 = () => ["55"];
const _c7 = (a0, a1) => ({ "correct-ans-selected": a0, "wrong-ans-selected": a1 });
const _c8 = a0 => ({ "correct-ans-selected": a0 });
const _c9 = a0 => ({ "color-primary": a0 });
const _c10 = (a0, a1, a2) => ({ "badge-exceptional": a0, "badge-good": a1, "badge-improve": a2 });
const _c11 = a0 => ({ "width": a0 });
function AnswerSheetComponent_div_0_div_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.item;
    i0.ɵɵpropertyInterpolate("title", item_r3.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.name);
} }
function AnswerSheetComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "ng-select", 20);
    i0.ɵɵlistener("change", function AnswerSheetComponent_div_0_div_7_Template_ng_select_change_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.studentsAnswerList($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function AnswerSheetComponent_div_0_div_7_Template_ng_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.testContentData, $event) || (ctx_r1.testContentData = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(2, AnswerSheetComponent_div_0_div_7_ng_template_2_Template, 2, 2, "ng-template", 21);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.testContentDetail);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.testContentData);
    i0.ɵɵproperty("clearable", false);
} }
function AnswerSheetComponent_div_0_div_14_div_1_h4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 31)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elapsed_r4 = ctx.ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(elapsed_r4.hours);
} }
function AnswerSheetComponent_div_0_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_14_div_1_h4_1_Template, 3, 1, "h4", 27);
    i0.ɵɵelementStart(2, "h6", 28);
    i0.ɵɵtext(3, "Hours");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.getElapsedOverAllTime());
} }
function AnswerSheetComponent_div_0_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29)(1, "h4", 30);
    i0.ɵɵtext(2, ":");
    i0.ɵɵelementEnd()();
} }
function AnswerSheetComponent_div_0_div_14_h4_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 31)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elapsed_r5 = ctx.ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(elapsed_r5.minutes);
} }
function AnswerSheetComponent_div_0_div_14_h4_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 31)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elapsed_r6 = ctx.ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(elapsed_r6.seconds);
} }
function AnswerSheetComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_14_div_1_Template, 4, 1, "div", 24)(2, AnswerSheetComponent_div_0_div_14_div_2_Template, 3, 0, "div", 25);
    i0.ɵɵelementStart(3, "div", 26);
    i0.ɵɵtemplate(4, AnswerSheetComponent_div_0_div_14_h4_4_Template, 3, 1, "h4", 27);
    i0.ɵɵelementStart(5, "h6", 28);
    i0.ɵɵtext(6, "Minutes");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 29)(8, "h4", 30);
    i0.ɵɵtext(9, ":");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 26);
    i0.ɵɵtemplate(11, AnswerSheetComponent_div_0_div_14_h4_11_Template, 3, 1, "h4", 27);
    i0.ɵɵelementStart(12, "h6", 28);
    i0.ɵɵtext(13, "Seconds");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.contentTimeTaken >= 3600);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.contentTimeTaken >= 3600);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.getElapsedOverAllTime());
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.getElapsedOverAllTime());
} }
function AnswerSheetComponent_div_0_select_15_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 35);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    i0.ɵɵproperty("value", i_r9)("title", items_r8.image);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", items_r8.image, " ");
} }
function AnswerSheetComponent_div_0_select_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 32);
    i0.ɵɵlistener("change", function AnswerSheetComponent_div_0_select_15_Template_select_change_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changePDF($event)); });
    i0.ɵɵelementStart(1, "option", 33);
    i0.ɵɵtext(2, "Question PDF");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, AnswerSheetComponent_div_0_select_15_option_3_Template, 2, 3, "option", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.uploadAnswerPath);
} }
function AnswerSheetComponent_div_0_select_16_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 36);
    i0.ɵɵlistener("change", function AnswerSheetComponent_div_0_select_16_Template_select_change_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeView($event)); });
    i0.ɵɵelementStart(1, "option", 37);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "option", 38);
    i0.ɵɵtext(4, "PDF View");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "option", 39);
    i0.ɵɵtext(6, "Q & A View");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.contentType, " and uploads");
} }
function AnswerSheetComponent_div_0_select_17_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 32);
    i0.ɵɵlistener("change", function AnswerSheetComponent_div_0_select_17_Template_select_change_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.filterQues($event)); });
    i0.ɵɵelementStart(1, "option", 33);
    i0.ɵɵtext(2, "All Answers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "option", 40);
    i0.ɵɵtext(4, "Correct Answers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "option", 41);
    i0.ɵɵtext(6, "Incorrect Answers");
    i0.ɵɵelementEnd()();
} }
function AnswerSheetComponent_div_0_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 42);
    i0.ɵɵlistener("click", function AnswerSheetComponent_div_0_button_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.back()); });
    i0.ɵɵtext(1, "Back");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("btn btn-outline-primary pull-right ", ctx_r1.env.deviceType() ? "py-0 border-radius-2" : "", "");
} }
function AnswerSheetComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 43)(1, "a", 44);
    i0.ɵɵlistener("click", function AnswerSheetComponent_div_0_div_20_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.viewAnswerKeyPdf()); });
    i0.ɵɵelement(2, "i", 45);
    i0.ɵɵtext(3, "Answer Key & Explanation");
    i0.ɵɵelementEnd()();
} }
function AnswerSheetComponent_div_0_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46)(1, "div", 47)(2, "h5", 48);
    i0.ɵɵtext(3, "Overall Feedback:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 49)(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.studentAnswer.feedback);
} }
function AnswerSheetComponent_div_0_div_22_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵelement(1, "img", 58);
    i0.ɵɵelementEnd();
} }
function AnswerSheetComponent_div_0_div_22_div_2_div_2_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 68);
} }
function AnswerSheetComponent_div_0_div_22_div_2_div_2_img_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 69);
} }
function AnswerSheetComponent_div_0_div_22_div_2_div_2_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 70);
} }
function AnswerSheetComponent_div_0_div_22_div_2_div_2_img_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 71);
} }
function AnswerSheetComponent_div_0_div_22_div_2_div_2_img_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 72);
} }
function AnswerSheetComponent_div_0_div_22_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 59)(1, "div", 60)(2, "div", 61);
    i0.ɵɵtemplate(3, AnswerSheetComponent_div_0_div_22_div_2_div_2_img_3_Template, 1, 0, "img", 62)(4, AnswerSheetComponent_div_0_div_22_div_2_div_2_img_4_Template, 1, 0, "img", 63)(5, AnswerSheetComponent_div_0_div_22_div_2_div_2_img_5_Template, 1, 0, "img", 64)(6, AnswerSheetComponent_div_0_div_22_div_2_div_2_img_6_Template, 1, 0, "img", 65)(7, AnswerSheetComponent_div_0_div_22_div_2_div_2_img_7_Template, 1, 0, "img", 66);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "a", 67);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.correctPdfPath[0].type == "document");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.correctPdfPath[0].type == "audio");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.correctPdfPath[0].type == "video");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.correctPdfPath[0].type == "ppt");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.correctPdfPath[0].type == "Others");
    i0.ɵɵadvance();
    i0.ɵɵproperty("title", ctx_r1.correctPdfPath[0].link)("href", ctx_r1.correctPdfPath[0].link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.correctPdfPath[0].name);
} }
function AnswerSheetComponent_div_0_div_22_div_2_app_annotation_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-annotation", 73);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("getAnnotate", ctx_r1.areaInfo)("getDragQues", ctx_r1.dragQuestion)("pdfPath", ctx_r1.pdfTemplate)("toolHide", true)("userType", "student");
} }
function AnswerSheetComponent_div_0_div_22_div_2_app_annotation_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-annotation", 74);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("getAnnotate", ctx_r1.sheetInfo)("pdfPath", ctx_r1.answerSheetPath)("toolHide", true)("userType", "student");
} }
function AnswerSheetComponent_div_0_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_22_div_2_div_1_Template, 2, 0, "div", 53)(2, AnswerSheetComponent_div_0_div_22_div_2_div_2_Template, 10, 8, "div", 54)(3, AnswerSheetComponent_div_0_div_22_div_2_app_annotation_3_Template, 1, 5, "app-annotation", 55)(4, AnswerSheetComponent_div_0_div_22_div_2_app_annotation_4_Template, 1, 4, "app-annotation", 56);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.questionEmpty || ctx_r1.hideAnswer || ctx_r1.showPDF ? 12 : 8, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.functionCalled || ctx_r1.showingType == "2" && ctx_r1.blink == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.functionCalled && ctx_r1.showingType == "1" && !ctx_r1.isPdfAvailable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showingType == "1" && ctx_r1.isPdfAvailable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showingType == "2" && ctx_r1.blink);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 80);
    i0.ɵɵelement(1, "input", 81);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r14 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", sec_r14.heading);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_button_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 94);
    i0.ɵɵtext(1, "your Work Space");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r15 = i0.ɵɵnextContext().index;
    const i_r16 = i0.ɵɵnextContext().index;
    i0.ɵɵattribute("aria-controls", "#roughArea" + i_r16 + "id" + j_r15)("data-target", "#roughArea" + i_r16 + "id" + j_r15);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_button_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 94);
    i0.ɵɵtext(1, "your Feedback");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r15 = i0.ɵɵnextContext().index;
    const i_r16 = i0.ɵɵnextContext().index;
    i0.ɵɵattribute("aria-controls", "#studentFeedback" + i_r16 + "id" + j_r15)("data-target", "#studentFeedback" + i_r16 + "id" + j_r15);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 95);
    i0.ɵɵlistener("click", function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); const item_r18 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.openWorkArea(item_r18)); });
    i0.ɵɵtext(1, "Work Area");
    i0.ɵɵelementEnd();
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_ul_19_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 98)(1, "span")(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "i", 99)(5, "i", 100);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r19 = ctx.$implicit;
    const item_r18 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c3, option_r19.trim().toLowerCase() == item_r18.answer.toString().trim().toLowerCase(), option_r19.trim().toLowerCase() == item_r18.student_answer.trim().toLowerCase(), option_r19.trim().toLowerCase() != item_r18.answer.toString().trim().toLowerCase() && option_r19.trim().toLowerCase() == item_r18.student_answer.trim().toLowerCase()));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(option_r19);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_ul_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 96);
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_ul_19_li_1_Template, 6, 6, "li", 97);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r18.array);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_ul_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 96)(1, "li", 98)(2, "span");
    i0.ɵɵelement(3, "input", 101);
    i0.ɵɵtext(4, " True ");
    i0.ɵɵelement(5, "i", 99)(6, "i", 100);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "li", 98)(8, "span");
    i0.ɵɵelement(9, "input", 102);
    i0.ɵɵtext(10, " False ");
    i0.ɵɵelement(11, "i", 99)(12, "i", 100);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(4, _c3, item_r18.answer.toString() == "true", item_r18.student_answer == "true", item_r18.answer.toString() == "false" && item_r18.student_answer == "true"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", item_r18.student_answer == "true");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(8, _c3, item_r18.answer.toString() == "false", item_r18.student_answer == "false", item_r18.answer.toString() == "true" && item_r18.student_answer == "false"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", item_r18.student_answer == "false");
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_ul_21_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 98)(1, "span", 103);
    i0.ɵɵtext(2);
    i0.ɵɵelement(3, "i", 99)(4, "i", 100);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r20 = ctx.$implicit;
    const item_r18 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c3, option_r20 == item_r18.answer.toString(), option_r20 == item_r18.student_answer, option_r20 != item_r18.answer.toString() && option_r20 == item_r18.student_answer));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", option_r20, " ");
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_ul_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 96);
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_ul_21_li_1_Template, 5, 6, "li", 97);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r18.mob_options);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_22_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label")(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "span", 107);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const answer_r21 = ctx.$implicit;
    const k_r22 = ctx.index;
    const first_r23 = ctx.first;
    i0.ɵɵclassMapInterpolate1("mt-", first_r23 ? "4" : "2", " col-12");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Correct answer ", k_r22 + 1, " : ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(answer_r21);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 104);
    i0.ɵɵelement(1, "textarea", 105);
    i0.ɵɵtemplate(2, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_22_label_2_Template, 5, 5, "label", 106);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", item_r18.enteredAnswer ? "correct-ans" : "wrong-ans")("value", item_r18.student_answer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r18.answer);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_23_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 113);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_23_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 114);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 104)(1, "div", 92)(2, "label", 14)(3, "b");
    i0.ɵɵtext(4, "Your Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_23_i_5_Template, 1, 0, "i", 108)(6, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_23_i_6_Template, 1, 0, "i", 109);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "textarea", 110);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 111)(10, "label");
    i0.ɵɵtext(11, "No of Lines: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "input", 112);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r18.given_points == item_r18.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.given_points != item_r18.points);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r18.student_answer);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", item_r18.answer.toString());
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_24_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 113);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_24_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 114);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_24_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 118)(1, "label", 119)(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(4, "h4", 120);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const answer_r24 = ctx.$implicit;
    const k_r25 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Correct Answer ", k_r25 + 1, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, answer_r24), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 104)(1, "div", 115)(2, "label", 14)(3, "b");
    i0.ɵɵtext(4, "Your Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_24_i_5_Template, 1, 0, "i", 108)(6, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_24_i_6_Template, 1, 0, "i", 109);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "h4", 116);
    i0.ɵɵpipe(8, "sanitizeHtml");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_24_div_9_Template, 6, 4, "div", 117);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r18.given_points == item_r18.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.given_points != item_r18.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(8, 4, item_r18.student_answer), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r18.answer);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_25_div_1_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 125);
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const blank_r27 = ctx_r25.$implicit;
    const k_r28 = ctx_r25.index;
    const item_r18 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c4, item_r18.match_case == "1" ? blank_r27.value == item_r18.student_answer[k_r28] : blank_r27.value.trim().toLowerCase().split(" ").join("") == item_r18.student_answer[k_r28].trim().toLowerCase().split(" ").join(""), item_r18.match_case ? blank_r27.value != item_r18.student_answer[k_r28] : blank_r27.value.trim().toLowerCase().split(" ").join("") != item_r18.student_answer[k_r28].trim().toLowerCase().split(" ").join("")))("value", item_r18.student_answer[k_r28]);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_25_div_1_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 126);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_25_div_1_input_1_Template, 1, 5, "input", 122)(2, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_25_div_1_input_2_Template, 1, 0, "input", 123);
    i0.ɵɵelementStart(3, "label", 124)(4, "b");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const blank_r27 = ctx.$implicit;
    const k_r28 = ctx.index;
    const item_r18 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.student_answer[k_r28]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.student_answer[k_r28] == undefined || item_r18.student_answer[k_r28] == "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Correct answer : ", blank_r27.value, "");
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 104);
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_25_div_1_Template, 6, 3, "div", 121);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r18.answer);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_26_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 131);
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("src", ctx_r1.sanitizer.bypassSecurityTrustResourceUrl(ctx_r1.webhost + "/" + item_r18.rough_image_url), i0.ɵɵsanitizeUrl);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_26_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 132);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, item_r18.student_roughdata), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 127)(2, "div", 128);
    i0.ɵɵtemplate(3, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_26_img_3_Template, 1, 1, "img", 129)(4, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_26_div_4_Template, 2, 3, "div", 130);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext();
    const item_r18 = ctx_r28.$implicit;
    const j_r15 = ctx_r28.index;
    const i_r16 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.showpdf ? 6 : 3, "");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("id", "roughArea", i_r16, "id", j_r15, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.rough_image_url != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.student_roughdata != "");
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_27_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 135);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r18.student_feedback);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_27_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 136);
    i0.ɵɵtext(1, "No Feedback Found");
    i0.ɵɵelementEnd();
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 127)(2, "div", 128);
    i0.ɵɵtemplate(3, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_27_div_3_Template, 2, 1, "div", 133)(4, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_27_div_4_Template, 2, 0, "div", 134);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext();
    const item_r18 = ctx_r28.$implicit;
    const j_r15 = ctx_r28.index;
    const i_r16 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.showpdf ? 6 : 3, "");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("id", "studentFeedback", i_r16, "id", j_r15, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.student_feedback != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.student_feedback == "");
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_29_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 141);
    i0.ɵɵelement(1, "h4", 142);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, item_r18.question_editor_answer), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_29_i_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 113);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_29_i_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 114);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_29_app_graph_component_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-graph-component", 138);
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext(2).$implicit;
    const i_r16 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("editMode", false)("editPatchValue", ctx_r1.parseVal(item_r18.student_answer[0].correctAnswer))("graphId", i_r16 + "Editgraph" + item_r18.sub_question_no + "id")("questionType", "40");
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_29_app_graph_component_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-graph-component", 138);
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext(2).$implicit;
    const i_r16 = i0.ɵɵnextContext().index;
    i0.ɵɵproperty("editMode", false)("editPatchValue", false)("graphId", i_r16 + "Editgraphnull" + item_r18.sub_question_no + "id")("questionType", "40");
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_29_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 141);
    i0.ɵɵelement(1, "h4", 143);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, item_r18.editor_answer), i0.ɵɵsanitizeHtml)("ngClass", item_r18.given_points == item_r18.points ? "form-span-correct" : "form-span-wrong");
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "div", 137);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementStart(3, "div")(4, "label", 119)(5, "b");
    i0.ɵɵtext(6, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(7, "app-graph-component", 138);
    i0.ɵɵtemplate(8, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_29_div_8_Template, 3, 3, "div", 139);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div")(10, "label", 14)(11, "b");
    i0.ɵɵtext(12, "Your Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_29_i_13_Template, 1, 0, "i", 108)(14, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_29_i_14_Template, 1, 0, "i", 109);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_29_app_graph_component_15_Template, 1, 4, "app-graph-component", 140)(16, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_29_app_graph_component_16_Template, 1, 4, "app-graph-component", 140)(17, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_29_div_17_Template, 3, 4, "div", 139);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext().$implicit;
    const i_r16 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("col-md-12 mt-4 px-0 ", ctx_r1.showpdf ? "" : "d-flex", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", item_r18.question == "")("innerHTML", i0.ɵɵpipeBind1(2, 22, item_r18.question), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.showpdf ? 12 : 6, " div-disable");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("editMode", false)("editPatchValue", ctx_r1.parseVal(item_r18.answer))("graphId", i_r16 + "correctgraph" + item_r18.sub_question_no + "id")("questionType", "40");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.question_editor_answer != "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("col-md-", ctx_r1.showpdf ? 12 : 6, " div-disable ", ctx_r1.showpdf ? "mt-3" : "", "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", item_r18.given_points == item_r18.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.given_points != item_r18.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.student_answer != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.student_answer == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.editor_answer != "");
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 144)(1, "div", 92)(2, "label");
    i0.ɵɵtext(3, "Explanation: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "h4", 145);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 1, item_r18.answer_explanation), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 144)(1, "div", 92)(2, "label");
    i0.ɵɵtext(3, "Teacher Feedback: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "textarea", 146);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", item_r18.feedback);
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 82)(1, "div", 83)(2, "div", 84)(3, "div")(4, "span", 85);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "div");
    i0.ɵɵtemplate(8, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_button_8_Template, 2, 2, "button", 86)(9, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_button_9_Template, 2, 2, "button", 86)(10, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_button_10_Template, 2, 0, "button", 87);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div")(12, "div", 8);
    i0.ɵɵelement(13, "input", 88)(14, "input", 88);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(15, "div", 50)(16, "div");
    i0.ɵɵelement(17, "div", 89);
    i0.ɵɵpipe(18, "sanitizeHtml");
    i0.ɵɵtemplate(19, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_ul_19_Template, 2, 1, "ul", 90)(20, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_ul_20_Template, 13, 12, "ul", 90)(21, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_ul_21_Template, 2, 1, "ul", 90)(22, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_22_Template, 3, 3, "div", 91)(23, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_23_Template, 13, 4, "div", 91)(24, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_24_Template, 10, 6, "div", 91)(25, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_25_Template, 2, 1, "div", 91);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(26, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_26_Template, 5, 8, "div", 51)(27, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_27_Template, 5, 8, "div", 51);
    i0.ɵɵelementStart(28, "div", 92);
    i0.ɵɵtemplate(29, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_29_Template, 18, 24, "div", 51);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(30, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_30_Template, 6, 3, "div", 93)(31, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_div_31_Template, 5, 1, "div", 93);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", !item_r18.isShow);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("col-md-1 ", ctx_r1.env.deviceType() && item_r18.student_feedback != "" && (item_r18.rough_image_url != "" || item_r18.student_roughdata != "" || item_r18.workarea.length != 0) ? "px-0" : "pr-0", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r18.sub_question_no);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.showpdf == true ? 11 : 10, " align-items-center text-right d-flex justify-content-end flex-wrap pr-0");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("pull-right px-0 ", ctx_r1.showpdf == true ? "" : "mr-2", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.rough_image_url != "" || item_r18.student_roughdata != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.student_feedback != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.workarea.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.showpdf == true ? 3 : 2, " px-0");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", item_r18.given_points)("ngStyle", i0.ɵɵpureFunction1(40, _c2, ctx_r1.env.deviceType() ? "6px 4px" : "8px 12px"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", item_r18.points)("ngStyle", i0.ɵɵpureFunction1(42, _c2, ctx_r1.env.deviceType() ? "6px 4px" : "8px 12px"));
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("col-md-", item_r18.rough_image_url != "" || item_r18.student_roughdata != "" ? "6" : "12", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", item_r18.question == "")("innerHTML", i0.ɵɵpipeBind1(18, 38, item_r18.question), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r18.question_type_id == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.question_type_id == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.question_type_id == 9);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.question_type_id == 10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.question_type_id == 20);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.question_type_id == 30);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.question_type_id == 54);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.rough_image_url != "" || item_r18.student_roughdata != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.student_feedback != "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r18.question_type_id == 40);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.answer_explanation != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.student_feedback != "");
} }
function AnswerSheetComponent_div_0_div_22_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 77);
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_1_Template, 2, 1, "div", 78)(2, AnswerSheetComponent_div_0_div_22_div_3_div_1_div_2_Template, 32, 44, "div", 79);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r14 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(3, _c2, ctx_r1.showpdf === true ? "0.3rem" : "2rem"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r14.heading != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", sec_r14.section);
} }
function AnswerSheetComponent_div_0_div_22_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 75);
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_22_div_3_div_1_Template, 3, 5, "div", 76);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.showpdf && !ctx_r1.showQuestion ? 4 : 12, " scrollPanel view-question");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.totalAns);
} }
function AnswerSheetComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46)(1, "div", 50);
    i0.ɵɵtemplate(2, AnswerSheetComponent_div_0_div_22_div_2_Template, 5, 7, "div", 51)(3, AnswerSheetComponent_div_0_div_22_div_3_Template, 2, 4, "div", 52);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.showQuestion);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.questionEmpty && !ctx_r1.hideAnswer && !ctx_r1.showPDF);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_3_div_4_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 176);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_3_div_4_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 177);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_23_div_1_div_3_div_4_i_1_Template, 1, 0, "i", 174)(2, AnswerSheetComponent_div_0_div_23_div_1_div_3_div_4_i_2_Template, 1, 0, "i", 175);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.given_points == item_r31.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.given_points != item_r31.points);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_3_div_5_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 176);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_3_div_5_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 177);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_23_div_1_div_3_div_5_i_1_Template, 1, 0, "i", 174)(2, AnswerSheetComponent_div_0_div_23_div_1_div_3_div_5_i_2_Template, 1, 0, "i", 175);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r31.subQuestions[0] == null ? null : item_r31.subQuestions[0].given_points) == (item_r31.subQuestions[0] == null ? null : item_r31.subQuestions[0].points));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r31.subQuestions[0] == null ? null : item_r31.subQuestions[0].given_points) != (item_r31.subQuestions[0] == null ? null : item_r31.subQuestions[0].points));
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_3_h4_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 178)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elapsed_r32 = ctx.ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(elapsed_r32.minutes);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_3_h4_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 178)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elapsed_r33 = ctx.ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(elapsed_r33.seconds);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_3_span_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", item_r31.given_points, " / ", item_r31.points, "");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_3_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", item_r31.subQuestions[0] == null ? null : item_r31.subQuestions[0].given_points, " / ", item_r31.subQuestions[0] == null ? null : item_r31.subQuestions[0].points, "");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 164)(1, "div", 165)(2, "span", 166);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, AnswerSheetComponent_div_0_div_23_div_1_div_3_div_4_Template, 3, 2, "div", 167)(5, AnswerSheetComponent_div_0_div_23_div_1_div_3_div_5_Template, 3, 2, "div", 167);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 168)(7, "div", 169)(8, "div", 170)(9, "div", 26);
    i0.ɵɵtemplate(10, AnswerSheetComponent_div_0_div_23_div_1_div_3_h4_10_Template, 3, 1, "h4", 171);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 172)(12, "h4", 30);
    i0.ɵɵtext(13, ":");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 26);
    i0.ɵɵtemplate(15, AnswerSheetComponent_div_0_div_23_div_1_div_3_h4_15_Template, 3, 1, "h4", 171);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "h5", 30);
    i0.ɵɵtext(17, "Score: ");
    i0.ɵɵtemplate(18, AnswerSheetComponent_div_0_div_23_div_1_div_3_span_18_Template, 2, 2, "span", 173)(19, AnswerSheetComponent_div_0_div_23_div_1_div_3_span_19_Template, 2, 2, "span", 173);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r31.question_no);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question_type_id != "24");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question_type_id == "24");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.getElapsedTime(item_r31));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.getElapsedTime(item_r31));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r31.question_type_id != "24");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question_type_id == "24");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 179);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, item_r31.question), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 179);
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r1.convertMarkdownToHtml(item_r31.question, "single"), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 179);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, item_r31.subQuestions[0] == null ? null : item_r31.subQuestions[0].passage), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_9_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 113);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_9_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 114);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_9_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 185)(1, "button", 186);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 187);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r34 = ctx.$implicit;
    const k_r35 = ctx.index;
    const item_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(5, _c7, option_r34.isSelected === "" ? false : option_r34.isSelected == k_r35 ? item_r31.given_points == item_r31.points : false, option_r34.isSelected === "" ? false : option_r34.isSelected == k_r35 ? item_r31.given_points != item_r31.points : false));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((k_r35 + 1 + 9).toString(36).toUpperCase());
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 3, option_r34.options), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_9_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 188)(1, "span", 189);
    i0.ɵɵtext(2, "Student Not Answered");
    i0.ɵɵelementEnd()();
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_9_div_13_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 193);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r36 = i0.ɵɵnextContext().index;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((k_r36 + 1 + 9).toString(36).toUpperCase());
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_9_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 194);
    i0.ɵɵelement(1, "span", 187);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r36 = i0.ɵɵnextContext().index;
    const item_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, item_r31.options[k_r36].options), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_9_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 190);
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_23_div_1_div_9_div_13_button_1_Template, 2, 1, "button", 191)(2, AnswerSheetComponent_div_0_div_23_div_1_div_9_div_13_div_2_Template, 3, 3, "div", 192);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r37 = ctx.$implicit;
    i0.ɵɵclassMap(option_r37.correctAnswer != "" ? "mx-2 p-2 mb-2 overflow-auto row" : "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c8, option_r37.correctAnswer != ""));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r37.correctAnswer != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r37.correctAnswer != "");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 180)(1, "div", 181)(2, "label", 14)(3, "b");
    i0.ɵɵtext(4, "Your Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AnswerSheetComponent_div_0_div_23_div_1_div_9_i_5_Template, 1, 0, "i", 108)(6, AnswerSheetComponent_div_0_div_23_div_1_div_9_i_6_Template, 1, 0, "i", 109);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, AnswerSheetComponent_div_0_div_23_div_1_div_9_div_7_Template, 5, 8, "div", 182)(8, AnswerSheetComponent_div_0_div_23_div_1_div_9_div_8_Template, 3, 0, "div", 183);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 181)(10, "label", 119)(11, "b");
    i0.ɵɵtext(12, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(13, AnswerSheetComponent_div_0_div_23_div_1_div_9_div_13_Template, 3, 8, "div", 184);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r31.given_points == item_r31.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.given_points != item_r31.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r31.student_answer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.student_answer.length == 0);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", item_r31.answer);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_10_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 113);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_10_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 114);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_10_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 188)(1, "span", 189);
    i0.ɵɵtext(2, "Student Not Answered");
    i0.ɵɵelementEnd()();
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_10_table_8_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 200);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r38 = ctx.$implicit;
    const i_r39 = i0.ɵɵnextContext(3).index;
    i0.ɵɵpropertyInterpolate("id", "columnId" + i_r39);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 2, list_r38), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_10_table_8_tr_7_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 203);
} if (rf & 2) {
    const k_r40 = i0.ɵɵnextContext().index;
    const j_r41 = i0.ɵɵnextContext().index;
    const i_r39 = i0.ɵɵnextContext(3).index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate2("id", "", j_r41, "chooseSingle", i_r39, "");
    i0.ɵɵpropertyInterpolate2("name", "", i_r39, "choosesingle", j_r41, "your");
    i0.ɵɵproperty("checked", ctx_r1.totalAns[i_r39].student_answer[j_r41].isSelected == "" ? false : ctx_r1.totalAns[i_r39].student_answer[j_r41].isSelected == k_r40.toString());
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_10_table_8_tr_7_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 204);
} if (rf & 2) {
    const k_r40 = i0.ɵɵnextContext().index;
    const j_r41 = i0.ɵɵnextContext().index;
    const i_r39 = i0.ɵɵnextContext(3).index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate2("id", "", j_r41, "chooseMulti", i_r39, "");
    i0.ɵɵproperty("checked", ctx_r1.splitMultiChoose(ctx_r1.totalAns[i_r39].student_answer[j_r41].isSelected, k_r40));
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_10_table_8_tr_7_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_23_div_1_div_10_table_8_tr_7_td_3_input_1_Template, 1, 7, "input", 201)(2, AnswerSheetComponent_div_0_div_23_div_1_div_10_table_8_tr_7_td_3_input_2_Template, 1, 4, "input", 202);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question_type_id == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question_type_id == "7");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_10_table_8_tr_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 187);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, AnswerSheetComponent_div_0_div_23_div_1_div_10_table_8_tr_7_td_3_Template, 3, 2, "td", 121);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r42 = ctx.$implicit;
    const item_r31 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, list_r42.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r31.answer);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_10_table_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 197)(1, "thead")(2, "tr")(3, "th");
    i0.ɵɵtext(4, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AnswerSheetComponent_div_0_div_23_div_1_div_10_table_8_th_5_Template, 2, 4, "th", 199);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "tbody");
    i0.ɵɵtemplate(7, AnswerSheetComponent_div_0_div_23_div_1_div_10_table_8_tr_7_Template, 4, 4, "tr", 121);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", item_r31.answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r31.student_answer);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_10_th_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 187);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r43 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r43), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_10_tr_20_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 207);
} if (rf & 2) {
    const k_r44 = i0.ɵɵnextContext().index;
    const j_r45 = i0.ɵɵnextContext().index;
    const ctx_r45 = i0.ɵɵnextContext(2);
    const item_r31 = ctx_r45.$implicit;
    const i_r39 = ctx_r45.index;
    i0.ɵɵpropertyInterpolate2("name", "", i_r39, "choosesingle", j_r45, "corect");
    i0.ɵɵproperty("checked", item_r31.heading_option[j_r45].correctActive === k_r44);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_10_tr_20_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 208);
} if (rf & 2) {
    const k_r44 = i0.ɵɵnextContext().index;
    const j_r45 = i0.ɵɵnextContext().index;
    const i_r39 = i0.ɵɵnextContext(2).index;
    i0.ɵɵpropertyInterpolate3("id", "chooseMultipass", i_r39, "", j_r45, "", k_r44, "");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_10_tr_20_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_23_div_1_div_10_tr_20_td_3_input_1_Template, 1, 4, "input", 205)(2, AnswerSheetComponent_div_0_div_23_div_1_div_10_tr_20_td_3_input_2_Template, 1, 4, "input", 206);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question_type_id == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question_type_id == "7");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_10_tr_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 187);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, AnswerSheetComponent_div_0_div_23_div_1_div_10_tr_20_td_3_Template, 3, 2, "td", 121);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r47 = ctx.$implicit;
    const item_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, list_r47.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r31.answer);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 180)(1, "div", 195)(2, "label", 14)(3, "b");
    i0.ɵɵtext(4, "Your Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AnswerSheetComponent_div_0_div_23_div_1_div_10_i_5_Template, 1, 0, "i", 108)(6, AnswerSheetComponent_div_0_div_23_div_1_div_10_i_6_Template, 1, 0, "i", 109);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, AnswerSheetComponent_div_0_div_23_div_1_div_10_div_7_Template, 3, 0, "div", 183)(8, AnswerSheetComponent_div_0_div_23_div_1_div_10_table_8_Template, 8, 2, "table", 196);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 195)(10, "label", 119)(11, "b");
    i0.ɵɵtext(12, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "table", 197)(14, "thead")(15, "tr")(16, "th");
    i0.ɵɵtext(17, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(18, AnswerSheetComponent_div_0_div_23_div_1_div_10_th_18_Template, 2, 3, "th", 198);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "tbody");
    i0.ɵɵtemplate(20, AnswerSheetComponent_div_0_div_23_div_1_div_10_tr_20_Template, 4, 4, "tr", 121);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r31.given_points == item_r31.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.given_points != item_r31.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.student_answer.length == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.student_answer.length != 0);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngForOf", item_r31.answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r31.student_answer);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_11_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 113);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_11_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 114);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_11_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 212)(1, "span", 189);
    i0.ɵɵtext(2, "Student Not Answered");
    i0.ɵɵelementEnd()();
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_11_div_8_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 218);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const option_r48 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, option_r48.listOption), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_11_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 213)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 214);
    i0.ɵɵelement(4, "div", 215);
    i0.ɵɵelementStart(5, "div", 216);
    i0.ɵɵtemplate(6, AnswerSheetComponent_div_0_div_23_div_1_div_11_div_8_span_6_Template, 2, 3, "span", 217);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const data_r49 = ctx.$implicit;
    const j_r50 = ctx.index;
    const ctx_r45 = i0.ɵɵnextContext(2);
    const item_r31 = ctx_r45.$implicit;
    const i_r39 = ctx_r45.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Dropdown - ", j_r50 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("id", "", i_r39, "dropdown", j_r50, "");
    i0.ɵɵproperty("ngClass", item_r31.given_points == item_r31.points ? "dropdown-border-correct" : "dropdown-border-wrong");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", data_r49.options);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_11_div_13_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 218);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const option_r51 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, option_r51.listOption), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_11_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 213)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 214);
    i0.ɵɵelement(4, "div", 219);
    i0.ɵɵelementStart(5, "div", 216);
    i0.ɵɵtemplate(6, AnswerSheetComponent_div_0_div_23_div_1_div_11_div_13_span_6_Template, 2, 3, "span", 217);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const data_r52 = ctx.$implicit;
    const j_r53 = ctx.index;
    const i_r39 = i0.ɵɵnextContext(2).index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Dropdown - ", j_r53 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("id", "", i_r39, "dropdownCorrect", j_r53, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", data_r52.options);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 180)(1, "div", 209)(2, "label", 14)(3, "b");
    i0.ɵɵtext(4, "Your Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AnswerSheetComponent_div_0_div_23_div_1_div_11_i_5_Template, 1, 0, "i", 108)(6, AnswerSheetComponent_div_0_div_23_div_1_div_11_i_6_Template, 1, 0, "i", 109);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, AnswerSheetComponent_div_0_div_23_div_1_div_11_div_7_Template, 3, 0, "div", 210)(8, AnswerSheetComponent_div_0_div_23_div_1_div_11_div_8_Template, 7, 6, "div", 211);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 209)(10, "label", 119)(11, "b");
    i0.ɵɵtext(12, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(13, AnswerSheetComponent_div_0_div_23_div_1_div_11_div_13_Template, 7, 5, "div", 211);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r31.given_points == item_r31.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.given_points != item_r31.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.student_answer.length == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r31.student_answer);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", item_r31.answer);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_12_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 113);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_12_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 114);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_12_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 222);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const data_r54 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, data_r54.isSelected), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_12_div_7_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Student Not Answered");
    i0.ɵɵelementEnd();
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_12_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 213)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 98);
    i0.ɵɵtemplate(4, AnswerSheetComponent_div_0_div_23_div_1_div_12_div_7_div_4_Template, 2, 3, "div", 221)(5, AnswerSheetComponent_div_0_div_23_div_1_div_12_div_7_div_5_Template, 2, 0, "div", 167);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r54 = ctx.$implicit;
    const j_r55 = ctx.index;
    const item_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Input - ", j_r55 + 1, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", item_r31.given_points == item_r31.points ? "form-span-correct" : "form-span-wrong");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r54.isSelected != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r54.isSelected == "");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_12_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 213)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 223);
    i0.ɵɵelement(4, "div", 222);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r56 = ctx.$implicit;
    const j_r57 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Input - ", j_r57 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, data_r56.options[0].value), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 220)(1, "div", 209)(2, "label", 14)(3, "b");
    i0.ɵɵtext(4, "Your Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AnswerSheetComponent_div_0_div_23_div_1_div_12_i_5_Template, 1, 0, "i", 108)(6, AnswerSheetComponent_div_0_div_23_div_1_div_12_i_6_Template, 1, 0, "i", 109);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, AnswerSheetComponent_div_0_div_23_div_1_div_12_div_7_Template, 6, 4, "div", 211);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 209)(9, "label", 119)(10, "b");
    i0.ɵɵtext(11, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, AnswerSheetComponent_div_0_div_23_div_1_div_12_div_12_Template, 6, 4, "div", 211);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r31.given_points == item_r31.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.given_points != item_r31.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r31.student_answer);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", item_r31.options);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_13_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 113);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_13_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 114);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_13_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 188)(1, "span", 189);
    i0.ɵɵtext(2, "Student Not Answered");
    i0.ɵɵelementEnd()();
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_13_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 226)(1, "div", 227)(2, "div", 228)(3, "span", 229);
    i0.ɵɵelement(4, "img", 230);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "h4", 231);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r58 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, list_r58.options), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_13_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 224);
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_23_div_1_div_13_div_8_div_1_Template, 7, 3, "div", 225);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r31.student_answer);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_13_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 226)(1, "div", 227)(2, "div", 228)(3, "span", 229);
    i0.ɵɵelement(4, "img", 230);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "h4", 231);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r59 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, list_r59.correctAnswer), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 220)(1, "div", 209)(2, "label", 14)(3, "b");
    i0.ɵɵtext(4, "Your Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AnswerSheetComponent_div_0_div_23_div_1_div_13_i_5_Template, 1, 0, "i", 108)(6, AnswerSheetComponent_div_0_div_23_div_1_div_13_i_6_Template, 1, 0, "i", 109);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, AnswerSheetComponent_div_0_div_23_div_1_div_13_div_7_Template, 3, 0, "div", 183)(8, AnswerSheetComponent_div_0_div_23_div_1_div_13_div_8_Template, 2, 1, "div", 150);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 209)(10, "label", 119)(11, "b");
    i0.ɵɵtext(12, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 224);
    i0.ɵɵtemplate(14, AnswerSheetComponent_div_0_div_23_div_1_div_13_div_14_Template, 7, 3, "div", 225);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r31.given_points == item_r31.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.given_points != item_r31.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.student_answer.length == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.student_answer.length != 0);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", item_r31.answer);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_14_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 113);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_14_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 114);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_14_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 234);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, item_r31.student_answer[0] == null ? null : item_r31.student_answer[0].isSelected), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_14_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Student Not Answered");
    i0.ɵɵelementEnd();
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_14_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "label", 119)(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 235);
    i0.ɵɵelement(5, "div", 234);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const answer_r60 = ctx.$implicit;
    const i_r61 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Correct Answer ", i_r61 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 2, answer_r60.correctAnswer), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 220)(1, "div", 209)(2, "label", 14)(3, "b");
    i0.ɵɵtext(4, "Your Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AnswerSheetComponent_div_0_div_23_div_1_div_14_i_5_Template, 1, 0, "i", 108)(6, AnswerSheetComponent_div_0_div_23_div_1_div_14_i_6_Template, 1, 0, "i", 109);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 232);
    i0.ɵɵtemplate(8, AnswerSheetComponent_div_0_div_23_div_1_div_14_div_8_Template, 2, 3, "div", 233)(9, AnswerSheetComponent_div_0_div_23_div_1_div_14_div_9_Template, 2, 0, "div", 167);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 209);
    i0.ɵɵtemplate(11, AnswerSheetComponent_div_0_div_23_div_1_div_14_div_11_Template, 7, 4, "div", 121);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r31.given_points == item_r31.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.given_points != item_r31.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", item_r31.given_points == item_r31.points ? "form-span-correct" : "form-span-wrong");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r31.student_answer[0] == null ? null : item_r31.student_answer[0].isSelected) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r31.student_answer[0] == null ? null : item_r31.student_answer[0].isSelected) == "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r31.answer);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_15_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " - Current Version");
    i0.ɵɵelementEnd();
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_15_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" - Version ", ctx_r1.selectedFeedBackIndex, "");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_15_div_9_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 248)(1, "div")(2, "h5", 249);
    i0.ɵɵtext(3);
    i0.ɵɵelementStart(4, "span", 250);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "span", 251);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const feedback_r63 = ctx.item;
    const index_r64 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c9, ctx_r1.selectedFeedBackIndex === ctx_r1.previousFeedBack.length - index_r64));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Version ", ctx_r1.previousFeedBack.length - index_r64, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", feedback_r63 == null ? null : feedback_r63.student_score, " / ", feedback_r63 == null ? null : feedback_r63.total_score, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(8, _c10, ctx_r1.getFeedbackLabel(feedback_r63).label === "Exceptional", ctx_r1.getFeedbackLabel(feedback_r63).label === "Good", ctx_r1.getFeedbackLabel(feedback_r63).label === "Improve"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getFeedbackLabel(feedback_r63).label, "");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_15_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 245)(1, "label", 246);
    i0.ɵɵtext(2, "Select Version");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ng-select", 247);
    i0.ɵɵlistener("change", function AnswerSheetComponent_div_0_div_23_div_1_div_15_div_9_Template_ng_select_change_3_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.feedbackSelected($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function AnswerSheetComponent_div_0_div_23_div_1_div_15_div_9_Template_ng_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r1 = i0.ɵɵnextContext(5); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedVersion, $event) || (ctx_r1.selectedVersion = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(4, AnswerSheetComponent_div_0_div_23_div_1_div_15_div_9_ng_template_4_Template, 8, 12, "ng-template", 21);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("items", ctx_r1.previousFeedBack)("clearable", false);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedVersion);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_15_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 252)(1, "button", 253);
    i0.ɵɵelement(2, "i", 254);
    i0.ɵɵtext(3, "Print");
    i0.ɵɵelement(4, "i", 255);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 256)(6, "a", 257);
    i0.ɵɵlistener("click", function AnswerSheetComponent_div_0_div_23_div_1_div_15_div_10_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r65); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.common.printReport("Without")); });
    i0.ɵɵelement(7, "img", 258);
    i0.ɵɵtext(8, "Without Feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "a", 257);
    i0.ɵɵlistener("click", function AnswerSheetComponent_div_0_div_23_div_1_div_15_div_10_Template_a_click_9_listener() { i0.ɵɵrestoreView(_r65); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.common.printReport()); });
    i0.ɵɵelement(10, "img", 259);
    i0.ɵɵtext(11, "With Feedback");
    i0.ɵɵelementEnd()()();
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_15_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 260);
    i0.ɵɵelement(1, "span", 234);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.convertedText && ctx_r1.convertedText != "" ? ctx_r1.convertMarkdownToHtml(ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.student_answer) : ctx_r1.convertMarkdownToHtml(item_r31.student_answer[0] == null ? null : item_r31.student_answer[0].isSelected, "single"), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_15_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 261)(1, "span", 223);
    i0.ɵɵtext(2, "You Have Not Answered");
    i0.ɵɵelementEnd()();
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 236)(1, "div", 237)(2, "div", 50)(3, "h5", 238);
    i0.ɵɵtext(4, "Your Answer ");
    i0.ɵɵtemplate(5, AnswerSheetComponent_div_0_div_23_div_1_div_15_span_5_Template, 2, 0, "span", 167)(6, AnswerSheetComponent_div_0_div_23_div_1_div_15_span_6_Template, 2, 1, "span", 167);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 239)(8, "div", 240);
    i0.ɵɵtemplate(9, AnswerSheetComponent_div_0_div_23_div_1_div_15_div_9_Template, 5, 3, "div", 241)(10, AnswerSheetComponent_div_0_div_23_div_1_div_15_div_10_Template, 12, 0, "div", 242);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(11, AnswerSheetComponent_div_0_div_23_div_1_div_15_div_11_Template, 2, 1, "div", 243)(12, AnswerSheetComponent_div_0_div_23_div_1_div_15_div_12_Template, 3, 0, "div", 244);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.selectedFeedBackIndex == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedFeedBackIndex != "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.previousFeedBack.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedFeedBackIndex == ctx_r1.previousFeedBack.length && (ctx_r1.studentAnswer == null ? null : ctx_r1.studentAnswer.status) == "3" && (ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.version) != "V1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r31.student_answer[0] == null ? null : item_r31.student_answer[0].isSelected) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r31.student_answer[0] == null ? null : item_r31.student_answer[0].isSelected) == "");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_3_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 113);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_3_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 114);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 185)(1, "button", 186);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 187);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r66 = ctx.$implicit;
    const k_r67 = ctx.index;
    const sec_r68 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(5, _c7, option_r66.isSelected === "" ? false : option_r66.isSelected == k_r67 ? sec_r68.given_points == sec_r68.points : false, option_r66.isSelected === "" ? false : option_r66.isSelected == k_r67 ? sec_r68.given_points != sec_r68.points : false));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((k_r67 + 1 + 9).toString(36).toUpperCase());
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 3, option_r66.options), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 188)(1, "span", 189);
    i0.ɵɵtext(2, "Student Not Answered");
    i0.ɵɵelementEnd()();
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_3_div_13_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 193);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r69 = i0.ɵɵnextContext().index;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((k_r69 + 1 + 9).toString(36).toUpperCase());
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_3_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 194);
    i0.ɵɵelement(1, "span", 187);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r69 = i0.ɵɵnextContext().index;
    const sec_r68 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, sec_r68.options[k_r69].options), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_3_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 190);
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_3_div_13_button_1_Template, 2, 1, "button", 191)(2, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_3_div_13_div_2_Template, 3, 3, "div", 192);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r70 = ctx.$implicit;
    i0.ɵɵclassMap(option_r70.correctAnswer !== "" ? "mx-2 p-2 mb-2 overflow-auto row" : "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c8, option_r70.correctAnswer !== ""));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r70.correctAnswer !== "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r70.correctAnswer !== "");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 274)(1, "div", 181)(2, "label", 14)(3, "b");
    i0.ɵɵtext(4, "Your Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_3_i_5_Template, 1, 0, "i", 108)(6, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_3_i_6_Template, 1, 0, "i", 109);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_3_div_7_Template, 5, 8, "div", 182)(8, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_3_div_8_Template, 3, 0, "div", 183);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 181)(10, "label", 119)(11, "b");
    i0.ɵɵtext(12, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(13, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_3_div_13_Template, 3, 8, "div", 184);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const sec_r68 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", sec_r68.given_points == sec_r68.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r68.given_points != sec_r68.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", sec_r68.student_answer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r68.student_answer.length == 0);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", sec_r68.answer);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 113);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 114);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 188)(1, "span", 189);
    i0.ɵɵtext(2, "Student Not Answered");
    i0.ɵɵelementEnd()();
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_table_8_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 187);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r71 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r71), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_table_8_tr_7_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 207);
} if (rf & 2) {
    const l_r72 = i0.ɵɵnextContext().index;
    const k_r73 = i0.ɵɵnextContext().index;
    const ctx_r73 = i0.ɵɵnextContext(3);
    const sec_r68 = ctx_r73.$implicit;
    const j_r75 = ctx_r73.index;
    const i_r39 = i0.ɵɵnextContext(2).index;
    i0.ɵɵpropertyInterpolate3("name", "", j_r75, "choo", i_r39, "se", k_r73, "if");
    i0.ɵɵproperty("checked", sec_r68.student_answer[k_r73].isSelected == "" ? false : sec_r68.student_answer[k_r73].isSelected == l_r72.toString());
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_table_8_tr_7_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 277);
} if (rf & 2) {
    const l_r72 = i0.ɵɵnextContext().index;
    const k_r73 = i0.ɵɵnextContext().index;
    const sec_r68 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("checked", ctx_r1.splitMultiChoose(sec_r68.student_answer[k_r73].isSelected, l_r72));
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_table_8_tr_7_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_table_8_tr_7_td_3_input_1_Template, 1, 5, "input", 205)(2, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_table_8_tr_7_td_3_input_2_Template, 1, 1, "input", 276);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r68 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r68.question_type_id == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r68.question_type_id == "7");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_table_8_tr_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 187);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_table_8_tr_7_td_3_Template, 3, 2, "td", 121);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r76 = ctx.$implicit;
    const sec_r68 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, list_r76.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", sec_r68.answer);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_table_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 197)(1, "thead")(2, "tr")(3, "th");
    i0.ɵɵtext(4, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_table_8_th_5_Template, 2, 3, "th", 198);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "tbody");
    i0.ɵɵtemplate(7, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_table_8_tr_7_Template, 4, 4, "tr", 121);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const sec_r68 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", sec_r68.answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", sec_r68.student_answer);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_th_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 187);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r77 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r77), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_tr_20_td_2_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 207);
} if (rf & 2) {
    const l_r78 = i0.ɵɵnextContext().index;
    const k_r79 = i0.ɵɵnextContext().index;
    const ctx_r73 = i0.ɵɵnextContext(2);
    const sec_r68 = ctx_r73.$implicit;
    const j_r75 = ctx_r73.index;
    const i_r39 = i0.ɵɵnextContext(2).index;
    i0.ɵɵpropertyInterpolate4("name", "", i_r39, "passage", j_r75, "cho", k_r79, "ose", l_r78, "");
    i0.ɵɵproperty("checked", sec_r68.heading_option[k_r79].correctActive == l_r78);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_tr_20_td_2_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 208);
} if (rf & 2) {
    const l_r78 = i0.ɵɵnextContext().index;
    const k_r79 = i0.ɵɵnextContext().index;
    const j_r75 = i0.ɵɵnextContext(2).index;
    const i_r39 = i0.ɵɵnextContext(2).index;
    i0.ɵɵpropertyInterpolate4("id", "chooseMultipass1", i_r39, "", j_r75, "", k_r79, "", l_r78, "");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_tr_20_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_tr_20_td_2_input_1_Template, 1, 6, "input", 205)(2, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_tr_20_td_2_input_2_Template, 1, 5, "input", 206);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r68 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r68.question_type_id == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r68.question_type_id == "7");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_tr_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 187);
    i0.ɵɵtemplate(2, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_tr_20_td_2_Template, 3, 2, "td", 121);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r80 = ctx.$implicit;
    const sec_r68 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", list_r80.options, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", sec_r68.answer);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 275)(1, "div", 195)(2, "label", 14)(3, "b");
    i0.ɵɵtext(4, "Your Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_i_5_Template, 1, 0, "i", 108)(6, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_i_6_Template, 1, 0, "i", 109);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_div_7_Template, 3, 0, "div", 183)(8, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_table_8_Template, 8, 2, "table", 196);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 195)(10, "label", 119)(11, "b");
    i0.ɵɵtext(12, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "table", 197)(14, "thead")(15, "tr")(16, "th");
    i0.ɵɵtext(17, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(18, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_th_18_Template, 2, 3, "th", 198);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "tbody");
    i0.ɵɵtemplate(20, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_tr_20_Template, 3, 2, "tr", 121);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const sec_r68 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", sec_r68.given_points == sec_r68.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r68.given_points != sec_r68.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r68.student_answer.length == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r68.student_answer.length != 0);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngForOf", sec_r68.answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", sec_r68.student_answer);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_5_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 113);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_5_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 114);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_5_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 280)(1, "span", 189);
    i0.ɵɵtext(2, "Student Not Answered");
    i0.ɵɵelementEnd()();
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_5_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 234);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const data_r81 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, data_r81.isSelected), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_5_div_8_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Student Not Answered");
    i0.ɵɵelementEnd();
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_5_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 213)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 98);
    i0.ɵɵtemplate(4, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_5_div_8_div_4_Template, 2, 3, "div", 233)(5, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_5_div_8_div_5_Template, 2, 0, "div", 167);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r81 = ctx.$implicit;
    const k_r82 = ctx.index;
    const sec_r68 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Input - ", k_r82 + 1, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", sec_r68.given_points == sec_r68.points ? "form-span-correct" : "form-span-wrong");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r81.isSelected != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r81.isSelected == "");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_5_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 213)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 223);
    i0.ɵɵelement(4, "div", 234);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r83 = ctx.$implicit;
    const k_r84 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Input - ", k_r84 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, data_r83.options[0].value), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 275)(1, "div", 278)(2, "label", 14)(3, "b");
    i0.ɵɵtext(4, "Your Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_5_i_5_Template, 1, 0, "i", 108)(6, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_5_i_6_Template, 1, 0, "i", 109);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_5_div_7_Template, 3, 0, "div", 279)(8, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_5_div_8_Template, 6, 4, "div", 211);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 278)(10, "label", 119)(11, "b");
    i0.ɵɵtext(12, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(13, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_5_div_13_Template, 6, 4, "div", 211);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const sec_r68 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", sec_r68.given_points == sec_r68.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r68.given_points != sec_r68.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r68.student_answer.length == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", sec_r68.student_answer);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", sec_r68.options);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_6_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 113);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_6_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 114);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_6_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 234);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const sec_r68 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, sec_r68.student_answer[0].isSelected), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_6_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Student Not Answered");
    i0.ɵɵelementEnd();
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_6_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "label")(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 235);
    i0.ɵɵelement(5, "div", 234);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const answer_r85 = ctx.$implicit;
    const i_r86 = ctx.index;
    i0.ɵɵadvance();
    i0.ɵɵclassMap(i_r86 == 0 ? "py-1" : "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Correct Answer ", i_r86 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 5, answer_r85.correctAnswer), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 275)(1, "div", 209)(2, "label", 14)(3, "b");
    i0.ɵɵtext(4, "Your Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_6_i_5_Template, 1, 0, "i", 108)(6, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_6_i_6_Template, 1, 0, "i", 109);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 232);
    i0.ɵɵtemplate(8, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_6_div_8_Template, 2, 3, "div", 233)(9, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_6_div_9_Template, 2, 0, "div", 167);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 209);
    i0.ɵɵtemplate(11, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_6_div_11_Template, 7, 7, "div", 121);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const sec_r68 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", sec_r68.given_points == sec_r68.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r68.given_points != sec_r68.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", sec_r68.given_points == sec_r68.points ? "form-span-correct" : "form-span-wrong");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (sec_r68.student_answer[0] == null ? null : sec_r68.student_answer[0].isSelected) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (sec_r68.student_answer[0] == null ? null : sec_r68.student_answer[0].isSelected) == "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", sec_r68.answer);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_p_33_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_p_33_span_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, ", ");
    i0.ɵɵelementEnd();
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_p_33_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_p_33_span_2_span_2_Template, 2, 0, "span", 167);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const skill_r87 = ctx.$implicit;
    const last_r88 = ctx.last;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(skill_r87);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !last_r88);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_p_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_p_33_span_1_Template, 2, 0, "span", 167)(2, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_p_33_span_2_Template, 3, 2, "span", 121);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r68 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (sec_r68 == null ? null : sec_r68.skill.length) == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", sec_r68 == null ? null : sec_r68.skill);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_p_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_59_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 282)(1, "h5", 48);
    i0.ɵɵtext(2, "Your Feedback:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 283);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const sec_r68 = i0.ɵɵnextContext(2).$implicit;
    const i_r39 = i0.ɵɵnextContext(2).index;
    i0.ɵɵclassMapInterpolate1("col-md-", sec_r68.student_roughdata != "" ? "6" : "12", " px-0");
    i0.ɵɵpropertyInterpolate1("id", "studentFeedback", i_r39, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(sec_r68.student_feedback);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_59_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 282)(1, "h5");
    i0.ɵɵtext(2, "Your Workspace");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 222);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r68 = i0.ɵɵnextContext(2).$implicit;
    const i_r39 = i0.ɵɵnextContext(2).index;
    i0.ɵɵclassMapInterpolate1("col-md-", sec_r68.student_feedback != "" ? "6" : "12", " px-0");
    i0.ɵɵpropertyInterpolate1("id", "studentRoughData", i_r39, "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("font-weight-bold ml-", sec_r68.student_feedback == "" ? "0" : "3", "");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("feedback-card innerhtml-margin-clear col-md-12 ml-", sec_r68.student_feedback == "" ? "0" : "3", "");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 12, sec_r68.student_roughdata), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 80)(1, "div", 127);
    i0.ɵɵtemplate(2, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_59_div_2_Template, 5, 6, "div", 281)(3, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_59_div_3_Template, 5, 14, "div", 281);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const sec_r68 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", sec_r68.student_feedback != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r68.student_roughdata != "");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 284)(1, "div", 59)(2, "label", 48);
    i0.ɵɵtext(3, "Explanation: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 285);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const sec_r68 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 1, sec_r68.explanation), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 286)(1, "label", 48);
    i0.ɵɵtext(2, "Resource: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 285);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r68 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 1, sec_r68.resource), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 286)(1, "label");
    i0.ɵɵtext(2, "Feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "textarea", 287);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r68 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", sec_r68.feedback);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 264);
    i0.ɵɵelement(1, "div", 265);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_3_Template, 14, 5, "div", 266)(4, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_4_Template, 21, 6, "div", 267)(5, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_5_Template, 14, 5, "div", 267)(6, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_6_Template, 12, 6, "div", 267);
    i0.ɵɵelementStart(7, "div", 268)(8, "div", 269)(9, "div", 82)(10, "div", 50)(11, "div", 270)(12, "label", 271)(13, "b");
    i0.ɵɵtext(14, "Subject:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "p");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 270)(18, "label", 271)(19, "b");
    i0.ɵɵtext(20, "Topic:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "p");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 270)(24, "label", 271)(25, "b");
    i0.ɵɵtext(26, "Sub Topic:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "p");
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 270)(30, "label", 271)(31, "b");
    i0.ɵɵtext(32, "Skill:");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(33, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_p_33_Template, 3, 2, "p", 167)(34, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_p_34_Template, 2, 0, "p", 167);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "div", 270)(36, "label", 271)(37, "b");
    i0.ɵɵtext(38, "Standard:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "p");
    i0.ɵɵtext(40);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "div", 270)(42, "label", 271)(43, "b");
    i0.ɵɵtext(44, "Difficulty:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "p");
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div", 272)(48, "label", 271)(49, "b");
    i0.ɵɵtext(50, "Points:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(51, "p");
    i0.ɵɵtext(52);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(53, "div", 272)(54, "label", 271)(55, "b");
    i0.ɵɵtext(56, "Predicted Solving Time:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(57, "p");
    i0.ɵɵtext(58);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵtemplate(59, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_59_Template, 4, 2, "div", 78)(60, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_60_Template, 6, 3, "div", 273)(61, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_61_Template, 5, 3, "div", 160)(62, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_div_62_Template, 4, 1, "div", 160);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r68 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 18, sec_r68.question), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", sec_r68.question_type_id == "1" || sec_r68.question_type_id == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r68.question_type_id == "5" || sec_r68.question_type_id == "7");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r68.question_type_id == "10");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r68.question_type_id == "20");
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate((sec_r68 == null ? null : sec_r68.subject_name) ? sec_r68 == null ? null : sec_r68.subject_name : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((sec_r68 == null ? null : sec_r68.question_topic) ? sec_r68 == null ? null : sec_r68.question_topic : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((sec_r68 == null ? null : sec_r68.sub_topic) ? sec_r68 == null ? null : sec_r68.sub_topic : "-");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", sec_r68 == null ? null : sec_r68.skill);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !sec_r68.skill);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((sec_r68 == null ? null : sec_r68.question_standard_name) ? sec_r68 == null ? null : sec_r68.question_standard_name : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(sec_r68.level == "1" ? "Easy" : sec_r68.level == "2" ? "Medium" : "Difficult");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((sec_r68 == null ? null : sec_r68.points) ? sec_r68 == null ? null : sec_r68.points : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((sec_r68 == null ? null : sec_r68.predicted_solving_time) ? sec_r68 == null ? null : sec_r68.predicted_solving_time : "-");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r68.student_feedback != "" || sec_r68.student_roughdata != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r68.explanation != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r68.resource != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r68.feedback != "");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 262);
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_23_div_1_div_16_div_1_Template, 63, 20, "div", 263);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r31.subQuestions);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_17_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 113);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_17_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 114);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_17_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 234);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, item_r31.student_answer[0] == null ? null : item_r31.student_answer[0].isSelected), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_17_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 291);
    i0.ɵɵtext(1, "Student Not Answered");
    i0.ɵɵelementEnd();
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 288)(1, "div", 209)(2, "label", 14)(3, "b");
    i0.ɵɵtext(4, "Your Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AnswerSheetComponent_div_0_div_23_div_1_div_17_i_5_Template, 1, 0, "i", 108)(6, AnswerSheetComponent_div_0_div_23_div_1_div_17_i_6_Template, 1, 0, "i", 109);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 232);
    i0.ɵɵtemplate(8, AnswerSheetComponent_div_0_div_23_div_1_div_17_div_8_Template, 2, 3, "div", 233)(9, AnswerSheetComponent_div_0_div_23_div_1_div_17_div_9_Template, 2, 0, "div", 289);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 209)(11, "label", 119)(12, "b");
    i0.ɵɵtext(13, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 290);
    i0.ɵɵelement(15, "div", 234);
    i0.ɵɵpipe(16, "sanitizeHtml");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r31.given_points == item_r31.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.given_points != item_r31.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", item_r31.given_points == item_r31.points ? "form-span-correct" : "form-span-wrong");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r31.student_answer[0] == null ? null : item_r31.student_answer[0].isSelected) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r31.student_answer[0] == null ? null : item_r31.student_answer[0].isSelected) == "");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(16, 6, item_r31.answer[0] == null ? null : item_r31.answer[0].correctAnswer), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_18_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 113);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_18_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 114);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_18_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 286)(1, "div", 293);
    i0.ɵɵelement(2, "div", 222);
    i0.ɵɵpipe(3, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", item_r31.given_points == item_r31.points ? "form-span-correct" : "form-span-wrong");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(3, 2, item_r31.student_editor_answer), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_18_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 286)(1, "div", 294);
    i0.ɵɵelement(2, "div", 222);
    i0.ɵɵpipe(3, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(3, 1, item_r31.question_editor_answer), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 220)(1, "div", 209)(2, "label", 14)(3, "b");
    i0.ɵɵtext(4, "Your Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AnswerSheetComponent_div_0_div_23_div_1_div_18_i_5_Template, 1, 0, "i", 108)(6, AnswerSheetComponent_div_0_div_23_div_1_div_18_i_6_Template, 1, 0, "i", 109);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 292);
    i0.ɵɵelement(8, "app-graph-component", 138);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, AnswerSheetComponent_div_0_div_23_div_1_div_18_div_9_Template, 4, 4, "div", 160);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 209)(11, "label", 119)(12, "b");
    i0.ɵɵtext(13, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 292);
    i0.ɵɵelement(15, "app-graph-component", 138);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, AnswerSheetComponent_div_0_div_23_div_1_div_18_div_16_Template, 4, 3, "div", 160);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const item_r31 = ctx_r45.$implicit;
    const i_r39 = ctx_r45.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r31.given_points == item_r31.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.given_points != item_r31.points);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("editMode", false)("editPatchValue", item_r31.student_answer.length == 0 ? false : ctx_r1.parseVal(item_r31.student_answer[0].correctAnswer))("graphId", "graphAnsweringY" + i_r39)("questionType", item_r31.question_type_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.student_editor_answer != "");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("editMode", false)("editPatchValue", item_r31.answer.length == 0 ? false : ctx_r1.parseVal(item_r31.answer[0].correctAnswer))("graphId", "graphAnsweringR" + i_r39)("questionType", item_r31.question_type_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question_editor_answer != "");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_19_p_26_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_19_p_26_span_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, ", ");
    i0.ɵɵelementEnd();
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_19_p_26_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, AnswerSheetComponent_div_0_div_23_div_1_div_19_p_26_span_2_span_2_Template, 2, 0, "span", 167);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const skill_r89 = ctx.$implicit;
    const last_r90 = ctx.last;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(skill_r89);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !last_r90);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_19_p_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_23_div_1_div_19_p_26_span_1_Template, 2, 0, "span", 167)(2, AnswerSheetComponent_div_0_div_23_div_1_div_19_p_26_span_2_Template, 3, 2, "span", 121);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r31 == null ? null : item_r31.skill.length) == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r31 == null ? null : item_r31.skill);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_19_p_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 268)(1, "div", 269)(2, "div", 82)(3, "div", 50)(4, "div", 270)(5, "label", 271)(6, "b");
    i0.ɵɵtext(7, "Subject:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 270)(11, "label", 271)(12, "b");
    i0.ɵɵtext(13, "Topic:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "p");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 270)(17, "label", 271)(18, "b");
    i0.ɵɵtext(19, "Sub Topic:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "p");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 270)(23, "label", 271)(24, "b");
    i0.ɵɵtext(25, "Skill:");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(26, AnswerSheetComponent_div_0_div_23_div_1_div_19_p_26_Template, 3, 2, "p", 167)(27, AnswerSheetComponent_div_0_div_23_div_1_div_19_p_27_Template, 2, 0, "p", 167);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 270)(29, "label", 271)(30, "b");
    i0.ɵɵtext(31, "Standard:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "p");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 270)(35, "label", 271)(36, "b");
    i0.ɵɵtext(37, "Difficulty:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "p");
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "div", 272)(41, "label", 271)(42, "b");
    i0.ɵɵtext(43, "Points:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "p");
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(46, "div", 272)(47, "label", 271)(48, "b");
    i0.ɵɵtext(49, "Predicted Solving Time:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(50, "p");
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate((item_r31 == null ? null : item_r31.subject_name) ? item_r31 == null ? null : item_r31.subject_name : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r31 == null ? null : item_r31.question_topic) ? item_r31 == null ? null : item_r31.question_topic : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r31 == null ? null : item_r31.sub_topic) ? item_r31 == null ? null : item_r31.sub_topic : "-");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r31 == null ? null : item_r31.skill);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !item_r31.skill);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r31 == null ? null : item_r31.question_standard_name) ? item_r31 == null ? null : item_r31.question_standard_name : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(item_r31.level == "1" ? "Easy" : item_r31.level == "2" ? "Medium" : "Difficult");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r31 == null ? null : item_r31.points) ? item_r31 == null ? null : item_r31.points : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r31 == null ? null : item_r31.predicted_solving_time) ? item_r31 == null ? null : item_r31.predicted_solving_time : "-");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 282)(1, "h5", 48);
    i0.ɵɵtext(2, "Your Feedback:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 283);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext(2);
    const item_r31 = ctx_r45.$implicit;
    const i_r39 = ctx_r45.index;
    i0.ɵɵclassMapInterpolate1("col-md-", item_r31.student_roughdata != "" ? "6" : "12", " px-0");
    i0.ɵɵpropertyInterpolate1("id", "studentFeedback", i_r39, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r31.student_feedback);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_20_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 296)(1, "div", 297)(2, "h5", 298);
    i0.ɵɵtext(3, "Cited Source");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 299);
    i0.ɵɵelement(5, "div", 300);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵclassMapInterpolate1("feedback-card innerhtml-margin-clear col-md-12 ml-", item_r31.question_type_id == "55" || item_r31.student_feedback == "" ? "0" : "3", "");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 4, item_r31.student_roughdata), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_20_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h5");
    i0.ɵɵtext(2, "Student Workspace:");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 222);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("font-weight-bold editor_bullet ml-", item_r31.student_feedback == "" ? "0" : "3", "");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("feedback-card innerhtml-margin-clear col-md-12 ml-", item_r31.student_feedback == "" ? "0" : "3", "");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 7, item_r31.student_roughdata), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_20_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 282);
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_23_div_1_div_20_div_3_div_1_Template, 7, 6, "div", 295)(2, AnswerSheetComponent_div_0_div_23_div_1_div_20_div_3_div_2_Template, 5, 9, "div", 167);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext(2);
    const item_r31 = ctx_r45.$implicit;
    const i_r39 = ctx_r45.index;
    i0.ɵɵclassMapInterpolate1("col-md-", item_r31.question_type_id == "55" ? "12" : item_r31.student_feedback != "" ? "6" : "12", " px-0");
    i0.ɵɵpropertyInterpolate1("id", "studentRoughData", i_r39, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question_type_id == "55");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question_type_id != "55");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 80)(1, "div");
    i0.ɵɵtemplate(2, AnswerSheetComponent_div_0_div_23_div_1_div_20_div_2_Template, 5, 6, "div", 281)(3, AnswerSheetComponent_div_0_div_23_div_1_div_20_div_3_Template, 3, 7, "div", 281);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("row mt-3 ", item_r31.question_type_id == "55" ? "px-0" : "px-3", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.student_feedback != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.student_roughdata != "");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_21_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 92)(1, "label", 48);
    i0.ɵɵtext(2, "Explanation: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 285);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 1, item_r31.explanation), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_21_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 286)(1, "label", 48);
    i0.ɵɵtext(2, "Resource: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 285);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 1, item_r31.resource), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 141)(1, "div", 50);
    i0.ɵɵtemplate(2, AnswerSheetComponent_div_0_div_23_div_1_div_21_div_2_Template, 5, 3, "div", 301)(3, AnswerSheetComponent_div_0_div_23_div_1_div_21_div_3_Template, 5, 3, "div", 160);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r31.explanation != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.resource != "");
} }
function AnswerSheetComponent_div_0_div_23_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 286)(1, "label", 48);
    i0.ɵɵtext(2, "Feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "textarea", 287);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r31 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", item_r31.feedback);
} }
function AnswerSheetComponent_div_0_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 77)(1, "div", 4)(2, "div", 151);
    i0.ɵɵtemplate(3, AnswerSheetComponent_div_0_div_23_div_1_div_3_Template, 20, 7, "div", 152);
    i0.ɵɵelementStart(4, "div", 92)(5, "div");
    i0.ɵɵtemplate(6, AnswerSheetComponent_div_0_div_23_div_1_div_6_Template, 2, 3, "div", 153)(7, AnswerSheetComponent_div_0_div_23_div_1_div_7_Template, 1, 1, "div", 153)(8, AnswerSheetComponent_div_0_div_23_div_1_div_8_Template, 2, 3, "div", 153);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, AnswerSheetComponent_div_0_div_23_div_1_div_9_Template, 14, 5, "div", 154)(10, AnswerSheetComponent_div_0_div_23_div_1_div_10_Template, 21, 6, "div", 154)(11, AnswerSheetComponent_div_0_div_23_div_1_div_11_Template, 14, 5, "div", 154)(12, AnswerSheetComponent_div_0_div_23_div_1_div_12_Template, 13, 4, "div", 155)(13, AnswerSheetComponent_div_0_div_23_div_1_div_13_Template, 15, 5, "div", 155)(14, AnswerSheetComponent_div_0_div_23_div_1_div_14_Template, 12, 6, "div", 155)(15, AnswerSheetComponent_div_0_div_23_div_1_div_15_Template, 13, 6, "div", 156)(16, AnswerSheetComponent_div_0_div_23_div_1_div_16_Template, 2, 1, "div", 157)(17, AnswerSheetComponent_div_0_div_23_div_1_div_17_Template, 17, 8, "div", 158)(18, AnswerSheetComponent_div_0_div_23_div_1_div_18_Template, 17, 12, "div", 155)(19, AnswerSheetComponent_div_0_div_23_div_1_div_19_Template, 52, 9, "div", 159)(20, AnswerSheetComponent_div_0_div_23_div_1_div_20_Template, 4, 5, "div", 78)(21, AnswerSheetComponent_div_0_div_23_div_1_div_21_Template, 4, 2, "div", 139)(22, AnswerSheetComponent_div_0_div_23_div_1_div_22_Template, 4, 1, "div", 160);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 161)(24, "div", 162)(25, "span", 163);
    i0.ɵɵtext(26, "No Incorrect Answer Available!");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMap(ctx_r1.isSingleQnsWithFeedbackType && ctx_r1.previousFeedBack.length != 0 ? "col-md-6 pr-0 content-card" : "col-md-12");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(27, _c5, ctx_r1.totalFeedbackMaxHeight));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("hidden", !item_r31.isShow);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(ctx_r1.totalAns.length == 1 && item_r31.question_type_id == 55));
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("mt-", ctx_r1.totalAns.length == 1 && item_r31.question_type_id == 55 ? "1" : "4", " mb-2 editor_bullet");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question != "" && item_r31.question_type_id != 24 && item_r31.question_type_id != 55);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question != "" && item_r31.question_type_id == 55);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question != "" && item_r31.question_type_id == 24);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question_type_id == 1 || item_r31.question_type_id == 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question_type_id == 5 || item_r31.question_type_id == 7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question_type_id == 9);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question_type_id == 10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question_type_id == 16);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question_type_id == 20);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(29, _c6).indexOf(item_r31.question_type_id) > -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question_type_id == 24);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question_type_id == 28);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question_type_id == 40 || item_r31.question_type_id == 41);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question_type_id != 24 && item_r31.question_type_id != "55");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r31.student_feedback != "" || item_r31.student_roughdata != "") && item_r31.question_type_id != "24");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question_type_id != 24 && (item_r31.explanation != "" || item_r31.resource != ""));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r31.question_type_id != 24 && item_r31.feedback != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", item_r31.isShow);
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 310)(1, "div", 296)(2, "div", 297)(3, "h5", 311);
    i0.ɵɵtext(4, "Your Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 312);
    i0.ɵɵelement(6, "span", 313);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("innerHTML", ctx_r1.convertedText && ctx_r1.convertedText != "" ? ctx_r1.convertMarkdownToHtml(ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.student_answer) : ctx_r1.convertMarkdownToHtml(ctx_r1.totalAns[0] == null ? null : ctx_r1.totalAns[0].student_answer[0] == null ? null : ctx_r1.totalAns[0].student_answer[0].isSelected, "single"), i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 310)(1, "div", 296)(2, "div", 297)(3, "h5", 317);
    i0.ɵɵtext(4, "Teacher FeedBack");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 312)(6, "span", 318);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.studentAnswer == null ? null : ctx_r1.studentAnswer.feedback);
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 319);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("innerHTML", ctx_r1.convertedText, i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_34_h5_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" (", i0.ɵɵpipeBind1(2, 2, ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.created_date), " | ", i0.ɵɵpipeBind2(3, 4, ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.created_date, "h:mm a"), ") ");
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_34_h5_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 48);
    i0.ɵɵtext(1, "Final Feedback");
    i0.ɵɵtemplate(2, AnswerSheetComponent_div_0_div_23_div_2_div_34_h5_1_span_2_Template, 4, 7, "span", 167);
    i0.ɵɵtext(3, ": ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.created_date);
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_34_h5_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" (", i0.ɵɵpipeBind1(2, 2, ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.created_date), " | ", i0.ɵɵpipeBind2(3, 4, ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.created_date, "h:mm a"), ") ");
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_34_h5_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 48);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, AnswerSheetComponent_div_0_div_23_div_2_div_34_h5_2_span_2_Template, 4, 7, "span", 167);
    i0.ɵɵtext(3, ": ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Feedback For Version ", ctx_r1.selectedFeedBackIndex, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.created_date);
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_34_div_3_span_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 338);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ctx_r1.previousFeedBack[(ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.index) + 1].student_score, " / ", ctx_r1.previousFeedBack[(ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.index) + 1].total_score, " ");
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_34_div_3_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " - ");
    i0.ɵɵelementEnd();
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_34_div_3_div_23_div_1_h5_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 340);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r91 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(value_r91);
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_34_div_3_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "label", 48);
    i0.ɵɵtext(2, "Strengths: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, AnswerSheetComponent_div_0_div_23_div_2_div_34_div_3_div_23_div_1_h5_3_Template, 2, 1, "h5", 339);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.selectedPreviousStudentAnswer.strengths);
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_34_div_3_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 268);
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_23_div_2_div_34_div_3_div_23_div_1_Template, 4, 1, "div", 167);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedPreviousStudentAnswer.strengths.length != 0);
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_34_div_3_div_24_div_1_h5_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 343);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r92 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(value_r92);
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_34_div_3_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "label", 48);
    i0.ɵɵtext(2, "Top Opportunities: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, AnswerSheetComponent_div_0_div_23_div_2_div_34_div_3_div_24_div_1_h5_3_Template, 2, 1, "h5", 342);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.selectedPreviousStudentAnswer.top_opportunities);
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_34_div_3_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 341);
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_23_div_2_div_34_div_3_div_24_div_1_Template, 4, 1, "div", 167);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedPreviousStudentAnswer.top_opportunities.length != 0);
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_34_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 328)(1, "div", 296)(2, "div", 297)(3, "h5", 323);
    i0.ɵɵtext(4, "Score Chart");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 324)(6, "div", 329)(7, "div", 330)(8, "div", 331)(9, "h5", 48);
    i0.ɵɵtext(10, "Feedback Score");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p", 332)(12, "span");
    i0.ɵɵtext(13, "Current Version : ");
    i0.ɵɵelementStart(14, "span", 333);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "span", 47);
    i0.ɵɵtext(17, "Previous Version :");
    i0.ɵɵtemplate(18, AnswerSheetComponent_div_0_div_23_div_2_div_34_div_3_span_18_Template, 2, 2, "span", 334)(19, AnswerSheetComponent_div_0_div_23_div_2_div_34_div_3_span_19_Template, 2, 0, "span", 167);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(20, "div", 224)(21, "div", 335);
    i0.ɵɵelement(22, "apx-chart", 336);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(23, AnswerSheetComponent_div_0_div_23_div_2_div_34_div_3_div_23_Template, 2, 1, "div", 159)(24, AnswerSheetComponent_div_0_div_23_div_2_div_34_div_3_div_24_Template, 2, 1, "div", 337);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
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
function AnswerSheetComponent_div_0_div_23_div_2_div_34_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 344);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("innerHTML", ctx_r1.convertedText, i0.ɵɵsanitizeHtml);
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_34_div_11_div_11_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "strong", 359);
    i0.ɵɵtext(2, "Rationale:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const feedback_r94 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMapInterpolate1("rationale_design col-12 px-0 ", (feedback_r94[1] == null ? null : feedback_r94[1].feedback.length) == 0 ? "mb-0" : "", "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", feedback_r94[1] == null ? null : feedback_r94[1].rationale, " ");
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_34_div_11_div_11_div_11_label_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 366);
    i0.ɵɵtext(1, "Why: ");
    i0.ɵɵelementStart(2, "span", 364);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const value_r95 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(value_r95.why);
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_34_div_11_div_11_div_11_label_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 366);
    i0.ɵɵtext(1, "Example: ");
    i0.ɵɵelementStart(2, "span", 367);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const value_r95 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(value_r95.example_rewrite);
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_34_div_11_div_11_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 360)(2, "h5", 361);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 362)(5, "label", 363);
    i0.ɵɵtext(6, "Suggestion: ");
    i0.ɵɵelementStart(7, "span", 364);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, AnswerSheetComponent_div_0_div_23_div_2_div_34_div_11_div_11_div_11_label_9_Template, 4, 1, "label", 365)(10, AnswerSheetComponent_div_0_div_23_div_2_div_34_div_11_div_11_div_11_label_10_Template, 4, 1, "label", 365);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const value_r95 = ctx.$implicit;
    const lastValue_r96 = ctx.last;
    i0.ɵɵclassMapInterpolate1("col-md-12 ", lastValue_r96 ? "" : "mb-2", "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", value_r95.snippet, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(value_r95.suggestion);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", value_r95 == null ? null : value_r95.why);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", value_r95 == null ? null : value_r95.example_rewrite);
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_34_div_11_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r93 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 353);
    i0.ɵɵlistener("click", function AnswerSheetComponent_div_0_div_23_div_2_div_34_div_11_div_11_Template_div_click_0_listener() { const feedback_r94 = i0.ɵɵrestoreView(_r93).$implicit; return i0.ɵɵresetView(feedback_r94.collaspsed = !feedback_r94.collaspsed); });
    i0.ɵɵelementStart(1, "div", 354)(2, "span", 355);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 14)(5, "span", 356);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "i", 357);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 358);
    i0.ɵɵtemplate(9, AnswerSheetComponent_div_0_div_23_div_2_div_34_div_11_div_11_div_9_Template, 4, 4, "div", 51);
    i0.ɵɵelementStart(10, "div", 50);
    i0.ɵɵtemplate(11, AnswerSheetComponent_div_0_div_23_div_2_div_34_div_11_div_11_div_11_Template, 11, 7, "div", 106);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_13_0;
    const feedback_r94 = ctx.$implicit;
    const last_r97 = ctx.last;
    const first_r98 = ctx.first;
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngClass", last_r97 ? "feedback-panel_last" : first_r98 ? "feedback-panel_first" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", !feedback_r94.collaspsed ? "open" : "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_13_0 = ctx_r1.getValue(feedback_r94[0])) !== null && tmp_13_0 !== undefined ? tmp_13_0 : "-");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" Score: ", feedback_r94[1] == null ? null : feedback_r94[1].score, " / ", ctx_r1.totalIndivialScore, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", feedback_r94.collaspsed ? "fa-chevron-down" : "fa-chevron-up");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngbCollapse", feedback_r94.collaspsed);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", feedback_r94[1] == null ? null : feedback_r94[1].rationale);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", feedback_r94[1] == null ? null : feedback_r94[1].feedback);
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_34_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 345)(1, "div", 346)(2, "div", 224)(3, "h5", 347);
    i0.ɵɵtext(4, "Total Score");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 50)(6, "div", 348)(7, "div", 349);
    i0.ɵɵelement(8, "div", 350);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "span", 351);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(11, AnswerSheetComponent_div_0_div_23_div_2_div_34_div_11_div_11_Template, 12, 9, "div", 352);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(8);
    i0.ɵɵstyleProp("width", ctx_r1.scorePercentage, "%");
    i0.ɵɵattribute("aria-valuenow", ctx_r1.score)("aria-valuemin", 0)("aria-valuemax", ctx_r1.totalScore);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.student_score, " / ", ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.total_score, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.feedbackList);
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_34_div_12_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 369);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 77)(4, "label", 370);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "label", 371);
    i0.ɵɵtext(7, "Example: ");
    i0.ɵɵelementStart(8, "span", 372);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_13_0;
    let tmp_15_0;
    const data_r99 = ctx.$implicit;
    const i_r100 = ctx.index;
    const last_r101 = ctx.last;
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵclassMapInterpolate1("col-12 row ", !last_r101 ? "mb-2" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(8, _c11, ctx_r1.env.deviceType() ? "7%" : "6%"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", (tmp_13_0 = data_r99 == null ? null : data_r99.priority) !== null && tmp_13_0 !== undefined ? tmp_13_0 : i_r100, ".");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(10, _c11, ctx_r1.env.deviceType() ? "93%" : "94%"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_15_0 = data_r99 == null ? null : data_r99.action) !== null && tmp_15_0 !== undefined ? tmp_15_0 : "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(data_r99.example_rewrite);
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_34_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 322)(1, "div", 296)(2, "div", 297)(3, "h5", 323);
    i0.ɵɵtext(4, "Next Edit Plan");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 368);
    i0.ɵɵtemplate(6, AnswerSheetComponent_div_0_div_23_div_2_div_34_div_12_div_6_Template, 10, 12, "div", 106);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r1.selectedPreviousStudentAnswer.next_edit_plan);
} }
function AnswerSheetComponent_div_0_div_23_div_2_div_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 224);
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_23_div_2_div_34_h5_1_Template, 4, 1, "h5", 320)(2, AnswerSheetComponent_div_0_div_23_div_2_div_34_h5_2_Template, 4, 2, "h5", 320)(3, AnswerSheetComponent_div_0_div_23_div_2_div_34_div_3_Template, 25, 13, "div", 321);
    i0.ɵɵelementStart(4, "div", 322)(5, "div", 296)(6, "div", 297)(7, "h5", 323);
    i0.ɵɵtext(8, "Trait Analysis");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 324);
    i0.ɵɵtemplate(10, AnswerSheetComponent_div_0_div_23_div_2_div_34_div_10_Template, 1, 1, "div", 325)(11, AnswerSheetComponent_div_0_div_23_div_2_div_34_div_11_Template, 12, 8, "div", 326);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(12, AnswerSheetComponent_div_0_div_23_div_2_div_34_div_12_Template, 7, 1, "div", 327);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
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
function AnswerSheetComponent_div_0_div_23_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 302)(1, "div", 303)(2, "div", 296)(3, "div", 304)(4, "div", 50)(5, "div", 305)(6, "h5")(7, "span", 306);
    i0.ɵɵtext(8, "Student Name: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 307);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "h5", 308)(12, "span", 306);
    i0.ɵɵtext(13, "Class: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span", 307);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 309)(17, "h5", 308)(18, "span", 306);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "span", 307);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(22, " \u00A0 \u00A0 ");
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(23, "div", 310)(24, "div", 296)(25, "div", 297)(26, "h5", 311);
    i0.ɵɵtext(27, "Essay Prompt");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 312);
    i0.ɵɵelement(29, "span", 313);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(30, AnswerSheetComponent_div_0_div_23_div_2_div_30_Template, 7, 1, "div", 314)(31, AnswerSheetComponent_div_0_div_23_div_2_div_31_Template, 8, 1, "div", 314);
    i0.ɵɵelementStart(32, "div", 315);
    i0.ɵɵtemplate(33, AnswerSheetComponent_div_0_div_23_div_2_div_33_Template, 1, 1, "div", 316)(34, AnswerSheetComponent_div_0_div_23_div_2_div_34_Template, 13, 6, "div", 150);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(10, _c5, ctx_r1.totalFeedbackMaxHeight));
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r1.studentAnswer.student_name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate((tmp_7_0 = ctx_r1.studentAnswer.class_name) !== null && tmp_7_0 !== undefined ? tmp_7_0 : "-");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r1.contentType, ": ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.contentName);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("innerHTML", ctx_r1.convertMarkdownToHtml(ctx_r1.totalAns[0] == null ? null : ctx_r1.totalAns[0].question, "single"), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.totalAns[0] == null ? null : ctx_r1.totalAns[0].student_answer[0] == null ? null : ctx_r1.totalAns[0].student_answer[0].isSelected) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.studentAnswer == null ? null : ctx_r1.studentAnswer.feedback) != "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.version) == "V1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.version) != "V1");
} }
function AnswerSheetComponent_div_0_div_23_div_3_div_7_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " - ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r102 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Version ", data_r102.version, "");
} }
function AnswerSheetComponent_div_0_div_23_div_3_div_7_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r102 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, data_r102.created_date, "medium"));
} }
function AnswerSheetComponent_div_0_div_23_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 377)(1, "div")(2, "h5", 10);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 378);
    i0.ɵɵtemplate(5, AnswerSheetComponent_div_0_div_23_div_3_div_7_span_5_Template, 4, 1, "span", 167)(6, AnswerSheetComponent_div_0_div_23_div_3_div_7_span_6_Template, 3, 4, "span", 167);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const data_r102 = ctx.$implicit;
    const last_r103 = ctx.last;
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-12 card class-card1 py-2 ", last_r103 ? "mb-0" : "mb-3", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r102.feedback);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", data_r102.version != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r102.created_date != "");
} }
function AnswerSheetComponent_div_0_div_23_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 224)(1, "div", 373)(2, "div", 374)(3, "div", 297)(4, "h5", 298);
    i0.ɵɵtext(5, "Overall FeedBack");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 375);
    i0.ɵɵtemplate(7, AnswerSheetComponent_div_0_div_23_div_3_div_7_Template, 7, 6, "div", 376);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r1.feedbackListData);
} }
function AnswerSheetComponent_div_0_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 147);
    i0.ɵɵlistener("keypress", function AnswerSheetComponent_div_0_div_23_Template_div_keypress_0_listener($event) { i0.ɵɵrestoreView(_r30); return i0.ɵɵresetView($event.preventDefault()); });
    i0.ɵɵtemplate(1, AnswerSheetComponent_div_0_div_23_div_1_Template, 27, 30, "div", 148)(2, AnswerSheetComponent_div_0_div_23_div_2_Template, 35, 12, "div", 149)(3, AnswerSheetComponent_div_0_div_23_div_3_Template, 8, 1, "div", 150);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("row mt-", ctx_r1.totalAns.length == 1 && (ctx_r1.totalAns[0] == null ? null : ctx_r1.totalAns[0].question_type_id) == 55 ? "0" : "3", " view-question");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.totalAns);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isSingleQnsWithFeedbackType && ctx_r1.previousFeedBack.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.feedbackListData.length != 0);
} }
function AnswerSheetComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div")(4, "h4", 6);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div");
    i0.ɵɵtemplate(7, AnswerSheetComponent_div_0_div_7_Template, 3, 3, "div", 7);
    i0.ɵɵelementStart(8, "div")(9, "div", 8)(10, "h5", 9);
    i0.ɵɵtext(11, "Total Score: ");
    i0.ɵɵelementStart(12, "span", 10);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(14, AnswerSheetComponent_div_0_div_14_Template, 14, 4, "div", 11)(15, AnswerSheetComponent_div_0_select_15_Template, 4, 1, "select", 12)(16, AnswerSheetComponent_div_0_select_16_Template, 7, 1, "select", 13)(17, AnswerSheetComponent_div_0_select_17_Template, 7, 0, "select", 12);
    i0.ɵɵelementStart(18, "div", 14);
    i0.ɵɵtemplate(19, AnswerSheetComponent_div_0_button_19_Template, 2, 3, "button", 15);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(20, AnswerSheetComponent_div_0_div_20_Template, 4, 0, "div", 16);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(21, AnswerSheetComponent_div_0_div_21_Template, 7, 1, "div", 17)(22, AnswerSheetComponent_div_0_div_22_Template, 4, 2, "div", 17)(23, AnswerSheetComponent_div_0_div_23_Template, 4, 6, "div", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵclassMapInterpolate1("col-md-", (ctx_r1.scoreData == null ? null : ctx_r1.scoreData.is_test) == 1 || ctx_r1.studentAnswer.downloadPDF.length != 0 ? "5" : "6", " d-flex align-items-center");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.contentName == "" ? "-" : ctx_r1.contentName);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-md-", (ctx_r1.scoreData == null ? null : ctx_r1.scoreData.is_test) == 1 || ctx_r1.studentAnswer.downloadPDF.length != 0 ? "7" : "6", " d-flex justify-content-end align-items-center");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.scoreData == null ? null : ctx_r1.scoreData.is_test) == 1);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("d-flex px-0 mr-3 col-", ctx_r1.env.deviceType() ? "5" : (ctx_r1.scoreData == null ? null : ctx_r1.scoreData.is_test) == 1 || ctx_r1.studentAnswer.downloadPDF.length != 0 ? "3" : "4", " justify-content-end");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("", ctx_r1.studentAnswer.earned_points, " / ", ctx_r1.studentAnswer.points, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.correctPdfPath.length == 0 && ctx_r1.showTimer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.uploadAnswerPath.length != 0 && ctx_r1.correctPdfPath.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.correctPdfPath.length != 0 && (!ctx_r1.questionEmpty || !ctx_r1.hideAnswer));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.correctPdfPath.length != 0 && (!ctx_r1.questionEmpty || !ctx_r1.hideAnswer));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.backStatus);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentAnswer.downloadPDF.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentAnswer.feedback != "" && ctx_r1.correctPdfPath.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.correctPdfPath.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.correctPdfPath.length == 0);
} }
function AnswerSheetComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r104 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 379);
    i0.ɵɵtext(1, " \u00A0,");
    i0.ɵɵelementStart(2, "h4", 308);
    i0.ɵɵtext(3, "Work Area");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "i", 380);
    i0.ɵɵlistener("click", function AnswerSheetComponent_ng_template_1_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r104); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 381)(6, "div", 3)(7, "div");
    i0.ɵɵelement(8, "app-annotation", 382);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("getAnnotate", ctx_r1.workAnnotate)("id", "workAreaAns")("pdfPath", ctx_r1.workAnnotatePDF)("toolHide", true)("userType", "teacher");
} }
function AnswerSheetComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r105 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 379)(1, "h4", 383);
    i0.ɵɵtext(2, "Overall Feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 380);
    i0.ɵɵlistener("click", function AnswerSheetComponent_ng_template_3_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r105); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeOverAllFeedback("of")); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 384)(5, "div", 3)(6, "div", 385)(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.studentAnswer.feedback);
} }
export class AnswerSheetComponent {
    constructor(config, confi, sanitizer, teacher, student, modalService, auth, commondata, navServices, common, route, env, validationService, toastr, creator, content) {
        this.config = config;
        this.confi = confi;
        this.sanitizer = sanitizer;
        this.teacher = teacher;
        this.student = student;
        this.modalService = modalService;
        this.auth = auth;
        this.commondata = commondata;
        this.navServices = navServices;
        this.common = common;
        this.route = route;
        this.env = env;
        this.validationService = validationService;
        this.toastr = toastr;
        this.creator = creator;
        this.content = content;
        this.is_test = '0';
        this.studentName = new EventEmitter();
        this.contentTimeTaken = 0;
        this.totalAns = [];
        this.functionCalled = false;
        this.questionEmpty = false;
        this.hideAnswer = false;
        this.mathDelayer = false;
        this.isPdfAvailable = true;
        this.blink = true;
        this.areaInfo = [];
        this.sheetInfo = [];
        this.dragQuestion = [];
        this.workAnnotate = [];
        this.totalSheetInfo = [];
        this.workAnnotatePage = 0;
        this.sheetIndex = 0;
        this.correctPdfPath = [];
        this.showPDF = false;
        this.showQuestion = false;
        this.contentType = '';
        this.selectedFeedBackIndex = '';
        this.previousFeedBack = [];
        this.listPassageDetails = [];
        this.testContentDetail = [];
        this.contentName = '';
        this.feedbackList = [];
        this.totalIndivialScore = 5;
        this.totalScore = 0;
        this.score = 0;
        this.totalFeedBackCount = 0;
        this.feedbackListData = [];
        this.selectedVersion = 0;
        this.totalFeedbackMaxHeight = 'auto';
        this.backStatus = true;
        this.scoreData = JSON.parse(this.auth.getSessionData('student-card'));
        this.contentType = this.auth.getSessionData('ContentType');
        console.log(this.contentType, 'contentyPe');
        this.webhost = this.confi.getimgUrl();
        this.showpdf = true;
        this.buttonName = 'Question pdf';
        this.AnswerType = 'Hide answer';
        this.showingType = 1;
        this.creator.changeViewList(true);
    }
    ngOnDestroy() {
        this.creator.changeViewList(false);
    }
    onResize() {
        this.updateContentHeight();
    }
    ngOnInit() {
        this.passageList();
        this.studentId = this.auth.getUserId();
        if (this.answerShow) {
            this.scoreData = {
                content_id: this.contentId,
                content_format: this.contentFormat,
                class_id: this.classId,
                student_content_id: this.studentContentId,
                is_test: this.is_test
            };
            this.studentId = this.studentReportId;
            this.backStatus = this.backStatus;
        }
        if (this.scoreData?.is_test == 1) {
            this.testDetails();
        }
        else {
            this.studentsAnswerList(this.scoreData);
        }
    }
    passageList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: this.scoreData?.content_id ?? ''
        };
        this.content.passageAllService(data, 'list').subscribe((successData) => {
            this.passageListSuccess(successData);
        }, (error) => {
            console.error(error, 'error');
        });
    }
    passageListSuccess(successData) {
        this.listPassageDetails = successData.IsSuccess ? successData.ResponseObject : [];
        if (this.listPassageDetails.length != 0) {
            for (let i = 0; i < this.totalAns.length; i++) {
                if (this.totalAns[i].question_type_id == '24') {
                    for (let j = 0; j < this.totalAns[i].subQuestions.length; j++) {
                        const findIndex = this.listPassageDetails.length != 0 ?
                            this.listPassageDetails.findIndex(value => value.passage_id == this.totalAns[i].subQuestions[j]?.passage_id) : '';
                        this.totalAns[i].subQuestions[j].passage = findIndex != '' ? this.listPassageDetails[findIndex].passage : this.totalAns[i].subQuestions[j].passage;
                    }
                    console.log(this.totalAns[i].subQuestions, 'subQuestions');
                }
            }
            console.log(this.listPassageDetails, 'listPassageDetails');
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
        if (markdown) {
            markdown = markdown.replace(/^'+|'+$/g, '');
            let html = markdown.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
            html = html.replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
            return this.sanitizer.bypassSecurityTrustHtml(html);
        }
        else {
            return '-';
        }
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
            if (this.previousFeedBack.length != 0) {
                this.selectedFeedBackIndex = this.previousFeedBack.length - this.previousFeedBack[0]?.index;
                this.selectedPreviousStudentAnswer = this.previousFeedBack[0];
                this.selectedVersion = 0;
                if (this.selectedPreviousStudentAnswer.version != 'V1') {
                    this.convertedText = this.previousFeedBack[0]?.feedback;
                    this.updateFeedback();
                }
                else {
                    this.convertedText = this.convertMarkdownToHtml(this.previousFeedBack[0]?.feedback);
                }
            }
            this.updateContentHeight();
        }
    }
    showOverallFeedback() {
        this.modalRef = this.modalService.open(this.overallFeedback, { size: 'xl', backdrop: 'static' });
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
    showPDFOrQns() {
        if (!this.showPDF) {
            this.showPDF = true;
            this.showQuestion = false;
        }
    }
    splitMultiChoose(val, index) {
        const value = val.split(',');
        for (let i = 0; i < value.length; i++) {
            if (parseInt(value[i]) === parseInt(index)) {
                return true;
            }
        }
    }
    selectAnswerSheet(index) {
        this.blink = false;
        this.sheetIndex = index;
        this.answerSheetPath = this.webhost + '/' + this.uploadAnswerPath[index]?.original_image_url;
        this.sheetInfo = [...this.totalSheetInfo[index]];
        this.showType('2');
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
    showType(id) {
        this.showingType = id;
        if (id == '1') {
            this.buttonName = 'Question pdf';
        }
        else if (id == '2') {
            this.buttonName = 'Answer sheet';
            setTimeout(() => {
                this.blink = true;
            }, 1000);
        }
        else if (id == '3') {
            this.buttonName = 'Show answer';
        }
    }
    HideAnswer() {
        this.hideAnswer = !this.hideAnswer;
        if (this.hideAnswer) {
            console.log('in');
            this.AnswerType = 'Show answer';
        }
        else if (!this.hideAnswer) {
            this.AnswerType = 'Hide answer';
        }
    }
    back() {
        if (this.scoreData.content_type == '2') {
            this.route.navigate(['/studentlogin/assignment']);
        }
        else if (this.scoreData.content_type == '3') {
            this.route.navigate(['/studentlogin/assessment']);
        }
    }
    changeView(event) {
        if (event.target.value == '1') {
            this.showPDF = true;
            this.showQuestion = false;
        }
        else if (event.target.value == '0') {
            this.showPDF = false;
            this.showQuestion = false;
        }
        else if (event.target.value == '2') {
            this.showQuestion = true;
            this.showPDF = false;
        }
    }
    changePDF(event) {
        console.log(event, 'event');
        console.log(event.target.value, 'target');
        if (event.target.value == 'all') {
            this.showType('1');
        }
        else {
            this.selectAnswerSheet(event.target.value);
        }
    }
    filterQues(event) {
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
                this.totalAns.forEach((value) => {
                    value.section.forEach((item) => {
                        item.isShow = item.given_points != '0';
                    });
                });
            }
            console.log(this.totalAns, 'totalAns');
        }
        else if (event.target.value == 'wrong') {
            if (this.correctPdfPath?.length == 0) {
                this.totalAns.forEach((item) => {
                    item.isShow = item.given_points == '0';
                });
            }
            else {
                console.log('pdf type');
                this.totalAns.forEach((value) => {
                    value.section.forEach((item) => {
                        item.isShow = item.given_points == '0';
                    });
                });
            }
        }
    }
    studentsAnswerList(details) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: this.fullTestContentDetail ? this.fullTestContentDetail.content_id : details.content_id,
            content_format: details.content_format,
            class_id: this.scoreData?.class_id,
            student_id: this.studentId,
            student_content_id: details.student_content_id
        };
        if (this.fullTestContentDetail) {
            data['is_test'] = '1';
            data['module_id'] = details.content_id;
        }
        this.teacher.studentAnswerList(data).subscribe((successData) => {
            this.contentName = this.scoreData?.is_test == 1 ? this.scoreData?.content_name + ' - ' + details?.subject + ' - ' + details?.module_name : details.content_name;
            this.answerListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_answer_list');
        });
    }
    answerListSuccess(successData) {
        if (successData.IsSuccess) {
            this.studentAnswer = successData.ResponseObject;
            this.studentName.emit(this.studentAnswer.student_name);
            console.log(this.studentAnswer, 'studentAns');
            this.totalAns = [];
            this.correctPdfPath = this.common.convertBase64(this.studentAnswer?.file_path);
            this.studentAnswer.downloadPDF = this.studentAnswer?.answerkey_path ? this.common.convertBase64(this.studentAnswer?.answerkey_path) : [];
            this.uploadAnswerPath = this.common.convertBase64(this.studentAnswer?.upload_answer);
            if (this.studentAnswer.answer_sheet_annotation.length === 0) {
                this.uploadAnswerPath.forEach((item) => this.totalSheetInfo.push([]));
            }
            else {
                this.totalSheetInfo = this.studentAnswer.answer_sheet_annotation;
            }
            this.answerSheetPath = this.webhost + '/' + this.uploadAnswerPath[0]?.original_image_url;
            if (this.correctPdfPath.length != 0) {
                this.studentAnswer.annotation.forEach((item) => {
                    item.isTeacherCorrection = false;
                });
                this.areaInfo = [...this.studentAnswer.student_annotation,
                    ...this.studentAnswer.teacher_annotation, ...this.studentAnswer.annotation];
                console.log(this.areaInfo, 'annotationValue');
                this.dragQuestion = [...this.studentAnswer.question_annotation];
                if (this.correctPdfPath[0].original_image_url != undefined) {
                    this.pdfTemplate = this.webhost + '/' + this.correctPdfPath[0]?.original_image_url;
                    this.isPdfAvailable = true;
                }
                else {
                    this.isPdfAvailable = false;
                }
                if (this.studentAnswer.answers.length != 0) {
                    for (let i = 0; i < this.studentAnswer.answers.length; i++) {
                        this.totalAns[i] = { heading: this.studentAnswer.answers[i].heading, section: [] };
                        for (let x = 0; x < this.studentAnswer.answers[i].section.length; x++) {
                            for (let j = 0; j < this.studentAnswer.answers[i].section[x].sub_questions.length; j++) {
                                const val = this.studentAnswer.answers[i].section[x].sub_questions[j].match_case === '1';
                                this.studentAnswer.answers[i].section[x].sub_questions[j].match_case = val;
                                const ans = this.studentAnswer.answers[i].section[x].sub_questions[j].answer;
                                const student_ans = this.studentAnswer.answers[i].section[x].sub_questions[j].student_answer;
                                const questionTypeId = this.studentAnswer.answers[i].section[x].sub_questions[j].question_type_id;
                                if (questionTypeId == '10') {
                                    const correctAnswer = this.matchcase(ans, val);
                                    const studentAnswer = this.matchcase([student_ans], val);
                                    const enteredAnswer = correctAnswer.every((answer) => {
                                        return !studentAnswer.some((code) => code == answer);
                                    });
                                    this.studentAnswer.answers[i].section[x].sub_questions[j].enteredAnswer = !enteredAnswer;
                                }
                                this.totalAns[i].section.push(this.studentAnswer.answers[i].section[x].sub_questions[j]);
                            }
                            this.totalAns[i].section.forEach((item) => {
                                item.maxValErr = false;
                                item.isShow = true;
                            });
                        }
                    }
                }
                else {
                    this.questionEmpty = true;
                    this.hideAnswer = true;
                }
            }
            else {
                this.totalAns = this.studentAnswer.answers;
                this.contentTimeTaken = this.studentAnswer.content_time_taken && this.studentAnswer.content_time_taken != '' &&
                    this.studentAnswer.content_time_taken != '0' ? parseInt(this.studentAnswer.content_time_taken) : 0;
                if (this.studentAnswer.answers.some(code => code.question_type_id == '55')) {
                    this.getFeedbackCount(this.studentAnswer.answers[0]);
                }
                this.totalAns.forEach((item) => {
                    item.maxValErr = false;
                    item.isShow = true;
                });
                setTimeout(() => {
                    for (let i = 0; i < this.totalAns.length; i++) {
                        if (this.totalAns[i].question_type_id == 7) {
                            for (let j = 0; j < this.totalAns[i].heading_option.length; j++) {
                                const index = i;
                                const row = this.totalAns[i].heading_option[j].correctActive;
                                const column = this.totalAns[i].heading_option[j].correctAnswer;
                                const final = index.toString() + row.toString() + column.toString();
                                document.getElementById('chooseMultipass' + final).setAttribute('checked', 'true');
                            }
                        }
                        else if (this.totalAns[i].question_type_id == 9) {
                            for (let j = 0; j < this.totalAns[i].student_answer.length; j++) {
                                const val = this.totalAns[i].student_answer[j].isSelected;
                                if (val != '') {
                                    document.getElementById(i + 'dropdown' + j).innerHTML = this.totalAns[i].student_answer[j].options[val].listOption;
                                }
                                else {
                                    document.getElementById(i + 'dropdown' + j).innerHTML = 'Student Not Answered';
                                }
                            }
                            for (let j = 0; j < this.totalAns[i].answer.length; j++) {
                                for (let k = 0; k < this.totalAns[i].answer[j].options.length; k++) {
                                    if (this.totalAns[i].answer[j].options[k].selected == 'true') {
                                        document.getElementById(i + 'dropdownCorrect' + j).innerHTML = this.totalAns[i].answer[j].options[k].listOption;
                                    }
                                }
                            }
                        }
                        else if (this.totalAns[i].question_type_id == 24) {
                            for (let j = 0; j < this.totalAns[i].subQuestions.length; j++) {
                                const findIndex = this.listPassageDetails.length != 0 ?
                                    this.listPassageDetails.findIndex(value => value.passage_id == this.totalAns[i].subQuestions[j].passage_id) : '';
                                this.totalAns[i].subQuestions[j].passage = findIndex != '' ? this.listPassageDetails[findIndex].passage : this.totalAns[i].subQuestions[j].passage;
                                if (this.totalAns[i].subQuestions[j].question_type_id == '7') {
                                    console.log(i, 'indsdas');
                                    for (let k = 0; k < this.totalAns[i].subQuestions[j].heading_option.length; k++) {
                                        const index1 = i;
                                        const id = j;
                                        const row1 = this.totalAns[i].subQuestions[j].heading_option[k].correctActive;
                                        const column1 = this.totalAns[i].subQuestions[j].heading_option[k].correctAnswer;
                                        const final1 = index1.toString() + id.toString() + row1.toString() + column1.toString();
                                        document.getElementById('chooseMultipass1' + final1)?.setAttribute('checked', 'true');
                                    }
                                }
                            }
                        }
                    }
                }, 500);
                this.getFeedBackList();
            }
            // this.studentsData();
            this.functionCalled = true;
            this.clickEvent();
        }
    }
    viewAnswerKeyPdf() {
        this.auth.setSessionData('view_pdf_url_details', JSON.stringify(this.studentAnswer));
        window.open(this.env.envProperties.envURL + '#/studentlogin/viewAnswerKeyPdf', '_blank');
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
    get showTimer() {
        return (this.totalAns.length === 1 && this.totalAns.some(qns => qns.question_type_id === '55')
            && this.studentAnswer?.show_answer == '1') || this.totalAns.some(qns => qns.question_type_id != '55');
    }
    getElapsedTime(value) {
        const timeTaken = value.question_type_id != '24' ? (value.time_taken && value.time_taken != '' ? value.time_taken : 0)
            : (value.subQuestions[0]?.time_taken && value.subQuestions[0]?.time_taken != '' ? value.subQuestions[0]?.time_taken : 0);
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
    get isSingleQnsWithFeedbackType() {
        return this.totalAns.length === 1 && this.totalAns.some(qns => qns.question_type_id === '55');
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
    matchcase(val, match) {
        let value = [];
        if (val != '' && val != undefined && val != 'undefined' && val != null) {
            val.forEach((answer) => {
                value.push(match ? answer.trim() : answer.trim().toLowerCase().split(' ').join(''));
            });
        }
        else {
            value = val;
        }
        return value;
    }
    close() {
        this.modalRef.close();
    }
    closeOverAllFeedback(id) {
        this.modalRef.close(id);
    }
    testDetails() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.scoreData.content_id,
            student_content_id: this.scoreData.student_content_id,
            school_id: this.auth.getSessionData('school_id')
        };
        this.creator.testDetail(data).subscribe((successData) => {
            this.testSuccess(successData);
        }, (error) => {
            console.error(error, 'error_lisDetails');
        });
    }
    testSuccess(successData) {
        if (successData.IsSuccess) {
            successData.ResponseObject[0]?.contents.forEach(item => item.name = item.subject + ' - ' + item.module_name);
            this.fullTestContentDetail = successData.ResponseObject[0];
            this.testContentDetail = successData.ResponseObject[0].contents;
            this.testContentData = this.testContentDetail[0].student_content_id;
            this.studentsAnswerList(this.testContentDetail[0]);
        }
    }
    updateContentHeight() {
        const availableHeight = window.innerHeight - (146);
        this.totalFeedbackMaxHeight = this.isSingleQnsWithFeedbackType ? `${availableHeight}px` : 'auto';
        console.log(this.totalFeedbackMaxHeight, 'totalFeedbackMaxHeight');
    }
    static { this.ɵfac = function AnswerSheetComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AnswerSheetComponent)(i0.ɵɵdirectiveInject(i1.NgbModalConfig), i0.ɵɵdirectiveInject(i2.ConfigurationService), i0.ɵɵdirectiveInject(i3.DomSanitizer), i0.ɵɵdirectiveInject(i4.TeacherService), i0.ɵɵdirectiveInject(i5.StudentService), i0.ɵɵdirectiveInject(i1.NgbModal), i0.ɵɵdirectiveInject(i6.AuthService), i0.ɵɵdirectiveInject(i7.CommonDataService), i0.ɵɵdirectiveInject(i8.NavService), i0.ɵɵdirectiveInject(i9.CommonService), i0.ɵɵdirectiveInject(i10.Router), i0.ɵɵdirectiveInject(i11.EnvironmentService), i0.ɵɵdirectiveInject(i12.ValidationService), i0.ɵɵdirectiveInject(i13.ToastrService), i0.ɵɵdirectiveInject(i14.CreatorService), i0.ɵɵdirectiveInject(i15.ContentdetailService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AnswerSheetComponent, selectors: [["app-answer-sheet"]], viewQuery: function AnswerSheetComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.workArea = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.overallFeedback = _t.first);
        } }, hostBindings: function AnswerSheetComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function AnswerSheetComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { answerShow: "answerShow", contentId: "contentId", contentFormat: "contentFormat", classId: "classId", studentReportId: "studentReportId", backStatus: "backStatus", studentContentId: "studentContentId", is_test: "is_test" }, outputs: { studentName: "studentName" }, decls: 5, vars: 1, consts: [["workArea", ""], ["overallFeedback", ""], ["class", "container-fluid", 4, "ngIf"], [1, "container-fluid"], [1, "card", "p-3", "mb-3"], [1, "row", "justify-content-between", "d-flex"], [1, "content-heading", "p-0"], ["class", "d-flex align-items-center col-4 p-0", 4, "ngIf"], [1, "d-flex", "px-0"], [1, "mb-0", "font-weight-bold", "align-content-center"], [1, "color-primary"], ["class", "row my-0 mr-4 justify-content-center timer_button px-2 py-1", 4, "ngIf"], ["class", "form-control col-3 mr-3", 3, "change", 4, "ngIf"], ["class", "form-control col-4 mr-3", 3, "change", 4, "ngIf"], [1, "d-flex", "align-items-center"], [3, "class", "click", 4, "ngIf"], ["style", "margin-top: 10px", "class", "col-12 text-right", 4, "ngIf"], ["class", "card p-4 mb-3", 4, "ngIf"], [3, "class", "keypress", 4, "ngIf"], [1, "d-flex", "align-items-center", "col-4", "p-0"], ["bindLabel", "name", "bindValue", "student_content_id", "placeholder", "Content List", 1, "m-0", "w-100", 3, "change", "ngModelChange", "items", "ngModel", "clearable"], ["ng-option-tmp", ""], [3, "title"], [1, "row", "my-0", "mr-4", "justify-content-center", "timer_button", "px-2", "py-1"], ["class", "w-auto text-center", 4, "ngIf"], ["class", "w-auto mx-2", "style", "margin-top: 2px", 4, "ngIf"], [1, "w-auto", "text-center"], ["style", "font-size: 24px", "class", "mb-0", 4, "ngIf"], [1, "color-primary", "mb-0", 2, "font-size", "12px"], [1, "w-auto", "mx-2", 2, "margin-top", "2px"], [1, "mb-0", "font-weight-bold"], [1, "mb-0", 2, "font-size", "24px"], [1, "form-control", "col-3", "mr-3", 3, "change"], ["value", "all"], [3, "value", "title", 4, "ngFor", "ngForOf"], [3, "value", "title"], [1, "form-control", "col-4", "mr-3", 3, "change"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "correct"], ["value", "wrong"], [3, "click"], [1, "col-12", "text-right", 2, "margin-top", "10px"], [1, "answer_key", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-key", "mr-1"], [1, "card", "p-4", "mb-3"], [1, "ml-2"], [1, "font-weight-bold"], [1, "col-md-12", "d-flex", "mb-4", "p-4", "release-card"], [1, "row"], [3, "class", 4, "ngIf"], ["style", "background-color: rgba(246, 246, 246, 0.6)", 3, "class", 4, "ngIf"], ["id", "custom-pdf-loader", "style", "height: 100vh;", 4, "ngIf"], ["class", "col-md-12 px-0", 4, "ngIf"], [3, "getAnnotate", "getDragQues", "pdfPath", "toolHide", "userType", 4, "ngIf"], [3, "getAnnotate", "pdfPath", "toolHide", "userType", 4, "ngIf"], ["id", "custom-pdf-loader", 2, "height", "100vh"], ["alt", "", "src", "assets/images/pre-loader/loader-01.svg"], [1, "col-md-12", "px-0"], [1, "col-md-12", "flex-center", "flex-wrap", "link-card", 2, "height", "50vh"], [1, "col-md-12", "d-flex", "justify-content-center"], ["class", "size-120px", "src", "assets/images/icons/doc-icon.png", "alt", "doc", 4, "ngIf"], ["class", "size-120px", "src", "assets/images/icons/audio-icon.png", "alt", "mp3", 4, "ngIf"], ["class", "size-120px", "src", "assets/images/icons/video-icon.png", "alt", "mp4", 4, "ngIf"], ["class", "size-120px", "src", "assets/images/icons/ppt-icon.png", "alt", "ppt", 4, "ngIf"], ["class", "size-120px", "src", "assets/images/icons/others-icon.png", "alt", "others", 4, "ngIf"], ["target", "_blank", 3, "title", "href"], ["src", "assets/images/icons/doc-icon.png", "alt", "doc", 1, "size-120px"], ["src", "assets/images/icons/audio-icon.png", "alt", "mp3", 1, "size-120px"], ["src", "assets/images/icons/video-icon.png", "alt", "mp4", 1, "size-120px"], ["src", "assets/images/icons/ppt-icon.png", "alt", "ppt", 1, "size-120px"], ["src", "assets/images/icons/others-icon.png", "alt", "others", 1, "size-120px"], [3, "getAnnotate", "getDragQues", "pdfPath", "toolHide", "userType"], [3, "getAnnotate", "pdfPath", "toolHide", "userType"], [2, "background-color", "rgba(246, 246, 246, 0.6)"], [3, "ngStyle", 4, "ngFor", "ngForOf"], [3, "ngStyle"], ["class", "col-md-12 mb-3", 4, "ngIf"], ["class", "card-body", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mb-3"], ["type", "text", 1, "input-custom-modal", "div-disable", 3, "value"], [1, "card-body"], [1, "mb-3", 3, "hidden"], [1, "row", "d-flex", "justify-content-between"], [1, "pull-left", "question-no", "px-0", "col-md-12"], ["aria-expanded", "false", "class", "btn-sm btn-primary mr-2", "data-toggle", "collapse", 4, "ngIf"], ["class", "btn-sm btn-primary mr-2", 3, "click", 4, "ngIf"], [1, "mark-input", "div-disable", 2, "text-align", "center", 3, "value", "ngStyle"], [1, "mb-3", "mt-2", "div-disable", 3, "hidden", "innerHTML"], ["class", "mt-4", 4, "ngIf"], ["class", "col-md-12 mt-4 px-0", 4, "ngIf"], [1, "col-md-12"], ["class", "row mt-4 d-flex", 4, "ngIf"], ["aria-expanded", "false", "data-toggle", "collapse", 1, "btn-sm", "btn-primary", "mr-2"], [1, "btn-sm", "btn-primary", "mr-2", 3, "click"], [1, "mt-4"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["aria-hidden", "true", 1, "fa", "fa-check"], ["aria-hidden", "true", 1, "fa", "fa-times"], ["name", "ans", "type", "radio", "value", "true", 1, "radio-size", "form-control", "mr-2", "div-disable", 3, "checked"], ["name", "ans", "type", "radio", "value", "false", 1, "radio-size", "form-control", "mr-2", "div-disable", 3, "checked"], [1, ""], [1, "col-md-12", "mt-4", "px-0"], ["cols", "30", "readonly", "", "rows", "4", 1, "form-control", "mt-2", 3, "ngClass", "value"], [3, "class", 4, "ngFor", "ngForOf"], [1, "font-weight-light"], ["class", "fa fa-check-circle fa-2x text-success ml-2", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-times-circle fa-2x text-danger ml-2", "aria-hidden", "true", 4, "ngIf"], ["cols", "30", "readonly", "", "rows", "4", 1, "form-control"], [1, "col-md-12", "mt-2"], ["readonly", "", "type", "text", 1, "form-control", 3, "value"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "fa-2x", "text-success", "ml-2"], ["aria-hidden", "true", 1, "fa", "fa-times-circle", "fa-2x", "text-danger", "ml-2"], [1, "d-flex", "col-md-12"], [1, "ml-3", 3, "innerHTML"], ["class", "d-flex col-12 mt-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "col-12", "mt-2"], [1, "py-1"], [1, "ml-3", "overflow-auto", 3, "innerHTML"], [4, "ngFor", "ngForOf"], ["class", "form-control div-disable mt-2", "type", "text", 3, "ngClass", "value", 4, "ngIf"], ["class", "form-control div-disable mt-2 wrong-ans", "type", "text", 4, "ngIf"], [1, "mt-1"], ["type", "text", 1, "form-control", "div-disable", "mt-2", 3, "ngClass", "value"], ["type", "text", 1, "form-control", "div-disable", "mt-2", "wrong-ans"], [1, "row", "mt-3", "px-3"], [1, "col-md-12", "collapse", "px-0", 3, "id"], ["class", "customize-card2 col-md-12 pull-right", 3, "src", 4, "ngIf"], ["class", "customize-card col-md-12 px-3", "style", "text-align: center", 3, "innerHTML", 4, "ngIf"], [1, "customize-card2", "col-md-12", "pull-right", 3, "src"], [1, "customize-card", "col-md-12", "px-3", 2, "text-align", "center", 3, "innerHTML"], ["class", "customize-card col-md-12 px-3", 4, "ngIf"], ["class", "customize-card col-md-12 px-3", "style", "text-align: center", 4, "ngIf"], [1, "customize-card", "col-md-12", "px-3"], [1, "customize-card", "col-md-12", "px-3", 2, "text-align", "center"], [1, "mb-3", "mt-2", 3, "hidden", "innerHTML"], [3, "editMode", "editPatchValue", "graphId", "questionType"], ["class", "col-md-12 mt-4", 4, "ngIf"], [3, "editMode", "editPatchValue", "graphId", "questionType", 4, "ngIf"], [1, "col-md-12", "mt-4"], [1, "innerhtml-margin-clear", "form-span", 3, "innerHTML"], [1, "innerhtml-margin-clear", 3, "innerHTML", "ngClass"], [1, "row", "mt-4", "d-flex"], [1, "explanation", "scorecard-scroll", 3, "innerHTML"], ["placeholder", "No Feedback Found", "readonly", "", "rows", "3", 1, "form-control", 3, "value"], [3, "keypress"], [3, "ngStyle", "class", 4, "ngFor", "ngForOf"], ["id", "print-section", "class", "col-6 content-card", 3, "ngStyle", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], [3, "hidden"], ["class", "col-md-12 pl-1 pr-0 justify-content-between d-flex align-items-center", 4, "ngIf"], ["class", "mb-0 overflow-auto div-disable", 3, "innerHTML", 4, "ngIf"], ["class", "col-md-12 px-0 d-flex mt-4", 4, "ngIf"], ["class", "col-md-12 d-flex mt-4", 4, "ngIf"], ["class", "row px-0", 4, "ngIf"], ["class", "mt-2", 4, "ngIf"], ["class", "col-md-12 d-flex mt-4 px-3 mb-3", 4, "ngIf"], ["class", "col-12 mt-2", 4, "ngIf"], ["class", "col-md-12 mt-3", 4, "ngIf"], [1, "resource-link-card", 3, "hidden"], [1, "col-md-12", "d-flex", "justify-content-center", "align-items-center", 2, "height", "20vh"], [1, "text-info"], [1, "col-md-12", "pl-1", "pr-0", "justify-content-between", "d-flex", "align-items-center"], [1, "w-5", "d-flex", "align-items-center"], [1, "pull-left", "question-no", "col-md-10", "mr-3"], [4, "ngIf"], [1, "w-95", "d-flex", "justify-content-end"], [1, "col-md-2", "d-inline-flex", "px-0", "align-content-center", "justify-content-end"], [1, "d-flex", "mr-3", "align-items-center"], ["style", "font-size: 18px", "class", "mb-0", 4, "ngIf"], [1, "w-auto", "mx-2"], ["class", "color-primary", 4, "ngIf"], ["class", "fa fa-check-circle fa-2x text-success", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-times-circle fa-2x text-danger", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "fa-2x", "text-success"], ["aria-hidden", "true", 1, "fa", "fa-times-circle", "fa-2x", "text-danger"], [1, "mb-0", 2, "font-size", "18px"], [1, "mb-0", "overflow-auto", "div-disable", 3, "innerHTML"], [1, "col-md-12", "px-0", "d-flex", "mt-4"], [1, "col-md-6", "mb-2"], ["class", "col-md-12 mb-3 mx-3 p-2 d-flex align-items-center", 3, "ngClass", 4, "ngFor", "ngForOf"], ["style", "padding: 12px", "class", "col-md-12 d-flex align-items-center wrong-ans-selected", 4, "ngIf"], ["style", "max-height: 20rem", 3, "ngClass", "class", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mb-3", "mx-3", "p-2", "d-flex", "align-items-center", 3, "ngClass"], [1, "btn-primary", "inner_button", "mr-3"], [1, "remove-margin-bottom", 3, "innerHTML"], [1, "col-md-12", "d-flex", "align-items-center", "wrong-ans-selected", 2, "padding", "12px"], [1, "remove-margin-bottom"], [2, "max-height", "20rem", 3, "ngClass"], ["class", "btn-primary inner_button", 4, "ngIf"], ["class", "col-11 pt-1 pr-0", 4, "ngIf"], [1, "btn-primary", "inner_button"], [1, "col-11", "pt-1", "pr-0"], [1, "col-md-6", "table-flexible"], ["class", "table table-bordered text-center div-disable", 4, "ngIf"], [1, "table", "table-bordered", "text-center", "div-disable"], ["class", "remove-margin-bottom", 3, "innerHTML", 4, "ngFor", "ngForOf"], ["class", "remove-margin-bottom", 3, "innerHTML", "id", 4, "ngFor", "ngForOf"], [1, "remove-margin-bottom", 3, "innerHTML", "id"], ["class", "radio_animated", "type", "radio", 3, "checked", "id", "name", 4, "ngIf"], ["type", "checkbox", 3, "checked", "id", 4, "ngIf"], ["type", "radio", 1, "radio_animated", 3, "checked", "id", "name"], ["type", "checkbox", 3, "checked", "id"], ["class", "radio_animated", "type", "radio", 3, "checked", "name", 4, "ngIf"], ["type", "checkbox", 3, "id", 4, "ngIf"], ["type", "radio", 1, "radio_animated", 3, "checked", "name"], ["type", "checkbox", 3, "id"], [1, "col-md-6"], ["style", "padding: 12px", "class", "col-md-12 mt-3 d-flex align-items-center wrong-ans-selected", 4, "ngIf"], ["class", "col-md-12 mt-3 mb-3", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mt-3", "d-flex", "align-items-center", "wrong-ans-selected", 2, "padding", "12px"], [1, "col-md-12", "mt-3", "mb-3"], [1, "col-md-11"], ["data-toggle", "dropdown", 1, "col-md-12", "bg-white", "innerhtml-margin-clear", "p-2", "dropdown-toggle", "d-flex", "justify-content-between", 3, "ngClass", "id"], [1, "col-md-11", "dropdown-menu"], ["class", "dropdown-item dropdown-link innerhtml-margin-clear", "style", "overflow: scroll; overflow-y: hidden", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "dropdown-item", "dropdown-link", "innerhtml-margin-clear", 2, "overflow", "scroll", "overflow-y", "hidden", 3, "innerHTML"], ["data-toggle", "dropdown", 1, "col-md-12", "bg-white", "innerhtml-margin-clear", "p-2", "dropdown-border", "dropdown-toggle", "d-flex", "justify-content-between", 3, "id"], [1, "col-md-12", "d-flex", "mt-4"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], [1, "form-span"], [1, "col-12"], ["class", "input-group mb-3 mt-3 inputMenu", 4, "ngFor", "ngForOf"], [1, "input-group", "mb-3", "mt-3", "inputMenu"], [1, "input-group", "mb-1", "inputMenu", "editor_bullet"], [1, "input-group-prepend"], [1, "input-group-text"], ["src", "assets/images/pdf-icons/equal@2x.png", 1, "img-fluid"], [1, "form-control", "mb-0", "pt-4", "pb-5", "overflow-scroll", 3, "innerHTML"], [1, "editor_bullet", 3, "ngClass"], ["class", "innerhtml-margin-clear", 3, "innerHTML", 4, "ngIf"], [1, "innerhtml-margin-clear", 3, "innerHTML"], [1, "mb-2", "form-span", "editor_bullet"], [1, "row", "px-0"], [1, "col-md-12", "my-3"], [1, "font-weight-bold", "col-5", "align-self-center"], [1, "col-7", "text-right", "mb-2"], [1, "row", "justify-content-end", "align-items-end", "pr-3"], ["class", "col-8 text-left pr-2", 4, "ngIf"], ["class", "dropdown", 4, "ngIf"], ["class", "form-span feedback-card col-md-12 d-flex editor_bullet", 4, "ngIf"], ["class", "col-md-12 d-flex p-2", 4, "ngIf"], [1, "col-8", "text-left", "pr-2"], [1, "label_design"], ["bindLabel", "version_name", "bindValue", "index", "placeholder", "Please Select", 3, "change", "ngModelChange", "items", "clearable", "ngModel"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100"], [1, "mb-0", "d-inline-flex", 2, "font-size", "14px", 3, "ngClass"], [1, "badge", "badge-info", "ml-2", 2, "align-content", "center", "padding", "4px 8px"], [1, "badge", 3, "ngClass"], [1, "dropdown"], [1, "btn", "btn-outline-primary", "px-3"], ["aria-hidden", "true", 1, "fa", "fa-print", "mr-2"], ["aria-hidden", "true", 1, "fa", "fa-sort-desc", "float-right", "ml-2"], [1, "dropdown-content", "text-left", 2, "right", "1px"], [1, "cursor", 3, "click"], ["src", "assets/images/without-feedback.png", 1, "mr-2", 2, "width", "20px"], ["src", "assets/images/report-feedback.png", 1, "mr-2", 2, "width", "18px"], [1, "form-span", "feedback-card", "col-md-12", "d-flex", "editor_bullet"], [1, "col-md-12", "d-flex", "p-2"], [1, "mt-2"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "mb-3"], [1, "mb-3", 3, "innerHTML"], ["class", "col-md-12 px-0 d-flex mt-3", 4, "ngIf"], ["class", "col-md-12 px-0 d-flex", 4, "ngIf"], [1, "col-12", "mt-2"], [1, "card", "explanation"], [1, "col-4", "mb-3"], [1, "m-0"], [1, "col-4"], ["class", "col-md-12 mt-4 d-flex", 4, "ngIf"], [1, "col-md-12", "px-0", "d-flex", "mt-3"], [1, "col-md-12", "px-0", "d-flex"], ["type", "checkbox", 3, "checked", 4, "ngIf"], ["type", "checkbox", 3, "checked"], [1, "col-md-6", "px-0"], ["style", "padding: 12px", "class", "mt-3 col-md-12 d-flex align-items-center wrong-ans-selected", 4, "ngIf"], [1, "mt-3", "col-md-12", "d-flex", "align-items-center", "wrong-ans-selected", 2, "padding", "12px"], [3, "class", "id", 4, "ngIf"], [3, "id"], [1, "feedback-card", "col-md-12"], [1, "col-md-12", "mt-4", "d-flex"], [1, "explanation", "innerhtml-margin-clear", 3, "innerHTML"], [1, "col-md-12", "mt-3"], ["cols", "30", "placeholder", "Please Enter the Feedback", "readonly", "", "rows", "2", 1, "form-control", 3, "value"], [1, "col-md-12", "d-flex", "mt-4", "px-3", "mb-3"], ["class", "innerhtml-margin-clear", 4, "ngIf"], [1, "form-span", "editor_bullet"], [1, "innerhtml-margin-clear"], [1, "col-12", "mt-0", "d-flex", "justify-content-center"], [1, "innerhtml-margin-clear", "editor_bullet", 3, "ngClass"], [1, "innerhtml-margin-clear", "form-span", "editor_bullet"], ["class", "card", 4, "ngIf"], [1, "card"], [1, "card-header", "p-3", "background_gradient"], [2, "color", "white"], [1, "card-body", "editor_bullet", "custom_feedback_card_body", "p-3"], [2, "border", "0 !important", 3, "innerHTML"], ["class", "col-md-12", 4, "ngIf"], ["id", "print-section", 1, "col-6", "content-card", 3, "ngStyle"], [1, "mt-3", "col-md-12", "display-block", 2, "display", "none"], [1, "card-body", "p-3"], [1, "col-6"], [1, "font-weight-bold", 2, "font-size", "18px !important"], [1, "content-heading-name"], [1, "mb-0"], [1, "col-6", "text-right"], [1, "mt-3", "editor_bullet", "col-md-12", "display-block", 2, "display", "none"], [1, "font-weight-bold", 2, "color", "white", "font-size", "20px !important"], [1, "card-body", "p-3", "custom_feedback_card_body"], [1, "innerhtml-margin-clear", 2, "font-size", "20px !important", 3, "innerHTML"], ["style", "display: none", "class", "mt-3 editor_bullet col-md-12 display-block", 4, "ngIf"], ["id", "feedback_got", 1, "row"], ["class", "feedback-card p-0", "style", "height: 74vh; border: 0 !important;", 3, "innerHTML", 4, "ngIf"], [1, "font-weight-bold", 2, "color", "white"], [1, "innerhtml-margin-clear", "f-18"], [1, "feedback-card", "p-0", 2, "height", "74vh", "border", "0 !important", 3, "innerHTML"], ["class", "font-weight-bold", 4, "ngIf"], ["class", "col-12 px-0", 4, "ngIf"], [1, "col-12", "mt-3", "px-0"], [1, "font-weight-bold", 2, "color", "white", "font-size", "16px"], [1, "card-body", "custom_feedback_card_body", "p-3"], ["style", "border: 0 !important;", "class", "feedback-card", 3, "innerHTML", 4, "ngIf"], ["class", "feedback-card p-0", "style", "overflow-x: hidden;border: 0 !important", 4, "ngIf"], ["class", "col-12 mt-3 px-0", 4, "ngIf"], [1, "col-12", "px-0"], [1, "row", "justify-content-center", "flex-column"], [1, "col-12", "d-flex", "justify-content-center"], [1, "text-center"], [1, "mb-0", 2, "font-size", "14px"], [1, "font-weight-bold", 2, "color", "#008ffb"], ["style", "color: #00e396", "class", "font-weight-bold", 4, "ngIf"], ["id", "chart2"], [3, "series", "chart", "xaxis", "yaxis", "plotOptions", "dataLabels", "legend"], ["class", "col-12 mt-3", 4, "ngIf"], [1, "font-weight-bold", 2, "color", "#00e396"], ["class", "strength_text", 4, "ngFor", "ngForOf"], [1, "strength_text"], [1, "col-12", "mt-3"], ["class", "top_opportunity_text", 4, "ngFor", "ngForOf"], [1, "top_opportunity_text"], [1, "feedback-card", 2, "border", "0 !important", 3, "innerHTML"], [1, "feedback-card", "p-0", 2, "overflow-x", "hidden", "border", "0 !important"], [1, "row", "mb-2"], [1, "mb-0", "font-weight-bold", 2, "font-size", "18px"], [1, "col-10"], [1, "progress", "cursor", "my-2"], ["role", "progressbar", 1, "progress-bar"], [1, "align-self-center", "font-weight-bold", "color-primary"], ["class", "feedback-panel", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "feedback-panel", 3, "click", "ngClass"], [1, "feedback-header", "d-flex", "justify-content-between", "align-items-center", 3, "ngClass"], [1, "title-text"], [1, "badge", "badge-info", "mr-2"], [1, "fa", 2, "color", "black", 3, "ngClass"], [1, "feedback-body", 3, "ngbCollapse"], [2, "color", "black"], [1, "collapse-card"], [1, "snippet-text"], [1, "inner-collapse", "mt-2"], [1, "font-weight-bold", "col-12", "px-0"], [1, "font-weight-normal", "italic"], ["class", "font-weight-bold mt-2 col-12 px-0", 4, "ngIf"], [1, "font-weight-bold", "mt-2", "col-12", "px-0"], [1, "font-weight-normal", "color-primary", "italic"], [1, "card-body", "custom_feedback_card_body", "py-3", "px-0"], [1, "text-center", "font-weight-bold", 2, "padding-left", "16px", 3, "ngStyle"], [1, "font-weight-bold", "mb-1", "col-12", "px-0"], [2, "color", "#007BFF"], [1, "color-primary", "col-12", "px-0"], [1, "row", "px-3"], [1, "card", "col-12", "p-4"], [1, "card-body", "py-3", "px-4", "custom_feedback_card_body"], ["class", "row px-2", 4, "ngFor", "ngForOf"], [1, "row", "px-2"], [1, "text-dark", 2, "font-size", "12px"], [1, "modal-header", "d-flex", "justify-content-between"], [1, "fa", "fa-times-circle", "cursor", 2, "font-size", "1.2rem", 3, "click"], [1, "modal-body", 2, "border", "0"], [3, "getAnnotate", "id", "pdfPath", "toolHide", "userType"], [1, "mb-0", 2, "color", "#8F008A"], [1, "modal-body"], [1, "col-md-12", "d-flex", "mt-4", "mb-4", "p-4", "release-card"]], template: function AnswerSheetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AnswerSheetComponent_div_0_Template, 24, 22, "div", 2)(1, AnswerSheetComponent_ng_template_1_Template, 9, 5, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, AnswerSheetComponent_ng_template_3_Template, 9, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.functionCalled);
        } }, dependencies: [i16.NgClass, i16.NgForOf, i16.NgIf, i16.NgStyle, i1.NgbCollapse, i17.NgSelectOption, i17.ɵNgSelectMultipleOption, i17.NgControlStatus, i18.NgSelectComponent, i18.NgOptionTemplateDirective, i17.NgModel, i19.GraphComponentComponent, i20.AnnotationComponent, i21.ChartComponent, i16.DatePipe, i22.SanitizeHtmlPipe, i23.CustomDateFormatPipe], styles: [".point-border-left[_ngcontent-%COMP%]{\n  border: 1px solid #8F008A;\n  border-right: 0;\n  text-align: center;\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n\n.point-border-right[_ngcontent-%COMP%] {\n  border: 1px solid #8F008A;\n  text-align: center;\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.w-95[_ngcontent-%COMP%] {\n  width: 95%\n}\n.inner_button[_ngcontent-%COMP%] {\n  padding: 4px 8px !important;\n  background: #ffff !important;\n  color: black;\n  border: 2px solid #e1e4eb !important;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 16px;\n  height: 30px;\n  cursor: text;\n}\n\n.button_design[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.inner_button[_ngcontent-%COMP%]:focus, .button_design[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  outline: none;\n}\n\n.button_design[_ngcontent-%COMP%]:active {\n  color: #FFFFFF !important;\n}\n\n.inner_button[_ngcontent-%COMP%]:active {\n  color: black !important;\n}\n\n.inner_button[_ngcontent-%COMP%]:focus-visible, .button_design[_ngcontent-%COMP%]:focus-visible {\n  outline: none !important;\n}\n\n.timer_button[_ngcontent-%COMP%] {\n  border: 1px solid #8f008a;\n  background: #fff !important;\n  border-radius: 4px;\n}\n\n.student-selected[_ngcontent-%COMP%] {\n  background-color: #e9ccec !important;\n  border-radius: 4px !important;\n}\n.correct-ans-selected[_ngcontent-%COMP%] {\n  background-color: #d4edda !important;\n  border-radius: 4px !important;\n}\n.wrong-ans-selected[_ngcontent-%COMP%] {\n  background-color: #ffb7b7 !important;\n  border-radius: 4px !important;\n}\n.img-fluid[_ngcontent-%COMP%] {\n  height: 60px !important;\n}\n\n.answer_key[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  font-family: \"Rage Italic\", serif;\n  font-style: italic;\n  font-size: 16px;\n  cursor: pointer;\n  color: #007bff;\n  font-weight: bold;\n  transition: transform 0.3s ease, font-size 0.3s ease;\n}\n\n.answer_key[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: -2px;\n  width: 0;\n  height: 2px;\n  background-color: #007bff;\n  transition: width 0.4s ease;\n}\n\n.answer_key[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  color: #007bff;\n}\n\n.answer_key[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnswerSheetComponent, [{
        type: Component,
        args: [{ selector: 'app-answer-sheet', template: "<div *ngIf=\"functionCalled\" class=\"container-fluid\">\n    <div class=\"card p-3 mb-3\">\n        <div class=\"row justify-content-between d-flex\">\n            <div class=\"col-md-{{scoreData?.is_test == 1 || studentAnswer.downloadPDF.length != 0 ? '5' : '6'}} d-flex align-items-center\">\n                <h4 class=\"content-heading p-0\">{{contentName == '' ? '-' : contentName}}</h4>\n            </div>\n            <div class=\"col-md-{{scoreData?.is_test == 1 || studentAnswer.downloadPDF.length != 0 ? '7' : '6'}} d-flex justify-content-end align-items-center\">\n                <div class=\"d-flex align-items-center col-4 p-0\" *ngIf=\"scoreData?.is_test == 1\">\n                    <ng-select class=\"m-0 w-100\" (change)=\"studentsAnswerList($event)\"\n                        [items]=\"testContentDetail\"\n                        bindLabel=\"name\"\n                        bindValue=\"student_content_id\"\n                        [(ngModel)]=\"testContentData\"\n                        placeholder=\"Content List\"\n                        [clearable]=\"false\">\n                        <ng-template ng-option-tmp let-item=\"item\">\n                            <div title=\"{{item.name}}\">{{item.name}}</div>\n                        </ng-template>\n                    </ng-select>\n                </div>\n                <div class=\"d-flex px-0 mr-3 col-{{env.deviceType() ? '5' : scoreData?.is_test == 1 || studentAnswer.downloadPDF.length != 0 ? '3' : '4'}} justify-content-end\">\n                    <div class=\"d-flex px-0\">\n                        <h5 class=\"mb-0 font-weight-bold align-content-center\">Total Score: <span class=\"color-primary\">{{studentAnswer.earned_points}} / {{studentAnswer.points}}</span></h5>\n                    </div>\n                </div>\n                <div class=\"row my-0 mr-4 justify-content-center timer_button px-2 py-1\" *ngIf=\"correctPdfPath.length == 0 && showTimer\">\n                    <div class=\"w-auto text-center\" *ngIf=\"contentTimeTaken >= 3600\">\n                        <h4 style=\"font-size: 24px\" class=\"mb-0\" *ngIf=\"getElapsedOverAllTime() as elapsed\"><b>{{elapsed.hours}}</b></h4>\n                        <h6 style=\"font-size: 12px\" class=\"color-primary mb-0\">Hours</h6>\n                    </div>\n                    <div class=\"w-auto mx-2\" *ngIf=\"contentTimeTaken >= 3600\" style=\"margin-top: 2px\">\n                        <h4 class=\"mb-0 font-weight-bold\">:</h4>\n                    </div>\n                    <div class=\"w-auto text-center\">\n                        <h4 style=\"font-size: 24px\" class=\"mb-0\" *ngIf=\"getElapsedOverAllTime() as elapsed\"><b>{{elapsed.minutes}}</b></h4>\n                        <h6 style=\"font-size: 12px\" class=\"color-primary mb-0\">Minutes</h6>\n                    </div>\n                    <div class=\"w-auto mx-2\" style=\"margin-top: 2px\">\n                        <h4 class=\"mb-0 font-weight-bold\">:</h4>\n                    </div>\n                    <div class=\"w-auto text-center\">\n                        <h4 style=\"font-size: 24px\" class=\"mb-0\" *ngIf=\"getElapsedOverAllTime() as elapsed\"><b>{{elapsed.seconds}}</b></h4>\n                        <h6 style=\"font-size: 12px\"  class=\"color-primary mb-0\">Seconds</h6>\n                    </div>\n                </div>\n                <select (change)=\"changePDF($event)\" class=\"form-control col-3 mr-3\" *ngIf=\"uploadAnswerPath.length != 0 && correctPdfPath.length != 0\">\n                    <option value=\"all\">Question PDF</option>\n                    <option [value]=\"i\" *ngFor=\"let items of uploadAnswerPath; let i = index\" [title]=\"items.image\">\n                        {{items.image}}\n                    </option>\n                </select>\n                <select (change)=\"changeView($event)\" class=\"form-control col-4 mr-3\" *ngIf=\"correctPdfPath.length != 0 && (!questionEmpty || !hideAnswer)\">\n                    <option value=\"0\">{{contentType}} and uploads</option>\n                    <option value=\"1\">PDF View</option>\n                    <option value=\"2\">Q & A View</option>\n                </select>\n                <select (change)=\"filterQues($event)\" class=\"form-control col-3 mr-3\" *ngIf=\"correctPdfPath.length != 0 && (!questionEmpty || !hideAnswer)\">\n                    <option value=\"all\">All Answers</option>\n                    <option value=\"correct\">Correct Answers</option>\n                    <option value=\"wrong\">Incorrect Answers</option>\n                </select>\n                <div class=\"d-flex align-items-center\">\n                    <button (click)=\"back()\" class=\"btn btn-outline-primary pull-right {{env.deviceType() ? 'py-0 border-radius-2' : ''}}\" *ngIf=\"backStatus\">Back</button>\n                </div>\n            </div>\n            <div style=\"margin-top: 10px\" class=\"col-12 text-right\" *ngIf=\"studentAnswer.downloadPDF.length != 0\">\n                <a class=\"answer_key\" (click)=\"viewAnswerKeyPdf()\"><i class=\"fa fa-key mr-1\" aria-hidden=\"true\"></i>Answer Key & Explanation</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"card p-4 mb-3\" *ngIf=\"studentAnswer.feedback != '' && correctPdfPath.length != 0\">\n        <div class=\"ml-2\">\n            <h5 class=\"font-weight-bold\">Overall Feedback:</h5>\n            <div class=\"col-md-12 d-flex mb-4 p-4 release-card\">\n                <span>{{studentAnswer.feedback}}</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"card p-4 mb-3\" *ngIf=\"correctPdfPath.length != 0\">\n        <div class=\"row\">\n            <div class=\"col-md-{{questionEmpty || hideAnswer || showPDF ? 12 : 8}}\" *ngIf=\"!showQuestion\">\n                <div *ngIf=\"!functionCalled || (showingType == '2' && blink == false)\" id=\"custom-pdf-loader\" style=\"height: 100vh;\">\n                    <img alt=\"\" src=\"assets/images/pre-loader/loader-01.svg\">\n                </div>\n                <div class=\"col-md-12 px-0\" *ngIf=\"functionCalled && showingType == '1' && !isPdfAvailable\">\n                    <div class=\"col-md-12 flex-center flex-wrap link-card\" style=\"height: 50vh\">\n                        <div class=\"col-md-12 d-flex justify-content-center\">\n                            <img *ngIf=\"correctPdfPath[0].type == 'document'\" class=\"size-120px\" src=\"assets/images/icons/doc-icon.png\" alt=\"doc\">\n                            <img *ngIf=\"correctPdfPath[0].type == 'audio'\" class=\"size-120px\" src=\"assets/images/icons/audio-icon.png\" alt=\"mp3\">\n                            <img *ngIf=\"correctPdfPath[0].type == 'video'\" class=\"size-120px\" src=\"assets/images/icons/video-icon.png\" alt=\"mp4\">\n                            <img *ngIf=\"correctPdfPath[0].type == 'ppt'\" class=\"size-120px\" src=\"assets/images/icons/ppt-icon.png\" alt=\"ppt\">\n                            <img *ngIf=\"correctPdfPath[0].type == 'Others'\" class=\"size-120px\" src=\"assets/images/icons/others-icon.png\" alt=\"others\">\n                        </div>\n                        <a [title]=\"correctPdfPath[0].link\" [href]=\"correctPdfPath[0].link\" target=\"_blank\">{{correctPdfPath[0].name}}</a>\n                    </div>\n                </div>\n                <app-annotation [getAnnotate]=\"areaInfo\"\n                                *ngIf=\"showingType == '1' && isPdfAvailable\"\n                                [getDragQues]=\"dragQuestion\"\n                                [pdfPath]=\"pdfTemplate\"\n                                [toolHide]=\"true\"\n                                [userType]=\"'student'\"></app-annotation>\n                <app-annotation *ngIf=\"showingType == '2' && blink\"\n                                [getAnnotate]=\"sheetInfo\"\n                                [pdfPath]=\"answerSheetPath\"\n                                [toolHide]=\"true\"\n                                [userType]=\"'student'\"></app-annotation>\n            </div>\n            <div *ngIf=\"!questionEmpty && !hideAnswer && !showPDF\" class=\"col-md-{{showpdf && !showQuestion ? 4 : 12}} scrollPanel view-question\" style=\"background-color: rgba(246, 246, 246, 0.6)\">\n                <div *ngFor=\"let sec of totalAns; let i = index\" [ngStyle]=\"{'padding': showpdf === true ? '0.3rem' : '2rem' }\">\n                    <div *ngIf=\"sec.heading != ''\" class=\"col-md-12 mb-3\">\n                        <input [value]=\"sec.heading\" class=\"input-custom-modal div-disable\" type=\"text\">\n                    </div>\n                    <div *ngFor=\"let item of sec.section; let j = index\" class=\"card-body\">\n                        <div [hidden]=\"!item.isShow\" class=\"mb-3\">\n                            <div class=\"row d-flex justify-content-between\">\n                                <div class=\"col-md-1 {{env.deviceType() && item.student_feedback != '' && (item.rough_image_url != '' || item.student_roughdata != '' || item.workarea.length != 0) ? 'px-0' : 'pr-0'}}\">\n                                    <!--                                <button class=\"btn btn-primary\">{{item.sub_question_no}}</button>-->\n                                    <span class=\"pull-left question-no px-0 col-md-12\">{{item.sub_question_no}}</span>\n                                </div>\n                                <div class=\"col-md-{{showpdf == true ? 11 : 10}} align-items-center text-right d-flex justify-content-end flex-wrap pr-0\">\n                                    <div class=\"pull-right px-0 {{showpdf == true ? '' : 'mr-2'}}\">\n                                        <button *ngIf=\"item.rough_image_url != '' || item.student_roughdata != ''\" [attr.aria-controls]=\"'#roughArea' + i + 'id' + j\" [attr.data-target]=\"'#roughArea'  + i + 'id' + j\" aria-expanded=\"false\" class=\"btn-sm btn-primary mr-2\" data-toggle=\"collapse\">your Work Space</button>\n                                        <button *ngIf=\"item.student_feedback != ''\" [attr.aria-controls]=\"'#studentFeedback' + i + 'id' + j\" [attr.data-target]=\"'#studentFeedback' + i + 'id' + j\" aria-expanded=\"false\" class=\"btn-sm btn-primary mr-2\" data-toggle=\"collapse\">your Feedback</button>\n                                        <button (click)=\"openWorkArea(item)\" *ngIf=\"item.workarea.length != 0\" class=\"btn-sm btn-primary mr-2\">Work Area</button>\n                                    </div>\n                                    <div class=\"col-md-{{showpdf == true ? 3 : 2}} px-0\">\n                                        <div class=\"d-flex px-0\">\n                                            <input [value]=\"item.given_points\" class=\"mark-input div-disable\" [ngStyle]=\"{'padding': env.deviceType() ? '6px 4px' : '8px 12px'}\" style=\"text-align: center\">\n                                            <input [value]=\"item.points\" class=\"mark-input div-disable\" [ngStyle]=\"{'padding': env.deviceType() ? '6px 4px' : '8px 12px'}\" style=\"text-align: center\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--                        <div *ngIf=\"showpdf == false\" class=\"col-md-10 text-right\">-->\n                                <!--                            <button [attr.aria-controls]=\"'#studentFeedback' + j\" [attr.data-target]=\"'#studentFeedback' + j\" aria-expanded=\"false\" class=\"btn-sm btn-primary mr-2\" data-toggle=\"collapse\">student feedback</button>-->\n                                <!--                            <input (input)=\"getPoints($event , i, j); markValidation($event, item.points, i, j)\" (keypress)=\"numberValidate($event)\" [value]=\"item.given_points\" autocomplete=\"off\" class=\"mark-input\" name=\"points\" style=\"text-align: center\">-->\n                                <!--                            <input (keypress)=\"numberValidate($event)\" [value]=\"item.points\" class=\"mark-input div-disable\" style=\"text-align: center\">-->\n                                <!--                            <br>-->\n                                <!--                            <span *ngIf=\"item.maxValErr\" class=\"errormessage\">Invalid Points</span>-->\n                                <!--                        </div>-->\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-{{item.rough_image_url != '' || item.student_roughdata != '' ? '6' : '12'}}\">\n                                    <div [hidden]=\"item.question == ''\" [innerHTML]=\"item.question | sanitizeHtml\" class=\"mb-3 mt-2 div-disable\"></div>\n                                    <ul *ngIf=\"item.question_type_id == 1\" class=\"mt-4\">\n                                        <li *ngFor=\"let option of item.array\" [ngClass]=\"{'ans-correct': option.trim().toLowerCase() == item.answer.toString().trim().toLowerCase(), 'ans-selected': option.trim().toLowerCase() == item.student_answer.trim().toLowerCase(), 'ans-wrong': option.trim().toLowerCase() != item.answer.toString().trim().toLowerCase() && option.trim().toLowerCase() == item.student_answer.trim().toLowerCase()}\">\n                                            <span><span>{{option}}</span>\n                                                <i aria-hidden=\"true\" class=\"fa fa-check\"></i>\n                                                <i aria-hidden=\"true\" class=\"fa fa-times\"></i>\n                                            </span>\n                                        </li>\n                                    </ul>\n                                    <ul *ngIf=\"item.question_type_id == 3\" class=\"mt-4\">\n                                        <li [ngClass]=\"{'ans-correct': item.answer.toString() == 'true', 'ans-selected': item.student_answer == 'true', 'ans-wrong': item.answer.toString() == 'false' && item.student_answer == 'true'}\">\n                                            <span><input [checked]=\"item.student_answer == 'true'\" class=\"radio-size form-control mr-2 div-disable\" name=\"ans\" type=\"radio\" value=\"true\"> True\n                                                <i aria-hidden=\"true\" class=\"fa fa-check\"></i>\n                                                <i aria-hidden=\"true\" class=\"fa fa-times\"></i>\n                                            </span>\n                                        </li>\n                                        <li [ngClass]=\"{'ans-correct': item.answer.toString() == 'false', 'ans-selected': item.student_answer == 'false', 'ans-wrong': item.answer.toString() == 'true' && item.student_answer == 'false'}\">\n                                            <span><input [checked]=\"item.student_answer == 'false'\" class=\"radio-size form-control mr-2 div-disable\" name=\"ans\" type=\"radio\" value=\"false\"> False\n                                                <i aria-hidden=\"true\" class=\"fa fa-check\"></i>\n                                                <i aria-hidden=\"true\" class=\"fa fa-times\"></i>\n                                            </span>\n                                        </li>\n                                    </ul>\n                                    <ul *ngIf=\"item.question_type_id == 9\" class=\"mt-4\">\n                                        <li *ngFor=\"let option of item.mob_options\" [ngClass]=\"{'ans-correct': option == item.answer.toString(), 'ans-selected': option == item.student_answer, 'ans-wrong': option != item.answer.toString() && option == item.student_answer}\">\n                                            <span class=\"\">{{option}}\n                                                <i aria-hidden=\"true\" class=\"fa fa-check\"></i>\n                                                <i aria-hidden=\"true\" class=\"fa fa-times\"></i>\n                                            </span>\n                                        </li>\n                                    </ul>\n                                    <div *ngIf=\"item.question_type_id == 10\" class=\"col-md-12 mt-4 px-0\">\n<!--                                        <input [ngClass]=\"{'correct-ans': item.match_case == '1' ? (item.answer == item.student_answer) : item.answer.trim().toLowerCase().split(' ').join('') == item.student_answer.trim().toLowerCase().split(' ').join(''),-->\n<!--                                                            'wrong-ans': item.match_case ? (item.answer != item.student_answer) : item.answer.trim().toLowerCase().split(' ').join('') != item.student_answer.trim().toLowerCase().split(' ').join('')}\"-->\n<!--                                               [value]=\"item.student_answer\"-->\n<!--                                               class=\"form-control div-disable mt-2\"-->\n<!--                                               type=\"text\">-->\n                                        <textarea [ngClass]=\"item.enteredAnswer ? 'correct-ans' : 'wrong-ans'\" [value]=\"item.student_answer\" class=\"form-control mt-2\" cols=\"30\" readonly rows=\"4\"></textarea>\n                                        <label *ngFor=\"let answer of item.answer;let k = index; let first = first\" class=\"mt-{{first ? '4' : '2'}} col-12\"><b>Correct answer {{k+1}} :\n                                            <span class=\"font-weight-light\">{{answer}}</span></b></label>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 20\" class=\"col-md-12 mt-4 px-0\">\n                                        <div class=\"col-md-12\">\n                                            <label class=\"d-flex align-items-center\">\n                                                <b>Your Answer</b>\n                                                <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                                <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                            </label>\n                                            <textarea class=\"form-control\" cols=\"30\" readonly rows=\"4\">{{item.student_answer}}</textarea>\n                                        </div>\n                                        <div class=\"col-md-12 mt-2\">\n                                            <label>No of Lines: </label>\n                                            <input [value]=\"item.answer.toString()\" class=\"form-control\" readonly type=\"text\">\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 30\" class=\"col-md-12 mt-4 px-0\">\n                                        <div class=\"d-flex col-md-12\">\n                                            <label class=\"d-flex align-items-center\">\n                                                <b>Your Answer</b>\n                                                <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                                <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                            </label>\n                                            <h4 [innerHTML]=\"item.student_answer | sanitizeHtml\" class=\"ml-3\"></h4>\n                                        </div>\n                                        <div class=\"d-flex col-12 mt-2\" *ngFor=\"let answer of item.answer; let k = index;\">\n                                            <label class=\"py-1\"><b>Correct Answer {{k+1}}</b></label>\n                                            <h4 [innerHTML]=\"answer | sanitizeHtml\" class=\"ml-3 overflow-auto\"></h4>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 54\" class=\"col-md-12 mt-4 px-0\">\n<!--                                        <div *ngFor=\"let blank of item.student_answer; let k = index\">-->\n<!--                                            <input [ngClass]=\"{'correct-ans': item.match_case == '1' ? (item.answer[k].value == item.student_answer[k]) : item.answer[k].value.trim().toLowerCase().split(' ').join('') == item.student_answer[k].trim().toLowerCase().split(' ').join(''),-->\n<!--                                                            'wrong-ans': item.match_case ? (item.answer[k].value != item.student_answer[k]) : item.answer[k].value.trim().toLowerCase().split(' ').join('') != item.student_answer[k].trim().toLowerCase().split(' ').join('')}\"-->\n<!--                                                   [value]=\"item.student_answer[k]\"-->\n<!--                                                   class=\"form-control div-disable mt-2\"-->\n<!--                                                   type=\"text\">-->\n<!--                                            <label class=\"mt-1\">Correct answer : {{item.answer[k].value}}</label>-->\n<!--                                        </div>-->\n                                        <div *ngFor=\"let blank of item.answer; let k = index\">\n                                            <input *ngIf=\"item.student_answer[k]\" [ngClass]=\"{'correct-ans': item.match_case == '1' ? (blank.value == item.student_answer[k]) : blank.value.trim().toLowerCase().split(' ').join('') == item.student_answer[k].trim().toLowerCase().split(' ').join(''),\n                                                            'wrong-ans': item.match_case ? (blank.value != item.student_answer[k]) : blank.value.trim().toLowerCase().split(' ').join('') != item.student_answer[k].trim().toLowerCase().split(' ').join('')}\"\n                                                   [value]=\"item.student_answer[k]\"\n                                                   class=\"form-control div-disable mt-2\"\n                                                   type=\"text\">\n                                            <input *ngIf=\"item.student_answer[k] == undefined || item.student_answer[k] == ''\" class=\"form-control div-disable mt-2 wrong-ans\" type=\"text\">\n                                            <label class=\"mt-1\"><b>Correct answer : {{blank.value}}</b></label>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"item.rough_image_url != '' || item.student_roughdata != ''\" class=\"col-md-{{showpdf ? 6 : 3}}\">\n                                    <div class=\"row mt-3 px-3\">\n                                        <div class=\"col-md-12 collapse px-0\" id=\"roughArea{{i}}id{{j}}\">\n                                            <img *ngIf=\"item.rough_image_url != ''\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + item.rough_image_url)\" class=\"customize-card2 col-md-12 pull-right\">\n                                            <div *ngIf=\"item.student_roughdata != ''\" [innerHTML]=\"item.student_roughdata | sanitizeHtml\" class=\"customize-card col-md-12 px-3\" style=\"text-align: center\"></div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"item.student_feedback != ''\" class=\"col-md-{{showpdf ? 6 : 3}}\">\n                                    <div class=\"row mt-3 px-3\">\n                                        <div class=\"col-md-12 collapse px-0\" id=\"studentFeedback{{i}}id{{j}}\">\n                                            <div *ngIf=\"item.student_feedback != ''\" class=\"customize-card col-md-12 px-3\">{{item.student_feedback}}</div>\n                                            <div *ngIf=\"item.student_feedback == ''\" class=\"customize-card col-md-12 px-3\" style=\"text-align: center\">No Feedback Found</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <div *ngIf=\"item.question_type_id == 40\" class=\"col-md-12 mt-4 px-0 {{showpdf ? '' : 'd-flex'}}\">\n                                        <div [hidden]=\"item.question == ''\" [innerHTML]=\"item.question | sanitizeHtml\" class=\"mb-3 mt-2\"></div>\n                                        <div class=\"col-md-{{showpdf ? 12 : 6}} div-disable\">\n                                            <label class=\"py-1\"><b>Correct Answer</b></label>\n                                            <app-graph-component [editMode]=\"false\"\n                                                                 [editPatchValue]=\"parseVal(item.answer)\"\n                                                                 [graphId]=\"i+'correctgraph'+item.sub_question_no+'id'\"\n                                                                 [questionType]=\"'40'\"></app-graph-component>\n                                            <div *ngIf=\"item.question_editor_answer != ''\" class=\"col-md-12 mt-4\">\n                                                <h4 [innerHTML]=\"item.question_editor_answer | sanitizeHtml\" class=\"innerhtml-margin-clear form-span\"></h4>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-{{showpdf ? 12 : 6}} div-disable {{showpdf ? 'mt-3' : ''}}\">\n                                            <label class=\"d-flex align-items-center\">\n                                                <b>Your Answer</b>\n                                                <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                                <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                            </label>\n                                            <app-graph-component *ngIf=\"item.student_answer != ''\"\n                                                                 [editMode]=\"false\"\n                                                                 [editPatchValue]=\"parseVal(item.student_answer[0].correctAnswer)\"\n                                                                 [graphId]=\"i+'Editgraph'+item.sub_question_no+'id'\"\n                                                                 [questionType]=\"'40'\"></app-graph-component>\n                                            <app-graph-component *ngIf=\"item.student_answer == ''\"\n                                                                 [editMode]=\"false\"\n                                                                 [editPatchValue]=\"false\"\n                                                                 [graphId]=\"i+'Editgraphnull'+item.sub_question_no+'id'\"\n                                                                 [questionType]=\"'40'\"></app-graph-component>\n                                            <div *ngIf=\"item.editor_answer != ''\" class=\"col-md-12 mt-4\">\n                                                <h4 [innerHTML]=\"item.editor_answer | sanitizeHtml\" class=\"innerhtml-margin-clear\"  [ngClass]=\"item.given_points == item.points ? 'form-span-correct' : 'form-span-wrong'\"></h4>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"item.answer_explanation != ''\" class=\"row mt-4 d-flex\">\n                                <div class=\"col-md-12\">\n                                    <label>Explanation: </label>\n                                    <h4 [innerHTML]=\"item.answer_explanation | sanitizeHtml\" class=\"explanation scorecard-scroll\"></h4>\n                                </div>\n                            </div>\n                            <div *ngIf=\"item.student_feedback != ''\" class=\"row mt-4 d-flex\">\n                                <div class=\"col-md-12\">\n                                    <label>Teacher Feedback: </label>\n                                    <textarea [value]=\"item.feedback\" class=\"form-control\" placeholder=\"No Feedback Found\" readonly rows=\"3\"></textarea>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"correctPdfPath.length == 0\" class=\"row mt-{{totalAns.length == 1 && totalAns[0]?.question_type_id == 55 ? '0' : '3'}} view-question\" (keypress)=\"$event.preventDefault()\">\n        <div [ngStyle]=\"{'max-height': totalFeedbackMaxHeight}\" *ngFor=\"let item of totalAns; let i = index\" class=\"{{isSingleQnsWithFeedbackType && previousFeedBack.length != 0 ? 'col-md-6 pr-0 content-card' : 'col-md-12'}}\">\n            <div class=\"card p-3 mb-3\">\n                <div [hidden]=\"!item.isShow\">\n                    <div class=\"col-md-12 pl-1 pr-0 justify-content-between d-flex align-items-center\" *ngIf=\"!(totalAns.length == 1 && item.question_type_id == 55)\">\n                        <div class=\"w-5 d-flex align-items-center\">\n                            <span class=\"pull-left question-no col-md-10 mr-3\">{{item.question_no}}</span>\n                            <div *ngIf=\"item.question_type_id != '24'\">\n                                <i class=\"fa fa-check-circle fa-2x text-success\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                <i class=\"fa fa-times-circle fa-2x text-danger\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                            </div>\n                            <div *ngIf=\"item.question_type_id == '24'\">\n\n                                <i class=\"fa fa-check-circle fa-2x text-success\" aria-hidden=\"true\" *ngIf=\"item.subQuestions[0]?.given_points == item.subQuestions[0]?.points\"></i>\n                                <i class=\"fa fa-times-circle fa-2x text-danger\" aria-hidden=\"true\" *ngIf=\"item.subQuestions[0]?.given_points != item.subQuestions[0]?.points\"></i>\n                            </div>\n\n                        </div>\n                        <div class=\"w-95 d-flex justify-content-end\">\n                            <div class=\"col-md-2 d-inline-flex px-0 align-content-center justify-content-end\">\n                                <div class=\"d-flex mr-3 align-items-center\">\n                                    <div class=\"w-auto text-center\">\n                                        <h4 style=\"font-size: 18px\" class=\"mb-0\" *ngIf=\"getElapsedTime(item) as elapsed\"><b>{{elapsed.minutes}}</b></h4>\n                                    </div>\n                                    <div class=\"w-auto mx-2\">\n                                        <h4 class=\"mb-0 font-weight-bold\">:</h4>\n                                    </div>\n                                    <div class=\"w-auto text-center\">\n                                        <h4 style=\"font-size: 18px\" class=\"mb-0\" *ngIf=\"getElapsedTime(item) as elapsed\"><b>{{elapsed.seconds}}</b></h4>\n                                    </div>\n                                </div>\n                                <h5 class=\"mb-0 font-weight-bold\">Score:\n                                    <span *ngIf=\"item.question_type_id != '24'\" class=\"color-primary\">{{item.given_points}} / {{item.points}}</span>\n                                    <span *ngIf=\"item.question_type_id == '24'\" class=\"color-primary\">{{item.subQuestions[0]?.given_points}} / {{item.subQuestions[0]?.points}}</span>\n                                </h5>\n                            </div>\n                        </div>\n                    </div>\n<!--                    <div *ngIf=\"item.question_type_id != 24\" class=\"col-md-6\">-->\n<!--                        <div class=\"row mt-3 px-3\">-->\n<!--                            <div class=\"col-md-12 collapse px-0\" id=\"roughAreaCfs{{i}}\">-->\n<!--                                <div *ngIf=\"item.student_roughdata != ''\" [innerHTML]=\"item.student_roughdata | sanitizeHtml\" class=\"innerhtml-margin-clear customize-card col-md-12 px-3\"></div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                    <div *ngIf=\"item.question_type_id != 24\" class=\"col-md-6\">-->\n<!--                        <div class=\"row mt-3 px-3\">-->\n<!--                            <div class=\"col-md-12 collapse px-0\" id=\"studentFeedbackCfs{{i}}\">-->\n<!--                                <div *ngIf=\"item.student_feedback != ''\" class=\"customize-card col-md-12 px-3\">{{item.student_feedback}}</div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n                    <div class=\"col-md-12\">\n                        <div class=\"mt-{{totalAns.length == 1 && item.question_type_id == 55 ? '1' : '4'}} mb-2 editor_bullet\">\n                            <div *ngIf=\"item.question != '' && item.question_type_id != 24 && item.question_type_id != 55\" [innerHTML]=\"item.question | sanitizeHtml\" class=\"mb-0 overflow-auto div-disable\"></div>\n                            <div *ngIf=\"item.question != '' && item.question_type_id == 55\" [innerHTML]=\"convertMarkdownToHtml(item.question, 'single')\" class=\"mb-0 overflow-auto div-disable\"></div>\n                            <div *ngIf=\"item.question != '' && item.question_type_id == 24\"\n                                 [innerHTML]=\"item.subQuestions[0]?.passage | sanitizeHtml\" class=\"mb-0 overflow-auto div-disable\"></div>\n                        </div>\n                        <div *ngIf=\"item.question_type_id == 1 || item.question_type_id == 2\" class=\"col-md-12 px-0 d-flex mt-4\">\n                            <div class=\"col-md-6 mb-2\">\n                                <label class=\"d-flex align-items-center\">\n                                    <b>Your Answer</b>\n                                    <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                    <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                </label>\n                                <div *ngFor=\"let option of item.student_answer; let k = index\" [ngClass]=\"{'correct-ans-selected' : option.isSelected === '' ? false : option.isSelected == k ? item.given_points == item.points : false, 'wrong-ans-selected' : option.isSelected === '' ? false : option.isSelected == k ? item.given_points != item.points : false}\" class=\"col-md-12 mb-3 mx-3 p-2 d-flex align-items-center\">\n                                    <button class=\"btn-primary inner_button mr-3\">{{((k+1) + 9).toString(36).toUpperCase()}}</button>\n                                    <span [innerHTML]=\"option.options | sanitizeHtml\" class=\"remove-margin-bottom\"></span>\n                                </div>\n\n                                <div style=\"padding: 12px\" *ngIf=\"item.student_answer.length == 0\" class=\"col-md-12 d-flex align-items-center wrong-ans-selected\">\n                                    <span class=\"remove-margin-bottom\">Student Not Answered</span>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6 mb-2\">\n                                <label class=\"py-1\"><b>Correct Answer</b></label>\n                                <div [ngClass]=\"{'correct-ans-selected' : option.correctAnswer != ''}\"\n                                    *ngFor=\"let option of item.answer; let k = index\" style=\"max-height: 20rem\"\n                                        class=\"{{option.correctAnswer != '' ? 'mx-2 p-2 mb-2 overflow-auto row' : ''}}\">\n                                    <button *ngIf=\"option.correctAnswer != ''\" class=\"btn-primary inner_button\">{{((k+1) + 9).toString(36).toUpperCase()}}</button>\n                                    <div class=\"col-11 pt-1 pr-0\" *ngIf=\"option.correctAnswer != ''\">\n                                        <span [innerHTML]=\"item.options[k].options | sanitizeHtml\" class=\"remove-margin-bottom\"></span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"item.question_type_id == 5 || item.question_type_id == 7\" class=\"col-md-12 px-0 d-flex mt-4\">\n                            <div class=\"col-md-6 table-flexible\">\n                                <label class=\"d-flex align-items-center\">\n                                    <b>Your Answer</b>\n                                    <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                    <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                </label>\n\n                                <div style=\"padding: 12px\" *ngIf=\"item.student_answer.length == 0\" class=\"col-md-12 d-flex align-items-center wrong-ans-selected\">\n                                    <span class=\"remove-margin-bottom\">Student Not Answered</span>\n                                </div>\n\n                                <table *ngIf=\"item.student_answer.length != 0\" class=\"table table-bordered text-center div-disable\">\n                                    <thead>\n                                    <tr>\n                                        <th>Questions</th>\n                                        <th *ngFor=\"let list of item.answer; let k=index\" [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\" id=\"{{'columnId' + i}}\"></th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                    <tr *ngFor=\"let list of item.student_answer; let j=index\">\n                                        <td [innerHTML]=\"list.options | sanitizeHtml\" class=\"remove-margin-bottom\"></td>\n                                        <td *ngFor=\"let ans of item.answer; let k=index\">\n                                            <input *ngIf=\"item.question_type_id == '5'\" [checked]=\"this.totalAns[i].student_answer[j].isSelected == '' ? false : this.totalAns[i].student_answer[j].isSelected == k.toString()\" class=\"radio_animated\" id=\"{{j}}chooseSingle{{i}}\" name=\"{{i}}choosesingle{{j}}your\" type=\"radio\">\n                                            <input *ngIf=\"item.question_type_id == '7'\" [checked]=\"splitMultiChoose(this.totalAns[i].student_answer[j].isSelected, k)\" id=\"{{j}}chooseMulti{{i}}\" type=\"checkbox\">\n                                        </td>\n                                    </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                            <div class=\"col-md-6 table-flexible\">\n                                <label class=\"py-1\"><b>Correct Answer</b></label>\n                                <table class=\"table table-bordered text-center div-disable\">\n                                    <thead>\n                                    <tr>\n                                        <th>Questions</th>\n                                        <th *ngFor=\"let list of item.answer; let k=index\" [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\"></th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                    <tr *ngFor=\"let list of item.student_answer; let j=index\">\n                                        <td [innerHTML]=\"list.options | sanitizeHtml\" class=\"remove-margin-bottom\"></td>\n                                        <td *ngFor=\"let ans of item.answer; let k=index\">\n                                            <input *ngIf=\"item.question_type_id == '5'\" [checked]=\"item.heading_option[j].correctActive === k\" class=\"radio_animated\" name=\"{{i}}choosesingle{{j}}corect\" type=\"radio\">\n                                            <input *ngIf=\"item.question_type_id == '7'\" id=\"chooseMultipass{{i}}{{j}}{{k}}\" type=\"checkbox\">\n                                        </td>\n                                    </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                        <div *ngIf=\"item.question_type_id == 9\" class=\"col-md-12 px-0 d-flex mt-4\">\n                            <div class=\"col-md-6\">\n                                <label class=\"d-flex align-items-center\">\n                                    <b>Your Answer</b>\n                                    <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                    <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                </label>\n                                <div style=\"padding: 12px\" *ngIf=\"item.student_answer.length == 0\" class=\"col-md-12 mt-3 d-flex align-items-center wrong-ans-selected\">\n                                    <span class=\"remove-margin-bottom\">Student Not Answered</span>\n                                </div>\n                                <div *ngFor=\"let data of item.student_answer; let j = index\" class=\"col-md-12 mt-3 mb-3\">\n                                    <label>Dropdown - {{j+1}}</label>\n                                    <div class=\"col-md-11\">\n                                        <div class=\"col-md-12 bg-white innerhtml-margin-clear p-2 dropdown-toggle d-flex justify-content-between\"  [ngClass]=\"item.given_points == item.points ? 'dropdown-border-correct' : 'dropdown-border-wrong'\" data-toggle=\"dropdown\" id=\"{{i}}dropdown{{j}}\"></div>\n                                        <div class=\"col-md-11 dropdown-menu\">\n                                            <span *ngFor=\"let option of data.options; let k = index\"\n                                                  [innerHTML]=\"option.listOption | sanitizeHtml\"\n                                                  class=\"dropdown-item dropdown-link innerhtml-margin-clear\"\n                                                  style=\"overflow: scroll; overflow-y: hidden\"></span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label class=\"py-1\"><b>Correct Answer</b></label>\n                                <div *ngFor=\"let data of item.answer; let j = index\" class=\"col-md-12 mt-3 mb-3\">\n                                    <label>Dropdown - {{j+1}}</label>\n                                    <div class=\"col-md-11\">\n                                        <div class=\"col-md-12 bg-white innerhtml-margin-clear p-2 dropdown-border dropdown-toggle d-flex justify-content-between\" data-toggle=\"dropdown\" id=\"{{i}}dropdownCorrect{{j}}\"></div>\n                                        <div class=\"col-md-11 dropdown-menu\">\n                                            <span *ngFor=\"let option of data.options; let k = index\"\n                                                  [innerHTML]=\"option.listOption | sanitizeHtml\"\n                                                  class=\"dropdown-item dropdown-link innerhtml-margin-clear\"\n                                                  style=\"overflow: scroll; overflow-y: hidden\"></span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"item.question_type_id == 10\" class=\"col-md-12 d-flex mt-4\">\n                            <div class=\"col-md-6\">\n                                <label class=\"d-flex align-items-center\">\n                                    <b>Your Answer</b>\n                                    <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                    <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                </label>\n                                <div *ngFor=\"let data of item.student_answer; let j = index\" class=\"col-md-12 mt-3 mb-3\">\n                                    <label>Input - {{j+1}}</label>\n                                    <div [ngClass]=\"item.given_points == item.points ? 'form-span-correct' : 'form-span-wrong'\">\n                                        <div *ngIf=\"data.isSelected != ''\" [innerHTML]=\"data.isSelected | sanitizeHtml\"></div>\n                                        <div *ngIf=\"data.isSelected == ''\">Student Not Answered</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label class=\"py-1\"><b>Correct Answer</b></label>\n                                <div *ngFor=\"let data of item.options; let j = index\" class=\"col-md-12 mt-3 mb-3\">\n                                    <label>Input - {{j+1}}</label>\n                                    <div class=\"form-span\">\n                                        <div [innerHTML]=\"data.options[0].value | sanitizeHtml\"></div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"item.question_type_id == 16\" class=\"col-md-12 d-flex mt-4\">\n                            <div class=\"col-md-6\">\n                                <label class=\"d-flex align-items-center\">\n                                    <b>Your Answer</b>\n                                    <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                    <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                </label>\n\n                                <div style=\"padding: 12px\" *ngIf=\"item.student_answer.length == 0\" class=\"col-md-12 d-flex align-items-center wrong-ans-selected\">\n                                    <span class=\"remove-margin-bottom\">Student Not Answered</span>\n                                </div>\n\n                                <div class=\"col-12\" *ngIf=\"item.student_answer.length != 0\">\n                                    <div *ngFor=\"let list of item.student_answer; let k=index\" class=\"input-group mb-3 mt-3 inputMenu\">\n                                        <div class=\"input-group mb-1 inputMenu editor_bullet\">\n                                            <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">\n                                            <img class=\"img-fluid\" src=\"assets/images/pdf-icons/equal@2x.png\">\n                                        </span>\n                                            </div>\n                                            <h4 [innerHTML]=\"list.options | sanitizeHtml\" class=\"form-control mb-0 pt-4 pb-5 overflow-scroll\"></h4>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label class=\"py-1\"><b>Correct Answer</b></label>\n                                <div class=\"col-12\">\n                                    <div *ngFor=\"let list of item.answer; let k=index\" class=\"input-group mb-3 mt-3 inputMenu\">\n                                        <div class=\"input-group mb-1 inputMenu editor_bullet\">\n                                            <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">\n                                            <img class=\"img-fluid\" src=\"assets/images/pdf-icons/equal@2x.png\">\n                                        </span>\n                                            </div>\n                                            <h4 [innerHTML]=\"list.correctAnswer | sanitizeHtml\" class=\"form-control mb-0 pt-4 pb-5 overflow-scroll\"></h4>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"item.question_type_id == 20\" class=\"col-md-12 d-flex mt-4\">\n                            <div class=\"col-md-6\">\n                                <label class=\"d-flex align-items-center\">\n                                    <b>Your Answer</b>\n                                    <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                    <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                </label>\n                                <div class=\"editor_bullet\" [ngClass]=\"item.given_points == item.points ? 'form-span-correct' : 'form-span-wrong'\">\n                                    <div *ngIf=\"item.student_answer[0]?.isSelected != ''\" [innerHTML]=\"item.student_answer[0]?.isSelected | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>\n                                    <div *ngIf=\"item.student_answer[0]?.isSelected == ''\">Student Not Answered</div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div *ngFor=\"let answer of item.answer;let i = index\">\n                                    <label class=\"py-1\"><b>Correct Answer {{i + 1}}</b></label>\n                                    <div class=\"mb-2 form-span editor_bullet\">\n                                        <div [innerHTML]=\"answer.correctAnswer | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div *ngIf=\"['55'].indexOf(item.question_type_id) > -1\" class=\"row px-0\">\n\n                            <div class=\"col-md-12 my-3\">\n                                <div class=\"row\">\n\n                                    <h5 class=\"font-weight-bold col-5 align-self-center\">Your Answer\n                                        <span *ngIf=\"selectedFeedBackIndex == ''\"> - Current Version</span>\n                                        <span *ngIf=\"selectedFeedBackIndex != ''\"> - Version {{selectedFeedBackIndex}}</span>\n                                    </h5>\n                                    <div class=\"col-7 text-right mb-2\">\n                                        <div class=\"row justify-content-end align-items-end pr-3\">\n                                            <div class=\"col-8 text-left pr-2\" *ngIf=\"previousFeedBack.length != 0\">\n                                                <label class=\"label_design\">Select Version</label>\n                                                <ng-select\n                                                        [items]=\"previousFeedBack\"\n                                                        bindLabel=\"version_name\"\n                                                        bindValue=\"index\"\n                                                        [clearable]=\"false\"\n                                                        (change)=\"feedbackSelected($event)\"\n                                                        [(ngModel)]=\"selectedVersion\"\n                                                        placeholder=\"Please Select\"\n                                                >\n                                                    <ng-template ng-option-tmp let-feedback=\"item\" let-index=\"index\">\n                                                        <div class=\"d-flex align-items-center justify-content-between w-100\">\n                                                            <div>\n                                                                <h5 class=\"mb-0 d-inline-flex\" style=\"font-size: 14px\"\n                                                                    [ngClass]=\"{'color-primary': selectedFeedBackIndex === previousFeedBack.length - index}\">\n                                                                    Version {{ previousFeedBack.length - index }}\n                                                                    <span class=\"badge badge-info ml-2\" style=\"align-content: center; padding: 4px 8px\">\n                                                                        {{ feedback?.student_score }} / {{ feedback?.total_score }}\n                                                                    </span>\n                                                                </h5>\n                                                            </div>\n                                                            <span class=\"badge\" [ngClass]=\"{'badge-exceptional':\n                                                                getFeedbackLabel(feedback).label === 'Exceptional','badge-good': getFeedbackLabel(feedback).label === 'Good',\n                                                                'badge-improve': getFeedbackLabel(feedback).label === 'Improve'}\">\n                                                                {{ getFeedbackLabel(feedback).label }}</span>\n                                                        </div>\n                                                    </ng-template>\n                                                </ng-select>\n                                            </div>\n                                            <div class=\"dropdown\" *ngIf=\"selectedFeedBackIndex == previousFeedBack.length && studentAnswer?.status == '3'\n                                        && selectedPreviousStudentAnswer?.version != 'V1'\">\n                                                <button class=\"btn btn-outline-primary px-3\"><i\n                                                        class=\"fa fa-print mr-2\" aria-hidden=\"true\"></i>Print<i\n                                                        class=\"fa fa-sort-desc float-right ml-2\" aria-hidden=\"true\"></i>\n                                                </button>\n                                                <div class=\"dropdown-content text-left\" style=\"right: 1px\">\n                                                    <a class=\"cursor\" (click)=\"common.printReport('Without')\">\n                                                        <img style=\"width: 20px\" src=\"assets/images/without-feedback.png\" class=\"mr-2\">Without Feedback</a>\n                                                    <a class=\"cursor\" (click)=\"common.printReport()\">\n                                                        <img style=\"width: 18px\" src=\"assets/images/report-feedback.png\" class=\"mr-2\">With Feedback</a>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"item.student_answer[0]?.isSelected != ''\" class=\"form-span feedback-card col-md-12 d-flex editor_bullet\">\n                                    <span [innerHTML]=\"convertedText && convertedText != '' ? convertMarkdownToHtml(selectedPreviousStudentAnswer?.student_answer) : convertMarkdownToHtml(item.student_answer[0]?.isSelected, 'single')\" class=\"innerhtml-margin-clear\"></span>\n                                </div>\n                                <div *ngIf=\"item.student_answer[0]?.isSelected == ''\" class=\"col-md-12 d-flex p-2\">\n                                    <span class=\"form-span\">You Have Not Answered</span>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div *ngIf=\"item.question_type_id == 24\" class=\"mt-2\">\n                            <div *ngFor=\"let sec of item.subQuestions; let j = index\" class=\"mb-3\">\n                                <div [innerHTML]=\"sec.question | sanitizeHtml\" class=\"mb-3\"></div>\n                                <div *ngIf=\"sec.question_type_id == '1' || sec.question_type_id == '2'\" class=\"col-md-12 px-0 d-flex mt-3\">\n                                    <div class=\"col-md-6 mb-2\">\n                                        <label class=\"d-flex align-items-center\">\n                                            <b>Your Answer</b>\n                                            <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"sec.given_points == sec.points\"></i>\n                                            <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"sec.given_points != sec.points\"></i>\n                                        </label>\n                                        <div *ngFor=\"let option of sec.student_answer; let k = index\" [ngClass]=\"{'correct-ans-selected' : option.isSelected === '' ? false : option.isSelected == k ? sec.given_points == sec.points : false, 'wrong-ans-selected' : option.isSelected === '' ? false : option.isSelected == k ? sec.given_points != sec.points : false}\" class=\"col-md-12 mb-3 mx-3 p-2 d-flex align-items-center\">\n                                            <button class=\"btn-primary inner_button mr-3\">{{((k+1) + 9).toString(36).toUpperCase()}}</button>\n                                            <span [innerHTML]=\"option.options | sanitizeHtml\" class=\"remove-margin-bottom\"></span>\n                                        </div>\n\n                                        <div *ngIf=\"sec.student_answer.length == 0\" style=\"padding: 12px\" class=\"col-md-12 d-flex align-items-center wrong-ans-selected\">\n                                            <span class=\"remove-margin-bottom\">Student Not Answered</span>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6 mb-2\">\n                                        <label class=\"py-1\"><b>Correct Answer</b></label>\n                                        <div [ngClass]=\"{'correct-ans-selected' : option.correctAnswer !== ''}\"\n                                            *ngFor=\"let option of sec.answer; let k = index\" style=\"max-height: 20rem\"\n                                                class=\"{{option.correctAnswer !== '' ? 'mx-2 p-2 mb-2 overflow-auto row' : ''}}\">\n                                            <button *ngIf=\"option.correctAnswer !== ''\" class=\"btn-primary inner_button\">{{((k+1) + 9).toString(36).toUpperCase()}}</button>\n                                            <div class=\"col-11 pt-1 pr-0\" *ngIf=\"option.correctAnswer !== ''\">\n                                                <span [innerHTML]=\"sec.options[k].options | sanitizeHtml\" class=\"remove-margin-bottom\"></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"sec.question_type_id == '5' || sec.question_type_id == '7'\" class=\"col-md-12 px-0 d-flex\">\n                                    <div class=\"col-md-6 table-flexible\">\n                                        <label class=\"d-flex align-items-center\">\n                                            <b>Your Answer</b>\n                                            <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"sec.given_points == sec.points\"></i>\n                                            <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"sec.given_points != sec.points\"></i>\n                                        </label>\n\n                                        <div *ngIf=\"sec.student_answer.length == 0\" style=\"padding: 12px\" class=\"col-md-12 d-flex align-items-center wrong-ans-selected\">\n                                            <span class=\"remove-margin-bottom\">Student Not Answered</span>\n                                        </div>\n\n                                        <table *ngIf=\"sec.student_answer.length != 0\" class=\"table table-bordered text-center div-disable\">\n                                            <thead>\n                                            <tr>\n                                                <th>Questions</th>\n                                                <th *ngFor=\"let list of sec.answer; let l=index\" [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\"></th>\n                                            </tr>\n                                            </thead>\n                                            <tbody>\n                                            <tr *ngFor=\"let list of sec.student_answer; let k=index\">\n                                                <td [innerHTML]=\"list.options | sanitizeHtml\" class=\"remove-margin-bottom\"></td>\n                                                <td *ngFor=\"let ans of sec.answer; let l=index\">\n                                                    <input *ngIf=\"sec.question_type_id == '5'\" [checked]=\"sec.student_answer[k].isSelected == '' ? false : sec.student_answer[k].isSelected == l.toString()\" class=\"radio_animated\" name=\"{{j}}choo{{i}}se{{k}}if\" type=\"radio\">\n                                                    <input *ngIf=\"sec.question_type_id == '7'\" [checked]=\"splitMultiChoose(sec.student_answer[k].isSelected, l)\" type=\"checkbox\">\n                                                </td>\n                                            </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                    <div class=\"col-md-6 table-flexible\">\n                                        <label class=\"py-1\"><b>Correct Answer</b></label>\n                                        <table class=\"table table-bordered text-center div-disable\">\n                                            <thead>\n                                            <tr>\n                                                <th>Questions</th>\n                                                <th *ngFor=\"let list of sec.answer; let l=index\" [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\"></th>\n                                            </tr>\n                                            </thead>\n                                            <tbody>\n                                            <tr *ngFor=\"let list of sec.student_answer; let k=index\">\n                                                <td [innerHTML]=\"list.options\" class=\"remove-margin-bottom\"></td>\n                                                <td *ngFor=\"let ans of sec.answer; let l=index\">\n                                                    <input *ngIf=\"sec.question_type_id == '5'\" [checked]=\"sec.heading_option[k].correctActive == l\" class=\"radio_animated\" name=\"{{i}}passage{{j}}cho{{k}}ose{{l}}\" type=\"radio\">\n                                                    <input *ngIf=\"sec.question_type_id == '7'\" id=\"chooseMultipass1{{i}}{{j}}{{k}}{{l}}\" type=\"checkbox\">\n                                                </td>\n                                            </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"sec.question_type_id == '10'\" class=\"col-md-12 px-0 d-flex\">\n                                    <div class=\"col-md-6 px-0\">\n                                        <label class=\"d-flex align-items-center\">\n                                            <b>Your Answer</b>\n                                            <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"sec.given_points == sec.points\"></i>\n                                            <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"sec.given_points != sec.points\"></i>\n                                        </label>\n\n                                        <div *ngIf=\"sec.student_answer.length == 0\" style=\"padding: 12px\" class=\"mt-3 col-md-12 d-flex align-items-center wrong-ans-selected\">\n                                            <span class=\"remove-margin-bottom\">Student Not Answered</span>\n                                        </div>\n\n                                        <div *ngFor=\"let data of sec.student_answer;let k = index\" class=\"col-md-12 mt-3 mb-3\">\n                                            <label>Input - {{k+1}}</label>\n                                            <div [ngClass]=\"sec.given_points == sec.points ? 'form-span-correct' : 'form-span-wrong'\">\n                                                <div *ngIf=\"data.isSelected != ''\" [innerHTML]=\"data.isSelected | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>\n                                                <div *ngIf=\"data.isSelected == ''\">Student Not Answered</div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6 px-0\">\n                                        <label class=\"py-1\"><b>Correct Answer</b></label>\n                                        <div *ngFor=\"let data of sec.options; let k = index\" class=\"col-md-12 mt-3 mb-3\">\n                                            <label>Input - {{k+1}}</label>\n                                            <div class=\"form-span\">\n                                                <div [innerHTML]=\"data.options[0].value | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"sec.question_type_id == '20'\" class=\"col-md-12 px-0 d-flex\">\n                                    <div class=\"col-md-6\">\n                                        <label class=\"d-flex align-items-center\">\n                                            <b>Your Answer</b>\n                                            <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"sec.given_points == sec.points\"></i>\n                                            <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"sec.given_points != sec.points\"></i>\n                                        </label>\n                                        <div class=\"editor_bullet\" [ngClass]=\"sec.given_points == sec.points ? 'form-span-correct' : 'form-span-wrong'\">\n                                            <div *ngIf=\"sec.student_answer[0]?.isSelected != ''\" [innerHTML]=\"sec.student_answer[0].isSelected | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>\n                                            <div *ngIf=\"sec.student_answer[0]?.isSelected == ''\">Student Not Answered</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <div *ngFor=\"let answer of sec.answer;let i = index\">\n                                            <label class=\"{{i == 0 ? 'py-1' : ''}}\"><b>Correct Answer {{i + 1}}</b></label>\n                                            <div class=\"mb-2 form-span editor_bullet\">\n                                                <div [innerHTML]=\"answer.correctAnswer | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-12 mt-2\">\n                                    <div class=\"card explanation\">\n                                        <div class=\"card-body\">\n                                            <div class=\"row\">\n                                                <div class=\"col-4 mb-3\">\n                                                    <label class=\"m-0\"><b>Subject:</b></label>\n                                                    <p>{{sec?.subject_name ? sec?.subject_name : '-'}}</p>\n                                                </div>\n                                                <div class=\"col-4 mb-3\">\n                                                    <label class=\"m-0\"><b>Topic:</b></label>\n                                                    <p>{{sec?.question_topic ? sec?.question_topic : '-'}}</p>\n                                                </div>\n                                                <div class=\"col-4 mb-3\">\n                                                    <label class=\"m-0\"><b>Sub Topic:</b></label>\n                                                    <p>{{sec?.sub_topic ? sec?.sub_topic : '-'}}</p>\n                                                </div>\n                                                <div class=\"col-4 mb-3\">\n                                                    <label class=\"m-0\"><b>Skill:</b></label>\n                                                    <p *ngIf=\"sec?.skill\">\n                                                        <span *ngIf=\"sec?.skill.length == 0\">-</span>\n                                                        <span *ngFor=\"let skill of sec?.skill; let last = last\">{{skill}}<span *ngIf=\"!last\">, </span></span>\n                                                    </p>\n                                                    <p *ngIf=\"!sec.skill\">-</p>\n                                                </div>\n                                                <div class=\"col-4 mb-3\">\n                                                    <label class=\"m-0\"><b>Standard:</b></label>\n                                                    <p>{{sec?.question_standard_name ? sec?.question_standard_name : '-'}}</p>\n                                                </div>\n                                                <div class=\"col-4 mb-3\">\n                                                    <label class=\"m-0\"><b>Difficulty:</b></label>\n                                                    <p>{{sec.level == '1' ? 'Easy' : sec.level == '2' ? 'Medium' : 'Difficult'}}</p>\n                                                </div>\n                                                <div class=\"col-4\">\n                                                    <label class=\"m-0\"><b>Points:</b></label>\n                                                    <p>{{sec?.points ? sec?.points : '-'}}</p>\n                                                </div>\n                                                <div class=\"col-4\">\n                                                    <label class=\"m-0\"><b>Predicted Solving Time:</b></label>\n                                                    <p>{{sec?.predicted_solving_time ? sec?.predicted_solving_time : '-'}}</p>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"sec.student_feedback != '' || sec.student_roughdata != ''\" class=\"col-md-12 mb-3\">\n                                    <div class=\"row mt-3 px-3\">\n                                        <div class=\"col-md-{{sec.student_roughdata != '' ? '6' : '12'}} px-0\" id=\"studentFeedback{{i}}\" *ngIf=\"sec.student_feedback != ''\">\n                                            <h5 class=\"font-weight-bold\">Your Feedback:</h5>\n                                            <div class=\"feedback-card col-md-12\">{{sec.student_feedback}}</div>\n                                        </div>\n                                        <div *ngIf=\"sec.student_roughdata != ''\" class=\"col-md-{{sec.student_feedback != '' ? '6' : '12'}} px-0\" id=\"studentRoughData{{i}}\">\n                                            <h5 class=\"font-weight-bold ml-{{sec.student_feedback == '' ? '0' : '3'}}\">Your Workspace</h5>\n                                            <div [innerHTML]=\"sec.student_roughdata | sanitizeHtml\" class=\"feedback-card innerhtml-margin-clear col-md-12 ml-{{sec.student_feedback == '' ? '0' : '3'}}\"></div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"sec.explanation != ''\" class=\"col-md-12 mt-4 d-flex\">\n                                    <div class=\"col-md-12 px-0\">\n                                        <label class=\"font-weight-bold\">Explanation: </label>\n                                        <div class=\"explanation innerhtml-margin-clear\" [innerHTML]=\"sec.explanation | sanitizeHtml\"></div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12 mt-3\" *ngIf=\"sec.resource != ''\">\n                                    <label class=\"font-weight-bold\">Resource: </label>\n                                    <div class=\"explanation innerhtml-margin-clear\" [innerHTML]=\"sec.resource | sanitizeHtml\"></div>\n                                </div>\n\n                                <div class=\"col-md-12 mt-3\" *ngIf=\"sec.feedback != ''\">\n                                    <label>Feedback</label>\n                                    <textarea [value]=\"sec.feedback\" class=\"form-control\" cols=\"30\" placeholder=\"Please Enter the Feedback\" readonly rows=\"2\"></textarea>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"item.question_type_id == 28\" class=\"col-md-12 d-flex mt-4 px-3 mb-3\">\n                            <div class=\"col-md-6\">\n                                <label class=\"d-flex align-items-center\">\n                                    <b>Your Answer</b>\n                                    <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                    <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                </label>\n                                <div class=\"editor_bullet\" [ngClass]=\"item.given_points == item.points ? 'form-span-correct' : 'form-span-wrong'\">\n                                    <div *ngIf=\"item.student_answer[0]?.isSelected != ''\" [innerHTML]=\"item.student_answer[0]?.isSelected | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>\n                                    <div *ngIf=\"item.student_answer[0]?.isSelected == ''\" class=\"innerhtml-margin-clear\">Student Not Answered</div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label class=\"py-1\"><b>Correct Answer</b></label>\n                                <div class=\"form-span editor_bullet\">\n                                    <div [innerHTML]=\"item.answer[0]?.correctAnswer | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"item.question_type_id == 40 || item.question_type_id == 41\" class=\"col-md-12 d-flex mt-4\">\n                            <div class=\"col-md-6\">\n                                <label class=\"d-flex align-items-center\">\n                                    <b>Your Answer</b>\n                                    <i class=\"fa fa-check-circle fa-2x text-success ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points == item.points\"></i>\n                                    <i class=\"fa fa-times-circle fa-2x text-danger ml-2\" aria-hidden=\"true\" *ngIf=\"item.given_points != item.points\"></i>\n                                </label>\n                                <div class=\"col-12 mt-0 d-flex justify-content-center\">\n                                    <app-graph-component [editMode]=\"false\"\n                                                         [editPatchValue]=\"item.student_answer.length == 0 ? false : parseVal(item.student_answer[0].correctAnswer)\"\n                                                         [graphId]=\"'graphAnsweringY'+i\"\n                                                         [questionType]=\"item.question_type_id\"></app-graph-component>\n                                </div>\n                                <div *ngIf=\"item.student_editor_answer != ''\" class=\"col-md-12 mt-3\">\n                                    <div class=\"innerhtml-margin-clear editor_bullet\" [ngClass]=\"item.given_points == item.points ? 'form-span-correct' : 'form-span-wrong'\">\n                                        <div [innerHTML]=\"item.student_editor_answer | sanitizeHtml\"></div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label class=\"py-1\"><b>Correct Answer</b></label>\n                                <div class=\"col-12 mt-0 d-flex justify-content-center\">\n                                    <app-graph-component [editMode]=\"false\"\n                                                         [editPatchValue]=\"item.answer.length == 0 ? false : parseVal(item.answer[0].correctAnswer)\"\n                                                         [graphId]=\"'graphAnsweringR'+i\"\n                                                         [questionType]=\"item.question_type_id\"></app-graph-component>\n                                </div>\n                                <div  *ngIf=\"item.question_editor_answer != ''\" class=\"col-md-12 mt-3\">\n                                    <div class=\"innerhtml-margin-clear form-span editor_bullet\">\n                                        <div [innerHTML]=\"item.question_editor_answer | sanitizeHtml\"></div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-12 mt-2\" *ngIf=\"item.question_type_id != 24 && item.question_type_id != '55'\">\n                            <div class=\"card explanation\">\n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-4 mb-3\">\n                                            <label class=\"m-0\"><b>Subject:</b></label>\n                                            <p>{{item?.subject_name ? item?.subject_name : '-'}}</p>\n                                        </div>\n                                        <div class=\"col-4 mb-3\">\n                                            <label class=\"m-0\"><b>Topic:</b></label>\n                                            <p>{{item?.question_topic ? item?.question_topic : '-'}}</p>\n                                        </div>\n                                        <div class=\"col-4 mb-3\">\n                                            <label class=\"m-0\"><b>Sub Topic:</b></label>\n                                            <p>{{item?.sub_topic ? item?.sub_topic : '-'}}</p>\n                                        </div>\n                                        <div class=\"col-4 mb-3\">\n                                            <label class=\"m-0\"><b>Skill:</b></label>\n                                            <p *ngIf=\"item?.skill\">\n                                                <span *ngIf=\"item?.skill.length == 0\">-</span>\n                                                <span *ngFor=\"let skill of item?.skill; let last = last\">{{skill}}<span *ngIf=\"!last\">, </span></span>\n                                            </p>\n                                            <p *ngIf=\"!item.skill\">-</p>\n                                        </div>\n                                        <div class=\"col-4 mb-3\">\n                                            <label class=\"m-0\"><b>Standard:</b></label>\n                                            <p>{{item?.question_standard_name ? item?.question_standard_name : '-'}}</p>\n                                        </div>\n                                        <div class=\"col-4 mb-3\">\n                                            <label class=\"m-0\"><b>Difficulty:</b></label>\n                                            <p>{{item.level == '1' ? 'Easy' : item.level == '2' ? 'Medium' : 'Difficult'}}</p>\n                                        </div>\n                                        <div class=\"col-4\">\n                                            <label class=\"m-0\"><b>Points:</b></label>\n                                            <p>{{item?.points ? item?.points : '-'}}</p>\n                                        </div>\n                                        <div class=\"col-4\">\n                                            <label class=\"m-0\"><b>Predicted Solving Time:</b></label>\n                                            <p>{{item?.predicted_solving_time ? item?.predicted_solving_time : '-'}}</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"(item.student_feedback != '' || item.student_roughdata != '') && item.question_type_id != '24'\" class=\"col-md-12 mb-3\">\n                            <div class=\"row mt-3 {{item.question_type_id == '55' ? 'px-0' : 'px-3'}}\">\n                                <div class=\"col-md-{{item.student_roughdata != '' ? '6' : '12'}} px-0\" id=\"studentFeedback{{i}}\" *ngIf=\"item.student_feedback != ''\">\n                                    <h5 class=\"font-weight-bold\">Your Feedback:</h5>\n                                    <div class=\"feedback-card col-md-12\">{{item.student_feedback}}</div>\n                                </div>\n                                <div *ngIf=\"item.student_roughdata != ''\" class=\"col-md-{{item.question_type_id == '55' ? '12' : item.student_feedback != '' ? '6' : '12'}} px-0\" id=\"studentRoughData{{i}}\">\n                                    <div class=\"card\" *ngIf=\"item.question_type_id == '55'\">\n                                        <div class=\"card-header p-3 background_gradient\">\n                                            <h5 style=\"color: white\">Cited Source</h5>\n                                        </div>\n                                        <div class=\"card-body editor_bullet custom_feedback_card_body p-3\">\n                                            <div style=\"border: 0 !important;\" [innerHTML]=\"item.student_roughdata | sanitizeHtml\" class=\"feedback-card innerhtml-margin-clear col-md-12 ml-{{item.question_type_id == '55' || item.student_feedback == '' ? '0' : '3'}}\"></div>\n                                        </div>\n                                    </div>\n\n                                    <div *ngIf=\"item.question_type_id != '55'\">\n                                        <h5 class=\"font-weight-bold editor_bullet ml-{{item.student_feedback == '' ? '0' : '3'}}\">Student Workspace:</h5>\n                                        <div [innerHTML]=\"item.student_roughdata | sanitizeHtml\" class=\"feedback-card innerhtml-margin-clear col-md-12 ml-{{item.student_feedback == '' ? '0' : '3'}}\"></div>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div *ngIf=\"item.question_type_id != 24 && (item.explanation != '' || item.resource != '')\"\n                             class=\"col-md-12 mt-4\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\" *ngIf=\"item.explanation != ''\">\n                                    <label class=\"font-weight-bold\">Explanation: </label>\n                                    <div class=\"explanation innerhtml-margin-clear\" [innerHTML]=\"item.explanation | sanitizeHtml\"></div>\n                                </div>\n\n                                <div class=\"col-md-12 mt-3\" *ngIf=\"item.resource != ''\">\n                                    <label class=\"font-weight-bold\">Resource: </label>\n                                    <div class=\"explanation innerhtml-margin-clear\" [innerHTML]=\"item.resource | sanitizeHtml\"></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"item.question_type_id != 24 && item.feedback != ''\" class=\"col-md-12 mt-3\">\n                            <label class=\"font-weight-bold\">Feedback</label>\n                            <textarea [value]=\"item.feedback\" class=\"form-control\" cols=\"30\" placeholder=\"Please Enter the Feedback\" readonly rows=\"2\"></textarea>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"resource-link-card\" [hidden]=\"item.isShow\">\n                    <div class=\"col-md-12 d-flex justify-content-center align-items-center\" style=\"height: 20vh\">\n                        <span class=\"text-info\">No Incorrect Answer Available!</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div id=\"print-section\" [ngStyle]=\"{ 'max-height': totalFeedbackMaxHeight}\" class=\"col-6 content-card\" *ngIf=\"isSingleQnsWithFeedbackType && previousFeedBack.length != 0\">\n            <div style=\"display: none\" class=\"mt-3 col-md-12 display-block\">\n                <div class=\"card\">\n                    <div class=\"card-body p-3\">\n                        <div class=\"row\">\n                            <div class=\"col-6\">\n                                <h5><span style=\"font-size: 18px !important;\" class=\"font-weight-bold\">Student Name: </span> <span class=\"content-heading-name\">{{studentAnswer.student_name}}</span></h5>\n                                <h5 class=\"mb-0\"><span style=\"font-size: 18px !important;\" class=\"font-weight-bold\">Class: </span> <span class=\"content-heading-name\">{{studentAnswer.class_name ?? '-'}}</span></h5>\n                            </div>\n                            <div class=\"col-6 text-right\">\n                                <h5 class=\"mb-0\"><span style=\"font-size: 18px !important;\" class=\"font-weight-bold\">{{contentType}}: </span> <span class=\"content-heading-name\">{{contentName}}</span>  &nbsp; &nbsp;\n                                </h5>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div style=\"display: none\" class=\"mt-3 editor_bullet col-md-12 display-block\">\n                <div class=\"card\">\n                    <div class=\"card-header p-3 background_gradient\">\n                        <h5 style=\"color: white; font-size: 20px !important;\" class=\"font-weight-bold\">Essay Prompt</h5>\n                    </div>\n                    <div class=\"card-body p-3 custom_feedback_card_body\">\n                        <span style=\"font-size: 20px !important;\" [innerHTML]=\"convertMarkdownToHtml(this.totalAns[0]?.question, 'single')\" class=\"innerhtml-margin-clear\"></span>\n                    </div>\n                </div>\n            </div>\n\n            <div style=\"display: none\" *ngIf=\"this.totalAns[0]?.student_answer[0]?.isSelected != ''\" class=\"mt-3 editor_bullet col-md-12 display-block\">\n                <div class=\"card\">\n                    <div class=\"card-header p-3 background_gradient\">\n                        <h5 style=\"color: white; font-size: 20px !important;\" class=\"font-weight-bold\">Your Answer</h5>\n                    </div>\n                    <div class=\"card-body p-3 custom_feedback_card_body\">\n                        <span style=\"font-size: 20px !important;\" [innerHTML]=\"convertedText && convertedText != '' ? convertMarkdownToHtml(selectedPreviousStudentAnswer?.student_answer) : convertMarkdownToHtml(this.totalAns[0]?.student_answer[0]?.isSelected, 'single')\" class=\"innerhtml-margin-clear\"></span>\n                    </div>\n                </div>\n            </div>\n\n            <div style=\"display: none\" *ngIf=\"studentAnswer?.feedback != ''\" class=\"mt-3 editor_bullet col-md-12 display-block\">\n                <div class=\"card\">\n                    <div class=\"card-header p-3 background_gradient\">\n                        <h5 style=\"color: white\" class=\"font-weight-bold\">Teacher FeedBack</h5>\n                    </div>\n                    <div class=\"card-body p-3 custom_feedback_card_body\">\n                        <span class=\"innerhtml-margin-clear f-18\">{{studentAnswer?.feedback}}</span>\n                    </div>\n                </div>\n            </div>\n            <div id=\"feedback_got\" class=\"row\">\n\n                <div class=\"feedback-card p-0\" style=\"height: 74vh; border: 0 !important;\" *ngIf=\"selectedPreviousStudentAnswer?.version == 'V1'\"\n                     [innerHTML]=\"convertedText\"></div>\n\n                <div class=\"col-12\" *ngIf=\"selectedPreviousStudentAnswer?.version != 'V1'\">\n                    <!--                                        <h4 class=\"font-weight-bold mt-2 mb-3\">Feedback {{selectedFeedBackIndex}}-->\n                    <!--                                            <span *ngIf=\"selectedPreviousStudentAnswer?.created_date\"> ({{selectedPreviousStudentAnswer?.created_date | customDateFormat}}  | {{selectedPreviousStudentAnswer?.created_date | date:'h:mm a'}}) </span>:</h4>-->\n                    <h5 *ngIf=\"selectedFeedBackIndex == previousFeedBack.length\"\n                        class=\"font-weight-bold\">Final Feedback<span *ngIf=\"selectedPreviousStudentAnswer?.created_date\"> ({{selectedPreviousStudentAnswer?.created_date | customDateFormat}} | {{selectedPreviousStudentAnswer?.created_date | date:'h:mm a'}}) </span>: </h5>\n                    <h5 *ngIf=\"selectedFeedBackIndex != previousFeedBack.length\"\n                        class=\"font-weight-bold\">Feedback For Version {{selectedFeedBackIndex}}<span *ngIf=\"selectedPreviousStudentAnswer?.created_date\"> ({{selectedPreviousStudentAnswer?.created_date | customDateFormat}} | {{selectedPreviousStudentAnswer?.created_date | date:'h:mm a'}}) </span>: </h5>\n                    <div class=\"col-12 px-0\" *ngIf=\"selectedPreviousStudentAnswer?.version != 'V1'\">\n                        <div class=\"card\">\n                            <div class=\"card-header p-3 background_gradient\">\n                                <h5 style=\"color: white;font-size: 16px\" class=\"font-weight-bold\">Score Chart</h5>\n                            </div>\n                            <div class=\"card-body custom_feedback_card_body p-3\">\n                                <div class=\"row justify-content-center flex-column\">\n                                    <div class=\"col-12 d-flex justify-content-center\">\n                                        <div class=\"text-center\">\n                                            <h5 class=\"font-weight-bold\">Feedback Score</h5>\n                                            <p style=\"font-size: 14px\" class=\"mb-0\">\n                                                <span>Current Version : <span style=\"color: #008ffb\" class=\"font-weight-bold\">\n                                                    {{selectedPreviousStudentAnswer?.student_score}} / {{selectedPreviousStudentAnswer?.total_score}}</span></span>\n                                                <span class=\"ml-2\">Previous Version :<span style=\"color: #00e396\" *ngIf=\"selectedFeedBackIndex != 1 && selectedFeedBackIndex != ''\" class=\"font-weight-bold\">\n                                                    {{previousFeedBack[selectedPreviousStudentAnswer?.index + 1].student_score}} / {{previousFeedBack[selectedPreviousStudentAnswer?.index + 1].total_score}}\n                                                </span>\n                                                    <span *ngIf=\"selectedFeedBackIndex == 1\"> - </span\n                                                ></span>\n                                            </p>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-12\">\n                                        <div id=\"chart2\">\n                                            <apx-chart\n                                                    [series]=\"chartOptions?.series\"\n                                                    [chart]=\"chartOptions?.chart\"\n                                                    [xaxis]=\"chartOptions?.xaxis\"\n                                                    [yaxis]=\"chartOptions?.yaxis\"\n                                                    [plotOptions]=\"chartOptions?.plotOptions\"\n                                                    [dataLabels]=\"chartOptions?.dataLabels\"\n                                                    [legend]=\"chartOptions?.legend\">\n                                            </apx-chart>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-12 mt-2\" *ngIf=\"selectedPreviousStudentAnswer.strengths\">\n                                        <div *ngIf=\"selectedPreviousStudentAnswer.strengths.length != 0\">\n                                            <label class=\"font-weight-bold\">Strengths: </label>\n                                            <h5 class=\"strength_text\" *ngFor=\"let value of selectedPreviousStudentAnswer.strengths\">{{value}}</h5>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-12 mt-3\" *ngIf=\"selectedPreviousStudentAnswer.top_opportunities\">\n                                        <div *ngIf=\"selectedPreviousStudentAnswer.top_opportunities.length != 0\">\n                                            <label class=\"font-weight-bold\">Top Opportunities: </label>\n                                            <h5 class=\"top_opportunity_text\" *ngFor=\"let value of selectedPreviousStudentAnswer.top_opportunities\">{{value}}</h5>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-12 mt-3 px-0\">\n                        <div class=\"card\">\n                            <div class=\"card-header p-3 background_gradient\">\n                                <h5 style=\"color: white;font-size: 16px\" class=\"font-weight-bold\">Trait Analysis</h5>\n                            </div>\n                            <div class=\"card-body custom_feedback_card_body p-3\">\n                                <div style=\"border: 0 !important;\" class=\"feedback-card\" *ngIf=\"selectedPreviousStudentAnswer?.version == 'V1'\" [innerHTML]=\"convertedText\"></div>\n                                <div class=\"feedback-card p-0\" *ngIf=\"selectedPreviousStudentAnswer?.version != 'V1'\" style=\"overflow-x: hidden;border: 0 !important\">\n                                    <div class=\"row mb-2\">\n                                        <div class=\"col-12\">\n                                            <h5 style=\"font-size: 18px\" class=\"mb-0 font-weight-bold\">Total Score</h5>\n                                            <div class=\"row\">\n                                                <div class=\"col-10\">\n                                                    <div class=\"progress cursor my-2\">\n                                                        <div class=\"progress-bar\"\n                                                             role=\"progressbar\"\n                                                             [style.width.%]=\"scorePercentage\"\n                                                             [attr.aria-valuenow]=\"score\"\n                                                             [attr.aria-valuemin]=\"0\"\n                                                             [attr.aria-valuemax]=\"totalScore\">\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <span class=\"align-self-center font-weight-bold color-primary\">{{selectedPreviousStudentAnswer?.student_score}} / {{selectedPreviousStudentAnswer?.total_score}}</span>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"feedback-panel\" [ngClass]=\"last ? 'feedback-panel_last' : first ? 'feedback-panel_first' : ''\"\n                                         *ngFor=\"let feedback of feedbackList; let last = last; let first = first\" (click)=\"feedback.collaspsed = !feedback.collaspsed\">\n                                        <div class=\"feedback-header d-flex justify-content-between align-items-center\"\n                                             [ngClass]=\"!feedback.collaspsed ? 'open' : ''\">\n                                            <span class=\"title-text\">{{ getValue(feedback[0]) ?? '-' }}</span>\n                                            <div class=\"d-flex align-items-center\">\n                                            <span class=\"badge badge-info mr-2\">\n                                                Score: {{ feedback[1]?.score }} / {{ totalIndivialScore }}\n                                            </span>\n                                                <i style=\"color: black\" class=\"fa\" [ngClass]=\"feedback.collaspsed ? 'fa-chevron-down' : 'fa-chevron-up'\"></i>\n                                            </div>\n                                        </div>\n\n                                        <div [ngbCollapse]=\"feedback.collaspsed\" class=\"feedback-body\">\n                                            <div *ngIf=\"feedback[1]?.rationale\" class=\"rationale_design col-12 px-0 {{feedback[1]?.feedback.length == 0 ? 'mb-0' : ''}}\">\n                                                <strong style=\"color: black\">Rationale:</strong> {{ feedback[1]?.rationale }}\n                                            </div>\n\n                                            <div class=\"row\">\n                                                <div class=\"col-md-12 {{lastValue ? '' : 'mb-2'}}\" *ngFor=\"let value of feedback[1]?.feedback; let lastValue = last\">\n                                                    <div class=\"collapse-card\">\n                                                        <h5 class=\"snippet-text\">\n                                                            {{ value.snippet }}\n                                                        </h5>\n\n                                                        <div class=\"inner-collapse mt-2\">\n                                                            <label class=\"font-weight-bold col-12 px-0\">Suggestion: <span class=\"font-weight-normal italic\">{{ value.suggestion }}</span></label>\n\n                                                            <label *ngIf=\"value?.why\" class=\"font-weight-bold mt-2 col-12 px-0\">Why: <span class=\"font-weight-normal italic\">{{ value.why }}</span></label>\n\n                                                            <label *ngIf=\"value?.example_rewrite\" class=\"font-weight-bold mt-2 col-12 px-0\">Example: <span class=\"font-weight-normal color-primary italic\">{{ value.example_rewrite }}</span></label>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-12 mt-3 px-0\" *ngIf=\"selectedPreviousStudentAnswer.next_edit_plan\">\n                        <div class=\"card\">\n                            <div class=\"card-header p-3 background_gradient\">\n                                <h5 style=\"color: white;font-size: 16px\" class=\"font-weight-bold\">Next Edit Plan</h5>\n                            </div>\n                            <div class=\"card-body custom_feedback_card_body py-3 px-0\">\n                                <div class=\"col-12 row {{!last ? 'mb-2' : ''}}\" *ngFor=\"let data of selectedPreviousStudentAnswer.next_edit_plan; let i = index; let last = last\">\n                                    <div [ngStyle]=\"{'width' : env.deviceType() ? '7%' : '6%'}\" style=\"padding-left: 16px\" class=\"text-center font-weight-bold\">{{data?.priority ?? i}}.</div>\n                                    <div [ngStyle]=\"{'width' : env.deviceType() ? '93%' : '94%'}\">\n                                        <label class=\"font-weight-bold mb-1 col-12 px-0\">{{data?.action ?? ''}}</label>\n                                        <label style=\"color: #007BFF\">Example: <span class=\"color-primary col-12 px-0\">{{data.example_rewrite}}</span></label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!--                                        <div class=\"card mb-4\">-->\n                    <!--                                            <div class=\"card-header p-3 background_gradient\">-->\n                    <!--                                                <h5 style=\"color: white;font-size: 16px\" class=\"font-weight-bold\">Score Chart</h5>-->\n                    <!--                                            </div>-->\n                    <!--                                            <div class=\"card-body custom_feedback_card_body p-3\">-->\n                    <!--                                                <div class=\"col-12 px-0\">-->\n                    <!--                                                    <div class=\"row justify-content-center flex-column\">-->\n                    <!--                                                        <div class=\"col-12 d-flex justify-content-center\">-->\n                    <!--                                                            <div class=\"col-6 text-center\">-->\n                    <!--                                                                <h5 class=\"font-weight-bold\">Feedback Score</h5>-->\n                    <!--                                                                <p style=\"font-size: 14px\" class=\"mb-0\">-->\n                    <!--                                                                <span>Current Version : <span style=\"color: #008ffb\" class=\"font-weight-bold\">-->\n                    <!--                                                                    {{selectedPreviousStudentAnswer?.student_score}} / {{selectedPreviousStudentAnswer?.total_score}}</span></span>-->\n                    <!--                                                                    <span class=\"ml-2\">Previous Version :<span style=\"color: #00e396\" *ngIf=\"selectedFeedBackIndex != 1 && selectedFeedBackIndex != ''\" class=\"font-weight-bold\">-->\n                    <!--                                                                    {{previousFeedBack[selectedPreviousStudentAnswer?.index + 1].student_score}} / {{previousFeedBack[selectedPreviousStudentAnswer?.index + 1].total_score}}-->\n                    <!--                                                                </span>-->\n                    <!--                                                                <span *ngIf=\"selectedFeedBackIndex == 1\"> - </span></span>-->\n                    <!--                                                                </p>-->\n                    <!--                                                            </div>-->\n                    <!--                                                        </div>-->\n                    <!--                                                        <div class=\"col-12\">-->\n                    <!--                                                            <div id=\"chart2\">-->\n                    <!--                                                                <apx-chart #chartRef-->\n                    <!--                                                                        [series]=\"chartOptions?.series\"-->\n                    <!--                                                                        [chart]=\"chartOptions?.chart\"-->\n                    <!--                                                                        [xaxis]=\"chartOptions?.xaxis\"-->\n                    <!--                                                                        [yaxis]=\"chartOptions?.yaxis\"-->\n                    <!--                                                                        [plotOptions]=\"chartOptions?.plotOptions\"-->\n                    <!--                                                                        [dataLabels]=\"chartOptions?.dataLabels\"-->\n                    <!--                                                                        [legend]=\"chartOptions?.legend\">-->\n                    <!--                                                                </apx-chart>-->\n                    <!--                                                            </div>-->\n                    <!--                                                        </div>-->\n                    <!--                                                    </div>-->\n\n                    <!--                                                </div>-->\n\n                    <!--                                            </div>-->\n                    <!--                                        </div>-->\n                </div>\n\n                <!--                                    <div class=\"col-12\">-->\n                <!--                                        <div class=\"card\">-->\n                <!--                                            <div class=\"card-header p-3 background_gradient\">-->\n                <!--                                                <h5 *ngIf=\"selectedFeedBackIndex == previousFeedBack.length\" style=\"color: white\"-->\n                <!--                                                    class=\"font-weight-bold\">Final Feedback<span *ngIf=\"selectedPreviousStudentAnswer?.created_date\"> ({{selectedPreviousStudentAnswer?.created_date | customDateFormat}} | {{selectedPreviousStudentAnswer?.created_date | date:'h:mm a'}}) </span>: </h5>-->\n                <!--                                                <h5 *ngIf=\"selectedFeedBackIndex != previousFeedBack.length\" style=\"color: white\"-->\n                <!--                                                    class=\"font-weight-bold\">Feedback For Version {{selectedFeedBackIndex}}<span *ngIf=\"selectedPreviousStudentAnswer?.created_date\"> ({{selectedPreviousStudentAnswer?.created_date | customDateFormat}} | {{selectedPreviousStudentAnswer?.created_date | date:'h:mm a'}}) </span>: </h5>-->\n                <!--                                            </div>-->\n                <!--                                            <div class=\"card-body custom_feedback_card_body p-3\">-->\n                <!--                                                <div class=\"col-12 px-0\">-->\n                <!--                                                    <div class=\"feedback-card p-0\" style=\"height: 74vh; border: 0 !important;\" *ngIf=\"selectedPreviousStudentAnswer?.version == 'V1'\"-->\n                <!--                                                         [innerHTML]=\"convertedText\"></div>-->\n                <!--                                                    <div class=\"feedback-card p-0\" *ngIf=\"selectedPreviousStudentAnswer?.version != 'V1'\" style=\"overflow-x: hidden; border: 0 !important;\">-->\n                <!--                                                        <div class=\"row px-2 mb-2\">-->\n                <!--                                                            <div class=\"col-6\">-->\n                <!--                                                                <h5 style=\"font-size: 18px\" class=\"mb-0 font-weight-bold\">Total Score</h5>-->\n                <!--                                                                <div class=\"row\">-->\n                <!--                                                                    <div class=\"col-10\">-->\n                <!--                                                                        <div class=\"progress cursor my-2\">-->\n                <!--                                                                            <div class=\"progress-bar\"-->\n                <!--                                                                                 role=\"progressbar\"-->\n                <!--                                                                                 [style.width.%]=\"scorePercentage\"-->\n                <!--                                                                                 [attr.aria-valuenow]=\"score\"-->\n                <!--                                                                                 [attr.aria-valuemin]=\"0\"-->\n                <!--                                                                                 [attr.aria-valuemax]=\"totalScore\">-->\n                <!--                                                                            </div>-->\n                <!--                                                                        </div>-->\n                <!--                                                                    </div>-->\n                <!--                                                                    <span class=\"align-self-center font-weight-bold color-primary\">{{selectedPreviousStudentAnswer?.student_score}} / {{selectedPreviousStudentAnswer?.total_score}}</span>-->\n                <!--                                                                </div>-->\n                <!--                                                            </div>-->\n                <!--                                                        </div>-->\n                <!--                                                        <div class=\"row px-3 mb-3\" *ngFor=\"let feedback of feedbackList\">-->\n                <!--                                                            <h5 class=\"font-weight-bold text-capitalize col-12 px-2 color-primary\" style=\"font-style: italic\">-->\n                <!--                                                                <span class=\"mr-2\" style=\"font-size: 18px\">{{getValue(feedback[0]) ?? '-'}}</span>-->\n                <!--                                                                <span class=\"badge badge-info\">Score: {{feedback[1]?.score}} / {{totalIndivialScore}}</span>-->\n                <!--                                                            </h5>-->\n\n                <!--                                                            <a class=\"col-12 px-2 rationale_design\" *ngIf=\"feedback[1]?.rationale && feedback[1]?.rationale != ''\">-->\n                <!--                                                                <strong>{{feedback[1]?.rationale}}</strong></a>-->\n\n                <!--                                                            <div class=\"col-6 px-2\" *ngFor=\"let value of feedback[1]?.feedback\">-->\n                <!--                                                                <div class=\"sidebar-widget cursor\" (click)=\"value.collapsed = !value.collapsed\" style=\"border-left: 1px solid #ffd9fe !important;\">-->\n                <!--                                                                    <h5 class=\"mb-0 justify-content-between d-flex\" style=\"font-style: italic; font-size: 14px\">\"{{value.snippet}}\"-->\n                <!--                                                                        <i *ngIf=\"!value.collapsed\" class=\"fa fa-plus\"></i>-->\n                <!--                                                                        <i *ngIf=\"value.collapsed\" class=\"fa fa-minus\"></i>-->\n                <!--                                                                    </h5>-->\n                <!--                                                                    <div [ngbCollapse]=\"!value.collapsed\">-->\n                <!--                                                                        <label class=\"font-weight-bold mt-3 mb-2\">Suggestion</label>-->\n                <!--                                                                        <h5 style=\"font-style: italic\" class=\"color-primary\">{{value.suggestion}}</h5>-->\n                <!--                                                                        <label *ngIf=\"value?.why && value?.why != ''\" class=\"font-weight-bold my-2\">Why</label>-->\n                <!--                                                                        <h5 *ngIf=\"value?.why && value?.why != ''\" style=\"font-style: italic\" class=\"color-primary\">-->\n                <!--                                                                            {{value?.why}}</h5>-->\n                <!--                                                                        <label *ngIf=\"value?.example_rewrite && value?.example_rewrite != ''\"-->\n                <!--                                                                               class=\"font-weight-bold my-2\">Example</label>-->\n                <!--                                                                        <h5 *ngIf=\"value?.example_rewrite && value?.example_rewrite != ''\"-->\n                <!--                                                                            style=\"font-style: italic\" class=\"color-primary\">{{value?.example_rewrite}}</h5>-->\n                <!--                                                                    </div>-->\n                <!--                                                                </div>-->\n                <!--                                                            </div>-->\n                <!--                                                        </div>-->\n                <!--                                                    </div>-->\n                <!--                                                </div>-->\n                <!--                                            </div>-->\n                <!--                                        </div>-->\n                <!--                                    </div>-->\n            </div>\n        </div>\n\n        <div class=\"col-12\" *ngIf=\"feedbackListData.length != 0\">\n            <div class=\"row px-3\">\n                <div class=\"card col-12 p-4\">\n                    <div class=\"card-header p-3 background_gradient\">\n                        <h5 style=\"color: white\">Overall FeedBack</h5>\n                    </div>\n                    <div class=\"card-body py-3 px-4 custom_feedback_card_body\">\n                        <div class=\"row px-2\" *ngFor=\"let data of feedbackListData; let last = last\">\n                            <div class=\"col-12 card class-card1 py-2 {{last ? 'mb-0' : 'mb-3'}}\">\n                                <h5 class=\"color-primary\">{{data.feedback}}</h5>\n                                <p style=\"font-size: 12px\" class=\"text-dark\"><span *ngIf=\"data.version != ''\"><strong>Version {{data.version}}</strong> - </span>\n                                    <span *ngIf=\"data.created_date != ''\">{{data.created_date | date:'medium'}}</span></p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n<ng-template #workArea let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header d-flex justify-content-between\">\n        &nbsp;,<h4 class=\"mb-0\">Work Area</h4><i (click)=\"close()\" class=\"fa fa-times-circle cursor\" style=\"font-size: 1.2rem\"></i>\n    </div>\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div>\n                <app-annotation [getAnnotate]=\"workAnnotate\"\n                                [id]=\"'workAreaAns'\"\n                                [pdfPath]=\"workAnnotatePDF\"\n                                [toolHide]=\"true\"\n                                [userType]=\"'teacher'\"></app-annotation>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #overallFeedback let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header d-flex justify-content-between\">\n        <h4 class=\"mb-0\" style=\"color: #8F008A\">Overall Feedback</h4><i (click)=\"closeOverAllFeedback('of')\" class=\"fa fa-times-circle cursor\" style=\"font-size: 1.2rem\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n            <div class=\"col-md-12 d-flex mt-4 mb-4 p-4 release-card\">\n                <span>{{studentAnswer.feedback}}</span>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n\n<!--<div *ngIf=\"functionCalled\" class=\"container-fluid\">-->\n<!--    <div class=\"card p-4\">-->\n<!--        <div class=\"row mb-4 justify-content-between d-flex\">-->\n<!--            <div class=\"\">-->\n<!--                <h4 class=\"content-heading\">{{scoreData.content_name}}</h4>-->\n<!--            </div>-->\n<!--            <div class=\"col-md-6 d-flex justify-content-end\">-->\n<!--                <select (change)=\"filterQues($event)\" class=\"form-control col-md-4\">-->\n<!--                    <option value=\"all\">All</option>-->\n<!--                    <option value=\"correct\">Correct</option>-->\n<!--                    <option value=\"wrong\">Incorrect</option>-->\n<!--                </select>-->\n<!--                <div *ngIf=\"correctPdfPath.length != 0\" class=\"btn-group\">-->\n<!--                    <button aria-expanded=\"false\" aria-haspopup=\"true\" class=\"btn-outline-primary btn dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">-->\n<!--                        {{buttonName}}-->\n<!--                    </button>-->\n<!--                    <div class=\"dropdown-menu\">-->\n<!--                        <a (click)=\"showType('1')\" class=\"dropdown-item dropdown-link\">Question pdf</a>-->\n<!--                        <a (click)=\"showType('2')\" [hidden]=\"uploadAnswerPath.length == 0\" class=\"dropdown-item dropdown-link\">Answer</a>-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--                <button (click)=\"back()\" class=\"btn btn-outline-primary pull-right ml-2\" *ngIf=\"backStatus\">Back</button>-->\n<!--            </div>-->\n<!--        </div>-->\n<!--        <div *ngIf=\"correctPdfPath.length != 0\" class=\"row mt-3\">-->\n<!--            <div class=\"col-md-12 d-flex mt-3 mb-4 p-4 release-card\">-->\n<!--                <div class=\"col-md-6 px-0 mb-2\">-->\n<!--                    <div class=\"col-md-12\">-->\n<!--                        <label>Obtained Points</label>-->\n<!--                        <input [value]=\"studentAnswer.earned_points\" class=\"form-control div-disable\" type=\"text\">-->\n<!--                    </div>-->\n<!--                    <div class=\"col-md-12 mt-3\">-->\n<!--                        <label>Total Points</label>-->\n<!--                        <input [value]=\"studentAnswer.points\" class=\"form-control div-disable\" type=\"text\">-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--                <div class=\"col-md-6 mb-1\">-->\n<!--                    <label>Overall Feedback</label>-->\n<!--                    <textarea [value]=\"studentAnswer.feedback\" class=\"form-control\" cols=\"30\" placeholder=\"Overall Feedback\" readonly rows=\"5\"></textarea>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--            <vertical-ninja-->\n<!--                    primary-minsize=\"50\"-->\n<!--                    secondary-minsize=\"100\"-->\n<!--                    separator-width-px=\"10\"-->\n<!--                    [primary-component-toggle]=\"false\"-->\n<!--                    [secondary-component-toggle]=\"false\"-->\n<!--                    local-storage-key=\"ninja\"-->\n<!--            >-->\n\n<!--                <div class=\"ninja-content-primary \">-->\n<!--                    &lt;!&ndash;                    class=\"col-md-{{questionEmpty || hideAnswer ? 12 : 5}}\"&ndash;&gt;-->\n<!--                    <div>-->\n<!--                        <app-annotation [getAnnotate]=\"areaInfo\"-->\n<!--                                        *ngIf=\"showingType == '1'\"-->\n<!--                                        [getDragQues]=\"dragQuestion\"-->\n<!--                                        [pdfPath]=\"pdfTemplate\"-->\n<!--                                        [toolHide]=\"true\"-->\n<!--                                        [userType]=\"'student'\"></app-annotation>-->\n<!--                        <app-annotation *ngIf=\"showingType == '2'\"-->\n<!--                                        [getAnnotate]=\"sheetInfo\"-->\n<!--                                        [pdfPath]=\"answerSheetPath\"-->\n<!--                                        [toolHide]=\"true\"-->\n<!--                                        [userType]=\"'student'\"></app-annotation>-->\n<!--                    </div>-->\n<!--                </div>-->\n\n<!--                <div class=\"ninja-content-secondary\">-->\n<!--                    &lt;!&ndash;                    col-md-{{showpdf ? 7 : 12}}&ndash;&gt;-->\n<!--                    <div *ngIf=\"!questionEmpty && !hideAnswer\" class=\" scrollPanel view-question\" style=\"background-color: rgba(246, 246, 246, 0.6)\">-->\n<!--                        <div *ngFor=\"let sec of totalAns; let i = index\" [ngStyle]=\"{'padding': showpdf === true ? '0.3rem' : '2rem' }\">-->\n<!--                            <div *ngIf=\"sec.heading != ''\" class=\"col-md-6 mb-3\">-->\n<!--                                <input [value]=\"sec.heading\" class=\"input-custom-modal div-disable\" type=\"text\">-->\n<!--                            </div>-->\n<!--                            <div *ngFor=\"let item of sec.section; let j = index\" class=\"card-body mb-3\">-->\n<!--                                <div class=\"row d-flex justify-content-between\">-->\n<!--                                    <div class=\"col-md-1\">-->\n<!--                                        &lt;!&ndash;                                <button class=\"btn btn-primary\">{{item.sub_question_no}}</button>&ndash;&gt;-->\n<!--                                        <span class=\"pull-left question-no col-md-10 mr-2\">{{item.sub_question_no}}</span>-->\n<!--                                    </div>-->\n<!--                                    <div class=\"col-md-{{showpdf == true ? 11 : 10}} text-right d-flex justify-content-end\">-->\n<!--                                        <div class=\"pull-right px-0 {{showpdf == true ? '' : 'mr-2'}}\">-->\n<!--                                            <button *ngIf=\"item.rough_image_url != ''\" [attr.aria-controls]=\"'#roughArea' + j\" [attr.data-target]=\"'#roughArea' + j\" aria-expanded=\"false\" class=\"btn-sm btn-primary mr-2\" data-toggle=\"collapse\">your Work Space</button>-->\n<!--                                            <button *ngIf=\"item.student_feedback != ''\" [attr.aria-controls]=\"'#studentFeedback' + j\" [attr.data-target]=\"'#studentFeedback' + j\" aria-expanded=\"false\" class=\"btn-sm btn-primary mr-2\" data-toggle=\"collapse\">your Feedback</button>-->\n<!--                                        </div>-->\n<!--                                        <div class=\"col-md-{{showpdf == true ? 3 : 2}} px-0\">-->\n<!--                                            <div class=\"d-flex px-0\">-->\n<!--                                                <input [value]=\"item.given_points\" class=\"mark-input div-disable\" style=\"text-align: center\">-->\n<!--                                                <input [value]=\"item.points\" class=\"mark-input div-disable\" style=\"text-align: center\">-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                    &lt;!&ndash;                        <div *ngIf=\"showpdf == false\" class=\"col-md-10 text-right\">&ndash;&gt;-->\n<!--                                    &lt;!&ndash;                            <button [attr.aria-controls]=\"'#studentFeedback' + j\" [attr.data-target]=\"'#studentFeedback' + j\" aria-expanded=\"false\" class=\"btn-sm btn-primary mr-2\" data-toggle=\"collapse\">student feedback</button>&ndash;&gt;-->\n<!--                                    &lt;!&ndash;                            <input (input)=\"getPoints($event , i, j); markValidation($event, item.points, i, j)\" (keypress)=\"numberValidate($event)\" [value]=\"item.given_points\" autocomplete=\"off\" class=\"mark-input\" name=\"points\" style=\"text-align: center\">&ndash;&gt;-->\n<!--                                    &lt;!&ndash;                            <input (keypress)=\"numberValidate($event)\" [value]=\"item.points\" class=\"mark-input div-disable\" style=\"text-align: center\">&ndash;&gt;-->\n<!--                                    &lt;!&ndash;                            <br>&ndash;&gt;-->\n<!--                                    &lt;!&ndash;                            <span *ngIf=\"item.maxValErr\" class=\"errormessage\">Invalid Points</span>&ndash;&gt;-->\n<!--                                    &lt;!&ndash;                        </div>&ndash;&gt;-->\n<!--                                </div>-->\n<!--                                <div class=\"row\">-->\n<!--                                    <div class=\"col-md-6\">-->\n<!--                                        <div [hidden]=\"item.question == ''\" [innerHTML]=\"item.question | sanitizeHtml\" class=\"mb-3 mt-2 div-disable\"></div>-->\n<!--                                        <ul *ngIf=\"item.question_type_id == 1\" class=\"mt-4\">-->\n<!--                                            <li *ngFor=\"let option of item.array\" [ngClass]=\"{'ans-correct': option == item.answer, 'ans-selected': option == item.student_answer, 'ans-wrong': option != item.answer && option == item.student_answer}\"><span><span>{{option}}</span>-->\n<!--                                                                <i aria-hidden=\"true\" class=\"fa fa-check\"></i>-->\n<!--                                                                <i aria-hidden=\"true\" class=\"fa fa-times\"></i>-->\n<!--                                                                </span>-->\n<!--                                            </li>-->\n<!--                                        </ul>-->\n<!--                                        <ul *ngIf=\"item.question_type_id == 3\" class=\"mt-4\">-->\n<!--                                            <li [ngClass]=\"{'ans-correct': item.answer == 'true', 'ans-selected': item.student_answer == 'true', 'ans-wrong': item.answer == 'false' && item.student_answer == 'true'}\">-->\n<!--                                                    <span><input [checked]=\"item.student_answer == 'true'\" class=\"radio-size form-control mr-2 div-disable\" name=\"ans\" type=\"radio\" value=\"true\"> True-->\n<!--                                                    <i aria-hidden=\"true\" class=\"fa fa-check\"></i>-->\n<!--                                                    <i aria-hidden=\"true\" class=\"fa fa-times\"></i>-->\n<!--                                                    </span>-->\n<!--                                            </li>-->\n<!--                                            <li [ngClass]=\"{'ans-correct': item.answer == 'false', 'ans-selected': item.student_answer == 'false', 'ans-wrong': item.answer == 'true' && item.student_answer == 'false'}\">-->\n<!--                                                    <span><input [checked]=\"item.student_answer == 'false'\" class=\"radio-size form-control mr-2 div-disable\" name=\"ans\" type=\"radio\" value=\"false\"> False-->\n<!--                                                    <i aria-hidden=\"true\" class=\"fa fa-check\"></i>-->\n<!--                                                    <i aria-hidden=\"true\" class=\"fa fa-times\"></i>-->\n<!--                                                    </span>-->\n<!--                                            </li>-->\n<!--                                        </ul>-->\n<!--                                        <ul *ngIf=\"item.question_type_id == 9\" class=\"mt-4\">-->\n<!--                                            <li *ngFor=\"let option of item.mob_options\" [ngClass]=\"{'ans-correct': option == item.answer, 'ans-selected': option == item.student_answer, 'ans-wrong': option != item.answer && option == item.student_answer}\"><span class=\"capital\">{{option}}-->\n<!--                                                <i aria-hidden=\"true\" class=\"fa fa-check\"></i>-->\n<!--                                                    <i aria-hidden=\"true\" class=\"fa fa-times\"></i>-->\n<!--                                                </span></li>-->\n<!--                                        </ul>-->\n<!--                                        <div *ngIf=\"item.question_type_id == 10\" class=\"col-md-12 mt-4 px-0\">-->\n<!--                                            <input [ngClass]=\"{'correct-ans': item.match_case == '1' ? (item.answer == item.student_answer) : item.answer.trim().toLowerCase().split(' ').join('') == item.student_answer.trim().toLowerCase().split(' ').join(''),-->\n<!--                                                                                    'wrong-ans': item.match_case ? (item.answer != item.student_answer) : item.answer.trim().toLowerCase().split(' ').join('') != item.student_answer.trim().toLowerCase().split(' ').join('')}\"-->\n<!--                                                   [value]=\"item.student_answer\"-->\n<!--                                                   class=\"form-control div-disable mt-2\"-->\n<!--                                                   type=\"text\">-->\n<!--                                            <label class=\"mt-4\" value=\"Correct answer\">Correct answer : {{item.answer}}</label>-->\n<!--                                        </div>-->\n<!--                                        <div *ngIf=\"item.question_type_id == 20\" class=\"col-md-12 mt-4 px-0\">-->\n<!--                                            <div class=\"col-md-12\">-->\n<!--                                                <label>Your Answer: </label>-->\n<!--                                                <textarea class=\"form-control\" cols=\"30\" readonly rows=\"4\">{{item.student_answer}}</textarea>-->\n<!--                                            </div>-->\n<!--                                            <div class=\"col-md-12 mt-2\">-->\n<!--                                                <label>Correct Answer: </label>-->\n<!--                                                <textarea class=\"form-control\" cols=\"30\" readonly rows=\"4\">{{item.answer}}</textarea>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                        <div *ngIf=\"item.question_type_id == 30\" class=\"col-md-12 mt-4 px-0\">-->\n<!--                                            <div class=\"col-md-12\">-->\n<!--                                                <label>Your Answer: </label>-->\n<!--                                                <h4 [innerHTML]=\"item.student_answer | sanitizeHtml\" class=\"ml-3\"></h4>-->\n<!--                                            </div>-->\n<!--                                            <div class=\"col-md-12 mt-2\">-->\n<!--                                                <label>Correct Answer: </label>-->\n<!--                                                <h4 [innerHTML]=\"item.answer | sanitizeHtml\" class=\"ml-3\"></h4>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                        <div *ngIf=\"item.question_type_id == 54\" class=\"col-md-12 mt-4 px-0\">-->\n<!--                                            <div *ngFor=\"let blank of item.student_answer; let k = index\">-->\n<!--                                                <input [ngClass]=\"{'correct-ans': item.match_case == '1' ? (item.answer[k].value == item.student_answer[k]) : item.answer[k].value == item.student_answer[k].trim().toLowerCase().split(' ').join(''),-->\n<!--                                                                                    'wrong-ans': item.match_case ? (item.answer[k].value != item.student_answer[k]) : item.answer[k].value != item.student_answer[k].trim().toLowerCase().split(' ').join('')}\"-->\n<!--                                                       [value]=\"item.student_answer[k]\"-->\n<!--                                                       class=\"form-control div-disable mt-2\"-->\n<!--                                                       type=\"text\">-->\n<!--                                                <label class=\"mt-1\">Correct answer : {{item.answer[k].value}}</label>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                    <div class=\"col-md-{{showpdf ? 6 : 3}}\">-->\n<!--                                        <div class=\"row mt-3 px-3\">-->\n<!--                                            <div class=\"col-md-12 collapse px-0\" id=\"roughArea{{j}}\">-->\n<!--                                                <img *ngIf=\"item.rough_image_url != ''\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + item.rough_image_url)\" class=\"customize-card2 col-md-12 pull-right\">-->\n<!--                                                <div *ngIf=\"item.rough_image_url == ''\" class=\"customize-card col-md-12 px-3\" style=\"text-align: center\">Work Space Not Found</div>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                    <div *ngIf=\"item.student_feedback != ''\" class=\"col-md-{{showpdf ? 6 : 3}}\">-->\n<!--                                        <div class=\"row mt-3 px-3\">-->\n<!--                                            <div class=\"col-md-12 collapse px-0\" id=\"studentFeedback{{j}}\">-->\n<!--                                                <div *ngIf=\"item.student_feedback != ''\" class=\"customize-card col-md-12 px-3\">{{item.student_feedback}}</div>-->\n<!--                                                <div *ngIf=\"item.student_feedback == ''\" class=\"customize-card col-md-12 px-3\" style=\"text-align: center\">No Feedback Found</div>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                    <div class=\"col-md-12\">-->\n<!--                                        <div *ngIf=\"item.question_type_id == 40\" class=\"col-md-12 mt-4 px-0 {{showpdf ? '' : 'd-flex'}}\">-->\n<!--                                            <div [hidden]=\"item.question == ''\" [innerHTML]=\"item.question | sanitizeHtml\" class=\"mb-3 mt-2\"></div>-->\n<!--                                            <div class=\"col-md-{{showpdf ? 12 : 6}} div-disable\">-->\n<!--                                                <label>Correct Answer: </label>-->\n<!--                                                <app-graph-component [editMode]=\"false\"-->\n<!--                                                                     [editPatchValue]=\"parseVal(item.answer)\"-->\n<!--                                                                     [graphId]=\"i+'correctgraph'+item.sub_question_no+'id'\"-->\n<!--                                                                     [questionType]=\"'40'\"></app-graph-component>-->\n<!--                                            </div>-->\n<!--                                            <div class=\"col-md-{{showpdf ? 12 : 6}} div-disable {{showpdf ? 'mt-3' : ''}}\">-->\n<!--                                                <label>Your Answer: </label>-->\n<!--                                                <app-graph-component *ngIf=\"item.student_answer != ''\"-->\n<!--                                                                     [editMode]=\"false\"-->\n<!--                                                                     [editPatchValue]=\"parseVal(item.student_answer[0].correctAnswer)\"-->\n<!--                                                                     [graphId]=\"i+'Editgraph'+item.sub_question_no+'id'\"-->\n<!--                                                                     [questionType]=\"'40'\"></app-graph-component>-->\n<!--                                                <app-graph-component *ngIf=\"item.student_answer == ''\"-->\n<!--                                                                     [editMode]=\"false\"-->\n<!--                                                                     [editPatchValue]=\"false\"-->\n<!--                                                                     [graphId]=\"i+'Editgraphnull'+item.sub_question_no+'id'\"-->\n<!--                                                                     [questionType]=\"'40'\"></app-graph-component>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                                <div *ngIf=\"item.answer_explanation != ''\" class=\"row mt-4 d-flex\">-->\n<!--                                    <div class=\"col-md-12\">-->\n<!--                                        <label>Explanation: </label>-->\n<!--                                        <h4 [innerHTML]=\"item.answer_explanation | sanitizeHtml\" class=\"explanation scorecard-scroll\"></h4>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                                <div *ngIf=\"item.student_feedback != ''\" class=\"row mt-4 d-flex\">-->\n<!--                                    <div class=\"col-md-12\">-->\n<!--                                        <label>Teacher Feedback: </label>-->\n<!--                                        <textarea [value]=\"item.feedback\" class=\"form-control\" placeholder=\"No Feedback Found\" readonly rows=\"3\"></textarea>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                </div>-->\n\n<!--            </vertical-ninja>-->\n<!--        </div>-->\n<!--        <div *ngIf=\"correctPdfPath.length == 0\" class=\"row mt-3 view-question\">-->\n<!--            <div class=\"col-md-12 d-flex mt-4 mb-4 p-4 release-card\">-->\n<!--                <div class=\"col-md-6 px-0 mb-2\">-->\n<!--                    <div class=\"col-md-12\">-->\n<!--                        <label>Obtained Points</label>-->\n<!--                        <input [value]=\"studentAnswer.earned_points\" class=\"form-control div-disable\" type=\"text\">-->\n<!--                    </div>-->\n<!--                    <div class=\"col-md-12 mt-3\">-->\n<!--                        <label>Total Points</label>-->\n<!--                        <input [value]=\"studentAnswer.points\" class=\"form-control div-disable\" type=\"text\">-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--                <div class=\"col-md-6 mb-1\">-->\n<!--                    <label>Overall Feedback</label>-->\n<!--                    <textarea [value]=\"studentAnswer.feedback\" class=\"form-control\" cols=\"30\" placeholder=\"Overall Feedback\" readonly rows=\"5\"></textarea>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--            <div *ngFor=\"let item of totalAns; let i = index\" class=\"col-md-12 mb-3\">-->\n<!--                <div class=\"col-md-12 px-0\">-->\n<!--                    <div class=\"col-md-1\">-->\n<!--                        &lt;!&ndash;                                <button class=\"btn btn-primary\">{{item.sub_question_no}}</button>&ndash;&gt;-->\n<!--                        <span class=\"pull-left question-no col-md-10 mr-2\">{{item.question_no}}</span>-->\n<!--                    </div>-->\n<!--                    <div *ngIf=\"item.question_type_id != 24\" class=\"col-md-11 text-right d-flex justify-content-end\">-->\n<!--                        <div class=\"pull-right px-0 {{showpdf == true ? '' : 'mr-2'}}\">-->\n<!--                            <button *ngIf=\"item.student_roughdata != ''\" [attr.aria-controls]=\"'#roughArea' + i\" [attr.data-target]=\"'#roughAreaCfs' + i\" aria-expanded=\"false\" class=\"btn-sm btn-primary mr-2\" data-toggle=\"collapse\">your Work Space</button>-->\n<!--                            <button *ngIf=\"item.student_feedback != ''\" [attr.aria-controls]=\"'#studentFeedbackCfs' + i\" [attr.data-target]=\"'#studentFeedbackCfs' + i\" aria-expanded=\"false\" class=\"btn-sm btn-outline-primary mr-2\" data-toggle=\"collapse\">your Feedback</button>-->\n<!--                        </div>-->\n<!--                        <div class=\"col-md-2 px-0\">-->\n<!--                            <div class=\"d-flex px-0\">-->\n<!--                                <input [value]=\"item.given_points\" class=\"mark-input div-disable\" style=\"text-align: center\">-->\n<!--                                <input [value]=\"item.points\" class=\"mark-input div-disable\" style=\"text-align: center\">-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--                <div *ngIf=\"item.question_type_id != 24\" class=\"col-md-6\">-->\n<!--                    <div class=\"row mt-3 px-3\">-->\n<!--                        <div class=\"col-md-12 collapse px-0\" id=\"roughAreaCfs{{i}}\">-->\n<!--                            <div *ngIf=\"item.student_roughdata != ''\" [innerHTML]=\"item.student_roughdata | sanitizeHtml\" class=\"innerhtml-margin-clear customize-card col-md-12 px-3\"></div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--                <div *ngIf=\"item.question_type_id != 24\" class=\"col-md-6\">-->\n<!--                    <div class=\"row mt-3 px-3\">-->\n<!--                        <div class=\"col-md-12 collapse px-0\" id=\"studentFeedbackCfs{{i}}\">-->\n<!--                            <div *ngIf=\"item.student_feedback != ''\" class=\"customize-card col-md-12 px-3\">{{item.student_feedback}}</div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--                <div class=\"col-md-12\">-->\n<!--                    <div class=\"mt-4 mb-2\">-->\n<!--                        <div *ngIf=\"item.question != '' && item.question_type_id != 24\" [innerHTML]=\"item.question | sanitizeHtml\" class=\"mb-0 overflow-auto div-disable\"></div>-->\n<!--                        <div *ngIf=\"item.question != '' && item.question_type_id == 24\" [innerHTML]=\"item.subQuestions[0]?.passage | sanitizeHtml\" class=\"mb-0 overflow-auto div-disable\"></div>-->\n<!--                    </div>-->\n<!--                    <div *ngIf=\"item.question_type_id == 1 || item.question_type_id == 2\" class=\"col-md-12 px-0 d-flex mt-4\">-->\n<!--                        <div class=\"col-md-6 mb-2\">-->\n<!--                            <label><b>Your Answer</b></label>-->\n<!--                            <div *ngFor=\"let option of item.student_answer; let k = index\" [ngClass]=\"{'student-selected' : option.isSelected === '' ? false : option.isSelected == k}\" class=\"dropdown-list col-md-12 mb-3 mx-3 p-2 overflow-y-scroll\">-->\n<!--                                <span [innerHTML]=\"option.options | sanitizeHtml\" class=\"remove-margin-bottom\"></span>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                        <div class=\"col-md-6 mb-2\">-->\n<!--                            <label><b>Correct Answer</b></label>-->\n<!--                            <div *ngFor=\"let option of item.answer; let k = index\" [ngClass]=\"{'student-selected' : option.correctActive === '' ? false : option.correctActive == k}\" class=\"dropdown-list col-md-12 mb-3 mx-3 p-2 overflow-y-scroll\">-->\n<!--                                <span [innerHTML]=\"item.options[k].options | sanitizeHtml\" class=\"remove-margin-bottom\"></span>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                    <div *ngIf=\"item.question_type_id == 5 || item.question_type_id == 7\" class=\"col-md-12 px-0 d-flex mt-4\">-->\n<!--                        <div class=\"col-md-6 table-flexible\">-->\n<!--                            <label><b>Your Answer</b></label>-->\n<!--                            <table class=\"table table-bordered text-center div-disable\">-->\n<!--                                <thead>-->\n<!--                                <tr>-->\n<!--                                    <th>Questions</th>-->\n<!--                                    <th *ngFor=\"let list of item.answer; let k=index\" [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\" id=\"{{'columnId' + i}}\"></th>-->\n<!--                                </tr>-->\n<!--                                </thead>-->\n<!--                                <tbody>-->\n<!--                                <tr *ngFor=\"let list of item.student_answer; let j=index\">-->\n<!--                                    <td [innerHTML]=\"list.options | sanitizeHtml\" class=\"remove-margin-bottom\"></td>-->\n<!--                                    <td *ngFor=\"let ans of item.answer; let k=index\">-->\n<!--                                        <input *ngIf=\"item.question_type_id == '5'\" [checked]=\"this.totalAns[i].student_answer[j].isSelected === '' ? false : this.totalAns[i].student_answer[j].isSelected == k\" class=\"radio_animated\" id=\"{{j}}chooseSingle{{i}}\" name=\"{{i}}choosesingle{{j}}your\" type=\"radio\">-->\n<!--                                        <input *ngIf=\"item.question_type_id == '7'\" [checked]=\"splitMultiChoose(this.totalAns[i].student_answer[j].isSelected, k)\" id=\"{{j}}chooseMulti{{i}}\" type=\"checkbox\">-->\n<!--                                    </td>-->\n<!--                                </tr>-->\n<!--                                </tbody>-->\n<!--                            </table>-->\n<!--                        </div>-->\n<!--                        <div class=\"col-md-6 table-flexible\">-->\n<!--                            <label><b>Correct Answer</b></label>-->\n<!--                            <table class=\"table table-bordered text-center div-disable\">-->\n<!--                                <thead>-->\n<!--                                <tr>-->\n<!--                                    <th>Questions</th>-->\n<!--                                    <th *ngFor=\"let list of item.answer; let k=index\" [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\"></th>-->\n<!--                                </tr>-->\n<!--                                </thead>-->\n<!--                                <tbody>-->\n<!--                                <tr *ngFor=\"let list of item.student_answer; let j=index\">-->\n<!--                                    <td [innerHTML]=\"list.options | sanitizeHtml\" class=\"remove-margin-bottom\"></td>-->\n<!--                                    <td *ngFor=\"let ans of item.answer; let k=index\">-->\n<!--                                        <input *ngIf=\"item.question_type_id == '5'\" [checked]=\"item.heading_option[j].correctActive === k\" class=\"radio_animated\" name=\"{{i}}choosesingle{{j}}corect\" type=\"radio\">-->\n<!--                                        <input *ngIf=\"item.question_type_id == '7'\" id=\"chooseMultipass{{i}}{{j}}{{k}}\" type=\"checkbox\">-->\n<!--                                    </td>-->\n<!--                                </tr>-->\n<!--                                </tbody>-->\n<!--                            </table>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                    <div *ngIf=\"item.question_type_id == 9\" class=\"col-md-12 px-0 d-flex mt-4\">-->\n<!--                        <div class=\"col-md-6\">-->\n<!--                            <label><b>Your Answer</b></label>-->\n<!--                            <div *ngFor=\"let data of item.student_answer; let j = index\" class=\"col-md-12 mt-3 mb-3\">-->\n<!--                                <label>Dropdown - {{j+1}}</label>-->\n<!--                                <div class=\"col-md-11\">-->\n<!--                                    <div class=\"col-md-12 bg-white innerhtml-margin-clear p-2 dropdown-border dropdown-toggle d-flex justify-content-between\" data-toggle=\"dropdown\" id=\"{{i}}dropdown{{j}}\"></div>-->\n<!--                                    <div class=\"col-md-11 dropdown-menu\">-->\n<!--                                            <span *ngFor=\"let option of data.options; let k = index\"-->\n<!--                                                  [innerHTML]=\"option.listOption | sanitizeHtml\"-->\n<!--                                                  class=\"dropdown-item dropdown-link innerhtml-margin-clear\"-->\n<!--                                                  style=\"overflow: scroll; overflow-y: hidden\"></span>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                        <div class=\"col-md-6\">-->\n<!--                            <label><b>Correct Answer</b></label>-->\n<!--                            <div *ngFor=\"let data of item.answer; let j = index\" class=\"col-md-12 mt-3 mb-3\">-->\n<!--                                <label>Dropdown - {{j+1}}</label>-->\n<!--                                <div class=\"col-md-11\">-->\n<!--                                    <div class=\"col-md-12 bg-white innerhtml-margin-clear p-2 dropdown-border dropdown-toggle d-flex justify-content-between\" data-toggle=\"dropdown\" id=\"{{i}}dropdownCorrect{{j}}\"></div>-->\n<!--                                    <div class=\"col-md-11 dropdown-menu\">-->\n<!--                                            <span *ngFor=\"let option of data.options; let k = index\"-->\n<!--                                                  [innerHTML]=\"option.listOption | sanitizeHtml\"-->\n<!--                                                  class=\"dropdown-item dropdown-link innerhtml-margin-clear\"-->\n<!--                                                  style=\"overflow: scroll; overflow-y: hidden\"></span>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                    <div *ngIf=\"item.question_type_id == 10\" class=\"col-md-12 d-flex mt-4\">-->\n<!--                        <div class=\"col-md-6\">-->\n<!--                            <label><b>Your Answer</b></label>-->\n<!--                            <div *ngFor=\"let data of item.student_answer; let j = index\" class=\"col-md-12 mt-3 mb-3\">-->\n<!--                                <label>Input - {{j+1}}</label>-->\n<!--                                <div class=\"form-span\">-->\n<!--                                    <div *ngIf=\"data.isSelected != ''\" [innerHTML]=\"data.isSelected | sanitizeHtml\"></div>-->\n<!--                                    <div *ngIf=\"data.isSelected == ''\">Student Not Answered</div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                        <div class=\"col-md-6\">-->\n<!--                            <label><b>Correct Answer</b></label>-->\n<!--                            <div *ngFor=\"let data of item.options; let j = index\" class=\"col-md-12 mt-3 mb-3\">-->\n<!--                                <label>Input - {{j+1}}</label>-->\n<!--                                <div class=\"form-span\">-->\n<!--                                    <div [innerHTML]=\"data.options[0].value | sanitizeHtml\"></div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                    <div *ngIf=\"item.question_type_id == 16\" class=\"col-md-12 d-flex mt-4\">-->\n<!--                        <div class=\"col-md-6\">-->\n<!--                            <label><b>Your Answer</b></label>-->\n<!--                            <div class=\"col-12\">-->\n<!--                                <div *ngFor=\"let list of item.student_answer; let k=index\" class=\"input-group mb-3 mt-3 inputMenu\">-->\n<!--                                    <div class=\"input-group mb-1 inputMenu\">-->\n<!--                                        <div class=\"input-group-prepend\">-->\n<!--                                        <span class=\"input-group-text\">-->\n<!--                                            <img class=\"img-fluid\" src=\"assets/images/pdf-icons/equal@2x.png\">-->\n<!--                                        </span>-->\n<!--                                        </div>-->\n<!--                                        <h4 [innerHTML]=\"list.options | sanitizeHtml\" class=\"form-control mb-0 pt-4 pb-5 overflow-scroll\"></h4>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                        <div class=\"col-md-6\">-->\n<!--                            <label><b>Correct Answer</b></label>-->\n<!--                            <div class=\"col-12\">-->\n<!--                                <div *ngFor=\"let list of item.answer; let k=index\" class=\"input-group mb-3 mt-3 inputMenu\">-->\n<!--                                    <div class=\"input-group mb-1 inputMenu\">-->\n<!--                                        <div class=\"input-group-prepend\">-->\n<!--                                        <span class=\"input-group-text\">-->\n<!--                                            <img class=\"img-fluid\" src=\"assets/images/pdf-icons/equal@2x.png\">-->\n<!--                                        </span>-->\n<!--                                        </div>-->\n<!--                                        <h4 [innerHTML]=\"list.correctAnswer | sanitizeHtml\" class=\"form-control mb-0 pt-4 pb-5 overflow-scroll\"></h4>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                    <div *ngIf=\"item.question_type_id == 20\" class=\"col-md-12 d-flex mt-4\">-->\n<!--                        &lt;!&ndash;                        <app-tiny-mice [editorPatchValue]= \"item.given_answer[0].isSelected == '' ? false : item.given_answer[0].isSelected\"&ndash;&gt;-->\n<!--                        &lt;!&ndash;                                       [height]=\"300\"&ndash;&gt;-->\n<!--                        &lt;!&ndash;                                       [id]=\"i+'para'\"&ndash;&gt;-->\n<!--                        &lt;!&ndash;                                       [showDropBtn]=\"false\"&ndash;&gt;-->\n<!--                        &lt;!&ndash;                                       [showInputBtn]=\"false\"&ndash;&gt;-->\n<!--                        &lt;!&ndash;                                       class=\"mt-2\">&ndash;&gt;-->\n<!--                        &lt;!&ndash;                        </app-tiny-mice>&ndash;&gt;-->\n<!--                        <div class=\"col-md-6\">-->\n<!--                            <label><b>Your Answer</b></label>-->\n<!--                            <div class=\"form-span\">-->\n<!--                                <div *ngIf=\"item.student_answer[0].isSelected != ''\" [innerHTML]=\"item.student_answer[0].isSelected | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>-->\n<!--                                <div *ngIf=\"item.student_answer[0].isSelected == ''\">Student Not Answered</div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                        <div class=\"col-md-6\">-->\n<!--                            <label><b>Correct Answer</b></label>-->\n<!--                            <div class=\"form-span\">-->\n<!--                                <div [innerHTML]=\"item.answer[0].correctAnswer | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n\n<!--                    </div>-->\n<!--                    <div *ngIf=\"item.question_type_id == 24\" class=\"mt-4\">-->\n<!--                        <div *ngFor=\"let sec of item.subQuestions; let j = index\" class=\"mb-3\">-->\n<!--                            <div class=\"col-md-12 d-flex justify-content-between\">-->\n<!--                                <div class=\"question-no-small mb-3\" style=\"background-color: #bc46c7\">-->\n<!--                                    <h6 class=\"mb-0\" style=\"color: white\">{{j+1}}</h6>-->\n<!--                                </div>-->\n<!--                                <div class=\"col-md-11 text-right d-flex justify-content-end\">-->\n<!--                                    <div class=\"pull-right px-0 mr-2\">-->\n<!--                                        <button *ngIf=\"sec.student_roughdata != ''\" [attr.aria-controls]=\"'#roughArea' + i + 'pass' + j\" [attr.data-target]=\"'#roughArea' + i + 'pass' + j\" aria-expanded=\"false\" class=\"btn-sm btn-primary mr-2\" data-toggle=\"collapse\">your Work Space</button>-->\n<!--                                        <button *ngIf=\"sec.student_feedback != ''\" [attr.aria-controls]=\"'#studentFeedback' + i + 'pass' + j\" [attr.data-target]=\"'#studentFeedback' + i + 'pass' + j\" aria-expanded=\"false\" class=\"btn-sm btn-primary mr-2\" data-toggle=\"collapse\">your Feedback</button>-->\n<!--                                    </div>-->\n<!--                                    <div class=\"col-md-2 px-0\">-->\n<!--                                        <div class=\"d-flex px-0\">-->\n<!--                                            <input [value]=\"sec.given_points\" class=\"mark-input div-disable\" style=\"text-align: center\">-->\n<!--                                            <input [value]=\"sec.points\" class=\"mark-input div-disable\" style=\"text-align: center\">-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                            <div class=\"col-md-6\">-->\n<!--                                <div class=\"row mt-3 px-3\">-->\n<!--                                    <div class=\"col-md-12 collapse px-0\" id=\"roughArea{{i}}pass{{j}}\">-->\n<!--                                        <div [innerHTML]=\"sec.student_roughdata | sanitizeHtml\" class=\"customize-card col-md-12 px-3 innerhtml-margin-clear\"></div>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                            <div class=\"col-md-6\">-->\n<!--                                <div class=\"row mt-3 px-3\">-->\n<!--                                    <div class=\"col-md-12 collapse px-0\" id=\"studentFeedback{{i}}pass{{j}}\">-->\n<!--                                        <div *ngIf=\"sec.student_feedback != ''\" class=\"customize-card col-md-12 px-3\">{{sec.student_feedback}}</div>-->\n<!--                                        <div *ngIf=\"sec.student_feedback == ''\" class=\"customize-card col-md-12 px-3\" style=\"text-align: center\">No Feedback Found</div>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                            <div [innerHTML]=\"sec.question | sanitizeHtml\" class=\"mb-3\"></div>-->\n<!--                            <div *ngIf=\"sec.question_type_id == '1' || sec.question_type_id == '2'\" class=\"col-md-12 px-0 d-flex mt-3\">-->\n<!--                                <div class=\"col-md-6\">-->\n<!--                                    <label><b>Your Answer</b></label>-->\n<!--                                    <div class=\"col-md-12 mb-2 div-disable\">-->\n<!--                                        <div *ngFor=\"let option of sec.student_answer; let k = index\" [ngClass]=\"{'student-selected' : option.isSelected === '' ? false : k == option.isSelected}\" class=\"dropdown-list col-md-12 mb-3 mx-3 p-2\">-->\n<!--                                            <span [innerHTML]=\"option.options | sanitizeHtml\" class=\"remove-margin-bottom\"></span>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                                <div class=\"col-md-6\">-->\n<!--                                    <label><b>Correct Answer</b></label>-->\n<!--                                    <div class=\"col-md-12 mb-2 div-disable\">-->\n<!--                                        <div *ngFor=\"let option of sec.answer; let k = index\" [ngClass]=\"{'student-selected' : option.correctActive === '' ? false : k == option.correctActive}\" class=\"dropdown-list col-md-12 mb-3 mx-3 p-2\">-->\n<!--                                            <span [innerHTML]=\"sec.options[k].options | sanitizeHtml\" class=\"remove-margin-bottom\"></span>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                            <div *ngIf=\"sec.question_type_id == '5' || sec.question_type_id == '7'\" class=\"col-md-12 px-0 d-flex\">-->\n<!--                                <div class=\"col-md-6 table-flexible\">-->\n<!--                                    <label><b>Your Answer</b></label>-->\n<!--                                    <table class=\"table table-bordered text-center div-disable\">-->\n<!--                                        <thead>-->\n<!--                                        <tr>-->\n<!--                                            <th>Questions</th>-->\n<!--                                            <th *ngFor=\"let list of sec.answer; let l=index\" [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\"></th>-->\n<!--                                        </tr>-->\n<!--                                        </thead>-->\n<!--                                        <tbody>-->\n<!--                                        <tr *ngFor=\"let list of sec.student_answer; let k=index\">-->\n<!--                                            <td [innerHTML]=\"list.options | sanitizeHtml\" class=\"remove-margin-bottom\"></td>-->\n<!--                                            <td *ngFor=\"let ans of sec.answer; let l=index\">-->\n<!--                                                <input *ngIf=\"sec.question_type_id == '5'\" [checked]=\"sec.student_answer[k].isSelected === '' ? false : sec.student_answer[k].isSelected == l\" class=\"radio_animated\" name=\"choose{{k}}\" type=\"radio\">-->\n<!--                                                <input *ngIf=\"sec.question_type_id == '7'\" [checked]=\"splitMultiChoose(sec.student_answer[k].isSelected, l)\" type=\"checkbox\">-->\n<!--                                            </td>-->\n<!--                                        </tr>-->\n<!--                                        </tbody>-->\n<!--                                    </table>-->\n<!--                                </div>-->\n<!--                                <div class=\"col-md-6 table-flexible\">-->\n<!--                                    <label><b>Correct Answer</b></label>-->\n<!--                                    <table class=\"table table-bordered text-center div-disable\">-->\n<!--                                        <thead>-->\n<!--                                        <tr>-->\n<!--                                            <th>Questions</th>-->\n<!--                                            <th *ngFor=\"let list of sec.answer; let l=index\" [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\"></th>-->\n<!--                                        </tr>-->\n<!--                                        </thead>-->\n<!--                                        <tbody>-->\n<!--                                        <tr *ngFor=\"let list of sec.student_answer; let k=index\">-->\n<!--                                            <td [innerHTML]=\"list.options\" class=\"remove-margin-bottom\"></td>-->\n<!--                                            <td *ngFor=\"let ans of sec.answer; let l=index\">-->\n<!--                                                <input *ngIf=\"sec.question_type_id == '5'\" [checked]=\"sec.heading_option[k].correctActive == l\" class=\"radio_animated\" name=\"{{i}}passage{{j}}cho{{k}}ose{{l}}\" type=\"radio\">-->\n<!--                                                <input *ngIf=\"sec.question_type_id == '7'\" id=\"chooseMultipass1{{i}}{{j}}{{k}}{{l}}\" type=\"checkbox\">-->\n<!--                                            </td>-->\n<!--                                        </tr>-->\n<!--                                        </tbody>-->\n<!--                                    </table>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                            <div *ngIf=\"sec.question_type_id == '10'\" class=\"col-md-12 px-0 d-flex\">-->\n<!--                                <div class=\"col-md-6 px-0\">-->\n<!--                                    <label><b>Your Answer</b></label>-->\n<!--                                    <div *ngFor=\"let data of sec.student_answer;let k = index\" class=\"col-md-12 mt-3 mb-3\">-->\n<!--                                        <label>Input - {{k+1}}</label>-->\n<!--                                        <div class=\"form-span\">-->\n<!--                                            <div *ngIf=\"data.isSelected != ''\" [innerHTML]=\"data.isSelected | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>-->\n<!--                                            <div *ngIf=\"data.isSelected == ''\">Student Not Answered</div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                                <div class=\"col-md-6 px-0\">-->\n<!--                                    <label><b>Correct Answer</b></label>-->\n<!--                                    <div *ngFor=\"let data of sec.options; let k = index\" class=\"col-md-12 mt-3 mb-3\">-->\n<!--                                        <label>Input - {{k+1}}</label>-->\n<!--                                        <div class=\"form-span\">-->\n<!--                                            <div [innerHTML]=\"data.options[0].value | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                            <div *ngIf=\"sec.question_type_id == '20'\" class=\"col-md-12 px-0 d-flex\">-->\n<!--                                <div class=\"col-md-6\">-->\n<!--                                    <label><b>Your Answer</b></label>-->\n<!--                                    <div class=\"form-span\">-->\n<!--                                        <div *ngIf=\"sec.student_answer[0].isSelected != ''\" [innerHTML]=\"sec.student_answer[0].isSelected | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>-->\n<!--                                        <div *ngIf=\"sec.student_answer[0].isSelected == ''\">Student Not Answered</div>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                                <div class=\"col-md-6\">-->\n<!--                                    <label><b>Correct Answer</b></label>-->\n<!--                                    <div class=\"form-span\">-->\n<!--                                        <div [innerHTML]=\"sec.answer[0].correctAnswer | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                            <div *ngIf=\"sec.explanation != ''\" class=\"col-md-12 mt-4 d-flex\">-->\n<!--                                <div class=\"col-md-12 px-0\">-->\n<!--                                    <label>Explanation: </label>-->\n<!--                                    <div class=\"explanation innerhtml-margin-clear\">{{sec.explanation}}</div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                            <div class=\"col-md-12\">-->\n<!--                                <label>Feedback</label>-->\n<!--                                <textarea [value]=\"sec.feedback\" class=\"form-control\" cols=\"30\" placeholder=\"Please Enter the Feedback\" readonly rows=\"2\"></textarea>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                    <div *ngIf=\"item.question_type_id == 28\" class=\"col-md-12 d-flex mt-4 px-3 mb-3\">-->\n<!--                        <div class=\"col-md-6\">-->\n<!--                            <label><b>Your Answer</b></label>-->\n<!--                            <div class=\"form-span\">-->\n<!--                                <div *ngIf=\"item.student_answer[0].isSelected != ''\" [innerHTML]=\"item.student_answer[0].isSelected | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>-->\n<!--                                <div *ngIf=\"item.student_answer[0].isSelected == ''\" class=\"innerhtml-margin-clear\">Student Not Answered</div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                        <div class=\"col-md-6\">-->\n<!--                            <label><b>Correct Answer</b></label>-->\n<!--                            <div class=\"form-span\">-->\n<!--                                <div [innerHTML]=\"item.answer[0].correctAnswer | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                    <div *ngIf=\"item.question_type_id == 40 || item.question_type_id == 41\" class=\"col-md-12 d-flex mt-4\">-->\n<!--                        <div class=\"col-md-6\">-->\n<!--                            <label><b>Your Answer</b></label>-->\n<!--                            <div class=\"col-12 mt-0 d-flex justify-content-center\">-->\n<!--                                <app-graph-component [editMode]=\"false\"-->\n<!--                                                     [editPatchValue]=\"item.student_answer.length == 0 ? false : parseVal(item.student_answer[0].correctAnswer)\"-->\n<!--                                                     [graphId]=\"'graphAnsweringY'+i\"-->\n<!--                                                     [questionType]=\"item.question_type_id\"></app-graph-component>-->\n<!--                            </div>-->\n<!--                            <div  *ngIf=\"item.student_editor_answer != ''\" class=\"col-md-12 mt-3\">-->\n<!--                                <div class=\"form-span innerhtml-margin-clear\">-->\n<!--                                    <div [innerHTML]=\"item.student_editor_answer | sanitizeHtml\"></div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                        <div class=\"col-md-6\">-->\n<!--                            <label><b>Correct Answer</b></label>-->\n<!--                            <div class=\"col-12 mt-0 d-flex justify-content-center\">-->\n<!--                                <app-graph-component [editMode]=\"false\"-->\n<!--                                                     [editPatchValue]=\"item.answer.length == 0 ? false : parseVal(item.answer[0].correctAnswer)\"-->\n<!--                                                     [graphId]=\"'graphAnsweringR'+i\"-->\n<!--                                                     [questionType]=\"item.question_type_id\"></app-graph-component>-->\n<!--                            </div>-->\n<!--                            <div  *ngIf=\"item.question_editor_answer != ''\" class=\"col-md-12 mt-3\">-->\n<!--                                <div class=\"form-span innerhtml-margin-clear\">-->\n<!--                                    <div [innerHTML]=\"item.question_editor_answer | sanitizeHtml\"></div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                    <div *ngIf=\"item.explanation != '' && item.question_type_id != 24\" class=\"col-md-12 mt-4 d-flex\">-->\n<!--                        <div class=\"col-md-12 px-0\">-->\n<!--                            <label>Explanation: </label>-->\n<!--                            <div class=\"explanation innerhtml-margin-clear\">{{item.explanation}}</div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                    <div *ngIf=\"item.question_type_id != 24\" class=\"col-md-12 mt-3\">-->\n<!--                        <label>Feedback</label>-->\n<!--                        <textarea [value]=\"item.feedback\" class=\"form-control\" cols=\"30\" placeholder=\"Please Enter the Feedback\" readonly rows=\"2\"></textarea>-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--        </div>-->\n<!--    </div>-->\n<!--</div>-->\n", styles: [".point-border-left{\n  border: 1px solid #8F008A;\n  border-right: 0;\n  text-align: center;\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n\n.point-border-right {\n  border: 1px solid #8F008A;\n  text-align: center;\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.w-95 {\n  width: 95%\n}\n.inner_button {\n  padding: 4px 8px !important;\n  background: #ffff !important;\n  color: black;\n  border: 2px solid #e1e4eb !important;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 16px;\n  height: 30px;\n  cursor: text;\n}\n\n.button_design {\n  cursor: default;\n}\n\n.inner_button:focus, .button_design:focus {\n  box-shadow: none !important;\n  outline: none;\n}\n\n.button_design:active {\n  color: #FFFFFF !important;\n}\n\n.inner_button:active {\n  color: black !important;\n}\n\n.inner_button:focus-visible, .button_design:focus-visible {\n  outline: none !important;\n}\n\n.timer_button {\n  border: 1px solid #8f008a;\n  background: #fff !important;\n  border-radius: 4px;\n}\n\n.student-selected {\n  background-color: #e9ccec !important;\n  border-radius: 4px !important;\n}\n.correct-ans-selected {\n  background-color: #d4edda !important;\n  border-radius: 4px !important;\n}\n.wrong-ans-selected {\n  background-color: #ffb7b7 !important;\n  border-radius: 4px !important;\n}\n.img-fluid {\n  height: 60px !important;\n}\n\n.answer_key {\n  position: relative;\n  display: inline-block;\n  font-family: \"Rage Italic\", serif;\n  font-style: italic;\n  font-size: 16px;\n  cursor: pointer;\n  color: #007bff;\n  font-weight: bold;\n  transition: transform 0.3s ease, font-size 0.3s ease;\n}\n\n.answer_key::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: -2px;\n  width: 0;\n  height: 2px;\n  background-color: #007bff;\n  transition: width 0.4s ease;\n}\n\n.answer_key:hover {\n  transform: translateY(-4px);\n  color: #007bff;\n}\n\n.answer_key:hover::after {\n  width: 100%;\n}\n"] }]
    }], () => [{ type: i1.NgbModalConfig }, { type: i2.ConfigurationService }, { type: i3.DomSanitizer }, { type: i4.TeacherService }, { type: i5.StudentService }, { type: i1.NgbModal }, { type: i6.AuthService }, { type: i7.CommonDataService }, { type: i8.NavService }, { type: i9.CommonService }, { type: i10.Router }, { type: i11.EnvironmentService }, { type: i12.ValidationService }, { type: i13.ToastrService }, { type: i14.CreatorService }, { type: i15.ContentdetailService }], { answerShow: [{
            type: Input
        }], contentId: [{
            type: Input
        }], contentFormat: [{
            type: Input
        }], classId: [{
            type: Input
        }], studentReportId: [{
            type: Input
        }], backStatus: [{
            type: Input
        }], studentContentId: [{
            type: Input
        }], is_test: [{
            type: Input
        }], studentName: [{
            type: Output
        }], workArea: [{
            type: ViewChild,
            args: ['workArea']
        }], overallFeedback: [{
            type: ViewChild,
            args: ['overallFeedback']
        }], onResize: [{
            type: HostListener,
            args: ['window:resize']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AnswerSheetComponent, { className: "AnswerSheetComponent" }); })();
//# sourceMappingURL=answer-sheet.component.js.map