import { Component, ViewChild } from '@angular/core';
import { parse } from 'flatted';
import { dateOptions } from "../../../shared/data/config";
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/student.service";
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
import * as i13 from "../../../environment.service";
import * as i14 from "../../../shared/service/newsubject.service";
import * as i15 from "../../../shared/service/common.service";
import * as i16 from "@nodro7/angular-mydatepicker";
import * as i17 from "../../auth/table/table.component";
import * as i18 from "../answer-sheet/answer-sheet.component";
const _c0 = ["content"];
const _c1 = ["viewStudentDetails"];
function ReportsComponent_select_6_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r4 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", list_r4.grade_id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(list_r4.grade_name);
} }
function ReportsComponent_select_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 26);
    i0.ɵɵlistener("change", function ReportsComponent_select_6_Template_select_change_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.changeGrade($event)); });
    i0.ɵɵtemplate(1, ReportsComponent_select_6_option_1_Template, 2, 2, "option", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.studentGradeList);
} }
function ReportsComponent_select_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "select", 29)(1, "option", 30);
    i0.ɵɵtext(2, "No Grade Found");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("selected", true);
} }
function ReportsComponent_div_28_div_1_i_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 42);
} }
function ReportsComponent_div_28_div_1_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 43);
} }
function ReportsComponent_div_28_div_1_ng_template_15_div_0_i_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 42);
} }
function ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 43);
} }
function ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_div_1_i_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 42);
} }
function ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_div_1_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 43);
} }
function ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_div_1_ng_template_15_i_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 42);
} }
function ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_div_1_ng_template_15_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 43);
} }
function ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_div_1_ng_template_15_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-table", 50);
    i0.ɵɵlistener("clickValue", function ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_div_1_ng_template_15_ng_template_15_Template_app_table_clickValue_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(9); return i0.ɵɵresetView(ctx_r2.studentCorrectionDetail($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const classData_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("TableType", "Assessment")("TableArray", classData_r8.assessment);
} }
function ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_div_1_ng_template_15_i_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 42);
} }
function ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_div_1_ng_template_15_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 43);
} }
function ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_div_1_ng_template_15_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-table", 50);
    i0.ɵɵlistener("clickValue", function ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_div_1_ng_template_15_ng_template_31_Template_app_table_clickValue_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(9); return i0.ɵɵresetView(ctx_r2.studentCorrectionDetail($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const classData_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("TableType", "Assignment")("TableArray", classData_r8.assignment);
} }
function ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_div_1_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48)(1, "div", 33, 8)(3, "h2", 34)(4, "button", 35)(5, "h4", 36);
    i0.ɵɵtext(6, "ASSESSMENT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 37)(8, "h4", 38);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_div_1_ng_template_15_i_10_Template, 1, 0, "i", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_div_1_ng_template_15_ng_template_11_Template, 1, 0, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 40)(14, "div", 41);
    i0.ɵɵtemplate(15, ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_div_1_ng_template_15_ng_template_15_Template, 1, 2, "ng-template");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(16, "div", 49)(17, "div", 33, 9)(19, "h2", 34)(20, "button", 35)(21, "h4", 36);
    i0.ɵɵtext(22, "ASSIGNMENT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 37)(24, "h4", 38);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(26, ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_div_1_ng_template_15_i_26_Template, 1, 0, "i", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(27, ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_div_1_ng_template_15_ng_template_27_Template, 1, 0, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 40)(30, "div", 41);
    i0.ɵɵtemplate(31, ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_div_1_ng_template_15_ng_template_31_Template, 1, 2, "ng-template");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const assessmentAccordion_r10 = i0.ɵɵreference(2);
    const uparrow_r11 = i0.ɵɵreference(12);
    const assignmentAccordion_r12 = i0.ɵɵreference(18);
    const ctx_r12 = i0.ɵɵnextContext();
    const classData_r8 = ctx_r12.$implicit;
    const classIndex_r14 = ctx_r12.index;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("ngbAccordionItem", classIndex_r14);
    i0.ɵɵproperty("collapsed", true);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("Avg% = ", classData_r8.assessment_percentage, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", assessmentAccordion_r10.collapsed)("ngIfElse", uparrow_r11);
    i0.ɵɵadvance(7);
    i0.ɵɵpropertyInterpolate("ngbAccordionItem", classIndex_r14);
    i0.ɵɵproperty("collapsed", true);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("Avg% = ", classData_r8.assignment_percentage, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", assignmentAccordion_r12.collapsed)("ngIfElse", uparrow_r11);
} }
function ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div", 33, 7)(3, "h2", 34)(4, "button", 35)(5, "h4", 36);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 37)(8, "h4", 38);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_div_1_i_10_Template, 1, 0, "i", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_div_1_ng_template_11_Template, 1, 0, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 40)(14, "div", 41);
    i0.ɵɵtemplate(15, ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_div_1_ng_template_15_Template, 32, 10, "ng-template");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const classData_r8 = ctx.$implicit;
    const classIndex_r14 = ctx.index;
    const first_r15 = ctx.first;
    const classAccordion_r16 = i0.ɵɵreference(2);
    const uparrow_r17 = i0.ɵɵreference(12);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("ngbAccordionItem", classIndex_r14);
    i0.ɵɵproperty("collapsed", !first_r15);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", classData_r8.class_name, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Avg% = ", classData_r8.class_percentage, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", classAccordion_r16.collapsed)("ngIfElse", uparrow_r17);
} }
function ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_div_1_Template, 16, 6, "div", 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subject_r18 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", subject_r18.classes);
} }
function ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51)(1, "div", 52)(2, "button", 53);
    i0.ɵɵtext(3, "No Class Available!");
    i0.ɵɵelementEnd()()();
} }
function ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_0_Template, 2, 1, "div", 24)(1, ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_div_1_Template, 4, 0, "div", 25);
} if (rf & 2) {
    const subject_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngIf", subject_r18.classes.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", subject_r18.classes.length == 0);
} }
function ReportsComponent_div_28_div_1_ng_template_15_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45)(1, "div", 33, 6)(3, "h2", 34)(4, "button", 35)(5, "h4", 36);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 37)(8, "h4", 38);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, ReportsComponent_div_28_div_1_ng_template_15_div_0_i_10_Template, 1, 0, "i", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_11_Template, 1, 0, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 40)(14, "div", 41);
    i0.ɵɵtemplate(15, ReportsComponent_div_28_div_1_ng_template_15_div_0_ng_template_15_Template, 2, 2, "ng-template");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const subject_r18 = ctx.$implicit;
    const subjectIndex_r19 = ctx.index;
    const first_r20 = ctx.first;
    const subjectAccordion_r21 = i0.ɵɵreference(2);
    const uparrow_r22 = i0.ɵɵreference(12);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("ngbAccordionItem", subjectIndex_r19);
    i0.ɵɵproperty("collapsed", !first_r20);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", subject_r18.subject_name, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Avg% = ", subject_r18.classes.length != 0 ? subject_r18.percentage : "0%", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", subjectAccordion_r21.collapsed)("ngIfElse", uparrow_r22);
} }
function ReportsComponent_div_28_div_1_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ReportsComponent_div_28_div_1_ng_template_15_div_0_Template, 16, 6, "div", 44);
} if (rf & 2) {
    const list_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngForOf", list_r23.subjects);
} }
function ReportsComponent_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "div", 33, 4)(3, "h2", 34)(4, "button", 35)(5, "h4", 36);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 37)(8, "h4", 38);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, ReportsComponent_div_28_div_1_i_10_Template, 1, 0, "i", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, ReportsComponent_div_28_div_1_ng_template_11_Template, 1, 0, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 40)(14, "div", 41);
    i0.ɵɵtemplate(15, ReportsComponent_div_28_div_1_ng_template_15_Template, 1, 1, "ng-template");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const list_r23 = ctx.$implicit;
    const gradeIndex_r24 = ctx.index;
    const accordion_r25 = i0.ɵɵreference(2);
    const uparrow_r26 = i0.ɵɵreference(12);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("ngbAccordionItem", gradeIndex_r24);
    i0.ɵɵproperty("collapsed", false);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Grade - ", list_r23.grade_name, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Avg% = ", list_r23.percentage, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", accordion_r25.collapsed)("ngIfElse", uparrow_r26);
} }
function ReportsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ReportsComponent_div_28_div_1_Template, 16, 6, "div", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.reportList);
} }
function ReportsComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51)(1, "div", 52)(2, "button", 53);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function ReportsComponent_ng_template_30_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 64)(1, "label", 65);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 65);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "label", 65);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const classData_r28 = ctx.$implicit;
    const i_r29 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i_r29 + 1, ".");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("ContentName : ", classData_r28.content_name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Percentage : ", classData_r28.percentage, "");
} }
function ReportsComponent_ng_template_30_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62);
    i0.ɵɵtemplate(1, ReportsComponent_ng_template_30_div_7_div_1_Template, 7, 3, "div", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.viewData);
} }
function ReportsComponent_ng_template_30_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62)(1, "button", 66);
    i0.ɵɵtext(2, "No List Available!");
    i0.ɵɵelementEnd()();
} }
function ReportsComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 54)(1, "h4", 55)(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 56)(5, "div", 57)(6, "div", 58);
    i0.ɵɵtemplate(7, ReportsComponent_ng_template_30_div_7_Template, 2, 1, "div", 59)(8, ReportsComponent_ng_template_30_div_8_Template, 3, 0, "div", 59);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 60)(10, "button", 61);
    i0.ɵɵlistener("click", function ReportsComponent_ng_template_30_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r27); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵtext(11, "Ok");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r2.type == 1 ? "Assessment" : "Assignment", " List");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r2.viewData != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewData == "");
} }
function ReportsComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 54)(1, "h4", 67);
    i0.ɵɵtext(2, "Correction Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 68);
    i0.ɵɵlistener("click", function ReportsComponent_ng_template_32_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r30); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 56);
    i0.ɵɵelement(5, "app-answer-sheet", 69);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("answerShow", true)("contentId", ctx_r2.contentId)("contentFormat", ctx_r2.contentFormat)("is_test", ctx_r2.is_test)("classId", ctx_r2.classId)("studentReportId", ctx_r2.studentId)("backStatus", false)("studentContentId", ctx_r2.studentContentId);
} }
export class ReportsComponent {
    constructor(auth, student, confi, sanitizer, datePipe, route, commondata, teacher, modalService, toastr, validationService, formBuilder, env, newSubject, common) {
        this.auth = auth;
        this.student = student;
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
        this.env = env;
        this.newSubject = newSubject;
        this.common = common;
        this.reportList = [];
        this.currentGrade = '';
        this.dragQuestionsList = [];
        this.studentGradeList = [];
        this.from1Date = '';
        this.to1Date = '';
        this.zoom = 1.0;
        this.DpOptions = {
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su'
        };
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
                    title: 'Answered'
                },
                absent: {
                    title: 'Absent'
                },
                start_date: {
                    title: 'Assignment Date',
                    valuePrepareFunction: (data) => {
                        if (data != '00-00-0000') {
                            return data;
                        }
                        else {
                        }
                    }
                },
                your_score: {
                    title: 'Min.Score'
                },
                total_score: {
                    title: 'Max.Score'
                },
                percentage: {
                    title: 'Percentage Score'
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
                    title: 'Answered'
                },
                absent: {
                    title: 'Absent'
                },
                start_date: {
                    title: 'Assessment Date',
                    valuePrepareFunction: (data) => {
                        if (data != '00-00-0000') {
                            return data;
                        }
                        else {
                        }
                    }
                },
                your_score: {
                    title: 'Min.Score'
                },
                total_score: {
                    title: 'Max.Score'
                },
                percentage: {
                    title: 'Percentage Score'
                }
            }
        };
        this.webhost = this.confi.getimgUrl();
        this.studentReport = this.formBuilder.group({
            grade: '',
            fromDate: '',
            toDate: ''
        });
        // this.gradeList();
        this.newSubject.schoolChange.subscribe(params => {
            if (params != '') {
                if (this.route.url.includes('reports')) {
                    this.init(params);
                }
            }
            else {
                this.init(this.auth.getSessionData('school_id'));
            }
        });
    }
    ngOnInit() {
        this.allowSelect = false;
        this.newSubject.allowSchoolChange(this.allowSelect);
    }
    ngOnDestroy() {
        // this.close();
    }
    init(data) {
        this.gradeList();
        this.studentReport.controls.fromDate.patchValue('');
        this.studentReport.controls.toDate.patchValue('');
        // this.reports();
    }
    numberValidate(event) {
        this.validationService.numberValidate(event);
    }
    markValidation(event, high, i, j) {
        const val = parseFloat(event.target.value);
        const pt = parseFloat(high);
        if (val > pt) {
            this.totalAns[i].section[j].maxValErr = true;
        }
        else {
            this.totalAns[i].section[j].maxValErr = false;
        }
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
            const graph = parse(val);
            return graph;
        }
        else {
            const graph = false;
            return graph;
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
    changeGrade(event) {
        this.currentGrade = event.target.value;
        this.reports();
    }
    gradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
        };
        this.student.studentGradeList(data).subscribe((successData) => {
            this.gradeSuccess(successData);
        }, (error) => {
            console.log(error);
        });
    }
    gradeSuccess(successData) {
        if (successData.IsSuccess) {
            this.studentGradeList = successData.ResponseObject;
            if (this.studentGradeList.length != 0) {
                this.currentGrade = this.studentGradeList[0].grade_id;
                this.studentReport.controls.grade.patchValue(this.currentGrade);
                this.reports();
            }
            else {
                this.reportList = [];
            }
        }
    }
    reports() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            grade_id: this.currentGrade,
            from_date: this.from1Date == '' ? '' : this.datePipe.transform(this.from1Date, 'yyyy-MM-dd'),
            to_date: this.to1Date == '' ? '' : this.datePipe.transform(this.to1Date, 'yyyy-MM-dd'),
        };
        console.log(data, 'data');
        this.student.getReports(data).subscribe((successData) => {
            this.reportsSuccess(successData);
        }, (error) => {
            this.reportsFailure(error);
        });
    }
    reportsSuccess(successData) {
        if (successData.IsSuccess) {
            this.reportList = successData.ResponseObject;
        }
    }
    reportsFailure(error) {
        console.log(error, 'error');
    }
    add() {
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
        console.log(event.emitData, 'ccccc');
        this.contentId = event.emitData.content_id;
        this.contentFormat = event.emitData.content_format;
        this.classId = event.emitData.class_id;
        this.studentId = event.emitData.student_id;
        this.studentContentId = event.emitData.student_content_id;
        this.is_test = event.is_test ?? '0';
        if (this.env.deviceType()) {
            this.modalRef = this.modalService.open(this.viewStudentDetails, {
                size: 'xl',
                windowClass: 'report-card-web'
            });
        }
        else {
            this.modalRef = this.modalService.open(this.viewStudentDetails, { size: 'xl' });
        }
    }
    static { this.ɵfac = function ReportsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ReportsComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.StudentService), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i4.DomSanitizer), i0.ɵɵdirectiveInject(i5.DatePipe), i0.ɵɵdirectiveInject(i6.Router), i0.ɵɵdirectiveInject(i7.CommonDataService), i0.ɵɵdirectiveInject(i8.TeacherService), i0.ɵɵdirectiveInject(i9.NgbModal), i0.ɵɵdirectiveInject(i10.ToastrService), i0.ɵɵdirectiveInject(i11.ValidationService), i0.ɵɵdirectiveInject(i12.FormBuilder), i0.ɵɵdirectiveInject(i13.EnvironmentService), i0.ɵɵdirectiveInject(i14.NewsubjectService), i0.ɵɵdirectiveInject(i15.CommonService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ReportsComponent, selectors: [["app-assessment"]], viewQuery: function ReportsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewStudentDetails = _t.first);
        } }, decls: 34, vars: 13, consts: [["dp", "angular-mydatepicker"], ["dp1", "angular-mydatepicker"], ["content", ""], ["viewStudentDetails", ""], ["accordion", "ngbAccordionItem"], ["uparrow", ""], ["subjectAccordion", "ngbAccordionItem"], ["classAccordion", "ngbAccordionItem"], ["assessmentAccordion", "ngbAccordionItem"], ["assignmentAccordion", "ngbAccordionItem"], [1, "container-fluid", "report"], [3, "formGroup"], [1, "row", "mb-2", "mt-4"], [1, "form-group", "col-4"], [1, "col-xl-12", "col-md-12", "px-0"], ["class", "custom-select col-md-12", "formControlName", "grade", 3, "change", 4, "ngIf"], ["class", "custom-select col-md-12", "formControlName", "grade", 4, "ngIf"], [1, "col-xl-12", "col-md-12", "form-group", "px-0"], [1, "input-group"], ["name", "fromdate", "placeholder", "MM/dd/yyyy", "formControlName", "fromDate", "angular-mydatepicker", "", 1, "form-control", 3, "dateChanged", "options"], [1, "input-group-append"], ["type", "button", 3, "click"], [1, "fa", "fa-calendar-o"], ["name", "todate", "placeholder", "MM/dd/yyyy", "formControlName", "toDate", "angular-mydatepicker", "", 1, "form-control", 3, "dateChanged", "options"], [4, "ngIf"], ["class", "row d-flex justify-content-center", 4, "ngIf"], ["formControlName", "grade", 1, "custom-select", "col-md-12", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "grade", 1, "custom-select", "col-md-12"], ["disabled", "", "value", "''", 3, "selected"], ["ngbAccordion", "", "class", "grade", 4, "ngFor", "ngForOf"], ["ngbAccordion", "", 1, "grade"], [3, "ngbAccordionItem", "collapsed"], ["ngbAccordionHeader", ""], ["ngbAccordionToggle", "", 1, "btn", "btn-link", "d-flex", "align-items-center", "justify-content-between", "p-2", "w-100"], [1, "m-0"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "mr-5"], ["aria-hidden", "true", "class", "fa fa-caret-down", 4, "ngIf", "ngIfElse"], ["ngbAccordionCollapse", ""], ["ngbAccordionBody", ""], ["aria-hidden", "true", 1, "fa", "fa-caret-down"], ["aria-hidden", "true", 1, "fa", "fa-caret-up"], ["ngbAccordion", "", "class", "subject mb-2", 4, "ngFor", "ngForOf"], ["ngbAccordion", "", 1, "subject", "mb-2"], ["ngbAccordion", "", "class", "class", 4, "ngFor", "ngForOf"], ["ngbAccordion", "", 1, "class"], ["ngbAccordion", "", 1, "content", "mb-2"], ["ngbAccordion", "", 1, "content"], [3, "clickValue", "TableType", "TableArray"], [1, "row", "d-flex", "justify-content-center"], [1, "col-4"], [1, "nodataList"], [1, "modal-header", "align-items-center"], [1, "modal-title", "col-12", "text-center"], [1, "modal-body"], [1, "container-fluid"], [1, "row"], ["class", "col-sm-12", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "col-sm-12"], ["class", "d-flex text-center mt-3", 4, "ngFor", "ngForOf"], [1, "d-flex", "text-center", "mt-3"], [1, "ml-3"], [1, "nodataList", "w-50", "ml-5"], [1, "modal-title"], [1, "fa", "fa-close", "cursor", 3, "click"], [3, "answerShow", "contentId", "contentFormat", "is_test", "classId", "studentReportId", "backStatus", "studentContentId"]], template: function ReportsComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "section", 10)(1, "form", 11)(2, "div", 12)(3, "div", 13)(4, "label", 14);
            i0.ɵɵtext(5, "Grade Filter");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, ReportsComponent_select_6_Template, 2, 1, "select", 15)(7, ReportsComponent_select_7_Template, 3, 1, "select", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 13)(9, "label", 14);
            i0.ɵɵtext(10, "From Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 17)(12, "div", 18)(13, "input", 19, 0);
            i0.ɵɵlistener("dateChanged", function ReportsComponent_Template_input_dateChanged_13_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDateChanged1($event, "1")); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 20)(16, "button", 21);
            i0.ɵɵlistener("click", function ReportsComponent_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r1); const dp_r5 = i0.ɵɵreference(14); return i0.ɵɵresetView(dp_r5.toggleCalendar()); });
            i0.ɵɵelement(17, "i", 22);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(18, "div", 13)(19, "label", 14);
            i0.ɵɵtext(20, "To Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div", 17)(22, "div", 18)(23, "input", 23, 1);
            i0.ɵɵlistener("dateChanged", function ReportsComponent_Template_input_dateChanged_23_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDateChanged1($event, "2")); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div", 20)(26, "button", 21);
            i0.ɵɵlistener("click", function ReportsComponent_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r1); const dp1_r6 = i0.ɵɵreference(24); return i0.ɵɵresetView(dp1_r6.toggleCalendar()); });
            i0.ɵɵelement(27, "i", 22);
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵtemplate(28, ReportsComponent_div_28_Template, 2, 1, "div", 24)(29, ReportsComponent_div_29_Template, 4, 0, "div", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(30, ReportsComponent_ng_template_30_Template, 12, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(32, ReportsComponent_ng_template_32_Template, 6, 8, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.studentReport);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.studentGradeList.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.studentGradeList.length == 0);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("options", ctx.DpOptions);
            i0.ɵɵadvance(3);
            i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx.env.deviceType() ? "py-0 border-radius-2" : "", "");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("options", ctx.myDpOptions);
            i0.ɵɵadvance(3);
            i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx.env.deviceType() ? "py-0 border-radius-2" : "", "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.reportList.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.reportList.length == 0);
        } }, dependencies: [i5.NgForOf, i5.NgIf, i9.NgbAccordionDirective, i9.NgbAccordionItem, i9.NgbAccordionHeader, i9.NgbAccordionToggle, i9.NgbAccordionBody, i9.NgbAccordionCollapse, i12.ɵNgNoValidate, i12.NgSelectOption, i12.ɵNgSelectMultipleOption, i12.DefaultValueAccessor, i12.SelectControlValueAccessor, i12.NgControlStatus, i12.NgControlStatusGroup, i12.FormGroupDirective, i12.FormControlName, i16.AngularMyDatePickerDirective, i17.TableComponent, i18.AnswerSheetComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReportsComponent, [{
        type: Component,
        args: [{ selector: 'app-assessment', template: "<section class=\" container-fluid report\">\n    <form [formGroup]=\"studentReport\">\n    <div class=\"row mb-2 mt-4\">\n        <div class=\"form-group col-4\">\n            <label class=\"col-xl-12 col-md-12 px-0\">Grade Filter</label>\n            <select (change)=\"changeGrade($event)\" *ngIf=\"studentGradeList.length != 0\" class=\"custom-select col-md-12\" formControlName=\"grade\">\n                <option *ngFor=\"let list of studentGradeList\" value=\"{{list.grade_id}}\">{{list.grade_name}}</option>\n            </select>\n            <select *ngIf=\"studentGradeList.length == 0\" class=\"custom-select col-md-12\" formControlName=\"grade\">\n                <option [selected]=\"true\" disabled value=\"''\">No Grade Found</option>\n            </select>\n        </div>\n        <div class=\"form-group col-4\">\n            <label class=\"col-xl-12 col-md-12 px-0\">From Date</label>\n            <div class=\"col-xl-12 col-md-12 form-group px-0\">\n                <div class=\"input-group\">\n                    <input class=\"form-control\" name=\"fromdate\" placeholder=\"MM/dd/yyyy\"\n                           formControlName=\"fromDate\" angular-mydatepicker #dp=\"angular-mydatepicker\" [options]=\"DpOptions\" (dateChanged)=\"onDateChanged1($event, '1')\">\n                    <div class=\"input-group-append\">\n                        <button type=\"button\" class=\"btn btn-primary {{env.deviceType() ? 'py-0 border-radius-2' : ''}}\" (click)=\"dp.toggleCalendar()\">\n                            <i class=\"fa fa-calendar-o\"></i>\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group col-4\">\n            <label class=\"col-xl-12 col-md-12 px-0\">To Date</label>\n            <div class=\"col-xl-12 col-md-12 form-group px-0\">\n                <div class=\"input-group\">\n                    <input class=\"form-control\" name=\"todate\" placeholder=\"MM/dd/yyyy\"\n                           formControlName=\"toDate\" angular-mydatepicker #dp1=\"angular-mydatepicker\" [options]=\"myDpOptions\" (dateChanged)=\"onDateChanged1($event, '2')\"/>\n                    <div class=\"input-group-append\">\n                        <button type=\"button\" class=\"btn btn-primary {{env.deviceType() ? 'py-0 border-radius-2' : ''}}\" (click)=\"dp1.toggleCalendar()\">\n                            <i class=\"fa fa-calendar-o\"></i>\n                        </button>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    </form>\n    <div *ngIf=\"reportList.length != 0\">\n        <div ngbAccordion *ngFor=\"let list of reportList; let gradeIndex = index\" class=\"grade\">\n            <div ngbAccordionItem=\"{{gradeIndex}}\" #accordion=\"ngbAccordionItem\" [collapsed]=\"false\">\n                <h2 ngbAccordionHeader>\n                    <button class=\"btn btn-link d-flex align-items-center justify-content-between p-2 w-100\"\n                            ngbAccordionToggle>\n                        <h4 class=\"m-0\">Grade - {{list.grade_name}} </h4>\n                        <div class=\"d-flex align-items-center justify-content-between\">\n                            <h4 class=\"mb-0 mr-5\">Avg% = {{list.percentage}}</h4>\n                            <i *ngIf=\"accordion.collapsed; else uparrow\" aria-hidden=\"true\" class=\"fa fa-caret-down\"></i>\n                        </div>\n                        <ng-template #uparrow><i aria-hidden=\"true\" class=\"fa fa-caret-up\"></i></ng-template>\n                    </button>\n                </h2>\n                <div ngbAccordionCollapse>\n                    <div ngbAccordionBody>\n                        <ng-template>\n                            <div ngbAccordion *ngFor=\"let subject of list.subjects; let subjectIndex = index; let first = first\" class=\"subject mb-2\">\n                                <div ngbAccordionItem=\"{{subjectIndex}}\" #subjectAccordion=\"ngbAccordionItem\" [collapsed]=\"!first\">\n                                    <h2 ngbAccordionHeader>\n                                        <button class=\"btn btn-link d-flex align-items-center justify-content-between p-2 w-100\"\n                                                ngbAccordionToggle>\n                                            <h4 class=\"m-0\">{{subject.subject_name}} </h4>\n                                            <div class=\"d-flex align-items-center justify-content-between\">\n                                                <h4 class=\"mb-0 mr-5\">Avg% = {{subject.classes.length != 0 ? subject.percentage : '0%'}}</h4>\n                                                <i *ngIf=\"subjectAccordion.collapsed; else uparrow\" aria-hidden=\"true\" class=\"fa fa-caret-down\"></i>\n                                            </div>\n                                            <ng-template #uparrow><i aria-hidden=\"true\" class=\"fa fa-caret-up\"></i></ng-template>\n                                        </button>\n                                    </h2>\n                                    <div ngbAccordionCollapse>\n                                        <div ngbAccordionBody>\n                                            <ng-template>\n                                                <div *ngIf=\"subject.classes.length != 0\">\n                                                    <div ngbAccordion *ngFor=\"let classData of subject.classes; let classIndex = index; let first = first\" class=\"class\">\n                                                        <div ngbAccordionItem=\"{{classIndex}}\" #classAccordion=\"ngbAccordionItem\" [collapsed]=\"!first\">\n                                                            <h2 ngbAccordionHeader>\n                                                                <button class=\"btn btn-link d-flex align-items-center justify-content-between p-2 w-100\"\n                                                                        ngbAccordionToggle>\n                                                                    <h4 class=\"m-0\">{{classData.class_name}} </h4>\n                                                                    <div class=\"d-flex align-items-center justify-content-between\">\n                                                                        <h4 class=\"mb-0 mr-5\">Avg% = {{classData.class_percentage}}</h4>\n                                                                        <i *ngIf=\"classAccordion.collapsed; else uparrow\" aria-hidden=\"true\" class=\"fa fa-caret-down\"></i>\n                                                                    </div>\n                                                                    <ng-template #uparrow><i aria-hidden=\"true\" class=\"fa fa-caret-up\"></i></ng-template>\n                                                                </button>\n                                                            </h2>\n                                                            <div ngbAccordionCollapse>\n                                                                <div ngbAccordionBody>\n                                                                    <ng-template>\n                                                                        <div ngbAccordion class=\"content mb-2\">\n                                                                            <div ngbAccordionItem=\"{{classIndex}}\" #assessmentAccordion=\"ngbAccordionItem\" [collapsed]=\"true\">\n                                                                                <h2 ngbAccordionHeader>\n                                                                                    <button class=\"btn btn-link d-flex align-items-center justify-content-between p-2 w-100\"\n                                                                                            ngbAccordionToggle>\n                                                                                        <h4 class=\"m-0\">ASSESSMENT</h4>\n                                                                                        <div class=\"d-flex align-items-center justify-content-between\">\n                                                                                            <h4 class=\"mb-0 mr-5\">Avg% = {{classData.assessment_percentage}}</h4>\n                                                                                            <i *ngIf=\"assessmentAccordion.collapsed; else uparrow\" aria-hidden=\"true\" class=\"fa fa-caret-down\"></i>\n                                                                                        </div>\n                                                                                        <ng-template #uparrow><i aria-hidden=\"true\" class=\"fa fa-caret-up\"></i></ng-template>\n                                                                                    </button>\n                                                                                </h2>\n                                                                                <div ngbAccordionCollapse>\n                                                                                    <div ngbAccordionBody>\n                                                                                        <ng-template>\n                                                                                            <app-table [TableType]=\"'Assessment'\" [TableArray]=\"classData.assessment\" (clickValue)=\"studentCorrectionDetail($event)\" ></app-table>\n                                                                                        </ng-template>\n                                                                                    </div>\n                                                                                </div>\n                                                                            </div>\n                                                                        </div>\n\n                                                                        <div ngbAccordion class=\"content\">\n                                                                            <div ngbAccordionItem=\"{{classIndex}}\" #assignmentAccordion=\"ngbAccordionItem\" [collapsed]=\"true\">\n                                                                                <h2 ngbAccordionHeader>\n                                                                                    <button class=\"btn btn-link d-flex align-items-center justify-content-between p-2 w-100\"\n                                                                                            ngbAccordionToggle>\n                                                                                        <h4 class=\"m-0\">ASSIGNMENT</h4>\n                                                                                        <div class=\"d-flex align-items-center justify-content-between\">\n                                                                                            <h4 class=\"mb-0 mr-5\">Avg% = {{classData.assignment_percentage}}</h4>\n                                                                                            <i *ngIf=\"assignmentAccordion.collapsed; else uparrow\" aria-hidden=\"true\" class=\"fa fa-caret-down\"></i>\n                                                                                        </div>\n                                                                                        <ng-template #uparrow><i aria-hidden=\"true\" class=\"fa fa-caret-up\"></i></ng-template>\n                                                                                    </button>\n                                                                                </h2>\n                                                                                <div ngbAccordionCollapse>\n                                                                                    <div ngbAccordionBody>\n                                                                                        <ng-template>\n                                                                                            <app-table [TableType]=\"'Assignment'\" [TableArray]=\"classData.assignment\" (clickValue)=\"studentCorrectionDetail($event)\" ></app-table>\n                                                                                        </ng-template>\n                                                                                    </div>\n                                                                                </div>\n                                                                            </div>\n                                                                        </div>\n                                                                    </ng-template>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div *ngIf=\"subject.classes.length == 0\" class=\"row d-flex justify-content-center\">\n                                                    <div class=\"col-4\">\n                                                        <button class=\"nodataList\">No Class Available!</button>\n                                                    </div>\n                                                </div>\n                                            </ng-template>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"reportList.length == 0\" class=\"row d-flex justify-content-center\">\n        <div class=\"col-4\">\n            <button class=\"nodataList\">No Data Available!</button>\n        </div>\n    </div>\n</section>\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title col-12 text-center\"><b>{{type == 1 ? 'Assessment' : 'Assignment'}} List</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\" *ngIf=\"viewData != ''\">\n                    <div class=\"d-flex text-center mt-3\" *ngFor=\"let classData of viewData; let i = index\">\n                        <label class=\"ml-3\">{{i + 1}}.</label>\n                        <label class=\"ml-3\">ContentName : {{classData.content_name}}</label>\n                        <label class=\"ml-3\">Percentage : {{classData.percentage}}</label>\n                    </div>\n                </div>\n                <div class=\"col-sm-12\" *ngIf=\"viewData == ''\">\n                    <button class=\"nodataList w-50 ml-5\">No List Available!</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"close()\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #viewStudentDetails let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title\">Correction Details</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"onSave()\" ></i>\n    </div>\n    <div class=\"modal-body\">\n        <app-answer-sheet [answerShow]=\"true\" [contentId]=\"contentId\" [contentFormat]=\"contentFormat\" [is_test]=\"is_test\"\n                           [classId]=\"classId\" [studentReportId]=\"studentId\" [backStatus]=\"false\" [studentContentId]=\"studentContentId\"></app-answer-sheet>\n    </div>\n</ng-template>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.StudentService }, { type: i3.ConfigurationService }, { type: i4.DomSanitizer }, { type: i5.DatePipe }, { type: i6.Router }, { type: i7.CommonDataService }, { type: i8.TeacherService }, { type: i9.NgbModal }, { type: i10.ToastrService }, { type: i11.ValidationService }, { type: i12.FormBuilder }, { type: i13.EnvironmentService }, { type: i14.NewsubjectService }, { type: i15.CommonService }], { viewContent: [{
            type: ViewChild,
            args: ['content']
        }], viewStudentDetails: [{
            type: ViewChild,
            args: ['viewStudentDetails']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ReportsComponent, { className: "ReportsComponent" }); })();
//# sourceMappingURL=reports.component.js.map