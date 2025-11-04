import { Component, EventEmitter, Input, Output } from '@angular/core';
import { dateOptions, timeZone } from '../../../shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "../../../shared/service/auth.service";
import * as i4 from "../../../shared/service/creator.service";
import * as i5 from "../../../shared/service/class.service";
import * as i6 from "@angular/router";
import * as i7 from "ngx-toastr";
import * as i8 from "@ng-bootstrap/ng-bootstrap";
import * as i9 from "@nodro7/angular-mydatepicker";
import * as i10 from "@ng-select/ng-select";
import * as i11 from "@angular/material/chips";
import * as i12 from "@angular/material/form-field";
import * as i13 from "@angular/material/icon";
import * as i14 from "../treeview-contentfolder/treeview-contentfolder.component";
import * as i15 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = () => [];
function ConfirmContentAssignComponent_div_6_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1, "Content Folder");
    i0.ɵɵelementEnd();
} }
function ConfirmContentAssignComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 12)(2, "label", 13);
    i0.ɵɵtext(3, "Assign Resource For");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 12)(5, "select", 14);
    i0.ɵɵlistener("change", function ConfirmContentAssignComponent_div_6_Template_select_change_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.typeSelection()); });
    i0.ɵɵelementStart(6, "option", 15);
    i0.ɵɵtext(7, "Select type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "option", 16);
    i0.ɵɵtext(9, "Class");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, ConfirmContentAssignComponent_div_6_option_10_Template, 2, 0, "option", 17);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngIf", ctx_r1.contentAssignedForm != "classRoom");
} }
function ConfirmContentAssignComponent_div_7_mat_chip_row_6_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 25);
    i0.ɵɵtext(1, "cancel");
    i0.ɵɵelementEnd();
} }
function ConfirmContentAssignComponent_div_7_mat_chip_row_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip-row", 23);
    i0.ɵɵlistener("removed", function ConfirmContentAssignComponent_div_7_mat_chip_row_6_Template_mat_chip_row_removed_0_listener() { const ctx_r3 = i0.ɵɵrestoreView(_r3); const item_r5 = ctx_r3.$implicit; const i_r6 = ctx_r3.index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.removeSelectedMultiContent(item_r5, i_r6)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, ConfirmContentAssignComponent_div_7_mat_chip_row_6_mat_icon_2_Template, 2, 0, "mat-icon", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", item_r5.name, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.multiContentId.length > 1);
} }
function ConfirmContentAssignComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "label", 19);
    i0.ɵɵtext(2, "Selected Content");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-form-field", 20)(4, "mat-chip-grid", null, 0);
    i0.ɵɵtemplate(6, ConfirmContentAssignComponent_div_7_mat_chip_row_6_Template, 3, 2, "mat-chip-row", 21);
    i0.ɵɵelement(7, "input", 22);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const chipList_r7 = i0.ɵɵreference(5);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r1.multiContentId);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matChipInputFor", chipList_r7)("matChipInputAddOnBlur", true);
} }
function ConfirmContentAssignComponent_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelement(1, "input", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("value", ctx_r1.classData[0] == null ? null : ctx_r1.classData[0].class_name);
} }
function ConfirmContentAssignComponent_div_8_div_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = ctx.item;
    i0.ɵɵattribute("title", item_r9.class_name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r9.class_name);
} }
function ConfirmContentAssignComponent_div_8_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30)(1, "ng-select", 31);
    i0.ɵɵlistener("change", function ConfirmContentAssignComponent_div_8_div_5_Template_ng_select_change_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.updateClassName()); })("remove", function ConfirmContentAssignComponent_div_8_div_5_Template_ng_select_remove_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectStudent()); })("close", function ConfirmContentAssignComponent_div_8_div_5_Template_ng_select_close_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectStudent()); })("clear", function ConfirmContentAssignComponent_div_8_div_5_Template_ng_select_clear_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.clearFormArray()); });
    i0.ɵɵtemplate(2, ConfirmContentAssignComponent_div_8_div_5_ng_template_2_Template, 2, 2, "ng-template", 32);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.classListData)("multiple", true)("closeOnSelect", false);
    i0.ɵɵattribute("title", ctx_r1.selectedClassName);
} }
function ConfirmContentAssignComponent_div_8_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33)(1, "ng-select", 34);
    i0.ɵɵlistener("change", function ConfirmContentAssignComponent_div_8_div_6_Template_ng_select_change_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.teacherFilter($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.teacherListData);
} }
function ConfirmContentAssignComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 12)(2, "label", 13);
    i0.ɵɵtext(3, "Class");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, ConfirmContentAssignComponent_div_8_div_4_Template, 2, 1, "div", 26)(5, ConfirmContentAssignComponent_div_8_div_5_Template, 3, 4, "div", 27)(6, ConfirmContentAssignComponent_div_8_div_6_Template, 2, 1, "div", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.contentAssignedForm == "class");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showClassRelatedField && ctx_r1.assignForm.controls.typeSelection.value == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showClassRelatedField && ctx_r1.assignForm.controls.typeSelection.value == "1");
} }
function ConfirmContentAssignComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 12)(2, "label", 13);
    i0.ɵɵtext(3, "Topics");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 12);
    i0.ɵɵelement(5, "ng-select", 35);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("items", ctx_r1.topicsData);
} }
function ConfirmContentAssignComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 12)(2, "label", 13);
    i0.ɵɵtext(3, "Content Folder");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 36);
    i0.ɵɵelement(5, "app-treeview-contentfolder", 37);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("type", "add")("selectedbatch", i0.ɵɵpureFunction0(4, _c0))("treeviewHeight", 200)("calledForm", "confirmPopUp");
} }
function ConfirmContentAssignComponent_div_11_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵelement(1, "ng-select", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.studentData);
} }
function ConfirmContentAssignComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 38)(2, "label", 13);
    i0.ɵɵtext(3, "Selected Students");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 39)(5, "input", 40);
    i0.ɵɵlistener("change", function ConfirmContentAssignComponent_div_11_Template_input_change_5_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showStudentList = !ctx_r1.showStudentList); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "label", 41);
    i0.ɵɵtext(7, " All Students in selected class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 42);
    i0.ɵɵlistener("change", function ConfirmContentAssignComponent_div_11_Template_input_change_8_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showStudentList = !ctx_r1.showStudentList); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "label", 43);
    i0.ɵɵtext(10, " Specific Students");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(11, ConfirmContentAssignComponent_div_11_div_11_Template, 2, 1, "div", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngIf", ctx_r1.showStudentList);
} }
function ConfirmContentAssignComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 46)(2, "div", 47);
    i0.ɵɵelement(3, "input", 48);
    i0.ɵɵelementStart(4, "label", 49);
    i0.ɵɵtext(5, "Download Content");
    i0.ɵɵelementEnd()()()();
} }
function ConfirmContentAssignComponent_div_13_select_5_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1, "Real-Time Grading");
    i0.ɵɵelementEnd();
} }
function ConfirmContentAssignComponent_div_13_select_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "select", 53)(1, "option", 15);
    i0.ɵɵtext(2, "Select Response type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "option", 54);
    i0.ɵɵtext(4, "Instructor Graded");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "option", 16);
    i0.ɵɵtext(6, "Auto Graded");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, ConfirmContentAssignComponent_div_13_select_5_option_7_Template, 2, 0, "option", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.contentFormat == "3" || ctx_r1.multiContentId.length != 0);
} }
function ConfirmContentAssignComponent_div_13_select_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "select", 53)(1, "option", 15);
    i0.ɵɵtext(2, "Select Response type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "option", 54);
    i0.ɵɵtext(4, "Teacher Review Only");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "option", 16);
    i0.ɵɵtext(6, "Automatic Feedback");
    i0.ɵɵelementEnd()();
} }
function ConfirmContentAssignComponent_div_13_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Responses will be reviewed and graded manually. Scores will be released after the final submission");
    i0.ɵɵelementEnd();
} }
function ConfirmContentAssignComponent_div_13_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Responses will be graded automatically, but scores and feedback will only be released after the final submission");
    i0.ɵɵelementEnd();
} }
function ConfirmContentAssignComponent_div_13_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Responses will be graded automatically and scores will be available immediately after each submission");
    i0.ɵɵelementEnd();
} }
function ConfirmContentAssignComponent_div_13_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Essay will be manually reviewed by the teacher to provide feedback and scores. System generated feedback is not available");
    i0.ɵɵelementEnd();
} }
function ConfirmContentAssignComponent_div_13_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Student can request for Automatic system generated feedback and score. Teacher can provide final feedback and score after the final submission");
    i0.ɵɵelementEnd();
} }
function ConfirmContentAssignComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 12)(2, "label", 13);
    i0.ɵɵtext(3, "Release Score");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 12);
    i0.ɵɵtemplate(5, ConfirmContentAssignComponent_div_13_select_5_Template, 8, 1, "select", 50)(6, ConfirmContentAssignComponent_div_13_select_6_Template, 7, 0, "select", 50);
    i0.ɵɵelementStart(7, "span", 51);
    i0.ɵɵtext(8, "(Note: ");
    i0.ɵɵtemplate(9, ConfirmContentAssignComponent_div_13_span_9_Template, 2, 0, "span", 52)(10, ConfirmContentAssignComponent_div_13_span_10_Template, 2, 0, "span", 52)(11, ConfirmContentAssignComponent_div_13_span_11_Template, 2, 0, "span", 52)(12, ConfirmContentAssignComponent_div_13_span_12_Template, 2, 0, "span", 52)(13, ConfirmContentAssignComponent_div_13_span_13_Template, 2, 0, "span", 52);
    i0.ɵɵtext(14, ")");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.isEssay != "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isEssay == "1");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.assignForm.controls.releaseScore.value == "0" && ctx_r1.isEssay == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.assignForm.controls.releaseScore.value == "1" && ctx_r1.isEssay == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.assignForm.controls.releaseScore.value == "2" && ctx_r1.isEssay == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.assignForm.controls.releaseScore.value == "0" && ctx_r1.isEssay == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.assignForm.controls.releaseScore.value == "1" && ctx_r1.isEssay == "1");
} }
function ConfirmContentAssignComponent_div_14_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 55)(1, "div", 47);
    i0.ɵɵelement(2, "input", 61);
    i0.ɵɵelementStart(3, "label", 62);
    i0.ɵɵtext(4, "Show Timer");
    i0.ɵɵelementEnd()()();
} }
function ConfirmContentAssignComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 55)(2, "div", 47);
    i0.ɵɵelement(3, "input", 56);
    i0.ɵɵelementStart(4, "label", 57);
    i0.ɵɵtext(5, "Workspace");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 55)(7, "div", 47);
    i0.ɵɵelement(8, "input", 58);
    i0.ɵɵelementStart(9, "label", 59);
    i0.ɵɵtext(10, "FeedBack");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(11, ConfirmContentAssignComponent_div_14_div_11_Template, 5, 0, "div", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngIf", ctx_r1.isEssay == "1");
} }
function ConfirmContentAssignComponent_div_15_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 84)(1, "button", 9);
    i0.ɵɵlistener("click", function ConfirmContentAssignComponent_div_15_div_1_div_21_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r13); const list_r14 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.applyToAll(list_r14)); });
    i0.ɵɵtext(2, "Apply To All");
    i0.ɵɵelementEnd()();
} }
function ConfirmContentAssignComponent_div_15_div_1_em_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 85);
    i0.ɵɵtext(1, " StartTime is invalid ");
    i0.ɵɵelementEnd();
} }
function ConfirmContentAssignComponent_div_15_div_1_div_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 86);
    i0.ɵɵtext(1, " Select valid Time Period ");
    i0.ɵɵelementEnd();
} }
function ConfirmContentAssignComponent_div_15_div_1_em_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 85);
    i0.ɵɵtext(1, " EndTime is invalid ");
    i0.ɵɵelementEnd();
} }
function ConfirmContentAssignComponent_div_15_div_1_div_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 86);
    i0.ɵɵtext(1, " Select valid Time Period ");
    i0.ɵɵelementEnd();
} }
function ConfirmContentAssignComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 64)(1, "div", 65)(2, "div", 66)(3, "div", 67)(4, "div", 68)(5, "span", 69);
    i0.ɵɵtext(6, "Class Name: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 13);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 70)(10, "span", 69);
    i0.ɵɵtext(11, "Class Start Date: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span", 71);
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "customDateFormat");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 70)(16, "span", 69);
    i0.ɵɵtext(17, "Class End Date: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "span", 13);
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "customDateFormat");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(21, ConfirmContentAssignComponent_div_15_div_1_div_21_Template, 3, 0, "div", 72);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 46)(23, "div", 73)(24, "label", 74);
    i0.ɵɵtext(25, "Start Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "input", 75, 1);
    i0.ɵɵlistener("dateChanged", function ConfirmContentAssignComponent_div_15_div_1_Template_input_dateChanged_26_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onDateChanged($event)); })("click", function ConfirmContentAssignComponent_div_15_div_1_Template_input_click_26_listener() { i0.ɵɵrestoreView(_r12); const dp_r15 = i0.ɵɵreference(27); return i0.ɵɵresetView(dp_r15.toggleCalendar()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "div", 46)(29, "div", 73)(30, "label", 76);
    i0.ɵɵtext(31, "Start Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "div", 77);
    i0.ɵɵelement(33, "ngb-timepicker", 78);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(34, ConfirmContentAssignComponent_div_15_div_1_em_34_Template, 2, 0, "em", 79)(35, ConfirmContentAssignComponent_div_15_div_1_div_35_Template, 2, 0, "div", 80);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "div", 46)(37, "div", 73)(38, "label", 81);
    i0.ɵɵtext(39, "End Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "input", 82, 2);
    i0.ɵɵlistener("dateChanged", function ConfirmContentAssignComponent_div_15_div_1_Template_input_dateChanged_40_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onDateChanged1($event)); })("click", function ConfirmContentAssignComponent_div_15_div_1_Template_input_click_40_listener() { i0.ɵɵrestoreView(_r12); const dp1_r16 = i0.ɵɵreference(41); return i0.ɵɵresetView(dp1_r16.toggleCalendar()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(42, "div", 46)(43, "div", 73)(44, "label", 76);
    i0.ɵɵtext(45, "End Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "div", 77);
    i0.ɵɵelement(47, "ngb-timepicker", 83);
    i0.ɵɵtemplate(48, ConfirmContentAssignComponent_div_15_div_1_em_48_Template, 2, 0, "em", 79)(49, ConfirmContentAssignComponent_div_15_div_1_div_49_Template, 2, 0, "div", 80);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const list_r14 = ctx.$implicit;
    const i_r17 = ctx.index;
    const first_r18 = ctx.first;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("col-md-12 mb-2 ", first_r18 ? "" : "mt-1", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", i_r17);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(list_r14["controls"].class_name.value);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(14, 18, list_r14.get("class_startDate").value));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(20, 20, list_r14.get("class_endDate").value));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", first_r18 && ctx_r1.assignForm.get("dateRanges")["controls"].length > 1);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("options", ctx_r1.myDpOptions2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("meridian", ctx_r1.meridian)("spinners", ctx_r1.spinner);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.assignForm.get("startTime").invalid && (ctx_r1.assignForm.get("startTime").dirty || ctx_r1.assignForm.get("startTime").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.checkTimeDifference(list_r14));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("options", ctx_r1.myDpOptions1);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("meridian", ctx_r1.meridian)("spinners", ctx_r1.spinner);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.assignForm.get("endTime").invalid && (ctx_r1.assignForm.get("endTime").dirty || ctx_r1.assignForm.get("endTime").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.checkTimeDifference(list_r14));
} }
function ConfirmContentAssignComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, ConfirmContentAssignComponent_div_15_div_1_Template, 50, 22, "div", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.assignForm.get("dateRanges")["controls"]);
} }
function ConfirmContentAssignComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 87);
    i0.ɵɵlistener("click", function ConfirmContentAssignComponent_button_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitAssign("1")); });
    i0.ɵɵtext(1, "Submit");
    i0.ɵɵelementEnd();
} }
export class ConfirmContentAssignComponent {
    constructor(formBuilder, datePipe, auth, creatorService, classService, router, toastr) {
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.auth = auth;
        this.creatorService = creatorService;
        this.classService = classService;
        this.router = router;
        this.toastr = toastr;
        this.classData = [];
        this.isEssay = '0';
        this.contentDetails = {};
        this.multiContentId = [];
        this.closePopUp = new EventEmitter();
        this.setDate = new Date().toLocaleString('en-US', { timeZone: timeZone.location });
        this.dateValidation = true;
        this.showClassRelatedField = false;
        this.showContentFolderRelatedField = false;
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getMonth() + 1,
                day: new Date(this.setDate).getDate() != 1 ? new Date(this.setDate).getDate() - 1 : -1,
            },
        };
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: this.myDpOptions.disableUntil.year,
                month: this.myDpOptions.disableUntil.month,
                day: this.myDpOptions.disableUntil.day
            },
        };
        this.myDpOptions2 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: this.myDpOptions.disableUntil.year,
                month: this.myDpOptions.disableUntil.month,
                day: this.myDpOptions.disableUntil.day
            },
        };
        this.studentData = [];
        this.choosedData = [];
        this.meridian = true;
        this.spinner = false;
        this.contentAssignedForm = '';
        this.assignType = '1';
        this.classListData = [];
        this.classDataSample = [];
        this.teacherListData = [];
        this.contentFolderListData = [];
        this.releaseGrade = '';
        this.contentType = '1';
        this.checkQuestion = '0';
        this.allowScore = false;
        this.contentFormat = '1';
        this.topicsData = [];
        this.settingList = [];
        this.downloadContentAvailable = false;
        this.selectedClassName = '';
        this.model = { isRange: false, singleDate: { jsDate: new Date() } };
        this.contentAssignedForm = this.auth.getSessionData('assignedForm');
        this.assignForm = this.formBuilder.group({
            class: [''],
            radio: ['1'],
            downloadcontent: [''],
            releaseScore: ['0'],
            startDate: [''],
            endDate: [''],
            startTime: [''],
            endTime: [''],
            specificstudent: [''],
            typeSelection: [this.contentAssignedForm == 'classRoom' ? '1' : 'n/a'],
            contentFolder: [null],
            classSelect: [[]],
            teacherSelect: [null],
            topicSelect: [null],
            workspace: false,
            showTimer: false,
            feedback: false,
            dateRanges: this.formBuilder.array([])
        });
        this.settingList = JSON.parse(this.auth.getSessionData('settingList')) ?? [];
        console.log(this.settingList, 'settingList');
        this.showStudentList = false;
    }
    ngOnInit() {
        if (this.contentAssignedForm == 'class') {
            this.assignType = '1';
            this.showClassRelatedField = true;
            this.showContentFolderRelatedField = false;
            this.liststudent([this.classData[0].class_id]);
            this.topicsList([this.classData[0].class_id]);
            this.addClassDate();
            this.assignForm.controls.releaseScore.patchValue(this.isEssay == '1' ? '1' : '0');
            this.assignForm.controls.classSelect.patchValue(this.classData[0].class_name ? [this.classData[0].class_id] : []);
            this.patchValue();
        }
        else if (this.contentAssignedForm == 'content-Folder') {
            this.assignType = '2';
            this.contentFolderList();
            this.showContentFolderRelatedField = true;
            this.showClassRelatedField = false;
        }
        else {
            this.classData = [];
            this.classList();
            this.contentFolderList();
            this.assignForm.controls.releaseScore.patchValue(this.isEssay == '1' ? '1' : '0');
            const stObject = { hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00') };
            this.assignForm.controls.startTime.patchValue(stObject);
            const etObject = { hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00') };
            this.assignForm.controls.endTime.patchValue(etObject);
            if (this.contentAssignedForm == 'classRoom') {
                setTimeout(() => {
                    this.typeSelection();
                }, 0);
            }
        }
        this.teacherList();
        if (this.multiContentId.length == 0) {
            this.contentType = this.contentDetails.content_type;
            this.releaseGrade = this.contentDetails.allow_autograde;
            this.checkQuestion = this.contentDetails.without_question;
            this.contentFormat = this.contentDetails.content_format;
            this.downloadContentAvailable = true;
            this.allowScore = this.releaseGrade == '1' && this.contentType != '1';
        }
        else {
            this.downloadContentAvailable = this.multiContentId.some(code => code.download == '1');
            this.allowScore = this.settingList[2]?.value == 1 ?? true;
        }
    }
    get dateRanges() {
        return this.assignForm.get('dateRanges');
    }
    addDatePicker(classData = { class_id: '', class_name: '', start_date: '', end_date: '' }) {
        const stObject = { hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00') };
        const etObject = { hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00') };
        return this.formBuilder.group({
            startDate: [null],
            endDate: [null],
            startTime: [stObject],
            endTime: [etObject],
            class_startDate: [classData.start_date],
            class_endDate: [classData.end_date],
            class_id: [classData.class_id],
            class_name: [classData.class_name]
        });
    }
    removeSelectedMultiContent(data, index) {
        this.multiContentId.splice(index, 1);
    }
    addClassDate(classData = { class_id: '', class_name: '', start_date: '', end_date: '' }) {
        this.dateRanges.push(this.addDatePicker(classData));
    }
    removeDatePicker(index) {
        this.dateRanges.removeAt(index);
    }
    onDateChanged(event) {
        this.myDpOptions1 = {};
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: event.singleDate.date.year,
                month: event.singleDate.date.month,
                day: event.singleDate.date.day - 1
            },
        };
    }
    onDateChanged1(event) {
        this.myDpOptions.disableSince = event.date;
    }
    topicsList(classID) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: classID,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        this.classService.topicList(data).subscribe((successData) => {
            if (successData.IsSuccess) {
                this.topicsData = successData.ResponseObject;
            }
        }, (error) => {
            console.log(error, 'error_topicList');
        });
    }
    checkTimeDifference(formControl) {
        if (formControl.value.startDate && formControl.value.endDate) {
            if (formControl.value.startDate.singleDate.jsDate && formControl.value.endDate.singleDate.jsDate) {
                const startDate = this.datePipe.transform(formControl.value.startDate.singleDate.jsDate, 'yyyy-MM-dd');
                const endDate = this.datePipe.transform(formControl.value.endDate.singleDate.jsDate, 'yyyy-MM-dd');
                if (formControl.value.startTime && formControl.value.endTime) {
                    const startTime = parseInt(formControl.value.startTime.hour);
                    const startTimeHour = parseInt(formControl.value.startTime.minute);
                    const endTime = parseInt(formControl.value.endTime.hour);
                    const endTimeHour = parseInt(formControl.value.endTime.minute);
                    const totalStartTimeMins = (startTime * 60) + startTimeHour;
                    const totalendTimeHour = (endTime * 60) + endTimeHour;
                    if (startDate == endDate) {
                        return totalStartTimeMins >= totalendTimeHour;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    typeSelection() {
        const selectBox = document.getElementById('selectBox');
        const selectedValue = selectBox.options[selectBox.selectedIndex].value;
        console.log(selectedValue, 'selected');
        if (selectedValue == 1) {
            this.showContentFolderRelatedField = false;
            this.showClassRelatedField = true;
            this.assignType = '1';
        }
        else if (selectedValue == 2) {
            this.assignForm.controls.radio.patchValue('1');
            this.clearFormArray();
            this.showContentFolderRelatedField = true;
            this.showClassRelatedField = false;
            this.assignType = '2';
            this.startdate = '';
            this.endDate = '';
            this.assignForm.controls.classSelect.patchValue([]);
            this.assignForm.controls.notes.patchValue('');
            const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
            const dropped = dr1.split('-');
            const droppedObject = {
                isRange: false,
                singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
                dateRange: null
            };
            this.assignForm.controls.startDate.patchValue(droppedObject);
        }
        this.assignForm.controls.workspace.patchValue(false);
        this.assignForm.controls.feedback.patchValue(false);
        this.allowScore = this.multiContentId.length == 0 ? this.releaseGrade == '1' && this.contentType != '1' :
            this.settingList[2]?.value == 1 ?? true;
    }
    clearFormArray() {
        this.dateRanges.clear();
    }
    applyToAll(data) {
        console.log(data, 'data');
        this.assignForm.get('dateRanges').value.forEach((control, index) => {
            const formControlName = this.assignForm['controls'].dateRanges['controls'][index]['controls'];
            if (index != 0) {
                console.log('function');
                formControlName.startDate.patchValue(data.value.startDate);
                formControlName.endDate.patchValue(data.value.endDate);
                formControlName.startTime.patchValue(data.value.startTime);
                formControlName.endTime.patchValue(data.value.endTime);
            }
        });
    }
    updateClassName() {
        this.selectedClassName = '';
        const classID = this.assignForm.controls.classSelect.value;
        this.classData.forEach((items) => {
            if (classID.some((data => data == items.class_id))) {
                this.selectedClassName = this.selectedClassName == '' ? items.class_name :
                    this.selectedClassName + ', ' + items.class_name;
            }
        });
    }
    selectStudent() {
        const classID = this.assignForm.controls.classSelect.value;
        console.log(classID, 'classID');
        const selectedClass = [];
        this.classListData.forEach((items) => {
            if (classID.some((data => data == items.class_id))) {
                selectedClass.push(items);
            }
        });
        if (classID.length != 0) {
            this.topicsList(classID);
        }
        else {
            this.assignForm.controls.batch.patchValue(null);
        }
        console.log(selectedClass, 'selectedClass');
        selectedClass.forEach((item) => {
            const classIds = this.assignForm.get('dateRanges').value.map(control => control.class_id);
            if (!classIds.includes(item.class_id)) {
                this.addClassDate(item);
                this.assignForm.controls.specificstudent.patchValue([]);
                // this.classbatchid = selectedClass[0].batch_id;
            }
        });
        this.assignForm.get('dateRanges').value.forEach((control, index) => {
            const classId = control.class_id;
            const existsInEvent = selectedClass.some(item => item.class_id === classId);
            const formControlName = this.assignForm['controls'].dateRanges['controls'][index]['controls'];
            if (!existsInEvent) {
                this.removeDatePicker(index);
            }
            selectedClass.forEach((items) => {
                if (items.class_id == classId) {
                    if (items.start_date != '0000-00-00') {
                        const sd = items.end_date.split('-');
                        const sdObject = {
                            isRange: false,
                            singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) },
                            dateRange: null
                        };
                        const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
                        const dropped = dr1.split('-');
                        const droppedObject = {
                            isRange: false,
                            singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
                            dateRange: null
                        };
                        formControlName.startDate.patchValue(droppedObject);
                        this.myDpOptions2 = {};
                        this.myDpOptions2 = {
                            dateRange: false,
                            dateFormat: dateOptions.pickerFormat,
                            firstDayOfWeek: 'su',
                            disableUntil: {
                                year: this.myDpOptions.disableUntil.year,
                                month: this.myDpOptions.disableUntil.month,
                                day: this.myDpOptions.disableUntil.day
                            }
                        };
                        formControlName.class_startDate.patchValue(items.start_date);
                    }
                    else {
                        const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
                        const dropped = dr1.split('-');
                        const droppedObject = {
                            isRange: false,
                            singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
                            dateRange: null
                        };
                        formControlName.startDate.patchValue(droppedObject);
                    }
                    if (items.end_date != '0000-00-00') {
                        const sd = items.end_date.split('-');
                        const sdObject = {
                            isRange: false,
                            singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) },
                            dateRange: null
                        };
                        this.myDpOptions1 = {};
                        this.myDpOptions1 = {
                            dateRange: false,
                            dateFormat: dateOptions.pickerFormat,
                            firstDayOfWeek: 'su',
                            disableUntil: {
                                year: this.myDpOptions.disableUntil.year,
                                month: this.myDpOptions.disableUntil.month,
                                day: this.myDpOptions.disableUntil.day
                            }
                        };
                        formControlName.class_endDate.patchValue(items.end_date);
                    }
                    else {
                        formControlName.endDate.patchValue(null);
                    }
                }
            });
        });
        const classIds = selectedClass.map(control => control.class_id);
        if (classIds.length != 0) {
            this.liststudent(classIds);
        }
    }
    // selectStudent(event) {
    //     console.log(event, 'get ev');
    //     if (event != undefined) {
    //         this.classData = [event];
    //         this.assignForm.controls.specificstudent.patchValue([]);
    //         // this.classbatchid = event.batch_id;
    //         if (event.start_date != '0000-00-00') {
    //             const sd = event.end_date.split('-');
    //             const sdObject: IMyDateModel = {
    //                 isRange: false,
    //                 singleDate: {jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2]))},
    //                 dateRange: null
    //             };
    //             const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
    //             const dropped = dr1.split('-');
    //             const droppedObject: IMyDateModel = {
    //                 isRange: false,
    //                 singleDate: {jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2]))},
    //                 dateRange: null
    //             };
    //             this.assignForm.controls.startDate.patchValue(droppedObject);
    //             this.myDpOptions2 = {};
    //             this.myDpOptions2 = {
    //                 dateRange: false,
    //                 dateFormat: dateOptions.pickerFormat,
    //                 firstDayOfWeek: 'su',
    //                 disableUntil: {
    //                     year: this.myDpOptions.disableUntil.year,
    //                     month: this.myDpOptions.disableUntil.month,
    //                     day: this.myDpOptions.disableUntil.day
    //                 }
    //             };
    //
    //             this.startdate = event.start_date;
    //         } else {
    //             const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
    //             const dropped = dr1.split('-');
    //             const droppedObject: IMyDateModel = {
    //                 isRange: false,
    //                 singleDate: {jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2]))},
    //                 dateRange: null
    //             };
    //             this.assignForm.controls.startDate.patchValue(droppedObject);
    //         }
    //         if (event.end_date != '0000-00-00') {
    //             const sd = event.end_date.split('-');
    //             const sdObject: IMyDateModel = {
    //                 isRange: false,
    //                 singleDate: {jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2]))},
    //                 dateRange: null
    //             };
    //             // this.linkform.controls.endDate.patchValue(sdObject);
    //             this.myDpOptions1 = {};
    //             this.myDpOptions1 = {
    //                 dateRange: false,
    //                 dateFormat: dateOptions.pickerFormat,
    //                 firstDayOfWeek: 'su',
    //                 disableUntil: {
    //                     year: this.myDpOptions.disableUntil.year,
    //                     month: this.myDpOptions.disableUntil.month,
    //                     day: this.myDpOptions.disableUntil.day
    //                 }
    //             };
    //             this.endDate = event.end_date;
    //         } else {
    //             this.assignForm.controls.endDate.patchValue(null);
    //         }
    //         const stObject = {hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00')};
    //         this.assignForm.controls.startTime.patchValue(stObject);
    //         const etObject = {hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00')};
    //         this.assignForm.controls.endTime.patchValue(etObject);
    //         // this.liststudent(event.class_id);
    //     } else {
    //         this.assignForm.controls.endDate.patchValue(null);
    //         this.assignForm.controls.specificstudent.patchValue([]);
    //         this.studentData = [];
    //         this.classData = [];
    //         this.startdate = '';
    //         this.endDate = '';
    //     }
    // }
    teacherFilter(event) {
        console.log(event);
        this.assignForm.controls.classSelect.patchValue([]);
        this.assignForm.controls.specificstudent.patchValue([]);
        this.studentData = [];
        this.assignForm.controls.endDate.patchValue(null);
        if (event != undefined) {
            this.classListData = this.classDataSample.filter((val) => {
                const teacher_id = val.teacher_id.split(',');
                return teacher_id.includes(event.teacher_id);
            });
        }
        else {
            this.classListData = this.classDataSample;
        }
        console.log(this.classListData, 'classListData');
        console.log(this.classDataSample, 'classDataSample');
    }
    classList() {
        const data = {
            platform: 'web',
            type: '5',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0'
        };
        this.classService.classesList(data).subscribe((successData) => {
            this.classListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_classLst');
        });
    }
    classListSuccess(successData) {
        if (successData.IsSuccess) {
            this.classListData = successData.ResponseObject;
            this.classDataSample = successData.ResponseObject;
        }
    }
    liststudent(classId) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: classId
        };
        this.creatorService.classList(data).subscribe((successData) => {
            this.studentListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_studentList');
        });
    }
    studentListSuccess(successData) {
        if (successData.IsSuccess) {
            this.studentData = successData.ResponseObject;
        }
    }
    teacherList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.classService.individualTeacherList(data).subscribe((successData) => {
            this.teacherListSuccess(successData);
        }, (error) => {
            console.log(error, 'error');
        });
    }
    teacherListSuccess(successData) {
        if (successData.IsSuccess) {
            this.teacherListData = successData.ResponseObject;
        }
    }
    contentFolderList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: '2'
        };
        this.classService.batchList(data).subscribe((successData) => {
            this.contentFolderListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_batchData');
        });
    }
    contentFolderListSuccess(successData) {
        if (successData.IsSuccess) {
            this.contentFolderListData = successData.ResponseObject;
        }
    }
    dateValidation1() {
        if (this.assignForm.controls.startDate.value != null && this.assignForm.controls.endDate.value != null && this.assignForm.controls.startDate.value != '' && this.assignForm.controls.endDate.value != '') {
            const startdate = this.datePipe.transform(this.assignForm.controls.startDate.value.singleDate.jsDate, 'yyyy-MM-dd');
            const st = startdate.split('-');
            const endDate = this.datePipe.transform(this.assignForm.controls.endDate.value.singleDate.jsDate, 'yyyy-MM-dd');
            const et = endDate.split('-');
            if (st[0] == et[0]) {
                if (st[1] == et[1]) {
                    this.dateValidation = st[2] <= et[2];
                }
                else {
                    this.dateValidation = st[1] <= et[1];
                }
            }
            else {
                this.dateValidation = true;
            }
        }
        else {
            this.dateValidation = true;
        }
    }
    submitAssign(type) {
        // this.dateValidation1();
        const allstudent = this.assignForm.controls.radio.value;
        const typeSelection = this.assignForm.controls.typeSelection.value;
        let batchId = '';
        let classId = '';
        const assignedForm = this.auth.getSessionData('assignedForm');
        if (assignedForm == 'class') {
            if (this.auth.getSessionData('batchassign') == '1' || this.auth.getSessionData('batchassign') == '3') {
                batchId = this.classData[0].batch_id;
                classId = this.classData[0].class_id;
            }
            else if (this.auth.getSessionData('batchassign') == '2') {
                batchId = this.assignForm.controls.contentFolder.value;
                classId = '';
            }
        }
        else if (assignedForm == 'content-Folder') {
            batchId = this.assignForm.controls.contentFolder.value;
            classId = '';
        }
        else {
            if (typeSelection == '1') {
                batchId = this.classData.length != 0 ? this.classData[0].batch_id : '';
                classId = this.assignForm.controls.classSelect.value.length != 0 ? this.assignForm.controls.classSelect.value.length : '';
            }
            else {
                const batchValue = JSON.parse(this.auth.getSessionData('selectedbatchId'));
                batchId = batchValue ? (batchValue.length == 0 ? '' : batchValue) : '';
                classId = '';
            }
        }
        if (this.multiContentId.length == 0) {
            this.multiContentId.push({
                content_id: this.contentDetails.content_id
            });
        }
        const allStudentValue = allstudent == '1' || type == '2' || typeSelection == '2' ? '1' : '0';
        const selectedStudentId = allstudent == '1' || type == '2' || typeSelection == '2' ? '' : this.assignForm.controls.specificstudent.value == '' ? [] : this.assignForm.controls.specificstudent.value;
        if (classId != '' || batchId != '') {
            if ((allStudentValue == '0' && this.studentData.length != 0) || allStudentValue == '1') {
                if ((allStudentValue == '0' && selectedStudentId != '' && selectedStudentId != null) || allStudentValue == '1') {
                    if (this.dateValidation == true) {
                        let classDetails = [];
                        if (this.assignType == '1') {
                            this.multiContentId.forEach((content) => {
                                this.assignForm.get('dateRanges').value.forEach((control) => {
                                    classDetails.push({
                                        content_id: content.content_id,
                                        class_id: control.class_id,
                                        start_date: control.startDate ? this.datePipe.transform(control.startDate.singleDate.jsDate, 'yyyy-MM-dd') : '',
                                        end_date: control.endDate ? this.datePipe.transform(control.endDate.singleDate.jsDate, 'yyyy-MM-dd') : '',
                                        start_time: control.startTime ? control.startTime : '',
                                        end_time: control.endTime ? control.endTime : '',
                                        all_student: allStudentValue,
                                        student_id: selectedStudentId,
                                        batch_id: '',
                                        auto_review: this.assignForm.controls.releaseScore.value,
                                        notes: '',
                                        download: this.assignForm.controls.downloadcontent.value ? '1' : '0',
                                        allow_feedback: this.assignForm.controls.showTimer.value ? '1' : '0',
                                        show_timer: this.assignForm.controls.feedback.value ? '1' : '0',
                                        allow_workspace: this.assignForm.controls.workspace.value ? '1' : '0',
                                        topic_id: this.assignForm.controls.classSelect.value.length <= 1 &&
                                            this.assignForm.controls.topicSelect.value ? this.assignForm.controls.topicSelect.value : ''
                                    });
                                });
                            });
                        }
                        else {
                            classDetails = [{
                                    content_id: this.contentDetails.content_id,
                                    class_id: this.classData[0]?.class_id,
                                    start_date: '',
                                    end_date: '',
                                    start_time: '',
                                    end_time: '',
                                    all_student: allStudentValue,
                                    student_id: selectedStudentId,
                                    batch_id: '',
                                    auto_review: this.assignForm.controls.releaseScore.value,
                                    notes: '',
                                    download: this.assignForm.controls.downloadcontent.value ? '1' : '0',
                                    allow_feedback: this.assignForm.controls.feedback.value ? '1' : '0',
                                    show_timer: this.assignForm.controls.feedback.value ? '1' : '0',
                                    allow_workspace: this.assignForm.controls.workspace.value ? '1' : '0',
                                    topic_id: this.assignForm.controls.classSelect.value.length <= 1 &&
                                        this.assignForm.controls.topicSelect.value ? this.assignForm.controls.topicSelect.value : ''
                                }];
                        }
                        const data = {
                            platform: 'web',
                            role_id: this.auth.getRoleId(),
                            user_id: this.auth.getUserId(),
                            assign: this.assignType,
                            school_id: this.auth.getSessionData('school_id'),
                            classdetails: classDetails,
                            classroomDetails: [{
                                    content_id: this.assignType == '1' ? this.multiContentId[0]?.content_id ?? '' : [this.contentDetails.content_id],
                                    batch_id: batchId,
                                    start_date: '',
                                    end_date: '',
                                    start_time: '',
                                    end_time: '',
                                }],
                            editor_type: ''
                        };
                        this.creatorService.addAssignResourse(data).subscribe((successData) => {
                            this.submitSuccess(successData);
                        }, (error) => {
                            console.error(error, 'error_submit');
                        });
                    }
                    else {
                        this.toastr.error('End Date Should be greater than Start Date');
                    }
                }
                else {
                    this.toastr.error('Select Atleast one Student');
                }
            }
            else {
                this.toastr.error('No Student Available in this class please select all student');
            }
        }
        else {
            this.toastr.error('Please fill the mandatory field');
        }
    }
    submitSuccess(successData) {
        if (successData.IsSuccess) {
            // this.submitData = successData.ResponseObject;
            this.toastr.success('Class Resource Updated Successfully');
            this.auth.setSessionData('contentType', '');
            console.log(this.auth.getSessionData('assignedForm'), 'ristaAssigned');
            if (this.auth.getSessionData('assignedForm') == 'class') {
                this.auth.removeSessionData('content_assign');
                this.router.navigate(['class/topicsAndCurriculum/1']);
            }
            else if (this.auth.getSessionData('assignedForm') == 'content-Folder') {
                this.router.navigate(['class/view-assign/2']);
            }
            else if (this.auth.getSessionData('assignedForm') == 'classRoom') {
                const routedFrom = this.auth.getSessionData('editContentFromClassRoom') ?? '';
                if (routedFrom == 'classRoom') {
                    this.router.navigate(['classroom/list-classroom']);
                    this.auth.removeSessionData('editContentFromClassRoom');
                }
                else {
                    this.closePopUp.emit('assign');
                }
            }
            else {
                this.router.navigate(['repository/content-home']);
            }
            this.auth.setSessionData('resourceAccess', false);
            this.auth.removeSessionData('assignedForm');
        }
        else {
            this.toastr.error(successData.ErrorObject ? successData.ErrorObject : successData.ResponseObject);
            this.assignForm.controls.startDate.patchValue(null);
            this.assignForm.controls.endDate.patchValue(null);
            this.startdate = '';
            this.endDate = '';
            const stObject = { hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00') };
            this.assignForm.controls.startTime.patchValue(stObject);
            const etObject = { hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00') };
            this.assignForm.controls.endTime.patchValue(etObject);
            this.myDpOptions2 = {
                dateRange: false,
                dateFormat: dateOptions.pickerFormat,
                firstDayOfWeek: 'su',
            };
            this.myDpOptions1 = {
                dateRange: false,
                dateFormat: dateOptions.pickerFormat,
                firstDayOfWeek: 'su',
            };
        }
        this.closePopUp.emit();
    }
    classDetailService() {
        // this.commondata.showLoader(true);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.classData[0].class_id
        };
        this.classService.classDetails(data).subscribe((successData) => {
            this.enterListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_enter');
        });
    }
    enterListSuccess(successData) {
        if (successData.IsSuccess) {
            // this.commondata.showLoader(false);
            this.auth.setSessionData('classView', true);
            this.auth.setSessionData('card-data', JSON.stringify(successData.ResponseObject));
            this.auth.setSessionData('studentlist', JSON.stringify(successData.ResponseObject[0].students));
            this.auth.setSessionData('studentlist1', JSON.stringify(successData.ResponseObject[0].students));
            if (this.auth.getSessionData('resourceAccess') == 'true') {
                if (this.auth.getSessionData('batchassign') == '1') {
                    this.router.navigate(['class/topicsAndCurriculum/1']);
                }
                else if (this.auth.getSessionData('batchassign') == '3') {
                    this.router.navigate(['class/topicsAndCurriculum/3']);
                }
            }
        }
    }
    close() {
        if (this.auth.getSessionData('assignedForm') == 'class') {
            this.router.navigate(['class/topicsAndCurriculum/1']);
        }
        else if (this.auth.getSessionData('assignedForm') == 'content-Folder') {
            this.router.navigate(['class/view-assign/2']);
        }
        else if (this.auth.getSessionData('assignedForm') == 'classRoom') {
            const routedFrom = this.auth.getSessionData('editContentFromClassRoom') ?? '';
            if (routedFrom == 'classRoom') {
                this.router.navigate(['classroom/list-classroom']);
                this.auth.removeSessionData('editContentFromClassRoom');
            }
            else {
                this.closePopUp.emit();
            }
        }
        else {
            this.router.navigate(['repository/content-home']);
        }
        this.auth.setSessionData('resourceAccess', false);
        this.auth.removeSessionData('assignedForm');
        this.closePopUp.emit();
    }
    patchValue() {
        console.log(this.classData, 'classData');
        this.assignForm.controls.class.patchValue(this.classData[0].class_name);
        this.assignForm.get('dateRanges').value.forEach((control, index) => {
            const formControlName = this.assignForm['controls'].dateRanges['controls'][index]['controls'];
            formControlName.class_name.patchValue(this.classData[0].class_name ? this.classData[0].class_name : '');
            formControlName.class_id.patchValue(this.classData[0].class_id ? this.classData[0].class_id : '');
            if (this.classData[0].start_date != '0000-00-00') {
                const sd = this.classData[0].start_date.split('-');
                const sdObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) },
                    dateRange: null
                };
                const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
                const dropped = dr1.split('-');
                const droppedObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
                    dateRange: null
                };
                formControlName.startDate.patchValue(droppedObject);
                this.myDpOptions1 = {};
                this.myDpOptions1 = {
                    dateRange: false,
                    dateFormat: dateOptions.pickerFormat,
                    firstDayOfWeek: 'su',
                    disableUntil: {
                        year: parseInt(sd[0]),
                        month: parseInt(sd[1]),
                        day: parseInt(sd[2]) - 1
                    },
                };
                formControlName.class_startDate.patchValue(this.classData[0].start_date);
            }
            else {
                const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
                const dropped = dr1.split('-');
                const droppedObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
                    dateRange: null
                };
                formControlName.startDate.patchValue(droppedObject);
            }
            if (this.classData[0].end_date != '0000-00-00') {
                const sd = this.classData[0].end_date.split('-');
                const sdObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) },
                    dateRange: null
                };
                this.myDpOptions1 = {};
                this.myDpOptions1 = {
                    dateRange: false,
                    dateFormat: dateOptions.pickerFormat,
                    firstDayOfWeek: 'su',
                    disableUntil: {
                        year: this.myDpOptions.disableUntil.year,
                        month: this.myDpOptions.disableUntil.month,
                        day: this.myDpOptions.disableUntil.day
                    },
                };
                formControlName.class_endDate.patchValue(this.classData[0].end_date);
            }
            else {
                formControlName.endDate.patchValue(null);
            }
        });
        // if (this.classData[0].start_date != '0000-00-00') {
        //     const sd = this.classData[0].start_date.split('-');
        //     const sdObject: IMyDateModel = {
        //         isRange: false,
        //         singleDate: {jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2]))},
        //         dateRange: null
        //     };
        //     const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
        //     const dropped = dr1.split('-');
        //     const droppedObject: IMyDateModel = {
        //         isRange: false,
        //         singleDate: {jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2]))},
        //         dateRange: null
        //     };
        //     this.assignForm.controls.startDate.patchValue(droppedObject);
        //     this.myDpOptions1 = {};
        //     this.myDpOptions1 = {
        //         dateRange: false,
        //         dateFormat: dateOptions.pickerFormat,
        //         firstDayOfWeek: 'su',
        //         disableUntil: {
        //             year: parseInt(sd[0]),
        //             month: parseInt(sd[1]),
        //             day: parseInt(sd[2]) - 1
        //         },
        //     };
        //     this.startdate = this.classData[0].start_date;
        // } else {
        //     const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
        //     const dropped = dr1.split('-');
        //     const droppedObject: IMyDateModel = {
        //         isRange: false,
        //         singleDate: {jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2]))},
        //         dateRange: null
        //     };
        //     this.assignForm.controls.startDate.patchValue(droppedObject);
        //     // this.linkform.controls.startDate.patchValue(null);
        // }
        // if (this.classData[0].end_date != '0000-00-00') {
        //     const sd = this.classData[0].end_date.split('-');
        //     const sdObject: IMyDateModel = {
        //         isRange: false,
        //         singleDate: {jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2]))},
        //         dateRange: null
        //     };
        //     // this.linkform.controls.endDate.patchValue(sdObject);
        //     this.myDpOptions1 = {};
        //     this.myDpOptions1 = {
        //         dateRange: false,
        //         dateFormat: dateOptions.pickerFormat,
        //         firstDayOfWeek: 'su',
        //         disableUntil: {
        //             year: this.myDpOptions.disableUntil.year,
        //             month: this.myDpOptions.disableUntil.month,
        //             day: this.myDpOptions.disableUntil.day
        //         },
        //     };
        //     this.endDate = this.classData[0].end_date;
        // } else {
        //     this.assignForm.controls.endDate.patchValue(null);
        // }
        const stObject = { hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00') };
        this.assignForm.controls.startTime.patchValue(stObject);
        const etObject = { hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00') };
        this.assignForm.controls.endTime.patchValue(etObject);
    }
    static { this.ɵfac = function ConfirmContentAssignComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ConfirmContentAssignComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.DatePipe), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(i4.CreatorService), i0.ɵɵdirectiveInject(i5.ClassService), i0.ɵɵdirectiveInject(i6.Router), i0.ɵɵdirectiveInject(i7.ToastrService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ConfirmContentAssignComponent, selectors: [["app-confirm-content-assign"]], inputs: { classData: "classData", isEssay: "isEssay", contentDetails: "contentDetails", multiContentId: "multiContentId" }, outputs: { closePopUp: "closePopUp" }, decls: 20, vars: 13, consts: [["chipList", ""], ["dp", "angular-mydatepicker"], ["dp1", "angular-mydatepicker"], [1, "modal-header"], [1, "contenttext", "mb-0"], [1, "modal-body"], [3, "formGroup"], ["class", "row form-group", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-outline-primary", 3, "click"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "row", "form-group"], [1, "col-md-12"], [1, "font-weight-bold"], ["id", "selectBox", "formControlName", "typeSelection", 1, "form-control", 3, "change"], ["value", "n/a", "disabled", ""], ["value", "1"], ["value", "2", 4, "ngIf"], ["value", "2"], [1, "col-12", "font-weight-bold"], [1, "col-12"], [3, "removed", 4, "ngFor", "ngForOf"], ["placeholder", "", "readonly", "", 3, "matChipInputFor", "matChipInputAddOnBlur"], [3, "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], ["class", "col-md-12", 4, "ngIf"], ["class", "col-md-8", 4, "ngIf"], ["class", "col-md-4", 4, "ngIf"], ["formControlName", "class", "readonly", "", "type", "text", "placeholder", "Enter the Class Name", 1, "form-control", 3, "value"], [1, "col-md-8"], ["formControlName", "classSelect", "bindValue", "class_id", "bindLabel", "class_name", "placeholder", "Select Class *", "typeToSearchText", "", 3, "change", "remove", "close", "clear", "items", "multiple", "closeOnSelect"], ["ng-option-tmp", ""], [1, "col-md-4"], ["bindLabel", "teacher_name", "bindValue", "teacher_id", "formControlName", "teacherSelect", "placeholder", "Teacher Filter", "typeToSearchText", "", 3, "change", "items"], ["formControlName", "topicSelect", "bindValue", "topic_id", "bindLabel", "topic", "placeholder", "Select Topic", "typeToSearchText", "", 3, "items"], [1, "col-md-12", "popup"], [3, "type", "selectedbatch", "treeviewHeight", "calledForm"], [1, "col-md-8", "mt-2"], [1, "col-md-12", "d-flex", "align-items-center"], ["id", "allStudents", "type", "radio", "formControlName", "radio", "value", "1", 1, "mr-2", "cursor", 3, "change"], ["for", "allStudents", 1, "mr-4", "mb-0", "cursor"], ["id", "specificStudents", "type", "radio", "formControlName", "radio", "value", "0", 1, "mr-2", "cursor", 3, "change"], ["for", "specificStudents", 1, "mr-2", "mb-0", "cursor"], ["class", "col-md-8 mt-2", 4, "ngIf"], ["formControlName", "specificstudent", "bindValue", "student_id", "bindLabel", "name", "placeholder", "Select Student", "typeToSearchText", "", "multiple", "true", 3, "items"], [1, "col-md-3"], [1, "col-12", 2, "position", "relative", "font-size", "15px", "left", "0.4rem"], ["type", "checkbox", "id", "downloadContent", "formControlName", "downloadcontent", 1, "form-check-input", "cursor"], ["for", "downloadContent", 1, "cursor"], ["formControlName", "releaseScore", "class", "form-control mb-1", 4, "ngIf"], [1, "notes_style"], [4, "ngIf"], ["formControlName", "releaseScore", 1, "form-control", "mb-1"], ["value", "0"], [1, "col-md-2"], ["type", "checkbox", "id", "workspace", "formControlName", "workspace", 1, "form-check-input", "cursor"], ["for", "workspace", 1, "cursor", "mb-0", "font-weight-bold", 2, "font-size", "14px"], ["type", "checkbox", "id", "feedback", "formControlName", "feedback", 1, "form-check-input", "cursor"], ["for", "feedback", 1, "cursor", "mb-0", "font-weight-bold", 2, "font-size", "14px"], ["class", "col-md-2", 4, "ngIf"], ["type", "checkbox", "id", "showTimer", "formControlName", "showTimer", 1, "form-check-input", "cursor"], ["for", "showTimer", 1, "cursor", "mb-0", "font-weight-bold", 2, "font-size", "14px"], ["formArrayName", "dateRanges", 3, "class", 4, "ngFor", "ngForOf"], ["formArrayName", "dateRanges"], [1, "row", 3, "formGroupName"], [1, "col-md-12", "mb-2"], [1, "row", "contenttext"], [1, "align-content-center", "col-md-4"], [1, "mb-0", 2, "color", "#777777"], [1, "align-content-center", "col-md-3", "pl-0"], [1, "t-name", "font-weight-bold"], ["class", "col-md-2 text-right", 4, "ngIf"], [1, "row", "align-items-center"], [1, "col-md-4", "mb-0", "font-weight-bold", "pr-0"], ["formControlName", "startDate", "placeholder", "Start Date", "name", "dp", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", "col-md-8", 3, "dateChanged", "click", "options"], [1, "mb-0", "ml-3", "mr-1", "font-weight-bold"], [1, "col-md-8", "px-0"], ["formControlName", "startTime", 3, "meridian", "spinners"], ["class", "error", 4, "ngIf"], ["class", "small form-text text-danger", 4, "ngIf"], [1, "col-md-4", "mb-0", "font-weight-bold"], ["formControlName", "endDate", "placeholder", "End Date", "name", "dp1", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", "col-md-8", 3, "dateChanged", "click", "options"], ["formControlName", "endTime", 3, "meridian", "spinners"], [1, "col-md-2", "text-right"], [1, "error"], [1, "small", "form-text", "text-danger"], [1, "btn", "btn-primary", 3, "click"]], template: function ConfirmContentAssignComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 3)(1, "h4", 4);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(3, "div", 5)(4, "form", 6)(5, "div");
            i0.ɵɵtemplate(6, ConfirmContentAssignComponent_div_6_Template, 11, 1, "div", 7)(7, ConfirmContentAssignComponent_div_7_Template, 8, 3, "div", 7)(8, ConfirmContentAssignComponent_div_8_Template, 7, 3, "div", 7)(9, ConfirmContentAssignComponent_div_9_Template, 6, 1, "div", 7)(10, ConfirmContentAssignComponent_div_10_Template, 6, 5, "div", 7)(11, ConfirmContentAssignComponent_div_11_Template, 12, 1, "div", 7)(12, ConfirmContentAssignComponent_div_12_Template, 6, 0, "div", 7)(13, ConfirmContentAssignComponent_div_13_Template, 15, 7, "div", 7)(14, ConfirmContentAssignComponent_div_14_Template, 12, 1, "div", 7)(15, ConfirmContentAssignComponent_div_15_Template, 2, 1, "div", 7);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(16, "div", 8)(17, "button", 9);
            i0.ɵɵlistener("click", function ConfirmContentAssignComponent_Template_button_click_17_listener() { return ctx.close(); });
            i0.ɵɵtext(18, "Cancel");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(19, ConfirmContentAssignComponent_button_19_Template, 2, 0, "button", 10);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.multiContentId.length != 0 ? "Multi Assign" : ctx.contentDetails == null ? null : ctx.contentDetails.name);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.assignForm);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.contentAssignedForm || ctx.contentAssignedForm == "classRoom");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.multiContentId.length != 0 && ctx.showClassRelatedField && ctx.assignForm.controls.typeSelection.value == "1");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showClassRelatedField);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showClassRelatedField && ctx.topicsData.length != 0 && ctx.assignForm.controls.classSelect.value.length <= 1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showContentFolderRelatedField);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showClassRelatedField);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showClassRelatedField && (ctx.multiContentId.length != 0 && ctx.downloadContentAvailable || ctx.multiContentId.length == 0 && (ctx.contentDetails == null ? null : ctx.contentDetails.download) != "0"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showClassRelatedField && ctx.allowScore);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showClassRelatedField && (ctx.contentFormat == "3" && ctx.multiContentId.length == 0 || ctx.multiContentId.length != 0));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showClassRelatedField || ctx.contentAssignedForm == "class");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.showClassRelatedField || ctx.showContentFolderRelatedField);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.RadioControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i1.FormGroupName, i1.FormArrayName, i8.NgbTimepicker, i9.AngularMyDatePickerDirective, i10.NgSelectComponent, i10.NgOptionTemplateDirective, i11.MatChipGrid, i11.MatChipInput, i11.MatChipRemove, i11.MatChipRow, i12.MatFormField, i13.MatIcon, i14.TreeviewContentfolderComponent, i15.CustomDateFormatPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfirmContentAssignComponent, [{
        type: Component,
        args: [{ selector: 'app-confirm-content-assign', template: "<div class=\"modal-header\">\n    <h4 class=\"contenttext mb-0\">{{multiContentId.length != 0 ? 'Multi Assign' : contentDetails?.name}}</h4>\n</div>\n<div class=\"modal-body\">\n    <form [formGroup]=\"assignForm\">\n        <div>\n            <div class=\"row form-group\" *ngIf=\"!contentAssignedForm || contentAssignedForm == 'classRoom'\">\n                <div class=\"col-md-12\">\n                    <label class=\"font-weight-bold\">Assign Resource For</label>\n                </div>\n                <div class=\"col-md-12\">\n                    <select id=\"selectBox\" class=\"form-control\" formControlName=\"typeSelection\" (change)=\"typeSelection()\">\n                        <option value=\"n/a\" disabled>Select type</option>\n                        <option value=\"1\">Class</option>\n                        <option *ngIf=\"contentAssignedForm != 'classRoom'\" value=\"2\">Content Folder</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"row form-group\" *ngIf=\"multiContentId.length != 0 && showClassRelatedField &&\n                assignForm.controls.typeSelection.value == '1'\">\n                <label class=\"col-12 font-weight-bold\">Selected Content</label>\n                <mat-form-field class=\"col-12\">\n                    <mat-chip-grid #chipList>\n                        <mat-chip-row\n                                *ngFor=\"let item of multiContentId; let i=index\"\n                                (removed)=\"removeSelectedMultiContent(item, i)\">{{item.name}}\n                            <mat-icon *ngIf=\"multiContentId.length > 1\" matChipRemove>cancel</mat-icon>\n                        </mat-chip-row>\n                        <input placeholder=\"\" readonly [matChipInputFor]=\"chipList\"\n                               [matChipInputAddOnBlur]=\"true\"\n                        />\n                    </mat-chip-grid>\n                </mat-form-field>\n            </div>\n            <div class=\"row form-group\" *ngIf=\"showClassRelatedField\">\n                <div class=\"col-md-12\">\n                    <label class=\"font-weight-bold\">Class</label>\n                </div>\n                <div class=\"col-md-12\" *ngIf=\"contentAssignedForm == 'class'\">\n                    <input class=\"form-control\" formControlName=\"class\" readonly type=\"text\" placeholder=\"Enter the Class Name\" value=\"{{classData[0]?.class_name}}\">\n                </div>\n                <div class=\"col-md-8\" *ngIf=\"showClassRelatedField && assignForm.controls.typeSelection.value == '1'\">\n                    <ng-select [items]=\"classListData\"\n                               formControlName=\"classSelect\"\n                               bindValue=\"class_id\"\n                               bindLabel=\"class_name\"\n                               placeholder=\"Select Class *\"\n                               typeToSearchText=\"\"\n                               [multiple]=\"true\"\n                               [closeOnSelect]=\"false\"\n                               [attr.title]=\"selectedClassName\"\n                               (change)=\"updateClassName()\"\n                               (remove)=\"selectStudent()\"\n                               (close)=\"selectStudent()\"\n                               (clear)=\"clearFormArray()\">\n                        <ng-template ng-option-tmp let-item=\"item\">\n                            <div [attr.title]=\"item.class_name\">{{ item.class_name }}</div>\n                        </ng-template>\n                    </ng-select>\n                </div>\n                <div class=\"col-md-4\" *ngIf=\"showClassRelatedField && assignForm.controls.typeSelection.value == '1'\">\n                    <ng-select (change)=\"teacherFilter($event)\"\n                               [items]=\"teacherListData\"\n                               bindLabel=\"teacher_name\"\n                               bindValue=\"teacher_id\"\n                               formControlName=\"teacherSelect\"\n                               placeholder=\"Teacher Filter\"\n                               typeToSearchText=\"\"\n                    >\n                    </ng-select>\n                </div>\n            </div>\n            <div class=\"row form-group\" *ngIf=\"showClassRelatedField && topicsData.length != 0 && assignForm.controls.classSelect.value.length <= 1\">\n                <div class=\"col-md-12\">\n                    <label class=\"font-weight-bold\">Topics</label>\n                </div>\n                <div class=\"col-md-12\">\n                    <ng-select [items]=\"topicsData\"\n                               formControlName=\"topicSelect\"\n                               bindValue=\"topic_id\"\n                               bindLabel=\"topic\"\n                               placeholder=\"Select Topic\"\n                               typeToSearchText=\"\"\n                    >\n                    </ng-select>\n                </div>\n            </div>\n            <div class=\"row form-group\" *ngIf=\"showContentFolderRelatedField\">\n                <div class=\"col-md-12\">\n                    <label class=\"font-weight-bold\">Content Folder</label>\n                </div>\n                <div class=\"col-md-12 popup\">\n                    <app-treeview-contentfolder [type]=\"'add'\" [selectedbatch]=\"[]\" [treeviewHeight]=\"200\"\n                        [calledForm]=\"'confirmPopUp'\"></app-treeview-contentfolder>\n                </div>\n            </div>\n\n            <div class=\"row form-group\" *ngIf=\"showClassRelatedField\">\n                <div class=\"col-md-8 mt-2\">\n                    <label class=\"font-weight-bold\">Selected Students</label>\n                    <div class=\"col-md-12 d-flex align-items-center\">\n                        <input id=\"allStudents\" class=\"mr-2 cursor\" type=\"radio\" formControlName=\"radio\" value=\"1\" (change)=\"showStudentList = !showStudentList\">\n                            <label for=\"allStudents\" class=\"mr-4 mb-0 cursor\"> All Students in selected class</label>\n                        <input id=\"specificStudents\" class=\"mr-2 cursor\" type=\"radio\" formControlName=\"radio\" value=\"0\" (change)=\"showStudentList = !showStudentList\">\n                            <label class=\"mr-2 mb-0 cursor\" for=\"specificStudents\"> Specific Students</label>\n                    </div>\n                </div>\n                <div class=\"col-md-8 mt-2\" *ngIf=\"showStudentList\">\n                    <ng-select [items]=\"studentData\"\n                               formControlName=\"specificstudent\"\n                               bindValue=\"student_id\"\n                               bindLabel=\"name\"\n                               placeholder=\"Select Student\"\n                               typeToSearchText=\"\"\n                               multiple=\"true\">\n                    </ng-select>\n                </div>\n            </div>\n\n            <div class=\"row form-group\" *ngIf=\"showClassRelatedField &&\n                ((multiContentId.length != 0 && downloadContentAvailable) || (multiContentId.length == 0 && contentDetails?.download != '0'))\">\n                <div class=\"col-md-3\">\n                    <div class=\"col-12\" style=\"position: relative; font-size: 15px; left: 0.4rem\">\n                        <input type=\"checkbox\" class=\"form-check-input cursor\" id=\"downloadContent\" formControlName=\"downloadcontent\">\n                        <label class=\"cursor\" for=\"downloadContent\">Download Content</label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row form-group\" *ngIf=\"showClassRelatedField && allowScore\">\n                <div class=\"col-md-12\">\n                    <label class=\"font-weight-bold\">Release Score</label>\n                </div>\n                <div class=\"col-md-12\">\n                    <select *ngIf=\"isEssay != '1'\" formControlName=\"releaseScore\" class=\"form-control mb-1\">\n                        <option value=\"n/a\" disabled>Select Response type</option>\n                        <option value=\"0\">Instructor Graded</option>\n                        <option value=\"1\">Auto Graded</option>\n                        <option value=\"2\" *ngIf=\"contentFormat == '3' || multiContentId.length != 0\">Real-Time Grading</option>\n                    </select>\n\n                    <select *ngIf=\"isEssay == '1'\" formControlName=\"releaseScore\" class=\"form-control mb-1\">\n                        <option value=\"n/a\" disabled>Select Response type</option>\n                        <option value=\"0\">Teacher Review Only</option>\n                        <option value=\"1\">Automatic Feedback</option>\n                    </select>\n                    <span class=\"notes_style\">(Note:\n                        <span *ngIf=\"assignForm.controls.releaseScore.value == '0' && isEssay == '0'\">Responses will be reviewed and graded manually. Scores will be released after the final submission</span>\n                        <span *ngIf=\"assignForm.controls.releaseScore.value == '1' && isEssay == '0'\">Responses will be graded automatically, but scores and feedback will only be released after the final submission</span>\n                        <span *ngIf=\"assignForm.controls.releaseScore.value == '2' && isEssay == '0'\">Responses will be graded automatically and scores will be available immediately after each submission</span>\n                        <span *ngIf=\"assignForm.controls.releaseScore.value == '0' && isEssay == '1'\">Essay will be manually reviewed by the teacher to provide feedback and scores. System generated feedback is not available</span>\n                        <span *ngIf=\"assignForm.controls.releaseScore.value == '1' && isEssay == '1'\">Student can request for Automatic system generated feedback and score. Teacher can provide final feedback and score after the final submission</span>)</span>\n                </div>\n            </div>\n\n            <div class=\"row form-group\" *ngIf=\"showClassRelatedField && ((contentFormat == '3' && multiContentId.length == 0) || multiContentId.length != 0)\">\n                <div class=\"col-md-2\">\n                    <div class=\"col-12\" style=\"position: relative; font-size: 15px; left: 0.4rem\">\n                        <input type=\"checkbox\" class=\"form-check-input cursor\" id=\"workspace\" formControlName=\"workspace\">\n                        <label style=\"font-size: 14px\" class=\"cursor mb-0 font-weight-bold\" for=\"workspace\">Workspace</label>\n                    </div>\n                </div>\n                <div class=\"col-md-2\">\n                    <div class=\"col-12\" style=\"position: relative; font-size: 15px; left: 0.4rem\">\n                        <input type=\"checkbox\" class=\"form-check-input cursor\" id=\"feedback\" formControlName=\"feedback\">\n                        <label style=\"font-size: 14px\" class=\"cursor mb-0 font-weight-bold\" for=\"feedback\">FeedBack</label>\n                    </div>\n                </div>\n                <div class=\"col-md-2\" *ngIf=\"isEssay == '1'\">\n                    <div class=\"col-12\" style=\"position: relative; font-size: 15px; left: 0.4rem\">\n                        <input type=\"checkbox\" class=\"form-check-input cursor\" id=\"showTimer\" formControlName=\"showTimer\">\n                        <label style=\"font-size: 14px\" class=\"cursor mb-0 font-weight-bold\" for=\"showTimer\">Show Timer</label>\n                    </div>\n                </div>\n            </div>\n\n<!--            <div *ngIf=\"!checkAutoRelease\" class=\"col-12 px-0\">-->\n<!--                <p class=\"assign-error text-center\">Auto score release is not applicable for this content</p>-->\n<!--            </div>-->\n<!--            <div class=\"row form-group\" *ngIf=\"startdate && endDate && showClassRelatedField\">-->\n<!--                <div class=\"col-md-12\">-->\n<!--                    <div class=\"row contenttext\">-->\n<!--                        <div class=\"col-md-4\">-->\n<!--                            <label>Class Start Date: {{startdate | customDateFormat}}</label>-->\n<!--                        </div>-->\n<!--                        <div class=\"col-md-4\">-->\n<!--                            <label>Class End Date: {{endDate | customDateFormat}}</label>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--            </div>-->\n            <div class=\"row form-group\" *ngIf=\"showClassRelatedField || contentAssignedForm == 'class'\">\n                <div class=\"col-md-12 mb-2 {{first ? '' : 'mt-1'}}\" *ngFor=\"let list of assignForm.get('dateRanges')['controls']; let i=index; let first = first\" formArrayName=\"dateRanges\">\n                    <div class=\"row\" [formGroupName]=\"i\">\n                        <div class=\"col-md-12 mb-2\">\n                            <div class=\"row contenttext\">\n                                <div class=\"align-content-center col-md-4\">\n                                    <span style=\"color:#777777;\" class=\"mb-0\">Class Name: </span><span class=\"font-weight-bold\">{{list['controls'].class_name.value}}</span>\n                                </div>\n                                <div class=\"align-content-center col-md-3 pl-0\">\n                                    <span style=\"color:#777777;\" class=\"mb-0\">Class Start Date: </span><span class=\"t-name font-weight-bold\">{{list.get('class_startDate').value | customDateFormat}}</span>\n                                </div>\n                                <div class=\"align-content-center col-md-3 pl-0\">\n                                    <span style=\"color:#777777;\" class=\"mb-0\">Class End Date: </span><span class=\"font-weight-bold\">{{list.get('class_endDate').value | customDateFormat}}</span>\n                                </div>\n                                <div class=\"col-md-2 text-right\" *ngIf=\"first && assignForm.get('dateRanges')['controls'].length > 1\">\n                                    <button (click)=\"applyToAll(list)\" class=\"btn btn-outline-primary\">Apply To All</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"row align-items-center\">\n                                <label class=\"col-md-4 mb-0 font-weight-bold pr-0\">Start Date</label>\n                                <input class=\"form-control col-md-8\" formControlName=\"startDate\" placeholder=\"Start Date\"\n                                       name=\"dp\" angular-mydatepicker #dp=\"angular-mydatepicker\" autocomplete=\"off\"\n                                       [options]=\"myDpOptions2\" (dateChanged)=\"onDateChanged($event)\" (click)=\"dp.toggleCalendar()\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"row align-items-center\">\n                                <label class=\"mb-0 ml-3 mr-1 font-weight-bold\">Start Time</label>\n                                <div class=\"col-md-8 px-0\">\n                                    <ngb-timepicker formControlName=\"startTime\" [meridian]=\"meridian\" [spinners]=\"spinner\"></ngb-timepicker>\n                                </div>\n                                <em class=\"error\" *ngIf=\"assignForm.get('startTime').invalid && (assignForm.get('startTime').dirty || assignForm.get('startTime').touched)\">\n                                    StartTime is invalid\n                                </em>\n                                <div class=\"small form-text text-danger\" *ngIf=\"checkTimeDifference(list)\">\n                                    Select valid Time Period\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"row align-items-center\">\n                                <label class=\"col-md-4 mb-0 font-weight-bold\">End Date</label>\n                                <input class=\"form-control col-md-8\" formControlName=\"endDate\" placeholder=\"End Date\"\n                                       name=\"dp1\" angular-mydatepicker #dp1=\"angular-mydatepicker\" autocomplete=\"off\"\n                                       [options]=\"myDpOptions1\" (dateChanged)=\"onDateChanged1($event)\" (click)=\"dp1.toggleCalendar()\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"row align-items-center\">\n                                <label class=\"mb-0 ml-3 mr-1 font-weight-bold\">End Time</label>\n                                <div class=\"col-md-8 px-0\">\n                                    <ngb-timepicker [meridian]=\"meridian\" formControlName=\"endTime\" [spinners]=\"spinner\"></ngb-timepicker>\n                                    <em class=\"error\" *ngIf=\"assignForm.get('endTime').invalid && (assignForm.get('endTime').dirty || assignForm.get('endTime').touched)\">\n                                        EndTime is invalid\n                                    </em>\n                                    <div class=\"small form-text text-danger\" *ngIf=\"checkTimeDifference(list)\">\n                                        Select valid Time Period\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n<!--            <div class=\"row form-group\">-->\n<!--                <div class=\"col-md-2\">-->\n<!--                    <div class=\"row-md-12\">-->\n<!--                        <label>Start Date</label>-->\n<!--                    </div>-->\n<!--                    <div class=\"row-md-12\">-->\n<!--                        <input class=\"form-control\" formControlName=\"startDate\" placeholder=\"Start Date\"-->\n<!--                               name=\"dp\" angular-mydatepicker #dp=\"angular-mydatepicker\" autocomplete=\"off\"-->\n<!--                               [options]=\"myDpOptions2\" (dateChanged)=\"onDateChanged($event)\" (click)=\"dp.toggleCalendar()\">-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--                <div class=\"col-md-4\">-->\n<!--                    <div class=\"row-md-12\">-->\n<!--                        <label>Start Time</label>-->\n<!--                    </div>-->\n<!--                    <div class=\"row-md-12\">-->\n<!--                        <ngb-timepicker (keypress)=\"changeStartTime()\" formControlName=\"startTime\" [meridian]=\"meridian\" [spinners]=\"spinner\"></ngb-timepicker>-->\n<!--                    </div>-->\n<!--                    <em class=\"error\" *ngIf=\"assignForm.get('startTime').invalid && (assignForm.get('startTime').dirty || assignForm.get('startTime').touched)\">-->\n<!--                        StartTime is invalid-->\n<!--                    </em>-->\n<!--                    <div class=\"small form-text text-danger\" *ngIf=\"timeErr\">-->\n<!--                        <div *ngIf=\"timeErr\">Select valid Time Period</div>-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--                <div class=\"col-md-2\">-->\n<!--                    <div class=\"row-md-12\">-->\n<!--                        <label>End Date</label>-->\n<!--                    </div>-->\n<!--                    <div class=\"row-md-12\">-->\n<!--                        <input class=\"form-control\" formControlName=\"endDate\" placeholder=\"End Date\"-->\n<!--                               name=\"dp1\" angular-mydatepicker #dp1=\"angular-mydatepicker\" autocomplete=\"off\"-->\n<!--                               [options]=\"myDpOptions1\" (dateChanged)=\"onDateChanged1($event)\" (click)=\"dp1.toggleCalendar()\">-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--                <div class=\"col-md-4\">-->\n<!--                    <div class=\"row-md-12\">-->\n<!--                        <label>End Time</label>-->\n<!--                    </div>-->\n<!--                    <div class=\"row-md-12\">-->\n<!--                        <ngb-timepicker (keypress)=\"changeStartTime()\" [meridian]=\"meridian\" formControlName=\"endTime\" [spinners]=\"spinner\"></ngb-timepicker>-->\n<!--                    </div>-->\n<!--                    <em class=\"error\" *ngIf=\"assignForm.get('endTime').invalid && (assignForm.get('endTime').dirty || assignForm.get('endTime').touched)\">-->\n<!--                        EndTime is invalid-->\n<!--                    </em>-->\n<!--                    <div class=\"small form-text text-danger\" *ngIf=\"timeErr\">-->\n<!--                        <div *ngIf=\"timeErr\">Select valid Time Period</div>-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--            </div>-->\n        </div>\n    </form>\n</div>\n<div class=\"modal-footer\">\n    <button class=\"btn btn-outline-primary\" (click)=\"close()\">Cancel</button>\n    <button class=\"btn btn-primary\" *ngIf=\"showClassRelatedField || showContentFolderRelatedField\"\n            (click)=\"submitAssign('1')\">Submit</button>\n</div>\n" }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.DatePipe }, { type: i3.AuthService }, { type: i4.CreatorService }, { type: i5.ClassService }, { type: i6.Router }, { type: i7.ToastrService }], { classData: [{
            type: Input
        }], isEssay: [{
            type: Input
        }], contentDetails: [{
            type: Input
        }], multiContentId: [{
            type: Input
        }], closePopUp: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ConfirmContentAssignComponent, { className: "ConfirmContentAssignComponent" }); })();
//# sourceMappingURL=confirm-content-assign.component.js.map