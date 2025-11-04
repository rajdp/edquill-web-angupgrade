import { Component, ViewChild } from '@angular/core';
import { parse } from 'flatted';
import { dateOptions } from '../../../shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/report.service";
import * as i3 from "../../../shared/service/configuration.service";
import * as i4 from "@angular/platform-browser";
import * as i5 from "@angular/common";
import * as i6 from "@angular/router";
import * as i7 from "../../../shared/service/common-data.service";
import * as i8 from "../../../shared/service/teacher.service";
import * as i9 from "@ng-bootstrap/ng-bootstrap";
import * as i10 from "ngx-toastr";
import * as i11 from "../../../shared/service/validation.service";
import * as i12 from "@angular/forms";
import * as i13 from "../../../shared/service/common.service";
import * as i14 from "@nodro7/angular-mydatepicker";
import * as i15 from "../../auth/graph-component/graph-component.component";
import * as i16 from "../../auth/annotation/annotation.component";
import * as i17 from "../../../shared/pipes/sanitizer/SanitizeHtmlPipe.pipe";
const _c0 = ["content"];
const _c1 = ["viewStudentDetails"];
const _c2 = a0 => ({ "active1": a0 });
const _c3 = (a0, a1, a2) => ({ "ans-correct": a0, "ans-selected": a1, "ans-wrong": a2 });
const _c4 = (a0, a1) => ({ "wrong-ans": a0, "correct-ans": a1 });
function StudentPerformanceReportComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const classData_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", classData_r2.class_code);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(classData_r2.class_name);
} }
function StudentPerformanceReportComponent_ng_template_48_h4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 30)(1, "b");
    i0.ɵɵtext(2, "Assessment List");
    i0.ɵɵelementEnd()();
} }
function StudentPerformanceReportComponent_ng_template_48_h4_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 30)(1, "b");
    i0.ɵɵtext(2, "Assignment List");
    i0.ɵɵelementEnd()();
} }
function StudentPerformanceReportComponent_ng_template_48_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "label", 34);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 34);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "label", 34);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const class_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i_r7 + 1, ".");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("ContentName : ", class_r6.content_name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Percentage : ", class_r6.percentage, "");
} }
function StudentPerformanceReportComponent_ng_template_48_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtemplate(1, StudentPerformanceReportComponent_ng_template_48_div_6_div_1_Template, 7, 3, "div", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r7.viewData);
} }
function StudentPerformanceReportComponent_ng_template_48_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31)(1, "button", 35);
    i0.ɵɵtext(2, "No List Available!");
    i0.ɵɵelementEnd()();
} }
function StudentPerformanceReportComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵtemplate(1, StudentPerformanceReportComponent_ng_template_48_h4_1_Template, 3, 0, "h4", 25)(2, StudentPerformanceReportComponent_ng_template_48_h4_2_Template, 3, 0, "h4", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 26)(4, "div", 27)(5, "div", 6);
    i0.ɵɵtemplate(6, StudentPerformanceReportComponent_ng_template_48_div_6_Template, 2, 1, "div", 28)(7, StudentPerformanceReportComponent_ng_template_48_div_7_Template, 3, 0, "div", 28);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 29)(9, "button", 20);
    i0.ɵɵlistener("click", function StudentPerformanceReportComponent_ng_template_48_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r5); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.close()); });
    i0.ɵɵtext(10, "Ok");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r7.type == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r7.type == 2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r7.viewData != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r7.viewData == "");
} }
function StudentPerformanceReportComponent_ng_template_50_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 55);
    i0.ɵɵelement(1, "input", 56);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", sec_r10.heading);
} }
function StudentPerformanceReportComponent_ng_template_50_div_9_div_2_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 73);
    i0.ɵɵtext(1, "Invalid Points");
    i0.ɵɵelementEnd();
} }
function StudentPerformanceReportComponent_ng_template_50_div_9_div_2_ul_12_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 77)(1, "span")(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "i", 78)(5, "i", 79);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r16 = ctx.$implicit;
    const item_r13 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c3, option_r16 == item_r13.answer, option_r16 == item_r13.student_answer, option_r16 != item_r13.answer && option_r16 == item_r13.student_answer));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(option_r16);
} }
function StudentPerformanceReportComponent_ng_template_50_div_9_div_2_ul_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 74);
    i0.ɵɵelement(1, "p", 75);
    i0.ɵɵtemplate(2, StudentPerformanceReportComponent_ng_template_50_div_9_div_2_ul_12_li_2_Template, 6, 6, "li", 76);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", item_r13.question == "")("innerHTML", item_r13.question, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r13.array);
} }
function StudentPerformanceReportComponent_ng_template_50_div_9_div_2_ul_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 74);
    i0.ɵɵelement(1, "p", 75);
    i0.ɵɵelementStart(2, "li", 77)(3, "span");
    i0.ɵɵelement(4, "input", 80);
    i0.ɵɵtext(5, " True ");
    i0.ɵɵelement(6, "i", 78)(7, "i", 79);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "li", 77)(9, "span");
    i0.ɵɵelement(10, "input", 81);
    i0.ɵɵtext(11, " False ");
    i0.ɵɵelement(12, "i", 78)(13, "i", 79);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", item_r13.question == "")("innerHTML", item_r13.question, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(6, _c3, item_r13.answer == "true", item_r13.student_answer == "true", item_r13.answer == "false" && item_r13.student_answer == "true"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", item_r13.student_answer == "true");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(10, _c3, item_r13.answer == "false", item_r13.student_answer == "false", item_r13.answer == "true" && item_r13.student_answer == "false"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", item_r13.student_answer == "false");
} }
function StudentPerformanceReportComponent_ng_template_50_div_9_div_2_ul_14_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 77)(1, "span", 82);
    i0.ɵɵtext(2);
    i0.ɵɵelement(3, "i", 78)(4, "i", 79);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r17 = ctx.$implicit;
    const item_r13 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c3, option_r17 == item_r13.answer, option_r17 == item_r13.student_answer, option_r17 != item_r13.answer && option_r17 == item_r13.student_answer));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", option_r17, " ");
} }
function StudentPerformanceReportComponent_ng_template_50_div_9_div_2_ul_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 74);
    i0.ɵɵelement(1, "p", 75);
    i0.ɵɵtemplate(2, StudentPerformanceReportComponent_ng_template_50_div_9_div_2_ul_14_li_2_Template, 5, 6, "li", 76);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", item_r13.question == "")("innerHTML", item_r13.question, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r13.mob_options);
} }
function StudentPerformanceReportComponent_ng_template_50_div_9_div_2_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 83);
    i0.ɵɵelement(1, "p", 75)(2, "input", 84);
    i0.ɵɵelementStart(3, "label", 85);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", item_r13.question == "")("innerHTML", item_r13.question, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(5, _c4, item_r13.match_case ? item_r13.answer != item_r13.student_answer : item_r13.answer.toLowerCase() != item_r13.student_answer.toLowerCase(), item_r13.match_case ? item_r13.answer == item_r13.student_answer : item_r13.answer.toLowerCase() == item_r13.student_answer.toLowerCase()))("value", item_r13.student_answer);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Correct answer : ", item_r13.answer, "");
} }
function StudentPerformanceReportComponent_ng_template_50_div_9_div_2_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 86)(1, "textarea", 87);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r13.student_answer);
} }
function StudentPerformanceReportComponent_ng_template_50_div_9_div_2_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 86)(1, "div", 88)(2, "label");
    i0.ɵɵtext(3, "Student Answer: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "h4", 89);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 88)(7, "label");
    i0.ɵɵtext(8, "Correct Answer: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "h4", 89);
    i0.ɵɵpipe(10, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, item_r13.student_answer), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(10, 4, item_r13.answer), i0.ɵɵsanitizeHtml);
} }
function StudentPerformanceReportComponent_ng_template_50_div_9_div_2_div_18_app_graph_component_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-graph-component", 92);
} if (rf & 2) {
    const item_r13 = i0.ɵɵnextContext(2).$implicit;
    const i_r15 = i0.ɵɵnextContext().index;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("editMode", false)("editPatchValue", ctx_r7.parseVal(item_r13.student_answer[0].correctAnswer))("graphId", i_r15 + "Editgraph" + item_r13.sub_question_no + "id")("questionType", "40");
} }
function StudentPerformanceReportComponent_ng_template_50_div_9_div_2_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 90)(1, "div", 91)(2, "label");
    i0.ɵɵtext(3, "Correct Answer: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "app-graph-component", 92);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 91)(6, "label");
    i0.ɵɵtext(7, "Student Answer: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, StudentPerformanceReportComponent_ng_template_50_div_9_div_2_div_18_app_graph_component_8_Template, 1, 4, "app-graph-component", 93);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r13 = i0.ɵɵnextContext().$implicit;
    const i_r15 = i0.ɵɵnextContext().index;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("editMode", false)("editPatchValue", ctx_r7.parseVal(item_r13.answer))("graphId", i_r15 + "correctgraph" + item_r13.sub_question_no + "id")("questionType", "40");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", item_r13.student_answer != "");
} }
function StudentPerformanceReportComponent_ng_template_50_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57)(1, "div", 58)(2, "div", 59)(3, "button", 60);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 61)(6, "input", 62);
    i0.ɵɵlistener("input", function StudentPerformanceReportComponent_ng_template_50_div_9_div_2_Template_input_input_6_listener($event) { const ctx_r11 = i0.ɵɵrestoreView(_r11); const item_r13 = ctx_r11.$implicit; const j_r14 = ctx_r11.index; const i_r15 = i0.ɵɵnextContext().index; const ctx_r7 = i0.ɵɵnextContext(2); ctx_r7.getPoints($event, i_r15, j_r14); return i0.ɵɵresetView(ctx_r7.markValidation($event, item_r13.points, i_r15, j_r14)); })("keypress", function StudentPerformanceReportComponent_ng_template_50_div_9_div_2_Template_input_keypress_6_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r7 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r7.numberValidate($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 63);
    i0.ɵɵlistener("keypress", function StudentPerformanceReportComponent_ng_template_50_div_9_div_2_Template_input_keypress_7_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r7 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r7.numberValidate($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "br");
    i0.ɵɵtemplate(9, StudentPerformanceReportComponent_ng_template_50_div_9_div_2_span_9_Template, 2, 0, "span", 64);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 6)(11, "div", 45);
    i0.ɵɵtemplate(12, StudentPerformanceReportComponent_ng_template_50_div_9_div_2_ul_12_Template, 3, 3, "ul", 65)(13, StudentPerformanceReportComponent_ng_template_50_div_9_div_2_ul_13_Template, 14, 14, "ul", 65)(14, StudentPerformanceReportComponent_ng_template_50_div_9_div_2_ul_14_Template, 3, 3, "ul", 65)(15, StudentPerformanceReportComponent_ng_template_50_div_9_div_2_div_15_Template, 5, 8, "div", 66)(16, StudentPerformanceReportComponent_ng_template_50_div_9_div_2_div_16_Template, 3, 1, "div", 67)(17, StudentPerformanceReportComponent_ng_template_50_div_9_div_2_div_17_Template, 11, 6, "div", 67)(18, StudentPerformanceReportComponent_ng_template_50_div_9_div_2_div_18_Template, 9, 5, "div", 68);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 69)(20, "div", 70)(21, "label");
    i0.ɵɵtext(22, "Student feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(23, "textarea", 71);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 70)(25, "label");
    i0.ɵɵtext(26, "Feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "textarea", 72);
    i0.ɵɵlistener("input", function StudentPerformanceReportComponent_ng_template_50_div_9_div_2_Template_textarea_input_27_listener($event) { const j_r14 = i0.ɵɵrestoreView(_r11).index; const i_r15 = i0.ɵɵnextContext().index; const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.getFeedback($event, i_r15, j_r14)); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r13.sub_question_no);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", item_r13.given_points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", item_r13.points);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r13.maxValErr);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r13.question_type_id == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r13.question_type_id == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r13.question_type_id == 9);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r13.question_type_id == 10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r13.question_type_id == 20);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r13.question_type_id == 30);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r13.question_type_id == 40);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", item_r13.student_feedback == null ? "" : item_r13.student_feedback);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", item_r13.feedback);
} }
function StudentPerformanceReportComponent_ng_template_50_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 52);
    i0.ɵɵtemplate(1, StudentPerformanceReportComponent_ng_template_50_div_9_div_1_Template, 2, 1, "div", 53)(2, StudentPerformanceReportComponent_ng_template_50_div_9_div_2_Template, 28, 13, "div", 54);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r10 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r10.heading != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", sec_r10.section);
} }
function StudentPerformanceReportComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26)(1, "div", 27)(2, "div", 6)(3, "div", 36)(4, "h4", 37);
    i0.ɵɵtext(5, "Correction Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 38)(7, "i", 39);
    i0.ɵɵlistener("click", function StudentPerformanceReportComponent_ng_template_50_Template_i_click_7_listener() { i0.ɵɵrestoreView(_r9); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.close()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 40);
    i0.ɵɵtemplate(9, StudentPerformanceReportComponent_ng_template_50_div_9_Template, 3, 2, "div", 41);
    i0.ɵɵelementStart(10, "div", 42)(11, "div", 43)(12, "div", 44)(13, "div", 45)(14, "label");
    i0.ɵɵtext(15, "Obtained Points");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "input", 46);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentPerformanceReportComponent_ng_template_50_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r7 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r7.studentPoints, $event) || (ctx_r7.studentPoints = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 47)(18, "label");
    i0.ɵɵtext(19, "Total Points");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "input", 46);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentPerformanceReportComponent_ng_template_50_Template_input_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r7 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r7.totalPoints, $event) || (ctx_r7.totalPoints = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "div", 48)(22, "label");
    i0.ɵɵtext(23, "Feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "textarea", 49);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentPerformanceReportComponent_ng_template_50_Template_textarea_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r7 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r7.totalFeedBack, $event) || (ctx_r7.totalFeedBack = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(25, "div", 50);
    i0.ɵɵelement(26, "app-annotation", 51);
    i0.ɵɵelementStart(27, "div", 42)(28, "div", 43)(29, "div", 44)(30, "div", 45)(31, "label");
    i0.ɵɵtext(32, "Obtained Points");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "input", 46);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentPerformanceReportComponent_ng_template_50_Template_input_ngModelChange_33_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r7 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r7.studentPoints, $event) || (ctx_r7.studentPoints = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 47)(35, "label");
    i0.ɵɵtext(36, "Total Points");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "input", 46);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentPerformanceReportComponent_ng_template_50_Template_input_ngModelChange_37_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r7 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r7.totalPoints, $event) || (ctx_r7.totalPoints = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(38, "div", 48)(39, "label");
    i0.ɵɵtext(40, "Feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "textarea", 49);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentPerformanceReportComponent_ng_template_50_Template_textarea_ngModelChange_41_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r7 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r7.totalFeedBack, $event) || (ctx_r7.totalFeedBack = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()()()()()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("hidden", ctx_r7.studentAnswer.answers.length == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r7.totalAns);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r7.studentPoints);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r7.totalPoints);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r7.totalFeedBack);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r7.studentAnswer.answers.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("getAnnotate", ctx_r7.areaInfo)("getDragQues", ctx_r7.dragQuestionsList)("pdfPath", ctx_r7.pdfTemplate)("toolHide", true)("userType", "teacher");
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r7.studentPoints);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r7.totalPoints);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r7.totalFeedBack);
} }
export class StudentPerformanceReportComponent {
    constructor(auth, report, confi, sanitizer, datePipe, route, commondata, teacher, modalService, toastr, validationService, formBuilder, common) {
        this.auth = auth;
        this.report = report;
        this.confi = confi;
        this.sanitizer = sanitizer;
        this.datePipe = datePipe;
        this.route = route;
        this.commondata = commondata;
        this.teacher = teacher;
        this.modalService = modalService;
        this.toastr = toastr;
        this.validationService = validationService;
        this.formBuilder = formBuilder;
        this.common = common;
        this.dragQuestionsList = [];
        this.areaInfo = [];
        this.zoom = 1.0;
        this.webhost = this.confi.getimgUrl();
        this.studentReport = this.formBuilder.group({
            className: '',
            fromDate: '',
            toDate: ''
        });
    }
    // public assignment = {
    //     hideSubHeader: false,
    //     actions: {
    //         add: false,
    //         edit: false,
    //         delete: false,
    //         position: 'right',
    //     },
    //
    //
    //     columns: {
    //         content_name: {
    //             title: 'Assignment Name',
    //             type: 'html',
    //             valuePrepareFunction: (data) => {
    //                 return `<span class="text-capitalize font-weight-bold table-name">${data}</span>`;
    //             }
    //         },
    //         graded: {
    //             title: 'Graded'
    //         },
    //         absent: {
    //             title: 'Absent'
    //         },
    //         start_date: {
    //             title: 'Assignment Date'
    //         },
    //         your_score: {
    //             title: 'Min. Score'
    //         },
    //         total_score: {
    //             title: 'Max. Score'
    //         },
    //         percentage: {
    //             title: 'Avg. Score'
    //         }
    //     }
    // };
    // public assessment = {
    //     hideSubHeader: false,
    //     actions: {
    //         add: false,
    //         edit: false,
    //         delete: false,
    //         position: 'right',
    //     },
    //
    //
    //     columns: {
    //         content_name: {
    //             title: 'Assessment Name',
    //             type: 'html',
    //             valuePrepareFunction: (data) => {
    //                 return `<span class="text-capitalize font-weight-bold table-name">${data}</span>`;
    //             }
    //         },
    //         graded: {
    //             title: 'Graded'
    //         },
    //         absent: {
    //             title: 'Absent'
    //         },
    //         start_date: {
    //             title: 'Assessment Date'
    //         },
    //         your_score: {
    //             title: 'Min.Score'
    //         },
    //         total_score: {
    //             title: 'Max.Score'
    //         },
    //         percentage: {
    //             title: 'Avg. Score'
    //         }
    //     }
    // };
    ngOnInit() {
        this.classDetails();
        this.reports();
    }
    numberValidate(event) {
        this.validationService.numberValidate(event);
    }
    studentList(id) {
        this.studentlisthighlight = id;
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
    onDateChanged1(event, type) {
        if (type == '1') {
            this.myDpOptions = {
                dateRange: false,
                dateFormat: dateOptions.pickerFormat,
                disableUntil: {
                    year: event.singleDate.date.year,
                    month: event.singleDate.date.month,
                    day: event.singleDate.date.day != 1 ? event.singleDate.date.day - 1 : -1,
                },
            };
            this.from1Date = event.singleDate.formatted;
            this.reports();
        }
        else {
            this.to1Date = event.singleDate.formatted;
            this.reports();
        }
    }
    classDetails() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_code: '',
            from_date: this.from1Date == '' ? '' : this.from1Date,
            to_date: this.to1Date == '' ? '' : this.to1Date,
        };
        this.report.gradeReport(data).subscribe((successData) => {
            if (successData.IsSuccess) {
                this.classList = successData.ResponseObject;
            }
        }, (error) => {
            console.error(error, 'error');
        });
    }
    selectClass(event) {
        this.studentReport.controls.className.patchValue(event.target.value);
        this.reports();
    }
    reports() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_code: this.studentReport.controls.className.value,
            from_date: this.from1Date == '' ? '' : this.from1Date,
            to_date: this.to1Date == '' ? '' : this.to1Date,
        };
        this.report.gradeReport(data).subscribe((successData) => {
            if (successData.IsSuccess) {
                this.reportList = successData.ResponseObject;
            }
        }, (error) => {
            console.error(error, 'error');
        });
    }
    viewdetailsList(type, data) {
        this.type = type;
        this.viewData = data;
        this.modalRef = this.modalService.open(this.viewContent);
    }
    open(content) {
        this.modalService.open(content);
    }
    close() {
        this.modalRef.close();
    }
    studentCorrectionDetail(event) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: event.data.content_id,
            content_format: event.data.content_format,
            class_id: event.data.class_id,
            student_id: event.data.student_id,
            student_content_id: event.data.student_content_id
        };
        this.teacher.studentAnswerList(data).subscribe((successData) => {
            this.answerListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_answeringList');
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
                                    if (val == false) {
                                        if (ans.toLowerCase() == student_ans.toLowerCase()) {
                                            this.studentAnswer.answers[i].section[x].sub_questions[j].given_points = this.studentAnswer.answers[i].section[x].sub_questions[j].points;
                                        }
                                    }
                                    if (ans == student_ans) {
                                        this.studentAnswer.answers[i].section[x].sub_questions[j].given_points = this.studentAnswer.answers[i].section[x].sub_questions[j].points;
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
                    this.areaInfo = [...this.studentAnswer.annotation, ...this.studentAnswer.student_annotation, ...this.studentAnswer.teacher_annotation];
                    this.dragQuestionsList = [...this.studentAnswer.question_annotation];
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
                this.modalRef = this.modalService.open(this.viewStudentDetails, { size: 'xl' });
            }
            else if (this.studentAnswer.status == '1' || this.studentAnswer.status == '2') {
                this.toastr.error('Student not answered');
            }
            else if (this.studentAnswer.status == '6' || this.studentAnswer.status == '4') {
                this.toastr.error('Correction pending');
            }
        }
    }
    static { this.ɵfac = function StudentPerformanceReportComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentPerformanceReportComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.ReportService), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i4.DomSanitizer), i0.ɵɵdirectiveInject(i5.DatePipe), i0.ɵɵdirectiveInject(i6.Router), i0.ɵɵdirectiveInject(i7.CommonDataService), i0.ɵɵdirectiveInject(i8.TeacherService), i0.ɵɵdirectiveInject(i9.NgbModal), i0.ɵɵdirectiveInject(i10.ToastrService), i0.ɵɵdirectiveInject(i11.ValidationService), i0.ɵɵdirectiveInject(i12.FormBuilder), i0.ɵɵdirectiveInject(i13.CommonService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentPerformanceReportComponent, selectors: [["app-student-performance-report"]], viewQuery: function StudentPerformanceReportComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewStudentDetails = _t.first);
        } }, decls: 52, vars: 21, consts: [["dp", "angular-mydatepicker"], ["dp1", "angular-mydatepicker"], ["content", ""], ["viewStudentDetails", ""], [1, "container-fluid", "report"], [3, "formGroup"], [1, "row"], [1, "group-btn", "col-12", "col-lg-12", "mt-2"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "ngClass"], [1, "row", "mb-2", "mt-4"], [1, "form-group", "col-4"], [1, "col-xl-12", "col-md-12"], ["formControlName", "className", 1, "custom-select", "col-md-12", 3, "change"], ["value", "", "hidden", ""], [3, "value", 4, "ngFor", "ngForOf"], [2, "visibility", "hidden"], [1, "col-xl-12", "col-md-12", "form-group"], [1, "input-group"], ["name", "fromdate", "placeholder", "mm/dd/yyyy", "formControlName", "fromDate", "angular-mydatepicker", "", 1, "form-control", 3, "dateChanged"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-calendar-o"], ["name", "todate", "placeholder", "mm/dd/yyyy", "formControlName", "toDate", "angular-mydatepicker", "", 1, "form-control", 3, "dateChanged", "options"], [3, "value"], [1, "modal-header"], ["class", "modal-title col-12 text-center", 4, "ngIf"], [1, "modal-body"], [1, "container-fluid"], ["class", "col-sm-12", 4, "ngIf"], [1, "modal-footer"], [1, "modal-title", "col-12", "text-center"], [1, "col-sm-12"], ["class", "d-flex text-center mt-3", 4, "ngFor", "ngForOf"], [1, "d-flex", "text-center", "mt-3"], [1, "ml-3"], [1, "nodataList", "w-50", "ml-5"], [1, "col-md-12", "modal-header"], [1, "modal-title"], [1, "text-right"], ["aria-hidden", "true", 1, "fa", "fa-close", "fa-2x", 2, "cursor", "pointer", 3, "click"], [1, "col-md-12", "scrollPanel", "view-question", 2, "height", "100vh", 3, "hidden"], ["class", "card mt-2 div-disable", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mt-3", "card", "p-4"], [1, "col-md-12", "d-flex"], [1, "col-md-6", "px-0", "mb-2"], [1, "col-md-12"], ["type", "text", 1, "form-control", "div-disable", 3, "ngModelChange", "ngModel"], [1, "col-md-12", "mt-3"], [1, "col-md-6", "mb-1"], ["cols", "30", "rows", "5", 1, "form-control", "div-disable", 3, "ngModelChange", "ngModel"], [1, "col-md-12", 3, "hidden"], [3, "getAnnotate", "getDragQues", "pdfPath", "toolHide", "userType"], [1, "card", "mt-2", "div-disable"], ["class", "col-md-12 mb-3", 4, "ngIf"], ["class", "card-body mb-3", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mb-3"], ["type", "text", 1, "input-custom-modal", "div-disable", 3, "value"], [1, "card-body", "mb-3"], [1, "row", "d-flex", "justify-content-between"], [1, "col-md-1"], [1, "btn", "btn-primary", "mr-3"], [1, "col-md-3", "text-right"], ["autocomplete", "off", "name", "points", 1, "mark-input", 2, "text-align", "center", 3, "input", "keypress", "value"], [1, "mark-input", "div-disable", 2, "text-align", "center", 3, "keypress", "value"], ["class", "errormessage", 4, "ngIf"], ["class", "mt-4", 4, "ngIf"], ["class", "col-md-6 mt-4 px-0", 4, "ngIf"], ["class", "col-md-12 mt-4 px-0", 4, "ngIf"], ["class", "col-md-12 mt-4 px-0 d-flex", 4, "ngIf"], [1, "row", "mt-4", "d-flex"], [1, "col-md-6"], ["rows", "3", 1, "form-control", "div-disable", 3, "value"], ["placeholder", "Feed Back", "rows", "3", 1, "form-control", "div-disable", 3, "input", "value"], [1, "errormessage"], [1, "mt-4"], [1, "mb-0", "mt-2", 3, "hidden", "innerHTML"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["aria-hidden", "true", 1, "fa", "fa-check"], ["aria-hidden", "true", 1, "fa", "fa-times"], ["name", "ans", "type", "radio", "value", "true", 1, "radio-size", "form-control", "mr-2", "div-disable", 3, "checked"], ["name", "ans", "type", "radio", "value", "false", 1, "radio-size", "form-control", "mr-2", "div-disable", 3, "checked"], [1, "capital"], [1, "col-md-6", "mt-4", "px-0"], ["type", "text", 1, "form-control", "div-disable", "mt-2", 3, "ngClass", "value"], ["value", "Correct answer", 1, "mt-4"], [1, "col-md-12", "mt-4", "px-0"], ["cols", "30", "rows", "4", 1, "form-control", "div-disable"], [1, "d-flex"], [1, "ml-3", 3, "innerHTML"], [1, "col-md-12", "mt-4", "px-0", "d-flex"], [1, "col-md-6", "div-disable"], [3, "editMode", "editPatchValue", "graphId", "questionType"], [3, "editMode", "editPatchValue", "graphId", "questionType", 4, "ngIf"]], template: function StudentPerformanceReportComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "section", 4)(1, "form", 5)(2, "div", 6)(3, "div", 7)(4, "button", 8);
            i0.ɵɵlistener("click", function StudentPerformanceReportComponent_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.studentList(1)); });
            i0.ɵɵtext(5, "All");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 8);
            i0.ɵɵlistener("click", function StudentPerformanceReportComponent_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.studentList(2)); });
            i0.ɵɵtext(7, "Master");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "button", 8);
            i0.ɵɵlistener("click", function StudentPerformanceReportComponent_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.studentList(3)); });
            i0.ɵɵtext(9, "Excellent");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 8);
            i0.ɵɵlistener("click", function StudentPerformanceReportComponent_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.studentList(4)); });
            i0.ɵɵtext(11, "Proficiant");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 8);
            i0.ɵɵlistener("click", function StudentPerformanceReportComponent_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.studentList(6)); });
            i0.ɵɵtext(13, "Average");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "button", 8);
            i0.ɵɵlistener("click", function StudentPerformanceReportComponent_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.studentList(7)); });
            i0.ɵɵtext(15, "Bellow Average");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(16, "div", 9)(17, "div", 10)(18, "label", 11);
            i0.ɵɵtext(19, "Class Code & Class Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "select", 12);
            i0.ɵɵlistener("change", function StudentPerformanceReportComponent_Template_select_change_20_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.selectClass($event)); });
            i0.ɵɵelementStart(21, "option", 13);
            i0.ɵɵtext(22, "--Select--");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(23, StudentPerformanceReportComponent_option_23_Template, 2, 2, "option", 14);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "div", 10)(25, "label", 11)(26, "span", 15);
            i0.ɵɵtext(27, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(28, " From Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "div", 16)(30, "div", 17)(31, "input", 18, 0);
            i0.ɵɵlistener("dateChanged", function StudentPerformanceReportComponent_Template_input_dateChanged_31_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDateChanged1($event, "1")); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "div", 19)(34, "button", 20);
            i0.ɵɵlistener("click", function StudentPerformanceReportComponent_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r1); const dp_r3 = i0.ɵɵreference(32); return i0.ɵɵresetView(dp_r3.toggleCalendar()); });
            i0.ɵɵelement(35, "i", 21);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(36, "div", 10)(37, "label", 11)(38, "span", 15);
            i0.ɵɵtext(39, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(40, " To Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "div", 16)(42, "div", 17)(43, "input", 22, 1);
            i0.ɵɵlistener("dateChanged", function StudentPerformanceReportComponent_Template_input_dateChanged_43_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDateChanged1($event, "2")); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "div", 19)(46, "button", 20);
            i0.ɵɵlistener("click", function StudentPerformanceReportComponent_Template_button_click_46_listener() { i0.ɵɵrestoreView(_r1); const dp1_r4 = i0.ɵɵreference(44); return i0.ɵɵresetView(dp1_r4.toggleCalendar()); });
            i0.ɵɵelement(47, "i", 21);
            i0.ɵɵelementEnd()()()()()()()();
            i0.ɵɵtemplate(48, StudentPerformanceReportComponent_ng_template_48_Template, 11, 4, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(50, StudentPerformanceReportComponent_ng_template_50_Template, 42, 14, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.studentReport);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c2, ctx.studentlisthighlight == "1"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c2, ctx.studentlisthighlight == "2"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(13, _c2, ctx.studentlisthighlight == "3"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(15, _c2, ctx.studentlisthighlight == "4"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(17, _c2, ctx.studentlisthighlight == "6"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(19, _c2, ctx.studentlisthighlight == "7"));
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngForOf", ctx.classList);
            i0.ɵɵadvance(20);
            i0.ɵɵproperty("options", ctx.myDpOptions);
        } }, dependencies: [i5.NgClass, i5.NgForOf, i5.NgIf, i12.ɵNgNoValidate, i12.NgSelectOption, i12.ɵNgSelectMultipleOption, i12.DefaultValueAccessor, i12.SelectControlValueAccessor, i12.NgControlStatus, i12.NgControlStatusGroup, i12.FormGroupDirective, i12.FormControlName, i12.NgModel, i14.AngularMyDatePickerDirective, i15.GraphComponentComponent, i16.AnnotationComponent, i17.SanitizeHtmlPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentPerformanceReportComponent, [{
        type: Component,
        args: [{ selector: 'app-student-performance-report', template: "<section class=\" container-fluid report\">\n    <form [formGroup]=\"studentReport\">\n        <div class=\"row\">\n            <div class=\"group-btn col-12 col-lg-12 mt-2\">\n                <button type=\"button\" [ngClass]=\"{'active1': this.studentlisthighlight == '1'}\" class=\"btn btn-outline-primary\" (click)=\"studentList(1)\">All</button>\n                <button type=\"button\" [ngClass]=\"{'active1': this.studentlisthighlight == '2'}\" class=\"btn btn-outline-primary\" (click)=\"studentList(2)\">Master</button>\n                <button type=\"button\" [ngClass]=\"{'active1': this.studentlisthighlight == '3'}\" class=\"btn btn-outline-primary\" (click)=\"studentList(3)\">Excellent</button>\n                <button type=\"button\" [ngClass]=\"{'active1': this.studentlisthighlight == '4'}\" class=\"btn btn-outline-primary\" (click)=\"studentList(4)\">Proficiant</button>\n                <button type=\"button\" [ngClass]=\"{'active1': this.studentlisthighlight == '6'}\" class=\"btn btn-outline-primary\" (click)=\"studentList(6)\">Average</button>\n                <button type=\"button\" [ngClass]=\"{'active1': this.studentlisthighlight == '7'}\" class=\"btn btn-outline-primary\" (click)=\"studentList(7)\">Bellow Average</button>\n            </div>\n        </div>\n        <div class=\"row mb-2 mt-4\">\n            <div class=\"form-group col-4\">\n                <label class=\"col-xl-12 col-md-12\">Class Code & Class Name</label>\n                <select class=\"custom-select col-md-12\" formControlName=\"className\" (change)=\"selectClass($event)\">\n                    <option value=\"\" hidden>--Select--</option>\n                    <option *ngFor=\"let classData of classList\" [value]=\"classData.class_code\">{{classData.class_name}}</option>\n                </select>\n            </div>\n            <div class=\"form-group col-4\">\n                <label class=\"col-xl-12 col-md-12\" ><span style=\"visibility: hidden\">*</span>\n                    From Date</label>\n                <div class=\"col-xl-12 col-md-12 form-group\">\n                    <div class=\"input-group\">\n                        <input class=\"form-control\" name=\"fromdate\" placeholder=\"mm/dd/yyyy\"\n                               formControlName=\"fromDate\" angular-mydatepicker #dp=\"angular-mydatepicker\" (dateChanged)=\"onDateChanged1($event, '1')\">\n                        <div class=\"input-group-append\">\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp.toggleCalendar()\">\n                                <i class=\"fa fa-calendar-o\"></i>\n                            </button>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group col-4\">\n                <label class=\"col-xl-12 col-md-12\" ><span style=\"visibility: hidden\">*</span>\n                    To Date</label>\n                <div class=\"col-xl-12 col-md-12 form-group\">\n                    <div class=\"input-group\">\n                        <input class=\"form-control\" name=\"todate\" placeholder=\"mm/dd/yyyy\"\n                               formControlName=\"toDate\" angular-mydatepicker #dp1=\"angular-mydatepicker\" [options]=\"myDpOptions\" (dateChanged)=\"onDateChanged1($event, '2')\"/>\n                        <div class=\"input-group-append\">\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp1.toggleCalendar()\">\n                                <i class=\"fa fa-calendar-o\"></i>\n                            </button>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n<!--    <ngb-accordion [closeOthers]=\"true\" *ngFor=\"let list of reportList; let gradeIndex = index\" activeIds=\"0\" class=\"grade\">-->\n<!--        <ngb-panel id=\"{{gradeIndex}}\">-->\n<!--            <ng-template ngbPanelHeader let-opened=\"opened\">-->\n<!--                <div>-->\n<!--                    <button class=\"btn btn-link d-flex align-items-center justify-content-between p-2 w-100\"-->\n<!--                            ngbPanelToggle>-->\n<!--                        <h4 class=\"m-0\">{{list.class_code}} & {{list.class_name}} </h4>-->\n<!--                        <div class=\"d-flex align-items-center justify-content-between\">-->\n<!--                            <h4 class=\"mb-0 mr-5\">Avg% = {{list.percentage}}</h4>-->\n<!--                            <i class=\"fa fa-caret-down\" aria-hidden=\"true\" *ngIf=\"opened; else uparrow\"></i>-->\n<!--                        </div>-->\n<!--                        <ng-template #uparrow><i class=\"fa fa-caret-up\" aria-hidden=\"true\"></i></ng-template>-->\n<!--                    </button>-->\n<!--                </div>-->\n<!--            </ng-template>-->\n<!--            <ng-template ngbPanelContent>-->\n\n<!--                <ngb-accordion [closeOthers]=\"true\" *ngFor=\"let item of list.student_list; let subjectIndex = index\"-->\n<!--                               activeIds=\"0\" class=\"subject\">-->\n<!--                    <ngb-panel id=\"{{subjectIndex}}\">-->\n<!--                        <ng-template ngbPanelHeader let-opened=\"opened\">-->\n<!--                            <div>-->\n<!--                                <button class=\"btn btn-link d-flex align-items-center justify-content-between p-2 w-100\"-->\n<!--                                        ngbPanelToggle>-->\n<!--                                    <h4 class=\"m-0\">{{item.student_name}}</h4>-->\n<!--                                    <div class=\"d-flex align-items-center justify-content-between\">-->\n<!--&lt;!&ndash;                                        <h4 class=\"mb-0 mr-5\">Avg% = {{item.percentage}}</h4>&ndash;&gt;-->\n<!--                                        <i class=\"fa fa-caret-down\" aria-hidden=\"true\" *ngIf=\"opened; else uparrow\"></i>-->\n<!--                                    </div>-->\n<!--                                    <ng-template #uparrow><i class=\"fa fa-caret-up\" aria-hidden=\"true\"></i>-->\n<!--                                    </ng-template>-->\n<!--                                </button>-->\n<!--                            </div>-->\n<!--                        </ng-template>-->\n<!--                        <ng-template ngbPanelContent>-->\n<!--                            <ngb-accordion [closeOthers]=\"true\" class=\"assessment\">-->\n<!--                                <ngb-panel>-->\n<!--                                    <ng-template ngbPanelHeader let-opened=\"opened\">-->\n<!--                                        <div>-->\n<!--                                            <button class=\"btn btn-link d-flex align-items-center justify-content-between p-2 w-100\"-->\n<!--                                                    ngbPanelToggle>-->\n<!--                                                <h4 class=\"m-0\">Assessment</h4>-->\n<!--                                                <div class=\"d-flex align-items-center justify-content-between\">-->\n<!--                                                    <h4 class=\"mb-0 mr-5\">Avg% = {{item.assessment_percentage}}</h4>-->\n<!--                                                    <i class=\"fa fa-caret-down\" aria-hidden=\"true\"-->\n<!--                                                       *ngIf=\"opened; else uparrow\"></i>-->\n<!--                                                </div>-->\n<!--                                                <ng-template #uparrow><i class=\"fa fa-caret-up\" aria-hidden=\"true\"></i>-->\n<!--                                                </ng-template>-->\n<!--                                            </button>-->\n<!--                                        </div>-->\n<!--                                    </ng-template>-->\n<!--                                    <ng-template ngbPanelContent>-->\n<!--                                        <angular2-smart-table [settings]=\"assessment\"  [source]=\"item.assessment\" (userRowSelect)=\"studentCorrectionDetail($event)\"></angular2-smart-table>-->\n<!--                                    </ng-template>-->\n<!--                                </ngb-panel>-->\n<!--                            </ngb-accordion>-->\n\n<!--                            <ngb-accordion [closeOthers]=\"true\" class=\"assignment\">-->\n<!--                                <ngb-panel>-->\n<!--                                    <ng-template ngbPanelHeader let-opened=\"opened\">-->\n<!--                                        <div>-->\n<!--                                            <button class=\"btn btn-link d-flex align-items-center justify-content-between p-2 w-100\"-->\n<!--                                                    ngbPanelToggle>-->\n<!--                                                <h4 class=\"m-0\">Assignment</h4>-->\n<!--                                                <div class=\"d-flex align-items-center justify-content-between\">-->\n<!--                                                    <h4 class=\"mb-0 mr-5\">Avg% = {{item.assignment_percentage}}</h4>-->\n<!--                                                    <i class=\"fa fa-caret-down\" aria-hidden=\"true\"-->\n<!--                                                       *ngIf=\"opened; else uparrow\"></i>-->\n<!--                                                </div>-->\n<!--                                                <ng-template #uparrow><i class=\"fa fa-caret-up\" aria-hidden=\"true\"></i>-->\n<!--                                                </ng-template>-->\n<!--                                            </button>-->\n<!--                                        </div>-->\n<!--                                    </ng-template>-->\n<!--                                    <ng-template ngbPanelContent>-->\n<!--                                        <angular2-smart-table [settings]=\"assignment\"  [source]=\"item.assignment\" (userRowSelect)=\"studentCorrectionDetail($event)\"></angular2-smart-table>-->\n<!--                                    </ng-template>-->\n<!--                                </ngb-panel>-->\n<!--                            </ngb-accordion>-->\n<!--                        </ng-template>-->\n<!--                    </ngb-panel>-->\n<!--                </ngb-accordion>-->\n<!--            </ng-template>-->\n<!--        </ngb-panel>-->\n\n<!--    </ngb-accordion>-->\n</section>\n\n\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title col-12 text-center\" *ngIf=\"type == 1\"><b>Assessment List</b></h4>\n        <h4 class=\"modal-title col-12 text-center\" *ngIf=\"type == 2\"><b>Assignment List</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\" *ngIf=\"viewData != ''\">\n                    <div class=\"d-flex text-center mt-3\" *ngFor=\"let class of viewData; let i = index\">\n                        <label class=\"ml-3\">{{i + 1}}.</label>\n                        <label class=\"ml-3\">ContentName : {{class.content_name}}</label>\n                        <label class=\"ml-3\">Percentage : {{class.percentage}}</label>\n                    </div>\n                </div>\n                <div class=\"col-sm-12\" *ngIf=\"viewData == ''\">\n                    <button class=\"nodataList w-50 ml-5\">No List Available!</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"close()\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #viewStudentDetails let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-12 modal-header\">\n                    <h4 class=\"modal-title\">Correction Details</h4>\n                    <p class=\"text-right\">\n                        <i (click)=\"close()\" aria-hidden=\"true\" class=\"fa fa-close fa-2x\" style=\"cursor:pointer\"></i>\n                    </p>\n                </div>\n                <div [hidden]=\"studentAnswer.answers.length == 0\" class=\"col-md-12 scrollPanel view-question\" style=\"height: 100vh\">\n                    <div *ngFor=\"let sec of totalAns; let i = index\" class=\"card mt-2 div-disable\">\n                        <div *ngIf=\"sec.heading != ''\" class=\"col-md-12 mb-3\">\n                            <input [value]=\"sec.heading\" class=\"input-custom-modal div-disable\" type=\"text\">\n                        </div>\n                        <div *ngFor=\"let item of sec.section; let j = index\" class=\"card-body mb-3\">\n                            <div class=\"row d-flex justify-content-between\">\n                                <div class=\"col-md-1\">\n                                    <button class=\"btn btn-primary mr-3\">{{item.sub_question_no}}</button>\n                                </div>\n                                <!--                                <div *ngIf=\"showpdf == true\" class=\"col-md-6 text-right\">-->\n                                <!--                                    <input (input)=\"getPoints($event , i, j); markValidation($event, item.points , i, j)\" (keypress)=\"numberValidate($event)\" [value]=\"item.given_points\" autocomplete=\"off\" class=\"mark-input\" name=\"points\" style=\"text-align: center\">-->\n                                <!--                                    <input (keypress)=\"numberValidate($event)\" [value]=\"item.points\" class=\"mark-input div-disable\" style=\"text-align: center\">-->\n                                <!--                                    <br>-->\n                                <!--                                    <span *ngIf=\"item.maxValErr\" class=\"errormessage\">Invalid Points </span>-->\n                                <!--                                </div>-->\n                                <div class=\"col-md-3 text-right\">\n                                    <input (input)=\"getPoints($event , i, j); markValidation($event, item.points, i, j)\" (keypress)=\"numberValidate($event)\" [value]=\"item.given_points\" autocomplete=\"off\" class=\"mark-input\" name=\"points\" style=\"text-align: center\">\n                                    <input (keypress)=\"numberValidate($event)\" [value]=\"item.points\" class=\"mark-input div-disable\" style=\"text-align: center\">\n                                    <br>\n                                    <span *ngIf=\"item.maxValErr\" class=\"errormessage\">Invalid Points</span>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <!--<p class=\"mb-0 mt-2\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, magnam!</p>-->\n                                    <ul *ngIf=\"item.question_type_id == 1\" class=\"mt-4\">\n                                        <p [hidden]=\"item.question == ''\" class=\"mb-0 mt-2\" [innerHTML]=\"item.question\"></p>\n                                        <li *ngFor=\"let option of item.array\" [ngClass]=\"{'ans-correct': option == item.answer, 'ans-selected': option == item.student_answer, 'ans-wrong': option != item.answer && option == item.student_answer}\"><span><span>{{option}}</span>\n                            <i aria-hidden=\"true\" class=\"fa fa-check\"></i>\n                            <i aria-hidden=\"true\" class=\"fa fa-times\"></i>\n                        </span>\n                                        </li>\n                                    </ul>\n                                    <ul *ngIf=\"item.question_type_id == 3\" class=\"mt-4\">\n                                        <p [hidden]=\"item.question == ''\" class=\"mb-0 mt-2\" [innerHTML]=\"item.question\"></p>\n                                        <li [ngClass]=\"{'ans-correct': item.answer == 'true', 'ans-selected': item.student_answer == 'true', 'ans-wrong': item.answer == 'false' && item.student_answer == 'true'}\">\n                            <span><input [checked]=\"item.student_answer == 'true'\" class=\"radio-size form-control mr-2 div-disable\" name=\"ans\" type=\"radio\" value=\"true\"> True\n                            <i aria-hidden=\"true\" class=\"fa fa-check\"></i>\n                            <i aria-hidden=\"true\" class=\"fa fa-times\"></i>\n                            </span>\n                                        </li>\n                                        <li [ngClass]=\"{'ans-correct': item.answer == 'false', 'ans-selected': item.student_answer == 'false', 'ans-wrong': item.answer == 'true' && item.student_answer == 'false'}\">\n                            <span><input [checked]=\"item.student_answer == 'false'\" class=\"radio-size form-control mr-2 div-disable\" name=\"ans\" type=\"radio\" value=\"false\"> False\n                            <i aria-hidden=\"true\" class=\"fa fa-check\"></i>\n                            <i aria-hidden=\"true\" class=\"fa fa-times\"></i>\n                            </span>\n                                        </li>\n                                    </ul>\n                                    <ul *ngIf=\"item.question_type_id == 9\" class=\"mt-4\">\n                                        <p [hidden]=\"item.question == ''\" class=\"mb-0 mt-2\" [innerHTML]=\"item.question\"></p>\n                                        <li *ngFor=\"let option of item.mob_options\" [ngClass]=\"{'ans-correct': option == item.answer, 'ans-selected': option == item.student_answer, 'ans-wrong': option != item.answer && option == item.student_answer}\"><span class=\"capital\">{{option}}\n                                            <i aria-hidden=\"true\" class=\"fa fa-check\"></i>\n                            <i aria-hidden=\"true\" class=\"fa fa-times\"></i>\n                        </span></li>\n                                    </ul>\n                                    <div *ngIf=\"item.question_type_id == 10\" class=\"col-md-6 mt-4 px-0\">\n                                        <p [hidden]=\"item.question == ''\" class=\"mb-0 mt-2\" [innerHTML]=\"item.question\"></p>\n                                        <input [ngClass]=\"{'wrong-ans': item.match_case ? (item.answer != item.student_answer) : (item.answer.toLowerCase() != item.student_answer.toLowerCase()),\n                                'correct-ans': item.match_case ? (item.answer == item.student_answer) : (item.answer.toLowerCase() == item.student_answer.toLowerCase())}\"\n                                               [value]=\"item.student_answer\"\n                                               class=\"form-control div-disable mt-2\"\n                                               type=\"text\">\n                                        <label class=\"mt-4\" value=\"Correct answer\">Correct answer : {{item.answer}}</label>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 20\" class=\"col-md-12 mt-4 px-0\">\n                                        <textarea class=\"form-control div-disable\" cols=\"30\" rows=\"4\">{{item.student_answer}}</textarea>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 30\" class=\"col-md-12 mt-4 px-0\">\n                                        <div class=\"d-flex\">\n                                            <label>Student Answer: </label>\n                                            <h4 [innerHTML]=\"item.student_answer | sanitizeHtml\" class=\"ml-3\"></h4>\n                                        </div>\n                                        <div class=\"d-flex\">\n                                            <label>Correct Answer: </label>\n                                            <h4 [innerHTML]=\"item.answer | sanitizeHtml\" class=\"ml-3\"></h4>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"item.question_type_id == 40\" class=\"col-md-12 mt-4 px-0 d-flex\">\n                                        <div class=\"col-md-6 div-disable\">\n                                            <label>Correct Answer: </label>\n                                            <app-graph-component [editMode]=\"false\"\n                                                                 [editPatchValue]=\"parseVal(item.answer)\"\n                                                                 [graphId]=\"i+'correctgraph'+item.sub_question_no+'id'\"\n                                                                 [questionType]=\"'40'\"></app-graph-component>\n                                        </div>\n                                        <div class=\"col-md-6 div-disable\">\n                                            <label>Student Answer: </label>\n                                            <app-graph-component *ngIf=\"item.student_answer != ''\"\n                                                                 [editMode]=\"false\"\n                                                                 [editPatchValue]=\"parseVal(item.student_answer[0].correctAnswer)\"\n                                                                 [graphId]=\"i+'Editgraph'+item.sub_question_no+'id'\"\n                                                                 [questionType]=\"'40'\"></app-graph-component>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row mt-4 d-flex\">\n                                <div class=\"col-md-6\">\n                                    <label>Student feedback</label>\n                                    <textarea [value]=\"item.student_feedback == null ? '' : item.student_feedback\" class=\"form-control div-disable\" rows=\"3\"></textarea>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <label>Feedback</label>\n                                    <textarea (input)=\"getFeedback($event, i, j)\" [value]=\"item.feedback\" class=\"form-control div-disable\" placeholder=\"Feed Back\" rows=\"3\"></textarea>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 mt-3 card p-4\">\n                        <div class=\"col-md-12 d-flex\">\n                            <div class=\"col-md-6 px-0 mb-2\">\n                                <div class=\"col-md-12\">\n                                    <label>Obtained Points</label>\n                                    <input [(ngModel)]=\"studentPoints\" class=\"form-control div-disable\" type=\"text\">\n                                </div>\n                                <div class=\"col-md-12 mt-3\">\n                                    <label>Total Points</label>\n                                    <input [(ngModel)]=\"totalPoints\" class=\"form-control div-disable\" type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-6 mb-1\">\n                                <label>Feedback</label>\n                                <textarea [(ngModel)]=\"totalFeedBack\" class=\"form-control div-disable\" cols=\"30\" rows=\"5\"></textarea>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div [hidden]=\"studentAnswer.answers.length != 0\" class=\"col-md-12\">\n                    <app-annotation [getAnnotate]=\"areaInfo\"\n                                    [getDragQues]=\"dragQuestionsList\"\n                                    [pdfPath]=\"pdfTemplate\"\n                                    [toolHide]=\"true\"\n                                    [userType]=\"'teacher'\"></app-annotation>\n                    <div class=\"col-md-12 mt-3 card p-4\">\n                        <div class=\"col-md-12 d-flex\">\n                            <div class=\"col-md-6 px-0 mb-2\">\n                                <div class=\"col-md-12\">\n                                    <label>Obtained Points</label>\n                                    <input [(ngModel)]=\"studentPoints\" class=\"form-control div-disable\" type=\"text\">\n                                </div>\n                                <div class=\"col-md-12 mt-3\">\n                                    <label>Total Points</label>\n                                    <input [(ngModel)]=\"totalPoints\" class=\"form-control div-disable\" type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-6 mb-1\">\n                                <label>Feedback</label>\n                                <textarea [(ngModel)]=\"totalFeedBack\" class=\"form-control div-disable\" cols=\"30\" rows=\"5\"></textarea>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- Container-fluid Ends-->\n    </div>\n</ng-template>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.ReportService }, { type: i3.ConfigurationService }, { type: i4.DomSanitizer }, { type: i5.DatePipe }, { type: i6.Router }, { type: i7.CommonDataService }, { type: i8.TeacherService }, { type: i9.NgbModal }, { type: i10.ToastrService }, { type: i11.ValidationService }, { type: i12.FormBuilder }, { type: i13.CommonService }], { viewContent: [{
            type: ViewChild,
            args: ['content']
        }], viewStudentDetails: [{
            type: ViewChild,
            args: ['viewStudentDetails']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentPerformanceReportComponent, { className: "StudentPerformanceReportComponent" }); })();
//# sourceMappingURL=student-performance-report.component.js.map