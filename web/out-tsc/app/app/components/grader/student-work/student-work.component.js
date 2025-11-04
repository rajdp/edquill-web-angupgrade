import { Component, ViewChild } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SessionConstants } from '../../../shared/data/sessionConstants';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../shared/service/auth.service";
import * as i3 from "../../../shared/service/common-data.service";
import * as i4 from "../../../shared/service/configuration.service";
import * as i5 from "../../../shared/service/contentdetail.service";
import * as i6 from "../../../shared/service/newsubject.service";
import * as i7 from "../../../shared/service/teacher.service";
import * as i8 from "@angular/platform-browser";
import * as i9 from "../../../shared/service/creator.service";
import * as i10 from "@ng-bootstrap/ng-bootstrap";
import * as i11 from "ngx-toastr";
import * as i12 from "../../../shared/service/class.service";
import * as i13 from "@angular/common";
import * as i14 from "@ng-select/ng-select";
import * as i15 from "@angular/forms";
import * as i16 from "ngx-infinite-scroll";
import * as i17 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["contentnow"];
function StudentWorkComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.item;
    i0.ɵɵproperty("title", item_r2.class_name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r2.class_name);
} }
function StudentWorkComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "ng-select", 32);
    i0.ɵɵlistener("change", function StudentWorkComponent_div_33_Template_ng_select_change_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r3 = i0.ɵɵnextContext(); ctx_r3.selection(); return i0.ɵɵresetView(ctx_r3.studentContentDetails()); });
    i0.ɵɵtwoWayListener("ngModelChange", function StudentWorkComponent_div_33_Template_ng_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.selectTeacher, $event) || (ctx_r3.selectTeacher = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.selectTeacher);
    i0.ɵɵproperty("items", ctx_r3.teacherListData);
} }
function StudentWorkComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 33);
    i0.ɵɵlistener("click", function StudentWorkComponent_button_35_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.notifyParent(ctx_r3.choosedData, 1)); });
    i0.ɵɵtext(1, "Notify All");
    i0.ɵɵelementEnd();
} }
function StudentWorkComponent_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 33);
    i0.ɵɵlistener("click", function StudentWorkComponent_button_36_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.releaseAll()); });
    i0.ɵɵtext(1, "Release Score For All");
    i0.ɵɵelementEnd();
} }
function StudentWorkComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34)(1, "div", 35)(2, "button", 36);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function StudentWorkComponent_div_40_div_2_figure_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 59);
    i0.ɵɵelementEnd();
} }
function StudentWorkComponent_div_40_div_2_figure_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r3.sanitizer.bypassSecurityTrustResourceUrl(ctx_r3.webhost + "/" + list_r8.student_profile), i0.ɵɵsanitizeUrl);
} }
function StudentWorkComponent_div_40_div_2_small_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 61);
    i0.ɵɵtext(1, "Score Released");
    i0.ɵɵelementEnd();
} }
function StudentWorkComponent_div_40_div_2_small_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 62);
    i0.ɵɵtext(1, "Correction Pending");
    i0.ɵɵelementEnd();
} }
function StudentWorkComponent_div_40_div_2_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 63);
    i0.ɵɵtext(1, "Correction Completed");
    i0.ɵɵelementEnd();
} }
function StudentWorkComponent_div_40_div_2_small_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 64);
    i0.ɵɵtext(1, "Yet To Start");
    i0.ɵɵelementEnd();
} }
function StudentWorkComponent_div_40_div_2_small_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 65);
    i0.ɵɵtext(1, "In-Progress");
    i0.ɵɵelementEnd();
} }
function StudentWorkComponent_div_40_div_2_span_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "small", 51);
    i0.ɵɵtext(2, "Submitted Date: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 53);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(list_r8.answer_completed_date);
} }
function StudentWorkComponent_div_40_div_2_span_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "small", 51);
    i0.ɵɵtext(2, "Score Released Date: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 53);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(list_r8.score_release_date);
} }
function StudentWorkComponent_div_40_div_2_small_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 66);
    i0.ɵɵtext(1, "Total Score: ");
    i0.ɵɵelementStart(2, "span", 67);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(list_r8.total_score);
} }
function StudentWorkComponent_div_40_div_2_small_34_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", list_r8.overDue, " (days)");
} }
function StudentWorkComponent_div_40_div_2_small_34_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", list_r8.overDue, " (day)");
} }
function StudentWorkComponent_div_40_div_2_small_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 66);
    i0.ɵɵtext(1, "Overdue For: ");
    i0.ɵɵtemplate(2, StudentWorkComponent_div_40_div_2_small_34_span_2_Template, 2, 1, "span", 68)(3, StudentWorkComponent_div_40_div_2_small_34_span_3_Template, 2, 1, "span", 68);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r8.overDue != "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r8.overDue == "1");
} }
function StudentWorkComponent_div_40_div_2_small_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 66);
    i0.ɵɵtext(1, "Obtained Score: ");
    i0.ɵɵelementStart(2, "span", 67);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(list_r8.obtained_score);
} }
function StudentWorkComponent_div_40_div_2_small_36_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 69);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, list_r8.end_date));
} }
function StudentWorkComponent_div_40_div_2_small_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 66);
    i0.ɵɵtext(1, "End Date: ");
    i0.ɵɵtemplate(2, StudentWorkComponent_div_40_div_2_small_36_span_2_Template, 3, 3, "span", 68);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r8.end_date != "0000-00-00");
} }
function StudentWorkComponent_div_40_div_2_button_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 70);
    i0.ɵɵtext(1, "Enter");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("disabled", list_r8.status == 1);
} }
function StudentWorkComponent_div_40_div_2_button_40_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 71);
    i0.ɵɵlistener("click", function StudentWorkComponent_div_40_div_2_button_40_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const list_r8 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.enterAction(list_r8)); });
    i0.ɵɵtext(1, "Enter");
    i0.ɵɵelementEnd();
} }
function StudentWorkComponent_div_40_div_2_button_41_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 72);
    i0.ɵɵlistener("click", function StudentWorkComponent_div_40_div_2_button_41_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const list_r8 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.releaseScore(list_r8)); });
    i0.ɵɵtext(1, "Release Score");
    i0.ɵɵelementEnd();
} }
function StudentWorkComponent_div_40_div_2_button_42_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 72);
    i0.ɵɵlistener("click", function StudentWorkComponent_div_40_div_2_button_42_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const list_r8 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.notifyParent(list_r8, 2)); });
    i0.ɵɵtext(1, "Notifiy Parent");
    i0.ɵɵelementEnd();
} }
function StudentWorkComponent_div_40_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40)(1, "div", 41)(2, "div", 20)(3, "div", 42);
    i0.ɵɵtemplate(4, StudentWorkComponent_div_40_div_2_figure_4_Template, 2, 0, "figure", 43)(5, StudentWorkComponent_div_40_div_2_figure_5_Template, 2, 1, "figure", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 44)(7, "h4");
    i0.ɵɵtemplate(8, StudentWorkComponent_div_40_div_2_small_8_Template, 2, 0, "small", 45)(9, StudentWorkComponent_div_40_div_2_small_9_Template, 2, 0, "small", 46)(10, StudentWorkComponent_div_40_div_2_small_10_Template, 2, 0, "small", 47)(11, StudentWorkComponent_div_40_div_2_small_11_Template, 2, 0, "small", 48)(12, StudentWorkComponent_div_40_div_2_small_12_Template, 2, 0, "small", 49);
    i0.ɵɵtext(13, " \u00A0 ");
    i0.ɵɵelementStart(14, "span", 50);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "p")(17, "small", 51);
    i0.ɵɵtext(18, "Class Name: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 52);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(21, "\u00A0 \u00A0 ");
    i0.ɵɵelementStart(22, "small", 51);
    i0.ɵɵtext(23, "Content Name: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span", 53);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(26, "br");
    i0.ɵɵtemplate(27, StudentWorkComponent_div_40_div_2_span_27_Template, 5, 1, "span", 43);
    i0.ɵɵtext(28, "\u00A0 ");
    i0.ɵɵtemplate(29, StudentWorkComponent_div_40_div_2_span_29_Template, 5, 1, "span", 43);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div", 35)(31, "div", 20)(32, "div", 38);
    i0.ɵɵtemplate(33, StudentWorkComponent_div_40_div_2_small_33_Template, 4, 1, "small", 54)(34, StudentWorkComponent_div_40_div_2_small_34_Template, 4, 2, "small", 54)(35, StudentWorkComponent_div_40_div_2_small_35_Template, 4, 1, "small", 54)(36, StudentWorkComponent_div_40_div_2_small_36_Template, 3, 1, "small", 54);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div", 55)(38, "div", 38);
    i0.ɵɵtemplate(39, StudentWorkComponent_div_40_div_2_button_39_Template, 2, 1, "button", 56)(40, StudentWorkComponent_div_40_div_2_button_40_Template, 2, 0, "button", 57)(41, StudentWorkComponent_div_40_div_2_button_41_Template, 2, 0, "button", 58)(42, StudentWorkComponent_div_40_div_2_button_42_Template, 2, 0, "button", 58);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const list_r8 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", list_r8.student_profile == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r8.student_profile != "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r8.status == "3");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r8.status == "4" || list_r8.status == "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r8.status == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r8.status == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r8.status == "2");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(list_r8.student_name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(list_r8.class_name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(list_r8.content_name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r8.status > 2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r8.status == "3");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", list_r8.status == "3");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r8.status == "1" || list_r8.status == "2" && list_r8.status != "3");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r8.status == "3");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r8.status != "3");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r8.status == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r8.status != "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r8.status == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r8.status == "1" || list_r8.status == "2");
} }
function StudentWorkComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵlistener("scrolled", function StudentWorkComponent_div_40_Template_div_scrolled_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onScrollDown($event)); })("scrolledUp", function StudentWorkComponent_div_40_Template_div_scrolledUp_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onUp($event)); });
    i0.ɵɵelementStart(1, "div", 38);
    i0.ɵɵtemplate(2, StudentWorkComponent_div_40_div_2_Template, 43, 20, "div", 39);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("fromRoot", true)("infiniteScrollContainer", ctx_r3.selector)("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.choosedData);
} }
function StudentWorkComponent_ng_template_41_h5_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 80);
    i0.ɵɵtext(1, "Are You Sure want to notify all contacts?");
    i0.ɵɵelementEnd();
} }
function StudentWorkComponent_ng_template_41_h5_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 80);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Are You Sure want to notify ", ctx_r3.studentname[0].student_name, " contacts?");
} }
function StudentWorkComponent_ng_template_41_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 81);
    i0.ɵɵlistener("click", function StudentWorkComponent_ng_template_41_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.confirmStudentNotify(1)); });
    i0.ɵɵtext(1, "Confirm");
    i0.ɵɵelementEnd();
} }
function StudentWorkComponent_ng_template_41_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 81);
    i0.ɵɵlistener("click", function StudentWorkComponent_ng_template_41_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.confirmStudentNotify(2)); });
    i0.ɵɵtext(1, "Confirm");
    i0.ɵɵelementEnd();
} }
function StudentWorkComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 73)(1, "h4", 74)(2, "b");
    i0.ɵɵtext(3, "Notify Contact");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 75)(5, "div", 1);
    i0.ɵɵtemplate(6, StudentWorkComponent_ng_template_41_h5_6_Template, 2, 0, "h5", 76)(7, StudentWorkComponent_ng_template_41_h5_7_Template, 2, 1, "h5", 76);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 77);
    i0.ɵɵtemplate(9, StudentWorkComponent_ng_template_41_button_9_Template, 2, 0, "button", 78)(10, StudentWorkComponent_ng_template_41_button_10_Template, 2, 0, "button", 78);
    i0.ɵɵelementStart(11, "button", 79);
    i0.ɵɵlistener("click", function StudentWorkComponent_ng_template_41_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r12); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.close()); });
    i0.ɵɵtext(12, "Cancel");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r3.notifyType == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.notifyType == 2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.notifyType == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.notifyType == 2);
} }
export class StudentWorkComponent {
    constructor(router, auth, commondata, confi, contentDetail, subject, route, teacher, sanitizer, creatorService, modalService, toastr, classService) {
        this.router = router;
        this.auth = auth;
        this.commondata = commondata;
        this.confi = confi;
        this.contentDetail = contentDetail;
        this.subject = subject;
        this.route = route;
        this.teacher = teacher;
        this.sanitizer = sanitizer;
        this.creatorService = creatorService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.classService = classService;
        this.contentType = 2;
        this.searchStudent = '';
        this.direction = '';
        this.pageNo = 1;
        this.selector = '.scrollPanel1';
        this.studentname = '';
        this.notifyType = '';
        this.router.params.forEach((params) => {
            this.type = params.type;
        });
        this.webhost = this.confi.getimgUrl();
        this.auth.setSessionData('resourceAccess', false);
        this.auth.setSessionData('browseAll', false);
        this.auth.removeSessionData('classData');
        this.auth.removeSessionData('updatedStudent');
        this.auth.removeSessionData('readonly_data');
        this.auth.removeSessionData('readonly_startdate');
        this.auth.removeSessionData('backOption');
        this.subject.schoolChange.subscribe(params => {
            if (params != '') {
                if (this.route.url.includes('student-work')) {
                    this.init(params);
                }
            }
            else {
                this.init(this.auth.getSessionData('school_id'));
            }
        });
    }
    ngOnInit() {
        this.allowDropDown = false;
        this.subject.allowSchoolChange(this.allowDropDown);
        this.open = true;
        // this.creatorService.changeViewList(this.open);
    }
    // ngOnDestroy(): void {
    //   this.setSearch_Filter();
    // }
    init(id) {
        this.pageNo = 1;
        this.choosedData = '';
        this.getSearch_Filter();
        if (this.auth.getRoleId() != '4') {
            this.teacherList();
        }
        this.batchDataList();
        this.studentContentDetails();
    }
    enterAction(data) {
        this.auth.setSessionData('classDetails', JSON.stringify(data));
        this.auth.setSessionData('student-content', 1);
        if (this.contentType == 2) {
            this.route.navigate(['/assignment-correction/correction-page']);
        }
        else {
            this.route.navigate(['/assessment-correction/correction-page']);
        }
    }
    releaseScore(studentData) {
        this.releaseType = 'single';
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_id: [studentData.student_id],
            content_id: studentData.content_id,
            class_id: studentData.class_id,
            student_content_id: [studentData?.student_content_id],
            release_score: '1'
        };
        this.teacher.releaseScore(data).subscribe((successData) => {
            this.releaseScoreSuccess(successData);
        }, (error) => {
            this.releaseScoreFailure(error);
        });
    }
    releaseScoreSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject, 'Score released');
            this.choosedData = '';
            this.studentContentDetails();
        }
    }
    releaseScoreFailure(error) {
        this.toastr.error(error, 'Failed');
    }
    batchDataList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: '2'
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
    releaseAll() {
        this.releaseType = 'all';
        let notifyStudent = [];
        console.log(this.choosedData, 'choose1');
        this.choosedData.forEach((items) => {
            notifyStudent.push({
                class_id: items.class_id,
                content_id: items.content_id,
                student_id: items.student_id,
                student_content_id: items.student_content_id
            });
        });
        console.log(this.choosedData, 'choose2');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_list: notifyStudent,
            release_score: '1'
        };
        console.log(data, 'newdata');
        this.teacher.releaseScoreAll(data).subscribe((successData) => {
            this.releaseScoreSuccess(successData);
        }, (error) => {
            this.releaseScoreFailure(error);
        });
    }
    notifyParent(data, id) {
        this.notifyType = id;
        if (id == 1) {
            this.studentname = data;
        }
        else {
            this.studentname = [data];
        }
        this.modalRef = this.modalService.open(this.modalContentnow);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    close() {
        this.modalRef.close();
        this.notifyType = '';
    }
    confirmNotifiy() {
        let notifyStudent = [];
        this.studentname.forEach((items) => {
            notifyStudent.push({
                class_id: items.class_id,
                content_id: items.content_id,
                student_id: items.student_id,
                student_content_id: items.student_content_id
            });
        });
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            notify: notifyStudent
        };
        this.contentDetail.notifiyParent(data).subscribe((successData) => {
            this.teacherNotifyParentSuccess(successData);
        }, (error) => {
            this.teacherNotifiyParentError(error);
        });
    }
    teacherNotifyParentSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(successData, 'response');
            this.modalRef.close();
            this.toastr.success(successData.ResponseObject, 'Notify-Parent');
            this.notifyType = '';
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    teacherNotifiyParentError(error) {
        console.log(error);
        this.notifyType = '';
    }
    contentselect(event) {
        this.choosedData = '';
        this.pageNo = 1;
        this.contentType = event.target.value;
        if (event == '2') {
            this.teacherContentType = 'Assignment';
        }
        else {
            this.teacherContentType = 'Assessment';
        }
        this.studentContentDetails();
    }
    onScrollDown(ev) {
        this.direction = 'down';
        this.pageNo++;
        this.studentContentDetails();
    }
    onUp(ev) {
        this.direction = 'up';
    }
    teacherStatus(event) {
        this.choosedData = '';
        this.pageNo = 1;
        this.teacherCorrectionStatus = event.target.value;
        this.studentContentDetails();
    }
    updateFilter(event) {
        this.searchStudent = event;
        clearTimeout(this.searchTime);
        this.searchTime = setTimeout(() => {
            this.studentContentDetails();
            this.setSearch_Filter();
        }, 1200);
        this.pageNo = 1;
    }
    selection() {
        this.pageNo = 1;
        this.choosedData = '';
        this.setSearch_Filter();
    }
    confirmStudentNotify(type) {
        if (type == 1) {
            this.close();
            this.studentContentDetails();
        }
        else if (type == 2) {
            this.close();
            this.confirmNotifiy();
        }
    }
    studentContentDetails() {
        const data = {
            platform: 'web',
            type: '0',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : this.selectTeacher ? this.selectTeacher : '0',
            status: this.teacherCorrectionStatus,
            content_type: this.contentType,
            class_id: this.selectedClass ? this.selectedClass : '0',
            pageno: this.pageNo,
            recordsperpage: '20',
            search: this.searchStudent,
            batch_id: this.selectClassRoom ? this.selectClassRoom : ''
        };
        if (this.notifyType != '') {
            this.contentDetail.notifiyAllParent(data).subscribe((successData) => {
                this.teacherNotifyParentSuccess(successData);
            }, (error) => {
                this.teacherNotifiyParentError(error);
            });
        }
        else {
            this.contentDetail.studentContent(data).subscribe((successData) => {
                this.studentContentDetailsListSuccess(successData);
            }, (error) => {
                this.studentContentDetailsListFailure(error);
            });
        }
    }
    studentContentDetailsListSuccess(successData) {
        this.classList();
        if (successData.IsSuccess) {
            let temp = successData.ResponseObject;
            if (this.searchStudent.length > 0 && this.pageNo == 1) {
                this.choosedData = successData.ResponseObject;
            }
            if (this.searchStudent.length == 0 && this.pageNo == 1) {
                this.choosedData = successData.ResponseObject;
            }
            if (this.pageNo > 1 && temp.length > 0) {
                for (let entry of temp) {
                    this.choosedData.push(entry);
                }
            }
            // if (this.choosedData.length == 0 && this.selectedClass != ''){
            //     this.selectedClass = null;
            //     this.studentContentDetails(1);
            // }
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    studentContentDetailsListFailure(error) {
        console.log(error, 'error');
    }
    classList() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0',
            status: this.teacherCorrectionStatus,
            content_type: this.contentType
        };
        this.contentDetail.classList(data).subscribe((successData) => {
            this.classListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_classList');
        });
    }
    classListSuccess(successData) {
        if (successData.IsSuccess) {
            this.classesDetails = successData.ResponseObject;
            if (this.classesDetails.length == 0) {
                this.selectedClass = undefined;
            }
        }
    }
    setSearch_Filter() {
        let data = JSON.parse(this.auth.getSessionData(SessionConstants.studentWorkSearch));
        if (data != null) {
            data.forEach((items) => {
                if (items.school_id == this.auth.getSessionData('school_id')) {
                    items.class = this.selectedClass;
                    items.teacher = this.selectTeacher;
                    items.curriculum_Folder = this.selectClassRoom;
                    items.teacherCorrectionStatus = this.teacherCorrectionStatus;
                    items.contentType = this.contentType;
                    items.studentName = this.searchStudent;
                }
                else {
                    const searchData = {
                        teacher: this.selectTeacher,
                        class: this.selectedClass,
                        curriculum_Folder: this.selectClassRoom,
                        school_id: this.auth.getSessionData('school_id'),
                        teacherCorrectionStatus: this.teacherCorrectionStatus,
                        contentType: this.contentType,
                        studentName: this.searchStudent
                    };
                    data.push(searchData);
                }
            });
            data = data.filter((test, index, array) => index === array.findIndex((findTest) => findTest.school_id === test.school_id));
            this.auth.setSessionData(SessionConstants.studentWorkSearch, JSON.stringify(data));
        }
    }
    getSearch_Filter() {
        let data = JSON.parse(this.auth.getSessionData(SessionConstants.studentWorkSearch));
        data.every((items) => {
            if (items.school_id == this.auth.getSessionData('school_id')) {
                this.selectedClass = items.class;
                this.selectTeacher = items.teacher;
                this.selectClassRoom = items.curriculum_Folder;
                this.teacherCorrectionStatus = items.teacherCorrectionStatus;
                this.contentType = items.contentType;
                this.searchStudent = items.studentName;
                return false;
            }
            else {
                this.selectedClass = undefined;
                this.selectTeacher = undefined;
                this.selectClassRoom = undefined;
                this.teacherCorrectionStatus = '0';
                this.contentType = 2;
                this.searchStudent = '';
            }
            return true;
        });
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
    static { this.ɵfac = function StudentWorkComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentWorkComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.CommonDataService), i0.ɵɵdirectiveInject(i4.ConfigurationService), i0.ɵɵdirectiveInject(i5.ContentdetailService), i0.ɵɵdirectiveInject(i6.NewsubjectService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i7.TeacherService), i0.ɵɵdirectiveInject(i8.DomSanitizer), i0.ɵɵdirectiveInject(i9.CreatorService), i0.ɵɵdirectiveInject(i10.NgbModal), i0.ɵɵdirectiveInject(i11.ToastrService), i0.ɵɵdirectiveInject(i12.ClassService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentWorkComponent, selectors: [["app-student-work"]], viewQuery: function StudentWorkComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContentnow = _t.first);
        } }, decls: 43, vars: 12, consts: [["contentnow", ""], [1, "container-fluid"], [1, "row", "mb-0"], [1, "col-12", "col-sm-6", "col-lg-3", "form-group", "align-self-center"], [1, "custom-select", "col-md-12", 3, "change", "ngModelChange", "ngModel"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["id", "content", 1, "custom-select", "col-md-12", 3, "change", "ngModelChange", "ngModel"], ["bindLabel", "class_name", "bindValue", "class_id", "placeholder", "Select Class", "typeToSearchText", "", 3, "change", "ngModelChange", "ngModel", "items"], ["ng-option-tmp", ""], [1, "col-12", "col-sm-6", "col-lg-3", "align-self-center"], [1, "btn-popup", "pull-right"], [1, "input-group"], ["placeholder", "Search Student", "size", "50", "type", "text", 1, "form-control", 2, "height", "40px", 3, "input", "ngModelChange", "ngModel"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "row"], [1, "col-12", "col-sm-6", "col-lg-3", "form-group"], ["bindLabel", "batch_name", "bindValue", "batch_id", "placeholder", "Select Content Folder", "typeToSearchText", "", 3, "change", "ngModelChange", "ngModel", "items"], ["class", "col-md-3", 4, "ngIf"], [1, "col-md-12", "col-sm-6", "col-lg-6", "ng-star-inserted", "px-5", "pb-3"], ["class", "btn btn-primary pull-right", 3, "click", 4, "ngIf"], ["class", "row d-flex justify-content-center mt-5", 4, "ngIf"], [1, "row", "list-card"], [1, "scrollPanel1"], ["class", "search-results col-md-12", "infiniteScroll", "", 3, "fromRoot", "infiniteScrollContainer", "infiniteScrollDistance", "infiniteScrollThrottle", "scrolled", "scrolledUp", 4, "ngIf"], [3, "title"], [1, "col-md-3"], ["bindLabel", "teacher_name", "bindValue", "teacher_id", "placeholder", "Select Teacher", "typeToSearchText", "", 3, "change", "ngModelChange", "ngModel", "items"], [1, "btn", "btn-primary", "pull-right", 3, "click"], [1, "row", "d-flex", "justify-content-center", "mt-5"], [1, "col-4"], [1, "nodataList"], ["infiniteScroll", "", 1, "search-results", "col-md-12", 3, "scrolled", "scrolledUp", "fromRoot", "infiniteScrollContainer", "infiniteScrollDistance", "infiniteScrollThrottle"], [1, "col-md-12"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-body"], [1, "col-1", "d-flex", "justify-content-center", "align-items-center"], [4, "ngIf"], [1, "col-7"], ["class", "badge badge-primary", 4, "ngIf"], ["class", "badge badge-info", 4, "ngIf"], ["class", "badge badge-success", 4, "ngIf"], ["class", "badge badge-secondary", 4, "ngIf"], ["class", "badge badge-warning", 4, "ngIf"], [1, "t-period", "font-weight-bold"], [1, "font-weight-bold"], [1, "t-name", "capital", "font-weight-bold"], [1, "t-name", "font-weight-bold"], ["class", "pull-right total-score mr-2", 4, "ngIf"], [1, "row", "d-flex", "align-self-end", "mt-2"], ["class", "btn-sm-i btn-outline-primary pull-right ml-2 mt-2", "type", "button", 3, "disabled", 4, "ngIf"], ["class", "btn-sm-i btn-primary pull-right ml-2 mt-2", "type", "button", 3, "click", 4, "ngIf"], ["class", "btn-sm-i btn-outline-primary pull-right mt-2", "type", "button", 3, "click", 4, "ngIf"], ["alt", "", "src", "assets/images/digital-product/student.png", 1, "rounded-circle", "img-50", "border"], ["alt", "", 1, "rounded-circle", "img-50", 3, "src"], [1, "badge", "badge-primary"], [1, "badge", "badge-info"], [1, "badge", "badge-success"], [1, "badge", "badge-secondary"], [1, "badge", "badge-warning"], [1, "pull-right", "total-score", "mr-2"], [1, "t-name"], ["class", "over-due1", 4, "ngIf"], [1, "over-due1"], ["type", "button", 1, "btn-sm-i", "btn-outline-primary", "pull-right", "ml-2", "mt-2", 3, "disabled"], ["type", "button", 1, "btn-sm-i", "btn-primary", "pull-right", "ml-2", "mt-2", 3, "click"], ["type", "button", 1, "btn-sm-i", "btn-outline-primary", "pull-right", "mt-2", 3, "click"], [1, "modal-header"], [1, "modal-title", "col-12", "text-center"], [1, "modal-body"], ["class", "text-center", 4, "ngIf"], [1, "modal-footer"], ["class", "btn btn-primary", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "text-center"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function StudentWorkComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "select", 4);
            i0.ɵɵlistener("change", function StudentWorkComponent_Template_select_change_3_listener($event) { i0.ɵɵrestoreView(_r1); ctx.selection(); return i0.ɵɵresetView(ctx.teacherStatus($event)); });
            i0.ɵɵtwoWayListener("ngModelChange", function StudentWorkComponent_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.teacherCorrectionStatus, $event) || (ctx.teacherCorrectionStatus = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementStart(4, "option", 5);
            i0.ɵɵtext(5, "All");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "option", 6);
            i0.ɵɵtext(7, "Correction Pending");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "option", 7);
            i0.ɵɵtext(9, "Correction Completed");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "option", 8);
            i0.ɵɵtext(11, "Score Released");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "option", 9);
            i0.ɵɵtext(13, "Overdue");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(14, "div", 3)(15, "select", 10);
            i0.ɵɵlistener("change", function StudentWorkComponent_Template_select_change_15_listener($event) { i0.ɵɵrestoreView(_r1); ctx.selection(); return i0.ɵɵresetView(ctx.contentselect($event)); });
            i0.ɵɵtwoWayListener("ngModelChange", function StudentWorkComponent_Template_select_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.contentType, $event) || (ctx.contentType = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementStart(16, "option", 7);
            i0.ɵɵtext(17, "Assignment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "option", 8);
            i0.ɵɵtext(19, "Assessment");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(20, "div", 3)(21, "ng-select", 11);
            i0.ɵɵlistener("change", function StudentWorkComponent_Template_ng_select_change_21_listener() { i0.ɵɵrestoreView(_r1); ctx.selection(); return i0.ɵɵresetView(ctx.studentContentDetails()); });
            i0.ɵɵtwoWayListener("ngModelChange", function StudentWorkComponent_Template_ng_select_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.selectedClass, $event) || (ctx.selectedClass = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵtemplate(22, StudentWorkComponent_ng_template_22_Template, 2, 2, "ng-template", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "div", 13)(24, "div", 14)(25, "div", 15)(26, "input", 16);
            i0.ɵɵlistener("input", function StudentWorkComponent_Template_input_input_26_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.updateFilter(ctx.searchStudent)); });
            i0.ɵɵtwoWayListener("ngModelChange", function StudentWorkComponent_Template_input_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.searchStudent, $event) || (ctx.searchStudent = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 17)(28, "button", 18);
            i0.ɵɵelement(29, "i", 19);
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵelementStart(30, "div", 20)(31, "div", 21)(32, "ng-select", 22);
            i0.ɵɵlistener("change", function StudentWorkComponent_Template_ng_select_change_32_listener() { i0.ɵɵrestoreView(_r1); ctx.selection(); return i0.ɵɵresetView(ctx.studentContentDetails()); });
            i0.ɵɵtwoWayListener("ngModelChange", function StudentWorkComponent_Template_ng_select_ngModelChange_32_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.selectClassRoom, $event) || (ctx.selectClassRoom = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(33, StudentWorkComponent_div_33_Template, 2, 2, "div", 23);
            i0.ɵɵelementStart(34, "div", 24);
            i0.ɵɵtemplate(35, StudentWorkComponent_button_35_Template, 2, 0, "button", 25)(36, StudentWorkComponent_button_36_Template, 2, 0, "button", 25);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(37, StudentWorkComponent_div_37_Template, 4, 0, "div", 26);
            i0.ɵɵelementStart(38, "section", 27)(39, "div", 28);
            i0.ɵɵtemplate(40, StudentWorkComponent_div_40_Template, 3, 5, "div", 29);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(41, StudentWorkComponent_ng_template_41_Template, 13, 4, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.teacherCorrectionStatus);
            i0.ɵɵadvance(12);
            i0.ɵɵtwoWayProperty("ngModel", ctx.contentType);
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedClass);
            i0.ɵɵproperty("items", ctx.classesDetails);
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchStudent);
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectClassRoom);
            i0.ɵɵproperty("items", ctx.batchData);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.auth.getRoleId() != "4");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.teacherCorrectionStatus == "4");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.teacherCorrectionStatus == "2");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.choosedData == "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.choosedData != "");
        } }, dependencies: [i13.NgForOf, i13.NgIf, i14.NgSelectComponent, i14.NgOptionTemplateDirective, i15.NgSelectOption, i15.ɵNgSelectMultipleOption, i15.DefaultValueAccessor, i15.SelectControlValueAccessor, i15.NgControlStatus, i15.NgModel, i16.InfiniteScrollDirective, i17.CustomDateFormatPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentWorkComponent, [{
        type: Component,
        args: [{ selector: 'app-student-work', template: "<div class=\"container-fluid\">\n    <div class=\"row mb-0\">\n        <div class=\"col-12 col-sm-6 col-lg-3 form-group align-self-center\">\n            <select (change)=\"selection();teacherStatus($event)\" [(ngModel)]=\"teacherCorrectionStatus\" class=\"custom-select col-md-12\">\n                <option value=\"0\">All</option>\n                <option value=\"1\">Correction Pending</option>\n                <option value=\"2\">Correction Completed</option>\n                <option value=\"3\">Score Released</option>\n                <option value=\"4\">Overdue</option>\n            </select>\n        </div>\n        <div class=\"col-12 col-sm-6 col-lg-3 form-group align-self-center\">\n            <select (change)=\"selection();contentselect($event)\" [(ngModel)]=\"contentType\" class=\"custom-select col-md-12\" id=\"content\">\n                <option value=\"2\">Assignment</option>\n                <option value=\"3\">Assessment</option>\n            </select>\n        </div>\n        <div class=\"col-12 col-sm-6 col-lg-3 form-group align-self-center\">\n            <ng-select (change)=\"selection();studentContentDetails()\"\n                       [(ngModel)]=\"selectedClass\"\n                       [items]=\"classesDetails\"\n                       bindLabel=\"class_name\"\n                       bindValue=\"class_id\"\n                       placeholder=\"Select Class\"\n                       typeToSearchText=\"\">\n                <ng-template let-item=\"item\" ng-option-tmp>\n                    <div [title]=\"item.class_name\">{{item.class_name}}</div>\n                </ng-template>\n            </ng-select>\n        </div>\n        <div class=\"col-12 col-sm-6 col-lg-3 align-self-center\">\n            <div class=\"btn-popup pull-right\">\n                <div class=\"input-group\">\n                    <input (input)=\"updateFilter(searchStudent)\" [(ngModel)]=\"searchStudent\" class=\"form-control\" placeholder=\"Search Student\" size=\"50\" style=\"height:40px\" type=\"text\">\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-primary\" type=\"submit\"><i aria-hidden=\"true\" class=\"fa fa-search\"></i></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12 col-sm-6 col-lg-3 form-group\">\n            <ng-select (change)=\"selection();studentContentDetails()\"\n                       [(ngModel)]=\"selectClassRoom\"\n                       [items]=\"batchData\"\n                       bindLabel=\"batch_name\"\n                       bindValue=\"batch_id\"\n                       placeholder=\"Select Content Folder\"\n                       typeToSearchText=\"\">\n            </ng-select>\n        </div>\n        <div *ngIf=\"auth.getRoleId() != '4'\" class=\"col-md-3\">\n            <ng-select (change)=\"selection();studentContentDetails()\"\n                       [(ngModel)]=\"selectTeacher\"\n                       [items]=\"teacherListData\"\n                       bindLabel=\"teacher_name\"\n                       bindValue=\"teacher_id\"\n                       placeholder=\"Select Teacher\"\n                       typeToSearchText=\"\"\n            >\n            </ng-select>\n        </div>\n        <div class=\"col-md-12 col-sm-6 col-lg-6 ng-star-inserted px-5 pb-3\">\n            <button (click)=\"notifyParent(choosedData, 1)\" *ngIf=\"teacherCorrectionStatus == '4'\" class=\"btn btn-primary pull-right\">Notify All</button>\n            <button (click)=\"releaseAll()\" *ngIf=\"teacherCorrectionStatus == '2'\" class=\"btn btn-primary pull-right\">Release Score For All</button>\n        </div>\n    </div>\n    <div *ngIf=\"choosedData ==''\" class=\"row d-flex justify-content-center mt-5\">\n        <div class=\"col-4\">\n            <button class=\"nodataList\">No Data Available!</button>\n        </div>\n    </div>\n\n    <section class=\"row list-card\">\n        <div class=\"scrollPanel1\">\n            <div (scrolled)=\"onScrollDown($event)\"\n                 (scrolledUp)=\"onUp($event)\"\n                 *ngIf=\"choosedData != ''\"\n                 [fromRoot]=\"true\"\n                 [infiniteScrollContainer]=\"selector\"\n                 [infiniteScrollDistance]=\"2\"\n                 [infiniteScrollThrottle]=\"50\"\n                 class=\"search-results col-md-12\"\n                 infiniteScroll\n            >\n                <div class=\"col-md-12\">\n                    <div *ngFor=\"let list of choosedData; let i = index\" class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <div class=\"col-1 d-flex justify-content-center align-items-center\">\n                                    <figure *ngIf=\"this.list.student_profile == ''\">\n                                        <img alt=\"\" class=\"rounded-circle img-50 border\" src=\"assets/images/digital-product/student.png\">\n                                    </figure>\n                                    <figure *ngIf=\"this.list.student_profile != ''\">\n                                        <img [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + list.student_profile)\" alt=\"\" class=\"rounded-circle img-50\">\n                                    </figure>\n                                </div>\n                                <div class=\"col-7\">\n                                    <h4><small *ngIf=\"list.status == '3'\" class=\"badge badge-primary\">Score Released</small>\n                                        <small *ngIf=\"list.status == '4' || list.status == '6'\" class=\"badge badge-info\">Correction Pending</small>\n                                        <small *ngIf=\"list.status == '5'\" class=\"badge badge-success\">Correction Completed</small>\n                                        <small *ngIf=\"list.status == '1'\" class=\"badge badge-secondary\">Yet To Start</small>\n                                        <small *ngIf=\"list.status == '2'\" class=\"badge badge-warning\">In-Progress</small> &nbsp;\n                                        <span class=\"t-period font-weight-bold\">{{list.student_name}}</span>\n                                    </h4>\n                                    <p><small class=\"font-weight-bold\">Class Name: </small> <span class=\"t-name capital font-weight-bold\">{{list.class_name}}</span>&nbsp;\n                                        &nbsp; <small class=\"font-weight-bold\">Content Name: </small> <span class=\"t-name font-weight-bold\">{{list.content_name}}</span>\n                                        <br/><span *ngIf=\"list.status > 2\"><small class=\"font-weight-bold\">Submitted Date: </small> <span class=\"t-name font-weight-bold\">{{list.answer_completed_date}}</span></span>&nbsp;\n                                        <span *ngIf=\"list.status == '3'\"><small class=\"font-weight-bold\">Score Released Date: </small> <span class=\"t-name font-weight-bold\">{{list.score_release_date}}</span></span></p>\n                                </div>\n                                <div class=\"col-4\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <small *ngIf=\"list.status == '3'\" class=\"pull-right total-score mr-2\">Total Score: <span class=\"t-name\">{{list.total_score}}</span></small>\n                                            <!--                                            <small class=\"pull-right total-score\" style=\"visibility: hidden\" *ngIf=\"list.status != '3' && list.status != '2' && list.status != '1'\">Total Score: <span class=\"t-name\">{{list.total_score}}</span></small>-->\n                                            <small *ngIf=\"list.status == '1' || list.status == '2' && list.status != '3'\"\n                                                   class=\"pull-right total-score mr-2\">Overdue For:\n                                                <span *ngIf=\"list.overDue != '1'\" class=\"over-due1\">{{list.overDue}} (days)</span>\n                                                <span *ngIf=\"list.overDue == '1'\" class=\"over-due1\">{{list.overDue}} (day)</span>\n                                            </small>\n                                            <small *ngIf=\"list.status == '3'\" class=\"pull-right total-score mr-2\">Obtained Score: <span class=\"t-name\">{{list.obtained_score}}</span></small>\n                                            <small *ngIf=\"list.status != '3'\"\n                                                   class=\"pull-right total-score mr-2\">End Date:\n                                                <span *ngIf=\"list.end_date != '0000-00-00'\" class=\"over-due1\">{{list.end_date | customDateFormat}}</span>\n                                                <!--                                                <span class=\"over-due1\" *ngIf=\"list.end_date == '0000-00-00'\" style=\"visibility: hidden\">{{list.end_date |date:'MM/dd/yyyy'}}</span>-->\n                                            </small>\n                                        </div>\n                                    </div>\n                                    <div class=\"row d-flex align-self-end mt-2\">\n                                        <div class=\"col-md-12\">\n                                            <button *ngIf=\"list.status == '1'\" [disabled]=\"list.status == 1\" class=\"btn-sm-i btn-outline-primary pull-right ml-2 mt-2\" type=\"button\">Enter</button>\n                                            <button (click)=\"enterAction(list)\" *ngIf=\"list.status != '1'\" class=\"btn-sm-i btn-primary pull-right ml-2 mt-2\" type=\"button\">Enter</button>\n                                            <button (click)=\"releaseScore(list)\" *ngIf=\"list.status == '5'\" class=\"btn-sm-i btn-outline-primary pull-right mt-2\" type=\"button\">Release Score</button>\n                                            <button (click)=\"notifyParent(list, 2)\" *ngIf=\"list.status == '1' || list.status == '2'\" class=\"btn-sm-i btn-outline-primary pull-right mt-2\" type=\"button\">Notifiy Parent</button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n\n<ng-template #contentnow let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title col-12 text-center\"><b>Notify Contact</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <h5 *ngIf=\"notifyType == 1\" class=\"text-center\">Are You Sure want to notify all contacts?</h5>\n            <h5 *ngIf=\"notifyType == 2\" class=\"text-center\">Are You Sure want to notify {{studentname[0].student_name}} contacts?</h5>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"confirmStudentNotify(1)\" *ngIf=\"this.notifyType == 1\" class=\"btn btn-primary\" type=\"button\">Confirm</button>\n        <button (click)=\"confirmStudentNotify(2)\" *ngIf=\"this.notifyType == 2\" class=\"btn btn-primary\" type=\"button\">Confirm</button>\n        <button (click)=\"close()\" class=\"btn btn-outline-primary\" type=\"button\">Cancel</button>\n    </div>\n</ng-template>\n" }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.AuthService }, { type: i3.CommonDataService }, { type: i4.ConfigurationService }, { type: i5.ContentdetailService }, { type: i6.NewsubjectService }, { type: i1.Router }, { type: i7.TeacherService }, { type: i8.DomSanitizer }, { type: i9.CreatorService }, { type: i10.NgbModal }, { type: i11.ToastrService }, { type: i12.ClassService }], { modalContentnow: [{
            type: ViewChild,
            args: ['contentnow']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentWorkComponent, { className: "StudentWorkComponent" }); })();
//# sourceMappingURL=student-work.component.js.map