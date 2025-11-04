import { Component, ViewChild } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SessionConstants } from '../../../shared/data/sessionConstants';
import { dateOptions } from '../../../shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../shared/service/auth.service";
import * as i3 from "../../../shared/service/common-data.service";
import * as i4 from "../../../shared/service/configuration.service";
import * as i5 from "../../../shared/service/contentdetail.service";
import * as i6 from "../../../shared/service/newsubject.service";
import * as i7 from "../../../shared/service/teacher.service";
import * as i8 from "@angular/platform-browser";
import * as i9 from "../../../shared/service/student.service";
import * as i10 from "@ng-bootstrap/ng-bootstrap";
import * as i11 from "ngx-toastr";
import * as i12 from "../../../shared/service/class.service";
import * as i13 from "@angular/common";
import * as i14 from "@ng-select/ng-select";
import * as i15 from "@angular/forms";
import * as i16 from "ngx-infinite-scroll";
import * as i17 from "@nodro7/angular-mydatepicker";
import * as i18 from "../../studentlogin/overalldetails/overalldetails.component";
import * as i19 from "../../auth/tiny-mice/tiny-mice.component";
import * as i20 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["viewoveralldetails"];
const _c1 = ["contentnow"];
const _c2 = ["writeNoteOpen"];
function ListContentComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.item;
    i0.ɵɵproperty("title", item_r2.class_name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r2.class_name);
} }
function ListContentComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "ng-select", 39);
    i0.ɵɵtwoWayListener("ngModelChange", function ListContentComponent_div_33_Template_ng_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.selectTeacher, $event) || (ctx_r3.selectTeacher = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ListContentComponent_div_33_Template_ng_select_change_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r3 = i0.ɵɵnextContext(); ctx_r3.selection(); return i0.ɵɵresetView(ctx_r3.studentContentDetails()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r3.teacherListData);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.selectTeacher);
} }
function ListContentComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "div", 20)(2, "div", 21)(3, "input", 40, 3);
    i0.ɵɵlistener("click", function ListContentComponent_div_34_Template_input_click_3_listener() { i0.ɵɵrestoreView(_r5); const dp_r6 = i0.ɵɵreference(4); return i0.ɵɵresetView(dp_r6.toggleCalendar()); })("dateChanged", function ListContentComponent_div_34_Template_input_dateChanged_3_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); ctx_r3.onDateChanged($event); ctx_r3.selection(); return i0.ɵɵresetView(ctx_r3.studentContentDetails()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 23)(6, "button", 41);
    i0.ɵɵlistener("click", function ListContentComponent_div_34_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r5); const dp_r6 = i0.ɵɵreference(4); return i0.ɵɵresetView(dp_r6.toggleCalendar()); });
    i0.ɵɵelement(7, "i", 42);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("options", ctx_r3.myDpOptions)("placeholder", ctx_r3.teacherCorrectionStatus == "3" ? "Search Release Date" : "Search Submitted Date")("value", ctx_r3.selectDate);
} }
function ListContentComponent_button_46_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 43);
    i0.ɵɵlistener("click", function ListContentComponent_button_46_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.releaseAll()); });
    i0.ɵɵtext(1, "Release Score For All");
    i0.ɵɵelementEnd();
} }
function ListContentComponent_button_47_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 43);
    i0.ɵɵlistener("click", function ListContentComponent_button_47_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.notifyParent(ctx_r3.choosedData, 1)); });
    i0.ɵɵtext(1, "Notify All");
    i0.ɵɵelementEnd();
} }
function ListContentComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44)(1, "div", 45)(2, "button", 46);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function ListContentComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵelement(1, "img", 48);
    i0.ɵɵelementEnd();
} }
function ListContentComponent_div_52_div_2_figure_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 75);
    i0.ɵɵelementEnd();
} }
function ListContentComponent_div_52_div_2_figure_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 76);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r3.sanitizer.bypassSecurityTrustResourceUrl(ctx_r3.webhost + "/" + list_r11.student_profile), i0.ɵɵsanitizeUrl);
} }
function ListContentComponent_div_52_div_2_small_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 77);
    i0.ɵɵtext(1, "Score Released");
    i0.ɵɵelementEnd();
} }
function ListContentComponent_div_52_div_2_small_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 78);
    i0.ɵɵtext(1, "Correction Pending");
    i0.ɵɵelementEnd();
} }
function ListContentComponent_div_52_div_2_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 79);
    i0.ɵɵtext(1, "Correction Completed");
    i0.ɵɵelementEnd();
} }
function ListContentComponent_div_52_div_2_small_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 80);
    i0.ɵɵtext(1, "Yet To Start");
    i0.ɵɵelementEnd();
} }
function ListContentComponent_div_52_div_2_small_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 81);
    i0.ɵɵtext(1, "In-Progress");
    i0.ɵɵelementEnd();
} }
function ListContentComponent_div_52_div_2_span_27_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 65);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r11 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, list_r11.answer_completed_date));
} }
function ListContentComponent_div_52_div_2_span_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "span", 63);
    i0.ɵɵtext(2, "Submitted Date: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ListContentComponent_div_52_div_2_span_27_span_3_Template, 3, 3, "span", 82);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r11.answer_completed_date != "00-00-0000");
} }
function ListContentComponent_div_52_div_2_span_29_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 65);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r11 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, list_r11.score_release_date));
} }
function ListContentComponent_div_52_div_2_span_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "span", 63);
    i0.ɵɵtext(2, "Score Released Date: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ListContentComponent_div_52_div_2_span_29_span_3_Template, 3, 3, "span", 82);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r11.score_release_date != "00-00-0000");
} }
function ListContentComponent_div_52_div_2_span_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 83);
    i0.ɵɵtext(1, "Total Score: ");
    i0.ɵɵelementStart(2, "span", 84);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(list_r11.total_score);
} }
function ListContentComponent_div_52_div_2_span_34_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 86);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r11 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", list_r11.overDue, " (days)");
} }
function ListContentComponent_div_52_div_2_span_34_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 86);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r11 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", list_r11.overDue, " (day)");
} }
function ListContentComponent_div_52_div_2_span_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 83);
    i0.ɵɵtext(1, "Overdue For: ");
    i0.ɵɵtemplate(2, ListContentComponent_div_52_div_2_span_34_span_2_Template, 2, 1, "span", 85)(3, ListContentComponent_div_52_div_2_span_34_span_3_Template, 2, 1, "span", 85);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r11.overDue != "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r11.overDue == "1");
} }
function ListContentComponent_div_52_div_2_span_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 83);
    i0.ɵɵtext(1, "Obtained Score: ");
    i0.ɵɵelementStart(2, "span", 84);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(list_r11.obtained_score);
} }
function ListContentComponent_div_52_div_2_span_36_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 86);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r11 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, list_r11.end_date));
} }
function ListContentComponent_div_52_div_2_span_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 83);
    i0.ɵɵtext(1, "End Date: ");
    i0.ɵɵtemplate(2, ListContentComponent_div_52_div_2_span_36_span_2_Template, 3, 3, "span", 85);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r11.end_date != "0000-00-00");
} }
function ListContentComponent_div_52_div_2_i_39_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 87);
    i0.ɵɵlistener("click", function ListContentComponent_div_52_div_2_i_39_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r12); const list_r11 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.navigateToSATReport(list_r11, $event)); });
    i0.ɵɵelementEnd();
} }
function ListContentComponent_div_52_div_2_button_42_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 88);
    i0.ɵɵlistener("click", function ListContentComponent_div_52_div_2_button_42_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const list_r11 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.notifyParent(list_r11, 2)); });
    i0.ɵɵtext(1, "Notifiy Parent");
    i0.ɵɵelementEnd();
} }
function ListContentComponent_div_52_div_2_button_43_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 88);
    i0.ɵɵlistener("click", function ListContentComponent_div_52_div_2_button_43_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const list_r11 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.releaseScore(list_r11)); });
    i0.ɵɵtext(1, "Release Score");
    i0.ɵɵelementEnd();
} }
function ListContentComponent_div_52_div_2_button_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 89);
    i0.ɵɵtext(1, "Enter");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("disabled", list_r11.status == 1);
} }
function ListContentComponent_div_52_div_2_button_45_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 90);
    i0.ɵɵlistener("click", function ListContentComponent_div_52_div_2_button_45_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r15); const list_r11 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.enterAction(list_r11)); });
    i0.ɵɵtext(1, "Enter");
    i0.ɵɵelementEnd();
} }
function ListContentComponent_div_52_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52)(1, "div", 53)(2, "div", 26)(3, "div", 54);
    i0.ɵɵtemplate(4, ListContentComponent_div_52_div_2_figure_4_Template, 2, 0, "figure", 55)(5, ListContentComponent_div_52_div_2_figure_5_Template, 2, 1, "figure", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 56)(7, "h4");
    i0.ɵɵtemplate(8, ListContentComponent_div_52_div_2_small_8_Template, 2, 0, "small", 57)(9, ListContentComponent_div_52_div_2_small_9_Template, 2, 0, "small", 58)(10, ListContentComponent_div_52_div_2_small_10_Template, 2, 0, "small", 59)(11, ListContentComponent_div_52_div_2_small_11_Template, 2, 0, "small", 60)(12, ListContentComponent_div_52_div_2_small_12_Template, 2, 0, "small", 61);
    i0.ɵɵtext(13, " \u00A0 ");
    i0.ɵɵelementStart(14, "span", 62);
    i0.ɵɵlistener("click", function ListContentComponent_div_52_div_2_Template_span_click_14_listener() { const list_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.getStudentFullDetail(list_r11)); });
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "p")(17, "span", 63);
    i0.ɵɵtext(18, "Class Name: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 64);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(21, "\u00A0 \u00A0 ");
    i0.ɵɵelementStart(22, "span", 63);
    i0.ɵɵtext(23, "Content Name: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span", 65);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(26, "br");
    i0.ɵɵtemplate(27, ListContentComponent_div_52_div_2_span_27_Template, 4, 1, "span", 55);
    i0.ɵɵtext(28, "\u00A0 ");
    i0.ɵɵtemplate(29, ListContentComponent_div_52_div_2_span_29_Template, 4, 1, "span", 55);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div", 45)(31, "div", 26)(32, "div", 50);
    i0.ɵɵtemplate(33, ListContentComponent_div_52_div_2_span_33_Template, 4, 1, "span", 66)(34, ListContentComponent_div_52_div_2_span_34_Template, 4, 2, "span", 66)(35, ListContentComponent_div_52_div_2_span_35_Template, 4, 1, "span", 66)(36, ListContentComponent_div_52_div_2_span_36_Template, 3, 1, "span", 66);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div", 67)(38, "div", 68);
    i0.ɵɵtemplate(39, ListContentComponent_div_52_div_2_i_39_Template, 1, 0, "i", 69);
    i0.ɵɵelementStart(40, "button", 70);
    i0.ɵɵlistener("click", function ListContentComponent_div_52_div_2_Template_button_click_40_listener() { const list_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.openNotes(list_r11)); });
    i0.ɵɵelement(41, "i", 71);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(42, ListContentComponent_div_52_div_2_button_42_Template, 2, 0, "button", 72)(43, ListContentComponent_div_52_div_2_button_43_Template, 2, 0, "button", 72)(44, ListContentComponent_div_52_div_2_button_44_Template, 2, 1, "button", 73)(45, ListContentComponent_div_52_div_2_button_45_Template, 2, 0, "button", 74);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const list_r11 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", list_r11.student_profile == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r11.student_profile != "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r11.status == "3");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r11.status == "4" || list_r11.status == "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r11.status == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r11.status == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r11.status == "2");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(list_r11.student_name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(list_r11.class_name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(list_r11.content_name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r11.status > 2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r11.status == "3");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", list_r11.status == "3");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r11.status == "1" || list_r11.status == "2" && list_r11.status != "3");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r11.status == "3");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r11.status != "3");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r11.status == "3" && list_r11.content_format == 3 && list_r11.is_test == "1");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r11.status == "1" || list_r11.status == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r11.status == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r11.status == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r11.status != "1");
} }
function ListContentComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 49);
    i0.ɵɵlistener("scrolled", function ListContentComponent_div_52_Template_div_scrolled_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onScrollDown($event)); });
    i0.ɵɵelementStart(1, "div", 50);
    i0.ɵɵtemplate(2, ListContentComponent_div_52_div_2_Template, 46, 21, "div", 51);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("infiniteScrollContainer", ctx_r3.selector)("fromRoot", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.choosedData);
} }
function ListContentComponent_ng_template_53_h5_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 98);
    i0.ɵɵtext(1, "Are You Sure want to notify all contacts?");
    i0.ɵɵelementEnd();
} }
function ListContentComponent_ng_template_53_h5_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 98);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Are You Sure want to notify ", ctx_r3.studentname[0].student_name, " contacts?");
} }
function ListContentComponent_ng_template_53_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 99);
    i0.ɵɵlistener("click", function ListContentComponent_ng_template_53_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.confirmStudentNotify(1)); });
    i0.ɵɵtext(1, "Confirm");
    i0.ɵɵelementEnd();
} }
function ListContentComponent_ng_template_53_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 99);
    i0.ɵɵlistener("click", function ListContentComponent_ng_template_53_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.confirmStudentNotify(2)); });
    i0.ɵɵtext(1, "Confirm");
    i0.ɵɵelementEnd();
} }
function ListContentComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 91)(1, "h4", 92)(2, "b");
    i0.ɵɵtext(3, "Notify Contact");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 93)(5, "div", 4);
    i0.ɵɵtemplate(6, ListContentComponent_ng_template_53_h5_6_Template, 2, 0, "h5", 94)(7, ListContentComponent_ng_template_53_h5_7_Template, 2, 1, "h5", 94);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 95);
    i0.ɵɵtemplate(9, ListContentComponent_ng_template_53_button_9_Template, 2, 0, "button", 96)(10, ListContentComponent_ng_template_53_button_10_Template, 2, 0, "button", 96);
    i0.ɵɵelementStart(11, "button", 97);
    i0.ɵɵlistener("click", function ListContentComponent_ng_template_53_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r16); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.close()); });
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
function ListContentComponent_ng_template_55_div_6_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 118);
} }
function ListContentComponent_ng_template_55_div_6_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 119);
} }
function ListContentComponent_ng_template_55_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 108)(1, "div", 109)(2, "div", 110);
    i0.ɵɵtemplate(3, ListContentComponent_ng_template_55_div_6_i_3_Template, 1, 0, "i", 111)(4, ListContentComponent_ng_template_55_div_6_i_4_Template, 1, 0, "i", 112);
    i0.ɵɵelement(5, "span", 113);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 114)(7, "small", 115);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "customDateFormat");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 116)(11, "i", 117);
    i0.ɵɵlistener("click", function ListContentComponent_ng_template_55_div_6_Template_i_click_11_listener() { const list_r21 = i0.ɵɵrestoreView(_r20).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.deleteNotes(list_r21)); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const list_r21 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r21.notes_type == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r21.notes_type == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", list_r21.notes, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 4, list_r21.created_date));
} }
function ListContentComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 91)(1, "h4", 100);
    i0.ɵɵtext(2, "Add Notes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 101);
    i0.ɵɵlistener("click", function ListContentComponent_ng_template_55_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r19); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 93)(5, "div", 102);
    i0.ɵɵtemplate(6, ListContentComponent_ng_template_55_div_6_Template, 12, 6, "div", 103);
    i0.ɵɵelementStart(7, "div", 104)(8, "app-tiny-mice", 105);
    i0.ɵɵlistener("emitEditorValue", function ListContentComponent_ng_template_55_Template_app_tiny_mice_emitEditorValue_8_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.getEditorValue($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 106)(10, "button", 107);
    i0.ɵɵlistener("click", function ListContentComponent_ng_template_55_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r19); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addNotes("2")); });
    i0.ɵɵtext(11, "Send as Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 99);
    i0.ɵɵlistener("click", function ListContentComponent_ng_template_55_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r19); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.addNotes("1")); });
    i0.ɵɵtext(13, "Add");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r3.showNotes);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("editorPatchValue", false)("height", 300)("id", "addNotes")("showDropBtn", false)("showInputBtn", false);
} }
function ListContentComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 91)(1, "h4", 120);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 121);
    i0.ɵɵlistener("click", function ListContentComponent_ng_template_57_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r22); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.closeOverAll()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 93);
    i0.ɵɵelement(5, "app-overalldetails", 122);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r3.studentName, " Overall details");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("studentdata", ctx_r3.viewdetail);
} }
export class ListContentComponent {
    constructor(router, auth, commondata, confi, contentDetail, subject, route, teacher, sanitizer, studented, modalService, toastr, classService, datePipe) {
        this.router = router;
        this.auth = auth;
        this.commondata = commondata;
        this.confi = confi;
        this.contentDetail = contentDetail;
        this.subject = subject;
        this.route = route;
        this.teacher = teacher;
        this.sanitizer = sanitizer;
        this.studented = studented;
        this.modalService = modalService;
        this.toastr = toastr;
        this.classService = classService;
        this.datePipe = datePipe;
        this.myDpOptions = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat,
        };
        this.contentType = 2;
        this.functionCalled = false;
        this.showNotes = [];
        this.selectDate = '';
        this.searchStudent = '';
        this.studentName = '';
        this.notes = '';
        this.direction = '';
        this.pageNo = 1;
        this.selector = '.scrollPanel1';
        this.studentname = '';
        this.notifyType = '';
        this.searchContent = '';
        this.editorValue = '';
        this.emitNotesValue = '';
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
                if (this.route.url.includes('list-content')) {
                    this.init(params);
                }
            }
            else {
                this.init(this.auth.getSessionData('school_id'));
            }
        });
    }
    onDateChanged(event) {
        console.log(event, 'ene');
        this.myDpOptions = {};
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            // disableUntil: {
            //     year: event.singleDate.date.year,
            //     month: event.singleDate.date.month,
            //     day: event.singleDate.date.day - 1 ,
            // },
        };
        this.selectDate = this.datePipe.transform(event.singleDate.formatted, 'mm/dd/yyyy');
    }
    ngOnInit() {
        this.allowDropDown = false;
        this.subject.allowSchoolChange(this.allowDropDown);
    }
    ngOnDestroy() {
        this.setSearch_Filter();
    }
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
    resetSearch() {
        this.selectedClass = null;
        this.selectTeacher = null;
        this.selectDate = '';
        this.selectClassRoom = null;
        this.teacherCorrectionStatus = '0';
        this.contentType = '2';
        this.searchStudent = '';
        this.searchContent = '';
        this.pageNo = 1;
        this.setSearch_Filter();
        this.studentContentDetails();
    }
    enterAction(data) {
        if (data.status != 1) {
            this.auth.setSessionData('classDetails', JSON.stringify(data));
            this.auth.setSessionData('student-content', 1);
            if (this.contentType == 2) {
                this.route.navigate(['/assignment-correction/correction-page']);
            }
            else {
                this.route.navigate(['/assessment-correction/correction-page']);
            }
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
            student_content_id: [studentData.student_content_id],
            class_id: studentData.class_id,
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
            type: '2',
            list_type: 'list',
            class_id: this.selectedClass ?? ''
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
        console.log(this.selectedClass, 'selectedClass');
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.selectedClass ?? ''
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
        $('#addNotes').val('');
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
        console.log(this.selectDate, 'selectDate');
        const data = {
            platform: 'web',
            type: '0',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : this.selectTeacher ? this.selectTeacher : '0',
            status: this.teacherCorrectionStatus,
            content_type: this.contentType,
            search_content: this.searchContent,
            class_id: this.selectedClass ? this.selectedClass : '0',
            pageno: this.pageNo,
            recordsperpage: '20',
            search: this.searchStudent,
            date_search: this.teacherCorrectionStatus == '0' || this.teacherCorrectionStatus == '4' ? '' : this.selectDate,
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
            const temp = successData.ResponseObject;
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
            this.functionCalled = true;
        }
        else {
            this.functionCalled = true;
            this.toastr.error(successData.ErrorObject);
        }
    }
    studentContentDetailsListFailure(error) {
        this.functionCalled = true;
        console.log(error, 'error');
    }
    classList() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : this.selectTeacher ?? '0',
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
    openNotes(item) {
        this.getNotes(item);
        this.modalRef = this.modalService.open(this.writeNoteOpen, { size: 'md' });
    }
    getEditorValue(event) {
        this.editorValue = event.editor;
        this.notes = event.content;
    }
    getNotes(item) {
        this.notesData = item;
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: item.content_id,
            student_id: item.student_id,
            class_id: item.class_id
        };
        this.contentDetail.notesList(data).subscribe((successData) => {
            this.notesListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_classList');
        });
    }
    notesListSuccess(successData) {
        if (successData.IsSuccess) {
            this.showNotes = successData.ResponseObject;
        }
    }
    addNotes(type) {
        // this.notes = $('#addNotes').val();
        console.log(this.notesData, 'notesData');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: this.notesData.content_id,
            content_type: this.notesData.content_type,
            student_id: this.notesData.student_id,
            class_id: this.notesData.class_id,
            notes: this.notes,
            type
        };
        this.contentDetail.notesAdd(data).subscribe((successData) => {
            this.addNotesSuccess(successData, data);
        }, (error) => {
            console.error(error, 'error_classList');
        });
    }
    addNotesSuccess(successData, data) {
        if (successData.IsSuccess) {
            if (data.type == '2') {
                this.toastr.success('Mail Sent Successfully');
            }
            this.editorValue != '' ? this.editorValue.setContent('') : '';
            this.notes = '';
            this.getNotes(this.notesData);
            // $('#addNotes').val('');
            // this.showNotes = successData.ResponseObject;
        }
        else {
            console.log(successData);
            this.toastr.error(successData.ErrorObject);
        }
    }
    deleteNotes(item) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: this.notesData.content_id,
            student_id: this.notesData.student_id,
            class_id: this.notesData.class_id,
            id: item.id
        };
        this.contentDetail.notesDelete(data).subscribe((successData) => {
            this.deleteNotesSuccess(successData);
        }, (error) => {
            console.error(error, 'error_classList');
        });
    }
    deleteNotesSuccess(successData) {
        if (successData.IsSuccess) {
            this.getNotes(this.notesData);
        }
    }
    getStudentFullDetail(item) {
        console.log(item, 'datum');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: 'list'
        };
        this.studented.getStudentList(data).subscribe((successData) => {
            this.studentFullDetailSuccess(successData, item);
        }, (error) => {
            console.log(error);
        });
    }
    studentFullDetailSuccess(successData, item) {
        if (successData.IsSuccess) {
            successData.ResponseObject.forEach((val) => {
                if (val.user_id == item.student_id) {
                    this.viewdetail = val;
                    this.studentName = item.student_name;
                }
            });
            this.modalRef = this.modalService.open(this.viewoveralldetails, { size: 'xl' });
            console.log(this.viewdetail, 'viewDetail');
        }
    }
    closeOverAll() {
        this.modalRef.close('viewoveralldetails');
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
    setSearch_Filter() {
        let data = JSON.parse(this.auth.getSessionData(SessionConstants.studentWorkSearch));
        if (data != null) {
            data.forEach((items) => {
                if (items.school_id == this.auth.getSessionData('school_id')) {
                    items.class = this.selectedClass;
                    items.teacher = this.selectTeacher;
                    items.date = this.selectDate;
                    items.curriculum_Folder = this.selectClassRoom;
                    items.teacherCorrectionStatus = this.teacherCorrectionStatus;
                    items.contentType = this.contentType;
                    items.contentName = this.searchContent;
                    items.studentName = this.searchStudent;
                }
                else {
                    const searchData = {
                        teacher: this.selectTeacher,
                        class: this.selectedClass,
                        date: this.selectDate,
                        curriculum_Folder: this.selectClassRoom,
                        school_id: this.auth.getSessionData('school_id'),
                        teacherCorrectionStatus: this.teacherCorrectionStatus,
                        contentType: this.contentType,
                        studentName: this.searchStudent,
                        contentName: this.searchContent
                    };
                    data.push(searchData);
                }
            });
            data = data.filter((test, index, array) => index === array.findIndex((findTest) => findTest.school_id === test.school_id));
            this.auth.setSessionData(SessionConstants.studentWorkSearch, JSON.stringify(data));
        }
    }
    getSearch_Filter() {
        const data = JSON.parse(this.auth.getSessionData(SessionConstants.studentWorkSearch));
        data.every((items) => {
            if (items.school_id == this.auth.getSessionData('school_id')) {
                this.selectedClass = items.class;
                this.selectTeacher = items.teacher;
                this.selectDate = items.date;
                this.selectClassRoom = items.curriculum_Folder;
                this.teacherCorrectionStatus = items.teacherCorrectionStatus;
                this.contentType = items.contentType;
                this.searchStudent = items.studentName;
                this.searchContent = items.contentName;
                return false;
            }
            else {
                this.selectedClass = null;
                this.selectTeacher = null;
                this.selectDate = '';
                this.selectClassRoom = null;
                this.teacherCorrectionStatus = '0';
                this.contentType = 2;
                this.searchStudent = '';
                this.searchContent = '';
            }
            return true;
        });
    }
    navigateToSATReport(value, event) {
        console.log(value, 'value');
        const satReportDetails = {
            class_id: value?.class_id,
            class_name: value?.class_name,
            student_id: '0',
            content_id: value.content_id,
            student_content_id: value.student_content_id,
            test_type_id: value?.test_type_id ?? '0',
        };
        console.log(satReportDetails, 'satReportDetails');
        this.auth.setSessionData('satReportData', JSON.stringify(satReportDetails));
        this.auth.setSessionData('reportCalledFrom', 'student-content');
        this.route.navigate(['sat-report']);
        event ? event.stopPropagation() : '';
    }
    static { this.ɵfac = function ListContentComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListContentComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.CommonDataService), i0.ɵɵdirectiveInject(i4.ConfigurationService), i0.ɵɵdirectiveInject(i5.ContentdetailService), i0.ɵɵdirectiveInject(i6.NewsubjectService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i7.TeacherService), i0.ɵɵdirectiveInject(i8.DomSanitizer), i0.ɵɵdirectiveInject(i9.StudentService), i0.ɵɵdirectiveInject(i10.NgbModal), i0.ɵɵdirectiveInject(i11.ToastrService), i0.ɵɵdirectiveInject(i12.ClassService), i0.ɵɵdirectiveInject(i13.DatePipe)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListContentComponent, selectors: [["app-list-content"]], viewQuery: function ListContentComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewoveralldetails = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContentnow = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.writeNoteOpen = _t.first);
        } }, decls: 59, vars: 20, consts: [["contentnow", ""], ["writeNoteOpen", ""], ["viewoveralldetails", ""], ["dp", "angular-mydatepicker"], [1, "container-fluid"], [1, "row", "mb-0"], [1, "col-12", "col-sm-6", "col-lg-2", "form-group", "align-self-center"], [1, "custom-select", "col-md-12", 3, "change", "ngModelChange", "ngModel"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["id", "content", 1, "custom-select", "col-md-12", 3, "change", "ngModelChange", "ngModel"], [1, "col-12", "col-sm-6", "col-lg-3", "form-group", "align-self-center"], ["bindLabel", "class_name", "bindValue", "class_id", "placeholder", "Select Class", "typeToSearchText", "", 3, "ngModelChange", "change", "items", "ngModel"], ["ng-option-tmp", ""], [1, "col-md-3"], ["bindLabel", "batch_name", "bindValue", "batch_id", "placeholder", "Select Content Folder", "typeToSearchText", "", 3, "ngModelChange", "change", "items", "ngModel"], [1, "col-12", "col-sm-6", "col-lg-2"], [1, "btn-popup", "pull-right", "mb-0"], [1, "input-group"], ["type", "text", "size", "50", "placeholder", "Student name", 1, "form-control", 2, "height", "40px", 3, "ngModelChange", "input", "ngModel"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary", "p-2"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "row"], ["class", "col-md-2", 4, "ngIf"], [1, "col-md-2"], ["size", "50", "type", "text", 1, "form-control", 2, "height", "40px", 3, "input", "ngModelChange", "ngModel", "placeholder"], [1, "btn", "cancel", "pull-right", 3, "click"], [1, "fa", "fa-close", "mr-1"], ["class", "btn btn-sm btn-primary pull-right mr-2", 3, "click", 4, "ngIf"], ["class", "row d-flex justify-content-center mt-5", 4, "ngIf"], ["id", "custom-pdf-loader", "style", "height: 60vh;", 4, "ngIf"], [1, "row", "list-card", "mt-3"], [1, "scrollPanel1", 2, "height", "71vh !important"], ["class", "search-results col-md-12 px-0", "infiniteScroll", "", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "infiniteScrollContainer", "fromRoot", "scrolled", 4, "ngIf"], [3, "title"], ["bindLabel", "teacher_name", "bindValue", "teacher_id", "placeholder", "Select Teacher", "typeToSearchText", "", 3, "ngModelChange", "change", "items", "ngModel"], ["angular-mydatepicker", "", "autocomplete", "off", "name", "dp", 1, "form-control", 3, "click", "dateChanged", "options", "placeholder", "value"], ["type", "button", 1, "btn", "btn-primary", "p-2", 3, "click"], [1, "fa", "fa-calendar-o"], [1, "btn", "btn-sm", "btn-primary", "pull-right", "mr-2", 3, "click"], [1, "row", "d-flex", "justify-content-center", "mt-5"], [1, "col-4"], [1, "nodataList"], ["id", "custom-pdf-loader", 2, "height", "60vh"], ["alt", "", "src", "assets/images/pre-loader/loader-01.svg"], ["infiniteScroll", "", 1, "search-results", "col-md-12", "px-0", 3, "scrolled", "infiniteScrollDistance", "infiniteScrollThrottle", "infiniteScrollContainer", "fromRoot"], [1, "col-md-12"], ["class", "card class-hover class-card", 4, "ngFor", "ngForOf"], [1, "card", "class-hover", "class-card"], [1, "card-body"], [1, "col-1", "d-flex", "justify-content-center", "align-items-center"], [4, "ngIf"], [1, "col-7"], ["class", "badge badge-primary", 4, "ngIf"], ["class", "badge badge-info", 4, "ngIf"], ["class", "badge badge-success", 4, "ngIf"], ["class", "badge badge-secondary", 4, "ngIf"], ["class", "badge badge-warning", 4, "ngIf"], [1, "t-period", "font-weight-bold", "cursor", "name-hover", 3, "click"], [1, "font-weight-bold"], [1, "t-name", "capital", "font-weight-bold"], [1, "t-name", "font-weight-bold"], ["class", "pull-right total-score mr-2", 4, "ngIf"], [1, "row", "d-flex", "align-self-end", "mt-2"], [1, "col-md-12", "d-flex", "justify-content-end"], ["title", "View Analytics", "style", "font-size: 20px; margin-top: 12px", "class", "fa fa-bar-chart color-primary cursor mr-2", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["title", "Add Notes", 1, "btn-outline-primary", "btn-sm-view", "mt-2", "mr-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-newspaper-o"], ["class", "btn-sm-i btn-outline-primary pull-right mt-2", "type", "button", 3, "click", 4, "ngIf"], ["class", "btn-sm-i btn-outline-primary pull-right ml-2 mt-2", "type", "button", 3, "disabled", 4, "ngIf"], ["class", "btn-sm-i btn-primary pull-right ml-2 mt-2", "type", "button", 3, "click", 4, "ngIf"], ["alt", "", "src", "assets/images/digital-product/student.png", 1, "rounded-circle", "img-50", "border"], ["alt", "", 1, "rounded-circle", "img-50", 3, "src"], [1, "badge", "badge-primary"], [1, "badge", "badge-info"], [1, "badge", "badge-success"], [1, "badge", "badge-secondary"], [1, "badge", "badge-warning"], ["class", "t-name font-weight-bold", 4, "ngIf"], [1, "pull-right", "total-score", "mr-2"], [1, "t-name"], ["class", "over-due1", 4, "ngIf"], [1, "over-due1"], ["title", "View Analytics", "aria-hidden", "true", 1, "fa", "fa-bar-chart", "color-primary", "cursor", "mr-2", 2, "font-size", "20px", "margin-top", "12px", 3, "click"], ["type", "button", 1, "btn-sm-i", "btn-outline-primary", "pull-right", "mt-2", 3, "click"], ["type", "button", 1, "btn-sm-i", "btn-outline-primary", "pull-right", "ml-2", "mt-2", 3, "disabled"], ["type", "button", 1, "btn-sm-i", "btn-primary", "pull-right", "ml-2", "mt-2", 3, "click"], [1, "modal-header"], [1, "modal-title", "col-12", "text-center"], [1, "modal-body"], ["class", "text-center", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "text-center"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "modal-title", "text-center"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "row", "d-flex", "justify-content-center"], ["class", "col-10 mt-2", 4, "ngFor", "ngForOf"], [1, "col-11", "mt-2"], [3, "emitEditorValue", "editorPatchValue", "height", "id", "showDropBtn", "showInputBtn"], [1, "col-11", "text-right", "mt-2"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-2", 3, "click"], [1, "col-10", "mt-2"], [1, "row", "border", "border-secondary", "rounded"], [1, "col-8", "d-flex", 2, "word-wrap", "break-word"], ["class", "fa fa-envelope-square align-self-center mr-2 color-primary", 4, "ngIf"], ["class", "fa fa-bookmark align-self-center mr-2 color-secondary", 4, "ngIf"], [1, "mb-0", "mt-3", 3, "innerHTML"], [1, "col-3", "px-0", "d-flex", "justify-content-end", "align-self-center"], [1, "mb-0"], [1, "col-1", "align-self-center"], ["aria-hidden", "true", 1, "fa", "fa-close", "fa-1x", "text-danger", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-envelope-square", "align-self-center", "mr-2", "color-primary"], [1, "fa", "fa-bookmark", "align-self-center", "mr-2", "color-secondary"], ["id", "modal-basic-title", 1, "modal-title", "color-primary"], ["aria-hidden", "true", 1, "fa", "fa-close", "fa-lg", "mt-1", 2, "color", "#7F3486", "cursor", "pointer", "float", "right", 3, "click"], [3, "studentdata"]], template: function ListContentComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "select", 7);
            i0.ɵɵlistener("change", function ListContentComponent_Template_select_change_3_listener($event) { i0.ɵɵrestoreView(_r1); ctx.selection(); return i0.ɵɵresetView(ctx.teacherStatus($event)); });
            i0.ɵɵtwoWayListener("ngModelChange", function ListContentComponent_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.teacherCorrectionStatus, $event) || (ctx.teacherCorrectionStatus = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementStart(4, "option", 8);
            i0.ɵɵtext(5, "All");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "option", 9);
            i0.ɵɵtext(7, "Correction Pending");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "option", 10);
            i0.ɵɵtext(9, "Correction Completed");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "option", 11);
            i0.ɵɵtext(11, "Score Released");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "option", 12);
            i0.ɵɵtext(13, "Overdue");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(14, "div", 6)(15, "select", 13);
            i0.ɵɵlistener("change", function ListContentComponent_Template_select_change_15_listener($event) { i0.ɵɵrestoreView(_r1); ctx.selection(); return i0.ɵɵresetView(ctx.contentselect($event)); });
            i0.ɵɵtwoWayListener("ngModelChange", function ListContentComponent_Template_select_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.contentType, $event) || (ctx.contentType = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementStart(16, "option", 10);
            i0.ɵɵtext(17, "Assignment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "option", 11);
            i0.ɵɵtext(19, "Assessment");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(20, "div", 14)(21, "ng-select", 15);
            i0.ɵɵtwoWayListener("ngModelChange", function ListContentComponent_Template_ng_select_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.selectedClass, $event) || (ctx.selectedClass = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("change", function ListContentComponent_Template_ng_select_change_21_listener() { i0.ɵɵrestoreView(_r1); ctx.selection(); ctx.teacherList(); ctx.batchDataList(); return i0.ɵɵresetView(ctx.studentContentDetails()); });
            i0.ɵɵtemplate(22, ListContentComponent_ng_template_22_Template, 2, 2, "ng-template", 16);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "div", 17)(24, "ng-select", 18);
            i0.ɵɵtwoWayListener("ngModelChange", function ListContentComponent_Template_ng_select_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.selectClassRoom, $event) || (ctx.selectClassRoom = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("change", function ListContentComponent_Template_ng_select_change_24_listener() { i0.ɵɵrestoreView(_r1); ctx.selection(); return i0.ɵɵresetView(ctx.studentContentDetails()); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "div", 19)(26, "div", 20)(27, "div", 21)(28, "input", 22);
            i0.ɵɵtwoWayListener("ngModelChange", function ListContentComponent_Template_input_ngModelChange_28_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.searchStudent, $event) || (ctx.searchStudent = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("input", function ListContentComponent_Template_input_input_28_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.updateFilter(ctx.searchStudent)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "div", 23)(30, "button", 24);
            i0.ɵɵelement(31, "i", 25);
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵelementStart(32, "div", 26);
            i0.ɵɵtemplate(33, ListContentComponent_div_33_Template, 2, 2, "div", 27)(34, ListContentComponent_div_34_Template, 8, 3, "div", 27);
            i0.ɵɵelementStart(35, "div", 28)(36, "div", 20)(37, "div", 21)(38, "input", 29);
            i0.ɵɵlistener("input", function ListContentComponent_Template_input_input_38_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.updateFilter(ctx.searchContent)); });
            i0.ɵɵtwoWayListener("ngModelChange", function ListContentComponent_Template_input_ngModelChange_38_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.searchContent, $event) || (ctx.searchContent = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "div", 23)(40, "button", 24);
            i0.ɵɵelement(41, "i", 25);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(42, "div")(43, "button", 30);
            i0.ɵɵlistener("click", function ListContentComponent_Template_button_click_43_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.resetSearch()); });
            i0.ɵɵelement(44, "i", 31);
            i0.ɵɵtext(45, "Reset Filter");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(46, ListContentComponent_button_46_Template, 2, 0, "button", 32)(47, ListContentComponent_button_47_Template, 2, 0, "button", 32);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(48, ListContentComponent_div_48_Template, 4, 0, "div", 33)(49, ListContentComponent_div_49_Template, 2, 0, "div", 34);
            i0.ɵɵelementStart(50, "section", 35)(51, "div", 36);
            i0.ɵɵtemplate(52, ListContentComponent_div_52_Template, 3, 5, "div", 37);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(53, ListContentComponent_ng_template_53_Template, 13, 4, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(55, ListContentComponent_ng_template_55_Template, 14, 6, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(57, ListContentComponent_ng_template_57_Template, 6, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.teacherCorrectionStatus);
            i0.ɵɵadvance(12);
            i0.ɵɵtwoWayProperty("ngModel", ctx.contentType);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("items", ctx.classesDetails);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedClass);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("items", ctx.batchData);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectClassRoom);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchStudent);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.auth.getRoleId() != "4");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.teacherCorrectionStatus != "4" && ctx.teacherCorrectionStatus != "0");
            i0.ɵɵadvance(4);
            i0.ɵɵpropertyInterpolate1("placeholder", "", ctx.contentType == "2" ? "Assignment" : "Assessment", " name");
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchContent);
            i0.ɵɵadvance(4);
            i0.ɵɵclassMapInterpolate1("col-md-", ctx.teacherCorrectionStatus != "4" && ctx.teacherCorrectionStatus != "0" ? "6" : "8", "");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.teacherCorrectionStatus == "2");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.teacherCorrectionStatus == "4");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.choosedData == "" && ctx.functionCalled);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.functionCalled);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.choosedData != "");
        } }, dependencies: [i13.NgForOf, i13.NgIf, i14.NgSelectComponent, i14.NgOptionTemplateDirective, i15.NgSelectOption, i15.ɵNgSelectMultipleOption, i15.DefaultValueAccessor, i15.SelectControlValueAccessor, i15.NgControlStatus, i15.NgModel, i16.InfiniteScrollDirective, i17.AngularMyDatePickerDirective, i18.OveralldetailsComponent, i19.TinyMiceComponent, i20.CustomDateFormatPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListContentComponent, [{
        type: Component,
        args: [{ selector: 'app-list-content', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\">\n    <div class=\"row mb-0\">\n        <div class=\"col-12 col-sm-6 col-lg-2 form-group align-self-center\">\n            <select class=\"custom-select col-md-12\" (change)=\"selection();teacherStatus($event)\" [(ngModel)]=\"teacherCorrectionStatus\">\n                <option value=\"0\">All</option>\n                <option value=\"1\">Correction Pending</option>\n                <option value=\"2\">Correction Completed</option>\n                <option value=\"3\">Score Released</option>\n                <option value=\"4\">Overdue</option>\n            </select>\n        </div>\n        <div class=\"col-12 col-sm-6 col-lg-2 form-group align-self-center\">\n            <select class=\"custom-select col-md-12\" id=\"content\" (change)=\"selection();contentselect($event)\" [(ngModel)]=\"contentType\">\n                <option value=\"2\">Assignment</option>\n                <option value=\"3\">Assessment</option>\n            </select>\n        </div>\n        <div class=\"col-12 col-sm-6 col-lg-3 form-group align-self-center\">\n            <ng-select [items]=\"classesDetails\"\n                       bindLabel=\"class_name\"\n                       bindValue=\"class_id\"\n                       [(ngModel)]=\"selectedClass\"\n                       placeholder=\"Select Class\"\n                       typeToSearchText=\"\"\n                       (change)=\"selection();teacherList();batchDataList();studentContentDetails()\">\n                <ng-template ng-option-tmp let-item=\"item\">\n                    <div [title]=\"item.class_name\">{{item.class_name}}</div>\n                </ng-template>\n            </ng-select>\n        </div>\n\n        <div class=\"col-md-3\">\n            <ng-select [items]=\"batchData\"\n                       bindLabel=\"batch_name\"\n                       bindValue=\"batch_id\"\n                       [(ngModel)]=\"selectClassRoom\"\n                       placeholder=\"Select Content Folder\"\n                       typeToSearchText=\"\"\n                       (change)=\"selection();studentContentDetails()\">\n            </ng-select>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-lg-2\">\n            <div class=\"btn-popup pull-right mb-0\">\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" style=\"height:40px\" size=\"50\" placeholder=\"Student name\" [(ngModel)]=\"searchStudent\" (input)=\"updateFilter(searchStudent)\">\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-primary p-2\" type=\"submit\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-2\" *ngIf=\"auth.getRoleId() != '4'\">\n            <ng-select [items]=\"teacherListData\"\n                       bindLabel=\"teacher_name\"\n                       bindValue=\"teacher_id\"\n                       [(ngModel)]=\"selectTeacher\"\n                       placeholder=\"Select Teacher\"\n                       typeToSearchText=\"\"\n                       (change)=\"selection();studentContentDetails()\"\n            >\n            </ng-select>\n        </div>\n        <div class=\"col-md-2\" *ngIf=\"teacherCorrectionStatus != '4' && teacherCorrectionStatus != '0'\">\n            <div class=\"btn-popup pull-right mb-0\">\n                <div class=\"input-group\">\n                    <input #dp=\"angular-mydatepicker\" (click)=\"dp.toggleCalendar()\"\n                           (dateChanged)=\"onDateChanged($event);selection();studentContentDetails()\" [options]=\"myDpOptions\" [placeholder]=\"teacherCorrectionStatus == '3' ? 'Search Release Date' : 'Search Submitted Date'\" [value]=\"selectDate\" angular-mydatepicker\n                           autocomplete=\"off\" class=\"form-control\" name=\"dp\">\n                    <div class=\"input-group-append\">\n                        <button (click)=\"dp.toggleCalendar()\" class=\"btn btn-primary p-2\" type=\"button\">\n                            <i class=\"fa fa-calendar-o\"></i></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-2\">\n            <div class=\"btn-popup pull-right mb-0\">\n                <div class=\"input-group\">\n                    <input (input)=\"updateFilter(searchContent)\" [(ngModel)]=\"searchContent\" class=\"form-control\" placeholder=\"{{contentType == '2' ? 'Assignment' : 'Assessment'}} name\" size=\"50\" style=\"height:40px\" type=\"text\">\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-primary p-2\" type=\"submit\"><i aria-hidden=\"true\" class=\"fa fa-search\"></i></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-{{teacherCorrectionStatus != '4' && teacherCorrectionStatus != '0' ? '6' : '8'}}\">\n            <button (click)=\"resetSearch()\" class=\"btn cancel pull-right\"><i class=\"fa fa-close mr-1\"></i>Reset Filter</button>\n            <button (click)=\"releaseAll()\" *ngIf=\"teacherCorrectionStatus == '2'\" class=\"btn btn-sm btn-primary pull-right mr-2\">Release Score For All</button>\n            <button (click)=\"notifyParent(choosedData, 1)\" *ngIf=\"teacherCorrectionStatus == '4'\" class=\"btn btn-sm btn-primary pull-right mr-2\">Notify All</button>\n        </div>\n    </div>\n    <div *ngIf=\"choosedData == '' && functionCalled\" class=\"row d-flex justify-content-center mt-5\">\n        <div class=\"col-4\">\n            <button class=\"nodataList\">No Data Available!</button>\n        </div>\n    </div>\n    <div *ngIf=\"!functionCalled\" id=\"custom-pdf-loader\" style=\"height: 60vh;\">\n        <img alt=\"\" src=\"assets/images/pre-loader/loader-01.svg\">\n    </div>\n    <section class=\"row list-card mt-3\">\n        <div class=\"scrollPanel1\" style=\"height: 71vh !important;\">\n            <div *ngIf=\"choosedData != ''\"\n                 class=\"search-results col-md-12 px-0\"\n                 infiniteScroll\n                 [infiniteScrollDistance]=\"2\"\n                 [infiniteScrollThrottle]=\"50\"\n                 [infiniteScrollContainer]=\"selector\"\n                 [fromRoot]=\"true\"\n                 (scrolled)=\"onScrollDown($event)\">\n                <div class=\"col-md-12\">\n                    <div class=\"card class-hover class-card\" *ngFor=\"let list of choosedData; let i = index\">\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <div class=\"col-1 d-flex justify-content-center align-items-center\">\n                                    <figure *ngIf=\"this.list.student_profile == ''\">\n                                        <img alt=\"\" class=\"rounded-circle img-50 border\" src=\"assets/images/digital-product/student.png\">\n                                    </figure>\n                                    <figure *ngIf=\"this.list.student_profile != ''\">\n                                        <img class=\"rounded-circle img-50\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + list.student_profile)\" alt=\"\">\n                                    </figure>\n                                </div>\n                                <div class=\"col-7\">\n                                    <h4><small *ngIf=\"list.status == '3'\" class=\"badge badge-primary\">Score Released</small>\n                                        <small *ngIf=\"list.status == '4' || list.status == '6'\" class=\"badge badge-info\">Correction Pending</small>\n                                        <small *ngIf=\"list.status == '5'\" class=\"badge badge-success\">Correction Completed</small>\n                                        <small *ngIf=\"list.status == '1'\" class=\"badge badge-secondary\">Yet To Start</small>\n                                        <small *ngIf=\"list.status == '2'\" class=\"badge badge-warning\">In-Progress</small> &nbsp;\n                                        <span (click)=\"getStudentFullDetail(list)\" class=\"t-period font-weight-bold cursor name-hover\">{{list.student_name}}</span>\n                                    </h4>\n                                    <p><span class=\"font-weight-bold\">Class Name: </span> <span class=\"t-name capital font-weight-bold\">{{list.class_name}}</span>&nbsp;\n                                        &nbsp; <span class=\"font-weight-bold\">Content Name: </span> <span class=\"t-name font-weight-bold\">{{list.content_name}}</span>\n                                        <br/><span *ngIf=\"list.status > 2\"><span class=\"font-weight-bold\">Submitted Date: </span> <span *ngIf=\"list.answer_completed_date != '00-00-0000'\" class=\"t-name font-weight-bold\">{{list.answer_completed_date | customDateFormat}}</span></span>&nbsp;\n                                        <span *ngIf=\"list.status == '3'\"><span class=\"font-weight-bold\">Score Released Date: </span> <span *ngIf=\"list.score_release_date != '00-00-0000'\"  class=\"t-name font-weight-bold\">{{list.score_release_date | customDateFormat}}</span></span></p>\n                                </div>\n                                <div class=\"col-4\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <span class=\"pull-right total-score mr-2\" *ngIf=\"list.status == '3'\">Total Score: <span class=\"t-name\">{{list.total_score}}</span></span>\n<!--                                            <small class=\"pull-right total-score\" style=\"visibility: hidden\" *ngIf=\"list.status != '3' && list.status != '2' && list.status != '1'\">Total Score: <span class=\"t-name\">{{list.total_score}}</span></small>-->\n                                            <span class=\"pull-right total-score mr-2\"\n                                                   *ngIf=\"list.status == '1' || list.status == '2' && list.status != '3'\">Overdue For:\n                                                <span class=\"over-due1\" *ngIf=\"list.overDue != '1'\">{{list.overDue}} (days)</span>\n                                                <span class=\"over-due1\" *ngIf=\"list.overDue == '1'\">{{list.overDue}} (day)</span>\n                                            </span>\n                                            <span class=\"pull-right total-score mr-2\" *ngIf=\"list.status == '3'\">Obtained Score: <span class=\"t-name\">{{list.obtained_score}}</span></span>\n                                            <span class=\"pull-right total-score mr-2\"\n                                                   *ngIf=\"list.status != '3'\">End Date:\n                                                <span *ngIf=\"list.end_date != '0000-00-00'\" class=\"over-due1\">{{list.end_date | customDateFormat}}</span>\n<!--                                                <span class=\"over-due1\" *ngIf=\"list.end_date == '0000-00-00'\" style=\"visibility: hidden\">{{list.end_date |date:'mm/dd/yyyy'}}</span>-->\n                                            </span>\n                                        </div>\n                                    </div>\n                                    <div class=\"row d-flex align-self-end mt-2\">\n                                        <div class=\"col-md-12 d-flex justify-content-end\">\n                                            <i *ngIf=\"list.status == '3' && list.content_format == 3 && list.is_test == '1'\" title=\"View Analytics\"\n                                               style=\"font-size: 20px; margin-top: 12px\" class=\"fa fa-bar-chart color-primary cursor mr-2\"\n                                               (click)=\"navigateToSATReport(list, $event)\" aria-hidden=\"true\"></i>\n                                            <button (click)=\"openNotes(list)\" class=\"btn-outline-primary btn-sm-view mt-2 mr-2\" title=\"Add Notes\"><i aria-hidden=\"true\" class=\"fa fa-newspaper-o\"></i></button>\n                                            <button (click)=\"notifyParent(list, 2)\" *ngIf=\"list.status == '1' || list.status == '2'\" class=\"btn-sm-i btn-outline-primary pull-right mt-2\" type=\"button\">Notifiy Parent</button>\n                                            <button (click)=\"releaseScore(list)\" *ngIf=\"list.status == '5'\" class=\"btn-sm-i btn-outline-primary pull-right mt-2\" type=\"button\">Release Score</button>\n                                            <button *ngIf=\"list.status == '1'\" [disabled]=\"list.status == 1\" class=\"btn-sm-i btn-outline-primary pull-right ml-2 mt-2\" type=\"button\">Enter</button>\n                                            <button *ngIf=\"list.status != '1'\" class=\"btn-sm-i btn-primary pull-right ml-2 mt-2\" (click)=\"enterAction(list)\" type=\"button\">Enter</button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n\n<ng-template #contentnow let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title col-12 text-center\"><b>Notify Contact</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <h5 *ngIf=\"notifyType == 1\" class=\"text-center\">Are You Sure want to notify all contacts?</h5>\n            <h5 *ngIf=\"notifyType == 2\" class=\"text-center\">Are You Sure want to notify {{studentname[0].student_name}} contacts?</h5>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button *ngIf=\"this.notifyType == 1\" type=\"button\" class=\"btn btn-primary\" (click)=\"confirmStudentNotify(1)\">Confirm</button>\n        <button *ngIf=\"this.notifyType == 2\" type=\"button\" class=\"btn btn-primary\" (click)=\"confirmStudentNotify(2)\">Confirm</button>\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"close()\">Cancel</button>\n    </div>\n</ng-template>\n\n\n<ng-template #writeNoteOpen let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title text-center\">Add Notes</h4>\n        <i (click)=\"close()\" class=\"fa fa-close cursor\" ></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row d-flex justify-content-center\">\n            <div *ngFor=\"let list of showNotes; let i = index\" class=\"col-10 mt-2\">\n                <div class=\"row border border-secondary rounded\">\n                    <div class=\"col-8 d-flex\" style=\"word-wrap: break-word;\">\n                        <i *ngIf=\"list.notes_type == '2'\" class=\"fa fa-envelope-square align-self-center mr-2 color-primary\"></i>\n                        <i *ngIf=\"list.notes_type == '1'\" class=\"fa fa-bookmark align-self-center mr-2 color-secondary\"></i>\n                        <!-- <p [innerText]=\"list.notes\" class=\"mb-0\"></p> -->\n                        <span [innerHTML]=\"list.notes\" class=\"mb-0 mt-3\"></span>\n                    </div>\n                    <div class=\"col-3 px-0 d-flex justify-content-end align-self-center\">\n                        <small class=\"mb-0\">{{list.created_date | customDateFormat}}</small>\n                    </div>\n                    <div class=\"col-1 align-self-center\">\n                        <i (click)=\"deleteNotes(list)\" aria-hidden=\"true\" class=\"fa fa-close fa-1x text-danger\" style=\"cursor:pointer\"></i>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-11 mt-2\">\n                <!-- <textarea class=\"form-control\" id=\"addNotes\" placeholder=\"Enter Notes\" style=\"width: 100%; height: 100px; padding: 4px\"></textarea> -->\n            <app-tiny-mice  (emitEditorValue)=\"getEditorValue($event)\"\n                [editorPatchValue]=\"false\"\n                [height]=\"300\"\n                [id]=\"'addNotes'\"\n                [showDropBtn]=\"false\"\n                [showInputBtn]=\"false\">\n            </app-tiny-mice>\n            </div>\n            <div class=\"col-11 text-right mt-2\">\n                <button (click)=\"addNotes('2')\" class=\"btn btn-outline-primary mr-2\" type=\"button\">Send as Email</button>\n                <button (click)=\"addNotes('1')\" class=\"btn btn-primary\" type=\"button\">Add</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n<ng-template #viewoveralldetails let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title color-primary\" id=\"modal-basic-title\">{{studentName}} Overall details</h4>\n        <i (click)=\"closeOverAll()\" aria-hidden=\"true\"\n           class=\"fa fa-close fa-lg mt-1\" style=\"color:#7F3486; cursor: pointer; float: right;\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <app-overalldetails\n                [studentdata]=\"viewdetail\"\n        >\n        </app-overalldetails>\n    </div>\n<!--    <div class=\"modal-footer\">-->\n<!--        <button (click)=\"close()\" class=\"btn cancel\" type=\"button\">Cancel</button>-->\n<!--        <button class=\"btn btn-primary\" type=\"button\">Edit</button>-->\n<!--    </div>-->\n</ng-template>\n\n<!-- Container-fluid Ends-->\n\n" }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.AuthService }, { type: i3.CommonDataService }, { type: i4.ConfigurationService }, { type: i5.ContentdetailService }, { type: i6.NewsubjectService }, { type: i1.Router }, { type: i7.TeacherService }, { type: i8.DomSanitizer }, { type: i9.StudentService }, { type: i10.NgbModal }, { type: i11.ToastrService }, { type: i12.ClassService }, { type: i13.DatePipe }], { viewoveralldetails: [{
            type: ViewChild,
            args: ['viewoveralldetails']
        }], modalContentnow: [{
            type: ViewChild,
            args: ['contentnow']
        }], writeNoteOpen: [{
            type: ViewChild,
            args: ['writeNoteOpen']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListContentComponent, { className: "ListContentComponent" }); })();
//# sourceMappingURL=list-content.component.js.map