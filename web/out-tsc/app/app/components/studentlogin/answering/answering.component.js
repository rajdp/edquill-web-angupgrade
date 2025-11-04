import { Component, forwardRef, HostListener, ViewChild } from '@angular/core';
import { parse, stringify } from 'flatted';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounce } from 'lodash';
import { urls } from '../../../shared/utils/urls';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/student.service";
import * as i3 from "../../../shared/service/configuration.service";
import * as i4 from "@angular/platform-browser";
import * as i5 from "@ng-bootstrap/ng-bootstrap";
import * as i6 from "@angular/router";
import * as i7 from "../../../shared/service/creator.service";
import * as i8 from "../../../shared/service/nav.service";
import * as i9 from "ngx-toastr";
import * as i10 from "../../../shared/service/teacher.service";
import * as i11 from "../../../shared/service/common.service";
import * as i12 from "../../../shared/service/contentdetail.service";
import * as i13 from "../../../environment.service";
import * as i14 from "../../../shared/service/common-data.service";
import * as i15 from "../../../shared/service/newsubject.service";
import * as i16 from "@angular/common";
import * as i17 from "@angular/forms";
import * as i18 from "@ng-select/ng-select";
import * as i19 from "../../../shared/components/feather-icons/feather-icons.component";
import * as i20 from "../../auth/graph-component/graph-component.component";
import * as i21 from "../../auth/tiny-mice/tiny-mice.component";
import * as i22 from "../../auth/annotation/annotation.component";
import * as i23 from "../../auth/student-web-annotation/student-web-annotation.component";
import * as i24 from "../../auth/source-link/source-link.component";
import * as i25 from "ng2-pdf-viewer";
import * as i26 from "@angular/cdk/drag-drop";
import * as i27 from "ngx-infinite-scroll";
import * as i28 from "ng-apexcharts";
import * as i29 from "../../../shared/pipes/sanitizer/SanitizeHtmlPipe.pipe";
import * as i30 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["submitAlert"];
const _c1 = ["reviewAlert"];
const _c2 = ["durationWarning"];
const _c3 = ["testTimerStatus"];
const _c4 = ["answerGraph"];
const _c5 = ["content"];
const _c6 = ["workArea"];
const _c7 = ["scrollContent"];
const _c8 = ["rightArrow"];
const _c9 = ["leftArrow"];
const _c10 = ["feedback"];
const _c11 = ["feedbackStatus"];
const _c12 = ["jumpWrapper"];
const _c13 = ["qnsWrapper"];
const _c14 = ["chart2"];
const _c15 = ["showExpand"];
const _c16 = ["header"];
const _c17 = ["footer"];
const _c18 = ["contentCard"];
const _c19 = () => ["math", "maths"];
const _c20 = a0 => ({ "padding": a0 });
const _c21 = a0 => ({ "div-disable": a0 });
const _c22 = a0 => ({ "selectColor": a0 });
const _c23 = a0 => ({ "student-selected": a0 });
const _c24 = a0 => ({ "max-height": a0 });
const _c25 = () => ["1", "2", "5", "7", "9", "16", "40", "41"];
const _c26 = () => ["10", "20", "24", "28"];
const _c27 = (a0, a1) => ({ "math": a0, "rw": a1 });
const _c28 = () => ["10", "20", "28"];
const _c29 = a0 => ({ "visibility": a0 });
const _c30 = () => ["20"];
const _c31 = () => ["55"];
const _c32 = a0 => ({ "disabled": a0 });
const _c33 = a0 => ({ "eliminated-option": a0 });
const _c34 = () => ["1", "2"];
const _c35 = () => ({ standalone: true });
const _c36 = a0 => ({ "color-primary": a0 });
const _c37 = (a0, a1, a2) => ({ "badge-exceptional": a0, "badge-good": a1, "badge-improve": a2 });
const _c38 = a0 => ({ "correct_ans-selected": a0 });
const _c39 = (a0, a1) => ({ $implicit: a0, index: a1 });
const _c40 = a0 => ({ "width": a0 });
function AnsweringComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵelement(1, "img", 39);
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_div_12_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 46);
    i0.ɵɵlistener("click", function AnsweringComponent_div_12_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.showDescription = !ctx_r1.showDescription; return i0.ɵɵresetView(ctx_r1.showCalculator = false); });
    i0.ɵɵtext(1, " Description");
    i0.ɵɵelement(2, "app-feather-icons", 47);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", "clipboard");
} }
function AnsweringComponent_div_12_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 52);
    i0.ɵɵelement(1, "span", 53);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, ctx_r1.questionData.file_text), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_div_12_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 48)(1, "div", 49)(2, "span");
    i0.ɵɵtext(3, "Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "i", 50);
    i0.ɵɵlistener("click", function AnsweringComponent_div_12_div_4_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.showDescription = !ctx_r1.showDescription; return i0.ɵɵresetView(ctx_r1.showCalculator = false); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, AnsweringComponent_div_12_div_4_div_5_Template, 3, 3, "div", 51);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.questionData.file_text != "");
} }
function AnsweringComponent_div_12_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57)(1, "div", 58)(2, "div", 59)(3, "span");
    i0.ɵɵtext(4, "Calculator");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 60);
    i0.ɵɵtext(6, "Note: Click on the header to move the widget");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 61);
    i0.ɵɵlistener("click", function AnsweringComponent_div_12_div_5_div_4_Template_div_click_7_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.showCalculator = !ctx_r1.showCalculator; ctx_r1.showReference = false; return i0.ɵɵresetView(ctx_r1.showDescription = false); });
    i0.ɵɵelement(8, "i", 62);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 63);
    i0.ɵɵelement(10, "div", 64);
    i0.ɵɵelementEnd()();
} }
function AnsweringComponent_div_12_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "button", 54);
    i0.ɵɵlistener("click", function AnsweringComponent_div_12_div_5_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.toggleCalculator(); ctx_r1.showReference = false; return i0.ɵɵresetView(ctx_r1.showDescription = false); });
    i0.ɵɵtext(2, " Calculator");
    i0.ɵɵelement(3, "i", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, AnsweringComponent_div_12_div_5_div_4_Template, 11, 0, "div", 56);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("position-relative ml-", ctx_r1.questionData.file_text != "" ? "2" : "0", "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.showCalculator);
} }
function AnsweringComponent_div_12_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 68)(1, "div", 49)(2, "span");
    i0.ɵɵtext(3, "Reference");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "i", 50);
    i0.ɵɵlistener("click", function AnsweringComponent_div_12_div_6_div_4_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.showReference = !ctx_r1.showReference; ctx_r1.showDescription = false; return i0.ɵɵresetView(ctx_r1.showCalculator = false); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 63)(6, "div", 69);
    i0.ɵɵelement(7, "pdf-viewer", 70);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("src", ctx_r1.pdfSrc)("render-text", true)("original-size", false)("show-all", true)("fit-to-page", true)("autoresize", true);
} }
function AnsweringComponent_div_12_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 65)(1, "button", 54);
    i0.ɵɵlistener("click", function AnsweringComponent_div_12_div_6_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.showReference = !ctx_r1.showReference; ctx_r1.showDescription = false; return i0.ɵɵresetView(ctx_r1.showCalculator = false); });
    i0.ɵɵtext(2, " Reference");
    i0.ɵɵelement(3, "i", 66);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, AnsweringComponent_div_12_div_6_div_4_Template, 8, 6, "div", 67);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.showReference);
} }
function AnsweringComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40)(1, "div", 41, 12);
    i0.ɵɵtemplate(3, AnsweringComponent_div_12_button_3_Template, 3, 1, "button", 42)(4, AnsweringComponent_div_12_div_4_Template, 6, 1, "div", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AnsweringComponent_div_12_div_5_Template, 5, 4, "div", 44)(6, AnsweringComponent_div_12_div_6_Template, 5, 1, "div", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.questionData.file_text != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showDescription);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.getData == null ? null : ctx_r1.getData.is_test) == "1" && i0.ɵɵpureFunction0(4, _c19).indexOf(ctx_r1.getData == null ? null : ctx_r1.getData.subject.toLowerCase()) > -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.getData == null ? null : ctx_r1.getData.is_test) == "1" && i0.ɵɵpureFunction0(5, _c19).indexOf(ctx_r1.getData == null ? null : ctx_r1.getData.subject.toLowerCase()) > -1);
} }
function AnsweringComponent_div_14_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 74);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = ctx.item;
    i0.ɵɵpropertyInterpolate("title", item_r9.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r9.name);
} }
function AnsweringComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 71)(1, "ng-select", 72);
    i0.ɵɵlistener("change", function AnsweringComponent_div_14_Template_ng_select_change_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.changeQuestionListFromTest($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function AnsweringComponent_div_14_Template_ng_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.testContentData, $event) || (ctx_r1.testContentData = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(2, AnsweringComponent_div_14_ng_template_2_Template, 2, 2, "ng-template", 73);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.testContentDetail);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.testContentData);
    i0.ɵɵproperty("clearable", false);
} }
function AnsweringComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 79)(1, "h4", 80)(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "span", 81);
    i0.ɵɵtext(5, "Hours");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.overallElapsedTime == null ? null : ctx_r1.overallElapsedTime.hours);
} }
function AnsweringComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 82)(1, "h4", 83);
    i0.ɵɵtext(2, ":");
    i0.ɵɵelementEnd()();
} }
function AnsweringComponent_div_15_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 79)(1, "h4", 80)(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "span", 81);
    i0.ɵɵtext(5, "Minutes");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.overallElapsedTime == null ? null : ctx_r1.overallElapsedTime.minutes);
} }
function AnsweringComponent_div_15_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 82)(1, "h4", 83);
    i0.ɵɵtext(2, ":");
    i0.ɵɵelementEnd()();
} }
function AnsweringComponent_div_15_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 79)(1, "h4", 80)(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "span", 81);
    i0.ɵɵtext(5, "Seconds");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.overallElapsedTime == null ? null : ctx_r1.overallElapsedTime.seconds);
} }
function AnsweringComponent_div_15_div_6_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 87);
} }
function AnsweringComponent_div_15_div_6_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 88);
} }
function AnsweringComponent_div_15_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 84);
    i0.ɵɵtemplate(1, AnsweringComponent_div_15_div_6_i_1_Template, 1, 0, "i", 85)(2, AnsweringComponent_div_15_div_6_i_2_Template, 1, 0, "i", 86);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showTimer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showTimer);
} }
function AnsweringComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 75);
    i0.ɵɵlistener("click", function AnsweringComponent_div_15_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getData.student_content_status == "1" || ctx_r1.getData.student_content_status == "2" ? ctx_r1.showTimer = !ctx_r1.showTimer : ""); });
    i0.ɵɵtemplate(1, AnsweringComponent_div_15_div_1_Template, 6, 1, "div", 76)(2, AnsweringComponent_div_15_div_2_Template, 3, 0, "div", 77)(3, AnsweringComponent_div_15_div_3_Template, 6, 1, "div", 76)(4, AnsweringComponent_div_15_div_4_Template, 3, 0, "div", 77)(5, AnsweringComponent_div_15_div_5_Template, 6, 1, "div", 76)(6, AnsweringComponent_div_15_div_6_Template, 3, 2, "div", 78);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("row my-0 ", ctx_r1.showTimer ? "py-1 justify-content-center mx-2" : "py-2 mr-1", " px-2 timer_button");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showTimer && (ctx_r1.getData.student_content_status == "1" || ctx_r1.getData.student_content_status == "2") || ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2" && ctx_r1.overallTimeTaken > 3600);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showTimer && (ctx_r1.getData.student_content_status == "1" || ctx_r1.getData.student_content_status == "2") || ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2" && ctx_r1.overallTimeTaken > 3600);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showTimer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showTimer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showTimer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.getData.student_content_status == "1" || ctx_r1.getData.student_content_status == "2");
} }
function AnsweringComponent_i_18_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 95)(1, "span", 96);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("(", ctx_r1.answerPdf.length, ")");
} }
function AnsweringComponent_i_18_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 97)(1, "label", 98);
    i0.ɵɵtext(2, "No PDF File Uploaded");
    i0.ɵɵelementEnd()();
} }
function AnsweringComponent_i_18_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 99)(1, "label", 100);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 101);
    i0.ɵɵlistener("click", function AnsweringComponent_i_18_div_4_Template_i_click_3_listener() { const i_r12 = i0.ɵɵrestoreView(_r11).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deletePdf(i_r12)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r13.image);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2");
} }
function AnsweringComponent_i_18_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 102)(1, "input", 103, 13);
    i0.ɵɵlistener("change", function AnsweringComponent_i_18_div_5_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.encodePdfFileAsURL($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 104);
    i0.ɵɵlistener("click", function AnsweringComponent_i_18_div_5_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r14); const hiddenfileinput_r15 = i0.ɵɵreference(2); return i0.ɵɵresetView(hiddenfileinput_r15.click()); });
    i0.ɵɵtext(4, "Upload pdf ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("hidden", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2");
} }
function AnsweringComponent_i_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "i", 89);
    i0.ɵɵtemplate(1, AnsweringComponent_i_18_div_1_Template, 3, 1, "div", 90);
    i0.ɵɵelementStart(2, "div", 91);
    i0.ɵɵtemplate(3, AnsweringComponent_i_18_div_3_Template, 3, 0, "div", 92)(4, AnsweringComponent_i_18_div_4_Template, 4, 2, "div", 93)(5, AnsweringComponent_i_18_div_5_Template, 5, 1, "div", 94);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("hidden", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.answerPdf.length != 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.answerPdf.length == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.answerPdf);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showUploadFile);
} }
function AnsweringComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 105);
    i0.ɵɵelement(1, "i", 106);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("download", ctx_r1.downloadTemplateName)("href", ctx_r1.downloadTemplate, i0.ɵɵsanitizeUrl);
} }
function AnsweringComponent_i_20_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 107);
    i0.ɵɵlistener("click", function AnsweringComponent_i_20_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showFeedback()); });
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_img_21_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 108);
    i0.ɵɵlistener("click", function AnsweringComponent_img_21_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.otherlink()); });
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_i_22_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 109);
    i0.ɵɵlistener("click", function AnsweringComponent_i_22_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveAnswer("2", "exit", true, "same")); });
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_i_23_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 110);
    i0.ɵɵlistener("click", function AnsweringComponent_i_23_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveAnswer("2", "noExit", true, "same")); });
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 75);
    i0.ɵɵlistener("click", function AnsweringComponent_button_24_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.finalPopUp()); });
    i0.ɵɵtext(1, "Submit ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("btn btn-primary pull-right ", ctx_r1.env.deviceType() ? "border-radius-5" : "", "");
} }
function AnsweringComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 75);
    i0.ɵɵlistener("click", function AnsweringComponent_button_25_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.backbutton()); });
    i0.ɵɵtext(1, "Back ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("btn btn-outline-primary pull-right ml-2 ", ctx_r1.env.deviceType() ? "border-radius-5" : "", "");
} }
function AnsweringComponent_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 115);
    i0.ɵɵelement(1, "img", 39);
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_div_26_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 116);
    i0.ɵɵelement(1, "app-source-link", 117);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("pdfPath", ctx_r1.pdfPath[0]);
} }
function AnsweringComponent_div_26_app_annotation_4_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-annotation", 118);
    i0.ɵɵlistener("annotate", function AnsweringComponent_div_26_app_annotation_4_Template_app_annotation_annotate_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getAreaInfo($event)); })("deleteAnnotation", function AnsweringComponent_div_26_app_annotation_4_Template_app_annotation_deleteAnnotation_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getDeleteAction($event)); })("currentPageNo", function AnsweringComponent_div_26_app_annotation_4_Template_app_annotation_currentPageNo_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getCurrentPageNo($event)); })("expandBoolean", function AnsweringComponent_div_26_app_annotation_4_Template_app_annotation_expandBoolean_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.expandPdfSize($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("getAnnotate", ctx_r1.areaInfo)("userType", "student")("pageVariable", ctx_r1.scrolledPageNumber)("showPageNo", ctx_r1.showAutoScroll)("pdfPath", ctx_r1.pdfTemplate)("expandPdf", true)("getDragQues", ctx_r1.dragQuestion)("toolHide", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2");
} }
function AnsweringComponent_div_26_app_student_web_annotation_5_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-student-web-annotation", 119);
    i0.ɵɵlistener("expandBoolean", function AnsweringComponent_div_26_app_student_web_annotation_5_Template_app_student_web_annotation_expandBoolean_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.expandPdfSize($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("expandPdf", true)("overallData", ctx_r1.overallFullData);
} }
function AnsweringComponent_div_26_div_6_div_2_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 126);
    i0.ɵɵlistener("click", function AnsweringComponent_div_26_div_6_div_2_img_1_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.showPdf()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("mt-1 ", ctx_r1.env.deviceType() ? "question-side-icon" : "", "");
} }
function AnsweringComponent_div_26_div_6_div_2_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 127);
    i0.ɵɵlistener("click", function AnsweringComponent_div_26_div_6_div_2_img_2_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.showPdf()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("mt-1 ", ctx_r1.env.deviceType() ? "question-side-icon" : "", "");
} }
function AnsweringComponent_div_26_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, AnsweringComponent_div_26_div_6_div_2_img_1_Template, 1, 3, "img", 124)(2, AnsweringComponent_div_26_div_6_div_2_img_2_Template, 1, 3, "img", 125);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("col-md-1 px-0 ", ctx_r1.env.deviceType() ? "mb-2" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.pdf);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdf);
} }
function AnsweringComponent_div_26_div_6_div_3_select_1_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 133);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    const i_r29 = ctx.index;
    i0.ɵɵpropertyInterpolate("value", i_r29);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r28.heading);
} }
function AnsweringComponent_div_26_div_6_div_3_select_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 130);
    i0.ɵɵlistener("change", function AnsweringComponent_div_26_div_6_div_3_select_1_Template_select_change_0_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.sectionFilter($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function AnsweringComponent_div_26_div_6_div_3_select_1_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.sectionFilterVal, $event) || (ctx_r1.sectionFilterVal = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(1, "option", 131);
    i0.ɵɵtext(2, "All Section");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, AnsweringComponent_div_26_div_6_div_3_select_1_option_3_Template, 2, 2, "option", 132);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("form-span col-md-", ctx_r1.totalAnsSample.length > 0 && ctx_r1.showAutoScroll ? "8" : "12", "");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.sectionFilterVal);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.totalAnsSample);
} }
function AnsweringComponent_div_26_div_6_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 134)(1, "div", 135)(2, "input", 136);
    i0.ɵɵlistener("change", function AnsweringComponent_div_26_div_6_div_3_div_2_Template_input_change_2_listener() { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.allowAutoScroll = !ctx_r1.allowAutoScroll); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 137)(4, "b");
    i0.ɵɵtext(5, "Auto scroll");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", ctx_r1.allowAutoScroll);
} }
function AnsweringComponent_div_26_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, AnsweringComponent_div_26_div_6_div_3_select_1_Template, 4, 5, "select", 128)(2, AnsweringComponent_div_26_div_6_div_3_div_2_Template, 6, 1, "div", 129);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.totalAns.length != 0 ? "11" : "12", " pl-0 pr-3 my-2 d-flex justify-content-end align-items-center");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.totalAnsSample.length > 1 && !ctx_r1.expandPdf);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.totalAnsSample.length > 0 && ctx_r1.showAutoScroll);
} }
function AnsweringComponent_div_26_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 138)(1, "small", 139);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Note: Upload PDF size should not exceed ", ctx_r1.uploadFileSize.toString(), " MB");
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "input", 145);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r32 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.showpdf == true ? 12 : 6, " px-0 mb-3");
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", sec_r32 == null ? null : sec_r32.heading);
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 162);
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 163);
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 164)(1, "button", 165);
    i0.ɵɵlistener("click", function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_7_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r33 = i0.ɵɵnextContext(); const item_r35 = ctx_r33.$implicit; const j_r36 = ctx_r33.index; const i_r37 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.openGraph($event, i_r37, j_r36, item_r35)); });
    i0.ɵɵtext(2, "answer graph ");
    i0.ɵɵelementEnd()();
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 166);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const item_r35 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("id", "questionId");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 2, item_r35.question), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_12_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 169);
    i0.ɵɵlistener("click", function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_12_span_2_Template_span_click_0_listener() { const k_r39 = i0.ɵɵrestoreView(_r38).index; const j_r36 = i0.ɵɵnextContext(2).index; const i_r37 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.getChooseAns(k_r39, i_r37, j_r36)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r40 = ctx.$implicit;
    const item_r35 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c22, option_r40.trim().toLowerCase() === item_r35.given_answer.trim().toLowerCase()));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(option_r40);
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 167);
    i0.ɵɵtemplate(2, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_12_span_2_Template, 2, 4, "span", 168);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r35 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c21, ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r35.array);
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 170)(1, "div", 171)(2, "input", 172);
    i0.ɵɵlistener("click", function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_13_Template_input_click_2_listener() { i0.ɵɵrestoreView(_r41); const j_r36 = i0.ɵɵnextContext().index; const i_r37 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.getTrueAns("true", i_r37, j_r36)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 173);
    i0.ɵɵtext(4, "True");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 174)(6, "input", 175);
    i0.ɵɵlistener("click", function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_13_Template_input_click_6_listener() { i0.ɵɵrestoreView(_r41); const j_r36 = i0.ɵɵnextContext().index; const i_r37 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.getTrueAns("false", i_r37, j_r36)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "label", 173);
    i0.ɵɵtext(8, "False");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext();
    const item_r35 = ctx_r33.$implicit;
    const j_r36 = ctx_r33.index;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(17, _c21, ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(19, _c23, item_r35.given_answer == "true"));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("id", "true", j_r36, "");
    i0.ɵɵpropertyInterpolate1("name", "ans", j_r36, "");
    i0.ɵɵproperty("checked", (item_r35 == null ? null : item_r35.given_answer) == "true");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("for", "true", j_r36, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(21, _c23, item_r35.given_answer == "false"));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("id", "false", j_r36, "");
    i0.ɵɵpropertyInterpolate1("name", "ans", j_r36, "");
    i0.ɵɵproperty("checked", (item_r35 == null ? null : item_r35.given_answer) == "false");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("for", "false", j_r36, "");
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 178);
    i0.ɵɵlistener("click", function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_14_div_1_Template_div_click_0_listener() { const k_r43 = i0.ɵɵrestoreView(_r42).index; const j_r36 = i0.ɵɵnextContext(2).index; const i_r37 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.getDropdownAns(k_r43, i_r37, j_r36)); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r44 = ctx.$implicit;
    const item_r35 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵclassMapInterpolate1("dropdown-list col-md-", ctx_r1.showpdf == true ? 12 : 5, " mb-2 p-2");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c23, option_r44 == item_r35.given_answer));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r44);
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 176);
    i0.ɵɵtemplate(1, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_14_div_1_Template, 3, 7, "div", 177);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r35 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c21, ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r35.mob_options);
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 179)(1, "textarea", 180);
    i0.ɵɵlistener("input", function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_15_Template_textarea_input_1_listener($event) { i0.ɵɵrestoreView(_r45); const j_r36 = i0.ɵɵnextContext().index; const i_r37 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.getInputAns($event, i_r37, j_r36)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r35 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("form-control mt-2 col-md-", ctx_r1.showpdf == true ? 12 : 5, "");
    i0.ɵɵproperty("readOnly", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2")("value", item_r35.given_answer);
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 179)(1, "textarea", 181);
    i0.ɵɵlistener("input", function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_16_Template_textarea_input_1_listener($event) { i0.ɵɵrestoreView(_r46); const j_r36 = i0.ɵɵnextContext().index; const i_r37 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.getInputAns($event, i_r37, j_r36)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r35 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("readOnly", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2")("value", item_r35.given_answer);
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_17_app_tiny_mice_1_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-tiny-mice", 187);
    i0.ɵɵlistener("emitEditorValue", function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_17_app_tiny_mice_1_Template_app_tiny_mice_emitEditorValue_0_listener($event) { i0.ɵɵrestoreView(_r47); const j_r36 = i0.ɵɵnextContext(2).index; const i_r37 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.getNumericAnswerValue($event, i_r37, j_r36)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext(2);
    const item_r35 = ctx_r33.$implicit;
    const j_r36 = ctx_r33.index;
    const i_r37 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("editorPatchValue", item_r35.given_answer == "" ? false : item_r35.given_answer)("height", 250)("id", i_r37 + "giveAns" + j_r36)("readonly", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2")("showDropBtn", false)("showInputBtn", false);
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_17_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 188);
    i0.ɵɵlistener("click", function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_17_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r48); const j_r36 = i0.ɵɵnextContext(2).index; const i_r37 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setAnswer(i_r37, j_r36)); });
    i0.ɵɵtext(1, "Add Answer ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("disabled", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2");
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_17_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 188);
    i0.ɵɵlistener("click", function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_17_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r49); const j_r36 = i0.ɵɵnextContext(2).index; const i_r37 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setAnswer(i_r37, j_r36)); });
    i0.ɵɵtext(1, "Edit Answer ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("disabled", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2");
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_17_div_5_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 193);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const item_r35 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, item_r35.given_answer), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_17_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 189)(1, "div", 190)(2, "p", 191);
    i0.ɵɵtext(3, "Answer :");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_17_div_5_span_4_Template, 2, 3, "span", 192);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext(2);
    const item_r35 = ctx_r33.$implicit;
    const j_r36 = ctx_r33.index;
    const i_r37 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1.hideRuleAnswer[i_r37].section[j_r36] && item_r35.given_answer != "");
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 182);
    i0.ɵɵtemplate(1, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_17_app_tiny_mice_1_Template, 1, 6, "app-tiny-mice", 183);
    i0.ɵɵelementStart(2, "div", 184);
    i0.ɵɵtemplate(3, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_17_button_3_Template, 2, 1, "button", 185)(4, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_17_button_4_Template, 2, 1, "button", 185);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_17_div_5_Template, 5, 1, "div", 186);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext();
    const item_r35 = ctx_r33.$implicit;
    const j_r36 = ctx_r33.index;
    const i_r37 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hideRuleAnswer[i_r37] == null ? null : ctx_r1.hideRuleAnswer[i_r37].section[j_r36]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !(ctx_r1.hideRuleAnswer[i_r37] == null ? null : ctx_r1.hideRuleAnswer[i_r37].section[j_r36]) && item_r35.question_type_id == 30 && item_r35.given_answer == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(ctx_r1.hideRuleAnswer[i_r37] == null ? null : ctx_r1.hideRuleAnswer[i_r37].section[j_r36]) && item_r35.question_type_id == 30 && item_r35.given_answer != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.hideRuleAnswer[i_r37].section[j_r36]);
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "textarea", 195);
    i0.ɵɵlistener("input", function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_18_div_1_Template_textarea_input_1_listener($event) { const k_r51 = i0.ɵɵrestoreView(_r50).index; const j_r36 = i0.ɵɵnextContext(2).index; const i_r37 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.getBlanksValue($event, k_r51, i_r37, j_r36)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const k_r51 = ctx.index;
    const item_r35 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("placeholder", "Enter input-", k_r51 + 1, " answer");
    i0.ɵɵproperty("readOnly", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2")("value", item_r35.given_answer[k_r51] ? item_r35.given_answer[k_r51] : "");
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 179);
    i0.ɵɵtemplate(1, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_18_div_1_Template, 2, 4, "div", 194);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r35 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r35.answer);
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_19_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 202);
    i0.ɵɵlistener("click", function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_19_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r53); const ctx_r33 = i0.ɵɵnextContext(2); const item_r35 = ctx_r33.$implicit; const j_r36 = ctx_r33.index; const i_r37 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.expandFullScreen(item_r35, i_r37, j_r36)); });
    i0.ɵɵelement(1, "i", 203);
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_19_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 204);
    i0.ɵɵlistener("click", function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_19_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r54); const ctx_r33 = i0.ɵɵnextContext(2); const item_r35 = ctx_r33.$implicit; const j_r36 = ctx_r33.index; const i_r37 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.expandFullScreen(item_r35, i_r37, j_r36)); });
    i0.ɵɵelement(1, "i", 203);
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 196)(1, "div", 116)(2, "button", 197);
    i0.ɵɵtext(3, "Feedback ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 198);
    i0.ɵɵlistener("click", function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_19_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r52); const j_r36 = i0.ɵɵnextContext().index; const i_r37 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.toggle(i_r37, j_r36)); });
    i0.ɵɵtext(5, "work space ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 199);
    i0.ɵɵlistener("click", function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_19_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r52); const ctx_r33 = i0.ɵɵnextContext(); const item_r35 = ctx_r33.$implicit; const j_r36 = ctx_r33.index; const i_r37 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.openWorkArea(item_r35, i_r37, j_r36)); });
    i0.ɵɵtext(7, "Work area ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_19_button_8_Template, 2, 0, "button", 200)(9, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_19_button_9_Template, 2, 0, "button", 201);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext();
    const item_r35 = ctx_r33.$implicit;
    const j_r36 = ctx_r33.index;
    const i_r37 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2");
    i0.ɵɵattribute("aria-controls", "#queries" + j_r36 + "id" + i_r37)("data-target", "#queries" + j_r36 + "id" + i_r37);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", item_r35.question_type_id == "20");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r35.question_type_id == "30" && ctx_r1.hideRuleAnswer[i_r37].section[j_r36]);
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 205)(1, "div", 206)(2, "textarea", 207);
    i0.ɵɵlistener("input", function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_20_Template_textarea_input_2_listener($event) { i0.ɵɵrestoreView(_r55); const j_r36 = i0.ɵɵnextContext().index; const i_r37 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.getQueries($event, i_r37, j_r36, "pdf")); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext();
    const item_r35 = ctx_r33.$implicit;
    const j_r36 = ctx_r33.index;
    const i_r37 = i0.ɵɵnextContext().index;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "queries", j_r36, "id", i_r37, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", item_r35.student_feedback);
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_21_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 75);
    i0.ɵɵlistener("click", function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_21_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r56); const j_r36 = i0.ɵɵnextContext(2).index; const i_r37 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.submitQueries(i_r37, j_r36, "pdf")); });
    i0.ɵɵtext(1, " Submit ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵclassMapInterpolate1("btn-sm btn-primary mr-2 ", ctx_r1.env.deviceType() ? "border-radius-5" : "", "");
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 196)(1, "div", 116);
    i0.ɵɵtemplate(2, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_21_button_2_Template, 2, 3, "button", 27);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const j_r36 = i0.ɵɵnextContext().index;
    const i_r37 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.queries != "" && ctx_r1.queriesIndex == j_r36 + "id" + i_r37);
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_22_div_1_app_tiny_mice_1_Template(rf, ctx) { if (rf & 1) {
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-tiny-mice", 211);
    i0.ɵɵlistener("emitEditorValue", function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_22_div_1_app_tiny_mice_1_Template_app_tiny_mice_emitEditorValue_0_listener($event) { i0.ɵɵrestoreView(_r57); const j_r36 = i0.ɵɵnextContext(3).index; const i_r37 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.getNumericWorkSpaceValue($event, i_r37, j_r36)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext(3);
    const item_r35 = ctx_r33.$implicit;
    const j_r36 = ctx_r33.index;
    const i_r37 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("editorPatchValue", item_r35.student_roughdata)("height", 250)("id", i_r37 + "workspace" + j_r36)("readonly", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2")("showDropBtn", false)("showInputBtn", false);
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 209);
    i0.ɵɵtemplate(1, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_22_div_1_app_tiny_mice_1_Template, 1, 6, "app-tiny-mice", 210);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r36 = i0.ɵɵnextContext(2).index;
    const i_r37 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate2("id", "workspace", j_r36, "id", i_r37, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hideRuleContent[i_r37].section[j_r36] == true);
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 205);
    i0.ɵɵtemplate(1, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_22_div_1_Template, 2, 4, "div", 208);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r36 = i0.ɵɵnextContext().index;
    const i_r37 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.hideRuleContent[i_r37] == null ? null : ctx_r1.hideRuleContent[i_r37].section[j_r36]) == true);
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 146)(1, "div", 147)(2, "div", 148)(3, "button", 149);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_i_5_Template, 1, 0, "i", 150)(6, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_i_6_Template, 1, 0, "i", 151);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_7_Template, 3, 0, "div", 152);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 19)(9, "div", 116)(10, "div", 153);
    i0.ɵɵtemplate(11, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_11_Template, 2, 4, "div", 154);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_12_Template, 3, 4, "div", 155)(13, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_13_Template, 9, 23, "div", 156)(14, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_14_Template, 2, 4, "div", 157)(15, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_15_Template, 2, 5, "div", 158)(16, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_16_Template, 2, 2, "div", 158)(17, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_17_Template, 6, 4, "div", 159)(18, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_18_Template, 2, 1, "div", 158);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(19, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_19_Template, 10, 5, "div", 160)(20, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_20_Template, 3, 4, "div", 161)(21, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_21_Template, 3, 1, "div", 160)(22, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_div_22_Template, 2, 1, "div", 161);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    const j_r36 = ctx.index;
    i0.ɵɵproperty("id", item_r35.page_no + "-" + item_r35.sub_question_no + "-" + j_r36);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r35.sub_question_no);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r35.answer_status && item_r35.answer_status != "0" && item_r35.answer_status != "1" && item_r35.answer_status != "4");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r35.answer_status == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r35.question_type_id == "40");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", item_r35.question != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r35.question_type_id == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r35.question_type_id == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r35.question_type_id == 9);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r35.question_type_id == 10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r35.question_type_id == 20);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r35.question_type_id == 30);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r35.question_type_id == 54);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r35.question_type_id != "40");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r35.question_type_id != "40");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r35.question_type_id != "40");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r35.question_type_id != "40");
} }
function AnsweringComponent_div_26_div_6_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 143);
    i0.ɵɵtemplate(1, AnsweringComponent_div_26_div_6_div_5_div_2_div_1_Template, 2, 4, "div", 44)(2, AnsweringComponent_div_26_div_6_div_5_div_2_div_2_Template, 23, 17, "div", 144);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r32 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("hidden", ctx_r1.totalAns == "")("ngStyle", i0.ɵɵpureFunction1(4, _c20, ctx_r1.showpdf === true ? "1rem" : "2rem"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (sec_r32 == null ? null : sec_r32.heading) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", sec_r32 == null ? null : sec_r32.section);
} }
function AnsweringComponent_div_26_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 140)(1, "div", 141);
    i0.ɵɵlistener("scrolled", function AnsweringComponent_div_26_div_6_div_5_Template_div_scrolled_1_listener() { i0.ɵɵrestoreView(_r31); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.onScrollDown()); })("mouseover", function AnsweringComponent_div_26_div_6_div_5_Template_div_mouseover_1_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.scrollQues($event)); });
    i0.ɵɵtemplate(2, AnsweringComponent_div_26_div_6_div_5_div_2_Template, 3, 6, "div", 142);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("scrollPanelSide card ", ctx_r1.env.deviceType() ? "ml-2" : "", "");
    i0.ɵɵproperty("fromRoot", true)("infiniteScrollContainer", ".scrollPanelSide")("infiniteScrollDistance", 5)("infiniteScrollThrottle", 50);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.totalAns);
} }
function AnsweringComponent_div_26_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div");
    i0.ɵɵtemplate(2, AnsweringComponent_div_26_div_6_div_2_Template, 3, 5, "div", 44)(3, AnsweringComponent_div_26_div_6_div_3_Template, 3, 5, "div", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, AnsweringComponent_div_26_div_6_div_4_Template, 3, 2, "div", 120)(5, AnsweringComponent_div_26_div_6_div_5_Template, 3, 8, "div", 121);
    i0.ɵɵelementStart(6, "div", 122)(7, "textarea", 123);
    i0.ɵɵtwoWayListener("ngModelChange", function AnsweringComponent_div_26_div_6_Template_textarea_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.totalFeedBack, $event) || (ctx_r1.totalFeedBack = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.pdf == true ? 4 : 12, " px-0");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-md-12 px-0 d-flex justify-content-between ", ctx_r1.env.deviceType() ? "align-items-center" : "", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.totalAns.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showpdf);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showUploadFile && ctx_r1.showpdf);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.questionData.answers.length != 0);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.totalFeedBack);
    i0.ɵɵproperty("readOnly", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2");
} }
function AnsweringComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "div");
    i0.ɵɵtemplate(2, AnsweringComponent_div_26_div_2_Template, 2, 0, "div", 111)(3, AnsweringComponent_div_26_div_3_Template, 2, 1, "div", 112)(4, AnsweringComponent_div_26_app_annotation_4_Template, 1, 8, "app-annotation", 113)(5, AnsweringComponent_div_26_app_student_web_annotation_5_Template, 1, 2, "app-student-web-annotation", 114);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, AnsweringComponent_div_26_div_6_Template, 8, 12, "div", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.expandPdf ? "12" : "8", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.functionCalled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdf && ctx_r1.functionCalled && !ctx_r1.isPdfAvailable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdf && ctx_r1.functionCalled && ctx_r1.isPdfAvailable && !ctx_r1.env.deviceType());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdf && ctx_r1.functionCalled && ctx_r1.isPdfAvailable && ctx_r1.env.deviceType());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.functionCalled && !ctx_r1.expandPdf);
} }
function AnsweringComponent_section_27_div_3_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 227)(2, "div");
    i0.ɵɵtext(3, "For ");
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5, "student-produced response questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, ", solve each problem and write your answer next to or under the question in the test book as described below:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "ul", 228)(8, "li");
    i0.ɵɵtext(9, "If you find ");
    i0.ɵɵelementStart(10, "strong");
    i0.ɵɵtext(11, "more than one correct answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12, ", enter only one answer.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "li");
    i0.ɵɵtext(14, "Your answer can be up to 5 characters for a ");
    i0.ɵɵelementStart(15, "strong");
    i0.ɵɵtext(16, "positive");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17, " answer and up to 6 characters (including the negative sign) for a ");
    i0.ɵɵelementStart(18, "strong");
    i0.ɵɵtext(19, "negative");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(20, " answer.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "li");
    i0.ɵɵtext(22, "If your answer is a ");
    i0.ɵɵelementStart(23, "strong");
    i0.ɵɵtext(24, "fraction");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(25, " that doesn't fit in the provided space, enter the decimal equivalent.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "li");
    i0.ɵɵtext(27, "If your answer is a ");
    i0.ɵɵelementStart(28, "strong");
    i0.ɵɵtext(29, "decimal");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(30, " that doesn't fit in the provided space, enter it by truncating or rounding at the fourth digit.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "li");
    i0.ɵɵtext(32, "If your answer is a ");
    i0.ɵɵelementStart(33, "strong");
    i0.ɵɵtext(34, "mixed number");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(35, " (such as 3\u00BD), enter it as an improper fraction (7/2) or its decimal equivalent (3.5).");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "li");
    i0.ɵɵtext(37, "Don't enter ");
    i0.ɵɵelementStart(38, "strong");
    i0.ɵɵtext(39, " symbols ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(40, " such as a percent sign, comma, or dollar sign.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(41, "br");
    i0.ɵɵelementStart(42, "div");
    i0.ɵɵtext(43, "Examples:");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(44, "br");
    i0.ɵɵelementStart(45, "table", 229)(46, "thead", 230)(47, "tr")(48, "th");
    i0.ɵɵtext(49, "Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "th");
    i0.ɵɵtext(51, "Acceptable ways to enter answer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "th");
    i0.ɵɵtext(53, "Unacceptable: will NOT receive credit");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(54, "tbody")(55, "tr")(56, "td");
    i0.ɵɵtext(57, "3.5");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "td");
    i0.ɵɵtext(59, "3.5");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "td");
    i0.ɵɵtext(61, "31/2");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(62, "tr");
    i0.ɵɵelement(63, "td");
    i0.ɵɵelementStart(64, "td");
    i0.ɵɵtext(65, "3.50");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "td");
    i0.ɵɵtext(67, "3 1/2");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(68, "tr");
    i0.ɵɵelement(69, "td");
    i0.ɵɵelementStart(70, "td");
    i0.ɵɵtext(71, "7/2");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(72, "td");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(73, "tr")(74, "td");
    i0.ɵɵtext(75, "2/3");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "td");
    i0.ɵɵtext(77, "2/3");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(78, "td");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(79, "tr");
    i0.ɵɵelement(80, "td");
    i0.ɵɵelementStart(81, "td");
    i0.ɵɵtext(82, ".6666");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(83, "td");
    i0.ɵɵtext(84, "0.66");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(85, "tr");
    i0.ɵɵelement(86, "td");
    i0.ɵɵelementStart(87, "td");
    i0.ɵɵtext(88, ".6667");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(89, "td");
    i0.ɵɵtext(90, ".66");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(91, "tr");
    i0.ɵɵelement(92, "td");
    i0.ɵɵelementStart(93, "td");
    i0.ɵɵtext(94, "0.666");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(95, "td");
    i0.ɵɵtext(96, "0.67");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(97, "tr");
    i0.ɵɵelement(98, "td");
    i0.ɵɵelementStart(99, "td");
    i0.ɵɵtext(100, "0.667");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(101, "td");
    i0.ɵɵtext(102, ".67");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(103, "tr")(104, "td");
    i0.ɵɵtext(105, "-1/3");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(106, "td");
    i0.ɵɵtext(107, "-1/3");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(108, "td");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(109, "tr");
    i0.ɵɵelement(110, "td");
    i0.ɵɵelementStart(111, "td");
    i0.ɵɵtext(112, "-.3333");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(113, "td");
    i0.ɵɵtext(114, "-.33");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(115, "tr");
    i0.ɵɵelement(116, "td");
    i0.ɵɵelementStart(117, "td");
    i0.ɵɵtext(118, "-0.333");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(119, "td");
    i0.ɵɵtext(120, "-0.33");
    i0.ɵɵelementEnd()()()()()();
} }
function AnsweringComponent_section_27_div_3_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 233);
    i0.ɵɵelement(1, "span", 53);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, item_r58.subQuestions[0] == null ? null : item_r58.subQuestions[0].passage), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_section_27_div_3_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 231);
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_3_div_1_div_5_div_1_Template, 3, 3, "div", 232);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r58.subQuestions[0] == null ? null : item_r58.subQuestions[0].passage) && (item_r58.subQuestions[0] == null ? null : item_r58.subQuestions[0].passage) != "");
} }
function AnsweringComponent_section_27_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 221)(1, "div", 222)(2, "div", 223)(3, "div", 224);
    i0.ɵɵtemplate(4, AnsweringComponent_section_27_div_3_div_1_div_4_Template, 121, 0, "div", 225)(5, AnsweringComponent_section_27_div_3_div_1_div_5_Template, 2, 1, "div", 226);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(5, _c27, (ctx_r1.getData == null ? null : ctx_r1.getData.is_test) == "1" && i0.ɵɵpureFunction0(3, _c19).includes(ctx_r1.getData == null ? null : ctx_r1.getData.subject.toLowerCase()), !((ctx_r1.getData == null ? null : ctx_r1.getData.is_test) == "1" && i0.ɵɵpureFunction0(4, _c19).includes(ctx_r1.getData == null ? null : ctx_r1.getData.subject.toLowerCase()))));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(8, _c28).indexOf(item_r58.question_type_id) > -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question_type_id == "24");
} }
function AnsweringComponent_section_27_div_3_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " . ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_19_0;
    let tmp_20_0;
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("alert alert-", ((tmp_19_0 = ctx_r1.checkQuestionId(item_r58)) == null ? null : tmp_19_0.is_correct) == "false" || !ctx_r1.correctAnswer ? "danger" : "success", " alert-dismissible fade show");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ((tmp_20_0 = ctx_r1.checkQuestionId(item_r58)) == null ? null : tmp_20_0.is_correct) == "false" || !ctx_r1.correctAnswer ? "You have entered Incorrect Answer !" : "Great Response ! You have entered Correct Answer", "");
} }
function AnsweringComponent_section_27_div_3_div_2_div_12_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 264);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_3_div_2_div_12_i_1_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r59); const item_r58 = i0.ɵɵnextContext(3).$implicit; return i0.ɵɵresetView(item_r58.markedAsReview = true); });
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_section_27_div_3_div_2_div_12_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 265);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_3_div_2_div_12_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r60); const item_r58 = i0.ɵɵnextContext(3).$implicit; return i0.ɵɵresetView(item_r58.markedAsReview = true); });
    i0.ɵɵtext(1, "- Mark For Review");
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_section_27_div_3_div_2_div_12_img_3_Template(rf, ctx) { if (rf & 1) {
    const _r61 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 266);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_3_div_2_div_12_img_3_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r61); const item_r58 = i0.ɵɵnextContext(3).$implicit; return i0.ɵɵresetView(item_r58.markedAsReview = false); });
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_section_27_div_3_div_2_div_12_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 265);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_3_div_2_div_12_span_4_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r62); const item_r58 = i0.ɵɵnextContext(3).$implicit; return i0.ɵɵresetView(item_r58.markedAsReview = false); });
    i0.ɵɵtext(1, "- Marked For Review");
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_section_27_div_3_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 260);
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_3_div_2_div_12_i_1_Template, 1, 0, "i", 261)(2, AnsweringComponent_section_27_div_3_div_2_div_12_span_2_Template, 2, 0, "span", 262)(3, AnsweringComponent_section_27_div_3_div_2_div_12_img_3_Template, 1, 0, "img", 263)(4, AnsweringComponent_section_27_div_3_div_2_div_12_span_4_Template, 2, 0, "span", 262);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !item_r58.markedAsReview);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !item_r58.markedAsReview);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.markedAsReview);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.markedAsReview);
} }
function AnsweringComponent_section_27_div_3_div_2_h4_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 267)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elapsed_r63 = ctx.ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(elapsed_r63.minutes);
} }
function AnsweringComponent_section_27_div_3_div_2_h4_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 267)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elapsed_r64 = ctx.ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(elapsed_r64.seconds);
} }
function AnsweringComponent_section_27_div_3_div_2_i_19_Template(rf, ctx) { if (rf & 1) {
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 268);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_3_div_2_i_19_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r65); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.feedbackExpanded = !ctx_r1.feedbackExpanded); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("fa ", ctx_r1.feedbackExpanded ? "fa-compress" : "fa-expand", " expand_collapse_design");
    i0.ɵɵproperty("title", ctx_r1.feedbackExpanded ? "Collapse Question" : "Expand Question");
} }
function AnsweringComponent_section_27_div_3_div_2_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 269)(1, "div", 270);
    i0.ɵɵelement(2, "p", 271);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", ctx_r1.convertMarkdownToHtml(item_r58.question), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_section_27_div_3_div_2_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 233);
    i0.ɵɵelement(1, "span", 272);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, item_r58.subQuestions[0] == null ? null : item_r58.subQuestions[0].question), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_section_27_div_3_div_2_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 269);
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_3_div_2_div_21_div_1_Template, 3, 3, "div", 232);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r58.subQuestions[0] == null ? null : item_r58.subQuestions[0].question) && (item_r58.subQuestions[0] == null ? null : item_r58.subQuestions[0].question) != "");
} }
function AnsweringComponent_section_27_div_3_div_2_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 273)(1, "b");
    i0.ɵɵelement(2, "h3", 274);
    i0.ɵɵpipe(3, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(3, 1, item_r58.question), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_section_27_div_3_div_2_div_24_div_2_div_7_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 285);
} }
function AnsweringComponent_section_27_div_3_div_2_div_24_div_2_div_7_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 286);
} }
function AnsweringComponent_section_27_div_3_div_2_div_24_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r72 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 282);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_3_div_2_div_24_div_2_div_7_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r72); const k_r69 = i0.ɵɵnextContext().index; const item_r58 = i0.ɵɵnextContext(3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.toggleEliminator($event, item_r58, k_r69)); });
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_3_div_2_div_24_div_2_div_7_i_1_Template, 1, 0, "i", 283)(2, AnsweringComponent_section_27_div_3_div_2_div_24_div_2_div_7_i_2_Template, 1, 0, "i", 284);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r68 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !option_r68.eliminated);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r68.eliminated);
} }
function AnsweringComponent_section_27_div_3_div_2_div_24_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r66 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 277);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_3_div_2_div_24_div_2_Template_div_click_0_listener() { const ctx_r66 = i0.ɵɵrestoreView(_r66); const option_r68 = ctx_r66.$implicit; const k_r69 = ctx_r66.index; const ctx_r69 = i0.ɵɵnextContext(3); const item_r58 = ctx_r69.$implicit; const i_r71 = ctx_r69.index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(option_r68.eliminated ? "" : ctx_r1.cfsGetMultiChoice(i_r71, k_r69, item_r58)); });
    i0.ɵɵelementStart(1, "button", 278);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 279)(4, "span", 176);
    i0.ɵɵelement(5, "span", 280);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, AnsweringComponent_section_27_div_3_div_2_div_24_div_2_div_7_Template, 3, 2, "div", 281);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r68 = ctx.$implicit;
    const k_r69 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵclassMapInterpolate1("", option_r68.eliminated ? "" : "cursor", " overflow-auto row my-3 mx-0 p-2");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c23, k_r69.toString() == option_r68.isSelected));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(13, _c32, option_r68.eliminated));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((k_r69 + 1 + 9).toString(36).toUpperCase());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(15, _c33, option_r68.eliminated));
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 9, option_r68.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(17, _c34).includes(ctx_r1.getData.student_content_status) && !(k_r69.toString() == option_r68.isSelected));
} }
function AnsweringComponent_section_27_div_3_div_2_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 176)(1, "div", 275);
    i0.ɵɵtemplate(2, AnsweringComponent_section_27_div_3_div_2_div_24_div_2_Template, 8, 18, "div", 276);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c21, ctx_r1.checkDisableConditionForQns(item_r58)));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r58.given_answer);
} }
function AnsweringComponent_section_27_div_3_div_2_div_25_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 290);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r73 = ctx.$implicit;
    const i_r71 = i0.ɵɵnextContext(3).index;
    i0.ɵɵpropertyInterpolate("id", "columnId" + i_r71);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 2, list_r73), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_section_27_div_3_div_2_div_25_tr_8_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r74 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 294);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_3_div_2_div_25_tr_8_td_3_input_1_Template_input_click_0_listener() { i0.ɵɵrestoreView(_r74); const k_r75 = i0.ɵɵnextContext().index; const j_r76 = i0.ɵɵnextContext().index; const ctx_r69 = i0.ɵɵnextContext(3); const item_r58 = ctx_r69.$implicit; const i_r71 = ctx_r69.index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.cfsGetChooseTable(item_r58, i_r71, j_r76, k_r75)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r75 = i0.ɵɵnextContext().index;
    const j_r76 = i0.ɵɵnextContext().index;
    const i_r71 = i0.ɵɵnextContext(3).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate2("id", "", j_r76, "chooseSingle", i_r71, "");
    i0.ɵɵpropertyInterpolate2("name", "", i_r71, "choosesingle", j_r76, "corect");
    i0.ɵɵproperty("checked", ctx_r1.totalAns[i_r71].given_answer[j_r76].isSelected == "" ? false : ctx_r1.totalAns[i_r71].given_answer[j_r76].isSelected == k_r75.toString());
} }
function AnsweringComponent_section_27_div_3_div_2_div_25_tr_8_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r77 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 295);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_3_div_2_div_25_tr_8_td_3_input_2_Template_input_click_0_listener() { i0.ɵɵrestoreView(_r77); const k_r75 = i0.ɵɵnextContext().index; const j_r76 = i0.ɵɵnextContext().index; const ctx_r69 = i0.ɵɵnextContext(3); const item_r58 = ctx_r69.$implicit; const i_r71 = ctx_r69.index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.cfsGetChooseTable(item_r58, i_r71, j_r76, k_r75)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r75 = i0.ɵɵnextContext().index;
    const j_r76 = i0.ɵɵnextContext().index;
    const i_r71 = i0.ɵɵnextContext(3).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate2("id", "", j_r76, "chooseMulti", i_r71, "");
    i0.ɵɵproperty("checked", ctx_r1.splitMultiChoose(ctx_r1.totalAns[i_r71].given_answer[j_r76].isSelected, k_r75));
} }
function AnsweringComponent_section_27_div_3_div_2_div_25_tr_8_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_3_div_2_div_25_tr_8_td_3_input_1_Template, 1, 7, "input", 292)(2, AnsweringComponent_section_27_div_3_div_2_div_25_tr_8_td_3_input_2_Template, 1, 4, "input", 293);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question_type_id == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question_type_id == "7");
} }
function AnsweringComponent_section_27_div_3_div_2_div_25_tr_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 291);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, AnsweringComponent_section_27_div_3_div_2_div_25_tr_8_td_3_Template, 3, 2, "td", 194);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r78 = ctx.$implicit;
    const item_r58 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, list_r78.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r58.answer);
} }
function AnsweringComponent_section_27_div_3_div_2_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 287)(1, "table", 288)(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, AnsweringComponent_section_27_div_3_div_2_div_25_th_6_Template, 2, 4, "th", 289);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "tbody");
    i0.ɵɵtemplate(8, AnsweringComponent_section_27_div_3_div_2_div_25_tr_8_Template, 4, 4, "tr", 194);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c21, ctx_r1.checkDisableConditionForQns(item_r58)));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", item_r58.answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r58.given_answer);
} }
function AnsweringComponent_section_27_div_3_div_2_div_26_div_1_span_9_Template(rf, ctx) { if (rf & 1) {
    const _r81 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 304);
    i0.ɵɵpipe(1, "sanitizeHtml");
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_3_div_2_div_26_div_1_span_9_Template_span_click_0_listener($event) { const ctx_r81 = i0.ɵɵrestoreView(_r81); const list_r83 = ctx_r81.$implicit; const k_r84 = ctx_r81.index; const j_r80 = i0.ɵɵnextContext().index; const i_r71 = i0.ɵɵnextContext(3).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.cfsGetDropdown($event, i_r71, j_r80, k_r84, list_r83.listOption)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r83 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r83.listOption), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_section_27_div_3_div_2_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 298)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 299);
    i0.ɵɵelement(4, "button", 300);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementStart(6, "div", 301)(7, "span", 302);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_3_div_2_div_26_div_1_Template_span_click_7_listener($event) { const j_r80 = i0.ɵɵrestoreView(_r79).index; const i_r71 = i0.ɵɵnextContext(3).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.cfsGetDropdown($event, i_r71, j_r80, "", "Select Answer")); });
    i0.ɵɵtext(8, "Select Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, AnsweringComponent_section_27_div_3_div_2_div_26_div_1_span_9_Template, 2, 3, "span", 303);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const data_r85 = ctx.$implicit;
    const j_r80 = ctx.index;
    const i_r71 = i0.ɵɵnextContext(3).index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Dropdown - ", j_r80 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r71 + "dropdown" + j_r80)("innerHTML", data_r85.isSelected === "" ? "Select Answer" : i0.ɵɵpipeBind1(5, 4, data_r85.options[data_r85.isSelected].correctAnswer), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", data_r85.options);
} }
function AnsweringComponent_section_27_div_3_div_2_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 296);
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_3_div_2_div_26_div_1_Template, 10, 6, "div", 297);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c21, ctx_r1.checkDisableConditionForQns(item_r58)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r58.given_answer);
} }
function AnsweringComponent_section_27_div_3_div_2_div_27_div_1_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r86 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 308);
    i0.ɵɵlistener("input", function AnsweringComponent_section_27_div_3_div_2_div_27_div_1_input_3_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r86); const j_r87 = i0.ɵɵnextContext().index; const ctx_r69 = i0.ɵɵnextContext(3); const item_r58 = ctx_r69.$implicit; const i_r71 = ctx_r69.index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.cfsGetInput($event, i_r71, j_r87, item_r58)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r88 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("readOnly", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2")("value", data_r88.isSelected);
} }
function AnsweringComponent_section_27_div_3_div_2_div_27_div_1_app_tiny_mice_4_Template(rf, ctx) { if (rf & 1) {
    const _r89 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-tiny-mice", 187);
    i0.ɵɵlistener("emitEditorValue", function AnsweringComponent_section_27_div_3_div_2_div_27_div_1_app_tiny_mice_4_Template_app_tiny_mice_emitEditorValue_0_listener($event) { i0.ɵɵrestoreView(_r89); const j_r87 = i0.ɵɵnextContext().index; const ctx_r69 = i0.ɵɵnextContext(3); const item_r58 = ctx_r69.$implicit; const i_r71 = ctx_r69.index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.cfsGetInput($event, i_r71, j_r87, item_r58)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r89 = i0.ɵɵnextContext();
    const data_r88 = ctx_r89.$implicit;
    const j_r87 = ctx_r89.index;
    const i_r71 = i0.ɵɵnextContext(3).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("editorPatchValue", data_r88.isSelected == "" ? false : data_r88.isSelected)("height", 100)("id", i_r71 + "input" + j_r87)("readonly", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2")("showDropBtn", false)("showInputBtn", false);
} }
function AnsweringComponent_section_27_div_3_div_2_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 306)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, AnsweringComponent_section_27_div_3_div_2_div_27_div_1_input_3_Template, 1, 2, "input", 307)(4, AnsweringComponent_section_27_div_3_div_2_div_27_div_1_app_tiny_mice_4_Template, 1, 6, "app-tiny-mice", 183);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r87 = ctx.index;
    const item_r58 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Input - ", j_r87 + 1, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.editor_type == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.editor_type != 1);
} }
function AnsweringComponent_section_27_div_3_div_2_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 296);
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_3_div_2_div_27_div_1_Template, 5, 3, "div", 305);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c21, ctx_r1.checkDisableConditionForQns(item_r58)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r58.given_answer);
} }
function AnsweringComponent_section_27_div_3_div_2_div_28_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 311)(1, "div", 312)(2, "div", 313)(3, "span", 314);
    i0.ɵɵelement(4, "img", 315);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "h4", 316);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r92 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, list_r92.options), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_section_27_div_3_div_2_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r91 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 296)(1, "div", 116)(2, "div", 309);
    i0.ɵɵlistener("cdkDropListDropped", function AnsweringComponent_section_27_div_3_div_2_div_28_Template_div_cdkDropListDropped_2_listener($event) { i0.ɵɵrestoreView(_r91); const i_r71 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.droppedCorrect($event, i_r71)); });
    i0.ɵɵtemplate(3, AnsweringComponent_section_27_div_3_div_2_div_28_div_3_Template, 7, 3, "div", 310);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c21, ctx_r1.checkDisableConditionForQns(item_r58)));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", item_r58.given_answer);
} }
function AnsweringComponent_section_27_div_3_div_2_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r93 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 317)(1, "app-tiny-mice", 187);
    i0.ɵɵlistener("emitEditorValue", function AnsweringComponent_section_27_div_3_div_2_div_29_Template_app_tiny_mice_emitEditorValue_1_listener($event) { i0.ɵɵrestoreView(_r93); const i_r71 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.cfsGetPara($event, i_r71)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r69 = i0.ɵɵnextContext(2);
    const item_r58 = ctx_r69.$implicit;
    const i_r71 = ctx_r69.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c21, ctx_r1.checkDisableConditionForQns(item_r58)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("editorPatchValue", item_r58.given_answer[0].isSelected == "" ? false : item_r58.given_answer[0].isSelected)("height", 120)("id", i_r71 + "para")("readonly", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2")("showDropBtn", false)("showInputBtn", false);
} }
function AnsweringComponent_section_27_div_3_div_2_div_30_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Current Version");
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_section_27_div_3_div_2_div_30_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Version ", ctx_r1.selectedFeedBackIndex, "");
} }
function AnsweringComponent_section_27_div_3_div_2_div_30_div_7_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 328)(1, "div")(2, "h5", 329);
    i0.ɵɵtext(3);
    i0.ɵɵelementStart(4, "span", 330);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "span", 331);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const feedback_r96 = ctx.item;
    const index_r97 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c36, ctx_r1.selectedFeedBackIndex === ctx_r1.previousFeedBack.length - index_r97));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Version ", ctx_r1.previousFeedBack.length - index_r97, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", feedback_r96 == null ? null : feedback_r96.student_score, " / ", feedback_r96 == null ? null : feedback_r96.total_score, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(8, _c37, ctx_r1.getFeedbackLabel(feedback_r96).label === "Exceptional", ctx_r1.getFeedbackLabel(feedback_r96).label === "Good", ctx_r1.getFeedbackLabel(feedback_r96).label === "Improve"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getFeedbackLabel(feedback_r96).label, "");
} }
function AnsweringComponent_section_27_div_3_div_2_div_30_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r95 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 325)(1, "label", 326);
    i0.ɵɵtext(2, "Select Version");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ng-select", 327);
    i0.ɵɵlistener("change", function AnsweringComponent_section_27_div_3_div_2_div_30_div_7_Template_ng_select_change_3_listener($event) { i0.ɵɵrestoreView(_r95); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.feedbackSelected($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function AnsweringComponent_section_27_div_3_div_2_div_30_div_7_Template_ng_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r95); const ctx_r1 = i0.ɵɵnextContext(5); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedVersion, $event) || (ctx_r1.selectedVersion = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(4, AnsweringComponent_section_27_div_3_div_2_div_30_div_7_ng_template_4_Template, 8, 12, "ng-template", 73);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("items", ctx_r1.previousFeedBack)("clearable", false);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedVersion);
} }
function AnsweringComponent_section_27_div_3_div_2_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r94 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 318)(1, "div")(2, "div", 319)(3, "div", 221)(4, "h5", 320);
    i0.ɵɵtemplate(5, AnsweringComponent_section_27_div_3_div_2_div_30_span_5_Template, 2, 0, "span", 155)(6, AnsweringComponent_section_27_div_3_div_2_div_30_span_6_Template, 2, 1, "span", 155);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, AnsweringComponent_section_27_div_3_div_2_div_30_div_7_Template, 5, 3, "div", 321);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "textarea", 322);
    i0.ɵɵlistener("ngModelChange", function AnsweringComponent_section_27_div_3_div_2_div_30_Template_textarea_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r94); const item_r58 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onEssayAnswerChange(item_r58, $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 323)(10, "span", 324);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("text-area col-12 ", ctx_r1.isSingleQnsWithFeedbackType ? "pl-4" : "", "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.reviseSelected != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.reviseSelected == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.previousFeedBack.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("rows", ctx_r1.previousFeedBack.length < ctx_r1.maximumAllowedCount ? "24" : "21");
    i0.ɵɵproperty("ngModel", ctx_r1.getEssayAnswer(item_r58))("readonly", ctx_r1.reviseSelected == "" || ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2")("ngModelOptions", i0.ɵɵpureFunction0(11, _c35));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.wordCount(item_r58), "\u00A0Words");
} }
function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_1_div_2_span_7_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 285);
} }
function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_1_div_2_span_7_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 286);
} }
function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_1_div_2_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r105 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 282);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_1_div_2_span_7_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r105); const k_r101 = i0.ɵɵnextContext().index; const sec_r103 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.toggleEliminator($event, sec_r103, k_r101)); });
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_1_div_2_span_7_i_1_Template, 1, 0, "i", 283)(2, AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_1_div_2_span_7_i_2_Template, 1, 0, "i", 284);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r100 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !option_r100.eliminated);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r100.eliminated);
} }
function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r98 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 277);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_1_div_2_Template_div_click_0_listener() { const ctx_r98 = i0.ɵɵrestoreView(_r98); const option_r100 = ctx_r98.$implicit; const k_r101 = ctx_r98.index; const ctx_r101 = i0.ɵɵnextContext(2); const sec_r103 = ctx_r101.$implicit; const j_r104 = ctx_r101.index; const i_r71 = i0.ɵɵnextContext(3).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(option_r100.eliminated ? "" : ctx_r1.cfsPassageMultiChoice(i_r71, j_r104, k_r101, sec_r103)); });
    i0.ɵɵelementStart(1, "button", 278);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 337)(4, "span", 338);
    i0.ɵɵelement(5, "span", 291);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_1_div_2_span_7_Template, 3, 2, "span", 281);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r100 = ctx.$implicit;
    const k_r101 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵclassMapInterpolate1("", option_r100.eliminated ? "" : "cursor", " overflow-auto row my-3 mx-0 p-2");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c23, option_r100.isSelected == k_r101.toString()));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(13, _c32, option_r100.eliminated));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((k_r101 + 1 + 9).toString(36).toUpperCase());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(15, _c33, option_r100.eliminated));
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 9, option_r100.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(17, _c34).includes(ctx_r1.getData.student_content_status) && !(k_r101.toString() == option_r100.isSelected));
} }
function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 176)(1, "div", 336);
    i0.ɵɵtemplate(2, AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_1_div_2_Template, 8, 18, "div", 276);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const sec_r103 = i0.ɵɵnextContext().$implicit;
    const item_r58 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c21, ctx_r1.checkDisableConditionForQns(item_r58)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(7, _c27, (ctx_r1.getData == null ? null : ctx_r1.getData.is_test) == "1" && i0.ɵɵpureFunction0(5, _c19).includes(ctx_r1.getData == null ? null : ctx_r1.getData.subject.toLowerCase()), !((ctx_r1.getData == null ? null : ctx_r1.getData.is_test) == "1" && i0.ɵɵpureFunction0(6, _c19).includes(ctx_r1.getData == null ? null : ctx_r1.getData.subject.toLowerCase()))));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", sec_r103.given_answer);
} }
function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_2_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 291);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r106 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r106), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_2_tr_8_td_2_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r107 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 344);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_2_tr_8_td_2_input_1_Template_input_click_0_listener() { i0.ɵɵrestoreView(_r107); const l_r108 = i0.ɵɵnextContext().index; const k_r109 = i0.ɵɵnextContext().index; const ctx_r101 = i0.ɵɵnextContext(2); const sec_r103 = ctx_r101.$implicit; const j_r104 = ctx_r101.index; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.cfsGetChooseTable(sec_r103, j_r104, k_r109, l_r108)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r108 = i0.ɵɵnextContext().index;
    const k_r109 = i0.ɵɵnextContext().index;
    const ctx_r101 = i0.ɵɵnextContext(2);
    const sec_r103 = ctx_r101.$implicit;
    const j_r104 = ctx_r101.index;
    const i_r71 = i0.ɵɵnextContext(3).index;
    i0.ɵɵpropertyInterpolate3("name", "", i_r71, "choose", k_r109, "passas", j_r104, "");
    i0.ɵɵproperty("checked", sec_r103.given_answer[k_r109].isSelected == "" ? false : sec_r103.given_answer[k_r109].isSelected == l_r108.toString());
} }
function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_2_tr_8_td_2_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r110 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 345);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_2_tr_8_td_2_input_2_Template_input_click_0_listener() { i0.ɵɵrestoreView(_r110); const l_r108 = i0.ɵɵnextContext().index; const k_r109 = i0.ɵɵnextContext().index; const ctx_r101 = i0.ɵɵnextContext(2); const sec_r103 = ctx_r101.$implicit; const j_r104 = ctx_r101.index; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.cfsGetChooseTable(sec_r103, j_r104, k_r109, l_r108)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r108 = i0.ɵɵnextContext().index;
    const k_r109 = i0.ɵɵnextContext().index;
    const sec_r103 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("checked", ctx_r1.splitMultiChoose(sec_r103.given_answer[k_r109].isSelected, l_r108));
} }
function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_2_tr_8_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_2_tr_8_td_2_input_1_Template, 1, 5, "input", 342)(2, AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_2_tr_8_td_2_input_2_Template, 1, 1, "input", 343);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r103 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r103.question_type_id == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r103.question_type_id == "7");
} }
function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_2_tr_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 291);
    i0.ɵɵtemplate(2, AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_2_tr_8_td_2_Template, 3, 2, "td", 194);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r111 = ctx.$implicit;
    const sec_r103 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", list_r111.options, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", sec_r103.answer);
} }
function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 339)(1, "table", 340)(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_2_th_6_Template, 2, 3, "th", 341);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "tbody");
    i0.ɵɵtemplate(8, AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_2_tr_8_Template, 3, 2, "tr", 194);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const sec_r103 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c21, ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2"));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", sec_r103.answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", sec_r103.given_answer);
} }
function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_3_div_1_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r112 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 349);
    i0.ɵɵlistener("input", function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_3_div_1_input_3_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r112); const k_r113 = i0.ɵɵnextContext().index; const ctx_r101 = i0.ɵɵnextContext(2); const sec_r103 = ctx_r101.$implicit; const j_r104 = ctx_r101.index; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.cfsGetInput($event, j_r104, k_r113, sec_r103)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r114 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("readOnly", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2")("value", data_r114.isSelected);
} }
function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_3_div_1_app_tiny_mice_4_Template(rf, ctx) { if (rf & 1) {
    const _r115 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-tiny-mice", 187);
    i0.ɵɵlistener("emitEditorValue", function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_3_div_1_app_tiny_mice_4_Template_app_tiny_mice_emitEditorValue_0_listener($event) { i0.ɵɵrestoreView(_r115); const k_r113 = i0.ɵɵnextContext().index; const ctx_r101 = i0.ɵɵnextContext(2); const sec_r103 = ctx_r101.$implicit; const j_r104 = ctx_r101.index; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.cfsGetInput($event, j_r104, k_r113, sec_r103)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r115 = i0.ɵɵnextContext();
    const data_r114 = ctx_r115.$implicit;
    const k_r113 = ctx_r115.index;
    const j_r104 = i0.ɵɵnextContext(2).index;
    const i_r71 = i0.ɵɵnextContext(3).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("editorPatchValue", data_r114.isSelected == "" ? false : data_r114.isSelected)("height", 120)("id", j_r104 + "inputPass" + k_r113 + "ssa" + i_r71)("readonly", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2")("showDropBtn", false)("showInputBtn", false);
} }
function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 347)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_3_div_1_input_3_Template, 1, 2, "input", 348)(4, AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_3_div_1_app_tiny_mice_4_Template, 1, 6, "app-tiny-mice", 183);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r113 = ctx.index;
    const sec_r103 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Input - ", k_r113 + 1, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r103.editor_type == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r103.editor_type != 1);
} }
function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_3_div_1_Template, 5, 3, "div", 346);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r103 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", sec_r103.given_answer);
} }
function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r117 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 350)(1, "app-tiny-mice", 187);
    i0.ɵɵlistener("emitEditorValue", function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_4_Template_app_tiny_mice_emitEditorValue_1_listener($event) { i0.ɵɵrestoreView(_r117); const ctx_r101 = i0.ɵɵnextContext(); const sec_r103 = ctx_r101.$implicit; const j_r104 = ctx_r101.index; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.cfsGetPassageEssay($event, j_r104, sec_r103)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r101 = i0.ɵɵnextContext();
    const sec_r103 = ctx_r101.$implicit;
    const j_r104 = ctx_r101.index;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("editorPatchValue", (sec_r103.given_answer[0] == null ? null : sec_r103.given_answer[0].isSelected) == "" ? false : sec_r103.given_answer[0] == null ? null : sec_r103.given_answer[0].isSelected)("height", 200)("id", j_r104 + "essayPass")("readonly", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2")("showDropBtn", false)("showInputBtn", false);
} }
function AnsweringComponent_section_27_div_3_div_2_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 333);
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_1_Template, 3, 10, "div", 157)(2, AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_2_Template, 9, 5, "div", 334)(3, AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_3_Template, 2, 1, "div", 155)(4, AnsweringComponent_section_27_div_3_div_2_div_31_div_1_div_4_Template, 2, 6, "div", 335);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r103 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r103.question_type_id == 1 || sec_r103.question_type_id == 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r103.question_type_id == "5" || sec_r103.question_type_id == "7");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r103.question_type_id == "10");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r103.question_type_id == "20");
} }
function AnsweringComponent_section_27_div_3_div_2_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 176);
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_3_div_2_div_31_div_1_Template, 5, 4, "div", 332);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("mt-", (item_r58.subQuestions[0] == null ? null : item_r58.subQuestions[0].question) != "" ? "0" : "4", "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c21, ctx_r1.checkDisableConditionForQns(item_r58)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r58.subQuestions);
} }
function AnsweringComponent_section_27_div_3_div_2_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r118 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 351)(1, "app-tiny-mice", 187);
    i0.ɵɵlistener("emitEditorValue", function AnsweringComponent_section_27_div_3_div_2_div_32_Template_app_tiny_mice_emitEditorValue_1_listener($event) { i0.ɵɵrestoreView(_r118); const i_r71 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.cfsGetHighlight($event, i_r71)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r69 = i0.ɵɵnextContext(2);
    const item_r58 = ctx_r69.$implicit;
    const i_r71 = ctx_r69.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("editorPatchValue", (item_r58.given_answer[0] == null ? null : item_r58.given_answer[0].isSelected) == "" ? item_r58.options[0].options : item_r58.given_answer[0] == null ? null : item_r58.given_answer[0].isSelected)("height", 120)("id", i_r71 + "delta")("readonly", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2")("showDropBtn", false)("showInputBtn", false);
} }
function AnsweringComponent_section_27_div_3_div_2_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r119 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 352)(1, "div", 353)(2, "app-graph-component", 354);
    i0.ɵɵlistener("valueChange", function AnsweringComponent_section_27_div_3_div_2_div_33_Template_app_graph_component_valueChange_2_listener($event) { i0.ɵɵrestoreView(_r119); const i_r71 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.cfsgetGraphValue($event, i_r71)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 355)(4, "app-tiny-mice", 187);
    i0.ɵɵlistener("emitEditorValue", function AnsweringComponent_section_27_div_3_div_2_div_33_Template_app_tiny_mice_emitEditorValue_4_listener($event) { i0.ɵɵrestoreView(_r119); const i_r71 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.cfsGetGraghEditor($event, i_r71)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r69 = i0.ɵɵnextContext(2);
    const item_r58 = ctx_r69.$implicit;
    const i_r71 = ctx_r69.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("editMode", ctx_r1.getData.student_content_status == "1" || ctx_r1.getData.student_content_status == "2")("editPatchValue", item_r58.given_answer[0].correctAnswer ? ctx_r1.parseVal(item_r58.given_answer[0].correctAnswer) : false)("graphId", "graphAnswering" + i_r71)("questionType", item_r58.question_type_id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("editorPatchValue", item_r58.student_editor_answer == "" ? false : item_r58.student_editor_answer)("height", 120)("id", i_r71 + "explaino")("readonly", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2")("showDropBtn", false)("showInputBtn", false);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_2_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 366);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r120 = i0.ɵɵnextContext().index;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((k_r120 + 1 + 9).toString(36).toUpperCase());
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_2_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 367);
    i0.ɵɵelement(1, "span", 291);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r120 = i0.ɵɵnextContext().index;
    const item_r58 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, item_r58.options[k_r120].options), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 363);
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_3_div_2_div_34_div_2_div_4_button_1_Template, 2, 1, "button", 364)(2, AnsweringComponent_section_27_div_3_div_2_div_34_div_2_div_4_div_2_Template, 3, 3, "div", 365);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r121 = ctx.$implicit;
    i0.ɵɵclassMap(option_r121.correctAnswer != "" ? "my-3 mx-2 p-2 cursor overflow-auto row" : "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c38, option_r121.correctAnswer != ""));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r121.correctAnswer != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r121.correctAnswer != "");
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 360)(1, "label", 361)(2, "strong");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, AnsweringComponent_section_27_div_3_div_2_div_34_div_2_div_4_Template, 3, 8, "div", 362);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", item_r58.answer);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_3_th_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 291);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r122 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r122), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_3_tr_11_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 372);
} if (rf & 2) {
    const k_r123 = i0.ɵɵnextContext().index;
    const j_r124 = i0.ɵɵnextContext().index;
    const ctx_r69 = i0.ɵɵnextContext(4);
    const item_r58 = ctx_r69.$implicit;
    const i_r71 = ctx_r69.index;
    i0.ɵɵpropertyInterpolate2("name", "", i_r71, "choosesingleCorrect", j_r124, "corect");
    i0.ɵɵproperty("checked", item_r58.heading_option[j_r124].correctActive === k_r123);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_3_tr_11_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 373);
} if (rf & 2) {
    const k_r123 = i0.ɵɵnextContext().index;
    const j_r124 = i0.ɵɵnextContext().index;
    const ctx_r69 = i0.ɵɵnextContext(4);
    const item_r58 = ctx_r69.$implicit;
    const i_r71 = ctx_r69.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate3("id", "chooseMultipass", i_r71, "", j_r124, "", k_r123, "");
    i0.ɵɵproperty("checked", ctx_r1.patchCorrectMultiChoiceAnswer(item_r58.heading_option, k_r123, j_r124));
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_3_tr_11_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_3_div_2_div_34_div_3_tr_11_td_3_input_1_Template, 1, 4, "input", 370)(2, AnsweringComponent_section_27_div_3_div_2_div_34_div_3_tr_11_td_3_input_2_Template, 1, 5, "input", 371);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question_type_id == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question_type_id == "7");
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_3_tr_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 291);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, AnsweringComponent_section_27_div_3_div_2_div_34_div_3_tr_11_td_3_Template, 3, 2, "td", 194);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r125 = ctx.$implicit;
    const item_r58 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, list_r125.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r58.answer);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 368)(1, "label")(2, "strong");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "table", 369)(5, "thead")(6, "tr")(7, "th");
    i0.ɵɵtext(8, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, AnsweringComponent_section_27_div_3_div_2_div_34_div_3_th_9_Template, 2, 3, "th", 341);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "tbody");
    i0.ɵɵtemplate(11, AnsweringComponent_section_27_div_3_div_2_div_34_div_3_tr_11_Template, 4, 4, "tr", 194);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", item_r58.answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r58.given_answer);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_4_div_4_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 381);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const option_r126 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, option_r126.listOption), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 375)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 376);
    i0.ɵɵelement(4, "div", 377);
    i0.ɵɵelementStart(5, "div", 378)(6, "span", 379);
    i0.ɵɵtext(7, "Select Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, AnsweringComponent_section_27_div_3_div_2_div_34_div_4_div_4_span_8_Template, 2, 3, "span", 380);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const j_r127 = ctx.index;
    const item_r58 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Dropdown - ", j_r127 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("id", "dropdown", j_r127, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", item_r58.options);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 360)(1, "label")(2, "b");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, AnsweringComponent_section_27_div_3_div_2_div_34_div_4_div_4_Template, 9, 4, "div", 374);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", item_r58.answer);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 306)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 382);
    i0.ɵɵelement(4, "div", 53);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r128 = ctx.$implicit;
    const j_r129 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Input - ", j_r129 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, data_r128.options[0].value), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 360)(1, "label")(2, "b");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, AnsweringComponent_section_27_div_3_div_2_div_34_div_5_div_4_Template, 6, 4, "div", 305);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", item_r58.options);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 311)(1, "div", 312)(2, "div", 313)(3, "span", 314);
    i0.ɵɵelement(4, "img", 315);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "h4", 316);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r130 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, list_r130.correctAnswer), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 360)(1, "label")(2, "b");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 20);
    i0.ɵɵtemplate(5, AnsweringComponent_section_27_div_3_div_2_div_34_div_6_div_5_Template, 7, 3, "div", 310);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", item_r58.answer);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 306)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 382);
    i0.ɵɵelement(4, "div", 53);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r131 = ctx.$implicit;
    const j_r132 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Answer - ", j_r132 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, data_r131.correctAnswer), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 360)(1, "label")(2, "b");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, AnsweringComponent_section_27_div_3_div_2_div_34_div_7_div_4_Template, 6, 4, "div", 305);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", item_r58.answer);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_1_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 366);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r133 = i0.ɵɵnextContext().index;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((k_r133 + 1 + 9).toString(36).toUpperCase());
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_1_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 367);
    i0.ɵɵelement(1, "span", 291);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r133 = i0.ɵɵnextContext().index;
    const sec_r134 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, sec_r134.options[k_r133].options), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 363);
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_1_div_4_button_1_Template, 2, 1, "button", 364)(2, AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_1_div_4_div_2_Template, 3, 3, "div", 365);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r135 = ctx.$implicit;
    i0.ɵɵclassMap(option_r135.correctAnswer !== "" ? "cursor overflow-auto row my-3 mx-0 p-2" : "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c38, option_r135.correctAnswer !== ""));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r135.correctAnswer != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r135.correctAnswer !== "");
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 360)(1, "label", 361)(2, "strong");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_1_div_4_Template, 3, 8, "div", 362);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r134 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", sec_r134.answer);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_2_th_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 291);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r136 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r136), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_2_tr_11_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 372);
} if (rf & 2) {
    const k_r137 = i0.ɵɵnextContext().index;
    const j_r138 = i0.ɵɵnextContext().index;
    const sec_r134 = i0.ɵɵnextContext(2).$implicit;
    const i_r71 = i0.ɵɵnextContext(4).index;
    i0.ɵɵpropertyInterpolate2("name", "", i_r71, "choosesingleCorrect", j_r138, "corect");
    i0.ɵɵproperty("checked", sec_r134.heading_option[j_r138].correctActive === k_r137);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_2_tr_11_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 373);
} if (rf & 2) {
    const k_r137 = i0.ɵɵnextContext().index;
    const j_r138 = i0.ɵɵnextContext().index;
    const sec_r134 = i0.ɵɵnextContext(2).$implicit;
    const i_r71 = i0.ɵɵnextContext(4).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate3("id", "chooseMultipass", i_r71, "", j_r138, "", k_r137, "");
    i0.ɵɵproperty("checked", ctx_r1.patchCorrectMultiChoiceAnswer(sec_r134.heading_option, k_r137, j_r138));
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_2_tr_11_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_2_tr_11_td_3_input_1_Template, 1, 4, "input", 370)(2, AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_2_tr_11_td_3_input_2_Template, 1, 5, "input", 371);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r134 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r134.question_type_id == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r134.question_type_id == "7");
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_2_tr_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 291);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_2_tr_11_td_3_Template, 3, 2, "td", 194);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r139 = ctx.$implicit;
    const sec_r134 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, list_r139.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", sec_r134.answer);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 384)(1, "label")(2, "strong");
    i0.ɵɵtext(3, "Correct Answer :");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "table", 369)(5, "thead")(6, "tr")(7, "th");
    i0.ɵɵtext(8, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_2_th_9_Template, 2, 3, "th", 341);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "tbody");
    i0.ɵɵtemplate(11, AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_2_tr_11_Template, 4, 4, "tr", 194);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const sec_r134 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", sec_r134.answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", sec_r134.given_answer);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 306)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 382);
    i0.ɵɵelement(4, "div", 53);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r140 = ctx.$implicit;
    const j_r141 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Input - ", j_r141 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, data_r140.options[0].value), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 360)(1, "label")(2, "b");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_3_div_4_Template, 6, 4, "div", 305);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r134 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", sec_r134.options);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 298)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 382);
    i0.ɵɵelement(4, "div", 53);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r142 = ctx.$implicit;
    const j_r143 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Answer - ", j_r143 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, data_r142.correctAnswer), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 360)(1, "label")(2, "b");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_4_div_4_Template, 6, 4, "div", 297);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r134 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", sec_r134.answer);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 333);
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_1_Template, 5, 1, "div", 358)(2, AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_2_Template, 12, 2, "div", 383)(3, AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_3_Template, 5, 1, "div", 358)(4, AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_div_4_Template, 5, 1, "div", 358);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r134 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r134.question_type_id == 1 || sec_r134.question_type_id == 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r134.question_type_id == "5" || sec_r134.question_type_id == "7");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r134.question_type_id == "10");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r134.question_type_id == "20");
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 360);
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_3_div_2_div_34_div_8_div_1_Template, 5, 4, "div", 332);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r58.subQuestions);
} }
function AnsweringComponent_section_27_div_3_div_2_div_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 356)(1, "div", 357);
    i0.ɵɵtemplate(2, AnsweringComponent_section_27_div_3_div_2_div_34_div_2_Template, 5, 1, "div", 358)(3, AnsweringComponent_section_27_div_3_div_2_div_34_div_3_Template, 12, 2, "div", 359)(4, AnsweringComponent_section_27_div_3_div_2_div_34_div_4_Template, 5, 1, "div", 358)(5, AnsweringComponent_section_27_div_3_div_2_div_34_div_5_Template, 5, 1, "div", 358)(6, AnsweringComponent_section_27_div_3_div_2_div_34_div_6_Template, 6, 1, "div", 358)(7, AnsweringComponent_section_27_div_3_div_2_div_34_div_7_Template, 5, 1, "div", 358)(8, AnsweringComponent_section_27_div_3_div_2_div_34_div_8_Template, 2, 1, "div", 358);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c21, ctx_r1.checkDisableConditionForQns(item_r58)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question_type_id == 1 || item_r58.question_type_id == 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question_type_id == 5 || item_r58.question_type_id == 7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question_type_id == 9);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question_type_id == 10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question_type_id == 16);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(10, _c30).indexOf(item_r58.question_type_id) > -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question_type_id == 24);
} }
function AnsweringComponent_section_27_div_3_div_2_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 116)(1, "label", 361)(2, "strong");
    i0.ɵɵtext(3, "Explanation");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 387);
    i0.ɵɵelement(5, "span", 291);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, item_r58.explanation), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_section_27_div_3_div_2_div_35_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 388)(1, "label", 361)(2, "strong");
    i0.ɵɵtext(3, "Resource");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 387);
    i0.ɵɵelement(5, "span", 291);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, item_r58.resource), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_section_27_div_3_div_2_div_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 385);
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_3_div_2_div_35_div_1_Template, 7, 3, "div", 112)(2, AnsweringComponent_section_27_div_3_div_2_div_35_div_2_Template, 7, 3, "div", 386);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.explanation != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.resource != "");
} }
function AnsweringComponent_section_27_div_3_div_2_div_36_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 116)(1, "label", 361)(2, "strong");
    i0.ɵɵtext(3, "Explanation");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 389);
    i0.ɵɵelement(5, "span", 291);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const sec_r144 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, sec_r144.explanation), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_section_27_div_3_div_2_div_36_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 388)(1, "label", 361)(2, "strong");
    i0.ɵɵtext(3, "Resource");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 389);
    i0.ɵɵelement(5, "span", 291);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const sec_r144 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, sec_r144.resource), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_section_27_div_3_div_2_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 333);
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_3_div_2_div_36_div_1_div_1_Template, 7, 3, "div", 112)(2, AnsweringComponent_section_27_div_3_div_2_div_36_div_1_div_2_Template, 7, 3, "div", 386);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r144 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (sec_r144.is_correct == "true" || sec_r144.is_correct == "false") && sec_r144.explanation != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (sec_r144.is_correct == "true" || sec_r144.is_correct == "false") && sec_r144.resource != "");
} }
function AnsweringComponent_section_27_div_3_div_2_div_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_3_div_2_div_36_div_1_Template, 3, 2, "div", 332);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r58.subQuestions);
} }
function AnsweringComponent_section_27_div_3_div_2_div_37_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r145 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 392);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_3_div_2_div_37_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r145); const item_r58 = i0.ɵɵnextContext(3).$implicit; item_r58.workspaceClicked = !item_r58.workspaceClicked; return i0.ɵɵresetView(item_r58.feedBackClicked = false); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.isSingleQnsWithFeedbackType ? "Cited Source" : "WorkSpace");
} }
function AnsweringComponent_section_27_div_3_div_2_div_37_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r146 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 393);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_3_div_2_div_37_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r146); const item_r58 = i0.ɵɵnextContext(3).$implicit; item_r58.feedBackClicked = !item_r58.feedBackClicked; return i0.ɵɵresetView(item_r58.workspaceClicked = false); });
    i0.ɵɵtext(1, "FeedBack");
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_section_27_div_3_div_2_div_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div");
    i0.ɵɵtemplate(2, AnsweringComponent_section_27_div_3_div_2_div_37_button_2_Template, 2, 1, "button", 390)(3, AnsweringComponent_section_27_div_3_div_2_div_37_button_3_Template, 2, 0, "button", 391);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("row ", item_r58.question_type_id == "55" ? "mt-3" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-md-12 ", item_r58.question_type_id == "55" ? "text-right pr-3" : "px-0", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.questionData.allow_workspace == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.questionData.allow_feedback == "1" && !ctx_r1.isSingleQnsWithFeedbackType);
} }
function AnsweringComponent_section_27_div_3_div_2_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r147 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 394)(1, "div", 395)(2, "div", 21)(3, "div", 396)(4, "h5", 397);
    i0.ɵɵtext(5, "Cited Source");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 398)(7, "div", 399)(8, "app-tiny-mice", 400);
    i0.ɵɵlistener("emitEditorValue", function AnsweringComponent_section_27_div_3_div_2_div_38_Template_app_tiny_mice_emitEditorValue_8_listener($event) { i0.ɵɵrestoreView(_r147); const i_r71 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getWorkSpaceValue($event, i_r71)); });
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngbCollapse", !item_r58.workspaceClicked);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("editorPatchValue", item_r58.PatchData && item_r58.question_type_id != "24" ? item_r58.student_roughdata : item_r58.PatchData && item_r58.question_type_id == "24" ? item_r58.subQuestions[0] == null ? null : item_r58.subQuestions[0].student_roughdata : false)("height", 140)("readonly", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2")("showDropBtn", false)("showInputBtn", false);
} }
function AnsweringComponent_section_27_div_3_div_2_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r148 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 401)(1, "label")(2, "strong");
    i0.ɵɵtext(3, "WorkSpace:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 399)(5, "app-tiny-mice", 400);
    i0.ɵɵlistener("emitEditorValue", function AnsweringComponent_section_27_div_3_div_2_div_39_Template_app_tiny_mice_emitEditorValue_5_listener($event) { i0.ɵɵrestoreView(_r148); const i_r71 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getWorkSpaceValue($event, i_r71)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r58 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngbCollapse", !item_r58.workspaceClicked);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("editorPatchValue", item_r58.PatchData && item_r58.question_type_id != "24" ? item_r58.student_roughdata : item_r58.PatchData && item_r58.question_type_id == "24" ? item_r58.subQuestions[0] == null ? null : item_r58.subQuestions[0].student_roughdata : false)("height", 140)("readonly", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2")("showDropBtn", false)("showInputBtn", false);
} }
function AnsweringComponent_section_27_div_3_div_2_div_40_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r150 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 404)(1, "div", 116)(2, "button", 75);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_3_div_2_div_40_div_7_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r150); const i_r71 = i0.ɵɵnextContext(3).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.submitQueries(i_r71, 0, "scratch")); });
    i0.ɵɵtext(3, " Save ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("pull-right btn btn-primary ", ctx_r1.env.deviceType() ? "border-radius-5" : "", "");
} }
function AnsweringComponent_section_27_div_3_div_2_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r149 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 402)(1, "div", 19)(2, "label")(3, "strong");
    i0.ɵɵtext(4, "FeedBack :");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 399)(6, "textarea", 403);
    i0.ɵɵlistener("input", function AnsweringComponent_section_27_div_3_div_2_div_40_Template_textarea_input_6_listener($event) { i0.ɵɵrestoreView(_r149); const i_r71 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getQueries($event, i_r71, 0, "scratch")); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(7, AnsweringComponent_section_27_div_3_div_2_div_40_div_7_Template, 4, 3, "div", 215);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r69 = i0.ɵɵnextContext(2);
    const item_r58 = ctx_r69.$implicit;
    const i_r71 = ctx_r69.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngbCollapse", !item_r58.feedBackClicked);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("readOnly", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2")("value", item_r58.question_type_id != "24" ? item_r58.student_feedback : item_r58.subQuestions[0] == null ? null : item_r58.subQuestions[0].student_feedback);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.queries != "" && ctx_r1.queriesIndex == "id" + i_r71);
} }
function AnsweringComponent_section_27_div_3_div_2_div_41_div_6_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " - ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r151 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Version ", data_r151.version, "");
} }
function AnsweringComponent_section_27_div_3_div_2_div_41_div_6_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r151 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, data_r151.created_date, "medium"));
} }
function AnsweringComponent_section_27_div_3_div_2_div_41_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 408)(1, "div")(2, "h5", 409);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 410);
    i0.ɵɵtemplate(5, AnsweringComponent_section_27_div_3_div_2_div_41_div_6_span_5_Template, 4, 1, "span", 155)(6, AnsweringComponent_section_27_div_3_div_2_div_41_div_6_span_6_Template, 3, 4, "span", 155);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const data_r151 = ctx.$implicit;
    const last_r152 = ctx.last;
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-12 card class-card1 py-2 ", last_r152 ? "mb-0" : "mb-3", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r151.feedback);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", data_r151.version != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r151.created_date != "");
} }
function AnsweringComponent_section_27_div_3_div_2_div_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 404)(1, "div", 20)(2, "div", 396)(3, "h5", 405);
    i0.ɵɵtext(4, "Overall FeedBack");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 406);
    i0.ɵɵtemplate(6, AnsweringComponent_section_27_div_3_div_2_div_41_div_6_Template, 7, 6, "div", 407);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r1.feedbackListData);
} }
function AnsweringComponent_section_27_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div");
    i0.ɵɵtemplate(2, AnsweringComponent_section_27_div_3_div_2_div_2_Template, 5, 4, "div", 155);
    i0.ɵɵelementStart(3, "div", 234)(4, "div", 223)(5, "div", 19)(6, "div", 235)(7, "div", 224)(8, "div", 236)(9, "div", 237)(10, "button", 238);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, AnsweringComponent_section_27_div_3_div_2_div_12_Template, 5, 4, "div", 239);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 240)(14, "div", 241);
    i0.ɵɵtemplate(15, AnsweringComponent_section_27_div_3_div_2_h4_15_Template, 3, 1, "h4", 242);
    i0.ɵɵelementStart(16, "h4", 243);
    i0.ɵɵtext(17, ":");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(18, AnsweringComponent_section_27_div_3_div_2_h4_18_Template, 3, 1, "h4", 242);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(19, AnsweringComponent_section_27_div_3_div_2_i_19_Template, 1, 4, "i", 244);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(20, AnsweringComponent_section_27_div_3_div_2_div_20_Template, 3, 1, "div", 245)(21, AnsweringComponent_section_27_div_3_div_2_div_21_Template, 2, 1, "div", 245)(22, AnsweringComponent_section_27_div_3_div_2_div_22_Template, 4, 3, "div", 246);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 247);
    i0.ɵɵtemplate(24, AnsweringComponent_section_27_div_3_div_2_div_24_Template, 3, 4, "div", 157)(25, AnsweringComponent_section_27_div_3_div_2_div_25_Template, 9, 5, "div", 248)(26, AnsweringComponent_section_27_div_3_div_2_div_26_Template, 2, 4, "div", 249)(27, AnsweringComponent_section_27_div_3_div_2_div_27_Template, 2, 4, "div", 249)(28, AnsweringComponent_section_27_div_3_div_2_div_28_Template, 4, 4, "div", 249)(29, AnsweringComponent_section_27_div_3_div_2_div_29_Template, 2, 9, "div", 250)(30, AnsweringComponent_section_27_div_3_div_2_div_30_Template, 12, 12, "div", 251)(31, AnsweringComponent_section_27_div_3_div_2_div_31_Template, 2, 7, "div", 252)(32, AnsweringComponent_section_27_div_3_div_2_div_32_Template, 2, 6, "div", 253)(33, AnsweringComponent_section_27_div_3_div_2_div_33_Template, 5, 10, "div", 254);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(34, AnsweringComponent_section_27_div_3_div_2_div_34_Template, 9, 11, "div", 255)(35, AnsweringComponent_section_27_div_3_div_2_div_35_Template, 3, 2, "div", 256)(36, AnsweringComponent_section_27_div_3_div_2_div_36_Template, 2, 1, "div", 155);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(37, AnsweringComponent_section_27_div_3_div_2_div_37_Template, 4, 8, "div", 44)(38, AnsweringComponent_section_27_div_3_div_2_div_38_Template, 9, 6, "div", 257)(39, AnsweringComponent_section_27_div_3_div_2_div_39_Template, 6, 6, "div", 258)(40, AnsweringComponent_section_27_div_3_div_2_div_40_Template, 8, 4, "div", 259);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(41, AnsweringComponent_section_27_div_3_div_2_div_41_Template, 7, 1, "div", 215);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_20_0;
    const ctx_r69 = i0.ɵɵnextContext();
    const item_r58 = ctx_r69.$implicit;
    const i_r71 = ctx_r69.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("px-0 mb-2 ", ctx_r1.isSingleQnsWithFeedbackType ? "col-md-12" : i0.ɵɵpureFunction0(36, _c26).indexOf(item_r58.question_type_id) > -1 ? "col-md-6" : "col-md-8", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("container-fluid ", ctx_r1.totalAns.length == 1 && (ctx_r1.totalAns[0] == null ? null : ctx_r1.totalAns[0].question_type_id) != "55" || i0.ɵɵpureFunction0(37, _c26).indexOf(item_r58.question_type_id) > -1 ? "pl-2 pr-0" : "px-0", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (((tmp_20_0 = ctx_r1.checkQuestionId(item_r58)) == null ? null : tmp_20_0.is_correct) == "true" || ((tmp_20_0 = ctx_r1.checkQuestionId(item_r58)) == null ? null : tmp_20_0.is_correct) == "false" || !ctx_r1.correctAnswer) && (ctx_r1.getData == null ? null : ctx_r1.getData.is_test) != "1");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(40, _c27, (ctx_r1.getData == null ? null : ctx_r1.getData.is_test) == "1" && i0.ɵɵpureFunction0(38, _c19).includes(ctx_r1.getData == null ? null : ctx_r1.getData.subject.toLowerCase()), !((ctx_r1.getData == null ? null : ctx_r1.getData.is_test) == "1" && i0.ɵɵpureFunction0(39, _c19).includes(ctx_r1.getData == null ? null : ctx_r1.getData.subject.toLowerCase()))));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i_r71 + 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.checkDisableConditionForQns(item_r58));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(43, _c29, ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2" ? "unset" : "hidden"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.getElapsedTime());
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.getElapsedTime());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isSingleQnsWithFeedbackType && ctx_r1.previousFeedBack.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question != "" && item_r58.question_type_id == 55);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question_type_id == "24" && (item_r58.subQuestions[0] == null ? null : item_r58.subQuestions[0].question) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question != "" && item_r58.question_type_id != 24 && item_r58.question_type_id != 55);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(47, _c27, (ctx_r1.getData == null ? null : ctx_r1.getData.is_test) == "1" && i0.ɵɵpureFunction0(45, _c19).includes(ctx_r1.getData == null ? null : ctx_r1.getData.subject.toLowerCase()), !((ctx_r1.getData == null ? null : ctx_r1.getData.is_test) == "1" && i0.ɵɵpureFunction0(46, _c19).includes(ctx_r1.getData == null ? null : ctx_r1.getData.subject.toLowerCase()))));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question_type_id == 1 || item_r58.question_type_id == 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question_type_id == 5 || item_r58.question_type_id == 7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question_type_id == 9);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question_type_id == 10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question_type_id == 16);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(50, _c30).indexOf(item_r58.question_type_id) > -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(51, _c31).indexOf(item_r58.question_type_id) > -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question_type_id == 24);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question_type_id == 28);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question_type_id == 40 || item_r58.question_type_id == 41);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r58.question_type_id != "24" && (item_r58.is_correct == "true" || item_r58.is_correct == "false") || item_r58.question_type_id == "24" && ((item_r58.subQuestions[0] == null ? null : item_r58.subQuestions[0].is_correct) == "true" || (item_r58.subQuestions[0] == null ? null : item_r58.subQuestions[0].is_correct) == "false")) && (ctx_r1.getData == null ? null : ctx_r1.getData.is_test) != "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question_type_id != "24" && (item_r58.is_correct == "true" || item_r58.is_correct == "false") && (ctx_r1.getData == null ? null : ctx_r1.getData.is_test) != "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r58.question_type_id == "24" && (ctx_r1.getData == null ? null : ctx_r1.getData.is_test) != "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.questionData.allow_workspace == "1" || ctx_r1.questionData.allow_feedback == "1") && !ctx_r1.isSingleQnsWithFeedbackType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isSingleQnsWithFeedbackType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isSingleQnsWithFeedbackType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isSingleQnsWithFeedbackType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.feedbackListData.length != 0 && ctx_r1.isSingleQnsWithFeedbackType);
} }
function AnsweringComponent_section_27_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_3_div_1_Template, 6, 9, "div", 220)(2, AnsweringComponent_section_27_div_3_div_2_Template, 42, 52, "div", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = ctx.$implicit;
    const i_r71 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("content-card row view-question px-3 ", i0.ɵɵpureFunction0(5, _c25).includes(item_r58.question_type_id) ? "justify-content-center" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showQuestion == i_r71 && i0.ɵɵpureFunction0(6, _c26).indexOf(item_r58.question_type_id) > -1 && !ctx_r1.isSingleQnsWithFeedbackType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showQuestion == i_r71);
} }
function AnsweringComponent_section_27_div_4_div_7_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " - ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r153 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Version ", data_r153.version, "");
} }
function AnsweringComponent_section_27_div_4_div_7_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r153 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, data_r153.created_date, "medium"));
} }
function AnsweringComponent_section_27_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 408)(1, "div")(2, "h5", 409);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 410);
    i0.ɵɵtemplate(5, AnsweringComponent_section_27_div_4_div_7_span_5_Template, 4, 1, "span", 155)(6, AnsweringComponent_section_27_div_4_div_7_span_6_Template, 3, 4, "span", 155);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const data_r153 = ctx.$implicit;
    const last_r154 = ctx.last;
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-12 card class-card1 py-2 ", last_r154 ? "mb-0" : "mb-3", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r153.feedback);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", data_r153.version != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r153.created_date != "");
} }
function AnsweringComponent_section_27_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 404)(1, "div", 20)(2, "div", 411)(3, "div", 396)(4, "h5", 405);
    i0.ɵɵtext(5, "Overall FeedBack");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 406);
    i0.ɵɵtemplate(7, AnsweringComponent_section_27_div_4_div_7_Template, 7, 6, "div", 407);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r1.feedbackListData);
} }
function AnsweringComponent_section_27_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function AnsweringComponent_section_27_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 399);
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_5_ng_container_1_Template, 1, 0, "ng-container", 412);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const feedback_data_r155 = i0.ɵɵreference(51);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", feedback_data_r155);
} }
function AnsweringComponent_section_27_div_6_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 415)(1, "div", 416);
    i0.ɵɵelement(2, "img", 417);
    i0.ɵɵelementEnd()();
} }
function AnsweringComponent_section_27_div_6_div_9_div_5_ng_container_21_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function AnsweringComponent_section_27_div_6_div_9_div_5_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_6_div_9_div_5_ng_container_21_ng_container_1_Template, 1, 0, "ng-container", 430);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const list_r157 = ctx.$implicit;
    const i_r158 = ctx.index;
    i0.ɵɵnextContext(5);
    const questionButton_r159 = i0.ɵɵreference(49);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", questionButton_r159)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c39, list_r157, i_r158));
} }
function AnsweringComponent_section_27_div_6_div_9_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 421)(1, "div", 422);
    i0.ɵɵtext(2, "Questions:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 423)(4, "span");
    i0.ɵɵelement(5, "i", 424);
    i0.ɵɵelementStart(6, "span", 425);
    i0.ɵɵtext(7, " - Not Answered");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "span", 95);
    i0.ɵɵelement(9, "i", 426);
    i0.ɵɵelementStart(10, "span", 425);
    i0.ɵɵtext(11, " - Answered");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "span", 95);
    i0.ɵɵelement(13, "i", 427);
    i0.ɵɵelementStart(14, "span", 425);
    i0.ɵɵtext(15, " - Current Question");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "span", 95);
    i0.ɵɵelement(17, "img", 428);
    i0.ɵɵelementStart(18, "span", 425);
    i0.ɵɵtext(19, " - For Review");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "div", 429);
    i0.ɵɵtemplate(21, AnsweringComponent_section_27_div_6_div_9_div_5_ng_container_21_Template, 2, 5, "ng-container", 194);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(21);
    i0.ɵɵproperty("ngForOf", ctx_r1.totalAns);
} }
function AnsweringComponent_section_27_div_6_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r156 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 415)(1, "div", 418, 15)(3, "button", 419);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_6_div_9_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r156); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showJumpQuestion = !ctx_r1.showJumpQuestion); });
    i0.ɵɵtext(4, " Questions ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AnsweringComponent_section_27_div_6_div_9_div_5_Template, 22, 1, "div", 420);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.showJumpQuestion);
} }
function AnsweringComponent_section_27_div_6_div_10_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r160 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 434);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_6_div_10_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r160); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.checkLastQuestion(ctx_r1.showQuestion, ctx_r1.showQuestion == ctx_r1.totalAns.length)); });
    i0.ɵɵtext(1, " Next");
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_section_27_div_6_div_10_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r161 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 434);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_6_div_10_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r161); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.checkSubmitFunction()); });
    i0.ɵɵtext(1, "Submit");
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_section_27_div_6_div_10_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r162 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 435);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_6_div_10_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r162); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.previousQuestion()); });
    i0.ɵɵtext(1, " Previous");
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_section_27_div_6_div_10_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r163 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 436);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_6_div_10_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r163); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.tryAgainButton()); });
    i0.ɵɵtext(1, " Try Again ");
    i0.ɵɵelement(2, "i", 437);
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_section_27_div_6_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 415);
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_6_div_10_button_1_Template, 2, 0, "button", 431)(2, AnsweringComponent_section_27_div_6_div_10_button_2_Template, 2, 0, "button", 431)(3, AnsweringComponent_section_27_div_6_div_10_button_3_Template, 2, 0, "button", 432)(4, AnsweringComponent_section_27_div_6_div_10_button_4_Template, 3, 0, "button", 433);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_19_0;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.totalAns.length != ctx_r1.showQuestion + 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.totalAns.length == ctx_r1.showQuestion + 1 && (ctx_r1.getData.student_content_status == "1" || ctx_r1.getData.student_content_status == "2"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showQuestion != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ((tmp_19_0 = ctx_r1.checkQuestionId(ctx_r1.totalAns[ctx_r1.showQuestion])) == null ? null : tmp_19_0.is_correct) == "partially-completed" && !ctx_r1.tryAgainButtonEnabled);
} }
function AnsweringComponent_section_27_div_6_div_11_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r164 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 443);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_6_div_11_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r164); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.checkForApiTypeQns()); });
    i0.ɵɵtext(1, "Submit For Final");
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_section_27_div_6_div_11_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r165 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 443);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_6_div_11_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r165); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.undoRevise(ctx_r1.previousFeedBack[0])); });
    i0.ɵɵelement(1, "i", 444);
    i0.ɵɵtext(2, "Undo Revise");
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_section_27_div_6_div_11_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r166 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 445);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_6_div_11_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r166); const ctx_r1 = i0.ɵɵnextContext(4); ctx_r1.overAllStartTimer(); return i0.ɵɵresetView(ctx_r1.feedbackSelected("current")); });
    i0.ɵɵelement(1, "i", 446);
    i0.ɵɵtext(2, "Revise");
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_section_27_div_6_div_11_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r167 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 447);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_6_div_11_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r167); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.getFeedbackValue(ctx_r1.totalAns[ctx_r1.showQuestion])); });
    i0.ɵɵelement(1, "i", 448);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Request For Feedback (", ctx_r1.previousFeedBack.length, " / ", ctx_r1.maximumAllowedCount, ") ");
} }
function AnsweringComponent_section_27_div_6_div_11_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r168 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 449)(1, "button", 450);
    i0.ɵɵtext(2, "Save");
    i0.ɵɵelement(3, "i", 451);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 452)(5, "a", 453);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_6_div_11_div_6_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r168); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.saveAnswer("2", "noExit", true, "same")); });
    i0.ɵɵelement(6, "i", 454);
    i0.ɵɵtext(7, "Save");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "a", 453);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_6_div_11_div_6_Template_a_click_8_listener() { i0.ɵɵrestoreView(_r168); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.saveAnswer("2", "exit", true, "same")); });
    i0.ɵɵelement(9, "i", 455);
    i0.ɵɵtext(10, "Save & Exit");
    i0.ɵɵelementEnd()()();
} }
function AnsweringComponent_section_27_div_6_div_11_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r169 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 445);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_6_div_11_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r169); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.saveAnswer("2", "noExit", true, "same")); });
    i0.ɵɵelement(1, "i", 454);
    i0.ɵɵtext(2, "Save");
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_section_27_div_6_div_11_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r170 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 456);
    i0.ɵɵlistener("click", function AnsweringComponent_section_27_div_6_div_11_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r170); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.saveAnswer("2", "exit", true, "same")); });
    i0.ɵɵelement(1, "i", 455);
    i0.ɵɵtext(2, "Save & Exit");
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_section_27_div_6_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div");
    i0.ɵɵtemplate(2, AnsweringComponent_section_27_div_6_div_11_button_2_Template, 2, 0, "button", 438)(3, AnsweringComponent_section_27_div_6_div_11_button_3_Template, 3, 0, "button", 438)(4, AnsweringComponent_section_27_div_6_div_11_button_4_Template, 3, 0, "button", 439)(5, AnsweringComponent_section_27_div_6_div_11_button_5_Template, 3, 2, "button", 440)(6, AnsweringComponent_section_27_div_6_div_11_div_6_Template, 11, 0, "div", 441)(7, AnsweringComponent_section_27_div_6_div_11_button_7_Template, 3, 0, "button", 439)(8, AnsweringComponent_section_27_div_6_div_11_button_8_Template, 3, 0, "button", 442);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("col-", ctx_r1.isSingleQnsWithFeedbackType && ctx_r1.previousFeedBack.length != 0 ? "12" : "8", "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (ctx_r1.questionData == null ? null : ctx_r1.questionData.auto_review) != "0" && ctx_r1.reviseSelected == "" || (ctx_r1.questionData == null ? null : ctx_r1.questionData.auto_review) == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.questionData == null ? null : ctx_r1.questionData.auto_review) != "0" && ctx_r1.previousFeedBack.length != 0 && ctx_r1.reviseSelected != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.previousFeedBack.length <= 9 && ctx_r1.reviseSelected == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.previousFeedBack.length < ctx_r1.maximumAllowedCount && (ctx_r1.questionData == null ? null : ctx_r1.questionData.auto_review) != "0" && ctx_r1.reviseSelected != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.getData.student_content_status == "1" || ctx_r1.getData.student_content_status == "2") && ctx_r1.isSingleQnsWithFeedbackType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.getData.student_content_status == "1" || ctx_r1.getData.student_content_status == "2") && !ctx_r1.isSingleQnsWithFeedbackType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.getData.student_content_status == "1" || ctx_r1.getData.student_content_status == "2") && !ctx_r1.isSingleQnsWithFeedbackType);
} }
function AnsweringComponent_section_27_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 413, 14)(2, "div", 20)(3, "div", 21)(4, "div", 22)(5, "div", 20)(6, "div")(7, "div");
    i0.ɵɵtemplate(8, AnsweringComponent_section_27_div_6_div_8_Template, 3, 0, "div", 414)(9, AnsweringComponent_section_27_div_6_div_9_Template, 6, 1, "div", 414)(10, AnsweringComponent_section_27_div_6_div_10_Template, 5, 4, "div", 414)(11, AnsweringComponent_section_27_div_6_div_11_Template, 9, 10, "div", 44);
    i0.ɵɵelementEnd()()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵclassMapInterpolate1("card-body ", ctx_r1.env.deviceType() ? "px-3 py-2" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("row my-1 d-flex align-items-center justify-content-between\n                                    ", ctx_r1.isSingleQnsWithFeedbackType && ctx_r1.previousFeedBack.length != 0 ? "" : "pr-3", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(ctx_r1.isSingleQnsWithFeedbackType && ctx_r1.previousFeedBack.length != 0));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isSingleQnsWithFeedbackType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isSingleQnsWithFeedbackType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.getData.student_content_status == "1" || ctx_r1.getData.student_content_status == "2") && ctx_r1.isSingleQnsWithFeedbackType);
} }
function AnsweringComponent_section_27_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function AnsweringComponent_section_27_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 457);
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_7_ng_container_1_Template, 1, 0, "ng-container", 412);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    const feedback_data_r155 = i0.ɵɵreference(51);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c24, ctx_r1.totalFeedbackMaxHeight));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", feedback_data_r155);
} }
function AnsweringComponent_section_27_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function AnsweringComponent_section_27_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 458);
    i0.ɵɵtemplate(1, AnsweringComponent_section_27_div_8_ng_container_1_Template, 1, 0, "ng-container", 412);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    const feedback_data_r155 = i0.ɵɵreference(51);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c24, ctx_r1.totalFeedbackMaxHeight));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", feedback_data_r155);
} }
function AnsweringComponent_section_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 212)(1, "div")(2, "div", 213);
    i0.ɵɵtemplate(3, AnsweringComponent_section_27_div_3_Template, 3, 7, "div", 214)(4, AnsweringComponent_section_27_div_4_Template, 8, 1, "div", 215)(5, AnsweringComponent_section_27_div_5_Template, 2, 1, "div", 216);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, AnsweringComponent_section_27_div_6_Template, 12, 10, "div", 217);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, AnsweringComponent_section_27_div_7_Template, 2, 4, "div", 218)(8, AnsweringComponent_section_27_div_8_Template, 2, 4, "div", 219);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(11, _c24, ctx_r1.totalContentMaxHeight));
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.isSingleQnsWithFeedbackType && ctx_r1.previousFeedBack.length != 0 && !ctx_r1.feedbackExpanded ? "col-6 pr-0" : "col-12");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(13, _c24, ctx_r1.contentMaxHeight));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.totalAns);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.feedbackListData.length != 0 && !ctx_r1.isSingleQnsWithFeedbackType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.feedbackExpanded);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.totalAns.length != 0 && !ctx_r1.isSingleQnsWithFeedbackType || ctx_r1.totalAns.length != 0 && (ctx_r1.getData.student_content_status == "1" || ctx_r1.getData.student_content_status == "2") && ctx_r1.isSingleQnsWithFeedbackType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isSingleQnsWithFeedbackType && ctx_r1.previousFeedBack.length != 0 && !ctx_r1.feedbackExpanded && ctx_r1.isOpen);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isSingleQnsWithFeedbackType && ctx_r1.previousFeedBack.length != 0 && !ctx_r1.feedbackExpanded && !ctx_r1.isOpen);
} }
function AnsweringComponent_ng_template_28_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 469);
    i0.ɵɵtext(1, "Once submitted, you will not be able to edit your answers");
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_ng_template_28_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 469);
    i0.ɵɵtext(1, "Yay! Your final effort and last question are here. The subsequent assignment will be turned in for evaluation after clicking the OK button");
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_ng_template_28_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r172 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 470)(1, "textarea", 471);
    i0.ɵɵtwoWayListener("ngModelChange", function AnsweringComponent_ng_template_28_div_9_Template_textarea_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r172); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.totalFeedBack, $event) || (ctx_r1.totalFeedBack = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.totalFeedBack);
    i0.ɵɵproperty("readOnly", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2");
} }
function AnsweringComponent_ng_template_28_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 472)(1, "span");
    i0.ɵɵelement(2, "i", 424);
    i0.ɵɵelementStart(3, "span", 425);
    i0.ɵɵtext(4, " - Not Answered");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "span", 95);
    i0.ɵɵelement(6, "i", 426);
    i0.ɵɵelementStart(7, "span", 425);
    i0.ɵɵtext(8, " - Answered");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "span", 95);
    i0.ɵɵelement(10, "i", 427);
    i0.ɵɵelementStart(11, "span", 425);
    i0.ɵɵtext(12, " - Current Question");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "span", 95);
    i0.ɵɵelement(14, "img", 428);
    i0.ɵɵelementStart(15, "span", 425);
    i0.ɵɵtext(16, " - For Review");
    i0.ɵɵelementEnd()()();
} }
function AnsweringComponent_ng_template_28_div_11_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function AnsweringComponent_ng_template_28_div_11_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AnsweringComponent_ng_template_28_div_11_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 430);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const list_r173 = ctx.$implicit;
    const i_r174 = ctx.index;
    i0.ɵɵnextContext(3);
    const questionButton_r159 = i0.ɵɵreference(49);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", questionButton_r159)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c39, list_r173, i_r174));
} }
function AnsweringComponent_ng_template_28_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 470)(1, "div", 422);
    i0.ɵɵtext(2, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 473);
    i0.ɵɵtemplate(4, AnsweringComponent_ng_template_28_div_11_ng_container_4_Template, 2, 5, "ng-container", 194);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.totalAns);
} }
function AnsweringComponent_ng_template_28_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r175 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 474);
    i0.ɵɵlistener("click", function AnsweringComponent_ng_template_28_button_15_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r175); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.disableButton = true; ctx_r1.timeIntervalRunningForTest = false; ctx_r1.submitAnswering = true; return i0.ɵɵresetView(ctx_r1.getFeedbackValue(ctx_r1.totalAns[0], "saveAndExit")); });
    i0.ɵɵtext(1, "Ok ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx_r1.env.deviceType() ? "border-radius-5" : "", "");
    i0.ɵɵproperty("disabled", ctx_r1.disableButton);
} }
function AnsweringComponent_ng_template_28_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r176 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 474);
    i0.ɵɵlistener("click", function AnsweringComponent_ng_template_28_button_16_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r176); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.disableButton = true; ctx_r1.buttonClicked = ""; ctx_r1.submitAnswering = true; ctx_r1.timeIntervalRunningForTest = false; return i0.ɵɵresetView(ctx_r1.saveAnswer("4", "exit", true)); });
    i0.ɵɵtext(1, "Ok ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx_r1.env.deviceType() ? "border-radius-5" : "", "");
    i0.ɵɵproperty("disabled", ctx_r1.disableButton);
} }
function AnsweringComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r171 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 459)(1, "h4", 460);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 461)(4, "div", 462)(5, "div", 19)(6, "div", 20);
    i0.ɵɵtemplate(7, AnsweringComponent_ng_template_28_p_7_Template, 2, 0, "p", 463)(8, AnsweringComponent_ng_template_28_p_8_Template, 2, 0, "p", 463);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, AnsweringComponent_ng_template_28_div_9_Template, 2, 2, "div", 464)(10, AnsweringComponent_ng_template_28_div_10_Template, 17, 0, "div", 465)(11, AnsweringComponent_ng_template_28_div_11_Template, 5, 1, "div", 464);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 466)(13, "button", 467);
    i0.ɵɵlistener("click", function AnsweringComponent_ng_template_28_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r171); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.buttonClicked = ""; return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(14, "Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, AnsweringComponent_ng_template_28_button_15_Template, 2, 4, "button", 468)(16, AnsweringComponent_ng_template_28_button_16_Template, 2, 4, "button", 468);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Submit ", ctx_r1.contentType, "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.buttonClicked == "submit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.buttonClicked == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showpdf && !ctx_r1.isSingleQnsWithFeedbackType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showpdf && ctx_r1.totalAns.length > 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showpdf && ctx_r1.totalAns.length > 1);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("btn cancel ", ctx_r1.env.deviceType() ? "border-radius-5" : "", "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.isSingleQnsWithFeedbackType && (ctx_r1.questionData == null ? null : ctx_r1.questionData.auto_review) != "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(ctx_r1.isSingleQnsWithFeedbackType && (ctx_r1.questionData == null ? null : ctx_r1.questionData.auto_review) != "0"));
} }
function AnsweringComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r177 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 459)(1, "h4", 460);
    i0.ɵɵtext(2, "Review Confirmation");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 461)(4, "div", 462)(5, "div", 19)(6, "div", 20)(7, "p", 469);
    i0.ɵɵtext(8, "Some of the questions are marked for review. Would you like to proceed further?");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(9, "div", 466)(10, "button", 467);
    i0.ɵɵlistener("click", function AnsweringComponent_ng_template_30_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r177); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(11, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 467);
    i0.ɵɵlistener("click", function AnsweringComponent_ng_template_30_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r177); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modalRef.close(); ctx_r1.buttonClicked = "submit"; return i0.ɵɵresetView(ctx_r1.submitPopup()); });
    i0.ɵɵtext(13, "Ok");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵclassMapInterpolate1("btn cancel ", ctx_r1.env.deviceType() ? "border-radius-5" : "", "");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx_r1.env.deviceType() ? "border-radius-5" : "", "");
} }
function AnsweringComponent_ng_template_32_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r179 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 482);
    i0.ɵɵlistener("click", function AnsweringComponent_ng_template_32_button_24_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r179); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.submitQueries(ctx_r1.graphId, ctx_r1.graphIndex, "pdf")); });
    i0.ɵɵtext(1, "Submit ");
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r178 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 459)(1, "h4", 460);
    i0.ɵɵtext(2, "Answer graph");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 475)(4, "div", 462)(5, "div", 19)(6, "div", 179)(7, "div", 116)(8, "app-graph-component", 354);
    i0.ɵɵlistener("valueChange", function AnsweringComponent_ng_template_32_Template_app_graph_component_valueChange_8_listener($event) { i0.ɵɵrestoreView(_r178); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.storeGraph($event)); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(9, "div", 196)(10, "div", 116)(11, "button", 197);
    i0.ɵɵtext(12, " Feedback ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 476);
    i0.ɵɵtext(14, "work space ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 477);
    i0.ɵɵlistener("click", function AnsweringComponent_ng_template_32_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r178); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openWorkArea("", ctx_r1.graphId, ctx_r1.graphIndex)); });
    i0.ɵɵtext(16, "Work area ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 476);
    i0.ɵɵtext(18, "Set Answer ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 205)(20, "div", 206)(21, "textarea", 207);
    i0.ɵɵlistener("input", function AnsweringComponent_ng_template_32_Template_textarea_input_21_listener($event) { i0.ɵɵrestoreView(_r178); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getQueries($event, ctx_r1.graphId, ctx_r1.graphIndex, "pdf")); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "div", 196)(23, "div", 116);
    i0.ɵɵtemplate(24, AnsweringComponent_ng_template_32_button_24_Template, 2, 0, "button", 478);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 205)(26, "div", 206)(27, "app-tiny-mice", 479);
    i0.ɵɵlistener("emitEditorValue", function AnsweringComponent_ng_template_32_Template_app_tiny_mice_emitEditorValue_27_listener($event) { i0.ɵɵrestoreView(_r178); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getNumericWorkSpaceValue($event, ctx_r1.graphId, ctx_r1.graphIndex)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 480, 16)(30, "app-tiny-mice", 211);
    i0.ɵɵlistener("emitEditorValue", function AnsweringComponent_ng_template_32_Template_app_tiny_mice_emitEditorValue_30_listener($event) { i0.ɵɵrestoreView(_r178); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getGraphEditorValue($event)); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(31, "div", 481)(32, "button", 467);
    i0.ɵɵlistener("click", function AnsweringComponent_ng_template_32_Template_button_click_32_listener() { i0.ɵɵrestoreView(_r178); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeGraph(ctx_r1.graphId, ctx_r1.graphIndex)); });
    i0.ɵɵtext(33, "Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "button", 467);
    i0.ɵɵlistener("click", function AnsweringComponent_ng_template_32_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r178); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getGraphAnswerValue(ctx_r1.getGraph, ctx_r1.graphId, ctx_r1.graphIndex)); });
    i0.ɵɵtext(35, "Submit ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("editMode", ctx_r1.getData.student_content_status == "1" || ctx_r1.getData.student_content_status == "2")("editPatchValue", ctx_r1.graphAnswerVal == "" ? false : ctx_r1.parseVal(ctx_r1.graphAnswerVal))("graphId", "deaaa")("questionType", "40");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2");
    i0.ɵɵattribute("aria-controls", "#queries" + ctx_r1.graphIndex)("data-target", "#queries" + ctx_r1.graphIndex);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-controls", "#workspace" + ctx_r1.graphIndex)("data-target", "#workspace" + ctx_r1.graphIndex);
    i0.ɵɵadvance(4);
    i0.ɵɵattribute("aria-controls", "#answer")("data-target", "#answer");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("id", "queries", ctx_r1.graphIndex, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.graphFeedback);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.queries != "" && ctx_r1.queriesIndex == ctx_r1.graphIndex + "id" + ctx_r1.graphId);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("id", "workspace", ctx_r1.graphIndex, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("editorPatchValue", ctx_r1.workspacedata[ctx_r1.graphId].section[ctx_r1.graphIndex].patchData == false ? false : ctx_r1.totalAns[ctx_r1.graphId].section[ctx_r1.graphIndex].student_roughdata)("height", 250)("readOnly", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2")("id", "workspacing")("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("editorPatchValue", ctx_r1.graphEditorAnsDup == false ? false : ctx_r1.graphEditorAns)("height", 250)("id", "answerrr")("readonly", false)("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("btn btn-primary-outline ", ctx_r1.env.deviceType() ? "border-radius-5" : "", "");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx_r1.env.deviceType() ? "border-radius-5" : "", "");
} }
function AnsweringComponent_ng_template_34_div_5_hr_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr");
} }
function AnsweringComponent_ng_template_34_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "div", 116)(2, "a", 486)(3, "span", 487);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, AnsweringComponent_ng_template_34_div_5_hr_5_Template, 1, 0, "hr", 155);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r181 = ctx.$implicit;
    const j_r182 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("href", item_r181.link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", item_r181.link);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r181.name != "" ? item_r181.name : item_r181.link);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", j_r182 != ctx_r1.linkdata.length - 1);
} }
function AnsweringComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    const _r180 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 459)(1, "h4", 483);
    i0.ɵɵtext(2, "Resources");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 475)(4, "div", 462);
    i0.ɵɵtemplate(5, AnsweringComponent_ng_template_34_div_5_Template, 6, 4, "div", 484);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 485)(7, "button", 467);
    i0.ɵɵlistener("click", function AnsweringComponent_ng_template_34_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r180); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSave()); });
    i0.ɵɵtext(8, " Cancel ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.linkdata);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx_r1.env.deviceType() ? "border-radius-5" : "", "");
} }
function AnsweringComponent_ng_template_36_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 493);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, ctx_r1.showAnswerItem.question), i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_ng_template_36_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r183 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 494)(1, "app-tiny-mice", 495);
    i0.ɵɵlistener("emitEditorValue", function AnsweringComponent_ng_template_36_div_9_Template_app_tiny_mice_emitEditorValue_1_listener($event) { i0.ɵɵrestoreView(_r183); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getNumericAnswerValue1($event, ctx_r1.showAnswerI, ctx_r1.showAnswerJ)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 496);
    i0.ɵɵlistener("click", function AnsweringComponent_ng_template_36_div_9_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r183); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.patchMinimize(ctx_r1.showAnswerI, ctx_r1.showAnswerJ, ctx_r1.showAnswerItem)); });
    i0.ɵɵtext(3, "Show minimize Editor ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("editorPatchValue", ctx_r1.showAnswerItem.given_answer == "" ? false : ctx_r1.showAnswerItem.given_answer1)("readonly", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2")("height", 250)("id", ctx_r1.showAnswerI + "giveAnsPop" + ctx_r1.showAnswerJ)("showDropBtn", false)("showInputBtn", false);
} }
function AnsweringComponent_ng_template_36_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r184 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 494)(1, "textarea", 497);
    i0.ɵɵlistener("input", function AnsweringComponent_ng_template_36_div_10_Template_textarea_input_1_listener($event) { i0.ɵɵrestoreView(_r184); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getInputAns($event, ctx_r1.showAnswerI, ctx_r1.showAnswerJ)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 496);
    i0.ɵɵlistener("click", function AnsweringComponent_ng_template_36_div_10_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r184); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.patchMinimize(ctx_r1.showAnswerI, ctx_r1.showAnswerJ, ctx_r1.showAnswerItem)); });
    i0.ɵɵtext(4, "Show minimize Editor ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("readOnly", ctx_r1.getData.student_content_status != "1" && ctx_r1.getData.student_content_status != "2");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.showAnswerItem.given_answer);
} }
function AnsweringComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 488)(1, "div", 462)(2, "div", 19)(3, "div", 147)(4, "div", 489)(5, "button");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 490);
    i0.ɵɵtemplate(8, AnsweringComponent_ng_template_36_div_8_Template, 2, 3, "div", 491);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, AnsweringComponent_ng_template_36_div_9_Template, 4, 6, "div", 492)(10, AnsweringComponent_ng_template_36_div_10_Template, 5, 2, "div", 492);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx_r1.env.deviceType() ? "border-radius-5" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.showAnswerItem.sub_question_no);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.showAnswerItem.question != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showAnswerItem.question_type_id == "30");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showAnswerItem.question_type_id == "20");
} }
function AnsweringComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    const _r185 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 498)(1, "h4", 499);
    i0.ɵɵtext(2, "Overall Feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 500);
    i0.ɵɵlistener("click", function AnsweringComponent_ng_template_38_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r185); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 475)(5, "div", 462)(6, "div", 501)(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.questionData.teacher_feedback);
} }
function AnsweringComponent_ng_template_40_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r187 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "app-annotation", 502);
    i0.ɵɵlistener("annotate", function AnsweringComponent_ng_template_40_div_6_Template_app_annotation_annotate_1_listener($event) { i0.ɵɵrestoreView(_r187); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getWorkAreaAnnotation($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("getAnnotate", ctx_r1.workAnnotate)("id", "workArea")("toolAdjust", true)("toolHide", true)("userType", "student");
} }
function AnsweringComponent_ng_template_40_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r188 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "app-student-web-annotation", 503);
    i0.ɵɵlistener("annotate", function AnsweringComponent_ng_template_40_div_7_Template_app_student_web_annotation_annotate_1_listener($event) { i0.ɵɵrestoreView(_r188); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getWorkAreaAnnotation($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("getAnnotate", ctx_r1.workAnnotate)("toolAdjust", true)("toolHide", true)("popUp", true);
} }
function AnsweringComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    const _r186 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 498)(1, "h4", 361);
    i0.ɵɵtext(2, "Work Area");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 500);
    i0.ɵɵlistener("click", function AnsweringComponent_ng_template_40_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r186); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeWorkArea()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 488)(5, "div", 462);
    i0.ɵɵtemplate(6, AnsweringComponent_ng_template_40_div_6_Template, 2, 5, "div", 155)(7, AnsweringComponent_ng_template_40_div_7_Template, 2, 4, "div", 155);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", (ctx_r1.getData.student_content_status == "1" || ctx_r1.getData.student_content_status == "2") && !ctx_r1.env.deviceType());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.getData.student_content_status == "1" || ctx_r1.getData.student_content_status == "2") && ctx_r1.env.deviceType());
} }
function AnsweringComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 475)(1, "div", 504);
    i0.ɵɵelement(2, "div", 505);
    i0.ɵɵelementStart(3, "span", 506);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.popUpMessage);
} }
function AnsweringComponent_ng_template_44_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 509);
    i0.ɵɵtext(1, "You now have ");
    i0.ɵɵelementStart(2, "span", 320);
    i0.ɵɵtext(3, " 5 minutes");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " left to complete the test. Please make sure your responses are saved and ready for\u00A0submission.");
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_ng_template_44_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 510);
    i0.ɵɵtext(1, "Test time is now complete. All your answers will be saved and submitted automatically.");
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_ng_template_44_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r189 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 474);
    i0.ɵɵlistener("click", function AnsweringComponent_ng_template_44_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r189); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.disableDurationWarningButton = true; return i0.ɵɵresetView(ctx_r1.firstWarning ? ctx_r1.closeAndStartTimer() : ctx_r1.getFeedbackValue(ctx_r1.totalAns[0], "saveAndExit")); });
    i0.ɵɵtext(1, "Ok ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx_r1.env.deviceType() ? "border-radius-5" : "", "");
    i0.ɵɵproperty("disabled", ctx_r1.disableDurationWarningButton);
} }
function AnsweringComponent_ng_template_44_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r190 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 474);
    i0.ɵɵlistener("click", function AnsweringComponent_ng_template_44_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r190); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.disableDurationWarningButton = true; return i0.ɵɵresetView(ctx_r1.checkFinalSave()); });
    i0.ɵɵtext(1, "Ok ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx_r1.env.deviceType() ? "border-radius-5" : "", "");
    i0.ɵɵproperty("disabled", ctx_r1.disableDurationWarningButton);
} }
function AnsweringComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 459)(1, "h4", 460);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 461)(4, "div", 462)(5, "div", 19)(6, "div", 20);
    i0.ɵɵtemplate(7, AnsweringComponent_ng_template_44_p_7_Template, 5, 0, "p", 507)(8, AnsweringComponent_ng_template_44_p_8_Template, 2, 0, "p", 508);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 466);
    i0.ɵɵtemplate(10, AnsweringComponent_ng_template_44_button_10_Template, 2, 4, "button", 468)(11, AnsweringComponent_ng_template_44_button_11_Template, 2, 4, "button", 468);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.firstWarning ? "Remaining Duration" : "Duration Completed");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.firstWarning);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.firstWarning);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.isSingleQnsWithFeedbackType && (ctx_r1.questionData == null ? null : ctx_r1.questionData.auto_review) != "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(ctx_r1.isSingleQnsWithFeedbackType && (ctx_r1.questionData == null ? null : ctx_r1.questionData.auto_review) != "0"));
} }
function AnsweringComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    const _r191 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 498)(1, "h4", 511);
    i0.ɵɵtext(2, "Take A Break!");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 475)(4, "div", 512);
    i0.ɵɵelement(5, "img", 513);
    i0.ɵɵelementStart(6, "div", 514)(7, "div", 515)(8, "div", 79)(9, "h4", 80)(10, "b");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "span", 81);
    i0.ɵɵtext(13, "Minutes");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 82)(15, "h4", 83);
    i0.ɵɵtext(16, ":");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 79)(18, "h4", 80)(19, "b");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "span", 81);
    i0.ɵɵtext(22, "Seconds");
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(23, "div", 516)(24, "h6", 517);
    i0.ɵɵtext(25, "Click on the skip button to resume");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "button", 518);
    i0.ɵɵlistener("click", function AnsweringComponent_ng_template_46_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r191); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.disableSkipButton = true; ctx_r1.timeTakenForTestInterval = 0; ctx_r1.pauseTimerIntervalOfTest(); return i0.ɵɵresetView(ctx_r1.skipToNextContent()); });
    i0.ɵɵtext(27, "Skip");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(ctx_r1.testElapsedTime == null ? null : ctx_r1.testElapsedTime.minutes);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.testElapsedTime == null ? null : ctx_r1.testElapsedTime.seconds);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("disabled", ctx_r1.disableSkipButton);
} }
function AnsweringComponent_ng_template_48_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 521);
    i0.ɵɵelementContainerEnd();
} }
function AnsweringComponent_ng_template_48_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 522);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    let tmp_16_0;
    const list_r194 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r1.getReviewIcon((tmp_16_0 = ctx_r1.checkQuestionId(list_r194)) == null ? null : tmp_16_0.is_correct), i0.ɵɵsanitizeUrl)("title", "Marked For Review");
} }
function AnsweringComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    const _r192 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 519);
    i0.ɵɵlistener("click", function AnsweringComponent_ng_template_48_Template_button_click_0_listener() { const ctx_r192 = i0.ɵɵrestoreView(_r192); const list_r194 = ctx_r192.$implicit; const i_r195 = ctx_r192.index; const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modalRef == null ? null : ctx_r1.modalRef.close(); ctx_r1.showJumpQuestion = false; return i0.ɵɵresetView(ctx_r1.checkWhetherSaveIsNeeded(list_r194, i_r195, "qnsNumber")); });
    i0.ɵɵtemplate(1, AnsweringComponent_ng_template_48_ng_container_1_Template, 2, 0, "ng-container", 155)(2, AnsweringComponent_ng_template_48_ng_container_2_Template, 2, 2, "ng-container", 155);
    i0.ɵɵelementStart(3, "span", 520);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r194 = ctx.$implicit;
    const i_r195 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.getButtonClass(list_r194, i_r195));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !list_r194.markedAsReview);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r194.markedAsReview);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r195 + 1);
} }
function AnsweringComponent_ng_template_50_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.previousFeedBack.length);
} }
function AnsweringComponent_ng_template_50_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.selectedFeedBackIndex);
} }
function AnsweringComponent_ng_template_50_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" (", i0.ɵɵpipeBind1(2, 2, ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.created_date), " | ", i0.ɵɵpipeBind2(3, 4, ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.created_date, "h:mm a"), ") ");
} }
function AnsweringComponent_ng_template_50_div_6_span_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 538);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ctx_r1.previousFeedBack[(ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.index) + 1] == null ? null : ctx_r1.previousFeedBack[(ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.index) + 1].student_score, " / ", ctx_r1.previousFeedBack[(ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.index) + 1] == null ? null : ctx_r1.previousFeedBack[(ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.index) + 1].total_score, " ");
} }
function AnsweringComponent_ng_template_50_div_6_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 538);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ctx_r1.previousFeedBack[1] == null ? null : ctx_r1.previousFeedBack[1].student_score, " / ", ctx_r1.previousFeedBack[1] == null ? null : ctx_r1.previousFeedBack[1].total_score, " ");
} }
function AnsweringComponent_ng_template_50_div_6_span_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " - ");
    i0.ɵɵelementEnd();
} }
function AnsweringComponent_ng_template_50_div_6_div_24_div_1_h5_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 540);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r196 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(value_r196);
} }
function AnsweringComponent_ng_template_50_div_6_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "label", 320);
    i0.ɵɵtext(2, "Strengths: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, AnsweringComponent_ng_template_50_div_6_div_24_div_1_h5_3_Template, 2, 1, "h5", 539);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.selectedPreviousStudentAnswer.strengths);
} }
function AnsweringComponent_ng_template_50_div_6_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 389);
    i0.ɵɵtemplate(1, AnsweringComponent_ng_template_50_div_6_div_24_div_1_Template, 4, 1, "div", 155);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedPreviousStudentAnswer.strengths.length != 0);
} }
function AnsweringComponent_ng_template_50_div_6_div_25_div_1_h5_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 542);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r197 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(value_r197);
} }
function AnsweringComponent_ng_template_50_div_6_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "label", 320);
    i0.ɵɵtext(2, "Top Opportunities: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, AnsweringComponent_ng_template_50_div_6_div_25_div_1_h5_3_Template, 2, 1, "h5", 541);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.selectedPreviousStudentAnswer.top_opportunities);
} }
function AnsweringComponent_ng_template_50_div_6_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 231);
    i0.ɵɵtemplate(1, AnsweringComponent_ng_template_50_div_6_div_25_div_1_Template, 4, 1, "div", 155);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedPreviousStudentAnswer.top_opportunities.length != 0);
} }
function AnsweringComponent_ng_template_50_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 399)(1, "div", 21)(2, "div", 396)(3, "h5", 397);
    i0.ɵɵtext(4, "Score Chart");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 398)(6, "div", 528)(7, "div", 529)(8, "div", 530)(9, "h5", 320);
    i0.ɵɵtext(10, "Feedback Score");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p", 531)(12, "span");
    i0.ɵɵtext(13, "Current Version : ");
    i0.ɵɵelementStart(14, "span", 532);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "span", 533);
    i0.ɵɵtext(17, "Previous Version : ");
    i0.ɵɵtemplate(18, AnsweringComponent_ng_template_50_div_6_span_18_Template, 2, 2, "span", 534)(19, AnsweringComponent_ng_template_50_div_6_span_19_Template, 2, 2, "span", 534)(20, AnsweringComponent_ng_template_50_div_6_span_20_Template, 2, 0, "span", 155);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(21, "div", 20)(22, "div", 535);
    i0.ɵɵelement(23, "apx-chart", 536);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(24, AnsweringComponent_ng_template_50_div_6_div_24_Template, 2, 1, "div", 537)(25, AnsweringComponent_ng_template_50_div_6_div_25_Template, 2, 1, "div", 226);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(15);
    i0.ɵɵtextInterpolate2(" ", ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.student_score, " / ", ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.total_score, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.selectedFeedBackIndex != 1 && ctx_r1.selectedFeedBackIndex != "" && !ctx_r1.feedbackServiceCalled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedFeedBackIndex != 1 && ctx_r1.selectedFeedBackIndex != "" && ctx_r1.feedbackServiceCalled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedFeedBackIndex == 1);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("series", ctx_r1.chartOptions == null ? null : ctx_r1.chartOptions.series)("chart", ctx_r1.chartOptions == null ? null : ctx_r1.chartOptions.chart)("xaxis", ctx_r1.chartOptions == null ? null : ctx_r1.chartOptions.xaxis)("yaxis", ctx_r1.chartOptions == null ? null : ctx_r1.chartOptions.yaxis)("plotOptions", ctx_r1.chartOptions == null ? null : ctx_r1.chartOptions.plotOptions)("dataLabels", ctx_r1.chartOptions == null ? null : ctx_r1.chartOptions.dataLabels)("legend", ctx_r1.chartOptions == null ? null : ctx_r1.chartOptions.legend);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedPreviousStudentAnswer.strengths);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedPreviousStudentAnswer.top_opportunities);
} }
function AnsweringComponent_ng_template_50_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 543);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", ctx_r1.convertedText, i0.ɵɵsanitizeHtml);
} }
function AnsweringComponent_ng_template_50_div_14_div_11_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "strong", 558);
    i0.ɵɵtext(2, "Rationale:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const feedback_r199 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMapInterpolate1("rationale_design col-12 px-0 ", (feedback_r199[1] == null ? null : feedback_r199[1].feedback.length) == 0 ? "mb-0" : "", "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", feedback_r199[1] == null ? null : feedback_r199[1].rationale, " ");
} }
function AnsweringComponent_ng_template_50_div_14_div_11_div_11_label_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 565);
    i0.ɵɵtext(1, "Why: ");
    i0.ɵɵelementStart(2, "span", 563);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const value_r200 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(value_r200.why);
} }
function AnsweringComponent_ng_template_50_div_14_div_11_div_11_label_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 565);
    i0.ɵɵtext(1, "Example: ");
    i0.ɵɵelementStart(2, "span", 566);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const value_r200 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(value_r200.example_rewrite);
} }
function AnsweringComponent_ng_template_50_div_14_div_11_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 559)(2, "h5", 560);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 561)(5, "label", 562);
    i0.ɵɵtext(6, "Suggestion: ");
    i0.ɵɵelementStart(7, "span", 563);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, AnsweringComponent_ng_template_50_div_14_div_11_div_11_label_9_Template, 4, 1, "label", 564)(10, AnsweringComponent_ng_template_50_div_14_div_11_div_11_label_10_Template, 4, 1, "label", 564);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const value_r200 = ctx.$implicit;
    const lastValue_r201 = ctx.last;
    i0.ɵɵclassMapInterpolate1("col-md-12 ", lastValue_r201 ? "" : "mb-2", "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", value_r200.snippet, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(value_r200.suggestion);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", value_r200 == null ? null : value_r200.why);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", value_r200 == null ? null : value_r200.example_rewrite);
} }
function AnsweringComponent_ng_template_50_div_14_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r198 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 552);
    i0.ɵɵlistener("click", function AnsweringComponent_ng_template_50_div_14_div_11_Template_div_click_0_listener() { const feedback_r199 = i0.ɵɵrestoreView(_r198).$implicit; return i0.ɵɵresetView(feedback_r199.collaspsed = !feedback_r199.collaspsed); });
    i0.ɵɵelementStart(1, "div", 553)(2, "span", 554);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 260)(5, "span", 555);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "i", 556);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 557);
    i0.ɵɵtemplate(9, AnsweringComponent_ng_template_50_div_14_div_11_div_9_Template, 4, 4, "div", 44);
    i0.ɵɵelementStart(10, "div", 19);
    i0.ɵɵtemplate(11, AnsweringComponent_ng_template_50_div_14_div_11_div_11_Template, 11, 7, "div", 214);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_21_0;
    const feedback_r199 = ctx.$implicit;
    const last_r202 = ctx.last;
    const first_r203 = ctx.first;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", last_r202 ? "feedback-panel_last" : first_r203 ? "feedback-panel_first" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", !feedback_r199.collaspsed ? "open" : "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_21_0 = ctx_r1.getValue(feedback_r199[0])) !== null && tmp_21_0 !== undefined ? tmp_21_0 : "-");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" Score: ", feedback_r199[1] == null ? null : feedback_r199[1].score, " / ", ctx_r1.totalIndivialScore, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", feedback_r199.collaspsed ? "fa-chevron-down" : "fa-chevron-up");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngbCollapse", feedback_r199.collaspsed);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", feedback_r199[1] == null ? null : feedback_r199[1].rationale);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", feedback_r199[1] == null ? null : feedback_r199[1].feedback);
} }
function AnsweringComponent_ng_template_50_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 544)(1, "div", 545)(2, "div", 20)(3, "h5", 546);
    i0.ɵɵtext(4, "Total Score");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 19)(6, "div", 547)(7, "div", 548);
    i0.ɵɵelement(8, "div", 549);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "span", 550);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(11, AnsweringComponent_ng_template_50_div_14_div_11_Template, 12, 9, "div", 551);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(8);
    i0.ɵɵstyleProp("width", ctx_r1.scorePercentage, "%");
    i0.ɵɵattribute("aria-valuenow", ctx_r1.score)("aria-valuemin", 0)("aria-valuemax", ctx_r1.totalScore);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.student_score, " / ", ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.total_score, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.feedbackList);
} }
function AnsweringComponent_ng_template_50_div_15_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 568);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 569)(4, "label", 570);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "label", 571);
    i0.ɵɵtext(7, "Example: ");
    i0.ɵɵelementStart(8, "span", 409);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_21_0;
    let tmp_23_0;
    const data_r204 = ctx.$implicit;
    const i_r205 = ctx.index;
    const last_r206 = ctx.last;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("col-12 row ", !last_r206 ? "mb-2" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(8, _c40, ctx_r1.env.deviceType() ? "7%" : !ctx_r1.env.deviceType() && ctx_r1.feedbackExpanded ? "4%" : "6%"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", (tmp_21_0 = data_r204 == null ? null : data_r204.priority) !== null && tmp_21_0 !== undefined ? tmp_21_0 : i_r205, ".");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(10, _c40, ctx_r1.env.deviceType() ? "93%" : !ctx_r1.env.deviceType() && ctx_r1.feedbackExpanded ? "96%" : "94%"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_23_0 = data_r204 == null ? null : data_r204.action) !== null && tmp_23_0 !== undefined ? tmp_23_0 : "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(data_r204.example_rewrite);
} }
function AnsweringComponent_ng_template_50_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 524)(1, "div", 21)(2, "div", 396)(3, "h5", 397);
    i0.ɵɵtext(4, "Next Edit Plan");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 567);
    i0.ɵɵtemplate(6, AnsweringComponent_ng_template_50_div_15_div_6_Template, 10, 12, "div", 214);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r1.selectedPreviousStudentAnswer.next_edit_plan);
} }
function AnsweringComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 523);
    i0.ɵɵtext(1, "Feedback ");
    i0.ɵɵtemplate(2, AnsweringComponent_ng_template_50_span_2_Template, 2, 1, "span", 155)(3, AnsweringComponent_ng_template_50_span_3_Template, 2, 1, "span", 155)(4, AnsweringComponent_ng_template_50_span_4_Template, 4, 7, "span", 155);
    i0.ɵɵtext(5, ":");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, AnsweringComponent_ng_template_50_div_6_Template, 26, 14, "div", 216);
    i0.ɵɵelementStart(7, "div", 524)(8, "div", 21)(9, "div", 396)(10, "h5", 397);
    i0.ɵɵtext(11, "Trait Analysis");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 398);
    i0.ɵɵtemplate(13, AnsweringComponent_ng_template_50_div_13_Template, 1, 1, "div", 525)(14, AnsweringComponent_ng_template_50_div_14_Template, 12, 8, "div", 526);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(15, AnsweringComponent_ng_template_50_div_15_Template, 7, 1, "div", 527);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.reviseSelected == "current");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.reviseSelected != "current");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.created_date);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.version) != "V1");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", (ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.version) == "V1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.version) != "V1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedPreviousStudentAnswer.next_edit_plan);
} }
export class AnsweringComponent {
    constructor(auth, student, confi, sanitizer, modalService, route, creator, navServices, toastr, teacher, common, content, cdr, env, commondata, newSubject, router) {
        this.auth = auth;
        this.student = student;
        this.confi = confi;
        this.sanitizer = sanitizer;
        this.modalService = modalService;
        this.route = route;
        this.creator = creator;
        this.navServices = navServices;
        this.toastr = toastr;
        this.teacher = teacher;
        this.common = common;
        this.content = content;
        this.cdr = cdr;
        this.env = env;
        this.commondata = commondata;
        this.newSubject = newSubject;
        this.router = router;
        this.areaInfo = [];
        this.totalFeedBack = '';
        this.settingList = [];
        this.workAnnotate = [];
        this.allowAutoScroll = true;
        this.showAutoScroll = false;
        this.expandPdf = false;
        this.graphEditorAns = '';
        this.uploadFileSize = 0;
        this.workAreaId = 0;
        this.workAreaIndex = 0;
        this.graphFeedback = '';
        this.scrolledPageNumber = 1;
        this.sectionFilterVal = 'all';
        this.checkAutoGradeQns = '0';
        this.reviseSelected = 'current';
        this.feedbackServiceCalled = false;
        this.selectedFeedBackIndex = '';
        this.selectedVersion = 0;
        this.previousFeedBack = [];
        this.autoScoreRelease = false;
        this.showpdf = true;
        this.guard = false;
        this.showUploadFile = true;
        this.mathDelayer = false;
        this.totalAns = [];
        this.totalAnsSample = [];
        this.answerEditor = [];
        this.workSpaceEditor = [];
        this.hideRuleContent = [];
        this.hideRuleAnswer = [];
        this.isPdfAvailable = true;
        this.dragQuestion = [];
        this.blankAns = [];
        this.answerPdf = [];
        this.pageScroll = 0;
        this.linkdata = [];
        this.page = 1;
        this.answerSaving = false;
        this.expand = false;
        this.maximumAttempt = 3;
        this.correctAnswer = true;
        this.distance = 150;
        this.showQuestion = 0;
        this.timeTaken = 0;
        this.timeTakenForTestInterval = 0;
        this.timeIntervalRunningForTest = false;
        this.serviceCalled = false;
        this.overallTimeTaken = 0;
        this.firstWarning = false;
        this.submitAnswering = false;
        this.percentage = '0';
        this.tryAgainButtonEnabled = false;
        this.buttonClicked = '';
        this.previouslySelectedIndex = 0;
        this.needSaveForThisQns = false;
        this.selectedIndexForSameQns = 0;
        this.graphEdited = false;
        this.maximumAllowedCount = 10;
        this.minimumWordValidation = 200;
        this.popUpMessage = '';
        this.showJumpQuestion = false;
        this.showDescription = false;
        this.listPassageDetails = [];
        this.showTimer = true;
        this.showCalculator = false;
        this.showReference = false;
        this.pdfSrc = 'https://whitlowmath.weebly.com/uploads/6/9/8/6/6986118/sat_set_1.pdf';
        this.testContentDetail = [];
        this.disableButton = false;
        this.disableSkipButton = true;
        this.disableDurationWarningButton = true;
        this.feedbackList = [];
        this.totalIndivialScore = 5;
        this.totalScore = 0;
        this.score = 0;
        this.totalFeedBackCount = 0;
        this.feedbackListData = [];
        this.contentMaxHeight = 'auto';
        this.totalContentMaxHeight = 'auto';
        this.totalFeedbackMaxHeight = 'auto';
        this.feedbackExpanded = false;
        this.isOpen = false;
        this.getAreaInfo = debounce((event) => {
            this.areaInfo = event;
            const data = {
                platform: 'web',
                student_id: this.auth.getUserId(),
                annotation: this.areaInfo,
                content_id: this.getData.content_id,
                student_content_id: this.getData.student_content_id,
                class_id: this.getData.class_id,
            };
            this.creator.saveAnnotation(data).subscribe((successData) => {
                this.saveAnnotationSuccess(successData);
            }, (error) => {
                this.saveAnnotationFailure(error);
            });
        }, 1000);
        this.Object = Object;
        this.getData = JSON.parse(this.auth.getSessionData('classDetails'));
        this.passageList();
        console.log(this.getData, 'getData');
        this.webhost = this.confi.getimgUrl();
        this.button = 'Hide PDF';
        // this.signaturePad.clear();
        this.delAnnotation = false;
        this.answerPatch = false;
        this.queries = '';
        this.queriesIndex = '';
    }
    get isSingleQnsWithFeedbackType() {
        return this.totalAns.length === 1 && this.totalAns.some(qns => qns.question_type_id === '55');
    }
    onClickOutside(event) {
        if (this.showJumpQuestion && !this.jumpWrapper.nativeElement.contains(event.target)) {
            this.showJumpQuestion = false;
        }
        if (this.showDescription && !this.qnsWrapper.nativeElement.contains(event.target)) {
            this.showDescription = false;
        }
    }
    onResize() {
        this.updateContentHeight();
    }
    ngOnInit() {
        this.allowSelect = true;
        this.newSubject.allowSchoolChange(this.allowSelect);
        this.creator.changeViewList(true);
        if (this.getData.is_test == 1 && this.getData.student_content_status != '1' && this.getData.student_content_status != '2') {
            this.getTestDetails();
        }
        else {
            this.questionList(this.getData);
        }
        this.auth.sidebarOpened$.subscribe(isOpen => {
            setTimeout(() => {
                this.isOpen = isOpen;
            }, 200);
        });
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this.answerPatch = true;
        }, 3000);
        if (this.getData?.content_format == '1' && (this.getData.student_content_status == '1' || this.getData.student_content_status == '2')) {
            this.interval = setInterval(() => {
                this.saveAnswer('2', 'noExit', false);
            }, 300000);
        }
        else if (this.getData?.content_format == '3' && (this.getData.student_content_status == '1' || this.getData.student_content_status == '2')) {
            this.setServiceInterval('set');
        }
    }
    get scorePercentage() {
        return (this.score / this.totalScore) * 100;
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
        if (this.reviseSelected === '') {
            return this.selectedPreviousStudentAnswer?.student_answer ?? '';
        }
        return item.given_answer[0].isSelected;
    }
    onEssayAnswerChange(item, value) {
        if (this.reviseSelected === '') {
            if (this.selectedPreviousStudentAnswer) {
                this.selectedPreviousStudentAnswer.student_answer = value;
            }
        }
        else {
            item.given_answer[0].isSelected = value;
        }
    }
    ngAfterViewInit() {
        this.updateContentHeight();
    }
    // tslint:disable-next-line:use-lifecycle-interface
    ngOnDestroy() {
        console.log('destroyCalled');
        if (this.timeIntervalForCFS) {
            clearInterval(this.timeIntervalForCFS);
        }
        if (this.timeIntervalForFeedback) {
            clearInterval(this.timeIntervalForFeedback);
        }
        this.auth.removeSessionData('sse_loader');
        this.auth.removeSessionData('classDetails');
        this.auth.removeSessionData('test_details');
        clearInterval(this.interval);
        if (this.overAllInterval) {
            clearInterval(this.overAllInterval);
        }
        if (this.interval) {
            this.timeTaken = 0;
            clearInterval(this.interval);
        }
        if (this.testInterval) {
            this.timeTakenForTestInterval = 0;
            clearInterval(this.testInterval);
        }
        this.creator.changeViewList(false);
    }
    showFeedback() {
        this.modalRef = this.modalService.open(this.feedback, { size: 'xl' });
    }
    updateContentHeight() {
        const availableHeight = window.innerHeight - (224);
        console.log(availableHeight, availableHeight);
        this.contentMaxHeight = `${availableHeight + 6}px`;
        this.totalFeedbackMaxHeight = `${availableHeight + 70}px`;
        this.totalContentMaxHeight = `${availableHeight + 78}px`;
    }
    numOfQuestionAnswered() {
        let questionAnswered = 0;
        if (this.getData.student_content_status == '1' || this.getData.student_content_status == '2') {
            this.totalAns.forEach((items) => {
                const particularObjectValue = items.question_type_id != '24' ? items : items.subQuestions[0];
                if (this.checkAutoGradeQns == '2' && (particularObjectValue.is_correct == 'true' || particularObjectValue.is_correct == 'false')) {
                    questionAnswered++;
                }
                else if (this.checkAutoGradeQns != '2' && particularObjectValue.is_correct == 'manual') {
                    questionAnswered++;
                }
            });
        }
        else {
            questionAnswered = this.totalAns.length;
        }
        return questionAnswered;
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
    closeAndStartTimer() {
        // this.overAllStartTimer();
        this.firstWarning = false;
        this.disableDurationWarningButton = false;
        this.modalRef?.close();
    }
    overAllStartTimer() {
        if (this.getData.student_content_status == '1' || this.getData.student_content_status == '2') {
            this.overallPauseTimer();
            // this.overAllInterval = setInterval(() => {
            //     if (this.auth.loggedIn()) {
            //         this.overallElapsedTime = this.getElapsedOverAllTime();
            //         if (this.getData.content_duration != '0' && this.getData.content_duration != '') {
            //             this.overallTimeTaken--;
            //             this.getData.available_content_duration = this.overallTimeTaken;
            //             this.auth.setSessionData('classDetails', JSON.stringify(this.getData));
            //             if (this.overallTimeTaken == 300) {
            //                 this.overallPauseTimer();
            //                 this.firstWarning = true;
            //                 this.modalRef = this.modalService.open(this.durationWarning, {backdrop: 'static'});
            //             } else if (this.overallTimeTaken == 0) {
            //                 this.overallPauseTimer();
            //                 this.firstWarning = false;
            //                 this.modalRef = this.modalService.open(this.durationWarning, {backdrop: 'static'});
            //             }
            //         } else {
            //             this.overallTimeTaken++;
            //             this.getData.available_content_duration = this.overallTimeTaken;
            //             this.auth.setSessionData('classDetails', JSON.stringify(this.getData));
            //         }
            //     } else {
            //         clearInterval(this.overAllInterval);
            //     }
            // }, 1000);
            const durationSet = this.getData.content_duration && this.getData.content_duration !== '0';
            const initialAvailable = Number(this.getData.available_content_duration || 0);
            const initialTime = Date.now();
            this.overAllInterval = setInterval(() => {
                if (!this.auth.loggedIn()) {
                    clearInterval(this.overAllInterval);
                    return;
                }
                const now = Date.now();
                const elapsedSeconds = Math.floor((now - initialTime) / 1000);
                if (durationSet) {
                    // Countdown mode
                    this.overallTimeTaken = initialAvailable - elapsedSeconds;
                    if (this.overallTimeTaken < 0) {
                        this.overallTimeTaken = 0;
                    }
                }
                else {
                    // Count up mode
                    this.overallTimeTaken = initialAvailable + elapsedSeconds;
                }
                // Update data and session
                this.getData.available_content_duration = this.overallTimeTaken;
                this.auth.setSessionData('classDetails', JSON.stringify(this.getData));
                // Update elapsed time view
                this.overallElapsedTime = this.getElapsedOverAllTime(this.overallTimeTaken);
                // Trigger warnings
                if (durationSet) {
                    if (this.overallTimeTaken === 300) {
                        this.firstWarning = true;
                        this.disableDurationWarningButton = false;
                        this.modalRef?.close();
                        setTimeout(() => {
                            this.modalRef = this.modalService.open(this.durationWarning, { backdrop: 'static' });
                        }, 0);
                    }
                    if (this.overallTimeTaken <= 0) {
                        this.overallPauseTimer();
                        this.disableDurationWarningButton = false;
                        this.firstWarning = false;
                        this.modalRef?.close();
                        setTimeout(() => {
                            this.modalRef = this.modalService.open(this.durationWarning, { backdrop: 'static' });
                        }, 0);
                    }
                }
            }, 1000);
        }
    }
    overallPauseTimer() {
        clearInterval(this.overAllInterval);
    }
    expandFullScreen(item, i, j) {
        console.log(item, 'item');
        console.log(i, 'j');
        console.log(i, 'j');
        if (item.question_type_id == 20) {
            this.modalRef = this.modalService.open(this.showExpand, { size: 'xl', backdrop: 'static' });
            this.showAnswerItem = item;
            this.showAnswerI = i;
            this.showAnswerJ = j;
        }
        else if (item.question_type_id == 30) {
            item.given_answer = item.given_answer1;
            this.modalRef = this.modalService.open(this.showExpand, { size: 'xl', backdrop: 'static' });
            this.showAnswerItem = item;
            this.showAnswerI = i;
            this.showAnswerJ = j;
            this.hideRuleAnswer[i].section[j] = false;
        }
    }
    patchMinimize(i, j, item) {
        this.close();
        if (item.question_type_id == '30') {
            this.totalAns[i].section[j].given_answer = this.totalAns[i].section[j].given_answer1;
            this.hideRuleAnswer[i].section[j] = true;
        }
        else if (item.question_type_id == '20') {
            this.totalAns[i].section[j].given_answer = this.expandData20;
        }
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
        }, 3000);
    }
    showPdf() {
        this.pdf = !this.pdf;
        if (this.pdf) {
            this.button = 'Hide PDF';
        }
        else {
            this.button = 'Show PDF';
        }
    }
    // getAreaInfo(event) {
    //     this.areaInfo = event;
    //     const data = {
    //         platform: 'web',
    //         student_id: this.auth.getUserId(),
    //         annotation: this.areaInfo,
    //         content_id: this.getData.content_id,
    //         student_content_id: this.getData.student_content_id,
    //         class_id: this.getData.class_id,
    //     }
    //     const value = debounce({
    //
    //         this.creator.saveAnnotation(data).subscribe((successData) => {
    //                 this.saveAnnotationSuccess(successData);
    //             },
    //             (error) => {
    //                 this.saveAnnotationFailure(error);
    //             });
    //     }
    //         this.saveAnnotation(), 1000
    //     )
    //     // this.saveAnnotation();
    // }
    getDeleteAction(event) {
        this.delAnnotation = event;
    }
    getCurrentPageNo(event) {
        if (typeof event == 'number') {
            this.scrolledPageNumber = event;
        }
    }
    expandPdfSize(event) {
        this.expandPdf = event;
    }
    parseVal(val) {
        if (val != '' && val != null) {
            return parse(val);
        }
        else {
            return false;
        }
    }
    patchFreeTextVal() {
        this.totalAns.forEach((item, i) => {
            item.section.forEach((value, j) => {
                if (value.question_type_id == '30' && value.given_answer1) {
                    this.hideRuleAnswer[i].section[j] = false;
                    value.given_answer = value.given_answer1;
                }
            });
        });
        this.clickEvent();
    }
    patchWorkspaceVal() {
        this.totalAns.forEach((item, i) => {
            item.section.forEach((value, j) => {
                if (value.student_roughdata1) {
                    this.hideRuleContent[i].section[j] = false;
                    value.student_roughdata = value.student_roughdata1;
                }
            });
        });
    }
    setAnswer(id, index) {
        this.patchFreeTextVal();
        this.hideRuleAnswer[id].section[index] = !this.hideRuleAnswer[id].section[index];
    }
    submitAnswer(value, i, j) {
        console.log(value, 'value');
        console.log(i, 'j');
        console.log(i, 'j');
        this.totalAns[i].section[j].given_answer = value;
        this.hideRuleAnswer[i].section[j] = false;
        this.clickEvent();
    }
    toggle(i, j) {
        // toggle based on index
        this.patchWorkspaceVal();
        this.hideRuleContent[i].section[j] = true;
    }
    toggle1(i, j) {
        // toggle based on index
        this.hideRuleContent[i].section[j] = false;
    }
    getNumericAnswerValue(event, i, j) {
        if (this.answerEditor[i]) {
        }
        else {
            this.answerEditor[i] = { section: [] };
        }
        this.answerEditor[i].section[j] = event;
        this.totalAns[i].section[j].given_answer1 = event.content;
        this.totalAns[i].section[j].answer_attended = '1';
        if (this.getData.student_content_status == '1' || this.getData.student_content_status == '2') {
            this.guard = true;
        }
    }
    getNumericAnswerValue1(event, i, j) {
        console.log(event.content, 'iopwe');
        // this.hideRuleAnswer[j] = false;
        console.log(this.answerEditor[i].section[j], 'small editor');
        // this.answerEditor[i].section[j].content = event.content;
        this.totalAns[i].section[j].given_answer1 = event.content;
        // this.totalAns[i].section[j].given_answer = event.content;
        if (this.getData.student_content_status == '1' || this.getData.student_content_status == '2') {
            this.guard = true;
        }
    }
    getNumericWorkSpaceValue(event, i, j) {
        if (this.workSpaceEditor[i]) {
        }
        else {
            this.workSpaceEditor[i] = { section: [] };
        }
        // this.workSpaceEditor[i].section[j].content = event;
        this.totalAns[i].section[j].student_roughdata1 = event.content;
        this.totalAns[i].section[j].answer_attended = '1';
        if (this.getData.student_content_status == '1' || this.getData.student_content_status == '2') {
            this.guard = true;
        }
    }
    getWorkSpaceValue(event, i) {
        if (this.page != 1) {
            i = ((this.page - 1) * 10) + i;
        }
        if (event.content != '') {
            this.totalAns[i].student_roughdata = event.content;
        }
        if (this.getData.student_content_status == '1' || this.getData.student_content_status == '2') {
            this.guard = true;
        }
    }
    getPassageWorkSpaceValue(event, i, j, item) {
        console.log(item);
        console.log(item.student_roughdata);
        if (event.content != '') {
            item.student_roughdata = event.content;
        }
        if (this.getData.student_content_status == '1' || this.getData.student_content_status == '2') {
            this.guard = true;
        }
    }
    getGraphEditorValue(event) {
        this.graphEditorAns = event.content;
    }
    getChooseAns(event, i, j) {
        this.totalAns[i].section[j].given_answer = this.totalAns[i].section[j].array[event];
        this.totalAns[i].section[j].answer_attended = '1';
        if (this.getData.student_content_status == '1' || this.getData.student_content_status == '2') {
            this.guard = true;
        }
    }
    getInputAns(event, i, j) {
        this.totalAns[i].section[j].given_answer = event.target.value;
        this.totalAns[i].section[j].answer_attended = '1';
        this.expandData20 = event.target.value;
        if (this.getData.student_content_status == '1' || this.getData.student_content_status == '2') {
            this.guard = true;
        }
    }
    getBlanksValue(event, index, i, j) {
        for (let k = 0; k < this.totalAns[i].section[j].answer.length; k++) {
            if (k == index) {
                this.blankAns[i].section[j].input[index] = event.target.value;
            }
            else if (this.blankAns[i].section[j].input[k] == undefined) {
                this.blankAns[i].section[j].input[k] = '';
            }
        }
        this.totalAns[i].section[j].given_answer = this.blankAns[i].section[j].input;
        this.totalAns[i].section[j].answer_attended = '1';
        if (this.getData.student_content_status == '1' || this.getData.student_content_status == '2') {
            this.guard = true;
        }
    }
    toggleEliminator(event, item, index) {
        item.given_answer[index].eliminated = !item.given_answer[index].eliminated;
        event.stopPropagation();
    }
    cfsGetMultiChoice(index, id, item) {
        if (this.page != 1) {
            index = ((this.page - 1) * 10) + index;
        }
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
        if (this.getData.student_content_status == '1' || this.getData.student_content_status == '2') {
            this.guard = true;
        }
    }
    onPageChange(data) {
        this.pdfPath = this.common.convertBase64(this.questionData.file_path);
        if (this.pdfPath.length == 0) {
            this.workspacedata = this.totalAns;
            this.workspacedata.forEach((items) => {
                if (items.question_type_id != '24') {
                    items.PatchData = items.student_roughdata != '';
                }
                else {
                    items.subQuestions.forEach((sub) => {
                        sub.patchData = sub.student_roughdata != '';
                    });
                }
            });
        }
        else {
            this.workspacedata = this.totalAns;
            this.workspacedata.forEach((val) => {
                val.section.forEach((items) => {
                    if (items.question_type_id == '40') {
                        items.PatchData = items.student_roughdata != '';
                    }
                });
            });
        }
        this.page = data;
        window.scrollTo(0, 0);
        for (let i = 0; i < this.totalAns.length; i++) {
            if (this.totalAns[i].question_type_id == '20') {
                this.totalAns[i].given_answer[0].isSelected = this.totalAns[i].given_answer[0].isSelected1;
            }
            else if (this.totalAns[i].question_type_id == '10') {
                for (let j = 0; j < this.totalAns[i].given_answer.length; j++) {
                    if (this.totalAns[i].given_answer[j].isSelected1) {
                        this.totalAns[i].given_answer[j].isSelected = this.totalAns[i].given_answer[j].isSelected1;
                    }
                    else {
                        this.totalAns[i].given_answer[j].isSelected = '';
                    }
                }
            }
            else if (this.totalAns[i].question_type_id == '24') {
                for (let j = 0; j < this.totalAns[i].subQuestions.length; j++) {
                    if (this.totalAns[i].subQuestions[j].question_type_id == '10') {
                        for (let k = 0; k < this.totalAns[i].subQuestions[j].given_answer.length; k++) {
                            if (this.totalAns[i].subQuestions[j].given_answer[k].isSelected1) {
                                this.totalAns[i].subQuestions[j].given_answer[k].isSelected = this.totalAns[i].subQuestions[j].given_answer[k].isSelected1;
                            }
                            else {
                                this.totalAns[i].subQuestions[j].given_answer[k].isSelected = '';
                            }
                        }
                    }
                }
            }
        }
        this.clickEvent();
        // this.save
        // this.saveAnswer('2', 'noExit');
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
        if (this.getData.student_content_status == '1' || this.getData.student_content_status == '2') {
            this.guard = true;
        }
    }
    dropdownId(index, id) {
        if (this.page != 1) {
            index = ((this.page - 1) * 10) + index;
        }
        return index + 'dropdown' + id;
    }
    cfsGetDropdown(event, index, id, ans, val) {
        if (this.page != 1) {
            index = ((this.page - 1) * 10) + index;
        }
        this.totalAns[index].given_answer[id].isSelected = ans.toString();
        document.getElementById(index + 'dropdown' + id).innerHTML = val;
        if (this.getData.student_content_status == '1' || this.getData.student_content_status == '2') {
            this.guard = true;
        }
        this.clickEvent();
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
    cfsGetInput(event, index, id, item) {
        if (item.editor_type == 1) {
            item.given_answer[id].isSelected1 = event.target.value;
        }
        else {
            item.given_answer[id].isSelected1 = event.content;
        }
        if (this.getData.student_content_status == '1' || this.getData.student_content_status == '2') {
            this.guard = true;
        }
    }
    cfsGetPara(event, index) {
        console.log(event, 'event');
        if (this.page != 1) {
            index = ((this.page - 1) * 10) + index;
        }
        this.totalAns[index].given_answer[0].isSelected1 = event.content;
        console.log(this.totalAns[index].given_answer, 'gn');
        if ((this.getData.student_content_status == '1' || this.getData.student_content_status == '2') && event.content != '') {
            this.guard = true;
        }
    }
    cfsGetHighlight(event, index) {
        if (this.page != 1) {
            index = ((this.page - 1) * 10) + index;
        }
        this.totalAns[index].given_answer[0].isSelected = event.content;
        if ((this.getData.student_content_status == '1' || this.getData.student_content_status == '2') && event.content != '') {
            this.guard = true;
        }
    }
    cfsgetGraphValue(event, index) {
        this.totalAns[index].given_answer[0].isSelected = event;
        this.totalAns[index].answer_valueEmitted = true;
        this.graphEdited = true;
        console.log(this.totalAns[index].given_answer[0].isSelected, 'isSelected');
        if (this.getData.student_content_status == '1' || this.getData.student_content_status == '2') {
            this.guard = true;
        }
    }
    cfsGetGraghEditor(event, index) {
        if (this.page != 1) {
            index = ((this.page - 1) * 10) + index;
        }
        this.totalAns[index].editor_key = event.content;
        if ((this.getData.student_content_status == '1' || this.getData.student_content_status == '2') && event.content != '') {
            this.guard = true;
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
        if (this.getData.student_content_status == '1' || this.getData.student_content_status == '2') {
            this.guard = true;
        }
    }
    cfsGetPassageEssay(event, index, list) {
        if (list.given_answer.length != 0) {
            list.given_answer[0].isSelected = event.content;
            list.given_answer[0].isSelected1 = event.content;
        }
        else {
            console.log(list.given_answer);
            list.given_answer.push({ isSelected1: event.content });
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
        this.totalAns[index].answer_shuffled = true;
        moveItemInArray(control, event.previousIndex, event.currentIndex);
    }
    openGraph(event, i, j, item) {
        this.workAnnotate = [...item.workarea];
        this.graphAnswerVal = '';
        this.graphFeedback = item.student_feedback;
        this.graphId = i;
        this.graphIndex = j;
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: this.getData.content_id,
            content_format: this.getData.content_format,
            class_id: this.getData.class_id,
            student_id: this.auth.getUserId(),
            question_id: this.totalAns[i].section[j].answer_id,
            student_content_id: this.getData?.student_content_id,
            type: '2'
        };
        this.creator.graphAnswer(data).subscribe((successData) => {
            this.getGraphSuccess(successData);
        }, (error) => {
            this.getGraphFailure(error);
        });
        this.modalRef1 = this.modalService.open(this.answerGraph, { size: 'lg' });
    }
    getGraphSuccess(successData) {
        if (successData.IsSuccess) {
            this.graphAnswerVal = successData.ResponseObject[0].student_answer[0]?.correctAnswer;
            this.graphEditorAns = successData.ResponseObject[0].editor_answer;
            this.graphEditorAnsDup = successData.ResponseObject[0].editor_answer != '';
            this.getGraph = this.parseVal(this.graphAnswerVal);
        }
    }
    getGraphFailure(error) {
        console.log(error);
    }
    getDropdownAns(event, i, j) {
        this.totalAns[i].section[j].given_answer = this.totalAns[i].section[j].mob_options[event];
        this.totalAns[i].section[j].answer_attended = '1';
    }
    getTrueAns(event, i, j) {
        this.totalAns[i].section[j].given_answer = event;
        this.totalAns[i].section[j].answer_attended = '1';
    }
    storeGraph(event) {
        this.getGraph = event;
    }
    deletePdf(id) {
        this.answerPdf.splice(id, 1);
    }
    uploadAnswerPdf(event) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
        };
    }
    saveGraph(event, val, id) {
        this.graphBoardValue = event;
        let list;
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
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: this.getData.content_id,
            content_format: this.getData.content_format,
            class_id: this.getData.class_id,
            student_id: this.auth.getUserId(),
            question_id: id.question_id,
            answer: [{ correctAnswer: stringify(graph), correctActive: '' }],
            editor_answer: val,
            type: '1',
            student_content_id: this.getData?.student_content_id
        };
        this.creator.graphAnswer(data).subscribe((successData) => {
            this.saveGraphSuccess(successData, '2', id, data);
        }, (error) => {
            this.saveGraphFailure(error);
        });
    }
    getGraphAnswerValue(event, i, j) {
        this.graphBoardValue = event;
        let list;
        let graph;
        let graphAnswerData;
        if (this.graphBoardValue != undefined && this.graphBoardValue != '') {
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
            graph = {
                attr: this.graphBoardValue.attr,
                objects
            };
            graphAnswerData = [{ correctAnswer: stringify(graph), correctActive: '' }];
        }
        else {
            graphAnswerData = [{ correctAnswer: '', correctActive: '' }];
        }
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: this.getData.content_id,
            content_format: this.getData.content_format,
            class_id: this.getData.class_id,
            student_id: this.auth.getUserId(),
            question_id: this.totalAns[i].section[j].answer_id,
            answer: graphAnswerData,
            student_answer: graphAnswerData,
            editor_answer: this.graphEditorAns,
            student_content_id: this.getData.student_content_id,
            type: '1'
        };
        this.creator.graphAnswer(data).subscribe((successData) => {
            this.saveGraphSuccess(successData, '1');
        }, (error) => {
            this.saveGraphFailure(error);
        });
    }
    saveGraphSuccess(successData, id, data, JSONObject) {
        if (id == '1') {
            this.closeGraph(this.graphId, this.graphIndex);
            this.graphEditorAns = '';
        }
        if (data) {
            data.given_answer = JSONObject.answer;
            this.graphEdited = false;
        }
    }
    saveGraphFailure(error) {
        console.log(error);
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
        let studentAnswer;
        if (type == 'pdf') {
            studentAnswer = this.totalAns[i].section[j].answer_id;
        }
        else if (type == 'scratch') {
            if (this.page != 1) {
                i = ((this.page - 1) * 10) + i;
            }
            studentAnswer = this.totalAns[i].question_type_id != '24' ? this.totalAns[i].question_id : this.totalAns[i].subQuestions[0].question_id;
        }
        else {
            if (this.page != 1) {
                i = ((this.page - 1) * 10) + i;
            }
            studentAnswer = this.totalAns[i].subQuestions[j].question_id;
        }
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: this.getData.content_id,
            content_format: this.getData.content_format,
            class_id: this.getData.class_id,
            student_id: this.auth.getUserId(),
            answer_id: studentAnswer,
            suggestion_query: this.queries
        };
        this.student.submitQuery(data).subscribe((successData) => {
            this.submitQuerySuccess(successData, i, j);
        }, (error) => {
            this.submitQueryFailure(error);
        });
    }
    submitQuerySuccess(successData, id, index) {
        if (successData.IsSuccess) {
            console.log(this.totalAns[id], 'dsadas');
            if (this.showpdf) {
                this.totalAns[id].section[index].student_feedback = this.queries;
            }
            else {
                this.totalAns[id].student_feedback = this.queries;
            }
            this.queriesIndex = '';
            this.queries = '';
            this.toastr.success(successData.ResponseObject);
        }
    }
    submitQueryFailure(error) {
        console.log(error);
    }
    getAnnotation(pdfPath) {
        const decodedStringBtoA = this.auth.getAccessToken() + '|' + this.auth.getUserId() + '|' + this.getData.content_id + '|' + this.getData.class_id;
        const encodedStringBtoA = btoa(decodedStringBtoA);
        const encodedStringBtoA1 = btoa(encodedStringBtoA);
        const data = {
            platform: 'web',
            student_content_id: this.getData.student_content_id,
            authorization_key: encodedStringBtoA1
        };
        this.creator.getStudDetail(data).subscribe((successData) => {
            this.getAnnotationSuccess(successData, pdfPath);
        }, (error) => {
            this.getAnnotationFailure(error);
        });
    }
    getAnnotationSuccess(successData, pdfPath) {
        if (successData.IsSuccess) {
            console.log(this.common.convertBase64(successData.ResponseObject.pdfpath), 'successData.ResponseObject.pdfpath');
            successData.ResponseObject.teacher_annotation.forEach((item) => {
                item.isTeacherCorrection = false;
            });
            this.areaInfo = [...this.areaInfo, ...successData.ResponseObject.student_annotation, ...successData.ResponseObject.teacher_annotation];
            if (pdfPath[0]?.original_image_url != undefined) {
                this.common.downloadfilewithbytes(this.webhost + '/' + pdfPath[0]?.original_image_url)
                    .subscribe((filebytes) => {
                    this.pdfTemplate = filebytes;
                    this.functionCalled = true;
                    this.isPdfAvailable = true;
                    this.overallFullData = successData;
                });
            }
            else {
                this.isPdfAvailable = false;
                this.functionCalled = true;
            }
            // this.functionCalled = true;
            // while(document.getElementById('scrollinnnersection').offsetHeight < 500){
            // console.log(document.getElementById('scrollinnnersection').offsetHeight ,'2')
            //     this.pageScroll += 1;
            //     this.totalAns.push(this.totalAnsSample[this.pageScroll]);
            // this.totalAns.push(this.totalAnsSample[0]);
            // this.pushAnsArr();
        }
    }
    getAnnotationFailure(error) {
        console.log(error);
    }
    pushAnsArr() {
        console.log('1');
        console.log(document.getElementById('scrollinnnersection').offsetHeight, 'document.getElementById(\'scrollinnnersection\').offsetHeight');
        if (document.getElementById('scrollinnnersection').offsetHeight < 400) {
            this.pageScroll += 1;
            this.totalAns.push(this.totalAnsSample[this.pageScroll]);
            setTimeout(() => {
                this.pushAnsArr();
            }, 900);
        }
        else {
            return false;
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
    changeQuestionListFromTest(event) {
        console.log(event, 'event');
        this.popUpMessage = 'Please wait while we load next module ...';
        this.modalRef = this.modalService.open(this.feedbackStatus, { backdrop: 'static' });
        setTimeout(() => {
            this.timeIntervalRunningForTest = true;
            this.showQuestion = 0;
            const testDetails = JSON.parse(this.auth.getSessionData('test_details'));
            testDetails[0]?.contents.find((value) => value.content_id == event.content_id);
            this.getData = testDetails[0]?.contents.find((value) => value.content_id == event.content_id);
            this.auth.setSessionData('classDetails', JSON.stringify(this.getData));
            this.questionList(event, 'skip');
        }, 1000);
    }
    async questionList(details, calledFrom = '') {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: details.content_id,
            content_format: details.content_format,
            class_id: this.getData.class_id,
            student_content_id: details.student_content_id,
            class_content_id: this.getData.class_content_id,
            student_id: this.auth.getUserId(),
        };
        console.log(data, 'cotent');
        this.student.questionList(data).subscribe((successData) => {
            this.questionListSuccess(successData, calledFrom);
        }, (error) => {
            console.error(error, 'error_questionList');
        });
    }
    questionListSuccess(successData, calledFrom) {
        if (successData.IsSuccess) {
            this.questionData = successData.ResponseObject;
            // this.questionData1 = successData.ResponseObject;
            this.questionData1 = JSON.parse(JSON.stringify(successData.ResponseObject));
            console.log(this.questionData, 'questionData');
            this.setting();
            this.answerPdf = this.common.convertBase64(this.questionData.upload_answer);
            if (this.getData?.is_test == '1') {
                this.contentName = this.getData?.content_name + ' - ' + this.getData?.subject + ' - ' + this.getData?.module_name;
                const contentType = this.auth.getSessionData('ContentType');
                this.contentType = contentType == 'Assessments' ? 'Assessment' : 'Assignment';
            }
            else {
                this.contentName = this.questionData.name;
                this.contentType = this.questionData.content_type == '2' ? 'Assignment' : 'Assessment';
            }
            this.pdfPath = this.common.convertBase64(this.questionData.file_path);
            if (this.pdfPath.length != 0) {
                this.showpdf = true;
                this.pdf = true;
                this.totalAns = [];
                this.questionData.annotation.forEach((item) => {
                    item.isTeacherCorrection = false;
                });
                this.areaInfo = [...this.questionData.annotation];
                this.dragQuestion = [...this.questionData.questionAnnotation];
                this.totalFeedBack = this.questionData.overall_student_feedback;
                this.downloadTemplate = this.webhost + '/' + this.pdfPath[0]?.original_image_url;
                this.linkdata = this.pdfPath[0]?.links;
                this.downloadTemplateName = this.questionData.name + '.pdf';
                this.getAnnotation(this.pdfPath);
                if (this.questionData.answers.length != 0) {
                    for (let i = 0; i < this.questionData.answers.length; i++) {
                        this.questionData.answers[i].section.sort((a, b) => parseFloat(a.sub_questions[0].question_no) - parseFloat(b.sub_questions[0].question_no));
                    }
                    for (let i = 0; i < this.questionData.answers.length; i++) {
                        this.totalAns[i] = { heading: this.questionData.answers[i].heading, section: [] };
                        this.workSpaceEditor[i] = { section: [] };
                        this.hideRuleAnswer[i] = { section: [] };
                        this.hideRuleContent[i] = { section: [] };
                        this.answerEditor[i] = { section: [] };
                        this.blankAns[i] = { section: [] };
                        for (let x = 0; x < this.questionData.answers[i].section.length; x++) {
                            for (let j = 0; j < this.questionData.answers[i].section[x].sub_questions.length; j++) {
                                if (this.questionData.answers[i].section[x].sub_questions[j].page_no != 0) {
                                    this.showAutoScroll = true;
                                }
                                this.questionData.answers[i].section[x].sub_questions[j].answer_attended = '0';
                                this.totalAns[i].section.push(this.questionData.answers[i].section[x].sub_questions[j]);
                                this.hideRuleAnswer[i].section.push(false);
                                this.hideRuleContent[i].section.push(false);
                            }
                        }
                    }
                    this.workspacedata = this.totalAns;
                    this.totalAnsSample = this.totalAns;
                    this.totalAns = [];
                    if (this.totalAnsSample.length > 3) {
                        this.totalAnsSample.forEach((item, index) => {
                            if (index <= 3) {
                                this.pageScroll = index;
                                this.totalAns.push(this.totalAnsSample[index]);
                            }
                        });
                    }
                    else {
                        this.totalAns = this.totalAnsSample;
                    }
                    // if (this.totalAnsSample.length > 1 && this.totalAnsSample[this.pageScroll].section.length < 3) {
                    //     this.pageScroll += 1;
                    //     this.totalAns.push(this.totalAnsSample[this.pageScroll]);
                    // }
                    this.workspacedata.forEach((val) => {
                        val.section.forEach((items) => {
                            if (items.question_type_id == '40') {
                                items.PatchData = items.student_roughdata != '';
                                console.log(items.PatchData, 'items.PatchData');
                            }
                        });
                    });
                    this.patchSomeIdVal();
                }
                console.log(this.showAutoScroll, 'this.showAutoScroll');
            }
            else {
                this.showpdf = false;
                this.linkdata = this.questionData.links;
                this.totalFeedBack = this.questionData.overall_student_feedback;
                this.totalAns = this.questionData.questions;
                this.timeTaken = this.totalAns.length != 0 ? this.totalAns[0]?.question_type_id != '24' ? this.totalAns[0]?.time_taken : this.totalAns[0]?.subQuestions[0]?.time_taken : 0;
                this.percentage = this.questionData?.percentage;
                this.checkAutoGradeQns = this.questionData.all_autograde == '1' ? this.questionData?.auto_review : '0';
                console.log(this.checkAutoGradeQns, 'autogade');
                this.workspacedata = this.questionData.questions;
                this.workspacedata.forEach((items) => {
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
                    this.totalAns[i].markedAsReview = this.totalAns[i].markedAsReview == 'true';
                    this.totalAns[i].workspaceClicked = !!(this.totalAns[i].workspaceClicked ?? this.isSingleQnsWithFeedbackType);
                    this.totalAns[i].feedBackClicked = !!(this.totalAns[i].feedBackClicked ?? this.isSingleQnsWithFeedbackType);
                    if (this.totalAns[i].question_type_id == '40' || this.totalAns[i].question_type_id == '41') {
                        console.log(this.totalAns[i].given_answer, 'givenAnswer');
                        this.totalAns[i].answer_valueEmitted = false;
                        this.totalAns[i].given_answer[0].isSelected = this.parseVal(this.totalAns[i].given_answer[0].correctAnswer);
                    }
                    else if (this.totalAns[i].question_type_id == '16') {
                        this.totalAns[i].answer_shuffled = false;
                    }
                    else if (this.totalAns[i].question_type_id == '24') {
                        for (let j = 0; j < this.totalAns[i].subQuestions.length; j++) {
                            const findIndex = this.listPassageDetails.length != 0 ?
                                this.listPassageDetails.findIndex(value => value.passage_id == this.totalAns[i].subQuestions[j].passage_id) : '';
                            this.totalAns[i].subQuestions[j].passage = findIndex != '' && findIndex != -1 ? this.listPassageDetails[findIndex].passage : this.totalAns[i].subQuestions[j].passage;
                            if (['1', '2'].includes(this.totalAns[i].subQuestions[j].question_type_id)) {
                                this.totalAns[i].subQuestions[j].given_answer.forEach(item => item.eliminated = item.eliminated ? item.eliminated : false);
                            }
                        }
                    }
                    else if (['1', '2'].includes(this.totalAns[i].question_type_id)) {
                        this.totalAns[i].given_answer.forEach(item => item.eliminated = item.eliminated ? item.eliminated : false);
                    }
                }
                if (this.totalAns.length != 0) {
                    this.isSingleQnsWithFeedbackType && this.questionData?.auto_review != '0'
                        ? this.getFeedbackCount(this.totalAns[0], 'firstType') : '';
                    if (this.getData?.student_content_status == '1' || this.getData?.student_content_status == '2') {
                        let particularIndex = 0;
                        if (this.questionData.laq_id != 0) {
                            for (let i = 0; i < this.totalAns.length; i++) {
                                const particularObject = this.totalAns[i].question_type_id != '24' ? this.totalAns[i] : this.totalAns[i].subQuestions[0];
                                if (this.questionData.laq_id == particularObject.question_id) {
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
                            this.previouslySelectedIndex = 0;
                            this.selectedQuestionList(this.totalAns[0], 0, 'questionList');
                        }
                        const contentDuration = this.getData.is_test == '1' ? this.getData.content_duration : this.questionData.content_duration;
                        this.overallTimeTaken = this.getData.available_content_duration && contentDuration != '' && contentDuration != '0'
                            ? this.getData.available_content_duration : contentDuration == '0' ? parseInt(this.questionData.content_time_taken) : 0;
                        if (!(this.isSingleQnsWithFeedbackType && this.questionData?.auto_review != '0')) {
                            this.overAllStartTimer();
                        }
                    }
                    else {
                        if (this.getData?.is_test == '1') {
                            this.overallTimeTaken = parseInt(this.testFullData?.content_time_taken);
                        }
                        else {
                            this.overallTimeTaken = parseInt(this.questionData.content_time_taken);
                        }
                        this.overallElapsedTime = this.getElapsedOverAllTime(this.overallTimeTaken);
                        this.selectedQuestionList(this.totalAns[0], 0, 'questionList');
                    }
                    this.serviceCalled = true;
                    console.log(this.overallTimeTaken, 'overallTimeTaken');
                    this.timeIntervalRunningForTest = false;
                    if (calledFrom != '') {
                        this.modalRef?.close();
                    }
                }
                if (calledFrom == '' && this.isSingleQnsWithFeedbackType) {
                    this.timeIntervalForFeedback = setInterval(() => {
                        this.getFeedBackList();
                    }, 10000);
                }
            }
        }
        else {
            this.toastr.info(successData.ResponseObject.message);
            if (successData.ResponseObject.content_type == '2') {
                this.route.navigate(['/studentlogin/assignment']);
            }
            else {
                this.route.navigate(['/studentlogin/assessment']);
            }
        }
        this.clickEvent();
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
    sectionFilter(event) {
        const scroll = document.getElementById('scrollinnnersection');
        scroll.scrollTo(0, 0);
        if (event.target.value == 'all') {
            this.pageScroll = 0;
            this.totalAns = [];
            if (this.totalAnsSample.length > 2) {
                for (let i = 0; i < 3; i++) {
                    this.pageScroll = i;
                    this.totalAns.push(this.totalAnsSample[this.pageScroll]);
                }
            }
            else {
                this.totalAns = [...this.totalAnsSample];
            }
        }
        else {
            this.totalAns = [this.totalAnsSample[parseInt(event.target.value)]];
        }
        console.log(this.totalAns, 'toatalans');
        console.log(this.totalAnsSample, 'totalAnsSample');
        this.patchSomeIdVal();
    }
    finalPopUp() {
        const markedValue = this.totalAns.some(item => item.markedAsReview == true);
        if (markedValue) {
            this.modalRef = this.modalService.open(this.reviewAlert);
        }
        else {
            this.timeIntervalRunningForTest = true;
            this.buttonClicked = 'submit';
            this.submitPopup();
        }
        console.log(markedValue, 'markedValue');
    }
    submitPopup() {
        this.modalRef = this.modalService.open(this.submitAlert);
    }
    scrollDownPads() {
        // this.jsPDF.addPage();
        // this.jsPDF.insertPage(1);
        // this.samplePdf = this.jsPDF.output('datauristring');
        // this.signaturePad.scrollDownPad();
        // this.writtingPadHeight += 300;
        // // let elem = document.getElementById('signaturepad');
        // // this.signaturePad = elem;
        // console.log(this.signaturePad, 'signaturePad');
        // //
        // // elem.children[0].setAttribute('height' , this.writtingPadHeight);
        // this.signaturePadOptions = {
        //     minWidth: 1,
        //     maxWidth: 1,
        //     penColor: '#ce2222',
        //     canvasWidth: 460,
        //     canvasHeight: this.writtingPadHeight
        // };
        // this.resizeSignaturePad();
        // this.cdr.detectChanges();
    }
    drawComplete() {
        console.log('complete');
        // this.sigPadData = this.signaturePad.toDataURL();
    }
    onScrollDown() {
        if (this.totalAns.length < this.totalAnsSample.length && this.sectionFilterVal == 'all') {
            this.pageScroll += 1;
            console.log('enter scroll');
            this.totalAns.push(this.totalAnsSample[this.pageScroll]);
            this.patchSomeIdVal();
        }
    }
    scrollQues(event) {
        const data = event.path;
        // console.log(data, 'data');
        console.log(this.allowAutoScroll, 'allowAutoScroll');
        if (this.allowAutoScroll && this.showAutoScroll && data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].id != '' && data[i].id != undefined) {
                    const split = data[i].id.split('-');
                    if (split.length == 3 && split[0] != '0') {
                        this.scrolledPageNumber = parseInt(split[0]);
                        // this.anno.pageVariable = parseInt(this.scrolledPageNumber);
                        break;
                    }
                }
                console.log(this.scrolledPageNumber, 'this.scrolledPageNumber');
            }
        }
    }
    patchSomeIdVal() {
        setTimeout(() => {
            for (let i = 0; i < this.totalAns.length; i++) {
                for (let j = 0; j < this.totalAns[i].section.length; j++) {
                    if (this.totalAns[i].section[j].student_roughdata != '') {
                        // this.workSpaceEditor[i].section[j]?.editor.setContent(this.totalAns[i].section[j].student_roughdata);
                        this.workSpaceEditor[i].section[j]?.editor.setContent(this.totalAns[i].section[j].student_roughdata);
                    }
                    if (this.totalAns[i].section[j].question_type_id == '30') {
                        if (this.totalAns[i].section[j].given_answer != '') {
                            this.answerEditor[i].section[j]?.editor.setContent(this.totalAns[i].section[j].given_answer);
                        }
                    }
                    else if (this.totalAns[i].section[j].question_type_id == '54') {
                        this.blankAns[i].section[j] = { input: [] };
                        for (let k = 0; k < this.totalAns[i].section[j].given_answer.length; k++) {
                            this.blankAns[i].section[j].input.push(this.totalAns[i].section[j].given_answer[k]);
                        }
                    }
                }
            }
            this.clickEvent();
        }, 2000);
    }
    validateAnswer() {
        this.totalAns.forEach((val, id) => {
            val.section.forEach((item, index) => {
                if (item.question_type_id == '54' && item.answer_attended != '3') {
                    let validate = false;
                    item.given_answer.forEach((arr) => {
                        if (arr != '') {
                            validate = true;
                        }
                    });
                    if (validate) {
                        item.answer_attended = '2';
                    }
                }
                else if (item.answer_attended != '3') {
                    if (item.given_answer != '') {
                        item.answer_attended = '2';
                    }
                    else {
                        item.answer_attended = '0';
                    }
                }
            });
        });
    }
    getElapsedOverAllTime(totalSeconds) {
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        hours = hours <= 9 ? '0' + hours : hours;
        minutes = minutes <= 9 ? '0' + minutes : minutes;
        seconds = seconds <= 9 ? '0' + seconds : seconds;
        return { hours, minutes, seconds };
    }
    // getElapsedOverAllTime(): TimeSpan {
    //     let totalSeconds = this.overallTimeTaken;
    //     let hours: any = 0;
    //     let minutes: any = 0;
    //     let seconds: any = 0;
    //     if (totalSeconds >= 3600) {
    //         hours = Math.floor(totalSeconds / 3600);
    //         totalSeconds -= 3600 * hours;
    //     }
    //
    //     if (totalSeconds >= 60) {
    //         minutes = Math.floor(totalSeconds / 60);
    //         totalSeconds -= 60 * minutes;
    //     }
    //
    //     seconds = totalSeconds;
    //     seconds = seconds <= 9 ? '0' + seconds : seconds;
    //     hours = hours <= 9 ? '0' + hours : hours;
    //     minutes = minutes <= 9 ? '0' + minutes : minutes;
    //     return {
    //         hours,
    //         minutes,
    //         seconds
    //     };
    // }
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
        this.totalAns[this.showQuestion].question_type_id != '24' ? this.totalAns[this.showQuestion].time_taken = this.timeTaken :
            this.totalAns[this.showQuestion].subQuestions[0].time_taken = this.timeTaken;
        return {
            hours,
            minutes,
            seconds
        };
    }
    updateAnswer() {
        this.questionData.answers.forEach((value) => {
            value.section.forEach((sec) => {
                sec.sub_questions.forEach((item) => {
                    if (item.answer_attended == '1') {
                        item.answer_attended = '2';
                    }
                });
            });
        });
    }
    checkQuestionId(item) {
        return item.question_type_id != '24' ? item : item.subQuestions[0];
    }
    getButtonClass(list, index) {
        const status = this.checkQuestionId(list)?.is_correct;
        const isTest = this.getData?.is_test === '1';
        return {
            'bg-green': status === 'true' && !isTest,
            'bg-partially': ['partially-completed', 'manual'].includes(status) || (isTest && status !== ''),
            'bg-red': status === 'false' && !isTest,
            active: this.showQuestion === index
        };
    }
    getReviewIcon(status) {
        return ['partially-completed', 'manual'].includes(status)
            ? 'assets/images/bookmark_checked_yellow.png'
            : 'assets/images/bookmark_checked.webp';
    }
    checkDisableConditionForQns(item) {
        const particularObjectValue = item.question_type_id != '24' ? item : item.subQuestions[0];
        return (this.getData.student_content_status != '1' && this.getData.student_content_status != '2')
            || particularObjectValue.is_correct == 'false' || particularObjectValue.is_correct == 'true' || (particularObjectValue.is_correct == 'partially-completed' && !this.tryAgainButtonEnabled);
    }
    checkForApiTypeQns() {
        if (this.isSingleQnsWithFeedbackType && this.questionData?.auto_review != '0') {
            if (this.totalAns[0].given_answer[0]?.isSelected.trim().split(/\s+/).length >= this.minimumWordValidation || this.minimumWordValidation == 0) {
                this.timeIntervalRunningForTest = true;
                this.buttonClicked = 'submit';
                this.modalRef = this.modalService.open(this.submitAlert);
            }
            else {
                this.toastr.error('Answer should be at least ' + this.minimumWordValidation + ' words.');
            }
        }
        else {
            this.timeIntervalRunningForTest = true;
            this.buttonClicked = 'submit';
            this.modalRef = this.modalService.open(this.submitAlert);
        }
    }
    checkFinalSave() {
        if (this.firstWarning) {
            this.modalRef?.close();
        }
        else if (!this.firstWarning && this.overallTimeTaken <= 0) {
            this.disableDurationWarningButton = false;
            this.submitAnswering = true;
            this.saveAnswer('4', 'exit', true);
        }
    }
    passageList() {
        const testDetails = JSON.parse(this.auth.getSessionData('test_details'));
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        if (testDetails) {
            data['content_id'] = testDetails[0]?.content_id ?? '';
        }
        else {
            data['content_id'] = this.getData?.content_id ?? '';
        }
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
                            this.listPassageDetails.findIndex(value => value.passage_id == this.totalAns[i].subQuestions[j].passage_id) : '';
                        this.totalAns[i].subQuestions[j].passage = findIndex != '' && findIndex != -1 ? this.listPassageDetails[findIndex].passage : this.totalAns[i].subQuestions[j].passage;
                    }
                }
            }
        }
    }
    setServiceInterval(calledType = 'set') {
        this.timeIntervalRunningForTest = !(calledType == 'set');
        if (calledType == 'set') {
            this.timeIntervalForCFS = setInterval(() => {
                if (!this.timeIntervalRunningForTest && this.serviceCalled) {
                    console.log('Service Called');
                    this.saveAnswer('2', 'noExit', false);
                }
            }, 60000);
        }
        else {
            if (this.timeIntervalForCFS) {
                clearInterval(this.timeIntervalForCFS);
            }
        }
    }
    async saveAnswer(id, route, loader, questionMove = '') {
        console.log(id, route, loader);
        let allow = true;
        let finalArr = [];
        this.commondata.showLoader(loader);
        if (this.questionData.answers) {
            this.autoScoreRelease = true;
            this.updateAnswer();
            this.patchFreeTextVal();
            // if (this.totalAns.length < this.totalAnsSample.length && this.sectionFilterVal == 'all') {
            //     for (let i = 0; i < this.totalAns.length; i++) {
            //         this.totalAnsSample[i] = this.totalAns[i];
            //     }
            // } else if (this.totalAns.length < this.totalAnsSample.length && this.sectionFilterVal != 'all') {
            //     this.totalAnsSample[i] = this.totalAns[i];
            // }
            for (let i = 0; i < this.questionData.answers.length; i++) {
                for (let x = 0; x < this.questionData.answers[i].section.length; x++) {
                    for (let j = 0; j < this.questionData.answers[i].section[x].sub_questions.length; j++) {
                        if (this.questionData.answers[i].section[x].sub_questions[j].auto_grade == '0') {
                            this.autoScoreRelease = false;
                        }
                        const ans = this.questionData.answers[i].section[x].sub_questions[j];
                        for (let k = 0; k < this.totalAnsSample[i].section.length; k++) {
                            if (this.totalAnsSample[i].section[k].sub_question_no == ans.sub_question_no) {
                                if (this.totalAnsSample[i].section[k].question_type_id == 54) {
                                    if (this.totalAnsSample[i].section[k].given_answer.length != this.totalAnsSample[i].section[k].answer.length) {
                                        this.totalAnsSample[i].section[k].given_answer = [];
                                        for (let z = 0; z < this.totalAnsSample[i].section[k].answer.length; z++) {
                                            this.totalAnsSample[i].section[k].given_answer.push('');
                                        }
                                    }
                                }
                                if (this.totalAnsSample[i].section[k].question_type_id == 30) {
                                    if (this.totalAnsSample[i].section[k].given_answer1) {
                                        ans.given_answer = this.totalAnsSample[i].section[k]?.given_answer1;
                                    }
                                }
                                else {
                                    ans.given_answer = this.totalAnsSample[i].section[k].given_answer;
                                }
                                ans.student_feedback = this.totalAnsSample[i].section[k].student_feedback;
                                ans.student_roughdata = this.totalAnsSample[i].section[k].student_roughdata1;
                            }
                        }
                    }
                }
            }
            finalArr = JSON.parse(JSON.stringify(this.questionData.answers));
            finalArr = finalArr.filter((value) => {
                value.section = value.section.filter((sec) => {
                    sec.sub_questions = sec.sub_questions.filter((item) => {
                        return item.answer_attended == '2';
                    });
                    return sec.sub_questions.length != '0';
                });
                return value.section.length != '0';
            });
            finalArr.forEach((value) => {
                value.section.forEach((sec) => {
                    sec.sub_questions.forEach((item) => {
                        item.answer_attended = '3';
                    });
                });
            });
            if ((finalArr.length == 0 && this.questionData.answers.length != 0) && !loader) {
                allow = false;
                // this.answerSaving = false;
                this.commondata.showLoader(false);
                // this.commondata.showLoader(false);
                return false;
            }
        }
        else {
            for (let i = 0; i < this.totalAns.length; i++) {
                if (this.totalAns[i].question_type_id == '40' || this.totalAns[i].question_type_id == '41') {
                    this.saveAnswerForFewType(i, 'save');
                }
                else if (questionMove == 'same' || id == '4') {
                    this.saveAnswerForFewType(i, 'save');
                }
                if (this.checkAutoGradeQns != '0' && id == '4') {
                    const questionNumber = this.showQuestion;
                    const particularObjectValue = this.totalAns[i].question_type_id != '24' ? this.totalAns[i] : this.totalAns[i].subQuestions[0];
                    if (particularObjectValue.is_correct == '' || particularObjectValue.is_correct == 'partially-completed' || particularObjectValue.is_correct == 'manual') {
                        this.totalAns[i].question_type_id != '55' ? this.pauseTimer() : '';
                        particularObjectValue.no_of_attempt = parseInt(particularObjectValue.no_of_attempt) + 1;
                        particularObjectValue.is_correct = this.totalAns[i].question_type_id != '55' ?
                            this.checkCorrectAnswerOrNot(particularObjectValue, 'allQuestion') : 'false';
                        particularObjectValue.time_taken = questionNumber == i ? this.timeTaken : particularObjectValue.time_taken;
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
        let data = {};
        console.log(this.getData?.is_test, 'is_test');
        if (this.questionData.answers) {
            data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                student_id: this.auth.getUserId(),
                content_id: this.questionData.content_id,
                content_format: this.questionData.content_format,
                student_content_id: this.getData.student_content_id,
                class_id: this.getData.class_id,
                overall_student_feedback: this.totalFeedBack,
                status: id,
                upload_answer: this.answerPdf,
                answers: finalArr
            };
        }
        else {
            const content_time_taken = this.getData.content_duration != '0' ? parseInt(this.getData.content_duration) * 60 - this.overallTimeTaken
                : this.overallTimeTaken;
            const keyName = ['editor_context', 'question', 'level', 'passage_id', 'passage_title', 'passage', 'resource',
                'question_topic', 'sub_topic', 'question_standard_name', 'subject_name', 'answer_instructions',
                'rough_image_url', 'rough_image_thumb_url', 'student_answer_image', 'jiixdata', 'roughdata',
                'multiple_response', 'exact_match', 'hint', 'explanation', 'word_limit',
                'scoring_instruction', 'source', 'target', 'has_sub_question', 'editor_answer', 'editor_type'];
            const removeKeys = (obj) => {
                keyName.forEach((key) => {
                    if (key in obj) {
                        delete obj[key];
                    }
                });
                return obj;
            };
            const questionData = this.totalAns.map((question) => {
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
            data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                student_id: this.auth.getUserId(),
                content_id: this.getData?.is_test == '1' ? this.getData?.test_content_id : this.questionData.content_id,
                content_format: this.questionData.content_format,
                student_content_id: this.getData.student_content_id,
                class_id: this.getData.class_id,
                overall_student_feedback: this.totalFeedBack,
                content_time_taken,
                all_autograde: this.isSingleQnsWithFeedbackType && this.questionData.auto_review != '0' ? '1' :
                    this.questionData.all_autograde,
                laq_id: this.totalAns[this.showQuestion]?.question_type_id != '24' ?
                    this.totalAns[this.showQuestion]?.question_id : this.totalAns[this.showQuestion]?.subQuestions[0]?.question_id,
                status: id == '4' ? '4' : !checkAllQuestionCorrectedOrNot ? '4' : id,
                questions: questionData
                // questions: this.totalAns
            };
            if (this.getData?.is_test == '1') {
                data['is_test'] = this.getData?.is_test;
                data['module_id'] = this.getData?.content_id;
            }
            if (data['status'] == '4') {
                this.setServiceInterval('clear');
            }
        }
        console.log(allow, data, 'allow');
        if (allow || loader) {
            await this.student.submitAnswer(data).subscribe((successData) => {
                this.submitAnswerSuccess(successData, data, route, loader, questionMove);
            }, (error) => {
                this.commondata.showLoader(false);
                this.submitAnswerFailure(error);
            });
        }
    }
    submitAnswerSuccess(successData, data, route, loader, questionMove) {
        this.commondata.showLoader(false);
        if (successData.IsSuccess) {
            if (this.questionData.answers) {
                this.questionData.answers.forEach((value) => {
                    value.section.forEach((sec) => {
                        sec.sub_questions.forEach((item) => {
                            if (item.answer_attended == '2') {
                                item.answer_attended = '3';
                            }
                        });
                    });
                });
            }
            else {
                if (data.status != '4') {
                    this.studentAnswerDetails(questionMove, loader);
                }
            }
            this.guard = false;
            this.answerSaving = false;
            if (data.status == '4') {
                this.close();
                this.toastr.success(this.contentType + ' ' + 'Submitted');
            }
            else if (loader == true && questionMove == 'same') {
                this.toastr.success(this.contentType + ' ' + 'Saved');
            }
            if (this.getData?.is_test == '1' && data.status == '4') {
                const testDetails = JSON.parse(this.auth.getSessionData('test_details'));
                console.log(testDetails, 'test_Details');
                const findIndex = testDetails[0]?.contents.findIndex(value => value.content_id == this.getData.content_id);
                if (findIndex == testDetails[0]?.contents.length - 1) {
                    this.routingOutsideAnsweringPage(route, data);
                }
                else {
                    this.overallPauseTimer();
                    setTimeout(() => {
                        this.overallTimeTaken = 0;
                    }, 0);
                    if (this.getData?.interval_time != '' && this.getData?.interval_time != '0') {
                        this.timeTakenForTestInterval = parseInt(this.getData?.interval_time) * 60;
                        this.startTimerIntervalOfTest();
                        this.disableSkipButton = false;
                        this.modalRef = this.modalService.open(this.testTimerStatus, { backdrop: 'static' });
                    }
                    else if (this.getData?.interval_time == '0') {
                        if (this.testInterval) {
                            this.timeTakenForTestInterval = 0;
                            clearInterval(this.testInterval);
                        }
                        this.pauseTimerIntervalOfTest();
                        this.skipToNextContent();
                    }
                }
            }
            else {
                this.routingOutsideAnsweringPage(route, data);
            }
        }
        else {
            this.disableButton = false;
        }
    }
    submitAnswerFailure(error) {
        this.answerSaving = false;
        this.disableButton = false;
        if (this.isSingleQnsWithFeedbackType && this.questionData?.auto_review != '0') {
            this.modalRef ? this.modalRef.close() : '';
        }
        console.log(error);
    }
    // getElapsedTimeIntervalTest(): TimeSpan {
    //     let totalSeconds = this.timeTakenForTestInterval;
    //     if (totalSeconds >= 0) {
    //         let hours: any = 0;
    //         let minutes: any = 0;
    //         let seconds: any = 0;
    //         if (totalSeconds >= 3600) {
    //             hours = Math.floor(totalSeconds / 3600);
    //             totalSeconds -= 3600 * hours;
    //         }
    //
    //         if (totalSeconds >= 60) {
    //             minutes = Math.floor(totalSeconds / 60);
    //             totalSeconds -= 60 * minutes;
    //         }
    //
    //         seconds = totalSeconds;
    //         seconds = seconds <= 9 ? '0' + seconds : seconds;
    //         hours = hours <= 9 ? '0' + hours : hours;
    //         minutes = minutes <= 9 ? '0' + minutes : minutes;
    //         if (this.timeTakenForTestInterval === 0) {
    //             setTimeout(() => {
    //                 this.pauseTimerIntervalOfTest();
    //                 this.skipToNextContent();
    //                 this.timeTakenForTestInterval = 0;
    //             }, 0);
    //         }
    //         return {
    //             hours,
    //             minutes,
    //             seconds
    //         };
    //     }
    // }
    // startTimerIntervalOfTest() {
    //     this.pauseTimerIntervalOfTest();
    //     this.testInterval = setInterval(() => {
    //         this.timeTakenForTestInterval--;
    //         this.testElapsedTime = this.getElapsedTimeIntervalTest();
    //     }, 1000);
    // }
    startTimerIntervalOfTest() {
        this.pauseTimerIntervalOfTest();
        const endTime = Date.now() + this.timeTakenForTestInterval * 1000;
        this.testInterval = setInterval(() => {
            const now = Date.now();
            const remainingSeconds = Math.max(Math.floor((endTime - now) / 1000), 0);
            this.timeTakenForTestInterval = remainingSeconds;
            this.testElapsedTime = this.getElapsedTimeIntervalTest(remainingSeconds);
            if (remainingSeconds === 0) {
                this.pauseTimerIntervalOfTest();
                this.skipToNextContent();
            }
        }, 1000);
    }
    getElapsedTimeIntervalTest(totalSeconds) {
        const hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return {
            hours: hours <= 9 ? '0' + hours : hours,
            minutes: minutes <= 9 ? '0' + minutes : minutes,
            seconds: seconds <= 9 ? '0' + seconds : seconds
        };
    }
    pauseTimerIntervalOfTest() {
        clearInterval(this.testInterval);
        this.testInterval = null;
    }
    skipToNextContent() {
        this.modalRef?.close();
        this.popUpMessage = 'Please wait while we load next module ...';
        this.modalRef = this.modalService.open(this.feedbackStatus, { backdrop: 'static' });
        const testDetails = JSON.parse(this.auth.getSessionData('test_details'));
        // console.log(testDetails, 'test_Details');
        const findIndex = testDetails[0]?.contents.findIndex(value => value.content_id == this.getData.content_id);
        // console.log(findIndex, 'initial_Index');
        // console.log(this.getData, 'befrore_skip');
        this.getData = testDetails[0]?.contents[findIndex + 1] ?? testDetails[0]?.contents[findIndex];
        // console.log(this.getData, 'getData_skip');
        // console.log(this.getData.is_test, 'is_test_skip_content');
        if (this.getData.content_started_at == null && (this.getData.student_content_status == '1' || this.getData.student_content_status == '2')) {
            this.getData.available_content_duration = parseInt(this.getData.content_duration) * 60;
            this.cdr.detectChanges();
            this.auth.updateContentStatus(this.getData, '');
        }
        setTimeout(() => {
            this.showQuestion = 0;
            this.questionList(this.getData, 'skip');
            this.setServiceInterval('set');
        }, 1000);
    }
    routingOutsideAnsweringPage(route, data) {
        if (route == 'exit') {
            this.guard = false;
            this.auth.setSessionData('ContentType', this.contentType);
            if (this.isSingleQnsWithFeedbackType && this.questionData?.auto_review != '0' && data.status == '4') {
                const payload = {
                    content_name: this.contentName,
                    content_id: this.questionData.content_id,
                    content_format: this.questionData.content_format,
                    class_id: this.getData.class_id,
                    student_content_id: this.getData.student_content_id,
                    content_type: this.questionData.content_type
                };
                this.auth.setSessionData('student-card', JSON.stringify(payload));
                this.modalRef.close();
                this.route.navigate(['/studentlogin/score-card']);
            }
            else {
                this.route.navigate(['/studentlogin/' + this.contentType.toLowerCase()]);
            }
        }
    }
    serviceNeededOrNot(data) {
        const particularObjectValue = data.question_type_id != '24' ? data : data.subQuestions[0];
        if (this.checkAutoGradeQns == '2') {
            return (particularObjectValue.is_correct == '' ||
                (particularObjectValue.is_correct == 'partially-completed' && (particularObjectValue.no_of_attempt < this.maximumAttempt) && this.tryAgainButtonEnabled));
        }
        else {
            return false;
        }
    }
    serviceNeededOrNotFinalSubmit(data) {
        const particularObjectValue = data.question_type_id != '24' ? data : data.subQuestions[0];
        return (particularObjectValue.is_correct == '' || particularObjectValue.is_correct == 'partially-completed');
    }
    checkCorrectAnswerOrNot(data, questionNeedToCheck) {
        let correctAnswer = false;
        if (data.question_type_id == '1') {
            correctAnswer = data.answer.every((items, index) => {
                return !(items.correctActive == '1' && data.given_answer[index].isSelected == '');
            });
        }
        else if (data.question_type_id == '2') {
            correctAnswer = data.answer.every((items, index) => {
                return !((items.correctActive == '1' && data.given_answer[index].isSelected == '') || (items.correctActive == '' && data.given_answer[index].isSelected != ''));
            });
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
        else if (data.question_type_id == '20') {
            if (data.given_answer[0]?.isSelected1) {
                const enteredValue = data.given_answer[0]?.isSelected1.trim().toLowerCase().split(' ').join('');
                // data.answer.forEach((value, index) => {
                //     console.log(value.correctAnswer.trim().toLowerCase().split(' ').join(''), 'mathsss' , index);
                // });
                correctAnswer = data.answer.some(answer => answer.correctAnswer.trim().toLowerCase().split(' ').join('') == enteredValue);
            }
            else {
                correctAnswer = false;
            }
        }
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
        return correctAnswer.toString();
    }
    studentAnswerDetails(questionMove, loader = true) {
        this.commondata.showLoader(loader);
        this.auth.setSessionData('sse_loader', !loader ? 'true' : 'false');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_content_id: this.getData?.student_content_id,
            question_id: this.totalAns[this.showQuestion]?.question_type_id != '24' ?
                this.totalAns[this.showQuestion]?.question_id : this.totalAns[this.showQuestion]?.subQuestions[0]?.question_id
        };
        this.student.studentAnswer(data).subscribe((successData) => {
            this.studentAnswerDetailsSuccess(successData, questionMove);
        }, (error) => {
            console.log(error, 'studentAnswerDetails');
            this.commondata.showLoader(false);
        });
    }
    studentAnswerDetailsSuccess(successData, questionMove) {
        // console.log(successData, 'successData');
        this.commondata.showLoader(false);
        this.auth.removeSessionData('sse_loader');
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
                this.selectedQuestionList(this.totalAns[indexValue], indexValue);
            }
            else {
                this.guard = false;
                this.route.navigate(['/studentlogin/' + this.contentType.toLowerCase()]);
            }
        }
    }
    previousQuestion() {
        const questionNumber = this.showQuestion;
        this.saveAnswerForFewType(questionNumber, 'save');
        this.showQuestion--;
        this.selectedQuestionList(this.totalAns[this.showQuestion], this.showQuestion);
    }
    checkSubmitFunction() {
        const markedValue = this.totalAns.some(item => item.markedAsReview == true);
        if (markedValue) {
            this.modalRef = this.modalService.open(this.reviewAlert);
        }
        else {
            this.submitFunction();
        }
    }
    async submitFunction() {
        const particularObjectValue = this.totalAns[this.showQuestion].question_type_id != '24' ? this.totalAns[this.showQuestion] : this.totalAns[this.showQuestion].subQuestions[0];
        if (this.serviceNeededOrNot(particularObjectValue)) {
            const answerValidation = this.checkCorrectAnswerOrNot(particularObjectValue, 'singleQuestion');
            if (answerValidation == 'true' || answerValidation == 'false') {
                this.timeIntervalRunningForTest = true;
                this.buttonClicked = 'submit';
                this.modalRef = this.modalService.open(this.submitAlert);
            }
            else if (answerValidation == 'partially-completed' && particularObjectValue.no_of_attempt == '2') {
                this.timeIntervalRunningForTest = true;
                this.buttonClicked = 'submit';
                this.modalRef = this.modalService.open(this.submitAlert);
            }
            else {
                this.pauseTimer();
                this.saveAnswerForFewType(this.showQuestion, 'nextWithAutoGrade');
            }
        }
        else {
            this.timeIntervalRunningForTest = true;
            this.buttonClicked = 'submit';
            this.modalRef = this.modalService.open(this.submitAlert);
        }
    }
    async checkLastQuestion(currentIndex, lastQuestion) {
        const particularObjectValue = this.totalAns[this.showQuestion].question_type_id != '24' ? this.totalAns[this.showQuestion] : this.totalAns[this.showQuestion].subQuestions[0];
        if (this.serviceNeededOrNot(particularObjectValue) && !this.totalAns[this.showQuestion].markedAsReview) {
            const answerValidation = this.checkCorrectAnswerOrNot(particularObjectValue, 'singleQuestion');
            if (answerValidation == 'true' || answerValidation == 'false') {
                let checkAllQnsCorrectedOrNot = true;
                this.totalAns.every((items, index) => {
                    const particularObjectLoopValue = items.question_type_id != '24' ? items : items.subQuestions[0];
                    if ((particularObjectLoopValue.is_correct == '' || particularObjectLoopValue.is_correct == 'partially-completed') && (currentIndex != index)) {
                        checkAllQnsCorrectedOrNot = false;
                        return false;
                    }
                    return true;
                });
                await setTimeout(() => {
                    checkAllQnsCorrectedOrNot ? this.submitPopup() : this.saveAnswerForFewType(this.showQuestion, 'nextWithAutoGrade');
                }, 0);
            }
            else {
                this.saveAnswerForFewType(this.showQuestion, 'nextWithAutoGrade');
            }
        }
        else if (this.checkAutoGradeQns == '0' || this.checkAutoGradeQns == '1' || this.totalAns[this.showQuestion].markedAsReview) {
            this.updateForNonAutoGradedQns(particularObjectValue);
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
    checkWhetherSaveIsNeeded(data, index, calledFrom) {
        if (this.needSaveForThisQns) {
            this.saveAnswerForFewType(this.selectedIndexForSameQns, 'qnsNumber', index);
        }
        else {
            this.needSaveForThisQns = this.totalAns[this.showQuestion]?.question_type_id == 10 || this.totalAns[this.showQuestion].question_type_id == '20' || this.totalAns[this.showQuestion].question_type_id == '55' ||
                this.totalAns[this.showQuestion].question_type_id == '40' || this.totalAns[this.showQuestion].question_type_id == '41' ||
                (this.totalAns[this.showQuestion].question_type_id == '24' && this.totalAns[this.showQuestion].subQuestions[0]?.question_type_id == '10');
            this.selectedIndexForSameQns = this.needSaveForThisQns ? this.showQuestion : 0;
            this.selectedQuestionList(data, index, calledFrom);
        }
    }
    saveAnswerForFewType(questionNumber, calledFrom = '', index = 0) {
        if (this.totalAns[questionNumber].question_type_id == '40' || this.totalAns[questionNumber].question_type_id == '41') {
            if (this.totalAns[questionNumber].given_answer[0].isSelected != '' && this.totalAns[questionNumber].given_answer[0].isSelected && (this.graphEdited || calledFrom == 'save')) {
                this.saveGraph(this.totalAns[questionNumber].given_answer[0].isSelected, this.totalAns[questionNumber].editor_key, this.totalAns[questionNumber]);
            }
            this.totalAns[questionNumber].given_answer[0].isSelected = '';
        }
        else if (['20'].indexOf(this.totalAns[questionNumber].question_type_id) > -1) {
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
                this.totalAns[index].question_type_id == '40' || this.totalAns[index].question_type_id == '41' || this.totalAns[index].question_type_id == '55' ||
                (this.totalAns[index].question_type_id == '24' && this.totalAns[index].subQuestions[0]?.question_type_id == '10');
            this.selectedIndexForSameQns = this.needSaveForThisQns ? index : 0;
            this.selectedQuestionList(this.totalAns[index], index);
        }
        else if (calledFrom == 'nextWithAutoGrade') {
            const particularObjectValue = this.totalAns[this.showQuestion].question_type_id != '24' ? this.totalAns[this.showQuestion] : this.totalAns[this.showQuestion].subQuestions[0];
            this.pauseTimer();
            particularObjectValue.no_of_attempt = parseInt(particularObjectValue.no_of_attempt) + 1;
            particularObjectValue.is_correct = this.checkCorrectAnswerOrNot(particularObjectValue, 'singleQuestion');
            console.log(particularObjectValue.is_correct, 'particularObjectValue.is_correct');
            particularObjectValue.time_taken = this.timeTaken;
            console.log(this.totalAns, 'totalAns');
            this.saveAnswer('2', 'noExit', true, particularObjectValue.is_correct == 'true' ? 'next' : '');
        }
        else if (calledFrom == 'nextWithNonAutoGraded') {
            const particularObjectValue = this.totalAns[this.showQuestion].question_type_id != '24' ? this.totalAns[this.showQuestion] : this.totalAns[this.showQuestion].subQuestions[0];
            this.pauseTimer();
            particularObjectValue.time_taken = this.timeTaken;
            this.afterSaveFunction(this.showQuestion);
            // this.saveAnswer('2', 'noExit', true, 'nextWithNonAutoGraded');
        }
    }
    // nextQuestion() {
    //
    //     if (this.checkAutoGradeQns == '2' && this.serviceNeededOrNot(this.totalAns[this.showQuestion])) {
    //         document.getElementById('yourTarget').scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'start',
    //             inline: 'start'
    //         });
    //         this.saveAnswer('2', 'noExit', true, 'next');
    //     } else {
    //         const questionNumber = this.showQuestion;
    //         if (this.totalAns[questionNumber + 1]) {
    //             if (this.totalAns[questionNumber]?.question_type_id == '10' || this.totalAns[questionNumber].question_type_id == '20' ||
    //                 this.totalAns[questionNumber].question_type_id == '40' || this.totalAns[questionNumber].question_type_id == '41' || this.totalAns[questionNumber].question_type_id == '55' ||
    //                 (this.totalAns[questionNumber].question_type_id == '24' && this.totalAns[questionNumber].subQuestions[0]?.question_type_id == '10') ) {
    //                 this.saveAnswerForFewType(questionNumber);
    //             } else {
    //                 if (this.checkAutoGradeQns == '0' || this.checkAutoGradeQns == '1') {
    //                     document.getElementById('yourTarget').scrollIntoView({
    //                         behavior: 'smooth',
    //                         block: 'start',
    //                         inline: 'start'
    //                     });
    //                     this.saveAnswer('2', 'noExit', false, 'next');
    //                 } else {
    //                     this.selectedQuestionList(this.totalAns[questionNumber + 1], questionNumber + 1);
    //                 }
    //             }
    //         } else {
    //             let checkWhetherOtherQuestionCorrectedOrNot = true;
    //             let particularIndex = 0;
    //             this.totalAns.every((items, index) => {
    //                 particularIndex = index;
    //                 const particularObjectValue = items.question_type_id != '24' ? items : items.subQuestions[0];
    //                 if (particularObjectValue.is_correct == '' || particularObjectValue.is_correct == 'partially-completed') {
    //                     checkWhetherOtherQuestionCorrectedOrNot = false;
    //                     console.log(particularIndex, 'insideEvery');
    //                     return false;
    //                 }
    //                 return true;
    //             });
    //
    //             console.log(particularIndex, 'outSideEvey');
    //             if (!checkWhetherOtherQuestionCorrectedOrNot) {
    //                 this.selectedQuestionList(this.totalAns[particularIndex], particularIndex);
    //             } else {
    //                 this.guard = false;
    //                 this.route.navigate(['/studentlogin/' + this.contentType.toLowerCase()]);
    //             }
    //         }
    //     }
    // }
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
            else if (['20', '55'].indexOf(data.question_type_id) > -1) {
                answerEntered = !data.given_answer.every((items) => {
                    return items.isSelected1 == '';
                });
            }
            else if (data.question_type_id == '40' || data.question_type_id == '41') {
                answerEntered = data.answer_valueEmitted;
            }
            data.is_correct = answerEntered && !this.totalAns[this.showQuestion].markedAsReview ? 'manual' : '';
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
        this.saveAnswerForFewType(this.showQuestion, 'nextWithNonAutoGraded');
        // await setTimeout(() => {
        //     console.log(checkAllQnsCorrectedOrNot, 'checkAllQnsCorrectedOrNot');
        //     checkAllQnsCorrectedOrNot ? this.submitPopup() : this.saveAnswerForFewType(this.showQuestion, 'nextWithNonAutoGraded');
        // }, 500);
    }
    countClicked(event) {
        event.stopPropagation();
    }
    scoreRelease() {
        console.log(this.questionData, 'questionData');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_id: [this.auth.getUserId()],
            content_id: this.questionData.content_id,
            class_id: this.getData.class_id,
            release_score: '1'
        };
        this.teacher.releaseScore(data).subscribe((successData) => {
            this.releaseScoreSuccess(successData);
        }, (error) => {
            console.log(error);
        });
    }
    releaseScoreSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(successData, 'release success');
        }
    }
    saveAnnotation() {
        const data = {
            platform: 'web',
            student_id: this.auth.getUserId(),
            annotation: this.areaInfo,
            content_id: this.getData.content_id,
            class_id: this.getData.class_id,
        };
        this.creator.saveAnnotation(data).subscribe((successData) => {
            this.saveAnnotationSuccess(successData);
        }, (error) => {
            this.saveAnnotationFailure(error);
        });
    }
    saveAnnotationSuccess(successData) {
    }
    saveAnnotationFailure(error) {
        console.log(error);
    }
    setting() {
        const data = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.common.settingsDetails(data).subscribe((successData) => {
            this.listSuccess(successData);
        }, (error) => {
            console.log(error);
        });
    }
    listSuccess(successData) {
        if (successData.IsSuccess) {
            this.settingList = successData.ResponseObject;
            this.settingList.forEach((val) => {
                if (val.name == 'answer_key_upload' && val.value == '1') {
                    this.showUploadFile = true;
                }
                else if (val.name == 'answer_key_upload' && val.value == '0') {
                    this.showUploadFile = false;
                }
                if (val.name == 'file_size_restriction') {
                    this.uploadFileSize = val.value;
                }
            });
        }
    }
    encodePdfFileAsURL(event) {
        console.log('service called 2');
        const images = [];
        console.log(event.target.files, 'event.target.files');
        const imageLength = event.target.files.length;
        for (let i = 0; i < event.target.files.length; i++) {
            const getUrlEdu = '';
            const pdfDetails = event.target.files[i];
            const reader = new FileReader();
            reader.onload = (event) => {
                const uploadTypeList = event.target.result.split(',');
                images.push({
                    image: uploadTypeList[1],
                    size: pdfDetails.size,
                    type: pdfDetails.type,
                    name: pdfDetails.name
                });
                const pic = pdfDetails.type.split('/');
                if (pic[1] == 'pdf') {
                    if (imageLength == images.length) {
                        if (this.uploadFileSize != 0) {
                            const bytes = images[0].size;
                            const mb = bytes / (1024 * 1024);
                            if (mb <= this.uploadFileSize) {
                                this.onUploadKYCFinishedpdf(images);
                            }
                            else {
                                const limit = 'Upload PDF exceeds limit' + ' (' + this.uploadFileSize.toString() + 'MB' + ')';
                                this.toastr.info(limit);
                            }
                        }
                        else {
                            this.onUploadKYCFinishedpdf(images);
                        }
                    }
                }
                else {
                    this.toastr.error('PDF are the required file format');
                }
            };
            reader.readAsDataURL(event.target.files[i]);
        }
    }
    onUploadKYCFinishedpdf(getUrlEdu) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            image_path: getUrlEdu,
            uploadtype: 'offlineanswer'
        };
        this.creator.fileUpload(data).subscribe((successData) => {
            this.pdfuploadSuccess(successData);
        }, (error) => {
            this.pdfuploadFailure(error);
        });
    }
    pdfuploadSuccess(successData) {
        if (successData.IsSuccess) {
            this.answerPdf = [...this.answerPdf, ...successData.ResponseObject.imagepath];
        }
    }
    pdfuploadFailure(error) {
        console.log(error);
    }
    close() {
        this.timeIntervalRunningForTest = false;
        this.disableButton = false;
        this.modalRef?.close();
    }
    closeGraph(id, index) {
        this.totalAns[id].section[index].student_roughdata = this.totalAns[id].section[index].student_roughdata1;
        this.modalRef1.close();
    }
    backbutton() {
        if (this.contentType == 'Assessment') {
            this.route.navigate(['/studentlogin/assessment']);
        }
        else {
            this.route.navigate(['/studentlogin/assignment']);
        }
    }
    onSave() {
        this.modalRef.close();
    }
    otherlink() {
        this.modalRef = this.modalService.open(this.link);
    }
    openWorkArea(item, i, j) {
        if (item != '') {
            this.workAnnotate = [...item.workarea];
        }
        this.workAreaId = i;
        this.workAreaIndex = j;
        document.body.style.overflow = 'hidden !important';
        this.cdr.detectChanges();
        console.log(document.body.style.overflow, 'overflow');
        this.modalRef = this.modalService.open(this.workArea, { size: 'xl', backdrop: 'static' });
    }
    getWorkAreaAnnotation(event) {
        console.log(event, 'workAnnotateVlaue');
        this.workAnnotate = event;
        console.log(this.workAnnotate, 'work annotate');
    }
    closeWorkArea() {
        let i = this.workAreaId;
        let j = this.workAreaIndex;
        if (this.totalAns[i].section[j].workarea !== this.workAnnotate) {
            this.totalAns[i].section[j].workarea = [...this.workAnnotate];
            this.totalAns[i].section[j].answer_attended = '1';
        }
        this.close();
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
    selectedQuestionList(data, index, calledFrom) {
        console.log(data, 'datas');
        this.pauseTimer();
        this.timeTaken = 0;
        this.correctAnswer = true;
        this.tryAgainButtonEnabled = false;
        this.showQuestion = index;
        const particularObjectValue = data.question_type_id != '24' ? data : data.subQuestions[0];
        if (this.getData.student_content_status == '1' || this.getData.student_content_status == '2') {
            if (particularObjectValue.time_taken == '0') {
                this.timeTaken = 0;
                this.startTimer();
            }
            else {
                this.timeTaken = particularObjectValue.time_taken;
                if (this.checkAutoGradeQns != '2') {
                    this.startTimer();
                }
                else {
                    const checkCondition = this.checkQuestionId(this.totalAns[this.showQuestion])?.is_correct == '' && !this.tryAgainButtonEnabled;
                    if (checkCondition) {
                        this.startTimer();
                    }
                }
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
        this.clickEvent();
        if (calledFrom != 'questionList') {
            document.getElementById('yourTarget').scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'start'
            });
        }
        console.log(this.showQuestion, 'showQuestion');
    }
    getFeedBackList() {
        this.auth.setSessionData('sse_loader', 'true');
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_content_id: this.getData.student_content_id,
            school_id: this.auth.getSessionData('school_id'),
        };
        this.auth.postService(payload, urls.getOverallFeedback).subscribe((successData) => {
            if (successData.IsSuccess) {
                this.auth.setSessionData('sse_loader', 'false');
                this.feedbackListData = successData.IsSuccess ? successData.ResponseObject : [];
            }
        });
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
    getFeedbackValue(data, calledType = '') {
        if (data.given_answer[0]?.isSelected.trimStart() != '') {
            if ((data.given_answer[0]?.isSelected.trim().split(/\s+/).length >= this.minimumWordValidation) || this.minimumWordValidation == 0) {
                this.overallPauseTimer();
                this.pauseTimer();
                if (calledType != '') {
                    this.modalRef ? this.modalRef?.close() : '';
                    this.popUpMessage = 'Please be patient as we provide the final score and feedback.';
                    this.modalRef = this.modalService.open(this.feedbackStatus, { backdrop: 'static' });
                    this.totalAns[0].earned_points = this.previousFeedBack[0]?.student_score;
                    this.totalAns[0].points = this.previousFeedBack[0]?.total_score;
                    this.totalAns[0].time_taken = this.overallTimeTaken;
                    this.buttonClicked = '';
                    this.saveAnswer('4', 'exit', false);
                }
                else {
                    this.popUpMessage = calledType == '' ? 'Nice work. Please wait while we provide a feedback' :
                        'Please wait while we provide a final feedback and score.';
                    this.modalRef = this.modalService.open(this.feedbackStatus, { backdrop: 'static' });
                    // this.convertedText = '';
                    const payload = {
                        platform: 'web',
                        role_id: this.auth.getRoleId(),
                        user_id: this.auth.getUserId(),
                        school_id: this.auth.getSessionData('school_id'),
                        student_id: this.auth.getUserId(),
                        student_answer: data.given_answer[0]?.isSelected,
                        question_id: data.question_id,
                        question: this.stripHtmlTags(data.question),
                        student_content_id: this.getData.student_content_id,
                        time_taken: this.timeTaken,
                        finalSubmit: '0'
                        // finalSubmit: calledType == 'saveAndExit' ? '1' : '0'
                    };
                    this.student.getOpenAiFeedback(payload).subscribe((successData) => {
                        console.log(successData, 'successData');
                        if (successData.IsSuccess) {
                            this.selectedPreviousStudentAnswer = successData.ResponseObject[0];
                            this.totalAns[0].earned_points = successData.ResponseObject[0]?.student_score;
                            this.totalAns[0].points = successData.ResponseObject[0]?.total_score;
                            this.totalAns[0].time_taken = this.overallTimeTaken;
                            this.reviseSelected = '';
                            if (this.selectedPreviousStudentAnswer.version != 'V1') {
                                this.convertedText = successData.ResponseObject[0]?.feedback;
                                // this.updateFeedback();
                            }
                            else {
                                this.convertedText = this.convertMarkdownToHtml(successData.ResponseObject[0]?.feedback);
                                // this.scrollToFeedBack();
                            }
                            this.feedbackServiceCalled = true;
                            this.getFeedbackCount(data);
                        }
                        else {
                            // this.convertedText = '';
                            this.disableButton = false;
                            this.overAllStartTimer();
                            // calledType == '' ? this.modalRef.close() : this.commondata.showLoader(false);
                            this.modalRef?.close();
                            this.toastr.error(successData.ErrorObject);
                        }
                    }, (error) => {
                        this.overAllStartTimer();
                        console.error(error, 'error_feedbackValue');
                        // this.convertedText = '';
                        this.disableButton = false;
                        // calledType == '' ? this.modalRef.close() : this.commondata.showLoader(false);
                        this.modalRef.close();
                        this.toastr.error('Server Error, Please Contact admin');
                    });
                }
                // calledType != '' ? this.modalRef.close() : '';
            }
            else {
                this.toastr.error('Answer should be at least ' + this.minimumWordValidation + ' words.');
            }
        }
        else {
            this.toastr.error('Answer Should not be empty');
        }
    }
    getValue(value) {
        if (!value)
            return '';
        const parts = value.split('_');
        const formatted = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
        return formatted;
    }
    updateFeedback(calledFrom = '') {
        this.feedbackList = this.getUpdatedConvertedFeedback(this.convertedText);
        console.log(this.feedbackList, 'feedback');
        this.totalScore = this.feedbackList.length * this.totalIndivialScore;
        this.score = 0;
        setTimeout(() => {
            this.feedbackList.forEach(feedback => this.score = this.score + feedback[1]?.score);
        }, 500);
        this.feedbackList.forEach(feedback => {
            feedback.collaspsed = true;
            feedback[1]?.feedback.forEach(items => items.collaspsed = false);
        });
        // calledFrom == '' ? this.scrollToFeedBack() : '';
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
    undoRevise(value) {
        this.totalAns[0].given_answer[0].isSelected = value.student_answer;
        this.overallPauseTimer();
        this.feedbackSelected(value);
    }
    feedbackSelected(value, calledFrom = '') {
        const selectedValue = value;
        if (value != '' && value != 'current') {
            this.selectedFeedBackIndex = this.previousFeedBack.length - selectedValue.index;
            this.selectedVersion = value.index;
            this.selectedPreviousStudentAnswer = selectedValue;
            if (this.selectedPreviousStudentAnswer.version != 'V1') {
                this.convertedText = selectedValue?.feedback;
                this.updateFeedback(calledFrom);
            }
            else {
                this.convertedText = this.convertMarkdownToHtml(selectedValue.feedback);
            }
            this.reviseSelected = '';
            this.overallPauseTimer();
            this.pauseTimer();
        }
        else if (value == 'current') {
            // this.selectedFeedBackIndex = '';
            // this.convertedText = '';
            this.selectedVersion = 0;
            this.reviseSelected = 'current';
            document.getElementById('essay_textarea').scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'start'
            });
            this.selectedFeedBackIndex = this.previousFeedBack.length - 1;
            this.selectedPreviousStudentAnswer = this.previousFeedBack[0];
            if (this.selectedPreviousStudentAnswer.version != 'V1') {
                this.convertedText = this.previousFeedBack[0]?.feedback;
                this.updateFeedback(calledFrom);
            }
            else {
                this.convertedText = this.convertMarkdownToHtml(this.previousFeedBack[0]?.feedback);
            }
            this.overAllStartTimer();
            this.startTimer();
        }
        this.feedbackServiceCalled = false;
    }
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
        console.log(previousSeriesData, 'previousSeriesData');
        console.log(seriesData, 'seriesData');
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
    getFeedbackCount(data, calledFrom = '') {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            question_id: data.question_id,
            student_content_id: this.getData.student_content_id,
        };
        this.student.getOpenAiFeedbackCount(payload).subscribe((successData) => {
            this.getFeedbackCountSuccess(successData, calledFrom);
        }, (error) => console.error(error, 'error_APICount'));
    }
    getFeedbackCountSuccess(successData, calledFrom) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            successData.ResponseObject.forEach((items, index) => {
                items.index = index;
                items.version_name = 'Version' + ' ' + (successData.ResponseObject.length - index);
            });
            this.previousFeedBack = successData.ResponseObject;
            this.totalFeedBackCount = successData.count ?? 0;
            // this.selectedFeedBackIndex = calledFrom != '' ? '' : successData.count;
            this.selectedFeedBackIndex = successData.count;
            console.log(this.selectedFeedBackIndex, 'selectedFeedBackIndex_count');
            if (calledFrom != '' && successData.ResponseObject.length != 0) {
                if (['1', '2'].includes(this.getData.student_content_status)) {
                    this.overallElapsedTime = this.getElapsedOverAllTime(this.overallTimeTaken);
                }
                this.feedbackSelected(successData.ResponseObject[0], calledFrom);
            }
            else if (calledFrom == '' && this.selectedPreviousStudentAnswer.version != 'V1') {
                this.selectedPreviousStudentAnswer.index = 0;
                this.toastr.success('New Feedback updated');
                this.modalRef?.close();
                this.updateFeedback();
            }
            else if (calledFrom != '' && successData.ResponseObject.length == 0) {
                this.overAllStartTimer();
            }
            console.log(this.previousFeedBack, 'previous');
            if (calledFrom == '') {
                this.getFeedBackList();
            }
        }
    }
    stripHtmlTags(input) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = input;
        return tempDiv.textContent || tempDiv.innerText || '';
    }
    toggleCalculator() {
        this.showCalculator = !this.showCalculator;
        setTimeout(() => {
            if (this.showCalculator) {
                const elt = document.getElementById('calculator');
                if (elt) {
                    this.calculator = Desmos.GraphingCalculator(elt);
                    this.calculator.setExpression({ id: 'graph1', latex: '' });
                }
            }
        }, 0);
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
        this.scrollContent.nativeElement.scrollTo({
            left: op(this.scrollContent.nativeElement.scrollLeft, distance),
            behavior: 'smooth'
        });
    }
    getTestDetails() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.getData.content_id,
            student_content_id: this.getData.student_content_id,
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
            this.testFullData = successData.ResponseObject[0];
            this.testContentDetail = successData.ResponseObject[0].contents;
            this.testContentData = this.testContentDetail[0]?.content_id;
            this.questionList(this.testContentDetail[0]);
        }
    }
    static { this.ɵfac = function AnsweringComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AnsweringComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.StudentService), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i4.DomSanitizer), i0.ɵɵdirectiveInject(i5.NgbModal), i0.ɵɵdirectiveInject(i6.Router), i0.ɵɵdirectiveInject(i7.CreatorService), i0.ɵɵdirectiveInject(i8.NavService), i0.ɵɵdirectiveInject(i9.ToastrService), i0.ɵɵdirectiveInject(i10.TeacherService), i0.ɵɵdirectiveInject(i11.CommonService), i0.ɵɵdirectiveInject(i12.ContentdetailService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i13.EnvironmentService), i0.ɵɵdirectiveInject(i14.CommonDataService), i0.ɵɵdirectiveInject(i15.NewsubjectService), i0.ɵɵdirectiveInject(i6.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AnsweringComponent, selectors: [["app-answering"]], viewQuery: function AnsweringComponent_Query(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵviewQuery(_c14, 7);
            i0.ɵɵviewQuery(_c15, 5);
            i0.ɵɵviewQuery(_c16, 5);
            i0.ɵɵviewQuery(_c17, 5);
            i0.ɵɵviewQuery(_c18, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.submitAlert = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.reviewAlert = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.durationWarning = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.testTimerStatus = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.answerGraph = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.link = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.workArea = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.scrollContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.rightArrow = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.leftArrow = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.feedback = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.feedbackStatus = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.jumpWrapper = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.qnsWrapper = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.chartContainer = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.showExpand = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.header = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.footer = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentCard = _t.first);
        } }, hostBindings: function AnsweringComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function AnsweringComponent_click_HostBindingHandler($event) { return ctx.onClickOutside($event); }, false, i0.ɵɵresolveDocument)("resize", function AnsweringComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, i0.ɵɵresolveWindow);
        } }, features: [i0.ɵɵProvidersFeature([{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => AnsweringComponent),
                    multi: true,
                }])], decls: 52, vars: 24, consts: [["submitAlert", ""], ["reviewAlert", ""], ["answerGraph", ""], ["content", ""], ["showExpand", ""], ["feedback", ""], ["workArea", ""], ["feedbackStatus", ""], ["durationWarning", ""], ["testTimerStatus", ""], ["questionButton", ""], ["feedback_data", ""], ["qnsWrapper", ""], ["hiddenfileinput", ""], ["footer", ""], ["jumpWrapper", ""], ["answer", ""], ["id", "pre-loader", 4, "ngIf"], ["id", "yourTarget", 1, "container-fluid", 2, "padding", "10px 0 !important"], [1, "row"], [1, "col-12"], [1, "card"], [1, "row", "align-items-center"], [1, "row", "pr-3", "my-1", "d-flex", "align-items-center"], [1, "mb-1", "font-weight-bold"], ["style", "margin-top: 12px", "class", "col-12 px-0 d-flex", 4, "ngIf"], ["class", "d-flex align-items-center col-4 p-0", 4, "ngIf"], [3, "class", "click", 4, "ngIf"], [1, "row", "mx-2"], ["ngbDropdown", "", "container", "body"], ["style", "font-size: 24px !important;", "id", "gfg2", "ngbDropdownToggle", "", "class", "fa fa-upload color-primary icon d-inline-flex", "aria-hidden", "true", "title", "Upload PDF", 3, "hidden", 4, "ngIf"], [3, "download", "href", 4, "ngIf"], ["title", "Teacher Feedback", "class", "fa fa-commenting-o icon color-primary", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["style", "border: 1px solid #8F008A; border-radius: 4px; padding: 0; width: 34px; height: 34px; margin-right: 12px", "alt", "Resource", "src", "assets/images/mob-side-icon/books.png", "title", "Resources", 3, "click", 4, "ngIf"], ["title", "Save & Exit", "class", "fa fa-sign-out color-primary icon", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["title", "Save", "class", "fa fa-floppy-o color-primary icon", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "content-card row", 3, "ngStyle", 4, "ngIf"], ["id", "pre-loader"], ["alt", "", "src", "assets/images/pre-loader/loader-01.svg"], [1, "col-12", "px-0", "d-flex", 2, "margin-top", "12px"], [1, "position-relative"], ["class", "px-2 py-1 btn cancel description_button", 3, "click", 4, "ngIf"], ["class", "description_box", 4, "ngIf"], [3, "class", 4, "ngIf"], ["class", "position-relative ml-2", 4, "ngIf"], [1, "px-2", "py-1", "btn", "cancel", "description_button", 3, "click"], [3, "icon"], [1, "description_box"], [1, "box-title", "d-flex", "justify-content-between"], [1, "fa", "fa-close", "cursor", 3, "click"], ["class", "col-12 mb-0 pl-0 editor_bullet", 4, "ngIf"], [1, "col-12", "mb-0", "pl-0", "editor_bullet"], [3, "innerHTML"], [1, "align-items-center", "px-2", "py-1", "btn", "cancel", "description_button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-calculator", "ml-2"], ["class", "calculator_box", "cdkDrag", "", 4, "ngIf"], ["cdkDrag", "", 1, "calculator_box"], ["cdkDragHandle", "", 1, "box-title", "d-flex", "justify-content-between", "drag-handle"], [1, "col-11", "px-0"], [2, "font-size", "12px", "font-weight", "500"], [1, "col-1", "px-0", "align-self-center", "text-right", 3, "click"], [1, "fa", "fa-close", "cursor"], [1, "col-12", "mb-0", "pl-0"], ["id", "calculator", 2, "width", "100%", "height", "400px"], [1, "position-relative", "ml-2"], ["aria-hidden", "true", 1, "fa", "fa-file-text", "ml-2"], ["class", "calculator_box", 4, "ngIf"], [1, "calculator_box"], [2, "width", "100%", "height", "400px"], [2, "display", "block", "height", "100%", 3, "src", "render-text", "original-size", "show-all", "fit-to-page", "autoresize"], [1, "d-flex", "align-items-center", "col-4", "p-0"], ["bindLabel", "name", "bindValue", "content_id", "placeholder", "Content List", 1, "m-0", "w-100", 3, "change", "ngModelChange", "items", "ngModel", "clearable"], ["ng-option-tmp", ""], [3, "title"], [3, "click"], ["class", "w-auto text-center", 4, "ngIf"], ["class", "w-auto mx-2", "style", "margin-top: 2px", 4, "ngIf"], ["class", "align-content-center", 4, "ngIf"], [1, "w-auto", "text-center"], [1, "mb-0", 2, "font-size", "24px"], [1, "color-primary", "mb-0", 2, "font-size", "12px"], [1, "w-auto", "mx-2", 2, "margin-top", "2px"], [1, "mb-0", "font-weight-bold"], [1, "align-content-center"], ["title", "Hide Timer", "class", "cursor fa fa-eye ml-2 color-primary", 4, "ngIf"], ["title", "Show Timer", "class", "cursor fa fa-eye-slash color-primary", 4, "ngIf"], ["title", "Hide Timer", 1, "cursor", "fa", "fa-eye", "ml-2", "color-primary"], ["title", "Show Timer", 1, "cursor", "fa", "fa-eye-slash", "color-primary"], ["id", "gfg2", "ngbDropdownToggle", "", "aria-hidden", "true", "title", "Upload PDF", 1, "fa", "fa-upload", "color-primary", "icon", "d-inline-flex", 2, "font-size", "24px !important", 3, "hidden"], ["class", "ml-3", 4, "ngIf"], ["ngbDropdownMenu", "gfg2"], ["class", "col-md-12 text-center", 4, "ngIf"], ["class", "col-md-12 px-0 justify-content-between align-items-center d-flex", 4, "ngFor", "ngForOf"], ["class", "col-md-12 d-flex justify-content-center mt-2", 4, "ngIf"], [1, "ml-3"], [1, "upload-count"], [1, "col-md-12", "text-center"], [1, "px-2", "mb-0", "color-primary"], [1, "col-md-12", "px-0", "justify-content-between", "align-items-center", "d-flex"], ["ngbDropdownItem", "", 1, "px-2", "mb-0", "color-primary"], ["aria-hidden", "true", 1, "fa", "fa-close", "px-3", 2, "cursor", "pointer", 3, "click", "hidden"], [1, "col-md-12", "d-flex", "justify-content-center", "mt-2"], ["accept", ".pdf", "multiple", "", "type", "file", 2, "display", "none", 3, "change"], ["aria-describedby", "inputGroupFileAddon01", "type", "file", 1, "btn-sm", "btn-outline-primary", "mb-2", "ml-2", "pull-right", "button1", 3, "click", "hidden"], [3, "download", "href"], ["title", "Download PDF", "aria-hidden", "true", 1, "fa", "fa-download", "color-primary", "icon"], ["title", "Teacher Feedback", "aria-hidden", "true", 1, "fa", "fa-commenting-o", "icon", "color-primary", 3, "click"], ["alt", "Resource", "src", "assets/images/mob-side-icon/books.png", "title", "Resources", 2, "border", "1px solid #8F008A", "border-radius", "4px", "padding", "0", "width", "34px", "height", "34px", "margin-right", "12px", 3, "click"], ["title", "Save & Exit", "aria-hidden", "true", 1, "fa", "fa-sign-out", "color-primary", "icon", 3, "click"], ["title", "Save", "aria-hidden", "true", 1, "fa", "fa-floppy-o", "color-primary", "icon", 3, "click"], ["id", "custom-pdf-loader", "style", "height: 100vh;", 4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], [3, "getAnnotate", "userType", "pageVariable", "showPageNo", "pdfPath", "expandPdf", "getDragQues", "toolHide", "annotate", "deleteAnnotation", "currentPageNo", "expandBoolean", 4, "ngIf"], [3, "expandPdf", "overallData", "expandBoolean", 4, "ngIf"], ["id", "custom-pdf-loader", 2, "height", "100vh"], [1, "col-md-12"], [3, "pdfPath"], [3, "annotate", "deleteAnnotation", "currentPageNo", "expandBoolean", "getAnnotate", "userType", "pageVariable", "showPageNo", "pdfPath", "expandPdf", "getDragQues", "toolHide"], [3, "expandBoolean", "expandPdf", "overallData"], ["class", "col-md-12 mb-2", 4, "ngIf"], ["class", "col-12 px-0 view-question", 4, "ngIf"], [1, "col-md-12", "mt-3", "card", "p-4"], ["cols", "30", "placeholder", "Overall Feedback", "rows", "5", 1, "form-control", 3, "ngModelChange", "ngModel", "readOnly"], ["alt", "", "src", "assets/images/pdf-icons/arrowRight.png", "title", "Show pdf", 3, "class", "click", 4, "ngIf"], ["alt", "", "src", "assets/images/pdf-icons/arrowLeft.png", "title", "Hide pdf", 3, "class", "click", 4, "ngIf"], ["alt", "", "src", "assets/images/pdf-icons/arrowRight.png", "title", "Show pdf", 3, "click"], ["alt", "", "src", "assets/images/pdf-icons/arrowLeft.png", "title", "Hide pdf", 3, "click"], [3, "ngModel", "class", "change", "ngModelChange", 4, "ngIf"], ["class", "col-md-4 px-0", 4, "ngIf"], [3, "change", "ngModelChange", "ngModel"], ["value", "all"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "col-md-4", "px-0"], [1, "col-md-12", "px-0", "d-flex", "justify-content-end", "align-items-center"], ["type", "checkbox", 3, "change", "checked"], [1, "ml-2", "mb-0"], [1, "col-md-12", "mb-2"], [1, "col-md-12", "px-0", "d-flex", "justify-content-end", 2, "color", "grey", "font-weight", "bold", "align-self", "end", 3, "hidden"], [1, "col-12", "px-0", "view-question"], ["id", "scrollinnnersection", "infiniteScroll", "", 3, "scrolled", "mouseover", "fromRoot", "infiniteScrollContainer", "infiniteScrollDistance", "infiniteScrollThrottle"], ["class", "", 3, "hidden", "ngStyle", 4, "ngFor", "ngForOf"], [1, "", 3, "hidden", "ngStyle"], ["class", "mb-3", 3, "id", 4, "ngFor", "ngForOf"], ["type", "text", 1, "input-custom-modal", "div-disable", 3, "value"], [1, "mb-3", 3, "id"], [1, "row", "d-flex", "justify-content-between"], [1, "col-md-2", "d-flex"], [1, "btn", "btn-primary"], ["class", "fa fa-2x fa-check-circle color-green align-self-center ml-2", 4, "ngIf"], ["class", "fa fa-2x fa-times-circle color-red align-self-center ml-2", 4, "ngIf"], ["class", "col-md-6", 4, "ngIf"], [1, "mt-4"], ["class", "mb-0 overflow-auto div-disable", 3, "innerHTML", "id", 4, "ngIf"], [4, "ngIf"], ["class", "d-flex", 3, "ngClass", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["class", "col-md-12 mt-4 px-0", 4, "ngIf"], ["class", "col-md-12 mt-2 px-0", 4, "ngIf"], ["class", "row mt-3 d-flex", 4, "ngIf"], ["class", "row mt-3 mb-3", 4, "ngIf"], [1, "fa", "fa-2x", "fa-check-circle", "color-green", "align-self-center", "ml-2"], [1, "fa", "fa-2x", "fa-times-circle", "color-red", "align-self-center", "ml-2"], [1, "col-md-6"], [1, "btn", "btn-outline-primary", "pull-right", 3, "click"], [1, "mb-0", "overflow-auto", "div-disable", 3, "innerHTML", "id"], [1, "row", "mb-2", 3, "ngClass"], ["class", "multichoice-option1", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "multichoice-option1", 3, "click", "ngClass"], [1, "d-flex", 3, "ngClass"], [1, "d-flex", "align-items-center", "px-3", "py-2", 3, "ngClass"], ["type", "radio", "value", "true", 1, "radio-size", "cursor", "form-control", "mr-2", 3, "click", "checked", "id", "name"], [1, "mb-0", "cursor", 3, "for"], [1, "d-flex", "align-items-center", "ml-2", "px-3", "py-2", 3, "ngClass"], ["type", "radio", "value", "false", 1, "radio-size", "cursor", "form-control", "mr-2", 3, "click", "checked", "id", "name"], [3, "ngClass"], [3, "ngClass", "class", "click", 4, "ngFor", "ngForOf"], [3, "click", "ngClass"], [1, "col-md-12", "mt-4", "px-0"], ["placeholder", "Enter answer here", "rows", "2", 3, "input", "readOnly", "value"], ["cols", "30", "rows", "8", 1, "form-control", 3, "input", "readOnly", "value"], [1, "col-md-12", "mt-2", "px-0"], ["class", "mt-2", 3, "editorPatchValue", "height", "id", "readonly", "showDropBtn", "showInputBtn", "emitEditorValue", 4, "ngIf"], [1, "d-flex", "justify-content-start"], ["class", "btn-sm mb-1 btn-outline-primary mr-2", 3, "disabled", "click", 4, "ngIf"], ["class", "d-flex mt-2 ml-2 justify-content-start", 4, "ngIf"], [1, "mt-2", 3, "emitEditorValue", "editorPatchValue", "height", "id", "readonly", "showDropBtn", "showInputBtn"], [1, "btn-sm", "mb-1", "btn-outline-primary", "mr-2", 3, "click", "disabled"], [1, "d-flex", "mt-2", "ml-2", "justify-content-start"], [1, "flex-column", 2, "overflow-y", "auto"], [2, "margin-bottom", "0"], ["class", "", "style", "overflow-y: auto;", 3, "innerHTML", 4, "ngIf"], [1, "", 2, "overflow-y", "auto", 3, "innerHTML"], [4, "ngFor", "ngForOf"], ["rows", "2", 1, "form-control", "mb-2", 3, "input", "readOnly", "value", "placeholder"], [1, "row", "mt-3", "d-flex"], ["aria-expanded", "false", "data-toggle", "collapse", 1, "btn-sm", "btn-outline-primary", "mr-2", 3, "disabled"], [1, "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], ["title", "Work Area", 1, "btn-sm", "mb-1", "btn-outline-primary", 3, "click"], ["class", "btn-sm mb-1 btn-outline-primary", "style", "width: 30px;", "title", "Expand Editor", 3, "click", 4, "ngIf"], ["class", "btn-sm mb-1 btn-outline-primary mr-2", "style", "width: 30px;", "title", "Expand Editor", 3, "click", 4, "ngIf"], ["title", "Expand Editor", 1, "btn-sm", "mb-1", "btn-outline-primary", 2, "width", "30px", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-expand"], ["title", "Expand Editor", 1, "btn-sm", "mb-1", "btn-outline-primary", "mr-2", 2, "width", "30px", 3, "click"], [1, "row", "mt-3", "mb-3"], [1, "col-md-12", "collapse", 3, "id"], ["placeholder", "Feedback", "rows", "3", 1, "form-control", 3, "input", "value"], ["class", "col-md-12", 3, "id", 4, "ngIf"], [1, "col-md-12", 3, "id"], [3, "editorPatchValue", "height", "id", "readonly", "showDropBtn", "showInputBtn", "emitEditorValue", 4, "ngIf"], [3, "emitEditorValue", "editorPatchValue", "height", "id", "readonly", "showDropBtn", "showInputBtn"], [1, "content-card", "row", 3, "ngStyle"], [1, "content-card", 3, "ngStyle"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "row mt-3", 4, "ngIf"], ["class", "col-12 px-0", 4, "ngIf"], ["class", "row mt-2", 4, "ngIf"], ["class", "content-card col-6 2", 3, "ngStyle", 4, "ngIf"], ["class", "content-card col-6 1", 3, "ngStyle", 4, "ngIf"], ["class", "col-6 px-0", 4, "ngIf"], [1, "col-6", "px-0"], [1, "card", "p-4", "mb-0", 2, "min-height", "67vh !important"], [1, "card-body"], [1, "row", 3, "ngClass"], ["class", "col-12", 4, "ngIf"], ["class", "col-12 mt-3", 4, "ngIf"], [1, "cfs", 2, "font-size", "14px", "letter-spacing", ".5px", "color", "#313131"], [2, "list-style-type", "disc", "padding-left", "20px"], ["border", "1", "cellspacing", "0", "cellpadding", "10", 2, "border-collapse", "collapse", "font-family", "Arial, sans-serif", "font-size", "14px", "text-align", "center"], [2, "background-color", "#f2f2f2"], [1, "col-12", "mt-3"], ["class", "ml-2 cfs editor_bullet", 4, "ngIf"], [1, "ml-2", "cfs", "editor_bullet"], [1, "card", "p-4"], [1, "col-12", "col-md-12"], [1, "col-12", "d-flex", "align-items-center", "px-0", "justify-content-between", 2, "background", "#dedede9e"], [1, "d-flex"], [1, "button_design", "btn-primary"], ["class", "d-flex align-items-center", 4, "ngIf"], [1, "px-0", "pdf-assign-btn", "d-flex", "align-items-center", "justify-content-end"], [1, "row", "my-0", "mx-2", "justify-content-center", 3, "ngStyle"], ["style", "font-size: 18px", "class", "mb-0", 4, "ngIf"], [1, "mb-0", "font-weight-bold", "mx-1"], [3, "title", "class", "click", 4, "ngIf"], ["class", "col-12 mt-4", 4, "ngIf"], ["class", "cfs mt-4 editor_bullet", 4, "ngIf"], [1, "col-md-12", 3, "ngClass"], ["class", "mt-4 px-3 table-flexible", 3, "ngClass", 4, "ngIf"], ["class", "mt-4", 3, "ngClass", 4, "ngIf"], ["class", "mt-4 px-3 mb-3", 3, "ngClass", 4, "ngIf"], ["class", "mt-4 row", 4, "ngIf"], [3, "class", "ngClass", 4, "ngIf"], ["class", "mt-4 px-3 mb-3", 4, "ngIf"], ["class", "mt-4 mb-4", 4, "ngIf"], ["class", "card w-100 mt-2", "style", "border: 1px solid #e8eaed", 4, "ngIf"], ["class", "mt-2", 4, "ngIf"], ["class", "row mt-4", 3, "ngbCollapse", 4, "ngIf"], ["class", "row mt-3", 3, "ngbCollapse", 4, "ngIf"], ["class", "mt-3", 3, "ngbCollapse", 4, "ngIf"], [1, "d-flex", "align-items-center"], ["title", "Review", "style", "font-size: 22px; margin-left: 10px", "class", "color-primary fa fa-bookmark-o cursor", 3, "click", 4, "ngIf"], ["class", "ml-1 color-primary cursor", "style", "font-size: 12px", 3, "click", 4, "ngIf"], ["title", "Marked For Review", "style", "width: 20px; margin-left: 10px", "class", "cursor", "alt", "Review Marked", "src", "assets/images/bookmark_checked.webp", 3, "click", 4, "ngIf"], ["title", "Review", 1, "color-primary", "fa", "fa-bookmark-o", "cursor", 2, "font-size", "22px", "margin-left", "10px", 3, "click"], [1, "ml-1", "color-primary", "cursor", 2, "font-size", "12px", 3, "click"], ["title", "Marked For Review", "alt", "Review Marked", "src", "assets/images/bookmark_checked.webp", 1, "cursor", 2, "width", "20px", "margin-left", "10px", 3, "click"], [1, "mb-0", 2, "font-size", "18px"], [3, "click", "title"], [1, "col-12", "mt-4"], [1, "cfs", "editor_bullet"], [1, "overflow-auto", "pl-2", 3, "innerHTML"], [2, "color", "#777", "font-size", "13px", 3, "innerHTML"], [1, "cfs", "mt-4", "editor_bullet"], [1, "mb-0", "pl-3", 3, "innerHTML"], [1, "col-md-12", "mb-2", "px-2"], ["style", "max-height: 20rem", 3, "ngClass", "class", "click", 4, "ngFor", "ngForOf"], [2, "max-height", "20rem", 3, "click", "ngClass"], [1, "btn-primary", "inner_button", 3, "ngClass"], [1, "col-11", "pr-0", "cfs", "align-self-center"], [1, "math-content", "remove-margin-bottom", 3, "innerHTML"], ["class", "pl-2 align-self-center cursor", 3, "click", 4, "ngIf"], [1, "pl-2", "align-self-center", "cursor", 3, "click"], ["title", "Strike out the option", "class", "eliminator fas fa-strikethrough", 4, "ngIf"], ["title", "Undo the strike out", "class", "fa fa-undo", 4, "ngIf"], ["title", "Strike out the option", 1, "eliminator", "fas", "fa-strikethrough"], ["title", "Undo the strike out", 1, "fa", "fa-undo"], [1, "mt-4", "px-3", "table-flexible", 3, "ngClass"], [1, "table", "table-bordered", "text-center"], ["class", "remove-margin-bottom", 3, "innerHTML", "id", 4, "ngFor", "ngForOf"], [1, "remove-margin-bottom", 3, "innerHTML", "id"], [1, "remove-margin-bottom", 3, "innerHTML"], ["class", "cursor radio_animated", "type", "radio", 3, "checked", "id", "name", "click", 4, "ngIf"], ["class", "cursor", "type", "checkbox", 3, "checked", "id", "click", 4, "ngIf"], ["type", "radio", 1, "cursor", "radio_animated", 3, "click", "checked", "id", "name"], ["type", "checkbox", 1, "cursor", 3, "click", "checked", "id"], [1, "mt-4", 3, "ngClass"], ["class", "col-md-12 mt-3 mb-3", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mt-3", "mb-3"], [1, "col-md-11", "dropdown"], ["type", "button", "data-toggle", "dropdown", 1, "col-md-12", "bg-white", "innerhtml-margin-clear", "p-2", "dropdown-border", "dropdown-toggle", "d-flex", "justify-content-between", 3, "id", "innerHTML"], [1, "col-md-11", "dropdown-menu"], [1, "dropdown-item", "dropdown-link", "cursor", 3, "click"], ["style", "overflow: scroll; overflow-y: hidden", "class", "dropdown-item dropdown-link innerhtml-margin-clear", 3, "innerHTML", "click", 4, "ngFor", "ngForOf"], [1, "dropdown-item", "dropdown-link", "innerhtml-margin-clear", 2, "overflow", "scroll", "overflow-y", "hidden", 3, "click", "innerHTML"], ["class", "col-md-6 mt-3 mb-3", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mt-3", "mb-3"], ["placeholder", "Enter the Answer", "class", "form-control", "type", "text", 3, "readOnly", "value", "input", 4, "ngIf"], ["placeholder", "Enter the Answer", "type", "text", 1, "form-control", 3, "input", "readOnly", "value"], ["cdkDropList", "", 1, "col-12", 3, "cdkDropListDropped"], ["class", "input-group mb-3 mt-3 inputMenu", 4, "ngFor", "ngForOf"], [1, "input-group", "mb-3", "mt-3", "inputMenu"], ["cdkDrag", "", 1, "input-group", "mb-1", "inputMenu"], [1, "input-group-prepend"], [1, "input-group-text", "px-0", "py-1"], ["src", "assets/images/pdf-icons/equal@2x.png", "alt", "", 1, "img-fluid"], [1, "form-control", "mb-0", "overflow-auto", "align-content-center", 2, "min-height", "46px", 3, "innerHTML"], [1, "mt-4", "px-3", "mb-3", 3, "ngClass"], [1, "mt-4", "row"], ["id", "essay_textarea", 1, "d-flex", "justify-content-between"], [1, "font-weight-bold"], ["class", "col-6 px-0 mb-2", 4, "ngIf"], ["placeholder", "Please enter your answer", 1, "form-control", 3, "ngModelChange", "rows", "ngModel", "readonly", "ngModelOptions"], [1, "word-count"], [1, "mr-2"], [1, "col-6", "px-0", "mb-2"], [1, "label_design"], ["bindLabel", "version_name", "bindValue", "index", "placeholder", "Please Select", 3, "change", "ngModelChange", "items", "clearable", "ngModel"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100"], [1, "mb-0", "d-inline-flex", 2, "font-size", "14px", 3, "ngClass"], [1, "badge", "badge-info", "ml-2", 2, "align-content", "center", "padding", "4px 8px"], [1, "badge", 3, "ngClass"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "mb-3"], ["class", "table-flexible", 4, "ngIf"], ["class", "mt-3 mb-2", 4, "ngIf"], [1, "col-md-12", "mb-2", "px-2", 3, "ngClass"], [1, "col-11", "pr-0", "d-flex", "align-self-center", "justify-content-between", 2, "overflow", "hidden"], [1, "cfs", 3, "ngClass"], [1, "table-flexible"], [1, "table", "px-3", "table-bordered", "text-center", "mt-3", "mb-3", 3, "ngClass"], ["class", "remove-margin-bottom", 3, "innerHTML", 4, "ngFor", "ngForOf"], ["class", "radio_animated", "type", "radio", 3, "checked", "name", "click", 4, "ngIf"], ["type", "checkbox", 3, "checked", "click", 4, "ngIf"], ["type", "radio", 1, "radio_animated", 3, "click", "checked", "name"], ["type", "checkbox", 3, "click", "checked"], ["class", "col-md-6 mt-3 mb-3 px-1", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mt-3", "mb-3", "px-1"], ["placeholder", "Enter the answer", "class", "form-control", "type", "text", 3, "readOnly", "value", "input", 4, "ngIf"], ["placeholder", "Enter the answer", "type", "text", 1, "form-control", 3, "input", "readOnly", "value"], [1, "mt-3", "mb-2"], [1, "mt-4", "px-3", "mb-3"], [1, "mt-4", "mb-4"], [1, "col-12", "mt-0", "d-flex", "justify-content-center"], [3, "valueChange", "editMode", "editPatchValue", "graphId", "questionType"], [1, "col-md-12", "mt-2"], [1, "card", "w-100", "mt-2", 2, "border", "1px solid #e8eaed"], [1, "card-body", 3, "ngClass"], ["class", "col-md-12 px-0", 4, "ngIf"], ["class", "col-md-12 my-4 px-0 table-flexible", 4, "ngIf"], [1, "col-md-12", "px-0"], [1, "mb-0"], ["style", "max-height: 20rem", 3, "ngClass", "class", 4, "ngFor", "ngForOf"], [2, "max-height", "20rem", 3, "ngClass"], ["class", "btn-primary inner_button", 4, "ngIf"], ["class", "col-11 pt-1 pr-0 cfs", 4, "ngIf"], [1, "btn-primary", "inner_button"], [1, "col-11", "pt-1", "pr-0", "cfs"], [1, "col-md-12", "my-4", "px-0", "table-flexible"], [1, "table", "table-bordered", "text-center", "div-disable"], ["class", "radio_animated", "type", "radio", 3, "checked", "name", 4, "ngIf"], ["type", "checkbox", 3, "checked", "id", 4, "ngIf"], ["type", "radio", 1, "radio_animated", 3, "checked", "name"], ["type", "checkbox", 3, "checked", "id"], ["class", "col-md-12 mt-2 mb-3", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mt-2", "mb-3"], [1, "col-md-11"], ["data-toggle", "dropdown", 1, "col-md-12", "bg-white", "innerhtml-margin-clear", "p-2", "dropdown-border", "dropdown-toggle", "d-flex", "justify-content-between", 3, "id"], [1, "col-md-12", "dropdown-menu"], [1, "dropdown-item", "dropdown-link", "overflow-auto"], ["class", "dropdown-item overflow-auto dropdown-link innerhtml-margin-clear", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "dropdown-item", "overflow-auto", "dropdown-link", "innerhtml-margin-clear", 3, "innerHTML"], [1, "form-span"], ["class", "col-md-12 px-0 py-2 table-flexible", 4, "ngIf"], [1, "col-md-12", "px-0", "py-2", "table-flexible"], [1, "mt-2"], ["class", "col-md-12 mt-3", 4, "ngIf"], [1, "col-12", "mt-2", "editor_bullet"], [1, "col-md-12", "mt-3"], [1, "col-12", "mt-2"], ["class", "btn cancel", 3, "click", 4, "ngIf"], ["class", "btn cancel ml-2", 3, "click", 4, "ngIf"], [1, "btn", "cancel", 3, "click"], [1, "btn", "cancel", "ml-2", 3, "click"], [1, "row", "mt-4", 3, "ngbCollapse"], [1, "col-12", "px-2"], [1, "card-header", "p-3", "background_gradient"], [1, "font-weight-bold", 2, "color", "white", "font-size", "16px"], [1, "card-body", "custom_feedback_card_body", "p-3"], [1, "col-12", "px-0"], [3, "emitEditorValue", "editorPatchValue", "height", "readonly", "showDropBtn", "showInputBtn"], [1, "row", "mt-3", 3, "ngbCollapse"], [1, "mt-3", 3, "ngbCollapse"], ["cols", "30", "placeholder", "Please Enter the Feedback", "rows", "3", 1, "form-control", 3, "input", "readOnly", "value"], [1, "row", "mt-3"], [2, "color", "white"], [1, "card-body", "py-3", "px-4", "custom_feedback_card_body"], ["class", "row px-2", 4, "ngFor", "ngForOf"], [1, "row", "px-2"], [1, "color-primary"], [1, "text-dark", 2, "font-size", "12px"], [1, "card", "p-3"], [4, "ngTemplateOutlet"], [1, "row", "mt-2"], ["class", "col-4", 4, "ngIf"], [1, "col-4"], [1, "logo-wrapper", "d-flex", "justify-content-center"], ["alt", "", "src", "assets/images/EdQuill.png", 1, "blur-up", "lazyloaded", 2, "visibility", "hidden", "width", "auto", "height", "34px"], [1, "text-center", "position-relative"], [1, "btn", "btn-primary", 3, "click"], ["class", "jump-question-box", 4, "ngIf"], [1, "jump-question-box"], [1, "box-title"], [1, "col-12", "px-0", 2, "margin-bottom", "10px"], [1, "fa", "fa-bookmark-o", 2, "font-size", "16px"], [2, "font-size", "13px", "color", "#777"], [1, "fa", "fa-bookmark-o", "bg-partially", 2, "border-bottom", "0 !important", "font-size", "16px"], [1, "fa", "fa-bookmark-o", "color-primary", 2, "border-bottom", "0 !important", "font-size", "16px"], ["alt", "Review Marked", "src", "assets/images/bookmark_checked.webp", 2, "width", "16px"], [1, "question-grid"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "btn pull-right btn-primary ml-2", 3, "click", 4, "ngIf"], ["class", "btn pull-right cancel", 3, "click", 4, "ngIf"], ["class", "btn pull-right btn-outline-primary mr-2", 3, "click", 4, "ngIf"], [1, "btn", "pull-right", "btn-primary", "ml-2", 3, "click"], [1, "btn", "pull-right", "cancel", 3, "click"], [1, "btn", "pull-right", "btn-outline-primary", "mr-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-repeat", "ml-1"], ["class", "btn btn-primary ml-3 pull-right", 3, "click", 4, "ngIf"], ["class", "btn pull-right btn-outline-primary ml-3", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary pull-right ml-3", 3, "click", 4, "ngIf"], ["class", "btn-group dropup pull-right", 4, "ngIf"], ["class", "btn pull-right btn-outline-primary", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "ml-3", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-undo", "mr-1"], [1, "btn", "pull-right", "btn-outline-primary", "ml-3", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-repeat", "mr-1"], [1, "btn", "btn-outline-primary", "pull-right", "ml-3", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-comments", "mr-1"], [1, "btn-group", "dropup", "pull-right"], ["data-toggle", "dropdown", 1, "btn", "btn-outline-primary", 2, "border-radius", "5px"], ["aria-hidden", "true", 1, "fa", "fa-sort-desc", "float-right", "ml-2"], [1, "dropdown-menu"], [1, "dropdown-item", "dropdown-link", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o", "mr-1"], ["aria-hidden", "true", 1, "fa", "fa-sign-out", "mr-1"], [1, "btn", "pull-right", "btn-outline-primary", 3, "click"], [1, "content-card", "col-6", "2", 3, "ngStyle"], [1, "content-card", "col-6", "1", 3, "ngStyle"], [1, "modal-header"], [1, "modal-title", "letter"], [1, "modal-body", "p-0"], [1, "container-fluid"], ["style", "color: #313131", "class", "mb-0 my-3 font-weight-bold", 4, "ngIf"], ["class", "col-12 mb-3", 4, "ngIf"], ["class", "col-12", "style", "margin-bottom: 10px", 4, "ngIf"], [1, "modal-footer", "d-flex", "justify-content-right"], ["type", "button", 3, "click"], ["type", "button", 3, "disabled", "class", "click", 4, "ngIf"], [1, "mb-0", "my-3", "font-weight-bold", 2, "color", "#313131"], [1, "col-12", "mb-3"], ["placeholder", "Please Enter the Overall Feedback", "cols", "30", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel", "readOnly"], [1, "col-12", 2, "margin-bottom", "10px"], [1, "question-grid-submit"], ["type", "button", 3, "click", "disabled"], [1, "modal-body"], ["aria-expanded", "false", "data-toggle", "collapse", 1, "btn-sm", "btn-outline-primary", "mr-2"], ["title", "Work Area", 1, "btn-sm", "mb-1", "btn-outline-primary", "mr-2", 3, "click"], ["class", "btn-sm btn-primary mr-2", 3, "click", 4, "ngIf"], [3, "emitEditorValue", "editorPatchValue", "height", "readOnly", "id", "showDropBtn", "showInputBtn"], ["id", "answer", 1, "col-md-12", "collapse"], [1, "modal-footer", "d-flex", "justify-content-right", "mt-2"], [1, "btn-sm", "btn-primary", "mr-2", 3, "click"], ["id", "modal-basic-title", 1, "modal-title", "font-weight-bold"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["target", "_blank", 1, "cursor", 3, "href"], [2, "overflow", "scroll", "overflow-y", "hidden", 3, "title"], [1, "modal-body", 2, "border", "0"], [1, "col-md-1", "mt-2"], [1, "col-11", "mt-2"], ["class", "mb-0 overflow-auto div-disable", 3, "innerHTML", 4, "ngIf"], ["class", "col-12 mt-2 text-center", 4, "ngIf"], [1, "mb-0", "overflow-auto", "div-disable", 3, "innerHTML"], [1, "col-12", "mt-2", "text-center"], [1, "mt-2", 3, "emitEditorValue", "editorPatchValue", "readonly", "height", "id", "showDropBtn", "showInputBtn"], [1, "btn-sm", "mb-1", "btn-outline-primary", "mr-2", "mt-3", 3, "click"], ["cols", "30", "rows", "8", 1, "form-control", 3, "input", "readOnly"], [1, "modal-header", "d-flex", "justify-content-between"], [1, "mb-0", 2, "color", "#8F008A"], [1, "fa", "fa-times-circle", "cursor", 2, "font-size", "1.2rem", 3, "click"], [1, "col-md-12", "d-flex", "mt-4", "mb-4", "p-4", "release-card"], [3, "annotate", "getAnnotate", "id", "toolAdjust", "toolHide", "userType"], [3, "annotate", "getAnnotate", "toolAdjust", "toolHide", "popUp"], [1, "col-12", "px-0", "my-3", "d-flex", "flex-row", "align-items-center"], [1, "feedback_spinner"], [1, "ml-3", 2, "font-size", "16px"], ["style", "color: #313131; font-size: 14px", "class", "mb-0 my-3", 4, "ngIf"], ["style", "color: #313131; font-size: 14px", "class", "mb-0 my-3 font-weight-bold", 4, "ngIf"], [1, "mb-0", "my-3", 2, "color", "#313131", "font-size", "14px"], [1, "mb-0", "my-3", "font-weight-bold", 2, "color", "#313131", "font-size", "14px"], [1, "mb-0", "font-weight-bold", "color-primary"], [1, "col-12", "px-0", "text-center"], ["src", "assets/images/take-a_break.png", "alt", "Take a break", 1, "w-100"], [1, "col-12", "col-12", "d-flex", "flex-row", "align-items-center", "justify-content-center"], [1, "timer_button", "p-2", "row"], [1, "modal-footer", "py-2", "justify-content-between"], [1, "m-0"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "d-flex", "align-items-center", "justify-content-around", 3, "click", "ngClass"], [1, "ml-1"], ["title", "Review", 1, "fa", "fa-bookmark-o", "cursor", 2, "font-size", "16px"], ["alt", "Review Marked", 1, "cursor", 2, "width", "16px", 3, "src", "title"], [1, "font-weight-bold", "mt-2", "mb-3"], [1, "col-12", "mt-3", "px-0"], ["style", "border: 0 !important;", "class", "feedback-card", 3, "innerHTML", 4, "ngIf"], ["class", "feedback-card p-0", "style", "overflow-x: hidden;border: 0 !important", 4, "ngIf"], ["class", "col-12 mt-3 px-0", 4, "ngIf"], [1, "row", "justify-content-center", "flex-column"], [1, "col-12", "d-flex", "justify-content-center"], [1, "text-center"], [1, "mb-0", 2, "font-size", "14px"], [1, "font-weight-bold", 2, "color", "#008ffb"], [1, "ml-2"], ["style", "color: #00e396", "class", "font-weight-bold", 4, "ngIf"], ["id", "chart2"], [3, "series", "chart", "xaxis", "yaxis", "plotOptions", "dataLabels", "legend"], ["class", "col-12 mt-2", 4, "ngIf"], [1, "font-weight-bold", 2, "color", "#00e396"], ["class", "strength_text", 4, "ngFor", "ngForOf"], [1, "strength_text"], ["class", "top_opportunity_text", 4, "ngFor", "ngForOf"], [1, "top_opportunity_text"], [1, "feedback-card", 2, "border", "0 !important", 3, "innerHTML"], [1, "feedback-card", "p-0", 2, "overflow-x", "hidden", "border", "0 !important"], [1, "row", "mb-2"], [1, "mb-0", "font-weight-bold", 2, "font-size", "18px"], [1, "col-10"], [1, "progress", "cursor", "my-2"], ["role", "progressbar", 1, "progress-bar"], [1, "align-self-center", "font-weight-bold", "color-primary"], ["class", "feedback-panel", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "feedback-panel", 3, "click", "ngClass"], [1, "feedback-header", "d-flex", "justify-content-between", "align-items-center", 3, "ngClass"], [1, "title-text"], [1, "badge", "badge-info", "mr-2"], [1, "fa", 2, "color", "black", 3, "ngClass"], [1, "feedback-body", 3, "ngbCollapse"], [2, "color", "black"], [1, "collapse-card"], [1, "snippet-text"], [1, "inner-collapse", "mt-2"], [1, "font-weight-bold", "col-12", "px-0"], [1, "font-weight-normal", "italic"], ["class", "font-weight-bold mt-2 col-12 px-0", 4, "ngIf"], [1, "font-weight-bold", "mt-2", "col-12", "px-0"], [1, "font-weight-normal", "color-primary", "italic"], [1, "card-body", "custom_feedback_card_body", "py-3", "px-0"], [1, "text-center", "font-weight-bold", 2, "padding-left", "16px", 3, "ngStyle"], [3, "ngStyle"], [1, "font-weight-bold", "mb-1", "col-12", "px-0"], [1, "col-12", "px-0", 2, "color", "#007BFF"]], template: function AnsweringComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AnsweringComponent_div_0_Template, 2, 0, "div", 17);
            i0.ɵɵelementStart(1, "div", 18)(2, "div", 19)(3, "div", 20)(4, "div", 21)(5, "div", 22)(6, "div", 20)(7, "div")(8, "div", 23)(9, "div")(10, "h4", 24);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(12, AnsweringComponent_div_12_Template, 7, 6, "div", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div");
            i0.ɵɵtemplate(14, AnsweringComponent_div_14_Template, 3, 3, "div", 26)(15, AnsweringComponent_div_15_Template, 7, 9, "div", 27);
            i0.ɵɵelementStart(16, "div", 28)(17, "div", 29);
            i0.ɵɵtemplate(18, AnsweringComponent_i_18_Template, 6, 5, "i", 30);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(19, AnsweringComponent_a_19_Template, 2, 2, "a", 31)(20, AnsweringComponent_i_20_Template, 1, 0, "i", 32)(21, AnsweringComponent_img_21_Template, 1, 0, "img", 33)(22, AnsweringComponent_i_22_Template, 1, 0, "i", 34)(23, AnsweringComponent_i_23_Template, 1, 0, "i", 35)(24, AnsweringComponent_button_24_Template, 2, 3, "button", 27)(25, AnsweringComponent_button_25_Template, 2, 3, "button", 27);
            i0.ɵɵelementEnd()()()()()()()()();
            i0.ɵɵtemplate(26, AnsweringComponent_div_26_Template, 7, 8, "div", 36)(27, AnsweringComponent_section_27_Template, 9, 15, "section", 37);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(28, AnsweringComponent_ng_template_28_Template, 17, 11, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(30, AnsweringComponent_ng_template_30_Template, 14, 6, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(32, AnsweringComponent_ng_template_32_Template, 36, 35, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(34, AnsweringComponent_ng_template_34_Template, 9, 4, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(36, AnsweringComponent_ng_template_36_Template, 11, 7, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(38, AnsweringComponent_ng_template_38_Template, 9, 1, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(40, AnsweringComponent_ng_template_40_Template, 8, 2, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor)(42, AnsweringComponent_ng_template_42_Template, 5, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor)(44, AnsweringComponent_ng_template_44_Template, 12, 5, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor)(46, AnsweringComponent_ng_template_46_Template, 28, 3, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor)(48, AnsweringComponent_ng_template_48_Template, 5, 4, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor)(50, AnsweringComponent_ng_template_50_Template, 16, 7, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.commondata.loader.value);
            i0.ɵɵadvance(7);
            i0.ɵɵclassMapInterpolate1("card-body ", ctx.env.deviceType() ? "px-3 py-2" : "", "");
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("col-md-", (ctx.getData == null ? null : ctx.getData.is_test) == 1 && ctx.getData.student_content_status == "1" && ctx.getData.student_content_status == "2" ? "5" : "6", " mt-2 pl-4");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.contentName);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.showpdf);
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("col-md-", (ctx.getData == null ? null : ctx.getData.is_test) == 1 && ctx.getData.student_content_status == "1" && ctx.getData.student_content_status == "2" ? "7" : "6", " px-0 pdf-assign-btn d-flex align-items-center justify-content-end");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.getData == null ? null : ctx.getData.is_test) == 1 && ctx.getData.student_content_status != "1" && ctx.getData.student_content_status != "2");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.showpdf && !ctx.isSingleQnsWithFeedbackType || !ctx.showpdf && (ctx.questionData == null ? null : ctx.questionData.show_timer) == "1" && ctx.isSingleQnsWithFeedbackType);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.showUploadFile && ctx.functionCalled && !ctx.expandPdf);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.questionData == null ? null : ctx.questionData.download) != "0" && !ctx.expandPdf && ctx.functionCalled);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.questionData == null ? null : ctx.questionData.teacher_feedback) != "" && (ctx.questionData == null ? null : ctx.questionData.teacher_feedback) && ctx.functionCalled && !ctx.expandPdf);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.linkdata == null ? null : ctx.linkdata.length) != "0");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.getData.student_content_status == "1" || ctx.getData.student_content_status == "2") && (ctx.getData == null ? null : ctx.getData.is_test) != "1" && !ctx.isSingleQnsWithFeedbackType);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.getData.student_content_status == "1" || ctx.getData.student_content_status == "2") && !ctx.isSingleQnsWithFeedbackType);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.getData.student_content_status == "1" || ctx.getData.student_content_status == "2") && (ctx.getData == null ? null : ctx.getData.is_test) != "1" && !ctx.isSingleQnsWithFeedbackType);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.getData.student_content_status != "1" && ctx.getData.student_content_status != "2");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showpdf);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.showpdf);
        } }, dependencies: [i16.NgClass, i16.NgForOf, i16.NgIf, i16.NgTemplateOutlet, i16.NgStyle, i5.NgbCollapse, i5.NgbDropdown, i5.NgbDropdownToggle, i5.NgbDropdownMenu, i5.NgbDropdownItem, i17.NgSelectOption, i17.ɵNgSelectMultipleOption, i17.DefaultValueAccessor, i17.SelectControlValueAccessor, i17.NgControlStatus, i18.NgSelectComponent, i18.NgOptionTemplateDirective, i17.NgModel, i19.FeatherIconsComponent, i20.GraphComponentComponent, i21.TinyMiceComponent, i22.AnnotationComponent, i23.StudentWebAnnotationComponent, i24.SourceLinkComponent, i25.PdfViewerComponent, i26.CdkDropList, i26.CdkDrag, i26.CdkDragHandle, i27.InfiniteScrollDirective, i28.ChartComponent, i16.DatePipe, i29.SanitizeHtmlPipe, i30.CustomDateFormatPipe], styles: [".inputMenu[_ngcontent-%COMP%]{\n\n  //padding: 30px;\n\n\n  input{\n    padding: 30px;\n  }\n  .input-group-text{\n    background: white;\n  }\n  img{\n    position: relative;\n    height: 36px;\n  }\n\n  .pointsSec{\n    .labelName{\n      font-size: 20px;\n    }\n    .pointInput{\n      height: 3rem !important;\n    }\n  }\n}\n.button[_ngcontent-%COMP%] {\n  display: block;\n  width: 115px;\n  height: 30px;\n  background: #8F008A;\n  padding: 3px;\n  text-align: center;\n  border-radius: 3px;\n  color: white;\n  font-weight: bold;\n  line-height: 25px;\n}\n\n.button1[_ngcontent-%COMP%] {\n  width: 116px;\n  height: 30px;\n  display: block;\n  line-height: 19px;\n  font-size: 14px;\n  text-align: center;\n}\ncanvas-whiteboard[_ngcontent-%COMP%] {\n  width: 10vw;\n  canvas {\n    width: 10vw;\n    height: 50vh;\n    position: center;\n  }\n}\n\n//[_ngcontent-%COMP%]   answering[_ngcontent-%COMP%]   page[_ngcontent-%COMP%]   student[_ngcontent-%COMP%]   login\n.inputMenu[_ngcontent-%COMP%]{\n\n  input{\n    padding: 30px;\n  }\n  .input-group-text{\n    background: white;\n  }\n  img{\n    position: relative;\n    height: 36px;\n  }\n\n  .pointsSec{\n    .labelName{\n      font-size: 20px;\n    }\n    .pointInput{\n      height: 3rem !important;\n    }\n  }\n}\n.button[_ngcontent-%COMP%] {\n  display: block;\n  width: 115px;\n  height: 30px;\n  background: #8F008A;\n  padding: 3px;\n  text-align: center;\n  border-radius: 3px;\n  color: white;\n  font-weight: bold;\n  line-height: 25px;\n}\n\n.button1[_ngcontent-%COMP%] {\n  width: 116px;\n  height: 30px;\n  display: block;\n  line-height: 19px;\n  font-size: 14px;\n  text-align: center;\n}\n\n.paddingDetails[_ngcontent-%COMP%]{\n  padding-left: 28px;\n  padding-right: 28px;\n}\n\n////\n.overlay[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: grey;\n  position: absolute;\n  z-index: 1;\n  opacity: 0.6;\n  cursor: pointer;\n  transform: scale(0);\n  transition: .4s;\n  border-radius: 5px;\n  -webkit-transition: .4s;\n  -moz-transition: .4s;\n  -ms-transition: .4s;\n  -o-transition: .4s;\n}\n.table-cell[_ngcontent-%COMP%]{\n  display: table-cell;\n  vertical-align: middle;\n}\n.overlay-main[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: table;\n}\n.team-col[_ngcontent-%COMP%] {\n  margin: 0;\n  position: relative;\n}\n.team-member[_ngcontent-%COMP%]{\n  position: relative;\n  overflow: hidden;\n  margin: 0;\n}\n\n.corporate-team[_ngcontent-%COMP%]{\n  position: relative;\n  margin-bottom: 30px;\n}\n.corporate-team[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{\n  transform: scale(1);\n}\n.corporate-team[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%]{\n  transform: translateY(0);\n\n}\n.corporate-team[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{\n  transform: translateY(0);\n\n}\n.corporate-team[_ngcontent-%COMP%]:hover   .team-details[_ngcontent-%COMP%]{\n  background-color: black;\n}\n.corporate-team[_ngcontent-%COMP%]:hover   .team-icon-grid[_ngcontent-%COMP%]{\n  transform: translateY(0);\n\n}\n.team-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  padding: 0;\n  transition: .4s;\n  -o-transition: .4s;\n  -webkit-transition: .4s;\n  -moz-transition: .4s;\n  -ms-transition: .4s;\n  border: 0 solid white;\n  box-shadow: 0 0 4px 0 #d7d7d7;\n}\n\n.team-details[_ngcontent-%COMP%] {\n  padding: 23px 20px;\n  background-color: #f31515;\n  margin-top: 10px;\n  position: relative;\n  z-index: 11111;\n  transition: .4s;\n  -o-transition: .4s;\n  -webkit-transition: .4s;\n  -moz-transition: .4s;\n  -ms-transition: .4s;\n}\n.team-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  color: white;\n  font-weight: 700;\n  font-family: 'Roboto', serif;\n}\n.team-member[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 26px;\n  color: white;\n  transform: translateY(-550px);\n  transition: .5s;\n  -o-transition: .5s;\n  -webkit-transition: .5s;\n  -moz-transition: .5s;\n  -ms-transition: .5s;\n  transition-delay: .2s;\n  margin-left: 20px;\n}\n.team-member[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: black;\n  line-height: 24px;\n  margin: 0 20px;\n  margin-top: 10px;\n  margin-bottom: 15px;\n  transform: translateY(-550px);\n  transition: .5s;\n  -o-transition: .5s;\n  -webkit-transition: .5s;\n  -moz-transition: .5s;\n  -ms-transition: .5s;\n  transition-delay: .2s;\n}\n.team-icon[_ngcontent-%COMP%]{\n  margin-top: 3px;\n  transition: .3s;\n  position: relative;\n  z-index: 1;\n  transition: .3s;\n  -webkit-transition: .3s;\n  -moz-transition: .3s;\n  -ms-transition: .3s;\n  -o-transition: .3s;\n  margin-left: 20px;\n}\n.team-social[_ngcontent-%COMP%] {\n  padding-left: 0;\n  display: inline-flex;\n  list-style: none;\n  margin: 0;\n}\n.team-social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n  margin: 0;\n}\n.team-social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #f31515;\n  transition: .3s;\n  -webkit-transition: .3s;\n  -moz-transition: .3s;\n  -ms-transition: .3s;\n  -o-transition: .3s;\n  text-align: center;\n  margin-right: 11px;\n  float: left;\n  height: 30px;\n  width: 30px;\n  background-color: white;\n  border-radius: 5px;\n  line-height: 30px;\n}\n.team-social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: black;\n  background-color: white;\n}\n\n\n.team-icon-grid[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: transparent;\n  position: relative;\n  margin-top: 20px;\n  transform: translateY(250px);\n  transition: .8s;\n  -o-transition: .8s;\n  -webkit-transition: .8s;\n  -moz-transition: .8s;\n  -ms-transition: .8s;\n  transition-delay: .6s;\n}\n\n.round-question[_ngcontent-%COMP%]{\n  border: 1px solid;\n  width: 38px;\n  border-radius: 50%;\n  text-align: center;\n  cursor: pointer;\n  font-size: 20px;\n}\n\n.black[_ngcontent-%COMP%]{\n  border: 1px solid black !important;\n  color: black !important;\n  font-size: 20px;\n}\n\n.wrap[_ngcontent-%COMP%]{\n  display: flex;\n  text-align: center;\n  flex-wrap: wrap !important;\n}\n\n\n///\n.scoll-component[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  width: 100%;\n  height: 60px;\n\n  .total-items {\n    min-width: 80px;\n    align-self: center;\n    text-align: center;\n  }\n\n  // Container\n  .scoll-container {\n    position: relative;\n    display: flex;\n    overflow: hidden;\n    flex-grow: 1;\n    padding-left: 49px;\n    padding-right: 49px;\n    // Scroll\n    .scroll-content {\n      display: flex;\n      overflow-x: auto;\n      overflow-y: hidden;\n      flex-wrap: nowrap;\n      align-items: center;\n\n      .arrowStyle{\n        background: transparent;\n        font-size: 28px;\n        border: 0 ridge;\n      }\n      // Arrows\n      .arrow {\n        position: absolute;\n        width: 60px;\n        text-align: center;\n        z-index: 2;\n        &.hide {\n          display: none;\n        }\n        &.left-arrow {\n          left: 0;\n        }\n        &.right-arrow {\n          right : 0;\n        }\n      }\n\n      // Items\n      .scroll-item {\n        width: auto;\n        margin: 0 10px;\n        flex: 0 0 auto;\n      }\n    }\n  }\n}\n\n.selectedQuestion[_ngcontent-%COMP%] {\n  border: 1px solid #a837aa!important;\n  color: #a837aa;\n  font-size: 20px;\n  background: #e6baea4d;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 20px; border: 1px solid #8F008A; border-radius: 4px; padding: 6px;\n  align-content: center;\n  margin-right: 12px;\n}\n\n.upload-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8f008a;\n  font-weight: bolder;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]::after{\n  display: none !important;\n}\n\n.question-side-icon[_ngcontent-%COMP%] {\n  height: 28px;width: 28px;object-fit: contain;\n}\n\n.text-wrap-balance[_ngcontent-%COMP%] {\n  text-wrap: balance !important;\n}\n\n.button_design[_ngcontent-%COMP%] {\n  border: 0 !important;\n  font-size: 14px;\n  padding: 9px 12px !important;\n}\n\n.inner_button[_ngcontent-%COMP%] {\n  padding: 4px 8px !important;\n  background: #ffff !important;\n  color: black;\n  border: 2px solid #e1e4eb !important;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 16px;\n  height: 30px;\n}\n\n.button_design[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.inner_button[_ngcontent-%COMP%]:focus, .button_design[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  outline: none;\n}\n\n.button_design[_ngcontent-%COMP%]:active {\n  color: #FFFFFF !important;\n}\n\n.inner_button[_ngcontent-%COMP%]:active {\n  color: black !important;\n}\n\n.inner_button[_ngcontent-%COMP%]:focus-visible, .button_design[_ngcontent-%COMP%]:focus-visible {\n  outline: none !important;\n}\n\n.jump-question-box[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 40px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #fff;\n  border-radius: 10px;\n  padding: 15px 20px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  z-index: 1000 !important;\n  min-width: 556px;\n}\n\n.description_box[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 365px;\n  transform: translateX(-50%);\n  background: #fff;\n  border-radius: 10px;\n  padding: 15px 20px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  z-index: 1000 !important;\n  min-width: 730px;\n  max-height: 45vh !important;\n  overflow-y: scroll !important;\n}\n\n.calculator_box[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 365px;\n  transform: translateX(-50%);\n  background: #fff;\n  border-radius: 10px;\n  padding: 15px 20px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  z-index: 1000 !important;\n  min-width: 730px;\n  //max-height: 65vh !important;\n  //overflow-y: scroll !important;\n}\n\n.box-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n\n.question-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 8px;\n}\n\n.question-grid-submit[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 8px;\n}\n\n.question-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .question-grid-submit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  background-color: white;\n  transition: 0.2s ease;\n}\n\n.question-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .question-grid-submit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n\n.question-grid[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], .question-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .question-grid-submit[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], .question-grid-submit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\n  border-color: #8f008a;\n  color: #8f008a;\n  border-width: 2px;\n}\n\n.question-grid[_ngcontent-%COMP%]   button.bg-green[_ngcontent-%COMP%], .question-grid-submit[_ngcontent-%COMP%]   button.bg-green[_ngcontent-%COMP%] {\n  border: 2px solid #8cc253!important;\n  color: #8cc253 !important;\n}\n\n.question-grid[_ngcontent-%COMP%]   button.bg-partially[_ngcontent-%COMP%], .question-grid-submit[_ngcontent-%COMP%]   button.bg-partially[_ngcontent-%COMP%] {\n  border: 2px solid #ffbc58!important;\n  color: #ffbc58 !important;\n}\n\n.question-grid[_ngcontent-%COMP%]   button.bg-red[_ngcontent-%COMP%], .question-grid-submit[_ngcontent-%COMP%]   button.bg-red[_ngcontent-%COMP%] {\n  border: 2px solid #f1463e!important;\n  color: #f1463e !important;\n}\n\n.question_design[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 12px;\n  font-weight: bold;\n}\n\n.timer_button[_ngcontent-%COMP%] {\n  border: 1px solid #8f008a;\n  background: #fff !important;\n  border-radius: 4px;\n  i {\n    font-size: 20px;\n  }\n}\n\n.drag-handle[_ngcontent-%COMP%] {\n  cursor: move;\n  user-select: none;\n}\n\n.eliminator[_ngcontent-%COMP%] {\n  font-size: 16px;\n  cursor: pointer;\n  color: #888;\n}\n\n.eliminated-option[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  opacity: 0.6;\n}\n\n.rw[_ngcontent-%COMP%] {\n  .eliminated-option * {\n    text-decoration: line-through !important;\n    color: #888 !important;\n  }\n\n  .cfs {\n    span {\n      font-size: 16px;\n    }\n  }\n}\n\n.math[_ngcontent-%COMP%] {\n  .eliminated-option::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 2px;\n    background-color: #888;\n    pointer-events: none;\n  }\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  transition: width 0.8s ease-in-out;\n  background-color: #00a8ff;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  color: #8f008a;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnsweringComponent, [{
        type: Component,
        args: [{ selector: 'app-answering', providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => AnsweringComponent),
                        multi: true,
                    }], template: "<script src=\"answering.component.spec.ts\"></script>\n<div *ngIf=\"commondata.loader.value\" id=\"pre-loader\">\n    <img alt=\"\" src=\"assets/images/pre-loader/loader-01.svg\">\n</div>\n<div style=\"padding: 10px 0 !important\" class=\"container-fluid\" id=\"yourTarget\">\n\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card\">\n                <div class=\"row align-items-center\">\n                    <div class=\"col-12\">\n                        <div class=\"card-body {{env.deviceType() ? 'px-3 py-2' : ''}}\">\n                            <div class=\"row pr-3 my-1 d-flex align-items-center\">\n                                <div class=\"col-md-{{getData?.is_test == 1 && getData.student_content_status == '1' &&\n                                    getData.student_content_status == '2' ? '5' : '6'}} mt-2 pl-4\">\n                                    <h4 class=\"mb-1 font-weight-bold\">{{contentName}}</h4>\n                                    <div style=\"margin-top: 12px\" class=\"col-12 px-0 d-flex\" *ngIf=\"!showpdf\">\n                                        <div class=\"position-relative\" #qnsWrapper>\n                                            <button *ngIf=\"questionData.file_text != ''\" (click)=\"showDescription = !showDescription;showCalculator = false\"\n                                                    class=\"px-2 py-1 btn cancel description_button\">\n                                                Description<app-feather-icons [icon]=\"'clipboard'\"></app-feather-icons></button>\n                                            <div class=\"description_box\" *ngIf=\"showDescription\">\n                                                <div class=\"box-title d-flex justify-content-between\">\n                                                    <span>Description</span>\n                                                    <i class=\"fa fa-close cursor\" (click)=\"showDescription = !showDescription;showCalculator = false\"></i>\n                                                </div>\n                                                <div class=\"col-12 mb-0 pl-0 editor_bullet\" *ngIf=\"questionData.file_text != ''\">\n                                                    <span [innerHTML]=\"questionData.file_text | sanitizeHtml\"></span>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"position-relative ml-{{questionData.file_text != '' ? '2' : '0'}}\" *ngIf=\"getData?.is_test == '1' && ['math', 'maths'].indexOf(getData?.subject.toLowerCase()) > -1\">\n                                            <button (click)=\"toggleCalculator();showReference = false;showDescription = false\" class=\"align-items-center px-2 py-1 btn cancel description_button\">\n                                                Calculator<i class=\"fa fa-calculator ml-2\" aria-hidden=\"true\"></i></button>\n                                            <div class=\"calculator_box\" cdkDrag *ngIf=\"showCalculator\">\n                                                <div class=\"box-title d-flex justify-content-between drag-handle\" cdkDragHandle>\n                                                    <div class=\"col-11 px-0\">\n                                                        <span>Calculator</span>\n                                                        <p style=\"font-size: 12px; font-weight: 500\">Note: Click on the header to move the widget</p>\n                                                    </div>\n                                                    <div class=\"col-1 px-0 align-self-center text-right\" (click)=\"showCalculator = !showCalculator;showReference = false;showDescription = false\">\n                                                        <i class=\"fa fa-close cursor\"></i>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-12 mb-0 pl-0\">\n                                                    <div id=\"calculator\" style=\"width: 100%; height: 400px;\"></div>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"position-relative ml-2\" *ngIf=\"getData?.is_test == '1' && ['math', 'maths'].indexOf(getData?.subject.toLowerCase()) > -1\">\n                                            <button (click)=\"showReference = !showReference;showDescription = false;showCalculator = false\" class=\"align-items-center px-2 py-1 btn cancel description_button\">\n                                                Reference<i class=\"fa fa-file-text ml-2\" aria-hidden=\"true\"></i></button>\n                                            <div class=\"calculator_box\" *ngIf=\"showReference\">\n                                                <div class=\"box-title d-flex justify-content-between\">\n                                                    <span>Reference</span>\n                                                    <i class=\"fa fa-close cursor\" (click)=\"showReference = !showReference;showDescription = false;showCalculator = false\"></i>\n                                                </div>\n                                                <div class=\"col-12 mb-0 pl-0\">\n                                                    <div style=\"width: 100%; height: 400px;\">\n                                                        <pdf-viewer\n                                                                [src]=\"pdfSrc\"\n                                                                [render-text]=\"true\"\n                                                                [original-size]=\"false\"\n                                                                style=\"display: block;height: 100%;\"\n                                                                [show-all]=\"true\"\n                                                                [fit-to-page]=\"true\"\n                                                                [autoresize]=\"true\">\n                                                        </pdf-viewer>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-{{getData?.is_test == 1 && getData.student_content_status == '1' &&\n                                    getData.student_content_status == '2' ? '7' : '6'}} px-0 pdf-assign-btn d-flex align-items-center justify-content-end\">\n                                    <div class=\"d-flex align-items-center col-4 p-0\" *ngIf=\"getData?.is_test == 1 &&\n                                        getData.student_content_status != '1' && getData.student_content_status != '2'\">\n                                        <ng-select class=\"m-0 w-100\" (change)=\"changeQuestionListFromTest($event)\"\n                                                   [items]=\"testContentDetail\"\n                                                   bindLabel=\"name\"\n                                                   bindValue=\"content_id\"\n                                                   [(ngModel)]=\"testContentData\"\n                                                   placeholder=\"Content List\"\n                                                   [clearable]=\"false\">\n                                            <ng-template ng-option-tmp let-item=\"item\">\n                                                <div title=\"{{item.name}}\">{{item.name}}</div>\n                                            </ng-template>\n                                        </ng-select>\n                                    </div>\n                                    <div (click)=\"getData.student_content_status == '1' || getData.student_content_status == '2' ? (showTimer = !showTimer) : ''\"\n                                         class=\"row my-0 {{showTimer ? 'py-1 justify-content-center mx-2' : 'py-2 mr-1'}} px-2 timer_button\"\n                                         *ngIf=\"!showpdf && !isSingleQnsWithFeedbackType || (!showpdf && questionData?.show_timer == '1' && isSingleQnsWithFeedbackType)\">\n                                        <div class=\"w-auto text-center\"\n                                             *ngIf=\"(showTimer && (getData.student_content_status == '1' || getData.student_content_status == '2')) ||\n                                              (getData.student_content_status != '1' && getData.student_content_status != '2' && overallTimeTaken > 3600)\">\n                                            <h4 style=\"font-size: 24px\" class=\"mb-0\"><b>{{overallElapsedTime?.hours}}</b></h4>\n                                            <span style=\"font-size: 12px\" class=\"color-primary mb-0\">Hours</span>\n                                        </div>\n                                        <div class=\"w-auto mx-2\" style=\"margin-top: 2px\" *ngIf=\"(showTimer && (getData.student_content_status == '1' || getData.student_content_status == '2')) ||\n                                              (getData.student_content_status != '1' && getData.student_content_status != '2' && overallTimeTaken > 3600)\">\n                                            <h4 class=\"mb-0 font-weight-bold\">:</h4>\n                                        </div>\n                                        <div class=\"w-auto text-center\" *ngIf=\"showTimer\">\n                                            <h4 style=\"font-size: 24px\" class=\"mb-0\"><b>{{overallElapsedTime?.minutes}}</b></h4>\n                                            <span style=\"font-size: 12px\" class=\"color-primary mb-0\">Minutes</span>\n                                        </div>\n                                        <div class=\"w-auto mx-2\" style=\"margin-top: 2px\" *ngIf=\"showTimer\">\n                                            <h4 class=\"mb-0 font-weight-bold\">:</h4>\n                                        </div>\n                                        <div class=\"w-auto text-center\" *ngIf=\"showTimer\">\n                                            <h4 style=\"font-size: 24px\" class=\"mb-0\"><b>{{overallElapsedTime?.seconds}}</b></h4>\n                                            <span style=\"font-size: 12px\"  class=\"color-primary mb-0\">Seconds</span>\n                                        </div>\n                                        <div class=\"align-content-center\" *ngIf=\"getData.student_content_status == '1' || getData.student_content_status == '2'\">\n                                            <i *ngIf=\"showTimer\" title=\"Hide Timer\" class=\"cursor fa fa-eye ml-2 color-primary\"></i>\n                                            <i *ngIf=\"!showTimer\" title=\"Show Timer\" class=\"cursor fa fa-eye-slash color-primary\"></i>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mx-2\">\n                                        <div ngbDropdown container=\"body\">\n                                            <i style=\"font-size: 24px !important;\" id=\"gfg2\" *ngIf=\"showUploadFile && functionCalled && !expandPdf\" ngbDropdownToggle\n                                               [hidden]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                               class=\"fa fa-upload color-primary icon d-inline-flex\" aria-hidden=\"true\" title=\"Upload PDF\">\n                                                <div class=\"ml-3\" *ngIf=\"answerPdf.length != 0\">\n                                                    <span class=\"upload-count\">({{answerPdf.length}})</span>\n                                                </div>\n                                                <div ngbDropdownMenu=\"gfg2\">\n                                                    <div class=\"col-md-12 text-center\" *ngIf=\"answerPdf.length == 0\">\n                                                        <label class=\"px-2 mb-0 color-primary\">No PDF File Uploaded</label>\n                                                    </div>\n                                                    <div class=\"col-md-12 px-0 justify-content-between align-items-center d-flex\"\n                                                         *ngFor=\"let item of answerPdf; let i = index\">\n                                                        <label class=\"px-2 mb-0 color-primary\" ngbDropdownItem>{{item.image}}</label>\n                                                        <i (click)=\"deletePdf(i)\"\n                                                           [hidden]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                                           aria-hidden=\"true\" class=\"fa fa-close px-3\" style=\"cursor:pointer\"></i>\n                                                    </div>\n                                                    <div class=\"col-md-12 d-flex justify-content-center mt-2\" *ngIf=\"showUploadFile\">\n                                                        <input #hiddenfileinput (change)=\"encodePdfFileAsURL($event)\" accept=\".pdf\"\n                                                               multiple style=\"display: none\" type=\"file\">\n                                                        <button (click)=\"hiddenfileinput.click()\"\n                                                                [hidden]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                                                aria-describedby=\"inputGroupFileAddon01\"\n                                                                class=\"btn-sm btn-outline-primary mb-2 ml-2 pull-right button1\"\n                                                                type=\"file\">Upload pdf\n                                                        </button>\n                                                    </div>\n                                                </div>\n                                            </i>\n                                        </div>\n                                        <a *ngIf=\"questionData?.download != '0' && !expandPdf && functionCalled\"\n                                           [download]=\"downloadTemplateName\" [href]=\"downloadTemplate\">\n                                            <i class=\"fa fa-download color-primary icon\" title=\"Download PDF\" aria-hidden=\"true\"></i>\n                                        </a>\n                                        <i *ngIf=\"questionData?.teacher_feedback != '' && questionData?.teacher_feedback && functionCalled && !expandPdf\"\n                                           title=\"Teacher Feedback\" class=\"fa fa-commenting-o icon color-primary\" aria-hidden=\"true\" (click)=\"showFeedback()\"></i>\n                                        <img *ngIf=\"linkdata?.length != '0'\" style=\"border: 1px solid #8F008A; border-radius: 4px; padding: 0; width: 34px; height: 34px; margin-right: 12px\" alt=\"Resource\"\n                                             src=\"assets/images/mob-side-icon/books.png\" title=\"Resources\" (click)=\"otherlink()\">\n                                        <i title=\"Save & Exit\" (click)=\"saveAnswer('2', 'exit', true, 'same')\"\n                                           *ngIf=\"(getData.student_content_status == '1' || getData.student_content_status == '2') && getData?.is_test != '1' && !isSingleQnsWithFeedbackType\"\n                                           class=\"fa fa-sign-out color-primary icon\" aria-hidden=\"true\"></i>\n                                        <i title=\"Save\" (click)=\"saveAnswer('2', 'noExit', true, 'same')\" *ngIf=\"(getData.student_content_status == '1' || getData.student_content_status == '2') && !isSingleQnsWithFeedbackType\"\n                                           class=\"fa fa-floppy-o color-primary icon\" aria-hidden=\"true\"></i>\n                                        <button (click)=\"finalPopUp()\"\n                                                *ngIf=\"(getData.student_content_status == '1' || getData.student_content_status == '2') && getData?.is_test != '1' && !isSingleQnsWithFeedbackType\"\n                                                class=\"btn btn-primary pull-right {{env.deviceType() ? 'border-radius-5' : ''}}\">Submit\n                                        </button>\n                                        <!--                    <button (click)=\"saveAnswer('2', 'noExit', true, 'same')\" *ngIf=\"getData.student_content_status == '1' || getData.student_content_status == '2'\" class=\"btn btn-outline-primary pull-right ml-2\">Save</button>-->\n                                        <!--                    <button (click)=\"saveAnswer('2', 'exit', true, 'same')\" *ngIf=\"getData.student_content_status == '1' || getData.student_content_status == '2'\" class=\"btn btn-outline-primary pull-right\">Save and Exit</button>-->\n                                        <!--                    <button *ngIf=\"linkdata?.length != '0'\" class=\"btn btn-primary pull-right mx-2\" (click)=\"otherlink()\">Resources</button>-->\n                                        <button (click)=\"backbutton()\" *ngIf=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                                class=\"btn btn-outline-primary pull-right ml-2 {{env.deviceType() ? 'border-radius-5' : ''}}\">Back\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"showpdf\" class=\"row\">\n        <!--        <div *ngIf=\"functionCalled && answerPdf.length > 0\" class=\"col-md-12 px-0 d-flex flex-wrap justify-content-start flex-row-reverse\">-->\n        <!--            <div *ngFor=\"let item of answerPdf; let i = index\" class=\"col-md-4 pr-0\">-->\n        <!--                <div class=\"col-md-12 justify-content-between align-items-center custom-card d-flex mt-2 mb-2\">-->\n        <!--                    <label class=\"px-2 mb-0 color-primary\">{{item.image}}</label>-->\n        <!--                    <i (click)=\"deletePdf(i)\" [hidden]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\" aria-hidden=\"true\" class=\"fa fa-close px-3\" style=\"cursor:pointer\"></i>-->\n        <!--                </div>-->\n        <!--            </div>-->\n        <!--        </div>-->\n        <div class=\"col-md-{{expandPdf ? '12' : '8'}}\">\n            <!--            <div *ngIf=\"(getData.student_content_status == '1' || getData.student_content_status == '2') && !env.deviceType() && showWorkArea\">-->\n            <!--                <app-annotation (annotate)=\"getWorkAreaAnnotation($event)\"-->\n            <!--                                [getAnnotate]=\"workAnnotate\"-->\n            <!--                                [id]=\"'workArea'\"-->\n            <!--                                [toolAdjust]=\"true\"-->\n            <!--                                [toolHide]=\"true\"-->\n            <!--                                [userType]=\"'student'\"></app-annotation>-->\n            <!--            </div>-->\n            <div *ngIf=\"!functionCalled\" id=\"custom-pdf-loader\" style=\"height: 100vh;\">\n                <img alt=\"\" src=\"assets/images/pre-loader/loader-01.svg\">\n            </div>\n            <div class=\"col-md-12\" *ngIf=\"pdf && functionCalled && !isPdfAvailable\">\n                <app-source-link [pdfPath]=\"pdfPath[0]\"></app-source-link>\n            </div>\n            <app-annotation *ngIf=\"pdf && functionCalled && isPdfAvailable && !env.deviceType()\"\n                            [getAnnotate]=\"areaInfo\"\n                            [userType]=\"'student'\"\n                            (annotate)=\"getAreaInfo($event)\"\n                            (deleteAnnotation)=\"getDeleteAction($event)\"\n                            (currentPageNo)=\"getCurrentPageNo($event)\"\n                            (expandBoolean)=\"expandPdfSize($event)\"\n                            [pageVariable]=\"scrolledPageNumber\"\n                            [showPageNo]=\"showAutoScroll\"\n                            [pdfPath]=\"pdfTemplate\"\n                            [expandPdf]=\"true\"\n                            [getDragQues]=\"dragQuestion\"\n                            [toolHide]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"></app-annotation>\n\n            <app-student-web-annotation *ngIf=\"pdf && functionCalled && isPdfAvailable && env.deviceType()\"\n                                        [expandPdf]=\"true\"\n                                        (expandBoolean)=\"expandPdfSize($event)\"\n                                        [overallData]=\"overallFullData\"\n            ></app-student-web-annotation>\n        </div>\n        <div *ngIf=\"functionCalled && !expandPdf\" class=\"col-md-{{pdf == true ? 4 : 12}} px-0\">\n            <div class=\"col-md-12 px-0 d-flex justify-content-between {{env.deviceType() ? 'align-items-center' : ''}} \">\n                <div *ngIf=\"totalAns.length != 0\" class=\"col-md-1 px-0 {{env.deviceType() ? 'mb-2' : ''}}\">\n                    <img (click)=\"showPdf()\" *ngIf=\"!pdf\" alt=\"\"\n                         class=\"mt-1 {{env.deviceType() ? 'question-side-icon' : ''}}\"\n                         src=\"assets/images/pdf-icons/arrowRight.png\" title=\"Show pdf\">\n                    <img (click)=\"showPdf()\" *ngIf=\"pdf\" alt=\"\"\n                         class=\"mt-1 {{env.deviceType() ? 'question-side-icon' : ''}}\"\n                         src=\"assets/images/pdf-icons/arrowLeft.png\" title=\"Hide pdf\">\n                </div>\n                <div *ngIf=\"showpdf\"\n                     class=\"col-md-{{totalAns.length != 0 ? '11' : '12'}} pl-0 pr-3 my-2 d-flex justify-content-end align-items-center\">\n                    <!--                    <div *ngIf=\"questionData?.teacher_feedback\">-->\n                    <!--                        <div *ngIf=\"questionData?.teacher_feedback != ''\" class=\"d-flex justify-content-end\">-->\n                    <!--                            <button [attr.aria-controls]=\"'#teacherFeed'\" [attr.data-target]=\"'#teacherFeed'\" aria-expanded=\"false\" class=\"btn-sm btn-outline-primary\" data-toggle=\"collapse\">Teacher Feedback</button>-->\n                    <!--                        </div>-->\n                    <!--                    </div>-->\n                    <select (change)=\"sectionFilter($event)\" *ngIf=\"totalAnsSample.length > 1 && !expandPdf\"\n                            [(ngModel)]=\"sectionFilterVal\"\n                            class=\"form-span col-md-{{totalAnsSample.length > 0 && showAutoScroll ? '8' : '12'}}\">\n                        <option value=\"all\">All Section</option>\n                        <option *ngFor=\"let item of totalAnsSample; let i = index\"\n                                value=\"{{i}}\">{{item.heading}}</option>\n                    </select>\n                    <div class=\"col-md-4 px-0\" *ngIf=\"totalAnsSample.length > 0 && showAutoScroll\">\n                        <div class=\"col-md-12 px-0 d-flex justify-content-end align-items-center\">\n                            <input (change)=\"allowAutoScroll = !allowAutoScroll\" [checked]=\"allowAutoScroll\"\n                                   type=\"checkbox\"><label class=\"ml-2 mb-0\"><b>Auto scroll</b></label>\n                        </div>\n                    </div>\n                    <!--                    <input #hiddenfileinput (change)=\"encodePdfFileAsURL($event)\" accept=\".pdf\" multiple style=\"display: none\" type=\"file\">-->\n                    <!--                    <button (click)=\"hiddenfileinput.click()\" *ngIf=\"showUploadFile\" [hidden]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\" aria-describedby=\"inputGroupFileAddon01\"-->\n                    <!--                            class=\"btn-sm btn-outline-primary mb-2 ml-2 pull-right button1\"  type=\"file\">Upload pdf</button>-->\n                    <!--                    <a *ngIf=\"questionData?.download != '0'\" [download]=\"downloadTemplateName\" [href]=\"downloadTemplate\"  class=\"button ml-2 pull-right\">Download Pdf</a>-->\n                </div>\n            </div>\n            <div class=\"col-md-12 mb-2\" *ngIf=\"showUploadFile && showpdf\">\n                <small [hidden]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                       class=\"col-md-12 px-0 d-flex justify-content-end\"\n                       style=\"color: grey; font-weight: bold; align-self: end\">Note: Upload PDF size should not\n                    exceed {{uploadFileSize.toString()}} MB</small>\n            </div>\n            <!--            <div *ngIf=\"questionData.teacher_feedback != ''\" class=\"row mt-3 mb-3 px-3\">-->\n            <!--                <div class=\"col-md-12 px-0 collapse\" id=\"teacherFeed\">-->\n            <!--                    <div class=\"col-md-12 px-0\">-->\n            <!--                        <div class=\"col-md-12 customize-card4\">{{questionData.teacher_feedback}}</div>-->\n            <!--                    </div>-->\n            <!--                </div>-->\n            <!--            </div>-->\n            <!--            <div class=\"col-md-12 px-0\">-->\n            <!--                <div *ngFor=\"let item of answerPdf; let i = index\" class=\"col-md-12 justify-content-between align-items-center custom-card d-flex mt-2 mb-2\">-->\n            <!--                    <label class=\"px-2 mb-0 color-primary\">{{item.image}}</label>-->\n            <!--                    <i (click)=\"deletePdf(i)\" [hidden]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\" aria-hidden=\"true\" class=\"fa fa-close px-3\" style=\"cursor:pointer\"></i>-->\n            <!--                </div>-->\n            <!--            </div>-->\n            <div *ngIf=\"questionData.answers.length != 0\" class=\"col-12 px-0 view-question\">\n                <div (scrolled)=\"onScrollDown()\"\n                     (mouseover)=\"scrollQues($event)\"\n                     [fromRoot]=\"true\"\n                     [infiniteScrollContainer]=\"'.scrollPanelSide'\"\n                     [infiniteScrollDistance]=\"5\"\n                     [infiniteScrollThrottle]=\"50\"\n                     class=\"scrollPanelSide card {{env.deviceType() ? 'ml-2' : ''}}\"\n                     id=\"scrollinnnersection\"\n                     infiniteScroll>\n                    <div *ngFor=\"let sec of totalAns; let i = index\"\n                         [hidden]=\"totalAns == ''\"\n                         [ngStyle]=\"{'padding': showpdf === true ? '1rem' : '2rem' }\"\n                         class=\"\"\n                    >\n                        <div *ngIf=\"sec?.heading != ''\" class=\"col-md-{{showpdf == true ? 12 : 6}} px-0 mb-3\">\n                            <input [value]=\"sec?.heading\" class=\"input-custom-modal div-disable\" type=\"text\">\n                        </div>\n                        <div *ngFor=\"let item of sec?.section; let j = index\"\n                             [id]=\"item.page_no + '-' + item.sub_question_no + '-' + j\" class=\"mb-3\">\n                            <div class=\"row d-flex justify-content-between\">\n                                <div class=\"col-md-2 d-flex\">\n                                    <button class=\"btn btn-primary\">{{item.sub_question_no}}</button>\n                                    <i *ngIf=\"item.answer_status && item.answer_status != '0' && item.answer_status != '1' && item.answer_status != '4'\"\n                                       class=\"fa fa-2x fa-check-circle color-green align-self-center ml-2\"></i>\n                                    <i *ngIf=\"item.answer_status == '1'\"\n                                       class=\"fa fa-2x fa-times-circle color-red align-self-center ml-2\"></i>\n                                </div>\n                                <div *ngIf=\"item.question_type_id == '40'\" class=\"col-md-6\">\n                                    <button (click)=\"openGraph($event, i, j, item)\"\n                                            class=\"btn btn-outline-primary pull-right\">answer graph\n                                    </button>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"mt-4\">\n                                        <div *ngIf=\"item.question != ''\" [innerHTML]=\"item.question | sanitizeHtml\"\n                                             class=\"mb-0 overflow-auto div-disable\" id=\"{{'questionId'}}\"></div>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 1\">\n                                        <div [ngClass]=\"{'div-disable': getData.student_content_status != '1' && getData.student_content_status != '2'}\"\n                                             class=\"row mb-2\">\n                                            <span (click)=\"getChooseAns(k, i, j)\"\n                                                  *ngFor=\"let option of item.array; let k = index\"\n                                                  [ngClass]=\"{'selectColor' : option.trim().toLowerCase() === item.given_answer.trim().toLowerCase() }\"\n                                                  class=\"multichoice-option1\">{{option}}</span>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 3\"\n                                         [ngClass]=\"{'div-disable': getData.student_content_status != '1' && getData.student_content_status != '2'}\"\n                                         class=\"d-flex\">\n                                        <div [ngClass]=\"{'student-selected': item.given_answer == 'true'}\"\n                                             class=\"d-flex align-items-center px-3 py-2\">\n                                            <input (click)=\"getTrueAns('true', i , j)\"\n                                                   [checked]=\"item?.given_answer == 'true'\"\n                                                   class=\"radio-size cursor form-control mr-2\"\n                                                   id=\"true{{j}}\" name=\"ans{{j}}\" type=\"radio\" value=\"true\">\n                                            <label class=\"mb-0 cursor\" for=\"true{{j}}\">True</label>\n                                        </div>\n                                        <div [ngClass]=\"{'student-selected': item.given_answer == 'false'}\"\n                                             class=\"d-flex align-items-center ml-2 px-3 py-2\">\n                                            <input (click)=\"getTrueAns('false', i , j)\"\n                                                   [checked]=\"item?.given_answer == 'false'\"\n                                                   class=\"radio-size cursor form-control mr-2\"\n                                                   id=\"false{{j}}\" name=\"ans{{j}}\" type=\"radio\" value=\"false\">\n                                            <label class=\"mb-0 cursor\" for=\"false{{j}}\">False</label>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 9\"\n                                         [ngClass]=\"{'div-disable': getData.student_content_status != '1' && getData.student_content_status != '2'}\">\n                                        <div (click)=\"getDropdownAns(k, i, j)\"\n                                             *ngFor=\"let option of item.mob_options; let k = index\"\n                                             [ngClass]=\"{'student-selected': option == item.given_answer}\"\n                                             class=\"dropdown-list col-md-{{showpdf == true ? 12 : 5}} mb-2 p-2\">\n                                            <span>{{option}}</span></div>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 10\" class=\"col-md-12 mt-4 px-0\">\n                                    <textarea (input)=\"getInputAns($event, i, j)\"\n                                              [readOnly]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                              [value]=\"item.given_answer\"\n                                              class=\"form-control mt-2 col-md-{{showpdf == true ? 12 : 5}}\"\n                                              placeholder=\"Enter answer here\" rows=\"2\"\n                                    ></textarea>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 20\" class=\"col-md-12 mt-4 px-0\">\n                                        <textarea (input)=\"getInputAns($event, i, j)\"\n                                                  [readOnly]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                                  [value]=\"item.given_answer\" class=\"form-control\" cols=\"30\"\n                                                  rows=\"8\"></textarea>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 30\" class=\"col-md-12 mt-2 px-0\">\n                                        <app-tiny-mice (emitEditorValue)=\"getNumericAnswerValue($event, i, j)\"\n                                                       *ngIf=\"hideRuleAnswer[i]?.section[j]\"\n                                                       [editorPatchValue]=\"item.given_answer == '' ? false : item.given_answer\"\n                                                       [height]=\"250\"\n                                                       [id]=\"i+'giveAns'+j\"\n                                                       [readonly]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                                       [showDropBtn]=\"false\"\n                                                       [showInputBtn]=\"false\"\n                                                       class=\"mt-2\">\n                                        </app-tiny-mice>\n                                        <div class=\"d-flex justify-content-start\">\n                                            <button (click)=\"setAnswer(i, j)\"\n                                                    *ngIf=\"!hideRuleAnswer[i]?.section[j] && item.question_type_id == 30 && item.given_answer == ''\"\n                                                    [disabled]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                                    class=\"btn-sm mb-1 btn-outline-primary mr-2\">Add Answer\n                                            </button>\n                                            <button (click)=\"setAnswer(i, j)\"\n                                                    *ngIf=\"!hideRuleAnswer[i]?.section[j] && item.question_type_id == 30 && item.given_answer != ''\"\n                                                    [disabled]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                                    class=\"btn-sm mb-1 btn-outline-primary mr-2\">Edit Answer\n                                            </button>\n                                            <!--                                            <button (click)=\"submitAnswer(item.given_answer1 , i ,j)\" *ngIf=\"hideRuleAnswer[i].section[j] && item.question_type_id == 30\"-->\n                                            <!--                                                    [disabled]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"-->\n                                            <!--                                                    class=\"btn-sm mb-1 btn-outline-primary mr-2\">Submit Answer</button>-->\n                                        </div>\n                                        <div *ngIf=\"!hideRuleAnswer[i].section[j]\"\n                                             class=\"d-flex mt-2 ml-2 justify-content-start\">\n                                            <div class=\"flex-column\" style=\"overflow-y: auto;\">\n                                                <p style=\"margin-bottom: 0;\">Answer :</p>\n                                                <span *ngIf=\"!hideRuleAnswer[i].section[j] && item.given_answer != ''\"\n                                                      [innerHTML]=\"item.given_answer | sanitizeHtml\" class=\"\"\n                                                      style=\"overflow-y: auto;\"></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <!--                                <div *ngIf=\"item.question_type_id == '40'\">-->\n                                    <!--                                    <app-graph-component [editMode]=\"false\"-->\n                                    <!--                                                         [editPatchValue]=\"false\"-->\n                                    <!--                                                         [graphId]=\"'previewGraph'\"-->\n                                    <!--                                                         [questionType]=\"'40'\"></app-graph-component>-->\n                                    <!--                                </div>-->\n                                    <div *ngIf=\"item.question_type_id == 54\" class=\"col-md-12 mt-4 px-0\">\n                                        <div *ngFor=\"let opt of item.answer; let k = index\">\n                                        <textarea (input)=\"getBlanksValue($event, k, i, j)\"\n                                                  [readOnly]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                                  [value]=\"item.given_answer[k] ? item.given_answer[k] : ''\"\n                                                  class=\"form-control mb-2\" placeholder=\"Enter input-{{k+1}} answer\"\n                                                  rows=\"2\"\n                                        ></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"item.question_type_id != '40'\" class=\"row mt-3 d-flex\">\n                                <div class=\"col-md-12\">\n                                    <button [attr.aria-controls]=\"'#queries' + j + 'id' + i\"\n                                            [attr.data-target]=\"'#queries' + j + 'id' + i\"\n                                            [disabled]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                            aria-expanded=\"false\" class=\"btn-sm btn-outline-primary mr-2\"\n                                            data-toggle=\"collapse\">Feedback\n                                    </button>\n                                    <button (click)=\"toggle(i , j)\" class=\"btn-sm btn-outline-primary mr-2\">work space\n                                    </button>\n                                    <button (click)=\"openWorkArea(item, i, j)\" class=\"btn-sm mb-1 btn-outline-primary\"\n                                            title=\"Work Area\">Work area\n                                    </button>\n                                    <button *ngIf=\"item.question_type_id == '20'\" (click)=\"expandFullScreen(item, i, j)\"\n                                            class=\"btn-sm mb-1 btn-outline-primary\" style=\"width: 30px;\"\n                                            title=\"Expand Editor\"><i aria-hidden=\"true\" class=\"fa fa-expand\"></i>\n                                    </button>\n                                    <button (click)=\"expandFullScreen(item, i, j)\"\n                                            *ngIf=\"item.question_type_id == '30' && hideRuleAnswer[i].section[j]\"\n                                            class=\"btn-sm mb-1 btn-outline-primary mr-2\" style=\"width: 30px;\"\n                                            title=\"Expand Editor\"><i aria-hidden=\"true\" class=\"fa fa-expand\"></i>\n                                    </button>\n                                </div>\n                            </div>\n                            <div *ngIf=\"item.question_type_id != '40'\" class=\"row mt-3 mb-3\">\n                                <div class=\"col-md-12 collapse\" id=\"queries{{j}}id{{i}}\">\n                                    <textarea (input)=\"getQueries($event, i, j, 'pdf')\" [value]=\"item.student_feedback\"\n                                              class=\"form-control\" placeholder=\"Feedback\" rows=\"3\"></textarea>\n                                </div>\n                            </div>\n                            <div *ngIf=\"item.question_type_id != '40'\" class=\"row mt-3 d-flex\">\n                                <div class=\"col-md-12\">\n                                    <button (click)=\"submitQueries(i, j, 'pdf')\"\n                                            *ngIf=\"queries != '' && queriesIndex == j+'id'+i\"\n                                            class=\"btn-sm btn-primary mr-2 {{env.deviceType() ? 'border-radius-5' : ''}}\">\n                                        Submit\n                                    </button>\n                                </div>\n                            </div>\n                            <div *ngIf=\"item.question_type_id != '40'\" class=\"row mt-3 mb-3\">\n                                <div *ngIf=\"this.hideRuleContent[i]?.section[j] == true\" class=\"col-md-12\"\n                                     id=\"workspace{{j}}id{{i}}\">\n                                    <app-tiny-mice (emitEditorValue)=\"getNumericWorkSpaceValue($event, i, j)\"\n                                                   *ngIf=\"this.hideRuleContent[i].section[j] == true\"\n                                                   [editorPatchValue]=\"item.student_roughdata\"\n                                                   [height]=\"250\"\n                                                   [id]=\"i+'workspace'+j\"\n                                                   [readonly]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                                   [showDropBtn]=\"false\"\n                                                   [showInputBtn]=\"false\">\n                                    </app-tiny-mice>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12 mt-3 card p-4\">\n                <textarea [(ngModel)]=\"totalFeedBack\"\n                          [readOnly]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                          class=\"form-control\" cols=\"30\" placeholder=\"Overall Feedback\" rows=\"5\"></textarea>\n            </div>\n        </div>\n        <!--        <div *ngIf=\"this.questionData.answers.length == 0\" class=\"col-12\">-->\n        <!--            <div class=\"col-md-12 mt-3 card p-4\">-->\n        <!--                <textarea [(ngModel)]=\"totalFeedBack\" [readOnly]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\" class=\"form-control\" cols=\"30\" placeholder=\"Overall Feedback\" rows=\"5\"></textarea>-->\n        <!--            </div>-->\n        <!--        </div>-->\n    </div>\n\n    <section *ngIf=\"!showpdf\" class=\"content-card row\" [ngStyle]=\"{ 'max-height': totalContentMaxHeight}\">\n        <div class=\"{{isSingleQnsWithFeedbackType && previousFeedBack.length != 0 && !feedbackExpanded ? 'col-6 pr-0' : 'col-12'}}\">\n\n            <div class=\"content-card\" [ngStyle]=\"{ 'max-height': contentMaxHeight}\" >\n\n                <div class=\"content-card row view-question px-3 {{['1', '2', '5', '7', '9', '16', '40', '41'].includes(item.question_type_id) ? 'justify-content-center' : ''}}\" *ngFor=\"let item of totalAns; let i = index; let last = last\">\n\n                    <div class=\"col-6 px-0\"\n                         *ngIf=\"showQuestion == i && ['10', '20', '24', '28'].indexOf(item.question_type_id) > -1 && !isSingleQnsWithFeedbackType\">\n                        <div class=\"card p-4 mb-0\" style=\"min-height: 67vh !important;\">\n                            <div class=\"card-body\">\n                                <div class=\"row\" [ngClass]=\"{'math' : getData?.is_test == '1' && ['math', 'maths'].includes(getData?.subject.toLowerCase())\n                                            , 'rw' : !(getData?.is_test == '1' && ['math', 'maths'].includes(getData?.subject.toLowerCase()))}\">\n                                    <div class=\"col-12\" *ngIf=\"['10', '20', '28'].indexOf(item.question_type_id) > -1\">\n\n                                        <div class=\"cfs\" style=\"font-size: 14px;letter-spacing: .5px;color: #313131\">\n                                            <div>For <strong>student-produced response questions</strong>, solve each problem and write your answer next to or under the question in the test book as described below:</div>\n\n                                            <ul style=\"list-style-type: disc; padding-left: 20px;\">\n                                                <li>If you find <strong>more than one correct answer</strong>, enter only one answer.</li>\n                                                <li>Your answer can be up to 5 characters for a <strong>positive</strong> answer and up to 6 characters (including the negative sign) for a <strong>negative</strong> answer.</li>\n                                                <li>If your answer is a <strong>fraction</strong> that doesn't fit in the provided space, enter the decimal equivalent.</li>\n                                                <li>If your answer is a <strong>decimal</strong> that doesn't fit in the provided space, enter it by truncating or rounding at the fourth digit.</li>\n                                                <li>If your answer is a <strong>mixed number</strong> (such as 3\u00BD), enter it as an improper fraction (7/2) or its decimal equivalent (3.5).</li>\n                                                <li>Don't enter <strong> symbols </strong> such as a percent sign, comma, or dollar sign.</li>\n                                            </ul><br>\n\n                                            <div>Examples:</div><br>\n                                            <table border=\"1\" cellspacing=\"0\" cellpadding=\"10\" style=\"border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px; text-align: center;\">\n                                                <thead style=\"background-color: #f2f2f2;\">\n                                                <tr>\n                                                    <th>Answer</th>\n                                                    <th>Acceptable ways to enter answer</th>\n                                                    <th>Unacceptable: will NOT receive credit</th>\n                                                </tr>\n                                                </thead>\n                                                <tbody>\n                                                <tr>\n                                                    <td>3.5</td>\n                                                    <td>3.5</td>\n                                                    <td>31/2</td>\n                                                </tr>\n                                                <tr>\n                                                    <td></td>\n                                                    <td>3.50</td>\n                                                    <td>3 1/2</td>\n                                                </tr>\n                                                <tr>\n                                                    <td></td>\n                                                    <td>7/2</td>\n                                                    <td></td>\n                                                </tr>\n                                                <tr>\n                                                    <td>2/3</td>\n                                                    <td>2/3</td>\n                                                    <td></td>\n                                                </tr>\n                                                <tr>\n                                                    <td></td>\n                                                    <td>.6666</td>\n                                                    <td>0.66</td>\n                                                </tr>\n                                                <tr>\n                                                    <td></td>\n                                                    <td>.6667</td>\n                                                    <td>.66</td>\n                                                </tr>\n                                                <tr>\n                                                    <td></td>\n                                                    <td>0.666</td>\n                                                    <td>0.67</td>\n                                                </tr>\n                                                <tr>\n                                                    <td></td>\n                                                    <td>0.667</td>\n                                                    <td>.67</td>\n                                                </tr>\n                                                <tr>\n                                                    <td>-1/3</td>\n                                                    <td>-1/3</td>\n                                                    <td></td>\n                                                </tr>\n                                                <tr>\n                                                    <td></td>\n                                                    <td>-.3333</td>\n                                                    <td>-.33</td>\n                                                </tr>\n                                                <tr>\n                                                    <td></td>\n                                                    <td>-0.333</td>\n                                                    <td>-0.33</td>\n                                                </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-12 mt-3\" *ngIf=\"item.question_type_id == '24'\">\n                                        <div class=\"ml-2 cfs editor_bullet\" *ngIf=\"item.subQuestions[0]?.passage && item.subQuestions[0]?.passage != ''\">\n                                            <span [innerHTML]=\"item.subQuestions[0]?.passage | sanitizeHtml\"></span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"px-0 mb-2 {{isSingleQnsWithFeedbackType ? 'col-md-12' : ['10', '20', '24', '28'].indexOf(item.question_type_id) > -1 ? 'col-md-6' : 'col-md-8'}}\" *ngIf=\"showQuestion == i\">\n                        <div class=\"container-fluid {{totalAns.length == 1 && totalAns[0]?.question_type_id != '55' || ['10', '20', '24', '28'].indexOf(item.question_type_id) > -1\n                  ? 'pl-2 pr-0' : 'px-0'}}\">\n\n                            <div *ngIf=\"(checkQuestionId(item)?.is_correct == 'true' || checkQuestionId(item)?.is_correct == 'false' || !correctAnswer) && getData?.is_test != '1'\">\n                                <div class=\"alert alert-{{checkQuestionId(item)?.is_correct == 'false'|| !correctAnswer ? 'danger' : 'success'}} alert-dismissible fade show\">\n                                    <strong> {{checkQuestionId(item)?.is_correct == 'false' || !correctAnswer ? 'You have entered Incorrect Answer !' : 'Great Response ! You have entered Correct Answer'}}</strong>\n                                    .\n                                </div>\n                            </div>\n                            <div class=\"card p-4\">\n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 col-md-12\">\n                                            <div class=\"row\" [ngClass]=\"{'math' : getData?.is_test == '1' && ['math', 'maths'].includes(getData?.subject.toLowerCase())\n                                            , 'rw' : !(getData?.is_test == '1' && ['math', 'maths'].includes(getData?.subject.toLowerCase()))}\">\n                                                <div class=\"col-12 d-flex align-items-center px-0 justify-content-between\" style=\"background: #dedede9e\">\n                                                    <div class=\"d-flex\">\n                                                        <button class=\"button_design btn-primary\">{{i + 1}}</button>\n                                                        <div class=\"d-flex align-items-center\" *ngIf=\"!checkDisableConditionForQns(item)\">\n                                                            <i *ngIf=\"!item.markedAsReview\" (click)=\"item.markedAsReview = true\" title=\"Review\"\n                                                               style=\"font-size: 22px; margin-left: 10px\" class=\"color-primary fa fa-bookmark-o cursor\"></i>\n                                                            <span *ngIf=\"!item.markedAsReview\" (click)=\"item.markedAsReview = true\"  class=\"ml-1 color-primary cursor\" style=\"font-size: 12px\">- Mark For Review</span>\n                                                            <img *ngIf=\"item.markedAsReview\" (click)=\"item.markedAsReview = false\" title=\"Marked For Review\"\n                                                                 style=\"width: 20px; margin-left: 10px\" class=\"cursor\" alt=\"Review Marked\" src=\"assets/images/bookmark_checked.webp\">\n                                                            <span *ngIf=\"item.markedAsReview\" (click)=\"item.markedAsReview = false\"  class=\"ml-1 color-primary cursor\" style=\"font-size: 12px\">- Marked For Review</span>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"px-0 pdf-assign-btn d-flex align-items-center justify-content-end\">\n                                                        <div [ngStyle]=\"{'visibility': getData.student_content_status != '1' && getData.student_content_status != '2'\n                                                            ? 'unset' : 'hidden'}\" class=\"row my-0 mx-2 justify-content-center\">\n                                                            <h4 style=\"font-size: 18px\" class=\"mb-0\" *ngIf=\"getElapsedTime() as elapsed\"><b>{{elapsed.minutes}}</b></h4>\n                                                            <h4 class=\"mb-0 font-weight-bold mx-1\">:</h4>\n                                                            <h4 style=\"font-size: 18px\" class=\"mb-0\" *ngIf=\"getElapsedTime() as elapsed\"><b>{{elapsed.seconds}}</b></h4>\n                                                        </div>\n                                                        <i [title]=\"feedbackExpanded ? 'Collapse Question' : 'Expand Question'\" class=\"fa {{feedbackExpanded ? 'fa-compress' : 'fa-expand'}} expand_collapse_design\"\n                                                           (click)=\"feedbackExpanded = !feedbackExpanded\" *ngIf=\"isSingleQnsWithFeedbackType && previousFeedBack.length != 0\"></i>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"col-12 mt-4\" *ngIf=\"item.question != '' && item.question_type_id == 55\">\n                                                    <div class=\"cfs editor_bullet\">\n                                                        <p class=\"overflow-auto pl-2\" [innerHTML]=\"convertMarkdownToHtml(item.question)\"></p>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"col-12 mt-4\" *ngIf=\"item.question_type_id == '24' && item.subQuestions[0]?.question != ''\">\n                                                    <div class=\"ml-2 cfs editor_bullet\" *ngIf=\"item.subQuestions[0]?.question && item.subQuestions[0]?.question != ''\">\n                                                        <span style=\"color: #777;font-size: 13px;\" [innerHTML]=\"item.subQuestions[0]?.question | sanitizeHtml\"></span>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"cfs mt-4 editor_bullet\" *ngIf=\"item.question != '' && item.question_type_id != 24 && item.question_type_id != 55\">\n                                                    <b><h3 [innerHTML]=\"item.question | sanitizeHtml\" class=\"mb-0 pl-3\"></h3></b>\n                                                </div>\n\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-md-12\" [ngClass]=\"{'math' : getData?.is_test == '1' && ['math', 'maths'].includes(getData?.subject.toLowerCase())\n                                            , 'rw' : !(getData?.is_test == '1' && ['math', 'maths'].includes(getData?.subject.toLowerCase()))}\">\n                                            <div *ngIf=\"item.question_type_id == 1 || item.question_type_id == 2\"\n                                                 [ngClass]=\"{'div-disable': checkDisableConditionForQns(item)}\">\n                                                <div class=\"col-md-12 mb-2 px-2\">\n                                                    <div (click)=\"option.eliminated ? '' : cfsGetMultiChoice(i, k, item)\" [ngClass]=\"{'student-selected' : k.toString() == option.isSelected}\"\n                                                         *ngFor=\"let option of item.given_answer; let k = index\"\n                                                         class=\"{{option.eliminated ? '' : 'cursor'}} overflow-auto row my-3 mx-0 p-2\"\n                                                         style=\"max-height: 20rem\">\n                                                        <button [ngClass]=\"{'disabled': option.eliminated}\" class=\"btn-primary inner_button\">{{((k+1) + 9).toString(36).toUpperCase()}}</button>\n                                                        <div class=\"col-11 pr-0 cfs align-self-center\">\n                                                    <span [ngClass]=\"{'eliminated-option': option.eliminated}\">\n                                                        <span [innerHTML]=\"option.options | sanitizeHtml\" class=\"math-content remove-margin-bottom\"></span>\n                                                    </span>\n                                                        </div>\n\n                                                        <div class=\"pl-2 align-self-center cursor\" (click)=\"toggleEliminator($event, item, k)\" *ngIf=\"['1', '2'].includes(getData.student_content_status) && !(k.toString() == option.isSelected)\">\n                                                            <i *ngIf=\"!option.eliminated\" title=\"Strike out the option\" class=\"eliminator fas fa-strikethrough\"></i>\n                                                            <i *ngIf=\"option.eliminated\" title=\"Undo the strike out\" class=\"fa fa-undo\"></i>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n\n                                            <div *ngIf=\"item.question_type_id == 5 || item.question_type_id == 7\"\n                                                 [ngClass]=\"{'div-disable': checkDisableConditionForQns(item)}\"\n                                                 class=\"mt-4 px-3 table-flexible\">\n                                                <table class=\"table table-bordered text-center\">\n                                                    <thead>\n                                                    <tr>\n                                                        <th>Questions</th>\n                                                        <th *ngFor=\"let list of item.answer; let k=index\"\n                                                            [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\"\n                                                            id=\"{{'columnId' + i}}\"></th>\n                                                    </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                    <tr *ngFor=\"let list of item.given_answer; let j=index\">\n                                                        <td [innerHTML]=\"list.options | sanitizeHtml\"\n                                                            class=\"remove-margin-bottom\"></td>\n                                                        <td *ngFor=\"let ans of item.answer; let k=index\">\n                                                            <input (click)=\"cfsGetChooseTable(item, i, j, k)\"\n                                                                   *ngIf=\"item.question_type_id == '5'\"\n                                                                   [checked]=\"this.totalAns[i].given_answer[j].isSelected == '' ? false : this.totalAns[i].given_answer[j].isSelected == k.toString()\"\n                                                                   class=\"cursor radio_animated\" id=\"{{j}}chooseSingle{{i}}\"\n                                                                   name=\"{{i}}choosesingle{{j}}corect\" type=\"radio\">\n                                                            <input (click)=\"cfsGetChooseTable(item, i, j, k)\"\n                                                                   *ngIf=\"item.question_type_id == '7'\"\n                                                                   [checked]=\"splitMultiChoose(this.totalAns[i].given_answer[j].isSelected, k)\"\n                                                                   id=\"{{j}}chooseMulti{{i}}\" class=\"cursor\" type=\"checkbox\">\n                                                        </td>\n                                                    </tr>\n                                                    </tbody>\n                                                </table>\n                                            </div>\n\n                                            <div *ngIf=\"item.question_type_id == 9\" class=\"mt-4\"\n                                                 [ngClass]=\"{'div-disable': checkDisableConditionForQns(item)}\">\n                                                <div *ngFor=\"let data of item.given_answer; let j = index\" class=\"col-md-12 mt-3 mb-3\">\n                                                    <label>Dropdown - {{j + 1}}</label>\n                                                    <div class=\"col-md-11 dropdown\">\n                                                        <button type=\"button\" [id]=\"i + 'dropdown' + j\"\n                                                                [innerHTML]=\"data.isSelected === '' ? 'Select Answer' : data.options[data.isSelected].correctAnswer | sanitizeHtml\"\n                                                                class=\"col-md-12 bg-white innerhtml-margin-clear p-2 dropdown-border dropdown-toggle d-flex justify-content-between\"\n                                                                data-toggle=\"dropdown\"></button>\n                                                        <div class=\"col-md-11 dropdown-menu\">\n                                                    <span (click)=\"cfsGetDropdown($event, i, j, '', 'Select Answer')\"\n                                                          class=\"dropdown-item dropdown-link cursor\">Select Answer</span>\n                                                            <span (click)=\"cfsGetDropdown($event, i, j, k, list.listOption)\"\n                                                                  *ngFor=\"let list of data.options; let k = index\"\n                                                                  [innerHTML]=\"list.listOption | sanitizeHtml\" style=\"overflow: scroll; overflow-y: hidden\"\n                                                                  class=\"dropdown-item dropdown-link innerhtml-margin-clear\"></span>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n\n                                            <div *ngIf=\"item.question_type_id == 10\" class=\"mt-4\"\n                                                 [ngClass]=\"{'div-disable': checkDisableConditionForQns(item)}\">\n                                                <div *ngFor=\"let data of item.given_answer; let j = index\"\n                                                     class=\"col-md-6 mt-3 mb-3\">\n                                                    <label>Input - {{j + 1}}</label>\n                                                    <input (input)=\"cfsGetInput($event, i, j, item)\" *ngIf=\"item.editor_type == 1\"\n                                                           placeholder=\"Enter the Answer\"\n                                                           [readOnly]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                                           [value]=\"data.isSelected\" class=\"form-control\" type=\"text\">\n                                                    <app-tiny-mice (emitEditorValue)=\"cfsGetInput($event, i, j, item)\"\n                                                                   *ngIf=\"item.editor_type != 1\"\n                                                                   [editorPatchValue]=\"data.isSelected == '' ? false : data.isSelected\"\n                                                                   [height]=\"100\"\n                                                                   [id]=\"i+'input'+j\"\n                                                                   [readonly]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                                                   [showDropBtn]=\"false\"\n                                                                   [showInputBtn]=\"false\"\n                                                                   class=\"mt-2\">\n                                                    </app-tiny-mice>\n                                                </div>\n                                            </div>\n\n                                            <div *ngIf=\"item.question_type_id == 16\" class=\"mt-4\"\n                                                 [ngClass]=\"{'div-disable': checkDisableConditionForQns(item)}\">\n                                                <div class=\"col-md-12\">\n                                                    <div (cdkDropListDropped)=\"droppedCorrect($event, i)\" cdkDropList\n                                                         class=\"col-12\">\n                                                        <div *ngFor=\"let list of item.given_answer; let k=index\"\n                                                             class=\"input-group mb-3 mt-3 inputMenu\">\n                                                            <div cdkDrag class=\"input-group mb-1 inputMenu\">\n                                                                <div class=\"input-group-prepend\">\n                                                            <span class=\"input-group-text px-0 py-1\">\n                                                                <img class=\"img-fluid\" src=\"assets/images/pdf-icons/equal@2x.png\" alt=\"\">\n                                                            </span>\n                                                                </div>\n                                                                <h4 style=\"min-height: 46px\" [innerHTML]=\"list.options | sanitizeHtml\"\n                                                                    class=\"form-control mb-0 overflow-auto align-content-center\"></h4>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n\n                                            <div *ngIf=\"['20'].indexOf(item.question_type_id) > -1\" class=\"mt-4 px-3 mb-3\"\n                                                 [ngClass]=\"{'div-disable': checkDisableConditionForQns(item)}\">\n                                                <app-tiny-mice (emitEditorValue)=\"cfsGetPara($event, i)\"\n                                                               [editorPatchValue]=\"item.given_answer[0].isSelected == '' ? false : item.given_answer[0].isSelected\"\n                                                               [height]=\"120\"\n                                                               [id]=\"i+'para'\"\n                                                               [readonly]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                                               [showDropBtn]=\"false\"\n                                                               [showInputBtn]=\"false\"\n                                                               class=\"mt-2\">\n                                                </app-tiny-mice>\n                                            </div>\n\n                                            <div class=\"mt-4 row\" *ngIf=\"['55'].indexOf(item.question_type_id) > -1\">\n                                                <!--                                        <div class=\"pl-0 col-3\" *ngIf=\"previousFeedBack.length != 0\">-->\n                                                <!--                                            <div class=\"col-12 sidebar-widget\">-->\n                                                <!--                                                <h5 class=\"font-weight-bold\">Version History</h5>-->\n                                                <!--                                                <ul class=\"widget-post pt-15\">-->\n                                                <!--                                                    <li (click)=\"feedbackSelected('current')\" *ngIf=\"!feedbackServiceCalled\" [ngClass]=\"{'active': selectedFeedBackIndex === ''}\">-->\n                                                <!--                                                        <a>Current Version</a>-->\n                                                <!--                                                    </li>-->\n                                                <!--                                                    <li *ngFor=\"let feedback of previousFeedBack; let i = index\" [ngClass]=\"{'active': selectedFeedBackIndex === previousFeedBack.length - i}\"-->\n                                                <!--                                                        (click)=\"feedbackSelected(feedback)\">-->\n                                                <!--                                                        <a class=\"d-flex align-items-center justify-content-between\">-->\n                                                <!--                                                            <h5 class=\"mb-0 d-inline-flex\" [ngClass]=\"{'color-primary': selectedFeedBackIndex === previousFeedBack.length - i}\"-->\n                                                <!--                                                                style=\"font-size: 14px\">Version {{previousFeedBack.length - i}}-->\n                                                <!--                                                                <span class=\"badge badge-info ml-2\">{{feedback?.student_score}} / {{feedback?.total_score}}</span>-->\n                                                <!--                                                            </h5>-->\n                                                <!--                                                            <span class=\"badge\" [ngClass]=\"{'badge-exceptional': getFeedbackLabel(feedback).label === 'Exceptional', 'badge-good': getFeedbackLabel(feedback).label === 'Good',-->\n                                                <!--                                                                'badge-improve': getFeedbackLabel(feedback).label === 'Improve'}\">{{getFeedbackLabel(feedback).label}}</span></a>-->\n                                                <!--                                                    </li>-->\n                                                <!--                                                </ul>-->\n                                                <!--                                            </div>-->\n                                                <!--                                            <div class=\"col-12 resource-link-card mt-3\" *ngIf=\"previousFeedBack.length < maximumAllowedCount\">-->\n                                                <!--                                                <span class=\"text-info\">You can use Request For Feedback<strong>&nbsp;{{maximumAllowedCount - previousFeedBack.length}}&nbsp;</strong>more times!</span>-->\n                                                <!--                                            </div>-->\n                                                <!--                                        </div>-->\n\n                                                <div class=\"text-area col-12 {{isSingleQnsWithFeedbackType ? 'pl-4' : ''}}\">\n                                                    <div class=\"d-flex justify-content-between\" id=\"essay_textarea\">\n                                                        <div class=\"col-6 px-0\">\n                                                            <h5 class=\"font-weight-bold\">\n                                                                <span *ngIf=\"reviseSelected != ''\">Current Version</span>\n                                                                <span *ngIf=\"reviseSelected == ''\">Version {{selectedFeedBackIndex}}</span>\n                                                            </h5>\n                                                        </div>\n                                                        <div class=\"col-6 px-0 mb-2\" *ngIf=\"previousFeedBack.length != 0\">\n                                                            <label class=\"label_design\">Select Version</label>\n                                                            <ng-select\n                                                                       [items]=\"previousFeedBack\"\n                                                                       bindLabel=\"version_name\"\n                                                                       bindValue=\"index\"\n                                                                       [clearable]=\"false\"\n                                                                       (change)=\"feedbackSelected($event)\"\n                                                                       [(ngModel)]=\"selectedVersion\"\n                                                                       placeholder=\"Please Select\"\n                                                            >\n                                                                <ng-template ng-option-tmp let-feedback=\"item\" let-index=\"index\">\n                                                                    <div class=\"d-flex align-items-center justify-content-between w-100\">\n                                                                        <div>\n                                                                            <h5 class=\"mb-0 d-inline-flex\" style=\"font-size: 14px\"\n                                                                                [ngClass]=\"{'color-primary': selectedFeedBackIndex === previousFeedBack.length - index}\">\n                                                                                Version {{ previousFeedBack.length - index }}\n                                                                                <span class=\"badge badge-info ml-2\" style=\"align-content: center; padding: 4px 8px\">\n                                                                        {{ feedback?.student_score }} / {{ feedback?.total_score }}\n                                                                    </span>\n                                                                            </h5>\n                                                                        </div>\n                                                                        <span class=\"badge\" [ngClass]=\"{'badge-exceptional':\n                                                                getFeedbackLabel(feedback).label === 'Exceptional','badge-good': getFeedbackLabel(feedback).label === 'Good',\n                                                                'badge-improve': getFeedbackLabel(feedback).label === 'Improve'}\">\n                                                                {{ getFeedbackLabel(feedback).label }}</span>\n                                                                    </div>\n                                                                </ng-template>\n                                                            </ng-select>\n                                                        </div>\n                                                    </div>\n                                                    <textarea class=\"form-control\" rows=\"{{previousFeedBack.length < maximumAllowedCount ? '24' : '21'}}\"\n                                                              [ngModel]=\"getEssayAnswer(item)\"\n                                                              (ngModelChange)=\"onEssayAnswerChange(item, $event)\"\n                                                              [readonly]=\"reviseSelected == '' || (getData.student_content_status != '1' && getData.student_content_status != '2')\"\n                                                              [ngModelOptions]=\"{standalone: true}\" placeholder=\"Please enter your answer\"></textarea>\n                                                    <div class=\"word-count\">\n                                                        <span class=\"mr-2\">{{wordCount(item)}}&nbsp;Words</span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"item.question_type_id == 24\" class=\"mt-{{item.subQuestions[0]?.question != '' ? '0' : '4'}}\"\n                                                 [ngClass]=\"{'div-disable': checkDisableConditionForQns(item)}\">\n                                                <div *ngFor=\"let sec of item.subQuestions; let j = index\" class=\"mb-3\">\n\n                                                    <div *ngIf=\"sec.question_type_id == 1 || sec.question_type_id == 2\"\n                                                         [ngClass]=\"{'div-disable': checkDisableConditionForQns(item)}\">\n                                                        <div [ngClass]=\"{'math' : getData?.is_test == '1' && ['math', 'maths'].includes(getData?.subject.toLowerCase())\n                                            , 'rw' : !(getData?.is_test == '1' && ['math', 'maths'].includes(getData?.subject.toLowerCase()))}\" class=\"col-md-12 mb-2 px-2\">\n                                                            <div (click)=\"option.eliminated ? '' : cfsPassageMultiChoice(i, j, k, sec)\" [ngClass]=\"{'student-selected' : option.isSelected == k.toString()}\"\n                                                                 *ngFor=\"let option of sec.given_answer; let k = index\"\n                                                                 class=\"{{option.eliminated ? '' : 'cursor'}} overflow-auto row my-3 mx-0 p-2\"\n                                                                 style=\"max-height: 20rem\">\n                                                                <button [ngClass]=\"{'disabled': option.eliminated}\" class=\"btn-primary inner_button\">{{((k+1) + 9).toString(36).toUpperCase()}}</button>\n                                                                <div class=\"col-11 pr-0 d-flex align-self-center justify-content-between\" style=\"overflow: hidden\">\n                                                            <span class=\"cfs\" [ngClass]=\"{'eliminated-option': option.eliminated}\">\n                                                                <span [innerHTML]=\"option.options | sanitizeHtml\" class=\"remove-margin-bottom\"></span>\n                                                            </span>\n                                                                    <span class=\"pl-2 align-self-center cursor\" (click)=\"toggleEliminator($event, sec, k)\" *ngIf=\"['1', '2'].includes(getData.student_content_status) && !(k.toString() == option.isSelected)\">\n                                                                <i *ngIf=\"!option.eliminated\" title=\"Strike out the option\" class=\"eliminator fas fa-strikethrough\"></i>\n                                                                <i *ngIf=\"option.eliminated\" title=\"Undo the strike out\" class=\"fa fa-undo\"></i>\n                                                            </span>\n                                                                </div>\n                                                                <!--                                                        <div class=\"pl-2 align-self-center cursor\" (click)=\"toggleEliminator($event, sec, k)\" *ngIf=\"['1', '2'].includes(getData.student_content_status) && !(k.toString() == option.isSelected)\">-->\n                                                                <!--                                                            <i *ngIf=\"!option.eliminated\" title=\"Strike out the option\" class=\"eliminator fas fa-strikethrough\"></i>-->\n                                                                <!--                                                            <i *ngIf=\"option.eliminated\" title=\"Undo the strike out\" class=\"fa fa-undo\"></i>-->\n                                                                <!--                                                        </div>-->\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div *ngIf=\"sec.question_type_id == '5' || sec.question_type_id == '7'\"\n                                                         class=\"table-flexible\">\n                                                        <table [ngClass]=\"{'div-disable': getData.student_content_status != '1' && getData.student_content_status != '2'}\"\n                                                               class=\"table px-3 table-bordered text-center mt-3 mb-3\">\n                                                            <thead>\n                                                            <tr>\n                                                                <th>Questions</th>\n                                                                <th *ngFor=\"let list of sec.answer; let l=index\"\n                                                                    [innerHTML]=\"list | sanitizeHtml\"\n                                                                    class=\"remove-margin-bottom\"></th>\n                                                            </tr>\n                                                            </thead>\n                                                            <tbody>\n                                                            <tr *ngFor=\"let list of sec.given_answer; let k=index\">\n                                                                <td [innerHTML]=\"list.options\" class=\"remove-margin-bottom\"></td>\n                                                                <td *ngFor=\"let ans of sec.answer; let l=index\">\n                                                                    <input (click)=\"cfsGetChooseTable(sec, j, k, l)\"\n                                                                           *ngIf=\"sec.question_type_id == '5'\"\n                                                                           [checked]=\"sec.given_answer[k].isSelected == '' ? false : sec.given_answer[k].isSelected == l.toString()\"\n                                                                           class=\"radio_animated\" name=\"{{i}}choose{{k}}passas{{j}}\"\n                                                                           type=\"radio\">\n                                                                    <input (click)=\"cfsGetChooseTable(sec, j, k, l)\"\n                                                                           *ngIf=\"sec.question_type_id == '7'\"\n                                                                           [checked]=\"splitMultiChoose(sec.given_answer[k].isSelected, l)\"\n                                                                           type=\"checkbox\">\n                                                                </td>\n                                                            </tr>\n                                                            </tbody>\n                                                        </table>\n                                                    </div>\n                                                    <div *ngIf=\"sec.question_type_id == '10'\">\n                                                        <div *ngFor=\"let data of sec.given_answer;let k = index\"\n                                                             class=\"col-md-6 mt-3 mb-3 px-1\">\n                                                            <label>Input - {{k + 1}}</label>\n                                                            <input (input)=\"cfsGetInput($event, j, k, sec)\"\n                                                                   *ngIf=\"sec.editor_type == 1\" placeholder=\"Enter the answer\"\n                                                                   [readOnly]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                                                   [value]=\"data.isSelected\" class=\"form-control\" type=\"text\">\n                                                            <app-tiny-mice (emitEditorValue)=\"cfsGetInput($event, j, k, sec)\"\n                                                                           *ngIf=\"sec.editor_type != 1\"\n                                                                           [editorPatchValue]=\"data.isSelected == '' ? false : data.isSelected\"\n                                                                           [height]=\"120\"\n                                                                           [id]=\"j+'inputPass'+k+'ssa'+i\"\n                                                                           [readonly]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                                                           [showDropBtn]=\"false\"\n                                                                           [showInputBtn]=\"false\"\n                                                                           class=\"mt-2\">\n                                                            </app-tiny-mice>\n                                                        </div>\n                                                    </div>\n                                                    <div *ngIf=\"sec.question_type_id == '20'\" class=\"mt-3 mb-2\">\n                                                        <app-tiny-mice (emitEditorValue)=\"cfsGetPassageEssay($event, j, sec)\"\n                                                                       [editorPatchValue]=\"sec.given_answer[0]?.isSelected == '' ? false : sec.given_answer[0]?.isSelected\"\n                                                                       [height]=\"200\"\n                                                                       [id]=\"j+'essayPass'\"\n                                                                       [readonly]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                                                       [showDropBtn]=\"false\"\n                                                                       [showInputBtn]=\"false\"\n                                                                       class=\"mt-2\">\n                                                        </app-tiny-mice>\n                                                    </div>\n                                                </div>\n                                            </div>\n\n                                            <div *ngIf=\"item.question_type_id == 28\" class=\"mt-4 px-3 mb-3\">\n                                                <app-tiny-mice (emitEditorValue)=\"cfsGetHighlight($event, i)\"\n                                                               [editorPatchValue]=\"item.given_answer[0]?.isSelected == '' ? item.options[0].options : item.given_answer[0]?.isSelected\"\n                                                               [height]=\"120\"\n                                                               [id]=\"i+'delta'\"\n                                                               [readonly]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                                               [showDropBtn]=\"false\"\n                                                               [showInputBtn]=\"false\"\n                                                               class=\"mt-2\">\n                                                </app-tiny-mice>\n                                            </div>\n                                            <div *ngIf=\"item.question_type_id == 40 || item.question_type_id == 41\"\n                                                 class=\"mt-4 mb-4\">\n                                                <div class=\"col-12 mt-0 d-flex justify-content-center\">\n                                                    <app-graph-component (valueChange)=\"cfsgetGraphValue($event, i)\"\n                                                                         [editMode]=\"getData.student_content_status == '1' || getData.student_content_status == '2'\"\n                                                                         [editPatchValue]=\"item.given_answer[0].correctAnswer ? parseVal(item.given_answer[0].correctAnswer) : false\"\n                                                                         [graphId]=\"'graphAnswering'+i\"\n                                                                         [questionType]=\"item.question_type_id\"></app-graph-component>\n                                                </div>\n                                                <div class=\"col-md-12 mt-2\">\n                                                    <app-tiny-mice (emitEditorValue)=\"cfsGetGraghEditor($event, i)\"\n                                                                   [editorPatchValue]=\"item.student_editor_answer == '' ? false : item.student_editor_answer\"\n                                                                   [height]=\"120\"\n                                                                   [id]=\"i+'explaino'\"\n                                                                   [readonly]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                                                   [showDropBtn]=\"false\"\n                                                                   [showInputBtn]=\"false\"\n                                                                   class=\"mt-2\">\n                                                    </app-tiny-mice>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"card w-100 mt-2\" *ngIf=\"((item.question_type_id != '24' && (item.is_correct == 'true' || item.is_correct == 'false')) ||\n                                    (item.question_type_id == '24' && (item.subQuestions[0]?.is_correct == 'true' || item.subQuestions[0]?.is_correct == 'false'))) && getData?.is_test != '1'\"\n                                             style=\"border: 1px solid #e8eaed\">\n                                            <div class=\"card-body\" [ngClass]=\"{'div-disable': checkDisableConditionForQns(item)}\">\n\n                                                <div class=\"col-md-12 px-0\" *ngIf=\"item.question_type_id == 1 || item.question_type_id == 2\">\n                                                    <label class=\"mb-0\"><strong>Correct Answer</strong></label>\n                                                    <div [ngClass]=\"{'correct_ans-selected' : option.correctAnswer != ''}\"\n                                                         *ngFor=\"let option of item.answer; let k = index\" style=\"max-height: 20rem\"\n                                                         class=\"{{option.correctAnswer != '' ? 'my-3 mx-2 p-2 cursor overflow-auto row' : ''}}\">\n                                                        <button *ngIf=\"option.correctAnswer != ''\" class=\"btn-primary inner_button\">{{((k+1) + 9).toString(36).toUpperCase()}}</button>\n                                                        <div class=\"col-11 pt-1 pr-0 cfs\" *ngIf=\"option.correctAnswer != ''\">\n                                                    <span [innerHTML]=\"item.options[k].options | sanitizeHtml\"\n                                                          class=\"remove-margin-bottom\"></span>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"col-md-12 my-4 px-0 table-flexible\" *ngIf=\"item.question_type_id == 5\n                                            || item.question_type_id == 7\">\n                                                    <label><strong>Correct Answer</strong></label>\n                                                    <table class=\"table table-bordered text-center div-disable\">\n                                                        <thead>\n                                                        <tr>\n                                                            <th>Questions</th>\n                                                            <th *ngFor=\"let list of item.answer; let k=index\"\n                                                                [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\"></th>\n                                                        </tr>\n                                                        </thead>\n                                                        <tbody>\n                                                        <tr *ngFor=\"let list of item.given_answer; let j=index\">\n                                                            <td [innerHTML]=\"list.options | sanitizeHtml\"\n                                                                class=\"remove-margin-bottom\"></td>\n                                                            <td *ngFor=\"let ans of item.answer; let k=index\">\n                                                                <input *ngIf=\"item.question_type_id == '5'\"\n                                                                       [checked]=\"item.heading_option[j].correctActive === k\"\n                                                                       class=\"radio_animated\"\n                                                                       name=\"{{i}}choosesingleCorrect{{j}}corect\" type=\"radio\">\n                                                                <input *ngIf=\"item.question_type_id == '7'\"\n                                                                       [checked]=\"patchCorrectMultiChoiceAnswer(item.heading_option, k , j)\"\n                                                                       id=\"chooseMultipass{{i}}{{j}}{{k}}\" type=\"checkbox\">\n                                                            </td>\n                                                        </tr>\n                                                        </tbody>\n                                                    </table>\n                                                </div>\n\n                                                <div class=\"col-md-12 px-0\" *ngIf=\"item.question_type_id == 9\">\n                                                    <label><b>Correct Answer</b></label>\n                                                    <div *ngFor=\"let data of item.answer; let j = index\" class=\"col-md-12 mt-2 mb-3\">\n                                                        <label>Dropdown - {{j + 1}}</label>\n                                                        <div class=\"col-md-11\">\n                                                            <div class=\"col-md-12 bg-white innerhtml-margin-clear p-2 dropdown-border dropdown-toggle d-flex justify-content-between\"\n                                                                 data-toggle=\"dropdown\" id=\"dropdown{{j}}\"></div>\n                                                            <div class=\"col-md-12 dropdown-menu\">\n                                                                <span class=\"dropdown-item dropdown-link overflow-auto\">Select Answer</span>\n                                                                <span *ngFor=\"let option of item.options; let k = index\"\n                                                                      [innerHTML]=\"option.listOption | sanitizeHtml\"\n                                                                      class=\"dropdown-item overflow-auto dropdown-link innerhtml-margin-clear\"></span>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"col-md-12 px-0\" *ngIf=\"item.question_type_id == 10\">\n                                                    <label><b>Correct Answer</b></label>\n                                                    <div *ngFor=\"let data of item.options; let j = index\"\n                                                         class=\"col-md-6 mt-3 mb-3\">\n                                                        <label>Input - {{j + 1}}</label>\n                                                        <div class=\"form-span\">\n                                                            <div [innerHTML]=\"data.options[0].value | sanitizeHtml\"></div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"col-md-12 px-0\" *ngIf=\"item.question_type_id == 16\">\n                                                    <label><b>Correct Answer</b></label>\n                                                    <div class=\"col-12\">\n                                                        <div *ngFor=\"let list of item.answer; let k=index\"\n                                                             class=\"input-group mb-3 mt-3 inputMenu\">\n                                                            <div cdkDrag class=\"input-group mb-1 inputMenu\">\n                                                                <div class=\"input-group-prepend\">\n                                                            <span class=\"input-group-text px-0 py-1\">\n                                                                <img class=\"img-fluid\" src=\"assets/images/pdf-icons/equal@2x.png\" alt=\"\">\n                                                            </span>\n                                                                </div>\n                                                                <h4 style=\"min-height: 46px\" [innerHTML]=\"list.correctAnswer | sanitizeHtml\"\n                                                                    class=\"form-control mb-0 overflow-auto align-content-center\"></h4>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"col-md-12 px-0\" *ngIf=\"['20'].indexOf(item.question_type_id) > -1\">\n                                                    <label><b>Correct Answer</b></label>\n                                                    <div *ngFor=\"let data of item.answer; let j = index\"\n                                                         class=\"col-md-6 mt-3 mb-3\">\n                                                        <label>Answer - {{j + 1}}</label>\n                                                        <div class=\"form-span\">\n                                                            <div [innerHTML]=\"data.correctAnswer | sanitizeHtml\"></div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                                <div *ngIf=\"item.question_type_id == 24\" class=\"col-md-12 px-0\">\n                                                    <div *ngFor=\"let sec of item.subQuestions; let j = index\" class=\"mb-3\">\n\n                                                        <div class=\"col-md-12 px-0\" *ngIf=\"sec.question_type_id == 1 || sec.question_type_id == 2\">\n                                                            <label class=\"mb-0\"><strong>Correct Answer</strong></label>\n                                                            <div [ngClass]=\"{'correct_ans-selected' : option.correctAnswer !== ''}\"\n                                                                 *ngFor=\"let option of sec.answer; let k = index\"\n                                                                 class=\"{{option.correctAnswer !== '' ? 'cursor overflow-auto row my-3 mx-0 p-2' : ''}}\"\n                                                                 style=\"max-height: 20rem\">\n                                                                <button *ngIf=\"option.correctAnswer != ''\" class=\"btn-primary inner_button\">{{((k+1) + 9).toString(36).toUpperCase()}}</button>\n                                                                <div *ngIf=\"option.correctAnswer !== ''\" class=\"col-11 pt-1 pr-0 cfs\">\n                                                            <span [innerHTML]=\"sec.options[k].options | sanitizeHtml\"\n                                                                  class=\"remove-margin-bottom\"></span>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n\n                                                        <div class=\"col-md-12 px-0 py-2 table-flexible\"\n                                                             *ngIf=\"sec.question_type_id == '5' || sec.question_type_id == '7'\">\n                                                            <label><strong>Correct Answer :</strong></label>\n                                                            <table class=\"table table-bordered text-center div-disable\">\n                                                                <thead>\n                                                                <tr>\n                                                                    <th>Questions</th>\n                                                                    <th *ngFor=\"let list of sec.answer; let k=index\"\n                                                                        [innerHTML]=\"list | sanitizeHtml\"\n                                                                        class=\"remove-margin-bottom\"></th>\n                                                                </tr>\n                                                                </thead>\n                                                                <tbody>\n                                                                <tr *ngFor=\"let list of sec.given_answer; let j=index\">\n                                                                    <td [innerHTML]=\"list.options | sanitizeHtml\"\n                                                                        class=\"remove-margin-bottom\"></td>\n                                                                    <td *ngFor=\"let ans of sec.answer; let k=index\">\n                                                                        <input *ngIf=\"sec.question_type_id == '5'\"\n                                                                               [checked]=\"sec.heading_option[j].correctActive === k\"\n                                                                               class=\"radio_animated\"\n                                                                               name=\"{{i}}choosesingleCorrect{{j}}corect\"\n                                                                               type=\"radio\">\n                                                                        <input *ngIf=\"sec.question_type_id == '7'\"\n                                                                               [checked]=\"patchCorrectMultiChoiceAnswer(sec.heading_option, k , j)\"\n                                                                               id=\"chooseMultipass{{i}}{{j}}{{k}}\" type=\"checkbox\">\n                                                                    </td>\n                                                                </tr>\n                                                                </tbody>\n                                                            </table>\n                                                        </div>\n\n                                                        <div class=\"col-md-12 px-0\" *ngIf=\"sec.question_type_id == '10'\">\n                                                            <label><b>Correct Answer</b></label>\n                                                            <div *ngFor=\"let data of sec.options; let j = index\"\n                                                                 class=\"col-md-6 mt-3 mb-3\">\n                                                                <label>Input - {{j + 1}}</label>\n                                                                <div class=\"form-span\">\n                                                                    <div [innerHTML]=\"data.options[0].value | sanitizeHtml\"></div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n\n                                                        <div class=\"col-md-12 px-0\" *ngIf=\"sec.question_type_id == '20'\">\n                                                            <label><b>Correct Answer</b></label>\n                                                            <div *ngFor=\"let data of sec.answer; let j = index\"\n                                                                 class=\"col-md-12 mt-3 mb-3\">\n                                                                <label>Answer - {{j + 1}}</label>\n                                                                <div class=\"form-span\">\n                                                                    <div [innerHTML]=\"data.correctAnswer | sanitizeHtml\"></div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n\n                                                    </div>\n                                                </div>\n\n                                            </div>\n                                        </div>\n\n                                        <div class=\"mt-2\" *ngIf=\"item.question_type_id != '24' && (item.is_correct == 'true' || item.is_correct == 'false') && getData?.is_test != '1'\">\n                                            <div class=\"col-md-12\" *ngIf=\"item.explanation != ''\">\n                                                <label class=\"mb-0\"><strong>Explanation</strong></label>\n                                                <div class=\"col-12 mt-2 editor_bullet\">\n                                                    <span [innerHTML]=\"item.explanation | sanitizeHtml\" class=\"remove-margin-bottom\"></span>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"col-md-12 mt-3\" *ngIf=\"item.resource != ''\">\n                                                <label class=\"mb-0\"><strong>Resource</strong></label>\n                                                <div class=\"col-12 mt-2 editor_bullet\">\n                                                    <span [innerHTML]=\"item.resource | sanitizeHtml\" class=\"remove-margin-bottom\"></span>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div *ngIf=\"item.question_type_id == '24' && getData?.is_test != '1'\">\n                                            <div *ngFor=\"let sec of item.subQuestions; let j = index\" class=\"mb-3\">\n                                                <div class=\"col-md-12\" *ngIf=\"(sec.is_correct == 'true' || sec.is_correct == 'false') && sec.explanation != ''\">\n                                                    <label class=\"mb-0\"><strong>Explanation</strong></label>\n                                                    <div class=\"col-12 mt-2\">\n                                                        <span [innerHTML]=\"sec.explanation | sanitizeHtml\" class=\"remove-margin-bottom\"></span>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-md-12 mt-3\" *ngIf=\"(sec.is_correct == 'true' || sec.is_correct == 'false') && sec.resource != ''\">\n                                                    <label class=\"mb-0\"><strong>Resource</strong></label>\n                                                    <div class=\"col-12 mt-2\">\n                                                        <span [innerHTML]=\"sec.resource | sanitizeHtml\" class=\"remove-margin-bottom\"></span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"row {{item.question_type_id == '55' ? 'mt-3' : ''}}\" *ngIf=\"(questionData.allow_workspace == '1' || questionData.allow_feedback == '1') && !isSingleQnsWithFeedbackType\">\n                                        <div class=\"col-md-12 {{item.question_type_id == '55' ? 'text-right pr-3' : 'px-0'}}\">\n                                            <button *ngIf=\"questionData.allow_workspace == '1'\" (click)=\"item.workspaceClicked = !item.workspaceClicked;item.feedBackClicked = false\"\n                                                    class=\"btn cancel\">{{isSingleQnsWithFeedbackType ? 'Cited Source' : 'WorkSpace'}}</button>\n                                            <button *ngIf=\"questionData.allow_feedback == '1' && !isSingleQnsWithFeedbackType\" (click)=\"item.feedBackClicked = !item.feedBackClicked;item.workspaceClicked = false\"\n                                                    class=\"btn cancel ml-2\">FeedBack</button>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"row mt-4\" *ngIf=\"isSingleQnsWithFeedbackType\" [ngbCollapse]=\"!item.workspaceClicked\">\n                                        <div class=\"col-12 px-2\">\n                                            <div class=\"card\">\n                                                <div class=\"card-header p-3 background_gradient\">\n                                                    <h5 style=\"color: white;font-size: 16px\" class=\"font-weight-bold\">Cited Source</h5>\n                                                </div>\n                                                <div class=\"card-body custom_feedback_card_body p-3\">\n                                                    <div class=\"col-12 px-0\">\n                                                        <app-tiny-mice (emitEditorValue)=\"getWorkSpaceValue($event, i)\"\n                                                                       [editorPatchValue]=\"item.PatchData && item.question_type_id != '24' ? item.student_roughdata :\n                                            item.PatchData && item.question_type_id == '24' ? item.subQuestions[0]?.student_roughdata :false\"\n                                                                       [height]=\"140\"\n                                                                       [readonly]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                                                       [showDropBtn]=\"false\"\n                                                                       [showInputBtn]=\"false\">\n                                                        </app-tiny-mice>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"row mt-3\" *ngIf=\"!isSingleQnsWithFeedbackType\" [ngbCollapse]=\"!item.workspaceClicked\">\n                                        <label><strong>WorkSpace:</strong></label>\n                                        <div class=\"col-12 px-0\">\n                                            <app-tiny-mice (emitEditorValue)=\"getWorkSpaceValue($event, i)\"\n                                                           [editorPatchValue]=\"item.PatchData && item.question_type_id != '24' ? item.student_roughdata :\n                                            item.PatchData && item.question_type_id == '24' ? item.subQuestions[0]?.student_roughdata :false\"\n                                                           [height]=\"140\"\n                                                           [readonly]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                                           [showDropBtn]=\"false\"\n                                                           [showInputBtn]=\"false\">\n                                            </app-tiny-mice>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"mt-3\" *ngIf=\"!isSingleQnsWithFeedbackType\" [ngbCollapse]=\"!item.feedBackClicked\">\n                                        <div class=\"row\">\n                                            <label><strong>FeedBack :</strong></label>\n                                            <div class=\"col-12 px-0\">\n                                <textarea (input)=\"getQueries($event, i, 0, 'scratch')\"\n                                          [readOnly]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                          [value]=\"item.question_type_id != '24' ? item.student_feedback : item.subQuestions[0]?.student_feedback\"\n                                          class=\"form-control\" cols=\"30\" placeholder=\"Please Enter the Feedback\"\n                                          rows=\"3\"></textarea>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row mt-3\" *ngIf=\"queries != '' && queriesIndex == 'id'+i\">\n                                            <div class=\"col-md-12\">\n                                                <button (click)=\"submitQueries(i, 0, 'scratch')\"\n                                                        class=\"pull-right btn btn-primary {{env.deviceType() ? 'border-radius-5' : ''}}\">\n                                                    Save\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"row mt-3\" *ngIf=\"feedbackListData.length != 0 && isSingleQnsWithFeedbackType\">\n                                    <div class=\"col-12\">\n                                        <div class=\"card-header p-3 background_gradient\">\n                                            <h5 style=\"color: white\">Overall FeedBack</h5>\n                                        </div>\n                                        <div class=\"card-body py-3 px-4 custom_feedback_card_body\">\n                                            <div class=\"row px-2\" *ngFor=\"let data of feedbackListData; let last = last\">\n                                                <div class=\"col-12 card class-card1 py-2 {{last ? 'mb-0' : 'mb-3'}}\">\n                                                    <h5 class=\"color-primary\">{{data.feedback}}</h5>\n                                                    <p style=\"font-size: 12px\" class=\"text-dark\"><span *ngIf=\"data.version != ''\"><strong>Version {{data.version}}</strong> - </span>\n                                                        <span *ngIf=\"data.created_date != ''\">{{data.created_date | date:'medium'}}</span></p>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n                <div class=\"row mt-3\" *ngIf=\"feedbackListData.length != 0 && !isSingleQnsWithFeedbackType\">\n                    <div class=\"col-12\">\n                        <div class=\"card p-3\">\n                            <div class=\"card-header p-3 background_gradient\">\n                                <h5 style=\"color: white\">Overall FeedBack</h5>\n                            </div>\n                            <div class=\"card-body py-3 px-4 custom_feedback_card_body\">\n                                <div class=\"row px-2\" *ngFor=\"let data of feedbackListData; let last = last\">\n                                    <div class=\"col-12 card class-card1 py-2 {{last ? 'mb-0' : 'mb-3'}}\">\n                                        <h5 class=\"color-primary\">{{data.feedback}}</h5>\n                                        <p style=\"font-size: 12px\" class=\"text-dark\"><span *ngIf=\"data.version != ''\"><strong>Version {{data.version}}</strong> - </span>\n                                            <span *ngIf=\"data.created_date != ''\">{{data.created_date | date:'medium'}}</span></p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-12 px-0\" *ngIf=\"feedbackExpanded\">\n                    <ng-container *ngTemplateOutlet=\"feedback_data\"></ng-container>\n                </div>\n\n            </div>\n\n            <div #footer class=\"row mt-2\" *ngIf=\"(totalAns.length != 0 && !isSingleQnsWithFeedbackType) ||\n            (totalAns.length != 0 && (getData.student_content_status == '1' || getData.student_content_status == '2') && isSingleQnsWithFeedbackType)\">\n                <div class=\"col-12\">\n                    <div class=\"card\">\n                        <div class=\"row align-items-center\">\n                            <div class=\"col-12\">\n                                <div class=\"card-body {{env.deviceType() ? 'px-3 py-2' : ''}}\">\n                                    <div class=\"row my-1 d-flex align-items-center justify-content-between\n                                    {{isSingleQnsWithFeedbackType && previousFeedBack.length != 0 ? '' : 'pr-3'}}\">\n                                        <div class=\"col-4\" *ngIf=\"!(isSingleQnsWithFeedbackType && previousFeedBack.length != 0)\">\n                                            <div class=\"logo-wrapper d-flex justify-content-center\">\n                                                <img alt=\"\" class=\"blur-up lazyloaded\" src=\"assets/images/EdQuill.png\" style=\"visibility:hidden;width: auto; height: 34px;\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-4\" *ngIf=\"!isSingleQnsWithFeedbackType\">\n                                            <div class=\"text-center position-relative\" #jumpWrapper>\n                                                <button class=\"btn btn-primary\" (click)=\"showJumpQuestion = !showJumpQuestion\">\n                                                    Questions\n                                                </button>\n\n                                                <div class=\"jump-question-box\" *ngIf=\"showJumpQuestion\">\n                                                    <div class=\"box-title\">Questions:</div>\n                                                    <div class=\"col-12 px-0\" style=\"margin-bottom: 10px\">\n                                                        <span><i style=\"font-size: 16px;\" class=\"fa fa-bookmark-o\"></i><span style=\"font-size: 13px;color: #777\">  - Not Answered</span></span>\n                                                        <span class=\"ml-3\"><i style=\"border-bottom: 0 !important;font-size: 16px;\" class=\"fa fa-bookmark-o bg-partially\"></i><span style=\"font-size: 13px;color: #777\">  - Answered</span></span>\n                                                        <span class=\"ml-3\"><i style=\"border-bottom: 0 !important;font-size: 16px;\" class=\"fa fa-bookmark-o color-primary\"></i><span style=\"font-size: 13px;color: #777\">  - Current Question</span></span>\n                                                        <span class=\"ml-3\"><img style=\"width: 16px\" alt=\"Review Marked\" src=\"assets/images/bookmark_checked.webp\"><span style=\"font-size: 13px;color: #777\"> - For Review</span></span>\n                                                    </div>\n                                                    <div class=\"question-grid\">\n                                                        <ng-container *ngFor=\"let list of totalAns; let i = index\">\n                                                            <ng-container *ngTemplateOutlet=\"questionButton; context: { $implicit: list, index: i }\"></ng-container>\n                                                        </ng-container>\n                                                        <!--                                                <button class=\"d-flex align-items-center justify-content-around\" (click)=\"modalRef?.close();showJumpQuestion = false;checkWhetherSaveIsNeeded(list, i, 'qnsNumber')\" *ngFor=\"let list of totalAns; let i = index\"-->\n                                                        <!--                                                        [ngClass]=\"{'bg-green':checkQuestionId(list)?.is_correct == 'true', 'bg-partially': checkQuestionId(list)?.is_correct == 'partially-completed' || checkQuestionId(list)?.is_correct == 'manual',-->\n                                                        <!--                                                    'bg-red':checkQuestionId(list)?.is_correct == 'false', active: showQuestion === i }\"-->\n                                                        <!--                                                >-->\n                                                        <!--                                                    <i *ngIf=\"!list.markedAsReview\" title=\"Review\"-->\n                                                        <!--                                                       style=\"font-size: 16px;\" class=\"fa fa-bookmark-o cursor\"></i>-->\n                                                        <!--                                                    <img *ngIf=\"list.markedAsReview && !(checkQuestionId(list)?.is_correct == 'partially-completed' || checkQuestionId(list)?.is_correct == 'manual')\" title=\"Marked For Review\"-->\n                                                        <!--                                                         style=\"width: 16px\" class=\"cursor\" alt=\"Review Marked\" src=\"assets/images/bookmark_checked.webp\">-->\n                                                        <!--                                                    <img *ngIf=\"list.markedAsReview && (checkQuestionId(list)?.is_correct == 'partially-completed' || checkQuestionId(list)?.is_correct == 'manual')\" title=\"Marked For Review\"-->\n                                                        <!--                                                         style=\"width: 16px\" class=\"cursor\" alt=\"Review Marked\" src=\"assets/images/bookmark_checked_yellow.png\">-->\n                                                        <!--                                                    <span class=\"ml-1\">{{ i + 1 }}</span>-->\n                                                        <!--                                                </button>-->\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-4\" *ngIf=\"!isSingleQnsWithFeedbackType\">\n                                            <button *ngIf=\"(totalAns.length != showQuestion + 1)\" class=\"btn pull-right btn-primary ml-2\" (click)=\"checkLastQuestion(showQuestion, showQuestion == totalAns.length)\">\n                                                Next</button>\n                                            <button *ngIf=\"(totalAns.length == showQuestion + 1) && (getData.student_content_status == '1' || getData.student_content_status == '2')\"\n                                                    class=\"btn pull-right btn-primary ml-2\" (click)=\"checkSubmitFunction()\">Submit</button>\n                                            <button *ngIf=\"showQuestion != 0\" class=\"btn pull-right cancel\" (click)=\"previousQuestion()\">\n                                                Previous</button>\n                                            <button class=\"btn pull-right btn-outline-primary mr-2\" (click)=\"tryAgainButton()\"\n                                                    *ngIf=\"checkQuestionId(totalAns[showQuestion])?.is_correct == 'partially-completed' && !tryAgainButtonEnabled\">\n                                                Try Again <i class=\"fa fa-repeat ml-1\" aria-hidden=\"true\"></i></button>\n                                        </div>\n\n                                        <div class=\"col-{{isSingleQnsWithFeedbackType && previousFeedBack.length != 0 ? '12' : '8'}}\" *ngIf=\"(getData.student_content_status == '1' || getData.student_content_status == '2') && isSingleQnsWithFeedbackType\">\n                                            <div>\n                                                <button *ngIf=\"(questionData?.auto_review != '0' && reviseSelected == '') || questionData?.auto_review == '0'\"\n                                                        class=\"btn btn-primary ml-3 pull-right\" (click)=\"checkForApiTypeQns()\">Submit For Final</button>\n\n                                                <button *ngIf=\"questionData?.auto_review != '0' && previousFeedBack.length != 0 && reviseSelected != ''\"\n                                                        class=\"btn btn-primary ml-3 pull-right\" (click)=\"undoRevise(previousFeedBack[0])\">\n                                                    <i class=\"fa fa-undo mr-1\" aria-hidden=\"true\"></i>Undo Revise</button>\n\n                                                <button class=\"btn pull-right btn-outline-primary ml-3\" (click)=\"overAllStartTimer();feedbackSelected('current')\"\n                                                        *ngIf=\"previousFeedBack.length <= 9 && reviseSelected == ''\">\n                                                    <i class=\"fa fa-repeat mr-1\" aria-hidden=\"true\"></i>Revise</button>\n\n                                                <button *ngIf=\"previousFeedBack.length < maximumAllowedCount && questionData?.auto_review != '0' && reviseSelected != ''\"\n                                                        (click)=\"getFeedbackValue(totalAns[showQuestion])\" class=\"btn btn-outline-primary pull-right ml-3\">\n                                                    <i class=\"fa fa-comments mr-1\" aria-hidden=\"true\"></i>Request For Feedback ({{previousFeedBack.length}} / {{maximumAllowedCount}})\n                                                </button>\n\n                                                <div class=\"btn-group dropup pull-right\" *ngIf=\"(getData.student_content_status == '1' || getData.student_content_status == '2') && isSingleQnsWithFeedbackType\">\n                                                    <button data-toggle=\"dropdown\" class=\"btn btn-outline-primary\" style=\"border-radius: 5px;\">Save<i\n                                                            class=\"fa fa-sort-desc float-right ml-2\" aria-hidden=\"true\"></i>\n                                                    </button>\n                                                    <div class=\"dropdown-menu\">\n                                                        <a class=\"dropdown-item dropdown-link\" (click)=\"saveAnswer('2', 'noExit', true, 'same')\"><i class=\"fa fa-floppy-o mr-1\" aria-hidden=\"true\"></i>Save</a>\n                                                        <a class=\"dropdown-item dropdown-link\" (click)=\"saveAnswer('2', 'exit', true, 'same')\"><i class=\"fa fa-sign-out mr-1\" aria-hidden=\"true\"></i>Save\n                                                            & Exit</a>\n                                                    </div>\n                                                </div>\n\n                                                <button *ngIf=\"(getData.student_content_status == '1' || getData.student_content_status == '2') && !isSingleQnsWithFeedbackType\"\n                                                        class=\"btn pull-right btn-outline-primary ml-3\" (click)=\"saveAnswer('2', 'noExit', true, 'same')\">\n                                                    <i class=\"fa fa-floppy-o mr-1\" aria-hidden=\"true\"></i>Save</button>\n\n                                                <button *ngIf=\"(getData.student_content_status == '1' || getData.student_content_status == '2') && !isSingleQnsWithFeedbackType\"\n                                                        class=\"btn pull-right btn-outline-primary\" (click)=\"saveAnswer('2', 'exit', true, 'same')\">\n                                                    <i class=\"fa fa-sign-out mr-1\" aria-hidden=\"true\"></i>Save & Exit</button>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        <div [ngStyle]=\"{ 'max-height': totalFeedbackMaxHeight}\" class=\"content-card col-6 2\"\n             *ngIf=\"isSingleQnsWithFeedbackType && previousFeedBack.length != 0 && !feedbackExpanded && isOpen\">\n            <ng-container *ngTemplateOutlet=\"feedback_data\"></ng-container>\n        </div>\n\n        <div [ngStyle]=\"{ 'max-height': totalFeedbackMaxHeight}\" class=\"content-card col-6 1\"\n             *ngIf=\"isSingleQnsWithFeedbackType && previousFeedBack.length != 0 && !feedbackExpanded && !isOpen\">\n            <ng-container *ngTemplateOutlet=\"feedback_data\"></ng-container>\n        </div>\n    </section>\n\n</div>\n\n<ng-template #submitAlert let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">Submit {{contentType}}</h4>\n    </div>\n    <div class=\"modal-body p-0\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <p style=\"color: #313131\" class=\"mb-0 my-3 font-weight-bold\" *ngIf=\"buttonClicked == 'submit'\">Once submitted, you will not be able to edit your answers</p>\n                    <p style=\"color: #313131\" class=\"mb-0 my-3 font-weight-bold\" *ngIf=\"buttonClicked == ''\">Yay! Your final effort and last question are here. The subsequent\n                        assignment will be turned in for evaluation after clicking the OK button</p>\n                </div>\n\n                <div class=\"col-12 mb-3\" *ngIf=\"!showpdf && !isSingleQnsWithFeedbackType\">\n                    <textarea [(ngModel)]=\"totalFeedBack\" class=\"form-control\"\n                              [readOnly]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                              placeholder=\"Please Enter the Overall Feedback\" cols=\"30\" rows=\"3\"></textarea>\n                </div>\n\n                <div class=\"col-12\" style=\"margin-bottom: 10px\" *ngIf=\"!showpdf && totalAns.length > 1\">\n                    <span><i style=\"font-size: 16px;\" class=\"fa fa-bookmark-o\"></i><span style=\"font-size: 13px;color: #777\">  - Not Answered</span></span>\n                    <span class=\"ml-3\"><i style=\"border-bottom: 0 !important;font-size: 16px;\" class=\"fa fa-bookmark-o bg-partially\"></i><span style=\"font-size: 13px;color: #777\">  - Answered</span></span>\n                    <span class=\"ml-3\"><i style=\"border-bottom: 0 !important;font-size: 16px;\" class=\"fa fa-bookmark-o color-primary\"></i><span style=\"font-size: 13px;color: #777\">  - Current Question</span></span>\n                    <span class=\"ml-3\"><img style=\"width: 16px\" alt=\"Review Marked\" src=\"assets/images/bookmark_checked.webp\"><span style=\"font-size: 13px;color: #777\"> - For Review</span></span>\n                </div>\n\n                <div class=\"col-12 mb-3\" *ngIf=\"!showpdf && totalAns.length > 1\">\n                    <div class=\"box-title\">Questions</div>\n                    <div class=\"question-grid-submit\">\n                        <ng-container *ngFor=\"let list of totalAns; let i = index\">\n                            <ng-container *ngTemplateOutlet=\"questionButton; context: { $implicit: list, index: i }\"></ng-container>\n                        </ng-container>\n                    </div>\n                </div>\n\n            </div>\n            <!-- Container-fluid Ends-->\n        </div>\n        <div class=\"modal-footer d-flex justify-content-right\">\n            <button (click)=\"buttonClicked = '';close()\"\n                    class=\"btn cancel {{env.deviceType() ? 'border-radius-5' : ''}}\" type=\"button\">Cancel\n            </button>\n            <button [disabled]=\"disableButton\" *ngIf=\"isSingleQnsWithFeedbackType && questionData?.auto_review != '0'\" (click)=\"disableButton = true;timeIntervalRunningForTest = false;submitAnswering = true;getFeedbackValue(this.totalAns[0], 'saveAndExit');\"\n                    class=\"btn btn-primary {{env.deviceType() ? 'border-radius-5' : ''}}\" type=\"button\">Ok\n            </button>\n            <button [disabled]=\"disableButton\" *ngIf=\"!(isSingleQnsWithFeedbackType && questionData?.auto_review != '0')\" (click)=\"disableButton = true;buttonClicked = '';submitAnswering = true;\n                            timeIntervalRunningForTest = false;saveAnswer('4', 'exit', true)\"\n                    class=\"btn btn-primary {{env.deviceType() ? 'border-radius-5' : ''}}\" type=\"button\">Ok\n            </button>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #reviewAlert let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">Review Confirmation</h4>\n    </div>\n    <div class=\"modal-body p-0\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <p style=\"color: #313131\" class=\"mb-0 my-3 font-weight-bold\">Some of the questions are marked for review. Would you like to proceed further?</p>\n                </div>\n            </div>\n            <!-- Container-fluid Ends-->\n        </div>\n        <div class=\"modal-footer d-flex justify-content-right\">\n            <button (click)=\"close()\" class=\"btn cancel {{env.deviceType() ? 'border-radius-5' : ''}}\" type=\"button\">Cancel</button>\n            <button (click)=\"modalRef.close();buttonClicked = 'submit';submitPopup()\" class=\"btn btn-primary {{env.deviceType() ? 'border-radius-5' : ''}}\" type=\"button\">Ok</button>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #answerGraph let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">Answer graph</h4>\n    </div>\n    <div class=\"modal-body\">\n\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-12 mt-4 px-0\">\n                    <div class=\"col-md-12\">\n                        <app-graph-component (valueChange)=\"storeGraph($event)\"\n                                             [editMode]=\"getData.student_content_status == '1' || getData.student_content_status == '2'\"\n                                             [editPatchValue]=\"graphAnswerVal == '' ? false : parseVal(graphAnswerVal)\"\n                                             [graphId]=\"'deaaa'\"\n                                             [questionType]=\"'40'\"></app-graph-component>\n                        <!--                        <app-graph-component [editMode]=\"false\"-->\n                        <!--                                             [editPatchValue]=\"false\"-->\n                        <!--                                             [graphId]=\"'previewG'\"-->\n                        <!--                                             [questionType]=\"'40'\"></app-graph-component>-->\n                    </div>\n                </div>\n            </div>\n            <div class=\"row mt-3 d-flex\">\n                <div class=\"col-md-12\">\n                    <button [attr.aria-controls]=\"'#queries' + graphIndex\" [attr.data-target]=\"'#queries' + graphIndex\"\n                            [disabled]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                            aria-expanded=\"false\" class=\"btn-sm btn-outline-primary mr-2\" data-toggle=\"collapse\">\n                        Feedback\n                    </button>\n                    <button [attr.aria-controls]=\"'#workspace' + graphIndex\"\n                            [attr.data-target]=\"'#workspace' + graphIndex\" aria-expanded=\"false\"\n                            class=\"btn-sm btn-outline-primary mr-2\" data-toggle=\"collapse\">work space\n                    </button>\n                    <button (click)=\"openWorkArea('', graphId, graphIndex)\" class=\"btn-sm mb-1 btn-outline-primary mr-2\"\n                            title=\"Work Area\">Work area\n                    </button>\n                    <button [attr.aria-controls]=\"'#answer'\" [attr.data-target]=\"'#answer'\" aria-expanded=\"false\"\n                            class=\"btn-sm btn-outline-primary mr-2\" data-toggle=\"collapse\">Set Answer\n                    </button>\n                </div>\n            </div>\n            <div class=\"row mt-3 mb-3\">\n                <div class=\"col-md-12 collapse\" id=\"queries{{graphIndex}}\">\n                    <textarea (input)=\"getQueries($event, graphId, graphIndex, 'pdf')\" [value]=\"graphFeedback\"\n                              class=\"form-control\" placeholder=\"Feedback\" rows=\"3\"></textarea>\n                </div>\n            </div>\n            <div class=\"row mt-3 d-flex\">\n                <div class=\"col-md-12\">\n                    <button (click)=\"submitQueries(graphId, graphIndex, 'pdf')\"\n                            *ngIf=\"queries != '' && queriesIndex == graphIndex+'id'+graphId\"\n                            class=\"btn-sm btn-primary mr-2\">Submit\n                    </button>\n                </div>\n            </div>\n            <div class=\"row mt-3 mb-3\">\n                <div class=\"col-md-12 collapse\" id=\"workspace{{graphIndex}}\">\n                    <app-tiny-mice (emitEditorValue)=\"getNumericWorkSpaceValue($event, graphId, graphIndex)\"\n                                   [editorPatchValue]=\"this.workspacedata[graphId].section[graphIndex].patchData == false ? false : this.totalAns[graphId].section[graphIndex].student_roughdata\"\n                                   [height]=\"250\"\n                                   [readOnly]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                   [id]=\"'workspacing'\"\n                                   [showDropBtn]=\"false\"\n                                   [showInputBtn]=\"false\">\n                    </app-tiny-mice>\n                </div>\n                <div #answer class=\"col-md-12 collapse\" id=\"answer\">\n                    <app-tiny-mice (emitEditorValue)=\"getGraphEditorValue($event)\"\n                                   [editorPatchValue]=\"this.graphEditorAnsDup == false ? false : this.graphEditorAns\"\n                                   [height]=\"250\"\n                                   [id]=\"'answerrr'\"\n                                   [readonly]=\"false\"\n                                   [showDropBtn]=\"false\"\n                                   [showInputBtn]=\"false\"\n                    >\n                    </app-tiny-mice>\n                </div>\n            </div>\n            <!-- Container-fluid Ends-->\n        </div>\n        <div class=\"modal-footer d-flex justify-content-right mt-2\">\n            <button (click)=\"closeGraph(graphId, graphIndex)\"\n                    class=\"btn btn-primary-outline {{env.deviceType() ? 'border-radius-5' : ''}}\" type=\"button\">Cancel\n            </button>\n            <button (click)=\"getGraphAnswerValue(getGraph, graphId, graphIndex)\"\n                    class=\"btn btn-primary {{env.deviceType() ? 'border-radius-5' : ''}}\" type=\"button\">Submit\n            </button>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title font-weight-bold\" id=\"modal-basic-title\">Resources</h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\" *ngFor=\"let item of linkdata; let j = index\">\n                <div class=\"col-md-12\">\n                    <a class=\"cursor\" href=\"{{item.link}}\" target=\"_blank\">\n                        <span style=\"overflow: scroll; overflow-y: hidden\"\n                              title=\"{{item.link}}\">{{item.name != '' ? item.name : item.link}}</span>\n                    </a>\n                    <hr *ngIf=\"j != linkdata.length - 1\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary {{env.deviceType() ? 'border-radius-5' : ''}}\" (click)=\"onSave()\">\n            Cancel\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #showExpand let-c=\"close\" let-d=\"dismiss\">\n\n    <div class=\"modal-body\" style=\"border: 0;\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <!--                <div class=\"col-sm-12 text-right\">-->\n                <!--                    <i (click)=\"close()\" class=\"fa fa-close cursor\" style=\"font-size: 1rem\"></i>-->\n                <!--                </div>-->\n                <div class=\"row d-flex justify-content-between\">\n                    <div class=\"col-md-1 mt-2\">\n                        <button class=\"btn btn-primary {{env.deviceType() ? 'border-radius-5' : ''}}\">{{showAnswerItem.sub_question_no}}</button>\n                    </div>\n                </div>\n                <div class=\"col-11 mt-2\">\n                    <div *ngIf=\"showAnswerItem.question != ''\" [innerHTML]=\"showAnswerItem.question | sanitizeHtml\"\n                         class=\"mb-0 overflow-auto div-disable\"></div>\n                </div>\n                <div class=\"col-12 mt-2 text-center\" *ngIf=\"showAnswerItem.question_type_id == '30'\">\n                    <app-tiny-mice class=\"mt-2\"\n                                   (emitEditorValue)=\"getNumericAnswerValue1($event, showAnswerI, showAnswerJ)\"\n                                   [editorPatchValue]=\"showAnswerItem.given_answer == '' ? false : showAnswerItem.given_answer1\"\n                                   [readonly]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                                   [height]=\"250\"\n                                   [id]=\"showAnswerI+'giveAnsPop'+showAnswerJ\"\n                                   [showDropBtn]=\"false\"\n                                   [showInputBtn]=\"false\">\n                    </app-tiny-mice>\n                    <button (click)=\"patchMinimize(showAnswerI, showAnswerJ, showAnswerItem)\"\n                            class=\"btn-sm mb-1 btn-outline-primary mr-2 mt-3\">Show minimize Editor\n                    </button>\n                </div>\n                <div class=\"col-12 mt-2 text-center\" *ngIf=\"showAnswerItem.question_type_id == '20'\">\n                    <textarea (input)=\"getInputAns($event, showAnswerI, showAnswerJ)\"\n                              [readOnly]=\"getData.student_content_status != '1' && getData.student_content_status != '2'\"\n                              class=\"form-control\" cols=\"30\" rows=\"8\">{{showAnswerItem.given_answer}}</textarea>\n                    <button (click)=\"patchMinimize(showAnswerI, showAnswerJ, showAnswerItem)\"\n                            class=\"btn-sm mb-1 btn-outline-primary mr-2 mt-3\">Show minimize Editor\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #feedback let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header d-flex justify-content-between\">\n        <h4 class=\"mb-0\" style=\"color: #8F008A\">Overall Feedback</h4><i (click)=\"close()\"\n                                                                        class=\"fa fa-times-circle cursor\"\n                                                                        style=\"font-size: 1.2rem\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n            <div class=\"col-md-12 d-flex mt-4 mb-4 p-4 release-card\">\n                <span>{{questionData.teacher_feedback}}</span>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #workArea let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header d-flex justify-content-between\">\n        <h4 class=\"mb-0\">Work Area</h4><i (click)=\"closeWorkArea()\" class=\"fa fa-times-circle cursor\"\n                                          style=\"font-size: 1.2rem\"></i>\n    </div>\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div *ngIf=\"(getData.student_content_status == '1' || getData.student_content_status == '2') && !env.deviceType()\">\n                <app-annotation (annotate)=\"getWorkAreaAnnotation($event)\"\n                                [getAnnotate]=\"workAnnotate\"\n                                [id]=\"'workArea'\"\n                                [toolAdjust]=\"true\"\n                                [toolHide]=\"true\"\n                                [userType]=\"'student'\"></app-annotation>\n            </div>\n            <div *ngIf=\"(getData.student_content_status == '1' || getData.student_content_status == '2') && env.deviceType()\">\n                <app-student-web-annotation\n                        (annotate)=\"getWorkAreaAnnotation($event)\"\n                        [getAnnotate]=\"workAnnotate\"\n                        [toolAdjust]=\"true\"\n                        [toolHide]=\"true\"\n                        [popUp]=\"true\"\n                ></app-student-web-annotation>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #feedbackStatus>\n    <div class=\"modal-body\">\n        <div class=\"col-12 px-0 my-3 d-flex flex-row align-items-center\">\n            <div class=\"feedback_spinner\"></div>\n            <span class=\"ml-3\" style=\"font-size: 16px\">{{popUpMessage}}</span>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #durationWarning let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">{{firstWarning ? 'Remaining Duration' : 'Duration Completed'}}</h4>\n    </div>\n    <div class=\"modal-body p-0\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <p *ngIf=\"firstWarning\" style=\"color: #313131; font-size: 14px\" class=\"mb-0 my-3\">You now have <span class=\"font-weight-bold\"> 5 minutes</span> left to complete the test.\n                        Please make sure your responses are saved and ready for\u00A0submission.</p>\n                    <p *ngIf=\"!firstWarning\" style=\"color: #313131; font-size: 14px\" class=\"mb-0 my-3 font-weight-bold\">Test time is now complete.\n                        All your answers will be saved and submitted automatically.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal-footer d-flex justify-content-right\">\n            <button [disabled]=\"disableDurationWarningButton\" *ngIf=\"isSingleQnsWithFeedbackType && questionData?.auto_review != '0'\" (click)=\"disableDurationWarningButton = true; firstWarning ? closeAndStartTimer() : getFeedbackValue(this.totalAns[0], 'saveAndExit');\"\n                    class=\"btn btn-primary {{env.deviceType() ? 'border-radius-5' : ''}}\" type=\"button\">Ok\n            </button>\n            <button [disabled]=\"disableDurationWarningButton\" *ngIf=\"!(isSingleQnsWithFeedbackType && questionData?.auto_review != '0')\" (click)=\"disableDurationWarningButton = true; checkFinalSave()\"\n                    class=\"btn btn-primary {{env.deviceType() ? 'border-radius-5' : ''}}\" type=\"button\">Ok\n            </button>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #testTimerStatus>\n    <div class=\"modal-header d-flex justify-content-between\">\n        <h4 class=\"mb-0 font-weight-bold color-primary\">Take A Break!</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-12 px-0 text-center\">\n            <img src=\"assets/images/take-a_break.png\" alt=\"Take a break\" class=\"w-100\">\n            <div class=\"col-12 col-12 d-flex flex-row align-items-center justify-content-center\">\n                <div class=\"timer_button p-2 row\">\n                    <div class=\"w-auto text-center\">\n                        <h4 style=\"font-size: 24px\" class=\"mb-0\"><b>{{testElapsedTime?.minutes}}</b></h4>\n                        <span style=\"font-size: 12px\"  class=\"color-primary mb-0\">Minutes</span>\n                    </div>\n                    <div class=\"w-auto mx-2\" style=\"margin-top: 2px\">\n                        <h4 class=\"mb-0 font-weight-bold\">:</h4>\n                    </div>\n                    <div class=\"w-auto text-center\">\n                        <h4 style=\"font-size: 24px\" class=\"mb-0\"><b>{{testElapsedTime?.seconds}}</b></h4>\n                        <span style=\"font-size: 12px\"  class=\"color-primary mb-0\">Seconds</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer py-2 justify-content-between\">\n        <h6 class=\"m-0\">Click on the skip button to resume</h6>\n        <button [disabled]=\"disableSkipButton\" class=\"btn btn-primary\" (click)=\"disableSkipButton = true; timeTakenForTestInterval = 0;pauseTimerIntervalOfTest();skipToNextContent()\">Skip</button>\n    </div>\n</ng-template>\n\n<ng-template #questionButton let-list let-i=\"index\">\n    <button (click)=\"modalRef?.close();showJumpQuestion = false;checkWhetherSaveIsNeeded(list, i, 'qnsNumber')\"\n            class=\"d-flex align-items-center justify-content-around\"  [ngClass]=\"getButtonClass(list, i)\">\n\n        <ng-container *ngIf=\"!list.markedAsReview\">\n            <i title=\"Review\" class=\"fa fa-bookmark-o cursor\" style=\"font-size: 16px;\"></i>\n        </ng-container>\n\n        <ng-container *ngIf=\"list.markedAsReview\">\n            <img [src]=\"getReviewIcon(checkQuestionId(list)?.is_correct)\" [title]=\"'Marked For Review'\" class=\"cursor\"\n                 style=\"width: 16px\" alt=\"Review Marked\">\n        </ng-container>\n\n        <span class=\"ml-1\">{{ i + 1 }}</span>\n    </button>\n</ng-template>\n\n<ng-template #feedback_data let-row>\n    <h4 class=\"font-weight-bold mt-2 mb-3\">Feedback <span *ngIf=\"reviseSelected == 'current'\">{{previousFeedBack.length}}</span>\n        <span *ngIf=\"reviseSelected != 'current'\">{{selectedFeedBackIndex}}</span>\n        <span *ngIf=\"selectedPreviousStudentAnswer?.created_date\"> ({{selectedPreviousStudentAnswer?.created_date | customDateFormat}}  | {{selectedPreviousStudentAnswer?.created_date | date:'h:mm a'}}) </span>:</h4>\n    <div class=\"col-12 px-0\" *ngIf=\"selectedPreviousStudentAnswer?.version != 'V1'\">\n        <div class=\"card\">\n            <div class=\"card-header p-3 background_gradient\">\n                <h5 style=\"color: white;font-size: 16px\" class=\"font-weight-bold\">Score Chart</h5>\n            </div>\n            <div class=\"card-body custom_feedback_card_body p-3\">\n                <div class=\"row justify-content-center flex-column\">\n                    <div class=\"col-12 d-flex justify-content-center\">\n                        <div class=\"text-center\">\n                            <h5 class=\"font-weight-bold\">Feedback Score</h5>\n                            <p style=\"font-size: 14px\" class=\"mb-0\">\n                                                    <span>Current Version : <span style=\"color: #008ffb\" class=\"font-weight-bold\">\n                                                {{selectedPreviousStudentAnswer?.student_score}} / {{selectedPreviousStudentAnswer?.total_score}}</span></span>\n                                <span class=\"ml-2\">Previous Version :\n                                            <span style=\"color: #00e396\" *ngIf=\"selectedFeedBackIndex != 1 && selectedFeedBackIndex != '' && !feedbackServiceCalled\" class=\"font-weight-bold\">\n                                                {{previousFeedBack[selectedPreviousStudentAnswer?.index + 1]?.student_score}} / {{previousFeedBack[selectedPreviousStudentAnswer?.index + 1]?.total_score}}\n                                            </span>\n                                            <span style=\"color: #00e396\" *ngIf=\"selectedFeedBackIndex != 1 && selectedFeedBackIndex != '' && feedbackServiceCalled\" class=\"font-weight-bold\">\n                                              {{previousFeedBack[1]?.student_score}} / {{previousFeedBack[1]?.total_score}}\n                                            </span>\n                                            <span *ngIf=\"selectedFeedBackIndex == 1\"> - </span></span>\n                            </p>\n                        </div>\n                    </div>\n\n                    <div class=\"col-12\">\n                        <div id=\"chart2\">\n                            <apx-chart\n                                    [series]=\"chartOptions?.series\"\n                                    [chart]=\"chartOptions?.chart\"\n                                    [xaxis]=\"chartOptions?.xaxis\"\n                                    [yaxis]=\"chartOptions?.yaxis\"\n                                    [plotOptions]=\"chartOptions?.plotOptions\"\n                                    [dataLabels]=\"chartOptions?.dataLabels\"\n                                    [legend]=\"chartOptions?.legend\">\n                            </apx-chart>\n                        </div>\n                    </div>\n\n                    <div class=\"col-12 mt-2\" *ngIf=\"selectedPreviousStudentAnswer.strengths\">\n                        <div *ngIf=\"selectedPreviousStudentAnswer.strengths.length != 0\">\n                            <label class=\"font-weight-bold\">Strengths: </label>\n                            <h5 class=\"strength_text\" *ngFor=\"let value of selectedPreviousStudentAnswer.strengths\">{{value}}</h5>\n                        </div>\n                    </div>\n\n                    <div class=\"col-12 mt-3\" *ngIf=\"selectedPreviousStudentAnswer.top_opportunities\">\n                        <div *ngIf=\"selectedPreviousStudentAnswer.top_opportunities.length != 0\">\n                            <label class=\"font-weight-bold\">Top Opportunities: </label>\n                            <h5 class=\"top_opportunity_text\" *ngFor=\"let value of selectedPreviousStudentAnswer.top_opportunities\">{{value}}</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 mt-3 px-0\">\n        <div class=\"card\">\n            <div class=\"card-header p-3 background_gradient\">\n                <h5 style=\"color: white;font-size: 16px\" class=\"font-weight-bold\">Trait Analysis</h5>\n            </div>\n            <div class=\"card-body custom_feedback_card_body p-3\">\n                <div style=\"border: 0 !important;\" class=\"feedback-card\" *ngIf=\"selectedPreviousStudentAnswer?.version == 'V1'\" [innerHTML]=\"convertedText\"></div>\n                <div class=\"feedback-card p-0\" *ngIf=\"selectedPreviousStudentAnswer?.version != 'V1'\" style=\"overflow-x: hidden;border: 0 !important\">\n                    <div class=\"row mb-2\">\n                        <div class=\"col-12\">\n                            <h5 style=\"font-size: 18px\" class=\"mb-0 font-weight-bold\">Total Score</h5>\n                            <div class=\"row\">\n                                <div class=\"col-10\">\n                                    <div class=\"progress cursor my-2\">\n                                        <div class=\"progress-bar\"\n                                             role=\"progressbar\"\n                                             [style.width.%]=\"scorePercentage\"\n                                             [attr.aria-valuenow]=\"score\"\n                                             [attr.aria-valuemin]=\"0\"\n                                             [attr.aria-valuemax]=\"totalScore\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <span class=\"align-self-center font-weight-bold color-primary\">{{selectedPreviousStudentAnswer?.student_score}} / {{selectedPreviousStudentAnswer?.total_score}}</span>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"feedback-panel\" [ngClass]=\"last ? 'feedback-panel_last' : first ? 'feedback-panel_first' : ''\"\n                         *ngFor=\"let feedback of feedbackList; let last = last; let first = first\" (click)=\"feedback.collaspsed = !feedback.collaspsed\">\n                        <div class=\"feedback-header d-flex justify-content-between align-items-center\"\n                             [ngClass]=\"!feedback.collaspsed ? 'open' : ''\">\n                            <span class=\"title-text\">{{ getValue(feedback[0]) ?? '-' }}</span>\n                            <div class=\"d-flex align-items-center\">\n                                            <span class=\"badge badge-info mr-2\">\n                                                Score: {{ feedback[1]?.score }} / {{ totalIndivialScore }}\n                                            </span>\n                                <i style=\"color: black\" class=\"fa\" [ngClass]=\"feedback.collaspsed ? 'fa-chevron-down' : 'fa-chevron-up'\"></i>\n                            </div>\n                        </div>\n\n                        <div [ngbCollapse]=\"feedback.collaspsed\" class=\"feedback-body\">\n                            <div *ngIf=\"feedback[1]?.rationale\" class=\"rationale_design col-12 px-0 {{feedback[1]?.feedback.length == 0 ? 'mb-0' : ''}}\">\n                                <strong style=\"color: black\">Rationale:</strong> {{ feedback[1]?.rationale }}\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12 {{lastValue ? '' : 'mb-2'}}\" *ngFor=\"let value of feedback[1]?.feedback; let lastValue = last\">\n                                    <div class=\"collapse-card\">\n                                        <h5 class=\"snippet-text\">\n                                            {{ value.snippet }}\n                                        </h5>\n\n                                        <div class=\"inner-collapse mt-2\">\n                                            <label class=\"font-weight-bold col-12 px-0\">Suggestion: <span class=\"font-weight-normal italic\">{{ value.suggestion }}</span></label>\n\n                                            <label *ngIf=\"value?.why\" class=\"font-weight-bold mt-2 col-12 px-0\">Why: <span class=\"font-weight-normal italic\">{{ value.why }}</span></label>\n\n                                            <label *ngIf=\"value?.example_rewrite\" class=\"font-weight-bold mt-2 col-12 px-0\">Example: <span class=\"font-weight-normal color-primary italic\">{{ value.example_rewrite }}</span></label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-12 mt-3 px-0\" *ngIf=\"selectedPreviousStudentAnswer.next_edit_plan\">\n        <div class=\"card\">\n            <div class=\"card-header p-3 background_gradient\">\n                <h5 style=\"color: white;font-size: 16px\" class=\"font-weight-bold\">Next Edit Plan</h5>\n            </div>\n            <div class=\"card-body custom_feedback_card_body py-3 px-0\">\n                <div class=\"col-12 row {{!last ? 'mb-2' : ''}}\" *ngFor=\"let data of selectedPreviousStudentAnswer.next_edit_plan; let i = index; let last = last\">\n                    <div [ngStyle]=\"{'width' : env.deviceType() ? '7%' : !env.deviceType() && feedbackExpanded ? '4%' : '6%'}\"\n                         style=\"padding-left: 16px\" class=\"text-center font-weight-bold\">{{data?.priority ?? i}}.</div>\n                    <div [ngStyle]=\"{'width' : env.deviceType() ? '93%' : !env.deviceType() && feedbackExpanded ? '96%' : '94%'}\">\n                        <label class=\"font-weight-bold mb-1 col-12 px-0\">{{data?.action ?? ''}}</label>\n                        <label class=\"col-12 px-0\" style=\"color: #007BFF\">Example: <span class=\"color-primary\">{{data.example_rewrite}}</span></label>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n", styles: [".inputMenu{\n\n  //padding: 30px;\n\n\n  input{\n    padding: 30px;\n  }\n  .input-group-text{\n    background: white;\n  }\n  img{\n    position: relative;\n    height: 36px;\n  }\n\n  .pointsSec{\n    .labelName{\n      font-size: 20px;\n    }\n    .pointInput{\n      height: 3rem !important;\n    }\n  }\n}\n.button {\n  display: block;\n  width: 115px;\n  height: 30px;\n  background: #8F008A;\n  padding: 3px;\n  text-align: center;\n  border-radius: 3px;\n  color: white;\n  font-weight: bold;\n  line-height: 25px;\n}\n\n.button1 {\n  width: 116px;\n  height: 30px;\n  display: block;\n  line-height: 19px;\n  font-size: 14px;\n  text-align: center;\n}\ncanvas-whiteboard {\n  width: 10vw;\n  canvas {\n    width: 10vw;\n    height: 50vh;\n    position: center;\n  }\n}\n\n// answering page student login\n.inputMenu{\n\n  input{\n    padding: 30px;\n  }\n  .input-group-text{\n    background: white;\n  }\n  img{\n    position: relative;\n    height: 36px;\n  }\n\n  .pointsSec{\n    .labelName{\n      font-size: 20px;\n    }\n    .pointInput{\n      height: 3rem !important;\n    }\n  }\n}\n.button {\n  display: block;\n  width: 115px;\n  height: 30px;\n  background: #8F008A;\n  padding: 3px;\n  text-align: center;\n  border-radius: 3px;\n  color: white;\n  font-weight: bold;\n  line-height: 25px;\n}\n\n.button1 {\n  width: 116px;\n  height: 30px;\n  display: block;\n  line-height: 19px;\n  font-size: 14px;\n  text-align: center;\n}\n\n.paddingDetails{\n  padding-left: 28px;\n  padding-right: 28px;\n}\n\n////\n.overlay {\n  height: 100%;\n  width: 100%;\n  background-color: grey;\n  position: absolute;\n  z-index: 1;\n  opacity: 0.6;\n  cursor: pointer;\n  transform: scale(0);\n  transition: .4s;\n  border-radius: 5px;\n  -webkit-transition: .4s;\n  -moz-transition: .4s;\n  -ms-transition: .4s;\n  -o-transition: .4s;\n}\n.table-cell{\n  display: table-cell;\n  vertical-align: middle;\n}\n.overlay-main {\n  width: 100%;\n  height: 100%;\n  display: table;\n}\n.team-col {\n  margin: 0;\n  position: relative;\n}\n.team-member{\n  position: relative;\n  overflow: hidden;\n  margin: 0;\n}\n\n.corporate-team{\n  position: relative;\n  margin-bottom: 30px;\n}\n.corporate-team:hover .overlay{\n  transform: scale(1);\n}\n.corporate-team:hover h2{\n  transform: translateY(0);\n\n}\n.corporate-team:hover p{\n  transform: translateY(0);\n\n}\n.corporate-team:hover .team-details{\n  background-color: black;\n}\n.corporate-team:hover .team-icon-grid{\n  transform: translateY(0);\n\n}\n.team-img {\n  width: 100%;\n  height: auto;\n  padding: 0;\n  transition: .4s;\n  -o-transition: .4s;\n  -webkit-transition: .4s;\n  -moz-transition: .4s;\n  -ms-transition: .4s;\n  border: 0 solid white;\n  box-shadow: 0 0 4px 0 #d7d7d7;\n}\n\n.team-details {\n  padding: 23px 20px;\n  background-color: #f31515;\n  margin-top: 10px;\n  position: relative;\n  z-index: 11111;\n  transition: .4s;\n  -o-transition: .4s;\n  -webkit-transition: .4s;\n  -moz-transition: .4s;\n  -ms-transition: .4s;\n}\n.team-details h3 {\n  margin: 0;\n  font-size: 20px;\n  color: white;\n  font-weight: 700;\n  font-family: 'Roboto', serif;\n}\n.team-member h2 {\n  margin: 0;\n  font-size: 26px;\n  color: white;\n  transform: translateY(-550px);\n  transition: .5s;\n  -o-transition: .5s;\n  -webkit-transition: .5s;\n  -moz-transition: .5s;\n  -ms-transition: .5s;\n  transition-delay: .2s;\n  margin-left: 20px;\n}\n.team-member p {\n  font-size: 17px;\n  color: black;\n  line-height: 24px;\n  margin: 0 20px;\n  margin-top: 10px;\n  margin-bottom: 15px;\n  transform: translateY(-550px);\n  transition: .5s;\n  -o-transition: .5s;\n  -webkit-transition: .5s;\n  -moz-transition: .5s;\n  -ms-transition: .5s;\n  transition-delay: .2s;\n}\n.team-icon{\n  margin-top: 3px;\n  transition: .3s;\n  position: relative;\n  z-index: 1;\n  transition: .3s;\n  -webkit-transition: .3s;\n  -moz-transition: .3s;\n  -ms-transition: .3s;\n  -o-transition: .3s;\n  margin-left: 20px;\n}\n.team-social {\n  padding-left: 0;\n  display: inline-flex;\n  list-style: none;\n  margin: 0;\n}\n.team-social li{\n  margin: 0;\n}\n.team-social li a {\n  font-size: 17px;\n  color: #f31515;\n  transition: .3s;\n  -webkit-transition: .3s;\n  -moz-transition: .3s;\n  -ms-transition: .3s;\n  -o-transition: .3s;\n  text-align: center;\n  margin-right: 11px;\n  float: left;\n  height: 30px;\n  width: 30px;\n  background-color: white;\n  border-radius: 5px;\n  line-height: 30px;\n}\n.team-social li a:hover {\n  color: black;\n  background-color: white;\n}\n\n\n.team-icon-grid {\n  width: 100%;\n  background-color: transparent;\n  position: relative;\n  margin-top: 20px;\n  transform: translateY(250px);\n  transition: .8s;\n  -o-transition: .8s;\n  -webkit-transition: .8s;\n  -moz-transition: .8s;\n  -ms-transition: .8s;\n  transition-delay: .6s;\n}\n\n.round-question{\n  border: 1px solid;\n  width: 38px;\n  border-radius: 50%;\n  text-align: center;\n  cursor: pointer;\n  font-size: 20px;\n}\n\n.black{\n  border: 1px solid black !important;\n  color: black !important;\n  font-size: 20px;\n}\n\n.wrap{\n  display: flex;\n  text-align: center;\n  flex-wrap: wrap !important;\n}\n\n\n///\n.scoll-component {\n  display: flex;\n  align-items: stretch;\n  width: 100%;\n  height: 60px;\n\n  .total-items {\n    min-width: 80px;\n    align-self: center;\n    text-align: center;\n  }\n\n  // Container\n  .scoll-container {\n    position: relative;\n    display: flex;\n    overflow: hidden;\n    flex-grow: 1;\n    padding-left: 49px;\n    padding-right: 49px;\n    // Scroll\n    .scroll-content {\n      display: flex;\n      overflow-x: auto;\n      overflow-y: hidden;\n      flex-wrap: nowrap;\n      align-items: center;\n\n      .arrowStyle{\n        background: transparent;\n        font-size: 28px;\n        border: 0 ridge;\n      }\n      // Arrows\n      .arrow {\n        position: absolute;\n        width: 60px;\n        text-align: center;\n        z-index: 2;\n        &.hide {\n          display: none;\n        }\n        &.left-arrow {\n          left: 0;\n        }\n        &.right-arrow {\n          right : 0;\n        }\n      }\n\n      // Items\n      .scroll-item {\n        width: auto;\n        margin: 0 10px;\n        flex: 0 0 auto;\n      }\n    }\n  }\n}\n\n.selectedQuestion {\n  border: 1px solid #a837aa!important;\n  color: #a837aa;\n  font-size: 20px;\n  background: #e6baea4d;\n}\n\n.icon {\n  font-size: 20px; border: 1px solid #8F008A; border-radius: 4px; padding: 6px;\n  align-content: center;\n  margin-right: 12px;\n}\n\n.upload-count {\n  font-size: 12px;\n  color: #8f008a;\n  font-weight: bolder;\n}\n\n.dropdown-toggle::after{\n  display: none !important;\n}\n\n.question-side-icon {\n  height: 28px;width: 28px;object-fit: contain;\n}\n\n.text-wrap-balance {\n  text-wrap: balance !important;\n}\n\n.button_design {\n  border: 0 !important;\n  font-size: 14px;\n  padding: 9px 12px !important;\n}\n\n.inner_button {\n  padding: 4px 8px !important;\n  background: #ffff !important;\n  color: black;\n  border: 2px solid #e1e4eb !important;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 16px;\n  height: 30px;\n}\n\n.button_design {\n  cursor: default;\n}\n\n.inner_button:focus, .button_design:focus {\n  box-shadow: none !important;\n  outline: none;\n}\n\n.button_design:active {\n  color: #FFFFFF !important;\n}\n\n.inner_button:active {\n  color: black !important;\n}\n\n.inner_button:focus-visible, .button_design:focus-visible {\n  outline: none !important;\n}\n\n.jump-question-box {\n  position: absolute;\n  bottom: 40px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #fff;\n  border-radius: 10px;\n  padding: 15px 20px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  z-index: 1000 !important;\n  min-width: 556px;\n}\n\n.description_box {\n  position: absolute;\n  left: 365px;\n  transform: translateX(-50%);\n  background: #fff;\n  border-radius: 10px;\n  padding: 15px 20px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  z-index: 1000 !important;\n  min-width: 730px;\n  max-height: 45vh !important;\n  overflow-y: scroll !important;\n}\n\n.calculator_box {\n  position: absolute;\n  left: 365px;\n  transform: translateX(-50%);\n  background: #fff;\n  border-radius: 10px;\n  padding: 15px 20px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  z-index: 1000 !important;\n  min-width: 730px;\n  //max-height: 65vh !important;\n  //overflow-y: scroll !important;\n}\n\n.box-title {\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n\n.question-grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 8px;\n}\n\n.question-grid-submit {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 8px;\n}\n\n.question-grid button, .question-grid-submit button {\n  padding: 8px 16px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  background-color: white;\n  transition: 0.2s ease;\n}\n\n.question-grid button:hover, .question-grid-submit button:hover {\n  background-color: #f0f0f0;\n}\n\n.question-grid button.active, .question-grid button:hover, .question-grid-submit button.active, .question-grid-submit button:hover{\n  border-color: #8f008a;\n  color: #8f008a;\n  border-width: 2px;\n}\n\n.question-grid button.bg-green, .question-grid-submit button.bg-green {\n  border: 2px solid #8cc253!important;\n  color: #8cc253 !important;\n}\n\n.question-grid button.bg-partially, .question-grid-submit button.bg-partially {\n  border: 2px solid #ffbc58!important;\n  color: #ffbc58 !important;\n}\n\n.question-grid button.bg-red, .question-grid-submit button.bg-red {\n  border: 2px solid #f1463e!important;\n  color: #f1463e !important;\n}\n\n.question_design {\n  font-size: 18px;\n  margin-bottom: 12px;\n  font-weight: bold;\n}\n\n.timer_button {\n  border: 1px solid #8f008a;\n  background: #fff !important;\n  border-radius: 4px;\n  i {\n    font-size: 20px;\n  }\n}\n\n.drag-handle {\n  cursor: move;\n  user-select: none;\n}\n\n.eliminator {\n  font-size: 16px;\n  cursor: pointer;\n  color: #888;\n}\n\n.eliminated-option {\n  position: relative;\n  display: inline-block;\n  opacity: 0.6;\n}\n\n.rw {\n  .eliminated-option * {\n    text-decoration: line-through !important;\n    color: #888 !important;\n  }\n\n  .cfs {\n    span {\n      font-size: 16px;\n    }\n  }\n}\n\n.math {\n  .eliminated-option::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 2px;\n    background-color: #888;\n    pointer-events: none;\n  }\n}\n\n.progress-bar {\n  transition: width 0.8s ease-in-out;\n  background-color: #00a8ff;\n}\n\n.dropdown-item:hover {\n  color: #8f008a;\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.StudentService }, { type: i3.ConfigurationService }, { type: i4.DomSanitizer }, { type: i5.NgbModal }, { type: i6.Router }, { type: i7.CreatorService }, { type: i8.NavService }, { type: i9.ToastrService }, { type: i10.TeacherService }, { type: i11.CommonService }, { type: i12.ContentdetailService }, { type: i0.ChangeDetectorRef }, { type: i13.EnvironmentService }, { type: i14.CommonDataService }, { type: i15.NewsubjectService }, { type: i6.ActivatedRoute }], { submitAlert: [{
            type: ViewChild,
            args: ['submitAlert']
        }], reviewAlert: [{
            type: ViewChild,
            args: ['reviewAlert']
        }], durationWarning: [{
            type: ViewChild,
            args: ['durationWarning', { static: false }]
        }], testTimerStatus: [{
            type: ViewChild,
            args: ['testTimerStatus', { static: false }]
        }], answerGraph: [{
            type: ViewChild,
            args: ['answerGraph']
        }], link: [{
            type: ViewChild,
            args: ['content']
        }], workArea: [{
            type: ViewChild,
            args: ['workArea']
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
        }], jumpWrapper: [{
            type: ViewChild,
            args: ['jumpWrapper']
        }], qnsWrapper: [{
            type: ViewChild,
            args: ['qnsWrapper']
        }], chartContainer: [{
            type: ViewChild,
            args: ['chart2', { static: true }]
        }], showExpand: [{
            type: ViewChild,
            args: ['showExpand']
        }], header: [{
            type: ViewChild,
            args: ['header']
        }], footer: [{
            type: ViewChild,
            args: ['footer']
        }], contentCard: [{
            type: ViewChild,
            args: ['contentCard']
        }], onClickOutside: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }], onResize: [{
            type: HostListener,
            args: ['window:resize']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AnsweringComponent, { className: "AnsweringComponent" }); })();
//# sourceMappingURL=answering.component.js.map