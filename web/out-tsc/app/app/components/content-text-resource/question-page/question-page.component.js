import { Component, inject, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { parse, stringify } from 'flatted';
import { GraphComponentComponent } from '../../auth/graph-component/graph-component.component';
import { BookService } from '../../../shared/service/book.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/class.service";
import * as i3 from "../../../shared/service/content.service";
import * as i4 from "../../../shared/service/configuration.service";
import * as i5 from "@angular/platform-browser";
import * as i6 from "@angular/forms";
import * as i7 from "../../../shared/service/creator.service";
import * as i8 from "ngx-toastr";
import * as i9 from "@angular/router";
import * as i10 from "../../../shared/service/validation.service";
import * as i11 from "@ng-bootstrap/ng-bootstrap";
import * as i12 from "../../../shared/service/contentdetail.service";
import * as i13 from "@angular/common";
import * as i14 from "@ng-select/ng-select";
import * as i15 from "@angular/cdk/drag-drop";
import * as i16 from "../../auth/graph-component/graph-component.component";
import * as i17 from "../../auth/tiny-mice/tiny-mice.component";
import * as i18 from "@angular/material/chips";
import * as i19 from "@angular/material/form-field";
import * as i20 from "@angular/material/icon";
import * as i21 from "../../../shared/pipes/sanitizer/SanitizeHtmlPipe.pipe";
const _c0 = ["deletePassageQuestion"];
const _c1 = ["passageAdd"];
const _c2 = ["skillInput"];
const _c3 = () => ["20", "55"];
const _c4 = a0 => ({ $implicit: a0 });
const _c5 = a0 => ({ "selectColor": a0 });
const _c6 = a0 => ({ "div-disable": a0 });
const _c7 = (a0, a1) => ({ "correct-answer-selected": a0, "correct-answer": a1 });
const _c8 = () => ({ standalone: true });
const _c9 = a0 => ({ "question-page-selected": a0 });
const _c10 = a0 => ({ "error-chip": a0 });
function QuestionPageComponent_div_2_textarea_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "textarea", 51);
} }
function QuestionPageComponent_div_2_div_39_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 62)(1, "input", 63);
    i0.ɵɵlistener("change", function QuestionPageComponent_div_2_div_39_span_2_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r4); const i_r5 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getAddChoiceAnswer($event, i_r5, "multipleChoiceChoose")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const i_r5 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("name", "optradio ", i_r5, "");
    i0.ɵɵpropertyInterpolate1("id", "optradio ", i_r5, "");
    i0.ɵɵproperty("checked", ctx_r1.multipleChoice["controls"].addMultipleChoice["controls"][i_r5]["controls"]["active"].value);
} }
function QuestionPageComponent_div_2_div_39_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 64)(1, "input", 65);
    i0.ɵɵlistener("change", function QuestionPageComponent_div_2_div_39_span_3_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r6); const i_r5 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getAddChoiceAnswer($event, i_r5, "multipleChoiceChoose")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const i_r5 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("name", "optradio1 ", i_r5, "");
    i0.ɵɵpropertyInterpolate1("id", "optradio1 ", i_r5, "");
    i0.ɵɵproperty("checked", ctx_r1.multipleChoice["controls"].addMultipleChoice["controls"][i_r5]["controls"]["active"].value);
} }
function QuestionPageComponent_div_2_div_39_app_tiny_mice_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-tiny-mice", 66);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_2_div_39_app_tiny_mice_6_Template_app_tiny_mice_emitEditorValue_0_listener($event) { i0.ɵɵrestoreView(_r7); const i_r5 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getOptionValue($event, ctx_r1.questionId, "option", i_r5)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r5 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData.options[i_r5] == null ? null : ctx_r1.questionEditData.options[i_r5].options)("height", 150)("id", "multiOption" + i_r5);
} }
function QuestionPageComponent_div_2_div_39_input_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 67);
} if (rf & 2) {
    const i_r5 = i0.ɵɵnextContext().index;
    i0.ɵɵpropertyInterpolate1("placeholder", "Option ", i_r5 + 1, " *");
} }
function QuestionPageComponent_div_2_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52)(1, "div", 53);
    i0.ɵɵtemplate(2, QuestionPageComponent_div_2_div_39_span_2_Template, 2, 5, "span", 54)(3, QuestionPageComponent_div_2_div_39_span_3_Template, 2, 5, "span", 55);
    i0.ɵɵelementStart(4, "span", 56);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, QuestionPageComponent_div_2_div_39_app_tiny_mice_6_Template, 1, 3, "app-tiny-mice", 57)(7, QuestionPageComponent_div_2_div_39_input_7_Template, 1, 2, "input", 58);
    i0.ɵɵelementStart(8, "div", 59);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_2_div_39_Template_div_click_8_listener() { const i_r5 = i0.ɵɵrestoreView(_r3).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleted("deleteMultiple", i_r5)); });
    i0.ɵɵelementStart(9, "span", 60);
    i0.ɵɵelement(10, "img", 61);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", i_r5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.multipleChoice.controls.multiResponse.value);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.multipleChoice.controls.multiResponse.value);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("for", "optradio1", i_r5, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", (i_r5 + 1 + 9).toString(36).toUpperCase(), ".");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputType == "math");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputType == "text");
} }
function QuestionPageComponent_div_2_ng_container_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QuestionPageComponent_div_2_div_50_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69)(1, "span", 70);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 71);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c5, ctx_r1.multipleChoice["controls"].addMultipleChoice["controls"][i_r8]["controls"]["active"].value == 1));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((i_r8 + 1 + 9).toString(36).toUpperCase());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.multipleChoice.get("addMultipleChoice")["controls"][i_r8]["controls"]["option"].value);
} }
function QuestionPageComponent_div_2_div_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵtemplate(1, QuestionPageComponent_div_2_div_50_div_1_Template, 5, 5, "div", 68);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.multipleChoice.get("addMultipleChoice")["controls"]);
} }
function QuestionPageComponent_div_2_div_51_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 76);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const i_r9 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, ctx_r1.multipleChoice.get("addMultipleChoice")["controls"][i_r9]["controls"]["option"].value), i0.ɵɵsanitizeHtml);
} }
function QuestionPageComponent_div_2_div_51_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 73)(1, "div", 74)(2, "span", 70);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, QuestionPageComponent_div_2_div_51_div_1_span_4_Template, 2, 3, "span", 75);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c5, ctx_r1.multipleChoice["controls"].addMultipleChoice["controls"][i_r9]["controls"]["active"].value == 1));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((i_r9 + 1 + 9).toString(36).toUpperCase());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.optionArray.length != 0);
} }
function QuestionPageComponent_div_2_div_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtemplate(1, QuestionPageComponent_div_2_div_51_div_1_Template, 5, 5, "div", 72);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.multipleChoice.get("addMultipleChoice")["controls"]);
} }
function QuestionPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 10)(2, "div", 21)(3, "h3", 22);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "hr", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 23)(7, "form", 24)(8, "div", 25)(9, "div", 10)(10, "div", 26)(11, "div", 27)(12, "div", 28)(13, "h5", 29);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "h5", 30);
    i0.ɵɵtext(16, "Question");
    i0.ɵɵelementStart(17, "span", 31);
    i0.ɵɵtext(18, "\u00A0*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "app-tiny-mice", 32);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_2_Template_app_tiny_mice_emitEditorValue_19_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getEditorMultipleChoice($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(20, QuestionPageComponent_div_2_textarea_20_Template, 1, 0, "textarea", 33);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "div", 9)(22, "div", 10)(23, "div", 34)(24, "h5", 30);
    i0.ɵɵtext(25, "Multiple Choice Options");
    i0.ɵɵelementStart(26, "span", 31);
    i0.ɵɵtext(27, "\u00A0*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "div", 35)(29, "div", 36)(30, "input", 37);
    i0.ɵɵlistener("change", function QuestionPageComponent_div_2_Template_input_change_30_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.multipleResponse("multipleChoiceCheck", $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "label", 38);
    i0.ɵɵtext(32, "Multiple Responses");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(33, "input", 39);
    i0.ɵɵelementStart(34, "label", 40);
    i0.ɵɵtext(35, "Auto Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "input", 41);
    i0.ɵɵlistener("change", function QuestionPageComponent_div_2_Template_input_change_36_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectedEditorType($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "label", 42);
    i0.ɵɵtext(38, "Math Editor");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(39, QuestionPageComponent_div_2_div_39_Template, 11, 8, "div", 43);
    i0.ɵɵelementStart(40, "div", 21)(41, "button", 44);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_2_Template_button_click_41_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addChoice("addMultipleChoice")); });
    i0.ɵɵelement(42, "i", 45);
    i0.ɵɵtext(43, " Add New Choice");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(44, QuestionPageComponent_div_2_ng_container_44_Template, 1, 0, "ng-container", 46);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "div", 47)(46, "div", 9)(47, "div", 10);
    i0.ɵɵelement(48, "div", 48);
    i0.ɵɵpipe(49, "sanitizeHtml");
    i0.ɵɵtemplate(50, QuestionPageComponent_div_2_div_50_Template, 2, 1, "div", 49)(51, QuestionPageComponent_div_2_div_51_Template, 2, 1, "div", 50);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const settings_r10 = i0.ɵɵreference(27);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Multiple Choice > ", ctx_r1.questionId == "1" ? "Multiple Choice-Standard" : "Multi Selection", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r1.multipleChoice);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.qnsNo);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("height", 450)("readonly", ctx_r1.selectOptionHeader != "edit")("showDropBtn", false)("showInputBtn", false)("id", "multiQues")("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData.question);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.editorType == false);
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("disabled", ctx_r1.selectOptionHeader != "edit")("checked", ctx_r1.inputType == "math" || ctx_r1.type != "add" && ctx_r1.questionEditData.editor_type != 1);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.multipleChoice.get("addMultipleChoice")["controls"]);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngTemplateOutlet", settings_r10)("ngTemplateOutletContext", i0.ɵɵpureFunction1(22, _c4, ctx_r1.multipleChoice));
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "preview");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(49, 20, ctx_r1.questionValue), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.inputType == "text");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputType == "math");
} }
function QuestionPageComponent_div_3_div_36_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 99);
} if (rf & 2) {
    const i_r13 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate1("placeholder", "Option ", i_r13 + 1, " *");
    i0.ɵɵproperty("readonly", ctx_r1.selectOptionHeader != "edit");
} }
function QuestionPageComponent_div_3_div_36_app_tiny_mice_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-tiny-mice", 100);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_3_div_36_app_tiny_mice_3_Template_app_tiny_mice_emitEditorValue_0_listener($event) { i0.ɵɵrestoreView(_r14); const i_r13 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getOptionValue($event, ctx_r1.questionId, "option", i_r13)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r13 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData.options[i_r13] == null ? null : ctx_r1.questionEditData.options[i_r13].options)("height", 150)("id", "optionChoose" + i_r13)("readonly", ctx_r1.selectOptionHeader != "edit");
} }
function QuestionPageComponent_div_3_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52)(1, "div", 94);
    i0.ɵɵtemplate(2, QuestionPageComponent_div_3_div_36_input_2_Template, 1, 3, "input", 95)(3, QuestionPageComponent_div_3_div_36_app_tiny_mice_3_Template, 1, 4, "app-tiny-mice", 96);
    i0.ɵɵelementStart(4, "div", 97);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_3_div_36_Template_div_click_4_listener() { const i_r13 = i0.ɵɵrestoreView(_r12).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleted("deleteMatchTable", i_r13)); });
    i0.ɵɵelementStart(5, "span", 60);
    i0.ɵɵelement(6, "img", 98);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", i_r13);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputType == "text");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputType == "math");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c6, ctx_r1.selectOptionHeader != "edit"));
} }
function QuestionPageComponent_div_3_div_48_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 99);
} if (rf & 2) {
    const i_r16 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate1("placeholder", "Stems ", i_r16 + 1, "");
    i0.ɵɵproperty("readonly", ctx_r1.selectOptionHeader != "edit");
} }
function QuestionPageComponent_div_3_div_48_app_tiny_mice_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-tiny-mice", 100);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_3_div_48_app_tiny_mice_3_Template_app_tiny_mice_emitEditorValue_0_listener($event) { i0.ɵɵrestoreView(_r17); const i_r16 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getOptionValue($event, ctx_r1.questionId, "chooseType", i_r16)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r16 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.answer[i_r16])("height", 150)("id", "typeChoose" + i_r16)("readonly", ctx_r1.selectOptionHeader != "edit");
} }
function QuestionPageComponent_div_3_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 101)(1, "div", 94);
    i0.ɵɵtemplate(2, QuestionPageComponent_div_3_div_48_input_2_Template, 1, 3, "input", 95)(3, QuestionPageComponent_div_3_div_48_app_tiny_mice_3_Template, 1, 4, "app-tiny-mice", 96);
    i0.ɵɵelementStart(4, "div", 97);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_3_div_48_Template_div_click_4_listener() { const i_r16 = i0.ɵɵrestoreView(_r15).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleted("deleteMatchTableChoose", i_r16)); });
    i0.ɵɵelementStart(5, "span", 60);
    i0.ɵɵelement(6, "img", 98);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const i_r16 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", i_r16);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputType == "text");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputType == "math");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c6, ctx_r1.selectOptionHeader != "edit"));
} }
function QuestionPageComponent_div_3_tr_61_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 103);
} if (rf & 2) {
    const i_r18 = ctx.index;
    i0.ɵɵpropertyInterpolate("id", "columnId" + i_r18);
} }
function QuestionPageComponent_div_3_tr_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "th");
    i0.ɵɵtemplate(2, QuestionPageComponent_div_3_tr_61_th_2_Template, 1, 1, "th", 102);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.matchTable.get("addMatchTableChoose")["controls"]);
} }
function QuestionPageComponent_div_3_tr_62_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r19 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.matchTable.get("addMatchTableChoose")["controls"][i_r19]["controls"]["option"].value);
} }
function QuestionPageComponent_div_3_tr_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "th");
    i0.ɵɵtemplate(2, QuestionPageComponent_div_3_tr_62_th_2_Template, 2, 1, "th", 90);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.matchTable.get("addMatchTableChoose")["controls"]);
} }
function QuestionPageComponent_div_3_tr_64_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 103);
} if (rf & 2) {
    const j_r20 = i0.ɵɵnextContext().index;
    i0.ɵɵpropertyInterpolate("id", "myId" + j_r20);
} }
function QuestionPageComponent_div_3_tr_64_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r20 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.matchTable.get("addMultipleChoice")["controls"][j_r20]["controls"]["option"].value);
} }
function QuestionPageComponent_div_3_tr_64_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 107);
    i0.ɵɵlistener("change", function QuestionPageComponent_div_3_tr_64_td_3_input_1_Template_input_change_0_listener() { i0.ɵɵrestoreView(_r21); const i_r22 = i0.ɵɵnextContext().index; const j_r20 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getAddChoiceAnswer(i_r22, j_r20, "matchTableChooseSingle")); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r22 = i0.ɵɵnextContext().index;
    const j_r20 = i0.ɵɵnextContext().index;
    i0.ɵɵpropertyInterpolate1("name", "choose", j_r20, "");
    i0.ɵɵpropertyInterpolate2("id", "", j_r20, "chooseSingle", i_r22, "");
} }
function QuestionPageComponent_div_3_tr_64_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 108);
    i0.ɵɵlistener("change", function QuestionPageComponent_div_3_tr_64_td_3_input_2_Template_input_change_0_listener() { i0.ɵɵrestoreView(_r23); const i_r22 = i0.ɵɵnextContext().index; const j_r20 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getAddChoiceAnswer(i_r22, j_r20, "matchTableChooseMultiple")); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r22 = i0.ɵɵnextContext().index;
    const j_r20 = i0.ɵɵnextContext().index;
    i0.ɵɵpropertyInterpolate2("id", "", j_r20, "chooseMulti", i_r22, "");
} }
function QuestionPageComponent_div_3_tr_64_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, QuestionPageComponent_div_3_tr_64_td_3_input_1_Template, 1, 5, "input", 105)(2, QuestionPageComponent_div_3_tr_64_td_3_input_2_Template, 1, 3, "input", 106);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.questionId == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.questionId == "7");
} }
function QuestionPageComponent_div_3_tr_64_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, QuestionPageComponent_div_3_tr_64_td_1_Template, 1, 1, "td", 104)(2, QuestionPageComponent_div_3_tr_64_td_2_Template, 2, 1, "td", 7)(3, QuestionPageComponent_div_3_tr_64_td_3_Template, 3, 2, "td", 90);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputType == "math");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputType == "text");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.matchTable.get("addMatchTableChoose")["controls"]);
} }
function QuestionPageComponent_div_3_ng_container_65_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QuestionPageComponent_div_3_tr_74_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 110);
} if (rf & 2) {
    const i_r24 = ctx.index;
    i0.ɵɵpropertyInterpolate("id", "columnIdd" + i_r24);
} }
function QuestionPageComponent_div_3_tr_74_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th");
    i0.ɵɵtext(2, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, QuestionPageComponent_div_3_tr_74_th_3_Template, 1, 1, "th", 109);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.chooseArray);
} }
function QuestionPageComponent_div_3_tr_75_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r25 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.matchTable.get("addMatchTableChoose")["controls"][i_r25]["controls"]["option"].value);
} }
function QuestionPageComponent_div_3_tr_75_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th");
    i0.ɵɵtext(2, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, QuestionPageComponent_div_3_tr_75_th_3_Template, 2, 1, "th", 90);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.matchTable.get("addMatchTableChoose")["controls"]);
} }
function QuestionPageComponent_div_3_tr_77_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 110);
} if (rf & 2) {
    const j_r26 = i0.ɵɵnextContext().index;
    i0.ɵɵpropertyInterpolate("id", "myIdd" + j_r26);
} }
function QuestionPageComponent_div_3_tr_77_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r26 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.matchTable.get("addMultipleChoice")["controls"][j_r26]["controls"]["option"].value);
} }
function QuestionPageComponent_div_3_tr_77_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 114);
} if (rf & 2) {
    const j_r26 = i0.ɵɵnextContext(2).index;
    i0.ɵɵpropertyInterpolate1("name", "choose", j_r26, "");
} }
function QuestionPageComponent_div_3_tr_77_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 115);
} }
function QuestionPageComponent_div_3_tr_77_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, QuestionPageComponent_div_3_tr_77_td_3_input_1_Template, 1, 2, "input", 112)(2, QuestionPageComponent_div_3_tr_77_td_3_input_2_Template, 1, 0, "input", 113);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.questionId == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.questionId == "7");
} }
function QuestionPageComponent_div_3_tr_77_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, QuestionPageComponent_div_3_tr_77_td_1_Template, 1, 1, "td", 111)(2, QuestionPageComponent_div_3_tr_77_td_2_Template, 2, 1, "td", 7)(3, QuestionPageComponent_div_3_tr_77_td_3_Template, 3, 2, "td", 90);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputType == "math");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputType == "text");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.matchTable.get("addMatchTableChoose")["controls"]);
} }
function QuestionPageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 21)(2, "h3", 22);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "hr", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 23)(6, "form", 24)(7, "div", 25)(8, "div", 10)(9, "div", 26)(10, "div", 27)(11, "div", 28)(12, "h5", 29);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "h5", 30);
    i0.ɵɵtext(15, "Question");
    i0.ɵɵelementStart(16, "span", 31);
    i0.ɵɵtext(17, "\u00A0*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "app-tiny-mice", 32);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_3_Template_app_tiny_mice_emitEditorValue_18_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getEditorMultipleChoice($event)); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(19, "div", 9)(20, "div", 10)(21, "div", 77)(22, "div", 10)(23, "div", 34)(24, "h5", 30);
    i0.ɵɵtext(25, "Multiple Choice Options");
    i0.ɵɵelementStart(26, "span", 31);
    i0.ɵɵtext(27, "\u00A0*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "div", 35)(29, "div", 36);
    i0.ɵɵelement(30, "input", 78);
    i0.ɵɵelementStart(31, "label", 79);
    i0.ɵɵtext(32, "Auto Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "input", 80);
    i0.ɵɵlistener("change", function QuestionPageComponent_div_3_Template_input_change_33_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectedEditorType($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "label", 81);
    i0.ɵɵtext(35, "Math Editor");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(36, QuestionPageComponent_div_3_div_36_Template, 7, 6, "div", 43);
    i0.ɵɵelementStart(37, "div", 21)(38, "button", 44);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_3_Template_button_click_38_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addChoice("addMatchTable")); });
    i0.ɵɵelement(39, "i", 45);
    i0.ɵɵtext(40, " Add New Choice");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(41, "div", 82)(42, "h5", 83);
    i0.ɵɵtext(43, "Stems");
    i0.ɵɵelementStart(44, "span", 31);
    i0.ɵɵtext(45, "*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(46, "div", 26)(47, "div", 10);
    i0.ɵɵtemplate(48, QuestionPageComponent_div_3_div_48_Template, 7, 6, "div", 84);
    i0.ɵɵelementStart(49, "div", 21)(50, "button", 85);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_3_Template_button_click_50_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addChoice("matchTableChoose")); });
    i0.ɵɵelement(51, "i", 86);
    i0.ɵɵtext(52, " Add New Choice");
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(53, "div", 87)(54, "div", 10)(55, "div", 82)(56, "h5", 83);
    i0.ɵɵtext(57, "Set Correct Answer(s)");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "div", 88)(59, "table", 89)(60, "thead");
    i0.ɵɵtemplate(61, QuestionPageComponent_div_3_tr_61_Template, 3, 1, "tr", 7)(62, QuestionPageComponent_div_3_tr_62_Template, 3, 1, "tr", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "tbody");
    i0.ɵɵtemplate(64, QuestionPageComponent_div_3_tr_64_Template, 4, 3, "tr", 90);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(65, QuestionPageComponent_div_3_ng_container_65_Template, 1, 0, "ng-container", 46);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(66, "div", 91)(67, "div", 9)(68, "div", 10);
    i0.ɵɵelement(69, "div", 48);
    i0.ɵɵpipe(70, "sanitizeHtml");
    i0.ɵɵelementStart(71, "div", 92)(72, "table", 93)(73, "thead");
    i0.ɵɵtemplate(74, QuestionPageComponent_div_3_tr_74_Template, 4, 1, "tr", 7)(75, QuestionPageComponent_div_3_tr_75_Template, 4, 1, "tr", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "tbody");
    i0.ɵɵtemplate(77, QuestionPageComponent_div_3_tr_77_Template, 4, 3, "tr", 90);
    i0.ɵɵelementEnd()()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const settings_r10 = i0.ɵɵreference(27);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Multiple Choice > Match Table-", ctx_r1.questionId == "5" ? "Standard" : "Labels", "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r1.matchTable);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.qnsNo);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("height", 450)("readonly", ctx_r1.selectOptionHeader != "edit")("showDropBtn", false)("showInputBtn", false)("id", "questionChoose")("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData.question);
    i0.ɵɵadvance(15);
    i0.ɵɵproperty("disabled", ctx_r1.selectOptionHeader != "edit")("checked", ctx_r1.inputType == "math" || ctx_r1.type != "add" && ctx_r1.questionEditData.editor_type != 1);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.matchTable.get("addMultipleChoice")["controls"]);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngForOf", ctx_r1.matchTable.get("addMatchTableChoose")["controls"]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(28, _c6, ctx_r1.selectOptionHeader != "edit"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.inputType == "math");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputType == "text");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.matchTable.get("addMultipleChoice")["controls"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", settings_r10)("ngTemplateOutletContext", i0.ɵɵpureFunction1(30, _c4, ctx_r1.matchTable));
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "preview");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(70, 26, ctx_r1.questionValue), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.inputType == "math");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputType == "text");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.matchTable.get("addMultipleChoice")["controls"]);
} }
function QuestionPageComponent_div_4_textarea_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "textarea", 51);
} }
function QuestionPageComponent_div_4_div_21_div_10_div_1_div_7_input_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 143);
} }
function QuestionPageComponent_div_4_div_21_div_10_div_1_div_7_app_tiny_mice_7_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-tiny-mice", 144);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_4_div_21_div_10_div_1_div_7_app_tiny_mice_7_Template_app_tiny_mice_emitEditorValue_0_listener($event) { i0.ɵɵrestoreView(_r29); const j_r30 = i0.ɵɵnextContext().index; const ctx_r30 = i0.ɵɵnextContext(2); const list_r32 = ctx_r30.$implicit; const i_r33 = ctx_r30.index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.patchEditor(list_r32.controls.options, j_r30, i_r33, $event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r30 = i0.ɵɵnextContext().index;
    const i_r33 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("showDropBtn", false)("showInputBtn", false)("height", 150)("id", j_r30 + "dropy" + i_r33)("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData.options[i_r33] == null ? null : ctx_r1.questionEditData.options[i_r33].options[j_r30] == null ? null : ctx_r1.questionEditData.options[i_r33].options[j_r30].listOption);
} }
function QuestionPageComponent_div_4_div_21_div_10_div_1_div_7_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 145)(1, "i", 146);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_4_div_21_div_10_div_1_div_7_div_9_Template_i_click_1_listener() { i0.ɵɵrestoreView(_r34); const j_r30 = i0.ɵɵnextContext().index; const ctx_r30 = i0.ɵɵnextContext(2); const list_r32 = ctx_r30.$implicit; const i_r33 = ctx_r30.index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.submitInput(list_r32.controls.options, j_r30, i_r33)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const j_r30 = i0.ɵɵnextContext().index;
    const i_r33 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c7, ctx_r1.fillDropDown["controls"].addDropDownOption["controls"][i_r33]["controls"].options["controls"][j_r30]["controls"].selected.value == "true", ctx_r1.fillDropDown["controls"].addDropDownOption["controls"][i_r33]["controls"].options["controls"][j_r30]["controls"].selected.value == "false"));
} }
function QuestionPageComponent_div_4_div_21_div_10_div_1_div_7_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 145)(1, "i", 147);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_4_div_21_div_10_div_1_div_7_div_10_Template_i_click_1_listener() { i0.ɵɵrestoreView(_r35); const j_r30 = i0.ɵɵnextContext().index; const list_r32 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.deleteDropDownFormArr(list_r32.controls.options, j_r30)); });
    i0.ɵɵelementEnd()();
} }
function QuestionPageComponent_div_4_div_21_div_10_div_1_div_7_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 145)(1, "i", 148);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_4_div_21_div_10_div_1_div_7_div_11_Template_i_click_1_listener() { i0.ɵɵrestoreView(_r36); const list_r32 = i0.ɵɵnextContext(3).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.addDropDownFormArr(list_r32.controls.options)); });
    i0.ɵɵelementEnd()();
} }
function QuestionPageComponent_div_4_div_21_div_10_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 135)(1, "div", 136)(2, "div", 137)(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 138);
    i0.ɵɵtemplate(6, QuestionPageComponent_div_4_div_21_div_10_div_1_div_7_input_6_Template, 1, 0, "input", 139)(7, QuestionPageComponent_div_4_div_21_div_10_div_1_div_7_app_tiny_mice_7_Template, 1, 5, "app-tiny-mice", 140);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 141);
    i0.ɵɵtemplate(9, QuestionPageComponent_div_4_div_21_div_10_div_1_div_7_div_9_Template, 2, 4, "div", 142)(10, QuestionPageComponent_div_4_div_21_div_10_div_1_div_7_div_10_Template, 2, 0, "div", 142)(11, QuestionPageComponent_div_4_div_21_div_10_div_1_div_7_div_11_Template, 2, 0, "div", 142);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const j_r30 = ctx.index;
    const i_r33 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", j_r30);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Option - ", j_r30 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.showTextEditor == "eng");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showTextEditor != "eng");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.fillDropDown["controls"].addDropDownOption["controls"][i_r33]["controls"].options);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", j_r30 != 0 && ctx_r1.selectOptionHeader == "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", j_r30 == 0 && ctx_r1.selectOptionHeader == "edit");
} }
function QuestionPageComponent_div_4_div_21_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 133)(1, "div", 10)(2, "div")(3, "h5", 83);
    i0.ɵɵtext(4);
    i0.ɵɵelementStart(5, "span", 31);
    i0.ɵɵtext(6, "*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(7, QuestionPageComponent_div_4_div_21_div_10_div_1_div_7_Template, 12, 7, "div", 134);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext();
    const list_r32 = ctx_r30.$implicit;
    const i_r33 = ctx_r30.index;
    i0.ɵɵproperty("formGroupName", i_r33);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("col-12 mt-", i_r33 == 0 ? "0" : "3", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Drop Down ", i_r33 + 1, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", list_r32.get("options")["controls"]);
} }
function QuestionPageComponent_div_4_div_21_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 131);
    i0.ɵɵtemplate(1, QuestionPageComponent_div_4_div_21_div_10_div_1_Template, 8, 6, "div", 132);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r32 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r32.get("options")["controls"]);
} }
function QuestionPageComponent_div_4_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 124)(1, "div", 9)(2, "div", 125)(3, "div", 36);
    i0.ɵɵelement(4, "input", 126);
    i0.ɵɵelementStart(5, "label", 127);
    i0.ɵɵtext(6, "Auto Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 128);
    i0.ɵɵlistener("change", function QuestionPageComponent_div_4_div_21_Template_input_change_7_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectedEditorType($event, "showTextEditor")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "label", 129);
    i0.ɵɵtext(9, "Math Editor");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(10, QuestionPageComponent_div_4_div_21_div_10_Template, 2, 1, "div", 130);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("disabled", ctx_r1.selectOptionHeader != "edit")("checked", ctx_r1.showTextEditor == "math" || ctx_r1.type != "add" && ctx_r1.questionEditData.editor_type != 1);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.fillDropDown.get("addDropDownOption")["controls"]);
} }
function QuestionPageComponent_div_4_div_28_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 156);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const option_r37 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, option_r37.listOption), i0.ɵɵsanitizeHtml);
} }
function QuestionPageComponent_div_4_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 149)(1, "div", 150)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 151);
    i0.ɵɵelement(5, "div", 152);
    i0.ɵɵelementStart(6, "div", 153)(7, "span", 154);
    i0.ɵɵtext(8, "Select Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, QuestionPageComponent_div_4_div_28_span_9_Template, 2, 3, "span", 155);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    const i_r39 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i_r39 + 1, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("id", "dropdownPre", i_r39, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", item_r38.options);
} }
function QuestionPageComponent_div_4_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QuestionPageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 21)(2, "h3", 22);
    i0.ɵɵtext(3, "Multiple Choice > Text Drop Down");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "hr", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 21)(6, "form", 24)(7, "div", 116)(8, "div", 10)(9, "div", 21)(10, "div", 27)(11, "div", 28)(12, "h5", 29);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "h5", 30);
    i0.ɵɵtext(15, "Question");
    i0.ɵɵelementStart(16, "span", 31);
    i0.ɵɵtext(17, "\u00A0*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "app-tiny-mice", 117);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_4_Template_app_tiny_mice_emitEditorValue_18_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getEditorContextValue($event, ctx_r1.questionId, "question")); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(19, QuestionPageComponent_div_4_textarea_19_Template, 1, 0, "textarea", 33);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "div", 118);
    i0.ɵɵtemplate(21, QuestionPageComponent_div_4_div_21_Template, 11, 3, "div", 119);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 116)(23, "div", 10)(24, "div", 120);
    i0.ɵɵelement(25, "h4", 121);
    i0.ɵɵpipe(26, "sanitizeHtml");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 122);
    i0.ɵɵlistener("keypress", function QuestionPageComponent_div_4_Template_div_keypress_27_listener($event) { i0.ɵɵrestoreView(_r27); return i0.ɵɵresetView($event.preventDefault()); });
    i0.ɵɵtemplate(28, QuestionPageComponent_div_4_div_28_Template, 10, 4, "div", 123);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(29, QuestionPageComponent_div_4_ng_container_29_Template, 1, 0, "ng-container", 46);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const settings_r10 = i0.ɵɵreference(27);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r1.fillDropDown);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.qnsNo);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("height", 450)("showDropBtn", true)("showInputBtn", false)("id", "myEditor-q1")("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData.question);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.editorType == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showForm);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader == "edit");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(26, 16, ctx_r1.dropValue), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.fillDropDown["controls"].addDropDownOption.value);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", settings_r10)("ngTemplateOutletContext", i0.ɵɵpureFunction1(18, _c4, ctx_r1.fillDropDown));
} }
function QuestionPageComponent_div_5_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 161)(1, "button", 162);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_5_div_21_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r41); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.saveQuestions("textEntry", "")); });
    i0.ɵɵtext(2, "Text Input");
    i0.ɵɵelementEnd()();
} }
function QuestionPageComponent_div_5_div_24_div_17_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 175);
    i0.ɵɵtwoWayListener("ngModelChange", function QuestionPageComponent_div_5_div_24_div_17_input_5_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r43); const data_r44 = i0.ɵɵnextContext().$implicit; i0.ɵɵtwoWayBindingSet(data_r44.options[0].value, $event) || (data_r44.options[0].value = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r44 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtwoWayProperty("ngModel", data_r44.options[0].value);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(2, _c8));
} }
function QuestionPageComponent_div_5_div_24_div_17_app_tiny_mice_6_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-tiny-mice", 158);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_5_div_24_div_17_app_tiny_mice_6_Template_app_tiny_mice_emitEditorValue_0_listener($event) { i0.ɵɵrestoreView(_r45); const data_r44 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.getEditorValue1($event, data_r44)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const data_r44 = ctx_r45.$implicit;
    const i_r47 = ctx_r45.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type == "add" ? false : data_r44.options[0].value)("height", 150)("id", i_r47 + "inputEnter")("showDropBtn", false)("showInputBtn", false);
} }
function QuestionPageComponent_div_5_div_24_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 170)(1, "div", 150)(2, "span", 171);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 172);
    i0.ɵɵtemplate(5, QuestionPageComponent_div_5_div_24_div_17_input_5_Template, 1, 3, "input", 173)(6, QuestionPageComponent_div_5_div_24_div_17_app_tiny_mice_6_Template, 1, 5, "app-tiny-mice", 174);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const i_r47 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i_r47 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.showTextEditor == "eng");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showTextEditor != "eng");
} }
function QuestionPageComponent_div_5_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 9)(2, "div", 10)(3, "div", 163)(4, "h5", 83);
    i0.ɵɵtext(5, "Input Field");
    i0.ɵɵelementStart(6, "span", 31);
    i0.ɵɵtext(7, "*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 164)(9, "div", 36);
    i0.ɵɵelement(10, "input", 165);
    i0.ɵɵelementStart(11, "label", 166);
    i0.ɵɵtext(12, "Auto Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "input", 167);
    i0.ɵɵlistener("change", function QuestionPageComponent_div_5_div_24_Template_input_change_13_listener($event) { i0.ɵɵrestoreView(_r42); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectedEditorType($event, "showTextEditor")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "label", 168);
    i0.ɵɵtext(15, "Math Editor");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 21);
    i0.ɵɵtemplate(17, QuestionPageComponent_div_5_div_24_div_17_Template, 7, 3, "div", 169);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("disabled", ctx_r1.selectOptionHeader != "edit")("checked", ctx_r1.showTextEditor == "math" || ctx_r1.type != "add" && ctx_r1.questionEditData.editor_type != 1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.inputArray);
} }
function QuestionPageComponent_div_5_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QuestionPageComponent_div_5_div_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 149)(1, "div", 150)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 172);
    i0.ɵɵelement(5, "h4", 176);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r48 = ctx.$implicit;
    const i_r49 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i_r49 + 1, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", ctx_r1.transform(data_r48.options[0].value), i0.ɵɵsanitizeHtml)("id", "text-input" + i_r49);
} }
function QuestionPageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 21)(2, "h3", 22);
    i0.ɵɵtext(3, "Multiple Choice > Text Entry");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "hr", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 21)(6, "form", 24)(7, "div", 118)(8, "div", 21)(9, "div", 9)(10, "div", 10)(11, "div", 21)(12, "div", 27)(13, "div", 28)(14, "h5", 29);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "h5", 30);
    i0.ɵɵtext(17, "Question");
    i0.ɵɵelementStart(18, "span", 31);
    i0.ɵɵtext(19, "\u00A0*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "div", 10);
    i0.ɵɵtemplate(21, QuestionPageComponent_div_5_div_21_Template, 3, 0, "div", 157);
    i0.ɵɵelementStart(22, "div", 21)(23, "app-tiny-mice", 158);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_5_Template_app_tiny_mice_emitEditorValue_23_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getEditorValue($event)); });
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵtemplate(24, QuestionPageComponent_div_5_div_24_Template, 18, 3, "div", 50);
    i0.ɵɵelementStart(25, "div", 21);
    i0.ɵɵtemplate(26, QuestionPageComponent_div_5_ng_container_26_Template, 1, 0, "ng-container", 46);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 116)(28, "div", 10)(29, "div", 120);
    i0.ɵɵelement(30, "h4", 121);
    i0.ɵɵpipe(31, "sanitizeHtml");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "div", 159);
    i0.ɵɵlistener("keypress", function QuestionPageComponent_div_5_Template_div_keypress_32_listener($event) { i0.ɵɵrestoreView(_r40); return i0.ɵɵresetView($event.preventDefault()); });
    i0.ɵɵelementStart(33, "div", 160);
    i0.ɵɵtemplate(34, QuestionPageComponent_div_5_div_34_Template, 6, 3, "div", 123);
    i0.ɵɵelementEnd()()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const settings_r10 = i0.ɵɵreference(27);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r1.textEntry);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.qnsNo);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r1.textbutton == true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData.question)("height", 450)("id", "myEditor")("showDropBtn", false)("showInputBtn", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputCount != 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", settings_r10)("ngTemplateOutletContext", i0.ɵɵpureFunction1(17, _c4, ctx_r1.fillDropDown));
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader == "edit");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(31, 15, ctx_r1.textValue), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.inputArray);
} }
function QuestionPageComponent_div_6_div_48_app_tiny_mice_5_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-tiny-mice", 100);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_6_div_48_app_tiny_mice_5_Template_app_tiny_mice_emitEditorValue_0_listener($event) { i0.ɵɵrestoreView(_r52); const i_r53 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getMatchSortValue($event, i_r53, "math")); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r53 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData.options[i_r53].options)("height", 150)("id", "matchSortDrop" + i_r53)("readonly", ctx_r1.selectOptionHeader != "edit");
} }
function QuestionPageComponent_div_6_div_48_input_6_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 197);
    i0.ɵɵlistener("keyup", function QuestionPageComponent_div_6_div_48_input_6_Template_input_keyup_0_listener($event) { i0.ɵɵrestoreView(_r54); const i_r53 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getMatchSortValue($event, i_r53, "text")); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r53 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate1("placeholder", "Item ", i_r53 + 1, "*");
    i0.ɵɵproperty("readonly", ctx_r1.selectOptionHeader != "edit");
} }
function QuestionPageComponent_div_6_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52)(1, "div", 191)(2, "div", 192)(3, "span", 60);
    i0.ɵɵelement(4, "img", 193);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, QuestionPageComponent_div_6_div_48_app_tiny_mice_5_Template, 1, 4, "app-tiny-mice", 96)(6, QuestionPageComponent_div_6_div_48_input_6_Template, 1, 3, "input", 194);
    i0.ɵɵelementStart(7, "div", 195)(8, "span", 60)(9, "img", 196);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_6_div_48_Template_img_click_9_listener() { const i_r53 = i0.ɵɵrestoreView(_r51).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleted("deleteSort", i_r53)); });
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const i_r53 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", i_r53);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.inputType == "math");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputType == "text");
} }
function QuestionPageComponent_div_6_div_55_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 202);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r55 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r55["controls"]["selectOption"].value), i0.ɵɵsanitizeHtml);
} }
function QuestionPageComponent_div_6_div_55_h4_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "h4", 203);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r55 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r55["controls"]["selectOption"].value), i0.ɵɵsanitizeHtml);
} }
function QuestionPageComponent_div_6_div_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 198)(1, "div", 199)(2, "div", 192)(3, "span", 60);
    i0.ɵɵelement(4, "img", 193);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, QuestionPageComponent_div_6_div_55_div_5_Template, 2, 3, "div", 200)(6, QuestionPageComponent_div_6_div_55_h4_6_Template, 2, 3, "h4", 201);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const i_r56 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", i_r56);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.inputType != "text");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputType == "text");
} }
function QuestionPageComponent_div_6_ng_container_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QuestionPageComponent_div_6_div_69_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 202);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r57 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r57.value), i0.ɵɵsanitizeHtml);
} }
function QuestionPageComponent_div_6_div_69_h4_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "h4", 203);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r57 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r57.value), i0.ɵɵsanitizeHtml);
} }
function QuestionPageComponent_div_6_div_69_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 204)(1, "div", 205)(2, "div", 192)(3, "span", 60);
    i0.ɵɵelement(4, "img", 193);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, QuestionPageComponent_div_6_div_69_div_5_Template, 2, 3, "div", 200)(6, QuestionPageComponent_div_6_div_69_h4_6_Template, 2, 3, "h4", 201);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("cdkDragDisabled", true);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.inputType != "text");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputType == "text");
} }
function QuestionPageComponent_div_6_div_74_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 202);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r58 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r58["controls"]["selectOption"].value), i0.ɵɵsanitizeHtml);
} }
function QuestionPageComponent_div_6_div_74_h4_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "h4", 203);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r58 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r58["controls"]["selectOption"].value), i0.ɵɵsanitizeHtml);
} }
function QuestionPageComponent_div_6_div_74_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 204)(1, "div", 206)(2, "div", 192)(3, "span", 60);
    i0.ɵɵelement(4, "img", 207);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, QuestionPageComponent_div_6_div_74_div_5_Template, 2, 3, "div", 200)(6, QuestionPageComponent_div_6_div_74_h4_6_Template, 2, 3, "h4", 201);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.inputType != "text");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputType == "text");
} }
function QuestionPageComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 21)(2, "h3", 22);
    i0.ɵɵtext(3, "Match & Order > Sort List");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "hr", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 26)(6, "form", 24)(7, "div", 118)(8, "div", 21)(9, "div", 9)(10, "div", 10)(11, "div", 21)(12, "div", 27)(13, "div", 28)(14, "h5", 29);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "h5", 30);
    i0.ɵɵtext(17, "Question");
    i0.ɵɵelementStart(18, "span", 31);
    i0.ɵɵtext(19, "\u00A0*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "app-tiny-mice", 177);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_6_Template_app_tiny_mice_emitEditorValue_20_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getEditorMatchSort($event)); });
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(21, "div", 21)(22, "div", 9)(23, "div", 10)(24, "div", 163)(25, "h5", 30);
    i0.ɵɵtext(26, "Labels");
    i0.ɵɵelementStart(27, "span", 31);
    i0.ɵɵtext(28, "*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(29, "div", 164)(30, "div", 36);
    i0.ɵɵelement(31, "input", 178);
    i0.ɵɵelementStart(32, "label", 179);
    i0.ɵɵtext(33, "Auto Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "input", 180);
    i0.ɵɵlistener("change", function QuestionPageComponent_div_6_Template_input_change_34_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectedEditorType($event, "showTextEditor")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "label", 181);
    i0.ɵɵtext(36, "Math Editor");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(37, "div", 182);
    i0.ɵɵelement(38, "input", 183);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "div", 182);
    i0.ɵɵelement(40, "input", 184);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "div", 185)(42, "h5", 83);
    i0.ɵɵtext(43, "List");
    i0.ɵɵelementStart(44, "span", 31);
    i0.ɵɵtext(45, "*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(46, "div", 186);
    i0.ɵɵlistener("cdkDropListDropped", function QuestionPageComponent_div_6_Template_div_cdkDropListDropped_46_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.dropped($event)); });
    i0.ɵɵelementStart(47, "div", 10);
    i0.ɵɵtemplate(48, QuestionPageComponent_div_6_div_48_Template, 10, 3, "div", 43);
    i0.ɵɵelementStart(49, "div", 21)(50, "button", 85);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_6_Template_button_click_50_listener() { i0.ɵɵrestoreView(_r50); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addChoice("addMultipleSort")); });
    i0.ɵɵelement(51, "i", 45);
    i0.ɵɵtext(52, " Add New Choice");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(53, "div", 186);
    i0.ɵɵlistener("cdkDropListDropped", function QuestionPageComponent_div_6_Template_div_cdkDropListDropped_53_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.droppedCorrect($event)); });
    i0.ɵɵelementStart(54, "div", 10);
    i0.ɵɵtemplate(55, QuestionPageComponent_div_6_div_55_Template, 7, 3, "div", 187);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(56, "div", 21);
    i0.ɵɵtemplate(57, QuestionPageComponent_div_6_ng_container_57_Template, 1, 0, "ng-container", 46);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "div", 116)(59, "div", 10)(60, "div", 21)(61, "div", 188);
    i0.ɵɵelement(62, "div", 48);
    i0.ɵɵpipe(63, "sanitizeHtml");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "div", 188)(65, "div", 189)(66, "h4");
    i0.ɵɵtext(67);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "div", 10);
    i0.ɵɵtemplate(69, QuestionPageComponent_div_6_div_69_Template, 7, 3, "div", 190);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(70, "div", 189)(71, "h4");
    i0.ɵɵtext(72);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(73, "div", 10);
    i0.ɵɵtemplate(74, QuestionPageComponent_div_6_div_74_Template, 7, 2, "div", 190);
    i0.ɵɵelementEnd()()()()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const settings_r10 = i0.ɵɵreference(27);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r1.matchSort);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.qnsNo);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData.question)("height", 450)("id", "matchShortQuestionId")("readonly", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("disabled", ctx_r1.selectOptionHeader != "edit")("checked", ctx_r1.showTextEditor == "math" || ctx_r1.type != "add" && ctx_r1.questionEditData.editor_type != 1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("readonly", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("readonly", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r1.matchSort.get("addMultipleChoice")["controls"]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.matchSort.get("addMultipleChoose")["controls"]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", settings_r10)("ngTemplateOutletContext", i0.ɵɵpureFunction1(24, _c4, ctx_r1.matchSort));
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "sortpreview");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(63, 22, ctx_r1.questionValue), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.matchSort.controls.source.value);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.sourceArr);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.matchSort.controls.target.value);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.matchSort.get("addMultipleChoose")["controls"]);
} }
function QuestionPageComponent_div_7_app_tiny_mice_21_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-tiny-mice", 216);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_7_app_tiny_mice_21_Template_app_tiny_mice_emitEditorValue_0_listener($event) { i0.ɵɵrestoreView(_r59); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getEditorContextValue($event, ctx_r1.questionId, "editorContext")); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData.question)("height", 450);
} }
function QuestionPageComponent_div_7_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 217)(1, "textarea", 218);
    i0.ɵɵtwoWayListener("ngModelChange", function QuestionPageComponent_div_7_div_22_Template_textarea_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.writingQuestionEditor, $event) || (ctx_r1.writingQuestionEditor = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 219)(3, "span", 171);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.questionId == "20" ? "Please enter your question" : "Please enter your Essay Prompt");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.writingQuestionEditor);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(4, _c8));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.wordCount("question"), "\u00A0Words");
} }
function QuestionPageComponent_div_7_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26)(1, "div", 220)(2, "h5", 30);
    i0.ɵɵtext(3, "Stimulus Articles");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 221);
    i0.ɵɵelement(5, "textarea", 222);
    i0.ɵɵelementEnd()()();
} }
function QuestionPageComponent_div_7_div_27_h5_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 30);
    i0.ɵɵtext(1, "Correct Answer");
    i0.ɵɵelementStart(2, "span", 31);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd()();
} }
function QuestionPageComponent_div_7_div_27_h5_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 30);
    i0.ɵɵtext(1, "Sample Essay");
    i0.ɵɵelementEnd();
} }
function QuestionPageComponent_div_7_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 223);
    i0.ɵɵtemplate(1, QuestionPageComponent_div_7_div_27_h5_1_Template, 4, 0, "h5", 224)(2, QuestionPageComponent_div_7_div_27_h5_2_Template, 2, 0, "h5", 224);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.questionId == "20");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.questionId == "55");
} }
function QuestionPageComponent_div_7_div_28_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r61 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 229);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_7_div_28_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r61); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.addNewCorrectAnswerForFreeText(ctx_r1.richText.get("repeatAnswerFreeText"))); });
    i0.ɵɵelement(1, "i", 230);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Add (", ctx_r1.richText.get("repeatAnswerFreeText")["controls"].length, " / ", ctx_r1.maximumAllowedCount, ")");
} }
function QuestionPageComponent_div_7_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 225)(1, "div", 36);
    i0.ɵɵelement(2, "input", 226);
    i0.ɵɵelementStart(3, "label", 227);
    i0.ɵɵtext(4, "Auto Grade");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, QuestionPageComponent_div_7_div_28_button_5_Template, 3, 2, "button", 228);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.questionId == "20" && ctx_r1.richText.get("repeatAnswerFreeText")["controls"].length < ctx_r1.maximumAllowedCount);
} }
function QuestionPageComponent_div_7_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 82);
    i0.ɵɵelement(1, "h4", 121);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, ctx_r1.richPreviewValue), i0.ɵɵsanitizeHtml);
} }
function QuestionPageComponent_div_7_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 231)(1, "textarea", 232);
    i0.ɵɵtwoWayListener("ngModelChange", function QuestionPageComponent_div_7_div_30_Template_textarea_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.writingQuestionEditor, $event) || (ctx_r1.writingQuestionEditor = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 219)(3, "span", 171);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.writingQuestionEditor);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(3, _c8));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.wordCount("question"), "\u00A0Words");
} }
function QuestionPageComponent_div_7_div_32_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 238)(1, "div", 239);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_7_div_32_div_1_div_7_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r65); const i_r64 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.deleteCorrectAnswerForFreeText(ctx_r1.richText.get("repeatAnswerFreeText"), i_r64, ctx_r1.richText.get("repeatAnswerFreeText")["controls"].length - i_r64)); });
    i0.ɵɵelement(2, "img", 240);
    i0.ɵɵelementEnd()();
} }
function QuestionPageComponent_div_7_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 234)(1, "div", 235)(2, "div", 236)(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 5)(6, "app-tiny-mice", 216);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_7_div_32_div_1_Template_app_tiny_mice_emitEditorValue_6_listener($event) { const i_r64 = i0.ɵɵrestoreView(_r63).index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.multiAnswerFreeText($event, i_r64, ctx_r1.richText.get("repeatAnswerFreeText")["controls"].length - i_r64)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, QuestionPageComponent_div_7_div_32_div_1_div_7_Template, 3, 0, "div", 237);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_13_0;
    const last_r66 = ctx.last;
    const i_r64 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", i_r64);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.richText.get("repeatAnswerFreeText")["controls"].length - i_r64);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", !last_r66 && ctx_r1.richText.get("repeatAnswerFreeText")["controls"].length > 1 ? "w-93 px-2" : "w-96 pl-2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type == "add" ? false : (tmp_13_0 = (tmp_13_0 = ctx_r1.questionEditData.answer[ctx_r1.richText.get("repeatAnswerFreeText")["controls"].length - i_r64 - 1]) == null ? null : tmp_13_0.correctAnswer) !== null && tmp_13_0 !== undefined ? tmp_13_0 : "")("height", 150);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !last_r66 && ctx_r1.richText.get("repeatAnswerFreeText")["controls"].length > 1);
} }
function QuestionPageComponent_div_7_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, QuestionPageComponent_div_7_div_32_div_1_Template, 8, 6, "div", 233);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.richText.get("repeatAnswerFreeText")["controls"]);
} }
function QuestionPageComponent_div_7_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 217)(1, "textarea", 241);
    i0.ɵɵtwoWayListener("ngModelChange", function QuestionPageComponent_div_7_div_33_Template_textarea_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r67); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.writingAnswerEditor, $event) || (ctx_r1.writingAnswerEditor = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 219)(3, "span", 171);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.writingAnswerEditor);
    i0.ɵɵproperty("readOnly", ctx_r1.selectOptionHeader != "edit")("ngModelOptions", i0.ɵɵpureFunction0(4, _c8));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.wordCount(), "\u00A0Words");
} }
function QuestionPageComponent_div_7_div_34_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QuestionPageComponent_div_7_div_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtemplate(1, QuestionPageComponent_div_7_div_34_ng_container_1_Template, 1, 0, "ng-container", 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    const settings_r10 = i0.ɵɵreference(27);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", settings_r10)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c4, ctx_r1.richText));
} }
function QuestionPageComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 21)(2, "h3", 22);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "hr", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 21)(6, "form", 24)(7, "div", 10)(8, "div", 23)(9, "div", 9)(10, "div", 10)(11, "div", 21)(12, "div", 27)(13, "div", 28)(14, "h5", 29);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "h5", 208)(17, "b");
    i0.ɵɵtext(18);
    i0.ɵɵelementStart(19, "span", 31);
    i0.ɵɵtext(20, "*");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(21, QuestionPageComponent_div_7_app_tiny_mice_21_Template, 1, 2, "app-tiny-mice", 209)(22, QuestionPageComponent_div_7_div_22_Template, 5, 5, "div", 210);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(23, QuestionPageComponent_div_7_div_23_Template, 6, 0, "div", 49);
    i0.ɵɵelementStart(24, "div", 21)(25, "div", 211)(26, "div", 10);
    i0.ɵɵtemplate(27, QuestionPageComponent_div_7_div_27_Template, 3, 2, "div", 212)(28, QuestionPageComponent_div_7_div_28_Template, 6, 1, "div", 213)(29, QuestionPageComponent_div_7_div_29_Template, 3, 3, "div", 214)(30, QuestionPageComponent_div_7_div_30_Template, 5, 4, "div", 215);
    i0.ɵɵelementStart(31, "div");
    i0.ɵɵtemplate(32, QuestionPageComponent_div_7_div_32_Template, 2, 1, "div", 8)(33, QuestionPageComponent_div_7_div_33_Template, 5, 5, "div", 210);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(34, QuestionPageComponent_div_7_div_34_Template, 2, 4, "div", 50);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.questionId == "20" ? "Free Text / Math" : "Essay Writing");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("formGroup", ctx_r1.richText);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.qnsNo);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.questionId == "20" ? "Question" : "Essay Prompt");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.questionId == "20");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.questionId != "20");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectOptionHeader == "edit" && ctx_r1.questionId == "55");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.selectOptionHeader == "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectOptionHeader == "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectOptionHeader != "edit" && ctx_r1.questionId == "20");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectOptionHeader != "edit" && ctx_r1.questionId == "55");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-12 ", ctx_r1.selectOptionHeader == "edit" ? "" : ctx_r1.questionId == "20" ? "div-disable mt-2" : "mt-2", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.questionId == "20");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.questionId == "55");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectOptionHeader == "edit");
} }
function QuestionPageComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r68 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 21)(2, "h3", 22);
    i0.ɵɵtext(3, "Writing > Essay with Plain Text");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "hr", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 21)(6, "form", 24)(7, "div", 118)(8, "div", 21)(9, "div", 9)(10, "div", 10)(11, "div", 21)(12, "div", 27)(13, "div", 28)(14, "h5", 29);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "h5", 30);
    i0.ɵɵtext(17, "Question");
    i0.ɵɵelementStart(18, "span", 31);
    i0.ɵɵtext(19, "\u00A0*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "app-tiny-mice", 242);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_8_Template_app_tiny_mice_emitEditorValue_20_listener($event) { i0.ɵɵrestoreView(_r68); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getEditorContextValue($event, ctx_r1.questionId, "editorContext")); });
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(21, "div", 21)(22, "div", 9)(23, "div", 243)(24, "div", 244)(25, "h5");
    i0.ɵɵtext(26, "Settings");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 245)(28, "label")(29, "b");
    i0.ɵɵtext(30, "Level");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "select", 246)(32, "option", 247);
    i0.ɵɵtext(33, "Easy");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "option", 248);
    i0.ɵɵtext(35, "Medium");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "option", 249);
    i0.ɵɵtext(37, "Difficult");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(38, "div", 245)(39, "label", 250)(40, "b");
    i0.ɵɵtext(41, "Points");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "input", 251);
    i0.ɵɵlistener("keypress", function QuestionPageComponent_div_8_Template_input_keypress_42_listener($event) { i0.ɵɵrestoreView(_r68); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(43, "div", 21)(44, "div", 9)(45, "div", 10)(46, "div", 21)(47, "h5");
    i0.ɵɵtext(48, "Correct Answer");
    i0.ɵɵelementStart(49, "span", 31);
    i0.ɵɵtext(50, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(51, "app-tiny-mice", 242);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_8_Template_app_tiny_mice_emitEditorValue_51_listener($event) { i0.ɵɵrestoreView(_r68); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getEditorContextValue($event, ctx_r1.questionId, "answer")); });
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(52, "div", 116)(53, "div", 10)(54, "div", 21);
    i0.ɵɵelement(55, "h4", 121);
    i0.ɵɵpipe(56, "sanitizeHtml");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "div", 252);
    i0.ɵɵelement(58, "app-tiny-mice", 253);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r1.plainText);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.qnsNo);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("height", 450)("editorPatchValue", false);
    i0.ɵɵadvance(31);
    i0.ɵɵproperty("height", 150)("editorPatchValue", false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader == "edit");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(56, 10, ctx_r1.plainPreviewValue), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("height", 150);
} }
function QuestionPageComponent_div_9_div_68_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r70 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 59);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_9_div_68_div_3_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r70); const i_r71 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleted("deletePlainHint", i_r71)); });
    i0.ɵɵelementStart(1, "span", 60);
    i0.ɵɵelement(2, "img", 98);
    i0.ɵɵelementEnd()();
} }
function QuestionPageComponent_div_9_div_68_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 259)(1, "div", 260);
    i0.ɵɵelement(2, "input", 261);
    i0.ɵɵtemplate(3, QuestionPageComponent_div_9_div_68_div_3_Template, 3, 0, "div", 262);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const i_r71 = ctx.index;
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", i_r71);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", i_r71 != "0");
} }
function QuestionPageComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r69 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 21)(2, "h3", 22);
    i0.ɵɵtext(3, "Writing > Essay with Short Text");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "hr", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 21)(6, "form", 24)(7, "div", 118)(8, "div", 21)(9, "div", 9)(10, "div", 10)(11, "div", 21)(12, "div", 27)(13, "div", 28)(14, "h5", 29);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "h5", 30);
    i0.ɵɵtext(17, "Question");
    i0.ɵɵelementStart(18, "span", 31);
    i0.ɵɵtext(19, "\u00A0*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "app-tiny-mice", 242);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_9_Template_app_tiny_mice_emitEditorValue_20_listener($event) { i0.ɵɵrestoreView(_r69); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getEditorContextValue($event, ctx_r1.questionId, "editorContext")); });
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(21, "div", 21)(22, "div", 9)(23, "div", 10)(24, "div", 82)(25, "h5");
    i0.ɵɵtext(26, "Settings");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 245)(28, "label")(29, "b");
    i0.ɵɵtext(30, "Level");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "select", 246)(32, "option", 247);
    i0.ɵɵtext(33, "Easy");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "option", 248);
    i0.ɵɵtext(35, "Medium");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "option", 249);
    i0.ɵɵtext(37, "Difficult");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(38, "div", 245)(39, "label", 250)(40, "b");
    i0.ɵɵtext(41, "Points");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "input", 251);
    i0.ɵɵlistener("keypress", function QuestionPageComponent_div_9_Template_input_keypress_42_listener($event) { i0.ɵɵrestoreView(_r69); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(43, "div", 21)(44, "div", 9)(45, "div", 10)(46, "div", 21)(47, "h5");
    i0.ɵɵtext(48, "Correct Answer");
    i0.ɵɵelementStart(49, "span", 31);
    i0.ɵɵtext(50, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(51, "app-tiny-mice", 242);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_9_Template_app_tiny_mice_emitEditorValue_51_listener($event) { i0.ɵɵrestoreView(_r69); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getEditorContextValue($event, ctx_r1.questionId, "answer")); });
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(52, "div", 21)(53, "div", 9)(54, "div", 10)(55, "div", 254)(56, "div")(57, "p");
    i0.ɵɵtext(58, "Explanation");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(59, "div");
    i0.ɵɵelement(60, "input", 255);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(61, "div", 254)(62, "div", 256)(63, "div", 257)(64, "h5");
    i0.ɵɵtext(65, "Hints");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(66, "div", 257);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "div", 10);
    i0.ɵɵtemplate(68, QuestionPageComponent_div_9_div_68_Template, 4, 2, "div", 258);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(69, "div", 116)(70, "div", 10)(71, "div", 120);
    i0.ɵɵelement(72, "h4", 121);
    i0.ɵɵpipe(73, "sanitizeHtml");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(74, "div", 252);
    i0.ɵɵelement(75, "app-tiny-mice", 253);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r1.shortText);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.qnsNo);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("height", 450)("editorPatchValue", false);
    i0.ɵɵadvance(31);
    i0.ɵɵproperty("height", 150)("editorPatchValue", false);
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("ngForOf", ctx_r1.shortText.get("addHints")["controls"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader == "edit");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(73, 11, ctx_r1.shortPreviewValue), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("height", 300);
} }
function QuestionPageComponent_div_10_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 267)(1, "h5", 29);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.qnsNo);
} }
function QuestionPageComponent_div_10_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 267)(1, "h5", 29);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.qnsNo);
} }
function QuestionPageComponent_div_10_div_10_div_3_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 275);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r75 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", data_r75 == null ? null : data_r75.passage_id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(data_r75 == null ? null : data_r75.title);
} }
function QuestionPageComponent_div_10_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r74 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 271)(1, "h5", 83);
    i0.ɵɵtext(2, "Select Passage");
    i0.ɵɵelementStart(3, "span", 31);
    i0.ɵɵtext(4, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "select", 272);
    i0.ɵɵlistener("change", function QuestionPageComponent_div_10_div_10_div_3_Template_select_change_5_listener($event) { i0.ɵɵrestoreView(_r74); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.passageSelect($event)); });
    i0.ɵɵelementStart(6, "option", 273);
    i0.ɵɵtext(7, "Select Passage");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, QuestionPageComponent_div_10_div_10_div_3_option_8_Template, 2, 2, "option", 274);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r1.listPassageDetails);
} }
function QuestionPageComponent_div_10_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 82)(1, "div");
    i0.ɵɵtemplate(2, QuestionPageComponent_div_10_div_10_div_2_Template, 3, 1, "div", 263)(3, QuestionPageComponent_div_10_div_10_div_3_Template, 9, 1, "div", 268);
    i0.ɵɵelementStart(4, "div", 269)(5, "button", 270);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_10_div_10_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r73); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addOrEditPassage("add")); });
    i0.ɵɵelement(6, "i", 230);
    i0.ɵɵtext(7, "Add Passage");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("row d-flex ", ctx_r1.type == "add" ? "justify-content-between" : "justify-content-between", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type != "add");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "add");
} }
function QuestionPageComponent_div_10_div_17_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r76 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 278);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_10_div_17_img_1_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r76); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.editPassageContent = !ctx_r1.editPassageContent; return i0.ɵɵresetView(ctx_r1.addOrEditPassage("edit")); });
    i0.ɵɵelementEnd();
} }
function QuestionPageComponent_div_10_div_17_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r77 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 279);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_10_div_17_img_2_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r77); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.passageCREDService("edit"); return i0.ɵɵresetView(ctx_r1.editPassageContent = !ctx_r1.editPassageContent); });
    i0.ɵɵelementEnd();
} }
function QuestionPageComponent_div_10_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, QuestionPageComponent_div_10_div_17_img_1_Template, 1, 0, "img", 276)(2, QuestionPageComponent_div_10_div_17_img_2_Template, 1, 0, "img", 277);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.editPassageContent);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.editPassageContent);
} }
function QuestionPageComponent_div_10_div_20_div_21_div_28_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r83 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 62)(1, "input", 63);
    i0.ɵɵlistener("change", function QuestionPageComponent_div_10_div_20_div_21_div_28_span_2_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r83); const j_r84 = i0.ɵɵnextContext().index; const i_r81 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getChoiceAnswerPassage($event, i_r81, j_r84, "multipleChoiceChoose")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r85 = i0.ɵɵnextContext().$implicit;
    const i_r81 = i0.ɵɵnextContext(2).index;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("name", "optradio ", i_r81, "");
    i0.ɵɵpropertyInterpolate1("id", "optradio ", i_r81, "");
    i0.ɵɵproperty("checked", item_r85["controls"]["active"].value == 1);
} }
function QuestionPageComponent_div_10_div_20_div_21_div_28_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r86 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 316)(1, "input", 65);
    i0.ɵɵlistener("change", function QuestionPageComponent_div_10_div_20_div_21_div_28_span_3_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r86); const j_r84 = i0.ɵɵnextContext().index; const i_r81 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getChoiceAnswerPassage($event, i_r81, j_r84, "multipleChoiceChoose")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r85 = i0.ɵɵnextContext().$implicit;
    const i_r81 = i0.ɵɵnextContext(2).index;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("name", "optradio1 ", i_r81, "");
    i0.ɵɵpropertyInterpolate1("id", "optradio1 ", i_r81, "");
    i0.ɵɵproperty("checked", item_r85["controls"]["active"].value == 1);
} }
function QuestionPageComponent_div_10_div_20_div_21_div_28_app_tiny_mice_6_Template(rf, ctx) { if (rf & 1) {
    const _r87 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-tiny-mice", 317);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_10_div_20_div_21_div_28_app_tiny_mice_6_Template_app_tiny_mice_emitEditorValue_0_listener($event) { i0.ɵɵrestoreView(_r87); const j_r84 = i0.ɵɵnextContext().index; const ctx_r78 = i0.ɵɵnextContext(2); const list_r80 = ctx_r78.$implicit; const i_r81 = ctx_r78.index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getPassageOptionValue($event, ctx_r1.questionId, "multiOption", j_r84, i_r81, list_r80.controls.addMultipleChoice)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r84 = i0.ɵɵnextContext().index;
    const i_r81 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("height", 150)("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].options[j_r84] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].options[j_r84].options)("id", i_r81 + "s" + j_r84 + "editor" + ctx_r1.random);
} }
function QuestionPageComponent_div_10_div_20_div_21_div_28_input_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 99);
} if (rf & 2) {
    const j_r84 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate1("placeholder", "Option ", j_r84 + 1, " *");
    i0.ɵɵproperty("readonly", ctx_r1.selectOptionHeader != "edit");
} }
function QuestionPageComponent_div_10_div_20_div_21_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r82 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 311)(1, "div", 94);
    i0.ɵɵtemplate(2, QuestionPageComponent_div_10_div_20_div_21_div_28_span_2_Template, 2, 5, "span", 54)(3, QuestionPageComponent_div_10_div_20_div_21_div_28_span_3_Template, 2, 5, "span", 312);
    i0.ɵɵelementStart(4, "span", 313);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, QuestionPageComponent_div_10_div_20_div_21_div_28_app_tiny_mice_6_Template, 1, 3, "app-tiny-mice", 314)(7, QuestionPageComponent_div_10_div_20_div_21_div_28_input_7_Template, 1, 3, "input", 95);
    i0.ɵɵelementStart(8, "div", 59);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_10_div_20_div_21_div_28_Template_div_click_8_listener() { const j_r84 = i0.ɵɵrestoreView(_r82).index; const i_r81 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteChoicePassage("deletePassageChoice", i_r81, j_r84)); });
    i0.ɵɵelementStart(9, "span", 315);
    i0.ɵɵelement(10, "img", 98);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const j_r84 = ctx.index;
    const i_r81 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", j_r84);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].multiResponse.value);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].multiResponse.value);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("for", "optradio1 ", j_r84, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", (j_r84 + 1 + 9).toString(36).toUpperCase(), ".");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].chooseType.value == "math");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].chooseType.value == "text");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c6, ctx_r1.selectOptionHeader != "edit"));
} }
function QuestionPageComponent_div_10_div_20_div_21_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QuestionPageComponent_div_10_div_20_div_21_div_49_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r90 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 59);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_10_div_20_div_21_div_49_div_3_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r90); const j_r89 = i0.ɵɵnextContext().index; const i_r81 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteChoicePassage("deletePassageHints", i_r81, j_r89)); });
    i0.ɵɵelementStart(1, "span", 60);
    i0.ɵɵelement(2, "img", 319);
    i0.ɵɵelementEnd()();
} }
function QuestionPageComponent_div_10_div_20_div_21_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r88 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 318)(1, "div", 260)(2, "app-tiny-mice", 100);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_10_div_20_div_21_div_49_Template_app_tiny_mice_emitEditorValue_2_listener($event) { const j_r89 = i0.ɵɵrestoreView(_r88).index; const i_r81 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getPassageHintEditor($event, i_r81, j_r89)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, QuestionPageComponent_div_10_div_20_div_21_div_49_div_3_Template, 3, 0, "div", 262);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const j_r89 = ctx.index;
    const i_r81 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", j_r89);
    i0.ɵɵadvance();
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type != "edit" || (ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].hint[j_r89] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].hint[j_r89].hint) ? ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].hint[j_r89] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].hint[j_r89].hint : false)("height", 450)("id", "multiHintChoice" + i_r81 + j_r89)("readonly", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", j_r89 != "0");
} }
function QuestionPageComponent_div_10_div_20_div_21_div_54_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 322)(1, "span", 70);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 323);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r91 = ctx.$implicit;
    const j_r92 = ctx.index;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c9, item_r91["controls"]["active"].value == 1));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c5, item_r91["controls"]["active"].value == 1));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((j_r92 + 1 + 9).toString(36).toUpperCase());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r91["controls"]["option"].value);
} }
function QuestionPageComponent_div_10_div_20_div_21_div_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 320);
    i0.ɵɵtemplate(1, QuestionPageComponent_div_10_div_20_div_21_div_54_div_1_Template, 5, 8, "div", 321);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r80 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r80.get("addMultipleChoice")["controls"]);
} }
function QuestionPageComponent_div_10_div_20_div_21_div_55_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 325)(1, "span", 70);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 326);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r93 = ctx.$implicit;
    const j_r94 = ctx.index;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c5, item_r93["controls"]["active"].value == 1));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((j_r94 + 1 + 9).toString(36).toUpperCase());
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 3, item_r93["controls"]["option"].value), i0.ɵɵsanitizeHtml);
} }
function QuestionPageComponent_div_10_div_20_div_21_div_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 320);
    i0.ɵɵtemplate(1, QuestionPageComponent_div_10_div_20_div_21_div_55_div_1_Template, 5, 7, "div", 324);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r80 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r80.get("addMultipleChoice")["controls"]);
} }
function QuestionPageComponent_div_10_div_20_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r78 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 292)(2, "div", 9)(3, "div", 10)(4, "div", 21)(5, "h5", 83);
    i0.ɵɵtext(6, "Question");
    i0.ɵɵelementStart(7, "span", 31);
    i0.ɵɵtext(8, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "app-tiny-mice", 293);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_10_div_20_div_21_Template_app_tiny_mice_emitEditorValue_9_listener($event) { i0.ɵɵrestoreView(_r78); const ctx_r78 = i0.ɵɵnextContext(); const list_r80 = ctx_r78.$implicit; const i_r81 = ctx_r78.index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getPassageOptionValue($event, ctx_r1.questionId, "question", 0, i_r81, list_r80)); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 9)(11, "div", 10)(12, "div", 34)(13, "h5", 30);
    i0.ɵɵtext(14, "Multiple Choice Options");
    i0.ɵɵelementStart(15, "span", 31);
    i0.ɵɵtext(16, "\u00A0*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "div", 35)(18, "div", 36)(19, "input", 294);
    i0.ɵɵlistener("change", function QuestionPageComponent_div_10_div_20_div_21_Template_input_change_19_listener($event) { i0.ɵɵrestoreView(_r78); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.multipleResponse("passageMultipleChoice", $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "label", 295);
    i0.ɵɵtext(21, "Multiple Responses");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(22, "input", 296);
    i0.ɵɵelementStart(23, "label", 297);
    i0.ɵɵtext(24, "Auto Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "input", 298);
    i0.ɵɵlistener("change", function QuestionPageComponent_div_10_div_20_div_21_Template_input_change_25_listener($event) { i0.ɵɵrestoreView(_r78); const i_r81 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectedEditorType($event, "passageEditor", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81])); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "label", 299);
    i0.ɵɵtext(27, "Math Editor");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(28, QuestionPageComponent_div_10_div_20_div_21_div_28_Template, 11, 11, "div", 300);
    i0.ɵɵelementStart(29, "div", 21)(30, "button", 85);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_10_div_20_div_21_Template_button_click_30_listener() { i0.ɵɵrestoreView(_r78); const i_r81 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addChoicePassage("passageAddChoice", i_r81)); });
    i0.ɵɵelement(31, "i", 45);
    i0.ɵɵtext(32, " Add New Choice");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(33, QuestionPageComponent_div_10_div_20_div_21_ng_container_33_Template, 1, 0, "ng-container", 46);
    i0.ɵɵelementStart(34, "div", 9)(35, "div", 10)(36, "div", 301)(37, "h5", 83);
    i0.ɵɵtext(38, "Explanation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "app-tiny-mice", 32);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_10_div_20_div_21_Template_app_tiny_mice_emitEditorValue_39_listener($event) { i0.ɵɵrestoreView(_r78); const i_r81 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getPassageExplanationEditor($event, i_r81)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "div", 302)(41, "div", 10)(42, "div", 303)(43, "h5", 304);
    i0.ɵɵtext(44, "Hints");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "div", 305)(46, "button", 306);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_10_div_20_div_21_Template_button_click_46_listener() { i0.ɵɵrestoreView(_r78); const i_r81 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addChoicePassage("passageAddHint", i_r81)); });
    i0.ɵɵelement(47, "i", 45);
    i0.ɵɵtext(48, " Add New Hint");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(49, QuestionPageComponent_div_10_div_20_div_21_div_49_Template, 4, 7, "div", 307);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(50, "div", 116)(51, "div", 308);
    i0.ɵɵelement(52, "h4", 309);
    i0.ɵɵpipe(53, "sanitizeHtml");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(54, QuestionPageComponent_div_10_div_20_div_21_div_54_Template, 2, 1, "div", 310)(55, QuestionPageComponent_div_10_div_20_div_21_div_55_Template, 2, 1, "div", 310);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r78 = i0.ɵɵnextContext();
    const list_r80 = ctx_r78.$implicit;
    const i_r81 = ctx_r78.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    const settings_r10 = i0.ɵɵreference(27);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].question)("height", 450)("readonly", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("disabled", ctx_r1.selectOptionHeader != "edit")("checked", ctx_r1.type != "add" && (ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].editor_type) == 3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", list_r80.get("addMultipleChoice")["controls"]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", settings_r10)("ngTemplateOutletContext", i0.ɵɵpureFunction1(25, _c4, ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("height", 450)("readonly", ctx_r1.selectOptionHeader != "edit")("showDropBtn", false)("showInputBtn", false)("id", "passageexplaination" + i_r81)("editorPatchValue", ctx_r1.type != "edit" || (ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].explanation) ? ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].explanation : false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", list_r80.get("addHints")["controls"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader == "edit");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(53, 23, ctx_r1.questionArray[i_r81]), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].chooseType.value == "text");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].chooseType.value == "math");
} }
function QuestionPageComponent_div_10_div_20_div_22_div_35_app_tiny_mice_2_Template(rf, ctx) { if (rf & 1) {
    const _r97 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-tiny-mice", 344);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_10_div_20_div_22_div_35_app_tiny_mice_2_Template_app_tiny_mice_emitEditorValue_0_listener($event) { i0.ɵɵrestoreView(_r97); const j_r98 = i0.ɵɵnextContext().index; const ctx_r78 = i0.ɵɵnextContext(2); const list_r80 = ctx_r78.$implicit; const i_r81 = ctx_r78.index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getPassageOptionValue($event, ctx_r1.questionId, "chooseRow", j_r98, i_r81, list_r80.controls.addMultipleChoice)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r98 = i0.ɵɵnextContext().index;
    const i_r81 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].options[j_r98] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].options[j_r98].options)("height", 150);
} }
function QuestionPageComponent_div_10_div_20_div_22_div_35_input_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 67);
} if (rf & 2) {
    const j_r98 = i0.ɵɵnextContext().index;
    i0.ɵɵpropertyInterpolate1("placeholder", "Option ", j_r98 + 1, " * ");
} }
function QuestionPageComponent_div_10_div_20_div_22_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r96 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52)(1, "div", 94);
    i0.ɵɵtemplate(2, QuestionPageComponent_div_10_div_20_div_22_div_35_app_tiny_mice_2_Template, 1, 2, "app-tiny-mice", 343)(3, QuestionPageComponent_div_10_div_20_div_22_div_35_input_3_Template, 1, 2, "input", 58);
    i0.ɵɵelementStart(4, "div", 59);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_10_div_20_div_22_div_35_Template_div_click_4_listener() { const j_r98 = i0.ɵɵrestoreView(_r96).index; const i_r81 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteChoicePassage("deletePassageChoice", i_r81, j_r98)); });
    i0.ɵɵelementStart(5, "span", 315);
    i0.ɵɵelement(6, "img", 319);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const j_r98 = ctx.index;
    const i_r81 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", j_r98);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].chooseType.value == "math");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].chooseType.value == "text");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c6, ctx_r1.selectOptionHeader != "edit"));
} }
function QuestionPageComponent_div_10_div_20_div_22_div_49_app_tiny_mice_2_Template(rf, ctx) { if (rf & 1) {
    const _r100 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-tiny-mice", 347);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_10_div_20_div_22_div_49_app_tiny_mice_2_Template_app_tiny_mice_emitEditorValue_0_listener($event) { i0.ɵɵrestoreView(_r100); const j_r101 = i0.ɵɵnextContext().index; const ctx_r78 = i0.ɵɵnextContext(2); const list_r80 = ctx_r78.$implicit; const i_r81 = ctx_r78.index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getPassageOptionValue($event, ctx_r1.questionId, "chooseColumn", j_r101, i_r81, list_r80.controls.addMatchTableChoose)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r101 = i0.ɵɵnextContext().index;
    const i_r81 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].answer[j_r101])("height", 150)("readonly", ctx_r1.selectOptionHeader != "edit");
} }
function QuestionPageComponent_div_10_div_20_div_22_div_49_input_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 348);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("readonly", ctx_r1.selectOptionHeader != "edit");
} }
function QuestionPageComponent_div_10_div_20_div_22_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r99 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 101)(1, "div", 94);
    i0.ɵɵtemplate(2, QuestionPageComponent_div_10_div_20_div_22_div_49_app_tiny_mice_2_Template, 1, 3, "app-tiny-mice", 345)(3, QuestionPageComponent_div_10_div_20_div_22_div_49_input_3_Template, 1, 1, "input", 346);
    i0.ɵɵelementStart(4, "div", 59);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_10_div_20_div_22_div_49_Template_div_click_4_listener() { const j_r101 = i0.ɵɵrestoreView(_r99).index; const i_r81 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteChoicePassage("deletePassageMatch", i_r81, j_r101)); });
    i0.ɵɵelementStart(5, "span", 315);
    i0.ɵɵelement(6, "img", 319);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const j_r101 = ctx.index;
    const i_r81 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", j_r101);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].chooseType.value == "math");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].chooseType.value == "text");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c6, ctx_r1.selectOptionHeader != "edit"));
} }
function QuestionPageComponent_div_10_div_20_div_22_th_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 121);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const j_r102 = ctx.index;
    const i_r81 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].chooseType.value == "math" ? "innerhtml-margin-clear" : "");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 4, ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].addMatchTableChoose["controls"][j_r102]["controls"]["option"].value), i0.ɵɵsanitizeHtml);
} }
function QuestionPageComponent_div_10_div_20_div_22_tr_59_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r103 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 351);
    i0.ɵɵlistener("change", function QuestionPageComponent_div_10_div_20_div_22_tr_59_td_3_input_1_Template_input_change_0_listener() { i0.ɵɵrestoreView(_r103); const k_r104 = i0.ɵɵnextContext().index; const j_r105 = i0.ɵɵnextContext().index; const i_r81 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getChoiceAnswerPassage(j_r105, i_r81, k_r104, "matchTableChooseSingle")); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r104 = i0.ɵɵnextContext().index;
    const j_r105 = i0.ɵɵnextContext().index;
    const i_r81 = i0.ɵɵnextContext(2).index;
    i0.ɵɵpropertyInterpolate3("id", "", i_r81, "passage", j_r105, "chooseSingle", k_r104, "");
    i0.ɵɵpropertyInterpolate2("name", "", i_r81, "choose", j_r105, "pass");
} }
function QuestionPageComponent_div_10_div_20_div_22_tr_59_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r106 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 108);
    i0.ɵɵlistener("change", function QuestionPageComponent_div_10_div_20_div_22_tr_59_td_3_input_2_Template_input_change_0_listener() { i0.ɵɵrestoreView(_r106); const k_r104 = i0.ɵɵnextContext().index; const j_r105 = i0.ɵɵnextContext().index; const i_r81 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getChoiceAnswerPassage(j_r105, i_r81, k_r104, "matchTableChooseMulti")); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r104 = i0.ɵɵnextContext().index;
    const j_r105 = i0.ɵɵnextContext().index;
    const i_r81 = i0.ɵɵnextContext(2).index;
    i0.ɵɵpropertyInterpolate3("id", "", i_r81, "passage", j_r105, "chooseMulti", k_r104, "");
} }
function QuestionPageComponent_div_10_div_20_div_22_tr_59_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, QuestionPageComponent_div_10_div_20_div_22_tr_59_td_3_input_1_Template, 1, 7, "input", 349)(2, QuestionPageComponent_div_10_div_20_div_22_tr_59_td_3_input_2_Template, 1, 4, "input", 350);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r81 = i0.ɵɵnextContext(3).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].multiResponse.value == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].multiResponse.value == true);
} }
function QuestionPageComponent_div_10_div_20_div_22_tr_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 121);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, QuestionPageComponent_div_10_div_20_div_22_tr_59_td_3_Template, 3, 2, "td", 90);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r105 = ctx.index;
    const ctx_r78 = i0.ɵɵnextContext(2);
    const list_r80 = ctx_r78.$implicit;
    const i_r81 = ctx_r78.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].chooseType.value == "math" ? "innerhtml-margin-clear" : "");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 5, ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].addMultipleChoice["controls"][j_r105]["controls"]["option"].value), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", list_r80.get("addMatchTableChoose")["controls"]);
} }
function QuestionPageComponent_div_10_div_20_div_22_ng_container_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QuestionPageComponent_div_10_div_20_div_22_div_78_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r109 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 59);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_10_div_20_div_22_div_78_div_3_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r109); const j_r108 = i0.ɵɵnextContext().index; const i_r81 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteChoicePassage("deletePassageHints", i_r81, j_r108)); });
    i0.ɵɵelementStart(1, "span", 60);
    i0.ɵɵelement(2, "img", 61);
    i0.ɵɵelementEnd()();
} }
function QuestionPageComponent_div_10_div_20_div_22_div_78_Template(rf, ctx) { if (rf & 1) {
    const _r107 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 318)(1, "div", 352)(2, "app-tiny-mice", 353);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_10_div_20_div_22_div_78_Template_app_tiny_mice_emitEditorValue_2_listener($event) { const j_r108 = i0.ɵɵrestoreView(_r107).index; const i_r81 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getPassageHintEditor($event, i_r81, j_r108)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, QuestionPageComponent_div_10_div_20_div_22_div_78_div_3_Template, 3, 0, "div", 262);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const j_r108 = ctx.index;
    const i_r81 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", j_r108);
    i0.ɵɵadvance();
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type != "edit" || (ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].hint[j_r108] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].hint[j_r108].hint) ? ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].hint[j_r108] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].hint[j_r108].hint : false)("height", 150)("id", "multiHintChoice" + i_r81 + j_r108)("readonly", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", j_r108 != "0");
} }
function QuestionPageComponent_div_10_div_20_div_22_div_79_tr_8_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r110 = ctx.index;
    const i_r81 = i0.ɵɵnextContext(4).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].addMatchTableChoose["controls"][j_r110]["controls"]["option"].value, "");
} }
function QuestionPageComponent_div_10_div_20_div_22_div_79_tr_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th");
    i0.ɵɵtext(2, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, QuestionPageComponent_div_10_div_20_div_22_div_79_tr_8_th_3_Template, 2, 1, "th", 90);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r80 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", list_r80.get("addMatchTableChoose")["controls"]);
} }
function QuestionPageComponent_div_10_div_20_div_22_div_79_tr_9_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 121);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const j_r111 = ctx.index;
    const i_r81 = i0.ɵɵnextContext(4).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].addMatchTableChoose["controls"][j_r111]["controls"]["option"].value), i0.ɵɵsanitizeHtml);
} }
function QuestionPageComponent_div_10_div_20_div_22_div_79_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th");
    i0.ɵɵtext(2, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, QuestionPageComponent_div_10_div_20_div_22_div_79_tr_9_th_3_Template, 2, 3, "th", 356);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r80 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", list_r80.get("addMatchTableChoose")["controls"]);
} }
function QuestionPageComponent_div_10_div_20_div_22_div_79_tr_11_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r112 = i0.ɵɵnextContext().index;
    const i_r81 = i0.ɵɵnextContext(3).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].addMultipleChoice["controls"][j_r112]["controls"]["option"].value);
} }
function QuestionPageComponent_div_10_div_20_div_22_div_79_tr_11_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 121);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const j_r112 = i0.ɵɵnextContext().index;
    const i_r81 = i0.ɵɵnextContext(3).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].addMultipleChoice["controls"][j_r112]["controls"]["option"].value), i0.ɵɵsanitizeHtml);
} }
function QuestionPageComponent_div_10_div_20_div_22_div_79_tr_11_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 114);
} if (rf & 2) {
    const j_r112 = i0.ɵɵnextContext(2).index;
    i0.ɵɵpropertyInterpolate1("name", "choose", j_r112, "");
} }
function QuestionPageComponent_div_10_div_20_div_22_div_79_tr_11_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 115);
} }
function QuestionPageComponent_div_10_div_20_div_22_div_79_tr_11_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, QuestionPageComponent_div_10_div_20_div_22_div_79_tr_11_td_3_input_1_Template, 1, 2, "input", 112)(2, QuestionPageComponent_div_10_div_20_div_22_div_79_tr_11_td_3_input_2_Template, 1, 0, "input", 113);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r81 = i0.ɵɵnextContext(4).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].multiResponse.value == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].multiResponse.value == true);
} }
function QuestionPageComponent_div_10_div_20_div_22_div_79_tr_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, QuestionPageComponent_div_10_div_20_div_22_div_79_tr_11_td_1_Template, 2, 1, "td", 7)(2, QuestionPageComponent_div_10_div_20_div_22_div_79_tr_11_td_2_Template, 2, 3, "td", 357)(3, QuestionPageComponent_div_10_div_20_div_22_div_79_tr_11_td_3_Template, 3, 2, "td", 90);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r78 = i0.ɵɵnextContext(3);
    const list_r80 = ctx_r78.$implicit;
    const i_r81 = ctx_r78.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].chooseType.value == "text");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].chooseType.value == "math");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r80.get("addMatchTableChoose")["controls"]);
} }
function QuestionPageComponent_div_10_div_20_div_22_div_79_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 10)(2, "div", 308);
    i0.ɵɵelement(3, "h4", 309);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 354)(6, "table", 355)(7, "thead");
    i0.ɵɵtemplate(8, QuestionPageComponent_div_10_div_20_div_22_div_79_tr_8_Template, 4, 1, "tr", 7)(9, QuestionPageComponent_div_10_div_20_div_22_div_79_tr_9_Template, 4, 1, "tr", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "tbody");
    i0.ɵɵtemplate(11, QuestionPageComponent_div_10_div_20_div_22_div_79_tr_11_Template, 4, 3, "tr", 90);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r78 = i0.ɵɵnextContext(2);
    const list_r80 = ctx_r78.$implicit;
    const i_r81 = ctx_r78.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 4, ctx_r1.questionArray[i_r81]), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].chooseType.value == "text");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].chooseType.value == "math");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", list_r80.get("addMultipleChoice")["controls"]);
} }
function QuestionPageComponent_div_10_div_20_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r95 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 292)(2, "div", 9)(3, "div", 10)(4, "div", 21)(5, "h5", 83);
    i0.ɵɵtext(6, "Question");
    i0.ɵɵelementStart(7, "span", 31);
    i0.ɵɵtext(8, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "app-tiny-mice", 293);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_10_div_20_div_22_Template_app_tiny_mice_emitEditorValue_9_listener($event) { i0.ɵɵrestoreView(_r95); const ctx_r78 = i0.ɵɵnextContext(); const list_r80 = ctx_r78.$implicit; const i_r81 = ctx_r78.index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getPassageOptionValue($event, ctx_r1.questionId, "question", 0, i_r81, list_r80)); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 9)(11, "div", 10)(12, "div", 282)(13, "div", 10)(14, "div", 327)(15, "h5", 30);
    i0.ɵɵtext(16, "Multiple Choice Options");
    i0.ɵɵelementStart(17, "span", 31);
    i0.ɵɵtext(18, "\u00A0*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 328)(20, "div", 36)(21, "button", 329);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_10_div_20_div_22_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r95); const i_r81 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addChoicePassage("passageAddChoice", i_r81)); });
    i0.ɵɵelement(22, "i", 45);
    i0.ɵɵtext(23, " Add New Choice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "input", 330);
    i0.ɵɵlistener("change", function QuestionPageComponent_div_10_div_20_div_22_Template_input_change_24_listener($event) { i0.ɵɵrestoreView(_r95); const i_r81 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.multipleResponsePassage("matchTableCheck", $event, i_r81)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "label", 331);
    i0.ɵɵtext(26, "Multiple Responses");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(27, "input", 332);
    i0.ɵɵelementStart(28, "label", 38);
    i0.ɵɵtext(29, "Auto Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "input", 333);
    i0.ɵɵlistener("change", function QuestionPageComponent_div_10_div_20_div_22_Template_input_change_30_listener($event) { i0.ɵɵrestoreView(_r95); const i_r81 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectedEditorType($event, "passageEditor", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81])); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "label", 334);
    i0.ɵɵtext(32, "Math Editor");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(33, "div", 82)(34, "div", 10);
    i0.ɵɵtemplate(35, QuestionPageComponent_div_10_div_20_div_22_div_35_Template, 7, 6, "div", 43);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "div", 282)(37, "div", 10)(38, "div", 335)(39, "h5", 304);
    i0.ɵɵtext(40, "Stems");
    i0.ɵɵelementStart(41, "span", 31);
    i0.ɵɵtext(42, "*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(43, "div", 336)(44, "button", 337);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_10_div_20_div_22_Template_button_click_44_listener() { i0.ɵɵrestoreView(_r95); const i_r81 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addChoicePassage("passageAddTableChoose", i_r81)); });
    i0.ɵɵelement(45, "i", 45);
    i0.ɵɵtext(46, " Add New Choice");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(47, "div", 82)(48, "div", 10);
    i0.ɵɵtemplate(49, QuestionPageComponent_div_10_div_20_div_22_div_49_Template, 7, 6, "div", 84);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(50, "div", 9)(51, "div", 10)(52, "div", 88)(53, "table", 93)(54, "thead")(55, "tr");
    i0.ɵɵelement(56, "th");
    i0.ɵɵtemplate(57, QuestionPageComponent_div_10_div_20_div_22_th_57_Template, 2, 6, "th", 338);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "tbody");
    i0.ɵɵtemplate(59, QuestionPageComponent_div_10_div_20_div_22_tr_59_Template, 4, 7, "tr", 90);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(60, QuestionPageComponent_div_10_div_20_div_22_ng_container_60_Template, 1, 0, "ng-container", 46);
    i0.ɵɵelementStart(61, "div", 9)(62, "div", 10)(63, "div", 339)(64, "h5")(65, "b");
    i0.ɵɵtext(66, "Explanation");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(67, "app-tiny-mice", 32);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_10_div_20_div_22_Template_app_tiny_mice_emitEditorValue_67_listener($event) { i0.ɵɵrestoreView(_r95); const i_r81 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getPassageExplanationEditor($event, i_r81)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(68, "div", 340)(69, "div", 256)(70, "div", 163)(71, "h5", 208)(72, "b");
    i0.ɵɵtext(73, "Hints");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(74, "div", 341)(75, "button", 342);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_10_div_20_div_22_Template_button_click_75_listener() { i0.ɵɵrestoreView(_r95); const i_r81 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addChoicePassage("passageAddHint", i_r81)); });
    i0.ɵɵelement(76, "i", 45);
    i0.ɵɵtext(77, " Add New Hint");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(78, QuestionPageComponent_div_10_div_20_div_22_div_78_Template, 4, 7, "div", 307);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(79, QuestionPageComponent_div_10_div_20_div_22_div_79_Template, 12, 6, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r78 = i0.ɵɵnextContext();
    const list_r80 = ctx_r78.$implicit;
    const i_r81 = ctx_r78.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    const settings_r10 = i0.ɵɵreference(27);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].question)("height", 450)("readonly", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(25, _c6, ctx_r1.selectOptionHeader != "edit"));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("disabled", ctx_r1.selectOptionHeader != "edit")("checked", ctx_r1.type != "add" && (ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].editor_type) == 3);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", list_r80.get("addMultipleChoice")["controls"]);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", list_r80.get("addMatchTableChoose")["controls"]);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", list_r80.get("addMatchTableChoose")["controls"]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", list_r80.get("addMultipleChoice")["controls"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", settings_r10)("ngTemplateOutletContext", i0.ɵɵpureFunction1(27, _c4, ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("height", 450)("readonly", ctx_r1.selectOptionHeader != "edit")("showDropBtn", false)("showInputBtn", false)("id", "passageexplaination" + i_r81)("editorPatchValue", ctx_r1.type != "edit" || (ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].explanation) ? ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].explanation : false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngForOf", list_r80.get("addHints")["controls"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectOptionHeader != "edit");
} }
function QuestionPageComponent_div_10_div_20_div_23_div_10_div_16_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r115 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 372);
    i0.ɵɵtwoWayListener("ngModelChange", function QuestionPageComponent_div_10_div_20_div_23_div_10_div_16_input_5_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r115); const data_r116 = i0.ɵɵnextContext().$implicit; i0.ɵɵtwoWayBindingSet(data_r116.options[0].value, $event) || (data_r116.options[0].value = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r116 = i0.ɵɵnextContext();
    const data_r116 = ctx_r116.$implicit;
    const k_r118 = ctx_r116.index;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵpropertyInterpolate1("placeholder", "Enter the answer ", k_r118 + 1, "*");
    i0.ɵɵproperty("readonly", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵtwoWayProperty("ngModel", data_r116.options[0].value);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(5, _c8));
} }
function QuestionPageComponent_div_10_div_20_div_23_div_10_div_16_app_tiny_mice_6_Template(rf, ctx) { if (rf & 1) {
    const _r119 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-tiny-mice", 373);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_10_div_20_div_23_div_10_div_16_app_tiny_mice_6_Template_app_tiny_mice_emitEditorValue_0_listener($event) { i0.ɵɵrestoreView(_r119); const data_r116 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.getEditorValue1($event, data_r116)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r116 = i0.ɵɵnextContext();
    const data_r116 = ctx_r116.$implicit;
    const k_r118 = ctx_r116.index;
    const i_r81 = i0.ɵɵnextContext(3).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("height", 150)("showDropBtn", false)("showInputBtn", false)("id", i_r81 + "input" + k_r118 + "er" + ctx_r1.random)("readonly", ctx_r1.selectOptionHeader != "edit")("editorPatchValue", ctx_r1.type == "add" ? false : data_r116.options[0].value);
} }
function QuestionPageComponent_div_10_div_20_div_23_div_10_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 369)(1, "div", 150)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 172);
    i0.ɵɵtemplate(5, QuestionPageComponent_div_10_div_20_div_23_div_10_div_16_input_5_Template, 1, 6, "input", 370)(6, QuestionPageComponent_div_10_div_20_div_23_div_10_div_16_app_tiny_mice_6_Template, 1, 6, "app-tiny-mice", 371);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const k_r118 = ctx.index;
    const i_r81 = i0.ɵɵnextContext(3).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(k_r118 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].chooseType.value == "text");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].chooseType.value == "math");
} }
function QuestionPageComponent_div_10_div_20_div_23_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r114 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 10)(2, "div", 163)(3, "h5", 83);
    i0.ɵɵtext(4, "Input Field");
    i0.ɵɵelementStart(5, "span", 31);
    i0.ɵɵtext(6, "*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 164)(8, "div", 36);
    i0.ɵɵelement(9, "input", 364);
    i0.ɵɵelementStart(10, "label", 365);
    i0.ɵɵtext(11, "Auto Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 366);
    i0.ɵɵlistener("change", function QuestionPageComponent_div_10_div_20_div_23_div_10_Template_input_change_12_listener($event) { i0.ɵɵrestoreView(_r114); const i_r81 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectedEditorType($event, "passageEditor_eng", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81])); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "label", 367);
    i0.ɵɵtext(14, "Math Editor");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "div", 21);
    i0.ɵɵtemplate(16, QuestionPageComponent_div_10_div_20_div_23_div_10_div_16_Template, 7, 3, "div", 368);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const i_r81 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("disabled", ctx_r1.selectOptionHeader != "edit")("checked", ctx_r1.type != "add" && ctx_r1.questionEditData.editor_type != 1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.inputArray[i_r81] == null ? null : ctx_r1.inputArray[i_r81].datas);
} }
function QuestionPageComponent_div_10_div_20_div_23_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QuestionPageComponent_div_10_div_20_div_23_div_27_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r122 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 59);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_10_div_20_div_23_div_27_div_3_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r122); const j_r121 = i0.ɵɵnextContext().index; const i_r81 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteChoicePassage("deletePassageHints", i_r81, j_r121)); });
    i0.ɵɵelementStart(1, "span", 60);
    i0.ɵɵelement(2, "img", 98);
    i0.ɵɵelementEnd()();
} }
function QuestionPageComponent_div_10_div_20_div_23_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r120 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 318)(1, "div", 260)(2, "app-tiny-mice", 100);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_10_div_20_div_23_div_27_Template_app_tiny_mice_emitEditorValue_2_listener($event) { const j_r121 = i0.ɵɵrestoreView(_r120).index; const i_r81 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getPassageHintEditor($event, i_r81, j_r121)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, QuestionPageComponent_div_10_div_20_div_23_div_27_div_3_Template, 3, 0, "div", 262);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const j_r121 = ctx.index;
    const i_r81 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", j_r121);
    i0.ɵɵadvance();
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type != "edit" || (ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].hint[j_r121] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].hint[j_r121].hint) ? ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].hint[j_r121] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].hint[j_r121].hint : false)("height", 150)("id", "multiHintChoice" + i_r81 + j_r121)("readonly", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", j_r121 != "0");
} }
function QuestionPageComponent_div_10_div_20_div_23_div_32_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 172);
    i0.ɵɵelement(1, "input", 376);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r123 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", data_r123.options[0] == null ? null : data_r123.options[0].value);
} }
function QuestionPageComponent_div_10_div_20_div_23_div_32_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 172);
    i0.ɵɵelement(1, "span", 309);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r123 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, data_r123.options[0] == null ? null : data_r123.options[0].value), i0.ɵɵsanitizeHtml);
} }
function QuestionPageComponent_div_10_div_20_div_23_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 374)(1, "div", 150)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, QuestionPageComponent_div_10_div_20_div_23_div_32_div_4_Template, 2, 1, "div", 375)(5, QuestionPageComponent_div_10_div_20_div_23_div_32_div_5_Template, 3, 3, "div", 375);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r124 = ctx.index;
    const i_r81 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", j_r124 + 1, ".\u00A0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].chooseType.value == "text");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].chooseType.value == "math");
} }
function QuestionPageComponent_div_10_div_20_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r113 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 292)(2, "div", 358)(3, "div", 10)(4, "div", 21)(5, "h5", 83);
    i0.ɵɵtext(6, "Question");
    i0.ɵɵelementStart(7, "span", 31);
    i0.ɵɵtext(8, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "app-tiny-mice", 359);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_10_div_20_div_23_Template_app_tiny_mice_emitEditorValue_9_listener($event) { i0.ɵɵrestoreView(_r113); const i_r81 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getPassageInputEditorValue($event, i_r81)); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(10, QuestionPageComponent_div_10_div_20_div_23_div_10_Template, 17, 3, "div", 360)(11, QuestionPageComponent_div_10_div_20_div_23_ng_container_11_Template, 1, 0, "ng-container", 46);
    i0.ɵɵelementStart(12, "div", 9)(13, "div", 10)(14, "div", 301)(15, "h5", 83);
    i0.ɵɵtext(16, "Explanation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "app-tiny-mice", 32);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_10_div_20_div_23_Template_app_tiny_mice_emitEditorValue_17_listener($event) { i0.ɵɵrestoreView(_r113); const i_r81 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getPassageExplanationEditor($event, i_r81)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 302)(19, "div", 10)(20, "div", 163)(21, "h5", 361);
    i0.ɵɵtext(22, "Hint");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 305)(24, "button", 306);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_10_div_20_div_23_Template_button_click_24_listener() { i0.ɵɵrestoreView(_r113); const i_r81 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addChoicePassage("passageAddHint", i_r81)); });
    i0.ɵɵelement(25, "i", 45);
    i0.ɵɵtext(26, " Add New Hint");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(27, QuestionPageComponent_div_10_div_20_div_23_div_27_Template, 4, 7, "div", 307);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(28, "div", 292)(29, "div", 362);
    i0.ɵɵelement(30, "h4", 121);
    i0.ɵɵpipe(31, "sanitizeHtml");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(32, QuestionPageComponent_div_10_div_20_div_23_div_32_Template, 6, 3, "div", 363);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r78 = i0.ɵɵnextContext();
    const list_r80 = ctx_r78.$implicit;
    const i_r81 = ctx_r78.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    const settings_r10 = i0.ɵɵreference(27);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("height", 450)("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].question)("id", "myEditor-passage" + i_r81)("showDropBtn", false)("showInputBtn", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputCountPassage != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", settings_r10)("ngTemplateOutletContext", i0.ɵɵpureFunction1(23, _c4, ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("height", 450)("readonly", ctx_r1.selectOptionHeader != "edit")("showDropBtn", false)("showInputBtn", false)("id", "passageexplaination" + i_r81)("editorPatchValue", ctx_r1.type != "edit" || (ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].explanation) ? ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].explanation : false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", list_r80.get("addHints")["controls"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader == "edit");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(31, 21, ctx_r1.questionArray1), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.inputArray[i_r81] == null ? null : ctx_r1.inputArray[i_r81].datas);
} }
function QuestionPageComponent_div_10_div_20_div_24_div_10_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r126 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 384);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_10_div_20_div_24_div_10_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r126); const list_r80 = i0.ɵɵnextContext(3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addNewCorrectAnswerForFreeText(list_r80.get("repeatAnswerFreeText"))); });
    i0.ɵɵelement(1, "i", 230);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r80 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Add (", list_r80.get("repeatAnswerFreeText")["controls"].length, " / ", ctx_r1.maximumAllowedCount, ")");
} }
function QuestionPageComponent_div_10_div_20_div_24_div_10_div_15_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r129 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 238)(1, "div", 239);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_10_div_20_div_24_div_10_div_15_div_7_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r129); const k_r128 = i0.ɵɵnextContext().index; const ctx_r78 = i0.ɵɵnextContext(3); const list_r80 = ctx_r78.$implicit; const i_r81 = ctx_r78.index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteCorrectAnswerForFreeText(list_r80.get("repeatAnswerFreeText"), k_r128, list_r80.get("repeatAnswerFreeText")["controls"].length - k_r128, i_r81)); });
    i0.ɵɵelement(2, "img", 240);
    i0.ɵɵelementEnd()();
} }
function QuestionPageComponent_div_10_div_20_div_24_div_10_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r127 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 234)(1, "div", 235)(2, "div", 236)(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 5)(6, "app-tiny-mice", 216);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_10_div_20_div_24_div_10_div_15_Template_app_tiny_mice_emitEditorValue_6_listener($event) { const k_r128 = i0.ɵɵrestoreView(_r127).index; const ctx_r78 = i0.ɵɵnextContext(3); const list_r80 = ctx_r78.$implicit; const i_r81 = ctx_r78.index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.multiAnswerFreeText($event, k_r128, list_r80.get("repeatAnswerFreeText")["controls"].length - k_r128, i_r81)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, QuestionPageComponent_div_10_div_20_div_24_div_10_div_15_div_7_Template, 3, 0, "div", 237);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_16_0;
    const last_r130 = ctx.last;
    const k_r128 = ctx.index;
    const ctx_r78 = i0.ɵɵnextContext(3);
    const list_r80 = ctx_r78.$implicit;
    const i_r81 = ctx_r78.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", k_r128);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(list_r80.get("repeatAnswerFreeText")["controls"].length - k_r128);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", !last_r130 && list_r80.get("repeatAnswerFreeText")["controls"].length > 1 ? "w-93 px-2" : "w-96 pl-2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type == "add" ? false : (tmp_16_0 = (tmp_16_0 = ctx_r1.questionEditData.subQuestions[i_r81].answer[list_r80.get("repeatAnswerFreeText")["controls"].length - k_r128 - 1]) == null ? null : tmp_16_0.correctAnswer) !== null && tmp_16_0 !== undefined ? tmp_16_0 : "")("height", 150);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !last_r130 && list_r80.get("repeatAnswerFreeText")["controls"].length > 1);
} }
function QuestionPageComponent_div_10_div_20_div_24_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 10)(2, "div", 378)(3, "h5", 83);
    i0.ɵɵtext(4, "Correct Answer");
    i0.ɵɵelementStart(5, "span", 31);
    i0.ɵɵtext(6, "*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 379)(8, "div", 380);
    i0.ɵɵelement(9, "input", 381);
    i0.ɵɵelementStart(10, "label", 382);
    i0.ɵɵtext(11, "Auto Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, QuestionPageComponent_div_10_div_20_div_24_div_10_button_12_Template, 3, 2, "button", 383);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div")(14, "div", 10);
    i0.ɵɵtemplate(15, QuestionPageComponent_div_10_div_20_div_24_div_10_div_15_Template, 8, 6, "div", 233);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const list_r80 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngIf", list_r80.get("repeatAnswerFreeText")["controls"].length < ctx_r1.maximumAllowedCount);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-12 ", ctx_r1.selectOptionHeader == "edit" ? "" : "div-disable mt-2", "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", list_r80.get("repeatAnswerFreeText")["controls"]);
} }
function QuestionPageComponent_div_10_div_20_div_24_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QuestionPageComponent_div_10_div_20_div_24_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r131 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 163)(2, "h5", 30);
    i0.ɵɵtext(3, "Hints");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 341)(5, "button", 342);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_10_div_20_div_24_div_19_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r131); const i_r81 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addChoicePassage("passageAddHint", i_r81)); });
    i0.ɵɵelement(6, "i", 45);
    i0.ɵɵtext(7, " Add New Hint");
    i0.ɵɵelementEnd()()();
} }
function QuestionPageComponent_div_10_div_20_div_24_div_20_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r134 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 59);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_10_div_20_div_24_div_20_div_3_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r134); const j_r133 = i0.ɵɵnextContext().index; const i_r81 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteChoicePassage("deletePassageHints", i_r81, j_r133)); });
    i0.ɵɵelementStart(1, "span", 60);
    i0.ɵɵelement(2, "img", 386);
    i0.ɵɵelementEnd()();
} }
function QuestionPageComponent_div_10_div_20_div_24_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r132 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 385)(1, "div", 352)(2, "app-tiny-mice", 353);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_10_div_20_div_24_div_20_Template_app_tiny_mice_emitEditorValue_2_listener($event) { const j_r133 = i0.ɵɵrestoreView(_r132).index; const i_r81 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getPassageHintEditor($event, i_r81, j_r133)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, QuestionPageComponent_div_10_div_20_div_24_div_20_div_3_Template, 3, 0, "div", 262);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const j_r133 = ctx.index;
    const i_r81 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", j_r133);
    i0.ɵɵadvance();
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type != "edit" || (ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].hint[j_r133] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].hint[j_r133].hint) ? ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].hint[j_r133] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].hint[j_r133].hint : false)("height", 150)("id", "multiHintChoice" + i_r81 + j_r133)("readonly", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", j_r133 != "0");
} }
function QuestionPageComponent_div_10_div_20_div_24_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 387);
    i0.ɵɵelement(2, "h4", 309);
    i0.ɵɵpipe(3, "sanitizeHtml");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 185);
    i0.ɵɵelement(5, "app-tiny-mice", 253);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const i_r81 = i0.ɵɵnextContext(2).index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(3, 2, ctx_r1.questionArray[i_r81]), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("height", 150);
} }
function QuestionPageComponent_div_10_div_20_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r125 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 292)(2, "div", 358)(3, "div", 10)(4, "div", 21)(5, "h5", 83);
    i0.ɵɵtext(6, "Question");
    i0.ɵɵelementStart(7, "span", 31);
    i0.ɵɵtext(8, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "app-tiny-mice", 216);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_10_div_20_div_24_Template_app_tiny_mice_emitEditorValue_9_listener($event) { i0.ɵɵrestoreView(_r125); const ctx_r78 = i0.ɵɵnextContext(); const list_r80 = ctx_r78.$implicit; const i_r81 = ctx_r78.index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getPassageOptionValue($event, ctx_r1.questionId, "question", 0, i_r81, list_r80)); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(10, QuestionPageComponent_div_10_div_20_div_24_div_10_Template, 16, 5, "div", 360)(11, QuestionPageComponent_div_10_div_20_div_24_ng_container_11_Template, 1, 0, "ng-container", 46);
    i0.ɵɵelementStart(12, "div", 9)(13, "div", 10)(14, "div", 23)(15, "h5", 83);
    i0.ɵɵtext(16, "Explanation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "app-tiny-mice", 32);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_10_div_20_div_24_Template_app_tiny_mice_emitEditorValue_17_listener($event) { i0.ɵɵrestoreView(_r125); const i_r81 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getPassageExplanationEditor($event, i_r81)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 47);
    i0.ɵɵtemplate(19, QuestionPageComponent_div_10_div_20_div_24_div_19_Template, 8, 0, "div", 8)(20, QuestionPageComponent_div_10_div_20_div_24_div_20_Template, 4, 7, "div", 377);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(21, QuestionPageComponent_div_10_div_20_div_24_div_21_Template, 6, 4, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r78 = i0.ɵɵnextContext();
    const list_r80 = ctx_r78.$implicit;
    const i_r81 = ctx_r78.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    const settings_r10 = i0.ɵɵreference(27);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].question)("height", 450);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectOptionHeader == "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", settings_r10)("ngTemplateOutletContext", i0.ɵɵpureFunction1(17, _c4, ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("height", 450)("readonly", ctx_r1.selectOptionHeader != "edit")("showDropBtn", false)("showInputBtn", false)("id", "passageexplaination" + i_r81)("editorPatchValue", ctx_r1.type != "edit" || (ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].explanation) ? ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.subQuestions[i_r81] == null ? null : ctx_r1.questionEditData.subQuestions[i_r81].explanation : false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectOptionHeader == "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r80.get("addHints")["controls"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectOptionHeader != "edit");
} }
function QuestionPageComponent_div_10_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 280)(1, "div", 281)(2, "div", 25)(3, "div", 10)(4, "div", 282)(5, "div", 283)(6, "div", 284)(7, "h5", 30);
    i0.ɵɵtext(8, "Question Types");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 285)(10, "select", 286)(11, "option", 287);
    i0.ɵɵtext(12, "Select type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "option", 288);
    i0.ɵɵtext(14, "Multi choice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "option", 289);
    i0.ɵɵtext(16, "True or False");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "option", 290);
    i0.ɵɵtext(18, "Text Entry");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "option", 291);
    i0.ɵɵtext(20, "Essay");
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵtemplate(21, QuestionPageComponent_div_10_div_20_div_21_Template, 56, 27, "div", 7)(22, QuestionPageComponent_div_10_div_20_div_22_Template, 80, 29, "div", 7)(23, QuestionPageComponent_div_10_div_20_div_23_Template, 33, 25, "div", 7)(24, QuestionPageComponent_div_10_div_20_div_24_Template, 22, 19, "div", 7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r80 = ctx.$implicit;
    const i_r81 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", i_r81);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c6, ctx_r1.selectOptionHeader != "edit"));
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].selectType.value == "MultiChoice");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].selectType.value == "TrueOrFalse");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.passage["controls"].addQuestionType["controls"][i_r81]["controls"].selectType.value == "textEntry");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r80["controls"].selectType.value == "essay");
} }
function QuestionPageComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r72 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 21)(2, "h3", 22);
    i0.ɵɵtext(3, "Passage > passage with Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "hr", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 21)(6, "form", 24)(7, "div", 25)(8, "div", 10);
    i0.ɵɵtemplate(9, QuestionPageComponent_div_10_div_9_Template, 3, 1, "div", 263)(10, QuestionPageComponent_div_10_div_10_Template, 8, 5, "div", 214);
    i0.ɵɵelementStart(11, "div", 82)(12, "div", 10)(13, "div", 264)(14, "div")(15, "h5", 83);
    i0.ɵɵtext(16, "Editor Context");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(17, QuestionPageComponent_div_10_div_17_Template, 3, 2, "div", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 21)(19, "app-tiny-mice", 265);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_10_Template_app_tiny_mice_emitEditorValue_19_listener($event) { i0.ɵɵrestoreView(_r72); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getPassageContent($event)); });
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵtemplate(20, QuestionPageComponent_div_10_div_20_Template, 25, 8, "div", 266);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r1.passage);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.type == "add" || ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectOptionHeader == "edit");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.passage.controls.editorContext.value != "" && ctx_r1.selectOptionHeader == "edit");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("editorPatchValue", ctx_r1.passage.controls.editorContext.value != "" ? ctx_r1.passage.controls.editorContext.value : false)("height", 250)("inlineEditor", false)("id", "passage")("readonly", !ctx_r1.editPassageContent);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.passage.get("addQuestionType")["controls"]);
} }
function QuestionPageComponent_div_11_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 82)(1, "h5", 83);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Graphing Area ", ctx_r1.markType, "");
} }
function QuestionPageComponent_div_11_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 120);
    i0.ɵɵelement(1, "h4", 121);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, ctx_r1.graphQuestionEditor.content), i0.ɵɵsanitizeHtml);
} }
function QuestionPageComponent_div_11_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r136 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "app-graph-component", 390);
    i0.ɵɵlistener("emitItem", function QuestionPageComponent_div_11_div_23_Template_app_graph_component_emitItem_1_listener($event) { i0.ɵɵrestoreView(_r136); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getEmitedValue($event)); })("valueChange", function QuestionPageComponent_div_11_div_23_Template_app_graph_component_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r136); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getGraphValue($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("col-12 my-2 d-flex justify-content-center ", ctx_r1.selectOptionHeader != "edit" ? "div-disable" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("editMode", true)("editPatchValue", false)("graphId", "graph1")("saveAndDuplicate", ctx_r1.saveAndDuplicate)("questionType", ctx_r1.questionId);
} }
function QuestionPageComponent_div_11_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r137 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "app-graph-component", 391);
    i0.ɵɵlistener("emitItem", function QuestionPageComponent_div_11_div_24_Template_app_graph_component_emitItem_1_listener($event) { i0.ɵɵrestoreView(_r137); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getEmitedValue($event)); })("valueChange", function QuestionPageComponent_div_11_div_24_Template_app_graph_component_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r137); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getGraphValue($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("col-12 my-2 d-flex justify-content-center ", ctx_r1.selectOptionHeader != "edit" ? "div-disable" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("editMode", true)("saveAndDuplicate", ctx_r1.saveAndDuplicate)("editPatchValue", ctx_r1.parseVal(ctx_r1.questionEditData.answer[0].correctAnswer))("graphId", "graph2")("questionType", ctx_r1.questionId);
} }
function QuestionPageComponent_div_11_div_27_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QuestionPageComponent_div_11_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, QuestionPageComponent_div_11_div_27_ng_container_1_Template, 1, 0, "ng-container", 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    const settings_r10 = i0.ɵɵreference(27);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", settings_r10)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c4, ctx_r1.graphForm));
} }
function QuestionPageComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r135 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 21)(2, "h3", 22);
    i0.ɵɵtext(3, "Writing >Graphing");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "hr", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 21)(6, "form", 24)(7, "div", 116)(8, "div", 10)(9, "div", 21)(10, "div", 27)(11, "div", 28)(12, "h5", 29);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "h5", 30);
    i0.ɵɵtext(15, "Question");
    i0.ɵɵelementStart(16, "span", 31);
    i0.ɵɵtext(17, "\u00A0*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "app-tiny-mice", 158);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_11_Template_app_tiny_mice_emitEditorValue_18_listener($event) { i0.ɵɵrestoreView(_r135); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getGraphQuestionValue($event, ctx_r1.questionId)); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(19, "div", 9)(20, "div", 10);
    i0.ɵɵtemplate(21, QuestionPageComponent_div_11_div_21_Template, 3, 1, "div", 214)(22, QuestionPageComponent_div_11_div_22_Template, 3, 3, "div", 388)(23, QuestionPageComponent_div_11_div_23_Template, 2, 8, "div", 389)(24, QuestionPageComponent_div_11_div_24_Template, 2, 8, "div", 389);
    i0.ɵɵelementStart(25, "div")(26, "app-tiny-mice", 158);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_11_Template_app_tiny_mice_emitEditorValue_26_listener($event) { i0.ɵɵrestoreView(_r135); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getGraphEditorAnswerValue($event)); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(27, QuestionPageComponent_div_11_div_27_Template, 2, 4, "div", 7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r1.graphForm);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.qnsNo);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData.question)("height", 150)("id", "highlightEditot")("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.selectOptionHeader == "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.graphQuestionEditor && ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type != "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "edit" && ctx_r1.graphBoardValue);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-12 my-2 ", ctx_r1.selectOptionHeader != "edit" ? "div-disable" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData.editor_answer)("height", 150)("id", "editorGraphPatch")("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectOptionHeader == "edit");
} }
function QuestionPageComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r138 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 21)(2, "h3", 22);
    i0.ɵɵtext(3, " Highlight > Sentence and Response ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 26)(5, "form", 24)(6, "div", 118)(7, "div", 21)(8, "div", 9)(9, "div", 10)(10, "div", 26)(11, "div", 27)(12, "div", 28)(13, "h5", 29);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "h5", 30);
    i0.ɵɵtext(16, "Question");
    i0.ɵɵelementStart(17, "span", 31);
    i0.ɵɵtext(18, "\u00A0*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "app-tiny-mice", 158);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_12_Template_app_tiny_mice_emitEditorValue_19_listener($event) { i0.ɵɵrestoreView(_r138); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getEditorContextValue($event, ctx_r1.questionId, "editorContext")); });
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(20, "div", 21)(21, "div", 9)(22, "div", 10)(23, "div", 26)(24, "h5");
    i0.ɵɵtext(25, "Correct Answer");
    i0.ɵɵelementStart(26, "span", 31);
    i0.ɵɵtext(27, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "app-tiny-mice", 392);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_12_Template_app_tiny_mice_emitEditorValue_28_listener($event) { i0.ɵɵrestoreView(_r138); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getEditorContextValue1($event, ctx_r1.questionId, "answer")); });
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(29, "div", 21)(30, "div", 9)(31, "div", 10)(32, "div", 26)(33, "h5");
    i0.ɵɵtext(34, "Correct Answer With Highlight Option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "app-tiny-mice", 158);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_12_Template_app_tiny_mice_emitEditorValue_35_listener($event) { i0.ɵɵrestoreView(_r138); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getEditorContextValue2($event, ctx_r1.questionId, "highlight")); });
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(36, "div", 21)(37, "div", 9)(38, "div", 10)(39, "div", 393)(40, "div", 394)(41, "label", 395)(42, "b");
    i0.ɵɵtext(43, "Points");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "input", 396);
    i0.ɵɵlistener("keypress", function QuestionPageComponent_div_12_Template_input_keypress_44_listener($event) { i0.ɵɵrestoreView(_r138); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(45, "div", 116)(46, "div", 10)(47, "div", 120);
    i0.ɵɵelement(48, "h4", 121);
    i0.ɵɵpipe(49, "sanitizeHtml");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "div", 120);
    i0.ɵɵelement(51, "h4", 121);
    i0.ɵɵpipe(52, "sanitizeHtml");
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.highlight);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.qnsNo);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData.question)("height", 150)("id", "highlightEditot")("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData.options[0].options)("height", 150)("hideBackcolr", true)("id", "highlightEditor2")("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData.answer[0].correctAnswer)("height", 150)("id", "highlightEditor3")("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("readonly", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader == "edit");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(49, 23, ctx_r1.answertValue), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(52, 25, ctx_r1.answerKeyValue), i0.ɵɵsanitizeHtml);
} }
function QuestionPageComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r139 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "h5", 83);
    i0.ɵɵtext(2, "Explanation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "app-tiny-mice", 32);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_15_Template_app_tiny_mice_emitEditorValue_3_listener($event) { i0.ɵɵrestoreView(_r139); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getExplanationEditor($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("height", 450)("readonly", ctx_r1.selectOptionHeader != "edit")("showDropBtn", false)("showInputBtn", false)("id", "explaination")("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData.explanation);
} }
function QuestionPageComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r140 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 47)(1, "h5", 83);
    i0.ɵɵtext(2, "Resource");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "app-tiny-mice", 32);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_16_Template_app_tiny_mice_emitEditorValue_3_listener($event) { i0.ɵɵrestoreView(_r140); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getResourceEditor($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("height", 150)("readonly", ctx_r1.selectOptionHeader != "edit")("showDropBtn", false)("showInputBtn", false)("id", "resource")("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.questionEditData == null ? null : ctx_r1.questionEditData.resource);
} }
function QuestionPageComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r141 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 252)(1, "div", 256)(2, "div", 163)(3, "h5", 208)(4, "b");
    i0.ɵɵtext(5, "Hints");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 257)(7, "button", 342);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_17_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r141); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addHintsArray()); });
    i0.ɵɵelement(8, "i", 45);
    i0.ɵɵtext(9, " Add New Hint");
    i0.ɵɵelementEnd()()()();
} }
function QuestionPageComponent_div_18_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r144 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 195)(1, "span", 401);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_18_div_2_div_3_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r144); const i_r143 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.removeHintArray(i_r143)); });
    i0.ɵɵelement(2, "img", 402);
    i0.ɵɵelementEnd()();
} }
function QuestionPageComponent_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r142 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 398)(1, "div", 399)(2, "app-tiny-mice", 100);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_div_18_div_2_Template_app_tiny_mice_emitEditorValue_2_listener($event) { const i_r143 = i0.ɵɵrestoreView(_r142).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getHintEditor($event, i_r143)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, QuestionPageComponent_div_18_div_2_div_3_Template, 3, 0, "div", 400);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r145 = ctx.$implicit;
    const i_r143 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("editorPatchValue", list_r145.hint == "" || ctx_r1.type == "add" ? false : list_r145.hint)("height", 150)("id", "multiHint" + i_r143)("readonly", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i_r143 != "0");
} }
function QuestionPageComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 301)(1, "div", 10);
    i0.ɵɵtemplate(2, QuestionPageComponent_div_18_div_2_Template, 4, 6, "div", 397);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("hidden", ctx_r1.selectOptionHeader != "edit");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.hintArray);
} }
function QuestionPageComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r146 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 403);
    i0.ɵɵlistener("click", function QuestionPageComponent_button_20_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r146); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.selectHeader("edit"); return i0.ɵɵresetView(ctx_r1.showPreview = !ctx_r1.showPreview); });
    i0.ɵɵelement(1, "i", 404);
    i0.ɵɵtext(2, " Back");
    i0.ɵɵelementEnd();
} }
function QuestionPageComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r147 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 405);
    i0.ɵɵlistener("click", function QuestionPageComponent_button_21_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r147); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.cancelAction()); });
    i0.ɵɵelement(1, "i", 406);
    i0.ɵɵtext(2, " Cancel");
    i0.ɵɵelementEnd();
} }
function QuestionPageComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r148 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 407);
    i0.ɵɵlistener("click", function QuestionPageComponent_button_22_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r148); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.selectHeader(ctx_r1.commonPreview); return i0.ɵɵresetView(ctx_r1.showPreview = !ctx_r1.showPreview); });
    i0.ɵɵelement(1, "i", 408);
    i0.ɵɵtext(2, " Preview");
    i0.ɵɵelementEnd();
} }
function QuestionPageComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r149 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 409);
    i0.ɵɵlistener("click", function QuestionPageComponent_button_23_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r149); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveQuestions(ctx_r1.commonNameForQuestionId, "close")); });
    i0.ɵɵelement(1, "i", 410);
    i0.ɵɵtext(2, "Save & Close ");
    i0.ɵɵelementEnd();
} }
function QuestionPageComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r150 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 411)(1, "button", 412);
    i0.ɵɵelement(2, "i", 413);
    i0.ɵɵtext(3, " Save ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 414)(5, "a", 415);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_24_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r150); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveQuestions(ctx_r1.commonNameForQuestionId, "list")); });
    i0.ɵɵtext(6, "Save & New");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "a", 415);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_24_Template_a_click_7_listener() { i0.ɵɵrestoreView(_r150); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveQuestions(ctx_r1.commonNameForQuestionId, "same")); });
    i0.ɵɵtext(8, "Save & Duplicate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "a", 415);
    i0.ɵɵlistener("click", function QuestionPageComponent_div_24_Template_a_click_9_listener() { i0.ɵɵrestoreView(_r150); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveQuestions(ctx_r1.commonNameForQuestionId, "close")); });
    i0.ɵɵtext(10, "Save & Close");
    i0.ɵɵelementEnd()()();
} }
function QuestionPageComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r151 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 409);
    i0.ɵɵlistener("click", function QuestionPageComponent_button_25_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r151); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.checkPassageType(ctx_r1.commonNameForQuestionId, "close")); });
    i0.ɵɵelement(1, "i", 416);
    i0.ɵɵtext(2, "Update ");
    i0.ɵɵelementEnd();
} }
function QuestionPageComponent_ng_template_26_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 431)(1, "label")(2, "b");
    i0.ɵɵtext(3, "Sub Topic");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(4, "ng-select", 432);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("placeholder", "Select Sub Topic")("bindValue", "sub_topic_id")("bindLabel", "sub_topic")("items", ctx_r1.subTopicListData);
} }
function QuestionPageComponent_ng_template_26_mat_chip_row_30_Template(rf, ctx) { if (rf & 1) {
    const _r154 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip-row", 433);
    i0.ɵɵlistener("removed", function QuestionPageComponent_ng_template_26_mat_chip_row_30_Template_mat_chip_row_removed_0_listener() { const i_r155 = i0.ɵɵrestoreView(_r154).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.removeSkill(i_r155)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon", 434);
    i0.ɵɵtext(3, "cancel");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r156 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c10, item_r156.invalid))("removable", true);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", item_r156, " ");
} }
function QuestionPageComponent_ng_template_26_div_33_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r157 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 440);
    i0.ɵɵlistener("click", function QuestionPageComponent_ng_template_26_div_33_a_4_Template_a_click_0_listener() { const data_r158 = i0.ɵɵrestoreView(_r157).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.addSkill(data_r158, "select")); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r158 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r158.skill);
} }
function QuestionPageComponent_ng_template_26_div_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 435)(1, "div", 436)(2, "div", 437)(3, "div", 438);
    i0.ɵɵtemplate(4, QuestionPageComponent_ng_template_26_div_33_a_4_Template, 3, 1, "a", 439);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.totalSkillList);
} }
function QuestionPageComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r152 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24)(1, "div", 417)(2, "div", 10)(3, "div", 82)(4, "h5", 30);
    i0.ɵɵtext(5, "Question Classification");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 82)(7, "div", 10)(8, "div", 257)(9, "label")(10, "b");
    i0.ɵɵtext(11, "Subject");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "ng-select", 418);
    i0.ɵɵlistener("change", function QuestionPageComponent_ng_template_26_Template_ng_select_change_12_listener($event) { const row_r153 = i0.ɵɵrestoreView(_r152).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.subjectChanged($event, row_r153, "questionTopic")); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 82)(14, "div", 10)(15, "div")(16, "label")(17, "b");
    i0.ɵɵtext(18, "Topic");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "ng-select", 419);
    i0.ɵɵlistener("change", function QuestionPageComponent_ng_template_26_Template_ng_select_change_19_listener($event) { const row_r153 = i0.ɵɵrestoreView(_r152).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectChanged($event, row_r153, "questionSubTopic")); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(20, QuestionPageComponent_ng_template_26_div_20_Template, 5, 4, "div", 420);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 82)(22, "div", 10)(23, "div", 21)(24, "label", 208)(25, "b");
    i0.ɵɵtext(26, "Skill");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "mat-form-field", 421)(28, "mat-chip-grid", null, 3);
    i0.ɵɵtemplate(30, QuestionPageComponent_ng_template_26_mat_chip_row_30_Template, 4, 5, "mat-chip-row", 422);
    i0.ɵɵelementStart(31, "input", 423, 4);
    i0.ɵɵlistener("input", function QuestionPageComponent_ng_template_26_Template_input_input_31_listener($event) { i0.ɵɵrestoreView(_r152); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.serachSkill($event)); })("matChipInputTokenEnd", function QuestionPageComponent_ng_template_26_Template_input_matChipInputTokenEnd_31_listener($event) { i0.ɵɵrestoreView(_r152); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onChipInput($event)); })("keydown.enter", function QuestionPageComponent_ng_template_26_Template_input_keydown_enter_31_listener($event) { i0.ɵɵrestoreView(_r152); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addSkill($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(33, QuestionPageComponent_ng_template_26_div_33_Template, 5, 1, "div", 424);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(34, "div", 82)(35, "div", 10)(36, "div", 21)(37, "label")(38, "b");
    i0.ɵɵtext(39, "Standard");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(40, "ng-select", 425);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(41, "div", 82)(42, "div", 10)(43, "div", 245)(44, "label")(45, "b");
    i0.ɵɵtext(46, "Difficulty Level");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "select", 246)(48, "option", 247);
    i0.ɵɵtext(49, "Easy");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "option", 248);
    i0.ɵɵtext(51, "Medium");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "option", 249);
    i0.ɵɵtext(53, "Difficult");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(54, "div", 245)(55, "label", 250)(56, "b");
    i0.ɵɵtext(57, "Points");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "input", 251);
    i0.ɵɵlistener("keypress", function QuestionPageComponent_ng_template_26_Template_input_keypress_58_listener($event) { i0.ɵɵrestoreView(_r152); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(59, "div", 245)(60, "label")(61, "b");
    i0.ɵɵtext(62, "Predicted Solving Time");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(63, "div", 426)(64, "div", 427)(65, "input", 428);
    i0.ɵɵlistener("keypress", function QuestionPageComponent_ng_template_26_Template_input_keypress_65_listener($event) { i0.ɵɵrestoreView(_r152); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.validationService.numberOnlyValidate($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "span", 429);
    i0.ɵɵtext(67, ":");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "input", 430);
    i0.ɵɵlistener("keypress", function QuestionPageComponent_ng_template_26_Template_input_keypress_68_listener($event) { i0.ɵɵrestoreView(_r152); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.validationService.numberOnlyValidate($event)); });
    i0.ɵɵelementEnd()()()()()()()()()()();
} if (rf & 2) {
    const row_r153 = ctx.$implicit;
    const skillList_r159 = i0.ɵɵreference(29);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", row_r153);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("placeholder", "Select Subject")("bindValue", "subject_id")("bindLabel", "subject_name")("items", ctx_r1.subjectData);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMapInterpolate1("col-", row_r153.controls.question_topic_id.value ? "3" : "6", "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("placeholder", "Select Topic")("bindValue", "question_topic_id")("bindLabel", "question_topic")("items", ctx_r1.questionTopicListData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r153.controls.question_topic_id.value);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngForOf", ctx_r1.enteredSkillList);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matChipInputFor", skillList_r159)("matChipInputSeparatorKeyCodes", ctx_r1.separatorKeysCodes)("matChipInputAddOnBlur", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.totalSkillList.length != 0);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("placeholder", "Select Standard")("bindValue", "id")("bindLabel", "question_standard")("items", ctx_r1.standardListData);
} }
function QuestionPageComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r160 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 441)(1, "h4", 442);
    i0.ɵɵtext(2, "Delete Question");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 443)(4, "div", 444)(5, "h5");
    i0.ɵɵtext(6, "Are you sure want to delete this question ?");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 445)(8, "button", 446);
    i0.ɵɵlistener("click", function QuestionPageComponent_ng_template_28_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r160); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deletePassage(ctx_r1.passageDeleteData, ctx_r1.passageDeleteid)); });
    i0.ɵɵtext(9, "Confirm");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 447);
    i0.ɵɵlistener("click", function QuestionPageComponent_ng_template_28_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r160); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeQuestion()); });
    i0.ɵɵtext(11, "Cancel");
    i0.ɵɵelementEnd()();
} }
function QuestionPageComponent_ng_template_30_em_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 465);
    i0.ɵɵtext(1, "Title is required");
    i0.ɵɵelementEnd();
} }
function QuestionPageComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r161 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 441)(1, "h4", 448)(2, "b", 449);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "i", 450);
    i0.ɵɵlistener("click", function QuestionPageComponent_ng_template_30_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r161); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 451)(6, "div", 452)(7, "div", 10)(8, "div", 453)(9, "form", 24)(10, "div", 454)(11, "label", 455)(12, "span", 456);
    i0.ɵɵtext(13, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(14, " Passage Title");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 457);
    i0.ɵɵelement(16, "input", 458);
    i0.ɵɵtemplate(17, QuestionPageComponent_ng_template_30_em_17_Template, 2, 0, "em", 459);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 454)(19, "label", 460)(20, "span", 456);
    i0.ɵɵtext(21, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(22, " Passage");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 457)(24, "app-tiny-mice", 461);
    i0.ɵɵlistener("emitEditorValue", function QuestionPageComponent_ng_template_30_Template_app_tiny_mice_emitEditorValue_24_listener($event) { i0.ɵɵrestoreView(_r161); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getPassageAddEditorValue($event)); });
    i0.ɵɵelementEnd()()()()()()()();
    i0.ɵɵelementStart(25, "div", 445)(26, "div", 462)(27, "button", 463);
    i0.ɵɵlistener("click", function QuestionPageComponent_ng_template_30_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r161); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.formPassageValue()); });
    i0.ɵɵtext(28, "Reset");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "button", 464);
    i0.ɵɵlistener("click", function QuestionPageComponent_ng_template_30_Template_button_click_29_listener() { i0.ɵɵrestoreView(_r161); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.passageCREDService(ctx_r1.passageType)); });
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.passageType, " Passage");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r1.passageForm);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r1.passageForm.get("title").valid && (ctx_r1.passageForm.get("title").dirty || ctx_r1.passageForm.get("title").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("height", 300)("readonly", false)("id", "passageId")("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.passageType == "add" ? "Submit" : "Update");
} }
export class QuestionPageComponent {
    constructor(auth, cd, classService, contentService, config, sanitizer, formBuilder, creator, toastr, router, validationService, route, modalService, contentDetail) {
        this.auth = auth;
        this.cd = cd;
        this.classService = classService;
        this.contentService = contentService;
        this.config = config;
        this.sanitizer = sanitizer;
        this.formBuilder = formBuilder;
        this.creator = creator;
        this.toastr = toastr;
        this.router = router;
        this.validationService = validationService;
        this.route = route;
        this.modalService = modalService;
        this.contentDetail = contentDetail;
        this.addNewChoiceValue = [];
        this.addHintsValue = [];
        this.correctChoiceValue = [];
        this.correctChoiceMatchValue = [];
        this.correctChoiceMatchValueSingle = [];
        this.graphEditorAnswerVal = '';
        this.questionAnswer = [];
        this.subQuestionAnswer = [];
        this.optionArray = [];
        this.chooseArray = [];
        this.questionArray = [];
        this.inputEditorArray = [];
        this.chooseEditorArray = [];
        this.passageMultiEditor = [];
        this.subPassageMulti = [];
        this.subPassageRow = [];
        this.subPassageColumn = [];
        this.passageQuestionEditor = [];
        this.rowArray = [];
        this.strings = [];
        this.match = [];
        this.passageAnswer = [];
        this.inputType = 'text';
        this.graphPoints = 1;
        this.dropDownCount = 0;
        this.inputCount = 0;
        this.inputCountPassage = 0;
        this.inputArray = [];
        this.showForm = false;
        this.mathDelayer = false;
        this.passageContent = '';
        this.addPassageContent = '';
        this.saveAndDuplicate = '';
        // /editor variables started
        this.editorEvent = 'patchvalue';
        this.markType = '';
        this.showAnswer = false;
        this.editPassageContent = false;
        this.writingQuestionEditor = '';
        this.writingAnswerEditor = '';
        this.multiQuestionEditor = '';
        this.multiFreeAnswerEditor = [];
        this.matchSortEditor = '';
        this.graphQuestionEditor = '';
        this.showPreview = true;
        this.explanationEditorValue = '';
        this.explanationEditorContentValue = '';
        this.resourceEditorValue = '';
        this.resourceEditorContentValue = '';
        this.hintArray = [];
        this.hintArrayEditor = [];
        this.listPassageDetails = [];
        this.subjectData = [];
        this.maximumAllowedCount = 10;
        this.book = inject(BookService);
        this.standardListData = [];
        this.questionTopicListData = [];
        this.separatorKeysCodes = [ENTER, COMMA];
        this.enteredSkillList = [];
        this.subTopicListData = [];
        this.totalSkillList = [];
        this.passageType = '';
        this.qnsNo = '1';
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.subjectList();
        this.commonService('questionStandard');
        this.hintArray.push({ hint: '' });
        this.hintArrayEditor.push('');
        this.multihight = false;
        this.showTextEditor = 'text';
        this.editorType = true;
        this.editData = JSON.parse(this.auth.getSessionData('textAssignValue')) ?? '';
        this.questionId = this.auth.getSessionData('questionID');
        console.log(this.questionId, 'questionID');
        this.matchType = 'single';
        this.textType = this.auth.getSessionData('textType');
        this.textbutton = false;
        this.setQuestionTypeVariable();
        this.formSetValue();
        this.formPassageValue();
        if (this.questionId == '2') {
            this.multipleChoice.controls.multiResponse.patchValue(true);
        }
        else if (this.questionId == '24') {
            this.passageCREDService('list');
        }
        const qnsNo = this.auth.getSessionData('cfs_question_no') ?? '1';
        this.qnsNo = qnsNo != '' ? qnsNo : '1';
        console.log(this.qnsNo, 'cfs_question_no');
        if (this.type == 'edit') {
            this.questionEditData = JSON.parse(this.auth.getSessionData('questionData'));
            console.log(this.questionEditData, 'this.questionEditData');
            this.patchInit();
            this.inputType = this.questionEditData.editor_type == 1 ? 'text' : 'math';
        }
        this.creator.contentView.subscribe((res) => {
            if (res == true) {
                this.sideNavStatus = res;
            }
            else if (res != true || res == '' || res == null) {
                this.sideNavStatus = res;
            }
        });
    }
    ngOnDestroy() {
        this.creator.changeViewList(false);
    }
    ngOnInit() {
        this.creator.changeViewList(true);
        this.contentQuestion();
        this.selectOptionHeader = 'edit';
        this.showTextEditor = 'eng';
        this.graphPoints = 1;
    }
    ngAfterContentInit() {
        let subjectValue = null;
        if (this.type == 'edit' && this.questionId != '24' && this.questionEditData.subject_id && this.questionEditData.subject_id != '') {
            subjectValue = this.questionEditData.subject_id;
        }
        else if (this.type == 'edit' && this.questionId == '24' && this.questionEditData.subQuestions[0]?.subject_id && this.questionEditData.subQuestions[0]?.subject_id != '') {
            subjectValue = this.questionEditData.subQuestions[0]?.subject_id;
        }
        else {
            const content_subject = this.auth.getSessionData('content_subject');
            console.log(content_subject, 'content_subject');
            let subject = [];
            if (content_subject != '') {
                subject = content_subject.split(',');
            }
            else {
                subject = [];
            }
            subjectValue = subject.length != 0 ? subject[0] : null;
        }
        let formControl;
        if (this.questionId != '24') {
            formControl = ['1', '2'].indexOf(this.questionId) > -1 ? this.multipleChoice : ['5', '7'].indexOf(this.questionId) > -1 ?
                this.matchTable : this.questionId == '9' ? this.fillDropDown : this.questionId == '10' ? this.textEntry :
                this.questionId == '16' ? this.matchSort : ['20', '55'].indexOf(this.questionId) > -1 ? this.richText : this.graphForm;
        }
        else {
            formControl = this.passage['controls'].addQuestionType['controls'][0];
        }
        formControl.controls.subject_id.patchValue(subjectValue);
        this.commonService('questionTopic', formControl);
        if (this.type == 'edit') {
            this.patchForm();
        }
    }
    addOrEditPassage(type) {
        this.passageType = type;
        if (type == 'edit') {
            const findPassage = this.listPassageDetails.find(value => value.passage_id == this.passage.controls.passage_id.value);
            if (findPassage) {
                this.passageForm.controls.title.patchValue(findPassage.title);
                this.passageForm.controls.passageEditor.patchValue(findPassage.passage);
            }
        }
        else {
            this.formPassageValue();
            this.modalRef = this.modalService.open(this.passageAdd, { size: 'xl', backdrop: 'static' });
        }
    }
    close() {
        this.modalRef.close();
    }
    setQuestionTypeVariable() {
        if (this.questionId == '1' || this.questionId == '2') {
            this.commonNameForQuestionId = 'multipleChoiceQuestions';
            this.commonPreview = 'preview';
        }
        else if (this.questionId == '5') {
            this.commonNameForQuestionId = 'matchTableQuestionsSingle';
            this.commonPreview = 'preview';
        }
        else if (this.questionId == '7') {
            this.commonNameForQuestionId = 'matchTableQuestionsMultiple';
            this.commonPreview = 'preview';
        }
        else if (this.questionId == '9') {
            this.commonNameForQuestionId = 'textDropDown';
            this.commonPreview = 'dropInputPreview';
        }
        else if (this.questionId == '10') {
            this.commonNameForQuestionId = 'textEntry';
            this.commonPreview = 'textInputPreview';
        }
        else if (this.questionId == '16') {
            this.commonNameForQuestionId = 'matchSortList';
            this.commonPreview = 'sortpreview';
        }
        else if (['20', '55'].indexOf(this.questionId) > -1) {
            this.commonNameForQuestionId = 'richText';
            this.commonPreview = 'richpreview';
        }
        else if (this.questionId == '21') {
            this.commonNameForQuestionId = 'plainText';
            this.commonPreview = 'plainpreview';
        }
        else if (this.questionId == '22') {
            this.commonNameForQuestionId = 'shortText';
            this.commonPreview = 'shortpreview';
        }
        else if (this.questionId == '24') {
            this.commonNameForQuestionId = 'passage';
            this.commonPreview = 'preview';
        }
        else if (this.questionId == '28') {
            this.commonNameForQuestionId = 'highlightSentence';
            this.commonPreview = 'highlightPreview';
        }
        else if (['40', '41'].indexOf(this.questionId) > -1) {
            this.commonNameForQuestionId = 'graphing';
            this.commonPreview = 'highlightPreview';
        }
    }
    patchForm() {
        if (this.questionId == '1' || this.questionId == '2') {
            this.addMultipleChoice = this.multipleChoice.get('addMultipleChoice');
            for (let i = this.addMultipleChoice.length; this.addMultipleChoice.length > 0; i--) {
                this.addMultipleChoice.removeAt(i);
            }
            for (let i = 0; i < this.questionEditData.options.length; i++) {
                this.addMultipleChoice.push(this.createMultiple());
            }
            this.explanationEditorValue = this.questionEditData.explanation;
            this.resourceEditorValue = this.questionEditData?.resource;
            this.multipleChoice.controls.level.patchValue(this.questionEditData?.level);
            this.multipleChoice.controls.question_topic_id.patchValue(this.questionEditData?.question_topic_id);
            this.enteredSkillList = this.questionEditData.skill ?? [];
            this.commonService('questionSubTopic', this.multipleChoice, this.questionEditData.question_sub_topic_id ?
                this.questionEditData.question_sub_topic_id : '');
            this.multipleChoice.controls.question_standard.patchValue(this.questionEditData?.question_standard);
            const predicted_solving_time = this.questionEditData?.predicted_solving_time ? this.questionEditData?.predicted_solving_time.split(':') : [];
            this.multipleChoice.controls.minutes.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[0] : '');
            this.multipleChoice.controls.seconds.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[1] : '');
            this.multipleChoice.controls.points.patchValue(this.questionEditData.points);
            const res = this.questionEditData.multiple_response;
            this.multipleChoice.controls.multiResponse.patchValue(res != 0);
            this.multipleChoice.controls.autograde.patchValue(this.questionEditData.audo_grade != 0);
            for (let i = 0; i < this.questionEditData.options.length; i++) {
                // if (document.getElementById('myId' + i)){
                //     console.log(document.getElementById('myId' + i) , 'document');
                //     document.getElementById('myId' + i).innerHTML = this.questionEditData.options[i].options;
                // }
                this.multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['option'].patchValue(this.questionEditData.options[i].options);
                this.multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['active'].patchValue(this.questionEditData.answer[i].correctActive);
                this.multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['selectOption'].patchValue(this.questionEditData.answer[i].correctAnswer);
            }
        }
        else if (this.questionId == '5' || this.questionId == '7') {
            this.addMultipleChoice = this.matchTable.get('addMultipleChoice');
            this.addMatchTableChoose = this.matchTable.get('addMatchTableChoose');
            for (let i = this.addMultipleChoice.length; this.addMultipleChoice.length > 0; i--) {
                this.addMultipleChoice.removeAt(i);
            }
            this.explanationEditorValue = this.questionEditData.explanation;
            this.resourceEditorValue = this.questionEditData?.resource;
            this.matchTable.controls.level.patchValue(this.questionEditData?.level);
            for (let i = 0; i < this.questionEditData.options.length; i++) {
                this.addMultipleChoice.push(this.createMatch());
            }
            for (let i = this.addMatchTableChoose.length; this.addMatchTableChoose.length > 0; i--) {
                this.addMatchTableChoose.removeAt(i);
            }
            for (let i = 0; i < this.questionEditData.answer.length; i++) {
                this.addMatchTableChoose.push(this.createMatchChoose());
            }
            for (let i = 0; i < this.questionEditData.options.length; i++) {
                if (document.getElementById('myId' + i)) {
                    console.log(document.getElementById('myId' + i), 'document');
                    document.getElementById('myId' + i).innerHTML = this.questionEditData.options[i].options;
                }
                this.matchTable['controls'].addMultipleChoice['controls'][i]['controls']['option'].patchValue(this.questionEditData.options[i].options);
            }
            for (let i = 0; i < this.questionEditData.answer.length; i++) {
                if (document.getElementById('columnId' + i)) {
                    document.getElementById('columnId' + i).innerHTML = this.questionEditData.answer[i];
                }
                this.matchTable['controls'].addMatchTableChoose['controls'][i]['controls']['option'].patchValue(this.questionEditData.answer[i]);
            }
            setTimeout(() => {
                if (this.questionId == '5') {
                    for (let i = 0; i < this.questionEditData.heading_option.length; i++) {
                        this.matchTable['controls'].addMultipleChoice['controls'][i]['controls']['selectOption'].patchValue(this.questionEditData.heading_option[i].correctOption);
                        this.matchTable['controls'].addMultipleChoice['controls'][i]['controls']['active'].patchValue(this.questionEditData.heading_option[i].correctActive);
                        for (let j = 0; j < this.questionEditData.answer.length; j++) {
                            if (j == this.questionEditData.heading_option[i].correctActive) {
                                if (document.getElementById(i + 'chooseSingle' + j)) {
                                    document.getElementById(i + 'chooseSingle' + j).setAttribute('checked', 'true');
                                }
                            }
                        }
                    }
                }
                else {
                    for (let i = 0; i < this.questionEditData.heading_option.length; i++) {
                        for (let j = 0; j < this.questionEditData.options.length; j++) {
                            if (this.questionEditData.heading_option[i].correctActive == j) {
                                for (let k = 0; k < this.questionEditData.answer.length; k++) {
                                    if (this.questionEditData.heading_option[i].correctAnswer == k) {
                                        document.getElementById(j + 'chooseMulti' + k).setAttribute('checked', 'true');
                                        this.matchTable['controls'].addMultipleChoice['controls'][j]['controls']['selectOption'].patchValue(k);
                                        this.matchTable['controls'].addMultipleChoice['controls'][j]['controls']['active'].patchValue(j);
                                        this.correctChoiceMatchValue.push({
                                            correctOption: this.matchTable['controls'].addMultipleChoice['controls'][j]['controls']['option'].value,
                                            correctAnswer: this.matchTable['controls'].addMultipleChoice['controls'][j]['controls']['selectOption'].value,
                                            correctActive: this.matchTable['controls'].addMultipleChoice['controls'][j]['controls']['active'].value,
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
            }, 2000);
            this.matchTable.controls.question_topic_id.patchValue(this.questionEditData?.question_topic_id);
            this.enteredSkillList = this.questionEditData.skill ?? [];
            this.commonService('questionSubTopic', this.matchTable, this.questionEditData.question_sub_topic_id ?
                this.questionEditData.question_sub_topic_id : '');
            this.matchTable.controls.question_standard.patchValue(this.questionEditData?.question_standard);
            const predicted_solving_time = this.questionEditData?.predicted_solving_time ? this.questionEditData?.predicted_solving_time.split(':') : [];
            this.matchTable.controls.minutes.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[0] : '');
            this.matchTable.controls.seconds.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[1] : '');
            this.matchTable.controls.explanation.patchValue(this.questionEditData.explanation);
            this.matchTable.controls.points.patchValue(this.questionEditData.points);
            const res = this.questionEditData.multiple_response;
            this.matchTable.controls.multiResponse.patchValue(res != 0);
            this.matchTable.controls.autograde.patchValue(this.questionEditData.audo_grade != 0);
        }
        else if (this.questionId == '9') {
            this.fillDropDown.controls.points.patchValue(this.questionEditData.points);
            this.fillDropDown.controls.explanation.patchValue(this.questionEditData.explanation);
            this.fillDropDown.controls.level.patchValue(this.questionEditData?.level);
            const hints = this.fillDropDown.get('addHints');
            for (let i = hints.length; hints.length > 0; i--) {
                hints.removeAt(i);
            }
            for (let i = 0; i < this.questionEditData.hint.length; i++) {
                hints.push(this.createHint());
            }
            for (let i = 0; i < this.fillDropDown['controls'].addHints['controls'].length; i++) {
                this.fillDropDown['controls'].addHints['controls'][i]['controls']['hint'].patchValue(this.questionEditData.hint[i].hint);
            }
            const dropOption = this.fillDropDown.controls.addDropDownOption;
            for (let i = dropOption.length; dropOption.length > 0; i--) {
                dropOption.removeAt(i);
            }
            if (this.questionEditData.answer.length != 0) {
                this.dropDownCount = this.questionEditData.answer.length;
            }
            else {
                this.dropDownCount = 0;
            }
            if (this.questionEditData.editor_type == 1) {
                this.showTextEditor = 'eng';
            }
            else {
                this.showTextEditor = 'math';
            }
            for (let i = 0; i < this.questionEditData.answer.length; i++) {
                dropOption.push(this.createAddDropDownOption());
                for (let j = 0; j < this.questionEditData.answer[i].options.length; j++) {
                    if (j !== 0) {
                        this.fillDropDown['controls'].addDropDownOption['controls'][i]['controls']['options'].push(this.createAddDropDownOptionList());
                    }
                }
            }
            for (let i = 0; i < this.fillDropDown['controls'].addDropDownOption['controls'].length; i++) {
                this.fillDropDown['controls'].addDropDownOption['controls'][i]['controls']['options'].patchValue(this.questionEditData.answer[i].options);
                for (let j = 0; j < this.fillDropDown['controls'].addDropDownOption['controls'][i]['controls'].options['controls'].length; j++) {
                    this.fillDropDown['controls'].addDropDownOption['controls'][i]['controls'].options['controls'][j]['controls'].listOption.patchValue(this.questionEditData.answer[i].options[j].listOption);
                    this.fillDropDown['controls'].addDropDownOption['controls'][i]['controls'].options['controls'][j]['controls'].selected.patchValue(this.questionEditData.answer[i].options[j].selected);
                }
            }
            this.fillDropDown.controls.question_topic_id.patchValue(this.questionEditData?.question_topic_id);
            this.enteredSkillList = this.questionEditData.skill ?? [];
            this.commonService('questionSubTopic', this.fillDropDown, this.questionEditData.question_sub_topic_id ?
                this.questionEditData.question_sub_topic_id : '');
            this.fillDropDown.controls.question_standard.patchValue(this.questionEditData?.question_standard);
            const predicted_solving_time = this.questionEditData?.predicted_solving_time ? this.questionEditData?.predicted_solving_time.split(':') : [];
            this.fillDropDown.controls.minutes.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[0] : '');
            this.fillDropDown.controls.seconds.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[1] : '');
            this.fillDropDown.controls.autograde.patchValue(this.questionEditData.audo_grade != 0);
        }
        else if (this.questionId == '10') {
            this.textEntry.controls.question_topic_id.patchValue(this.questionEditData?.question_topic_id);
            this.enteredSkillList = this.questionEditData.skill ?? [];
            this.commonService('questionSubTopic', this.textEntry, this.questionEditData.question_sub_topic_id ?
                this.questionEditData.question_sub_topic_id : '');
            this.textEntry.controls.question_standard.patchValue(this.questionEditData?.question_standard);
            const predicted_solving_time = this.questionEditData?.predicted_solving_time ? this.questionEditData?.predicted_solving_time.split(':') : [];
            this.textEntry.controls.minutes.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[0] : '');
            this.textEntry.controls.seconds.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[1] : '');
            this.textEntry.controls.points.patchValue(this.questionEditData.points);
            this.textEntry.controls.level.patchValue(this.questionEditData?.level);
            this.textEntry.controls.explanation.patchValue(this.questionEditData.explanation);
            if (this.questionEditData.answer.length != 0) {
                this.inputCount = this.questionEditData.answer.length;
            }
            else {
                this.inputCount = 0;
            }
            if (this.questionEditData.editor_type == 1) {
                this.showTextEditor = 'eng';
            }
            else {
                this.showTextEditor = 'math';
            }
            const hints = this.textEntry.get('addHints');
            for (let i = hints.length; hints.length > 0; i--) {
                hints.removeAt(i);
            }
            for (let i = 0; i < this.questionEditData.hint.length; i++) {
                hints.push(this.createHint());
            }
            for (let i = 0; i < this.textEntry['controls'].addHints['controls'].length; i++) {
                this.textEntry['controls'].addHints['controls'][i]['controls']['hint'].patchValue(this.questionEditData.hint[i].hint);
            }
            this.textEntry.controls.autograde.patchValue(this.questionEditData.audo_grade != 0);
        }
        else if (this.questionId == '16') {
            this.matchSort.controls.question_topic_id.patchValue(this.questionEditData?.question_topic_id);
            this.enteredSkillList = this.questionEditData.skill ?? [];
            this.commonService('questionSubTopic', this.matchSort, this.questionEditData.question_sub_topic_id ?
                this.questionEditData.question_sub_topic_id : '');
            this.matchSort.controls.question_standard.patchValue(this.questionEditData?.question_standard);
            const predicted_solving_time = this.questionEditData?.predicted_solving_time ? this.questionEditData?.predicted_solving_time.split(':') : [];
            this.matchSort.controls.minutes.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[0] : '');
            this.matchSort.controls.seconds.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[1] : '');
            this.matchSort.controls.question.patchValue(this.questionEditData.question);
            this.matchSort.controls.source.patchValue(this.questionEditData.source);
            this.matchSort.controls.level.patchValue(this.questionEditData?.level);
            this.matchSort.controls.target.patchValue(this.questionEditData.target);
            this.matchSort.controls.explanation.patchValue(this.questionEditData.explanation);
            this.matchSort.controls.points.patchValue(this.questionEditData.points);
            this.matchSort.controls.autograde.patchValue(this.questionEditData.audo_grade != 0);
            // this.inputType = this.questionEditData.editor_type == 1 ? 'text' : 'math';
            this.addMultipleChoice = this.matchSort.get('addMultipleChoice');
            this.addMultipleChoose = this.matchSort.get('addMultipleChoose');
            this.matchSortSource = this.matchSort.get('matchSortSource');
            this.matchSortTarget = this.matchSort.get('matchSortTarget');
            const hints = this.matchSort.get('addHints');
            for (let i = hints.length; hints.length > 0; i--) {
                hints.removeAt(i);
            }
            for (let i = 0; i < this.questionEditData.hint.length; i++) {
                hints.push(this.createHint());
            }
            for (let i = this.addMultipleChoice.length; this.addMultipleChoice.length > 0; i--) {
                this.addMultipleChoice.removeAt(i);
            }
            for (let i = 0; i < this.questionEditData.options.length; i++) {
                this.addMultipleChoice.push(this.createSort());
            }
            for (let i = this.addMultipleChoose.length; this.addMultipleChoose.length > 0; i--) {
                this.addMultipleChoose.removeAt(i);
            }
            for (let i = 0; i < this.questionEditData.answer.length; i++) {
                this.addMultipleChoose.push(this.createSortChoose());
            }
            for (let i = this.matchSortSource.length; this.matchSortSource.length > 0; i--) {
                this.matchSortSource.removeAt(i);
            }
            for (let i = 0; i < this.questionEditData.answer.length; i++) {
                this.matchSortSource.push(this.createSortSource());
            }
            for (let i = this.matchSortTarget.length; this.matchSortTarget.length > 0; i--) {
                this.matchSortTarget.removeAt(i);
            }
            for (let i = 0; i < this.questionEditData.answer.length; i++) {
                this.matchSortTarget.push(this.createSortTarget());
            }
            setTimeout(() => {
                for (let i = 0; i < this.questionEditData.options.length; i++) {
                    this.matchSort['controls'].addMultipleChoice['controls'][i]['controls']['option'].patchValue(this.questionEditData.options[i].options);
                    this.matchSort['controls'].matchSortSource['controls'][i]['controls']['option'].patchValue(this.questionEditData.options[i].options);
                }
                for (let i = 0; i < this.questionEditData.answer.length; i++) {
                    this.matchSort['controls'].addMultipleChoose['controls'][i]['controls']['selectOption'].patchValue(this.questionEditData.answer[i].correctAnswer);
                    this.matchSort['controls'].matchSortTarget['controls'][i]['controls']['selectOption'].patchValue(this.questionEditData.answer[i].correctAnswer);
                }
                for (let i = 0; i < this.questionEditData.hint.length; i++) {
                    this.matchSort['controls'].addHints['controls'][i]['controls']['hint'].patchValue(this.questionEditData.hint[i].hint);
                }
            }, 1000);
        }
        else if (['20', '55'].indexOf(this.questionId) > -1) {
            this.richText.controls.question_topic_id.patchValue(this.questionEditData?.question_topic_id);
            this.enteredSkillList = this.questionEditData.skill ?? [];
            this.commonService('questionSubTopic', this.richText, this.questionEditData.question_sub_topic_id ?
                this.questionEditData.question_sub_topic_id : '');
            this.richText.controls.question_standard.patchValue(this.questionEditData?.question_standard);
            const predicted_solving_time = this.questionEditData?.predicted_solving_time ? this.questionEditData?.predicted_solving_time.split(':') : [];
            this.richText.controls.minutes.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[0] : '');
            this.richText.controls.seconds.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[1] : '');
            this.richText.controls.points.patchValue(this.questionEditData.points);
            this.richText.controls.explanation.patchValue(this.questionEditData.explanation);
            this.richText.controls.level.patchValue(this.questionEditData?.level);
            this.richText.controls.autograde.patchValue(this.questionEditData.audo_grade != 0);
            if (this.questionId == '55') {
                this.richText.controls.scoring_instruction.patchValue(this.questionEditData?.scoring_instruction ?? '');
            }
            const hints = this.richText.get('addHints');
            for (let i = hints.length; hints.length > 0; i--) {
                hints.removeAt(i);
            }
            for (let i = 0; i < this.questionEditData.hint.length; i++) {
                hints.push(this.createHint());
            }
            for (let i = 0; i < this.richText['controls'].addHints['controls'].length; i++) {
                this.richText['controls'].addHints['controls'][i]['controls']['hint'].patchValue(this.questionEditData.hint[i].hint);
            }
        }
        else if (this.questionId == '24') {
            this.passage.controls.passage_id.patchValue(this.questionEditData.subQuestions[0].passage_id);
            this.listPassageDetails.forEach((items) => {
                if (items.passage_id == this.questionEditData.subQuestions[0]?.passage_id) {
                    this.passage.controls.editorContext.patchValue(items.passage);
                }
            });
            this.addQuestionType = this.passage.get('addQuestionType');
            for (let i = 0; i < this.questionEditData.subQuestions.length - 1; i++) {
                this.addQuestionType.push(this.createQuestionType());
            }
            for (let i = 0; i < this.questionEditData.subQuestions.length; i++) {
                this.multiSelect = this.passage['controls'].addQuestionType['controls'][i]['controls'];
                if (this.questionEditData.subQuestions[i].question_type_id == 1 || this.questionEditData.subQuestions[i].question_type_id == 2) {
                    for (let j = this.multiSelect.addMultipleChoice.length; this.multiSelect.addMultipleChoice.length > 0; j--) {
                        this.multiSelect.addMultipleChoice.removeAt(j);
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].options.length; j++) {
                        this.multiSelect.addMultipleChoice.push(this.createMultiple());
                    }
                    this.multiSelect.selectType.patchValue('MultiChoice');
                    this.multiSelect.points.patchValue(this.questionEditData.subQuestions[i].points);
                    this.multiSelect.explanation.patchValue(this.questionEditData.subQuestions[i].explanation);
                    this.multiSelect.multiResponse.patchValue(this.questionEditData.subQuestions[i].multiple_response != 0);
                    this.multiSelect.level.patchValue(this.questionEditData.subQuestions[i].level);
                    this.multiSelect.autograde.patchValue(this.questionEditData.subQuestions[i].audo_grade != '0');
                    const hint = this.passage['controls'].addQuestionType['controls'][i]['controls'].addHints;
                    for (let j = 0; j < this.questionEditData.subQuestions[i].hint.length - 1; j++) {
                        hint.push(this.createHint());
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].hint.length; j++) {
                        this.multiSelect.addHints['controls'][j]['controls']['hint'].patchValue(this.questionEditData.subQuestions[i].hint[j].hint);
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].options.length; j++) {
                        this.multiSelect.addMultipleChoice['controls'][j]['controls']['option'].patchValue(this.questionEditData.subQuestions[i].options[j].options);
                        this.multiSelect.addMultipleChoice['controls'][j]['controls']['active'].patchValue(this.questionEditData.subQuestions[i].answer[j].correctActive);
                        this.multiSelect.addMultipleChoice['controls'][j]['controls']['selectOption'].patchValue(this.questionEditData.subQuestions[i].answer[j].correctAnswer);
                    }
                }
                else if (this.questionEditData.subQuestions[i].question_type_id == 5 || this.questionEditData.subQuestions[i].question_type_id == 7) {
                    for (let j = this.multiSelect.addMultipleChoice.length; this.multiSelect.addMultipleChoice.length > 0; j--) {
                        this.multiSelect.addMultipleChoice.removeAt(j);
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].options.length; j++) {
                        this.multiSelect.addMultipleChoice.push(this.createMultiple());
                    }
                    for (let j = this.multiSelect.addMatchTableChoose.length; this.multiSelect.addMatchTableChoose.length > 0; j--) {
                        this.multiSelect.addMatchTableChoose.removeAt(j);
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].answer.length; j++) {
                        this.multiSelect.addMatchTableChoose.push(this.createMatchChoose());
                    }
                    this.multiSelect.selectType.patchValue('TrueOrFalse');
                    if (this.questionEditData.subQuestions[i].editor_type == 1) {
                        this.multiSelect.chooseType.patchValue('text');
                    }
                    else {
                        this.multiSelect.chooseType.patchValue('math');
                    }
                    this.multiSelect.points.patchValue(this.questionEditData.subQuestions[i].points);
                    this.multiSelect.explanation.patchValue(this.questionEditData.subQuestions[i].explanation);
                    this.multiSelect.multiResponse.patchValue(this.questionEditData.subQuestions[i].multiple_response != 0);
                    this.multiSelect.autograde.patchValue(this.questionEditData.subQuestions[i].audo_grade != 0);
                    this.multiSelect.level.patchValue(this.questionEditData.subQuestions[i].level);
                    const hint = this.passage['controls'].addQuestionType['controls'][i]['controls'].addHints;
                    for (let j = 0; j < this.questionEditData.subQuestions[i].hint.length - 1; j++) {
                        hint.push(this.createHint());
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].hint.length; j++) {
                        this.multiSelect.addHints['controls'][j]['controls']['hint'].patchValue(this.questionEditData.subQuestions[i].hint[j].hint);
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].options.length; j++) {
                        this.multiSelect.addMultipleChoice['controls'][j]['controls']['option'].patchValue(this.questionEditData.subQuestions[i].options[j].options);
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].answer.length; j++) {
                        this.multiSelect.addMatchTableChoose['controls'][j]['controls']['option'].patchValue(this.questionEditData.subQuestions[i].answer[j]);
                    }
                    if (this.questionEditData.subQuestions[i].question_type_id == 5) {
                        for (let j = 0; j < this.questionEditData.subQuestions[i].heading_option.length; j++) {
                            for (let k = 0; k < this.questionEditData.subQuestions[i].options.length; k++) {
                                if (this.questionEditData.subQuestions[i].heading_option[j].correctActive == k) {
                                    this.multiSelect.addMultipleChoice['controls'][j]['controls']['active'].patchValue(k);
                                }
                            }
                            console.log(this.multiSelect.addMultipleChoice.value, 'dhshdhs');
                        }
                    }
                    else if (this.questionEditData?.subQuestions[i].question_type_id == 7) {
                        for (let j = 0; j < this.questionEditData?.subQuestions[i].heading_option.length; j++) {
                            for (let k = 0; k < this.questionEditData.subQuestions[i].options.length; k++) {
                                if (this.questionEditData.subQuestions[i].heading_option[j].correctActive == k) {
                                    for (let l = 0; l < this.questionEditData.subQuestions[i].answer.length; l++) {
                                        if (this.questionEditData.subQuestions[i].heading_option[j].correctAnswer == l) {
                                            this.multiSelect.addMultipleChoice['controls'][k]['controls']['selectOption'].patchValue(l);
                                            this.multiSelect.addMultipleChoice['controls'][k]['controls']['active'].patchValue(k);
                                            if (this.correctChoiceMatchValue[i] == null) {
                                                this.correctChoiceMatchValue[i] = { sub: [] };
                                            }
                                            this.correctChoiceMatchValue[i].sub.push({
                                                correctOption: this.multiSelect.addMultipleChoice['controls'][k]['controls']['option'].value,
                                                correctAnswer: this.multiSelect.addMultipleChoice['controls'][k]['controls']['selectOption'].value,
                                                correctActive: this.multiSelect.addMultipleChoice['controls'][k]['controls']['active'].value,
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    }
                    setTimeout(() => {
                        if (this.questionEditData.subQuestions[i].question_type_id == 5) {
                            for (let j = 0; j < this.questionEditData.subQuestions[i].heading_option.length; j++) {
                                for (let k = 0; k < this.questionEditData.subQuestions[i].options.length; k++) {
                                    if (this.questionEditData.subQuestions[i].heading_option[j].correctActive == k) {
                                        document.getElementById(i + 'passage' + j + 'chooseSingle' + k).setAttribute('checked', 'true');
                                    }
                                }
                                console.log(this.multiSelect.addMultipleChoice.value, 'dhshdhs');
                            }
                        }
                        else if (this.questionEditData?.subQuestions[i].question_type_id == 7) {
                            for (let j = 0; j < this.questionEditData?.subQuestions[i].heading_option.length; j++) {
                                for (let k = 0; k < this.questionEditData.subQuestions[i].options.length; k++) {
                                    if (this.questionEditData.subQuestions[i].heading_option[j].correctActive == k) {
                                        for (let l = 0; l < this.questionEditData.subQuestions[i].answer.length; l++) {
                                            if (this.questionEditData.subQuestions[i].heading_option[j].correctAnswer == l) {
                                                document.getElementById(i + 'passage' + k + 'chooseMulti' + l).setAttribute('checked', 'true');
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }, 2000);
                }
                else if (this.questionEditData.subQuestions[i].question_type_id == 10) {
                    this.multiSelect.selectType.patchValue('textEntry');
                    const hint = this.multiSelect.addHints;
                    for (let j = 0; j < this.questionEditData.subQuestions[i].hint.length - 1; j++) {
                        hint.push(this.createHint());
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].hint.length; j++) {
                        this.multiSelect.addHints['controls'][j]['controls']['hint'].patchValue(this.questionEditData.subQuestions[i].hint[j].hint);
                    }
                    if (this.questionEditData.subQuestions[i].editor_type == 1) {
                        this.multiSelect.chooseType.patchValue('text');
                    }
                    else {
                        this.multiSelect.chooseType.patchValue('math');
                    }
                    this.multiSelect.level.patchValue(this.questionEditData.subQuestions[i].level);
                    if (this.questionEditData.subQuestions[i].answer.length != 0) {
                        this.inputCountPassage = this.questionEditData.subQuestions[i].answer.length;
                        if (this.questionEditData.subQuestions[i].editor_type == 1) {
                            this.passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value = 'text';
                        }
                        else {
                            this.passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value = 'math';
                        }
                    }
                    else {
                        this.inputCountPassage = 0;
                    }
                    // setTimeout(() => {
                    //     this.inputArray = this.questionEditData.subQuestions[i].options;
                    // }, 1000);
                    // console.log(this.inputArray, 'this.inputArray[i].datas');
                    this.multiSelect.explanation.patchValue(this.questionEditData.subQuestions[i].explanation);
                    this.multiSelect.points.patchValue(this.questionEditData.subQuestions[i].points);
                    this.multiSelect.autograde.patchValue(this.questionEditData.subQuestions[i].audo_grade != 0);
                    if (this.selectOptionHeader == 'edit') {
                    }
                    else {
                        this.questionArray[i].content = this.questionEditData.subQuestions[i].question;
                    }
                }
                else if (this.questionEditData.subQuestions[i].question_type_id == 20) {
                    this.multiSelect.selectType.patchValue('essay');
                    const hint = this.multiSelect.addHints;
                    for (let j = 0; j < this.questionEditData.subQuestions[i].hint.length - 1; j++) {
                        hint.push(this.createHint());
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].hint.length; j++) {
                        this.multiSelect.addHints['controls'][j]['controls']['hint'].patchValue(this.questionEditData.subQuestions[i].hint[j].hint);
                    }
                    this.multiSelect.level.patchValue(this.questionEditData.subQuestions[i].level);
                    this.multiSelect.explanation.patchValue(this.questionEditData.subQuestions[i].explanation);
                    this.multiSelect.points.patchValue(this.questionEditData.subQuestions[i].points);
                    this.multiSelect.autograde.patchValue(this.questionEditData.subQuestions[i].audo_grade != 0);
                }
                else if (this.questionEditData.subQuestions[i].question_type_id == 16) {
                    this.multiSelect.selectType.patchValue('sortList');
                    this.multiSelect.level.patchValue(this.questionEditData.subQuestions[i].level);
                    this.multiSelect.source.patchValue(this.questionEditData.subQuestions[i].source);
                    this.multiSelect.target.patchValue(this.questionEditData.subQuestions[i].target);
                    this.multiSelect.explanation.patchValue(this.questionEditData.subQuestions[i].explanation);
                    this.multiSelect.points.patchValue(this.questionEditData.subQuestions[i].points);
                    const hint = this.multiSelect.addHints;
                    for (let j = 0; j < this.questionEditData.subQuestions[i].hint.length - 1; j++) {
                        hint.push(this.createHint());
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].hint.length; j++) {
                        this.multiSelect.addHints['controls'][j]['controls']['hint'].patchValue(this.questionEditData.subQuestions[i].hint[j].hint);
                    }
                    for (let j = this.multiSelect.addMultipleChoice.length; this.multiSelect.addMultipleChoice.length > 0; j--) {
                        this.multiSelect.addMultipleChoice.removeAt(j);
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].options.length; j++) {
                        this.multiSelect.addMultipleChoice.push(this.createMultiple());
                    }
                    for (let j = this.multiSelect.addMultipleChoose.length; this.multiSelect.addMultipleChoose.length > 0; j--) {
                        this.multiSelect.addMultipleChoose.removeAt(j);
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].answer.length; j++) {
                        this.multiSelect.addMultipleChoose.push(this.createSortChoose());
                    }
                    for (let j = this.multiSelect.addMultipleSource.length; this.multiSelect.addMultipleSource.length > 0; j--) {
                        this.multiSelect.addMultipleSource.removeAt(j);
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].options.length; j++) {
                        this.multiSelect.addMultipleSource.push(this.createMultipleSource());
                    }
                    for (let j = this.multiSelect.addMultipleTarget.length; this.multiSelect.addMultipleTarget.length > 0; j--) {
                        this.multiSelect.addMultipleTarget.removeAt(j);
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].answer.length; j++) {
                        this.multiSelect.addMultipleTarget.push(this.createMultipleTarget());
                    }
                    // this.passageQuestionEditor[i].editor.setContent(this.questionEditData.subQuestions[i].question);
                    for (let j = 0; j < this.questionEditData.subQuestions[i].options.length; j++) {
                        this.multiSelect.addMultipleChoice['controls'][j]['controls']['option'].patchValue(this.questionEditData.subQuestions[i].options[j].options);
                        this.multiSelect.addMultipleSource['controls'][j]['controls']['option'].patchValue(this.questionEditData.subQuestions[i].options[j].options);
                    }
                    for (let k = 0; k < this.questionEditData.subQuestions[i].answer.length; k++) {
                        this.multiSelect.addMultipleChoose['controls'][k]['controls']['selectOption'].patchValue(this.questionEditData.subQuestions[i].answer[k].correctAnswer);
                        this.multiSelect.addMultipleTarget['controls'][k]['controls']['selectOption'].patchValue(this.questionEditData.subQuestions[i].answer[k].correctAnswer);
                    }
                }
                this.multiSelect.chooseType.patchValue(this.questionEditData.subQuestions[i].editor_type == 1 ? 'text' : 'math');
                this.multiSelect.question_topic_id.patchValue(this.questionEditData.subQuestions[i]?.question_topic_id);
                this.enteredSkillList = this.questionEditData.subQuestions[i].skill ?? [];
                this.commonService('questionSubTopic', this.passage['controls'].addQuestionType['controls'][i], this.questionEditData.subQuestions[i].question_sub_topic_id ?
                    this.questionEditData.subQuestions[i].question_sub_topic_id : '');
                this.multiSelect.question_standard.patchValue(this.questionEditData.subQuestions[i]?.question_standard);
                const predicted_solving_time = this.questionEditData.subQuestions[i]?.predicted_solving_time ? this.questionEditData.subQuestions[i]?.predicted_solving_time.split(':') : [];
                this.multiSelect.minutes.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[0] : '');
                this.multiSelect.seconds.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[1] : '');
            }
        }
        else if (this.questionId == '28') {
            this.highlight.controls.points.patchValue(this.questionEditData.points);
            this.highlight.controls.level.patchValue(this.questionEditData?.level);
            this.highlight.controls.autograde.patchValue(this.questionEditData.audo_grade != 0);
        }
        else if (['40', '41'].indexOf(this.questionId) > -1) {
            this.graphForm.controls.question_topic_id.patchValue(this.questionEditData?.question_topic_id);
            this.enteredSkillList = this.questionEditData.skill ?? [];
            this.commonService('questionSubTopic', this.graphForm, this.questionEditData.question_sub_topic_id ?
                this.questionEditData.question_sub_topic_id : '');
            this.graphForm.controls.question_standard.patchValue(this.questionEditData?.question_standard);
            const predicted_solving_time = this.questionEditData?.predicted_solving_time ? this.questionEditData?.predicted_solving_time.split(':') : [];
            this.graphForm.controls.minutes.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[0] : '');
            this.graphForm.controls.seconds.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[1] : '');
            this.graphForm.controls.level.patchValue(this.questionEditData?.level);
            this.graphForm.controls.points.patchValue(this.questionEditData.points);
        }
    }
    passageSelect(event) {
        this.passageContent ? this.passageContent.editor.setContent('') : '';
        this.getPassageValue(event?.target.value);
    }
    getPassageValue(passageid, calledType = '') {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            passage_id: passageid
        };
        this.auth.postService(payload, 'content/listPassage').subscribe((successData) => {
            if (successData.IsSuccess) {
                const findPassage = successData.ResponseObject.find(value => value.passage_id == passageid);
                if (findPassage && findPassage != '') {
                    console.log(findPassage.passage, 'findPassage.passage');
                    this.passage.controls.passage_id.patchValue(findPassage.passage_id);
                    this.passage.controls.editorContext.patchValue(findPassage.passage);
                    this.passageContent ? this.passageContent.editor.setContent(findPassage.passage) : '';
                }
                if (calledType != '') {
                    this.listPassageDetails.unshift({
                        passage_id: findPassage.passage_id,
                        title: findPassage.title
                    });
                }
            }
        }, (error) => console.error(error, 'error_passgaeList'));
    }
    getPassageContent(event) {
        this.passageContent = event;
    }
    parseVal(val) {
        if (val != '' && val != null) {
            return parse(val);
        }
        else {
            return false;
        }
    }
    transform(v) {
        return this.sanitizer.bypassSecurityTrustHtml(v);
    }
    async patchInit() {
        this.hintArray = this.questionEditData.hint ? this.questionEditData.hint : [];
        this.hintArray.push({ hint: '' });
        if (this.questionId == '1' || this.questionId == '2') {
            this.questionValue = this.questionEditData.question;
            this.inputType = this.questionEditData.editor_type == 1 ? 'text' : 'math';
        }
        else if (this.questionId == '5' || this.questionId == '7') {
            this.questionValue = this.questionEditData.question;
            this.inputType = this.questionEditData.editor_type == 1 ? 'text' : 'math';
        }
        else if (this.questionId == '10') {
            this.inputArray = this.questionEditData.options;
        }
        else if (this.questionId == '16') {
            this.questionValue = this.questionEditData.question;
        }
        else if (this.questionId == '24') {
            this.questionEditData.subQuestions.forEach((items, i) => {
                if (items.question_type_id == 10) {
                    this.inputArray[i] = { datas: items.options };
                    console.log(this.inputArray[i], 'this.inputArray[i]');
                }
                else if (items.question_type_id == '20') {
                    items.answer.forEach((answerData, index) => {
                        if (index == 0) {
                            this.passage['controls'].addQuestionType['controls'][i]['controls']['repeatAnswerFreeText']['controls'][index]['controls']['correct'].patchValue(answerData.correctAnswer);
                        }
                        else {
                            this.addNewCorrectAnswerForFreeText(this.passage['controls'].addQuestionType['controls'][i]['controls']['repeatAnswerFreeText'], answerData.correctAnswer);
                        }
                    });
                }
            });
        }
        else if (this.questionId == '40' || this.questionId == '41') {
            this.graphBoardValue = parse(this.questionEditData.answer[0].correctAnswer);
        }
        else if (this.questionId == '55') {
            this.writingQuestionEditor = this.questionEditData.question;
            this.writingAnswerEditor = this.questionEditData.answer[0].correctAnswer;
        }
        else if (this.questionId == '20') {
            this.questionEditData.answer.forEach((items, index) => {
                if (index == 0) {
                    this.richText.get('repeatAnswerFreeText')['controls'][index]['controls']['correct'].patchValue(items.correctAnswer);
                }
                else {
                    this.addNewCorrectAnswerForFreeText(this.richText.get('repeatAnswerFreeText'), items.correctAnswer);
                }
            });
        }
    }
    onEditorReady(event) {
        console.log(Array.from(event.ui.componentFactory.names()));
        const toolbarItems = Array.from(event.ui.componentFactory.names());
        console.log(toolbarItems, 'toolbarss');
        // // this.editorConfig.toolbar.items = [];
        // console.log(this.editorConfig.toolbar.items ,'item')
        // toolbarItems.forEach((item) => {
        //     console.log(item ,'item')
        //     this.editorConfig.toolbar.items.push(item);
        // });
        // console.log(this.editorConfig);
    }
    // Create passage
    shuffle(arra1) {
        var ctr = arra1.length, temp, index;
        // While there are elements in the array
        while (ctr > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * ctr);
            // Decrease ctr by 1
            ctr--;
            // And swap the last element with it
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    }
    selectHeader(type) {
        console.log(type, 'preview');
        if (type == 'preview') {
            for (let i = 0; i < this.multipleChoice['controls'].addMultipleChoice['controls'].length; i++) {
                this.multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['previewActive'].patchValue('');
            }
            console.log(this.matchTable.get('addMatchTableChoose')['controls'], 'dasdasd');
            this.optionArray.forEach((item, index) => {
                if (document.getElementById('myIdd' + index) != null) {
                    document.getElementById('myIdd' + index).innerHTML = item.options;
                }
            });
            this.chooseArray.forEach((item, index) => {
                document.getElementById('columnIdd' + index).innerHTML = item;
            });
            this.hintArray1 = JSON.stringify(this.hintArray);
            if (this.questionId == '24') {
                console.log(this.passage.get('addQuestionType')['controls'], 'sdsadasdsadasdsadsada');
                this.passage.get('addQuestionType')['controls'].forEach((items, index) => {
                    console.log(items, 'items');
                    if (items.controls.selectType.value == 'TrueOrFalse') {
                        console.log('functionCalled');
                        setTimeout(() => {
                            if (!items.controls.multiResponse.value) {
                                items.get('addMultipleChoice')['controls'].forEach((items1, index1) => {
                                    items.get('addMatchTableChoose')['controls'].forEach((items2, index2) => {
                                        document.getElementById(index + 'passage' + index1 + 'chooseSingle' + index2).setAttribute('checked', 'true');
                                    });
                                });
                                // for (let j = 0; j < this.questionEditData.subQuestions[i].heading_option.length; j++) {
                                //     for (let k = 0; k < this.questionEditData.subQuestions[i].options.length; k++) {
                                //         if (this.questionEditData.subQuestions[i].heading_option[j].correctActive == k) {
                                //             document.getElementById(i + 'passage' + j + 'chooseSingle' + k).setAttribute('checked' , 'true');
                                //         }
                                //     }
                                //     console.log(this.multiSelect.addMultipleChoice.value, 'dhshdhs');
                                // }
                            }
                            else if (items.controls.multiResponse.value) {
                                items.get('addMultipleChoice')['controls'].forEach((items1, index1) => {
                                    items.get('addMatchTableChoose')['controls'].forEach((items2, index2) => {
                                        document.getElementById(index + 'passage' + index1 + 'chooseMulti' + index2).setAttribute('checked', 'true');
                                    });
                                });
                                // for (let j = 0; j < this.questionEditData?.subQuestions[i].heading_option.length; j++) {
                                //     for (let k = 0; k < this.questionEditData.subQuestions[i].options.length; k++) {
                                //         if (this.questionEditData.subQuestions[i].heading_option[j].correctActive == k) {
                                //             for (let l = 0; l < this.questionEditData.subQuestions[i].answer.length; l++) {
                                //                 if (this.questionEditData.subQuestions[i].heading_option[j].correctAnswer == l) {
                                //                     document.getElementById(i + 'passage' + k + 'chooseMulti' + l).setAttribute('checked' , 'true');
                                //                 }
                                //             }
                                //         }
                                //     }
                                // }
                            }
                        }, 2000);
                    }
                });
            }
        }
        else if (type == 'sortpreview') {
            for (let i = 0; i < this.matchSort['controls'].addMultipleChoice['controls'].length; i++) {
                for (let j = 0; j < this.matchSort['controls'].addMultipleChoose['controls'].length; j++) {
                    this.matchSort['controls'].matchSortSource['controls'][i]['controls']['option'].patchValue(this.matchSort['controls'].addMultipleChoice['controls'][i]['controls']['option'].value);
                    this.matchSort['controls'].matchSortTarget['controls'][j]['controls']['selectOption'].patchValue(this.matchSort['controls'].addMultipleChoose['controls'][j]['controls']['selectOption'].value);
                }
            }
            this.sourceArr = [];
            this.targetArr = [];
            this.targetArr1 = [];
            for (let i = 0; i < this.matchSort.get('matchSortSource')['controls'].length; i++) {
                this.sourceArr.push({
                    value: this.matchSort.get('matchSortSource')['controls'][i]['controls'].option.value,
                    index: i,
                });
            }
            for (let i = 0; i < this.matchSort.get('matchSortTarget')['controls'].length; i++) {
                this.targetArr.push({
                    value: this.matchSort.get('matchSortTarget')['controls'][i]['controls'].selectOption.value,
                    index: i,
                    valid: '0'
                });
                this.targetArr1.push({
                    value: this.matchSort.get('matchSortTarget')['controls'][i]['controls'].selectOption.value,
                    index: i,
                    valid: '0'
                });
            }
            this.targetArr = this.shuffle(this.targetArr);
        }
        else if (type == 'textpreview') {
            // this.child.manuallTrigger();
        }
        else if (type == 'edit') {
            console.log(this.fillDropDown.get('addDropDownOption')['controls'], 'dasdasd');
            if (['20', '55'].indexOf(this.questionId) > -1) {
                this.richPreviewValue = this.contextValue;
                this.answerRichValue = this.answerValue;
            }
            else if (this.questionId == '21') {
                this.plainPreviewValue = this.contextValue;
                this.answerRichValue = this.answerValue;
            }
            else if (this.questionId == '22') {
                this.shortPreviewValue = this.contextValue;
                this.answerRichValue = this.answerValue;
            }
            else if (this.questionId == '28') {
                this.richPreviewValue = this.contextValue;
            }
        }
        else if (type == 'richpreview') {
            setTimeout(() => {
                if (this.questionId == '20') {
                    if (this.type == 'add') {
                        this.richPreviewValue = this.contextValue;
                        this.answerHighlightValue1.setContent(this.writingAnswerEditor.content);
                    }
                    else if (this.type == 'edit') {
                        if (this.writingQuestionEditor.content == '') {
                            this.richPreviewValue = this.questionEditData.question;
                            this.answerHighlightValue1.setContent(this.questionEditData.answer[0]?.correctAnswer);
                            // this.answerHighlightValue1 = this.questionEditData.answer[0]?.correctAnswer;
                        }
                        else {
                            this.richPreviewValue = this.writingQuestionEditor.content;
                            this.answerHighlightValue1.setContent(this.writingAnswerEditor.content);
                        }
                    }
                    this.selectOptionHeader = 'richpreview';
                    console.log(this.answerHighlightValue1, 'answerhihgr');
                }
            }, 1000);
        }
        else if (type == 'plainpreview') {
            this.selectOptionHeader = 'plainpreview';
            if (this.type == 'add') {
                this.plainPreviewValue = this.contextValue;
            }
            else if (this.type == 'edit') {
                if (this.writingQuestionEditor.content == '') {
                    this.plainPreviewValue = this.questionEditData.question;
                }
                else {
                    this.plainPreviewValue = this.writingQuestionEditor.content;
                }
            }
        }
        else if (type == 'shortpreview') {
            this.selectOptionHeader = 'shortpreview';
            if (this.type == 'add') {
                this.shortPreviewValue = this.contextValue;
            }
            else if (this.type == 'edit') {
                if (this.writingQuestionEditor.content == '') {
                    this.shortPreviewValue = this.questionEditData.question;
                }
                else {
                    this.shortPreviewValue = this.writingQuestionEditor.content;
                }
            }
        }
        else if (type == 'highligthPreview') {
            this.selectOptionHeader = 'highligthPreview';
            this.answerKeyValue = this.answerHighlightValue;
            if (this.type == 'add') {
                this.answertValue = this.contextValue;
            }
            else if (this.type == 'edit') {
                if (this.writingQuestionEditor.content == '') {
                    this.answertValue = this.questionEditData.question;
                }
                else {
                    this.answertValue = this.writingQuestionEditor.content;
                }
            }
        }
        else if (type == 'textInputPreview') {
            this.selectOptionHeader = 'textInputPreview';
            if (this.type == 'add') {
                this.textValue = this.contextValue;
            }
            else if (this.type == 'edit') {
                if (this.textEntryPreview.content == '') {
                    this.textValue = this.questionEditData.question;
                }
                else {
                    this.textValue = this.textEntryPreview.content;
                }
            }
            this.inputArray.forEach((items, index) => {
                document.getElementById('text-input' + index).innerHTML = items.options[0].value;
            });
        }
        else if (type == 'dropInputPreview') {
            this.selectOptionHeader = 'dropInputPreview';
            if (this.type == 'add') {
                this.dropValue = this.contextValue;
            }
            else if (this.type == 'edit') {
                if (this.questionValue.content == '') {
                    this.dropValue = this.questionEditData.question;
                }
                else {
                    this.dropValue = this.questionValue.content;
                }
            }
            this.fillDropDown['controls'].addDropDownOption.value.forEach((items, index) => {
                let valueNotSelected = true;
                items.options.forEach((items1) => {
                    if (items1.selected == 'true') {
                        valueNotSelected = false;
                        document.getElementById('dropdownPre' + index).innerHTML = items1.listOption;
                    }
                    if (valueNotSelected) {
                        document.getElementById('dropdownPre' + index).innerHTML = 'Select Answer';
                    }
                });
            });
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.editPassageContent = false;
        this.selectOptionHeader = type;
        this.clickEvent();
    }
    cancelAction() {
        if (this.type == 'add') {
            this.router.navigate(['/content-text-resource/add-questions/add']);
        }
        else if (this.type == 'edit') {
            this.auth.setSessionData('cfs_question_no', '0');
            this.router.navigate(['/content-text-resource/text-assignment/qEdit']);
        }
    }
    selectionHeaderPassage(type) {
        this.selectOptionHeader = type;
        this.multihight = false;
        this.clickEvent();
        // hide passage in match sort list
        // this.sourcePassageArr = [];
        // this.targetPassageArr = [];
        // this.targetPassageArr1 = [];
        // let myIndex : number = 0;
        // for (let i = 0; i < this.passage['controls'].addQuestionType['controls'].length; i++) {
        //     if (this.passage['controls'].addQuestionType['controls'][i]['controls'].selectType.value == 'sortList') {
        //         this.targetPassageArr1[myIndex] = [];
        //         this.targetPassageArr[myIndex] = [];
        //         this.sourcePassageArr[myIndex] = [];
        //         this.multiSelect = this.passage['controls'].addQuestionType['controls'][i]['controls'] as FormArray;
        //         for (let i = 0; i < this.multiSelect.addMultipleChoice['controls'].length; i++) {
        //             for (let j = 0; j < this.multiSelect.addMultipleChoose['controls'].length; j++) {
        //                 this.multiSelect.addMultipleSource['controls'][i]['controls']['option'].patchValue( this.multiSelect.addMultipleChoice['controls'][i]['controls']['option'].value);
        //                 this.multiSelect.addMultipleTarget['controls'][j]['controls']['selectOption'].patchValue( this.multiSelect.addMultipleChoose['controls'][j]['controls']['selectOption'].value);
        //             }
        //         }
        //
        //         console.log( this.multiSelect.addMultipleSource['controls']);
        //         console.log( this.multiSelect.addMultipleTarget['controls']);
        //         let sourceQue =  this.multiSelect.addMultipleSource['controls'];
        //         let sourceQue1 =  this.multiSelect.addMultipleTarget['controls'];
        //         console.log(sourceQue , 'queeee');
        //         console.log(sourceQue1 , 'queeee1111');
        //         for (let i = 0; i < this.multiSelect.addMultipleSource['controls'].length; i++) {
        //             this.sourcePassageArr[myIndex].push({
        //                 value : this.multiSelect.addMultipleSource['controls'][i]['controls'].option.value ,
        //                 index: i ,
        //             });
        //             // this.sourcePassageArr.push(
        //             //     {
        //             //         value : this.multiSelect.addMultipleSource['controls'][i]['controls'].option.value ,
        //             //         index: i ,
        //             //     });
        //         }
        //
        //
        //         for (let i = 0; i < this.multiSelect.addMultipleTarget['controls'].length; i++) {
        //             this.targetPassageArr[myIndex].push({
        //                     value : this.multiSelect.addMultipleTarget['controls'][i]['controls'].selectOption.value ,
        //                     index: i ,
        //                     valid: '0'
        //                 });
        //             this.targetPassageArr1[myIndex].push({
        //                     value : this.multiSelect.addMultipleTarget['controls'][i]['controls'].selectOption.value ,
        //                     index: i ,
        //                     valid: '0'
        //                 });
        //         }
        //
        //         myIndex += 1;
        //     }
        // }
        // this.targetPassageArr = this.shuffle(this.targetPassageArr);
        //
        // console.log(this.sourcePassageArr, 'sourcePassageArr');
        // console.log(this.targetPassageArr, 'targetPassageArr');
        // console.log(this.targetPassageArr1, 'targetPassageArr1');
    }
    appendPreviewInput() {
        // let val = this.editorEvent.split(' ');
        // this.inputCount = 0;
        // this.dropDownCount = 0;
        // this.inputArray = [];
        // this.dropDownArray = [];
        // val.forEach((item , index) => {
        //     if(item == 'class="inputValue"'){
        //         this.inputCount += 1;
        //         this.inputArray.push({id : index + '-input' , index , value: 'a'});
        //     }else if(item == 'class="dropDownValue"'){
        //         this.dropDownCount += 1;
        //         this.dropDownArray.push({id : index + '-drop' , index , value: 'a'});
        //     }
        // });
        //
        // console.log(this.dropDownCount ,'dropDownCount')
        // console.log(this.addDropDownArr.controls.length ,'controls length')
        // if (this.addDropDownArr.controls.length == 0){
        //     for(let i= 0; i < this.dropDownCount; i++){
        //         this.addDropDownArr.push(this.createAddDropDownOption());
        //     }
        //     if (this.dropDownCount == 0 && this.addDropDownArr.controls.length){
        //         this.addDropDownArr.removeAt(0);
        //
        //     }
        // }else {
        //     let dif =this.dropDownArray.length - this.addDropDownArr.controls.length;
        //     console.log(dif ,'dif')
        //     for(let i= 0; i < dif; i++){
        //         this.addDropDownArr.push(this.createAddDropDownOption());
        //     }
        //     console.log(Math.sign(dif) , 'Math.sign(dif)');
        //     if (Math.sign(dif) == -1){
        //         for(let i= 0; i < Math.abs(dif); i++){
        //             this.addDropDownArr.removeAt(i);
        //         }
        //     }
        //
        // }
    }
    // number Validation
    numberValidate(event) {
        this.validationService.numberValidate(event);
    }
    contentQuestion() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.contentService.contentQuestion(data).subscribe((successData) => {
            if (successData.IsSuccess) {
                this.contentQuestionList = successData.ResponseObject;
            }
        }, (error) => {
            console.error(error, 'question_type');
        });
    }
    addChoice(type) {
        if (type == 'addMultipleChoice') {
            this.addMultipleChoice = this.multipleChoice.get('addMultipleChoice');
            this.addMultipleChoice.push(this.createMultiple());
        }
        else if (type == 'addMultipleHint') {
            this.addHints = this.multipleChoice.get('addHints');
            this.addHints.push(this.createHint());
        }
        else if (type == 'addMatchTable') {
            this.addMultipleChoice = this.matchTable.get('addMultipleChoice');
            this.addMultipleChoice.push(this.createMatch());
        }
        else if (type == 'matchTableChoose') {
            this.addMatchTableChoose = this.matchTable.get('addMatchTableChoose');
            this.addMatchTableChoose.push(this.createMatchChoose());
        }
        else if (type == 'addMatchTableHint') {
            this.addHints = this.matchTable.get('addHints');
            this.addHints.push(this.createHint());
        }
        else if (type == 'addMultipleSort') {
            this.addMultipleChoice = this.matchSort.get('addMultipleChoice');
            this.addMultipleChoice.push(this.createSort());
            this.addMultipleChoose = this.matchSort.get('addMultipleChoose');
            this.addMultipleChoose.push(this.createSortChoose());
            this.matchSortSource = this.matchSort.get('matchSortSource');
            this.matchSortSource.push(this.createSortSource());
            this.matchSortTarget = this.matchSort.get('matchSortTarget');
            this.matchSortTarget.push(this.createSortTarget());
        }
        else if (type == 'addSortHint') {
            this.addHints = this.matchSort.get('addHints');
            this.addHints.push(this.createHint());
        }
        else if (type == 'addRichHint') {
            this.addHints = this.richText.get('addHints');
            this.addHints.push(this.createHint());
        }
        else if (type == 'addPlainHint') {
            this.addHints = this.plainText.get('addHints');
            this.addHints.push(this.createHint());
        }
        else if (type == 'addShortHint') {
            this.addHints = this.shortText.get('addHints');
            this.addHints.push(this.createHint());
        }
        else if (type == 'addTextHint') {
            this.addHints = this.textEntry.get('addHints');
            this.addHints.push(this.createHint());
        }
        else if (type == 'addDropHint') {
            this.addHints = this.fillDropDown.get('addHints');
            this.addHints.push(this.createHint());
        }
        else if (type == 'addMore') {
            this.addQuestionType = this.passage.get('addQuestionType');
            this.addQuestionType.push(this.createQuestionType());
        }
        else if (type == 'addfillChoice') {
            this.addMultipleChoice = this.fillDropDown.get('addMultipleChoice');
            this.addMultipleChoice.push(this.createMatch());
        }
    }
    addDropDownFormArr(value) {
        value.push(this.createAddDropDownOptionList());
        this.addDropDownArr = this.fillDropDown.controls.addDropDownOption;
    }
    deleteDropDownFormArr(control, index) {
        control.removeAt(index);
        this.addDropDownArr = this.fillDropDown.controls.addDropDownOption;
    }
    getRandom() {
        return Math.random();
    }
    addChoicePassage(type, id) {
        this.random = this.getRandom();
        if (type == 'passageAddChoice') {
            this.addMultipleChoice = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMultipleChoice;
            this.addMultipleChoice.push(this.createMultiple());
        }
        else if (type == 'passageAddTableChoose') {
            this.addMultipleChoice = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMatchTableChoose;
            this.addMultipleChoice.push(this.createMatchChoose());
        }
        else if (type == 'passageAddHint') {
            this.addHints = this.passage['controls'].addQuestionType['controls'][id]['controls'].addHints;
            this.addHints.push(this.createHint());
        }
        else if (type == 'passageSort') {
            this.addMultipleChoice = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMultipleChoice;
            this.addMultipleChoice.push(this.createMultiple());
            this.addMultipleChoose = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMultipleChoose;
            this.addMultipleChoose.push(this.createSortChoose());
            this.addMultipleSource = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMultipleSource;
            this.addMultipleSource.push(this.createMultipleSource());
            this.addMultipleTarget = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMultipleTarget;
            this.addMultipleTarget.push(this.createMultipleTarget());
        }
    }
    deleteChoicePassage(type, id, index) {
        if (type == 'deletePassageChoice') {
            const control = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMultipleChoice;
            control.removeAt(index);
        }
        else if (type == 'deletePassageMatch') {
            const control = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMatchTableChoose;
            control.removeAt(index);
        }
        else if (type == 'deletePassageHints') {
            const control = this.passage['controls'].addQuestionType['controls'][id]['controls'].addHints;
            control.removeAt(index);
        }
        else if (type == 'deletePassageSort') {
            const control = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMultipleChoice;
            control.removeAt(index);
            const control1 = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMultipleChoose;
            control1.removeAt(index);
            const control2 = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMultipleSource;
            control2.removeAt(index);
            const control3 = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMultipleTarget;
            control3.removeAt(index);
        }
    }
    createQuestionType() {
        return this.formBuilder.group({
            addMultipleChoose: this.formBuilder.array([this.createSortChoose(), this.createSortChoose(), this.createSortChoose(), this.createSortChoose()]),
            addMultipleChoice: this.formBuilder.array([this.createMultiple(), this.createMultiple(), this.createMultiple(), this.createMultiple()]),
            addMultipleSource: this.formBuilder.array([this.createMultipleSource()]),
            addMultipleTarget: this.formBuilder.array([this.createMultipleTarget(), this.createMultipleTarget(), this.createMultipleTarget(), this.createMultipleTarget()]),
            addMatchTableChoose: this.formBuilder.array([this.createMatchChoose('True'), this.createMatchChoose('False')]),
            addHints: this.formBuilder.array([this.createHint()]),
            explanation: '',
            question: '',
            target: '',
            source: '',
            points: '1',
            chooseType: 'text',
            multiResponse: false,
            autograde: true,
            selectType: 'select',
            ignoreCase: '',
            level: '2',
            minutes: '',
            seconds: '',
            subject_id: null,
            question_topic_id: null,
            question_sub_topic_id: null,
            question_standard: null,
            repeatAnswerFreeText: this.formBuilder.array([this.createNewCorrectAnswer()])
        });
    }
    // Create Multiple Choice-Standard and Multi Selection
    createMultiple() {
        return this.formBuilder.group({
            option: '',
            selectOption: '',
            active: '',
            previewActive: ''
        });
    }
    // create Hint
    createHint() {
        return this.formBuilder.group({
            hint: ['', Validators.required]
        });
    }
    // create addDropDownOption
    createAddDropDownOption() {
        return this.formBuilder.group({
            options: this.formBuilder.array([this.createAddDropDownOptionList()]),
        });
    }
    createAddDropDownOptionList() {
        this.showForm = true;
        return this.formBuilder.group({
            listOption: [''],
            selected: ['false']
        });
    }
    // Create Match Table-Standard and Match Table-Labels
    createMatch() {
        return this.formBuilder.group({
            option: '',
            selectOption: '',
            active: ''
        });
    }
    createMatchChoose(optionvalue = '') {
        return this.formBuilder.group({
            option: optionvalue,
            selectOption: '',
            active: ''
        });
    }
    // Create Match & Sort List
    createSort() {
        return this.formBuilder.group({
            option: '',
            // selectOption: '',
            //   previewActive: ''
        });
    }
    createSortChoose() {
        return this.formBuilder.group({
            option: '',
            selectOption: '',
        });
    }
    createSortSource() {
        return this.formBuilder.group({
            option: '',
            // selectOption: '',
            //   previewActive: ''
        });
    }
    createSortTarget() {
        return this.formBuilder.group({
            // option: '',
            selectOption: '',
            //   previewActive: ''
        });
    }
    createMultipleSource() {
        return this.formBuilder.group({
            option: '',
            // selectOption: '',
            //   previewActive: ''
        });
    }
    createMultipleTarget() {
        return this.formBuilder.group({
            // option: '',
            selectOption: '',
            //   previewActive: ''
        });
    }
    // deleted all questions
    deletePassageSection(data, id) {
        this.passageDeleteData = data;
        this.passageDeleteid = id;
        this.modalRef = this.modalService.open(this.deletePassageQuestion);
    }
    deletePassage(data, id) {
        data.splice(id, 1);
        if (this.type == 'edit' && this.questionEditData.subQuestions[id]?.question_id) {
            this.questionDelete(id);
            this.questionEditData.subQuestions.splice(id, 1);
        }
        this.modalRef.close();
    }
    closeQuestion() {
        this.passageDeleteData = '';
        this.passageDeleteid = '';
        this.modalRef.close();
    }
    deleted(type, index) {
        if (type == 'deleteMultiple') {
            const control = this.multipleChoice.controls.addMultipleChoice;
            control.removeAt(index);
        }
        else if (type == 'deleteMultipleHint') {
            const control = this.multipleChoice.controls.addHints;
            control.removeAt(index);
        }
        else if (type == 'deleteMatchTable') {
            const control = this.matchTable.controls.addMultipleChoice;
            control.removeAt(index);
        }
        else if (type == 'deleteMatchTableChoose') {
            const control = this.matchTable.controls.addMatchTableChoose;
            control.removeAt(index);
        }
        else if (type == 'deleteMatchTableHint') {
            const control = this.matchTable.controls.addHints;
            control.removeAt(index);
        }
        else if (type == 'deleteSort') {
            const control = this.matchSort.controls.addMultipleChoice;
            const controlAnswer = this.matchSort.controls.addMultipleChoose;
            const controlSource = this.matchSort.controls.matchSortSource;
            const controlTarget = this.matchSort.controls.matchSortTarget;
            control.removeAt(index);
            controlAnswer.removeAt(index);
            controlSource.removeAt(index);
            controlTarget.removeAt(index);
        }
        else if (type == 'deleteSortHint') {
            const control = this.matchSort.controls.addHints;
            control.removeAt(index);
        }
        else if (type == 'deleteRichHint') {
            const control = this.richText.controls.addHints;
            control.removeAt(index);
        }
        else if (type == 'deleteTextHint') {
            const control = this.textEntry.controls.addHints;
            control.removeAt(index);
        }
        else if (type == 'deletePlainHint') {
            const control = this.plainText.controls.addHints;
            control.removeAt(index);
        }
        else if (type == 'deleteShortHint') {
            const control = this.shortText.controls.addHints;
            control.removeAt(index);
        }
    }
    multipleResponse(type, eve) {
        if (type == 'multipleChoiceCheck') {
            this.multipleChoice.controls.multiResponse.patchValue(eve.target.checked);
            if (eve.target.checked == true) {
                this.questionId = 2;
                for (let i = 0; i < this.multipleChoice['controls'].addMultipleChoice['controls'].length; i++) {
                    this.multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['active'].patchValue('');
                }
            }
            else {
                this.questionId = 1;
                for (let i = 0; i < this.multipleChoice['controls'].addMultipleChoice['controls'].length; i++) {
                    this.multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['active'].patchValue('');
                }
            }
        }
        else if (type == 'matchTableCheck') {
            this.multipleChoice.controls.multiResponse.patchValue(eve.target.checked);
            if (eve.target.checked == true) {
                this.questionId = 7;
                // for (let i = 0; i < this.matchTable['controls'].addMatchTableChoose['controls'].length; i++) {
                //   this.matchTable['controls'].addMatchTableChoose['controls'][i]['controls']['selectOption'].patchValue('');
                // }
            }
            else {
                this.questionId = 5;
                // for (let i = 0; i < this.matchTable['controls'].addMatchTableChoose['controls'].length; i++) {
                //   this.matchTable['controls'].addMatchTableChoose['controls'][i]['controls']['selectOption'].patchValue('');
                // }
            }
        }
        else if (type == 'passageMultipleChoice') {
            this.passage['controls'].addQuestionType['controls'][0]['controls'].multiResponse.patchValue(eve.target.checked);
        }
    }
    getAddChoiceAnswer(eve, index, type) {
        if (type == 'multipleChoiceChoose') {
            if (this.multipleChoice.controls.multiResponse.value == true) {
                this.multipleChoice['controls'].addMultipleChoice['controls'][index]['controls']['selectOption'].patchValue(eve.target.checked ? 'on' : '');
                this.multipleChoice['controls'].addMultipleChoice['controls'][index]['controls']['active'].patchValue(eve.target.checked ? 1 : 0);
            }
            else {
                for (let i = 0; i < this.multipleChoice['controls'].addMultipleChoice['controls'].length; i++) {
                    this.multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['active'].patchValue(0);
                    this.multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['selectOption'].patchValue('');
                    if (index == i) {
                        this.multipleChoice['controls'].addMultipleChoice['controls'][index]['controls']['selectOption'].patchValue(eve.target.value);
                        this.multipleChoice['controls'].addMultipleChoice['controls'][index]['controls']['active'].patchValue(1);
                    }
                }
            }
        }
        else if (type == 'multipleChoiceChoosePreview') {
            if (this.multipleChoice.controls.multiResponse.value == true) {
                this.multipleChoice['controls'].addMultipleChoice['controls'][index]['controls']['previewActive'].patchValue(1);
            }
            else {
                for (let i = 0; i < this.multipleChoice['controls'].addMultipleChoice['controls'].length; i++) {
                    this.multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['previewActive'].patchValue(0);
                    if (index == i) {
                        this.multipleChoice['controls'].addMultipleChoice['controls'][index]['controls']['previewActive'].patchValue(1);
                    }
                }
            }
        }
        else if (type == 'matchTableChooseSingle') {
            for (let i = 0; i < this.matchTable['controls'].addMultipleChoice['controls'].length; i++) {
                if (index == i) {
                    if (this.inputType == 'math') {
                        this.matchTable['controls'].addMultipleChoice['controls'][index]['controls']['selectOption'].patchValue(this.optionArray[eve].options);
                    }
                    else {
                        this.matchTable['controls'].addMultipleChoice['controls'][index]['controls']['selectOption'].patchValue(this.matchTable['controls'].addMultipleChoice['controls'][i]['controls']['option'].value);
                    }
                    this.matchTable['controls'].addMultipleChoice['controls'][index]['controls']['active'].patchValue(eve);
                }
            }
        }
        else if (type == 'matchTableChooseMultiple') {
            for (let i = 0; i < this.matchTable['controls'].addMultipleChoice['controls'].length; i++) {
                if (index == i) {
                    this.noPush = false;
                    this.matchTable['controls'].addMultipleChoice['controls'][index]['controls']['selectOption'].patchValue(eve);
                    this.matchTable['controls'].addMultipleChoice['controls'][index]['controls']['active'].patchValue(index);
                    for (let j = 0; j < this.correctChoiceMatchValue.length; j++) {
                        if (this.correctChoiceMatchValue[j].correctAnswer == eve && this.correctChoiceMatchValue[j].correctActive == index) {
                            this.noPush = true;
                            this.correctChoiceMatchValue.forEach((item, index) => {
                                if (j == index) {
                                    // this.matchTable['controls'].addMultipleChoice['controls'][i]['controls']['option'].patchValue('');
                                    this.matchTable['controls'].addMultipleChoice['controls'][i]['controls']['selectOption'].patchValue('');
                                    this.matchTable['controls'].addMultipleChoice['controls'][i]['controls']['active'].patchValue('');
                                }
                            });
                            this.correctChoiceMatchValue.splice(j, 1);
                        }
                    }
                    if (this.noPush == false) {
                        this.correctChoiceMatchValue.push({
                            correctOption: this.matchTable['controls'].addMultipleChoice['controls'][i]['controls']['option'].value,
                            correctAnswer: this.matchTable['controls'].addMultipleChoice['controls'][i]['controls']['selectOption'].value,
                            correctActive: this.matchTable['controls'].addMultipleChoice['controls'][i]['controls']['active'].value,
                        });
                    }
                }
            }
        }
        else if (type == 'matchSortChoose') {
            for (let i = 0; i < this.matchSort['controls'].addMultipleChoice['controls'].length; i++) {
                if (index == i) {
                    this.matchSort['controls'].addMultipleChoice['controls'][index]['controls']['selectOption'].patchValue(eve.target.innerText);
                }
            }
        }
    }
    getChoiceAnswerPassage(eve, index, id, type) {
        this.multiSelect = this.passage['controls'].addQuestionType['controls'][index]['controls'];
        if (type == 'multipleChoiceChoose') {
            if (this.multiSelect.multiResponse.value == true) {
                this.multiSelect.addMultipleChoice['controls'][id]['controls']['selectOption'].patchValue(this.multiSelect.addMultipleChoice['controls'][id]['controls']['option'].value);
                this.multiSelect.addMultipleChoice['controls'][id]['controls']['active'].patchValue(eve.target.checked ? 1 : 0);
                this.multiSelect.addMultipleChoice['controls'][id]['controls']['previewActive'].patchValue(eve.target.checked ? 1 : 0);
            }
            else {
                for (let i = 0; i < this.multiSelect.addMultipleChoice['controls'].length; i++) {
                    this.multiSelect.addMultipleChoice['controls'][i]['controls']['active'].patchValue(0);
                    this.multiSelect.addMultipleChoice['controls'][i]['controls']['selectOption'].patchValue('');
                    this.multiSelect.addMultipleChoice['controls'][i]['controls']['previewActive'].patchValue(0);
                    if (id == i) {
                        this.multiSelect.addMultipleChoice['controls'][id]['controls']['selectOption'].patchValue(this.multiSelect.addMultipleChoice['controls'][id]['controls']['option'].value);
                        this.multiSelect.addMultipleChoice['controls'][id]['controls']['active'].patchValue(1);
                        this.multiSelect.addMultipleChoice['controls'][id]['controls']['previewActive'].patchValue(1);
                    }
                }
            }
        }
        else if (type == 'multipleChoiceChoosePreview') {
            this.multihight = true;
            if (this.multiSelect.multiResponse.value == true) {
                this.multiSelect.addMultipleChoice['controls'][id]['controls']['previewActive'].patchValue(1);
            }
            else {
                for (let i = 0; i < this.multiSelect.addMultipleChoice['controls'].length; i++) {
                    this.multiSelect.addMultipleChoice['controls'][i]['controls']['previewActive'].patchValue(0);
                    if (id == i) {
                        this.multiSelect.addMultipleChoice['controls'][id]['controls']['previewActive'].patchValue(1);
                    }
                }
            }
        }
        else if (type == 'matchTableChooseSingle') {
            for (let i = 0; i < this.multiSelect.addMultipleChoice['controls'].length; i++) {
                if (eve == i) {
                    this.multiSelect.addMultipleChoice['controls'][eve]['controls']['selectOption'].patchValue(this.multiSelect.addMultipleChoice['controls'][eve]['controls']['option'].value);
                    this.multiSelect.addMultipleChoice['controls'][eve]['controls']['active'].patchValue(id);
                }
            }
        }
        else if (type == 'matchTableChooseMulti') {
            for (let i = 0; i < this.multiSelect.addMultipleChoice['controls'].length; i++) {
                if (id == i) {
                    this.noPush = false;
                    this.multiSelect.addMultipleChoice['controls'][id]['controls']['selectOption'].patchValue(id);
                    this.multiSelect.addMultipleChoice['controls'][id]['controls']['active'].patchValue(eve);
                    if (this.correctChoiceMatchValue[index] != null) {
                        for (let j = 0; j < this.correctChoiceMatchValue[index].sub.length; j++) {
                            if (this.correctChoiceMatchValue[index].sub[j].correctAnswer == id && this.correctChoiceMatchValue[index].sub[j].correctActive == eve) {
                                this.noPush = true;
                                this.correctChoiceMatchValue[index].sub.splice(j, 1);
                            }
                        }
                    }
                    else {
                        console.log(this.correctChoiceMatchValue[index], 'in');
                        this.correctChoiceMatchValue[index] = { sub: [] };
                    }
                    if (this.noPush == false) {
                        this.correctChoiceMatchValue[index].sub.push({
                            correctOption: this.passage['controls'].addQuestionType['controls'][index]['controls'].chooseType.value == 'math' ? this.rowArray[i] : this.multiSelect.addMultipleChoice['controls'][i]['controls']['option'].value,
                            correctAnswer: this.multiSelect.addMultipleChoice['controls'][i]['controls']['selectOption'].value,
                            correctActive: this.multiSelect.addMultipleChoice['controls'][i]['controls']['active'].value,
                        });
                    }
                }
            }
        }
    }
    multipleResponsePassage(type, eve, index) {
        if (type == 'multipleChoiceCheck') {
            this.multiSelect = this.passage['controls'].addQuestionType['controls'][index]['controls'];
            if (eve.target.checked == true) {
                for (let i = 0; i < this.multiSelect.addMultipleChoice['controls'].length; i++) {
                    this.multiSelect.addMultipleChoice['controls'][i]['controls']['active'].patchValue('');
                }
            }
            else {
                for (let i = 0; i < this.multiSelect.addMultipleChoice['controls'].length; i++) {
                    this.multiSelect.addMultipleChoice['controls'][i]['controls']['active'].patchValue('');
                }
            }
        }
        else if (type == 'matchTableCheck') {
            this.multiSelect = this.passage['controls'].addQuestionType['controls'][index]['controls'];
            if (eve.target.checked == true) {
                for (let i = 0; i < this.multiSelect.addMultipleChoice['controls'].length; i++) {
                    this.multiSelect.addMultipleChoice['controls'][i]['controls']['active'].patchValue('');
                }
            }
            else {
                this.correctChoiceMatchValue[index].sub = [];
                for (let i = 0; i < this.multiSelect.addMultipleChoice['controls'].length; i++) {
                    this.multiSelect.addMultipleChoice['controls'][i]['controls']['active'].patchValue('');
                }
            }
        }
    }
    getMatchSortValue(event, index, type) {
        if (type == 'text') {
            for (let i = 0; i < this.matchSort['controls'].addMultipleChoice['controls'].length; i++) {
                if (index === i) {
                    this.matchSort['controls'].addMultipleChoose['controls'][i]['controls']['selectOption'].patchValue(event.target.value);
                    this.matchSort['controls'].addMultipleChoice['controls'][i]['controls']['option'].patchValue(event.target.value);
                    this.matchSort['controls'].matchSortTarget['controls'][i]['controls']['selectOption'].patchValue(event.target.value);
                    this.matchSort['controls'].matchSortSource['controls'][i]['controls']['option'].patchValue(event.target.value);
                }
            }
        }
        else if (type == 'math') {
            for (let i = 0; i < this.matchSort['controls'].addMultipleChoice['controls'].length; i++) {
                if (index === i) {
                    document.getElementById('matchSortDrop' + index).innerHTML = event.content;
                    this.matchSort['controls'].addMultipleChoose['controls'][i]['controls']['selectOption'].patchValue(event.content);
                    this.matchSort['controls'].addMultipleChoice['controls'][i]['controls']['option'].patchValue(event.content);
                    this.matchSort['controls'].matchSortTarget['controls'][i]['controls']['selectOption'].patchValue(event.content);
                    this.matchSort['controls'].matchSortSource['controls'][i]['controls']['option'].patchValue(event.content);
                }
            }
        }
        this.clickEvent();
    }
    getPassageSortValue(event, index, id, type) {
        this.multiSelect = this.passage['controls'].addQuestionType['controls'][index]['controls'];
        console.log(event);
        if (type == 'text') {
            for (let i = 0; i < this.multiSelect.addMultipleChoose['controls'].length; i++) {
                if (id === i) {
                    this.multiSelect.addMultipleChoose['controls'][i]['controls']['selectOption'].patchValue(event.target.value);
                    this.multiSelect.addMultipleChoice['controls'][i]['controls']['option'].patchValue(event.target.value);
                    this.multiSelect.addMultipleTarget['controls'][i]['controls']['selectOption'].patchValue(event.target.value);
                    this.multiSelect.addMultipleSource['controls'][i]['controls']['option'].patchValue(event.target.value);
                }
            }
        }
        else if (type == 'math') {
            for (let i = 0; i < this.multiSelect.addMultipleChoose['controls'].length; i++) {
                if (id === i) {
                    this.multiSelect.addMultipleChoose['controls'][i]['controls']['selectOption'].patchValue(event.content);
                    this.multiSelect.addMultipleChoice['controls'][i]['controls']['option'].patchValue(event.content);
                    this.multiSelect.addMultipleTarget['controls'][i]['controls']['selectOption'].patchValue(event.content);
                    this.multiSelect.addMultipleSource['controls'][i]['controls']['option'].patchValue(event.content);
                }
            }
        }
    }
    updateGraphValue(type) {
        this.childGraph.submitValue();
        this.saveQuestions(type, 'same');
    }
    checkPassageType(type, redirectType) {
        if (this.questionId == '24') {
            if (this.editPassageContent) {
                this.passageCREDService('edit');
                this.editPassageContent = !this.editPassageContent;
                setTimeout(() => {
                    this.saveQuestions(type, redirectType);
                }, 500);
            }
            else {
                this.saveQuestions(type, redirectType);
            }
        }
        else {
            this.saveQuestions(type, redirectType);
        }
    }
    saveQuestions(type, redirectType) {
        this.subQuestionAnswer = [];
        this.valid = false;
        let graph;
        let hintFinalArrayValue = [];
        this.hintArray.forEach((item) => {
            if (item.hint != '') {
                hintFinalArrayValue.push(item);
            }
        });
        if (type == 'multipleChoiceQuestions') {
            if (this.multiQuestionEditor.content != '' || this.type == 'edit') {
                const dropdownAnswer1 = this.multipleChoice['controls'].addMultipleChoice.value;
                for (let i = 0; i < dropdownAnswer1.length; i++) {
                    this.multioption = true;
                    if (dropdownAnswer1[i].option == '') {
                        this.multioption = false;
                        break;
                    }
                }
                for (let i = 0; i < dropdownAnswer1.length; i++) {
                    this.multiselect = false;
                    if (typeof (dropdownAnswer1[i].active) == 'number') {
                        this.multiselect = true;
                        break;
                    }
                }
                if (dropdownAnswer1.length >= 2) {
                    if (this.multioption) {
                        if (this.multiselect) {
                            if (this.multipleChoice.controls.points.value != '' && this.multipleChoice.controls.points.value != '0') {
                                this.valid = true;
                                if (this.type == 'add') {
                                    this.questIdNo = '';
                                }
                                else if (this.type == 'edit') {
                                    this.questIdNo = this.questionEditData.question_id;
                                }
                                for (let i = 0; i < this.multipleChoice['controls'].addMultipleChoice['controls'].length; i++) {
                                    this.addNewChoiceValue.push({
                                        options: this.multipleChoice.get('addMultipleChoice')['controls'][i]['controls']['option'].value,
                                        isSelected: ''
                                    });
                                }
                                for (let k = 0; k < this.multipleChoice['controls'].addMultipleChoice['controls'].length; k++) {
                                    this.correctChoiceValue.push({
                                        correctAnswer: this.multipleChoice['controls'].addMultipleChoice['controls'][k]['controls']['active'].value == 1 ?
                                            this.multipleChoice.get('addMultipleChoice')['controls'][k]['controls']['option'].value : '',
                                        correctActive: this.multipleChoice['controls'].addMultipleChoice['controls'][k]['controls']['active'].value
                                    });
                                }
                                const minutes = this.multipleChoice.controls.minutes.value != '' ? this.multipleChoice.controls.minutes.value : '00';
                                const seconds = this.multipleChoice.controls.seconds.value != '' ? this.multipleChoice.controls.seconds.value : '00';
                                this.questionAnswer.push({
                                    question_type_id: this.questionId,
                                    question: this.multiQuestionEditor.content,
                                    editor_type: this.inputType == 'math' ? 3 : 1,
                                    options: this.addNewChoiceValue,
                                    answer: this.correctChoiceValue,
                                    heading_option: [],
                                    multiple_response: this.multipleChoice.controls.multiResponse.value == false ? 0 : 1,
                                    autograde: this.multipleChoice.controls.autograde.value == false ? 0 : 1,
                                    points: this.multipleChoice.controls.points.value,
                                    exact_match: 0,
                                    hint: hintFinalArrayValue,
                                    explanation: this.explanationEditorValue,
                                    resource: this.resourceEditorValue,
                                    word_limit: '',
                                    scoring_instruction: '',
                                    source: '',
                                    target: '',
                                    question_id: this.questIdNo,
                                    subject_id: this.multipleChoice.controls.subject_id.value ?? '',
                                    question_topic_id: this.multipleChoice.controls.question_topic_id.value ?? '',
                                    skill: this.enteredSkillList,
                                    predicted_solving_time: minutes + ':' + seconds,
                                    question_standard: this.multipleChoice.controls.question_standard.value ?? '',
                                    question_sub_topic_id: this.multipleChoice.controls.question_sub_topic_id.value ?? '',
                                    level: this.multipleChoice.controls.level.value
                                });
                            }
                            else {
                                this.toastr.error('Kindly enter valid points for the question');
                            }
                        }
                        else {
                            this.toastr.error('Please select the option');
                        }
                    }
                    else {
                        this.toastr.error('Please Enter all the option');
                    }
                }
                else {
                    this.toastr.error('More than one option is needed');
                }
            }
            else {
                this.valid = false;
                this.toastr.error('Please Fill the question');
            }
        }
        else if (type == 'matchTableQuestionsSingle') {
            this.correctChoiceMatchValue = [];
            this.correctChoiceValue = [];
            this.addNewChoiceValue = [];
            if (this.multiQuestionEditor.content != '' || this.type == 'edit') {
                if (this.type == 'add') {
                    this.questIdNo = '';
                }
                else if (this.type == 'edit') {
                    this.questIdNo = this.questionEditData.question_id;
                }
                const dropdownAnswer1 = this.matchTable['controls'].addMultipleChoice.value;
                for (let i = 0; i < dropdownAnswer1.length; i++) {
                    this.multioption = true;
                    if (dropdownAnswer1[i].option == '') {
                        this.multioption = false;
                        break;
                    }
                }
                for (let i = 0; i < dropdownAnswer1.length; i++) {
                    this.multiselect = true;
                    if (typeof (dropdownAnswer1[i].active) != 'number') {
                        this.multiselect = false;
                        break;
                    }
                }
                let stemValueEnteredOrNot = true;
                for (let k = 0; k < this.matchTable['controls'].addMatchTableChoose['controls'].length; k++) {
                    if (this.matchTable['controls'].addMatchTableChoose['controls'][k]['controls']['option'].value == '') {
                        stemValueEnteredOrNot = false;
                        break;
                    }
                }
                if (this.multioption) {
                    if (stemValueEnteredOrNot) {
                        if (this.multiselect) {
                            if (this.matchTable.controls.points.value != '' && this.matchTable.controls.points.value != '0') {
                                this.valid = true;
                                for (let i = 0; i < this.matchTable['controls'].addMultipleChoice['controls'].length; i++) {
                                    this.addNewChoiceValue.push({
                                        options: this.matchTable.get('addMultipleChoice')['controls'][i]['controls']['option'].value,
                                        isSelected: ''
                                    });
                                }
                                for (let k = 0; k < this.matchTable['controls'].addMatchTableChoose['controls'].length; k++) {
                                    this.correctChoiceValue.push(this.matchTable['controls'].addMatchTableChoose['controls'][k]['controls']['option'].value);
                                }
                                for (let l = 0; l < this.matchTable['controls'].addMultipleChoice['controls'].length; l++) {
                                    this.correctChoiceMatchValue.push({
                                        correctOption: this.matchTable['controls'].addMultipleChoice['controls'][l]['controls']['option'].value,
                                        correctAnswer: this.matchTable['controls'].addMultipleChoice['controls'][l]['controls']['selectOption'].value,
                                        correctActive: this.matchTable['controls'].addMultipleChoice['controls'][l]['controls']['active'].value
                                    });
                                }
                                const minutes = this.matchTable.controls.minutes.value != '' ? this.matchTable.controls.minutes.value : '00';
                                const seconds = this.matchTable.controls.seconds.value != '' ? this.matchTable.controls.seconds.value : '00';
                                console.log(this.correctChoiceMatchValue, 'this.correctChoiceMatchValue');
                                this.questionAnswer.push({
                                    question_type_id: this.questionId,
                                    question: this.multiQuestionEditor.content,
                                    editor_type: this.inputType == 'math' ? 3 : 1,
                                    options: this.addNewChoiceValue,
                                    answer: this.correctChoiceValue,
                                    heading_option: this.correctChoiceMatchValue,
                                    multiple_response: this.matchTable.controls.multiResponse.value == false ? 0 : 1,
                                    autograde: this.matchTable.controls.autograde.value == false ? 0 : 1,
                                    points: this.matchTable.controls.points.value,
                                    exact_match: 0,
                                    hint: hintFinalArrayValue,
                                    explanation: this.explanationEditorValue,
                                    resource: this.resourceEditorValue,
                                    word_limit: '',
                                    scoring_instruction: '',
                                    source: '',
                                    target: '',
                                    level: this.matchTable.controls.level.value,
                                    question_id: this.questIdNo,
                                    subject_id: this.matchTable.controls.subject_id.value ?? '',
                                    question_topic_id: this.matchTable.controls.question_topic_id.value ?? '',
                                    skill: this.enteredSkillList,
                                    predicted_solving_time: minutes + ':' + seconds,
                                    question_standard: this.matchTable.controls.question_standard.value ?? '',
                                    question_sub_topic_id: this.matchTable.controls.question_sub_topic_id.value ?? '',
                                });
                            }
                            else {
                                this.toastr.error('Kindly enter valid points for the question');
                            }
                        }
                        else {
                            this.toastr.error('Please Select the correct answer for all the option');
                        }
                    }
                    else {
                        this.toastr.error('Please enter all stems value');
                    }
                }
                else {
                    this.toastr.error('Please enter all the option');
                }
            }
            else {
                this.valid = false;
                this.toastr.error('Please Fill the question');
            }
        }
        else if (type == 'matchTableQuestionsMultiple') {
            // this.correctChoiceMatchValue = [];
            this.correctChoiceValue = [];
            this.addNewChoiceValue = [];
            if (this.multiQuestionEditor.content != '' || this.type == 'edit') {
                if (this.type == 'add') {
                    this.questIdNo = '';
                }
                else if (this.type == 'edit') {
                    this.questIdNo = this.questionEditData.question_id;
                }
                const dropdownAnswer1 = this.matchTable['controls'].addMultipleChoice.value;
                for (let i = 0; i < dropdownAnswer1.length; i++) {
                    this.multioption = true;
                    if (dropdownAnswer1[i].option == '') {
                        this.multioption = false;
                        break;
                    }
                }
                console.log(this.addNewChoiceValue, 'this.addNewChoiceValue');
                console.log(this.correctChoiceMatchValue, 'this.correctChoiceMatchValue');
                let checked = true;
                if (this.multioption) {
                    if (this.correctChoiceMatchValue.length != 0) {
                        if (this.matchTable.controls.points.value != '' && this.matchTable.controls.points.value != '0') {
                            this.valid = true;
                            for (let i = 0; i < this.matchTable['controls'].addMultipleChoice['controls'].length; i++) {
                                this.addNewChoiceValue.push({
                                    options: this.matchTable.get('addMultipleChoice')['controls'][i]['controls']['option'].value,
                                    isSelected: ''
                                });
                            }
                            for (let k = 0; k < this.matchTable['controls'].addMatchTableChoose['controls'].length; k++) {
                                this.correctChoiceValue.push(this.matchTable['controls'].addMatchTableChoose['controls'][k]['controls']['option'].value);
                            }
                            console.log(this.addNewChoiceValue, 'lValeu');
                            for (let i = 0; i < this.addNewChoiceValue.length; i++) {
                                if (!checked) {
                                    break;
                                }
                                checked = false;
                                for (let j = 0; j < this.correctChoiceMatchValue.length; j++) {
                                    if (i == this.correctChoiceMatchValue[j].correctActive) {
                                        checked = true;
                                        break;
                                    }
                                }
                            }
                            if (!checked) {
                                this.valid = false;
                                this.toastr.error('Please select the option for every row');
                            }
                            const minutes = this.matchTable.controls.minutes.value != '' ? this.matchTable.controls.minutes.value : '00';
                            const seconds = this.matchTable.controls.seconds.value != '' ? this.matchTable.controls.seconds.value : '00';
                            this.questionAnswer.push({
                                question_type_id: this.questionId,
                                editor_context: this.contextValue,
                                question: this.multiQuestionEditor.content,
                                options: this.addNewChoiceValue,
                                editor_type: this.inputType == 'math' ? 3 : 1,
                                answer: this.correctChoiceValue,
                                heading_option: this.correctChoiceMatchValue,
                                multiple_response: this.matchTable.controls.multiResponse.value == false ? 0 : 1,
                                autograde: this.matchTable.controls.autograde.value == false ? 0 : 1,
                                points: this.matchTable.controls.points.value,
                                exact_match: 0,
                                hint: hintFinalArrayValue,
                                explanation: this.explanationEditorValue,
                                resource: this.resourceEditorValue,
                                word_limit: '',
                                scoring_instruction: '',
                                source: '',
                                target: '',
                                question_id: this.questIdNo,
                                level: this.matchTable.controls.level.value,
                                subject_id: this.matchTable.controls.subject_id.value ?? '',
                                question_topic_id: this.matchTable.controls.question_topic_id.value ?? '',
                                skill: this.enteredSkillList,
                                question_standard: this.matchTable.controls.question_standard.value ?? '',
                                predicted_solving_time: minutes + ':' + seconds,
                                question_sub_topic_id: this.matchTable.controls.question_sub_topic_id.value ?? ''
                            });
                        }
                        else {
                            this.toastr.error('Kindly enter valid points for the question');
                        }
                    }
                    else {
                        this.toastr.error('Please select the option');
                    }
                }
                else {
                    this.toastr.error('Please enter all the option');
                }
            }
            else {
                this.valid = false;
                this.toastr.error('Please Fill the question');
            }
        }
        else if (type == 'matchSortList') {
            if (this.matchSortEditor.content != '' || this.type == 'edit') {
                if (this.type == 'add') {
                    this.questIdNo = '';
                }
                else if (this.type == 'edit') {
                    this.questIdNo = this.questionEditData.question_id;
                }
                const matchorder = this.matchSort['controls'].addMultipleChoose.value;
                for (let i = 0; i < matchorder.length; i++) {
                    this.multioption = true;
                    if (matchorder[i].selectOption == '') {
                        this.multioption = false;
                        break;
                    }
                }
                if (this.multioption) {
                    if (this.matchSort.controls.points.value != '' && this.matchSort.controls.points.value != '0') {
                        this.valid = true;
                        for (let i = 0; i < this.matchSort['controls'].addMultipleChoice['controls'].length; i++) {
                            this.addNewChoiceValue.push({
                                options: this.matchSort.get('addMultipleChoice')['controls'][i]['controls']['option'].value
                            });
                        }
                        for (let k = 0; k < this.matchSort['controls'].addMultipleChoose['controls'].length; k++) {
                            this.correctChoiceValue.push({
                                correctAnswer: this.matchSort['controls'].addMultipleChoose['controls'][k]['controls']['selectOption'].value,
                                correctActive: ''
                            });
                        }
                        const minutes = this.matchSort.controls.minutes.value != '' ? this.matchSort.controls.minutes.value : '00';
                        const seconds = this.matchSort.controls.seconds.value != '' ? this.matchSort.controls.seconds.value : '00';
                        this.questionAnswer.push({
                            question_type_id: this.questionId,
                            editor_context: this.contextValue,
                            question: this.matchSortEditor.content,
                            options: this.addNewChoiceValue,
                            answer: this.correctChoiceValue,
                            editor_type: this.inputType == 'math' ? 3 : 1,
                            heading_option: [],
                            multiple_response: this.matchSort.controls.multiResponse.value == false ? 0 : 1,
                            autograde: this.matchSort.controls.autograde.value == false ? 0 : 1,
                            points: this.matchSort.controls.points.value,
                            exact_match: 0,
                            hint: hintFinalArrayValue,
                            explanation: this.explanationEditorValue,
                            resource: this.resourceEditorValue,
                            word_limit: '',
                            scoring_instruction: '',
                            source: this.matchSort.controls.source.value,
                            target: this.matchSort.controls.target.value,
                            question_id: this.questIdNo,
                            level: this.matchSort.controls.level.value,
                            subject_id: this.matchSort.controls.subject_id.value ?? '',
                            question_topic_id: this.matchSort.controls.question_topic_id.value ?? '',
                            skill: this.enteredSkillList,
                            question_standard: this.matchSort.controls.question_standard.value ?? '',
                            predicted_solving_time: minutes + ':' + seconds,
                            question_sub_topic_id: this.matchSort.controls.question_sub_topic_id.value ?? ''
                        });
                    }
                    else {
                        this.toastr.error('Kindly enter valid points for the question');
                    }
                }
                else {
                    this.toastr.error('Please enter for all the option');
                }
            }
            else {
                this.valid = false;
                this.toastr.error('Please Fill the question');
            }
        }
        else if (type == 'richText') {
            if (this.type == 'add') {
                this.questIdNo = '';
            }
            else if (this.type == 'edit') {
                this.questIdNo = this.questionEditData.question_id;
            }
            if ((this.questionId == '20' && !this.multiFreeAnswerEditor.some(code => code.content == '') && this.writingQuestionEditor.content != '') ||
                (this.questionId == '55' && this.writingQuestionEditor)) {
                if (this.richText.controls.points.value != '' && this.richText.controls.points.value != '0') {
                    if (this.questionId == '20') {
                        for (let i = this.richText.get('repeatAnswerFreeText')['controls'].length; i >= 1; i--) {
                            this.correctChoiceValue.push({
                                correctAnswer: this.richText.get('repeatAnswerFreeText')['controls'][i - 1]['controls']['correct'].value,
                                correctActive: '',
                            });
                        }
                    }
                    else {
                        this.correctChoiceValue.push({
                            correctAnswer: this.writingAnswerEditor,
                            correctActive: '',
                        });
                    }
                    this.valid = true;
                    const minutes = this.richText.controls.minutes.value != '' ? this.richText.controls.minutes.value : '00';
                    const seconds = this.richText.controls.seconds.value != '' ? this.richText.controls.seconds.value : '00';
                    this.questionAnswer.push({
                        question_type_id: this.questionId,
                        editor_context: this.questionId == '20' ? this.contextValue : this.writingQuestionEditor,
                        options: [{ isSelected: '' }],
                        multiple_response: '',
                        exact_match: '',
                        word_limit: '',
                        scoring_instruction: this.questionId == '55' ? this.richText.controls.scoring_instruction.value : '',
                        source: '',
                        target: '',
                        question: this.questionId == '20' ? this.writingQuestionEditor.content : this.writingQuestionEditor,
                        answer: this.correctChoiceValue,
                        points: this.richText.controls.points.value,
                        autograde: this.richText.controls.autograde.value == false ? 0 : 1,
                        hint: hintFinalArrayValue,
                        explanation: this.explanationEditorValue,
                        resource: this.resourceEditorValue,
                        question_id: this.questIdNo,
                        level: this.richText.controls.level.value,
                        subject_id: this.richText.controls.subject_id.value ?? '',
                        question_topic_id: this.richText.controls.question_topic_id.value ?? '',
                        skill: this.enteredSkillList,
                        question_standard: this.richText.controls.question_standard.value ?? '',
                        predicted_solving_time: minutes + ':' + seconds,
                        question_sub_topic_id: this.richText.controls.question_sub_topic_id.value ?? ''
                    });
                }
                else {
                    this.toastr.error('Kindly enter valid points for the question');
                }
                // } else {
                //     this.toastr.error('Sample Essay greater than or equal to ' + this.minimunWordValidation + ' words');
                // }
            }
            else {
                this.valid = false;
                if (this.questionId == '55') {
                    this.toastr.error('Please Fill the question');
                }
                else {
                    this.toastr.error('Please Fill the question & answer');
                }
            }
        }
        else if (type == 'plainText') {
            if (this.type == 'add') {
                this.questIdNo = '';
            }
            else if (this.type == 'edit') {
                this.questIdNo = this.questionEditData.question_id;
            }
            if (this.writingAnswerEditor.content != '' && this.writingQuestionEditor.content != '') {
                this.correctChoiceValue.push({
                    correctAnswer: this.writingAnswerEditor.content,
                    correctActive: '',
                });
                this.valid = true;
                this.questionAnswer.push({
                    question_type_id: this.questionId,
                    editor_context: this.contextValue,
                    options: [],
                    multiple_response: '',
                    exact_match: '',
                    word_limit: '',
                    scoring_instruction: '',
                    source: '',
                    target: '',
                    question: this.writingQuestionEditor.content,
                    answer: this.correctChoiceValue,
                    points: this.plainText.controls.points.value,
                    autograde: this.plainText.controls.autograde.value == false ? 0 : 1,
                    hint: hintFinalArrayValue,
                    explanation: this.explanationEditorValue,
                    resource: this.resourceEditorValue,
                    question_id: this.questIdNo,
                    level: this.plainText.controls.level.value
                });
            }
            else {
                this.valid = false;
                this.toastr.error('Please Fill the question & answer');
            }
        }
        else if (type == 'graphing') {
            if (this.graphQuestionEditor.content != '' && this.graphBoardValue) {
                let points;
                points = this.graphPoints;
                if (points != '' && points != '0') {
                    let objects = {};
                    for (let el in this.graphBoardValue.objects) {
                        let inherits = [];
                        this.graphBoardValue.objects[el].inherits.forEach((item) => {
                            inherits.push({ name: item.name });
                        });
                        objects[el] = {
                            elType: this.graphBoardValue.objects[el].elType,
                            coords: this.graphBoardValue.objects[el].coords,
                            name: this.graphBoardValue.objects[el].name,
                            inherits,
                            parents: this.graphBoardValue.objects[el].parents,
                            splinePoints: this.graphBoardValue.objects[el].splinePoints,
                            quadraticform: this.graphBoardValue.objects[el].quadraticform,
                        };
                    }
                    let objectsArr = [];
                    objectsArr.push(objects);
                    console.log(objectsArr, 'objectsArr');
                    graph = {
                        attr: this.graphBoardValue.attr,
                        objects: objects
                    };
                    this.correctChoiceValue.push({
                        correctAnswer: stringify(graph),
                        correctActive: '',
                    });
                    this.valid = true;
                    const minutes = this.graphForm.controls.minutes.value != '' ? this.graphForm.controls.minutes.value : '00';
                    const seconds = this.graphForm.controls.seconds.value != '' ? this.graphForm.controls.seconds.value : '00';
                    this.questionAnswer.push({
                        question_type_id: this.questionId,
                        editor_context: '',
                        options: [],
                        multiple_response: '',
                        exact_match: '',
                        word_limit: '',
                        scoring_instruction: '',
                        source: '',
                        target: '',
                        question: this.graphQuestionEditor.content,
                        answer: this.correctChoiceValue,
                        hint: hintFinalArrayValue,
                        editor_answer: this.graphEditorAnswerVal.content,
                        explanation: this.explanationEditorValue,
                        resource: this.resourceEditorValue,
                        autograde: 0,
                        question_id: this.questionEditData?.question_id,
                        points: this.graphForm.controls.points.value,
                        subject_id: this.graphForm.controls.subject_id.value ?? '',
                        question_topic_id: this.graphForm.controls.question_topic_id.value ?? '',
                        skill: this.enteredSkillList,
                        predicted_solving_time: minutes + ':' + seconds,
                        question_standard: this.graphForm.controls.question_standard.value ?? '',
                        question_sub_topic_id: this.graphForm.controls.question_sub_topic_id.value ?? '',
                        level: this.graphForm.controls.level.value
                    });
                }
                else {
                    this.toastr.error('Kindly enter valid points for the question');
                }
            }
            else {
                this.valid = false;
                this.toastr.error('Please Fill the question & answer');
            }
        }
        else if (type == 'shortText') {
            if (this.type == 'add') {
                this.questIdNo = '';
            }
            else if (this.type == 'edit') {
                this.questIdNo = this.questionEditData.question_id;
            }
            if (this.writingAnswerEditor.content != '' && this.writingQuestionEditor.content != '') {
                this.correctChoiceValue.push({
                    correctAnswer: this.writingAnswerEditor.content,
                    correctActive: '',
                });
                this.valid = true;
                this.questionAnswer.push({
                    question_type_id: this.questionId,
                    editor_context: this.contextValue,
                    options: [],
                    multiple_response: '',
                    exact_match: '',
                    word_limit: '',
                    scoring_instruction: '',
                    source: '',
                    target: '',
                    question: this.writingQuestionEditor.content,
                    answer: this.correctChoiceValue,
                    points: this.shortText.controls.points.value,
                    hint: hintFinalArrayValue,
                    explanation: this.explanationEditorValue,
                    resource: this.resourceEditorValue,
                    level: this.shortText.controls.level.value,
                    autograde: this.shortText.controls.autograde.value == false ? 0 : 1,
                    question_id: this.questIdNo
                });
            }
            else {
                this.valid = false;
                this.toastr.error('Please Fill the question & answer');
            }
        }
        else if (type == 'textEntry') {
            if (this.type == 'add') {
                this.questIdNo = '';
            }
            else if (this.type == 'edit') {
                this.questIdNo = this.questionEditData.question_id;
            }
            if (this.textEntryPreview.content != '' && this.inputArray.length > 0) {
                for (let i = 0; i < this.inputArray.length; i++) {
                    if (this.inputArray[i].options[0].value != '') {
                        this.multioption = true;
                    }
                    else {
                        this.multioption = false;
                        break;
                    }
                }
                if (this.multioption) {
                    if (this.textEntry.controls.points.value != '' && this.textEntry.controls.points.value != '0') {
                        this.valid = true;
                        for (let j = 0; j < this.textEntry['controls'].addHints['controls'].length; j++) {
                            this.addHintsValue.push({
                                hint: this.textEntry['controls'].addHints['controls'][j]['controls']['hint'].value
                            });
                        }
                        this.inputArray.forEach((item) => {
                            item.correctAnswer = item.value;
                            item.correctActive = '';
                        });
                        const minutes = this.textEntry.controls.minutes.value != '' ? this.textEntry.controls.minutes.value : '00';
                        const seconds = this.textEntry.controls.seconds.value != '' ? this.textEntry.controls.seconds.value : '00';
                        this.questionAnswer.push({
                            question_type_id: this.questionId,
                            editor_context: this.textEntryPreview.content,
                            question: this.textEntryPreview.content,
                            answer: this.inputArray,
                            multiple_response: '',
                            points: this.textEntry.controls.points.value,
                            editor_type: this.showTextEditor == 'eng' ? '1' : this.showTextEditor == 'math' ? '3' : '',
                            exact_match: '',
                            hint: hintFinalArrayValue,
                            explanation: this.explanationEditorValue,
                            resource: this.resourceEditorValue,
                            autograde: this.textEntry.controls.autograde.value == false ? 0 : 1,
                            word_limit: '',
                            options: this.inputArray,
                            scoring_instruction: '',
                            source: '',
                            target: '',
                            question_id: this.questIdNo,
                            level: this.textEntry.controls.level.value,
                            subject_id: this.textEntry.controls.subject_id.value ?? '',
                            question_topic_id: this.textEntry.controls.question_topic_id.value ?? '',
                            skill: this.enteredSkillList,
                            question_standard: this.textEntry.controls.question_standard.value ?? '',
                            predicted_solving_time: minutes + ':' + seconds,
                            question_sub_topic_id: this.textEntry.controls.question_sub_topic_id.value ?? ''
                        });
                    }
                    else {
                        this.toastr.error('Kindly enter valid points for the question');
                    }
                }
                else {
                    this.toastr.error('Please Fill the answer');
                }
            }
            else {
                this.valid = false;
                this.toastr.error('Please Fill the question & Add input');
            }
        }
        else if (type == 'highligthPreview') {
            if (this.type == 'add') {
                this.questIdNo = '';
            }
            else if (this.type == 'edit') {
                this.questIdNo = this.questionEditData.question_id;
                if (this.writingQuestionEditor.content == '') {
                    this.writingQuestionEditor.content = this.questionEditData.question;
                }
                if (this.writingAnswerEditor.content == '') {
                    this.writingAnswerEditor.content = this.questionEditData.options[0].options;
                }
            }
            if (this.highlightEditor1.getContent() != '' && this.writingAnswerEditor.content != '' && this.writingQuestionEditor.content != '') {
                this.correctChoiceValue.push({
                    correctAnswer: this.highlightEditor1.getContent(),
                    correctActive: '',
                });
                if (this.highlight.controls.points.value != '' && this.highlight.controls.points.value != '0') {
                    this.valid = true;
                    this.questionAnswer.push({
                        question_type_id: this.questionId,
                        editor_context: this.writingQuestionEditor.content,
                        // this.writingQuestionEditor
                        // options: this.answerHighlightValue,
                        options: [{ options: this.writingAnswerEditor.content, isSelected: '' }],
                        multiple_response: '',
                        exact_match: '',
                        word_limit: '',
                        scoring_instruction: '',
                        source: '',
                        target: '',
                        question: this.writingQuestionEditor.content,
                        answer: this.correctChoiceValue,
                        points: this.highlight.controls.points.value,
                        autograde: this.highlight.controls.autograde.value == false ? 0 : 1,
                        hint: hintFinalArrayValue,
                        explanation: this.explanationEditorValue,
                        resource: this.resourceEditorValue,
                        question_id: this.questIdNo,
                        level: this.highlight.controls.level.value
                    });
                }
                else {
                    this.toastr.error('Kindly enter valid points for the question');
                }
            }
            else {
                this.valid = false;
                this.toastr.error('Please fill all the mandatory field');
            }
        }
        else if (type == 'textDropDown') {
            if (this.type == 'add') {
                this.questIdNo = '';
            }
            else if (this.type == 'edit') {
                this.questIdNo = this.questionEditData.question_id;
            }
            if (this.questionValue.content != '' && this.fillDropDown['controls'].addDropDownOption.value.length > 0) {
                const dropdownAnswer1 = this.fillDropDown['controls'].addDropDownOption.value;
                let correctAnswer = true;
                let selectAnswer = false;
                let dropDownLength = true;
                for (let i = 0; i < dropdownAnswer1.length; i++) {
                    for (let k = 0; k < dropdownAnswer1[i].options.length; k++) {
                        if (dropdownAnswer1[i].options[k].listOption == '') {
                            correctAnswer = false;
                            break;
                        }
                    }
                }
                for (let j = 0; j < dropdownAnswer1.length; j++) {
                    for (let l = 0; l < dropdownAnswer1[j].options.length; l++) {
                        if (dropdownAnswer1[j].options.length == 1) {
                            dropDownLength = false;
                            break;
                        }
                    }
                }
                for (let i = 0; i < dropdownAnswer1.length; i++) {
                    if (!selectAnswer && i != 0) {
                        break;
                    }
                    for (let k = 0; k < dropdownAnswer1[i].options.length; k++) {
                        selectAnswer = false;
                        if (dropdownAnswer1[i].options[k].selected == 'true') {
                            selectAnswer = true;
                            break;
                        }
                    }
                }
                if (dropDownLength) {
                    if (correctAnswer) {
                        if (selectAnswer) {
                            if (this.fillDropDown.controls.points.value != '' && this.fillDropDown.controls.points.value != '0') {
                                this.valid = true;
                                for (let j = 0; j < this.fillDropDown['controls'].addHints['controls'].length; j++) {
                                    this.addHintsValue.push({
                                        hint: this.fillDropDown['controls'].addHints['controls'][j]['controls']['hint'].value
                                    });
                                }
                                const dropdownAnswer = this.fillDropDown['controls'].addDropDownOption.value;
                                dropdownAnswer.forEach((item) => {
                                    item.isSelected = '';
                                    item.options.forEach((item1) => {
                                        item1.correctAnswer = item1.listOption;
                                        item1.correctActive = item1.selected;
                                    });
                                });
                                const minutes = this.fillDropDown.controls.minutes.value != '' ? this.fillDropDown.controls.minutes.value : '00';
                                const seconds = this.fillDropDown.controls.seconds.value != '' ? this.fillDropDown.controls.seconds.value : '00';
                                this.questionAnswer.push({
                                    question_type_id: this.questionId,
                                    editor_context: this.questionValue.content,
                                    question: this.questionValue.content,
                                    answer: dropdownAnswer,
                                    multiple_response: '',
                                    points: this.fillDropDown.controls.points.value,
                                    editor_type: this.showTextEditor == 'eng' ? '1' : this.showTextEditor == 'math' ? '3' : '',
                                    exact_match: '',
                                    hint: hintFinalArrayValue,
                                    explanation: this.explanationEditorValue,
                                    resource: this.resourceEditorValue,
                                    autograde: this.fillDropDown.controls.autograde.value == false ? 0 : 1,
                                    word_limit: '',
                                    options: dropdownAnswer,
                                    scoring_instruction: '',
                                    source: '',
                                    target: '',
                                    question_id: this.questIdNo,
                                    level: this.fillDropDown.controls.level.value,
                                    subject_id: this.fillDropDown.controls.subject_id.value ?? '',
                                    question_topic_id: this.fillDropDown.controls.question_topic_id.value ?? '',
                                    skill: this.enteredSkillList,
                                    question_standard: this.fillDropDown.controls.question_standard.value ?? '',
                                    predicted_solving_time: minutes + ':' + seconds,
                                    question_sub_topic_id: this.fillDropDown.controls.question_sub_topic_id.value ?? ''
                                });
                            }
                            else {
                                this.toastr.error('Kindly enter valid points for the question');
                            }
                        }
                        else {
                            this.toastr.error('Please select one option for each dropdown');
                        }
                    }
                    else {
                        this.toastr.error('Please enter all the option');
                    }
                }
                else {
                    this.toastr.error('Need atleast two option for each DropDown');
                }
            }
            else {
                this.valid = false;
                this.toastr.error('Please Fill the question & Add Dropdown');
            }
        }
        else if (type == 'passage') {
            let allowQuestion;
            let checked = true;
            allowQuestion = true;
            this.questIdNo = [];
            if (this.type == 'add') {
                this.quesNo = '';
            }
            else if (this.type == 'edit') {
                this.quesNo = this.questionEditData.question_id;
            }
            if (this.passage.controls.editorContext.value != '') {
                for (let i = 0; i < this.passage['controls'].addQuestionType['controls'].length; i++) {
                    this.multiSelect = this.passage['controls'].addQuestionType['controls'][i]['controls'];
                    if (this.type == 'add') {
                        this.questIdNo[i] = '';
                    }
                    else if (this.type == 'edit') {
                        this.quesNo = this.questionEditData.question_no;
                        if (this.questionEditData.subQuestions[i]) {
                            this.questIdNo[i] = this.questionEditData.subQuestions[i].question_id;
                        }
                        else {
                            this.questIdNo[i] = 0;
                        }
                    }
                    if (this.passage['controls'].addQuestionType['controls'][i]['controls'].selectType.value == 'MultiChoice') {
                        if (allowQuestion) {
                            if (this.passageQuestionEditor[i].content != '') {
                                const dropdownAnswer1 = this.multiSelect.addMultipleChoice.value;
                                console.log(dropdownAnswer1, 'dropdownAnswer1');
                                for (let i = 0; i < dropdownAnswer1.length; i++) {
                                    this.multioption = true;
                                    if (dropdownAnswer1[i].option == '') {
                                        this.multioption = false;
                                        break;
                                    }
                                }
                                console.log(dropdownAnswer1, 'dropdownAnswer1');
                                for (let i = 0; i < dropdownAnswer1.length; i++) {
                                    this.multiselect = false;
                                    if (dropdownAnswer1[i].active == 1) {
                                        this.multiselect = true;
                                        break;
                                    }
                                }
                                for (let j = 0; j < this.multiSelect.addMultipleChoice['controls'].length; j++) {
                                    this.addNewChoiceValue.push({
                                        options: this.multiSelect.addMultipleChoice['controls'][j]['controls']['option'].value,
                                        isSelected: ''
                                    });
                                }
                                for (let j = 0; j < this.multiSelect.addHints['controls'].length; j++) {
                                    this.addHintsValue.push({
                                        hint: this.multiSelect.addHints['controls'][j]['controls']['hint'].value
                                    });
                                }
                                for (let j = 0; j < this.multiSelect.addMultipleChoice['controls'].length; j++) {
                                    this.correctChoiceValue.push({
                                        correctAnswer: this.multiSelect.addMultipleChoice['controls'][j]['controls']['active'].value == '1' ?
                                            this.multiSelect.addMultipleChoice['controls'][j]['controls']['option'].value : '',
                                        correctActive: this.multiSelect.addMultipleChoice['controls'][j]['controls']['active'].value
                                    });
                                }
                                if (this.multioption) {
                                    if (this.multiselect) {
                                        if (this.multiSelect.points.value != '' && this.multiSelect.points.value != '0') {
                                            const minutes = this.multiSelect.minutes.value != '' ? this.multiSelect.minutes.value : '00';
                                            const seconds = this.multiSelect.seconds.value != '' ? this.multiSelect.seconds.value : '00';
                                            this.subQuestionAnswer.push({
                                                question_type_id: this.multiSelect.multiResponse.value == false ? 1 : 2,
                                                question: this.passageQuestionEditor[i].content,
                                                options: this.addNewChoiceValue,
                                                answer: this.correctChoiceValue,
                                                heading_option: [],
                                                multiple_response: this.multiSelect.multiResponse.value == false ? 0 : 1,
                                                autograde: this.multiSelect.autograde.value == false ? 0 : 1,
                                                points: this.multiSelect.points.value,
                                                exact_match: 0,
                                                hint: this.addHintsValue,
                                                explanation: this.multiSelect.explanation.value,
                                                word_limit: '',
                                                scoring_instruction: '',
                                                source: '',
                                                target: '',
                                                editor_type: this.multiSelect.chooseType.value == 'text' ? 1 : 3,
                                                question_id: this.questIdNo[i],
                                                level: this.multiSelect.level.value,
                                                subject_id: this.multiSelect.subject_id.value ?? '',
                                                question_topic_id: this.multiSelect.question_topic_id.value ?? '',
                                                skill: this.enteredSkillList,
                                                predicted_solving_time: minutes + ':' + seconds,
                                                question_standard: this.multiSelect.question_standard.value ?? '',
                                                question_sub_topic_id: this.multiSelect.question_sub_topic_id.value ?? '',
                                            });
                                            this.valid = true;
                                        }
                                        else {
                                            allowQuestion = false;
                                            this.valid = false;
                                            this.toastr.error('Kindly enter valid points for multi choice question');
                                            break;
                                        }
                                    }
                                    else {
                                        allowQuestion = false;
                                        this.valid = false;
                                        this.toastr.error('Please select the correct answer for multi choice question');
                                        break;
                                    }
                                }
                                else {
                                    allowQuestion = false;
                                    this.valid = false;
                                    this.toastr.error('Please enter all the option for multi choice question');
                                    break;
                                }
                            }
                            else {
                                allowQuestion = false;
                                this.valid = false;
                                this.toastr.error('Please fill the question for multi choice type');
                                break;
                            }
                        }
                        else {
                            allowQuestion = false;
                            this.valid = false;
                            this.toastr.error('Please fill all the mandatory fields');
                            break;
                        }
                    }
                    else if (this.passage['controls'].addQuestionType['controls'][i]['controls'].selectType.value == 'TrueOrFalse') {
                        if (this.multiSelect.multiResponse.value == false) {
                            this.correctChoiceMatchValueSingle = [];
                            console.log(this.multiSelect.addMultipleChoice['controls'].length, 'length');
                            for (let l = 0; l < this.multiSelect.addMultipleChoice['controls'].length; l++) {
                                this.correctChoiceMatchValueSingle.push({
                                    correctOption: this.multiSelect.addMultipleChoice['controls'][l]['controls']['option'].value,
                                    correctAnswer: this.multiSelect.addMultipleChoice['controls'][l]['controls']['selectOption'].value,
                                    correctActive: this.multiSelect.addMultipleChoice['controls'][l]['controls']['active'].value
                                });
                            }
                        }
                        let dropdownAnswer1 = [];
                        dropdownAnswer1 = this.multiSelect.addMultipleChoice.value;
                        console.log(dropdownAnswer1, 'dropdownAnswer1');
                        console.log(this.correctChoiceMatchValue, 'correctChoiceMatchValue');
                        let optionEntered = true;
                        this.multiselect = this.multiSelect.multiResponse.value;
                        for (let i = 0; i < dropdownAnswer1.length; i++) {
                            this.multioption = true;
                            if (dropdownAnswer1[i].option == '') {
                                this.multioption = false;
                                break;
                            }
                        }
                        console.log(this.correctChoiceMatchValueSingle, 'dropdownAnswer1');
                        this.multiSelect['addMatchTableChoose'].value.every((items) => {
                            console.log(items, 'items');
                            if (items.option.trim() == '') {
                                optionEntered = false;
                                return false;
                            }
                            return true;
                        });
                        if (this.multiSelect.multiResponse.value == false) {
                            for (let i = 0; i < this.correctChoiceMatchValueSingle.length; i++) {
                                this.multiselect = true;
                                if (typeof (this.correctChoiceMatchValueSingle[i].correctActive) != 'number') {
                                    this.multiselect = false;
                                    break;
                                }
                            }
                        }
                        if (allowQuestion) {
                            if (this.passageQuestionEditor[i].content != '') {
                                if (this.multioption) {
                                    if (optionEntered) {
                                        if (this.multiselect) {
                                            if (this.multiSelect.points.value != '' && this.multiSelect.points.value != '0') {
                                                this.valid = true;
                                                for (let j = 0; j < this.multiSelect.addMultipleChoice['controls'].length; j++) {
                                                    this.addNewChoiceValue.push({
                                                        options: this.multiSelect.addMultipleChoice['controls'][j]['controls']['option'].value,
                                                        isSelected: ''
                                                    });
                                                }
                                                for (let j = 0; j < this.multiSelect.addHints['controls'].length; j++) {
                                                    this.addHintsValue.push({
                                                        hint: this.multiSelect.addHints['controls'][j]['controls']['hint'].value
                                                    });
                                                }
                                                for (let k = 0; k < this.multiSelect.addMatchTableChoose['controls'].length; k++) {
                                                    this.correctChoiceValue.push(this.multiSelect.addMatchTableChoose['controls'][k]['controls']['option'].value);
                                                }
                                                if (this.multiSelect.multiResponse.value == true) {
                                                    for (let x = 0; x < this.addNewChoiceValue.length; x++) {
                                                        if (!checked) {
                                                            break;
                                                        }
                                                        checked = false;
                                                        console.log(this.correctChoiceMatchValue, 'this.correctChoiceMatchValue');
                                                        if (this.correctChoiceMatchValue.length != 0) {
                                                            for (let j = 0; j < this.correctChoiceMatchValue[i].sub.length; j++) {
                                                                if (x == this.correctChoiceMatchValue[i].sub[j].correctActive) {
                                                                    checked = true;
                                                                    break;
                                                                }
                                                            }
                                                        }
                                                    }
                                                    if (!checked) {
                                                        this.valid = false;
                                                        this.toastr.error('Please select the option for every row');
                                                        break;
                                                    }
                                                }
                                                const minutes = this.multiSelect.minutes.value != '' ? this.multiSelect.minutes.value : '00';
                                                const seconds = this.multiSelect.seconds.value != '' ? this.multiSelect.seconds.value : '00';
                                                this.subQuestionAnswer.push({
                                                    question_type_id: this.multiSelect.multiResponse.value == false ? 5 : 7,
                                                    question: this.passageQuestionEditor[i].content,
                                                    options: this.addNewChoiceValue,
                                                    answer: this.correctChoiceValue,
                                                    heading_option: this.multiSelect.multiResponse.value == true ? this.correctChoiceMatchValue[i].sub : this.correctChoiceMatchValueSingle,
                                                    multiple_response: this.multiSelect.multiResponse.value == false ? 0 : 1,
                                                    autograde: this.multiSelect.autograde.value == false ? 0 : 1,
                                                    points: this.multiSelect.points.value,
                                                    exact_match: 0,
                                                    hint: this.addHintsValue,
                                                    explanation: this.multiSelect.explanation.value,
                                                    word_limit: '',
                                                    scoring_instruction: '',
                                                    source: '',
                                                    target: '',
                                                    editor_type: this.multiSelect.chooseType.value == 'text' ? 1 : 3,
                                                    question_id: this.questIdNo[i],
                                                    level: this.multiSelect.level.value,
                                                    subject_id: this.multiSelect.subject_id.value ?? '',
                                                    question_topic_id: this.multiSelect.question_topic_id.value ?? '',
                                                    skill: this.enteredSkillList,
                                                    predicted_solving_time: minutes + ':' + seconds,
                                                    question_standard: this.multiSelect.question_standard.value ?? '',
                                                    question_sub_topic_id: this.multiSelect.question_sub_topic_id.value ?? '',
                                                });
                                            }
                                            else {
                                                allowQuestion = false;
                                                this.valid = false;
                                                this.toastr.error('Kindly enter valid points for True or False type question');
                                                break;
                                            }
                                        }
                                        else {
                                            allowQuestion = false;
                                            this.valid = false;
                                            this.toastr.error('Please select the option for True or False type');
                                            break;
                                        }
                                    }
                                    else {
                                        this.valid = false;
                                        allowQuestion = false;
                                        this.toastr.error('Please enter the multiple choice answer');
                                        break;
                                    }
                                }
                                else {
                                    allowQuestion = false;
                                    this.valid = false;
                                    this.toastr.error('Please enter all the option for True or False type');
                                    break;
                                }
                            }
                            else {
                                allowQuestion = false;
                                this.valid = false;
                                this.toastr.error('Please fill the question for True or False type');
                                break;
                            }
                        }
                        else {
                            allowQuestion = false;
                            this.valid = false;
                            this.toastr.error('Please fill all the mandatory fields');
                            break;
                        }
                    }
                    else if (this.passage['controls'].addQuestionType['controls'][i]['controls'].selectType.value == 'textEntry') {
                        for (let k = 0; k < this.inputArray[i].datas.length; k++) {
                            this.multioption = true;
                            if (this.inputArray[i].datas[k].options[0].value == '') {
                                this.multioption = false;
                                break;
                            }
                        }
                        if (allowQuestion) {
                            if (this.questionArray[i].content != '' && this.inputArray[i].datas.length > 0) {
                                if (this.multioption) {
                                    if (this.multiSelect.points.value != '' && this.multiSelect.points.value != '0') {
                                        for (let j = 0; j < this.multiSelect.addHints['controls'].length; j++) {
                                            this.addHintsValue.push({
                                                hint: this.multiSelect.addHints['controls'][j]['controls']['hint'].value
                                            });
                                        }
                                        this.valid = true;
                                        this.inputArray[i].datas.forEach((item) => {
                                            item.correctAnswer = item.value;
                                            item.correctActive = '';
                                        });
                                        const minutes = this.multiSelect.minutes.value != '' ? this.multiSelect.minutes.value : '00';
                                        const seconds = this.multiSelect.seconds.value != '' ? this.multiSelect.seconds.value : '00';
                                        this.subQuestionAnswer.push({
                                            question_type_id: 10,
                                            question: this.questionArray[i].content,
                                            answer: this.inputArray[i].datas,
                                            multiple_response: this.multiSelect.multiResponse.value == false ? 0 : 1,
                                            autograde: this.multiSelect.autograde.value == false ? 0 : 1,
                                            points: this.multiSelect.points.value,
                                            exact_match: this.multiSelect.ignoreCase.value == false ? 0 : 1,
                                            hint: this.addHintsValue,
                                            explanation: this.multiSelect.explanation.value,
                                            word_limit: '',
                                            options: this.inputArray[i].datas,
                                            scoring_instruction: '',
                                            source: '',
                                            target: '',
                                            editor_type: this.multiSelect.chooseType.value == 'text' ? 1 : 3,
                                            question_id: this.questIdNo[i],
                                            level: this.multiSelect.level.value,
                                            subject_id: this.multiSelect.subject_id.value ?? '',
                                            question_topic_id: this.multiSelect.question_topic_id.value ?? '',
                                            skill: this.enteredSkillList,
                                            predicted_solving_time: minutes + ':' + seconds,
                                            question_standard: this.multiSelect.question_standard.value ?? '',
                                            question_sub_topic_id: this.multiSelect.question_sub_topic_id.value ?? '',
                                        });
                                    }
                                    else {
                                        this.valid = false;
                                        allowQuestion = false;
                                        this.toastr.error('Kindly enter valid points for Text-Entry type question');
                                        break;
                                    }
                                }
                                else {
                                    allowQuestion = false;
                                    this.valid = false;
                                    this.toastr.error('Please enter all the option for Text Entry type');
                                    break;
                                }
                            }
                            else {
                                allowQuestion = false;
                                this.valid = false;
                                this.toastr.error('Please Fill the question & Add text entry input');
                                break;
                            }
                        }
                        else {
                            allowQuestion = false;
                            this.valid = false;
                            this.toastr.error('Please fill all the mandatory fields');
                            break;
                        }
                    }
                    else if (this.passage['controls'].addQuestionType['controls'][i]['controls'].selectType.value == 'essay') {
                        for (let j = 0; j < this.multiSelect.addHints['controls'].length; j++) {
                            this.addHintsValue.push({
                                hint: this.multiSelect.addHints['controls'][j]['controls']['hint'].value
                            });
                        }
                        const checkAllAnswerEntered = !this.multiFreeAnswerEditor.some(code => code.content == '');
                        const answer = [];
                        this.multiFreeAnswerEditor.forEach(items => answer.push({ correctAnswer: items.content }));
                        if (checkAllAnswerEntered) {
                            this.valid = true;
                            const minutes = this.multiSelect.minutes.value != '' ? this.multiSelect.minutes.value : '00';
                            const seconds = this.multiSelect.seconds.value != '' ? this.multiSelect.seconds.value : '00';
                            this.subQuestionAnswer.push({
                                question_type_id: 20,
                                question: this.passageQuestionEditor[i].content,
                                options: [],
                                answer,
                                heading_option: [],
                                multiple_response: 0,
                                points: this.multiSelect.points.value,
                                exact_match: 0,
                                hint: this.addHintsValue,
                                explanation: this.multiSelect.explanation.value,
                                autograde: this.multiSelect.autograde.value == false ? 0 : 1,
                                word_limit: '',
                                scoring_instruction: '',
                                source: '',
                                target: '',
                                editor_type: 3,
                                question_id: this.questIdNo[i],
                                level: this.multiSelect.level.value,
                                subject_id: this.multiSelect.subject_id.value ?? '',
                                question_topic_id: this.multiSelect.question_topic_id.value ?? '',
                                skill: this.enteredSkillList,
                                predicted_solving_time: minutes + ':' + seconds,
                                question_standard: this.multiSelect.question_standard.value ?? '',
                                question_sub_topic_id: this.multiSelect.question_sub_topic_id.value ?? '',
                            });
                        }
                        else {
                            this.toastr.error('Please fill the Answer');
                            this.valid = false;
                        }
                    }
                    else if (this.passage['controls'].addQuestionType['controls'][i]['controls'].selectType.value == 'sortList') {
                        for (let i = 0; i < this.multiSelect.addMultipleChoice['controls'].length; i++) {
                            this.addNewChoiceValue.push({
                                options: this.multiSelect.addMultipleChoice['controls'][i]['controls']['option'].value
                            });
                        }
                        for (let j = 0; j < this.multiSelect.addHints['controls'].length; j++) {
                            this.addHintsValue.push({
                                hint: this.multiSelect.addHints['controls'][j]['controls']['hint'].value
                            });
                        }
                        for (let k = 0; k < this.multiSelect.addMultipleChoose['controls'].length; k++) {
                            this.correctChoiceValue.push({
                                correctAnswer: this.multiSelect.addMultipleChoose['controls'][k]['controls']['selectOption'].value,
                                correctActive: ''
                            });
                        }
                        if (this.passageQuestionEditor[i].content != '') {
                            this.valid = true;
                            const minutes = this.multiSelect.minutes.value != '' ? this.multiSelect.minutes.value : '00';
                            const seconds = this.multiSelect.seconds.value != '' ? this.multiSelect.seconds.value : '00';
                            this.subQuestionAnswer.push({
                                question_type_id: 16,
                                question: this.passageQuestionEditor[i].content,
                                answer: this.correctChoiceValue,
                                multiple_response: '',
                                points: this.multiSelect.points.value,
                                editor_type: this.multiSelect.chooseType.value,
                                exact_match: '',
                                hint: this.addHintsValue,
                                explanation: this.multiSelect.explanation.value,
                                word_limit: '',
                                options: this.addNewChoiceValue,
                                scoring_instruction: '',
                                source: this.multiSelect.source.value,
                                target: this.multiSelect.target.value,
                                question_id: this.questIdNo[i],
                                level: this.multiSelect.level.value,
                                subject_id: this.multiSelect.subject_id.value ?? '',
                                question_topic_id: this.multiSelect.question_topic_id.value ?? '',
                                skill: this.enteredSkillList,
                                predicted_solving_time: minutes + ':' + seconds,
                                question_standard: this.multiSelect.question_standard.value ?? '',
                                question_sub_topic_id: this.multiSelect.question_sub_topic_id.value ?? '',
                            });
                        }
                        else {
                            this.valid = false;
                            this.toastr.error('Please fill the question & sort list');
                        }
                    }
                    this.addNewChoiceValue = [];
                    this.addHintsValue = [];
                    this.correctChoiceValue = [];
                    this.correctChoiceMatchValueSingle = [];
                }
                if (this.subQuestionAnswer.length != 0 || this.multiSelect.selectType.value != 'select') {
                    // this.listPassageDetails.forEach((items) => {
                    //     if (this.passage.controls.passage_id.value == items.passage_id) {
                    //         this.passage.controls.editorContext.patchValue(items.passage);
                    //     }
                    // });
                    this.questionAnswer = [{
                            question_type_id: this.questionId,
                            question_no: this.quesNo,
                            editor_context: this.passage.controls.editorContext.value,
                            passage_id: this.passage.controls.passage_id.value,
                            subQuestions: this.subQuestionAnswer
                        }];
                }
                else {
                    this.toastr.error('Select atleast one type of question for passage');
                }
            }
            else {
                this.toastr.error('Please select the editor Content');
            }
        }
        console.log(this.questionAnswer, 'this.questionAnswer');
        if (this.valid) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                content_id: this.editData.content_id,
                questions: this.questionAnswer,
                content_format: '3'
                // board: graph.objects
            };
            console.log(data, 'data');
            if (this.type == 'add') {
                this.creator.addQuestions(data).subscribe((successData) => {
                    this.saveQuestionsSuccess(successData, redirectType);
                }, (error) => {
                    console.error(error, 'error_question');
                    this.saveQuestionsFailure();
                });
            }
            else if (this.type == 'edit') {
                this.creator.editQuestion(data).subscribe((successData) => {
                    this.saveQuestionsSuccess(successData, redirectType);
                }, (error) => {
                    console.error(error, 'error_question');
                    this.saveQuestionsFailure();
                });
            }
        }
        else {
            this.questionAnswer = [];
            this.addNewChoiceValue = [];
            this.correctChoiceValue = [];
            this.addHintsValue = [];
        }
    }
    saveQuestionsSuccess(successData, redirectType) {
        if (successData.IsSuccess) {
            this.questionData = successData.ResponseObject;
            this.toastr.success(this.questionData);
            const qnsNo = parseInt(this.qnsNo) + 1;
            this.qnsNo = qnsNo.toString();
            if (redirectType == 'same') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                this.auth.setSessionData('cfs_question_no', this.qnsNo);
                this.formSetValue(redirectType);
            }
            else if (redirectType == 'list') {
                this.auth.setSessionData('cfs_question_no', this.qnsNo);
                this.router.navigate(['/content-text-resource/add-questions/add']);
            }
            else {
                this.router.navigate(['content-text-resource/text-assignment/qEdit']);
            }
        }
    }
    saveQuestionsFailure() {
        this.questionAnswer = [];
        this.addNewChoiceValue = [];
        this.correctChoiceValue = [];
        this.addHintsValue = [];
    }
    // Match & Order > Sort List start
    dropped(event) {
        const controlmultiple = this.matchSort.get('addMultipleChoice');
        moveItemInArray(controlmultiple.controls, event.previousIndex, event.currentIndex);
    }
    droppedCorrect(event) {
        const control = this.matchSort.get('addMultipleChoose');
        moveItemInArray(control.controls, event.previousIndex, event.currentIndex);
    }
    // droppedSource(event: CdkDragDrop<string[]>) {
    //     let control = <any> this.matchSort.get('matchSortSource');
    //     moveItemInArray(control.data, event.previousIndex, event.currentIndex);
    // }
    droppedTarget(event) {
        // let control = <any> this.matchSort.get('matchSortSource');
        const control = this.targetArr;
        moveItemInArray(control, event.previousIndex, event.currentIndex);
    }
    checkAnswer() {
        this.targetArr1.forEach((item, index) => {
            if (item.value == this.targetArr[index].value) {
                this.targetArr[index].valid = '1';
            }
            else {
                this.targetArr[index].valid = '2';
            }
        });
    }
    // checkPassageAnswer(){
    //     this.targetPassageArr1.forEach( (item , index) => {
    //         if (item.value == this.targetPassageArr[index].value){
    //             this.targetPassageArr[index].valid = '1';
    //         }else {
    //             this.targetPassageArr[index].valid = '2';
    //
    //         }
    //     });
    //
    // }
    // Match & Order > Sort List End
    droppedPassage(event, id) {
        this.multiSelect = this.passage['controls'].addQuestionType['controls'][id]['controls'];
        const control = this.multiSelect.addMultipleChoose;
        const controlmultiple = this.multiSelect.addMultipleChoice;
        moveItemInArray(control.controls, event.previousIndex, event.currentIndex);
        moveItemInArray(controlmultiple.controls, event.previousIndex, event.currentIndex);
    }
    droppedCorrectPassage(event, id) {
        this.multiSelect = this.passage['controls'].addQuestionType['controls'][id]['controls'];
        const control = this.multiSelect.addMultipleChoose;
        moveItemInArray(control.controls, event.previousIndex, event.currentIndex);
    }
    // Text Entry Code Start Here
    textarea(type) {
        if (type == 'selected') {
            this.textbutton = true;
        }
        else if (type == 'unselected') {
            this.textbutton = false;
        }
    }
    keyupPassageHandlerFunction(event, id) {
        this.random = this.getRandom();
        this.passageQuestionEditor[id] = event;
        this.questionArray[id] = event;
        this.questionArray1 = event.content;
        this.fillValue = event.content;
        let val = event.content.split(' ');
        this.inputCountPassage = 0;
        if (this.inputArray[id]) {
        }
        else {
            this.inputArray[id] = { datas: [] };
        }
        this.dropDownArray = [];
        val.forEach((item, index) => {
            if (item == 'class="inputValue"') {
                this.inputCountPassage += 1;
                if (this.inputCountPassage > this.inputArray[id].datas.length) {
                    this.inputArray[id].datas.push({ options: [{ id: index + '-input', index, value: '' }], isSelected: '' });
                }
            }
        });
        const spl = this.inputArray[id].datas.length - this.inputCountPassage;
        if (spl > 0) {
            this.inputArray[id].datas.splice(this.inputArray[id].datas.length - 1, spl);
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
        }, 1500);
    }
    keyupHandlerFunction(event) {
        this.contextValue = event.content;
        this.fillValue = event.content;
        this.textEntryPreview = event;
        this.questionValue = event;
        let val = event.content.split(' ');
        this.inputCount = 0;
        this.dropDownCount = 0;
        this.dropDownArray = [];
        if (this.inputArray) {
        }
        else {
            this.inputArray = [];
        }
        val.forEach((item, index) => {
            if (item == 'class="inputValue"') {
                this.inputCount += 1;
                if (this.inputCount > this.inputArray.length) {
                    this.inputArray.push({ options: [{ id: index + '-input', index, value: '' }], isSelected: '' });
                }
            }
            else if (item == 'class="dropDownValue"') {
                this.dropDownCount += 1;
                this.dropDownArray.push({ options: [{ id: index + '-input', index, value: '' }], isSelected: '' });
            }
        });
        const spl = this.inputArray.length - this.inputCount;
        if (spl != 0) {
            this.inputArray.splice(this.inputArray.length - 1, spl);
        }
        if (this.addDropDownArr.controls.length == 0) {
            for (let i = 0; i < this.dropDownCount; i++) {
                this.addDropDownArr.push(this.createAddDropDownOption());
            }
            if (this.dropDownCount == 0 && this.addDropDownArr.controls.length) {
                this.addDropDownArr.removeAt(0);
            }
        }
        else {
            const dif = this.dropDownArray.length - this.addDropDownArr.controls.length;
            for (let i = 0; i < dif; i++) {
                this.addDropDownArr.push(this.createAddDropDownOption());
            }
            if (Math.sign(dif) == -1) {
                for (let i = 0; i < Math.abs(dif); i++) {
                    this.addDropDownArr.removeAt(this.addDropDownArr.length - 1);
                }
            }
        }
    }
    getRandrom() {
        return Math.random() + 'editor';
    }
    getRandromGraph() {
        if (this.graphBoardValue?.container) {
            return this.graphBoardValue.container;
        }
        else {
            return Math.random() + 'box1';
        }
    }
    getRandromPreviewGraph() {
        if (this.graphBoardPreviewValue?.container) {
            return this.graphBoardPreviewValue.container;
        }
        else {
            return Math.random() + 'box1';
        }
    }
    patchEditor(array, index, index2, event) {
        // array.value  ==
        Object.keys(array.controls).forEach(key => {
            console.log(key, 'kkey');
            if (key == index) {
                // this.fillDropDown['controls'].addDropDownOption['controls'][0]['controls'].option1['controls'][0]['controls'].value
                console.log(array.controls[key], 'kkeys');
                this.fillDropDown['controls'].addDropDownOption['controls'][index2]['controls'].options['controls'][key]['controls'].listOption.patchValue(event.content);
            }
        });
        console.log(this.fillDropDown, 'fillDropDown');
    }
    submitInput(array, index, index2) {
        // array.value  ==
        console.log(array, 'arrr');
        console.log(this.fillDropDown['controls'].addDropDownOption['controls'][0]['controls'].options['controls'][0]['controls'].selected.value, 's');
        Object.keys(array.controls).forEach(key => {
            console.log(key, 'kkey');
            if (key == index) {
                // this.fillDropDown['controls'].addDropDownOption['controls'][0]['controls'].option1['controls'][0]['controls'].value
                console.log(array.controls[key], 'kkeys');
                this.fillDropDown['controls'].addDropDownOption['controls'][index2]['controls'].options['controls'][key]['controls'].selected.patchValue('true');
            }
            else {
                this.fillDropDown['controls'].addDropDownOption['controls'][index2]['controls'].options['controls'][key]['controls'].selected.patchValue('false');
                // array.control.patchValue(false);
            }
        });
        console.log(array, 'array');
        console.log(index, 'index');
        console.log(this.inputArray, 'arrr');
        console.log(this.dropDownArray, 'dropDownArray');
    }
    appendInput1() {
        // var container = document.getElementById('container_input');
        // // container.innerHTML = '';
        // container.innerHTML = this.setAns;
        // console.log(container , 'container');
        // this.setAns.forEach((item, index) => {
        //     if (item == '$') {
        //         var container = document.getElementById('container_input');
        //         var input = document.createElement('input');
        //         input.type = 'text';
        //         input.id = 'question-' + index;
        //         input.name = 'question-' + index;
        //         input.setAttribute('value', '');
        //         console.log(input, 'input');
        //         container.appendChild(input);
        //     } else if (item != '' && item != ' $ ') {
        //         var container = document.getElementById('container_input');
        //         var dateSpan = document.createElement('span');
        //         dateSpan.id = 'question-' + index;
        //         dateSpan.className = 'ml-2';
        //
        //         dateSpan.innerHTML = item;
        //         console.log(input, 'input');
        //         container.appendChild(dateSpan);
        //     }
        // });
        // return input;
    }
    changeInput() {
        let arr = [];
        this.setAns = '';
        let value = this.textEntry.controls.text.value;
        this.setAns = value.split(' ');
        console.log(this.setAns, 'arr');
        this.appendInput();
        // this.setAns = this.textEntry.controls.text.value.replace("$", '<input placeholder="kkk">');
    }
    appendInput() {
        var container = document.getElementById('container_input');
        container.innerHTML = '';
        this.setAns.forEach((item, index) => {
            if (item == '$') {
                var container = document.getElementById('container_input');
                var input = document.createElement('input');
                input.type = 'text';
                input.id = 'question-' + index;
                input.name = 'question-' + index;
                input.setAttribute('value', '');
                console.log(input, 'input');
                container.appendChild(input);
            }
            else if (item != '' && item != ' $ ') {
                var container = document.getElementById('container_input');
                var dateSpan = document.createElement('span');
                dateSpan.id = 'question-' + index;
                dateSpan.className = 'ml-2';
                dateSpan.innerHTML = item;
                console.log(input, 'input');
                container.appendChild(dateSpan);
            }
        });
        // return input;
    }
    getEmitedValue(event) {
        this.markType = event;
        console.log(event, 'evet emited');
    }
    getEmitedPrevValue(event) {
        // this.markType = event;
        console.log(event, 'evet getEmitedPrevValue emited');
    }
    getGraphValue(event) {
        this.graphBoardValue = event;
        console.log(event, 'evet emited d');
        console.log(typeof event, 'typeee of evet emited d');
        console.log(this.graphBoardValue, 'graphBoardValuevalue');
    }
    getGraphPrevewValue(event) {
        this.graphBoardPreviewValue = '';
        this.graphBoardPreviewValue = event;
        console.log(event, 'evet  getGraphPrevewValue emited d');
        console.log(typeof event, 'typeee  getGraphPrevewValueof evet emited d');
    }
    getGraphQuestionValue(event, questionid) {
        this.graphQuestionEditor = event;
    }
    getGraphEditorAnswerValue(event) {
        this.graphEditorAnswerVal = event;
    }
    getPassageAddEditorValue(event) {
        this.addPassageContent = event;
        // this.passageContent = event;
        this.passageForm.controls.passageEditor.patchValue(event.content);
    }
    getEditorValue(event) {
        this.multiQuestionEditor = event;
        this.editorEvent = event.content;
        this.fillValue = event.content;
        this.keyupHandlerFunction(event);
    }
    getPassageInputEditorValue(event, id) {
        // this.editorEvent = event;
        this.keyupPassageHandlerFunction(event, id);
    }
    getEditorValue1(event, data) {
        console.log(event, 'eventttt');
        data.options[0].value = event.content;
        // data.value = this.fillValue;
        // this.editorEvent = event;
        // this.keyupHandlerFunction(event);
    }
    getResourceEditor(event) {
        this.resourceEditorContentValue = event.editor;
        this.resourceEditorValue = event.content;
    }
    getExplanationEditor(event) {
        this.explanationEditorContentValue = event.editor;
        this.explanationEditorValue = event.content;
    }
    getPassageExplanationEditor(event, index) {
        this.passage['controls'].addQuestionType['controls'][index]['controls'].explanation.patchValue(event.content);
    }
    getHintEditor(event, index) {
        this.hintArrayEditor[index] = event.editor;
        this.hintArray[index].hint = event.content;
    }
    getPassageHintEditor(event, passageIndex, hintIndex) {
        this.passage['controls'].addQuestionType['controls'][passageIndex]['controls'].addHints['controls'][hintIndex]['controls'].hint.patchValue(event.content);
    }
    getEditorMultipleChoice(event) {
        this.multiQuestionEditor = event;
        this.questionValue = event.content;
    }
    getEditorMatchSort(event) {
        this.matchSortEditor = event;
        this.questionValue = event.content;
    }
    multiAnswerFreeText(event, index, reverseIndex, passageIndex = 0) {
        if (this.questionId == '24') {
            if (this.passage['controls'].addQuestionType['controls'][passageIndex]['controls']['repeatAnswerFreeText']['controls'][index]) {
                console.log('service Called');
                this.multiFreeAnswerEditor[reverseIndex - 1] = event;
                this.passage['controls'].addQuestionType['controls'][passageIndex]['controls']['repeatAnswerFreeText']['controls'][index]?.controls['correct'].patchValue(event.content);
            }
        }
        else {
            if (this.richText['controls'].repeatAnswerFreeText['controls'][index]) {
                this.multiFreeAnswerEditor[reverseIndex - 1] = event;
                this.richText['controls'].repeatAnswerFreeText['controls'][index]?.controls['correct'].patchValue(event.content);
            }
        }
        console.log(this.multiFreeAnswerEditor);
    }
    getEditorContextValue(event, id, type) {
        this.EditorkeyupHandlerFunction(event, id, type);
    }
    getFreeText() {
        console.log('FunctionCalled');
        if (this.answerHighlightValue1) {
            this.answerHighlightValue1.setContent(this.writingAnswerEditor.content);
            console.log(this.answerHighlightValue1, 'highLight');
        }
    }
    getEditorContextValue1(event, id, type) {
        if (this.highlightEditor1) {
            this.highlightEditor1.setContent(event.content);
        }
        // this.answerValue = event.content;
        this.EditorkeyupHandlerFunction(event, id, type);
        // this.highlightEditor1.setContent(event.content);
    }
    async getEditorContextValue2(event, id, type) {
        this.highlightEditor1 = await event.editor;
        this.EditorkeyupHandlerFunction(event, id, type);
    }
    EditorkeyupHandlerFunction(event, id, type) {
        if (type == 'editorContext') {
            this.writingQuestionEditor = event;
            this.contextValue = event.content;
            this.richPreviewValue = event.content;
            if (['20', '55'].indexOf(this.questionId) > -1) {
                this.richPreviewValue = event.content;
            }
            else if (this.questionId == '21') {
                this.plainPreviewValue = event.content;
            }
            else if (this.questionId == '22') {
                this.shortPreviewValue = event.content;
            }
            else if (this.questionId == '9' || this.questionId == '10') {
                this.fillValue = event.content;
            }
            else if (this.questionId == '24') {
                this.contextValue = event.content;
            }
            else if (this.questionId == '28') {
                this.answertValue = event.content;
            }
        }
        else if (type == 'question') {
            this.multiQuestionEditor = event;
            this.questionValue = event;
            this.keyupHandlerFunction(event);
        }
        else if (type == 'answer') {
            this.writingAnswerEditor = event;
            this.answerValue = event.content;
            console.log(this.answerValue, 'answervalue');
            this.answerHighlightValue1 = event.editor;
        }
        else if (type == 'highlight') {
            this.answerHighlightValue = event.content;
        }
    }
    cfsDropdownPreview(id, val) {
        document.getElementById('dropdownPre' + id).innerHTML = val;
        this.clickEvent();
    }
    changeEditor(event) {
        console.log(event.target.value, 'event.target.value');
        console.log(event, 'value');
        this.showTextEditor = event.target.value;
        console.log(this.showTextEditor, 'this.showTextEditor');
    }
    selectedEditorType(event, calledFrom = '', formControl) {
        if (calledFrom == '') {
            this.inputType = event.target.checked ? 'math' : 'text';
        }
        else if (calledFrom == 'showTextEditor') {
            this.showTextEditor = event.target.checked ? 'math' : 'eng';
        }
        else if (['passageEditor', 'passageEditor_eng'].indexOf(calledFrom) > -1) {
            console.log(formControl, 'formControl_chooseType');
            console.log(event.target.checked, 'checked');
            formControl.controls.chooseType.patchValue(event.target.checked ? 'math' : calledFrom == 'passageEditor_eng' ? 'eng' : 'text');
        }
    }
    questionDelete(id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            question_id: [this.questionEditData.subQuestions[id].question_id],
        };
        console.log(data, 'data');
        this.creator.contentDelete(data).subscribe((successData) => {
            console.log(successData);
        }, (error) => {
            console.log(error);
        });
    }
    async getOptionValue(event, id, type, index) {
        console.log(event, 'event');
        let val = event.content;
        if (type == 'option') {
            this.inputEditorArray[index] = event.editor;
            this.optionArray[index] = { options: val, isSelected: '' };
            if (id == '1' || id == '2') {
                this.multipleChoice.get('addMultipleChoice')['controls'][index]['controls']['option'].patchValue(val);
            }
            else {
                this.matchTable.get('addMultipleChoice')['controls'][index]['controls']['option'].patchValue(val);
            }
            if (document.getElementById('myId' + index)) {
                console.log(document.getElementById('myId' + index), 'document');
                document.getElementById('myId' + index).innerHTML = val;
            }
            if (this.questionEditData) {
                if (this.questionEditData.options[index].options != val) {
                    this.clickEvent();
                }
                else if (this.questionEditData.options.length == index + 1) {
                    this.clickEvent();
                }
            }
            else {
                this.clickEvent();
            }
        }
        else if (type == 'chooseType') {
            this.chooseArray[index] = val;
            this.chooseEditorArray[index] = event;
            this.matchTable.get('addMatchTableChoose')['controls'][index]['controls']['option'].patchValue(val);
            console.log(this.chooseArray, 'chooseArrya');
            if (document.getElementById('columnId' + index)) {
                document.getElementById('columnId' + index).innerHTML = val;
            }
            if (this.questionEditData) {
                if (this.questionEditData.answer[index] != val) {
                    this.clickEvent();
                }
                else if (this.questionEditData.answer.length == index + 1) {
                    this.clickEvent();
                }
            }
            else {
                this.clickEvent();
            }
        }
    }
    getPassageOptionValue(event, id, type, index, add, array) {
        let val = event.content;
        if (type == 'multiOption') {
            this.subPassageMulti[index] = event;
            Object.keys(array.controls).forEach(key => {
                if (key == index) {
                    this.passage['controls'].addQuestionType['controls'][add]['controls'].addMultipleChoice['controls'][index]['controls'].option.patchValue(event.content);
                }
            });
            this.passageMultiEditor[add] = { sub: this.subPassageMulti };
            if (document.getElementById('multiOptionId' + add.toString() + index.toString())) {
                console.log(document.getElementById('multiOptionId' + add.toString() + index.toString()), 'document');
                document.getElementById('multiOptionId' + add.toString() + index.toString()).innerHTML = event.content;
            }
            if (this.questionEditData) {
                if (this.questionEditData.subQuestions[add].options[index].options != val) {
                    this.clickEvent();
                }
                else if (this.questionEditData.subQuestions[add].options.length == index + 1) {
                    this.clickEvent();
                }
            }
            else {
                this.clickEvent();
            }
        }
        else if (type == 'chooseRow') {
            this.subPassageRow[index] = event;
            Object.keys(array.controls).forEach(key => {
                if (key == index) {
                    this.passage['controls'].addQuestionType['controls'][add]['controls'].addMultipleChoice['controls'][index]['controls'].option.patchValue(event.content);
                }
            });
            console.log(this.passage['controls'].addQuestionType['controls'][add]['controls'].addMultipleChoice['controls'], 'patch');
            this.passageMultiEditor[add] = { row: this.subPassageRow, column: '' };
            if (this.questionEditData) {
                if (this.questionEditData.subQuestions[add].options[index].options != val) {
                    this.clickEvent();
                }
                else if (this.questionEditData.subQuestions[add].options.length == index + 1) {
                    this.clickEvent();
                }
            }
            else {
                this.clickEvent();
            }
        }
        else if (type == 'chooseColumn') {
            this.subPassageColumn[index] = event;
            Object.keys(array.controls).forEach(key => {
                if (key == index) {
                    this.passage['controls'].addQuestionType['controls'][add]['controls'].addMatchTableChoose['controls'][index]['controls'].option.patchValue(event.content);
                }
            });
            this.passageMultiEditor[add].column = this.subPassageColumn;
            if (this.questionEditData) {
                if (this.questionEditData.subQuestions[add].answer[index] != val) {
                    this.clickEvent();
                }
                else if (this.questionEditData.subQuestions[add].answer.length == index + 1) {
                    this.clickEvent();
                }
            }
            else {
                this.clickEvent();
            }
            // if (document.getElementById('columnId' + add.toString() + index.toString())) {
            //     document.getElementById('columnId' + add.toString() + index.toString()).innerHTML = event.content;
            // }
        }
        else if (type == 'sortChoose') {
            Object.keys(array.controls).forEach(key => {
                console.log(key, 'kkey');
                if (key == index) {
                    // this.fillDropDown['controls'].addDropDownOption['controls'][0]['controls'].option1['controls'][0]['controls'].value
                    console.log(array.controls[key], 'kkeys');
                    this.passage['controls'].addQuestionType['controls'][add]['controls'].addMultipleChoice['controls'][index]['controls'].option.patchValue(event.content);
                    this.passage['controls'].addQuestionType['controls'][add]['controls'].addMultipleChoose['controls'][index]['controls'].selectOption.patchValue(event.content);
                }
            });
            if (document.getElementById('input' + add.toString() + 'math' + index.toString())) {
                document.getElementById('input' + add.toString() + 'math' + index.toString()).innerHTML = event.content;
            }
        }
        else if (type == 'question') {
            this.passageQuestionEditor[add] = event;
            this.questionArray[add] = val;
        }
    }
    // getPassageEssayValue(event, index) {
    //     this.passageAnswer[index] = [{correctAnswer: event.content}];
    // }
    addHintsArray() {
        this.hintArray.push({ hint: '' });
    }
    removeHintArray(index) {
        this.hintArray.splice(index, 1);
    }
    createNewCorrectAnswer(value = '') {
        return this.formBuilder.group({
            correct: value,
        });
    }
    addNewCorrectAnswerForFreeText(data, value = '') {
        this.repeatAnswerFreeText = data;
        this.repeatAnswerFreeText.insert(0, this.createNewCorrectAnswer(value));
    }
    deleteCorrectAnswerForFreeText(array, index, reverseIndex, passageIndex = 0) {
        this.repeatAnswerFreeText = array;
        this.repeatAnswerFreeText.removeAt(index);
        if (this.type == 'edit' && this.questIdNo == '20') {
            this.questionEditData.answer.splice(reverseIndex - 1, 1);
        }
        else if (this.type == 'edit' && this.questIdNo == '24') {
            this.questionEditData.subQuestions[passageIndex].answer.splice(reverseIndex - 1, 1);
        }
        this.multiFreeAnswerEditor.splice(reverseIndex - 1, 1);
    }
    passageCREDService(type) {
        if (type == 'add' && !this.passageForm.valid) {
            this.toastr.error('Kindly Fill all the fields');
            return false;
        }
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        if (type == 'add' || type == 'edit') {
            data['title'] = this.passageForm.controls.title.value;
            data['passage'] = type == 'add' ? this.addPassageContent.content : this.passageContent.content;
            data['status'] = '1';
            type == 'edit' ? data['passage_id'] = this.passage.controls.passage_id.value : '';
        }
        else if (type == 'list' && this.type == 'edit') {
            this.questionEditData = JSON.parse(this.auth.getSessionData('questionData'));
            data['passage_id'] = this.passage.controls.passage_id.value == '' ? (this.questionEditData.subQuestions[0]?.passage_id ?? '') : this.passage.controls.passage_id.value;
        }
        this.contentDetail.passageAllService(data, type).subscribe((successData) => {
            this.passageCREDSuccess(successData, type);
        }, (error) => {
            console.error(error, 'error');
        });
    }
    passageCREDSuccess(successData, type) {
        if (successData.IsSuccess) {
            if (type == 'list') {
                this.listPassageDetails = successData.ResponseObject;
                const passage_id = this.passage.controls.passage_id.value == '' ? (this.questionEditData?.subQuestions[0]?.passage_id ?? '') : this.passage.controls.passage_id.value;
                console.log(passage_id, 'passage_id');
                const findPassage = this.listPassageDetails.find(value => value.passage_id == passage_id);
                if (findPassage && findPassage != '') {
                    console.log(findPassage.passage, 'findPassage.passage');
                    this.passageContent ? this.passageContent.editor.setContent(findPassage.passage) : '';
                    this.passage.controls.editorContext.patchValue(findPassage.passage);
                }
            }
            else {
                this.toastr.success(successData.ResponseObject);
                if (type == 'add') {
                    this.passage.controls.passage_id.patchValue(successData?.passage_id ?? '');
                    this.modalRef.close();
                    this.formPassageValue();
                }
                console.log(this.passage.controls.passage_id.value, 'vasasdasda');
                if (this.type == 'add') {
                    this.getPassageValue(this.passage.controls.passage_id.value ?? '', type);
                }
                else {
                    this.passageCREDService('list');
                }
            }
        }
    }
    wordCount(variableName = '') {
        const value = variableName == 'question' ? this.writingQuestionEditor : this.writingAnswerEditor;
        return value ? value.trim().split(/\s+/).length : 0;
    }
    formSetValue(redirectType) {
        this.questionAnswer = [];
        this.addNewChoiceValue = [];
        this.correctChoiceValue = [];
        this.addHintsValue = [];
        this.multiFreeAnswerEditor = [];
        this.enteredSkillList = [];
        if (this.questionId == '24') {
            const selectedValue = redirectType == 'same' ?
                this.passage['controls'].addQuestionType['controls'][0]['controls'].selectType.value : 'MultiChoice';
            this.passage = this.formBuilder.group({
                editorContext: '',
                question: '',
                points: '1',
                explanation: '',
                passage_id: '',
                addQuestionType: this.formBuilder.array([this.createQuestionType()])
            });
            this.passage['controls'].addQuestionType['controls'][0]['controls'].selectType.patchValue(selectedValue);
            this.formPassageValue();
        }
        else if ((this.questionId == '40' || this.questionId == '41') && redirectType == 'same') {
            this.saveAndDuplicate = 'called';
        }
        // Multiple Choice-Standard and Multi Selection
        this.graphForm = this.formBuilder.group({
            level: '2',
            points: '1',
            minutes: '',
            seconds: '',
            subject_id: null,
            question_topic_id: null,
            question_sub_topic_id: null,
            question_standard: null
        });
        this.multipleChoice = this.formBuilder.group({
            type: 'text',
            editorContext: '',
            question: '',
            points: '1',
            explanation: '',
            multiResponse: this.questionId == '2',
            autograde: true,
            level: '2',
            minutes: '',
            seconds: '',
            subject_id: null,
            question_topic_id: null,
            question_sub_topic_id: null,
            question_standard: null,
            addMultipleChoice: this.formBuilder.array([this.createMultiple(), this.createMultiple(), this.createMultiple(), this.createMultiple()]),
        });
        // Match Table-Standard and Match Table-Labels
        this.correctChoiceMatchValue = [];
        this.matchTable = this.formBuilder.group({
            type: 'text',
            editorContext: '',
            question: '',
            points: '1',
            explanation: '',
            multiResponse: this.questionId == '7',
            autograde: true,
            level: '2',
            minutes: '',
            seconds: '',
            subject_id: null,
            question_topic_id: null,
            question_sub_topic_id: null,
            question_standard: null,
            addMultipleChoice: this.formBuilder.array([this.createMatch(), this.createMatch(), this.createMatch(), this.createMatch()]),
            addMatchTableChoose: this.formBuilder.array([this.createMatchChoose('True'), this.createMatchChoose('False')]),
        });
        // Fill in the Blanks > Text Drop Down
        this.fillDropDown = this.formBuilder.group({
            type: 'text',
            editorContext: '',
            question: '',
            points: '1',
            explanation: '',
            autograde: true,
            level: '2',
            minutes: '',
            seconds: '',
            subject_id: null,
            question_topic_id: null,
            question_sub_topic_id: null,
            question_standard: null,
            addMultipleChoice: this.formBuilder.array([this.createMatch(), this.createMatch()]),
            addHints: this.formBuilder.array([this.createHint()]),
            addDropDownOption: this.formBuilder.array([])
        });
        this.addDropDownArr = this.fillDropDown.controls.addDropDownOption;
        // this.addDropDownArr.push(this.createAddDropDownOption());
        this.matchSort = this.formBuilder.group({
            type: 'text',
            editorContext: '',
            question: '',
            points: '1',
            explanation: '',
            source: '',
            target: '',
            multiResponse: false,
            level: '2',
            autograde: true,
            minutes: '',
            seconds: '',
            subject_id: null,
            question_topic_id: null,
            question_sub_topic_id: null,
            question_standard: null,
            addMultipleChoice: this.formBuilder.array([this.createSort(), this.createSort(), this.createSort(), this.createSort()]),
            addMultipleChoose: this.formBuilder.array([this.createSortChoose(), this.createSortChoose(), this.createSortChoose(), this.createSortChoose()]),
            matchSortSource: this.formBuilder.array([this.createSortSource(), this.createSortSource(), this.createSortSource(), this.createSortSource()]),
            matchSortTarget: this.formBuilder.array([this.createSortTarget(), this.createSortTarget(), this.createSortTarget(), this.createSortTarget()]),
            addHints: this.formBuilder.array([this.createHint()])
        });
        this.richText = this.formBuilder.group({
            editorContext: '',
            answer: '',
            question: '',
            points: this.questionId == '20' ? '1' : '35',
            explanation: '',
            autograde: this.questionId == '20',
            level: '2',
            minutes: '',
            seconds: '',
            scoring_instruction: '',
            subject_id: null,
            question_topic_id: null,
            question_sub_topic_id: null,
            question_standard: null,
            addHints: this.formBuilder.array([this.createHint()]),
            repeatAnswerFreeText: this.formBuilder.array([this.createNewCorrectAnswer()])
        });
        this.plainText = this.formBuilder.group({
            editorContext: '',
            answer: '',
            question: '',
            points: '',
            explanation: '',
            autograde: false,
            level: '2',
            addHints: this.formBuilder.array([this.createHint()])
        });
        this.shortText = this.formBuilder.group({
            editorContext: '',
            answer: '',
            question: '',
            points: '',
            explanation: '',
            autograde: false,
            level: '2',
            addHints: this.formBuilder.array([this.createHint()])
        });
        this.highlight = this.formBuilder.group({
            points: '1',
            autograde: false,
            level: '2'
        });
        this.textEntry = this.formBuilder.group({
            editorContext: '',
            question: '',
            points: '1',
            explanation: '',
            text: '',
            autograde: true,
            setCorrectAnswer: '',
            level: '2',
            addHints: this.formBuilder.array([this.createHint()])
        });
        this.inputArray = [];
        this.hintArrayEditor.length != 0 ? this.emptyEditorArrayValue(this.hintArrayEditor) : '';
        this.inputEditorArray.length != 0 ? this.emptyEditorArrayValue(this.inputEditorArray) : '';
        this.hintArray = [];
        this.hintArray.push({ hint: '' });
        this.hintArrayEditor = [];
        this.hintArrayEditor.push('');
        this.graphEditorAnswerVal != '' ? this.graphEditorAnswerVal.editor.setContent('') : '';
        this.graphQuestionEditor != '' ? this.graphQuestionEditor.editor.setContent('') : '';
        this.writingAnswerEditor != '' ? this.writingAnswerEditor.editor.setContent('') : '';
        this.writingQuestionEditor != '' ? this.writingQuestionEditor.editor.setContent('') : '';
        this.matchSortEditor != '' ? this.matchSortEditor.editor.setContent('') : '';
        this.multiQuestionEditor != '' ? this.multiQuestionEditor.editor.setContent('') : '';
        this.explanationEditorContentValue != '' ? this.explanationEditorContentValue.setContent('') : '';
        this.resourceEditorContentValue != '' ? this.resourceEditorContentValue.setContent('') : '';
        this.explanationEditorValue != '' ? this.explanationEditorValue = '' : '';
        this.resourceEditorValue != '' ? this.resourceEditorValue = '' : '';
    }
    emptyEditorArrayValue(array) {
        array.forEach((items) => {
            if (items != '') {
                items.setContent('');
            }
        });
    }
    formPassageValue() {
        this.passageForm = this.formBuilder.group({
            title: ['', Validators.required],
            passageEditor: ['', Validators.required]
        });
        this.addPassageContent != '' ? this.addPassageContent.editor.setContent('') : '';
    }
    onChipInput(event) {
        console.log(event, 'event');
    }
    addSkill(event, calledFrom = '') {
        console.log(event, 'add');
        console.log(calledFrom, 'calledFrom');
        let valueEntered;
        let valueEnteredWithOutLowercase;
        if (calledFrom == '') {
            const input = event.target;
            valueEntered = input.value.trim().toLowerCase();
            valueEnteredWithOutLowercase = input.value.trim();
        }
        else {
            valueEntered = event.skill.toLowerCase();
            valueEnteredWithOutLowercase = event.skill;
        }
        console.log(this.enteredSkillList);
        const checkSkillAlreadyExist = this.enteredSkillList.some((value) => value.trim().toLowerCase() == valueEntered);
        if (!checkSkillAlreadyExist && valueEnteredWithOutLowercase != '') {
            this.enteredSkillList.push(valueEnteredWithOutLowercase);
            if (this.skillInput) {
                this.skillInput.nativeElement.value = '';
                this.totalSkillList = [];
            }
            console.log(this.enteredSkillList, 'enteredSkil');
        }
    }
    removeSkill(index) {
        this.enteredSkillList.splice(index, 1);
        console.log(this.enteredSkillList, 'removeSkill');
    }
    subjectList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: 'active'
        };
        this.book.subjectList(data).subscribe((successData) => {
            this.subjectListSuccess(successData);
        }, (error) => {
            console.log(error, 'error');
        });
    }
    subjectListSuccess(successData) {
        if (successData.IsSuccess) {
            this.subjectData = successData.ResponseObject;
        }
    }
    subjectChanged(event, formControl, servcieType) {
        if (event) {
            this.questionTopicListData = [];
            this.subTopicListData = [];
            formControl.controls.question_topic_id.patchValue(null);
            formControl.controls.question_sub_topic_id.patchValue(null);
            this.selectChanged(event, formControl, servcieType);
        }
    }
    selectChanged(event, formControl, servcieType) {
        console.log(event, 'dasda');
        if (event) {
            this.commonService(servcieType, formControl);
        }
    }
    serachSkill(event) {
        console.log(event.target.value);
        if (event.target.value.trim() != '') {
            const payload = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                skill: event.target.value.trim()
            };
            this.auth.postService(payload, 'content/questionSkill').subscribe((successData) => {
                console.log(successData);
                this.totalSkillList = successData.IsSuccess ? successData.ResponseObject : [];
            }, (error => console.error(error, 'question_skill')));
        }
    }
    commonService(type, formControl, patchValue = '') {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        if (type == 'questionSubTopic') {
            payload['topic_id'] = formControl.controls.question_topic_id.value ?? '';
        }
        else if (type == 'questionTopic') {
            payload['subject_id'] = formControl.controls.subject_id.value ?? '';
        }
        const url = 'content/' + type;
        this.auth.postService(payload, url).subscribe((successData) => {
            if (type == 'questionStandard') {
                this.standardListData = successData.IsSuccess ? successData.ResponseObject : [];
            }
            else if (type == 'questionTopic') {
                this.questionTopicListData = successData.IsSuccess ? successData.ResponseObject : [];
            }
            else {
                this.subTopicListData = successData.IsSuccess ? successData.ResponseObject : [];
                formControl.controls.question_sub_topic_id.patchValue(patchValue != '' ? patchValue : null);
            }
        }, (error) => console.error(error, 'error_standardList'));
    }
    static { this.ɵfac = function QuestionPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || QuestionPageComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.ClassService), i0.ɵɵdirectiveInject(i3.ContentService), i0.ɵɵdirectiveInject(i4.ConfigurationService), i0.ɵɵdirectiveInject(i5.DomSanitizer), i0.ɵɵdirectiveInject(i6.FormBuilder), i0.ɵɵdirectiveInject(i7.CreatorService), i0.ɵɵdirectiveInject(i8.ToastrService), i0.ɵɵdirectiveInject(i9.Router), i0.ɵɵdirectiveInject(i10.ValidationService), i0.ɵɵdirectiveInject(i9.ActivatedRoute), i0.ɵɵdirectiveInject(i11.NgbModal), i0.ɵɵdirectiveInject(i12.ContentdetailService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: QuestionPageComponent, selectors: [["app-question-page"]], viewQuery: function QuestionPageComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(GraphComponentComponent, 5);
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.childGraph = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deletePassageQuestion = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.passageAdd = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.skillInput = _t.first);
        } }, decls: 32, vars: 23, consts: [["settings", ""], ["deletePassageQuestion", ""], ["passageAdd", ""], ["skillList", ""], ["skillInput", ""], [3, "ngClass"], [1, "card", "resource-link-card", "p-4"], [4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "card", "px-4", "pt-3", "pb-4", "mt-3"], [1, "row"], ["class", "col-12", 3, "hidden", 4, "ngIf"], ["class", "col-12 mt-3", 3, "hidden", 4, "ngIf"], ["class", "col-12 mt-3", 4, "ngIf"], ["class", "col-12 d-flex flex-column", 3, "hidden", 4, "ngIf"], [1, "col-12", "text-right"], ["class", "btn btn-outline-info mr-2", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-danger mr-2", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary mr-2", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-success mr-2", 3, "click", 4, "ngIf"], ["class", "btn-group dropup mr-2", 4, "ngIf"], [1, "col-12"], [1, "letter"], [1, "col-12", 3, "hidden"], [3, "formGroup"], [1, "card", "px-4", "pt-3", "pb-4"], [1, "col-12", "mt-2"], [1, "row", "px-2", "mb-2", "align-items-center"], [1, "pl-1", "pr-2", 2, "width", "5% !important"], [1, "mb-0", "question-no"], [1, "font-weight-bold", "mb-0"], [1, "text-danger"], [3, "emitEditorValue", "height", "readonly", "showDropBtn", "showInputBtn", "id", "editorPatchValue"], ["class", "form-control", "cols", "30", "formControlName", "question", "rows", "5", 4, "ngIf"], [1, "col-6", "mb-3", "align-self-center"], [1, "col-6", "mb-3", "pointsSec", "d-flex", "align-items-end", "justify-content-end"], [1, "checkbox", "checkbox-primary", "d-flex", "align-items-center"], ["data-original-title", "", "formControlName", "multiResponse", "id", "checkbox-primary-1", "title", "", "type", "checkbox", 1, "cursor", 3, "change"], ["for", "checkbox-primary-1", 1, "ml-1"], ["formControlName", "autograde", "type", "checkbox", "id", "autograde_multiple_choice", 1, "cursor", "ml-3"], ["for", "autograde_multiple_choice", 1, "ml-1"], ["type", "checkbox", "id", "math_editor_multiple_choice", 1, "cursor", "ml-3", 3, "change", "disabled", "checked"], ["for", "math_editor_multiple_choice", 1, "ml-1"], ["class", "col-12 form-group", "formArrayName", "addMultipleChoice", 4, "ngFor", "ngForOf"], [1, "btn-sm", "btn-outline-primary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle", "mr-1"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "col-12", "mt-3", 3, "hidden"], [1, "col-12", "pl-4", "question-align", 3, "innerHTML"], ["class", "col-12 mt-2", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], ["cols", "30", "formControlName", "question", "rows", "5", 1, "form-control"], ["formArrayName", "addMultipleChoice", 1, "col-12", "form-group"], [1, "input-group", "inputMenu", "flex-row", 2, "flex-wrap", "nowrap", 3, "formGroupName"], ["class", "m-auto pr-2", 4, "ngIf"], ["class", "m-auto pr-2 cursor", 4, "ngIf"], [1, "m-auto", "pr-2", "pb-1", "cursor", 3, "for"], ["class", "flex-fill", 3, "editorPatchValue", "height", "id", "emitEditorValue", 4, "ngIf"], ["aria-label", "Amount (to the nearest dollar)", "class", "form-control", "formControlName", "option", "type", "text", 3, "placeholder", 4, "ngIf"], [1, "input-group-append", "cursor", 3, "click"], [1, "input-group-text"], ["alt", "Delete", "src", "assets/images/pdf-icons/Icon material-delete.png", 1, "img-fluid"], [1, "m-auto", "pr-2"], ["type", "radio", 1, "cursor", 3, "change", "name", "id", "checked"], [1, "m-auto", "pr-2", "cursor"], ["type", "checkbox", 1, "cursor", 3, "change", "name", "id", "checked"], [1, "flex-fill", 3, "emitEditorValue", "editorPatchValue", "height", "id"], ["aria-label", "Amount (to the nearest dollar)", "formControlName", "option", "type", "text", 1, "form-control", 3, "placeholder"], ["class", "mb-2 multiSelectCard d-flex p-2", 4, "ngFor", "ngForOf"], [1, "mb-2", "multiSelectCard", "d-flex", "p-2"], [1, "multichoice-option1", "mr-2", 3, "ngClass"], [1, "mt-1", "ml-2", "paragraph-space"], ["class", "mb-2 multiSelectCard p-2", 4, "ngFor", "ngForOf"], [1, "mb-2", "multiSelectCard", "p-2"], [1, "d-flex", "flex-row"], ["class", "mt-1 ml-2 paragraph-space", 3, "innerHTML", 4, "ngIf"], [1, "mt-1", "ml-2", "paragraph-space", 3, "innerHTML"], [1, "col-12", "mb-3"], ["formControlName", "autograde", "type", "checkbox", "id", "autograde_multiple_choice_2", 1, "cursor", "ml-3"], ["for", "autograde_multiple_choice_2", 1, "ml-1"], ["type", "checkbox", "id", "math_editor_multiple_choice_2", 1, "cursor", "ml-3", 3, "change", "disabled", "checked"], ["for", "math_editor_multiple_choice_2", 1, "ml-1"], [1, "col-12", "my-2"], [1, "font-weight-bold"], ["class", "col-12 form-group", "formArrayName", "addMatchTableChoose", 4, "ngFor", "ngForOf"], [1, "btn-sm", "btn-outline-primary", 3, "click", "hidden"], ["aria-hidden", "true", 1, "mr-1", "fa", "fa-plus-circle"], [1, "card", "p-3", "mt-3"], [1, "col-12", "my-2", "table-flexible"], [1, "table", "table-bordered", "text-center", 3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "col-12", "mt-2", 3, "hidden"], [1, "col-12", "table-flexible"], [1, "table", "table-bordered", "text-center"], [1, "input-group", "inputMenu", 2, "flex-wrap", "nowrap", 3, "formGroupName"], ["aria-label", "Amount (to the nearest dollar)", "class", "form-control", "formControlName", "option", "type", "text", 3, "readonly", "placeholder", 4, "ngIf"], ["class", "flex-fill", 3, "editorPatchValue", "height", "id", "readonly", "emitEditorValue", 4, "ngIf"], [1, "input-group-append", "cursor", 3, "click", "ngClass"], ["src", "assets/images/pdf-icons/Icon material-delete.png", 1, "img-fluid"], ["aria-label", "Amount (to the nearest dollar)", "formControlName", "option", "type", "text", 1, "form-control", 3, "readonly", "placeholder"], [1, "flex-fill", 3, "emitEditorValue", "editorPatchValue", "height", "id", "readonly"], ["formArrayName", "addMatchTableChoose", 1, "col-12", "form-group"], ["class", "innerhtml-margin-clear", 3, "id", 4, "ngFor", "ngForOf"], [1, "innerhtml-margin-clear", 3, "id"], ["class", "innerhtml-margin-clear", 3, "id", 4, "ngIf"], ["class", "radio_animated cursor", "type", "radio", 3, "name", "id", "change", 4, "ngIf"], ["type", "checkbox", "class", "cursor", 3, "id", "change", 4, "ngIf"], ["type", "radio", 1, "radio_animated", "cursor", 3, "change", "name", "id"], ["type", "checkbox", 1, "cursor", 3, "change", "id"], [3, "id", 4, "ngFor", "ngForOf"], [3, "id"], [3, "id", 4, "ngIf"], ["class", "radio_animated", "type", "radio", 3, "name", 4, "ngIf"], ["type", "checkbox", 4, "ngIf"], ["type", "radio", 1, "radio_animated", 3, "name"], ["type", "checkbox"], [1, "card", "px-4", "pt-3", "pb-4", "mt-3", 3, "hidden"], [3, "emitEditorValue", "height", "showDropBtn", "showInputBtn", "id", "editorPatchValue"], [1, "row", 3, "hidden"], ["class", "col-12 pl-3 pr-3", 4, "ngIf"], [1, "col-12", "p-4"], [3, "innerHTML"], [1, "col-12", 3, "keypress"], ["class", "d-flex flex-row p-3", 4, "ngFor", "ngForOf"], [1, "col-12", "pl-3", "pr-3"], [1, "col-12", "mb-3", "pointsSec", "d-flex", "align-items-end", "justify-content-end"], ["formControlName", "autograde", "type", "checkbox", "id", "autograde_dropdown", 1, "cursor", "ml-3"], ["for", "autograde_dropdown", 1, "ml-1"], ["type", "checkbox", "id", "math_editor_dropdown", 1, "cursor", "ml-3", 3, "change", "disabled", "checked"], ["for", "math_editor_dropdown", 1, "ml-1"], ["class", "row", "formArrayName", "addDropDownOption", 4, "ngFor", "ngForOf"], ["formArrayName", "addDropDownOption", 1, "row"], ["class", "col-12", 3, "formGroupName", 4, "ngIf"], [1, "col-12", 3, "formGroupName"], ["class", "col-12", "formArrayName", "options", 4, "ngFor", "ngForOf"], ["formArrayName", "options", 1, "col-12"], [1, "row", "mt-2", 3, "formGroupName"], [1, "col-2", "placeSelf"], [1, "col-5", "d-flex", "justify-content-between"], ["formControlName", "listOption", "class", "mt-0 ml-2 form-control w-100", "placeholder", "Enter drop down value *", 4, "ngIf"], [3, "showDropBtn", "showInputBtn", "height", "id", "editorPatchValue", "emitEditorValue", 4, "ngIf"], [1, "col-4", "d-flex", "flex-row"], ["class", "placeSelf cursor", 4, "ngIf"], ["formControlName", "listOption", "placeholder", "Enter drop down value *", 1, "mt-0", "ml-2", "form-control", "w-100"], [3, "emitEditorValue", "showDropBtn", "showInputBtn", "height", "id", "editorPatchValue"], [1, "placeSelf", "cursor"], ["aria-hidden", "true", 1, "fa", "fa-check", "pl", "mr-2", 3, "click", "ngClass"], ["aria-hidden", "true", 1, "fa", "fa-trash", "wrong-answer", "ml-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus", "correct-answer", "ml-2", 3, "click"], [1, "d-flex", "flex-row", "p-3"], [1, "placeSelf"], [1, "col-md-11"], ["data-toggle", "dropdown", 1, "col-md-12", "innerhtml-margin-clear", "p-2", "dropdown-border", "dropdown-toggle", "d-flex", "justify-content-between", 3, "id"], [1, "col-md-11", "dropdown-menu"], [1, "dropdown-item", "dropdown-link"], ["class", "dropdown-item dropdown-link innerhtml-margin-clear", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "dropdown-item", "dropdown-link", "innerhtml-margin-clear", 3, "innerHTML"], ["class", "col-12 mb-1", 4, "ngIf"], [3, "emitEditorValue", "editorPatchValue", "height", "id", "showDropBtn", "showInputBtn"], [1, "col-12", "div-disable", 3, "keypress"], [1, "card"], [1, "col-12", "mb-1"], ["type", "button", 1, "pull-right", "btn", "btn-primary", 3, "click"], [1, "col-6", "align-self-center"], [1, "col-6", "pointsSec", "d-flex", "align-items-end", "justify-content-end"], ["formControlName", "autograde", "type", "checkbox", "id", "autograde_input", 1, "cursor", "ml-3"], ["for", "autograde_input", 1, "ml-1"], ["type", "checkbox", "id", "math_editor_input", 1, "cursor", "ml-3", 3, "change", "disabled", "checked"], ["for", "math_editor_input", 1, "ml-1"], ["class", "d-flex flex-row mt-1 mb-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "mt-1", "mb-2"], [1, "mr-2"], [1, "w-100"], ["class", "mt-0 ml-2 form-control w-50", "placeholder", "Enter the answer *", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], [3, "editorPatchValue", "height", "id", "showDropBtn", "showInputBtn", "emitEditorValue", 4, "ngIf"], ["placeholder", "Enter the answer *", 1, "mt-0", "ml-2", "form-control", "w-50", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "mt-0", "ml-2", "form-control", "w-50", 3, "innerHTML", "id"], [3, "emitEditorValue", "editorPatchValue", "height", "id", "readonly"], ["formControlName", "autograde", "type", "checkbox", "id", "autograde_sort", 1, "cursor", "ml-3"], ["for", "autograde_sort", 1, "ml-1"], ["type", "checkbox", "id", "math_editor_sort", 1, "cursor", "ml-3", 3, "change", "disabled", "checked"], ["for", "math_editor_sort", 1, "ml-1"], [1, "col-6", "mt-2"], ["placeholder", "Source", "formControlName", "source", 1, "form-control", "w-100", 3, "readonly"], ["placeholder", "Target", "formControlName", "target", 1, "form-control", "w-100", 3, "readonly"], [1, "col-md-12", "mt-3"], ["cdkDropList", "", 1, "col-12", "col-lg-6", 3, "cdkDropListDropped"], ["class", "col-12 form-group", "formArrayName", "addMultipleChoose", 4, "ngFor", "ngForOf"], [1, "row", "mt-2"], ["cdkDropList", "", 1, "col-6"], ["class", "col-12 form-group", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "input-group", "mb-1", "inputMenu", 2, "flex-wrap", "nowrap", 3, "formGroupName"], [1, "input-group-prepend"], ["src", "assets/images/pdf-icons/equal@2x.png", 1, "img-fluid"], ["class", "form-control", "formControlName", "option", "type", "text", 3, "readonly", "placeholder", "keyup", 4, "ngIf"], [1, "input-group-append", "cursor"], ["src", "assets/images/pdf-icons/Icon material-delete.png", 1, "img-fluid", 3, "click"], ["formControlName", "option", "type", "text", 1, "form-control", 3, "keyup", "readonly", "placeholder"], ["formArrayName", "addMultipleChoose", 1, "col-12", "form-group"], ["cdkDrag", "", 1, "input-group", "inputMenu", "mb-1", 3, "formGroupName"], ["class", "p-3", "style", "border: 1px solid #ced4da; width: 90%;overflow: auto;max-height: 32vh", 3, "innerHTML", 4, "ngIf"], ["aria-placeholder", "item", "class", "form-control mb-0 overflow-scroll", 3, "innerHTML", 4, "ngIf"], [1, "p-3", 2, "border", "1px solid #ced4da", "width", "90%", "overflow", "auto", "max-height", "32vh", 3, "innerHTML"], ["aria-placeholder", "item", 1, "form-control", "mb-0", "overflow-scroll", 3, "innerHTML"], [1, "col-12", "form-group"], ["cdkDrag", "", 1, "input-group", "my-2", "inputMenu", 3, "cdkDragDisabled"], ["cdkDrag", "", 1, "input-group", "my-2", "inputMenu"], ["alt", "Drag", "src", "assets/images/pdf-icons/equal@2x.png", 1, "img-fluid"], [1, "mb-0"], [3, "editorPatchValue", "height", "emitEditorValue", 4, "ngIf"], ["class", "text-area", 4, "ngIf"], [1, "card", "px-4", "pt-3", "pb-4", "mt-3", "mb-0"], ["class", "col-8 align-self-center", 4, "ngIf"], ["class", "col-4 pointsSec d-flex align-items-end justify-content-end", 4, "ngIf"], ["class", "col-12 my-2", 4, "ngIf"], ["class", "col-12 my-2 text-area", 4, "ngIf"], [3, "emitEditorValue", "editorPatchValue", "height"], [1, "text-area"], ["rows", "10", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "word-count"], [1, "card", "px-4", "pt-3", "pb-4", "mb-0"], [1, "col-12", "my-2", "px-0"], ["placeholder", "Please enter your Stimulus Articles", "formControlName", "scoring_instruction", "rows", "5", 1, "form-control"], [1, "col-8", "align-self-center"], ["class", "font-weight-bold mb-0", 4, "ngIf"], [1, "col-4", "pointsSec", "d-flex", "align-items-end", "justify-content-end"], ["formControlName", "autograde", "type", "checkbox", "id", "autograde_free_text", 1, "cursor", "ml-3"], ["for", "autograde_free_text", 1, "ml-1"], ["class", "btn btn-outline-primary ml-3", 3, "click", 4, "ngIf"], [1, "btn", "btn-outline-primary", "ml-3", 3, "click"], [1, "fa", "fa-plus-circle", "mr-1"], [1, "col-12", "my-2", "text-area"], ["rows", "10", "readonly", "", "placeholder", "Please enter your question", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "col-12 mb-3", "formArrayName", "repeatAnswerFreeText", 4, "ngFor", "ngForOf"], ["formArrayName", "repeatAnswerFreeText", 1, "col-12", "mb-3"], [1, "mb-3", "d-flex", 3, "formGroupName"], [1, "sub-question-no", "mt-0", "w-4", 2, "height", "36px !important"], ["class", "w-3", 4, "ngIf"], [1, "w-3"], [1, "pull-right", "border", "p-2", "cursor", 3, "click"], ["alt", "", "src", "assets/images/pdf-icons/delete2.png", "title", "Delete", 1, "cursor"], ["rows", "10", "placeholder", "Please enter your sample essay", 1, "form-control", 3, "ngModelChange", "ngModel", "readOnly", "ngModelOptions"], [3, "emitEditorValue", "height", "editorPatchValue"], [1, "row", "pointsSec"], [1, "col-12", "py-2"], [1, "col-4"], ["formControlName", "level", 1, "form-control"], ["value", "1"], ["value", "2"], ["value", "3"], [1, "labelName"], ["formControlName", "points", "type", "text", 1, "form-control", "pointInput", 3, "keypress"], [1, "col-12", "mt-3"], [3, "height"], [1, "col-12", "mt-4", "d-flex", "flex-column"], ["placeholder", "Enter Sample Answer", "formControlName", "explanation", 1, "form-control", "inputHeight", "w=100"], [1, "row", "mb-2"], [1, "col-6"], ["class", "col-12 form-group", "formArrayName", "addHints", 4, "ngFor", "ngForOf"], ["formArrayName", "addHints", 1, "col-12", "form-group"], [1, "input-group", "mb-3", "inputMenu", 3, "formGroupName"], ["placeholder", "Enter a hint for the problem", "formControlName", "hint", 1, "form-control", "inputHeight", "w=100"], ["class", "input-group-append cursor", 3, "click", 4, "ngIf"], ["class", "px-2", "style", "width: 5% !important;", 4, "ngIf"], [1, "mx-0", "mb-2", "col-12", "d-inline-flex", "justify-content-between", "align-items-center"], [3, "emitEditorValue", "editorPatchValue", "height", "inlineEditor", "id", "readonly"], ["class", "row mt-4", "formArrayName", "addQuestionType", 4, "ngFor", "ngForOf"], [1, "px-2", 2, "width", "5% !important"], ["class", "col-5", 4, "ngIf"], [1, "col-3", "align-self-end"], [1, "btn", "btn-primary", "w-100", 3, "click"], [1, "col-5"], ["formControlName", "passage_id", 1, "form-control", "cursor", 3, "change"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["alt", "", "class", "view-detail-icon1 pull-right mr-2 cursor", "src", "assets/images/pdf-icons/Icon awesome-pencil-alt@2x.png", "title", "Edit-Passage", 3, "click", 4, "ngIf"], ["alt", "", "class", "view-detail-icon1 pull-right mr-2 cursor", "src", "assets/images/pdf-icons/floppy-disk (2).png", "title", "Save-Passage", 3, "click", 4, "ngIf"], ["alt", "", "src", "assets/images/pdf-icons/Icon awesome-pencil-alt@2x.png", "title", "Edit-Passage", 1, "view-detail-icon1", "pull-right", "mr-2", "cursor", 3, "click"], ["alt", "", "src", "assets/images/pdf-icons/floppy-disk (2).png", "title", "Save-Passage", 1, "view-detail-icon1", "pull-right", "mr-2", "cursor", 3, "click"], ["formArrayName", "addQuestionType", 1, "row", "mt-4"], [1, "col-md-12", 3, "formGroupName"], [1, "col-md-12"], [1, "row", "d-flex", "justify-content-between"], [1, "col-7", "align-self-center"], [1, "col-md-5", "d-flex"], ["formControlName", "selectType", 1, "form-control", "cursor", 3, "ngClass"], ["disabled", "", "value", "select"], ["value", "MultiChoice"], ["value", "TrueOrFalse"], ["value", "textEntry"], ["value", "essay"], [3, "hidden"], [3, "emitEditorValue", "editorPatchValue", "height", "readonly"], ["data-original-title", "", "formControlName", "multiResponse", "id", "checkbox_primary_passage1", "title", "", "type", "checkbox", 1, "cursor", 3, "change"], ["for", "checkbox_primary_passage1", 1, "ml-1"], ["formControlName", "autograde", "type", "checkbox", "id", "autograde_multiple_choice_passage", 1, "cursor", "ml-3"], ["for", "autograde_multiple_choice_passage", 1, "ml-1"], ["type", "checkbox", "id", "math_editor_multiple_choice_passage", 1, "cursor", "ml-3", 3, "change", "disabled", "checked"], ["for", "math_editor_multiple_choice_passage", 1, "ml-1"], ["class", "form-group col-12 my-2", "formArrayName", "addMultipleChoice", 4, "ngFor", "ngForOf"], [1, "col-12", "d-flex", "flex-column", 3, "hidden"], [1, "col-12", "d-flex", "flex-column", "mt-3", 3, "hidden"], [1, "col-6", "mb-2", "align-self-center"], [1, "mb-0", "font-weight-bold"], [1, "col-6", "mb-2"], [1, "btn-sm", "pull-right", "btn-primary", 3, "click"], ["class", "col-12 form-group", "formArrayName", "addHints", 3, "hidden", 4, "ngFor", "ngForOf"], [1, "col-md-12", "px-0", "mt-2"], [1, "innerhtml-margin-clear", 3, "innerHTML"], ["class", "col-12 px-0 mt-3", 4, "ngIf"], ["formArrayName", "addMultipleChoice", 1, "form-group", "col-12", "my-2"], ["class", "m-auto cursor pr-2", 4, "ngIf"], [1, "m-auto", "pr-2", "cursor", "pb-1", 3, "for"], ["class", "flex-fill", 3, "height", "editorPatchValue", "id", "emitEditorValue", 4, "ngIf"], [1, "input-group-text", 3, "ngClass"], [1, "m-auto", "cursor", "pr-2"], [1, "flex-fill", 3, "emitEditorValue", "height", "editorPatchValue", "id"], ["formArrayName", "addHints", 1, "col-12", "form-group", 3, "hidden"], ["src", "assets/images/pdf-icons/Icon material-delete.png", "alt", "", 1, "img-fluid"], [1, "col-12", "px-0", "mt-3"], ["class", "mb-4 multiSelectCard question-page d-flex", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "mb-4", "multiSelectCard", "question-page", "d-flex", 3, "ngClass"], [1, "mt-2"], ["class", "mb-4 multiSelectCard question-page d-flex", 4, "ngFor", "ngForOf"], [1, "mb-4", "multiSelectCard", "question-page", "d-flex"], [1, "mt-2", "ml-3", 3, "innerHTML"], [1, "col-4", "align-self-center"], [1, "col-8", "pointsSec", "d-flex", "align-items-end", "justify-content-end"], [1, "btn-sm", "btn-primary", "mr-3", 3, "click", "hidden"], ["data-original-title", "", "formControlName", "multiResponse", "id", "checkbox-primary-93", "title", "", "type", "checkbox", 3, "change", "ngClass"], ["for", "checkbox-primary-93", 1, "ml-1"], ["formControlName", "autograde", "type", "checkbox", 1, "ml-3", "cursor"], ["type", "checkbox", "id", "math_editor_trueOrFalse_passage", 1, "cursor", "ml-3", 3, "change", "disabled", "checked"], ["for", "math_editor_trueOrFalse_passage", 1, "ml-1"], [1, "col-9", "align-self-center"], [1, "col-3", "mb-2"], [1, "btn-sm", "btn-primary", "pull-right", 3, "click", "hidden"], [3, "innerHTML", "class", 4, "ngFor", "ngForOf"], [1, "col-12", "my-2", "d-flex", "flex-column", 3, "hidden"], [1, "col-12", "d-flex", "flex-column", "my-2", 3, "hidden"], [1, "col-6", "mb-3"], [1, "btn-sm", "btn-primary", "pull-right", 3, "click"], ["class", "flex-fill", 3, "editorPatchValue", "height", "emitEditorValue", 4, "ngIf"], [1, "flex-fill", 3, "emitEditorValue", "editorPatchValue", "height"], ["class", "flex-fill mb-1", 3, "editorPatchValue", "height", "readonly", "emitEditorValue", 4, "ngIf"], ["aria-label", "Amount (to the nearest dollar)", "class", "form-control", "formControlName", "option", "placeholder", "Option *", "type", "text", 3, "readonly", 4, "ngIf"], [1, "flex-fill", "mb-1", 3, "emitEditorValue", "editorPatchValue", "height", "readonly"], ["aria-label", "Amount (to the nearest dollar)", "formControlName", "option", "placeholder", "Option *", "type", "text", 1, "form-control", 3, "readonly"], ["class", "radio_animated", "type", "radio", 3, "id", "name", "change", 4, "ngIf"], ["class", "cursor", "type", "checkbox", 3, "id", "change", 4, "ngIf"], ["type", "radio", 1, "radio_animated", 3, "change", "id", "name"], [1, "input-group", "inputMenu", 3, "formGroupName"], [1, "flex-fill", "mb-1", 3, "emitEditorValue", "editorPatchValue", "height", "id", "readonly"], [1, "table-flexible"], [1, "table", "table-bordered", "text-center", "mt-4"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [3, "innerHTML", 4, "ngIf"], [1, "card", "px-4", "pt-3", "pb-4", "mt-2"], [3, "emitEditorValue", "height", "editorPatchValue", "id", "showDropBtn", "showInputBtn"], ["class", "card px-4 pt-3 pb-4 mt-3", 4, "ngIf"], [1, "mb-0", "font-weight-bold", "mb-0"], [1, "p-4"], ["class", "d-flex flex-row p-3 div-disable", 4, "ngFor", "ngForOf"], ["formControlName", "autograde", "type", "checkbox", "id", "autograde_input_passage", 1, "cursor", "ml-3"], ["for", "autograde_input_passage", 1, "ml-1"], ["type", "checkbox", "id", "math_editor_input_passage", 1, "cursor", "ml-3", 3, "change", "disabled", "checked"], ["for", "math_editor_input_passage", 1, "ml-1"], ["class", "d-flex flex-row w-100 my-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "w-100", "my-2"], ["class", "mt-0 ml-2 form-control w-50", 3, "readonly", "ngModel", "ngModelOptions", "placeholder", "ngModelChange", 4, "ngIf"], [3, "height", "showDropBtn", "showInputBtn", "id", "readonly", "editorPatchValue", "emitEditorValue", 4, "ngIf"], [1, "mt-0", "ml-2", "form-control", "w-50", 3, "ngModelChange", "readonly", "ngModel", "ngModelOptions", "placeholder"], [3, "emitEditorValue", "height", "showDropBtn", "showInputBtn", "id", "readonly", "editorPatchValue"], [1, "d-flex", "flex-row", "p-3", "div-disable"], ["class", "w-100", 4, "ngIf"], ["placeholder", "Enter the answer", 1, "mt-0", "ml-2", "form-control", "w-50", 3, "value"], ["class", "form-group", "formArrayName", "addHints", 3, "hidden", 4, "ngFor", "ngForOf"], [1, "col-8"], [1, "col-4", "mb-2"], [1, "checkbox", "checkbox-primary", "d-flex", "align-items-center", "justify-content-end"], ["formControlName", "autograde", "type", "checkbox", "id", "autograde_essay_passage", 1, "cursor", "ml-3"], ["for", "autograde_essay_passage", 1, "ml-1"], ["class", "btn btn-outline-primary pull-right ml-3", 3, "click", 4, "ngIf"], [1, "btn", "btn-outline-primary", "pull-right", "ml-3", 3, "click"], ["formArrayName", "addHints", 1, "form-group", 3, "hidden"], ["alt", "Delete Passage Hint", "src", "assets/images/pdf-icons/Icon material-delete.png", 1, "img-fluid"], [1, "col-md-12", "mt-2"], ["class", "col-12 p-4", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "emitItem", "valueChange", "editMode", "editPatchValue", "graphId", "saveAndDuplicate", "questionType"], [3, "emitItem", "valueChange", "editMode", "saveAndDuplicate", "editPatchValue", "graphId", "questionType"], [3, "emitEditorValue", "editorPatchValue", "height", "hideBackcolr", "id", "showDropBtn", "showInputBtn"], [1, "col-12", "mt-2", "mb-3", "px-0", "d-flex", "justify-content-end"], [1, "mt-2", "ml-2", "col-2", "d-flex", "align-content-center"], [1, "labelName", "mb-0", "mt-2"], ["formControlName", "points", "maxlength", "3", "type", "text", 1, "form-control", "ml-2", "pointInput", 3, "keypress", "readonly"], ["class", "col-12 form-group", 3, "hidden", 4, "ngFor", "ngForOf"], [1, "col-12", "form-group", 3, "hidden"], [1, "input-group", "mb-3", "inputMenu"], ["class", "input-group-append cursor", 4, "ngIf"], [1, "input-group-text", 3, "click"], ["alt", "Delete Hint", "src", "assets/images/pdf-icons/Icon material-delete.png", 1, "img-fluid"], [1, "btn", "btn-outline-info", "mr-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-long-arrow-left", "fa-1x"], [1, "btn", "btn-outline-danger", "mr-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-times"], [1, "btn", "btn-outline-primary", "mr-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye"], [1, "btn", "btn-outline-success", "mr-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-save", "mr-1"], [1, "btn-group", "dropup", "mr-2"], ["data-toggle", "dropdown", 1, "btn", "btn-outline-success", "dropdown-toggle"], ["aria-hidden", "true", 1, "fa", "fa-save"], [1, "dropdown-menu"], [1, "dropdown-item", "dropdown-link", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-save", "mr-2"], [1, "card", "px-4", "pt-3", "pb-4", "mt-4"], ["formControlName", "subject_id", 3, "change", "placeholder", "bindValue", "bindLabel", "items"], ["formControlName", "question_topic_id", 3, "change", "placeholder", "bindValue", "bindLabel", "items"], ["class", "col-3", 4, "ngIf"], [1, "col-12", "px-0"], [3, "ngClass", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Enter Skill", 2, "font-size", "14px", "height", "40px !important", 3, "input", "matChipInputTokenEnd", "keydown.enter", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], ["class", "row m-0", 4, "ngIf"], ["formControlName", "question_standard", 3, "placeholder", "bindValue", "bindLabel", "items"], [1, "col-5", "px-0"], [1, "d-inline-flex", "align-items-center"], ["maxlength", "3", "placeholder", "MM", "formControlName", "minutes", 1, "form-control", 3, "keypress"], [1, "font-weight-bold", "mx-2"], ["maxlength", "2", "placeholder", "SS", "formControlName", "seconds", 1, "form-control", 3, "keypress"], [1, "col-3"], ["formControlName", "question_sub_topic_id", 3, "placeholder", "bindValue", "bindLabel", "items"], [3, "removed", "ngClass", "removable"], ["matChipRemove", ""], [1, "row", "m-0"], [1, "col-12", "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12", "px-0"], [1, "drug-list"], [1, "mb-3", "showChips", "defaultChips", "cursor"], ["class", "pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "pointer", 3, "click"], [1, "modal-header"], [1, "modal-title", "letter"], [1, "modal-body", "d-flex", "justify-content-right"], [1, "col-12", "text-center"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-outline-primary", 3, "click"], ["id", "modal-basic-title202", 1, "modal-title", "w-100", "letter"], [1, "text-capitalize"], ["aria-hidden", "true", "title", "Close", 1, "fa", "fa-close", "fa-lg", "mt-1", "cursor", "color-primary", 2, "float", "right", 3, "click"], [1, "modal-body"], [1, "container-fluid"], [1, "col-sm-12", "mt-3"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-xl-2", "col-md-3", "ml-4", "mt-2", 2, "font-size", "15px"], [2, "color", "red"], [1, "col-xl-9", "col-md-10"], ["formControlName", "title", "id", "validationCustom0", "type", "text", "placeholder", "Title", "required", "", 1, "form-control"], ["class", "error", 4, "ngIf"], ["for", "validationCustom1", 1, "col-xl-2", "col-md-3", "ml-4", "mt-2", 2, "font-size", "15px"], [3, "emitEditorValue", "height", "readonly", "id", "showDropBtn", "showInputBtn"], [1, "col-12", "d-flex", "justify-content-end"], ["type", "button", 1, "btn", "cancel", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "ml-2", 3, "click"], [1, "error"]], template: function QuestionPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 5)(1, "div", 6);
            i0.ɵɵtemplate(2, QuestionPageComponent_div_2_Template, 52, 24, "div", 7)(3, QuestionPageComponent_div_3_Template, 78, 32, "div", 8)(4, QuestionPageComponent_div_4_Template, 30, 20, "div", 8)(5, QuestionPageComponent_div_5_Template, 35, 19, "div", 8)(6, QuestionPageComponent_div_6_Template, 75, 26, "div", 8)(7, QuestionPageComponent_div_7_Template, 35, 18, "div", 8)(8, QuestionPageComponent_div_8_Template, 59, 12, "div", 8)(9, QuestionPageComponent_div_9_Template, 76, 13, "div", 8)(10, QuestionPageComponent_div_10_Template, 21, 10, "div", 8)(11, QuestionPageComponent_div_11_Template, 28, 21, "div", 8)(12, QuestionPageComponent_div_12_Template, 53, 27, "div", 8);
            i0.ɵɵelementStart(13, "div", 9)(14, "div", 10);
            i0.ɵɵtemplate(15, QuestionPageComponent_div_15_Template, 4, 7, "div", 11)(16, QuestionPageComponent_div_16_Template, 4, 7, "div", 12)(17, QuestionPageComponent_div_17_Template, 10, 0, "div", 13)(18, QuestionPageComponent_div_18_Template, 3, 2, "div", 14);
            i0.ɵɵelementStart(19, "div", 15);
            i0.ɵɵtemplate(20, QuestionPageComponent_button_20_Template, 3, 0, "button", 16)(21, QuestionPageComponent_button_21_Template, 3, 0, "button", 17)(22, QuestionPageComponent_button_22_Template, 3, 0, "button", 18)(23, QuestionPageComponent_button_23_Template, 3, 0, "button", 19)(24, QuestionPageComponent_div_24_Template, 11, 0, "div", 20)(25, QuestionPageComponent_button_25_Template, 3, 0, "button", 19);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(26, QuestionPageComponent_ng_template_26_Template, 69, 22, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(28, QuestionPageComponent_ng_template_28_Template, 12, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(30, QuestionPageComponent_ng_template_30_Template, 31, 9, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.sideNavStatus == true ? "container" : "container-fluid");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.questionId == "1" || ctx.questionId == "2");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.questionId == "5" || ctx.questionId == "7");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.questionId == "9");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.questionId == "10");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.questionId == "16");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(22, _c3).includes(ctx.questionId));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.questionId == "21");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.questionId == "22");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.questionId == "24");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.questionId == "40" || ctx.questionId == "41");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.questionId == "28");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.questionId != "24" && ctx.questionId != "55");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.questionId != "24" && ctx.questionId != "55");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.selectOptionHeader == "edit" && ctx.questionId != "24" && ctx.questionId != "55");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.questionId != "24" && ctx.questionId != "55");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.showPreview);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showPreview);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showPreview);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "add" && ctx.showPreview && ctx.questionId == "55");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "add" && ctx.showPreview && ctx.questionId != "55");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "edit" && ctx.showPreview);
        } }, dependencies: [i13.NgClass, i13.NgForOf, i13.NgIf, i13.NgTemplateOutlet, i6.ɵNgNoValidate, i6.NgSelectOption, i6.ɵNgSelectMultipleOption, i6.DefaultValueAccessor, i6.CheckboxControlValueAccessor, i6.SelectControlValueAccessor, i6.NgControlStatus, i6.NgControlStatusGroup, i6.RequiredValidator, i6.MaxLengthValidator, i6.FormGroupDirective, i6.FormControlName, i6.FormGroupName, i6.FormArrayName, i14.NgSelectComponent, i6.NgModel, i15.CdkDropList, i15.CdkDrag, i16.GraphComponentComponent, i17.TinyMiceComponent, i18.MatChipGrid, i18.MatChipInput, i18.MatChipRemove, i18.MatChipRow, i19.MatFormField, i20.MatIcon, i21.SanitizeHtmlPipe], styles: ["$primary-color[_ngcontent-%COMP%]:   #8F008A[_ngcontent-%COMP%];\n\n.inputMenu[_ngcontent-%COMP%]{\n\n  //padding: 30px;\n\n\n  input{\n    padding: 16px;\n  }\n  .input-group-text{\n    background: white;\n  }\n  img{\n    position: relative;\n    height: 16px;\n    width: auto;\n  }\n\n  .pointsSec{\n    .labelName{\n      font-size: 20px;\n    }\n    .pointInput{\n      height: 3rem !important;\n    }\n  }\n}\nimg[_ngcontent-%COMP%] {\n  cursor: default !important;\n}\n\n.inputMenu1[_ngcontent-%COMP%]{\n  input{\n    padding: 20px;\n  }\n  .input-group-text{\n    background: white;\n  }\n  img{\n    position: relative;\n    height: 28px;\n  }\n\n  .pointsSec{\n    .labelName{\n      font-size: 20px;\n    }\n    .pointInput{\n      height: 52px !important;\n    }\n  }\n}\n\n.inputHeight[_ngcontent-%COMP%]{\n  height: 43px;\n}\n.multiSelectCard[_ngcontent-%COMP%]{\n  border: 2px solid $primary-color;\n  background: white;\n  padding: 18px;\n  border-radius: 4px;\n}\n\n.checkbox3[_ngcontent-%COMP%]{\n  zoom:1.5;\n\n}\n\n.correct-answer[_ngcontent-%COMP%]{\n  color: #7F3486;\n  background: white;\n  border-style: ridge;\n  border-width: 1px;\n  border-color: #7F3486;\n  padding: 6px;\n}\n.correct-answer-selected[_ngcontent-%COMP%]{\n  color: white;\n  background: #7F3486;\n  border-style: ridge;\n  border-width: 1px;\n  border-color: #7F3486;\n  padding: 6px;\n}\n.wrong-answer[_ngcontent-%COMP%]{\n  color: red;\n  background: white;\n  border-style: ridge;\n  border-width: 1px;\n  border-color: #7F3486;\n  padding: 6px;\n}\n\n.cursor[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.showChips[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  padding: 5px 10px;\n  margin-right: 3px;\n  margin-bottom: 5px;\n  float: left;\n\n}\n\n.defaultChips[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: #95989A;\n  color: #fff;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(QuestionPageComponent, [{
        type: Component,
        args: [{ selector: 'app-question-page', template: "<div [ngClass]=\"sideNavStatus == true ? 'container' : 'container-fluid'\">\n    <div class=\"card resource-link-card p-4\">\n        <!--    //////multichoice standard and multi section designs open -->\n    <div *ngIf=\"questionId == '1' || questionId == '2'\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <h3 class=\"letter\">Multiple Choice > {{questionId == '1' ? 'Multiple Choice-Standard' : 'Multi Selection'}} </h3>\n                <hr class=\"letter\">\n            </div>\n            <div class=\"col-12\" [hidden]=\"selectOptionHeader != 'edit'\">\n                <form [formGroup]=\"multipleChoice\">\n                    <div class=\"card px-4 pt-3 pb-4\">\n                        <div class=\"row\">\n                            <div class=\"col-12 mt-2\">\n                                <div class=\"row px-2 mb-2 align-items-center\">\n                                    <div class=\"pl-1 pr-2\" style=\"width: 5% !important;\">\n                                        <h5 class=\"mb-0 question-no\">{{qnsNo}}</h5>\n                                    </div>\n                                    <h5 class=\"font-weight-bold mb-0\">Question<span class=\"text-danger\">&nbsp;*</span></h5>\n                                </div>\n                                <app-tiny-mice [height]=\"450\"\n                                               [readonly]=\"selectOptionHeader != 'edit'\"\n                                               [showDropBtn]=\"false\"\n                                               [showInputBtn]=\"false\"\n                                               [id]=\"'multiQues'\"\n                                               [editorPatchValue]= \"type == 'add' ? false : questionEditData.question\"\n                                               (emitEditorValue)=\"getEditorMultipleChoice($event)\"></app-tiny-mice>\n                                <textarea  *ngIf=\"editorType == false\" class=\"form-control\" cols=\"30\" formControlName=\"question\" rows=\"5\"></textarea>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                        <div class=\"row\">\n                            <div class=\"col-6 mb-3 align-self-center\">\n                                <h5 class=\"font-weight-bold mb-0\">Multiple Choice Options<span class=\"text-danger\">&nbsp;*</span></h5>\n                            </div>\n                            <div class=\"col-6 mb-3 pointsSec d-flex align-items-end justify-content-end\">\n                                <div class=\"checkbox checkbox-primary d-flex align-items-center\">\n                                    <input class=\"cursor\" (change)=\"multipleResponse('multipleChoiceCheck', $event)\"  data-original-title=\"\" formControlName=\"multiResponse\" id=\"checkbox-primary-1\" title=\"\" type=\"checkbox\">\n                                    <label for=\"checkbox-primary-1\" class=\"ml-1\">Multiple Responses</label>\n                                    <input class=\"cursor ml-3\" formControlName=\"autograde\" type=\"checkbox\" id=\"autograde_multiple_choice\">\n                                    <label class=\"ml-1\" for=\"autograde_multiple_choice\">Auto Grade</label>\n                                    <input [disabled]=\"selectOptionHeader != 'edit'\" (change)=\"selectedEditorType($event)\" class=\"cursor ml-3\"\n                                           [checked]=\"inputType == 'math' || (type != 'add' && questionEditData.editor_type != 1)\"\n                                           type=\"checkbox\" id=\"math_editor_multiple_choice\">\n                                    <label class=\"ml-1\" for=\"math_editor_multiple_choice\">Math Editor</label>\n                                </div>\n                            </div>\n                            <div class=\"col-12 form-group\" formArrayName=\"addMultipleChoice\" *ngFor=\"let list of multipleChoice.get('addMultipleChoice')['controls']; let i=index\">\n                                <div class=\"input-group inputMenu flex-row\" [formGroupName]=\"i\" style=\"flex-wrap: nowrap\">\n                                    <span class=\"m-auto pr-2\" *ngIf=\"!multipleChoice.controls.multiResponse.value\">\n                                        <input class=\"cursor\" type=\"radio\" name=\"optradio {{i}}\" id=\"optradio {{i}}\" (change)=\"getAddChoiceAnswer($event, i, 'multipleChoiceChoose')\"\n                                               [checked]=\"multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['active'].value\">\n                                    </span>\n                                    <span class=\"m-auto pr-2 cursor\" *ngIf=\"multipleChoice.controls.multiResponse.value\">\n                                        <input class=\"cursor\" type=\"checkbox\" name=\"optradio1 {{i}}\" id=\"optradio1 {{i}}\" (change)=\"getAddChoiceAnswer($event, i, 'multipleChoiceChoose')\"\n                                               [checked]=\"multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['active'].value\">\n                                    </span>\n                                    <span class=\"m-auto pr-2 pb-1 cursor\" for=\"optradio1{{i}}\">{{((i+1) + 9).toString(36).toUpperCase()}}.</span>\n                                    <app-tiny-mice (emitEditorValue)=\"getOptionValue($event, questionId, 'option', i)\"\n                                                   *ngIf=\"inputType == 'math'\"\n                                                   [editorPatchValue]=\"type == 'add' ? false : questionEditData.options[i]?.options\"\n                                                   [height]=\"150\"\n                                                   [id]=\"'multiOption'+i\"\n                                                   class=\"flex-fill\"></app-tiny-mice>\n                                    <input *ngIf=\"inputType == 'text'\"  aria-label=\"Amount (to the nearest dollar)\" class=\"form-control\" formControlName=\"option\" placeholder=\"Option {{i+1}} *\" type=\"text\">\n                                    <div class=\"input-group-append cursor\" (click)=\"deleted('deleteMultiple', i)\">\n                                        <span class=\"input-group-text\">\n                                            <img alt=\"Delete\" src=\"assets/images/pdf-icons/Icon material-delete.png\" class=\"img-fluid\">\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-12\">\n                                <button (click)=\"addChoice('addMultipleChoice')\" class=\"btn-sm btn-outline-primary\"><i aria-hidden=\"true\" class=\"fa fa-plus-circle mr-1\"></i> Add New Choice</button>\n                            </div>\n                        </div>\n                    </div>\n\n                    <ng-container *ngTemplateOutlet=\"settings; context: { $implicit: multipleChoice}\"></ng-container>\n\n\n                    <!--                    <div *ngIf=\"inputType == 'math'\" class=\"col-12\">-->\n    <!--                        <div class=\"mb-4 multiSelectCard question-page\" (click)=\"getAddChoiceAnswer($event, i, 'multipleChoiceChoose')\" *ngFor=\"let list of multipleChoice.get('addMultipleChoice')['controls']; let i=index\"-->\n    <!--                             [ngClass]=\"{'question-page-selected' : multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['active'].value === i}\">-->\n    <!--                            <div class=\"d-flex flex-row\">-->\n    <!--                            <span [ngClass]=\"{'selectColor' : multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['active'].value === i}\" class=\"multichoice-option1 mr-2\">{{((i+1) + 9).toString(36).toUpperCase()}}</span>-->\n    <!--                            <span *ngIf=\"optionArray.length != 0\" class=\"mt-2\" id=\"{{'myId'+i}}\"></span>-->\n    <!--                            </div>-->\n    <!--                        </div>-->\n    <!--                    </div>-->\n\n                        <!-- <div class=\"col-12\">\n                            <div (click)=\"getAddChoiceAnswer($event, i, 'multipleChoiceChoose')\" *ngFor=\"let list of multipleChoice.get('addMultipleChoice')['controls']; let i=index\" [ngClass]=\"{'question-page-selected' : multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['active'].value !== ''}\" class=\"mb-4 multiSelectCard question-page d-flex\">\n                                <span [ngClass]=\"{'selectColor' : multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['active'].value !== ''}\" class=\"multichoice-option1 mr-2\">{{((i+1) + 9).toString(36).toUpperCase()}}</span>\n                                <span [innerHTML]=\"multipleChoice.get('addMultipleChoice')['controls'][i]['controls']['option'].value | sanitizeHtml\" class=\"mt-1 ml-2 paragraph-space\"></span>\n                            </div>\n                        </div> -->\n                </form>\n            </div>\n            <div class=\"col-12 mt-3\" [hidden]=\"selectOptionHeader != 'preview'\">\n                <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                    <div class=\"row\">\n                        <div [innerHTML]=\"questionValue | sanitizeHtml\" class=\"col-12 pl-4 question-align\"></div>\n                        <div class=\"col-12 mt-2\" *ngIf=\"inputType == 'text'\">\n                            <div class=\"mb-2 multiSelectCard d-flex p-2\" *ngFor=\"let list of multipleChoice.get('addMultipleChoice')['controls']; let i=index\">\n                                <span class=\"multichoice-option1 mr-2\" [ngClass]=\"{'selectColor' : multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['active'].value == 1}\">{{((i+1) + 9).toString(36).toUpperCase()}}</span>\n                                <span class=\"mt-1 ml-2 paragraph-space\">{{multipleChoice.get('addMultipleChoice')['controls'][i]['controls']['option'].value}}</span>\n                            </div>\n                        </div>\n                        <div class=\"col-12\" *ngIf=\"inputType == 'math'\">\n                            <div class=\"mb-2 multiSelectCard p-2\" *ngFor=\"let list of multipleChoice.get('addMultipleChoice')['controls']; let i=index\">\n                                <div class=\"d-flex flex-row\">\n                                    <span [ngClass]=\"{'selectColor' : multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['active'].value == 1}\" class=\"multichoice-option1 mr-2\">{{((i+1) + 9).toString(36).toUpperCase()}}</span>\n                                    <span *ngIf=\"optionArray.length != 0\" [innerHTML]=\"multipleChoice.get('addMultipleChoice')['controls'][i]['controls']['option'].value | sanitizeHtml\" class=\"mt-1 ml-2 paragraph-space\"></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!--    //////multichoice standard and multi section designs closed -->\n    <!--    //////multichoice match table-Standard and table-Lables designs open -->\n\n    <div *ngIf=\"questionId == '5' || questionId == '7'\" class=\"row\">\n        <div class=\"col-12\">\n            <h3 class=\"letter\">Multiple Choice > Match Table-{{questionId == '5' ? 'Standard' : 'Labels'}}</h3>\n            <hr class=\"letter\">\n        </div>\n        <div class=\"col-12\" [hidden]=\"selectOptionHeader != 'edit'\">\n            <form [formGroup]=\"matchTable\">\n                <div class=\"card px-4 pt-3 pb-4\">\n                    <div class=\"row\">\n                        <div class=\"col-12 mt-2\">\n                            <div class=\"row px-2 mb-2 align-items-center\">\n                                <div class=\"pl-1 pr-2\" style=\"width: 5% !important;\">\n                                    <h5 class=\"mb-0 question-no\">{{qnsNo}}</h5>\n                                </div>\n                                <h5 class=\"font-weight-bold mb-0\">Question<span class=\"text-danger\">&nbsp;*</span></h5>\n                            </div>\n                            <app-tiny-mice [height]=\"450\"\n                                           [readonly]=\"selectOptionHeader != 'edit'\"\n                                           [showDropBtn]=\"false\"\n                                           [showInputBtn]=\"false\"\n                                           [id]=\"'questionChoose'\"\n                                           [editorPatchValue]= \"type == 'add' ? false : questionEditData.question\"\n                                           (emitEditorValue)=\"getEditorMultipleChoice($event)\"></app-tiny-mice>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                    <div class=\"row\">\n                        <div class=\"col-12 mb-3\">\n                            <div class=\"row\">\n                                <div class=\"col-6 mb-3 align-self-center\">\n                                    <h5 class=\"font-weight-bold mb-0\">Multiple Choice Options<span class=\"text-danger\">&nbsp;*</span></h5>\n                                </div>\n                                <div class=\"col-6 mb-3 pointsSec d-flex align-items-end justify-content-end\">\n                                    <div class=\"checkbox checkbox-primary d-flex align-items-center\">\n<!--                                        <input (change)=\"multipleResponse('matchTableCheck', $event)\" [ngClass]=\"{'div-disable' : selectOptionHeader != 'edit'}\" data-original-title=\"\" formControlName=\"multiResponse\" id=\"checkbox-primary-2\" title=\"\" type=\"checkbox\">-->\n<!--                                        <label for=\"checkbox-primary-2\" class=\"ml-2\">Multiple Responses</label>-->\n                                        <input class=\"cursor ml-3\" formControlName=\"autograde\" type=\"checkbox\" id=\"autograde_multiple_choice_2\">\n                                        <label class=\"ml-1\" for=\"autograde_multiple_choice_2\">Auto Grade</label>\n                                        <input [disabled]=\"selectOptionHeader != 'edit'\" (change)=\"selectedEditorType($event)\" class=\"cursor ml-3\"\n                                               [checked]=\"inputType == 'math' || (type != 'add' && questionEditData.editor_type != 1)\"\n                                               type=\"checkbox\" id=\"math_editor_multiple_choice_2\">\n                                        <label class=\"ml-1\" for=\"math_editor_multiple_choice_2\">Math Editor</label>\n                                    </div>\n                                </div>\n                                <div class=\"col-12 form-group\" formArrayName=\"addMultipleChoice\" *ngFor=\"let list of matchTable.get('addMultipleChoice')['controls']; let i=index\">\n                                    <div class=\"input-group inputMenu\" [formGroupName]=\"i\" style=\"flex-wrap: nowrap\">\n                                        <input *ngIf=\"inputType == 'text'\" [readonly]=\"selectOptionHeader != 'edit'\" aria-label=\"Amount (to the nearest dollar)\" class=\"form-control\" formControlName=\"option\" placeholder=\"Option {{i+1}} *\" type=\"text\">\n                                        <app-tiny-mice (emitEditorValue)=\"getOptionValue($event, questionId, 'option', i)\"\n                                                       *ngIf=\"inputType == 'math'\"\n                                                       [editorPatchValue]=\"type == 'add' ? false : questionEditData.options[i]?.options\"\n                                                       [height]=\"150\"\n                                                       [id]=\"'optionChoose'+i\"\n                                                       [readonly]=\"selectOptionHeader != 'edit'\"\n                                                       class=\"flex-fill\"></app-tiny-mice>\n                                        <div (click)=\"deleted('deleteMatchTable', i)\" [ngClass]=\"{'div-disable' : selectOptionHeader != 'edit'}\" class=\"input-group-append cursor\">\n                                            <span class=\"input-group-text\">\n                                                <img src=\"assets/images/pdf-icons/Icon material-delete.png\" class=\"img-fluid\">\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <button (click)=\"addChoice('addMatchTable')\" class=\"btn-sm btn-outline-primary\"><i aria-hidden=\"true\" class=\"fa fa-plus-circle mr-1\"></i> Add New Choice</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-12 my-2\">\n                            <h5 class=\"font-weight-bold\">Stems<span class=\"text-danger\">*</span></h5>\n                        </div>\n                        <div class=\"col-12 mt-2\">\n                            <div class=\"row\">\n                                <div class=\"col-12 form-group\" formArrayName=\"addMatchTableChoose\" *ngFor=\"let list of matchTable.get('addMatchTableChoose')['controls']; let i=index\">\n                                    <div class=\"input-group inputMenu\" [formGroupName]=\"i\" style=\"flex-wrap: nowrap\">\n                                        <input *ngIf=\"inputType == 'text'\" [readonly]=\"selectOptionHeader != 'edit'\" aria-label=\"Amount (to the nearest dollar)\" class=\"form-control\" formControlName=\"option\" placeholder=\"Stems {{i+1}}\" type=\"text\">\n                                        <app-tiny-mice (emitEditorValue)=\"getOptionValue($event, questionId, 'chooseType', i)\"\n                                                       *ngIf=\"inputType == 'math'\"\n                                                       [editorPatchValue]=\"type == 'add' ? false : questionEditData?.answer[i]\"\n                                                       [height]=\"150\"\n                                                       [id]=\"'typeChoose'+i\" [readonly]=\"selectOptionHeader != 'edit'\" class=\"flex-fill\"></app-tiny-mice>\n                                        <div (click)=\"deleted('deleteMatchTableChoose', i)\" [ngClass]=\"{'div-disable' : selectOptionHeader != 'edit'}\" class=\"input-group-append cursor\">\n                                            <span class=\"input-group-text\">\n                                                <img src=\"assets/images/pdf-icons/Icon material-delete.png\" class=\"img-fluid\">\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <button (click)=\"addChoice('matchTableChoose')\" [hidden]=\"selectOptionHeader != 'edit'\" class=\"btn-sm btn-outline-primary\"><i aria-hidden=\"true\" class=\"mr-1 fa fa-plus-circle\"></i> Add New Choice</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card p-3 mt-3\">\n                    <div class=\"row\">\n                        <div class=\"col-12 my-2\">\n                            <h5 class=\"font-weight-bold\">Set Correct Answer(s)</h5>\n                        </div>\n                        <div class=\"col-12 my-2 table-flexible\">\n                            <table [ngClass]=\"{'div-disable' : selectOptionHeader != 'edit'}\" class=\"table table-bordered text-center\">\n                                <thead>\n                                <tr *ngIf=\"inputType == 'math'\">\n                                    <th></th>\n                                    <th *ngFor=\"let list of matchTable.get('addMatchTableChoose')['controls']; let i=index\" class=\"innerhtml-margin-clear\" id=\"{{'columnId' + i}}\"></th>\n                                </tr>\n                                <tr *ngIf=\"inputType == 'text'\">\n                                    <th></th>\n                                    <th *ngFor=\"let list of matchTable.get('addMatchTableChoose')['controls']; let i=index\">{{matchTable.get('addMatchTableChoose')['controls'][i]['controls']['option'].value}}</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr *ngFor=\"let list of matchTable.get('addMultipleChoice')['controls']; let j=index\">\n                                    <td *ngIf=\"inputType == 'math'\" class=\"innerhtml-margin-clear\" id=\"{{'myId' + j}}\"></td>\n                                    <td *ngIf=\"inputType == 'text'\">{{matchTable.get('addMultipleChoice')['controls'][j]['controls']['option'].value}}</td>\n                                    <td *ngFor=\"let list of matchTable.get('addMatchTableChoose')['controls']; let i=index\">\n                                        <input (change)=\"getAddChoiceAnswer(i, j, 'matchTableChooseSingle')\" *ngIf=\"questionId == '5'\" class=\"radio_animated cursor\" name=\"choose{{j}}\" type=\"radio\" id=\"{{j}}chooseSingle{{i}}\">\n                                        <input (change)=\"getAddChoiceAnswer(i, j, 'matchTableChooseMultiple')\" *ngIf=\"questionId == '7'\" type=\"checkbox\" class=\"cursor\" id=\"{{j}}chooseMulti{{i}}\">\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n\n                <ng-container *ngTemplateOutlet=\"settings; context: { $implicit: matchTable}\"></ng-container>\n            </form>\n        </div>\n        <div class=\"col-12 mt-2\" [hidden]=\"selectOptionHeader != 'preview'\">\n            <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                <div class=\"row\">\n                    <div [innerHTML]=\"questionValue | sanitizeHtml\" class=\"col-12 pl-4 question-align\">\n                    </div>\n                    <div class=\"col-12 table-flexible\">\n                        <table class=\"table table-bordered text-center\">\n                            <thead>\n                            <tr *ngIf=\"inputType == 'math'\">\n                                <th>Questions</th>\n                                <th *ngFor=\"let list of chooseArray; let i=index\" id=\"{{'columnIdd'+i}}\"></th>\n                            </tr>\n                            <tr *ngIf=\"inputType == 'text'\">\n                                <th>Questions</th>\n                                <th *ngFor=\"let list of matchTable.get('addMatchTableChoose')['controls']; let i=index\">{{matchTable.get('addMatchTableChoose')['controls'][i]['controls']['option'].value}}</th>\n                            </tr>\n                            </thead>\n                            <tbody >\n                            <tr *ngFor=\"let list of matchTable.get('addMultipleChoice')['controls']; let j=index\">\n                                <td *ngIf=\"inputType == 'math'\" id=\"{{'myIdd'+j}}\"></td>\n                                <td *ngIf=\"inputType == 'text'\">{{matchTable.get('addMultipleChoice')['controls'][j]['controls']['option'].value}}</td>\n                                <td *ngFor=\"let table of matchTable.get('addMatchTableChoose')['controls']; let i=index\">\n                                    <input *ngIf=\"questionId == '5'\" class=\"radio_animated\" name=\"choose{{j}}\" type=\"radio\"\n                                        >\n                                    <input *ngIf=\"questionId == '7'\" type=\"checkbox\">\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n    \n                    </div>\n            </div>\n<!--                <div class=\"col-12\" *ngIf=\"inputType == 'text'\">-->\n<!--                    <table class=\"table table-bordered text-center\">-->\n<!--                        <thead>-->\n<!--                        <tr>-->\n<!--                            <th>Questions</th>-->\n<!--                            <th *ngFor=\"let list of matchTable.get('addMatchTableChoose')['controls']; let i=index\">{{matchTable.get('addMatchTableChoose')['controls'][i]['controls']['option'].value}}</th>-->\n<!--                        </tr>-->\n<!--                        </thead>-->\n<!--                        <tbody >-->\n<!--                        <tr *ngFor=\"let list of matchTable.get('addMultipleChoice')['controls']; let j=index\">-->\n<!--                            <td *ngIf=\"inputType == 'text'\">{{matchTable.get('addMultipleChoice')['controls'][j]['controls']['option'].value}}</td>-->\n<!--                            <td *ngFor=\"let list of matchTable.get('addMatchTableChoose')['controls']; let i=index\">-->\n<!--                                <input  *ngIf=\"questionId == '5'\" class=\"radio_animated\" name=\"choose{{j}}\" type=\"radio\">-->\n<!--                                <input  *ngIf=\"questionId == '7'\" type=\"checkbox\">-->\n<!--                            </td>-->\n<!--                        </tr>-->\n<!--                        </tbody>-->\n<!--                    </table>-->\n\n<!--                </div>-->\n<!--                <div class=\"col-12\" *ngIf=\"inputType == 'math'\">-->\n<!--                    <table class=\"table table-bordered text-center\">-->\n<!--                        <thead>-->\n<!--                        <tr>-->\n<!--                            <th>Questions</th>-->\n<!--                            <th *ngFor=\"let list of matchTable.get('addMatchTableChoose')['controls']; let i=index\" id=\"columnId{{i}}\"></th>-->\n<!--                        </tr>-->\n<!--                        </thead>-->\n<!--                        <tbody >-->\n<!--                        <tr *ngFor=\"let list of matchTable.get('addMultipleChoice')['controls']; let j=index\">-->\n<!--                            <td *ngIf=\"inputType == 'math'\" id=\"{{'myId' + j}}\"></td>-->\n<!--                            <td *ngFor=\"let list of matchTable.get('addMatchTableChoose')['controls']; let i=index\">-->\n<!--                                <input  *ngIf=\"questionId == '5'\" class=\"radio_animated\" name=\"choose{{j}}\" type=\"radio\">-->\n<!--                                <input  *ngIf=\"questionId == '7'\" type=\"checkbox\">-->\n<!--                            </td>-->\n<!--                        </tr>-->\n<!--                        </tbody>-->\n<!--                    </table>-->\n\n<!--                </div>-->\n            </div>\n        </div>\n    </div>\n\n    <!--    //////multichoice match table-Standard and table-Lables designs closed -->\n    <!--    //////Fill in the Blanks > Text Drop Down designs open -->\n\n    <div *ngIf=\"questionId == '9'\" class=\"row\">\n        <div class=\"col-12\">\n            <h3 class=\"letter\">Multiple Choice > Text Drop Down</h3>\n            <hr class=\"letter\">\n        </div>\n        <div class=\"col-12\">\n            <form [formGroup]=\"fillDropDown\">\n                <div class=\"card px-4 pt-3 pb-4 mt-3\" [hidden]=\"selectOptionHeader != 'edit'\">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <div class=\"row px-2 mb-2 align-items-center\">\n                                <div class=\"pl-1 pr-2\" style=\"width: 5% !important;\">\n                                    <h5 class=\"mb-0 question-no\">{{qnsNo}}</h5>\n                                </div>\n                                <h5 class=\"font-weight-bold mb-0\">Question<span class=\"text-danger\">&nbsp;*</span></h5>\n                            </div>\n                            <app-tiny-mice [height]=\"450\"\n                                    [showDropBtn]=\"true\"\n                                    [showInputBtn]=\"false\"\n                                    [id]=\"'myEditor-q1'\"\n                                    [editorPatchValue]= \"type == 'add' ? false : questionEditData.question\"\n                                    (emitEditorValue)=\"getEditorContextValue($event, questionId, 'question')\"></app-tiny-mice>\n                            <textarea  *ngIf=\"editorType == false\" class=\"form-control\" cols=\"30\" formControlName=\"question\" rows=\"5\"></textarea>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\" [hidden]=\"selectOptionHeader != 'edit'\">\n                    <div class=\"col-12 pl-3 pr-3\" *ngIf=\"showForm\">\n                        <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                            <div class=\"col-12 mb-3 pointsSec d-flex align-items-end justify-content-end\">\n                                <div class=\"checkbox checkbox-primary d-flex align-items-center\">\n                                    <input class=\"cursor ml-3\" formControlName=\"autograde\" type=\"checkbox\" id=\"autograde_dropdown\">\n                                    <label class=\"ml-1\" for=\"autograde_dropdown\">Auto Grade</label>\n                                    <input [disabled]=\"selectOptionHeader != 'edit'\" (change)=\"selectedEditorType($event, 'showTextEditor')\" class=\"cursor ml-3\"\n                                           [checked]=\"showTextEditor == 'math' || (type != 'add' && questionEditData.editor_type != 1)\"\n                                           type=\"checkbox\" id=\"math_editor_dropdown\">\n                                    <label class=\"ml-1\" for=\"math_editor_dropdown\">Math Editor</label>\n                                </div>\n                            </div>\n                            <div class=\"row\" formArrayName=\"addDropDownOption\" *ngFor=\"let list of fillDropDown.get('addDropDownOption')['controls']; let i=index\">\n                                <div *ngIf=\"list.get('options')['controls']\" [formGroupName]=\"i\" class=\"col-12\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 mt-{{i == 0 ? '0' : '3'}}\">\n                                            <h5 class=\"font-weight-bold\">Drop Down {{i+1}}<span class=\"text-danger\">*</span></h5>\n                                        </div>\n                                        <div  *ngFor=\"let list1 of list.get('options')['controls']; let j=index\"   class=\"col-12\" formArrayName=\"options\">\n                                           <div class=\"row mt-2\" [formGroupName]=\"j\">\n                                               <div class=\"col-2 placeSelf\">\n                                                   <span>Option - {{j+1}}</span>\n                                               </div>\n                                               <div class=\"col-5 d-flex justify-content-between\">\n                                                    <input formControlName=\"listOption\" *ngIf=\"showTextEditor == 'eng'\"  class=\"mt-0 ml-2 form-control w-100\" placeholder=\"Enter drop down value *\">\n                                                    <app-tiny-mice\n                                                            [showDropBtn]=\"false\"\n                                                            [showInputBtn]=\"false\"\n                                                            (emitEditorValue)=\"patchEditor(list.controls.options ,j ,i ,$event)\"\n                                                            *ngIf=\"showTextEditor != 'eng'\"\n                                                            [height]=\"150\"\n                                                            [id]=\"j + 'dropy' + i\"\n                                                            [editorPatchValue]=\"type == 'add' ? false : questionEditData.options[i]?.options[j]?.listOption\"></app-tiny-mice>\n                                               </div>\n                                               <div class=\"col-4 d-flex flex-row\">\n                                                   <div *ngIf=\"fillDropDown['controls'].addDropDownOption['controls'][i]['controls'].options\" class=\"placeSelf cursor\">\n                                                       <i class=\"fa fa-check pl mr-2\"\n                                                          (click)=\"submitInput(list.controls.options ,j ,i)\"\n                                                          [ngClass]=\"{'correct-answer-selected' : fillDropDown['controls'].addDropDownOption['controls'][i]['controls'].options['controls'][j]['controls'].selected.value == 'true' ,\n                                                          'correct-answer' : fillDropDown['controls'].addDropDownOption['controls'][i]['controls'].options['controls'][j]['controls'].selected.value == 'false' }\" aria-hidden=\"true\"></i>\n                                                   </div>\n                                                   <div class=\"placeSelf cursor\" *ngIf=\"j != 0 && selectOptionHeader == 'edit'\">\n                                                       <i (click)=\"deleteDropDownFormArr(list.controls.options, j)\" aria-hidden=\"true\"  class=\"fa fa-trash wrong-answer ml-2\"></i>\n                                                   </div>\n                                                   <div class=\"placeSelf cursor\" *ngIf=\"j == 0 && selectOptionHeader == 'edit'\">\n                                                       <i (click)=\"addDropDownFormArr(list.controls.options)\" aria-hidden=\"true\" class=\"fa fa-plus correct-answer ml-2\"></i>\n                                                   </div>\n                                               </div>\n                                           </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card px-4 pt-3 pb-4 mt-3\" [hidden]=\"selectOptionHeader == 'edit'\">\n                    <div class=\"row\">\n                        <div class=\"col-12 p-4\">\n                            <h4 [innerHTML]=\"dropValue | sanitizeHtml\"></h4>\n                        </div>\n                        <div class=\"col-12\" (keypress)=\"$event.preventDefault()\">\n                            <div *ngFor=\"let item of fillDropDown['controls'].addDropDownOption.value; let i = index\" class=\"d-flex flex-row p-3\">\n                                <div class=\"placeSelf\">\n                                    <span >{{i+1}} </span>\n                                </div>\n                                <div class=\"col-md-11\">\n                                    <div class=\"col-md-12 innerhtml-margin-clear p-2 dropdown-border dropdown-toggle d-flex justify-content-between\" data-toggle=\"dropdown\" id=\"dropdownPre{{i}}\"></div>\n                                    <div class=\"col-md-11 dropdown-menu\">\n                                        <span class=\"dropdown-item dropdown-link\">Select Answer</span>\n                                        <span *ngFor=\"let option of item.options; let k = index\" [innerHTML]=\"option.listOption | sanitizeHtml\" class=\"dropdown-item dropdown-link innerhtml-margin-clear\"></span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <ng-container *ngTemplateOutlet=\"settings; context: { $implicit: fillDropDown}\"></ng-container>\n\n            </form>\n        </div>\n    </div>\n\n    <!--    //////Fill in the Blanks > Text Drop Down designs closed -->\n    <!--    //////Fill in the Blanks > Text Entry designs open -->\n\n    <div *ngIf=\"questionId == '10'\" class=\"row\">\n        <div class=\"col-12\">\n            <h3 class=\"letter\">Multiple Choice > Text Entry</h3>\n            <hr class=\"letter\">\n        </div>\n        <div class=\"col-12\">\n            <form [formGroup]=\"textEntry\">\n                <div class=\"row\" [hidden]=\"selectOptionHeader != 'edit'\">\n                    <div class=\"col-12\">\n                        <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                    <div class=\"row px-2 mb-2 align-items-center\">\n                                        <div class=\"pl-1 pr-2\" style=\"width: 5% !important;\">\n                                            <h5 class=\"mb-0 question-no\">{{qnsNo}}</h5>\n                                        </div>\n                                        <h5 class=\"font-weight-bold mb-0\">Question<span class=\"text-danger\">&nbsp;*</span></h5>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-12 mb-1\" *ngIf=\"textbutton == true\">\n                                            <button class=\"pull-right btn btn-primary\" type=\"button\" (click)=\"saveQuestions('textEntry', '')\">Text Input</button>\n                                        </div>\n                                        <div class=\"col-12\">\n                                            <app-tiny-mice (emitEditorValue)=\"getEditorValue($event)\"\n                                                           [editorPatchValue]=\"type == 'add' ? false : questionEditData.question\"\n                                                           [height]=\"450\" [id]=\"'myEditor'\"\n                                                           [showDropBtn]=\"false\"\n                                                           [showInputBtn]=\"true\"></app-tiny-mice>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <div class=\"col-12\" *ngIf=\"inputCount != 0\">\n                        <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                            <div class=\"row\">\n                                <div class=\"col-6 align-self-center\">\n                                    <h5 class=\"font-weight-bold\">Input Field<span class=\"text-danger\">*</span></h5>\n                                </div>\n\n                                <div class=\"col-6 pointsSec d-flex align-items-end justify-content-end\">\n                                    <div class=\"checkbox checkbox-primary d-flex align-items-center\">\n                                        <input class=\"cursor ml-3\" formControlName=\"autograde\" type=\"checkbox\" id=\"autograde_input\">\n                                        <label class=\"ml-1\" for=\"autograde_input\">Auto Grade</label>\n                                        <input [disabled]=\"selectOptionHeader != 'edit'\" (change)=\"selectedEditorType($event, 'showTextEditor')\" class=\"cursor ml-3\"\n                                               [checked]=\"showTextEditor == 'math' || (type != 'add' && questionEditData.editor_type != 1)\"\n                                               type=\"checkbox\" id=\"math_editor_input\">\n                                        <label class=\"ml-1\" for=\"math_editor_input\">Math Editor</label>\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <div *ngFor=\"let data of inputArray; let i=index\" class=\"d-flex flex-row mt-1 mb-2\">\n                                        <div class=\"placeSelf\" >\n                                            <span class=\"mr-2\">{{i+1}}</span>\n                                        </div>\n                                        <div class=\"w-100\">\n                                            <input *ngIf=\"showTextEditor == 'eng'\" [(ngModel)]=\"data.options[0].value\" [ngModelOptions]=\"{standalone: true}\" class=\"mt-0 ml-2 form-control w-50\" placeholder=\"Enter the answer *\">\n                                            <app-tiny-mice (emitEditorValue)=\"getEditorValue1($event , data)\"\n                                                           *ngIf=\"showTextEditor != 'eng'\"\n                                                           [editorPatchValue]=\"type == 'add' ? false : data.options[0].value\"\n                                                           [height]=\"150\"\n                                                           [id]=\"i + 'inputEnter'\"\n                                                           [showDropBtn]=\"false\"\n                                                           [showInputBtn]=\"false\"></app-tiny-mice>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-12\">\n                        <ng-container *ngTemplateOutlet=\"settings; context: { $implicit: fillDropDown}\"></ng-container>\n                    </div>\n                </div>\n                <div class=\"card px-4 pt-3 pb-4 mt-3\" [hidden]=\"selectOptionHeader == 'edit'\">\n                    <div class=\"row\">\n                        <div class=\"col-12 p-4\">\n                            <h4 [innerHTML]=\"textValue | sanitizeHtml\"></h4>\n                        </div>\n                        <div class=\"col-12 div-disable\" (keypress)=\"$event.preventDefault()\">\n                            <div class=\"card\">\n                            <div class=\"d-flex flex-row p-3\" *ngFor=\"let data of inputArray;let i=index\">\n                                <div class=\"placeSelf\">\n                                    <span >{{i+1}} </span>\n                                </div>\n                                <div class=\"w-100\">\n                                    <h4 class=\"mt-0 ml-2 form-control w-50\" [innerHTML]=\"transform(data.options[0].value)\" [id]=\"'text-input' + i\"></h4>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <!--    //////Fill in the Blanks > Text Drop Down designs closed -->\n    <!--    //////Classify,Match and Order > Sort List designs open -->\n\n    <div *ngIf=\"questionId == '16'\" class=\"row\">\n        <div class=\"col-12\">\n            <h3 class=\"letter\">Match & Order > Sort List</h3>\n            <hr class=\"letter\">\n        </div>\n        <div class=\"col-12 mt-2\">\n            <form [formGroup]=\"matchSort\">\n                <div class=\"row\" [hidden]=\"selectOptionHeader != 'edit'\">\n                    <div class=\"col-12\">\n                        <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                    <div class=\"row px-2 mb-2 align-items-center\">\n                                        <div class=\"pl-1 pr-2\" style=\"width: 5% !important;\">\n                                            <h5 class=\"mb-0 question-no\">{{qnsNo}}</h5>\n                                        </div>\n                                        <h5 class=\"font-weight-bold mb-0\">Question<span class=\"text-danger\">&nbsp;*</span></h5>\n                                    </div>\n                                    <app-tiny-mice (emitEditorValue)=\"getEditorMatchSort($event)\"\n                                                   [editorPatchValue]=\"type == 'add' ? false : questionEditData.question\"\n                                                   [height]=\"450\"\n                                                   [id]=\"'matchShortQuestionId'\"\n                                                   [readonly]=\"selectOptionHeader != 'edit'\"></app-tiny-mice>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-12\">\n                        <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                            <div class=\"row\">\n                                <div class=\"col-6 align-self-center\">\n                                    <h5 class=\"font-weight-bold mb-0\">Labels<span class=\"text-danger\">*</span></h5>\n                                </div>\n                                <div class=\"col-6 pointsSec d-flex align-items-end justify-content-end\">\n                                    <div class=\"checkbox checkbox-primary d-flex align-items-center\">\n                                        <input class=\"cursor ml-3\" formControlName=\"autograde\" type=\"checkbox\" id=\"autograde_sort\">\n                                        <label class=\"ml-1\" for=\"autograde_sort\">Auto Grade</label>\n                                        <input [disabled]=\"selectOptionHeader != 'edit'\" (change)=\"selectedEditorType($event, 'showTextEditor')\" class=\"cursor ml-3\"\n                                               [checked]=\"showTextEditor == 'math' || (type != 'add' && questionEditData.editor_type != 1)\"\n                                               type=\"checkbox\" id=\"math_editor_sort\">\n                                        <label class=\"ml-1\" for=\"math_editor_sort\">Math Editor</label>\n                                    </div>\n                                </div>\n                                <div class=\"col-6 mt-2\">\n                                    <input placeholder=\"Source\" [readonly]=\"selectOptionHeader != 'edit'\" formControlName=\"source\" class=\"form-control w-100\">\n                                </div>\n                                <div class=\"col-6 mt-2\">\n                                    <input placeholder=\"Target\" [readonly]=\"selectOptionHeader != 'edit'\" formControlName=\"target\" class=\"form-control w-100\">\n                                </div>\n                                <div class=\"col-md-12 mt-3\">\n                                    <h5 class=\"font-weight-bold\">List<span class=\"text-danger\">*</span></h5>\n                                </div>\n                                <div class=\"col-12 col-lg-6\" cdkDropList (cdkDropListDropped)=\"dropped($event)\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 form-group\"  formArrayName=\"addMultipleChoice\" *ngFor=\"let list of matchSort.get('addMultipleChoice')['controls']; let i=index\">\n                                            <div class=\"input-group mb-1 inputMenu\" cdkDrag [formGroupName]=\"i\" style=\"flex-wrap: nowrap\">\n                                                <div class=\"input-group-prepend\">\n                                            <span class=\"input-group-text\">\n                                                <img src=\"assets/images/pdf-icons/equal@2x.png\" class=\"img-fluid\">\n                                            </span>\n                                                </div>\n                                                <app-tiny-mice (emitEditorValue)=\"getMatchSortValue($event, i, 'math')\" *ngIf=\"inputType == 'math'\"\n                                                               [editorPatchValue]=\"type == 'add' ? false : questionEditData.options[i].options\"\n                                                               [height]=\"150\"\n                                                               [id]=\"'matchSortDrop'+i\"\n                                                               [readonly]=\"selectOptionHeader != 'edit'\"\n                                                               class=\"flex-fill\"></app-tiny-mice>\n                                                <input *ngIf=\"inputType == 'text'\" (keyup)=\"getMatchSortValue($event, i, 'text')\" [readonly]=\"selectOptionHeader != 'edit'\" class=\"form-control\" formControlName=\"option\" placeholder=\"Item {{i + 1}}*\" type=\"text\">\n                                                <div class=\"input-group-append cursor\">\n                                            <span class=\"input-group-text\">\n                                                <img src=\"assets/images/pdf-icons/Icon material-delete.png\" (click)=\"deleted('deleteSort', i)\" class=\"img-fluid\">\n                                            </span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-12\">\n                                            <button (click)=\"addChoice('addMultipleSort')\"  [hidden]=\"selectOptionHeader != 'edit'\" class=\"btn-sm btn-outline-primary\"><i aria-hidden=\"true\" class=\"fa fa-plus-circle mr-1\"></i> Add New Choice</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-12 col-lg-6\" cdkDropList (cdkDropListDropped)=\"droppedCorrect($event)\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 form-group\" formArrayName=\"addMultipleChoose\" *ngFor=\"let list of matchSort.get('addMultipleChoose')['controls']; let i=index\">\n                                            <div class=\"input-group inputMenu mb-1\" cdkDrag [formGroupName]=\"i\">\n                                                <div class=\"input-group-prepend\">\n                                                    <span class=\"input-group-text\">\n                                                        <img src=\"assets/images/pdf-icons/equal@2x.png\" class=\"img-fluid\">\n                                                    </span>\n                                                </div>\n                                                <div *ngIf=\"inputType != 'text'\" [innerHTML]=\"list['controls']['selectOption'].value | sanitizeHtml\" class=\"p-3\" style=\"border: 1px solid #ced4da; width: 90%;overflow: auto;max-height: 32vh\" >\n                                                </div>\n                                                <h4 *ngIf=\"inputType == 'text'\" [innerHTML]=\"list['controls']['selectOption'].value | sanitizeHtml\" aria-placeholder=\"item\" class=\"form-control mb-0 overflow-scroll\"></h4>\n                <!--                            <input type=\"text\" *ngIf=\"inputType == 'text'\" readonly [innerHTML]=\"this.matchSort['controls'].addMultipleChoose['controls'][i]['controls']['selectOption'].value\" placeholder=\"item\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\">-->\n                <!--                                <app-tiny-mice [height]=\"150\" class=\"flex-fill\" [editorPatchValue]=\"this.matchSort['controls'].addMultipleChoose['controls'][i]['controls']['selectOption'].value\" [id]=\"i+'matchSort'\" *ngIf=\"inputType == 'math'\" readonly></app-tiny-mice>-->\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-12\">\n                        <ng-container *ngTemplateOutlet=\"settings; context: { $implicit: matchSort}\"></ng-container>\n                    </div>\n                </div>\n                <div class=\"card px-4 pt-3 pb-4 mt-3\" [hidden]=\"selectOptionHeader != 'sortpreview'\">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <div class=\"row mt-2\">\n                                <div [innerHTML]=\"questionValue | sanitizeHtml\" class=\"col-12 pl-4 question-align\">\n                                </div>\n                            </div>\n                            <div class=\"row mt-2\">\n                                <div class=\"col-6\" cdkDropList>\n                                    <h4>{{matchSort.controls.source.value}}</h4>\n                                    <div class=\"row\">\n                                        <div class=\"col-12 form-group\" *ngFor=\"let list of sourceArr; let i=index\">\n                                            <div class=\"input-group my-2 inputMenu\" cdkDrag  [cdkDragDisabled]=\"true\">\n                                                <div class=\"input-group-prepend\">\n                                                    <span class=\"input-group-text\">\n                                                        <img src=\"assets/images/pdf-icons/equal@2x.png\" class=\"img-fluid\">\n                                                    </span>\n                                                </div>\n                                                <div *ngIf=\"inputType != 'text'\" [innerHTML]=\"list.value | sanitizeHtml\" class=\"p-3\" style=\"border: 1px solid #ced4da; width: 90%;overflow: auto;max-height: 32vh\" >\n                                                </div>\n                                                <h4 *ngIf=\"inputType == 'text'\" [innerHTML]=\"list.value | sanitizeHtml\" aria-placeholder=\"item\" class=\"form-control mb-0 overflow-scroll\"></h4>\n    <!--                                                <input type=\"text\" readonly [value]=\"list.value\" placeholder=\"item\" class=\"form-contol w-75\" aria-label=\"Amount (to the nearest dollar)\">-->\n<!--                                                <span [innerHTML]=\"list.value | sanitizeHtml\" aria-placeholder=\"item\" class=\"form-control flex-fill\"></span>-->\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-6\" cdkDropList>\n                                    <h4>{{matchSort.controls.target.value}}</h4>\n                                    <div class=\"row\">\n                                        <div class=\"col-12 form-group\" *ngFor=\"let list of matchSort.get('addMultipleChoose')['controls']; let i=index\">\n                                            <div class=\"input-group my-2 inputMenu\" cdkDrag>\n                                                <div class=\"input-group-prepend\">\n                                                    <span class=\"input-group-text\">\n                                                        <img alt=\"Drag\" src=\"assets/images/pdf-icons/equal@2x.png\" class=\"img-fluid\">\n                                                    </span>\n                                                </div>\n\n                                                <div *ngIf=\"inputType != 'text'\" [innerHTML]=\"list['controls']['selectOption'].value | sanitizeHtml\" class=\"p-3\" style=\"border: 1px solid #ced4da; width: 90%;overflow: auto;max-height: 32vh\" >\n                                                </div>\n                                                <h4 *ngIf=\"inputType == 'text'\" [innerHTML]=\"list['controls']['selectOption'].value | sanitizeHtml\" aria-placeholder=\"item\" class=\"form-control mb-0 overflow-scroll\"></h4>\n<!--                                                <span [innerHTML]=\"list['controls']['selectOption'].value | sanitizeHtml\" aria-placeholder=\"item\" class=\"form-control flex-fill\"></span>-->\n    <!--                                            <input type=\"text\" [ngStyle]=\"{'border': list.valid == '1' ? '2px solid green':  list.valid == '2' ? '2px solid red' : ''}\" readonly [value]=\"list.value\" placeholder=\"item\" class=\"form-contol w-75\" aria-label=\"Amount (to the nearest dollar)\">-->\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <!--    //////Classify,Match and Order > Sort List designs closed -->\n    <!--    //////Writing > Essay With Rich Text designs open -->\n\n    <div *ngIf=\"['20', '55'].includes(questionId)\" class=\"row\">\n        <div class=\"col-12\">\n            <h3 class=\"letter\">{{questionId == '20' ? 'Free Text / Math' : 'Essay Writing'}}</h3>\n            <hr class=\"letter\">\n        </div>\n        <div class=\"col-12\">\n            <form [formGroup]=\"richText\">\n                <div class=\"row\">\n                    <div class=\"col-12\" [hidden]=\"selectOptionHeader !='edit'\">\n                        <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                    <div class=\"row px-2 mb-2 align-items-center\">\n                                        <div class=\"pl-1 pr-2\" style=\"width: 5% !important;\">\n                                            <h5 class=\"mb-0 question-no\">{{qnsNo}}</h5>\n                                        </div>\n                                        <h5 class=\"mb-0\"><b>{{questionId == '20' ? 'Question' : 'Essay Prompt'}}<span class=\"text-danger\">*</span></b></h5>\n                                    </div>\n                                    <app-tiny-mice *ngIf=\"questionId == '20'\" (emitEditorValue)=\"getEditorContextValue($event, questionId, 'editorContext')\"\n                                                   [editorPatchValue]=\"type == 'add' ? false : questionEditData.question\"\n                                                   [height]=\"450\"></app-tiny-mice>\n                                    <div class=\"text-area\" *ngIf=\"questionId != '20'\">\n                                        <textarea class=\"form-control\" rows=\"10\" [(ngModel)]=\"writingQuestionEditor\"\n                                                  [ngModelOptions]=\"{standalone: true}\" placeholder=\"{{questionId == '20' ? 'Please enter your question'\n                                                  : 'Please enter your Essay Prompt'}}\"></textarea>\n                                        <div class=\"word-count\">\n                                            <span class=\"mr-2\">{{wordCount('question')}}&nbsp;Words</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-12 mt-2\" *ngIf=\"selectOptionHeader == 'edit' && questionId == '55'\">\n                        <div class=\"card px-4 pt-3 pb-4 mb-0\">\n                            <h5 class=\"font-weight-bold mb-0\">Stimulus Articles</h5>\n                            <div class=\"col-12 my-2 px-0\">\n                                <textarea class=\"form-control\" placeholder=\"Please enter your Stimulus Articles\"\n                                          formControlName=\"scoring_instruction\" rows=\"5\"></textarea>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-12\">\n                        <div class=\"card px-4 pt-3 pb-4 mt-3 mb-0\">\n                            <div class=\"row\">\n                                <div class=\"col-8 align-self-center\" *ngIf=\"selectOptionHeader == 'edit'\">\n                                    <h5 class=\"font-weight-bold mb-0\" *ngIf=\"questionId == '20'\">Correct Answer<span class=\"text-danger\">*</span></h5>\n                                    <h5 class=\"font-weight-bold mb-0\" *ngIf=\"questionId == '55'\">Sample Essay</h5>\n                                </div>\n                                <div class=\"col-4 pointsSec d-flex align-items-end justify-content-end\" *ngIf=\"selectOptionHeader == 'edit'\">\n                                    <div class=\"checkbox checkbox-primary d-flex align-items-center\">\n                                        <input class=\"cursor ml-3\" formControlName=\"autograde\" type=\"checkbox\" id=\"autograde_free_text\">\n                                        <label class=\"ml-1\" for=\"autograde_free_text\">Auto Grade</label>\n                                    </div>\n                                    <button *ngIf=\"questionId == '20' && (richText.get('repeatAnswerFreeText')['controls'].length < maximumAllowedCount)\"\n                                            class=\"btn btn-outline-primary ml-3\" (click)=\"addNewCorrectAnswerForFreeText(richText.get('repeatAnswerFreeText'))\">\n                                        <i class=\"fa fa-plus-circle mr-1\"></i>Add ({{richText.get('repeatAnswerFreeText')['controls'].length}} / {{maximumAllowedCount}})</button>\n                                </div>\n                                <div class=\"col-12 my-2\" *ngIf=\"selectOptionHeader != 'edit' && questionId == '20'\">\n                                    <h4 [innerHTML]=\"richPreviewValue | sanitizeHtml\"></h4>\n                                </div>\n                                <div class=\"col-12 my-2 text-area\" *ngIf=\"selectOptionHeader != 'edit' && questionId == '55'\">\n                                    <textarea class=\"form-control\" rows=\"10\" [(ngModel)]=\"writingQuestionEditor\" readonly\n                                              [ngModelOptions]=\"{standalone: true}\" placeholder=\"Please enter your question\"></textarea>\n                                    <div class=\"word-count\">\n                                        <span class=\"mr-2\">{{wordCount('question')}}&nbsp;Words</span>\n                                    </div>\n                                </div>\n                                <div class=\"col-12 {{selectOptionHeader =='edit' ? '' : questionId == '20' ? 'div-disable mt-2' : 'mt-2'}}\">\n                                    <div class=\"row\" *ngIf=\"questionId == '20'\">\n                                        <div class=\"col-12 mb-3\" *ngFor=\"let item of richText.get('repeatAnswerFreeText')['controls']; let first = first; let last = last; let i = index\"\n                                             formArrayName=\"repeatAnswerFreeText\">\n                                            <div [formGroupName]=\"i\" class=\"mb-3 d-flex\">\n                                                <div class=\"sub-question-no mt-0 w-4\" style=\"height: 36px !important\">\n                                                    <span>{{richText.get('repeatAnswerFreeText')['controls'].length - i}}</span>\n                                                </div>\n                                                <div [ngClass]=\"!last && richText.get('repeatAnswerFreeText')['controls'].length > 1 ? 'w-93 px-2' : 'w-96 pl-2'\">\n                                                    <app-tiny-mice\n                                                            (emitEditorValue)=\"multiAnswerFreeText($event, i, richText.get('repeatAnswerFreeText')['controls'].length - i)\"\n                                                            [editorPatchValue]=\"type == 'add' ? false : questionEditData.answer[richText.get('repeatAnswerFreeText')['controls'].length - i - 1]?.correctAnswer ?? ''\"\n                                                            [height]=\"150\"></app-tiny-mice>\n                                                </div>\n                                                <div *ngIf=\"!last && richText.get('repeatAnswerFreeText')['controls'].length > 1\" class=\"w-3\">\n                                                    <div class=\"pull-right border p-2 cursor\" (click)=\"deleteCorrectAnswerForFreeText(richText.get('repeatAnswerFreeText'), i, richText.get('repeatAnswerFreeText')['controls'].length - i)\">\n                                                        <img class=\"cursor\" alt=\"\" src=\"assets/images/pdf-icons/delete2.png\" title=\"Delete\">\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"text-area\" *ngIf=\"questionId == '55'\">\n                                        <textarea class=\"form-control\" rows=\"10\" [(ngModel)]=\"writingAnswerEditor\" [readOnly]=\"selectOptionHeader != 'edit'\"\n                                                  [ngModelOptions]=\"{standalone: true}\" placeholder=\"Please enter your sample essay\"></textarea>\n                                        <div class=\"word-count\">\n                                            <span class=\"mr-2\">{{wordCount()}}&nbsp;Words</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-12\" *ngIf=\"selectOptionHeader == 'edit'\">\n                        <ng-container *ngTemplateOutlet=\"settings; context: { $implicit: richText}\"></ng-container>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <!--    //////Writing > Essay With Rich Text designs closed -->\n    <!--    //////Writing > Essay With Plain Text designs open -->\n\n    <div *ngIf=\"questionId == '21'\" class=\"row\">\n        <div class=\"col-12\">\n            <h3 class=\"letter\">Writing > Essay with Plain Text</h3>\n            <hr class=\"letter\">\n        </div>\n        <div class=\"col-12\">\n            <form [formGroup]=\"plainText\">\n                <div class=\"row\" [hidden]=\"selectOptionHeader !='edit'\">\n                    <div class=\"col-12\">\n                        <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                    <div class=\"row px-2 mb-2 align-items-center\">\n                                        <div class=\"pl-1 pr-2\" style=\"width: 5% !important;\">\n                                            <h5 class=\"mb-0 question-no\">{{qnsNo}}</h5>\n                                        </div>\n                                        <h5 class=\"font-weight-bold mb-0\">Question<span class=\"text-danger\">&nbsp;*</span></h5>\n                                    </div>\n                                    <app-tiny-mice [height]=\"450\" (emitEditorValue)=\"getEditorContextValue($event, questionId, 'editorContext')\" [editorPatchValue]=\"false\"></app-tiny-mice>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-12\">\n                        <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                            <div class=\"row pointsSec\">\n                                <div class=\"col-12 py-2\">\n                                    <h5>Settings</h5>\n                                </div>\n                                <div class=\"col-4\">\n                                    <label><b>Level</b></label>\n                                    <select class=\"form-control\" formControlName=\"level\">\n                                        <option value=\"1\">Easy</option>\n                                        <option value=\"2\">Medium</option>\n                                        <option value=\"3\">Difficult</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-4\">\n                                    <label class=\"labelName\">\n                                        <b>Points</b>\n                                    </label>\n                                    <input (keypress)=\"numberValidate($event)\" class=\"form-control pointInput\" formControlName=\"points\" type=\"text\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-12\">\n                        <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                    <h5>Correct Answer<span class=\"text-danger\">*</span></h5>\n                                    <app-tiny-mice [height]=\"150\" (emitEditorValue)=\"getEditorContextValue($event, questionId, 'answer')\" [editorPatchValue]=\"false\"></app-tiny-mice>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card px-4 pt-3 pb-4 mt-3\" [hidden]=\"selectOptionHeader =='edit'\">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <h4 [innerHTML]=\"plainPreviewValue | sanitizeHtml\"></h4>\n                        </div>\n                        <div class=\"col-12 mt-3\">\n                            <app-tiny-mice [height]=\"150\"></app-tiny-mice>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <!--    //////Writing > Essay With Plain Text designs closed -->\n    <!--    //////Writing > Essay With Short Text designs open -->\n\n    <div *ngIf=\"questionId == '22'\" class=\"row\">\n        <div class=\"col-12\">\n            <h3 class=\"letter\">Writing > Essay with Short Text</h3>\n            <hr class=\"letter\">\n<!--                <button class=\"btn btn-outline-primary w-25\" [ngClass]=\"{'selectColor' : selectOptionHeader == 'edit'}\" (click)=\"selectHeader('edit')\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit Mode</button>-->\n<!--                <button class=\"btn btn-outline-primary w-25\" [ngClass]=\"{'selectColor' : selectOptionHeader == 'shortpreview'}\" (click)=\"selectHeader('shortpreview')\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> Preview Mode</button>-->\n<!--                <button class=\"btn btn-outline-primary w-25\" (click)=\"saveQuestions('shortText')\"><i class=\"fa fa-save\" aria-hidden=\"true\"></i> Save</button>-->\n<!--                <button class=\"btn btn-outline-primary w-25\" (click)=\"cancelAction()\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Cancel</button>-->\n        </div>\n        <div class=\"col-12\">\n            <form [formGroup]=\"shortText\">\n                <div class=\"row\" [hidden]=\"selectOptionHeader !='edit'\">\n                    <div class=\"col-12\">\n                        <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                    <div class=\"row px-2 mb-2 align-items-center\">\n                                        <div class=\"pl-1 pr-2\" style=\"width: 5% !important;\">\n                                            <h5 class=\"mb-0 question-no\">{{qnsNo}}</h5>\n                                        </div>\n                                        <h5 class=\"font-weight-bold mb-0\">Question<span class=\"text-danger\">&nbsp;*</span></h5>\n                                    </div>\n                                    <app-tiny-mice [height]=\"450\" (emitEditorValue)=\"getEditorContextValue($event, questionId, 'editorContext')\" [editorPatchValue]=\"false\"></app-tiny-mice>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-12\">\n                        <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                            <div class=\"row\">\n                                <div class=\"col-12 my-2\">\n                                    <h5>Settings</h5>\n                                </div>\n                                <div class=\"col-4\">\n                                    <label><b>Level</b></label>\n                                    <select class=\"form-control\" formControlName=\"level\">\n                                        <option value=\"1\">Easy</option>\n                                        <option value=\"2\">Medium</option>\n                                        <option value=\"3\">Difficult</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-4\">\n                                    <label class=\"labelName\">\n                                        <b>Points</b>\n                                    </label>\n                                    <input (keypress)=\"numberValidate($event)\" class=\"form-control pointInput\" formControlName=\"points\" type=\"text\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-12\">\n                        <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                    <h5>Correct Answer<span class=\"text-danger\">*</span></h5>\n                                    <app-tiny-mice [height]=\"150\" (emitEditorValue)=\"getEditorContextValue($event, questionId, 'answer')\" [editorPatchValue]=\"false\"></app-tiny-mice>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-12\">\n                        <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                            <div class=\"row\">\n                                <div class=\"col-12 mt-4 d-flex flex-column\">\n                                    <div>\n                                        <p>Explanation</p>\n                                    </div>\n                                    <div>\n                                        <input placeholder=\"Enter Sample Answer\" formControlName=\"explanation\"  class=\"form-control inputHeight w=100\">\n                                    </div>\n                                </div>\n            \n                                <div class=\"col-12 mt-4 d-flex flex-column\">\n                                    <div class=\"row mb-2\">\n                                        <div class=\"col-6\">\n                                            <h5>Hints</h5>\n                                        </div>\n                                        <div class=\"col-6\">\n<!--                                            <button (click)=\"addChoicePassage('passageAddHint', i)\" class=\"btn-sm btn-primary\"><i aria-hidden=\"true\" class=\"fa fa-plus-circle mr-1\"></i> Add New Hint</button>-->\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-12 form-group\" formArrayName=\"addHints\" *ngFor=\"let list of shortText.get('addHints')['controls']; let i=index\">\n                                            <div class=\"input-group mb-3 inputMenu\" [formGroupName]=\"i\">\n                                                <input placeholder=\"Enter a hint for the problem\" formControlName=\"hint\" class=\"form-control inputHeight w=100\">\n                                                <div class=\"input-group-append cursor\" *ngIf=\"i != '0'\" (click)=\"deleted('deletePlainHint', i)\">\n                                            <span class=\"input-group-text\">\n                                                <img src=\"assets/images/pdf-icons/Icon material-delete.png\" class=\"img-fluid\">\n                                            </span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card px-4 pt-3 pb-4 mt-3\" [hidden]=\"selectOptionHeader == 'edit'\">\n                    <div class=\"row\">\n                        <div class=\"col-12 p-4\">\n                            <h4 [innerHTML]=\"shortPreviewValue | sanitizeHtml\"></h4>\n                        </div>\n                        <div class=\"col-12 mt-3\">\n                            <app-tiny-mice [height]=\"300\"></app-tiny-mice>\n                        </div>\n                    </div>\n                </div>            \n            </form>\n        </div>\n    </div>\n\n    <!--    //////Writing > Essay With Plain Text designs closed -->\n\n    <!--    passage open-->\n\n    <div *ngIf=\"questionId == '24'\" class=\"row\">\n        <div class=\"col-12\">\n            <h3 class=\"letter\">Passage > passage with Questions</h3>\n            <hr class=\"letter\">\n        </div>\n        <div class=\"col-12\">\n            <form [formGroup]=\"passage\">\n                <div class=\"card px-4 pt-3 pb-4\">\n                    <div class=\"row\">\n                        <div class=\"px-2\" *ngIf=\"type == 'add' || selectOptionHeader != 'edit'\" style=\"width: 5% !important;\">\n                            <h5 class=\"mb-0 question-no\">{{qnsNo}}</h5>\n                        </div>\n                        <div class=\"col-12 my-2\" *ngIf=\"selectOptionHeader == 'edit'\">\n                            <div class=\"row d-flex {{type == 'add' ? 'justify-content-between' : 'justify-content-between'}}\">\n                                <div class=\"px-2\" *ngIf=\"type != 'add'\" style=\"width: 5% !important;\">\n                                    <h5 class=\"mb-0 question-no\">{{qnsNo}}</h5>\n                                </div>\n                                <div class=\"col-5\" *ngIf=\"type == 'add'\">\n                                    <h5 class=\"font-weight-bold\">Select Passage<span class=\"text-danger\">*</span></h5>\n                                    <select class=\"form-control cursor\" formControlName=\"passage_id\" (change)=\"passageSelect($event)\">\n                                        <option value=\"\" disabled>Select Passage</option>\n                                        <option value=\"{{data?.passage_id}}\" *ngFor=\"let data of listPassageDetails\">{{data?.title}}</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-3 align-self-end\">\n                                    <button class=\"btn btn-primary w-100\" (click)=\"addOrEditPassage('add')\"><i class=\"fa fa-plus-circle mr-1\"></i>Add Passage</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-12 my-2\">\n                            <div class=\"row\">\n                                <div class=\"mx-0 mb-2 col-12 d-inline-flex justify-content-between align-items-center\">\n                                    <div>\n                                        <h5 class=\"font-weight-bold\">Editor Context</h5>\n                                    </div>\n                                    <div *ngIf=\"passage.controls.editorContext.value != '' && selectOptionHeader == 'edit'\">\n                                        <img alt=\"\" *ngIf=\"!editPassageContent\" class=\"view-detail-icon1 pull-right mr-2 cursor\" (click)=\"editPassageContent = !editPassageContent;addOrEditPassage('edit')\"  src=\"assets/images/pdf-icons/Icon awesome-pencil-alt@2x.png\" title=\"Edit-Passage\">\n                                        <img alt=\"\" *ngIf=\"editPassageContent\" class=\"view-detail-icon1 pull-right mr-2 cursor\" src=\"assets/images/pdf-icons/floppy-disk (2).png\" (click)=\"passageCREDService('edit');editPassageContent = !editPassageContent\" title=\"Save-Passage\">\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <app-tiny-mice (emitEditorValue)=\"getPassageContent($event)\"\n                                    [editorPatchValue]=\"passage.controls.editorContext.value != '' ? passage.controls.editorContext.value : false\"\n                                    [height]=\"250\" [inlineEditor]=\"false\"\n                                    [id]=\"'passage'\" [readonly]=\"!editPassageContent\"></app-tiny-mice>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div *ngFor=\"let list of passage.get('addQuestionType')['controls']; let i=index\" class=\"row mt-4\" formArrayName=\"addQuestionType\">\n                    <div  [formGroupName]=\"i\" class=\"col-md-12\">\n                        <div class=\"card px-4 pt-3 pb-4\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"row d-flex justify-content-between\">\n                                        <div class=\"col-7 align-self-center\">\n                                            <h5 class=\"font-weight-bold mb-0\">Question Types</h5>\n                                        </div>\n                                        <div class=\"col-md-5 d-flex\">\n                                            <select class=\"form-control cursor\" formControlName=\"selectType\" [ngClass]=\"{'div-disable' : selectOptionHeader != 'edit'}\">\n                                                <option disabled value=\"select\">Select type</option>\n                                                <option value=\"MultiChoice\">Multi choice</option>\n                                                <option value=\"TrueOrFalse\">True or False</option>\n                                                <option value=\"textEntry\">Text Entry</option>\n                                                <option value=\"essay\">Essay</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        \n<!--                        ////multi choice opens/////-->\n                        <div *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].selectType.value == 'MultiChoice'\">\n                            <div [hidden]=\"selectOptionHeader != 'edit'\">\n                                <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12\">\n                                            <h5 class=\"font-weight-bold\">Question<span class=\"text-danger\">*</span></h5>\n                                            <app-tiny-mice (emitEditorValue)=\"getPassageOptionValue($event, questionId, 'question', 0, i, list)\"\n                                                  [editorPatchValue]=\"type == 'add' ? false : questionEditData?.subQuestions[i]?.question\"\n                                                  [height]=\"450\" [readonly]=\"selectOptionHeader != 'edit'\"></app-tiny-mice>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                                    <div class=\"row\">\n                                        <div class=\"col-6 mb-3 align-self-center\">\n                                            <h5 class=\"font-weight-bold mb-0\">Multiple Choice Options<span class=\"text-danger\">&nbsp;*</span></h5>\n                                        </div>\n                                        <div class=\"col-6 mb-3 pointsSec d-flex align-items-end justify-content-end\">\n                                            <div class=\"checkbox checkbox-primary d-flex align-items-center\">\n                                                <input class=\"cursor\" (change)=\"multipleResponse('passageMultipleChoice', $event)\" data-original-title=\"\"\n                                                       formControlName=\"multiResponse\" id=\"checkbox_primary_passage1\" title=\"\" type=\"checkbox\">\n                                                <label for=\"checkbox_primary_passage1\" class=\"ml-1\">Multiple Responses</label>\n                                                <input class=\"cursor ml-3\" formControlName=\"autograde\" type=\"checkbox\" id=\"autograde_multiple_choice_passage\">\n                                                <label class=\"ml-1\" for=\"autograde_multiple_choice_passage\">Auto Grade</label>\n                                                <input [disabled]=\"selectOptionHeader != 'edit'\" (change)=\"selectedEditorType($event, 'passageEditor', passage['controls'].addQuestionType['controls'][i])\"\n                                                       class=\"cursor ml-3\" [checked]=\"type != 'add' && questionEditData?.subQuestions[i]?.editor_type == 3\"\n                                                       type=\"checkbox\" id=\"math_editor_multiple_choice_passage\">\n                                                <label class=\"ml-1\" for=\"math_editor_multiple_choice_passage\">Math Editor</label>\n                                            </div>\n                                        </div>\n                                        <div *ngFor=\"let item of list.get('addMultipleChoice')['controls']; let j=index\" class=\"form-group col-12 my-2\" formArrayName=\"addMultipleChoice\">\n                                            <div [formGroupName]=\"j\" class=\"input-group inputMenu\" style=\"flex-wrap: nowrap\">\n                                                        <span class=\"m-auto pr-2\" *ngIf=\"!passage['controls'].addQuestionType['controls'][i]['controls'].multiResponse.value\">\n                                                            <input class=\"cursor\" type=\"radio\" name=\"optradio {{i}}\" id=\"optradio {{i}}\" (change)=\"getChoiceAnswerPassage($event, i, j, 'multipleChoiceChoose')\"\n                                                                   [checked]=\"item['controls']['active'].value == 1\">\n                                                        </span>\n                                                <span class=\"m-auto cursor pr-2\" *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].multiResponse.value\">\n                                                            <input class=\"cursor\" type=\"checkbox\" name=\"optradio1 {{i}}\" id=\"optradio1 {{i}}\" (change)=\"getChoiceAnswerPassage($event, i, j, 'multipleChoiceChoose')\"\n                                                                   [checked]=\"item['controls']['active'].value == 1\">\n                                                        </span>\n                                                <span class=\"m-auto pr-2 cursor pb-1\" for=\"optradio1 {{j}}\">{{((j+1) + 9).toString(36).toUpperCase()}}.</span>\n                                                <app-tiny-mice [height]=\"150\" (emitEditorValue)=\"getPassageOptionValue($event, questionId, 'multiOption', j, i , list.controls.addMultipleChoice)\"\n                                                               *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value == 'math'\"\n                                                               [editorPatchValue]=\"type == 'add' ? false : questionEditData?.subQuestions[i]?.options[j]?.options\" class=\"flex-fill\"\n                                                               [id]=\"i+'s'+j+'editor'+random\"></app-tiny-mice>\n                                                <input *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value == 'text'\"\n                                                       aria-label=\"Amount (to the nearest dollar)\"  [readonly]=\"selectOptionHeader != 'edit'\"\n                                                       class=\"form-control\" formControlName=\"option\" placeholder=\"Option {{j+1}} *\" type=\"text\">\n                                                <div (click)=\"deleteChoicePassage('deletePassageChoice', i, j)\" class=\"input-group-append cursor\">\n                                                            <span class=\"input-group-text\" [ngClass]=\"{'div-disable' : selectOptionHeader != 'edit'}\">\n                                                                <img class=\"img-fluid\" src=\"assets/images/pdf-icons/Icon material-delete.png\">\n                                                            </span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-12\">\n                                            <button (click)=\"addChoicePassage('passageAddChoice', i)\" class=\"btn-sm btn-outline-primary\" [hidden]=\"selectOptionHeader != 'edit'\"><i aria-hidden=\"true\" class=\"fa fa-plus-circle mr-1\"></i> Add New Choice</button>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <ng-container *ngTemplateOutlet=\"settings; context: { $implicit: passage['controls'].addQuestionType['controls'][i]}\"></ng-container>\n\n                                <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 d-flex flex-column\" [hidden]=\"selectOptionHeader != 'edit'\">\n                                                <h5 class=\"font-weight-bold\">Explanation</h5>\n                                                <app-tiny-mice [height]=\"450\"\n                                                               [readonly]=\"selectOptionHeader != 'edit'\"\n                                                               [showDropBtn]=\"false\"\n                                                               [showInputBtn]=\"false\"\n                                                               [id]=\"'passageexplaination' + i\"\n                                                               [editorPatchValue]= \"type != 'edit' || questionEditData?.subQuestions[i]?.explanation ?\n                                                                    questionEditData?.subQuestions[i]?.explanation : false\"\n                                                               (emitEditorValue)=\"getPassageExplanationEditor($event, i)\"></app-tiny-mice>\n                                        </div>\n\n                                        <div class=\"col-12 d-flex flex-column mt-3\" [hidden]=\"selectOptionHeader != 'edit'\">\n                                            <div class=\"row\">\n                                                <div class=\"col-6 mb-2 align-self-center\">\n                                                    <h5 class=\"mb-0 font-weight-bold\">Hints</h5>\n                                                </div>\n                                                <div class=\"col-6 mb-2\">\n                                                    <button (click)=\"addChoicePassage('passageAddHint', i)\" class=\"btn-sm pull-right btn-primary\"><i aria-hidden=\"true\" class=\"fa fa-plus-circle mr-1\"></i> Add New Hint</button>\n                                                </div>\n\n                                                <div *ngFor=\"let item of list.get('addHints')['controls']; let j=index\" [hidden]=\"selectOptionHeader != 'edit'\" class=\"col-12 form-group\" formArrayName=\"addHints\">\n                                                    <div [formGroupName]=\"j\" class=\"input-group mb-3 inputMenu\">\n                                                        <app-tiny-mice [editorPatchValue]=\"type != 'edit' || questionEditData?.subQuestions[i]?.hint[j]?.hint ?\n                                                            questionEditData?.subQuestions[i]?.hint[j]?.hint : false\"\n                                                                       (emitEditorValue)=\"getPassageHintEditor($event, i, j)\"\n                                                                       [height]=\"450\"\n                                                                       [id]=\"'multiHintChoice'+i + j\"\n                                                                       [readonly]=\"selectOptionHeader != 'edit'\"\n                                                                       class=\"flex-fill\"></app-tiny-mice>\n                                                    <div (click)=\"deleteChoicePassage('deletePassageHints', i, j)\" *ngIf=\"j != '0'\" class=\"input-group-append cursor\">\n                                                        <span class=\"input-group-text\">\n                                                            <img class=\"img-fluid\" src=\"assets/images/pdf-icons/Icon material-delete.png\" alt=\"\">\n                                                        </span>\n                                                    </div>\n                                                  </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div [hidden]=\"selectOptionHeader == 'edit'\" class=\"card px-4 pt-3 pb-4 mt-3\">\n                                <div class=\"col-md-12 px-0 mt-2\">\n                                    <h4 [innerHTML]=\"questionArray[i] | sanitizeHtml\" class=\"innerhtml-margin-clear\"></h4>\n                                </div>\n                                <div *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value == 'text'\" class=\"col-12 px-0 mt-3\">\n                                    <div *ngFor=\"let item of list.get('addMultipleChoice')['controls']; let j=index\"\n                                         [ngClass]=\"{'question-page-selected' : item['controls']['active'].value == 1}\"\n                                         class=\"mb-4 multiSelectCard question-page d-flex\">\n                                        <span [ngClass]=\"{'selectColor' : item['controls']['active'].value == 1}\" class=\"multichoice-option1 mr-2\">{{((j+1) + 9).toString(36).toUpperCase()}}</span>\n                                        <span class=\"mt-2\">{{item['controls']['option'].value}}</span>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value == 'math'\" class=\"col-12 px-0 mt-3\">\n                                    <div *ngFor=\"let item of list.get('addMultipleChoice')['controls']; let j=index\"\n                                         class=\"mb-4 multiSelectCard question-page d-flex\">\n                                        <span [ngClass]=\"{'selectColor' : item['controls']['active'].value == 1}\" class=\"multichoice-option1 mr-2\">{{((j+1) + 9).toString(36).toUpperCase()}}</span>\n                                        <span [innerHTML]=\"item['controls']['option'].value | sanitizeHtml\" class=\"mt-2 ml-3\"></span>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n<!--                        ////multi choice closes/////-->\n<!--                        ////true or false opens/////-->\n                        <div *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].selectType.value == 'TrueOrFalse'\">\n                            <div [hidden]=\"selectOptionHeader != 'edit'\">\n\n                                <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12\">\n                                            <h5 class=\"font-weight-bold\">Question<span class=\"text-danger\">*</span></h5>\n                                            <app-tiny-mice (emitEditorValue)=\"getPassageOptionValue($event, questionId, 'question', 0, i, list)\"\n                                                           [editorPatchValue]=\"type == 'add' ? false : questionEditData?.subQuestions[i]?.question\"\n                                                           [height]=\"450\" [readonly]=\"selectOptionHeader != 'edit'\"></app-tiny-mice>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <div class=\"row\">\n                                                <div class=\"col-4 align-self-center\">\n                                                    <h5 class=\"font-weight-bold mb-0\">Multiple Choice Options<span class=\"text-danger\">&nbsp;*</span></h5>\n                                                </div>\n                                                <div class=\"col-8 pointsSec d-flex align-items-end justify-content-end\">\n                                                    <div class=\"checkbox checkbox-primary d-flex align-items-center\">\n                                                        <button (click)=\"addChoicePassage('passageAddChoice', i)\" class=\"btn-sm btn-primary mr-3\"\n                                                                [hidden]=\"selectOptionHeader != 'edit'\"><i aria-hidden=\"true\" class=\"fa fa-plus-circle mr-1\"></i> Add New Choice</button>\n\n                                                        <input (change)=\"multipleResponsePassage('matchTableCheck', $event, i)\" [ngClass]=\"{'div-disable' : selectOptionHeader != 'edit'}\"\n                                                               data-original-title=\"\" formControlName=\"multiResponse\" id=\"checkbox-primary-93\" title=\"\" type=\"checkbox\">\n                                                        <label class=\"ml-1\" for=\"checkbox-primary-93\">Multiple Responses</label>\n                                                        <input class=\"ml-3 cursor\" formControlName=\"autograde\" type=\"checkbox\">\n                                                        <label class=\"ml-1\" for=\"checkbox-primary-1\">Auto Grade</label>\n                                                        <input [disabled]=\"selectOptionHeader != 'edit'\" (change)=\"selectedEditorType($event, 'passageEditor', passage['controls'].addQuestionType['controls'][i])\"\n                                                               class=\"cursor ml-3\" [checked]=\"type != 'add' && questionEditData?.subQuestions[i]?.editor_type == 3\"\n                                                               type=\"checkbox\" id=\"math_editor_trueOrFalse_passage\">\n                                                        <label class=\"ml-1\" for=\"math_editor_trueOrFalse_passage\">Math Editor</label>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-12 my-2\">\n                                                    <div class=\"row\">\n                                                        <div *ngFor=\"let item of list.get('addMultipleChoice')['controls']; let j=index\" class=\"col-12 form-group\" formArrayName=\"addMultipleChoice\">\n                                                            <div [formGroupName]=\"j\" class=\"input-group inputMenu\" style=\"flex-wrap: nowrap\">\n                                                                <app-tiny-mice (emitEditorValue)=\"getPassageOptionValue($event, questionId, 'chooseRow', j, i, list.controls.addMultipleChoice)\"\n                                                                               [editorPatchValue]=\"type == 'add' ? false : questionEditData?.subQuestions[i]?.options[j]?.options\"\n                                                                               [height]=\"150\"\n                                                                               class=\"flex-fill\"\n                                                                               *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value == 'math'\"></app-tiny-mice>\n                                                                <input *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value == 'text'\"\n                                                                       aria-label=\"Amount (to the nearest dollar)\" class=\"form-control\" formControlName=\"option\" placeholder=\"Option {{j+1}} * \" type=\"text\">\n                                                                <div (click)=\"deleteChoicePassage('deletePassageChoice', i, j)\" class=\"input-group-append cursor\">\n                                            <span class=\"input-group-text\" [ngClass]=\"{'div-disable': selectOptionHeader != 'edit'}\">\n                                                <img class=\"img-fluid\" src=\"assets/images/pdf-icons/Icon material-delete.png\" alt=\"\">\n                                            </span>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"col-md-12\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-9 align-self-center\">\n                                                            <h5 class=\"mb-0 font-weight-bold\">Stems<span class=\"text-danger\">*</span></h5>\n                                                        </div>\n                                                        <div class=\"col-3 mb-2\">\n                                                            <button (click)=\"addChoicePassage('passageAddTableChoose', i)\" class=\"btn-sm btn-primary pull-right\" [hidden]=\"selectOptionHeader != 'edit'\"><i aria-hidden=\"true\" class=\"fa fa-plus-circle mr-1\"></i> Add New Choice</button>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-12 my-2\">\n                                                    <div class=\"row\">\n                                                        <div *ngFor=\"let item of list.get('addMatchTableChoose')['controls']; let j=index\" class=\"col-12 form-group\" formArrayName=\"addMatchTableChoose\">\n                                                            <div [formGroupName]=\"j\" class=\"input-group inputMenu\" style=\"flex-wrap: nowrap\">\n                                                                <app-tiny-mice (emitEditorValue)=\"getPassageOptionValue($event, questionId, 'chooseColumn', j, i, list.controls.addMatchTableChoose)\"\n                                                                               [editorPatchValue]=\"type == 'add' ? false : questionEditData?.subQuestions[i]?.answer[j]\"\n                                                                               [height]=\"150\"\n                                                                               class=\"flex-fill mb-1\"\n                                                                               *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value == 'math'\"\n                                                                               [readonly]=\"selectOptionHeader != 'edit'\"></app-tiny-mice>\n                                                                <input *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value == 'text'\"\n                                                                       aria-label=\"Amount (to the nearest dollar)\" [readonly]=\"selectOptionHeader != 'edit'\"\n                                                                       class=\"form-control\" formControlName=\"option\" placeholder=\"Option *\" type=\"text\">\n                                                                <div (click)=\"deleteChoicePassage('deletePassageMatch', i, j)\" class=\"input-group-append cursor\">\n                                                    <span class=\"input-group-text\" [ngClass]=\"{'div-disable': selectOptionHeader != 'edit'}\">\n                                                          <img class=\"img-fluid\" src=\"assets/images/pdf-icons/Icon material-delete.png\" alt=\"\">\n                                                    </span>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 my-2 table-flexible\">\n                                            <table class=\"table table-bordered text-center\">\n                                                <thead>\n                                                <tr>\n                                                    <th></th>\n                                                    <th *ngFor=\"let item of list.get('addMatchTableChoose')['controls']; let j=index\"\n                                                        [innerHTML]=\"passage['controls'].addQuestionType['controls'][i]['controls'].addMatchTableChoose['controls'][j]['controls']['option'].value | sanitizeHtml\"\n                                                        class=\"{{passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value == 'math' ? 'innerhtml-margin-clear' : ''}}\"></th>\n                                                </tr>\n                                                </thead>\n                                                <tbody>\n                                                <tr *ngFor=\"let item of list.get('addMultipleChoice')['controls']; let j=index\">\n                                                    <td [innerHTML]=\"passage['controls'].addQuestionType['controls'][i]['controls'].addMultipleChoice['controls'][j]['controls']['option'].value | sanitizeHtml\"\n                                                        class=\"{{passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value == 'math' ? 'innerhtml-margin-clear' : ''}}\"></td>\n                                                    <td *ngFor=\"let item of list.get('addMatchTableChoose')['controls']; let k=index\">\n                                                        <input (change)=\"getChoiceAnswerPassage(j, i, k, 'matchTableChooseSingle')\"\n                                                               *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].multiResponse.value == false\"\n                                                               class=\"radio_animated\"\n                                                               id=\"{{i}}passage{{j}}chooseSingle{{k}}\"\n                                                               name=\"{{i}}choose{{j}}pass\" type=\"radio\">\n                                                        <input class=\"cursor\" (change)=\"getChoiceAnswerPassage(j, i, k, 'matchTableChooseMulti')\"\n                                                               id=\"{{i}}passage{{j}}chooseMulti{{k}}\"\n                                                               *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].multiResponse.value == true\"\n                                                               type=\"checkbox\">\n                                                    </td>\n                                                </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <ng-container *ngTemplateOutlet=\"settings; context: { $implicit: passage['controls'].addQuestionType['controls'][i]}\"></ng-container>\n\n                                <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 my-2 d-flex flex-column\" [hidden]=\"selectOptionHeader != 'edit'\">\n                                            <h5><b>Explanation</b></h5>\n                                            <app-tiny-mice [height]=\"450\"\n                                                           [readonly]=\"selectOptionHeader != 'edit'\"\n                                                           [showDropBtn]=\"false\"\n                                                           [showInputBtn]=\"false\"\n                                                           [id]=\"'passageexplaination' + i\"\n                                                           [editorPatchValue]= \"type != 'edit' || questionEditData.subQuestions[i]?.explanation ? questionEditData?.subQuestions[i]?.explanation : false\"\n                                                           (emitEditorValue)=\"getPassageExplanationEditor($event, i)\"></app-tiny-mice>\n                                        </div>\n\n                                        <div class=\"col-12 d-flex flex-column my-2\" [hidden]=\"selectOptionHeader != 'edit'\">\n                                            <div class=\"row mb-2\">\n                                                <div class=\"col-6 align-self-center\">\n                                                    <h5 class=\"mb-0\"><b>Hints</b></h5>\n                                                </div>\n                                                <div class=\"col-6 mb-3\">\n                                                    <button (click)=\"addChoicePassage('passageAddHint', i)\" class=\"btn-sm btn-primary pull-right\">\n                                                        <i aria-hidden=\"true\" class=\"fa fa-plus-circle mr-1\"></i> Add New Hint</button>\n                                                </div>\n                                                <div *ngFor=\"let item of list.get('addHints')['controls']; let j=index\" [hidden]=\"selectOptionHeader != 'edit'\" class=\"col-12 form-group\" formArrayName=\"addHints\">\n                                                    <div [formGroupName]=\"j\" class=\"input-group inputMenu\">\n                                                        <app-tiny-mice [editorPatchValue]=\"type != 'edit' || questionEditData?.subQuestions[i]?.hint[j]?.hint ?\n                                                                        questionEditData?.subQuestions[i]?.hint[j]?.hint : false\"\n                                                                       (emitEditorValue)=\"getPassageHintEditor($event, i, j)\"\n                                                                       [height]=\"150\"\n                                                                       [id]=\"'multiHintChoice'+i + j\"\n                                                                       [readonly]=\"selectOptionHeader != 'edit'\"\n                                                                       class=\"flex-fill mb-1\"></app-tiny-mice>\n                                                        <div (click)=\"deleteChoicePassage('deletePassageHints', i, j)\" *ngIf=\"j != '0'\" class=\"input-group-append cursor\">\n                                                    <span class=\"input-group-text\">\n                                                        <img alt=\"Delete\" class=\"img-fluid\" src=\"assets/images/pdf-icons/Icon material-delete.png\">\n                                                    </span>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div *ngIf=\"selectOptionHeader != 'edit'\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-12 px-0 mt-2\">\n                                        <h4 [innerHTML]=\"questionArray[i] | sanitizeHtml\" class=\"innerhtml-margin-clear\"></h4>\n                                    </div>\n                                </div>\n                                <div class=\"table-flexible\">\n                                    <table class=\"table table-bordered text-center mt-4\">\n                                        <thead>\n                                        <tr *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value == 'text'\">\n                                            <th>Questions</th>\n                                            <th *ngFor=\"let item of list.get('addMatchTableChoose')['controls']; let j=index\">\n                                                {{passage['controls'].addQuestionType['controls'][i]['controls'].addMatchTableChoose['controls'][j]['controls']['option'].value}}</th>\n                                        </tr>\n                                        <tr *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value == 'math'\">\n                                            <th>Questions</th>\n                                            <th *ngFor=\"let item of list.get('addMatchTableChoose')['controls']; let j=index\"\n                                                [innerHTML]=\"passage['controls'].addQuestionType['controls'][i]['controls'].addMatchTableChoose['controls'][j]['controls']['option'].value | sanitizeHtml\"></th>\n                                        </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let item of list.get('addMultipleChoice')['controls']; let j=index\">\n                                                <td *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value == 'text'\">{{passage['controls'].addQuestionType['controls'][i]['controls'].addMultipleChoice['controls'][j]['controls']['option'].value}}</td>\n                                                <td *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value == 'math'\"\n                                                    [innerHTML]=\"passage['controls'].addQuestionType['controls'][i]['controls'].addMultipleChoice['controls'][j]['controls']['option'].value | sanitizeHtml\"></td>\n                                                <td *ngFor=\"let item of list.get('addMatchTableChoose')['controls']; let k=index\">\n                                                    <input *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].multiResponse.value == false\" class=\"radio_animated\" name=\"choose{{j}}\" type=\"radio\">\n                                                    <input *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].multiResponse.value == true\" type=\"checkbox\">\n                                                </td>\n                                            </tr>                                            \n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n<!--                        ////true or false closes/////-->\n\n<!--                        ///// text entry passage code starts here-->\n                        <div *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].selectType.value == 'textEntry'\">\n                            <div [hidden]=\"selectOptionHeader != 'edit'\">\n                                <div class=\"card px-4 pt-3 pb-4 mt-2\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12\">\n                                            <h5 class=\"font-weight-bold\">Question<span class=\"text-danger\">*</span></h5>\n                                            <app-tiny-mice [height]=\"450\"\n                                                           (emitEditorValue)=\"getPassageInputEditorValue($event, i)\"\n                                                           [editorPatchValue]=\"type == 'add' ? false : questionEditData?.subQuestions[i]?.question\"\n                                                           [id]=\"'myEditor-passage'+i\"\n                                                           [showDropBtn]=\"false\" [showInputBtn]=\"true\"></app-tiny-mice>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"card px-4 pt-3 pb-4 mt-3\" *ngIf=\"inputCountPassage != 0\">\n                                    <div class=\"row\">\n                                        <div class=\"col-6 align-self-center\">\n                                            <h5 class=\"font-weight-bold\">Input Field<span class=\"text-danger\">*</span></h5>\n                                        </div>\n\n                                        <div class=\"col-6 pointsSec d-flex align-items-end justify-content-end\">\n                                            <div class=\"checkbox checkbox-primary d-flex align-items-center\">\n                                                <input class=\"cursor ml-3\" formControlName=\"autograde\" type=\"checkbox\" id=\"autograde_input_passage\">\n                                                <label class=\"ml-1\" for=\"autograde_input_passage\">Auto Grade</label>\n                                                <input [disabled]=\"selectOptionHeader != 'edit'\"\n                                                       (change)=\"selectedEditorType($event, 'passageEditor_eng', passage['controls'].addQuestionType['controls'][i])\" class=\"cursor ml-3\"\n                                                       [checked]=\"type != 'add' && questionEditData.editor_type != 1\"\n                                                       type=\"checkbox\" id=\"math_editor_input_passage\">\n                                                <label class=\"ml-1\" for=\"math_editor_input_passage\">Math Editor</label>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-12\">\n                                            <div *ngFor=\"let data of inputArray[i]?.datas; let k=index\" class=\"d-flex flex-row w-100 my-2\">\n                                                <div class=\"placeSelf\">\n                                                    <span>{{k+1}}</span>\n                                                </div>\n                                                <div class=\"w-100\">\n                                                    <input [readonly]=\"selectOptionHeader != 'edit'\"\n                                                           *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value == 'text'\"\n                                                           [(ngModel)]=\"data.options[0].value\" [ngModelOptions]=\"{standalone: true}\"\n                                                           class=\"mt-0 ml-2 form-control w-50\" placeholder=\"Enter the answer {{k+1}}*\">\n                                                    <app-tiny-mice [height]=\"150\" [showDropBtn]=\"false\"\n                                                                   [showInputBtn]=\"false\"\n                                                                   [id]=\"i+'input'+k+'er'+random\"\n                                                                   *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value == 'math'\"\n                                                                   [readonly]=\"selectOptionHeader != 'edit'\"\n                                                                   [editorPatchValue]=\"type == 'add' ? false : data.options[0].value\"\n                                                                   (emitEditorValue)=\"getEditorValue1($event , data)\"></app-tiny-mice>\n                                                </div>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <ng-container *ngTemplateOutlet=\"settings; context: { $implicit: passage['controls'].addQuestionType['controls'][i]}\"></ng-container>\n\n                                <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 d-flex flex-column\" [hidden]=\"selectOptionHeader != 'edit'\">\n                                            <h5 class=\"font-weight-bold\">Explanation</h5>\n                                            <app-tiny-mice [height]=\"450\"\n                                                           [readonly]=\"selectOptionHeader != 'edit'\"\n                                                           [showDropBtn]=\"false\"\n                                                           [showInputBtn]=\"false\"\n                                                           [id]=\"'passageexplaination' + i\"\n                                                           [editorPatchValue]= \"type != 'edit' || questionEditData?.subQuestions[i]?.explanation ? questionEditData?.subQuestions[i]?.explanation : false\"\n                                                           (emitEditorValue)=\"getPassageExplanationEditor($event, i)\"></app-tiny-mice>\n                                        </div>\n\n                                        <div class=\"col-12 d-flex flex-column mt-3\" [hidden]=\"selectOptionHeader != 'edit'\">\n                                            <div class=\"row\">\n                                                <div class=\"col-6 align-self-center\">\n                                                    <h5 class=\"mb-0 font-weight-bold mb-0\">Hint</h5>\n                                                </div>\n                                                <div class=\"col-6 mb-2\">\n                                                    <button (click)=\"addChoicePassage('passageAddHint', i)\" class=\"btn-sm pull-right btn-primary\"><i aria-hidden=\"true\" class=\"fa fa-plus-circle mr-1\"></i> Add New Hint</button>\n                                                </div>\n                                                <div *ngFor=\"let item of list.get('addHints')['controls']; let j=index\" [hidden]=\"selectOptionHeader != 'edit'\" class=\"col-12 form-group\" formArrayName=\"addHints\">\n                                                    <div [formGroupName]=\"j\" class=\"input-group mb-3 inputMenu\">\n                                                        <app-tiny-mice [editorPatchValue]=\"type != 'edit' || questionEditData?.subQuestions[i]?.hint[j]?.hint ?\n                                                                    questionEditData?.subQuestions[i]?.hint[j]?.hint : false\"\n                                                                       (emitEditorValue)=\"getPassageHintEditor($event, i, j)\"\n                                                                       [height]=\"150\"\n                                                                       [id]=\"'multiHintChoice'+i + j\"\n                                                                       [readonly]=\"selectOptionHeader != 'edit'\"\n                                                                       class=\"flex-fill\"></app-tiny-mice>\n                                                        <div (click)=\"deleteChoicePassage('deletePassageHints', i, j)\" *ngIf=\"j != '0'\" class=\"input-group-append cursor\">\n                                                <span class=\"input-group-text\">\n                                                    <img class=\"img-fluid\" src=\"assets/images/pdf-icons/Icon material-delete.png\">\n                                                </span>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div [hidden]=\"selectOptionHeader == 'edit'\">\n                                <div class=\"p-4\">\n                                    <h4 [innerHTML]=\"questionArray1 | sanitizeHtml\"></h4>\n                                </div>\n                                <div *ngFor=\"let data of inputArray[i]?.datas; let j=index\" class=\"d-flex flex-row p-3 div-disable\">\n                                    <div class=\"placeSelf\">\n                                        <span>{{j+1}}.&nbsp;</span>\n                                    </div>\n                                    <div class=\"w-100\" *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value == 'text'\">\n                                        <input class=\"mt-0 ml-2 form-control w-50\" placeholder=\"Enter the answer\" [value]=\"data.options[0]?.value\">\n                                    </div>\n\n                                    <div class=\"w-100\" *ngIf=\"passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value == 'math'\">\n                                        <span [innerHTML]=\"data.options[0]?.value | sanitizeHtml\" class=\"innerhtml-margin-clear\" ></span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n<!--                                                ///// text entry passage code closed here-->\n                        <div *ngIf=\"list['controls'].selectType.value == 'essay'\">\n                            <div [hidden]=\"selectOptionHeader !='edit'\">\n                                <div class=\"card px-4 pt-3 pb-4 mt-2\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12\">\n                                            <h5 class=\"font-weight-bold\">Question<span class=\"text-danger\">*</span></h5>\n                                            <app-tiny-mice (emitEditorValue)=\"getPassageOptionValue($event, questionId, 'question', 0, i, list)\"\n                                                           [editorPatchValue]=\"type == 'add' ? false : questionEditData?.subQuestions[i]?.question\"\n                                                           [height]=\"450\"></app-tiny-mice>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"card px-4 pt-3 pb-4 mt-3\" *ngIf=\"selectOptionHeader == 'edit'\">\n                                    <div class=\"row\">\n                                        <div class=\"col-8\">\n                                            <h5 class=\"font-weight-bold\">Correct Answer<span class=\"text-danger\">*</span></h5>\n                                        </div>\n                                        <div class=\"col-4 mb-2\">\n                                            <div class=\"checkbox checkbox-primary d-flex align-items-center justify-content-end\">\n                                                <input class=\"cursor ml-3\" formControlName=\"autograde\" type=\"checkbox\" id=\"autograde_essay_passage\">\n                                                <label class=\"ml-1\" for=\"autograde_essay_passage\">Auto Grade</label>\n                                                <button *ngIf=\"list.get('repeatAnswerFreeText')['controls'].length < maximumAllowedCount\" class=\"btn btn-outline-primary pull-right ml-3\" (click)=\"addNewCorrectAnswerForFreeText(list.get('repeatAnswerFreeText'))\">\n                                                    <i class=\"fa fa-plus-circle mr-1\"></i>Add ({{list.get('repeatAnswerFreeText')['controls'].length}} / {{maximumAllowedCount}})</button>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-12 {{selectOptionHeader =='edit' ? '' : 'div-disable mt-2'}}\">\n                                            <div class=\"row\">\n                                                <div class=\"col-12 mb-3\" *ngFor=\"let item of list.get('repeatAnswerFreeText')['controls']; let last = last; let k = index\"\n                                                     formArrayName=\"repeatAnswerFreeText\">\n                                                    <div [formGroupName]=\"k\" class=\"mb-3 d-flex\">\n                                                        <div class=\"sub-question-no mt-0 w-4\" style=\"height: 36px !important\">\n                                                            <span>{{list.get('repeatAnswerFreeText')['controls'].length - k}}</span>\n                                                        </div>\n                                                        <div [ngClass]=\"!last && list.get('repeatAnswerFreeText')['controls'].length > 1 ? 'w-93 px-2' : 'w-96 pl-2'\">\n                                                            <app-tiny-mice\n                                                                    (emitEditorValue)=\"multiAnswerFreeText($event, k, list.get('repeatAnswerFreeText')['controls'].length - k, i)\"\n                                                                    [editorPatchValue]=\"type == 'add' ? false : questionEditData.subQuestions[i].answer[list.get('repeatAnswerFreeText')['controls'].length - k - 1]?.correctAnswer ?? ''\"\n                                                                    [height]=\"150\"></app-tiny-mice>\n                                                        </div>\n                                                        <div *ngIf=\"!last && list.get('repeatAnswerFreeText')['controls'].length > 1\" class=\"w-3\">\n                                                            <div class=\"pull-right border p-2 cursor\" (click)=\"deleteCorrectAnswerForFreeText(list.get('repeatAnswerFreeText'), k, list.get('repeatAnswerFreeText')['controls'].length - k, i)\">\n                                                                <img class=\"cursor\" alt=\"\" src=\"assets/images/pdf-icons/delete2.png\" title=\"Delete\">\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <ng-container *ngTemplateOutlet=\"settings; context: { $implicit: passage['controls'].addQuestionType['controls'][i]}\"></ng-container>\n\n                                <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12\" [hidden]=\"selectOptionHeader != 'edit'\">\n                                            <h5 class=\"font-weight-bold\">Explanation</h5>\n                                            <app-tiny-mice [height]=\"450\"\n                                                           [readonly]=\"selectOptionHeader != 'edit'\"\n                                                           [showDropBtn]=\"false\"\n                                                           [showInputBtn]=\"false\"\n                                                           [id]=\"'passageexplaination' + i\"\n                                                           [editorPatchValue]= \"type != 'edit' || questionEditData?.subQuestions[i]?.explanation ? questionEditData?.subQuestions[i]?.explanation : false\"\n                                                           (emitEditorValue)=\"getPassageExplanationEditor($event, i)\"></app-tiny-mice>\n                                        </div>\n\n                                        <div class=\"col-12 mt-3\" [hidden]=\"selectOptionHeader != 'edit'\">\n                                            <div class=\"row\" *ngIf=\"selectOptionHeader == 'edit'\">\n                                                <div class=\"col-6 align-self-center\">\n                                                    <h5 class=\"font-weight-bold mb-0\">Hints</h5>\n                                                </div>\n                                                <div class=\"col-6 mb-3\">\n                                                    <button (click)=\"addChoicePassage('passageAddHint', i)\" class=\"btn-sm btn-primary pull-right\"><i aria-hidden=\"true\" class=\"fa fa-plus-circle mr-1\"></i> Add New Hint</button>\n                                                </div>\n                                            </div>\n                                            <div *ngFor=\"let item of list.get('addHints')['controls']; let j=index\" [hidden]=\"selectOptionHeader != 'edit'\" class=\"form-group\" formArrayName=\"addHints\">\n                                                <div [formGroupName]=\"j\" class=\"input-group inputMenu\">\n                                                    <app-tiny-mice [editorPatchValue]=\"type != 'edit' || questionEditData?.subQuestions[i]?.hint[j]?.hint ?\n                                                                questionEditData?.subQuestions[i]?.hint[j]?.hint : false\"\n                                                                   (emitEditorValue)=\"getPassageHintEditor($event, i, j)\"\n                                                                   [height]=\"150\"\n                                                                   [id]=\"'multiHintChoice'+i + j\"\n                                                                   [readonly]=\"selectOptionHeader != 'edit'\"\n                                                                   class=\"flex-fill mb-1\"></app-tiny-mice>\n                                                    <div (click)=\"deleteChoicePassage('deletePassageHints', i, j)\" *ngIf=\"j != '0'\" class=\"input-group-append cursor\">\n                                                        <span class=\"input-group-text\">\n                                                            <img alt=\"Delete Passage Hint\" class=\"img-fluid\" src=\"assets/images/pdf-icons/Icon material-delete.png\">\n                                                        </span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                </div>\n                            <div *ngIf=\"selectOptionHeader !='edit'\" class=\"row\">\n                                <div class=\"col-md-12 mt-2\">\n                                    <h4 [innerHTML]=\"questionArray[i] | sanitizeHtml\" class=\"innerhtml-margin-clear\"></h4>\n                                </div>\n                                <div class=\"col-md-12 mt-3\">\n                                    <app-tiny-mice [height]=\"150\"></app-tiny-mice>\n                                </div>\n                            </div>\n                        </div>\n<!--                        ///// sort list code starts-->\n<!--                        <div *ngIf=\"this.passage['controls'].addQuestionType['controls'][i]['controls'].selectType.value == 'sortList'\">-->\n<!--                            <div class=\"col-12 mt-2\" [hidden]=\"selectOptionHeader != 'edit'\">-->\n<!--                                <div class=\"row\">-->\n<!--                                    <div class=\"col-12 mt-2\">-->\n<!--                                        <h5>Question</h5>-->\n<!--                                        <app-tiny-mice [height]=\"300\" (emitEditorValue)=\"getPassageOptionValue($event, questionId, 'question', 0, i, list)\"></app-tiny-mice>-->\n<!--                                        &lt;!&ndash;                        <textarea class=\"w-100\" formControlName=\"question\" rows=\"5\"></textarea>&ndash;&gt;-->\n<!--                                    </div>-->\n<!--                                    <div class=\"col-12\">-->\n<!--                                        <h5>Labels</h5>-->\n<!--                                    </div>-->\n<!--                                    <div class=\"col-6\">-->\n<!--                                        <input placeholder=\"Source\" formControlName=\"source\" class=\"form-control inputHeight w=100\">-->\n<!--                                    </div>-->\n<!--                                    <div class=\"col-6\">-->\n<!--                                        <input placeholder=\"Target\" formControlName=\"target\" class=\"form-control inputHeight w=100\">-->\n<!--                                    </div>-->\n<!--                                    <div class=\"col-4 mt-4 mb-3\">-->\n<!--                                        <h5>List</h5>-->\n<!--                                    </div>-->\n<!--                                    <div class=\"col-8 mt-4 mb-3 d-flex justify-content-end\">-->\n<!--                                        <button class=\"btn btn-primary pull-right mr-2\" [disabled]=\"selectOptionHeader != 'edit'\" (click)=\"addChoicePassage('passageSort', i)\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i> Add New Choice</button>-->\n<!--                                        <select class=\"form-control pull-right w-25\" formControlName=\"chooseType\" [ngClass]=\"{'div-disable': selectOptionHeader != 'edit'}\">-->\n<!--                                            <option disabled selected value=\"select\">Select Question Type</option>-->\n<!--                                            <option value=\"text\">Text</option>-->\n<!--                                            <option value=\"math\">Math</option>-->\n<!--                                        </select>-->\n<!--                                    </div>-->\n<!--                                    <div class=\"col-12\" cdkDropList (cdkDropListDropped)=\"droppedPassage($event, i)\">-->\n<!--                                        <div class=\"row\">-->\n<!--                                            <div class=\"col-12 form-group\"  formArrayName=\"addMultipleChoice\" *ngFor=\"let item of list.get('addMultipleChoice')['controls']; let j=index\">-->\n<!--                                                <div class=\"input-group mb-1 inputMenu\" style=\"flex-wrap: nowrap\" cdkDrag [formGroupName]=\"j\">-->\n<!--                                                    <div class=\"input-group-prepend\">-->\n<!--                                                        <span class=\"input-group-text\">-->\n<!--                                                            <img src=\"assets/images/pdf-icons/equal@2x.png\" class=\"img-fluid\">-->\n<!--                                                        </span>-->\n<!--                                                    </div>-->\n<!--                                                    <input *ngIf=\"this.passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value == 'text'\"-->\n<!--                                                           (keyup)=\"getPassageSortValue($event,i, j, 'text')\"-->\n<!--                                                           [readonly]=\"selectOptionHeader != 'edit'\"-->\n<!--                                                           class=\"form-control\" formControlName=\"option\" placeholder=\"item\" type=\"text\">-->\n<!--                                                    <app-tiny-mice [height]=\"150\" class=\"flex-fill\" (emitEditorValue)=\"getPassageSortValue($event,i, j, 'math')\"-->\n<!--                                                                   [readonly]=\"selectOptionHeader != 'edit'\"-->\n<!--                                                                   *ngIf=\"this.passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value == 'math'\" [id]=\"i+'sort'+j\"></app-tiny-mice>-->\n<!--                                                    <div class=\"input-group-append cursor\">-->\n<!--                                                        <span class=\"input-group-text\" [ngClass]=\"{'div-disable': selectOptionHeader != 'edit'}\">-->\n<!--                                                            <img src=\"assets/images/pdf-icons/Icon material-delete.png\" (click)=\"deleteChoicePassage('deletePassageSort', i, j)\" class=\"img-fluid\">-->\n<!--                                                        </span>-->\n<!--                                                    </div>-->\n<!--                                                </div>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n\n<!--                                    <div class=\"col-12 d-flex justify-content-between pointsSec\">-->\n<!--                                        <div class=\"\">-->\n<!--                                            <h5>Set Correct Answers</h5>-->\n<!--                                        </div>-->\n<!--                                        <div class=\"d-flex flex-row align-items-center\">-->\n<!--                                            <label class=\"labelName mr-3\">-->\n<!--                                                <b>Points</b>-->\n<!--                                            </label>-->\n<!--                                            <input  type=\"text\" formControlName=\"points\" [readonly]=\"selectOptionHeader != 'edit'\" (keypress)=\"numberValidate($event)\"  class=\"form-control pointInput\">-->\n\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                    <div class=\"col-12\">-->\n<!--                                        <div class=\"col-12\" cdkDropList (cdkDropListDropped)=\"droppedCorrectPassage($event, i)\">-->\n<!--                                            <div class=\"input-group mb-3 mt-3 inputMenu\" formArrayName=\"addMultipleChoose\" *ngFor=\"let item of list.get('addMultipleChoose')['controls']; let j=index\">-->\n<!--                                                <div class=\"input-group mb-1 inputMenu\" cdkDrag [formGroupName]=\"j\">-->\n<!--                                                    <div class=\"input-group-prepend\">-->\n<!--                                                        <span class=\"input-group-text\">-->\n<!--                                                            <img src=\"assets/images/pdf-icons/equal@2x.png\" class=\"img-fluid\">-->\n<!--                                                        </span>-->\n<!--                                                    </div>-->\n<!--                                                    <input type=\"text\" readonly formControlName=\"selectOption\" placeholder=\"item\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\">-->\n<!--                                                </div>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                    <div class=\"col-12 mt-2 d-flex flex-column\">-->\n<!--                                        <div>-->\n<!--                                            <p>Explanation</p>-->\n<!--                                        </div>-->\n<!--                                        <div>-->\n<!--                                            <input placeholder=\"Enter Sample Answer\" [readonly]=\"selectOptionHeader != 'edit'\" formControlName=\"explanation\" class=\"form-control inputHeight w=100\">-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                    <div class=\"col-12 mt-2 d-flex justify-content-between pointsSec\">-->\n<!--                                        <div class=\"\">-->\n<!--                                            <p>Hints</p>-->\n<!--                                        </div>-->\n<!--                                        <div class=\"d-flex flex-row align-items-center\">-->\n<!--                                            <button class=\"btn btn-primary pull-right\" [hidden]=\"selectOptionHeader != 'edit'\" (click)=\"addChoicePassage('passageAddHint', i)\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i> Add New Hint</button>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                    <div class=\"col-12 mt-2 d-flex flex-column\">-->\n<!--                                        <div class=\"row\">-->\n<!--                                            <div class=\"col-12 form-group\" formArrayName=\"addHints\" *ngFor=\"let item of list.get('addHints')['controls']; let j=index\">-->\n<!--                                                <div class=\"input-group mb-3 inputMenu\" [formGroupName]=\"j\">-->\n<!--                                                    <input placeholder=\"Enter a hint for the problem\" [readonly]=\"selectOptionHeader != 'edit'\" formControlName=\"hint\" class=\"form-control inputHeight w=100\">-->\n<!--                                                    <div class=\"input-group-append cursor\" *ngIf=\"i != '0'\" (click)=\"deleteChoicePassage('deletePassageHints', i, j)\">-->\n<!--                                <span class=\"input-group-text\">-->\n<!--                                    <img src=\"assets/images/pdf-icons/Icon material-delete.png\" class=\"img-fluid\">-->\n<!--                                </span>-->\n<!--                                                    </div>-->\n<!--                                                </div>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                            <div *ngFor=\"let list of  sourcePassageArr; let j=index\" [hidden]=\"selectOptionHeader == 'edit'\">-->\n<!--                                <div class=\"row mt-2\">-->\n\n<!--                                    <div class=\"col-12 text-right\">-->\n<!--                                        <button *ngIf=\"passageShowAnswer == false\"  class=\"btn btn-primary mr-2\" (click)=\"passageShowAnswer = true\">Show Answer</button>-->\n<!--                                        <button *ngIf=\"passageShowAnswer == true\"  class=\"btn btn-primary mr-2\" (click)=\"passageShowAnswer = false\">Hide Answer</button>-->\n<!--                                        <button class=\"btn btn-primary\" (click)=\"checkPassageAnswer()\">Check Answer</button>-->\n<!--                                    </div>-->\n<!--                                    <div class=\"col-12 pl-4 question-align\" [innerHTML]=\"questionValue\">-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                                <div class=\"row mt-2\">-->\n<!--                                    <div class=\"col-6\" cdkDropList>-->\n<!--                                        <h4>{{passage['controls'].addQuestionType['controls'][i]['controls'].source.value}}</h4>-->\n<!--                                        <div class=\"row\">-->\n<!--                                            &lt;!&ndash;                                    <div class=\"col-12 form-group\" formArrayName=\"matchSortSource\" *ngFor=\"let list of matchSort.get('matchSortSource')['controls']; let i=index\">&ndash;&gt;-->\n<!--                                            &lt;!&ndash;                                        <div class=\"input-group mb-3 mt-3 inputMenu\" cdkDrag [formGroupName]=\"i\" [cdkDragDisabled]=\"true\">&ndash;&gt;-->\n<!--                                            &lt;!&ndash;                                            <div class=\"input-group-prepend\">&ndash;&gt;-->\n<!--                                            &lt;!&ndash;                                                <span class=\"input-group-text\">&ndash;&gt;-->\n<!--                                            &lt;!&ndash;                                                    <img src=\"assets/images/pdf-icons/equal@2x.png\" class=\"img-fluid\">&ndash;&gt;-->\n<!--                                            &lt;!&ndash;                                                </span>&ndash;&gt;-->\n<!--                                            &lt;!&ndash;                                            </div>&ndash;&gt;-->\n<!--                                            &lt;!&ndash;                                                <input type=\"text\" readonly formControlName=\"option\" placeholder=\"item\" class=\"form-contol w-75\" aria-label=\"Amount (to the nearest dollar)\">&ndash;&gt;-->\n<!--                                            &lt;!&ndash;                                        </div>&ndash;&gt;-->\n<!--                                            &lt;!&ndash;                                    </div>&ndash;&gt;-->\n<!--                                            <div class=\"col-12 form-group\" *ngFor=\"let list of  sourcePassageArr; let i=index\">-->\n<!--                                                <div class=\"input-group mb-3 mt-3 inputMenu\" cdkDrag  [cdkDragDisabled]=\"true\">-->\n<!--                                                    <div class=\"input-group-prepend\">-->\n<!--                                                <span class=\"input-group-text\">-->\n<!--                                                    <img src=\"assets/images/pdf-icons/equal@2x.png\" class=\"img-fluid\">-->\n<!--                                                </span>-->\n<!--                                                    </div>-->\n<!--                                                    <input type=\"text\" readonly [value]=\"list.value\" placeholder=\"item\" class=\"form-contol w-75\" aria-label=\"Amount (to the nearest dollar)\">-->\n<!--                                                </div>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                    <div class=\"col-6\" cdkDropList (cdkDropListDropped)=\"droppedTarget($event)\">-->\n<!--                                        <h4>{{passage['controls'].addQuestionType['controls'][i]['controls'].target.value}}</h4>-->\n<!--                                        <div class=\"row\">-->\n<!--                                            &lt;!&ndash;                                    <div class=\"col-12 form-group\" formArrayName=\"matchSortTarget\" *ngFor=\"let list of matchSort.get('matchSortTarget')['controls']; let i=index\">&ndash;&gt;-->\n<!--                                            &lt;!&ndash;                                        <div class=\"input-group mb-3 mt-3 inputMenu\" cdkDrag [formGroupName]=\"i\">&ndash;&gt;-->\n<!--                                            &lt;!&ndash;                                            <div class=\"input-group-prepend\">&ndash;&gt;-->\n<!--                                            &lt;!&ndash;                                                <span class=\"input-group-text\">&ndash;&gt;-->\n<!--                                            &lt;!&ndash;                                                    <img src=\"assets/images/pdf-icons/equal@2x.png\" class=\"img-fluid\">&ndash;&gt;-->\n<!--                                            &lt;!&ndash;                                                </span>&ndash;&gt;-->\n<!--                                            &lt;!&ndash;                                            </div>&ndash;&gt;-->\n<!--                                            &lt;!&ndash;                                            <input type=\"text\" readonly formControlName=\"selectOption\" placeholder=\"item\" class=\"form-contol w-75\" aria-label=\"Amount (to the nearest dollar)\">&ndash;&gt;-->\n<!--                                            &lt;!&ndash;                                        </div>&ndash;&gt;-->\n<!--                                            &lt;!&ndash;                                    </div>&ndash;&gt;-->\n<!--                                            <div class=\"col-12 form-group\"  *ngFor=\"let list of targetPassageArr; let i=index\">-->\n<!--                                                <div class=\"input-group mb-3 mt-3 inputMenu\" cdkDrag>-->\n<!--                                                    <div class=\"input-group-prepend\">-->\n<!--                                                <span class=\"input-group-text\">-->\n<!--                                                    <img src=\"assets/images/pdf-icons/equal@2x.png\" class=\"img-fluid\">-->\n<!--                                                </span>-->\n<!--                                                    </div>-->\n<!--                                                    <input type=\"text\" [ngStyle]=\"{'border': list.valid == '1' ? '2px solid green':  list.valid == '2' ? '2px solid red' : ''}\" readonly [value]=\"list.value\" placeholder=\"item\" class=\"form-contol w-75\" aria-label=\"Amount (to the nearest dollar)\">-->\n<!--                                                </div>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                    <div class=\"col-12 mt-2\" *ngIf=\"passageShowAnswer == true\">-->\n<!--                                        <div class=\"row\">-->\n<!--                                            <div class=\"col-12\">-->\n<!--                                                <h6><b>Correct Answer</b></h6>-->\n<!--                                            </div>-->\n<!--                                            <div class=\"col-3 mt-2\" *ngFor=\"let list of targetPassageArr1; let i=index\">-->\n<!--                                                <p class=\"p-1\"><span class=\"multichoice-option2 mr-2\">{{((i+1) + 9).toString(36).toUpperCase()}}</span><span>{{list.value}}</span></p>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n<!--    //////graphingg open-->\n\n<!--    <div *ngIf=\"questionId == '40' || questionId == '41'\" class=\"row\">-->\n    <div *ngIf=\"questionId == '40' || questionId == '41'\" class=\"row\">\n        <div class=\"col-12\">\n            <h3 class=\"letter\">Writing >Graphing</h3>\n            <hr class=\"letter\">\n        </div>\n        <div class=\"col-12\">\n            <form [formGroup]=\"graphForm\">\n                <div class=\"card px-4 pt-3 pb-4 mt-3\" [hidden]=\"selectOptionHeader != 'edit'\">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <div class=\"row px-2 mb-2 align-items-center\">\n                                <div class=\"pl-1 pr-2\" style=\"width: 5% !important;\">\n                                    <h5 class=\"mb-0 question-no\">{{qnsNo}}</h5>\n                                </div>\n                                <h5 class=\"font-weight-bold mb-0\">Question<span class=\"text-danger\">&nbsp;*</span></h5>\n                            </div>\n                            <app-tiny-mice (emitEditorValue)=\"getGraphQuestionValue($event, questionId)\"  [editorPatchValue]=\"type == 'add' ? false : questionEditData.question\" [height]=\"150\" [id]=\"'highlightEditot'\"\n                                           [showDropBtn]=\"false\"\n                                           [showInputBtn]=\"false\"></app-tiny-mice>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                    <div class=\"row\">\n                        <div class=\"col-12 my-2\" *ngIf=\"selectOptionHeader == 'edit'\">\n                            <h5 class=\"font-weight-bold\">Graphing Area {{markType}}</h5>\n                        </div>\n                        <div class=\"col-12 p-4\" *ngIf=\"graphQuestionEditor && selectOptionHeader != 'edit'\">\n                            <h4 [innerHTML]=\"graphQuestionEditor.content | sanitizeHtml\"></h4>\n                        </div>\n                        <div class=\"col-12 my-2 d-flex justify-content-center {{selectOptionHeader != 'edit' ? 'div-disable' : ''}}\"  *ngIf=\"type != 'edit'\">\n                            <app-graph-component (emitItem)=\"getEmitedValue($event)\"\n                                                 (valueChange)=\"getGraphValue($event)\"\n                                                 [editMode]=\"true\"\n                                                 [editPatchValue]=\"false\"\n                                                 [graphId]=\"'graph1'\"\n                                                 [saveAndDuplicate]=\"saveAndDuplicate\"\n                                                 [questionType]=\"questionId\"></app-graph-component>\n                        </div>\n                        <div class=\"col-12 my-2 d-flex justify-content-center {{selectOptionHeader != 'edit' ? 'div-disable' : ''}}\"  *ngIf=\"type == 'edit' && graphBoardValue\">\n                            <app-graph-component (emitItem)=\"getEmitedValue($event)\"\n                                                 (valueChange)=\"getGraphValue($event)\"\n                                                 [editMode]=\"true\"\n                                                 [saveAndDuplicate]=\"saveAndDuplicate\"\n                                                 [editPatchValue]=\"parseVal(questionEditData.answer[0].correctAnswer)\"\n                                                 [graphId]=\"'graph2'\"\n                                                 [questionType]=\"questionId\"></app-graph-component>\n                        </div>\n                        <div class=\"col-12 my-2 {{selectOptionHeader != 'edit' ? 'div-disable' : ''}}\">\n                            <app-tiny-mice (emitEditorValue)=\"getGraphEditorAnswerValue($event)\"\n                                           [editorPatchValue]=\"type == 'add' ? false : questionEditData.editor_answer\"\n                                           [height]=\"150\" [id]=\"'editorGraphPatch'\"\n                                           [showDropBtn]=\"false\" [showInputBtn]=\"false\"></app-tiny-mice>\n                        </div>\n                    </div>\n                </div>\n\n                <div *ngIf=\"selectOptionHeader == 'edit'\">\n                    <ng-container *ngTemplateOutlet=\"settings; context: { $implicit: graphForm}\"></ng-container>\n                </div>\n\n            </form>\n        </div>\n<!--        <div class=\"card px-4 pt-3 pb-4 mt-3\" *ngIf=\"selectOptionHeader !='edit'\">-->\n<!--            <div class=\"row\">-->\n<!--                <div class=\"col-12 p-4\" *ngIf=\"graphQuestionEditor\">-->\n<!--                    <h4 [innerHTML]=\"graphQuestionEditor.content | sanitizeHtml\"></h4>-->\n<!--                </div>-->\n<!--                    <div  *ngIf=\"graphBoardValue\" class=\"col-12 mt-0 d-flex justify-content-center mb-3\">-->\n<!--    &lt;!&ndash;                    <app-graph-component [graphId]=\"'grpjprive'\"  [editMode]=\"false\" [editPatchValue]=\"graphBoardValue\" [questionType]=\"questionId\" (emitItem)=\"getEmitedPrevValue($event)\" (valueChange)=\"getGraphPrevewValue($event)\"></app-graph-component>&ndash;&gt;-->\n<!--                        <app-graph-component [graphId]=\"'grpjprive'\"  [editMode]=\"true\" [editPatchValue]=\"false\" [questionType]=\"questionId\" (emitItem)=\"getEmitedPrevValue($event)\" (valueChange)=\"getGraphPrevewValue($event)\"></app-graph-component>-->\n<!--                    </div>-->\n<!--                <div class=\"col-md-12 mt-3 mb-3\">-->\n<!--                    <app-tiny-mice [editorPatchValue]=\"false\"-->\n<!--                                   [height]=\"150\" [id]=\"'editorGraphPatchPre'\"-->\n<!--                                   [showDropBtn]=\"false\" [showInputBtn]=\"false\"></app-tiny-mice>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--        </div>-->\n    </div>\n\n<!--    ///-->\n<!--    // graphing closed-->\n<!--    //// highlight page code -->\n    <div *ngIf=\"questionId == '28'\" class=\"row\">\n        <div class=\"col-12\">\n            <h3 class=\"letter\"> Highlight > Sentence and Response </h3>\n        </div>\n        <div class=\"col-12 mt-2\">\n            <form [formGroup]=\"highlight\">\n                <div class=\"row\" [hidden]=\"selectOptionHeader !='edit'\">\n                    <div class=\"col-12\">\n                        <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                            <div class=\"row\">\n                                <div class=\"col-12 mt-2\">\n                                    <div class=\"row px-2 mb-2 align-items-center\">\n                                        <div class=\"pl-1 pr-2\" style=\"width: 5% !important;\">\n                                            <h5 class=\"mb-0 question-no\">{{qnsNo}}</h5>\n                                        </div>\n                                        <h5 class=\"font-weight-bold mb-0\">Question<span class=\"text-danger\">&nbsp;*</span></h5>\n                                    </div>\n                                    <app-tiny-mice (emitEditorValue)=\"getEditorContextValue($event, questionId, 'editorContext')\"  [editorPatchValue]=\"type == 'add' ? false : questionEditData.question\"\n                                                   [height]=\"150\" [id]=\"'highlightEditot'\"\n                                                   [showDropBtn]=\"false\"\n                                                   [showInputBtn]=\"false\"></app-tiny-mice>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-12\">\n                        <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                            <div class=\"row\">\n                                <div class=\"col-12 mt-2\">\n                                    <h5>Correct Answer<span class=\"text-danger\">*</span></h5>\n                                    <app-tiny-mice (emitEditorValue)=\"getEditorContextValue1($event, questionId, 'answer')\" [editorPatchValue]=\"type == 'add' ? false : questionEditData.options[0].options\"\n                                                   [height]=\"150\"  [hideBackcolr]=\"true\" [id]=\"'highlightEditor2'\"\n                                                   [showDropBtn]=\"false\"\n                                                   [showInputBtn]=\"false\"></app-tiny-mice>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-12\">\n                        <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                            <div class=\"row\">\n                                <div class=\"col-12 mt-2\">\n                                    <h5>Correct Answer With Highlight Option</h5>\n                                    <app-tiny-mice (emitEditorValue)=\"getEditorContextValue2($event, questionId, 'highlight')\" [editorPatchValue]=\"type == 'add' ? false : questionEditData.answer[0].correctAnswer\"\n                                                   [height]=\"150\" [id]=\"'highlightEditor3'\"\n                                                   [showDropBtn]=\"false\"\n                                                   [showInputBtn]=\"false\"></app-tiny-mice>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-12\">\n                        <div class=\"card px-4 pt-3 pb-4 mt-3\">\n                            <div class=\"row\">\n                                <div class=\"col-12 mt-2 mb-3 px-0 d-flex justify-content-end\">\n                                    <div class=\"mt-2 ml-2 col-2 d-flex align-content-center\">\n                                        <label class=\"labelName mb-0 mt-2\"><b>Points</b></label>\n                                        <input (keypress)=\"numberValidate($event)\" [readonly]=\"selectOptionHeader !='edit'\" class=\"form-control ml-2 pointInput\" formControlName=\"points\" maxlength=\"3\" type=\"text\">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card px-4 pt-3 pb-4 mt-3\" [hidden]=\"selectOptionHeader =='edit'\">\n                    <div class=\"row\">\n                        <div class=\"col-12 p-4\">\n                            <h4 [innerHTML]=\"answertValue | sanitizeHtml\"></h4>\n                        </div>\n                            <div class=\"col-12 p-4\">\n                                <h4 [innerHTML]=\"answerKeyValue | sanitizeHtml\"></h4>\n                            </div>\n                    </div>\n                </div> \n            </form>\n        </div>\n    </div>\n\n    <div class=\"card px-4 pt-3 pb-4 mt-3\">\n        <div class=\"row\">\n            <div class=\"col-12\" *ngIf=\"questionId != '24' && questionId != '55'\" [hidden]=\"selectOptionHeader != 'edit'\">\n                <h5 class=\"font-weight-bold\">Explanation</h5>\n                <app-tiny-mice [height]=\"450\"\n                               [readonly]=\"selectOptionHeader != 'edit'\"\n                               [showDropBtn]=\"false\"\n                               [showInputBtn]=\"false\"\n                               [id]=\"'explaination'\"\n                               [editorPatchValue]= \"type == 'add' ? false : questionEditData.explanation\"\n                               (emitEditorValue)=\"getExplanationEditor($event)\"></app-tiny-mice>\n            </div>\n\n            <div class=\"col-12 mt-3\" *ngIf=\"questionId != '24' && questionId != '55'\" [hidden]=\"selectOptionHeader != 'edit'\">\n                <h5 class=\"font-weight-bold\">Resource</h5>\n                <app-tiny-mice [height]=\"150\"\n                               [readonly]=\"selectOptionHeader != 'edit'\"\n                               [showDropBtn]=\"false\"\n                               [showInputBtn]=\"false\"\n                               [id]=\"'resource'\"\n                               [editorPatchValue]= \"type == 'add' ? false : questionEditData?.resource\"\n                               (emitEditorValue)=\"getResourceEditor($event)\"></app-tiny-mice>\n            </div>\n    \n            <div class=\"col-12 mt-3\" *ngIf=\"selectOptionHeader == 'edit' && questionId != '24' && questionId != '55'\">\n                <div class=\"row mb-2\">\n                    <div class=\"col-6 align-self-center\">\n                        <h5 class=\"mb-0\"><b>Hints</b></h5>\n                    </div>\n                    <div class=\"col-6\">\n                        <button class=\"btn-sm btn-primary pull-right\" (click)=\"addHintsArray()\"><i aria-hidden=\"true\" class=\"fa fa-plus-circle mr-1\"></i> Add New Hint</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 d-flex flex-column\" *ngIf=\"questionId != '24' && questionId != '55'\" [hidden]=\"selectOptionHeader != 'edit'\">\n                    <div class=\"row\">\n                        <div class=\"col-12 form-group\" [hidden]=\"selectOptionHeader != 'edit'\"\n                            *ngFor=\"let list of hintArray; let i=index\">\n                            <div class=\"input-group mb-3 inputMenu\">\n                                <app-tiny-mice [editorPatchValue]=\"list.hint == '' || type == 'add' ? false : list.hint\"\n                                               (emitEditorValue)=\"getHintEditor($event, i)\"\n                                               [height]=\"150\"\n                                               [id]=\"'multiHint'+i\"\n                                               [readonly]=\"selectOptionHeader != 'edit'\"\n                                               class=\"flex-fill\"></app-tiny-mice>\n                                <div class=\"input-group-append cursor\" *ngIf=\"i != '0'\">\n                                    <span class=\"input-group-text\" (click)=\"removeHintArray(i)\">\n                                        <img alt=\"Delete Hint\" src=\"assets/images/pdf-icons/Icon material-delete.png\" class=\"img-fluid\">\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n    \n            <div class=\"col-12 text-right\">\n                <button *ngIf=\"!showPreview\" class=\"btn btn-outline-info mr-2\" (click)=\"selectHeader('edit'); showPreview = !showPreview\"><i class=\"fa fa-long-arrow-left fa-1x\" aria-hidden=\"true\"></i> Back</button>\n                <button *ngIf=\"showPreview\" class=\"btn btn-outline-danger mr-2\" (click)=\"cancelAction()\" ><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Cancel</button>\n                <button *ngIf=\"showPreview\" class=\"btn btn-outline-primary mr-2\" (click)=\"selectHeader(commonPreview); showPreview = !showPreview\"><i aria-hidden=\"true\" class=\"fa fa-eye\"></i> Preview</button>\n                <button (click)=\"saveQuestions(commonNameForQuestionId, 'close')\" class=\"btn btn-outline-success mr-2\" *ngIf=\"type == 'add' && showPreview && questionId == '55'\">\n                    <i class=\"fa fa-save mr-1\" aria-hidden=\"true\"></i>Save & Close\n                </button>\n                <div class=\"btn-group dropup mr-2\" *ngIf=\"type == 'add' && showPreview && questionId != '55'\">\n                    <button class=\"btn btn-outline-success dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-save\"\n                                                                                                      aria-hidden=\"true\"></i>\n                        Save\n                    </button>\n                    <div class=\"dropdown-menu\">\n                        <a class=\"dropdown-item dropdown-link\" (click)=\"saveQuestions(commonNameForQuestionId, 'list')\">Save\n                            &\n                            New</a>\n                        <a class=\"dropdown-item dropdown-link\" (click)=\"saveQuestions(commonNameForQuestionId, 'same')\">Save\n                            &\n                            Duplicate</a>\n                        <a class=\"dropdown-item dropdown-link\" (click)=\"saveQuestions(commonNameForQuestionId, 'close')\">Save\n                            &\n                            Close</a>\n                    </div>\n                </div>\n                <button *ngIf=\"type == 'edit' && showPreview\" class=\"btn btn-outline-success mr-2\" (click)=\"checkPassageType(commonNameForQuestionId, 'close')\">\n                    <i class=\"fa fa-save mr-2\" aria-hidden=\"true\"></i>Update\n                </button>\n            </div>\n        </div>\n    </div>\n\n    <!--    //// highlight page code end-->\n    </div>\n</div>\n\n<ng-template #settings let-row>\n    <div [formGroup]=\"row\">\n        <div class=\"card px-4 pt-3 pb-4 mt-4\">\n            <div class=\"row\">\n                <div class=\"col-12 my-2\">\n                    <h5 class=\"font-weight-bold mb-0\">Question Classification</h5>\n                </div>\n                <div class=\"col-12 my-2\">\n                    <div class=\"row\">\n                        <div class=\"col-6\">\n                            <label><b>Subject</b></label>\n                            <ng-select\n                                    formControlName=\"subject_id\"\n                                    [placeholder]=\"'Select Subject'\"\n                                    [bindValue]=\"'subject_id'\"\n                                    [bindLabel]=\"'subject_name'\"\n                                    (change)=\"subjectChanged($event, row, 'questionTopic')\"\n                                    [items]=\"subjectData\">\n                            </ng-select>\n                        </div>\n\n                        <div class=\"col-12 my-2\">\n                            <div class=\"row\">\n                                <div class=\"col-{{row.controls.question_topic_id.value ? '3' : '6'}}\">\n                                    <label><b>Topic</b></label>\n                                    <ng-select\n                                            [placeholder]=\"'Select Topic'\"\n                                            [bindValue]=\"'question_topic_id'\"\n                                            [bindLabel]=\"'question_topic'\"\n                                            formControlName=\"question_topic_id\"\n                                            (change)=\"selectChanged($event, row, 'questionSubTopic')\"\n                                            [items]=\"questionTopicListData\">\n                                    </ng-select>\n                                </div>\n\n                                <div class=\"col-3\" *ngIf=\"row.controls.question_topic_id.value\">\n                                    <label><b>Sub Topic</b></label>\n                                    <ng-select\n                                            [placeholder]=\"'Select Sub Topic'\"\n                                            [bindValue]=\"'sub_topic_id'\"\n                                            [bindLabel]=\"'sub_topic'\"\n                                            formControlName=\"question_sub_topic_id\"\n                                            [items]=\"subTopicListData\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-12 my-2\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                    <label class=\"mb-0\"><b>Skill</b></label>\n                                    <mat-form-field class=\"col-12 px-0\">\n                                        <mat-chip-grid #skillList>\n                                            <mat-chip-row [ngClass]=\"{'error-chip': item.invalid}\"\n                                                          *ngFor=\"let item of enteredSkillList; let i=index\"\n                                                          [removable]=\"true\"\n                                                          (removed)=\"removeSkill(i)\">{{item}}\n                                                <mat-icon matChipRemove>cancel</mat-icon>\n                                            </mat-chip-row>\n                                            <input #skillInput style=\"font-size: 14px; height: 40px !important;\" placeholder=\"Enter Skill\" [matChipInputFor]=\"skillList\" (input)=\"serachSkill($event)\"\n                                                   [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"true\"\n                                                   (matChipInputTokenEnd)=\"onChipInput($event)\" (keydown.enter)=\"addSkill($event)\"/>\n                                        </mat-chip-grid>\n                                    </mat-form-field>\n\n                                    <div class=\"row m-0\" *ngIf=\"totalSkillList.length != 0\">\n                                        <div class=\"col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 px-0\">\n                                            <div class=\"drug-list\">\n                                                <div class=\"mb-3 showChips defaultChips cursor\"> <a (click)=\"addSkill(data, 'select')\"\n                                                        *ngFor=\"let data of totalSkillList; let i = index\"\n                                                        class=\"pointer\"> <span>{{data.skill}}</span> </a> </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-12 my-2\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                    <label><b>Standard</b></label>\n                                    <ng-select\n                                            [placeholder]=\"'Select Standard'\"\n                                            formControlName=\"question_standard\"\n                                            [bindValue]=\"'id'\"\n                                            [bindLabel]=\"'question_standard'\"\n                                            [items]=\"standardListData\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-12 my-2\">\n                            <div class=\"row\">\n                                <div class=\"col-4\">\n                                    <label><b>Difficulty Level</b></label>\n                                    <select class=\"form-control\" formControlName=\"level\">\n                                        <option value=\"1\">Easy</option>\n                                        <option value=\"2\">Medium</option>\n                                        <option value=\"3\">Difficult</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-4\">\n                                    <label class=\"labelName\">\n                                        <b>Points</b>\n                                    </label>\n                                    <input (keypress)=\"numberValidate($event)\" class=\"form-control pointInput\" formControlName=\"points\" type=\"text\">\n                                </div>\n                                <div class=\"col-4\">\n                                    <label><b>Predicted Solving Time</b></label>\n                                    <div class=\"col-5 px-0\">\n                                        <div class=\"d-inline-flex align-items-center\">\n                                            <input maxlength=\"3\" class=\"form-control\" placeholder=\"MM\" formControlName=\"minutes\"\n                                                   (keypress)=\"validationService.numberOnlyValidate($event)\">\n                                            <span class=\"font-weight-bold mx-2\">:</span>\n                                            <input maxlength=\"2\" class=\"form-control\" placeholder=\"SS\" formControlName=\"seconds\"\n                                                   (keypress)=\"validationService.numberOnlyValidate($event)\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #deletePassageQuestion let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">Delete Question</h4>\n    </div>\n    <div class=\"modal-body d-flex justify-content-right\">\n        <div class=\"col-12 text-center\">\n            <h5>Are you sure want to delete this question ?</h5>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"deletePassage(passageDeleteData, passageDeleteid)\" class=\"btn btn-primary\" type=\"button\">Confirm</button>\n        <button class=\"btn btn-outline-primary\" (click)=\"closeQuestion()\">Cancel</button>\n    </div>\n</ng-template>\n\n<ng-template #passageAdd let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title w-100 letter\" id=\"modal-basic-title202\"><b class=\"text-capitalize\">{{passageType}} Passage</b>\n        </h4>\n        <i class=\"fa fa-close fa-lg mt-1 cursor color-primary\" aria-hidden=\"true\"\n            title=\"Close\" style=\"float: right;\" (click)=\"close()\"></i>\n    </div>\n\n    <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 mt-3\">\n                    <form [formGroup]=\"passageForm\">\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom0\" class=\"col-xl-2 col-md-3 ml-4 mt-2\"\n                                   style=\"font-size:15px\"><span style=\"color:red;\">*</span>\n                                Passage Title</label>\n                            <div class=\"col-xl-9 col-md-10\">\n                                <input class=\"form-control\" formControlName=\"title\" id=\"validationCustom0\" type=\"text\"\n                                       placeholder=\"Title\" required=\"\">\n                                <em class=\"error\"\n                                    *ngIf=\"!passageForm.get('title').valid && (passageForm.get('title').dirty || passageForm.get('title').touched)\">Title\n                                    is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom1\" class=\"col-xl-2 col-md-3 ml-4 mt-2\"\n                                   style=\"font-size:15px\"><span style=\"color:red;\">*</span>\n                                Passage</label>\n                            <div class=\"col-xl-9 col-md-10\">\n                                <app-tiny-mice (emitEditorValue)=\"getPassageAddEditorValue($event)\"\n                                               [height]=\"300\" [readonly]=\"false\"\n                                               [id]=\"'passageId'\" [showDropBtn]=\"false\" [showInputBtn]=\"false\">\n                                </app-tiny-mice>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"col-12 d-flex justify-content-end\">\n            <button class=\"btn cancel\" (click)=\"formPassageValue()\" type=\"button\">Reset</button>\n            <button class=\"btn btn-primary ml-2\" (click)=\"passageCREDService(passageType)\" type=\"button\">{{passageType == 'add' ? 'Submit' : 'Update'}}</button>\n        </div>\n    </div>\n</ng-template>\n\n\n", styles: ["$primary-color: #8F008A;\n\n.inputMenu{\n\n  //padding: 30px;\n\n\n  input{\n    padding: 16px;\n  }\n  .input-group-text{\n    background: white;\n  }\n  img{\n    position: relative;\n    height: 16px;\n    width: auto;\n  }\n\n  .pointsSec{\n    .labelName{\n      font-size: 20px;\n    }\n    .pointInput{\n      height: 3rem !important;\n    }\n  }\n}\nimg {\n  cursor: default !important;\n}\n\n.inputMenu1{\n  input{\n    padding: 20px;\n  }\n  .input-group-text{\n    background: white;\n  }\n  img{\n    position: relative;\n    height: 28px;\n  }\n\n  .pointsSec{\n    .labelName{\n      font-size: 20px;\n    }\n    .pointInput{\n      height: 52px !important;\n    }\n  }\n}\n\n.inputHeight{\n  height: 43px;\n}\n.multiSelectCard{\n  border: 2px solid $primary-color;\n  background: white;\n  padding: 18px;\n  border-radius: 4px;\n}\n\n.checkbox3{\n  zoom:1.5;\n\n}\n\n.correct-answer{\n  color: #7F3486;\n  background: white;\n  border-style: ridge;\n  border-width: 1px;\n  border-color: #7F3486;\n  padding: 6px;\n}\n.correct-answer-selected{\n  color: white;\n  background: #7F3486;\n  border-style: ridge;\n  border-width: 1px;\n  border-color: #7F3486;\n  padding: 6px;\n}\n.wrong-answer{\n  color: red;\n  background: white;\n  border-style: ridge;\n  border-width: 1px;\n  border-color: #7F3486;\n  padding: 6px;\n}\n\n.cursor {\n  cursor: pointer !important;\n}\n\n.showChips span {\n  border-radius: 50px;\n  padding: 5px 10px;\n  margin-right: 3px;\n  margin-bottom: 5px;\n  float: left;\n\n}\n\n.defaultChips span {\n  background-color: #95989A;\n  color: #fff;\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i0.ChangeDetectorRef }, { type: i2.ClassService }, { type: i3.ContentService }, { type: i4.ConfigurationService }, { type: i5.DomSanitizer }, { type: i6.FormBuilder }, { type: i7.CreatorService }, { type: i8.ToastrService }, { type: i9.Router }, { type: i10.ValidationService }, { type: i9.ActivatedRoute }, { type: i11.NgbModal }, { type: i12.ContentdetailService }], { childGraph: [{
            type: ViewChild,
            args: [GraphComponentComponent]
        }], deletePassageQuestion: [{
            type: ViewChild,
            args: ['deletePassageQuestion']
        }], passageAdd: [{
            type: ViewChild,
            args: ['passageAdd']
        }], skillInput: [{
            type: ViewChild,
            args: ['skillInput']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(QuestionPageComponent, { className: "QuestionPageComponent" }); })();
//# sourceMappingURL=question-page.component.js.map