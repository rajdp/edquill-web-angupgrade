import { Component, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { parse } from 'flatted';
import { ContentdetailService } from '../../../shared/service/contentdetail.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/configuration.service";
import * as i2 from "../../../shared/service/common-data.service";
import * as i3 from "../../../shared/service/common.service";
import * as i4 from "../../../shared/service/auth.service";
import * as i5 from "../../../shared/service/class.service";
import * as i6 from "@ng-bootstrap/ng-bootstrap";
import * as i7 from "@angular/platform-browser";
import * as i8 from "@angular/router";
import * as i9 from "../../../shared/service/newsubject.service";
import * as i10 from "../../../shared/service/teacher.service";
import * as i11 from "../../../shared/service/creator.service";
import * as i12 from "../../../shared/service/nav.service";
import * as i13 from "@angular/common";
import * as i14 from "@ng-select/ng-select";
import * as i15 from "@angular/forms";
import * as i16 from "ngx-pagination";
import * as i17 from "../../auth/graph-component/graph-component.component";
import * as i18 from "../../auth/tiny-mice/tiny-mice.component";
import * as i19 from "../../auth/annotation/annotation.component";
import * as i20 from "../../auth/source-link/source-link.component";
import * as i21 from "../../../shared/pipes/sanitizer/SanitizeHtmlPipe.pipe";
const _c0 = ["multiChoiceDetail"];
const _c1 = ["viewGraph"];
const _c2 = ["additionalResourceLink"];
const _c3 = ["matchTableDetail"];
const _c4 = ["dropDownDetail"];
const _c5 = ["pdfPage"];
const _c6 = ["class"];
const _c7 = ["viewExplain"];
const _c8 = ["feedbackStatus"];
const _c9 = a0 => ({ "selectColor": a0 });
const _c10 = a0 => ({ itemsPerPage: 10, currentPage: a0 });
const _c11 = () => ["21", "22"];
const _c12 = () => ["20"];
function PreviewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelement(1, "img", 17);
    i0.ɵɵelementEnd();
} }
function PreviewComponent_div_3_i_4_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 23);
    i0.ɵɵlistener("click", function PreviewComponent_div_3_i_4_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.editAction()); });
    i0.ɵɵelementEnd();
} }
function PreviewComponent_div_3_span_5_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function PreviewComponent_div_3_span_5_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.previewback()); });
    i0.ɵɵtext(1, "back");
    i0.ɵɵelementEnd();
} }
function PreviewComponent_div_3_span_5_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵtext(1, "back");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/assessment-correction/list-correction");
} }
function PreviewComponent_div_3_span_5_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵtext(1, "back To Folder");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/assignment-correction/list-correction");
} }
function PreviewComponent_div_3_span_5_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵtext(1, "back");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/classroom/list-classroom");
} }
function PreviewComponent_div_3_span_5_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function PreviewComponent_div_3_span_5_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.back()); });
    i0.ɵɵtext(1, "back");
    i0.ɵɵelementEnd();
} }
function PreviewComponent_div_3_span_5_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function PreviewComponent_div_3_span_5_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.AdditionalSourecLink()); });
    i0.ɵɵtext(1, "Resources");
    i0.ɵɵelementEnd();
} }
function PreviewComponent_div_3_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵtemplate(1, PreviewComponent_div_3_span_5_button_1_Template, 2, 0, "button", 25)(2, PreviewComponent_div_3_span_5_button_2_Template, 2, 1, "button", 26)(3, PreviewComponent_div_3_span_5_button_3_Template, 2, 1, "button", 26)(4, PreviewComponent_div_3_span_5_button_4_Template, 2, 1, "button", 26)(5, PreviewComponent_div_3_span_5_button_5_Template, 2, 0, "button", 25)(6, PreviewComponent_div_3_span_5_button_6_Template, 2, 0, "button", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.previewType == "repository" || ctx_r1.previewType == "home");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.previewType == "correction");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.previewType == "assignment-correction");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.previewType == "content-folder");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.backToResources == "available");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.additionalLinks == null ? null : ctx_r1.additionalLinks.length) != 0);
} }
function PreviewComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18)(1, "h4", 19);
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "div", 20);
    i0.ɵɵtemplate(4, PreviewComponent_div_3_i_4_Template, 1, 0, "i", 21)(5, PreviewComponent_div_3_span_5_Template, 7, 6, "span", 22);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.detailData.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.allowContentEdit && ctx_r1.calledBy != "popUp");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.calledBy == "routes");
} }
function PreviewComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-source-link", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.questionEmpty && !ctx_r1.expandPdf ? 12 : ctx_r1.deleteAnnatation && !ctx_r1.expandPdf ? 12 : 8, " px-0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("setHeight", false)("pdfPath", ctx_r1.getpdf[0]);
} }
function PreviewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32)(1, "app-annotation", 33);
    i0.ɵɵlistener("annotate", function PreviewComponent_div_7_Template_app_annotation_annotate_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getAreaInfo($event)); })("deleteAnnotation", function PreviewComponent_div_7_Template_app_annotation_deleteAnnotation_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getDeleteAction($event)); })("expandBoolean", function PreviewComponent_div_7_Template_app_annotation_expandBoolean_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.expandPdfSize($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.questionEmpty || ctx_r1.expandPdf ? 12 : ctx_r1.deleteAnnatation || ctx_r1.expandPdf ? 12 : 8, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("userType", "student")("getAnnotate", ctx_r1.areaInfo)("getDragQues", ctx_r1.dragQuestionsList)("pdfPath", ctx_r1.pdfTemplate)("expandPdf", true)("toolAlignCenter", ctx_r1.questionEmpty)("toolHide", false);
} }
function PreviewComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32)(1, "app-annotation", 34);
    i0.ɵɵlistener("expandBoolean", function PreviewComponent_div_8_Template_app_annotation_expandBoolean_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.expandPdfSize($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.questionEmpty || ctx_r1.expandPdf ? 12 : 8, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("getAnnotate", ctx_r1.areaInfo)("getDragQues", ctx_r1.dragQuestionsList)("pdfPath", ctx_r1.pdfTemplate)("expandPdf", true)("toolAlignCenter", ctx_r1.questionEmpty)("toolHide", !(ctx_r1.previewType == "teacher_preview"))("userType", "teacher");
} }
function PreviewComponent_div_9_div_1_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 42);
    i0.ɵɵlistener("click", function PreviewComponent_div_9_div_1_img_1_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.hideQuestion()); });
    i0.ɵɵelementEnd();
} }
function PreviewComponent_div_9_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 43);
    i0.ɵɵlistener("click", function PreviewComponent_div_9_div_1_img_2_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.hideQuestion()); });
    i0.ɵɵelementEnd();
} }
function PreviewComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, PreviewComponent_div_9_div_1_img_1_Template, 1, 0, "img", 40)(2, PreviewComponent_div_9_div_1_img_2_Template, 1, 0, "img", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showQuestion);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showQuestion);
} }
function PreviewComponent_div_9_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46);
    i0.ɵɵelement(1, "input", 47);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", sec_r10.heading);
} }
function PreviewComponent_div_9_div_3_div_2_img_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 63);
} }
function PreviewComponent_div_9_div_3_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 64)(1, "div", 65)(2, "label");
    i0.ɵɵtext(3, "Question: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "span", 66);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    const list_r12 = ctx_r10.$implicit;
    const j_r13 = ctx_r10.index;
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate1("id", "", j_r13, "+ 'show'");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 3, list_r12.question), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_9_div_3_div_2_div_12_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r14 = ctx.$implicit;
    const list_r12 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c9, items_r14.toLowerCase() === list_r12.answer.toString().toLowerCase()));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(items_r14);
} }
function PreviewComponent_div_9_div_3_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 67);
    i0.ɵɵtemplate(1, PreviewComponent_div_9_div_3_div_2_div_12_span_1_Template, 2, 4, "span", 68);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r12.array);
} }
function PreviewComponent_div_9_div_3_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 70)(1, "div", 11);
    i0.ɵɵelement(2, "input", 71);
    i0.ɵɵelementStart(3, "h4", 72);
    i0.ɵɵtext(4, "True");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 71);
    i0.ɵɵelementStart(6, "h4", 72);
    i0.ɵɵtext(7, "False");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const list_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", list_r12.answer.toString() == "true");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", list_r12.answer.toString() == "false");
} }
function PreviewComponent_div_9_div_3_div_2_div_14_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 75);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const chc_r15 = ctx.$implicit;
    const list_r12 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("selected", chc_r15.choice == list_r12.answer.toString());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(chc_r15.choice);
} }
function PreviewComponent_div_9_div_3_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 70)(1, "select", 73);
    i0.ɵɵtemplate(2, PreviewComponent_div_9_div_3_div_2_div_14_option_2_Template, 2, 2, "option", 74);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", list_r12.array);
} }
function PreviewComponent_div_9_div_3_div_2_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 77)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "textarea", 78);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const answer_r16 = ctx.$implicit;
    const k_r17 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Answer ", k_r17 + 1, ": ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", answer_r16);
} }
function PreviewComponent_div_9_div_3_div_2_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 70);
    i0.ɵɵtemplate(1, PreviewComponent_div_9_div_3_div_2_div_15_div_1_Template, 4, 2, "div", 76);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r12 == null ? null : list_r12.answer);
} }
function PreviewComponent_div_9_div_3_div_2_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 70)(1, "label");
    i0.ɵɵtext(2, "Free text");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "textarea", 79);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Number of lines: ", list_r12.answer, "");
} }
function PreviewComponent_div_9_div_3_div_2_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 77)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 81);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const answer_r18 = ctx.$implicit;
    const k_r19 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Answer ", k_r19 + 1, ": ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 2, answer_r18), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_9_div_3_div_2_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 80);
    i0.ɵɵtemplate(1, PreviewComponent_div_9_div_3_div_2_div_17_div_1_Template, 5, 4, "div", 76);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r12 == null ? null : list_r12.answer);
} }
function PreviewComponent_div_9_div_3_div_2_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 70)(1, "button", 82);
    i0.ɵɵlistener("click", function PreviewComponent_div_9_div_3_div_2_div_18_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r20); const list_r12 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.graphDetail(list_r12.answer)); });
    i0.ɵɵtext(2, "view graph");
    i0.ɵɵelementEnd()();
} }
function PreviewComponent_div_9_div_3_div_2_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "textarea", 85);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r21 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", opt_r21.value);
} }
function PreviewComponent_div_9_div_3_div_2_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 83);
    i0.ɵɵtemplate(1, PreviewComponent_div_9_div_3_div_2_div_19_div_1_Template, 2, 1, "div", 84);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r12.answer);
} }
function PreviewComponent_div_9_div_3_div_2_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 86)(1, "label", 87);
    i0.ɵɵtext(2, "Explanation: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 88);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 1, list_r12.answer_explanation), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_9_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48)(1, "div", 49)(2, "div", 11)(3, "div", 50)(4, "span", 51);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "img", 52)(7, "img", 53);
    i0.ɵɵtemplate(8, PreviewComponent_div_9_div_3_div_2_img_8_Template, 1, 0, "img", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "div", 55);
    i0.ɵɵtemplate(10, PreviewComponent_div_9_div_3_div_2_div_10_Template, 6, 5, "div", 56);
    i0.ɵɵelementStart(11, "div", 57);
    i0.ɵɵtemplate(12, PreviewComponent_div_9_div_3_div_2_div_12_Template, 2, 1, "div", 58)(13, PreviewComponent_div_9_div_3_div_2_div_13_Template, 8, 2, "div", 59)(14, PreviewComponent_div_9_div_3_div_2_div_14_Template, 3, 1, "div", 59)(15, PreviewComponent_div_9_div_3_div_2_div_15_Template, 2, 1, "div", 59)(16, PreviewComponent_div_9_div_3_div_2_div_16_Template, 5, 1, "div", 59)(17, PreviewComponent_div_9_div_3_div_2_div_17_Template, 2, 1, "div", 60)(18, PreviewComponent_div_9_div_3_div_2_div_18_Template, 3, 0, "div", 59)(19, PreviewComponent_div_9_div_3_div_2_div_19_Template, 2, 1, "div", 61)(20, PreviewComponent_div_9_div_3_div_2_div_20_Template, 5, 3, "div", 62);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const list_r12 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(list_r12.sub_question_no);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", list_r12.auto_grade == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", list_r12.match_case == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r12.question_type_id == "30");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r12.question != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.previewType == "student_preview");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r12.question_type_id == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r12.question_type_id == "3");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r12.question_type_id == "9");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r12.question_type_id == "10");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r12.question_type_id == "20");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r12.question_type_id == "30");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r12.question_type_id == "40");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r12.question_type_id == "54");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r12.answer_explanation != "");
} }
function PreviewComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, PreviewComponent_div_9_div_3_div_1_Template, 2, 1, "div", 44)(2, PreviewComponent_div_9_div_3_div_2_Template, 21, 15, "div", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r10 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.totalsub.length != 1 || sec_r10.heading != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", sec_r10.section);
} }
function PreviewComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵtemplate(1, PreviewComponent_div_9_div_1_Template, 3, 2, "div", 36);
    i0.ɵɵelementStart(2, "div", 37);
    i0.ɵɵtemplate(3, PreviewComponent_div_9_div_3_Template, 3, 2, "div", 38);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("col-md-", !ctx_r1.showQuestion ? 4 : 12, " scrollPanel pr-0");
    i0.ɵɵproperty("hidden", ctx_r1.questionEmpty != false || ctx_r1.deleteAnnatation);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.totalsub.length != 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.totalsub);
} }
function PreviewComponent_div_10_i_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 23);
    i0.ɵɵlistener("click", function PreviewComponent_div_10_i_5_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.editAction()); });
    i0.ɵɵelementEnd();
} }
function PreviewComponent_div_10_span_6_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵtext(1, "back");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/repository/content-home");
} }
function PreviewComponent_div_10_span_6_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 93);
    i0.ɵɵlistener("click", function PreviewComponent_div_10_span_6_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.back()); });
    i0.ɵɵtext(1, "back");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/class/view-assign/2");
} }
function PreviewComponent_div_10_span_6_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵtext(1, "back");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/classroom/list-classroom");
} }
function PreviewComponent_div_10_span_6_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 94);
    i0.ɵɵlistener("click", function PreviewComponent_div_10_span_6_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.AdditionalSourecLink()); });
    i0.ɵɵtext(1, "Resources");
    i0.ɵɵelementEnd();
} }
function PreviewComponent_div_10_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵtemplate(1, PreviewComponent_div_10_span_6_button_1_Template, 2, 1, "button", 26)(2, PreviewComponent_div_10_span_6_button_2_Template, 2, 1, "button", 91)(3, PreviewComponent_div_10_span_6_button_3_Template, 2, 1, "button", 26)(4, PreviewComponent_div_10_span_6_button_4_Template, 2, 0, "button", 92);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.backToResources == null && ctx_r1.previewType != "content-folder");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.backToResources == "available");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.previewType == "content-folder");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.detailData == null ? null : ctx_r1.detailData.links.length) != 0);
} }
function PreviewComponent_div_10_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 95)(1, "div", 96)(2, "div", 97)(3, "h4", 98);
    i0.ɵɵtext(4, "Description:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 99);
    i0.ɵɵelement(6, "span", 81);
    i0.ɵɵpipe(7, "sanitizeHtml");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(7, 1, ctx_r1.detailData == null ? null : ctx_r1.detailData.file_text), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 89)(2, "h4", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementStart(4, "div", 20);
    i0.ɵɵtemplate(5, PreviewComponent_div_10_i_5_Template, 1, 0, "i", 21)(6, PreviewComponent_div_10_span_6_Template, 5, 4, "span", 22);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(7, PreviewComponent_div_10_div_7_Template, 8, 3, "div", 90);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", (ctx_r1.responseData == null ? null : ctx_r1.responseData.is_test) == "1" && ctx_r1.responseData.is_test ? ctx_r1.responseData == null ? null : ctx_r1.responseData.name : ctx_r1.detailData == null ? null : ctx_r1.detailData.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.allowContentEdit && ctx_r1.calledBy != "popUp");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.calledBy == "routes");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.detailData == null ? null : ctx_r1.detailData.file_text) && (ctx_r1.detailData == null ? null : ctx_r1.detailData.file_text) != "");
} }
function PreviewComponent_div_11_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 110)(1, "ng-select", 111);
    i0.ɵɵtwoWayListener("ngModelChange", function PreviewComponent_div_11_div_8_Template_ng_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.testContentID, $event) || (ctx_r1.testContentID = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function PreviewComponent_div_11_div_8_Template_ng_select_change_1_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.callTestDetails()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.testDetails);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.testContentID);
    i0.ɵɵproperty("clearable", false)("searchable", false);
} }
function PreviewComponent_div_11_i_9_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 23);
    i0.ɵɵlistener("click", function PreviewComponent_div_11_i_9_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.testData ? ctx_r1.testEdit() : ctx_r1.editAction()); });
    i0.ɵɵelementEnd();
} }
function PreviewComponent_div_11_span_10_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵtext(1, "back");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/repository/content-home");
} }
function PreviewComponent_div_11_span_10_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵtext(1, "back");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/home/list-home");
} }
function PreviewComponent_div_11_span_10_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 93);
    i0.ɵɵlistener("click", function PreviewComponent_div_11_span_10_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.back()); });
    i0.ɵɵtext(1, "back");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/class/view-assign/2");
} }
function PreviewComponent_div_11_span_10_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵtext(1, "back");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/classroom/list-classroom");
} }
function PreviewComponent_div_11_span_10_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 94);
    i0.ɵɵlistener("click", function PreviewComponent_div_11_span_10_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r28); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.AdditionalSourecLink()); });
    i0.ɵɵtext(1, "Resources");
    i0.ɵɵelementEnd();
} }
function PreviewComponent_div_11_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵtemplate(1, PreviewComponent_div_11_span_10_button_1_Template, 2, 1, "button", 26)(2, PreviewComponent_div_11_span_10_button_2_Template, 2, 1, "button", 26)(3, PreviewComponent_div_11_span_10_button_3_Template, 2, 1, "button", 91)(4, PreviewComponent_div_11_span_10_button_4_Template, 2, 1, "button", 26)(5, PreviewComponent_div_11_span_10_button_5_Template, 2, 0, "button", 92);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.backToResources == null && ctx_r1.previewType != "content-folder");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.backToResources == "home");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.backToResources == "available");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.previewType == "content-folder");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.detailData == null ? null : ctx_r1.detailData.links.length) != 0);
} }
function PreviewComponent_div_11_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 112)(1, "div", 113)(2, "div", 97)(3, "h4", 98);
    i0.ɵɵtext(4, "Description:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 99);
    i0.ɵɵelement(6, "span", 81);
    i0.ɵɵpipe(7, "sanitizeHtml");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(7, 1, ctx_r1.detailData == null ? null : ctx_r1.detailData.file_text), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_11_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 114)(1, "h4", 115);
    i0.ɵɵtext(2, "Questions & Answer");
    i0.ɵɵelementEnd()();
} }
function PreviewComponent_div_11_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 116)(1, "div", 117)(2, "button", 118);
    i0.ɵɵtext(3, "No Question Added For This Content !");
    i0.ɵɵelementEnd()()();
} }
function PreviewComponent_div_11_div_14_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 141)(1, "b");
    i0.ɵɵelement(2, "h3", 142);
    i0.ɵɵpipe(3, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(3, 1, list_r30.question), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_11_div_14_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 143)(1, "div", 144)(2, "h2");
    i0.ɵɵtext(3, "Essay Prompt");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵelement(5, "span", 142);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", ctx_r1.convertMarkdownToHtml(list_r30.question), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_11_div_14_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 145);
    i0.ɵɵelement(1, "span", 146);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, list_r30.subQuestions[0].passage), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_11_div_14_div_1_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 148)(1, "span", 149);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 150);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    const j_r32 = ctx.index;
    const list_r30 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c9, (item_r31.correctActive === 0 ? false : item_r31.correctActive == 1) && ctx_r1.showAnswer));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((j_r32 + 1 + 9).toString(36).toUpperCase());
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 3, list_r30.options[j_r32].options), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_11_div_14_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 112);
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_div_12_div_1_Template, 5, 7, "div", 147);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r30.answer);
} }
function PreviewComponent_div_11_div_14_div_1_div_13_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 81);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, item_r33), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_11_div_14_div_1_div_13_tbody_7_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "input", 154);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r34 = ctx.index;
    const ctx_r34 = i0.ɵɵnextContext();
    const ans_r36 = ctx_r34.$implicit;
    const j_r37 = ctx_r34.index;
    const i_r38 = i0.ɵɵnextContext(3).index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate3("name", "", i_r38, "choose", j_r37, "p", ctx_r1.page, "");
    i0.ɵɵproperty("checked", ans_r36.correctActive == k_r34 && ctx_r1.showAnswer);
} }
function PreviewComponent_div_11_div_14_div_1_div_13_tbody_7_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 81);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, PreviewComponent_div_11_div_14_div_1_div_13_tbody_7_tr_1_td_3_Template, 2, 5, "td", 84);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r37 = ctx.index;
    const list_r30 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, list_r30.options[j_r37].options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", list_r30.answer);
} }
function PreviewComponent_div_11_div_14_div_1_div_13_tbody_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody");
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_div_13_tbody_7_tr_1_Template, 4, 4, "tr", 84);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r30.heading_option);
} }
function PreviewComponent_div_11_div_14_div_1_div_13_tbody_8_tr_1_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 157);
} if (rf & 2) {
    const k_r39 = i0.ɵɵnextContext().index;
    const j_r40 = i0.ɵɵnextContext().index;
    const i_r38 = i0.ɵɵnextContext(3).index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate4("id", "checkMulti", ctx_r1.page != 1 ? ctx_r1.page - 1 : "", "", i_r38, "", j_r40, "", k_r39, "");
} }
function PreviewComponent_div_11_div_14_div_1_div_13_tbody_8_tr_1_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 158);
} }
function PreviewComponent_div_11_div_14_div_1_div_13_tbody_8_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_div_13_tbody_8_tr_1_td_3_input_1_Template, 1, 5, "input", 155)(2, PreviewComponent_div_11_div_14_div_1_div_13_tbody_8_tr_1_td_3_input_2_Template, 1, 0, "input", 156);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showAnswer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showAnswer);
} }
function PreviewComponent_div_11_div_14_div_1_div_13_tbody_8_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 81);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, PreviewComponent_div_11_div_14_div_1_div_13_tbody_8_tr_1_td_3_Template, 3, 2, "td", 84);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r41 = ctx.$implicit;
    const list_r30 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, item_r41.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", list_r30.answer);
} }
function PreviewComponent_div_11_div_14_div_1_div_13_tbody_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody");
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_div_13_tbody_8_tr_1_Template, 4, 4, "tr", 84);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r30.options);
} }
function PreviewComponent_div_11_div_14_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 151)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, PreviewComponent_div_11_div_14_div_1_div_13_th_6_Template, 2, 3, "th", 152);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, PreviewComponent_div_11_div_14_div_1_div_13_tbody_7_Template, 2, 1, "tbody", 153)(8, PreviewComponent_div_11_div_14_div_1_div_13_tbody_8_Template, 2, 1, "tbody", 153);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("table table-bordered text-center ", ctx_r1.showAnswer ? "div-disable" : "", "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", list_r30.answer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r30.question_type_id == 5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r30.question_type_id == 7);
} }
function PreviewComponent_div_11_div_14_div_1_div_14_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 168);
} if (rf & 2) {
    const j_r42 = i0.ɵɵnextContext().index;
    const i_r38 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate3("id", "", ctx_r1.page != 1 ? ctx_r1.page - 1 : "", "", i_r38, "dropdown", j_r42, "");
} }
function PreviewComponent_div_11_div_14_div_1_div_14_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 169);
    i0.ɵɵtext(1, "Show Answer");
    i0.ɵɵelementEnd();
} }
function PreviewComponent_div_11_div_14_div_1_div_14_div_1_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 170);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const option_r43 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, option_r43.listOption), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_11_div_14_div_1_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 161)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 162);
    i0.ɵɵtemplate(4, PreviewComponent_div_11_div_14_div_1_div_14_div_1_div_4_Template, 1, 4, "div", 163)(5, PreviewComponent_div_11_div_14_div_1_div_14_div_1_div_5_Template, 2, 0, "div", 164);
    i0.ɵɵelementStart(6, "div", 165)(7, "span", 166);
    i0.ɵɵtext(8, "Select Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, PreviewComponent_div_11_div_14_div_1_div_14_div_1_span_9_Template, 2, 3, "span", 167);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    const j_r42 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Dropdown - ", j_r42 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.showAnswer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showAnswer);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", item_r44.options);
} }
function PreviewComponent_div_11_div_14_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 159);
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_div_14_div_1_Template, 10, 4, "div", 160);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r30.answer);
} }
function PreviewComponent_div_11_div_14_div_1_div_15_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 173);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const item_r45 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, item_r45.options[0].value), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_11_div_14_div_1_div_15_div_1_input_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 174);
} if (rf & 2) {
    i0.ɵɵproperty("placeholder", "Enter the Answer");
} }
function PreviewComponent_div_11_div_14_div_1_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 161)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, PreviewComponent_div_11_div_14_div_1_div_15_div_1_span_3_Template, 2, 3, "span", 171)(4, PreviewComponent_div_11_div_14_div_1_div_15_div_1_input_4_Template, 1, 1, "input", 172);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r46 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Input - ", j_r46 + 1, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showAnswer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showAnswer);
} }
function PreviewComponent_div_11_div_14_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 159);
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_div_15_div_1_Template, 5, 3, "div", 160);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r30.answer);
} }
function PreviewComponent_div_11_div_14_div_1_div_16_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 142);
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r1.convertMarkdownToHtml(list_r30.answer[0].correctAnswer), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_11_div_14_div_1_div_16_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 181);
    i0.ɵɵtext(1, " No Sample Essay added for this question ");
    i0.ɵɵelementEnd();
} }
function PreviewComponent_div_11_div_14_div_1_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 178)(1, "h2");
    i0.ɵɵtext(2, "Sample Essay");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtemplate(4, PreviewComponent_div_11_div_14_div_1_div_16_div_1_span_4_Template, 1, 1, "span", 179)(5, PreviewComponent_div_11_div_14_div_1_div_16_div_1_span_5_Template, 2, 0, "span", 180);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.showAnswer && (list_r30.answer[0] == null ? null : list_r30.answer[0].correctAnswer.trim()) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showAnswer && (list_r30.answer[0] == null ? null : list_r30.answer[0].correctAnswer.trim()) == "");
} }
function PreviewComponent_div_11_div_14_div_1_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 182)(1, "label")(2, "b");
    i0.ɵɵtext(3, "Correct Answer: ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "textarea", 183);
    i0.ɵɵtwoWayListener("ngModelChange", function PreviewComponent_div_11_div_14_div_1_div_16_div_2_Template_textarea_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r47); const ctx_r1 = i0.ɵɵnextContext(5); i0.ɵɵtwoWayBindingSet(ctx_r1.studentAnswer, $event) || (ctx_r1.studentAnswer = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 184)(6, "span", 185);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.studentAnswer);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.wordCount(), "\u00A0Words");
} }
function PreviewComponent_div_11_div_14_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 175);
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_div_16_div_1_Template, 6, 2, "div", 176)(2, PreviewComponent_div_11_div_14_div_1_div_16_div_2_Template, 8, 2, "div", 177);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showAnswer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showAnswer);
} }
function PreviewComponent_div_11_div_14_div_1_div_17_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 188);
    i0.ɵɵelement(1, "span", 81);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const answer_r48 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, answer_r48.correctAnswer), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_11_div_14_div_1_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_div_17_div_1_div_1_Template, 3, 3, "div", 187);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r30.answer);
} }
function PreviewComponent_div_11_div_14_div_1_div_17_app_tiny_mice_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-tiny-mice", 189);
} if (rf & 2) {
    i0.ɵɵproperty("height", 120)("showDropBtn", false)("showInputBtn", false);
} }
function PreviewComponent_div_11_div_14_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 112);
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_div_17_div_1_Template, 2, 1, "div", 153)(2, PreviewComponent_div_11_div_14_div_1_div_17_app_tiny_mice_2_Template, 1, 3, "app-tiny-mice", 186);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showAnswer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showAnswer);
} }
function PreviewComponent_div_11_div_14_div_1_div_18_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 81);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r30.answer[0].correctAnswer), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_11_div_14_div_1_div_18_app_tiny_mice_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-tiny-mice", 189);
} if (rf & 2) {
    i0.ɵɵproperty("height", 120)("showDropBtn", false)("showInputBtn", false);
} }
function PreviewComponent_div_11_div_14_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 190);
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_div_18_span_1_Template, 2, 3, "span", 191)(2, PreviewComponent_div_11_div_14_div_1_div_18_app_tiny_mice_2_Template, 1, 3, "app-tiny-mice", 186);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showAnswer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showAnswer);
} }
function PreviewComponent_div_11_div_14_div_1_div_19_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 81);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r30.answer[0].correctAnswer), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_11_div_14_div_1_div_19_app_tiny_mice_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-tiny-mice", 193);
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("height", 120)("editorPatchValue", list_r30.options[0].options)("showDropBtn", false)("showInputBtn", false);
} }
function PreviewComponent_div_11_div_14_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 190);
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_div_19_span_1_Template, 2, 3, "span", 191)(2, PreviewComponent_div_11_div_14_div_1_div_19_app_tiny_mice_2_Template, 1, 4, "app-tiny-mice", 192);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showAnswer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showAnswer);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 203)(1, "span", 149);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 204);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const answer_r49 = ctx.$implicit;
    const k_r50 = ctx.index;
    const item_r51 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c9, (answer_r49.correctActive === 0 ? false : answer_r49.correctActive == 1) && ctx_r1.showAnswer));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((k_r50 + 1 + 9).toString(36).toUpperCase());
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 3, item_r51.options[k_r50].options), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 201);
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_4_div_1_Template, 5, 7, "div", 202);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r51 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r51.answer);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_5_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 81);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const answer_r52 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, answer_r52), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_5_tbody_7_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "input", 154);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r53 = ctx.index;
    const ctx_r53 = i0.ɵɵnextContext();
    const answer_r55 = ctx_r53.$implicit;
    const k_r56 = ctx_r53.index;
    const j_r57 = i0.ɵɵnextContext(3).index;
    const i_r38 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate4("name", "", i_r38, "choose", j_r57, "Cfs", k_r56, "p", ctx_r1.page, "");
    i0.ɵɵproperty("checked", answer_r55.correctActive === l_r53 && ctx_r1.showAnswer);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_5_tbody_7_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 81);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_5_tbody_7_tr_1_td_3_Template, 2, 6, "td", 84);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r56 = ctx.index;
    const item_r51 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, item_r51.options[k_r56].options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r51.answer);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_5_tbody_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody");
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_5_tbody_7_tr_1_Template, 4, 4, "tr", 84);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r51 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r51.heading_option);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_5_tbody_8_tr_1_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 157);
} if (rf & 2) {
    const l_r58 = i0.ɵɵnextContext().index;
    const k_r59 = i0.ɵɵnextContext().index;
    const j_r57 = i0.ɵɵnextContext(3).index;
    const i_r38 = i0.ɵɵnextContext(2).index;
    i0.ɵɵpropertyInterpolate4("id", "checkMultiPassage", i_r38, "", j_r57, "", k_r59, "", l_r58, "");
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_5_tbody_8_tr_1_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 158);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_5_tbody_8_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_5_tbody_8_tr_1_td_3_input_1_Template, 1, 5, "input", 155)(2, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_5_tbody_8_tr_1_td_3_input_2_Template, 1, 0, "input", 156);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(9);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showAnswer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showAnswer);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_5_tbody_8_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 81);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_5_tbody_8_tr_1_td_3_Template, 3, 2, "td", 84);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const answer_r60 = ctx.$implicit;
    const item_r51 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, answer_r60.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r51.answer);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_5_tbody_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody");
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_5_tbody_8_tr_1_Template, 4, 4, "tr", 84);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r51 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r51.options);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 205)(1, "table", 206)(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_5_th_6_Template, 2, 3, "th", 152);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_5_tbody_7_Template, 2, 1, "tbody", 153)(8, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_5_tbody_8_Template, 2, 1, "tbody", 153);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r51 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", item_r51.answer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r51.question_type_id == 5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r51.question_type_id == 7);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_6_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 173);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const ans_r61 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, ans_r61.options[0].value), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_6_div_1_input_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 174);
} if (rf & 2) {
    i0.ɵɵproperty("placeholder", "Enter the Correct Answer");
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 209)(1, "div", 210)(2, "h6", 211);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_6_div_1_span_4_Template, 2, 3, "span", 171)(5, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_6_div_1_input_5_Template, 1, 1, "input", 172);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r62 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(k_r62 + 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showAnswer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showAnswer);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 207);
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_6_div_1_Template, 6, 3, "div", 208);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r51 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r51.answer);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_7_div_1_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 216)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const i_r63 = i0.ɵɵnextContext().index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Correct Answer ", i_r63 + 1, "");
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_7_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 81);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const answer_r64 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, answer_r64.correctAnswer), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_7_div_1_input_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 174);
} if (rf & 2) {
    i0.ɵɵproperty("placeholder", "Enter the Correct Answer");
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 214);
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_7_div_1_label_1_Template, 3, 1, "label", 215)(2, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_7_div_1_span_2_Template, 2, 3, "span", 191)(3, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_7_div_1_input_3_Template, 1, 1, "input", 172);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showAnswer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showAnswer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showAnswer);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 212);
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_7_div_1_Template, 4, 3, "div", 213);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r51 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r51.answer);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_8_p_26_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_8_p_26_span_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, ", ");
    i0.ɵɵelementEnd();
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_8_p_26_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_8_p_26_span_2_span_2_Template, 2, 0, "span", 153);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const skill_r65 = ctx.$implicit;
    const last_r66 = ctx.last;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(skill_r65);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !last_r66);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_8_p_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_8_p_26_span_1_Template, 2, 0, "span", 153)(2, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_8_p_26_span_2_Template, 3, 2, "span", 84);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r51 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r51 == null ? null : item_r51.skill.length) == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r51 == null ? null : item_r51.skill);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_8_p_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 212)(1, "div", 217)(2, "div", 126)(3, "div", 11)(4, "div", 218)(5, "label", 219)(6, "b");
    i0.ɵɵtext(7, "Subject:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 218)(11, "label", 219)(12, "b");
    i0.ɵɵtext(13, "Topic:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "p");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 218)(17, "label", 219)(18, "b");
    i0.ɵɵtext(19, "Sub Topic:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "p");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 218)(23, "label", 219)(24, "b");
    i0.ɵɵtext(25, "Skill:");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(26, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_8_p_26_Template, 3, 2, "p", 153)(27, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_8_p_27_Template, 2, 0, "p", 153);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 218)(29, "label", 219)(30, "b");
    i0.ɵɵtext(31, "Standard:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "p");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 218)(35, "label", 219)(36, "b");
    i0.ɵɵtext(37, "Difficulty:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "p");
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "div", 220)(41, "label", 219)(42, "b");
    i0.ɵɵtext(43, "Points:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "p");
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(46, "div", 220)(47, "label", 219)(48, "b");
    i0.ɵɵtext(49, "Predicted Solving Time:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(50, "p");
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const item_r51 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate((item_r51 == null ? null : item_r51.subject_name) ? item_r51 == null ? null : item_r51.subject_name : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r51 == null ? null : item_r51.question_topic) ? item_r51 == null ? null : item_r51.question_topic : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r51 == null ? null : item_r51.sub_topic) ? item_r51 == null ? null : item_r51.sub_topic : "-");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r51 == null ? null : item_r51.skill);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !item_r51.skill);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r51 == null ? null : item_r51.question_standard_name) ? item_r51 == null ? null : item_r51.question_standard_name : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r51 == null ? null : item_r51.level) == "1" ? "Easy" : (item_r51 == null ? null : item_r51.level) == "2" ? "Medium" : "Difficult");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r51 == null ? null : item_r51.points) ? item_r51 == null ? null : item_r51.points : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r51 == null ? null : item_r51.predicted_solving_time) ? item_r51 == null ? null : item_r51.predicted_solving_time : "-");
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 221)(1, "div", 222)(2, "label")(3, "b");
    i0.ɵɵtext(4, "Explanation:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "div", 223);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r51 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, item_r51.explanation), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 221)(1, "div", 222)(2, "label")(3, "b");
    i0.ɵɵtext(4, "Resource:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "div", 223);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r51 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, item_r51.resource), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 195)(1, "div", 196);
    i0.ɵɵelement(2, "div", 197);
    i0.ɵɵpipe(3, "sanitizeHtml");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_4_Template, 2, 1, "div", 198)(5, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_5_Template, 9, 3, "div", 199)(6, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_6_Template, 2, 1, "div", 200)(7, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_7_Template, 2, 1, "div", 139)(8, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_8_Template, 52, 9, "div", 139)(9, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_9_Template, 7, 3, "div", 140)(10, PreviewComponent_div_11_div_14_div_1_div_20_div_1_div_10_Template, 7, 3, "div", 140);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r51 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(3, 8, item_r51.question), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r51.question_type_id == 1 || item_r51.question_type_id == 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r51.question_type_id == 5 || item_r51.question_type_id == 7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r51.question_type_id == 10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(10, _c12).indexOf(item_r51.question_type_id) > -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.detailData.content_format == "3" && ctx_r1.showAnswer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r51.explanation != "" && ctx_r1.showAnswer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r51.resource != "" && ctx_r1.showAnswer);
} }
function PreviewComponent_div_11_div_14_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 112);
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_div_20_div_1_Template, 11, 11, "div", 194);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r30.subQuestions);
} }
function PreviewComponent_div_11_div_14_div_1_div_21_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 228)(1, "div", 229)(2, "span", 230);
    i0.ɵɵelement(3, "img", 231);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(4, "div", 232);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r67 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 1, item_r67.options), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_11_div_14_div_1_div_21_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 228)(1, "div", 229)(2, "span", 230);
    i0.ɵɵelement(3, "img", 231);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(4, "div", 232);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r68 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 1, item_r68.correctAnswer), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_11_div_14_div_1_div_21_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 225)(1, "label")(2, "b");
    i0.ɵɵtext(3, "Target");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, PreviewComponent_div_11_div_14_div_1_div_21_div_6_div_4_Template, 6, 3, "div", 226);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", list_r30.answer);
} }
function PreviewComponent_div_11_div_14_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 224)(1, "div", 225)(2, "label")(3, "b");
    i0.ɵɵtext(4, "Source");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, PreviewComponent_div_11_div_14_div_1_div_21_div_5_Template, 6, 3, "div", 226);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, PreviewComponent_div_11_div_14_div_1_div_21_div_6_Template, 5, 1, "div", 227);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", list_r30.options);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showAnswer);
} }
function PreviewComponent_div_11_div_14_div_1_div_22_app_graph_component_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-graph-component", 235);
} if (rf & 2) {
    const ctx_r68 = i0.ɵɵnextContext(2);
    const list_r30 = ctx_r68.$implicit;
    const i_r38 = ctx_r68.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("editMode", false)("editPatchValue", ctx_r1.parseVal(list_r30.answer[0].correctAnswer))("graphId", "preview" + i_r38)("questionType", list_r30.question_type_id);
} }
function PreviewComponent_div_11_div_14_div_1_div_22_app_graph_component_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-graph-component", 235);
} if (rf & 2) {
    const ctx_r68 = i0.ɵɵnextContext(2);
    const list_r30 = ctx_r68.$implicit;
    const i_r38 = ctx_r68.index;
    i0.ɵɵproperty("editMode", false)("editPatchValue", false)("graphId", "preview" + i_r38)("questionType", list_r30.question_type_id);
} }
function PreviewComponent_div_11_div_14_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 233);
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_div_22_app_graph_component_1_Template, 1, 4, "app-graph-component", 234)(2, PreviewComponent_div_11_div_14_div_1_div_22_app_graph_component_2_Template, 1, 4, "app-graph-component", 234);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showAnswer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showAnswer);
} }
function PreviewComponent_div_11_div_14_div_1_div_23_p_26_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function PreviewComponent_div_11_div_14_div_1_div_23_p_26_span_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, ", ");
    i0.ɵɵelementEnd();
} }
function PreviewComponent_div_11_div_14_div_1_div_23_p_26_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PreviewComponent_div_11_div_14_div_1_div_23_p_26_span_2_span_2_Template, 2, 0, "span", 153);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const skill_r70 = ctx.$implicit;
    const last_r71 = ctx.last;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(skill_r70);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !last_r71);
} }
function PreviewComponent_div_11_div_14_div_1_div_23_p_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_div_23_p_26_span_1_Template, 2, 0, "span", 153)(2, PreviewComponent_div_11_div_14_div_1_div_23_p_26_span_2_Template, 3, 2, "span", 84);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (list_r30 == null ? null : list_r30.skill.length) == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r30 == null ? null : list_r30.skill);
} }
function PreviewComponent_div_11_div_14_div_1_div_23_p_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function PreviewComponent_div_11_div_14_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 212)(1, "div", 217)(2, "div", 126)(3, "div", 11)(4, "div", 218)(5, "label", 219)(6, "b");
    i0.ɵɵtext(7, "Subject:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 218)(11, "label", 219)(12, "b");
    i0.ɵɵtext(13, "Topic:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "p");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 218)(17, "label", 219)(18, "b");
    i0.ɵɵtext(19, "Sub Topic:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "p");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 218)(23, "label", 219)(24, "b");
    i0.ɵɵtext(25, "Skill:");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(26, PreviewComponent_div_11_div_14_div_1_div_23_p_26_Template, 3, 2, "p", 153)(27, PreviewComponent_div_11_div_14_div_1_div_23_p_27_Template, 2, 0, "p", 153);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 218)(29, "label", 219)(30, "b");
    i0.ɵɵtext(31, "Standard:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "p");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 218)(35, "label", 219)(36, "b");
    i0.ɵɵtext(37, "Difficulty:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "p");
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "div", 220)(41, "label", 219)(42, "b");
    i0.ɵɵtext(43, "Points:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "p");
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(46, "div", 220)(47, "label", 219)(48, "b");
    i0.ɵɵtext(49, "Predicted Solving Time:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(50, "p");
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate((list_r30 == null ? null : list_r30.subject_name) ? list_r30 == null ? null : list_r30.subject_name : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((list_r30 == null ? null : list_r30.question_topic) ? list_r30 == null ? null : list_r30.question_topic : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((list_r30 == null ? null : list_r30.sub_topic) ? list_r30 == null ? null : list_r30.sub_topic : "-");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", list_r30 == null ? null : list_r30.skill);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !list_r30.skill);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((list_r30 == null ? null : list_r30.question_standard_name) ? list_r30 == null ? null : list_r30.question_standard_name : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(list_r30.level == "1" ? "Easy" : list_r30.level == "2" ? "Medium" : "Difficult");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((list_r30 == null ? null : list_r30.points) ? list_r30 == null ? null : list_r30.points : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((list_r30 == null ? null : list_r30.predicted_solving_time) ? list_r30 == null ? null : list_r30.predicted_solving_time : "-");
} }
function PreviewComponent_div_11_div_14_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 221)(1, "div", 222)(2, "label")(3, "b");
    i0.ɵɵtext(4, "Explanation:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "div", 223);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, list_r30.explanation), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_11_div_14_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 221)(1, "div", 222)(2, "label")(3, "b");
    i0.ɵɵtext(4, "Resource:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "div", 223);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, list_r30.resource), i0.ɵɵsanitizeHtml);
} }
function PreviewComponent_div_11_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 124)(1, "div", 121)(2, "div", 125)(3, "div", 126)(4, "div", 11)(5, "div", 127)(6, "button", 128);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 129);
    i0.ɵɵtemplate(9, PreviewComponent_div_11_div_14_div_1_div_9_Template, 4, 3, "div", 130)(10, PreviewComponent_div_11_div_14_div_1_div_10_Template, 6, 1, "div", 131)(11, PreviewComponent_div_11_div_14_div_1_div_11_Template, 3, 3, "div", 132);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, PreviewComponent_div_11_div_14_div_1_div_12_Template, 2, 1, "div", 106)(13, PreviewComponent_div_11_div_14_div_1_div_13_Template, 9, 6, "div", 133)(14, PreviewComponent_div_11_div_14_div_1_div_14_Template, 2, 1, "div", 134)(15, PreviewComponent_div_11_div_14_div_1_div_15_Template, 2, 1, "div", 134)(16, PreviewComponent_div_11_div_14_div_1_div_16_Template, 3, 2, "div", 135)(17, PreviewComponent_div_11_div_14_div_1_div_17_Template, 3, 2, "div", 106)(18, PreviewComponent_div_11_div_14_div_1_div_18_Template, 3, 2, "div", 136)(19, PreviewComponent_div_11_div_14_div_1_div_19_Template, 3, 2, "div", 136)(20, PreviewComponent_div_11_div_14_div_1_div_20_Template, 2, 1, "div", 106)(21, PreviewComponent_div_11_div_14_div_1_div_21_Template, 7, 2, "div", 137)(22, PreviewComponent_div_11_div_14_div_1_div_22_Template, 3, 2, "div", 138)(23, PreviewComponent_div_11_div_14_div_1_div_23_Template, 52, 9, "div", 139)(24, PreviewComponent_div_11_div_14_div_1_div_24_Template, 7, 3, "div", 140)(25, PreviewComponent_div_11_div_14_div_1_div_25_Template, 7, 3, "div", 140);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const list_r30 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(list_r30.question_no);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r30.question_type_id != 24 && list_r30.question_type_id != 55);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r30.question_type_id == 55);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r30.question_type_id == 24 && list_r30.subQuestions[0].passage && list_r30.subQuestions[0].passage != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r30.question_type_id == 1 || list_r30.question_type_id == 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r30.question_type_id == 5 || list_r30.question_type_id == 7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r30.question_type_id == 9);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r30.question_type_id == 10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r30.question_type_id == 55);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r30.question_type_id == 20);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(18, _c11).indexOf(list_r30.question_type_id) > -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r30.question_type_id == 28);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r30.question_type_id == 24);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r30.question_type_id == 16);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r30.question_type_id == 40 || list_r30.question_type_id == 41);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.detailData.content_format == "3" && list_r30.question_type_id != 24 && ctx_r1.showAnswer && list_r30.question_type_id != 55);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r30.explanation != "" && list_r30.question_type_id != 24 && ctx_r1.showAnswer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r30.resource != "" && list_r30.question_type_id != 24 && ctx_r1.showAnswer);
} }
function PreviewComponent_div_11_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 119);
    i0.ɵɵtemplate(1, PreviewComponent_div_11_div_14_div_1_Template, 26, 19, "div", 120);
    i0.ɵɵpipe(2, "paginate");
    i0.ɵɵelementStart(3, "div", 121)(4, "div", 122)(5, "pagination-controls", 123);
    i0.ɵɵlistener("pageChange", function PreviewComponent_div_11_div_14_Template_pagination_controls_pageChange_5_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onPageChange($event)); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 1, ctx_r1.questions, i0.ɵɵpureFunction1(4, _c10, ctx_r1.page)));
} }
function PreviewComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 100)(2, "div", 11)(3, "div", 101)(4, "h4", 102);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 103)(7, "div", 104);
    i0.ɵɵtemplate(8, PreviewComponent_div_11_div_8_Template, 2, 4, "div", 105)(9, PreviewComponent_div_11_i_9_Template, 1, 0, "i", 21)(10, PreviewComponent_div_11_span_10_Template, 6, 5, "span", 22);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(11, PreviewComponent_div_11_div_11_Template, 8, 3, "div", 106)(12, PreviewComponent_div_11_div_12_Template, 3, 0, "div", 107)(13, PreviewComponent_div_11_div_13_Template, 4, 0, "div", 108)(14, PreviewComponent_div_11_div_14_Template, 6, 6, "div", 109);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", (ctx_r1.responseData == null ? null : ctx_r1.responseData.is_test) == "1" && ctx_r1.responseData.is_test ? ctx_r1.responseData == null ? null : ctx_r1.responseData.name : ctx_r1.detailData == null ? null : ctx_r1.detailData.name, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.testData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.allowContentEdit && ctx_r1.calledBy != "popUp");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.calledBy == "routes");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.detailData == null ? null : ctx_r1.detailData.file_text) && (ctx_r1.detailData == null ? null : ctx_r1.detailData.file_text) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.questions.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.questions.length == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.questions.length != 0);
} }
function PreviewComponent_ng_template_12_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 242)(1, "span", 149);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 201);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r73 = ctx.$implicit;
    const i_r74 = ctx.index;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c9, list_r73.active === i_r74));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((i_r74 + 1 + 9).toString(36).toUpperCase());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(list_r73.options);
} }
function PreviewComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r72 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 236)(1, "h4", 237);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 238)(4, "div", 6)(5, "div", 212);
    i0.ɵɵtemplate(6, PreviewComponent_ng_template_12_div_6_Template, 5, 5, "div", 239);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 240)(8, "button", 241);
    i0.ɵɵlistener("click", function PreviewComponent_ng_template_12_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r72); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(9, "Ok");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.quesId == "1" ? "Multi choice Standard" : "Multi Selection");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.answerIndex);
} }
function PreviewComponent_ng_template_14_h4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 237);
    i0.ɵɵtext(1, "Match Table Standard");
    i0.ɵɵelementEnd();
} }
function PreviewComponent_ng_template_14_h4_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 237);
    i0.ɵɵtext(1, "Match Table Labels");
    i0.ɵɵelementEnd();
} }
function PreviewComponent_ng_template_14_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r76 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", list_r76.correctAnswer, "");
} }
function PreviewComponent_ng_template_14_tr_12_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 154);
} if (rf & 2) {
    const item_r77 = i0.ɵɵnextContext().$implicit;
    const j_r78 = i0.ɵɵnextContext().index;
    i0.ɵɵpropertyInterpolate1("name", "choose", j_r78, "");
    i0.ɵɵproperty("checked", item_r77.correctActive === j_r78);
} }
function PreviewComponent_ng_template_14_tr_12_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 247);
} if (rf & 2) {
    const item_r77 = i0.ɵɵnextContext().$implicit;
    const j_r78 = i0.ɵɵnextContext().index;
    i0.ɵɵproperty("checked", item_r77.correctAnswer === j_r78);
} }
function PreviewComponent_ng_template_14_tr_12_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, PreviewComponent_ng_template_14_tr_12_td_3_input_1_Template, 1, 3, "input", 245)(2, PreviewComponent_ng_template_14_tr_12_td_3_input_2_Template, 1, 1, "input", 246);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.quesId == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.quesId == "7");
} }
function PreviewComponent_ng_template_14_tr_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, PreviewComponent_ng_template_14_tr_12_td_3_Template, 3, 2, "td", 84);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r79 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(list_r79.options);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.fullData.heading_option);
} }
function PreviewComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r75 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 236);
    i0.ɵɵtemplate(1, PreviewComponent_ng_template_14_h4_1_Template, 2, 0, "h4", 243)(2, PreviewComponent_ng_template_14_h4_2_Template, 2, 0, "h4", 243);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 238)(4, "div", 205)(5, "table", 244)(6, "thead")(7, "tr")(8, "th");
    i0.ɵɵtext(9, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, PreviewComponent_ng_template_14_th_10_Template, 2, 1, "th", 84);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "tbody");
    i0.ɵɵtemplate(12, PreviewComponent_ng_template_14_tr_12_Template, 4, 2, "tr", 84);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 240)(14, "button", 241);
    i0.ɵɵlistener("click", function PreviewComponent_ng_template_14_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r75); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(15, "Ok");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.quesId == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.quesId == "7");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r1.fullData.answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.fullData.options);
} }
function PreviewComponent_ng_template_16_h4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 237);
    i0.ɵɵtext(1, "Text Entry");
    i0.ɵɵelementEnd();
} }
function PreviewComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r80 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 236);
    i0.ɵɵtemplate(1, PreviewComponent_ng_template_16_h4_1_Template, 2, 0, "h4", 243);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 238)(3, "div", 212)(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 240)(7, "button", 241);
    i0.ɵɵlistener("click", function PreviewComponent_ng_template_16_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r80); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(8, "Ok");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.quesId == "9");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.fullData.answer);
} }
function PreviewComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r81 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 238)(1, "div", 248)(2, "div", 249)(3, "h5", 250)(4, "b");
    i0.ɵɵtext(5, "Graph");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 251)(7, "i", 252);
    i0.ɵɵlistener("click", function PreviewComponent_ng_template_18_Template_i_click_7_listener() { i0.ɵɵrestoreView(_r81); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 253);
    i0.ɵɵelement(9, "app-graph-component", 235);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 254);
    i0.ɵɵlistener("click", function PreviewComponent_ng_template_18_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r81); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(11, "Ok");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("editMode", false)("editPatchValue", ctx_r1.graphShow)("graphId", "previewGraph")("questionType", "40");
} }
function PreviewComponent_ng_template_20_div_5_hr_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr");
} }
function PreviewComponent_ng_template_20_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 10)(2, "a", 258)(3, "span", 259);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, PreviewComponent_ng_template_20_div_5_hr_5_Template, 1, 0, "hr", 153);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r83 = ctx.$implicit;
    const last_r84 = ctx.last;
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("href", item_r83.link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", item_r83.link);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r83.name && item_r83.name != "" ? item_r83.name : item_r83.link);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !last_r84);
} }
function PreviewComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r82 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 236)(1, "h4", 255);
    i0.ɵɵtext(2, "Resources");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 238)(4, "div", 6);
    i0.ɵɵtemplate(5, PreviewComponent_ng_template_20_div_5_Template, 6, 4, "div", 256);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 257)(7, "button", 241);
    i0.ɵɵlistener("click", function PreviewComponent_ng_template_20_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r82); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(8, "Cancel");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.additionalLinks);
} }
function PreviewComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 238)(1, "div", 260);
    i0.ɵɵelement(2, "div", 261);
    i0.ɵɵelementStart(3, "span", 262);
    i0.ɵɵtext(4, "Please wait while we load the module ...");
    i0.ɵɵelementEnd()()();
} }
export class PreviewComponent {
    constructor(confi, common, commonservice, auth, classService, modalService, sanitized, router, newSubject, route, teacher, creator, navServices) {
        this.confi = confi;
        this.common = common;
        this.commonservice = commonservice;
        this.auth = auth;
        this.classService = classService;
        this.modalService = modalService;
        this.sanitized = sanitized;
        this.router = router;
        this.newSubject = newSubject;
        this.route = route;
        this.teacher = teacher;
        this.creator = creator;
        this.navServices = navServices;
        this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };
        this.lastMousePosition = { x: 0, y: 0 };
        this.canvasPosition = { x: 0, y: 0 };
        this.mousePosition = { x: 0, y: 0 };
        this.mouseDownFlag = false;
        this.selectedDeleteIcon = false;
        this.mathDelayer = false;
        this.isPdfAvailable = true;
        this.pagePosition = { x: 0, y: 0 };
        this.show = false;
        this.shapesType = 'select';
        this.element = null;
        this.areaInfo = [];
        this.showPopup = false;
        this.listRectangleId = '';
        this.currentPage = 1;
        this.count = 0;
        this.dragQuestionsList = [];
        this.savedAnnotation = [];
        this.zoom = 1.0;
        this.questionEmpty = false;
        this.totalsub = [];
        this.itemSelect = [];
        this.textFontSize = '';
        this.functionCalled = false;
        this.questions = [];
        this.redoListArray = [];
        this.additionalLinks = [];
        this.showAnswer = true;
        this.page = 1;
        this.expandPdf = false;
        this.showQuestion = false;
        this.studentAnswer = '';
        this.calledBy = 'routes';
        this.contentData = {};
        this.closePopUp = new EventEmitter();
        this.allowContentEdit = false;
        this.listPassageDetails = [];
        this.contentService = inject(ContentdetailService);
        this.showPdf = this.auth.getSessionData('preview_page');
        this.previewType = this.auth.getSessionData('preview');
        this.backToResources = this.auth.getSessionData('backOption');
        this.previewPdf = false;
        this.svgColor = '#ff0000';
        this.showInput = true;
        this.savaText = false;
        this.queDrag = false;
        this.textFontSize = '8';
        this.deleteAnnatation = false;
        let value;
        value = this.auth.getSessionData('showAnswer');
        this.showAnswer = value != 1;
        this.valueDrop = 'Select the answer';
    }
    ngOnInit() {
        const data = JSON.parse(this.auth.getSessionData('editor'));
        console.log(data, 'data');
        const responseData = this.calledBy == 'routes' ? this.route.snapshot.data['list'] : this.contentData;
        console.log(responseData.ResponseObject, 'responseData');
        this.responseData = responseData.ResponseObject;
        if (this.calledBy == 'routes') {
            try {
                console.log(this.route.snapshot.data['list'], 'getData');
                this.detailsSuccess(this.route.snapshot.data['list'], data);
            }
            catch (e) {
                console.log(e, 'ee');
            }
        }
        else {
            this.detailsSuccess(this.contentData);
        }
        if (this.responseData.content_format == '3' && this.responseData?.is_test == 1) {
            this.testDetailsService(this.responseData);
        }
        if (this.responseData.content_format == '3') {
            this.passageList();
        }
        this.allowDropDown = true;
        this.newSubject.allowSchoolChange(this.allowDropDown);
        this.gradeList();
        this.open = true;
    }
    // tslint:disable-next-line:use-lifecycle-interface
    ngOnDestroy() {
        this.auth.removeSessionData('preview_type');
        this.auth.removeSessionData('showAnswer');
    }
    passageList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: this.responseData?.content_id ?? ''
        };
        this.contentService.passageAllService(data, 'list').subscribe((successData) => {
            this.passageListSuccess(successData);
        }, (error) => {
            console.error(error, 'error');
        });
    }
    passageListSuccess(successData) {
        this.listPassageDetails = successData.IsSuccess ? successData.ResponseObject : [];
        console.log(this.listPassageDetails, 'listPassageDetails');
        for (let i = 0; i < this.questions.length; i++) {
            if (this.questions[i].question_type_id == 24) {
                for (let j = 0; j < this.questions[i].subQuestions.length; j++) {
                    const findIndex = this.listPassageDetails.length != 0 ?
                        this.listPassageDetails.findIndex(value => value.passage_id == this.questions[i].subQuestions[j].passage_id) : '';
                    this.questions[i].subQuestions[j].passage = findIndex != '' ? this.listPassageDetails[findIndex].passage : this.questions[i].subQuestions[j].passage;
                    if (this.questions[i].subQuestions[j].question_type_id == 7) {
                        for (let k = 0; k < this.questions[i].subQuestions[j].heading_option.length; k++) {
                            const index = i;
                            const id = j;
                            const row = this.questions[i].subQuestions[j].heading_option[k].correctActive;
                            const column = this.questions[i].subQuestions[j].heading_option[k].correctAnswer;
                            const final = index.toString() + id.toString() + row.toString() + column.toString();
                            document.getElementById('checkMultiPassage' + final).setAttribute('checked', 'true');
                        }
                    }
                }
            }
        }
    }
    wordCount() {
        return this.studentAnswer ? this.studentAnswer.trim().split(/\s+/).length : 0;
    }
    convertMarkdownToHtml(markdown, splitCount = 0) {
        markdown = markdown.replace(/^'+|'+$/g, '');
        let html = markdown.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        html = html.replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
        if (splitCount != 0) {
            const words = html.split(' ');
            if (words.length > splitCount) {
                html = words.slice(0, splitCount).join(' ') + '......';
            }
        }
        return this.sanitized.bypassSecurityTrustHtml(html);
    }
    expandPdfSize(event) {
        this.expandPdf = event;
        console.log(this.expandPdf, 'expand');
        console.log(this.deleteAnnatation, 'dele');
    }
    hideQuestion() {
        this.showQuestion = !this.showQuestion;
    }
    // openExplanationPopup(value) {
    //   this.ExplanationPopupValue = value;
    //   this.modalRef = this.modalService.open(this.viewExplain);
    // }
    parseVal(val) {
        if (val != '' && val != null) {
            return parse(val);
        }
        else {
            return false;
        }
    }
    testDetailsService(event) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: event.content_id,
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
            this.testData = successData.ResponseObject[0];
            this.testDetails = successData.ResponseObject[0].contents;
            this.testDetails.map(items => items.name = items.subject + ' - ' + items.module_name);
            this.testContentID = this.testDetails[0].content_id;
            this.callTestDetails();
        }
    }
    callTestDetails() {
        console.log(this.testContentID, 'testContentID');
        this.page = 1;
        this.modalRef = this.modalService.open(this.feedbackStatus, { backdrop: 'static', windowClass: 'miniLoader' });
        this.listDetails(this.testData);
    }
    testEdit() {
        this.auth.setSessionData('editTestDetails', JSON.stringify(this.testData));
        this.router.navigate(['repository/create-test/edit']);
    }
    listDetails(event) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.testContentID,
            content_format: event.content_format,
            content_type: event.content_type,
            school_id: event.school_id
        };
        this.creator.repositoryDetail(data).subscribe((successData) => {
            this.detailsSuccess(successData, event);
        }, (error) => {
            this.detailsFailure(error);
        });
    }
    detailsSuccess(successData, event) {
        console.log(successData, 'suc');
        if (successData.IsSuccess) {
            this.detailData = successData.ResponseObject;
            console.log(this.detailData, 'detailssss');
            if (event) {
                this.detailData['class_id'] = event.class_id;
                this.detailData['teacher_id'] = event.teacher_id;
            }
            console.log(this.showPdf, 'showPDF');
            this.allowContentEdit = (this.auth.getRoleId() == '4' && this.detailData.edit_status == '1') || (this.auth.getRoleId() == '6' && this.detailData.edit_status != '0')
                || this.auth.getRoleId() == '2' && !(this.auth.getSessionData('school_id') != this.detailData.school_id && this.detailData.access == '3') && this.detailData.access != '4';
            console.log(this.allowContentEdit, 'allowContentEdit');
            if (this.showPdf == 'create_resources' || this.showPdf == 'create_assignments' || this.showPdf == 'create_assessments') {
                this.getpdf = this.commonservice.convertBase64(this.detailData?.file_path);
                console.log(this.getpdf, 'getPDF');
                this.webhost = this.confi.getimgUrl();
                this.additionalLinks = this.getpdf[0]?.links ? this.getpdf[0]?.links : [];
                console.log(this.additionalLinks, 'additionAlLinks');
                console.log('PDF URL:', this.webhost + '/' + this.getpdf[0]?.original_image_url);
                if (this.getpdf[0] && this.getpdf[0].original_image_url != undefined) {
                    console.log('Starting PDF download...');
                    // Set a timeout to ensure we don't hang forever
                    const timeout = setTimeout(() => {
                        console.warn('PDF download timeout, setting isPdfAvailable to false');
                        this.isPdfAvailable = false;
                    }, 10000); // 10 second timeout
                    this.commonservice.downloadfilewithbytes(this.webhost + '/' + this.getpdf[0]?.original_image_url)
                        .subscribe({
                        next: (filebytes) => {
                            clearTimeout(timeout);
                            console.log('PDF download successful, size:', filebytes.byteLength);
                            this.pdfTemplate = filebytes;
                            this.isPdfAvailable = true;
                        },
                        error: (error) => {
                            clearTimeout(timeout);
                            console.error('Error loading PDF file:', error);
                            this.isPdfAvailable = false;
                        }
                    });
                }
                else {
                    console.log('No PDF file URL found, setting isPdfAvailable to false');
                    this.isPdfAvailable = false;
                }
                this.previewPdf = true;
                // Ensure annotation is always an array
                let annotation = this.detailData.annotation;
                if (typeof annotation === 'string') {
                    try {
                        annotation = JSON.parse(annotation);
                    }
                    catch (e) {
                        console.error('Error parsing annotation:', e);
                        annotation = [];
                    }
                }
                if (!Array.isArray(annotation)) {
                    annotation = [];
                }
                // Ensure questionAnnotation is always an array
                let questionAnnotation = this.detailData.questionAnnotation;
                if (typeof questionAnnotation === 'string') {
                    try {
                        questionAnnotation = JSON.parse(questionAnnotation);
                    }
                    catch (e) {
                        console.error('Error parsing questionAnnotation:', e);
                        questionAnnotation = [];
                    }
                }
                if (!Array.isArray(questionAnnotation)) {
                    questionAnnotation = [];
                }
                this.dragQuestionsList = questionAnnotation;
                annotation.forEach((value) => {
                    value.isTeacherCorrection = false;
                });
                this.areaInfo = annotation;
                if (this.auth.getRoleId() != '2' && this.previewType == 'student_preview') {
                    this.saveResourceAnnatation([], '2');
                }
                else {
                    this.functionCalled = true;
                }
                const allQuestions = this.detailData.answers;
                for (let i = 0; i < allQuestions.length; i++) {
                    allQuestions[i].section.sort((a, b) => parseFloat(a.sub_questions[0].question_no) - parseFloat(b.sub_questions[0].question_no));
                }
                if (allQuestions.length > 0) {
                    for (let i = 0; i < allQuestions.length; i++) {
                        this.totalsub[i] = { heading: allQuestions[i].heading, section: [] };
                        for (let x = 0; x < allQuestions[i].section.length; x++) {
                            for (let j = 0; j < allQuestions[i].section[x].sub_questions.length; j++) {
                                this.totalsub[i].section.push(allQuestions[i].section[x].sub_questions[j]);
                            }
                        }
                    }
                }
                else {
                    this.questionEmpty = true;
                }
            }
            else if (this.showPdf == 'text_resources' || this.showPdf == 'text_assignments' || this.showPdf == 'text_assessments') {
                this.additionalLinks = this.detailData.links ? this.detailData.links : [];
                if (this.detailData.questions.length != 0) {
                    this.questions = this.detailData.questions;
                    console.log(this.questions, 'dasdasd');
                    setTimeout(() => {
                        for (let i = 0; i < this.questions.length; i++) {
                            if (this.questions[i].question_type_id == 7) {
                                for (let j = 0; j < this.questions[i].heading_option.length; j++) {
                                    const index = i;
                                    const row = this.questions[i].heading_option[j].correctActive;
                                    const column = this.questions[i].heading_option[j].correctAnswer;
                                    const id = index.toString() + row.toString() + column.toString();
                                    console.log(id, 'idValue');
                                    const getValue = document.getElementById('checkMulti' + id);
                                    console.log(getValue, 'getValue');
                                    if (getValue) {
                                        document.getElementById('checkMulti' + id).setAttribute('checked', 'true');
                                    }
                                }
                            }
                            else if (this.questions[i].question_type_id == 24) {
                                for (let j = 0; j < this.questions[i].subQuestions.length; j++) {
                                    const findIndex = this.listPassageDetails.length != 0 ?
                                        this.listPassageDetails.findIndex(value => value.passage_id == this.questions[i].subQuestions[j].passage_id) : '';
                                    this.questions[i].subQuestions[j].passage = findIndex != '' ? this.listPassageDetails[findIndex].passage : this.questions[i].subQuestions[j].passage;
                                    if (this.questions[i].subQuestions[j].question_type_id == 7) {
                                        for (let k = 0; k < this.questions[i].subQuestions[j].heading_option.length; k++) {
                                            const index = i;
                                            const id = j;
                                            const row = this.questions[i].subQuestions[j].heading_option[k].correctActive;
                                            const column = this.questions[i].subQuestions[j].heading_option[k].correctAnswer;
                                            const final = index.toString() + id.toString() + row.toString() + column.toString();
                                            document.getElementById('checkMultiPassage' + final).setAttribute('checked', 'true');
                                        }
                                    }
                                }
                            }
                            else if (this.questions[i].question_type_id == 9) {
                                for (let j = 0; j < this.questions[i].answer.length; j++) {
                                    for (let k = 0; k < this.questions[i].answer[j].options.length; k++) {
                                        if (this.questions[i].answer[j].options[k].selected == 'true') {
                                            if (document.getElementById(i + 'dropdown' + j)) {
                                                document.getElementById(i + 'dropdown' + j).innerHTML = this.questions[i].answer[j].options[k].listOption;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }, 1000);
                }
                else {
                    this.questions = [];
                }
                this.content = this.detailData.file_text;
                this.previewPdf = false;
                this.functionCalled = true;
            }
            this.clickEvent();
        }
        this.modalRef?.close();
        this.common.showLoader(false);
    }
    detailsFailure(error) {
        console.error(error, 'error');
        this.modalRef?.close();
    }
    clickEvent() {
        console.log(this.mathDelayer, 'dads');
        if (!this.mathDelayer) {
            this.mathDelayer = true;
            setTimeout(() => {
                console.log('click Event _called');
                document.getElementById('myDiv').click();
            }, 1000);
        }
        setTimeout(() => {
            this.mathDelayer = false;
        }, 1500);
    }
    getDeleteAction(event) {
        console.log(event);
        this.deleteAnnatation = event;
        console.log(this.deleteAnnatation);
    }
    getAreaInfo(event) {
        this.saveResourceAnnatation(event, '1');
        this.savedAnnotation = event;
    }
    // droppedCorrect(event: CdkDragDrop<string[]>, index) {
    //     let control = <any> this.totalAns[index].given_answer;
    //     moveItemInArray(control, event.previousIndex, event.currentIndex);
    // }
    saveResourceAnnatation(data, id) {
        const val = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.detailData.school_id,
            content_id: this.detailData.content_id,
            class_id: this.detailData.class_id,
            teacher_id: this.detailData.teacher_id,
            annotation: data,
            type: id
        };
        this.teacher.saveTeacherResourceAnnotation(val).subscribe((successData) => {
            this.resorceAnnotateSuccess(successData, id);
        }, (error) => {
            this.resorceAnnotateFailure(error);
        });
    }
    resorceAnnotateSuccess(successData, id) {
        this.functionCalled = true;
        if (successData.IsSuccess) {
            if (id == '2') {
                for (let i = 0; i < successData.ResponseObject.length; i++) {
                    this.areaInfo.push(successData.ResponseObject[i]);
                }
            }
        }
    }
    resorceAnnotateFailure(error) {
        console.log(error);
        this.functionCalled = true; // Ensure functionCalled is set even on failure
    }
    graphDetail(val) {
        this.graphShow = parse(val);
        this.modalRef = this.modalService.open(this.viewGraph, { size: 'lg', backdrop: 'static' });
    }
    AdditionalSourecLink() {
        this.modalRef = this.modalService.open(this.additionalResourceLink);
    }
    viewdetail(id, data) {
        if (id == '1' || id == '2') {
            this.answerIndex = [];
            this.fullData = data;
            this.quesId = id;
            for (let i = 0; i < this.fullData.options.length; i++) {
                this.answerIndex.push({ options: this.fullData.options[i].options, active: '' });
            }
            for (let j = 0; j < this.fullData.answer.length; j++) {
                if (this.fullData.answer[j].correctAnswer != '') {
                    this.answerIndex[j].active = j;
                }
            }
            this.modalRef = this.modalService.open(this.multiChoiceDetail, data);
        }
        else if (id == '5' || id == '7') {
            this.fullData = data;
            this.quesId = id;
            this.modalRef = this.modalService.open(this.matchTableDetail, data);
        }
        else if (id == '9') {
            this.fullData = data;
            this.quesId = id;
            this.modalRef = this.modalService.open(this.dropDownDetail, data);
        }
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    close() {
        this.modalRef.close();
    }
    //// Annatation  Start///
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
    onPageChange(data) {
        this.page = data;
        window.scrollTo(0, 0);
        setTimeout(() => {
            this.selectCheckBox();
        }, 1000);
        this.clickEvent();
    }
    selectCheckBox() {
        for (let i = 0; i < this.questions.length; i++) {
            if (this.questions[i].question_type_id == 7) {
                for (let j = 0; j < this.questions[i].heading_option.length; j++) {
                    const index = i;
                    const row = this.questions[i].heading_option[j].correctActive;
                    const column = this.questions[i].heading_option[j].correctAnswer;
                    const id = index.toString() + row.toString() + column.toString();
                    const getValue = document.getElementById('checkMulti' + id);
                    if (getValue) {
                        document.getElementById('checkMulti' + id).setAttribute('checked', 'true');
                    }
                }
            }
            else if (this.questions[i].question_type_id == 9) {
                for (let j = 0; j < this.questions[i].answer.length; j++) {
                    for (let k = 0; k < this.questions[i].answer[j].options.length; k++) {
                        if (this.questions[i].answer[j].options[k].selected == 'true') {
                            if (document.getElementById(i + 'dropdown' + j)) {
                                document.getElementById(i + 'dropdown' + j).innerHTML = this.questions[i].answer[j].options[k].listOption;
                            }
                        }
                    }
                }
            }
        }
    }
    gradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.classService.gradeList(data).subscribe((successData) => {
            this.gradeListSuccess(successData);
        }, (error) => {
            this.gradeListFailure(error);
        });
    }
    gradeListSuccess(successData) {
        if (successData.IsSuccess) {
            this.gradeData = successData.ResponseObject;
        }
    }
    gradeListFailure(error) {
        console.log(error, 'error');
    }
    back() {
        if (this.auth.getSessionData('redirect-toassign') == '1') {
            this.router.navigate(['/class/view-assign/2']);
        }
        else if (this.auth.getSessionData('redirect-toassign') == '2') {
            this.router.navigate(['/class/topicsAndCurriculum/1']);
        }
        this.auth.removeSessionData('backOption');
    }
    previewback() {
        this.auth.removeSessionData('editor');
        if (this.previewType == 'repository') {
            this.router.navigate(['repository/content-home']);
        }
        else if (this.previewType == 'home') {
            this.router.navigate(['home/list-home']);
        }
    }
    editAction() {
        const value = JSON.parse(this.auth.getSessionData('editor'));
        if (value.content_type == '1') {
            this.router.navigate([value.content_format != '3' ? 'repository/add-resources/edit' : 'content-text-resource/text-resource/edit']);
        }
        else if (value.content_type == '2') {
            this.auth.setSessionData(value.content_format == 3 ? 'textType' : 'upload-type', 'assignment');
            this.router.navigate([value.content_format != '3' ? 'repository/create-assessment/edit' : 'content-text-resource/text-assignment/edit']);
        }
        else if (value.content_type == '3') {
            this.auth.setSessionData(value.content_format == 3 ? 'textType' : 'upload-type', 'assessment');
            this.router.navigate([value.content_format != '3' ? 'repository/create-assessment/edit' : 'content-text-resource/text-assignment/edit']);
        }
        this.closePopUp.emit();
    }
    deleteAction() {
        this.modalRef = this.modalService.open(this.deleteClass, { size: 'md', backdrop: 'static' });
    }
    static { this.ɵfac = function PreviewComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PreviewComponent)(i0.ɵɵdirectiveInject(i1.ConfigurationService), i0.ɵɵdirectiveInject(i2.CommonDataService), i0.ɵɵdirectiveInject(i3.CommonService), i0.ɵɵdirectiveInject(i4.AuthService), i0.ɵɵdirectiveInject(i5.ClassService), i0.ɵɵdirectiveInject(i6.NgbModal), i0.ɵɵdirectiveInject(i7.DomSanitizer), i0.ɵɵdirectiveInject(i8.Router), i0.ɵɵdirectiveInject(i9.NewsubjectService), i0.ɵɵdirectiveInject(i8.ActivatedRoute), i0.ɵɵdirectiveInject(i10.TeacherService), i0.ɵɵdirectiveInject(i11.CreatorService), i0.ɵɵdirectiveInject(i12.NavService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PreviewComponent, selectors: [["app-preview"]], viewQuery: function PreviewComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
            i0.ɵɵviewQuery(_c4, 5);
            i0.ɵɵviewQuery(_c5, 5);
            i0.ɵɵviewQuery(_c6, 5);
            i0.ɵɵviewQuery(_c7, 5);
            i0.ɵɵviewQuery(_c8, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.multiChoiceDetail = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewGraph = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.additionalResourceLink = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.matchTableDetail = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropDownDetail = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pdfPage = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteClass = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewExplain = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.feedbackStatus = _t.first);
        } }, inputs: { calledBy: "calledBy", contentData: "contentData" }, outputs: { closePopUp: "closePopUp" }, decls: 24, vars: 9, consts: [["multiChoiceDetail", ""], ["matchTableDetail", ""], ["dropDownDetail", ""], ["viewGraph", ""], ["additionalResourceLink", ""], ["feedbackStatus", ""], [1, "container-fluid"], ["id", "custom-pdf-loader", "style", "height: 80vh;", 4, "ngIf"], [1, "row", 3, "hidden"], ["class", "col-12 card p-3", 4, "ngIf"], [1, "col-md-12"], [1, "row"], [3, "class", 4, "ngIf"], ["id", "pdf-page", 3, "class", 4, "ngIf"], [3, "hidden", "class", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["id", "custom-pdf-loader", 2, "height", "80vh"], ["alt", "", "src", "assets/images/pre-loader/loader-01.svg"], [1, "col-12", "card", "p-3"], [1, "mb-0", "font-weight-bold", "color-primary", "align-items-center", "justify-content-between", "d-flex"], [1, "d-flex", "align-items-center"], ["title", "Edit Content", "class", "fa fa-pencil editAction", 3, "click", 4, "ngIf"], ["class", "ml-2", 4, "ngIf"], ["title", "Edit Content", 1, "fa", "fa-pencil", "editAction", 3, "click"], [1, "ml-2"], ["class", "btn btn-primary float-right", 3, "click", 4, "ngIf"], ["class", "btn btn-primary float-right", 3, "routerLink", 4, "ngIf"], ["class", "btn btn-primary float-right mr-2", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "float-right", 3, "click"], [1, "btn", "btn-primary", "float-right", 3, "routerLink"], [1, "btn", "btn-primary", "float-right", "mr-2", 3, "click"], [3, "setHeight", "pdfPath"], ["id", "pdf-page"], [3, "annotate", "deleteAnnotation", "expandBoolean", "userType", "getAnnotate", "getDragQues", "pdfPath", "expandPdf", "toolAlignCenter", "toolHide"], [3, "expandBoolean", "getAnnotate", "getDragQues", "pdfPath", "expandPdf", "toolAlignCenter", "toolHide", "userType"], [3, "hidden"], ["class", "col-md-1 px-0 mt-1", "style", "margin-left: -18px", 4, "ngIf"], [1, "row", "col-md-12", "px-0"], ["class", "col-md-12", 4, "ngFor", "ngForOf"], [1, "col-md-1", "px-0", "mt-1", 2, "margin-left", "-18px"], ["alt", "", "src", "assets/images/pdf-icons/arrowRight.png", "title", "Show pdf", 3, "click", 4, "ngIf"], ["alt", "", "src", "assets/images/pdf-icons/arrowLeft.png", "title", "Hide pdf", 3, "click", 4, "ngIf"], ["alt", "", "src", "assets/images/pdf-icons/arrowRight.png", "title", "Show pdf", 3, "click"], ["alt", "", "src", "assets/images/pdf-icons/arrowLeft.png", "title", "Hide pdf", 3, "click"], ["class", "col-md-12 py-3 px-0", 4, "ngIf"], ["class", "col-md-12 card mx-0 px-4", 4, "ngFor", "ngForOf"], [1, "col-md-12", "py-3", "px-0"], ["type", "text", "readonly", "", 1, "input-custom-modal", 3, "value"], [1, "col-md-12", "card", "mx-0", "px-4"], [1, "card-header", "ant-card-small"], [1, "col-md-8", "px-0"], ["id", "dropId", 1, "pull-left", "question-no", "col-md-3", "mr-2"], ["alt", "", "src", "assets/images/pdf-icons/auto-grade.png", "title", "auto graded", 1, "ml-2", 3, "hidden"], ["alt", "", "src", "assets/images/pdf-icons/match-case.png", "title", "match case", 1, "ml-2", "mt-2", "border", 3, "hidden"], ["alt", "", "class", "ml-2", "src", "assets/images/pdf-icons/math-icon.png", "title", "math question", 4, "ngIf"], [1, "col-md-4", "px-0"], ["class", "col-md-12 mt-3", 4, "ngIf"], [1, "col-12", "px-0", 3, "hidden"], ["class", "col-md-12 mb-2 px-0", 4, "ngIf"], ["class", "col-md-12 px-0 mb-2", 4, "ngIf"], ["class", "col-md-12 mb-2 overflow-auto", 4, "ngIf"], ["class", "col-md-12 mt-3 px-0 mb-2", 4, "ngIf"], ["class", "col-md-12 mt-3 px-0", 4, "ngIf"], ["alt", "", "src", "assets/images/pdf-icons/math-icon.png", "title", "math question", 1, "ml-2"], [1, "col-md-12", "mt-3"], [1, "col-md-12", "overflow-auto", "px-0", 2, "max-height", "30rem"], [1, "div-disable", 3, "innerHTML", "id"], [1, "col-md-12", "mb-2", "px-0"], ["class", "multichoice-option", "style", "line-height: 4", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "multichoice-option", 2, "line-height", "4", 3, "ngClass"], [1, "col-md-12", "px-0", "mb-2"], ["type", "radio", 1, "ml-4", 2, "pointer-events", "none", 3, "checked"], [1, "ml-2", "mb-0"], [1, "form-control"], ["disabled", "", 3, "selected", 4, "ngFor", "ngForOf"], ["disabled", "", 3, "selected"], ["class", "col-12 px-0 mb-3", 4, "ngFor", "ngForOf"], [1, "col-12", "px-0", "mb-3"], ["readonly", "", 1, "form-control", 3, "value"], ["cols", "30", "rows", "2", 1, "form-control", "div-disable"], [1, "col-md-12", "mb-2", "overflow-auto"], [3, "innerHTML"], [1, "btn", "btn-primary", 3, "click"], [1, "col-md-12", "mt-3", "px-0", "mb-2"], [4, "ngFor", "ngForOf"], ["readonly", "", "rows", "2", 1, "form-control", "mb-2", 3, "value"], [1, "col-md-12", "mt-3", "px-0"], [1, "color-primary"], [1, "custom-card", "overflow-auto", 3, "innerHTML"], [1, "col-12", "card", "mb-1", "p-3"], ["class", "col-12 mt-3 px-0", 4, "ngIf"], ["class", "btn btn-primary float-right", 3, "routerLink", "click", 4, "ngIf"], ["class", "btn btn-outline-primary float-right mr-2", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "float-right", 3, "click", "routerLink"], [1, "btn", "btn-outline-primary", "float-right", "mr-2", 3, "click"], [1, "col-12", "mt-3", "px-0"], [1, "card", 2, "border-bottom", "3px solid #e6baea !important", "border-right", "3px solid #e6baea !important"], [1, "card-body", "py-3", "px-4"], [1, "mb-3", "font-weight-bold"], [1, "ml-2", "editor_bullet"], [1, "col-12", "card", "mb-2", "mt-2", "p-3"], [1, "col-6", "align-self-center"], [1, "mb-0", "font-weight-bold", "color-primary"], [1, "col-6"], [1, "d-flex", "align-items-center", "justify-content-end"], ["class", "form-group pr-2 m-0 test-width col-5", 4, "ngIf"], ["class", "col-12 mt-3", 4, "ngIf"], ["class", "col-12 mb-2 mt-2", 4, "ngIf"], ["class", "col-12 d-flex justify-content-center list-card mt-5", 4, "ngIf"], ["class", "col-12 mt-2 view-question scrollPanel1", 4, "ngIf"], [1, "form-group", "pr-2", "m-0", "test-width", "col-5"], ["bindLabel", "name", "bindValue", "content_id", "placeholder", "Please Select Test", 3, "ngModelChange", "change", "items", "ngModel", "clearable", "searchable"], [1, "col-12", "mt-3"], [1, "card", "ml-3", "mr-0", 2, "overflow-y", "auto", "max-height", "35vh", "border-bottom", "3px solid #e6baea !important", "border-right", "3px solid #e6baea !important"], [1, "col-12", "mb-2", "mt-2"], [1, "letter"], [1, "col-12", "d-flex", "justify-content-center", "list-card", "mt-5"], [1, "col-5", "mt-5"], [1, "nodataList", 2, "padding", "15px 20px"], [1, "col-12", "mt-2", "view-question", "scrollPanel1"], ["class", "col-12 col-md-12 mb-2", 4, "ngFor", "ngForOf"], [1, "container"], [1, "col-12", "text-right"], ["previousLabel", "Previous", "nextLabel", "Next", "autoHide", "true", "maxSize", "8", 1, "pagination1", 3, "pageChange"], [1, "col-12", "col-md-12", "mb-2"], [1, "card", "p-5"], [1, "card-body"], [1, "px-0", 2, "width", "5% !important"], [1, "btn-primary", "w-auto", "h-20", "pl-2", "pr-2", "pt-1", "pb-1"], [1, "align-self-center", 2, "width", "95%"], ["class", "inner editor_bullet", 4, "ngIf"], ["class", "editor_bullet col-md-12 px-0", 4, "ngIf"], ["class", "overflow-auto p-3 editor_bullet", "style", "max-height: 40vh; border: 3px solid #e6baea !important;border-radius: 8px", 4, "ngIf"], ["class", "col-12 mt-5 table-flexible", 4, "ngIf"], ["class", "col-12 mt-5", 4, "ngIf"], ["class", "mt-3 editor_bullet col-md-12 ml-4", 4, "ngIf"], ["class", "col-12 mt-3 editor_bullet", 4, "ngIf"], ["class", "col-12 mt-3 d-flex", 4, "ngIf"], ["class", "col-12 mt-3 justify-content-center", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], ["class", "col-md-12 mt-4 d-flex", 4, "ngIf"], [1, "inner", "editor_bullet"], [1, "mb-0", "overflow-auto", 3, "innerHTML"], [1, "editor_bullet", "col-md-12", "px-0"], [1, "essay-box", "m-0"], [1, "overflow-auto", "p-3", "editor_bullet", 2, "max-height", "40vh", "border", "3px solid #e6baea !important", "border-radius", "8px"], [1, "mb-0", 3, "innerHTML"], ["class", "mb-2 p-2 multiSelectCard d-flex", 4, "ngFor", "ngForOf"], [1, "mb-2", "p-2", "multiSelectCard", "d-flex"], [1, "multichoice-option1", "mr-2", 3, "ngClass"], [1, "ml-3", "mt-1", "paragraph-space", 3, "innerHTML"], [1, "col-12", "mt-5", "table-flexible"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "radio", 1, "radio_animated", 3, "checked", "name"], ["type", "checkbox", 3, "id", 4, "ngIf"], ["type", "checkbox", 4, "ngIf"], ["type", "checkbox", 3, "id"], ["type", "checkbox"], [1, "col-12", "mt-5"], ["class", "col-md-6 mt-3 mb-3", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mt-3", "mb-3"], [1, "col-md-12", "preview", "dropup"], ["class", "col-md-12 innerhtml-margin-clear p-2 dropdown-border dropdown-toggle d-flex justify-content-between", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 3, "id", 4, "ngIf"], ["class", "col-md-12 innerhtml-margin-clear p-2 dropdown-border dropdown-toggle d-flex justify-content-between", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 4, "ngIf"], [1, "col-md-11", "dropdown-menu"], [1, "dropdown-item", "dropdown-link"], ["class", "dropdown-item dropdown-link innerhtml-margin-clear", 3, "innerHTML", 4, "ngFor", "ngForOf"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "col-md-12", "innerhtml-margin-clear", "p-2", "dropdown-border", "dropdown-toggle", "d-flex", "justify-content-between", 3, "id"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "col-md-12", "innerhtml-margin-clear", "p-2", "dropdown-border", "dropdown-toggle", "d-flex", "justify-content-between"], [1, "dropdown-item", "dropdown-link", "innerhtml-margin-clear", 3, "innerHTML"], ["class", "form-control ml-3", 3, "innerHTML", 4, "ngIf"], ["type", "text", "class", "form-control ml-3", 3, "placeholder", 4, "ngIf"], [1, "form-control", "ml-3", 3, "innerHTML"], ["type", "text", 1, "form-control", "ml-3", 3, "placeholder"], [1, "mt-3", "editor_bullet", "col-md-12", "ml-4"], ["class", "essay-box", 4, "ngIf"], ["class", "col-12 mt-2 px-0 text-area", 4, "ngIf"], [1, "essay-box"], ["class", "mb-0 overflow-auto", 3, "innerHTML", 4, "ngIf"], ["class", "innerhtml-margin-clear color-primary", 4, "ngIf"], [1, "innerhtml-margin-clear", "color-primary"], [1, "col-12", "mt-2", "px-0", "text-area"], ["rows", "10", "placeholder", "Please enter your answer", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "word-count"], [1, "mr-2"], [3, "height", "showDropBtn", "showInputBtn", 4, "ngIf"], ["class", "col-12 my-2 editor_bullet", 4, "ngFor", "ngForOf"], [1, "col-12", "my-2", "editor_bullet"], [3, "height", "showDropBtn", "showInputBtn"], [1, "col-12", "mt-3", "editor_bullet"], [3, "innerHTML", 4, "ngIf"], [3, "height", "editorPatchValue", "showDropBtn", "showInputBtn", 4, "ngIf"], [3, "height", "editorPatchValue", "showDropBtn", "showInputBtn"], ["class", "mb-3 mt-4", 4, "ngFor", "ngForOf"], [1, "mb-3", "mt-4"], [1, "row", "d-flex", "justify-content-start"], [1, "pl-4", "align-self-center", "passage-inner", 3, "innerHTML"], ["class", "mt-2", 4, "ngIf"], ["class", "col-12 table-flexible", 4, "ngIf"], ["class", "col-7 mt-3", 4, "ngIf"], [1, "mt-2"], ["class", "mb-2 multiSelectCard d-flex", "style", "padding: 12px 16px", 4, "ngFor", "ngForOf"], [1, "mb-2", "multiSelectCard", "d-flex", 2, "padding", "12px 16px"], [1, "ml-3", "mt-2", 3, "innerHTML"], [1, "col-12", "table-flexible"], [1, "table", "table-bordered", "text-center", "col-12", "mt-2"], [1, "col-7", "mt-3"], ["class", "mb-3 d-flex justify-content-center", 4, "ngFor", "ngForOf"], [1, "mb-3", "d-flex", "justify-content-center"], [1, "question-no-small"], [1, "mb-0"], [1, "col-12"], ["class", "col-12 px-0 my-3 editor_bullet", 4, "ngFor", "ngForOf"], [1, "col-12", "px-0", "my-3", "editor_bullet"], ["class", "col-12 px-0", 4, "ngIf"], [1, "col-12", "px-0"], [1, "card", "explanation"], [1, "col-4", "mb-3"], [1, "m-0"], [1, "col-4"], [1, "col-md-12", "mt-4", "d-flex"], [1, "col-md-12", "px-0"], [1, "explanation", "innerhtml-margin-clear", 3, "innerHTML"], [1, "col-12", "mt-3", "d-flex"], [1, "col-md-6", "form-group", "mt-2"], ["class", "input-group mb-3 mt-3 inputMenu", 4, "ngFor", "ngForOf"], ["class", "col-md-6 form-group mt-2", 4, "ngIf"], [1, "input-group", "mb-3", "mt-3", "inputMenu"], [1, "input-group-prepend"], [1, "input-group-text"], ["alt", "", "src", "assets/images/pdf-icons/equal@2x.png", 1, "img-fluid", 2, "width", "25px", "height", "25px"], [1, "w-75", "px-3", "pt-4", "pb-3", "border", "border-dark", 3, "innerHTML"], [1, "col-12", "mt-3", "justify-content-center"], [3, "editMode", "editPatchValue", "graphId", "questionType", 4, "ngIf"], [3, "editMode", "editPatchValue", "graphId", "questionType"], [1, "modal-header"], [1, "modal-title", "letter"], [1, "modal-body"], ["class", "mb-4 multiSelectCard", "style", "padding: 16px", 4, "ngFor", "ngForOf"], [1, "modal-footer", "d-flex", "justify-content-right", "mt-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "mb-4", "multiSelectCard", 2, "padding", "16px"], ["class", "modal-title letter", 4, "ngIf"], [1, "table", "table-bordered", "text-center"], ["class", "radio_animated", "type", "radio", 3, "checked", "name", 4, "ngIf"], ["type", "checkbox", 3, "checked", 4, "ngIf"], ["type", "checkbox", 3, "checked"], [1, "row", "mt-3"], [1, "col-sm-11"], [1, "text-center"], [1, "col-sm-1"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "col-12", "d-flex", "flex-column"], ["type", "button", 1, "btn", "btn-primary", "pull-right", "mt-4", 3, "click"], ["id", "modal-basic-title", 1, "modal-title", "font-weight-bold"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["target", "_blank", 1, "cursor", 3, "href"], [2, "overflow", "scroll", "overflow-y", "hidden", 3, "title"], [1, "col-12", "px-0", "my-3", "d-flex", "flex-row", "align-items-center"], [1, "feedback_spinner"], [1, "ml-3", 2, "font-size", "16px"]], template: function PreviewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 6);
            i0.ɵɵtemplate(1, PreviewComponent_div_1_Template, 2, 0, "div", 7);
            i0.ɵɵelementStart(2, "div", 8);
            i0.ɵɵtemplate(3, PreviewComponent_div_3_Template, 6, 3, "div", 9);
            i0.ɵɵelementStart(4, "div", 10)(5, "div", 11);
            i0.ɵɵtemplate(6, PreviewComponent_div_6_Template, 2, 5, "div", 12)(7, PreviewComponent_div_7_Template, 2, 10, "div", 13)(8, PreviewComponent_div_8_Template, 2, 10, "div", 13)(9, PreviewComponent_div_9_Template, 4, 6, "div", 14);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(10, PreviewComponent_div_10_Template, 8, 4, "div", 15)(11, PreviewComponent_div_11_Template, 15, 8, "div", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(12, PreviewComponent_ng_template_12_Template, 10, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(14, PreviewComponent_ng_template_14_Template, 16, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(16, PreviewComponent_ng_template_16_Template, 9, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(18, PreviewComponent_ng_template_18_Template, 12, 4, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(20, PreviewComponent_ng_template_20_Template, 9, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(22, PreviewComponent_ng_template_22_Template, 5, 0, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.functionCalled);
            i0.ɵɵadvance();
            i0.ɵɵproperty("hidden", ctx.previewPdf == false);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.functionCalled);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.functionCalled && !ctx.isPdfAvailable && !ctx.showQuestion);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.previewType == "student_preview" && ctx.functionCalled && ctx.pdfTemplate && ctx.isPdfAvailable && !ctx.showQuestion);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.previewType != "student_preview" && ctx.functionCalled && ctx.pdfTemplate && ctx.isPdfAvailable && !ctx.showQuestion);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.getpdf == null ? null : ctx.getpdf.length) > 0 && ctx.functionCalled && !ctx.expandPdf);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.previewPdf == false && ctx.showPdf == "text_resources");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.previewPdf == false && (ctx.showPdf == "text_assessments" || ctx.showPdf == "text_assignments"));
        } }, dependencies: [i13.NgClass, i13.NgForOf, i13.NgIf, i8.RouterLink, i14.NgSelectComponent, i15.NgSelectOption, i15.ɵNgSelectMultipleOption, i15.DefaultValueAccessor, i15.NgControlStatus, i15.NgModel, i16.PaginationControlsComponent, i17.GraphComponentComponent, i18.TinyMiceComponent, i19.AnnotationComponent, i20.SourceLinkComponent, i21.SanitizeHtmlPipe, i16.PaginatePipe], styles: [".selectColor[_ngcontent-%COMP%]{\n  background: purple;\n  color: #fff;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_blinkStroke {\n  100%,\n  0% {\n    stroke: #500;\n  }\n  30% {\n    stroke: deeppink;\n  }\n  60% {\n    stroke: yellow;\n  }\n  100% {\n    stroke: black;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_blinkFill {\n  100%,\n  0% {\n    fill: #500;\n  }\n  30% {\n    fill: deeppink;\n  }\n  60% {\n    fill: yellow;\n  }\n  100% {\n    fill: black;\n  }\n}\n\n.editAction[_ngcontent-%COMP%] {\n  font-size: 24px;\n  border: 1px solid #8F008A;\n  padding: 4px;\n  border-radius: 4px;\n  cursor: pointer;\n  color: #8f008a;\n}\n.test-width[_ngcontent-%COMP%] {\n  min-width: 200px !important;\n  ::ng-deep .ng-select .ng-select-container, ::ng-deep .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n    font-size: 14px !important;\n    font-weight: normal !important;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PreviewComponent, [{
        type: Component,
        args: [{ selector: 'app-preview', template: "<div class=\"container-fluid\">\n    <div *ngIf=\"!functionCalled\" id=\"custom-pdf-loader\" style=\"height: 80vh;\">\n        <img alt=\"\" src=\"assets/images/pre-loader/loader-01.svg\">\n    </div>\n    <div [hidden]=\"previewPdf == false\" class=\"row\">\n        <div *ngIf=\"functionCalled\" class=\"col-12 card p-3\">\n            <h4 class=\"mb-0 font-weight-bold color-primary align-items-center justify-content-between d-flex\">{{detailData.name}}\n                <div class=\"d-flex align-items-center\">\n                    <i *ngIf=\"allowContentEdit && calledBy != 'popUp'\" title=\"Edit Content\" class=\"fa fa-pencil editAction\" (click)=\"editAction()\"></i>\n                    <span class=\"ml-2\" *ngIf=\"calledBy == 'routes'\">\n                        <button (click)=\"previewback()\" *ngIf=\"previewType == 'repository' || previewType == 'home'\" class=\"btn btn-primary float-right\">back</button>\n                        <button *ngIf=\"previewType == 'correction'\" [routerLink]=\"'/assessment-correction/list-correction'\" class=\"btn btn-primary float-right\">back</button>\n                        <button *ngIf=\"previewType == 'assignment-correction'\" [routerLink]=\"'/assignment-correction/list-correction'\" class=\"btn btn-primary float-right\">back To Folder</button>\n                        <button *ngIf=\"previewType == 'content-folder'\" [routerLink]=\"'/classroom/list-classroom'\" class=\"btn btn-primary float-right\">back</button>\n                        <button *ngIf=\"backToResources == 'available'\" (click)=\"back()\" class=\"btn btn-primary float-right\">back</button>\n                        <button *ngIf=\"additionalLinks?.length != 0\" class=\"btn btn-primary float-right mr-2\" (click)=\"AdditionalSourecLink()\">Resources</button>\n                    </span>\n                </div>\n            </h4>\n        </div>\n        <div class=\"col-md-12\">\n            <div class=\"row\">\n                <div class=\"col-md-{{questionEmpty && !expandPdf ? 12 : deleteAnnatation && !expandPdf ? 12 : 8}} px-0\" *ngIf=\"functionCalled && !isPdfAvailable && !showQuestion\">\n                    <app-source-link [setHeight]=\"false\" [pdfPath]=\"getpdf[0]\"></app-source-link>\n                </div>\n                <div *ngIf=\"previewType == 'student_preview' && functionCalled && pdfTemplate && isPdfAvailable && !showQuestion\" class=\"col-md-{{questionEmpty || expandPdf ? 12 : deleteAnnatation || expandPdf ? 12 : 8}}\" id=\"pdf-page\">\n                    <app-annotation (annotate)=\"getAreaInfo($event)\"\n                                    [userType]=\"'student'\"\n                                    (deleteAnnotation)=\"getDeleteAction($event)\"\n                                    [getAnnotate]=\"areaInfo\"\n                                    [getDragQues]=\"dragQuestionsList\"\n                                    [pdfPath]=\"pdfTemplate\"\n                                    [expandPdf]=\"true\"\n                                    (expandBoolean)=\"expandPdfSize($event)\"\n                                    [toolAlignCenter]=\"questionEmpty\"\n                                    [toolHide]=\"false\"></app-annotation>\n                </div>\n                <div *ngIf=\"previewType != 'student_preview' && functionCalled && pdfTemplate && isPdfAvailable && !showQuestion\"\n                     class=\"col-md-{{questionEmpty || expandPdf ? 12 : 8}}\"\n                     id=\"pdf-page\">\n                    <app-annotation [getAnnotate]=\"areaInfo\"\n                                    [getDragQues]=\"dragQuestionsList\"\n                                    [pdfPath]=\"pdfTemplate\"\n                                    [expandPdf]=\"true\"\n                                    [toolAlignCenter]=\"questionEmpty\"\n                                    (expandBoolean)=\"expandPdfSize($event)\"\n                                    [toolHide]=\"!(previewType == 'teacher_preview')\"\n                                    [userType]=\"'teacher'\"></app-annotation>\n                </div>\n                <div *ngIf=\"getpdf?.length > 0 && functionCalled && !expandPdf\" [hidden]=\"questionEmpty != false || deleteAnnatation\" class=\"col-md-{{!showQuestion ? 4 : 12}} scrollPanel pr-0\">\n                    <div *ngIf=\"totalsub.length != 0\" class=\"col-md-1 px-0 mt-1\" style=\"margin-left: -18px\">\n                        <img (click)=\"hideQuestion()\" *ngIf=\"showQuestion\" alt=\"\"\n                             src=\"assets/images/pdf-icons/arrowRight.png\" title=\"Show pdf\">\n                        <img (click)=\"hideQuestion()\" *ngIf=\"!showQuestion\" alt=\"\"\n                             src=\"assets/images/pdf-icons/arrowLeft.png\" title=\"Hide pdf\">\n                    </div>\n                    <div class=\"row col-md-12 px-0\">\n                        <div *ngFor=\"let sec of totalsub; let i = index\" class=\"col-md-12\">\n                            <div class=\"col-md-12 py-3 px-0\" *ngIf=\"this.totalsub.length != 1 || sec.heading != ''\">\n                                <input type=\"text\" readonly class=\"input-custom-modal\" [value]=\"sec.heading\">\n                            </div>\n                            <div *ngFor=\"let list of sec.section; let j = index\" class=\"col-md-12 card mx-0 px-4\">\n                                <div class=\"card-header ant-card-small\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-8 px-0\">\n                                            <span class=\"pull-left question-no col-md-3 mr-2\" id=\"dropId\">{{list.sub_question_no}}</span>\n                                            <img [hidden]=\"list.auto_grade == '0'\" alt=\"\" class=\"ml-2\" src=\"assets/images/pdf-icons/auto-grade.png\" title=\"auto graded\">\n                                            <img [hidden]=\"list.match_case == '0'\" alt=\"\" class=\"ml-2 mt-2 border\" src=\"assets/images/pdf-icons/match-case.png\" title=\"match case\">\n                                            <img *ngIf=\"list.question_type_id == '30'\" alt=\"\" class=\"ml-2\" src=\"assets/images/pdf-icons/math-icon.png\" title=\"math question\">\n                                        </div>\n                                        <div class=\"col-md-4 px-0\">\n                                        </div>\n                                        <div *ngIf=\"list.question != ''\"  class=\"col-md-12 mt-3\">\n                                            <div class=\"col-md-12 overflow-auto px-0\" style=\"max-height: 30rem\">\n                                                <label>Question: </label>\n                                                <span [innerHTML]=\"list.question | sanitizeHtml\" class=\"div-disable\" id=\"{{j}}+ 'show'\"></span>\n                                            </div>\n                                        </div>\n                                        <div [hidden]=\"previewType == 'student_preview'\" class=\"col-12 px-0\">\n                                            <div *ngIf=\"list.question_type_id == '1'\" class=\"col-md-12 mb-2 px-0\">\n                                                <span *ngFor=\"let items of list.array\" [ngClass]=\"{'selectColor' : items.toLowerCase() === list.answer.toString().toLowerCase()}\" class=\"multichoice-option\" style=\"line-height: 4\">{{items}}</span>\n                                            </div>\n                                            <div *ngIf=\"list.question_type_id == '3'\" class=\"col-md-12 px-0 mb-2\">\n                                                <div class=\"row\">\n                                                    <input [checked]=\"list.answer.toString() == 'true'\" class=\"ml-4\" style=\"pointer-events: none\" type=\"radio\"><h4 class=\"ml-2 mb-0\">True</h4>\n                                                    <input [checked]=\"list.answer.toString() == 'false'\" class=\"ml-4\" style=\"pointer-events: none\" type=\"radio\"><h4 class=\"ml-2 mb-0\">False</h4>\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"list.question_type_id == '9'\" class=\"col-md-12 px-0 mb-2\">\n                                                <select class=\"form-control\">\n                                                    <option *ngFor=\"let chc of list.array\" [selected]=\"chc.choice == list.answer.toString()\" disabled>{{chc.choice}}</option>\n                                                </select>\n                                            </div>\n                                            <div *ngIf=\"list.question_type_id == '10'\" class=\"col-md-12 px-0 mb-2\">\n                                                <div class=\"col-12 px-0 mb-3\" *ngFor=\"let answer of list?.answer; let k  = index\">\n                                                    <label>Answer {{k + 1}}: </label>\n                                                    <textarea [value]=\"answer\" class=\"form-control\" readonly></textarea>\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"list.question_type_id == '20'\" class=\"col-md-12 px-0 mb-2\">\n                                                <label>Free text</label>\n                                                <textarea class=\"form-control div-disable\" cols=\"30\" rows=\"2\">Number of lines: {{list.answer}}</textarea>\n                                            </div>\n                                            <div *ngIf=\"list.question_type_id == '30'\" class=\"col-md-12 mb-2 overflow-auto\">\n                                                <div class=\"col-12 px-0 mb-3\" *ngFor=\"let answer of list?.answer; let k  = index\">\n                                                    <label>Answer {{k + 1}}: </label>\n                                                    <span [innerHTML]=\"answer | sanitizeHtml\"></span>\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"list.question_type_id == '40'\" class=\"col-md-12 px-0 mb-2\">\n                                                <button (click)=\"graphDetail(list.answer)\" class=\"btn btn-primary\">view graph</button>\n                                            </div>\n                                            <div *ngIf=\"list.question_type_id == '54'\" class=\"col-md-12 mt-3 px-0 mb-2\">\n                                                <div *ngFor=\"let opt of list.answer\">\n                                                    <textarea [value]=\"opt.value\" class=\"form-control mb-2\" readonly rows=\"2\"></textarea>\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"list.answer_explanation != ''\" class=\"col-md-12 mt-3 px-0\">\n                                                <label class=\"color-primary\">Explanation: </label>\n                                                <div [innerHTML]=\"list.answer_explanation | sanitizeHtml\" class=\"custom-card overflow-auto\">\n                                                </div>\n                                            </div>\n<!--                                            <div *ngIf=\"list.answer_explanation != ''\" class=\"col-md-12 mt-3 px-0\">-->\n<!--                                                <div class=\"col-md-12 overflow-auto px-0\">-->\n<!--&lt;!&ndash;                                                    <button (click)=\"openExplanationPopup(list.answer_explanation)\" class=\"btn-outline-primary btn-sm\">view explanation</button>&ndash;&gt;-->\n<!--                                                </div>-->\n<!--                                            </div>-->\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"previewPdf == false && showPdf == 'text_resources'\">\n       <div class=\"col-12 card mb-1 p-3\">\n           <h4 class=\"mb-0 font-weight-bold color-primary align-items-center justify-content-between d-flex\">\n               {{responseData?.is_test == '1' && responseData.is_test ? responseData?.name : detailData?.name}}\n               <div class=\"d-flex align-items-center\">\n                   <i *ngIf=\"allowContentEdit && calledBy != 'popUp'\" title=\"Edit Content\" class=\"fa fa-pencil editAction\" (click)=\"editAction()\"></i>\n                   <span *ngIf=\"calledBy == 'routes'\" class=\"ml-2\">\n                       <button *ngIf=\"backToResources == null && previewType != 'content-folder'\" [routerLink]=\"'/repository/content-home'\" class=\"btn btn-primary float-right\">back</button>\n                       <button *ngIf=\"backToResources == 'available'\" [routerLink]=\"'/class/view-assign/2'\" (click)=\"back()\" class=\"btn btn-primary float-right\">back</button>\n                       <button *ngIf=\"previewType == 'content-folder'\" [routerLink]=\"'/classroom/list-classroom'\" class=\"btn btn-primary float-right\">back</button>\n                       <button *ngIf=\"detailData?.links.length != 0\" class=\"btn btn-outline-primary float-right mr-2\" (click)=\"AdditionalSourecLink()\">Resources</button>\n                   </span>\n               </div>\n           </h4>\n       </div>\n\n        <div class=\"col-12 mt-3 px-0\" *ngIf=\"detailData?.file_text && detailData?.file_text != ''\">\n            <div class=\"card\" style=\"border-bottom: 3px solid #e6baea !important; border-right: 3px solid #e6baea !important\">\n                <div class=\"card-body py-3 px-4\">\n                    <h4 class=\"mb-3 font-weight-bold\">Description:</h4>\n                    <div class=\"ml-2 editor_bullet\">\n                        <span [innerHTML]=\"detailData?.file_text | sanitizeHtml\"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <div *ngIf=\"previewPdf == false && (showPdf == 'text_assessments' || showPdf == 'text_assignments')\" class=\"row\">\n        <div class=\"col-12 card mb-2 mt-2 p-3\">\n            <div class=\"row\">\n                <div class=\"col-6 align-self-center\">\n                    <h4 class=\"mb-0 font-weight-bold color-primary\">\n                        {{responseData?.is_test == '1' && responseData.is_test ? responseData?.name : detailData?.name}}\n                    </h4>\n                </div>\n                <div class=\"col-6\">\n                    <div class=\"d-flex align-items-center justify-content-end\">\n                        <div class=\"form-group pr-2 m-0 test-width col-5\" *ngIf=\"testData\">\n                            <ng-select [items]=\"testDetails\"\n                                       bindLabel=\"name\"\n                                       bindValue=\"content_id\"\n                                       [(ngModel)]=\"testContentID\"\n                                       placeholder=\"Please Select Test\"\n                                       (change)=\"callTestDetails()\"\n                                       [clearable]=\"false\"\n                                       [searchable]=\"false\">\n                            </ng-select>\n                        </div>\n                        <i *ngIf=\"allowContentEdit && calledBy != 'popUp'\" title=\"Edit Content\" class=\"fa fa-pencil editAction\" (click)=\"testData ? testEdit() : editAction()\"></i>\n                        <span *ngIf=\"calledBy == 'routes'\" class=\"ml-2\">\n                            <button *ngIf=\"backToResources == null && previewType != 'content-folder'\" [routerLink]=\"'/repository/content-home'\" class=\"btn btn-primary float-right\">back</button>\n                            <button *ngIf=\"backToResources== 'home'\" [routerLink]=\"'/home/list-home'\" class=\"btn btn-primary float-right\">back</button>\n                            <button *ngIf=\"backToResources == 'available'\" [routerLink]=\"'/class/view-assign/2'\" (click)=\"back()\" class=\"btn btn-primary float-right\">back</button>\n                            <button *ngIf=\"previewType == 'content-folder'\" [routerLink]=\"'/classroom/list-classroom'\" class=\"btn btn-primary float-right\">back</button>\n                            <button *ngIf=\"detailData?.links.length != 0\" class=\"btn btn-outline-primary float-right mr-2\" (click)=\"AdditionalSourecLink()\">Resources</button>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-12 mt-3\" *ngIf=\"detailData?.file_text && detailData?.file_text != ''\">\n            <div class=\"card ml-3 mr-0\" style=\"overflow-y: auto; max-height: 35vh; border-bottom: 3px solid #e6baea !important; border-right: 3px solid #e6baea !important\">\n                <div class=\"card-body py-3 px-4\">\n                    <h4 class=\"mb-3 font-weight-bold\">Description:</h4>\n                    <div class=\"ml-2 editor_bullet\">\n                        <span [innerHTML]=\"detailData?.file_text | sanitizeHtml\"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-12 mb-2 mt-2\" *ngIf=\"questions.length != 0\">\n            <h4 class=\"letter\">Questions & Answer</h4>\n        </div>\n        <div class=\"col-12 d-flex justify-content-center list-card mt-5\" *ngIf=\"questions.length == 0\">\n            <div class=\"col-5 mt-5\">\n                <button style=\"padding:15px 20px\" class=\"nodataList\">No Question Added For This Content !</button>\n            </div>\n        </div>\n        <div class=\"col-12 mt-2 view-question scrollPanel1\" *ngIf=\"questions.length != 0\">\n            <div *ngFor=\"let list of questions | paginate: { itemsPerPage: 10, currentPage: page}; let i = index\" class=\"col-12 col-md-12 mb-2\">\n                <div class=\"container\">\n                    <div class=\"card p-5\">\n                            <div class=\"card-body\">\n                                <div class=\"row\">\n                                    <div class=\"px-0\" style=\"width: 5% !important;\">\n                                        <button class=\"btn-primary w-auto h-20 pl-2 pr-2 pt-1 pb-1\">{{list.question_no}}</button>\n                                    </div>\n                                    <div class=\"align-self-center\" style=\"width: 95%\">\n                                        <div class=\"inner editor_bullet\" *ngIf=\"list.question_type_id != 24 && list.question_type_id != 55\"><b><h3 [innerHTML]=\"list.question | sanitizeHtml\" class=\"mb-0 overflow-auto\"></h3></b></div>\n                                        <div class=\"editor_bullet col-md-12 px-0\" *ngIf=\"list.question_type_id == 55\">\n                                            <div class=\"essay-box m-0\">\n                                                <h2>Essay Prompt</h2>\n                                                <p>\n                                                    <span [innerHTML]=\"convertMarkdownToHtml(list.question)\" class=\"mb-0 overflow-auto\"></span>\n                                                </p>\n                                            </div>\n                                        </div>\n                                        <div class=\"overflow-auto p-3 editor_bullet\" style=\"max-height: 40vh; border: 3px solid #e6baea !important;border-radius: 8px\"\n                                             *ngIf=\"list.question_type_id == 24 && list.subQuestions[0].passage && list.subQuestions[0].passage != ''\">\n                                            <span [innerHTML]=\"list.subQuestions[0].passage | sanitizeHtml\" class=\"mb-0\"></span></div>\n                                    </div>\n                                </div>\n                                <div class=\"col-12 mt-3\" *ngIf=\"list.question_type_id == 1 || list.question_type_id == 2\">\n                                    <div *ngFor=\"let item of list.answer; let j=index\" class=\"mb-2 p-2 multiSelectCard d-flex\">\n                                        <!-- [ngClass]=\"{'question-page-selected' : (item.correctActive === 0 ? false : item.correctActive == 1) && showAnswer}\" -->\n                                        <span [ngClass]=\"{'selectColor' : (item.correctActive === 0 ? false : item.correctActive == 1) && showAnswer}\" class=\"multichoice-option1 mr-2\">{{((j+1) + 9).toString(36).toUpperCase()}}</span>\n                                        <span class=\"ml-3 mt-1 paragraph-space\" [innerHTML]=\"list.options[j].options  | sanitizeHtml\"></span>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"list.question_type_id == 5 || list.question_type_id == 7\" class=\"col-12 mt-5 table-flexible\">\n                                    <table class=\"table table-bordered text-center {{showAnswer? 'div-disable' : ''}}\">\n                                        <thead>\n                                        <tr>\n                                            <th>Questions</th>\n                                            <th *ngFor=\"let item of list.answer; let j=index\" [innerHTML]=\"item | sanitizeHtml\"></th>\n                                        </tr>\n                                        </thead>\n                                        <tbody *ngIf=\"list.question_type_id == 5\">\n                                        <tr  *ngFor=\"let ans of list.heading_option; let j=index\">\n                                            <td [innerHTML]=\"list.options[j].options | sanitizeHtml\"></td>\n                                            <td *ngFor=\"let answer of list.answer; let k=index\">\n                                                <input [checked]=\"ans.correctActive == k && showAnswer\" class=\"radio_animated\" name=\"{{i}}choose{{j}}p{{page}}\" type=\"radio\">\n                                            </td>\n                                        </tr>\n                                        </tbody>\n                                        <tbody *ngIf=\"list.question_type_id == 7\">\n                                        <tr  *ngFor=\"let item of list.options; let j=index\">\n                                            <td [innerHTML]=\"item.options | sanitizeHtml\"></td>\n                                            <td *ngFor=\"let chk of list.answer; let k=index\">\n                                                <input *ngIf=\"showAnswer\" id=\"checkMulti{{page != 1 ? page - 1: ''}}{{i}}{{j}}{{k}}\" type=\"checkbox\">\n                                                <input *ngIf=\"!showAnswer\" type=\"checkbox\">\n                                            </td>\n                                        </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div class=\"col-12 mt-5\" *ngIf=\"list.question_type_id == 9\">\n                                    <div *ngFor=\"let item of list.answer; let j = index\" class=\"col-md-6 mt-3 mb-3\">\n                                        <label>Dropdown - {{j+1}}</label>\n                                        <div class=\"col-md-12 preview dropup\">\n                                            <div *ngIf=\"showAnswer\" class=\"col-md-12 innerhtml-margin-clear p-2 dropdown-border dropdown-toggle d-flex justify-content-between\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" id=\"{{page != 1 ? page - 1: ''}}{{i}}dropdown{{j}}\"></div>\n                                            <div *ngIf=\"!showAnswer\" class=\"col-md-12 innerhtml-margin-clear p-2 dropdown-border dropdown-toggle d-flex justify-content-between\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Show Answer</div>\n                                            <div class=\"col-md-11 dropdown-menu\">\n                                                <span class=\"dropdown-item dropdown-link\">Select Answer</span>\n                                                <span *ngFor=\"let option of item.options; let k = index\" [innerHTML]=\"option.listOption | sanitizeHtml\" class=\"dropdown-item dropdown-link innerhtml-margin-clear\"></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-12 mt-5\" *ngIf=\"list.question_type_id == 10\">\n                                    <div *ngFor=\"let item of list.answer; let j = index\" class=\"col-md-6 mt-3 mb-3\">\n                                        <label>Input - {{j+1}}</label>\n                                        <span *ngIf=\"showAnswer\" [innerHTML]=\"item.options[0].value  | sanitizeHtml\" class=\"form-control ml-3\"></span>\n                                        <input type=\"text\" *ngIf=\"!showAnswer\" [placeholder]=\"'Enter the Answer'\" class=\"form-control ml-3\">\n                                    </div>\n                                </div>\n                                <div class=\"mt-3 editor_bullet col-md-12 ml-4\" *ngIf=\"list.question_type_id == 55\">\n                                    <div class=\"essay-box\" *ngIf=\"showAnswer\">\n                                        <h2>Sample Essay</h2>\n                                        <p>\n                                            <span *ngIf=\"showAnswer && list.answer[0]?.correctAnswer.trim() != ''\" [innerHTML]=\"convertMarkdownToHtml(list.answer[0].correctAnswer)\" class=\"mb-0 overflow-auto\"></span>\n                                            <span class=\"innerhtml-margin-clear color-primary\" *ngIf=\"showAnswer && list.answer[0]?.correctAnswer.trim() == ''\" >\n                                                No Sample Essay added for this question\n                                            </span>\n                                        </p>\n                                    </div>\n<!--                                    <div class=\"card\" *ngIf=\"showAnswer\">-->\n<!--                                        <div class=\"card-header p-3 background_gradient\">-->\n<!--                                            <h5 style=\"color: white\" class=\"font-weight-bold\">Sample Essay</h5>-->\n<!--                                        </div>-->\n<!--                                        <div class=\"card-body p-3 custom_feedback_card_body\">-->\n<!--                                            <span *ngIf=\"showAnswer && list.answer[0]?.correctAnswer.trim() != ''\"-->\n<!--                                                  [innerHTML]=\"convertMarkdownToHtml(list.answer[0].correctAnswer)\" class=\"mb-0 overflow-auto\"></span>-->\n<!--                                            <span class=\"innerhtml-margin-clear color-primary\" *ngIf=\"showAnswer && list.answer[0]?.correctAnswer.trim() == ''\" >-->\n<!--                                                No Sample Essay added for this question-->\n<!--                                            </span>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n                                    <div class=\"col-12 mt-2 px-0 text-area\" *ngIf=\"!showAnswer\">\n                                        <label><b>Correct Answer: </b></label>\n                                        <textarea class=\"form-control\" rows=\"10\" [(ngModel)]=\"studentAnswer\"  placeholder=\"Please enter your answer\"></textarea>\n                                        <div class=\"word-count\">\n                                            <span class=\"mr-2\">{{wordCount()}}&nbsp;Words</span>\n                                        </div>\n                                    </div>\n                                </div>\n<!--                                <div class=\"col-md-12 pl-2 pr-0 m-4\" *ngIf=\"list.question_type_id == 55\">-->\n<!--                                    <label *ngIf=\"showAnswer\"><b>Sample Essay: </b></label>-->\n<!--                                    <div class=\"col-md-12 form-span editor_bullet\" style=\"overflow-y: scroll; max-height: 60vh\">-->\n<!--                                        <span style=\"font-size: 16px\" [innerHTML]=\"convertMarkdownToHtml(list.answer[0]?.correctAnswer)\" class=\"innerhtml-margin-clear\"></span>-->\n<!--                                    </div>-->\n<!--                                    <div class=\"col-md-12 form-span editor_bullet\" style=\"overflow-y: scroll; max-height: 60vh\">-->\n<!--                                        <span class=\"innerhtml-margin-clear color-primary\">-->\n<!--                                            No Sample Essay added for this question-->\n<!--                                        </span>-->\n<!--                                    </div>-->\n<!--                                    <div class=\"col-12 mt-2 px-0 text-area\" *ngIf=\"!showAnswer\">-->\n<!--                                        <label><b>Correct Answer: </b></label>-->\n<!--                                        <textarea class=\"form-control\" rows=\"10\" [(ngModel)]=\"studentAnswer\"  placeholder=\"Please enter your answer\"></textarea>-->\n<!--                                        <div class=\"word-count\">-->\n<!--                                            <span class=\"mr-2\">{{wordCount()}}&nbsp;Words</span>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n                                <div class=\"col-12 mt-3\" *ngIf=\"list.question_type_id == 20\">\n                                    <div *ngIf=\"showAnswer\">\n                                        <div class=\"col-12 my-2 editor_bullet\" *ngFor=\"let answer of list.answer\">\n                                            <span [innerHTML]=\"answer.correctAnswer | sanitizeHtml\"></span>\n                                        </div>\n                                    </div>\n                                    <app-tiny-mice *ngIf=\"!showAnswer\" [height]=\"120\"\n                                                   [showDropBtn]=\"false\"\n                                                   [showInputBtn]=\"false\"></app-tiny-mice>\n                                </div>\n\n                                <div class=\"col-12 mt-3 editor_bullet\" *ngIf=\"['21', '22'].indexOf(list.question_type_id) > -1\">\n                                    <span *ngIf=\"showAnswer\" [innerHTML]=\"list.answer[0].correctAnswer | sanitizeHtml\"></span>\n                                    <app-tiny-mice *ngIf=\"!showAnswer\" [height]=\"120\"\n                                                   [showDropBtn]=\"false\"\n                                                   [showInputBtn]=\"false\"></app-tiny-mice>\n                                </div>\n                                <div *ngIf=\"list.question_type_id == 28\" class=\"col-12 mt-3 editor_bullet\">\n                                    <span *ngIf=\"showAnswer\" [innerHTML]=\"list.answer[0].correctAnswer | sanitizeHtml\"></span>\n                                    <app-tiny-mice *ngIf=\"!showAnswer\" [height]=\"120\"\n                                                   [editorPatchValue]=\"list.options[0].options\"\n                                                   [showDropBtn]=\"false\"\n                                                   [showInputBtn]=\"false\"></app-tiny-mice>\n                                </div>\n                                <div *ngIf=\"list.question_type_id == 24\" class=\"col-12 mt-3\">\n                                    <div *ngFor=\"let item of list.subQuestions; let j = index\" class=\"mb-3 mt-4\">\n                                        <div class=\"row d-flex justify-content-start\">\n<!--                                            <div>-->\n<!--                                                <button class=\"btn-outline-primary question-no-big\">{{j+1}}</button>-->\n<!--                                            </div>-->\n                                            <div class=\"pl-4 align-self-center passage-inner\" [innerHTML]=\"item.question | sanitizeHtml\"></div>\n                                        </div>\n                                        <div *ngIf=\"item.question_type_id == 1 || item.question_type_id == 2\" class=\"mt-2\">\n                                            <div *ngFor=\"let answer of item.answer; let k = index\"  class=\"mb-2 multiSelectCard d-flex\" style=\"padding: 12px 16px\">\n                                                <!-- [ngClass]=\"{'question-page-selected' : (answer.correctActive === '' ? false: answer.correctActive == k) && showAnswer}\" -->\n                                                <span [ngClass]=\"{'selectColor' : (answer.correctActive === 0 ? false: answer.correctActive == 1) &&  showAnswer}\" class=\"multichoice-option1 mr-2\">{{((k+1) + 9).toString(36).toUpperCase()}}</span>\n                                                <span [innerHTML]=\"item.options[k].options | sanitizeHtml\" class=\"ml-3 mt-2\"></span>\n                                            </div>\n                                        </div>\n                                        <div *ngIf=\"item.question_type_id == 5 || item.question_type_id == 7\" class=\"col-12 table-flexible\">\n                                            <table class=\"table table-bordered text-center col-12 mt-2\">\n                                                <thead>\n                                                <tr>\n                                                    <th>Questions</th>\n                                                    <th *ngFor=\"let answer of item.answer; let k=index\" [innerHTML]=\"answer | sanitizeHtml\"></th>\n                                                </tr>\n                                                </thead>\n                                                <tbody *ngIf=\"item.question_type_id == 5\">\n                                                <tr  *ngFor=\"let answer of item.heading_option; let k=index\">\n                                                    <td [innerHTML]=\"item.options[k].options | sanitizeHtml\"></td>\n                                                    <td *ngFor=\"let term of item.answer; let l=index\">\n                                                        <input [checked]=\"answer.correctActive === l && showAnswer\" class=\"radio_animated\" name=\"{{i}}choose{{j}}Cfs{{k}}p{{page}}\" type=\"radio\">\n                                                    </td>\n                                                </tr>\n                                                </tbody>\n                                                <tbody *ngIf=\"item.question_type_id == 7\">\n                                                <tr  *ngFor=\"let answer of item.options; let k=index\">\n                                                    <td [innerHTML]=\"answer.options | sanitizeHtml\"></td>\n                                                    <td *ngFor=\"let chk of item.answer; let l=index\">\n                                                        <input *ngIf=\"showAnswer\" id=\"checkMultiPassage{{i}}{{j}}{{k}}{{l}}\" type=\"checkbox\">\n                                                        <input *ngIf=\"!showAnswer\" type=\"checkbox\">\n                                                    </td>\n                                                </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                        <div class=\"col-7 mt-3\" *ngIf=\"item.question_type_id == 10\">\n                                            <div *ngFor=\"let ans of item.answer; let k = index\" class=\"mb-3 d-flex justify-content-center\">\n                                                <div class=\"question-no-small\">\n                                                    <h6 class=\"mb-0\">{{k+1}}</h6>\n                                                </div>\n                                                <span *ngIf=\"showAnswer\" [innerHTML]=\"ans.options[0].value | sanitizeHtml\" class=\"form-control ml-3\"></span>\n                                                <input *ngIf=\"!showAnswer\" type=\"text\" [placeholder]=\"'Enter the Correct Answer'\" class=\"form-control ml-3\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-12\" *ngIf=\"['20'].indexOf(item.question_type_id) > -1\">\n                                            <div class=\"col-12 px-0 my-3 editor_bullet\" *ngFor=\"let answer of item.answer; let i = index\">\n                                                <label *ngIf=\"showAnswer\" class=\"col-12 px-0\"><b>Correct Answer {{i + 1}}</b></label>\n                                                <span *ngIf=\"showAnswer\" [innerHTML]=\"answer.correctAnswer | sanitizeHtml\"></span>\n                                                <input *ngIf=\"!showAnswer\" type=\"text\" [placeholder]=\"'Enter the Correct Answer'\" class=\"form-control ml-3\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-12\" *ngIf=\"detailData.content_format == '3' && showAnswer\">\n                                            <div class=\"card explanation\">\n                                                <div class=\"card-body\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-4 mb-3\">\n                                                            <label class=\"m-0\"><b>Subject:</b></label>\n                                                            <p>{{item?.subject_name ? item?.subject_name  : '-'}}</p>\n                                                        </div>\n                                                        <div class=\"col-4 mb-3\">\n                                                            <label class=\"m-0\"><b>Topic:</b></label>\n                                                            <p>{{item?.question_topic ? item?.question_topic : '-'}}</p>\n                                                        </div>\n                                                        <div class=\"col-4 mb-3\">\n                                                            <label class=\"m-0\"><b>Sub Topic:</b></label>\n                                                            <p>{{item?.sub_topic ? item?.sub_topic : '-'}}</p>\n                                                        </div>\n                                                        <div class=\"col-4 mb-3\">\n                                                            <label class=\"m-0\"><b>Skill:</b></label>\n                                                            <p *ngIf=\"item?.skill\">\n                                                                <span *ngIf=\"item?.skill.length == 0\">-</span>\n                                                                <span *ngFor=\"let skill of item?.skill; let last = last\">{{skill}}<span *ngIf=\"!last\">, </span></span>\n                                                            </p>\n                                                            <p *ngIf=\"!item.skill\">-</p>\n                                                        </div>\n                                                        <div class=\"col-4 mb-3\">\n                                                            <label class=\"m-0\"><b>Standard:</b></label>\n                                                            <p>{{item?.question_standard_name ? item?.question_standard_name : '-'}}</p>\n                                                        </div>\n                                                        <div class=\"col-4 mb-3\">\n                                                            <label class=\"m-0\"><b>Difficulty:</b></label>\n                                                            <p>{{item?.level == '1' ? 'Easy' : item?.level == '2' ? 'Medium' : 'Difficult'}}</p>\n                                                        </div>\n                                                        <div class=\"col-4\">\n                                                            <label class=\"m-0\"><b>Points:</b></label>\n                                                            <p>{{item?.points ? item?.points :  '-'}}</p>\n                                                        </div>\n                                                        <div class=\"col-4\">\n                                                            <label class=\"m-0\"><b>Predicted Solving Time:</b></label>\n                                                            <p>{{item?.predicted_solving_time ? item?.predicted_solving_time : '-'}}</p>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div *ngIf=\"item.explanation != '' && showAnswer\" class=\"col-md-12 mt-4 d-flex\">\n                                            <div class=\"col-md-12 px-0\">\n                                                <label><b>Explanation:</b></label>\n                                                <div class=\"explanation innerhtml-margin-clear\" [innerHTML]=\"item.explanation | sanitizeHtml\"></div>\n                                            </div>\n                                        </div>\n\n                                        <div *ngIf=\"item.resource != '' && showAnswer\" class=\"col-md-12 mt-4 d-flex\">\n                                            <div class=\"col-md-12 px-0\">\n                                                <label><b>Resource:</b> </label>\n                                                <div class=\"explanation innerhtml-margin-clear\" [innerHTML]=\"item.resource | sanitizeHtml\"></div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"list.question_type_id == 16\" class=\"col-12 mt-3 d-flex\">\n                                    <div class=\"col-md-6 form-group mt-2\">\n                                        <label><b>Source</b></label>\n                                        <!--                                <h6 *ngIf=\"item.target != ''\" class=\"text-center\"><b>{{item.target}}</b></h6>-->\n                                        <!--                                <h6 *ngIf=\"item.target == ''\" class=\"text-center\"><b>Target</b></h6>-->\n                                        <div *ngFor=\"let item of list.options\" class=\"input-group mb-3 mt-3 inputMenu\">\n                                            <div class=\"input-group-prepend\">\n                                                <span class=\"input-group-text\"><img class=\"img-fluid\" alt=\"\" src=\"assets/images/pdf-icons/equal@2x.png\" style=\"width: 25px; height: 25px;\"></span>\n                                            </div>\n                                            <div [innerHTML]=\"item.options | sanitizeHtml\" class=\"w-75 px-3 pt-4 pb-3 border border-dark\"></div>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"showAnswer\" class=\"col-md-6 form-group mt-2\">\n                                        <label><b>Target</b></label>\n                                        <!--                                <h6 *ngIf=\"item.target != ''\" class=\"text-center\"><b>{{item.target}}</b></h6>-->\n                                        <!--                                <h6 *ngIf=\"item.target == ''\" class=\"text-center\"><b>Target</b></h6>-->\n                                        <div *ngFor=\"let item of list.answer\" class=\"input-group mb-3 mt-3 inputMenu\">\n                                            <div class=\"input-group-prepend\">\n                                                <span class=\"input-group-text\"><img class=\"img-fluid\" alt=\"\" src=\"assets/images/pdf-icons/equal@2x.png\" style=\"width: 25px; height: 25px;\"></span>\n                                            </div>\n                                            <div [innerHTML]=\"item.correctAnswer | sanitizeHtml\" class=\"w-75 px-3 pt-4 pb-3 border border-dark\"></div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"list.question_type_id == 40 || list.question_type_id == 41\" class=\"col-12 mt-3 justify-content-center\">\n                                    <app-graph-component *ngIf=\"showAnswer\" [editMode]=\"false\"\n                                                         [editPatchValue]=\"parseVal(list.answer[0].correctAnswer)\"\n                                                         [graphId]=\"'preview'+i\"\n                                                         [questionType]=\"list.question_type_id\"></app-graph-component>\n                                    <app-graph-component *ngIf=\"!showAnswer\" [editMode]=\"false\"\n                                                         [editPatchValue]=\"false\"\n                                                         [graphId]=\"'preview'+i\"\n                                                         [questionType]=\"list.question_type_id\"></app-graph-component>\n                                </div>\n                                <div class=\"col-12\" *ngIf=\"detailData.content_format == '3' && list.question_type_id != 24 && showAnswer && list.question_type_id != 55\">\n                                    <div class=\"card explanation\">\n                                        <div class=\"card-body\">\n                                            <div class=\"row\">\n                                                <div class=\"col-4 mb-3\">\n                                                    <label class=\"m-0\"><b>Subject:</b></label>\n                                                    <p>{{list?.subject_name ? list?.subject_name : '-'}}</p>\n                                                </div>\n                                                <div class=\"col-4 mb-3\">\n                                                    <label class=\"m-0\"><b>Topic:</b></label>\n                                                    <p>{{list?.question_topic ? list?.question_topic : '-'}}</p>\n                                                </div>\n                                                <div class=\"col-4 mb-3\">\n                                                    <label class=\"m-0\"><b>Sub Topic:</b></label>\n                                                    <p>{{list?.sub_topic ? list?.sub_topic : '-'}}</p>\n                                                </div>\n                                                <div class=\"col-4 mb-3\">\n                                                    <label class=\"m-0\"><b>Skill:</b></label>\n                                                    <p *ngIf=\"list?.skill\">\n                                                        <span *ngIf=\"list?.skill.length == 0\">-</span>\n                                                        <span *ngFor=\"let skill of list?.skill; let last = last\">{{skill}}<span *ngIf=\"!last\">, </span></span>\n                                                    </p>\n                                                    <p *ngIf=\"!list.skill\">-</p>\n                                                </div>\n                                                <div class=\"col-4 mb-3\">\n                                                    <label class=\"m-0\"><b>Standard:</b></label>\n                                                    <p>{{list?.question_standard_name ? list?.question_standard_name : '-'}}</p>\n                                                </div>\n                                                <div class=\"col-4 mb-3\">\n                                                    <label class=\"m-0\"><b>Difficulty:</b></label>\n                                                    <p>{{list.level == '1' ? 'Easy' : list.level == '2' ? 'Medium' : 'Difficult'}}</p>\n                                                </div>\n                                                <div class=\"col-4\">\n                                                    <label class=\"m-0\"><b>Points:</b></label>\n                                                    <p>{{list?.points ? list?.points : '-'}}</p>\n                                                </div>\n                                                <div class=\"col-4\">\n                                                    <label class=\"m-0\"><b>Predicted Solving Time:</b></label>\n                                                    <p>{{list?.predicted_solving_time ? list?.predicted_solving_time : '-'}}</p>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"list.explanation != '' && list.question_type_id != 24 && showAnswer\" class=\"col-md-12 mt-4 d-flex\">\n                                    <div class=\"col-md-12 px-0\">\n                                        <label><b>Explanation:</b></label>\n                                        <div class=\"explanation innerhtml-margin-clear\" [innerHTML]=\"list.explanation | sanitizeHtml\"></div>\n                                    </div>\n                                </div>\n\n                                <div *ngIf=\"list.resource != '' && list.question_type_id != 24 && showAnswer\" class=\"col-md-12 mt-4 d-flex\">\n                                    <div class=\"col-md-12 px-0\">\n                                        <label><b>Resource:</b></label>\n                                        <div class=\"explanation innerhtml-margin-clear\" [innerHTML]=\"list.resource | sanitizeHtml\"></div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                </div>\n            </div>\n            <div class=\"container\">\n                <div class=\"col-12 text-right\">\n                    <pagination-controls class=\"pagination1\" (pageChange)=\"onPageChange($event)\"\n                                         previousLabel=\"Previous\"\n                                         nextLabel=\"Next\"\n                                         autoHide=\"true\"\n                                         maxSize=\"8\"\n                    ></pagination-controls>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #multiChoiceDetail let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">{{quesId == '1' ? 'Multi choice Standard' : 'Multi Selection'}}</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n            <div class=\"col-12\">\n                <div *ngFor=\"let list of answerIndex; let i=index\" class=\"mb-4 multiSelectCard\" style=\"padding: 16px\">\n                    <!-- [ngClass]=\"{'question-page-selected' : list.active === i}\" -->\n                    <span [ngClass]=\"{'selectColor' : list.active === i}\" class=\"multichoice-option1 mr-2\">{{((i+1) + 9).toString(36).toUpperCase()}}</span>\n                    <span class=\"mt-2\">{{list.options}}</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal-footer d-flex justify-content-right mt-2\">\n            <button (click)=\"close()\" class=\"btn btn-primary\" type=\"button\">Ok</button>\n        </div>\n    </div>\n</ng-template>\n<ng-template #matchTableDetail let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 *ngIf=\"this.quesId == '5'\" class=\"modal-title letter\">Match Table Standard</h4>\n        <h4 *ngIf=\"this.quesId == '7'\" class=\"modal-title letter\">Match Table Labels</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-12 table-flexible\">\n            <table class=\"table table-bordered text-center\">\n                <thead>\n                <tr>\n                    <th>Questions</th>\n                    <th *ngFor=\"let list of fullData.answer; let i=index\">\n                        {{list.correctAnswer}}</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr  *ngFor=\"let list of fullData.options; let j=index\">\n                    <td>{{list.options}}</td>\n                    <td *ngFor=\"let item of fullData.heading_option; let i=index\">\n                        <input *ngIf=\"this.quesId == '5'\" [checked]=\"item.correctActive === j\" class=\"radio_animated\" name=\"choose{{j}}\" type=\"radio\">\n                        <input *ngIf=\"this.quesId == '7'\" [checked]=\"item.correctAnswer === j\" type=\"checkbox\">\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"modal-footer d-flex justify-content-right mt-2\">\n            <button (click)=\"close()\" class=\"btn btn-primary\" type=\"button\">Ok</button>\n        </div>\n    </div>\n</ng-template>\n<ng-template #dropDownDetail let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 *ngIf=\"this.quesId == '9'\" class=\"modal-title letter\">Text Entry</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-12\">\n            <span>{{fullData.answer}}</span>\n        </div>\n        <div class=\"modal-footer d-flex justify-content-right mt-2\">\n            <button (click)=\"close()\" class=\"btn btn-primary\" type=\"button\">Ok</button>\n        </div>\n    </div>\n</ng-template>\n<ng-template #viewGraph let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-body\">\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-11\">\n                <h5 class=\"text-center\"><b>Graph</b></h5>\n            </div>\n            <div class=\"col-sm-1\">\n                <i (click)=\"close()\" class=\"fa fa-close cursor\"></i>\n            </div>\n            <div class=\"col-12 d-flex flex-column\">\n                <app-graph-component [editMode]=\"false\"\n                                     [editPatchValue]=\"graphShow\"\n                                     [graphId]=\"'previewGraph'\"\n                                     [questionType]=\"'40'\"></app-graph-component>\n            </div>\n        </div>\n        <button (click)=\"close()\" class=\"btn btn-primary pull-right mt-4\" type=\"button\">Ok</button>\n    </div>\n</ng-template>\n<ng-template #additionalResourceLink let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title font-weight-bold\" id=\"modal-basic-title\">Resources</h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\" *ngFor=\"let item of additionalLinks; let last = last\">\n                <div class=\"col-md-12\">\n                    <a class=\"cursor\" href=\"{{item.link}}\" target=\"_blank\">\n                        <span style=\"overflow: scroll; overflow-y: hidden\" title=\"{{item.link}}\">{{item.name && item.name != '' ? item.name : item.link}}</span>\n                    </a>\n                    <hr *ngIf=\"!last\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"close()\">Cancel</button>\n    </div>\n</ng-template>\n<!--<ng-template #viewExplain let-c=\"close\" let-d=\"dismiss\">-->\n<!--    <div class=\"modal-header d-flex justify-content-between\">-->\n<!--        <h4>Explanation</h4>-->\n<!--        <i (click)=\"close()\" class=\"fa fa-close cursor\"></i>-->\n<!--    </div>-->\n<!--    <div class=\"modal-body\">-->\n<!--        &lt;!&ndash; Container-fluid starts&ndash;&gt;-->\n<!--        <div class=\"container-fluid\">-->\n<!--            <div class=\"row\">-->\n<!--                <div class=\"col-md-12 overflow-y-scroll\">-->\n<!--                    <p [innerHTML]=\"ExplanationPopupValue | sanitizeHtml\"></p>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--            &lt;!&ndash; Container-fluid Ends&ndash;&gt;-->\n<!--        </div>-->\n<!--    </div>-->\n<!--</ng-template>-->\n\n<ng-template #feedbackStatus>\n    <div class=\"modal-body\">\n        <div class=\"col-12 px-0 my-3 d-flex flex-row align-items-center\">\n            <div class=\"feedback_spinner\"></div>\n            <span class=\"ml-3\" style=\"font-size: 16px\">Please wait while we load the module ...</span>\n        </div>\n    </div>\n</ng-template>\n", styles: [".selectColor{\n  background: purple;\n  color: #fff;\n}\n\n\n\n@keyframes blinkStroke {\n  100%,\n  0% {\n    stroke: #500;\n  }\n  30% {\n    stroke: deeppink;\n  }\n  60% {\n    stroke: yellow;\n  }\n  100% {\n    stroke: black;\n  }\n}\n\n@keyframes blinkFill {\n  100%,\n  0% {\n    fill: #500;\n  }\n  30% {\n    fill: deeppink;\n  }\n  60% {\n    fill: yellow;\n  }\n  100% {\n    fill: black;\n  }\n}\n\n.editAction {\n  font-size: 24px;\n  border: 1px solid #8F008A;\n  padding: 4px;\n  border-radius: 4px;\n  cursor: pointer;\n  color: #8f008a;\n}\n.test-width {\n  min-width: 200px !important;\n  ::ng-deep .ng-select .ng-select-container, ::ng-deep .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n    font-size: 14px !important;\n    font-weight: normal !important;\n  }\n}\n"] }]
    }], () => [{ type: i1.ConfigurationService }, { type: i2.CommonDataService }, { type: i3.CommonService }, { type: i4.AuthService }, { type: i5.ClassService }, { type: i6.NgbModal }, { type: i7.DomSanitizer }, { type: i8.Router }, { type: i9.NewsubjectService }, { type: i8.ActivatedRoute }, { type: i10.TeacherService }, { type: i11.CreatorService }, { type: i12.NavService }], { multiChoiceDetail: [{
            type: ViewChild,
            args: ['multiChoiceDetail']
        }], viewGraph: [{
            type: ViewChild,
            args: ['viewGraph']
        }], additionalResourceLink: [{
            type: ViewChild,
            args: ['additionalResourceLink']
        }], matchTableDetail: [{
            type: ViewChild,
            args: ['matchTableDetail']
        }], dropDownDetail: [{
            type: ViewChild,
            args: ['dropDownDetail']
        }], pdfPage: [{
            type: ViewChild,
            args: ['pdfPage']
        }], deleteClass: [{
            type: ViewChild,
            args: ['class']
        }], viewExplain: [{
            type: ViewChild,
            args: ['viewExplain']
        }], feedbackStatus: [{
            type: ViewChild,
            args: ['feedbackStatus']
        }], calledBy: [{
            type: Input
        }], contentData: [{
            type: Input
        }], closePopUp: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PreviewComponent, { className: "PreviewComponent" }); })();
//# sourceMappingURL=preview.component.js.map