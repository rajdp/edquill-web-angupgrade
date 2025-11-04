import { Component, inject, ViewChild } from '@angular/core';
import { SessionConstants } from '../../../shared/data/sessionConstants';
import { CreatorService } from '../../../shared/service/creator.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/student.service";
import * as i3 from "../../../shared/service/configuration.service";
import * as i4 from "@angular/platform-browser";
import * as i5 from "@ng-bootstrap/ng-bootstrap";
import * as i6 from "@angular/router";
import * as i7 from "../../../shared/service/newsubject.service";
import * as i8 from "ngx-toastr";
import * as i9 from "../../../shared/service/common.service";
import * as i10 from "../../../environment.service";
import * as i11 from "@angular/common";
import * as i12 from "@angular/forms";
import * as i13 from "ng2-pdf-viewer";
const _c0 = ["answerKey"];
const _c1 = ["submitPopUp"];
const _c2 = ["submitTestPopUp"];
const _c3 = ["startTimerDuration"];
const _c4 = ["feedbackStatus"];
const _c5 = a0 => ({ "active1": a0 });
const _c6 = a0 => ({ "height": a0 });
function AssingmentsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "div", 16)(2, "button", 17);
    i0.ɵɵtext(3, "No Assignment Available !");
    i0.ɵɵelementEnd()()();
} }
function AssingmentsComponent_section_16_div_2_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 50);
} }
function AssingmentsComponent_section_16_div_2_img_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 51);
} if (rf & 2) {
    const list_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r3.sanitizer.bypassSecurityTrustResourceUrl(ctx_r3.webhost + "/" + list_r3.profile_url), i0.ɵɵsanitizeUrl);
} }
function AssingmentsComponent_section_16_div_2_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 52);
    i0.ɵɵtext(1, "Not started");
    i0.ɵɵelementEnd();
} }
function AssingmentsComponent_section_16_div_2_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 53);
    i0.ɵɵtext(1, "Overdue");
    i0.ɵɵelementEnd();
} }
function AssingmentsComponent_section_16_div_2_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 54);
    i0.ɵɵtext(1, "In-Progress");
    i0.ɵɵelementEnd();
} }
function AssingmentsComponent_section_16_div_2_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 55);
    i0.ɵɵtext(1, "Score Released");
    i0.ɵɵelementEnd();
} }
function AssingmentsComponent_section_16_div_2_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 56);
    i0.ɵɵtext(1, "Correction Pending");
    i0.ɵɵelementEnd();
} }
function AssingmentsComponent_section_16_div_2_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 57);
    i0.ɵɵtext(1, "Correction Completed");
    i0.ɵɵelementEnd();
} }
function AssingmentsComponent_section_16_div_2_p_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 37)(1, "span");
    i0.ɵɵtext(2, "Teacher: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 36);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", list_r3.teacher_first_name, " ", list_r3.teacher_last_name, "");
} }
function AssingmentsComponent_section_16_div_2_span_33_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 58);
    i0.ɵɵlistener("click", function AssingmentsComponent_section_16_div_2_span_33_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r5); const list_r3 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.navigateToSATReport(list_r3, $event)); });
    i0.ɵɵelement(1, "i", 59);
    i0.ɵɵelementEnd();
} }
function AssingmentsComponent_section_16_div_2_span_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 36);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind2(2, 2, list_r3.end_date, "MM/dd/yyyy"), ", ", list_r3.end_time, "");
} }
function AssingmentsComponent_section_16_div_2_span_41_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", list_r3.overdue, " Days");
} }
function AssingmentsComponent_section_16_div_2_span_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1, "Overdue For: ");
    i0.ɵɵtemplate(2, AssingmentsComponent_section_16_div_2_span_41_span_2_Template, 2, 1, "span", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r3.overdue != 1);
} }
function AssingmentsComponent_section_16_div_2_span_42_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 63);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", list_r3.overdue, " Days");
} }
function AssingmentsComponent_section_16_div_2_span_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1, "Due In: ");
    i0.ɵɵtemplate(2, AssingmentsComponent_section_16_div_2_span_42_span_2_Template, 2, 1, "span", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r3.overdue != 1);
} }
function AssingmentsComponent_section_16_div_2_p_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 64)(1, "span", 45);
    i0.ɵɵtext(2, "Obtained Score: ");
    i0.ɵɵelementStart(3, "span", 65);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵtext(5, "\u00A0 ");
    i0.ɵɵelementStart(6, "span", 45);
    i0.ɵɵtext(7, "Total Score: ");
    i0.ɵɵelementStart(8, "span", 65);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const list_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(list_r3.obtained_score);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(list_r3.total_score);
} }
function AssingmentsComponent_section_16_div_2_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 66)(1, "button", 67);
    i0.ɵɵlistener("click", function AssingmentsComponent_section_16_div_2_div_44_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r6); const list_r3 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.viewAnswerKeyPdf($event, list_r3)); });
    i0.ɵɵelement(2, "i", 68);
    i0.ɵɵtext(3, "Answer Key & Explanation");
    i0.ɵɵelementEnd()();
} }
function AssingmentsComponent_section_16_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵlistener("click", function AssingmentsComponent_section_16_div_2_Template_div_click_0_listener() { const list_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.answerPage(list_r3)); });
    i0.ɵɵelementStart(1, "div")(2, "div")(3, "div", 22)(4, "figure", 23);
    i0.ɵɵtemplate(5, AssingmentsComponent_section_16_div_2_img_5_Template, 1, 0, "img", 24)(6, AssingmentsComponent_section_16_div_2_img_6_Template, 1, 1, "img", 25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 26)(8, "h4", 27);
    i0.ɵɵtemplate(9, AssingmentsComponent_section_16_div_2_span_9_Template, 2, 0, "span", 28)(10, AssingmentsComponent_section_16_div_2_span_10_Template, 2, 0, "span", 29)(11, AssingmentsComponent_section_16_div_2_span_11_Template, 2, 0, "span", 30)(12, AssingmentsComponent_section_16_div_2_span_12_Template, 2, 0, "span", 31)(13, AssingmentsComponent_section_16_div_2_span_13_Template, 2, 0, "span", 32)(14, AssingmentsComponent_section_16_div_2_span_14_Template, 2, 0, "span", 33);
    i0.ɵɵtext(15, " \u00A0 ");
    i0.ɵɵelementStart(16, "span", 34);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 35)(19, "p")(20, "span");
    i0.ɵɵtext(21, "Subject: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span", 36);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "p", 37)(25, "span");
    i0.ɵɵtext(26, "Class: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "span", 36);
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(29, AssingmentsComponent_section_16_div_2_p_29_Template, 5, 2, "p", 38);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div", 39)(31, "div", 40)(32, "div", 41);
    i0.ɵɵtemplate(33, AssingmentsComponent_section_16_div_2_span_33_Template, 2, 0, "span", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "div", 43)(35, "p", 44);
    i0.ɵɵtext(36, "\u00A0");
    i0.ɵɵelementStart(37, "span", 45);
    i0.ɵɵtext(38, "End Date: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(39, AssingmentsComponent_section_16_div_2_span_39_Template, 3, 5, "span", 46);
    i0.ɵɵtext(40, "\u00A0 ");
    i0.ɵɵtemplate(41, AssingmentsComponent_section_16_div_2_span_41_Template, 3, 1, "span", 47)(42, AssingmentsComponent_section_16_div_2_span_42_Template, 3, 1, "span", 47);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(43, AssingmentsComponent_section_16_div_2_p_43_Template, 10, 2, "p", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(44, AssingmentsComponent_section_16_div_2_div_44_Template, 4, 0, "div", 49);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const list_r3 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("card-body ", ctx_r3.env.deviceType() ? "p-2" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("row ", ctx_r3.env.deviceType() ? "mt-1" : "", "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r3.profile_url == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r3.profile_url != "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r3.student_content_status == 1 && list_r3.overdueStatus);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r3.student_content_status == 1 && !list_r3.overdueStatus);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r3.student_content_status == 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r3.student_content_status == "3");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r3.student_content_status == "4" || list_r3.student_content_status == "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r3.student_content_status == "5");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(list_r3.content_name);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(list_r3.subject_name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(list_r3.class_name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r3.student_content_status == "3");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", list_r3.student_content_status == "3" && list_r3.content_format == 3 && list_r3.is_test == "1");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", list_r3.end_date != "0000-00-00");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r3.overdue != 0 && !list_r3.overdueStatus);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r3.overdue != 0 && list_r3.overdueStatus);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r3.student_content_status == "3");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r3.allow_answer_key == "1" && list_r3.student_content_status == "3" && list_r3.downloadPDF.length != 0);
} }
function AssingmentsComponent_section_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 18)(1, "div", 19);
    i0.ɵɵtemplate(2, AssingmentsComponent_section_16_div_2_Template, 45, 24, "div", 20);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.listData);
} }
function AssingmentsComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 69)(1, "h4", 70);
    i0.ɵɵtext(2, "Answer Key & Explanation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 71);
    i0.ɵɵlistener("click", function AssingmentsComponent_ng_template_17_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 72);
    i0.ɵɵelement(5, "pdf-viewer", 73);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("src", ctx_r3.answerKeyPath);
} }
function AssingmentsComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 69)(1, "h5", 74);
    i0.ɵɵtext(2, "Duration Completed");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 75)(4, "div", 6)(5, "div", 19)(6, "h5", 76)(7, "span");
    i0.ɵɵtext(8, "Test time is now complete. All your answers will be saved and submitted\u00A0automatically");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(9, "div", 77)(10, "button", 78);
    i0.ɵɵlistener("click", function AssingmentsComponent_ng_template_19_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r8); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.submitAnswer(ctx_r3.contentData)); });
    i0.ɵɵtext(11, "Ok");
    i0.ɵɵelementEnd()();
} }
function AssingmentsComponent_ng_template_21_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " , submitted\u00A0 and moved to next content automatically.");
    i0.ɵɵelementEnd();
} }
function AssingmentsComponent_ng_template_21_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " and submitted\u00A0automatically.");
    i0.ɵɵelementEnd();
} }
function AssingmentsComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 69)(1, "h5", 74);
    i0.ɵɵtext(2, "Duration Completed");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 75)(4, "div", 6)(5, "div", 19)(6, "h5", 76)(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵtemplate(9, AssingmentsComponent_ng_template_21_span_9_Template, 2, 0, "span", 79)(10, AssingmentsComponent_ng_template_21_span_10_Template, 2, 0, "span", 79);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(11, "div", 77)(12, "button", 78);
    i0.ɵɵlistener("click", function AssingmentsComponent_ng_template_21_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r9); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.submitAnswer(ctx_r3.testContentData, "test")); });
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
function AssingmentsComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 69)(1, "h5", 74);
    i0.ɵɵtext(2, "Start Timer Duration");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 75)(4, "div", 6)(5, "div", 19)(6, "h5", 76);
    i0.ɵɵtext(7, " Click 'Ok' to start the assessment. Do not close the window once the assessment\u00A0is\u00A0started. ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(8, "div", 77)(9, "button", 80);
    i0.ɵɵlistener("click", function AssingmentsComponent_ng_template_23_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r10); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onSave()); });
    i0.ɵɵtext(10, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 78);
    i0.ɵɵlistener("click", function AssingmentsComponent_ng_template_23_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r10); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.updateContentStatus(ctx_r3.contentDetails)); });
    i0.ɵɵtext(12, "Ok");
    i0.ɵɵelementEnd()();
} }
function AssingmentsComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 75)(1, "div", 81);
    i0.ɵɵelement(2, "div", 82);
    i0.ɵɵelementStart(3, "span", 83);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.popUpMessage);
} }
export class AssingmentsComponent {
    constructor(auth, student, confi, sanitizer, modalService, route, newSubject, toastr, common, env) {
        this.auth = auth;
        this.student = student;
        this.confi = confi;
        this.sanitizer = sanitizer;
        this.modalService = modalService;
        this.route = route;
        this.newSubject = newSubject;
        this.toastr = toastr;
        this.common = common;
        this.env = env;
        this.listData = [];
        this.mobileView = false;
        this.creatorService = inject(CreatorService);
        this.popUpMessage = '';
        this.webhost = this.confi.getimgUrl();
        this.mobileView = this.env.mobileView;
        this.newSubject.schoolChange.subscribe((params) => {
            if (params != '') {
                if (this.route.url.includes('assignment')) {
                    this.init(params);
                }
            }
            else {
                this.init(this.auth.getSessionData('school_id'));
            }
        });
    }
    ngOnInit() {
        this.allowSelect = false;
        this.newSubject.allowSchoolChange(this.allowSelect);
        this.auth.setAssignmentRef(this);
    }
    init(data) {
        this.getSearch_Filter();
        this.assignmentList(this.filterType);
    }
    onSave() {
        this.modalRef.close();
    }
    assessmentSearch() {
        if (this.searchAssign != '') {
            this.updateFilter(this.searchAssign);
        }
    }
    updateFilter(event) {
        const val = event.toLowerCase();
        const temp = this.listData1.filter(function (d) {
            return d.content_name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.listData = temp;
        this.setSearch_Filter(this.filterType);
    }
    downloadPdf(list) {
        console.log(list);
        const path = this.common.convertBase64(list.file_path);
        console.log(path, 'path');
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', path.original_image_url);
        link.setAttribute('download', path.name);
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    openAnswerKey(list) {
        // this.modalRef = this.modalService.open(this.answerKey, {size: 'xl'});
        console.log(list.downloadPDF[0].original_image_url, 'list.downloadPDF[0].original_image_url');
        this.answerKeyPath = this.webhost + '/' + list.downloadPDF[0].original_image_url;
        console.log(this.answerKeyPath, 'answer');
    }
    viewAnswerKeyPdf(event, list) {
        this.auth.setSessionData('view_pdf_url_details', JSON.stringify(list));
        window.open(this.env.envProperties.envURL + '#/studentlogin/viewAnswerKeyPdf', '_blank');
        event.stopPropagation();
    }
    answerPage(data) {
        console.log(data, 'assign_data');
        this.auth.setSessionData('ContentType', 'Assignments');
        if (data.student_content_status != 3) {
            if (data.content_format == '3' && data.content_started_at == null && (data.student_content_status == '1' || data.student_content_status == '2')) {
                this.contentDetails = data;
                if (data?.is_test == '1') {
                    this.modalRef = this.modalService.open(this.startTimerDuration);
                }
                else {
                    this.updateContentStatus(this.contentDetails);
                }
            }
            else if (data.content_format == '3' && data.content_started_at != '' && data.content_started_at && data.content_duration != '0'
                && (data.student_content_status == '1' || data.student_content_status == '2')) {
                this.auth.getCurrentDateAndTime(data, '', 'assignment').subscribe((isAllowed) => {
                    if (!isAllowed) {
                        console.log('Access denied');
                        this.contentData = data;
                        this.modalRef = this.modalService.open(this.submitPopUp);
                    }
                });
            }
            else {
                data.available_content_duration = data.content_duration != '0' ? parseInt(data.content_duration) * 60 :
                    data.content_time_taken != '0' ? parseInt(data.content_time_taken) : 0;
                if (data?.is_test == '1') {
                    this.testDetails(data);
                }
                else {
                    this.auth.setSessionData('classDetails', JSON.stringify(data));
                    this.route.navigate(['/studentlogin/answering']);
                }
            }
        }
        else {
            this.auth.setSessionData('student-card', JSON.stringify(data));
            this.route.navigate(['/studentlogin/score-card']);
        }
    }
    updateContentStatus(data) {
        data.available_content_duration = data.content_duration != '0' ? parseInt(data.content_duration) * 60 :
            data.content_time_taken != '0' ? parseInt(data.content_time_taken) : 0;
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
                    this.route.navigate(['/studentlogin/answering']);
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
        this.creatorService.testDetail(data).subscribe((successData) => {
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
        await this.assignmentList(this.filterType);
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
                    await this.assignmentList(this.filterType);
                }
            }
            catch (error) {
                console.error('Error during submitAnswer:', error);
            }
        }
    }
    assignmentList(id) {
        this.setSearch_Filter(id);
        this.filterType = id;
        let data;
        data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            type: this.filterType,
        };
        this.student.assingmentList(data).subscribe((successData) => {
            this.assingmentListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_assignmentList');
        });
    }
    assingmentListSuccess(successData) {
        if (successData.IsSuccess) {
            successData.ResponseObject.forEach((val) => {
                val.downloadPDF = this.common.convertBase64(val.answerkey_path);
            });
            this.listData1 = successData.ResponseObject;
            this.listData = successData.ResponseObject;
            this.listData.forEach((items) => {
                items.overdueStatus = true;
                if (items.overdue < 0) {
                    items.overdueStatus = false;
                    Math.abs(items.overdue);
                    items.overdue = Math.abs(items.overdue);
                }
            });
            this.assessmentSearch();
        }
    }
    request(list) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_id: this.auth.getUserId(),
            content_id: list.content_id,
            class_id: list.class_id
        };
        this.student.answerKeyRequest(data).subscribe((successData) => {
            this.answerKeyRequestSuccess(successData);
        }, (error) => {
            console.error(error, 'error_assessmentList');
        });
    }
    answerKeyRequestSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success('Download request sent');
        }
    }
    setSearch_Filter(id) {
        let data = JSON.parse(this.auth.getSessionData(SessionConstants.studentAssignmentSearch));
        if (data != null) {
            data.forEach((items) => {
                if (items.school_id == this.auth.getSessionData('school_id')) {
                    items.assignmentDateStatus = id;
                    items.assignmentName = this.searchAssign;
                }
                else {
                    const searchData = {
                        assignmentName: this.searchAssign,
                        assignmentDateStatus: id,
                        school_id: this.auth.getSessionData('school_id')
                    };
                    data.push(searchData);
                }
            });
            data = data.filter((test, index, array) => index === array.findIndex((findTest) => findTest.school_id === test.school_id));
            this.auth.setSessionData(SessionConstants.studentAssignmentSearch, JSON.stringify(data));
        }
    }
    getSearch_Filter() {
        const data = JSON.parse(this.auth.getSessionData(SessionConstants.studentAssignmentSearch));
        data.every((items) => {
            if (items.school_id == this.auth.getSessionData('school_id')) {
                this.filterType = items.assignmentDateStatus;
                this.searchAssign = items.assignmentName;
                return false;
            }
            else {
                this.searchAssign = '';
                this.filterType = '3';
            }
            return true;
        });
    }
    navigateToSATReport(value, event) {
        console.log(value, 'value');
        const satReportDetails = {
            class_id: value?.class_id,
            class_name: value?.class_name,
            student_id: this.auth.getUserId(),
            content_id: value.content_id,
            student_content_id: value.student_content_id,
            test_type_id: value?.test_type_id ?? '0',
        };
        console.log(satReportDetails, 'satReportDetails');
        this.auth.setSessionData('satReportData', JSON.stringify(satReportDetails));
        this.auth.setSessionData('reportCalledFrom', 'assignment');
        this.route.navigate(['sat-report']);
        event ? event.stopPropagation() : '';
    }
    static { this.ɵfac = function AssingmentsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AssingmentsComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.StudentService), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i4.DomSanitizer), i0.ɵɵdirectiveInject(i5.NgbModal), i0.ɵɵdirectiveInject(i6.Router), i0.ɵɵdirectiveInject(i7.NewsubjectService), i0.ɵɵdirectiveInject(i8.ToastrService), i0.ɵɵdirectiveInject(i9.CommonService), i0.ɵɵdirectiveInject(i10.EnvironmentService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AssingmentsComponent, selectors: [["app-assessment"]], viewQuery: function AssingmentsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
            i0.ɵɵviewQuery(_c4, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.answerKey = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.submitPopUp = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.submitTestPopUp = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.startTimerDuration = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.feedbackStatus = _t.first);
        } }, decls: 27, vars: 33, consts: [["answerKey", ""], ["submitPopUp", ""], ["submitTestPopUp", ""], ["startTimerDuration", ""], ["feedbackStatus", ""], [1, "container-fluid"], [1, "row"], ["type", "button", 3, "click", "ngClass"], [1, "input-group"], ["placeholder", "Search by Assignment name", "size", "50", "type", "text", 1, "form-control", 3, "ngModelChange", "input", "ngStyle", "ngModel"], [1, "input-group-append"], ["type", "submit"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["class", "row d-flex justify-content-center list-card mt-5", 4, "ngIf"], ["class", "row list-card mt-2", 4, "ngIf"], [1, "row", "d-flex", "justify-content-center", "list-card", "mt-5"], [1, "col-4"], [1, "nodataList"], [1, "row", "list-card", "mt-2"], [1, "col-md-12"], ["class", "card class-hover class-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", "class-hover", "class-card", 3, "click"], [1, "col-1", "d-flex", "justify-content-center", "align-items-center"], ["title", "Preview", 1, "cursor"], ["alt", "", "class", "img-50 rounded-circle", "src", "assets/images/ristaschool/option-writing-checkbox-concepts-survey.png", 4, "ngIf"], ["alt", "", "class", "img-50 rounded-circle", 3, "src", 4, "ngIf"], [1, "col-6"], [1, "t-period"], ["class", "badge badge-secondary", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], ["class", "badge badge-warning", 4, "ngIf"], ["class", "badge badge-primary", 4, "ngIf"], ["class", "badge badge-info", 4, "ngIf"], ["class", "badge badge-success", 4, "ngIf"], [1, "font-weight-bold"], [1, "d-flex"], [1, "t-name", "font-weight-bold"], [1, "ml-4"], ["class", "ml-4", 4, "ngIf"], [1, "col-5", "align-self-center"], [1, "row", "d-flex", "align-items-center"], [1, "col", "text-right", "pr-0"], [3, "click", 4, "ngIf"], [1, "col-auto"], [1, "text-right", "mb-1"], [1, "total-score"], ["class", "t-name font-weight-bold", 4, "ngIf"], ["class", "total-score", 4, "ngIf"], ["class", "text-right", 4, "ngIf"], ["class", "col-12 text-right mt-1", 4, "ngIf"], ["alt", "", "src", "assets/images/ristaschool/option-writing-checkbox-concepts-survey.png", 1, "img-50", "rounded-circle"], ["alt", "", 1, "img-50", "rounded-circle", 3, "src"], [1, "badge", "badge-secondary"], [1, "badge", "badge-danger"], [1, "badge", "badge-warning"], [1, "badge", "badge-primary"], [1, "badge", "badge-info"], [1, "badge", "badge-success"], [3, "click"], ["title", "View Analytics", "aria-hidden", "true", 1, "fa", "fa-bar-chart", "color-primary", "cursor", 2, "font-size", "20px"], ["class", "over-due1", 4, "ngIf"], [1, "over-due1"], ["class", "due-in", 4, "ngIf"], [1, "due-in"], [1, "text-right"], [1, "t-name"], [1, "col-12", "text-right", "mt-1"], [1, "btn", "btn-outline-primary", "px-3", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-key", "mr-1"], [1, "modal-header"], [1, "modal-title", "letter"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "modal-body", "text-center"], [2, "display", "block", "height", "100vh", 3, "src"], [1, "contenttext", "text-center", "mb-0"], [1, "modal-body"], [1, "mb-0"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], [1, "btn", "cancel", "mr-1", 3, "click"], [1, "col-12", "px-0", "my-3", "d-flex", "flex-row", "align-items-center"], [1, "feedback_spinner"], [1, "ml-3", 2, "font-size", "16px"]], template: function AssingmentsComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "div")(3, "button", 7);
            i0.ɵɵlistener("click", function AssingmentsComponent_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.assignmentList(3)); });
            i0.ɵɵtext(4, "In progress");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "button", 7);
            i0.ɵɵlistener("click", function AssingmentsComponent_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.assignmentList(4)); });
            i0.ɵɵtext(6, "Completed");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 7);
            i0.ɵɵlistener("click", function AssingmentsComponent_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.assignmentList(1)); });
            i0.ɵɵtext(8, "All");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div")(10, "div", 8)(11, "input", 9);
            i0.ɵɵtwoWayListener("ngModelChange", function AssingmentsComponent_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.searchAssign, $event) || (ctx.searchAssign = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("input", function AssingmentsComponent_Template_input_input_11_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.updateFilter(ctx.searchAssign)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 10)(13, "button", 11);
            i0.ɵɵelement(14, "i", 12);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(15, AssingmentsComponent_div_15_Template, 4, 0, "div", 13)(16, AssingmentsComponent_section_16_Template, 3, 1, "section", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(17, AssingmentsComponent_ng_template_17_Template, 6, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(19, AssingmentsComponent_ng_template_19_Template, 12, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(21, AssingmentsComponent_ng_template_21_Template, 14, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(23, AssingmentsComponent_ng_template_23_Template, 13, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(25, AssingmentsComponent_ng_template_25_Template, 5, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("group-btn col-md-", ctx.env.deviceType() ? "8" : "9", "");
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("btn btn-outline-primary ", ctx.env.deviceType() ? "border-radius-20" : "", "");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(25, _c5, ctx.filterType == 3));
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("btn btn-outline-primary ", ctx.env.deviceType() ? "border-radius-20" : "", "");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(27, _c5, ctx.filterType == 4));
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("btn btn-outline-primary ", ctx.env.deviceType() ? "border-radius-20" : "", "");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(29, _c5, ctx.filterType == 1));
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("col-md-", ctx.env.deviceType() ? "4" : "3", " btn-popup pull-right");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(31, _c6, ctx.env.deviceType() ? "34px" : "40px"));
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchAssign);
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("btn btn-primary  ", ctx.env.deviceType() ? "py-0 border-radius-2" : "", "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.listData.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.listData.length != 0);
        } }, dependencies: [i11.NgClass, i11.NgForOf, i11.NgIf, i11.NgStyle, i12.DefaultValueAccessor, i12.NgControlStatus, i12.NgModel, i13.PdfViewerComponent, i11.DatePipe], styles: [".border-radius-20[_ngcontent-%COMP%] {\n  border-radius: 20px !important;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AssingmentsComponent, [{
        type: Component,
        args: [{ selector: 'app-assessment', template: "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"group-btn col-md-{{env.deviceType() ? '8' : '9'}}\">\n            <button (click)=\"assignmentList(3)\" [ngClass]=\"{'active1': filterType == 3}\" class=\"btn btn-outline-primary {{env.deviceType() ? 'border-radius-20' : ''}}\" type=\"button\">In progress</button>\n            <button (click)=\"assignmentList(4)\" [ngClass]=\"{'active1': filterType == 4}\" class=\"btn btn-outline-primary {{env.deviceType() ? 'border-radius-20' : ''}}\" type=\"button\">Completed</button>\n            <button (click)=\"assignmentList(1)\" [ngClass]=\"{'active1': filterType == 1}\" class=\"btn btn-outline-primary {{env.deviceType() ? 'border-radius-20' : ''}}\" type=\"button\">All</button>\n        </div>\n        <div class=\"col-md-{{env.deviceType() ? '4' : '3'}} btn-popup pull-right\">\n            <div class=\"input-group\">\n                <input class=\"form-control\" placeholder=\"Search by Assignment name\" size=\"50\" [ngStyle]=\"{'height' : env.deviceType() ? '34px' : '40px'}\" type=\"text\" [(ngModel)]=\"searchAssign\" (input)=\"updateFilter(searchAssign)\">\n                <div class=\"input-group-append\">\n                    <button class=\"btn btn-primary  {{env.deviceType() ? 'py-0 border-radius-2' : ''}}\" type=\"submit\"><i aria-hidden=\"true\" class=\"fa fa-search\"></i></button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-center list-card mt-5\" *ngIf=\"listData.length ==0\">\n        <div class=\"col-4\">\n            <button class=\"nodataList\">No Assignment Available !</button>\n        </div>\n    </div>\n    <section class=\"row list-card mt-2\" *ngIf=\"listData.length !=0\">\n        <div class=\"col-md-12\">\n            <div *ngFor=\"let list of listData\" class=\"card class-hover class-card\" (click)=\"answerPage(list)\">\n                <div class=\"card-body {{env.deviceType() ? 'p-2' : ''}}\">\n                    <div class=\"row {{env.deviceType() ? 'mt-1' : ''}}\">\n                        <div class=\"col-1 d-flex justify-content-center align-items-center\">\n                            <figure class=\"cursor\" title=\"Preview\">\n                                <img *ngIf=\"list.profile_url == ''\" alt=\"\" class=\"img-50 rounded-circle\" src=\"assets/images/ristaschool/option-writing-checkbox-concepts-survey.png\" >\n                                <img *ngIf=\"list.profile_url != ''\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + list.profile_url)\" alt=\"\" class=\"img-50 rounded-circle\">\n                            </figure>\n                        </div>\n                        <div class=\"col-6\">\n                            <h4 class=\"t-period\">\n                                <span *ngIf=\"list.student_content_status == 1 && list.overdueStatus\" class=\"badge badge-secondary\">Not started</span>\n                                <span *ngIf=\"list.student_content_status == 1 && !list.overdueStatus\" class=\"badge badge-danger\">Overdue</span>\n                                <span *ngIf=\"list.student_content_status == 2\" class=\"badge badge-warning\">In-Progress</span>\n                                <!--                                <span *ngIf=\"list.student_content_status != 2 && list.student_content_status != 1\" class=\"badge badge-success\">Completed</span>-->\n                                <span *ngIf=\"list.student_content_status == '3'\" class=\"badge badge-primary\">Score Released</span>\n                                <span *ngIf=\"list.student_content_status == '4' || list.student_content_status == '6'\" class=\"badge badge-info\">Correction Pending</span>\n                                <span *ngIf=\"list.student_content_status == '5'\" class=\"badge badge-success\">Correction Completed</span>\n                                &nbsp; <span class=\"font-weight-bold\">{{list.content_name}}</span></h4>\n                            <div class=\"d-flex\">\n                                <p><span>Subject: </span> <span class=\"t-name font-weight-bold\">{{list.subject_name}}</span></p>\n                                <p class=\"ml-4\"><span>Class: </span> <span class=\"t-name font-weight-bold\">{{list.class_name}}</span></p>\n                                <p *ngIf=\"list.student_content_status == '3'\" class=\"ml-4\"><span>Teacher: </span> <span class=\"t-name font-weight-bold\">{{list.teacher_first_name}} {{list.teacher_last_name}}</span></p>\n                            </div>\n                        </div>\n                        <div class=\"col-5 align-self-center\">\n                            <div class=\"row d-flex align-items-center\">\n                                <div class=\"col text-right pr-0\">\n                                    <span (click)=\"navigateToSATReport(list, $event)\" *ngIf=\"list.student_content_status == '3' &&\n                                        list.content_format == 3 && list.is_test == '1'\">\n                                        <i title=\"View Analytics\" style=\"font-size: 20px\" class=\"fa fa-bar-chart color-primary cursor\"\n                                           aria-hidden=\"true\"></i>\n                                    </span>\n                                </div>\n                                <div class=\"col-auto\">\n                                    <p class=\"text-right mb-1\">&nbsp;<span class=\"total-score\">End Date: </span>\n                                        <span *ngIf=\"list.end_date != '0000-00-00'\" class=\"t-name font-weight-bold\">\n                                            {{list.end_date | date:'MM/dd/yyyy'}}, {{list.end_time}}</span>&nbsp;\n                                        <span *ngIf=\"list.overdue != 0 && !list.overdueStatus\" class=\"total-score\">Overdue For:\n                                        <span *ngIf=\"list.overdue != 1\" class=\"over-due1\">{{list.overdue}} Days</span></span>\n                                        <span *ngIf=\"list.overdue != 0 && list.overdueStatus\" class=\"total-score\">Due In:\n                                        <span *ngIf=\"list.overdue != 1\" class=\"due-in\">{{list.overdue}} Days</span></span>\n                                    </p>\n                                    <p class=\"text-right\" *ngIf=\"list.student_content_status == '3'\">\n                                        <span class=\"total-score\">Obtained Score: <span class=\"t-name\">{{list.obtained_score}}</span></span>&nbsp;\n                                        <span class=\"total-score\">Total Score: <span class=\"t-name\">{{list.total_score}}</span></span>\n                                    </p>\n                                </div>\n                                <div class=\"col-12 text-right mt-1\" *ngIf=\"list.allow_answer_key == '1' && list.student_content_status == '3' && list.downloadPDF.length != 0\">\n                                    <button (click)=\"viewAnswerKeyPdf($event, list)\" class=\"btn btn-outline-primary px-3\"><i class=\"fa fa-key mr-1\" aria-hidden=\"true\"></i>Answer Key & Explanation</button>\n                                </div>\n                            </div>\n                        </div>\n<!--                        <div class=\"col-5\">-->\n<!--                            <div class=\"row align-self-end\">-->\n<!--                                <div class=\"col-md-12\">-->\n<!--                                    <p class=\"text-right\">-->\n<!--                                        &nbsp;<span class=\"total-score\">End Date: </span> <span *ngIf=\"list.end_date != '0000-00-00'\" class=\"t-name font-weight-bold\">{{list.end_date|date:'MM/dd/yyyy'}}, {{list.end_time}}</span>&nbsp;-->\n<!--                                        <span *ngIf=\"list.overdue != 0 && !list.overdueStatus\" class=\"total-score\">Overdue For:-->\n<!--                                            <span *ngIf=\"list.overdue != 1\" class=\"over-due1\">{{list.overdue}} Days</span>-->\n<!--                                        </span>-->\n<!--                                        <span *ngIf=\"list.overdue != 0 && list.overdueStatus\" class=\"total-score\">Due In:-->\n<!--                                            <span *ngIf=\"list.overdue != 1\" class=\"due-in\">{{list.overdue}} Days</span>-->\n<!--                                        </span>-->\n<!--                                        <span class=\"total-score\" *ngIf=\"list.student_content_status == '3'\"><br/>Total Score: <span class=\"t-name\">{{list.total_score}}</span></span>&nbsp;-->\n<!--                                        <span class=\"total-score\" *ngIf=\"list.student_content_status == '3'\">Obtained Score: <span class=\"t-name\">{{list.obtained_score}}</span></span></p>-->\n<!--                                    <div class=\"dropdown pull-right\" *ngIf=\"list.allow_answer_key == '1' && list.student_content_status == '3' && list.downloadPDF.length != 0\">-->\n<!--                                        <button class=\"btn btn-outline-primary\">Action <i class=\"fa fa-sort-desc float-right ml-2\" aria-hidden=\"true\"></i></button>-->\n<!--                                        <div class=\"dropdown-content\" style=\"right: 1px\">-->\n<!--                                            <a (click)=\"checkFunction($event, list)\"><i class=\"fa fa-key pl-1 pr-1\" aria-hidden=\"true\"></i> Answer Key & Explanation</a>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--&lt;!&ndash;                                    <button (click)=\"answerPage(list)\" [disabled]=\"list.status == 1\" class=\"btn-sm-i btn-outline-primary pull-right\" type=\"button\">Enter</button>&ndash;&gt;-->\n<!--&lt;!&ndash;                                    <button (click)=\"sendRequest(list, 1)\" *ngIf=\"list.answer_request == 0 && list.student_content_status == '3' && list.downloadPDF.length != 0\" class=\"btn-sm-i btn-outline-primary pull-right mr-2\" title=\"Request PDF Download\" type=\"button\"><i class=\"fa fa-paper-plane\"></i></button>&ndash;&gt;-->\n<!--&lt;!&ndash;                                    <button *ngIf=\"list.answer_request == 1 && list.student_content_status == '3' && list.downloadPDF.length != 0\" class=\"btn-sm-i btn-outline-primary pull-right mr-2\" readonly title=\"Request Pending\" type=\"button\"><i class=\"fa fa-spinner fa-spin\"></i></button>&ndash;&gt;-->\n<!--&lt;!&ndash;                                    <button (click)=\"openAnswerKey(list)\" *ngIf=\"list.allow_answer_key == '1' && list.student_content_status == '3' && list.downloadPDF.length != 0\" class=\"btn-sm-i btn-outline-primary pull-right mr-2\" title=\"Answer Key & Explanation\" type=\"button\"><i class=\"fa fa-key\"></i></button>&ndash;&gt;-->\n<!--&lt;!&ndash;                                    <span *ngIf=\"list.answer_request == 2 && list.student_content_status == '3'\" class=\"fa-stack pull-right mr-2\"><i class=\"fa fa-download fa-stack-1x\"></i><i class=\"fa fa-ban fa-stack-2x text-danger\"></i></span>&ndash;&gt;-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n<ng-template #answerKey>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">Answer Key & Explanation</h4>\n        <i (click)=\"onSave()\" class=\"fa fa-close cursor\"></i>\n    </div>\n    <div class=\"modal-body text-center\">\n        <pdf-viewer [src]=\"answerKeyPath\" style=\"display: block;height: 100vh;\"></pdf-viewer>\n    </div>\n</ng-template>\n\n<ng-template #submitPopUp let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h5 class=\"contenttext text-center mb-0\">Duration Completed</h5>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5 class=\"mb-0\">\n                    <span>Test time is now complete. All your answers will be saved and submitted\u00A0automatically</span></h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"submitAnswer(contentData)\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #submitTestPopUp let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h5 class=\"contenttext text-center mb-0\">Duration Completed</h5>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5 class=\"mb-0\">\n                    <span>Test time is now complete for {{testContentData?.module_name}}. All your answers will be saved\n                        <span *ngIf=\"!testContentData?.lastQuestions\"> , submitted\u00A0 and moved to next content automatically.</span>\n                        <span *ngIf=\"testContentData?.lastQuestions\"> and submitted\u00A0automatically.</span>\n                    </span>\n                </h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"submitAnswer(testContentData, 'test')\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #startTimerDuration let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h5 class=\"contenttext text-center mb-0\">Start Timer Duration</h5>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5 class=\"mb-0\">\n                    Click 'Ok' to start the assessment. Do not close the window once the assessment\u00A0is\u00A0started.\n                </h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn cancel mr-1\" (click)=\"onSave()\">Cancel</button>\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"updateContentStatus(contentDetails)\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #feedbackStatus>\n    <div class=\"modal-body\">\n        <div class=\"col-12 px-0 my-3 d-flex flex-row align-items-center\">\n            <div class=\"feedback_spinner\"></div>\n            <span class=\"ml-3\" style=\"font-size: 16px\">{{popUpMessage}}</span>\n        </div>\n    </div>\n</ng-template>\n", styles: [".border-radius-20 {\n  border-radius: 20px !important;\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.StudentService }, { type: i3.ConfigurationService }, { type: i4.DomSanitizer }, { type: i5.NgbModal }, { type: i6.Router }, { type: i7.NewsubjectService }, { type: i8.ToastrService }, { type: i9.CommonService }, { type: i10.EnvironmentService }], { answerKey: [{
            type: ViewChild,
            args: ['answerKey']
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AssingmentsComponent, { className: "AssingmentsComponent" }); })();
//# sourceMappingURL=assingments.component.js.map