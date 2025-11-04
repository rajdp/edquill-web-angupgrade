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
import * as i8 from "../../../shared/service/common.service";
import * as i9 from "../../../shared/service/teacher.service";
import * as i10 from "@ng-bootstrap/ng-bootstrap";
import * as i11 from "ngx-toastr";
import * as i12 from "../../../shared/service/validation.service";
import * as i13 from "@angular/forms";
import * as i14 from "../../../shared/service/newsubject.service";
import * as i15 from "@nodro7/angular-mydatepicker";
import * as i16 from "../../auth/table/table.component";
import * as i17 from "../../corporateschool/emptyschool/emptyschool.component";
import * as i18 from "../../studentlogin/answer-sheet/answer-sheet.component";
const _c0 = ["content"];
const _c1 = ["viewStudentDetails"];
function GradeReportComponent_section_0_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const classData_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", classData_r3.class_code);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(classData_r3.class_name);
} }
function GradeReportComponent_section_0_div_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28)(1, "div", 29)(2, "button", 30);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function GradeReportComponent_section_0_div_31_div_1_i_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 42);
} }
function GradeReportComponent_section_0_div_31_div_1_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 43);
} }
function GradeReportComponent_section_0_div_31_div_1_ng_template_15_div_0_i_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 42);
} }
function GradeReportComponent_section_0_div_31_div_1_ng_template_15_div_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 43);
} }
function GradeReportComponent_section_0_div_31_div_1_ng_template_15_div_0_ng_template_13_i_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 42);
} }
function GradeReportComponent_section_0_div_31_div_1_ng_template_15_div_0_ng_template_13_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 43);
} }
function GradeReportComponent_section_0_div_31_div_1_ng_template_15_div_0_ng_template_13_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-table", 48);
    i0.ɵɵlistener("clickValue", function GradeReportComponent_section_0_div_31_div_1_ng_template_15_div_0_ng_template_13_ng_template_15_Template_app_table_clickValue_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(7); return i0.ɵɵresetView(ctx_r1.studentCorrectionDetail($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const student_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("TableType", "Assessment")("TableArray", student_r7.assessment);
} }
function GradeReportComponent_section_0_div_31_div_1_ng_template_15_div_0_ng_template_13_i_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 42);
} }
function GradeReportComponent_section_0_div_31_div_1_ng_template_15_div_0_ng_template_13_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 43);
} }
function GradeReportComponent_section_0_div_31_div_1_ng_template_15_div_0_ng_template_13_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-table", 48);
    i0.ɵɵlistener("clickValue", function GradeReportComponent_section_0_div_31_div_1_ng_template_15_div_0_ng_template_13_ng_template_31_Template_app_table_clickValue_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(7); return i0.ɵɵresetView(ctx_r1.studentCorrectionDetail($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const student_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("TableType", "Assignment")("TableArray", student_r7.assignment);
} }
function GradeReportComponent_section_0_div_31_div_1_ng_template_15_div_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46)(1, "div", 33, 7)(3, "h2", 34)(4, "button", 35)(5, "h4", 36);
    i0.ɵɵtext(6, "ASSESSMENT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 37)(8, "h4", 38);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, GradeReportComponent_section_0_div_31_div_1_ng_template_15_div_0_ng_template_13_i_10_Template, 1, 0, "i", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, GradeReportComponent_section_0_div_31_div_1_ng_template_15_div_0_ng_template_13_ng_template_11_Template, 1, 0, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 40)(14, "div", 41);
    i0.ɵɵtemplate(15, GradeReportComponent_section_0_div_31_div_1_ng_template_15_div_0_ng_template_13_ng_template_15_Template, 1, 2, "ng-template");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(16, "div", 47)(17, "div", 33, 8)(19, "h2", 34)(20, "button", 35)(21, "h4", 36);
    i0.ɵɵtext(22, "ASSIGNMENT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 37)(24, "h4", 38);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(26, GradeReportComponent_section_0_div_31_div_1_ng_template_15_div_0_ng_template_13_i_26_Template, 1, 0, "i", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(27, GradeReportComponent_section_0_div_31_div_1_ng_template_15_div_0_ng_template_13_ng_template_27_Template, 1, 0, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 40)(30, "div", 41);
    i0.ɵɵtemplate(31, GradeReportComponent_section_0_div_31_div_1_ng_template_15_div_0_ng_template_13_ng_template_31_Template, 1, 2, "ng-template");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const assessmentAccordion_r9 = i0.ɵɵreference(2);
    const uparrow_r10 = i0.ɵɵreference(12);
    const assignmentAccordion_r11 = i0.ɵɵreference(18);
    const ctx_r11 = i0.ɵɵnextContext();
    const student_r7 = ctx_r11.$implicit;
    const studentIndex_r13 = ctx_r11.index;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("ngbAccordionItem", "", studentIndex_r13, " + 'assessment'");
    i0.ɵɵproperty("collapsed", true);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("Avg% = ", student_r7.assessment_percentage, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", assessmentAccordion_r9.collapsed)("ngIfElse", uparrow_r10);
    i0.ɵɵadvance(7);
    i0.ɵɵpropertyInterpolate1("ngbAccordionItem", "", studentIndex_r13, " + 'assignment'");
    i0.ɵɵproperty("collapsed", true);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("Avg% = ", student_r7.assignment_percentage, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", assignmentAccordion_r11.collapsed)("ngIfElse", uparrow_r10);
} }
function GradeReportComponent_section_0_div_31_div_1_ng_template_15_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45)(1, "div", 33, 6)(3, "h2", 34)(4, "button", 35)(5, "h4", 36);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 37);
    i0.ɵɵtemplate(8, GradeReportComponent_section_0_div_31_div_1_ng_template_15_div_0_i_8_Template, 1, 0, "i", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, GradeReportComponent_section_0_div_31_div_1_ng_template_15_div_0_ng_template_9_Template, 1, 0, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 40)(12, "div", 41);
    i0.ɵɵtemplate(13, GradeReportComponent_section_0_div_31_div_1_ng_template_15_div_0_ng_template_13_Template, 32, 12, "ng-template");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const student_r7 = ctx.$implicit;
    const studentIndex_r13 = ctx.index;
    const first_r14 = ctx.first;
    const studentAccordion_r15 = i0.ɵɵreference(2);
    const uparrow_r16 = i0.ɵɵreference(10);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("ngbAccordionItem", studentIndex_r13);
    i0.ɵɵproperty("collapsed", !first_r14);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", student_r7 == null ? null : student_r7.student_name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", studentAccordion_r15.collapsed)("ngIfElse", uparrow_r16);
} }
function GradeReportComponent_section_0_div_31_div_1_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, GradeReportComponent_section_0_div_31_div_1_ng_template_15_div_0_Template, 14, 5, "div", 44);
} if (rf & 2) {
    const classData_r17 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngForOf", classData_r17.student_list);
} }
function GradeReportComponent_section_0_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "div", 33, 4)(3, "h2", 34)(4, "button", 35)(5, "h4", 36);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 37)(8, "h4", 38);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, GradeReportComponent_section_0_div_31_div_1_i_10_Template, 1, 0, "i", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, GradeReportComponent_section_0_div_31_div_1_ng_template_11_Template, 1, 0, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 40)(14, "div", 41);
    i0.ɵɵtemplate(15, GradeReportComponent_section_0_div_31_div_1_ng_template_15_Template, 1, 1, "ng-template");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const classData_r17 = ctx.$implicit;
    const classIndex_r18 = ctx.index;
    const first_r19 = ctx.first;
    const accordion_r20 = i0.ɵɵreference(2);
    const uparrow_r21 = i0.ɵɵreference(12);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("ngbAccordionItem", classIndex_r18);
    i0.ɵɵproperty("collapsed", !first_r19);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", classData_r17.class_name, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Avg% = ", classData_r17.class_percentage, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", accordion_r20.collapsed)("ngIfElse", uparrow_r21);
} }
function GradeReportComponent_section_0_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, GradeReportComponent_section_0_div_31_div_1_Template, 16, 6, "div", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.reportList);
} }
function GradeReportComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 11)(1, "form", 12)(2, "div", 13)(3, "div", 14)(4, "label", 15);
    i0.ɵɵtext(5, "Filter By");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "select", 16);
    i0.ɵɵlistener("change", function GradeReportComponent_section_0_Template_select_change_6_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectClass($event)); });
    i0.ɵɵelementStart(7, "option", 17);
    i0.ɵɵtext(8, "--Select--");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, GradeReportComponent_section_0_option_9_Template, 2, 2, "option", 18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 14)(11, "label", 15);
    i0.ɵɵtext(12, "From Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 19)(14, "div", 20)(15, "input", 21, 2);
    i0.ɵɵlistener("dateChanged", function GradeReportComponent_section_0_Template_input_dateChanged_15_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onDateChanged1($event, "1")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 22)(18, "button", 23);
    i0.ɵɵlistener("click", function GradeReportComponent_section_0_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r1); const dp_r4 = i0.ɵɵreference(16); return i0.ɵɵresetView(dp_r4.toggleCalendar()); });
    i0.ɵɵelement(19, "i", 24);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(20, "div", 14)(21, "label", 15);
    i0.ɵɵtext(22, "To Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 19)(24, "div", 20)(25, "input", 25, 3);
    i0.ɵɵlistener("dateChanged", function GradeReportComponent_section_0_Template_input_dateChanged_25_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onDateChanged1($event, "2")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 22)(28, "button", 23);
    i0.ɵɵlistener("click", function GradeReportComponent_section_0_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r1); const dp1_r5 = i0.ɵɵreference(26); return i0.ɵɵresetView(dp1_r5.toggleCalendar()); });
    i0.ɵɵelement(29, "i", 24);
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵtemplate(30, GradeReportComponent_section_0_div_30_Template, 4, 0, "div", 26)(31, GradeReportComponent_section_0_div_31_Template, 2, 1, "div", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r1.studentReport);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r1.classList);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("options", ctx_r1.myDpOptions);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("options", ctx_r1.myDpOptions1);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.reportList.length == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.reportList.length != 0);
} }
function GradeReportComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-emptyschool");
    i0.ɵɵelementEnd();
} }
function GradeReportComponent_ng_template_2_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 58)(1, "label", 59);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 59);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "label", 59);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const classData_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i_r24 + 1, ".");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("ContentName : ", classData_r23.content_name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Percentage : ", classData_r23.percentage, "");
} }
function GradeReportComponent_ng_template_2_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵtemplate(1, GradeReportComponent_ng_template_2_div_7_div_1_Template, 7, 3, "div", 57);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.viewData);
} }
function GradeReportComponent_ng_template_2_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56)(1, "button", 60);
    i0.ɵɵtext(2, "No List Available!");
    i0.ɵɵelementEnd()();
} }
function GradeReportComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 49)(1, "h4", 50)(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 51)(5, "div", 52)(6, "div", 53);
    i0.ɵɵtemplate(7, GradeReportComponent_ng_template_2_div_7_Template, 2, 1, "div", 54)(8, GradeReportComponent_ng_template_2_div_8_Template, 3, 0, "div", 54);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 55)(10, "button", 23);
    i0.ɵɵlistener("click", function GradeReportComponent_ng_template_2_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(11, "Ok");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.type == 1 ? "Assessment" : "Assignment", " List");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.viewData != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.viewData == "");
} }
function GradeReportComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 61)(1, "h4", 62);
    i0.ɵɵtext(2, "Correction Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 63);
    i0.ɵɵlistener("click", function GradeReportComponent_ng_template_4_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 51);
    i0.ɵɵelement(5, "app-answer-sheet", 64);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("answerShow", true)("contentId", ctx_r1.contentId)("contentFormat", ctx_r1.contentFormat)("is_test", ctx_r1.is_test)("classId", ctx_r1.classId)("studentReportId", ctx_r1.studentId)("backStatus", false)("studentContentId", ctx_r1.studentContentId);
} }
export class GradeReportComponent {
    constructor(auth, report, confi, sanitizer, datePipe, route, commondata, common, teacher, modalService, toastr, validationService, formBuilder, newSubject) {
        this.auth = auth;
        this.report = report;
        this.confi = confi;
        this.sanitizer = sanitizer;
        this.datePipe = datePipe;
        this.route = route;
        this.commondata = commondata;
        this.common = common;
        this.teacher = teacher;
        this.modalService = modalService;
        this.toastr = toastr;
        this.validationService = validationService;
        this.formBuilder = formBuilder;
        this.newSubject = newSubject;
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableSince: { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() + 1 }
        };
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableSince: { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() + 1 },
        };
        this.reportList = [];
        this.dragQuestionsList = [];
        this.zoom = 1.0;
        this.is_test = '0';
        this.assignment = {
            hideSubHeader: false,
            actions: {
                add: false,
                edit: false,
                delete: false,
                position: 'right',
            },
            columns: {
                content_name: {
                    title: 'Assignment Name',
                    type: 'html',
                    valuePrepareFunction: (data) => {
                        return `<span class="text-capitalize font-weight-bold table-name">${data}</span>`;
                    }
                },
                graded: {
                    title: 'Graded'
                },
                absent: {
                    title: 'Absent'
                },
                start_date: {
                    title: 'Assignment Date'
                },
                earned_points: {
                    title: 'Min.Score'
                },
                total_points: {
                    title: 'Max.Score'
                },
                percentage: {
                    title: 'Avg. Score'
                }
            }
        };
        this.assessment = {
            hideSubHeader: false,
            actions: {
                add: false,
                edit: false,
                delete: false,
                position: 'right',
            },
            columns: {
                content_name: {
                    title: 'Assessment Name',
                    type: 'html',
                    valuePrepareFunction: (data) => {
                        return `<span class="text-capitalize font-weight-bold table-name">${data}</span>`;
                    }
                },
                graded: {
                    title: 'Graded'
                },
                absent: {
                    title: 'Absent'
                },
                start_date: {
                    title: 'Assessment Date'
                },
                earned_points: {
                    title: 'Min.Score'
                },
                total_points: {
                    title: 'Max.Score'
                },
                percentage: {
                    title: 'Avg. Score'
                }
            }
        };
        console.log(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.webhost = this.confi.getimgUrl();
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        this.studentReport = this.formBuilder.group({
            className: '',
            fromDate: '',
            toDate: ''
        });
        if (this.schoolStatus.length != 0) {
            this.newSubject.schoolChange.subscribe(params => {
                if (params != '') {
                    if (this.route.url.includes('grade-report')) {
                        this.init(params);
                        this.studentReport.reset();
                        this.studentReport.controls.className.patchValue('');
                    }
                }
                else {
                    this.init(this.auth.getSessionData('school_id'));
                }
            });
        }
    }
    init(res) {
        this.schoolID = res;
        console.log('🏫 Grade Report - Initialized with school_id:', this.schoolID);
        this.classDetails();
        this.reports();
        this.dateCountDetails();
    }
    ngOnInit() {
        this.allowSelect = false;
        this.newSubject.allowSchoolChange(this.allowSelect);
        // Initialize with current school_id
        const currentSchoolId = this.auth.getSessionData('school_id');
        console.log('🏫 Grade Report - ngOnInit with school_id:', currentSchoolId);
        if (currentSchoolId) {
            this.init(currentSchoolId);
        }
    }
    numberValidate(event) {
        this.validationService.numberValidate(event);
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
            console.log(event.target.value, 'in');
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
            const maxDate = new Date().toISOString();
            const min = new Date(event.singleDate.formatted);
            const min1 = new Date(event.singleDate.formatted);
            const validTo = new Date(min.setDate(min.getDate() + (this.dateCount - 1))).toISOString();
            if (maxDate >= validTo) {
                const minToDate = new Date(event.singleDate.formatted);
                const maxToDate1 = new Date(min1.setDate(min1.getDate() + (this.dateCount - 1)));
                this.myDpOptions1 = {
                    dateRange: false,
                    dateFormat: dateOptions.pickerFormat,
                    firstDayOfWeek: 'su',
                    disableUntil: {
                        year: new Date(minToDate).getFullYear(),
                        month: new Date(minToDate).getMonth(),
                        day: new Date(minToDate).getDate()
                    },
                    disableSince: {
                        year: new Date(maxToDate1).getFullYear(),
                        month: new Date(maxToDate1).getMonth() + 1,
                        day: new Date(maxToDate1).getDate()
                    },
                };
                this.from1Date = event.singleDate.formatted && !isNaN(new Date(event.singleDate.formatted).getTime())
                    ? this.datePipe.transform(event.singleDate.formatted, 'yyyy-MM-dd')
                    : '';
                const dObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(maxToDate1) },
                    dateRange: null
                };
                this.studentReport.controls.toDate.patchValue(dObject);
                const toDateValue = this.studentReport.controls.toDate.value?.singleDate?.jsDate;
                this.to1Date = toDateValue && !isNaN(new Date(toDateValue).getTime())
                    ? this.datePipe.transform(toDateValue, 'yyyy-MM-dd')
                    : '';
                this.reports();
            }
            else {
                this.myDpOptions1 = {
                    dateRange: false,
                    dateFormat: dateOptions.pickerFormat,
                    firstDayOfWeek: 'su',
                    disableUntil: {
                        year: event.singleDate.date.year,
                        month: event.singleDate.date.month,
                        day: event.singleDate.date.day - 1
                    },
                    disableSince: {
                        year: new Date().getFullYear(),
                        month: new Date().getMonth() + 1,
                        day: new Date().getDate() + 1
                    },
                };
                this.from1Date = event.singleDate.formatted && !isNaN(new Date(event.singleDate.formatted).getTime())
                    ? this.datePipe.transform(event.singleDate.formatted, 'yyyy-MM-dd')
                    : '';
                const cObject = { isRange: false, singleDate: { jsDate: new Date() }, dateRange: null };
                this.studentReport.controls.toDate.patchValue(cObject);
                const toDateValue = this.studentReport.controls.toDate.value?.singleDate?.jsDate;
                this.to1Date = toDateValue && !isNaN(new Date(toDateValue).getTime())
                    ? this.datePipe.transform(toDateValue, 'yyyy-MM-dd')
                    : '';
                this.reports();
            }
        }
        else {
            if (event.singleDate.formatted != '' && event.singleDate.formatted != null) {
                this.to1Date = !isNaN(new Date(event.singleDate.formatted).getTime())
                    ? this.datePipe.transform(event.singleDate.formatted, 'yyyy-MM-dd')
                    : '';
            }
            else {
                this.to1Date = '';
            }
            this.reports();
        }
    }
    classDetails() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolID || this.auth.getSessionData('school_id'),
            class_code: '',
            from_date: this.from1Date == '' ? '' : this.from1Date,
            to_date: this.to1Date == '' ? '' : this.to1Date,
        };
        console.log('🔍 Grade Report - Calling gradeReport with data:', data);
        this.report.gradeReport(data).subscribe((successData) => {
            this.classDetailsSuccess(successData);
        }, (error) => {
            console.error(error, 'error_classDetails');
        });
    }
    classDetailsSuccess(successData) {
        console.log('📦 Grade Report - gradeReport response:', successData);
        if (successData.IsSuccess) {
            this.classList = successData.ResponseObject;
            console.log('📋 Grade Report - Class list length:', this.classList.length);
        }
    }
    selectClass(event) {
        console.log(event.target.value);
        this.studentReport.controls.className.patchValue(event.target.value);
        this.reports();
        console.log(this.studentReport.controls.className.value, 'classs');
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
            this.reportsSuccess(successData);
        }, (error) => {
            console.error(error, 'error_gradeReport');
        });
    }
    reportsSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.reportList = successData.ResponseObject;
            this.reportList.forEach((items) => {
                items.student_list.forEach((student) => {
                    student.assessment.forEach((assess) => {
                        if (assess.start_date != '00-00-0000' && assess.start_date && !isNaN(new Date(assess.start_date).getTime())) {
                            assess.start_date = this.datePipe.transform(assess.start_date, dateOptions.dateFormat);
                        }
                        else {
                            assess.start_date = '';
                        }
                    });
                    student.assignment.forEach((assign) => {
                        if (assign.start_date != '00-00-0000' && assign.start_date && !isNaN(new Date(assign.start_date).getTime())) {
                            assign.start_date = this.datePipe.transform(assign.start_date, dateOptions.dateFormat);
                        }
                        else {
                            assign.start_date = '';
                        }
                    });
                });
            });
        }
    }
    dateCountDetails() {
        const data = {
            platform: 'web',
        };
        this.report.reportDateCount(data).subscribe((successData) => {
            this.dateCountSuccess(successData);
        }, (error) => {
            console.error(error, 'error');
        });
    }
    dateCountSuccess(successData) {
        if (successData.IsSuccess) {
            this.dateCount = successData.ResponseObject.class_report_days;
            const a = new Date();
            const b = new Date();
            a.setDate(a.getDate() - this.dateCount);
            const aObject = { isRange: false, singleDate: { jsDate: a }, dateRange: null };
            const bObject = { isRange: false, singleDate: { jsDate: b }, dateRange: null };
            this.studentReport.controls.fromDate.patchValue(aObject);
            const aa = this.studentReport.controls.fromDate.value.singleDate.jsDate;
            this.myDpOptions1 = {
                dateRange: false,
                dateFormat: dateOptions.pickerFormat,
                firstDayOfWeek: 'su',
                disableUntil: {
                    year: new Date(aa).getFullYear(),
                    month: new Date(aa).getMonth() + 1,
                    day: new Date(aa).getDate() - 1
                },
            };
            this.studentReport.controls.toDate.patchValue(bObject);
            // Safely transform dates with validation
            const fromDate = this.studentReport.controls.fromDate.value?.singleDate?.jsDate;
            const toDate = this.studentReport.controls.toDate.value?.singleDate?.jsDate;
            this.from1Date = fromDate && !isNaN(new Date(fromDate).getTime())
                ? this.datePipe.transform(fromDate, 'yyyy-MM-dd')
                : '';
            this.to1Date = toDate && !isNaN(new Date(toDate).getTime())
                ? this.datePipe.transform(toDate, 'yyyy-MM-dd')
                : '';
            this.reports();
        }
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
    onSave() {
        this.modalRef.close('viewStudentDetails');
    }
    studentCorrectionDetail(event) {
        console.log(event, 'ccccc');
        this.contentId = event.emitData.content_id;
        this.contentFormat = event.emitData.content_format;
        this.classId = event.emitData.class_id;
        this.studentId = event.emitData.student_id;
        this.studentContentId = event.emitData.student_content_id;
        this.is_test = event.emitData.is_test ?? '0';
        this.modalRef = this.modalService.open(this.viewStudentDetails, { size: 'xl', windowClass: 'answer-sheet' });
    }
    static { this.ɵfac = function GradeReportComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GradeReportComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.ReportService), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i4.DomSanitizer), i0.ɵɵdirectiveInject(i5.DatePipe), i0.ɵɵdirectiveInject(i6.Router), i0.ɵɵdirectiveInject(i7.CommonDataService), i0.ɵɵdirectiveInject(i8.CommonService), i0.ɵɵdirectiveInject(i9.TeacherService), i0.ɵɵdirectiveInject(i10.NgbModal), i0.ɵɵdirectiveInject(i11.ToastrService), i0.ɵɵdirectiveInject(i12.ValidationService), i0.ɵɵdirectiveInject(i13.FormBuilder), i0.ɵɵdirectiveInject(i14.NewsubjectService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GradeReportComponent, selectors: [["app-grade-report"]], viewQuery: function GradeReportComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewStudentDetails = _t.first);
        } }, decls: 6, vars: 2, consts: [["content", ""], ["viewStudentDetails", ""], ["dp", "angular-mydatepicker"], ["dp1", "angular-mydatepicker"], ["accordion", "ngbAccordionItem"], ["uparrow", ""], ["studentAccordion", "ngbAccordionItem"], ["assessmentAccordion", "ngbAccordionItem"], ["assignmentAccordion", "ngbAccordionItem"], ["class", "container-fluid report", 4, "ngIf"], [4, "ngIf"], [1, "container-fluid", "report"], [3, "formGroup"], [1, "row", "mb-2", "mt-4"], [1, "form-group", "col-4"], [1, "col-xl-12", "col-md-12", "px-0", "font-weight-bold"], ["formControlName", "className", 1, "custom-select", "col-md-12", 3, "change"], ["value", "", "hidden", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-xl-12", "col-md-12", "form-group", "px-1"], [1, "input-group"], ["name", "fromdate", "placeholder", "mm/dd/yyyy", "formControlName", "fromDate", "angular-mydatepicker", "", 1, "form-control", 3, "dateChanged", "options"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-calendar-o"], ["name", "todate", "placeholder", "mm/dd/yyyy", "formControlName", "toDate", "angular-mydatepicker", "", 1, "form-control", 3, "dateChanged", "options"], ["class", "row d-flex justify-content-center list-card mt-5", 4, "ngIf"], [3, "value"], [1, "row", "d-flex", "justify-content-center", "list-card", "mt-5"], [1, "col-4"], [1, "nodataList"], ["ngbAccordion", "", "class", "grade mb-2", 4, "ngFor", "ngForOf"], ["ngbAccordion", "", 1, "grade", "mb-2"], [3, "ngbAccordionItem", "collapsed"], ["ngbAccordionHeader", ""], ["ngbAccordionToggle", "", 1, "btn", "btn-link", "d-flex", "align-items-center", "justify-content-between", "p-2", "w-100"], [1, "m-0"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "mr-5"], ["aria-hidden", "true", "class", "fa fa-caret-down", 4, "ngIf", "ngIfElse"], ["ngbAccordionCollapse", ""], ["ngbAccordionBody", ""], ["aria-hidden", "true", 1, "fa", "fa-caret-down"], ["aria-hidden", "true", 1, "fa", "fa-caret-up"], ["ngbAccordion", "", "class", "subject mb-2", 4, "ngFor", "ngForOf"], ["ngbAccordion", "", 1, "subject", "mb-2"], ["ngbAccordion", "", 1, "content", "mb-2"], ["ngbAccordion", "", 1, "content"], [3, "clickValue", "TableType", "TableArray"], [1, "modal-header"], [1, "modal-title", "col-12", "text-center"], [1, "modal-body"], [1, "container-fluid"], [1, "row"], ["class", "col-sm-12", 4, "ngIf"], [1, "modal-footer"], [1, "col-sm-12"], ["class", "d-flex text-center mt-3", 4, "ngFor", "ngForOf"], [1, "d-flex", "text-center", "mt-3"], [1, "ml-3"], [1, "nodataList", "w-50", "ml-5"], [1, "modal-header", "align-items-center"], [1, "modal-title", "font-weight-bold"], [1, "fa", "fa-close", "cursor", 3, "click"], [3, "answerShow", "contentId", "contentFormat", "is_test", "classId", "studentReportId", "backStatus", "studentContentId"]], template: function GradeReportComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, GradeReportComponent_section_0_Template, 32, 6, "section", 9)(1, GradeReportComponent_div_1_Template, 2, 0, "div", 10)(2, GradeReportComponent_ng_template_2_Template, 12, 3, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(4, GradeReportComponent_ng_template_4_Template, 6, 8, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length == 0);
        } }, dependencies: [i5.NgForOf, i5.NgIf, i10.NgbAccordionDirective, i10.NgbAccordionItem, i10.NgbAccordionHeader, i10.NgbAccordionToggle, i10.NgbAccordionBody, i10.NgbAccordionCollapse, i13.ɵNgNoValidate, i13.NgSelectOption, i13.ɵNgSelectMultipleOption, i13.DefaultValueAccessor, i13.SelectControlValueAccessor, i13.NgControlStatus, i13.NgControlStatusGroup, i13.FormGroupDirective, i13.FormControlName, i15.AngularMyDatePickerDirective, i16.TableComponent, i17.EmptyschoolComponent, i18.AnswerSheetComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GradeReportComponent, [{
        type: Component,
        args: [{ selector: 'app-grade-report', template: "<section *ngIf=\"schoolStatus.length != 0\" class=\"container-fluid report\">\n    <form [formGroup]=\"studentReport\">\n        <div class=\"row mb-2 mt-4\">\n            <div class=\"form-group col-4\">\n                <label class=\"col-xl-12 col-md-12 px-0 font-weight-bold\">Filter By</label>\n                <select class=\"custom-select col-md-12\" formControlName=\"className\" (change)=\"selectClass($event)\">\n                    <option value=\"\" hidden>--Select--</option>\n                    <option *ngFor=\"let classData of classList\" [value]=\"classData.class_code\">{{classData.class_name}}</option>\n                </select>\n            </div>\n            <div class=\"form-group col-4\">\n                <label class=\"col-xl-12 col-md-12 px-0 font-weight-bold\">From Date</label>\n                <div class=\"col-xl-12 col-md-12 form-group px-1\">\n                    <div class=\"input-group\">\n                        <input class=\"form-control\" name=\"fromdate\" placeholder=\"mm/dd/yyyy\" [options]=\"myDpOptions\"\n                               formControlName=\"fromDate\" angular-mydatepicker #dp=\"angular-mydatepicker\" (dateChanged)=\"onDateChanged1($event, '1')\">\n                        <div class=\"input-group-append\">\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp.toggleCalendar()\">\n                                <i class=\"fa fa-calendar-o\"></i>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group col-4\">\n                <label class=\"col-xl-12 col-md-12 px-0 font-weight-bold\">To Date</label>\n                <div class=\"col-xl-12 col-md-12 form-group px-1\">\n                    <div class=\"input-group\">\n                        <input class=\"form-control\" name=\"todate\" placeholder=\"mm/dd/yyyy\"\n                               formControlName=\"toDate\" angular-mydatepicker #dp1=\"angular-mydatepicker\" [options]=\"myDpOptions1\" (dateChanged)=\"onDateChanged1($event, '2')\"/>\n                        <div class=\"input-group-append\">\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp1.toggleCalendar()\">\n                                <i class=\"fa fa-calendar-o\"></i>\n                            </button>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n    <div class=\"row d-flex justify-content-center list-card mt-5\" *ngIf=\"reportList.length == 0\">\n        <div class=\"col-4\">\n            <button class=\"nodataList\">No Data Available!</button>\n        </div>\n    </div>\n    <div *ngIf=\"reportList.length != 0\">\n        <div ngbAccordion *ngFor=\"let classData of reportList; let classIndex = index; let first = first\" class=\"grade mb-2\">\n            <div ngbAccordionItem=\"{{classIndex}}\" #accordion=\"ngbAccordionItem\" [collapsed]=\"!first\">\n                <h2 ngbAccordionHeader>\n                    <button class=\"btn btn-link d-flex align-items-center justify-content-between p-2 w-100\"\n                            ngbAccordionToggle>\n                        <h4 class=\"m-0\">{{classData.class_name}} </h4>\n                        <div class=\"d-flex align-items-center justify-content-between\">\n                            <h4 class=\"mb-0 mr-5\">Avg% = {{classData.class_percentage}}</h4>\n                            <i *ngIf=\"accordion.collapsed; else uparrow\" aria-hidden=\"true\" class=\"fa fa-caret-down\"></i>\n                        </div>\n                        <ng-template #uparrow><i aria-hidden=\"true\" class=\"fa fa-caret-up\"></i></ng-template>\n                    </button>\n                </h2>\n                <div ngbAccordionCollapse>\n                    <div ngbAccordionBody>\n                        <ng-template>\n                            <div ngbAccordion *ngFor=\"let student of classData.student_list; let studentIndex = index; let first = first\" class=\"subject mb-2\">\n                                <div ngbAccordionItem=\"{{studentIndex}}\" #studentAccordion=\"ngbAccordionItem\" [collapsed]=\"!first\">\n                                    <h2 ngbAccordionHeader>\n                                        <button class=\"btn btn-link d-flex align-items-center justify-content-between p-2 w-100\"\n                                                ngbAccordionToggle>\n                                            <h4 class=\"m-0\">{{student?.student_name}} </h4>\n                                            <div class=\"d-flex align-items-center justify-content-between\">\n                                                <i *ngIf=\"studentAccordion.collapsed; else uparrow\" aria-hidden=\"true\" class=\"fa fa-caret-down\"></i>\n                                            </div>\n                                            <ng-template #uparrow><i aria-hidden=\"true\" class=\"fa fa-caret-up\"></i></ng-template>\n                                        </button>\n                                    </h2>\n                                    <div ngbAccordionCollapse>\n                                        <div ngbAccordionBody>\n                                            <ng-template>\n                                                <div ngbAccordion class=\"content mb-2\">\n                                                    <div ngbAccordionItem=\"{{studentIndex}} + 'assessment'\" #assessmentAccordion=\"ngbAccordionItem\" [collapsed]=\"true\">\n                                                        <h2 ngbAccordionHeader>\n                                                            <button class=\"btn btn-link d-flex align-items-center justify-content-between p-2 w-100\"\n                                                                    ngbAccordionToggle>\n                                                                <h4 class=\"m-0\">ASSESSMENT</h4>\n                                                                <div class=\"d-flex align-items-center justify-content-between\">\n                                                                    <h4 class=\"mb-0 mr-5\">Avg% = {{student.assessment_percentage}}</h4>\n                                                                    <i *ngIf=\"assessmentAccordion.collapsed; else uparrow\" aria-hidden=\"true\" class=\"fa fa-caret-down\"></i>\n                                                                </div>\n                                                                <ng-template #uparrow><i aria-hidden=\"true\" class=\"fa fa-caret-up\"></i></ng-template>\n                                                            </button>\n                                                        </h2>\n                                                        <div ngbAccordionCollapse>\n                                                            <div ngbAccordionBody>\n                                                                <ng-template>\n                                                                    <app-table [TableType]=\"'Assessment'\" [TableArray]=\"student.assessment\" (clickValue)=\"studentCorrectionDetail($event)\"></app-table>\n                                                                </ng-template>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                                <div ngbAccordion class=\"content\">\n                                                    <div ngbAccordionItem=\"{{studentIndex}} + 'assignment'\" #assignmentAccordion=\"ngbAccordionItem\" [collapsed]=\"true\">\n                                                        <h2 ngbAccordionHeader>\n                                                            <button class=\"btn btn-link d-flex align-items-center justify-content-between p-2 w-100\"\n                                                                    ngbAccordionToggle>\n                                                                <h4 class=\"m-0\">ASSIGNMENT</h4>\n                                                                <div class=\"d-flex align-items-center justify-content-between\">\n                                                                    <h4 class=\"mb-0 mr-5\">Avg% = {{student.assignment_percentage}}</h4>\n                                                                    <i *ngIf=\"assignmentAccordion.collapsed; else uparrow\" aria-hidden=\"true\" class=\"fa fa-caret-down\"></i>\n                                                                </div>\n                                                                <ng-template #uparrow><i aria-hidden=\"true\" class=\"fa fa-caret-up\"></i></ng-template>\n                                                            </button>\n                                                        </h2>\n                                                        <div ngbAccordionCollapse>\n                                                            <div ngbAccordionBody>\n                                                                <ng-template>\n                                                                    <app-table [TableType]=\"'Assignment'\" [TableArray]=\"student.assignment\" (clickValue)=\"studentCorrectionDetail($event)\" ></app-table>\n                                                                </ng-template>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </ng-template>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<div *ngIf=\"schoolStatus.length == 0\">\n    <app-emptyschool>\n    </app-emptyschool>\n</div>\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title col-12 text-center\"><b>{{type == 1 ? 'Assessment' : 'Assignment'}} List</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\" *ngIf=\"viewData != ''\">\n                    <div class=\"d-flex text-center mt-3\" *ngFor=\"let classData of viewData; let i = index\">\n                        <label class=\"ml-3\">{{i + 1}}.</label>\n                        <label class=\"ml-3\">ContentName : {{classData.content_name}}</label>\n                        <label class=\"ml-3\">Percentage : {{classData.percentage}}</label>\n                    </div>\n                </div>\n                <div class=\"col-sm-12\" *ngIf=\"viewData == ''\">\n                    <button class=\"nodataList w-50 ml-5\">No List Available!</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"close()\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #viewStudentDetails let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title font-weight-bold\">Correction Details</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"onSave()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <app-answer-sheet [answerShow]=\"true\" [contentId]=\"contentId\" [contentFormat]=\"contentFormat\" [is_test]=\"is_test\"\n                          [classId]=\"classId\" [studentReportId]=\"studentId\" [backStatus]=\"false\" [studentContentId]=\"studentContentId\" ></app-answer-sheet>\n    </div>\n</ng-template>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.ReportService }, { type: i3.ConfigurationService }, { type: i4.DomSanitizer }, { type: i5.DatePipe }, { type: i6.Router }, { type: i7.CommonDataService }, { type: i8.CommonService }, { type: i9.TeacherService }, { type: i10.NgbModal }, { type: i11.ToastrService }, { type: i12.ValidationService }, { type: i13.FormBuilder }, { type: i14.NewsubjectService }], { viewContent: [{
            type: ViewChild,
            args: ['content']
        }], viewStudentDetails: [{
            type: ViewChild,
            args: ['viewStudentDetails']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GradeReportComponent, { className: "GradeReportComponent" }); })();
//# sourceMappingURL=grade-report.component.js.map