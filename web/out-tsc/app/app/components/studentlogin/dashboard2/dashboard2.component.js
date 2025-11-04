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
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../../../shared/components/feather-icons/feather-icons.component";
const _c0 = ["throwError"];
const _c1 = ["showInform"];
const _c2 = ["zoomDialog"];
const _c3 = ["zoomDialog1"];
const _c4 = a0 => ({ "active": a0 });
const _c5 = (a0, a1, a2) => ({ "dashboard-card_inProgress": a0, "dashboard-card_upcoming": a1, "dashboard-card_completed": a2 });
const _c6 = a0 => ({ "scheduledDate": a0 });
const _c7 = (a0, a1) => ({ "dashboard-card_upcoming": a0, "dashboard-card_completed": a1 });
const _c8 = (a0, a1, a2) => ({ "recent_inProgress": a0, "recent_not_started": a1, "dashboard-card_odd": a2 });
const _c9 = a0 => ({ "visibility": a0 });
const _c10 = (a0, a1) => ({ "dashboard-card_odd": a0, "dashboard-announcement-card ": a1 });
function Dashboard2Component_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "span", 38);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 39);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_10_0;
    const announcement_r2 = ctx.$implicit;
    const last_r3 = ctx.last;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(announcement_r2.title + " - ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", (tmp_10_0 = announcement_r2.description) !== null && tmp_10_0 !== undefined ? tmp_10_0 : "", " ", ctx_r3.globalAnnouncementList.length > 1 && !last_r3 ? ", " : "", "");
} }
function Dashboard2Component_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 33)(2, "div", 34)(3, "div", 35)(4, "div", 36);
    i0.ɵɵtemplate(5, Dashboard2Component_div_1_span_5_Template, 5, 3, "span", 37);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r3.globalAnnouncementList);
} }
function Dashboard2Component_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40)(1, "div", 41)(2, "button", 42);
    i0.ɵɵtext(3, "No Schedule Available!");
    i0.ɵɵelementEnd()()();
} }
function Dashboard2Component_div_16_div_1_i_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 54);
    i0.ɵɵlistener("click", function Dashboard2Component_div_16_div_1_i_8_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r7); const item_r6 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.openZoomDialog(item_r6, $event)); });
    i0.ɵɵelementEnd();
} }
function Dashboard2Component_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵlistener("click", function Dashboard2Component_div_16_div_1_Template_div_click_0_listener() { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.enterList(item_r6)); });
    i0.ɵɵelementStart(1, "div", 34)(2, "h5", 45);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 46)(5, "h6", 47);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 48);
    i0.ɵɵtemplate(8, Dashboard2Component_div_16_div_1_i_8_Template, 1, 0, "i", 49);
    i0.ɵɵelementStart(9, "i", 50);
    i0.ɵɵlistener("click", function Dashboard2Component_div_16_div_1_Template_i_click_9_listener() { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.redirectToAnnouncementOrInbox(item_r6, "announcement")); });
    i0.ɵɵelementStart(10, "span", 51);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "i", 52);
    i0.ɵɵlistener("click", function Dashboard2Component_div_16_div_1_Template_i_click_12_listener() { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.redirectToAnnouncementOrInbox(item_r6, "inbox")); });
    i0.ɵɵelementStart(13, "span", 51);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "i", 53);
    i0.ɵɵlistener("click", function Dashboard2Component_div_16_div_1_Template_i_click_15_listener($event) { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.showInformation(item_r6, $event)); });
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    let tmp_12_0;
    let tmp_13_0;
    const item_r6 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r6.class_name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r6.slotstarttime + " - " + item_r6.slotendtime);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r6.class_type == "1" && item_r6.schedule_id != "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((tmp_12_0 = item_r6.announcement_count) !== null && tmp_12_0 !== undefined ? tmp_12_0 : "0");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((tmp_13_0 = item_r6.inbox_count) !== null && tmp_13_0 !== undefined ? tmp_13_0 : "0");
} }
function Dashboard2Component_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtemplate(1, Dashboard2Component_div_16_div_1_Template, 16, 5, "div", 43);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.scheduleData);
} }
function Dashboard2Component_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 55);
    i0.ɵɵlistener("click", function Dashboard2Component_button_30_Template_button_click_0_listener() { const data_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.updateClassData(data_r9.id)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r9 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("dashboard-button ", data_r9.className, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c4, data_r9.active));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(data_r9.name);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("badge ", data_r9.badge_class, " ml-1");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(data_r9.count);
} }
function Dashboard2Component_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40)(1, "div", 41)(2, "button", 42);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("No ", ctx_r3.selectedButtonForClass == "2" ? "In-Progress" : ctx_r3.selectedButtonForClass == "4" ? "Upcoming" : "Completed", " Class Available!");
} }
function Dashboard2Component_div_32_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 62);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r12 = ctx.$implicit;
    const item_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", ctx_r3.returnDayTitle(item_r11, day_r12.id, day_r12.value))("ngClass", i0.ɵɵpureFunction1(3, _c6, ctx_r3.checkAvailabilityDate(item_r11, day_r12.id)));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(day_r12.day);
} }
function Dashboard2Component_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 58);
    i0.ɵɵlistener("click", function Dashboard2Component_div_32_div_1_Template_div_click_0_listener() { const item_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.classEnterList(item_r11)); });
    i0.ɵɵelementStart(1, "div", 34)(2, "h5", 45);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h6", 59);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 6)(7, "h6", 60);
    i0.ɵɵtemplate(8, Dashboard2Component_div_32_div_1_span_8_Template, 2, 5, "span", 61);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(4, _c5, ctx_r3.selectedButtonForClass == "2", ctx_r3.selectedButtonForClass == "4", ctx_r3.selectedButtonForClass == "3"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r11.class_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r11.subject_name);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r3.days);
} }
function Dashboard2Component_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵtemplate(1, Dashboard2Component_div_32_div_1_Template, 9, 8, "div", 57);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.filteredClassData);
} }
function Dashboard2Component_div_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40)(1, "div", 63)(2, "button", 42);
    i0.ɵɵtext(3, "No Recent Score released!");
    i0.ɵɵelementEnd()()();
} }
function Dashboard2Component_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 65);
    i0.ɵɵlistener("click", function Dashboard2Component_div_46_div_1_Template_div_click_0_listener() { const item_r14 = i0.ɵɵrestoreView(_r13).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.answerPage(item_r14)); });
    i0.ɵɵelementStart(1, "div", 34)(2, "h5", 45);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h6", 66);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 67)(7, "span", 68);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(5, _c7, item_r14.content_type == "2", item_r14.content_type == "3"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r14.content_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r14.class_name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", item_r14.obtained_score, " / ", item_r14.total_score, "");
} }
function Dashboard2Component_div_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtemplate(1, Dashboard2Component_div_46_div_1_Template, 9, 8, "div", 64);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.recentScore);
} }
function Dashboard2Component_div_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40)(1, "div", 63)(2, "button", 42);
    i0.ɵɵtext(3, "No Recent Task Available!");
    i0.ɵɵelementEnd()()();
} }
function Dashboard2Component_div_63_div_1_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 78);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind2(2, 2, item_r16.end_date, "MM/dd/yyyy"), ", ", item_r16.end_time, "");
} }
function Dashboard2Component_div_63_div_1_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 79);
    i0.ɵɵtext(1, "Resource");
    i0.ɵɵelementEnd();
} }
function Dashboard2Component_div_63_div_1_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 80);
    i0.ɵɵtext(1, "Assignment");
    i0.ɵɵelementEnd();
} }
function Dashboard2Component_div_63_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 81);
    i0.ɵɵtext(1, "Assessment");
    i0.ɵɵelementEnd();
} }
function Dashboard2Component_div_63_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵlistener("click", function Dashboard2Component_div_63_div_1_Template_div_click_0_listener() { const item_r16 = i0.ɵɵrestoreView(_r15).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.answerPage(item_r16)); });
    i0.ɵɵelementStart(1, "div", 34)(2, "h5", 70);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h6", 71);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 72)(7, "h6", 73);
    i0.ɵɵtext(8, "Due Date: ");
    i0.ɵɵtemplate(9, Dashboard2Component_div_63_div_1_span_9_Template, 3, 5, "span", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, Dashboard2Component_div_63_div_1_span_10_Template, 2, 0, "span", 75)(11, Dashboard2Component_div_63_div_1_span_11_Template, 2, 0, "span", 76)(12, Dashboard2Component_div_63_div_1_span_12_Template, 2, 0, "span", 77);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(8, _c8, item_r16.student_content_status == "2", item_r16.student_content_status == "1", item_r16.content_type == 1));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r16.content_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r16.class_name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(12, _c9, item_r16.end_date != "0000-00-00" ? "none" : "hidden"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r16.end_date != "0000-00-00");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r16.content_type == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r16.content_type == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r16.content_type == "3");
} }
function Dashboard2Component_div_63_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtemplate(1, Dashboard2Component_div_63_div_1_Template, 13, 14, "div", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.recentTask);
} }
function Dashboard2Component_div_77_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40)(1, "div", 63)(2, "button", 42);
    i0.ɵɵtext(3, "No Recent Updates!");
    i0.ɵɵelementEnd()()();
} }
function Dashboard2Component_div_79_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 90);
} }
function Dashboard2Component_div_79_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 91);
} if (rf & 2) {
    i0.ɵɵproperty("src", "assets/images/dashboard/default.png", i0.ɵɵsanitizeUrl);
} }
function Dashboard2Component_div_79_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 92);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r18.message.body);
} }
function Dashboard2Component_div_79_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 93);
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", item_r18.message.note, i0.ɵɵsanitizeHtml);
} }
function Dashboard2Component_div_79_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, item_r18.message.created_date, "MM/dd/yyyy, h:mm a"));
} }
function Dashboard2Component_div_79_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Dec 23, 2024 | 12:00 AM");
    i0.ɵɵelementEnd();
} }
function Dashboard2Component_div_79_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵlistener("click", function Dashboard2Component_div_79_Template_div_click_0_listener() { const item_r18 = i0.ɵɵrestoreView(_r17).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.redirectToAnnouncementOrInbox(item_r18)); });
    i0.ɵɵelementStart(1, "div", 34)(2, "div", 6)(3, "div", 82);
    i0.ɵɵtemplate(4, Dashboard2Component_div_79_i_4_Template, 1, 0, "i", 83)(5, Dashboard2Component_div_79_img_5_Template, 1, 1, "img", 84);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 85);
    i0.ɵɵtemplate(7, Dashboard2Component_div_79_p_7_Template, 2, 1, "p", 86)(8, Dashboard2Component_div_79_p_8_Template, 1, 1, "p", 87);
    i0.ɵɵelementStart(9, "small", 88)(10, "span");
    i0.ɵɵtext(11, "Sridhar");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, Dashboard2Component_div_79_span_12_Template, 3, 4, "span", 89)(13, Dashboard2Component_div_79_span_13_Template, 2, 0, "span", 89);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(7, _c10, item_r18.message_type == "inbox", item_r18.message_type != "inbox"));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", item_r18.message_type != "inbox");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.message_type == "inbox");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r18.message_type == "inbox");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.message_type != "inbox");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", item_r18.message_type == "inbox");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r18.message_type != "inbox");
} }
function Dashboard2Component_div_88_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40)(1, "div", 63)(2, "button", 42);
    i0.ɵɵtext(3, "No Overdue Task!");
    i0.ɵɵelementEnd()()();
} }
function Dashboard2Component_div_89_div_1_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 97);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind2(2, 2, item_r20.end_date, "MM/dd/yyyy"), ", ", item_r20.end_time, "");
} }
function Dashboard2Component_div_89_div_1_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 79);
    i0.ɵɵtext(1, "Resource");
    i0.ɵɵelementEnd();
} }
function Dashboard2Component_div_89_div_1_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 80);
    i0.ɵɵtext(1, "Assignment");
    i0.ɵɵelementEnd();
} }
function Dashboard2Component_div_89_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 81);
    i0.ɵɵtext(1, "Assessment");
    i0.ɵɵelementEnd();
} }
function Dashboard2Component_div_89_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 95);
    i0.ɵɵlistener("click", function Dashboard2Component_div_89_div_1_Template_div_click_0_listener() { const item_r20 = i0.ɵɵrestoreView(_r19).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.answerPage(item_r20)); });
    i0.ɵɵelementStart(1, "div", 34)(2, "h5", 45);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h6", 71);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 72)(7, "h6", 73);
    i0.ɵɵtext(8, "Due Date: ");
    i0.ɵɵtemplate(9, Dashboard2Component_div_89_div_1_span_9_Template, 3, 5, "span", 96);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, Dashboard2Component_div_89_div_1_span_10_Template, 2, 0, "span", 75)(11, Dashboard2Component_div_89_div_1_span_11_Template, 2, 0, "span", 76)(12, Dashboard2Component_div_89_div_1_span_12_Template, 2, 0, "span", 77);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r20.content_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r20.class_name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(7, _c9, item_r20.end_date != "0000-00-00" ? "none" : "hidden"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r20.end_date != "0000-00-00");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r20.content_type == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r20.content_type == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r20.content_type == "3");
} }
function Dashboard2Component_div_89_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtemplate(1, Dashboard2Component_div_89_div_1_Template, 13, 9, "div", 94);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.overdueTask);
} }
function Dashboard2Component_ng_template_90_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 98)(1, "h4", 99);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 100);
    i0.ɵɵlistener("click", function Dashboard2Component_ng_template_90_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r21); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 101)(5, "p", 102)(6, "b");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 103)(9, "button", 104);
    i0.ɵɵlistener("click", function Dashboard2Component_ng_template_90_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r21); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onSave()); });
    i0.ɵɵtext(10, "ok");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.ErrorTitle);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r3.message);
} }
function Dashboard2Component_ng_template_92_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 108)(1, "small", 109);
    i0.ɵɵtext(2, "Start Date: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 110);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.classInfo.class_start_date);
} }
function Dashboard2Component_ng_template_92_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 108)(1, "small", 109);
    i0.ɵɵtext(2, "End Date: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 110);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.classInfo.class_end_date);
} }
function Dashboard2Component_ng_template_92_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 108)(1, "small", 109);
    i0.ɵɵtext(2, "Subject: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 110);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.classInfo.subject_name);
} }
function Dashboard2Component_ng_template_92_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 108)(1, "small", 109);
    i0.ɵɵtext(2, "Grade: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 111);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.classInfo.grade_name);
} }
function Dashboard2Component_ng_template_92_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 98)(1, "h4", 105);
    i0.ɵɵtext(2, "Info");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 106);
    i0.ɵɵlistener("click", function Dashboard2Component_ng_template_92_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r22); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 101);
    i0.ɵɵtemplate(5, Dashboard2Component_ng_template_92_p_5_Template, 5, 1, "p", 107)(6, Dashboard2Component_ng_template_92_p_6_Template, 5, 1, "p", 107)(7, Dashboard2Component_ng_template_92_p_7_Template, 5, 1, "p", 107)(8, Dashboard2Component_ng_template_92_p_8_Template, 5, 1, "p", 107);
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
function Dashboard2Component_ng_template_94_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 112)(1, "h4", 113);
    i0.ɵɵtext(2, "Zoom Meet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 114);
    i0.ɵɵlistener("click", function Dashboard2Component_ng_template_94_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r23); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 115)(5, "div", 116)(6, "h5");
    i0.ɵɵtext(7, "Open zoom in ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 103)(9, "button", 117);
    i0.ɵɵlistener("click", function Dashboard2Component_ng_template_94_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r23); const ctx_r3 = i0.ɵɵnextContext(); ctx_r3.modalRef.close(); return i0.ɵɵresetView(ctx_r3.zoomService.initZoomMeeting(ctx_r3.selectedClass)); });
    i0.ɵɵtext(10, "In App");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 118);
    i0.ɵɵlistener("click", function Dashboard2Component_ng_template_94_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r23); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.navigateOutsideZoom(ctx_r3.selectedClass.availabilityDate[0])); });
    i0.ɵɵtext(12, "New Tab");
    i0.ɵɵelementEnd()();
} }
function Dashboard2Component_ng_template_96_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 112)(1, "h4", 113);
    i0.ɵɵtext(2, "Zoom Meet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 114);
    i0.ɵɵlistener("click", function Dashboard2Component_ng_template_96_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r24); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 115)(5, "div", 116)(6, "h5");
    i0.ɵɵtext(7, "No Zoom Meet Scheduled for this day");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 103)(9, "button", 117);
    i0.ɵɵlistener("click", function Dashboard2Component_ng_template_96_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r24); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.modalRef.close()); });
    i0.ɵɵtext(10, "OK");
    i0.ɵɵelementEnd()();
} }
export class Dashboard2Component {
    constructor(datePipe, modalService) {
        this.datePipe = datePipe;
        this.modalService = modalService;
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
        this.recentTask = [];
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
        this.student = inject(StudentService);
        this.subscriptions = [];
        this.ErrorTitle = '';
        this.message = '';
        this.customLoader = false;
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
    }
    commonService() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
        this.scheduleData = [];
        this.recentUpdate = [];
        this.filteredClassData = [];
        this.recentScore = [];
        this.recentTask = [];
        this.overdueTask = [];
        this.buttonName.forEach(button => button.count = '0');
        this.globalAnnouncement();
        this.serviceList();
    }
    ngOnDestroy() {
        this.auth.setSessionData('sse_loader', 'false');
        this.subscriptions.forEach(sub => sub.unsubscribe());
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
        const classService = this.sseClient.stream('student/classList', { keepAlive: false, reconnectionDelay: 10000,
            responseType: 'event' }, { body: payload }, 'POST').subscribe((event) => {
            if (event.type === 'error') {
                const errorEvent = event;
            }
            else if (event.type == 'message') {
                const messageEvent = event;
                const classListData = JSON.parse(messageEvent.data);
                console.log(classListData.classList, 'classListData');
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
                classListData.classList.forEach((item) => {
                    const processMessage = (count, messageType, messages) => {
                        if (count !== 0) {
                            this.recentUpdate.push({
                                class_id: item.class_id,
                                class_name: item.class_name,
                                message_type: messageType,
                                message: messages.pop(),
                                class_details: item
                            });
                        }
                    };
                    processMessage(item.inbox_count, 'inbox', item.inbox_message);
                    processMessage(item.announcement_count, 'announcement', item.announcement_message);
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
                this.filteredClassData = classListData.classList.filter((value) => {
                    return value.status == this.selectedButtonForClass;
                });
            }
        });
        const curriculumPayload = payload;
        delete curriculumPayload.type;
        const curriculumService = this.sseClient.stream('student/curriculumList', { keepAlive: false, reconnectionDelay: 10000,
            responseType: 'event' }, { body: curriculumPayload }, 'POST').subscribe((event) => {
            if (event.type === 'error') {
                const errorEvent = event;
            }
            else if (event.type == 'message') {
                const messageEvent = event;
                const curriculumListData = JSON.parse(messageEvent.data);
                console.log(curriculumListData, 'curriculumListData');
                curriculumListData.forEach((curriculumData) => {
                    curriculumData.overdueStatus = true;
                    if (curriculumData.overdue < 0) {
                        curriculumData.overdueStatus = false;
                        Math.abs(curriculumData.overdue);
                        curriculumData.overdue = Math.abs(curriculumData.overdue);
                    }
                    if ((curriculumData.student_content_status == '1' && curriculumData.overdueStatus) || curriculumData.student_content_status == '2') {
                        this.recentTask.push(curriculumData);
                    }
                    else if (curriculumData.student_content_status == '3') {
                        this.recentScore.push(curriculumData);
                    }
                    else if (curriculumData.student_content_status == '1' && !curriculumData.overdueStatus && curriculumData.content_type != '1') {
                        this.overdueTask.push(curriculumData);
                    }
                });
                console.log(this.recentTask, 'recent Task');
                console.log(this.recentScore, 'recent Score');
                console.log(this.overdueTask, 'overdue Task');
                console.log(this.scheduleData, 'schedule data');
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
                // if (this.settingValue == '2') {
                //     this.modalRef = this.modalService.open(this.zoomDialog, {size: 's'});
                // } else if (this.settingValue == '1') {
                //     this.navigateOutsideZoom(successData.ResponseObject);
                // } else if (this.settingValue == '0') {
                // }
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
        if (value.content_type == '2') {
            this.auth.setSessionData('ContentType', 'Assignments');
            if (value.student_content_status != 3) {
                this.auth.setSessionData('classDetails', JSON.stringify(value));
                this.router.navigate(['/studentlogin/answering']);
            }
            else {
                this.auth.setSessionData('student-card', JSON.stringify(value));
                this.router.navigate(['/studentlogin/score-card']);
            }
        }
        else if (value.content_type == '3') {
            this.checkContentTime(value);
        }
        else if (value.content_type == '1') {
            this.router.navigate(['/studentlogin/resource/' + value.content_id]);
        }
    }
    checkContentTime(selectedData) {
        let data;
        data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: selectedData.class_id,
            content_id: selectedData.content_id,
            class_content_id: selectedData.class_content_id,
            school_id: this.auth.getSessionData('school_id')
        };
        this.student.checkTime(data).subscribe((successData) => {
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
                this.auth.setSessionData('ContentType', 'Assessments');
                this.auth.setSessionData('student-card', JSON.stringify(selectedData));
                this.router.navigate(['/studentlogin/score-card']);
            }
            else {
                this.auth.setSessionData('ContentType', 'Assessments');
                this.auth.setSessionData('classDetails', JSON.stringify(selectedData));
                this.router.navigate(['/studentlogin/answering']);
            }
        }
        else {
            this.message = successData.ResponseObject;
            this.ErrorTitle = selectedData.class_name;
            this.modalRef = this.modalService.open(this.throwError, { size: 'md' });
        }
    }
    static { this.ɵfac = function Dashboard2Component_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Dashboard2Component)(i0.ɵɵdirectiveInject(i1.DatePipe), i0.ɵɵdirectiveInject(i2.NgbModal)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Dashboard2Component, selectors: [["app-dashboard"]], viewQuery: function Dashboard2Component_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.throwError = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.showInform = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.zoomDialog = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.zoomDialog1 = _t.first);
        } }, decls: 98, vars: 22, consts: [["throwError", ""], ["showInform", ""], ["zoomDialog", ""], ["zoomDialog1", ""], ["class", "col-12 px-2", 4, "ngIf"], [1, "col-8"], [1, "row"], [1, "col-12", "px-2"], [1, "card", 2, "background", "#f7f6f8", "border-radius", "16px"], [1, "card-body", "p-4"], [1, "row", "px-2", "align-items-center", "justify-content-between", "pb-3"], [1, "d-flex"], [1, "d-flex", 3, "icon"], [1, "font-weight-bold", "color-primary", "ml-1"], [1, "text-right", "cursor", 2, "font-size", "10px", 3, "click"], ["class", "row d-flex justify-content-center align-items-center", 4, "ngIf"], ["class", "row px-2 div-height", 4, "ngIf"], [1, "row", "px-2", "align-items-center", "justify-content-between"], [1, "row", "my-3", "px-1"], [3, "ngClass", "class", "click", 4, "ngFor", "ngForOf"], ["class", "row px-2 div-height2", 4, "ngIf"], [1, "col-12", "px-2", "mt-1"], [1, "d-flex", "align-items-center", 2, "font-size", "10px"], [1, "fa", "fa-square", 2, "color", "#00a8ff !important", "font-size", "14px !important"], [1, "fa", "fa-square", 2, "color", "#81ba00 !important", "font-size", "14px !important"], [1, "col-4"], [1, "fa", "fa-square", 2, "color", "#13c9ca !important", "font-size", "14px !important"], [1, "fa", "fa-square", 2, "color", "#F8C269 !important", "font-size", "14px !important"], [1, "col-12", "mt-1", "px-2"], [1, "fa", "fa-square", 2, "color", "#e6baea !important", "font-size", "14px !important"], [1, "fa", "fa-square", 2, "color", "#8d6eeb !important", "font-size", "14px !important"], [1, "row", "px-2", "div-height"], ["class", "col-12 cursor card dashboard-hover_small px-0", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-body"], [1, "marquee"], [1, "marquee-item"], [4, "ngFor", "ngForOf"], [1, "font-weight-bold"], [1, "color-primary"], [1, "row", "d-flex", "justify-content-center", "align-items-center"], [1, "col-12", "mt-4"], [1, "nodataList", "border-0"], ["class", "col-12 cursor card dashboard-hover dashboard-card_even px-0", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-12", "cursor", "card", "dashboard-hover", "dashboard-card_even", "px-0", 3, "click"], [1, "color-primary", "align-self-center", "mb-0", 2, "font-size", "14px", "line-height", "20px"], [1, "row", 2, "margin-top", "10px"], [1, "mb-0", "fs-12", "col-6"], [1, "col-6", "text-right", "align-self-center"], ["class", "fa fa-video-camera mr-1", "title", "Enter Online Class", 3, "click", 4, "ngIf"], ["title", "New Announcement", 1, "fa", "fa-bullhorn", "color-primary", "mr-1", 3, "click"], [1, "upload-count"], ["title", "New Inbox Message", 1, "fa", "fa-commenting-o", "color-primary", "mr-1", 3, "click"], ["title", "Class Info", 1, "fa", "fa-info", "mr-1", 3, "click"], ["title", "Enter Online Class", 1, "fa", "fa-video-camera", "mr-1", 3, "click"], [3, "click", "ngClass"], [1, "row", "px-2", "div-height2"], ["class", "col-12 cursor card dashboard-hover px-0", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col-12", "cursor", "card", "dashboard-hover", "px-0", 3, "click", "ngClass"], [1, "mb-0", "fs-12", "pr-0", 2, "line-height", "18px"], [1, "mb-0", "col-12", "text-right", "align-self-center"], ["style", "color: #817d7d; padding: 6px 5px; margin-left: 4px; margin-right: 4px", "class", "circle_design fs-10", 3, "title", "ngClass", 4, "ngFor", "ngForOf"], [1, "circle_design", "fs-10", 2, "color", "#817d7d", "padding", "6px 5px", "margin-left", "4px", "margin-right", "4px", 3, "title", "ngClass"], [1, "col-12"], ["class", "col-12 card px-0 dashboard-hover", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col-12", "card", "px-0", "dashboard-hover", 3, "click", "ngClass"], [1, "fs-12", "mb-0", 2, "line-height", "18px"], [1, "d-flex", "align-items-center", "justify-content-end"], [1, "badge", "badge-warning", 2, "background-color", "#5FAE99"], [1, "col-12", "cursor", "card", "dashboard-hover_small", "px-0", 3, "click", "ngClass"], [1, "color-primary", "align-self-center", "mb-0", 2, "font-size", "14px", "line-height", "18px"], [1, "mb-0", "fs-12", 2, "line-height", "18px"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-1"], [1, "fs-12", "mb-0", "text-right", 3, "ngStyle"], ["style", "color: #81ba00", "class", "fs-12 font-weight-bold", 4, "ngIf"], ["class", "badge fs-10 badge-warning", 4, "ngIf"], ["class", "badge badge-info fs-10", 4, "ngIf"], ["class", "badge fs-10 badge-success", 4, "ngIf"], [1, "fs-12", "font-weight-bold", 2, "color", "#81ba00"], [1, "badge", "fs-10", "badge-warning"], [1, "badge", "badge-info", "fs-10"], [1, "badge", "fs-10", "badge-success"], [1, "col-3", "d-flex", "align-items-center", "justify-content-center"], ["class", "fa fa fa-bullhorn", "style", "font-size: 35px; color: #8d6eeb !important;", 4, "ngIf"], ["class", "msg-img", "alt", "Default Image", 3, "src", 4, "ngIf"], [1, "col-9", "pl-0", "align-self-center"], ["class", "m-0 color-primary", 4, "ngIf"], ["class", "announcement_notes m-0", 3, "innerHTML", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-between", "text-secondary"], [4, "ngIf"], [1, "fa", "fa", "fa-bullhorn", 2, "font-size", "35px", "color", "#8d6eeb !important"], ["alt", "Default Image", 1, "msg-img", 3, "src"], [1, "m-0", "color-primary"], [1, "announcement_notes", "m-0", 3, "innerHTML"], ["class", "col-12 cursor card dashboard-hover_small dashboard-card_odd px-0", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-12", "cursor", "card", "dashboard-hover_small", "dashboard-card_odd", "px-0", 3, "click"], ["style", "color: red", "class", "fs-12 font-weight-bold", 4, "ngIf"], [1, "fs-12", "font-weight-bold", 2, "color", "red"], [1, "modal-header", "align-items-center"], [1, "modal-title", "letter"], [1, "fa", "fa-close", "cursor", 2, "color", "#000 !important", 3, "click"], [1, "modal-body"], [1, "mb-0"], [1, "modal-footer"], [1, "btn", "cancel", "pull-right", 3, "click"], [1, "modal-title"], [1, "fa", "fa-close", "cursor", 2, "font-size", "16px", "color", "black !important", 3, "click"], ["class", "p-0", 4, "ngIf"], [1, "p-0"], [1, "letter"], [1, "t-name", "font-weight-bold"], [1, "t-name", "capital", "font-weight-bold"], [1, "modal-header"], [1, "modal-title", "text-center"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "modal-body", "d-flex", "justify-content-right"], [1, "col-12", "text-center"], [1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"]], template: function Dashboard2Component_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "section");
            i0.ɵɵtemplate(1, Dashboard2Component_div_1_Template, 6, 1, "div", 4);
            i0.ɵɵelementStart(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "div", 8)(6, "div", 9)(7, "div", 10)(8, "div", 11);
            i0.ɵɵelement(9, "app-feather-icons", 12);
            i0.ɵɵelementStart(10, "span", 13);
            i0.ɵɵtext(11, "Today's Schedule");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "span", 14);
            i0.ɵɵlistener("click", function Dashboard2Component_Template_span_click_12_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.routePage("schedule")); });
            i0.ɵɵelementStart(13, "a");
            i0.ɵɵtext(14, "View Details");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(15, Dashboard2Component_div_15_Template, 4, 0, "div", 15)(16, Dashboard2Component_div_16_Template, 2, 1, "div", 16);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(17, "div", 6)(18, "div", 7)(19, "div", 8)(20, "div", 9)(21, "div", 17)(22, "div", 11);
            i0.ɵɵelement(23, "app-feather-icons", 12);
            i0.ɵɵelementStart(24, "span", 13);
            i0.ɵɵtext(25, "My Classes");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "span", 14);
            i0.ɵɵlistener("click", function Dashboard2Component_Template_span_click_26_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.routePage("class")); });
            i0.ɵɵelementStart(27, "a");
            i0.ɵɵtext(28, "View All");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(29, "div", 18);
            i0.ɵɵtemplate(30, Dashboard2Component_button_30_Template, 4, 11, "button", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(31, Dashboard2Component_div_31_Template, 4, 1, "div", 15)(32, Dashboard2Component_div_32_Template, 2, 1, "div", 20);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(33, "div", 21)(34, "div", 8)(35, "div", 9)(36, "div", 10)(37, "div", 11)(38, "span", 13);
            i0.ɵɵtext(39, "Recent Scores");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "span", 22);
            i0.ɵɵelement(41, "i", 23);
            i0.ɵɵtext(42, "- Assignment ");
            i0.ɵɵelement(43, "i", 24);
            i0.ɵɵtext(44, "- Assessment ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(45, Dashboard2Component_div_45_Template, 4, 0, "div", 15)(46, Dashboard2Component_div_46_Template, 2, 1, "div", 16);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(47, "div", 25)(48, "div", 6)(49, "div", 7)(50, "div", 8)(51, "div", 9)(52, "div", 10)(53, "div", 11);
            i0.ɵɵelement(54, "app-feather-icons", 12);
            i0.ɵɵelementStart(55, "span", 13);
            i0.ɵɵtext(56, "Recent Tasks");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(57, "span", 22);
            i0.ɵɵelement(58, "i", 26);
            i0.ɵɵtext(59, "- Not Started ");
            i0.ɵɵelement(60, "i", 27);
            i0.ɵɵtext(61, "- In-Porgress ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(62, Dashboard2Component_div_62_Template, 4, 0, "div", 15)(63, Dashboard2Component_div_63_Template, 2, 1, "div", 16);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(64, "div", 28)(65, "div", 8)(66, "div", 9)(67, "div", 10)(68, "div", 11);
            i0.ɵɵelement(69, "app-feather-icons", 12);
            i0.ɵɵelementStart(70, "span", 13);
            i0.ɵɵtext(71, "Recent Update");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(72, "span", 22);
            i0.ɵɵelement(73, "i", 29);
            i0.ɵɵtext(74, "- Inbox ");
            i0.ɵɵelement(75, "i", 30);
            i0.ɵɵtext(76, "- Announcement ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(77, Dashboard2Component_div_77_Template, 4, 0, "div", 15);
            i0.ɵɵelementStart(78, "div", 31);
            i0.ɵɵtemplate(79, Dashboard2Component_div_79_Template, 14, 10, "div", 32);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(80, "div", 28)(81, "div", 8)(82, "div", 9)(83, "div", 10)(84, "div", 11);
            i0.ɵɵelement(85, "app-feather-icons", 12);
            i0.ɵɵelementStart(86, "span", 13);
            i0.ɵɵtext(87, "Overdue Tasks");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(88, Dashboard2Component_div_88_Template, 4, 0, "div", 15)(89, Dashboard2Component_div_89_Template, 2, 1, "div", 16);
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵtemplate(90, Dashboard2Component_ng_template_90_Template, 11, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(92, Dashboard2Component_ng_template_92_Template, 9, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(94, Dashboard2Component_ng_template_94_Template, 13, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(96, Dashboard2Component_ng_template_96_Template, 11, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("row dashboard_section py-", ctx.globalAnnouncementList.length != 0 ? "4" : "5", " dashboard px-4");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.globalAnnouncementList.length != 0);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("icon", "calendar");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.scheduleData.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.scheduleData.length != 0);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("icon", "book");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngForOf", ctx.buttonName);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.filteredClassData.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.filteredClassData.length != 0);
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("ngIf", ctx.recentScore.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.recentScore.length != 0);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("icon", "rotate-cw");
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", ctx.recentTask.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.recentTask.length != 0);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("icon", "bell");
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", ctx.recentUpdate.length == 0);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.recentUpdate);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("icon", "alert-circle");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.overdueTask.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.overdueTask.length != 0);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgStyle, i3.FeatherIconsComponent, i1.DatePipe], styles: ["section[_ngcontent-%COMP%] {\n  height: max-content !important;\n  background-repeat: round;\n  padding: 18px;\n  object-fit: contain;\n}\n\n.dashboard-announcement-card[_ngcontent-%COMP%] {\n  border-left: 10px solid #8d6eeb !important;\n}\n\n.dashboard-hover[_ngcontent-%COMP%]:hover {\n  display: absolute;\n  transform: scale(1.0222);\n  z-index: 999;\n  box-shadow: 2px 2px 2px #e8eaed;\n}\n\n.dashboard-hover_small[_ngcontent-%COMP%]:hover {\n  display: absolute;\n  transform: scale(1.045);\n  z-index: 999;\n  box-shadow: 2px 2px 2px #e8eaed;\n}\n\nsvg[_ngcontent-%COMP%] {\n  width: 14px !important;\n  height: 14px !important;\n}\n\n.dashboard-button[_ngcontent-%COMP%] {\n  padding: 8px 10px !important;\n  font-size: 12px;\n  color: #8F008A;\n  border: 1px solid #8F008A;\n  border-radius: 24px;\n  background: #FFFFFF;\n}\n\n.completed_button[_ngcontent-%COMP%] {\n  color: #81ba00 !important;\n  border: 1px solid #81ba00 !important;\n}\n\n.completed_button[_ngcontent-%COMP%]:hover, .completed_button.active[_ngcontent-%COMP%] {\n  background: #81ba00;\n  color: #FFFFFF !important;\n\n  .badge-success {\n    background-color: #FFFFFF !important;\n    color: #81ba00 !important;\n  }\n}\n\n.upcoming_button[_ngcontent-%COMP%] {\n  color: #00A8FF !important;\n  border: 1px solid #00A8FF !important;\n}\n\n.upcoming_button[_ngcontent-%COMP%]:hover, .upcoming_button.active[_ngcontent-%COMP%] {\n  background: #00A8FF;\n  color: #FFFFFF !important;\n\n  .badge-info {\n    background-color: #FFFFFF !important;\n    color: #00A8FF !important;\n  }\n}\n\n.inProgress_button[_ngcontent-%COMP%] {\n  color: #ffc107 !important;\n  border: 1px solid #ffc107 !important;\n}\n\n.inProgress_button[_ngcontent-%COMP%]:hover, .inProgress_button.active[_ngcontent-%COMP%] {\n  background: #ffc107;\n  color: #FFFFFF !important;\n\n  .badge-warning {\n    background-color: #FFFFFF !important;\n    color: #ffc107 !important;\n  }\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.dashboard.masonry-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n  align-items: start;\n}\n\n.circle_design[_ngcontent-%COMP%] {\n  background: #f1f1f4;\n  border-radius: 50%;\n  padding: 4px 6px;\n}\n\n.msg-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  box-shadow: 0 0 15px #1e1e2017;\n  border-radius: 50%;\n  cursor: default;\n}\n\n.scheduledDate[_ngcontent-%COMP%] {\n  background: #5FAE99;\n  color: #FFFFFF !important;\n  font-weight: 700;\n}\n\ni[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-left: 6px;\n  margin-right: 6px !important;\n  border-radius: 50%;\n  color: #5FAE99 !important;\n}\n\n.dashboard-card_inProgress[_ngcontent-%COMP%] {\n  border-left: 10px solid #F8C269 !important;\n}\n\n.dashboard-card_upcoming[_ngcontent-%COMP%] {\n  border-left: 10px solid #00A8FF !important;\n}\n\n.dashboard-card_completed[_ngcontent-%COMP%] {\n  border-left: 10px solid #81ba00 !important;\n}\n\n.dashboard-card_odd[_ngcontent-%COMP%] {\n  border-left: 10px solid #e6baea !important;\n}\n\n.dashboard-card_even[_ngcontent-%COMP%] {\n  border-left: 10px solid #864BA7 !important;\n}\n\n.upload-count[_ngcontent-%COMP%] {\n  padding: 4px 6px;\n  margin-left: -8px;\n  font-size: 10px;\n  color: #fff;\n  font-weight: 400;\n  border-radius: 50%;\n  position: relative;\n  top: -12px !important;\n  background: #5FAE99;\n}\n\n.div-height[_ngcontent-%COMP%] {\n  max-height: 20rem;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n\n.div-height[_ngcontent-%COMP%]:hover {\n  overflow-y: auto !important;\n  overflow-x: hidden;\n}\n\n.div-height1[_ngcontent-%COMP%] {\n  max-height: 25rem;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n\n.div-height1[_ngcontent-%COMP%]:hover {\n  overflow-y: auto !important;\n  overflow-x: hidden;\n}\n\ndiv-height2[_ngcontent-%COMP%] {\n  max-height: 30rem;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n\n.div-height2[_ngcontent-%COMP%]:hover {\n  overflow-y: auto !important;\n  overflow-x: hidden;\n}\n\n.marquee[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  display: flex;\n}\n\n.marquee-item[_ngcontent-%COMP%] {\n  flex: none;\n  padding-left: 100%;\n  animation: _ngcontent-%COMP%_animate 25s linear infinite;\n}\n\n//.marquee[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n//  padding-left: 100%;\n//  display: inline-block;\n//  animation: _ngcontent-%COMP%_animate 20s linear infinite;\n//}\n\n.marquee[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{\n  animation-play-state: paused;\n}\n\n@keyframes _ngcontent-%COMP%_animate {\n  100% {\n    transform: translate(-100%, 0);\n  }\n}\n\n.recent_inProgress[_ngcontent-%COMP%] {\n  border-left: 10px solid #F8C269;\n}\n\n.recent_not_started[_ngcontent-%COMP%] {\n  border-left: 10px solid #13c9ca;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Dashboard2Component, [{
        type: Component,
        args: [{ selector: 'app-dashboard', standalone: false, template: "<section class=\"row dashboard_section py-{{globalAnnouncementList.length != 0 ? '4' : '5'}} dashboard px-4\">\n\n    <div class=\"col-12 px-2\" *ngIf=\"globalAnnouncementList.length != 0\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"marquee\">\n                    <div class=\"marquee-item\">\n                        <span *ngFor=\"let announcement of globalAnnouncementList; let i = index; let last = last\">\n                            <span class=\"font-weight-bold\">{{ announcement.title + ' - ' }}</span>\n                            <span class=\"color-primary\"> {{(announcement.description ?? '') }} {{globalAnnouncementList.length > 1 && !last ? ', ' : ''}}</span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-8\">\n        <div class=\"row\">\n            <div class=\"col-12 px-2\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-body p-4\">\n                        <div class=\"row px-2 align-items-center justify-content-between pb-3\">\n                            <div class=\"d-flex\">\n                                <app-feather-icons class=\"d-flex\" [icon]=\"'calendar'\"></app-feather-icons>\n                                <span class=\"font-weight-bold color-primary ml-1\">Today's Schedule</span>\n                            </div>\n                            <span (click)=\"routePage('schedule')\" class=\"text-right cursor\" style=\"font-size: 10px\">\n                        <a>View Details</a></span>\n                        </div>\n                        <div class=\"row d-flex justify-content-center align-items-center\" *ngIf=\"scheduleData.length == 0\">\n                            <div class=\"col-12 mt-4\">\n                                <button class=\"nodataList border-0\">No Schedule Available!</button>\n                            </div>\n                        </div>\n                        <div class=\"row px-2 div-height\" *ngIf=\"scheduleData.length != 0\">\n                            <div (click)=\"enterList(item)\" class=\"col-12 cursor card dashboard-hover dashboard-card_even px-0\" *ngFor=\"let item of scheduleData; let j = index; let even = even\">\n                                <div class=\"card-body\">\n                                    <h5 style=\"font-size: 14px;line-height: 20px\" class=\"color-primary align-self-center mb-0\">{{item.class_name}}</h5>\n                                    <div class=\"row\" style=\"margin-top: 10px\">\n                                        <h6 class=\"mb-0 fs-12 col-6\">{{item.slotstarttime + ' - ' + item.slotendtime}}</h6>\n                                        <div class=\"col-6 text-right align-self-center\">\n                                            <i (click)=\"openZoomDialog(item, $event)\" *ngIf=\"item.class_type == '1' && item.schedule_id != ''\"\n                                               class=\"fa fa-video-camera mr-1\" title=\"Enter Online Class\"></i>\n                                            <i (click)=\"redirectToAnnouncementOrInbox(item, 'announcement')\" class=\"fa fa-bullhorn color-primary mr-1\" title=\"New Announcement\">\n                                                <span class=\"upload-count\">{{item.announcement_count ?? '0'}}</span>\n                                            </i>\n                                            <i (click)=\"redirectToAnnouncementOrInbox(item, 'inbox')\" class=\"fa fa-commenting-o color-primary mr-1\" title=\"New Inbox Message\">\n                                                <span class=\"upload-count\">{{item.inbox_count ?? '0'}}</span>\n                                            </i>\n                                            <i (click)=\"showInformation(item, $event)\" class=\"fa fa-info mr-1\" title=\"Class Info\"></i>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12 px-2\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-body p-4\">\n                        <div class=\"row px-2 align-items-center justify-content-between\">\n                            <div class=\"d-flex\">\n                                <app-feather-icons class=\"d-flex\" [icon]=\"'book'\"></app-feather-icons>\n                                <span class=\"font-weight-bold color-primary ml-1\">My Classes</span>\n                            </div>\n                            <span (click)=\"routePage('class')\" class=\"text-right cursor\" style=\"font-size: 10px\">\n                            <a>View All</a></span>\n                        </div>\n                        <div class=\"row my-3 px-1\">\n                            <button *ngFor=\"let data of buttonName\" (click)=\"updateClassData(data.id)\" [ngClass]=\"{'active': data.active}\"\n                                    class=\"dashboard-button {{data.className}}\">{{data.name}}<span class=\"badge {{data.badge_class}} ml-1\">{{data.count}}</span></button>\n                        </div>\n                        <div class=\"row d-flex justify-content-center align-items-center\" *ngIf=\"filteredClassData.length == 0\">\n                            <div class=\"col-12 mt-4\">\n                                <button class=\"nodataList border-0\">No {{selectedButtonForClass == '2' ? 'In-Progress' : selectedButtonForClass == '4' ? 'Upcoming' : 'Completed'}} Class Available!</button>\n                            </div>\n                        </div>\n                        <div class=\"row px-2 div-height2\" *ngIf=\"filteredClassData.length != 0\">\n                            <div (click)=\"classEnterList(item)\" [ngClass]=\"{'dashboard-card_inProgress' : selectedButtonForClass == '2', 'dashboard-card_upcoming' : selectedButtonForClass == '4', 'dashboard-card_completed' : selectedButtonForClass == '3'}\"\n                                 class=\"col-12 cursor card dashboard-hover px-0\" *ngFor=\"let item of filteredClassData; let j = index\">\n                                <div class=\"card-body\">\n                                    <h5 style=\"font-size: 14px;line-height: 20px\" class=\"color-primary align-self-center mb-0\">{{item.class_name}}</h5>\n                                    <h6 style=\"line-height: 18px\" class=\"mb-0 fs-12 pr-0\">{{item.subject_name}}</h6>\n                                    <div class=\"row\">\n                                        <h6 class=\"mb-0 col-12 text-right align-self-center\">\n                                            <span [title]=\"returnDayTitle(item, day.id, day.value)\" [ngClass]=\"{'scheduledDate': checkAvailabilityDate(item, day.id)}\"\n                                                  style=\"color: #817d7d; padding: 6px 5px; margin-left: 4px; margin-right: 4px\"\n                                                  class=\"circle_design fs-10\" *ngFor=\"let day of days;\">{{day.day}}</span>\n                                        </h6>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 px-2 mt-1\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-body p-4\">\n                        <div class=\"row px-2 align-items-center justify-content-between pb-3\">\n                            <div class=\"d-flex\">\n                                <span class=\"font-weight-bold color-primary ml-1\">Recent Scores</span>\n                            </div>\n                            <span class=\"d-flex align-items-center\" style=\"font-size: 10px\">\n                                <i style=\"color: #00a8ff !important;font-size: 14px !important;\" class=\"fa fa-square\"></i>- Assignment\n                                <i style=\"color: #81ba00 !important;font-size: 14px !important;\" class=\"fa fa-square\"></i>- Assessment\n                            </span>\n                        </div>\n                        <div class=\"row d-flex justify-content-center align-items-center\" *ngIf=\"recentScore.length == 0\">\n                            <div class=\"col-12\">\n                                <button class=\"nodataList border-0\">No Recent Score released!</button>\n                            </div>\n                        </div>\n                        <div class=\"row px-2 div-height\" *ngIf=\"recentScore.length != 0\">\n                            <div (click)=\"answerPage(item)\" [ngClass]=\"{'dashboard-card_upcoming' : item.content_type == '2', 'dashboard-card_completed' : item.content_type == '3'}\"\n                                 class=\"col-12 card px-0 dashboard-hover\" *ngFor=\"let item of recentScore; let j = index\">\n                                <div class=\"card-body\">\n                                    <h5 style=\"font-size: 14px;line-height: 20px\" class=\"color-primary align-self-center mb-0\">{{item.content_name}}</h5>\n                                    <h6 style=\"line-height: 18px\" class=\"fs-12 mb-0\">{{item.class_name}}</h6>\n                                    <div class=\"d-flex align-items-center justify-content-end\">\n                                        <span style=\"background-color: #5FAE99\" class=\"badge badge-warning\">\n                                            {{item.obtained_score}} / {{item.total_score}}</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-4\">\n        <div class=\"row\">\n            <div class=\"col-12 px-2\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-body p-4\">\n                        <div class=\"row px-2 align-items-center justify-content-between pb-3\">\n                            <div class=\"d-flex\">\n                                <app-feather-icons class=\"d-flex\" [icon]=\"'rotate-cw'\"></app-feather-icons>\n                                <span class=\"font-weight-bold color-primary ml-1\">Recent Tasks</span>\n                            </div>\n                            <span class=\"d-flex align-items-center\" style=\"font-size: 10px\">\n                                <i style=\"color: #13c9ca !important;font-size: 14px !important;\" class=\"fa fa-square\"></i>- Not Started\n                                <i style=\"color: #F8C269 !important;font-size: 14px !important;\" class=\"fa fa-square\"></i>- In-Porgress\n                            </span>\n                        </div>\n                        <div class=\"row d-flex justify-content-center align-items-center\" *ngIf=\"recentTask.length == 0\">\n                            <div class=\"col-12\">\n                                <button class=\"nodataList border-0\">No Recent Task Available!</button>\n                            </div>\n                        </div>\n                        <div class=\"row px-2 div-height\" *ngIf=\"recentTask.length != 0\">\n                            <div (click)=\"answerPage(item)\" [ngClass]=\"{'recent_inProgress' : item.student_content_status == '2',\n                            'recent_not_started' : item.student_content_status == '1', 'dashboard-card_odd' : item.content_type == 1}\"\n                                 class=\"col-12 cursor card dashboard-hover_small px-0\" *ngFor=\"let item of recentTask; let j = index\">\n                                <div class=\"card-body\">\n                                    <h5 style=\"font-size: 14px; line-height: 18px\" class=\"color-primary align-self-center mb-0\">{{item.content_name}}</h5>\n                                    <h6 style=\"line-height: 18px\" class=\"mb-0 fs-12\">{{item.class_name}}</h6>\n                                    <div class=\"d-flex justify-content-between align-items-center mt-1\">\n                                        <h6 [ngStyle]=\"{'visibility': item.end_date != '0000-00-00' ? 'none' : 'hidden'}\"\n                                            class=\"fs-12 mb-0 text-right\">Due Date:\n                                            <span *ngIf=\"item.end_date != '0000-00-00'\" style=\"color: #81ba00\" class=\"fs-12 font-weight-bold\">\n                                                {{item.end_date | date : 'MM/dd/yyyy'}}, {{item.end_time}}</span></h6>\n                                        <span *ngIf=\"item.content_type == '1'\" class=\"badge fs-10 badge-warning\">Resource</span>\n                                        <span *ngIf=\"item.content_type == '2'\" class=\"badge badge-info fs-10\">Assignment</span>\n                                        <span *ngIf=\"item.content_type == '3'\" class=\"badge fs-10 badge-success\">Assessment</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-12 mt-1 px-2\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-body p-4\">\n                        <div class=\"row px-2 align-items-center justify-content-between pb-3\">\n                            <div class=\"d-flex\">\n                                <app-feather-icons class=\"d-flex\" [icon]=\"'bell'\"></app-feather-icons>\n                                <span class=\"font-weight-bold color-primary ml-1\">Recent Update</span>\n                            </div>\n                            <span class=\"d-flex align-items-center\" style=\"font-size: 10px\">\n                                <i style=\"color: #e6baea !important;font-size: 14px !important;\" class=\"fa fa-square\"></i>- Inbox\n                                <i style=\"color: #8d6eeb !important;font-size: 14px !important;\" class=\"fa fa-square\"></i>- Announcement\n                            </span>\n                        </div>\n                        <div class=\"row d-flex justify-content-center align-items-center\" *ngIf=\"recentUpdate.length == 0\">\n                            <div class=\"col-12\">\n                                <button class=\"nodataList border-0\">No Recent Updates!</button>\n                            </div>\n                        </div>\n                        <div class=\"row px-2 div-height\">\n                            <div (click)=\"redirectToAnnouncementOrInbox(item)\" [ngClass]=\"{'dashboard-card_odd' : item.message_type == 'inbox', 'dashboard-announcement-card ' : item.message_type != 'inbox'}\"\n                                 class=\"col-12 cursor card dashboard-hover_small px-0\" *ngFor=\"let item of recentUpdate; let j = index\">\n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-3 d-flex align-items-center justify-content-center\">\n                                            <i *ngIf=\"item.message_type != 'inbox'\" class=\"fa fa fa-bullhorn\" style=\"font-size: 35px; color: #8d6eeb !important;\"></i>\n                                            <img *ngIf=\"item.message_type == 'inbox'\" class=\"msg-img\" [src]=\"'assets/images/dashboard/default.png'\" alt=\"Default Image\">\n                                       </div>\n                                       <div class=\"col-9 pl-0 align-self-center\">\n                                           <p *ngIf=\"item.message_type == 'inbox'\" class=\"m-0 color-primary\">{{item.message.body}}</p>\n                                           <p class=\"announcement_notes m-0\" *ngIf=\"item.message_type != 'inbox'\" [innerHTML]=\"item.message.note\"></p>\n                                           <small class=\"d-flex align-items-center justify-content-between text-secondary\"><span>Sridhar</span>\n                                               <span *ngIf=\"item.message_type == 'inbox'\">{{item.message.created_date | date : 'MM/dd/yyyy, h:mm a'}}</span>\n                                               <span *ngIf=\"item.message_type != 'inbox'\">Dec 23, 2024 | 12:00 AM</span>\n                                           </small>\n                                       </div>\n                                   </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-12 mt-1 px-2\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-body p-4\">\n                        <div class=\"row px-2 align-items-center justify-content-between pb-3\">\n                            <div class=\"d-flex\">\n                                <app-feather-icons class=\"d-flex\" [icon]=\"'alert-circle'\"></app-feather-icons>\n                                <span class=\"font-weight-bold color-primary ml-1\">Overdue Tasks</span>\n                            </div>\n                        </div>\n                        <div class=\"row d-flex justify-content-center align-items-center\" *ngIf=\"overdueTask.length == 0\">\n                            <div class=\"col-12\">\n                                <button class=\"nodataList border-0\">No Overdue Task!</button>\n                            </div>\n                        </div>\n                        <div class=\"row px-2 div-height\" *ngIf=\"overdueTask.length != 0\">\n                            <div (click)=\"answerPage(item)\" class=\"col-12 cursor card dashboard-hover_small dashboard-card_odd px-0\" *ngFor=\"let item of overdueTask; let j = index\">\n                                <div class=\"card-body\">\n                                    <h5 style=\"font-size: 14px;line-height: 20px\" class=\"color-primary align-self-center mb-0\">{{item.content_name}}</h5>\n                                    <h6 style=\"line-height: 18px\" class=\"mb-0 fs-12\">{{item.class_name}}</h6>\n                                    <div class=\"d-flex justify-content-between align-items-center mt-1\">\n                                        <h6 [ngStyle]=\"{'visibility': item.end_date != '0000-00-00' ? 'none' : 'hidden'}\"\n                                            class=\"fs-12 mb-0 text-right\">Due Date:\n                                            <span *ngIf=\"item.end_date != '0000-00-00'\" style=\"color: red\" class=\"fs-12 font-weight-bold\">\n                                                {{item.end_date | date : 'MM/dd/yyyy'}}, {{item.end_time}}</span></h6>\n                                        <span *ngIf=\"item.content_type == '1'\" class=\"badge fs-10 badge-warning\">Resource</span>\n                                        <span *ngIf=\"item.content_type == '2'\" class=\"badge badge-info fs-10\">Assignment</span>\n                                        <span *ngIf=\"item.content_type == '3'\" class=\"badge fs-10 badge-success\">Assessment</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</section>\n\n<ng-template #throwError>\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title letter\">{{ErrorTitle}}</h4>\n        <i style=\"color:#000 !important;\" class=\"fa fa-close cursor\" (click)=\"onSave()\" ></i>\n    </div>\n    <div class=\"modal-body\">\n        <p class=\"mb-0\"><b>{{message}}</b></p>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn cancel pull-right\" (click)=\"onSave()\">ok</button>\n    </div>\n</ng-template>\n\n<ng-template #showInform>\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title\">Info</h4>\n        <i style=\"font-size: 16px; color: black !important;\" class=\"fa fa-close cursor\" (click)=\"modalRef.close()\" ></i>\n    </div>\n    <div class=\"modal-body\">\n        <p class=\"p-0\" *ngIf=\"classInfo?.class_start_date != ''\"><small class=\"letter\">Start Date: </small> <span class=\"t-name font-weight-bold\">{{classInfo.class_start_date}}</span></p>\n        <p class=\"p-0\" *ngIf=\"classInfo?.class_end_date != ''\"><small class=\"letter\">End Date: </small> <span class=\"t-name font-weight-bold\">{{classInfo.class_end_date}}</span></p>\n        <p class=\"p-0\" *ngIf=\"classInfo?.subject_name != ''\"><small class=\"letter\">Subject: </small> <span class=\"t-name font-weight-bold\">{{classInfo.subject_name}}</span></p>\n        <p class=\"p-0\" *ngIf=\"classInfo?.grade_name != ''\"><small class=\"letter\">Grade: </small> <span class=\"t-name capital font-weight-bold\">{{classInfo.grade_name}}</span></p>\n    </div>\n\n</ng-template>\n\n<ng-template #zoomDialog let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title text-center\">Zoom Meet</h4>\n        <i (click)=\"modalRef.close()\" class=\"fa fa-close cursor\" ></i>\n    </div>\n    <div class=\"modal-body d-flex justify-content-right\">\n        <div class=\"col-12 text-center\">\n            <h5>Open zoom in </h5>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button  (click)=\"modalRef.close();zoomService.initZoomMeeting(selectedClass)\" class=\"btn btn-primary\">In App</button>\n        <button (click)=\"navigateOutsideZoom(this.selectedClass.availabilityDate[0])\" class=\"btn btn-outline-primary\" type=\"button\">New Tab</button>\n    </div>\n</ng-template>\n\n<ng-template #zoomDialog1 let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title text-center\">Zoom Meet</h4>\n        <i (click)=\"modalRef.close()\" class=\"fa fa-close cursor\" ></i>\n    </div>\n    <div class=\"modal-body d-flex justify-content-right\">\n        <div class=\"col-12 text-center\">\n            <h5>No Zoom Meet Scheduled for this day</h5>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"modalRef.close();\" class=\"btn btn-primary\">OK</button>\n    </div>\n</ng-template>\n", styles: ["section {\n  height: max-content !important;\n  background-repeat: round;\n  padding: 18px;\n  object-fit: contain;\n}\n\n.dashboard-announcement-card {\n  border-left: 10px solid #8d6eeb !important;\n}\n\n.dashboard-hover:hover {\n  display: absolute;\n  transform: scale(1.0222);\n  z-index: 999;\n  box-shadow: 2px 2px 2px #e8eaed;\n}\n\n.dashboard-hover_small:hover {\n  display: absolute;\n  transform: scale(1.045);\n  z-index: 999;\n  box-shadow: 2px 2px 2px #e8eaed;\n}\n\nsvg {\n  width: 14px !important;\n  height: 14px !important;\n}\n\n.dashboard-button {\n  padding: 8px 10px !important;\n  font-size: 12px;\n  color: #8F008A;\n  border: 1px solid #8F008A;\n  border-radius: 24px;\n  background: #FFFFFF;\n}\n\n.completed_button {\n  color: #81ba00 !important;\n  border: 1px solid #81ba00 !important;\n}\n\n.completed_button:hover, .completed_button.active {\n  background: #81ba00;\n  color: #FFFFFF !important;\n\n  .badge-success {\n    background-color: #FFFFFF !important;\n    color: #81ba00 !important;\n  }\n}\n\n.upcoming_button {\n  color: #00A8FF !important;\n  border: 1px solid #00A8FF !important;\n}\n\n.upcoming_button:hover, .upcoming_button.active {\n  background: #00A8FF;\n  color: #FFFFFF !important;\n\n  .badge-info {\n    background-color: #FFFFFF !important;\n    color: #00A8FF !important;\n  }\n}\n\n.inProgress_button {\n  color: #ffc107 !important;\n  border: 1px solid #ffc107 !important;\n}\n\n.inProgress_button:hover, .inProgress_button.active {\n  background: #ffc107;\n  color: #FFFFFF !important;\n\n  .badge-warning {\n    background-color: #FFFFFF !important;\n    color: #ffc107 !important;\n  }\n}\n\nbutton:focus {\n  outline: none !important;\n}\n\n.dashboard.masonry-layout {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n  align-items: start;\n}\n\n.circle_design {\n  background: #f1f1f4;\n  border-radius: 50%;\n  padding: 4px 6px;\n}\n\n.msg-img {\n  width: 50px;\n  height: 50px;\n  box-shadow: 0 0 15px #1e1e2017;\n  border-radius: 50%;\n  cursor: default;\n}\n\n.scheduledDate {\n  background: #5FAE99;\n  color: #FFFFFF !important;\n  font-weight: 700;\n}\n\ni {\n  font-size: 18px;\n  margin-left: 6px;\n  margin-right: 6px !important;\n  border-radius: 50%;\n  color: #5FAE99 !important;\n}\n\n.dashboard-card_inProgress {\n  border-left: 10px solid #F8C269 !important;\n}\n\n.dashboard-card_upcoming {\n  border-left: 10px solid #00A8FF !important;\n}\n\n.dashboard-card_completed {\n  border-left: 10px solid #81ba00 !important;\n}\n\n.dashboard-card_odd {\n  border-left: 10px solid #e6baea !important;\n}\n\n.dashboard-card_even {\n  border-left: 10px solid #864BA7 !important;\n}\n\n.upload-count {\n  padding: 4px 6px;\n  margin-left: -8px;\n  font-size: 10px;\n  color: #fff;\n  font-weight: 400;\n  border-radius: 50%;\n  position: relative;\n  top: -12px !important;\n  background: #5FAE99;\n}\n\n.div-height {\n  max-height: 20rem;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n\n.div-height:hover {\n  overflow-y: auto !important;\n  overflow-x: hidden;\n}\n\n.div-height1 {\n  max-height: 25rem;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n\n.div-height1:hover {\n  overflow-y: auto !important;\n  overflow-x: hidden;\n}\n\ndiv-height2 {\n  max-height: 30rem;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n\n.div-height2:hover {\n  overflow-y: auto !important;\n  overflow-x: hidden;\n}\n\n.marquee {\n  white-space: nowrap;\n  overflow: hidden;\n  display: flex;\n}\n\n.marquee-item {\n  flex: none;\n  padding-left: 100%;\n  animation: animate 25s linear infinite;\n}\n\n//.marquee div {\n//  padding-left: 100%;\n//  display: inline-block;\n//  animation: animate 20s linear infinite;\n//}\n\n.marquee:hover div{\n  animation-play-state: paused;\n}\n\n@keyframes animate {\n  100% {\n    transform: translate(-100%, 0);\n  }\n}\n\n.recent_inProgress {\n  border-left: 10px solid #F8C269;\n}\n\n.recent_not_started {\n  border-left: 10px solid #13c9ca;\n}\n"] }]
    }], () => [{ type: i1.DatePipe }, { type: i2.NgbModal }], { throwError: [{
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Dashboard2Component, { className: "Dashboard2Component" }); })();
//# sourceMappingURL=dashboard2.component.js.map