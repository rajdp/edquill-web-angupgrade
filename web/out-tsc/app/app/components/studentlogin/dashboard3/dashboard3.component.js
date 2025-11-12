import { Component, inject, ViewChild } from '@angular/core';
import { AuthService } from '../../../shared/service/auth.service';
import { ClassService } from '../../../shared/service/class.service';
import { Router } from '@angular/router';
import { SseClient } from 'ngx-sse-client';
import { NewsubjectService } from '../../../shared/service/newsubject.service';
import { ToastrService } from 'ngx-toastr';
import { ZoomServiceService } from '../../../shared/service/zoom-service.service';
import { CommonDataService } from '../../../shared/service/common-data.service';
import { StudentService } from '../../../shared/service/student.service';
import { CreatorService } from '../../../shared/service/creator.service';
import { CommonService } from '../../../shared/service/common.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "@angular/platform-browser";
import * as i4 from "../../../environment.service";
import * as i5 from "../../../shared/components/feather-icons/feather-icons.component";
const _c0 = ["throwError"];
const _c1 = ["showInform"];
const _c2 = ["zoomDialog"];
const _c3 = ["zoomDialog1"];
const _c4 = ["submitPopUp"];
const _c5 = ["submitTestPopUp"];
const _c6 = ["startTimerDuration"];
const _c7 = ["feedbackStatus"];
const _c8 = a0 => ({ "active": a0 });
const _c9 = (a0, a1, a2) => ({ "dashboard-card_inProgress": a0, "dashboard-card_upcoming": a1, "dashboard-card_completed": a2 });
const _c10 = a0 => ({ "scheduledDate": a0 });
const _c11 = (a0, a1) => ({ "dashboard-card_upcoming": a0, "dashboard-card_completed": a1 });
function Dashboard3Component_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "span", 45);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 46);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_14_0;
    const announcement_r2 = ctx.$implicit;
    const last_r3 = ctx.last;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(announcement_r2.title + " - ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", (tmp_14_0 = announcement_r2.description) !== null && tmp_14_0 !== undefined ? tmp_14_0 : "", " ", ctx_r3.globalAnnouncementList.length > 1 && !last_r3 ? ", " : "", "");
} }
function Dashboard3Component_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "div", 41)(2, "div", 19)(3, "div", 42)(4, "div", 43);
    i0.ɵɵtemplate(5, Dashboard3Component_div_1_span_5_Template, 5, 3, "span", 44);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r3.globalAnnouncementList);
} }
function Dashboard3Component_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div", 48)(2, "button", 49);
    i0.ɵɵtext(3, "No Classes Today!");
    i0.ɵɵelementEnd()()();
} }
function Dashboard3Component_div_18_div_1_i_28_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 63);
    i0.ɵɵlistener("click", function Dashboard3Component_div_18_div_1_i_28_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r7); const item_r6 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.openZoomDialog(item_r6, $event)); });
    i0.ɵɵelementEnd();
} }
function Dashboard3Component_div_18_div_1_i_29_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 65);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_15_0;
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((tmp_15_0 = item_r6.announcement_count) !== null && tmp_15_0 !== undefined ? tmp_15_0 : "0");
} }
function Dashboard3Component_div_18_div_1_i_29_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 64);
    i0.ɵɵlistener("click", function Dashboard3Component_div_18_div_1_i_29_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r8); const item_r6 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.redirectToAnnouncementOrInbox(item_r6, "announcement")); });
    i0.ɵɵtemplate(1, Dashboard3Component_div_18_div_1_i_29_span_1_Template, 2, 1, "span", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r6.announcement_count != 0);
} }
function Dashboard3Component_div_18_div_1_span_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 65);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_14_0;
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((tmp_14_0 = item_r6.inbox_count) !== null && tmp_14_0 !== undefined ? tmp_14_0 : "0");
} }
function Dashboard3Component_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52);
    i0.ɵɵlistener("click", function Dashboard3Component_div_18_div_1_Template_div_click_0_listener() { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.enterList(item_r6)); });
    i0.ɵɵelementStart(1, "div", 19)(2, "h5", 53);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 54)(5, "div", 55)(6, "div", 10)(7, "div", 34)(8, "b");
    i0.ɵɵtext(9, "Subject:");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "br");
    i0.ɵɵelementStart(11, "span", 56);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 34)(14, "b");
    i0.ɵɵtext(15, "Date:");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(16, "br");
    i0.ɵɵelementStart(17, "span", 57);
    i0.ɵɵtext(18);
    i0.ɵɵpipe(19, "date");
    i0.ɵɵpipe(20, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 34)(22, "b");
    i0.ɵɵtext(23, "Time:");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(24, "br");
    i0.ɵɵelementStart(25, "span", 57);
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(27, "div", 58);
    i0.ɵɵtemplate(28, Dashboard3Component_div_18_div_1_i_28_Template, 1, 0, "i", 59)(29, Dashboard3Component_div_18_div_1_i_29_Template, 2, 1, "i", 60);
    i0.ɵɵelementStart(30, "i", 61);
    i0.ɵɵlistener("click", function Dashboard3Component_div_18_div_1_Template_i_click_30_listener() { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.redirectToAnnouncementOrInbox(item_r6, "inbox")); });
    i0.ɵɵtemplate(31, Dashboard3Component_div_18_div_1_span_31_Template, 2, 1, "span", 62);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r6.class_name);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(item_r6.subject_name);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind2(19, 8, item_r6.class_start_date, "MM/dd/yyyy"), " - ", i0.ɵɵpipeBind2(20, 11, item_r6.class_end_date, "MM/dd/yyyy"), "");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(item_r6.slotstarttime + " - " + item_r6.slotendtime);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r6.class_type == "1" && item_r6.schedule_id != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r6.class_details == null ? null : item_r6.class_details.announcement_type) != "1");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r6.inbox_count != 0);
} }
function Dashboard3Component_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵtemplate(1, Dashboard3Component_div_18_div_1_Template, 32, 14, "div", 51);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.scheduleData);
} }
function Dashboard3Component_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 66);
    i0.ɵɵlistener("click", function Dashboard3Component_button_34_Template_button_click_0_listener() { const data_r10 = i0.ɵɵrestoreView(_r9).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.updateClassData(data_r10.id)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r10 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("dashboard-button ", data_r10.className, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c8, data_r10.active));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(data_r10.name);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("badge ", data_r10.badge_class, " ml-1");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(data_r10.count);
} }
function Dashboard3Component_div_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div", 48)(2, "button", 49);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("No ", ctx_r3.selectedButtonForClass == "2" ? "In-Progress" : ctx_r3.selectedButtonForClass == "4" ? "Upcoming" : "Completed", " Class Available!");
} }
function Dashboard3Component_div_36_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 73);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r13 = ctx.$implicit;
    const item_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", ctx_r3.returnDayTitle(item_r12, day_r13.id, day_r13.value))("ngClass", i0.ɵɵpureFunction1(3, _c10, ctx_r3.checkAvailabilityDate(item_r12, day_r13.id)));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(day_r13.day);
} }
function Dashboard3Component_div_36_div_1_i_9_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 65);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_14_0;
    const item_r12 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((tmp_14_0 = item_r12.announcement_count) !== null && tmp_14_0 !== undefined ? tmp_14_0 : "0");
} }
function Dashboard3Component_div_36_div_1_i_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 64);
    i0.ɵɵlistener("click", function Dashboard3Component_div_36_div_1_i_9_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r14); const item_r12 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.redirectToAnnouncementOrInbox(item_r12, "announcement")); });
    i0.ɵɵtemplate(1, Dashboard3Component_div_36_div_1_i_9_span_1_Template, 2, 1, "span", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r12.announcement_count != 0);
} }
function Dashboard3Component_div_36_div_1_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 65);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_13_0;
    const item_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((tmp_13_0 = item_r12.inbox_count) !== null && tmp_13_0 !== undefined ? tmp_13_0 : "0");
} }
function Dashboard3Component_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵlistener("click", function Dashboard3Component_div_36_div_1_Template_div_click_0_listener() { const item_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.classEnterList(item_r12)); });
    i0.ɵɵelementStart(1, "div", 19)(2, "h5", 53);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h6", 70);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 10)(7, "h6", 71);
    i0.ɵɵtemplate(8, Dashboard3Component_div_36_div_1_span_8_Template, 2, 5, "span", 72);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, Dashboard3Component_div_36_div_1_i_9_Template, 2, 1, "i", 60);
    i0.ɵɵelementStart(10, "i", 61);
    i0.ɵɵlistener("click", function Dashboard3Component_div_36_div_1_Template_i_click_10_listener() { const item_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.redirectToAnnouncementOrInbox(item_r12, "inbox")); });
    i0.ɵɵtemplate(11, Dashboard3Component_div_36_div_1_span_11_Template, 2, 1, "span", 62);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(6, _c9, ctx_r3.selectedButtonForClass == "2", ctx_r3.selectedButtonForClass == "4", ctx_r3.selectedButtonForClass == "3"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r12.class_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r12.subject_name);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r3.days);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r12.class_details == null ? null : item_r12.class_details.announcement_type) != "1");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r12.inbox_count != 0);
} }
function Dashboard3Component_div_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 67);
    i0.ɵɵtemplate(1, Dashboard3Component_div_36_div_1_Template, 12, 10, "div", 68);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.filteredClassData);
} }
function Dashboard3Component_div_51_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 80);
    i0.ɵɵlistener("click", function Dashboard3Component_div_51_div_1_i_5_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r17); const item_r16 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.viewAnswerKeyPdf($event, item_r16)); });
    i0.ɵɵelementEnd();
} }
function Dashboard3Component_div_51_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 75);
    i0.ɵɵlistener("click", function Dashboard3Component_div_51_div_1_Template_div_click_0_listener() { const item_r16 = i0.ɵɵrestoreView(_r15).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.answerPage(item_r16)); });
    i0.ɵɵelementStart(1, "div", 19)(2, "div")(3, "h5", 53);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, Dashboard3Component_div_51_div_1_i_5_Template, 1, 0, "i", 76);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h6", 77);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 78)(9, "span", 79);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(9, _c11, item_r16.content_type == "2", item_r16.content_type == "3"));
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("col-12 px-0 ", item_r16.allow_answer_key == "1" && item_r16.student_content_status == "3" && (item_r16.downloadPDF == null ? null : item_r16.downloadPDF.length) != 0 ? "d-flex justify-content-between" : "", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r16.content_name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r16.allow_answer_key == "1" && item_r16.student_content_status == "3" && (item_r16.downloadPDF == null ? null : item_r16.downloadPDF.length) != 0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r16.class_name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", item_r16.obtained_score, " / ", item_r16.total_score, "");
} }
function Dashboard3Component_div_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵtemplate(1, Dashboard3Component_div_51_div_1_Template, 11, 12, "div", 74);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.recentScore);
} }
function Dashboard3Component_div_62_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 92);
    i0.ɵɵtext(1, "Due: ");
    i0.ɵɵelementStart(2, "span", 93);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r19 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(4, 1, item_r19.end_date, "MM/dd/yyyy"), "");
} }
function Dashboard3Component_div_62_div_1_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 94);
    i0.ɵɵtext(1, "Resource");
    i0.ɵɵelementEnd();
} }
function Dashboard3Component_div_62_div_1_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 95);
    i0.ɵɵtext(1, "Assignment");
    i0.ɵɵelementEnd();
} }
function Dashboard3Component_div_62_div_1_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 96);
    i0.ɵɵtext(1, "Assessment");
    i0.ɵɵelementEnd();
} }
function Dashboard3Component_div_62_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵlistener("click", function Dashboard3Component_div_62_div_1_Template_div_click_0_listener() { const item_r19 = i0.ɵɵrestoreView(_r18).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.answerPage(item_r19)); });
    i0.ɵɵelementStart(1, "div", 82)(2, "div", 83)(3, "div", 84)(4, "h5", 85);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 86)(7, "h5", 87);
    i0.ɵɵtemplate(8, Dashboard3Component_div_62_div_1_span_8_Template, 5, 4, "span", 88)(9, Dashboard3Component_div_62_div_1_span_9_Template, 2, 0, "span", 89)(10, Dashboard3Component_div_62_div_1_span_10_Template, 2, 0, "span", 90)(11, Dashboard3Component_div_62_div_1_span_11_Template, 2, 0, "span", 91);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r19.content_name);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r19.end_date != "0000-00-00");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r19.content_type == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r19.content_type == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r19.content_type == "3");
} }
function Dashboard3Component_div_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, Dashboard3Component_div_62_div_1_Template, 12, 5, "div", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.upcomingTask);
} }
function Dashboard3Component_div_72_p_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 106)(1, "h5", 107);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_14_0;
    const item_r21 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("title", item_r21.message.convertedFullText);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_14_0 = item_r21.message.convertedText) !== null && tmp_14_0 !== undefined ? tmp_14_0 : "");
} }
function Dashboard3Component_div_72_p_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 108);
    i0.ɵɵtext(1, " Attachment added here");
    i0.ɵɵelement(2, "i", 109);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("title", "Attachment added to the chat");
} }
function Dashboard3Component_div_72_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 103);
    i0.ɵɵtemplate(1, Dashboard3Component_div_72_p_4_span_1_Template, 3, 2, "span", 104)(2, Dashboard3Component_div_72_p_4_span_2_Template, 3, 1, "span", 105);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r21 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r21.message.convertedFullText != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r21.message.convertedFullText == "");
} }
function Dashboard3Component_div_72_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 103)(1, "span", 106)(2, "h5", 107);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_13_0;
    const item_r21 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("title", item_r21.message.convertedFullText);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_13_0 = item_r21.message.convertedText) !== null && tmp_13_0 !== undefined ? tmp_13_0 : "");
} }
function Dashboard3Component_div_72_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 110);
    i0.ɵɵtext(1, "Message");
    i0.ɵɵelementEnd();
} }
function Dashboard3Component_div_72_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 111);
    i0.ɵɵtext(1, "Announcement");
    i0.ɵɵelementEnd();
} }
function Dashboard3Component_div_72_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵlistener("click", function Dashboard3Component_div_72_Template_div_click_0_listener() { const item_r21 = i0.ɵɵrestoreView(_r20).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.redirectToAnnouncementOrInbox(item_r21)); });
    i0.ɵɵelementStart(1, "div", 97)(2, "div", 83)(3, "div", 98);
    i0.ɵɵtemplate(4, Dashboard3Component_div_72_p_4_Template, 3, 2, "p", 99)(5, Dashboard3Component_div_72_p_5_Template, 4, 2, "p", 99);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 100);
    i0.ɵɵtemplate(7, Dashboard3Component_div_72_span_7_Template, 2, 0, "span", 101)(8, Dashboard3Component_div_72_span_8_Template, 2, 0, "span", 102);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", item_r21.message_type == "inbox");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r21.message_type != "inbox");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r21.message_type == "inbox");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r21.message_type != "inbox");
} }
function Dashboard3Component_div_81_div_1_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 92);
    i0.ɵɵtext(1, "Due: ");
    i0.ɵɵelementStart(2, "span", 113);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(4, 1, item_r23.end_date, "MM/dd/yyyy"), "");
} }
function Dashboard3Component_div_81_div_1_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 94);
    i0.ɵɵtext(1, "Resource");
    i0.ɵɵelementEnd();
} }
function Dashboard3Component_div_81_div_1_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 95);
    i0.ɵɵtext(1, "Assignment");
    i0.ɵɵelementEnd();
} }
function Dashboard3Component_div_81_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 96);
    i0.ɵɵtext(1, "Assessment");
    i0.ɵɵelementEnd();
} }
function Dashboard3Component_div_81_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵlistener("click", function Dashboard3Component_div_81_div_1_Template_div_click_0_listener() { const item_r23 = i0.ɵɵrestoreView(_r22).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.answerPage(item_r23)); });
    i0.ɵɵelementStart(1, "div", 82)(2, "div", 83)(3, "div", 84)(4, "span")(5, "h5", 85);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 112)(8, "h5", 87);
    i0.ɵɵtemplate(9, Dashboard3Component_div_81_div_1_span_9_Template, 5, 4, "span", 88)(10, Dashboard3Component_div_81_div_1_span_10_Template, 2, 0, "span", 89)(11, Dashboard3Component_div_81_div_1_span_11_Template, 2, 0, "span", 90)(12, Dashboard3Component_div_81_div_1_span_12_Template, 2, 0, "span", 91);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(item_r23.content_name);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r23.end_date != "0000-00-00");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r23.content_type == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r23.content_type == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r23.content_type == "3");
} }
function Dashboard3Component_div_81_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, Dashboard3Component_div_81_div_1_Template, 13, 5, "div", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.overdueTask);
} }
function Dashboard3Component_ng_template_82_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 114)(1, "h4", 115);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 116);
    i0.ɵɵlistener("click", function Dashboard3Component_ng_template_82_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r24); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 117)(5, "p", 118)(6, "b");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 119)(9, "button", 120);
    i0.ɵɵlistener("click", function Dashboard3Component_ng_template_82_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r24); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onSave()); });
    i0.ɵɵtext(10, "ok");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.ErrorTitle);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r3.message);
} }
function Dashboard3Component_ng_template_84_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 124)(1, "small", 125);
    i0.ɵɵtext(2, "Start Date: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 126);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.classInfo.class_start_date);
} }
function Dashboard3Component_ng_template_84_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 124)(1, "small", 125);
    i0.ɵɵtext(2, "End Date: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 126);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.classInfo.class_end_date);
} }
function Dashboard3Component_ng_template_84_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 124)(1, "small", 125);
    i0.ɵɵtext(2, "Subject: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 126);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.classInfo.subject_name);
} }
function Dashboard3Component_ng_template_84_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 124)(1, "small", 125);
    i0.ɵɵtext(2, "Grade: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 127);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.classInfo.grade_name);
} }
function Dashboard3Component_ng_template_84_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 114)(1, "h4", 121);
    i0.ɵɵtext(2, "Info");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 122);
    i0.ɵɵlistener("click", function Dashboard3Component_ng_template_84_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r25); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 117);
    i0.ɵɵtemplate(5, Dashboard3Component_ng_template_84_p_5_Template, 5, 1, "p", 123)(6, Dashboard3Component_ng_template_84_p_6_Template, 5, 1, "p", 123)(7, Dashboard3Component_ng_template_84_p_7_Template, 5, 1, "p", 123)(8, Dashboard3Component_ng_template_84_p_8_Template, 5, 1, "p", 123);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", (ctx_r3.classInfo == null ? null : ctx_r3.classInfo.class_start_date) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r3.classInfo == null ? null : ctx_r3.classInfo.class_end_date) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r3.classInfo == null ? null : ctx_r3.classInfo.subject_name) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r3.classInfo == null ? null : ctx_r3.classInfo.grade_name) != "");
} }
function Dashboard3Component_ng_template_86_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 114)(1, "h4", 128);
    i0.ɵɵtext(2, "Zoom Meet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 129);
    i0.ɵɵlistener("click", function Dashboard3Component_ng_template_86_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r26); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 130)(5, "div", 131)(6, "h5");
    i0.ɵɵtext(7, "Open zoom in ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 119)(9, "button", 132);
    i0.ɵɵlistener("click", function Dashboard3Component_ng_template_86_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r26); const ctx_r3 = i0.ɵɵnextContext(); ctx_r3.modalRef.close(); return i0.ɵɵresetView(ctx_r3.zoomService.initZoomMeeting(ctx_r3.selectedClass)); });
    i0.ɵɵtext(10, "In App");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 133);
    i0.ɵɵlistener("click", function Dashboard3Component_ng_template_86_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r26); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.navigateOutsideZoom(ctx_r3.selectedClass.availabilityDate[0])); });
    i0.ɵɵtext(12, "New Tab");
    i0.ɵɵelementEnd()();
} }
function Dashboard3Component_ng_template_88_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 114)(1, "h4", 128);
    i0.ɵɵtext(2, "Zoom Meet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 129);
    i0.ɵɵlistener("click", function Dashboard3Component_ng_template_88_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r27); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 130)(5, "div", 131)(6, "h5");
    i0.ɵɵtext(7, "No Zoom Meet Scheduled for this day");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 119)(9, "button", 132);
    i0.ɵɵlistener("click", function Dashboard3Component_ng_template_88_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r27); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.modalRef.close()); });
    i0.ɵɵtext(10, "OK");
    i0.ɵɵelementEnd()();
} }
function Dashboard3Component_ng_template_90_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 134)(1, "h5", 135);
    i0.ɵɵtext(2, "Duration Completed");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 117)(4, "div", 10)(5, "div", 136)(6, "h5", 118)(7, "span");
    i0.ɵɵtext(8, "Test time is now complete. All your answers will be saved and submitted\u00A0automatically");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(9, "div", 119)(10, "button", 137);
    i0.ɵɵlistener("click", function Dashboard3Component_ng_template_90_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r28); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.submitAnswer(ctx_r3.contentData)); });
    i0.ɵɵtext(11, "Ok");
    i0.ɵɵelementEnd()();
} }
function Dashboard3Component_ng_template_92_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " , submitted\u00A0 and moved to next content automatically.");
    i0.ɵɵelementEnd();
} }
function Dashboard3Component_ng_template_92_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " and submitted\u00A0automatically.");
    i0.ɵɵelementEnd();
} }
function Dashboard3Component_ng_template_92_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 134)(1, "h5", 135);
    i0.ɵɵtext(2, "Duration Completed");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 117)(4, "div", 10)(5, "div", 136)(6, "h5", 118)(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵtemplate(9, Dashboard3Component_ng_template_92_span_9_Template, 2, 0, "span", 138)(10, Dashboard3Component_ng_template_92_span_10_Template, 2, 0, "span", 138);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(11, "div", 119)(12, "button", 137);
    i0.ɵɵlistener("click", function Dashboard3Component_ng_template_92_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r29); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.submitAnswer(ctx_r3.testContentData, "test")); });
    i0.ɵɵtext(13, "Ok");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("Test time is now complete for ", ctx_r3.testContentData == null ? null : ctx_r3.testContentData.module_name, ". All your answers will be saved ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(ctx_r3.testContentData == null ? null : ctx_r3.testContentData.lastQuestions));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.testContentData == null ? null : ctx_r3.testContentData.lastQuestions);
} }
function Dashboard3Component_ng_template_94_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 134)(1, "h5", 135);
    i0.ɵɵtext(2, "Start Timer Duration");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 117)(4, "div", 10)(5, "div", 136)(6, "h5", 118);
    i0.ɵɵtext(7, " Click 'Ok' to start the assessment. Do not close the window once the assessment\u00A0is\u00A0started. ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(8, "div", 119)(9, "button", 139);
    i0.ɵɵlistener("click", function Dashboard3Component_ng_template_94_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r30); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onSave()); });
    i0.ɵɵtext(10, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 137);
    i0.ɵɵlistener("click", function Dashboard3Component_ng_template_94_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r30); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.updateContentStatus(ctx_r3.contentDetails)); });
    i0.ɵɵtext(12, "Ok");
    i0.ɵɵelementEnd()();
} }
function Dashboard3Component_ng_template_96_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 117)(1, "div", 140);
    i0.ɵɵelement(2, "div", 141);
    i0.ɵɵelementStart(3, "span", 142);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.popUpMessage);
} }
export class Dashboard3Component {
    constructor(datePipe, modalService, sanitizer, env) {
        this.datePipe = datePipe;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.env = env;
        this.scheduleData = [];
        this.classData = [];
        this.filteredClassData = [];
        this.selectedButtonForClass = '2';
        this.globalAnnouncementList = [];
        this.toastr = inject(ToastrService);
        this.buttonName = [{ name: 'In-Progress', id: '2', count: '0', className: 'inProgress_button', badge_class: 'badge-warning', active: true },
            { name: 'Upcoming', id: '4', count: '0', className: 'upcoming_button ml-2', badge_class: 'badge-info', active: false },
            { name: 'Completed', id: '3', count: '0', className: 'completed_button ml-2', badge_class: 'badge-success', active: false }];
        this.overdueTask = [];
        this.upcomingTask = [];
        this.recentScore = [];
        this.recentUpdate = [];
        this.days = [
            { id: 1, day: 'Mo', value: 'Mon' },
            { id: 2, day: 'Tu', value: 'Tue' },
            { id: 3, day: 'We', value: 'Wed' },
            { id: 4, day: 'Th', value: 'Thu' },
            { id: 5, day: 'Fr', value: 'Fri' },
            { id: 6, day: 'Sa', value: 'Sat' },
            { id: 7, day: 'Su', value: 'Sun' },
        ];
        this.auth = inject(AuthService);
        this.classes = inject(ClassService);
        this.router = inject(Router);
        this.sseClient = inject(SseClient);
        this.newSubject = inject(NewsubjectService);
        this.zoomService = inject(ZoomServiceService);
        this.commondata = inject(CommonDataService);
        this.commonServiceFile = inject(CommonService);
        this.student = inject(StudentService);
        this.creator = inject(CreatorService);
        this.subscriptions = [];
        this.ErrorTitle = '';
        this.message = '';
        this.customLoader = false;
        this.popUpMessage = '';
        this.auth.setSessionData('sse_loader', 'true');
        this.newSubject.schoolChange.subscribe(params => {
            if (params != '') {
                if (this.router.url.includes('student/dashboard')) {
                    this.commonService();
                }
            }
            else {
                this.commonService();
            }
        });
        this.creator.changeViewList(true);
    }
    commonService() {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
        this.subscriptions = [];
        this.scheduleData = [];
        this.recentUpdate = [];
        this.filteredClassData = [];
        this.recentScore = [];
        this.upcomingTask = [];
        this.overdueTask = [];
        this.buttonName.forEach(button => button.count = '0');
        this.globalAnnouncement();
        this.serviceList();
    }
    ngOnInit() {
        this.auth.setDashboardRef(this);
    }
    ngOnDestroy() {
        this.creator.changeViewList(false);
        this.auth.setDashboardRef(this);
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
        this.subscriptions = [];
        this.auth.setSessionData('sse_loader', 'false');
    }
    globalAnnouncement() {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(payload, 'school/announcementList').subscribe((successData) => {
            this.globalAnnouncementList = successData.IsSuccess ? successData.ResponseObject : [];
            console.log(this.globalAnnouncementList, 'sssss');
        }, (error) => console.error(error, 'error_announcement'));
    }
    routePage(type) {
        if (type == 'schedule') {
            this.router.navigate(['schedule/daily-schedule']);
        }
        else if (type == 'class') {
            this.router.navigate(['/studentlogin/list-class']);
        }
    }
    enterList(item) {
        console.log(item, 'itens');
        if (item.class_details.status == '1') {
            this.toastr.info('This Class Not Started');
        }
        else {
            this.auth.setSessionData('class-id', item.class_details.class_id);
            this.auth.setSessionData('schedule_id', item.class_details.schedule_id);
            this.router.navigate(['/studentlogin/class-detail']);
        }
    }
    classEnterList(item) {
        if (item.status == '3') {
            this.message = 'This Class has already completed';
            this.ErrorTitle = item.class_name;
            this.modalRef = this.modalService.open(this.throwError, { size: 'md' });
        }
        else if (item.status == '1') {
            this.toastr.info('This Class Not Started');
        }
        else {
            this.auth.setSessionData('class-id', item.class_id);
            this.auth.setSessionData('schedule_id', item.schedule_id);
            this.router.navigate(['/studentlogin/class-detail']);
        }
    }
    redirectToAnnouncementOrInbox(value, messageType = '') {
        console.log(value, 'redirectedValue');
        this.auth.setSessionData('class-id', value.class_id);
        this.auth.setSessionData('schedule_id', value.class_details.schedule_id);
        this.router.navigate(['/studentlogin/class-detail/' + (messageType != '' ? messageType : value.message_type)]);
        event.stopPropagation();
    }
    serviceList() {
        const payload = {
            platform: 'web',
            type: '1',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            response_type: 'SSE'
        };
        const classService = this.sseClient.stream('student/classList', { keepAlive: true, reconnectionDelay: 10000,
            responseType: 'event' }, { body: payload }, 'POST').subscribe((event) => {
            if (event.type === 'error') {
                const errorEvent = event;
            }
            else if (event.type == 'message') {
                const messageEvent = event;
                const classListData = JSON.parse(messageEvent.data);
                console.log(classListData.classList, 'classListData');
                classListData.classList = classListData.classList.filter((data, i, a) => i === a.indexOf(a.find(f => f.class_id === data.class_id)));
                this.classData = JSON.stringify(classListData.classList ?? []);
                this.buttonName.forEach(button => button.count = '0');
                classListData.classList.forEach(item => {
                    const button = this.buttonName.find(btn => btn.id === item.status);
                    if (button) {
                        button.count = (parseInt(button.count) + 1).toString();
                    }
                });
                const todayDate = this.datePipe.transform(new Date(), 'EEE');
                console.log(todayDate, 'todayData');
                const dayMap = { Mon: '1', Tue: '2', Wed: '3', Thu: '4', Fri: '5', Sat: '6', Sun: '7' };
                this.recentUpdate = [];
                this.scheduleData = [];
                classListData.classList.forEach((item) => {
                    const processMessage = (messageType, messages) => {
                        messages.forEach((messageData) => {
                            this.recentUpdate.push({
                                class_id: item.class_id,
                                class_name: item.class_name,
                                message_type: messageType,
                                message: messageData,
                                class_details: item
                            });
                        });
                    };
                    processMessage('inbox', item.inbox_message);
                    processMessage('announcement', item.announcement_message);
                    item.availabilityDate.forEach((items) => {
                        items.inbox_count = item.inbox_count;
                        items.announcement_count = item.announcement_count;
                        items.class_start_date = item.start_date;
                        items.class_end_date = item.end_date;
                        items.subject_name = item.subject_name;
                        items.grade_name = item.grade_name;
                        items.class_details = item;
                        if (items.slotday === dayMap[todayDate] && item.status == '2') {
                            this.scheduleData.push(items);
                        }
                    });
                });
                console.log(this.scheduleData, 'schedule');
                this.filteredClassData = [];
                this.filteredClassData = classListData.classList.filter((value) => {
                    return value.status == this.selectedButtonForClass;
                });
                this.recentUpdate.forEach((item) => {
                    if (item.message_type != 'inbox') {
                        item.message.convertedText = this.convertInnerHtmlToNormalText(item.message.note, 40);
                        item.message.convertedFullText = this.convertInnerHtmlToNormalText(item.message.note);
                    }
                    else {
                        item.message.convertedFullText = item.message.body;
                        item.message.convertedText = item.message.body.length > 40 ? item.message.body.slice(0, 40) + '......' :
                            item.message.body;
                    }
                });
                const now = new Date();
                const oneMonthAgo = new Date();
                oneMonthAgo.setMonth(now.getMonth() - 1);
                this.recentUpdate = this.recentUpdate.filter(item => {
                    const itemDate = new Date(item.message.created_date);
                    return itemDate >= oneMonthAgo && itemDate <= now;
                })
                    .sort((a, b) => new Date(b.message.created_date).getTime() - new Date(a.message.created_date).getTime());
                this.recentUpdate = this.recentUpdate.slice(0, 10);
                console.log(this.recentUpdate, 'res');
            }
        });
        const curriculumPayload = payload;
        delete curriculumPayload.type;
        const curriculumService = this.sseClient.stream('student/curriculumList', { keepAlive: true, reconnectionDelay: 10000,
            responseType: 'event' }, { body: curriculumPayload }, 'POST').subscribe((event) => {
            if (event.type === 'error') {
                const errorEvent = event;
            }
            else if (event.type == 'message') {
                const messageEvent = event;
                const curriculumListData = JSON.parse(messageEvent.data);
                console.log(curriculumListData, 'curriculumListData');
                this.upcomingTask = curriculumListData.LatestCurriculum;
                this.recentScore = [];
                this.overdueTask = [];
                curriculumListData.curriculumList.forEach((curriculumData) => {
                    curriculumData.downloadPDF = curriculumData.answerkey_path ? this.commonServiceFile.convertBase64(curriculumData.answerkey_path) : [];
                    curriculumData.overdueStatus = true;
                    if (curriculumData.overdue < 0) {
                        curriculumData.overdueStatus = false;
                        Math.abs(curriculumData.overdue);
                        curriculumData.overdue = Math.abs(curriculumData.overdue);
                    }
                    if (curriculumData.student_content_status == '3') {
                        this.recentScore.push(curriculumData);
                    }
                    else if (!curriculumData.overdueStatus && curriculumData.content_type != '1') {
                        this.overdueTask.push(curriculumData);
                    }
                });
                this.recentScore = this.recentScore.slice(0, 10);
                this.overdueTask = this.overdueTask.slice(0, 10);
            }
        });
        this.subscriptions.push(classService, curriculumService);
    }
    updateClassData(id) {
        this.selectedButtonForClass = id;
        this.buttonName.forEach(items => items.active = items.id == id);
        const classData = JSON.parse(this.classData);
        this.filteredClassData = classData.filter((value) => {
            return value.status == id;
        });
    }
    checkAvailabilityDate(data, id) {
        return data.availabilityDate.some((code => code.slotday == id));
    }
    returnDayTitle(data, id, day) {
        if (data.availabilityDate.some((code => code.slotday == id))) {
            let value = '';
            data.availabilityDate.forEach(item => {
                if (item.slotday == id) {
                    value = value + (value != '' ? ', ' : '') + day + ' : ' + item.slotstarttime + ' - ' + item.slotendtime;
                }
            });
            return value;
        }
        else {
            return '';
        }
    }
    onSave() {
        this.modalRef.close();
    }
    showInformation(data, event) {
        this.classInfo = data;
        this.modalRef = this.modalService.open(this.showInform, { size: 'sm' });
        event.stopPropagation();
    }
    getMeetingLink(datum, index) {
        console.log(datum, 'datum');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: datum.class_id,
            class_type: datum.availabilityDate[index].class_type,
            allow_zoom_api: datum.allow_zoom_api,
            notes: !datum.notes ? [] : datum.notes,
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
                this.navigateOutsideZoom(successData.ResponseObject);
            }
            else if (datum.allow_zoom_api == '1') {
                this.zoomService.initZoomMeeting(datum);
            }
        }
        else {
            this.toastr.error(successData.ErrorObject, 'Failed!');
        }
    }
    navigateOutsideZoom(data) {
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        if (this.selectedClass.allow_zoom_api == '0') {
            link.setAttribute('href', data.meeting_link);
            console.log(data.meeting_link, 'data.meeting_link');
        }
        else {
            link.setAttribute('href', data.teacher_link);
        }
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    openZoomDialog(data, event) {
        if (!this.customLoader) {
            this.customLoader = true;
            this.selectedClass = data.class_details;
            console.log(this.selectedClass, 'selectedClass');
            console.log(data.class_details, 'class_details');
            if (data.class_details.availabilityDate.length == 0) {
                this.modalRef = this.modalService.open(this.zoomDialog1, { size: 's' });
            }
            else {
                if (this.selectedClass.allow_zoom_api == '0') {
                    this.navigateOutsideZoom(data.class_details.availabilityDate[0]);
                }
                else {
                    this.getMeetingLink(data.class_details, 0);
                }
            }
            this.customLoader = false;
        }
        event.stopPropagation();
    }
    answerPage(value) {
        console.log(value, 'value');
        if (value.content_type == '2') {
            this.auth.setSessionData('ContentType', 'Assignments');
            if (value.student_content_status != 3) {
                if (value.content_format == '3' && value.content_started_at == null && (value.student_content_status == '1' || value.student_content_status == '2')) {
                    this.contentDetails = value;
                    if (value?.is_test == '1') {
                        this.modalRef = this.modalService.open(this.startTimerDuration);
                    }
                    else {
                        this.updateContentStatus(this.contentDetails);
                    }
                }
                else if (value.content_format == '3' && value.content_started_at && value.content_started_at != '' &&
                    value.content_started_at && value.content_duration != '0' && (value.student_content_status == '1' || value.student_content_status == '2')) {
                    this.auth.getCurrentDateAndTime(value, '', value?.is_test == '1' ? 'dashboard' : '').subscribe((isAllowed) => {
                        if (!isAllowed) {
                            console.log('Access denied');
                            this.contentData = value;
                            console.log(this.contentData, 'contentData');
                            this.modalRef = this.modalService.open(this.submitPopUp);
                        }
                    });
                }
                else {
                    value.available_content_duration = value.content_duration != '0' ? parseInt(value.content_duration) * 60 :
                        value.content_time_taken != '0' ? parseInt(value.content_time_taken) : 0;
                    if (value?.is_test == '1') {
                        this.testDetails(value);
                    }
                    else {
                        this.auth.setSessionData('classDetails', JSON.stringify(value));
                        this.router.navigate(['/studentlogin/answering']);
                    }
                }
            }
            else {
                this.auth.setSessionData('student-card', JSON.stringify(value));
                this.router.navigate(['/studentlogin/score-card']);
            }
        }
        else if (value.content_type == '3') {
            if (value.student_content_status == 3) {
                this.auth.setSessionData('ContentType', 'Quiz');
                this.auth.setSessionData('student-card', JSON.stringify(value));
                this.router.navigate(['/studentlogin/score-card']);
            }
            else {
                this.checkContentTime(value);
            }
        }
        else if (value.content_type == '1') {
            this.router.navigate(['/studentlogin/resource/' + value.content_id]);
        }
    }
    updateContentStatus(data) {
        data.available_content_duration = data.content_duration != '0' ? parseInt(data.content_duration) * 60
            : data.content_time_taken != '0' ? parseInt(data.content_time_taken) : 0;
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_content_id: data.student_content_id,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        this.auth.postService(payload, 'student/updateContentStartTime').subscribe((successData) => {
            console.log(successData, 'successData');
            if (successData.IsSuccess) {
                if (data?.is_test == '1' && data.content_format == '3') {
                    this.testDetails(data);
                }
                else {
                    this.auth.setSessionData('classDetails', JSON.stringify(data));
                    this.router.navigate(['/studentlogin/answering']);
                }
                this.modalRef?.close();
            }
        }, error => console.error(error, 'error_updateStatus'));
    }
    testDetails(event, calledFrom = '') {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: event.content_id,
            student_content_id: event.student_content_id,
            school_id: this.auth.getSessionData('school_id')
        };
        this.creator.testDetail(data).subscribe((successData) => {
            this.testSuccess(successData, calledFrom);
        }, (error) => {
            console.error(error, 'error_lisDetails');
        });
    }
    testSuccess(successData, calledFrom) {
        if (successData.IsSuccess) {
            successData.ResponseObject.forEach(items => {
                items.contents.forEach(content => {
                    content.content_format = items.content_format;
                    content.class_id = items.class_id;
                    content.test_student_content_status = items.student_content_status;
                });
            });
            console.log(successData.ResponseObject, 'successData.ResponseObject');
            if (calledFrom != '') {
                this.modalRef?.close();
                this.popUpMessage = 'Please wait while we submitting all module...';
                this.modalRef = this.modalService.open(this.feedbackStatus, { backdrop: 'static' });
                this.submitAllTestAnswer(successData.ResponseObject);
            }
            else {
                this.auth.testDetailsRoutingPage(successData.ResponseObject, 'assignment');
            }
        }
    }
    async submitAllTestAnswer(arrayValue = []) {
        const promises = [];
        for (const item of arrayValue) {
            for (const content of item.contents) {
                if (content?.student_content_status == '1' || content?.student_content_status == '2') {
                    promises.push(this.auth.questionList(content));
                }
            }
        }
        await Promise.all(promises);
        await this.commonService();
        await this.modalRef.close();
    }
    submitTestFromAuthService(value) {
        console.log(value, 'value');
        this.testContentData = value;
        this.modalRef = this.modalService.open(this.submitTestPopUp);
    }
    async submitAnswer(contentData, calledFrom = '') {
        console.log(contentData, 'contentData');
        if (contentData?.is_test == '1' && calledFrom == '') {
            this.testDetails(contentData, 'submit');
        }
        else {
            try {
                await this.auth.questionList(contentData);
                await this.modalRef.close();
                if (!contentData?.lastQuestions) {
                    await this.auth.updateContentStatus(contentData?.nextModuleData, 'list');
                }
                else {
                    await this.subscriptions.forEach(sub => sub.unsubscribe());
                    this.subscriptions = [];
                    this.scheduleData = [];
                    this.recentUpdate = [];
                    this.filteredClassData = [];
                    this.recentScore = [];
                    this.upcomingTask = [];
                    this.overdueTask = [];
                    this.buttonName.forEach(button => button.count = '0');
                    this.globalAnnouncement();
                    await this.serviceList();
                }
            }
            catch (error) {
                console.error('Error during submitAnswer:', error);
            }
        }
    }
    checkContentTime(selectedData) {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: selectedData.class_id,
            content_id: selectedData.content_id,
            class_content_id: selectedData.class_content_id,
            school_id: this.auth.getSessionData('school_id')
        };
        this.student.checkTime(payload).subscribe((successData) => {
            this.checkContentTimeSuccess(successData, selectedData);
        }, (error) => {
            console.error(error, 'check_time');
        });
    }
    checkContentTimeSuccess(successData, selectedData) {
        if (successData.IsSuccess) {
            if (selectedData.status == 1) {
                this.message = selectedData.content_name + ' ' + 'is' + ' ' + 'assessments' + ' not started';
                this.ErrorTitle = selectedData.class_name;
                this.modalRef = this.modalService.open(this.throwError, { size: 'md' });
            }
            else if (selectedData.status == 3 && (selectedData.student_content_status == 1 || selectedData.student_content_status == 2)) {
                this.toastr.error('Assessment End date is over');
                this.message = selectedData.content_name + ' ' + 'is assessment End date is over';
                this.ErrorTitle = selectedData.class_name;
                this.modalRef = this.modalService.open(this.throwError, { size: 'md' });
            }
            else if (selectedData.student_content_status == 3) {
                this.auth.setSessionData('ContentType', 'Quiz');
                this.auth.setSessionData('student-card', JSON.stringify(selectedData));
                this.router.navigate(['/studentlogin/score-card']);
            }
            else {
                this.auth.setSessionData('ContentType', 'Quiz');
                if (selectedData.content_format == '3' && selectedData.content_started_at == null &&
                    (selectedData.student_content_status == '1' || selectedData.student_content_status == '2')) {
                    this.contentDetails = selectedData;
                    if (selectedData?.is_test == '1') {
                        this.modalRef = this.modalService.open(this.startTimerDuration);
                    }
                    else {
                        this.updateContentStatus(this.contentDetails);
                    }
                }
                else if (selectedData.content_format == '3' && selectedData.content_started_at && selectedData.content_started_at != ''
                    && selectedData.content_started_at && selectedData.content_duration != '0' &&
                    (selectedData.student_content_status == '1' || selectedData.student_content_status == '2')) {
                    this.auth.getCurrentDateAndTime(selectedData, '', selectedData?.is_test == '1' ? 'dashboard' : '').subscribe((isAllowed) => {
                        if (!isAllowed) {
                            console.log('Access denied');
                            this.contentData = selectedData;
                            this.modalRef = this.modalService.open(this.submitPopUp);
                        }
                    });
                }
                else {
                    this.auth.setSessionData('ContentType', 'Quiz');
                    if (selectedData?.is_test == '1') {
                        this.testDetails(selectedData);
                    }
                    else {
                        this.auth.setSessionData('classDetails', JSON.stringify(selectedData));
                        this.router.navigate(['/studentlogin/answering']);
                    }
                }
            }
        }
        else {
            this.message = successData.ResponseObject;
            this.ErrorTitle = selectedData.class_name;
            this.modalRef = this.modalService.open(this.throwError, { size: 'md' });
        }
    }
    viewAnswerKeyPdf(event, list) {
        this.auth.setSessionData('view_pdf_url_details', JSON.stringify(list));
        window.open(this.env.envProperties.envURL + '#/studentlogin/viewAnswerKeyPdf', '_blank');
        event.stopPropagation();
    }
    convertInnerHtmlToNormalText(htmContent, splitCount = 0) {
        const div = document.createElement('div');
        div.innerHTML = htmContent;
        let html = '';
        if (splitCount != 0) {
            const words = div.innerText;
            if (words.length > splitCount) {
                html = words.slice(0, splitCount) + '......';
            }
            else {
                html = div.innerText;
            }
        }
        else {
            html = div.innerText;
        }
        return html;
    }
    static { this.ɵfac = function Dashboard3Component_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Dashboard3Component)(i0.ɵɵdirectiveInject(i1.DatePipe), i0.ɵɵdirectiveInject(i2.NgbModal), i0.ɵɵdirectiveInject(i3.DomSanitizer), i0.ɵɵdirectiveInject(i4.EnvironmentService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Dashboard3Component, selectors: [["app-dashboard"]], viewQuery: function Dashboard3Component_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
            i0.ɵɵviewQuery(_c4, 5);
            i0.ɵɵviewQuery(_c5, 5);
            i0.ɵɵviewQuery(_c6, 5);
            i0.ɵɵviewQuery(_c7, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.throwError = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.showInform = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.zoomDialog = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.zoomDialog1 = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.submitPopUp = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.submitTestPopUp = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.startTimerDuration = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.feedbackStatus = _t.first);
        } }, decls: 98, vars: 19, consts: [["throwError", ""], ["showInform", ""], ["zoomDialog", ""], ["zoomDialog1", ""], ["submitPopUp", ""], ["submitTestPopUp", ""], ["startTimerDuration", ""], ["feedbackStatus", ""], ["class", "col-12 px-2", 4, "ngIf"], [1, "col-8"], [1, "row"], [1, "col-12", "px-2", "mt-1"], [1, "card", 2, "background", "#f7f6f8", "border-radius", "16px"], [1, "card-header", 2, "background-color", "#1999e8", "color", "white"], [1, "col-6", "d-flex", "align-items-center"], [1, "icon", "mt-1", 3, "icon"], [1, "title"], [1, "col-6", "text-right", "align-self-center"], [1, "text-right", "cursor", 2, "font-size", "10px", "color", "white", 3, "click"], [1, "card-body"], ["class", "row d-flex justify-content-center align-items-center", 4, "ngIf"], ["class", "row px-3 div-height", 4, "ngIf"], [1, "card-header", 2, "background-color", "#1999e8", "color", "white", "padding", "12px 10px"], [1, "d-flex", 3, "icon"], [1, "col-6", "align-self-center", "text-right"], [1, "row", "px-3", "mb-2", "pb-1"], [3, "ngClass", "class", "click", 4, "ngFor", "ngForOf"], ["class", "row px-3 div-height2", 4, "ngIf"], [1, "d-flex", "align-items-center"], [1, "icon", 3, "icon"], [1, "row", "px-3", "align-items-center", "justify-content-between", "pb-3"], [1, "d-flex", "align-items-center", 2, "font-size", "10px"], [1, "fa", "fa-square", 2, "color", "#00a8ff !important", "font-size", "14px !important"], [1, "fa", "fa-square", 2, "color", "#81ba00 !important", "font-size", "14px !important"], [1, "col-4"], [1, "col-12", "px-2"], [1, "card", 2, "border-radius", "16px", "background", "#f7f6f8"], ["class", "row message-row-1", 4, "ngIf"], [1, "col-12", "mt-1", "px-2"], [1, "row", "message-row-1"], ["class", "col-12 cursor heading_main_card px-0", 3, "click", 4, "ngFor", "ngForOf"], [1, "card"], [1, "marquee"], [1, "marquee-item"], [4, "ngFor", "ngForOf"], [1, "font-weight-bold"], [1, "color-primary"], [1, "row", "d-flex", "justify-content-center", "align-items-center"], [1, "col-12", "mt-4"], [1, "nodataList", "border-0"], [1, "row", "px-3", "div-height"], ["class", "col-12 cursor card dashboard-hover dashboard-card_even px-0", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-12", "cursor", "card", "dashboard-hover", "dashboard-card_even", "px-0", 3, "click"], [1, "color-primary", "align-self-center", "mb-0", 2, "font-size", "14px", "line-height", "20px"], [1, "row", 2, "margin-top", "10px"], [1, "col-9"], [1, "mb-0", "fs-12", "font-weight-bold-400"], [1, "fs-12", "font-weight-bold-400"], [1, "col-3", "text-right", "align-self-center"], ["class", "fa fa-video-camera mr-1", "title", "Enter Online Class", 3, "click", 4, "ngIf"], ["class", "fa fa-bullhorn color-primary mr-1", "title", "New Announcement", 3, "click", 4, "ngIf"], ["title", "New Inbox Message", 1, "fa", "fa-commenting-o", "color-primary", "mr-1", 3, "click"], ["class", "upload-count", 4, "ngIf"], ["title", "Enter Online Class", 1, "fa", "fa-video-camera", "mr-1", 3, "click"], ["title", "New Announcement", 1, "fa", "fa-bullhorn", "color-primary", "mr-1", 3, "click"], [1, "upload-count"], [3, "click", "ngClass"], [1, "row", "px-3", "div-height2"], ["class", "col-12 cursor card dashboard-hover px-0", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col-12", "cursor", "card", "dashboard-hover", "px-0", 3, "click", "ngClass"], [1, "mb-0", "fs-12", "pr-0", 2, "line-height", "18px"], [1, "mb-0", "col-12", "text-right", "align-self-center"], ["style", "color: #817d7d; padding: 6px 5px; margin-left: 4px; margin-right: 4px", "class", "circle_design fs-10", 3, "title", "ngClass", 4, "ngFor", "ngForOf"], [1, "circle_design", "fs-10", 2, "color", "#817d7d", "padding", "6px 5px", "margin-left", "4px", "margin-right", "4px", 3, "title", "ngClass"], ["class", "col-12 card px-0 dashboard-hover", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col-12", "card", "px-0", "dashboard-hover", 3, "click", "ngClass"], ["class", "fa fa-key mr-1 cursor", "aria-hidden", "true", "title", "Answer Key & Explanation", 3, "click", 4, "ngIf"], [1, "fs-12", "mb-0", 2, "line-height", "18px"], [1, "d-flex", "align-items-center", "justify-content-end"], [1, "badge", "badge-warning", 2, "background-color", "#5FAE99"], ["aria-hidden", "true", "title", "Answer Key & Explanation", 1, "fa", "fa-key", "mr-1", "cursor", 3, "click"], [1, "col-12", "cursor", "heading_main_card", "px-0", 3, "click"], [1, "card-body", "heading_card", "px-0"], [1, "row", "message-row"], [1, "col-7", "align-self-center", "px-0"], [1, "mb-0", "heading", "line-wrap"], [1, "col-5", "align-self-center", "pl-1", "pr-0"], [1, "mb-0", "d-flex", "align-items-center", "justify-content-end"], ["style", "color: #777777 !important;", "class", "fs-10 mb-0", 4, "ngIf"], ["style", "color: white !important;", "class", "ml-1 badge fs-10 badge-warning", 4, "ngIf"], ["style", "color: white !important;", "class", "ml-1 badge badge-info fs-10", 4, "ngIf"], ["style", "color: white !important;", "class", "ml-1 badge fs-10 badge-success", 4, "ngIf"], [1, "fs-10", "mb-0", 2, "color", "#777777 !important"], [1, "font-weight-bold", 2, "color", "#81ba00"], [1, "ml-1", "badge", "fs-10", "badge-warning", 2, "color", "white !important"], [1, "ml-1", "badge", "badge-info", "fs-10", 2, "color", "white !important"], [1, "ml-1", "badge", "fs-10", "badge-success", 2, "color", "white !important"], [1, "card-body", "heading_card", "px-2"], [1, "col-8", "px-2", "align-self-center"], ["class", "m-0", 4, "ngIf"], [1, "col-4", "px-2", "text-right"], ["style", "background: #8f008a", "class", "ml-1 badge fs-10", 4, "ngIf"], ["style", "background: #8d6eeb", "class", "badge fs-10", 4, "ngIf"], [1, "m-0"], [3, "title", 4, "ngIf"], ["class", "color-primary", 3, "title", 4, "ngIf"], [3, "title"], [1, "mb-0", "heading"], [1, "color-primary", 3, "title"], [1, "fa", "fa-file", "color-primary", 2, "font-size", "12px", "color", "black !important"], [1, "ml-1", "badge", "fs-10", 2, "background", "#8f008a"], [1, "badge", "fs-10", 2, "background", "#8d6eeb"], [1, "col-5", "pr-0"], [1, "font-weight-bold", 2, "color", "#FF0000"], [1, "modal-header", "align-items-center"], [1, "modal-title", "letter"], [1, "fa", "fa-close", "cursor", 2, "color", "#000 !important", 3, "click"], [1, "modal-body"], [1, "mb-0"], [1, "modal-footer"], [1, "btn", "cancel", "pull-right", 3, "click"], [1, "modal-title"], [1, "fa", "fa-close", "cursor", 2, "font-size", "16px", "color", "black !important", 3, "click"], ["class", "p-0", 4, "ngIf"], [1, "p-0"], [1, "letter"], [1, "t-name", "font-weight-bold"], [1, "t-name", "capital", "font-weight-bold"], [1, "modal-title", "text-center"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "modal-body", "d-flex", "justify-content-right"], [1, "col-12", "text-center"], [1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "modal-header"], [1, "contenttext", "text-center", "mb-0"], [1, "col-md-12"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], [1, "btn", "cancel", "mr-1", 3, "click"], [1, "col-12", "px-0", "my-3", "d-flex", "flex-row", "align-items-center"], [1, "feedback_spinner"], [1, "ml-3", 2, "font-size", "16px"]], template: function Dashboard3Component_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "section");
            i0.ɵɵtemplate(1, Dashboard3Component_div_1_Template, 6, 1, "div", 8);
            i0.ɵɵelementStart(2, "div", 9)(3, "div", 10)(4, "div", 11)(5, "div", 12)(6, "div", 13)(7, "div", 10)(8, "div", 14);
            i0.ɵɵelement(9, "app-feather-icons", 15);
            i0.ɵɵelementStart(10, "span", 16);
            i0.ɵɵtext(11, "\u00A0 Today's Schedule");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 17)(13, "span", 18);
            i0.ɵɵlistener("click", function Dashboard3Component_Template_span_click_13_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.routePage("schedule")); });
            i0.ɵɵelementStart(14, "a");
            i0.ɵɵtext(15, "View Details");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(16, "div", 19);
            i0.ɵɵtemplate(17, Dashboard3Component_div_17_Template, 4, 0, "div", 20)(18, Dashboard3Component_div_18_Template, 2, 1, "div", 21);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(19, "div", 10)(20, "div", 11)(21, "div", 12)(22, "div", 22)(23, "div", 10)(24, "div", 14);
            i0.ɵɵelement(25, "app-feather-icons", 23);
            i0.ɵɵelementStart(26, "span", 16);
            i0.ɵɵtext(27, "\u00A0 My Classes");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "div", 24)(29, "span", 18);
            i0.ɵɵlistener("click", function Dashboard3Component_Template_span_click_29_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.routePage("class")); });
            i0.ɵɵelementStart(30, "a");
            i0.ɵɵtext(31, "View All");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(32, "div", 19)(33, "div", 25);
            i0.ɵɵtemplate(34, Dashboard3Component_button_34_Template, 4, 11, "button", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(35, Dashboard3Component_div_35_Template, 4, 1, "div", 20)(36, Dashboard3Component_div_36_Template, 2, 1, "div", 27);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(37, "div", 11)(38, "div", 12)(39, "div", 13)(40, "div", 28);
            i0.ɵɵelement(41, "app-feather-icons", 29);
            i0.ɵɵelementStart(42, "span", 16);
            i0.ɵɵtext(43, "\u00A0 Recent Scores");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(44, "div", 19)(45, "div", 30)(46, "span", 31);
            i0.ɵɵelement(47, "i", 32);
            i0.ɵɵtext(48, "- Assignment ");
            i0.ɵɵelement(49, "i", 33);
            i0.ɵɵtext(50, "- Assessment ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(51, Dashboard3Component_div_51_Template, 2, 1, "div", 21);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(52, "div", 34)(53, "div", 10)(54, "div", 35)(55, "div", 36)(56, "div", 13)(57, "div", 28);
            i0.ɵɵelement(58, "app-feather-icons", 29);
            i0.ɵɵelementStart(59, "span", 16);
            i0.ɵɵtext(60, "\u00A0 Upcoming Tasks");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(61, "div", 19);
            i0.ɵɵtemplate(62, Dashboard3Component_div_62_Template, 2, 1, "div", 37);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(63, "div", 38)(64, "div", 12)(65, "div", 13)(66, "div", 28);
            i0.ɵɵelement(67, "app-feather-icons", 29);
            i0.ɵɵelementStart(68, "span", 16);
            i0.ɵɵtext(69, "\u00A0 Announcements / Messages");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(70, "div", 19)(71, "div", 39);
            i0.ɵɵtemplate(72, Dashboard3Component_div_72_Template, 9, 4, "div", 40);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(73, "div", 38)(74, "div", 12)(75, "div", 13)(76, "div", 28);
            i0.ɵɵelement(77, "app-feather-icons", 29);
            i0.ɵɵelementStart(78, "span", 16);
            i0.ɵɵtext(79, "\u00A0 Past Due");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(80, "div", 19);
            i0.ɵɵtemplate(81, Dashboard3Component_div_81_Template, 2, 1, "div", 37);
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵtemplate(82, Dashboard3Component_ng_template_82_Template, 11, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(84, Dashboard3Component_ng_template_84_Template, 9, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(86, Dashboard3Component_ng_template_86_Template, 13, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(88, Dashboard3Component_ng_template_88_Template, 11, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(90, Dashboard3Component_ng_template_90_Template, 12, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(92, Dashboard3Component_ng_template_92_Template, 14, 3, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(94, Dashboard3Component_ng_template_94_Template, 13, 0, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor)(96, Dashboard3Component_ng_template_96_Template, 5, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("row dashboard_section py-", ctx.globalAnnouncementList.length != 0 ? "4" : "5", " dashboard px-4");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.globalAnnouncementList.length != 0);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("icon", "calendar");
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", ctx.scheduleData.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.scheduleData.length != 0);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("icon", "book");
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngForOf", ctx.buttonName);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.filteredClassData.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.filteredClassData.length != 0);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("icon", "award");
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("ngIf", ctx.recentScore.length != 0);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("icon", "activity");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.upcomingTask.length != 0);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("icon", "bell");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.recentUpdate);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("icon", "alert-circle");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.overdueTask.length != 0);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i5.FeatherIconsComponent, i1.DatePipe], styles: ["section[_ngcontent-%COMP%] {\n  height: max-content !important;\n  background-repeat: round;\n  padding: 18px;\n  object-fit: contain;\n}\n\n.dashboard-announcement-card[_ngcontent-%COMP%] {\n  border-left: 10px solid #8d6eeb !important;\n}\n\n.dashboard-hover[_ngcontent-%COMP%]:hover {\n  display: absolute;\n  transform: scale(1.0222);\n  z-index: 999;\n  box-shadow: 2px 2px 2px #e8eaed;\n}\n\n.dashboard-hover_small[_ngcontent-%COMP%]:hover {\n  display: absolute;\n  transform: scale(1.045);\n  z-index: 999;\n  box-shadow: 2px 2px 2px #e8eaed;\n}\n\nsvg[_ngcontent-%COMP%] {\n  width: 14px !important;\n  height: 14px !important;\n}\n\n.dashboard-button[_ngcontent-%COMP%] {\n  padding: 8px 10px !important;\n  font-size: 12px;\n  color: #8F008A;\n  border: 1px solid #8F008A;\n  border-radius: 24px;\n  background: #FFFFFF;\n}\n\n.completed_button[_ngcontent-%COMP%] {\n  color: #81ba00 !important;\n  border: 1px solid #81ba00 !important;\n}\n\n.completed_button[_ngcontent-%COMP%]:hover, .completed_button.active[_ngcontent-%COMP%] {\n  background: #81ba00;\n  color: #FFFFFF !important;\n\n  .badge-success {\n    background-color: #FFFFFF !important;\n    color: #81ba00 !important;\n  }\n}\n\n.upcoming_button[_ngcontent-%COMP%] {\n  color: #00A8FF !important;\n  border: 1px solid #00A8FF !important;\n}\n\n.upcoming_button[_ngcontent-%COMP%]:hover, .upcoming_button.active[_ngcontent-%COMP%] {\n  background: #00A8FF;\n  color: #FFFFFF !important;\n\n  .badge-info {\n    background-color: #FFFFFF !important;\n    color: #00A8FF !important;\n  }\n}\n\n.inProgress_button[_ngcontent-%COMP%] {\n  color: #ffc107 !important;\n  border: 1px solid #ffc107 !important;\n}\n\n.inProgress_button[_ngcontent-%COMP%]:hover, .inProgress_button.active[_ngcontent-%COMP%] {\n  background: #ffc107;\n  color: #FFFFFF !important;\n\n  .badge-warning {\n    background-color: #FFFFFF !important;\n    color: #ffc107 !important;\n  }\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.dashboard.masonry-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n  align-items: start;\n}\n\n.circle_design[_ngcontent-%COMP%] {\n  background: #f1f1f4;\n  border-radius: 50%;\n  padding: 4px 6px;\n}\n\n.msg-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  box-shadow: 0 0 15px #1e1e2017;\n  border-radius: 50%;\n  cursor: default;\n}\n\n.scheduledDate[_ngcontent-%COMP%] {\n  background: #5FAE99;\n  color: #FFFFFF !important;\n  font-weight: 700;\n}\n\ni[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-left: 6px;\n  margin-right: 6px !important;\n  border-radius: 50%;\n  color: #5FAE99 !important;\n}\n\n.dashboard-card_inProgress[_ngcontent-%COMP%] {\n  border-left: 10px solid #F8C269 !important;\n}\n\n.dashboard-card_upcoming[_ngcontent-%COMP%] {\n  border-left: 10px solid #00A8FF !important;\n}\n\n.dashboard-card_completed[_ngcontent-%COMP%] {\n  border-left: 10px solid #81ba00 !important;\n}\n\n.dashboard-card_odd[_ngcontent-%COMP%] {\n  border-left: 10px solid #e6baea !important;\n}\n\n.dashboard-card_even[_ngcontent-%COMP%] {\n  border-left: 10px solid #864BA7 !important;\n}\n\n.upload-count[_ngcontent-%COMP%] {\n  padding: 4px 6px;\n  margin-left: -8px;\n  font-size: 10px;\n  color: #fff;\n  font-weight: 400;\n  border-radius: 50%;\n  position: relative;\n  top: -12px !important;\n  background: #5FAE99;\n}\n\n.div-height[_ngcontent-%COMP%] {\n  max-height: 20rem;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n\n.div-height[_ngcontent-%COMP%]:hover {\n  overflow-y: auto !important;\n  overflow-x: hidden;\n}\n\n.div-height1[_ngcontent-%COMP%] {\n  max-height: 25rem;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n\n.div-height1[_ngcontent-%COMP%]:hover {\n  overflow-y: auto !important;\n  overflow-x: hidden;\n}\n\ndiv-height2[_ngcontent-%COMP%] {\n  max-height: 30rem;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n\n.div-height2[_ngcontent-%COMP%]:hover {\n  overflow-y: auto !important;\n  overflow-x: hidden;\n}\n\n.marquee[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  display: flex;\n}\n\n.marquee-item[_ngcontent-%COMP%] {\n  flex: none;\n  padding-left: 100%;\n  animation: _ngcontent-%COMP%_animate 25s linear infinite;\n}\n\n//.marquee[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n//  padding-left: 100%;\n//  display: inline-block;\n//  animation: _ngcontent-%COMP%_animate 20s linear infinite;\n//}\n\n.marquee[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{\n  animation-play-state: paused;\n}\n\n@keyframes _ngcontent-%COMP%_animate {\n  100% {\n    transform: translate(-100%, 0);\n  }\n}\n\n.recent_inProgress[_ngcontent-%COMP%] {\n  border-left: 10px solid #F8C269;\n}\n\n.recent_not_started[_ngcontent-%COMP%] {\n  border-left: 10px solid #13c9ca;\n}\n\n.heading_card[_ngcontent-%COMP%] {\n  //box-shadow: 0 1px 0 #e8eaed !important;\n  padding: 5px;\n}\n\n.heading_main_card[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-radius: 5px;\n  background-color: #f9f9f9;\n  transition: transform 0.2s;\n}\n\n.heading_main_card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 0 1px 0 #e6baea !important;\n}\n\n.heading_card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1px 0 #e6baea !important;\n  h5 {\n    color: #8f008a !important;\n  }\n}\n\n.heading[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  font-size: 14px;\n  line-height: 18px;\n  color: #1b1919 !important;\n  font-weight: 500;\n}\n\n.t-name[_ngcontent-%COMP%] {\n  color: #777777;\n}\n.font-weight-bold-400[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.message-row[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  margin-right: 4px;\n  border-bottom-style:groove\n}\n.message-row-1[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Dashboard3Component, [{
        type: Component,
        args: [{ selector: 'app-dashboard', standalone: false, template: "<section class=\"row dashboard_section py-{{globalAnnouncementList.length != 0 ? '4' : '5'}} dashboard px-4\">\n\n    <div class=\"col-12 px-2\" *ngIf=\"globalAnnouncementList.length != 0\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"marquee\">\n                    <div class=\"marquee-item\">\n                        <span *ngFor=\"let announcement of globalAnnouncementList; let i = index; let last = last\">\n                            <span class=\"font-weight-bold\">{{ announcement.title + ' - ' }}</span>\n                            <span class=\"color-primary\">{{(announcement.description ?? '') }} {{globalAnnouncementList.length > 1 && !last ? ', ' : ''}}</span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-8\">\n        <div class=\"row\">\n            <div class=\"col-12 px-2 mt-1\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-header\" style=\"background-color: #1999e8; color: white;\">\n                        <div class=\"row\">\n                            <div class=\"col-6 d-flex align-items-center\">\n                                <app-feather-icons class=\"icon mt-1\" [icon]=\"'calendar'\"></app-feather-icons>\n                                <span class=\"title\">&nbsp; Today's Schedule</span>\n                            </div>\n                            <div class=\"col-6 text-right align-self-center\">\n                                <span (click)=\"routePage('schedule')\" class=\"text-right cursor\" style=\"font-size: 10px; color: white;\">\n                                    <a>View Details</a></span>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"card-body\">\n                        <div class=\"row d-flex justify-content-center align-items-center\" *ngIf=\"scheduleData.length == 0\">\n                            <div class=\"col-12 mt-4\">\n                                <button class=\"nodataList border-0\">No Classes Today!</button>\n                            </div>\n                        </div>\n                        <div class=\"row px-3 div-height\" *ngIf=\"scheduleData.length != 0\">\n                            <div (click)=\"enterList(item)\" class=\"col-12 cursor card dashboard-hover dashboard-card_even px-0\" *ngFor=\"let item of scheduleData; let j = index; let even = even\">\n                                <div class=\"card-body\">\n                                    <h5 style=\"font-size: 14px;line-height: 20px\" class=\"color-primary align-self-center mb-0\">{{item.class_name}}</h5>\n                                    <div class=\"row\" style=\"margin-top: 10px\">\n                                        <div class=\"col-9\">\n                                            <div class=\"row\">\n                                                <div class=\"col-4\">\n                                                    <b>Subject:</b>  <br>\n                                                    <span class=\"mb-0 fs-12 font-weight-bold-400\">{{item.subject_name}}</span>\n                                                </div>\n                                                <div class=\"col-4\">\n                                                    <b>Date:</b> <br>\n                                                    <span class=\"fs-12 font-weight-bold-400\">{{item.class_start_date | date : 'MM/dd/yyyy'}} - {{item.class_end_date | date : 'MM/dd/yyyy'}}</span>\n                                                </div>\n                                                <div class=\"col-4\">\n                                                    <b>Time:</b> <br>\n                                                    <span class=\"fs-12 font-weight-bold-400\">{{item.slotstarttime + ' - ' + item.slotendtime}}</span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-3 text-right align-self-center\">\n                                            <i (click)=\"openZoomDialog(item, $event)\" *ngIf=\"item.class_type == '1' && item.schedule_id != ''\"\n                                               class=\"fa fa-video-camera mr-1\" title=\"Enter Online Class\"></i>\n                                            <i *ngIf=\"item.class_details?.announcement_type != '1'\" (click)=\"redirectToAnnouncementOrInbox(item, 'announcement')\" class=\"fa fa-bullhorn color-primary mr-1\" title=\"New Announcement\">\n                                                <span *ngIf=\"item.announcement_count != 0\" class=\"upload-count\">{{item.announcement_count ?? '0'}}</span>\n                                            </i>\n                                            <i (click)=\"redirectToAnnouncementOrInbox(item, 'inbox')\" class=\"fa fa-commenting-o color-primary mr-1\" title=\"New Inbox Message\">\n                                                <span *ngIf=\"item.inbox_count != 0\" class=\"upload-count\">{{item.inbox_count ?? '0'}}</span>\n                                            </i>\n                                            <!-- <i (click)=\"showInformation(item, $event)\" class=\"fa fa-info mr-1\" title=\"Class Info\"></i> -->\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12 px-2 mt-1\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-header\" style=\"background-color: #1999e8; color: white;padding: 12px 10px\">\n                        <div class=\"row\">\n                            <div class=\"col-6 d-flex align-items-center\">\n                                <app-feather-icons class=\"d-flex\" [icon]=\"'book'\"></app-feather-icons>\n                                <span class=\"title\">&nbsp; My Classes</span>\n                            </div>\n                            <div class=\"col-6 align-self-center text-right\">\n                                <span (click)=\"routePage('class')\" class=\"text-right cursor\" style=\"font-size: 10px; color: white;\">\n                                <a>View All</a></span>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"card-body\">\n\n                        <div class=\"row px-3 mb-2 pb-1\">\n                            <button *ngFor=\"let data of buttonName\" (click)=\"updateClassData(data.id)\" [ngClass]=\"{'active': data.active}\"\n                                    class=\"dashboard-button {{data.className}}\">{{data.name}}<span class=\"badge {{data.badge_class}} ml-1\">{{data.count}}</span></button>\n                        </div>\n                        <div class=\"row d-flex justify-content-center align-items-center\" *ngIf=\"filteredClassData.length == 0\">\n                            <div class=\"col-12 mt-4\">\n                                <button class=\"nodataList border-0\">No {{selectedButtonForClass == '2' ? 'In-Progress' : selectedButtonForClass == '4' ? 'Upcoming' : 'Completed'}} Class Available!</button>\n                            </div>\n                        </div>\n                        <div class=\"row px-3 div-height2\" *ngIf=\"filteredClassData.length != 0\">\n                            <div (click)=\"classEnterList(item)\" [ngClass]=\"{'dashboard-card_inProgress' : selectedButtonForClass == '2', 'dashboard-card_upcoming' : selectedButtonForClass == '4', 'dashboard-card_completed' : selectedButtonForClass == '3'}\"\n                                 class=\"col-12 cursor card dashboard-hover px-0\" *ngFor=\"let item of filteredClassData; let j = index\">\n                                <div class=\"card-body\">\n                                    <h5 style=\"font-size: 14px;line-height: 20px\" class=\"color-primary align-self-center mb-0\">{{item.class_name}}</h5>\n                                    <h6 style=\"line-height: 18px\" class=\"mb-0 fs-12 pr-0\">{{item.subject_name}}</h6>\n                                    <div class=\"row\">\n                                        <h6 class=\"mb-0 col-12 text-right align-self-center\">\n                                            <span [title]=\"returnDayTitle(item, day.id, day.value)\" [ngClass]=\"{'scheduledDate': checkAvailabilityDate(item, day.id)}\"\n                                                  style=\"color: #817d7d; padding: 6px 5px; margin-left: 4px; margin-right: 4px\"\n                                                  class=\"circle_design fs-10\" *ngFor=\"let day of days;\">{{day.day}}</span>\n                                        </h6>\n                                    </div>\n                                    <i *ngIf=\"item.class_details?.announcement_type != '1'\" (click)=\"redirectToAnnouncementOrInbox(item, 'announcement')\" class=\"fa fa-bullhorn color-primary mr-1\" title=\"New Announcement\">\n                                        <span *ngIf=\"item.announcement_count != 0\" class=\"upload-count\">{{item.announcement_count ?? '0'}}</span>\n                                    </i>\n                                    <i (click)=\"redirectToAnnouncementOrInbox(item, 'inbox')\" class=\"fa fa-commenting-o color-primary mr-1\" title=\"New Inbox Message\">\n                                        <span *ngIf=\"item.inbox_count != 0\" class=\"upload-count\">{{item.inbox_count ?? '0'}}</span>\n                                    </i>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-12 px-2 mt-1\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-header\" style=\"background-color: #1999e8; color: white;\">\n                        <div class=\"d-flex align-items-center\">\n                          <app-feather-icons class=\"icon\" [icon]=\"'award'\"></app-feather-icons>\n                          <span class=\"title\">&nbsp; Recent Scores</span>\n                        </div>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"row px-3 align-items-center justify-content-between pb-3\">\n                            <span class=\"d-flex align-items-center\" style=\"font-size: 10px\">\n                                <i style=\"color: #00a8ff !important;font-size: 14px !important;\" class=\"fa fa-square\"></i>- Assignment\n                                <i style=\"color: #81ba00 !important;font-size: 14px !important;\" class=\"fa fa-square\"></i>- Assessment\n                            </span>\n                        </div>\n<!--                         <div class=\"row d-flex justify-content-center align-items-center\" *ngIf=\"recentScore.length == 0\">\n                            <div class=\"col-12\">\n                                <button class=\"nodataList border-0\">No Recent Score released!</button>\n                            </div>\n                        </div> -->\n                        <div class=\"row px-3 div-height\" *ngIf=\"recentScore.length != 0\">\n                            <div (click)=\"answerPage(item)\" [ngClass]=\"{'dashboard-card_upcoming' : item.content_type == '2', 'dashboard-card_completed' : item.content_type == '3'}\"\n                                 class=\"col-12 card px-0 dashboard-hover\" *ngFor=\"let item of recentScore; let j = index\">\n                                <div class=\"card-body\">\n                                    <div class=\"col-12 px-0 {{item.allow_answer_key == '1' && item.student_content_status == '3' && item.downloadPDF?.length != 0 ? 'd-flex justify-content-between' : ''}}\">\n                                        <h5 style=\"font-size: 14px;line-height: 20px\" class=\"color-primary align-self-center mb-0\">{{item.content_name}}</h5>\n                                        <i *ngIf=\"item.allow_answer_key == '1' && item.student_content_status == '3' && item.downloadPDF?.length != 0\"\n                                           class=\"fa fa-key mr-1 cursor\" aria-hidden=\"true\" title=\"Answer Key & Explanation\" (click)=\"viewAnswerKeyPdf($event, item)\"></i>\n                                    </div>\n                                    <h6 style=\"line-height: 18px\" class=\"fs-12 mb-0\">{{item.class_name}}</h6>\n                                    <div class=\"d-flex align-items-center justify-content-end\">\n                                        <span style=\"background-color: #5FAE99\" class=\"badge badge-warning\">\n                                            {{item.obtained_score}} / {{item.total_score}}</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-4\">\n        <div class=\"row\">\n            <div class=\"col-12 px-2\">\n                <div class=\"card\" style=\"border-radius: 16px; background: #f7f6f8\">\n                    <div class=\"card-header\" style=\"background-color: #1999e8; color: white;\">\n                        <div class=\"d-flex align-items-center\">\n                          <app-feather-icons class=\"icon\" [icon]=\"'activity'\"></app-feather-icons>\n                          <span class=\"title\">&nbsp; Upcoming Tasks</span>\n                        </div>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"row message-row-1\" *ngIf=\"upcomingTask.length != 0\">\n                            <div (click)=\"answerPage(item)\"\n                                 class=\"col-12 cursor heading_main_card px-0\" *ngFor=\"let item of upcomingTask; let j = index; let last = last\">\n                                 <div class=\"card-body heading_card px-0\">\n                                    <div class=\"row message-row\">\n                                        <div class=\"col-7 align-self-center px-0\">\n                                            <h5 class=\"mb-0 heading line-wrap\">{{item.content_name}}</h5>\n                                        </div>\n                                        <div class=\"col-5 align-self-center pl-1 pr-0\">\n                                            <h5 class=\"mb-0 d-flex align-items-center justify-content-end\">\n                                                <span *ngIf=\"item.end_date != '0000-00-00'\" style=\"color: #777777 !important;\" class=\"fs-10 mb-0\">Due:\n                                                    <span style=\"color: #81ba00\" class=\"font-weight-bold\">\n                                                        {{item.end_date | date : 'MM/dd/yyyy'}}</span>\n                                                    </span>\n                                                <span *ngIf=\"item.content_type == '1'\" style=\"color: white !important;\" class=\"ml-1 badge fs-10 badge-warning\">Resource</span>\n                                                <span *ngIf=\"item.content_type == '2'\" style=\"color: white !important;\" class=\"ml-1 badge badge-info fs-10\">Assignment</span>\n                                                <span *ngIf=\"item.content_type == '3'\" style=\"color: white !important;\" class=\"ml-1 badge fs-10 badge-success\">Assessment</span>\n                                            </h5>\n                                        </div>\n                                    </div>\n                                 </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-12 mt-1 px-2\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-header\" style=\"background-color: #1999e8; color : white;\">\n                        <div class=\"d-flex align-items-center\">\n                          <app-feather-icons class=\"icon\" [icon]=\"'bell'\"></app-feather-icons>\n                          <span class=\"title\">&nbsp; Announcements / Messages</span>\n                        </div>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"row message-row-1\">\n                            <div (click)=\"redirectToAnnouncementOrInbox(item)\"\n                                 class=\"col-12 cursor heading_main_card px-0\" *ngFor=\"let item of recentUpdate; let j = index\">\n                                <div class=\"card-body heading_card px-2\">\n                                    <div class=\"row message-row\">\n                                       <div class=\"col-8 px-2 align-self-center\">\n                                           <p *ngIf=\"item.message_type == 'inbox'\" class=\"m-0\">\n                                               <span *ngIf=\"item.message.convertedFullText != ''\" [title]=\"item.message.convertedFullText\">\n                                                <h5 class=\"mb-0 heading\">{{item.message.convertedText ?? ''}}</h5></span>\n                                               <span class=\"color-primary\" *ngIf=\"item.message.convertedFullText == ''\" [title]=\"'Attachment added to the chat'\">\n                                                   Attachment added here<i style=\"font-size: 12px; color: black !important;\" class=\"fa fa-file color-primary\"></i> </span>\n                                           </p>\n                                           <p class=\"m-0\" *ngIf=\"item.message_type != 'inbox'\">\n                                               <span [title]=\"item.message.convertedFullText\"><h5 class=\"mb-0 heading\">{{item.message.convertedText ?? ''}}</h5></span>\n                                           </p>\n                                       </div>\n                                        <div class=\"col-4 px-2 text-right\">\n                                            <span *ngIf=\"item.message_type == 'inbox'\" style=\"background: #8f008a\" class=\"ml-1 badge fs-10\">Message</span>\n                                            <span *ngIf=\"item.message_type != 'inbox'\" style=\"background: #8d6eeb\" class=\"badge fs-10\">Announcement</span>\n                                        </div>\n                                   </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-12 mt-1 px-2\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-header\" style=\"background-color: #1999e8; color: white;\">\n                        <div class=\"d-flex align-items-center\">\n                          <app-feather-icons class=\"icon\" [icon]=\"'alert-circle'\"></app-feather-icons>\n                          <span class=\"title\">&nbsp; Past Due</span>\n                        </div>\n                    </div>\n                    <div class=\"card-body\">\n\n                        <div class=\"row message-row-1\" *ngIf=\"overdueTask.length != 0\">\n                            <div (click)=\"answerPage(item)\" class=\"col-12 cursor heading_main_card px-0\" *ngFor=\"let item of overdueTask; let j = index\">\n                                <div class=\"card-body heading_card px-0\">\n                                    <div class=\"row message-row\">\n                                        <div class=\"col-7 align-self-center px-0\">\n                                            <span><h5 class=\"mb-0 heading line-wrap\">{{item.content_name}}</h5></span>\n                                        </div>\n                                        <div class=\"col-5 pr-0\">\n                                            <h5 class=\"mb-0 d-flex align-items-center justify-content-end\">\n                                                <span *ngIf=\"item.end_date != '0000-00-00'\" style=\"color: #777777 !important;\" class=\"fs-10 mb-0\">Due:\n                                                    <span style=\"color: #FF0000\" class=\"font-weight-bold\">\n                                                        {{item.end_date | date : 'MM/dd/yyyy'}}</span>\n                                                    </span>\n                                                <span *ngIf=\"item.content_type == '1'\" style=\"color: white !important;\" class=\"ml-1 badge fs-10 badge-warning\">Resource</span>\n                                                <span *ngIf=\"item.content_type == '2'\" style=\"color: white !important;\" class=\"ml-1 badge badge-info fs-10\">Assignment</span>\n                                                <span *ngIf=\"item.content_type == '3'\" style=\"color: white !important;\" class=\"ml-1 badge fs-10 badge-success\">Assessment</span>\n                                            </h5>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</section>\n\n<ng-template #throwError>\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title letter\">{{ErrorTitle}}</h4>\n        <i style=\"color:#000 !important;\" class=\"fa fa-close cursor\" (click)=\"onSave()\" ></i>\n    </div>\n    <div class=\"modal-body\">\n        <p class=\"mb-0\"><b>{{message}}</b></p>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn cancel pull-right\" (click)=\"onSave()\">ok</button>\n    </div>\n</ng-template>\n\n<ng-template #showInform>\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title\">Info</h4>\n        <i style=\"font-size: 16px; color: black !important;\" class=\"fa fa-close cursor\" (click)=\"modalRef.close()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <p class=\"p-0\" *ngIf=\"classInfo?.class_start_date != ''\"><small class=\"letter\">Start Date: </small> <span class=\"t-name font-weight-bold\">{{classInfo.class_start_date}}</span></p>\n        <p class=\"p-0\" *ngIf=\"classInfo?.class_end_date != ''\"><small class=\"letter\">End Date: </small> <span class=\"t-name font-weight-bold\">{{classInfo.class_end_date}}</span></p>\n        <p class=\"p-0\" *ngIf=\"classInfo?.subject_name != ''\"><small class=\"letter\">Subject: </small> <span class=\"t-name font-weight-bold\">{{classInfo.subject_name}}</span></p>\n        <p class=\"p-0\" *ngIf=\"classInfo?.grade_name != ''\"><small class=\"letter\">Grade: </small> <span class=\"t-name capital font-weight-bold\">{{classInfo.grade_name}}</span></p>\n    </div>\n\n</ng-template>\n\n<ng-template #zoomDialog>\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title text-center\">Zoom Meet</h4>\n        <i (click)=\"modalRef.close()\" class=\"fa fa-close cursor\" ></i>\n    </div>\n    <div class=\"modal-body d-flex justify-content-right\">\n        <div class=\"col-12 text-center\">\n            <h5>Open zoom in </h5>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button  (click)=\"modalRef.close();zoomService.initZoomMeeting(selectedClass)\" class=\"btn btn-primary\">In App</button>\n        <button (click)=\"navigateOutsideZoom(this.selectedClass.availabilityDate[0])\" class=\"btn btn-outline-primary\" type=\"button\">New Tab</button>\n    </div>\n</ng-template>\n\n<ng-template #zoomDialog1>\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title text-center\">Zoom Meet</h4>\n        <i (click)=\"modalRef.close()\" class=\"fa fa-close cursor\"></i>\n    </div>\n    <div class=\"modal-body d-flex justify-content-right\">\n        <div class=\"col-12 text-center\">\n            <h5>No Zoom Meet Scheduled for this day</h5>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"modalRef.close()\" class=\"btn btn-primary\">OK</button>\n    </div>\n</ng-template>\n\n<ng-template #submitPopUp>\n    <div class=\"modal-header\">\n        <h5 class=\"contenttext text-center mb-0\">Duration Completed</h5>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5 class=\"mb-0\">\n                    <span>Test time is now complete. All your answers will be saved and submitted\u00A0automatically</span></h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"submitAnswer(contentData)\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #submitTestPopUp let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h5 class=\"contenttext text-center mb-0\">Duration Completed</h5>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5 class=\"mb-0\">\n                    <span>Test time is now complete for {{testContentData?.module_name}}. All your answers will be saved\n                        <span *ngIf=\"!testContentData?.lastQuestions\"> , submitted\u00A0 and moved to next content automatically.</span>\n                        <span *ngIf=\"testContentData?.lastQuestions\"> and submitted\u00A0automatically.</span>\n                    </span>\n                </h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"submitAnswer(testContentData, 'test')\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #startTimerDuration let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h5 class=\"contenttext text-center mb-0\">Start Timer Duration</h5>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5 class=\"mb-0\">\n                    Click 'Ok' to start the assessment. Do not close the window once the assessment\u00A0is\u00A0started.\n                </h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn cancel mr-1\" (click)=\"onSave()\">Cancel</button>\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"updateContentStatus(contentDetails)\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #feedbackStatus>\n    <div class=\"modal-body\">\n        <div class=\"col-12 px-0 my-3 d-flex flex-row align-items-center\">\n            <div class=\"feedback_spinner\"></div>\n            <span class=\"ml-3\" style=\"font-size: 16px\">{{popUpMessage}}</span>\n        </div>\n    </div>\n</ng-template>\n", styles: ["section {\n  height: max-content !important;\n  background-repeat: round;\n  padding: 18px;\n  object-fit: contain;\n}\n\n.dashboard-announcement-card {\n  border-left: 10px solid #8d6eeb !important;\n}\n\n.dashboard-hover:hover {\n  display: absolute;\n  transform: scale(1.0222);\n  z-index: 999;\n  box-shadow: 2px 2px 2px #e8eaed;\n}\n\n.dashboard-hover_small:hover {\n  display: absolute;\n  transform: scale(1.045);\n  z-index: 999;\n  box-shadow: 2px 2px 2px #e8eaed;\n}\n\nsvg {\n  width: 14px !important;\n  height: 14px !important;\n}\n\n.dashboard-button {\n  padding: 8px 10px !important;\n  font-size: 12px;\n  color: #8F008A;\n  border: 1px solid #8F008A;\n  border-radius: 24px;\n  background: #FFFFFF;\n}\n\n.completed_button {\n  color: #81ba00 !important;\n  border: 1px solid #81ba00 !important;\n}\n\n.completed_button:hover, .completed_button.active {\n  background: #81ba00;\n  color: #FFFFFF !important;\n\n  .badge-success {\n    background-color: #FFFFFF !important;\n    color: #81ba00 !important;\n  }\n}\n\n.upcoming_button {\n  color: #00A8FF !important;\n  border: 1px solid #00A8FF !important;\n}\n\n.upcoming_button:hover, .upcoming_button.active {\n  background: #00A8FF;\n  color: #FFFFFF !important;\n\n  .badge-info {\n    background-color: #FFFFFF !important;\n    color: #00A8FF !important;\n  }\n}\n\n.inProgress_button {\n  color: #ffc107 !important;\n  border: 1px solid #ffc107 !important;\n}\n\n.inProgress_button:hover, .inProgress_button.active {\n  background: #ffc107;\n  color: #FFFFFF !important;\n\n  .badge-warning {\n    background-color: #FFFFFF !important;\n    color: #ffc107 !important;\n  }\n}\n\nbutton:focus {\n  outline: none !important;\n}\n\n.dashboard.masonry-layout {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n  align-items: start;\n}\n\n.circle_design {\n  background: #f1f1f4;\n  border-radius: 50%;\n  padding: 4px 6px;\n}\n\n.msg-img {\n  width: 50px;\n  height: 50px;\n  box-shadow: 0 0 15px #1e1e2017;\n  border-radius: 50%;\n  cursor: default;\n}\n\n.scheduledDate {\n  background: #5FAE99;\n  color: #FFFFFF !important;\n  font-weight: 700;\n}\n\ni {\n  font-size: 18px;\n  margin-left: 6px;\n  margin-right: 6px !important;\n  border-radius: 50%;\n  color: #5FAE99 !important;\n}\n\n.dashboard-card_inProgress {\n  border-left: 10px solid #F8C269 !important;\n}\n\n.dashboard-card_upcoming {\n  border-left: 10px solid #00A8FF !important;\n}\n\n.dashboard-card_completed {\n  border-left: 10px solid #81ba00 !important;\n}\n\n.dashboard-card_odd {\n  border-left: 10px solid #e6baea !important;\n}\n\n.dashboard-card_even {\n  border-left: 10px solid #864BA7 !important;\n}\n\n.upload-count {\n  padding: 4px 6px;\n  margin-left: -8px;\n  font-size: 10px;\n  color: #fff;\n  font-weight: 400;\n  border-radius: 50%;\n  position: relative;\n  top: -12px !important;\n  background: #5FAE99;\n}\n\n.div-height {\n  max-height: 20rem;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n\n.div-height:hover {\n  overflow-y: auto !important;\n  overflow-x: hidden;\n}\n\n.div-height1 {\n  max-height: 25rem;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n\n.div-height1:hover {\n  overflow-y: auto !important;\n  overflow-x: hidden;\n}\n\ndiv-height2 {\n  max-height: 30rem;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n\n.div-height2:hover {\n  overflow-y: auto !important;\n  overflow-x: hidden;\n}\n\n.marquee {\n  white-space: nowrap;\n  overflow: hidden;\n  display: flex;\n}\n\n.marquee-item {\n  flex: none;\n  padding-left: 100%;\n  animation: animate 25s linear infinite;\n}\n\n//.marquee div {\n//  padding-left: 100%;\n//  display: inline-block;\n//  animation: animate 20s linear infinite;\n//}\n\n.marquee:hover div{\n  animation-play-state: paused;\n}\n\n@keyframes animate {\n  100% {\n    transform: translate(-100%, 0);\n  }\n}\n\n.recent_inProgress {\n  border-left: 10px solid #F8C269;\n}\n\n.recent_not_started {\n  border-left: 10px solid #13c9ca;\n}\n\n.heading_card {\n  //box-shadow: 0 1px 0 #e8eaed !important;\n  padding: 5px;\n}\n\n.heading_main_card {\n  margin-bottom: 15px;\n  border-radius: 5px;\n  background-color: #f9f9f9;\n  transition: transform 0.2s;\n}\n\n.heading_main_card:hover {\n  cursor: pointer;\n  box-shadow: 0 1px 0 #e6baea !important;\n}\n\n.heading_card:hover {\n  box-shadow: 0 1px 0 #e6baea !important;\n  h5 {\n    color: #8f008a !important;\n  }\n}\n\n.heading {\n  position: relative;\n  display: inline-block;\n  font-size: 14px;\n  line-height: 18px;\n  color: #1b1919 !important;\n  font-weight: 500;\n}\n\n.t-name {\n  color: #777777;\n}\n.font-weight-bold-400 {\n  font-weight: 400;\n}\n.message-row {\n  margin-left: 4px;\n  margin-right: 4px;\n  border-bottom-style:groove\n}\n.message-row-1 {\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n"] }]
    }], () => [{ type: i1.DatePipe }, { type: i2.NgbModal }, { type: i3.DomSanitizer }, { type: i4.EnvironmentService }], { throwError: [{
            type: ViewChild,
            args: ['throwError']
        }], showInform: [{
            type: ViewChild,
            args: ['showInform']
        }], zoomDialog: [{
            type: ViewChild,
            args: ['zoomDialog']
        }], zoomDialog1: [{
            type: ViewChild,
            args: ['zoomDialog1']
        }], submitPopUp: [{
            type: ViewChild,
            args: ['submitPopUp']
        }], submitTestPopUp: [{
            type: ViewChild,
            args: ['submitTestPopUp']
        }], startTimerDuration: [{
            type: ViewChild,
            args: ['startTimerDuration']
        }], feedbackStatus: [{
            type: ViewChild,
            args: ['feedbackStatus']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Dashboard3Component, { className: "Dashboard3Component" }); })();
//# sourceMappingURL=dashboard3.component.js.map