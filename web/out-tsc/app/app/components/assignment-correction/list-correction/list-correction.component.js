import { Component, ViewChild } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SessionConstants } from '../../../shared/data/sessionConstants';
import { dateOptions } from '../../../shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/class.service";
import * as i2 from "../../../shared/service/teacher.service";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
import * as i4 from "../../../shared/service/configuration.service";
import * as i5 from "@angular/platform-browser";
import * as i6 from "ngx-toastr";
import * as i7 from "../../../shared/service/auth.service";
import * as i8 from "../../../shared/service/common-data.service";
import * as i9 from "@angular/router";
import * as i10 from "../../../shared/service/common.service";
import * as i11 from "../../../shared/service/newsubject.service";
import * as i12 from "@angular/common";
import * as i13 from "@angular/forms";
import * as i14 from "@ng-select/ng-select";
import * as i15 from "../../corporateschool/emptyschool/emptyschool.component";
import * as i16 from "../../report/missed-work-report/missed-work-report.component";
import * as i17 from "../../report/items-report/items-report.component";
import * as i18 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["reports"];
const _c1 = ["itemsReports"];
const _c2 = ["showInform"];
const _c3 = a0 => ({ "active1": a0 });
function ListCorrectionComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵelement(1, "img", 31);
    i0.ɵɵelementEnd();
} }
function ListCorrectionComponent_div_0_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "ng-select", 32);
    i0.ɵɵtwoWayListener("ngModelChange", function ListCorrectionComponent_div_0_div_30_Template_ng_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.selectTeacher, $event) || (ctx_r1.selectTeacher = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ListCorrectionComponent_div_0_div_30_Template_ng_select_change_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.setSearch_Filter(ctx_r1.filterType, ctx_r1.sortType); ctx_r1.assignmentList(ctx_r1.filterType, ctx_r1.sortType); return i0.ɵɵresetView(ctx_r1.classList()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.teacherListData);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectTeacher);
} }
function ListCorrectionComponent_div_0_div_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "div", 34)(2, "button", 35);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function ListCorrectionComponent_div_0_section_50_div_2_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 66);
} }
function ListCorrectionComponent_div_0_section_50_div_2_img_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 67);
} if (rf & 2) {
    const list_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("src", ctx_r1.sanitizer.bypassSecurityTrustResourceUrl(ctx_r1.webhost + "/" + list_r5.profile_url), i0.ɵɵsanitizeUrl);
} }
function ListCorrectionComponent_div_0_section_50_div_2_small_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 68);
    i0.ɵɵtext(1, "Not started");
    i0.ɵɵelementEnd();
} }
function ListCorrectionComponent_div_0_section_50_div_2_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 69);
    i0.ɵɵtext(1, "In progress");
    i0.ɵɵelementEnd();
} }
function ListCorrectionComponent_div_0_section_50_div_2_small_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 70);
    i0.ɵɵtext(1, "Completed");
    i0.ɵɵelementEnd();
} }
function ListCorrectionComponent_div_0_section_50_div_2_span_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 51);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, list_r5.end_date));
} }
function ListCorrectionComponent_div_0_section_50_div_2_small_37_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 73);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", list_r5.over_due_days, " (days)");
} }
function ListCorrectionComponent_div_0_section_50_div_2_small_37_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 73);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", list_r5.over_due_days, " (day)");
} }
function ListCorrectionComponent_div_0_section_50_div_2_small_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 71);
    i0.ɵɵtext(1, "Overdue For: ");
    i0.ɵɵtemplate(2, ListCorrectionComponent_div_0_section_50_div_2_small_37_span_2_Template, 2, 1, "span", 72)(3, ListCorrectionComponent_div_0_section_50_div_2_small_37_span_3_Template, 2, 1, "span", 72);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r5.over_due_days != "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r5.over_due_days == "1");
} }
function ListCorrectionComponent_div_0_section_50_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵlistener("click", function ListCorrectionComponent_div_0_section_50_div_2_Template_div_click_0_listener() { const list_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.previewPage(list_r5)); });
    i0.ɵɵelementStart(1, "div", 40)(2, "div", 7)(3, "div", 41)(4, "figure", 42);
    i0.ɵɵlistener("click", function ListCorrectionComponent_div_0_section_50_div_2_Template_figure_click_4_listener() { const list_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.listDetails(list_r5)); });
    i0.ɵɵtemplate(5, ListCorrectionComponent_div_0_section_50_div_2_img_5_Template, 1, 0, "img", 43)(6, ListCorrectionComponent_div_0_section_50_div_2_img_6_Template, 1, 1, "img", 44);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 45)(8, "h4", 46);
    i0.ɵɵtemplate(9, ListCorrectionComponent_div_0_section_50_div_2_small_9_Template, 2, 0, "small", 47)(10, ListCorrectionComponent_div_0_section_50_div_2_small_10_Template, 2, 0, "small", 48)(11, ListCorrectionComponent_div_0_section_50_div_2_small_11_Template, 2, 0, "small", 49);
    i0.ɵɵtext(12, " \u00A0 ");
    i0.ɵɵelementStart(13, "span", 50);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(15, " \u00A0");
    i0.ɵɵelementStart(16, "small");
    i0.ɵɵtext(17, " with ");
    i0.ɵɵelementStart(18, "span", 51);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "div", 52)(21, "p")(22, "span");
    i0.ɵɵtext(23, "Subject: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span", 51);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(26, " \u00A0 \u00A0 ");
    i0.ɵɵelementStart(27, "span");
    i0.ɵɵtext(28, "Class: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "span", 51);
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(31, "div", 18)(32, "div", 7)(33, "div", 53)(34, "small");
    i0.ɵɵtext(35, "End Date: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(36, ListCorrectionComponent_div_0_section_50_div_2_span_36_Template, 3, 3, "span", 54)(37, ListCorrectionComponent_div_0_section_50_div_2_small_37_Template, 4, 2, "small", 55);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div", 56)(39, "div", 57)(40, "div", 58)(41, "button", 59);
    i0.ɵɵtext(42, "Action ");
    i0.ɵɵelement(43, "i", 60);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "div", 61)(45, "a", 62);
    i0.ɵɵlistener("click", function ListCorrectionComponent_div_0_section_50_div_2_Template_a_click_45_listener() { const list_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.reportDetails("Assignment", list_r5)); });
    i0.ɵɵelement(46, "i", 63);
    i0.ɵɵtext(47, " Reports");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "a", 62);
    i0.ɵɵlistener("click", function ListCorrectionComponent_div_0_section_50_div_2_Template_a_click_48_listener() { const list_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.itemsReportDetails(list_r5)); });
    i0.ɵɵelement(49, "i", 64);
    i0.ɵɵtext(50, " Itemized Reports");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "a", 62);
    i0.ɵɵlistener("click", function ListCorrectionComponent_div_0_section_50_div_2_Template_a_click_51_listener() { const list_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showInformation(list_r5)); });
    i0.ɵɵelement(52, "i", 65);
    i0.ɵɵtext(53, " Information");
    i0.ɵɵelementEnd()()()()()()()()();
} if (rf & 2) {
    const list_r5 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", list_r5.profile_url == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r5.profile_url != "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r5.status == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r5.status == 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r5.status == 3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(list_r5.content_name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("\u00A0 ", list_r5.teacher_name, "");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(list_r5.subject_name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(list_r5.class_name);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", list_r5.end_date != "0000-00-00");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r5.over_due_days != "0");
} }
function ListCorrectionComponent_div_0_section_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 36)(1, "div", 37);
    i0.ɵɵtemplate(2, ListCorrectionComponent_div_0_section_50_div_2_Template, 54, 11, "div", 38);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.listData);
} }
function ListCorrectionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, ListCorrectionComponent_div_0_div_1_Template, 2, 0, "div", 6);
    i0.ɵɵelementStart(2, "div", 7)(3, "div", 8)(4, "button", 9);
    i0.ɵɵlistener("click", function ListCorrectionComponent_div_0_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.setSearch_Filter(2, ctx_r1.sortType); return i0.ɵɵresetView(ctx_r1.assignmentList(2, ctx_r1.sortType)); });
    i0.ɵɵtext(5, "In progress");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 10);
    i0.ɵɵlistener("click", function ListCorrectionComponent_div_0_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.setSearch_Filter(1, ctx_r1.sortType); return i0.ɵɵresetView(ctx_r1.assignmentList(1, ctx_r1.sortType)); });
    i0.ɵɵtext(7, "Upcoming");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 10);
    i0.ɵɵlistener("click", function ListCorrectionComponent_div_0_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.setSearch_Filter(3, ctx_r1.sortType); return i0.ɵɵresetView(ctx_r1.assignmentList(3, ctx_r1.sortType)); });
    i0.ɵɵtext(9, "Completed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 10);
    i0.ɵɵlistener("click", function ListCorrectionComponent_div_0_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.setSearch_Filter(0, ctx_r1.sortType); return i0.ɵɵresetView(ctx_r1.assignmentList(0, ctx_r1.sortType)); });
    i0.ɵɵtext(11, "All");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 11);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 12)(15, "a", 13);
    i0.ɵɵlistener("click", function ListCorrectionComponent_div_0_Template_a_click_15_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.setSearch_Filter(ctx_r1.filterType, 1); return i0.ɵɵresetView(ctx_r1.classSort(1)); });
    i0.ɵɵtext(16, "Recent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "a", 13);
    i0.ɵɵlistener("click", function ListCorrectionComponent_div_0_Template_a_click_17_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.setSearch_Filter(ctx_r1.filterType, 4); return i0.ɵɵresetView(ctx_r1.classSort(4)); });
    i0.ɵɵtext(18, "Oldest");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "a", 13);
    i0.ɵɵlistener("click", function ListCorrectionComponent_div_0_Template_a_click_19_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.setSearch_Filter(ctx_r1.filterType, 2); return i0.ɵɵresetView(ctx_r1.classSort(2)); });
    i0.ɵɵtext(20, "Name A-Z");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "a", 13);
    i0.ɵɵlistener("click", function ListCorrectionComponent_div_0_Template_a_click_21_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.setSearch_Filter(ctx_r1.filterType, 3); return i0.ɵɵresetView(ctx_r1.classSort(3)); });
    i0.ɵɵtext(22, "Name Z-A");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "div", 14)(24, "button", 15);
    i0.ɵɵlistener("click", function ListCorrectionComponent_div_0_Template_button_click_24_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetSearch()); });
    i0.ɵɵelement(25, "i", 16);
    i0.ɵɵtext(26, "Reset Filter");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "div", 17)(28, "div", 18)(29, "ng-select", 19);
    i0.ɵɵtwoWayListener("ngModelChange", function ListCorrectionComponent_div_0_Template_ng_select_ngModelChange_29_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.selectClassRoom, $event) || (ctx_r1.selectClassRoom = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ListCorrectionComponent_div_0_Template_ng_select_change_29_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.setSearch_Filter(ctx_r1.filterType, ctx_r1.sortType); return i0.ɵɵresetView(ctx_r1.assignmentList(ctx_r1.filterType, ctx_r1.sortType)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(30, ListCorrectionComponent_div_0_div_30_Template, 2, 2, "div", 20);
    i0.ɵɵelementStart(31, "div")(32, "div", 21)(33, "input", 22);
    i0.ɵɵlistener("input", function ListCorrectionComponent_div_0_Template_input_input_33_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updateFilter(ctx_r1.searchStudent)); });
    i0.ɵɵtwoWayListener("ngModelChange", function ListCorrectionComponent_div_0_Template_input_ngModelChange_33_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.searchStudent, $event) || (ctx_r1.searchStudent = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "div", 23)(35, "button", 24);
    i0.ɵɵelement(36, "i", 25);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(37, "div")(38, "div", 21)(39, "input", 26);
    i0.ɵɵtwoWayListener("ngModelChange", function ListCorrectionComponent_div_0_Template_input_ngModelChange_39_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.searchClass, $event) || (ctx_r1.searchClass = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("input", function ListCorrectionComponent_div_0_Template_input_input_39_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updateFilter(ctx_r1.searchClass)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "div", 23)(41, "button", 24);
    i0.ɵɵelement(42, "i", 25);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(43, "div")(44, "div", 21)(45, "input", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function ListCorrectionComponent_div_0_Template_input_ngModelChange_45_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.searchAssignment, $event) || (ctx_r1.searchAssignment = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("input", function ListCorrectionComponent_div_0_Template_input_input_45_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updateFilter(ctx_r1.searchAssignment)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "div", 23)(47, "button", 24);
    i0.ɵɵelement(48, "i", 25);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(49, ListCorrectionComponent_div_0_div_49_Template, 4, 0, "div", 28)(50, ListCorrectionComponent_div_0_section_50_Template, 3, 1, "section", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showLoader);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", !ctx_r1.buttonSelect)("ngClass", i0.ɵɵpureFunction1(28, _c3, ctx_r1.filterType == 2));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r1.buttonSelect)("ngClass", i0.ɵɵpureFunction1(30, _c3, ctx_r1.filterType == 1));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r1.buttonSelect)("ngClass", i0.ɵɵpureFunction1(32, _c3, ctx_r1.filterType == 3));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r1.buttonSelect)("ngClass", i0.ɵɵpureFunction1(34, _c3, ctx_r1.filterType == 0));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r1.buttonSelect);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.sortButton);
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("items", ctx_r1.batchData);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectClassRoom);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.auth.getRoleId() != "4");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.auth.getRoleId() != "4" ? "2" : "3", " btn-popup pull-right mb-0 px-2");
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.searchStudent);
    i0.ɵɵadvance(4);
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.auth.getRoleId() != "4" ? "2" : "3", " btn-popup pull-right mb-0 px-2");
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.searchClass);
    i0.ɵɵadvance(4);
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.auth.getRoleId() != "4" ? "2" : "3", " btn-popup pull-right mb-0 px-2");
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.searchAssignment);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.listData == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.listData != "");
} }
function ListCorrectionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-emptyschool");
    i0.ɵɵelementEnd();
} }
function ListCorrectionComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 74)(1, "h4", 75);
    i0.ɵɵtext(2, "Report");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 76);
    i0.ɵɵlistener("click", function ListCorrectionComponent_ng_template_2_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 77);
    i0.ɵɵelement(5, "app-missed-work-report", 78);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("classShow", true)("showContent", ctx_r1.selectContent)("studentView", false)("contentNameValue", ctx_r1.contentNameValue)("timeView", false);
} }
function ListCorrectionComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 74)(1, "h4", 75);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "i", 76);
    i0.ɵɵlistener("click", function ListCorrectionComponent_ng_template_4_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 77);
    i0.ɵɵelement(6, "app-items-report", 79);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(3, 4, ctx_r1.reportData.content_name), " - Report");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("showContent", "other")("studentView", false)("timeView", true);
} }
function ListCorrectionComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 74)(1, "h4", 75);
    i0.ɵɵtext(2, "Info");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 76);
    i0.ɵɵlistener("click", function ListCorrectionComponent_ng_template_6_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 77)(5, "p", 80)(6, "small");
    i0.ɵɵtext(7, "Total No. of Students: ");
    i0.ɵɵelementStart(8, "span", 81);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "p", 80)(11, "small");
    i0.ɵɵtext(12, "No. of Students Completed: ");
    i0.ɵɵelementStart(13, "span", 81);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.classInfo.total_students);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.classInfo.completed_students);
} }
export class ListCorrectionComponent {
    constructor(classService, teacher, config, confi, sanitizer, toastr, modalService, auth, commondata, route, common, newSubject) {
        this.classService = classService;
        this.teacher = teacher;
        this.config = config;
        this.confi = confi;
        this.sanitizer = sanitizer;
        this.toastr = toastr;
        this.modalService = modalService;
        this.auth = auth;
        this.commondata = commondata;
        this.route = route;
        this.common = common;
        this.newSubject = newSubject;
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            // other options are here...
        };
        this.searchAssignment = '';
        this.searchClass = '';
        this.searchStudent = '';
        this.imgUrl = this.confi.getimgUrl();
        this.reportData = JSON.parse(this.auth.getSessionData('Individual-items-Report'));
        config.backdrop = 'static';
        config.keyboard = false;
        this.webhost = this.confi.getimgUrl();
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        if (this.schoolStatus.length != 0) {
            this.newSubject.schoolChange.subscribe(params => {
                if (params != '') {
                    if (this.route.url.includes('assignment-correction')) {
                        this.init(params);
                    }
                }
                else {
                    this.init(this.auth.getSessionData('school_id'));
                }
            });
        }
        else {
        }
    }
    ngOnInit() {
        this.auth.setSessionData('resourceAccess', false);
        this.auth.removeSessionData('backOption');
        this.allowSelect = false;
        this.newSubject.allowSchoolChange(this.allowSelect);
    }
    init(res) {
        this.showLoader = false;
        this.buttonSelect = true;
        this.schoolId = res;
        this.getSearch_Filter();
        this.teacherList();
        // this.classList();       // class list not used if any issue go through this
        this.batchDataList();
        this.assignmentList(this.filterType, this.sortType);
    }
    resetSearch() {
        this.searchClass = '';
        this.searchStudent = '';
        this.selectTeacher = null;
        this.selectClassRoom = null;
        this.filterType = 2;
        this.sortType = 1;
        this.sortButton = 'Sort by';
        this.searchAssignment = '';
        this.getSearch_Filter();
        this.assignmentList(this.filterType, this.sortType);
    }
    assignmentSearch() {
        if (this.searchAssignment != '') {
            this.updateFilter(this.searchAssignment);
        }
        else if (this.searchClass != '') {
            this.updateFilter(this.searchClass);
        }
        else if (this.searchStudent != '') {
            this.updateFilter(this.searchStudent);
        }
    }
    onSave() {
        this.modalRef.close();
    }
    classList() {
        const data = {
            platform: 'web',
            type: '9',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : this.selectTeacher ? this.selectTeacher : '0',
        };
        this.classService.classesList(data).subscribe((successData) => {
            this.classListSuccess(successData);
        }, (error) => {
            this.classListFailure(error);
        });
    }
    classListSuccess(successData) {
        if (successData.IsSuccess) {
            this.classData = successData.ResponseObject;
        }
    }
    classListFailure(error) {
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
        this.classService.batchList(data).subscribe((successData) => {
            this.batchListSuccess(successData);
        }, (error) => {
            this.batchListFailure(error);
        });
    }
    batchListSuccess(successData) {
        if (successData.IsSuccess) {
            this.batchData = successData.ResponseObject;
        }
    }
    batchListFailure(error) {
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
        this.classService.individualTeacherList(data).subscribe((successData) => {
            this.teacherListSuccess(successData);
        }, (error) => {
            this.teacherListFailure(error);
        });
    }
    teacherListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.teacherListData = successData.ResponseObject;
        }
    }
    teacherListFailure(error) {
        this.commondata.showLoader(false);
        console.log(error, 'error');
    }
    previewPage(id) {
        if (id.status != '1') {
            this.auth.setSessionData('classDetails', JSON.stringify(id));
            this.route.navigate(['/assignment-correction/correction-page']);
        }
        else {
            this.toastr.error('Assignment not Started');
        }
    }
    classSort(type) {
        if (type == '1') {
            this.sortButton = 'Recent';
            this.assignmentList(this.filterType, type);
        }
        else if (type == '2') {
            this.sortButton = 'Name A-Z';
            this.assignmentList(this.filterType, type);
        }
        else if (type == '3') {
            this.sortButton = 'Name Z-A';
            this.assignmentList(this.filterType, type);
        }
        else if (type == '4') {
            this.sortButton = 'Oldest';
            this.assignmentList(this.filterType, type);
        }
    }
    updateFilter(event) {
        const val = event.toLowerCase();
        let temp;
        let classKey = this.searchClass.toLowerCase();
        let assessmentKey = this.searchAssignment.toLowerCase();
        let studentKey = this.searchStudent.toLowerCase();
        temp = this.listData1.filter((d, index) => {
            let access = false;
            if (d.total_students_Name.length != 0) {
                // return d.student_name?.toLowerCase().indexOf(this.searchStudent) !== -1;
                d.total_students_Name.forEach((arr) => {
                    if (arr.toLowerCase().indexOf(studentKey) !== -1) {
                        access = true;
                    }
                });
            }
            if (studentKey == '') {
                access = true;
            }
            if (d.class_name != null && d.content_name != null) {
                return (d.content_name.toLowerCase().indexOf(assessmentKey) !== -1 && d.class_name.toLowerCase().indexOf(classKey) !== -1 && access);
            }
            else if (studentKey != '') {
                return access;
            }
        });
        this.listData = temp;
        this.setSearch_Filter(this.filterType, this.sortType);
    }
    // studentSearch() {
    //     let temp = this.listData1.filter((d, index) => {
    //         if (d.student_name.length != 0) {
    //             const access = false;
    //             // return d.student_name?.toLowerCase().indexOf(this.searchStudent) !== -1;
    //             d.student_name.forEach((arr) => {
    //                 if (arr.toLowerCase().indexOf(this.searchStudent) !== -1) {
    //                     access = true;
    //                 }
    //             });
    //             return access;
    //         }
    //     });
    // }
    assignmentList(id, type) {
        this.filterType = id;
        this.sortType = type;
        this.showLoader = true;
        this.buttonSelect = false;
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolId,
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : this.selectTeacher ? this.selectTeacher : '0',
            type: this.filterType,
            sort: this.sortType,
            class_id: '0',
            batch_id: this.selectClassRoom ? this.selectClassRoom : '0'
        };
        this.teacher.assignmentDashboardList(data).subscribe((successData) => {
            this.assignmentListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_assignmentList');
        });
    }
    assignmentListSuccess(successData) {
        if (successData.IsSuccess) {
            this.listData = this.listData1 = successData.ResponseObject;
            this.assignmentSearch();
            this.buttonSelect = true;
            this.showLoader = false;
        }
    }
    listDetails(event) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: event.content_id,
            content_format: event.content_format,
            content_type: event.content_type,
            school_id: this.schoolId,
        };
        this.auth.setSessionData('editor', JSON.stringify(data));
        if (event.content_format == '1') {
            this.auth.setSessionData('preview_page', 'create_assignments');
        }
        else if (event.content_format == '3') {
            this.auth.setSessionData('preview_page', 'text_assignments');
        }
        this.auth.setSessionData('preview', 'assignment-correction');
        this.route.navigate(['/repository/preview']);
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
    reportDetails(type, value) {
        this.selectContent = type;
        this.contentNameValue = value.content_id;
        console.log(value);
        // let data: any;
        // data = JSON.parse(this.auth.getSessionData('card-data'));
        this.auth.setSessionData('Individual-Class-Report', JSON.stringify(value));
        this.auth.setSessionData('Individual-student-Report', JSON.stringify(value));
        this.modalRef = this.modalService.open(this.reports, { size: 'xl' });
    }
    itemsReportDetails(data) {
        console.log(data, 'itemsReport');
        this.auth.setSessionData('Individual-items-Report', JSON.stringify(data));
        this.reportData = JSON.parse(this.auth.getSessionData('Individual-items-Report'));
        this.modalRef = this.modalService.open(this.itemsReports, { size: 'xl' });
    }
    showInformation(item) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: item.content_id,
            class_id: item.class_id,
            school_id: this.schoolId
        };
        this.teacher.studentCorrectionInfo(data).subscribe((successData) => {
            this.infoSuccess(successData);
        }, (error) => {
            console.log(error);
        });
    }
    infoSuccess(successData) {
        if (successData.IsSuccess) {
            this.classInfo = successData.ResponseObject[0];
            this.modalRef = this.modalService.open(this.showInform, { size: 'sm' });
        }
    }
    setSearch_Filter(id, type) {
        let data = JSON.parse(this.auth.getSessionData(SessionConstants.assignSearch));
        if (data != null) {
            data.forEach((items) => {
                if (items.school_id == this.auth.getSessionData('school_id')) {
                    items.className = this.searchClass;
                    items.teacher = this.selectTeacher;
                    items.curriculum_Folder = this.selectClassRoom;
                    items.assignmentDateStatus = id;
                    items.sortType = type;
                    items.sortButton = this.sortButton;
                    items.assignmentName = this.searchAssignment;
                    items.studentName = this.searchStudent;
                }
                else {
                    const searchData = {
                        teacher: this.selectTeacher,
                        className: this.searchClass,
                        curriculum_Folder: this.selectClassRoom,
                        school_id: this.auth.getSessionData('school_id'),
                        assignmentDateStatus: this.filterType,
                        sortType: this.sortType,
                        sortButton: this.sortButton,
                        assignmentName: this.searchAssignment,
                        studentName: this.searchStudent,
                    };
                    data.push(searchData);
                }
            });
            data = data.filter((test, index, array) => index === array.findIndex((findTest) => findTest.school_id === test.school_id));
            this.auth.setSessionData(SessionConstants.assignSearch, JSON.stringify(data));
        }
    }
    getSearch_Filter() {
        const data = JSON.parse(this.auth.getSessionData(SessionConstants.assignSearch));
        data.every((items) => {
            if (items.school_id == this.auth.getSessionData('school_id')) {
                this.searchClass = items.className;
                this.selectTeacher = items.teacher;
                this.selectClassRoom = items.curriculum_Folder;
                this.filterType = items.assignmentDateStatus;
                this.sortType = items.sortType;
                this.sortButton = items.sortButton;
                this.searchAssignment = items.assignmentName;
                this.searchStudent = items.studentName;
                return false;
            }
            else {
                this.searchClass = '';
                this.searchStudent = '';
                this.selectTeacher = null;
                this.selectClassRoom = null;
                this.filterType = 2;
                this.sortType = 1;
                this.sortButton = 'Sort by';
                this.searchAssignment = '';
            }
            return true;
        });
    }
    static { this.ɵfac = function ListCorrectionComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListCorrectionComponent)(i0.ɵɵdirectiveInject(i1.ClassService), i0.ɵɵdirectiveInject(i2.TeacherService), i0.ɵɵdirectiveInject(i3.NgbModalConfig), i0.ɵɵdirectiveInject(i4.ConfigurationService), i0.ɵɵdirectiveInject(i5.DomSanitizer), i0.ɵɵdirectiveInject(i6.ToastrService), i0.ɵɵdirectiveInject(i3.NgbModal), i0.ɵɵdirectiveInject(i7.AuthService), i0.ɵɵdirectiveInject(i8.CommonDataService), i0.ɵɵdirectiveInject(i9.Router), i0.ɵɵdirectiveInject(i10.CommonService), i0.ɵɵdirectiveInject(i11.NewsubjectService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListCorrectionComponent, selectors: [["app-list-correction"]], viewQuery: function ListCorrectionComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.reports = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.itemsReports = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.showInform = _t.first);
        } }, decls: 8, vars: 2, consts: [["reports", ""], ["itemsReports", ""], ["showInform", ""], ["class", "container-fluid", 4, "ngIf"], [4, "ngIf"], [1, "container-fluid"], ["id", "custom-pdf-loader-editor", 4, "ngIf"], [1, "row"], [1, "group-btn", "col-md-9", "classDisable"], ["type", "button", 1, "btn", "btn-outline-primary", "ml-0", 3, "click", "disabled", "ngClass"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "disabled", "ngClass"], ["aria-expanded", "false", "aria-haspopup", "true", "data-toggle", "dropdown", "type", "button", 1, "btn", "btn-outline-primary", "dropdown-toggle", 3, "disabled"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [1, "dropdown-item", "dropdown-link", 3, "click"], [1, "col-3"], [1, "btn", "cancel", "pull-right", 3, "click"], [1, "fa", "fa-close", "mr-1"], [1, "row", "mt-3"], [1, "col-md-3"], ["bindLabel", "batch_name", "bindValue", "batch_id", "placeholder", "Select Content Folder", "typeToSearchText", "", 3, "ngModelChange", "change", "items", "ngModel"], ["class", "col-md-3", 4, "ngIf"], [1, "input-group"], ["placeholder", "Student name", "size", "50", "type", "text", 1, "form-control", 2, "height", "40px", 3, "input", "ngModelChange", "ngModel"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary", "p-2"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["type", "text", "size", "50", "placeholder", "Class name", 1, "form-control", 2, "height", "40px", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "size", "50", "placeholder", "Assignment name", 1, "form-control", 2, "height", "40px", 3, "ngModelChange", "input", "ngModel"], ["class", "row d-flex justify-content-center list-card mt-1", 4, "ngIf"], ["class", "row list-card mt-3", 4, "ngIf"], ["id", "custom-pdf-loader-editor"], ["src", "assets/images/pre-loader/loader-01.svg", "alt", ""], ["bindLabel", "teacher_name", "bindValue", "teacher_id", "placeholder", "Select Teacher", "typeToSearchText", "", 3, "ngModelChange", "change", "items", "ngModel"], [1, "row", "d-flex", "justify-content-center", "list-card", "mt-1"], [1, "col-4"], [1, "nodataList"], [1, "row", "list-card", "mt-3"], [1, "col-md-12"], ["class", "card class-card class-hover", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", "class-card", "class-hover", 3, "click"], [1, "card-body"], [1, "col-md-1", "d-flex", "justify-content-center", "align-items-center"], ["title", "Preview", 1, "cursor", 3, "click"], ["alt", "", "class", "img-50 rounded-circle", "src", "assets/images/ristaschool/option-writing-checkbox-concepts-survey.png", 4, "ngIf"], ["class", "img-50 rounded-circle", "alt", "", 3, "src", 4, "ngIf"], [1, "col-md-8"], [1, "t-period"], ["class", "card-flag", "style", "background-color: #9ddfd3", 4, "ngIf"], ["class", "card-flag", "style", "background-color: #ffc478", 4, "ngIf"], ["class", "card-flag", "style", "background-color: #184d47", 4, "ngIf"], [1, "font-weight-bold"], [1, "t-name", "font-weight-bold"], [1, "d-flex"], [1, "col-12", "d-flex", "justify-content-end"], ["class", "t-name font-weight-bold", 4, "ngIf"], ["class", "pull-right over-due1", 4, "ngIf"], [1, "row", "align-self-end"], [1, "col-12", "mt-2", "d-flex", "justify-content-end"], [1, "dropdown"], [1, "btn-sm-i", "btn-outline-primary"], ["aria-hidden", "true", 1, "fa", "fa-sort-desc", "float-right", "ml-2"], [1, "dropdown-content", "cursor", 2, "right", "1px"], [3, "click"], ["aria-hidden", "true", 1, "fa", "fa-file-text-o"], ["aria-hidden", "true", 1, "fa", "fa-file-archive-o"], ["aria-hidden", "true", 1, "fa", "fa-info"], ["alt", "", "src", "assets/images/ristaschool/option-writing-checkbox-concepts-survey.png", 1, "img-50", "rounded-circle"], ["alt", "", 1, "img-50", "rounded-circle", 3, "src"], [1, "card-flag", 2, "background-color", "#9ddfd3"], [1, "card-flag", 2, "background-color", "#ffc478"], [1, "card-flag", 2, "background-color", "#184d47"], [1, "pull-right", "over-due1"], ["class", "over-due1", 4, "ngIf"], [1, "over-due1"], [1, "modal-header"], [1, "modal-title"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "modal-body"], [3, "classShow", "showContent", "studentView", "contentNameValue", "timeView"], [3, "showContent", "studentView", "timeView"], [1, "p-0"], [1, "letter"]], template: function ListCorrectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ListCorrectionComponent_div_0_Template, 51, 36, "div", 3)(1, ListCorrectionComponent_div_1_Template, 2, 0, "div", 4)(2, ListCorrectionComponent_ng_template_2_Template, 6, 5, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(4, ListCorrectionComponent_ng_template_4_Template, 7, 6, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(6, ListCorrectionComponent_ng_template_6_Template, 15, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length == 0);
        } }, dependencies: [i12.NgClass, i12.NgForOf, i12.NgIf, i13.DefaultValueAccessor, i13.NgControlStatus, i13.NgModel, i14.NgSelectComponent, i15.EmptyschoolComponent, i16.MissedWorkReportComponent, i17.ItemsReportComponent, i12.TitleCasePipe, i18.CustomDateFormatPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListCorrectionComponent, [{
        type: Component,
        args: [{ selector: 'app-list-correction', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\" *ngIf=\"schoolStatus.length != 0\">\n    <div id=\"custom-pdf-loader-editor\" *ngIf=\"showLoader\">\n        <img src=\"assets/images/pre-loader/loader-01.svg\" alt=\"\">\n    </div>\n        <div class=\"row\">\n             <div class=\"group-btn col-md-9 classDisable\">\n                 <button (click)=\"setSearch_Filter(2, sortType);assignmentList(2, sortType)\" [disabled]=\"!buttonSelect\" [ngClass]=\"{'active1': filterType == 2}\" class=\"btn btn-outline-primary ml-0\" type=\"button\">In progress</button>\n                 <button (click)=\"setSearch_Filter(1, sortType);assignmentList(1, sortType)\" [disabled]=\"!buttonSelect\" [ngClass]=\"{'active1': filterType == 1}\" class=\"btn btn-outline-primary\" type=\"button\">Upcoming</button>\n                 <button (click)=\"setSearch_Filter(3, sortType);assignmentList(3, sortType)\" [disabled]=\"!buttonSelect\" [ngClass]=\"{'active1': filterType == 3}\" class=\"btn btn-outline-primary\" type=\"button\">Completed</button>\n                 <button (click)=\"setSearch_Filter(0, sortType);assignmentList(0, sortType)\" [disabled]=\"!buttonSelect\" [ngClass]=\"{'active1': filterType == 0}\" class=\"btn btn-outline-primary\" type=\"button\">All</button>\n                 <button aria-expanded=\"false\" aria-haspopup=\"true\" class=\"btn btn-outline-primary dropdown-toggle\" [disabled]=\"!buttonSelect\" data-toggle=\"dropdown\" type=\"button\">{{sortButton}}</button>\n                     <div aria-labelledby=\"dropdownMenuButton\" class=\"dropdown-menu\">\n                         <a (click)=\"setSearch_Filter(filterType, 1);classSort(1)\" class=\"dropdown-item dropdown-link\">Recent</a>\n                         <a (click)=\"setSearch_Filter(filterType, 4);classSort(4)\" class=\"dropdown-item dropdown-link\">Oldest</a>\n                         <a (click)=\"setSearch_Filter(filterType, 2);classSort(2)\" class=\"dropdown-item dropdown-link\">Name A-Z</a>\n                         <a (click)=\"setSearch_Filter(filterType, 3);classSort(3)\" class=\"dropdown-item dropdown-link\">Name Z-A</a>\n                     </div>\n             </div>\n\n            <div class=\"col-3\">\n                <button (click)=\"resetSearch()\" class=\"btn cancel pull-right\"><i class=\"fa fa-close mr-1\"></i>Reset Filter</button>\n            </div>\n        </div>\n        <div class=\"row mt-3\">\n            <div class=\"col-md-3\">\n                <ng-select [items]=\"batchData\"\n                           bindLabel=\"batch_name\"\n                           bindValue=\"batch_id\"\n                           [(ngModel)]=\"selectClassRoom\"\n                           placeholder=\"Select Content Folder\"\n                           typeToSearchText=\"\"\n                           (change)=\"setSearch_Filter(filterType, sortType);assignmentList(filterType, sortType)\">\n                </ng-select>\n            </div>\n            <div class=\"col-md-3\" *ngIf=\"auth.getRoleId() != '4'\">\n                <ng-select [items]=\"teacherListData\"\n                           bindLabel=\"teacher_name\"\n                           bindValue=\"teacher_id\"\n                           [(ngModel)]=\"selectTeacher\"\n                           placeholder=\"Select Teacher\"\n                           typeToSearchText=\"\"\n                           (change)=\"setSearch_Filter(filterType, sortType);assignmentList(filterType, sortType); classList()\"\n                           >\n                </ng-select>\n            </div>\n\n            <div class=\"col-md-{{auth.getRoleId() != '4' ? '2' : '3'}} btn-popup pull-right mb-0 px-2\">\n                <div class=\"input-group\">\n                    <input (input)=\"updateFilter(searchStudent)\" [(ngModel)]=\"searchStudent\" class=\"form-control\" placeholder=\"Student name\" size=\"50\" style=\"height:40px\" type=\"text\" >\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-primary p-2\" type=\"submit\"><i aria-hidden=\"true\" class=\"fa fa-search\"></i></button>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-{{auth.getRoleId() != '4' ? '2' : '3'}} btn-popup pull-right mb-0 px-2\">\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" style=\"height:40px\" size=\"50\" placeholder=\"Class name\" [(ngModel)]=\"searchClass\" (input)=\"updateFilter(searchClass)\" >\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-primary p-2\" type=\"submit\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-{{auth.getRoleId() != '4' ? '2' : '3'}} btn-popup pull-right mb-0 px-2\">\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" style=\"height:40px\" size=\"50\" placeholder=\"Assignment name\" [(ngModel)]=\"searchAssignment\" (input)=\"updateFilter(searchAssignment)\" >\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-primary p-2\" type=\"submit\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    <div class=\"row d-flex justify-content-center list-card mt-1\" *ngIf=\"listData ==''\">\n        <div class=\"col-4\">\n            <button class=\"nodataList\">No Data Available!</button>\n        </div>\n    </div>\n        <section class=\"row list-card mt-3\" *ngIf=\"listData != ''\">\n                <div class=\"col-md-12\">\n                        <div *ngFor=\"let list of listData\" class=\"card class-card class-hover\" (click)=\"previewPage(list)\">\n                                <div class=\"card-body\">\n                                        <div class=\"row\">\n                                                <div class=\"col-md-1 d-flex justify-content-center align-items-center\">\n                                                        <figure (click)=\"listDetails(list)\" title=\"Preview\" class=\"cursor\">\n                                                                <img *ngIf=\"list.profile_url == ''\" alt=\"\" class=\"img-50 rounded-circle\" src=\"assets/images/ristaschool/option-writing-checkbox-concepts-survey.png\">\n                                                                <img *ngIf=\"list.profile_url != ''\" class=\"img-50 rounded-circle\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + list.profile_url)\" alt=\"\">\n                                                        </figure>\n                                                </div>\n                                                <div class=\"col-md-8\">\n                                                    <h4 class=\"t-period\"><small *ngIf=\"list.status == 1\" class=\"card-flag\" style=\"background-color: #9ddfd3\">Not started</small>\n                                                        <small *ngIf=\"list.status == 2\" class=\"card-flag\" style=\"background-color: #ffc478\">In progress</small>\n                                                        <small *ngIf=\"list.status == 3\" class=\"card-flag\" style=\"background-color: #184d47\">Completed</small> &nbsp;\n                                                        <span class=\"font-weight-bold\">{{list.content_name}}</span> &nbsp;<small> with <span class=\"t-name font-weight-bold\">&nbsp; {{list.teacher_name}}</span></small> </h4>\n                                                    <div class=\"d-flex\">\n                                                        <p><span>Subject: </span> <span class=\"t-name font-weight-bold\">{{list.subject_name}}</span> &nbsp; &nbsp;\n                                                            <span>Class: </span> <span class=\"t-name font-weight-bold\">{{list.class_name}}</span>\n                                                        </p>\n                                                    </div>\n\n<!--                                                    <h4 class=\"t-period\"><span class=\"font-weight-bold\">{{list.content_name}}</span> &nbsp;<small> with <span class=\"t-name font-weight-bold\">&nbsp; {{list.teacher_name}}</span></small> </h4>-->\n<!--                                                    <div class=\"d-flex\">-->\n<!--                                                        <p><small>Subject: </small> <span class=\"t-name font-weight-bold\">{{list.subject_name}}</span></p>-->\n<!--                                                        <p class=\"ml-4\"><small>Class: </small> <span class=\"t-name font-weight-bold\">{{list.class_name}}</span></p>-->\n<!--                                                    </div>-->\n<!--                                                    <p><small>End Date: </small> <span *ngIf=\"list.end_date != '0000-00-00'\" class=\"t-name font-weight-bold\">{{list.end_date|date:'MM/dd/yyyy'}}, {{list.end_time}}</span></p>-->\n<!--                                                    <h5 *ngIf=\"list.status == 1\" class=\"card-flag\" style=\"background-color: #9ddfd3\">Not started</h5>-->\n<!--                                                    <h5 *ngIf=\"list.status == 2\" class=\"card-flag\" style=\"background-color: #ffc478\">In progress</h5>-->\n<!--                                                    <h5 *ngIf=\"list.status == 3\" class=\"card-flag\" style=\"background-color: #184d47\">Completed</h5>-->\n                                                </div>\n                                                <div class=\"col-md-3\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-12 d-flex justify-content-end\">\n                                                            <small>End Date: </small> <span *ngIf=\"list.end_date != '0000-00-00'\" class=\"t-name font-weight-bold\">{{list.end_date| customDateFormat}}</span>\n                                                            <small *ngIf=\"list.over_due_days != '0'\" class=\"pull-right over-due1\">Overdue For:\n                                                                <span *ngIf=\"list.over_due_days != '1'\" class=\"over-due1\">{{list.over_due_days}} (days)</span>\n                                                                <span *ngIf=\"list.over_due_days == '1'\" class=\"over-due1\">{{list.over_due_days}} (day)</span>\n                                                            </small>\n<!--                                                            <small *ngIf=\"list.over_due_days == '0'\" class=\"pull-right\" style=\"visibility: hidden\">OverDue:</small>-->\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"row align-self-end\">\n                                                        <div class=\"col-12 mt-2 d-flex justify-content-end\">\n                                                            <div class=\"dropdown\">\n                                                                <button class=\"btn-sm-i btn-outline-primary\">Action <i class=\"fa fa-sort-desc float-right ml-2\" aria-hidden=\"true\"></i></button>\n                                                                <div class=\"dropdown-content cursor\" style=\"right: 1px\">\n                                                                    <a (click)=\"reportDetails('Assignment', list)\"><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i> Reports</a>\n                                                                    <a (click)=\"itemsReportDetails(list)\"><i class=\"fa fa-file-archive-o\" aria-hidden=\"true\"></i> Itemized Reports</a>\n                                                                    <a (click)=\"showInformation(list)\"><i class=\"fa fa-info\" aria-hidden=\"true\"></i> Information</a>\n                                                                </div>\n                                                            </div>\n<!--                                                            <button (click)=\"previewPage(list)\" [disabled]=\"list.status == 1\" class=\"btn-sm-i btn-outline-primary pull-right\" type=\"button\">Enter</button>-->\n<!--                                                            <button (click)=\"reportDetails('Assignment', list)\" class=\"btn-outline-primary btn-sm-view mr-1 mt-1 pull-right\" title=\"Reports\"><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i></button>-->\n<!--                                                            <button (click)=\"itemsReportDetails(list)\" class=\"btn-outline-primary btn-sm-view mr-1 mt-1 pull-right\" title=\"Itemized Reports\"><i class=\"fa fa-file-archive-o\" aria-hidden=\"true\"></i></button>-->\n<!--                                                            <button (click)=\"showInformation(list)\" class=\"btn-outline-primary btn-sm-view mr-1 mt-1 pull-right\" title=\"Information\"><i class=\"fa fa-info pl-1 pr-1\" aria-hidden=\"true\"></i></button>-->\n                                                        </div>\n                                                    </div>\n<!--                                                    <div class=\"row mb-3\">-->\n<!--                                                        <div class=\"col-md-12\">-->\n<!--                                                            <small class=\"pull-right\">Total No. of Students: <span class=\"t-name\">{{list.total_students}}</span></small>-->\n<!--                                                        </div>-->\n<!--                                                    </div>-->\n<!--                                                    <div class=\"row mb-3\">-->\n<!--                                                        <div class=\"col-md-12\">-->\n<!--                                                            <small class=\"pull-right\">No. of Students Completed: <span class=\"t-name\">{{list.completed_students}}</span></small>-->\n<!--                                                        </div>-->\n<!--                                                    </div>-->\n<!--                                                    <div class=\"row mb-3\">-->\n<!--                                                        <div class=\"col-md-12\">-->\n<!--                                                            <small *ngIf=\"list.over_due_days != '0'\" class=\"pull-right over-due1\">Overdue For:-->\n<!--                                                                <span *ngIf=\"list.over_due_days != '1'\" class=\"over-due1\">{{list.over_due_days}} (days)</span>-->\n<!--                                                                <span *ngIf=\"list.over_due_days == '1'\" class=\"over-due1\">{{list.over_due_days}} (day)</span>-->\n<!--                                                            </small>-->\n<!--                                                            <small *ngIf=\"list.over_due_days == '0'\" class=\"pull-right\" style=\"visibility: hidden\">OverDue:</small>-->\n<!--                                                        </div>-->\n<!--                                                    </div>-->\n<!--                                                    <div class=\"row align-self-end mt-4\">-->\n<!--                                                        <div class=\"col-md-12\">-->\n<!--                                                            <button (click)=\"previewPage(list)\" [disabled]=\"list.status == 1\" class=\"btn-sm-i btn-outline-primary pull-right\" type=\"button\">Enter</button>-->\n<!--                                                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 13.891 14\" class=\"cursor float-right mt-2 mr-2\" (click)=\"reportDetails('Assignment', list)\">-->\n<!--                                                                <title>Reports</title>-->\n<!--                                                                <g id=\"noun_business_report_2032971\" data-name=\"noun_business report_2032971\" transform=\"translate(-51.3 -36.152)\">-->\n<!--                                                                    <g id=\"Group_17426\" data-name=\"Group 17426\" transform=\"translate(51.3 36.152)\">-->\n<!--                                                                        <path id=\"Path_3284\" data-name=\"Path 3284\" d=\"M12.194,54.1h-.022a.372.372,0,1,0,0,.744h.022a.372.372,0,1,0,0-.744Z\" transform=\"translate(-9.503 -42.484)\" fill=\"#7F3486\"/>-->\n<!--                                                                        <path id=\"Path_3285\" data-name=\"Path 3285\" d=\"M12.4,42.959h.481l-.241-.459Z\" transform=\"translate(-9.972 -33.422)\" fill=\"#7F3486\"/>-->\n<!--                                                                        <path id=\"Path_3286\" data-name=\"Path 3286\" d=\"M5.037,1.6,1.8,4.859H5.037Z\" transform=\"translate(-1.691 -1.469)\" fill=\"#7F3486\"/>-->\n<!--                                                                        <rect id=\"Rectangle_907\" data-name=\"Rectangle 907\" width=\"0.766\" height=\"0.722\" transform=\"translate(2.297 6.016)\" fill=\"#7F3486\"/>-->\n<!--                                                                        <path id=\"Path_3287\" data-name=\"Path 3287\" d=\"M8.278,13.206H6.353a.219.219,0,1,1,0-.437H8.278c.262,0-.044.044-.044-1.006a3.7,3.7,0,0,1,4.834-3.5V1.656A.658.658,0,0,0,12.412,1H5.084V4.609a.235.235,0,0,1-.219.219H1.3v9.516A.645.645,0,0,0,1.956,15H10.2A8.789,8.789,0,0,1,8.278,13.206ZM6.331,2.444h4.747a.219.219,0,0,1,0,.438H6.331a.207.207,0,0,1-.219-.219A.235.235,0,0,1,6.331,2.444Zm0,1.794h4.747a.219.219,0,0,1,.219.219.235.235,0,0,1-.219.219H6.331a.219.219,0,0,1-.219-.219A.235.235,0,0,1,6.331,4.237Zm0,2.909h4.878a.235.235,0,0,1,.219.219.219.219,0,0,1-.219.219H6.331a.207.207,0,0,1-.219-.219A.235.235,0,0,1,6.331,7.147Zm0,2.822H8.256a.219.219,0,1,1,0,.438H6.331a.219.219,0,0,1-.219-.219A.235.235,0,0,1,6.331,9.969ZM3.159,6.8a.219.219,0,0,1,.219-.219h1.2A.219.219,0,0,1,4.8,6.8V7.978a.235.235,0,0,1-.219.219h-1.2a.235.235,0,0,1-.219-.219V6.8Zm.831,6.978H3.947a.809.809,0,0,1,0-1.619h.044a.809.809,0,1,1,0,1.619Zm.766-2.887a.23.23,0,0,1-.2.109h-1.2a.23.23,0,0,1-.2-.109.2.2,0,0,1,0-.219l.613-1.181a.226.226,0,0,1,.394,0l.591,1.181A.2.2,0,0,1,4.756,10.888Z\" transform=\"translate(-1.3 -1)\" fill=\"#7F3486\"/>-->\n<!--                                                                        <path id=\"Path_3288\" data-name=\"Path 3288\" d=\"M36.006,40.878l2.034-2.406V35.3a3.238,3.238,0,0,0-2.034,5.578Z\" transform=\"translate(-27.628 -27.797)\" fill=\"#7F3486\"/>-->\n<!--                                                                        <path id=\"Path_3289\" data-name=\"Path 3289\" d=\"M50.9,38.266l2.538-1.356A3.251,3.251,0,0,0,50.9,35.4Z\" transform=\"translate(-40.05 -27.875)\" fill=\"#7F3486\"/>-->\n<!--                                                                        <path id=\"Path_3290\" data-name=\"Path 3290\" d=\"M45.978,44l-2.822,1.509L41.1,47.959a3.254,3.254,0,0,0,5.184-2.625A3.841,3.841,0,0,0,45.978,44Z\" transform=\"translate(-32.394 -34.594)\" fill=\"#7F3486\"/>-->\n<!--                                                                    </g>-->\n<!--                                                                </g>-->\n<!--                                                            </svg>-->\n<!--                                                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 14.777 19.703\" class=\"cursor float-right mt-2 mr-2\" (click)=\"itemsReportDetails(list)\">-->\n<!--                                                                <title>Itemized Reports</title>-->\n<!--                                                                <g id=\"noun_User_Graph_Report_327481\" data-name=\"noun_User Graph Report_327481\" transform=\"translate(-56 -12)\">-->\n<!--                                                                    <g id=\"Group_17460\" data-name=\"Group 17460\" transform=\"translate(56 12)\">-->\n<!--                                                                        <g id=\"Group_17459\" data-name=\"Group 17459\" transform=\"translate(0)\">-->\n<!--                                                                            <circle id=\"Ellipse_70\" data-name=\"Ellipse 70\" cx=\"0.717\" cy=\"0.717\" r=\"0.717\" transform=\"translate(3.837 3.328)\" fill=\"#7F3486\"/>-->\n<!--                                                                            <path id=\"Path_3302\" data-name=\"Path 3302\" d=\"M17.112,19.251a.6.6,0,0,0-.475.614v.887H17.8Z\" transform=\"translate(-13.978 -13.324)\" fill=\"#7F3486\"/>-->\n<!--                                                                            <path id=\"Path_3303\" data-name=\"Path 3303\" d=\"M26.325,20.75v-.887a.6.6,0,0,0-.474-.616l-.693,1.5Z\" transform=\"translate(-19.875 -13.322)\" fill=\"#7F3486\"/>-->\n<!--                                                                            <path id=\"Path_3304\" data-name=\"Path 3304\" d=\"M8,0V19.7H20.52l2.258-2.258V0ZM20.1,6.062h.431v1.8H20.1Zm-.869-1.6h.431v3.4h-.431ZM18.357,2.9h.431V7.86h-.431Zm-.869,1.672h.431V7.859h-.431Zm-.869,2.3h.431v.99h-.431ZM14.88,6.541V7.859H12.608l1.109-2.4S14.88,5.471,14.88,6.541Zm-2.326.565-.692-1.532h1.384Zm0-4.209a1.148,1.148,0,1,1-1.148,1.148A1.148,1.148,0,0,1,12.554,2.9ZM10.228,6.541c0-1.07,1.163-1.086,1.163-1.086l1.109,2.4H10.228Zm1.316,4.209v1.316H12.86a1.316,1.316,0,1,1-1.316-1.316Zm0,6.055a1.316,1.316,0,0,1,0-2.632v1.316H12.86A1.316,1.316,0,0,1,11.544,16.805Zm.35-1.666V13.823a1.316,1.316,0,0,1,1.316,1.316Zm0-3.422V10.4a1.316,1.316,0,0,1,1.316,1.316Zm8.656,4.4H14.119v-.431H20.55Zm0-1.08H14.119V14.6H20.55Zm0-2.217H14.119v-.431H20.55Zm0-1.08H14.119V11.3H20.55Zm.035,7.292V17.511H22.1Z\" transform=\"translate(-8)\" fill=\"#7F3486\"/>-->\n<!--                                                                        </g>-->\n<!--                                                                    </g>-->\n<!--                                                                </g>-->\n<!--                                                            </svg>-->\n<!--                                                        </div>-->\n<!--                                                    </div>-->\n                                                </div>\n                                        </div>\n                                </div>\n                        </div>\n                </div>\n        </section>\n</div>\n<div *ngIf=\"schoolStatus.length == 0\">\n    <app-emptyschool>\n    </app-emptyschool>\n</div>\n<!-- Container-fluid Ends-->\n<ng-template #reports>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Report</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"onSave()\" ></i>\n    </div>\n    <div class=\"modal-body\">\n        <app-missed-work-report\n                [classShow] = \"true\"\n                [showContent]= \"selectContent\"\n                [studentView]= \"false\"\n                [contentNameValue]= \"contentNameValue\"\n                [timeView]= \"false\">\n        </app-missed-work-report>\n    </div>\n\n</ng-template>\n<ng-template #itemsReports>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">{{reportData.content_name | titlecase}} - Report</h4>        <i class=\"fa fa-close cursor\" (click)=\"onSave()\" ></i>\n    </div>\n    <div class=\"modal-body\">\n        <app-items-report\n                [showContent]= \"'other'\"\n                [studentView]= \"false\"\n                [timeView]= \"true\">\n        </app-items-report>\n    </div>\n\n</ng-template>\n<ng-template #showInform>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Info</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"onSave()\" ></i>\n    </div>\n    <div class=\"modal-body\">\n        <p class=\"p-0\"><small>Total No. of Students: <span class=\"letter\">{{classInfo.total_students}}</span></small></p>\n        <p class=\"p-0\"><small>No. of Students Completed: <span class=\"letter\">{{classInfo.completed_students}}</span></small></p>\n    </div>\n\n</ng-template>\n" }]
    }], () => [{ type: i1.ClassService }, { type: i2.TeacherService }, { type: i3.NgbModalConfig }, { type: i4.ConfigurationService }, { type: i5.DomSanitizer }, { type: i6.ToastrService }, { type: i3.NgbModal }, { type: i7.AuthService }, { type: i8.CommonDataService }, { type: i9.Router }, { type: i10.CommonService }, { type: i11.NewsubjectService }], { reports: [{
            type: ViewChild,
            args: ['reports']
        }], itemsReports: [{
            type: ViewChild,
            args: ['itemsReports']
        }], showInform: [{
            type: ViewChild,
            args: ['showInform']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListCorrectionComponent, { className: "ListCorrectionComponent" }); })();
//# sourceMappingURL=list-correction.component.js.map