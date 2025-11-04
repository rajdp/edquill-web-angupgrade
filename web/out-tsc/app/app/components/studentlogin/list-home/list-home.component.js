import { Component, ViewChild } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SessionConstants } from '../../../shared/data/sessionConstants';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/School.service";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../../../shared/service/configuration.service";
import * as i4 from "@angular/platform-browser";
import * as i5 from "../../../shared/service/auth.service";
import * as i6 from "../../../shared/service/common.service";
import * as i7 from "../../../shared/service/common-data.service";
import * as i8 from "../../../shared/service/teacher.service";
import * as i9 from "@angular/router";
import * as i10 from "../../../shared/service/nav.service";
import * as i11 from "ngx-toastr";
import * as i12 from "../../../environment.service";
import * as i13 from "../../../shared/service/creator.service";
import * as i14 from "../../../shared/service/class.service";
import * as i15 from "../../../shared/service/newsubject.service";
import * as i16 from "../../../shared/service/student.service";
import * as i17 from "@angular/common";
import * as i18 from "@angular/forms";
const _c0 = ["throwError"];
const _c1 = a0 => ({ "height": a0 });
const _c2 = a0 => ({ "width": a0 });
function ListHomeComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 18)(2, "div", 19)(3, "button", 20);
    i0.ɵɵelement(4, "i", 21);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 22)(7, "button", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_div_17_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.classFilter("2")); });
    i0.ɵɵtext(8, "Upcoming");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_div_17_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.classFilter("3")); });
    i0.ɵɵtext(10, "In Progress");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_div_17_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.classFilter("4")); });
    i0.ɵɵtext(12, "Completed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_div_17_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.classFilter("1")); });
    i0.ɵɵtext(14, "All");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(15, "div", 18)(16, "div", 19)(17, "button", 24);
    i0.ɵɵelement(18, "i", 25);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 26)(21, "button", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_div_17_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.classSort("1")); });
    i0.ɵɵtext(22, "End Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "button", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_div_17_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.classSort("2")); });
    i0.ɵɵtext(24, "Assignee");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "button", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_div_17_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.classSort("3")); });
    i0.ɵɵtext(26, "Alphabetical");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.classbutton);
    i0.ɵɵadvance(14);
    i0.ɵɵtextInterpolate(ctx_r2.sortButton);
} }
function ListHomeComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "div", 28)(2, "button", 29);
    i0.ɵɵelement(3, "i", 30);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 31)(6, "a", 32);
    i0.ɵɵlistener("click", function ListHomeComponent_div_18_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.classFilter("2")); });
    i0.ɵɵtext(7, "Upcoming Classes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "a", 32);
    i0.ɵɵlistener("click", function ListHomeComponent_div_18_Template_a_click_8_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.classFilter("3")); });
    i0.ɵɵtext(9, "In Progress Classes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "a", 32);
    i0.ɵɵlistener("click", function ListHomeComponent_div_18_Template_a_click_10_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.classFilter("4")); });
    i0.ɵɵtext(11, "Completed Classes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "a", 32);
    i0.ɵɵlistener("click", function ListHomeComponent_div_18_Template_a_click_12_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.classFilter("1")); });
    i0.ɵɵtext(13, "All Classes");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 28)(15, "button", 33);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 34)(18, "a", 32);
    i0.ɵɵlistener("click", function ListHomeComponent_div_18_Template_a_click_18_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.classSort("1")); });
    i0.ɵɵtext(19, "End Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "a", 32);
    i0.ɵɵlistener("click", function ListHomeComponent_div_18_Template_a_click_20_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.classSort("2")); });
    i0.ɵɵtext(21, "Assignee");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "a", 32);
    i0.ɵɵlistener("click", function ListHomeComponent_div_18_Template_a_click_22_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.classSort("3")); });
    i0.ɵɵtext(23, "Alphabetical");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.classbutton, " ");
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(ctx_r2.sortButton);
} }
function ListHomeComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "div", 36)(2, "button", 37);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function ListHomeComponent_div_22_figure_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 47);
    i0.ɵɵelementEnd();
} }
function ListHomeComponent_div_22_figure_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const class_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r2.sanitizer.bypassSecurityTrustResourceUrl(ctx_r2.webhost + "/" + class_r7.profile_url), i0.ɵɵsanitizeUrl);
} }
function ListHomeComponent_div_22_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const class_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, class_r7.start_date, "MM/dd/yyyy"));
} }
function ListHomeComponent_div_22_span_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const class_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, class_r7.end_date, "MM/dd/yyyy"));
} }
function ListHomeComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 38)(1, "div", 39)(2, "div")(3, "div", 3)(4, "div", 40);
    i0.ɵɵlistener("click", function ListHomeComponent_div_22_Template_div_click_4_listener() { const ctx_r5 = i0.ɵɵrestoreView(_r5); const class_r7 = ctx_r5.$implicit; const i_r8 = ctx_r5.index; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.enterList(i_r8, class_r7)); });
    i0.ɵɵtemplate(5, ListHomeComponent_div_22_figure_5_Template, 2, 0, "figure", 41)(6, ListHomeComponent_div_22_figure_6_Template, 2, 1, "figure", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 42)(8, "h4", 43)(9, "span", 44);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "p")(12, "span");
    i0.ɵɵtext(13, "Subject: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span", 45);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "p")(17, "span");
    i0.ɵɵtext(18, "Start: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(19, ListHomeComponent_div_22_span_19_Template, 3, 4, "span", 46);
    i0.ɵɵtext(20, " \u00A0 \u00A0 ");
    i0.ɵɵelementStart(21, "span");
    i0.ɵɵtext(22, "End: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(23, ListHomeComponent_div_22_span_23_Template, 3, 4, "span", 46);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const class_r7 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("card-body ", ctx_r2.env.deviceType() ? "p-2" : "p-3", "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", class_r7.profile_url == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", class_r7.profile_url != "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", class_r7.class_name, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(class_r7.subject_name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", class_r7.start_date != "0000-00-00");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", class_r7.end_date != "0000-00-00");
} }
function ListHomeComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 18)(2, "div", 19)(3, "button", 49);
    i0.ɵɵelement(4, "i", 21);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 50)(7, "button", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_div_38_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assignmentFilter("3")); });
    i0.ɵɵtext(8, "In Progress");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_div_38_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assignmentFilter("4")); });
    i0.ɵɵtext(10, "Completed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_div_38_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assignmentFilter("1")); });
    i0.ɵɵtext(12, "All");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(13, "div", 18)(14, "div", 19)(15, "button", 51);
    i0.ɵɵelement(16, "i", 25);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 52)(19, "button", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_div_38_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assignmentSort("1")); });
    i0.ɵɵtext(20, "End Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "button", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_div_38_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assignmentSort("2")); });
    i0.ɵɵtext(22, "Assignee");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "button", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_div_38_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assignmentSort("3")); });
    i0.ɵɵtext(24, "Alphabetical");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.assignButton);
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(ctx_r2.sortButton);
} }
function ListHomeComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "div", 28)(2, "button", 53);
    i0.ɵɵelement(3, "i", 30);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 31)(6, "a", 32);
    i0.ɵɵlistener("click", function ListHomeComponent_div_39_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assignmentFilter("3")); });
    i0.ɵɵtext(7, "In Progress Assignments");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "a", 32);
    i0.ɵɵlistener("click", function ListHomeComponent_div_39_Template_a_click_8_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assignmentFilter("4")); });
    i0.ɵɵtext(9, "Completed Assignments");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "a", 32);
    i0.ɵɵlistener("click", function ListHomeComponent_div_39_Template_a_click_10_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assignmentFilter("1")); });
    i0.ɵɵtext(11, "All Assignments");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 54)(13, "button", 55);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 56)(16, "a", 32);
    i0.ɵɵlistener("click", function ListHomeComponent_div_39_Template_a_click_16_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assignmentSort("1")); });
    i0.ɵɵtext(17, "End Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "a", 32);
    i0.ɵɵlistener("click", function ListHomeComponent_div_39_Template_a_click_18_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assignmentSort("2")); });
    i0.ɵɵtext(19, "Assignee");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "a", 32);
    i0.ɵɵlistener("click", function ListHomeComponent_div_39_Template_a_click_20_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assignmentSort("3")); });
    i0.ɵɵtext(21, "Alphabetical");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.assignButton, " ");
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r2.assignSortButton);
} }
function ListHomeComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "div", 36)(2, "button", 37);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function ListHomeComponent_div_43_figure_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 59);
    i0.ɵɵelementEnd();
} }
function ListHomeComponent_div_43_figure_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const assign_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r2.sanitizer.bypassSecurityTrustResourceUrl(ctx_r2.webhost + "/" + assign_r12.profile_url), i0.ɵɵsanitizeUrl);
} }
function ListHomeComponent_div_43_span_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const assign_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, assign_r12.start_date, "MM/dd/yyyy"));
} }
function ListHomeComponent_div_43_span_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const assign_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, assign_r12.end_date, "MM/dd/yyyy"));
} }
function ListHomeComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 38)(1, "div", 39)(2, "div")(3, "div", 3)(4, "div", 57);
    i0.ɵɵlistener("click", function ListHomeComponent_div_43_Template_div_click_4_listener() { const assign_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assignmentPage(assign_r12)); });
    i0.ɵɵtemplate(5, ListHomeComponent_div_43_figure_5_Template, 2, 0, "figure", 41)(6, ListHomeComponent_div_43_figure_6_Template, 2, 1, "figure", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 42)(8, "h4", 43)(9, "span", 44);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "b", 58)(12, "small");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(14, "br");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "p")(16, "span");
    i0.ɵɵtext(17, "Subject: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "span", 45);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "p")(21, "span");
    i0.ɵɵtext(22, "Start: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(23, ListHomeComponent_div_43_span_23_Template, 3, 4, "span", 46);
    i0.ɵɵtext(24, " \u00A0 \u00A0 ");
    i0.ɵɵelementStart(25, "span");
    i0.ɵɵtext(26, "End: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(27, ListHomeComponent_div_43_span_27_Template, 3, 4, "span", 46);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const assign_r12 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("card-body ", ctx_r2.env.deviceType() ? "p-2" : "p-3", "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", assign_r12.profile_url == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", assign_r12.profile_url != "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", assign_r12.content_name, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(assign_r12.content_format == 3 ? "(TEXT)" : (assign_r12 == null ? null : assign_r12.is_pdf_content) == 0 ? "(LINK)" : "(PDF)");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(assign_r12.subject_name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", assign_r12.start_date != "0000-00-00");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", assign_r12.end_date != "0000-00-00");
} }
function ListHomeComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 18)(2, "div", 19)(3, "button", 49);
    i0.ɵɵelement(4, "i", 21);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 50)(7, "button", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_div_59_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assessmentFilter("3")); });
    i0.ɵɵtext(8, "In Progress");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_div_59_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assessmentFilter("4")); });
    i0.ɵɵtext(10, "Completed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_div_59_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assessmentFilter("1")); });
    i0.ɵɵtext(12, "All");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(13, "div", 18)(14, "div", 19)(15, "button", 51);
    i0.ɵɵelement(16, "i", 25);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 52)(19, "button", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_div_59_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assessmentSort("1")); });
    i0.ɵɵtext(20, "End Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "button", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_div_59_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assessmentSort("2")); });
    i0.ɵɵtext(22, "Assignee");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "button", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_div_59_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assessmentSort("3")); });
    i0.ɵɵtext(24, "Alphabetical");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.assessButton);
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(ctx_r2.sortButton);
} }
function ListHomeComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "div", 28)(2, "button", 29);
    i0.ɵɵelement(3, "i", 30);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 31)(6, "a", 32);
    i0.ɵɵlistener("click", function ListHomeComponent_div_60_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r14); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assessmentFilter("3")); });
    i0.ɵɵtext(7, "In Progress Assessments");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "a", 32);
    i0.ɵɵlistener("click", function ListHomeComponent_div_60_Template_a_click_8_listener() { i0.ɵɵrestoreView(_r14); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assessmentFilter("4")); });
    i0.ɵɵtext(9, "Completed Assessments");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "a", 32);
    i0.ɵɵlistener("click", function ListHomeComponent_div_60_Template_a_click_10_listener() { i0.ɵɵrestoreView(_r14); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assessmentFilter("1")); });
    i0.ɵɵtext(11, "All Assessments");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 28)(13, "button", 60);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 61)(16, "a", 32);
    i0.ɵɵlistener("click", function ListHomeComponent_div_60_Template_a_click_16_listener() { i0.ɵɵrestoreView(_r14); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assessmentSort("1")); });
    i0.ɵɵtext(17, "End Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "a", 32);
    i0.ɵɵlistener("click", function ListHomeComponent_div_60_Template_a_click_18_listener() { i0.ɵɵrestoreView(_r14); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assessmentSort("2")); });
    i0.ɵɵtext(19, "Assignee");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "a", 32);
    i0.ɵɵlistener("click", function ListHomeComponent_div_60_Template_a_click_20_listener() { i0.ɵɵrestoreView(_r14); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.assessmentSort("3")); });
    i0.ɵɵtext(21, "Alphabetical");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.assessButton, " ");
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r2.assessSortButton);
} }
function ListHomeComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "div", 36)(2, "button", 37);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function ListHomeComponent_div_64_figure_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 63);
    i0.ɵɵelementEnd();
} }
function ListHomeComponent_div_64_figure_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const assess_r16 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r2.sanitizer.bypassSecurityTrustResourceUrl(ctx_r2.webhost + "/" + assess_r16.profile_url), i0.ɵɵsanitizeUrl);
} }
function ListHomeComponent_div_64_span_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const assess_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, assess_r16.start_date, "MM/dd/yyyy"));
} }
function ListHomeComponent_div_64_span_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const assess_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, assess_r16.end_date, "MM/dd/yyyy"));
} }
function ListHomeComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 38)(1, "div", 39)(2, "div")(3, "div", 3)(4, "div", 62);
    i0.ɵɵlistener("click", function ListHomeComponent_div_64_Template_div_click_4_listener() { const assess_r16 = i0.ɵɵrestoreView(_r15).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.checkContentTime(assess_r16, "assess")); });
    i0.ɵɵtemplate(5, ListHomeComponent_div_64_figure_5_Template, 2, 0, "figure", 41)(6, ListHomeComponent_div_64_figure_6_Template, 2, 1, "figure", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 42)(8, "h4", 43)(9, "span", 44);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "b", 58)(12, "small");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(14, "br");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "p")(16, "span");
    i0.ɵɵtext(17, "Subject: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "span", 45);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "p")(21, "span");
    i0.ɵɵtext(22, "Start: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(23, ListHomeComponent_div_64_span_23_Template, 3, 4, "span", 46);
    i0.ɵɵtext(24, " \u00A0 \u00A0 ");
    i0.ɵɵelementStart(25, "span");
    i0.ɵɵtext(26, "End: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(27, ListHomeComponent_div_64_span_27_Template, 3, 4, "span", 46);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const assess_r16 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("card-body ", ctx_r2.env.deviceType() ? "p-2" : "p-3", "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", assess_r16.profile_url == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", assess_r16.profile_url != "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", assess_r16.content_name, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(assess_r16.content_format == 3 ? "(TEXT)" : (assess_r16 == null ? null : assess_r16.is_pdf_content) == 0 ? "(LINK)" : "(PDF)");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(assess_r16.subject_name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", assess_r16.start_date != "0000-00-00");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", assess_r16.end_date != "0000-00-00");
} }
function ListHomeComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 64)(1, "h4", 65);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 66);
    i0.ɵɵlistener("click", function ListHomeComponent_ng_template_65_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r17); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 67)(5, "p")(6, "b");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 68)(9, "div", 69)(10, "button", 70);
    i0.ɵɵlistener("click", function ListHomeComponent_ng_template_65_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r17); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onSave()); });
    i0.ɵɵtext(11, "ok");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.ErrorTitle);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.message);
} }
export class ListHomeComponent {
    constructor(brandservices, config, confi, sanitizer, modalService, auth, common, commondata, teacher, route, navServices, toastr, env, creatorService, classes, newSubject, student) {
        this.brandservices = brandservices;
        this.config = config;
        this.confi = confi;
        this.sanitizer = sanitizer;
        this.modalService = modalService;
        this.auth = auth;
        this.common = common;
        this.commondata = commondata;
        this.teacher = teacher;
        this.route = route;
        this.navServices = navServices;
        this.toastr = toastr;
        this.env = env;
        this.creatorService = creatorService;
        this.classes = classes;
        this.newSubject = newSubject;
        this.student = student;
        this.classType = '3';
        this.assignType = '3';
        this.assessType = '3';
        this.classSortType = '0';
        this.assignSortType = '0';
        this.assessSortType = '0';
        this.searchClass = '';
        this.searchAssign = '';
        this.searchAssess = '';
        this.mobileView = false;
        this.imgUrl = this.confi.getimgUrl();
        config.backdrop = 'static';
        this.mobileView = this.env.mobileView;
        console.log(this.mobileView, 'mobileView');
        config.keyboard = false;
        this.webhost = this.confi.getimgUrl();
        this.schoolListDetails = JSON.parse(this.auth.getSessionData('rista_data1'));
        this.newSubject.schoolChange.subscribe(params => {
            if (params != '') {
                if (this.route.url.includes('list-home')) {
                    this.init(params);
                }
            }
            else {
                this.init(this.auth.getSessionData('school_id'));
            }
        });
    }
    ngOnInit() {
        this.commondata.showLoader(false);
        // this.openmenu = false;
        // this.creatorService.changeViewList(this.openmenu);
        // this.navServices.collapseSidebar = true;
        this.allowSelect = false;
        this.newSubject.allowSchoolChange(this.allowSelect);
    }
    init(id) {
        this.getSearch_Filter();
        this.dashboardClassList();
        this.dashboardAssignmentList();
        this.dashboardAssessmentList();
    }
    close() {
        this.modalRef.close();
    }
    classFilter(type) {
        this.classClicked = '1';
        this.classType = type;
        if (type == '1') {
            this.classbutton = 'All';
        }
        else if (type == '2') {
            this.classbutton = 'Upcoming';
        }
        else if (type == '3') {
            this.classbutton = 'In Progress';
        }
        else if (type == '4') {
            this.classbutton = 'Completed';
        }
        this.dashboardClassList();
    }
    classSort(type) {
        this.classSortType = type;
        if (type == '1') {
            this.sortButton = 'End Date';
        }
        else if (type == '2') {
            this.sortButton = 'Assignee';
        }
        else if (type == '3') {
            this.sortButton = 'Alphabetical';
        }
        this.dashboardClassList();
    }
    assignmentFilter(type) {
        this.assignClicked = '1';
        this.assignType = type;
        if (type == '1') {
            this.assignButton = 'All ';
        }
        else if (type == '2') {
            this.assignButton = 'Upcoming';
        }
        else if (type == '3') {
            this.assignButton = 'In Progress';
        }
        else if (type == '4') {
            this.assignButton = 'Completed';
        }
        console.log(this.assignClicked, 'assignClicked');
        this.dashboardAssignmentList();
    }
    assignmentSort(type) {
        this.assignSortType = type;
        if (type == '1') {
            this.assignSortButton = 'End Date';
        }
        else if (type == '2') {
            this.assignSortButton = 'Assignee';
        }
        else if (type == '3') {
            this.assignSortButton = 'Alphabetical';
        }
        this.dashboardAssignmentList();
    }
    assessmentFilter(type) {
        this.assessClicked = '1';
        this.assessType = type;
        if (type == '1') {
            this.assessButton = 'All';
        }
        else if (type == '2') {
            this.assessButton = 'Upcoming';
        }
        else if (type == '3') {
            this.assessButton = 'In Progress';
        }
        else if (type == '4') {
            this.assessButton = 'Completed';
        }
        this.dashboardAssessmentList();
    }
    assessmentSort(type) {
        this.assessSortType = type;
        if (type == '1') {
            this.assessSortButton = 'End Date';
        }
        else if (type == '2') {
            this.assessSortButton = 'Assignee';
        }
        else if (type == '3') {
            this.assessSortButton = 'Alphabetical';
        }
        this.dashboardAssessmentList();
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
    open(content) {
        this.modalService.open(content);
    }
    onSave() {
        this.modalRef.close();
    }
    updateFilter(event, type) {
        const val = event.toLowerCase();
        console.log(val, 'val');
        if (type == 'class') {
            const temp = this.classesDetails1.filter(function (d) {
                return d.class_name.toLowerCase().indexOf(val) !== -1 || !val;
            });
            this.classesDetails = temp;
        }
        else if (type == 'assign') {
            const temp1 = this.assignmentsDetails1.filter(function (d) {
                return d.content_name.toLowerCase().indexOf(val) !== -1 || !val;
            });
            this.assignmentsDetails = temp1;
        }
        else if (type == 'assess') {
            const temp2 = this.assessmentDetails1.filter(function (d) {
                return d.content_name.toLowerCase().indexOf(val) !== -1 || !val;
            });
            this.assessmentDetails = temp2;
        }
        this.setSearch_Filter();
    }
    checkContentTime(selectedData, type) {
        console.log(selectedData, 'val');
        let data;
        data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: selectedData.class_id,
            content_id: selectedData.content_id,
            school_id: this.auth.getSessionData('school_id')
        };
        this.student.checkTime(data).subscribe((successData) => {
            this.checkContentTimeSuccess(successData, selectedData, type);
        }, (error) => {
            this.checkContentTimeFailure(error);
        });
    }
    checkContentTimeSuccess(successData, selectedData, type) {
        if (successData.IsSuccess) {
            if (type == 'assign') {
                this.assignmentPage(selectedData);
            }
            else if (type == 'assess') {
                this.assessmentPage(selectedData);
            }
        }
        else {
            this.message = successData.ResponseObject;
            this.ErrorTitle = selectedData.class_name;
            this.modalRef = this.modalService.open(this.throwError, { size: 'md' });
        }
    }
    checkContentTimeFailure(error) {
        console.error(error);
    }
    assessmentPage(detail) {
        if (detail.status == 1) {
            console.log(detail, 'assessment1');
            // this.toastr.error('Assignment not started');
            this.message = detail.content_name + ' ' + 'is assignment not started';
            this.ErrorTitle = detail.class_name;
            this.modalRef = this.modalService.open(this.throwError, { size: 'md' });
        }
        else if (detail.status == 3 && (detail.student_content_status == 1 || detail.student_content_status == 2)) {
            console.log(detail, 'assessment321');
            // this.toastr.error('Assessment End date is over');
            this.message = detail.content_name + ' ' + 'is assessment End date is over';
            this.ErrorTitle = detail.class_name;
            this.modalRef = this.modalService.open(this.throwError, { size: 'md' });
        }
        else if (detail.student_content_status == 3) {
            this.auth.setSessionData('student-card', JSON.stringify(detail));
            this.route.navigate(['/studentlogin/score-card']);
        }
        else {
            this.auth.setSessionData('classDetails', JSON.stringify(detail));
            this.route.navigate(['/studentlogin/answering']);
        }
    }
    assignmentPage(detail) {
        // if (detail.status == 1) {
        //     console.log(detail, 'assignment1');
        //     // this.toastr.error('Assignment not started');
        //     this.message = detail.content_name + ' ' + 'is assignment not started';
        //     this.ErrorTitle = detail.class_name;
        //     this.modalRef = this.modalService.open(this.throwError, {size: 'md'});
        // } else
        if (detail.student_content_status != 3) {
            this.auth.setSessionData('classDetails', JSON.stringify(detail));
            this.route.navigate(['/studentlogin/answering']);
        }
        else {
            this.auth.setSessionData('student-card', JSON.stringify(detail));
            this.route.navigate(['/studentlogin/score-card']);
        }
    }
    dashboardClassList() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            type: this.classType,
            sort: this.classSortType
        };
        this.teacher.studentClassDashboardList(data).subscribe((successData) => {
            this.dashboardClassListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_ClassList');
        });
    }
    dashboardClassListSuccess(successData) {
        if (successData.IsSuccess) {
            this.classesDetails = successData.ResponseObject;
            this.classesDetails1 = successData.ResponseObject;
            if (this.classClicked == '1') {
            }
            else {
                if (this.classType == '3' && this.classesDetails.length == 0) {
                    this.classType = '2';
                    this.classbutton = 'Upcoming';
                    this.dashboardClassList();
                }
                else if (this.classType == '2' && this.classesDetails.length == 0) {
                    this.classType = '1';
                    this.classbutton = 'All';
                    this.dashboardClassList();
                }
            }
            this.setSearch_Filter();
            this.updateFilter(this.searchClass, 'class');
        }
    }
    dashboardAssignmentList() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            type: this.assignType,
            sort: this.assignSortType
        };
        this.teacher.studentAssignmentDashboardList(data).subscribe((successData) => {
            this.dashboardAssignmentSuccess(successData);
        }, (error) => {
            console.error(error, 'error_AssignmentList');
        });
    }
    dashboardAssignmentSuccess(successData) {
        if (successData.IsSuccess) {
            this.assignmentsDetails = successData.ResponseObject;
            this.assignmentsDetails1 = successData.ResponseObject;
            if (this.assignClicked == '1') {
            }
            else {
                if (this.assignType == '3' && this.assignmentsDetails.length == 0) {
                    this.assignType = '1';
                    this.assignButton = 'All';
                    this.dashboardAssignmentList();
                }
            }
            this.setSearch_Filter();
            this.updateFilter(this.searchAssign, 'assign');
        }
    }
    dashboardAssessmentList() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            type: this.assessType,
            sort: this.assessSortType
        };
        this.teacher.studentAssessmentDashboardList(data).subscribe((successData) => {
            this.dashboardAssessmentSuccess(successData);
        }, (error) => {
            console.error(error, 'error_AssessmentList');
        });
    }
    dashboardAssessmentSuccess(successData) {
        this.assessmentDetails = successData.ResponseObject;
        this.assessmentDetails1 = successData.ResponseObject;
        if (successData.IsSuccess) {
            if (this.assessClicked == '1') {
                console.log(this.assessClicked, 'asses');
            }
            else {
                if (this.assessType == '3' && this.assessmentDetails.length == 0) {
                    this.assessType = '1';
                    this.assessButton = 'All';
                    this.dashboardAssessmentList();
                }
            }
            this.setSearch_Filter();
            this.updateFilter(this.searchAssess, 'assess');
        }
    }
    enterList(id, event) {
        if (event.status == '3') {
            // this.toastr.error('This Class has already completed');
            console.log(event, 'enterEvent');
            this.message = 'This Class has already completed';
            this.ErrorTitle = event.class_name;
            this.modalRef = this.modalService.open(this.throwError, { size: 'md' });
        }
        else {
            this.auth.setSessionData('class-id', this.classesDetails[id].class_id);
            this.auth.setSessionData('schedule_id', this.classesDetails[id].schedule_id);
            this.route.navigate(['/studentlogin/class-detail']);
        }
    }
    Preview(event, type) {
        if (event.content_format == 1) {
            this.previewType = 'pdf';
        }
        else if (event.content_format == 3) {
            this.previewType = 'text';
        }
        this.auth.setSessionData('editresources', JSON.stringify(event));
        this.listDetails(event, type);
    }
    listDetails(event, type) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: event.content_id,
            content_format: event.content_format,
            content_type: event.content_type,
            school_id: event.school_id
        };
        this.creatorService.repositoryDetail(data).subscribe((successData) => {
            this.detailsSuccess(successData, event, type);
        }, (error) => {
            console.error(error, 'error_details');
        });
    }
    detailsSuccess(successData, event, type) {
        if (successData.IsSuccess) {
            this.detailData = successData.ResponseObject;
            this.auth.setSessionData('editor', JSON.stringify(this.detailData));
            if (this.previewType == 'pdf') {
                this.auth.setSessionData('preview', 'home');
                if (type == '1') {
                    this.auth.setSessionData('preview_page', 'create_resources');
                }
                else if (type == '2') {
                    this.auth.setSessionData('preview_page', 'create_assignments');
                }
                else if (type == '3') {
                    this.auth.setSessionData('preview_page', 'create_assessments');
                }
                this.route.navigate(['repository/preview']);
            }
            else if (this.previewType == 'text') {
                this.auth.setSessionData('preview', 'home');
                this.auth.setSessionData('backOption', 'home');
                if (type == '1') {
                    this.auth.setSessionData('preview_page', 'text_resources');
                }
                else if (type == '2') {
                    this.auth.setSessionData('preview_page', 'text_assignments');
                }
                else if (type == '3') {
                    this.auth.setSessionData('preview_page', 'text_assessments');
                }
                this.route.navigate(['repository/preview']);
            }
        }
    }
    setSearch_Filter() {
        let data = JSON.parse(this.auth.getSessionData(SessionConstants.studentHomeSearch));
        if (data != null) {
            data.forEach((items) => {
                if (items.school_id == this.auth.getSessionData('school_id')) {
                    // Class Data //
                    items.classDateStatus = this.classType;
                    items.className = this.searchClass;
                    items.classButton = this.classbutton;
                    items.classSortType = this.classSortType;
                    items.classSortButton = this.sortButton;
                    // Assignment Data //
                    items.assignmentDateStatus = this.assignType;
                    items.assignmentName = this.searchAssign;
                    items.assignButton = this.assignButton;
                    items.assignSortType = this.assignSortType;
                    items.assignSortButton = this.assignSortButton;
                    // Assessment Data //
                    items.assessmentDateStatus = this.assessType;
                    items.assessmentName = this.searchAssess;
                    items.assessButton = this.assessButton;
                    items.assessSortType = this.assessSortType;
                    items.assessSortButton = this.assessSortButton;
                }
                else {
                    const searchData = {
                        // Class Data //
                        classDateStatus: this.classType,
                        className: this.searchClass,
                        classButton: this.classbutton,
                        classSortType: this.classSortType,
                        classSortButton: this.sortButton,
                        // Assignment Data //
                        assignmentDateStatus: this.assignType,
                        assignmentName: this.searchAssign,
                        assignButton: this.assignButton,
                        assignSortType: this.assignSortType,
                        assignSortButton: this.assignSortButton,
                        // Assessment Data //
                        assessmentDateStatus: this.assessType,
                        assessmentName: this.searchAssess,
                        assessButton: this.assessButton,
                        assessSortType: this.assessSortType,
                        assessSortButton: this.assessSortButton,
                        school_id: this.auth.getSessionData('school_id')
                    };
                    data.push(searchData);
                }
            });
            data = data.filter((test, index, array) => index === array.findIndex((findTest) => findTest.school_id === test.school_id));
            this.auth.setSessionData(SessionConstants.studentHomeSearch, JSON.stringify(data));
        }
    }
    getSearch_Filter() {
        const data = JSON.parse(this.auth.getSessionData(SessionConstants.studentHomeSearch));
        data.every((items) => {
            if (items.school_id == this.auth.getSessionData('school_id')) {
                // class Data //
                this.classType = items.classDateStatus;
                this.searchClass = items.className;
                this.sortButton = items.classSortButton;
                this.classSortType = items.classSortType;
                this.classbutton = items.classButton;
                // Assignment Data //
                this.assignType = items.assignmentDateStatus;
                this.searchAssign = items.assignmentName;
                this.assignSortButton = items.assignSortButton;
                this.assignSortType = items.assignSortType;
                this.assignButton = items.assignButton;
                // Assessment Data
                this.assessType = items.assessmentDateStatus;
                this.searchAssess = items.assessmentName;
                this.assessSortButton = items.assessSortButton;
                this.assessSortType = items.assessSortType;
                this.assessButton = items.assessButton;
                return false;
            }
            else {
                this.classType = this.assignType = this.assessType = '3';
                this.classbutton = this.assignButton = this.assessButton = 'In Progress';
                this.searchClass = this.searchAssign = this.searchAssess = '';
                this.classSortType = this.assignSortType = this.assessSortType = '0';
                this.sortButton = this.assignSortButton = this.assessSortButton = 'Sort';
            }
            return true;
        });
    }
    static { this.ɵfac = function ListHomeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListHomeComponent)(i0.ɵɵdirectiveInject(i1.SchoolService), i0.ɵɵdirectiveInject(i2.NgbModalConfig), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i4.DomSanitizer), i0.ɵɵdirectiveInject(i2.NgbModal), i0.ɵɵdirectiveInject(i5.AuthService), i0.ɵɵdirectiveInject(i6.CommonService), i0.ɵɵdirectiveInject(i7.CommonDataService), i0.ɵɵdirectiveInject(i8.TeacherService), i0.ɵɵdirectiveInject(i9.Router), i0.ɵɵdirectiveInject(i10.NavService), i0.ɵɵdirectiveInject(i11.ToastrService), i0.ɵɵdirectiveInject(i12.EnvironmentService), i0.ɵɵdirectiveInject(i13.CreatorService), i0.ɵɵdirectiveInject(i14.ClassService), i0.ɵɵdirectiveInject(i15.NewsubjectService), i0.ɵɵdirectiveInject(i16.StudentService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListHomeComponent, selectors: [["app-list-home"]], viewQuery: function ListHomeComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.throwError = _t.first);
        } }, decls: 67, vars: 110, consts: [["throwError", ""], [1, "container-fluid"], [1, "row", "list-card"], [1, "row"], [1, "col-6", "col-md-7", "col-xl-7", "d-flex", "justify-content-end"], [1, "input-group"], ["type", "text", 1, "form-control", 3, "ngModelChange", "input", "ngStyle", "placeholder", "ngModel"], [1, "input-group-append"], ["type", "submit"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["class", "row", 4, "ngIf"], ["class", "row group-btn", 4, "ngIf"], [3, "ngStyle"], ["class", "row d-flex justify-content-center list-card mt-5", 4, "ngIf"], ["class", "col-12 mt-1", 4, "ngFor", "ngForOf"], [1, "col-7", "col-md-7", "col-xl-7", "d-flex", "justify-content-end"], [1, "col-6", "col-xl-7", "col-md-7", "d-flex", "justify-content-end"], ["type", "text", "size", "50", 1, "form-control", 3, "ngModelChange", "input", "ngStyle", "placeholder", "ngModel"], [1, "col-6", "pl-1", "pr-0", "text-center"], ["ngbDropdown", "", "container", "body"], ["id", "gfg", "ngbDropdownToggle", "", 1, "btn", "btn-primary"], ["aria-hidden", "true", 1, "fa", "fa-check-circle-o", "mr-1"], ["ngbDropdownMenu", "gfg"], ["ngbDropdownItem", "", 3, "click"], ["id", "gfg1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["aria-hidden", "true", 1, "mr-1", "fa", "fa-sort-amount-desc"], ["ngbDropdownMenu", "gfg1"], [1, "row", "group-btn"], [1, "btn-group", "dropup"], ["data-toggle", "dropdown", 1, "col-12", "btn", "btn-primary", "dropdown-toggle"], ["aria-hidden", "true", 1, "fa", "fa-check-circle-o"], [1, "dropdown-menu"], [1, "dropdown-item", "dropdown-link", 3, "click"], ["type", "button", "id", "dropdownMenuButton", "aria-haspopup", "true", "aria-expanded", "false", "data-toggle", "dropdown", 1, "col-12", "btn", "btn-outline-primary", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [1, "row", "d-flex", "justify-content-center", "list-card", "mt-5"], [1, "col-8"], [1, "nodataList"], [1, "col-12", "mt-1"], [1, "card"], ["title", "Enter Class", 1, "col-12", "mb-3", "school-img", "school-card-img", 3, "click"], [4, "ngIf"], [1, "col-12"], [1, "t-period"], [1, "font-weight-bold"], [1, "t-name", "font-weight-bold"], ["class", "t-name font-weight-bold", 4, "ngIf"], ["src", "assets/images/ristaschool/Mask Group 35.png", "alt", "", 1, "w-100"], ["alt", "", 1, "w-100", 3, "src"], ["id", "gfg2", "ngbDropdownToggle", "", 1, "btn", "btn-primary"], ["ngbDropdownMenu", "gfg2"], ["id", "gfg3", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "gfg3"], ["data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "btn-group", "dropdown"], ["type", "button", "id", "dropdownMenuButton1", "aria-haspopup", "true", "aria-expanded", "false", "data-toggle", "dropdown", 1, "btn", "btn-outline-primary", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu"], ["title", "View Assignment", 1, "col-12", "mb-3", "school-img", "school-card-img", 3, "click"], [1, "contenttext"], ["src", "assets/images/ristaschool/option-writing-checkbox-concepts-survey.png", "alt", "", 1, "w-100"], ["type", "button", "id", "dropdownMenuButton2", "aria-haspopup", "true", "aria-expanded", "false", "data-toggle", "dropdown", 1, "col-12", "btn", "btn-outline-primary", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton2", 1, "dropdown-menu"], ["title", "View Assessment", 1, "col-12", "mb-3", "school-img", "school-card-img", 3, "click"], ["src", "assets/images/ristaschool/assessment.png", "alt", "", 1, "w-100"], [1, "modal-header"], [1, "modal-title", "letter"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "modal-body", "text-center"], [1, "modal-footer"], [1, "btn-popup", "pull-right"], [1, "btn", "btn-outline-primary", 3, "click"]], template: function ListHomeComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "section", 2)(2, "div")(3, "div", 3)(4, "div")(5, "div")(6, "div")(7, "div")(8, "div")(9, "h4");
            i0.ɵɵtext(10, "Classes");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 4)(12, "div", 5)(13, "input", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function ListHomeComponent_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.searchClass, $event) || (ctx.searchClass = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("input", function ListHomeComponent_Template_input_input_13_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.updateFilter(ctx.searchClass, "class")); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 7)(15, "button", 8);
            i0.ɵɵelement(16, "i", 9);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(17, ListHomeComponent_div_17_Template, 27, 2, "div", 10)(18, ListHomeComponent_div_18_Template, 24, 2, "div", 11);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(19, "div", 12);
            i0.ɵɵtemplate(20, ListHomeComponent_div_20_Template, 4, 0, "div", 13);
            i0.ɵɵelementStart(21, "div", 3);
            i0.ɵɵtemplate(22, ListHomeComponent_div_22_Template, 24, 9, "div", 14);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(23, "div")(24, "div", 3)(25, "div")(26, "div")(27, "div")(28, "div")(29, "div")(30, "h4");
            i0.ɵɵtext(31, "Assignments");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "div", 15)(33, "div", 5)(34, "input", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function ListHomeComponent_Template_input_ngModelChange_34_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.searchAssign, $event) || (ctx.searchAssign = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("input", function ListHomeComponent_Template_input_input_34_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.updateFilter(ctx.searchAssign, "assign")); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "div", 7)(36, "button", 8);
            i0.ɵɵelement(37, "i", 9);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(38, ListHomeComponent_div_38_Template, 25, 2, "div", 10)(39, ListHomeComponent_div_39_Template, 22, 2, "div", 11);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(40, "div", 12);
            i0.ɵɵtemplate(41, ListHomeComponent_div_41_Template, 4, 0, "div", 13);
            i0.ɵɵelementStart(42, "div", 3);
            i0.ɵɵtemplate(43, ListHomeComponent_div_43_Template, 28, 10, "div", 14);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(44, "div")(45, "div", 3)(46, "div")(47, "div")(48, "div")(49, "div")(50, "div")(51, "h4");
            i0.ɵɵtext(52, "Assessments");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(53, "div", 16)(54, "div", 5)(55, "input", 17);
            i0.ɵɵtwoWayListener("ngModelChange", function ListHomeComponent_Template_input_ngModelChange_55_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.searchAssess, $event) || (ctx.searchAssess = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("input", function ListHomeComponent_Template_input_input_55_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.updateFilter(ctx.searchAssess, "assess")); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "div", 7)(57, "button", 8);
            i0.ɵɵelement(58, "i", 9);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(59, ListHomeComponent_div_59_Template, 25, 2, "div", 10)(60, ListHomeComponent_div_60_Template, 22, 2, "div", 11);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(61, "div", 12);
            i0.ɵɵtemplate(62, ListHomeComponent_div_62_Template, 4, 0, "div", 13);
            i0.ɵɵelementStart(63, "div", 3);
            i0.ɵɵtemplate(64, ListHomeComponent_div_64_Template, 28, 10, "div", 14);
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵtemplate(65, ListHomeComponent_ng_template_65_Template, 12, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("col-12 col-md-4 ", ctx.env.deviceType() ? "px-1" : "", "");
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("col-12 ", ctx.env.deviceType() ? "" : "mb-2", "");
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("card ", ctx.env.deviceType() ? "mb-1" : "", "");
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("card-body small-screen-group-btn ", ctx.env.deviceType() ? "px-3 py-2" : "p-3", "");
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("row d-flex justify-content-between list-title ", ctx.env.deviceType() ? "align-items-end pb-2 mb-2" : "", "");
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("col-6 col-md-5 col-xl-5 design1 ", !ctx.env.deviceType() ? "pt-2" : "", "");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(98, _c1, ctx.env.deviceType() ? "34px" : "41px"))("placeholder", ctx.env.deviceType() ? "Search" : "Search Class");
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchClass);
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx.env.deviceType() ? "py-0 border-radius-2" : "", "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.env.deviceType());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.env.deviceType());
            i0.ɵɵadvance();
            i0.ɵɵclassMap(ctx.env.deviceType() ? "pl-3 home-ipad-sec-scroll" : "col-12 home-sec-scroll");
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(100, _c2, ctx.env.deviceType() ? "95%" : ""));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.classesDetails == "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.classesDetails);
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("col-12 col-md-4 ", ctx.env.deviceType() ? "px-1" : "", "");
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("col-12 ", ctx.env.deviceType() ? "" : "mb-2", "");
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("card ", ctx.env.deviceType() ? "mb-1" : "", "");
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("card-body small-screen-group-btn ", ctx.env.deviceType() ? "px-3 py-2" : "p-3", "");
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("row d-flex justify-content-between list-title ", ctx.env.deviceType() ? "align-items-end mb-2 pb-2" : "", "");
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("col-5 col-md-5 col-xl-5 design ", !ctx.env.deviceType() ? "pt-2" : "", "");
            i0.ɵɵadvance(5);
            i0.ɵɵpropertyInterpolate1("placeholder", "Search ", ctx.env.deviceType() ? "" : "Assignment", "");
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(102, _c1, ctx.env.deviceType() ? "34px" : "41px"));
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchAssign);
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx.env.deviceType() ? "py-0 border-radius-2" : "", "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.env.deviceType());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.env.deviceType());
            i0.ɵɵadvance();
            i0.ɵɵclassMap(ctx.env.deviceType() ? "pl-3 home-ipad-sec-scroll" : "col-12 home-sec-scroll");
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(104, _c2, ctx.env.deviceType() ? "95%" : ""));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.assignmentsDetails == "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.assignmentsDetails);
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("col-12 col-md-4 ", ctx.env.deviceType() ? "px-1" : "", "");
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("col-12 ", ctx.env.deviceType() ? "" : "mb-2", "");
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("card ", ctx.env.deviceType() ? "mb-1" : "", "");
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("card-body small-screen-group-btn ", ctx.env.deviceType() ? "px-3 py-2" : "p-3", "");
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("row d-flex justify-content-between list-title ", ctx.env.deviceType() ? "align-items-end mb-2 pb-2" : "", "");
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("col-6 col-md-5 col-xl-5 design ", !ctx.env.deviceType() ? "pt-2" : "", "");
            i0.ɵɵadvance(5);
            i0.ɵɵpropertyInterpolate1("placeholder", "Search ", ctx.env.deviceType() ? "" : "Assessment", "");
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(106, _c1, ctx.env.deviceType() ? "34px" : "41px"));
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchAssess);
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx.env.deviceType() ? "py-0 border-radius-2" : "", "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.env.deviceType());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.env.deviceType());
            i0.ɵɵadvance();
            i0.ɵɵclassMap(ctx.env.deviceType() ? "pl-3 home-ipad-sec-scroll" : "col-12 home-sec-scroll");
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(108, _c2, ctx.env.deviceType() ? "95%" : ""));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.assessmentDetails == "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.assessmentDetails);
        } }, dependencies: [i17.NgForOf, i17.NgIf, i17.NgStyle, i2.NgbDropdown, i2.NgbDropdownToggle, i2.NgbDropdownMenu, i2.NgbDropdownItem, i18.DefaultValueAccessor, i18.NgControlStatus, i18.NgModel, i17.DatePipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListHomeComponent, [{
        type: Component,
        args: [{ selector: 'app-list-home', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\">\n    <section class=\"row list-card\">\n        <div class=\"col-12 col-md-4 {{env.deviceType() ? 'px-1' : ''}}\">\n            <div class=\"row\">\n                <div class=\"col-12 {{env.deviceType() ? '' : 'mb-2'}}\">\n                    <div class=\"card {{env.deviceType() ? 'mb-1' : ''}}\">\n                        <div class=\"card-body small-screen-group-btn {{env.deviceType() ? 'px-3 py-2' : 'p-3'}}\">\n                            <div class=\"row d-flex justify-content-between list-title {{env.deviceType() ? 'align-items-end pb-2 mb-2' : ''}}\">\n                                <div class=\"col-6 col-md-5 col-xl-5 design1 {{!env.deviceType() ? 'pt-2' : ''}}\">\n                                    <h4>Classes</h4>\n                                </div>\n                                <div class=\"col-6 col-md-7 col-xl-7 d-flex justify-content-end\">\n                                        <div class=\"input-group\">\n                                            <input type=\"text\" class=\"form-control\" [ngStyle]=\"{'height' : env.deviceType() ? '34px' : '41px'}\" [placeholder]=\"env.deviceType() ? 'Search' : 'Search Class'\" [(ngModel)]=\"searchClass\" (input)=\"updateFilter(searchClass, 'class')\">\n                                            <div class=\"input-group-append\">\n                                                <button class=\"btn btn-primary {{env.deviceType() ? 'py-0 border-radius-2' : ''}}\" type=\"submit\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n                                            </div>\n                                        </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\" *ngIf=\"env.deviceType()\">\n                                <div class=\"col-6 pl-1 pr-0 text-center\">\n                                    <div ngbDropdown container=\"body\">\n                                        <button class=\"btn btn-primary\" id=\"gfg\"\n                                                ngbDropdownToggle><i class=\"fa fa-check-circle-o mr-1\" aria-hidden=\"true\"></i>{{classbutton}}</button>\n                                        <div ngbDropdownMenu=\"gfg\">\n                                            <button ngbDropdownItem (click)=\"classFilter('2')\">Upcoming</button>\n                                            <button ngbDropdownItem (click)=\"classFilter('3')\">In Progress</button>\n                                            <button ngbDropdownItem (click)=\"classFilter('4')\">Completed</button>\n                                            <button ngbDropdownItem (click)=\"classFilter('1')\">All</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-6 pl-1 pr-0 text-center\">\n                                    <div ngbDropdown container=\"body\">\n                                        <button class=\"btn btn-outline-primary\" id=\"gfg1\"\n                                                ngbDropdownToggle><i class=\"mr-1 fa fa-sort-amount-desc\" aria-hidden=\"true\"></i>{{sortButton}}</button>\n                                        <div ngbDropdownMenu=\"gfg1\">\n                                            <button ngbDropdownItem (click)=\"classSort('1')\">End Date</button>\n                                            <button ngbDropdownItem (click)=\"classSort('2')\">Assignee</button>\n                                            <button ngbDropdownItem (click)=\"classSort('3')\">Alphabetical</button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row group-btn\" *ngIf=\"!env.deviceType()\">\n                                <div class=\"btn-group dropup\">\n                                    <button class=\"col-12 btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-check-circle-o\" aria-hidden=\"true\"></i> {{classbutton}} </button>\n                                    <div class=\"dropdown-menu\">\n                                        <a class=\"dropdown-item dropdown-link\" (click)=\"classFilter('2')\">Upcoming Classes</a>\n                                        <a class=\"dropdown-item dropdown-link\" (click)=\"classFilter('3')\">In Progress Classes</a>\n                                        <a class=\"dropdown-item dropdown-link\" (click)=\"classFilter('4')\">Completed Classes</a>\n                                        <a class=\"dropdown-item dropdown-link\" (click)=\"classFilter('1')\">All Classes</a>\n                                    </div>\n                                </div>\n                                <div class=\"btn-group dropup\">\n                                    <button type=\"button\" class=\"col-12 btn btn-outline-primary dropdown-toggle\" id=\"dropdownMenuButton\" aria-haspopup=\"true\" aria-expanded=\"false\" data-toggle=\"dropdown\">{{sortButton}}</button>\n                                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                                        <a class=\"dropdown-item dropdown-link\" (click)=\"classSort('1')\">End Date</a>\n                                        <a class=\"dropdown-item dropdown-link\" (click)=\"classSort('2')\">Assignee</a>\n                                        <a class=\"dropdown-item dropdown-link\" (click)=\"classSort('3')\">Alphabetical</a>\n                                    </div>\n                                </div>\n                                <!--</div>-->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"{{env.deviceType() ? 'pl-3 home-ipad-sec-scroll' : 'col-12 home-sec-scroll'}}\" [ngStyle]=\"{'width': env.deviceType() ? '95%' : ''}\" >\n                    <div class=\"row d-flex justify-content-center list-card mt-5\" *ngIf=\"classesDetails==''\">\n                        <div class=\"col-8\">\n                            <button class=\"nodataList\">No Data Available!</button>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 mt-1\" *ngFor=\"let class of classesDetails ; let i = index\">\n                            <div class=\"card\">\n                                <div class=\"card-body {{env.deviceType() ? 'p-2' : 'p-3'}}\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 mb-3 school-img school-card-img\" title=\"Enter Class\" (click)=\"enterList(i , class)\" >\n                                            <figure *ngIf=\"class.profile_url == ''\">\n                                                <img src=\"assets/images/ristaschool/Mask Group 35.png\" class=\"w-100\" alt=\"\">\n                                            </figure>\n                                            <figure *ngIf=\"class.profile_url != ''\">\n                                                <img [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + class.profile_url)\" class=\"w-100\" alt=\"\">\n                                            </figure>\n                                        </div>\n                                        <div class=\"col-12\">\n                                            <h4 class=\"t-period\"><span class=\"font-weight-bold\">{{class.class_name}} </span>\n<!--                                                <br><small>With <span class=\"t-name font-weight-bold\">{{class.teacher_first_name + ' ' + class.teacher_last_name}}</span></small> -->\n                                            </h4>\n                                            <p><span>Subject: </span> <span class=\"t-name font-weight-bold\">{{class.subject_name}}</span></p>\n                                            <p><span>Start: </span> <span *ngIf=\"class.start_date != '0000-00-00'\" class=\"t-name font-weight-bold\">{{class.start_date|date:'MM/dd/yyyy'}}</span> &nbsp; &nbsp;\n                                                <span>End: </span> <span *ngIf=\"class.end_date != '0000-00-00'\" class=\"t-name font-weight-bold\">{{class.end_date|date:'MM/dd/yyyy'}}</span>\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12 col-md-4 {{env.deviceType() ? 'px-1' : ''}}\">\n            <div class=\"row\">\n                <div class=\"col-12 {{env.deviceType() ? '' : 'mb-2'}}\">\n                    <div class=\"card {{env.deviceType() ? 'mb-1' : ''}}\">\n                        <div class=\"card-body small-screen-group-btn {{env.deviceType() ? 'px-3 py-2' : 'p-3'}}\">\n                            <div class=\"row d-flex justify-content-between list-title {{env.deviceType() ? 'align-items-end mb-2 pb-2' : ''}}\">\n                                <div class=\"col-5 col-md-5 col-xl-5 design {{!env.deviceType() ? 'pt-2' : ''}}\">\n                                    <h4>Assignments</h4>\n                                </div>\n                                <div class=\"col-7 col-md-7 col-xl-7 d-flex justify-content-end\">\n                                    <div class=\"input-group\">\n                                        <input type=\"text\" class=\"form-control\" [ngStyle]=\"{'height' : env.deviceType() ? '34px' : '41px'}\" placeholder=\"Search {{env.deviceType() ? '' : 'Assignment'}}\" [(ngModel)]=\"searchAssign\" (input)=\"updateFilter(searchAssign, 'assign')\">\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn-primary {{env.deviceType() ? 'py-0 border-radius-2' : ''}}\" type=\"submit\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\" *ngIf=\"env.deviceType()\">\n                                <div class=\"col-6 pl-1 pr-0 text-center\">\n                                    <div ngbDropdown container=\"body\">\n                                        <button class=\"btn btn-primary\" id=\"gfg2\"\n                                                ngbDropdownToggle><i class=\"fa fa-check-circle-o mr-1\" aria-hidden=\"true\"></i>{{assignButton}}</button>\n                                        <div ngbDropdownMenu=\"gfg2\">\n                                            <button ngbDropdownItem (click)=\"assignmentFilter('3')\">In Progress</button>\n                                            <button ngbDropdownItem (click)=\"assignmentFilter('4')\">Completed</button>\n                                            <button ngbDropdownItem (click)=\"assignmentFilter('1')\">All</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-6 pl-1 pr-0 text-center\">\n                                    <div ngbDropdown container=\"body\">\n                                        <button class=\"btn btn-outline-primary\" id=\"gfg3\"\n                                                ngbDropdownToggle><i class=\"mr-1 fa fa-sort-amount-desc\" aria-hidden=\"true\"></i>{{sortButton}}</button>\n                                        <div ngbDropdownMenu=\"gfg3\">\n                                            <button ngbDropdownItem (click)=\"assignmentSort('1')\">End Date</button>\n                                            <button ngbDropdownItem (click)=\"assignmentSort('2')\">Assignee</button>\n                                            <button ngbDropdownItem (click)=\"assignmentSort('3')\">Alphabetical</button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row group-btn\" *ngIf=\"!env.deviceType()\">\n\n                                <div class=\"btn-group dropup\">\n                                    <button class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-check-circle-o\" aria-hidden=\"true\"></i> {{assignButton}} </button>\n                                    <div class=\"dropdown-menu\">\n                                        <a class=\"dropdown-item dropdown-link\" (click)=\"assignmentFilter('3')\">In Progress Assignments</a>\n                                        <a class=\"dropdown-item dropdown-link\" (click)=\"assignmentFilter('4')\">Completed Assignments</a>\n                                        <a class=\"dropdown-item dropdown-link\" (click)=\"assignmentFilter('1')\">All Assignments</a>\n                                    </div>\n                                </div>\n                                <div class=\"btn-group dropdown\">\n                                    <button type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" id=\"dropdownMenuButton1\" aria-haspopup=\"true\" aria-expanded=\"false\" data-toggle=\"dropdown\">{{assignSortButton}}</button>\n                                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n                                        <a class=\"dropdown-item dropdown-link\" (click)=\"assignmentSort('1')\">End Date</a>\n                                        <a class=\"dropdown-item dropdown-link\" (click)=\"assignmentSort('2')\">Assignee</a>\n                                        <a class=\"dropdown-item dropdown-link\" (click)=\"assignmentSort('3')\">Alphabetical</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"{{env.deviceType() ? 'pl-3 home-ipad-sec-scroll' : 'col-12 home-sec-scroll'}}\" [ngStyle]=\"{'width': env.deviceType() ? '95%' : ''}\">\n                    <div class=\"row d-flex justify-content-center list-card mt-5\" *ngIf=\"assignmentsDetails==''\">\n                        <div class=\"col-8\">\n                            <button class=\"nodataList\">No Data Available!</button>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 mt-1\" *ngFor=\"let assign of assignmentsDetails\">\n                            <div class=\"card\">\n                                <div class=\"card-body {{env.deviceType() ? 'p-2' : 'p-3'}}\">\n                                    <div class=\"row\">\n                                        <div (click)=\"assignmentPage(assign)\" class=\"col-12 mb-3 school-img school-card-img\" title=\"View Assignment\">\n                                            <figure *ngIf=\"assign.profile_url == ''\">\n                                                <img src=\"assets/images/ristaschool/option-writing-checkbox-concepts-survey.png\" class=\"w-100\" alt=\"\">\n                                            </figure>\n                                            <figure *ngIf=\"assign.profile_url != ''\">\n                                                <img [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + assign.profile_url)\" class=\"w-100\" alt=\"\">\n                                            </figure>\n                                        </div>\n                                        <div class=\"col-12\">\n                                            <h4 class=\"t-period\"><span class=\"font-weight-bold\">{{assign.content_name}} </span><b class=\"contenttext\">\n                                                <small>{{assign.content_format == 3 ? '(TEXT)' : assign?.is_pdf_content == 0 ? '(LINK)' : '(PDF)'}}</small></b><br>\n<!--                                                <small>Assigned By <span class=\"t-name font-weight-bold\">{{assign.teacher_first_name + ' ' + assign.teacher_last_name}}</span></small> -->\n                                            </h4>\n                                            <p><span>Subject: </span> <span class=\"t-name font-weight-bold\">{{assign.subject_name}}</span></p>\n                                            <p><span>Start: </span> <span *ngIf=\"assign.start_date != '0000-00-00'\" class=\"t-name font-weight-bold\">{{assign.start_date|date:'MM/dd/yyyy'}}</span> &nbsp; &nbsp;\n                                                <span>End: </span> <span *ngIf=\"assign.end_date != '0000-00-00'\" class=\"t-name font-weight-bold\">{{assign.end_date|date:'MM/dd/yyyy'}}</span>\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12 col-md-4 {{env.deviceType() ? 'px-1' : ''}}\">\n            <div class=\"row\">\n                <div class=\"col-12 {{env.deviceType() ? '' : 'mb-2'}}\">\n                    <div class=\"card {{env.deviceType() ? 'mb-1' : ''}}\">\n                        <div class=\"card-body small-screen-group-btn {{env.deviceType() ? 'px-3 py-2' : 'p-3'}}\">\n                            <div class=\"row d-flex justify-content-between list-title {{env.deviceType() ? 'align-items-end mb-2 pb-2' : ''}}\">\n                                <div class=\"col-6 col-md-5 col-xl-5 design {{!env.deviceType() ? 'pt-2' : ''}}\">\n                                    <h4>Assessments</h4>\n                                </div>\n                                <div class=\"col-6 col-xl-7 col-md-7 d-flex justify-content-end\">\n                                    <div class=\"input-group\">\n                                        <input type=\"text\" class=\"form-control\" [ngStyle]=\"{'height' : env.deviceType() ? '34px' : '41px'}\" size=\"50\" placeholder=\"Search {{env.deviceType() ? '' : 'Assessment'}}\" [(ngModel)]=\"searchAssess\" (input)=\"updateFilter(searchAssess, 'assess')\">\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn-primary {{env.deviceType() ? 'py-0 border-radius-2' : ''}}\" type=\"submit\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\" *ngIf=\"env.deviceType()\">\n                                <div class=\"col-6 pl-1 pr-0 text-center\">\n                                    <div ngbDropdown container=\"body\">\n                                        <button class=\"btn btn-primary\" id=\"gfg2\"\n                                                ngbDropdownToggle><i class=\"fa fa-check-circle-o mr-1\" aria-hidden=\"true\"></i>{{assessButton}}</button>\n                                        <div ngbDropdownMenu=\"gfg2\">\n                                            <button ngbDropdownItem (click)=\"assessmentFilter('3')\">In Progress</button>\n                                            <button ngbDropdownItem (click)=\"assessmentFilter('4')\">Completed</button>\n                                            <button ngbDropdownItem (click)=\"assessmentFilter('1')\">All</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-6 pl-1 pr-0 text-center\">\n                                    <div ngbDropdown container=\"body\">\n                                        <button class=\"btn btn-outline-primary\" id=\"gfg3\"\n                                                ngbDropdownToggle><i class=\"mr-1 fa fa-sort-amount-desc\" aria-hidden=\"true\"></i>{{sortButton}}</button>\n                                        <div ngbDropdownMenu=\"gfg3\">\n                                            <button ngbDropdownItem (click)=\"assessmentSort('1')\">End Date</button>\n                                            <button ngbDropdownItem (click)=\"assessmentSort('2')\">Assignee</button>\n                                            <button ngbDropdownItem (click)=\"assessmentSort('3')\">Alphabetical</button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row group-btn\" *ngIf=\"!env.deviceType()\">\n                                <div class=\"btn-group dropup\">\n                                    <button class=\"col-12 btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-check-circle-o\" aria-hidden=\"true\"></i> {{assessButton}} </button>\n                                    <div class=\"dropdown-menu\">\n<!--                                        <a class=\"dropdown-item dropdown-link\" (click)=\"assessmentFilter('2')\">Upcoming Assessments</a>-->\n                                        <a class=\"dropdown-item dropdown-link\" (click)=\"assessmentFilter('3')\">In Progress Assessments</a>\n                                        <a class=\"dropdown-item dropdown-link\" (click)=\"assessmentFilter('4')\">Completed Assessments</a>\n                                        <a class=\"dropdown-item dropdown-link\" (click)=\"assessmentFilter('1')\">All Assessments</a>\n                                    </div>\n                                </div>\n                                <div class=\"btn-group dropup\">\n                                    <button type=\"button\" class=\"col-12 btn btn-outline-primary dropdown-toggle\" id=\"dropdownMenuButton2\" aria-haspopup=\"true\" aria-expanded=\"false\" data-toggle=\"dropdown\">{{assessSortButton}}</button>\n                                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton2\">\n                                        <a class=\"dropdown-item dropdown-link\" (click)=\"assessmentSort('1')\">End Date</a>\n                                        <a class=\"dropdown-item dropdown-link\" (click)=\"assessmentSort('2')\">Assignee</a>\n                                        <a class=\"dropdown-item dropdown-link\" (click)=\"assessmentSort('3')\">Alphabetical</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"{{env.deviceType() ? 'pl-3 home-ipad-sec-scroll' : 'col-12 home-sec-scroll'}}\" [ngStyle]=\"{'width': env.deviceType() ? '95%' : ''}\">\n                    <div class=\"row d-flex justify-content-center list-card mt-5\" *ngIf=\"assessmentDetails==''\">\n                        <div class=\"col-8\">\n                            <button class=\"nodataList\">No Data Available!</button>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 mt-1\" *ngFor=\"let assess of assessmentDetails\">\n                            <div class=\"card\">\n                                <div class=\"card-body {{env.deviceType() ? 'p-2' : 'p-3'}}\">\n                                    <div class=\"row\">\n                                        <div (click)=\"checkContentTime(assess, 'assess')\" class=\"col-12 mb-3 school-img school-card-img\" title=\"View Assessment\">\n                                            <figure *ngIf=\"assess.profile_url == ''\">\n                                                <img src=\"assets/images/ristaschool/assessment.png\" class=\"w-100\" alt=\"\">\n                                            </figure>\n                                            <figure *ngIf=\"assess.profile_url != ''\">\n                                                <img [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + assess.profile_url)\" class=\"w-100\" alt=\"\">\n                                            </figure>\n                                        </div>\n                                        <div class=\"col-12\">\n                                            <h4 class=\"t-period\"><span class=\"font-weight-bold\">{{assess.content_name}} </span><b class=\"contenttext\">\n                                                <small>{{assess.content_format == 3 ? '(TEXT)' : assess?.is_pdf_content == 0 ? '(LINK)' : '(PDF)'}}</small></b><br>\n                                            </h4>\n                                            <p><span>Subject: </span> <span class=\"t-name font-weight-bold\">{{assess.subject_name}}</span></p>\n                                            <p><span>Start: </span> <span *ngIf=\"assess.start_date != '0000-00-00'\" class=\"t-name font-weight-bold\">{{assess.start_date|date:'MM/dd/yyyy'}}</span> &nbsp; &nbsp;\n                                                <span>End: </span> <span *ngIf=\"assess.end_date != '0000-00-00'\" class=\"t-name font-weight-bold\">{{assess.end_date|date:'MM/dd/yyyy'}}</span>\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n<!-- Container-fluid Ends-->\n<ng-template #throwError>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">{{ErrorTitle}}</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"onSave()\" ></i>\n    </div>\n    <div class=\"modal-body text-center\">\n        <p><b>{{message}}</b></p>\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"btn-popup pull-right\">\n            <button class=\"btn btn-outline-primary\" (click)=\"onSave()\">ok</button>\n        </div>\n    </div>\n</ng-template>\n" }]
    }], () => [{ type: i1.SchoolService }, { type: i2.NgbModalConfig }, { type: i3.ConfigurationService }, { type: i4.DomSanitizer }, { type: i2.NgbModal }, { type: i5.AuthService }, { type: i6.CommonService }, { type: i7.CommonDataService }, { type: i8.TeacherService }, { type: i9.Router }, { type: i10.NavService }, { type: i11.ToastrService }, { type: i12.EnvironmentService }, { type: i13.CreatorService }, { type: i14.ClassService }, { type: i15.NewsubjectService }, { type: i16.StudentService }], { throwError: [{
            type: ViewChild,
            args: ['throwError']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListHomeComponent, { className: "ListHomeComponent" }); })();
//# sourceMappingURL=list-home.component.js.map