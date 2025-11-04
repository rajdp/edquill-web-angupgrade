import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../shared/service/auth.service";
import * as i3 from "../../../shared/service/class.service";
import * as i4 from "@angular/router";
import * as i5 from "../../../shared/components/feather-icons/feather-icons.component";
const _c0 = a0 => ({ "active": a0 });
function Dashboard1Component_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 22)(2, "button", 23);
    i0.ɵɵtext(3, "No Schedule Available!");
    i0.ɵɵelementEnd()()();
} }
function Dashboard1Component_div_15_div_1_i_12_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 36);
    i0.ɵɵlistener("click", function Dashboard1Component_div_15_div_1_i_12_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r1); const item_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.redirectToAnnouncement(item_r2, $event, "announcement")); });
    i0.ɵɵelementStart(1, "span", 37);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r2.new_comments ? item_r2.new_comments : 0);
} }
function Dashboard1Component_div_15_div_1_i_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 38);
    i0.ɵɵlistener("click", function Dashboard1Component_div_15_div_1_i_13_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r4); const item_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.auth.getRoleId() == "5" ? ctx_r2.redirectToAnnouncement(item_r2, $event, "inbox") : ctx_r2.classDetailsService(item_r2, "inbox", $event)); });
    i0.ɵɵelementStart(1, "span", 37);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r2.newMessage ? item_r2.newMessage : 0);
} }
function Dashboard1Component_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26)(1, "div", 27)(2, "div", 2)(3, "div", 3)(4, "h5", 28);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 29)(7, "h6", 30);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 31);
    i0.ɵɵelement(10, "i", 32)(11, "i", 33);
    i0.ɵɵtemplate(12, Dashboard1Component_div_15_div_1_i_12_Template, 3, 1, "i", 34)(13, Dashboard1Component_div_15_div_1_i_13_Template, 3, 1, "i", 35);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r2.class_name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r2.start_time + " - " + item_r2.end_time);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", item_r2.announcement_type != "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.auth.getRoleId() != "2");
} }
function Dashboard1Component_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵtemplate(1, Dashboard1Component_div_15_div_1_Template, 14, 4, "div", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.scheduleData);
} }
function Dashboard1Component_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵlistener("click", function Dashboard1Component_button_29_Template_button_click_0_listener() { const data_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.updateClassData(data_r6.id)); });
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
function Dashboard1Component_div_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 22)(2, "button", 23);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("No ", ctx_r2.selectedButtonForClass == "2" ? "In-Progress" : ctx_r2.selectedButtonForClass == "4" ? "Upcoming" : "Completed", " Class Available!");
} }
function Dashboard1Component_div_31_div_1_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p")(1, "span", 49);
    i0.ɵɵtext(2, "Start: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "br");
    i0.ɵɵelementStart(4, "span", 49);
    i0.ɵɵtext(5, "End: ");
    i0.ɵɵelementEnd()();
} }
function Dashboard1Component_div_31_div_1_p_10_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(", ", item_r7.start_time, "");
} }
function Dashboard1Component_div_31_div_1_p_10_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(", ", item_r7.end_time, "");
} }
function Dashboard1Component_div_31_div_1_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p")(1, "span", 49);
    i0.ɵɵtext(2, "Start: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 50);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵtemplate(6, Dashboard1Component_div_31_div_1_p_10_span_6_Template, 2, 1, "span", 45);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "br");
    i0.ɵɵelementStart(8, "span", 49);
    i0.ɵɵtext(9, "End: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 50);
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "date");
    i0.ɵɵtemplate(13, Dashboard1Component_div_31_div_1_p_10_span_13_Template, 2, 1, "span", 45);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(5, 4, item_r7.start_date, "MM/dd/yyyy"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r7.start_time != "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(12, 7, item_r7.end_date, "MM/dd/yyyy"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r7.end_time != "");
} }
function Dashboard1Component_div_31_div_1_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 51);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r8 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r2.dayFromInt(items_r8.slotday) + ": ", "", items_r8.slotstarttime + " - " + items_r8.slotendtime, "");
} }
function Dashboard1Component_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42)(1, "div", 27)(2, "div", 2)(3, "div", 43)(4, "h5", 28);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 44)(7, "h6", 30);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, Dashboard1Component_div_31_div_1_p_9_Template, 6, 0, "p", 45)(10, Dashboard1Component_div_31_div_1_p_10_Template, 14, 10, "p", 45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 46)(12, "div", 2)(13, "div", 47);
    i0.ɵɵtemplate(14, Dashboard1Component_div_31_div_1_span_14_Template, 2, 2, "span", 48);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r7.class_name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r7.subject_name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r7.start_date == "0000-00-00" && item_r7.end_date == "0000-00-00");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r7.start_date != "0000-00-00" && item_r7.end_date != "0000-00-00");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", item_r7.availabilityDate);
} }
function Dashboard1Component_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵtemplate(1, Dashboard1Component_div_31_div_1_Template, 15, 5, "div", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.filteredClassData);
} }
function Dashboard1Component_div_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 3)(2, "button", 23);
    i0.ɵɵtext(3, "No Recent Score released!");
    i0.ɵɵelementEnd()()();
} }
function Dashboard1Component_div_41_div_1_app_feather_icons_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-feather-icons", 58);
} if (rf & 2) {
    i0.ɵɵproperty("icon", "layers");
} }
function Dashboard1Component_div_41_div_1_app_feather_icons_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-feather-icons", 58);
} if (rf & 2) {
    i0.ɵɵproperty("icon", "layers");
} }
function Dashboard1Component_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 53)(1, "div", 27)(2, "div", 13)(3, "div", 54);
    i0.ɵɵtemplate(4, Dashboard1Component_div_41_div_1_app_feather_icons_4_Template, 1, 1, "app-feather-icons", 55)(5, Dashboard1Component_div_41_div_1_app_feather_icons_5_Template, 1, 1, "app-feather-icons", 55);
    i0.ɵɵelementStart(6, "h5", 56);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "span", 57);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", item_r9.type == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r9.type == "2");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r9.class_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r9.score);
} }
function Dashboard1Component_div_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵtemplate(1, Dashboard1Component_div_41_div_1_Template, 10, 4, "div", 52);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.recentScore);
} }
function Dashboard1Component_div_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 3)(2, "button", 23);
    i0.ɵɵtext(3, "No Recent Task Available!");
    i0.ɵɵelementEnd()()();
} }
function Dashboard1Component_div_53_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 65);
    i0.ɵɵtext(1, "Assignment");
    i0.ɵɵelementEnd();
} }
function Dashboard1Component_div_53_div_1_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 66);
    i0.ɵɵtext(1, "Assesment");
    i0.ɵɵelementEnd();
} }
function Dashboard1Component_div_53_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 67);
    i0.ɵɵtext(1, "Resource");
    i0.ɵɵelementEnd();
} }
function Dashboard1Component_div_53_div_1_h6_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 68);
    i0.ɵɵtext(1, "OverDue In: ");
    i0.ɵɵelementStart(2, "span", 69);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r10.daysCount);
} }
function Dashboard1Component_div_53_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42)(1, "div", 27)(2, "div", 60)(3, "h5", 28);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div");
    i0.ɵɵtemplate(6, Dashboard1Component_div_53_div_1_span_6_Template, 2, 0, "span", 61)(7, Dashboard1Component_div_53_div_1_span_7_Template, 2, 0, "span", 62)(8, Dashboard1Component_div_53_div_1_span_8_Template, 2, 0, "span", 63);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 60)(10, "h6", 30);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, Dashboard1Component_div_53_div_1_h6_12_Template, 4, 1, "h6", 64);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r10.name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r10.type == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r10.type == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r10.type == "3");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r10.class_name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r10.daysCount != 0);
} }
function Dashboard1Component_div_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 59);
    i0.ɵɵtemplate(1, Dashboard1Component_div_53_div_1_Template, 13, 6, "div", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.recentTask);
} }
function Dashboard1Component_div_63_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 3)(2, "button", 23);
    i0.ɵɵtext(3, "No Recent Updates!");
    i0.ɵɵelementEnd()()();
} }
function Dashboard1Component_div_64_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 73)(1, "div", 27)(2, "div", 2)(3, "div", 74);
    i0.ɵɵelement(4, "img", 75);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 76)(6, "p", 77);
    i0.ɵɵtext(7, "Study Well for the exam...");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small", 78)(9, "span");
    i0.ɵɵtext(10, "Sridhar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12, "Dec 23, 2024 | 12:00 AM");
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("src", "assets/images/dashboard/default.png", i0.ɵɵsanitizeUrl);
} }
function Dashboard1Component_div_64_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 79)(1, "div", 27)(2, "div", 2)(3, "div", 74);
    i0.ɵɵelement(4, "i", 80);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 76)(6, "p", 81);
    i0.ɵɵtext(7, "Study Well for the exam...");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small", 78)(9, "span");
    i0.ɵɵtext(10, "Sridhar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12, "Dec 23, 2024 | 12:00 AM");
    i0.ɵɵelementEnd()()()()()();
} }
function Dashboard1Component_div_64_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 70);
    i0.ɵɵtemplate(1, Dashboard1Component_div_64_div_1_Template, 13, 1, "div", 71)(2, Dashboard1Component_div_64_div_2_Template, 13, 0, "div", 72);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.scheduleData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.scheduleData);
} }
function Dashboard1Component_div_74_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 3)(2, "button", 23);
    i0.ɵɵtext(3, "No Overdue Task!");
    i0.ɵɵelementEnd()()();
} }
function Dashboard1Component_div_75_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 65);
    i0.ɵɵtext(1, "Assignment");
    i0.ɵɵelementEnd();
} }
function Dashboard1Component_div_75_div_1_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 66);
    i0.ɵɵtext(1, "Assesment");
    i0.ɵɵelementEnd();
} }
function Dashboard1Component_div_75_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42)(1, "div", 27)(2, "div", 60)(3, "h5", 28);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div");
    i0.ɵɵtemplate(6, Dashboard1Component_div_75_div_1_span_6_Template, 2, 0, "span", 61)(7, Dashboard1Component_div_75_div_1_span_7_Template, 2, 0, "span", 62);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 60)(9, "h6", 30);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "h6", 68);
    i0.ɵɵtext(12, "OverDue For: ");
    i0.ɵɵelementStart(13, "span", 82);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r11.name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r11.type == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r11.type == "2");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r11.class_name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r11.daysCount);
} }
function Dashboard1Component_div_75_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 59);
    i0.ɵɵtemplate(1, Dashboard1Component_div_75_div_1_Template, 15, 5, "div", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.overdueTask);
} }
export class Dashboard1Component {
    constructor(datePipe, auth, classes, router) {
        this.datePipe = datePipe;
        this.auth = auth;
        this.classes = classes;
        this.router = router;
        this.scheduleData = [];
        this.classData = [];
        this.filteredClassData = [];
        this.selectedButtonForClass = '2';
        this.buttonName = [{ name: 'In-Progress', id: '2', count: '0', className: 'inProgress_button', badge_class: 'badge-warning', active: true },
            { name: 'Upcoming', id: '4', count: '0', className: 'upcoming_button ml-2', badge_class: 'badge-info', active: false },
            { name: 'Completed', id: '3', count: '0', className: 'completed_button ml-2', badge_class: 'badge-success', active: false }];
        this.overdueTask = [{ name: 'Essay Prompt Testing', class_name: 'Essay_class', type: '1', daysCount: 121 },
            { name: 'CFS', class_name: 'Monday Notification', type: '2', daysCount: 2 },
            { name: 'Prompt 2', class_name: '1_Essay_class', type: '1', daysCount: 11 },
            { name: 'Algebra For Class 5', class_name: 'Ap Calculus', type: '2', daysCount: 45 }];
        this.recentTask = [{ name: 'Essay Prompt Testing', class_name: 'Essay_class', type: '1', daysCount: 2 },
            { name: 'CFS', class_name: 'Monday Notification', type: '2', daysCount: 3 },
            { name: 'CFS - Resource', class_name: 'Algebra Class', type: '3', daysCount: 0 },
            { name: 'Prompt 2', class_name: '1_Essay_class', type: '1', daysCount: 1 },
            { name: 'Algebra For Class 5', class_name: 'Ap Calculus', type: '2', daysCount: 30 },
            { name: 'Schedule', class_name: 'Algebra Class', type: '3', daysCount: 0 }];
        this.recentScore = [{ name: 'Essay Prompt Testing', class_name: 'Essay_class', type: '1', score: 20 },
            { name: 'CFS', class_name: 'Monday Notification', type: '2', score: 30 }];
        this.movies = [{
                name: 'Episode I - A TypeScript class with behaviors such as handling user.',
                isDisable: false
            }, {
                name: 'Episode II - Attack of the Clones',
                isDisable: false
            }, {
                name: 'Episode III - Revenge of the Sixth',
                isDisable: false
            }, {
                name: 'Episode IV - A New Hope',
                isDisable: false
            }, {
                name: 'Episode V - The Empire Strikes Back',
                isDisable: false
            }, {
                name: 'Episode VI - Return of the Jedi',
                isDisable: false
            }
        ];
        this.days = [
            { id: 1, day: 'Mon' },
            { id: 2, day: 'Tue' },
            { id: 3, day: 'Wed' },
            { id: 4, day: 'Thu' },
            { id: 5, day: 'Fri' },
            { id: 6, day: 'Sat' },
            { id: 7, day: 'Sun' },
        ];
        this.getScheduleDetails();
        this.classList();
    }
    delete(index) {
        this.movies.splice(index, 1);
    }
    drop(event) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }
    getScheduleDetails() {
        const date = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            date
        };
        this.classes.overallClassAttendance(data).subscribe((successData) => {
            this.overallClassAttendanceSuccess(successData);
        }, (error) => {
            console.log(error);
        });
    }
    overallClassAttendanceSuccess(successData) {
        if (successData.IsSuccess) {
            const scheduleDataAlt = successData.ResponseObject;
            this.scheduleData = JSON.parse(JSON.stringify(scheduleDataAlt));
            this.scheduleData.forEach((item, index) => {
                console.log(index, 'index');
                if (index == 2) {
                    item.class_name = 'Arya Vikraman - Practice Class For Academy - DO NOT DELETE UNTIL END OF DEC';
                }
            });
        }
    }
    routePage(type) {
        if (type == 'schedule') {
            this.router.navigate(['schedule/daily-schedule']);
        }
        else if (type == 'class') {
            this.router.navigate(['/studentlogin/list-class']);
        }
    }
    classList() {
        const data = {
            platform: 'web',
            type: '1',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
        };
        this.classes.studentClassDashboardList(data).subscribe((successData) => {
            this.classListSuccess(successData);
        }, (error) => {
            console.error(error, 'class_list');
        });
    }
    classListSuccess(successData) {
        if (successData.IsSuccess) {
            this.classData = JSON.stringify(successData.ResponseObject);
            this.buttonName.forEach(button => button.count = '0');
            successData.ResponseObject.forEach(item => {
                const button = this.buttonName.find(btn => btn.id === item.status);
                if (button) {
                    button.count = (parseInt(button.count) + 1).toString();
                }
            });
            this.filteredClassData = successData.ResponseObject.filter((value) => {
                return value.status == this.selectedButtonForClass;
            });
            this.filteredClassData.forEach((item, index) => {
                console.log(index, 'index');
                if (index == 2) {
                    item.class_name = 'Arya Vikraman - Practice Class For Academy - DO NOT DELETE UNTIL END OF DEC';
                }
            });
            console.log(this.filteredClassData);
        }
    }
    updateClassData(id) {
        this.selectedButtonForClass = id;
        this.buttonName.forEach(items => items.active = items.id == id);
        const classData = JSON.parse(this.classData);
        this.filteredClassData = classData.filter((value) => {
            return value.status == id;
        });
    }
    dayFromInt(val) {
        return val == 1 ? 'MON' : val == 2 ? 'TUE' : val == 3 ? 'WED' : val == 4 ? 'THU' : val == 5 ? 'FRI' : val == 6 ? 'SAT' : 'SUN';
    }
    redirectToAnnouncement(value, event, type = '') {
        console.log(value, 'redirectedValue');
        if (this.auth.getRoleId() == '5') {
            this.auth.setSessionData('class-id', value.class_id);
            this.auth.setSessionData('schedule_id', value.schedule_id);
            this.router.navigate(['/studentlogin/class-detail/' + type]);
            event.stopPropagation();
        }
        else {
            console.log(value, 'value');
            this.auth.setSessionData('announcement-class', [value.class_id]);
            this.router.navigate(['/announcement/list/add']);
            event.stopPropagation();
        }
    }
    classDetailsService(value, type = '', event) { }
    static { this.ɵfac = function Dashboard1Component_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Dashboard1Component)(i0.ɵɵdirectiveInject(i1.DatePipe), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.ClassService), i0.ɵɵdirectiveInject(i4.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Dashboard1Component, selectors: [["app-dashboard"]], decls: 76, vars: 19, consts: [[1, "row", "dashboard_section", "py-5", "dashboard", "px-4"], [1, "col-8"], [1, "row"], [1, "col-12"], [1, "card", 2, "background", "#f7f6f8", "border-radius", "16px"], [1, "card-body", "p-4"], [1, "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "d-flex"], [1, "d-flex", 3, "icon"], [1, "font-weight-bold", "color-primary", "ml-1"], [1, "text-right", "cursor", 2, "font-size", "10px", 3, "click"], ["class", "row d-flex justify-content-center align-items-center", 4, "ngIf"], ["class", "row px-4 div-height", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "row", "mt-4"], [3, "ngClass", "class", "click", 4, "ngFor", "ngForOf"], ["class", "row px-2 mt-4", 4, "ngIf"], [1, "col-12", "my-3"], [1, "col-4"], ["class", "row px-3 div-height", 4, "ngIf"], ["class", "row px-3 div-height1", 4, "ngIf"], [1, "row", "d-flex", "justify-content-center", "align-items-center"], [1, "col-12", "mt-4"], [1, "nodataList", "border-0"], [1, "row", "px-4", "div-height"], ["class", "col-12 cursor card dashboard-hover1 dashboard-card px-0", 4, "ngFor", "ngForOf"], [1, "col-12", "cursor", "card", "dashboard-hover1", "dashboard-card", "px-0"], [1, "card-body"], [1, "color-primary", "align-self-center", "mb-0"], [1, "col-7"], [1, "mb-0", "fs-12"], [1, "col-5", "text-right"], ["aria-hidden", "true", 1, "fa", "fa-video-camera", "text-green", "ml-4", 2, "font-size", "1.4rem"], ["aria-hidden", "true", 1, "fa", "fa-info-circle", "text-green", "ml-4", 2, "font-size", "1.4rem"], ["title", "New Announcement", "style", "font-size: 1.4rem", "class", "ml-4 fa fa-bullhorn text-green", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["title", "New Inbox Message", "style", "font-size: 1.4rem", "class", "fa fa-commenting-o text-green ml-4", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["title", "New Announcement", "aria-hidden", "true", 1, "ml-4", "fa", "fa-bullhorn", "text-green", 2, "font-size", "1.4rem", 3, "click"], [1, "upload-count"], ["title", "New Inbox Message", "aria-hidden", "true", 1, "fa", "fa-commenting-o", "text-green", "ml-4", 2, "font-size", "1.4rem", 3, "click"], [3, "click", "ngClass"], [1, "row", "px-2", "mt-4"], ["class", "col-12 cursor card dashboard-hover dashboard-card px-0", 4, "ngFor", "ngForOf"], [1, "col-12", "cursor", "card", "dashboard-hover", "dashboard-card", "px-0"], [1, "col-md-12"], [1, "col-md-6"], [4, "ngIf"], [1, "col-md-6", "d-flex", 2, "justify-content", "flex-end"], [1, "col-12", "mt-2", "d-flex", "flex-wrap", "justify-content-end"], ["class", "badge ml-2 mb-1 p-2", "style", "background-color: #73b5a8; color: white;", 4, "ngFor", "ngForOf"], [1, "font-weight-bold"], [1, "t-name", "font-weight-bold"], [1, "badge", "ml-2", "mb-1", "p-2", 2, "background-color", "#73b5a8", "color", "white"], ["class", "col-12 card px-0", 4, "ngFor", "ngForOf"], [1, "col-12", "card", "px-0"], [1, "d-inline-flex", "align-items-center"], ["class", "d-flex circle_design", 3, "icon", 4, "ngIf"], [1, "color-primary", "align-self-center", "ml-2", "mb-0"], [1, "circle_design", "fs-12", 2, "color", "#00A8FF"], [1, "d-flex", "circle_design", 3, "icon"], [1, "row", "px-3", "div-height"], [1, "d-flex", "justify-content-between", "align-items-center"], ["class", "badge badge-info fs-10 ml-1", 4, "ngIf"], ["class", "badge fs-10 badge-success ml-1", 4, "ngIf"], ["class", "badge fs-10 badge-warning ml-1", 4, "ngIf"], ["class", "fs-12 mb-0", 4, "ngIf"], [1, "badge", "badge-info", "fs-10", "ml-1"], [1, "badge", "fs-10", "badge-success", "ml-1"], [1, "badge", "fs-10", "badge-warning", "ml-1"], [1, "fs-12", "mb-0"], [1, "fs-12", "font-weight-bold", 2, "color", "#81ba00"], [1, "row", "px-3", "div-height1"], ["class", "col-12 cursor card dashboard-card dashboard-hover1 px-0", 4, "ngFor", "ngForOf"], ["class", "col-12 cursor card dashboard-card1 dashboard-hover1 px-0", 4, "ngFor", "ngForOf"], [1, "col-12", "cursor", "card", "dashboard-card", "dashboard-hover1", "px-0"], [1, "col-3", "d-flex", "align-items-center", "justify-content-center"], ["alt", "Default Image", 1, "msg-img", 3, "src"], [1, "col-9", "ps-0", "align-self-center"], [1, "m-0", "color-primary"], [1, "d-flex", "align-items-center", "justify-content-between", "text-secondary"], [1, "col-12", "cursor", "card", "dashboard-card1", "dashboard-hover1", "px-0"], [1, "fa", "fa", "fa-bullhorn", "color-primary", 2, "font-size", "35px", "color", "#8d6eeb"], [1, "m-0", 2, "color", "#8d6eeb"], [1, "errormessage", "font-weight-bold", "fs-12"]], template: function Dashboard1Component_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
            i0.ɵɵelement(8, "app-feather-icons", 8);
            i0.ɵɵelementStart(9, "span", 9);
            i0.ɵɵtext(10, "Today's Schedule");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "span", 10);
            i0.ɵɵlistener("click", function Dashboard1Component_Template_span_click_11_listener() { return ctx.routePage("schedule"); });
            i0.ɵɵelementStart(12, "a");
            i0.ɵɵtext(13, "View Details");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(14, Dashboard1Component_div_14_Template, 4, 0, "div", 11)(15, Dashboard1Component_div_15_Template, 2, 1, "div", 12);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(16, "div", 2)(17, "div", 3)(18, "div", 4)(19, "div", 5)(20, "div", 13)(21, "div", 7);
            i0.ɵɵelement(22, "app-feather-icons", 8);
            i0.ɵɵelementStart(23, "span", 9);
            i0.ɵɵtext(24, "My Classes");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "span", 10);
            i0.ɵɵlistener("click", function Dashboard1Component_Template_span_click_25_listener() { return ctx.routePage("class"); });
            i0.ɵɵelementStart(26, "a");
            i0.ɵɵtext(27, "View All");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(28, "div", 14);
            i0.ɵɵtemplate(29, Dashboard1Component_button_29_Template, 4, 11, "button", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(30, Dashboard1Component_div_30_Template, 4, 1, "div", 11)(31, Dashboard1Component_div_31_Template, 2, 1, "div", 16);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(32, "div", 17)(33, "div", 4)(34, "div", 5)(35, "div", 13)(36, "div", 7);
            i0.ɵɵelement(37, "app-feather-icons", 8);
            i0.ɵɵelementStart(38, "span", 9);
            i0.ɵɵtext(39, "Recent Scores");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(40, Dashboard1Component_div_40_Template, 4, 0, "div", 11)(41, Dashboard1Component_div_41_Template, 2, 1, "div", 16);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(42, "div", 18)(43, "div", 2)(44, "div", 3)(45, "div", 4)(46, "div", 5)(47, "div", 6)(48, "div", 7);
            i0.ɵɵelement(49, "app-feather-icons", 8);
            i0.ɵɵelementStart(50, "span", 9);
            i0.ɵɵtext(51, "Recent Tasks");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(52, Dashboard1Component_div_52_Template, 4, 0, "div", 11)(53, Dashboard1Component_div_53_Template, 2, 1, "div", 19);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(54, "div", 2)(55, "div", 3)(56, "div", 4)(57, "div", 5)(58, "div", 6)(59, "div", 7);
            i0.ɵɵelement(60, "app-feather-icons", 8);
            i0.ɵɵelementStart(61, "span", 9);
            i0.ɵɵtext(62, "Recent Update");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(63, Dashboard1Component_div_63_Template, 4, 0, "div", 11)(64, Dashboard1Component_div_64_Template, 3, 2, "div", 20);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(65, "div", 2)(66, "div", 3)(67, "div", 4)(68, "div", 5)(69, "div", 6)(70, "div", 7);
            i0.ɵɵelement(71, "app-feather-icons", 8);
            i0.ɵɵelementStart(72, "span", 9);
            i0.ɵɵtext(73, "Overdue Tasks");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(74, Dashboard1Component_div_74_Template, 4, 0, "div", 11)(75, Dashboard1Component_div_75_Template, 2, 1, "div", 19);
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
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
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("icon", "percent");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.recentScore.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.recentScore.length != 0);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("icon", "rotate-cw");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.recentTask.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.recentTask.length != 0);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("icon", "bell");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.scheduleData.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.scheduleData.length != 0);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("icon", "alert-circle");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.overdueTask.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.overdueTask.length != 0);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i5.FeatherIconsComponent, i1.DatePipe], styles: [".cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n  0 8px 10px 1px rgba(0, 0, 0, 0.14),\n  0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.drop-container[_ngcontent-%COMP%] {\n  //width: auto;\n  //display: flex;\n  //flex-wrap: wrap;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  //background-color: #fff;\n  //border: 1px solid #CED4DA;\n  border-radius: .25rem;\n  display: inline-block;\n  margin-bottom: .5rem;\n  padding: 1.5rem;\n  position: relative;\n  text-align: center;\n  //width: 100%;\n}\n\nsection[_ngcontent-%COMP%] {\n  height: max-content !important;\n  //width: 100%;\n  background-repeat: round;\n  padding: 18px;\n  object-fit: contain;\n  //background-position: ;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap; \n\n  gap: 10px; \n\n  padding: 10px;\n  border: solid 1px #ccc;\n  min-height: 100px;\n  background: white;\n  border-radius: 4px;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  width: 200px; \n\n  height: 100px; \n\n  padding: 10px;\n  background: white;\n  border: solid 1px #ccc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: move;\n  box-sizing: border-box;\n}\n\n.dashboard-card[_ngcontent-%COMP%] {\n  border-right: 3px solid #e6baea !important;\n  border-left: 10px solid #e6baea !important;\n  border-bottom: 2px solid #e6baea !important;\n  border-top: 0 solid #e6baea !important;\n}\n.dashboard-card1[_ngcontent-%COMP%] {\n  border-right: 3px solid #8d6eeb !important;\n  border-left: 10px solid #8d6eeb !important;\n  border-bottom: 2px solid #8d6eeb !important;\n  border-top: 0 solid #8d6eeb !important;\n}\n\n.dashboard-hover[_ngcontent-%COMP%]:hover {\n  display: absolute;\n  transform: scale(1.1);\n  z-index: 999;\n  box-shadow: 2px 2px 2px #e8eaed;\n}\n.dashboard-hover1[_ngcontent-%COMP%]:hover {\n  display: absolute;\n  transform: scale(1.040);\n  z-index: 999;\n  box-shadow: 2px 2px 2px #e8eaed;\n}\nsvg[_ngcontent-%COMP%] {\n  width: 14px !important;\n  height: 14px !important;\n}\n\n.dashboard-button[_ngcontent-%COMP%] {\n  padding: 8px 10px !important;\n  font-size: 12px;\n  color: #8F008A;\n  border: 1px solid #8F008A;\n  border-radius: 24px;\n  background: #FFFFFF;\n}\n\n.completed_button[_ngcontent-%COMP%] {\n  color: #81ba00 !important;\n  border: 1px solid #81ba00 !important;\n}\n\n.completed_button[_ngcontent-%COMP%]:hover, .completed_button.active[_ngcontent-%COMP%] {\n  background: #81ba00;\n  color: #FFFFFF !important;\n  .badge-success {\n    background-color: #FFFFFF !important;\n    color: #81ba00 !important;\n  }\n}\n\n.upcoming_button[_ngcontent-%COMP%] {\n  color: #00A8FF !important;\n  border: 1px solid #00A8FF !important;\n}\n\n.upcoming_button[_ngcontent-%COMP%]:hover, .upcoming_button.active[_ngcontent-%COMP%] {\n  background: #00A8FF;\n  color: #FFFFFF !important;\n  .badge-info {\n    background-color: #FFFFFF !important;\n    color: #00A8FF !important;\n  }\n}\n\n.inProgress_button[_ngcontent-%COMP%] {\n  color: #ffc107 !important;\n  border: 1px solid #ffc107 !important;\n}\n\n.inProgress_button[_ngcontent-%COMP%]:hover, .inProgress_button.active[_ngcontent-%COMP%] {\n  background: #ffc107;\n  color: #FFFFFF !important;\n  .badge-warning {\n    background-color: #FFFFFF !important;\n    color: #ffc107 !important;\n  }\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.dashboard.masonry-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n  align-items: start;\n}\n\n.masonry-item[_ngcontent-%COMP%] {\n  break-inside: avoid; \n\n}\n\n.circle_design[_ngcontent-%COMP%] {\n  background: #f1f1f4;\n  border-radius: 50%;\n  padding: 4px 6px;\n}\n\n.msg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 10px;\n}\n\n\n.left-msg[_ngcontent-%COMP%]   .msg-bubble[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0;\n}\n\n.right-msg[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n\n.right-msg[_ngcontent-%COMP%]   .msg-bubble[_ngcontent-%COMP%] {\n  background: #579ffb;\n  color: #fff;\n  border-bottom-right-radius: 0;\n}\n\n.right-msg[_ngcontent-%COMP%]   .msg-img[_ngcontent-%COMP%] {\n  margin: 0 0 0 10px;\n}\n\n.msg-info-name[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-weight: bold;\n}\n\n.msg-info-time[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n}\n\n.msg-img[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  // margin-right: 10px;\n  box-shadow: 0 0 15px #1e1e2017;\n  border-radius: 50%;\n  cursor: default;\n}\n\n.msg-bubble[_ngcontent-%COMP%] {\n  max-width: 75%;\n  padding: 15px;\n  border-radius: 15px;\n  background: #ececec;\n}\n\n.div-height[_ngcontent-%COMP%] {\n  max-height: 15rem;\n  overflow-y: auto;\n}\n\n.div-height1[_ngcontent-%COMP%] {\n  max-height: 20rem;\n  overflow-y: auto;\n}\n\n.upload-count[_ngcontent-%COMP%] {\n  padding: 4px 6px;\n  margin-left: -8px;\n  font-size: 12px;\n  color: #fff;\n  font-weight: 400;\n  border-radius: 50%;\n  position: relative;\n  top: -12px !important;\n  background: #73b5a8;\n}\n\n.text-green[_ngcontent-%COMP%] {\n  color: #73b5a8;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Dashboard1Component, [{
        type: Component,
        args: [{ selector: 'app-dashboard', standalone: false, template: "<section class=\"row dashboard_section py-5 dashboard px-4\">\n    <div class=\"col-8\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-body p-4\">\n                        <div class=\"d-flex align-items-center justify-content-between pb-3\">\n                            <div class=\"d-flex\">\n                                <app-feather-icons class=\"d-flex\" [icon]=\"'calendar'\"></app-feather-icons>\n                                <span class=\"font-weight-bold color-primary ml-1\">Today's Schedule</span>\n                            </div>\n                            <span (click)=\"routePage('schedule')\" class=\"text-right cursor\" style=\"font-size: 10px\">\n                        <a>View Details</a></span>\n                        </div>\n                        <div class=\"row d-flex justify-content-center align-items-center\" *ngIf=\"scheduleData.length == 0\">\n                            <div class=\"col-12 mt-4\">\n                                <button class=\"nodataList border-0\">No Schedule Available!</button>\n                            </div>\n                        </div>\n                        <div class=\"row px-4 div-height\" *ngIf=\"scheduleData.length != 0\">\n                            <div class=\"col-12 cursor card dashboard-hover1 dashboard-card px-0\" *ngFor=\"let item of scheduleData; let j = index\">\n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12\">\n                                            <h5 class=\"color-primary align-self-center mb-0\">{{item.class_name}}</h5>\n                                        </div>\n                                        <div class=\"col-7\">\n                                            <h6 class=\"mb-0 fs-12\">{{item.start_time + ' - ' + item.end_time}}</h6>\n                                        </div>\n                                        <div class=\"col-5 text-right\">\n                                            <i style=\"font-size: 1.4rem\" class=\"fa fa-video-camera text-green ml-4\" aria-hidden=\"true\"></i>\n                                            <i style=\"font-size: 1.4rem\" class=\"fa fa-info-circle text-green ml-4\" aria-hidden=\"true\"></i>\n                                            <i title=\"New Announcement\" *ngIf=\"item.announcement_type != '1'\" (click)=\"redirectToAnnouncement(item, $event, 'announcement')\" style=\"font-size: 1.4rem\" class=\"ml-4 fa fa-bullhorn text-green\" aria-hidden=\"true\">\n                                                <span class=\"upload-count\">{{item.new_comments ? item.new_comments : 0}}</span>\n                                            </i>\n                                            <i title=\"New Inbox Message\" (click)=\"auth.getRoleId() == '5' ? redirectToAnnouncement(item, $event, 'inbox') : classDetailsService(item, 'inbox', $event)\"\n                                            *ngIf=\"auth.getRoleId() != '2'\" style=\"font-size: 1.4rem\" class=\"fa fa-commenting-o text-green ml-4\" aria-hidden=\"true\">\n                                                <span class=\"upload-count\">{{item.newMessage ? item.newMessage : 0}}</span>\n                                            </i>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-body p-4\">\n                        <div class=\"d-flex align-items-center justify-content-between\">\n                            <div class=\"d-flex\">\n                                <app-feather-icons class=\"d-flex\" [icon]=\"'book'\"></app-feather-icons>\n                                <span class=\"font-weight-bold color-primary ml-1\">My Classes</span>\n                            </div>\n                            <span (click)=\"routePage('class')\" class=\"text-right cursor\" style=\"font-size: 10px\">\n                            <a>View All</a></span>\n                        </div>\n                        <div class=\"row mt-4\">\n                            <button *ngFor=\"let data of buttonName\" (click)=\"updateClassData(data.id)\" [ngClass]=\"{'active': data.active}\"\n                                    class=\"dashboard-button {{data.className}}\">{{data.name}}<span class=\"badge {{data.badge_class}} ml-1\">{{data.count}}</span></button>\n                        </div>\n                        <div class=\"row d-flex justify-content-center align-items-center\" *ngIf=\"filteredClassData.length == 0\">\n                            <div class=\"col-12 mt-4\">\n                                <button class=\"nodataList border-0\">No {{selectedButtonForClass == '2' ? 'In-Progress' : selectedButtonForClass == '4' ? 'Upcoming' : 'Completed'}} Class Available!</button>\n                            </div>\n                        </div>\n                        <div class=\"row px-2 mt-4\" *ngIf=\"filteredClassData.length != 0\">\n                            <div class=\"col-12 cursor card dashboard-hover dashboard-card px-0\" *ngFor=\"let item of filteredClassData; let j = index\">\n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <h5 class=\"color-primary align-self-center mb-0\">{{item.class_name}}</h5>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <h6 class=\"mb-0 fs-12\">{{item.subject_name}}</h6>\n                                            <p *ngIf=\"item.start_date == '0000-00-00'&& item.end_date == '0000-00-00'\"><span class=\"font-weight-bold\">Start: </span> <br/>\n                                                <span class=\"font-weight-bold\">End: </span>\n                                            </p>\n                                            <p *ngIf=\"item.start_date != '0000-00-00'&& item.end_date != '0000-00-00'\"><span class=\"font-weight-bold\">Start: </span> <span class=\"t-name font-weight-bold\">{{item.start_date|date:'MM/dd/yyyy'}}<span *ngIf=\"item.start_time != ''\">, {{item.start_time}}</span></span> <br/>\n                                                <span class=\"font-weight-bold\">End: </span> <span class=\"t-name font-weight-bold\">{{item.end_date|date:'MM/dd/yyyy'}}<span *ngIf=\"item.end_time != ''\">, {{item.end_time}}</span></span>\n                                            </p>\n                                        </div>\n                                        <div class=\"col-md-6 d-flex\" style=\"justify-content: flex-end\">\n                                            <div class=\"row\">\n                                                <div class=\"col-12 mt-2 d-flex flex-wrap justify-content-end\">\n                                                    <span class=\"badge ml-2 mb-1 p-2\" style=\"background-color: #73b5a8; color: white;\" *ngFor=\"let items of item.availabilityDate\">{{dayFromInt(items.slotday) + ': '}}{{items.slotstarttime + ' - ' + items.slotendtime}}</span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 my-3\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-body p-4\">\n                        <div class=\"d-flex align-items-center justify-content-between\">\n                            <div class=\"d-flex\">\n                                <app-feather-icons class=\"d-flex\" [icon]=\"'percent'\"></app-feather-icons>\n                                <span class=\"font-weight-bold color-primary ml-1\">Recent Scores</span>\n                            </div>\n                            <!-- <span class=\"text-right cursor\" style=\"font-size: 10px\">\n                                <a>View All</a></span> -->\n                        </div>\n                        <div class=\"row d-flex justify-content-center align-items-center\" *ngIf=\"recentScore.length == 0\">\n                            <div class=\"col-12\">\n                                <button class=\"nodataList border-0\">No Recent Score released!</button>\n                            </div>\n                        </div>\n                        <div class=\"row px-2 mt-4\" *ngIf=\"recentScore.length != 0\">\n                            <div class=\"col-12 card px-0\" *ngFor=\"let item of recentScore; let j = index\">\n                                <div class=\"card-body\">\n                                    <div class=\"d-flex align-items-center justify-content-between\">\n                                        <div class=\"d-inline-flex align-items-center\">\n                                            <app-feather-icons class=\"d-flex circle_design\" *ngIf=\"item.type == '1'\" [icon]=\"'layers'\"></app-feather-icons>\n                                            <app-feather-icons class=\"d-flex circle_design\" *ngIf=\"item.type == '2'\" [icon]=\"'layers'\"></app-feather-icons>\n                                            <h5 class=\"color-primary align-self-center ml-2 mb-0\">{{item.class_name}}</h5>\n                                        </div>\n                                        <span style=\"color: #00A8FF\" class=\"circle_design fs-12\">{{item.score}}</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-4\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-body p-4\">\n                        <div class=\"d-flex align-items-center justify-content-between pb-3\">\n                            <div class=\"d-flex\">\n                                <app-feather-icons class=\"d-flex\" [icon]=\"'rotate-cw'\"></app-feather-icons>\n                                <span class=\"font-weight-bold color-primary ml-1\">Recent Tasks</span>\n                            </div>\n                            <!-- <span class=\"text-right cursor\" style=\"font-size: 10px\">\n                                <a>View All</a></span> -->\n                        </div>\n                        <div class=\"row d-flex justify-content-center align-items-center\" *ngIf=\"recentTask.length == 0\">\n                            <div class=\"col-12\">\n                                <button class=\"nodataList border-0\">No Recent Task Available!</button>\n                            </div>\n                        </div>\n                        <div class=\"row px-3 div-height\" *ngIf=\"recentTask.length != 0\">\n                            <div class=\"col-12 cursor card dashboard-hover dashboard-card px-0\" *ngFor=\"let item of recentTask; let j = index\">\n                                <div class=\"card-body\">\n                                    <div class=\"d-flex justify-content-between align-items-center\">\n                                        <h5 class=\"color-primary align-self-center mb-0\">{{item.name}}</h5>\n                                        <div>\n                                            <span *ngIf=\"item.type == '1'\" class=\"badge badge-info fs-10 ml-1\">Assignment</span>\n                                            <span *ngIf=\"item.type == '2'\" class=\"badge fs-10 badge-success ml-1\">Assesment</span>\n                                            <span *ngIf=\"item.type == '3'\" class=\"badge fs-10 badge-warning ml-1\">Resource</span>\n                                        </div>\n                                    </div>\n                                    <div class=\"d-flex justify-content-between align-items-center\">\n                                        <h6 class=\"mb-0 fs-12\">{{item.class_name}}</h6>\n                                        <h6 *ngIf=\"item.daysCount != 0\" class=\"fs-12 mb-0\">OverDue In: <span style=\"color: #81ba00\" class=\"fs-12 font-weight-bold\">{{item.daysCount}}</span></h6>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-body p-4\">\n                        <div class=\"d-flex align-items-center justify-content-between pb-3\">\n                            <div class=\"d-flex\">\n                                <app-feather-icons class=\"d-flex\" [icon]=\"'bell'\"></app-feather-icons>\n                                <span class=\"font-weight-bold color-primary ml-1\">Recent Update</span>\n                            </div>\n                            <!-- <span class=\"text-right cursor\" style=\"font-size: 10px\">\n                                <a>View All</a></span> -->\n                        </div>\n                        <div class=\"row d-flex justify-content-center align-items-center\" *ngIf=\"scheduleData.length == 0\">\n                            <div class=\"col-12\">\n                                <button class=\"nodataList border-0\">No Recent Updates!</button>\n                            </div>\n                        </div>\n                        <div class=\"row px-3 div-height1\" *ngIf=\"scheduleData.length != 0\">\n                            <div class=\"col-12 cursor card dashboard-card dashboard-hover1 px-0\" *ngFor=\"let item of scheduleData; let j = index\">\n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-3 d-flex align-items-center justify-content-center\">\n                                           <img class=\"msg-img\" [src]=\"'assets/images/dashboard/default.png'\" alt=\"Default Image\">\n                                       </div>\n                                       <div class=\"col-9 ps-0 align-self-center\">\n                                           <p class=\"m-0 color-primary\">Study Well for the exam...</p>\n                                           <small class=\"d-flex align-items-center justify-content-between text-secondary\"><span>Sridhar</span><span>Dec 23, 2024 | 12:00 AM</span></small>\n                                       </div>\n                                   </div>\n                                </div>\n                                <!-- <div class=\"card-body\">\n                                    <h5 class=\"color-primary align-self-center mb-0\">{{item.class_name}}</h5>\n                                    <h6 class=\"mb-0 fs-12\">{{item.start_time + ' - ' + item.end_time}}</h6>\n                                    <div class=\"cursor mt-2 card dashboard-card px-0\">\n                                        <div class=\"left-msg msg my-3 mx-2\">\n                                            <img class=\"msg-img\" [src]=\"'assets/images/dashboard/default.png'\" alt=\"Default Image\">\n                                            <div class=\"msg-bubble\">\n                                                <div class=\"msg-info\">\n                                                    <div class=\"msg-info-name\">Sridhar</div>\n                                                    <div class=\"msg-info-time\">Dec 23, 2024 | 12:00 AM</div>\n                                                </div>\n        \n                                                <div class=\"msg-text\">\n                                                    Study Well for the exam\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div> -->\n                            </div>\n                            <div class=\"col-12 cursor card dashboard-card1 dashboard-hover1 px-0\" *ngFor=\"let item of scheduleData; let j = index\">\n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-3 d-flex align-items-center justify-content-center\">\n                                           <i class=\"fa fa fa-bullhorn color-primary\" style=\"font-size: 35px; color: #8d6eeb;\"></i>\n                                       </div>\n                                       <div class=\"col-9 ps-0 align-self-center\">\n                                           <p class=\"m-0\" style=\"color: #8d6eeb;\">Study Well for the exam...</p>\n                                           <small class=\"d-flex align-items-center justify-content-between text-secondary\"><span>Sridhar</span><span>Dec 23, 2024 | 12:00 AM</span></small>\n                                       </div>\n                                   </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\" style=\"background: #f7f6f8;border-radius: 16px\">\n                    <div class=\"card-body p-4\">\n                        <div class=\"d-flex align-items-center justify-content-between pb-3\">\n                            <div class=\"d-flex\">\n                                <app-feather-icons class=\"d-flex\" [icon]=\"'alert-circle'\"></app-feather-icons>\n                                <span class=\"font-weight-bold color-primary ml-1\">Overdue Tasks</span>\n                            </div>\n                            <!-- <span class=\"text-right cursor\" style=\"font-size: 10px\">\n                                <a>View All</a></span> -->\n                        </div>\n                        <div class=\"row d-flex justify-content-center align-items-center\" *ngIf=\"overdueTask.length == 0\">\n                            <div class=\"col-12\">\n                                <button class=\"nodataList border-0\">No Overdue Task!</button>\n                            </div>\n                        </div>\n                        <div class=\"row px-3 div-height\" *ngIf=\"overdueTask.length != 0\">\n                            <div class=\"col-12 cursor card dashboard-hover dashboard-card px-0\" *ngFor=\"let item of overdueTask; let j = index\">\n                                <div class=\"card-body\">\n                                    <div class=\"d-flex justify-content-between align-items-center\">\n                                        <h5 class=\"color-primary align-self-center mb-0\">{{item.name}}</h5>\n                                        <div>\n                                            <span *ngIf=\"item.type == '1'\" class=\"badge badge-info fs-10 ml-1\">Assignment</span>\n                                            <span *ngIf=\"item.type == '2'\" class=\"badge fs-10 badge-success ml-1\">Assesment</span>\n                                        </div>\n                                    </div>\n                                    <div class=\"d-flex justify-content-between align-items-center\">\n                                        <h6 class=\"mb-0 fs-12\">{{item.class_name}}</h6>\n                                        <h6 class=\"fs-12 mb-0\">OverDue For: <span class=\"errormessage font-weight-bold fs-12\">{{item.daysCount}}</span></h6>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n", styles: [".cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n  0 8px 10px 1px rgba(0, 0, 0, 0.14),\n  0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.drop-container {\n  //width: auto;\n  //display: flex;\n  //flex-wrap: wrap;\n}\n\n.dropdown {\n  //background-color: #fff;\n  //border: 1px solid #CED4DA;\n  border-radius: .25rem;\n  display: inline-block;\n  margin-bottom: .5rem;\n  padding: 1.5rem;\n  position: relative;\n  text-align: center;\n  //width: 100%;\n}\n\nsection {\n  height: max-content !important;\n  //width: 100%;\n  background-repeat: round;\n  padding: 18px;\n  object-fit: contain;\n  //background-position: ;\n}\n\n.example-list {\n  display: flex;\n  flex-wrap: wrap; /* Allows items to wrap to the next line */\n  gap: 10px; /* Adds spacing between items */\n  padding: 10px;\n  border: solid 1px #ccc;\n  min-height: 100px;\n  background: white;\n  border-radius: 4px;\n}\n\n.example-box {\n  width: 200px; /* Set width for draggable items */\n  height: 100px; /* Set height for draggable items */\n  padding: 10px;\n  background: white;\n  border: solid 1px #ccc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: move;\n  box-sizing: border-box;\n}\n\n.dashboard-card {\n  border-right: 3px solid #e6baea !important;\n  border-left: 10px solid #e6baea !important;\n  border-bottom: 2px solid #e6baea !important;\n  border-top: 0 solid #e6baea !important;\n}\n.dashboard-card1 {\n  border-right: 3px solid #8d6eeb !important;\n  border-left: 10px solid #8d6eeb !important;\n  border-bottom: 2px solid #8d6eeb !important;\n  border-top: 0 solid #8d6eeb !important;\n}\n\n.dashboard-hover:hover {\n  display: absolute;\n  transform: scale(1.1);\n  z-index: 999;\n  box-shadow: 2px 2px 2px #e8eaed;\n}\n.dashboard-hover1:hover {\n  display: absolute;\n  transform: scale(1.040);\n  z-index: 999;\n  box-shadow: 2px 2px 2px #e8eaed;\n}\nsvg {\n  width: 14px !important;\n  height: 14px !important;\n}\n\n.dashboard-button {\n  padding: 8px 10px !important;\n  font-size: 12px;\n  color: #8F008A;\n  border: 1px solid #8F008A;\n  border-radius: 24px;\n  background: #FFFFFF;\n}\n\n.completed_button {\n  color: #81ba00 !important;\n  border: 1px solid #81ba00 !important;\n}\n\n.completed_button:hover, .completed_button.active {\n  background: #81ba00;\n  color: #FFFFFF !important;\n  .badge-success {\n    background-color: #FFFFFF !important;\n    color: #81ba00 !important;\n  }\n}\n\n.upcoming_button {\n  color: #00A8FF !important;\n  border: 1px solid #00A8FF !important;\n}\n\n.upcoming_button:hover, .upcoming_button.active {\n  background: #00A8FF;\n  color: #FFFFFF !important;\n  .badge-info {\n    background-color: #FFFFFF !important;\n    color: #00A8FF !important;\n  }\n}\n\n.inProgress_button {\n  color: #ffc107 !important;\n  border: 1px solid #ffc107 !important;\n}\n\n.inProgress_button:hover, .inProgress_button.active {\n  background: #ffc107;\n  color: #FFFFFF !important;\n  .badge-warning {\n    background-color: #FFFFFF !important;\n    color: #ffc107 !important;\n  }\n}\n\nbutton:focus {\n  outline: none !important;\n}\n\n.dashboard.masonry-layout {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n  align-items: start;\n}\n\n.masonry-item {\n  break-inside: avoid; /* Prevent items from breaking between columns */\n}\n\n.circle_design {\n  background: #f1f1f4;\n  border-radius: 50%;\n  padding: 4px 6px;\n}\n\n.msg {\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 10px;\n}\n\n\n.left-msg .msg-bubble {\n  border-bottom-left-radius: 0;\n}\n\n.right-msg {\n  flex-direction: row-reverse;\n}\n\n.right-msg .msg-bubble {\n  background: #579ffb;\n  color: #fff;\n  border-bottom-right-radius: 0;\n}\n\n.right-msg .msg-img {\n  margin: 0 0 0 10px;\n}\n\n.msg-info-name {\n  margin-right: 10px;\n  font-weight: bold;\n}\n\n.msg-info-time {\n  font-size: 0.85em;\n}\n\n.msg-img {\n  width: 35px;\n  height: 35px;\n  // margin-right: 10px;\n  box-shadow: 0 0 15px #1e1e2017;\n  border-radius: 50%;\n  cursor: default;\n}\n\n.msg-bubble {\n  max-width: 75%;\n  padding: 15px;\n  border-radius: 15px;\n  background: #ececec;\n}\n\n.div-height {\n  max-height: 15rem;\n  overflow-y: auto;\n}\n\n.div-height1 {\n  max-height: 20rem;\n  overflow-y: auto;\n}\n\n.upload-count {\n  padding: 4px 6px;\n  margin-left: -8px;\n  font-size: 12px;\n  color: #fff;\n  font-weight: 400;\n  border-radius: 50%;\n  position: relative;\n  top: -12px !important;\n  background: #73b5a8;\n}\n\n.text-green {\n  color: #73b5a8;\n}"] }]
    }], () => [{ type: i1.DatePipe }, { type: i2.AuthService }, { type: i3.ClassService }, { type: i4.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Dashboard1Component, { className: "Dashboard1Component" }); })();
//# sourceMappingURL=dashboard1.component.js.map