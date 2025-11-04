import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { urls } from 'src/app/shared/utils/urls';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { dateOptions } from 'src/app/shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "src/app/shared/service/auth.service";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
import * as i5 from "src/app/shared/service/validation.service";
import * as i6 from "ngx-toastr";
import * as i7 from "src/app/environment.service";
import * as i8 from "@angular/platform-browser";
import * as i9 from "@ng-bootstrap/ng-bootstrap";
import * as i10 from "@ng-select/ng-select";
import * as i11 from "@nodro7/angular-mydatepicker";
const _c0 = ["myInput"];
const _c1 = ["addSlot"];
const _c2 = ["classCheck"];
const _c3 = () => ({ standalone: true });
function CourseScheduleAddComponent_em_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 64);
    i0.ɵɵtext(1, "Schedule Title is required");
    i0.ɵɵelementEnd();
} }
function CourseScheduleAddComponent_em_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 64);
    i0.ɵɵtext(1, "Registration State Date is required");
    i0.ɵɵelementEnd();
} }
function CourseScheduleAddComponent_em_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 64);
    i0.ɵɵtext(1, "Registration End Date is required");
    i0.ɵɵelementEnd();
} }
function CourseScheduleAddComponent_em_75_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 64);
    i0.ɵɵtext(1, "Course Type is required");
    i0.ɵɵelementEnd();
} }
function CourseScheduleAddComponent_em_87_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 64);
    i0.ɵɵtext(1, "Amount is required");
    i0.ɵɵelementEnd();
} }
function CourseScheduleAddComponent_em_99_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 64);
    i0.ɵɵtext(1, "Discount Amount is required");
    i0.ɵɵelementEnd();
} }
function CourseScheduleAddComponent_em_111_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 64);
    i0.ɵɵtext(1, "Actual Amount is required");
    i0.ɵɵelementEnd();
} }
function CourseScheduleAddComponent_em_119_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 64);
    i0.ɵɵtext(1, "Slot Available is required");
    i0.ɵɵelementEnd();
} }
function CourseScheduleAddComponent_em_132_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 64);
    i0.ɵɵtext(1, "Status is required");
    i0.ɵɵelementEnd();
} }
function CourseScheduleAddComponent_em_147_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 64);
    i0.ɵɵtext(1, "Payment Type is required");
    i0.ɵɵelementEnd();
} }
function CourseScheduleAddComponent_div_148_em_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 64);
    i0.ɵɵtext(1, "Recurring Type is required");
    i0.ɵɵelementEnd();
} }
function CourseScheduleAddComponent_div_148_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 65)(1, "label", 66)(2, "span", 25);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, "Recurring Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 67)(6, "select", 68)(7, "option", 35);
    i0.ɵɵtext(8, "Select Recurring Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "option", 69);
    i0.ɵɵtext(10, "Weekly");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "option", 70);
    i0.ɵɵtext(12, "Monthly");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "option", 71);
    i0.ɵɵtext(14, "Quarterly");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "option", 72);
    i0.ɵɵtext(16, "Half Yearly");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "option", 73);
    i0.ɵɵtext(18, "Annual");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(19, CourseScheduleAddComponent_div_148_em_19_Template, 2, 0, "em", 27);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(19);
    i0.ɵɵproperty("ngIf", !ctx_r3.courseScheduleDetails.get("payment_recurring").valid && (ctx_r3.courseScheduleDetails.get("payment_recurring").dirty || ctx_r3.courseScheduleDetails.get("payment_recurring").touched));
} }
function CourseScheduleAddComponent_div_181_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 79)(1, "a")(2, "span", 80);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " : ");
    i0.ɵɵelementStart(5, "span", 81);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, " - ");
    i0.ɵɵelementStart(8, "span", 81);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " \u00A0");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "a", 82);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_181_span_1_Template_a_click_11_listener() { const ctx_r8 = i0.ɵɵrestoreView(_r8); const data_r10 = ctx_r8.$implicit; const i_r11 = ctx_r8.index; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.deleteTime("monday", i_r11, data_r10)); });
    i0.ɵɵelement(12, "i", 83);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r10 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r10.teacher_name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r10.slotstarttime);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r10.slotendtime);
} }
function CourseScheduleAddComponent_div_181_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 74);
    i0.ɵɵtemplate(1, CourseScheduleAddComponent_div_181_span_1_Template, 13, 3, "span", 75);
    i0.ɵɵelementStart(2, "span", 76)(3, "button", 77);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_181_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addSlotDetails(1)); });
    i0.ɵɵelement(4, "i", 78);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.mondayTimings);
} }
function CourseScheduleAddComponent_div_182_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 84)(1, "span", 85);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_182_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r12); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addSlotDetails(1)); });
    i0.ɵɵelementStart(2, "a");
    i0.ɵɵtext(3, "Start Time - End Time \u00A0");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "span", 76)(5, "button", 86);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_182_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r12); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addSlotDetails(1)); });
    i0.ɵɵelement(6, "i", 78);
    i0.ɵɵelementEnd()()();
} }
function CourseScheduleAddComponent_div_189_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 79)(1, "a")(2, "span", 80);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " : ");
    i0.ɵɵelementStart(5, "span", 81);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, " - ");
    i0.ɵɵelementStart(8, "span", 81);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " \u00A0");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "a", 82);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_189_span_1_Template_a_click_11_listener() { const ctx_r14 = i0.ɵɵrestoreView(_r14); const data_r16 = ctx_r14.$implicit; const i_r17 = ctx_r14.index; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.deleteTime("tuesday", i_r17, data_r16)); });
    i0.ɵɵelement(12, "i", 83);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r16 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r16.teacher_name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r16.slotstarttime);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r16.slotendtime);
} }
function CourseScheduleAddComponent_div_189_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 74);
    i0.ɵɵtemplate(1, CourseScheduleAddComponent_div_189_span_1_Template, 13, 3, "span", 75);
    i0.ɵɵelementStart(2, "span", 76)(3, "button", 77);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_189_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r13); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addSlotDetails(2)); });
    i0.ɵɵelement(4, "i", 78);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.tuesdayTimings);
} }
function CourseScheduleAddComponent_div_190_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 84)(1, "span", 85);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_190_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r18); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addSlotDetails(2)); });
    i0.ɵɵelementStart(2, "a");
    i0.ɵɵtext(3, "Start Time - End Time \u00A0");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "span", 76)(5, "button", 86);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_190_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r18); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addSlotDetails(2)); });
    i0.ɵɵelement(6, "i", 78);
    i0.ɵɵelementEnd()()();
} }
function CourseScheduleAddComponent_div_197_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 79)(1, "a")(2, "span", 80);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " : ");
    i0.ɵɵelementStart(5, "span", 81);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, " - ");
    i0.ɵɵelementStart(8, "span", 81);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " \u00A0");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "a", 82);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_197_span_1_Template_a_click_11_listener() { const ctx_r20 = i0.ɵɵrestoreView(_r20); const data_r22 = ctx_r20.$implicit; const i_r23 = ctx_r20.index; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.deleteTime("wednesday", i_r23, data_r22)); });
    i0.ɵɵelement(12, "i", 83);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r22 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r22.teacher_name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r22.slotstarttime);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r22.slotendtime);
} }
function CourseScheduleAddComponent_div_197_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 74);
    i0.ɵɵtemplate(1, CourseScheduleAddComponent_div_197_span_1_Template, 13, 3, "span", 75);
    i0.ɵɵelementStart(2, "span", 76)(3, "button", 77);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_197_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r19); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addSlotDetails(3)); });
    i0.ɵɵelement(4, "i", 78);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.wednesDayTimingsday);
} }
function CourseScheduleAddComponent_div_198_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 84)(1, "span", 85);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_198_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r24); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addSlotDetails(3)); });
    i0.ɵɵelementStart(2, "a");
    i0.ɵɵtext(3, "Start Time - End Time \u00A0");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "span", 76)(5, "button", 86);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_198_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r24); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addSlotDetails(3)); });
    i0.ɵɵelement(6, "i", 78);
    i0.ɵɵelementEnd()()();
} }
function CourseScheduleAddComponent_div_205_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 79)(1, "a")(2, "span", 80);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " : ");
    i0.ɵɵelementStart(5, "span", 81);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, " - ");
    i0.ɵɵelementStart(8, "span", 81);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " \u00A0");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "a", 82);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_205_span_1_Template_a_click_11_listener() { const ctx_r26 = i0.ɵɵrestoreView(_r26); const data_r28 = ctx_r26.$implicit; const i_r29 = ctx_r26.index; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.deleteTime("thursday", i_r29, data_r28)); });
    i0.ɵɵelement(12, "i", 83);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r28 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r28.teacher_name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r28.slotstarttime);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r28.slotendtime);
} }
function CourseScheduleAddComponent_div_205_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 74);
    i0.ɵɵtemplate(1, CourseScheduleAddComponent_div_205_span_1_Template, 13, 3, "span", 75);
    i0.ɵɵelementStart(2, "span", 76)(3, "button", 77);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_205_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r25); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addSlotDetails(4)); });
    i0.ɵɵelement(4, "i", 78);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.thursdayTimingsday);
} }
function CourseScheduleAddComponent_div_206_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 84)(1, "span", 85);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_206_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r30); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addSlotDetails(4)); });
    i0.ɵɵelementStart(2, "a");
    i0.ɵɵtext(3, "Start Time - End Time \u00A0");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "span", 76)(5, "button", 86);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_206_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r30); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addSlotDetails(4)); });
    i0.ɵɵelement(6, "i", 78);
    i0.ɵɵelementEnd()()();
} }
function CourseScheduleAddComponent_div_213_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 79)(1, "a")(2, "span", 80);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " : ");
    i0.ɵɵelementStart(5, "span", 81);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, " - ");
    i0.ɵɵelementStart(8, "span", 81);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " \u00A0");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "a", 82);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_213_span_1_Template_a_click_11_listener() { const ctx_r32 = i0.ɵɵrestoreView(_r32); const data_r34 = ctx_r32.$implicit; const i_r35 = ctx_r32.index; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.deleteTime("friday", i_r35, data_r34)); });
    i0.ɵɵelement(12, "i", 83);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r34 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r34.teacher_name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r34.slotstarttime);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r34.slotendtime);
} }
function CourseScheduleAddComponent_div_213_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 74);
    i0.ɵɵtemplate(1, CourseScheduleAddComponent_div_213_span_1_Template, 13, 3, "span", 75);
    i0.ɵɵelementStart(2, "span", 76)(3, "button", 77);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_213_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r31); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addSlotDetails(5)); });
    i0.ɵɵelement(4, "i", 78);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.fridayTimingsday);
} }
function CourseScheduleAddComponent_div_214_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 84)(1, "span", 85);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_214_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r36); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addSlotDetails(5)); });
    i0.ɵɵelementStart(2, "a");
    i0.ɵɵtext(3, "Start Time - End Time \u00A0");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "span", 76)(5, "button", 86);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_214_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r36); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addSlotDetails(5)); });
    i0.ɵɵelement(6, "i", 78);
    i0.ɵɵelementEnd()()();
} }
function CourseScheduleAddComponent_div_221_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 79)(1, "a")(2, "span", 80);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " : ");
    i0.ɵɵelementStart(5, "span", 81);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, " - ");
    i0.ɵɵelementStart(8, "span", 81);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " \u00A0");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "a", 82);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_221_span_1_Template_a_click_11_listener() { const ctx_r38 = i0.ɵɵrestoreView(_r38); const data_r40 = ctx_r38.$implicit; const i_r41 = ctx_r38.index; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.deleteTime("saturday", i_r41, data_r40)); });
    i0.ɵɵelement(12, "i", 83);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r40 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r40.teacher_name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r40.slotstarttime);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r40.slotendtime);
} }
function CourseScheduleAddComponent_div_221_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 74);
    i0.ɵɵtemplate(1, CourseScheduleAddComponent_div_221_span_1_Template, 13, 3, "span", 75);
    i0.ɵɵelementStart(2, "span", 76)(3, "button", 77);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_221_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r37); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addSlotDetails(6)); });
    i0.ɵɵelement(4, "i", 78);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.saturdayTimingsday);
} }
function CourseScheduleAddComponent_div_222_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 84)(1, "span", 85);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_222_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r42); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addSlotDetails(6)); });
    i0.ɵɵelementStart(2, "a");
    i0.ɵɵtext(3, "Start Time - End Time \u00A0");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "span", 76)(5, "button", 86);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_222_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r42); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addSlotDetails(6)); });
    i0.ɵɵelement(6, "i", 78);
    i0.ɵɵelementEnd()()();
} }
function CourseScheduleAddComponent_div_229_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 79)(1, "a")(2, "span", 80);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " : ");
    i0.ɵɵelementStart(5, "span", 81);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, " - ");
    i0.ɵɵelementStart(8, "span", 81);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " \u00A0");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "a", 82);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_229_span_1_Template_a_click_11_listener() { const ctx_r44 = i0.ɵɵrestoreView(_r44); const data_r46 = ctx_r44.$implicit; const i_r47 = ctx_r44.index; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.deleteTime("sunday", i_r47, data_r46)); });
    i0.ɵɵelement(12, "i", 83);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r46 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r46.teacher_name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r46.slotstarttime);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r46.slotendtime);
} }
function CourseScheduleAddComponent_div_229_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 74);
    i0.ɵɵtemplate(1, CourseScheduleAddComponent_div_229_span_1_Template, 13, 3, "span", 75);
    i0.ɵɵelementStart(2, "span", 76)(3, "button", 77);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_229_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r43); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addSlotDetails(7)); });
    i0.ɵɵelement(4, "i", 78);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.sundayTimingsday);
} }
function CourseScheduleAddComponent_div_230_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 84)(1, "span", 85);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_230_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r48); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addSlotDetails(7)); });
    i0.ɵɵelementStart(2, "a");
    i0.ɵɵtext(3, "Start Time - End Time \u00A0");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "span", 76)(5, "button", 86);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_div_230_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r48); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addSlotDetails(7)); });
    i0.ɵɵelement(6, "i", 78);
    i0.ɵɵelementEnd()()();
} }
function CourseScheduleAddComponent_ng_template_231_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 102)(1, "div", 103);
    i0.ɵɵtext(2, " Please select the Valid \u00A0");
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4, "From Time & To Time");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, ". ");
    i0.ɵɵelementEnd()();
} }
function CourseScheduleAddComponent_ng_template_231_div_24_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 105);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_ng_template_231_div_24_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r50); const data_r51 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.selectDate(data_r51.id)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r51 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", data_r51.status == 0 ? "btn btn-outline-primary m-2" : "btn btn-primary m-2");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(data_r51.day);
} }
function CourseScheduleAddComponent_ng_template_231_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CourseScheduleAddComponent_ng_template_231_div_24_button_1_Template, 2, 2, "button", 104);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r51 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r51.show);
} }
function CourseScheduleAddComponent_ng_template_231_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 87)(1, "h4", 88);
    i0.ɵɵtext(2, "Schedule");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 89);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_ng_template_231_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r49); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "form", 90)(5, "div", 91)(6, "div", 8)(7, "div", 92)(8, "label");
    i0.ɵɵtext(9, "Teacher Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "ng-select", 93);
    i0.ɵɵlistener("change", function CourseScheduleAddComponent_ng_template_231_Template_ng_select_change_10_listener() { i0.ɵɵrestoreView(_r49); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.teacherSelection(ctx_r3.teacherListData)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 94)(12, "label");
    i0.ɵɵtext(13, "Start Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "ngb-timepicker", 95);
    i0.ɵɵtwoWayListener("ngModelChange", function CourseScheduleAddComponent_ng_template_231_Template_ngb_timepicker_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.fromTime, $event) || (ctx_r3.fromTime = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function CourseScheduleAddComponent_ng_template_231_Template_ngb_timepicker_ngModelChange_14_listener() { i0.ɵɵrestoreView(_r49); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.checkTime()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 94)(16, "label");
    i0.ɵɵtext(17, "End Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "ngb-timepicker", 95);
    i0.ɵɵtwoWayListener("ngModelChange", function CourseScheduleAddComponent_ng_template_231_Template_ngb_timepicker_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.toTime, $event) || (ctx_r3.toTime = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function CourseScheduleAddComponent_ng_template_231_Template_ngb_timepicker_ngModelChange_18_listener() { i0.ɵɵrestoreView(_r49); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.checkTime()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(19, CourseScheduleAddComponent_ng_template_231_div_19_Template, 6, 0, "div", 96);
    i0.ɵɵelementStart(20, "div", 97)(21, "h5", 98);
    i0.ɵɵtext(22, "Repeat for");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 99);
    i0.ɵɵtemplate(24, CourseScheduleAddComponent_ng_template_231_div_24_Template, 2, 1, "div", 100);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(25, "div", 101)(26, "button", 13);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_ng_template_231_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r49); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.submitSlot()); });
    i0.ɵɵtext(27, "Submit");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r3.slotform);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("items", ctx_r3.teacherListData);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.fromTime);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(12, _c3))("meridian", ctx_r3.meridian)("spinners", ctx_r3.spinner);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.toTime);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(13, _c3))("meridian", ctx_r3.meridian)("spinners", ctx_r3.spinner);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.timeErr);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r3.days);
} }
function CourseScheduleAddComponent_ng_template_233_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 106)(1, "h4", 107)(2, "b");
    i0.ɵɵtext(3, "Draft Class");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 91)(5, "h5", 108);
    i0.ɵɵtext(6, " Class will be saved as draft. Add a schedule to activate. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 101)(8, "button", 109);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_ng_template_233_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r52); const ctx_r3 = i0.ɵɵnextContext(); ctx_r3.close(); return i0.ɵɵresetView(ctx_r3.addCourseScheduleDetails()); });
    i0.ɵɵtext(9, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 110);
    i0.ɵɵlistener("click", function CourseScheduleAddComponent_ng_template_233_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r52); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.close()); });
    i0.ɵɵtext(11, "No");
    i0.ɵɵelementEnd()();
} }
export class CourseScheduleAddComponent {
    constructor(auth, fb, datepipe, route, validatorService, router, toastr, env, sanitizer, modalService) {
        this.auth = auth;
        this.fb = fb;
        this.datepipe = datepipe;
        this.route = route;
        this.validatorService = validatorService;
        this.router = router;
        this.toastr = toastr;
        this.env = env;
        this.sanitizer = sanitizer;
        this.modalService = modalService;
        this.myDpOptions = {
            dateRange: false,
            firstDayOfWeek: 'su',
            disableUntil: { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() - 1 },
            dateFormat: dateOptions.pickerFormat,
            calendarAnimation: {
                in: 4,
                out: 4
            }
        };
        this.myDpOptions1 = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat,
            disableUntil: { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() - 1 },
            calendarAnimation: {
                in: 4,
                out: 4
            }
        };
        this.myDpOptions2 = {
            dateRange: false,
            firstDayOfWeek: 'su',
            disableUntil: { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() - 1 },
            dateFormat: dateOptions.pickerFormat,
            calendarAnimation: {
                in: 4,
                out: 4
            }
        };
        this.myDpOptions3 = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat,
            disableUntil: { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() - 1 },
            calendarAnimation: {
                in: 4,
                out: 4
            }
        };
        this.type = 'add';
        this.courseListData = [];
        this.teacherListData = [];
        this.days = [
            { id: 1, day: 'Monday', status: 0, show: true },
            { id: 2, day: 'Tuesday', status: 0, show: true },
            { id: 3, day: 'Wednesday', status: 0, show: true },
            { id: 4, day: 'Thursday', status: 0, show: true },
            { id: 5, day: 'Friday', status: 0, show: true },
            { id: 6, day: 'Saturday', status: 0, show: true },
            { id: 7, day: 'Sunday', status: 0, show: true }
        ];
        this.fromTime = { hour: 0, minute: 0, seconds: 0 };
        this.toTime = { hour: 23, minute: 59, seconds: 0 };
        this.timeErr = false;
        this.meridian = true;
        this.spinner = false;
        this.scheduleTimeData = [];
        this.scheduleTimeData1 = [];
        this.oldScheduleTimeData = [];
        this.mondayTimings = [];
        this.tuesdayTimings = [];
        this.wednesDayTimingsday = [];
        this.thursdayTimingsday = [];
        this.fridayTimingsday = [];
        this.saturdayTimingsday = [];
        this.sundayTimingsday = [];
        this.teacherNameList = [];
        this.edquillTeacherId = [];
        this.refresh = new Subject();
        this.declareFormGroup();
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.slotform = this.fb.group({
            teacher_id: [[], Validators.required],
        });
        this.getCourseList();
        this.getTeacherList();
    }
    ngOnInit() {
        if (this.type == 'edit') {
            this.patchcourseScheduleDetails();
        }
    }
    declareFormGroup() {
        this.courseScheduleDetails = this.fb.group({
            course_id: [null],
            schedule_title: ['', Validators.required],
            start_date: [''],
            end_date: [''],
            registration_start_date: ['', Validators.required],
            registration_end_date: ['', Validators.required],
            course_type: ['', Validators.required],
            amount: ['', Validators.required],
            discount: ['', Validators.required],
            actual_amount: ['', Validators.required],
            slot_available: ['', Validators.required],
            payment_type: ['', Validators.required],
            payment_recurring: '',
            status: ['1', Validators.required],
        });
    }
    close() {
        this.modalRef.close();
    }
    numberValidation(event) {
        this.validatorService.numberValidate(event);
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
    getTeacherList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(data, urls.teacherList).subscribe((successData) => {
            this.teacherListSuccess(successData);
        }, (error) => {
            console.error(error, ' error');
        });
    }
    teacherListSuccess(successData) {
        console.log(successData, 'successData');
        this.teacherListData = successData.IsSuccess ? successData.ResponseObject : [];
        console.log(this.teacherListData, 'teacherListData');
    }
    calculateAmount() {
        const amount = this.courseScheduleDetails.controls.amount.value - this.courseScheduleDetails.controls.discount.value;
        this.courseScheduleDetails.controls.actual_amount.patchValue(amount);
    }
    patchcourseScheduleDetails() {
        this.courseEditDetails = JSON.parse(this.auth.getSessionData('editclass'));
        console.log(this.courseEditDetails, 'editCourseScheduleDetails');
        this.courseScheduleDetails.controls.course_id.patchValue(this.courseEditDetails[0].course_id ?
            this.courseEditDetails[0].course_id != '0' ? this.courseEditDetails[0].course_id : null : null);
        this.courseScheduleDetails.controls.schedule_title.patchValue(this.courseEditDetails[0].class_name);
        this.myDpOptions2 = {};
        this.myDpOptions2 = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat
        };
        if (this.courseEditDetails[0].start_date != '0000-00-00' && this.courseEditDetails[0].start_date) {
            const csd = this.courseEditDetails[0].start_date.split('-');
            const csdObject = {
                isRange: false,
                singleDate: { jsDate: new Date(parseInt(csd[0]), parseInt(String(csd[1] - 1)), parseInt(csd[2])) },
                dateRange: null
            };
            this.myDpOptions3 = {};
            this.myDpOptions3 = {
                dateRange: false,
                firstDayOfWeek: 'su',
                dateFormat: dateOptions.pickerFormat,
                disableUntil: {
                    year: parseInt(csd[0]),
                    month: parseInt(csd[1]),
                    day: parseInt(csd[2]) - 1
                },
                calendarAnimation: {
                    in: 4,
                    out: 4
                }
            };
            this.courseScheduleDetails.controls.start_date.patchValue(csdObject);
        }
        else {
            this.courseScheduleDetails.controls.start_date.patchValue(null);
        }
        this.myDpOptions2 = {};
        this.myDpOptions2 = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat,
            calendarAnimation: {
                in: 4,
                out: 4
            }
        };
        if (this.courseEditDetails[0].end_date != '0000-00-00' && this.courseEditDetails[0].end_date) {
            const ced = this.courseEditDetails[0].end_date.split('-');
            const cedObject = {
                isRange: false,
                singleDate: { jsDate: new Date(parseInt(ced[0]), parseInt(String(ced[1] - 1)), parseInt(ced[2])) },
                dateRange: null
            };
            this.courseScheduleDetails.controls.end_date.patchValue(cedObject);
        }
        else {
            this.courseScheduleDetails.controls.end_date.patchValue(null);
        }
        this.myDpOptions = {};
        this.myDpOptions = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat
        };
        if (this.courseEditDetails[0].registration_start_date != '0000-00-00' && this.courseEditDetails[0].registration_start_date) {
            const rsd = this.courseEditDetails[0].registration_start_date.split('-');
            const rsdObject = {
                isRange: false,
                singleDate: { jsDate: new Date(parseInt(rsd[0]), parseInt(String(rsd[1] - 1)), parseInt(rsd[2])) },
                dateRange: null
            };
            this.myDpOptions1 = {};
            this.myDpOptions1 = {
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
            this.courseScheduleDetails.controls.registration_start_date.patchValue(rsdObject);
        }
        else {
            this.courseScheduleDetails.controls.registration_start_date.patchValue(null);
        }
        if (this.courseEditDetails[0].registration_end_date != '0000-00-00' && this.courseEditDetails[0].registration_end_date) {
            const red = this.courseEditDetails[0].registration_end_date.split('-');
            const redObject = {
                isRange: false,
                singleDate: { jsDate: new Date(parseInt(red[0]), parseInt(String(red[1] - 1)), parseInt(red[2])) },
                dateRange: null
            };
            this.courseScheduleDetails.controls.registration_end_date.patchValue(redObject);
        }
        else {
            this.courseScheduleDetails.controls.registration_end_date.patchValue(null);
        }
        this.courseScheduleDetails.controls.course_type.patchValue(this.courseEditDetails[0].class_type ?? '');
        this.courseScheduleDetails.controls.amount.patchValue(this.courseEditDetails[0].cost ?? '');
        this.courseScheduleDetails.controls.discount.patchValue(this.courseEditDetails[0].discount_amount ?? '');
        this.courseScheduleDetails.controls.actual_amount.patchValue(this.courseEditDetails[0].actual_cost ?? '');
        this.courseScheduleDetails.controls.slot_available.patchValue(this.courseEditDetails[0].total_slots ?? '');
        this.courseScheduleDetails.controls.status.patchValue(this.courseEditDetails[0].status);
        this.courseScheduleDetails.controls.payment_type.patchValue(this.courseEditDetails[0].payment_type ?? '');
        if (this.courseScheduleDetails.controls.payment_type.value == 'R') {
            this.setFormValidation('payment_recurring');
        }
        this.courseScheduleDetails.controls.payment_recurring.patchValue(this.courseEditDetails[0].payment_sub_type ?? '');
        this.scheduleTimeData = this.courseEditDetails[0].availabilityDate;
        this.oldScheduleTimeData = this.courseEditDetails[0].availabilityDate;
        console.log(this.courseEditDetails[0].availabilityDate, 'this.courseEditDetails[0].sessions');
        this.getScheduleDayDetails();
        console.log(this.scheduleTimeData);
    }
    onDateChanged(event, endDateFormcontrol) {
        const dateObject = this.validatorService.validateEndDate(event, endDateFormcontrol, this.courseScheduleDetails);
        console.log(dateObject, 'dateObjecte');
        if (endDateFormcontrol == 'registration_end_date') {
            this.myDpOptions1 = {};
            this.myDpOptions1 = dateObject;
        }
        else if (endDateFormcontrol == 'end_date') {
            this.myDpOptions3 = {};
            this.myDpOptions3 = dateObject;
        }
    }
    checkSelectedValue() {
        if (this.courseScheduleDetails.controls.payment_type.value == 'F') {
            this.removeFormValidation('payment_recurring');
        }
        else {
            this.setFormValidation('payment_recurring');
        }
    }
    setFormValidation(formControlName) {
        this.courseScheduleDetails.controls[formControlName].setValidators([Validators.required]);
        this.courseScheduleDetails.controls[formControlName].updateValueAndValidity();
    }
    removeFormValidation(formControlName) {
        this.courseScheduleDetails.controls[formControlName].clearValidators();
        this.courseScheduleDetails.controls[formControlName].setValidators(null);
        this.courseScheduleDetails.controls[formControlName].updateValueAndValidity();
    }
    addSlotDetails(type) {
        this.days.forEach((item) => {
            item.show = true;
            item.status = 0;
        });
        this.days[type - 1].show = false;
        this.scheduleTimeData = [];
        this.slotform.controls.teacher_id.patchValue([]);
        this.fromTime = { hour: 0, minute: 0, seconds: 0 };
        this.toTime = { hour: 23, minute: 59, seconds: 0 };
        this.modalRef = this.modalService.open(this.addSlot, { size: 'md', backdrop: 'static', centered: true });
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
        this.daytype = type;
    }
    selectDate(id) {
        const timeValid = this.checkTime();
        if (!timeValid) {
            this.validatingTime(this.fromTime, this.toTime);
            console.log(this.days, 'this.days');
            for (let i = 0; i < this.days.length; i++) {
                if (this.days[i].id == id) {
                    if (this.days[i].status == 0) {
                        this.edquillTeacherId = [];
                        this.teacherListData.filter((data1) => {
                            this.slotform.controls.teacher_id.value.filter((data2) => {
                                if (data1.teacher_id == data2) {
                                    this.edquillTeacherId.push(data1.teacher_id);
                                }
                            });
                        });
                        this.scheduleTimeData.push({
                            slotday: this.days[i].id,
                            slotstarttime: this.startTime,
                            slotendtime: this.endTime,
                            teacher_name: this.slotform.controls.teacher_id.value,
                            teacher_id: this.edquillTeacherId
                        });
                        this.days[i].status = 1;
                    }
                    else {
                        this.scheduleTimeData.forEach((item) => {
                            console.log(item, 'schedus slotday');
                            if (item.slotday == this.days[i].id) {
                                const index = this.scheduleTimeData.indexOf(item);
                                console.log(index, 'index');
                                this.scheduleTimeData.splice(index, 1);
                            }
                        });
                        this.days[i].status = 0;
                    }
                }
            }
            console.log(this.scheduleTimeData, 'schedule');
        }
    }
    teacherSelection(data) {
        this.teacherNameList = [];
        data.filter((data1) => {
            this.slotform.controls.teacher_id.value.filter((data2) => {
                if (data1.teacher_id == data2) {
                    this.teacherNameList.push(data1.teacher_name);
                }
            });
        });
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
            this.timeErr = fulltoTime <= fullFromTime;
        }
        return this.timeErr;
    }
    submitSlot() {
        this.validatingTime(this.fromTime, this.toTime);
        /// checking time difference between two times
        const difference = this.getTimeDiference(this.fromTime, this.toTime);
        if (difference) {
            if (this.slotform.controls.teacher_id.value.length != '0') {
                this.edquillTeacherId = [];
                this.teacherListData.filter((data1) => {
                    this.slotform.controls.teacher_id.value.filter((data2) => {
                        if (data1.teacher_id == data2) {
                            this.edquillTeacherId.push(data1.teacher_id);
                        }
                    });
                });
                const firstSelectedDate = [{
                        slotday: this.daytype,
                        slotstarttime: this.startTime,
                        slotendtime: this.endTime,
                        teacher_name: this.slotform.controls.teacher_id.value,
                        teacher_id: this.edquillTeacherId
                    }];
                const data21 = {
                    previous_availabilityDate: this.oldScheduleTimeData,
                    selected_availabilityDate: [...firstSelectedDate, ...this.scheduleTimeData]
                };
                this.auth.postService(data21, urls.availabilityTimeCheck).subscribe((successData) => {
                    this.timeListSuccess(successData);
                }, (error) => {
                    console.log(error);
                });
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
            this.scheduleTimeData.push({
                slotday: this.daytype,
                slotstarttime: this.startTime,
                slotendtime: this.endTime,
                teacher_name: this.slotform.controls.teacher_id.value,
                teacher_id: this.edquillTeacherId
            });
            this.getScheduleDayDetails();
            this.oldScheduleTimeData = this.scheduleTimeData1;
            this.toastr.success(successData.ResponseObject);
            this.close();
        }
        else {
            this.toastr.error(successData.ResponseObject);
            this.scheduleTimeData = [];
            this.days.forEach((items) => {
                items.status = 0;
            });
        }
    }
    getScheduleDayDetails() {
        this.scheduleTimeData.forEach((item, index) => {
            if (item.slotday == 1) {
                item.teacher_name = this.teacherNameList.length != 0 ? this.teacherNameList : item?.teacher_name;
                this.mondayTimings.push(item);
            }
            else if (item.slotday == 2) {
                item.teacher_name = this.teacherNameList.length != 0 ? this.teacherNameList : item?.teacher_name;
                this.tuesdayTimings.push(item);
            }
            else if (item.slotday == 3) {
                item.teacher_name = this.teacherNameList.length != 0 ? this.teacherNameList : item?.teacher_name;
                this.wednesDayTimingsday.push(item);
            }
            else if (item.slotday == 4) {
                item.teacher_name = this.teacherNameList.length != 0 ? this.teacherNameList : item?.teacher_name;
                this.thursdayTimingsday.push(item);
            }
            else if (item.slotday == 5) {
                item.teacher_name = this.teacherNameList.length != 0 ? this.teacherNameList : item?.teacher_name;
                this.fridayTimingsday.push(item);
            }
            else if (item.slotday == 6) {
                item.teacher_name = this.teacherNameList.length != 0 ? this.teacherNameList : item?.teacher_name;
                this.saturdayTimingsday.push(item);
            }
            else if (item.slotday == 7) {
                item.teacher_name = this.teacherNameList.length != 0 ? this.teacherNameList : item?.teacher_name;
                this.sundayTimingsday.push(item);
            }
            this.allSchduleData();
        });
        console.log(this.scheduleTimeData, 'All');
    }
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
    getTimeDiference(fromtime, totime) {
        let startTime = parseInt(fromtime.hour) * 60;
        startTime = startTime + parseInt(fromtime.minute);
        let toTime = parseInt(totime.hour) * 60;
        toTime = toTime + parseInt(totime.minute);
        return (toTime - startTime) >= 1;
    }
    deleteTime(type, id, event) {
        console.log(this.scheduleTimeData, id, event);
        console.log(this.oldScheduleTimeData, ';oldSchedule');
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
        this.oldScheduleTimeData.forEach((oldTime, index) => {
            if (oldTime.slotday == event.slotday && (oldTime.slotstarttime == event.slotstarttime) && (oldTime.slotendtime == event.slotendtime)) {
                const insturctorChecked = oldTime.teacher_name.some((element) => event.teacher_name.includes(element));
                console.log(insturctorChecked, 'insturctorChecked');
                if (insturctorChecked) {
                    this.oldScheduleTimeData.splice(index, 1);
                }
            }
        });
        console.log(this.oldScheduleTimeData, 'oldShedule');
        this.allSchduleData();
    }
    allSchduleData() {
        let arr = [];
        arr = arr.concat(this.mondayTimings);
        arr = arr.concat(this.tuesdayTimings);
        arr = arr.concat(this.wednesDayTimingsday);
        arr = arr.concat(this.thursdayTimingsday);
        arr = arr.concat(this.fridayTimingsday);
        arr = arr.concat(this.saturdayTimingsday);
        arr = arr.concat(this.sundayTimingsday);
        this.scheduleTimeData1 = arr;
        console.log(arr);
        console.log(this.scheduleTimeData1);
    }
    submitClass() {
        if (this.type == 'add' || this.type == 'edit') {
            if (this.courseScheduleDetails.valid) {
                let submit = false;
                submit = this.courseScheduleDetails.controls.start_date.value != null && this.courseScheduleDetails.controls.end_date.value != null && this.scheduleTimeData1.length != 0;
                if (!submit) {
                    this.modalRef = this.modalService.open(this.classCheck);
                }
                else {
                    this.addCourseScheduleDetails();
                }
            }
            else {
                this.validatorService.validateAllFormFields(this.courseScheduleDetails);
                this.toastr.error('Please Fill All The Mandatory Fields');
            }
        }
        else {
            this.addCourseScheduleDetails();
        }
    }
    addCourseScheduleDetails() {
        console.log(this.courseScheduleDetails, 'courseScheduleDetails');
        if (this.courseScheduleDetails.valid) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                course_id: this.courseScheduleDetails.controls.course_id.value ?? '',
                name: this.courseScheduleDetails.controls.schedule_title.value,
                start_date: this.courseScheduleDetails.controls.start_date.value != '' && this.courseScheduleDetails.controls.start_date.value != '0000-00-00'
                    ? this.datepipe.transform(this.courseScheduleDetails.controls.start_date.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                end_date: this.courseScheduleDetails.controls.end_date.value != '' && this.courseScheduleDetails.controls.end_date.value != '0000-00-00' ? this.datepipe.transform(this.courseScheduleDetails.controls.end_date.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                registration_start_date: this.courseScheduleDetails.controls.registration_start_date.value != '' && this.courseScheduleDetails.controls.registration_start_date.value != '0000-00-00'
                    ? this.datepipe.transform(this.courseScheduleDetails.controls.registration_start_date.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                registration_end_date: this.courseScheduleDetails.controls.registration_end_date.value != '' && this.courseScheduleDetails.controls.registration_end_date.value != '0000-00-00'
                    ? this.datepipe.transform(this.courseScheduleDetails.controls.registration_end_date.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                payment_type: this.courseScheduleDetails.controls.payment_type.value,
                payment_sub_type: this.courseScheduleDetails.controls.payment_recurring.value,
                class_type: this.courseScheduleDetails.controls.course_type.value,
                cost: this.courseScheduleDetails.controls.amount.value,
                discount: this.courseScheduleDetails.controls.discount.value,
                total_slots: this.courseScheduleDetails.controls.slot_available.value,
                status: this.courseScheduleDetails.controls.status.value,
                availabilityDate: this.scheduleTimeData1,
                grade: [],
                batch_id: [],
                subject: [],
                tags: [],
                profile_url: '',
                profile_thumb_url: '',
                video_link: [],
                meeting_link: '',
                meeting_id: '',
                passcode: '',
                file_path: [],
                links: [],
                file_text: '',
                content_id: [],
                class_status: '0',
                telephone_number: '',
                class_id: '',
                notes: [],
            };
            console.log(data, 'data');
            if (this.type != 'add') {
                data['class_code'] = this.courseEditDetails[0].class_code;
                data['class_id'] = this.courseEditDetails[0].class_id;
            }
            console.log(data, 'scheduleData');
            const url = this.type == 'add' ? urls.addCourseSchedule : urls.updateCourseSchedule;
            this.auth.postService(data, url).subscribe((successData) => {
                this.addCourseScheduleSuccess(successData);
            }, (error) => {
                console.error(error, 'CourseSchedule error');
            });
        }
        else {
            const findInvalidControls = () => {
                const invalid = [];
                const controls = this.courseScheduleDetails.controls;
                for (const name in controls) {
                    if (controls[name].invalid) {
                        invalid.push(name);
                    }
                }
                return invalid;
            };
            console.log('findInvalidControls', findInvalidControls());
            this.validatorService.validateAllFormFields(this.courseScheduleDetails);
            this.toastr.error('Please fill all Mandatory fields');
        }
    }
    addCourseScheduleSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success('Course Schedule Added Successfully');
            this.router.navigate(['/class/list-class']);
        }
        else {
            this.toastr.error(successData.ErrorObject);
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
    static { this.ɵfac = function CourseScheduleAddComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CourseScheduleAddComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.DatePipe), i0.ɵɵdirectiveInject(i4.ActivatedRoute), i0.ɵɵdirectiveInject(i5.ValidationService), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i6.ToastrService), i0.ɵɵdirectiveInject(i7.EnvironmentService), i0.ɵɵdirectiveInject(i8.DomSanitizer), i0.ɵɵdirectiveInject(i9.NgbModal)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CourseScheduleAddComponent, selectors: [["app-course-schedule-add"]], viewQuery: function CourseScheduleAddComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInputVariable = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addSlot = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.classCheck = _t.first);
        } }, decls: 235, vars: 36, consts: [["dp", "angular-mydatepicker"], ["dp1", "angular-mydatepicker"], ["dp2", "angular-mydatepicker"], ["dp3", "angular-mydatepicker"], ["addSlot", ""], ["classCheck", ""], [1, "container-fluid", "card"], [1, "card-header"], [1, "row"], [1, "col-6", "col-md-6"], [1, "text-capitalize"], [1, "pull-right"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "text-muted"], [1, "text-danger"], [1, "card-body"], [3, "formGroup"], [1, "form-group", "row", "mt-1"], [1, "col-sm-2", "col-form-label"], [1, "mr-1", "text-danger", 2, "visibility", "hidden"], [1, "col-sm-10"], ["appendTo", "body", "formControlName", "course_id", "bindLabel", "course_name", "bindValue", "course_id", "placeholder", "Select course", "typeToSearchText", "", 3, "items", "clearable"], [1, "form-group", "row", "mt-2"], ["for", "inputCourse", 1, "col-sm-2", "col-form-label"], [1, "mr-1", "text-danger"], ["placeholder", "Schedule Title", "formControlName", "schedule_title", 1, "form-control"], ["class", "error", 4, "ngIf"], [1, "input-group"], ["name", "registration_start_date", "placeholder", "mm-dd-yyyy", "formControlName", "registration_start_date", "angular-mydatepicker", "", 1, "form-control", 3, "keypress", "click", "dateChanged", "options"], [1, "input-group-append"], [1, "fa", "fa-calendar-o"], ["name", "registration_end_date", "placeholder", "mm-dd-yyyy", "formControlName", "registration_end_date", "angular-mydatepicker", "", 1, "form-control", 3, "keypress", "click", "options"], [1, "main-content"], ["formControlName", "course_type", 1, "form-control"], ["value", "", "selected", "", "disabled", "", "hidden", ""], ["value", "1"], ["value", "2"], ["type", "button", 1, "btn", "btn-primary", 2, "padding", "6px 18px"], ["id", "inputAmount", "placeholder", "Amount", "formControlName", "amount", 1, "form-control", 3, "input", "keypress"], ["id", "inputDiscount", "placeholder", "Discount Amount", "formControlName", "discount", 1, "form-control", 3, "input", "keypress"], ["id", "inputCourse", "placeholder", "Actual Amount", "formControlName", "actual_amount", "readonly", "", 1, "form-control"], ["for", "inputSlot", 1, "col-sm-2", "col-form-label"], ["maxlength", "4", "id", "inputSlot", "placeholder", "Slots Available", "formControlName", "slot_available", 1, "form-control", 3, "keypress"], ["formControlName", "status", 1, "form-control"], ["formControlName", "payment_type", 1, "form-control", 3, "change"], ["value", "F"], ["value", "R"], ["class", "col-sm-6 pr-0 row", 4, "ngIf"], [1, "row", "d-flex", "justify-content-between", "list-title"], [1, "col-12", "pt-2", "mb-1"], [1, "m-0", "my-2", "color-primary"], [1, "bg-primary"], [1, "form-group", "col-4", "mt-1", "mb-0"], [1, "col-form-label"], [1, "form-group"], ["name", "start_date", "placeholder", "mm-dd-yyyy", "formControlName", "start_date", "angular-mydatepicker", "", 1, "form-control", 3, "keypress", "click", "dateChanged", "options"], ["name", "end_date", "placeholder", "mm-dd-yyyy", "formControlName", "end_date", "angular-mydatepicker", "", 1, "form-control", 3, "keypress", "click", "options"], [1, "row", "mt-2"], [1, "col-12"], [1, "m-0", "color-primary"], [1, "row", "d-flex", "flex-row", "p-2"], ["class", "ml-1 d-flex align-items-center", 4, "ngIf"], ["class", "ml-1 d-flex align-items-center cursor", 4, "ngIf"], [1, "error"], [1, "col-sm-6", "pr-0", "row"], [1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "main-content", "pr-0"], ["formControlName", "payment_recurring", 1, "form-control"], ["value", "W"], ["value", "M"], ["value", "Q"], ["value", "H"], ["value", "A"], [1, "ml-1", "d-flex", "align-items-center"], ["class", "badge badge-pill badge-grey-selected ml-2", 4, "ngFor", "ngForOf"], [1, "ml-2"], ["type", "button", 1, "badge-btn", "cursor", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus"], [1, "badge", "badge-pill", "badge-grey-selected", "ml-2"], [1, "slot-title"], [1, "slot-time-title"], [1, "rounded-circle", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-close", "rounded-circle", "color-primary"], [1, "ml-1", "d-flex", "align-items-center", "cursor"], [1, "badge", "badge-pill", "badge-grey-selected", "d-flex", "align-items-center", "ml-2", 3, "click"], ["type", "button", 1, "badge-btn", 3, "click"], [1, "modal-header", "align-items-center"], [1, "modal-title"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "telemedicineaAddAvailability", 3, "formGroup"], [1, "modal-body"], [1, "col-md-12", "form-group"], ["formControlName", "teacher_id", "bindLabel", "teacher_name", "bindValue", "teacher_id", "placeholder", "Select Teacher", "typeToSearchText", "", "multiple", "true", 3, "change", "items"], [1, "col-md-6", "form-group"], [3, "ngModelChange", "ngModel", "ngModelOptions", "meridian", "spinners"], ["class", "w-100 text-center", 4, "ngIf"], [1, "col-md-12"], [1, "text-center"], [1, "row", "d-flex", "justify-content-center"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], [1, "w-100", "text-center"], [1, "alert", "alert-danger"], ["type", "button", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", 3, "click", "ngClass"], [1, "modal-header"], [1, "text-center", "col-12", "modal-title"], [1, "color-primary"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-outline-primary", 3, "click"]], template: function CourseScheduleAddComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "section")(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "div", 9)(5, "h5", 10);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 9)(8, "div", 11)(9, "button", 12);
            i0.ɵɵlistener("click", function CourseScheduleAddComponent_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.addCourseScheduleDetails()); });
            i0.ɵɵtext(10, "Save as draft");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 13);
            i0.ɵɵlistener("click", function CourseScheduleAddComponent_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.submitClass()); });
            i0.ɵɵtext(12, "Save");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(13, "label", 14);
            i0.ɵɵtext(14, "All fields marked with ");
            i0.ɵɵelementStart(15, "span", 15);
            i0.ɵɵtext(16, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(17, " are required");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "div", 16)(19, "form", 17)(20, "div", 18)(21, "label", 19)(22, "span", 20);
            i0.ɵɵtext(23, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(24, "Course Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div", 21);
            i0.ɵɵelement(26, "ng-select", 22);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "div", 23)(28, "label", 24)(29, "span", 25);
            i0.ɵɵtext(30, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(31, "Schedule Title");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "div", 21);
            i0.ɵɵelement(33, "input", 26);
            i0.ɵɵtemplate(34, CourseScheduleAddComponent_em_34_Template, 2, 0, "em", 27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(35, "div", 18)(36, "label", 19)(37, "span", 25);
            i0.ɵɵtext(38, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(39, "Registration Start Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "div", 21)(41, "div", 28)(42, "input", 29, 0);
            i0.ɵɵlistener("keypress", function CourseScheduleAddComponent_Template_input_keypress_42_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView($event.preventDefault()); })("click", function CourseScheduleAddComponent_Template_input_click_42_listener() { i0.ɵɵrestoreView(_r1); const dp_r2 = i0.ɵɵreference(43); return i0.ɵɵresetView(dp_r2.toggleCalendar()); })("dateChanged", function CourseScheduleAddComponent_Template_input_dateChanged_42_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDateChanged($event, "registration_end_date")); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "div", 30)(45, "button", 13);
            i0.ɵɵlistener("click", function CourseScheduleAddComponent_Template_button_click_45_listener() { i0.ɵɵrestoreView(_r1); const dp_r2 = i0.ɵɵreference(43); return i0.ɵɵresetView(dp_r2.toggleCalendar()); });
            i0.ɵɵelement(46, "i", 31);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(47, CourseScheduleAddComponent_em_47_Template, 2, 0, "em", 27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(48, "div", 18)(49, "label", 19)(50, "span", 25);
            i0.ɵɵtext(51, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(52, "Registration End Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "div", 21)(54, "div", 28)(55, "input", 32, 1);
            i0.ɵɵlistener("keypress", function CourseScheduleAddComponent_Template_input_keypress_55_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView($event.preventDefault()); })("click", function CourseScheduleAddComponent_Template_input_click_55_listener() { i0.ɵɵrestoreView(_r1); const dp1_r3 = i0.ɵɵreference(56); return i0.ɵɵresetView(dp1_r3.toggleCalendar()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(57, "div", 30)(58, "button", 13);
            i0.ɵɵlistener("click", function CourseScheduleAddComponent_Template_button_click_58_listener() { i0.ɵɵrestoreView(_r1); const dp1_r3 = i0.ɵɵreference(56); return i0.ɵɵresetView(dp1_r3.toggleCalendar()); });
            i0.ɵɵelement(59, "i", 31);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(60, CourseScheduleAddComponent_em_60_Template, 2, 0, "em", 27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(61, "div", 18)(62, "label", 19)(63, "span", 25);
            i0.ɵɵtext(64, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(65, "Course Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "div", 21)(67, "div", 33)(68, "select", 34)(69, "option", 35);
            i0.ɵɵtext(70, "Select Course Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(71, "option", 36);
            i0.ɵɵtext(72, "Online");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "option", 37);
            i0.ɵɵtext(74, "In-Person");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(75, CourseScheduleAddComponent_em_75_Template, 2, 0, "em", 27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(76, "div", 23)(77, "label", 24)(78, "span", 25);
            i0.ɵɵtext(79, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(80, "Amount");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(81, "div", 21)(82, "div", 28)(83, "div", 30)(84, "button", 38);
            i0.ɵɵtext(85, "$");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(86, "input", 39);
            i0.ɵɵlistener("input", function CourseScheduleAddComponent_Template_input_input_86_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.calculateAmount()); })("keypress", function CourseScheduleAddComponent_Template_input_keypress_86_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.numberValidation($event)); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(87, CourseScheduleAddComponent_em_87_Template, 2, 0, "em", 27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(88, "div", 23)(89, "label", 24)(90, "span", 25);
            i0.ɵɵtext(91, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(92, "Discount Amount");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(93, "div", 21)(94, "div", 28)(95, "div", 30)(96, "button", 38);
            i0.ɵɵtext(97, "$");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(98, "input", 40);
            i0.ɵɵlistener("input", function CourseScheduleAddComponent_Template_input_input_98_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.calculateAmount()); })("keypress", function CourseScheduleAddComponent_Template_input_keypress_98_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.numberValidation($event)); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(99, CourseScheduleAddComponent_em_99_Template, 2, 0, "em", 27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(100, "div", 23)(101, "label", 24)(102, "span", 25);
            i0.ɵɵtext(103, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(104, "Actual Amount");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(105, "div", 21)(106, "div", 28)(107, "div", 30)(108, "button", 38);
            i0.ɵɵtext(109, "$");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(110, "input", 41);
            i0.ɵɵtemplate(111, CourseScheduleAddComponent_em_111_Template, 2, 0, "em", 27);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(112, "div", 23)(113, "label", 42)(114, "span", 25);
            i0.ɵɵtext(115, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(116, "Slots Available");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(117, "div", 21)(118, "input", 43);
            i0.ɵɵlistener("keypress", function CourseScheduleAddComponent_Template_input_keypress_118_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.numberValidation($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(119, CourseScheduleAddComponent_em_119_Template, 2, 0, "em", 27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(120, "div", 18)(121, "label", 19)(122, "span", 25);
            i0.ɵɵtext(123, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(124, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(125, "div", 21)(126, "div", 33)(127, "select", 44)(128, "option", 36);
            i0.ɵɵtext(129, "Active");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(130, "option", 37);
            i0.ɵɵtext(131, "Suspended");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(132, CourseScheduleAddComponent_em_132_Template, 2, 0, "em", 27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(133, "div", 18)(134, "label", 19)(135, "span", 25);
            i0.ɵɵtext(136, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(137, "Payment Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(138, "div")(139, "div", 33)(140, "select", 45);
            i0.ɵɵlistener("change", function CourseScheduleAddComponent_Template_select_change_140_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.checkSelectedValue()); });
            i0.ɵɵelementStart(141, "option", 35);
            i0.ɵɵtext(142, "Select Payment Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(143, "option", 46);
            i0.ɵɵtext(144, "Fixed");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(145, "option", 47);
            i0.ɵɵtext(146, "Recurring");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(147, CourseScheduleAddComponent_em_147_Template, 2, 0, "em", 27);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(148, CourseScheduleAddComponent_div_148_Template, 20, 1, "div", 48);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(149, "div", 49)(150, "div", 50)(151, "h4", 51);
            i0.ɵɵtext(152, "Schedule");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(153, "hr", 52);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(154, "div", 8)(155, "div", 53)(156, "label", 54);
            i0.ɵɵtext(157, "Start Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(158, "div", 55)(159, "div", 28)(160, "input", 56, 2);
            i0.ɵɵlistener("keypress", function CourseScheduleAddComponent_Template_input_keypress_160_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView($event.preventDefault()); })("click", function CourseScheduleAddComponent_Template_input_click_160_listener() { i0.ɵɵrestoreView(_r1); const dp2_r5 = i0.ɵɵreference(161); return i0.ɵɵresetView(dp2_r5.toggleCalendar()); })("dateChanged", function CourseScheduleAddComponent_Template_input_dateChanged_160_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDateChanged($event, "end_date")); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(162, "div", 30)(163, "button", 13);
            i0.ɵɵlistener("click", function CourseScheduleAddComponent_Template_button_click_163_listener() { i0.ɵɵrestoreView(_r1); const dp2_r5 = i0.ɵɵreference(161); return i0.ɵɵresetView(dp2_r5.toggleCalendar()); });
            i0.ɵɵelement(164, "i", 31);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(165, "div", 53)(166, "label", 54);
            i0.ɵɵtext(167, "End Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(168, "div", 55)(169, "div", 28)(170, "input", 57, 3);
            i0.ɵɵlistener("keypress", function CourseScheduleAddComponent_Template_input_keypress_170_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView($event.preventDefault()); })("click", function CourseScheduleAddComponent_Template_input_click_170_listener() { i0.ɵɵrestoreView(_r1); const dp3_r6 = i0.ɵɵreference(171); return i0.ɵɵresetView(dp3_r6.toggleCalendar()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(172, "div", 30)(173, "button", 13);
            i0.ɵɵlistener("click", function CourseScheduleAddComponent_Template_button_click_173_listener() { i0.ɵɵrestoreView(_r1); const dp3_r6 = i0.ɵɵreference(171); return i0.ɵɵresetView(dp3_r6.toggleCalendar()); });
            i0.ɵɵelement(174, "i", 31);
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵelementStart(175, "div", 58)(176, "div", 59)(177, "h5", 60);
            i0.ɵɵtext(178, "Monday");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(179, "div", 59)(180, "div", 61);
            i0.ɵɵtemplate(181, CourseScheduleAddComponent_div_181_Template, 5, 1, "div", 62)(182, CourseScheduleAddComponent_div_182_Template, 7, 0, "div", 63);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(183, "div", 58)(184, "div", 59)(185, "h5", 60);
            i0.ɵɵtext(186, "Tuesday");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(187, "div", 59)(188, "div", 61);
            i0.ɵɵtemplate(189, CourseScheduleAddComponent_div_189_Template, 5, 1, "div", 62)(190, CourseScheduleAddComponent_div_190_Template, 7, 0, "div", 63);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(191, "div", 58)(192, "div", 59)(193, "h5", 60);
            i0.ɵɵtext(194, "Wednesday");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(195, "div", 59)(196, "div", 61);
            i0.ɵɵtemplate(197, CourseScheduleAddComponent_div_197_Template, 5, 1, "div", 62)(198, CourseScheduleAddComponent_div_198_Template, 7, 0, "div", 63);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(199, "div", 58)(200, "div", 59)(201, "h5", 60);
            i0.ɵɵtext(202, "Thursday");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(203, "div", 59)(204, "div", 61);
            i0.ɵɵtemplate(205, CourseScheduleAddComponent_div_205_Template, 5, 1, "div", 62)(206, CourseScheduleAddComponent_div_206_Template, 7, 0, "div", 63);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(207, "div", 58)(208, "div", 59)(209, "h5", 60);
            i0.ɵɵtext(210, "Friday");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(211, "div", 59)(212, "div", 61);
            i0.ɵɵtemplate(213, CourseScheduleAddComponent_div_213_Template, 5, 1, "div", 62)(214, CourseScheduleAddComponent_div_214_Template, 7, 0, "div", 63);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(215, "div", 58)(216, "div", 59)(217, "h5", 60);
            i0.ɵɵtext(218, "Saturday");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(219, "div", 59)(220, "div", 61);
            i0.ɵɵtemplate(221, CourseScheduleAddComponent_div_221_Template, 5, 1, "div", 62)(222, CourseScheduleAddComponent_div_222_Template, 7, 0, "div", 63);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(223, "div", 58)(224, "div", 59)(225, "h5", 60);
            i0.ɵɵtext(226, "Sunday");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(227, "div", 59)(228, "div", 61);
            i0.ɵɵtemplate(229, CourseScheduleAddComponent_div_229_Template, 5, 1, "div", 62)(230, CourseScheduleAddComponent_div_230_Template, 7, 0, "div", 63);
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵtemplate(231, CourseScheduleAddComponent_ng_template_231_Template, 28, 14, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(233, CourseScheduleAddComponent_ng_template_233_Template, 12, 0, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("", ctx.type == "add" ? "Add" : "Edit", " Class");
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("formGroup", ctx.courseScheduleDetails);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("items", ctx.courseListData)("clearable", false);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.courseScheduleDetails.get("schedule_title").valid && (ctx.courseScheduleDetails.get("schedule_title").dirty || ctx.courseScheduleDetails.get("schedule_title").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("options", ctx.myDpOptions);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", !ctx.courseScheduleDetails.get("registration_start_date").valid && (ctx.courseScheduleDetails.get("registration_start_date").dirty || ctx.courseScheduleDetails.get("registration_start_date").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("options", ctx.myDpOptions1);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", !ctx.courseScheduleDetails.get("registration_end_date").valid && (ctx.courseScheduleDetails.get("registration_end_date").dirty || ctx.courseScheduleDetails.get("registration_end_date").touched));
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("ngIf", !ctx.courseScheduleDetails.get("course_type").valid && (ctx.courseScheduleDetails.get("course_type").dirty || ctx.courseScheduleDetails.get("course_type").touched));
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("ngIf", !ctx.courseScheduleDetails.get("amount").valid && (ctx.courseScheduleDetails.get("amount").dirty || ctx.courseScheduleDetails.get("amount").touched));
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("ngIf", !ctx.courseScheduleDetails.get("discount").valid && (ctx.courseScheduleDetails.get("discount").dirty || ctx.courseScheduleDetails.get("discount").touched));
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("ngIf", !ctx.courseScheduleDetails.get("actual_amount").valid && (ctx.courseScheduleDetails.get("actual_amount").dirty || ctx.courseScheduleDetails.get("actual_amount").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.courseScheduleDetails.get("slot_available").valid && (ctx.courseScheduleDetails.get("slot_available").dirty || ctx.courseScheduleDetails.get("slot_available").touched));
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("ngIf", !ctx.courseScheduleDetails.get("status").valid && (ctx.courseScheduleDetails.get("status").dirty || ctx.courseScheduleDetails.get("status").touched));
            i0.ɵɵadvance(6);
            i0.ɵɵclassMapInterpolate1("col-sm-", ctx.courseScheduleDetails.controls.payment_type.value == "R" ? "4" : "10", "");
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngIf", !ctx.courseScheduleDetails.get("payment_type").valid && (ctx.courseScheduleDetails.get("payment_type").dirty || ctx.courseScheduleDetails.get("payment_type").touched));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.courseScheduleDetails.controls.payment_type.value == "R");
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("options", ctx.myDpOptions2);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("options", ctx.myDpOptions3);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngIf", ctx.mondayTimings.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.mondayTimings.length == 0);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.tuesdayTimings.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.tuesdayTimings.length == 0);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.wednesDayTimingsday.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.wednesDayTimingsday.length == 0);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.thursdayTimingsday.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.thursdayTimingsday.length == 0);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.fridayTimingsday.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.fridayTimingsday.length == 0);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.saturdayTimingsday.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.saturdayTimingsday.length == 0);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.sundayTimingsday.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.sundayTimingsday.length == 0);
        } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i9.NgbTimepicker, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.MaxLengthValidator, i2.FormGroupDirective, i2.FormControlName, i10.NgSelectComponent, i2.NgModel, i11.AngularMyDatePickerDirective], styles: [".custom-upload-input[_ngcontent-%COMP%] {\n  color: transparent;\n}\n.custom-upload-input[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n.custom-upload-input[_ngcontent-%COMP%]::before {\n  content: 'Choose files';\n  display: inline-block;\n  background: #1d6aa5;\n  border-radius: 3px;\n  padding: 12px 15px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 11pt;\n  color: #fff;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: block;\n}\n.custom-upload-input[_ngcontent-%COMP%]:hover::before {\n  border-color: black;\n}\n.custom-upload-input[_ngcontent-%COMP%]:active {\n  outline: 0;\n}\n.custom-upload-input[_ngcontent-%COMP%]:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n\n/////////\n.whitColr[_ngcontent-%COMP%]{\n    color: white;\n  }\n\n  .cardStyle[_ngcontent-%COMP%]{\n    background: #eaeaea;\n    width: 18rem;\n  }\n  .alignCenter[_ngcontent-%COMP%]{\n    align-self: center;\n  }\n  .dayTitle[_ngcontent-%COMP%]{\n    width: 100px;;\n  }\n  .addBtn[_ngcontent-%COMP%]{\n    background: white;\n    color: deepskyblue;\n    width: 115px;\n    border-color: deepskyblue;\n    border-radius: 10px;\n    border-width: 1px;\n  }\n\n  .addingTimeBtn[_ngcontent-%COMP%]{\n    background: white;\n    color: deepskyblue;\n    width: 30px;\n    border-color: deepskyblue;\n    border-radius: 10px;\n    border-width: 1px;\n  }\n\n  .addUnAvlBtn[_ngcontent-%COMP%]{\n    width: 166px;\n    height: 22px;\n    background: white;\n    color: red;\n    border-radius: 22px;\n    font-size: 13px;\n  }\n\n  .badge-danger[_ngcontent-%COMP%]{\n    width: 166px;\n    height: 22px;\n    border-radius: 22px;\n    font-size: 13px;\n  }\n\n  .badge-primary[_ngcontent-%COMP%]{\n    font-size: 14px;\n    height: 28px;\n    padding: 7px;\n    background-color: #ffffff;\n    color: #7F3486;\n    border-color: #7F3486;\n    border-style: ridge;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n  .badge-grey[_ngcontent-%COMP%]{\n    font-size: 14px;\n    height: 38px;\n    padding: 10px;\n    background-color: #ffffff;\n    color: #7F3486;\n    border-color: #808080;\n    border-style: ridge;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n  .badge-grey[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    color: #7F3486;\n  }\n  .badge-grey-selected[_ngcontent-%COMP%] {\n    font-size: 14px;\n    height: 38px;\n    padding: 10px;\n    background-color: #ffffff;\n    color: #808080;\n    border-color: #808080;\n    border-style: ridge;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n  .badge-btn[_ngcontent-%COMP%] {\n    font-size: 20px;\n    height: 38px;\n    width: 38px;\n    background-color: #ffffff;\n    color: #7F3486;\n    border-color: #808080;\n    border-style: ridge;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n  .badge-btn[_ngcontent-%COMP%]:hover {\n    font-size: 20px;\n    height: 38px;\n    width: 38px;\n    background-color: #7F3486;\n    color: #fff;\n    border-color: #7F3486;\n    border-style: ridge;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n\n  .telemedicineaAddAvailability[_ngcontent-%COMP%]{\n    .buttonStyle{\n      width: 109px;\n      border-radius: 3px;\n      background: forestgreen;\n      color: white;\n    }\n  \n    .timer{\n      margin-top: -31px;\n      width: 134px;\n    }\n  \n    .BtnNonSelected{\n      background: white;\n      color: deepskyblue;\n      width: 115px;\n      border-color: deepskyblue;\n      border-radius: 10px;\n      border-width: 1px;\n    }\n  \n    .BtnSelected{\n      background: #007bff;\n      color: white;\n      width: 115px;\n      border-color: deepskyblue;\n      border-radius: 10px;\n      border-width: 1px;\n    }\n  \n    .badge{\n      width: 115px;\n      font-size: 14px;\n      height: 28px;\n      padding: 7px;\n    }\n  }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CourseScheduleAddComponent, [{
        type: Component,
        args: [{ selector: 'app-course-schedule-add', template: "<section>\n    <div class=\"container-fluid card\">\n        <div class=\"card-header\">\n            <div class=\"row\">\n                <div class=\"col-6 col-md-6\">\n                    <h5 class=\"text-capitalize\">{{type == 'add' ? 'Add' : 'Edit'}} Class</h5>\n                </div>\n                <div class=\"col-6 col-md-6\">\n            <div class=\"pull-right\">\n                <button type=\"button\" (click)=\"addCourseScheduleDetails()\" class=\"btn btn-outline-primary mr-2\">Save as draft</button>\n                <button type=\"button\" (click)=\"submitClass()\" class=\"btn btn-primary\">Save</button>\n            </div>\n                </div>\n            </div>\n            <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n        </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"courseScheduleDetails\">\n          <div class=\"form-group row mt-1\">\n            <label class=\"col-sm-2 col-form-label\"><span style=\"visibility: hidden\" class=\"mr-1 text-danger\">*</span>Course Name</label>\n            <div class=\"col-sm-10\">\n              <ng-select appendTo=\"body\" formControlName=\"course_id\"\n                        [items]=\"courseListData\"\n                         bindLabel=\"course_name\"\n                         bindValue=\"course_id\"\n                         placeholder=\"Select course\"\n                         typeToSearchText=\"\"\n                         [clearable]=\"false\">\n              </ng-select>\n            </div>\n          </div>\n          <div class=\"form-group row mt-2\">\n            <label for=\"inputCourse\" class=\"col-sm-2 col-form-label\"><span class=\"mr-1 text-danger\">*</span>Schedule Title</label>\n            <div class=\"col-sm-10\">\n              <input class=\"form-control\" placeholder=\"Schedule Title\" formControlName=\"schedule_title\">\n              <em class=\"error\" *ngIf=\"!courseScheduleDetails.get('schedule_title').valid && (courseScheduleDetails.get('schedule_title').dirty\n               || courseScheduleDetails.get('schedule_title').touched)\">Schedule Title is required</em>\n            </div>\n          </div>\n          <div class=\"form-group row mt-1\">\n            <label class=\"col-sm-2 col-form-label\">\n                <span class=\"mr-1 text-danger\">*</span>Registration Start Date</label>\n            <div class=\"col-sm-10\">\n              <div class=\"input-group\">\n                <input class=\"form-control\" name=\"registration_start_date\" placeholder=\"mm-dd-yyyy\" (keypress)=\"$event.preventDefault()\" (click)=\"dp.toggleCalendar()\"\n                       formControlName=\"registration_start_date\" angular-mydatepicker #dp=\"angular-mydatepicker\"\n                       (dateChanged)=\"onDateChanged($event, 'registration_end_date')\" [options]=\"myDpOptions\"/>\n                <div class=\"input-group-append\">\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp.toggleCalendar()\">\n                    <i class=\"fa fa-calendar-o\"></i>\n                  </button>\n                </div>\n              </div>\n                <em class=\"error\" *ngIf=\"!courseScheduleDetails.get('registration_start_date').valid && (courseScheduleDetails.get('registration_start_date').dirty\n               || courseScheduleDetails.get('registration_start_date').touched)\">Registration State Date is required</em>\n            </div>\n          </div>\n          <div class=\"form-group row mt-1\">\n            <label class=\"col-sm-2 col-form-label\">\n                <span class=\"mr-1 text-danger\">*</span>Registration End Date</label>\n            <div class=\"col-sm-10\">\n              <div class=\"input-group\">\n                <input class=\"form-control\" name=\"registration_end_date\" placeholder=\"mm-dd-yyyy\" (keypress)=\"$event.preventDefault()\" (click)=\"dp1.toggleCalendar()\"\n                       formControlName=\"registration_end_date\" angular-mydatepicker #dp1=\"angular-mydatepicker\" [options]=\"myDpOptions1\"/>\n                <div class=\"input-group-append\">\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp1.toggleCalendar()\">\n                    <i class=\"fa fa-calendar-o\"></i>\n                  </button>\n                </div>\n              </div>\n                <em class=\"error\" *ngIf=\"!courseScheduleDetails.get('registration_end_date').valid && (courseScheduleDetails.get('registration_end_date').dirty\n               || courseScheduleDetails.get('registration_end_date').touched)\">Registration End Date is required</em>\n            </div>\n          </div>\n          <div class=\"form-group row mt-1\">\n            <label class=\"col-sm-2 col-form-label\"><span class=\"mr-1 text-danger\">*</span>Course Type</label>\n            <div class=\"col-sm-10\">\n              <div class=\"main-content\">\n                <select class=\"form-control\" formControlName=\"course_type\">\n                  <option value=\"\" selected disabled hidden>Select Course Type</option>\n                  <option value=\"1\">Online</option>\n                  <option value=\"2\">In-Person</option>\n                </select>\n              </div>\n                <em class=\"error\" *ngIf=\"!courseScheduleDetails.get('course_type').valid && (courseScheduleDetails.get('course_type').dirty\n               || courseScheduleDetails.get('course_type').touched)\">Course Type is required</em>\n            </div>\n          </div>\n          <div class=\"form-group row mt-2\">\n            <label for=\"inputCourse\" class=\"col-sm-2 col-form-label\"><span class=\"mr-1 text-danger\">*</span>Amount</label>\n            <div class=\"col-sm-10\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-append\">\n                        <button style=\"padding: 6px 18px\" type=\"button\" class=\"btn btn-primary\">$</button>\n                    </div>\n                    <input class=\"form-control\" id=\"inputAmount\" placeholder=\"Amount\" formControlName=\"amount\" (input)=\"calculateAmount()\" (keypress)=\"numberValidation($event)\">\n                </div>\n                <em class=\"error\" *ngIf=\"!courseScheduleDetails.get('amount').valid && (courseScheduleDetails.get('amount').dirty\n                    || courseScheduleDetails.get('amount').touched)\">Amount is required</em>\n            </div>\n          </div>\n          <div class=\"form-group row mt-2\">\n            <label for=\"inputCourse\" class=\"col-sm-2 col-form-label\"><span class=\"mr-1 text-danger\">*</span>Discount Amount</label>\n            <div class=\"col-sm-10\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-append\">\n                        <button style=\"padding: 6px 18px\" type=\"button\" class=\"btn btn-primary\">$</button>\n                    </div>\n                    <input class=\"form-control\" id=\"inputDiscount\" placeholder=\"Discount Amount\" formControlName=\"discount\" (input)=\"calculateAmount()\" (keypress)=\"numberValidation($event)\">\n                </div>\n                <em class=\"error\" *ngIf=\"!courseScheduleDetails.get('discount').valid && (courseScheduleDetails.get('discount').dirty\n                    || courseScheduleDetails.get('discount').touched)\">Discount Amount is required</em>\n            </div>\n          </div>\n          <div class=\"form-group row mt-2\">\n            <label for=\"inputCourse\" class=\"col-sm-2 col-form-label\"><span class=\"mr-1 text-danger\">*</span>Actual Amount</label>\n            <div class=\"col-sm-10\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-append\">\n                        <button style=\"padding: 6px 18px\" type=\"button\" class=\"btn btn-primary\">$</button>\n                    </div>\n                    <input class=\"form-control\" id=\"inputCourse\" placeholder=\"Actual Amount\" formControlName=\"actual_amount\" readonly>\n                    <em class=\"error\" *ngIf=\"!courseScheduleDetails.get('actual_amount').valid && (courseScheduleDetails.get('actual_amount').dirty\n                        || courseScheduleDetails.get('actual_amount').touched)\">Actual Amount is required</em>\n                </div>\n            </div>\n          </div>\n          <div class=\"form-group row mt-2\">\n            <label for=\"inputSlot\" class=\"col-sm-2 col-form-label\"><span class=\"mr-1 text-danger\">*</span>Slots Available</label>\n            <div class=\"col-sm-10\">\n              <input maxlength=\"4\" class=\"form-control\" id=\"inputSlot\" placeholder=\"Slots Available\" formControlName=\"slot_available\" (keypress)=\"numberValidation($event)\">\n              <em class=\"error\" *ngIf=\"!courseScheduleDetails.get('slot_available').valid && (courseScheduleDetails.get('slot_available').dirty\n                       || courseScheduleDetails.get('slot_available').touched)\">Slot Available is required</em>\n            </div>\n          </div>\n          <div class=\"form-group row mt-1\">\n            <label  class=\"col-sm-2 col-form-label\"><span class=\"mr-1 text-danger\">*</span>Status</label>\n            <div class=\"col-sm-10\">\n              <div class=\"main-content\">\n                <select class=\"form-control\" formControlName=\"status\">\n                  <option value=\"1\">Active</option>\n                  <option value=\"2\">Suspended</option>\n                </select>\n              </div>\n              <em class=\"error\" *ngIf=\"!courseScheduleDetails.get('status').valid && (courseScheduleDetails.get('status').dirty\n                       || courseScheduleDetails.get('status').touched)\">Status is required</em>\n            </div>\n          </div>\n          <div class=\"form-group row mt-1\">\n            <label class=\"col-sm-2 col-form-label\"><span class=\"mr-1 text-danger\">*</span>Payment Type</label>\n            <div class=\"col-sm-{{courseScheduleDetails.controls.payment_type.value == 'R' ? '4' : '10'}}\">\n              <div class=\"main-content\">\n                <select class=\"form-control\" formControlName=\"payment_type\" (change)=\"checkSelectedValue()\">\n                  <option value=\"\" selected disabled hidden>Select Payment Type</option>\n                  <option value=\"F\">Fixed</option>\n                  <option value=\"R\">Recurring</option>\n                </select>\n              </div>\n              <em class=\"error\" *ngIf=\"!courseScheduleDetails.get('payment_type').valid && (courseScheduleDetails.get('payment_type').dirty\n                       || courseScheduleDetails.get('payment_type').touched)\">Payment Type is required</em>\n            </div>\n            <div class=\"col-sm-6 pr-0 row\" *ngIf=\"courseScheduleDetails.controls.payment_type.value == 'R'\">\n                <label class=\"col-sm-4 col-form-label\"><span class=\"mr-1 text-danger\">*</span>Recurring Type</label>\n                <div class=\"col-sm-8 main-content pr-0\">\n                    <select class=\"form-control\" formControlName=\"payment_recurring\">\n                        <option value=\"\" selected disabled hidden>Select Recurring Type</option>\n                        <option value=\"W\">Weekly</option>\n                        <option value=\"M\">Monthly</option>\n                        <option value=\"Q\">Quarterly</option>\n                        <option value=\"H\">Half Yearly</option>\n                        <option value=\"A\">Annual</option>\n                    </select>\n                    <em class=\"error\" *ngIf=\"!courseScheduleDetails.get('payment_recurring').valid && (courseScheduleDetails.get('payment_recurring').dirty\n                       || courseScheduleDetails.get('payment_recurring').touched)\">Recurring Type is required</em>\n                </div>\n            </div>\n          </div>\n          <div class=\"row d-flex justify-content-between list-title\">\n            <div class=\"col-12 pt-2 mb-1\">\n                <h4 class=\"m-0 my-2 color-primary\">Schedule</h4>\n                <hr class=\"bg-primary\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-4 mt-1 mb-0\">\n              <label class=\"col-form-label\">Start Date</label>\n              <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <input class=\"form-control\" name=\"start_date\" placeholder=\"mm-dd-yyyy\" (keypress)=\"$event.preventDefault()\" (click)=\"dp2.toggleCalendar()\"\n                         formControlName=\"start_date\" angular-mydatepicker #dp2=\"angular-mydatepicker\"\n                         (dateChanged)=\"onDateChanged($event, 'end_date')\" [options]=\"myDpOptions2\"/>\n                  <div class=\"input-group-append\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp2.toggleCalendar()\">\n                      <i class=\"fa fa-calendar-o\"></i>\n                    </button>\n                  </div>\n  \n                </div>\n              </div>\n            </div>\n            <div class=\"form-group col-4 mt-1 mb-0\">\n              <label class=\"col-form-label\">End Date</label>\n              <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <input class=\"form-control\" name=\"end_date\" placeholder=\"mm-dd-yyyy\" (keypress)=\"$event.preventDefault()\" (click)=\"dp3.toggleCalendar()\"\n                         formControlName=\"end_date\" angular-mydatepicker #dp3=\"angular-mydatepicker\" [options]=\"myDpOptions3\"/>\n                  <div class=\"input-group-append\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp3.toggleCalendar()\">\n                      <i class=\"fa fa-calendar-o\"></i>\n                    </button>\n                  </div>\n  \n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row mt-2\">\n            <div class=\"col-12\">\n                <h5 class=\"m-0 color-primary\">Monday</h5>\n            </div>\n            <div class=\"col-12\">\n                <div class=\"row d-flex flex-row p-2\">\n                    <div class=\"ml-1 d-flex align-items-center\" *ngIf=\"mondayTimings.length != 0\">\n  \n                        <span class=\"badge badge-pill badge-grey-selected ml-2\" *ngFor=\"let data of mondayTimings;let i = index;\">\n                        <a><span class=\"slot-title\">{{data.teacher_name}}</span> : <span class=\"slot-time-title\">{{data.slotstarttime}}</span> - <span class=\"slot-time-title\">{{data.slotendtime}}</span>  &nbsp;</a>\n                        <a class=\"rounded-circle\" (click)=\"deleteTime('monday', i, data)\">\n                            <i class=\"fa fa-close rounded-circle color-primary\" aria-hidden=\"true\"></i></a>\n                    </span>\n                        <span class=\"ml-2\"><button type=\"button\"  class=\"badge-btn cursor\" (click)=\"addSlotDetails(1)\">\n                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                        </span>\n                    </div>\n                    <div class=\"ml-1 d-flex align-items-center cursor\" *ngIf=\"mondayTimings.length == 0\">\n                      <span class=\"badge badge-pill badge-grey-selected d-flex align-items-center ml-2\" (click)=\"addSlotDetails(1)\">\n                        <a>Start Time - End Time &nbsp;</a>\n                      </span>\n                      <span class=\"ml-2\"><button type=\"button\"  class=\"badge-btn\" (click)=\"addSlotDetails(1)\">\n                        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                      </span>\n                    </div>\n                </div>\n            </div>\n          </div>\n          <div class=\"row mt-2\">\n            <div class=\"col-12\">\n                <h5 class=\"m-0 color-primary\">Tuesday</h5>\n            </div>\n            <div class=\"col-12\">\n                <div class=\"row d-flex flex-row p-2\">\n                    <div class=\"ml-1 d-flex align-items-center\" *ngIf=\"tuesdayTimings.length != 0\">\n                        <span class=\"badge badge-pill badge-grey-selected ml-2\" *ngFor=\"let data of tuesdayTimings;let i = index;\">\n                          <a><span class=\"slot-title\">{{data.teacher_name}}</span> : <span class=\"slot-time-title\">{{data.slotstarttime}}</span> - <span class=\"slot-time-title\">{{data.slotendtime}}</span>  &nbsp;</a>\n                          <a class=\"rounded-circle\" (click)=\"deleteTime('tuesday', i, data)\">\n                            <i class=\"fa fa-close rounded-circle color-primary\" aria-hidden=\"true\"></i></a>\n                            <!-- <a class=\"rounded-circle ml-2\" title=\"Mark Attendance\">\n                                <i class=\"fa fa-street-view\"  aria-hidden=\"true\"></i></a> -->\n  \n                    </span>\n                        <span class=\"ml-2\"><button type=\"button\"  class=\"badge-btn cursor\" (click)=\"addSlotDetails(2)\">\n                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                        </span>\n                    </div>\n                    <div class=\"ml-1 d-flex align-items-center cursor\" *ngIf=\"tuesdayTimings.length == 0\">\n                      <span class=\"badge badge-pill badge-grey-selected d-flex align-items-center ml-2\" (click)=\"addSlotDetails(2)\">\n                          <a>Start Time - End Time &nbsp;</a>\n                      </span>\n                      <span class=\"ml-2\"><button type=\"button\"  class=\"badge-btn\" (click)=\"addSlotDetails(2)\">\n                          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                      </span>\n                    </div>\n                </div>\n            </div>\n          </div>\n          <div class=\"row mt-2\">\n            <div class=\"col-12\">\n                <h5 class=\"m-0 color-primary\">Wednesday</h5>\n            </div>\n            <div class=\"col-12\">\n                <div class=\"row d-flex flex-row p-2\">\n                    <div class=\"ml-1 d-flex align-items-center\" *ngIf=\"wednesDayTimingsday.length != 0\">\n  \n                        <span class=\"badge badge-pill badge-grey-selected ml-2\" *ngFor=\"let data of wednesDayTimingsday;let i = index;\">\n                        <a><span class=\"slot-title\">{{data.teacher_name}}</span> : <span class=\"slot-time-title\">{{data.slotstarttime}}</span> - <span class=\"slot-time-title\">{{data.slotendtime}}</span>  &nbsp;</a>\n                        <a class=\"rounded-circle\" (click)=\"deleteTime('wednesday', i, data)\">\n                            <i class=\"fa fa-close rounded-circle color-primary\" aria-hidden=\"true\"></i></a>\n                            <!-- <a class=\"rounded-circle ml-2\" title=\"Mark Attendance\">\n                                <i class=\"fa fa-street-view\"  aria-hidden=\"true\"></i></a> -->\n  \n                    </span>\n                        <span class=\"ml-2\"><button type=\"button\"  class=\"badge-btn cursor\" (click)=\"addSlotDetails(3)\">\n                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                        </span>\n                    </div>\n                    <div class=\"ml-1 d-flex align-items-center cursor\" *ngIf=\"wednesDayTimingsday.length == 0\">\n                      <span class=\"badge badge-pill badge-grey-selected d-flex align-items-center ml-2\" (click)=\"addSlotDetails(3)\">\n                          <a>Start Time - End Time &nbsp;</a>\n                      </span>\n                      <span class=\"ml-2\"><button type=\"button\"  class=\"badge-btn\" (click)=\"addSlotDetails(3)\">\n                          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                      </span>\n                    </div>\n                </div>\n            </div>\n          </div>\n          <div class=\"row mt-2\">\n            <div class=\"col-12\">\n                <h5 class=\"m-0 color-primary\">Thursday</h5>\n            </div>\n            <div class=\"col-12\">\n                <div class=\"row d-flex flex-row p-2\">\n                    <div class=\"ml-1 d-flex align-items-center\" *ngIf=\"thursdayTimingsday.length != 0\">\n  \n                        <span class=\"badge badge-pill badge-grey-selected ml-2\" *ngFor=\"let data of thursdayTimingsday;let i = index;\">\n                        <a><span class=\"slot-title\">{{data.teacher_name}}</span> : <span class=\"slot-time-title\">{{data.slotstarttime}}</span> - <span class=\"slot-time-title\">{{data.slotendtime}}</span>  &nbsp;</a>\n                        <a class=\"rounded-circle\" (click)=\"deleteTime('thursday', i, data)\">\n                            <i class=\"fa fa-close rounded-circle color-primary\" aria-hidden=\"true\"></i></a>\n                            <!-- <a class=\"rounded-circle ml-2\" title=\"Mark Attendance\">\n                                <i class=\"fa fa-street-view\"  aria-hidden=\"true\"></i></a> -->\n  \n                    </span>\n                        <span class=\"ml-2\"><button type=\"button\"  class=\"badge-btn cursor\" (click)=\"addSlotDetails(4)\">\n                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                        </span>\n                    </div>\n                    <div class=\"ml-1 d-flex align-items-center cursor\" *ngIf=\"thursdayTimingsday.length == 0\">\n                      <span class=\"badge badge-pill badge-grey-selected d-flex align-items-center ml-2\" (click)=\"addSlotDetails(4)\">\n                          <a>Start Time - End Time &nbsp;</a>\n                      </span>\n                      <span class=\"ml-2\"><button type=\"button\"  class=\"badge-btn\" (click)=\"addSlotDetails(4)\">\n                          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                      </span>\n                    </div>\n                </div>\n            </div>\n          </div>\n          <div class=\"row mt-2\">\n            <div class=\"col-12\">\n                <h5 class=\"m-0 color-primary\">Friday</h5>\n            </div>\n            <div class=\"col-12\">\n                <div class=\"row d-flex flex-row p-2\">\n                    <div class=\"ml-1 d-flex align-items-center\" *ngIf=\"fridayTimingsday.length != 0\">\n  \n                        <span class=\"badge badge-pill badge-grey-selected ml-2\" *ngFor=\"let data of fridayTimingsday;let i = index;\">\n                        <a><span class=\"slot-title\">{{data.teacher_name}}</span> : <span class=\"slot-time-title\">{{data.slotstarttime}}</span> - <span class=\"slot-time-title\">{{data.slotendtime}}</span>  &nbsp;</a>\n                        <a class=\"rounded-circle\" (click)=\"deleteTime('friday', i, data)\">\n                            <i class=\"fa fa-close rounded-circle color-primary\" aria-hidden=\"true\"></i></a>\n                            <!-- <a class=\"rounded-circle ml-2\" title=\"Mark Attendance\">\n                                <i class=\"fa fa-street-view\"  aria-hidden=\"true\"></i></a> -->\n  \n                    </span>\n                        <span class=\"ml-2\"><button type=\"button\"  class=\"badge-btn cursor\" (click)=\"addSlotDetails(5)\">\n                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                        </span>\n                    </div>\n                    <div class=\"ml-1 d-flex align-items-center cursor\" *ngIf=\"fridayTimingsday.length == 0\">\n                      <span class=\"badge badge-pill badge-grey-selected d-flex align-items-center ml-2\" (click)=\"addSlotDetails(5)\">\n                          <a>Start Time - End Time &nbsp;</a>\n                      </span>\n                      <span class=\"ml-2\"><button type=\"button\"  class=\"badge-btn\" (click)=\"addSlotDetails(5)\">\n                          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                      </span>\n                    </div>\n                </div>\n            </div>\n          </div>\n          <div class=\"row mt-2\">\n            <div class=\"col-12\">\n                <h5 class=\"m-0 color-primary\">Saturday</h5>\n            </div>\n            <div class=\"col-12\">\n                <div class=\"row d-flex flex-row p-2\">\n                    <div class=\"ml-1 d-flex align-items-center\" *ngIf=\"saturdayTimingsday.length != 0\">\n  \n                        <span class=\"badge badge-pill badge-grey-selected ml-2\" *ngFor=\"let data of saturdayTimingsday;let i = index;\">\n                        <a><span class=\"slot-title\">{{data.teacher_name}}</span> : <span class=\"slot-time-title\">{{data.slotstarttime}}</span> - <span class=\"slot-time-title\">{{data.slotendtime}}</span>  &nbsp;</a>\n                        <a class=\"rounded-circle\" (click)=\"deleteTime('saturday', i, data)\">\n                            <i class=\"fa fa-close rounded-circle color-primary\" aria-hidden=\"true\"></i></a>\n                            <!-- <a class=\"rounded-circle ml-2\" title=\"Mark Attendance\">\n                                <i class=\"fa fa-street-view\"  aria-hidden=\"true\"></i></a> -->\n  \n                    </span>\n                        <span class=\"ml-2\"><button type=\"button\"  class=\"badge-btn cursor\" (click)=\"addSlotDetails(6)\">\n                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                        </span>\n                    </div>\n                    <div class=\"ml-1 d-flex align-items-center cursor\" *ngIf=\"saturdayTimingsday.length == 0\">\n                      <span class=\"badge badge-pill badge-grey-selected d-flex align-items-center ml-2\" (click)=\"addSlotDetails(6)\">\n                          <a>Start Time - End Time &nbsp;</a>\n                      </span>\n                      <span class=\"ml-2\"><button type=\"button\"  class=\"badge-btn\" (click)=\"addSlotDetails(6)\">\n                          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                      </span>\n                    </div>\n                </div>\n            </div>\n          </div>\n          <div class=\"row mt-2\">\n            <div class=\"col-12\">\n                <h5 class=\"m-0 color-primary\">Sunday</h5>\n            </div>\n            <div class=\"col-12\">\n                <div class=\"row d-flex flex-row p-2\">\n                    <div class=\"ml-1 d-flex align-items-center\" *ngIf=\"sundayTimingsday.length != 0\">\n  \n                        <span class=\"badge badge-pill badge-grey-selected ml-2\" *ngFor=\"let data of sundayTimingsday;let i = index;\">\n                        <a><span class=\"slot-title\">{{data.teacher_name}}</span> : <span class=\"slot-time-title\">{{data.slotstarttime}}</span> - <span class=\"slot-time-title\">{{data.slotendtime}}</span>  &nbsp;</a>\n                        <a class=\"rounded-circle\" (click)=\"deleteTime('sunday', i, data)\">\n                            <i class=\"fa fa-close rounded-circle color-primary\" aria-hidden=\"true\"></i></a>\n                    </span>\n                        <span class=\"ml-2\"><button type=\"button\"  class=\"badge-btn cursor\" (click)=\"addSlotDetails(7)\">\n                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                        </span>\n                    </div>\n                    <div class=\"ml-1 d-flex align-items-center cursor\" *ngIf=\"sundayTimingsday.length == 0\">\n                      <span class=\"badge badge-pill badge-grey-selected d-flex align-items-center ml-2\" (click)=\"addSlotDetails(7)\">\n                          <a>Start Time - End Time &nbsp;</a>\n                      </span>\n                      <span class=\"ml-2\"><button type=\"button\"  class=\"badge-btn\" (click)=\"addSlotDetails(7)\">\n                          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n                      </span>\n                    </div>\n                </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </section>\n  <ng-template #addSlot let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title\">Schedule</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"close()\" ></i>\n    </div>\n    <form [formGroup]=\"slotform\" class=\"telemedicineaAddAvailability\">\n        <div class=\"modal-body\">\n            <div class=\"row\">\n                 <div class=\"col-md-12 form-group\">\n                     <label>Teacher Name</label>\n                <ng-select [items]=\"teacherListData\"\n                           (change)=\"teacherSelection(teacherListData)\"\n                           formControlName=\"teacher_id\"\n                           bindLabel=\"teacher_name\"\n                           bindValue=\"teacher_id\"\n                           placeholder=\"Select Teacher\"\n                           typeToSearchText=\"\"\n                           multiple=\"true\"\n                >\n                </ng-select>\n            </div>\n                <div class=\"col-md-6 form-group\">\n  \n                        <label>Start Time</label>\n                        <ngb-timepicker [(ngModel)]=\"fromTime\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"checkTime()\"  [meridian]=\"meridian\" [spinners]=\"spinner\"></ngb-timepicker>\n  \n                </div>\n                <div class=\"col-md-6 form-group\">\n  \n                    <label>End Time</label>\n                <ngb-timepicker [(ngModel)]=\"toTime\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"checkTime()\"  [meridian]=\"meridian\" [spinners]=\"spinner\"></ngb-timepicker>\n  \n                </div>\n                <div class=\"w-100 text-center\" *ngIf=\"timeErr\">\n                    <div class=\"alert alert-danger\">\n                        Please select the Valid &nbsp;<strong>From Time & To Time</strong>.\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <h5 class=\"text-center\">Repeat for</h5>\n                    <div class=\"row d-flex justify-content-center\">\n                        <div *ngFor=\"let data of days;let i= index;\">\n                            <button *ngIf=\"data.show\"\n                                    type=\"button\" (click)=\"selectDate(data.id)\"\n                                    [ngClass]=\"data.status == 0 ? 'btn btn-outline-primary m-2' : 'btn btn-primary m-2'\"\n                            >{{data.day}}</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitSlot()\">Submit</button>\n        </div>\n    </form>\n  </ng-template>\n\n<ng-template #classCheck let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"text-center col-12 modal-title\"><b>Draft Class</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <h5 class=\"color-primary\">\n            Class will be saved as draft. Add a schedule to activate.\n        </h5>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-primary\" (click)=\"close();addCourseScheduleDetails()\">Yes</button>\n        <button class=\"btn btn-outline-primary\" (click)=\"close()\">No</button>\n    </div>\n</ng-template>\n\n", styles: [".custom-upload-input {\n  color: transparent;\n}\n.custom-upload-input::-webkit-file-upload-button {\n  visibility: hidden;\n}\n.custom-upload-input::before {\n  content: 'Choose files';\n  display: inline-block;\n  background: #1d6aa5;\n  border-radius: 3px;\n  padding: 12px 15px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 11pt;\n  color: #fff;\n}\n\n.container {\n  display: block;\n}\n.custom-upload-input:hover::before {\n  border-color: black;\n}\n.custom-upload-input:active {\n  outline: 0;\n}\n.custom-upload-input:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n\n/////////\n.whitColr{\n    color: white;\n  }\n\n  .cardStyle{\n    background: #eaeaea;\n    width: 18rem;\n  }\n  .alignCenter{\n    align-self: center;\n  }\n  .dayTitle{\n    width: 100px;;\n  }\n  .addBtn{\n    background: white;\n    color: deepskyblue;\n    width: 115px;\n    border-color: deepskyblue;\n    border-radius: 10px;\n    border-width: 1px;\n  }\n\n  .addingTimeBtn{\n    background: white;\n    color: deepskyblue;\n    width: 30px;\n    border-color: deepskyblue;\n    border-radius: 10px;\n    border-width: 1px;\n  }\n\n  .addUnAvlBtn{\n    width: 166px;\n    height: 22px;\n    background: white;\n    color: red;\n    border-radius: 22px;\n    font-size: 13px;\n  }\n\n  .badge-danger{\n    width: 166px;\n    height: 22px;\n    border-radius: 22px;\n    font-size: 13px;\n  }\n\n  .badge-primary{\n    font-size: 14px;\n    height: 28px;\n    padding: 7px;\n    background-color: #ffffff;\n    color: #7F3486;\n    border-color: #7F3486;\n    border-style: ridge;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n  .badge-grey{\n    font-size: 14px;\n    height: 38px;\n    padding: 10px;\n    background-color: #ffffff;\n    color: #7F3486;\n    border-color: #808080;\n    border-style: ridge;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n  .badge-grey i{\n    color: #7F3486;\n  }\n  .badge-grey-selected {\n    font-size: 14px;\n    height: 38px;\n    padding: 10px;\n    background-color: #ffffff;\n    color: #808080;\n    border-color: #808080;\n    border-style: ridge;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n  .badge-btn {\n    font-size: 20px;\n    height: 38px;\n    width: 38px;\n    background-color: #ffffff;\n    color: #7F3486;\n    border-color: #808080;\n    border-style: ridge;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n  .badge-btn:hover {\n    font-size: 20px;\n    height: 38px;\n    width: 38px;\n    background-color: #7F3486;\n    color: #fff;\n    border-color: #7F3486;\n    border-style: ridge;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n\n  .telemedicineaAddAvailability{\n    .buttonStyle{\n      width: 109px;\n      border-radius: 3px;\n      background: forestgreen;\n      color: white;\n    }\n  \n    .timer{\n      margin-top: -31px;\n      width: 134px;\n    }\n  \n    .BtnNonSelected{\n      background: white;\n      color: deepskyblue;\n      width: 115px;\n      border-color: deepskyblue;\n      border-radius: 10px;\n      border-width: 1px;\n    }\n  \n    .BtnSelected{\n      background: #007bff;\n      color: white;\n      width: 115px;\n      border-color: deepskyblue;\n      border-radius: 10px;\n      border-width: 1px;\n    }\n  \n    .badge{\n      width: 115px;\n      font-size: 14px;\n      height: 28px;\n      padding: 7px;\n    }\n  }\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.FormBuilder }, { type: i3.DatePipe }, { type: i4.ActivatedRoute }, { type: i5.ValidationService }, { type: i4.Router }, { type: i6.ToastrService }, { type: i7.EnvironmentService }, { type: i8.DomSanitizer }, { type: i9.NgbModal }], { myInputVariable: [{
            type: ViewChild,
            args: ['myInput']
        }], addSlot: [{
            type: ViewChild,
            args: ['addSlot']
        }], classCheck: [{
            type: ViewChild,
            args: ['classCheck']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CourseScheduleAddComponent, { className: "CourseScheduleAddComponent" }); })();
//# sourceMappingURL=course-schedule-add.component.js.map