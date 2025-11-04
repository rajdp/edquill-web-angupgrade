import { Component, ViewChild, } from '@angular/core';
import { Validators } from '@angular/forms';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { isSameDay, isSameMonth, } from 'date-fns';
import { Subject } from 'rxjs';
import { CalendarView, } from 'angular-calendar';
import { dateOptions } from '../../../shared/data/config';
import { timeZone } from '../../../shared/data/config';
import { TreeviewContentfolderComponent } from '../../auth/treeview-contentfolder/treeview-contentfolder.component';
import { urls } from '../../../shared/utils/urls';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
import * as i3 from "../../../shared/service/class.service";
import * as i4 from "../../../shared/service/common-data.service";
import * as i5 from "ngx-toastr";
import * as i6 from "../../../shared/service/common.service";
import * as i7 from "../../../shared/service/auth.service";
import * as i8 from "../../../shared/service/School.service";
import * as i9 from "@angular/platform-browser";
import * as i10 from "../../../shared/service/newsubject.service";
import * as i11 from "../../../shared/service/validation.service";
import * as i12 from "../../../shared/service/configuration.service";
import * as i13 from "@ng-bootstrap/ng-bootstrap";
import * as i14 from "@angular/common";
import * as i15 from "@ng-select/ng-select";
import * as i16 from "@nodro7/angular-mydatepicker";
import * as i17 from "ngx-chips";
import * as i18 from "@swimlane/ngx-datatable";
import * as i19 from "angular-calendar";
import * as i20 from "../../auth/tiny-mice/tiny-mice.component";
import * as i21 from "../../auth/treeview-contentfolder/treeview-contentfolder.component";
import * as i22 from "../../auth/other-link/other-link.component";
import * as i23 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["bulkmodal"];
const _c1 = ["classCheck"];
const _c2 = ["link"];
const _c3 = ["addSlot"];
const _c4 = ["writeNoteOpen"];
const _c5 = ["myInput"];
const _c6 = ["zoomLink"];
const _c7 = ["gradeSelection"];
const _c8 = ["batchSelection"];
const _c9 = ["modalContent"];
const _c10 = ["editTimeDialog"];
const _c11 = ["studentAtendance"];
const _c12 = a0 => ({ "pointer-events": a0 });
const _c13 = () => ({ standalone: true });
function AddClassComponent_em_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Class is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_28_em_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Batch is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 67);
    i0.ɵɵelement(1, "app-treeview-contentfolder", 68);
    i0.ɵɵtemplate(2, AddClassComponent_div_28_em_2_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("type", ctx_r1.type)("calledForm", "class")("treeviewHeight", 300)("selectedbatch", ctx_r1.batchId)("class_id", ctx_r1.type != "add" ? ctx_r1.class_id : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.classform.get("batch").valid && (ctx_r1.classform.get("batch").dirty || ctx_r1.classform.get("batch").touched));
} }
function AddClassComponent_em_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Grade is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_em_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Subject is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_39_em_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "status is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69)(1, "select", 70)(2, "option", 71);
    i0.ɵɵtext(3, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "option", 72);
    i0.ɵɵtext(5, "Inactive");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, AddClassComponent_div_39_em_6_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", !ctx_r1.classform.get("status").valid && (ctx_r1.classform.get("status").dirty || ctx_r1.classform.get("status").touched));
} }
function AddClassComponent_div_40_em_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "status is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69)(1, "select", 73)(2, "option", 71);
    i0.ɵɵtext(3, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "option", 72);
    i0.ɵɵtext(5, "Inactive");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, AddClassComponent_div_40_em_6_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", !ctx_r1.classform.get("status").valid && (ctx_r1.classform.get("status").dirty || ctx_r1.classform.get("status").touched));
} }
function AddClassComponent_em_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Announcement Type is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_57_em_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Please Enter valid Link");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_57_em_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Zoom Meeting Link is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_57_em_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Meeting Id is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 74)(1, "div", 75)(2, "input", 76);
    i0.ɵɵlistener("ngModelChange", function AddClassComponent_div_57_Template_input_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.changeZoomLink()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, AddClassComponent_div_57_em_3_Template, 2, 0, "em", 32)(4, AddClassComponent_div_57_em_4_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 75)(6, "input", 77);
    i0.ɵɵlistener("ngModelChange", function AddClassComponent_div_57_Template_input_ngModelChange_6_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.changeZoomLink()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, AddClassComponent_div_57_em_7_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("readOnly", !ctx_r1.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.classform.get("meetingLink").hasError("pattern"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.classform.get("meetingLink").valid && (ctx_r1.classform.get("meetingLink").dirty || ctx_r1.classform.get("meetingLink").touched));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("readOnly", !ctx_r1.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.classform.get("meetingId").valid && (ctx_r1.classform.get("meetingId").dirty || ctx_r1.classform.get("meetingId").touched));
} }
function AddClassComponent_div_58_em_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Passcode is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_58_em_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Telephone Number is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 75)(2, "input", 78);
    i0.ɵɵlistener("ngModelChange", function AddClassComponent_div_58_Template_input_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.changeZoomLink()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, AddClassComponent_div_58_em_3_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 75);
    i0.ɵɵelement(5, "input", 79);
    i0.ɵɵtemplate(6, AddClassComponent_div_58_em_6_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("readOnly", !ctx_r1.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.classform.get("passcode").valid && (ctx_r1.classform.get("passcode").dirty || ctx_r1.classform.get("passcode").touched));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("readOnly", !ctx_r1.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.classform.get("telephone").valid && (ctx_r1.classform.get("telephone").dirty || ctx_r1.classform.get("telephone").touched));
} }
function AddClassComponent_div_59_ng_option_10_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 113);
    i0.ɵɵtext(1, "Approved");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_59_ng_option_10_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 114);
    i0.ɵɵtext(1, "Ready for review");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_59_ng_option_10_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 115);
    i0.ɵɵtext(1, "Draft");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_59_ng_option_10_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 116);
    i0.ɵɵtext(1, "Rework");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_59_ng_option_10_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 117);
    i0.ɵɵtext(1, "Cancelled");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_59_ng_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ng-option", 106)(1, "div", 107);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, AddClassComponent_div_59_ng_option_10_span_3_Template, 2, 0, "span", 108)(4, AddClassComponent_div_59_ng_option_10_span_4_Template, 2, 0, "span", 109)(5, AddClassComponent_div_59_ng_option_10_span_5_Template, 2, 0, "span", 110)(6, AddClassComponent_div_59_ng_option_10_span_6_Template, 2, 0, "span", 111)(7, AddClassComponent_div_59_ng_option_10_span_7_Template, 2, 0, "span", 112);
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
function AddClassComponent_div_59_em_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, " Course Name is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_59_em_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, " Registration State Date is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_59_em_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, " Registration End Date is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_59_em_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, " Amount is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_59_em_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, " Discount Amount is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_59_em_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, " Actual Amount is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_59_em_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, " Slot Available is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_59_em_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, " Payment Type is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_59_div_62_em_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, " Recurring Type is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_59_div_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 118)(1, "select", 119)(2, "option", 102);
    i0.ɵɵtext(3, "Select Recurring Type *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "option", 120);
    i0.ɵɵtext(5, "Weekly");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "option", 121);
    i0.ɵɵtext(7, "Monthly");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "option", 122);
    i0.ɵɵtext(9, "Quarterly");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "option", 123);
    i0.ɵɵtext(11, "Half Yearly");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "option", 124);
    i0.ɵɵtext(13, "Annual");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(14, AddClassComponent_div_59_div_62_em_14_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("ngIf", !ctx_r1.classform.get("payment_recurring").valid && (ctx_r1.classform.get("payment_recurring").dirty || ctx_r1.classform.get("payment_recurring").touched));
} }
function AddClassComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 80)(1, "div", 81)(2, "div", 82)(3, "input", 83);
    i0.ɵɵlistener("change", function AddClassComponent_div_59_Template_input_change_3_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updateCourseField()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "label", 84);
    i0.ɵɵtext(5, "Do you want to tag a course to this class?");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 85)(7, "div", 16)(8, "div", 86)(9, "ng-select", 87);
    i0.ɵɵtemplate(10, AddClassComponent_div_59_ng_option_10_Template, 8, 8, "ng-option", 88);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, AddClassComponent_div_59_em_11_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 86)(13, "div", 89)(14, "input", 90, 10);
    i0.ɵɵlistener("keypress", function AddClassComponent_div_59_Template_input_keypress_14_listener($event) { i0.ɵɵrestoreView(_r5); return i0.ɵɵresetView($event.preventDefault()); })("click", function AddClassComponent_div_59_Template_input_click_14_listener() { i0.ɵɵrestoreView(_r5); const dp2_r7 = i0.ɵɵreference(15); return i0.ɵɵresetView(dp2_r7.toggleCalendar()); })("dateChanged", function AddClassComponent_div_59_Template_input_dateChanged_14_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onDateChanged2($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 91)(17, "button", 92);
    i0.ɵɵlistener("click", function AddClassComponent_div_59_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r5); const dp2_r7 = i0.ɵɵreference(15); return i0.ɵɵresetView(dp2_r7.toggleCalendar()); });
    i0.ɵɵelement(18, "i", 93);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(19, AddClassComponent_div_59_em_19_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 86)(21, "div", 89)(22, "input", 94, 11);
    i0.ɵɵlistener("keypress", function AddClassComponent_div_59_Template_input_keypress_22_listener($event) { i0.ɵɵrestoreView(_r5); return i0.ɵɵresetView($event.preventDefault()); })("click", function AddClassComponent_div_59_Template_input_click_22_listener() { i0.ɵɵrestoreView(_r5); const dp3_r8 = i0.ɵɵreference(23); return i0.ɵɵresetView(dp3_r8.toggleCalendar()); })("dateChanged", function AddClassComponent_div_59_Template_input_dateChanged_22_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onDateChanged3($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 91)(25, "button", 92);
    i0.ɵɵlistener("click", function AddClassComponent_div_59_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r5); const dp3_r8 = i0.ɵɵreference(23); return i0.ɵɵresetView(dp3_r8.toggleCalendar()); });
    i0.ɵɵelement(26, "i", 93);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(27, AddClassComponent_div_59_em_27_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 86)(29, "div", 89)(30, "input", 95);
    i0.ɵɵlistener("input", function AddClassComponent_div_59_Template_input_input_30_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.calculateAmount()); })("keypress", function AddClassComponent_div_59_Template_input_keypress_30_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.numberValidation($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "div", 91)(32, "button", 96);
    i0.ɵɵtext(33, "$");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(34, AddClassComponent_div_59_em_34_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "div", 86)(36, "div", 89)(37, "input", 97);
    i0.ɵɵlistener("input", function AddClassComponent_div_59_Template_input_input_37_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.calculateAmount()); })("keypress", function AddClassComponent_div_59_Template_input_keypress_37_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.numberValidation($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "div", 91)(39, "button", 96);
    i0.ɵɵtext(40, "$");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(41, AddClassComponent_div_59_em_41_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "div", 86)(43, "div", 89);
    i0.ɵɵelement(44, "input", 98);
    i0.ɵɵelementStart(45, "div", 91)(46, "button", 96);
    i0.ɵɵtext(47, "$");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(48, AddClassComponent_div_59_em_48_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "div", 86)(50, "input", 99);
    i0.ɵɵlistener("keypress", function AddClassComponent_div_59_Template_input_keypress_50_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.numberValidation($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(51, AddClassComponent_div_59_em_51_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "div", 86)(53, "div", 100)(54, "select", 101);
    i0.ɵɵlistener("change", function AddClassComponent_div_59_Template_select_change_54_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.checkSelectedValue()); });
    i0.ɵɵelementStart(55, "option", 102);
    i0.ɵɵtext(56, "Select Payment Type *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "option", 103);
    i0.ɵɵtext(58, "Fixed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "option", 104);
    i0.ɵɵtext(60, "Recurring");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(61, AddClassComponent_div_59_em_61_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(62, AddClassComponent_div_59_div_62_Template, 15, 1, "div", 105);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngbCollapse", !ctx_r1.classform.controls.add_course.value);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.courseListData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.classform.get("course_id").valid && (ctx_r1.classform.get("course_id").dirty || ctx_r1.classform.get("course_id").touched));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("options", ctx_r1.myDpOptions2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", !ctx_r1.classform.get("registration_start_date").valid && (ctx_r1.classform.get("registration_start_date").dirty || ctx_r1.classform.get("registration_start_date").touched));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("options", ctx_r1.myDpOptions3);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", !ctx_r1.classform.get("registration_end_date").valid && (ctx_r1.classform.get("registration_end_date").dirty || ctx_r1.classform.get("registration_end_date").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", !ctx_r1.classform.get("amount").valid && (ctx_r1.classform.get("amount").dirty || ctx_r1.classform.get("amount").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", !ctx_r1.classform.get("discount").valid && (ctx_r1.classform.get("discount").dirty || ctx_r1.classform.get("discount").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", !ctx_r1.classform.get("actual_amount").valid && (ctx_r1.classform.get("actual_amount").dirty || ctx_r1.classform.get("actual_amount").touched));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.classform.get("slot_available").valid && (ctx_r1.classform.get("slot_available").dirty || ctx_r1.classform.get("slot_available").touched));
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngIf", !ctx_r1.classform.get("payment_type").valid && (ctx_r1.classform.get("payment_type").dirty || ctx_r1.classform.get("payment_type").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.classform.controls.payment_type.value == "R");
} }
function AddClassComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 125)(1, "button", 126);
    i0.ɵɵlistener("click", function AddClassComponent_div_71_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.scheduleClass("daily", "1")); });
    i0.ɵɵtext(2, " Daily View");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 126);
    i0.ɵɵlistener("click", function AddClassComponent_div_71_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.scheduleClass("calendar", "1")); });
    i0.ɵɵtext(4, " Calendar View");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 125)(1, "button", 126);
    i0.ɵɵlistener("click", function AddClassComponent_div_72_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.scheduleClass("daily", "2")); });
    i0.ɵɵtext(2, " Daily View");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 126);
    i0.ɵɵlistener("click", function AddClassComponent_div_72_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.scheduleClass("calendar", "2")); });
    i0.ɵɵtext(4, " Calendar View");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 129)(1, "div", 138)(2, "input", 139, 12);
    i0.ɵɵlistener("dateChanged", function AddClassComponent_div_73_div_9_Template_input_dateChanged_2_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onDateChanged($event)); })("click", function AddClassComponent_div_73_div_9_Template_input_click_2_listener() { i0.ɵɵrestoreView(_r11); const dp_r12 = i0.ɵɵreference(3); return i0.ɵɵresetView(dp_r12.toggleCalendar()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 91)(5, "button", 92);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_9_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r11); const dp_r12 = i0.ɵɵreference(3); return i0.ɵɵresetView(dp_r12.toggleCalendar()); });
    i0.ɵɵelement(6, "i", 93);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("options", ctx_r1.myDpOptions);
} }
function AddClassComponent_div_73_div_10_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 91)(1, "button", 92);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_10_div_4_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r14); i0.ɵɵnextContext(); const dp_r15 = i0.ɵɵreference(3); return i0.ɵɵresetView(dp_r15.toggleCalendar()); });
    i0.ɵɵelement(2, "i", 93);
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 129)(1, "div", 138)(2, "input", 140, 12);
    i0.ɵɵlistener("dateChanged", function AddClassComponent_div_73_div_10_Template_input_dateChanged_2_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onDateChanged($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, AddClassComponent_div_73_div_10_div_4_Template, 3, 0, "div", 141);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("options", ctx_r1.editMyDpOptions)("readOnly", ctx_r1.readonlyAllData);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.readonlyAllData);
} }
function AddClassComponent_div_73_em_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 142);
    i0.ɵɵtext(1, " StartDate is invalid ");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_73_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 129)(1, "div", 138)(2, "input", 143, 13);
    i0.ɵɵlistener("dateChanged", function AddClassComponent_div_73_div_16_Template_input_dateChanged_2_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onDateChanged1($event)); })("click", function AddClassComponent_div_73_div_16_Template_input_click_2_listener() { i0.ɵɵrestoreView(_r16); const dp1_r17 = i0.ɵɵreference(3); return i0.ɵɵresetView(dp1_r17.toggleCalendar()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 91)(5, "button", 92);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_16_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r16); const dp1_r17 = i0.ɵɵreference(3); return i0.ɵɵresetView(dp1_r17.toggleCalendar()); });
    i0.ɵɵelement(6, "i", 93);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("options", ctx_r1.myDpOptions1);
} }
function AddClassComponent_div_73_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 129)(1, "input", 144, 13);
    i0.ɵɵlistener("dateChanged", function AddClassComponent_div_73_div_17_Template_input_dateChanged_1_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onDateChanged1($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("readOnly", ctx_r1.readonlyAllData)("options", ctx_r1.myDpOptions1);
} }
function AddClassComponent_div_73_em_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 142);
    i0.ɵɵtext(1, " EndDate is invalid ");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_73_div_25_span_1_i_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 154);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_25_span_1_i_4_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r23); const ctx_r23 = i0.ɵɵnextContext(); const data_r21 = ctx_r23.$implicit; const i_r22 = ctx_r23.index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.deleteTime("monday", i_r22, data_r21)); });
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_73_div_25_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 148)(1, "a", 149);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_25_span_1_Template_a_click_1_listener() { const ctx_r19 = i0.ɵɵrestoreView(_r19); const data_r21 = ctx_r19.$implicit; const i_r22 = ctx_r19.index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.editSlot(data_r21, i_r22)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 150);
    i0.ɵɵtemplate(4, AddClassComponent_div_73_div_25_span_1_i_4_Template, 1, 0, "i", 151);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 152);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_25_span_1_Template_a_click_5_listener() { const data_r21 = i0.ɵɵrestoreView(_r19).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showAttendance(data_r21, "1")); });
    i0.ɵɵelement(6, "i", 153);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r21 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", data_r21.teacher_name, " : ", data_r21.slotstarttime, " - ", data_r21.slotendtime, " \u00A0");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
} }
function AddClassComponent_div_73_div_25_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 155)(1, "button", 156);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_25_span_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showSlot(1)); });
    i0.ɵɵelement(2, "i", 157);
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 145);
    i0.ɵɵtemplate(1, AddClassComponent_div_73_div_25_span_1_Template, 7, 4, "span", 146)(2, AddClassComponent_div_73_div_25_span_2_Template, 3, 0, "span", 147);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.mondayTimings);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
} }
function AddClassComponent_div_73_div_26_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 161)(1, "a");
    i0.ɵɵtext(2, "\u00A0 Start Time - End Time \u00A0");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_26_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 162);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_26_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showSlot(1)); });
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2, "\u00A0 Start Time - End Time \u00A0");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_26_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 155)(1, "button", 156);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_26_span_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showSlot(1)); });
    i0.ɵɵelement(2, "i", 157);
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 158);
    i0.ɵɵtemplate(1, AddClassComponent_div_73_div_26_span_1_Template, 3, 0, "span", 159)(2, AddClassComponent_div_73_div_26_span_2_Template, 3, 0, "span", 160)(3, AddClassComponent_div_73_div_26_span_3_Template, 3, 0, "span", 147);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
} }
function AddClassComponent_div_73_div_33_span_1_i_4_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 154);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_33_span_1_i_4_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r32); const ctx_r32 = i0.ɵɵnextContext(); const data_r30 = ctx_r32.$implicit; const i_r31 = ctx_r32.index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.deleteTime("tuesday", i_r31, data_r30)); });
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_73_div_33_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 148)(1, "a", 149);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_33_span_1_Template_a_click_1_listener() { const ctx_r28 = i0.ɵɵrestoreView(_r28); const data_r30 = ctx_r28.$implicit; const i_r31 = ctx_r28.index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.editSlot(data_r30, i_r31)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 150);
    i0.ɵɵtemplate(4, AddClassComponent_div_73_div_33_span_1_i_4_Template, 1, 0, "i", 151);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 152);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_33_span_1_Template_a_click_5_listener() { const data_r30 = i0.ɵɵrestoreView(_r28).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showAttendance(data_r30, "2")); });
    i0.ɵɵelement(6, "i", 153);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r30 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", data_r30.teacher_name, " : ", data_r30.slotstarttime, " - ", data_r30.slotendtime, " \u00A0");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
} }
function AddClassComponent_div_73_div_33_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 155)(1, "button", 156);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_33_span_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r34); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showSlot(2)); });
    i0.ɵɵelement(2, "i", 157);
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 145);
    i0.ɵɵtemplate(1, AddClassComponent_div_73_div_33_span_1_Template, 7, 4, "span", 146)(2, AddClassComponent_div_73_div_33_span_2_Template, 3, 0, "span", 147);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.tuesdayTimings);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
} }
function AddClassComponent_div_73_div_34_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 161)(1, "a");
    i0.ɵɵtext(2, "\u00A0 Start Time - End Time \u00A0");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_34_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 162);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_34_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showSlot(2)); });
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2, "\u00A0 Start Time - End Time \u00A0");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_34_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 155)(1, "button", 156);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_34_span_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r36); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showSlot(2)); });
    i0.ɵɵelement(2, "i", 157);
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 158);
    i0.ɵɵtemplate(1, AddClassComponent_div_73_div_34_span_1_Template, 3, 0, "span", 159)(2, AddClassComponent_div_73_div_34_span_2_Template, 3, 0, "span", 160)(3, AddClassComponent_div_73_div_34_span_3_Template, 3, 0, "span", 147);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
} }
function AddClassComponent_div_73_div_41_span_1_i_4_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 154);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_41_span_1_i_4_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r41); const ctx_r41 = i0.ɵɵnextContext(); const data_r39 = ctx_r41.$implicit; const i_r40 = ctx_r41.index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.deleteTime("wednesday", i_r40, data_r39)); });
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_73_div_41_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 148)(1, "a", 149);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_41_span_1_Template_a_click_1_listener() { const ctx_r37 = i0.ɵɵrestoreView(_r37); const data_r39 = ctx_r37.$implicit; const i_r40 = ctx_r37.index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.editSlot(data_r39, i_r40)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 150);
    i0.ɵɵtemplate(4, AddClassComponent_div_73_div_41_span_1_i_4_Template, 1, 0, "i", 151);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 152);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_41_span_1_Template_a_click_5_listener() { const data_r39 = i0.ɵɵrestoreView(_r37).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showAttendance(data_r39, "3")); });
    i0.ɵɵelement(6, "i", 153);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r39 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", data_r39.teacher_name, " : ", data_r39.slotstarttime, " - ", data_r39.slotendtime, " \u00A0");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
} }
function AddClassComponent_div_73_div_41_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 155)(1, "button", 156);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_41_span_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r43); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showSlot(3)); });
    i0.ɵɵelement(2, "i", 157);
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 145);
    i0.ɵɵtemplate(1, AddClassComponent_div_73_div_41_span_1_Template, 7, 4, "span", 146)(2, AddClassComponent_div_73_div_41_span_2_Template, 3, 0, "span", 147);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.wednesDayTimingsday);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
} }
function AddClassComponent_div_73_div_42_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 161)(1, "a");
    i0.ɵɵtext(2, "\u00A0 Start Time - End Time \u00A0");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_42_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 162);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_42_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r44); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showSlot(3)); });
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2, "\u00A0 Start Time - End Time \u00A0");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_42_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 155)(1, "button", 156);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_42_span_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r45); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showSlot(3)); });
    i0.ɵɵelement(2, "i", 157);
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 158);
    i0.ɵɵtemplate(1, AddClassComponent_div_73_div_42_span_1_Template, 3, 0, "span", 159)(2, AddClassComponent_div_73_div_42_span_2_Template, 3, 0, "span", 160)(3, AddClassComponent_div_73_div_42_span_3_Template, 3, 0, "span", 147);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
} }
function AddClassComponent_div_73_div_49_span_1_i_4_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 154);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_49_span_1_i_4_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r50); const ctx_r50 = i0.ɵɵnextContext(); const data_r48 = ctx_r50.$implicit; const i_r49 = ctx_r50.index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.deleteTime("thursday", i_r49, data_r48)); });
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_73_div_49_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 148)(1, "a", 149);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_49_span_1_Template_a_click_1_listener() { const ctx_r46 = i0.ɵɵrestoreView(_r46); const data_r48 = ctx_r46.$implicit; const i_r49 = ctx_r46.index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.editSlot(data_r48, i_r49)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 150);
    i0.ɵɵtemplate(4, AddClassComponent_div_73_div_49_span_1_i_4_Template, 1, 0, "i", 151);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 152);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_49_span_1_Template_a_click_5_listener() { const data_r48 = i0.ɵɵrestoreView(_r46).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showAttendance(data_r48, "4")); });
    i0.ɵɵelement(6, "i", 153);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r48 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", data_r48.teacher_name, " : ", data_r48.slotstarttime, " - ", data_r48.slotendtime, " \u00A0");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
} }
function AddClassComponent_div_73_div_49_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 155)(1, "button", 156);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_49_span_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showSlot(4)); });
    i0.ɵɵelement(2, "i", 157);
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 145);
    i0.ɵɵtemplate(1, AddClassComponent_div_73_div_49_span_1_Template, 7, 4, "span", 146)(2, AddClassComponent_div_73_div_49_span_2_Template, 3, 0, "span", 147);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.thursdayTimingsday);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
} }
function AddClassComponent_div_73_div_50_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 161)(1, "a");
    i0.ɵɵtext(2, "\u00A0 Start Time - End Time \u00A0");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_50_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 162);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_50_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r53); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showSlot(4)); });
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2, "\u00A0 Start Time - End Time \u00A0");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_50_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 155)(1, "button", 156);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_50_span_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r54); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showSlot(4)); });
    i0.ɵɵelement(2, "i", 157);
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 158);
    i0.ɵɵtemplate(1, AddClassComponent_div_73_div_50_span_1_Template, 3, 0, "span", 159)(2, AddClassComponent_div_73_div_50_span_2_Template, 3, 0, "span", 160)(3, AddClassComponent_div_73_div_50_span_3_Template, 3, 0, "span", 147);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
} }
function AddClassComponent_div_73_div_57_span_1_i_4_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 154);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_57_span_1_i_4_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r59); const ctx_r59 = i0.ɵɵnextContext(); const data_r57 = ctx_r59.$implicit; const i_r58 = ctx_r59.index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.deleteTime("friday", i_r58, data_r57)); });
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_73_div_57_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 148)(1, "a", 149);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_57_span_1_Template_a_click_1_listener() { const ctx_r55 = i0.ɵɵrestoreView(_r55); const data_r57 = ctx_r55.$implicit; const i_r58 = ctx_r55.index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.editSlot(data_r57, i_r58)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 150);
    i0.ɵɵtemplate(4, AddClassComponent_div_73_div_57_span_1_i_4_Template, 1, 0, "i", 151);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 152);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_57_span_1_Template_a_click_5_listener() { const data_r57 = i0.ɵɵrestoreView(_r55).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showAttendance(data_r57, "5")); });
    i0.ɵɵelement(6, "i", 153);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r57 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", data_r57.teacher_name, " : ", data_r57.slotstarttime, " - ", data_r57.slotendtime, " \u00A0");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
} }
function AddClassComponent_div_73_div_57_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r61 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 155)(1, "button", 156);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_57_span_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r61); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showSlot(5)); });
    i0.ɵɵelement(2, "i", 157);
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 145);
    i0.ɵɵtemplate(1, AddClassComponent_div_73_div_57_span_1_Template, 7, 4, "span", 146)(2, AddClassComponent_div_73_div_57_span_2_Template, 3, 0, "span", 147);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.fridayTimingsday);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
} }
function AddClassComponent_div_73_div_58_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 161)(1, "a");
    i0.ɵɵtext(2, "\u00A0 Start Time - End Time \u00A0");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_58_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 162);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_58_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r62); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showSlot(5)); });
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2, "\u00A0 Start Time - End Time \u00A0");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_58_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 155)(1, "button", 156);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_58_span_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r63); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showSlot(5)); });
    i0.ɵɵelement(2, "i", 157);
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 158);
    i0.ɵɵtemplate(1, AddClassComponent_div_73_div_58_span_1_Template, 3, 0, "span", 159)(2, AddClassComponent_div_73_div_58_span_2_Template, 3, 0, "span", 160)(3, AddClassComponent_div_73_div_58_span_3_Template, 3, 0, "span", 147);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
} }
function AddClassComponent_div_73_div_65_span_1_i_4_Template(rf, ctx) { if (rf & 1) {
    const _r68 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 154);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_65_span_1_i_4_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r68); const ctx_r68 = i0.ɵɵnextContext(); const data_r66 = ctx_r68.$implicit; const i_r67 = ctx_r68.index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.deleteTime("saturday", i_r67, data_r66)); });
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_73_div_65_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 148)(1, "a", 149);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_65_span_1_Template_a_click_1_listener() { const ctx_r64 = i0.ɵɵrestoreView(_r64); const data_r66 = ctx_r64.$implicit; const i_r67 = ctx_r64.index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.editSlot(data_r66, i_r67)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 150);
    i0.ɵɵtemplate(4, AddClassComponent_div_73_div_65_span_1_i_4_Template, 1, 0, "i", 151);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 152);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_65_span_1_Template_a_click_5_listener() { const data_r66 = i0.ɵɵrestoreView(_r64).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showAttendance(data_r66, "6")); });
    i0.ɵɵelement(6, "i", 153);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r66 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", data_r66.teacher_name, " : ", data_r66.slotstarttime, " - ", data_r66.slotendtime, " \u00A0");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
} }
function AddClassComponent_div_73_div_65_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r70 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 155)(1, "button", 156);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_65_span_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r70); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showSlot(6)); });
    i0.ɵɵelement(2, "i", 157);
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_65_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 145);
    i0.ɵɵtemplate(1, AddClassComponent_div_73_div_65_span_1_Template, 7, 4, "span", 146)(2, AddClassComponent_div_73_div_65_span_2_Template, 3, 0, "span", 147);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.saturdayTimingsday);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
} }
function AddClassComponent_div_73_div_66_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 161)(1, "a");
    i0.ɵɵtext(2, "\u00A0 Start Time - End Time \u00A0");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_66_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r71 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 162);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_66_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r71); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showSlot(6)); });
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2, "\u00A0 Start Time - End Time \u00A0");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_66_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r72 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 155)(1, "button", 156);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_66_span_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r72); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showSlot(6)); });
    i0.ɵɵelement(2, "i", 157);
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_66_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 158);
    i0.ɵɵtemplate(1, AddClassComponent_div_73_div_66_span_1_Template, 3, 0, "span", 159)(2, AddClassComponent_div_73_div_66_span_2_Template, 3, 0, "span", 160)(3, AddClassComponent_div_73_div_66_span_3_Template, 3, 0, "span", 147);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
} }
function AddClassComponent_div_73_div_73_span_1_i_4_Template(rf, ctx) { if (rf & 1) {
    const _r77 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 154);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_73_span_1_i_4_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r77); const ctx_r77 = i0.ɵɵnextContext(); const data_r75 = ctx_r77.$implicit; const i_r76 = ctx_r77.index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.deleteTime("sunday", i_r76, data_r75)); });
    i0.ɵɵelementEnd();
} }
function AddClassComponent_div_73_div_73_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 148)(1, "a", 149);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_73_span_1_Template_a_click_1_listener() { const ctx_r73 = i0.ɵɵrestoreView(_r73); const data_r75 = ctx_r73.$implicit; const i_r76 = ctx_r73.index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.editSlot(data_r75, i_r76)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 150);
    i0.ɵɵtemplate(4, AddClassComponent_div_73_div_73_span_1_i_4_Template, 1, 0, "i", 151);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 152);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_73_span_1_Template_a_click_5_listener() { const data_r75 = i0.ɵɵrestoreView(_r73).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showAttendance(data_r75, "7")); });
    i0.ɵɵelement(6, "i", 153);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r75 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", data_r75.teacher_name, " : ", data_r75.slotstarttime, " - ", data_r75.slotendtime, " \u00A0");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
} }
function AddClassComponent_div_73_div_73_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 155)(1, "button", 156);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_73_span_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r79); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showSlot(7)); });
    i0.ɵɵelement(2, "i", 157);
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_73_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 145);
    i0.ɵɵtemplate(1, AddClassComponent_div_73_div_73_span_1_Template, 7, 4, "span", 146)(2, AddClassComponent_div_73_div_73_span_2_Template, 3, 0, "span", 147);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.sundayTimingsday);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
} }
function AddClassComponent_div_73_div_74_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 161)(1, "a");
    i0.ɵɵtext(2, "\u00A0 Start Time - End Time \u00A0");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_74_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r80 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 164);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_74_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r80); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showSlot(7)); });
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2, "\u00A0 Start Time - End Time \u00A0");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_74_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r81 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 155)(1, "button", 156);
    i0.ɵɵlistener("click", function AddClassComponent_div_73_div_74_span_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r81); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showSlot(7)); });
    i0.ɵɵelement(2, "i", 157);
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_div_73_div_74_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 158);
    i0.ɵɵtemplate(1, AddClassComponent_div_73_div_74_span_1_Template, 3, 0, "span", 159)(2, AddClassComponent_div_73_div_74_span_2_Template, 3, 0, "span", 163)(3, AddClassComponent_div_73_div_74_span_3_Template, 3, 0, "span", 147);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
} }
function AddClassComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 127)(1, "div", 58)(2, "div", 59)(3, "div", 60)(4, "div", 16)(5, "div", 128)(6, "div", 129)(7, "label");
    i0.ɵɵtext(8, "Start Date");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, AddClassComponent_div_73_div_9_Template, 7, 1, "div", 130)(10, AddClassComponent_div_73_div_10_Template, 5, 3, "div", 130)(11, AddClassComponent_div_73_em_11_Template, 2, 0, "em", 131);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 128)(13, "div", 129)(14, "label");
    i0.ɵɵtext(15, "End Date");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(16, AddClassComponent_div_73_div_16_Template, 7, 1, "div", 130)(17, AddClassComponent_div_73_div_17_Template, 3, 2, "div", 130)(18, AddClassComponent_div_73_em_18_Template, 2, 0, "em", 131);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 74)(20, "div", 132)(21, "h5", 133);
    i0.ɵɵtext(22, "Monday");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 132)(24, "div", 134);
    i0.ɵɵtemplate(25, AddClassComponent_div_73_div_25_Template, 3, 2, "div", 135)(26, AddClassComponent_div_73_div_26_Template, 4, 3, "div", 136);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "div", 16)(28, "div", 132)(29, "h5", 133);
    i0.ɵɵtext(30, "Tuesday");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div", 132)(32, "div", 134);
    i0.ɵɵtemplate(33, AddClassComponent_div_73_div_33_Template, 3, 2, "div", 135)(34, AddClassComponent_div_73_div_34_Template, 4, 3, "div", 136);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(35, "div", 16)(36, "div", 132)(37, "h5", 133);
    i0.ɵɵtext(38, "Wednesday");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "div", 132)(40, "div", 134);
    i0.ɵɵtemplate(41, AddClassComponent_div_73_div_41_Template, 3, 2, "div", 135)(42, AddClassComponent_div_73_div_42_Template, 4, 3, "div", 136);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(43, "div", 16)(44, "div", 132)(45, "h5", 133);
    i0.ɵɵtext(46, "Thursday");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div", 132)(48, "div", 134);
    i0.ɵɵtemplate(49, AddClassComponent_div_73_div_49_Template, 3, 2, "div", 135)(50, AddClassComponent_div_73_div_50_Template, 4, 3, "div", 136);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(51, "div", 16)(52, "div", 132)(53, "h5", 133);
    i0.ɵɵtext(54, "Friday");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(55, "div", 132)(56, "div", 134);
    i0.ɵɵtemplate(57, AddClassComponent_div_73_div_57_Template, 3, 2, "div", 135)(58, AddClassComponent_div_73_div_58_Template, 4, 3, "div", 136);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(59, "div", 16)(60, "div", 132)(61, "h5", 133);
    i0.ɵɵtext(62, "Saturday");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(63, "div", 137)(64, "div", 134);
    i0.ɵɵtemplate(65, AddClassComponent_div_73_div_65_Template, 3, 2, "div", 135)(66, AddClassComponent_div_73_div_66_Template, 4, 3, "div", 136);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(67, "div", 16)(68, "div", 137)(69, "h5", 133);
    i0.ɵɵtext(70, "Sunday");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(71, "div", 137)(72, "div", 134);
    i0.ɵɵtemplate(73, AddClassComponent_div_73_div_73_Template, 3, 2, "div", 135)(74, AddClassComponent_div_73_div_74_Template, 4, 3, "div", 136);
    i0.ɵɵelementEnd()()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", ctx_r1.readOnlyStart == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.readOnly == true || ctx_r1.acceptstartdate == true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.classform.get("startDate").invalid && (ctx_r1.classform.get("startDate").dirty || ctx_r1.classform.get("startDate").touched));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.readOnly == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.readOnly == true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.classform.get("endDate").invalid && (ctx_r1.classform.get("endDate").dirty || ctx_r1.classform.get("endDate").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.mondayTimings != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.mondayTimings == "");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.tuesdayTimings != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.tuesdayTimings == "");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.wednesDayTimingsday != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.wednesDayTimingsday == "");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.thursdayTimingsday != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.thursdayTimingsday == "");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.fridayTimingsday != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.fridayTimingsday == "");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.saturdayTimingsday != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.saturdayTimingsday == "");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.sundayTimingsday != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.sundayTimingsday == "");
} }
function AddClassComponent_div_74_mwl_calendar_month_view_22_Template(rf, ctx) { if (rf & 1) {
    const _r83 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mwl-calendar-month-view", 177);
    i0.ɵɵlistener("dayClicked", function AddClassComponent_div_74_mwl_calendar_month_view_22_Template_mwl_calendar_month_view_dayClicked_0_listener($event) { i0.ɵɵrestoreView(_r83); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dayClicked($event.day)); })("eventClicked", function AddClassComponent_div_74_mwl_calendar_month_view_22_Template_mwl_calendar_month_view_eventClicked_0_listener($event) { i0.ɵɵrestoreView(_r83); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.handleEvent("Clicked", $event.event, ctx_r1.type)); })("eventTimesChanged", function AddClassComponent_div_74_mwl_calendar_month_view_22_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) { i0.ɵɵrestoreView(_r83); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.eventTimesChanged($event, ctx_r1.type)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    const customCellTemplate_r84 = i0.ɵɵreference(76);
    i0.ɵɵproperty("viewDate", ctx_r1.viewDate)("events", ctx_r1.events)("refresh", ctx_r1.refresh)("activeDayIsOpen", ctx_r1.activeDayIsOpen)("cellTemplate", customCellTemplate_r84);
} }
function AddClassComponent_div_74_mwl_calendar_week_view_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mwl-calendar-week-view", 178);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("viewDate", ctx_r1.viewDate)("events", ctx_r1.calenderTimeSlot)("refresh", ctx_r1.refresh);
} }
function AddClassComponent_div_74_mwl_calendar_day_view_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mwl-calendar-day-view", 178);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("viewDate", ctx_r1.viewDate)("events", ctx_r1.calenderTimeSlot)("refresh", ctx_r1.refresh);
} }
function AddClassComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    const _r82 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 165)(2, "div", 166)(3, "div", 167);
    i0.ɵɵtwoWayListener("viewDateChange", function AddClassComponent_div_74_Template_div_viewDateChange_3_listener($event) { i0.ɵɵrestoreView(_r82); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.viewDate, $event) || (ctx_r1.viewDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("viewDateChange", function AddClassComponent_div_74_Template_div_viewDateChange_3_listener() { i0.ɵɵrestoreView(_r82); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeOpenMonthViewDay("preview")); });
    i0.ɵɵtext(4, " Previous ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 168);
    i0.ɵɵtwoWayListener("viewDateChange", function AddClassComponent_div_74_Template_div_viewDateChange_5_listener($event) { i0.ɵɵrestoreView(_r82); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.viewDate, $event) || (ctx_r1.viewDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("viewDateChange", function AddClassComponent_div_74_Template_div_viewDateChange_5_listener() { i0.ɵɵrestoreView(_r82); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeOpenMonthViewDay("today")); });
    i0.ɵɵtext(6, " Today ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 169);
    i0.ɵɵtwoWayListener("viewDateChange", function AddClassComponent_div_74_Template_div_viewDateChange_7_listener($event) { i0.ɵɵrestoreView(_r82); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.viewDate, $event) || (ctx_r1.viewDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("viewDateChange", function AddClassComponent_div_74_Template_div_viewDateChange_7_listener() { i0.ɵɵrestoreView(_r82); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeOpenMonthViewDay("next")); });
    i0.ɵɵtext(8, " Next ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 170)(10, "h3", 171);
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "calendarDate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 172)(14, "div", 166)(15, "div", 173);
    i0.ɵɵlistener("click", function AddClassComponent_div_74_Template_div_click_15_listener() { i0.ɵɵrestoreView(_r82); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setView(ctx_r1.CalendarView.Month)); });
    i0.ɵɵtext(16, " Month ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 173);
    i0.ɵɵlistener("click", function AddClassComponent_div_74_Template_div_click_17_listener() { i0.ɵɵrestoreView(_r82); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setView(ctx_r1.CalendarView.Week)); });
    i0.ɵɵtext(18, " Week ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 173);
    i0.ɵɵlistener("click", function AddClassComponent_div_74_Template_div_click_19_listener() { i0.ɵɵrestoreView(_r82); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setView(ctx_r1.CalendarView.Day)); });
    i0.ɵɵtext(20, " Day ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "div", 174);
    i0.ɵɵtemplate(22, AddClassComponent_div_74_mwl_calendar_month_view_22_Template, 1, 5, "mwl-calendar-month-view", 175)(23, AddClassComponent_div_74_mwl_calendar_week_view_23_Template, 1, 3, "mwl-calendar-week-view", 176)(24, AddClassComponent_div_74_mwl_calendar_day_view_24_Template, 1, 3, "mwl-calendar-day-view", 176);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", ctx_r1.currentCalendarshow === "preview" ? "btn btn-primary" : "btn btn-outline-primary")("view", ctx_r1.view);
    i0.ɵɵtwoWayProperty("viewDate", ctx_r1.viewDate);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r1.currentCalendarshow === "today" ? "btn btn-primary" : "btn btn-outline-primary");
    i0.ɵɵtwoWayProperty("viewDate", ctx_r1.viewDate);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r1.currentCalendarshow === "next" ? "btn btn-primary" : "btn btn-outline-primary")("view", ctx_r1.view);
    i0.ɵɵtwoWayProperty("viewDate", ctx_r1.viewDate);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(12, 19, ctx_r1.viewDate, ctx_r1.view + "ViewTitle", "en"));
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("active", ctx_r1.view === ctx_r1.CalendarView.Month);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.view === ctx_r1.CalendarView.Week);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.view === ctx_r1.CalendarView.Day);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitch", ctx_r1.view);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.CalendarView.Month);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.CalendarView.Week);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.CalendarView.Day);
} }
function AddClassComponent_ng_template_75_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 183);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r85 = i0.ɵɵnextContext().day;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(day_r85.badgeTotal);
} }
function AddClassComponent_ng_template_75_small_5_span_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 171);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r85 = i0.ɵɵnextContext();
    const item_r87 = ctx_r85.$implicit;
    const i_r88 = ctx_r85.index;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4("", item_r87.teacher_name, " : ", item_r87.titleName, " at ", item_r87.slotstarttime + " " + item_r87.slotendtime, "", i_r88 != 0 ? " , " : "", "");
} }
function AddClassComponent_ng_template_75_small_5_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, AddClassComponent_ng_template_75_small_5_span_1_p_1_Template, 2, 4, "p", 187);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r88 = ctx.index;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i_r88 == 0 || i_r88 === 1 || i_r88 == 2);
} }
function AddClassComponent_ng_template_75_small_5_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r85 = i0.ɵɵnextContext(2).day;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", day_r85.events.length - 3 + " More", " ");
} }
function AddClassComponent_ng_template_75_small_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 184);
    i0.ɵɵtemplate(1, AddClassComponent_ng_template_75_small_5_span_1_Template, 2, 1, "span", 185)(2, AddClassComponent_ng_template_75_small_5_span_2_Template, 2, 1, "span", 186);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r85 = i0.ɵɵnextContext().day;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", day_r85.events);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", day_r85.events.length > 3);
} }
function AddClassComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 179);
    i0.ɵɵtemplate(1, AddClassComponent_ng_template_75_span_1_Template, 2, 1, "span", 180);
    i0.ɵɵelementStart(2, "span", 181);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "calendarDate");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, AddClassComponent_ng_template_75_small_5_Template, 3, 2, "small", 182);
} if (rf & 2) {
    const day_r85 = ctx.day;
    const locale_r89 = ctx.locale;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", day_r85.badgeTotal > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind3(4, 3, day_r85.date, "monthViewDayNumber", locale_r89), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", day_r85.events.length > 0);
} }
function AddClassComponent_ng_template_77_em_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 142);
    i0.ɵɵtext(1, " Date is invalid ");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_77_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 204)(1, "label");
    i0.ɵɵtext(2, "Teacher Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "ng-select", 205);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("items", ctx_r1.teacherData);
} }
function AddClassComponent_ng_template_77_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 206)(1, "label");
    i0.ɵɵtext(2, "Teacher Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 207);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("value", ctx_r1.teacherName);
} }
function AddClassComponent_ng_template_77_div_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 208)(1, "div", 209);
    i0.ɵɵtext(2, " Please select the Valid \u00A0");
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4, "From Time & To Time");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, ". ");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_ng_template_77_div_31_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r93 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 213);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_77_div_31_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r93); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.cleardata(1, "calendar")); });
    i0.ɵɵelement(1, "i", 214);
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_77_div_31_em_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Please Enter valid Link");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_77_div_31_em_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Meeting Link is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_77_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 210)(1, "label");
    i0.ɵɵtext(2, "Zoom Meeting Link");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 89);
    i0.ɵɵelement(4, "input", 211);
    i0.ɵɵelementStart(5, "div", 91);
    i0.ɵɵtemplate(6, AddClassComponent_ng_template_77_div_31_button_6_Template, 2, 0, "button", 212);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, AddClassComponent_ng_template_77_div_31_em_7_Template, 2, 0, "em", 32)(8, AddClassComponent_ng_template_77_div_31_em_8_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r1.editslotform.controls.meetingLink.value);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.editslotform.get("meetingLink").hasError("pattern"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.editslotform.get("meetingLink").valid && (ctx_r1.editslotform.get("meetingLink").dirty || ctx_r1.editslotform.get("meetingLink").touched));
} }
function AddClassComponent_ng_template_77_div_32_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r94 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 213);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_77_div_32_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r94); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.cleardata(2, "calendar")); });
    i0.ɵɵelement(1, "i", 214);
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_77_div_32_em_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Meeting Id is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_77_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 210)(1, "label");
    i0.ɵɵtext(2, "Zoom Meeting ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 89);
    i0.ɵɵelement(4, "input", 215);
    i0.ɵɵelementStart(5, "div", 91);
    i0.ɵɵtemplate(6, AddClassComponent_ng_template_77_div_32_button_6_Template, 2, 0, "button", 212);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, AddClassComponent_ng_template_77_div_32_em_7_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r1.editslotform.controls.meetingId.value);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.editslotform.get("meetingId").valid && (ctx_r1.editslotform.get("meetingId").dirty || ctx_r1.editslotform.get("meetingId").touched));
} }
function AddClassComponent_ng_template_77_div_33_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r95 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 213);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_77_div_33_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r95); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.cleardata(3, "calendar")); });
    i0.ɵɵelement(1, "i", 214);
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_77_div_33_em_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Meeting Passcode is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_77_div_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49)(1, "label");
    i0.ɵɵtext(2, "Zoom Passcode");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 89);
    i0.ɵɵelement(4, "input", 216);
    i0.ɵɵelementStart(5, "div", 91);
    i0.ɵɵtemplate(6, AddClassComponent_ng_template_77_div_33_button_6_Template, 2, 0, "button", 212);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, AddClassComponent_ng_template_77_div_33_em_7_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r1.editslotform.controls.meetingPasscode.value);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.editslotform.get("meetingPasscode").valid && (ctx_r1.editslotform.get("meetingPasscode").dirty || ctx_r1.editslotform.get("meetingPasscode").touched));
} }
function AddClassComponent_ng_template_77_div_34_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r96 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 213);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_77_div_34_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r96); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.cleardata(4, "calendar")); });
    i0.ɵɵelement(1, "i", 214);
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_77_div_34_em_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Telephone Number is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_77_div_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49)(1, "label");
    i0.ɵɵtext(2, "Telephone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 89);
    i0.ɵɵelement(4, "input", 217);
    i0.ɵɵelementStart(5, "div", 91);
    i0.ɵɵtemplate(6, AddClassComponent_ng_template_77_div_34_button_6_Template, 2, 0, "button", 212);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, AddClassComponent_ng_template_77_div_34_em_7_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r1.editslotform.controls.telephone.value);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.editslotform.get("telephone").valid && (ctx_r1.editslotform.get("telephone").dirty || ctx_r1.editslotform.get("telephone").touched));
} }
function AddClassComponent_ng_template_77_Template(rf, ctx) { if (rf & 1) {
    const _r90 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 188)(1, "h4", 189);
    i0.ɵɵtext(2, "Edit Slot");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 190);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_77_Template_i_click_3_listener() { const close_r91 = i0.ɵɵrestoreView(_r90).close; return i0.ɵɵresetView(close_r91()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "form", 191)(5, "div", 192)(6, "div", 16)(7, "div", 137)(8, "div", 16)(9, "div", 193)(10, "label");
    i0.ɵɵtext(11, "Date ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 194)(13, "div", 138)(14, "input", 195, 10);
    i0.ɵɵlistener("dateChanged", function AddClassComponent_ng_template_77_Template_input_dateChanged_14_listener($event) { i0.ɵɵrestoreView(_r90); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onDateChanged($event)); })("click", function AddClassComponent_ng_template_77_Template_input_click_14_listener() { i0.ɵɵrestoreView(_r90); const dp2_r92 = i0.ɵɵreference(15); return i0.ɵɵresetView(dp2_r92.toggleCalendar()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 91)(17, "button", 24);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_77_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r90); const dp2_r92 = i0.ɵɵreference(15); return i0.ɵɵresetView(dp2_r92.toggleCalendar()); });
    i0.ɵɵelement(18, "i", 93);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(19, AddClassComponent_ng_template_77_em_19_Template, 2, 0, "em", 131);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(20, AddClassComponent_ng_template_77_div_20_Template, 4, 1, "div", 196)(21, AddClassComponent_ng_template_77_div_21_Template, 4, 1, "div", 197);
    i0.ɵɵelementStart(22, "div", 198)(23, "label");
    i0.ɵɵtext(24, "Start Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "ngb-timepicker", 199);
    i0.ɵɵtwoWayListener("ngModelChange", function AddClassComponent_ng_template_77_Template_ngb_timepicker_ngModelChange_25_listener($event) { i0.ɵɵrestoreView(_r90); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.fromTime, $event) || (ctx_r1.fromTime = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function AddClassComponent_ng_template_77_Template_ngb_timepicker_ngModelChange_25_listener() { i0.ɵɵrestoreView(_r90); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.checkTime()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 198)(27, "label");
    i0.ɵɵtext(28, "End Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "ngb-timepicker", 199);
    i0.ɵɵtwoWayListener("ngModelChange", function AddClassComponent_ng_template_77_Template_ngb_timepicker_ngModelChange_29_listener($event) { i0.ɵɵrestoreView(_r90); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.toTime, $event) || (ctx_r1.toTime = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function AddClassComponent_ng_template_77_Template_ngb_timepicker_ngModelChange_29_listener() { i0.ɵɵrestoreView(_r90); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.checkTime()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(30, AddClassComponent_ng_template_77_div_30_Template, 6, 0, "div", 200)(31, AddClassComponent_ng_template_77_div_31_Template, 9, 3, "div", 201)(32, AddClassComponent_ng_template_77_div_32_Template, 8, 2, "div", 201)(33, AddClassComponent_ng_template_77_div_33_Template, 8, 2, "div", 202)(34, AddClassComponent_ng_template_77_div_34_Template, 8, 2, "div", 202);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "div", 203)(36, "button", 24);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_77_Template_button_click_36_listener() { i0.ɵɵrestoreView(_r90); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitTimeSlot(2)); });
    i0.ɵɵtext(37, "Update");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r1.editslotform);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("options", ctx_r1.myDpOptions);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.editslotform.get("selectedDate").invalid && (ctx_r1.editslotform.get("selectedDate").dirty || ctx_r1.editslotform.get("selectedDate").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.adminLogin == true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.adminLogin == false);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.fromTime);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(18, _c13))("meridian", ctx_r1.meridian)("spinners", ctx_r1.spinner);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.toTime);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(19, _c13))("meridian", ctx_r1.meridian)("spinners", ctx_r1.spinner);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.timeErr);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showZoomDetails && ctx_r1.allowZoomApi);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showZoomDetails && ctx_r1.allowZoomApi);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showZoomDetails && ctx_r1.allowZoomApi);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showZoomDetails && ctx_r1.allowZoomApi);
} }
function AddClassComponent_ng_template_79_Template(rf, ctx) { if (rf & 1) {
    const _r97 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 188)(1, "h5", 189);
    i0.ɵɵtext(2, "Event action occurred");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 218);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_79_Template_button_click_3_listener() { const close_r98 = i0.ɵɵrestoreView(_r97).close; return i0.ɵɵresetView(close_r98()); });
    i0.ɵɵelementStart(4, "span", 219);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 192)(7, "div");
    i0.ɵɵtext(8, " Action: ");
    i0.ɵɵelement(9, "pre");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div");
    i0.ɵɵtext(11, " Event: ");
    i0.ɵɵelement(12, "pre");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 203)(14, "button", 220);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_79_Template_button_click_14_listener() { const close_r98 = i0.ɵɵrestoreView(_r97).close; return i0.ɵɵresetView(close_r98()); });
    i0.ɵɵtext(15, " OK ");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_ng_template_81_Template(rf, ctx) { if (rf & 1) {
    const _r99 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 188)(1, "h4", 221)(2, "b");
    i0.ɵɵtext(3, "Edit Grade");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 192)(5, "h5");
    i0.ɵɵtext(6, "Are sure want to change the grade since it will change the previously updated student list ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 222)(8, "button", 223);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_81_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r99); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.noClose("grade")); });
    i0.ɵɵtext(9, "No");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 24);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_81_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r99); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.eraseSessiondate("grade")); });
    i0.ɵɵtext(11, "Yes");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_ng_template_83_Template(rf, ctx) { if (rf & 1) {
    const _r100 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 188)(1, "h4", 224)(2, "b");
    i0.ɵɵtext(3, "Edit Content Folder");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 192)(5, "h5");
    i0.ɵɵtext(6, "Are sure want to change the Content Folder since it will change the previously updated student list ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 222)(8, "button", 223);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_83_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r100); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.noClose("batch")); });
    i0.ɵɵtext(9, "No");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 24);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_83_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r100); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.eraseSessiondate("batch")); });
    i0.ɵɵtext(11, "Yes");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_ng_template_85_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r102 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 227)(1, "label");
    i0.ɵɵtext(2, "Teacher Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ng-select", 228);
    i0.ɵɵlistener("change", function AddClassComponent_ng_template_85_div_7_Template_ng_select_change_3_listener() { i0.ɵɵrestoreView(_r102); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.teacherSelection(ctx_r1.teacherData)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("items", ctx_r1.teacherData);
} }
function AddClassComponent_ng_template_85_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 227)(1, "label");
    i0.ɵɵtext(2, "Teacher Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 207);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("value", ctx_r1.teacherName);
} }
function AddClassComponent_ng_template_85_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 208)(1, "div", 209);
    i0.ɵɵtext(2, " Please select the Valid \u00A0");
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4, "From Time & To Time");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, ". ");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_ng_template_85_div_18_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r104 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 213);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_85_div_18_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r104); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.cleardata(1, "slot")); });
    i0.ɵɵelement(1, "i", 214);
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_85_div_18_em_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Please Enter valid Link");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_85_div_18_em_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Meeting Link is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_85_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r103 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 210)(1, "label");
    i0.ɵɵtext(2, "Zoom Meeting Link");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 89)(4, "input", 229);
    i0.ɵɵlistener("input", function AddClassComponent_ng_template_85_div_18_Template_input_input_4_listener() { i0.ɵɵrestoreView(_r103); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.newselection()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 91);
    i0.ɵɵtemplate(6, AddClassComponent_ng_template_85_div_18_button_6_Template, 2, 0, "button", 212);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, AddClassComponent_ng_template_85_div_18_em_7_Template, 2, 0, "em", 32)(8, AddClassComponent_ng_template_85_div_18_em_8_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r1.slotform.controls.meetingLink.value);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.slotform.get("meetingLink").hasError("pattern"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.slotform.get("meetingLink").valid && (ctx_r1.slotform.get("meetingLink").dirty || ctx_r1.slotform.get("meetingLink").touched));
} }
function AddClassComponent_ng_template_85_div_19_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r106 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 213);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_85_div_19_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r106); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.cleardata(2, "slot")); });
    i0.ɵɵelement(1, "i", 214);
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_85_div_19_em_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Meeting Id is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_85_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r105 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 210)(1, "label");
    i0.ɵɵtext(2, "Zoom Meeting ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 89)(4, "input", 230);
    i0.ɵɵlistener("input", function AddClassComponent_ng_template_85_div_19_Template_input_input_4_listener() { i0.ɵɵrestoreView(_r105); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.newselection()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 91);
    i0.ɵɵtemplate(6, AddClassComponent_ng_template_85_div_19_button_6_Template, 2, 0, "button", 212);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, AddClassComponent_ng_template_85_div_19_em_7_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r1.slotform.controls.meetingId.value);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.slotform.get("meetingId").valid && (ctx_r1.slotform.get("meetingId").dirty || ctx_r1.slotform.get("meetingId").touched));
} }
function AddClassComponent_ng_template_85_div_20_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r108 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 213);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_85_div_20_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r108); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.cleardata(3, "slot")); });
    i0.ɵɵelement(1, "i", 214);
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_85_div_20_em_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Meeting Passcode is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_85_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r107 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 49)(1, "label");
    i0.ɵɵtext(2, "Zoom Passcode");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 89)(4, "input", 231);
    i0.ɵɵlistener("input", function AddClassComponent_ng_template_85_div_20_Template_input_input_4_listener() { i0.ɵɵrestoreView(_r107); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.newselection()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 91);
    i0.ɵɵtemplate(6, AddClassComponent_ng_template_85_div_20_button_6_Template, 2, 0, "button", 212);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, AddClassComponent_ng_template_85_div_20_em_7_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r1.slotform.controls.meetingPasscode.value);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.slotform.get("meetingPasscode").valid && (ctx_r1.slotform.get("meetingPasscode").dirty || ctx_r1.slotform.get("meetingPasscode").touched));
} }
function AddClassComponent_ng_template_85_div_21_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r110 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 213);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_85_div_21_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r110); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.cleardata(4, "slot")); });
    i0.ɵɵelement(1, "i", 214);
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_85_div_21_em_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Telephone Number is required");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_85_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r109 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 49)(1, "label");
    i0.ɵɵtext(2, "Telephone Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 89)(4, "input", 232);
    i0.ɵɵlistener("input", function AddClassComponent_ng_template_85_div_21_Template_input_input_4_listener() { i0.ɵɵrestoreView(_r109); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.newselection()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 91);
    i0.ɵɵtemplate(6, AddClassComponent_ng_template_85_div_21_button_6_Template, 2, 0, "button", 212);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, AddClassComponent_ng_template_85_div_21_em_7_Template, 2, 0, "em", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r1.slotform.controls.telephone.value);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.slotform.get("telephone").valid && (ctx_r1.slotform.get("telephone").dirty || ctx_r1.slotform.get("telephone").touched));
} }
function AddClassComponent_ng_template_85_div_22_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r111 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 236);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_85_div_22_div_4_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r111); const data_r112 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.selectDate(data_r112.id)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r112 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", data_r112.status == 0 ? "btn btn-outline-primary m-2" : "btn btn-primary m-2");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(data_r112.day);
} }
function AddClassComponent_ng_template_85_div_22_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, AddClassComponent_ng_template_85_div_22_div_4_button_1_Template, 2, 2, "button", 235);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r112 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r112.show);
} }
function AddClassComponent_ng_template_85_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 137)(1, "h5", 233);
    i0.ɵɵtext(2, "Repeat for");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 234);
    i0.ɵɵtemplate(4, AddClassComponent_ng_template_85_div_22_div_4_Template, 2, 1, "div", 185);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.days);
} }
function AddClassComponent_ng_template_85_Template(rf, ctx) { if (rf & 1) {
    const _r101 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 188)(1, "h4", 189);
    i0.ɵɵtext(2, "Schedule");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 190);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_85_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r101); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSave1()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "form", 191)(5, "div", 192)(6, "div", 16);
    i0.ɵɵtemplate(7, AddClassComponent_ng_template_85_div_7_Template, 4, 1, "div", 225)(8, AddClassComponent_ng_template_85_div_8_Template, 4, 1, "div", 225);
    i0.ɵɵelementStart(9, "div", 198)(10, "label");
    i0.ɵɵtext(11, "Start Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "ngb-timepicker", 199);
    i0.ɵɵtwoWayListener("ngModelChange", function AddClassComponent_ng_template_85_Template_ngb_timepicker_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r101); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.fromTime, $event) || (ctx_r1.fromTime = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function AddClassComponent_ng_template_85_Template_ngb_timepicker_ngModelChange_12_listener() { i0.ɵɵrestoreView(_r101); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.checkTime()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 198)(14, "label");
    i0.ɵɵtext(15, "End Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "ngb-timepicker", 199);
    i0.ɵɵtwoWayListener("ngModelChange", function AddClassComponent_ng_template_85_Template_ngb_timepicker_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r101); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.toTime, $event) || (ctx_r1.toTime = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function AddClassComponent_ng_template_85_Template_ngb_timepicker_ngModelChange_16_listener() { i0.ɵɵrestoreView(_r101); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.checkTime()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(17, AddClassComponent_ng_template_85_div_17_Template, 6, 0, "div", 200)(18, AddClassComponent_ng_template_85_div_18_Template, 9, 3, "div", 201)(19, AddClassComponent_ng_template_85_div_19_Template, 8, 2, "div", 201)(20, AddClassComponent_ng_template_85_div_20_Template, 8, 2, "div", 202)(21, AddClassComponent_ng_template_85_div_21_Template, 8, 2, "div", 202)(22, AddClassComponent_ng_template_85_div_22_Template, 5, 1, "div", 226);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 203)(24, "button", 24);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_85_Template_button_click_24_listener() { i0.ɵɵrestoreView(_r101); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitSlot()); });
    i0.ɵɵtext(25, "Submit");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r1.slotform);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.adminLogin == true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.adminLogin == false);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.fromTime);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(17, _c13))("meridian", ctx_r1.meridian)("spinners", ctx_r1.spinner);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.toTime);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(18, _c13))("meridian", ctx_r1.meridian)("spinners", ctx_r1.spinner);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.timeErr);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showZoomDetails && ctx_r1.allowZoomApi);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showZoomDetails && ctx_r1.allowZoomApi);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showZoomDetails && ctx_r1.allowZoomApi);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showZoomDetails && ctx_r1.allowZoomApi);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.editTime == false);
} }
function AddClassComponent_ng_template_87_div_6_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r114 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 250)(1, "i", 251);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_87_div_6_div_1_div_6_Template_i_click_1_listener() { i0.ɵɵrestoreView(_r114); const i_r115 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deletedNotes(i_r115, "add")); });
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_ng_template_87_div_6_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r116 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 250)(1, "i", 251);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_87_div_6_div_1_div_7_Template_i_click_1_listener() { i0.ɵɵrestoreView(_r116); const list_r117 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deletedNotes(list_r117, "edit")); });
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_ng_template_87_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 245)(1, "div", 246);
    i0.ɵɵelement(2, "span", 247);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 248)(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, AddClassComponent_ng_template_87_div_6_div_1_div_6_Template, 2, 0, "div", 249)(7, AddClassComponent_ng_template_87_div_6_div_1_div_7_Template, 2, 0, "div", 249);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r117 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", list_r117.note, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(list_r117.add_date);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "add");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "edit" || ctx_r1.type == "addEdit");
} }
function AddClassComponent_ng_template_87_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 243);
    i0.ɵɵtemplate(1, AddClassComponent_ng_template_87_div_6_div_1_Template, 8, 4, "div", 244);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r117 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r117.add_date != "00-00-0000");
} }
function AddClassComponent_ng_template_87_Template(rf, ctx) { if (rf & 1) {
    const _r113 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 188)(1, "h4", 237);
    i0.ɵɵtext(2, "Add Notes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 190);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_87_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r113); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onsave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 192)(5, "div", 238);
    i0.ɵɵtemplate(6, AddClassComponent_ng_template_87_div_6_Template, 2, 1, "div", 239);
    i0.ɵɵelementStart(7, "div", 240)(8, "app-tiny-mice", 241);
    i0.ɵɵlistener("emitEditorValue", function AddClassComponent_ng_template_87_Template_app_tiny_mice_emitEditorValue_8_listener($event) { i0.ɵɵrestoreView(_r113); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getEditorValue($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function AddClassComponent_ng_template_87_Template_app_tiny_mice_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r113); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.notes, $event) || (ctx_r1.notes = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 242)(10, "button", 23);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_87_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r113); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onsave()); });
    i0.ɵɵtext(11, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 24);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_87_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r113); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addNotes(ctx_r1.type)); });
    i0.ɵɵtext(13, "Add");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r1.showNotes);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("editorPatchValue", false)("height", 300)("id", "addNotes");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.notes);
    i0.ɵɵproperty("showDropBtn", false)("showInputBtn", false);
} }
function AddClassComponent_ng_template_89_Template(rf, ctx) { if (rf & 1) {
    const _r118 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 188)(1, "h4", 252)(2, "b");
    i0.ɵɵtext(3, "Draft Class");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 192)(5, "h5", 253);
    i0.ɵɵtext(6, " Class will be saved as draft. Add a schedule to activate. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 203)(8, "button", 254);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_89_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r118); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.close(); return i0.ɵɵresetView(ctx_r1.addclass(ctx_r1.type, 2)); });
    i0.ɵɵtext(9, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 173);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_89_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r118); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(11, "No");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_ng_template_91_Template(rf, ctx) { if (rf & 1) {
    const _r119 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 188)(1, "h4", 252)(2, "b");
    i0.ɵɵtext(3, "Zoom Meeting Link");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 192)(5, "h5", 253);
    i0.ɵɵtext(6, " Do you want to update the Zoom details for the schedule as well? ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 203)(8, "button", 254);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_91_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r119); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.close(); return i0.ɵɵresetView(ctx_r1.updateZoomLink()); });
    i0.ɵɵtext(9, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 173);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_91_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r119); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(11, "No");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_ng_template_93_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 261)(1, "div", 262)(2, "button", 263);
    i0.ɵɵtext(3, "No Attendance Found in past and present days");
    i0.ɵɵelementEnd()()();
} }
function AddClassComponent_ng_template_93_div_6_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 106);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r122 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r122);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r122);
} }
function AddClassComponent_ng_template_93_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r123 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 274)(1, "input", 275);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_93_div_6_div_5_Template_input_click_1_listener($event) { i0.ɵɵrestoreView(_r123); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.allPresent($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2, "\u00A0");
    i0.ɵɵelementStart(3, "label", 276);
    i0.ɵɵtext(4, "All Present");
    i0.ɵɵelementEnd()();
} }
function AddClassComponent_ng_template_93_div_6_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r124 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", row_r124.first_name, " ", row_r124.last_name, "");
} }
function AddClassComponent_ng_template_93_div_6_ngx_datatable_column_10_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r125 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r125.student_id);
} }
function AddClassComponent_ng_template_93_div_6_ngx_datatable_column_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-datatable-column", 277);
    i0.ɵɵtemplate(1, AddClassComponent_ng_template_93_div_6_ngx_datatable_column_10_ng_template_1_Template, 2, 1, "ng-template", 270);
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_93_div_6_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r126 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r126.grade_name);
} }
function AddClassComponent_ng_template_93_div_6_ngx_datatable_column_13_ng_template_1_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r132 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 284);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_93_div_6_ngx_datatable_column_13_ng_template_1_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r132); const row_r129 = i0.ɵɵnextContext().row; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.addMakeUpClass(row_r129)); });
    i0.ɵɵelement(1, "i", 285);
    i0.ɵɵtext(2, "Schedule Make-up Class ");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_93_div_6_ngx_datatable_column_13_ng_template_1_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 286);
    i0.ɵɵtext(1, "Make-up Class: ");
    i0.ɵɵelementStart(2, "span", 287);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "customDateFormat");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const row_r129 = i0.ɵɵnextContext().row;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", row_r129.makeup_class_name, " - ", i0.ɵɵpipeBind1(4, 2, row_r129.makeup_class_date), "");
} }
function AddClassComponent_ng_template_93_div_6_ngx_datatable_column_13_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r127 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 279)(1, "label", 280)(2, "input", 281);
    i0.ɵɵlistener("change", function AddClassComponent_ng_template_93_div_6_ngx_datatable_column_13_ng_template_1_Template_input_change_2_listener($event) { const ctx_r127 = i0.ɵɵrestoreView(_r127); const row_r129 = ctx_r127.row; const rowIndex_r130 = ctx_r127.rowIndex; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.attendance($event, row_r129.isSelected, "true", rowIndex_r130)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, "\u00A0 Present ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "label", 279)(5, "input", 281);
    i0.ɵɵlistener("change", function AddClassComponent_ng_template_93_div_6_ngx_datatable_column_13_ng_template_1_Template_input_change_5_listener($event) { const ctx_r130 = i0.ɵɵrestoreView(_r127); const row_r129 = ctx_r130.row; const rowIndex_r130 = ctx_r130.rowIndex; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.attendance($event, row_r129.isSelected, "false", rowIndex_r130)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, "\u00A0 Absent ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, AddClassComponent_ng_template_93_div_6_ngx_datatable_column_13_ng_template_1_button_7_Template, 3, 0, "button", 282)(8, AddClassComponent_ng_template_93_div_6_ngx_datatable_column_13_ng_template_1_span_8_Template, 5, 4, "span", 283);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r129 = ctx.row;
    const rowIndex_r130 = ctx.rowIndex;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("name", rowIndex_r130 + "rad");
    i0.ɵɵproperty("disabled", row_r129.attendance == "0")("checked", row_r129.attendance == "1");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("name", rowIndex_r130 + "rad");
    i0.ɵɵproperty("disabled", row_r129.attendance == "1" || row_r129.makeup_class_id != "")("checked", row_r129.attendance == "0");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", row_r129.makeup_class_id == "" && (row_r129 == null ? null : row_r129.attendance) == "0" && (ctx_r1.auth.getRoleId() == "2" || ctx_r1.auth.getRoleId() == "4" && ctx_r1.auth.getSessionData("teacher_type") != "0"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r129.makeup_class_id != "" && (row_r129 == null ? null : row_r129.attendance) == "0");
} }
function AddClassComponent_ng_template_93_div_6_ngx_datatable_column_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-datatable-column", 278);
    i0.ɵɵtemplate(1, AddClassComponent_ng_template_93_div_6_ngx_datatable_column_13_ng_template_1_Template, 9, 8, "ng-template", 270);
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_93_div_6_ngx_datatable_column_14_ng_template_1_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 291);
} }
function AddClassComponent_ng_template_93_div_6_ngx_datatable_column_14_ng_template_1_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 292);
} }
function AddClassComponent_ng_template_93_div_6_ngx_datatable_column_14_ng_template_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_93_div_6_ngx_datatable_column_14_ng_template_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r133 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 284);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_93_div_6_ngx_datatable_column_14_ng_template_1_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r133); const row_r134 = i0.ɵɵnextContext().row; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.addMakeUpClass(row_r134)); });
    i0.ɵɵelement(1, "i", 285);
    i0.ɵɵtext(2, "Schedule make-up Class ");
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_93_div_6_ngx_datatable_column_14_ng_template_1_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 286);
    i0.ɵɵtext(1, "Make-up Class: ");
    i0.ɵɵelementStart(2, "span", 287);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "customDateFormat");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const row_r134 = i0.ɵɵnextContext().row;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", row_r134.makeup_class_name, " - ", i0.ɵɵpipeBind1(4, 2, row_r134.makeup_class_date), "");
} }
function AddClassComponent_ng_template_93_div_6_ngx_datatable_column_14_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AddClassComponent_ng_template_93_div_6_ngx_datatable_column_14_ng_template_1_i_0_Template, 1, 0, "i", 289)(1, AddClassComponent_ng_template_93_div_6_ngx_datatable_column_14_ng_template_1_i_1_Template, 1, 0, "i", 290)(2, AddClassComponent_ng_template_93_div_6_ngx_datatable_column_14_ng_template_1_span_2_Template, 2, 0, "span", 186)(3, AddClassComponent_ng_template_93_div_6_ngx_datatable_column_14_ng_template_1_button_3_Template, 3, 0, "button", 282)(4, AddClassComponent_ng_template_93_div_6_ngx_datatable_column_14_ng_template_1_span_4_Template, 5, 4, "span", 283);
} if (rf & 2) {
    const row_r134 = ctx.row;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", (row_r134 == null ? null : row_r134.attendance) == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (row_r134 == null ? null : row_r134.attendance) == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r134.attendance == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r134.makeup_class_id == "" && (row_r134 == null ? null : row_r134.attendance) == "0" && (ctx_r1.auth.getRoleId() == "2" || ctx_r1.auth.getRoleId() == "4" && ctx_r1.auth.getSessionData("teacher_type") != "0"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r134.makeup_class_id != "" && (row_r134 == null ? null : row_r134.attendance) == "0");
} }
function AddClassComponent_ng_template_93_div_6_ngx_datatable_column_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-datatable-column", 278);
    i0.ɵɵtemplate(1, AddClassComponent_ng_template_93_div_6_ngx_datatable_column_14_ng_template_1_Template, 5, 5, "ng-template", 288);
    i0.ɵɵelementEnd();
} }
function AddClassComponent_ng_template_93_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r121 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 192)(1, "div", 264)(2, "div", 265)(3, "select", 266);
    i0.ɵɵlistener("ngModelChange", function AddClassComponent_ng_template_93_div_6_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r121); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dropdownChange($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function AddClassComponent_ng_template_93_div_6_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r121); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.studentAttendanceDate, $event) || (ctx_r1.studentAttendanceDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(4, AddClassComponent_ng_template_93_div_6_option_4_Template, 2, 2, "option", 88);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, AddClassComponent_ng_template_93_div_6_div_5_Template, 5, 0, "div", 267);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "ngx-datatable", 268, 14);
    i0.ɵɵlistener("select", function AddClassComponent_ng_template_93_div_6_Template_ngx_datatable_select_6_listener($event) { i0.ɵɵrestoreView(_r121); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onSelect($event)); });
    i0.ɵɵelementStart(8, "ngx-datatable-column", 269);
    i0.ɵɵtemplate(9, AddClassComponent_ng_template_93_div_6_ng_template_9_Template, 2, 2, "ng-template", 270);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, AddClassComponent_ng_template_93_div_6_ngx_datatable_column_10_Template, 2, 0, "ngx-datatable-column", 271);
    i0.ɵɵelementStart(11, "ngx-datatable-column", 272);
    i0.ɵɵtemplate(12, AddClassComponent_ng_template_93_div_6_ng_template_12_Template, 2, 1, "ng-template", 270);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, AddClassComponent_ng_template_93_div_6_ngx_datatable_column_13_Template, 2, 0, "ngx-datatable-column", 273)(14, AddClassComponent_ng_template_93_div_6_ngx_datatable_column_14_Template, 2, 0, "ngx-datatable-column", 273);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.studentAttendanceDate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.scheduleDates);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentAttendanceDate == ctx_r1.dateAddValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("rows", ctx_r1.studentRows)("columnMode", "force")("loadingIndicator", false)("headerHeight", 40)("footerHeight", 40)("limit", 10)("rowHeight", "auto")("selected", ctx_r1.selected)("selectionType", "checkbox");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.manageClass);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.studentAttendanceDate == ctx_r1.dateAddValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentAttendanceDate != ctx_r1.dateAddValue);
} }
function AddClassComponent_ng_template_93_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r135 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 203)(1, "button", 173);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_93_div_7_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r135); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.modalRef1.close()); });
    i0.ɵɵtext(2, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 293);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_93_div_7_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r135); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.updateStudentAttendance(ctx_r1.editData[0] == null ? null : ctx_r1.editData[0].students, "all")); });
    i0.ɵɵtext(4, "Submit");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.studentAttendanceDate != ctx_r1.dateAddValue);
} }
function AddClassComponent_ng_template_93_Template(rf, ctx) { if (rf & 1) {
    const _r120 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 255)(1, "h4", 256)(2, "b");
    i0.ɵɵtext(3, "Student Attendance");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "i", 257);
    i0.ɵɵlistener("click", function AddClassComponent_ng_template_93_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r120); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.modalRef1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, AddClassComponent_ng_template_93_div_5_Template, 4, 0, "div", 258)(6, AddClassComponent_ng_template_93_div_6_Template, 15, 15, "div", 259)(7, AddClassComponent_ng_template_93_div_7_Template, 5, 1, "div", 260);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.scheduleDates.length == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.scheduleDates.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.scheduleDates.length > 0);
} }
const colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF',
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA',
    },
};
export class AddClassComponent {
    constructor(route, formBuilder, classService, commondata, toastr, common, auth, brandservices, sanitizer, newSubject, router, validationService, config, modalService, datePipe) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.classService = classService;
        this.commondata = commondata;
        this.toastr = toastr;
        this.common = common;
        this.auth = auth;
        this.brandservices = brandservices;
        this.sanitizer = sanitizer;
        this.newSubject = newSubject;
        this.router = router;
        this.validationService = validationService;
        this.config = config;
        this.modalService = modalService;
        this.datePipe = datePipe;
        this.selected = [];
        this.scheduleDates = [];
        this.studentRows = [];
        this.setDate = new Date().toLocaleString('en-US', { timeZone: timeZone.location });
        this.myDpOptions = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat,
            disableUntil: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getDate() != 1 ? new Date(this.setDate).getMonth() + 1 : new Date(this.setDate).getMonth(),
                day: new Date(this.setDate).getDate() != 1 ? new Date(this.setDate).getDate() - 1 : new Date(this.setDate).getMonth() === (1 || 3 || 5 || 7 || 8 || 10 || 12) ? 31 : new Date(this.setDate).getMonth() === 2 ? 28 : 30,
            },
        };
        this.editMyDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
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
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat,
            disableUntil: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getDate() != 1 ? new Date(this.setDate).getMonth() + 1 : new Date(this.setDate).getMonth(),
                day: new Date(this.setDate).getDate() != 1 ? new Date(this.setDate).getDate() - 1 : new Date(this.setDate).getMonth() === (1 || 3 || 5 || 7 || 8 || 10 || 12) ? 31 : new Date(this.setDate).getMonth() === 2 ? 28 : 30,
            },
        };
        this.myDpOptions3 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: this.myDpOptions2.disableUntil.year,
                month: this.myDpOptions2.disableUntil.month,
                day: this.myDpOptions2.disableUntil.day
            },
        };
        this.pdflinks = [];
        this.tagArray = [];
        this.getTag = [];
        this.getVideo = [];
        this.calenderTimeSlot = [];
        this.browseAdd = [];
        this.fileContentid = [];
        this.allGrade = [];
        this.timeZoneList = [];
        this.availabilityTimeData = [];
        this.availabilityTimeData1 = [];
        this.mondayTimings = [];
        this.tuesdayTimings = [];
        this.wednesDayTimingsday = [];
        this.thursdayTimingsday = [];
        this.fridayTimingsday = [];
        this.saturdayTimingsday = [];
        this.sundayTimingsday = [];
        this.multipleteacher = [];
        this.scheduleClassType = 'daily';
        this.studentAttendanceDate = 0;
        this.days = [
            { id: 1, day: 'Monday', status: 0, show: true },
            { id: 2, day: 'tuesday', status: 0, show: true },
            { id: 3, day: 'wednesday', status: 0, show: true },
            { id: 4, day: 'thursday', status: 0, show: true },
            { id: 5, day: 'friday', status: 0, show: true },
            { id: 6, day: 'saturday', status: 0, show: true },
            { id: 7, day: 'sunday', status: 0, show: true },
        ];
        this.eventArr = [];
        this.view = CalendarView.Month;
        this.CalendarView = CalendarView;
        this.viewDate = new Date();
        this.viewDate1 = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-pencil letter pl-1 pr-1" aria-hidden="true"></i>',
                a11yLabel: 'Edit',
                onClick: ({ event }) => {
                    this.handleEvent('Edited', event, this.type);
                },
            },
        ];
        this.refresh = new Subject();
        this.events = [];
        this.currentCalendarshow = 'today';
        this.videoArray = [];
        this.notes = '';
        this.showNotes = [];
        this.batchId = [];
        this.manageClass = false;
        this.announcementListData = [{ value: '1', text: 'Do not allow announcements' }, { value: '2', text: 'Allow announcements only' },
            { value: '3', text: 'Allow announcements and comments' }];
        this.courseListData = [];
        this.newSubject.schoolChange.subscribe((res) => {
            if (res != '') {
                if (this.router.url.includes('create-class')) {
                    this.init(res);
                }
            }
            else {
                this.init(this.auth.getSessionData('school_id'));
            }
        });
        this.roleid = this.auth.getRoleId();
        this.allowSelect = true;
        this.newSubject.allowSchoolChange(this.allowSelect);
        const date = new Date();
        this.currentDate = this.datePipe.transform(date, 'dd-MM-yyyy');
        this.dateAddValue = this.datePipe.transform(date, dateOptions.dateFormat);
        this.firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        this.lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        this.webhost = this.config.getimgUrl();
        this.timeErr = false;
        this.imagepath = [];
        this.imagepaththumb = [];
        this.pdfpath = [];
        this.pdfpaththumb = [];
        this.meridian = true;
        this.spinner = false;
        this.editTime = false;
        this.dateValidation = true;
        this.showZoomDetails = false;
        this.schoolId = JSON.parse(this.auth.getSessionData('rista_data1'));
        if (this.auth.getRoleId() == '2' || this.auth.getRoleId() == '6') {
            this.adminLogin = true;
            this.schoolIdNum = this.auth.getSessionData('school_id');
            this.showBatch = true;
        }
        else if (this.auth.getRoleId() == '4') {
            this.adminLogin = false;
            this.schoolIdNum = this.schoolId.school_id;
            this.teacherName = this.auth.getSessionData('firstname') + ' ' + this.auth.getSessionData('lastname');
            if (this.schoolId.individual_teacher == '1') {
                this.showBatch = false;
            }
            else if (this.schoolId.individual_teacher == '0') {
                this.showBatch = true;
            }
        }
        this.classDetails = JSON.parse(this.auth.getSessionData('classData'));
        this.gradeSelectionAllow = this.auth.getSessionData('updatedStudent');
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.readonlyAllData = this.auth.getSessionData('readonly_data');
        if (this.readonlyAllData == 'true') {
            this.readOnly = true;
        }
        else if (this.readonlyAllData == null) {
            this.readOnly = false;
            this.readOnlyStart = false;
        }
        this.startdate = this.auth.getSessionData('readonly_startdate');
        if (this.startdate == 'yes') {
            this.acceptstartdate = true;
            this.readonlyAllData = true;
            this.readOnlyStart = true;
        }
        this.teacherType = this.auth.getRoleId() == '4' && this.schoolId.individual_teacher == '1' ? '1' : '0';
        this.classform = this.formBuilder.group({
            classname: ['', Validators.required],
            grade: [''],
            batch: [''],
            subject: ['', Validators.required],
            // timezone: ['', Validators.required],
            startDate: [''],
            endDate: [''],
            startTime: [''],
            endTime: [''],
            tag: '',
            video: '',
            meetingLink: '',
            meetingId: '',
            passcode: '',
            telephone: '',
            announcement_type: [null, Validators.required],
            status: ['1', Validators.required],
            onlinePerson: '2',
            add_course: [false],
            course_id: [null],
            registration_start_date: [''],
            registration_end_date: [''],
            slot_available: [''],
            amount: [''],
            discount: [''],
            actual_amount: [''],
            payment_type: [''],
            payment_recurring: ['']
        });
        this.slotform = this.formBuilder.group({
            teacherid: [''],
            meetingLink: ['', Validators.required],
            meetingId: [''],
            meetingPasscode: [''],
            telephone: ''
        });
        this.editslotform = this.formBuilder.group({
            teacherid: ['', Validators.required],
            selectedDate: ['', Validators.required],
            meetingLink: ['', Validators.required],
            meetingId: [''],
            meetingPasscode: [''],
            telephone: ''
        });
    }
    ngOnInit() {
        this.checkPerson();
        this.browseAdd = [];
        if (this.classDetails) {
            this.classDetails.content_id.forEach((item) => {
                this.browseAdd.push(item);
            });
            this.auth.removeSessionData('backOption');
        }
        this.additionalLink = false;
        if (this.type == 'edit' || this.type == 'addEdit') {
            this.editData = JSON.parse(this.auth.getSessionData('editclass'));
            console.log(this.editData, 'editData');
            this.class_id = this.editData[0].class_id;
            if (this.editData[0].classDate_status == '4' && this.roleid == '2' && this.auth.manageClass && (this.type == 'addEdit' || this.type == 'edit')) {
                this.readonlyAllData = false;
            }
            this.classform.controls.classname.patchValue(this.editData[0].class_name);
            if (this.editData[0].grade != '') {
                if (this.editData[0].grade.length >= 3) {
                    this.gradeSplit = [];
                    const grade = this.editData[0].grade.split(',');
                    for (let i = 0; i < grade.length; i++) {
                        this.gradeSplit.push(grade[i]);
                    }
                }
                else {
                    this.gradeSplit = [this.editData[0].grade];
                }
            }
            else {
                this.gradeSplit = null;
            }
            if (this.editData[0].subject != '') {
                if (this.editData[0].subject.length >= 3) {
                    this.subjectSplit = [];
                    const subject = this.editData[0].subject.split(',');
                    for (let i = 0; i < subject.length; i++) {
                        this.subjectSplit.push(subject[i]);
                    }
                }
                else {
                    this.subjectSplit = [this.editData[0].subject];
                }
            }
            else {
                this.subjectSplit = null;
            }
            this.classform.controls.grade.patchValue(this.gradeSplit);
            this.classform.controls.subject.patchValue(this.subjectSplit);
            if (this.editData[0].start_date != '0000-00-00') {
                const sd = this.editData[0].start_date.split('-');
                const sdObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) },
                    dateRange: null
                };
                this.classform.controls.startDate.patchValue(sdObject);
                // When editing, allow selecting any date (no date restrictions)
                this.myDpOptions1 = {};
                this.myDpOptions1 = {
                    dateRange: false,
                    dateFormat: dateOptions.pickerFormat,
                    firstDayOfWeek: 'su',
                };
            }
            else {
                this.classform.controls.startDate.patchValue(null);
            }
            if (this.editData[0].end_date != '0000-00-00') {
                const ed = this.editData[0].end_date.split('-');
                const edObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(ed[0]), parseInt(ed[1]) - 1, parseInt(ed[2])) },
                    dateRange: null
                };
                this.classform.controls.endDate.patchValue(edObject);
            }
            else {
                this.classform.controls.endDate.patchValue(null);
            }
            // if (this.editData[0].video_link != null) {
            //     for (let i = 0; i < this.editData[0].video_link.length; i++) {
            //         this.getVideo.push({
            //             display: this.editData[0].video_link[i],
            //             value: this.editData[0].video_link[i]
            //         });
            //     }
            // }
            this.videoArray = this.editData[0]?.video_link ? this.editData[0]?.video_link : [];
            // this.classform.controls.video.patchValue(this.getVideo);
            if (this.editData[0].tags != null) {
                for (let i = 0; i < this.editData[0].tags.length; i++) {
                    this.getTag.push({ display: this.editData[0].tags[i], value: this.editData[0].tags[i] });
                }
            }
            this.classform.controls.tag.patchValue(this.getTag);
            this.showNotes = this.editData[0].notes;
            // this.notesGroup.controls.notes.patchValue(this.editData[0].notes);
            this.classform.controls.meetingLink.patchValue(this.editData[0].meeting_link);
            this.classform.controls.meetingId.patchValue(this.editData[0].meeting_id);
            this.batchId = this.editData[0].batch_id;
            if (this.editData[0].batch_id != 0) {
                this.classform.controls.batch.patchValue(this.editData[0].batch_id);
            }
            else {
                this.classform.controls.batch.patchValue([]);
            }
            this.classform.controls.passcode.patchValue(this.editData[0].passcode);
            this.classform.controls.status.patchValue(this.editData[0].status);
            this.classform.controls.telephone.patchValue(this.editData[0].telephone_number);
            // this.classform.controls.timezone.patchValue(this.editData[0].time_zone_id);
            this.classform.controls.announcement_type.patchValue(this.editData[0].announcement_type);
            this.classform.controls.course_id.patchValue(this.editData[0]?.course_id ?
                this.editData[0]?.course_id != '0' ? this.editData[0]?.course_id : null : null);
            if (this.editData[0].registration_start_date != '0000-00-00' && this.editData[0].registration_start_date) {
                const rsd = this.editData[0].registration_start_date.split('-');
                const rsdObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(rsd[0]), parseInt(String(rsd[1] - 1)), parseInt(rsd[2])) },
                    dateRange: null
                };
                this.myDpOptions3 = {};
                this.myDpOptions3 = {
                    dateRange: false,
                    firstDayOfWeek: 'su',
                    dateFormat: dateOptions.pickerFormat,
                    disableUntil: {
                        year: parseInt(rsd[0]),
                        month: parseInt(rsd[1]),
                        day: parseInt(rsd[2]) - 1
                    },
                    calendarAnimation: {
                        in: 4,
                        out: 4
                    }
                };
                this.classform.controls.registration_start_date.patchValue(rsdObject);
            }
            else {
                this.classform.controls.registration_start_date.patchValue(null);
            }
            if (this.editData[0].registration_end_date != '0000-00-00' && this.editData[0].registration_end_date) {
                const red = this.editData[0].registration_end_date.split('-');
                const redObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(red[0]), parseInt(String(red[1] - 1)), parseInt(red[2])) },
                    dateRange: null
                };
                this.classform.controls.registration_end_date.patchValue(redObject);
            }
            else {
                this.classform.controls.registration_end_date.patchValue(null);
            }
            this.classform.controls.add_course.patchValue((this.editData[0]?.course_id && this.editData[0]?.course_id != '0') ?? false);
            console.log(this.classform.controls.add_course.value, 'add_course');
            if (this.editData[0].course_id != '0') {
                this.updateCourseField();
            }
            this.classform.controls.amount.patchValue(this.editData[0].cost ?? '');
            this.classform.controls.discount.patchValue(this.editData[0].discount_amount ?? '');
            this.classform.controls.actual_amount.patchValue(this.editData[0].actual_cost ?? '');
            this.classform.controls.slot_available.patchValue(this.editData[0].total_slots ?? '');
            this.classform.controls.payment_type.patchValue(this.editData[0].payment_type ?? '');
            if (this.classform.controls.payment_type.value == 'R') {
                this.setFormValidation('payment_recurring');
            }
            this.classform.controls.payment_recurring.patchValue(this.editData[0].payment_sub_type ?? '');
            this.availabilityTimeData1 = this.editData[0].availabilityDate;
            this.availabilityTimeData1.forEach((item, index) => {
                item.uniqueKey = index;
                if (item.slotday == 1) {
                    this.mondayTimings.push(item);
                }
                else if (item.slotday == 2) {
                    this.tuesdayTimings.push(item);
                }
                else if (item.slotday == 3) {
                    this.wednesDayTimingsday.push(item);
                }
                else if (item.slotday == 4) {
                    this.thursdayTimingsday.push(item);
                }
                else if (item.slotday == 5) {
                    this.fridayTimingsday.push(item);
                }
                else if (item.slotday == 6) {
                    this.saturdayTimingsday.push(item);
                }
                else if (item.slotday == 7) {
                    this.sundayTimingsday.push(item);
                }
            });
            this.oldavailability = this.availabilityTimeData1;
            if (this.editData.profile_url != '') {
                this.imagepath.push(this.editData[0].profile_url);
            }
            this.imagepaththumb.push(this.editData[0].profile_thumb_url);
            this.classform.controls.onlinePerson.patchValue(this.editData[0]?.class_type);
            this.showZoomDetails = this.editData[0]?.class_type == '1';
            this.checkPerson();
            console.log(this.editData[0].class_type, 'class_type');
        }
        else {
            this.batchId = [];
            this.showZoomDetails = false;
            this.classform.controls.classname.patchValue('');
            this.classform.controls.startDate.patchValue(null);
            this.classform.controls.endDate.patchValue(null);
            this.classform.controls.startTime.patchValue('');
            this.classform.controls.endTime.patchValue('');
            this.classform.controls.grade.patchValue(null);
            this.classform.controls.subject.patchValue(null);
            this.classform.controls.batch.patchValue([]);
            this.classform.controls.tag.patchValue('');
            this.classform.controls.video.patchValue('');
            this.classform.controls.meetingLink.patchValue('');
            // this.notesGroup.controls.notes.patchValue('');
            this.classform.controls.meetingId.patchValue('');
            const setting = JSON.parse(localStorage.getItem('settingList'));
            if (setting != null) {
                setting.forEach((items) => {
                    if (items.name == 'timezone') {
                        this.classform.controls.timezone.patchValue(items.value);
                    }
                });
            }
            this.classform.controls.passcode.patchValue('');
            this.classform.controls.status.patchValue('1');
            this.classform.controls.onlinePerson.patchValue('2');
            if (this.adminLogin) {
                this.editslotform.controls.teacherid.patchValue(null);
            }
            else {
                this.editslotform.controls.teacherid.patchValue(this.auth.getUserId());
            }
            this.slotform.controls.teacherid.patchValue(null);
            this.imagepath = [];
            this.imagepaththumb = [];
            this.imagepaththumb = [];
            this.gradeSplit = [];
        }
        this.fromTime = { hour: 0, minute: 0, seconds: 0 };
        this.toTime = { hour: 23, minute: 59, seconds: 0 };
    }
    init(id) {
        this.schoolIdNum = id;
        this.manageClass = this.auth.manageClass;
        this.getTimeZone();
        this.gradeList();
        this.subjectList();
        this.batchDataList();
        this.individualList();
        this.auth.getRoleId() == '2' ? this.getCourseList() : '';
    }
    dayClicked({ date, events }) {
        if (isSameMonth(date, this.viewDate)) {
            this.activeDayIsOpen = !((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0);
            this.viewDate = date;
        }
    }
    eventTimesChanged({ event, newStart, newEnd, }, type) {
        this.events = this.events.map((iEvent) => {
            if (iEvent === event) {
                return {
                    ...event,
                    start: newStart,
                    end: newEnd,
                };
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event, type);
    }
    handleEvent(action, event, type) {
        this.modalData = { event, action };
        this.auth.setSessionData('editTimeSlot', JSON.stringify(event));
        this.modalactivate = true;
        this.editTimeData = JSON.parse(this.auth.getSessionData('editTimeSlot'));
        if (type == 'add') {
            this.modalactivate = false;
        }
        else {
            if (this.editTimeData.status == '1') {
                const condtion = this.editData != undefined ? this.editData[0].class_id == this.editTimeData.class_id : false;
                if (condtion) {
                    if (this.auth.manageClass) {
                        if (this.modalactivate == true) {
                            if (this.editTimeData.slotdate != '0000-00-00') {
                                const sd = this.editTimeData.slotdate.split('-');
                                const sdObject = {
                                    isRange: false,
                                    singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) },
                                    dateRange: null
                                };
                                this.editslotform.controls.selectedDate.patchValue(sdObject);
                            }
                            else {
                                this.editslotform.controls.selectedDate.patchValue(null);
                            }
                            const stTime1 = this.editTimeData.slotstarttime.replace(' ', ':').split(':');
                            if (parseInt(stTime1[0]) < 12 && stTime1[2] != 'AM') {
                                stTime1[0] = parseInt(stTime1[0]) + 12;
                                const stObject1 = {
                                    hour: parseInt(stTime1[0]),
                                    minute: parseInt(stTime1[1]),
                                    seconds: 0
                                };
                                this.fromTime = stObject1;
                            }
                            else {
                                let newstart = stTime1[0];
                                if (stTime1[2] == 'AM') {
                                    if (newstart == 12) {
                                        stTime1[0] = 0;
                                    }
                                    else {
                                        newstart = stTime1[0];
                                    }
                                }
                                else if (stTime1[2] == 'PM') {
                                    if (newstart == 12) {
                                        stTime1[0] = 12;
                                    }
                                    else {
                                        newstart = stTime1[0];
                                    }
                                }
                                const stObject2 = {
                                    hour: parseInt(stTime1[0]),
                                    minute: parseInt(stTime1[1]),
                                    seconds: 0
                                };
                                this.fromTime = stObject2;
                            }
                            const etTime1 = this.editTimeData.slotendtime.replace(' ', ':').split(':');
                            if (parseInt(etTime1[0]) < 12 && etTime1[2] != 'AM') {
                                etTime1[0] = parseInt(etTime1[0]) + 12;
                                const etObject1 = {
                                    hour: parseInt(etTime1[0]),
                                    minute: parseInt(etTime1[1]),
                                    seconds: 0
                                };
                                this.toTime = etObject1;
                            }
                            else {
                                const etObject2 = {
                                    hour: parseInt(etTime1[0]),
                                    minute: parseInt(etTime1[1]),
                                    seconds: 0
                                };
                                this.toTime = etObject2;
                            }
                            console.log(this.editTimeData, 'editimedata');
                            this.editslotform.controls.meetingLink.patchValue(this.editTimeData.meeting_link);
                            this.editslotform.controls.meetingId.patchValue(this.editTimeData.meeting_id);
                            this.editslotform.controls.meetingPasscode.patchValue(this.editTimeData.passcode);
                            this.editslotform.controls.telephone.patchValue(this.editTimeData.telephone_number);
                            this.editslotform.controls.teacherid.patchValue(this.editTimeData.teacherid);
                        }
                        this.modalRef = this.modalService.open(this.editTimeDialog, { size: 'md' });
                    }
                }
                else {
                    this.toastr.error('Time Slot can\'t be updated for this class', 'Class');
                }
            }
            else if (this.editTimeData.status == '2') {
                this.toastr.error('Time Slot can\'t be updated for leave days', 'Class');
            }
        }
    }
    getEditorValue(event) {
        this.editorValue = event.editor;
        this.notes = event.content;
    }
    closeOpenMonthViewDay(type) {
        this.currentCalendarshow = type;
        this.activeDayIsOpen = false;
        const date = this.viewDate;
        this.firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        this.lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        this.getslotList(this.calendarId, 'calenderAction');
    }
    setView(view) {
        this.view = view;
    }
    ngAfterViewInit() {
    }
    ngOnChanges(changes) {
        console.log(this.classform.controls.startTime.value, 'this.classform.controls.startTime.');
    }
    onlinePerson() {
        this.showZoomDetails = this.classform.controls.onlinePerson.value == '1';
        console.log(this.showZoomDetails, 'showZoomDetails');
        this.checkPerson();
    }
    setCustomValidators(showZoom) {
        // showZoom == true show meeting elemnts | 1 hide
        if (showZoom) {
            this.allowZoomApi = true;
            // Class Zoom Details
            this.classform.controls.meetingLink.setValidators([Validators.required]);
            this.classform.controls.meetingLink.updateValueAndValidity();
            // Daily View Zoom Details
            this.slotform.controls.meetingLink.setValidators([Validators.required]);
            this.slotform.controls.meetingLink.updateValueAndValidity();
            // Edit Slot View Details
            this.editslotform.controls.meetingLink.setValidators([Validators.required]);
            this.editslotform.controls.meetingLink.updateValueAndValidity();
        }
        else {
            this.allowZoomApi = false;
            this.resetMeetingValidator('');
        }
    }
    resetMeetingValidator(value) {
        this.classform.controls.meetingLink.clearValidators();
        this.classform.controls.meetingLink.setValidators(value);
        this.classform.controls.meetingLink.updateValueAndValidity();
        this.slotform.controls.meetingLink.clearValidators();
        this.slotform.controls.meetingLink.setValidators(value);
        this.slotform.controls.meetingLink.updateValueAndValidity();
        this.editslotform.controls.meetingLink.clearValidators();
        this.editslotform.controls.meetingLink.setValidators(value);
        this.editslotform.controls.meetingLink.updateValueAndValidity();
    }
    checkAllowZoomApi() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolIdNum
        };
        this.classService.zoomPermission(data).subscribe((successData) => {
            if (successData.IsSuccess) {
                // value == 0 show meeting elemnts | 1 hide
                if (successData.ResponseObject[0].value == '0') {
                    this.setCustomValidators(true);
                }
                else if (successData.ResponseObject[0].value == '1') {
                    this.setCustomValidators(false);
                }
            }
        }, (error) => {
            console.error(error, 'time_slot');
        });
    }
    checkPerson() {
        if (this.showZoomDetails === true) {
            this.checkAllowZoomApi();
        }
        else {
            this.resetMeetingValidator('');
        }
    }
    gradeCheck() {
        this.gradeSelectionAllow = this.auth.getSessionData('updatedStudent');
        this.auth.setSessionData('studentlist', '');
    }
    eraseSessiondate(type) {
        this.auth.setSessionData('updatedStudent', 0);
        this.auth.setSessionData('studentlist', '');
        if (type == 'grade') {
            this.classform.controls.grade.patchValue(null);
        }
        else if (type == 'batch') {
            this.classform.controls.batch.patchValue([]);
        }
        this.modalRef.close();
    }
    close() {
        this.modalRef.close();
    }
    noClose(type) {
        if (type == 'grade') {
            if (this.editData[0].grade != '') {
                if (this.editData[0].grade.length >= 3) {
                    this.gradeSplit = [];
                    const grade = this.editData[0].grade.split(',');
                    for (let i = 0; i < grade.length; i++) {
                        this.gradeSplit.push(grade[i]);
                    }
                }
                else {
                    this.gradeSplit = [this.editData[0].grade];
                }
                this.classform.controls.grade.patchValue(this.gradeSplit);
            }
            else {
                this.gradeSplit = null;
            }
        }
        else if (type == 'batch') {
            if (this.editData[0].batch_id != 0) {
                this.classform.controls.batch.patchValue(this.editData[0].batch_id);
            }
            else {
                this.classform.controls.batch.patchValue([]);
            }
        }
        this.modalRef.close();
    }
    teacherSelection(data) {
        this.multipleteacher = [];
        data.filter((data1) => {
            this.slotform.controls.teacherid.value.filter((data2) => {
                if (data1.teacher_id == data2) {
                    this.multipleteacher.push(data1.teacher_name);
                }
            });
        });
        this.availabilityTimeData.forEach(item => {
            item.teacher_id = item.teacher_id == null || (item.teacher_id != this.slotform.controls.teacherid.value) ? this.slotform.controls.teacherid.value : item.teacher_id;
            item.teacher_name = this.multipleteacher;
            item.slotstarttime = this.startTime;
            item.slotendtime = this.endTime;
            item.meeting_link = this.slotform.controls.meetingLink.value == '' ? '' : this.slotform.controls.meetingLink.value;
            item.meeting_id = this.slotform.controls.meetingId.value == '' ? '' : this.slotform.controls.meetingId.value;
        });
    }
    newselection() {
        this.availabilityTimeData.forEach(item => {
            item.teacher_id = item.teacher_id == null || (item.teacher_id != this.slotform.controls.teacherid.value) ? this.slotform.controls.teacherid.value : item.teacher_id;
            item.teacher_name = this.multipleteacher;
            item.slotstarttime = this.startTime;
            item.slotendtime = this.endTime;
            item.meeting_link = this.slotform.controls.meetingLink.value == '' ? '' : this.slotform.controls.meetingLink.value;
            item.meeting_id = this.slotform.controls.meetingId.value == '' ? '' : this.slotform.controls.meetingId.value;
        });
    }
    submitSlot() {
        this.validatingTime(this.fromTime, this.toTime);
        /// checking time difference between two times
        const difference = this.getTimeDiference(this.fromTime, this.toTime);
        if (difference) {
            if (this.auth.getRoleId() == '2' || this.auth.getRoleId() == '6') {
                const teacher = this.slotform.controls.teacherid.value;
                this.teacher = teacher != null ? this.slotform.controls.teacherid.value : '0';
                // if (teacher != null) {
                //     this.teacher = this.slotform.controls.teacherid.value;
                // } else {
                //     this.teacher = '0';
                // }
            }
            else if (this.auth.getRoleId() == '4') {
                this.teacher = [this.auth.getUserId()];
                this.multipleteacher = [this.teacherName];
            }
            if (this.teacher != '0' && this.teacher.length != '0') {
                if (this.showZoomDetails == true) {
                    if (this.slotform.valid) {
                        this.slotCheck = true;
                    }
                    else {
                        this.slotCheck = false;
                        this.toastr.error('Please fill all the mandatory field');
                        this.validationService.validateAllFormFields(this.slotform);
                    }
                }
                else if (this.showZoomDetails == false) {
                    this.slotCheck = true;
                }
                if (this.slotCheck == true) {
                    this.days.forEach((item) => {
                        if (item.show == false) {
                            this.availabilityTimeData.push({
                                uniqueKey: this.uniqueKey,
                                teacher_id: this.teacher,
                                teacher_name: this.multipleteacher,
                                slotstarttime: this.startTime,
                                slotendtime: this.endTime,
                                slotday: item.id,
                                slotselected: 'true',
                                meeting_link: this.slotform.controls.meetingLink.value == '' ? '' : this.slotform.controls.meetingLink.value,
                                meeting_id: this.slotform.controls.meetingId.value == '' ? '' : this.slotform.controls.meetingId.value,
                                passcode: this.slotform.controls.meetingPasscode.value == '' ? '' : this.slotform.controls.meetingPasscode.value,
                                telephone_number: this.slotform.controls.telephone.value == '' ? '' : this.slotform.controls.telephone.value,
                            });
                            this.selectedday = item.id;
                        }
                    });
                    if (this.editTime == true) {
                        const checkData = this.availabilityTimeData[0];
                        this.oldTimeData = this.oldavailability.filter((item) => {
                            return parseInt(item.uniqueKey) !== parseInt(checkData.uniqueKey);
                        });
                    }
                    else {
                        this.oldTimeData = this.oldavailability;
                    }
                    const data21 = {
                        platform: 'web',
                        role_id: this.auth.getRoleId(),
                        user_id: this.auth.getUserId(),
                        previous_availabilityDate: this.oldTimeData == undefined ? [] : this.oldTimeData,
                        selected_availabilityDate: this.availabilityTimeData
                    };
                    this.classService.timeValidation(data21).subscribe((successData) => {
                        this.timeListSuccess(successData);
                    }, (error) => {
                        console.error(error, 'time_slot');
                    });
                    console.log(this.availabilityTimeData, 'newdatsadasdsadsadd');
                }
                else {
                    console.log(this.availabilityTimeData, 'newdatsad');
                }
            }
            else {
                this.toastr.error('Please select the teacher for this slot');
            }
        }
        else {
            this.toastr.error('End-Time Should be greater than Start-Time', 'Failed');
        }
    }
    timeListSuccess(successData) {
        if (successData.IsSuccess) {
            this.timeSlotData = successData.ResponseObject;
            this.toastr.success(successData.ResponseObject, 'Time Slot');
            const data = this.availabilityTimeData;
            data.forEach((item) => {
                this.availabilityTimeData1.push(item);
            });
            this.availabilityTimeData = [];
            this.mondayTimings = [];
            this.tuesdayTimings = [];
            this.wednesDayTimingsday = [];
            this.thursdayTimingsday = [];
            this.fridayTimingsday = [];
            this.saturdayTimingsday = [];
            this.sundayTimingsday = [];
            this.availabilityTimeData1 = this.availabilityTimeData1.filter((item) => {
                return item.slotselected == 'true';
            });
            this.availabilityTimeData1.forEach((item, index) => {
                item.uniqueKey = index;
                if (item.slotday == 1) {
                    this.mondayTimings.push(item);
                }
                else if (item.slotday == 2) {
                    this.tuesdayTimings.push(item);
                }
                else if (item.slotday == 3) {
                    this.wednesDayTimingsday.push(item);
                }
                else if (item.slotday == 4) {
                    this.thursdayTimingsday.push(item);
                }
                else if (item.slotday == 5) {
                    this.fridayTimingsday.push(item);
                }
                else if (item.slotday == 6) {
                    this.saturdayTimingsday.push(item);
                }
                else if (item.slotday == 7) {
                    this.sundayTimingsday.push(item);
                }
            });
            this.oldavailability = this.availabilityTimeData1;
            this.days.forEach((item) => {
                item.show = true;
                item.status = 0;
            });
            this.close();
            this.toTime = '';
            this.fromTime = '';
        }
        else {
            this.toastr.error(successData.ResponseObject, 'Time Slot');
            this.oldavailability = this.availabilityTimeData1;
            this.availabilityTimeData = [];
            this.days.forEach((item) => {
                item.show = true;
                item.status = 0;
            });
            for (let i = 0; i < this.days.length; i++) {
                if (this.selectedday == this.days[i].id) {
                    this.days[i].show = false;
                    this.days[i].status = 0;
                }
                else {
                    this.days[i].show = true;
                    this.days[i].status = 0;
                }
            }
        }
    }
    submitTimeSlot(id) {
        this.validatingTime(this.fromTime, this.toTime);
        this.editTimeData = JSON.parse(this.auth.getSessionData('editTimeSlot'));
        const selectedDay = this.datePipe.transform(this.editslotform.controls.selectedDate.value.singleDate.jsDate, 'EEEE');
        if (selectedDay == 'Monday') {
            this.slotday = '1';
        }
        else if (selectedDay == 'Tuesday') {
            this.slotday = '2';
        }
        else if (selectedDay == 'Wednesday') {
            this.slotday = '3';
        }
        else if (selectedDay == 'Thursday') {
            this.slotday = '4';
        }
        else if (selectedDay == 'Friday') {
            this.slotday = '5';
        }
        else if (selectedDay == 'Saturday') {
            this.slotday = '6';
        }
        else if (selectedDay == 'Sunday') {
            this.slotday = '7';
        }
        this.teacher = this.auth.getRoleId() == '4' ? [this.auth.getUserId()] :
            this.editslotform.controls.teacherid.value;
        // if (this.auth.getRoleId() == '2' || this.auth.getRoleId() == '6') {
        //     this.teacher = this.editslotform.controls.teacherid.value;
        // } else if (this.auth.getRoleId() == '4') {
        //     this.teacher = [this.auth.getUserId()];
        // }
        if (this.teacher.length != '0') {
            if (this.showZoomDetails == true) {
                if (this.editslotform.valid) {
                    this.slotCheck = true;
                }
                else {
                    this.slotCheck = false;
                    this.toastr.error('Please fill all the mandatory field');
                    this.validationService.validateAllFormFields(this.editslotform);
                }
            }
            else if (this.showZoomDetails == false) {
                this.slotCheck = true;
            }
            if (this.slotCheck == true) {
                this.availabilityTimeData.push({
                    date: this.datePipe.transform(this.editslotform.controls.selectedDate.value.singleDate.jsDate, 'yyyy-MM-dd'),
                    teacher_id: this.teacher,
                    slotstarttime: this.startTime,
                    slotendtime: this.endTime,
                    slotday: this.slotday,
                    slotselected: 'true',
                    status: '1',
                    meeting_link: this.editslotform.controls.meetingLink.value,
                    meeting_id: this.editslotform.controls.meetingId.value,
                    passcode: this.editslotform.controls.meetingPasscode.value,
                    telephone_number: this.editslotform.controls.telephone.value
                });
                this.availabilityTimeData.push({
                    date: this.editTimeData.slotdate,
                    teacher_id: this.editTimeData.teacherid,
                    slotstarttime: this.editTimeData.slotstarttime,
                    slotendtime: this.editTimeData.slotendtime,
                    slotday: this.editTimeData.slotday,
                    status: '2',
                    slotselected: 'true',
                    meeting_link: this.editTimeData.meeting_link,
                    meeting_id: this.editTimeData.meeting_id,
                    passcode: this.editTimeData.passcode,
                    telephone_number: this.editTimeData.telephone_number.value == '' ? '' : this.editTimeData.telephone_number,
                });
                const data = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    school_id: this.schoolIdNum,
                    class_id: this.editData[0].class_id,
                    availabilityDate: this.availabilityTimeData
                };
                this.classService.timeSlotedit(data).subscribe((successData) => {
                    this.timeSlotListSuccess(successData, id);
                }, (error) => {
                    console.error(error, 'time_slot');
                });
            }
            else {
            }
        }
        else {
            this.toastr.error('Please select the teacher name');
        }
    }
    timeSlotListSuccess(successData, id) {
        if (successData.IsSuccess) {
            this.timeSlotData = successData.ResponseObject;
            this.toastr.success(successData.ResponseObject, 'Time Slot');
            this.availabilityTimeData = [];
            this.getslotList(id, 'updatedCalendar');
            this.modalRef.close();
        }
        else {
            this.toastr.error(successData.ResponseObject, 'Time Slot');
        }
    }
    deleteTime(type, id, event) {
        if (type == 'monday') {
            this.mondayTimings.splice(id, 1);
        }
        else if (type == 'tuesday') {
            this.tuesdayTimings.splice(id, 1);
        }
        else if (type == 'wednesday') {
            this.wednesDayTimingsday.splice(id, 1);
        }
        else if (type == 'thursday') {
            this.thursdayTimingsday.splice(id, 1);
        }
        else if (type == 'friday') {
            this.fridayTimingsday.splice(id, 1);
        }
        else if (type == 'saturday') {
            this.saturdayTimingsday.splice(id, 1);
        }
        else if (type == 'sunday') {
            this.sundayTimingsday.splice(id, 1);
        }
        this.availabilityTimeData1 = this.availabilityTimeData1.filter((item) => {
            return parseInt(event.uniqueKey) != parseInt(item.uniqueKey);
        });
        this.oldTimeData = this.availabilityTimeData1;
        this.oldavailability = this.availabilityTimeData1;
    }
    getTimeDiference(fromtime, totime) {
        let startTime = parseInt(fromtime.hour) * 60;
        startTime = startTime + parseInt(fromtime.minute);
        let toTime = parseInt(totime.hour) * 60;
        toTime = toTime + parseInt(totime.minute);
        if ((toTime - startTime) >= 1) {
            return true;
        }
        else {
            return false;
        }
    }
    subjectList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolIdNum,
            type: 'active'
        };
        this.classService.subjectList(data).subscribe((successData) => {
            this.subjectListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_subjectList');
        });
    }
    subjectListSuccess(successData) {
        if (successData.IsSuccess) {
            this.subjectData = successData.ResponseObject;
        }
    }
    batchDataList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolIdNum,
            type: '2'
        };
        this.classService.batchList(data).subscribe((successData) => {
            this.batchListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_batchList');
        });
    }
    batchListSuccess(successData) {
        if (successData.IsSuccess) {
            this.batchData = successData.ResponseObject;
        }
    }
    getTimeZone() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.common.timeZone(data).subscribe((successData) => {
            this.timeZoneSuccess(successData);
        }, (error) => {
            console.log(error);
        });
    }
    timeZoneSuccess(successData) {
        if (successData.IsSuccess) {
            this.timeZoneList = successData.ResponseObject;
            console.log(this.timeZoneList, 'timeZoneList');
        }
    }
    individualList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolIdNum,
        };
        this.classService.individualTeacherList(data).subscribe((successData) => {
            this.individualListSuccess(successData);
        }, (error) => {
            console.error(error, 'errro_individualList');
        });
    }
    individualListSuccess(successData) {
        if (successData.IsSuccess) {
            this.teacherData = successData.ResponseObject;
        }
    }
    gradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolIdNum,
            type: 'active'
        };
        this.classService.gradeList(data).subscribe((successData) => {
            this.gradeListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_gradeList');
        });
    }
    gradeListSuccess(successData) {
        if (successData.IsSuccess) {
            this.gradeData = successData.ResponseObject;
        }
    }
    removeZoom() {
        if (this.showZoomDetails == false) {
            this.classform.controls.meetingLink.patchValue('');
            this.classform.controls.meetingId.patchValue('');
            this.classform.controls.passcode.patchValue('');
            // this.classform.controls.telephone.patchValue('');
            if (this.availabilityTimeData1.length > 0) {
                this.availabilityTimeData1.forEach((item) => {
                    item.meeting_id = '';
                    item.meeting_link = '';
                    item.passcode = '';
                    // item.telephone_number = '';
                });
            }
        }
    }
    writeNotes() {
        this.modalRef = this.modalService.open(this.writeNoteOpen, { size: 'xl' });
        this.notes = '';
    }
    addNotes(type) {
        if (type == 'add') {
            if (this.notes != '') {
                this.showNotes.unshift({
                    note: this.notes.replace(/\r?\n/g, '<br />'),
                    add_date: this.dateAddValue,
                    status: '1'
                });
                this.notes = '';
            }
            else {
                this.toastr.error('Notes Should not be Empty');
            }
        }
        else {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                class_id: this.class_id ? this.class_id : '',
                note: this.notes.replace(/\r?\n/g, '<br />'),
                status: '1',
                add_date: this.currentDate
            };
            this.classService.getNotesList(data).subscribe((successData) => {
                if (successData.IsSuccess) {
                    this.showNotes = successData.ResponseObject;
                    this.editorValue != '' ? this.editorValue.setContent('') : '';
                    this.notes = '';
                }
                else {
                    // this.toastr.error(successData.ErrorObject);
                    this.toastr.error('Notes Should not be Empty');
                }
            }, (error) => {
            });
        }
    }
    deletedNotes(value, type) {
        if (type == 'add') {
            this.showNotes.splice(value, 1);
        }
        else {
            console.log(value, 'value');
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                class_id: this.class_id ? this.class_id : '',
                note: value.note,
                status: '2',
                id: value.id,
                add_date: value.add_date
            };
            this.classService.getNotesList(data).subscribe((successData) => {
                if (successData.IsSuccess) {
                    this.showNotes = successData.ResponseObject;
                }
                else {
                    this.toastr.error(successData.ErrorObject);
                }
            }, (error) => {
            });
        }
    }
    submitDraftClass() {
        if (this.type == 'add' || this.type == 'edit') {
            if (this.classform.valid) {
                let submit = false;
                submit = this.classform.controls.startDate.value != null && this.classform.controls.endDate.value != null && this.availabilityTimeData1.length != 0;
                if (!submit) {
                    this.modalRef = this.modalService.open(this.classCheck);
                }
                else {
                    this.addclass(this.type, 2);
                }
            }
            else {
                this.validationService.validateAllFormFields(this.classform);
                this.toastr.error('Please Fill All The Mandatory Fields');
            }
        }
        else {
            this.addclass(this.type, 2);
        }
    }
    addclass(valve, id) {
        if (this.classform.controls.startDate.value != null && this.classform.controls.endDate.value != null) {
            const startdate = this.datePipe.transform(this.classform.controls.startDate.value.singleDate.jsDate, 'yyyy-MM-dd');
            const st = startdate.split('-');
            const endDate = this.datePipe.transform(this.classform.controls.endDate.value.singleDate.jsDate, 'yyyy-MM-dd');
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
        if (this.classform.controls.startDate.valid && this.classform.controls.endDate.valid) {
            if (this.dateValidation == true) {
                const validResourceLinks = this.videoArray.filter((item) => item.link && item.link.trim() !== '');
                const checkForValidResourceLink = validResourceLinks.some((item) => item.name == '');
                console.log(this.videoArray, 'videoArray');
                console.log(checkForValidResourceLink, 'checkForValidResourceLink');
                if (!checkForValidResourceLink) {
                    if (this.classform.valid) {
                        this.tagArray = [];
                        const tags = this.classform.controls.tag.value;
                        if (tags == '') {
                            this.tagArray = [];
                        }
                        else if (tags != '') {
                            for (let i = 0; i < tags.length; i++) {
                                this.tagArray.push(tags[i].value);
                            }
                        }
                        // const subjectData = this.classform.controls.subject.value;
                        // if (subjectData != null) {
                        //     if (subjectData.length >= 3) {
                        //         const sub = subjectData.split(',');
                        //         for (let i = 0; i < sub.length; i++) {
                        //             this.multiSubject.push(sub[i]);
                        //         }
                        //     } else {
                        //         this.multiSubject = subjectData;
                        //     }
                        // } else {
                        //     this.multiSubject = [];
                        // }
                        const upload = this.browseAdd;
                        if (upload) {
                            for (let i = 0; i < upload.length; i++) {
                                this.fileContentid.push(upload[i].id);
                            }
                        }
                        else {
                            this.fileContentid = [];
                        }
                        const batchId = this.treeviewCompoent.batchid;
                        this.removeZoom();
                        const data = {
                            platform: 'web',
                            role_id: this.auth.getRoleId(),
                            user_id: this.auth.getUserId(),
                            school_id: this.schoolIdNum,
                            name: this.classform.controls.classname.value,
                            start_date: this.classform.controls.startDate.value == null ? '' : this.datePipe.transform(this.classform.controls.startDate.value.singleDate.jsDate, 'yyyy-MM-dd'),
                            end_date: this.classform.controls.endDate.value == null ? '' : this.datePipe.transform(this.classform.controls.endDate.value.singleDate.jsDate, 'yyyy-MM-dd'),
                            start_time: this.classform.controls.startTime.value,
                            end_time: this.classform.controls.endTime.value == null ? '' : this.classform.controls.endTime.value == '' ? 1 : this.classform.controls.endTime.value,
                            grade: this.classform.controls.grade.value == null ? [] : this.classform.controls.grade.value,
                            batch_id: batchId ? batchId : [],
                            subject: this.classform.controls.subject.value == null ? [] : this.classform.controls.subject.value,
                            status: this.classform.controls.status.value,
                            tags: this.tagArray,
                            video_link: validResourceLinks,
                            students: this.schoolIdList,
                            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0',
                            meeting_link: this.classform.controls.meetingLink.value,
                            meeting_id: this.classform.controls.meetingId.value,
                            passcode: this.classform.controls.passcode.value,
                            profile_url: this.imagepath.toString(),
                            profile_thumb_url: this.imagepaththumb.toString(),
                            file_path: this.pdfpath,
                            links: this.pdflinks,
                            file_text: '',
                            content_type: '1',
                            content_id: this.fileContentid,
                            content_format: '1',
                            annotation: [],
                            answers: [],
                            allow_zoom_api: this.allowZoomApi ? '0' : '1',
                            availabilityDate: this.availabilityTimeData1,
                            individual_teacher: this.teacherType,
                            telephone_number: this.classform.controls.telephone.value,
                            class_id: this.class_id ? this.class_id : '',
                            class_status: this.classform.controls.startDate.value == null && this.classform.controls.endDate.value == null ? '1' : '0',
                            class_type: this.classform.controls.onlinePerson.value,
                            notes: this.showNotes,
                            announcement_type: this.classform.controls.announcement_type.value ? this.classform.controls.announcement_type.value
                                : '',
                            course_id: this.classform.controls.course_id.value ?? '',
                            registration_start_date: this.classform.controls.registration_start_date.value && this.classform.controls.registration_start_date.value != '' && this.classform.controls.registration_start_date.value != '0000-00-00'
                                ? this.datePipe.transform(this.classform.controls.registration_start_date.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                            registration_end_date: this.classform.controls.registration_end_date.value && this.classform.controls.registration_end_date.value != '' && this.classform.controls.registration_end_date.value != '0000-00-00'
                                ? this.datePipe.transform(this.classform.controls.registration_end_date.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                            payment_type: this.classform.controls.payment_type.value ?? '',
                            payment_sub_type: this.classform.controls.payment_recurring.value ?? '',
                            cost: this.classform.controls.amount.value ?? '',
                            discount: this.classform.controls.discount.value ?? '',
                            total_slots: this.classform.controls.slot_available.value ?? '',
                            add_course: this.classform.controls.add_course.value ? '1' : '0'
                        };
                        console.log(data, 'data serv');
                        if (valve == 'add') {
                            this.classService.addClasses(data).subscribe((successData) => {
                                this.addClassSuccess(successData, id);
                            }, (error) => {
                                this.addClassFailure(error);
                            });
                        }
                        else if (valve == 'edit') {
                            data['class_code'] = this.editData[0].class_code;
                            this.classService.editClasses(data).subscribe((successData) => {
                                this.editClassSuccess(successData, id);
                            }, (error) => {
                                this.addClassFailure(error);
                            });
                        }
                        else if (valve == 'addEdit') {
                            data['class_code'] = this.editData[0].class_code;
                            this.classService.editClasses(data).subscribe((successData) => {
                                this.editClassSuccess(successData, id);
                            }, (error) => {
                                this.addClassFailure(error);
                            });
                        }
                    }
                    else {
                        this.validationService.validateAllFormFields(this.classform);
                        this.toastr.error('Please Fill All The Mandatory Fields');
                    }
                }
                else {
                    this.videoArray.forEach(item => item.error = item.name == '' && item.link != '');
                    setTimeout(() => {
                        const element = document.getElementById('otherLink');
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }, 100);
                    this.toastr.error('Name is mandatory for each additional resource links');
                }
            }
            else {
                this.toastr.error('End Date Should be greater than Start Date');
            }
        }
        else {
            this.toastr.error('Please Select Future Date');
            this.validationService.validateAllFormFields(this.classform);
        }
    }
    addClassSuccess(successData, id) {
        if (successData.IsSuccess) {
            this.addClassDetails = successData.ResponseObject;
            this.auth.setSessionData('editclass', JSON.stringify(successData.ResponseObject));
            this.auth.setSessionData('card-data', JSON.stringify(successData.ResponseObject));
            this.auth.setSessionData('classView', false);
            this.auth.setSessionData('editView', true);
            this.auth.setSessionData('studentlist', '');
            this.auth.setSessionData('studentlist1', '');
            this.auth.removeSessionData('classData');
            this.auth.removeSessionData('readonly_data');
            this.auth.removeSessionData('updatedStudent');
            this.auth.removeSessionData('readonly_startdate');
            const redirectSchedulePage = !!this.auth.getSessionData('enterThroughSchedule');
            console.log(redirectSchedulePage, 'redirectSchedulePage');
            if (id == 2) {
                // this.router.navigate(['/class/submit-class/2']);
                this.router.navigate(['/class/list-class']);
            }
            else {
                if (redirectSchedulePage == true) {
                    this.auth.removeSessionData('enterThroughSchedule');
                    this.router.navigate(['/schedule/schedule-page']);
                }
                else {
                    this.router.navigate(['/class/list-class']);
                }
            }
            // if (successData.Message != '') {
            //     this.toastr.info(successData.Message);
            // }
        }
        else {
            this.toastr.error(successData.ErrorObject, 'Class');
        }
    }
    editClassSuccess(successData, id) {
        if (successData.IsSuccess) {
            this.addClassDetails = successData.ResponseObject;
            this.auth.setSessionData('editclass', JSON.stringify(successData.ResponseObject));
            this.auth.setSessionData('card-data', JSON.stringify(successData.ResponseObject));
            if (id == 0) {
                this.submitClass();
            }
            else {
                this.auth.setSessionData('classView', true);
                this.auth.removeSessionData('readonly_data');
                this.auth.removeSessionData('updatedStudent');
                this.auth.removeSessionData('readonly_startdate');
                this.auth.removeSessionData('class-curriculum');
                const redirectSchedulePage = !!this.auth.getSessionData('enterThroughSchedule');
                console.log(redirectSchedulePage, 'redirectSchedulePage');
                if (id == 2) {
                    if (this.addClassDetails[0].class_status != '1' && this.roleid != '2') {
                        // this.router.navigate(['/class/submit-class/2']);
                        this.router.navigate(['/class/list-class']);
                    }
                    else {
                        this.auth.setSessionData('classView', false);
                        this.auth.setSessionData('editView', true);
                        // this.router.navigate(['/class/list-class']);
                        this.router.navigate(['/class/list-class']);
                    }
                }
                else {
                    if (redirectSchedulePage == true) {
                        this.auth.removeSessionData('enterThroughSchedule');
                        this.router.navigate(['/schedule/schedule-page']);
                    }
                    else {
                        this.router.navigate(['/class/list-class']);
                    }
                }
            }
            // if (successData.Message != '') {
            //     this.toastr.info(successData.Message);
            // }
        }
        else {
            this.toastr.error(successData.ErrorObject, 'Class');
        }
    }
    addClassFailure(error) {
        console.log(error, 'error');
        this.toastr.error(error.ErrorObject, 'Class');
    }
    curicullum(value, id) {
        this.addclass(value, id);
    }
    submitClass() {
        this.choosedData = JSON.parse(this.auth.getSessionData('card-data'));
        this.temp = JSON.parse(this.auth.getSessionData('studentlist1'));
        console.log(this.temp);
        if (this.choosedData[0].grade.length >= 3) {
            const splitGrade = this.choosedData[0].grade.split(',');
            for (let i = 0; i < splitGrade.length; i++) {
                this.allGrade.push(splitGrade[i]);
            }
        }
        else {
            this.allGrade.push(this.choosedData[0].grade);
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
            students: this.temp
        };
        this.classService.submit(data).subscribe((successData) => {
            this.submitClassSuccess(successData);
        }, (error) => {
            this.submitClassFailure(error);
        });
    }
    submitClassSuccess(successData) {
        if (successData.IsSuccess) {
            this.auth.setSessionData('submit-data', JSON.stringify(successData.ResponseObject[0]));
            this.auth.setSessionData('class-curriculum', true);
            this.router.navigate(['/class/topicsAndCurriculum/1']);
        }
    }
    submitClassFailure(error) {
        console.log(error, 'error');
        this.toastr.error(error.ResponseObject, 'Class');
    }
    numberPattern(event) {
        this.validationService.numberValidate1(event);
    }
    onDateChanged(event) {
        this.myDpOptions1 = {};
        this.myDpOptions1 = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat,
            disableUntil: {
                year: event.singleDate.date.year,
                month: event.singleDate.date.month,
                day: event.singleDate.date.day - 1
            },
        };
    }
    onDateChanged1(event) {
        this.myDpOptions1 = {};
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: this.myDpOptions.disableUntil.year,
                month: this.myDpOptions.disableUntil.month,
                day: this.myDpOptions.disableUntil.day != 1 ? this.myDpOptions.disableUntil.day : this.myDpOptions.disableUntil.day - 2,
            },
        };
    }
    onDateChanged2(event) {
        console.log(event, 'event-date');
        this.myDpOptions3 = {};
        this.myDpOptions3 = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat,
            disableUntil: {
                year: event.singleDate.date.year,
                month: event.singleDate.date.month,
                day: event.singleDate.date.day - 1
            },
            calendarAnimation: {
                in: 4,
                out: 4
            }
        };
    }
    onDateChanged3(event) {
        this.myDpOptions3 = {};
        this.myDpOptions3 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: this.myDpOptions2.disableUntil.year,
                month: this.myDpOptions2.disableUntil.month,
                day: this.myDpOptions2.disableUntil.day != 1 ? this.myDpOptions2.disableUntil.day : this.myDpOptions2.disableUntil.day - 2,
            },
        };
    }
    encodeImageFileAsURL(event) {
        for (let i = 0; i < event.target.files.length; i++) {
            const getUrlEdu = '';
            const imgDetails = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const url = event.target.result;
                const getUrl = url.split(',');
                const pic = imgDetails.type.split('/');
                if (pic[1] == 'jpeg' || pic[1] == 'png' || pic[1] == 'jpg') {
                    this.onUploadKYCFinished(getUrl, imgDetails);
                }
                else {
                    this.toastr.error('JPEG ,PNG & JPG are the required type');
                }
            };
            reader.readAsDataURL(event.target.files[i]);
        }
    }
    onUploadKYCFinished(getUrlEdu, imageList) {
        this.recordBase64Url = getUrlEdu[1];
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            image_path: [{
                    image: this.recordBase64Url,
                    size: imageList.size,
                    type: imageList.type,
                    name: imageList.name
                }],
            uploadtype: 'teacher'
        };
        this.common.fileUpload(data).subscribe((successData) => {
            this.uploadSuccess(successData);
        }, (error) => {
            this.uploadFailure(error);
        });
    }
    uploadSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.imagepath = [];
            this.imagepaththumb = [];
            this.imagepath.push(successData.ResponseObject.imagepath[0].original_image_url);
            this.imagepaththumb.push(successData.ResponseObject.imagepath[0].resized_url);
        }
        else {
            this.toastr.error('Invalid File Format');
        }
    }
    uploadFailure(error) {
        console.log(error, 'error');
    }
    deleteImg() {
        this.imagepath = [];
        this.clearUploadfilename();
    }
    clearUploadfilename() {
        this.myInputVariable.nativeElement.value = '';
    }
    showModal() {
        this.modalRef = this.modalService.open(this.Content, { size: 'lg', backdrop: 'static' });
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    showAttendance(data, slotday) {
        console.log(data, 'dta fet');
        if (data.shechdule_id != undefined && data.shechdule_id != 'scheduleid') {
            this.editData[0].slotDay = slotday;
            this.editData[0].start_time = data.slotstarttime;
            this.editData[0].end_time = data.slotendtime;
            this.editData[0].shechdule_id = data.shechdule_id;
            this.selected = [];
            data.slotDay = slotday;
            console.log(this.editData[0], 'dta this.editData[0]');
            this.getScheduleDateList(data);
        }
        else {
            this.toastr.error('Your schedule not saved yet', 'Failed');
        }
    }
    showSlot(type) {
        this.days.forEach((item) => {
            item.show = true;
            item.status = 0;
        });
        this.days[type - 1].show = false;
        this.availabilityTimeData = [];
        this.slotform.controls.meetingLink.patchValue(this.classform.controls.meetingLink.value);
        this.slotform.controls.meetingId.patchValue(this.classform.controls.meetingId.value);
        this.slotform.controls.meetingPasscode.patchValue(this.classform.controls.passcode.value);
        this.slotform.controls.telephone.patchValue(this.classform.controls.telephone.value);
        if (this.adminLogin) {
            this.slotform.controls.teacherid.patchValue(null);
        }
        else {
            this.slotform.controls.teacherid.patchValue(this.auth.getUserId());
        }
        this.fromTime = { hour: 0, minute: 0, seconds: 0 };
        this.toTime = { hour: 23, minute: 59, seconds: 0 };
        this.editTime = false;
        this.modalRef = this.modalService.open(this.addSlot);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
        this.daytype = type;
    }
    editSlot(event, id) {
        if (this.auth.manageClass) {
            this.multipleteacher = event.teacher_name;
            this.uniqueKey = event.uniqueKey;
            this.days[event.slotday - 1].show = false;
            event.slotselected = 'false';
            this.slotform.controls.teacherid.patchValue(event.teacher_id);
            this.slotform.controls.meetingLink.patchValue(event.meeting_link);
            this.slotform.controls.meetingId.patchValue(event.meeting_id);
            this.slotform.controls.meetingPasscode.patchValue(event.passcode);
            this.slotform.controls.telephone.patchValue(event.telephone_number);
            const stTime1 = event.slotstarttime.replace(' ', ':').split(':');
            if (parseInt(stTime1[0]) < 12 && stTime1[2] != 'AM') {
                stTime1[0] = parseInt(stTime1[0]) + 12;
                const stObject1 = {
                    hour: parseInt(stTime1[0]), minute: parseInt(stTime1[1]), seconds: 0
                };
                this.fromTime = stObject1;
            }
            else {
                let newstart = stTime1[0];
                if (stTime1[2] == 'AM') {
                    if (newstart == 12) {
                        stTime1[0] = 0;
                    }
                    else {
                        newstart = stTime1[0];
                    }
                }
                else if (stTime1[2] == 'PM') {
                    if (newstart == 12) {
                        stTime1[0] = 12;
                    }
                    else {
                        newstart = stTime1[0];
                    }
                }
                const stObject2 = {
                    hour: parseInt(stTime1[0]), minute: parseInt(stTime1[1]), seconds: 0
                };
                this.fromTime = stObject2;
            }
            const etTime1 = event.slotendtime.replace(' ', ':').split(':');
            if (parseInt(etTime1[0]) < 12 && etTime1[2] != 'AM') {
                etTime1[0] = parseInt(etTime1[0]) + 12;
                const etObject1 = {
                    hour: parseInt(etTime1[0]), minute: parseInt(etTime1[1]), seconds: 0
                };
                this.toTime = etObject1;
            }
            else {
                const etObject2 = {
                    hour: parseInt(etTime1[0]), minute: parseInt(etTime1[1]), seconds: 0
                };
                this.toTime = etObject2;
            }
            this.editTime = true;
            this.modalRef = this.modalService.open(this.addSlot);
            this.modalRef.result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
            this.daytype = event.slotday;
        }
        else {
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
    onsave() {
        this.clearnote = '';
        this.modalRef.close();
        this.link1 = '';
        this.additionalLink = '';
    }
    onSave1() {
        this.modalRef.close();
        console.log(this.daytype, this.days, this.daytype - 1, 'dayType');
        this.days[this.daytype - 1].show = true;
        this.availabilityTimeData1.forEach((item) => {
            item.slotselected = 'true';
        });
        this.editslotform.reset();
        if (this.adminLogin) {
            this.editslotform.controls.teacherid.patchValue(null);
        }
        else {
            this.editslotform.controls.teacherid.patchValue(this.auth.getUserId());
        }
    }
    changeStartTime() {
        if (this.classform.controls.startDate.value.singleDate.jsDate && this.classform.controls.endDate.value.singleDate.jsDate) {
            const startDate = this.datePipe.transform(this.classform.controls.startDate.value.singleDate.jsDate, 'yyyy-MM-dd');
            const endDate = this.datePipe.transform(this.classform.controls.endDate.value.singleDate.jsDate, 'yyyy-MM-dd');
            if (this.classform.controls.startTime.value && this.classform.controls.endTime.value) {
                const startTime = parseInt(this.classform.controls.startTime.value.hour);
                const startTimeHour = parseInt(this.classform.controls.startTime.value.minute);
                const endTime = parseInt(this.classform.controls.endTime.value.hour);
                const endTimeHour = parseInt(this.classform.controls.endTime.value.minute);
                const totalStartTimeMins = (startTime * 60) + startTimeHour;
                const totalendTimeHour = (endTime * 60) + endTimeHour;
                if (startDate == endDate) {
                    if (totalStartTimeMins < totalendTimeHour) {
                        this.timeErr = false;
                    }
                    else {
                        this.timeErr = true;
                    }
                }
                else {
                    this.timeErr = false;
                }
            }
        }
    }
    checkTime() {
        if (this.fromTime == undefined || this.toTime == undefined) {
            this.timeErr = true;
        }
        else {
            const fromTime = this.fromTime.hour * 60;
            const fullFromTime = fromTime + this.fromTime.minute;
            const toTime = this.toTime.hour * 60;
            const fulltoTime = toTime + this.toTime.minute;
            if (fulltoTime > fullFromTime) {
                this.timeErr = false;
            }
            else {
                this.timeErr = true;
            }
        }
        return this.timeErr;
    }
    selectDate(id) {
        if (this.auth.getRoleId() == '2' || this.auth.getRoleId() == '6') {
            this.teacher = this.slotform.controls.teacherid.value;
        }
        else if (this.auth.getRoleId() == '4') {
            this.teacher = [this.auth.getUserId()];
            this.multipleteacher = [this.teacherName];
        }
        const timeValid = this.checkTime();
        if (!timeValid) {
            this.validatingTime(this.fromTime, this.toTime);
            for (let i = 0; i < this.days.length; i++) {
                if (this.days[i].id == id) {
                    if (this.days[i].status == 0 || !this.days[i].show) {
                        this.availabilityTimeData.push({
                            teacher_id: this.teacher,
                            teacher_name: this.multipleteacher,
                            slotstarttime: this.startTime,
                            slotendtime: this.endTime,
                            slotday: this.days[i].id,
                            slotselected: 'true',
                            meeting_link: this.slotform.controls.meetingLink.value == '' ? '' : this.slotform.controls.meetingLink.value,
                            meeting_id: this.slotform.controls.meetingId.value == '' ? '' : this.slotform.controls.meetingId.value,
                            passcode: this.slotform.controls.meetingPasscode.value == '' ? '' : this.slotform.controls.meetingPasscode.value,
                            telephone_number: this.slotform.controls.telephone.value == '' ? '' : this.slotform.controls.telephone.value,
                        });
                        this.days[i].status = 1;
                    }
                    else {
                        this.availabilityTimeData.forEach((item) => {
                            if (item.slotday == this.days[i].id) {
                                const index = this.availabilityTimeData.indexOf(item);
                                this.availabilityTimeData.splice(index, 1);
                            }
                        });
                        this.days[i].status = 0;
                    }
                }
            }
        }
    }
    // chane the user selected time format to that we want to send backend
    validatingTime(fromTime, endTIme) {
        const setTime = fromTime;
        const hr = setTime.hour < '10' ? '0' + setTime.hour : setTime.hour.toString();
        const mns = setTime.minute < '10' ? '0' + setTime.minute : setTime.minute.toString();
        let hours = hr[0] + hr[1];
        const min = mns[0] + mns[1];
        if (parseInt(hours) < 12) {
            if (hours == 0) {
                hours = 12;
            }
            this.startTime = hours + ':' + min + ' AM';
        }
        else if (parseInt(hours) > 12) {
            hours = hours - 12;
            hours = (hours < 10) ? '0' + hours : hours;
            this.startTime = hours + ':' + min + ' PM';
        }
        else {
            this.startTime = hours + ':' + min + ' PM';
        }
        const time1 = endTIme;
        const hr1 = time1.hour < '10' ? '0' + time1.hour : time1.hour.toString();
        const mns1 = time1.minute < '10' ? '0' + time1.minute : time1.minute.toString();
        let hours1 = hr1[0] + hr1[1];
        const min1 = mns1[0] + mns1[1];
        if (parseInt(hours1) < 12) {
            if (hours1 == 0) {
                hours1 = 12;
            }
            this.endTime = hours1 + ':' + min1 + ' AM';
        }
        else if (parseInt(hours1) > 12) {
            hours1 = hours1 - 12;
            hours1 = (hours1 < 10) ? '0' + hours1 : hours1;
            this.endTime = hours1 + ':' + min1 + ' PM';
        }
        else {
            this.endTime = hours1 + ':' + min1 + ' PM';
        }
    }
    scheduleClass(type, id) {
        if (type != 'calendar') {
            this.scheduleClassType = type;
        }
        else {
            this.calendarId = id;
            this.getslotList(id, type);
        }
    }
    getslotList(id, type) {
        let startDate = '';
        let endDate = '';
        let calendarstartDate = '';
        let calendarendDate = '';
        if (id == '1') {
            this.classname = this.classform.controls.classname.value;
        }
        else if (id == '2') {
            this.classname = '';
        }
        if (type == 'calendar') {
            calendarstartDate = this.datePipe.transform(this.firstDay, 'yyyy-MM-dd');
            calendarendDate = this.datePipe.transform(this.lastDay, 'yyyy-MM-dd');
            if (this.classform.controls.startDate.value) {
                if (this.classform.controls.startDate.value.singleDate.jsDate != 'Invalid Date') {
                    startDate = this.datePipe.transform(this.classform.controls.startDate.value.singleDate.jsDate, 'yyyy-MM-dd');
                }
            }
            if (this.classform.controls.endDate.value) {
                if (this.classform.controls.endDate.value.singleDate.jsDate != 'Invalid Date') {
                    endDate = this.datePipe.transform(this.classform.controls.endDate.value.singleDate.jsDate, 'yyyy-MM-dd');
                }
            }
        }
        else if (type == 'updatedCalendar') {
            calendarstartDate = this.datePipe.transform(this.firstDay, 'yyyy-MM-dd');
            calendarendDate = this.datePipe.transform(this.lastDay, 'yyyy-MM-dd');
            this.classname = '';
            if (this.classform.controls.startDate.value) {
                if (this.classform.controls.startDate.value.singleDate.jsDate != 'Invalid Date') {
                    startDate = this.datePipe.transform(this.classform.controls.startDate.value.singleDate.jsDate, 'yyyy-MM-dd');
                }
            }
            if (this.classform.controls.endDate.value) {
                if (this.classform.controls.endDate.value.singleDate.jsDate != 'Invalid Date') {
                    endDate = this.datePipe.transform(this.classform.controls.endDate.value.singleDate.jsDate, 'yyyy-MM-dd');
                }
            }
        }
        else if (type == 'calenderAction') {
            calendarstartDate = this.datePipe.transform(this.firstDay, 'yyyy-MM-dd');
            calendarendDate = this.datePipe.transform(this.lastDay, 'yyyy-MM-dd');
            if (this.classform.controls.startDate.value != '') {
                startDate = this.datePipe.transform(this.classform.controls.startDate.value.singleDate.jsDate, 'yyyy-MM-dd');
            }
            else if (this.classform.controls.startDate.value == '') {
                startDate = '';
            }
            if (this.classform.controls.endDate.value != '') {
                endDate = this.datePipe.transform(this.classform.controls.endDate.value.singleDate.jsDate, 'yyyy-MM-dd');
            }
            else if (this.classform.controls.endDate.value == '') {
                endDate = '';
            }
        }
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolIdNum,
            from_date: calendarstartDate,
            to_date: calendarendDate,
            class_from_date: startDate,
            class_to_date: endDate,
            batch_id: this.classform.controls.batch.value.length != 0 ? this.classform.controls.batch.value : [],
            class_name: this.classname,
            availabilityDate: this.availabilityTimeData1,
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0',
            class_id: id == '2' ? this.class_id : '',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        this.classService.slotList(data).subscribe((successData) => {
            this.getslotListSuccess(successData, id);
        }, (error) => {
            console.error(error, 'slotList');
        });
    }
    getslotListSuccess(successData, id) {
        if (successData.IsSuccess) {
            this.scheduleClassType = 'calendar';
            const gradeData = successData.ResponseObject;
            this.eventArr = [];
            this.calenderTimeSlot = [];
            gradeData.forEach((item) => {
                item.event_details.forEach((data) => {
                    let convertedStartTime = '';
                    let convertedEndTime = '';
                    if (data.slotstarttime || data.slotendtime) {
                        convertedStartTime = this.convertTo24HourFormat(data.slotstarttime);
                        convertedEndTime = this.convertTo24HourFormat(data.slotendtime);
                    }
                    else {
                        convertedStartTime = '';
                        convertedEndTime = '';
                    }
                    if (data.status == 1) {
                        if (id == '1') {
                            this.calenderTimeSlot.push({
                                start: new Date(item.date + ' ' + convertedStartTime),
                                end: new Date(item.date + ' ' + convertedEndTime),
                                slotdate: item.date,
                                slotstarttime: data.slotstarttime,
                                slotendtime: data.slotendtime,
                                teacherid: data.teacher_id,
                                teacher_name: data.teacher_name,
                                slotday: item.slotday,
                                slotselected: item.slotselected,
                                status: data.status,
                                title: `${data.message + ' at ' + data.slotstarttime + '-' + data.slotendtime + ' by ' + data.teacher_name}`,
                                color: colors.blue,
                                class_id: data.class_id,
                                titleName: data.message,
                            });
                            this.eventArr.push({
                                start: new Date(item.date + ' ' + convertedStartTime),
                                slotdate: item.date,
                                slotstarttime: data.slotstarttime,
                                slotendtime: data.slotendtime,
                                teacherid: data.teacher_id,
                                teacher_name: data.teacher_name,
                                slotday: item.slotday,
                                slotselected: item.slotselected,
                                status: data.status,
                                title: `${data.message + ' at ' + data.slotstarttime + '-' + data.slotendtime + ' by ' + data.teacher_name}`,
                                color: colors.blue,
                                class_id: data.class_id,
                                titleName: data.message,
                                telephone_number: data.telephone_number,
                                allDay: true,
                                resizable: {
                                    beforeStart: true,
                                    afterEnd: true,
                                },
                                draggable: false,
                            });
                        }
                        else if (id == '2') {
                            if (this.datePipe.transform(this.viewDate1, 'yyyy-MM-dd') <= this.datePipe.transform(item.date, 'yyyy-MM-dd')) {
                                if (this.auth.manageClass) {
                                    this.calenderTimeSlot.push({
                                        slotdate: item.date,
                                        slotday: item.slotday,
                                        slotselected: item.slotselected,
                                        slotstarttime: data.slotstarttime,
                                        slotendtime: data.slotendtime,
                                        teacherid: data.teacher_id,
                                        teacher_name: data.teacher_name,
                                        status: data.status,
                                        telephone_number: data.telephone_number,
                                        title: `${data.message + ' at ' + data.slotstarttime + '-' + data.slotendtime + ' by ' + data.teacher_name}`,
                                        color: colors.blue,
                                        class_id: data.class_id,
                                        meeting_link: data.meeting_link,
                                        meeting_id: data.meeting_id,
                                        passcode: data.passcode,
                                        titleName: data.message,
                                        actions: this.actions,
                                        start: new Date(item.date + ' ' + convertedStartTime),
                                        end: new Date(item.date + ' ' + convertedEndTime),
                                    });
                                    this.eventArr.push({
                                        start: new Date(item.date + ' ' + convertedStartTime),
                                        slotdate: item.date,
                                        slotday: item.slotday,
                                        slotselected: item.slotselected,
                                        slotstarttime: data.slotstarttime,
                                        slotendtime: data.slotendtime,
                                        teacherid: data.teacher_id,
                                        teacher_name: data.teacher_name,
                                        status: data.status,
                                        telephone_number: data.telephone_number,
                                        title: `${data.message + ' at ' + data.slotstarttime + '-' + data.slotendtime + ' by ' + data.teacher_name}`,
                                        color: colors.blue,
                                        class_id: data.class_id,
                                        meeting_link: data.meeting_link,
                                        meeting_id: data.meeting_id,
                                        passcode: data.passcode,
                                        titleName: data.message,
                                        actions: this.actions,
                                        allDay: true,
                                        resizable: {
                                            beforeStart: true,
                                            afterEnd: true,
                                        },
                                        draggable: false,
                                    });
                                }
                                else {
                                    this.calenderTimeSlot.push({
                                        start: new Date(item.date + ' ' + convertedStartTime),
                                        end: new Date(item.date + ' ' + convertedEndTime),
                                        slotdate: item.date,
                                        slotday: item.slotday,
                                        slotselected: item.slotselected,
                                        slotstarttime: data.slotstarttime,
                                        slotendtime: data.slotendtime,
                                        teacherid: data.teacher_id,
                                        teacher_name: data.teacher_name,
                                        status: data.status,
                                        telephone_number: data.telephone_number,
                                        title: `${data.message + ' at ' + data.slotstarttime + '-' + data.slotendtime + ' by ' + data.teacher_name}`,
                                        color: colors.blue,
                                        class_id: data.class_id,
                                        meeting_link: data.meeting_link,
                                        meeting_id: data.meeting_id,
                                        passcode: data.passcode,
                                        titleName: data.message,
                                    });
                                    this.eventArr.push({
                                        start: new Date(item.date + ' ' + convertedStartTime),
                                        slotdate: item.date,
                                        slotday: item.slotday,
                                        slotselected: item.slotselected,
                                        slotstarttime: data.slotstarttime,
                                        slotendtime: data.slotendtime,
                                        teacherid: data.teacher_id,
                                        teacher_name: data.teacher_name,
                                        status: data.status,
                                        telephone_number: data.telephone_number,
                                        title: `${data.message + ' at ' + data.slotstarttime + '-' + data.slotendtime + ' by ' + data.teacher_name}`,
                                        color: colors.blue,
                                        class_id: data.class_id,
                                        meeting_link: data.meeting_link,
                                        meeting_id: data.meeting_id,
                                        passcode: data.passcode,
                                        titleName: data.message,
                                        allDay: true,
                                        resizable: {
                                            beforeStart: true,
                                            afterEnd: true,
                                        },
                                        draggable: false,
                                    });
                                }
                            }
                            else {
                                this.calenderTimeSlot.push({
                                    start: new Date(item.date + ' ' + convertedStartTime),
                                    end: new Date(item.date + ' ' + convertedEndTime),
                                    slotdate: data.date,
                                    slotday: item.slotday,
                                    slotselected: item.slotselected,
                                    slotstarttime: data.slotstarttime,
                                    slotendtime: data.slotendtime,
                                    teacherid: data.teacher_id,
                                    teacher_name: data.teacher_name,
                                    status: data.status,
                                    telephone_number: data.telephone_number,
                                    title: `${data.message + ' at ' + data.slotstarttime + '-' + data.slotendtime + ' by ' + data.teacher_name} `,
                                    color: colors.blue,
                                    titleName: data.message,
                                });
                                this.eventArr.push({
                                    start: new Date(item.date + ' ' + convertedStartTime),
                                    slotdate: data.date,
                                    slotday: item.slotday,
                                    slotselected: item.slotselected,
                                    slotstarttime: data.slotstarttime,
                                    slotendtime: data.slotendtime,
                                    teacherid: data.teacher_id,
                                    teacher_name: data.teacher_name,
                                    status: data.status,
                                    telephone_number: data.telephone_number,
                                    title: `${data.message + ' at ' + data.slotstarttime + '-' + data.slotendtime + ' by ' + data.teacher_name} `,
                                    color: colors.blue,
                                    titleName: data.message,
                                    allDay: true,
                                    resizable: {
                                        beforeStart: true,
                                        afterEnd: true,
                                    },
                                    draggable: false,
                                });
                            }
                        }
                    }
                    else if (data.status == 2) {
                        this.calenderTimeSlot.push({
                            slotdate: data.date,
                            slotday: item.slotday,
                            slotselected: item.slotselected,
                            telephone_number: data.telephone_number,
                            slotstarttime: data.slotstarttime,
                            slotendtime: data.slotendtime,
                            teacherid: data.teacher_id,
                            teacher_name: data.teacher_name,
                            status: data.status,
                            title: `${data.message + ' at ' + data.slotstarttime + '-' + data.slotendtime + ' by ' + data.teacher_name} `,
                            color: colors.red,
                            titleName: data.message,
                            start: new Date(item.date + ' ' + convertedStartTime),
                            end: new Date(item.date + ' ' + convertedEndTime),
                        });
                        this.eventArr.push({
                            start: new Date(item.date + ' ' + convertedStartTime),
                            slotdate: data.date,
                            slotday: item.slotday,
                            slotselected: item.slotselected,
                            telephone_number: data.telephone_number,
                            slotstarttime: data.slotstarttime,
                            slotendtime: data.slotendtime,
                            teacherid: data.teacher_id,
                            teacher_name: data.teacher_name,
                            status: data.status,
                            title: `${data.message + ' at ' + data.slotstarttime + '-' + data.slotendtime + ' by ' + data.teacher_name} `,
                            color: colors.red,
                            titleName: data.message,
                            allDay: true,
                            resizable: {
                                beforeStart: true,
                                afterEnd: true,
                            },
                            draggable: false,
                        });
                    }
                });
            });
            this.events = this.eventArr;
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    convertTo24HourFormat(time) {
        const [hours, minutes] = time.split(/[: ]/);
        const amPm = time.slice(-2);
        let hourNum = parseInt(hours);
        if (amPm === 'PM' && hourNum !== 12) {
            hourNum += 12;
        }
        if (amPm === 'AM' && hourNum === 12) {
            hourNum = 0;
        }
        return `${hourNum.toString().padStart(2, '0')}:${minutes.padStart(2, '0')}:00`;
    }
    cleardata(id, type) {
        if (type == 'slot') {
            if (id == 1) {
                this.slotform.controls.meetingLink.patchValue('');
            }
            else if (id == 2) {
                this.slotform.controls.meetingId.patchValue('');
            }
            else if (id == 3) {
                this.slotform.controls.meetingPasscode.patchValue('');
            }
            else if (id == 4) {
                this.slotform.controls.telephone.patchValue('');
            }
        }
        else {
            if (id == 1) {
                this.editslotform.controls.meetingLink.patchValue('');
            }
            else if (id == 2) {
                this.editslotform.controls.meetingId.patchValue('');
            }
            else if (id == 3) {
                this.editslotform.controls.meetingPasscode.patchValue('');
            }
            else if (id == 4) {
                this.editslotform.controls.telephone.patchValue('');
            }
        }
    }
    changeZoomLink() {
        clearTimeout(this.searchTime);
        if (this.type == 'add') {
            this.updateZoomLink();
        }
        else {
            this.searchTime = setTimeout(() => {
                this.modalRef = this.modalService.open(this.zoomLink);
            }, 500);
        }
    }
    updateZoomLink() {
        if (this.availabilityTimeData1.length > 0) {
            this.availabilityTimeData1.forEach((item) => {
                item.meeting_id = this.classform.controls.meetingId.value;
                item.meeting_link = this.classform.controls.meetingLink.value;
                item.passcode = this.classform.controls.passcode.value;
                // item.telephone_number = '';
            });
        }
    }
    updateStudentAttendance(attendence, calledFrom) {
        console.log(this.editData[0], 'hi updte');
        if (this.studentAttendanceDate == 'undefined' || this.studentAttendanceDate == undefined) {
            this.toastr.error('Please Select The date', 'Failed');
            return false;
        }
        const date = this.datePipe.transform(this.studentAttendanceDate, 'dd-MM-yyyy');
        const studentDetails = JSON.stringify(attendence);
        const updatedStudentDetails = JSON.parse(studentDetails);
        updatedStudentDetails.forEach(items => items.student_id = items.user_id);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolIdNum,
            class_id: this.editData[0].class_id,
            date,
            attendence: updatedStudentDetails,
            start_date: this.datePipe.transform(this.studentAttendanceDate, 'mm/dd/yyyy'),
            start_time: this.editData[0].start_time,
            end_time: this.editData[0].end_time,
            slot_day: this.editData[0].slotDay,
            type: 'add'
        };
        console.log(data, 'data');
        console.log(this.studentRows, 'studentRoe');
        // this.classService.updateAttendance(data).subscribe((successData: any) => {
        //         console.log(successData, 'suc');
        //         if (successData.IsSuccess) {
        //             if (calledFrom == 'all') {
        //                 this.modalRef1.close();
        //                 this.toastr.success(successData.ResponseObject, 'Success');
        //             }
        //         } else {
        //             this.toastr.error(successData.ErrorObject, 'Failed');
        //         }
        //     },
        //     (error) => {
        //         console.error(error, 'time_slot');
        //     });
    }
    getSelectedStudentList(scheduleid) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            schedule_id: scheduleid,
            start_date: this.datePipe.transform(this.studentAttendanceDate, 'mm/dd/yyyy'),
        };
        console.log(data, 'data');
        this.classService.attendanceList(data).subscribe((successData) => {
            console.log(successData, 'suc');
            if (successData.IsSuccess) {
                this.selected = [];
                let id = [];
                successData.ResponseObject.forEach((item) => {
                    if (item.attendance == '1') {
                        id.push(item.student_id);
                    }
                });
                this.editData[0].students.forEach((item) => {
                    if (id.includes(item.user_id)) {
                        this.selected.push(item);
                    }
                });
                console.log(this.selected, 'selectedddd');
            }
            else {
                this.toastr.error(successData.ErrorObject, 'Failed');
            }
        }, (error) => {
            console.error(error, 'time_slot');
        });
    }
    getScheduleDateList(item) {
        console.log(item, 'item fetch');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.editData[0].class_id,
            schedule_id: item.shechdule_id,
            start_time: item.slotstarttime,
            end_time: item.slotendtime,
            slot_day: item.slotDay
        };
        console.log(data, 'data');
        this.classService.attendanceList(data).subscribe((successData) => {
            if (successData.IsSuccess) {
                this.scheduleDates = [];
                successData.ResponseObject.scheduledate.forEach((items) => {
                    this.scheduleDates.push(this.datePipe.transform(items, dateOptions.dateFormat));
                });
                this.attendanceList = [...successData.ResponseObject.attendace];
                this.editData[0].students.forEach((val) => {
                    val.attendance = '0';
                    val.isSelected = false;
                    val.schedule_id = this.editData[0].schedule_id;
                    val.class_id = this.editData[0].class_id;
                    val.slotDay = this.editData[0].slotDay;
                    val.start_time = this.editData[0].start_time;
                    val.end_time = this.editData[0].end_time;
                });
                console.log(this.scheduleDates, 'scheduleDates');
                if (this.scheduleDates.length > 0) {
                    this.studentAttendanceDate = this.scheduleDates[0];
                    this.changeDate();
                }
                this.modalRef1 = this.modalService.open(this.studentAtendance, { size: 'xl' });
                this.modalRef1.result.then((result) => {
                    this.closeResult = `Closed with: ${result}`;
                }, (reason) => {
                    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
                });
            }
            else {
                this.toastr.success(successData.ErrorObject, 'Failed');
            }
        }, (error) => {
            console.error(error, 'time_slot');
        });
    }
    allPresent(event) {
        if (event.target.checked == true) {
            this.editData[0].students.forEach((item) => {
                item.attendance = '1';
                item.isSelected = true;
            });
        }
    }
    onSelect({ selected }) {
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
        console.log(this.selected, 'selected');
        this.onUserRowSelect();
    }
    addMakeUpClass(event) {
        event.absent_date = {
            isRange: false,
            singleDate: { jsDate: new Date(this.studentAttendanceDate) }
        };
        event.student_name = event.student_id;
        event.class_id = this.editData[0].class_id ?? '';
        event.class_name = this.editData[0].class_name ?? '';
        this.auth.setSessionData('makeUpClass_calledFrom', 'class');
        this.auth.setSessionData('classSelected_makeUp', JSON.stringify(event));
        this.auth.setSessionData('studentSelected_makeUp', event.user_id);
        this.modalRef1.close();
        this.router.navigate(['/schedule/schedule-page']);
    }
    attendance(eve, val, type, rowIndex) {
        console.log(this.studentRows, 'studnetAttendace');
        if (type == 'true') {
            this.studentRows[rowIndex].attendance = eve.target.checked ? '1' : '';
            this.editData[0].students[rowIndex].attendance = eve.target.checked ? '1' : '';
        }
        else if (type == 'false') {
            if (eve.target.checked) {
                this.studentRows[rowIndex].attendance = '0';
                this.editData[0].students[rowIndex].attendance = '0';
                $('#allPresent').prop('checked', false);
            }
            else {
                this.studentRows[rowIndex].attendance = '';
                this.editData[0].students[rowIndex].attendance = '';
            }
        }
        console.log(this.studentRows, 'studentRows');
        this.updateStudentAttendance([this.editData[0].students[rowIndex]], 'single');
    }
    studentFilterFun() {
        this.editData[0].students.forEach((item) => {
            item.attendance = item.isSelected == false ? '0' : '1';
            item.schedule_id = this.editData[0].schedule_id;
            item.class_id = this.editData[0].class_id;
            item.slotDay = this.editData[0].slotDay;
            item.start_time = this.editData[0].start_time;
            item.end_time = this.editData[0].end_time;
        });
    }
    onUserRowSelect() {
        console.log('s');
        // let id= []
        // this.selected.forEach( (item2) => {
        //     id.push(item2.user_id);
        // });
        // this.editData[0].students.forEach( (item) => {
        //     item.attendance = '0';
        //     item.schedule_id = this.editData[0].schedule_id;
        //     item.class_id = this.editData[0].class_id;
        //     item.slotDay = this.editData[0].slotDay;
        //     item.start_time = this.editData[0].start_time;
        //     item.end_time = this.editData[0].end_time;
        //
        // });
        // this.editData[0].students.forEach( (item) => {
        //     if (id.includes(item.user_id)){
        //         item.attendance = '1';
        //         item.schedule_id = this.editData[0].schedule_id;
        //         item.class_id = this.editData[0].class_id;
        //         item.slotDay = this.editData[0].slotDay;
        //         item.start_time = this.editData[0].start_time;
        //         item.end_time = this.editData[0].end_time
        //     }
        // });
    }
    dropdownChange(event) {
        // console.log(event, 'eve');
        this.studentAttendanceDate = event;
        $('#allPresent').prop('checked', false);
        this.changeDate();
    }
    changeDate() {
        // this.getSelectedStudentList(this.editData[0].schedule_id);
        let id = [];
        this.editData[0].students.forEach((item) => {
            item.isSelected = false;
            item.attendance = '0';
        });
        let checkSelected = this.datePipe.transform(this.studentAttendanceDate.toString(), 'mm/dd/yyyy');
        this.attendanceList.forEach((item) => {
            if (item.date.toString() == checkSelected) {
                id.push(item);
            }
        });
        id.forEach((item) => {
            this.editData[0].students.forEach((item2) => {
                if (item.student_id == item2.user_id) {
                    item2.attendance = item.attendance;
                    item2.isSelected = item.attendance == '1';
                }
            });
        });
        this.studentRows = [];
        this.editData[0].students.forEach((items) => {
            items.makeup_class_id = items.makeup_class_id ?? '';
        });
        this.studentRows = [...this.editData[0].students];
    }
    checkSelectedValue() {
        if (this.classform.controls.payment_type.value == 'F') {
            this.removeFormValidation('payment_recurring');
        }
        else {
            this.setFormValidation('payment_recurring');
        }
    }
    updateCourseField() {
        console.log('serviceCalled');
        const formControlNameArray = ['course_id', 'registration_start_date', 'registration_end_date', 'slot_available', 'amount',
            'discount', 'actual_amount', 'payment_type', 'payment_recurring'];
        formControlNameArray.forEach((fieldName) => {
            if (this.classform.controls.add_course.value) {
                this.setFormValidation(fieldName);
            }
            else {
                this.removeFormValidation(fieldName);
            }
        });
    }
    setFormValidation(formControlName) {
        this.classform.controls[formControlName].setValidators([Validators.required]);
        this.classform.controls[formControlName].updateValueAndValidity();
    }
    removeFormValidation(formControlName) {
        this.classform.controls[formControlName].clearValidators();
        this.classform.controls[formControlName].setValidators(null);
        this.classform.controls[formControlName].updateValueAndValidity();
    }
    calculateAmount() {
        const amount = this.classform.controls.amount.value - this.classform.controls.discount.value;
        this.classform.controls.actual_amount.patchValue(amount);
    }
    numberValidation(event) {
        this.validationService.numberValidate(event);
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
            console.log(this.courseListData, 'courseListData');
        }, (error) => {
            console.error(error, ' error');
        });
    }
    static { this.ɵfac = function AddClassComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddClassComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.ClassService), i0.ɵɵdirectiveInject(i4.CommonDataService), i0.ɵɵdirectiveInject(i5.ToastrService), i0.ɵɵdirectiveInject(i6.CommonService), i0.ɵɵdirectiveInject(i7.AuthService), i0.ɵɵdirectiveInject(i8.SchoolService), i0.ɵɵdirectiveInject(i9.DomSanitizer), i0.ɵɵdirectiveInject(i10.NewsubjectService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i11.ValidationService), i0.ɵɵdirectiveInject(i12.ConfigurationService), i0.ɵɵdirectiveInject(i13.NgbModal), i0.ɵɵdirectiveInject(i14.DatePipe)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddClassComponent, selectors: [["app-add-class"]], viewQuery: function AddClassComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
            i0.ɵɵviewQuery(_c4, 5);
            i0.ɵɵviewQuery(_c5, 5);
            i0.ɵɵviewQuery(_c6, 5);
            i0.ɵɵviewQuery(_c7, 7);
            i0.ɵɵviewQuery(_c8, 7);
            i0.ɵɵviewQuery(_c9, 7);
            i0.ɵɵviewQuery(_c10, 7);
            i0.ɵɵviewQuery(_c11, 5);
            i0.ɵɵviewQuery(TreeviewContentfolderComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.Content = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.classCheck = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.linkAdd = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addSlot = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.writeNoteOpen = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInputVariable = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.zoomLink = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.gradeValidityCheck = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.batchValidityCheck = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.editTimeDialog = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.studentAtendance = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.treeviewCompoent = _t.first);
        } }, features: [i0.ɵɵNgOnChangesFeature], decls: 95, vars: 43, consts: [["customCellTemplate", ""], ["editTimeDialog", ""], ["modalContent", ""], ["gradeSelection", ""], ["batchSelection", ""], ["addSlot", ""], ["writeNoteOpen", ""], ["classCheck", ""], ["zoomLink", ""], ["studentAtendance", ""], ["dp2", "angular-mydatepicker"], ["dp3", "angular-mydatepicker"], ["dp", "angular-mydatepicker"], ["dp1", "angular-mydatepicker"], ["table", ""], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "card", "tab2-card"], [1, "card-header"], [1, "col-6", "col-md-6"], [1, "text-capitalize"], [1, "pull-right"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "text-muted"], [1, "text-danger"], [1, "card-body", "tab2-card"], [1, "needs-validation", "user-add", 3, "formGroup"], [1, "container", "col-12", "col-md-12", "d-flex", "mb-5"], [1, "container", "col-12", "col-md-12"], ["formControlName", "classname", "id", "validationCustom1", "type", "text", "placeholder", "Class Name *", "required", "", 1, "form-control", 3, "readOnly"], ["class", "error", 4, "ngIf"], ["class", "col-12 col-md-6 form-group px-0", 4, "ngIf"], [1, "col-12", "col-md-6", "form-group"], ["bindLabel", "grade_name", "bindValue", "grade_id", "formControlName", "grade", "placeholder", "Select Grade", "typeToSearchText", "", "multiple", "true", 3, "change", "items", "ngStyle"], ["bindLabel", "subject_name", "bindValue", "subject_id", "formControlName", "subject", "placeholder", "Select Subject *", "typeToSearchText", "", "multiple", "true", 3, "items", "ngStyle"], [1, "row", "form-group", "pb-0"], [1, "modal-body", "col-12", "col-md-6", "py-0"], ["formControlName", "tag", "theme", "bootstrap", 3, "secondaryPlaceholder", "placeholder", "editable", "clearOnBlur", "addOnPaste", "addOnBlur", "disable"], ["class", "col-12 col-md-6", 4, "ngIf"], [1, "form-group", "col-6"], [1, "col-4"], [1, "form-check"], ["id", "online", "type", "radio", "name", "onlinePerson", "value", "1", "formControlName", "onlinePerson", 1, "form-check-input", 3, "change"], ["for", "online", 1, "form-check-label"], [1, "col-5"], ["id", "inline", "type", "radio", "value", "2", "name", "onlinePerson", "formControlName", "onlinePerson", 1, "form-check-input", 3, "change"], ["for", "inline", 1, "form-check-label"], [1, "form-group", "col-md-6"], ["bindLabel", "text", "bindValue", "value", "formControlName", "announcement_type", "placeholder", "Select Announcement Type *", "typeToSearchText", "", 3, "items", "ngStyle", "clearable"], ["class", "row mt-2", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "row my-2", 4, "ngIf"], [1, "row", "align-self-center"], [1, "modal-body", "col-12", "mx-3", "col-md-12", "p-0"], ["id", "otherLink", 3, "titleName", "showLink", "arrayValue"], [1, "row", "list-card"], [1, "col-12", "col-md-12", "mb-2"], [1, "card"], [1, "card-body", "p-3"], [1, "row", "d-flex", "justify-content-between", "list-title"], [1, "col-12", "col-6", "pt-2"], [1, "m-0"], ["class", "col-12 col-6 d-flex justify-content-end", 4, "ngIf"], ["class", "row slot-sec telemedicineAvailability", 4, "ngIf"], [1, "error"], [1, "col-12", "col-md-6", "form-group", "px-0"], [3, "type", "calledForm", "treeviewHeight", "selectedbatch", "class_id"], [1, "col-12", "col-md-6"], ["formControlName", "status", "disabled", "", 1, "form-control"], ["value", "1"], ["value", "2"], ["formControlName", "status", 1, "form-control"], [1, "row", "mt-2"], [1, "form-group", "col-12", "col-md-6"], ["type", "link", "pattern", "https?://.+", "formControlName", "meetingLink", "placeholder", "Zoom Meeting Link *", 1, "form-control", 3, "ngModelChange", "readOnly"], ["formControlName", "meetingId", "placeholder", "Meeting ID", "type", "text", 1, "form-control", 3, "ngModelChange", "readOnly"], ["formControlName", "passcode", "placeholder", "Zoom passcode", "type", "text", 1, "form-control", 3, "ngModelChange", "readOnly"], ["type", "text", "formControlName", "telephone", "placeholder", "Enter Telephone Number", 1, "form-control", 3, "readOnly"], [1, "row", "my-2"], [1, "col-md-12", "col-xl-4"], [1, "d-flex", "align-self-center", "align-items-center", "ml-3"], ["formControlName", "add_course", "id", "add_course", "type", "checkbox", 1, "form-check-input", "cursor", 3, "change"], ["for", "add_course", 1, "mt-1", "mb-0", "cursor", "font-weight-bold", "color-primary", 2, "font-size", "15px"], [1, "col-12", "mt-3", 3, "ngbCollapse"], [1, "form-group", "col-4"], ["formControlName", "course_id", "typeToSearchText", "", "placeholder", "Select Course *"], [3, "value", 4, "ngFor", "ngForOf"], [1, "input-group"], ["name", "registration_start_date", "placeholder", "Registration Start Date *", "formControlName", "registration_start_date", "angular-mydatepicker", "", 1, "form-control", 3, "keypress", "click", "dateChanged", "options"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 2, "padding", "6px 18px", 3, "click"], [1, "fa", "fa-calendar-o"], ["name", "registration_end_date", "placeholder", "Registration End Date *", "formControlName", "registration_end_date", "angular-mydatepicker", "", 1, "form-control", 3, "keypress", "click", "dateChanged", "options"], ["placeholder", "Amount *", "formControlName", "amount", 1, "form-control", 3, "input", "keypress"], ["type", "button", 1, "btn", "btn-primary", 2, "padding", "6px 18px"], ["placeholder", "Discount Amount *", "formControlName", "discount", 1, "form-control", 3, "input", "keypress"], ["placeholder", "Actual Amount *", "formControlName", "actual_amount", "readonly", "", 1, "form-control"], ["maxlength", "4", "id", "inputSlot", "placeholder", "Slots Available *", "formControlName", "slot_available", 1, "form-control", 3, "keypress"], [1, "main-content"], ["formControlName", "payment_type", 1, "form-control", 3, "change"], ["value", "", "selected", "", "disabled", "", "hidden", ""], ["value", "F"], ["value", "R"], ["class", "col-4 pr-0 form-group", 4, "ngIf"], [3, "value"], [3, "title"], ["class", "badge badge-success", 4, "ngIf"], ["class", "badge badge-warning", 4, "ngIf"], ["class", "badge badge-secondary", 4, "ngIf"], ["class", "badge badge-info", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], [1, "badge", "badge-success"], [1, "badge", "badge-warning"], [1, "badge", "badge-secondary"], [1, "badge", "badge-info"], [1, "badge", "badge-danger"], [1, "col-4", "pr-0", "form-group"], ["formControlName", "payment_recurring", 1, "form-control"], ["value", "W"], ["value", "M"], ["value", "Q"], ["value", "H"], ["value", "A"], [1, "col-12", "col-6", "d-flex", "justify-content-end"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-3", 3, "click"], [1, "row", "slot-sec", "telemedicineAvailability"], [1, "col-6", "col-md-3"], [1, "row-md-12"], ["class", "row-md-12", 4, "ngIf"], ["class", "errormessage", 4, "ngIf"], [1, "col-12", "col-md-12"], [1, "m-0", "color-primary"], [1, "row", "d-flex", "flex-row", "p-2"], ["class", "ml-1 alignCenter cursor", 4, "ngIf"], ["class", "ml-1 alignCenter", 4, "ngIf"], [1, "col-md-12"], [1, "d-flex", "align-items-baseline"], ["formControlName", "startDate", "placeholder", "Start Date", "name", "dp", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "dateChanged", "click", "options"], ["angular-mydatepicker", "", "formControlName", "startDate", "name", "dp", "placeholder", "Start Date", 1, "form-control", 3, "dateChanged", "options", "readOnly"], ["class", "input-group-append", 4, "ngIf"], [1, "errormessage"], ["formControlName", "endDate", "placeholder", "End Date", "name", "dp1", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "dateChanged", "click", "options"], ["formControlName", "endDate", "placeholder", "End Date", "name", "dp1", "angular-mydatepicker", "", 1, "form-control", 3, "dateChanged", "readOnly", "options"], [1, "ml-1", "alignCenter", "cursor"], ["class", "badge badge-pill badge-grey-selected ml-2 mt-1", 4, "ngFor", "ngForOf"], ["class", "ml-2", 4, "ngIf"], [1, "badge", "badge-pill", "badge-grey-selected", "ml-2", "mt-1"], [3, "click"], [1, "rounded-circle"], ["class", "fa fa-close rounded-circle", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["title", "Mark Attendance", 1, "rounded-circle", "ml-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-street-view"], ["aria-hidden", "true", 1, "fa", "fa-close", "rounded-circle", 3, "click"], [1, "ml-2"], ["type", "button", 1, "badge-btn", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus"], [1, "ml-1", "alignCenter"], ["class", "badge badge-pill badge-grey ml-2", 4, "ngIf"], ["class", "badge badge-pill badge-grey ml-2 cursor", 3, "click", 4, "ngIf"], [1, "badge", "badge-pill", "badge-grey", "ml-2"], [1, "badge", "badge-pill", "badge-grey", "ml-2", "cursor", 3, "click"], ["class", "badge badge-pill cursor badge-grey ml-2", 3, "click", 4, "ngIf"], [1, "badge", "badge-pill", "cursor", "badge-grey", "ml-2", 3, "click"], [1, "col-md-4"], [1, "btn-group"], ["mwlCalendarPreviousView", "", 3, "viewDateChange", "ngClass", "view", "viewDate"], ["mwlCalendarToday", "", 3, "viewDateChange", "ngClass", "viewDate"], ["mwlCalendarNextView", "", 3, "viewDateChange", "ngClass", "view", "viewDate"], [1, "col-md-4", "text-center"], [1, "letter"], [1, "col-md-4", "text-right"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "col-12", "mt-2", 3, "ngSwitch"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "cellTemplate", "dayClicked", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", 4, "ngSwitchCase"], [3, "dayClicked", "eventClicked", "eventTimesChanged", "viewDate", "events", "refresh", "activeDayIsOpen", "cellTemplate"], [3, "viewDate", "events", "refresh"], [1, "cal-cell-top"], ["class", "cal-day-badge", 4, "ngIf"], [1, "cal-day-number"], ["style", "margin: 5px;", 4, "ngIf"], [1, "cal-day-badge"], [2, "margin", "5px"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "letter", 4, "ngIf"], [1, "modal-header"], [1, "modal-title"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "telemedicineaAddAvailability", 3, "formGroup"], [1, "modal-body"], [1, "col-md-1", "mt-2"], [1, "col-md-11"], ["formControlName", "selectedDate", "placeholder", "Select Date *", "name", "dp", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "dateChanged", "click", "options"], ["class", "col-md-12 mt-3 form-group", 4, "ngIf"], ["class", "col-md-12 form-group mt-3", 4, "ngIf"], [1, "col-md-6", "form-group"], [3, "ngModelChange", "ngModel", "ngModelOptions", "meridian", "spinners"], ["class", "w-100 text-center", 4, "ngIf"], ["class", "form-group col-md-12", 4, "ngIf"], ["class", "form-group col-md-6", 4, "ngIf"], [1, "modal-footer"], [1, "col-md-12", "mt-3", "form-group"], ["formControlName", "teacherid", "bindLabel", "teacher_name", "bindValue", "teacher_id", "placeholder", "Select Teacher", "typeToSearchText", "", "required", "", "multiple", "true", 3, "items"], [1, "col-md-12", "form-group", "mt-3"], ["formControlName", "teacherid", "readonly", "", "type", "text", "placeholder", "Select Teacher", 1, "form-control", 3, "value"], [1, "w-100", "text-center"], [1, "alert", "alert-danger"], [1, "form-group", "col-md-12"], ["type", "url", "pattern", "https?://.+", "formControlName", "meetingLink", "placeholder", "Zoom Meeting Link *", 1, "form-control"], ["type", "button", "class", "btn-primary", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn-primary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-close"], ["type", "text", "formControlName", "meetingId", "placeholder", "Meeting ID", 1, "form-control"], ["type", "text", "formControlName", "meetingPasscode", "placeholder", "Zoom passcode", 1, "form-control"], ["type", "text", "formControlName", "telephone", "placeholder", "Enter Telephone Number", 1, "form-control"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["id", "modal-basic-title2", 1, "modal-title", "headerText"], [1, "modal-footer", 2, "border-top", "none"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["id", "modal-basic-title21", 1, "modal-title", "headerText"], ["class", "col-md-12 form-group", 4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], [1, "col-md-12", "form-group"], ["formControlName", "teacherid", "bindLabel", "teacher_name", "bindValue", "teacher_id", "placeholder", "Select Teacher", "typeToSearchText", "", "multiple", "true", 3, "change", "items"], ["type", "link", "pattern", "https?://.+", "formControlName", "meetingLink", "placeholder", "Zoom Meeting Link *", 1, "form-control", 3, "input"], ["type", "text", "formControlName", "meetingId", "placeholder", "Meeting ID", 1, "form-control", 3, "input"], ["type", "text", "formControlName", "meetingPasscode", "placeholder", "Zoom passcode", 1, "form-control", 3, "input"], ["type", "text", "formControlName", "telephone", "placeholder", "Enter Telephone Number", 1, "form-control", 3, "input"], [1, "text-center"], [1, "row", "d-flex", "justify-content-center"], ["type", "button", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", 3, "click", "ngClass"], [1, "modal-title", "text-center"], [1, "row", "px-3", "d-flex", "justify-content-center"], ["class", "col-10 mt-2", 4, "ngFor", "ngForOf"], [1, "col-11", "mt-2"], [3, "emitEditorValue", "ngModelChange", "editorPatchValue", "height", "id", "ngModel", "showDropBtn", "showInputBtn"], [1, "col-11", "text-right", "mt-2"], [1, "col-10", "mt-2"], ["class", "row border border-secondary rounded", 4, "ngIf"], [1, "row", "border", "border-secondary", "rounded"], [1, "col-9", 2, "word-wrap", "break-word"], [1, "mb-0", "mt-3", 3, "innerHTML"], [1, "col-2", "text-right"], ["class", "col-1", 4, "ngIf"], [1, "col-1"], ["aria-hidden", "true", 1, "fa", "fa-close", "fa-1x", "text-danger", 2, "cursor", "pointer", 3, "click"], [1, "text-center", "col-12", "modal-title"], [1, "color-primary"], [1, "btn", "btn-primary", 3, "click"], [1, "modal-header", "col-12", "d-flex", "align-self-center"], [1, "text-center", "col-11", "modal-title", "ml-5"], [1, "fa", "fa-close", "cursor", "d-flex", "align-self-center", 2, "font-size", "1.2rem", 3, "click"], ["class", "col-12 d-flex justify-content-center list-card my-5", 4, "ngIf"], ["class", "modal-body", 4, "ngIf"], ["class", "modal-footer", 4, "ngIf"], [1, "col-12", "d-flex", "justify-content-center", "list-card", "my-5"], [1, "col-8"], [1, "nodataList"], [1, "col-md-12", "d-flex", "px-0", "mb-3"], [1, "col-md-4", "px-0"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "col-md-6 px-0 d-flex justify-content-end", 4, "ngIf"], [1, "bootstrap", 3, "select", "rows", "columnMode", "loadingIndicator", "headerHeight", "footerHeight", "limit", "rowHeight", "selected", "selectionType"], ["name", "Name", 1, "contenttext"], ["ngx-datatable-cell-template", ""], ["class", "contenttext", "name", "Email", 4, "ngIf"], ["name", "Grade", 1, "contenttext"], ["class", "contenttext ", "name", "Attendance", 4, "ngIf"], [1, "col-md-6", "px-0", "d-flex", "justify-content-end"], ["id", "allPresent", "type", "checkbox", 1, "align-self-center", "cursor", 3, "click"], ["for", "allPresent", 1, "align-self-center", "cursor", "mb-0"], ["name", "Email", 1, "contenttext"], ["name", "Attendance", 1, "contenttext"], [1, "d-flex", "align-items-center"], [1, "mr-2", "d-flex", "align-items-center"], ["type", "checkbox", 3, "change", "disabled", "checked", "name"], ["class", "btn-sm-view cancel ml-2 px-2 py-1", 3, "click", 4, "ngIf"], ["class", "makUpClass_text ml-2 my-1", 4, "ngIf"], [1, "btn-sm-view", "cancel", "ml-2", "px-2", "py-1", 3, "click"], ["title", "Schedule Make-up Class", "aria-hidden", "true", 1, "fa", "fa-calendar-plus-o", "mr-1", 2, "font-size", "16px"], [1, "makUpClass_text", "ml-2", "my-1"], [1, "ml-1", "color-primary", "font-weight-bold", 2, "font-size", "14px"], ["ngx-datatable-cell-template", "", 1, "text-center"], ["style", "font-size: 18px", "class", "fa fa-check-circle color-green", 4, "ngIf"], ["style", "font-size: 18px", "class", "fa fa-times-circle color-red", 4, "ngIf"], [1, "fa", "fa-check-circle", "color-green", 2, "font-size", "18px"], [1, "fa", "fa-times-circle", "color-red", 2, "font-size", "18px"], [1, "btn", "btn-primary", 3, "click", "disabled"]], template: function AddClassComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "div", 18)(4, "div", 19)(5, "div", 16)(6, "div", 20)(7, "h5", 21);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 20)(10, "div", 22)(11, "button", 23);
            i0.ɵɵlistener("click", function AddClassComponent_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.addclass(ctx.type, 1)); });
            i0.ɵɵtext(12, "Save as draft");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "button", 24);
            i0.ɵɵlistener("click", function AddClassComponent_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.submitDraftClass()); });
            i0.ɵɵtext(14, "Save");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(15, "label", 25);
            i0.ɵɵtext(16, "All fields marked with ");
            i0.ɵɵelementStart(17, "span", 26);
            i0.ɵɵtext(18, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(19, " are required");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div", 27)(21, "form", 28)(22, "div", 29)(23, "div", 30)(24, "div", 16)(25, "div");
            i0.ɵɵelement(26, "input", 31);
            i0.ɵɵtemplate(27, AddClassComponent_em_27_Template, 2, 0, "em", 32);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(28, AddClassComponent_div_28_Template, 3, 6, "div", 33);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "div", 16)(30, "div", 34)(31, "ng-select", 35);
            i0.ɵɵlistener("change", function AddClassComponent_Template_ng_select_change_31_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.gradeCheck()); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(32, AddClassComponent_em_32_Template, 2, 0, "em", 32);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "div", 34);
            i0.ɵɵelement(34, "ng-select", 36);
            i0.ɵɵtemplate(35, AddClassComponent_em_35_Template, 2, 0, "em", 32);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(36, "div", 37)(37, "div", 38);
            i0.ɵɵelement(38, "tag-input", 39);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(39, AddClassComponent_div_39_Template, 7, 1, "div", 40)(40, AddClassComponent_div_40_Template, 7, 1, "div", 40);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "div", 16)(42, "div", 41)(43, "div", 16)(44, "div", 42)(45, "div", 43)(46, "input", 44);
            i0.ɵɵlistener("change", function AddClassComponent_Template_input_change_46_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onlinePerson()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "label", 45);
            i0.ɵɵtext(48, " Online");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(49, "div", 46)(50, "div", 43)(51, "input", 47);
            i0.ɵɵlistener("change", function AddClassComponent_Template_input_change_51_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onlinePerson()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "label", 48);
            i0.ɵɵtext(53, " In-Person");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(54, "div", 49);
            i0.ɵɵelement(55, "ng-select", 50);
            i0.ɵɵtemplate(56, AddClassComponent_em_56_Template, 2, 0, "em", 32);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(57, AddClassComponent_div_57_Template, 8, 5, "div", 51)(58, AddClassComponent_div_58_Template, 7, 4, "div", 52)(59, AddClassComponent_div_59_Template, 63, 13, "div", 53);
            i0.ɵɵelementStart(60, "div", 54)(61, "div", 55);
            i0.ɵɵelement(62, "app-other-link", 56);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(63, "div", 57)(64, "div", 58)(65, "div", 59)(66, "div", 60)(67, "div", 61)(68, "div", 62)(69, "h4", 63);
            i0.ɵɵtext(70, "Schedule");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(71, AddClassComponent_div_71_Template, 5, 0, "div", 64)(72, AddClassComponent_div_72_Template, 5, 0, "div", 64);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(73, AddClassComponent_div_73_Template, 75, 20, "div", 65)(74, AddClassComponent_div_74_Template, 25, 23, "div", 52);
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵtemplate(75, AddClassComponent_ng_template_75_Template, 6, 7, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(77, AddClassComponent_ng_template_77_Template, 38, 20, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(79, AddClassComponent_ng_template_79_Template, 16, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(81, AddClassComponent_ng_template_81_Template, 12, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(83, AddClassComponent_ng_template_83_Template, 12, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(85, AddClassComponent_ng_template_85_Template, 26, 19, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(87, AddClassComponent_ng_template_87_Template, 14, 7, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor)(89, AddClassComponent_ng_template_89_Template, 12, 0, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor)(91, AddClassComponent_ng_template_91_Template, 12, 0, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor)(93, AddClassComponent_ng_template_93_Template, 8, 3, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1("", ctx.type == "add" || ctx.type == "addEdit" ? "Add" : "Edit", " Class");
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("formGroup", ctx.classform);
            i0.ɵɵadvance(4);
            i0.ɵɵclassMapInterpolate1("col-12 col-md-", ctx.showBatch == true ? 6 : 12, " form-group");
            i0.ɵɵadvance();
            i0.ɵɵproperty("readOnly", !ctx.manageClass);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.classform.get("classname").valid && (ctx.classform.get("classname").dirty || ctx.classform.get("classname").touched));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showBatch);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("items", ctx.gradeData)("ngStyle", i0.ɵɵpureFunction1(37, _c12, !ctx.manageClass ? "none" : ""));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.classform.get("grade").valid && (ctx.classform.get("grade").dirty || ctx.classform.get("grade").touched));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("items", ctx.subjectData)("ngStyle", i0.ɵɵpureFunction1(39, _c12, !ctx.manageClass ? "none" : ""));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.classform.get("subject").valid && (ctx.classform.get("subject").dirty || ctx.classform.get("subject").touched));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("secondaryPlaceholder", "Enter tags")("placeholder", "Add tags")("editable", true)("clearOnBlur", true)("addOnPaste", true)("addOnBlur", true)("disable", ctx.readOnly);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.manageClass);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.manageClass);
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("items", ctx.announcementListData)("ngStyle", i0.ɵɵpureFunction1(41, _c12, !ctx.manageClass ? "none" : ""))("clearable", false);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.classform.get("announcement_type").valid && (ctx.classform.get("announcement_type").dirty || ctx.classform.get("announcement_type").touched));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showZoomDetails && ctx.allowZoomApi);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showZoomDetails && ctx.allowZoomApi);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.auth.getRoleId() == "2");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("titleName", "Additional resource links")("showLink", ctx.manageClass)("arrayValue", ctx.videoArray);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngIf", ctx.type == "add");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "addEdit" || ctx.type == "edit");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.scheduleClassType == "daily");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.scheduleClassType == "calendar");
        } }, dependencies: [i14.NgClass, i14.NgForOf, i14.NgIf, i14.NgStyle, i14.NgSwitch, i14.NgSwitchCase, i13.NgbCollapse, i13.NgbTimepicker, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.FormGroupDirective, i2.FormControlName, i15.NgSelectComponent, i15.NgOptionComponent, i2.NgModel, i16.AngularMyDatePickerDirective, i17.TagInputComponent, i18.DatatableComponent, i18.DataTableColumnDirective, i18.DataTableColumnCellDirective, i19.ɵCalendarPreviousViewDirective, i19.ɵCalendarNextViewDirective, i19.ɵCalendarTodayDirective, i19.CalendarMonthViewComponent, i19.CalendarWeekViewComponent, i19.CalendarDayViewComponent, i20.TinyMiceComponent, i21.TreeviewContentfolderComponent, i22.OtherLinkComponent, i19.ɵCalendarDatePipe, i23.CustomDateFormatPipe], styles: [".custom-upload-input[_ngcontent-%COMP%] {\n  color: transparent;\n}\n.custom-upload-input[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n.custom-upload-input[_ngcontent-%COMP%]::before {\n  content: 'Choose files';\n  display: inline-block;\n  background: #1d6aa5;\n  border-radius: 3px;\n  padding: 12px 15px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 11pt;\n  color: #fff;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: block;\n}\n.custom-upload-input[_ngcontent-%COMP%]:hover::before {\n  border-color: black;\n}\n.custom-upload-input[_ngcontent-%COMP%]:active {\n  outline: 0;\n}\n.custom-upload-input[_ngcontent-%COMP%]:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n\n/////////\n.telemedicineAvailability[_ngcontent-%COMP%]{\n\n  .whitColr{\n    color: white;\n  }\n\n  .cardStyle{\n    background: #eaeaea;\n    width: 18rem;\n  }\n  .alignCenter{\n    align-self: center;\n  }\n  .dayTitle{\n    width: 100px;;\n  }\n  .addBtn{\n    background: white;\n    color: deepskyblue;\n    width: 115px;\n    border-color: deepskyblue;\n    border-radius: 10px;\n    border-width: 1px;\n  }\n\n  .addingTimeBtn{\n    background: white;\n    color: deepskyblue;\n    width: 30px;\n    border-color: deepskyblue;\n    border-radius: 10px;\n    border-width: 1px;\n  }\n\n  .addUnAvlBtn{\n    width: 166px;\n    height: 22px;\n    background: white;\n    color: red;\n    border-radius: 22px;\n    font-size: 13px;\n  }\n\n  .badge-danger{\n    width: 166px;\n    height: 22px;\n    border-radius: 22px;\n    font-size: 13px;\n  }\n\n  .badge-primary{\n    font-size: 14px;\n    height: 28px;\n    padding: 7px;\n    background-color: #ffffff;\n    color: #7F3486;\n    border-color: #7F3486;\n    border-style: ridge;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n  .badge-grey{\n    font-size: 14px;\n    height: 38px;\n    padding: 10px;\n    background-color: #ffffff;\n    color: #7F3486;\n    border-color: #808080;\n    border-style: ridge;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n  .badge-grey i{\n    color: #7F3486;\n  }\n  .badge-grey-selected {\n    font-size: 14px;\n    height: 38px;\n    padding: 10px;\n    background-color: #ffffff;\n    color: #808080;\n    border-color: #808080;\n    border-style: ridge;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n  .badge-btn {\n    font-size: 20px;\n    height: 38px;\n    width: 38px;\n    background-color: #ffffff;\n    color: #7F3486;\n    border-color: #808080;\n    border-style: ridge;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n  .badge-btn:hover {\n    font-size: 20px;\n    height: 38px;\n    width: 38px;\n    background-color: #7F3486;\n    color: #fff;\n    border-color: #7F3486;\n    border-style: ridge;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n\n  .buttonStyle{\n    border-radius: 3px;\n    background: forestgreen;\n    width: 20%;\n    color: white;\n  }\n\n}\n\n.telemedicineaAddAvailability[_ngcontent-%COMP%]{\n  .buttonStyle{\n    width: 109px;\n    border-radius: 3px;\n    background: forestgreen;\n    color: white;\n  }\n\n  .timer{\n    margin-top: -31px;\n    width: 134px;\n  }\n\n\n\n  .BtnNonSelected{\n    background: white;\n    color: deepskyblue;\n    width: 115px;\n    border-color: deepskyblue;\n    border-radius: 10px;\n    border-width: 1px;\n  }\n\n  .BtnSelected{\n    background: #007bff;\n    color: white;\n    width: 115px;\n    border-color: deepskyblue;\n    border-radius: 10px;\n    border-width: 1px;\n  }\n\n  .badge{\n    width: 115px;\n    font-size: 14px;\n    height: 28px;\n    padding: 7px;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddClassComponent, [{
        type: Component,
        args: [{ selector: 'app-add-class', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-header\">\n                    <div class=\"row\">\n                        <div class=\"col-6 col-md-6\">\n                    <h5 class=\"text-capitalize\">{{type == 'add'  || type == 'addEdit' ? 'Add' : 'Edit'}} Class</h5>\n                        </div>\n                        <div class=\"col-6 col-md-6\">\n                    <div class=\"pull-right\">\n<!--                        <button (click)=\"curicullum(type, 0)\" *ngIf=\"type != 'add'\" class=\"btn btn-outline-primary mr-2\" type=\"button\">Curriculum </button>-->\n                        <button type=\"button\" (click)=\"addclass(type, 1)\" class=\"btn btn-outline-primary mr-2\">Save as draft</button>\n                        <button type=\"button\" (click)=\"submitDraftClass()\"  class=\"btn btn-primary\">Save</button>\n<!--                        <button type=\"button\" *ngIf=\"type == 'addEdit'\" (click)=\"addclass('addEdit',2)\" class=\"btn btn-primary\">Student <i class=\"fa fa-long-arrow-right fa-1x\" aria-hidden=\"true\"></i> </button>-->\n<!--                        <button type=\"button\" *ngIf=\"type == 'edit'\" (click)=\"addclass('edit',2)\" class=\"btn btn-primary\">Student <i class=\"fa fa-long-arrow-right fa-1x\" aria-hidden=\"true\"></i> </button>-->\n                    </div>\n                        </div>\n                    </div>\n                    <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n                </div>\n                <div class=\"card-body tab2-card\">\n                    <form [formGroup]=\"classform\" class=\"needs-validation user-add\">\n\n\n<!--                        form input data designs started-->\n\n                        <div class=\"container col-12 col-md-12 d-flex mb-5\">\n<!--                            <div class=\"col-12 col-md-4 px-0\" style=\"\">-->\n<!--                                <div class=\"image-container-left\">-->\n<!--                                        <img *ngIf=\"imagepath == ''\" src=\"assets/images/ristaschool/Mask Group 35.png\" alt=\"\">-->\n<!--                                        <img  *ngIf=\"imagepath != ''\"  [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + imagepath)\" alt=\"\" style=\"height: 300px; width: 400px\">-->\n<!--                                        <i *ngIf=\"imagepath != ''\" class=\"fa fa-times close-button float-right\" title=\"close\" (click)=\"deleteImg()\" ></i>-->\n<!--                                    <div class=\"profileUrl\" *ngIf=\"readOnly == false\">-->\n<!--                                        <input style=\"display: none\" type=\"file\" class=\"custom-upload-input\" (change)=\"encodeImageFileAsURL($event)\" #myInput accept=\".png, .jpeg, .jpg\">-->\n<!--                                        <button type=\"button\" class=\"btn btn-light btn-circle border-rista\" title=\"upload Image\" (click)=\"myInput.click()\"> <i class=\"fa fa-upload fa-2x mb-3\" aria-hidden=\"true\"></i> </button>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n                            <div class=\"container col-12 col-md-12\">\n                                <div class=\"row\">\n                                    <div class=\"col-12 col-md-{{showBatch == true ? 6 : 12}} form-group\">\n                                        <input class=\"form-control\" [readOnly]=\"!manageClass\" formControlName=\"classname\" id=\"validationCustom1\"\n                                               type=\"text\" placeholder=\"Class Name *\" required>\n                                        <em class=\"error\" *ngIf=\"!classform.get('classname').valid && (classform.get('classname').dirty || classform.get('classname').touched)\">Class is required</em>\n                                    </div>\n                                    <div class=\"col-12 col-md-6 form-group px-0\" *ngIf=\"showBatch\">\n                                        <app-treeview-contentfolder\n                                            [type]=\"type\" [calledForm]=\"'class'\" [treeviewHeight]=\"300\"\n                                            [selectedbatch]=\"batchId\" [class_id]=\"type != 'add' ? class_id : ''\">\n                                        </app-treeview-contentfolder>\n                                        <em class=\"error\" *ngIf=\"!classform.get('batch').valid && (classform.get('batch').dirty || classform.get('batch').touched)\">Batch is required</em>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-12 col-md-6 form-group\">\n                                            <ng-select (change)=\"gradeCheck()\"\n                                                    [items]=\"gradeData\"\n                                                       [ngStyle]=\"{'pointer-events' : !manageClass ? 'none' : ''}\"\n                                                       bindLabel=\"grade_name\"\n                                                       bindValue=\"grade_id\"\n                                                       formControlName=\"grade\"\n                                                       placeholder=\"Select Grade\"\n                                                       typeToSearchText=\"\"\n                                                       multiple=\"true\"\n                                            >\n                                            </ng-select>\n                                            <em class=\"error\" *ngIf=\"!classform.get('grade').valid && (classform.get('grade').dirty || classform.get('grade').touched)\">Grade is required</em>\n                                        </div>\n                                    <div class=\"col-12 col-md-6 form-group\">\n                                        <ng-select [items]=\"subjectData\"\n                                                   [ngStyle]=\"{'pointer-events' : !manageClass ? 'none' : ''}\"\n                                                   bindLabel=\"subject_name\"\n                                                   bindValue=\"subject_id\"\n                                                   formControlName=\"subject\"\n                                                   placeholder=\"Select Subject *\"\n                                                   typeToSearchText=\"\"\n                                                   multiple=\"true\"\n                                        >\n                                        </ng-select>\n                                        <em class=\"error\" *ngIf=\"!classform.get('subject').valid && (classform.get('subject').dirty || classform.get('subject').touched)\">Subject is required</em>\n                                        </div>\n                                </div>\n\n                                <div class=\"row form-group pb-0\">\n                                    <div class=\"modal-body col-12 col-md-6 py-0\">\n                                            <tag-input formControlName=\"tag\"\n                                                    [secondaryPlaceholder]=\"'Enter tags'\"\n                                                       [placeholder]=\"'Add tags'\"\n                                                       [editable]='true'\n                                                       [clearOnBlur]=\"true\"\n                                                       [addOnPaste]=\"true\"\n                                                       [addOnBlur]=\"true\"\n                                                       theme='bootstrap'\n                                                       [disable]=\"readOnly\"\n                                            ></tag-input>\n                                    </div>\n                                    <div class=\"col-12 col-md-6\" *ngIf=\"!manageClass\">\n                                        <select class=\"form-control\" formControlName=\"status\" disabled>\n                                            <option value=\"1\">Active</option>\n                                            <option value=\"2\">Inactive</option>\n                                        </select>\n                                        <em class=\"error\" *ngIf=\"!classform.get('status').valid && (classform.get('status').dirty || classform.get('status').touched)\">status is required</em>\n                                    </div>\n                                    <div *ngIf=\"manageClass\" class=\"col-12 col-md-6\">\n                                        <select class=\"form-control\" formControlName=\"status\">\n                                            <option value=\"1\">Active</option>\n                                            <option value=\"2\">Inactive</option>\n                                        </select>\n                                        <em class=\"error\" *ngIf=\"!classform.get('status').valid && (classform.get('status').dirty || classform.get('status').touched)\">status is required</em>\n                                    </div>\n<!--                                    <div *ngIf=\"readOnly == false\" class=\"col-6 col-md-3\">-->\n<!--&lt;!&ndash;                                        <select class=\"form-control\" formControlName=\"timezone\" placehol>&ndash;&gt;-->\n<!--&lt;!&ndash;                                            <option value=\"{{item.id}}\" *ngFor=\"let item of timeZoneList\">{{item.time_zone}}</option>&ndash;&gt;-->\n<!--&lt;!&ndash;                                        </select>&ndash;&gt;-->\n<!--                                        <ng-select [items]=\"timeZoneList\"-->\n<!--                                                   bindLabel=\"time_zone\"-->\n<!--                                                   bindValue=\"id\"-->\n<!--                                                   formControlName=\"timezone\"-->\n<!--                                                   placeholder=\"Select TimeZone *\"-->\n<!--                                                   typeToSearchText=\"\"-->\n<!--                                        >-->\n<!--                                        </ng-select>-->\n<!--                                        <em *ngIf=\"!classform.get('timezone').valid && (classform.get('timezone').dirty || classform.get('timezone').touched)\" class=\"error\">timezone is required</em>-->\n<!--                                    </div>-->\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"form-group col-6\">\n                                        <div class=\"row\">\n                                            <div class=\"col-4\">\n                                                <div class=\"form-check\">\n                                                    <input class=\"form-check-input\" id=\"online\" type=\"radio\" name=\"onlinePerson\" value=\"1\" formControlName=\"onlinePerson\" (change)=\"onlinePerson()\">\n                                                    <label class=\"form-check-label\" for=\"online\"> Online</label>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-5\">\n                                                <div class=\"form-check\">\n                                                    <input class=\"form-check-input\" id=\"inline\" type=\"radio\" value=\"2\" name=\"onlinePerson\" formControlName=\"onlinePerson\" (change)=\"onlinePerson()\">\n                                                    <label class=\"form-check-label\" for=\"inline\"> In-Person</label>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-md-6\">\n                                        <ng-select [items]=\"announcementListData\"\n                                                   [ngStyle]=\"{'pointer-events' : !manageClass ? 'none' : ''}\"\n                                                   bindLabel=\"text\"\n                                                   bindValue=\"value\"\n                                                   formControlName=\"announcement_type\"\n                                                   placeholder=\"Select Announcement Type *\"\n                                                   typeToSearchText=\"\"\n                                                   [clearable]=\"false\"\n                                        >\n                                        </ng-select>\n                                        <em class=\"error\" *ngIf=\"!classform.get('announcement_type').valid && (classform.get('announcement_type').dirty || classform.get('announcement_type').touched)\">Announcement Type is required</em>\n                                    </div>\n                                </div>\n                                <div class=\"row mt-2\" *ngIf=\"showZoomDetails && allowZoomApi\">\n                                    <div class=\"form-group col-12 col-md-6\">\n                                        <input class=\"form-control\" [readOnly]=\"!manageClass\" type=\"link\" pattern=\"https?://.+\" formControlName=\"meetingLink\" placeholder=\"Zoom Meeting Link *\" (ngModelChange)=\"changeZoomLink()\">\n                                        <em class=\"error\" *ngIf=\"classform.get('meetingLink').hasError('pattern')\">Please Enter valid Link</em>\n                                        <em class=\"error\" *ngIf=\"!classform.get('meetingLink').valid && (classform.get('meetingLink').dirty || classform.get('meetingLink').touched)\">Zoom Meeting Link is required</em>\n                                    </div>\n                                    <div class=\"form-group col-12 col-md-6\">\n                                        <input (ngModelChange)=\"changeZoomLink()\" [readOnly]=\"!manageClass\" class=\"form-control\" formControlName=\"meetingId\" placeholder=\"Meeting ID\" type=\"text\">\n                                        <em class=\"error\" *ngIf=\"!classform.get('meetingId').valid && (classform.get('meetingId').dirty || classform.get('meetingId').touched)\">Meeting Id is required</em>\n                                    </div>\n                                </div>\n                                <div class=\"row\" *ngIf=\"showZoomDetails && allowZoomApi\">\n                                    <div class=\"form-group col-12 col-md-6\">\n                                        <input (ngModelChange)=\"changeZoomLink()\" [readOnly]=\"!manageClass\" class=\"form-control\" formControlName=\"passcode\" placeholder=\"Zoom passcode\" type=\"text\">\n                                        <em class=\"error\" *ngIf=\"!classform.get('passcode').valid && (classform.get('passcode').dirty || classform.get('passcode').touched)\">Passcode is required</em>\n                                    </div>\n                                    <div class=\"form-group col-12 col-md-6\">\n                                        <input class=\"form-control\" [readOnly]=\"!manageClass\" type=\"text\" formControlName=\"telephone\" placeholder=\"Enter Telephone Number\">\n                                        <em class=\"error\" *ngIf=\"!classform.get('telephone').valid && (classform.get('telephone').dirty || classform.get('telephone').touched)\">Telephone Number is required</em>\n                                    </div>\n                                </div>\n                                <div class=\"row my-2\" *ngIf=\"auth.getRoleId() == '2'\">\n                                    <div class=\"col-md-12 col-xl-4\">\n                                        <div class=\"d-flex align-self-center align-items-center ml-3\">\n                                            <input (change)=\"updateCourseField()\" formControlName=\"add_course\" id=\"add_course\" type=\"checkbox\" class=\"form-check-input cursor\">\n                                            <label style=\"font-size: 15px\" for=\"add_course\" class=\"mt-1 mb-0 cursor font-weight-bold color-primary\">Do you want to tag a course to this class?</label>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-12 mt-3\" [ngbCollapse]=\"!classform.controls.add_course.value\">\n                                        <div class=\"row\">\n                                            <div class=\"form-group col-4\">\n                                                <ng-select formControlName=\"course_id\"\n                                                           typeToSearchText=\"\"\n                                                           placeholder=\"Select Course *\">\n                                                    <ng-option *ngFor=\"let item of courseListData;\" [value]=\"item.course_id\">\n                                                        <div [title]=\"item.course_name\">{{item.course_name}}\n                                                            <span class=\"badge badge-success\" *ngIf=\"item.status == 'A'\">Approved</span>\n                                                            <span class=\"badge badge-warning\" *ngIf=\"item.status == 'P'\">Ready for review</span>\n                                                            <span class=\"badge badge-secondary\" *ngIf=\"item.status == 'D'\">Draft</span>\n                                                            <span class=\"badge badge-info\" *ngIf=\"item.status == 'R'\">Rework</span>\n                                                            <span class=\"badge badge-danger\" *ngIf=\"item.status == 'C'\">Cancelled</span></div>\n                                                    </ng-option>\n                                                </ng-select>\n                                                <em class=\"error\" *ngIf=\"!classform.get('course_id').valid && (classform.get('course_id').dirty || classform.get('course_id').touched)\">\n                                                    Course Name is required</em>\n                                            </div>\n                                            <div class=\"form-group col-4\">\n                                                <div class=\"input-group\">\n                                                    <input class=\"form-control\" name=\"registration_start_date\" placeholder=\"Registration Start Date *\" (keypress)=\"$event.preventDefault()\" (click)=\"dp2.toggleCalendar()\"\n                                                           formControlName=\"registration_start_date\" angular-mydatepicker #dp2=\"angular-mydatepicker\"\n                                                           (dateChanged)=\"onDateChanged2($event)\" [options]=\"myDpOptions2\"/>\n                                                    <div class=\"input-group-append\">\n                                                        <button style=\"padding: 6px 18px\" type=\"button\" class=\"btn btn-primary\" (click)=\"dp2.toggleCalendar()\">\n                                                            <i class=\"fa fa-calendar-o\"></i>\n                                                        </button>\n                                                    </div>\n                                                </div>\n                                                <em class=\"error\" *ngIf=\"!classform.get('registration_start_date').valid && (classform.get('registration_start_date').dirty|| classform.get('registration_start_date').touched)\">\n                                                    Registration State Date is required</em>\n                                            </div>\n                                            <div class=\"form-group col-4\">\n                                                <div class=\"input-group\">\n                                                    <input class=\"form-control\" name=\"registration_end_date\" placeholder=\"Registration End Date *\" (keypress)=\"$event.preventDefault()\" (click)=\"dp3.toggleCalendar()\"\n                                                           formControlName=\"registration_end_date\" angular-mydatepicker #dp3=\"angular-mydatepicker\"\n                                                           (dateChanged)=\"onDateChanged3($event)\" [options]=\"myDpOptions3\"/>\n                                                    <div class=\"input-group-append\">\n                                                        <button style=\"padding: 6px 18px\" type=\"button\" class=\"btn btn-primary\" (click)=\"dp3.toggleCalendar()\">\n                                                            <i class=\"fa fa-calendar-o\"></i>\n                                                        </button>\n                                                    </div>\n                                                </div>\n                                                <em class=\"error\" *ngIf=\"!classform.get('registration_end_date').valid && (classform.get('registration_end_date').dirty|| classform.get('registration_end_date').touched)\">\n                                                    Registration End Date is required</em>\n                                            </div>\n\n                                            <div class=\"form-group col-4\">\n                                                <div class=\"input-group\">\n                                                    <input class=\"form-control\" placeholder=\"Amount *\" formControlName=\"amount\" (input)=\"calculateAmount()\" (keypress)=\"numberValidation($event)\">\n                                                    <div class=\"input-group-append\">\n                                                        <button style=\"padding: 6px 18px\" type=\"button\" class=\"btn btn-primary\">$</button>\n                                                    </div>\n                                                </div>\n                                                <em class=\"error\" *ngIf=\"!classform.get('amount').valid && (classform.get('amount').dirty || classform.get('amount').touched)\">\n                                                    Amount is required</em>\n                                            </div>\n\n                                            <div class=\"form-group col-4\">\n                                                <div class=\"input-group\">\n                                                    <input class=\"form-control\" placeholder=\"Discount Amount *\" formControlName=\"discount\" (input)=\"calculateAmount()\" (keypress)=\"numberValidation($event)\">\n                                                    <div class=\"input-group-append\">\n                                                        <button style=\"padding: 6px 18px\" type=\"button\" class=\"btn btn-primary\">$</button>\n                                                    </div>\n                                                </div>\n                                                <em class=\"error\" *ngIf=\"!classform.get('discount').valid && (classform.get('discount').dirty || classform.get('discount').touched)\">\n                                                    Discount Amount is required</em>\n                                            </div>\n\n                                            <div class=\"form-group col-4\">\n                                                <div class=\"input-group\">\n                                                    <input class=\"form-control\" placeholder=\"Actual Amount *\" formControlName=\"actual_amount\" readonly>\n                                                    <div class=\"input-group-append\">\n                                                        <button style=\"padding: 6px 18px\" type=\"button\" class=\"btn btn-primary\">$</button>\n                                                    </div>\n                                                </div>\n                                                <em class=\"error\" *ngIf=\"!classform.get('actual_amount').valid && (classform.get('actual_amount').dirty || classform.get('actual_amount').touched)\">\n                                                    Actual Amount is required</em>\n                                            </div>\n\n                                            <div class=\"form-group col-4\">\n                                                <input maxlength=\"4\" class=\"form-control\" id=\"inputSlot\" placeholder=\"Slots Available *\" formControlName=\"slot_available\" (keypress)=\"numberValidation($event)\">\n                                                <em class=\"error\" *ngIf=\"!classform.get('slot_available').valid && (classform.get('slot_available').dirty || classform.get('slot_available').touched)\">\n                                                    Slot Available is required</em>\n                                            </div>\n\n                                            <div class=\"form-group col-4\">\n                                                <div class=\"main-content\">\n                                                    <select class=\"form-control\" formControlName=\"payment_type\" (change)=\"checkSelectedValue()\">\n                                                        <option value=\"\" selected disabled hidden>Select Payment Type *</option>\n                                                        <option value=\"F\">Fixed</option>\n                                                        <option value=\"R\">Recurring</option>\n                                                    </select>\n                                                </div>\n                                                <em class=\"error\" *ngIf=\"!classform.get('payment_type').valid && (classform.get('payment_type').dirty || classform.get('payment_type').touched)\">\n                                                    Payment Type is required</em>\n                                            </div>\n                                            <div class=\"col-4 pr-0 form-group\" *ngIf=\"classform.controls.payment_type.value == 'R'\">\n                                                <select class=\"form-control\" formControlName=\"payment_recurring\">\n                                                    <option value=\"\" selected disabled hidden>Select Recurring Type *</option>\n                                                    <option value=\"W\">Weekly</option>\n                                                    <option value=\"M\">Monthly</option>\n                                                    <option value=\"Q\">Quarterly</option>\n                                                    <option value=\"H\">Half Yearly</option>\n                                                    <option value=\"A\">Annual</option>\n                                                </select>\n                                                <em class=\"error\" *ngIf=\"!classform.get('payment_recurring').valid && (classform.get('payment_recurring').dirty || classform.get('payment_recurring').touched)\">\n                                                    Recurring Type is required</em>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row align-self-center\">\n                                    <div class=\"modal-body col-12 mx-3 col-md-12 p-0\">\n                                        <app-other-link  id=\"otherLink\" [titleName]=\"'Additional resource links'\"\n                                                         [showLink]=\"manageClass\" [arrayValue]=\"videoArray\"></app-other-link>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- form input data designs closed-->\n\n                        <div class=\"row list-card\">\n                            <div class=\"col-12 col-md-12 mb-2\">\n                                <div class=\"card\">\n                                    <div class=\"card-body p-3\">\n                                        <div class=\"row d-flex justify-content-between list-title\">\n                                            <div class=\"col-12 col-6 pt-2\">\n                                                <h4 class=\"m-0\">Schedule</h4>\n                                            </div>\n                                            <div class=\"col-12 col-6 d-flex justify-content-end\" *ngIf=\"type == 'add'\">\n                                                <button type=\"button\"  class=\"btn btn-outline-primary mr-3\" (click)=\"scheduleClass('daily','1')\"> Daily View</button>\n                                                <button\n                                                        type=\"button\"\n                                                        class=\"btn btn-outline-primary mr-3\"\n                                                        (click)=\"scheduleClass('calendar','1')\"> Calendar View</button>\n                                            </div>\n                                            <div class=\"col-12 col-6 d-flex justify-content-end\" *ngIf=\"type == 'addEdit' || type == 'edit'\">\n                                                <button type=\"button\"  class=\"btn btn-outline-primary mr-3\" (click)=\"scheduleClass('daily', '2')\"> Daily View</button>\n                                                <button\n                                                        type=\"button\"\n                                                        class=\"btn btn-outline-primary mr-3\"\n                                                        (click)=\"scheduleClass('calendar','2')\"> Calendar View</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n\n\n                    <!--availability time data list design started-->\n\n                        <div class=\"row slot-sec telemedicineAvailability\" *ngIf=\"scheduleClassType == 'daily'\">\n                            <div class=\"col-12 col-md-12 mb-2\">\n                                <div class=\"card\">\n                                    <div class=\"card-body p-3\">\n                                       <div class=\"row\">\n                                           <div class=\"col-6 col-md-3\">\n                                               <div class=\"row-md-12\">\n                                                   <label>Start Date</label>\n                                               </div>\n                                               <div class=\"row-md-12\" *ngIf=\"readOnlyStart == false\">\n                                                   <div class=\"d-flex align-items-baseline\">\n                                                       <input class=\"form-control\"  formControlName=\"startDate\" placeholder=\"Start Date\"\n                                                              name=\"dp\" angular-mydatepicker #dp=\"angular-mydatepicker\" autocomplete=\"off\"\n                                                              [options]=\"myDpOptions\" (dateChanged)=\"onDateChanged($event)\" (click)=\"dp.toggleCalendar()\">\n                                                       <div class=\"input-group-append\">\n                                                           <button style=\"padding: 6px 18px\" type=\"button\" class=\"btn btn-primary\" (click)=\"dp.toggleCalendar()\">\n                                                               <i class=\"fa fa-calendar-o\"></i></button>\n                                                       </div>\n                                                   </div>\n                                                   </div>\n                                               <div class=\"row-md-12\" *ngIf=\"readOnly == true || acceptstartdate == true\">\n                                                   <div class=\"d-flex align-items-baseline\">\n                                                       <input #dp=\"angular-mydatepicker\" (dateChanged)=\"onDateChanged($event)\" [options]=\"editMyDpOptions\" [readOnly]=\"readonlyAllData\"\n                                                              angular-mydatepicker class=\"form-control\" formControlName=\"startDate\"\n                                                              name=\"dp\" placeholder=\"Start Date\">\n                                                       <div *ngIf=\"!readonlyAllData\" class=\"input-group-append\">\n                                                           <button style=\"padding: 6px 18px\" (click)=\"dp.toggleCalendar()\" class=\"btn btn-primary\" type=\"button\">\n                                                               <i class=\"fa fa-calendar-o\"></i></button>\n                                                       </div>\n                                                   </div>\n                                               </div>\n                                               <em class=\"errormessage\" *ngIf=\"classform.get('startDate').invalid && (classform.get('startDate').dirty || classform.get('startDate').touched)\">\n                                                   StartDate is invalid\n                                               </em>\n                                           </div>\n\n                                           <div class=\"col-6 col-md-3\">\n                                               <div class=\"row-md-12\">\n                                                   <label>End Date</label>\n                                               </div>\n                                               <div class=\"row-md-12\" *ngIf=\"readOnly == false\">\n                                                   <div class=\"d-flex align-items-baseline\">\n                                                   <input class=\"form-control\" formControlName=\"endDate\" placeholder=\"End Date\"\n                                                          name=\"dp1\" angular-mydatepicker #dp1=\"angular-mydatepicker\" autocomplete=\"off\"\n                                                          [options]=\"myDpOptions1\" (dateChanged)=\"onDateChanged1($event)\" (click)=\"dp1.toggleCalendar()\">\n                                                       <div class=\"input-group-append\">\n                                                           <button style=\"padding: 6px 18px\" type=\"button\" class=\"btn btn-primary\" (click)=\"dp1.toggleCalendar()\">\n                                                               <i class=\"fa fa-calendar-o\"></i></button>\n                                                       </div>\n                                                   </div>\n                                               </div>\n                                               <div class=\"row-md-12\" *ngIf=\"readOnly == true\">\n                                                   <input class=\"form-control\" [readOnly]=\"readonlyAllData\" formControlName=\"endDate\" placeholder=\"End Date\"\n                                                          name=\"dp1\" angular-mydatepicker #dp1=\"angular-mydatepicker\"\n                                                          [options]=\"myDpOptions1\" (dateChanged)=\"onDateChanged1($event)\">\n                                               </div>\n                                               <em class=\"errormessage\" *ngIf=\"classform.get('endDate').invalid && (classform.get('endDate').dirty || classform.get('endDate').touched)\">\n                                                   EndDate is invalid\n                                               </em>\n                                           </div>\n                                       </div>\n\n                                        <div class=\"row mt-2\">\n                                            <div class=\"col-12 col-md-12\">\n                                                <h5 class=\"m-0 color-primary\">Monday</h5>\n                                            </div>\n                                            <div class=\"col-12 col-md-12\">\n                                                <div class=\"row d-flex flex-row p-2\">\n                                                    <div class=\"ml-1 alignCenter cursor\" *ngIf=\"mondayTimings !=''\">\n\n                                                        <span class=\"badge badge-pill badge-grey-selected ml-2 mt-1\" *ngFor=\"let data of mondayTimings;let i = index\" >\n                                                        <a (click)=\"editSlot(data , i)\">{{data.teacher_name}} : {{data.slotstarttime}} - {{data.slotendtime }}  &nbsp;</a>\n                                                        <a class=\"rounded-circle\">\n                                                            <i class=\"fa fa-close rounded-circle\" *ngIf=\"manageClass\"\n                                                               (click)=\"deleteTime('monday',i,data)\" aria-hidden=\"true\"></i></a>\n                                                            <a (click)=\"showAttendance(data ,'1')\" class=\"rounded-circle ml-2\" title=\"Mark Attendance\">\n                                                                <i class=\"fa fa-street-view\"  aria-hidden=\"true\"></i></a>\n\n                                                    </span>\n                                                        <span class=\"ml-2\" *ngIf=\"manageClass\"><button type=\"button\"  class=\"badge-btn\" (click)=\"showSlot(1)\">\n                                                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                                                        </span>\n                                                    </div>\n                                                    <div class=\"ml-1 alignCenter\" *ngIf=\"mondayTimings ==''\" >\n                                                    <span class=\"badge badge-pill badge-grey ml-2\" *ngIf=\"!manageClass\">\n                                                        <a>&nbsp; Start Time - End Time &nbsp;</a>\n                                                    </span>\n                                                        <span class=\"badge badge-pill badge-grey ml-2 cursor\" *ngIf=\"manageClass\" (click)=\"showSlot(1)\">\n                                                        <a>&nbsp; Start Time - End Time &nbsp;</a>\n                                                    </span>\n                                                        <span class=\"ml-2\" *ngIf=\"manageClass\"><button type=\"button\"  class=\"badge-btn\" (click)=\"showSlot(1)\">\n                                                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                                                        </span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"row\">\n\n                                            <div class=\"col-12 col-md-12\">\n                                                <h5 class=\"m-0 color-primary\">Tuesday</h5>\n                                            </div>\n                                            <div class=\"col-12 col-md-12\">\n                                                <div class=\"row d-flex flex-row p-2\">\n                                                    <div class=\"ml-1 alignCenter cursor\" *ngIf=\"tuesdayTimings !=''\">\n                                                        <span class=\"badge badge-pill badge-grey-selected ml-2 mt-1\" *ngFor=\"let data of tuesdayTimings;let i = index\" >\n                                                            <a (click)=\"editSlot(data , i)\">{{data.teacher_name}} : {{data.slotstarttime}} - {{data.slotendtime }}  &nbsp;</a>\n                                                            <a  class=\"rounded-circle\"><i class=\"fa fa-close rounded-circle\" *ngIf=\"manageClass\" (click)=\"deleteTime('tuesday',i,data)\" aria-hidden=\"true\"></i></a>\n                                                       <a (click)=\"showAttendance(data ,'2')\" class=\"rounded-circle ml-2\" title=\"Mark Attendance\">\n                                                                <i class=\"fa fa-street-view\"  aria-hidden=\"true\"></i></a>\n                                                        </span>\n                                                        <span class=\"ml-2\" *ngIf=\"manageClass\"><button type=\"button\"  class=\"badge-btn\" (click)=\"showSlot(2)\">\n                                                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                                                        </span>\n                                                    </div>\n                                                    <div class=\"ml-1 alignCenter\" *ngIf=\"tuesdayTimings ==''\" >\n                                                    <span class=\"badge badge-pill badge-grey ml-2\" *ngIf=\"!manageClass\">\n                                                        <a>&nbsp; Start Time - End Time &nbsp;</a>\n                                                    </span>\n                                                    <span class=\"badge badge-pill badge-grey ml-2 cursor\" *ngIf=\"manageClass\" (click)=\"showSlot(2)\">\n                                                        <a>&nbsp; Start Time - End Time &nbsp;</a>\n                                                    </span>\n                                                        <span class=\"ml-2\" *ngIf=\"manageClass\"><button type=\"button\"  class=\"badge-btn\" (click)=\"showSlot(2)\">\n                                                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                                                        </span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n\n                                            <div class=\"col-12 col-md-12\">\n                                                <h5 class=\"m-0 color-primary\">Wednesday</h5>\n                                            </div>\n                                            <div class=\"col-12 col-md-12\">\n                                                <div class=\"row d-flex flex-row p-2\">\n                                                    <div class=\"ml-1 alignCenter cursor\" *ngIf=\"wednesDayTimingsday !=''\">\n                                                        <span class=\"badge badge-pill badge-grey-selected ml-2 mt-1\" *ngFor=\"let data of wednesDayTimingsday;let i = index\" >\n                                                        <a (click)=\"editSlot(data , i)\">{{data.teacher_name}} : {{data.slotstarttime}} - {{data.slotendtime }}  &nbsp;</a>\n                                                        <a  class=\"rounded-circle\"><i class=\"fa fa-close rounded-circle\" *ngIf=\"manageClass\" (click)=\"deleteTime('wednesday',i,data)\" aria-hidden=\"true\"></i></a>\n                                                    <a (click)=\"showAttendance(data ,'3')\" class=\"rounded-circle ml-2\"  title=\"Mark Attendance\">\n                                                                <i class=\"fa fa-street-view\"  aria-hidden=\"true\"></i></a>\n                                                    </span>\n                                                        <span class=\"ml-2\" *ngIf=\"manageClass\"><button type=\"button\"  class=\"badge-btn\" (click)=\"showSlot(3)\">\n                                                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                                                        </span>\n                                                    </div>\n                                                    <div class=\"ml-1 alignCenter\" *ngIf=\"wednesDayTimingsday ==''\" >\n                                                    <span class=\"badge badge-pill badge-grey ml-2\" *ngIf=\"!manageClass\">\n                                                        <a>&nbsp; Start Time - End Time &nbsp;</a>\n                                                    </span>\n                                                    <span class=\"badge badge-pill badge-grey ml-2 cursor\" *ngIf=\"manageClass\" (click)=\"showSlot(3)\">\n                                                        <a>&nbsp; Start Time - End Time &nbsp;</a>\n                                                    </span>\n                                                        <span class=\"ml-2\" *ngIf=\"manageClass\">\n                                                            <button type=\"button\"  class=\"badge-btn\" (click)=\"showSlot(3)\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                                                        </span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n\n                                            <div class=\"col-12 col-md-12\">\n                                                <h5 class=\"m-0 color-primary\">Thursday</h5>\n                                            </div>\n                                            <div class=\"col-12 col-md-12\">\n                                                <div class=\"row d-flex flex-row p-2\">\n                                                    <div class=\"ml-1 alignCenter cursor\" *ngIf=\"thursdayTimingsday !=''\">\n                                                        <span  class=\"badge badge-pill badge-grey-selected ml-2 mt-1\" *ngFor=\"let data of thursdayTimingsday;let i = index\" >\n                                                        <a (click)=\"editSlot(data , i)\">{{data.teacher_name}} : {{data.slotstarttime}} - {{data.slotendtime }}  &nbsp;</a>\n                                                        <a  class=\"rounded-circle\"><i class=\"fa fa-close rounded-circle\" *ngIf=\"manageClass\" (click)=\"deleteTime('thursday',i,data)\"  aria-hidden=\"true\"></i></a>\n                                                    <a (click)=\"showAttendance(data ,'4')\" class=\"rounded-circle ml-2\" title=\"Mark Attendance\">\n                                                                <i class=\"fa fa-street-view\"  aria-hidden=\"true\"></i></a>\n                                                    </span>\n                                                        <span class=\"ml-2\" *ngIf=\"manageClass\"><button type=\"button\"  class=\"badge-btn\" (click)=\"showSlot(4)\">\n                                                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                                                        </span>\n                                                    </div>\n                                                    <div class=\"ml-1 alignCenter\" *ngIf=\"thursdayTimingsday ==''\" >\n                                                    <span class=\"badge badge-pill badge-grey ml-2\" *ngIf=\"!manageClass\">\n                                                        <a>&nbsp; Start Time - End Time &nbsp;</a>\n                                                    </span>\n                                                    <span class=\"badge badge-pill badge-grey ml-2 cursor\" *ngIf=\"manageClass\" (click)=\"showSlot(4)\">\n                                                        <a>&nbsp; Start Time - End Time &nbsp;</a>\n                                                    </span>\n                                                        <span class=\"ml-2\" *ngIf=\"manageClass\"><button type=\"button\"  class=\"badge-btn\" (click)=\"showSlot(4)\">\n                                                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                                                        </span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n\n                                            <div class=\"col-12 col-md-12\">\n                                                <h5 class=\"m-0 color-primary\">Friday</h5>\n                                            </div>\n                                            <div class=\"col-12 col-md-12\">\n                                                <div class=\"row d-flex flex-row p-2\">\n                                                    <div class=\"ml-1 alignCenter cursor\" *ngIf=\"fridayTimingsday !=''\">\n                                                        <span class=\"badge badge-pill badge-grey-selected ml-2 mt-1\" *ngFor=\"let data of fridayTimingsday;let i = index\" >\n                                                        <a (click)=\"editSlot(data , i)\">{{data.teacher_name}} : {{data.slotstarttime}} - {{data.slotendtime }}  &nbsp;</a>\n                                                        <a  class=\"rounded-circle\"><i class=\"fa fa-close rounded-circle\" *ngIf=\"manageClass\" (click)=\"deleteTime('friday',i,data)\" aria-hidden=\"true\"></i></a>\n                                                    <a (click)=\"showAttendance(data ,'5')\" class=\"rounded-circle ml-2\" title=\"Mark Attendance\">\n                                                                <i class=\"fa fa-street-view\"  aria-hidden=\"true\"></i></a>\n                                                    </span>\n                                                        <span class=\"ml-2\" *ngIf=\"manageClass\"><button type=\"button\"  class=\"badge-btn\" (click)=\"showSlot(5)\">\n                                                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                                                        </span>\n                                                    </div>\n                                                    <div class=\"ml-1 alignCenter\" *ngIf=\"fridayTimingsday ==''\" >\n                                                    <span class=\"badge badge-pill badge-grey ml-2\" *ngIf=\"!manageClass\">\n                                                        <a>&nbsp; Start Time - End Time &nbsp;</a>\n                                                    </span>\n                                                    <span class=\"badge badge-pill badge-grey ml-2 cursor\" *ngIf=\"manageClass\" (click)=\"showSlot(5)\">\n                                                        <a>&nbsp; Start Time - End Time &nbsp;</a>\n                                                    </span>\n                                                        <span class=\"ml-2\" *ngIf=\"manageClass\"><button type=\"button\"  class=\"badge-btn\" (click)=\"showSlot(5)\">\n                                                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                                                        </span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n\n                                            <div class=\"col-12 col-md-12\">\n                                                <h5 class=\"m-0 color-primary\">Saturday</h5>\n                                            </div>\n                                            <div class=\"col-md-12\">\n                                                <div class=\"row d-flex flex-row p-2\">\n                                                    <div class=\"ml-1 alignCenter cursor\" *ngIf=\"saturdayTimingsday !=''\">\n                                                        <span  class=\"badge badge-pill badge-grey-selected ml-2 mt-1\" *ngFor=\"let data of saturdayTimingsday;let i = index\">\n                                                        <a (click)=\"editSlot(data , i)\">{{data.teacher_name}} : {{data.slotstarttime}} - {{data.slotendtime }}  &nbsp;</a>\n                                                        <a  class=\"rounded-circle\"><i class=\"fa fa-close rounded-circle\" *ngIf=\"manageClass\" (click)=\"deleteTime('saturday',i,data)\" aria-hidden=\"true\"></i></a>\n                                                   <a (click)=\"showAttendance(data ,'6')\" class=\"rounded-circle ml-2\" title=\"Mark Attendance\">\n                                                                <i class=\"fa fa-street-view\"  aria-hidden=\"true\"></i></a>\n                                                    </span>\n                                                        <span class=\"ml-2\" *ngIf=\"manageClass\"><button type=\"button\"  class=\"badge-btn\" (click)=\"showSlot(6)\">\n                                                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                                                        </span>\n                                                    </div>\n                                                    <div class=\"ml-1 alignCenter\" *ngIf=\"saturdayTimingsday ==''\" >\n                                                    <span class=\"badge badge-pill badge-grey ml-2\" *ngIf=\"!manageClass\">\n                                                        <a>&nbsp; Start Time - End Time &nbsp;</a>\n                                                    </span>\n                                                    <span class=\"badge badge-pill badge-grey ml-2 cursor\" *ngIf=\"manageClass\" (click)=\"showSlot(6)\">\n                                                        <a>&nbsp; Start Time - End Time &nbsp;</a>\n                                                    </span>\n                                                        <span class=\"ml-2\" *ngIf=\"manageClass\"><button type=\"button\"  class=\"badge-btn\" (click)=\"showSlot(6)\">\n                                                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                                                        </span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n\n                                            <div class=\"col-md-12\">\n                                                <h5 class=\"m-0 color-primary\">Sunday</h5>\n                                            </div>\n                                            <div class=\"col-md-12\">\n                                                <div class=\"row d-flex flex-row p-2\">\n                                                    <div class=\"ml-1 alignCenter cursor\" *ngIf=\"sundayTimingsday !=''\">\n                                                        <span class=\"badge badge-pill badge-grey-selected ml-2 mt-1\" *ngFor=\"let data of sundayTimingsday;let i = index\" >\n                                                        <a (click)=\"editSlot(data , i)\">{{data.teacher_name}} : {{data.slotstarttime}} - {{data.slotendtime }}  &nbsp;</a>\n                                                        <a  class=\"rounded-circle\"><i class=\"fa fa-close rounded-circle\" *ngIf=\"manageClass\" (click)=\"deleteTime('sunday',i,data)\" aria-hidden=\"true\"></i></a>\n                                                   <a (click)=\"showAttendance(data ,'7')\" class=\"rounded-circle ml-2\" title=\"Mark Attendance\">\n                                                                <i class=\"fa fa-street-view\"  aria-hidden=\"true\"></i></a>\n                                                    </span>\n                                                        <span class=\"ml-2\" *ngIf=\"manageClass\"><button type=\"button\"  class=\"badge-btn\" (click)=\"showSlot(7)\">\n                                                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                                                        </span>\n                                                    </div>\n                                                    <div class=\"ml-1 alignCenter\" *ngIf=\"sundayTimingsday ==''\" >\n                                                    <span class=\"badge badge-pill badge-grey ml-2\" *ngIf=\"!manageClass\">\n                                                        <a>&nbsp; Start Time - End Time &nbsp;</a>\n                                                    </span>\n                                                    <span class=\"badge badge-pill cursor badge-grey ml-2\" *ngIf=\"manageClass\" (click)=\"showSlot(7)\">\n                                                        <a>&nbsp; Start Time - End Time &nbsp;</a>\n                                                    </span>\n                                                        <span class=\"ml-2\" *ngIf=\"manageClass\"><button type=\"button\"  class=\"badge-btn\" (click)=\"showSlot(7)\">\n                                                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                                                        </span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n\n                        <!-- availability time data list design closed-->\n\n\n                        <!--// calender designs html view -->\n\n                        <div class=\"row\" *ngIf=\"scheduleClassType == 'calendar'\">\n                            <div class=\"col-md-4\">\n                                <div class=\"btn-group\">\n                                    <div [ngClass]=\"currentCalendarshow === 'preview' ? 'btn btn-primary' : 'btn btn-outline-primary'\"\n                                         mwlCalendarPreviousView\n                                         [view]=\"view\"\n                                         [(viewDate)]=\"viewDate\"\n                                         (viewDateChange)=\"closeOpenMonthViewDay('preview')\">\n                                        Previous\n                                    </div>\n                                    <div [ngClass]=\"currentCalendarshow === 'today' ? 'btn btn-primary' : 'btn btn-outline-primary'\"\n                                         mwlCalendarToday\n                                         [(viewDate)]=\"viewDate\"\n                                         (viewDateChange)=\"closeOpenMonthViewDay('today')\">\n                                        Today\n                                    </div>\n                                    <div [ngClass]=\"currentCalendarshow === 'next' ? 'btn btn-primary' : 'btn btn-outline-primary'\"\n                                         mwlCalendarNextView\n                                         [view]=\"view\"\n                                         [(viewDate)]=\"viewDate\"\n                                         (viewDateChange)=\"closeOpenMonthViewDay('next')\">\n                                        Next\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-4 text-center\">\n                                <h3 class=\"letter\">{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n                            </div>\n                            <div class=\"col-md-4 text-right\">\n                                <div class=\"btn-group\">\n                                    <div class=\"btn btn-outline-primary\"\n                                         (click)=\"setView(CalendarView.Month)\"\n                                         [class.active]=\"view === CalendarView.Month\">\n                                        Month\n                                    </div>\n                                    <div class=\"btn btn-outline-primary\"\n                                         (click)=\"setView(CalendarView.Week)\"\n                                         [class.active]=\"view === CalendarView.Week\">\n                                        Week\n                                    </div>\n                                    <div class=\"btn btn-outline-primary\"\n                                         (click)=\"setView(CalendarView.Day)\"\n                                         [class.active]=\"view === CalendarView.Day\">\n                                        Day\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-12 mt-2\" [ngSwitch]=\"view\">\n                                <mwl-calendar-month-view\n                                        *ngSwitchCase=\"CalendarView.Month\"\n                                        [viewDate]=\"viewDate\"\n                                        [events]=\"events\"\n                                        [refresh]=\"refresh\"\n                                        [activeDayIsOpen]=\"activeDayIsOpen\"\n                                        [cellTemplate]=\"customCellTemplate\"\n                                        (dayClicked)=\"dayClicked($event.day)\"\n                                        (eventClicked)=\"handleEvent('Clicked', $event.event, type)\"\n                                        (eventTimesChanged)=\"eventTimesChanged($event, type)\"></mwl-calendar-month-view>\n                                <mwl-calendar-week-view\n                                        *ngSwitchCase=\"CalendarView.Week\"\n                                        [viewDate]=\"viewDate\"\n                                        [events]=\"calenderTimeSlot\"\n                                        [refresh]=\"refresh\"\n                                >\n                                </mwl-calendar-week-view>\n                                <mwl-calendar-day-view\n                                        *ngSwitchCase=\"CalendarView.Day\"\n                                        [viewDate]=\"viewDate\"\n                                        [events]=\"calenderTimeSlot\"\n                                        [refresh]=\"refresh\"></mwl-calendar-day-view>\n                            </div>\n                        </div>\n\n<!--                        /// calender design closed -->\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #customCellTemplate let-day=\"day\" let-locale=\"locale\">\n    <div class=\"cal-cell-top\">\n    <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\"\n    >{{ day.badgeTotal }}</span>\n        <span class=\"cal-day-number\">\n            {{ day.date | calendarDate:'monthViewDayNumber':locale }}\n        </span>\n    </div>\n    <small style=\"margin: 5px;\" *ngIf=\"day.events.length >0\">\n        <span *ngFor=\"let item of day.events;let i=index\">\n            <p *ngIf=\"i== 0 || i === 1 || i ==2 \" class=\"letter\">{{item.teacher_name}} : {{item.titleName}} at {{item.slotstarttime + ' ' + item.slotendtime}}{{i != 0 ? ' , ': ''}}</p>\n        </span>\n        <span *ngIf=\"day.events.length > 3\">\n                    {{day.events.length-3 + ' More'}}\n\n        </span>\n    </small>\n</ng-template>\n\n<ng-template #editTimeDialog let-close=\"close\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Edit Slot</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"close()\" ></i>\n    </div>\n    <form [formGroup]=\"editslotform\" class=\"telemedicineaAddAvailability\">\n        <div class=\"modal-body\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"row\">\n                    <div class=\"col-md-1 mt-2\">\n                        <label>Date </label>\n                    </div>\n                    <div class=\"col-md-11\">\n                        <div class=\"d-flex align-items-baseline\">\n                        <input class=\"form-control\" formControlName=\"selectedDate\" placeholder=\"Select Date *\"\n                               name=\"dp\" angular-mydatepicker #dp2=\"angular-mydatepicker\" autocomplete=\"off\"\n                               [options]=\"myDpOptions\" (dateChanged)=\"onDateChanged($event)\" (click)=\"dp2.toggleCalendar()\">\n                        <div class=\"input-group-append\">\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp2.toggleCalendar()\">\n                                <i class=\"fa fa-calendar-o\"></i></button>\n                        </div>\n                    </div>\n                    </div>\n                    <em class=\"errormessage\" *ngIf=\"editslotform.get('selectedDate').invalid && (editslotform.get('selectedDate').dirty || editslotform.get('selectedDate').touched)\">\n                        Date is invalid\n                    </em>\n                </div>\n                </div>\n                <div class=\"col-md-12 mt-3 form-group\" *ngIf=\"adminLogin == true\">\n                    <label>Teacher Name</label>\n                    <ng-select [items]=\"teacherData\"\n                               formControlName=\"teacherid\"\n                               bindLabel=\"teacher_name\"\n                               bindValue=\"teacher_id\"\n                               placeholder=\"Select Teacher\"\n                               typeToSearchText=\"\"\n                               required=\"\"\n                               multiple=\"true\"\n                    >\n                    </ng-select>\n                </div>\n                <div class=\"col-md-12 form-group mt-3\" *ngIf=\"adminLogin == false\">\n                    <label>Teacher Name</label>\n                    <input class=\"form-control\"  formControlName=\"teacherid\" readonly type=\"text\" value=\"{{teacherName}}\" placeholder=\"Select Teacher\">\n                </div>\n                <div class=\"col-md-6 form-group\">\n\n                    <label>Start Time</label>\n                    <ngb-timepicker [(ngModel)]=\"fromTime\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"checkTime()\" [meridian]=\"meridian\" [spinners]=\"spinner\"></ngb-timepicker>\n                </div>\n                <div class=\"col-md-6 form-group\">\n\n                    <label>End Time</label>\n                    <ngb-timepicker [(ngModel)]=\"toTime\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"checkTime()\" [meridian]=\"meridian\" [spinners]=\"spinner\"></ngb-timepicker>\n\n                </div>\n                <div class=\"w-100 text-center\" *ngIf=\"timeErr\">\n                    <div class=\"alert alert-danger\">\n                        Please select the Valid &nbsp;<strong>From Time & To Time</strong>.\n                    </div>\n                </div>\n                <div class=\"form-group col-md-12\" *ngIf=\"showZoomDetails && allowZoomApi\">\n                    <label>Zoom Meeting Link</label>\n                    <div class=\"input-group\">\n                      <input class=\"form-control\" type=\"url\" pattern=\"https?://.+\" formControlName=\"meetingLink\" placeholder=\"Zoom Meeting Link *\">\n                        <div class=\"input-group-append\">\n                            <button type=\"button\" class=\"btn-primary\" *ngIf=\"this.editslotform.controls.meetingLink.value\" (click)=\"cleardata(1, 'calendar')\">\n                                <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\n                            </button>\n                        </div>\n                    </div>\n                    <em class=\"error\" *ngIf=\"editslotform.get('meetingLink').hasError('pattern')\">Please Enter valid Link</em>\n                    <em class=\"error\" *ngIf=\"!editslotform.get('meetingLink').valid && (editslotform.get('meetingLink').dirty || editslotform.get('meetingLink').touched)\">Meeting Link is required</em>\n                </div>\n                <div class=\"form-group col-md-12\" *ngIf=\"showZoomDetails && allowZoomApi\">\n                    <label>Zoom Meeting ID</label>\n                    <div class=\"input-group\">\n                        <input class=\"form-control\" type=\"text\" formControlName=\"meetingId\" placeholder=\"Meeting ID\">\n                            <div class=\"input-group-append\">\n                                <button type=\"button\" class=\"btn-primary\" *ngIf=\"this.editslotform.controls.meetingId.value\" (click)=\"cleardata(2, 'calendar')\">\n                                    <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\n                                </button>\n                            </div>\n                    </div>\n                    <em class=\"error\" *ngIf=\"!editslotform.get('meetingId').valid && (editslotform.get('meetingId').dirty || editslotform.get('meetingId').touched)\">Meeting Id is required</em>\n                </div>\n                <div class=\"form-group col-md-6\" *ngIf=\"showZoomDetails && allowZoomApi\">\n                    <label>Zoom Passcode</label>\n                    <div class=\"input-group\">\n                        <input class=\"form-control\" type=\"text\" formControlName=\"meetingPasscode\" placeholder=\"Zoom passcode\">\n                            <div class=\"input-group-append\">\n                                <button type=\"button\" class=\"btn-primary\" *ngIf=\"this.editslotform.controls.meetingPasscode.value\" (click)=\"cleardata(3, 'calendar')\">\n                                    <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\n                                </button>\n                            </div>\n                    </div>\n                    <em class=\"error\" *ngIf=\"!editslotform.get('meetingPasscode').valid && (editslotform.get('meetingPasscode').dirty || editslotform.get('meetingPasscode').touched)\">Meeting Passcode is required</em>\n                </div>\n                <div class=\"form-group col-md-6\" *ngIf=\"showZoomDetails && allowZoomApi\">\n                    <label>Telephone</label>\n                    <div class=\"input-group\">\n                        <input class=\"form-control\" type=\"text\" formControlName=\"telephone\" placeholder=\"Enter Telephone Number\">\n                            <div class=\"input-group-append\">\n                                <button type=\"button\" class=\"btn-primary\" *ngIf=\"this.editslotform.controls.telephone.value\" (click)=\"cleardata(4, 'calendar')\">\n                                    <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\n                                </button>\n                            </div>\n                    </div>\n                    <em class=\"error\" *ngIf=\"!editslotform.get('telephone').valid && (editslotform.get('telephone').dirty || editslotform.get('telephone').touched)\">Telephone Number is required</em>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitTimeSlot(2)\">Update</button>\n        </div>\n    </form>\n</ng-template>\n<ng-template #modalContent let-close=\"close\">\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Event action occurred</h5>\n        <button type=\"button\" class=\"close\" (click)=\"close()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div>\n            Action:\n            <pre></pre>\n        </div>\n        <div>\n            Event:\n            <pre></pre>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\n            OK\n        </button>\n    </div>\n</ng-template>\n\n\n<ng-template #gradeSelection let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title headerText\" id=\"modal-basic-title2\"><b>Edit Grade</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <h5>Are sure want to change the grade since it will change the previously updated student list </h5>\n    </div>\n    <div class=\"modal-footer\" style=\"border-top: none\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"noClose('grade')\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"eraseSessiondate('grade')\">Yes</button>\n    </div>\n</ng-template>\n\n<ng-template #batchSelection let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title headerText\" id=\"modal-basic-title21\"><b>Edit Content Folder</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <h5>Are sure want to change the Content Folder since it will change the previously updated student list </h5>\n    </div>\n    <div class=\"modal-footer\" style=\"border-top: none\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"noClose('batch')\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"eraseSessiondate('batch')\">Yes</button>\n    </div>\n</ng-template>\n\n\n<ng-template #addSlot let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Schedule</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"onSave1()\" ></i>\n    </div>\n    <form [formGroup]=\"slotform\" class=\"telemedicineaAddAvailability\">\n        <div class=\"modal-body\">\n            <div class=\"row\">\n                 <div class=\"col-md-12 form-group\" *ngIf=\"adminLogin == true\">\n                     <label>Teacher Name</label>\n                <ng-select [items]=\"teacherData\"\n                           (change)=\"teacherSelection(teacherData)\"\n                           formControlName=\"teacherid\"\n                           bindLabel=\"teacher_name\"\n                           bindValue=\"teacher_id\"\n                           placeholder=\"Select Teacher\"\n                           typeToSearchText=\"\"\n                           multiple=\"true\"\n                >\n                </ng-select>\n            </div>\n                <div class=\"col-md-12 form-group\" *ngIf=\"adminLogin == false\">\n                    <label>Teacher Name</label>\n                    <input class=\"form-control\"  formControlName=\"teacherid\" readonly type=\"text\" value=\"{{teacherName}}\" placeholder=\"Select Teacher\">\n                </div>\n                <div class=\"col-md-6 form-group\">\n\n                        <label>Start Time</label>\n                        <ngb-timepicker [(ngModel)]=\"fromTime\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"checkTime()\"  [meridian]=\"meridian\" [spinners]=\"spinner\"></ngb-timepicker>\n\n                </div>\n                <div class=\"col-md-6 form-group\">\n\n                    <label>End Time</label>\n                <ngb-timepicker [(ngModel)]=\"toTime\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"checkTime()\"  [meridian]=\"meridian\" [spinners]=\"spinner\"></ngb-timepicker>\n\n                </div>\n                <div class=\"w-100 text-center\" *ngIf=\"timeErr\">\n                    <div class=\"alert alert-danger\">\n                        Please select the Valid &nbsp;<strong>From Time & To Time</strong>.\n                    </div>\n                </div>\n                 <div class=\"form-group col-md-12\" *ngIf=\"showZoomDetails && allowZoomApi\">\n                            <label>Zoom Meeting Link</label>\n                        <div class=\"input-group\">\n                        <input class=\"form-control\"  type=\"link\" pattern=\"https?://.+\" formControlName=\"meetingLink\" placeholder=\"Zoom Meeting Link *\" (input)=\"newselection()\">\n                            <div class=\"input-group-append\">\n                                <button type=\"button\" class=\"btn-primary\" *ngIf=\"this.slotform.controls.meetingLink.value\" (click)=\"cleardata(1, 'slot')\">\n                                    <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\n                                </button>\n                            </div>\n                        </div>\n                        <em class=\"error\" *ngIf=\"slotform.get('meetingLink').hasError('pattern')\">Please Enter valid Link</em>\n                     <em class=\"error\" *ngIf=\"!slotform.get('meetingLink').valid && (slotform.get('meetingLink').dirty || slotform.get('meetingLink').touched)\">Meeting Link is required</em>\n                 </div>\n                    <div class=\"form-group col-md-12\" *ngIf=\"showZoomDetails && allowZoomApi\">\n                        <label>Zoom Meeting ID</label>\n                        <div class=\"input-group\">\n                        <input class=\"form-control\" type=\"text\" formControlName=\"meetingId\" placeholder=\"Meeting ID\" (input)=\"newselection()\">\n                            <div class=\"input-group-append\">\n                                <button type=\"button\" class=\"btn-primary\" *ngIf=\"this.slotform.controls.meetingId.value\" (click)=\"cleardata(2, 'slot')\">\n                                    <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\n                                </button>\n                            </div>\n                        </div>\n                        <em class=\"error\" *ngIf=\"!slotform.get('meetingId').valid && (slotform.get('meetingId').dirty || slotform.get('meetingId').touched)\">Meeting Id is required</em>\n                    </div>\n                    <div class=\"form-group col-md-6\" *ngIf=\"showZoomDetails && allowZoomApi\">\n                        <label>Zoom Passcode</label>\n                        <div class=\"input-group\">\n                        <input class=\"form-control\" type=\"text\" formControlName=\"meetingPasscode\" placeholder=\"Zoom passcode\" (input)=\"newselection()\">\n                        <div class=\"input-group-append\">\n                            <button type=\"button\" class=\"btn-primary\" *ngIf=\"this.slotform.controls.meetingPasscode.value\" (click)=\"cleardata(3, 'slot')\">\n                                <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\n                            </button>\n                        </div>\n                    </div>\n                        <em class=\"error\" *ngIf=\"!slotform.get('meetingPasscode').valid && (slotform.get('meetingPasscode').dirty || slotform.get('meetingPasscode').touched)\">Meeting Passcode is required</em>\n                    </div>\n                <div class=\"form-group col-md-6\" *ngIf=\"showZoomDetails && allowZoomApi\">\n                    <label>Telephone Number</label>\n                    <div class=\"input-group\">\n                        <input class=\"form-control\" type=\"text\" formControlName=\"telephone\" placeholder=\"Enter Telephone Number\" (input)=\"newselection()\">\n                        <div class=\"input-group-append\">\n                            <button type=\"button\" class=\"btn-primary\" *ngIf=\"this.slotform.controls.telephone.value\" (click)=\"cleardata(4, 'slot')\">\n                                <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\n                            </button>\n                        </div>\n                    </div>\n                    <em class=\"error\" *ngIf=\"!slotform.get('telephone').valid && (slotform.get('telephone').dirty || slotform.get('telephone').touched)\">Telephone Number is required</em>\n                </div>\n                <!--</div>-->\n                <div class=\"col-md-12\" *ngIf=\"editTime == false\">\n                    <h5 class=\"text-center\">Repeat for</h5>\n                    <div class=\"row d-flex justify-content-center\">\n                        <div *ngFor=\"let data of days;let i= index;\">\n                            <button *ngIf=\"data.show\"\n                                    type=\"button\" (click)=\"selectDate(data.id)\"\n                                    [ngClass]=\"data.status == 0 ? 'btn btn-outline-primary m-2' : 'btn btn-primary m-2'\"\n                            >{{data.day}}</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitSlot()\">Submit</button>\n        </div>\n    </form>\n</ng-template>\n\n<ng-template #writeNoteOpen let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title text-center\">Add Notes</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"onsave()\" ></i>\n    </div>\n        <div class=\"modal-body\">\n            <div class=\"row px-3 d-flex justify-content-center\">\n                <div class=\"col-10 mt-2\" *ngFor=\"let list of showNotes; let i = index\">\n                    <div class=\"row border border-secondary rounded\" *ngIf=\"list.add_date != '00-00-0000'\">\n                        <div class=\"col-9\" style=\"word-wrap: break-word;\">\n<!--                            {{list.note}}-->\n                            <span [innerHTML]=\"list.note\" class=\"mb-0 mt-3\"></span>\n                        </div>\n                        <div class=\"col-2 text-right\">\n                            <p>{{list.add_date}}</p>\n                        </div>\n                        <div class=\"col-1\" *ngIf=\"type == 'add'\">\n                            <i class=\"fa fa-close fa-1x text-danger\" aria-hidden=\"true\" style=\"cursor:pointer\"  (click)=\"deletedNotes(i, 'add')\"></i>\n                        </div>\n                        <div class=\"col-1\" *ngIf=\"type == 'edit' || type == 'addEdit'\">\n                            <i class=\"fa fa-close fa-1x text-danger\" aria-hidden=\"true\" style=\"cursor:pointer\"  (click)=\"deletedNotes(list, 'edit')\"></i>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-11 mt-2\">\n                    <!-- <textarea name=\"\" id=\"\" placeholder=\"Enter Notes\" [(ngModel)]=\"notes\" style=\"width: 100%; height: 100px; padding: 4px\"></textarea> -->\n                    <app-tiny-mice  (emitEditorValue)=\"getEditorValue($event)\"\n                    [editorPatchValue]=\"false\"\n                    [height]=\"300\"\n                    [id]=\"'addNotes'\"\n                    [(ngModel)]=\"notes\"\n                    [showDropBtn]=\"false\"\n                    [showInputBtn]=\"false\">\n                </app-tiny-mice>\n                </div>\n                <div class=\"col-11 text-right mt-2\">\n                    <button type=\"button\" (click)=\"onsave()\" class=\"btn btn-outline-primary mr-2\">Close</button>\n                    <button type=\"button\" (click)=\"addNotes(type)\"  class=\"btn btn-primary\">Add</button>\n                </div>\n            </div>\n        </div>\n</ng-template>\n\n<ng-template #classCheck let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"text-center col-12 modal-title\"><b>Draft Class</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <h5 class=\"color-primary\">\n            Class will be saved as draft. Add a schedule to activate.\n        </h5>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-primary\" (click)=\"close();addclass(this.type, 2)\">Yes</button>\n        <button class=\"btn btn-outline-primary\" (click)=\"close()\">No</button>\n    </div>\n</ng-template>\n\n<ng-template #zoomLink let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"text-center col-12 modal-title\"><b>Zoom Meeting Link</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <h5 class=\"color-primary\">\n            Do you want to update the Zoom details for the schedule as well?\n        </h5>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-primary\" (click)=\"close();updateZoomLink()\">Yes</button>\n        <button class=\"btn btn-outline-primary\" (click)=\"close()\">No</button>\n    </div>\n</ng-template>\n\n<ng-template #studentAtendance let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header col-12 d-flex align-self-center\">\n        <h4 class=\"text-center col-11 modal-title ml-5\"><b>Student Attendance</b></h4>\n        <i (click)=\"modalRef1.close()\" class=\"fa fa-close cursor d-flex align-self-center\" style=\"font-size: 1.2rem\"></i>\n    </div>\n    <div *ngIf=\"scheduleDates.length == 0\" class=\"col-12 d-flex justify-content-center list-card my-5\">\n        <div class=\"col-8\">\n            <button class=\"nodataList\">No Attendance Found in past and present days</button>\n        </div>\n    </div>\n    <div *ngIf=\"scheduleDates.length > 0\" class=\"modal-body\">\n        <div class=\"col-md-12 d-flex px-0 mb-3\">\n            <div class=\"col-md-4 px-0\">\n                <select (ngModelChange)=\"dropdownChange($event)\" [(ngModel)]=\"studentAttendanceDate\" class=\"form-control\">\n                    <option *ngFor=\"let item of scheduleDates;let i = index\" [value]=\"item\">{{item}}</option>\n                </select>\n            </div>\n            <div *ngIf=\"studentAttendanceDate == dateAddValue\" class=\"col-md-6 px-0 d-flex justify-content-end\">\n                <input (click)=\"allPresent($event)\" class=\"align-self-center cursor\" id=\"allPresent\" type=\"checkbox\">&nbsp;<label for=\"allPresent\" class=\"align-self-center cursor mb-0\">All Present</label>\n            </div>\n        </div>\n        <ngx-datatable\n            #table\n            class=\"bootstrap\"\n            [rows]=\"studentRows\"\n            [columnMode]=\"'force'\"\n            [loadingIndicator]=\"false\"\n            [headerHeight]=\"40\"\n            [footerHeight]=\"40\"\n            [limit]=\"10\"\n            [rowHeight]=\"'auto'\"\n            [selected]=\"selected\"\n            [selectionType]=\"'checkbox'\"\n            (select)=\"onSelect($event)\"\n        >\n            <ngx-datatable-column class=\"contenttext\" name=\"Name\">\n                <ng-template ngx-datatable-cell-template let-row=\"row\">\n                    <span> {{row.first_name}} {{row.last_name}}</span>\n                </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column class=\"contenttext\" name=\"Email\" *ngIf=\"manageClass\">\n                <ng-template ngx-datatable-cell-template let-row=\"row\">\n                    <span>{{row.student_id}}</span>\n                </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column class=\"contenttext\" name=\"Grade\">\n                <ng-template ngx-datatable-cell-template let-row=\"row\">\n                    <span>{{row.grade_name}}</span>\n                </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column *ngIf=\"studentAttendanceDate == dateAddValue\" class=\"contenttext \" name=\"Attendance\">\n                <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n                    <div class=\"d-flex align-items-center\">\n                        <label class=\"mr-2 d-flex align-items-center\">\n                            <input (change)=\"attendance($event, row.isSelected, 'true' ,rowIndex)\" [disabled]=\"row.attendance == '0'\"\n                                   [checked]=\"row.attendance == '1'\" name=\"{{rowIndex+'rad'}}\" type=\"checkbox\">&nbsp; Present\n                        </label>\n                        <label class=\"d-flex align-items-center\">\n                            <input (change)=\"attendance($event, row.isSelected, 'false' ,rowIndex)\" [disabled]=\"row.attendance == '1' || row.makeup_class_id != ''\"\n                                   [checked]=\"row.attendance == '0'\" name=\"{{rowIndex+'rad'}}\" type=\"checkbox\">&nbsp; Absent\n                        </label>\n                        <button (click)=\"addMakeUpClass(row)\" *ngIf=\"row.makeup_class_id == '' && row?.attendance == '0' &&\n                            (auth.getRoleId() == '2' || (auth.getRoleId() == '4' && auth.getSessionData('teacher_type') != '0'))\" class=\"btn-sm-view cancel ml-2 px-2 py-1\">\n                            <i style=\"font-size: 16px\" class=\"fa fa-calendar-plus-o mr-1\" title=\"Schedule Make-up Class\" aria-hidden=\"true\"></i>Schedule Make-up Class\n                        </button>\n                        <span *ngIf=\"row.makeup_class_id != '' && row?.attendance == '0'\" class=\"makUpClass_text ml-2 my-1\">Make-up Class:\n                        <span style=\"font-size: 14px\" class=\"ml-1 color-primary font-weight-bold\">{{row.makeup_class_name}} - {{row.makeup_class_date | customDateFormat}}</span>\n                    </span>\n                    </div>\n                </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column *ngIf=\"studentAttendanceDate != dateAddValue\" class=\"contenttext \" name=\"Attendance\">\n                <ng-template class=\"text-center\" let-row=\"row\" ngx-datatable-cell-template>\n                    <i style=\"font-size: 18px\" *ngIf=\"row?.attendance == '1'\" class=\"fa fa-check-circle color-green\"></i>\n                    <i style=\"font-size: 18px\" *ngIf=\"row?.attendance == '0'\" class=\"fa fa-times-circle color-red\"></i>\n                    <span *ngIf=\"row.attendance == ''\">-</span>\n                    <button (click)=\"addMakeUpClass(row)\" *ngIf=\"row.makeup_class_id == '' && row?.attendance == '0' &&\n                        (auth.getRoleId() == '2' || (auth.getRoleId() == '4' && auth.getSessionData('teacher_type') != '0'))\" class=\"btn-sm-view cancel ml-2 px-2 py-1\">\n                        <i style=\"font-size: 16px\" class=\"fa fa-calendar-plus-o mr-1\" title=\"Schedule Make-up Class\" aria-hidden=\"true\"></i>Schedule make-up Class\n                    </button>\n                    <span *ngIf=\"row.makeup_class_id != '' && row?.attendance == '0'\" class=\"makUpClass_text ml-2 my-1\">Make-up Class:\n                        <span style=\"font-size: 14px\" class=\"ml-1 color-primary font-weight-bold\">{{row.makeup_class_name}} - {{row.makeup_class_date | customDateFormat}}</span>\n                    </span>\n                </ng-template>\n            </ngx-datatable-column>\n        </ngx-datatable>\n    </div>\n    <div *ngIf=\"scheduleDates.length > 0\" class=\"modal-footer\">\n        <button (click)=\"modalRef1.close()\" class=\"btn btn-outline-primary\">Cancel</button>\n        <button (click)=\"updateStudentAttendance(editData[0]?.students, 'all')\" [disabled]=\"studentAttendanceDate != dateAddValue\" class=\"btn btn-primary\">Submit</button>\n    </div>\n</ng-template>\n\n", styles: [".custom-upload-input {\n  color: transparent;\n}\n.custom-upload-input::-webkit-file-upload-button {\n  visibility: hidden;\n}\n.custom-upload-input::before {\n  content: 'Choose files';\n  display: inline-block;\n  background: #1d6aa5;\n  border-radius: 3px;\n  padding: 12px 15px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 11pt;\n  color: #fff;\n}\n\n.container {\n  display: block;\n}\n.custom-upload-input:hover::before {\n  border-color: black;\n}\n.custom-upload-input:active {\n  outline: 0;\n}\n.custom-upload-input:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n\n/////////\n.telemedicineAvailability{\n\n  .whitColr{\n    color: white;\n  }\n\n  .cardStyle{\n    background: #eaeaea;\n    width: 18rem;\n  }\n  .alignCenter{\n    align-self: center;\n  }\n  .dayTitle{\n    width: 100px;;\n  }\n  .addBtn{\n    background: white;\n    color: deepskyblue;\n    width: 115px;\n    border-color: deepskyblue;\n    border-radius: 10px;\n    border-width: 1px;\n  }\n\n  .addingTimeBtn{\n    background: white;\n    color: deepskyblue;\n    width: 30px;\n    border-color: deepskyblue;\n    border-radius: 10px;\n    border-width: 1px;\n  }\n\n  .addUnAvlBtn{\n    width: 166px;\n    height: 22px;\n    background: white;\n    color: red;\n    border-radius: 22px;\n    font-size: 13px;\n  }\n\n  .badge-danger{\n    width: 166px;\n    height: 22px;\n    border-radius: 22px;\n    font-size: 13px;\n  }\n\n  .badge-primary{\n    font-size: 14px;\n    height: 28px;\n    padding: 7px;\n    background-color: #ffffff;\n    color: #7F3486;\n    border-color: #7F3486;\n    border-style: ridge;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n  .badge-grey{\n    font-size: 14px;\n    height: 38px;\n    padding: 10px;\n    background-color: #ffffff;\n    color: #7F3486;\n    border-color: #808080;\n    border-style: ridge;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n  .badge-grey i{\n    color: #7F3486;\n  }\n  .badge-grey-selected {\n    font-size: 14px;\n    height: 38px;\n    padding: 10px;\n    background-color: #ffffff;\n    color: #808080;\n    border-color: #808080;\n    border-style: ridge;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n  .badge-btn {\n    font-size: 20px;\n    height: 38px;\n    width: 38px;\n    background-color: #ffffff;\n    color: #7F3486;\n    border-color: #808080;\n    border-style: ridge;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n  .badge-btn:hover {\n    font-size: 20px;\n    height: 38px;\n    width: 38px;\n    background-color: #7F3486;\n    color: #fff;\n    border-color: #7F3486;\n    border-style: ridge;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n\n  .buttonStyle{\n    border-radius: 3px;\n    background: forestgreen;\n    width: 20%;\n    color: white;\n  }\n\n}\n\n.telemedicineaAddAvailability{\n  .buttonStyle{\n    width: 109px;\n    border-radius: 3px;\n    background: forestgreen;\n    color: white;\n  }\n\n  .timer{\n    margin-top: -31px;\n    width: 134px;\n  }\n\n\n\n  .BtnNonSelected{\n    background: white;\n    color: deepskyblue;\n    width: 115px;\n    border-color: deepskyblue;\n    border-radius: 10px;\n    border-width: 1px;\n  }\n\n  .BtnSelected{\n    background: #007bff;\n    color: white;\n    width: 115px;\n    border-color: deepskyblue;\n    border-radius: 10px;\n    border-width: 1px;\n  }\n\n  .badge{\n    width: 115px;\n    font-size: 14px;\n    height: 28px;\n    padding: 7px;\n  }\n}\n"] }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.FormBuilder }, { type: i3.ClassService }, { type: i4.CommonDataService }, { type: i5.ToastrService }, { type: i6.CommonService }, { type: i7.AuthService }, { type: i8.SchoolService }, { type: i9.DomSanitizer }, { type: i10.NewsubjectService }, { type: i1.Router }, { type: i11.ValidationService }, { type: i12.ConfigurationService }, { type: i13.NgbModal }, { type: i14.DatePipe }], { Content: [{
            type: ViewChild,
            args: ['bulkmodal']
        }], classCheck: [{
            type: ViewChild,
            args: ['classCheck']
        }], linkAdd: [{
            type: ViewChild,
            args: ['link']
        }], addSlot: [{
            type: ViewChild,
            args: ['addSlot']
        }], writeNoteOpen: [{
            type: ViewChild,
            args: ['writeNoteOpen']
        }], myInputVariable: [{
            type: ViewChild,
            args: ['myInput']
        }], zoomLink: [{
            type: ViewChild,
            args: ['zoomLink']
        }], gradeValidityCheck: [{
            type: ViewChild,
            args: ['gradeSelection', { static: true }]
        }], batchValidityCheck: [{
            type: ViewChild,
            args: ['batchSelection', { static: true }]
        }], modalContent: [{
            type: ViewChild,
            args: ['modalContent', { static: true }]
        }], editTimeDialog: [{
            type: ViewChild,
            args: ['editTimeDialog', { static: true }]
        }], studentAtendance: [{
            type: ViewChild,
            args: ['studentAtendance']
        }], treeviewCompoent: [{
            type: ViewChild,
            args: [TreeviewContentfolderComponent, { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddClassComponent, { className: "AddClassComponent" }); })();
//# sourceMappingURL=add-class.component.js.map