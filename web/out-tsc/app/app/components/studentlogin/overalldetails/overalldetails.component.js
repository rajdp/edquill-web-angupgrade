import { Component, Input, ViewChild } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/configuration.service";
import * as i3 from "@angular/platform-browser";
import * as i4 from "../../../shared/service/class.service";
import * as i5 from "../../../shared/service/report.service";
import * as i6 from "@ng-bootstrap/ng-bootstrap";
import * as i7 from "ngx-toastr";
import * as i8 from "../../../shared/service/contentdetail.service";
import * as i9 from "@angular/common";
import * as i10 from "@angular/forms";
import * as i11 from "@ng-select/ng-select";
import * as i12 from "../../../shared/components/feather-icons/feather-icons.component";
import * as i13 from "../../auth/tiny-mice/tiny-mice.component";
import * as i14 from "../answer-sheet/answer-sheet.component";
import * as i15 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["contentnow"];
const _c1 = ["viewStudentDetails"];
const _c2 = ["showInform"];
const _c3 = ["notStarted"];
const _c4 = ["writeNoteOpen"];
const _c5 = ["classNote"];
function OveralldetailsComponent_div_6_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 31);
} }
function OveralldetailsComponent_div_6_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 32);
} }
function OveralldetailsComponent_div_6_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 33);
} }
function OveralldetailsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵtemplate(1, OveralldetailsComponent_div_6_img_1_Template, 1, 0, "img", 28)(2, OveralldetailsComponent_div_6_img_2_Template, 1, 0, "img", 29)(3, OveralldetailsComponent_div_6_img_3_Template, 1, 0, "img", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r0.details == null ? null : ctx_r0.details.gender.toLowerCase()) == "male");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r0.details == null ? null : ctx_r0.details.gender.toLowerCase()) == "female");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r0.details == null ? null : ctx_r0.details.gender.toLowerCase()) == "n/a" || ctx_r0.details.gender == "");
} }
function OveralldetailsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34)(1, "img", 35);
    i0.ɵɵlistener("error", function OveralldetailsComponent_div_7_Template_img_error_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onImageError($event, ctx_r0.details)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r0.sanitizer.bypassSecurityTrustResourceUrl(ctx_r0.webhost + "/" + (ctx_r0.details == null ? null : ctx_r0.details.profile_url)), i0.ɵɵsanitizeUrl);
} }
function OveralldetailsComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2, "Contact 1 Email:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.details.parent1_email_ids.length != 0 ? ctx_r0.details.parent1_email_ids[0] : "-");
} }
function OveralldetailsComponent_div_37_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 51);
    i0.ɵɵelement(1, "i", 52);
    i0.ɵɵelementEnd();
} }
function OveralldetailsComponent_div_37_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 53);
    i0.ɵɵelement(1, "i", 54);
    i0.ɵɵelementEnd();
} }
function OveralldetailsComponent_div_37_p_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 55)(1, "small", 40);
    i0.ɵɵtext(2, "Transferred from: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 41);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(list_r4.transfer_class);
} }
function OveralldetailsComponent_div_37_p_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 55)(1, "small", 40);
    i0.ɵɵtext(2, "Transferred Date: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 41);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "customDateFormat");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 1, list_r4.transferred_date));
} }
function OveralldetailsComponent_div_37_p_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p")(1, "small", 40);
    i0.ɵɵtext(2, "Start: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " \u00A0 \u00A0 ");
    i0.ɵɵelementStart(4, "small", 40);
    i0.ɵɵtext(5, "End: ");
    i0.ɵɵelementEnd()();
} }
function OveralldetailsComponent_div_37_p_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p")(1, "small", 40);
    i0.ɵɵtext(2, "Start: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 41);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "customDateFormat");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, " \u00A0 \u00A0 ");
    i0.ɵɵelementStart(7, "small", 40);
    i0.ɵɵtext(8, "End: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 41);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "customDateFormat");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 2, list_r4.start_date));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(11, 4, list_r4.end_date));
} }
function OveralldetailsComponent_div_37_div_37_div_34_tr_8_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const table_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" (", i0.ɵɵpipeBind1(2, 1, table_r8.end_date), ")");
} }
function OveralldetailsComponent_div_37_div_37_div_34_tr_8_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 95)(1, "span", 96);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, "/");
    i0.ɵɵelementStart(4, "span", 96);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const table_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(table_r8.attend_questions);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(table_r8.total_questions);
} }
function OveralldetailsComponent_div_37_div_37_div_34_tr_8_a_10_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const table_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("(", table_r8.parents_notify_count, ")");
} }
function OveralldetailsComponent_div_37_div_37_div_34_tr_8_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 97);
    i0.ɵɵlistener("click", function OveralldetailsComponent_div_37_div_37_div_34_tr_8_a_10_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r9); const table_r8 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.notifyParent(table_r8)); });
    i0.ɵɵtext(1, " Notify Contact ");
    i0.ɵɵtemplate(2, OveralldetailsComponent_div_37_div_37_div_34_tr_8_a_10_span_2_Template, 2, 1, "span", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const table_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", table_r8.status == "6");
} }
function OveralldetailsComponent_div_37_div_37_div_34_tr_8_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 98);
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function OveralldetailsComponent_div_37_div_37_div_34_tr_8_span_12_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 99);
    i0.ɵɵlistener("click", function OveralldetailsComponent_div_37_div_37_div_34_tr_8_span_12_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r10); const table_r8 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.studentCorrectionDetail(table_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const table_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(table_r8.student_average_score);
} }
function OveralldetailsComponent_div_37_div_37_div_34_tr_8_span_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 100);
    i0.ɵɵlistener("click", function OveralldetailsComponent_div_37_div_37_div_34_tr_8_span_13_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r11); const table_r8 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.studentCorrectionDetail(table_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const table_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(table_r8.student_average_score);
} }
function OveralldetailsComponent_div_37_div_37_div_34_tr_8_span_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 101);
    i0.ɵɵlistener("click", function OveralldetailsComponent_div_37_div_37_div_34_tr_8_span_14_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r12); const table_r8 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.studentCorrectionDetail(table_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const table_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(table_r8.student_average_score);
} }
function OveralldetailsComponent_div_37_div_37_div_34_tr_8_span_15_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 102);
    i0.ɵɵlistener("click", function OveralldetailsComponent_div_37_div_37_div_34_tr_8_span_15_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r13); const table_r8 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.notifyParent(table_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const table_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(table_r8.parents_notify_count);
} }
function OveralldetailsComponent_div_37_div_37_div_34_tr_8_span_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 103);
    i0.ɵɵlistener("click", function OveralldetailsComponent_div_37_div_37_div_34_tr_8_span_16_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r14); const table_r8 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.studentNotAnswer(table_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const table_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(table_r8.student_average_score);
} }
function OveralldetailsComponent_div_37_div_37_div_34_tr_8_span_17_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 104);
    i0.ɵɵlistener("click", function OveralldetailsComponent_div_37_div_37_div_34_tr_8_span_17_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r15); const table_r8 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.studentCorrectionDetail(table_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const table_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(table_r8.student_average_score);
} }
function OveralldetailsComponent_div_37_div_37_div_34_tr_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 80)(1, "th");
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, OveralldetailsComponent_div_37_div_37_div_34_tr_8_span_3_Template, 3, 3, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "td", 81)(5, "div", 82)(6, "button", 83);
    i0.ɵɵlistener("click", function OveralldetailsComponent_div_37_div_37_div_34_tr_8_Template_button_click_6_listener() { const table_r8 = i0.ɵɵrestoreView(_r7).$implicit; const list_r4 = i0.ɵɵnextContext(3).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.openNotes(list_r4, table_r8)); });
    i0.ɵɵelement(7, "i", 84);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 85);
    i0.ɵɵtemplate(9, OveralldetailsComponent_div_37_div_37_div_34_tr_8_div_9_Template, 6, 2, "div", 86)(10, OveralldetailsComponent_div_37_div_37_div_34_tr_8_a_10_Template, 3, 1, "a", 87)(11, OveralldetailsComponent_div_37_div_37_div_34_tr_8_span_11_Template, 2, 0, "span", 88)(12, OveralldetailsComponent_div_37_div_37_div_34_tr_8_span_12_Template, 2, 1, "span", 89)(13, OveralldetailsComponent_div_37_div_37_div_34_tr_8_span_13_Template, 2, 1, "span", 90)(14, OveralldetailsComponent_div_37_div_37_div_34_tr_8_span_14_Template, 2, 1, "span", 91)(15, OveralldetailsComponent_div_37_div_37_div_34_tr_8_span_15_Template, 2, 1, "span", 92)(16, OveralldetailsComponent_div_37_div_37_div_34_tr_8_span_16_Template, 2, 1, "span", 93)(17, OveralldetailsComponent_div_37_div_37_div_34_tr_8_span_17_Template, 2, 1, "span", 94);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const table_r8 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", table_r8.content_name, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", table_r8.end_date != "0000-00-00");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", table_r8.status == "2" || table_r8.status == "3" || table_r8.status == "6" || table_r8.status == "7");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", table_r8.status == "4" || table_r8.status == "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", table_r8.status == "0" || table_r8.status == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", table_r8.status == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", table_r8.status == "2" || table_r8.status == "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", table_r8.status == "3");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", table_r8.status == "4");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", table_r8.status == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", table_r8.status == "7");
} }
function OveralldetailsComponent_div_37_div_37_div_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 76)(2, "table", 77)(3, "thead")(4, "th", 78);
    i0.ɵɵtext(5, "Content Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th", 78);
    i0.ɵɵtext(7, "Content Status");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(8, OveralldetailsComponent_div_37_div_37_div_34_tr_8_Template, 18, 11, "tr", 79);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r0.contentDetailsData);
} }
function OveralldetailsComponent_div_37_div_37_div_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 105)(1, "div", 63)(2, "button", 106);
    i0.ɵɵtext(3, "No Records found");
    i0.ɵɵelementEnd()()();
} }
function OveralldetailsComponent_div_37_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 56)(1, "div", 57)(2, "label", 58);
    i0.ɵɵtext(3, "Content Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 59);
    i0.ɵɵlistener("change", function OveralldetailsComponent_div_37_div_37_Template_select_change_4_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.studentContentDetails($event)); });
    i0.ɵɵelementStart(5, "option", 60);
    i0.ɵɵtext(6, "Assignment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "option", 61);
    i0.ɵɵtext(8, "Assessment");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 62)(10, "div", 7)(11, "div", 63)(12, "h3", 64);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 65)(15, "p", 66)(16, "small", 67);
    i0.ɵɵelement(17, "i", 68);
    i0.ɵɵtext(18, " - UpComing");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "small", 67);
    i0.ɵɵelement(20, "i", 69);
    i0.ɵɵtext(21, " - In Progress");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "small", 67);
    i0.ɵɵelement(23, "i", 70);
    i0.ɵɵtext(24, " - Completed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "small", 67);
    i0.ɵɵelement(26, "i", 71);
    i0.ɵɵtext(27, " - Pending");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "small", 67);
    i0.ɵɵelement(29, "i", 72);
    i0.ɵɵtext(30, " - Overdue");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "small", 67);
    i0.ɵɵelement(32, "i", 73);
    i0.ɵɵtext(33, " - Not Started");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(34, OveralldetailsComponent_div_37_div_37_div_34_Template, 9, 1, "div", 74)(35, OveralldetailsComponent_div_37_div_37_div_35_Template, 4, 0, "div", 75);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext();
    const list_r4 = ctx_r15.$implicit;
    const i_r5 = ctx_r15.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate2("id", "studentreport", i_r5, "", list_r4 == null ? null : list_r4.selectedstatus, "");
    i0.ɵɵadvance(13);
    i0.ɵɵtextInterpolate1("", ctx_r0.contentType == "2" ? "Assignment" : "Assessment", " Details");
    i0.ɵɵadvance(21);
    i0.ɵɵproperty("ngIf", ctx_r0.newrows != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.newrows == "");
} }
function OveralldetailsComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 10)(2, "div", 7)(3, "div", 36)(4, "h4", 37);
    i0.ɵɵtemplate(5, OveralldetailsComponent_div_37_span_5_Template, 2, 0, "span", 38)(6, OveralldetailsComponent_div_37_span_6_Template, 2, 0, "span", 39);
    i0.ɵɵelementStart(7, "span", 40);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "p")(10, "small", 40);
    i0.ɵɵtext(11, "Subject: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span", 41);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(14, " \u00A0 \u00A0 ");
    i0.ɵɵelementStart(15, "small", 40);
    i0.ɵɵtext(16, "Grade: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span", 42);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(19, "br");
    i0.ɵɵelementStart(20, "small", 40);
    i0.ɵɵtext(21, "Teacher Assigned: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span", 41);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "div", 43);
    i0.ɵɵtemplate(25, OveralldetailsComponent_div_37_p_25_Template, 5, 1, "p", 44)(26, OveralldetailsComponent_div_37_p_26_Template, 6, 3, "p", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 43)(28, "div", 7)(29, "div", 45);
    i0.ɵɵtemplate(30, OveralldetailsComponent_div_37_p_30_Template, 6, 0, "p", 23)(31, OveralldetailsComponent_div_37_p_31_Template, 12, 6, "p", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "div", 46)(33, "i", 47);
    i0.ɵɵlistener("click", function OveralldetailsComponent_div_37_Template_i_click_33_listener() { const list_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.openClassNotes(list_r4)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "i", 48);
    i0.ɵɵlistener("click", function OveralldetailsComponent_div_37_Template_i_click_34_listener() { const list_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showInformation(list_r4)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "button", 49);
    i0.ɵɵlistener("click", function OveralldetailsComponent_div_37_Template_button_click_35_listener() { const i_r5 = i0.ɵɵrestoreView(_r3).index; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.selectStudentDetails(i_r5, "2")); });
    i0.ɵɵtext(36, "Reports");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(37, OveralldetailsComponent_div_37_div_37_Template, 36, 6, "div", 50);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", list_r4.status == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r4.status == "2");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(list_r4.class_name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(list_r4.subject);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(list_r4.grade != "" ? list_r4.grade : "-");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(list_r4.teacher_name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r4.transfer_class);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r4.transferred_date);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", list_r4.start_date == "0000-00-00" && list_r4.end_date == "0000-00-00");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r4.start_date != "0000-00-00" && list_r4.end_date != "0000-00-00");
    i0.ɵɵadvance(4);
    i0.ɵɵattribute("aria-controls", "#studentreport" + i_r5 + "true")("data-target", "#studentreport" + i_r5 + true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r4.selectedstatus == "true");
} }
function OveralldetailsComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 107)(1, "h4", 108)(2, "b");
    i0.ɵɵtext(3, "Notify Contact");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 109)(5, "div", 6)(6, "h5", 110);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 111)(9, "button", 112);
    i0.ɵɵlistener("click", function OveralldetailsComponent_ng_template_38_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.close()); });
    i0.ɵɵtext(10, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 113);
    i0.ɵɵlistener("click", function OveralldetailsComponent_ng_template_38_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.confirmNotifiy()); });
    i0.ɵɵtext(12, "Confirm");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("Are You Sure want to notify ", ctx_r0.studentname[0].student_name, " contacts?");
} }
function OveralldetailsComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 107)(1, "h4", 114);
    i0.ɵɵtext(2, "Student Answer Report");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 115);
    i0.ɵɵlistener("click", function OveralldetailsComponent_ng_template_40_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r18); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 109);
    i0.ɵɵelement(5, "app-answer-sheet", 116);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("answerShow", true)("contentId", ctx_r0.contentId)("contentFormat", ctx_r0.contentFormat)("studentContentId", ctx_r0.studentContentId)("is_test", ctx_r0.is_test)("classId", ctx_r0.classId)("studentReportId", ctx_r0.studentId)("backStatus", false);
} }
function OveralldetailsComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 107)(1, "h4", 114);
    i0.ɵɵtext(2, "Info");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 115);
    i0.ɵɵlistener("click", function OveralldetailsComponent_ng_template_42_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onSave1()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 109)(5, "p", 117)(6, "span", 118);
    i0.ɵɵtext(7, "class code: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 41);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "p", 117)(11, "span", 118);
    i0.ɵɵtext(12, "Resources: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span", 119);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "p", 117)(16, "span", 118);
    i0.ɵɵtext(17, "Assignment: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "span", 119);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "p", 117)(21, "span", 118);
    i0.ɵɵtext(22, "Assessment: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "span", 119);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r0.classInfo.class_code);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", ctx_r0.classInfo.resources, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", ctx_r0.classInfo.assignment, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.classInfo.assessment);
} }
function OveralldetailsComponent_ng_template_44_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Assignment");
    i0.ɵɵelementEnd();
} }
function OveralldetailsComponent_ng_template_44_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Assessment");
    i0.ɵɵelementEnd();
} }
function OveralldetailsComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 107)(1, "h4", 108)(2, "b");
    i0.ɵɵtext(3, "Not Started");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 109)(5, "div", 6)(6, "h5", 110);
    i0.ɵɵtext(7, " Not submitted the ");
    i0.ɵɵtemplate(8, OveralldetailsComponent_ng_template_44_span_8_Template, 2, 0, "span", 23)(9, OveralldetailsComponent_ng_template_44_span_9_Template, 2, 0, "span", 23);
    i0.ɵɵtext(10, " yet.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 111)(12, "button", 120);
    i0.ɵɵlistener("click", function OveralldetailsComponent_ng_template_44_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeNotstarted()); });
    i0.ɵɵtext(13, "Ok");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r0.contentType == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.contentType == "3");
} }
function OveralldetailsComponent_ng_template_46_div_6_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 137);
} }
function OveralldetailsComponent_ng_template_46_div_6_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 138);
} }
function OveralldetailsComponent_ng_template_46_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 128)(1, "div", 129)(2, "div", 130);
    i0.ɵɵtemplate(3, OveralldetailsComponent_ng_template_46_div_6_i_3_Template, 1, 0, "i", 131)(4, OveralldetailsComponent_ng_template_46_div_6_i_4_Template, 1, 0, "i", 132);
    i0.ɵɵelement(5, "span", 133);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 134)(7, "small", 55);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "customDateFormat");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 135)(11, "i", 136);
    i0.ɵɵlistener("click", function OveralldetailsComponent_ng_template_46_div_6_Template_i_click_11_listener() { const list_r23 = i0.ɵɵrestoreView(_r22).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.deleteNotes(list_r23)); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const list_r23 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r23.notes_type == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r23.notes_type == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", list_r23.notes, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 4, list_r23.created_date));
} }
function OveralldetailsComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 107)(1, "h4", 121);
    i0.ɵɵtext(2, "Add Notes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 115);
    i0.ɵɵlistener("click", function OveralldetailsComponent_ng_template_46_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 109)(5, "div", 122);
    i0.ɵɵtemplate(6, OveralldetailsComponent_ng_template_46_div_6_Template, 12, 6, "div", 123);
    i0.ɵɵelementStart(7, "div", 124)(8, "app-tiny-mice", 125);
    i0.ɵɵlistener("emitEditorValue", function OveralldetailsComponent_ng_template_46_Template_app_tiny_mice_emitEditorValue_8_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.getEditorValue($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 126)(10, "button", 127);
    i0.ɵɵlistener("click", function OveralldetailsComponent_ng_template_46_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.addNotes("2")); });
    i0.ɵɵtext(11, "Send as Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 113);
    i0.ɵɵlistener("click", function OveralldetailsComponent_ng_template_46_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.addNotes("1")); });
    i0.ɵɵtext(13, "Add");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r0.showNotes);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("editorPatchValue", false)("height", 300)("id", "addNotes")("showDropBtn", false)("showInputBtn", false);
} }
function OveralldetailsComponent_ng_template_48_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 144)(1, "ng-select", 145);
    i0.ɵɵlistener("change", function OveralldetailsComponent_ng_template_48_div_6_Template_ng_select_change_1_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.changeNotes($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r0.listContent);
} }
function OveralldetailsComponent_ng_template_48_div_8_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 137);
} }
function OveralldetailsComponent_ng_template_48_div_8_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 138);
} }
function OveralldetailsComponent_ng_template_48_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 146)(1, "div", 147)(2, "div", 130);
    i0.ɵɵtemplate(3, OveralldetailsComponent_ng_template_48_div_8_i_3_Template, 1, 0, "i", 131)(4, OveralldetailsComponent_ng_template_48_div_8_i_4_Template, 1, 0, "i", 132);
    i0.ɵɵelement(5, "span", 133);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 148)(7, "small", 55);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "customDateFormat");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const list_r26 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r26.notes_type == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r26.notes_type == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", list_r26.notes, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 4, list_r26.created_date));
} }
function OveralldetailsComponent_ng_template_48_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 149)(1, "p", 55);
    i0.ɵɵtext(2, "No Records Found");
    i0.ɵɵelementEnd()();
} }
function OveralldetailsComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 107)(1, "h4", 121);
    i0.ɵɵtext(2, "All Notes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 115);
    i0.ɵɵlistener("click", function OveralldetailsComponent_ng_template_48_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r24); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 109)(5, "div", 139);
    i0.ɵɵtemplate(6, OveralldetailsComponent_ng_template_48_div_6_Template, 2, 1, "div", 140);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 141);
    i0.ɵɵtemplate(8, OveralldetailsComponent_ng_template_48_div_8_Template, 10, 6, "div", 142)(9, OveralldetailsComponent_ng_template_48_div_9_Template, 3, 0, "div", 143);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r0.classId != 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.classNotes);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.classNotes.length == 0);
} }
export class OveralldetailsComponent {
    constructor(auth, confi, sanitizer, classlist, report, modalService, toastr, contentDetail) {
        this.auth = auth;
        this.confi = confi;
        this.sanitizer = sanitizer;
        this.classlist = classlist;
        this.report = report;
        this.modalService = modalService;
        this.toastr = toastr;
        this.contentDetail = contentDetail;
        this.contentData = [];
        this.contentFormatted = [];
        this.showNotes = [];
        this.classNotes = [];
        this.listContent = [];
        this.notes = '';
        this.is_test = '0';
        this.showParentEmailId = true;
        this.webhost = this.confi.getimgUrl();
        this.recordsperpage = 10;
        this.harizontalScroll = true;
        this.pageOffSet = 0;
        this.pageno = 1;
        this.imageObject = [{ thumbImage: 'assets/images/ristaschool/male.png', id: '0' },
            { thumbImage: 'assets/images/ristaschool/female1.png', id: '1' },
            { thumbImage: 'assets/images/ristaschool/Do not want to disclose.png', id: '2' },
        ];
    }
    ngOnInit() {
        this.details = this.studentdata;
        console.log(this.details, 'getAnswerNeeded');
        this.selectClass();
        this.showParentEmailId = this.auth.showStudentEmailId;
    }
    setPage(pageInfo) {
        console.log(pageInfo, 'inside');
        this.pageno = pageInfo.offset + 1;
        this.pageOffSet = pageInfo.offset;
    }
    onImageError(event, details) {
        event.target.src = 'assets/images/ristaschool/Do not want to disclose.png';
        // if (details?.gender.toLowerCase() == 'male') {
        //     event.target.src = 'assets/images/ristaschool/male.png';
        // } else if (details?.gender.toLowerCase() == 'female') {
        //     event.target.src = 'assets/images/ristaschool/female1.png';
        // } else if (details?.gender.toLowerCase() == 'n/a' || details.gender == '') {
        //     event.target.src = 'assets/images/ristaschool/Do not want to disclose.png';
        // }
    }
    selectClass() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.details.school_id,
            student_id: this.details.user_id,
        };
        this.classlist.studentClass(data).subscribe((successData) => {
            this.studentClasslistSuccess(successData);
        }, (error) => {
            this.studentClasslistError(error);
        });
    }
    studentClasslistSuccess(successData) {
        console.log(successData, 'successData');
        this.classData = successData.ResponseObject;
        this.classData.forEach((items) => {
            items.selectedstatus = 'false';
        });
    }
    studentClasslistError(error) {
        console.log(error, 'error');
    }
    getEditorValue(event) {
        this.editorValue = event.editor;
        this.notes = event.content;
    }
    studentContentDetails(event) {
        this.contentType = event.target.value;
        this.contentData = [];
        this.contentFormatted = [];
        this.newrows = [];
        this.studentDetails(this.classIndex);
    }
    notifyParent(data) {
        this.studentname = [data];
        this.modalRef = this.modalService.open(this.modalContentnow);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
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
        console.log(data, 'dadass');
        this.contentDetail.notifiyParent(data).subscribe((successData) => {
            this.teacherNotifyParentSuccess(successData);
        }, (error) => {
            this.teacherNotifiyParentError(error);
        });
    }
    studentNotAnswer(data) {
        this.modalRef = this.modalService.open(this.notStarted);
        this.studentname = [data];
    }
    teacherNotifyParentSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(successData, 'response');
            this.toastr.success(successData.ResponseObject);
            this.close();
            this.studentReportDetails();
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    teacherNotifiyParentError(error) {
        console.log(error);
    }
    close() {
        this.modalRef.close(this.modalContentnow);
        this.editorValue != '' ? this.editorValue.setContent('') : '';
        this.notes = '';
        // this.notes = $('#addNotes').val('');
    }
    closeNotstarted() {
        this.modalRef.close('notStarted');
    }
    selectStudentDetails(index, contentType) {
        this.contentType = contentType;
        this.contentData = [];
        this.contentFormatted = [];
        this.classIndex = index;
        this.studentDetails(index);
    }
    studentDetails(indexValue) {
        this.classData.forEach((items, index) => {
            items.selectedstatus = 'false';
            if (index == indexValue) {
                items.selectedstatus = 'true';
            }
        });
        console.log('in');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            teacher_id: '0',
            class_id: this.classData[indexValue].class_id,
            content_type: this.contentType,
            content_id: this.contentData,
            date_filter: '2',
            from_date: null,
            to_date: null
        };
        this.report.getPerformanceContent(data).subscribe((successData) => {
            this.studentContentDetailsSuccess(successData, indexValue);
        }, (error) => {
            this.studentContentDetailsFailure(error);
        });
    }
    studentContentDetailsSuccess(successData, indexValue) {
        console.log(successData, 'successData');
        const selected = successData.ResponseObject;
        if (successData.IsSuccess) {
            this.newrows = successData.ResponseObject;
            this.contentData = selected.map(item => item.content_id);
            this.contentFormatted = selected.map(item => item.content_format);
            this.studentReportDetails();
        }
        else {
            this.contentDetailsData = [];
            this.newrows = [];
        }
    }
    studentContentDetailsFailure(error) {
        console.log(error, 'error');
    }
    studentReportDetails() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            teacher_id: '0',
            content_type: this.contentType,
            class_id: this.classData[this.classIndex].class_id,
            student_id: this.details.user_id,
            type: '',
            performance: '',
            content_id: this.contentData,
            content_format: this.contentFormatted
        };
        this.report.getMissedWorkReport(data).subscribe((successData) => {
            this.studentReportDetailsSuccess(successData);
        }, (error) => {
            this.studentReportDetailsFailure(error);
        });
    }
    studentReportDetailsSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.rows = successData.ResponseObject?.data;
            for (let i = 0; i < this.rows.length; i++) {
                if (this.rows[i].content == '') {
                }
                else {
                    this.contentDetailsData = this.rows[i].content;
                }
            }
            this.totalrecords = successData.ResponseObject?.data[0].count;
        }
        else {
            this.contentDetailsData = [];
            this.newrows = [];
            // console.log(this.contentDetailsData, 'this.message');
        }
    }
    studentReportDetailsFailure(error) {
        console.log(error, 'error');
    }
    openNotes(item, list) {
        item['content_id'] = list.content_id;
        item['student_id'] = list.student_id;
        item['content_type'] = list.content_type;
        console.log(item, 'item');
        console.log(list, 'list');
        this.getNotes(item);
        this.modalRef = this.modalService.open(this.writeNoteOpen, { size: 'md' });
    }
    openClassNotes(list) {
        console.log(list, this.details, 'classNotes');
        this.getClassNotes(list, 0);
        this.modalRef = this.modalService.open(this.classNote, { size: 'lg' });
    }
    getNotes(item) {
        this.notesData = item;
        console.log(this.details, 'this.details');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: item.content_id,
            student_id: item.student_id,
            class_id: item.class_id,
            school_id: this.auth.getSessionData('school_id'),
        };
        this.contentDetail.notesList(data).subscribe((successData) => {
            this.notesListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_classList');
        });
    }
    notesListSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(successData.ResponseObject, 'get notes');
            this.showNotes = successData.ResponseObject;
        }
    }
    getClassNotes(item, contentId) {
        this.notesData = item;
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_id: this.details.user_id,
            class_id: item.class_id,
            school_id: this.details.school_id,
            content_id: contentId == 0 ? 0 : item.content_id
        };
        this.contentDetail.notesList(data).subscribe((successData) => {
            this.ClassNotesListSuccess(successData, data);
        }, (error) => {
            console.error(error, 'error_classList');
        });
    }
    ClassNotesListSuccess(successData, key) {
        if (successData.IsSuccess) {
            this.classNotes = successData.ResponseObject;
            if (key.content_id == 0) {
                this.listContent = [];
                this.classNotes.forEach((val) => {
                    if (this.listContent.length > 0) {
                        let occured = false;
                        this.listContent.forEach((item) => {
                            if (item.content_id == val.content_id) {
                                occured = true;
                            }
                        });
                        if (!occured) {
                            this.listContent.push({
                                content_name: val.content_name,
                                content_id: val.content_id,
                                class_id: val.class_id
                            });
                        }
                    }
                    else {
                        this.listContent.push({
                            content_name: val.content_name,
                            content_id: val.content_id,
                            class_id: val.class_id
                        });
                    }
                });
            }
        }
    }
    changeNotes(event) {
        console.log(event);
        if (event == undefined) {
            this.getClassNotes(this.notesData, 0);
        }
        else {
            this.getClassNotes(event, 1);
        }
    }
    addNotes(type) {
        console.log(this.notesData, 'notesData');
        // this.notes = $('#addNotes').val();
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.notesData.content_id,
            content_type: this.notesData.content_type,
            student_id: this.notesData.student_id,
            class_id: this.notesData.class_id,
            notes: this.notes,
            type,
            school_id: this.auth.getSessionData('school_id'),
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
            this.notes = '';
            // this.showNotes = successData.ResponseObject;
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    deleteNotes(item) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.notesData.content_id,
            student_id: this.notesData.student_id,
            class_id: this.notesData.class_id,
            school_id: this.auth.getSessionData('school_id'),
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
    studentCorrectionDetail(data) {
        console.log(data, 'data');
        this.contentId = data.content_id;
        this.contentFormat = data.content_format;
        this.classId = data.class_id;
        this.studentId = data.student_id;
        this.studentContentId = data.student_content_id;
        this.is_test = data?.is_test ?? '0';
        this.modalRef = this.modalService.open(this.viewStudentDetails, { size: 'xl', windowClass: 'answer-sheet' });
    }
    onSave() {
        this.modalRef.close('viewStudentDetails');
    }
    onSave1() {
        this.modalRef.close('showInform');
    }
    showInformation(value) {
        this.modalRef = this.modalService.open(this.showInform, { size: 'sm' });
        this.classInfo = value;
        console.log(this.classInfo, 'val');
    }
    static { this.ɵfac = function OveralldetailsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || OveralldetailsComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.ConfigurationService), i0.ɵɵdirectiveInject(i3.DomSanitizer), i0.ɵɵdirectiveInject(i4.ClassService), i0.ɵɵdirectiveInject(i5.ReportService), i0.ɵɵdirectiveInject(i6.NgbModal), i0.ɵɵdirectiveInject(i7.ToastrService), i0.ɵɵdirectiveInject(i8.ContentdetailService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OveralldetailsComponent, selectors: [["app-overalldetails"]], viewQuery: function OveralldetailsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
            i0.ɵɵviewQuery(_c4, 5);
            i0.ɵɵviewQuery(_c5, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContentnow = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewStudentDetails = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.showInform = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.notStarted = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.writeNoteOpen = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.classNote = _t.first);
        } }, inputs: { studentdata: "studentdata" }, decls: 50, vars: 12, consts: [["contentnow", ""], ["viewStudentDetails", ""], ["showInform", ""], ["notStarted", ""], ["writeNoteOpen", ""], ["classNote", ""], [1, "container-fluid"], [1, "row"], [1, "col-xl-4"], [1, "card"], [1, "card-body"], [1, "profile-details", "text-center"], ["style", "margin: 10px auto; !important;", "class", "avatar-upload", 4, "ngIf"], ["class", "files-list fit-image", 4, "ngIf"], [1, "f-w-600", "mb-0"], [1, "color-primary"], [1, "col-xl-8"], [1, "card", "tab2-card"], [1, "position-relative", "border-bottom", "pb-2", "letter"], [3, "icon"], ["id", "top-profile", "role", "tabpanel", "aria-labelledby", "top-profile-tab", 1, "tab-pane", "fade", "show", "active"], [1, "table-responsive", "profile-table"], [1, "table", "table-responsive"], [4, "ngIf"], [1, "row", "list-card"], [1, "col-md-12"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "avatar-upload", 2, "margin", "10px auto"], ["class", "mb-0", "alt", "", "id", "imagePreview", "src", "assets/images/ristaschool/male.png", "width", "100%", 4, "ngIf"], ["class", "mb-0", "alt", "", "id", "imagePreview1", "src", "assets/images/ristaschool/female1.png", "width", "100%", 4, "ngIf"], ["class", "mb-0", "alt", "", "id", "imagePreview2", "src", "assets/images/ristaschool/Do not want to disclose.png", "width", "100%", 4, "ngIf"], ["alt", "", "id", "imagePreview", "src", "assets/images/ristaschool/male.png", "width", "100%", 1, "mb-0"], ["alt", "", "id", "imagePreview1", "src", "assets/images/ristaschool/female1.png", "width", "100%", 1, "mb-0"], ["alt", "", "id", "imagePreview2", "src", "assets/images/ristaschool/Do not want to disclose.png", "width", "100%", 1, "mb-0"], [1, "files-list", "fit-image"], ["width", "100%", "id", "imagePreview11", "alt", "", 1, "blur-up", "lazyloaded", 3, "error", "src"], [1, "col-md-4"], [1, "t-period"], ["class", "badge badge-success mr-2", 4, "ngIf"], ["class", "badge  badge-danger mr-2", 4, "ngIf"], [1, "font-weight-bold"], [1, "t-name", "font-weight-bold"], [1, "t-name", "capital", "font-weight-bold"], [1, "col-md-4", "m-auto"], ["class", "mb-0", 4, "ngIf"], [1, "col-md-12", "text-right"], [1, "col-md-12", "d-flex", "align-items-center", "justify-content-end"], ["aria-hidden", "true", "title", "Class Notes", 1, "fa", "fa-newspaper-o", "float-right", "letter", "cursor", "mt-2", "mr-2", 2, "font-size", "21px", 3, "click"], ["aria-hidden", "true", "title", "Information", 1, "fa", "fa-info-circle", "float-right", "letter", "cursor", "mt-2", "mr-2", 2, "font-size", "21px", 3, "click"], ["aria-expanded", "false", "data-toggle", "collapse", 1, "btn-sm-i", "btn-outline-primary", "pull-right", "mt-1", 3, "click"], ["class", "row collapse mt-3", 3, "id", 4, "ngIf"], [1, "badge", "badge-success", "mr-2"], ["aria-hidden", "true", 1, "fa", "fa-check"], [1, "badge", "badge-danger", "mr-2"], ["aria-hidden", "true", 1, "fa", "fa-times"], [1, "mb-0"], [1, "row", "collapse", "mt-3", 3, "id"], [1, "form-group", "col-3", "col-md-3"], [1, "col-xl-12", "col-md-12"], [1, "custom-select", "col-md-12", 3, "change"], ["value", "2"], ["value", "3"], [1, "col-md-12", "p-3"], [1, "col-4"], [1, "letter", "mt-3", "mb-3"], [1, "col-8", "d-flex", "justify-content-end"], [1, "p-3"], [1, "ml-3"], [1, "fa", "fa-square", "yet-to-start-color-bg", "p-1"], [1, "fa", "fa-square", "in-progress-color-bg", "p-1"], [1, "fa", "fa-square", "completed-color-bg", "p-1"], [1, "fa", "fa-square", "pending-color-bg", "p-1"], [1, "fa", "fa-square", "over-due-bg", "p-1"], [1, "fa", "fa-square", "never-bg", "p-1"], ["class", "row", 4, "ngIf"], ["class", "row mt-4 d-flex justify-content-center", 4, "ngIf"], [1, "col-12", "table-responsive"], [1, "table", "table-striped", "table-bordered"], [1, "text-center", "align-middle"], ["class", "text-center align-bottom", 4, "ngFor", "ngForOf"], [1, "text-center", "align-bottom"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "align-items-end"], ["title", "Add Notes", 1, "btn-outline-primary", "btn-sm-view", "mr-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-newspaper-o"], [1, "align-self-center"], ["class", "col-12 mb-1 px-0", 4, "ngIf"], ["class", "d-block cursor notify-parent mb-1", 3, "click", 4, "ngIf"], ["class", "cursor", 4, "ngIf"], ["class", "yet-to-start-color cursor", 3, "click", 4, "ngIf"], ["class", "in-progress-color cursor", 3, "click", 4, "ngIf"], ["class", "completed-color cursor", 3, "click", 4, "ngIf"], ["class", "over-due cursor", 3, "click", 4, "ngIf"], ["class", "never cursor", 3, "click", 4, "ngIf"], ["class", "pending-color cursor", 3, "click", 4, "ngIf"], [1, "col-12", "mb-1", "px-0"], [2, "border", "none", "padding", "2px 8px"], [1, "d-block", "cursor", "notify-parent", "mb-1", 3, "click"], [1, "cursor"], [1, "yet-to-start-color", "cursor", 3, "click"], [1, "in-progress-color", "cursor", 3, "click"], [1, "completed-color", "cursor", 3, "click"], [1, "over-due", "cursor", 3, "click"], [1, "never", "cursor", 3, "click"], [1, "pending-color", "cursor", 3, "click"], [1, "row", "mt-4", "d-flex", "justify-content-center"], [1, "nodataList", 2, "background-color", "#FFFFFF"], [1, "modal-header"], [1, "modal-title", "col-12", "text-center"], [1, "modal-body"], [1, "text-center"], [1, "modal-footer"], ["type", "button", 1, "btn", "cancel", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "modal-title"], [1, "fa", "fa-close", "cursor", 3, "click"], [3, "answerShow", "contentId", "contentFormat", "studentContentId", "is_test", "classId", "studentReportId", "backStatus"], [1, "p-0"], [1, "letter"], [1, "t-name"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "modal-title", "text-center"], [1, "row", "px-3", "d-flex", "justify-content-center"], ["class", "col-12 mt-2", 4, "ngFor", "ngForOf"], [1, "col-12", "px-0", "mt-2"], [3, "emitEditorValue", "editorPatchValue", "height", "id", "showDropBtn", "showInputBtn"], [1, "col-12", "px-0", "text-right", "mt-2"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-2", 3, "click"], [1, "col-12", "mt-2"], [1, "row", "border", "border-secondary", "rounded"], [1, "col-8", "d-flex", 2, "word-wrap", "break-word"], ["class", "fa fa-envelope-square align-self-center mr-2 color-primary", 4, "ngIf"], ["class", "fa fa-bookmark align-self-center mr-2 color-secondary", 4, "ngIf"], [1, "mb-0", "mt-3", 3, "innerHTML"], [1, "col-3", "px-0", "d-flex", "justify-content-end", "align-self-center"], [1, "col-1", "d-flex", "justify-content-end", "align-self-center"], ["aria-hidden", "true", 1, "fa", "fa-close", "fa-1x", "text-danger", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-envelope-square", "align-self-center", "mr-2", "color-primary"], [1, "fa", "fa-bookmark", "align-self-center", "mr-2", "color-secondary"], [1, "col-md-12", "d-flex", "justify-content-center"], ["class", "col-md-6", 4, "ngIf"], [1, "row", "d-flex", "justify-content-center"], ["class", "col-10 mt-2", 4, "ngFor", "ngForOf"], ["class", "col-md-12 align-self-center my-2", 4, "ngIf"], [1, "col-md-6"], ["bindLabel", "content_name", "bindValue", "content_id", "id", "contentDrop", "placeholder", "Select Content", "typeToSearchText", "", 3, "change", "items"], [1, "col-10", "mt-2"], [1, "row", "border-secondary", "rounded", "grey-border"], [1, "col-4", "px-0", "align-self-center", "d-flex", "justify-content-center"], [1, "col-md-12", "align-self-center", "my-2"]], template: function OveralldetailsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "div", 11);
            i0.ɵɵtemplate(6, OveralldetailsComponent_div_6_Template, 4, 3, "div", 12)(7, OveralldetailsComponent_div_7_Template, 2, 1, "div", 13);
            i0.ɵɵelementStart(8, "h5", 14);
            i0.ɵɵtext(9, "Total No of Class: ");
            i0.ɵɵelementStart(10, "span", 15);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵelementStart(12, "div", 16)(13, "div", 17)(14, "div", 10)(15, "h4", 18);
            i0.ɵɵelement(16, "app-feather-icons", 19);
            i0.ɵɵtext(17, "Contact 1 Details ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 20)(19, "div", 21)(20, "table", 22)(21, "tbody")(22, "tr")(23, "td");
            i0.ɵɵtext(24, "Contact 1 First Name:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "td");
            i0.ɵɵtext(26);
            i0.ɵɵpipe(27, "titlecase");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "tr")(29, "td");
            i0.ɵɵtext(30, "Contact 1 Last Name:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "td");
            i0.ɵɵtext(32);
            i0.ɵɵpipe(33, "titlecase");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(34, OveralldetailsComponent_tr_34_Template, 5, 1, "tr", 23);
            i0.ɵɵelementEnd()()()()()()()();
            i0.ɵɵelementStart(35, "div", 24)(36, "div", 25);
            i0.ɵɵtemplate(37, OveralldetailsComponent_div_37_Template, 38, 13, "div", 26);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(38, OveralldetailsComponent_ng_template_38_Template, 13, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(40, OveralldetailsComponent_ng_template_40_Template, 6, 8, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(42, OveralldetailsComponent_ng_template_42_Template, 25, 4, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(44, OveralldetailsComponent_ng_template_44_Template, 14, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(46, OveralldetailsComponent_ng_template_46_Template, 14, 6, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(48, OveralldetailsComponent_ng_template_48_Template, 10, 3, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", (ctx.details == null ? null : ctx.details.profile_url) == "" || (ctx.details == null ? null : ctx.details.profile_url) == null);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.details == null ? null : ctx.details.profile_url) != "");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.classData == null ? null : ctx.classData.length);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("icon", "user");
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate(ctx.details.parent1_firstname != "" ? i0.ɵɵpipeBind1(27, 8, ctx.details.parent1_firstname) : "-");
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.details.parent1_lastname != "" ? i0.ɵɵpipeBind1(33, 10, ctx.details.parent1_lastname) : "-");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.showParentEmailId);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.classData);
        } }, dependencies: [i9.NgForOf, i9.NgIf, i10.NgSelectOption, i10.ɵNgSelectMultipleOption, i11.NgSelectComponent, i12.FeatherIconsComponent, i13.TinyMiceComponent, i14.AnswerSheetComponent, i9.TitleCasePipe, i15.CustomDateFormatPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OveralldetailsComponent, [{
        type: Component,
        args: [{ selector: 'app-overalldetails', template: "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xl-4\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"profile-details text-center\">\n                        <div style=\"margin: 10px auto; !important;\" class=\"avatar-upload\" *ngIf=\"details?.profile_url == '' || details?.profile_url == null\">\n                            <img class=\"mb-0\" *ngIf=\"details?.gender.toLowerCase() == 'male'\" alt=\"\" id=\"imagePreview\" src=\"assets/images/ristaschool/male.png\" width=\"100%\">\n                            <img class=\"mb-0\" *ngIf=\"details?.gender.toLowerCase() == 'female'\" alt=\"\" id=\"imagePreview1\" src=\"assets/images/ristaschool/female1.png\" width=\"100%\">\n                            <img class=\"mb-0\" *ngIf=\"details?.gender.toLowerCase() == 'n/a' || details.gender == ''\" alt=\"\" id=\"imagePreview2\" src=\"assets/images/ristaschool/Do not want to disclose.png\" width=\"100%\">\n                        </div>\n                        <div class=\"files-list fit-image\" *ngIf=\"details?.profile_url != ''\">\n                            <img class=\"blur-up lazyloaded\" width=\"100%\" id=\"imagePreview11\"\n                                 (error)=\"onImageError($event, details)\"\n                                 [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + details?.profile_url)\"  alt=\"\">\n                        </div>\n                        <h5 class=\"f-w-600 mb-0\">Total No of Class: <span class=\"color-primary\">{{classData?.length}}</span></h5>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-8\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-body\">\n                    <h4 class=\"position-relative border-bottom pb-2 letter\">\n                        <app-feather-icons [icon]=\"'user'\"></app-feather-icons>Contact 1 Details\n                    </h4>\n                    <div class=\"tab-pane fade show active\" id=\"top-profile\" role=\"tabpanel\"\n                         aria-labelledby=\"top-profile-tab\">\n                        <div class=\"table-responsive profile-table\">\n                            <table class=\"table table-responsive\">\n                                <tbody>\n                                <tr>\n                                    <td>Contact 1 First Name:</td>\n                                    <td>{{details.parent1_firstname != '' ? (details.parent1_firstname | titlecase) : '-'}}</td>\n                                </tr>\n                                <tr>\n                                    <td>Contact 1 Last Name:</td>\n                                    <td>{{details.parent1_lastname != '' ? (details.parent1_lastname | titlecase) : '-'}}</td>\n                                </tr>\n                                <tr *ngIf=\"showParentEmailId\">\n                                    <td>Contact 1 Email:</td>\n                                    <td>{{details.parent1_email_ids.length != 0 ? details.parent1_email_ids[0] : '-'}}</td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    <div class=\"row list-card\">\n        <div class=\"col-md-12\">\n            <div class=\"card\" *ngFor=\"let list of classData; let i = index\">\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <h4 class=\"t-period\"><span class=\"badge badge-success mr-2\" *ngIf=\"list.status == '1'\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></span>\n                                <span class=\"badge  badge-danger mr-2\" *ngIf=\"list.status == '2'\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span><span class=\"font-weight-bold\">{{list.class_name}}</span>\n                            </h4>\n                            <p><small class=\"font-weight-bold\">Subject: </small> <span class=\"t-name font-weight-bold\">{{list.subject}}</span>  &nbsp; &nbsp;\n                                <small class=\"font-weight-bold\">Grade: </small> <span class=\"t-name capital font-weight-bold\">{{list.grade != '' ? list.grade : '-'}}</span><br/>\n                                <small class=\"font-weight-bold\">Teacher Assigned: </small> <span class=\"t-name font-weight-bold\">{{list.teacher_name}}</span>\n                            </p>\n                        </div>\n                        <div class=\"col-md-4 m-auto\">\n                            <p *ngIf=\"list.transfer_class\" class=\"mb-0\"><small class=\"font-weight-bold\">Transferred from: </small> <span class=\"t-name font-weight-bold\">{{list.transfer_class}}</span></p>\n                            <p *ngIf=\"list.transferred_date\" class=\"mb-0\"><small class=\"font-weight-bold\">Transferred Date: </small> <span class=\"t-name font-weight-bold\">{{list.transferred_date | customDateFormat}}</span></p>\n                        </div>\n                        <div class=\"col-md-4 m-auto\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12 text-right\">\n                                    <p *ngIf=\"list.start_date == '0000-00-00'&& list.end_date == '0000-00-00'\"><small class=\"font-weight-bold\">Start: </small>  &nbsp; &nbsp;\n                                        <small class=\"font-weight-bold\">End: </small>\n                                    </p>\n                                    <p *ngIf=\"list.start_date != '0000-00-00'&& list.end_date != '0000-00-00'\"><small class=\"font-weight-bold\">Start: </small> <span class=\"t-name font-weight-bold\">{{list.start_date | customDateFormat}}</span> &nbsp; &nbsp;\n                                        <small class=\"font-weight-bold\">End: </small> <span class=\"t-name font-weight-bold\">{{list.end_date| customDateFormat}}</span>\n                                    </p>\n                                </div>\n                                <div class=\"col-md-12 d-flex align-items-center justify-content-end\">\n                                    <i (click)=\"openClassNotes(list)\" aria-hidden=\"true\" class=\"fa fa-newspaper-o float-right letter cursor mt-2 mr-2\" style=\"font-size: 21px;\" title=\"Class Notes\"></i>\n                                    <i class=\"fa fa-info-circle float-right letter cursor mt-2 mr-2\" style=\"font-size: 21px;\" aria-hidden=\"true\" title=\"Information\" (click)=\"showInformation(list)\"></i>\n                                    <button class=\"btn-sm-i btn-outline-primary pull-right mt-1\" [attr.aria-controls]=\"'#studentreport' + i + 'true'\"  [attr.data-target]=\"'#studentreport' + i + true\" aria-expanded=\"false\" data-toggle=\"collapse\" (click)=\"selectStudentDetails(i, '2')\" >Reports</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row collapse mt-3\" *ngIf=\"list.selectedstatus == 'true'\" id=\"studentreport{{i}}{{list?.selectedstatus}}\">\n                        <div class=\"form-group col-3 col-md-3\">\n                            <label class=\"col-xl-12 col-md-12\">Content Type</label>\n                            <select class=\"custom-select col-md-12\" (change)=\"studentContentDetails($event)\">\n                                <option value=\"2\">Assignment</option>\n                                <option value=\"3\" >Assessment</option>\n                            </select>\n                        </div>\n                        <div class=\"col-md-12 p-3\">\n                            <div class=\"row\">\n                                <div class=\"col-4\">\n                                    <h3 class=\"letter mt-3 mb-3\">{{contentType == '2' ? 'Assignment' : 'Assessment'}} Details</h3>\n                                </div>\n                                <div class=\"col-8 d-flex justify-content-end\">\n                                    <p class=\"p-3\">\n                                        <small class=\"ml-3\"><i class=\"fa fa-square yet-to-start-color-bg p-1\"></i> - UpComing</small>\n                                        <small class=\"ml-3\"><i class=\"fa fa-square in-progress-color-bg p-1\"></i> - In Progress</small>\n                                        <small class=\"ml-3\"><i class=\"fa fa-square completed-color-bg p-1\"></i> - Completed</small>\n                                        <small class=\"ml-3\"><i class=\"fa fa-square pending-color-bg p-1\"></i> - Pending</small>\n                                        <small class=\"ml-3\"><i class=\"fa fa-square over-due-bg p-1\"></i> - Overdue</small>\n                                        <small class=\"ml-3\"><i class=\"fa fa-square never-bg p-1\"></i> - Not Started</small>\n                                    </p>\n                                </div>\n                            </div>\n                            <div class=\"row\" *ngIf=\"newrows != ''\">\n                                <div class=\"col-12 table-responsive\">\n                                    <table class=\"table table-striped table-bordered\">\n                                        <thead>\n                                        <th class=\"text-center align-middle\">Content Name</th>\n                                        <th class=\"text-center align-middle\">Content Status</th>\n                                        </thead>\n                                        <tr *ngFor=\"let table of contentDetailsData; let i=index;\" class=\"text-center align-bottom\">\n                                            <th>{{table.content_name}} <span *ngIf=\"table.end_date != '0000-00-00'\"> ({{table.end_date | customDateFormat}})</span></th>\n                                            <td class=\"d-flex justify-content-center\">\n                                                <div class=\"d-flex align-items-end\">\n                                                    <button (click)=\"openNotes(list, table)\" class=\"btn-outline-primary btn-sm-view mr-2\" title=\"Add Notes\"><i aria-hidden=\"true\" class=\"fa fa-newspaper-o\"></i></button>\n                                                </div>\n                                                <div class=\"align-self-center\">\n                                                    <div *ngIf=\"table.status == '2' || table.status == '3' || table.status == '6' || table.status == '7'\" class=\"col-12 mb-1 px-0\">\n                                                        <span style=\"border: none; padding: 2px 8px\">{{table.attend_questions}}</span>/<span style=\"border: none; padding: 2px 8px\">{{table.total_questions}}</span>\n                                                    </div>\n                                                    <a (click)=\"notifyParent(table)\" *ngIf=\"table.status == '4' || table.status == '6'\" class=\"d-block cursor notify-parent mb-1\"> Notify Contact <span *ngIf=\"table.status == '6'\">({{table.parents_notify_count}})</span></a>\n                                                    <span *ngIf=\"table.status == '0' || table.status == ''\" class=\"cursor\">-</span>\n                                                    <span (click)=\"studentCorrectionDetail(table)\" *ngIf=\"table.status == '1'\" class=\"yet-to-start-color cursor\">{{table.student_average_score}}</span>\n                                                    <span (click)=\"studentCorrectionDetail(table)\" *ngIf=\"table.status == '2' || table.status == '6'\" class=\"in-progress-color cursor\">{{table.student_average_score}}</span>\n                                                    <span (click)=\"studentCorrectionDetail(table)\" *ngIf=\"table.status == '3'\" class=\"completed-color cursor\">{{table.student_average_score}}</span>\n                                                    <span (click)=\"notifyParent(table)\"  *ngIf=\"table.status == '4'\" class=\"over-due cursor\">{{table.parents_notify_count}}</span>\n                                                    <span (click)=\"studentNotAnswer(table)\" *ngIf=\"table.status == '5'\" class=\"never cursor\">{{table.student_average_score}}</span>\n                                                    <span (click)=\"studentCorrectionDetail(table)\" *ngIf=\"table.status == '7'\" class=\"pending-color cursor\">{{table.student_average_score}}</span>\n                                                </div>\n                                            </td>\n                                        </tr>\n                                    </table>\n                                </div>\n                            </div>\n                            <div class=\"row mt-4 d-flex justify-content-center\" *ngIf=\"newrows ==  ''\">\n                                <div class=\"col-4\">\n                                    <button class=\"nodataList\" style=\"background-color: #FFFFFF\">No Records found</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n<!--    <div class=\"row\">-->\n<!--        <div class=\"col-12 card p-3\">-->\n<!--            &lt;!&ndash;        <ng2-smart-table [settings]=\"missedWorkReport\"  [source]=\"rows\"></ng2-smart-table>&ndash;&gt;-->\n<!--        </div>-->\n<!--    </div>-->\n</div>\n\n<ng-template #contentnow let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title col-12 text-center\"><b>Notify Contact</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <h5 class=\"text-center\">Are You Sure want to notify {{studentname[0].student_name}} contacts?</h5>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn cancel\" (click)=\"close()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirmNotifiy()\">Confirm</button>\n    </div>\n</ng-template>\n\n<ng-template #viewStudentDetails let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Student Answer Report</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"onSave()\" ></i>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid Ends-->\n        <app-answer-sheet [answerShow]=\"true\" [contentId]=\"contentId\" [contentFormat]=\"contentFormat\" [studentContentId]=\"studentContentId\"\n                          [is_test]=\"is_test\"\n                          [classId]=\"classId\" [studentReportId]=\"studentId\" [backStatus]=\"false\" ></app-answer-sheet>\n    </div>\n</ng-template>\n<ng-template #showInform>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Info</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"onSave1()\" ></i>\n    </div>\n    <div class=\"modal-body\">\n        <p class=\"p-0\" ><span class=\"letter\">class code: </span> <span class=\"t-name font-weight-bold\">{{classInfo.class_code}}</span></p>\n        <p class=\"p-0\"><span class=\"letter\">Resources: </span> <span class=\"t-name\">{{classInfo.resources}} </span></p>\n        <p class=\"p-0\"><span class=\"letter\">Assignment: </span> <span class=\"t-name\">{{classInfo.assignment}} </span></p>\n        <p class=\"p-0\"><span class=\"letter\">Assessment: </span> <span class=\"t-name\">{{classInfo.assessment}}</span></p>\n    </div>\n</ng-template>\n<ng-template #notStarted let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title col-12 text-center\"><b>Not Started</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <h5 class=\"text-center\"> Not submitted the\n                <span *ngIf=\"this.contentType == '2'\">Assignment</span>\n                <span *ngIf=\"this.contentType == '3'\">Assessment</span> yet.</h5>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"closeNotstarted()\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #writeNoteOpen let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title text-center\">Add Notes</h4>\n        <i (click)=\"close()\" class=\"fa fa-close cursor\" ></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row px-3 d-flex justify-content-center\">\n            <div *ngFor=\"let list of showNotes; let i = index\" class=\"col-12 mt-2\">\n                <div class=\"row border border-secondary rounded\">\n                    <div class=\"col-8 d-flex\" style=\"word-wrap: break-word;\">\n                        <i *ngIf=\"list.notes_type == '2'\" class=\"fa fa-envelope-square align-self-center mr-2 color-primary\"></i>\n                        <i *ngIf=\"list.notes_type == '1'\" class=\"fa fa-bookmark align-self-center mr-2 color-secondary\"></i>\n                        <span [innerHTML]=\"list.notes\" class=\"mb-0 mt-3\"></span>\n                    </div>\n                    <div class=\"col-3 px-0 d-flex justify-content-end align-self-center\">\n                        <small class=\"mb-0\">{{list.created_date | customDateFormat}}</small>\n                    </div>\n                    <div class=\"col-1 d-flex justify-content-end align-self-center\">\n                        <i (click)=\"deleteNotes(list)\" aria-hidden=\"true\" class=\"fa fa-close fa-1x text-danger\" style=\"cursor:pointer\"></i>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 px-0 mt-2\">\n                <!-- <textarea class=\"form-control\" id=\"addNotes\" placeholder=\"Enter Notes\" style=\"width: 100%; height: 100px; padding: 4px\"></textarea> -->\n            <app-tiny-mice  (emitEditorValue)=\"getEditorValue($event)\"\n                [editorPatchValue]=\"false\"\n                [height]=\"300\"\n                [id]=\"'addNotes'\"\n                [showDropBtn]=\"false\"\n                [showInputBtn]=\"false\">\n            </app-tiny-mice>\n            </div>\n            <div class=\"col-12 px-0 text-right mt-2\">\n                <button (click)=\"addNotes('2')\" class=\"btn btn-outline-primary mr-2\" type=\"button\">Send as Email</button>\n                <button (click)=\"addNotes('1')\" class=\"btn btn-primary\" type=\"button\">Add</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n<ng-template #classNote let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title text-center\">All Notes</h4>\n        <i (click)=\"close()\" class=\"fa fa-close cursor\" ></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-md-12 d-flex justify-content-center\">\n            <div *ngIf=\"classId != 0\" class=\"col-md-6\">\n                <ng-select (change)=\"changeNotes($event)\"\n                           [items]=\"listContent\"\n                           bindLabel=\"content_name\"\n                           bindValue=\"content_id\"\n                           id=\"contentDrop\"\n                           placeholder=\"Select Content\"\n                           typeToSearchText=\"\"\n                >\n                </ng-select>\n            </div>\n        </div>\n        <div class=\"row d-flex justify-content-center\">\n            <div *ngFor=\"let list of classNotes; let i = index\" class=\"col-10 mt-2\">\n                <div class=\"row border-secondary rounded grey-border\">\n                    <div class=\"col-8 d-flex\" style=\"word-wrap: break-word\">\n                        <i *ngIf=\"list.notes_type == '2'\" class=\"fa fa-envelope-square align-self-center mr-2 color-primary\"></i>\n                        <i *ngIf=\"list.notes_type == '1'\" class=\"fa fa-bookmark align-self-center mr-2 color-secondary\"></i>\n                        <span [innerHTML]=\"list.notes\" class=\"mb-0 mt-3\"></span>\n                    </div>\n                    <div class=\"col-4 px-0 align-self-center d-flex justify-content-center\">\n                        <small class=\"mb-0\">{{list.created_date | customDateFormat}}</small>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"classNotes.length == 0\" class=\"col-md-12 align-self-center my-2\">\n                <p class=\"mb-0\">No Records Found</p>\n            </div>\n<!--            <div class=\"col-11 mt-2\">-->\n<!--                <textarea [(ngModel)]=\"notes\" class=\"form-control\" placeholder=\"Enter Notes\" style=\"width: 100%; height: 100px; padding: 4px\"></textarea>-->\n<!--            </div>-->\n<!--            <div class=\"col-11 text-right mt-2\">-->\n<!--                <button (click)=\"close()\" class=\"btn btn-outline-primary mr-2\" type=\"button\">Close</button>-->\n<!--            </div>-->\n        </div>\n    </div>\n</ng-template>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.ConfigurationService }, { type: i3.DomSanitizer }, { type: i4.ClassService }, { type: i5.ReportService }, { type: i6.NgbModal }, { type: i7.ToastrService }, { type: i8.ContentdetailService }], { studentdata: [{
            type: Input
        }], modalContentnow: [{
            type: ViewChild,
            args: ['contentnow']
        }], viewStudentDetails: [{
            type: ViewChild,
            args: ['viewStudentDetails']
        }], showInform: [{
            type: ViewChild,
            args: ['showInform']
        }], notStarted: [{
            type: ViewChild,
            args: ['notStarted']
        }], writeNoteOpen: [{
            type: ViewChild,
            args: ['writeNoteOpen']
        }], classNote: [{
            type: ViewChild,
            args: ['classNote']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(OveralldetailsComponent, { className: "OveralldetailsComponent" }); })();
//# sourceMappingURL=overalldetails.component.js.map