import { Component, ViewChild } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { parse, stringify } from 'flatted';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/creator.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/platform-browser";
import * as i6 from "../../../shared/service/configuration.service";
import * as i7 from "@ng-bootstrap/ng-bootstrap";
import * as i8 from "ngx-toastr";
import * as i9 from "../../../shared/service/student.service";
import * as i10 from "../../../environment.service";
import * as i11 from "../../../shared/service/common-data.service";
import * as i12 from "../../../shared/service/common.service";
import * as i13 from "@angular/common";
import * as i14 from "@angular/cdk/drag-drop";
import * as i15 from "../tiny-mice/tiny-mice.component";
import * as i16 from "../graph-component/graph-component.component";
import * as i17 from "../../../shared/pipes/sanitizer/SanitizeHtmlPipe.pipe";
import * as i18 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["submitAlert"];
const _c1 = ["content"];
const _c2 = ["scrollContent"];
const _c3 = ["rightArrow"];
const _c4 = ["leftArrow"];
const _c5 = ["feedback"];
const _c6 = ["feedbackStatus"];
const _c7 = (a0, a1, a2, a3, a4) => ({ "bg-green": a0, "bg-partially": a1, "bg-red": a2, "black": a3, "selectedQuestion": a4 });
const _c8 = () => ["20"];
const _c9 = () => ["55"];
const _c10 = a0 => ({ "div-disable": a0 });
const _c11 = a0 => ({ "student-selected": a0 });
const _c12 = () => ({ standalone: true });
const _c13 = a0 => ({ "active": a0 });
const _c14 = (a0, a1, a2) => ({ "badge-exceptional": a0, "badge-good": a1, "badge-improve": a2 });
function StudentScratchComponent_div_12_h4_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 34)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elapsed_r1 = ctx.ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(elapsed_r1.hours);
} }
function StudentScratchComponent_div_12_h4_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 34)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elapsed_r2 = ctx.ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(elapsed_r2.minutes);
} }
function StudentScratchComponent_div_12_h4_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 34)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elapsed_r3 = ctx.ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(elapsed_r3.seconds);
} }
function StudentScratchComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28)(1, "div", 29);
    i0.ɵɵtemplate(2, StudentScratchComponent_div_12_h4_2_Template, 3, 1, "h4", 30);
    i0.ɵɵelementStart(3, "h6", 31);
    i0.ɵɵtext(4, "Hours");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 32)(6, "h4", 33);
    i0.ɵɵtext(7, ":");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 29);
    i0.ɵɵtemplate(9, StudentScratchComponent_div_12_h4_9_Template, 3, 1, "h4", 30);
    i0.ɵɵelementStart(10, "h6", 31);
    i0.ɵɵtext(11, "Minutes");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 32)(13, "h4", 33);
    i0.ɵɵtext(14, ":");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 29);
    i0.ɵɵtemplate(16, StudentScratchComponent_div_12_h4_16_Template, 3, 1, "h4", 30);
    i0.ɵɵelementStart(17, "h6", 31);
    i0.ɵɵtext(18, "Seconds");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.getElapsedTime());
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r3.getElapsedTime());
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r3.getElapsedTime());
} }
function StudentScratchComponent_i_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 35);
    i0.ɵɵlistener("click", function StudentScratchComponent_i_14_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.showFeedback()); });
    i0.ɵɵelementEnd();
} }
function StudentScratchComponent_img_15_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 36);
    i0.ɵɵlistener("click", function StudentScratchComponent_img_15_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.otherlink()); });
    i0.ɵɵelementEnd();
} }
function StudentScratchComponent_i_16_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 37);
    i0.ɵɵlistener("click", function StudentScratchComponent_i_16_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.saveAnswer("2", "exit", true, "same")); });
    i0.ɵɵelementEnd();
} }
function StudentScratchComponent_i_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 38);
    i0.ɵɵlistener("click", function StudentScratchComponent_i_17_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.saveAnswer("2", "noExit", true, "same")); });
    i0.ɵɵelementEnd();
} }
function StudentScratchComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵlistener("click", function StudentScratchComponent_button_18_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r3 = i0.ɵɵnextContext(); ctx_r3.buttonClicked = "submit"; return i0.ɵɵresetView(ctx_r3.submitPopup()); });
    i0.ɵɵtext(1, "Submit ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("btn btn-primary pull-right ", ctx_r3.env.deviceType() ? "border-radius-5" : "", "");
} }
function StudentScratchComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵlistener("click", function StudentScratchComponent_button_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.backbutton()); });
    i0.ɵɵtext(1, "Back ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("btn btn-outline-primary pull-right ml-2 ", ctx_r3.env.deviceType() ? "border-radius-5" : "", "");
} }
function StudentScratchComponent_div_21_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 48)(1, "span", 49);
    i0.ɵɵlistener("click", function StudentScratchComponent_div_21_div_11_Template_span_click_1_listener() { const ctx_r12 = i0.ɵɵrestoreView(_r12); const list_r14 = ctx_r12.$implicit; const i_r15 = ctx_r12.index; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.checkWhetherSaveIsNeeded(list_r14, i_r15, "qnsNumber")); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_12_0;
    const list_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate1("id", "questionNo", i_r15, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(4, _c7, ((tmp_12_0 = ctx_r3.checkQuestionId(list_r14)) == null ? null : tmp_12_0.is_correct) == "true", ((tmp_12_0 = ctx_r3.checkQuestionId(list_r14)) == null ? null : tmp_12_0.is_correct) == "partially-completed" || ((tmp_12_0 = ctx_r3.checkQuestionId(list_r14)) == null ? null : tmp_12_0.is_correct) == "manual", ((tmp_12_0 = ctx_r3.checkQuestionId(list_r14)) == null ? null : tmp_12_0.is_correct) == "false" || !ctx_r3.correctAnswer, (((tmp_12_0 = ctx_r3.checkQuestionId(list_r14)) == null ? null : tmp_12_0.is_correct) == "" || ((tmp_12_0 = ctx_r3.checkQuestionId(list_r14)) == null ? null : tmp_12_0.is_correct) == null) && ctx_r3.showQuestion != i_r15, (((tmp_12_0 = ctx_r3.checkQuestionId(list_r14)) == null ? null : tmp_12_0.is_correct) == "" || ((tmp_12_0 = ctx_r3.checkQuestionId(list_r14)) == null ? null : tmp_12_0.is_correct) == null) && ctx_r3.showQuestion == i_r15));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i_r15 + 1, " ");
} }
function StudentScratchComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 40)(1, "div", 41)(2, "div", 42)(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 43)(6, "div", 44, 4);
    i0.ɵɵlistener("scroll", function StudentScratchComponent_div_21_Template_div_scroll_6_listener() { i0.ɵɵrestoreView(_r11); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onScroll()); });
    i0.ɵɵelementStart(8, "button", 45, 5);
    i0.ɵɵlistener("click", function StudentScratchComponent_div_21_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r11); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onClickScrollLeft()); });
    i0.ɵɵtext(10, "<<");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, StudentScratchComponent_div_21_div_11_Template, 3, 10, "div", 46);
    i0.ɵɵelementStart(12, "button", 47, 6);
    i0.ɵɵlistener("click", function StudentScratchComponent_div_21_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r11); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onClickScrollRight()); });
    i0.ɵɵtext(14, ">> ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r3.totalAns.length, " Questions");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r3.totalAns);
} }
function StudentScratchComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50)(1, "div", 51)(2, "div", 52)(3, "h4", 53);
    i0.ɵɵtext(4, "Description:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 54);
    i0.ɵɵelement(6, "span", 55);
    i0.ɵɵpipe(7, "sanitizeHtml");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(7, 1, ctx_r3.scratchQuestionData.file_text), i0.ɵɵsanitizeHtml);
} }
function StudentScratchComponent_div_24_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " . ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    const item_r17 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("alert alert-", ((tmp_10_0 = ctx_r3.checkQuestionId(item_r17)) == null ? null : tmp_10_0.is_correct) == "false" || !ctx_r3.correctAnswer ? "danger" : "success", " alert-dismissible fade show");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ((tmp_11_0 = ctx_r3.checkQuestionId(item_r17)) == null ? null : tmp_11_0.is_correct) == "false" || !ctx_r3.correctAnswer ? "You have entered Incorrect Answer !" : "Great Response ! You have entered Correct Answer", "");
} }
function StudentScratchComponent_div_24_div_1_div_6_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 82)(1, "b");
    i0.ɵɵelement(2, "h3", 83);
    i0.ɵɵpipe(3, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r17 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(3, 1, item_r17.question), i0.ɵɵsanitizeHtml);
} }
function StudentScratchComponent_div_24_div_1_div_6_div_7_i_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 93);
} }
function StudentScratchComponent_div_24_div_1_div_6_div_7_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 94);
} }
function StudentScratchComponent_div_24_div_1_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 82)(1, "div", 84)(2, "div", 85, 7)(4, "h2", 86)(5, "button", 87);
    i0.ɵɵelement(6, "h4", 88);
    i0.ɵɵelementStart(7, "div", 89);
    i0.ɵɵtemplate(8, StudentScratchComponent_div_24_div_1_div_6_div_7_i_8_Template, 1, 0, "i", 90);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, StudentScratchComponent_div_24_div_1_div_6_div_7_ng_template_9_Template, 1, 0, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 91);
    i0.ɵɵelement(12, "div", 92);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const accordion_r18 = i0.ɵɵreference(3);
    const uparrow_r19 = i0.ɵɵreference(10);
    const item_r17 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("ngbAccordionItem", item_r17.question_type_id);
    i0.ɵɵproperty("collapsed", false);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", ctx_r3.convertMarkdownToHtml(item_r17.question, accordion_r18.collapsed ? 20 : 0), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", accordion_r18.collapsed)("ngIfElse", uparrow_r19);
} }
function StudentScratchComponent_div_24_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 77)(1, "div", 10)(2, "div", 78)(3, "button", 79);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 80);
    i0.ɵɵtemplate(6, StudentScratchComponent_div_24_div_1_div_6_div_6_Template, 4, 3, "div", 81)(7, StudentScratchComponent_div_24_div_1_div_6_div_7_Template, 13, 5, "div", 81);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    const item_r17 = ctx_r19.$implicit;
    const i_r21 = ctx_r19.index;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i_r21 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r17.question != "" && item_r17.question_type_id != 24 && item_r17.question_type_id != 55);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.question != "" && item_r17.question_type_id == 55);
} }
function StudentScratchComponent_div_24_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 65)(1, "div", 95);
    i0.ɵɵelement(2, "span", 96);
    i0.ɵɵpipe(3, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r17 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(3, 1, item_r17.editor_context), i0.ɵɵsanitizeHtml);
} }
function StudentScratchComponent_div_24_div_1_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 99);
    i0.ɵɵelement(1, "span", 96);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, item_r17.subQuestions[0] == null ? null : item_r17.subQuestions[0].passage), i0.ɵɵsanitizeHtml);
} }
function StudentScratchComponent_div_24_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 65)(1, "button", 97);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, StudentScratchComponent_div_24_div_1_div_8_div_3_Template, 3, 3, "div", 98);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    const item_r17 = ctx_r19.$implicit;
    const i_r21 = ctx_r19.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r21 + 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r17.subQuestions[0] == null ? null : item_r17.subQuestions[0].passage) != "" && (item_r17.subQuestions[0] == null ? null : item_r17.subQuestions[0].passage));
} }
function StudentScratchComponent_div_24_div_1_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 104);
    i0.ɵɵlistener("click", function StudentScratchComponent_div_24_div_1_div_10_div_2_Template_div_click_0_listener() { const k_r23 = i0.ɵɵrestoreView(_r22).index; const ctx_r19 = i0.ɵɵnextContext(3); const item_r17 = ctx_r19.$implicit; const i_r21 = ctx_r19.index; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.cfsGetMultiChoice(i_r21, k_r23, item_r17)); });
    i0.ɵɵelement(1, "span", 105);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r24 = ctx.$implicit;
    const k_r23 = ctx.index;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c11, k_r23.toString() == option_r24.isSelected));
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, option_r24.options), i0.ɵɵsanitizeHtml);
} }
function StudentScratchComponent_div_24_div_1_div_10_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 108);
    i0.ɵɵelement(1, "span", 105);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r25 = ctx.$implicit;
    const k_r26 = ctx.index;
    const item_r17 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c11, option_r25.correctAnswer != ""));
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, item_r17.options[k_r26].options), i0.ɵɵsanitizeHtml);
} }
function StudentScratchComponent_div_24_div_1_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 106)(1, "label")(2, "strong");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, StudentScratchComponent_div_24_div_1_div_10_div_3_div_4_Template, 3, 6, "div", 107);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", item_r17.answer);
} }
function StudentScratchComponent_div_24_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 100)(1, "div", 101);
    i0.ɵɵtemplate(2, StudentScratchComponent_div_24_div_1_div_10_div_2_Template, 3, 6, "div", 102);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, StudentScratchComponent_div_24_div_1_div_10_div_3_Template, 5, 1, "div", 103);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c10, ctx_r3.checkDisableConditionForQns(item_r17)));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r17.given_answer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.is_correct == "true" || item_r17.is_correct == "false");
} }
function StudentScratchComponent_div_24_div_1_div_11_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 114);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r27 = ctx.$implicit;
    const i_r21 = i0.ɵɵnextContext(3).index;
    i0.ɵɵpropertyInterpolate("id", "columnId" + i_r21);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 2, list_r27), i0.ɵɵsanitizeHtml);
} }
function StudentScratchComponent_div_24_div_1_div_11_tr_8_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 117);
    i0.ɵɵlistener("click", function StudentScratchComponent_div_24_div_1_div_11_tr_8_td_3_input_1_Template_input_click_0_listener() { i0.ɵɵrestoreView(_r28); const k_r29 = i0.ɵɵnextContext().index; const j_r30 = i0.ɵɵnextContext().index; const ctx_r19 = i0.ɵɵnextContext(3); const item_r17 = ctx_r19.$implicit; const i_r21 = ctx_r19.index; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.cfsGetChooseTable(item_r17, i_r21, j_r30, k_r29)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r29 = i0.ɵɵnextContext().index;
    const j_r30 = i0.ɵɵnextContext().index;
    const i_r21 = i0.ɵɵnextContext(3).index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate2("id", "", j_r30, "chooseSingle", i_r21, "");
    i0.ɵɵpropertyInterpolate2("name", "", i_r21, "choosesingle", j_r30, "corect");
    i0.ɵɵproperty("checked", ctx_r3.totalAns[i_r21].given_answer[j_r30].isSelected == "" ? false : ctx_r3.totalAns[i_r21].given_answer[j_r30].isSelected == k_r29.toString());
} }
function StudentScratchComponent_div_24_div_1_div_11_tr_8_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 118);
    i0.ɵɵlistener("click", function StudentScratchComponent_div_24_div_1_div_11_tr_8_td_3_input_2_Template_input_click_0_listener() { i0.ɵɵrestoreView(_r31); const k_r29 = i0.ɵɵnextContext().index; const j_r30 = i0.ɵɵnextContext().index; const ctx_r19 = i0.ɵɵnextContext(3); const item_r17 = ctx_r19.$implicit; const i_r21 = ctx_r19.index; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.cfsGetChooseTable(item_r17, i_r21, j_r30, k_r29)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r29 = i0.ɵɵnextContext().index;
    const j_r30 = i0.ɵɵnextContext().index;
    const i_r21 = i0.ɵɵnextContext(3).index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate2("id", "", j_r30, "chooseMulti", i_r21, "");
    i0.ɵɵproperty("checked", ctx_r3.splitMultiChoose(ctx_r3.totalAns[i_r21].given_answer[j_r30].isSelected, k_r29));
} }
function StudentScratchComponent_div_24_div_1_div_11_tr_8_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, StudentScratchComponent_div_24_div_1_div_11_tr_8_td_3_input_1_Template, 1, 7, "input", 115)(2, StudentScratchComponent_div_24_div_1_div_11_tr_8_td_3_input_2_Template, 1, 4, "input", 116);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.question_type_id == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.question_type_id == "7");
} }
function StudentScratchComponent_div_24_div_1_div_11_tr_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 105);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, StudentScratchComponent_div_24_div_1_div_11_tr_8_td_3_Template, 3, 2, "td", 112);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r32 = ctx.$implicit;
    const item_r17 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, list_r32.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r17.answer);
} }
function StudentScratchComponent_div_24_div_1_div_11_div_9_th_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 105);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r33 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r33), i0.ɵɵsanitizeHtml);
} }
function StudentScratchComponent_div_24_div_1_div_11_div_9_tr_11_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 124);
} if (rf & 2) {
    const k_r34 = i0.ɵɵnextContext().index;
    const j_r35 = i0.ɵɵnextContext().index;
    const ctx_r19 = i0.ɵɵnextContext(4);
    const item_r17 = ctx_r19.$implicit;
    const i_r21 = ctx_r19.index;
    i0.ɵɵpropertyInterpolate2("name", "", i_r21, "choosesingleCorrect", j_r35, "corect");
    i0.ɵɵproperty("checked", item_r17.heading_option[j_r35].correctActive === k_r34);
} }
function StudentScratchComponent_div_24_div_1_div_11_div_9_tr_11_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 125);
} if (rf & 2) {
    const k_r34 = i0.ɵɵnextContext().index;
    const j_r35 = i0.ɵɵnextContext().index;
    const ctx_r19 = i0.ɵɵnextContext(4);
    const item_r17 = ctx_r19.$implicit;
    const i_r21 = ctx_r19.index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate3("id", "chooseMultipass", i_r21, "", j_r35, "", k_r34, "");
    i0.ɵɵproperty("checked", ctx_r3.patchCorrectMultiChoiceAnswer(item_r17.heading_option, k_r34, j_r35));
} }
function StudentScratchComponent_div_24_div_1_div_11_div_9_tr_11_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, StudentScratchComponent_div_24_div_1_div_11_div_9_tr_11_td_3_input_1_Template, 1, 4, "input", 122)(2, StudentScratchComponent_div_24_div_1_div_11_div_9_tr_11_td_3_input_2_Template, 1, 5, "input", 123);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.question_type_id == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.question_type_id == "7");
} }
function StudentScratchComponent_div_24_div_1_div_11_div_9_tr_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 105);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, StudentScratchComponent_div_24_div_1_div_11_div_9_tr_11_td_3_Template, 3, 2, "td", 112);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r36 = ctx.$implicit;
    const item_r17 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, list_r36.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r17.answer);
} }
function StudentScratchComponent_div_24_div_1_div_11_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 119)(1, "label")(2, "strong");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "table", 120)(5, "thead")(6, "tr")(7, "th");
    i0.ɵɵtext(8, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, StudentScratchComponent_div_24_div_1_div_11_div_9_th_9_Template, 2, 3, "th", 121);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "tbody");
    i0.ɵɵtemplate(11, StudentScratchComponent_div_24_div_1_div_11_div_9_tr_11_Template, 4, 4, "tr", 112);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r17 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", item_r17.answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r17.given_answer);
} }
function StudentScratchComponent_div_24_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 109)(1, "table", 110)(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, StudentScratchComponent_div_24_div_1_div_11_th_6_Template, 2, 4, "th", 111);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "tbody");
    i0.ɵɵtemplate(8, StudentScratchComponent_div_24_div_1_div_11_tr_8_Template, 4, 4, "tr", 112);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, StudentScratchComponent_div_24_div_1_div_11_div_9_Template, 12, 2, "div", 113);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c10, ctx_r3.checkDisableConditionForQns(item_r17)));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", item_r17.answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r17.given_answer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.is_correct == "true" || item_r17.is_correct == "false");
} }
function StudentScratchComponent_div_24_div_1_div_12_div_1_span_9_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 134);
    i0.ɵɵpipe(1, "sanitizeHtml");
    i0.ɵɵlistener("click", function StudentScratchComponent_div_24_div_1_div_12_div_1_span_9_Template_span_click_0_listener($event) { const ctx_r39 = i0.ɵɵrestoreView(_r39); const list_r41 = ctx_r39.$implicit; const k_r42 = ctx_r39.index; const j_r38 = i0.ɵɵnextContext().index; const i_r21 = i0.ɵɵnextContext(3).index; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.cfsGetDropdown($event, i_r21, j_r38, k_r42, list_r41.listOption)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r41 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r41.listOption), i0.ɵɵsanitizeHtml);
} }
function StudentScratchComponent_div_24_div_1_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 128)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 129);
    i0.ɵɵelement(4, "button", 130);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementStart(6, "div", 131)(7, "span", 132);
    i0.ɵɵlistener("click", function StudentScratchComponent_div_24_div_1_div_12_div_1_Template_span_click_7_listener($event) { const j_r38 = i0.ɵɵrestoreView(_r37).index; const i_r21 = i0.ɵɵnextContext(3).index; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.cfsGetDropdown($event, i_r21, j_r38, "", "Select Answer")); });
    i0.ɵɵtext(8, "Select Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, StudentScratchComponent_div_24_div_1_div_12_div_1_span_9_Template, 2, 3, "span", 133);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const data_r43 = ctx.$implicit;
    const j_r38 = ctx.index;
    const i_r21 = i0.ɵɵnextContext(3).index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Dropdown - ", j_r38 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r21 + "dropdown" + j_r38)("innerHTML", data_r43.isSelected === "" ? "Select Answer" : i0.ɵɵpipeBind1(5, 4, data_r43.options[data_r43.isSelected].correctAnswer), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", data_r43.options);
} }
function StudentScratchComponent_div_24_div_1_div_12_div_2_div_4_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 143);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const option_r44 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, option_r44.listOption), i0.ɵɵsanitizeHtml);
} }
function StudentScratchComponent_div_24_div_1_div_12_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 137)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 138);
    i0.ɵɵelement(4, "div", 139);
    i0.ɵɵelementStart(5, "div", 140)(6, "span", 141);
    i0.ɵɵtext(7, "Select Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, StudentScratchComponent_div_24_div_1_div_12_div_2_div_4_span_8_Template, 2, 3, "span", 142);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const j_r45 = ctx.index;
    const item_r17 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Dropdown - ", j_r45 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("id", "dropdown", j_r45, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", item_r17.options);
} }
function StudentScratchComponent_div_24_div_1_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 135)(1, "label")(2, "b");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, StudentScratchComponent_div_24_div_1_div_12_div_2_div_4_Template, 9, 4, "div", 136);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", item_r17.answer);
} }
function StudentScratchComponent_div_24_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 100);
    i0.ɵɵtemplate(1, StudentScratchComponent_div_24_div_1_div_12_div_1_Template, 10, 6, "div", 126)(2, StudentScratchComponent_div_24_div_1_div_12_div_2_Template, 5, 1, "div", 127);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c10, ctx_r3.checkDisableConditionForQns(item_r17)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r17.given_answer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.is_correct == "true" || item_r17.is_correct == "false");
} }
function StudentScratchComponent_div_24_div_1_div_13_div_1_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 146);
    i0.ɵɵlistener("input", function StudentScratchComponent_div_24_div_1_div_13_div_1_input_3_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r46); const j_r47 = i0.ɵɵnextContext().index; const ctx_r19 = i0.ɵɵnextContext(3); const item_r17 = ctx_r19.$implicit; const i_r21 = ctx_r19.index; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.cfsGetInput($event, i_r21, j_r47, item_r17)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r48 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("readOnly", ctx_r3.studentContentStatus != "1" && ctx_r3.studentContentStatus != "2")("value", data_r48.isSelected);
} }
function StudentScratchComponent_div_24_div_1_div_13_div_1_app_tiny_mice_4_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-tiny-mice", 147);
    i0.ɵɵlistener("emitEditorValue", function StudentScratchComponent_div_24_div_1_div_13_div_1_app_tiny_mice_4_Template_app_tiny_mice_emitEditorValue_0_listener($event) { i0.ɵɵrestoreView(_r49); const j_r47 = i0.ɵɵnextContext().index; const ctx_r19 = i0.ɵɵnextContext(3); const item_r17 = ctx_r19.$implicit; const i_r21 = ctx_r19.index; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.cfsGetInput($event, i_r21, j_r47, item_r17)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r49 = i0.ɵɵnextContext();
    const data_r48 = ctx_r49.$implicit;
    const j_r47 = ctx_r49.index;
    const i_r21 = i0.ɵɵnextContext(3).index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("editorPatchValue", data_r48.isSelected == "" ? false : data_r48.isSelected)("height", 100)("id", i_r21 + "input" + j_r47)("readonly", ctx_r3.studentContentStatus != "1" && ctx_r3.studentContentStatus != "2")("showDropBtn", false)("showInputBtn", false);
} }
function StudentScratchComponent_div_24_div_1_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 128)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, StudentScratchComponent_div_24_div_1_div_13_div_1_input_3_Template, 1, 2, "input", 144)(4, StudentScratchComponent_div_24_div_1_div_13_div_1_app_tiny_mice_4_Template, 1, 6, "app-tiny-mice", 145);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r47 = ctx.index;
    const item_r17 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Input - ", j_r47 + 1, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.editor_type == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.editor_type != 1);
} }
function StudentScratchComponent_div_24_div_1_div_13_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 128)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 148);
    i0.ɵɵelement(4, "div", 55);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r51 = ctx.$implicit;
    const j_r52 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Input - ", j_r52 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, data_r51.options[0].value), i0.ɵɵsanitizeHtml);
} }
function StudentScratchComponent_div_24_div_1_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 135)(1, "label")(2, "b");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, StudentScratchComponent_div_24_div_1_div_13_div_2_div_4_Template, 6, 4, "div", 126);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", item_r17.options);
} }
function StudentScratchComponent_div_24_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 100);
    i0.ɵɵtemplate(1, StudentScratchComponent_div_24_div_1_div_13_div_1_Template, 5, 3, "div", 126)(2, StudentScratchComponent_div_24_div_1_div_13_div_2_Template, 5, 1, "div", 127);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c10, ctx_r3.checkDisableConditionForQns(item_r17)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r17.given_answer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.is_correct == "true" || item_r17.is_correct == "false");
} }
function StudentScratchComponent_div_24_div_1_div_14_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 153)(1, "div", 154)(2, "div", 155)(3, "span", 156);
    i0.ɵɵelement(4, "img", 157);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "h4", 158);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r54 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, list_r54.options), i0.ɵɵsanitizeHtml);
} }
function StudentScratchComponent_div_24_div_1_div_14_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 153)(1, "div", 161)(2, "div", 155)(3, "span", 156);
    i0.ɵɵelement(4, "img", 157);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "h4", 158);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r55 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, list_r55.correctAnswer), i0.ɵɵsanitizeHtml);
} }
function StudentScratchComponent_div_24_div_1_div_14_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 159)(1, "label")(2, "b");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 160);
    i0.ɵɵtemplate(5, StudentScratchComponent_div_24_div_1_div_14_div_4_div_5_Template, 7, 3, "div", 151);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r17 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", item_r17.answer);
} }
function StudentScratchComponent_div_24_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 100)(1, "div", 149)(2, "div", 150);
    i0.ɵɵlistener("cdkDropListDropped", function StudentScratchComponent_div_24_div_1_div_14_Template_div_cdkDropListDropped_2_listener($event) { i0.ɵɵrestoreView(_r53); const i_r21 = i0.ɵɵnextContext(2).index; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.droppedCorrect($event, i_r21)); });
    i0.ɵɵtemplate(3, StudentScratchComponent_div_24_div_1_div_14_div_3_Template, 7, 3, "div", 151);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, StudentScratchComponent_div_24_div_1_div_14_div_4_Template, 6, 1, "div", 152);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c10, ctx_r3.checkDisableConditionForQns(item_r17)));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", item_r17.given_answer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.is_correct == "true" || item_r17.is_correct == "false");
} }
function StudentScratchComponent_div_24_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 162)(1, "app-tiny-mice", 147);
    i0.ɵɵlistener("emitEditorValue", function StudentScratchComponent_div_24_div_1_div_15_Template_app_tiny_mice_emitEditorValue_1_listener($event) { i0.ɵɵrestoreView(_r56); const i_r21 = i0.ɵɵnextContext(2).index; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.cfsGetPara($event, i_r21)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    const item_r17 = ctx_r19.$implicit;
    const i_r21 = ctx_r19.index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("editorPatchValue", item_r17.given_answer[0].isSelected == "" ? false : item_r17.given_answer[0].isSelected)("height", 120)("id", i_r21 + "para")("readonly", ctx_r3.studentContentStatus != "1" && ctx_r3.studentContentStatus != "2")("showDropBtn", false)("showInputBtn", false);
} }
function StudentScratchComponent_div_24_div_1_div_16_div_6_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r58 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 174);
    i0.ɵɵlistener("click", function StudentScratchComponent_div_24_div_1_div_16_div_6_li_5_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r58); const ctx_r3 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r3.feedbackSelected("current")); });
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2, "Current Version");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c13, ctx_r3.selectedFeedBackIndex === ""));
} }
function StudentScratchComponent_div_24_div_1_div_16_div_6_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 174);
    i0.ɵɵlistener("click", function StudentScratchComponent_div_24_div_1_div_16_div_6_li_6_Template_li_click_0_listener() { const feedback_r60 = i0.ɵɵrestoreView(_r59).$implicit; const ctx_r3 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r3.feedbackSelected(feedback_r60)); });
    i0.ɵɵelementStart(1, "a", 89);
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "span", 175);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const feedback_r60 = ctx.$implicit;
    const i_r61 = ctx.index;
    const ctx_r3 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c13, ctx_r3.selectedFeedBackIndex === ctx_r3.previousFeedBack.length - i_r61));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Version ", ctx_r3.previousFeedBack.length - i_r61, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(6, _c14, ctx_r3.getFeedbackLabel(feedback_r60).label === "Exceptional", ctx_r3.getFeedbackLabel(feedback_r60).label === "Good", ctx_r3.getFeedbackLabel(feedback_r60).label === "Improve"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.getFeedbackLabel(feedback_r60).label);
} }
function StudentScratchComponent_div_24_div_1_div_16_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 176)(1, "span", 177);
    i0.ɵɵtext(2, "You can use Request For Feedback ");
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, "more times! ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("\u00A0", ctx_r3.maximumAllowedCount - ctx_r3.previousFeedBack.length, "\u00A0");
} }
function StudentScratchComponent_div_24_div_1_div_16_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 167)(1, "div", 168)(2, "h5", 169);
    i0.ɵɵtext(3, "Version History");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ul", 170);
    i0.ɵɵtemplate(5, StudentScratchComponent_div_24_div_1_div_16_div_6_li_5_Template, 3, 3, "li", 171)(6, StudentScratchComponent_div_24_div_1_div_16_div_6_li_6_Template, 5, 10, "li", 172);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, StudentScratchComponent_div_24_div_1_div_16_div_6_div_7_Template, 6, 1, "div", 173);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", !ctx_r3.feedbackServiceCalled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.previousFeedBack);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.previousFeedBack.length < ctx_r3.maximumAllowedCount);
} }
function StudentScratchComponent_div_24_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 163)(1, "div")(2, "textarea", 164);
    i0.ɵɵlistener("ngModelChange", function StudentScratchComponent_div_24_div_1_div_16_Template_textarea_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r57); const item_r17 = i0.ɵɵnextContext(2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onEssayAnswerChange(item_r17, $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 165)(4, "span", 166);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(6, StudentScratchComponent_div_24_div_1_div_16_div_6_Template, 8, 3, "div", 58);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("text-area pl-0 col-", ctx_r3.previousFeedBack.length == 0 ? "12" : "9", "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("rows", ctx_r3.previousFeedBack.length < ctx_r3.maximumAllowedCount ? "24" : "21");
    i0.ɵɵproperty("ngModel", ctx_r3.getEssayAnswer(item_r17))("readonly", ctx_r3.selectedFeedBackIndex != 0 && ctx_r3.selectedFeedBackIndex != "" || ctx_r3.studentContentStatus != "1" && ctx_r3.studentContentStatus != "2")("ngModelOptions", i0.ɵɵpureFunction0(9, _c12));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r3.wordCount(item_r17), "\u00A0Words");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.previousFeedBack.length != 0);
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 190);
    i0.ɵɵlistener("click", function StudentScratchComponent_div_24_div_1_div_17_div_1_div_7_div_2_Template_div_click_0_listener() { const k_r63 = i0.ɵɵrestoreView(_r62).index; const ctx_r63 = i0.ɵɵnextContext(2); const sec_r65 = ctx_r63.$implicit; const j_r66 = ctx_r63.index; const i_r21 = i0.ɵɵnextContext(3).index; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.cfsPassageMultiChoice(i_r21, j_r66, k_r63, sec_r65)); });
    i0.ɵɵelement(1, "span", 105);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r67 = ctx.$implicit;
    const k_r63 = ctx.index;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c11, option_r67.isSelected == k_r63.toString()));
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, option_r67.options), i0.ɵɵsanitizeHtml);
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_7_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 193);
    i0.ɵɵelement(1, "span", 105);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r68 = ctx.$implicit;
    const k_r69 = ctx.index;
    const sec_r65 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c11, option_r68.correctAnswer !== ""));
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, sec_r65.options[k_r69].options), i0.ɵɵsanitizeHtml);
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 191)(1, "label")(2, "strong");
    i0.ɵɵtext(3, "Correct Answer :");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, StudentScratchComponent_div_24_div_1_div_17_div_1_div_7_div_3_div_4_Template, 3, 6, "div", 192);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r65 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", sec_r65.answer);
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 186)(1, "div", 187);
    i0.ɵɵtemplate(2, StudentScratchComponent_div_24_div_1_div_17_div_1_div_7_div_2_Template, 3, 6, "div", 188);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, StudentScratchComponent_div_24_div_1_div_17_div_1_div_7_div_3_Template, 5, 1, "div", 189);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r65 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c10, ctx_r3.studentContentStatus != "1" && ctx_r3.studentContentStatus != "2"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", sec_r65.given_answer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r65.is_correct == "true" || sec_r65.is_correct == "false");
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 105);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r70 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r70), i0.ɵɵsanitizeHtml);
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_tr_8_td_2_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r71 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 198);
    i0.ɵɵlistener("click", function StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_tr_8_td_2_input_1_Template_input_click_0_listener() { i0.ɵɵrestoreView(_r71); const l_r72 = i0.ɵɵnextContext().index; const k_r73 = i0.ɵɵnextContext().index; const ctx_r63 = i0.ɵɵnextContext(2); const sec_r65 = ctx_r63.$implicit; const j_r66 = ctx_r63.index; const ctx_r3 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r3.cfsGetChooseTable(sec_r65, j_r66, k_r73, l_r72)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r72 = i0.ɵɵnextContext().index;
    const k_r73 = i0.ɵɵnextContext().index;
    const ctx_r63 = i0.ɵɵnextContext(2);
    const sec_r65 = ctx_r63.$implicit;
    const j_r66 = ctx_r63.index;
    const i_r21 = i0.ɵɵnextContext(3).index;
    i0.ɵɵpropertyInterpolate3("name", "", i_r21, "choose", k_r73, "passas", j_r66, "");
    i0.ɵɵproperty("checked", sec_r65.given_answer[k_r73].isSelected == "" ? false : sec_r65.given_answer[k_r73].isSelected == l_r72.toString());
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_tr_8_td_2_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r74 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 199);
    i0.ɵɵlistener("click", function StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_tr_8_td_2_input_2_Template_input_click_0_listener() { i0.ɵɵrestoreView(_r74); const l_r72 = i0.ɵɵnextContext().index; const k_r73 = i0.ɵɵnextContext().index; const ctx_r63 = i0.ɵɵnextContext(2); const sec_r65 = ctx_r63.$implicit; const j_r66 = ctx_r63.index; const ctx_r3 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r3.cfsGetChooseTable(sec_r65, j_r66, k_r73, l_r72)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r72 = i0.ɵɵnextContext().index;
    const k_r73 = i0.ɵɵnextContext().index;
    const sec_r65 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r3 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("checked", ctx_r3.splitMultiChoose(sec_r65.given_answer[k_r73].isSelected, l_r72));
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_tr_8_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_tr_8_td_2_input_1_Template, 1, 5, "input", 196)(2, StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_tr_8_td_2_input_2_Template, 1, 1, "input", 197);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r65 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r65.question_type_id == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r65.question_type_id == "7");
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_tr_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 105);
    i0.ɵɵtemplate(2, StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_tr_8_td_2_Template, 3, 2, "td", 112);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r75 = ctx.$implicit;
    const sec_r65 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", list_r75.options, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", sec_r65.answer);
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_div_9_th_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 105);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r76 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r76), i0.ɵɵsanitizeHtml);
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_div_9_tr_11_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 124);
} if (rf & 2) {
    const k_r77 = i0.ɵɵnextContext().index;
    const j_r78 = i0.ɵɵnextContext().index;
    const sec_r65 = i0.ɵɵnextContext(3).$implicit;
    const i_r21 = i0.ɵɵnextContext(3).index;
    i0.ɵɵpropertyInterpolate2("name", "", i_r21, "choosesingleCorrect", j_r78, "corect");
    i0.ɵɵproperty("checked", sec_r65.heading_option[j_r78].correctActive === k_r77);
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_div_9_tr_11_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 125);
} if (rf & 2) {
    const k_r77 = i0.ɵɵnextContext().index;
    const j_r78 = i0.ɵɵnextContext().index;
    const sec_r65 = i0.ɵɵnextContext(3).$implicit;
    const i_r21 = i0.ɵɵnextContext(3).index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate3("id", "chooseMultipass", i_r21, "", j_r78, "", k_r77, "");
    i0.ɵɵproperty("checked", ctx_r3.patchCorrectMultiChoiceAnswer(sec_r65.heading_option, k_r77, j_r78));
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_div_9_tr_11_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_div_9_tr_11_td_3_input_1_Template, 1, 4, "input", 122)(2, StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_div_9_tr_11_td_3_input_2_Template, 1, 5, "input", 123);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r65 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r65.question_type_id == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r65.question_type_id == "7");
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_div_9_tr_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 105);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_div_9_tr_11_td_3_Template, 3, 2, "td", 112);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r79 = ctx.$implicit;
    const sec_r65 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, list_r79.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", sec_r65.answer);
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 119)(1, "label")(2, "strong");
    i0.ɵɵtext(3, "Correct Answer :");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "table", 120)(5, "thead")(6, "tr")(7, "th");
    i0.ɵɵtext(8, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_div_9_th_9_Template, 2, 3, "th", 121);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "tbody");
    i0.ɵɵtemplate(11, StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_div_9_tr_11_Template, 4, 4, "tr", 112);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const sec_r65 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", sec_r65.answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", sec_r65.given_answer);
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 194)(1, "table", 195)(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_th_6_Template, 2, 3, "th", 121);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "tbody");
    i0.ɵɵtemplate(8, StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_tr_8_Template, 3, 2, "tr", 112);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_div_9_Template, 12, 2, "div", 113);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r65 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c10, ctx_r3.studentContentStatus != "1" && ctx_r3.studentContentStatus != "2"));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", sec_r65.answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", sec_r65.given_answer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r65.is_correct == "true" || sec_r65.is_correct == "false");
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_9_div_1_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r80 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 203);
    i0.ɵɵlistener("input", function StudentScratchComponent_div_24_div_1_div_17_div_1_div_9_div_1_input_3_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r80); const k_r81 = i0.ɵɵnextContext().index; const ctx_r63 = i0.ɵɵnextContext(2); const sec_r65 = ctx_r63.$implicit; const j_r66 = ctx_r63.index; const ctx_r3 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r3.cfsGetInput($event, j_r66, k_r81, sec_r65)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r82 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("readOnly", ctx_r3.studentContentStatus != "1" && ctx_r3.studentContentStatus != "2")("value", data_r82.isSelected);
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_9_div_1_app_tiny_mice_4_Template(rf, ctx) { if (rf & 1) {
    const _r83 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-tiny-mice", 147);
    i0.ɵɵlistener("emitEditorValue", function StudentScratchComponent_div_24_div_1_div_17_div_1_div_9_div_1_app_tiny_mice_4_Template_app_tiny_mice_emitEditorValue_0_listener($event) { i0.ɵɵrestoreView(_r83); const k_r81 = i0.ɵɵnextContext().index; const ctx_r63 = i0.ɵɵnextContext(2); const sec_r65 = ctx_r63.$implicit; const j_r66 = ctx_r63.index; const ctx_r3 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r3.cfsGetInput($event, j_r66, k_r81, sec_r65)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r83 = i0.ɵɵnextContext();
    const data_r82 = ctx_r83.$implicit;
    const k_r81 = ctx_r83.index;
    const j_r66 = i0.ɵɵnextContext(2).index;
    const i_r21 = i0.ɵɵnextContext(3).index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("editorPatchValue", data_r82.isSelected == "" ? false : data_r82.isSelected)("height", 120)("id", j_r66 + "inputPass" + k_r81 + "ssa" + i_r21)("readonly", ctx_r3.studentContentStatus != "1" && ctx_r3.studentContentStatus != "2")("showDropBtn", false)("showInputBtn", false);
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 201)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, StudentScratchComponent_div_24_div_1_div_17_div_1_div_9_div_1_input_3_Template, 1, 2, "input", 202)(4, StudentScratchComponent_div_24_div_1_div_17_div_1_div_9_div_1_app_tiny_mice_4_Template, 1, 6, "app-tiny-mice", 145);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r81 = ctx.index;
    const sec_r65 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Input - ", k_r81 + 1, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r65.editor_type == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r65.editor_type != 1);
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_9_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 128)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 148);
    i0.ɵɵelement(4, "div", 55);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r85 = ctx.$implicit;
    const j_r86 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Input - ", j_r86 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, data_r85.options[0].value), i0.ɵɵsanitizeHtml);
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 135)(1, "label")(2, "b");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, StudentScratchComponent_div_24_div_1_div_17_div_1_div_9_div_2_div_4_Template, 6, 4, "div", 126);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r65 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", sec_r65.options);
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, StudentScratchComponent_div_24_div_1_div_17_div_1_div_9_div_1_Template, 5, 3, "div", 200)(2, StudentScratchComponent_div_24_div_1_div_17_div_1_div_9_div_2_Template, 5, 1, "div", 127);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r65 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", sec_r65.given_answer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r65.is_correct == "true" || sec_r65.is_correct == "false");
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r87 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 204)(1, "app-tiny-mice", 147);
    i0.ɵɵlistener("emitEditorValue", function StudentScratchComponent_div_24_div_1_div_17_div_1_div_10_Template_app_tiny_mice_emitEditorValue_1_listener($event) { i0.ɵɵrestoreView(_r87); const ctx_r63 = i0.ɵɵnextContext(); const sec_r65 = ctx_r63.$implicit; const j_r66 = ctx_r63.index; const ctx_r3 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r3.cfsGetPassageEssay($event, j_r66, sec_r65)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r63 = i0.ɵɵnextContext();
    const sec_r65 = ctx_r63.$implicit;
    const j_r66 = ctx_r63.index;
    const ctx_r3 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("editorPatchValue", (sec_r65.given_answer[0] == null ? null : sec_r65.given_answer[0].isSelected) == "" ? false : sec_r65.given_answer[0] == null ? null : sec_r65.given_answer[0].isSelected)("height", 200)("id", j_r66 + "essayPass")("readonly", ctx_r3.studentContentStatus != "1" && ctx_r3.studentContentStatus != "2")("showDropBtn", false)("showInputBtn", false);
} }
function StudentScratchComponent_div_24_div_1_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 179)(1, "div", 180)(2, "div")(3, "button", 181);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "div", 182);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, StudentScratchComponent_div_24_div_1_div_17_div_1_div_7_Template, 4, 5, "div", 183)(8, StudentScratchComponent_div_24_div_1_div_17_div_1_div_8_Template, 10, 6, "div", 184)(9, StudentScratchComponent_div_24_div_1_div_17_div_1_div_9_Template, 3, 2, "div", 60)(10, StudentScratchComponent_div_24_div_1_div_17_div_1_div_10_Template, 2, 6, "div", 185);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r65 = ctx.$implicit;
    const j_r66 = ctx.index;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(j_r66 + 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 6, sec_r65.question), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", sec_r65.question_type_id == "1" || sec_r65.question_type_id == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r65.question_type_id == "5" || sec_r65.question_type_id == "7");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r65.question_type_id == "10");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r65.question_type_id == "20");
} }
function StudentScratchComponent_div_24_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 100);
    i0.ɵɵtemplate(1, StudentScratchComponent_div_24_div_1_div_17_div_1_Template, 11, 8, "div", 178);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c10, ctx_r3.checkDisableConditionForQns(item_r17)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r17.subQuestions);
} }
function StudentScratchComponent_div_24_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r88 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 162)(1, "app-tiny-mice", 147);
    i0.ɵɵlistener("emitEditorValue", function StudentScratchComponent_div_24_div_1_div_18_Template_app_tiny_mice_emitEditorValue_1_listener($event) { i0.ɵɵrestoreView(_r88); const i_r21 = i0.ɵɵnextContext(2).index; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.cfsGetHighlight($event, i_r21)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    const item_r17 = ctx_r19.$implicit;
    const i_r21 = ctx_r19.index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("editorPatchValue", (item_r17.given_answer[0] == null ? null : item_r17.given_answer[0].isSelected) == "" ? item_r17.options[0].options : item_r17.given_answer[0] == null ? null : item_r17.given_answer[0].isSelected)("height", 120)("id", i_r21 + "delta")("readonly", ctx_r3.studentContentStatus != "1" && ctx_r3.studentContentStatus != "2")("showDropBtn", false)("showInputBtn", false);
} }
function StudentScratchComponent_div_24_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r89 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 205)(1, "div", 206)(2, "app-graph-component", 207);
    i0.ɵɵlistener("valueChange", function StudentScratchComponent_div_24_div_1_div_19_Template_app_graph_component_valueChange_2_listener($event) { i0.ɵɵrestoreView(_r89); const i_r21 = i0.ɵɵnextContext(2).index; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.cfsgetGraphValue($event, i_r21)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 208)(4, "app-tiny-mice", 147);
    i0.ɵɵlistener("emitEditorValue", function StudentScratchComponent_div_24_div_1_div_19_Template_app_tiny_mice_emitEditorValue_4_listener($event) { i0.ɵɵrestoreView(_r89); const i_r21 = i0.ɵɵnextContext(2).index; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.cfsGetGraghEditor($event, i_r21)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    const item_r17 = ctx_r19.$implicit;
    const i_r21 = ctx_r19.index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("editMode", ctx_r3.studentContentStatus == "1" || ctx_r3.studentContentStatus == "2")("editPatchValue", item_r17.given_answer[0].correctAnswer ? ctx_r3.parseVal(item_r17.given_answer[0].correctAnswer) : false)("graphId", "graphAnswering" + i_r21)("questionType", item_r17.question_type_id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("editorPatchValue", item_r17.student_editor_answer == "" ? false : item_r17.student_editor_answer)("height", 120)("id", i_r21 + "explaino")("readonly", ctx_r3.studentContentStatus != "1" && ctx_r3.studentContentStatus != "2")("showDropBtn", false)("showInputBtn", false);
} }
function StudentScratchComponent_div_24_div_1_div_20_div_2_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r91 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 215);
    i0.ɵɵlistener("click", function StudentScratchComponent_div_24_div_1_div_20_div_2_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r91); const ctx_r3 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r3.feedbackSelected("current")); });
    i0.ɵɵelement(1, "i", 216);
    i0.ɵɵtext(2, "Revise");
    i0.ɵɵelementEnd();
} }
function StudentScratchComponent_div_24_div_1_div_20_div_2_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r92 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 217);
    i0.ɵɵlistener("click", function StudentScratchComponent_div_24_div_1_div_20_div_2_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r92); const item_r17 = i0.ɵɵnextContext(4).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.getFeedbackValue(item_r17)); });
    i0.ɵɵelement(1, "i", 218);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Request For Feedback (", ctx_r3.previousFeedBack.length, " / ", ctx_r3.maximumAllowedCount, ") ");
} }
function StudentScratchComponent_div_24_div_1_div_20_div_2_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r93 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 215);
    i0.ɵɵlistener("click", function StudentScratchComponent_div_24_div_1_div_20_div_2_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r93); const ctx_r3 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r3.saveAnswer("2", "noExit", true, "same")); });
    i0.ɵɵelement(1, "i", 219);
    i0.ɵɵtext(2, "Save");
    i0.ɵɵelementEnd();
} }
function StudentScratchComponent_div_24_div_1_div_20_div_2_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r94 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 220);
    i0.ɵɵlistener("click", function StudentScratchComponent_div_24_div_1_div_20_div_2_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r94); const ctx_r3 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r3.saveAnswer("2", "exit", true, "same")); });
    i0.ɵɵelement(1, "i", 221);
    i0.ɵɵtext(2, "Save & Exit");
    i0.ɵɵelementEnd();
} }
function StudentScratchComponent_div_24_div_1_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r90 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "button", 212);
    i0.ɵɵlistener("click", function StudentScratchComponent_div_24_div_1_div_20_div_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r90); const ctx_r3 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r3.checkForApiTypeQns()); });
    i0.ɵɵtext(2, " Submit For Final");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, StudentScratchComponent_div_24_div_1_div_20_div_2_button_3_Template, 3, 0, "button", 213)(4, StudentScratchComponent_div_24_div_1_div_20_div_2_button_4_Template, 3, 2, "button", 214)(5, StudentScratchComponent_div_24_div_1_div_20_div_2_button_5_Template, 3, 0, "button", 213)(6, StudentScratchComponent_div_24_div_1_div_20_div_2_button_6_Template, 3, 0, "button", 211);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r3.selectedFeedBackIndex != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.question_type_id == 55 && (ctx_r3.selectedFeedBackIndex == "" || ctx_r3.selectedFeedBackIndex <= 0) && ctx_r3.previousFeedBack.length < ctx_r3.maximumAllowedCount && (ctx_r3.scratchQuestionData == null ? null : ctx_r3.scratchQuestionData.auto_review) != "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.studentContentStatus == "1" || ctx_r3.studentContentStatus == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.studentContentStatus == "1" || ctx_r3.studentContentStatus == "2");
} }
function StudentScratchComponent_div_24_div_1_div_20_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r95 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 222);
    i0.ɵɵlistener("click", function StudentScratchComponent_div_24_div_1_div_20_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r95); const ctx_r19 = i0.ɵɵnextContext(3); const i_r21 = ctx_r19.index; const last_r96 = ctx_r19.last; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.checkLastQuestion(i_r21, last_r96)); });
    i0.ɵɵtext(1, " Next ");
    i0.ɵɵelement(2, "i", 223);
    i0.ɵɵelementEnd();
} }
function StudentScratchComponent_div_24_div_1_div_20_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r97 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 220);
    i0.ɵɵlistener("click", function StudentScratchComponent_div_24_div_1_div_20_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r97); const ctx_r3 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r3.tryAgainButton()); });
    i0.ɵɵtext(1, " Try Again ");
    i0.ɵɵelement(2, "i", 224);
    i0.ɵɵelementEnd();
} }
function StudentScratchComponent_div_24_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 209)(1, "div", 65);
    i0.ɵɵtemplate(2, StudentScratchComponent_div_24_div_1_div_20_div_2_Template, 7, 4, "div", 60)(3, StudentScratchComponent_div_24_div_1_div_20_button_3_Template, 3, 0, "button", 210)(4, StudentScratchComponent_div_24_div_1_div_20_button_4_Template, 3, 0, "button", 211);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_12_0;
    const item_r17 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.isSingleQnsWithFeedbackType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r3.isSingleQnsWithFeedbackType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ((tmp_12_0 = ctx_r3.checkQuestionId(item_r17)) == null ? null : tmp_12_0.is_correct) == "partially-completed" && !ctx_r3.tryAgainButtonEnabled);
} }
function StudentScratchComponent_div_24_div_1_div_21_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" (", i0.ɵɵpipeBind1(2, 2, ctx_r3.selectedPreviousStudentAnswer == null ? null : ctx_r3.selectedPreviousStudentAnswer.created_date), " | ", i0.ɵɵpipeBind2(3, 4, ctx_r3.selectedPreviousStudentAnswer == null ? null : ctx_r3.selectedPreviousStudentAnswer.created_date, "h:mm a"), ") ");
} }
function StudentScratchComponent_div_24_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 225)(2, "h5", 169);
    i0.ɵɵtext(3);
    i0.ɵɵtemplate(4, StudentScratchComponent_div_24_div_1_div_21_span_4_Template, 4, 7, "span", 60);
    i0.ɵɵtext(5, ":");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "div", 226);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Feedback ", ctx_r3.selectedFeedBackIndex, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.selectedPreviousStudentAnswer == null ? null : ctx_r3.selectedPreviousStudentAnswer.created_date);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", ctx_r3.convertedText, i0.ɵɵsanitizeHtml);
} }
function StudentScratchComponent_div_24_div_1_div_30_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r99 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵlistener("click", function StudentScratchComponent_div_24_div_1_div_30_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r99); const i_r21 = i0.ɵɵnextContext(3).index; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.submitQueries(i_r21, 0, "scratch")); });
    i0.ɵɵtext(1, " Submit ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("pull-right btn btn-primary ", ctx_r3.env.deviceType() ? "border-radius-5" : "", "");
} }
function StudentScratchComponent_div_24_div_1_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r98 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 227)(1, "div", 62)(2, "div", 10)(3, "label", 54)(4, "strong");
    i0.ɵɵtext(5, "FeedBack :");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 74)(7, "textarea", 228);
    i0.ɵɵlistener("input", function StudentScratchComponent_div_24_div_1_div_30_Template_textarea_input_7_listener($event) { i0.ɵɵrestoreView(_r98); const i_r21 = i0.ɵɵnextContext(2).index; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.getQueries($event, i_r21, 0, "scratch")); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 229)(9, "div", 65);
    i0.ɵɵtemplate(10, StudentScratchComponent_div_24_div_1_div_30_button_10_Template, 2, 3, "button", 24);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    const item_r17 = ctx_r19.$implicit;
    const i_r21 = ctx_r19.index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readOnly", ctx_r3.studentContentStatus != "1" && ctx_r3.studentContentStatus != "2")("value", item_r17.question_type_id != "24" ? item_r17.student_feedback : item_r17.subQuestions[0] == null ? null : item_r17.subQuestions[0].student_feedback);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r3.queries != "" && ctx_r3.queriesIndex == "id" + i_r21);
} }
function StudentScratchComponent_div_24_div_1_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r100 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 11)(2, "label")(3, "strong");
    i0.ɵɵtext(4, "Overall FeedBack:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "textarea", 230);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentScratchComponent_div_24_div_1_div_31_Template_textarea_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r100); const ctx_r3 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r3.totalFeedBack, $event) || (ctx_r3.totalFeedBack = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.totalFeedBack);
    i0.ɵɵproperty("readOnly", ctx_r3.studentContentStatus != "1" && ctx_r3.studentContentStatus != "2");
} }
function StudentScratchComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 59);
    i0.ɵɵtemplate(2, StudentScratchComponent_div_24_div_1_div_2_Template, 5, 4, "div", 60);
    i0.ɵɵelementStart(3, "div", 61)(4, "div", 62)(5, "div", 10);
    i0.ɵɵtemplate(6, StudentScratchComponent_div_24_div_1_div_6_Template, 8, 3, "div", 63)(7, StudentScratchComponent_div_24_div_1_div_7_Template, 4, 3, "div", 64)(8, StudentScratchComponent_div_24_div_1_div_8_Template, 4, 2, "div", 64);
    i0.ɵɵelementStart(9, "div", 65);
    i0.ɵɵtemplate(10, StudentScratchComponent_div_24_div_1_div_10_Template, 4, 5, "div", 66)(11, StudentScratchComponent_div_24_div_1_div_11_Template, 10, 6, "div", 67)(12, StudentScratchComponent_div_24_div_1_div_12_Template, 3, 5, "div", 66)(13, StudentScratchComponent_div_24_div_1_div_13_Template, 3, 5, "div", 66)(14, StudentScratchComponent_div_24_div_1_div_14_Template, 5, 5, "div", 66)(15, StudentScratchComponent_div_24_div_1_div_15_Template, 2, 6, "div", 68)(16, StudentScratchComponent_div_24_div_1_div_16_Template, 7, 10, "div", 69)(17, StudentScratchComponent_div_24_div_1_div_17_Template, 2, 4, "div", 66)(18, StudentScratchComponent_div_24_div_1_div_18_Template, 2, 6, "div", 68)(19, StudentScratchComponent_div_24_div_1_div_19_Template, 5, 10, "div", 70);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(20, StudentScratchComponent_div_24_div_1_div_20_Template, 5, 3, "div", 71)(21, StudentScratchComponent_div_24_div_1_div_21_Template, 7, 3, "div", 72);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 73)(23, "div", 62)(24, "div", 10)(25, "label", 54)(26, "strong");
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 74)(29, "app-tiny-mice", 75);
    i0.ɵɵlistener("emitEditorValue", function StudentScratchComponent_div_24_div_1_Template_app_tiny_mice_emitEditorValue_29_listener($event) { i0.ɵɵrestoreView(_r16); const i_r21 = i0.ɵɵnextContext().index; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.getWorkSpaceValue($event, i_r21)); });
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(30, StudentScratchComponent_div_24_div_1_div_30_Template, 11, 3, "div", 76)(31, StudentScratchComponent_div_24_div_1_div_31_Template, 6, 2, "div", 72);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_10_0;
    const item_r17 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("px-0 mb-2 ", ctx_r3.isSingleQnsWithFeedbackType ? "col-md-12" : ctx_r3.totalAns.length == 1 && ctx_r3.totalAns[0].question_type_id != "55" ? "col-md-9" : "col-md-9", "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ((tmp_10_0 = ctx_r3.checkQuestionId(item_r17)) == null ? null : tmp_10_0.is_correct) == "true" || ((tmp_10_0 = ctx_r3.checkQuestionId(item_r17)) == null ? null : tmp_10_0.is_correct) == "false" || !ctx_r3.correctAnswer);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", item_r17.question_type_id != 24);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.question_type_id == 24 && item_r17.question != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.question_type_id == 24);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r17.question_type_id == 1 || item_r17.question_type_id == 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.question_type_id == 5 || item_r17.question_type_id == 7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.question_type_id == 9);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.question_type_id == 10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.question_type_id == 16);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(27, _c8).indexOf(item_r17.question_type_id) > -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(28, _c9).indexOf(item_r17.question_type_id) > -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.question_type_id == 24);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.question_type_id == 28);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.question_type_id == 40 || item_r17.question_type_id == 41);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.studentContentStatus == "1" || ctx_r3.studentContentStatus == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r17.question_type_id == 55 && ctx_r3.convertedText && ctx_r3.convertedText != "");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", ctx_r3.isSingleQnsWithFeedbackType ? "Cited Source" : "WorkSpace", " :");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("editorPatchValue", item_r17.PatchData && item_r17.question_type_id != "24" ? item_r17.student_roughdata : item_r17.PatchData && item_r17.question_type_id == "24" ? item_r17.subQuestions[0] == null ? null : item_r17.subQuestions[0].student_roughdata : false)("height", 140)("readonly", ctx_r3.studentContentStatus != "1" && ctx_r3.studentContentStatus != "2")("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r3.isSingleQnsWithFeedbackType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r3.isSingleQnsWithFeedbackType);
} }
function StudentScratchComponent_div_24_div_2_h4_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4")(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elapsed_r101 = ctx.ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3(" ", elapsed_r101.hours, " ", elapsed_r101.minutes, " ", elapsed_r101.seconds, " ");
} }
function StudentScratchComponent_div_24_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 167)(1, "div", 12)(2, "div", 231)(3, "div", 10)(4, "div", 232)(5, "h5", 233);
    i0.ɵɵtext(6, "Question Answered");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 234)(8, "div", 235)(9, "h4")(10, "b");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(12, "h4");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(13, "div", 12)(14, "div", 231)(15, "div", 10)(16, "div", 236)(17, "h5", 233);
    i0.ɵɵtext(18, "Time Elapsed");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 234)(20, "div", 235);
    i0.ɵɵtemplate(21, StudentScratchComponent_div_24_div_2_h4_21_Template, 3, 3, "h4", 60);
    i0.ɵɵelement(22, "h4");
    i0.ɵɵelementStart(23, "h5")(24, "b");
    i0.ɵɵtext(25, "HR MIN SEC");
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(26, "div", 12)(27, "div", 231)(28, "div", 10)(29, "div", 236)(30, "h5", 233);
    i0.ɵɵtext(31, "Score");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 234)(33, "div", 235)(34, "h4")(35, "b");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(37, "h4");
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(ctx_r3.numOfQuestionAnswered());
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngIf", ctx_r3.getElapsedTime());
    i0.ɵɵadvance(15);
    i0.ɵɵtextInterpolate(ctx_r3.checkAutoGradeQns == "2" && (ctx_r3.studentContentStatus == "1" || ctx_r3.studentContentStatus == "2") ? ctx_r3.percentage : "-");
} }
function StudentScratchComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵtemplate(1, StudentScratchComponent_div_24_div_1_Template, 32, 29, "div", 57)(2, StudentScratchComponent_div_24_div_2_Template, 38, 3, "div", 58);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r21 = ctx.index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.showQuestion == i_r21);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.showQuestion == i_r21 && !ctx_r3.isSingleQnsWithFeedbackType);
} }
function StudentScratchComponent_ng_template_25_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 244);
    i0.ɵɵtext(1, "Once submitted, you will not be able to edit your answers");
    i0.ɵɵelementEnd();
} }
function StudentScratchComponent_ng_template_25_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 244);
    i0.ɵɵtext(1, "Yay! Your final effort and last question are here. The subsequent assignment will be turned in for evaluation after clicking the OK button");
    i0.ɵɵelementEnd();
} }
function StudentScratchComponent_ng_template_25_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r103 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 242);
    i0.ɵɵlistener("click", function StudentScratchComponent_ng_template_25_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r103); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.getFeedbackValue(ctx_r3.totalAns[0], "saveAndExit")); });
    i0.ɵɵtext(1, "Ok ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx_r3.env.deviceType() ? "border-radius-5" : "", "");
} }
function StudentScratchComponent_ng_template_25_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r104 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 242);
    i0.ɵɵlistener("click", function StudentScratchComponent_ng_template_25_button_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r104); const ctx_r3 = i0.ɵɵnextContext(2); ctx_r3.buttonClicked = ""; return i0.ɵɵresetView(ctx_r3.saveAnswer("4", "exit", true)); });
    i0.ɵɵtext(1, "Ok ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx_r3.env.deviceType() ? "border-radius-5" : "", "");
} }
function StudentScratchComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r102 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 237)(1, "h4", 238);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 239)(4, "div", 59)(5, "div", 10)(6, "div", 11);
    i0.ɵɵtemplate(7, StudentScratchComponent_ng_template_25_p_7_Template, 2, 0, "p", 240)(8, StudentScratchComponent_ng_template_25_p_8_Template, 2, 0, "p", 240);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 241)(10, "button", 242);
    i0.ɵɵlistener("click", function StudentScratchComponent_ng_template_25_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r102); const ctx_r3 = i0.ɵɵnextContext(); ctx_r3.buttonClicked = ""; return i0.ɵɵresetView(ctx_r3.close()); });
    i0.ɵɵtext(11, "Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, StudentScratchComponent_ng_template_25_button_12_Template, 2, 3, "button", 243)(13, StudentScratchComponent_ng_template_25_button_13_Template, 2, 3, "button", 243);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Submit ", ctx_r3.contentType, "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r3.buttonClicked == "submit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.buttonClicked == "");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("btn cancel ", ctx_r3.env.deviceType() ? "border-radius-5" : "", "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.isSingleQnsWithFeedbackType && (ctx_r3.scratchQuestionData == null ? null : ctx_r3.scratchQuestionData.auto_review) != "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(ctx_r3.isSingleQnsWithFeedbackType && (ctx_r3.scratchQuestionData == null ? null : ctx_r3.scratchQuestionData.auto_review) != "0"));
} }
function StudentScratchComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r105 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 245)(1, "h4", 246);
    i0.ɵɵtext(2, "Overall Feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 247);
    i0.ɵɵlistener("click", function StudentScratchComponent_ng_template_27_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r105); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 248)(5, "div", 59)(6, "div", 249)(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r3.scratchQuestionData.teacher_feedback);
} }
function StudentScratchComponent_ng_template_29_div_5_hr_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr");
} }
function StudentScratchComponent_ng_template_29_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 65)(2, "a", 254)(3, "span", 255);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, StudentScratchComponent_ng_template_29_div_5_hr_5_Template, 1, 0, "hr", 60);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r107 = ctx.$implicit;
    const j_r108 = ctx.index;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("href", item_r107.link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", item_r107.link);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r107.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", j_r108 != ctx_r3.linkdata.length - 1);
} }
function StudentScratchComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    const _r106 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 237)(1, "h4", 250);
    i0.ɵɵtext(2, "Resources");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 248)(4, "div", 59);
    i0.ɵɵtemplate(5, StudentScratchComponent_ng_template_29_div_5_Template, 6, 4, "div", 251);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 252)(7, "button", 253);
    i0.ɵɵlistener("click", function StudentScratchComponent_ng_template_29_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r106); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.close()); });
    i0.ɵɵtext(8, "Cancel");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r3.linkdata);
} }
function StudentScratchComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 248)(1, "div", 256);
    i0.ɵɵelement(2, "div", 257);
    i0.ɵɵelementStart(3, "span", 258);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.popUpMessage);
} }
export class StudentScratchComponent {
    constructor(auth, creator, activateRoute, formBuilder, sanitizer, confi, modalService, toastr, student, env, cdr, commondata, router, common) {
        this.auth = auth;
        this.creator = creator;
        this.activateRoute = activateRoute;
        this.formBuilder = formBuilder;
        this.sanitizer = sanitizer;
        this.confi = confi;
        this.modalService = modalService;
        this.toastr = toastr;
        this.student = student;
        this.env = env;
        this.cdr = cdr;
        this.commondata = commondata;
        this.router = router;
        this.common = common;
        this.studentId = '';
        this.schoolId = '';
        this.contentId = '';
        this.contentFormat = '';
        this.classId = '';
        this.studentContentId = '';
        this.classContentId = '';
        this.contentName = '';
        this.contentType = '';
        this.totalFeedBack = '';
        this.totalAns = [];
        this.timeTaken = 0;
        this.showQuestion = 0;
        this.percentage = '0';
        this.tryAgainButtonEnabled = false;
        this.buttonClicked = '';
        this.maximumAttempt = 3;
        this.correctAnswer = true;
        this.checkAutoGradeQns = '0';
        this.distance = 150;
        this.studentContentStatus = '';
        this.queriesIndex = '';
        this.queries = '';
        this.linkdata = [];
        this.graphEdited = false;
        this.needSaveForThisQns = false;
        this.selectedIndexForSameQns = 0;
        this.feedbackServiceCalled = false;
        this.selectedFeedBackIndex = '';
        this.previousFeedBack = [];
        this.maximumAllowedCount = 10;
        this.minimumWordValidation = 200;
        this.popUpMessage = '';
        this.activateRoute.params.forEach((params) => {
            console.log(params, 'params');
            this.auth.setSessionData('Accesstoken', params?.accesstoken);
            this.studentId = params?.student_id;
            this.schoolId = params?.school_id;
            this.contentId = params?.content_id;
            this.contentFormat = params?.content_format;
            this.classId = params?.class_id;
            this.studentContentId = params?.student_content_id;
            this.classContentId = params?.class_content_id;
            this.studentContentStatus = params?.student_content_status;
        });
    }
    ngOnInit() {
        this.questionList();
    }
    ngAfterContentInit() {
        if (this.scratchQuestionData?.content_format == '3' && (this.scratchQuestionData.student_content_status == '1' || this.scratchQuestionData.student_content_status == '2')) {
            this.timeIntervalForCFS = setInterval(() => {
                console.log('Service Called');
                this.saveAnswer('2', 'noExit', false);
            }, 60000);
        }
    }
    ngOnDestroy() {
        if (this.timeIntervalForCFS) {
            clearInterval(this.timeIntervalForCFS);
        }
        clearInterval(this.interval);
    }
    async questionList() {
        const data = {
            platform: 'web',
            role_id: '5',
            user_id: this.studentId,
            school_id: this.schoolId,
            content_id: this.contentId,
            content_format: this.contentFormat,
            class_id: this.classId,
            student_content_id: this.studentContentId,
            class_content_id: this.classContentId,
            student_id: this.studentId,
        };
        this.student.questionList(data).subscribe((successData) => {
            this.questionListSuccess(successData);
        }, (error) => {
            console.error(error, 'questionLus');
        });
    }
    questionListSuccess(successData) {
        if (successData.IsSuccess) {
            this.scratchQuestionData = successData.ResponseObject;
            console.log(this.scratchQuestionData, 'questionData');
            this.contentName = this.scratchQuestionData.name;
            this.linkdata = this.scratchQuestionData.links;
            this.contentType = this.scratchQuestionData.content_type == '2' ? 'Assignment' : 'Assessment';
            this.totalFeedBack = this.scratchQuestionData.overall_student_feedback;
            this.totalAns = this.scratchQuestionData.questions;
            this.timeTaken = this.totalAns.length != 0 ? this.totalAns[0]?.question_type_id != '24' ? this.totalAns[0]?.time_taken : this.totalAns[0]?.subQuestions[0]?.time_taken : 0;
            this.percentage = this.scratchQuestionData?.percentage;
            this.checkAutoGradeQns = this.scratchQuestionData.all_autograde == '1' ? this.scratchQuestionData?.auto_review : '0';
            console.log(this.checkAutoGradeQns, 'autogade');
            this.scratchQuestionData.questions.forEach((items) => {
                if (items.question_type_id != '24') {
                    items.PatchData = items.student_roughdata != '';
                }
                else {
                    items.subQuestions.forEach((sub) => {
                        sub.patchData = sub.student_roughdata != '';
                    });
                }
            });
            for (let i = 0; i < this.totalAns.length; i++) {
                if (this.totalAns[i].question_type_id == '40' || this.totalAns[i].question_type_id == '41') {
                    this.totalAns[i].given_answer[0].isSelected = this.parseVal(this.totalAns[i].given_answer[0].correctAnswer);
                }
                // else if (this.totalAns[i].question_type_id == '9') {
                //     setTimeout(() => {
                //         for (let j = 0; j < this.totalAns[i].given_answer.length; j++) {
                //             if (this.totalAns[i].given_answer[j].isSelected === '') {
                //                 if (document.getElementById(i + 'dropdown' + j)) {
                //                     document.getElementById(i + 'dropdown' + j).innerHTML = 'Select Answer';
                //                 }
                //             } else {
                //                 let val = this.totalAns[i].given_answer[j].isSelected;
                //                 if (document.getElementById(i + 'dropdown' + j)) {
                //                     document.getElementById(i + 'dropdown' + j).innerHTML = this.totalAns[i].given_answer[j].options[val].listOption;
                //                 }
                //             }
                //         }
                //     }, 1000);
                // }
            }
            if (this.totalAns.length != 0) {
                if (this.studentContentStatus == '1' || this.studentContentStatus == '2') {
                    let particularIndex = 0;
                    if (this.scratchQuestionData.laq_id != 0) {
                        for (let i = 0; i < this.totalAns.length; i++) {
                            const particularObject = this.totalAns[i].question_type_id != '24' ? this.totalAns[i] : this.totalAns[i].subQuestions[0];
                            if (this.scratchQuestionData.laq_id == particularObject.question_id) {
                                particularIndex = i;
                                if (this.serviceNeededOrNotFinalSubmit(this.totalAns[i])) {
                                    this.selectedQuestionList(this.totalAns[i], i, 'questionList');
                                    break;
                                }
                                else {
                                    const checkIndexValue = particularIndex;
                                    this.runLoop(checkIndexValue + 1, checkIndexValue);
                                }
                            }
                        }
                    }
                    else {
                        this.selectedQuestionList(this.totalAns[0], 0, 'questionList');
                    }
                }
                else {
                    this.selectedQuestionList(this.totalAns[0], 0, 'questionList');
                }
            }
        }
        else {
            this.toastr.info(successData.ResponseObject.message);
            if (successData.ResponseObject.content_type == '2') {
                this.router.navigate(['/studentlogin/assignment']);
            }
            else {
                this.router.navigate(['/studentlogin/assessment']);
            }
        }
        // this.clickEvent();
    }
    cfsGetMultiChoice(index, id, item) {
        if (item.question_type_id == '2') {
            if (this.totalAns[index].given_answer[id].isSelected == '') {
                this.totalAns[index].given_answer[id].isSelected = id.toString();
            }
            else {
                this.totalAns[index].given_answer[id].isSelected = '';
            }
        }
        else if (item.question_type_id == '1') {
            for (let i = 0; i < this.totalAns[index].given_answer.length; i++) {
                this.totalAns[index].given_answer[i].isSelected = '';
                if (i === id) {
                    if (this.totalAns[index].given_answer[id].isSelected == '') {
                        this.totalAns[index].given_answer[id].isSelected = id.toString();
                    }
                    else {
                        this.totalAns[index].given_answer[id].isSelected = '';
                    }
                }
            }
        }
        if (this.studentContentStatus == '1' || this.studentContentStatus == '2') {
            // this.guard = true;
        }
    }
    cfsGetChooseTable(item, index, row, column) {
        if (item.question_type_id == '5') {
            for (let i = 0; i < item.given_answer.length; i++) {
                if (i === row) {
                    item.given_answer[i].isSelected = column.toString();
                }
            }
        }
        else if (item.question_type_id == '7') {
            for (let i = 0; i < item.given_answer.length; i++) {
                let val = '';
                if (item.given_answer[i].isSelected !== '') {
                    const split = item.given_answer[i].isSelected.split(',');
                    let repeat = false;
                    for (let y = 0; y < split.length; y++) {
                        if (split[y] == column) {
                            split.splice(y, 1);
                            repeat = true;
                        }
                    }
                    if (repeat == true) {
                        val = split.join(',');
                    }
                    else {
                        val = item.given_answer[i].isSelected + ',' + column;
                    }
                }
                else {
                    val = column.toString();
                }
                if (i === row) {
                    item.given_answer[i].isSelected = val;
                }
            }
        }
        if (this.studentContentStatus == '1' || this.studentContentStatus == '2') {
            // this.guard = true;
        }
    }
    dropdownId(index, id) {
        return index + 'dropdown' + id;
    }
    patchCorrectMultiChoiceAnswer(data, index, secondIndex) {
        let patchValue = false;
        data.forEach((items) => {
            if (items.correctActive == secondIndex) {
                if (items.correctAnswer == index) {
                    patchValue = true;
                }
            }
        });
        return patchValue;
    }
    droppedCorrect(event, index) {
        const control = this.totalAns[index].given_answer;
        moveItemInArray(control, event.previousIndex, event.currentIndex);
    }
    cfsGetInput(event, index, id, item) {
        if (item.editor_type == 1) {
            item.given_answer[id].isSelected1 = event.target.value;
        }
        else {
            item.given_answer[id].isSelected1 = event.content;
        }
        if (this.studentContentStatus == '1' || this.studentContentStatus == '2') {
            // this.guard = true;
        }
    }
    cfsPassageMultiChoice(index, id, it, item) {
        // item.given_answer[it].isSelected = it;
        if (item.question_type_id == '2') {
            if (item.given_answer[it].isSelected == '') {
                item.given_answer[it].isSelected = it.toString();
            }
            else {
                item.given_answer[it].isSelected = '';
            }
        }
        else if (item.question_type_id == '1') {
            for (let i = 0; i < item.given_answer.length; i++) {
                if (i == it) {
                    if (item.given_answer[it].isSelected == '') {
                        item.given_answer[it].isSelected = it.toString();
                    }
                    else {
                        item.given_answer[it].isSelected = '';
                    }
                }
                else {
                    item.given_answer[i].isSelected = '';
                }
            }
        }
        if (this.studentContentStatus == '1' || this.studentContentStatus == '2') {
            // this.guard = true;
        }
    }
    cfsGetPassageEssay(event, index, list) {
        if (list.given_answer.length != 0) {
            list.given_answer[0].isSelected = event.content;
        }
    }
    cfsGetHighlight(event, index) {
        this.totalAns[index].given_answer[0].isSelected = event.content;
        if ((this.studentContentStatus == '1' || this.studentContentStatus == '2') && event.content != '') {
            // this.guard = true;
        }
    }
    cfsGetPara(event, index) {
        this.totalAns[index].given_answer[0].isSelected1 = event.content;
        if ((this.studentContentStatus == '1' || this.studentContentStatus == '2') && event.content != '') {
            // this.guard = true;
        }
    }
    cfsGetDropdown(event, index, id, ans, val) {
        this.totalAns[index].given_answer[id].isSelected = ans.toString();
        document.getElementById(index + 'dropdown' + id).innerHTML = val;
        if (this.studentContentStatus == '1' || this.studentContentStatus == '2') {
            // this.guard = true;
        }
        // this.clickEvent();
    }
    splitMultiChoose(val, index) {
        const value = val.split(',');
        for (let i = 0; i < value.length; i++) {
            if (parseInt(value[i]) === parseInt(index)) {
                return true;
            }
        }
    }
    tryAgainButton() {
        document.getElementById('yourTarget').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        });
        this.tryAgainButtonEnabled = true;
        this.startTimer();
    }
    otherlink() {
        this.modalRef = this.modalService.open(this.link);
    }
    backbutton() {
        // if (this.contentType == 'Assessment') {
        //     this.route.navigate(['/studentlogin/assessment']);
        // } else {
        //     this.route.navigate(['/studentlogin/assignment']);
        // }
    }
    checkDisableConditionForQns(item) {
        const particularObjectValue = item.question_type_id != '24' ? item : item.subQuestions[0];
        return (this.studentContentStatus != '1' && this.studentContentStatus != '2')
            || particularObjectValue.is_correct == 'false' || particularObjectValue.is_correct == 'true' || (particularObjectValue.is_correct == 'partially-completed' && !this.tryAgainButtonEnabled);
    }
    getElapsedTime() {
        let totalSeconds = this.timeTaken;
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
    getWorkSpaceValue(event, i) {
        if (event.content != '') {
            this.totalAns[i].student_roughdata = event.content;
        }
        if (this.studentContentStatus == '1' || this.studentContentStatus == '2') {
            // this.guard = true;
        }
    }
    getQueries(event, i, j, type) {
        if (type == 'pdf') {
            this.queriesIndex = j + 'id' + i;
        }
        else if (type == 'scratch') {
            this.queriesIndex = 'id' + i;
        }
        else {
            this.queriesIndex = j + 'id' + i;
        }
        this.queries = event.target.value;
    }
    submitQueries(i, j, type) {
        const studentAnswer = this.totalAns[i].question_id;
        const data = {
            platform: 'web',
            role_id: '5',
            user_id: this.studentId,
            school_id: this.schoolId,
            content_id: this.contentId,
            content_format: this.contentFormat,
            class_id: this.classId,
            student_id: this.studentId,
            answer_id: studentAnswer,
            suggestion_query: this.queries
        };
        this.student.submitQuery(data).subscribe((successData) => {
            this.submitQuerySuccess(successData, i, j);
        }, (error) => {
            console.error(error, 'submit_query');
        });
    }
    submitQuerySuccess(successData, id, index) {
        if (successData.IsSuccess) {
            console.log(this.totalAns[id], 'dsadas');
            this.totalAns[id].student_feedback = this.queries;
            this.queriesIndex = '';
            this.queries = '';
            this.toastr.success(successData.ResponseObject);
        }
    }
    checkQuestionId(item) {
        return item.question_type_id != '24' ? item : item.subQuestions[0];
    }
    numOfQuestionAnswered() {
        let questionAnswered = 0;
        if (this.studentContentStatus == '1' || this.studentContentStatus == '2') {
            this.totalAns.forEach((items) => {
                if (items.question_type_id != '24') {
                    if (items.is_correct == 'true' || items.is_correct == 'false') {
                        questionAnswered++;
                    }
                }
                else {
                    items.subQuestions.forEach((passageItems) => {
                        if (passageItems.is_correct == 'true' || passageItems.is_correct == 'false') {
                            questionAnswered++;
                        }
                    });
                }
            });
        }
        else {
            questionAnswered = this.totalAns.length;
        }
        return questionAnswered;
    }
    runLoop(startIndex, endIndex, secondTime) {
        for (let i = startIndex; i <= this.totalAns.length; i++) {
            const loopIndex = i;
            if (loopIndex == this.totalAns.length) {
                if (this.serviceNeededOrNotFinalSubmit(this.totalAns[loopIndex - 1])) {
                    this.selectedQuestionList(this.totalAns[loopIndex - 1], loopIndex, 'questionList');
                    break;
                }
                else {
                    this.runLoop(0, endIndex, 'second');
                }
            }
            else {
                if (secondTime == 'second' && endIndex == i) {
                    this.selectedQuestionList(this.totalAns[i], i, 'questionList');
                    break;
                }
                else {
                    if (this.serviceNeededOrNotFinalSubmit(this.totalAns[i])) {
                        this.selectedQuestionList(this.totalAns[i], i, 'questionList');
                        break;
                    }
                }
            }
        }
    }
    serviceNeededOrNot(data) {
        const particularObjectValue = data.question_type_id != '24' ? data : data.subQuestions[0];
        return (particularObjectValue.is_correct == '' ||
            // tslint:disable-next-line:max-line-length
            (particularObjectValue.is_correct == 'partially-completed' && (particularObjectValue.no_of_attempt < this.maximumAttempt) && this.tryAgainButtonEnabled));
    }
    serviceNeededOrNotFinalSubmit(data) {
        const particularObjectValue = data.question_type_id != '24' ? data : data.subQuestions[0];
        return (particularObjectValue.is_correct == '' || particularObjectValue.is_correct == 'partially-completed');
    }
    checkCorrectAnswerOrNot(data, questionNeedToCheck) {
        console.log(data, 'data');
        let correctAnswer;
        if (['1', '2'].indexOf(data.question_type_id) > -1) {
            correctAnswer = data.answer.every((items, index) => {
                return !(items.correctActive == '1' && data.given_answer[index].isSelected == '');
            });
            console.log(correctAnswer, 'correctAnswer');
        }
        else if (data.question_type_id == '5') {
            correctAnswer = data.given_answer.every((items, index) => {
                return items.isSelected == data.heading_option[index].correctActive.toString();
            });
        }
        else if (data.question_type_id == '7') {
            let pushArrayValue = [];
            data.given_answer.forEach((item) => {
                const splitedValue = item.isSelected != '' ? item.isSelected.split(',') : [];
                splitedValue.forEach((splitForEach) => {
                    pushArrayValue.push({
                        question: item.options,
                        isSelected: splitForEach
                    });
                });
            });
            const result = pushArrayValue.filter((o1) => {
                return !data.heading_option.some((o2) => {
                    return o1.question == o2.correctOption && o1.isSelected == o2.correctAnswer;
                });
            });
            correctAnswer = pushArrayValue.length == data.heading_option.length && result.length == 0;
        }
        else if (data.question_type_id == '9') {
            correctAnswer = data.given_answer.every((item) => {
                return !(item.isSelected == '' || item.options[item.isSelected].selected != 'true');
            });
        }
        else if (data.question_type_id == '10') {
            correctAnswer = data.given_answer.every((items) => {
                const enteredValue = items.options[0]?.value.trim().toLowerCase().split(' ').join('');
                return !(items.isSelected == '' || enteredValue != items.isSelected.trim().toLowerCase().split(' ').join(''));
            });
        }
        else if (data.question_type_id == '16') {
            correctAnswer = data.answer.every((items, index) => {
                return items.correctAnswer == data.given_answer[index].options;
            });
        }
        console.log(correctAnswer, 'correctAnswer');
        if (questionNeedToCheck != 'allQuestion') {
            const particularObjectValue = data.question_type_id != '24' ? data : data.subQuestions[0];
            if ((!correctAnswer && parseInt(particularObjectValue.no_of_attempt) != this.maximumAttempt)) {
                this.correctAnswer = false;
                this.tryAgainButtonEnabled = false;
                correctAnswer = 'partially-completed';
            }
            else if (correctAnswer) {
                this.correctAnswer = true;
            }
        }
        console.log(correctAnswer, 'correctAnswer');
        return correctAnswer.toString();
    }
    studentAnswerDetails(questionMove, loader) {
        this.commondata.showLoader(loader);
        const data = {
            platform: 'web',
            role_id: '5',
            user_id: this.studentId,
            student_content_id: this.studentContentId,
            question_id: this.totalAns[this.showQuestion]?.question_type_id != '24' ?
                this.totalAns[this.showQuestion]?.question_id : this.totalAns[this.showQuestion]?.subQuestions[0]?.question_id
        };
        this.student.studentAnswer(data).subscribe((successData) => {
            this.studentAnswerDetailsSuccess(successData, questionMove);
        }, (error) => {
            this.commondata.showLoader(false);
            console.log(error, 'studentAnswerDetails');
        });
    }
    studentAnswerDetailsSuccess(successData, questionMove) {
        console.log(successData, 'successData');
        this.commondata.showLoader(false);
        if (successData.IsSuccess) {
            if (successData.ResponseObject.length != 0) {
                this.percentage = successData.ResponseObject[0]?.percentage;
                if (this.totalAns[this.showQuestion]?.question_type_id == '9' && (successData.ResponseObject[0].is_correct == 'true' ||
                    successData.ResponseObject[0].is_correct == 'false')) {
                    this.cfsPatchDropdown();
                }
                const questionNumber = this.showQuestion;
                if (questionMove == 'next' && successData.ResponseObject[0].is_correct == 'true') {
                    console.log(this.showQuestion, 'first');
                    setTimeout(() => {
                        this.afterSaveFunction(questionNumber);
                    }, 3000);
                }
                else if (questionMove == 'nextWithNonAutoGraded') {
                    this.afterSaveFunction(questionNumber);
                }
            }
        }
    }
    afterSaveFunction(questionNumber) {
        if (this.totalAns[questionNumber + 1]) {
            this.selectedQuestionList(this.totalAns[questionNumber + 1], questionNumber + 1);
        }
        else {
            let checkWhetherOtherQuestionCorrectedOrNot = false;
            let indexValue = 0;
            this.totalAns.every((items, index) => {
                const particularObjectValue = items.question_type_id != '24' ? items : items.subQuestions[0];
                if (particularObjectValue.is_correct == '' || particularObjectValue.is_correct == 'partially-completed') {
                    checkWhetherOtherQuestionCorrectedOrNot = true;
                    indexValue = index;
                    return false;
                }
                return true;
            });
            if (checkWhetherOtherQuestionCorrectedOrNot) {
                // const scroll = document.getElementById('questionNo' + indexValue);
                // console.log(scroll, 'scroll');
                // scroll.scroll(0, 0);
                // // document.getElementById("questionNo" + indexValue).scrollIntoView({
                // //     behavior: "smooth",
                // //     block: 'start',
                // //     inline: 'start'
                // // });
                // // this.scrollContent.nativeElement.scrollTo(
                // //     {
                // //         left: 0,
                // //         behavior: 'smooth'
                // //     });
                this.selectedQuestionList(this.totalAns[indexValue], indexValue);
            }
            else {
            }
        }
    }
    async checkLastQuestion(currentIndex, lastQuestion) {
        const particularObjectValue = this.totalAns[this.showQuestion].question_type_id != '24' ? this.totalAns[this.showQuestion] : this.totalAns[this.showQuestion].subQuestions[0];
        if (this.serviceNeededOrNot(particularObjectValue)) {
            const answerValidation = this.checkCorrectAnswerOrNot(particularObjectValue, 'singleQuestion');
            if (answerValidation == 'true' || answerValidation == 'false') {
                let checkAllQnsCorrectedOrNot = true;
                this.totalAns.every((items, index) => {
                    const particularObjectLoopValue = items.question_type_id != '24' ? items : items.subQuestions[0];
                    console.log(currentIndex != index, 'checkIndexValue');
                    if ((particularObjectLoopValue.is_correct == '' || particularObjectLoopValue.is_correct == 'partially-completed') && (currentIndex != index)) {
                        checkAllQnsCorrectedOrNot = false;
                        return false;
                    }
                    return true;
                });
                await setTimeout(() => {
                    console.log(checkAllQnsCorrectedOrNot, 'checkAllQnsCorrectedOrNot');
                    checkAllQnsCorrectedOrNot ? this.submitPopup() : this.saveAnswerForFewType(this.showQuestion, 'nextWithAutoGrade');
                }, 0);
            }
            else {
                this.saveAnswerForFewType(this.showQuestion, 'nextWithAutoGrade');
            }
        }
        else if (this.checkAutoGradeQns == '0' || this.checkAutoGradeQns == '1') {
            await this.updateForNonAutoGradedQns(particularObjectValue);
        }
        else {
            if (lastQuestion) {
                this.totalAns.every((items, index) => {
                    const particularObjectValue = items.question_type_id != '24' ? items : items.subQuestions[0];
                    if (particularObjectValue.is_correct == '' || particularObjectValue.is_correct == 'partially-completed') {
                        this.selectedQuestionList(this.totalAns[index], index);
                        return false;
                    }
                    return true;
                });
            }
            else {
                this.selectedQuestionList(this.totalAns[currentIndex + 1], currentIndex + 1);
            }
        }
    }
    submitPopup() {
        this.modalRef = this.modalService.open(this.submitAlert);
    }
    async updateForNonAutoGradedQns(data) {
        let answerEntered = false;
        console.log(data, 'data');
        if (data.is_correct == '') {
            if (data.question_type_id == '1' || data.question_type_id == '2' || data.question_type_id == '5' || data.question_type_id == '7'
                || data.question_type_id == '9') {
                answerEntered = !data.given_answer.every((items) => {
                    return items.isSelected == '';
                });
            }
            else if (data.question_type_id == '10') {
                data.given_answer.every((items) => {
                    if (items.isSelected1) {
                        if (items.isSelected1.trim() != '') {
                            answerEntered = true;
                            return false;
                        }
                    }
                    return true;
                });
            }
            else if (data.question_type_id == '16') {
                answerEntered = data.answer_shuffled;
            }
            else if (data.question_type_id == '20') {
                answerEntered = !data.given_answer.every((items) => {
                    return items.isSelected1 == '';
                });
            }
            else if (data.question_type_id == '40' || data.question_type_id == '41') {
                answerEntered = data.answer_valueEmitted;
            }
            console.log(answerEntered, 'answerEntered');
            data.is_correct = answerEntered ? 'manual' : '';
        }
        let checkAllQnsCorrectedOrNot = true;
        this.totalAns.every((items) => {
            const particularObjectLoopValue = items.question_type_id != '24' ? items : items.subQuestions[0];
            if (particularObjectLoopValue.is_correct == '') {
                checkAllQnsCorrectedOrNot = false;
                return false;
            }
            return true;
        });
        await setTimeout(() => {
            console.log(checkAllQnsCorrectedOrNot, 'checkAllQnsCorrectedOrNot');
            checkAllQnsCorrectedOrNot ? this.submitPopup() : this.saveAnswerForFewType(this.showQuestion, 'nextWithNonAutoGraded');
        }, 500);
    }
    checkWhetherSaveIsNeeded(data, index, calledFrom) {
        if (this.needSaveForThisQns) {
            this.saveAnswerForFewType(this.selectedIndexForSameQns, 'qnsNumber', index);
        }
        else {
            this.needSaveForThisQns = this.totalAns[this.showQuestion]?.question_type_id == 10 || this.totalAns[this.showQuestion].question_type_id == '20' ||
                this.totalAns[this.showQuestion].question_type_id == '40' || this.totalAns[this.showQuestion].question_type_id == '41' ||
                (this.totalAns[this.showQuestion].question_type_id == '24' && this.totalAns[this.showQuestion].subQuestions[0]?.question_type_id == '10');
            this.selectedIndexForSameQns = this.needSaveForThisQns ? this.showQuestion : 0;
            this.selectedQuestionList(data, index, calledFrom);
        }
    }
    saveAnswerForFewType(questionNumber, calledFrom = '', index = 0) {
        if (this.totalAns[questionNumber].question_type_id == '40' || this.totalAns[questionNumber].question_type_id == '41') {
            console.log(this.totalAns[questionNumber].given_answer, 'given_anser');
            console.log(this.totalAns[questionNumber].given_answer[0].isSelected, 'isSelected');
            if (this.totalAns[questionNumber].given_answer[0].isSelected != '' && this.totalAns[questionNumber].given_answer[0].isSelected && (this.graphEdited || calledFrom == 'save')) {
                this.saveGraph(this.totalAns[questionNumber].given_answer[0].isSelected, this.totalAns[questionNumber].editor_key, this.totalAns[questionNumber]);
            }
            this.totalAns[questionNumber].given_answer[0].isSelected = '';
        }
        else if (this.totalAns[questionNumber].question_type_id == '20') {
            if (this.totalAns[questionNumber].given_answer[0].isSelected1) {
                this.totalAns[questionNumber].given_answer[0].isSelected = this.totalAns[questionNumber].given_answer[0].isSelected1;
            }
        }
        else if (this.totalAns[questionNumber].question_type_id == '10') {
            for (let j = 0; j < this.totalAns[questionNumber].given_answer.length; j++) {
                if (this.totalAns[questionNumber].given_answer[j].isSelected1) {
                    this.totalAns[questionNumber].given_answer[j].isSelected = this.totalAns[questionNumber].given_answer[j].isSelected1;
                }
                else {
                    this.totalAns[questionNumber].given_answer[j].isSelected = '';
                }
            }
        }
        else if (this.totalAns[questionNumber].question_type_id == '24') {
            for (let j = 0; j < this.totalAns[questionNumber].subQuestions.length; j++) {
                if (this.totalAns[questionNumber].subQuestions[j].question_type_id == '10') {
                    for (let k = 0; k < this.totalAns[questionNumber].subQuestions[j].given_answer.length; k++) {
                        if (this.totalAns[questionNumber].subQuestions[j].given_answer[k].isSelected1) {
                            this.totalAns[questionNumber].subQuestions[j].given_answer[k].isSelected = this.totalAns[questionNumber].subQuestions[j].given_answer[k].isSelected1;
                        }
                        else {
                            this.totalAns[questionNumber].subQuestions[j].given_answer[k].isSelected = '';
                        }
                    }
                }
            }
        }
        if (calledFrom == 'qnsNumber') {
            this.needSaveForThisQns = this.totalAns[index]?.question_type_id == 10 || this.totalAns[index].question_type_id == '20' ||
                this.totalAns[index].question_type_id == '40' || this.totalAns[index].question_type_id == '41' ||
                (this.totalAns[index].question_type_id == '24' && this.totalAns[index].subQuestions[0]?.question_type_id == '10');
            this.selectedIndexForSameQns = this.needSaveForThisQns ? index : 0;
            this.selectedQuestionList(this.totalAns[index], index);
        }
        else if (calledFrom == 'nextWithAutoGrade') {
            const particularObjectValue = this.totalAns[this.showQuestion].question_type_id != '24' ? this.totalAns[this.showQuestion] : this.totalAns[this.showQuestion].subQuestions[0];
            this.pauseTimer();
            particularObjectValue.no_of_attempt = parseInt(particularObjectValue.no_of_attempt) + 1;
            particularObjectValue.is_correct = this.checkCorrectAnswerOrNot(particularObjectValue, 'singleQuestion');
            particularObjectValue.time_taken = this.timeTaken;
            this.saveAnswer('2', 'noExit', true, 'next');
            // this.selectedQuestionList(this.totalAns[questionNumber + 1], questionNumber + 1);
        }
        else if (calledFrom == 'nextWithNonAutoGraded') {
            const particularObjectValue = this.totalAns[this.showQuestion].question_type_id != '24' ? this.totalAns[this.showQuestion] : this.totalAns[this.showQuestion].subQuestions[0];
            this.pauseTimer();
            particularObjectValue.time_taken = this.timeTaken;
            this.saveAnswer('2', 'noExit', true, 'nextWithNonAutoGraded');
        }
    }
    nextQuestion() {
        // console.log(lastQuestion, 'lastQuestion');
        if (this.checkAutoGradeQns == '2' && this.serviceNeededOrNot(this.totalAns[this.showQuestion])) {
            document.getElementById('yourTarget').scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'start'
            });
            this.saveAnswer('2', 'noExit', true, 'next');
        }
        else {
            const questionNumber = this.showQuestion;
            console.log(this.showQuestion, 'second');
            if (this.totalAns[questionNumber + 1]) {
                if (this.totalAns[questionNumber]?.question_type_id == 10 || this.totalAns[questionNumber].question_type_id == '20' ||
                    this.totalAns[questionNumber].question_type_id == '40' || this.totalAns[questionNumber].question_type_id == '41' ||
                    (this.totalAns[questionNumber].question_type_id == '24' && this.totalAns[questionNumber].subQuestions[0]?.question_type_id == '10')) {
                    this.saveAnswerForFewType(questionNumber);
                    console.log(this.totalAns[questionNumber], 'this.totalAns[questionNumber]');
                }
                else {
                    this.selectedQuestionList(this.totalAns[questionNumber + 1], questionNumber + 1);
                }
            }
            else {
                let checkWhetherOtherQuestionCorrectedOrNot = true;
                let particularIndex = 0;
                this.totalAns.every((items, index) => {
                    particularIndex = index;
                    const particularObjectValue = items.question_type_id != '24' ? items : items.subQuestions[0];
                    if (particularObjectValue.is_correct == '' || items.is_correct == 'partially-completed') {
                        checkWhetherOtherQuestionCorrectedOrNot = false;
                        return false;
                    }
                    return true;
                });
                if (!checkWhetherOtherQuestionCorrectedOrNot) {
                    this.selectedQuestionList(this.totalAns[particularIndex], particularIndex);
                }
                else {
                    // this.guard = false;
                    // this.route.navigate(['/studentlogin/' + this.contentType.toLowerCase()]);
                }
            }
        }
    }
    saveGraph(event, val, id) {
        this.graphBoardValue = event;
        const objects = {};
        for (const el in this.graphBoardValue.objects) {
            const inherit = [];
            this.graphBoardValue.objects[el].inherits.forEach((item) => {
                inherit.push({ name: item.name });
            });
            objects[el] = {
                elType: this.graphBoardValue.objects[el].elType,
                coords: this.graphBoardValue.objects[el].coords,
                name: this.graphBoardValue.objects[el].name,
                inherits: inherit,
                parents: this.graphBoardValue.objects[el].parents,
                splinePoints: this.graphBoardValue.objects[el].splinePoints,
                quadraticform: this.graphBoardValue.objects[el].quadraticform,
            };
        }
        const graph = {
            attr: this.graphBoardValue.attr,
            objects
        };
        const data = {
            platform: 'web',
            role_id: '5',
            user_id: this.studentId,
            school_id: this.schoolId,
            content_id: this.contentId,
            content_format: this.contentFormat,
            class_id: this.classId,
            student_id: this.studentId,
            question_id: id.question_id,
            student_content_id: this.studentContentId,
            answer: [{ correctAnswer: stringify(graph), correctActive: '' }],
            editor_answer: val,
            type: '1'
        };
        this.creator.graphAnswer(data).subscribe((successData) => {
            this.saveGraphSuccess(successData, '2');
        }, (error) => {
            this.saveGraphFailure(error);
        });
    }
    saveGraphSuccess(successData, id, data, JSONObject) {
        if (id == '1') {
            this.closeGraph(this.graphId, this.graphIndex);
        }
        if (data) {
            data.given_answer = JSONObject.answer;
            this.graphEdited = false;
            console.log(this.graphEdited, 'graphEdited');
        }
    }
    saveGraphFailure(error) {
        console.log(error);
    }
    closeGraph(id, index) {
        this.totalAns[id].section[index].student_roughdata = this.totalAns[id].section[index].student_roughdata1;
        this.modalRef1.close();
    }
    async saveAnswer(id, route, loader, questionMove) {
        for (let i = 0; i < this.totalAns.length; i++) {
            {
                for (let i = 0; i < this.totalAns.length; i++) {
                    if (this.totalAns[i].question_type_id == '40' || this.totalAns[i].question_type_id == '41') {
                        this.saveAnswerForFewType(i, 'save');
                    }
                    else if (questionMove == 'same' || id == '4') {
                        this.saveAnswerForFewType(i, 'save');
                    }
                    if (this.checkAutoGradeQns != '0') {
                        const questionNumber = this.showQuestion;
                        if (id == '4') {
                            const particularObjectValue = this.totalAns[i].question_type_id != '24' ? this.totalAns[i] : this.totalAns[i].subQuestions[0];
                            if (particularObjectValue.is_correct == '' || particularObjectValue.is_correct == 'partially-completed' || particularObjectValue.is_correct == 'manual') {
                                this.totalAns[i].question_type_id != '55' ? this.pauseTimer() : '';
                                particularObjectValue.no_of_attempt = parseInt(particularObjectValue.no_of_attempt) + 1;
                                particularObjectValue.is_correct = this.checkCorrectAnswerOrNot(particularObjectValue, 'allQuestion');
                                particularObjectValue.time_taken = questionNumber == i ? this.timeTaken : particularObjectValue.time_taken;
                            }
                        }
                    }
                }
            }
        }
        let checkAllQuestionCorrectedOrNot = false;
        this.totalAns.every((items) => {
            const particularObjectValue = items.question_type_id != '24' ? items : items.subQuestions[0];
            if (particularObjectValue.is_correct == '' || particularObjectValue.is_correct == 'partially-completed') {
                checkAllQuestionCorrectedOrNot = true;
                return false;
            }
            return true;
        });
        this.totalAns.forEach((items) => {
            if (items.question_type_id != '55') {
                const particularObjectValue = items.question_type_id != '24' ? items : items.subQuestions[0];
                particularObjectValue.earned_points = particularObjectValue.is_correct == 'true' ? parseInt(particularObjectValue.points) : 0;
            }
            else if (items.question_type_id == '55') {
                items.time_taken = this.timeTaken;
            }
        });
        if (this.totalFeedBack) {
        }
        else {
            this.totalFeedBack = '';
        }
        const data = {
            platform: 'web',
            role_id: '5',
            user_id: this.studentId,
            student_id: this.studentId,
            content_id: this.contentId,
            content_format: this.contentFormat,
            student_content_id: this.studentContentId,
            class_id: this.classId,
            overall_student_feedback: this.totalFeedBack,
            questions: this.totalAns,
            all_autograde: this.isSingleQnsWithFeedbackType && this.scratchQuestionData.auto_review != '0' ? '1' :
                this.scratchQuestionData.all_autograde,
            laq_id: this.totalAns[this.showQuestion]?.question_type_id != '24' ?
                this.totalAns[this.showQuestion]?.question_id : this.totalAns[this.showQuestion]?.subQuestions[0]?.question_id,
            status: id == '4' ? '4' : !checkAllQuestionCorrectedOrNot ? '4' : id,
        };
        if (loader) {
            await this.student.submitAnswer(data).subscribe((successData) => {
                this.submitAnswerSuccess(successData, data, route, loader, questionMove);
            }, (error) => {
                // this.commondata.showLoader(false);
                this.submitAnswerFailure(error);
            });
        }
    }
    submitAnswerSuccess(successData, data, route, loader, questionMove) {
        if (successData.IsSuccess) {
            if (data.status != '4') {
                this.studentAnswerDetails(questionMove, loader);
            }
            if (data.status == '4') {
                this.close();
                this.toastr.success(this.contentType + ' ' + 'Submitted');
            }
            else if (loader == true) {
                this.toastr.success(this.contentType + ' ' + 'Saved');
            }
            if (route == 'exit') {
                const formURLForExit = this.env.webhost + '/' + '#' + '/student-scratch/' + this.auth.getAccessToken() + '/' + this.studentId
                    + '/' + this.schoolId + '/' + this.contentId + '/' + this.contentFormat + '/' + this.classId + '/' + this.studentContentId + '/' + this.classContentId + '/' + this.studentContentStatus + '/' + 'list';
                console.log(formURLForExit, 'url');
                window.location.href = formURLForExit;
                // this.existScratchPage();
                // this.guard = false;
                // this.route.navigate(['/studentlogin/' + this.contentType.toLowerCase()]);
            }
        }
    }
    submitAnswerFailure(error) {
        console.log(error);
    }
    cfsPatchDropdown() {
        setTimeout(() => {
            for (let i = 0; i < this.totalAns[this.showQuestion].answer.length; i++) {
                for (let j = 0; j < this.totalAns[this.showQuestion].answer[i].options.length; j++) {
                    if (this.totalAns[this.showQuestion].answer[i].options[j].selected == 'true') {
                        document.getElementById('dropdown' + i).innerHTML = this.totalAns[this.showQuestion].answer[i].options[j].listOption;
                    }
                }
            }
        }, 500);
    }
    selectedQuestionList(data, index, calledFrom) {
        console.log(data, 'datas');
        this.pauseTimer();
        this.timeTaken = 0;
        this.correctAnswer = true;
        this.tryAgainButtonEnabled = false;
        this.showQuestion = index;
        const particularObjectValue = data.question_type_id != '24' ? data : data.subQuestions[0];
        if (this.studentContentStatus == '1' || this.studentContentStatus == '2') {
            if (particularObjectValue.time_taken == '0') {
                this.timeTaken = 0;
                this.startTimer();
            }
            else {
                this.timeTaken = particularObjectValue.time_taken;
                this.checkAutoGradeQns != '2' ? this.startTimer() : '';
                if (particularObjectValue.question_type_id == '9' && particularObjectValue.is_correct != 'partially-completed') {
                    this.cfsPatchDropdown();
                }
            }
        }
        else {
            this.timeTaken = particularObjectValue.time_taken != '0' && particularObjectValue.time_taken != '' && particularObjectValue.time_taken
                ? particularObjectValue.time_taken : 0;
        }
        this.cdr.detectChanges();
        if (calledFrom != 'questionList') {
            document.getElementById('yourTarget').scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'start'
            });
        }
        console.log(this.showQuestion, 'showQuestion');
    }
    startTimer() {
        this.pauseTimer();
        this.interval = setInterval(() => {
            this.timeTaken++;
        }, 1000);
    }
    pauseTimer() {
        clearInterval(this.interval);
    }
    get isSingleQnsWithFeedbackType() {
        return this.totalAns.length === 1 && this.totalAns.some(qns => qns.question_type_id === '55');
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
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
    wordCount(item) {
        const value = this.getEssayAnswer(item);
        return value ? value.trim().split(/\s+/).length : 0;
    }
    getEssayAnswer(item) {
        if (this.selectedFeedBackIndex != 0 && this.selectedFeedBackIndex !== '') {
            return this.selectedPreviousStudentAnswer?.student_answer ?? '';
        }
        return item.given_answer[0].isSelected;
    }
    onEssayAnswerChange(item, value) {
        if (this.selectedFeedBackIndex != 0 && this.selectedFeedBackIndex !== '') {
            if (this.selectedPreviousStudentAnswer) {
                this.selectedPreviousStudentAnswer.student_answer = value;
            }
        }
        else {
            item.given_answer[0].isSelected = value;
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
    checkForApiTypeQns() {
        if (this.isSingleQnsWithFeedbackType && this.scratchQuestionData?.auto_review != '0') {
            if (this.totalAns[0].given_answer[0]?.isSelected.trim().split(/\s+/).length >= this.minimumWordValidation || this.minimumWordValidation == 0) {
                this.buttonClicked = 'submit';
                this.modalRef = this.modalService.open(this.submitAlert);
            }
            else {
                this.toastr.error('Answer should be at least ' + this.minimumWordValidation + ' words.');
            }
        }
        else {
            this.buttonClicked = 'submit';
            this.modalRef = this.modalService.open(this.submitAlert);
        }
    }
    getFeedbackValue(data, calledType = '') {
        if (data.given_answer[0]?.isSelected.trimStart() != '') {
            if ((data.given_answer[0]?.isSelected.trim().split(/\s+/).length >= this.minimumWordValidation) || this.minimumWordValidation == 0) {
                calledType != '' ? this.modalRef.close() : '';
                this.popUpMessage = calledType == '' ? 'Nice work. Please wait while we provide a feedback' :
                    'Please wait while we provide a final feedback and score.';
                this.modalRef = this.modalService.open(this.feedbackStatus, { backdrop: 'static' });
                this.pauseTimer();
                this.convertedText = '';
                const payload = {
                    platform: 'web',
                    role_id: '5',
                    user_id: this.studentId,
                    school_id: this.schoolId,
                    student_id: this.studentId,
                    student_answer: data.given_answer[0]?.isSelected,
                    question_id: data.question_id,
                    question: this.stripHtmlTags(data.question),
                    student_content_id: this.studentContentId,
                    time_taken: this.timeTaken,
                    finalSubmit: calledType == 'saveAndExit' ? '1' : '0'
                };
                this.student.getOpenAiFeedback(payload).subscribe((successData) => {
                    console.log(successData, 'successData');
                    if (successData.IsSuccess) {
                        if (calledType == 'saveAndExit') {
                            this.totalAns[0].earned_points = successData.ResponseObject[0]?.student_score;
                            this.totalAns[0].time_taken = this.timeTaken;
                            this.buttonClicked = '';
                            this.saveAnswer('4', 'exit', false);
                        }
                        else {
                            this.selectedPreviousStudentAnswer = successData.ResponseObject[0];
                            this.convertedText = this.convertMarkdownToHtml(successData.ResponseObject[0]?.feedback);
                            this.feedbackServiceCalled = true;
                            this.toastr.success('New Feedback updated');
                            this.getFeedbackCount(data);
                            // calledType == '' ? this.modalRef.close() : this.commondata.showLoader(false);
                            this.modalRef.close();
                        }
                    }
                    else {
                        this.convertedText = '';
                        // calledType == '' ? this.modalRef.close() : this.commondata.showLoader(false);
                        this.modalRef.close();
                        this.toastr.error(successData.ErrorObject);
                    }
                }, (error) => {
                    console.error(error, 'error_feedbackValue');
                    this.convertedText = '';
                    // calledType == '' ? this.modalRef.close() : this.commondata.showLoader(false);
                    this.modalRef.close();
                    this.toastr.error('Server Error, Please Contact admin');
                });
            }
            else {
                this.toastr.error('Answer should be at least ' + this.minimumWordValidation + ' words.');
            }
        }
        else {
            this.toastr.error('Answer Should not be empty');
        }
    }
    feedbackSelected(value) {
        if (value != '' && value != 'current') {
            const selecteValue = value;
            this.selectedFeedBackIndex = this.previousFeedBack.length - selecteValue.index;
            this.selectedPreviousStudentAnswer = selecteValue;
            this.convertedText = this.convertMarkdownToHtml(selecteValue.feedback);
            this.pauseTimer();
        }
        else if (value == 'current') {
            this.selectedFeedBackIndex = '';
            this.convertedText = '';
            this.startTimer();
            document.getElementById('yourTarget').scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'start'
            });
        }
        this.feedbackServiceCalled = false;
    }
    getFeedbackCount(data, calledFrom = '') {
        const payload = {
            platform: 'web',
            role_id: '5',
            user_id: this.studentId,
            school_id: this.schoolId,
            student_id: this.studentId,
            question_id: data.question_id,
            student_content_id: this.studentContentId,
        };
        this.student.getOpenAiFeedbackCount(payload).subscribe((successData) => {
            this.getFeedbackCountSuccess(successData, calledFrom);
        }, (error) => console.error(error, 'error_APICount'));
    }
    getFeedbackCountSuccess(successData, calledFrom) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            successData.ResponseObject.forEach((items, index) => items.index = index);
            this.previousFeedBack = successData.ResponseObject;
            this.selectedFeedBackIndex = calledFrom != '' ? '' : successData.ResponseObject.length;
        }
    }
    stripHtmlTags(input) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = input;
        return tempDiv.textContent || tempDiv.innerText || '';
    }
    showFeedback() {
        this.modalRef = this.modalService.open(this.feedback, { size: 'xl' });
    }
    cfsgetGraphValue(event, index) {
        this.totalAns[index].given_answer[0].isSelected = event;
        this.graphEdited = true;
    }
    cfsGetGraghEditor(event, index) {
        this.totalAns[index].editor_key = event.content;
    }
    onScroll() {
        const left = this.scrollContent.nativeElement.scrollLeft;
        const sWidth = this.scrollContent.nativeElement.scrollWidth;
        const oWidth = this.scrollContent.nativeElement.offsetWidth;
        // Left arrow
        if (left === 0) {
            this.hideArrow(this.leftArrow);
        }
        else {
            this.showArrow(this.leftArrow);
        }
        // Right arrow
        const total = oWidth + left;
        if (total >= sWidth) {
            this.hideArrow(this.rightArrow);
        }
        else {
            this.showArrow(this.rightArrow);
        }
    }
    onClickScrollRight() {
        this.scrollTo('+', this.distance);
    }
    onClickScrollLeft() {
        this.scrollTo('-', this.distance);
    }
    // Helpers
    showArrow(arrow) {
        arrow.nativeElement.classList.remove('hide');
    }
    hideArrow(arrow) {
        arrow.nativeElement.className += ' hide';
    }
    scrollTo(operator, distance) {
        const operators = {
            '+': (a, b) => {
                return a + b;
            },
            '-': (a, b) => {
                return a - b;
            },
        };
        const op = operators[operator];
        console.log(this.scrollContent, 'content');
        // this.scrollContent = document.getElementById('scrollContent');
        this.scrollContent.nativeElement.scrollTo({
            left: op(this.scrollContent.nativeElement.scrollLeft, distance),
            behavior: 'smooth'
        });
    }
    parseVal(val) {
        if (val != '' && val != null) {
            const graph = parse(val);
            return graph;
        }
        else {
            const graph = false;
            return graph;
        }
    }
    close() {
        this.modalRef?.close();
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
    static { this.ɵfac = function StudentScratchComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentScratchComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.CreatorService), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i4.FormBuilder), i0.ɵɵdirectiveInject(i5.DomSanitizer), i0.ɵɵdirectiveInject(i6.ConfigurationService), i0.ɵɵdirectiveInject(i7.NgbModal), i0.ɵɵdirectiveInject(i8.ToastrService), i0.ɵɵdirectiveInject(i9.StudentService), i0.ɵɵdirectiveInject(i10.EnvironmentService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i11.CommonDataService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i12.CommonService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentScratchComponent, selectors: [["app-student-scratch"]], viewQuery: function StudentScratchComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
            i0.ɵɵviewQuery(_c4, 5);
            i0.ɵɵviewQuery(_c5, 5);
            i0.ɵɵviewQuery(_c6, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.submitAlert = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.link = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.scrollContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.rightArrow = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.leftArrow = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.feedback = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.feedbackStatus = _t.first);
        } }, decls: 33, vars: 14, consts: [["submitAlert", ""], ["feedback", ""], ["content", ""], ["feedbackStatus", ""], ["scrollContent", ""], ["leftArrow", ""], ["rightArrow", ""], ["accordion", "ngbAccordionItem"], ["uparrow", ""], ["id", "yourTarget", 1, "container-fluid", "py-3"], [1, "row"], [1, "col-12"], [1, "card"], [1, "row", "align-items-center"], [1, "row", "pr-3", "my-1", "d-flex", "align-items-center"], [1, "col-md-6", "mt-2"], [1, "contenttext", "mb-0"], [1, "col-md-6", "px-0", "pdf-assign-btn", "d-flex", "align-items-center", "justify-content-end"], ["class", "row my-0 mx-2 justify-content-center", 4, "ngIf"], [1, "row", "mx-2"], ["title", "Teacher Feedback", "class", "fa fa-commenting-o icon color-primary", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["style", "border: 1px solid #8F008A; border-radius: 4px; padding: 0; width: 34px; height: 34px; margin-right: 12px", "alt", "Resource", "src", "assets/images/mob-side-icon/books.png", "title", "Resources", 3, "click", 4, "ngIf"], ["title", "Save & Exit", "class", "fa fa-sign-out color-primary icon", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["title", "Save", "class", "fa fa-floppy-o color-primary icon", "aria-hidden", "true", 3, "click", 4, "ngIf"], [3, "class", "click", 4, "ngIf"], ["class", "col-12 mr-0 pr-0 pb-2", 4, "ngIf"], ["class", "col-12 mb-0 pl-0", 4, "ngIf"], ["class", "row view-question", 4, "ngFor", "ngForOf"], [1, "row", "my-0", "mx-2", "justify-content-center"], [1, "w-auto", "text-center"], ["style", "font-size: 24px", "class", "mb-0", 4, "ngIf"], [1, "color-primary", "mb-0", 2, "font-size", "12px"], [1, "w-auto", "align-content-center", "mx-2"], [1, "mb-0", "font-weight-bold"], [1, "mb-0", 2, "font-size", "24px"], ["title", "Teacher Feedback", "aria-hidden", "true", 1, "fa", "fa-commenting-o", "icon", "color-primary", 3, "click"], ["alt", "Resource", "src", "assets/images/mob-side-icon/books.png", "title", "Resources", 2, "border", "1px solid #8F008A", "border-radius", "4px", "padding", "0", "width", "34px", "height", "34px", "margin-right", "12px", 3, "click"], ["title", "Save & Exit", "aria-hidden", "true", 1, "fa", "fa-sign-out", "color-primary", "icon", 3, "click"], ["title", "Save", "aria-hidden", "true", 1, "fa", "fa-floppy-o", "color-primary", "icon", 3, "click"], [3, "click"], [1, "col-12", "mr-0", "pr-0", "pb-2"], [1, "scoll-component"], [1, "total-items"], [1, "scoll-container"], ["id", "scrollContent", 1, "scroll-content", 3, "scroll"], [1, "arrow", "left-arrow", "arrowStyle", 3, "click"], ["class", "scroll-items", 3, "id", 4, "ngFor", "ngForOf"], [1, "arrow", "right-arrow", "arrowStyle", 3, "click"], [1, "scroll-items", 3, "id"], [1, "round-question", "pl-2", "pr-2", "pt-1", "pb-1", "ml-3", "my-2", 3, "click", "ngClass"], [1, "col-12", "mb-0", "pl-0"], [1, "card", "ml-3", "mr-0", 2, "overflow-y", "auto", "max-height", "25vh", "border-bottom", "3px solid #e6baea !important", "border-right", "3px solid #e6baea !important"], [1, "card-body", "py-3", "px-4"], [1, "mb-3", "font-weight-bold"], [1, "ml-2"], [3, "innerHTML"], [1, "row", "view-question"], [3, "class", 4, "ngIf"], ["class", "col-3", 4, "ngIf"], [1, "container-fluid"], [4, "ngIf"], [1, "card", "p-5"], [1, "card-body"], ["class", "col-12 col-md-12", 4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], [1, "col-md-12"], ["class", "mt-4", 3, "ngClass", 4, "ngIf"], ["class", "mt-4 px-3 table-flexible", 3, "ngClass", 4, "ngIf"], ["class", "mt-4 px-3 mb-3", 4, "ngIf"], ["class", "mt-4 row ml-4 pl-3", 4, "ngIf"], ["class", "mt-4 mb-4", 4, "ngIf"], ["class", "row mt-4 d-flex justify-content-end", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "card", "px-3", "pt-3", "pb-4"], [1, "col-12", "px-3"], [3, "emitEditorValue", "editorPatchValue", "height", "readonly", "showDropBtn", "showInputBtn"], ["class", "card p-3", 4, "ngIf"], [1, "col-12", "col-md-12"], [2, "width", "4%"], [1, "btn-primary", "px-2", "py-1"], [2, "width", "96%"], ["class", "inner", 4, "ngIf"], [1, "inner"], [1, "mb-0", "overflow-auto", 3, "innerHTML"], ["ngbAccordion", "", 1, "question_type"], [3, "ngbAccordionItem", "collapsed"], ["ngbAccordionHeader", ""], ["ngbAccordionToggle", "", 1, "btn", "btn-link", "d-flex", "align-items-center", "justify-content-between", "p-2", "w-100"], [1, "m-0", 2, "font-size", "16px", 3, "innerHTML"], [1, "d-flex", "align-items-center", "justify-content-between"], ["aria-hidden", "true", "class", "fa fa-caret-down", 4, "ngIf", "ngIfElse"], ["ngbAccordionCollapse", ""], ["ngbAccordionBody", ""], ["aria-hidden", "true", 1, "fa", "fa-caret-down"], ["aria-hidden", "true", 1, "fa", "fa-caret-up"], [1, "mx-3", "custom-card", "question-page1", 2, "overflow-x", "scroll", "max-height", "60vh"], [1, "innerhtml-margin-clear", 3, "innerHTML"], [1, "btn-primary", "w-auto", "h-20", "px-2", "py-1", 2, "width", "5%"], ["class", "mx-3 question-page1 px-3 py-2", "style", "overflow-x: scroll;max-height: 60vh; border: 2px solid #e6baea !important;border-radius: 4px;", 4, "ngIf"], [1, "mx-3", "question-page1", "px-3", "py-2", 2, "overflow-x", "scroll", "max-height", "60vh", "border", "2px solid #e6baea !important", "border-radius", "4px"], [1, "mt-4", 3, "ngClass"], [1, "col-md-12", "mb-2"], ["class", "dropdown-list overflow-auto col-md-5 mb-3 mx-3 p-2", "style", "max-height: 20rem", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "col-md-12 mt-4 mb-2", 4, "ngIf"], [1, "dropdown-list", "overflow-auto", "col-md-5", "mb-3", "mx-3", "p-2", 2, "max-height", "20rem", 3, "click", "ngClass"], [1, "remove-margin-bottom", 3, "innerHTML"], [1, "col-md-12", "mt-4", "mb-2"], ["class", "dropdown-list col-md-5 mb-3 mx-3 p-2 overflow-y-scroll", "style", "max-height: 20rem", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "dropdown-list", "col-md-5", "mb-3", "mx-3", "p-2", "overflow-y-scroll", 2, "max-height", "20rem", 3, "ngClass"], [1, "mt-4", "px-3", "table-flexible", 3, "ngClass"], [1, "table", "table-bordered", "text-center"], ["class", "remove-margin-bottom", 3, "innerHTML", "id", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["class", "col-md-12 my-4 px-0 table-flexible", 4, "ngIf"], [1, "remove-margin-bottom", 3, "innerHTML", "id"], ["class", "cursor radio_animated", "type", "radio", 3, "checked", "id", "name", "click", 4, "ngIf"], ["class", "cursor", "type", "checkbox", 3, "checked", "id", "click", 4, "ngIf"], ["type", "radio", 1, "cursor", "radio_animated", 3, "click", "checked", "id", "name"], ["type", "checkbox", 1, "cursor", 3, "click", "checked", "id"], [1, "col-md-12", "my-4", "px-0", "table-flexible"], [1, "table", "table-bordered", "text-center", "div-disable"], ["class", "remove-margin-bottom", 3, "innerHTML", 4, "ngFor", "ngForOf"], ["class", "radio_animated", "type", "radio", 3, "checked", "name", 4, "ngIf"], ["type", "checkbox", 3, "checked", "id", 4, "ngIf"], ["type", "radio", 1, "radio_animated", 3, "checked", "name"], ["type", "checkbox", 3, "checked", "id"], ["class", "col-md-6 mt-3 mb-3", 4, "ngFor", "ngForOf"], ["class", "col-md-12 mt-5 px-0", 4, "ngIf"], [1, "col-md-6", "mt-3", "mb-3"], [1, "col-md-11", "dropdown"], ["type", "button", "data-toggle", "dropdown", 1, "col-md-12", "bg-white", "innerhtml-margin-clear", "p-2", "dropdown-border", "dropdown-toggle", "d-flex", "justify-content-between", 3, "id", "innerHTML"], [1, "col-md-11", "dropdown-menu"], [1, "dropdown-item", "dropdown-link", "cursor", 3, "click"], ["class", "dropdown-item dropdown-link innerhtml-margin-clear", "style", "overflow: scroll; overflow-y: hidden", 3, "innerHTML", "click", 4, "ngFor", "ngForOf"], [1, "dropdown-item", "dropdown-link", "innerhtml-margin-clear", 2, "overflow", "scroll", "overflow-y", "hidden", 3, "click", "innerHTML"], [1, "col-md-12", "mt-5", "px-0"], ["class", "col-md-6 mt-2 mb-3", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mt-2", "mb-3"], [1, "col-md-11"], ["data-toggle", "dropdown", 1, "col-md-12", "bg-white", "innerhtml-margin-clear", "p-2", "dropdown-border", "dropdown-toggle", "d-flex", "justify-content-between", 3, "id"], [1, "col-md-12", "dropdown-menu"], [1, "dropdown-item", "dropdown-link", "overflow-auto"], ["class", "dropdown-item overflow-auto dropdown-link innerhtml-margin-clear", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "dropdown-item", "overflow-auto", "dropdown-link", "innerhtml-margin-clear", 3, "innerHTML"], ["placeholder", "Enter the Answer", "class", "form-control", "type", "text", 3, "readOnly", "value", "input", 4, "ngIf"], ["class", "mt-2", 3, "editorPatchValue", "height", "id", "readonly", "showDropBtn", "showInputBtn", "emitEditorValue", 4, "ngIf"], ["placeholder", "Enter the Answer", "type", "text", 1, "form-control", 3, "input", "readOnly", "value"], [1, "mt-2", 3, "emitEditorValue", "editorPatchValue", "height", "id", "readonly", "showDropBtn", "showInputBtn"], [1, "form-span"], [1, "col-md-6"], ["cdkDropList", "", 1, "col-12", 3, "cdkDropListDropped"], ["class", "input-group mb-3 mt-3 inputMenu", 4, "ngFor", "ngForOf"], ["class", "col-md-12 mt-5", 4, "ngIf"], [1, "input-group", "mb-3", "mt-3", "inputMenu"], ["cdkDrag", "", 1, "input-group", "mb-1", "inputMenu"], [1, "input-group-prepend"], [1, "input-group-text"], ["src", "assets/images/pdf-icons/equal@2x.png", 1, "img-fluid"], [1, "form-control", "mb-0", "pt-4", "pb-5", "overflow-auto", 3, "innerHTML"], [1, "col-md-12", "mt-5"], [1, "col-6"], [1, "input-group", "mb-1", "inputMenu"], [1, "mt-4", "px-3", "mb-3"], [1, "mt-4", "row", "ml-4", "pl-3"], ["placeholder", "Please enter your answer", 1, "form-control", 3, "ngModelChange", "rows", "ngModel", "readonly", "ngModelOptions"], [1, "word-count"], [1, "mr-2"], [1, "col-3"], [1, "col-12", "sidebar-widget"], [1, "font-weight-bold"], [1, "widget-post", "pt-15"], [3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "col-12 resource-link-card mt-3", 4, "ngIf"], [3, "click", "ngClass"], [1, "badge", 3, "ngClass"], [1, "col-12", "resource-link-card", "mt-3"], [1, "text-info"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "mb-3"], [1, "row", "d-flex", "justify-content-start"], [1, "btn-outline-primary", "question-no-big"], [1, "pl-4", "align-self-center", "passage-inner", 3, "innerHTML"], ["class", "mt-3", 4, "ngIf"], ["class", "table-flexible", 4, "ngIf"], ["class", "mt-3 mb-2", 4, "ngIf"], [1, "mt-3"], [1, "row", "mb-2", 3, "ngClass"], ["class", "dropdown-list overflow-auto col-md-6 mb-3 mx-3 p-2", "style", "max-height: 20rem", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "col-md-12 mt-4 mb-2 px-0", 4, "ngIf"], [1, "dropdown-list", "overflow-auto", "col-md-6", "mb-3", "mx-3", "p-2", 2, "max-height", "20rem", 3, "click", "ngClass"], [1, "col-md-12", "mt-4", "mb-2", "px-0"], ["class", "dropdown-list col-md-6 mb-3 mx-3 p-2 overflow-y-scroll", "style", "max-height: 20rem", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "dropdown-list", "col-md-6", "mb-3", "mx-3", "p-2", "overflow-y-scroll", 2, "max-height", "20rem", 3, "ngClass"], [1, "table-flexible"], [1, "table", "px-3", "table-bordered", "text-center", "mt-3", "mb-3", 3, "ngClass"], ["class", "radio_animated", "type", "radio", 3, "checked", "name", "click", 4, "ngIf"], ["type", "checkbox", 3, "checked", "click", 4, "ngIf"], ["type", "radio", 1, "radio_animated", 3, "click", "checked", "name"], ["type", "checkbox", 3, "click", "checked"], ["class", "col-md-6 mt-3 mb-3 px-1", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mt-3", "mb-3", "px-1"], ["class", "form-control", "type", "text", 3, "readOnly", "value", "input", 4, "ngIf"], ["type", "text", 1, "form-control", 3, "input", "readOnly", "value"], [1, "mt-3", "mb-2"], [1, "mt-4", "mb-4"], [1, "col-12", "mt-0", "d-flex", "justify-content-center"], [3, "valueChange", "editMode", "editPatchValue", "graphId", "questionType"], [1, "col-md-12", "mt-2"], [1, "row", "mt-4", "d-flex", "justify-content-end"], ["class", "btn pull-right btn-primary ml-3", 3, "click", 4, "ngIf"], ["class", "btn pull-right btn-outline-primary", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "ml-3", "pull-right", 3, "click"], ["class", "btn pull-right btn-outline-primary ml-3", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary pull-right ml-3", 3, "click", 4, "ngIf"], [1, "btn", "pull-right", "btn-outline-primary", "ml-3", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-repeat", "mr-1"], [1, "btn", "btn-outline-primary", "pull-right", "ml-3", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-comments", "mr-1"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o", "mr-1"], [1, "btn", "pull-right", "btn-outline-primary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-sign-out", "mr-1"], [1, "btn", "pull-right", "btn-primary", "ml-3", 3, "click"], [1, "fa", "fa-long-arrow-right", "ml-1"], ["aria-hidden", "true", 1, "fa", "fa-repeat", "ml-1"], [1, "col-12", "mt-2"], [1, "feedback-card", 3, "innerHTML"], [1, "card", "p-3"], ["cols", "30", "placeholder", "Please Enter the Feedback", "rows", "3", 1, "form-control", 3, "input", "readOnly", "value"], [1, "row", "mt-3"], ["placeholder", "Please Enter the Overall Feedback", "cols", "30", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel", "readOnly"], [1, "card-body", 2, "background", "#ececec"], [1, "col-12", "d-flex", "justify-content-center", "pr-0"], [1, "mt-2"], [1, "col-12", "paddingDetails"], [1, "card", "align-items-center", "px-4", "py-5"], [1, "col-12", "d-flex", "justify-content-center"], [1, "modal-header"], [1, "modal-title", "letter"], [1, "modal-body", "p-0"], ["class", "mb-0 my-3", 4, "ngIf"], [1, "modal-footer", "d-flex", "justify-content-right"], ["type", "button", 3, "click"], ["type", "button", 3, "class", "click", 4, "ngIf"], [1, "mb-0", "my-3"], [1, "modal-header", "d-flex", "justify-content-between"], [1, "mb-0", 2, "color", "#8F008A"], [1, "fa", "fa-times-circle", "cursor", 2, "font-size", "1.2rem", 3, "click"], [1, "modal-body"], [1, "col-md-12", "d-flex", "mt-4", "mb-4", "p-4", "release-card"], ["id", "modal-basic-title", 1, "modal-title", "font-weight-bold"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["target", "_blank", 1, "cursor", 3, "href"], [2, "overflow", "scroll", "overflow-y", "hidden", 3, "title"], [1, "col-12", "px-0", "my-3", "d-flex", "flex-row", "align-items-center"], [1, "feedback_spinner"], [1, "ml-3", 2, "font-size", "16px"]], template: function StudentScratchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "div", 13)(5, "div", 11)(6, "div")(7, "div", 14)(8, "div", 15)(9, "h4", 16);
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 17);
            i0.ɵɵtemplate(12, StudentScratchComponent_div_12_Template, 19, 3, "div", 18);
            i0.ɵɵelementStart(13, "div", 19);
            i0.ɵɵtemplate(14, StudentScratchComponent_i_14_Template, 1, 0, "i", 20)(15, StudentScratchComponent_img_15_Template, 1, 0, "img", 21)(16, StudentScratchComponent_i_16_Template, 1, 0, "i", 22)(17, StudentScratchComponent_i_17_Template, 1, 0, "i", 23)(18, StudentScratchComponent_button_18_Template, 2, 3, "button", 24)(19, StudentScratchComponent_button_19_Template, 2, 3, "button", 24);
            i0.ɵɵelementEnd()()()()()()()()();
            i0.ɵɵelementStart(20, "div", 10);
            i0.ɵɵtemplate(21, StudentScratchComponent_div_21_Template, 15, 2, "div", 25)(22, StudentScratchComponent_div_22_Template, 8, 3, "div", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "section");
            i0.ɵɵtemplate(24, StudentScratchComponent_div_24_Template, 3, 2, "div", 27);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(25, StudentScratchComponent_ng_template_25_Template, 14, 8, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(27, StudentScratchComponent_ng_template_27_Template, 9, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(29, StudentScratchComponent_ng_template_29_Template, 9, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(31, StudentScratchComponent_ng_template_31_Template, 5, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵclassMapInterpolate1("card-body ", ctx.env.deviceType() ? "px-3 py-2" : "", "");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.contentName);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.isSingleQnsWithFeedbackType);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", (ctx.scratchQuestionData == null ? null : ctx.scratchQuestionData.teacher_feedback) != "" && (ctx.scratchQuestionData == null ? null : ctx.scratchQuestionData.teacher_feedback));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.linkdata == null ? null : ctx.linkdata.length) != "0");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.studentContentStatus == "1" || ctx.studentContentStatus == "2") && !ctx.isSingleQnsWithFeedbackType);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.studentContentStatus == "1" || ctx.studentContentStatus == "2") && !ctx.isSingleQnsWithFeedbackType);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.studentContentStatus == "1" || ctx.studentContentStatus == "2") && !ctx.isSingleQnsWithFeedbackType);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.studentContentStatus != "1" && ctx.studentContentStatus != "2");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.totalAns.length > 1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.scratchQuestionData == null ? null : ctx.scratchQuestionData.file_text) && (ctx.scratchQuestionData == null ? null : ctx.scratchQuestionData.file_text) != "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.totalAns);
        } }, dependencies: [i13.NgClass, i13.NgForOf, i13.NgIf, i4.DefaultValueAccessor, i4.NgControlStatus, i7.NgbAccordionDirective, i7.NgbAccordionItem, i7.NgbAccordionHeader, i7.NgbAccordionToggle, i7.NgbAccordionBody, i7.NgbAccordionCollapse, i14.CdkDropList, i14.CdkDrag, i4.NgModel, i15.TinyMiceComponent, i16.GraphComponentComponent, i13.DatePipe, i17.SanitizeHtmlPipe, i18.CustomDateFormatPipe], styles: [".inputMenu[_ngcontent-%COMP%]{\n\n  //padding: 30px;\n\n\n  input{\n    padding: 30px;\n  }\n  .input-group-text{\n    background: white;\n  }\n  img{\n    position: relative;\n    height: 36px;\n  }\n\n  .pointsSec{\n    .labelName{\n      font-size: 20px;\n    }\n    .pointInput{\n      height: 3rem !important;\n    }\n  }\n}\n.button[_ngcontent-%COMP%] {\n  display: block;\n  width: 115px;\n  height: 30px;\n  background: #8F008A;\n  padding: 3px;\n  text-align: center;\n  border-radius: 3px;\n  color: white;\n  font-weight: bold;\n  line-height: 25px;\n}\n\n.button1[_ngcontent-%COMP%] {\n  width: 116px;\n  height: 30px;\n  display: block;\n  line-height: 19px;\n  font-size: 14px;\n  text-align: center;\n}\ncanvas-whiteboard[_ngcontent-%COMP%] {\n  width: 10vw;\n  canvas {\n    width: 10vw;\n    height: 50vh;\n    position: center;\n  }\n}\n\n//[_ngcontent-%COMP%]   answering[_ngcontent-%COMP%]   page[_ngcontent-%COMP%]   student[_ngcontent-%COMP%]   login\n.inputMenu[_ngcontent-%COMP%]{\n\n  input{\n    padding: 30px;\n  }\n  .input-group-text{\n    background: white;\n  }\n  img{\n    position: relative;\n    height: 36px;\n  }\n\n  .pointsSec{\n    .labelName{\n      font-size: 20px;\n    }\n    .pointInput{\n      height: 3rem !important;\n    }\n  }\n}\n.button[_ngcontent-%COMP%] {\n  display: block;\n  width: 115px;\n  height: 30px;\n  background: #8F008A;\n  padding: 3px;\n  text-align: center;\n  border-radius: 3px;\n  color: white;\n  font-weight: bold;\n  line-height: 25px;\n}\n\n.button1[_ngcontent-%COMP%] {\n  width: 116px;\n  height: 30px;\n  display: block;\n  line-height: 19px;\n  font-size: 14px;\n  text-align: center;\n}\n\n.paddingDetails[_ngcontent-%COMP%]{\n  padding-left: 28px;\n  padding-right: 28px;\n}\n\n////\n.overlay[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: grey;\n  position: absolute;\n  z-index: 1;\n  opacity: 0.6;\n  cursor: pointer;\n  transform: scale(0);\n  transition: .4s;\n  border-radius: 5px;\n  -webkit-transition: .4s;\n  -moz-transition: .4s;\n  -ms-transition: .4s;\n  -o-transition: .4s;\n}\n.table-cell[_ngcontent-%COMP%]{\n  display: table-cell;\n  vertical-align: middle;\n}\n.overlay-main[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: table;\n}\n.team-col[_ngcontent-%COMP%] {\n  margin: 0;\n  position: relative;\n}\n.team-member[_ngcontent-%COMP%]{\n  position: relative;\n  overflow: hidden;\n  margin: 0;\n}\n\n.corporate-team[_ngcontent-%COMP%]{\n  position: relative;\n  margin-bottom: 30px;\n}\n.corporate-team[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{\n  transform: scale(1);\n}\n.corporate-team[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%]{\n  transform: translateY(0);\n\n}\n.corporate-team[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{\n  transform: translateY(0);\n\n}\n.corporate-team[_ngcontent-%COMP%]:hover   .team-details[_ngcontent-%COMP%]{\n  background-color: black;\n}\n.corporate-team[_ngcontent-%COMP%]:hover   .team-icon-grid[_ngcontent-%COMP%]{\n  transform: translateY(0);\n\n}\n.team-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  padding: 0;\n  transition: .4s;\n  -o-transition: .4s;\n  -webkit-transition: .4s;\n  -moz-transition: .4s;\n  -ms-transition: .4s;\n  border: 0 solid white;\n  box-shadow: 0 0 4px 0 #d7d7d7;\n}\n\n.team-details[_ngcontent-%COMP%] {\n  padding: 23px 20px;\n  background-color: #f31515;\n  margin-top: 10px;\n  position: relative;\n  z-index: 11111;\n  transition: .4s;\n  -o-transition: .4s;\n  -webkit-transition: .4s;\n  -moz-transition: .4s;\n  -ms-transition: .4s;\n}\n.team-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  color: white;\n  font-weight: 700;\n  margin-top: 0;\n  font-family: 'Roboto', serif;\n}\n.team-member[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 26px;\n  color: white;\n  margin-top: 0;\n  transform: translateY(-550px);\n  transition: .5s;\n  -o-transition: .5s;\n  -webkit-transition: .5s;\n  -moz-transition: .5s;\n  -ms-transition: .5s;\n  transition-delay: .2s;\n  margin-left: 20px;\n}\n.team-member[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  color: black;\n  line-height: 24px;\n  margin: 0 20px;\n  margin-top: 10px;\n  margin-bottom: 15px;\n  transform: translateY(-550px);\n  transition: .5s;\n  -o-transition: .5s;\n  -webkit-transition: .5s;\n  -moz-transition: .5s;\n  -ms-transition: .5s;\n  transition-delay: .2s;\n}\n.team-icon[_ngcontent-%COMP%]{\n  margin-top: 3px;\n  transition: .3s;\n  position: relative;\n  z-index: 1;\n  transition: .3s;\n  -webkit-transition: .3s;\n  -moz-transition: .3s;\n  -ms-transition: .3s;\n  -o-transition: .3s;\n  margin-left: 20px;\n}\n.team-social[_ngcontent-%COMP%] {\n  padding-left: 0;\n  display: inline-flex;\n  list-style: none;\n  margin: 0;\n}\n.team-social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n  margin: 0;\n}\n.team-social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #f31515;\n  transition: .3s;\n  -webkit-transition: .3s;\n  -moz-transition: .3s;\n  -ms-transition: .3s;\n  -o-transition: .3s;\n  text-align: center;\n  margin-right: 11px;\n  float: left;\n  height: 30px;\n  width: 30px;\n  background-color: white;\n  border-radius: 5px;\n  line-height: 30px;\n}\n.team-social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: black;\n  background-color: white;\n}\n\n\n.team-icon-grid[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: transparent;\n  position: relative;\n  margin-top: 20px;\n  transform: translateY(250px);\n  transition: .8s;\n  -o-transition: .8s;\n  -webkit-transition: .8s;\n  -moz-transition: .8s;\n  -ms-transition: .8s;\n  transition-delay: .6s;\n}\n\n.round-question[_ngcontent-%COMP%]{\n  border: 1px solid;\n  width: 38px;\n  border-radius: 50%;\n  text-align: center;\n  cursor: pointer;\n  font-size: 20px;\n}\n\n.black[_ngcontent-%COMP%]{\n  border: 1px solid black !important;\n  color: black !important;\n  font-size: 20px;\n}\n\n.wrap[_ngcontent-%COMP%]{\n  display: flex;\n  text-align: center;\n  flex-wrap: wrap !important;\n}\n\n\n///\n.scoll-component[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  width: 100%;\n  height: 60px;\n\n  .total-items {\n    min-width: 80px;\n    align-self: center;\n    text-align: center;\n  }\n\n  // Container\n  .scoll-container {\n    position: relative;\n    display: flex;\n    overflow: hidden;\n    flex-grow: 1;\n    padding-left: 49px;\n    padding-right: 49px;\n    // Scroll\n    .scroll-content {\n      display: flex;\n      overflow-x: auto;\n      overflow-y: hidden;\n      flex-wrap: nowrap;\n      align-items: center;\n\n      .arrowStyle{\n        background: transparent;\n        border: none;\n        font-size: 28px;\n        border: 0 ridge;\n      }\n      // Arrows\n      .arrow {\n        position: absolute;\n        width: 60px;\n        text-align: center;\n        z-index: 2;\n        &.hide {\n          display: none;\n        }\n        &.left-arrow {\n          left: 0;\n        }\n        &.right-arrow {\n          right : 0;\n        }\n      }\n\n      // Items\n      .scroll-item {\n        width: auto;\n        margin: 0 10px;\n        flex: 0 0 auto;\n      }\n    }\n  }\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 20px; border: 1px solid #8F008A; border-radius: 4px; padding: 6px;\n  display: flex;\n  align-items: center;\n  margin-right: 12px;\n}\n\n.upload-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8f008a;\n  font-weight: bolder;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]::after{\n  display: none !important;\n}\n\n.question-side-icon[_ngcontent-%COMP%] {\n  height: 28px;width: 28px;object-fit: contain;\n}\n\n.text-wrap-balance[_ngcontent-%COMP%] {\n  text-wrap: balance !important;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentScratchComponent, [{
        type: Component,
        args: [{ selector: 'app-student-scratch', template: "<!--<div *ngIf=\"commondata.loader.value\" id=\"pre-loader\">-->\n<!--    <img alt=\"\" src=\"assets/images/pre-loader/loader-01.svg\">-->\n<!--</div>-->\n<div class=\"container-fluid py-3\" id=\"yourTarget\">\n\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card\">\n                <div class=\"row align-items-center\">\n                    <div class=\"col-12\">\n                        <div class=\"card-body {{env.deviceType() ? 'px-3 py-2' : ''}}\">\n                            <div class=\"row pr-3 my-1 d-flex align-items-center\">\n                                <div class=\"col-md-6 mt-2\">\n                                    <h4 class=\"contenttext mb-0\">{{contentName}}</h4>\n                                </div>\n                                <div class=\"col-md-6 px-0 pdf-assign-btn d-flex align-items-center justify-content-end\">\n                                    <div class=\"row my-0 mx-2 justify-content-center\" *ngIf=\"isSingleQnsWithFeedbackType\">\n                                        <div class=\"w-auto text-center\">\n                                            <h4 style=\"font-size: 24px\" class=\"mb-0\" *ngIf=\"getElapsedTime() as elapsed\"><b>{{elapsed.hours}}</b></h4>\n                                            <h6 style=\"font-size: 12px\" class=\"color-primary mb-0\">Hours</h6>\n                                        </div>\n                                        <div class=\"w-auto align-content-center mx-2\">\n                                            <h4 class=\"mb-0 font-weight-bold\">:</h4>\n                                        </div>\n                                        <div class=\"w-auto text-center\">\n                                            <h4 style=\"font-size: 24px\" class=\"mb-0\" *ngIf=\"getElapsedTime() as elapsed\"><b>{{elapsed.minutes}}</b></h4>\n                                            <h6 style=\"font-size: 12px\"  class=\"color-primary mb-0\">Minutes</h6>\n                                        </div>\n                                        <div class=\"w-auto align-content-center mx-2\">\n                                            <h4 class=\"mb-0 font-weight-bold\">:</h4>\n                                        </div>\n                                        <div class=\"w-auto text-center\">\n                                            <h4 style=\"font-size: 24px\" class=\"mb-0\" *ngIf=\"getElapsedTime() as elapsed\"><b>{{elapsed.seconds}}</b></h4>\n                                            <h6 style=\"font-size: 12px\" class=\"color-primary mb-0\">Seconds</h6>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mx-2\">\n                                        <i *ngIf=\"scratchQuestionData?.teacher_feedback != '' && scratchQuestionData?.teacher_feedback\"\n                                           title=\"Teacher Feedback\" class=\"fa fa-commenting-o icon color-primary\" aria-hidden=\"true\" (click)=\"showFeedback()\"></i>\n                                        <img *ngIf=\"linkdata?.length != '0'\" style=\"border: 1px solid #8F008A; border-radius: 4px; padding: 0; width: 34px; height: 34px; margin-right: 12px\" alt=\"Resource\"\n                                             src=\"assets/images/mob-side-icon/books.png\" title=\"Resources\" (click)=\"otherlink()\">\n                                        <i title=\"Save & Exit\" (click)=\"saveAnswer('2', 'exit', true, 'same')\"\n                                           *ngIf=\"(studentContentStatus == '1' || studentContentStatus == '2') && !isSingleQnsWithFeedbackType\"\n                                           class=\"fa fa-sign-out color-primary icon\" aria-hidden=\"true\"></i>\n                                        <i title=\"Save\" (click)=\"saveAnswer('2', 'noExit', true, 'same')\" *ngIf=\"(studentContentStatus == '1' || studentContentStatus == '2') && !isSingleQnsWithFeedbackType\"\n                                           class=\"fa fa-floppy-o color-primary icon\" aria-hidden=\"true\"></i>\n                                        <button (click)=\"buttonClicked = 'submit';submitPopup()\"\n                                                *ngIf=\"(studentContentStatus == '1' || studentContentStatus == '2') && !isSingleQnsWithFeedbackType\"\n                                                class=\"btn btn-primary pull-right {{env.deviceType() ? 'border-radius-5' : ''}}\">Submit\n                                        </button>\n                                        <!--                    <button (click)=\"saveAnswer('2', 'noExit', true, 'same')\" *ngIf=\"studentContentStatus == '1' || studentContentStatus == '2'\" class=\"btn btn-outline-primary pull-right ml-2\">Save</button>-->\n                                        <!--                    <button (click)=\"saveAnswer('2', 'exit', true, 'same')\" *ngIf=\"studentContentStatus == '1' || studentContentStatus == '2'\" class=\"btn btn-outline-primary pull-right\">Save and Exit</button>-->\n                                        <!--                    <button *ngIf=\"linkdata?.length != '0'\" class=\"btn btn-primary pull-right mx-2\" (click)=\"otherlink()\">Resources</button>-->\n                                        <button (click)=\"backbutton()\" *ngIf=\"studentContentStatus != '1' && studentContentStatus != '2'\"\n                                                class=\"btn btn-outline-primary pull-right ml-2 {{env.deviceType() ? 'border-radius-5' : ''}}\">Back\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!--    <div class=\"row\">-->\n<!--        <div class=\"col-12 mr-0 pr-0 pb-2\">-->\n<!--            <div class=\"scoll-component\">-->\n<!--                <div class=\"total-items\">-->\n<!--                    <span>{{totalAns.length}} Questions</span>-->\n<!--                </div>-->\n<!--                <div class=\"scoll-container\">-->\n<!--                    <div #scrollContent id=\"scrollContent\" class=\"scroll-content\" (scroll)=\"onScroll()\">-->\n<!--                        <button #leftArrow class=\"arrow left-arrow arrowStyle\" (click)=\"onClickScrollLeft()\"><<</button>-->\n\n<!--                        <div class=\"scroll-items\" *ngFor=\"let list of totalAns; let i = index\">-->\n<!--                            <span class=\"round-question pl-2 pr-2 pt-1 pb-1 ml-3 my-2\" (click)=\"checkWhetherSaveIsNeeded(list, i, 'qnsNumber')\"-->\n<!--                                  [ngClass]=\"{'bg-green':checkQuestionId(list)?.is_correct == 'true', 'bg-partially': checkQuestionId(list)?.is_correct == 'partially-completed',-->\n<!--                                  'bg-red':checkQuestionId(list)?.is_correct == 'false' || !correctAnswer, 'black':(checkQuestionId(list)?.is_correct == '' || checkQuestionId(list)?.is_correct == null) && showQuestion != i,-->\n<!--                                  'selectedQuestion':(checkQuestionId(list)?.is_correct == '' || checkQuestionId(list)?.is_correct == null) && showQuestion == i }\">-->\n<!--                                {{i + 1}}-->\n<!--                            </span>-->\n<!--                        </div>-->\n\n<!--                        <button #rightArrow class=\"arrow right-arrow arrowStyle\" (click)=\"onClickScrollRight()\">>></button>-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--            </div>-->\n\n<!--            <div class=\"col-12 mt-3\" *ngIf=\"scratchQuestionData.file_text != ''\">-->\n<!--                <div class=\"card ml-3 mr-0\" style=\"overflow-y: auto; max-height: 25vh; border-bottom: 3px solid #e6baea !important; border-right: 3px solid #e6baea !important\">-->\n<!--                    <div class=\"card-body py-3 px-4\">-->\n<!--                        <h4 class=\"mb-3 font-weight-bold\">Description:</h4>-->\n<!--                        <div class=\"ml-2\" >-->\n<!--                            <span [innerHTML]=\"scratchQuestionData.file_text | sanitizeHtml\"></span>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--        </div>-->\n<!--    </div>-->\n<!--    <section>-->\n<!--        <div class=\"row view-question\" *ngFor=\"let item of totalAns; let i = index; let last = last\">-->\n<!--            <div class=\"col-md-9 mb-2\" *ngIf=\"showQuestion == i\">-->\n<!--                <div class=\"container-fluid\">-->\n<!--                    <div *ngIf=\"checkQuestionId(item)?.is_correct == 'true' || checkQuestionId(item)?.is_correct == 'false' || !correctAnswer\">-->\n<!--                        <div class=\"alert alert-{{checkQuestionId(item)?.is_correct == 'false'|| !correctAnswer ? 'danger' : 'success'}} alert-dismissible fade show\">-->\n<!--                            <strong> {{checkQuestionId(item)?.is_correct == 'false' || !correctAnswer ? 'You have entered Incorrect Answer !' : 'Great Response ! You have entered Correct Answer'}}</strong> .-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                    <div class=\"card pl-5 pr-3 py-5\">-->\n<!--                        <div class=\"card-body\">-->\n<!--                            <div class=\"row d-flex justify-content-start\">-->\n<!--                                <div>-->\n<!--                                    <button class=\"btn-primary w-auto h-20 pl-2 pr-2 pt-1 pb-1\">{{i + 1}}</button>-->\n<!--                                </div>-->\n<!--                                <div class=\"pl-4 align-self-center\">-->\n<!--                                    <div class=\"inner\" *ngIf=\"item.question != '' && item.question_type_id != 24\"><b><h3 [innerHTML]=\"item.question | sanitizeHtml\" class=\"mb-0 overflow-auto\"></h3></b></div>-->\n<!--                                    <div *ngIf=\"item.question != '' && item.question_type_id == 24\" class=\"mx-3 custom-card question-page1\" style=\"overflow-x: scroll;max-height: 60vh;\">-->\n<!--                                        <span [innerHTML]=\"item.subQuestions[0]?.passage | sanitizeHtml\" class=\"innerhtml-margin-clear\"></span>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                            <div class=\"col-md-12\">-->\n<!--                                <div *ngIf=\"item.question_type_id == 1 || item.question_type_id == 2\" [ngClass]=\"{'div-disable': checkDisableConditionForQns(item)}\" class=\"mt-4\">-->\n<!--                                    <div class=\"col-md-12 mb-2\">-->\n<!--                                        <div (click)=\"cfsGetMultiChoice(i, k, item)\" *ngFor=\"let option of item.given_answer; let k = index\" [ngClass]=\"{'student-selected' : k.toString() == option.isSelected}\" class=\"dropdown-list overflow-auto col-md-5 mb-3 mx-3 p-2\" style=\"max-height: 20rem\"><span [innerHTML]=\"option.options | sanitizeHtml\" class=\"remove-margin-bottom\"></span></div>-->\n<!--                                    </div>-->\n<!--                                    <div class=\"col-md-12 mt-4 mb-2\" *ngIf=\"item.is_correct == 'true' || item.is_correct == 'false'\">-->\n<!--                                        <label><strong>Correct Answer</strong></label>-->\n<!--                                        <div *ngFor=\"let option of item.answer; let k = index\" [ngClass]=\"{'student-selected' : option.correctAnswer != ''}\" class=\"dropdown-list col-md-5 mb-3 mx-3 p-2 overflow-y-scroll\" style=\"max-height: 20rem\">-->\n<!--                                            <span [innerHTML]=\"item.options[k].options | sanitizeHtml\" class=\"remove-margin-bottom\"></span>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                                <div *ngIf=\"item.question_type_id == 5 || item.question_type_id == 7\" [ngClass]=\"{'div-disable': checkDisableConditionForQns(item)}\" class=\"mt-4 px-3 table-flexible\">-->\n<!--                                    <table class=\"table table-bordered text-center\">-->\n<!--                                        <thead>-->\n<!--                                        <tr>-->\n<!--                                            <th>Questions</th>-->\n<!--                                            <th *ngFor=\"let list of item.answer; let k=index\" [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\" id=\"{{'columnId' + i}}\"></th>-->\n<!--                                        </tr>-->\n<!--                                        </thead>-->\n<!--                                        <tbody>-->\n<!--                                        <tr *ngFor=\"let list of item.given_answer; let j=index\">-->\n<!--                                            <td [innerHTML]=\"list.options | sanitizeHtml\" class=\"remove-margin-bottom\"></td>-->\n<!--                                            <td *ngFor=\"let ans of item.answer; let k=index\">-->\n<!--                                                <input (click)=\"cfsGetChooseTable(item, i, j, k)\" *ngIf=\"item.question_type_id == '5'\" [checked]=\"this.totalAns[i].given_answer[j].isSelected == '' ? false : this.totalAns[i].given_answer[j].isSelected == k.toString()\" class=\"cursor radio_animated\" id=\"{{j}}chooseSingle{{i}}\" name=\"{{i}}choosesingle{{j}}corect\" type=\"radio\">-->\n<!--                                                <input (click)=\"cfsGetChooseTable(item, i, j, k)\" *ngIf=\"item.question_type_id == '7'\" [checked]=\"splitMultiChoose(this.totalAns[i].given_answer[j].isSelected, k)\" id=\"{{j}}chooseMulti{{i}}\" class=\"cursor\"  type=\"checkbox\">-->\n<!--                                            </td>-->\n<!--                                        </tr>-->\n<!--                                        </tbody>-->\n<!--                                    </table>-->\n\n\n<!--                                    <div class=\"col-md-12 my-4 px-0 table-flexible\" *ngIf=\"item.is_correct == 'true' || item.is_correct == 'false'\">-->\n<!--                                        <label><strong>Correct Answer</strong></label>-->\n<!--                                        <table class=\"table table-bordered text-center div-disable\">-->\n<!--                                            <thead>-->\n<!--                                            <tr>-->\n<!--                                                <th>Questions</th>-->\n<!--                                                <th *ngFor=\"let list of item.answer; let k=index\" [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\"></th>-->\n<!--                                            </tr>-->\n<!--                                            </thead>-->\n<!--                                            <tbody>-->\n<!--                                            <tr *ngFor=\"let list of item.given_answer; let j=index\">-->\n<!--                                                <td [innerHTML]=\"list.options | sanitizeHtml\" class=\"remove-margin-bottom\"></td>-->\n<!--                                                <td *ngFor=\"let ans of item.answer; let k=index\">-->\n<!--                                                    <input *ngIf=\"item.question_type_id == '5'\" [checked]=\"item.heading_option[j].correctActive === k\" class=\"radio_animated\" name=\"{{i}}choosesingleCorrect{{j}}corect\" type=\"radio\">-->\n<!--                                                    <input *ngIf=\"item.question_type_id == '7'\" [checked]=\"patchCorrectMultiChoiceAnswer(item.heading_option, k , j)\" id=\"chooseMultipass{{i}}{{j}}{{k}}\" type=\"checkbox\">-->\n<!--                                                </td>-->\n<!--                                            </tr>-->\n<!--                                            </tbody>-->\n<!--                                        </table>-->\n<!--                                    </div>-->\n\n<!--                                </div>-->\n<!--                                <div *ngIf=\"item.question_type_id == 9\" class=\"mt-4\" [ngClass]=\"{'div-disable': checkDisableConditionForQns(item)}\">-->\n<!--                                    <div *ngFor=\"let data of item.given_answer; let j = index\" class=\"col-md-6 mt-3 mb-3\">-->\n<!--                                        <label>Dropdown - {{j+1}}</label>-->\n<!--                                        <div class=\"col-md-11\">-->\n<!--                                            <div [id]=\"dropdownId(i, j)\" [innerHTML]=\"data.isSelected === '' ? 'Select Answer' : data.options[data.isSelected].correctAnswer | sanitizeHtml\" class=\"col-md-12 bg-white innerhtml-margin-clear p-2 dropdown-border dropdown-toggle d-flex justify-content-between\" data-toggle=\"dropdown\"></div>-->\n<!--                                            <div class=\"col-md-11 dropdown-menu\">-->\n<!--                                                <span (click)=\"cfsGetDropdown($event, i, j, '', 'Select Answer')\" class=\"dropdown-item dropdown-link cursor\">Select Answer</span>-->\n<!--                                                <span (click)=\"cfsGetDropdown($event, i, j, k, list.listOption)\"-->\n<!--                                                      *ngFor=\"let list of data.options; let k = index\"-->\n<!--                                                      [innerHTML]=\"list.listOption | sanitizeHtml\"-->\n<!--                                                      class=\"dropdown-item dropdown-link innerhtml-margin-clear\"-->\n<!--                                                      style=\"overflow: scroll; overflow-y: hidden\"></span>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n\n<!--                                    <div class=\"col-md-12 mt-5 px-0\" *ngIf=\"item.is_correct == 'true' || item.is_correct == 'false'\">-->\n<!--                                        <label><b>Correct Answer</b></label>-->\n<!--                                        <div *ngFor=\"let data of item.answer; let j = index\" class=\"col-md-6 mt-2 mb-3\">-->\n<!--                                            <label>Dropdown - {{j+1}}</label>-->\n<!--                                            <div class=\"col-md-11\">-->\n<!--                                                <div class=\"col-md-12 bg-white innerhtml-margin-clear p-2 dropdown-border dropdown-toggle d-flex justify-content-between\" data-toggle=\"dropdown\" id=\"dropdown{{j}}\"></div>-->\n<!--                                                <div class=\"col-md-12 dropdown-menu\">-->\n<!--                                                    <span class=\"dropdown-item dropdown-link overflow-auto\">Select Answer</span>-->\n<!--                                                    <span *ngFor=\"let option of item.options; let k = index\" [innerHTML]=\"option.listOption | sanitizeHtml\" class=\"dropdown-item overflow-auto dropdown-link innerhtml-margin-clear\"></span>-->\n<!--                                                </div>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                                <div *ngIf=\"item.question_type_id == 10\" class=\"mt-4\" [ngClass]=\"{'div-disable': checkDisableConditionForQns(item)}\">-->\n<!--                                    <div *ngFor=\"let data of item.given_answer; let j = index\" class=\"col-md-6 mt-3 mb-3\">-->\n<!--                                        <label>Input - {{j+1}}</label>-->\n<!--                                        <input (input)=\"cfsGetInput($event, i, j, item)\" *ngIf=\"item.editor_type == 1\" placeholder=\"Enter the Answer\"-->\n<!--                                               [readOnly]=\"studentContentStatus != '1' && studentContentStatus != '2'\"-->\n<!--                                               [value]=\"data.isSelected\" class=\"form-control\" type=\"text\">-->\n<!--                                        <app-tiny-mice (emitEditorValue)=\"cfsGetInput($event, i, j, item)\" *ngIf=\"item.editor_type != 1\" [editorPatchValue]= \"data.isSelected == '' ? false : data.isSelected\"-->\n<!--                                                       [height]=\"100\"-->\n<!--                                                       [id]=\"i+'input'+j\"-->\n<!--                                                       [readonly]=\"studentContentStatus != '1' && studentContentStatus != '2'\"-->\n<!--                                                       [showDropBtn]=\"false\"-->\n<!--                                                       [showInputBtn]=\"false\"-->\n<!--                                                       class=\"mt-2\">-->\n<!--                                        </app-tiny-mice>-->\n<!--                                    </div>-->\n\n<!--                                    <div class=\"col-md-12 mt-5 px-0\" *ngIf=\"item.is_correct == 'true' || item.is_correct == 'false'\">-->\n<!--                                        <label><b>Correct Answer</b></label>-->\n<!--                                        <div *ngFor=\"let data of item.options; let j = index\" class=\"col-md-6 mt-3 mb-3\">-->\n<!--                                            <label>Input - {{j+1}}</label>-->\n<!--                                            <div class=\"form-span\">-->\n<!--                                                <div [innerHTML]=\"data.options[0].value | sanitizeHtml\"></div>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                                <div *ngIf=\"item.question_type_id == 16\" class=\"mt-4\" [ngClass]=\"{'div-disable': checkDisableConditionForQns(item)}\">-->\n<!--                                    <div class=\"col-md-6\">-->\n<!--                                        <div (cdkDropListDropped)=\"droppedCorrect($event, i)\" cdkDropList class=\"col-12\">-->\n<!--                                            <div *ngFor=\"let list of item.given_answer; let k=index\" class=\"input-group mb-3 mt-3 inputMenu\">-->\n<!--                                                <div cdkDrag class=\"input-group mb-1 inputMenu\">-->\n<!--                                                    <div class=\"input-group-prepend\">-->\n<!--                                            <span class=\"input-group-text\">-->\n<!--                                                <img class=\"img-fluid\" src=\"assets/images/pdf-icons/equal@2x.png\">-->\n<!--                                            </span>-->\n<!--                                                    </div>-->\n<!--                                                    <h4 [innerHTML]=\"list.options | sanitizeHtml\" class=\"form-control mb-0 pt-4 pb-5 overflow-auto\"></h4>-->\n<!--                                                </div>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n\n<!--                                    <div class=\"col-md-12 mt-5\" *ngIf=\"item.is_correct == 'true' || item.is_correct == 'false'\">-->\n<!--                                        <label><b>Correct Answer</b></label>-->\n<!--                                        <div class=\"col-6\">-->\n<!--                                            <div *ngFor=\"let list of item.answer; let k=index\" class=\"input-group mb-3 mt-3 inputMenu\">-->\n<!--                                                <div class=\"input-group mb-1 inputMenu\">-->\n<!--                                                    <div class=\"input-group-prepend\">-->\n<!--                                        <span class=\"input-group-text\">-->\n<!--                                            <img class=\"img-fluid\" src=\"assets/images/pdf-icons/equal@2x.png\">-->\n<!--                                        </span>-->\n<!--                                                    </div>-->\n<!--                                                    <h4 [innerHTML]=\"list.correctAnswer | sanitizeHtml\" class=\"form-control mb-0 pt-4 pb-5 overflow-auto\"></h4>-->\n<!--                                                </div>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                                <div *ngIf=\"item.question_type_id == 20\" class=\"mt-4 px-3 mb-3\">-->\n<!--                                    <app-tiny-mice (emitEditorValue)=\"cfsGetPara($event, i)\" [editorPatchValue]= \"item.given_answer[0].isSelected == '' ? false : item.given_answer[0].isSelected\"-->\n<!--                                                   [height]=\"120\"-->\n<!--                                                   [id]=\"i+'para'\"-->\n<!--                                                   [readonly]=\"studentContentStatus != '1' && studentContentStatus != '2'\"-->\n<!--                                                   [showDropBtn]=\"false\"-->\n<!--                                                   [showInputBtn]=\"false\"-->\n<!--                                                   class=\"mt-2\">-->\n<!--                                    </app-tiny-mice>-->\n<!--                                </div>-->\n<!--                                <div *ngIf=\"item.question_type_id == 24\" class=\"mt-4\"  [ngClass]=\"{'div-disable': checkDisableConditionForQns(item)}\">-->\n<!--                                    <div *ngFor=\"let sec of item.subQuestions; let j = index\" class=\"mb-3\">-->\n<!--                                        <div class=\"row d-flex justify-content-start\">-->\n<!--                                            <div>-->\n<!--                                                <button class=\"btn-outline-primary question-no-big\">{{j+1}}</button>-->\n<!--                                            </div>-->\n<!--                                            <div class=\"pl-4 align-self-center passage-inner\" [innerHTML]=\"sec.question | sanitizeHtml\"></div>-->\n<!--                                        </div>-->\n<!--                                        <div *ngIf=\"sec.question_type_id == '1' || sec.question_type_id == '2'\" class=\"mt-3\">-->\n<!--                                            <div [ngClass]=\"{'div-disable': studentContentStatus != '1' && studentContentStatus != '2'}\" class=\"row mb-2\">-->\n<!--                                                <div (click)=\"cfsPassageMultiChoice(i, j, k, sec)\" *ngFor=\"let option of sec.given_answer; let k = index\" [ngClass]=\"{'student-selected' : option.isSelected == k.toString()}\" class=\"dropdown-list overflow-auto col-md-6 mb-3 mx-3 p-2\" style=\"max-height: 20rem\"><span [innerHTML]=\"option.options | sanitizeHtml\" class=\"remove-margin-bottom\"></span></div>-->\n<!--                                            </div>-->\n<!--                                            <div class=\"col-md-12 mt-4 mb-2 px-0\" *ngIf=\"sec.is_correct == 'true' || sec.is_correct == 'false'\">-->\n<!--                                                <label><strong>Correct Answer :</strong></label>-->\n<!--                                                <div *ngFor=\"let option of sec.answer; let k = index\" [ngClass]=\"{'student-selected' : option.correctAnswer !== ''}\" class=\"dropdown-list col-md-6 mb-3 mx-3 p-2 overflow-y-scroll\" style=\"max-height: 20rem\">-->\n<!--                                                    <span [innerHTML]=\"sec.options[k].options | sanitizeHtml\" class=\"remove-margin-bottom\"></span>-->\n<!--                                                </div>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                        <div *ngIf=\"sec.question_type_id == '5' || sec.question_type_id == '7'\" class=\"table-flexible\">-->\n<!--                                            <table [ngClass]=\"{'div-disable': studentContentStatus != '1' && studentContentStatus != '2'}\" class=\"table px-3 table-bordered text-center mt-3 mb-3\">-->\n<!--                                                <thead>-->\n<!--                                                <tr>-->\n<!--                                                    <th>Questions</th>-->\n<!--                                                    <th *ngFor=\"let list of sec.answer; let l=index\" [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\"></th>-->\n<!--                                                </tr>-->\n<!--                                                </thead>-->\n<!--                                                <tbody>-->\n<!--                                                <tr *ngFor=\"let list of sec.given_answer; let k=index\">-->\n<!--                                                    <td [innerHTML]=\"list.options\" class=\"remove-margin-bottom\"></td>-->\n<!--                                                    <td *ngFor=\"let ans of sec.answer; let l=index\">-->\n<!--                                                        <input (click)=\"cfsGetChooseTable(sec, j, k, l)\" *ngIf=\"sec.question_type_id == '5'\" [checked]=\"sec.given_answer[k].isSelected == '' ? false : sec.given_answer[k].isSelected == l.toString()\" class=\"radio_animated\" name=\"{{i}}choose{{k}}passas{{j}}\" type=\"radio\">-->\n<!--                                                        <input (click)=\"cfsGetChooseTable(sec, j, k, l)\" *ngIf=\"sec.question_type_id == '7'\" [checked]=\"splitMultiChoose(sec.given_answer[k].isSelected, l)\" type=\"checkbox\">-->\n<!--                                                    </td>-->\n<!--                                                </tr>-->\n<!--                                                </tbody>-->\n<!--                                            </table>-->\n\n<!--                                            <div class=\"col-md-12 my-4 px-0 table-flexible\" *ngIf=\"sec.is_correct == 'true' || sec.is_correct == 'false'\">-->\n<!--                                                <label><strong>Correct Answer :</strong></label>-->\n<!--                                                <table class=\"table table-bordered text-center div-disable\">-->\n<!--                                                    <thead>-->\n<!--                                                    <tr>-->\n<!--                                                        <th>Questions</th>-->\n<!--                                                        <th *ngFor=\"let list of sec.answer; let k=index\" [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\"></th>-->\n<!--                                                    </tr>-->\n<!--                                                    </thead>-->\n<!--                                                    <tbody>-->\n<!--                                                    <tr *ngFor=\"let list of sec.given_answer; let j=index\">-->\n<!--                                                        <td [innerHTML]=\"list.options | sanitizeHtml\" class=\"remove-margin-bottom\"></td>-->\n<!--                                                        <td *ngFor=\"let ans of sec.answer; let k=index\">-->\n<!--                                                            <input *ngIf=\"sec.question_type_id == '5'\" [checked]=\"sec.heading_option[j].correctActive === k\" class=\"radio_animated\" name=\"{{i}}choosesingleCorrect{{j}}corect\" type=\"radio\">-->\n<!--                                                            <input *ngIf=\"sec.question_type_id == '7'\" [checked]=\"patchCorrectMultiChoiceAnswer(sec.heading_option, k , j)\" id=\"chooseMultipass{{i}}{{j}}{{k}}\" type=\"checkbox\">-->\n<!--                                                        </td>-->\n<!--                                                    </tr>-->\n<!--                                                    </tbody>-->\n<!--                                                </table>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                        <div *ngIf=\"sec.question_type_id == '10'\">-->\n<!--                                            <div *ngFor=\"let data of sec.given_answer;let k = index\" class=\"col-md-6 mt-3 mb-3 px-1\">-->\n<!--                                                <label>Input - {{k+1}}</label>-->\n<!--                                                <input (input)=\"cfsGetInput($event, j, k, sec)\" *ngIf=\"sec.editor_type == 1\"-->\n<!--                                                       [readOnly]=\"studentContentStatus != '1' && studentContentStatus != '2'\"-->\n<!--                                                       [value]=\"data.isSelected\" class=\"form-control\" type=\"text\">-->\n<!--                                                <app-tiny-mice (emitEditorValue)=\"cfsGetInput($event, j, k, sec)\" *ngIf=\"sec.editor_type != 1\" [editorPatchValue]= \"data.isSelected == '' ? false : data.isSelected\"-->\n<!--                                                               [height]=\"120\"-->\n<!--                                                               [id]=\"j+'inputPass'+k+'ssa'+i\"-->\n<!--                                                               [readonly]=\"studentContentStatus != '1' && studentContentStatus != '2'\"-->\n<!--                                                               [showDropBtn]=\"false\"-->\n<!--                                                               [showInputBtn]=\"false\"-->\n<!--                                                               class=\"mt-2\">-->\n<!--                                                </app-tiny-mice>-->\n<!--                                            </div>-->\n\n<!--                                            <div class=\"col-md-12 mt-5 px-0\" *ngIf=\"sec.is_correct == 'true' || sec.is_correct == 'false'\">-->\n<!--                                                <label><b>Correct Answer</b></label>-->\n<!--                                                <div *ngFor=\"let data of sec.options; let j = index\" class=\"col-md-6 mt-3 mb-3\">-->\n<!--                                                    <label>Input - {{j+1}}</label>-->\n<!--                                                    <div class=\"form-span\">-->\n<!--                                                        <div [innerHTML]=\"data.options[0].value | sanitizeHtml\"></div>-->\n<!--                                                    </div>-->\n<!--                                                </div>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                        <div *ngIf=\"sec.question_type_id == '20'\" class=\"mt-3 mb-2\">-->\n<!--                                            <app-tiny-mice (emitEditorValue)=\"cfsGetPassageEssay($event, j, sec)\" [editorPatchValue]= \"sec.given_answer[0]?.isSelected == '' ? false : sec.given_answer[0]?.isSelected\"-->\n<!--                                                           [height]=\"200\"-->\n<!--                                                           [id]=\"j+'essayPass'\"-->\n<!--                                                           [readonly]=\"studentContentStatus != '1' && studentContentStatus != '2'\"-->\n<!--                                                           [showDropBtn]=\"false\"-->\n<!--                                                           [showInputBtn]=\"false\"-->\n<!--                                                           class=\"mt-2\">-->\n<!--                                            </app-tiny-mice>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                                <div *ngIf=\"item.question_type_id == 28\" class=\"mt-4 px-3 mb-3\">-->\n<!--                                    <app-tiny-mice (emitEditorValue)=\"cfsGetHighlight($event, i)\" [editorPatchValue]= \"item.given_answer[0]?.isSelected == '' ? item.options[0].options : item.given_answer[0]?.isSelected\"-->\n<!--                                                   [height]=\"120\"-->\n<!--                                                   [id]=\"i+'delta'\"-->\n<!--                                                   [readonly]=\"studentContentStatus != '1' && studentContentStatus != '2'\"-->\n<!--                                                   [showDropBtn]=\"false\"-->\n<!--                                                   [showInputBtn]=\"false\"-->\n<!--                                                   class=\"mt-2\">-->\n<!--                                    </app-tiny-mice>-->\n<!--                                </div>-->\n<!--                                <div *ngIf=\"item.question_type_id == 40 || item.question_type_id == 41\" class=\"mt-4 mb-4\">-->\n<!--                                    <div class=\"col-12 mt-0 d-flex justify-content-center\">-->\n<!--                                        <app-graph-component (valueChange)=\"cfsgetGraphValue($event, i)\"-->\n<!--                                                             [editMode]=\"studentContentStatus == '1' || studentContentStatus == '2'\"-->\n<!--                                                             [editPatchValue]=\"item.given_answer[0].correctAnswer ? parseVal(item.given_answer[0].correctAnswer) : false\"-->\n<!--                                                             [graphId]=\"'graphAnswering'+i\"-->\n<!--                                                             [questionType]=\"item.question_type_id\"></app-graph-component>-->\n<!--                                    </div>-->\n<!--                                    <div  class=\"col-md-12 mt-2\">-->\n<!--                                        <app-tiny-mice (emitEditorValue)=\"cfsGetGraghEditor($event, i)\" [editorPatchValue]= \"item.student_editor_answer == '' ? false : item.student_editor_answer\"-->\n<!--                                                       [height]=\"120\"-->\n<!--                                                       [id]=\"i+'explaino'\"-->\n<!--                                                       [readonly]=\"studentContentStatus != '1' && studentContentStatus != '2'\"-->\n<!--                                                       [showDropBtn]=\"false\"-->\n<!--                                                       [showInputBtn]=\"false\"-->\n<!--                                                       class=\"mt-2\">-->\n<!--                                        </app-tiny-mice>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n\n<!--                        <div class=\"row mt-4\" *ngIf=\"studentContentStatus == '1' || studentContentStatus == '2'\" >-->\n<!--                            <div class=\"col-md-12\">-->\n<!--                                <button class=\"btn pull-right btn-primary ml-3\" (click)=\"checkLastQuestion(i, last)\">Next <i class=\"fa fa-long-arrow-right ml-1\"></i></button>-->\n<!--                                <button class=\"btn pull-right btn-outline-primary\" (click)=\"tryAgainButton()\" *ngIf=\"checkQuestionId(item)?.is_correct == 'partially-completed' && !tryAgainButtonEnabled\">Try Again <i class=\"fa fa-repeat ml-1\" aria-hidden=\"true\"></i></button>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n\n<!--                    <div class=\"card px-3 pt-3 pb-4\">-->\n<!--                        <div class=\"card-body\">-->\n<!--                            <div class=\"row\">-->\n<!--                                <label class=\"ml-2\"><strong>WorkSpace :</strong></label>-->\n<!--                                <div class=\"col-12 px-3\">-->\n<!--                                    <app-tiny-mice (emitEditorValue)=\"getWorkSpaceValue($event, i)\"-->\n<!--                                                   [editorPatchValue]=\"item.PatchData && item.question_type_id != '24' ? item.student_roughdata :-->\n<!--                                            item.PatchData && item.question_type_id == '24' ? item.subQuestions[0]?.student_roughdata :false\"-->\n<!--                                                   [height]=\"140\"-->\n<!--                                                   [readonly]=\"studentContentStatus != '1' && studentContentStatus != '2'\"-->\n<!--                                                   [showDropBtn]=\"false\"-->\n<!--                                                   [showInputBtn]=\"false\">-->\n<!--                                    </app-tiny-mice>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n\n<!--                    <div class=\"card p-3\">-->\n<!--                        <div class=\"card-body\">-->\n<!--                            <div class=\"row\">-->\n<!--                                <label class=\"ml-2\"><strong>FeedBack :</strong></label>-->\n<!--                                <div class=\"col-12 px-3\">-->\n<!--                                <textarea (input)=\"getQueries($event, i, 0, 'scratch')\" [readOnly]=\"studentContentStatus != '1' && studentContentStatus != '2'\"-->\n<!--                                          [value]=\"item.question_type_id != '24' ? item.student_feedback : item.subQuestions[0]?.student_feedback\" class=\"form-control\" cols=\"30\" placeholder=\"Please Enter the Feedback\" rows=\"3\"></textarea>-->\n<!--                                </div>-->\n<!--                            </div>-->\n\n<!--                            <div class=\"row mt-3\">-->\n<!--                                <div class=\"col-md-12\">-->\n<!--                                    <button (click)=\"submitQueries(i, 0, 'scratch')\" *ngIf=\"queries != '' && queriesIndex == 'id'+i\" class=\"pull-right btn btn-primary\">Submit</button>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n\n<!--                    <div class=\"row\">-->\n<!--                        <div class=\"col-12\">-->\n<!--                            <label><strong>Overall FeedBack:</strong></label>-->\n<!--                            <textarea [(ngModel)]=\"totalFeedBack\" class=\"form-control\" [readOnly]=\"studentContentStatus != '1' && studentContentStatus != '2'\"-->\n<!--                                      placeholder=\"Please Enter the Overall Feedback\" cols=\"30\" rows=\"3\"></textarea>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--            <div class=\"col-3\" *ngIf=\"showQuestion == i\">-->\n<!--                <div class=\"card\">-->\n<!--                    <div class=\"card-body\" style=\"background: #ececec\">-->\n<!--                        <div class=\"row\">-->\n<!--                            <div class=\"col-12 d-flex justify-content-center pr-0\">-->\n<!--                                <h5 class=\"mt-2\">Question Answered</h5>-->\n<!--                            </div>-->\n<!--                            <div class=\"col-12 paddingDetails\">-->\n<!--                                <div class=\"card align-items-center px-4 py-5\">-->\n<!--                                    <h4><b>{{numOfQuestionAnswered()}}</b></h4>-->\n<!--                                    <h4></h4>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--                <div class=\"card\">-->\n<!--                    <div class=\"card-body\" style=\"background: #ececec\">-->\n<!--                        <div class=\"row\">-->\n<!--                            <div class=\"col-12 d-flex justify-content-center\">-->\n<!--                                <h5 class=\"mt-2\">Time Elapsed</h5>-->\n<!--                            </div>-->\n<!--                            <div class=\"col-12 paddingDetails\">-->\n<!--                                <div class=\"card align-items-center px-4 py-5\">-->\n<!--                                    <h4 *ngIf=\"getElapsedTime() as elapsed\">-->\n<!--                                        <b> {{elapsed.hours}} {{elapsed.minutes}} {{elapsed.seconds}} </b>-->\n<!--                                    </h4>-->\n<!--                                    <h4></h4>-->\n<!--                                    <h5><b>HR MIN SEC</b></h5>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--                <div class=\"card\">-->\n<!--                    <div class=\"card-body\" style=\"background: #ececec\">-->\n<!--                        <div class=\"row\">-->\n<!--                            <div class=\"col-12 d-flex justify-content-center\">-->\n<!--                                <h5 class=\"mt-2\">Score</h5>-->\n<!--                            </div>-->\n<!--                            <div class=\"col-12 paddingDetails\">-->\n<!--                                <div class=\"card align-items-center px-4 py-5\">-->\n<!--                                    <h4><b>{{checkAutoGradeQns == '2' && (studentContentStatus == '1' || studentContentStatus == '2') ? percentage : '-'}}</b></h4>-->\n<!--                                    <h4></h4>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--        </div>-->\n<!--    </section>-->\n\n    <div class=\"row\">\n        <div class=\"col-12 mr-0 pr-0 pb-2\" *ngIf=\"totalAns.length > 1\">\n            <div class=\"scoll-component\">\n                <div class=\"total-items\">\n                    <span>{{totalAns.length}} Questions</span>\n                </div>\n                <div class=\"scoll-container\">\n                    <div #scrollContent id=\"scrollContent\" class=\"scroll-content\" (scroll)=\"onScroll()\">\n                        <button #leftArrow class=\"arrow left-arrow arrowStyle\" (click)=\"onClickScrollLeft()\"><<</button>\n\n                        <div class=\"scroll-items\" *ngFor=\"let list of totalAns; let i = index\" id=\"questionNo{{i}}\">\n                            <span class=\"round-question pl-2 pr-2 pt-1 pb-1 ml-3 my-2\"\n                                  (click)=\"checkWhetherSaveIsNeeded(list, i, 'qnsNumber')\"\n                                  [ngClass]=\"{'bg-green':checkQuestionId(list)?.is_correct == 'true', 'bg-partially': checkQuestionId(list)?.is_correct == 'partially-completed' || checkQuestionId(list)?.is_correct == 'manual',\n                                  'bg-red':checkQuestionId(list)?.is_correct == 'false' || !correctAnswer, 'black':(checkQuestionId(list)?.is_correct == '' || checkQuestionId(list)?.is_correct == null) && showQuestion != i,\n                                  'selectedQuestion':(checkQuestionId(list)?.is_correct == '' || checkQuestionId(list)?.is_correct == null) && showQuestion == i }\">\n                                {{i + 1}}\n                            </span>\n                        </div>\n\n                        <button #rightArrow class=\"arrow right-arrow arrowStyle\" (click)=\"onClickScrollRight()\">>>\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-12 mb-0 pl-0\" *ngIf=\"scratchQuestionData?.file_text && scratchQuestionData?.file_text != ''\">\n            <div class=\"card ml-3 mr-0\"\n                 style=\"overflow-y: auto; max-height: 25vh; border-bottom: 3px solid #e6baea !important; border-right: 3px solid #e6baea !important\">\n                <div class=\"card-body py-3 px-4\">\n                    <h4 class=\"mb-3 font-weight-bold\">Description:</h4>\n                    <div class=\"ml-2\">\n                        <span [innerHTML]=\"scratchQuestionData.file_text | sanitizeHtml\"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <section>\n        <div class=\"row view-question\" *ngFor=\"let item of totalAns; let i = index; let last = last\">\n            <div class=\"px-0 mb-2 {{isSingleQnsWithFeedbackType ? 'col-md-12' :\n                totalAns.length == 1 && totalAns[0].question_type_id != '55' ? 'col-md-9' : 'col-md-9'}}\" *ngIf=\"showQuestion == i\">\n                <div class=\"container-fluid\">\n                    <div *ngIf=\"checkQuestionId(item)?.is_correct == 'true' || checkQuestionId(item)?.is_correct == 'false' || !correctAnswer\">\n                        <div class=\"alert alert-{{checkQuestionId(item)?.is_correct == 'false'|| !correctAnswer ? 'danger' : 'success'}} alert-dismissible fade show\">\n                            <strong> {{checkQuestionId(item)?.is_correct == 'false' || !correctAnswer ? 'You have entered Incorrect Answer !' : 'Great Response ! You have entered Correct Answer'}}</strong>\n                            .\n                        </div>\n                    </div>\n                    <div class=\"card p-5\">\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <div class=\"col-12 col-md-12\" *ngIf=\"item.question_type_id != 24\">\n                                    <div class=\"row\">\n                                        <div style=\"width: 4%\">\n                                            <button class=\"btn-primary px-2 py-1\">{{i + 1}}</button>\n                                        </div>\n                                        <div style=\"width: 96%\">\n                                            <div class=\"inner\" *ngIf=\"item.question != '' && item.question_type_id != 24 && item.question_type_id != 55\">\n                                                <b><h3 [innerHTML]=\"item.question | sanitizeHtml\" class=\"mb-0 overflow-auto\"></h3></b>\n                                            </div>\n                                            <div class=\"inner\" *ngIf=\"item.question != '' && item.question_type_id == 55\">\n                                                <div ngbAccordion  class=\"question_type\">\n                                                    <div ngbAccordionItem=\"{{item.question_type_id}}\" #accordion=\"ngbAccordionItem\" [collapsed]=\"false\">\n                                                        <h2 ngbAccordionHeader>\n                                                            <button class=\"btn btn-link d-flex align-items-center justify-content-between p-2 w-100\"\n                                                                    ngbAccordionToggle>\n                                                                <h4 style=\"font-size: 16px\" class=\"m-0\" [innerHTML]=\"convertMarkdownToHtml(item.question, accordion.collapsed ? 20 : 0)\"></h4>\n                                                                <div class=\"d-flex align-items-center justify-content-between\">\n                                                                    <i *ngIf=\"accordion.collapsed; else uparrow\" aria-hidden=\"true\" class=\"fa fa-caret-down\"></i>\n                                                                </div>\n                                                                <ng-template #uparrow><i aria-hidden=\"true\" class=\"fa fa-caret-up\"></i></ng-template>\n                                                            </button>\n                                                        </h2>\n\n                                                        <div ngbAccordionCollapse>\n                                                            <div ngbAccordionBody>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-md-12\" *ngIf=\"item.question_type_id == 24 && item.question != ''\">\n                                    <div class=\"mx-3 custom-card question-page1\" style=\"overflow-x: scroll;max-height: 60vh;\">\n                                        <span [innerHTML]=\"item.editor_context | sanitizeHtml\"\n                                              class=\"innerhtml-margin-clear\"></span>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12\" *ngIf=\"item.question_type_id == 24\">\n                                    <button style=\"width: 5%\" class=\"btn-primary w-auto h-20 px-2 py-1\">{{i + 1}}</button>\n                                    <div *ngIf=\"item.subQuestions[0]?.passage != '' && item.subQuestions[0]?.passage\" class=\"mx-3 question-page1 px-3 py-2\"\n                                         style=\"overflow-x: scroll;max-height: 60vh; border: 2px solid #e6baea !important;border-radius: 4px;\">\n                                        <span [innerHTML]=\"item.subQuestions[0]?.passage | sanitizeHtml\"\n                                              class=\"innerhtml-margin-clear\"></span>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <div *ngIf=\"item.question_type_id == 1 || item.question_type_id == 2\"\n                                         [ngClass]=\"{'div-disable': checkDisableConditionForQns(item)}\" class=\"mt-4\">\n                                        <div class=\"col-md-12 mb-2\">\n                                            <div (click)=\"cfsGetMultiChoice(i, k, item)\"\n                                                 *ngFor=\"let option of item.given_answer; let k = index\"\n                                                 [ngClass]=\"{'student-selected' : k.toString() == option.isSelected}\"\n                                                 class=\"dropdown-list overflow-auto col-md-5 mb-3 mx-3 p-2\"\n                                                 style=\"max-height: 20rem\"><span [innerHTML]=\"option.options | sanitizeHtml\"\n                                                                                 class=\"remove-margin-bottom\"></span></div>\n                                        </div>\n                                        <div class=\"col-md-12 mt-4 mb-2\"\n                                             *ngIf=\"item.is_correct == 'true' || item.is_correct == 'false'\">\n                                            <label><strong>Correct Answer</strong></label>\n                                            <div *ngFor=\"let option of item.answer; let k = index\"\n                                                 [ngClass]=\"{'student-selected' : option.correctAnswer != ''}\"\n                                                 class=\"dropdown-list col-md-5 mb-3 mx-3 p-2 overflow-y-scroll\"\n                                                 style=\"max-height: 20rem\">\n                                            <span [innerHTML]=\"item.options[k].options | sanitizeHtml\"\n                                                  class=\"remove-margin-bottom\"></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 5 || item.question_type_id == 7\"\n                                         [ngClass]=\"{'div-disable': checkDisableConditionForQns(item)}\"\n                                         class=\"mt-4 px-3 table-flexible\">\n                                        <table class=\"table table-bordered text-center\">\n                                            <thead>\n                                            <tr>\n                                                <th>Questions</th>\n                                                <th *ngFor=\"let list of item.answer; let k=index\"\n                                                    [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\"\n                                                    id=\"{{'columnId' + i}}\"></th>\n                                            </tr>\n                                            </thead>\n                                            <tbody>\n                                            <tr *ngFor=\"let list of item.given_answer; let j=index\">\n                                                <td [innerHTML]=\"list.options | sanitizeHtml\"\n                                                    class=\"remove-margin-bottom\"></td>\n                                                <td *ngFor=\"let ans of item.answer; let k=index\">\n                                                    <input (click)=\"cfsGetChooseTable(item, i, j, k)\"\n                                                           *ngIf=\"item.question_type_id == '5'\"\n                                                           [checked]=\"this.totalAns[i].given_answer[j].isSelected == '' ? false : this.totalAns[i].given_answer[j].isSelected == k.toString()\"\n                                                           class=\"cursor radio_animated\" id=\"{{j}}chooseSingle{{i}}\"\n                                                           name=\"{{i}}choosesingle{{j}}corect\" type=\"radio\">\n                                                    <input (click)=\"cfsGetChooseTable(item, i, j, k)\"\n                                                           *ngIf=\"item.question_type_id == '7'\"\n                                                           [checked]=\"splitMultiChoose(this.totalAns[i].given_answer[j].isSelected, k)\"\n                                                           id=\"{{j}}chooseMulti{{i}}\" class=\"cursor\" type=\"checkbox\">\n                                                </td>\n                                            </tr>\n                                            </tbody>\n                                        </table>\n\n\n                                        <div class=\"col-md-12 my-4 px-0 table-flexible\"\n                                             *ngIf=\"item.is_correct == 'true' || item.is_correct == 'false'\">\n                                            <label><strong>Correct Answer</strong></label>\n                                            <table class=\"table table-bordered text-center div-disable\">\n                                                <thead>\n                                                <tr>\n                                                    <th>Questions</th>\n                                                    <th *ngFor=\"let list of item.answer; let k=index\"\n                                                        [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\"></th>\n                                                </tr>\n                                                </thead>\n                                                <tbody>\n                                                <tr *ngFor=\"let list of item.given_answer; let j=index\">\n                                                    <td [innerHTML]=\"list.options | sanitizeHtml\"\n                                                        class=\"remove-margin-bottom\"></td>\n                                                    <td *ngFor=\"let ans of item.answer; let k=index\">\n                                                        <input *ngIf=\"item.question_type_id == '5'\"\n                                                               [checked]=\"item.heading_option[j].correctActive === k\"\n                                                               class=\"radio_animated\"\n                                                               name=\"{{i}}choosesingleCorrect{{j}}corect\" type=\"radio\">\n                                                        <input *ngIf=\"item.question_type_id == '7'\"\n                                                               [checked]=\"patchCorrectMultiChoiceAnswer(item.heading_option, k , j)\"\n                                                               id=\"chooseMultipass{{i}}{{j}}{{k}}\" type=\"checkbox\">\n                                                    </td>\n                                                </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 9\" class=\"mt-4\"\n                                         [ngClass]=\"{'div-disable': checkDisableConditionForQns(item)}\">\n                                        <div *ngFor=\"let data of item.given_answer; let j = index\"\n                                             class=\"col-md-6 mt-3 mb-3\">\n                                            <label>Dropdown - {{j + 1}}</label>\n                                            <div class=\"col-md-11 dropdown\">\n                                                <button type=\"button\" [id]=\"i + 'dropdown' + j\"\n                                                        [innerHTML]=\"data.isSelected === '' ? 'Select Answer' : data.options[data.isSelected].correctAnswer | sanitizeHtml\"\n                                                        class=\"col-md-12 bg-white innerhtml-margin-clear p-2 dropdown-border dropdown-toggle d-flex justify-content-between\"\n                                                        data-toggle=\"dropdown\"></button>\n                                                <div class=\"col-md-11 dropdown-menu\">\n                                                <span (click)=\"cfsGetDropdown($event, i, j, '', 'Select Answer')\"\n                                                      class=\"dropdown-item dropdown-link cursor\">Select Answer</span>\n                                                    <span (click)=\"cfsGetDropdown($event, i, j, k, list.listOption)\"\n                                                          *ngFor=\"let list of data.options; let k = index\"\n                                                          [innerHTML]=\"list.listOption | sanitizeHtml\"\n                                                          class=\"dropdown-item dropdown-link innerhtml-margin-clear\"\n                                                          style=\"overflow: scroll; overflow-y: hidden\"></span>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-md-12 mt-5 px-0\"\n                                             *ngIf=\"item.is_correct == 'true' || item.is_correct == 'false'\">\n                                            <label><b>Correct Answer</b></label>\n                                            <div *ngFor=\"let data of item.answer; let j = index\" class=\"col-md-6 mt-2 mb-3\">\n                                                <label>Dropdown - {{j + 1}}</label>\n                                                <div class=\"col-md-11\">\n                                                    <div class=\"col-md-12 bg-white innerhtml-margin-clear p-2 dropdown-border dropdown-toggle d-flex justify-content-between\"\n                                                         data-toggle=\"dropdown\" id=\"dropdown{{j}}\"></div>\n                                                    <div class=\"col-md-12 dropdown-menu\">\n                                                        <span class=\"dropdown-item dropdown-link overflow-auto\">Select Answer</span>\n                                                        <span *ngFor=\"let option of item.options; let k = index\"\n                                                              [innerHTML]=\"option.listOption | sanitizeHtml\"\n                                                              class=\"dropdown-item overflow-auto dropdown-link innerhtml-margin-clear\"></span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 10\" class=\"mt-4\"\n                                         [ngClass]=\"{'div-disable': checkDisableConditionForQns(item)}\">\n                                        <div *ngFor=\"let data of item.given_answer; let j = index\"\n                                             class=\"col-md-6 mt-3 mb-3\">\n                                            <label>Input - {{j + 1}}</label>\n                                            <input (input)=\"cfsGetInput($event, i, j, item)\" *ngIf=\"item.editor_type == 1\"\n                                                   placeholder=\"Enter the Answer\"\n                                                   [readOnly]=\"studentContentStatus != '1' && studentContentStatus != '2'\"\n                                                   [value]=\"data.isSelected\" class=\"form-control\" type=\"text\">\n                                            <app-tiny-mice (emitEditorValue)=\"cfsGetInput($event, i, j, item)\"\n                                                           *ngIf=\"item.editor_type != 1\"\n                                                           [editorPatchValue]=\"data.isSelected == '' ? false : data.isSelected\"\n                                                           [height]=\"100\"\n                                                           [id]=\"i+'input'+j\"\n                                                           [readonly]=\"studentContentStatus != '1' && studentContentStatus != '2'\"\n                                                           [showDropBtn]=\"false\"\n                                                           [showInputBtn]=\"false\"\n                                                           class=\"mt-2\">\n                                            </app-tiny-mice>\n                                        </div>\n\n                                        <div class=\"col-md-12 mt-5 px-0\"\n                                             *ngIf=\"item.is_correct == 'true' || item.is_correct == 'false'\">\n                                            <label><b>Correct Answer</b></label>\n                                            <div *ngFor=\"let data of item.options; let j = index\"\n                                                 class=\"col-md-6 mt-3 mb-3\">\n                                                <label>Input - {{j + 1}}</label>\n                                                <div class=\"form-span\">\n                                                    <div [innerHTML]=\"data.options[0].value | sanitizeHtml\"></div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 16\" class=\"mt-4\"\n                                         [ngClass]=\"{'div-disable': checkDisableConditionForQns(item)}\">\n                                        <div class=\"col-md-6\">\n                                            <div (cdkDropListDropped)=\"droppedCorrect($event, i)\" cdkDropList\n                                                 class=\"col-12\">\n                                                <div *ngFor=\"let list of item.given_answer; let k=index\"\n                                                     class=\"input-group mb-3 mt-3 inputMenu\">\n                                                    <div cdkDrag class=\"input-group mb-1 inputMenu\">\n                                                        <div class=\"input-group-prepend\">\n                                            <span class=\"input-group-text\">\n                                                <img class=\"img-fluid\" src=\"assets/images/pdf-icons/equal@2x.png\">\n                                            </span>\n                                                        </div>\n                                                        <h4 [innerHTML]=\"list.options | sanitizeHtml\"\n                                                            class=\"form-control mb-0 pt-4 pb-5 overflow-auto\"></h4>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-md-12 mt-5\"\n                                             *ngIf=\"item.is_correct == 'true' || item.is_correct == 'false'\">\n                                            <label><b>Correct Answer</b></label>\n                                            <div class=\"col-6\">\n                                                <div *ngFor=\"let list of item.answer; let k=index\"\n                                                     class=\"input-group mb-3 mt-3 inputMenu\">\n                                                    <div class=\"input-group mb-1 inputMenu\">\n                                                        <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">\n                                            <img class=\"img-fluid\" src=\"assets/images/pdf-icons/equal@2x.png\">\n                                        </span>\n                                                        </div>\n                                                        <h4 [innerHTML]=\"list.correctAnswer | sanitizeHtml\"\n                                                            class=\"form-control mb-0 pt-4 pb-5 overflow-auto\"></h4>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"['20'].indexOf(item.question_type_id) > -1\" class=\"mt-4 px-3 mb-3\">\n                                        <app-tiny-mice (emitEditorValue)=\"cfsGetPara($event, i)\"\n                                                       [editorPatchValue]=\"item.given_answer[0].isSelected == '' ? false : item.given_answer[0].isSelected\"\n                                                       [height]=\"120\"\n                                                       [id]=\"i+'para'\"\n                                                       [readonly]=\"studentContentStatus != '1' && studentContentStatus != '2'\"\n                                                       [showDropBtn]=\"false\"\n                                                       [showInputBtn]=\"false\"\n                                                       class=\"mt-2\">\n                                        </app-tiny-mice>\n                                    </div>\n                                    <div class=\"mt-4 row ml-4 pl-3\" *ngIf=\"['55'].indexOf(item.question_type_id) > -1\" >\n                                        <div class=\"text-area pl-0 col-{{previousFeedBack.length == 0 ? '12' : '9'}}\">\n                                            <textarea class=\"form-control\" rows=\"{{previousFeedBack.length < maximumAllowedCount ? '24' : '21'}}\" [ngModel]=\"getEssayAnswer(item)\"\n                                                      (ngModelChange)=\"onEssayAnswerChange(item, $event)\"\n                                                      [readonly]=\"selectedFeedBackIndex != 0 && selectedFeedBackIndex != '' || (studentContentStatus != '1' && studentContentStatus != '2')\"\n                                                      [ngModelOptions]=\"{standalone: true}\" placeholder=\"Please enter your answer\"></textarea>\n                                            <div class=\"word-count\">\n                                                <span class=\"mr-2\">{{wordCount(item)}}&nbsp;Words</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-3\" *ngIf=\"previousFeedBack.length != 0\">\n                                            <div class=\"col-12 sidebar-widget\">\n                                                <h5 class=\"font-weight-bold\">Version History</h5>\n                                                <ul class=\"widget-post pt-15\">\n                                                    <li (click)=\"feedbackSelected('current')\" *ngIf=\"!feedbackServiceCalled\" [ngClass]=\"{'active': selectedFeedBackIndex === ''}\">\n                                                        <a>Current Version</a>\n                                                    </li>\n                                                    <li *ngFor=\"let feedback of previousFeedBack; let i = index\" [ngClass]=\"{'active': selectedFeedBackIndex === previousFeedBack.length - i}\"\n                                                        (click)=\"feedbackSelected(feedback)\">\n                                                        <a class=\"d-flex align-items-center justify-content-between\">Version {{previousFeedBack.length - i}}\n                                                            <span class=\"badge\" [ngClass]=\"{'badge-exceptional': getFeedbackLabel(feedback).label === 'Exceptional', 'badge-good': getFeedbackLabel(feedback).label === 'Good',\n                                                                'badge-improve': getFeedbackLabel(feedback).label === 'Improve'}\">{{getFeedbackLabel(feedback).label}}</span></a>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"col-12 resource-link-card mt-3\" *ngIf=\"previousFeedBack.length < maximumAllowedCount\">\n                                                <span class=\"text-info\">You can use Request For Feedback\n                                                    <strong>&nbsp;{{maximumAllowedCount - previousFeedBack.length}}&nbsp;</strong>more times!\n                                                </span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 24\" class=\"mt-4\"\n                                         [ngClass]=\"{'div-disable': checkDisableConditionForQns(item)}\">\n                                        <div *ngFor=\"let sec of item.subQuestions; let j = index\" class=\"mb-3\">\n                                            <div class=\"row d-flex justify-content-start\">\n                                                <div>\n                                                    <button class=\"btn-outline-primary question-no-big\">{{j + 1}}</button>\n                                                </div>\n                                                <div class=\"pl-4 align-self-center passage-inner\"\n                                                     [innerHTML]=\"sec.question | sanitizeHtml\"></div>\n                                            </div>\n                                            <div *ngIf=\"sec.question_type_id == '1' || sec.question_type_id == '2'\"\n                                                 class=\"mt-3\">\n                                                <div [ngClass]=\"{'div-disable': studentContentStatus != '1' && studentContentStatus != '2'}\"\n                                                     class=\"row mb-2\">\n                                                    <div (click)=\"cfsPassageMultiChoice(i, j, k, sec)\"\n                                                         *ngFor=\"let option of sec.given_answer; let k = index\"\n                                                         [ngClass]=\"{'student-selected' : option.isSelected == k.toString()}\"\n                                                         class=\"dropdown-list overflow-auto col-md-6 mb-3 mx-3 p-2\"\n                                                         style=\"max-height: 20rem\"><span\n                                                            [innerHTML]=\"option.options | sanitizeHtml\"\n                                                            class=\"remove-margin-bottom\"></span></div>\n                                                </div>\n                                                <div class=\"col-md-12 mt-4 mb-2 px-0\"\n                                                     *ngIf=\"sec.is_correct == 'true' || sec.is_correct == 'false'\">\n                                                    <label><strong>Correct Answer :</strong></label>\n                                                    <div *ngFor=\"let option of sec.answer; let k = index\"\n                                                         [ngClass]=\"{'student-selected' : option.correctAnswer !== ''}\"\n                                                         class=\"dropdown-list col-md-6 mb-3 mx-3 p-2 overflow-y-scroll\"\n                                                         style=\"max-height: 20rem\">\n                                                    <span [innerHTML]=\"sec.options[k].options | sanitizeHtml\"\n                                                          class=\"remove-margin-bottom\"></span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"sec.question_type_id == '5' || sec.question_type_id == '7'\"\n                                                 class=\"table-flexible\">\n                                                <table [ngClass]=\"{'div-disable': studentContentStatus != '1' && studentContentStatus != '2'}\"\n                                                       class=\"table px-3 table-bordered text-center mt-3 mb-3\">\n                                                    <thead>\n                                                    <tr>\n                                                        <th>Questions</th>\n                                                        <th *ngFor=\"let list of sec.answer; let l=index\"\n                                                            [innerHTML]=\"list | sanitizeHtml\"\n                                                            class=\"remove-margin-bottom\"></th>\n                                                    </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                    <tr *ngFor=\"let list of sec.given_answer; let k=index\">\n                                                        <td [innerHTML]=\"list.options\" class=\"remove-margin-bottom\"></td>\n                                                        <td *ngFor=\"let ans of sec.answer; let l=index\">\n                                                            <input (click)=\"cfsGetChooseTable(sec, j, k, l)\"\n                                                                   *ngIf=\"sec.question_type_id == '5'\"\n                                                                   [checked]=\"sec.given_answer[k].isSelected == '' ? false : sec.given_answer[k].isSelected == l.toString()\"\n                                                                   class=\"radio_animated\" name=\"{{i}}choose{{k}}passas{{j}}\"\n                                                                   type=\"radio\">\n                                                            <input (click)=\"cfsGetChooseTable(sec, j, k, l)\"\n                                                                   *ngIf=\"sec.question_type_id == '7'\"\n                                                                   [checked]=\"splitMultiChoose(sec.given_answer[k].isSelected, l)\"\n                                                                   type=\"checkbox\">\n                                                        </td>\n                                                    </tr>\n                                                    </tbody>\n                                                </table>\n\n                                                <div class=\"col-md-12 my-4 px-0 table-flexible\"\n                                                     *ngIf=\"sec.is_correct == 'true' || sec.is_correct == 'false'\">\n                                                    <label><strong>Correct Answer :</strong></label>\n                                                    <table class=\"table table-bordered text-center div-disable\">\n                                                        <thead>\n                                                        <tr>\n                                                            <th>Questions</th>\n                                                            <th *ngFor=\"let list of sec.answer; let k=index\"\n                                                                [innerHTML]=\"list | sanitizeHtml\"\n                                                                class=\"remove-margin-bottom\"></th>\n                                                        </tr>\n                                                        </thead>\n                                                        <tbody>\n                                                        <tr *ngFor=\"let list of sec.given_answer; let j=index\">\n                                                            <td [innerHTML]=\"list.options | sanitizeHtml\"\n                                                                class=\"remove-margin-bottom\"></td>\n                                                            <td *ngFor=\"let ans of sec.answer; let k=index\">\n                                                                <input *ngIf=\"sec.question_type_id == '5'\"\n                                                                       [checked]=\"sec.heading_option[j].correctActive === k\"\n                                                                       class=\"radio_animated\"\n                                                                       name=\"{{i}}choosesingleCorrect{{j}}corect\"\n                                                                       type=\"radio\">\n                                                                <input *ngIf=\"sec.question_type_id == '7'\"\n                                                                       [checked]=\"patchCorrectMultiChoiceAnswer(sec.heading_option, k , j)\"\n                                                                       id=\"chooseMultipass{{i}}{{j}}{{k}}\" type=\"checkbox\">\n                                                            </td>\n                                                        </tr>\n                                                        </tbody>\n                                                    </table>\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"sec.question_type_id == '10'\">\n                                                <div *ngFor=\"let data of sec.given_answer;let k = index\"\n                                                     class=\"col-md-6 mt-3 mb-3 px-1\">\n                                                    <label>Input - {{k + 1}}</label>\n                                                    <input (input)=\"cfsGetInput($event, j, k, sec)\"\n                                                           *ngIf=\"sec.editor_type == 1\"\n                                                           [readOnly]=\"studentContentStatus != '1' && studentContentStatus != '2'\"\n                                                           [value]=\"data.isSelected\" class=\"form-control\" type=\"text\">\n                                                    <app-tiny-mice (emitEditorValue)=\"cfsGetInput($event, j, k, sec)\"\n                                                                   *ngIf=\"sec.editor_type != 1\"\n                                                                   [editorPatchValue]=\"data.isSelected == '' ? false : data.isSelected\"\n                                                                   [height]=\"120\"\n                                                                   [id]=\"j+'inputPass'+k+'ssa'+i\"\n                                                                   [readonly]=\"studentContentStatus != '1' && studentContentStatus != '2'\"\n                                                                   [showDropBtn]=\"false\"\n                                                                   [showInputBtn]=\"false\"\n                                                                   class=\"mt-2\">\n                                                    </app-tiny-mice>\n                                                </div>\n\n                                                <div class=\"col-md-12 mt-5 px-0\"\n                                                     *ngIf=\"sec.is_correct == 'true' || sec.is_correct == 'false'\">\n                                                    <label><b>Correct Answer</b></label>\n                                                    <div *ngFor=\"let data of sec.options; let j = index\"\n                                                         class=\"col-md-6 mt-3 mb-3\">\n                                                        <label>Input - {{j + 1}}</label>\n                                                        <div class=\"form-span\">\n                                                            <div [innerHTML]=\"data.options[0].value | sanitizeHtml\"></div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"sec.question_type_id == '20'\" class=\"mt-3 mb-2\">\n                                                <app-tiny-mice (emitEditorValue)=\"cfsGetPassageEssay($event, j, sec)\"\n                                                               [editorPatchValue]=\"sec.given_answer[0]?.isSelected == '' ? false : sec.given_answer[0]?.isSelected\"\n                                                               [height]=\"200\"\n                                                               [id]=\"j+'essayPass'\"\n                                                               [readonly]=\"studentContentStatus != '1' && studentContentStatus != '2'\"\n                                                               [showDropBtn]=\"false\"\n                                                               [showInputBtn]=\"false\"\n                                                               class=\"mt-2\">\n                                                </app-tiny-mice>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 28\" class=\"mt-4 px-3 mb-3\">\n                                        <app-tiny-mice (emitEditorValue)=\"cfsGetHighlight($event, i)\"\n                                                       [editorPatchValue]=\"item.given_answer[0]?.isSelected == '' ? item.options[0].options : item.given_answer[0]?.isSelected\"\n                                                       [height]=\"120\"\n                                                       [id]=\"i+'delta'\"\n                                                       [readonly]=\"studentContentStatus != '1' && studentContentStatus != '2'\"\n                                                       [showDropBtn]=\"false\"\n                                                       [showInputBtn]=\"false\"\n                                                       class=\"mt-2\">\n                                        </app-tiny-mice>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 40 || item.question_type_id == 41\"\n                                         class=\"mt-4 mb-4\">\n                                        <div class=\"col-12 mt-0 d-flex justify-content-center\">\n                                            <app-graph-component (valueChange)=\"cfsgetGraphValue($event, i)\"\n                                                                 [editMode]=\"studentContentStatus == '1' || studentContentStatus == '2'\"\n                                                                 [editPatchValue]=\"item.given_answer[0].correctAnswer ? parseVal(item.given_answer[0].correctAnswer) : false\"\n                                                                 [graphId]=\"'graphAnswering'+i\"\n                                                                 [questionType]=\"item.question_type_id\"></app-graph-component>\n                                        </div>\n                                        <div class=\"col-md-12 mt-2\">\n                                            <app-tiny-mice (emitEditorValue)=\"cfsGetGraghEditor($event, i)\"\n                                                           [editorPatchValue]=\"item.student_editor_answer == '' ? false : item.student_editor_answer\"\n                                                           [height]=\"120\"\n                                                           [id]=\"i+'explaino'\"\n                                                           [readonly]=\"studentContentStatus != '1' && studentContentStatus != '2'\"\n                                                           [showDropBtn]=\"false\"\n                                                           [showInputBtn]=\"false\"\n                                                           class=\"mt-2\">\n                                            </app-tiny-mice>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!--                        <div class=\"row mt-4 d-flex justify-content-end\"-->\n                        <!--                             *ngIf=\"studentContentStatus != '1' && studentContentStatus != '2' && previousFeedBack.length != 0\">-->\n                        <!--                            <select class=\"form-control select-design pull-right\" (click)=\"feedbackSelected($event.target.value)\">-->\n                        <!--                                <option value=\"\" selected disabled>Previous Feedbacks ({{previousFeedBack.length}})</option>-->\n                        <!--                                <option value=\"current\">Current Version</option>-->\n                        <!--                                <option [value]=\"feedback | json\"  *ngFor=\"let feedback of previousFeedBack\">-->\n                        <!--                                    <a class=\"cursor\">Feedback {{previousFeedBack.length - feedback.index}} <span *ngIf=\"feedback?.created_date\"> ({{feedback?.created_date | customDateFormat}} | {{feedback?.created_date | date:'h:mm a'}}) </span></a>-->\n                        <!--                                </option>-->\n                        <!--                            </select>-->\n                        <!--                        </div>-->\n\n                        <div class=\"row mt-4 d-flex justify-content-end\"\n                             *ngIf=\"studentContentStatus == '1' || studentContentStatus == '2'\">\n                            <div class=\"col-md-12\">\n\n                                <div *ngIf=\"isSingleQnsWithFeedbackType\">\n                                    <button class=\"btn btn-primary ml-3 pull-right\" (click)=\"checkForApiTypeQns()\">\n                                        Submit For Final</button>\n\n                                    <button class=\"btn pull-right btn-outline-primary ml-3\" (click)=\"feedbackSelected('current')\"\n                                            *ngIf=\"selectedFeedBackIndex != ''\">\n                                        <i class=\"fa fa-repeat mr-1\" aria-hidden=\"true\"></i>Revise</button>\n\n                                    <button *ngIf=\"item.question_type_id == 55 && (selectedFeedBackIndex == '' || selectedFeedBackIndex <= 0) && previousFeedBack.length < maximumAllowedCount && scratchQuestionData?.auto_review != '0'\"\n                                            (click)=\"getFeedbackValue(item)\" class=\"btn btn-outline-primary pull-right ml-3\">\n                                        <i class=\"fa fa-comments mr-1\" aria-hidden=\"true\"></i>Request For Feedback ({{previousFeedBack.length}} / {{maximumAllowedCount}})\n                                    </button>\n\n                                    <button *ngIf=\"studentContentStatus == '1' || studentContentStatus == '2'\"\n                                            class=\"btn pull-right btn-outline-primary ml-3\"  (click)=\"saveAnswer('2', 'noExit', true, 'same')\">\n                                        <i class=\"fa fa-floppy-o mr-1\" aria-hidden=\"true\"></i>Save</button>\n\n                                    <button *ngIf=\"studentContentStatus == '1' || studentContentStatus == '2'\"\n                                            class=\"btn pull-right btn-outline-primary\" (click)=\"saveAnswer('2', 'exit', true, 'same')\">\n                                        <i class=\"fa fa-sign-out mr-1\" aria-hidden=\"true\"></i>Save & Exit</button>\n\n                                </div>\n\n                                <button *ngIf=\"!isSingleQnsWithFeedbackType\" class=\"btn pull-right btn-primary ml-3\" (click)=\"checkLastQuestion(i, last)\">\n                                    Next <i class=\"fa fa-long-arrow-right ml-1\"></i></button>\n                                <button class=\"btn pull-right btn-outline-primary\" (click)=\"tryAgainButton()\"\n                                        *ngIf=\"checkQuestionId(item)?.is_correct == 'partially-completed' && !tryAgainButtonEnabled\">\n                                    Try Again <i class=\"fa fa-repeat ml-1\" aria-hidden=\"true\"></i></button>\n\n                                <!--                                <select *ngIf=\"previousFeedBack.length != 0\" class=\"form-control select-design pull-right\" (click)=\"feedbackSelected($event.target.value)\">-->\n                                <!--                                    <option value=\"\" selected disabled>Previous Feedbacks ({{previousFeedBack.length}})</option>-->\n                                <!--                                    <option value=\"current\">Current Version</option>-->\n                                <!--                                    <option [value]=\"feedback | json\"  *ngFor=\"let feedback of previousFeedBack\">-->\n                                <!--                                        <a class=\"cursor\">Feedback {{previousFeedBack.length - feedback.index}} <span *ngIf=\"feedback?.created_date\"> ({{feedback?.created_date | customDateFormat}} | {{feedback?.created_date | date:'h:mm a'}}) </span></a>-->\n                                <!--                                    </option>-->\n                                <!--                                </select>-->\n                            </div>\n                        </div>\n\n                        <div class=\"row\" *ngIf=\"item.question_type_id == 55 && convertedText && convertedText != ''\">\n                            <div class=\"col-12 mt-2\">\n                                <h5 class=\"font-weight-bold\">Feedback {{selectedFeedBackIndex}} <span *ngIf=\"selectedPreviousStudentAnswer?.created_date\"> ({{selectedPreviousStudentAnswer?.created_date | customDateFormat}}  | {{selectedPreviousStudentAnswer?.created_date | date:'h:mm a'}}) </span>:</h5>\n                                <div class=\"feedback-card\" [innerHTML]=\"convertedText\"></div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"card px-3 pt-3 pb-4\">\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <label class=\"ml-2\"><strong>{{isSingleQnsWithFeedbackType ? 'Cited Source' : 'WorkSpace'}} :</strong></label>\n                                <div class=\"col-12 px-3\">\n                                    <app-tiny-mice (emitEditorValue)=\"getWorkSpaceValue($event, i)\"\n                                                   [editorPatchValue]=\"item.PatchData && item.question_type_id != '24' ? item.student_roughdata :\n                                            item.PatchData && item.question_type_id == '24' ? item.subQuestions[0]?.student_roughdata :false\"\n                                                   [height]=\"140\"\n                                                   [readonly]=\"studentContentStatus != '1' && studentContentStatus != '2'\"\n                                                   [showDropBtn]=\"false\"\n                                                   [showInputBtn]=\"false\">\n                                    </app-tiny-mice>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"card p-3\" *ngIf=\"!isSingleQnsWithFeedbackType\">\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <label class=\"ml-2\"><strong>FeedBack :</strong></label>\n                                <div class=\"col-12 px-3\">\n                                <textarea (input)=\"getQueries($event, i, 0, 'scratch')\"\n                                          [readOnly]=\"studentContentStatus != '1' && studentContentStatus != '2'\"\n                                          [value]=\"item.question_type_id != '24' ? item.student_feedback : item.subQuestions[0]?.student_feedback\"\n                                          class=\"form-control\" cols=\"30\" placeholder=\"Please Enter the Feedback\"\n                                          rows=\"3\"></textarea>\n                                </div>\n                            </div>\n\n                            <div class=\"row mt-3\">\n                                <div class=\"col-md-12\">\n                                    <button (click)=\"submitQueries(i, 0, 'scratch')\"\n                                            *ngIf=\"queries != '' && queriesIndex == 'id'+i\"\n                                            class=\"pull-right btn btn-primary {{env.deviceType() ? 'border-radius-5' : ''}}\">\n                                        Submit\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\" *ngIf=\"!isSingleQnsWithFeedbackType\">\n                        <div class=\"col-12\">\n                            <label><strong>Overall FeedBack:</strong></label>\n                            <textarea [(ngModel)]=\"totalFeedBack\" class=\"form-control\"\n                                      [readOnly]=\"studentContentStatus != '1' && studentContentStatus != '2'\"\n                                      placeholder=\"Please Enter the Overall Feedback\" cols=\"30\" rows=\"3\"></textarea>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-3\" *ngIf=\"showQuestion == i && !isSingleQnsWithFeedbackType\">\n                <div class=\"card\">\n                    <div class=\"card-body\" style=\"background: #ececec\">\n                        <div class=\"row\">\n                            <div class=\"col-12 d-flex justify-content-center pr-0\">\n                                <h5 class=\"mt-2\">Question Answered</h5>\n                            </div>\n                            <div class=\"col-12 paddingDetails\">\n                                <div class=\"card align-items-center px-4 py-5\">\n                                    <h4><b>{{numOfQuestionAnswered()}}</b></h4>\n                                    <h4></h4>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <div class=\"card-body\" style=\"background: #ececec\">\n                        <div class=\"row\">\n                            <div class=\"col-12 d-flex justify-content-center\">\n                                <h5 class=\"mt-2\">Time Elapsed</h5>\n                            </div>\n                            <div class=\"col-12 paddingDetails\">\n                                <div class=\"card align-items-center px-4 py-5\">\n                                    <h4 *ngIf=\"getElapsedTime() as elapsed\">\n                                        <b> {{elapsed.hours}} {{elapsed.minutes}} {{elapsed.seconds}} </b>\n                                    </h4>\n                                    <h4></h4>\n                                    <h5><b>HR MIN SEC</b></h5>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <div class=\"card-body\" style=\"background: #ececec\">\n                        <div class=\"row\">\n                            <div class=\"col-12 d-flex justify-content-center\">\n                                <h5 class=\"mt-2\">Score</h5>\n                            </div>\n                            <div class=\"col-12 paddingDetails\">\n                                <div class=\"card align-items-center px-4 py-5\">\n                                    <h4>\n                                        <b>{{checkAutoGradeQns == '2' && (studentContentStatus == '1' || studentContentStatus == '2') ? percentage : '-'}}</b>\n                                    </h4>\n                                    <h4></h4>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n<ng-template #submitAlert let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">Submit {{contentType}}</h4>\n    </div>\n    <div class=\"modal-body p-0\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <p class=\"mb-0 my-3\" *ngIf=\"buttonClicked == 'submit'\">Once submitted, you will not be able to edit your answers</p>\n                    <p class=\"mb-0 my-3\" *ngIf=\"buttonClicked == ''\">Yay! Your final effort and last question are here. The subsequent\n                        assignment will be turned in for evaluation after clicking the OK button</p>\n                </div>\n            </div>\n            <!-- Container-fluid Ends-->\n        </div>\n        <div class=\"modal-footer d-flex justify-content-right\">\n            <button (click)=\"buttonClicked = '';close()\"\n                    class=\"btn cancel {{env.deviceType() ? 'border-radius-5' : ''}}\" type=\"button\">Cancel\n            </button>\n            <button *ngIf=\"isSingleQnsWithFeedbackType && scratchQuestionData?.auto_review != '0'\" (click)=\"getFeedbackValue(this.totalAns[0], 'saveAndExit');\"\n                    class=\"btn btn-primary {{env.deviceType() ? 'border-radius-5' : ''}}\" type=\"button\">Ok\n            </button>\n            <button *ngIf=\"!(isSingleQnsWithFeedbackType && scratchQuestionData?.auto_review != '0')\" (click)=\"buttonClicked = '';saveAnswer('4', 'exit', true);\"\n                    class=\"btn btn-primary {{env.deviceType() ? 'border-radius-5' : ''}}\" type=\"button\">Ok\n            </button>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #feedback let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header d-flex justify-content-between\">\n        <h4 class=\"mb-0\" style=\"color: #8F008A\">Overall Feedback</h4><i (click)=\"close()\"\n                                                                        class=\"fa fa-times-circle cursor\"\n                                                                        style=\"font-size: 1.2rem\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n            <div class=\"col-md-12 d-flex mt-4 mb-4 p-4 release-card\">\n                <span>{{scratchQuestionData.teacher_feedback}}</span>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title font-weight-bold\" id=\"modal-basic-title\">Resources</h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\" *ngFor=\"let item of linkdata; let j = index\">\n                <div class=\"col-md-12\">\n                    <a class=\"cursor\" href=\"{{item.link}}\" target=\"_blank\">\n                        <span style=\"overflow: scroll; overflow-y: hidden\" title=\"{{item.link}}\">{{item.name}}</span>\n                    </a>\n                    <hr *ngIf=\"j != linkdata.length - 1\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"close()\">Cancel</button>\n    </div>\n</ng-template>\n\n<ng-template #feedbackStatus>\n    <div class=\"modal-body\">\n        <div class=\"col-12 px-0 my-3 d-flex flex-row align-items-center\">\n            <div class=\"feedback_spinner\"></div>\n            <span class=\"ml-3\" style=\"font-size: 16px\">{{popUpMessage}}</span>\n        </div>\n    </div>\n</ng-template>\n", styles: [".inputMenu{\n\n  //padding: 30px;\n\n\n  input{\n    padding: 30px;\n  }\n  .input-group-text{\n    background: white;\n  }\n  img{\n    position: relative;\n    height: 36px;\n  }\n\n  .pointsSec{\n    .labelName{\n      font-size: 20px;\n    }\n    .pointInput{\n      height: 3rem !important;\n    }\n  }\n}\n.button {\n  display: block;\n  width: 115px;\n  height: 30px;\n  background: #8F008A;\n  padding: 3px;\n  text-align: center;\n  border-radius: 3px;\n  color: white;\n  font-weight: bold;\n  line-height: 25px;\n}\n\n.button1 {\n  width: 116px;\n  height: 30px;\n  display: block;\n  line-height: 19px;\n  font-size: 14px;\n  text-align: center;\n}\ncanvas-whiteboard {\n  width: 10vw;\n  canvas {\n    width: 10vw;\n    height: 50vh;\n    position: center;\n  }\n}\n\n// answering page student login\n.inputMenu{\n\n  input{\n    padding: 30px;\n  }\n  .input-group-text{\n    background: white;\n  }\n  img{\n    position: relative;\n    height: 36px;\n  }\n\n  .pointsSec{\n    .labelName{\n      font-size: 20px;\n    }\n    .pointInput{\n      height: 3rem !important;\n    }\n  }\n}\n.button {\n  display: block;\n  width: 115px;\n  height: 30px;\n  background: #8F008A;\n  padding: 3px;\n  text-align: center;\n  border-radius: 3px;\n  color: white;\n  font-weight: bold;\n  line-height: 25px;\n}\n\n.button1 {\n  width: 116px;\n  height: 30px;\n  display: block;\n  line-height: 19px;\n  font-size: 14px;\n  text-align: center;\n}\n\n.paddingDetails{\n  padding-left: 28px;\n  padding-right: 28px;\n}\n\n////\n.overlay {\n  height: 100%;\n  width: 100%;\n  background-color: grey;\n  position: absolute;\n  z-index: 1;\n  opacity: 0.6;\n  cursor: pointer;\n  transform: scale(0);\n  transition: .4s;\n  border-radius: 5px;\n  -webkit-transition: .4s;\n  -moz-transition: .4s;\n  -ms-transition: .4s;\n  -o-transition: .4s;\n}\n.table-cell{\n  display: table-cell;\n  vertical-align: middle;\n}\n.overlay-main {\n  width: 100%;\n  height: 100%;\n  display: table;\n}\n.team-col {\n  margin: 0;\n  position: relative;\n}\n.team-member{\n  position: relative;\n  overflow: hidden;\n  margin: 0;\n}\n\n.corporate-team{\n  position: relative;\n  margin-bottom: 30px;\n}\n.corporate-team:hover .overlay{\n  transform: scale(1);\n}\n.corporate-team:hover h2{\n  transform: translateY(0);\n\n}\n.corporate-team:hover p{\n  transform: translateY(0);\n\n}\n.corporate-team:hover .team-details{\n  background-color: black;\n}\n.corporate-team:hover .team-icon-grid{\n  transform: translateY(0);\n\n}\n.team-img {\n  width: 100%;\n  height: auto;\n  padding: 0;\n  transition: .4s;\n  -o-transition: .4s;\n  -webkit-transition: .4s;\n  -moz-transition: .4s;\n  -ms-transition: .4s;\n  border: 0 solid white;\n  box-shadow: 0 0 4px 0 #d7d7d7;\n}\n\n.team-details {\n  padding: 23px 20px;\n  background-color: #f31515;\n  margin-top: 10px;\n  position: relative;\n  z-index: 11111;\n  transition: .4s;\n  -o-transition: .4s;\n  -webkit-transition: .4s;\n  -moz-transition: .4s;\n  -ms-transition: .4s;\n}\n.team-details h3 {\n  margin: 0;\n  font-size: 20px;\n  color: white;\n  font-weight: 700;\n  margin-top: 0;\n  font-family: 'Roboto', serif;\n}\n.team-member h2 {\n  margin: 0;\n  font-size: 26px;\n  color: white;\n  margin-top: 0;\n  transform: translateY(-550px);\n  transition: .5s;\n  -o-transition: .5s;\n  -webkit-transition: .5s;\n  -moz-transition: .5s;\n  -ms-transition: .5s;\n  transition-delay: .2s;\n  margin-left: 20px;\n}\n.team-member p {\n  margin: 0;\n  font-size: 17px;\n  color: black;\n  line-height: 24px;\n  margin: 0 20px;\n  margin-top: 10px;\n  margin-bottom: 15px;\n  transform: translateY(-550px);\n  transition: .5s;\n  -o-transition: .5s;\n  -webkit-transition: .5s;\n  -moz-transition: .5s;\n  -ms-transition: .5s;\n  transition-delay: .2s;\n}\n.team-icon{\n  margin-top: 3px;\n  transition: .3s;\n  position: relative;\n  z-index: 1;\n  transition: .3s;\n  -webkit-transition: .3s;\n  -moz-transition: .3s;\n  -ms-transition: .3s;\n  -o-transition: .3s;\n  margin-left: 20px;\n}\n.team-social {\n  padding-left: 0;\n  display: inline-flex;\n  list-style: none;\n  margin: 0;\n}\n.team-social li{\n  margin: 0;\n}\n.team-social li a {\n  font-size: 17px;\n  color: #f31515;\n  transition: .3s;\n  -webkit-transition: .3s;\n  -moz-transition: .3s;\n  -ms-transition: .3s;\n  -o-transition: .3s;\n  text-align: center;\n  margin-right: 11px;\n  float: left;\n  height: 30px;\n  width: 30px;\n  background-color: white;\n  border-radius: 5px;\n  line-height: 30px;\n}\n.team-social li a:hover {\n  color: black;\n  background-color: white;\n}\n\n\n.team-icon-grid {\n  width: 100%;\n  background-color: transparent;\n  position: relative;\n  margin-top: 20px;\n  transform: translateY(250px);\n  transition: .8s;\n  -o-transition: .8s;\n  -webkit-transition: .8s;\n  -moz-transition: .8s;\n  -ms-transition: .8s;\n  transition-delay: .6s;\n}\n\n.round-question{\n  border: 1px solid;\n  width: 38px;\n  border-radius: 50%;\n  text-align: center;\n  cursor: pointer;\n  font-size: 20px;\n}\n\n.black{\n  border: 1px solid black !important;\n  color: black !important;\n  font-size: 20px;\n}\n\n.wrap{\n  display: flex;\n  text-align: center;\n  flex-wrap: wrap !important;\n}\n\n\n///\n.scoll-component {\n  display: flex;\n  align-items: stretch;\n  width: 100%;\n  height: 60px;\n\n  .total-items {\n    min-width: 80px;\n    align-self: center;\n    text-align: center;\n  }\n\n  // Container\n  .scoll-container {\n    position: relative;\n    display: flex;\n    overflow: hidden;\n    flex-grow: 1;\n    padding-left: 49px;\n    padding-right: 49px;\n    // Scroll\n    .scroll-content {\n      display: flex;\n      overflow-x: auto;\n      overflow-y: hidden;\n      flex-wrap: nowrap;\n      align-items: center;\n\n      .arrowStyle{\n        background: transparent;\n        border: none;\n        font-size: 28px;\n        border: 0 ridge;\n      }\n      // Arrows\n      .arrow {\n        position: absolute;\n        width: 60px;\n        text-align: center;\n        z-index: 2;\n        &.hide {\n          display: none;\n        }\n        &.left-arrow {\n          left: 0;\n        }\n        &.right-arrow {\n          right : 0;\n        }\n      }\n\n      // Items\n      .scroll-item {\n        width: auto;\n        margin: 0 10px;\n        flex: 0 0 auto;\n      }\n    }\n  }\n}\n\n.icon {\n  font-size: 20px; border: 1px solid #8F008A; border-radius: 4px; padding: 6px;\n  display: flex;\n  align-items: center;\n  margin-right: 12px;\n}\n\n.upload-count {\n  font-size: 12px;\n  color: #8f008a;\n  font-weight: bolder;\n}\n\n.dropdown-toggle::after{\n  display: none !important;\n}\n\n.question-side-icon {\n  height: 28px;width: 28px;object-fit: contain;\n}\n\n.text-wrap-balance {\n  text-wrap: balance !important;\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.CreatorService }, { type: i3.ActivatedRoute }, { type: i4.FormBuilder }, { type: i5.DomSanitizer }, { type: i6.ConfigurationService }, { type: i7.NgbModal }, { type: i8.ToastrService }, { type: i9.StudentService }, { type: i10.EnvironmentService }, { type: i0.ChangeDetectorRef }, { type: i11.CommonDataService }, { type: i3.Router }, { type: i12.CommonService }], { submitAlert: [{
            type: ViewChild,
            args: ['submitAlert']
        }], link: [{
            type: ViewChild,
            args: ['content']
        }], scrollContent: [{
            type: ViewChild,
            args: ['scrollContent', { static: false }]
        }], rightArrow: [{
            type: ViewChild,
            args: ['rightArrow', { static: false }]
        }], leftArrow: [{
            type: ViewChild,
            args: ['leftArrow', { static: false }]
        }], feedback: [{
            type: ViewChild,
            args: ['feedback']
        }], feedbackStatus: [{
            type: ViewChild,
            args: ['feedbackStatus']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentScratchComponent, { className: "StudentScratchComponent" }); })();
//# sourceMappingURL=student-scratch.component.js.map