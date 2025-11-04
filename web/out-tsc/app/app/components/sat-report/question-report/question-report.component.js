import { Component, Input } from '@angular/core';
import { parse } from 'flatted';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "src/app/shared/service/auth.service";
import * as i3 from "src/app/shared/service/student.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "ng-multiselect-dropdown";
import * as i7 from "@ng-select/ng-select";
import * as i8 from "../../auth/graph-component/graph-component.component";
import * as i9 from "../../../shared/pipes/sanitizer/SanitizeHtmlPipe.pipe";
import * as i10 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = () => ["55"];
const _c1 = () => ["1", "2"];
const _c2 = a0 => ({ "student-selected": a0 });
const _c3 = a0 => ({ "active": a0 });
const _c4 = (a0, a1, a2) => ({ "badge-exceptional": a0, "badge-good": a1, "badge-improve": a2 });
const _c5 = a0 => ({ "correct_ans-selected": a0 });
function QuestionReportComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15)(1, "label", 11);
    i0.ɵɵtext(2, "Topics");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ng-multiselect-dropdown", 16, 0);
    i0.ɵɵtwoWayListener("ngModelChange", function QuestionReportComponent_div_9_Template_ng_multiselect_dropdown_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedTopic, $event) || (ctx_r1.selectedTopic = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("onSelect", function QuestionReportComponent_div_9_Template_ng_multiselect_dropdown_onSelect_3_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.selectedQuestion = 1; return i0.ɵɵresetView(ctx_r1.updateStudentAnswer($event, "single", "topic", "question_topic_id")); })("onDeSelect", function QuestionReportComponent_div_9_Template_ng_multiselect_dropdown_onDeSelect_3_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.selectedQuestion = 1; return i0.ɵɵresetView(ctx_r1.updateStudentAnswer($event, "single", "topic", "question_topic_id")); })("onSelectAll", function QuestionReportComponent_div_9_Template_ng_multiselect_dropdown_onSelectAll_3_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.selectedQuestion = 1; return i0.ɵɵresetView(ctx_r1.updateStudentAnswer($event, "all", "topic", "question_topic_id")); })("onDeSelectAll", function QuestionReportComponent_div_9_Template_ng_multiselect_dropdown_onDeSelectAll_3_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.selectedQuestion = 1; return i0.ɵɵresetView(ctx_r1.updateStudentAnswer($event, "all", "topic", "question_topic_id")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("placeholder", "Select Topic")("settings", ctx_r1.settings)("data", ctx_r1.topicListData)("disabled", false);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedTopic);
} }
function QuestionReportComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15)(1, "label", 11);
    i0.ɵɵtext(2, "Sub Topics");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ng-multiselect-dropdown", 16, 0);
    i0.ɵɵtwoWayListener("ngModelChange", function QuestionReportComponent_div_10_Template_ng_multiselect_dropdown_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedSubTopic, $event) || (ctx_r1.selectedSubTopic = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("onSelect", function QuestionReportComponent_div_10_Template_ng_multiselect_dropdown_onSelect_3_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.selectedQuestion = 1; return i0.ɵɵresetView(ctx_r1.updateStudentAnswer($event, "single", "subTopic", "question_sub_topic_id")); })("onDeSelect", function QuestionReportComponent_div_10_Template_ng_multiselect_dropdown_onDeSelect_3_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.selectedQuestion = 1; return i0.ɵɵresetView(ctx_r1.updateStudentAnswer($event, "single", "subTopic", "question_sub_topic_id")); })("onSelectAll", function QuestionReportComponent_div_10_Template_ng_multiselect_dropdown_onSelectAll_3_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.selectedQuestion = 1; return i0.ɵɵresetView(ctx_r1.updateStudentAnswer($event, "all", "subTopic", "question_sub_topic_id")); })("onDeSelectAll", function QuestionReportComponent_div_10_Template_ng_multiselect_dropdown_onDeSelectAll_3_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.selectedQuestion = 1; return i0.ɵɵresetView(ctx_r1.updateStudentAnswer($event, "all", "subTopic", "question_sub_topic_id")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("placeholder", "Select Sub Topic")("settings", ctx_r1.settings1)("data", ctx_r1.subTopicListData)("disabled", false);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedSubTopic);
} }
function QuestionReportComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "button", 20);
    i0.ɵɵtext(4, "No Question Available!");
    i0.ɵɵelementEnd()()()();
} }
function QuestionReportComponent_div_16_div_1_div_1_h4_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 35);
    i0.ɵɵtext(1, "Question:");
    i0.ɵɵelementEnd();
} }
function QuestionReportComponent_div_16_div_1_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 36);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, item_r4.question), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 36);
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", ctx_r1.convertMarkdownToHtml(item_r4.question, "single"), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h4", 35);
    i0.ɵɵtext(2, "Passage:");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 36);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 1, item_r4.subQuestions[0] == null ? null : item_r4.subQuestions[0].passage), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "h4", 35);
    i0.ɵɵtext(2, "Question:");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 36);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 1, item_r4.subQuestions[0] == null ? null : item_r4.subQuestions[0].question), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_9_div_1_Template, 5, 3, "div", 32)(2, QuestionReportComponent_div_16_div_1_div_1_div_9_div_2_Template, 5, 3, "div", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r4.subQuestions[0] == null ? null : item_r4.subQuestions[0].passage) && (item_r4.subQuestions[0] == null ? null : item_r4.subQuestions[0].passage) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r4.subQuestions[0] == null ? null : item_r4.subQuestions[0].question) != "");
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49)(1, "button", 50);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 51);
    i0.ɵɵelement(4, "span", 52);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    const k_r6 = ctx.index;
    const item_r4 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c2, item_r4.student_answer.length == 0 ? false : item_r4.student_answer[k_r6].isSelected != ""));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((k_r6 + 1 + 9).toString(36).toUpperCase());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 3, option_r5.options), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_5_div_1_Template, 6, 7, "div", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r4.options);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_6_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 52);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r7 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r7), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_6_tr_8_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 58);
} if (rf & 2) {
    const k_r8 = i0.ɵɵnextContext().index;
    const j_r9 = i0.ɵɵnextContext().index;
    const ctx_r9 = i0.ɵɵnextContext(4);
    const item_r4 = ctx_r9.$implicit;
    const i_r11 = ctx_r9.index;
    i0.ɵɵpropertyInterpolate2("id", "", j_r9, "chooseSingle", i_r11, "");
    i0.ɵɵpropertyInterpolate2("name", "", i_r11, "choosesingle", j_r9, "your");
    i0.ɵɵproperty("checked", item_r4.student_answer[j_r9].isSelected == "" ? false : item_r4.student_answer[j_r9].isSelected == k_r8.toString());
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_6_tr_8_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 59);
} if (rf & 2) {
    const k_r8 = i0.ɵɵnextContext().index;
    const j_r9 = i0.ɵɵnextContext().index;
    const ctx_r9 = i0.ɵɵnextContext(4);
    const item_r4 = ctx_r9.$implicit;
    const i_r11 = ctx_r9.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate2("id", "", j_r9, "chooseMulti", i_r11, "");
    i0.ɵɵproperty("checked", ctx_r1.splitMultiChoose(item_r4.student_answer[j_r9].isSelected, k_r8));
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_6_tr_8_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_6_tr_8_td_3_input_1_Template, 1, 7, "input", 56)(2, QuestionReportComponent_div_16_div_1_div_1_div_13_div_6_tr_8_td_3_input_2_Template, 1, 4, "input", 57);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == "7");
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_6_tr_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 52);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, QuestionReportComponent_div_16_div_1_div_1_div_13_div_6_tr_8_td_3_Template, 3, 2, "td", 55);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r12 = ctx.$implicit;
    const item_r4 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, list_r12.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r4.answer);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "table", 53)(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, QuestionReportComponent_div_16_div_1_div_1_div_13_div_6_th_6_Template, 2, 3, "th", 54);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "tbody");
    i0.ɵɵtemplate(8, QuestionReportComponent_div_16_div_1_div_1_div_13_div_6_tr_8_Template, 4, 4, "tr", 55);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", item_r4.answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r4.student_answer);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_7_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 66);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, option_r13.listOption), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 61)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 62);
    i0.ɵɵelement(4, "div", 63);
    i0.ɵɵelementStart(5, "div", 64);
    i0.ɵɵtemplate(6, QuestionReportComponent_div_16_div_1_div_1_div_13_div_7_div_1_span_6_Template, 2, 3, "span", 65);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const data_r14 = ctx.$implicit;
    const j_r15 = ctx.index;
    const i_r11 = i0.ɵɵnextContext(4).index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Dropdown - ", j_r15 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("id", "", i_r11, "dropdown", j_r15, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", data_r14.options);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_7_div_1_Template, 7, 5, "div", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r4.student_answer);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_8_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 69);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const data_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, data_r16.isSelected), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_8_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Student Not Answered");
    i0.ɵɵelementEnd();
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 61)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 67);
    i0.ɵɵtemplate(4, QuestionReportComponent_div_16_div_1_div_1_div_13_div_8_div_1_div_4_Template, 2, 3, "div", 68)(5, QuestionReportComponent_div_16_div_1_div_1_div_13_div_8_div_1_div_5_Template, 2, 0, "div", 32);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r16 = ctx.$implicit;
    const j_r17 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Input - ", j_r17 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", data_r16.isSelected != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r16.isSelected == "");
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_8_div_1_Template, 6, 3, "div", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r4.student_answer);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 71)(1, "div", 72)(2, "div", 73)(3, "span", 74);
    i0.ɵɵelement(4, "img", 75);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "h4", 76);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r18 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, list_r18.options), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_9_div_1_Template, 7, 3, "div", 70);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r4.student_answer);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 78);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, item_r4.student_answer[0] == null ? null : item_r4.student_answer[0].isSelected), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Student Not Answered");
    i0.ɵɵelementEnd();
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "div", 67);
    i0.ɵɵtemplate(2, QuestionReportComponent_div_16_div_1_div_1_div_13_div_10_div_2_Template, 2, 3, "div", 77)(3, QuestionReportComponent_div_16_div_1_div_1_div_13_div_10_div_3_Template, 2, 0, "div", 32);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (item_r4.student_answer[0] == null ? null : item_r4.student_answer[0].isSelected) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r4.student_answer[0] == null ? null : item_r4.student_answer[0].isSelected) == "");
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 83);
    i0.ɵɵelement(1, "span", 78);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.convertedText && ctx_r1.convertedText != "" ? ctx_r1.convertMarkdownToHtml(ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.student_answer) : ctx_r1.convertMarkdownToHtml(item_r4.student_answer[0] == null ? null : item_r4.student_answer[0].isSelected, "single"), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 84)(1, "span", 67);
    i0.ɵɵtext(2, "You Have Not Answered");
    i0.ɵɵelementEnd()();
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_6_h5_1_span_2_Template(rf, ctx) { if (rf & 1) {
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
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_6_h5_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 11);
    i0.ɵɵtext(1, "Final Feedback");
    i0.ɵɵtemplate(2, QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_6_h5_1_span_2_Template, 4, 7, "span", 32);
    i0.ɵɵtext(3, ": ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.created_date);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_6_h5_2_span_2_Template(rf, ctx) { if (rf & 1) {
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
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_6_h5_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 11);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_6_h5_2_span_2_Template, 4, 7, "span", 32);
    i0.ɵɵtext(3, ": ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Feedback For Version ", ctx_r1.selectedFeedBackIndex, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedPreviousStudentAnswer == null ? null : ctx_r1.selectedPreviousStudentAnswer.created_date);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_6_h5_1_Template, 4, 1, "h5", 85)(2, QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_6_h5_2_Template, 4, 2, "h5", 85);
    i0.ɵɵelement(3, "div", 86);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵclassMapInterpolate1("col-", ctx_r1.previousFeedBack.length == 1 ? "6" : "5", " my-3");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedFeedBackIndex == ctx_r1.previousFeedBack.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedFeedBackIndex != ctx_r1.previousFeedBack.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.convertedText, i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_7_li_5_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a");
    i0.ɵɵtext(1, "Your Answer");
    i0.ɵɵelementEnd();
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_7_li_5_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 93);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 94);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext();
    const feedback_r20 = ctx_r20.$implicit;
    const i_r22 = ctx_r20.index;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Version ", ctx_r1.previousFeedBack.length - i_r22, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(3, _c4, ctx_r1.getFeedbackLabel(feedback_r20).label === "Exceptional", ctx_r1.getFeedbackLabel(feedback_r20).label === "Good", ctx_r1.getFeedbackLabel(feedback_r20).label === "Improve"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.getFeedbackLabel(feedback_r20).label);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_7_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 91);
    i0.ɵɵlistener("click", function QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_7_li_5_Template_li_click_0_listener() { const feedback_r20 = i0.ɵɵrestoreView(_r19).$implicit; const ctx_r1 = i0.ɵɵnextContext(7); return i0.ɵɵresetView(ctx_r1.feedbackSelected(feedback_r20)); });
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_7_li_5_a_1_Template, 2, 0, "a", 32)(2, QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_7_li_5_a_2_Template, 4, 7, "a", 92);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r22 = ctx.index;
    const first_r23 = ctx.first;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c3, ctx_r1.selectedFeedBackIndex === ctx_r1.previousFeedBack.length - i_r22));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", first_r23);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !first_r23);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 87)(1, "div", 88)(2, "h5", 11);
    i0.ɵɵtext(3, "Version History");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ul", 89);
    i0.ɵɵtemplate(5, QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_7_li_5_Template, 3, 5, "li", 90);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.previousFeedBack);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "div")(2, "h5", 11);
    i0.ɵɵtext(3, "Your Answer:");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_4_Template, 2, 1, "div", 79)(5, QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_5_Template, 3, 0, "div", 80);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_6_Template, 4, 6, "div", 81)(7, QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_div_7_Template, 6, 1, "div", 82);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.previousFeedBack.length == 1 ? "6" : ctx_r1.previousFeedBack.length == 0 ? "12" : ctx_r1.convertedText && ctx_r1.convertedText != "" ? "5" : "10", " my-3");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", (item_r4.student_answer[0] == null ? null : item_r4.student_answer[0].isSelected) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r4.student_answer[0] == null ? null : item_r4.student_answer[0].isSelected) == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.convertedText && ctx_r1.convertedText != "" && ctx_r1.previousFeedBack.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.previousFeedBack.length > 1);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 78);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, item_r4.student_answer[0].isSelected), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_12_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 97);
    i0.ɵɵtext(1, "Student Not Answered");
    i0.ɵɵelementEnd();
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 95)(1, "div", 95)(2, "div", 67);
    i0.ɵɵtemplate(3, QuestionReportComponent_div_16_div_1_div_1_div_13_div_12_div_3_Template, 2, 3, "div", 77)(4, QuestionReportComponent_div_16_div_1_div_1_div_13_div_12_div_4_Template, 2, 0, "div", 96);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r4.student_answer[0].isSelected != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.student_answer[0].isSelected == "");
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_13_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 102)(1, "div", 103);
    i0.ɵɵelement(2, "div", 69);
    i0.ɵɵpipe(3, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(3, 1, item_r4.student_editor_answer), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 98)(1, "div", 95)(2, "div", 99);
    i0.ɵɵelement(3, "app-graph-component", 100);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, QuestionReportComponent_div_16_div_1_div_1_div_13_div_13_div_4_Template, 4, 3, "div", 101);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    const item_r4 = ctx_r9.$implicit;
    const i_r11 = ctx_r9.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("editMode", false)("editPatchValue", item_r4.student_answer.length == 0 ? false : ctx_r1.parseVal(item_r4.student_answer[0].correctAnswer))("graphId", "graphAnsweringY" + i_r11)("questionType", item_r4.question_type_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.student_editor_answer != "");
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49)(1, "button", 50);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 106);
    i0.ɵɵelement(4, "span", 52);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r24 = ctx.$implicit;
    const k_r25 = ctx.index;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c2, option_r24.isSelected === "" ? false : k_r25 == option_r24.isSelected));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((k_r25 + 1 + 9).toString(36).toUpperCase());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 3, option_r24.options), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_1_div_1_Template, 6, 7, "div", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r26 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", sec_r26.student_answer);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_2_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 52);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r27 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r27), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_2_tr_9_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 111);
} if (rf & 2) {
    const l_r28 = i0.ɵɵnextContext().index;
    const k_r29 = i0.ɵɵnextContext().index;
    const ctx_r29 = i0.ɵɵnextContext(2);
    const sec_r26 = ctx_r29.$implicit;
    const j_r31 = ctx_r29.index;
    const i_r11 = i0.ɵɵnextContext(4).index;
    i0.ɵɵpropertyInterpolate3("name", "", j_r31, "choo", i_r11, "se", k_r29, "if");
    i0.ɵɵproperty("checked", sec_r26.student_answer[k_r29].isSelected == "" ? false : sec_r26.student_answer[k_r29].isSelected == l_r28.toString());
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_2_tr_9_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 112);
} if (rf & 2) {
    const l_r28 = i0.ɵɵnextContext().index;
    const k_r29 = i0.ɵɵnextContext().index;
    const sec_r26 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("checked", ctx_r1.splitMultiChoose(sec_r26.student_answer[k_r29].isSelected, l_r28));
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_2_tr_9_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_2_tr_9_td_3_input_1_Template, 1, 5, "input", 109)(2, QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_2_tr_9_td_3_input_2_Template, 1, 1, "input", 110);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r26 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r26.question_type_id == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r26.question_type_id == "7");
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_2_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 52);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_2_tr_9_td_3_Template, 3, 2, "td", 55);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r32 = ctx.$implicit;
    const sec_r26 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, list_r32.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", sec_r26.answer);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 107)(1, "div", 108)(2, "table", 53)(3, "thead")(4, "tr")(5, "th");
    i0.ɵɵtext(6, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_2_th_7_Template, 2, 3, "th", 54);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "tbody");
    i0.ɵɵtemplate(9, QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_2_tr_9_Template, 4, 4, "tr", 55);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const sec_r26 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", sec_r26.answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", sec_r26.student_answer);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_3_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 78);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const data_r33 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, data_r33.isSelected), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_3_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Student Not Answered");
    i0.ɵɵelementEnd();
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 61)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 67);
    i0.ɵɵtemplate(4, QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_3_div_2_div_4_Template, 2, 3, "div", 77)(5, QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_3_div_2_div_5_Template, 2, 0, "div", 32);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r33 = ctx.$implicit;
    const k_r34 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Input - ", k_r34 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", data_r33.isSelected != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r33.isSelected == "");
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 107)(1, "div", 107);
    i0.ɵɵtemplate(2, QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_3_div_2_Template, 6, 3, "div", 60);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const sec_r26 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", sec_r26.student_answer);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 78);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const sec_r26 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, sec_r26.student_answer[0].isSelected), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Student Not Answered");
    i0.ɵɵelementEnd();
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 107)(1, "div", 95)(2, "div", 67);
    i0.ɵɵtemplate(3, QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_4_div_3_Template, 2, 3, "div", 77)(4, QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_4_div_4_Template, 2, 0, "div", 32);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const sec_r26 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", sec_r26.student_answer[0].isSelected != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r26.student_answer[0].isSelected == "");
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 105);
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_1_Template, 2, 1, "div", 42)(2, QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_2_Template, 10, 2, "div", 46)(3, QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_3_Template, 3, 1, "div", 46)(4, QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_div_4_Template, 5, 2, "div", 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r26 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r26.question_type_id == 1 || sec_r26.question_type_id == 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r26.question_type_id == "5" || sec_r26.question_type_id == "7");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r26.question_type_id == "10");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r26.question_type_id == "20");
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_div_1_Template, 5, 4, "div", 104);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r4.subQuestions);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_18_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r35 = i0.ɵɵnextContext().index;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((k_r35 + 1 + 9).toString(36).toUpperCase());
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_18_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 118);
    i0.ɵɵelement(1, "span", 52);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r35 = i0.ɵɵnextContext().index;
    const item_r4 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, item_r4.options[k_r35].options), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_18_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 115);
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_18_div_4_button_1_Template, 2, 1, "button", 116)(2, QuestionReportComponent_div_16_div_1_div_1_div_13_div_18_div_4_div_2_Template, 3, 3, "div", 117);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r36 = ctx.$implicit;
    i0.ɵɵclassMap(option_r36.correctAnswer != "" ? "my-3 mx-2 p-2 cursor overflow-auto row" : "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c5, option_r36.correctAnswer != ""));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r36.correctAnswer != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r36.correctAnswer != "");
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 107)(1, "label", 113)(2, "strong");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, QuestionReportComponent_div_16_div_1_div_1_div_13_div_18_div_4_Template, 3, 8, "div", 114);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", item_r4.answer);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_19_th_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 52);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r37 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r37), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_19_tr_11_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 111);
} if (rf & 2) {
    const k_r38 = i0.ɵɵnextContext().index;
    const j_r39 = i0.ɵɵnextContext().index;
    const ctx_r9 = i0.ɵɵnextContext(4);
    const item_r4 = ctx_r9.$implicit;
    const i_r11 = ctx_r9.index;
    i0.ɵɵpropertyInterpolate2("name", "", i_r11, "choosesingle", j_r39, "corect");
    i0.ɵɵproperty("checked", item_r4.heading_option[j_r39].correctActive === k_r38);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_19_tr_11_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 112);
} if (rf & 2) {
    const k_r38 = i0.ɵɵnextContext().index;
    const j_r39 = i0.ɵɵnextContext().index;
    const item_r4 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("checked", item_r4.heading_option[j_r39].correctActive === k_r38);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_19_tr_11_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_19_tr_11_td_3_input_1_Template, 1, 4, "input", 109)(2, QuestionReportComponent_div_16_div_1_div_1_div_13_div_19_tr_11_td_3_input_2_Template, 1, 1, "input", 110);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == "7");
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_19_tr_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 52);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, QuestionReportComponent_div_16_div_1_div_1_div_13_div_19_tr_11_td_3_Template, 3, 2, "td", 55);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r40 = ctx.$implicit;
    const item_r4 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, list_r40.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r4.answer);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 107)(1, "label", 113)(2, "strong");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "table", 119)(5, "thead")(6, "tr")(7, "th");
    i0.ɵɵtext(8, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, QuestionReportComponent_div_16_div_1_div_1_div_13_div_19_th_9_Template, 2, 3, "th", 54);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "tbody");
    i0.ɵɵtemplate(11, QuestionReportComponent_div_16_div_1_div_1_div_13_div_19_tr_11_Template, 4, 4, "tr", 55);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", item_r4.answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r4.student_answer);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_20_div_5_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 66);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const option_r41 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, option_r41.listOption), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_20_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 61)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 62);
    i0.ɵɵelement(4, "div", 63);
    i0.ɵɵelementStart(5, "div", 64);
    i0.ɵɵtemplate(6, QuestionReportComponent_div_16_div_1_div_1_div_13_div_20_div_5_span_6_Template, 2, 3, "span", 65);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const data_r42 = ctx.$implicit;
    const j_r43 = ctx.index;
    const i_r11 = i0.ɵɵnextContext(4).index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Dropdown - ", j_r43 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("id", "", i_r11, "dropdownCorrect", j_r43, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", data_r42.options);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 107)(1, "label", 113)(2, "strong");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 120);
    i0.ɵɵtemplate(5, QuestionReportComponent_div_16_div_1_div_1_div_13_div_20_div_5_Template, 7, 5, "div", 60);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", item_r4.answer);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_21_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 61)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 67);
    i0.ɵɵelement(4, "div", 69);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r44 = ctx.$implicit;
    const j_r45 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Input - ", j_r45 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, data_r44.options[0].value), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "label")(2, "b");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, QuestionReportComponent_div_16_div_1_div_1_div_13_div_21_div_4_Template, 6, 4, "div", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", item_r4.options);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_22_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 71)(1, "div", 72)(2, "div", 73)(3, "span", 74);
    i0.ɵɵelement(4, "img", 75);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "h4", 76);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r46 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, list_r46.correctAnswer), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "label")(2, "b");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 23);
    i0.ɵɵtemplate(5, QuestionReportComponent_div_16_div_1_div_1_div_13_div_22_div_5_Template, 7, 3, "div", 70);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", item_r4.answer);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "label")(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 121);
    i0.ɵɵelement(5, "div", 78);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const answer_r47 = ctx.$implicit;
    const i_r48 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Correct Answer ", i_r48 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 2, answer_r47.correctAnswer), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_23_div_1_Template, 7, 4, "div", 55);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r4.answer);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 95)(1, "label")(2, "b");
    i0.ɵɵtext(3, "Sample Essay");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 122);
    i0.ɵɵelement(5, "div", 78);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", ctx_r1.convertMarkdownToHtml(item_r4.answer[0] == null ? null : item_r4.answer[0].correctAnswer, "single"), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_24_div_1_Template, 6, 1, "div", 43);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r4.answer[0] == null ? null : item_r4.answer[0].correctAnswer.trimStart()) != "");
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_1_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r49 = i0.ɵɵnextContext().index;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((k_r49 + 1 + 9).toString(36).toUpperCase());
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_1_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 118);
    i0.ɵɵelement(1, "span", 52);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r49 = i0.ɵɵnextContext().index;
    const sec_r50 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, sec_r50.options[k_r49].options), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 115);
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_1_div_4_button_1_Template, 2, 1, "button", 116)(2, QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_1_div_4_div_2_Template, 3, 3, "div", 117);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r51 = ctx.$implicit;
    i0.ɵɵclassMap(option_r51.correctAnswer !== "" ? "cursor overflow-auto row my-3 mx-0 p-2" : "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c5, option_r51.correctAnswer !== ""));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r51.correctAnswer != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r51.correctAnswer !== "");
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 107)(1, "label", 113)(2, "strong");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_1_div_4_Template, 3, 8, "div", 114);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r50 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", sec_r50.answer);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_2_th_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 52);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r52 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r52), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_2_tr_11_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 111);
} if (rf & 2) {
    const k_r53 = i0.ɵɵnextContext().index;
    const j_r54 = i0.ɵɵnextContext().index;
    const sec_r50 = i0.ɵɵnextContext(2).$implicit;
    const i_r11 = i0.ɵɵnextContext(4).index;
    i0.ɵɵpropertyInterpolate2("name", "", i_r11, "choosesingleCorrect", j_r54, "corect");
    i0.ɵɵproperty("checked", sec_r50.heading_option[j_r54].correctActive === k_r53);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_2_tr_11_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 59);
} if (rf & 2) {
    const k_r53 = i0.ɵɵnextContext().index;
    const j_r54 = i0.ɵɵnextContext().index;
    const sec_r50 = i0.ɵɵnextContext(2).$implicit;
    const i_r11 = i0.ɵɵnextContext(4).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate3("id", "chooseMultipass", i_r11, "", j_r54, "", k_r53, "");
    i0.ɵɵproperty("checked", ctx_r1.patchCorrectMultiChoiceAnswer(sec_r50.heading_option, k_r53, j_r54));
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_2_tr_11_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_2_tr_11_td_3_input_1_Template, 1, 4, "input", 109)(2, QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_2_tr_11_td_3_input_2_Template, 1, 5, "input", 57);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r50 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r50.question_type_id == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r50.question_type_id == "7");
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_2_tr_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 52);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_2_tr_11_td_3_Template, 3, 2, "td", 55);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r55 = ctx.$implicit;
    const sec_r50 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, list_r55.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", sec_r50.answer);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 124)(1, "label")(2, "strong");
    i0.ɵɵtext(3, "Correct Answer :");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "table", 53)(5, "thead")(6, "tr")(7, "th");
    i0.ɵɵtext(8, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_2_th_9_Template, 2, 3, "th", 54);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "tbody");
    i0.ɵɵtemplate(11, QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_2_tr_11_Template, 4, 4, "tr", 55);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const sec_r50 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", sec_r50.answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", sec_r50.given_answer);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 126)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 67);
    i0.ɵɵelement(4, "div", 69);
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
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 107)(1, "label")(2, "b");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_3_div_4_Template, 6, 4, "div", 125);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r50 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", sec_r50.options);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 61)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 67);
    i0.ɵɵelement(4, "div", 69);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r58 = ctx.$implicit;
    const j_r59 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Answer - ", j_r59 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, data_r58.correctAnswer), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 107)(1, "label")(2, "b");
    i0.ɵɵtext(3, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_4_div_4_Template, 6, 4, "div", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r50 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", sec_r50.answer);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 105);
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_1_Template, 5, 1, "div", 46)(2, QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_2_Template, 12, 2, "div", 123)(3, QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_3_Template, 5, 1, "div", 46)(4, QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_div_4_Template, 5, 1, "div", 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r50 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r50.question_type_id == 1 || sec_r50.question_type_id == 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r50.question_type_id == "5" || sec_r50.question_type_id == "7");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r50.question_type_id == "10");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r50.question_type_id == "20");
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 107);
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_div_1_Template, 5, 4, "div", 104);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r4.subQuestions);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 95)(1, "div", 95)(2, "label")(3, "b");
    i0.ɵɵtext(4, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 67);
    i0.ɵɵelement(6, "div", 78);
    i0.ɵɵpipe(7, "sanitizeHtml");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(7, 1, item_r4.answer[0].correctAnswer), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_27_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 102)(1, "div", 103);
    i0.ɵɵelement(2, "div", 69);
    i0.ɵɵpipe(3, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(3, 1, item_r4.question_editor_answer), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 98)(1, "div", 95)(2, "label")(3, "b");
    i0.ɵɵtext(4, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 99);
    i0.ɵɵelement(6, "app-graph-component", 100);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, QuestionReportComponent_div_16_div_1_div_1_div_13_div_27_div_7_Template, 4, 3, "div", 101);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    const item_r4 = ctx_r9.$implicit;
    const i_r11 = ctx_r9.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("editMode", false)("editPatchValue", item_r4.answer.length == 0 ? false : ctx_r1.parseVal(item_r4.answer[0].correctAnswer))("graphId", "graphAnsweringR" + i_r11)("questionType", item_r4.question_type_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_editor_answer != "");
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_28_div_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 131)(1, "h5", 11);
    i0.ɵɵtext(2, "Your Feedback:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 132);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const sec_r60 = i0.ɵɵnextContext(2).$implicit;
    const i_r11 = i0.ɵɵnextContext(4).index;
    i0.ɵɵclassMapInterpolate1("col-md-", sec_r60.student_roughdata != "" ? "6" : "12", " px-0");
    i0.ɵɵpropertyInterpolate1("id", "studentFeedback", i_r11, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(sec_r60.student_feedback);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_28_div_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 131)(1, "h5");
    i0.ɵɵtext(2, "Your Workspace");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 69);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r60 = i0.ɵɵnextContext(2).$implicit;
    const i_r11 = i0.ɵɵnextContext(4).index;
    i0.ɵɵclassMapInterpolate1("col-md-", sec_r60.student_feedback != "" ? "6" : "12", " px-0");
    i0.ɵɵpropertyInterpolate1("id", "studentRoughData", i_r11, "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("font-weight-bold ml-", sec_r60.student_feedback == "" ? "0" : "3", "");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("feedback-card innerhtml-margin-clear col-md-12 ml-", sec_r60.student_feedback == "" ? "0" : "3", "");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 12, sec_r60.student_roughdata), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_28_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 128)(1, "div", 129);
    i0.ɵɵtemplate(2, QuestionReportComponent_div_16_div_1_div_1_div_13_div_28_div_1_div_1_div_2_Template, 5, 6, "div", 130)(3, QuestionReportComponent_div_16_div_1_div_1_div_13_div_28_div_1_div_1_div_3_Template, 5, 14, "div", 130);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const sec_r60 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", sec_r60.student_feedback != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r60.student_roughdata != "");
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_28_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 128)(1, "div", 107)(2, "label", 11);
    i0.ɵɵtext(3, "Explanation: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 133);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const sec_r60 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 1, sec_r60.explanation), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_28_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 128)(1, "label", 11);
    i0.ɵɵtext(2, "Resource: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 133);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r60 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 1, sec_r60.resource), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_28_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 128)(1, "label");
    i0.ɵɵtext(2, "Feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "textarea", 134);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r60 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", sec_r60.feedback);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_28_div_1_div_1_Template, 4, 2, "div", 127)(2, QuestionReportComponent_div_16_div_1_div_1_div_13_div_28_div_1_div_2_Template, 6, 3, "div", 127)(3, QuestionReportComponent_div_16_div_1_div_1_div_13_div_28_div_1_div_3_Template, 5, 3, "div", 127)(4, QuestionReportComponent_div_16_div_1_div_1_div_13_div_28_div_1_div_4_Template, 4, 1, "div", 127);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r60 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r60.student_feedback != "" || sec_r60.student_roughdata != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r60.explanation != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r60.resource != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sec_r60.feedback != "");
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 107);
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_28_div_1_Template, 5, 4, "div", 55);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r4.subQuestions);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_29_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 131)(1, "h5", 11);
    i0.ɵɵtext(2, "Your Feedback:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 132);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(4);
    const item_r4 = ctx_r9.$implicit;
    const i_r11 = ctx_r9.index;
    i0.ɵɵclassMapInterpolate1("col-md-", item_r4.student_roughdata != "" ? "6" : "12", " px-0");
    i0.ɵɵpropertyInterpolate1("id", "studentFeedback", i_r11, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r4.student_feedback);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_29_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 131)(1, "h5");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 69);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(4);
    const item_r4 = ctx_r9.$implicit;
    const i_r11 = ctx_r9.index;
    i0.ɵɵclassMapInterpolate1("col-md-", item_r4.question_type_id == "55" ? "12" : item_r4.student_feedback != "" ? "6" : "12", " px-0");
    i0.ɵɵpropertyInterpolate1("id", "studentRoughData", i_r11, "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("font-weight-bold ml-", item_r4.question_type_id == "55" || item_r4.student_feedback == "" ? "0" : "3", "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", item_r4.question_type_id == "55" ? "Cited Source" : "Your Workspace", ":");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("feedback-card innerhtml-margin-clear col-md-12 ml-", item_r4.question_type_id == "55" || item_r4.student_feedback == "" ? "0" : "3", "");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 13, item_r4.student_roughdata), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 135)(1, "div", 129);
    i0.ɵɵtemplate(2, QuestionReportComponent_div_16_div_1_div_1_div_13_div_29_div_2_Template, 5, 6, "div", 130)(3, QuestionReportComponent_div_16_div_1_div_1_div_13_div_29_div_3_Template, 5, 15, "div", 130);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r4.student_feedback != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.student_roughdata != "");
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 138)(1, "label", 113)(2, "strong");
    i0.ɵɵtext(3, "Explanation");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 139);
    i0.ɵɵelement(5, "span", 52);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", item_r4.explanation, i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_30_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 140)(1, "label", 113)(2, "strong");
    i0.ɵɵtext(3, "Resource");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 139);
    i0.ɵɵelement(5, "span", 52);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", item_r4.resource, i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_30_div_1_Template, 6, 1, "div", 136)(2, QuestionReportComponent_div_16_div_1_div_1_div_13_div_30_div_2_Template, 6, 1, "div", 137);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.explanation != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.resource != "");
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_31_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 95)(1, "label", 113)(2, "strong");
    i0.ɵɵtext(3, "Explanation");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 139);
    i0.ɵɵelement(5, "span", 52);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const sec_r61 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, sec_r61.explanation), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_31_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 102)(1, "label", 113)(2, "strong");
    i0.ɵɵtext(3, "Resource");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 139);
    i0.ɵɵelement(5, "span", 52);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const sec_r61 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, sec_r61.resource), i0.ɵɵsanitizeHtml);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 105);
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_31_div_1_div_1_Template, 7, 3, "div", 43)(2, QuestionReportComponent_div_16_div_1_div_1_div_13_div_31_div_1_div_2_Template, 7, 3, "div", 101);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r61 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (sec_r61.is_correct == "true" || sec_r61.is_correct == "false") && sec_r61.explanation != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (sec_r61.is_correct == "true" || sec_r61.is_correct == "false") && sec_r61.resource != "");
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_div_13_div_31_div_1_Template, 3, 2, "div", 104);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r4.subQuestions);
} }
function QuestionReportComponent_div_16_div_1_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28)(1, "div", 39)(2, "div", 40)(3, "button", 41);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(5, QuestionReportComponent_div_16_div_1_div_1_div_13_div_5_Template, 2, 1, "div", 42)(6, QuestionReportComponent_div_16_div_1_div_1_div_13_div_6_Template, 9, 2, "div", 42)(7, QuestionReportComponent_div_16_div_1_div_1_div_13_div_7_Template, 2, 1, "div", 42)(8, QuestionReportComponent_div_16_div_1_div_1_div_13_div_8_Template, 2, 1, "div", 42)(9, QuestionReportComponent_div_16_div_1_div_1_div_13_div_9_Template, 2, 1, "div", 42)(10, QuestionReportComponent_div_16_div_1_div_1_div_13_div_10_Template, 4, 2, "div", 42)(11, QuestionReportComponent_div_16_div_1_div_1_div_13_div_11_Template, 8, 7, "div", 42)(12, QuestionReportComponent_div_16_div_1_div_1_div_13_div_12_Template, 5, 2, "div", 43)(13, QuestionReportComponent_div_16_div_1_div_1_div_13_div_13_Template, 5, 5, "div", 44)(14, QuestionReportComponent_div_16_div_1_div_1_div_13_div_14_Template, 2, 1, "div", 42);
    i0.ɵɵelementStart(15, "div", 23)(16, "div", 45)(17, "div", 3);
    i0.ɵɵtemplate(18, QuestionReportComponent_div_16_div_1_div_1_div_13_div_18_Template, 5, 1, "div", 46)(19, QuestionReportComponent_div_16_div_1_div_1_div_13_div_19_Template, 12, 2, "div", 46)(20, QuestionReportComponent_div_16_div_1_div_1_div_13_div_20_Template, 6, 1, "div", 46)(21, QuestionReportComponent_div_16_div_1_div_1_div_13_div_21_Template, 5, 1, "div", 42)(22, QuestionReportComponent_div_16_div_1_div_1_div_13_div_22_Template, 6, 1, "div", 42)(23, QuestionReportComponent_div_16_div_1_div_1_div_13_div_23_Template, 2, 1, "div", 42)(24, QuestionReportComponent_div_16_div_1_div_1_div_13_div_24_Template, 2, 1, "div", 42)(25, QuestionReportComponent_div_16_div_1_div_1_div_13_div_25_Template, 2, 1, "div", 46)(26, QuestionReportComponent_div_16_div_1_div_1_div_13_div_26_Template, 8, 3, "div", 43)(27, QuestionReportComponent_div_16_div_1_div_1_div_13_div_27_Template, 8, 5, "div", 44);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(28, QuestionReportComponent_div_16_div_1_div_1_div_13_div_28_Template, 2, 1, "div", 46)(29, QuestionReportComponent_div_16_div_1_div_1_div_13_div_29_Template, 4, 2, "div", 47)(30, QuestionReportComponent_div_16_div_1_div_1_div_13_div_30_Template, 3, 2, "div", 42)(31, QuestionReportComponent_div_16_div_1_div_1_div_13_div_31_Template, 2, 1, "div", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r4.question_no);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == 1 || item_r4.question_type_id == 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == 5 || item_r4.question_type_id == 7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == 9);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == 10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == 16);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == 20);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(25, _c0).indexOf(item_r4.question_type_id) > -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == 28);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == 40 || item_r4.question_type_id == 41);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == 24);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(26, _c1).includes(item_r4.question_type_id));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == 5 || item_r4.question_type_id == 7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == 9);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == 10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == 16);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == 20);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(27, _c0).indexOf(item_r4.question_type_id) > -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == 24);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == 28);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == 40 || item_r4.question_type_id == 41);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == "24");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r4.student_feedback != "" || item_r4.student_roughdata != "") && item_r4.question_type_id != "24");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id != 24 && (item_r4.explanation != "" || item_r4.resource != ""));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == "24");
} }
function QuestionReportComponent_div_16_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "div", 26)(2, "div", 27)(3, "div", 3)(4, "div", 28)(5, "div", 29);
    i0.ɵɵtemplate(6, QuestionReportComponent_div_16_div_1_div_1_h4_6_Template, 2, 0, "h4", 30)(7, QuestionReportComponent_div_16_div_1_div_1_div_7_Template, 2, 3, "div", 31)(8, QuestionReportComponent_div_16_div_1_div_1_div_8_Template, 1, 1, "div", 31)(9, QuestionReportComponent_div_16_div_1_div_1_div_9_Template, 3, 2, "div", 32);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(10, "div", 33)(11, "div", 27)(12, "div", 3);
    i0.ɵɵtemplate(13, QuestionReportComponent_div_16_div_1_div_1_div_13_Template, 32, 28, "div", 34);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate1("id", "ques_no_cfs_", item_r4.question_no, "");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", item_r4.question_type_id != "24");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question != "" && item_r4.question_type_id != 24 && item_r4.question_type_id != 55);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question != "" && item_r4.question_type_id == 55);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_type_id == 24);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", item_r4.question != "");
} }
function QuestionReportComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_div_1_Template, 14, 7, "div", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.question_no == ctx_r1.selectedQuestion && !ctx_r1.selectAllStudentDetails || ctx_r1.selectAllStudentDetails);
} }
function QuestionReportComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtemplate(1, QuestionReportComponent_div_16_div_1_Template, 2, 1, "div", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.studentAnswer);
} }
export class QuestionReportComponent {
    constructor(sanitizer, auth, student, cdr) {
        this.sanitizer = sanitizer;
        this.auth = auth;
        this.student = student;
        this.cdr = cdr;
        this.studentAnswer = [];
        this.selectAllStudentDetails = false;
        this.totalAns = [];
        this.previousFeedBack = [];
        this.selectedFeedBackIndex = '';
        this.topicListData = [];
        this.selectedTopic = [];
        this.selectedSubTopic = [];
        this.subTopicListData = [];
        this.settings = {};
        this.settings1 = {};
        this.selectedQuestion = 1;
        this.questionArray = {};
        this.showFullQuestion = false;
        this.topicId = '';
        this.subTopicId = '';
        this.selectedType = '';
        this.student_content_id = '';
        this.showAll = false;
        this.questionNumberList = [];
        this.getData = JSON.parse(this.auth.getSessionData('classDetails'));
        this.settings = {
            singleSelection: false,
            idField: 'question_topic_id',
            textField: 'question_topic',
            enableCheckAll: true,
            selectAllText: 'Select all',
            unSelectAllText: 'UnSelect all',
            allowSearchFilter: true,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 139,
            itemsShowLimit: 3,
            searchPlaceholderText: 'Search Topic',
            noDataAvailablePlaceholderText: 'No data available',
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
        };
        this.settings1 = {
            singleSelection: false,
            idField: 'question_sub_topic_id',
            textField: 'sub_topic',
            enableCheckAll: true,
            selectAllText: 'Select all',
            unSelectAllText: 'UnSelect all',
            allowSearchFilter: true,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 139,
            itemsShowLimit: 2,
            searchPlaceholderText: 'Search Sub Topic',
            noDataAvailablePlaceholderText: 'No data available',
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
        };
    }
    ngOnInit() {
        const studentAnswer = this.questionArray?.answers ? this.questionArray?.answers : [];
        studentAnswer.forEach((items) => {
            const objectValue = items.question_type_id == '24' ? items.subQuestions[0] : items;
            if (objectValue.question_topic_id) {
                const topicId = this.topicListData.some(code => code.question_topic_id == objectValue.question_topic_id);
                if (!topicId) {
                    this.topicListData.push({
                        question_topic_id: objectValue.question_topic_id,
                        question_topic: objectValue.question_topic
                    });
                }
            }
            if (objectValue.question_sub_topic_id) {
                const subTopicId = this.subTopicListData.some(code => code.question_sub_topic_id == objectValue.question_sub_topic_id);
                if (!subTopicId) {
                    this.subTopicListData.push({
                        question_sub_topic_id: objectValue.question_sub_topic_id,
                        sub_topic: objectValue.sub_topic
                    });
                }
            }
        });
        if ((this.topicId != '' && this.topicId) || this.showFullQuestion) {
            this.selectedTopic = !this.showFullQuestion && !this.showAll ? [this.topicListData.find(value => value.question_topic_id == this.topicId)] :
                // !this.showFullQuestion && this.showAll ? this.topicListData : [this.topicListData[0]];
                !this.showFullQuestion && this.showAll ? this.topicListData : this.topicListData;
        }
        if (this.subTopicId != '' && this.subTopicId) {
            this.selectedSubTopic = !this.showFullQuestion && !this.showAll ? [this.subTopicListData.find(value => value.question_sub_topic_id == this.subTopicId)] :
                // !this.showFullQuestion && this.showAll ? this.subTopicListData : [this.subTopicListData[0]];
                !this.showFullQuestion && this.showAll ? this.subTopicListData : this.subTopicListData;
        }
        console.log(this.selectedTopic, 'selectedTopic');
        console.log(this.selectedSubTopic, 'selectedSubTopic');
        this.selectAllStudentDetails = (this.showFullQuestion || !this.showFullQuestion) && this.showAll;
        if (this.selectedType == 'subTopic') {
            this.updateStudentAnswer(this.selectedSubTopic, this.showAll ? 'all' : 'single', 'subTopic', 'question_sub_topic_id', 'onInit');
        }
        else {
            this.updateStudentAnswer(this.selectedTopic, this.showAll ? 'all' : 'single', 'topic', 'question_topic_id', 'onInit');
        }
        if (this.studentAnswer.some(code => code.question_type_id == '55')) {
            this.getFeedbackCount(this.studentAnswer[0]);
        }
    }
    updateStudentAnswer(value, type, calledFrom, keyName, onInit = '') {
        const studentAnswer = this.questionArray?.answers ? this.questionArray?.answers : [];
        type == 'all' ? calledFrom == 'topic' ? this.selectedTopic = value : this.selectedSubTopic = value : '';
        if (onInit == '') {
            this.selectedQuestion = 1;
        }
        const selectedArrayValue = calledFrom == 'topic' ? this.selectedTopic : this.selectedSubTopic;
        const updatedAnswer = [];
        studentAnswer.forEach((items) => {
            const objectValue = items.question_type_id == '24' ? items.subQuestions[0] : items;
            selectedArrayValue.forEach((data) => {
                if (data[keyName] == objectValue[keyName]) {
                    updatedAnswer.push(items);
                }
            });
        });
        this.studentAnswer = updatedAnswer;
        console.log(this.studentAnswer, 'studentAnswer');
        this.questionNumberList = [];
        this.studentAnswer.forEach((items, index) => this.questionNumberList.push({ question_no: items.question_no, question_no_name: index + 1 }));
        this.questionNumberList.sort((a, b) => a.question_no - b.question_no);
        if (!this.showFullQuestion && this.showAll) {
            const quesId = 'ques_no_cfs_' + this.selectedQuestion;
            setTimeout(() => {
                if (document.getElementById(quesId)) {
                    document.getElementById(quesId).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'start'
                    });
                }
            }, 0);
        }
    }
    selectQuestionStatus(event) {
        this.selectAllStudentDetails = event;
        this.selectedQuestion = 1;
    }
    getQuestionData(event) {
        if (event) {
            this.selectAllStudentDetails = false;
            this.cdr.checkNoChanges();
        }
        else {
            this.selectAllStudentDetails = true;
        }
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
    getFeedbackCount(data) {
        console.log(data, 'data');
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            question_id: data.question_id,
            student_content_id: this.student_content_id,
        };
        this.student.getOpenAiFeedbackCount(payload).subscribe((successData) => {
            this.getFeedbackCountSuccess(successData);
        }, (error) => console.error(error, 'error_APICount'));
    }
    getFeedbackCountSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            successData.ResponseObject.forEach((items, index) => items.index = index);
            this.previousFeedBack = successData.ResponseObject;
            if (this.previousFeedBack.length != 0) {
                this.selectedFeedBackIndex = this.previousFeedBack.length - this.previousFeedBack[0]?.index;
                this.selectedPreviousStudentAnswer = this.previousFeedBack[0];
                this.convertedText = this.convertMarkdownToHtml(this.previousFeedBack[0]?.feedback);
            }
        }
    }
    feedbackSelected(value) {
        console.log(value, 'value');
        if (value != '' && value != 'current') {
            console.log(value, 'seelee');
            this.selectedFeedBackIndex = this.previousFeedBack.length - value.index;
            this.selectedPreviousStudentAnswer = value;
            this.convertedText = this.convertMarkdownToHtml(value.feedback);
        }
        else if (value == 'current') {
            this.selectedFeedBackIndex = '';
            this.convertedText = '';
        }
    }
    getFeedbackLabel(feedback) {
        const percentage = (feedback.student_score / feedback.total_score) * 100;
        if (percentage >= 60) {
            return { label: 'Exceptional' };
        }
        else if (percentage > 40 && percentage < 60) {
            return { label: 'Good' };
        }
        else {
            return { label: 'Improve' };
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
    static { this.ɵfac = function QuestionReportComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || QuestionReportComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.StudentService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: QuestionReportComponent, selectors: [["app-question-report"]], inputs: { selectedQuestion: "selectedQuestion", questionArray: "questionArray", showFullQuestion: "showFullQuestion", topicId: "topicId", subTopicId: "subTopicId", selectedType: "selectedType", student_content_id: "student_content_id", showAll: "showAll" }, decls: 17, vars: 8, consts: [["multiSelect", ""], [1, "container", "px-0"], [1, "card", "mt-2"], [1, "card-body"], [1, "row", "justify-content-end"], [1, "col-2", "col-md-3", "align-self-end"], ["title", "Show All Questions", 1, "d-flex", "align-items-center", "justify-content-end", "mb-0", 2, "color", "black"], ["id", "selectAll", "type", "checkbox", 1, "cursor", 3, "change", "checked"], ["for", "selectAll", 1, "pl-2", "font-weight-bold", "cursor", "mb-0"], ["class", "col-4 col-md-5", 4, "ngIf"], [1, "col-5", "col-md-3"], [1, "font-weight-bold"], ["bindLabel", "question_no", "bindValue", "question_no", "placeholder", "Question Number", 3, "ngModelChange", "change", "items", "ngModel", "readonly"], ["class", "card py-5 mt-2 mb-0", 4, "ngIf"], ["class", "row mt-3", 4, "ngIf"], [1, "col-4", "col-md-5"], [3, "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll", "placeholder", "settings", "data", "disabled", "ngModel"], [1, "card", "py-5", "mt-2", "mb-0"], [1, "row", "my-5", "justify-content-center"], [1, "col-4", "my-5"], [1, "nodataList", 2, "background", "#FFFFFF", "cursor", "default"], [1, "row", "mt-3"], ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "col-12"], ["class", "row mb-3", 3, "id", 4, "ngIf"], [1, "row", "mb-3", 3, "id"], [1, "col-6"], [1, "card", "h-100"], [1, "row", "p-3"], [1, "col-12", "cfs"], ["style", "font-size: 18px", "class", "mb-3 font-weight-bold", 4, "ngIf"], ["class", "mb-0 overflow-auto div-disable", 3, "innerHTML", 4, "ngIf"], [4, "ngIf"], [1, "col-6", "pl-0"], ["class", "row p-3", 4, "ngIf"], [1, "mb-3", "font-weight-bold", 2, "font-size", "18px"], [1, "mb-0", "overflow-auto", "div-disable", 3, "innerHTML"], ["class", "mt-3", 4, "ngIf"], [1, "mt-3"], [1, "col-12", "mb-3"], [1, "d-flex", 2, "background", "#dedede9e"], [1, "button_design", "btn-primary"], ["class", "col-12", 4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], ["class", "col-md-12 d-flex mt-4", 4, "ngIf"], [1, "card", "w-100", "mt-2", 2, "border", "1px solid #e8eaed"], ["class", "col-md-12 px-0", 4, "ngIf"], ["class", "col-md-12 mb-3", 4, "ngIf"], ["class", "cursor overflow-auto row my-3 mx-0 p-2", "style", "max-height: 20rem", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "cursor", "overflow-auto", "row", "my-3", "mx-0", "p-2", 2, "max-height", "20rem", 3, "ngClass"], [1, "btn-primary", "inner_button"], [1, "col-11", "pr-0", "cfs", "d-flex", "align-items-center"], [1, "remove-margin-bottom", 3, "innerHTML"], [1, "table", "table-bordered", "text-center", "div-disable"], ["class", "remove-margin-bottom", 3, "innerHTML", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["class", "radio_animated", "type", "radio", 3, "checked", "id", "name", 4, "ngIf"], ["type", "checkbox", 3, "checked", "id", 4, "ngIf"], ["type", "radio", 1, "radio_animated", 3, "checked", "id", "name"], ["type", "checkbox", 3, "checked", "id"], ["class", "col-md-12 mt-3 mb-3", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mt-3", "mb-3"], [1, "col-md-11"], ["data-toggle", "dropdown", 1, "col-md-12", "bg-white", "innerhtml-margin-clear", "p-2", "dropdown-border", "dropdown-toggle", "d-flex", "justify-content-between", 3, "id"], [1, "col-md-11", "dropdown-menu"], ["class", "dropdown-item dropdown-link innerhtml-margin-clear", "style", "overflow: scroll; overflow-y: hidden", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "dropdown-item", "dropdown-link", "innerhtml-margin-clear", 2, "overflow", "scroll", "overflow-y", "hidden", 3, "innerHTML"], [1, "form-span"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], ["class", "input-group mb-3 mt-3 inputMenu", 4, "ngFor", "ngForOf"], [1, "input-group", "mb-3", "mt-3", "inputMenu"], [1, "input-group", "mb-1", "inputMenu"], [1, "input-group-prepend"], [1, "input-group-text"], ["src", "assets/images/pdf-icons/equal@2x.png", 1, "img-fluid"], [1, "form-control", "mb-0", "pt-4", "pb-5", "overflow-scroll", 3, "innerHTML"], ["class", "innerhtml-margin-clear", 3, "innerHTML", 4, "ngIf"], [1, "innerhtml-margin-clear", 3, "innerHTML"], ["class", "form-span feedback-card col-md-12 d-flex", 4, "ngIf"], ["class", "col-md-12 d-flex p-2", 4, "ngIf"], [3, "class", 4, "ngIf"], ["class", "col-2 my-3", 4, "ngIf"], [1, "form-span", "feedback-card", "col-md-12", "d-flex"], [1, "col-md-12", "d-flex", "p-2"], ["class", "font-weight-bold", 4, "ngIf"], [1, "feedback-card", 2, "height", "74vh", 3, "innerHTML"], [1, "col-2", "my-3"], [1, "col-12", "sidebar-widget"], [1, "widget-post", "pt-15"], ["style", "padding: 12px 0", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [2, "padding", "12px 0", 3, "click", "ngClass"], ["class", "d-flex align-items-center justify-content-between", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "badge", 3, "ngClass"], [1, "col-md-12"], ["class", "innerhtml-margin-clear", 4, "ngIf"], [1, "innerhtml-margin-clear"], [1, "col-md-12", "d-flex", "mt-4"], [1, "col-12", "mt-0", "d-flex", "justify-content-center"], [3, "editMode", "editPatchValue", "graphId", "questionType"], ["class", "col-md-12 mt-3", 4, "ngIf"], [1, "col-md-12", "mt-3"], [1, "form-span", "innerhtml-margin-clear"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "mb-3"], [1, "col-11", "d-flex", "align-items-center", "pr-0", "cfs"], [1, "col-md-12", "px-0"], [1, "col-md-12", "table-flexible"], ["class", "radio_animated", "type", "radio", 3, "checked", "name", 4, "ngIf"], ["type", "checkbox", 3, "checked", 4, "ngIf"], ["type", "radio", 1, "radio_animated", 3, "checked", "name"], ["type", "checkbox", 3, "checked"], [1, "mb-0"], ["style", "max-height: 20rem", 3, "ngClass", "class", 4, "ngFor", "ngForOf"], [2, "max-height", "20rem", 3, "ngClass"], ["class", "btn-primary inner_button", 4, "ngIf"], ["class", "col-11 cfs d-flex align-items-center pr-0", 4, "ngIf"], [1, "col-11", "cfs", "d-flex", "align-items-center", "pr-0"], [1, "table", "table-bordered", "text-center", "div-disable", "mt-3"], [1, "row"], [1, "form-span", "mb-2"], [1, "form-span", "feedback-card"], ["class", "col-md-12 px-0 py-2 table-flexible", 4, "ngIf"], [1, "col-md-12", "px-0", "py-2", "table-flexible"], ["class", "col-md-6 mt-3 mb-3", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mt-3", "mb-3"], ["class", "col-md-12 mt-2", 4, "ngIf"], [1, "col-md-12", "mt-2"], [1, "row", "mt-3", "px-3"], [3, "class", "id", 4, "ngIf"], [3, "id"], [1, "feedback-card", "col-md-12"], [1, "explanation", "innerhtml-margin-clear", 3, "innerHTML"], ["cols", "30", "placeholder", "Please Enter the Feedback", "readonly", "", "rows", "2", 1, "form-control", 3, "value"], [1, "col-md-12", "mb-3"], ["class", "col-12 px-0", 4, "ngIf"], ["class", "col-12 px-0 mt-3", 4, "ngIf"], [1, "col-12", "px-0"], [1, "col-12", "mt-2"], [1, "col-12", "px-0", "mt-3"]], template: function QuestionReportComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h6", 6)(6, "input", 7);
            i0.ɵɵlistener("change", function QuestionReportComponent_Template_input_change_6_listener($event) { return ctx.selectQuestionStatus($event.target.checked); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "label", 8);
            i0.ɵɵtext(8, "Show All");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(9, QuestionReportComponent_div_9_Template, 5, 5, "div", 9)(10, QuestionReportComponent_div_10_Template, 5, 5, "div", 9);
            i0.ɵɵelementStart(11, "div", 10)(12, "label", 11);
            i0.ɵɵtext(13, "Question Number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "ng-select", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function QuestionReportComponent_Template_ng_select_ngModelChange_14_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.selectedQuestion, $event) || (ctx.selectedQuestion = $event); return $event; });
            i0.ɵɵlistener("change", function QuestionReportComponent_Template_ng_select_change_14_listener($event) { return ctx.getQuestionData($event); });
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(15, QuestionReportComponent_div_15_Template, 5, 0, "div", 13)(16, QuestionReportComponent_div_16_Template, 2, 1, "div", 14);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("checked", ctx.selectAllStudentDetails);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.topicId != "" && ctx.selectedType == "topic" || ctx.showFullQuestion);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.subTopicId != "" && ctx.selectedType == "subTopic");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("items", ctx.questionNumberList);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedQuestion);
            i0.ɵɵproperty("readonly", ctx.selectAllStudentDetails);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.studentAnswer.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.studentAnswer.length != 0);
        } }, dependencies: [i4.NgClass, i4.NgForOf, i4.NgIf, i5.NgControlStatus, i5.NgModel, i6.MultiSelectComponent, i7.NgSelectComponent, i8.GraphComponentComponent, i4.DatePipe, i9.SanitizeHtmlPipe, i10.CustomDateFormatPipe], styles: [".student-selected[_ngcontent-%COMP%] {\n    background-color: #e9ccec !important;\n    border-radius: 4px !important;\n}\n.correct_ans-selected[_ngcontent-%COMP%] {\n    background-color: #d4edda !important;\n    border-radius: 4px !important;\n  }\n.button_design[_ngcontent-%COMP%] {\n    border: 0 !important;\n    font-size: 14px;\n    padding: 9px 12px !important;\n  }\n  \n  .inner_button[_ngcontent-%COMP%] {\n    padding: 4px 8px !important;\n    background: #ffff !important;\n    color: black;\n    border: 2px solid #e1e4eb !important;\n    border-radius: 6px;\n    font-weight: 600;\n    font-size: 16px;\n    height: 30px;\n  }\n  \n  .button_design[_ngcontent-%COMP%] {\n    cursor: default;\n  }\n  \n  .inner_button[_ngcontent-%COMP%]:focus, .button_design[_ngcontent-%COMP%]:focus {\n    box-shadow: none !important;\n    outline: none;\n  }\n  \n  .button_design[_ngcontent-%COMP%]:active {\n    color: #FFFFFF !important;\n  }\n  \n  .inner_button[_ngcontent-%COMP%]:active {\n    color: black !important;\n  }\n  \n  .inner_button[_ngcontent-%COMP%]:focus-visible, .button_design[_ngcontent-%COMP%]:focus-visible {\n    outline: none !important;\n  }\n  .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    z-index: unset !important;\n  }\n\n.scroll-to-top[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15px;\n  right: 15px;\n  opacity: 0;\n  transition: all .2s ease-in-out;\n  z-index: 1051;\n}\n\n.show-scroll[_ngcontent-%COMP%] {\n  opacity: 1;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(QuestionReportComponent, [{
        type: Component,
        args: [{ selector: 'app-question-report', template: "<div class=\"container px-0\">\n    <div class=\"card mt-2\">\n        <div class=\"card-body\">\n            <div class=\"row justify-content-end\">\n                <div class=\"col-2 col-md-3 align-self-end\">\n                    <h6 title=\"Show All Questions\" style=\"color: black\" class=\"d-flex align-items-center justify-content-end mb-0\">\n                        <input id=\"selectAll\" class=\"cursor\" type=\"checkbox\" [checked]=\"selectAllStudentDetails\" (change)=\"selectQuestionStatus($event.target.checked)\">\n                        <label for=\"selectAll\" class=\"pl-2 font-weight-bold cursor mb-0\">Show All</label>\n                    </h6>\n                </div>\n                <div class=\"col-4 col-md-5\" *ngIf=\"(topicId != '' && selectedType == 'topic') || showFullQuestion\">\n                    <label class=\"font-weight-bold\">Topics</label>\n                    <ng-multiselect-dropdown #multiSelect\n                                             [placeholder]=\"'Select Topic'\"\n                                             [settings]=\"settings\"\n                                             [data]=\"topicListData\"\n                                             [disabled]=\"false\"\n                                             [(ngModel)]=\"selectedTopic\"\n                                             (onSelect)=\"selectedQuestion = 1;updateStudentAnswer($event, 'single', 'topic', 'question_topic_id')\"\n                                             (onDeSelect)=\"selectedQuestion = 1;updateStudentAnswer($event, 'single', 'topic', 'question_topic_id')\"\n                                             (onSelectAll)=\"selectedQuestion = 1;updateStudentAnswer($event, 'all', 'topic', 'question_topic_id')\"\n                                             (onDeSelectAll)=\"selectedQuestion = 1;updateStudentAnswer($event, 'all', 'topic', 'question_topic_id')\">\n                    </ng-multiselect-dropdown>\n                </div>\n\n                <div class=\"col-4 col-md-5\" *ngIf=\"subTopicId != '' && selectedType == 'subTopic'\">\n                    <label class=\"font-weight-bold\">Sub Topics</label>\n                    <ng-multiselect-dropdown #multiSelect\n                                             [placeholder]=\"'Select Sub Topic'\"\n                                             [settings]=\"settings1\"\n                                             [data]=\"subTopicListData\"\n                                             [disabled]=\"false\"\n                                             [(ngModel)]=\"selectedSubTopic\"\n                                             (onSelect)=\"selectedQuestion = 1;updateStudentAnswer($event, 'single', 'subTopic', 'question_sub_topic_id')\"\n                                             (onDeSelect)=\"selectedQuestion = 1;updateStudentAnswer($event, 'single', 'subTopic', 'question_sub_topic_id')\"\n                                             (onSelectAll)=\"selectedQuestion = 1;updateStudentAnswer($event, 'all', 'subTopic', 'question_sub_topic_id')\"\n                                             (onDeSelectAll)=\"selectedQuestion = 1;updateStudentAnswer($event, 'all', 'subTopic', 'question_sub_topic_id')\">\n                    </ng-multiselect-dropdown>\n                </div>\n\n                <div class=\"col-5 col-md-3\">\n                    <label class=\"font-weight-bold\">Question Number</label>\n                    <ng-select\n                            [items]=\"questionNumberList\"\n                            bindLabel=\"question_no\"\n                            bindValue=\"question_no\"\n                            [(ngModel)]=\"selectedQuestion\"\n                            [readonly]=\"selectAllStudentDetails\"\n                            placeholder=\"Question Number\"\n                            (change)=\"getQuestionData($event)\">\n                    </ng-select>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"card py-5 mt-2 mb-0\" *ngIf=\"studentAnswer.length == 0\">\n        <div class=\"row my-5 justify-content-center\">\n            <div class=\"col-4 my-5\">\n                <button style=\"background: #FFFFFF; cursor: default\" class=\"nodataList\">No Question Available!</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row mt-3\" *ngIf=\"studentAnswer.length != 0\">\n        <div class=\"col-12\" *ngFor=\"let item of studentAnswer; let i = index\">\n            <div class=\"row mb-3\" id=\"ques_no_cfs_{{item.question_no}}\" *ngIf=\"(item.question_no == selectedQuestion && !selectAllStudentDetails) || selectAllStudentDetails\">\n                <div class=\"col-6\">\n                    <div class=\"card h-100\">\n                        <div class=\"card-body\">\n                            <div class=\"row p-3\">\n                                <div class=\"col-12 cfs\">\n                                    <h4 style=\"font-size: 18px\" class=\"mb-3 font-weight-bold\" *ngIf=\"item.question_type_id != '24'\">Question:</h4>\n                                    <div *ngIf=\"item.question != '' && item.question_type_id != 24 && item.question_type_id != 55\" [innerHTML]=\"item.question | sanitizeHtml\" class=\"mb-0 overflow-auto div-disable\"></div>\n                                    <div *ngIf=\"item.question != '' && item.question_type_id == 55\" [innerHTML]=\"convertMarkdownToHtml(item.question, 'single')\" class=\"mb-0 overflow-auto div-disable\"></div>\n                                    <div *ngIf=\"item.question_type_id == 24\">\n                                        <div *ngIf=\"item.subQuestions[0]?.passage && item.subQuestions[0]?.passage != ''\">\n                                            <h4 style=\"font-size: 18px\" class=\"mb-3 font-weight-bold\">Passage:</h4>\n                                            <div [innerHTML]=\"item.subQuestions[0]?.passage | sanitizeHtml\" class=\"mb-0 overflow-auto div-disable\"></div>\n                                        </div>\n                                        <div class=\"mt-3\" *ngIf=\"item.subQuestions[0]?.question != ''\">\n                                            <h4 style=\"font-size: 18px\" class=\"mb-3 font-weight-bold\">Question:</h4>\n                                            <div [innerHTML]=\"item.subQuestions[0]?.question | sanitizeHtml\" class=\"mb-0 overflow-auto div-disable\"></div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-6 pl-0\">\n                    <div class=\"card h-100\">\n                        <div class=\"card-body\">\n                            <div class=\"row p-3\" *ngIf=\"item.question != ''\">\n                                <div class=\"col-12 mb-3\">\n                                    <div class=\"d-flex\" style=\"background: #dedede9e\">\n                                        <button class=\"button_design btn-primary\">{{item.question_no}}</button>\n                                    </div>\n                                </div>\n                                <div class=\"col-12\" *ngIf=\"item.question_type_id == 1 || item.question_type_id == 2\">\n                                    <div [ngClass]=\"{'student-selected' : (item.student_answer.length == 0 ? false : item.student_answer[k].isSelected != '')}\"\n                                        *ngFor=\"let option of item.options; let k = index\" class=\"cursor overflow-auto row my-3 mx-0 p-2\" style=\"max-height: 20rem\">\n                                        <button class=\"btn-primary inner_button\">{{((k+1) + 9).toString(36).toUpperCase()}}</button>\n                                        <div class=\"col-11 pr-0 cfs d-flex align-items-center\">\n                                            <span [innerHTML]=\"option.options | sanitizeHtml\" class=\"remove-margin-bottom\"></span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-12\" *ngIf=\"item.question_type_id == 5 || item.question_type_id == 7\">\n                                    <table class=\"table table-bordered text-center div-disable\">\n                                        <thead>\n                                        <tr>\n                                            <th>Questions</th>\n                                            <th *ngFor=\"let list of item.answer; let k=index\" [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\"></th>\n                                        </tr>\n                                        </thead>\n                                        <tbody>\n                                        <tr *ngFor=\"let list of item.student_answer; let j=index\">\n                                            <td [innerHTML]=\"list.options | sanitizeHtml\" class=\"remove-margin-bottom\"></td>\n                                            <td *ngFor=\"let ans of item.answer; let k=index\">\n                                                <input *ngIf=\"item.question_type_id == '5'\" [checked]=\"item.student_answer[j].isSelected == '' ? false : item.student_answer[j].isSelected == k.toString()\" class=\"radio_animated\" id=\"{{j}}chooseSingle{{i}}\" name=\"{{i}}choosesingle{{j}}your\" type=\"radio\">\n                                                <input *ngIf=\"item.question_type_id == '7'\" [checked]=\"splitMultiChoose(item.student_answer[j].isSelected, k)\" id=\"{{j}}chooseMulti{{i}}\" type=\"checkbox\">\n                                            </td>\n                                        </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div class=\"col-12\" *ngIf=\"item.question_type_id == 9\">\n                                    <div *ngFor=\"let data of item.student_answer; let j = index\" class=\"col-md-12 mt-3 mb-3\">\n                                        <label>Dropdown - {{j+1}}</label>\n                                        <div class=\"col-md-11\">\n                                            <div class=\"col-md-12 bg-white innerhtml-margin-clear p-2 dropdown-border dropdown-toggle d-flex justify-content-between\" data-toggle=\"dropdown\" id=\"{{i}}dropdown{{j}}\"></div>\n                                            <div class=\"col-md-11 dropdown-menu\">\n                                                <span *ngFor=\"let option of data.options; let k = index\"\n                                                      [innerHTML]=\"option.listOption | sanitizeHtml\"\n                                                      class=\"dropdown-item dropdown-link innerhtml-margin-clear\"\n                                                      style=\"overflow: scroll; overflow-y: hidden\"></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-12\" *ngIf=\"item.question_type_id == 10\">\n                                    <div *ngFor=\"let data of item.student_answer; let j = index\" class=\"col-md-12 mt-3 mb-3\">\n                                        <label>Input - {{j+1}}</label>\n                                        <div class=\"form-span\">\n                                            <div *ngIf=\"data.isSelected != ''\" [innerHTML]=\"data.isSelected | sanitizeHtml\"></div>\n                                            <div *ngIf=\"data.isSelected == ''\">Student Not Answered</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-12\" *ngIf=\"item.question_type_id == 16\">\n                                    <div *ngFor=\"let list of item.student_answer; let k=index\" class=\"input-group mb-3 mt-3 inputMenu\">\n                                        <div class=\"input-group mb-1 inputMenu\">\n                                            <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">\n                                            <img class=\"img-fluid\" src=\"assets/images/pdf-icons/equal@2x.png\">\n                                        </span>\n                                            </div>\n                                            <h4 [innerHTML]=\"list.options | sanitizeHtml\" class=\"form-control mb-0 pt-4 pb-5 overflow-scroll\"></h4>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-12\" *ngIf=\"item.question_type_id == 20\">\n                                    <div class=\"form-span\">\n                                        <div *ngIf=\"item.student_answer[0]?.isSelected != ''\" [innerHTML]=\"item.student_answer[0]?.isSelected | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>\n                                        <div *ngIf=\"item.student_answer[0]?.isSelected == ''\">Student Not Answered</div>\n                                    </div>\n                                </div>\n                                <div class=\"col-12\" *ngIf=\"['55'].indexOf(item.question_type_id) > -1\">\n                                    <div class=\"col-md-{{previousFeedBack.length == 1 ? '6' : previousFeedBack.length == 0 ? '12' : convertedText && convertedText != '' ? '5' : '10'}} my-3\">\n                                        <h5 class=\"font-weight-bold\">Your Answer:</h5>\n                                        <div *ngIf=\"item.student_answer[0]?.isSelected != ''\" class=\"form-span feedback-card col-md-12 d-flex\">\n                                            <span [innerHTML]=\"convertedText && convertedText != '' ? convertMarkdownToHtml(selectedPreviousStudentAnswer?.student_answer) : convertMarkdownToHtml(item.student_answer[0]?.isSelected, 'single')\" class=\"innerhtml-margin-clear\"></span>\n                                        </div>\n                                        <div *ngIf=\"item.student_answer[0]?.isSelected == ''\" class=\"col-md-12 d-flex p-2\">\n                                            <span class=\"form-span\">You Have Not Answered</span>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-{{previousFeedBack.length == 1 ? '6' : '5'}} my-3\" *ngIf=\"convertedText && convertedText != '' && previousFeedBack.length != 0\">\n                                        <h5 *ngIf=\"selectedFeedBackIndex == previousFeedBack.length\" class=\"font-weight-bold\">Final Feedback<span *ngIf=\"selectedPreviousStudentAnswer?.created_date\"> ({{selectedPreviousStudentAnswer?.created_date | customDateFormat}} | {{selectedPreviousStudentAnswer?.created_date | date:'h:mm a'}}) </span>: </h5>\n                                        <h5 *ngIf=\"selectedFeedBackIndex != previousFeedBack.length\" class=\"font-weight-bold\">Feedback For Version {{selectedFeedBackIndex}}<span *ngIf=\"selectedPreviousStudentAnswer?.created_date\"> ({{selectedPreviousStudentAnswer?.created_date | customDateFormat}} | {{selectedPreviousStudentAnswer?.created_date | date:'h:mm a'}}) </span>: </h5>\n                                        <div class=\"feedback-card\" style=\"height: 74vh\" [innerHTML]=\"convertedText\"></div>\n                                    </div>\n        \n                                    <div class=\"col-2 my-3\" *ngIf=\"previousFeedBack.length > 1\">\n                                        <div class=\"col-12 sidebar-widget\">\n                                            <h5 class=\"font-weight-bold\">Version History</h5>\n                                            <ul class=\"widget-post pt-15\">\n                                                <li style=\"padding: 12px 0\" *ngFor=\"let feedback of previousFeedBack; let i = index; let first = first\" [ngClass]=\"{'active': selectedFeedBackIndex === previousFeedBack.length - i}\"\n                                                    (click)=\"feedbackSelected(feedback)\">\n                                                    <a *ngIf=\"first\">Your Answer</a>\n                                                    <a *ngIf=\"!first\" class=\"d-flex align-items-center justify-content-between\">Version {{previousFeedBack.length - i}}\n                                                        <span class=\"badge\" [ngClass]=\"{'badge-exceptional': getFeedbackLabel(feedback).label === 'Exceptional', 'badge-good': getFeedbackLabel(feedback).label === 'Good',\n                                                            'badge-improve': getFeedbackLabel(feedback).label === 'Improve'}\">{{getFeedbackLabel(feedback).label}}</span></a>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"item.question_type_id == 28\" class=\"col-md-12\">\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-span\">\n                                            <div *ngIf=\"item.student_answer[0].isSelected != ''\" [innerHTML]=\"item.student_answer[0].isSelected | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>\n                                            <div *ngIf=\"item.student_answer[0].isSelected == ''\" class=\"innerhtml-margin-clear\">Student Not Answered</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"item.question_type_id == 40 || item.question_type_id == 41\" class=\"col-md-12 d-flex mt-4\">\n                                    <div class=\"col-md-12\">\n                                        <div class=\"col-12 mt-0 d-flex justify-content-center\">\n                                            <app-graph-component [editMode]=\"false\"\n                                                                 [editPatchValue]=\"item.student_answer.length == 0 ? false : parseVal(item.student_answer[0].correctAnswer)\"\n                                                                 [graphId]=\"'graphAnsweringY'+i\"\n                                                                 [questionType]=\"item.question_type_id\"></app-graph-component>\n                                        </div>\n                                        <div *ngIf=\"item.student_editor_answer != ''\" class=\"col-md-12 mt-3\">\n                                            <div class=\"form-span innerhtml-margin-clear\">\n                                                <div [innerHTML]=\"item.student_editor_answer | sanitizeHtml\"></div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div *ngIf=\"item.question_type_id == 24\" class=\"col-12\">\n                                    <div *ngFor=\"let sec of item.subQuestions; let j = index\" class=\"mb-3\">\n                                        <div class=\"col-12\" *ngIf=\"sec.question_type_id == 1 || sec.question_type_id == 2\">\n                                            <div [ngClass]=\"{'student-selected' :  option.isSelected === '' ? false : k == option.isSelected}\"\n                                                 *ngFor=\"let option of sec.student_answer; let k = index\" class=\"cursor overflow-auto row my-3 mx-0 p-2\" style=\"max-height: 20rem\">\n                                                <button class=\"btn-primary inner_button\">{{((k+1) + 9).toString(36).toUpperCase()}}</button>\n                                                <div class=\"col-11 d-flex align-items-center pr-0 cfs\">\n                                                    <span [innerHTML]=\"option.options | sanitizeHtml\" class=\"remove-margin-bottom\"></span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div *ngIf=\"sec.question_type_id == '5' || sec.question_type_id == '7'\" class=\"col-md-12 px-0\">\n                                            <div class=\"col-md-12 table-flexible\">\n                                                <table class=\"table table-bordered text-center div-disable\">\n                                                    <thead>\n                                                    <tr>\n                                                        <th>Questions</th>\n                                                        <th *ngFor=\"let list of sec.answer; let l=index\" [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\"></th>\n                                                    </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                    <tr *ngFor=\"let list of sec.student_answer; let k=index\">\n                                                        <td [innerHTML]=\"list.options | sanitizeHtml\" class=\"remove-margin-bottom\"></td>\n                                                        <td *ngFor=\"let ans of sec.answer; let l=index\">\n                                                            <input *ngIf=\"sec.question_type_id == '5'\" [checked]=\"sec.student_answer[k].isSelected == '' ? false : sec.student_answer[k].isSelected == l.toString()\" class=\"radio_animated\" name=\"{{j}}choo{{i}}se{{k}}if\" type=\"radio\">\n                                                            <input *ngIf=\"sec.question_type_id == '7'\" [checked]=\"splitMultiChoose(sec.student_answer[k].isSelected, l)\" type=\"checkbox\">\n                                                        </td>\n                                                    </tr>\n                                                    </tbody>\n                                                </table>\n                                            </div>\n<!--                                            <div class=\"col-md-12 table-flexible\">-->\n<!--                                                <div class=\"card w-100 mt-2\" style=\"border: 1px solid #e8eaed\">-->\n<!--                                                    <div class=\"card-body\">-->\n<!--                                                        <label><b>Correct Answer</b></label>-->\n<!--                                                        <table class=\"table table-bordered text-center div-disable\">-->\n<!--                                                            <thead>-->\n<!--                                                            <tr>-->\n<!--                                                                <th>Questions</th>-->\n<!--                                                                <th *ngFor=\"let list of sec.answer; let l=index\" [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\"></th>-->\n<!--                                                            </tr>-->\n<!--                                                            </thead>-->\n<!--                                                            <tbody>-->\n<!--                                                            <tr *ngFor=\"let list of sec.student_answer; let k=index\">-->\n<!--                                                                <td [innerHTML]=\"list.options\" class=\"remove-margin-bottom\"></td>-->\n<!--                                                                <td *ngFor=\"let ans of sec.answer; let l=index\">-->\n<!--                                                                    <input *ngIf=\"sec.question_type_id == '5'\" [checked]=\"sec.heading_option[k].correctActive == l\" class=\"radio_animated\" name=\"{{i}}passage{{j}}cho{{k}}ose{{l}}\" type=\"radio\">-->\n<!--                                                                    <input *ngIf=\"sec.question_type_id == '7'\" id=\"chooseMultipass1{{i}}{{j}}{{k}}{{l}}\" type=\"checkbox\">-->\n<!--                                                                </td>-->\n<!--                                                            </tr>-->\n<!--                                                            </tbody>-->\n<!--                                                        </table>-->\n<!--                                                    </div>-->\n<!--                                                </div>-->\n<!--                                            </div>-->\n                                        </div>\n                                        <div *ngIf=\"sec.question_type_id == '10'\" class=\"col-md-12 px-0\">\n                                            <div class=\"col-md-12 px-0\">\n                                                <!-- <label><b>Your Answer</b></label> -->\n                                                <div *ngFor=\"let data of sec.student_answer;let k = index\" class=\"col-md-12 mt-3 mb-3\">\n                                                    <label>Input - {{k+1}}</label>\n                                                    <div class=\"form-span\">\n                                                        <div *ngIf=\"data.isSelected != ''\" [innerHTML]=\"data.isSelected | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>\n                                                        <div *ngIf=\"data.isSelected == ''\">Student Not Answered</div>\n                                                    </div>\n                                                </div>\n                                            </div>\n<!--                                            <div class=\"col-md-12 px-0\">-->\n<!--                                                <div class=\"card w-100 mt-2\" style=\"border: 1px solid #e8eaed\">-->\n<!--                                                    <div class=\"card-body\">-->\n<!--                                                        <label><b>Correct Answer</b></label>-->\n<!--                                                        <div *ngFor=\"let data of sec.options; let k = index\" class=\"col-md-12 mt-3 mb-3\">-->\n<!--                                                            <label>Input - {{k+1}}</label>-->\n<!--                                                            <div class=\"form-span\">-->\n<!--                                                                <div [innerHTML]=\"data.options[0].value | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>-->\n<!--                                                            </div>-->\n<!--                                                        </div>-->\n<!--                                                    </div>-->\n<!--                                                </div>-->\n<!--                                            </div>-->\n                                        </div>\n                                        <div *ngIf=\"sec.question_type_id == '20'\" class=\"col-md-12 px-0\">\n                                            <div class=\"col-md-12\">\n                                                <!-- <label><b>Your Answer</b></label> -->\n                                                <div class=\"form-span\">\n                                                    <div *ngIf=\"sec.student_answer[0].isSelected != ''\" [innerHTML]=\"sec.student_answer[0].isSelected | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>\n                                                    <div *ngIf=\"sec.student_answer[0].isSelected == ''\">Student Not Answered</div>\n                                                </div>\n                                            </div>\n<!--                                            <div class=\"col-md-12\">-->\n<!--                                                <div class=\"card w-100 mt-2\" style=\"border: 1px solid #e8eaed\">-->\n<!--                                                    <div class=\"card-body\">-->\n<!--                                                        <div *ngFor=\"let answer of sec.answer;let i = index\">-->\n<!--                                                            <label><b>Correct Answer {{i + 1}}</b></label>-->\n<!--                                                            <div class=\"form-span mb-2\">-->\n<!--                                                                <div [innerHTML]=\"answer.correctAnswer | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>-->\n<!--                                                            </div>-->\n<!--                                                        </div>-->\n<!--                                                    </div>-->\n<!--                                                </div>-->\n<!--                                            </div>-->\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-12\">\n                                    <div class=\"card w-100 mt-2\" style=\"border: 1px solid #e8eaed\">\n                                        <div class=\"card-body\">\n                                            <div class=\"col-md-12 px-0\" *ngIf=\"['1', '2'].includes(item.question_type_id)\">\n                                                <label class=\"mb-0\"><strong>Correct Answer</strong></label>\n                                                <div [ngClass]=\"{'correct_ans-selected' : option.correctAnswer != ''}\"\n                                                     *ngFor=\"let option of item.answer; let k = index\" style=\"max-height: 20rem\"\n                                                     class=\"{{option.correctAnswer != '' ? 'my-3 mx-2 p-2 cursor overflow-auto row' : ''}}\">\n                                                    <button *ngIf=\"option.correctAnswer != ''\" class=\"btn-primary inner_button\">{{((k+1) + 9).toString(36).toUpperCase()}}</button>\n                                                    <div class=\"col-11 cfs d-flex align-items-center pr-0\" *ngIf=\"option.correctAnswer != ''\">\n                                                        <span [innerHTML]=\"item.options[k].options | sanitizeHtml\" class=\"remove-margin-bottom\"></span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-12 px-0\" *ngIf=\"item.question_type_id == 5 || item.question_type_id == 7\">\n                                                <label class=\"mb-0\"><strong>Correct Answer</strong></label>\n                                                <table class=\"table table-bordered text-center div-disable mt-3\">\n                                                    <thead>\n                                                    <tr>\n                                                        <th>Questions</th>\n                                                        <th *ngFor=\"let list of item.answer; let k=index\" [innerHTML]=\"list | sanitizeHtml\" class=\"remove-margin-bottom\"></th>\n                                                    </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                    <tr *ngFor=\"let list of item.student_answer; let j=index\">\n                                                        <td [innerHTML]=\"list.options | sanitizeHtml\" class=\"remove-margin-bottom\"></td>\n                                                        <td *ngFor=\"let ans of item.answer; let k=index\">\n                                                            <input *ngIf=\"item.question_type_id == '5'\" [checked]=\"item.heading_option[j].correctActive === k\" class=\"radio_animated\" name=\"{{i}}choosesingle{{j}}corect\" type=\"radio\">\n                                                            <input *ngIf=\"item.question_type_id == '7'\" [checked]=\"item.heading_option[j].correctActive === k\" type=\"checkbox\">\n                                                        </td>\n                                                    </tr>\n                                                    </tbody>\n                                                </table>\n                                            </div>\n                                            <div class=\"col-md-12 px-0\" *ngIf=\"item.question_type_id == 9\">\n                                                <label class=\"mb-0\"><strong>Correct Answer</strong></label>\n                                                <div class=\"row\">\n                                                    <div *ngFor=\"let data of item.answer; let j = index\" class=\"col-md-12 mt-3 mb-3\">\n                                                        <label>Dropdown - {{j+1}}</label>\n                                                        <div class=\"col-md-11\">\n                                                            <div class=\"col-md-12 bg-white innerhtml-margin-clear p-2 dropdown-border dropdown-toggle d-flex justify-content-between\" data-toggle=\"dropdown\" id=\"{{i}}dropdownCorrect{{j}}\"></div>\n                                                            <div class=\"col-md-11 dropdown-menu\">\n                                                                <span *ngFor=\"let option of data.options; let k = index\"\n                                                                      [innerHTML]=\"option.listOption | sanitizeHtml\"\n                                                                      class=\"dropdown-item dropdown-link innerhtml-margin-clear\"\n                                                                      style=\"overflow: scroll; overflow-y: hidden\"></span>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-12\" *ngIf=\"item.question_type_id == 10\">\n                                                <label><b>Correct Answer</b></label>\n                                                <div *ngFor=\"let data of item.options; let j = index\" class=\"col-md-12 mt-3 mb-3\">\n                                                    <label>Input - {{j+1}}</label>\n                                                    <div class=\"form-span\">\n                                                        <div [innerHTML]=\"data.options[0].value | sanitizeHtml\"></div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-12\" *ngIf=\"item.question_type_id == 16\">\n                                                <label><b>Correct Answer</b></label>\n                                                <div class=\"col-12\">\n                                                    <div *ngFor=\"let list of item.answer; let k=index\" class=\"input-group mb-3 mt-3 inputMenu\">\n                                                        <div class=\"input-group mb-1 inputMenu\">\n                                                            <div class=\"input-group-prepend\">\n                                                        <span class=\"input-group-text\">\n                                                            <img class=\"img-fluid\" src=\"assets/images/pdf-icons/equal@2x.png\">\n                                                        </span>\n                                                            </div>\n                                                            <h4 [innerHTML]=\"list.correctAnswer | sanitizeHtml\" class=\"form-control mb-0 pt-4 pb-5 overflow-scroll\"></h4>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-12\" *ngIf=\"item.question_type_id == 20\">\n                                                <div *ngFor=\"let answer of item.answer;let i = index\">\n                                                    <label><b>Correct Answer {{i + 1}}</b></label>\n                                                    <div class=\"form-span mb-2\">\n                                                        <div [innerHTML]=\"answer.correctAnswer | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-12\" *ngIf=\"['55'].indexOf(item.question_type_id) > -1\">\n                                                <div class=\"col-md-12\" *ngIf=\"item.answer[0]?.correctAnswer.trimStart() != ''\">\n                                                    <label><b>Sample Essay</b></label>\n                                                    <div class=\"form-span feedback-card\">\n                                                        <div [innerHTML]=\"convertMarkdownToHtml(item.answer[0]?.correctAnswer, 'single')\" class=\"innerhtml-margin-clear\"></div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"item.question_type_id == 24\" class=\"col-md-12 px-0\">\n                                                <div *ngFor=\"let sec of item.subQuestions; let j = index\" class=\"mb-3\">\n\n                                                    <div class=\"col-md-12 px-0\" *ngIf=\"sec.question_type_id == 1 || sec.question_type_id == 2\">\n                                                        <label class=\"mb-0\"><strong>Correct Answer</strong></label>\n                                                        <div [ngClass]=\"{'correct_ans-selected' : option.correctAnswer !== ''}\"\n                                                             *ngFor=\"let option of sec.answer; let k = index\"\n                                                             class=\"{{option.correctAnswer !== '' ? 'cursor overflow-auto row my-3 mx-0 p-2' : ''}}\" style=\"max-height: 20rem\">\n                                                            <button *ngIf=\"option.correctAnswer != ''\" class=\"btn-primary inner_button\">{{((k+1) + 9).toString(36).toUpperCase()}}</button>\n                                                            <div *ngIf=\"option.correctAnswer !== ''\" class=\"col-11 cfs d-flex align-items-center pr-0\">\n                                                                <span [innerHTML]=\"sec.options[k].options | sanitizeHtml\" class=\"remove-margin-bottom\"></span>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n\n                                                    <div class=\"col-md-12 px-0 py-2 table-flexible\"\n                                                         *ngIf=\"sec.question_type_id == '5' || sec.question_type_id == '7'\">\n                                                        <label><strong>Correct Answer :</strong></label>\n                                                        <table class=\"table table-bordered text-center div-disable\">\n                                                            <thead>\n                                                            <tr>\n                                                                <th>Questions</th>\n                                                                <th *ngFor=\"let list of sec.answer; let k=index\"\n                                                                    [innerHTML]=\"list | sanitizeHtml\"\n                                                                    class=\"remove-margin-bottom\"></th>\n                                                            </tr>\n                                                            </thead>\n                                                            <tbody>\n                                                            <tr *ngFor=\"let list of sec.given_answer; let j=index\">\n                                                                <td [innerHTML]=\"list.options | sanitizeHtml\"\n                                                                    class=\"remove-margin-bottom\"></td>\n                                                                <td *ngFor=\"let ans of sec.answer; let k=index\">\n                                                                    <input *ngIf=\"sec.question_type_id == '5'\"\n                                                                           [checked]=\"sec.heading_option[j].correctActive === k\"\n                                                                           class=\"radio_animated\"\n                                                                           name=\"{{i}}choosesingleCorrect{{j}}corect\"\n                                                                           type=\"radio\">\n                                                                    <input *ngIf=\"sec.question_type_id == '7'\"\n                                                                           [checked]=\"patchCorrectMultiChoiceAnswer(sec.heading_option, k , j)\"\n                                                                           id=\"chooseMultipass{{i}}{{j}}{{k}}\" type=\"checkbox\">\n                                                                </td>\n                                                            </tr>\n                                                            </tbody>\n                                                        </table>\n                                                    </div>\n\n                                                    <div class=\"col-md-12 px-0\" *ngIf=\"sec.question_type_id == '10'\">\n                                                        <label><b>Correct Answer</b></label>\n                                                        <div *ngFor=\"let data of sec.options; let j = index\"\n                                                             class=\"col-md-6 mt-3 mb-3\">\n                                                            <label>Input - {{j + 1}}</label>\n                                                            <div class=\"form-span\">\n                                                                <div [innerHTML]=\"data.options[0].value | sanitizeHtml\"></div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n\n                                                    <div class=\"col-md-12 px-0\" *ngIf=\"sec.question_type_id == '20'\">\n                                                        <label><b>Correct Answer</b></label>\n                                                        <div *ngFor=\"let data of sec.answer; let j = index\"\n                                                             class=\"col-md-12 mt-3 mb-3\">\n                                                            <label>Answer - {{j + 1}}</label>\n                                                            <div class=\"form-span\">\n                                                                <div [innerHTML]=\"data.correctAnswer | sanitizeHtml\"></div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"item.question_type_id == 28\" class=\"col-md-12\">\n                                                <div class=\"col-md-12\">\n                                                    <label><b>Correct Answer</b></label>\n                                                    <div class=\"form-span\">\n                                                        <div [innerHTML]=\"item.answer[0].correctAnswer | sanitizeHtml\" class=\"innerhtml-margin-clear\"></div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"item.question_type_id == 40 || item.question_type_id == 41\" class=\"col-md-12 d-flex mt-4\">\n                                                <div class=\"col-md-12\">\n                                                    <label><b>Correct Answer</b></label>\n                                                    <div class=\"col-12 mt-0 d-flex justify-content-center\">\n                                                        <app-graph-component [editMode]=\"false\"\n                                                                             [editPatchValue]=\"item.answer.length == 0 ? false : parseVal(item.answer[0].correctAnswer)\"\n                                                                             [graphId]=\"'graphAnsweringR'+i\"\n                                                                             [questionType]=\"item.question_type_id\"></app-graph-component>\n                                                    </div>\n                                                    <div  *ngIf=\"item.question_editor_answer != ''\" class=\"col-md-12 mt-3\">\n                                                        <div class=\"form-span innerhtml-margin-clear\">\n                                                            <div [innerHTML]=\"item.question_editor_answer | sanitizeHtml\"></div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div *ngIf=\"item.question_type_id == '24'\" class=\"col-md-12 px-0\">\n                                    <div *ngFor=\"let sec of item.subQuestions; let j = index\">\n                                        <div *ngIf=\"sec.student_feedback != '' || sec.student_roughdata != ''\" class=\"col-md-12 mt-2\">\n                                            <div class=\"row mt-3 px-3\">\n                                                <div class=\"col-md-{{sec.student_roughdata != '' ? '6' : '12'}} px-0\" id=\"studentFeedback{{i}}\" *ngIf=\"sec.student_feedback != ''\">\n                                                    <h5 class=\"font-weight-bold\">Your Feedback:</h5>\n                                                    <div class=\"feedback-card col-md-12\">{{sec.student_feedback}}</div>\n                                                </div>\n                                                <div *ngIf=\"sec.student_roughdata != ''\" class=\"col-md-{{sec.student_feedback != '' ? '6' : '12'}} px-0\" id=\"studentRoughData{{i}}\">\n                                                    <h5 class=\"font-weight-bold ml-{{sec.student_feedback == '' ? '0' : '3'}}\">Your Workspace</h5>\n                                                    <div [innerHTML]=\"sec.student_roughdata | sanitizeHtml\" class=\"feedback-card innerhtml-margin-clear col-md-12 ml-{{sec.student_feedback == '' ? '0' : '3'}}\"></div>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div *ngIf=\"sec.explanation != ''\" class=\"col-md-12 mt-2\">\n                                            <div class=\"col-md-12 px-0\">\n                                                <label class=\"font-weight-bold\">Explanation: </label>\n                                                <div class=\"explanation innerhtml-margin-clear\" [innerHTML]=\"sec.explanation | sanitizeHtml\"></div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-md-12 mt-2\" *ngIf=\"sec.resource != ''\">\n                                            <label class=\"font-weight-bold\">Resource: </label>\n                                            <div class=\"explanation innerhtml-margin-clear\" [innerHTML]=\"sec.resource | sanitizeHtml\"></div>\n                                        </div>\n\n                                        <div class=\"col-md-12 mt-2\" *ngIf=\"sec.feedback != ''\">\n                                            <label>Feedback</label>\n                                            <textarea [value]=\"sec.feedback\" class=\"form-control\" cols=\"30\" placeholder=\"Please Enter the Feedback\" readonly rows=\"2\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div *ngIf=\"(item.student_feedback != '' || item.student_roughdata != '') && item.question_type_id != '24'\" class=\"col-md-12 mb-3\">\n                                    <div class=\"row mt-3 px-3\">\n                                        <div class=\"col-md-{{item.student_roughdata != '' ? '6' : '12'}} px-0\" id=\"studentFeedback{{i}}\" *ngIf=\"item.student_feedback != ''\">\n                                            <h5 class=\"font-weight-bold\">Your Feedback:</h5>\n                                            <div class=\"feedback-card col-md-12\">{{item.student_feedback}}</div>\n                                        </div>\n                                        <div *ngIf=\"item.student_roughdata != ''\" class=\"col-md-{{item.question_type_id  == '55' ? '12' : item.student_feedback != '' ? '6' : '12'}} px-0\" id=\"studentRoughData{{i}}\">\n                                            <h5 class=\"font-weight-bold ml-{{item.question_type_id == '55' || item.student_feedback == '' ? '0' : '3'}}\">{{item.question_type_id == '55' ? 'Cited Source' : 'Your Workspace'}}:</h5>\n                                            <div [innerHTML]=\"item.student_roughdata | sanitizeHtml\" class=\"feedback-card innerhtml-margin-clear col-md-12 ml-{{item.question_type_id == '55' || item.student_feedback == '' ? '0' : '3'}}\"></div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-12\" *ngIf=\"item.question_type_id != 24 && (item.explanation != '' || item.resource != '')\">\n                                    <div class=\"col-12 px-0\" *ngIf=\"item.explanation != ''\">\n                                        <label class=\"mb-0\"><strong>Explanation</strong></label>\n                                        <div class=\"col-12 mt-2\">\n                                            <span [innerHTML]=\"item.explanation\" class=\"remove-margin-bottom\"></span>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-12 px-0 mt-3\" *ngIf=\"item.resource != ''\">\n                                        <label class=\"mb-0\"><strong>Resource</strong></label>\n                                        <div class=\"col-12 mt-2\">\n                                            <span [innerHTML]=\"item.resource\" class=\"remove-margin-bottom\"></span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"item.question_type_id == '24'\">\n                                    <div *ngFor=\"let sec of item.subQuestions; let j = index\" class=\"mb-3\">\n                                        <div class=\"col-md-12\" *ngIf=\"(sec.is_correct == 'true' || sec.is_correct == 'false') && sec.explanation != ''\">\n                                            <label class=\"mb-0\"><strong>Explanation</strong></label>\n                                            <div class=\"col-12 mt-2\">\n                                                <span [innerHTML]=\"sec.explanation | sanitizeHtml\" class=\"remove-margin-bottom\"></span>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-12 mt-3\" *ngIf=\"(sec.is_correct == 'true' || sec.is_correct == 'false') && sec.resource != ''\">\n                                            <label class=\"mb-0\"><strong>Resource</strong></label>\n                                            <div class=\"col-12 mt-2\">\n                                                <span [innerHTML]=\"sec.resource | sanitizeHtml\" class=\"remove-margin-bottom\"></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n", styles: [".student-selected {\n    background-color: #e9ccec !important;\n    border-radius: 4px !important;\n}\n.correct_ans-selected {\n    background-color: #d4edda !important;\n    border-radius: 4px !important;\n  }\n.button_design {\n    border: 0 !important;\n    font-size: 14px;\n    padding: 9px 12px !important;\n  }\n  \n  .inner_button {\n    padding: 4px 8px !important;\n    background: #ffff !important;\n    color: black;\n    border: 2px solid #e1e4eb !important;\n    border-radius: 6px;\n    font-weight: 600;\n    font-size: 16px;\n    height: 30px;\n  }\n  \n  .button_design {\n    cursor: default;\n  }\n  \n  .inner_button:focus, .button_design:focus {\n    box-shadow: none !important;\n    outline: none;\n  }\n  \n  .button_design:active {\n    color: #FFFFFF !important;\n  }\n  \n  .inner_button:active {\n    color: black !important;\n  }\n  \n  .inner_button:focus-visible, .button_design:focus-visible {\n    outline: none !important;\n  }\n  .card .card-body {\n    z-index: unset !important;\n  }\n\n.scroll-to-top {\n  position: absolute;\n  bottom: 15px;\n  right: 15px;\n  opacity: 0;\n  transition: all .2s ease-in-out;\n  z-index: 1051;\n}\n\n.show-scroll {\n  opacity: 1;\n}\n"] }]
    }], () => [{ type: i1.DomSanitizer }, { type: i2.AuthService }, { type: i3.StudentService }, { type: i0.ChangeDetectorRef }], { selectedQuestion: [{
            type: Input
        }], questionArray: [{
            type: Input
        }], showFullQuestion: [{
            type: Input
        }], topicId: [{
            type: Input
        }], subTopicId: [{
            type: Input
        }], selectedType: [{
            type: Input
        }], student_content_id: [{
            type: Input
        }], showAll: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(QuestionReportComponent, { className: "QuestionReportComponent" }); })();
//# sourceMappingURL=question-report.component.js.map