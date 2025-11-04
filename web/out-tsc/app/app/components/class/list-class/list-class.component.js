import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { SessionConstants } from '../../../shared/data/sessionConstants';
import { dateOptions, timeZone } from '../../../shared/data/config';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { urls } from '../../../shared/utils/urls';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../../../shared/service/configuration.service";
import * as i4 from "../../../shared/service/teacher.service";
import * as i5 from "../../../shared/service/auth.service";
import * as i6 from "../../../shared/service/common-data.service";
import * as i7 from "@angular/platform-browser";
import * as i8 from "@angular/router";
import * as i9 from "@angular/common";
import * as i10 from "ngx-toastr";
import * as i11 from "../../../environment.service";
import * as i12 from "../../../shared/service/newsubject.service";
import * as i13 from "ngx-sse-client";
import * as i14 from "../../../shared/service/zoom-service.service";
import * as i15 from "../../../shared/service/common.service";
import * as i16 from "../../../shared/service/class.service";
import * as i17 from "src/app/shared/service/student.service";
import * as i18 from "src/app/shared/service/validation.service";
import * as i19 from "@ng-select/ng-select";
import * as i20 from "@nodro7/angular-mydatepicker";
import * as i21 from "../../report/missed-work-report/missed-work-report.component";
import * as i22 from "../../corporateschool/emptyschool/emptyschool.component";
import * as i23 from "ngx-infinite-scroll";
import * as i24 from "../../studentlogin/overalldetails/overalldetails.component";
import * as i25 from "../../auth/tiny-mice/tiny-mice.component";
import * as i26 from "@angular/material/icon";
import * as i27 from "@angular/material/form-field";
import * as i28 from "@angular/material/chips";
import * as i29 from "ng-multiselect-dropdown";
import * as i30 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["class"];
const _c1 = ["reports"];
const _c2 = ["showInform"];
const _c3 = ["writeNoteOpen"];
const _c4 = ["zoomDialog"];
const _c5 = ["zoomDialog1"];
const _c6 = ["meetingSelection"];
const _c7 = ["recordinglist"];
const _c8 = ["video"];
const _c9 = ["addStudentDialog"];
const _c10 = ["addMultipleEmailDialog"];
const _c11 = ["deleteStudentAlertDialog"];
const _c12 = ["mailbox"];
const _c13 = ["studentChange"];
const _c14 = ["makeUpClassChange"];
const _c15 = ["viewoveralldetails"];
const _c16 = ["deleteClass"];
const _c17 = () => ["/class/create-class/add"];
const _c18 = () => ["2", "4", "5"];
const _c19 = a0 => ({ "error-chip": a0 });
function ListClassComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelement(1, "img", 24);
    i0.ɵɵelementEnd();
} }
function ListClassComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51);
    i0.ɵɵelement(1, "img", 24);
    i0.ɵɵelementEnd();
} }
function ListClassComponent_div_1_button_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 52);
    i0.ɵɵelement(1, "i", 53);
    i0.ɵɵtext(2, " Add Class ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(1, _c17));
} }
function ListClassComponent_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35)(1, "label", 36);
    i0.ɵɵtext(2, "Content folder");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ng-select", 54);
    i0.ɵɵtwoWayListener("ngModelChange", function ListClassComponent_div_1_div_17_Template_ng_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.selectCurriculumFolder, $event) || (ctx_r1.selectCurriculumFolder = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ListClassComponent_div_1_div_17_Template_ng_select_change_3_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.pageNo = 1; ctx_r1.choosedData = []; ctx_r1.setSearch_Filter(ctx_r1.classlisthighlight); return i0.ɵɵresetView(ctx_r1.classList(ctx_r1.classlisthighlight)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("items", ctx_r1.batchData);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectCurriculumFolder);
} }
function ListClassComponent_div_1_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35)(1, "label", 36);
    i0.ɵɵtext(2, "Teacher");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ng-select", 55);
    i0.ɵɵtwoWayListener("ngModelChange", function ListClassComponent_div_1_div_34_Template_ng_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.selectTeacher, $event) || (ctx_r1.selectTeacher = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ListClassComponent_div_1_div_34_Template_ng_select_change_3_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.pageNo = 1; ctx_r1.choosedData = []; ctx_r1.setSearch_Filter(ctx_r1.classlisthighlight); return i0.ɵɵresetView(ctx_r1.classList(ctx_r1.classlisthighlight)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("items", ctx_r1.teacherData);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectTeacher);
} }
function ListClassComponent_div_1_div_35_ng_option_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 65);
    i0.ɵɵtext(1, "Approved");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_div_1_div_35_ng_option_4_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 66);
    i0.ɵɵtext(1, "Ready for review");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_div_1_div_35_ng_option_4_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 67);
    i0.ɵɵtext(1, "Draft");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_div_1_div_35_ng_option_4_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 68);
    i0.ɵɵtext(1, "Rework");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_div_1_div_35_ng_option_4_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 69);
    i0.ɵɵtext(1, "Cancelled");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_div_1_div_35_ng_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ng-option", 58)(1, "div", 59);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, ListClassComponent_div_1_div_35_ng_option_4_span_3_Template, 2, 0, "span", 60)(4, ListClassComponent_div_1_div_35_ng_option_4_span_4_Template, 2, 0, "span", 61)(5, ListClassComponent_div_1_div_35_ng_option_4_span_5_Template, 2, 0, "span", 62)(6, ListClassComponent_div_1_div_35_ng_option_4_span_6_Template, 2, 0, "span", 63)(7, ListClassComponent_div_1_div_35_ng_option_4_span_7_Template, 2, 0, "span", 64);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r6.course_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("title", item_r6.course_name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", item_r6.course_name, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r6.status == "A");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r6.status == "P");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r6.status == "D");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r6.status == "R");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r6.status == "C");
} }
function ListClassComponent_div_1_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35)(1, "label", 36);
    i0.ɵɵtext(2, "Course");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ng-select", 56);
    i0.ɵɵtwoWayListener("ngModelChange", function ListClassComponent_div_1_div_35_Template_ng_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.selectCourse, $event) || (ctx_r1.selectCourse = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ListClassComponent_div_1_div_35_Template_ng_select_change_3_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.pageNo = 1; ctx_r1.choosedData = []; ctx_r1.setSearch_Filter(ctx_r1.classlisthighlight); return i0.ɵɵresetView(ctx_r1.classList(ctx_r1.classlisthighlight)); });
    i0.ɵɵtemplate(4, ListClassComponent_div_1_div_35_ng_option_4_Template, 8, 8, "ng-option", 57);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectCourse);
    i0.ɵɵproperty("multiple", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.courseListData);
} }
function ListClassComponent_div_1_div_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 70)(1, "div", 71)(2, "button", 72);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function ListClassComponent_div_1_section_41_div_4_small_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 109);
    i0.ɵɵelement(1, "i", 110);
    i0.ɵɵelementEnd();
} }
function ListClassComponent_div_1_section_41_div_4_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 111);
    i0.ɵɵelement(1, "i", 112);
    i0.ɵɵelementEnd();
} }
function ListClassComponent_div_1_section_41_div_4_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 113);
    i0.ɵɵlistener("click", function ListClassComponent_div_1_section_41_div_4_ng_container_7_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r10); const i_r9 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.enterList(i_r9, "curriculum", $event)); });
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const list_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(list_r11.class_name);
} }
function ListClassComponent_div_1_section_41_div_4_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 88);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(list_r11.class_name);
} }
function ListClassComponent_div_1_section_41_div_4_i_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 114);
    i0.ɵɵlistener("click", function ListClassComponent_div_1_section_41_div_4_i_10_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r12); const list_r11 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.redirectToAnnouncement(list_r11, $event)); });
    i0.ɵɵelementStart(1, "span", 115);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(list_r11.new_comments);
} }
function ListClassComponent_div_1_section_41_div_4_i_11_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 116);
    i0.ɵɵlistener("click", function ListClassComponent_div_1_section_41_div_4_i_11_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r13); const i_r9 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.enterList(i_r9, "inbox", $event)); });
    i0.ɵɵelementStart(1, "span", 115);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(list_r11.newMessage);
} }
function ListClassComponent_div_1_section_41_div_4_p_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 87)(1, "span", 88);
    i0.ɵɵtext(2, "Start: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " \u00A0 \u00A0 ");
    i0.ɵɵelementStart(4, "span", 88);
    i0.ɵɵtext(5, "End: ");
    i0.ɵɵelementEnd()();
} }
function ListClassComponent_div_1_section_41_div_4_p_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 87)(1, "span", 88);
    i0.ɵɵtext(2, "Start: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 89);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "customDateFormat");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, " \u00A0 \u00A0 ");
    i0.ɵɵelementStart(7, "span", 88);
    i0.ɵɵtext(8, "End: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 89);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "customDateFormat");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 2, list_r11.start_date));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(11, 4, list_r11.end_date));
} }
function ListClassComponent_div_1_section_41_div_4_a_37_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "i", 118);
    i0.ɵɵtext(2, " Start online class");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_div_1_section_41_div_4_a_37_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 119)(1, "span", 120);
    i0.ɵɵtext(2, "Loading...");
    i0.ɵɵelementEnd()();
} }
function ListClassComponent_div_1_section_41_div_4_a_37_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 102);
    i0.ɵɵlistener("click", function ListClassComponent_div_1_section_41_div_4_a_37_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r14); const list_r11 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openZoomDialog(list_r11)); });
    i0.ɵɵtemplate(1, ListClassComponent_div_1_section_41_div_4_a_37_span_1_Template, 3, 0, "span", 21)(2, ListClassComponent_div_1_section_41_div_4_a_37_span_2_Template, 3, 0, "span", 117);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.customLoader);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.customLoader);
} }
function ListClassComponent_div_1_section_41_div_4_a_41_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 102);
    i0.ɵɵlistener("click", function ListClassComponent_div_1_section_41_div_4_a_41_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r15); const i_r9 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.enterList(i_r9, "no", $event)); });
    i0.ɵɵelement(1, "i", 121);
    i0.ɵɵtext(2, "Edit class");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_div_1_section_41_div_4_a_42_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 102);
    i0.ɵɵlistener("click", function ListClassComponent_div_1_section_41_div_4_a_42_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r16); const list_r11 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.deleteClassModal(list_r11)); });
    i0.ɵɵelement(1, "i", 122);
    i0.ɵɵtext(2, "Delete Class");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_div_1_section_41_div_4_a_43_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 102);
    i0.ɵɵlistener("click", function ListClassComponent_div_1_section_41_div_4_a_43_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r17 = i0.ɵɵnextContext(); const list_r11 = ctx_r17.$implicit; const i_r9 = ctx_r17.index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.addStudent(list_r11, i_r9)); });
    i0.ɵɵelement(1, "i", 123);
    i0.ɵɵtext(2, "Add Student");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_div_1_section_41_div_4_a_47_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "i", 124);
    i0.ɵɵtext(2, "Recording");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_div_1_section_41_div_4_a_47_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 119)(1, "span", 120);
    i0.ɵɵtext(2, "Loading...");
    i0.ɵɵelementEnd()();
} }
function ListClassComponent_div_1_section_41_div_4_a_47_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 102);
    i0.ɵɵlistener("click", function ListClassComponent_div_1_section_41_div_4_a_47_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r19); const list_r11 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openRecordingList(list_r11)); });
    i0.ɵɵtemplate(1, ListClassComponent_div_1_section_41_div_4_a_47_span_1_Template, 3, 0, "span", 21)(2, ListClassComponent_div_1_section_41_div_4_a_47_span_2_Template, 3, 0, "span", 117);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.recordLoader);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.recordLoader);
} }
function ListClassComponent_div_1_section_41_div_4_div_55_table_1_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1, "E-Mail Id");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_div_1_section_41_div_4_div_55_table_1_tr_11_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const detail_r21 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(detail_r21.email_id);
} }
function ListClassComponent_div_1_section_41_div_4_div_55_table_1_tr_11_img_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 136);
    i0.ɵɵlistener("click", function ListClassComponent_div_1_section_41_div_4_div_55_table_1_tr_11_img_8_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r22); const detail_r21 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r1.classChange(detail_r21, "transfer")); });
    i0.ɵɵelementEnd();
} }
function ListClassComponent_div_1_section_41_div_4_div_55_table_1_tr_11_i_9_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 137);
    i0.ɵɵlistener("click", function ListClassComponent_div_1_section_41_div_4_div_55_table_1_tr_11_i_9_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r23); const detail_r21 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r1.editStudent(detail_r21)); });
    i0.ɵɵelementEnd();
} }
function ListClassComponent_div_1_section_41_div_4_div_55_table_1_tr_11_i_10_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 138);
    i0.ɵɵlistener("click", function ListClassComponent_div_1_section_41_div_4_div_55_table_1_tr_11_i_10_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r24); const detail_r21 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r1.deleteStudentAlert(detail_r21)); });
    i0.ɵɵelementEnd();
} }
function ListClassComponent_div_1_section_41_div_4_div_55_table_1_tr_11_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 129);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ListClassComponent_div_1_section_41_div_4_div_55_table_1_tr_11_td_3_Template, 2, 1, "td", 21);
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td", 131)(7, "img", 132);
    i0.ɵɵlistener("click", function ListClassComponent_div_1_section_41_div_4_div_55_table_1_tr_11_Template_img_click_7_listener() { const detail_r21 = i0.ɵɵrestoreView(_r20).$implicit; const ctx_r1 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r1.getStudentFullDetail(detail_r21)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, ListClassComponent_div_1_section_41_div_4_div_55_table_1_tr_11_img_8_Template, 1, 0, "img", 133)(9, ListClassComponent_div_1_section_41_div_4_div_55_table_1_tr_11_i_9_Template, 1, 0, "i", 134)(10, ListClassComponent_div_1_section_41_div_4_div_55_table_1_tr_11_i_10_Template, 1, 0, "i", 135);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const detail_r21 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", detail_r21.first_name, " ", detail_r21.last_name, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showStudentEmailId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(detail_r21.grade_name);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.allowTransfer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageStudent);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
} }
function ListClassComponent_div_1_section_41_div_4_div_55_table_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 127)(1, "thead", 128)(2, "tr")(3, "th", 129);
    i0.ɵɵtext(4, "Student Name");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, ListClassComponent_div_1_section_41_div_4_div_55_table_1_th_5_Template, 2, 0, "th", 21);
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "tbody");
    i0.ɵɵtemplate(11, ListClassComponent_div_1_section_41_div_4_div_55_table_1_tr_11_Template, 11, 7, "tr", 130);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.showStudentEmailId);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r1.studentData);
} }
function ListClassComponent_div_1_section_41_div_4_div_55_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 70)(1, "div", 71)(2, "button", 72);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function ListClassComponent_div_1_section_41_div_4_div_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 125);
    i0.ɵɵtemplate(1, ListClassComponent_div_1_section_41_div_4_div_55_table_1_Template, 12, 2, "table", 126)(2, ListClassComponent_div_1_section_41_div_4_div_55_div_2_Template, 4, 0, "div", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.studentData == null ? null : ctx_r1.studentData.length) != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.studentData == null ? null : ctx_r1.studentData.length) == 0);
} }
function ListClassComponent_div_1_section_41_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 78)(1, "div", 33)(2, "div", 79);
    i0.ɵɵlistener("click", function ListClassComponent_div_1_section_41_div_4_Template_div_click_2_listener($event) { const i_r9 = i0.ɵɵrestoreView(_r8).index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.enterList(i_r9, "yes", $event)); });
    i0.ɵɵelementStart(3, "div", 80)(4, "h4", 81);
    i0.ɵɵtemplate(5, ListClassComponent_div_1_section_41_div_4_small_5_Template, 2, 0, "small", 82)(6, ListClassComponent_div_1_section_41_div_4_small_6_Template, 2, 0, "small", 83)(7, ListClassComponent_div_1_section_41_div_4_ng_container_7_Template, 4, 1, "ng-container", 84)(8, ListClassComponent_div_1_section_41_div_4_ng_template_8_Template, 2, 1, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor)(10, ListClassComponent_div_1_section_41_div_4_i_10_Template, 3, 1, "i", 85)(11, ListClassComponent_div_1_section_41_div_4_i_11_Template, 3, 1, "i", 86);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "p", 87)(13, "span", 88);
    i0.ɵɵtext(14, "Class Code: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span", 89);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17, " \u00A0 ");
    i0.ɵɵelementStart(18, "small", 90);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(20, "br");
    i0.ɵɵelementStart(21, "span", 88);
    i0.ɵɵtext(22, "Teacher Assigned: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "span", 89);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 91)(26, "div", 92)(27, "div", 93);
    i0.ɵɵtemplate(28, ListClassComponent_div_1_section_41_div_4_p_28_Template, 6, 0, "p", 94)(29, ListClassComponent_div_1_section_41_div_4_p_29_Template, 12, 6, "p", 94);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div", 95);
    i0.ɵɵlistener("click", function ListClassComponent_div_1_section_41_div_4_Template_div_click_30_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.childCallfunction($event)); });
    i0.ɵɵelementStart(31, "div", 96)(32, "div", 97)(33, "button", 98);
    i0.ɵɵtext(34, "Action ");
    i0.ɵɵelement(35, "i", 99);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "div", 100);
    i0.ɵɵtemplate(37, ListClassComponent_div_1_section_41_div_4_a_37_Template, 3, 2, "a", 101);
    i0.ɵɵelementStart(38, "a", 102);
    i0.ɵɵlistener("click", function ListClassComponent_div_1_section_41_div_4_Template_a_click_38_listener($event) { const i_r9 = i0.ɵɵrestoreView(_r8).index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.enterList(i_r9, "curriculum", $event)); });
    i0.ɵɵelement(39, "i", 103);
    i0.ɵɵtext(40, "Curriculum");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(41, ListClassComponent_div_1_section_41_div_4_a_41_Template, 3, 0, "a", 101)(42, ListClassComponent_div_1_section_41_div_4_a_42_Template, 3, 0, "a", 101)(43, ListClassComponent_div_1_section_41_div_4_a_43_Template, 3, 0, "a", 101);
    i0.ɵɵelementStart(44, "a", 102);
    i0.ɵɵlistener("click", function ListClassComponent_div_1_section_41_div_4_Template_a_click_44_listener() { const list_r11 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.shareEmail(list_r11)); });
    i0.ɵɵelement(45, "i", 104);
    i0.ɵɵtext(46, "Share Class Code");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(47, ListClassComponent_div_1_section_41_div_4_a_47_Template, 3, 2, "a", 101);
    i0.ɵɵelementStart(48, "a", 102);
    i0.ɵɵlistener("click", function ListClassComponent_div_1_section_41_div_4_Template_a_click_48_listener() { const list_r11 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showInformation(list_r11)); });
    i0.ɵɵelement(49, "i", 105);
    i0.ɵɵtext(50, "Information");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "a", 102);
    i0.ɵɵlistener("click", function ListClassComponent_div_1_section_41_div_4_Template_a_click_51_listener() { const list_r11 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.allReports(list_r11)); });
    i0.ɵɵelement(52, "i", 106);
    i0.ɵɵtext(53, "Report");
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(54, "div", 107);
    i0.ɵɵtemplate(55, ListClassComponent_div_1_section_41_div_4_div_55_Template, 3, 2, "div", 108);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const list_r11 = ctx.$implicit;
    const i_r9 = ctx.index;
    const elseEditBlock_r25 = i0.ɵɵreference(9);
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", list_r11.status == "1" && ctx_r1.teacherType != "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r11.status == "2" && ctx_r1.teacherType != "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(ctx_r1.auth.getRoleId() == "4" && ctx_r1.classlisthighlight == "4") || ctx_r1.manageClass)("ngIfElse", elseEditBlock_r25);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r11.announcement_type != "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.auth.getRoleId() == "4");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(list_r11.class_code);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", list_r11.no_of_students - 0, " Student", list_r11.no_of_students > 1 ? "s" : "", "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(list_r11.teacher_name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", list_r11.start_date == "0000-00-00" && list_r11.end_date == "0000-00-00");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r11.start_date != "0000-00-00" && list_r11.end_date != "0000-00-00");
    i0.ɵɵadvance(7);
    i0.ɵɵclassProp("dropdown-content-up", (i_r9 + 2 == ctx_r1.choosedData.length || i_r9 + 1 == ctx_r1.choosedData.length) && ctx_r1.choosedData.length > 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r11.class_type == "1" && i0.ɵɵpureFunction0(20, _c18).includes(ctx_r1.auth.getRoleId()));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !(ctx_r1.auth.getRoleId() == "4" && list_r11.classDate_status == "4") || ctx_r1.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.checkClassDeleteConditions());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageStudent);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", list_r11.class_type == "1" && i0.ɵɵpureFunction0(21, _c18).includes(ctx_r1.auth.getRoleId()));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r1.studentShow == list_r11.class_id && list_r11.checked);
} }
function ListClassComponent_div_1_section_41_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 73)(1, "div", 74)(2, "div", 75);
    i0.ɵɵlistener("scrolled", function ListClassComponent_div_1_section_41_Template_div_scrolled_2_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onScrollDown($event)); })("scrolledUp", function ListClassComponent_div_1_section_41_Template_div_scrolledUp_2_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onUp($event)); });
    i0.ɵɵelementStart(3, "div", 76);
    i0.ɵɵtemplate(4, ListClassComponent_div_1_section_41_div_4_Template, 56, 22, "div", 77);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("infiniteScrollDistance", 2)("infiniteScrollThrottle", 100)("infiniteScrollContainer", ctx_r1.selector)("fromRoot", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.choosedData);
} }
function ListClassComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtemplate(1, ListClassComponent_div_1_div_1_Template, 2, 0, "div", 26);
    i0.ɵɵelementStart(2, "section", 27)(3, "div", 28)(4, "div", 29)(5, "div")(6, "h2", 30);
    i0.ɵɵtext(7, "Class Library");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 31);
    i0.ɵɵtext(9, " Filter sessions by status, grade, subject, and roster to jump into the right class quickly. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(10, ListClassComponent_div_1_button_10_Template, 3, 2, "button", 32);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 33)(12, "div", 34)(13, "div", 35)(14, "label", 36);
    i0.ɵɵtext(15, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "ng-select", 37);
    i0.ɵɵtwoWayListener("ngModelChange", function ListClassComponent_div_1_Template_ng_select_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.classlisthighlight, $event) || (ctx_r1.classlisthighlight = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ListClassComponent_div_1_Template_ng_select_change_16_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.pageNo = 1; ctx_r1.choosedData = []; ctx_r1.setSearch_Filter(ctx_r1.classlisthighlight); return i0.ɵɵresetView(ctx_r1.classList(ctx_r1.classlisthighlight)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(17, ListClassComponent_div_1_div_17_Template, 4, 2, "div", 38);
    i0.ɵɵelementStart(18, "div", 35)(19, "label", 36);
    i0.ɵɵtext(20, "Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "ng-select", 39);
    i0.ɵɵtwoWayListener("ngModelChange", function ListClassComponent_div_1_Template_ng_select_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.selectGrade, $event) || (ctx_r1.selectGrade = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ListClassComponent_div_1_Template_ng_select_change_21_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.pageNo = 1; ctx_r1.choosedData = []; ctx_r1.setSearch_Filter(ctx_r1.classlisthighlight); return i0.ɵɵresetView(ctx_r1.classList(ctx_r1.classlisthighlight)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 35)(23, "label", 36);
    i0.ɵɵtext(24, "Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "ng-select", 40);
    i0.ɵɵtwoWayListener("ngModelChange", function ListClassComponent_div_1_Template_ng_select_ngModelChange_25_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.selectSubject, $event) || (ctx_r1.selectSubject = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ListClassComponent_div_1_Template_ng_select_change_25_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.pageNo = 1; ctx_r1.choosedData = []; ctx_r1.setSearch_Filter(ctx_r1.classlisthighlight); return i0.ɵɵresetView(ctx_r1.classList(ctx_r1.classlisthighlight)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 41)(27, "div", 35)(28, "label", 36);
    i0.ɵɵtext(29, "Search");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "div", 42)(31, "span", 43);
    i0.ɵɵelement(32, "i", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "input", 45);
    i0.ɵɵtwoWayListener("ngModelChange", function ListClassComponent_div_1_Template_input_ngModelChange_33_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.searchText, $event) || (ctx_r1.searchText = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("input", function ListClassComponent_div_1_Template_input_input_33_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.pageNo = 1; return i0.ɵɵresetView(ctx_r1.updateUnifiedSearch(ctx_r1.searchText)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(34, ListClassComponent_div_1_div_34_Template, 4, 2, "div", 38)(35, ListClassComponent_div_1_div_35_Template, 5, 3, "div", 38);
    i0.ɵɵelementStart(36, "div", 46)(37, "button", 47);
    i0.ɵɵlistener("click", function ListClassComponent_div_1_Template_button_click_37_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetSearch()); });
    i0.ɵɵelement(38, "i", 48);
    i0.ɵɵtext(39, " Reset filters ");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(40, ListClassComponent_div_1_div_40_Template, 4, 0, "div", 49)(41, ListClassComponent_div_1_section_41_Template, 5, 5, "section", 50);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showLoader);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("items", ctx_r1.statusOptions);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.classlisthighlight);
    i0.ɵɵproperty("clearable", false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.teacherType != 1 || ctx_r1.auth.getRoleId() == "2" || ctx_r1.auth.getRoleId() == "6");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("items", ctx_r1.gradeData);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectGrade);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("items", ctx_r1.subjectData);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectSubject);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.searchText);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.auth.getRoleId() != "4" && ctx_r1.classlisthighlight != "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.auth.getRoleId() != "4" && ctx_r1.classlisthighlight != "6" || ctx_r1.auth.getRoleId() == "2");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.choosedData.length == 0 && !ctx_r1.showLoader);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.choosedData.length > 0);
} }
function ListClassComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-emptyschool");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 139)(1, "h4", 140);
    i0.ɵɵtext(2, "Report");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 141);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_3_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 142);
    i0.ɵɵelement(5, "app-missed-work-report", 143);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("classShow", true)("showContent", "other")("studentView", false)("timeView", true)("calledForm", "class")("contentNameValue", ctx_r1.contentNameValue);
} }
function ListClassComponent_ng_template_5_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 87)(1, "span", 144);
    i0.ɵɵtext(2, "Subject: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 89);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.classInfo.subject_name);
} }
function ListClassComponent_ng_template_5_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 87)(1, "span", 144);
    i0.ɵɵtext(2, "Grade: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 146);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.classInfo.grade_name);
} }
function ListClassComponent_ng_template_5_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 87)(1, "span", 144);
    i0.ɵɵtext(2, "Content Folder: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 147);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.classInfo.classroom_name);
} }
function ListClassComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 139)(1, "h4", 140);
    i0.ɵɵtext(2, "Info");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 141);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_5_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 142);
    i0.ɵɵtemplate(5, ListClassComponent_ng_template_5_p_5_Template, 5, 1, "p", 94)(6, ListClassComponent_ng_template_5_p_6_Template, 5, 1, "p", 94)(7, ListClassComponent_ng_template_5_p_7_Template, 5, 1, "p", 94);
    i0.ɵɵelementStart(8, "p", 87)(9, "span", 144);
    i0.ɵɵtext(10, "Class Code: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 89);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "p", 87)(14, "span", 144);
    i0.ɵɵtext(15, "Assessment: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span", 145);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "p", 87)(19, "span", 144);
    i0.ɵɵtext(20, "Assignment: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "span", 145);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "p", 87)(24, "span", 144);
    i0.ɵɵtext(25, "Resources: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "span", 145);
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", (ctx_r1.classInfo == null ? null : ctx_r1.classInfo.subject_name) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.classInfo == null ? null : ctx_r1.classInfo.grade_name) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.teacherType != 1 || ctx_r1.auth.getRoleId() == "2" || ctx_r1.auth.getRoleId() == "6" && (ctx_r1.classInfo == null ? null : ctx_r1.classInfo.classroom_name) != "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.classInfo.class_code);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.classInfo.no_of_assessments);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", ctx_r1.classInfo.no_of_assignments, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", ctx_r1.classInfo.no_of_resources, " ");
} }
function ListClassComponent_ng_template_7_div_6_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 144)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " - ");
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "customDateFormat");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "br");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(list_r30.created_by);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(6, 2, list_r30.add_date));
} }
function ListClassComponent_ng_template_7_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 107)(1, "div", 158)(2, "p", 159);
    i0.ɵɵtemplate(3, ListClassComponent_ng_template_7_div_6_div_1_span_3_Template, 8, 4, "span", 160);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵelement(5, "span", 161);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 162)(7, "i", 163);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_7_div_6_div_1_Template_i_click_7_listener() { i0.ɵɵrestoreView(_r29); const list_r30 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deletedNotes(list_r30)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const list_r30 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r30.created_by != "" && list_r30.add_date != "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", list_r30.note, i0.ɵɵsanitizeHtml);
} }
function ListClassComponent_ng_template_7_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 156);
    i0.ɵɵtemplate(1, ListClassComponent_ng_template_7_div_6_div_1_Template, 8, 2, "div", 157);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r30 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r30.add_date != "00-00-0000");
} }
function ListClassComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 139)(1, "h4", 148);
    i0.ɵɵtext(2, "Add Notes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 141);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_7_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r28); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onsave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 142)(5, "div", 149);
    i0.ɵɵtemplate(6, ListClassComponent_ng_template_7_div_6_Template, 2, 1, "div", 150);
    i0.ɵɵelementStart(7, "div", 151)(8, "app-tiny-mice", 152);
    i0.ɵɵlistener("emitEditorValue", function ListClassComponent_ng_template_7_Template_app_tiny_mice_emitEditorValue_8_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getEditorValue($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function ListClassComponent_ng_template_7_Template_app_tiny_mice_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.notes, $event) || (ctx_r1.notes = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 153)(10, "button", 154);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_7_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r28); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onsave()); });
    i0.ɵɵtext(11, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 155);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_7_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r28); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addNotes()); });
    i0.ɵɵtext(13, "Add");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r1.showNotes);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("editorPatchValue", false)("height", 300)("id", "notes");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.notes);
    i0.ɵɵproperty("showDropBtn", false)("showInputBtn", false);
} }
function ListClassComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 139)(1, "h4", 148);
    i0.ɵɵtext(2, "Zoom Meet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 141);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_9_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r31); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 164)(5, "div", 165)(6, "h5");
    i0.ɵɵtext(7, "Open zoom in ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 166)(9, "button", 167);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_9_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r31); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modalRef.close(); return i0.ɵɵresetView(ctx_r1.zoomService.initZoomMeeting(ctx_r1.selectedClass)); });
    i0.ɵɵtext(10, "In App ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 168);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_9_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r31); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.navigateOutsideZoom(ctx_r1.selectedClass)); });
    i0.ɵɵtext(12, "New Tab ");
    i0.ɵɵelementEnd()();
} }
function ListClassComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 139)(1, "h4", 148);
    i0.ɵɵtext(2, "Zoom Meet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 141);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_11_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r32); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 164)(5, "div", 165)(6, "h5");
    i0.ɵɵtext(7, "No Zoom Meet Scheduled for this day");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 166)(9, "button", 167);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_11_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r32); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.modalRef.close()); });
    i0.ɵɵtext(10, "OK");
    i0.ɵɵelementEnd()();
} }
function ListClassComponent_ng_template_13_div_8_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 178);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const source_r35 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind2(2, 2, source_r35.recording_start, "MM/dd/yyyy"), " \u00A0", source_r35.recording_start, "");
} }
function ListClassComponent_ng_template_13_div_8_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 178);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const source_r35 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind2(2, 2, source_r35.recording_end, "MM/dd/yyyy"), " \u00A0", source_r35.recording_end, "");
} }
function ListClassComponent_ng_template_13_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 173)(1, "div", 174)(2, "div", 175);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_13_div_8_Template_div_click_2_listener() { const source_r35 = i0.ɵɵrestoreView(_r34).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.navigateOutsideRecording(source_r35)); });
    i0.ɵɵelementStart(3, "div", 107)(4, "div", 176)(5, "p")(6, "span");
    i0.ɵɵtext(7, "Start: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, ListClassComponent_ng_template_13_div_8_span_8_Template, 3, 5, "span", 177);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 176)(10, "p")(11, "span");
    i0.ɵɵtext(12, "End: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, ListClassComponent_ng_template_13_div_8_span_13_Template, 3, 5, "span", 177);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const source_r35 = ctx.$implicit;
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", source_r35.recording_start != "0000-00-00");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", source_r35.recording_end != "0000-00-00");
} }
function ListClassComponent_ng_template_13_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 173)(1, "div", 174)(2, "div", 179)(3, "div", 107)(4, "span");
    i0.ɵɵtext(5, "No data found");
    i0.ɵɵelementEnd()()()()();
} }
function ListClassComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 139)(1, "h4", 148);
    i0.ɵɵtext(2, "Recordings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 141);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_13_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r33); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 164)(5, "div", 169)(6, "div", 170)(7, "div", 107);
    i0.ɵɵtemplate(8, ListClassComponent_ng_template_13_div_8_Template, 14, 2, "div", 171)(9, ListClassComponent_ng_template_13_div_9_Template, 6, 0, "div", 172);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 166)(11, "button", 167);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_13_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r33); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.modalRef.close()); });
    i0.ɵɵtext(12, "close");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r1.videoSource);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.videoSource.length == 0);
} }
function ListClassComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 139)(1, "h4", 148);
    i0.ɵɵtext(2, "Video Title");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 141);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_15_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r36); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.modalRef1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 164)(5, "div", 165)(6, "video", 180);
    i0.ɵɵelement(7, "source", 181);
    i0.ɵɵelementEnd()()();
} }
function ListClassComponent_ng_template_17_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 184);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_17_div_6_Template_div_click_0_listener() { const i_r39 = i0.ɵɵrestoreView(_r38).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.chooseSchedule(ctx_r1.selectedClass, i_r39)); });
    i0.ɵɵelementStart(1, "label", 185);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "small", 186);
    i0.ɵɵtext(5, "Timing :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, "\u00A0");
    i0.ɵɵelementStart(7, "span", 187);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const data_r40 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r40.class_name);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(data_r40.slotstarttime + " - " + data_r40.slotendtime);
} }
function ListClassComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 139)(1, "h4", 148);
    i0.ɵɵtext(2, "Select Meeting");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 141);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_17_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r37); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 142)(5, "div", 182);
    i0.ɵɵtemplate(6, ListClassComponent_ng_template_17_div_6_Template, 9, 2, "div", 183);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r1.selectedClass.availabilityDate);
} }
function ListClassComponent_ng_template_19_label_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 213);
    i0.ɵɵtext(1, "All fields marked with ");
    i0.ɵɵelementStart(2, "span", 214);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " are required");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_ng_template_19_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 215);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_19_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r42); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.shareEmail(ctx_r1.selectClassData, "addStudent")); });
    i0.ɵɵtext(1, " Invite By Email ");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_ng_template_19_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 216);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_19_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r43); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.searchStudentList(1); return i0.ɵɵresetView(ctx_r1.addStudentClicked()); });
    i0.ɵɵelement(1, "i", 217);
    i0.ɵɵtext(2, "Back");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_ng_template_19_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 218)(1, "label", 219);
    i0.ɵɵtext(2, "Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ng-select", 220);
    i0.ɵɵtwoWayListener("ngModelChange", function ListClassComponent_ng_template_19_div_10_Template_ng_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.gradName, $event) || (ctx_r1.gradName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ListClassComponent_ng_template_19_div_10_Template_ng_select_change_3_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getGradeValue($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("items", ctx_r1.gradeData);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.gradName);
} }
function ListClassComponent_ng_template_19_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 218)(1, "label", 219);
    i0.ɵɵtext(2, "Student Name");
    i0.ɵɵelementStart(3, "span", 204);
    i0.ɵɵtext(4, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "ng-multiselect-dropdown", 221, 16);
    i0.ɵɵtwoWayListener("ngModelChange", function ListClassComponent_ng_template_19_div_11_Template_ng_multiselect_dropdown_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.studentName, $event) || (ctx_r1.studentName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("onSelect", function ListClassComponent_ng_template_19_div_11_Template_ng_multiselect_dropdown_onSelect_5_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onItemSelect($event, "single")); })("onDeSelect", function ListClassComponent_ng_template_19_div_11_Template_ng_multiselect_dropdown_onDeSelect_5_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onDeSelect($event)); })("onSelectAll", function ListClassComponent_ng_template_19_div_11_Template_ng_multiselect_dropdown_onSelectAll_5_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onItemSelect($event, "all")); })("onDeSelectAll", function ListClassComponent_ng_template_19_div_11_Template_ng_multiselect_dropdown_onDeSelectAll_5_listener() { i0.ɵɵrestoreView(_r45); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onDeSelectAll()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("placeholder", "Select Student")("data", ctx_r1.studentDataList)("settings", ctx_r1.settings)("disabled", false);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.studentName);
} }
function ListClassComponent_ng_template_19_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 222)(1, "button", 167);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_19_div_12_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r46); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addStudentClicked()); });
    i0.ɵɵelement(2, "i", 223);
    i0.ɵɵtext(3, "Add Student");
    i0.ɵɵelementEnd()();
} }
function ListClassComponent_ng_template_19_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 224)(1, "label", 225);
    i0.ɵɵtext(2, "Class Type");
    i0.ɵɵelementStart(3, "span", 204);
    i0.ɵɵtext(4, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 226)(6, "div", 227)(7, "input", 228);
    i0.ɵɵtwoWayListener("ngModelChange", function ListClassComponent_ng_template_19_div_13_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r47); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.studentAddedType, $event) || (ctx_r1.studentAddedType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "label", 229);
    i0.ɵɵtext(9, "Regular");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 71)(11, "div", 227)(12, "input", 230);
    i0.ɵɵtwoWayListener("ngModelChange", function ListClassComponent_ng_template_19_div_13_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r47); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.studentAddedType, $event) || (ctx_r1.studentAddedType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "label", 231);
    i0.ɵɵtext(14, "Make-up Class");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.studentAddedType);
    i0.ɵɵproperty("checked", ctx_r1.studentAddedType == "0");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("checked", ctx_r1.studentAddedType == "1");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.studentAddedType);
} }
function ListClassComponent_ng_template_19_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 232)(1, "label", 225);
    i0.ɵɵtext(2, " Effective Date");
    i0.ɵɵelementStart(3, "span", 204);
    i0.ɵɵtext(4, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 205)(6, "div", 233)(7, "input", 234, 17);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_19_div_14_Template_input_click_7_listener() { i0.ɵɵrestoreView(_r48); const dp2_r49 = i0.ɵɵreference(8); return i0.ɵɵresetView(dp2_r49.toggleCalendar()); });
    i0.ɵɵtwoWayListener("ngModelChange", function ListClassComponent_ng_template_19_div_14_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.effectiveStartDate, $event) || (ctx_r1.effectiveStartDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 235)(10, "button", 155);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_19_div_14_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r48); const dp2_r49 = i0.ɵɵreference(8); return i0.ɵɵresetView(dp2_r49.toggleCalendar()); });
    i0.ɵɵelement(11, "i", 236);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.effectiveStartDate);
    i0.ɵɵproperty("options", ctx_r1.myDpOptions1);
} }
function ListClassComponent_ng_template_19_em_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 237);
    i0.ɵɵtext(1, "First name is required");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_ng_template_19_em_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 237);
    i0.ɵɵtext(1, "Last name is required");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_ng_template_19_em_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 237);
    i0.ɵɵtext(1, "Email is required");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_ng_template_19_em_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 237);
    i0.ɵɵtext(1, "Invalid Email-Id");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_ng_template_19_em_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 237);
    i0.ɵɵtext(1, "Grade is required");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 139)(1, "div", 188)(2, "h4", 189);
    i0.ɵɵtext(3, "Add Student");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ListClassComponent_ng_template_19_label_4_Template, 5, 0, "label", 190);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 191);
    i0.ɵɵtemplate(6, ListClassComponent_ng_template_19_button_6_Template, 2, 0, "button", 192)(7, ListClassComponent_ng_template_19_button_7_Template, 3, 0, "button", 193);
    i0.ɵɵelementStart(8, "i", 194);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_19_Template_i_click_8_listener() { i0.ɵɵrestoreView(_r41); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeStudentModRef()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 195);
    i0.ɵɵtemplate(10, ListClassComponent_ng_template_19_div_10_Template, 4, 2, "div", 196)(11, ListClassComponent_ng_template_19_div_11_Template, 7, 5, "div", 196)(12, ListClassComponent_ng_template_19_div_12_Template, 4, 0, "div", 197)(13, ListClassComponent_ng_template_19_div_13_Template, 15, 4, "div", 198)(14, ListClassComponent_ng_template_19_div_14_Template, 12, 2, "div", 199);
    i0.ɵɵelementStart(15, "div", 200)(16, "form", 201)(17, "div", 202)(18, "label", 203);
    i0.ɵɵtext(19, " First Name");
    i0.ɵɵelementStart(20, "span", 204);
    i0.ɵɵtext(21, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 205);
    i0.ɵɵelement(23, "input", 206);
    i0.ɵɵtemplate(24, ListClassComponent_ng_template_19_em_24_Template, 2, 0, "em", 207);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 202)(26, "label", 208);
    i0.ɵɵtext(27, " Last Name");
    i0.ɵɵelementStart(28, "span", 204);
    i0.ɵɵtext(29, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div", 205);
    i0.ɵɵelement(31, "input", 209);
    i0.ɵɵtemplate(32, ListClassComponent_ng_template_19_em_32_Template, 2, 0, "em", 207);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "div", 202)(34, "label", 210);
    i0.ɵɵtext(35, " Email Address");
    i0.ɵɵelementStart(36, "span", 204);
    i0.ɵɵtext(37, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div", 205);
    i0.ɵɵelement(39, "input", 211);
    i0.ɵɵtemplate(40, ListClassComponent_ng_template_19_em_40_Template, 2, 0, "em", 207)(41, ListClassComponent_ng_template_19_em_41_Template, 2, 0, "em", 207);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "div", 202)(43, "label", 210);
    i0.ɵɵtext(44, " Grade");
    i0.ɵɵelementStart(45, "span", 204);
    i0.ɵɵtext(46, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div", 205);
    i0.ɵɵelement(48, "ng-select", 212);
    i0.ɵɵtemplate(49, ListClassComponent_ng_template_19_em_49_Template, 2, 0, "em", 207);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(50, "div", 166)(51, "button", 168);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_19_Template_button_click_51_listener() { i0.ɵɵrestoreView(_r41); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addStudentEnabled ? ctx_r1.addstudent() : ctx_r1.submitClass(1)); });
    i0.ɵɵtext(52, "Submit");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.addStudentEnabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.addStudentEnabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.addStudentEnabled);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.addStudentEnabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.addStudentEnabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.addStudentEnabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.addStudentEnabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.addStudentEnabled && ctx_r1.studentAddedType == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngbCollapse", !ctx_r1.addStudentEnabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r1.addStudentForm);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r1.addStudentForm.get("first_name").valid && (ctx_r1.addStudentForm.get("first_name").dirty || ctx_r1.addStudentForm.get("first_name").touched));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r1.addStudentForm.get("last_name").valid && (ctx_r1.addStudentForm.get("last_name").dirty || ctx_r1.addStudentForm.get("last_name").touched));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r1.addStudentForm.get("email_id").hasError("required") && (ctx_r1.addStudentForm.get("email_id").dirty || ctx_r1.addStudentForm.get("email_id").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.addStudentForm.get("email_id").hasError("pattern"));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("items", ctx_r1.gradeData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.addStudentForm.get("grade").valid && (ctx_r1.addStudentForm.get("grade").dirty || ctx_r1.addStudentForm.get("grade").touched));
} }
function ListClassComponent_ng_template_21_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 258);
    i0.ɵɵelement(1, "img", 259);
    i0.ɵɵelementEnd();
} }
function ListClassComponent_ng_template_21_em_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 237);
    i0.ɵɵtext(1, "Please Enter Make-up Class Date");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_ng_template_21_mat_chip_row_25_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 262);
    i0.ɵɵtext(1, "cancel");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_ng_template_21_mat_chip_row_25_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip-row", 260);
    i0.ɵɵlistener("removed", function ListClassComponent_ng_template_21_mat_chip_row_25_Template_mat_chip_row_removed_0_listener() { const item_r53 = i0.ɵɵrestoreView(_r52).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.removeEmail(item_r53)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, ListClassComponent_ng_template_21_mat_chip_row_25_mat_icon_2_Template, 2, 0, "mat-icon", 261);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r53 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c19, item_r53.invalid))("removable", ctx_r1.removable);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", item_r53.value, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.removable);
} }
function ListClassComponent_ng_template_21_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error", 74);
    i0.ɵɵtext(1, "Invalid email ID");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 139)(1, "h5", 189);
    i0.ɵɵtext(2, "Invite By Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 141);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_21_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r50); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.setStudentEmailForm(); return i0.ɵɵresetView(ctx_r1.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 142);
    i0.ɵɵtemplate(5, ListClassComponent_ng_template_21_div_5_Template, 2, 0, "div", 238);
    i0.ɵɵelementStart(6, "div", 239)(7, "form", 201)(8, "div", 240)(9, "div", 202)(10, "label", 241)(11, "span", 214);
    i0.ɵɵtext(12, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, " Make-up Class Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 242)(15, "div", 233)(16, "input", 243, 17);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_21_Template_input_click_16_listener() { i0.ɵɵrestoreView(_r50); const dp2_r51 = i0.ɵɵreference(17); return i0.ɵɵresetView(dp2_r51.toggleCalendar()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 235)(19, "button", 155);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_21_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r50); const dp2_r51 = i0.ɵɵreference(17); return i0.ɵɵresetView(dp2_r51.toggleCalendar()); });
    i0.ɵɵelement(20, "i", 236);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(21, ListClassComponent_ng_template_21_em_21_Template, 2, 0, "em", 207);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "mat-form-field", 74)(23, "mat-chip-grid", 244, 18);
    i0.ɵɵtemplate(25, ListClassComponent_ng_template_21_mat_chip_row_25_Template, 3, 6, "mat-chip-row", 245);
    i0.ɵɵelementStart(26, "input", 246);
    i0.ɵɵlistener("matChipInputTokenEnd", function ListClassComponent_ng_template_21_Template_input_matChipInputTokenEnd_26_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.add($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(27, ListClassComponent_ng_template_21_mat_error_27_Template, 2, 0, "mat-error", 247);
    i0.ɵɵelementStart(28, "div", 74)(29, "p", 248);
    i0.ɵɵtext(30, "Note: You can give comma separator email-Id and press enter.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div", 74);
    i0.ɵɵelement(32, "textarea", 249);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div", 250)(34, "p", 251);
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "p", 252);
    i0.ɵɵtext(37, "You have been invited by ");
    i0.ɵɵelementStart(38, "strong");
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(40, " to join a class: ");
    i0.ɵɵelementStart(41, "strong");
    i0.ɵɵtext(42);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(43, " - ");
    i0.ɵɵelementStart(44, "strong");
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(46, "p", 253);
    i0.ɵɵtext(47, "Please click the below link to join the class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "a", 254);
    i0.ɵɵtext(49);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "div", 107)(51, "div", 255)(52, "p", 256);
    i0.ɵɵtext(53, "---------------(OR)---------------");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(54, "a", 254);
    i0.ɵɵtext(55);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(56, "div", 166)(57, "button", 257);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_21_Template_button_click_57_listener() { i0.ɵɵrestoreView(_r50); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.bulkMail()); });
    i0.ɵɵtext(58, "Submit ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const chipList_r54 = i0.ɵɵreference(24);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.showBulkEmailLoader);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formGroup", ctx_r1.studentEmailForm);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngbCollapse", !ctx_r1.studentEmailForm.controls.is_makeup.value);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("options", ctx_r1.myDpOptions1);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", !ctx_r1.studentEmailForm.get("start_date").valid && (ctx_r1.studentEmailForm.get("start_date").dirty || ctx_r1.studentEmailForm.get("start_date").touched));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.emailList);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matChipInputFor", chipList_r54)("matChipInputSeparatorKeyCodes", ctx_r1.separatorKeysCodes)("matChipInputAddOnBlur", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.validationEmail && ctx_r1.emailList.length != 0);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.studentEmailForm.controls.message.value);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("mt-", ctx_r1.studentEmailForm.controls.message.value != "" ? "3" : "1", " mb-0");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.auth.getSessionData("school_name"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.selectClassData.class_code);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.selectClassData.class_name);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("href", ctx_r1.env.envProperties.envURL + "#/auth/login/studentRegister/" + ctx_r1.selectClassData.class_code, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.env.envProperties.envURL + "#/auth/login/studentRegister/" + ctx_r1.selectClassData.class_code);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("href", ctx_r1.env.envProperties.envURL + "#/enrollclasscode/" + ctx_r1.selectClassData.class_code, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.env.envProperties.envURL + "#/enrollclasscode/" + ctx_r1.selectClassData.class_code);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r1.validationEmail && ctx_r1.emailList.length != 0);
} }
function ListClassComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 139)(1, "h4", 148);
    i0.ɵɵtext(2, "Remove student from class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 141);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_23_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r55); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 142)(5, "div", 263)(6, "p")(7, "strong");
    i0.ɵɵtext(8, "Are you sure to remove student from the class?");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(9, "div", 166)(10, "button", 264);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_23_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r55); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.modalRef.close()); });
    i0.ɵɵtext(11, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 168);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_23_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r55); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deleteStudentList(ctx_r1.getDeleteStudentData)); });
    i0.ɵɵtext(13, "Ok ");
    i0.ɵɵelementEnd()();
} }
function ListClassComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 139)(1, "h4", 265);
    i0.ɵɵtext(2, "Delete Class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 141);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_25_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 142)(5, "div", 266)(6, "p", 267)(7, "strong");
    i0.ɵɵtext(8, "Are you sure to delete the ");
    i0.ɵɵelementStart(9, "span", 268);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, " class?");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(12, "div", 166)(13, "button", 269);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_25_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.modalRef.close()); });
    i0.ɵɵtext(14, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 155);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_25_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deleteClassList()); });
    i0.ɵɵtext(16, "Ok");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r1.classDetails.class_name);
} }
function ListClassComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 139)(1, "h4", 148);
    i0.ɵɵtext(2, "Send mail");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 270);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_27_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r57); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 142)(5, "div", 271)(6, "app-tiny-mice", 272);
    i0.ɵɵlistener("emitEditorValue", function ListClassComponent_ng_template_27_Template_app_tiny_mice_emitEditorValue_6_listener($event) { i0.ɵɵrestoreView(_r57); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getEditorValue($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 166)(8, "button", 264);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_27_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r57); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.modalRef.close()); });
    i0.ɵɵtext(9, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 168);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_27_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r57); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.sendMail()); });
    i0.ɵɵelement(11, "i", 273);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("editorPatchValue", false)("height", 300)("id", "mailbox")("showDropBtn", false)("showInputBtn", false);
} }
function ListClassComponent_ng_template_29_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r59 = ctx.item;
    i0.ɵɵattribute("title", item_r59.fromClassLabel);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r59.fromClassLabel);
} }
function ListClassComponent_ng_template_29_em_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 237);
    i0.ɵɵtext(1, "Select the To Class");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_ng_template_29_em_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 237);
    i0.ɵɵtext(1, "Please Enter Effective Date");
    i0.ɵɵelementEnd();
} }
function ListClassComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    const _r58 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 274)(1, "h4", 275);
    i0.ɵɵtext(2, "Transfer Class");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 142)(4, "div", 276)(5, "form", 201)(6, "div", 202)(7, "label", 277)(8, "span", 214);
    i0.ɵɵtext(9, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " From Class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 278);
    i0.ɵɵelement(12, "input", 279);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 202)(14, "label", 277)(15, "span", 214);
    i0.ɵɵtext(16, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17, " To Class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 278)(19, "ng-select", 280);
    i0.ɵɵlistener("change", function ListClassComponent_ng_template_29_Template_ng_select_change_19_listener($event) { i0.ɵɵrestoreView(_r58); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectedClassDetails($event)); });
    i0.ɵɵtemplate(20, ListClassComponent_ng_template_29_ng_template_20_Template, 2, 2, "ng-template", 281);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(21, ListClassComponent_ng_template_29_em_21_Template, 2, 0, "em", 207);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 202)(23, "label", 277)(24, "span", 214);
    i0.ɵɵtext(25, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(26, " Effective Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 278)(28, "div", 233);
    i0.ɵɵelement(29, "input", 282, 17);
    i0.ɵɵelementStart(31, "div", 235)(32, "button", 155);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_29_Template_button_click_32_listener() { i0.ɵɵrestoreView(_r58); const dp2_r60 = i0.ɵɵreference(30); return i0.ɵɵresetView(dp2_r60.toggleCalendar()); });
    i0.ɵɵelement(33, "i", 236);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(34, ListClassComponent_ng_template_29_em_34_Template, 2, 0, "em", 207);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(35, "div", 166)(36, "button", 283);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_29_Template_button_click_36_listener() { i0.ɵɵrestoreView(_r58); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(37, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "button", 167);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_29_Template_button_click_38_listener() { i0.ɵɵrestoreView(_r58); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitChangeClass()); });
    i0.ɵɵtext(39, "Save");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.studentClassChange);
    i0.ɵɵadvance(7);
    i0.ɵɵpropertyInterpolate("value", ctx_r1.className);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("items", ctx_r1.allClassList);
    i0.ɵɵattribute("title", ctx_r1.selectedToClass == null ? null : ctx_r1.selectedToClass.fromClassLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.studentClassChange.get("toClass").valid && (ctx_r1.studentClassChange.get("toClass").dirty || ctx_r1.studentClassChange.get("toClass").touched));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("options", ctx_r1.myDpOptions1);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", !ctx_r1.studentClassChange.get("from_startdate").valid && (ctx_r1.studentClassChange.get("from_startdate").dirty || ctx_r1.studentClassChange.get("from_startdate").touched));
} }
function ListClassComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r61 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 139)(1, "h4", 284);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 285);
    i0.ɵɵlistener("click", function ListClassComponent_ng_template_31_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r61); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeOverAll()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 142);
    i0.ɵɵelement(5, "app-overalldetails", 286);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.studentName, " Overall details");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("studentdata", ctx_r1.viewdetail);
} }
export class ListClassComponent {
    constructor(formBuilder, config, confi, teacher, auth, commondata, modalService, sanitizer, route, firstcaps, toastr, env, newService, sseClient, datePipe, zoomService, common, classes, student, validationService) {
        this.formBuilder = formBuilder;
        this.config = config;
        this.confi = confi;
        this.teacher = teacher;
        this.auth = auth;
        this.commondata = commondata;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.route = route;
        this.firstcaps = firstcaps;
        this.toastr = toastr;
        this.env = env;
        this.newService = newService;
        this.sseClient = sseClient;
        this.datePipe = datePipe;
        this.zoomService = zoomService;
        this.common = common;
        this.classes = classes;
        this.student = student;
        this.validationService = validationService;
        // myDpOptions: IAngularMyDpOptions = {
        //     dateRange: false,
        //     dateFormat:dateOptions.pickerFormat,
        //     // other options are here...
        // };
        this.setDate = new Date().toLocaleString('en-US', { timeZone: timeZone.location });
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            disableUntil: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getMonth() + 1,
                day: new Date(this.setDate).getDate() - 1
            },
            calendarAnimation: {
                in: 4,
                out: 4
            },
            firstDayOfWeek: 'su'
        };
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getMonth() + 1,
                day: new Date(this.setDate).getDate() - 1
            },
            calendarAnimation: {
                in: 4,
                out: 4
            }
        };
        this.myDpOptions2 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getMonth() + 1,
                day: new Date(this.setDate).getDate() - 1
            },
            calendarAnimation: {
                in: 4,
                out: 4
            }
        };
        this.schoolDataList = 0;
        this.choosedData = [];
        this.allStudentList = [];
        this.studentData = [];
        this.statusOptions = [
            { value: '3', label: 'Active' },
            { value: '2', label: 'Upcoming' },
            { value: '4', label: 'Completed' },
            { value: '1', label: 'All' },
            { value: '6', label: 'Draft' }
        ];
        this.selectGrade = [];
        this.selectSubject = [];
        this.settingList = [];
        this.settingValue = '0';
        this.searchClass = '';
        this.searchStudent = '';
        this.searchText = '';
        this.classId = '';
        this.notes = '';
        this.studentShow = false;
        this.teacherData = [];
        this.selectTeacher = null;
        this.selectCourse = [];
        this.selector = '.scrollPanel4';
        this.pageNo = 1;
        this.direction = '';
        this.videoSource = [];
        this.customLoader = false;
        this.recordLoader = false;
        this.newlySelectedStuent = [];
        this.blukEmailValue = [];
        this.emailList = [];
        this.removable = true;
        this.validationEmail = false;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.allClassList = [];
        this.settings = {};
        this.manageStudent = true;
        this.manageClass = true;
        this.showStudentEmailId = true;
        this.showBulkEmailLoader = false;
        this.courseListData = [];
        this.subs = [];
        this.messageSubs = [];
        this.addStudentEnabled = false;
        this.studentAddedType = '0';
        this.selectedClassLabel = '';
        this.roleId = this.auth.getRoleId();
        this.userId = this.auth.getUserId();
        if (this.roleId != '6') {
            this.settingList = JSON.parse(this.auth.getSessionData('settingList'));
            if (this.settingList) {
                this.settingList.forEach((items) => {
                    if (items.name == 'teacher_zoom_view') {
                        this.settingValue = items.value;
                    }
                });
            }
        }
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        this.classform = this.formBuilder.group({
            classname: ['', Validators.required],
            grade: ['', Validators.required],
            subject: ['', Validators.required],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required],
            startTime: ['', Validators.required],
            endTime: ['', Validators.required],
            describe: ['', Validators.required],
            tag: ['', Validators.required],
        });
        this.studentClassChange = this.formBuilder.group({
            toClass: [null, Validators.required],
            from_startdate: ['', Validators.required]
        });
        this.setMakeUpClassForm();
        this.setStudentEmailForm();
        this.setStudentForm();
        this.auth.setSessionData('resourceAccess', false);
        this.auth.setSessionData('browseAll', false);
        this.auth.removeSessionData('classData');
        this.auth.removeSessionData('readonly_data');
        this.auth.removeSessionData('updatedStudent');
        this.auth.removeSessionData('editView');
        this.auth.removeSessionData('readonly_startdate');
        this.auth.setSessionData('contentType', '');
        config.backdrop = 'static';
        config.keyboard = false;
        if (this.schoolStatus.length != 0) {
            this.newService.schoolChange.subscribe((res) => {
                if (res != '') {
                    if (this.route.url.includes('list-class')) {
                        this.init();
                    }
                }
                else {
                    this.init();
                }
            });
        }
        this.allowSelect = false;
        this.newService.allowSchoolChange(this.allowSelect);
        this.studentList();
        this.settings = {
            singleSelection: false,
            idField: 'student_id',
            textField: 'name_with_email',
            enableCheckAll: true,
            selectAllText: 'Select all',
            unSelectAllText: 'UnSelect all',
            allowSearchFilter: true,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 139,
            itemsShowLimit: 3,
            searchPlaceholderText: 'Search Student',
            noDataAvailablePlaceholderText: 'No data available',
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
        };
    }
    setMakeUpClassForm() {
        this.makeUpClass = this.formBuilder.group({
            toClass: [null, Validators.required],
            from_Date: ['', Validators.required]
        });
    }
    setStudentEmailForm() {
        this.studentEmailForm = this.formBuilder.group({
            emails: this.formBuilder.array([], [this.validateArrayNotEmpty]),
            message: '',
            is_makeup: false,
            start_date: ''
        });
    }
    addStudentClicked() {
        this.addStudentEnabled = !this.addStudentEnabled;
        this.setStudentForm();
    }
    setStudentForm() {
        this.addStudentForm = this.formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            email_id: ['', Validators.required],
            grade: [null, Validators.required],
        });
    }
    add(event) {
        const a = event.value.split(/[ ,]+/);
        console.log(a.length, 'event.value');
        if (a.length != 0) {
            for (let i = 0; i < a.length; i++) {
                if (this.validateEmail(a[i])) {
                    this.emailList.push({ value: a[i], invalid: false });
                }
                else if (a[i] != '') {
                    this.emailList.push({ value: a[i], invalid: true });
                    this.studentEmailForm.controls['emails'].setErrors({ incorrectEmail: true });
                }
                console.log(this.emailList, 'emailList');
            }
        }
        else {
            if (a) {
                if (this.validateEmail(a)) {
                    this.emailList.push({ value: a, invalid: false });
                }
                else if (a != '') {
                    this.emailList.push({ value: a, invalid: true });
                    this.studentEmailForm.controls['emails'].setErrors({ incorrectEmail: true });
                }
                console.log(this.emailList, 'emailList');
            }
        }
        if (event.input) {
            event.input.value = '';
        }
        this.emailList = this.removeDuplicates(this.emailList, 'value');
        const validation = this.emailList;
        this.validationEmail = validation.every((items) => {
            return !items.invalid;
        });
        console.log(this.emailList, 'emailListOveral');
    }
    redirectToAnnouncement(value, event) {
        console.log(value, 'value');
        this.auth.setSessionData('announcement-class', [value.class_id]);
        this.route.navigate(['/announcement/list/add']);
        event.stopPropagation();
    }
    getCommentListCount() {
        const class_id = this.choosedData.map(items => items.class_id);
        if (class_id.length != 0) {
            const payload = {
                platform: 'web',
                user_id: this.auth.getUserId(),
                role_id: this.auth.getRoleId(),
                class_id
            };
            this.subs.push(this.sseClient.stream('classes/getCommentCount', { keepAlive: true, reconnectionDelay: 2000,
                responseType: 'event' }, { body: payload }, 'POST').subscribe((event) => {
                if (event.type === 'error') {
                    const errorEvent = event;
                }
                else if (event.type == 'message') {
                    const messageEvent = event;
                    const countArray = JSON.parse(messageEvent.data);
                    countArray.forEach((items) => {
                        const index = this.choosedData.findIndex(x => x.class_id === items.class_id);
                        this.choosedData[index].new_comments = items.new_comments;
                    });
                }
            }));
        }
        else {
            this.subs.forEach(sub => sub.unsubscribe());
        }
    }
    getMessageListCount() {
        const class_id = this.choosedData.map(items => items.class_id);
        if (class_id.length != 0) {
            const payload = {
                platform: 'web',
                user_id: this.auth.getUserId(),
                role_id: this.auth.getRoleId(),
                class_id
            };
            this.messageSubs.push(this.sseClient.stream('mailbox/getMessageCount', { keepAlive: true, reconnectionDelay: 2000,
                responseType: 'event' }, { body: payload }, 'POST').subscribe((event) => {
                if (event.type === 'error') {
                    const errorEvent = event;
                }
                else if (event.type == 'message') {
                    const messageEvent = event;
                    let cleanedData = messageEvent.data.trim();
                    const validJSONEndIndex = cleanedData.lastIndexOf(']');
                    if (validJSONEndIndex !== -1) {
                        cleanedData = cleanedData.slice(0, validJSONEndIndex + 1);
                    }
                    try {
                        const messageCountArray = JSON.parse(cleanedData);
                        messageCountArray.forEach((items) => {
                            const index = this.choosedData.findIndex(x => x.class_id === items.class_id);
                            if (index !== -1) {
                                this.choosedData[index].newMessage = items.newMessage;
                            }
                        });
                    }
                    catch (error) {
                        console.error('Failed to parse JSON:', error, cleanedData);
                    }
                }
            }));
        }
        else {
            this.messageSubs.forEach(message => message.unsubscribe());
        }
    }
    removeDuplicates(originalArray, prop) {
        var newArray = [];
        var lookupObject = {};
        for (var i in originalArray) {
            lookupObject[originalArray[i][prop]] = originalArray[i];
        }
        for (i in lookupObject) {
            newArray.push(lookupObject[i]);
        }
        return newArray;
    }
    removeEmail(data) {
        console.log('Removing ' + data);
        if (this.emailList.indexOf(data) >= 0) {
            this.emailList.splice(this.emailList.indexOf(data), 1);
        }
        console.log(this.emailList, 'emailListremove');
        const validation = this.emailList;
        this.validationEmail = validation.every((items) => {
            return !items.invalid;
        });
    }
    ngOnInit() {
        this.auth.removeSessionData('backOption');
    }
    ngOnDestroy() {
        this.setSearch_Filter(this.classlisthighlight);
        this.subs.forEach(val => val.unsubscribe());
        this.messageSubs.forEach(value => value.unsubscribe());
    }
    validateArrayNotEmpty(c) {
        if (c.value && c.value.length === 0) {
            return {
                validateArrayNotEmpty: { valid: false },
            };
        }
        return null;
    }
    validateEmail(email) {
        // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
    init() {
        this.getSearch_Filter();
        this.showLoader = false;
        if (this.auth.getRoleId() == '2') {
            this.teacherList();
        }
        this.teacherType = this.auth.getRoleId() == '4' ? this.auth.getSessionData('teacher_type') : '1';
        this.allowTransfer = this.auth.allowTransfer;
        this.manageStudent = this.auth.manageStudent;
        this.manageClass = this.auth.manageClass;
        this.showStudentEmailId = this.auth.showStudentEmailId;
        this.schoolIdNo();
        this.gradeList();
        this.subjectList();
        this.batchDataList();
        this.getCourseList();
    }
    checkClassDeleteConditions() {
        return this.auth.getRoleId() == '2' || (this.auth.getRoleId() == '4' && this.auth.getSessionData('teacher_type') == '1');
    }
    deleteClassModal(row) {
        this.classDetails = row;
        this.modalRef = this.modalService.open(this.deleteClassDialog);
    }
    deleteClassList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.classDetails.class_id,
        };
        this.classes.deleteclass(data).subscribe((successData) => {
            this.deleteClassSuccess(successData);
        }, (error) => {
            console.error(error, 'class_delete');
        });
    }
    deleteClassSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success('Class deleted Successfully', 'Class');
            this.modalRef.close();
            const classIndex = this.choosedData.findIndex((x) => x.class_id == this.classDetails.class_id);
            console.log(classIndex, 'classIndex');
            this.choosedData.splice(classIndex, 1);
            this.classList(this.classlisthighlight);
        }
        else {
            this.toastr.error(successData.ResponseObject, 'Class');
        }
    }
    onItemSelect(event, select) {
        console.log(event, 'event');
        this.studentDataList.forEach((item) => {
            if (select == 'single') {
                if (item.student_id == event.student_id) {
                    this.newlySelectedStuent.push(item);
                }
            }
            else {
                // this.newlySelectedStuent = [];
                event.forEach((items1) => {
                    if (item.student_id == items1.student_id) {
                        this.newlySelectedStuent.push(item);
                    }
                });
            }
        });
        console.log(this.newlySelectedStuent, 'newlySelectedstudent');
    }
    onDeSelect(event) {
        console.log(event, 'eventt');
        this.newlySelectedStuent.forEach((item, index) => {
            if (event.student_id == item.student_id) {
                this.newlySelectedStuent.splice(index, 1);
            }
        });
        console.log(this.newlySelectedStuent, 'newlySelected');
    }
    onDeSelectAll() {
        console.log('evenn');
        this.newlySelectedStuent = [];
    }
    childCallfunction(event) {
        event.stopPropagation();
    }
    onSave() {
        this.modalRef.close();
        this.auth.removeSessionData('Individual-Class-Report');
    }
    close() {
        this.modalRef.close();
        this.fileUploader = '';
        this.filetype = '';
    }
    classChange(event, calledFrom) {
        console.log(event, 'class_ssss');
        this.selectedChangeStudent = event;
        this.studentClassList(event.user_id);
        if (calledFrom != 'makeUp') {
            this.studentClassChange.reset();
            this.modalRef = this.modalService.open(this.changeStudent, { size: 'lg' });
        }
        else {
            this.setMakeUpClassForm();
            this.modalRef = this.modalService.open(this.makeUpClassChange, { size: 'lg' });
        }
    }
    studentClassList(id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_id: '0',
            class_id: this.idForClass,
            school_id: this.auth.getSessionData('school_id')
        };
        this.student.studentClassList(data).subscribe((successData) => {
            this.studentClassListSuccess(successData, id);
        }, (error) => {
            console.error(error, 'error');
        });
    }
    studentClassListSuccess(successData, id) {
        if (successData.IsSuccess) {
            this.allClassList = successData.ResponseObject;
            this.allClassList.forEach((val) => {
                val['fromClassLabel'] = val.class_name + '  -  ' + val.teacher_name;
            });
            console.log(this.allClassList, 'allClassList');
            // if (id == 0) {
            //     this.allClassList = successData.ResponseObject;
            //     this.allClassList.forEach((val) => {
            //         val['fromClassLabel'] = val.class_name + '  -  ' + val.teacher_name;
            //     });
            //     console.log(this.allClassList, 'allClassList');
            // } else {
            //     this.classStudentList = successData.ResponseObject;
            // }
        }
    }
    selectedClassDetails(event) {
        console.log(event, 'event');
        this.selectedToClass = event;
        if (event.status == '1') {
            const sd = event.start_date.split('-');
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
                calendarAnimation: {
                    in: 4,
                    out: 4
                }
            };
        }
    }
    gradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.classes.gradeList(data).subscribe((successData) => {
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
    subjectList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.classes.subjectList(data).subscribe((successData) => {
            this.subjectListSuccess(successData);
        }, (error) => {
            this.subjectListFailure(error);
        });
    }
    subjectListSuccess(successData) {
        if (successData.IsSuccess) {
            this.subjectData = successData.ResponseObject;
        }
    }
    subjectListFailure(error) {
        console.log(error, 'error');
    }
    batchDataList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: '2',
            list_type: 'list'
        };
        this.classes.batchList(data).subscribe((successData) => {
            this.batchListSuccess(successData);
        }, (error) => {
            this.batchListFailure(error);
        });
    }
    batchListSuccess(successData) {
        this.commondata.showLoader(false);
        if (successData.IsSuccess) {
            this.batchData = successData.ResponseObject;
        }
    }
    batchListFailure(error) {
        this.commondata.showLoader(false);
        console.log(error, 'error');
    }
    classList(id) {
        this.classlisthighlight = id;
        this.showLoader = true;
        const teacher_id = this.auth.getRoleId() == '4' ? this.auth.getUserId() : this.selectTeacher;
        // this.commondata.showLoader(true);
        const data = {
            platform: 'web',
            type: id,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            teacher_id: teacher_id ? teacher_id : '0',
            grade: this.selectGrade ? this.selectGrade : [],
            subject: this.selectSubject ? this.selectSubject : [],
            classroom: this.selectCurriculumFolder ? this.selectCurriculumFolder : '',
            page_no: this.pageNo,
            records_per_page: '10',
            search: this.searchClass && this.searchClass != '' ? this.searchClass.trimStart() : '',
            student_search: this.searchStudent && this.searchStudent != '' ? this.searchStudent.trimStart() : '',
            course_id: this.auth.getRoleId() == '2' ? this.selectCourse : []
        };
        this.classes.classesList(data).subscribe((successData) => {
            this.classListSuccess(successData);
        }, (error) => {
            this.classListFailure(error);
        });
    }
    classListSuccess(successData) {
        if (successData.IsSuccess) {
            const temp = successData.ResponseObject;
            // For first page (or when filters/search change), replace the data
            if (this.pageNo == 1) {
                this.choosedData = successData.ResponseObject;
                this.choosedData.forEach(element => {
                    element.checked = false;
                });
            }
            // For pagination (infinite scroll), append to existing data
            else if (this.pageNo > 1 && temp.length > 0) {
                for (let entry of temp) {
                    this.choosedData.push(entry);
                }
            }
            // Initialize comment and message counts
            this.choosedData.forEach(items => {
                items.new_comments = 0;
                items.newMessage = 0;
            });
            // Clean up existing subscriptions
            this.subs.forEach(val => val.unsubscribe());
            this.messageSubs.forEach(value => value.unsubscribe());
            this.showLoader = false;
            // Load comment and message counts if there's data
            if (this.choosedData.length != 0) {
                this.getCommentListCount();
                this.auth.getRoleId() == '4' ? this.getMessageListCount() : '';
            }
        }
    }
    resetSearch() {
        this.selectGrade = [];
        this.selectSubject = [];
        this.selectTeacher = null;
        this.searchClass = '';
        this.searchStudent = '';
        this.searchText = '';
        this.selectCurriculumFolder = null;
        this.classlisthighlight = 3;
        this.selectCourse = [];
        this.setSearch_Filter(this.classlisthighlight);
        this.pageNo = 1;
        this.classList(this.classlisthighlight);
    }
    classListFailure(error) {
        console.log(error, 'error');
    }
    teacherList() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.classes.individualTeacherList(data).subscribe((successData) => {
            this.teacherListSuccess(successData);
        }, (error) => {
            this.teacherListFailure(error);
        });
    }
    teacherListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.teacherData = successData.ResponseObject;
        }
    }
    teacherListFailure(error) {
        this.commondata.showLoader(false);
        console.log(error, 'error');
    }
    updateFilter(event, type) {
        if (event.trim().length > 2 || event.trim().length == 0) {
            clearTimeout(this.searchTime);
            this.searchTime = setTimeout(() => {
                this.choosedData = []; // Clear previous data
                this.classList(this.classlisthighlight);
                this.setSearch_Filter(this.classlisthighlight);
            }, 1200);
        }
    }
    updateUnifiedSearch(event) {
        // Set both searchClass and searchStudent to the same value for unified search
        this.searchClass = event;
        this.searchStudent = event;
        if (event.trim().length > 2 || event.trim().length == 0) {
            clearTimeout(this.searchTime);
            this.searchTime = setTimeout(() => {
                this.pageNo = 1;
                this.choosedData = []; // Clear previous data
                this.classList(this.classlisthighlight);
                this.setSearch_Filter(this.classlisthighlight);
            }, 1200);
        }
    }
    schoolIdNo() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.classes.idList(data).subscribe((successData) => {
            this.idListSuccess(successData);
        }, (error) => {
            this.idListFailure(error);
        });
    }
    idListSuccess(successData) {
        if (successData.IsSuccess) {
            this.idData = successData.ResponseObject;
            this.auth.setSessionData('teacher_id', this.idData[0]?.school_idno);
            this.classList(this.classlisthighlight);
        }
    }
    idListFailure(error) {
        console.log(error, 'error');
    }
    showInformation(data) {
        this.classInfo = data;
        this.modalRef = this.modalService.open(this.showInform, { size: 'sm' });
    }
    enterList(id, type, event) {
        console.log(event, 'eventtt');
        this.selectedClassid = id;
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.choosedData[id].class_id,
            grade: [this.choosedData[id].grade_id],
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0'
        };
        if (type == 'yes') {
            // this.commondata.showLoader(true);
            this.studentShow = this.choosedData[id].class_id;
            this.classes.classDetails(data).subscribe((successData) => {
                this.enterListSuccess(successData, type);
            }, (error) => {
                this.enterListFailure(error);
            });
            this.choosedData.forEach((element, index) => {
                if (index == id) {
                    element.checked = !element.checked;
                }
                else {
                    element.checked = false;
                }
            });
            if (typeof event != 'string') {
                event.stopPropagation();
            }
        }
        else if (type == 'notes') {
            this.commondata.showLoader(true);
            this.classes.classDetails(data).subscribe((successData) => {
                this.enterListSuccess(successData, type);
            }, (error) => {
                this.enterListFailure(error);
            });
        }
        else {
            this.commondata.showLoader(true);
            this.classes.classDetails(data).subscribe((successData) => {
                this.enterListSuccess(successData, type);
            }, (error) => {
                this.enterListFailure(error);
            });
        }
    }
    enterListSuccess(successData, type) {
        this.commondata.showLoader(false);
        if (successData.IsSuccess && successData.ResponseObject && successData.ResponseObject.length > 0) {
            this.className = successData.ResponseObject[0].class_name;
            this.idForClass = successData.ResponseObject[0].class_id;
            if (type == 'yes') {
                this.studentData = successData.ResponseObject[0].students;
                this.studentData.forEach((items) => {
                    items.selected = false;
                    items.student_name = items.first_name + ' ' + items.last_name;
                });
                this.studentData.sort((a, b) => a.student_name.localeCompare(b.student_name));
                this.choosedData[this.selectedClassid].no_of_students = this.studentData.length;
                console.log(this.studentData, 'studentData');
            }
            else if (type == 'notes') {
                this.showNotes = successData.ResponseObject[0].notes;
            }
            else if (['inbox', 'curriculum'].includes(type)) {
                this.auth.setSessionData('card-data', JSON.stringify(successData.ResponseObject));
                this.route.navigate(['/class/topicsAndCurriculum/' + (type == 'curriculum' ? '3' : '4')]);
            }
            else {
                this.commondata.showLoader(false);
                this.detailData = successData.ResponseObject;
                this.auth.setSessionData('classView', true);
                this.auth.setSessionData('studentlist', JSON.stringify(this.detailData[0].students));
                this.auth.setSessionData('studentlist1', JSON.stringify(this.detailData[0].students));
                this.auth.setSessionData('card-data', JSON.stringify(this.detailData));
                this.auth.setSessionData('editclass', JSON.stringify(successData.ResponseObject));
                this.auth.setSessionData('updatedStudent', 1);
                this.auth.removeSessionData('enterThroughSchedule');
                if (this.detailData[0].classDate_status == '2' || this.detailData[0].classDate_status == '5') {
                    if (!this.manageClass) {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        this.auth.setSessionData('readonly_data', 'true');
                    }
                    else {
                        this.auth.removeSessionData('readonly_startdate');
                        this.auth.removeSessionData('readonly_data');
                    }
                    if (this.detailData[0].class_status != '1') {
                        this.route.navigate(['/class/create-class/edit']);
                    }
                    else {
                        this.route.navigate(['/class/create-class/edit']);
                        this.auth.setSessionData('editclass', JSON.stringify(this.detailData));
                        this.auth.setSessionData('updatedStudent', 1);
                    }
                }
                else if (this.detailData[0].classDate_status == '4' && this.detailData[0].class_status == '0' && this.roleId != '2' && !this.manageClass) {
                    this.route.navigate(['/class/list-class']);
                }
                else if (this.detailData[0].classDate_status == '4' && (this.detailData[0].class_status == '1' || (this.roleId == '2' || this.manageClass))) {
                    console.log('1', 'enter logic');
                    if (!this.manageClass) {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        this.auth.setSessionData('readonly_data', 'true');
                    }
                    else {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        this.auth.setSessionData('classView', false);
                        console.log('2', 'enter complete class');
                    }
                    this.route.navigate(['/class/create-class/addEdit']);
                    this.auth.setSessionData('editclass', JSON.stringify(this.detailData));
                    this.auth.setSessionData('updatedStudent', 1);
                }
                else if (this.detailData[0].classDate_status == '3') {
                    if (this.detailData[0].class_status == '1') {
                        this.auth.removeSessionData('readonly_startdate');
                        this.auth.removeSessionData('readonly_data');
                    }
                    else {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        if (this.auth.checkTutorLogin) {
                            this.auth.setSessionData('readonly_data', 'true');
                        }
                        else {
                            this.auth.removeSessionData('readonly_data');
                        }
                    }
                    this.route.navigate(['/class/create-class/edit']);
                }
            }
        }
        else {
            console.error('Class detail response error:', successData);
            this.toastr.error('Unable to load class details', 'Error');
        }
    }
    enterListFailure(error) {
        this.commondata.showLoader(false);
        console.log(error, 'error');
    }
    specificMail(detail, index) {
        this.studentData.forEach((items, id) => items.selected = index === id);
        this.mailAlert(detail);
    }
    mailAlert(detail) {
        const checked = this.studentData.some((items) => items.selected === true);
        if (checked) {
            this.modalRef = this.modalService.open(this.mailbox, { size: 'lg' });
        }
        else {
            this.toastr.error('Please select students');
        }
    }
    getEditorValue(event) {
        this.editorValue = event.editor;
        this.notes = event.content;
    }
    selectAllStudent(event) {
        this.studentData.forEach((items) => {
            items.selected = event.target.checked;
        });
    }
    sendMail() {
        const studentId = [];
        this.studentData.forEach((items => {
            if (items.selectedMail === true) {
                studentId.push(items.user_id);
            }
        }));
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_id: studentId
        };
        console.log(data, 'data');
    }
    readUrl(event) {
        const file = event.target.files[0];
        this.filetype = event.target.files[0].name.split('.');
        if (event.srcElement.files[0].type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || event.srcElement.files[0].type == 'application/vnd.ms-excel') {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                this.getUrl1 = [];
                this.url = event.target.result;
                this.getUrl = this.url.split(',');
                this.getUrl1.push(this.url.split(','));
                this.onUploadFinished1(this.getUrl, event);
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
            this.toastr.success('Excel Upload Successfully', 'Success!');
        }
        else {
            this.toastr.error('Only Excel Format Is Required', 'Failed');
            this.filetype = '';
        }
    }
    onUploadFinished1(event, fileEvent) {
        this.getUrl = event[1];
    }
    openNotes(i, value) {
        this.modalRef = this.modalService.open(this.writeNoteOpen, { size: 'xl' });
        this.classId = value.class_id;
        this.notes = '';
        this.enterList(i, 'notes', 'eve');
    }
    addNotes() {
        if (this.notes == '') {
            this.toastr.error('Notes should not be empty');
            return false;
        }
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.classId,
            note: this.notes.replace(/\r?\n/g, '<br />'),
            status: '1',
            add_date: this.datePipe.transform(new Date(), 'dd-MM-yyyy')
        };
        this.classes.getNotesList(data).subscribe((successData) => {
            if (successData.IsSuccess) {
                this.showNotes = successData.ResponseObject;
                this.editorValue != '' ? this.editorValue.setContent('') : '';
                this.notes = '';
            }
            else {
                this.toastr.error(successData.ErrorObject);
            }
        }, (error) => {
        });
    }
    deletedNotes(value) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.classId ? this.classId : '',
            note: value.note,
            status: '2',
            id: value.id,
            add_date: value.add_date
        };
        this.classes.getNotesList(data).subscribe((successData) => {
            this.commondata.showLoader(false);
            if (successData.IsSuccess) {
                this.showNotes = successData.ResponseObject;
            }
            else {
                this.toastr.error(successData.ErrorObject);
            }
        }, (error) => {
            this.commondata.showLoader(false);
        });
    }
    onsave() {
        this.modalRef.close();
    }
    onScrollDown(ev) {
        this.direction = 'down';
        this.pageNo++;
        this.classList(this.classlisthighlight);
    }
    onUp(ev) {
        this.direction = 'up';
    }
    shareEmail(value, calledForm) {
        console.log(value);
        if (calledForm == 'addStudent') {
            this.modalRef.close('addStudentDialog');
        }
        this.emailList = [];
        this.blukEmailValue = [];
        this.selectClassData = value;
        this.modalRef = this.modalService.open(this.addMultipleEmailDialog, { size: 'lg' });
    }
    // curicullum(value) {
    //     console.log(value, 'value');
    //     this.auth.setSessionData('card-data', JSON.stringify([value]));
    //     this.route.navigate(['/class/topicsAndCurriculum/3']);
    // }
    setSearch_Filter(id) {
        let data = JSON.parse(this.auth.getSessionData(SessionConstants.classSearch));
        if (data != null) {
            data.forEach((items) => {
                if (items.school_id == this.auth.getSessionData('school_id')) {
                    items.studentName = this.searchStudent;
                    items.className = this.searchClass;
                    items.subject = this.selectSubject;
                    items.grade = this.selectGrade;
                    items.teacher = this.selectTeacher;
                    items.curriculum_Folder = this.selectCurriculumFolder;
                    items.classDateStatus = id;
                    items.course_id = this.selectCourse;
                }
                else {
                    const searchData = {
                        grade: this.selectGrade,
                        subject: this.selectSubject,
                        teacher: this.selectTeacher,
                        className: this.searchClass,
                        studentName: this.searchStudent,
                        curriculum_Folder: this.selectCurriculumFolder,
                        school_id: this.auth.getSessionData('school_id'),
                        classDateStatus: this.classlisthighlight,
                        course_id: this.selectCourse
                    };
                    data.push(searchData);
                }
            });
            data = data.filter((test, index, array) => index === array.findIndex((findTest) => findTest.school_id === test.school_id));
            this.auth.setSessionData(SessionConstants.classSearch, JSON.stringify(data));
        }
    }
    getSearch_Filter() {
        const data = JSON.parse(this.auth.getSessionData(SessionConstants.classSearch));
        const teacher_id = this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0';
        data.every((items) => {
            if (items.school_id == this.auth.getSessionData('school_id')) {
                this.searchStudent = items.studentName || '';
                this.searchClass = items.className || '';
                this.searchText = items.className || items.studentName || '';
                this.selectSubject = items.subject || [];
                this.selectGrade = items.grade || [];
                this.selectTeacher = items.teacher;
                this.selectCurriculumFolder = items.curriculum_Folder;
                this.classlisthighlight = items.classDateStatus || '3';
                this.selectCourse = items.course_id || [];
                return false;
            }
            else {
                this.searchClass = '';
                this.searchStudent = '';
                this.searchText = '';
                this.selectGrade = [];
                this.selectSubject = [];
                this.selectTeacher = null;
                this.selectCurriculumFolder = null;
                this.classlisthighlight = '3';
                this.selectCourse = [];
            }
            return true;
        });
    }
    getClassDetails(classData, type) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: classData.class_id,
            grade: [classData.grade_id],
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0'
        };
        this.commondata.showLoader(true);
        this.classes.classDetails(data).subscribe((successData) => {
            this.commondata.showLoader(false);
            if (successData.IsSuccess) {
                this.customLoader = false;
                this.recordLoader = false;
                console.log(successData, 'succ');
                this.selectedClass = successData.ResponseObject[0];
                if (type === 'call') {
                    this.selectedClass.allow_zoom_api = classData.allow_zoom_api;
                    const day = new Date().getDay();
                    const date = new Date();
                    var offset = -300; //Timezone offset for EST in minutes.
                    var estDate = new Date(date.getTime() + offset * 60 * 1000);
                    console.log(estDate, 'estDate');
                    console.log(new Date(), 'new Date()');
                    console.log(estDate.getUTCDay(), 'estDate.getUTCDay()');
                    /// day started from sunday => 0 , we are adding class in from the value 1 => monday .
                    const dayValue = estDate.getUTCDay() == 0 ? 7 : estDate.getUTCDay();
                    this.selectedClass.availabilityDate = this.selectedClass.availabilityDate.filter((item) => {
                        return item.slotday == dayValue;
                    });
                    console.log(this.selectedClass.availabilityDate, 'date');
                    if (this.selectedClass.availabilityDate.length == 0) {
                        this.modalRef = this.modalService.open(this.zoomDialog1, { size: 's' });
                    }
                    else if (this.selectedClass.availabilityDate.length > 1) {
                        this.modalRef = this.modalService.open(this.meetingSelection, { size: 'lg' });
                        // if (this.roleId == '2') {
                        //     this.modalRef = this.modalService.open(this.meetingSelection, {size: 's'});
                        // } else if (this.roleId == '4') {
                        //     this.selectedClass.availabilityDate = this.selectedClass.availabilityDate.filter((item) => {
                        //         return this.userId == item.teacher_id;
                        //     });
                        // }
                    }
                    else {
                        if (this.selectedClass.allow_zoom_api == '0') {
                            console.log(this.selectedClass.availabilityDate[0], 'this.selectedClass.availabilityDate[0]');
                            this.navigateOutsideZoom(this.selectedClass.availabilityDate[0]);
                        }
                        else {
                            this.getMeetingLink(this.selectedClass, 0);
                        }
                    }
                }
                else if (type === 'recording') {
                    // let recordings = [];
                    // this.selectedClass.availabilityDate.forEach( (item) => {
                    //     recordings.push(...item.meeting_recording);
                    // });
                    // this.videoSource = recordings;
                    this.getClassRecording(classData);
                }
            }
        }, (error) => {
            this.commondata.showLoader(false);
            this.customLoader = false;
            this.enterListFailure(error);
        });
    }
    chooseSchedule(datum, index) {
        if (datum.allow_zoom_api == '0') {
            this.navigateOutsideZoom(this.selectedClass.availabilityDate[index]);
        }
        else {
            this.getMeetingLink(datum, index);
        }
    }
    getMeetingLink(datum, index) {
        console.log(datum, 'datum');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            start_date: datum.start_date,
            end_date: datum.end_date,
            class_id: datum.class_id,
            class_type: datum.class_type,
            allow_zoom_api: datum.allow_zoom_api,
            notes: datum.notes,
            schedule_id: datum.availabilityDate[index].shechdule_id,
            slotday: datum.availabilityDate[index].slotday,
            slotstarttime: datum.availabilityDate[index].slotstarttime,
            slotendtime: datum.availabilityDate[index].slotendtime,
            slotselected: datum.availabilityDate[index].slotselected,
        };
        this.classes.zoomInstant(data).subscribe((successData) => {
            this.zoomInstantSuccess(successData, datum);
        }, (error) => {
            this.toastr.error(error.ErrorObject, 'Failed!');
            this.commondata.showLoader(false);
        });
    }
    zoomInstantSuccess(successData, datum) {
        this.commondata.showLoader(false);
        if (successData.IsSuccess) {
            console.log(successData.ResponseObject, 'successData.ResponseObject');
            if (datum.allow_zoom_api == '0') {
                // this.navigateOutsideZoom(successData.ResponseObject);
            }
            else if (datum.allow_zoom_api == '1') {
                if (this.settingValue == '2') {
                    this.selectedClass.teacher_link = successData.ResponseObject.teacher_link;
                    console.log(this.selectedClass, 'selectedClass both');
                    this.modalRef = this.modalService.open(this.zoomDialog, { size: 's' });
                }
                else if (this.settingValue == '1') {
                    this.navigateOutsideZoom(successData.ResponseObject);
                }
                else if (this.settingValue == '0') {
                    this.zoomService.initZoomMeeting(datum);
                }
            }
        }
        else {
            this.toastr.error(successData.ErrorObject, 'Failed!');
        }
    }
    getClassRecording(classData) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: classData.class_id,
            grade: [classData.grade_id],
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0'
        };
        this.classes.recording(data).subscribe((successData) => {
            this.commondata.showLoader(false);
            if (successData.IsSuccess) {
                console.log(successData, 'successdatasdd');
                let recordings = [];
                successData.ResponseObject.forEach((item) => {
                    recordings.push(...item.meeting_recording);
                });
                this.videoSource = recordings;
                // this.videoSource = successData.ResponseObject;
                this.modalRef = this.modalService.open(this.recordinglist, { size: 's' });
            }
        }, (error) => {
            this.commondata.showLoader(false);
        });
    }
    openZoomDialog(classData) {
        this.selectedClass = classData;
        this.emailList = [];
        console.log(this.selectedClass, 'selectedClass');
        if (!this.customLoader) {
            this.customLoader = true;
            this.getClassDetails(classData, 'call');
        }
    }
    openRecordingList(classData) {
        this.selectedClass = classData;
        console.log(this.selectedClass, 'selectedClass');
        if (!this.recordLoader) {
            this.recordLoader = true;
            this.getClassDetails(classData, 'recording');
        }
    }
    navigateOutsideZoom(data) {
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        if (this.selectedClass.allow_zoom_api == '0') {
            console.log(data.meeting_link, 'data.meeting_link');
            link.setAttribute('href', data.meeting_link);
        }
        else {
            console.log(data.teacher_link, 'data.teacher_link');
            link.setAttribute('href', data.teacher_link);
        }
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    videoTemplate(data) {
        this.modalRef1 = this.modalService.open(this.video, { size: 'lg' });
    }
    navigateOutsideRecording(data) {
        console.log(data, 'data');
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        // link.setAttribute('href', data.meeting_recording);
        link.setAttribute('href', data.play_video);
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    addStudent(value, index) {
        console.log(value, 'list');
        this.selectedClassid = index;
        this.studentName = [];
        this.selectClassData = value;
        this.searchStudentList(1);
        this.modalRef = this.modalService.open(this.addStudentDialog, {
            size: 'lg',
            windowClass: 'customModalRef',
            scrollable: false
        });
    }
    getGradeValue(event) {
        console.log(event, 'event');
        if (typeof event == 'undefined') {
            this.gradeValue = [];
            this.searchStudentList(1);
        }
        else if (event.length == 0) {
            this.gradeValue = undefined;
            this.searchStudentList(2);
            this.studentDataList = [];
        }
        else {
            this.gradeValue = [];
            for (let i = 0; i < event.length; i++) {
                this.gradeValue.push(event[i].grade_id);
            }
            this.searchStudentList(1);
        }
    }
    searchStudentList(id) {
        if (this.gradeValue != '') {
            const data = {
                platform: 'web',
                type: 'list',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                end_date: this.choosedData[0].end_date,
                grade_id: this.gradeValue,
            };
            this.classes.searchList(data).subscribe((successData) => {
                this.addstudentListSuccess(successData, id);
            }, (error) => {
                this.addstudentListFailure(error);
            });
        }
        else {
            this.studentDataList = [];
        }
    }
    addstudentListSuccess(successData, id) {
        if (successData.IsSuccess) {
            this.studentDataList = successData.ResponseObject;
            console.log(this.studentDataList, 'studentDataLIST');
            // this.studentName = undefined;
            const result1 = this.studentDataList;
            const result2 = this.studentData;
            this.studentDataList = result1.filter(function (o1) {
                return !result2?.some(function (o2) {
                    return o1.student_id === o2.student_id; // return the ones with equal id
                });
            });
            console.log(this.newlySelectedStuent, 'newlyAddeddd');
            this.studentDataList.forEach((list) => {
                if (!this.showStudentEmailId) {
                    list.name_with_email = list.name + (list.grade_name != '' ? '  - ' + list.grade_name : '');
                }
                else {
                    list.name_with_email = list.name + ' ( ' + (list.student_id) + ' ) ' + (list.grade_name != '' ? '  - ' + list.grade_name : '');
                }
            });
            console.log(this.studentDataList, 'studentDataList');
            if (id == 2) {
                // this.studentDataList = [];
                this.studentName = [];
            }
        }
        // this.selectAllForDropdownItems(this.schoolDataList);
    }
    addstudentListFailure(error) {
        console.log(error, 'error');
    }
    closeStudentModRef() {
        this.modalRef.close();
        this.gradName = undefined;
        this.newlySelectedStuent = [];
        this.schoolDataList = [];
    }
    getStudentFullDetail(item) {
        this.allStudentList.forEach((val) => {
            if (val.user_id == item.user_id) {
                this.viewdetail = val;
                this.studentName = val.student_name;
            }
        });
        this.modalRef = this.modalService.open(this.viewoveralldetails, { size: 'xl' });
        console.log(this.viewdetail, 'viewDetail');
    }
    studentFullDetailSuccess(successData, item) {
        if (successData.IsSuccess) {
        }
    }
    editStudent(rows) {
        // if (this.manageStudent) {
        //
        // } else if (this.allowEdit == false) {
        //     this.toastr.error('You don\'t have permission to update student details');
        // }
        this.allStudentList.forEach((list) => {
            if (list.user_id == rows.user_id) {
                console.log(list, 'student pass data');
                this.auth.setSessionData('editStudent', JSON.stringify(list));
                this.auth.setSessionData('navigation', 'class');
                this.route.navigate(['/student/create-student/edit']);
            }
        });
    }
    studentList() {
        const data = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.student.getStudentList(data).subscribe((successData) => {
            this.studentListSuccess(successData);
        }, (error) => {
            console.log(error, 'student list err');
        });
    }
    studentListSuccess(successData) {
        if (successData.IsSuccess) {
            this.allStudentList = successData.ResponseObject;
        }
    }
    deleteStudentAlert(value) {
        this.modalRef = this.modalService.open(this.deleteStudentAlertDialog, { size: 's' });
        this.getDeleteStudentData = value;
    }
    deleteStudentList(value) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.studentShow,
            student_id: value.user_id
        };
        this.classes.deleteStudentList(data).subscribe((successData) => {
            this.deleteStudentListSuccess(successData, value);
        }, (error) => {
            console.log(error);
        });
    }
    deleteStudentListSuccess(successData, value) {
        if (successData.IsSuccess) {
            // this.studentData = [];
            this.studentData.forEach((item, index) => {
                console.log(item, 'items');
                if (item.user_id == value.user_id) {
                    this.studentData.splice(index, 1);
                }
            });
            console.log(this.studentData, 'studentDta');
            this.modalRef.close();
            this.toastr.success(successData.ResponseObject);
            this.enterList(this.selectedClassid, 'yes', 'eve');
            // this.classList(this.classlisthighlight);
        }
    }
    submitClass(type) {
        if (this.newlySelectedStuent.length != 0) {
            if (this.studentAddedType == '0' || (this.studentAddedType == '1' && this.effectiveStartDate)) {
                const data = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    school_id: this.selectClassData.school_id,
                    teacher_id: this.selectClassData.teacher_id,
                    class_name: this.selectClassData.class_name,
                    subject: this.selectClassData.subject,
                    start_date: this.studentAddedType == '0' ? this.selectClassData.start_date : (this.effectiveStartDate ?
                        this.datePipe.transform(this.effectiveStartDate.singleDate.jsDate, 'yyyy-MM-dd') : ''),
                    end_date: this.studentAddedType == '0' ? this.selectClassData.end_date : (this.effectiveStartDate ?
                        this.datePipe.transform(this.effectiveStartDate.singleDate.jsDate, 'yyyy-MM-dd') : ''),
                    start_time: this.selectClassData.start_time,
                    end_time: this.selectClassData.end_time,
                    grade: this.gradName == undefined ? '' : this.gradName,
                    meeting_link: this.selectClassData.meeting_link,
                    meeting_id: this.selectClassData.meeting_id,
                    passcode: this.selectClassData.passcode,
                    class_code: this.selectClassData.class_code,
                    status: this.selectClassData.status,
                    class_id: this.selectClassData.class_id,
                    students: this.newlySelectedStuent,
                    is_makeup: this.studentAddedType ?? '0'
                };
                this.classes.submit(data).subscribe((successData) => {
                    this.submitClassSuccess(successData, type);
                }, (error) => {
                    this.submitClassFailure(error);
                });
            }
            else {
                this.toastr.error('Please select effective start date');
            }
        }
        else {
            this.toastr.error('Please Select Student');
        }
    }
    submitClassSuccess(successData, type) {
        if (successData.IsSuccess) {
            this.newlySelectedStuent = [];
            this.gradName = undefined;
            this.auth.setSessionData('submit-data', JSON.stringify(successData.ResponseObject[0]));
            this.auth.removeSessionData('updatedStudent');
            this.auth.removeSessionData('readonly_data');
            this.auth.removeSessionData('readonly_startdate');
            this.auth.removeSessionData('studentlist1');
            this.auth.removeSessionData('class-curriculum');
            const redirectSchedulePage = !!this.auth.getSessionData('enterThroughSchedule');
            this.studentAddedType = '0';
            this.effectiveStartDate = null;
            this.modalRef.close();
            if (type == '1') {
                this.toastr.success(successData.ResponseObject, 'Class');
                this.auth.removeSessionData('editView');
                if (redirectSchedulePage == true) {
                    this.auth.removeSessionData('enterThroughSchedule');
                    // this.route.navigate(['/schedule/schedule-page']);
                }
                else {
                    // this.route.navigate(['/class/list-class']);
                }
                this.studentData = [];
                this.enterList(this.selectedClassid, 'yes', 'eve');
            }
        }
        else {
            this.toastr.error(successData.ResponseObject);
        }
    }
    submitClassFailure(error) {
        console.log(error, 'error');
        this.toastr.error(error.ResponseObject);
    }
    bulkMail() {
        console.log(this.emailList, 'mail');
        const ismakeUpClass = this.studentEmailForm.controls.is_makeup.value;
        console.log(this.studentEmailForm.valid, 'emailVali');
        console.log(this.emailList.length != 0 && ((ismakeUpClass && this.studentEmailForm.valid) || !ismakeUpClass));
        const startDate = this.studentEmailForm.controls.start_date.value ?? '';
        if (this.emailList.length != 0 && ((ismakeUpClass && startDate != '') || !ismakeUpClass)) {
            this.showBulkEmailLoader = true;
            for (let i = 0; i < this.emailList.length; i++) {
                this.blukEmailValue.push(this.emailList[i].value);
            }
            console.log(this.blukEmailValue, 'emaildata');
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                class_id: this.selectClassData.class_id,
                student_id: [],
                email_id: this.blukEmailValue,
                message: this.studentEmailForm.controls.message.value,
                is_makeup: ismakeUpClass ? '1' : '0',
                start_date: ismakeUpClass ? startDate != '' && startDate
                    ? this.datePipe.transform(startDate.singleDate.jsDate, 'yyyy-MM-dd') : '' : '',
                end_date: ismakeUpClass ? startDate != '' && startDate
                    ? this.datePipe.transform(startDate.singleDate.jsDate, 'yyyy-MM-dd') : '' : '',
            };
            this.classes.bulkMail(data).subscribe((successData) => {
                this.bulkMailSuccess(successData);
            }, (error) => {
                this.showBulkEmailLoader = false;
                console.error(error, 'error');
            });
        }
        else {
            if (this.emailList.length == 0) {
                this.toastr.error('Please enter Email-Id');
            }
            else if (ismakeUpClass && startDate == '') {
                this.toastr.error('Please Enter MakeUp Class Start Date');
                this.validationService.validateAllFormFields(this.studentEmailForm);
            }
        }
    }
    bulkMailSuccess(successData) {
        if (successData.IsSuccess) {
            this.modalRef.close();
            this.toastr.success(successData.ResponseObject);
        }
        else {
            this.blukEmailValue = [];
            this.toastr.error(successData.ErrorObject);
        }
        this.showBulkEmailLoader = false;
    }
    submitChangeClass() {
        if (this.idForClass == this.studentClassChange.controls.toClass.value) {
            this.toastr.error('From Class and To Class should be different');
            return false;
        }
        console.log(this.studentClassChange.controls.from_startdate.value, 'startdata');
        if (this.studentClassChange.valid) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                from_class: this.idForClass,
                to_class: this.studentClassChange.controls.toClass.value,
                from_date: this.selectedToClass.start_date,
                end_date: this.selectedToClass.end_date,
                joining_date: this.studentClassChange.controls.from_startdate.value == null ? '' : this.datePipe.transform(this.studentClassChange.controls.from_startdate.value.singleDate.jsDate, 'yyyy-MM-dd'),
                student_id: this.selectedChangeStudent.user_id,
                status: '1'
            };
            this.student.changeClass(data).subscribe((successData) => {
                this.submitMakeUpOrChangeSuccess(successData);
            }, (error) => {
                console.error(error, 'Submit_error');
            });
        }
        else {
            this.validationService.validateAllFormFields(this.studentClassChange);
            this.toastr.error('Please Select all the mandatory fields');
        }
    }
    submitMakeUpOrChangeSuccess(successData) {
        if (successData.IsSuccess) {
            this.onSelect(this.selectedChangeStudent, 'non_direct');
            console.log(successData.ResponseObject, 'dasd');
            this.toastr.success(successData.ResponseObject);
            this.removeAction([this.selectedChangeStudent]);
            this.modalRef.close();
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    onSelect(selected, type) {
        let selectedItem = [];
        if (type == 'direct') {
            // this.selected = selected.selected;
            selected.selected.forEach((item) => {
                selectedItem.push(item.user_id);
            });
        }
        else {
            let shiftSelected = [selected];
            // this.selected = shiftSelected;
            shiftSelected.forEach((item) => {
                selectedItem.push(item.user_id);
            });
        }
        // type == 'direct' ? selected.selected : selected;
        // this.selected = selected.selected;
        // selected.selected.forEach((item) => {
        //     selectedItem.push(item.user_id);
        // });
        this.studentData.forEach((item) => {
            item.isSelect = selectedItem.includes(item.user_id);
        });
    }
    removeAction(selected) {
        let data = [];
        //    this.selected = [];
        this.studentData.forEach((item, index) => {
            if (item.isSelect == false) {
                data.push(item);
            }
        });
        //    this.selected.filter((item) => {
        //         return item.isSelect == true;
        //     });
        //    this.selectedRows = selected;
        //     for (let j = 0; j < this.selectedRows.length; j++) {
        //         for (let k = 0; k < this.studentData.length; k++) {
        //             if (this.selectedRows[j].student_id == this.studentData[k].student_id) {
        //                 this.studentData[k].status = '0';
        //             }
        //         }
        //     }
        data.forEach((items) => items.student_name = items.first_name + ' ' + items.last_name);
        data.sort((a, b) => a.student_name.localeCompare(b.student_name));
        this.studentData = [...data];
        //    this.temp = data;
        this.auth.setSessionData('studentlist1', JSON.stringify(this.studentData));
        this.auth.setSessionData('studentlist', JSON.stringify(this.studentData));
    }
    closeOverAll() {
        this.modalRef.close('viewoveralldetails');
    }
    getCourseList() {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(payload, urls.courseList).subscribe((successData) => {
            this.courseListData = successData.IsSuccess ? successData.ResponseObject : [];
            this.courseListData.push({ course_id: '0', course_name: 'Other Classes - Without Course', status: '' });
        }, (error) => {
            console.error(error, ' error');
        });
    }
    addClass() {
        if (this.auth.getRoleId() == '2') {
            this.route.navigate(['/class/schedule/add']);
        }
        else {
            this.route.navigate(['/class/create-class/add']);
        }
    }
    addstudent() {
        const addresslist = [{ address1: '', address2: '', city: '', state: '', country: '', postal_code: '', address_type: '2' },
            { address1: '', address2: '', city: '', state: '', country: '', postal_code: '', address_type: '3' }];
        if (this.addStudentForm.valid) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                first_name: this.addStudentForm.controls.first_name.value,
                last_name: this.addStudentForm.controls.last_name.value,
                gender: '',
                birthday: '',
                school_id: this.auth.getSessionData('school_id'),
                school_idno: '',
                grade_id: this.addStudentForm.controls.grade.value ?? '',
                email_id: this.addStudentForm.controls.email_id.value,
                mobile: [],
                batch_id: '',
                registration_date: '',
                dropped_date: '',
                address: addresslist,
                parent1_firstname: '',
                parent1_lastname: '',
                parent2_firstname: '',
                parent2_lastname: '',
                parent1_email_ids: [],
                parent2_email_ids: [],
                profile_url: '',
                profile_thumb_url: '',
                status: '1'
            };
            console.log(data, 'data');
            this.student.studentAdd(data).subscribe((successData) => {
                this.addStudentSuccess(successData);
            }, (error) => {
                console.error(error, 'add_Student');
            });
        }
        else {
            this.validationService.validateAllFormFields(this.addStudentForm);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    addStudentSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject, 'Student');
            this.searchStudentList(1);
            this.addStudentEnabled = false;
        }
        else {
            this.toastr.error(successData.ErrorObject, 'Student');
        }
    }
    allReports(data) {
        data.viewType = '1';
        data.manageClass = true;
        data.content_id = '0';
        data.test_type_id = '0';
        this.auth.setSessionData('report_type', 'reportFromClass');
        this.auth.setSessionData('reportCalledFrom', 'list');
        this.auth.setSessionData('All-Reports', JSON.stringify(data));
        this.route.navigate(['/report/report']);
    }
    reportDetails(data) {
        this.auth.setSessionData('Individual-Class-Report', JSON.stringify(data));
        this.modalRef = this.modalService.open(this.reports, { size: 'xl' });
        this.contentNameValue = '';
    }
    navigateToSATReport(data) {
        const satReportDetails = {
            class_id: data.class_id,
            class_name: data?.class_name,
            student_id: this.auth.getRoleId() == '5' ? this.auth.getUserId() : '0',
            content_id: '0',
            student_content_id: '0',
            test_type_id: '0',
        };
        this.auth.setSessionData('satReportData', JSON.stringify(satReportDetails));
        this.auth.setSessionData('reportCalledFrom', 'list');
        this.route.navigate(['sat-report']);
    }
    static { this.ɵfac = function ListClassComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListClassComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.NgbModalConfig), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i4.TeacherService), i0.ɵɵdirectiveInject(i5.AuthService), i0.ɵɵdirectiveInject(i6.CommonDataService), i0.ɵɵdirectiveInject(i2.NgbModal), i0.ɵɵdirectiveInject(i7.DomSanitizer), i0.ɵɵdirectiveInject(i8.Router), i0.ɵɵdirectiveInject(i9.TitleCasePipe), i0.ɵɵdirectiveInject(i10.ToastrService), i0.ɵɵdirectiveInject(i11.EnvironmentService), i0.ɵɵdirectiveInject(i12.NewsubjectService), i0.ɵɵdirectiveInject(i13.SseClient), i0.ɵɵdirectiveInject(i9.DatePipe), i0.ɵɵdirectiveInject(i14.ZoomServiceService), i0.ɵɵdirectiveInject(i15.CommonService), i0.ɵɵdirectiveInject(i16.ClassService), i0.ɵɵdirectiveInject(i17.StudentService), i0.ɵɵdirectiveInject(i18.ValidationService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListClassComponent, selectors: [["app-list-class"]], viewQuery: function ListClassComponent_Query(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵviewQuery(_c14, 5);
            i0.ɵɵviewQuery(_c15, 5);
            i0.ɵɵviewQuery(_c16, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.AddClass = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.reports = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.showInform = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.writeNoteOpen = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.zoomDialog = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.zoomDialog1 = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.meetingSelection = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.recordinglist = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.video = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addStudentDialog = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addMultipleEmailDialog = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteStudentAlertDialog = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mailbox = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.changeStudent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.makeUpClassChange = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewoveralldetails = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteClassDialog = _t.first);
        } }, decls: 33, vars: 3, consts: [["reports", ""], ["showInform", ""], ["writeNoteOpen", ""], ["zoomDialog", ""], ["zoomDialog1", ""], ["recordinglist", ""], ["video", ""], ["meetingSelection", ""], ["addStudentDialog", ""], ["addMultipleEmailDialog", ""], ["deleteStudentAlertDialog", ""], ["deleteClass", ""], ["mailbox", ""], ["studentChange", ""], ["viewoveralldetails", ""], ["elseEditBlock", ""], ["multiSelect", ""], ["dp2", "angular-mydatepicker"], ["chipList", ""], ["id", "pre-loader", "class", "page-loader", 4, "ngIf"], ["class", "class-page container-fluid py-3", 4, "ngIf"], [4, "ngIf"], [1, "customModalRef"], ["id", "pre-loader", 1, "page-loader"], ["src", "assets/images/pre-loader/loader-01.svg", "alt", ""], [1, "class-page", "container-fluid", "py-3"], ["id", "custom-pdf-loader-editor", "class", "page-loader page-loader--inline", 4, "ngIf"], [1, "card", "shadow-sm", "border-0", "class-filters-card", "mb-3"], [1, "card-header", "border-0", "pb-0"], [1, "d-flex", "flex-wrap", "align-items-start", "justify-content-between", "gap-2"], [1, "h5", "mb-1"], [1, "text-neutral-600", "small", "mb-0"], ["type", "button", "class", "btn btn-primary d-flex align-items-center gap-2", 3, "routerLink", 4, "ngIf"], [1, "card-body"], [1, "row", "g-3", "align-items-end"], [1, "col-12", "col-md-6", "col-xl-3"], [1, "form-label", "text-neutral-600", "small", "fw-semibold"], ["bindLabel", "label", "bindValue", "value", "placeholder", "Select status", "appendTo", "body", 1, "filter-select", 3, "ngModelChange", "change", "items", "ngModel", "clearable"], ["class", "col-12 col-md-6 col-xl-3", 4, "ngIf"], ["bindLabel", "grade_name", "bindValue", "grade_id", "placeholder", "Select grade", "typeToSearchText", "", "multiple", "true", 1, "filter-select", 3, "ngModelChange", "change", "items", "ngModel"], ["bindLabel", "subject_name", "bindValue", "subject_id", "placeholder", "Select subject", "typeToSearchText", "", "multiple", "true", 1, "filter-select", 3, "ngModelChange", "change", "items", "ngModel"], [1, "row", "g-3", "align-items-end", "mt-2"], [1, "input-group", "input-group-sm"], [1, "input-group-text"], [1, "bi", "bi-search"], ["type", "text", "placeholder", "Search class or student", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "col-12", "col-md-6", "col-xl-3", "d-flex", "align-items-end"], [1, "btn", "btn-outline-secondary", "d-inline-flex", "align-items-center", "gap-2", "w-100", 3, "click"], [1, "bi", "bi-arrow-counterclockwise"], ["class", "row d-flex justify-content-center list-card mt-5", 4, "ngIf"], ["class", "row scrollPanel4 list-card mt-3", 4, "ngIf"], ["id", "custom-pdf-loader-editor", 1, "page-loader", "page-loader--inline"], ["type", "button", 1, "btn", "btn-primary", "d-flex", "align-items-center", "gap-2", 3, "routerLink"], [1, "bi", "bi-plus-circle"], ["bindLabel", "batch_name", "bindValue", "batch_id", "placeholder", "Select content folder", "typeToSearchText", "", 1, "filter-select", 3, "ngModelChange", "change", "items", "ngModel"], ["bindLabel", "teacher_name", "bindValue", "teacher_id", "placeholder", "Select Teacher", "typeToSearchText", "", 1, "filter-select", 3, "ngModelChange", "change", "items", "ngModel"], ["placeholder", "Select Course", 3, "ngModelChange", "change", "ngModel", "multiple"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "title"], ["class", "badge badge-success", 4, "ngIf"], ["class", "badge badge-warning", 4, "ngIf"], ["class", "badge badge-secondary", 4, "ngIf"], ["class", "badge badge-info", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], [1, "badge", "badge-success"], [1, "badge", "badge-warning"], [1, "badge", "badge-secondary"], [1, "badge", "badge-info"], [1, "badge", "badge-danger"], [1, "row", "d-flex", "justify-content-center", "list-card", "mt-5"], [1, "col-4"], [1, "nodataList"], [1, "row", "scrollPanel4", "list-card", "mt-3"], [1, "col-12"], ["infiniteScroll", "", 1, "row", 3, "scrolled", "scrolledUp", "infiniteScrollDistance", "infiniteScrollThrottle", "infiniteScrollContainer", "fromRoot"], [1, "col-md-12", "d-flex", "flex-column", "justify-content-center"], ["class", "card class-card class-hover w-99", 4, "ngFor", "ngForOf"], [1, "card", "class-card", "class-hover", "w-99"], [1, "row", "p-2", "cursor", 3, "click"], [1, "col-7"], [1, "t-period"], ["class", "badge badge-success mr-2", 4, "ngIf"], ["class", "badge badge-danger mr-2", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["title", "New Announcement", "style", "font-size: 1.4rem", "class", "fa fa-bullhorn color-primary ml-2", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["title", "New Inbox Message", "style", "font-size: 1.4rem", "class", "fa fa-commenting-o color-primary ml-2", "aria-hidden", "true", 3, "click", 4, "ngIf"], [1, "p-0"], [1, "font-weight-bold"], [1, "t-name", "font-weight-bold"], [1, "badge", "badge-pill", "badge-info", "cursor", 2, "font-size", "12px"], [1, "col-5"], [1, "row", "mb-3"], [1, "col-md-12", "text-right"], ["class", "p-0", 4, "ngIf"], [1, "row", "d-flex", "justify-content-end", 3, "click"], [1, "col-md-6", "mt-2", "d-flex", "justify-content-end"], [1, "dropdown"], [1, "btn", "btn-outline-primary"], ["aria-hidden", "true", 1, "fa", "fa-sort-desc", "float-right", "ml-2"], [1, "dropdown-content", 2, "right", "1px"], [3, "click", 4, "ngIf"], [3, "click"], ["aria-hidden", "true", 1, "fa", "fa-book", "mr-1"], ["aria-hidden", "true", 1, "fa", "fa-share-alt", "mr-1"], ["aria-hidden", "true", 1, "fa", "fa-info", "px-1"], [1, "fa", "fa-bar-chart", "mr-1"], [1, "row"], ["class", "col-12 col-md-12", 4, "ngIf"], [1, "badge", "badge-success", "mr-2"], ["aria-hidden", "true", 1, "fa", "fa-check"], [1, "badge", "badge-danger", "mr-2"], ["aria-hidden", "true", 1, "fa", "fa-times"], [1, "text-primary", 3, "click"], ["title", "New Announcement", "aria-hidden", "true", 1, "fa", "fa-bullhorn", "color-primary", "ml-2", 2, "font-size", "1.4rem", 3, "click"], [1, "upload-count"], ["title", "New Inbox Message", "aria-hidden", "true", 1, "fa", "fa-commenting-o", "color-primary", "ml-2", 2, "font-size", "1.4rem", 3, "click"], ["style", "width: 1rem;height: 1rem", "class", "spinner-border text-secondary", "role", "status", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-video-camera"], ["role", "status", 1, "spinner-border", "text-secondary", 2, "width", "1rem", "height", "1rem"], [1, "sr-only"], ["aria-hidden", "true", 1, "fa", "fa-pencil", "mr-1"], ["title", "Delete Class", "aria-hidden", "true", 1, "fa", "fa-trash", "mr-1"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle", "mr-1"], ["aria-hidden", "true", 1, "fa", "fa-file-video-o", "mr-1"], [1, "col-12", "col-md-12"], ["class", "table table-bordered text-center", 4, "ngIf"], [1, "table", "table-bordered", "text-center"], [1, "thead-light"], [1, "pl-0", 2, "border-left", "none"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "align-items-center"], ["alt", "", "src", "assets/images/icons/report.png", "title", "Report", 1, "mr-3", 2, "height", "22px", 3, "click"], ["class", "mr-3", "alt", "", "src", "assets/images/icons/transfer-class.png", "style", "height: 22px", "title", "Transfer Class", 3, "click", 4, "ngIf"], ["class", "fa fa-pencil color-primary cursor mr-3", "title", "Edit", "style", "font-size: 20px", 3, "click", 4, "ngIf"], ["class", "fa fa-trash text-danger cursor", "title", "Delete", "style", "font-size: 20px", 3, "click", 4, "ngIf"], ["alt", "", "src", "assets/images/icons/transfer-class.png", "title", "Transfer Class", 1, "mr-3", 2, "height", "22px", 3, "click"], ["title", "Edit", 1, "fa", "fa-pencil", "color-primary", "cursor", "mr-3", 2, "font-size", "20px", 3, "click"], ["title", "Delete", 1, "fa", "fa-trash", "text-danger", "cursor", 2, "font-size", "20px", 3, "click"], [1, "modal-header", "align-items-center"], [1, "modal-title"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "modal-body"], [3, "classShow", "showContent", "studentView", "timeView", "calledForm", "contentNameValue"], [1, "letter"], [1, "t-name"], [1, "t-name", "capital", "font-weight-bold"], [1, "t-name", "font-weight-bold", "capital"], [1, "modal-title", "text-center"], [1, "row", "d-flex", "px-3", "justify-content-center"], ["class", "col-11 mt-2 card class-card1 class-hover w-99", 4, "ngFor", "ngForOf"], [1, "col-11", "p-0", "mt-2"], [3, "emitEditorValue", "ngModelChange", "editorPatchValue", "height", "id", "ngModel", "showDropBtn", "showInputBtn"], [1, "col-11", "text-right", "mt-2"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "col-11", "mt-2", "card", "class-card1", "class-hover", "w-99"], ["class", "row", 4, "ngIf"], [1, "col-9", 2, "word-wrap", "break-word"], [1, "py-2"], ["class", "letter", 4, "ngIf"], [1, "mb-0", "mt-3", 3, "innerHTML"], [1, "col-3", "d-flex", "align-items-center", "justify-content-end"], ["aria-hidden", "true", 1, "fa", "fa-trash", "fa-1x", "text-danger", 2, "cursor", "pointer", 3, "click"], [1, "modal-body", "d-flex", "justify-content-right"], [1, "col-12", "text-center"], [1, "modal-footer"], [1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "row", "w-100"], [1, "col-md-12", "home-sec-scroll"], ["class", "col-md-12 mt-1 cursor", 4, "ngFor", "ngForOf"], ["class", "col-md-12 mt-1 cursor", 4, "ngIf"], [1, "col-md-12", "mt-1", "cursor"], [1, "card"], [1, "card-body", "card-hover2", 3, "click"], [1, "col-4", "align-self-center"], ["class", "t-name font-weight-bold", "style", "font-size: 11px;", 4, "ngIf"], [1, "t-name", "font-weight-bold", 2, "font-size", "11px"], [1, "card-body", "card-hover2", 2, "align-self", "center"], ["controls", "", "height", "420", "width", "700"], ["src", "http://static.videogular.com/assets/videos/videogular.mp4", "type", "video/mp4"], [1, "col-12", "mt-2", "d-flex", "flex-wrap", "justify-content-around"], ["class", "col-5 mx-1 mb-2 card-hover3", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-5", "mx-1", "mb-2", "card-hover3", 3, "click"], [1, "color-primary", "font-weight-bold"], [1, "color-grey"], [2, "font-size", "0.8rem", "font-weight", "600"], [1, "col-7", "pl-0"], [1, "modal-title", "font-weight-bold"], ["class", "text-muted mb-0", 4, "ngIf"], [1, "col-5", "d-flex", "justify-content-end", "align-items-center", "pr-0"], ["class", "btn cancel", "title", "Invite By Email", 3, "click", 4, "ngIf"], ["class", "btn cancel", 3, "click", 4, "ngIf"], ["title", "Close Add Student", 1, "fa", "fa-close", "cursor", "ml-3", 3, "click"], [1, "modal-body", "row"], ["class", "col-md-9 form-group", 4, "ngIf"], ["class", "col-md-3 form-group align-content-end", 4, "ngIf"], ["class", "col-md-9 row", 4, "ngIf"], ["class", "col-md-9 row mt-3", 4, "ngIf"], [1, "col-12", 3, "ngbCollapse"], [3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], [1, "text-danger", "ml-1"], [1, "col-xl-8", "col-md-7"], ["formControlName", "first_name", "id", "validationCustom0", "type", "text", "placeholder", "First Name", "required", "", 1, "form-control"], ["class", "error", 4, "ngIf"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], ["formControlName", "last_name", "id", "validationCustom1", "type", "text", "placeholder", "Last Name", "required", "", 1, "form-control"], ["for", "validationCustom5", 1, "col-xl-3", "col-md-4"], ["formControlName", "email_id", "id", "validationCustom5", "pattern", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$", "type", "email", "placeholder", "Email", "required", "", 1, "form-control"], ["bindLabel", "grade_name", "bindValue", "grade_id", "formControlName", "grade", "placeholder", "Select Grade", "typeToSearchText", "", 3, "items"], [1, "text-muted", "mb-0"], [1, "text-danger"], ["title", "Invite By Email", 1, "btn", "cancel", 3, "click"], [1, "btn", "cancel", 3, "click"], [1, "fa", "fa-long-arrow-left", "mr-1"], [1, "col-md-9", "form-group"], [2, "font-weight", "600"], ["bindLabel", "grade_name", "bindValue", "grade_id", "placeholder", "Select Grade", "typeToSearchText", "", "multiple", "true", 3, "ngModelChange", "change", "items", "ngModel"], [3, "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll", "placeholder", "data", "settings", "disabled", "ngModel"], [1, "col-md-3", "form-group", "align-content-end"], [1, "fa", "fa-plus-circle", "mr-1"], [1, "col-md-9", "row"], [1, "col-12", 2, "font-weight", "600"], [1, "col-3"], [1, "form-check"], ["id", "regular", "type", "radio", "name", "studentType", "value", "0", 1, "form-check-input", "cursor", 3, "ngModelChange", "ngModel", "checked"], ["for", "regular", 1, "form-check-label", "cursor"], ["id", "makeUp", "type", "radio", "value", "1", "name", "studentType", 1, "form-check-input", "cursor", 3, "ngModelChange", "checked", "ngModel"], ["for", "makeUp", 1, "form-check-label", "cursor"], [1, "col-md-9", "row", "mt-3"], [1, "d-flex", "align-items-baseline"], ["placeholder", "mm/dd/yyyy", "name", "dp2", "angular-mydatepicker", "", "autocomplete", "off", "required", "", 1, "form-control", 3, "click", "ngModelChange", "ngModel", "options"], [1, "input-group-append"], [1, "fa", "fa-calendar-o"], [1, "error"], ["style", "background-color: transparent !important;", "id", "pre-loader", 4, "ngIf"], [1, "col-sm-12", "px-0"], [1, "col-12", "mt-3", 3, "ngbCollapse"], [1, "col-xl-3", "col-md-4", "align-self-center"], [1, "col-xl-9", "col-md-8"], ["placeholder", "mm/dd/yyyy", "name", "dp2", "formControlName", "start_date", "angular-mydatepicker", "", "autocomplete", "off", "required", "", 1, "form-control", 3, "click", "options"], ["formArrayName", "emails"], ["required", "", "name", "chips", 3, "ngClass", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Enter Email Id", 2, "font-size", "14px", "height", "40px !important", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], ["class", "col-12", 4, "ngIf"], [2, "font-size", "12px"], ["rows", "3", "formControlName", "message", "placeholder", "Message", "maxlength", "500", 1, "form-control"], [1, "col-12", "mt-3"], [1, "mt-1", "mb-0", 2, "color", "black"], [2, "color", "black"], [1, "mt-3", "mb-0", 2, "color", "black"], ["target", "_blank", 1, "m-0", "color-primary", 3, "href"], [1, "col-6"], [1, "text-center", "my-2"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "disabled"], ["id", "pre-loader", 2, "background-color", "transparent !important"], ["src", "assets/images/pre-loader/loader-01.svg", "alt", "", 2, "height", "85px !important"], ["required", "", "name", "chips", 3, "removed", "ngClass", "removable"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [1, "col-md-12", "text-center"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [1, "modal-title", "align-items-center"], [1, "col-md-12", "px-0"], [1, "mb-0"], [1, "color-primary"], ["type", "button", 1, "btn", "cancel", 3, "click"], [1, "fa", "fa-close", "cursor", "align-self-center", 2, "font-size", "1.2rem", 3, "click"], [1, "col-12", "my-3"], [3, "emitEditorValue", "editorPatchValue", "height", "id", "showDropBtn", "showInputBtn"], [1, "fa", "fa-paper-plane-o"], [1, "modal-header"], [1, "modal-title", "col-12", "px-0", "font-weight-bold"], [1, "container-fluid"], [1, "col-xl-2", "col-md-3", "align-self-center"], [1, "col-xl-10", "col-md-9"], ["readonly", "", "type", "text", "placeholder", "Enter the Class Name", 1, "form-control", 3, "value"], ["bindLabel", "fromClassLabel", "bindValue", "class_id", "placeholder", "Please Select", "typeToSearchText", "", "formControlName", "toClass", "required", "", 3, "change", "items"], ["ng-option-tmp", ""], ["placeholder", "mm/dd/yyyy", "name", "dp2", "formControlName", "from_startdate", "angular-mydatepicker", "", "autocomplete", "off", "required", "", 1, "form-control", 3, "options"], [1, "btn", "btn-outline-primary", 3, "click"], ["id", "modal-basic-title", 1, "modal-title", "color-primary"], ["aria-hidden", "true", 1, "fa", "fa-close", "fa-lg", "mt-1", 2, "color", "#7F3486", "cursor", "pointer", "float", "right", 3, "click"], [3, "studentdata"]], template: function ListClassComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ListClassComponent_div_0_Template, 2, 0, "div", 19)(1, ListClassComponent_div_1_Template, 42, 15, "div", 20)(2, ListClassComponent_div_2_Template, 2, 0, "div", 21)(3, ListClassComponent_ng_template_3_Template, 6, 6, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(5, ListClassComponent_ng_template_5_Template, 28, 7, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(7, ListClassComponent_ng_template_7_Template, 14, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(9, ListClassComponent_ng_template_9_Template, 13, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(11, ListClassComponent_ng_template_11_Template, 11, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(13, ListClassComponent_ng_template_13_Template, 13, 2, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(15, ListClassComponent_ng_template_15_Template, 8, 0, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor)(17, ListClassComponent_ng_template_17_Template, 7, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor)(19, ListClassComponent_ng_template_19_Template, 53, 16, "ng-template", 22, 8, i0.ɵɵtemplateRefExtractor)(21, ListClassComponent_ng_template_21_Template, 59, 22, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor)(23, ListClassComponent_ng_template_23_Template, 14, 0, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor)(25, ListClassComponent_ng_template_25_Template, 17, 1, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor)(27, ListClassComponent_ng_template_27_Template, 12, 5, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor)(29, ListClassComponent_ng_template_29_Template, 40, 7, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor)(31, ListClassComponent_ng_template_31_Template, 6, 2, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.commondata.loader.value);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.schoolStatus == null ? null : ctx.schoolStatus.length) != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.schoolStatus == null ? null : ctx.schoolStatus.length) == 0);
        } }, dependencies: [i9.NgClass, i9.NgForOf, i9.NgIf, i2.NgbCollapse, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.RadioControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MaxLengthValidator, i1.PatternValidator, i1.FormGroupDirective, i1.FormControlName, i1.FormArrayName, i8.RouterLink, i19.NgSelectComponent, i19.NgOptionComponent, i19.NgOptionTemplateDirective, i1.NgModel, i20.AngularMyDatePickerDirective, i21.MissedWorkReportComponent, i22.EmptyschoolComponent, i23.InfiniteScrollDirective, i24.OveralldetailsComponent, i25.TinyMiceComponent, i26.MatIcon, i27.MatFormField, i27.MatError, i28.MatChipGrid, i28.MatChipInput, i28.MatChipRemove, i28.MatChipRow, i29.MultiSelectComponent, i9.DatePipe, i30.CustomDateFormatPipe], styles: [".nodataList[_ngcontent-%COMP%]{\n  background: #f8f8f9;\n  border: 2px solid #7F3486;\n  padding: 15px 25px;\n  text-align: center;\n  border-radius: 7px;\n  color:#7F3486;\n  width: 100%;\n  font-weight: bolder;\n  font-size: large;\n}\n\n.upload-count[_ngcontent-%COMP%] {\n  padding: 4px 6px;\n  margin-left: -8px;\n  font-size: 12px;\n  color: #fff;\n  font-weight: 400;\n  border-radius: 50%;\n  position: relative;\n  top: -12px !important;\n  background: #8F008A;\n}\n\n.class-page[_ngcontent-%COMP%] {\n  position: relative;\n\n  .page-loader--inline {\n    position: absolute;\n    inset: 0;\n    display: grid;\n    place-items: center;\n    background: rgba(255, 255, 255, 0.75);\n    z-index: 99;\n  }\n\n  .class-filters-card {\n    border-radius: var(--radius-lg);\n    position: relative;\n    z-index: 10;\n\n    .card-body {\n      padding-top: var(--spacing-3);\n    }\n    \n    // Ensure ng-select dropdowns appear above all content\n    ::ng-deep .ng-dropdown-panel {\n      z-index: 1000 !important;\n    }\n    \n    ::ng-deep ng-select {\n      position: relative;\n      z-index: auto;\n    }\n  }\n\n  .status-toggle {\n    .btn {\n      border-radius: var(--radius-md);\n      font-weight: 600;\n      padding: 0.45rem 1rem;\n      transition: all var(--transition-base) ease;\n\n      &.active {\n        background: var(--color-primary);\n        border-color: var(--color-primary);\n        color: #fff;\n        box-shadow: var(--shadow-sm);\n      }\n\n      &:hover:not(.active) {\n        background: rgba(143, 0, 138, 0.08);\n        border-color: var(--color-primary);\n        color: var(--color-primary);\n      }\n    }\n  }\n\n  label.form-label {\n    margin-bottom: var(--spacing-2);\n    color: var(--neutral-600);\n  }\n\n  .input-group-text {\n    background: var(--neutral-100);\n    border-color: var(--neutral-300);\n  }\n\n  .input-group .form-control {\n    border-color: var(--neutral-300);\n\n    &:focus {\n      border-color: var(--color-primary);\n      box-shadow: var(--shadow-focus);\n    }\n  }\n\n  .btn-outline-secondary {\n    border-color: var(--neutral-300);\n    color: var(--neutral-700);\n\n    &:hover {\n      background: var(--neutral-100);\n    }\n  }\n\n  // Ensure class cards are below filter dropdowns\n  .list-card {\n    position: relative;\n    z-index: 1;\n  }\n  \n  .class-card {\n    position: relative;\n    z-index: 1;\n    \n    // Fix Action dropdown z-index\n    .dropdown {\n      position: relative;\n      z-index: auto;\n      \n      &:hover {\n        z-index: 1100;\n      }\n      \n      .dropdown-content {\n        position: absolute;\n        z-index: 1100 !important;\n        background-color: #fff;\n        min-width: 200px;\n        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n        border-radius: 0.375rem;\n        border: 1px solid #e5e7eb;\n        padding: 0.5rem 0;\n        display: none;\n        \n        a {\n          display: block;\n          padding: 0.5rem 1rem;\n          color: #374151;\n          text-decoration: none;\n          transition: background-color 0.15s ease;\n          cursor: pointer;\n          \n          &:hover {\n            background-color: #f3f4f6;\n          }\n          \n          i {\n            margin-right: 0.5rem;\n          }\n        }\n      }\n      \n      &:hover .dropdown-content {\n        display: block;\n      }\n      \n      .dropdown-content-up {\n        bottom: 100%;\n        top: auto !important;\n        margin-bottom: 0.25rem;\n      }\n    }\n    \n    // When card has active dropdown, elevate it\n    &:has(.dropdown:hover) {\n      z-index: 1100;\n    }\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListClassComponent, [{
        type: Component,
        args: [{ selector: 'app-list-class', template: "<!-- Container-fluid starts-->\n<div id=\"pre-loader\" class=\"page-loader\" *ngIf=\"commondata.loader.value\">\n    <img src=\"assets/images/pre-loader/loader-01.svg\" alt=\"\">\n</div>\n\n<div class=\"class-page container-fluid py-3\" *ngIf=\"schoolStatus?.length != 0\">\n    <div id=\"custom-pdf-loader-editor\" class=\"page-loader page-loader--inline\" *ngIf=\"showLoader\">\n        <img src=\"assets/images/pre-loader/loader-01.svg\" alt=\"\">\n    </div>\n\n    <section class=\"card shadow-sm border-0 class-filters-card mb-3\">\n        <div class=\"card-header border-0 pb-0\">\n            <div class=\"d-flex flex-wrap align-items-start justify-content-between gap-2\">\n                <div>\n                    <h2 class=\"h5 mb-1\">Class Library</h2>\n                    <p class=\"text-neutral-600 small mb-0\">\n                        Filter sessions by status, grade, subject, and roster to jump into the right class quickly.\n                    </p>\n                </div>\n                <button\n                    type=\"button\"\n                    *ngIf=\"manageClass\"\n                    class=\"btn btn-primary d-flex align-items-center gap-2\"\n                    [routerLink]=\"['/class/create-class/add']\">\n                    <i class=\"bi bi-plus-circle\"></i>\n                    Add Class\n                </button>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row g-3 align-items-end\">\n                <div class=\"col-12 col-md-6 col-xl-3\">\n                    <label class=\"form-label text-neutral-600 small fw-semibold\">Status</label>\n                    <ng-select class=\"filter-select\"\n                               [items]=\"statusOptions\"\n                               bindLabel=\"label\"\n                               bindValue=\"value\"\n                               [(ngModel)]=\"classlisthighlight\"\n                               placeholder=\"Select status\"\n                               [clearable]=\"false\"\n                               appendTo=\"body\"\n                               (change)=\"pageNo = 1;choosedData = [];setSearch_Filter(classlisthighlight);classList(classlisthighlight)\">\n                    </ng-select>\n                </div>\n                <div *ngIf=\"teacherType != 1 || auth.getRoleId() == '2' || auth.getRoleId() == '6'\"\n                     class=\"col-12 col-md-6 col-xl-3\">\n                    <label class=\"form-label text-neutral-600 small fw-semibold\">Content folder</label>\n                    <ng-select class=\"filter-select\"\n                               [items]=\"batchData\"\n                               bindLabel=\"batch_name\"\n                               bindValue=\"batch_id\"\n                               [(ngModel)]=\"selectCurriculumFolder\"\n                               placeholder=\"Select content folder\"\n                               typeToSearchText=\"\"\n                               (change)=\"pageNo = 1;choosedData = [];setSearch_Filter(classlisthighlight);classList(classlisthighlight)\">\n                    </ng-select>\n                </div>\n                <div class=\"col-12 col-md-6 col-xl-3\">\n                    <label class=\"form-label text-neutral-600 small fw-semibold\">Grade</label>\n                    <ng-select class=\"filter-select\"\n                               [items]=\"gradeData\"\n                               bindLabel=\"grade_name\"\n                               bindValue=\"grade_id\"\n                               [(ngModel)]=\"selectGrade\"\n                               placeholder=\"Select grade\"\n                               typeToSearchText=\"\"\n                               multiple=\"true\"\n                               (change)=\"pageNo = 1;choosedData = [];setSearch_Filter(classlisthighlight);classList(classlisthighlight)\">\n                    </ng-select>\n                </div>\n                <div class=\"col-12 col-md-6 col-xl-3\">\n                    <label class=\"form-label text-neutral-600 small fw-semibold\">Subject</label>\n                    <ng-select class=\"filter-select\"\n                               [items]=\"subjectData\"\n                               bindLabel=\"subject_name\"\n                               bindValue=\"subject_id\"\n                               [(ngModel)]=\"selectSubject\"\n                               placeholder=\"Select subject\"\n                               typeToSearchText=\"\"\n                               multiple=\"true\"\n                               (change)=\"pageNo = 1;choosedData = [];setSearch_Filter(classlisthighlight);classList(classlisthighlight)\">\n                    </ng-select>\n                </div>\n            </div>\n            \n            <div class=\"row g-3 align-items-end mt-2\">\n                <div class=\"col-12 col-md-6 col-xl-3\">\n                    <label class=\"form-label text-neutral-600 small fw-semibold\">Search</label>\n                    <div class=\"input-group input-group-sm\">\n                        <span class=\"input-group-text\"><i class=\"bi bi-search\"></i></span>\n                        <input type=\"text\"\n                               class=\"form-control\"\n                               placeholder=\"Search class or student\"\n                               [(ngModel)]=\"searchText\"\n                               (input)=\"pageNo = 1; updateUnifiedSearch(searchText)\">\n                    </div>\n                </div>\n                <div class=\"col-12 col-md-6 col-xl-3\" *ngIf=\"auth.getRoleId() != '4' && classlisthighlight != '6'\">\n                    <label class=\"form-label text-neutral-600 small fw-semibold\">Teacher</label>\n                    <ng-select class=\"filter-select\"\n                               [items]=\"teacherData\"\n                               bindLabel=\"teacher_name\"\n                               bindValue=\"teacher_id\"\n                               [(ngModel)]=\"selectTeacher\"\n                               placeholder=\"Select Teacher\"\n                               typeToSearchText=\"\"\n                               (change)=\"pageNo = 1;choosedData = [];setSearch_Filter(classlisthighlight); classList(classlisthighlight)\">\n                    </ng-select>\n                </div>\n                <div class=\"col-12 col-md-6 col-xl-3\" *ngIf=\"(auth.getRoleId() != '4' && classlisthighlight != '6') || auth.getRoleId() == '2'\">\n                    <label class=\"form-label text-neutral-600 small fw-semibold\">Course</label>\n                    <ng-select [(ngModel)]=\"selectCourse\" [multiple]=\"true\"\n                               placeholder=\"Select Course\" (change)=\"pageNo = 1;choosedData = [];setSearch_Filter(classlisthighlight); classList(classlisthighlight)\">\n                        <ng-option *ngFor=\"let item of courseListData;\" [value]=\"item.course_id\">\n                            <div [title]=\"item.course_name\">{{item.course_name}}\n                                <span class=\"badge badge-success\" *ngIf=\"item.status == 'A'\">Approved</span>\n                                <span class=\"badge badge-warning\" *ngIf=\"item.status == 'P'\">Ready for review</span>\n                                <span class=\"badge badge-secondary\" *ngIf=\"item.status == 'D'\">Draft</span>\n                                <span class=\"badge badge-info\" *ngIf=\"item.status == 'R'\">Rework</span>\n                                <span class=\"badge badge-danger\" *ngIf=\"item.status == 'C'\">Cancelled</span></div>\n                        </ng-option>\n                    </ng-select>\n                </div>\n                <div class=\"col-12 col-md-6 col-xl-3 d-flex align-items-end\">\n                    <button (click)=\"resetSearch()\" class=\"btn btn-outline-secondary d-inline-flex align-items-center gap-2 w-100\">\n                        <i class=\"bi bi-arrow-counterclockwise\"></i>\n                        Reset filters\n                    </button>\n                </div>\n            </div>\n        </div>\n    </section>\n    \n    <div class=\"row d-flex justify-content-center list-card mt-5\" *ngIf=\"choosedData.length == 0 && !showLoader\">\n        <div class=\"col-4\">\n            <button class=\"nodataList\">No Data Available!</button>\n        </div>\n    </div>\n    <section class=\"row scrollPanel4 list-card mt-3\" *ngIf=\"choosedData.length > 0\">\n        <div class=\"col-12\">\n            <div class=\"row\"\n                 infiniteScroll\n                 [infiniteScrollDistance]=\"2\"\n                 [infiniteScrollThrottle]=\"100\"\n                 [infiniteScrollContainer]=\"selector\"\n                 [fromRoot]=\"true\"\n                 (scrolled)=\"onScrollDown($event)\"\n                 (scrolledUp)=\"onUp($event)\">\n                <div class=\"col-md-12 d-flex flex-column justify-content-center\">\n                    <div class=\"card class-card class-hover w-99\" *ngFor=\"let list of choosedData; let i = index\">\n                        <div class=\"card-body\">\n                            <div class=\"row p-2 cursor\" (click)=\"enterList(i, 'yes', $event)\">\n                                <div class=\"col-7\">\n                                    <h4 class=\"t-period\">\n                                        <small class=\"badge badge-success mr-2\" *ngIf=\"list.status == '1' && teacherType != '0'\"><i\n                                            class=\"fa fa-check\" aria-hidden=\"true\"></i></small>\n                                        <small class=\"badge badge-danger mr-2\" *ngIf=\"list.status == '2'  && teacherType != '0'\"><i\n                                                class=\"fa fa-times\" aria-hidden=\"true\"></i></small>\n                                        <ng-container *ngIf=\"(!(auth.getRoleId() == '4' && classlisthighlight == '4') || manageClass); else elseEditBlock\">\n                                            <a (click)=\"enterList(i, 'curriculum', $event);\" class=\"text-primary\"> <strong>{{list.class_name}}</strong></a>\n                                        </ng-container>\n                                        <ng-template #elseEditBlock>\n                                            <span class=\"font-weight-bold\">{{list.class_name}}</span>\n                                        </ng-template>\n\n                                        <i title=\"New Announcement\" *ngIf=\"list.announcement_type != '1'\" (click)=\"redirectToAnnouncement(list, $event)\" style=\"font-size: 1.4rem\" class=\"fa fa-bullhorn color-primary ml-2\" aria-hidden=\"true\">\n                                            <span class=\"upload-count\">{{list.new_comments}}</span>\n                                        </i>\n                                        <i title=\"New Inbox Message\" (click)=\"enterList(i, 'inbox', $event)\" *ngIf=\"auth.getRoleId() == '4'\" style=\"font-size: 1.4rem\" class=\"fa fa-commenting-o color-primary ml-2\" aria-hidden=\"true\">\n                                            <span class=\"upload-count\">{{list.newMessage}}</span>\n                                        </i>\n                                    </h4>\n                                    <p class=\"p-0\">\n                                        <!-- <span class=\"font-weight-bold\">class code: </span> <span class=\"t-name font-weight-bold\">{{list.class_code}}</span> &nbsp; <small class=\"badge badge-pill badge-info cursor\" [attr.aria-controls]=\"'#studentCount' + i\" [attr.data-target]=\"'#studentCount' + i\" data-toggle=\"collapse\" (click)=\"enterList(i, 'yes')\">{{list.no_of_students}}</small><br/> -->\n                                        <span class=\"font-weight-bold\">Class Code: </span> <span\n                                            class=\"t-name font-weight-bold\">{{list.class_code}}</span> &nbsp; <small\n                                            class=\"badge badge-pill badge-info cursor\"\n                                            style=\"font-size: 12px\">{{list.no_of_students - 0}}\n                                        Student{{list.no_of_students > 1 ? 's' : ''}}</small><br/>\n                                        <span class=\"font-weight-bold\">Teacher Assigned: </span> <span\n                                            class=\"t-name font-weight-bold\">{{list.teacher_name}}</span>\n                                    </p>\n                                </div>\n                                <div class=\"col-5\">\n                                    <div class=\"row mb-3\">\n                                        <div class=\"col-md-12 text-right\">\n                                            <p *ngIf=\"list.start_date == '0000-00-00' && list.end_date == '0000-00-00'\"\n                                               class=\"p-0\"><span class=\"font-weight-bold\">Start: </span> &nbsp; &nbsp;\n                                                <span class=\"font-weight-bold\">End: </span>\n                                            </p>\n                                            <!--                                            <button (click)=\"newSubService.changeDateFormat('short')\"></button>-->\n                                            <p class=\"p-0\"\n                                               *ngIf=\"list.start_date != '0000-00-00'&& list.end_date != '0000-00-00'\">\n                                                <span class=\"font-weight-bold\">Start: </span>\n                                                <!--                                                <span class=\"t-name font-weight-bold\">{{list.start_date|date:'MM/dd/yyyy'}}</span> &nbsp; &nbsp;-->\n                                                <span class=\"t-name font-weight-bold\">{{list.start_date | customDateFormat}}</span>\n                                                &nbsp; &nbsp;\n                                                <span class=\"font-weight-bold\">End: </span> <span\n                                                    class=\"t-name font-weight-bold\">{{list.end_date| customDateFormat}}</span>\n                                            </p>\n                                        </div>\n                                        <!--                                <div class=\"col-md-12\">-->\n                                        <!--                                    <small class=\"ml-3 pull-right\">Assessment: <span class=\"t-name\">{{list.no_of_assessments}}</span></small>-->\n                                        <!--                                    <small class=\"ml-3 pull-right\">Assignment: <span class=\"t-name\">{{list.no_of_assignments}} </span></small>-->\n                                        <!--                                    <small class=\"pull-right\">Resources: <span class=\"t-name\">{{list.no_of_resources}} </span></small>-->\n                                        <!--                                </div>-->\n                                    </div>\n                                    <!--                            <div class=\"row d-flex mb-5\">-->\n                                    <!--                                <div class=\"col-md-12\">-->\n                                    <!--                                    <small class=\"pull-right\">No. of Students: <span class=\"t-name\">{{list.no_of_students}}</span></small>-->\n                                    <!--                            </div>-->\n                                    <!--                            </div>-->\n                                    <!--                            <div class=\"row d-flex mb-4\">-->\n                                    <!--                                <div class=\"col-md-12\"></div>-->\n                                    <!--                            </div>-->\n                                    <div class=\"row d-flex justify-content-end\" (click)=\"childCallfunction($event)\">\n                                        <!-- <div class=\"col-6\">\n                                            <div class=\"dropdown\">\n                                                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                  Dropdown button\n                                                </button>\n                                                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                                                  <a class=\"dropdown-item\" href=\"#\">Action</a>\n                                                  <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                                                  <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                                                </div>\n                                              </div>\n                                        </div> -->\n                                        <div class=\"col-md-6 mt-2 d-flex justify-content-end\">\n                                            <div class=\"dropdown\">\n                                                <button class=\"btn btn-outline-primary\">Action <i\n                                                        class=\"fa fa-sort-desc float-right ml-2\" aria-hidden=\"true\"></i>\n                                                </button>\n                                                <div class=\"dropdown-content\" style=\"right: 1px\"\n                                                     [class.dropdown-content-up]=\"(i + 2 == choosedData.length || i + 1 == choosedData.length) && choosedData.length > 3\">\n                                                    <a (click)=\"openZoomDialog(list)\"\n                                                       *ngIf=\"list.class_type == '1' && ['2','4','5'].includes(auth.getRoleId())\">\n                                                        <span *ngIf=\"!customLoader\"><i class=\"fa fa-video-camera\"\n                                                                                       aria-hidden=\"true\"></i> Start online class</span>\n                                                        <span *ngIf=\"customLoader\" style=\"width: 1rem;height: 1rem\"\n                                                              class=\"spinner-border text-secondary\" role=\"status\">\n                                                        <span class=\"sr-only\">Loading...</span>\n                                                    </span></a>\n                                                    <a (click)=\"enterList(i, 'curriculum', $event);\"><i class=\"fa fa-book mr-1\"\n                                                                                     aria-hidden=\"true\"></i>Curriculum</a>\n                                                    <a (click)=\"enterList(i, 'no', $event)\"\n                                                       *ngIf=\"(!(auth.getRoleId() == '4' && list.classDate_status == '4') || manageClass)\"><i\n                                                            class=\"fa fa-pencil mr-1\" aria-hidden=\"true\"></i>Edit class</a>\n                                                    <a *ngIf=\"checkClassDeleteConditions()\"\n                                                       (click)=\"deleteClassModal(list)\"><i class=\"fa fa-trash mr-1\"\n                                                                                           title=\"Delete Class\"\n                                                                                           aria-hidden=\"true\"></i>Delete Class</a>\n                                                    <a (click)=\"addStudent(list, i)\" *ngIf=\"manageStudent\"><i\n                                                            class=\"fa fa-plus-circle mr-1\" aria-hidden=\"true\"></i>Add Student</a>\n<!--                                                    <a (click)=\"reportDetails(list)\"><i class=\"fa fa-file-text-o mr-1\"-->\n<!--                                                                                        aria-hidden=\"true\"></i>View class reports</a>-->\n<!--                                                    <a *ngIf=\"list.announcement_type != '1'\" (click)=\"redirectToAnnouncement(list)\"><i class=\"fa fa-newspaper-o\"-->\n<!--                                                                                       aria-hidden=\"true\"></i> Add Announcement</a>-->\n                                                    <a (click)=\"shareEmail(list)\"><i class=\"fa fa-share-alt mr-1\"\n                                                                                     aria-hidden=\"true\"></i>Share Class\n                                                        Code</a>\n                                                    <a (click)=\"openRecordingList(list)\"\n                                                       *ngIf=\"list.class_type == '1' && ['2','4','5'].includes(auth.getRoleId())\">\n                                                        <span *ngIf=\"!recordLoader\"><i class=\"fa fa-file-video-o mr-1\"\n                                                                                       aria-hidden=\"true\"></i>Recording</span>\n                                                        <span *ngIf=\"recordLoader\" style=\"width: 1rem;height: 1rem\"\n                                                              class=\"spinner-border text-secondary\" role=\"status\">\n                                                    <span class=\"sr-only\">Loading...</span>\n                                                </span>\n                                                    </a>\n                                                    <a (click)=\"showInformation(list)\"><i class=\"fa fa-info px-1\"\n                                                                                          aria-hidden=\"true\"></i>Information</a>\n                                                    <a (click)=\"allReports(list)\"><i class=\"fa fa-bar-chart mr-1\"></i>Report</a>\n                                                </div>\n                                            </div>\n                                            <!-- <select class=\"actions-class form-control\" ([ngModel])=\"selectIcon\" (change)=\"selectIconClass($event.target.value, list, i)\">\n                                                <option value=\"\" seleted hidden>Actions</option>\n                                                <option value=\"shareClass\" class=\"action-option-class\">&#xf1e0; Share Class Code</option>\n                                                <option value=\"videoCamera\" class=\"action-option-class\" [disabled]=\"recordLoader\" *ngIf=\"list.class_type == '1' && ['2','4','5'].includes(auth.getRoleId())\">\n                                                    <span *ngIf=\"!customLoader\">&#xf03d; Video Camera</span>\n                                                    <span class=\"sr-only\" *ngIf=\"customLoader\">Loading...</span>\n                                                </option>\n                                                <option value=\"record\" class=\"action-option-class\" [disabled]=\"customLoader\" *ngIf=\"list.class_type == '1' && ['2','4','5'].includes(auth.getRoleId())\">\n                                                    <span *ngIf=\"!recordLoader\">&#xf1c8; Recording</span>\n                                                    <span class=\"sr-only\" *ngIf=\"recordLoader\">Loading...</span>\n                                                </option>\n                                                <option value=\"curriculum\" class=\"action-option-class\">&#xf02d; Curriculum</option>\n                                                <option value=\"notes\" class=\"action-option-class\">&#xf1ea; Notes</option>\n                                                <option value=\"information\" class=\"action-option-class\">&#xf05a; Information</option>\n                                                <option value=\"reports\" class=\"action-option-class\">&#xf0f6; Reports</option> -->\n                                            <!-- <option value=\"enter\" *ngIf=\"!(auth.getRoleId() == '4' && classlisthighlight == '4')\">Enter</option> -->\n                                            <!-- </select> -->\n                                            <!--                                            <button type=\"button\" class=\"btn-sm-i btn-outline-primary btn-sm-view mr-1 mt-1\" (click)=\"addStudent(list)\" title=\"Add Student\" *ngIf=\"this.studentShow == list.class_id\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i></button>-->\n\n\n                                            <!-- <button (click)=\"shareEmail(list)\" class=\"btn-outline-primary btn-sm-view mr-1 mt-1\" title=\"Share Class Code\"><i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i></button>\n                                            <button  [disabled]=\"recordLoader\" (click)=\"openZoomDialog(list)\"\n                                                    *ngIf=\"list.class_type == '1' && ['2','4','5'].includes(auth.getRoleId())\"\n                                                    class=\"btn-outline-primary btn-sm-view mr-1 mt-1\" title=\"Start Meeting\">\n                                                <i *ngIf=\"!customLoader\" class=\"fa fa-video-camera\" aria-hidden=\"true\"></i>\n                                                <div *ngIf=\"customLoader\" style=\"width: 1rem;height: 1rem\" class=\"spinner-border text-secondary\" role=\"status\">\n                                                    <span class=\"sr-only\">Loading...</span>\n                                                </div>\n                                            </button>\n                                            <button [disabled]=\"customLoader\" (click)=\"openRecordingList(list)\"\n                                                    *ngIf=\"list.class_type == '1' && ['2','4','5'].includes(auth.getRoleId())\"\n                                                    class=\"btn-outline-primary btn-sm-view mr-1 mt-1\" title=\"Recordings\">\n                                                <i *ngIf=\"!recordLoader\" class=\"fa fa-file-video-o\" aria-hidden=\"true\"></i>\n                                                <div *ngIf=\"recordLoader\" style=\"width: 1rem;height: 1rem\" class=\"spinner-border text-secondary\" role=\"status\">\n                                                    <span class=\"sr-only\">Loading...</span>\n                                                </div>\n                                            </button> -->\n\n\n                                            <!--                                            <button (click)=\"zoomService.show()\" *ngIf=\"list.meeting_id != ''\" class=\"btn-outline-primary btn-sm-view mr-1 mt-1\" title=\"Start Meeting\">show</button>-->\n\n\n                                            <!-- <button (click)=\"curicullum(list)\" class=\"btn-outline-primary btn-sm-view mr-1 mt-1\" title=\"Curriculum\"><i class=\"fa fa-book\" aria-hidden=\"true\"></i></button>\n                                            <button (click)=\"openNotes(i, list)\" class=\"btn-outline-primary btn-sm-view mr-1 mt-1\" title=\"Notes\"><i class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></i></button>\n                                            <button (click)=\"showInformation(list)\" class=\"btn-outline-primary btn-sm-view mr-1 mt-1\" title=\"Information\"><i class=\"fa fa-info pl-1 pr-1\" aria-hidden=\"true\"></i></button>\n                                            <button (click)=\"reportDetails(list)\" class=\"btn-outline-primary btn-sm-view mr-1 mt-1\" title=\"Reports\"><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i></button>\n                                            <button type=\"button\" class=\"btn-sm-i btn-outline-primary ml-1\" *ngIf=\"!(auth.getRoleId() == '4' && classlisthighlight == '4')\" (click)=\"enterList(i, 'no')\">Enter</button> -->\n\n\n                                            <!--                                            <p>{{this.auth.getRoleId()}} - rollid {{this.classlisthighlight}} - classid</p>-->\n                                            <!--                                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 13.891 14\" class=\"cursor float-right mt-2\" (click)=\"reportDetails(list)\">-->\n                                            <!--                                                <title>Reports</title>-->\n                                            <!--                                                <g id=\"noun_business_report_2032971\" data-name=\"noun_business report_2032971\" transform=\"translate(-51.3 -36.152)\">-->\n                                            <!--                                                    <g id=\"Group_17426\" data-name=\"Group 17426\" transform=\"translate(51.3 36.152)\">-->\n                                            <!--                                                        <path id=\"Path_3284\" data-name=\"Path 3284\" d=\"M12.194,54.1h-.022a.372.372,0,1,0,0,.744h.022a.372.372,0,1,0,0-.744Z\" transform=\"translate(-9.503 -42.484)\" fill=\"#7F3486\"/>-->\n                                            <!--                                                        <path id=\"Path_3285\" data-name=\"Path 3285\" d=\"M12.4,42.959h.481l-.241-.459Z\" transform=\"translate(-9.972 -33.422)\" fill=\"#7F3486\"/>-->\n                                            <!--                                                        <path id=\"Path_3286\" data-name=\"Path 3286\" d=\"M5.037,1.6,1.8,4.859H5.037Z\" transform=\"translate(-1.691 -1.469)\" fill=\"#7F3486\"/>-->\n                                            <!--                                                        <rect id=\"Rectangle_907\" data-name=\"Rectangle 907\" width=\"0.766\" height=\"0.722\" transform=\"translate(2.297 6.016)\" fill=\"#7F3486\"/>-->\n                                            <!--                                                        <path id=\"Path_3287\" data-name=\"Path 3287\" d=\"M8.278,13.206H6.353a.219.219,0,1,1,0-.437H8.278c.262,0-.044.044-.044-1.006a3.7,3.7,0,0,1,4.834-3.5V1.656A.658.658,0,0,0,12.412,1H5.084V4.609a.235.235,0,0,1-.219.219H1.3v9.516A.645.645,0,0,0,1.956,15H10.2A8.789,8.789,0,0,1,8.278,13.206ZM6.331,2.444h4.747a.219.219,0,0,1,0,.438H6.331a.207.207,0,0,1-.219-.219A.235.235,0,0,1,6.331,2.444Zm0,1.794h4.747a.219.219,0,0,1,.219.219.235.235,0,0,1-.219.219H6.331a.219.219,0,0,1-.219-.219A.235.235,0,0,1,6.331,4.237Zm0,2.909h4.878a.235.235,0,0,1,.219.219.219.219,0,0,1-.219.219H6.331a.207.207,0,0,1-.219-.219A.235.235,0,0,1,6.331,7.147Zm0,2.822H8.256a.219.219,0,1,1,0,.438H6.331a.219.219,0,0,1-.219-.219A.235.235,0,0,1,6.331,9.969ZM3.159,6.8a.219.219,0,0,1,.219-.219h1.2A.219.219,0,0,1,4.8,6.8V7.978a.235.235,0,0,1-.219.219h-1.2a.235.235,0,0,1-.219-.219V6.8Zm.831,6.978H3.947a.809.809,0,0,1,0-1.619h.044a.809.809,0,1,1,0,1.619Zm.766-2.887a.23.23,0,0,1-.2.109h-1.2a.23.23,0,0,1-.2-.109.2.2,0,0,1,0-.219l.613-1.181a.226.226,0,0,1,.394,0l.591,1.181A.2.2,0,0,1,4.756,10.888Z\" transform=\"translate(-1.3 -1)\" fill=\"#7F3486\"/>-->\n                                            <!--                                                        <path id=\"Path_3288\" data-name=\"Path 3288\" d=\"M36.006,40.878l2.034-2.406V35.3a3.238,3.238,0,0,0-2.034,5.578Z\" transform=\"translate(-27.628 -27.797)\" fill=\"#7F3486\"/>-->\n                                            <!--                                                        <path id=\"Path_3289\" data-name=\"Path 3289\" d=\"M50.9,38.266l2.538-1.356A3.251,3.251,0,0,0,50.9,35.4Z\" transform=\"translate(-40.05 -27.875)\" fill=\"#7F3486\"/>-->\n                                            <!--                                                        <path id=\"Path_3290\" data-name=\"Path 3290\" d=\"M45.978,44l-2.822,1.509L41.1,47.959a3.254,3.254,0,0,0,5.184-2.625A3.841,3.841,0,0,0,45.978,44Z\" transform=\"translate(-32.394 -34.594)\" fill=\"#7F3486\"/>-->\n                                            <!--                                                    </g>-->\n                                            <!--                                                </g>-->\n                                            <!--                                            </svg>-->\n                                            <!--                                            <i class=\"fa fa-info-circle float-right letter cursor mt-2 mr-2\" style=\"font-size: 21px;\" aria-hidden=\"true\" title=\"Information\" (click)=\"showInformation(list)\"></i>-->\n                                            <!--                                            <i class=\"fa fa-newspaper-o float-right letter cursor mt-2 mr-2\" style=\"font-size: 21px;\" aria-hidden=\"true\" title=\"Notes\"></i>-->\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <!-- <div class=\"col-12 col-md-12\" id=\"studentCount{{i}}\" *ngIf=\"this.studentShow == list.class_id\"></div> -->\n                                <div class=\"col-12 col-md-12\" *ngIf=\"studentShow == list.class_id && list.checked\">\n<!--                                    <div class=\"mt-2 mb-3 d-flex align-items-center justify-content-end\">-->\n<!--                                        <span class=\"badge star_badge mr-1\">\u2605</span>-->\n<!--                                        <span class=\"mx-1\">-</span>-->\n<!--                                        <span class=\"font-weight-bold\">Make-up Student</span>-->\n<!--                                    </div>-->\n                                    <!-- <button type=\"button\" class=\"btn-sm-i btn-outline-primary float-left mt-2 mb-2\" title=\"Send Mail\" (click)=\"mailAlert(list)\"><i class=\"fa fa-paper-plane\"></i></button> -->\n\n                                    <!-- <button type=\"button\" class=\"btn-sm-i btn-outline-primary float-right mt-2 mb-2\" (click)=\"addStudent(list)\">Add Student</button> -->\n                                    <table class=\"table table-bordered text-center\"\n                                           *ngIf=\"studentData?.length != 0\">\n                                        <thead class=\"thead-light\">\n                                        <tr>\n                                            <!--                                            <th class=\"pr-0\" style=\"border-right: none\"><input type=\"checkbox\" (click)=\"selectAllStudent($event)\"></th>-->\n                                            <th class=\"pl-0\" style=\"border-left: none\">Student Name</th>\n                                            <th *ngIf=\"showStudentEmailId\">E-Mail Id</th>\n                                            <th>Grade</th>\n                                            <th>Action</th>\n                                        </tr>\n                                        </thead>\n                                        <tbody>\n                                        <tr *ngFor=\"let detail of studentData; let j = index\">\n                                            <!--                                            <th class=\"pr-0\" style=\"border-right: none\"><input type=\"checkbox\" [(ngModel)]=\"detail.selected\"></th>-->\n                                            <td class=\"pl-0\" style=\"border-left: none\">\n<!--                                                <span *ngIf=\"list.student_class_type == '2'\" class=\"badge star_badge mr-1\">\u2605</span>-->\n                                                {{detail.first_name}} {{detail.last_name}}</td>\n<!--                                            <td>{{detail.last_name ? detail.last_name : ''}}</td>-->\n                                            <td *ngIf=\"showStudentEmailId\">{{detail.email_id}}</td>\n                                            <td>{{detail.grade_name}}</td>\n\n                                            <td class=\"d-flex justify-content-center align-items-center\">\n                                                <!--                                                <i class=\"fa fa-file-text-o mr-2\" title=\"Report\" (click)=\"getStudentFullDetail(detail)\" aria-hidden=\"true\"></i>-->\n                                                <img class=\"mr-3\" alt=\"\" src=\"assets/images/icons/report.png\"\n                                                     title=\"Report\" style=\"height: 22px\"\n                                                     (click)=\"getStudentFullDetail(detail)\">\n                                                <img class=\"mr-3\" alt=\"\" src=\"assets/images/icons/transfer-class.png\"\n                                                     style=\"height: 22px\" *ngIf=\"allowTransfer\" title=\"Transfer Class\"\n                                                     (click)=\"classChange(detail, 'transfer')\">\n                                                <!--                                                <img class=\"mr-2\" alt=\"\" src=\"assets/images/shift-class.svg\" *ngIf=\"allowTransfer\" title=\"Transfer Class\"-->\n                                                <!--                               aria-hidden=\"true\" (click)=\"classChange(detail)\">-->\n                                                <!--                                                <i class=\"fa fa-envelope-o cursor mr-3 color-primary\" title=\"Send mail\" style=\"font-size: 20px\" (click)=\"specificMail(list, j)\"></i>-->\n                                                <i class=\"fa fa-pencil color-primary cursor mr-3\" title=\"Edit\"\n                                                   style=\"font-size: 20px\" *ngIf=\"manageStudent\"\n                                                   (click)=\"editStudent(detail)\"></i>\n                                                <!-- <i class=\"fa fa-pencil color-primary cursor mr-3\" title=\"Edit\" style=\"font-size: 20px\" *ngIf=\"allowClassEdit || !manageStudent\" (click)=\"editStudent(detail)\"></i> -->\n                                                <i class=\"fa fa-trash text-danger cursor\" title=\"Delete\"\n                                                   style=\"font-size: 20px\" *ngIf=\"manageClass\"\n                                                   (click)=\"deleteStudentAlert(detail)\"></i>\n                                            </td>\n                                        </tr>\n                                        </tbody>\n                                    </table>\n                                    <div class=\"row d-flex justify-content-center list-card mt-5\"\n                                         *ngIf=\"studentData?.length == 0\">\n                                        <div class=\"col-4\">\n                                            <button class=\"nodataList\">No Data Available!</button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--    <section class=\"row list-card mt-3\" *ngIf=\"choosedData!=''\">-->\n    <!--        <div class=\"col-md-12\">-->\n    <!--            <div class=\"card\" *ngFor=\"let list of choosedData; let i = index\">-->\n    <!--                <div class=\"card-body\">-->\n    <!--                    <div class=\"row p-2\">-->\n    <!--&lt;!&ndash;                        <div class=\"col-12 col-md-2\">&ndash;&gt;-->\n    <!--&lt;!&ndash;                            <figure *ngIf=\"list.profile_url == ''\">&ndash;&gt;-->\n    <!--&lt;!&ndash;                                <img *ngIf=\"teacherType == 1\" src=\"assets/images/ristaschool/Mask Group 35.png\" class=\"w-100\" style=\"height: 160px\" alt=\"\">&ndash;&gt;-->\n    <!--&lt;!&ndash;                                <img *ngIf=\"teacherType != 1\" src=\"assets/images/ristaschool/Mask Group 35.png\" class=\"w-100\" style=\"height: 170px\" alt=\"\">&ndash;&gt;-->\n    <!--&lt;!&ndash;                            </figure>&ndash;&gt;-->\n    <!--&lt;!&ndash;                            <figure *ngIf=\"list.profile_url != ''\">&ndash;&gt;-->\n    <!--&lt;!&ndash;                                <img [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + list.profile_url)\" class=\"w-100\" style=\"height: 170px\" alt=\"\">&ndash;&gt;-->\n    <!--&lt;!&ndash;                            </figure>&ndash;&gt;-->\n    <!--&lt;!&ndash;                        </div>&ndash;&gt;-->\n    <!--                        <div class=\"col-12 col-md-6\">-->\n    <!--                            <h4 class=\"t-period\"><span class=\"badge badge-success mr-2\" *ngIf=\"list.status == '1' && teacherType != '0'\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></span>-->\n    <!--                                <span class=\"badge  badge-danger mr-2\" *ngIf=\"list.status == '2'  && teacherType != '0'\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span><span class=\"font-weight-bold\">{{list.class_name}}</span> &nbsp; &nbsp;<small class=\"badge badge-pill badge-info cursor\" [attr.aria-controls]=\"'#studentCount' + i\" [attr.data-target]=\"'#studentCount' + i\" data-toggle=\"collapse\" *ngIf=\"list.no_of_students != '0'\" (click)=\"enterList(i, 'yes')\">{{list.no_of_students}}</small> <small class=\"badge badge-pill badge-info cursor\" *ngIf=\"list.no_of_students == '0'\">{{list.no_of_students}}</small>-->\n    <!--                            </h4>-->\n    <!--                            <p class=\"p-0\"><small class=\"font-weight-bold\">Subject: </small> <span class=\"t-name font-weight-bold\">{{list.subject_name}}</span>  &nbsp; &nbsp;-->\n    <!--                                <small class=\"font-weight-bold\">Grade: </small> <span class=\"t-name capital font-weight-bold\">{{list.grade_name}}</span><br/>-->\n    <!--                                <span *ngIf=\"teacherType != 1\"><small class=\"font-weight-bold\">ClassRoom: </small> <span class=\"t-name capital font-weight-bold\">{{list.classroom_name}}</span><br/></span>-->\n    <!--                                <small class=\"font-weight-bold\">Teacher Assigned: </small> <span class=\"t-name font-weight-bold\">{{list.teacher_name}}</span>-->\n    <!--                            </p>-->\n    <!--                        </div>-->\n    <!--                        <div class=\"col-12 col-md-6\">-->\n    <!--                            <div class=\"row mb-3\">-->\n    <!--                                <div class=\"col-md-12 text-right\">-->\n    <!--                                    <p class=\"p-0\" *ngIf=\"list.start_date == '0000-00-00'&& list.end_date == '0000-00-00'\"><small class=\"font-weight-bold\">Start: </small>  &nbsp; &nbsp;-->\n    <!--                                        <small class=\"font-weight-bold\">End: </small>-->\n    <!--                                    </p>-->\n    <!--                                    <p class=\"p-0\" *ngIf=\"list.start_date != '0000-00-00'&& list.end_date != '0000-00-00'\"><small class=\"font-weight-bold\">Start: </small> <span class=\"t-name font-weight-bold\">{{list.start_date|date:'MM/dd/yyyy'}}</span> &nbsp; &nbsp;-->\n    <!--                                        <small class=\"font-weight-bold\">End: </small> <span class=\"t-name font-weight-bold\">{{list.end_date|date:'MM/dd/yyyy'}}</span>-->\n    <!--                                    </p>-->\n    <!--                                </div>-->\n    <!--&lt;!&ndash;                                <div class=\"col-md-12\">&ndash;&gt;-->\n    <!--&lt;!&ndash;                                    <small class=\"ml-3 pull-right\">Assessment: <span class=\"t-name\">{{list.no_of_assessments}}</span></small>&ndash;&gt;-->\n    <!--&lt;!&ndash;                                    <small class=\"ml-3 pull-right\">Assignment: <span class=\"t-name\">{{list.no_of_assignments}} </span></small>&ndash;&gt;-->\n    <!--&lt;!&ndash;                                    <small class=\"pull-right\">Resources: <span class=\"t-name\">{{list.no_of_resources}} </span></small>&ndash;&gt;-->\n    <!--&lt;!&ndash;                                </div>&ndash;&gt;-->\n    <!--                            </div>-->\n    <!--&lt;!&ndash;                            <div class=\"row d-flex mb-5\">&ndash;&gt;-->\n    <!--&lt;!&ndash;                                <div class=\"col-md-12\">&ndash;&gt;-->\n    <!--&lt;!&ndash;                                    <small class=\"pull-right\">No. of Students: <span class=\"t-name\">{{list.no_of_students}}</span></small>&ndash;&gt;-->\n    <!--&lt;!&ndash;                            </div>&ndash;&gt;-->\n    <!--&lt;!&ndash;                            </div>&ndash;&gt;-->\n    <!--&lt;!&ndash;                            <div class=\"row d-flex mb-4\">&ndash;&gt;-->\n    <!--&lt;!&ndash;                                <div class=\"col-md-12\"></div>&ndash;&gt;-->\n    <!--&lt;!&ndash;                            </div>&ndash;&gt;-->\n    <!--                            <div class=\"row d-flex\">-->\n    <!--                                <div class=\"col-md-12 mt-2\">-->\n    <!--                                <button type=\"button\" class=\"btn-sm-i btn-outline-primary pull-right ml-2\" (click)=\"enterList(i, 'no')\">Enter</button>-->\n    <!--                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 13.891 14\" class=\"cursor float-right mt-2\" (click)=\"reportDetails(list)\">-->\n    <!--                                        <title>Reports</title>-->\n    <!--                                        <g id=\"noun_business_report_2032971\" data-name=\"noun_business report_2032971\" transform=\"translate(-51.3 -36.152)\">-->\n    <!--                                            <g id=\"Group_17426\" data-name=\"Group 17426\" transform=\"translate(51.3 36.152)\">-->\n    <!--                                                <path id=\"Path_3284\" data-name=\"Path 3284\" d=\"M12.194,54.1h-.022a.372.372,0,1,0,0,.744h.022a.372.372,0,1,0,0-.744Z\" transform=\"translate(-9.503 -42.484)\" fill=\"#7F3486\"/>-->\n    <!--                                                <path id=\"Path_3285\" data-name=\"Path 3285\" d=\"M12.4,42.959h.481l-.241-.459Z\" transform=\"translate(-9.972 -33.422)\" fill=\"#7F3486\"/>-->\n    <!--                                                <path id=\"Path_3286\" data-name=\"Path 3286\" d=\"M5.037,1.6,1.8,4.859H5.037Z\" transform=\"translate(-1.691 -1.469)\" fill=\"#7F3486\"/>-->\n    <!--                                                <rect id=\"Rectangle_907\" data-name=\"Rectangle 907\" width=\"0.766\" height=\"0.722\" transform=\"translate(2.297 6.016)\" fill=\"#7F3486\"/>-->\n    <!--                                                <path id=\"Path_3287\" data-name=\"Path 3287\" d=\"M8.278,13.206H6.353a.219.219,0,1,1,0-.437H8.278c.262,0-.044.044-.044-1.006a3.7,3.7,0,0,1,4.834-3.5V1.656A.658.658,0,0,0,12.412,1H5.084V4.609a.235.235,0,0,1-.219.219H1.3v9.516A.645.645,0,0,0,1.956,15H10.2A8.789,8.789,0,0,1,8.278,13.206ZM6.331,2.444h4.747a.219.219,0,0,1,0,.438H6.331a.207.207,0,0,1-.219-.219A.235.235,0,0,1,6.331,2.444Zm0,1.794h4.747a.219.219,0,0,1,.219.219.235.235,0,0,1-.219.219H6.331a.219.219,0,0,1-.219-.219A.235.235,0,0,1,6.331,4.237Zm0,2.909h4.878a.235.235,0,0,1,.219.219.219.219,0,0,1-.219.219H6.331a.207.207,0,0,1-.219-.219A.235.235,0,0,1,6.331,7.147Zm0,2.822H8.256a.219.219,0,1,1,0,.438H6.331a.219.219,0,0,1-.219-.219A.235.235,0,0,1,6.331,9.969ZM3.159,6.8a.219.219,0,0,1,.219-.219h1.2A.219.219,0,0,1,4.8,6.8V7.978a.235.235,0,0,1-.219.219h-1.2a.235.235,0,0,1-.219-.219V6.8Zm.831,6.978H3.947a.809.809,0,0,1,0-1.619h.044a.809.809,0,1,1,0,1.619Zm.766-2.887a.23.23,0,0,1-.2.109h-1.2a.23.23,0,0,1-.2-.109.2.2,0,0,1,0-.219l.613-1.181a.226.226,0,0,1,.394,0l.591,1.181A.2.2,0,0,1,4.756,10.888Z\" transform=\"translate(-1.3 -1)\" fill=\"#7F3486\"/>-->\n    <!--                                                <path id=\"Path_3288\" data-name=\"Path 3288\" d=\"M36.006,40.878l2.034-2.406V35.3a3.238,3.238,0,0,0-2.034,5.578Z\" transform=\"translate(-27.628 -27.797)\" fill=\"#7F3486\"/>-->\n    <!--                                                <path id=\"Path_3289\" data-name=\"Path 3289\" d=\"M50.9,38.266l2.538-1.356A3.251,3.251,0,0,0,50.9,35.4Z\" transform=\"translate(-40.05 -27.875)\" fill=\"#7F3486\"/>-->\n    <!--                                                <path id=\"Path_3290\" data-name=\"Path 3290\" d=\"M45.978,44l-2.822,1.509L41.1,47.959a3.254,3.254,0,0,0,5.184-2.625A3.841,3.841,0,0,0,45.978,44Z\" transform=\"translate(-32.394 -34.594)\" fill=\"#7F3486\"/>-->\n    <!--                                            </g>-->\n    <!--                                        </g>-->\n    <!--                                    </svg>-->\n    <!--                                    <i class=\"fa fa-info-circle float-right letter cursor mt-2 mr-2\" style=\"font-size: 21px;\" aria-hidden=\"true\" title=\"Information\" (click)=\"showInformation(list)\"></i>-->\n    <!--                                    <i class=\"fa fa-newspaper-o float-right letter cursor mt-2 mr-2\" style=\"font-size: 21px;\" aria-hidden=\"true\" title=\"Notes\" (click)=\"openNotes(i, list)\"></i>-->\n    <!--                            </div>-->\n    <!--                            </div>-->\n    <!--                        </div>-->\n    <!--                        <div class=\"col-12 col-md-12 collapse\" id=\"studentCount{{i}}\" *ngIf=\"this.studentShow == list.class_id\">-->\n    <!--                            <table class=\"table table-bordered text-center mt-4\">-->\n    <!--                                <thead>-->\n    <!--                                <tr>-->\n    <!--                                    <th>First Name</th>-->\n    <!--                                    <th>Last Name</th>-->\n    <!--                                    <th *ngIf=\"teacherType == 1\">E-Mail Id</th>-->\n    <!--                                    <th>Grade</th>-->\n    <!--                                </tr>-->\n    <!--                                </thead>-->\n    <!--                                <tbody>-->\n    <!--                                <tr *ngFor=\"let list of studentData\">-->\n    <!--                                   <td>{{list.first_name}}</td>-->\n    <!--                                   <td>{{list.last_name == null ? '' : list.last_name}}</td>-->\n    <!--                                   <td *ngIf=\"teacherType == 1\">{{list.student_id}}</td>-->\n    <!--                                   <td>{{list.grade_name}}</td>-->\n    <!--                                </tr>-->\n    <!--                                </tbody>-->\n    <!--                            </table>-->\n    <!--                        </div>-->\n    <!--                    </div>-->\n    <!--                </div>-->\n    <!--            </div>-->\n    <!--        </div>-->\n    <!--    </section>-->\n</div>\n<div *ngIf=\"schoolStatus?.length == 0\">\n    <app-emptyschool>\n    </app-emptyschool>\n</div>\n<ng-template #reports>\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title\">Report</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"onSave()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <app-missed-work-report\n                [classShow]=\"true\"\n                [showContent]=\"'other'\"\n                [studentView]=\"false\"\n                [timeView]=\"true\"\n                [calledForm]=\"'class'\"\n                [contentNameValue]=\"contentNameValue\"\n        >\n        </app-missed-work-report>\n    </div>\n\n</ng-template>\n\n<ng-template #showInform>\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title\">Info</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"onSave()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <p class=\"p-0\" *ngIf=\"classInfo?.subject_name != ''\"><span class=\"letter\">Subject: </span> <span\n                class=\"t-name font-weight-bold\">{{classInfo.subject_name}}</span></p>\n        <p class=\"p-0\" *ngIf=\"classInfo?.grade_name != ''\"><span class=\"letter\">Grade: </span> <span\n                class=\"t-name capital font-weight-bold\">{{classInfo.grade_name}}</span></p>\n        <p class=\"p-0\" *ngIf=\"teacherType != 1 || auth.getRoleId() == '2' || auth.getRoleId() == '6' && classInfo?.classroom_name != ''\">\n            <span class=\"letter\">Content Folder: </span><span\n                class=\"t-name font-weight-bold capital\">{{classInfo.classroom_name}}</span></p>\n        <p class=\"p-0\"><span class=\"letter\">Class Code: </span> <span\n                class=\"t-name font-weight-bold\">{{classInfo.class_code}}</span></p>\n        <p class=\"p-0\"><span class=\"letter\">Assessment: </span> <span\n                class=\"t-name\">{{classInfo.no_of_assessments}}</span></p>\n        <p class=\"p-0\"><span class=\"letter\">Assignment: </span> <span\n                class=\"t-name\">{{classInfo.no_of_assignments}} </span></p>\n        <p class=\"p-0\"><span class=\"letter\">Resources: </span> <span\n                class=\"t-name\">{{classInfo.no_of_resources}} </span></p>\n    </div>\n\n</ng-template>\n\n<!-- Container-fluid Ends-->\n<ng-template #writeNoteOpen let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title text-center\">Add Notes</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"onsave()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row d-flex px-3 justify-content-center\">\n            <div class=\"col-11 mt-2 card class-card1 class-hover w-99\" *ngFor=\"let list of showNotes; let i = index\">\n                <div class=\"row\" *ngIf=\"list.add_date != '00-00-0000'\">\n                    <div class=\"col-9\" style=\"word-wrap: break-word;\">\n                        <p class=\"py-2\"><span class=\"letter\"\n                                              *ngIf=\"list.created_by != '' && list.add_date != ''\"><strong>{{list.created_by}}</strong> - <small>{{list.add_date | customDateFormat}}</small><br></span>\n                        </p>\n                        <p><span [innerHTML]=\"list.note\" class=\"mb-0 mt-3\"></span></p>\n                        <!--                        {{list.note}}-->\n                    </div>\n                    <div class=\"col-3 d-flex align-items-center justify-content-end\">\n                        <i class=\"fa fa-trash fa-1x text-danger\" aria-hidden=\"true\" style=\"cursor:pointer\"\n                           (click)=\"deletedNotes(list)\"></i>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-11 p-0 mt-2\">\n                <!-- <textarea name=\"\" id=\"\" placeholder=\"Enter Notes\" [(ngModel)]=\"notes\" style=\"width: 100%; height: 100px; padding: 4px\"></textarea> -->\n                <app-tiny-mice (emitEditorValue)=\"getEditorValue($event)\"\n                               [editorPatchValue]=\"false\"\n                               [height]=\"300\"\n                               [id]=\"'notes'\"\n                               [(ngModel)]=\"notes\"\n                               [showDropBtn]=\"false\"\n                               [showInputBtn]=\"false\">\n                </app-tiny-mice>\n            </div>\n            <div class=\"col-11 text-right mt-2\">\n                <button type=\"button\" (click)=\"onsave()\" class=\"btn btn-outline-primary mr-2\">Close</button>\n                <button type=\"button\" (click)=\"addNotes()\" class=\"btn btn-primary\">Add</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n<!--//zoom confirmation pop-up-->\n\n<ng-template #zoomDialog let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title text-center\">Zoom Meet</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"modalRef.close()\"></i>\n    </div>\n    <div class=\"modal-body d-flex justify-content-right\">\n        <div class=\"col-12 text-center\">\n            <h5>Open zoom in </h5>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-primary\" (click)=\"modalRef.close();zoomService.initZoomMeeting(selectedClass)\">In App\n        </button>\n        <button (click)=\"navigateOutsideZoom(this.selectedClass)\" class=\"btn btn-outline-primary\" type=\"button\">New\n            Tab\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #zoomDialog1 let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title text-center\">Zoom Meet</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"modalRef.close()\"></i>\n    </div>\n    <div class=\"modal-body d-flex justify-content-right\">\n        <div class=\"col-12 text-center\">\n            <h5>No Zoom Meet Scheduled for this day</h5>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-primary\" (click)=\"modalRef.close();\">OK</button>\n    </div>\n</ng-template>\n\n<ng-template #recordinglist let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title text-center\">Recordings</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"modalRef.close()\"></i>\n    </div>\n    <div class=\"modal-body d-flex justify-content-right\">\n        <div class=\"row w-100\">\n            <div class=\"col-md-12 home-sec-scroll\">\n                <div class=\"row\">\n                    <div *ngFor=\"let source of videoSource;let i=index\" class=\"col-md-12 mt-1 cursor\">\n                        <div class=\"card\">\n                            <!--                            <div (click)=\"videoTemplate(source)\" class=\"card-body card-hover2\">-->\n                            <div (click)=\"navigateOutsideRecording(source)\" class=\"card-body card-hover2\">\n                                <div class=\"row\">\n                                    <!--                                    <div class=\"col-1\">-->\n                                    <!--                                        <a  href=\"{{source.play_video}}\" target=\"_blank\"-->\n                                    <!--                                                class=\"btn-outline-primary btn-sm-view mr-1 mt-1\" title=\"Play Recording\">-->\n                                    <!--                                            <i class=\"fa fa-file-video-o\" aria-hidden=\"true\"></i></a>-->\n                                    <!--                                    </div>-->\n                                    <!--                                    <div class=\"col-4 align-self-center\">-->\n                                    <!--                                        <p><small>Passcode: </small>-->\n                                    <!--                                            <span class=\"t-name font-weight-bold\" style=\"font-size: 11px;\">{{source.passcode}}-->\n                                    <!--                                            </span> &nbsp; &nbsp;-->\n                                    <!--                                        </p>-->\n                                    <!--                                    </div>-->\n                                    <!--                                    <div class=\"col-4 align-self-center\">-->\n                                    <!--                                        <h4 class=\"t-period mb-0\"><span class=\"font-weight-bold\">{{source.name}} </span></h4>-->\n                                    <!--                                    </div>-->\n                                    <div class=\"col-4 align-self-center\">\n                                        <p><span>Start: </span> <span *ngIf=\"source.recording_start != '0000-00-00'\"\n                                                                      class=\"t-name font-weight-bold\"\n                                                                      style=\"font-size: 11px;\">{{source.recording_start|date:'MM/dd/yyyy'}}\n                                            &nbsp;{{source.recording_start}}</span>\n                                        </p>\n                                    </div>\n                                    <div class=\"col-4 align-self-center\">\n                                        <p>\n                                            <span>End: </span> <span *ngIf=\"source.recording_end != '0000-00-00'\"\n                                                                     class=\"t-name font-weight-bold\"\n                                                                     style=\"font-size: 11px;\">{{source.recording_end|date:'MM/dd/yyyy'}}\n                                            &nbsp;{{source.recording_end}}</span>\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"videoSource.length == 0\" class=\"col-md-12 mt-1 cursor\">\n                        <div class=\"card\">\n                            <div class=\"card-body card-hover2\" style=\"align-self: center;\">\n                                <div class=\"row\">\n                                    <span>No data found</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-primary\" (click)=\"modalRef.close();\">close</button>\n    </div>\n</ng-template>\n\n<ng-template #video let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title text-center\">Video Title</h4>\n        <i (click)=\"modalRef1.close()\" class=\"fa fa-close cursor\"></i>\n    </div>\n    <div class=\"modal-body d-flex justify-content-right\">\n        <div class=\"col-12 text-center\">\n            <video controls height=\"420\" width=\"700\">\n                <source src=\"http://static.videogular.com/assets/videos/videogular.mp4\" type=\"video/mp4\">\n            </video>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #meetingSelection let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title text-center\">Select Meeting</h4>\n        <i (click)=\"modalRef.close()\" class=\"fa fa-close cursor\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <!--        <div class=\"col-12 text-center\">-->\n        <!--            More than one meeting found. Please choose which one-->\n        <!--        </div>-->\n        <div class=\"col-12 mt-2 d-flex flex-wrap justify-content-around\">\n            <div (click)=\"chooseSchedule(selectedClass, i)\"\n                 *ngFor=\"let data of selectedClass.availabilityDate; let i = index\" class=\"col-5 mx-1 mb-2 card-hover3\">\n                <label class=\"color-primary font-weight-bold\">{{data.class_name}}</label>\n                <div>\n                    <small class=\"color-grey\">Timing :</small>&nbsp;<span\n                        style=\"font-size: 0.8rem; font-weight: 600\">{{data.slotstarttime + ' - ' + data.slotendtime}}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #addStudentDialog class=\"customModalRef\" let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <div class=\"col-7 pl-0\">\n            <h4 class=\"modal-title font-weight-bold\">Add Student</h4>\n            <label *ngIf=\"addStudentEnabled\" class=\"text-muted mb-0\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n        </div>\n        <div class=\"col-5 d-flex justify-content-end align-items-center pr-0\">\n            <button *ngIf=\"!addStudentEnabled\" class=\"btn cancel\" title=\"Invite By Email\" (click)=\"shareEmail(selectClassData, 'addStudent')\">\n                Invite By Email\n            </button>\n            <button *ngIf=\"addStudentEnabled\" class=\"btn cancel\" (click)=\"searchStudentList(1);addStudentClicked()\"><i class=\"fa fa-long-arrow-left mr-1\"></i>Back</button>\n            <i class=\"fa fa-close cursor ml-3\" (click)=\"closeStudentModRef()\" title=\"Close Add Student\"></i>\n        </div>\n    </div>\n    <div class=\"modal-body row\">\n        <div class=\"col-md-9 form-group\" *ngIf=\"!addStudentEnabled\">\n            <label style=\"font-weight: 600\">Grade</label>\n            <ng-select [items]=\"gradeData\"\n                       bindLabel=\"grade_name\"\n                       bindValue=\"grade_id\"\n                       placeholder=\"Select Grade\"\n                       typeToSearchText=\"\"\n                       multiple=\"true\"\n                       [(ngModel)]=\"gradName\"\n                       (change)=\"getGradeValue($event)\"\n            >\n            </ng-select>\n        </div>\n        <div class=\"col-md-9 form-group\" *ngIf=\"!addStudentEnabled\">\n            <label style=\"font-weight: 600\">Student Name<span class=\"text-danger ml-1\">*</span></label>\n            <ng-multiselect-dropdown #multiSelect\n                                     [placeholder]=\"'Select Student'\"\n                                     [data]=\"studentDataList\"\n                                     [settings]=\"settings\"\n                                     [disabled]=\"false\"\n                                     [(ngModel)]=\"studentName\"\n                                     (onSelect)=\"onItemSelect($event, 'single')\"\n                                     (onDeSelect)=\"onDeSelect($event)\"\n                                     (onSelectAll)=\"onItemSelect($event, 'all')\"\n                                     (onDeSelectAll)=\"onDeSelectAll()\">\n            </ng-multiselect-dropdown>\n        </div>\n        <div class=\"col-md-3 form-group align-content-end\" *ngIf=\"!addStudentEnabled\">\n            <button (click)=\"addStudentClicked()\" class=\"btn btn-primary\"><i class=\"fa fa-plus-circle mr-1\"></i>Add Student</button>\n        </div>\n\n        <div class=\"col-md-9 row\" *ngIf=\"!addStudentEnabled\">\n            <label style=\"font-weight: 600\" class=\"col-12\">Class Type<span class=\"text-danger ml-1\">*</span></label>\n            <div class=\"col-3\">\n                <div class=\"form-check\">\n                    <input class=\"form-check-input cursor\" id=\"regular\" type=\"radio\" name=\"studentType\" value=\"0\" [(ngModel)]=\"studentAddedType\"\n                        [checked]=\"studentAddedType == '0'\">\n                    <label class=\"form-check-label cursor\" for=\"regular\">Regular</label>\n                </div>\n            </div>\n            <div class=\"col-4\">\n                <div class=\"form-check\">\n                    <input class=\"form-check-input cursor\" id=\"makeUp\" type=\"radio\" value=\"1\" name=\"studentType\"\n                           [checked]=\"studentAddedType == '1'\" [(ngModel)]=\"studentAddedType\">\n                    <label class=\"form-check-label cursor\" for=\"makeUp\">Make-up Class</label>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-md-9 row mt-3\" *ngIf=\"!addStudentEnabled && studentAddedType == '1'\">\n            <label style=\"font-weight: 600\" class=\"col-12\">\n                Effective Date<span class=\"text-danger ml-1\">*</span></label>\n            <div class=\"col-xl-8 col-md-7\">\n                <div class=\"d-flex align-items-baseline\">\n                    <input class=\"form-control\" placeholder=\"mm/dd/yyyy\"\n                           name=\"dp2\" angular-mydatepicker (click)=\"dp2.toggleCalendar()\"\n                           #dp2=\"angular-mydatepicker\" [(ngModel)]=\"effectiveStartDate\"\n                           [options]=\"myDpOptions1\" autocomplete=\"off\"\n                           required>\n                    <div class=\"input-group-append\">\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp2.toggleCalendar()\">\n                            <i class=\"fa fa-calendar-o\"></i></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-12\" [ngbCollapse]=\"!addStudentEnabled\">\n            <form [formGroup]=\"addStudentForm\">\n                <div class=\"form-group row\">\n                    <label for=\"validationCustom0\" class=\"col-xl-3 col-md-4\">\n                        First Name<span class=\"text-danger ml-1\">*</span></label>\n                    <div class=\"col-xl-8 col-md-7\">\n                        <input class=\"form-control \" formControlName=\"first_name\" id=\"validationCustom0\"\n                               type=\"text\" placeholder=\"First Name\" required>\n                        <em class=\"error\" *ngIf=\"!addStudentForm.get('first_name').valid && (addStudentForm.get('first_name').dirty\n                                || addStudentForm.get('first_name').touched)\">First name is required</em>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label for=\"validationCustom1\" class=\"col-xl-3 col-md-4\">\n                        Last Name<span class=\"text-danger ml-1\">*</span></label>\n                    <div class=\"col-xl-8 col-md-7\">\n                        <input class=\"form-control\" formControlName=\"last_name\" id=\"validationCustom1\"\n                               type=\"text\" placeholder=\"Last Name\" required>\n                        <em class=\"error\" *ngIf=\"!addStudentForm.get('last_name').valid && (addStudentForm.get('last_name').dirty ||\n                                addStudentForm.get('last_name').touched)\">Last name is required</em>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label for=\"validationCustom5\" class=\"col-xl-3 col-md-4\">\n                        Email Address<span class=\"text-danger ml-1\">*</span></label>\n                    <div class=\"col-xl-8 col-md-7\">\n                        <input class=\"form-control\" formControlName=\"email_id\" id=\"validationCustom5\" pattern=\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$\"\n                               type=\"email\" placeholder=\"Email\" required>\n                        <em class=\"error\" *ngIf=\"addStudentForm.get('email_id').hasError('required') && (addStudentForm.get('email_id').dirty\n                                || addStudentForm.get('email_id').touched)\">Email is required</em>\n                        <em class=\"error\" *ngIf=\"addStudentForm.get('email_id').hasError('pattern')\">Invalid Email-Id</em>\n                    </div>\n                </div>\n\n                <div class=\"form-group row\">\n                    <label for=\"validationCustom5\" class=\"col-xl-3 col-md-4\">\n                        Grade<span class=\"text-danger ml-1\">*</span></label>\n                    <div class=\"col-xl-8 col-md-7\">\n                        <ng-select [items]=\"gradeData\"\n                                   bindLabel=\"grade_name\"\n                                   bindValue=\"grade_id\"\n                                   formControlName=\"grade\"\n                                   placeholder=\"Select Grade\"\n                                   typeToSearchText=\"\"\n                        >\n                        </ng-select>\n                        <em class=\"error\" *ngIf=\"!addStudentForm.get('grade').valid && (addStudentForm.get('grade').dirty ||\n                                addStudentForm.get('grade').touched)\">Grade is required</em>\n                    </div>\n                </div>\n            </form>\n        </div>\n\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-outline-primary\" type=\"button\" (click)=\"addStudentEnabled ? addstudent() : submitClass(1)\">Submit</button>\n    </div>\n</ng-template>\n\n<ng-template #addMultipleEmailDialog let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h5 class=\"modal-title font-weight-bold\">Invite By Email</h5>\n        <i class=\"fa fa-close cursor\" (click)=\"setStudentEmailForm();modalRef.close()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div style=\"background-color: transparent !important;\" id=\"pre-loader\" *ngIf=\"showBulkEmailLoader\">\n            <img style=\"height: 85px !important;\" src=\"assets/images/pre-loader/loader-01.svg\" alt=\"\">\n        </div>\n        <div class=\"col-sm-12 px-0\">\n            <form [formGroup]=\"studentEmailForm\">\n\n                <div class=\"col-12 mt-3\" [ngbCollapse]=\"!studentEmailForm.controls.is_makeup.value\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-xl-3 col-md-4 align-self-center\"><span class=\"text-danger\">*</span>\n                            Make-up Class Date</label>\n                        <div class=\"col-xl-9 col-md-8\">\n                            <div class=\"d-flex align-items-baseline\">\n                                <input class=\"form-control\" placeholder=\"mm/dd/yyyy\" (click)=\"dp2.toggleCalendar()\"\n                                       name=\"dp2\" formControlName=\"start_date\" angular-mydatepicker\n                                       #dp2=\"angular-mydatepicker\"\n                                       [options]=\"myDpOptions1\" autocomplete=\"off\"\n                                       required>\n                                <div class=\"input-group-append\">\n                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp2.toggleCalendar()\">\n                                        <i class=\"fa fa-calendar-o\"></i></button>\n                                </div>\n                            </div>\n                            <em *ngIf=\"!studentEmailForm.get('start_date').valid && (studentEmailForm.get('start_date').dirty || studentEmailForm.get('start_date').touched)\"\n                                class=\"error\">Please Enter Make-up Class Date</em>\n                        </div>\n                    </div>\n                </div>\n\n                <mat-form-field class=\"col-12\">\n                    <mat-chip-grid #chipList formArrayName=\"emails\">\n                        <mat-chip-row [ngClass]=\"{'error-chip': item.invalid}\"\n                                  *ngFor=\"let item of emailList; let i=index\"\n                                  [removable]=\"removable\"\n                                  (removed)=\"removeEmail(item)\" required name=\"chips\">{{item.value}}\n                            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                        </mat-chip-row>\n                        <input style=\"font-size: 14px; height: 40px !important;\" placeholder=\"Enter Email Id\" [matChipInputFor]=\"chipList\"\n                               [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"true\"\n                               (matChipInputTokenEnd)=\"add($event)\"/>\n                    </mat-chip-grid>\n                </mat-form-field>\n                <mat-error class=\"col-12\" *ngIf=\"!validationEmail && emailList.length != 0\">Invalid email ID</mat-error>\n                <div class=\"col-12\">\n                    <p style=\"font-size: 12px\" >Note: You can give comma separator email-Id and press enter.</p>\n                </div>\n                <div class=\"col-12\">\n                    <textarea class=\"form-control\" rows=\"3\" formControlName=\"message\" placeholder=\"Message\" maxlength=\"500\"></textarea>\n                </div>\n                <div class=\"col-12 mt-3\">\n                    <p class=\"mt-1 mb-0\" style=\"color: black\">{{studentEmailForm.controls.message.value}}</p>\n                    <p class=\"mt-{{studentEmailForm.controls.message.value != '' ? '3' : '1'}} mb-0\" style=\"color: black\">You have been invited by <strong>{{auth.getSessionData('school_name')}}</strong> to join a class: <strong>{{selectClassData.class_code}}</strong> - <strong>{{selectClassData.class_name}}</strong></p>\n                    <p class=\"mt-3 mb-0\" style=\"color: black\">Please click the below link to join the class</p>\n                    <a class=\"m-0 color-primary\" [href]=\"env.envProperties.envURL + '#/auth/login/studentRegister/'+ selectClassData.class_code\" target=\"_blank\">{{env.envProperties.envURL + '#/auth/login/studentRegister/'+ selectClassData.class_code}}</a>\n                    <div class=\"row\">\n                        <div class=\"col-6\">\n                            <p class=\"text-center my-2\">---------------(OR)---------------</p>\n                        </div>\n                    </div>\n                    <a class=\"m-0 color-primary\" [href]=\"env.envProperties.envURL + '#/enrollclasscode/'+ selectClassData.class_code\" target=\"_blank\">{{env.envProperties.envURL + '#/enrollclasscode/'+ selectClassData.class_code}}</a>\n                    <!-- <p class=\"my-2\" style=\"color: black\">\n                        <span><p class=\"mt-2 mb-3\" style=\"color: black\">\n                        ClassCode : <strong> {{selectClassData.class_code}} </strong> <br>\n\n                        If you are new to edquill, use the below URL to register and join class<br>\n\n                            <span class=\"color-primary\">{{env.envProperties.envURL + '#/auth/login/studentRegister/'+ selectClassData.class_code}}</span><br><br>\n\n                        If you are an existing user, use the below URL to login and join class<br>\n\n                            <span class=\"color-primary\">{{env.envProperties.envURL + '#/enrollclasscode/'+ selectClassData.class_code}}</span><br>\n\n                        </p>\n                        </span>\n                    </p> -->\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-outline-primary\" type=\"button\" (click)=\"bulkMail()\"\n                [disabled]=\"!validationEmail && emailList.length != 0\">Submit\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #deleteStudentAlertDialog let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title text-center\">Remove student from class</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"modalRef.close()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-md-12 text-center\">\n            <p><strong>Are you sure to remove student from the class?</strong></p>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-outline-danger\" type=\"button\" (click)=\"modalRef.close()\">close</button>\n        <button class=\"btn btn-outline-primary\" type=\"button\" (click)=\"deleteStudentList(getDeleteStudentData)\">Ok\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #deleteClass let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title align-items-center\">Delete Class</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"modalRef.close()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-md-12 px-0\">\n            <p class=\"mb-0\"><strong>Are you sure to delete the <span class=\"color-primary\">{{classDetails.class_name}}</span> class?</strong>\n            </p>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn cancel\" type=\"button\" (click)=\"modalRef.close()\">close</button>\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"deleteClassList()\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #mailbox let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title text-center\">Send mail</h4>\n        <i class=\"fa fa-close cursor align-self-center\" style=\"font-size: 1.2rem\" (click)=\"modalRef.close()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-12 my-3\">\n            <app-tiny-mice (emitEditorValue)=\"getEditorValue($event)\"\n                           [editorPatchValue]=\"false\"\n                           [height]=\"300\"\n                           [id]=\"'mailbox'\"\n                           [showDropBtn]=\"false\"\n                           [showInputBtn]=\"false\">\n            </app-tiny-mice>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-outline-danger\" type=\"button\" (click)=\"modalRef.close()\">close</button>\n        <button class=\"btn btn-outline-primary\" type=\"button\" (click)=\"sendMail()\"><i class=\"fa fa-paper-plane-o\"></i>\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #studentChange let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title col-12 px-0 font-weight-bold\">Transfer Class</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n            <form [formGroup]=\"studentClassChange\">\n                <div class=\"form-group row\">\n                    <label class=\"col-xl-2 col-md-3 align-self-center\"><span class=\"text-danger\">*</span>\n                        From Class</label>\n                    <div class=\"col-xl-10 col-md-9\">\n                        <input class=\"form-control\" readonly type=\"text\" placeholder=\"Enter the Class Name\"\n                               value=\"{{className}}\">\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label class=\"col-xl-2 col-md-3 align-self-center\"><span class=\"text-danger\">*</span>\n                        To Class</label>\n                    <div class=\"col-xl-10 col-md-9\">\n                        <ng-select [items]=\"allClassList\"\n                                   bindLabel=\"fromClassLabel\"\n                                   bindValue=\"class_id\"\n                                   placeholder=\"Please Select\"\n                                   typeToSearchText=\"\"\n                                   formControlName=\"toClass\"\n                                   [attr.title]=\"selectedToClass?.fromClassLabel\"\n                                   (change)=\"selectedClassDetails($event)\"\n                                   required\n                        >\n                            <ng-template ng-option-tmp let-item=\"item\">\n                                <div [attr.title]=\"item.fromClassLabel\">{{ item.fromClassLabel }}</div>\n                            </ng-template>\n\n                        </ng-select>\n                        <em class=\"error\"\n                            *ngIf=\"!studentClassChange.get('toClass').valid && (studentClassChange.get('toClass').dirty || studentClassChange.get('toClass').touched)\">Select\n                            the To Class</em>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label class=\"col-xl-2 col-md-3 align-self-center\"><span class=\"text-danger\">*</span>\n                        Effective Date</label>\n                    <div class=\"col-xl-10 col-md-9\">\n                        <div class=\"d-flex align-items-baseline\">\n                            <input class=\"form-control\" placeholder=\"mm/dd/yyyy\"\n                                   name=\"dp2\" formControlName=\"from_startdate\" angular-mydatepicker\n                                   #dp2=\"angular-mydatepicker\"\n                                   [options]=\"myDpOptions1\" autocomplete=\"off\"\n                                   required>\n                            <div class=\"input-group-append\">\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp2.toggleCalendar()\">\n                                    <i class=\"fa fa-calendar-o\"></i></button>\n                            </div>\n                        </div>\n                        <em *ngIf=\"!studentClassChange.get('from_startdate').valid && (studentClassChange.get('from_startdate').dirty || studentClassChange.get('from_startdate').touched)\"\n                            class=\"error\">Please Enter Effective Date</em>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-outline-primary\" (click)=\"close()\">Close</button>\n        <button class=\"btn btn-primary\" (click)=\"submitChangeClass()\">Save</button>\n    </div>\n</ng-template>\n\n<ng-template #viewoveralldetails let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title color-primary\" id=\"modal-basic-title\">{{studentName}} Overall details</h4>\n        <i (click)=\"closeOverAll()\" aria-hidden=\"true\"\n           class=\"fa fa-close fa-lg mt-1\" style=\"color:#7F3486; cursor: pointer; float: right;\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <app-overalldetails\n                [studentdata]=\"viewdetail\"\n        >\n        </app-overalldetails>\n    </div>\n</ng-template>\n", styles: [".nodataList{\n  background: #f8f8f9;\n  border: 2px solid #7F3486;\n  padding: 15px 25px;\n  text-align: center;\n  border-radius: 7px;\n  color:#7F3486;\n  width: 100%;\n  font-weight: bolder;\n  font-size: large;\n}\n\n.upload-count {\n  padding: 4px 6px;\n  margin-left: -8px;\n  font-size: 12px;\n  color: #fff;\n  font-weight: 400;\n  border-radius: 50%;\n  position: relative;\n  top: -12px !important;\n  background: #8F008A;\n}\n\n.class-page {\n  position: relative;\n\n  .page-loader--inline {\n    position: absolute;\n    inset: 0;\n    display: grid;\n    place-items: center;\n    background: rgba(255, 255, 255, 0.75);\n    z-index: 99;\n  }\n\n  .class-filters-card {\n    border-radius: var(--radius-lg);\n    position: relative;\n    z-index: 10;\n\n    .card-body {\n      padding-top: var(--spacing-3);\n    }\n    \n    // Ensure ng-select dropdowns appear above all content\n    ::ng-deep .ng-dropdown-panel {\n      z-index: 1000 !important;\n    }\n    \n    ::ng-deep ng-select {\n      position: relative;\n      z-index: auto;\n    }\n  }\n\n  .status-toggle {\n    .btn {\n      border-radius: var(--radius-md);\n      font-weight: 600;\n      padding: 0.45rem 1rem;\n      transition: all var(--transition-base) ease;\n\n      &.active {\n        background: var(--color-primary);\n        border-color: var(--color-primary);\n        color: #fff;\n        box-shadow: var(--shadow-sm);\n      }\n\n      &:hover:not(.active) {\n        background: rgba(143, 0, 138, 0.08);\n        border-color: var(--color-primary);\n        color: var(--color-primary);\n      }\n    }\n  }\n\n  label.form-label {\n    margin-bottom: var(--spacing-2);\n    color: var(--neutral-600);\n  }\n\n  .input-group-text {\n    background: var(--neutral-100);\n    border-color: var(--neutral-300);\n  }\n\n  .input-group .form-control {\n    border-color: var(--neutral-300);\n\n    &:focus {\n      border-color: var(--color-primary);\n      box-shadow: var(--shadow-focus);\n    }\n  }\n\n  .btn-outline-secondary {\n    border-color: var(--neutral-300);\n    color: var(--neutral-700);\n\n    &:hover {\n      background: var(--neutral-100);\n    }\n  }\n\n  // Ensure class cards are below filter dropdowns\n  .list-card {\n    position: relative;\n    z-index: 1;\n  }\n  \n  .class-card {\n    position: relative;\n    z-index: 1;\n    \n    // Fix Action dropdown z-index\n    .dropdown {\n      position: relative;\n      z-index: auto;\n      \n      &:hover {\n        z-index: 1100;\n      }\n      \n      .dropdown-content {\n        position: absolute;\n        z-index: 1100 !important;\n        background-color: #fff;\n        min-width: 200px;\n        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n        border-radius: 0.375rem;\n        border: 1px solid #e5e7eb;\n        padding: 0.5rem 0;\n        display: none;\n        \n        a {\n          display: block;\n          padding: 0.5rem 1rem;\n          color: #374151;\n          text-decoration: none;\n          transition: background-color 0.15s ease;\n          cursor: pointer;\n          \n          &:hover {\n            background-color: #f3f4f6;\n          }\n          \n          i {\n            margin-right: 0.5rem;\n          }\n        }\n      }\n      \n      &:hover .dropdown-content {\n        display: block;\n      }\n      \n      .dropdown-content-up {\n        bottom: 100%;\n        top: auto !important;\n        margin-bottom: 0.25rem;\n      }\n    }\n    \n    // When card has active dropdown, elevate it\n    &:has(.dropdown:hover) {\n      z-index: 1100;\n    }\n  }\n}\n"] }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.NgbModalConfig }, { type: i3.ConfigurationService }, { type: i4.TeacherService }, { type: i5.AuthService }, { type: i6.CommonDataService }, { type: i2.NgbModal }, { type: i7.DomSanitizer }, { type: i8.Router }, { type: i9.TitleCasePipe }, { type: i10.ToastrService }, { type: i11.EnvironmentService }, { type: i12.NewsubjectService }, { type: i13.SseClient }, { type: i9.DatePipe }, { type: i14.ZoomServiceService }, { type: i15.CommonService }, { type: i16.ClassService }, { type: i17.StudentService }, { type: i18.ValidationService }], { AddClass: [{
            type: ViewChild,
            args: ['class']
        }], reports: [{
            type: ViewChild,
            args: ['reports']
        }], showInform: [{
            type: ViewChild,
            args: ['showInform']
        }], writeNoteOpen: [{
            type: ViewChild,
            args: ['writeNoteOpen']
        }], zoomDialog: [{
            type: ViewChild,
            args: ['zoomDialog']
        }], zoomDialog1: [{
            type: ViewChild,
            args: ['zoomDialog1']
        }], meetingSelection: [{
            type: ViewChild,
            args: ['meetingSelection']
        }], recordinglist: [{
            type: ViewChild,
            args: ['recordinglist']
        }], video: [{
            type: ViewChild,
            args: ['video']
        }], addStudentDialog: [{
            type: ViewChild,
            args: ['addStudentDialog']
        }], addMultipleEmailDialog: [{
            type: ViewChild,
            args: ['addMultipleEmailDialog']
        }], deleteStudentAlertDialog: [{
            type: ViewChild,
            args: ['deleteStudentAlertDialog']
        }], mailbox: [{
            type: ViewChild,
            args: ['mailbox']
        }], changeStudent: [{
            type: ViewChild,
            args: ['studentChange']
        }], makeUpClassChange: [{
            type: ViewChild,
            args: ['makeUpClassChange']
        }], viewoveralldetails: [{
            type: ViewChild,
            args: ['viewoveralldetails']
        }], deleteClassDialog: [{
            type: ViewChild,
            args: ['deleteClass']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListClassComponent, { className: "ListClassComponent" }); })();
//# sourceMappingURL=list-class.component.js.map