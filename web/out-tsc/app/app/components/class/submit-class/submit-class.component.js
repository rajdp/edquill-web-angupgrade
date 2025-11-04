import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ViewChild } from '@angular/core';
import { dateOptions, timeZone } from '../../../shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../../../shared/service/configuration.service";
import * as i4 from "../../../shared/service/auth.service";
import * as i5 from "../../../shared/service/common-data.service";
import * as i6 from "../../../shared/service/class.service";
import * as i7 from "@angular/router";
import * as i8 from "@angular/platform-browser";
import * as i9 from "@angular/common";
import * as i10 from "ngx-toastr";
import * as i11 from "../../../shared/service/validation.service";
import * as i12 from "../../../shared/service/common.service";
import * as i13 from "../../../shared/service/newsubject.service";
import * as i14 from "../../../shared/service/student.service";
import * as i15 from "@ng-select/ng-select";
import * as i16 from "@nodro7/angular-mydatepicker";
import * as i17 from "@swimlane/ngx-datatable";
import * as i18 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["validity"];
const _c1 = ["class"];
const _c2 = ["editvalidation"];
const _c3 = ["studentChange"];
function SubmitClassComponent_h4_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 43);
    i0.ɵɵtext(1, "Assign students");
    i0.ɵɵelementEnd();
} }
function SubmitClassComponent_h4_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 43);
    i0.ɵɵtext(1, "Class Details");
    i0.ɵɵelementEnd();
} }
function SubmitClassComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵlistener("click", function SubmitClassComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submitClass(1)); });
    i0.ɵɵtext(1, "Submit");
    i0.ɵɵelementEnd();
} }
function SubmitClassComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 45);
    i0.ɵɵtext(1, "Back");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/class/list-class");
} }
function SubmitClassComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 46);
    i0.ɵɵlistener("click", function SubmitClassComponent_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.viewAssign(2)); });
    i0.ɵɵtext(1, "Curriculum");
    i0.ɵɵelementEnd();
} }
function SubmitClassComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 47);
    i0.ɵɵlistener("click", function SubmitClassComponent_img_8_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.deleteAction()); });
    i0.ɵɵelementEnd();
} }
function SubmitClassComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 48);
    i0.ɵɵlistener("click", function SubmitClassComponent_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.backAction()); });
    i0.ɵɵelement(1, "i", 49);
    i0.ɵɵtext(2, " Back");
    i0.ɵɵelementEnd();
} }
function SubmitClassComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 50);
    i0.ɵɵlistener("click", function SubmitClassComponent_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editAction()); });
    i0.ɵɵelement(1, "i", 49);
    i0.ɵɵtext(2, " Back");
    i0.ɵɵelementEnd();
} }
function SubmitClassComponent_figure_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 51);
    i0.ɵɵelementEnd();
} }
function SubmitClassComponent_figure_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 52);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r2.sanitizer.bypassSecurityTrustResourceUrl(ctx_r2.webhost + "/" + ctx_r2.choosedData[0].profile_url), i0.ɵɵsanitizeUrl);
} }
function SubmitClassComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(2, 2, ctx_r2.choosedData[0].start_date), " ", ctx_r2.choosedData[0].start_time, "");
} }
function SubmitClassComponent_span_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(2, 2, ctx_r2.choosedData[0].end_date), " ", ctx_r2.choosedData[0].end_time, "");
} }
function SubmitClassComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 53)(1, "small", 54);
    i0.ɵɵtext(2, "Assessment: ");
    i0.ɵɵelementStart(3, "span", 55);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "small", 54);
    i0.ɵɵtext(6, "Assignment: ");
    i0.ɵɵelementStart(7, "span", 55);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "small", 56);
    i0.ɵɵtext(10, "Resources: ");
    i0.ɵɵelementStart(11, "span", 55);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.choosedData[0].no_of_assessments);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r2.choosedData[0].no_of_assignments, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r2.choosedData[0].no_of_resources, " ");
} }
function SubmitClassComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 53)(1, "small", 56);
    i0.ɵɵtext(2, "No. of Students: ");
    i0.ɵɵelementStart(3, "span", 55);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.choosedData[0].no_of_students);
} }
function SubmitClassComponent_button_56_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵlistener("click", function SubmitClassComponent_button_56_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.modifylist()); });
    i0.ɵɵtext(1, "Modify List");
    i0.ɵɵelementEnd();
} }
function SubmitClassComponent_button_57_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 46);
    i0.ɵɵlistener("click", function SubmitClassComponent_button_57_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.removeAction(ctx_r2.selected)); });
    i0.ɵɵtext(1, "Remove");
    i0.ɵɵelementEnd();
} }
function SubmitClassComponent_div_60_div_6_i_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 72);
} }
function SubmitClassComponent_div_60_div_6_i_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 73);
} }
function SubmitClassComponent_div_60_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 63)(1, "div", 64)(2, "div", 65);
    i0.ɵɵlistener("click", function SubmitClassComponent_div_60_div_6_Template_div_click_2_listener() { const ctx_r11 = i0.ɵɵrestoreView(_r11); const list_r13 = ctx_r11.$implicit; const i_r14 = ctx_r11.index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.addGradeOutside(list_r13, i_r14, list_r13.student_id, list_r13.status)); });
    i0.ɵɵelementStart(3, "div", 66)(4, "h6", 67);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small", 68);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "br");
    i0.ɵɵelementStart(9, "small", 68);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 69);
    i0.ɵɵtemplate(12, SubmitClassComponent_div_60_div_6_i_12_Template, 1, 0, "i", 70)(13, SubmitClassComponent_div_60_div_6_i_13_Template, 1, 0, "i", 71);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const list_r13 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(list_r13.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(list_r13.grade_name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" Email: ", list_r13.student_id, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r13.status == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r13.status == "1");
} }
function SubmitClassComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57)(1, "div", 58)(2, "ng-select", 59);
    i0.ɵɵtwoWayListener("ngModelChange", function SubmitClassComponent_div_60_Template_ng_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.gradName, $event) || (ctx_r2.gradName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function SubmitClassComponent_div_60_Template_ng_select_change_2_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.getGradeValue($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 58)(4, "input", 60);
    i0.ɵɵlistener("input", function SubmitClassComponent_div_60_Template_input_input_4_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.updateFilter($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function SubmitClassComponent_div_60_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.searchedKeyword, $event) || (ctx_r2.searchedKeyword = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 61);
    i0.ɵɵtemplate(6, SubmitClassComponent_div_60_div_6_Template, 14, 5, "div", 62);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r2.gradeData);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.gradName);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.searchedKeyword);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.studentData);
} }
function SubmitClassComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 74);
    i0.ɵɵlistener("change", function SubmitClassComponent_ng_template_65_Template_input_change_0_listener() { const ctx_r15 = i0.ɵɵrestoreView(_r15); const allRowsSelected_r17 = ctx_r15.allRowsSelected; const selectFn_r18 = ctx_r15.selectFn; return i0.ɵɵresetView(selectFn_r18(!allRowsSelected_r17)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const allRowsSelected_r17 = ctx.allRowsSelected;
    i0.ɵɵproperty("checked", allRowsSelected_r17);
} }
function SubmitClassComponent_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 74);
    i0.ɵɵlistener("change", function SubmitClassComponent_ng_template_66_Template_input_change_0_listener($event) { const onCheckboxChangeFn_r20 = i0.ɵɵrestoreView(_r19).onCheckboxChangeFn; return i0.ɵɵresetView(onCheckboxChangeFn_r20($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const isSelected_r21 = ctx.isSelected;
    i0.ɵɵproperty("checked", isSelected_r21);
} }
function SubmitClassComponent_ng_template_68_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 75);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r22 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", row_r22.first_name, " ", row_r22.last_name, "");
} }
function SubmitClassComponent_ngx_datatable_column_69_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 77);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r23 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", row_r23.student_id, "");
} }
function SubmitClassComponent_ngx_datatable_column_69_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-datatable-column", 76);
    i0.ɵɵtemplate(1, SubmitClassComponent_ngx_datatable_column_69_ng_template_1_Template, 2, 1, "ng-template", 38);
    i0.ɵɵelementEnd();
} }
function SubmitClassComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 75);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r24 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", row_r24.grade_name, "");
} }
function SubmitClassComponent_ngx_datatable_column_72_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 79);
    i0.ɵɵlistener("click", function SubmitClassComponent_ngx_datatable_column_72_ng_template_1_Template_img_click_0_listener() { const row_r26 = i0.ɵɵrestoreView(_r25).row; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.classChange(row_r26)); });
    i0.ɵɵelementEnd();
} }
function SubmitClassComponent_ngx_datatable_column_72_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-datatable-column", 78);
    i0.ɵɵtemplate(1, SubmitClassComponent_ngx_datatable_column_72_ng_template_1_Template, 1, 0, "ng-template", 38);
    i0.ɵɵelementEnd();
} }
function SubmitClassComponent_ng_template_73_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30)(1, "div", 87);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 88)(4, "div", 89)(5, "input", 90, 5);
    i0.ɵɵtwoWayListener("ngModelChange", function SubmitClassComponent_ng_template_73_div_6_Template_input_ngModelChange_5_listener($event) { const list_r29 = i0.ɵɵrestoreView(_r28).$implicit; i0.ɵɵtwoWayBindingSet(list_r29.validity1, $event) || (list_r29.validity1 = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("click", function SubmitClassComponent_ng_template_73_div_6_Template_input_click_5_listener() { i0.ɵɵrestoreView(_r28); const dp_r30 = i0.ɵɵreference(6); return i0.ɵɵresetView(dp_r30.toggleCalendar()); })("dateChanged", function SubmitClassComponent_ng_template_73_div_6_Template_input_dateChanged_5_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onDateChanged($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 91)(8, "button", 86);
    i0.ɵɵlistener("click", function SubmitClassComponent_ng_template_73_div_6_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r28); const dp_r30 = i0.ɵɵreference(6); return i0.ɵɵresetView(dp_r30.toggleCalendar()); });
    i0.ɵɵelement(9, "i", 92);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const list_r29 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", list_r29.first_name, " ", list_r29.last_name, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", list_r29.validity1);
    i0.ɵɵproperty("options", ctx_r2.myDpOptions);
} }
function SubmitClassComponent_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 80)(1, "h4", 81);
    i0.ɵɵtext(2, "Edit Validity");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 82)(4, "div", 19)(5, "div", 20);
    i0.ɵɵtemplate(6, SubmitClassComponent_ng_template_73_div_6_Template, 10, 4, "div", 83);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 84)(8, "button", 85);
    i0.ɵɵlistener("click", function SubmitClassComponent_ng_template_73_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r27); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.cancel()); });
    i0.ɵɵtext(9, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 86);
    i0.ɵɵlistener("click", function SubmitClassComponent_ng_template_73_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r27); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.update()); });
    i0.ɵɵtext(11, "Update");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r2.valid);
} }
function SubmitClassComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 80)(1, "h4", 93);
    i0.ɵɵtext(2, "Delete Class");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 82)(4, "div", 7)(5, "div", 8)(6, "div", 94)(7, "h5", 95);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(9, "div", 84)(10, "button", 85);
    i0.ɵɵlistener("click", function SubmitClassComponent_ng_template_75_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r31); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵtext(11, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 85);
    i0.ɵɵlistener("click", function SubmitClassComponent_ng_template_75_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r31); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.updateDelete()); });
    i0.ɵɵtext(13, "OK ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("Are you sure you want to delete ", ctx_r2.classname, " Class");
} }
function SubmitClassComponent_ng_template_77_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 80)(1, "h4", 96)(2, "b");
    i0.ɵɵtext(3, "Edit Validity");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 82)(5, "h5");
    i0.ɵɵtext(6, "Please select atleast one student for changing the validity");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 97)(8, "button", 85);
    i0.ɵɵlistener("click", function SubmitClassComponent_ng_template_77_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r32); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵtext(9, "Ok");
    i0.ɵɵelementEnd()();
} }
function SubmitClassComponent_ng_template_79_em_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 111);
    i0.ɵɵtext(1, "Select the To Class");
    i0.ɵɵelementEnd();
} }
function SubmitClassComponent_ng_template_79_em_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 111);
    i0.ɵɵtext(1, "Please Enter Effective Date");
    i0.ɵɵelementEnd();
} }
function SubmitClassComponent_ng_template_79_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 80)(1, "h4", 98);
    i0.ɵɵtext(2, "Transfer Class");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 82)(4, "div", 7)(5, "form", 99)(6, "div", 100)(7, "label", 101)(8, "span", 102);
    i0.ɵɵtext(9, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " From Class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 103);
    i0.ɵɵelement(12, "input", 104);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 100)(14, "label", 101)(15, "span", 102);
    i0.ɵɵtext(16, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17, " To Class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 103)(19, "ng-select", 105);
    i0.ɵɵlistener("change", function SubmitClassComponent_ng_template_79_Template_ng_select_change_19_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.selectedClass($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(20, SubmitClassComponent_ng_template_79_em_20_Template, 2, 0, "em", 106);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 100)(22, "label", 101)(23, "span", 102);
    i0.ɵɵtext(24, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(25, " Effective Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 107)(27, "div", 89)(28, "input", 108, 6);
    i0.ɵɵlistener("dateChanged", function SubmitClassComponent_ng_template_79_Template_input_dateChanged_28_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onDateChanged($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "div", 91)(31, "button", 86);
    i0.ɵɵlistener("click", function SubmitClassComponent_ng_template_79_Template_button_click_31_listener() { i0.ɵɵrestoreView(_r33); const dp2_r34 = i0.ɵɵreference(29); return i0.ɵɵresetView(dp2_r34.toggleCalendar()); });
    i0.ɵɵelement(32, "i", 92);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(33, SubmitClassComponent_ng_template_79_em_33_Template, 2, 0, "em", 106);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(34, "div", 84)(35, "button", 109);
    i0.ɵɵlistener("click", function SubmitClassComponent_ng_template_79_Template_button_click_35_listener() { i0.ɵɵrestoreView(_r33); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵtext(36, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "button", 110);
    i0.ɵɵlistener("click", function SubmitClassComponent_ng_template_79_Template_button_click_37_listener() { i0.ɵɵrestoreView(_r33); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submitChangeClass()); });
    i0.ɵɵtext(38, "Save");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r2.studentClassChange);
    i0.ɵɵadvance(7);
    i0.ɵɵpropertyInterpolate("value", ctx_r2.choosedData[0].class_name);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("items", ctx_r2.allClassList);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.studentClassChange.get("toClass").valid && (ctx_r2.studentClassChange.get("toClass").dirty || ctx_r2.studentClassChange.get("toClass").touched));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("options", ctx_r2.myDpOptions1);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", !ctx_r2.studentClassChange.get("from_startdate").valid && (ctx_r2.studentClassChange.get("from_startdate").dirty || ctx_r2.studentClassChange.get("from_startdate").touched));
} }
export class SubmitClassComponent {
    constructor(formBuilder, config, confi, modalService, auth, commondata, classes, router, sanitizer, route, firstcaps, toastr, validationService, common, newSubject, student, datePipe) {
        this.formBuilder = formBuilder;
        this.config = config;
        this.confi = confi;
        this.modalService = modalService;
        this.auth = auth;
        this.commondata = commondata;
        this.classes = classes;
        this.router = router;
        this.sanitizer = sanitizer;
        this.route = route;
        this.firstcaps = firstcaps;
        this.toastr = toastr;
        this.validationService = validationService;
        this.common = common;
        this.newSubject = newSubject;
        this.student = student;
        this.datePipe = datePipe;
        this.setDate = new Date().toLocaleString('en-US', { timeZone: timeZone.location });
        this.myDpOptions = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat,
            disableUntil: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getMonth() + 1,
                day: new Date(this.setDate).getDate() - 1
            },
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
        };
        this.rows = [];
        this.temp = [];
        this.loadingIndicator = true;
        this.allGrade = [];
        this.allClassList = [];
        this.classStudentList = [];
        this.roleId = this.auth.getRoleId();
        this.route.params.forEach((params) => {
            this.classType = params.id;
        });
        this.schoolListDetails = JSON.parse(this.auth.getSessionData('rista_data1'));
        this.choosedData = JSON.parse(this.auth.getSessionData('card-data'));
        this.studentClassChange = this.formBuilder.group({
            toClass: [null, Validators.required],
            from_startdate: ['', Validators.required]
        });
        this.classname = this.choosedData[0].class_name;
        this.newrow = [];
        this.teacherType = this.auth.getSessionData('teacher_type');
        this.listView = this.auth.getSessionData('classView');
        this.schoolIdNum = this.auth.getSessionData('school_id');
        if (this.classType == '1') {
            this.gradeid = ['-1'];
            this.classid = this.choosedData[0].class_id;
        }
        else if (this.classType == '2') {
            if (this.choosedData[0].grade == '') {
                this.gradeid = [];
            }
            else {
                this.gradeid = [this.choosedData[0].grade];
            }
            this.classid = '0';
        }
        if (this.choosedData[0].grade.length >= 3) {
            const splitGrade = this.choosedData[0].grade.split(',');
            for (let i = 0; i < splitGrade.length; i++) {
                this.allGrade.push(splitGrade[i]);
            }
        }
        else {
            this.allGrade.push(this.choosedData[0].grade);
        }
        this.hideTableButton = this.choosedData[0].classDate_status != '4' || this.roleId == '2';
        this.curriculumButton = this.choosedData[0].classDate_status != '4' || this.roleId == '2';
        this.hidedeleteButton = !((this.choosedData[0].classDate_status == '3' && this.choosedData[0].class_status == '0') || (this.choosedData[0].classDate_status == '4' && this.roleId != '2'));
        this.hideButton = true;
        this.editButton = this.auth.getSessionData('editView') == 'true';
        if (this.choosedData[0].classDate_status == '5') {
            this.editButton = true;
            this.hideButton = false;
        }
        else if (this.choosedData[0].classDate_status == '4' && this.choosedData[0].class_status == '1') {
            this.curriculumButton = true;
            this.hideTableButton = true;
            this.hidedeleteButton = true;
        }
        else if (this.choosedData[0].classDate_status == '4' && this.choosedData[0].class_status == '0') {
            this.hideButton = false;
        }
        this.schoolId = JSON.parse(this.auth.getSessionData('rista_data1'));
        if (this.auth.getRoleId() == '2') {
            this.schoolIdNum = this.auth.getSessionData('school_id');
        }
        else if (this.auth.getRoleId() == '4') {
            this.schoolIdNum = this.schoolId.school_id;
        }
        this.modifyList = false;
        config.backdrop = 'static';
        config.keyboard = false;
        this.selected = [];
        this.valid = [];
        this.webhost = this.confi.getimgUrl();
        if ((this.auth.getRoleId() == '4') && this.auth.getSessionData('teacher_type') == '0') {
            if (this.schoolListDetails.permissions[6].permission[0].status == 1) {
                this.allowClass = true;
            }
            else if (this.schoolListDetails.permissions[6].permission[0].status == 0) {
                this.allowClass = false;
            }
            if (this.schoolListDetails.permissions[7].permission[0].status == 1) {
                this.allowTransfer = true;
            }
            else if (this.schoolListDetails.permissions[7].permission[0].status == 0) {
                this.allowTransfer = false;
            }
        }
        else {
            this.allowClass = true;
            this.allowTransfer = true;
        }
        if (this.allowClass == false) {
            this.hideTableButton = false;
            this.hideButton = false;
            this.editButton = false;
            // this.curriculumButton = true;
            this.hidedeleteButton = false;
        }
    }
    ngOnInit() {
        this.allowSelect = true;
        this.newSubject.allowSchoolChange(this.allowSelect);
        this.gradeStudentList();
        this.gradeList();
        // this.searchStudent(1);
        this.studentClassList(0);
        this.auth.removeSessionData('backOption');
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
    addGradeOutside(list, id, student_id, status) {
        if (status == '0') {
            this.addGrade(list, id);
        }
        else {
            this.removeGrade(student_id, id);
        }
    }
    addGrade(list, id) {
        this.studentData.forEach((value, index) => {
            if (value.student_id == list.student_id) {
                this.temp.push(this.studentData[index]);
                this.studentData[index].status = '1';
                this.studentData[index].isSelect = false;
            }
        });
        this.rows = [...this.temp];
    }
    getGradeValue(event) {
        if (typeof event == 'undefined') {
            this.gradeValue = [];
            this.searchStudent(1);
        }
        else if (event.length == 0) {
            this.gradeValue = undefined;
            if (this.searchedword == '' || this.searchedword == undefined) {
                this.searchStudent(2);
                this.studentData = [];
            }
            else {
                this.searchStudent(1);
            }
        }
        else {
            this.gradeValue = [];
            for (let i = 0; i < event.length; i++) {
                this.gradeValue.push(event[i].grade_id);
            }
            this.searchStudent(1);
        }
    }
    updateFilter(event) {
        this.searchedword = event.target.value;
        const val = event.target.value.toLowerCase();
        if (val != '') {
            const temp = this.studentData1.filter(function (d) {
                return d.student_id.toLowerCase().indexOf(val) !== -1 || d.name.toLowerCase().indexOf(val) !== -1 || d.grade_name.toLowerCase().indexOf(val) !== -1 || !val;
            });
            this.studentData = temp;
        }
        else if (val == '' && (this.gradeValue == '' || this.gradeValue == undefined)) {
            this.searchStudent(2);
            this.studentData = [];
        }
        else if (val == '' && this.gradeValue != '') {
            this.searchStudent(1);
        }
    }
    removeGrade(schoolid, id) {
        let pos = this.temp.map((e) => { return e.student_id; }).indexOf(schoolid);
        this.temp.splice(pos, 1);
        this.studentData[id].status = '0';
        this.studentData[id].isSelect = false;
        this.rows = [...this.temp];
    }
    deleteAction() {
        this.modalRef = this.modalService.open(this.deleteClass, { size: 'md', backdrop: 'static' });
    }
    updateDelete() {
        this.classdelete();
    }
    onActivate(event) {
    }
    onSelect(selected, type) {
        let selectedItem = [];
        if (type == 'direct') {
            this.selected = selected.selected;
            selected.selected.forEach((item) => {
                selectedItem.push(item.user_id);
            });
        }
        else {
            let shiftSelected = [selected];
            this.selected = shiftSelected;
            shiftSelected.forEach((item) => {
                selectedItem.push(item.user_id);
            });
        }
        // type == 'direct' ? selected.selected : selected;
        // this.selected = selected.selected;
        // selected.selected.forEach((item) => {
        //     selectedItem.push(item.user_id);
        // });
        this.rows.forEach((item) => {
            item.isSelect = selectedItem.includes(item.user_id);
        });
    }
    removeAction(selected) {
        let data = [];
        this.selected = [];
        this.rows.forEach((item, index) => {
            if (item.isSelect == false) {
                data.push(item);
            }
        });
        this.selected.filter((item) => {
            return item.isSelect == true;
        });
        this.selectedRows = selected;
        for (let j = 0; j < this.selectedRows.length; j++) {
            for (let k = 0; k < this.studentData.length; k++) {
                if (this.selectedRows[j].student_id == this.studentData[k].student_id) {
                    this.studentData[k].status = '0';
                }
            }
        }
        this.rows = [...data];
        this.temp = data;
        this.auth.setSessionData('studentlist1', JSON.stringify(this.rows));
        this.auth.setSessionData('studentlist', JSON.stringify(this.rows));
    }
    modifylist() {
        this.modifyList = !this.modifyList;
        for (let i = 0; i < this.studentData.length; i++) {
            this.gradName = this.studentData[i].grade_id;
        }
        this.studentData = [];
    }
    editAction() {
        this.auth.setSessionData('classView', true);
        this.auth.setSessionData('editclass', JSON.stringify(this.choosedData));
        this.auth.setSessionData('studentlist', JSON.stringify(this.rows));
        this.auth.setSessionData('studentlist1', JSON.stringify(this.rows));
        this.auth.setSessionData('updatedStudent', 1);
        this.router.navigate(['/class/create-class/edit']);
        if (this.choosedData[0].classDate_status == '2') {
            this.auth.removeSessionData('readonly_startdate');
        }
        else if (this.choosedData[0].classDate_status == '3') {
            if (this.choosedData[0].class_status == '1') {
                this.auth.removeSessionData('readonly_startdate');
                this.auth.removeSessionData('readonly_data');
            }
            else {
                this.auth.setSessionData('readonly_startdate', 'yes');
                if (this.auth.getRoleId() == '4' && this.teacherType == '0') {
                    this.auth.setSessionData('readonly_data', 'true');
                }
                else {
                    this.auth.removeSessionData('readonly_data');
                }
            }
        }
    }
    backAction() {
        this.listView = false;
        this.router.navigate(['/class/create-class/addEdit']);
        this.auth.setSessionData('editclass', JSON.stringify(this.choosedData));
        this.auth.setSessionData('studentlist', JSON.stringify(this.rows));
        this.auth.setSessionData('studentlist1', JSON.stringify(this.rows));
        this.auth.setSessionData('updatedStudent', 1);
        if (this.roleId == '2' && this.choosedData[0].classDate_status == '4') {
            this.auth.setSessionData('readonly_startdate', 'yes');
        }
        else if (this.choosedData[0].classDate_status == '3' || this.choosedData[0].classDate_status == '5') {
            this.auth.setSessionData('readonly_startdate', 'yes');
            // this.auth.setSessionData('readonly_data', 'true');
        }
    }
    gradeStudentList() {
        if (this.auth.getSessionData('studentlist') != '') {
            this.classid = this.choosedData[0].class_id;
            this.gradeid = ['-1'];
            // this.batchid = ['0'];
        }
        else {
            this.classid = '0';
            // this.batchid = this.choosedData[0].batch_id;
            if (this.choosedData[0].grade == '') {
                this.gradeid = [];
            }
            else {
                this.gradeid = [this.choosedData[0].grade];
            }
        }
        const data = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolIdNum,
            class_id: this.classid,
            grade_id: this.gradeid,
            // batch_id: this.batchid,
            end_date: this.choosedData[0].end_date
        };
        this.classes.studentList(data).subscribe((successData) => {
            this.studentListSuccess(successData);
        }, (error) => {
            this.studentListFailure(error);
        });
    }
    studentListSuccess(successData) {
        if (successData.IsSuccess) {
            this.listData = successData.ResponseObject;
            if (this.auth.getSessionData('studentlist') != '') {
                // This rows is used when the user goes to add class component after class is created//
                this.rows = JSON.parse(this.auth.getSessionData('studentlist'));
                this.temp = [...this.rows];
            }
            else {
                this.datanew = this.listData;
                if (this.auth.getSessionData('studentlist1') != '') {
                    this.newrow = JSON.parse(this.auth.getSessionData('studentlist1'));
                    this.rows = [...this.datanew, ...this.newrow];
                }
                else {
                    this.rows = [...this.datanew];
                }
                this.rows = this.rows.filter((item, index, array) => index === array.findIndex((findTest) => findTest.student_id === item.student_id));
                this.temp = this.rows;
            }
            this.rows.forEach((item) => {
                item.isSelect = false;
            });
            this.searchStudent(1);
        }
    }
    studentListFailure(error) {
        console.log(error, 'error');
    }
    searchStudent(id) {
        if (this.gradeValue != '') {
            const data = {
                platform: 'web',
                type: 'list',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.schoolIdNum,
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
            this.studentData = [];
        }
    }
    addstudentListSuccess(successData, id) {
        if (successData.IsSuccess) {
            this.studentData = successData.ResponseObject;
            this.studentData1 = successData.ResponseObject;
            for (let i = 0; i < this.studentData.length; i++) {
                this.studentData[i].status = '0';
                this.studentData[i].name = this.studentData[i].first_name + ' ' + this.studentData[i].last_name;
                for (let j = 0; j < this.rows.length; j++) {
                    if (this.studentData[i].student_id == this.rows[j].student_id) {
                        this.studentData[i].status = '1';
                    }
                }
            }
            if (id == 2) {
                this.studentData = [];
            }
        }
    }
    addstudentListFailure(error) {
        console.log(error, 'error');
    }
    viewAssign(type) {
        this.submitClass(type);
    }
    submitClass(type) {
        for (let i = 0; i < this.temp.length; i++) {
            if (this.temp[i].grade_id !== this.allGrade) {
                this.allGrade.push(this.temp[i].grade_id);
            }
        }
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolIdNum,
            teacher_id: this.choosedData[0].teacher_id,
            class_name: this.choosedData[0].class_name,
            subject: this.choosedData[0].subject,
            start_date: this.choosedData[0].start_date,
            end_date: this.choosedData[0].end_date,
            start_time: this.choosedData[0].start_time,
            end_time: this.choosedData[0].end_time,
            grade: this.allGrade,
            meeting_link: this.choosedData[0].meeting_link,
            meeting_id: this.choosedData[0].meeting_id,
            passcode: this.choosedData[0].passcode,
            class_code: this.choosedData[0].class_code,
            status: this.choosedData[0].status,
            class_id: this.choosedData[0].class_id,
            students: this.temp,
        };
        this.classes.submit(data).subscribe((successData) => {
            this.submitClassSuccess(successData, type);
        }, (error) => {
            this.submitClassFailure(error);
        });
    }
    submitClassSuccess(successData, type) {
        if (successData.IsSuccess) {
            this.auth.setSessionData('submit-data', JSON.stringify(successData.ResponseObject[0]));
            this.auth.removeSessionData('updatedStudent');
            this.auth.removeSessionData('readonly_data');
            this.auth.removeSessionData('readonly_startdate');
            this.auth.removeSessionData('studentlist1');
            this.auth.removeSessionData('class-curriculum');
            const redirectSchedulePage = !!this.auth.getSessionData('enterThroughSchedule');
            if (type == '1') {
                this.toastr.success(successData.ResponseObject, 'Class');
                this.auth.removeSessionData('editView');
                if (redirectSchedulePage == true) {
                    this.auth.removeSessionData('enterThroughSchedule');
                    this.router.navigate(['/schedule/schedule-page']);
                }
                else {
                    this.router.navigate(['/class/list-class']);
                }
            }
            else if (type == '2') {
                this.router.navigate(['/class/topicsAndCurriculum/1']);
            }
        }
        else {
            this.toastr.error(successData.ResponseObject, 'Class');
        }
    }
    submitClassFailure(error) {
        console.log(error, 'error');
        this.toastr.error(error.ResponseObject, 'Class');
    }
    classdelete() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.choosedData[0].class_id
        };
        this.classes.deleteclass(data).subscribe((successData) => {
            this.deleteClassSuccess(successData);
        }, (error) => {
            this.deleteClassFailure(error);
        });
    }
    deleteClassSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success('Class deleted Successfully', 'Class');
            // this.auth.setSessionData('card-data', false);
            this.modalRef.close();
            const redirectSchedulePage = !!this.auth.getSessionData('enterThroughSchedule');
            if (redirectSchedulePage == true) {
                this.auth.removeSessionData('enterThroughSchedule');
                this.router.navigate(['/schedule/schedule-page']);
            }
            else {
                this.router.navigate(['/class/list-class']);
            }
        }
        else {
            this.toastr.error(successData.ResponseObject, 'Class');
        }
    }
    deleteClassFailure(error) {
        console.log(error, 'error');
        this.toastr.error(error.ResponseObject, 'Class');
    }
    showModal(selected) {
        this.selectedRows = selected;
        if (this.selectedRows == '') {
            this.modalRef = this.modalService.open(this.editValidityCheck);
        }
        else {
            this.valid = [];
            for (let i = 0; i < this.temp.length; i++) {
                for (let j = 0; j < this.selectedRows.length; j++) {
                    if (this.selectedRows[j].student_id == this.temp[i].student_id) {
                        const date = this.temp[i].validity.split('-');
                        const dateObj = { isRange: false, singleDate: { jsDate: new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2])) }, dateRange: null };
                        this.temp[i].validity = dateObj;
                        this.temp[i].validity1 = dateObj;
                        this.valid.push(this.temp[i]);
                    }
                }
            }
            this.modalRef = this.modalService.open(this.validityContent);
            this.modalRef.result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
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
    typeChecking(value) {
        let val = typeof value;
        return val;
    }
    update() {
        for (let i = 0; i < this.temp.length; i++) {
            for (let j = 0; j < this.valid.length; j++) {
                if (this.valid[j].student_id == this.temp[i].student_id) {
                    if (this.valid[j].validity1 == this.temp[i].validity1) {
                        const patchDate = this.valid[j].validity1.singleDate.jsDate;
                        function convert(str) {
                            var date = new Date(str), mnth = ('0' + (date.getMonth() + 1)).slice(-2), day = ('0' + date.getDate()).slice(-2);
                            return [date.getFullYear(), mnth, day].join('-');
                        }
                        this.temp[i].validity = convert(patchDate);
                    }
                    else {
                        const patchDate = this.valid[j].validity1.singleDate.formatted;
                        this.temp[i].validity = patchDate;
                    }
                }
            }
        }
        this.modalRef.close();
    }
    onDateChanged(event) {
    }
    cancel() {
        for (let i = 0; i < this.temp.length; i++) {
            for (let j = 0; j < this.valid.length; j++) {
                if (this.valid[j].student_id == this.temp[i].student_id) {
                    const patchDate = this.valid[j].validity.singleDate.jsDate;
                    function convert(str) {
                        var date = new Date(str), mnth = ('0' + (date.getMonth() + 1)).slice(-2), day = ('0' + date.getDate()).slice(-2);
                        return [date.getFullYear(), mnth, day].join('-');
                    }
                    this.temp[i].validity = convert(patchDate);
                }
            }
        }
        this.modalRef.close();
    }
    close() {
        this.modalRef.close();
    }
    classChange(event) {
        console.log(event);
        this.selectedChangeStudent = event;
        // this.student_id = event.user_id;
        this.studentClassList(event.user_id);
        this.modalRef = this.modalService.open(this.changeStudent, { size: 'lg' });
    }
    studentClassList(id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_id: id,
            class_id: this.choosedData[0].class_id,
            school_id: this.schoolId.school_id
        };
        this.student.studentClassList(data).subscribe((successData) => {
            this.studentClassListSuccess(successData, id);
        }, (error) => {
            console.error(error, 'error');
        });
    }
    studentClassListSuccess(successData, id) {
        if (successData.IsSuccess) {
            if (id == 0) {
                this.allClassList = successData.ResponseObject;
                this.allClassList.forEach((val) => {
                    val['fromClassLabel'] = val.class_name + '  -  ' + val.teacher_name;
                });
                console.log(this.allClassList, 'allClassList');
            }
            else {
                this.classStudentList = successData.ResponseObject;
            }
        }
    }
    selectedClass(event) {
        this.selectedToClass = event;
        if (event.status == '1') {
            const sd = event.start_date.split('-');
            const sdObject = { isRange: false, singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) }, dateRange: null };
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
        }
    }
    submitChangeClass() {
        if (this.choosedData[0].class_id == this.studentClassChange.controls.toClass.value) {
            this.toastr.error('From Class and To Class should be different');
            return false;
        }
        console.log(this.studentClassChange.controls.from_startdate.value, 'startdata');
        if (this.studentClassChange.valid) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.schoolId.school_id,
                from_class: this.choosedData[0].class_id,
                to_class: this.studentClassChange.controls.toClass.value,
                from_date: this.selectedToClass.start_date,
                end_date: this.selectedToClass.end_date,
                joining_date: this.studentClassChange.controls.from_startdate.value == null ? '' : this.datePipe.transform(this.studentClassChange.controls.from_startdate.value.singleDate.jsDate, 'yyyy-MM-dd'),
                student_id: this.selectedChangeStudent.user_id,
                status: '1'
            };
            this.student.changeClass(data).subscribe((successData) => {
                this.submitChangeSuccess(successData);
            }, (error) => {
                console.error(error, 'Submit_error');
            });
        }
        else {
            this.validationService.validateAllFormFields(this.studentClassChange);
            this.toastr.error('Please Select all the mandatory fields');
        }
    }
    submitChangeSuccess(successData) {
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
    static { this.ɵfac = function SubmitClassComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SubmitClassComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.NgbModalConfig), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i2.NgbModal), i0.ɵɵdirectiveInject(i4.AuthService), i0.ɵɵdirectiveInject(i5.CommonDataService), i0.ɵɵdirectiveInject(i6.ClassService), i0.ɵɵdirectiveInject(i7.Router), i0.ɵɵdirectiveInject(i8.DomSanitizer), i0.ɵɵdirectiveInject(i7.ActivatedRoute), i0.ɵɵdirectiveInject(i9.TitleCasePipe), i0.ɵɵdirectiveInject(i10.ToastrService), i0.ɵɵdirectiveInject(i11.ValidationService), i0.ɵɵdirectiveInject(i12.CommonService), i0.ɵɵdirectiveInject(i13.NewsubjectService), i0.ɵɵdirectiveInject(i14.StudentService), i0.ɵɵdirectiveInject(i9.DatePipe)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SubmitClassComponent, selectors: [["app-submit-class"]], viewQuery: function SubmitClassComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(DatatableComponent, 7);
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.table = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.validityContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteClass = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.editValidityCheck = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.changeStudent = _t.first);
        } }, decls: 81, vars: 40, consts: [["table", ""], ["validity", ""], ["class", ""], ["editvalidation", ""], ["studentChange", ""], ["dp", "angular-mydatepicker"], ["dp2", "angular-mydatepicker"], [1, "container-fluid"], [1, "row"], ["class", "col-12 col-sm-4", 4, "ngIf"], [1, "col-12", "col-sm-8"], ["class", "btn btn-primary pull-right ml-3", 3, "click", 4, "ngIf"], ["class", "btn btn-primary pull-right ml-3", 3, "routerLink", 4, "ngIf"], ["class", "btn btn-outline-primary pull-right", 3, "click", 4, "ngIf"], ["class", "pull-right deleteimg1 mr-3", "title", "Delete Class", "src", "assets/images/pdf-icons/Icon material-delete-1.png", "alt", "", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-primary mr-3 pull-right", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-primary pull-right mr-3", 3, "click", 4, "ngIf"], [1, "row", "list-card", "mt-2"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "col-12", "col-md-2"], [4, "ngIf"], [1, "col-12", "col-md-6"], [1, "t-period"], [1, "font-weight-bold"], [1, "contenttext", "font-weight-bold"], [1, "t-name", "capital", "font-weight-bold"], ["class", "contenttext font-weight-bold", 4, "ngIf"], [1, "col-12", "col-md-4"], [1, "row", "mb-3"], ["class", "col-md-12", 4, "ngIf"], [1, "row", "d-flex", "mb-3"], [1, "col-12", "col-sm-4", "contenttext"], ["class", "col-md-3 mt-1", 4, "ngIf"], [1, "bootstrap", 3, "activate", "select", "rows", "columnMode", "loadingIndicator", "headerHeight", "footerHeight", "limit", "rowHeight", "selected", "selectionType"], [3, "width", "sortable", "canAutoResize", "draggable", "resizeable"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "Name", 1, "contenttext"], ["class", "contenttext", "name", "Email", 4, "ngIf"], ["name", "Grade", 1, "contenttext"], ["class", "contenttext", "name", "Action", 4, "ngIf"], [1, "col-12", "col-sm-4"], [1, "btn", "btn-primary", "pull-right", "ml-3", 3, "click"], [1, "btn", "btn-primary", "pull-right", "ml-3", 3, "routerLink"], [1, "btn", "btn-outline-primary", "pull-right", 3, "click"], ["title", "Delete Class", "src", "assets/images/pdf-icons/Icon material-delete-1.png", "alt", "", 1, "pull-right", "deleteimg1", "mr-3", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-3", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-long-arrow-left", "fa-1x"], ["type", "button", 1, "btn", "btn-outline-primary", "pull-right", "mr-3", 3, "click"], ["src", "assets/images/ristaschool/Mask Group 35.png", "alt", "", 1, "w-100"], ["alt", "", 1, "w-100", 3, "src"], [1, "col-md-12"], [1, "ml-3", "pull-right"], [1, "t-name"], [1, "pull-right"], [1, "col-md-3", "mt-1"], [1, "col-md-12", "form-group"], ["bindLabel", "grade_name", "bindValue", "grade_id", "placeholder", "Select Grade", "typeToSearchText", "", "multiple", "true", 3, "ngModelChange", "change", "items", "ngModel"], ["type", "text", "placeholder", "Search Student Name/Email-id/Grade", 1, "form-control", 3, "input", "ngModelChange", "ngModel"], [1, "col-md-12", 2, "max-height", "400px", "overflow", "auto"], ["class", "card my-2", 4, "ngFor", "ngForOf"], [1, "card", "my-2"], [1, "card-body", "card-list", "p-2"], [1, "row", 3, "click"], [1, "card-detail", "col-md-9"], [1, "cursor"], [1, "col-md-6", "cursor"], [1, "col-md-3", "d-flex", "justify-content-center", "align-items-center"], ["class", "fa fa-long-arrow-right fa-2x cursor", "aria-hidden", "true", "style", "color: #7F3486", 4, "ngIf"], ["class", "fa fa-times cursor fa-2x", "aria-hidden", "true", "style", "color: #7F3486", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-long-arrow-right", "fa-2x", "cursor", 2, "color", "#7F3486"], ["aria-hidden", "true", 1, "fa", "fa-times", "cursor", "fa-2x", 2, "color", "#7F3486"], ["type", "checkbox", 3, "change", "checked"], [1, "ml-2"], ["name", "Email", 1, "contenttext"], [1, "ml-3"], ["name", "Action", 1, "contenttext"], ["alt", "", "src", "assets/images/shift-class.svg", "title", "Transfer Class", "aria-hidden", "true", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title", "headerText"], [1, "modal-body"], ["class", "row mb-3", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "col-md-5", "capital"], [1, "col-md-7"], [1, "d-flex", "align-items-baseline"], ["placeholder", "mm/dd/yyyy", "name", "dp", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "ngModelChange", "click", "dateChanged", "ngModel", "options"], [1, "input-group-append"], [1, "fa", "fa-calendar-o"], ["id", "modal-basic-title1", 1, "modal-title", "headerText"], [1, "col-sm-12"], [1, "text-center", "mt-3"], ["id", "modal-basic-title2", 1, "modal-title", "headerText"], [1, "modal-footer", 2, "border-top", "none"], [1, "modal-title", "col-12", "text-center"], [3, "formGroup"], [1, "form-group", "row"], [1, "col-xl-4", "col-md-5", "align-self-center"], [1, "text-danger"], [1, "col-xl-8", "col-md-7"], ["readonly", "", "type", "text", "placeholder", "Enter the Class Name", 1, "form-control", 3, "value"], ["bindLabel", "fromClassLabel", "bindValue", "class_id", "placeholder", "Please Select", "typeToSearchText", "", "formControlName", "toClass", "required", "", 3, "change", "items"], ["class", "error", 4, "ngIf"], [1, "col-xl-8", "col-md-7", "form-group"], ["placeholder", "mm/dd/yyyy", "name", "dp2", "formControlName", "from_startdate", "angular-mydatepicker", "", "autocomplete", "off", "required", "", 1, "form-control", 3, "dateChanged", "options"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "error"]], template: function SubmitClassComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 7)(1, "div", 8);
            i0.ɵɵtemplate(2, SubmitClassComponent_h4_2_Template, 2, 0, "h4", 9)(3, SubmitClassComponent_h4_3_Template, 2, 0, "h4", 9);
            i0.ɵɵelementStart(4, "div", 10);
            i0.ɵɵtemplate(5, SubmitClassComponent_button_5_Template, 2, 0, "button", 11)(6, SubmitClassComponent_button_6_Template, 2, 1, "button", 12)(7, SubmitClassComponent_button_7_Template, 2, 0, "button", 13)(8, SubmitClassComponent_img_8_Template, 1, 0, "img", 14)(9, SubmitClassComponent_button_9_Template, 3, 0, "button", 15)(10, SubmitClassComponent_button_10_Template, 3, 0, "button", 16);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(11, "hr");
            i0.ɵɵelementStart(12, "section", 17)(13, "div", 18)(14, "div", 19)(15, "div", 20)(16, "div", 8)(17, "div", 21);
            i0.ɵɵtemplate(18, SubmitClassComponent_figure_18_Template, 2, 0, "figure", 22)(19, SubmitClassComponent_figure_19_Template, 2, 1, "figure", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "div", 23)(21, "h4", 24)(22, "span", 25);
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(24, "\u00A0 \u00A0");
            i0.ɵɵelementStart(25, "small");
            i0.ɵɵtext(26, "class code: ");
            i0.ɵɵelementStart(27, "span", 26);
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(29, "p")(30, "small", 25);
            i0.ɵɵtext(31, "Grade: ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "span", 27);
            i0.ɵɵtext(33);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "p")(35, "small");
            i0.ɵɵtext(36, "Subject: ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "span", 26);
            i0.ɵɵtext(38);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(39, "p")(40, "small");
            i0.ɵɵtext(41, "Start: ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(42, SubmitClassComponent_span_42_Template, 3, 4, "span", 28);
            i0.ɵɵtext(43, " \u00A0 \u00A0 ");
            i0.ɵɵelementStart(44, "small");
            i0.ɵɵtext(45, "End: ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(46, SubmitClassComponent_span_46_Template, 3, 4, "span", 28);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(47, "div", 29)(48, "div", 30);
            i0.ɵɵtemplate(49, SubmitClassComponent_div_49_Template, 13, 3, "div", 31);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "div", 32);
            i0.ɵɵtemplate(51, SubmitClassComponent_div_51_Template, 5, 1, "div", 31);
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵelementStart(52, "div", 8)(53, "h4", 33);
            i0.ɵɵtext(54, "Students List");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "div", 10);
            i0.ɵɵtemplate(56, SubmitClassComponent_button_56_Template, 2, 0, "button", 11)(57, SubmitClassComponent_button_57_Template, 2, 0, "button", 13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(58, "hr");
            i0.ɵɵelementStart(59, "div", 8);
            i0.ɵɵtemplate(60, SubmitClassComponent_div_60_Template, 7, 4, "div", 34);
            i0.ɵɵelementStart(61, "div")(62, "ngx-datatable", 35, 0);
            i0.ɵɵlistener("activate", function SubmitClassComponent_Template_ngx_datatable_activate_62_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onActivate($event)); })("select", function SubmitClassComponent_Template_ngx_datatable_select_62_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onSelect($event, "direct")); });
            i0.ɵɵelementStart(64, "ngx-datatable-column", 36);
            i0.ɵɵtemplate(65, SubmitClassComponent_ng_template_65_Template, 1, 1, "ng-template", 37)(66, SubmitClassComponent_ng_template_66_Template, 1, 1, "ng-template", 38);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(67, "ngx-datatable-column", 39);
            i0.ɵɵtemplate(68, SubmitClassComponent_ng_template_68_Template, 2, 2, "ng-template", 38);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(69, SubmitClassComponent_ngx_datatable_column_69_Template, 2, 0, "ngx-datatable-column", 40);
            i0.ɵɵelementStart(70, "ngx-datatable-column", 41);
            i0.ɵɵtemplate(71, SubmitClassComponent_ng_template_71_Template, 2, 1, "ng-template", 38);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(72, SubmitClassComponent_ngx_datatable_column_72_Template, 2, 0, "ngx-datatable-column", 42);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(73, SubmitClassComponent_ng_template_73_Template, 12, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(75, SubmitClassComponent_ng_template_75_Template, 14, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(77, SubmitClassComponent_ng_template_77_Template, 10, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(79, SubmitClassComponent_ng_template_79_Template, 39, 6, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.listView == "false");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.listView == "true");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.hideTableButton == true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.hideTableButton == false);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.curriculumButton == true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.listView == "true" && ctx.hidedeleteButton == true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.editButton == true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.editButton == false && ctx.hideButton == true);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", ctx.choosedData[0].profile_url == "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.choosedData[0].profile_url != "");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("", ctx.choosedData[0].class_name, " ");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.choosedData[0].class_code);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.choosedData[0].grade_name);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.choosedData[0].subject_name);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.choosedData[0].start_date != "0000-00-00");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.choosedData[0].end_date != "0000-00-00");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.listView == "true");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.listView == "true");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.hideTableButton == true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.hideTableButton == true);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.modifyList == true);
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("col-md-", ctx.modifyList == true ? 9 : 12, "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("rows", ctx.rows)("columnMode", "force")("loadingIndicator", ctx.loadingIndicator)("headerHeight", 40)("footerHeight", 40)("limit", 10)("rowHeight", "auto")("selected", ctx.selected)("selectionType", "checkbox");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("width", 30)("sortable", false)("canAutoResize", false)("draggable", true)("resizeable", false);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.allowClass);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.allowTransfer);
        } }, dependencies: [i9.NgForOf, i9.NgIf, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.FormGroupDirective, i1.FormControlName, i7.RouterLink, i15.NgSelectComponent, i1.NgModel, i16.AngularMyDatePickerDirective, i17.DatatableComponent, i17.DataTableColumnDirective, i17.DataTableColumnHeaderDirective, i17.DataTableColumnCellDirective, i18.CustomDateFormatPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubmitClassComponent, [{
        type: Component,
        args: [{ selector: 'app-submit-class', template: "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <h4 class=\"col-12 col-sm-4\" *ngIf=\"this.listView == 'false'\">Assign students</h4>\n        <h4 class=\"col-12 col-sm-4\" *ngIf=\"this.listView == 'true'\">Class Details</h4>\n        <div class=\"col-12 col-sm-8\">\n            <button class=\"btn btn-primary pull-right ml-3\" *ngIf=\"hideTableButton == true\" (click)=\"submitClass(1)\">Submit</button>\n            <button class=\"btn btn-primary pull-right ml-3\" *ngIf=\"hideTableButton == false\" [routerLink]=\"'/class/list-class'\">Back</button>\n            <button class=\"btn btn-outline-primary pull-right\" *ngIf=\"curriculumButton == true\" (click)=\"viewAssign(2)\">Curriculum</button>\n            <img class=\"pull-right deleteimg1 mr-3\" *ngIf=\"this.listView == 'true' && hidedeleteButton == true\" (click)=\"deleteAction()\" title=\"Delete Class\" src=\"assets/images/pdf-icons/Icon material-delete-1.png\" alt=\"\">\n            <button type=\"button\" class=\"btn btn-outline-primary mr-3 pull-right\" *ngIf=\"editButton == true\" (click)=\"backAction()\"><i class=\"fa fa-long-arrow-left fa-1x\" aria-hidden=\"true\"></i> Back</button>\n            <button type=\"button\" class=\"btn btn-outline-primary pull-right mr-3\" *ngIf=\"editButton == false && hideButton == true\" (click)=\"editAction()\"><i class=\"fa fa-long-arrow-left fa-1x\" aria-hidden=\"true\"></i> Back</button>\n        </div>\n    </div>\n    <hr>\n    <section class=\"row list-card mt-2\">\n        <div class=\"col-12\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-12 col-md-2\">\n                            <figure *ngIf=\"this.choosedData[0].profile_url == ''\">\n                                <img src=\"assets/images/ristaschool/Mask Group 35.png\" class=\"w-100\" alt=\"\">\n                            </figure>\n                            <figure *ngIf=\"this.choosedData[0].profile_url != ''\">\n                                <img [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + choosedData[0].profile_url)\" class=\"w-100\" alt=\"\">\n                            </figure>\n                        </div>\n                        <div class=\"col-12 col-md-6\">\n                            <h4 class=\"t-period\"><span class=\"font-weight-bold\">{{choosedData[0].class_name}} </span>&nbsp; &nbsp;<small>class code: <span class=\"contenttext font-weight-bold\">{{choosedData[0].class_code}}</span></small></h4>\n                            <p><small class=\"font-weight-bold\">Grade: </small> <span class=\"t-name capital font-weight-bold\">{{choosedData[0].grade_name}}</span></p>\n                            <p><small>Subject: </small> <span class=\"contenttext font-weight-bold\">{{choosedData[0].subject_name}}</span></p>\n                            <p><small>Start: </small> <span *ngIf=\"choosedData[0].start_date !='0000-00-00'\" class=\"contenttext font-weight-bold\">{{choosedData[0].start_date| customDateFormat}} {{choosedData[0].start_time}}</span> &nbsp; &nbsp;\n                                <small>End: </small> <span *ngIf=\"choosedData[0].end_date !='0000-00-00'\" class=\"contenttext font-weight-bold\">{{choosedData[0].end_date| customDateFormat}} {{choosedData[0].end_time}}</span>\n                            </p>\n                        </div>\n                        <div class=\"col-12 col-md-4\">\n                            <div class=\"row mb-3\">\n                                <div class=\"col-md-12\"  *ngIf=\"this.listView == 'true'\">\n                                    <small class=\"ml-3 pull-right\">Assessment: <span class=\"t-name\">{{choosedData[0].no_of_assessments}}</span></small>\n                                    <small class=\"ml-3 pull-right\">Assignment: <span class=\"t-name\">{{choosedData[0].no_of_assignments}} </span></small>\n                                    <small class=\"pull-right\">Resources: <span class=\"t-name\">{{choosedData[0].no_of_resources}} </span></small>\n                                </div>\n                            </div>\n                            <div class=\"row d-flex mb-3\">\n                                <div class=\"col-md-12\" *ngIf=\"this.listView == 'true'\">\n                                    <small class=\"pull-right\">No. of Students: <span class=\"t-name\">{{choosedData[0].no_of_students}}</span></small>\n                                </div>\n                            </div>\n                            <!--<div class=\"row\" *ngIf=\"editButton == false && this.hideButton == true\">-->\n                                <!--<div class=\"col-md-12\">-->\n                            <!--&lt;!&ndash;<button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"editAction()\">Back</button>&ndash;&gt;-->\n                                    <!--<button type=\"button\" class=\"btn btn-outline-primary pull-right\" (click)=\"editAction()\"><i class=\"fa fa-long-arrow-left fa-1x\" aria-hidden=\"true\"></i> Back</button>-->\n                                <!--</div>-->\n                            <!--</div>-->\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <div class=\"row\">\n        <h4 class=\"col-12 col-sm-4 contenttext\">Students List</h4>\n        <div class=\"col-12 col-sm-8\">\n            <button class=\"btn btn-primary pull-right ml-3\" *ngIf=\"hideTableButton == true\" (click)=\"modifylist()\">Modify List</button>\n            <!--<button class=\"btn btn-primary pull-right ml-3\" *ngIf=\"hideTableButton == true\" (click)=\"showModal(selected)\">Edit Validity</button>-->\n            <button class=\"btn btn-outline-primary pull-right\" *ngIf=\"hideTableButton == true\" (click)=\"removeAction(selected)\">Remove</button>\n        </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div *ngIf=\"modifyList == true\" class=\"col-md-3 mt-1\">\n            <div  class=\"col-md-12 form-group\">\n                <ng-select [items]=\"gradeData\"\n                           bindLabel=\"grade_name\"\n                           bindValue=\"grade_id\"\n                           placeholder=\"Select Grade\"\n                           typeToSearchText=\"\"\n                           multiple=\"true\"\n                           [(ngModel)]=\"gradName\"\n                           (change)=\"getGradeValue($event)\"\n                >\n                </ng-select>\n            </div>\n            <div  class=\"col-md-12 form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search Student Name/Email-id/Grade\" (input)=\"updateFilter($event)\" [(ngModel)]=\"searchedKeyword\">\n            </div>\n            <div class=\"col-md-12\" style=\"max-height: 400px; overflow: auto\">\n                <div class=\"card my-2\" *ngFor=\"let list of studentData; let i = index\">\n<!--                <div class=\"card my-2\" *ngFor=\"let list of studentData |filter:searchedKeyword; let i = index\">-->\n                    <div class=\"card-body card-list p-2\">\n                        <div class=\"row\" (click)=\"addGradeOutside(list, i, list.student_id,list.status)\">\n                            <div class=\"card-detail col-md-9\">\n                                <h6 class=\"cursor\">{{list.name}}</h6>\n                                <small class=\"col-md-6 cursor\">{{list.grade_name}}</small><br><small class=\"col-md-6 cursor\"> Email: {{list.student_id}}</small>\n                            </div>\n                            <div class=\"col-md-3 d-flex justify-content-center align-items-center\">\n                                <i class=\"fa fa-long-arrow-right fa-2x cursor\" *ngIf=\"list.status == '0'\" aria-hidden=\"true\" style=\"color: #7F3486\"></i>\n                                <i class=\"fa fa-times cursor fa-2x\" *ngIf=\"list.status == '1'\" aria-hidden=\"true\" style=\"color: #7F3486\"></i>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-{{modifyList == true ? 9 : 12}}\">\n            <ngx-datatable\n                #table\n                    class=\"bootstrap\"\n                    [rows]=\"rows\"\n                    [columnMode]=\"'force'\"\n                    [loadingIndicator]=\"loadingIndicator\"\n                    [headerHeight]=\"40\"\n                    [footerHeight]=\"40\"\n                    [limit]=\"10\"\n                    [rowHeight]=\"'auto'\"\n                    [selected]=\"selected\"\n                    [selectionType]=\"'checkbox'\"\n                    (activate)=\"onActivate($event)\"\n                (select)=\"onSelect($event, 'direct')\"\n                    >\n                <ngx-datatable-column\n                        [width]=\"30\"\n                        [sortable]=\"false\"\n                        [canAutoResize]=\"false\"\n                        [draggable]=\"true\"\n                        [resizeable]=\"false\"\n                        >\n                <ng-template\n                        ngx-datatable-header-template\n                        let-value=\"value\"\n                        let-allRowsSelected=\"allRowsSelected\"\n                        let-selectFn=\"selectFn\"\n                >\n                    <input type=\"checkbox\" [checked]=\"allRowsSelected\" (change)=\"selectFn(!allRowsSelected)\" />\n                </ng-template>\n                <ng-template\n                        ngx-datatable-cell-template\n                        let-value=\"value\"\n                        let-isSelected=\"isSelected\"\n                        let-onCheckboxChangeFn=\"onCheckboxChangeFn\"\n                >\n                    <input type=\"checkbox\" [checked]=\"isSelected\" (change)=\"onCheckboxChangeFn($event)\" />\n                </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column class=\"contenttext\" name=\"Name\">\n                <ng-template ngx-datatable-cell-template let-row=\"row\" let-rowIndex=\"rowIndex\" let-value=\"value\">\n                    <span class=\"ml-2\"> {{row.first_name}} {{row.last_name}}</span>\n                </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column class=\"contenttext\" name=\"Email\" *ngIf=\"allowClass\">\n                <ng-template ngx-datatable-cell-template let-row=\"row\" let-rowIndex=\"rowIndex\"  let-value=\"value\">\n                    <span class=\"ml-3\"> {{row.student_id}}</span>\n                </ng-template>\n            </ngx-datatable-column>\n                <ngx-datatable-column class=\"contenttext \" name=\"Grade\">\n                    <ng-template ngx-datatable-cell-template let-row=\"row\"  let-rowIndex=\"rowIndex\"  let-value=\"value\">\n                      <span class=\"ml-2\"> {{row.grade_name}}</span>\n                    </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column class=\"contenttext\"\n                                      *ngIf=\"allowTransfer\" name=\"Action\">\n                    <ng-template ngx-datatable-cell-template\n                                 let-row=\"row\"\n                                 let-rowIndex=\"rowIndex\"\n                                 let-value=\"value\">\n                            <img alt=\"\" src=\"assets/images/shift-class.svg\" title=\"Transfer Class\"\n                               aria-hidden=\"true\" (click)=\"classChange(row)\">\n                    </ng-template>\n                </ngx-datatable-column>\n            </ngx-datatable>\n\n\n        </div>\n\n    </div>\n</div>\n<ng-template #validity let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title headerText\" id=\"modal-basic-title\">Edit Validity</h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n<!--        {{validity | json}}-->\n        <div class=\"card\"  >\n            <div class=\"card-body\">\n                <div class=\"row mb-3\" *ngFor=\"let list of valid\">\n                    <div class=\"col-md-5 capital\">\n<!--                        <input readonly class=\"form-control \" formControlName=\"schoolId\" id=\"validationCustom41\"-->\n<!--                               type=\"text\" placeholder=\"School Name\" required=\"\">-->\n                        {{list.first_name}} {{list.last_name}}\n                    </div>\n                    <div class=\"col-md-7\">\n                        <div class=\"d-flex align-items-baseline\">\n                                <input class=\"form-control\" placeholder=\"mm/dd/yyyy\" [(ngModel)]=\"list.validity1\"\n                                       name=\"dp\" angular-mydatepicker #dp=\"angular-mydatepicker\" (click)=\"dp.toggleCalendar()\"\n                                       [options]=\"myDpOptions\" (dateChanged)=\"onDateChanged($event)\" autocomplete=\"off\">\n                            <div class=\"input-group-append\">\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp.toggleCalendar()\">\n                                    <i class=\"fa fa-calendar-o\"></i></button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- Container-fluid Ends-->\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"cancel()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"update()\">Update</button>\n    </div>\n</ng-template>\n<ng-template #class let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title headerText\" id=\"modal-basic-title1\">Delete Class</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <h5 class=\"text-center mt-3\">Are you sure you want to delete {{classname}} Class</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"close()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"updateDelete()\">OK </button>\n    </div>\n</ng-template>\n<ng-template #editvalidation let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title headerText\" id=\"modal-basic-title2\"><b>Edit Validity</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <h5>Please select atleast one student for changing the validity</h5>\n    </div>\n    <div class=\"modal-footer\" style=\"border-top: none\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"close()\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #studentChange let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title col-12 text-center\">Transfer Class</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n            <form [formGroup]=\"studentClassChange\">\n                <div class=\"form-group row\">\n                    <label class=\"col-xl-4 col-md-5 align-self-center\"><span class=\"text-danger\">*</span>\n                        From Class</label>\n                    <div class=\"col-xl-8 col-md-7\">\n                        <input class=\"form-control\" readonly type=\"text\" placeholder=\"Enter the Class Name\" value=\"{{choosedData[0].class_name}}\">\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label class=\"col-xl-4 col-md-5 align-self-center\"><span class=\"text-danger\">*</span>\n                        To Class</label>\n                    <div class=\"col-xl-8 col-md-7\">\n                        <ng-select [items]=\"allClassList\"\n                                   bindLabel=\"fromClassLabel\"\n                                   bindValue=\"class_id\"\n                                   placeholder=\"Please Select\"\n                                   typeToSearchText=\"\"\n                                   formControlName=\"toClass\"\n                                   (change)=\"selectedClass($event)\"\n                                   required=\"\"\n                        >\n                        </ng-select>\n                        <em class=\"error\" *ngIf=\"!studentClassChange.get('toClass').valid && (studentClassChange.get('toClass').dirty || studentClassChange.get('toClass').touched)\">Select the To Class</em>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label class=\"col-xl-4 col-md-5 align-self-center\"><span class=\"text-danger\">*</span>\n                        Effective Date</label>\n                    <div class=\"col-xl-8 col-md-7 form-group\">\n                        <div class=\"d-flex align-items-baseline\">\n                            <input class=\"form-control\" placeholder=\"mm/dd/yyyy\"\n                                   name=\"dp2\"  formControlName=\"from_startdate\" angular-mydatepicker #dp2=\"angular-mydatepicker\"\n                                   [options]=\"myDpOptions1\" (dateChanged)=\"onDateChanged($event)\" autocomplete=\"off\" required=\"\">\n                            <div class=\"input-group-append\">\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp2.toggleCalendar()\">\n                                    <i class=\"fa fa-calendar-o\"></i></button>\n                            </div>\n                        </div>\n                        <em *ngIf=\"!studentClassChange.get('from_startdate').valid && (studentClassChange.get('from_startdate').dirty || studentClassChange.get('from_startdate').touched)\" class=\"error\">Please Enter Effective Date</em>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-outline-primary\" (click)=\"close()\">Close</button>\n        <button class=\"btn btn-primary\" (click)=\"submitChangeClass()\">Save</button>\n    </div>\n</ng-template>\n" }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.NgbModalConfig }, { type: i3.ConfigurationService }, { type: i2.NgbModal }, { type: i4.AuthService }, { type: i5.CommonDataService }, { type: i6.ClassService }, { type: i7.Router }, { type: i8.DomSanitizer }, { type: i7.ActivatedRoute }, { type: i9.TitleCasePipe }, { type: i10.ToastrService }, { type: i11.ValidationService }, { type: i12.CommonService }, { type: i13.NewsubjectService }, { type: i14.StudentService }, { type: i9.DatePipe }], { table: [{
            type: ViewChild,
            args: [DatatableComponent, { static: true }]
        }], validityContent: [{
            type: ViewChild,
            args: ['validity']
        }], deleteClass: [{
            type: ViewChild,
            args: ['class']
        }], editValidityCheck: [{
            type: ViewChild,
            args: ['editvalidation']
        }], changeStudent: [{
            type: ViewChild,
            args: ['studentChange']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SubmitClassComponent, { className: "SubmitClassComponent" }); })();
//# sourceMappingURL=submit-class.component.js.map