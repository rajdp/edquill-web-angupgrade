import { Component, inject } from '@angular/core';
import { AuthService } from '../../../shared/service/auth.service';
import { ClassService } from '../../../shared/service/class.service';
import { Router } from '@angular/router';
import { SseClient } from 'ngx-sse-client';
import { NewsubjectService } from '../../../shared/service/newsubject.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../shared/components/feather-icons/feather-icons.component";
const _c0 = a0 => ({ "active": a0 });
const _c1 = (a0, a1, a2) => ({ "dashboard-card_inProgress": a0, "dashboard-card_upcoming": a1, "dashboard-card_completed": a2 });
const _c2 = a0 => ({ "scheduledDate": a0 });
const _c3 = (a0, a1) => ({ "dashboard-card_upcoming": a0, "dashboard-card_completed": a1 });
const _c4 = (a0, a1, a2) => ({ "recent_inProgress": a0, "recent_not_started": a1, "dashboard-card_odd": a2 });
const _c5 = a0 => ({ "visibility": a0 });
const _c6 = (a0, a1) => ({ "dashboard-card_odd": a0, "dashboard-announcement-card ": a1 });
function DashboardComponent_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "span", 33);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 34);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_6_0;
    const announcement_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(announcement_r1.title + " - ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", (tmp_6_0 = announcement_r1.description) !== null && tmp_6_0 !== undefined ? tmp_6_0 : "", " ", ctx_r2.globalAnnouncementList.length > 1 && !last_r2 ? ", " : "", "");
} }
function DashboardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 28)(2, "div", 29)(3, "div", 30)(4, "div", 31);
    i0.ɵɵtemplate(5, DashboardComponent_div_1_span_5_Template, 5, 3, "span", 32);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r2.globalAnnouncementList);
} }
function DashboardComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "div", 36)(2, "button", 37);
    i0.ɵɵtext(3, "No Schedule Available!");
    i0.ɵɵelementEnd()()();
} }
function DashboardComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39)(1, "div", 29)(2, "h5", 40);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 41)(5, "h6", 42);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 43)(8, "i", 44)(9, "span", 45);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "i", 46)(12, "span", 45);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(14, "i", 47)(15, "i", 48);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    const item_r4 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r4.class_name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r4.slotstarttime + " - " + item_r4.slotendtime);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate((tmp_7_0 = item_r4.announcement_count) !== null && tmp_7_0 !== undefined ? tmp_7_0 : "0");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((tmp_8_0 = item_r4.inbox_count) !== null && tmp_8_0 !== undefined ? tmp_8_0 : "0");
} }
function DashboardComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵtemplate(1, DashboardComponent_div_16_div_1_Template, 16, 4, "div", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.scheduleData);
} }
function DashboardComponent_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 49);
    i0.ɵɵlistener("click", function DashboardComponent_button_31_Template_button_click_0_listener() { const data_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.updateClassData(data_r6.id)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("dashboard-button ", data_r6.className, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c0, data_r6.active));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(data_r6.name);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("badge ", data_r6.badge_class, " ml-1");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(data_r6.count);
} }
function DashboardComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "div", 36)(2, "button", 37);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("No ", ctx_r2.selectedButtonForClass == "2" ? "In-Progress" : ctx_r2.selectedButtonForClass == "4" ? "Upcoming" : "Completed", " Class Available!");
} }
function DashboardComponent_div_33_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 55);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r7 = ctx.$implicit;
    const item_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", ctx_r2.returnDayTitle(item_r8, day_r7.id, day_r7.value))("ngClass", i0.ɵɵpureFunction1(3, _c2, ctx_r2.checkAvailabilityDate(item_r8, day_r7.id)));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(day_r7.day);
} }
function DashboardComponent_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51)(1, "div", 29)(2, "h5", 40);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h6", 52);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 2)(7, "h6", 53);
    i0.ɵɵtemplate(8, DashboardComponent_div_33_div_1_span_8_Template, 2, 5, "span", 54);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(4, _c1, ctx_r2.selectedButtonForClass == "2", ctx_r2.selectedButtonForClass == "4", ctx_r2.selectedButtonForClass == "3"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r8.class_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r8.subject_name);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r2.days);
} }
function DashboardComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵtemplate(1, DashboardComponent_div_33_div_1_Template, 9, 8, "div", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.filteredClassData);
} }
function DashboardComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "div", 56)(2, "button", 37);
    i0.ɵɵtext(3, "No Recent Score released!");
    i0.ɵɵelementEnd()()();
} }
function DashboardComponent_div_47_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 58)(1, "div", 29)(2, "h5", 40);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h6", 59);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 60)(7, "span", 61);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(5, _c3, item_r9.content_type == "2", item_r9.content_type == "3"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r9.content_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r9.class_name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", item_r9.obtained_score, " / ", item_r9.total_score, "");
} }
function DashboardComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵtemplate(1, DashboardComponent_div_47_div_1_Template, 9, 8, "div", 57);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.recentScore);
} }
function DashboardComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "div", 56)(2, "button", 37);
    i0.ɵɵtext(3, "No Recent Task Available!");
    i0.ɵɵelementEnd()()();
} }
function DashboardComponent_div_64_div_1_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 70);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind2(2, 2, item_r10.end_date, "MM/dd/yyyy"), ", ", item_r10.end_time, "");
} }
function DashboardComponent_div_64_div_1_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 71);
    i0.ɵɵtext(1, "Resource");
    i0.ɵɵelementEnd();
} }
function DashboardComponent_div_64_div_1_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 72);
    i0.ɵɵtext(1, "Assignment");
    i0.ɵɵelementEnd();
} }
function DashboardComponent_div_64_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 73);
    i0.ɵɵtext(1, "Assessment");
    i0.ɵɵelementEnd();
} }
function DashboardComponent_div_64_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51)(1, "div", 29)(2, "h5", 62);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h6", 63);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 64)(7, "h6", 65);
    i0.ɵɵtext(8, "Due Date: ");
    i0.ɵɵtemplate(9, DashboardComponent_div_64_div_1_span_9_Template, 3, 5, "span", 66);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, DashboardComponent_div_64_div_1_span_10_Template, 2, 0, "span", 67)(11, DashboardComponent_div_64_div_1_span_11_Template, 2, 0, "span", 68)(12, DashboardComponent_div_64_div_1_span_12_Template, 2, 0, "span", 69);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(8, _c4, item_r10.student_content_status == "2", item_r10.student_content_status == "1", item_r10.content_type == 1));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r10.content_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r10.class_name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(12, _c5, item_r10.end_date != "0000-00-00" ? "none" : "hidden"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r10.end_date != "0000-00-00");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r10.content_type == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r10.content_type == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r10.content_type == "3");
} }
function DashboardComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵtemplate(1, DashboardComponent_div_64_div_1_Template, 13, 14, "div", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.recentTask);
} }
function DashboardComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "div", 56)(2, "button", 37);
    i0.ɵɵtext(3, "No Recent Updates!");
    i0.ɵɵelementEnd()()();
} }
function DashboardComponent_div_80_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 82);
} }
function DashboardComponent_div_80_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 83);
} if (rf & 2) {
    i0.ɵɵproperty("src", "assets/images/dashboard/default.png", i0.ɵɵsanitizeUrl);
} }
function DashboardComponent_div_80_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 84);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r11.message.body);
} }
function DashboardComponent_div_80_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 85);
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", item_r11.message.note, i0.ɵɵsanitizeHtml);
} }
function DashboardComponent_div_80_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, item_r11.message.created_date, "MM/dd/yyyy, h:mm a"));
} }
function DashboardComponent_div_80_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Dec 23, 2024 | 12:00 AM");
    i0.ɵɵelementEnd();
} }
function DashboardComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51)(1, "div", 29)(2, "div", 2)(3, "div", 74);
    i0.ɵɵtemplate(4, DashboardComponent_div_80_i_4_Template, 1, 0, "i", 75)(5, DashboardComponent_div_80_img_5_Template, 1, 1, "img", 76);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 77);
    i0.ɵɵtemplate(7, DashboardComponent_div_80_p_7_Template, 2, 1, "p", 78)(8, DashboardComponent_div_80_p_8_Template, 1, 1, "p", 79);
    i0.ɵɵelementStart(9, "small", 80)(10, "span");
    i0.ɵɵtext(11, "Sridhar");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, DashboardComponent_div_80_span_12_Template, 3, 4, "span", 81)(13, DashboardComponent_div_80_span_13_Template, 2, 0, "span", 81);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(7, _c6, item_r11.message_type == "inbox", item_r11.message_type != "inbox"));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", item_r11.message_type != "inbox");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r11.message_type == "inbox");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r11.message_type == "inbox");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r11.message_type != "inbox");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", item_r11.message_type == "inbox");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r11.message_type != "inbox");
} }
function DashboardComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "div", 56)(2, "button", 37);
    i0.ɵɵtext(3, "No Overdue Task!");
    i0.ɵɵelementEnd()()();
} }
function DashboardComponent_div_90_div_1_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 89);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind2(2, 2, item_r12.end_date, "MM/dd/yyyy"), ", ", item_r12.end_time, "");
} }
function DashboardComponent_div_90_div_1_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 71);
    i0.ɵɵtext(1, "Resource");
    i0.ɵɵelementEnd();
} }
function DashboardComponent_div_90_div_1_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 72);
    i0.ɵɵtext(1, "Assignment");
    i0.ɵɵelementEnd();
} }
function DashboardComponent_div_90_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 73);
    i0.ɵɵtext(1, "Assessment");
    i0.ɵɵelementEnd();
} }
function DashboardComponent_div_90_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 87)(1, "div", 29)(2, "h5", 40);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h6", 63);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 64)(7, "h6", 65);
    i0.ɵɵtext(8, "Due Date: ");
    i0.ɵɵtemplate(9, DashboardComponent_div_90_div_1_span_9_Template, 3, 5, "span", 88);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, DashboardComponent_div_90_div_1_span_10_Template, 2, 0, "span", 67)(11, DashboardComponent_div_90_div_1_span_11_Template, 2, 0, "span", 68)(12, DashboardComponent_div_90_div_1_span_12_Template, 2, 0, "span", 69);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r12.content_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r12.class_name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(7, _c5, item_r12.end_date != "0000-00-00" ? "none" : "hidden"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r12.end_date != "0000-00-00");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r12.content_type == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r12.content_type == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r12.content_type == "3");
} }
function DashboardComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵtemplate(1, DashboardComponent_div_90_div_1_Template, 13, 9, "div", 86);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.overdueTask);
} }
export class DashboardComponent {
    constructor(datePipe) {
        this.datePipe = datePipe;
        this.scheduleData = [];
        this.classData = [];
        this.filteredClassData = [];
        this.selectedButtonForClass = '2';
        this.globalAnnouncementList = [];
        this.buttonName = [{ name: 'In-Progress', id: '2', count: '0', className: 'inProgress_button', badge_class: 'badge-warning', active: true },
            { name: 'Upcoming', id: '4', count: '0', className: 'upcoming_button ml-2', badge_class: 'badge-info', active: false },
            { name: 'Completed', id: '3', count: '0', className: 'completed_button ml-2', badge_class: 'badge-success', active: false }];
        this.overdueTask = [];
        this.recentTask = [];
        this.recentScore = [];
        this.recentUpdate = [];
        this.days = [
            { id: 1, day: 'M', value: 'Mon' },
            { id: 2, day: 'T', value: 'Tue' },
            { id: 3, day: 'W', value: 'Wed' },
            { id: 4, day: 'T', value: 'Thu' },
            { id: 5, day: 'F', value: 'Fri' },
            { id: 6, day: 'S', value: 'Sat' },
            { id: 7, day: 'S', value: 'Sun' },
        ];
        this.auth = inject(AuthService);
        this.classes = inject(ClassService);
        this.router = inject(Router);
        this.sseClient = inject(SseClient);
        this.newSubject = inject(NewsubjectService);
        this.subscriptions = [];
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
                const dayMap = { Mon: '1', Tue: '2', Wed: '3', Thu: '4', Fri: '5', Sat: '6', Sun: '7' };
                classListData.classList.forEach((item) => {
                    const processMessage = (count, messageType, messages) => {
                        if (count !== 0) {
                            this.recentUpdate.push({
                                class_id: item.class_id,
                                class_name: item.class_name,
                                message_type: messageType,
                                message: messages.pop(),
                            });
                        }
                    };
                    processMessage(item.inbox_count, 'inbox', item.inbox_message);
                    processMessage(item.announcement_count, 'announcement', item.announcement_message);
                    item.availabilityDate.forEach((items) => {
                        items.inbox_count = item.inbox_count;
                        items.announcement_count = item.announcement_count;
                        if (items.slotday === dayMap[todayDate] && item.status == '2') {
                            this.scheduleData.push(items);
                        }
                    });
                });
                this.filteredClassData = classListData.classList.filter((value) => {
                    return value.status == this.selectedButtonForClass;
                });
                console.log(this.scheduleData, 'sss');
                console.log(this.recentUpdate, 'recentUpdate');
                console.log(this.filteredClassData, 'filterClassData');
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
    static { this.ɵfac = function DashboardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardComponent)(i0.ɵɵdirectiveInject(i1.DatePipe)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 91, vars: 22, consts: [["class", "col-12 px-2", 4, "ngIf"], [1, "col-4"], [1, "row"], [1, "col-12", "px-2"], [1, "card", 2, "background", "#f7f6f8", "border-radius", "16px"], [1, "card-body", "p-4"], [1, "row", "px-2", "align-items-center", "justify-content-between", "pb-3"], [1, "d-flex"], [1, "d-flex", 3, "icon"], [1, "font-weight-bold", "color-primary", "ml-1"], [1, "text-right", "cursor", 2, "font-size", "10px", 3, "click"], ["class", "row d-flex justify-content-center align-items-center", 4, "ngIf"], ["class", "row px-2 div-height", 4, "ngIf"], [1, "row", "px-2", "align-items-center", "justify-content-between"], [1, "row", "my-3", "px-1"], [3, "ngClass", "class", "click", 4, "ngFor", "ngForOf"], ["class", "row px-2 div-height2", 4, "ngIf"], [1, "col-12", "px-2", "mt-1"], [1, "d-flex", "align-items-center", 2, "font-size", "10px"], [1, "fa", "fa-square", 2, "color", "#00a8ff !important", "font-size", "14px !important"], [1, "fa", "fa-square", 2, "color", "#81ba00 !important", "font-size", "14px !important"], [1, "fa", "fa-square", 2, "color", "#13c9ca !important", "font-size", "14px !important"], [1, "fa", "fa-square", 2, "color", "#F8C269 !important", "font-size", "14px !important"], [1, "col-12", "mt-1", "px-2"], [1, "fa", "fa-square", 2, "color", "#e6baea !important", "font-size", "14px !important"], [1, "fa", "fa-square", 2, "color", "#8d6eeb !important", "font-size", "14px !important"], [1, "row", "px-2", "div-height"], ["class", "col-12 cursor card dashboard-hover px-0", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-body"], [1, "marquee"], [1, "marquee-item"], [4, "ngFor", "ngForOf"], [1, "font-weight-bold"], [1, "color-primary"], [1, "row", "d-flex", "justify-content-center", "align-items-center"], [1, "col-12", "mt-4"], [1, "nodataList", "border-0"], ["class", "col-12 cursor card dashboard-hover dashboard-card_even px-0", 4, "ngFor", "ngForOf"], [1, "col-12", "cursor", "card", "dashboard-hover", "dashboard-card_even", "px-0"], [1, "color-primary", "align-self-center", "mb-0", 2, "font-size", "14px", "line-height", "20px"], [1, "row", 2, "margin-top", "10px"], [1, "mb-0", "fs-12", "col-6"], [1, "col-6", "text-right", "align-self-center"], ["title", "New Announcement", 1, "fa", "fa-bullhorn", "color-primary", "mr-1"], [1, "upload-count"], ["title", "New Inbox Message", 1, "fa", "fa-commenting-o", "color-primary", "mr-1"], ["title", "Enter Online Class", 1, "fa", "fa-video-camera", "mr-1"], ["title", "Class Info", 1, "fa", "fa-info", "mr-1"], [3, "click", "ngClass"], [1, "row", "px-2", "div-height2"], [1, "col-12", "cursor", "card", "dashboard-hover", "px-0", 3, "ngClass"], [1, "mb-0", "fs-12", "pr-0", 2, "line-height", "18px"], [1, "mb-0", "col-12", "text-right", "align-self-center"], ["style", "color: #817d7d; padding: 6px 8px; margin-left: 4px; margin-right: 4px", "class", "circle_design fs-10", 3, "title", "ngClass", 4, "ngFor", "ngForOf"], [1, "circle_design", "fs-10", 2, "color", "#817d7d", "padding", "6px 8px", "margin-left", "4px", "margin-right", "4px", 3, "title", "ngClass"], [1, "col-12"], ["class", "col-12 card px-0", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-12", "card", "px-0", 3, "ngClass"], [1, "fs-12", "mb-0", 2, "line-height", "18px"], [1, "d-flex", "align-items-center", "justify-content-end"], [1, "badge", "badge-warning", 2, "background-color", "#5FAE99"], [1, "color-primary", "align-self-center", "mb-0", 2, "font-size", "14px", "line-height", "18px"], [1, "mb-0", "fs-12", 2, "line-height", "18px"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-1"], [1, "fs-12", "mb-0", "text-right", 3, "ngStyle"], ["style", "color: #81ba00", "class", "fs-12 font-weight-bold", 4, "ngIf"], ["class", "badge fs-10 badge-warning", 4, "ngIf"], ["class", "badge badge-info fs-10", 4, "ngIf"], ["class", "badge fs-10 badge-success", 4, "ngIf"], [1, "fs-12", "font-weight-bold", 2, "color", "#81ba00"], [1, "badge", "fs-10", "badge-warning"], [1, "badge", "badge-info", "fs-10"], [1, "badge", "fs-10", "badge-success"], [1, "col-3", "d-flex", "align-items-center", "justify-content-center"], ["class", "fa fa fa-bullhorn", "style", "font-size: 35px; color: #8d6eeb !important;", 4, "ngIf"], ["class", "msg-img", "alt", "Default Image", 3, "src", 4, "ngIf"], [1, "col-9", "pl-0", "align-self-center"], ["class", "m-0 color-primary", 4, "ngIf"], ["class", "announcement_notes m-0", 3, "innerHTML", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-between", "text-secondary"], [4, "ngIf"], [1, "fa", "fa", "fa-bullhorn", 2, "font-size", "35px", "color", "#8d6eeb !important"], ["alt", "Default Image", 1, "msg-img", 3, "src"], [1, "m-0", "color-primary"], [1, "announcement_notes", "m-0", 3, "innerHTML"], ["class", "col-12 cursor card dashboard-hover dashboard-card_odd px-0", 4, "ngFor", "ngForOf"], [1, "col-12", "cursor", "card", "dashboard-hover", "dashboard-card_odd", "px-0"], ["style", "color: red", "class", "fs-12 font-weight-bold", 4, "ngIf"], [1, "fs-12", "font-weight-bold", 2, "color", "red"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section");
            i0.ɵɵtemplate(1, DashboardComponent_div_1_Template, 6, 1, "div", 0);
            i0.ɵɵelementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7);
            i0.ɵɵelement(9, "app-feather-icons", 8);
            i0.ɵɵelementStart(10, "span", 9);
            i0.ɵɵtext(11, "Today's Schedule");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "span", 10);
            i0.ɵɵlistener("click", function DashboardComponent_Template_span_click_12_listener() { return ctx.routePage("schedule"); });
            i0.ɵɵelementStart(13, "a");
            i0.ɵɵtext(14, "View Details");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(15, DashboardComponent_div_15_Template, 4, 0, "div", 11)(16, DashboardComponent_div_16_Template, 2, 1, "div", 12);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(17, "div", 1)(18, "div", 2)(19, "div", 3)(20, "div", 4)(21, "div", 5)(22, "div", 13)(23, "div", 7);
            i0.ɵɵelement(24, "app-feather-icons", 8);
            i0.ɵɵelementStart(25, "span", 9);
            i0.ɵɵtext(26, "My Classes");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "span", 10);
            i0.ɵɵlistener("click", function DashboardComponent_Template_span_click_27_listener() { return ctx.routePage("class"); });
            i0.ɵɵelementStart(28, "a");
            i0.ɵɵtext(29, "View All");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(30, "div", 14);
            i0.ɵɵtemplate(31, DashboardComponent_button_31_Template, 4, 11, "button", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(32, DashboardComponent_div_32_Template, 4, 1, "div", 11)(33, DashboardComponent_div_33_Template, 2, 1, "div", 16);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(34, "div", 17)(35, "div", 4)(36, "div", 5)(37, "div", 6)(38, "div", 7)(39, "span", 9);
            i0.ɵɵtext(40, "Recent Scores");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(41, "span", 18);
            i0.ɵɵelement(42, "i", 19);
            i0.ɵɵtext(43, "- Assignment ");
            i0.ɵɵelement(44, "i", 20);
            i0.ɵɵtext(45, "- Assessment ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(46, DashboardComponent_div_46_Template, 4, 0, "div", 11)(47, DashboardComponent_div_47_Template, 2, 1, "div", 12);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(48, "div", 1)(49, "div", 2)(50, "div", 3)(51, "div", 4)(52, "div", 5)(53, "div", 6)(54, "div", 7);
            i0.ɵɵelement(55, "app-feather-icons", 8);
            i0.ɵɵelementStart(56, "span", 9);
            i0.ɵɵtext(57, "Recent Tasks");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(58, "span", 18);
            i0.ɵɵelement(59, "i", 21);
            i0.ɵɵtext(60, "- Not Started ");
            i0.ɵɵelement(61, "i", 22);
            i0.ɵɵtext(62, "- In-Porgress ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(63, DashboardComponent_div_63_Template, 4, 0, "div", 11)(64, DashboardComponent_div_64_Template, 2, 1, "div", 12);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(65, "div", 23)(66, "div", 4)(67, "div", 5)(68, "div", 6)(69, "div", 7);
            i0.ɵɵelement(70, "app-feather-icons", 8);
            i0.ɵɵelementStart(71, "span", 9);
            i0.ɵɵtext(72, "Recent Update");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(73, "span", 18);
            i0.ɵɵelement(74, "i", 24);
            i0.ɵɵtext(75, "- Inbox ");
            i0.ɵɵelement(76, "i", 25);
            i0.ɵɵtext(77, "- Announcement ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(78, DashboardComponent_div_78_Template, 4, 0, "div", 11);
            i0.ɵɵelementStart(79, "div", 26);
            i0.ɵɵtemplate(80, DashboardComponent_div_80_Template, 14, 10, "div", 27);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(81, "div", 23)(82, "div", 4)(83, "div", 5)(84, "div", 6)(85, "div", 7);
            i0.ɵɵelement(86, "app-feather-icons", 8);
            i0.ɵɵelementStart(87, "span", 9);
            i0.ɵɵtext(88, "Overdue Tasks");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(89, DashboardComponent_div_89_Template, 4, 0, "div", 11)(90, DashboardComponent_div_90_Template, 2, 1, "div", 12);
            i0.ɵɵelementEnd()()()()()();
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
            i0.ɵɵadvance(8);
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
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgStyle, i2.FeatherIconsComponent, i1.DatePipe], styles: ["section[_ngcontent-%COMP%] {\n  height: max-content !important;\n  background-repeat: round;\n  padding: 18px;\n  object-fit: contain;\n}\n\n.dashboard-announcement-card[_ngcontent-%COMP%] {\n  border-left: 10px solid #8d6eeb !important;\n}\n\n.dashboard-hover[_ngcontent-%COMP%]:hover {\n  display: absolute;\n  transform: scale(1.046);\n  z-index: 999;\n  box-shadow: 2px 2px 2px #e8eaed;\n}\n\n\nsvg[_ngcontent-%COMP%] {\n  width: 14px !important;\n  height: 14px !important;\n}\n\n.dashboard-button[_ngcontent-%COMP%] {\n  padding: 8px 10px !important;\n  font-size: 12px;\n  color: #8F008A;\n  border: 1px solid #8F008A;\n  border-radius: 24px;\n  background: #FFFFFF;\n}\n\n.completed_button[_ngcontent-%COMP%] {\n  color: #81ba00 !important;\n  border: 1px solid #81ba00 !important;\n}\n\n.completed_button[_ngcontent-%COMP%]:hover, .completed_button.active[_ngcontent-%COMP%] {\n  background: #81ba00;\n  color: #FFFFFF !important;\n\n  .badge-success {\n    background-color: #FFFFFF !important;\n    color: #81ba00 !important;\n  }\n}\n\n.upcoming_button[_ngcontent-%COMP%] {\n  color: #00A8FF !important;\n  border: 1px solid #00A8FF !important;\n}\n\n.upcoming_button[_ngcontent-%COMP%]:hover, .upcoming_button.active[_ngcontent-%COMP%] {\n  background: #00A8FF;\n  color: #FFFFFF !important;\n\n  .badge-info {\n    background-color: #FFFFFF !important;\n    color: #00A8FF !important;\n  }\n}\n\n.inProgress_button[_ngcontent-%COMP%] {\n  color: #ffc107 !important;\n  border: 1px solid #ffc107 !important;\n}\n\n.inProgress_button[_ngcontent-%COMP%]:hover, .inProgress_button.active[_ngcontent-%COMP%] {\n  background: #ffc107;\n  color: #FFFFFF !important;\n\n  .badge-warning {\n    background-color: #FFFFFF !important;\n    color: #ffc107 !important;\n  }\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.dashboard.masonry-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n  align-items: start;\n}\n\n.circle_design[_ngcontent-%COMP%] {\n  background: #f1f1f4;\n  border-radius: 50%;\n  padding: 4px 6px;\n}\n\n.msg-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  box-shadow: 0 0 15px #1e1e2017;\n  border-radius: 50%;\n  cursor: default;\n}\n\n.scheduledDate[_ngcontent-%COMP%] {\n  background: #5FAE99;\n  color: #FFFFFF !important;\n  font-weight: 700;\n}\n\ni[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-left: 6px;\n  margin-right: 6px !important;\n  border-radius: 50%;\n  color: #5FAE99 !important;\n}\n\n.dashboard-card_inProgress[_ngcontent-%COMP%] {\n  border-left: 10px solid #F8C269 !important;\n}\n\n.dashboard-card_upcoming[_ngcontent-%COMP%] {\n  border-left: 10px solid #00A8FF !important;\n}\n\n.dashboard-card_completed[_ngcontent-%COMP%] {\n  border-left: 10px solid #81ba00 !important;\n}\n\n.dashboard-card_odd[_ngcontent-%COMP%] {\n  border-left: 10px solid #e6baea !important;\n}\n\n.dashboard-card_even[_ngcontent-%COMP%] {\n  border-left: 10px solid #864BA7 !important;\n}\n\n.upload-count[_ngcontent-%COMP%] {\n  padding: 4px 6px;\n  margin-left: -8px;\n  font-size: 10px;\n  color: #fff;\n  font-weight: 400;\n  border-radius: 50%;\n  position: relative;\n  top: -12px !important;\n  background: #5FAE99;\n}\n\n.div-height[_ngcontent-%COMP%] {\n  max-height: 20rem;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n\n.div-height[_ngcontent-%COMP%]:hover {\n  overflow-y: auto !important;\n  overflow-x: hidden;\n}\n\n.div-height1[_ngcontent-%COMP%] {\n  max-height: 25rem;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n\n.div-height1[_ngcontent-%COMP%]:hover {\n  overflow-y: auto !important;\n  overflow-x: hidden;\n}\n\ndiv-height2[_ngcontent-%COMP%] {\n  max-height: 30rem;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n\n.div-height2[_ngcontent-%COMP%]:hover {\n  overflow-y: auto !important;\n  overflow-x: hidden;\n}\n\n.marquee[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  display: flex;\n}\n\n.marquee-item[_ngcontent-%COMP%] {\n  flex: none;\n  padding-left: 100%;\n  animation: _ngcontent-%COMP%_animate 25s linear infinite;\n}\n\n//.marquee[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n//  padding-left: 100%;\n//  display: inline-block;\n//  animation: _ngcontent-%COMP%_animate 20s linear infinite;\n//}\n\n.marquee[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{\n  animation-play-state: paused;\n}\n\n@keyframes _ngcontent-%COMP%_animate {\n  100% {\n    transform: translate(-100%, 0);\n  }\n}\n\n.recent_inProgress[_ngcontent-%COMP%] {\n  border-left: 10px solid #F8C269;\n}\n\n.recent_not_started[_ngcontent-%COMP%] {\n  border-left: 10px solid #13c9ca;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardComponent, [{
        type: Component,
        args: [{ selector: 'app-dashboard', standalone: false, template: "<section class=\"row dashboard_section py-{{globalAnnouncementList.length != 0 ? '4' : '5'}} dashboard px-4\">\n\n    <div class=\"col-12 px-2\" *ngIf=\"globalAnnouncementList.length != 0\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"marquee\">\n                    <div class=\"marquee-item\">\n                        <span *ngFor=\"let announcement of globalAnnouncementList; let i = index; let last = last\">\n                            <span class=\"font-weight-bold\">{{ announcement.title + ' - ' }}</span>\n                            <span class=\"color-primary\"> {{(announcement.description ?? '') }} {{globalAnnouncementList.length > 1 && !last ? ', ' : ''}}</span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-4\">\n        <div class=\"row\">\n            <div class=\"col-12 px-2\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-body p-4\">\n                        <div class=\"row px-2 align-items-center justify-content-between pb-3\">\n                            <div class=\"d-flex\">\n                                <app-feather-icons class=\"d-flex\" [icon]=\"'calendar'\"></app-feather-icons>\n                                <span class=\"font-weight-bold color-primary ml-1\">Today's Schedule</span>\n                            </div>\n                            <span (click)=\"routePage('schedule')\" class=\"text-right cursor\" style=\"font-size: 10px\">\n                        <a>View Details</a></span>\n                        </div>\n                        <div class=\"row d-flex justify-content-center align-items-center\" *ngIf=\"scheduleData.length == 0\">\n                            <div class=\"col-12 mt-4\">\n                                <button class=\"nodataList border-0\">No Schedule Available!</button>\n                            </div>\n                        </div>\n                        <div class=\"row px-2 div-height\" *ngIf=\"scheduleData.length != 0\">\n                            <div class=\"col-12 cursor card dashboard-hover dashboard-card_even px-0\" *ngFor=\"let item of scheduleData; let j = index; let even = even\">\n                                <div class=\"card-body\">\n                                    <h5 style=\"font-size: 14px;line-height: 20px\" class=\"color-primary align-self-center mb-0\">{{item.class_name}}</h5>\n                                    <div class=\"row\" style=\"margin-top: 10px\">\n                                        <h6 class=\"mb-0 fs-12 col-6\">{{item.slotstarttime + ' - ' + item.slotendtime}}</h6>\n                                        <div class=\"col-6 text-right align-self-center\">\n                                            <i class=\"fa fa-bullhorn color-primary mr-1\" title=\"New Announcement\">\n                                                <span class=\"upload-count\">{{item.announcement_count ?? '0'}}</span>\n                                            </i>\n                                            <i class=\"fa fa-commenting-o color-primary mr-1\" title=\"New Inbox Message\">\n                                                <span class=\"upload-count\">{{item.inbox_count ?? '0'}}</span>\n                                            </i>\n                                            <i class=\"fa fa-video-camera mr-1\" title=\"Enter Online Class\"></i>\n                                            <i class=\"fa fa-info mr-1\" title=\"Class Info\"></i>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n    <div class=\"col-4\">\n        <div class=\"row\">\n            <div class=\"col-12 px-2\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-body p-4\">\n                        <div class=\"row px-2 align-items-center justify-content-between\">\n                            <div class=\"d-flex\">\n                                <app-feather-icons class=\"d-flex\" [icon]=\"'book'\"></app-feather-icons>\n                                <span class=\"font-weight-bold color-primary ml-1\">My Classes</span>\n                            </div>\n                            <span (click)=\"routePage('class')\" class=\"text-right cursor\" style=\"font-size: 10px\">\n                            <a>View All</a></span>\n                        </div>\n                        <div class=\"row my-3 px-1\">\n                            <button *ngFor=\"let data of buttonName\" (click)=\"updateClassData(data.id)\" [ngClass]=\"{'active': data.active}\"\n                                    class=\"dashboard-button {{data.className}}\">{{data.name}}<span class=\"badge {{data.badge_class}} ml-1\">{{data.count}}</span></button>\n                        </div>\n                        <div class=\"row d-flex justify-content-center align-items-center\" *ngIf=\"filteredClassData.length == 0\">\n                            <div class=\"col-12 mt-4\">\n                                <button class=\"nodataList border-0\">No {{selectedButtonForClass == '2' ? 'In-Progress' : selectedButtonForClass == '4' ? 'Upcoming' : 'Completed'}} Class Available!</button>\n                            </div>\n                        </div>\n                        <div class=\"row px-2 div-height2\" *ngIf=\"filteredClassData.length != 0\">\n                            <div [ngClass]=\"{'dashboard-card_inProgress' : selectedButtonForClass == '2', 'dashboard-card_upcoming' : selectedButtonForClass == '4', 'dashboard-card_completed' : selectedButtonForClass == '3'}\"\n                                 class=\"col-12 cursor card dashboard-hover px-0\" *ngFor=\"let item of filteredClassData; let j = index\">\n                                <div class=\"card-body\">\n                                    <h5 style=\"font-size: 14px;line-height: 20px\" class=\"color-primary align-self-center mb-0\">{{item.class_name}}</h5>\n                                    <h6 style=\"line-height: 18px\" class=\"mb-0 fs-12 pr-0\">{{item.subject_name}}</h6>\n                                    <div class=\"row\">\n                                        <h6 class=\"mb-0 col-12 text-right align-self-center\">\n                                            <span [title]=\"returnDayTitle(item, day.id, day.value)\" [ngClass]=\"{'scheduledDate': checkAvailabilityDate(item, day.id)}\"\n                                                    style=\"color: #817d7d; padding: 6px 8px; margin-left: 4px; margin-right: 4px\"\n                                                  class=\"circle_design fs-10\" *ngFor=\"let day of days;\">{{day.day}}</span>\n                                        </h6>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 px-2 mt-1\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-body p-4\">\n                        <div class=\"row px-2 align-items-center justify-content-between pb-3\">\n                            <div class=\"d-flex\">\n                                <span class=\"font-weight-bold color-primary ml-1\">Recent Scores</span>\n                            </div>\n                            <span class=\"d-flex align-items-center\" style=\"font-size: 10px\">\n                                <i style=\"color: #00a8ff !important;font-size: 14px !important;\" class=\"fa fa-square\"></i>- Assignment\n                                <i style=\"color: #81ba00 !important;font-size: 14px !important;\" class=\"fa fa-square\"></i>- Assessment\n                            </span>\n                        </div>\n                        <div class=\"row d-flex justify-content-center align-items-center\" *ngIf=\"recentScore.length == 0\">\n                            <div class=\"col-12\">\n                                <button class=\"nodataList border-0\">No Recent Score released!</button>\n                            </div>\n                        </div>\n                        <div class=\"row px-2 div-height\" *ngIf=\"recentScore.length != 0\">\n                            <div [ngClass]=\"{'dashboard-card_upcoming' : item.content_type == '2', 'dashboard-card_completed' : item.content_type == '3'}\"\n                                 class=\"col-12 card px-0\" *ngFor=\"let item of recentScore; let j = index\">\n                                <div class=\"card-body\">\n                                    <h5 style=\"font-size: 14px;line-height: 20px\" class=\"color-primary align-self-center mb-0\">{{item.content_name}}</h5>\n                                    <h6 style=\"line-height: 18px\" class=\"fs-12 mb-0\">{{item.class_name}}</h6>\n                                    <div class=\"d-flex align-items-center justify-content-end\">\n                                        <span style=\"background-color: #5FAE99\" class=\"badge badge-warning\">\n                                            {{item.obtained_score}} / {{item.total_score}}</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-4\">\n        <div class=\"row\">\n            <div class=\"col-12 px-2\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-body p-4\">\n                        <div class=\"row px-2 align-items-center justify-content-between pb-3\">\n                            <div class=\"d-flex\">\n                                <app-feather-icons class=\"d-flex\" [icon]=\"'rotate-cw'\"></app-feather-icons>\n                                <span class=\"font-weight-bold color-primary ml-1\">Recent Tasks</span>\n                            </div>\n                            <span class=\"d-flex align-items-center\" style=\"font-size: 10px\">\n                                <i style=\"color: #13c9ca !important;font-size: 14px !important;\" class=\"fa fa-square\"></i>- Not Started\n                                <i style=\"color: #F8C269 !important;font-size: 14px !important;\" class=\"fa fa-square\"></i>- In-Porgress\n                            </span>\n                        </div>\n                        <div class=\"row d-flex justify-content-center align-items-center\" *ngIf=\"recentTask.length == 0\">\n                            <div class=\"col-12\">\n                                <button class=\"nodataList border-0\">No Recent Task Available!</button>\n                            </div>\n                        </div>\n                        <div class=\"row px-2 div-height\" *ngIf=\"recentTask.length != 0\">\n                            <div [ngClass]=\"{'recent_inProgress' : item.student_content_status == '2',\n                            'recent_not_started' : item.student_content_status == '1', 'dashboard-card_odd' : item.content_type == 1}\"\n                                 class=\"col-12 cursor card dashboard-hover px-0\" *ngFor=\"let item of recentTask; let j = index\">\n                                <div class=\"card-body\">\n                                    <h5 style=\"font-size: 14px; line-height: 18px\" class=\"color-primary align-self-center mb-0\">{{item.content_name}}</h5>\n                                    <h6 style=\"line-height: 18px\" class=\"mb-0 fs-12\">{{item.class_name}}</h6>\n                                    <div class=\"d-flex justify-content-between align-items-center mt-1\">\n                                        <h6 [ngStyle]=\"{'visibility': item.end_date != '0000-00-00' ? 'none' : 'hidden'}\"\n                                            class=\"fs-12 mb-0 text-right\">Due Date:\n                                            <span *ngIf=\"item.end_date != '0000-00-00'\" style=\"color: #81ba00\" class=\"fs-12 font-weight-bold\">\n                                                {{item.end_date | date : 'MM/dd/yyyy'}}, {{item.end_time}}</span></h6>\n                                        <span *ngIf=\"item.content_type == '1'\" class=\"badge fs-10 badge-warning\">Resource</span>\n                                        <span *ngIf=\"item.content_type == '2'\" class=\"badge badge-info fs-10\">Assignment</span>\n                                        <span *ngIf=\"item.content_type == '3'\" class=\"badge fs-10 badge-success\">Assessment</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-12 mt-1 px-2\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-body p-4\">\n                        <div class=\"row px-2 align-items-center justify-content-between pb-3\">\n                            <div class=\"d-flex\">\n                                <app-feather-icons class=\"d-flex\" [icon]=\"'bell'\"></app-feather-icons>\n                                <span class=\"font-weight-bold color-primary ml-1\">Recent Update</span>\n                            </div>\n                            <span class=\"d-flex align-items-center\" style=\"font-size: 10px\">\n                                <i style=\"color: #e6baea !important;font-size: 14px !important;\" class=\"fa fa-square\"></i>- Inbox\n                                <i style=\"color: #8d6eeb !important;font-size: 14px !important;\" class=\"fa fa-square\"></i>- Announcement\n                            </span>\n                        </div>\n                        <div class=\"row d-flex justify-content-center align-items-center\" *ngIf=\"recentUpdate.length == 0\">\n                            <div class=\"col-12\">\n                                <button class=\"nodataList border-0\">No Recent Updates!</button>\n                            </div>\n                        </div>\n                        <div class=\"row px-2 div-height\">\n                            <div [ngClass]=\"{'dashboard-card_odd' : item.message_type == 'inbox', 'dashboard-announcement-card ' : item.message_type != 'inbox'}\"\n                                 class=\"col-12 cursor card dashboard-hover px-0\" *ngFor=\"let item of recentUpdate; let j = index\">\n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-3 d-flex align-items-center justify-content-center\">\n                                            <i *ngIf=\"item.message_type != 'inbox'\" class=\"fa fa fa-bullhorn\" style=\"font-size: 35px; color: #8d6eeb !important;\"></i>\n                                            <img *ngIf=\"item.message_type == 'inbox'\" class=\"msg-img\" [src]=\"'assets/images/dashboard/default.png'\" alt=\"Default Image\">\n                                       </div>\n                                       <div class=\"col-9 pl-0 align-self-center\">\n                                           <p *ngIf=\"item.message_type == 'inbox'\" class=\"m-0 color-primary\">{{item.message.body}}</p>\n                                           <p class=\"announcement_notes m-0\" *ngIf=\"item.message_type != 'inbox'\" [innerHTML]=\"item.message.note\"></p>\n                                           <small class=\"d-flex align-items-center justify-content-between text-secondary\"><span>Sridhar</span>\n                                               <span *ngIf=\"item.message_type == 'inbox'\">{{item.message.created_date | date : 'MM/dd/yyyy, h:mm a'}}</span>\n                                               <span *ngIf=\"item.message_type != 'inbox'\">Dec 23, 2024 | 12:00 AM</span>\n                                           </small>\n                                       </div>\n                                   </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-12 mt-1 px-2\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-body p-4\">\n                        <div class=\"row px-2 align-items-center justify-content-between pb-3\">\n                            <div class=\"d-flex\">\n                                <app-feather-icons class=\"d-flex\" [icon]=\"'alert-circle'\"></app-feather-icons>\n                                <span class=\"font-weight-bold color-primary ml-1\">Overdue Tasks</span>\n                            </div>\n                        </div>\n                        <div class=\"row d-flex justify-content-center align-items-center\" *ngIf=\"overdueTask.length == 0\">\n                            <div class=\"col-12\">\n                                <button class=\"nodataList border-0\">No Overdue Task!</button>\n                            </div>\n                        </div>\n                        <div class=\"row px-2 div-height\" *ngIf=\"overdueTask.length != 0\">\n                            <div class=\"col-12 cursor card dashboard-hover dashboard-card_odd px-0\" *ngFor=\"let item of overdueTask; let j = index\">\n                                <div class=\"card-body\">\n                                    <h5 style=\"font-size: 14px;line-height: 20px\" class=\"color-primary align-self-center mb-0\">{{item.content_name}}</h5>\n                                    <h6 style=\"line-height: 18px\" class=\"mb-0 fs-12\">{{item.class_name}}</h6>\n                                    <div class=\"d-flex justify-content-between align-items-center mt-1\">\n                                        <h6 [ngStyle]=\"{'visibility': item.end_date != '0000-00-00' ? 'none' : 'hidden'}\"\n                                            class=\"fs-12 mb-0 text-right\">Due Date:\n                                            <span *ngIf=\"item.end_date != '0000-00-00'\" style=\"color: red\" class=\"fs-12 font-weight-bold\">\n                                                {{item.end_date | date : 'MM/dd/yyyy'}}, {{item.end_time}}</span></h6>\n                                        <span *ngIf=\"item.content_type == '1'\" class=\"badge fs-10 badge-warning\">Resource</span>\n                                        <span *ngIf=\"item.content_type == '2'\" class=\"badge badge-info fs-10\">Assignment</span>\n                                        <span *ngIf=\"item.content_type == '3'\" class=\"badge fs-10 badge-success\">Assessment</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</section>\n", styles: ["section {\n  height: max-content !important;\n  background-repeat: round;\n  padding: 18px;\n  object-fit: contain;\n}\n\n.dashboard-announcement-card {\n  border-left: 10px solid #8d6eeb !important;\n}\n\n.dashboard-hover:hover {\n  display: absolute;\n  transform: scale(1.046);\n  z-index: 999;\n  box-shadow: 2px 2px 2px #e8eaed;\n}\n\n\nsvg {\n  width: 14px !important;\n  height: 14px !important;\n}\n\n.dashboard-button {\n  padding: 8px 10px !important;\n  font-size: 12px;\n  color: #8F008A;\n  border: 1px solid #8F008A;\n  border-radius: 24px;\n  background: #FFFFFF;\n}\n\n.completed_button {\n  color: #81ba00 !important;\n  border: 1px solid #81ba00 !important;\n}\n\n.completed_button:hover, .completed_button.active {\n  background: #81ba00;\n  color: #FFFFFF !important;\n\n  .badge-success {\n    background-color: #FFFFFF !important;\n    color: #81ba00 !important;\n  }\n}\n\n.upcoming_button {\n  color: #00A8FF !important;\n  border: 1px solid #00A8FF !important;\n}\n\n.upcoming_button:hover, .upcoming_button.active {\n  background: #00A8FF;\n  color: #FFFFFF !important;\n\n  .badge-info {\n    background-color: #FFFFFF !important;\n    color: #00A8FF !important;\n  }\n}\n\n.inProgress_button {\n  color: #ffc107 !important;\n  border: 1px solid #ffc107 !important;\n}\n\n.inProgress_button:hover, .inProgress_button.active {\n  background: #ffc107;\n  color: #FFFFFF !important;\n\n  .badge-warning {\n    background-color: #FFFFFF !important;\n    color: #ffc107 !important;\n  }\n}\n\nbutton:focus {\n  outline: none !important;\n}\n\n.dashboard.masonry-layout {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n  align-items: start;\n}\n\n.circle_design {\n  background: #f1f1f4;\n  border-radius: 50%;\n  padding: 4px 6px;\n}\n\n.msg-img {\n  width: 50px;\n  height: 50px;\n  box-shadow: 0 0 15px #1e1e2017;\n  border-radius: 50%;\n  cursor: default;\n}\n\n.scheduledDate {\n  background: #5FAE99;\n  color: #FFFFFF !important;\n  font-weight: 700;\n}\n\ni {\n  font-size: 18px;\n  margin-left: 6px;\n  margin-right: 6px !important;\n  border-radius: 50%;\n  color: #5FAE99 !important;\n}\n\n.dashboard-card_inProgress {\n  border-left: 10px solid #F8C269 !important;\n}\n\n.dashboard-card_upcoming {\n  border-left: 10px solid #00A8FF !important;\n}\n\n.dashboard-card_completed {\n  border-left: 10px solid #81ba00 !important;\n}\n\n.dashboard-card_odd {\n  border-left: 10px solid #e6baea !important;\n}\n\n.dashboard-card_even {\n  border-left: 10px solid #864BA7 !important;\n}\n\n.upload-count {\n  padding: 4px 6px;\n  margin-left: -8px;\n  font-size: 10px;\n  color: #fff;\n  font-weight: 400;\n  border-radius: 50%;\n  position: relative;\n  top: -12px !important;\n  background: #5FAE99;\n}\n\n.div-height {\n  max-height: 20rem;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n\n.div-height:hover {\n  overflow-y: auto !important;\n  overflow-x: hidden;\n}\n\n.div-height1 {\n  max-height: 25rem;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n\n.div-height1:hover {\n  overflow-y: auto !important;\n  overflow-x: hidden;\n}\n\ndiv-height2 {\n  max-height: 30rem;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n\n.div-height2:hover {\n  overflow-y: auto !important;\n  overflow-x: hidden;\n}\n\n.marquee {\n  white-space: nowrap;\n  overflow: hidden;\n  display: flex;\n}\n\n.marquee-item {\n  flex: none;\n  padding-left: 100%;\n  animation: animate 25s linear infinite;\n}\n\n//.marquee div {\n//  padding-left: 100%;\n//  display: inline-block;\n//  animation: animate 20s linear infinite;\n//}\n\n.marquee:hover div{\n  animation-play-state: paused;\n}\n\n@keyframes animate {\n  100% {\n    transform: translate(-100%, 0);\n  }\n}\n\n.recent_inProgress {\n  border-left: 10px solid #F8C269;\n}\n\n.recent_not_started {\n  border-left: 10px solid #13c9ca;\n}\n"] }]
    }], () => [{ type: i1.DatePipe }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardComponent, { className: "DashboardComponent" }); })();
//# sourceMappingURL=dashboard.component.js.map