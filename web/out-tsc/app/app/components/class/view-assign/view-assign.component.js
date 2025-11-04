import { Component, ViewChild } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SessionConstants } from '../../../shared/data/sessionConstants';
import { dateOptions, timeZone } from '../../../shared/data/config';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/assessment.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/forms";
import * as i5 from "../../../shared/service/newsubject.service";
import * as i6 from "@angular/platform-browser";
import * as i7 from "../../../shared/service/configuration.service";
import * as i8 from "@ng-bootstrap/ng-bootstrap";
import * as i9 from "../../../shared/service/class.service";
import * as i10 from "@angular/common";
import * as i11 from "ngx-toastr";
import * as i12 from "../../../shared/service/common.service";
import * as i13 from "../../../shared/service/common-data.service";
import * as i14 from "../../../shared/service/creator.service";
import * as i15 from "@nodro7/angular-mydatepicker";
import * as i16 from "../../report/missed-work-report/missed-work-report.component";
import * as i17 from "../../report/items-report/items-report.component";
import * as i18 from "ng2-pdf-viewer";
import * as i19 from "@angular/cdk/drag-drop";
import * as i20 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["detailsTemplate"];
const _c1 = ["resources"];
const _c2 = ["assignment"];
const _c3 = ["assessment"];
const _c4 = ["content"];
const _c5 = ["assign"];
const _c6 = ["reports"];
const _c7 = ["itemsReports"];
const _c8 = ["teacherVersion"];
const _c9 = a0 => ({ "active1": a0 });
const _c10 = () => ({ standalone: true });
function ViewAssignComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 33);
    i0.ɵɵlistener("click", function ViewAssignComponent_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.upload("resources")); });
    i0.ɵɵtext(1, "Add Resource");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 33);
    i0.ɵɵlistener("click", function ViewAssignComponent_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.upload("assignments")); });
    i0.ɵɵtext(1, "Add Assignment");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 33);
    i0.ɵɵlistener("click", function ViewAssignComponent_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.upload("assessments")); });
    i0.ɵɵtext(1, "Add Assessment");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34)(1, "div", 35)(2, "button", 36);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function ViewAssignComponent_div_41_div_1_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 58);
} }
function ViewAssignComponent_div_41_div_1_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 59);
} if (rf & 2) {
    const list_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("src", ctx_r2.sanitizer.bypassSecurityTrustResourceUrl(ctx_r2.webhost + "/" + list_r7.profile_url), i0.ɵɵsanitizeUrl);
} }
function ViewAssignComponent_div_41_div_1_div_1_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 60);
    i0.ɵɵtext(1, "(PDF)");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_41_div_1_div_1_small_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 60);
    i0.ɵɵtext(1, "(LINK)");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_41_div_1_div_1_small_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 60);
    i0.ɵɵtext(1, "(TEXT)");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_41_div_1_div_1_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, list_r7.start_date));
} }
function ViewAssignComponent_div_41_div_1_div_1_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u00A0-\u00A0");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_41_div_1_div_1_span_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, list_r7.end_date));
} }
function ViewAssignComponent_div_41_div_1_div_1_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "span", 61);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, "\u00A0-\u00A0");
    i0.ɵɵelementStart(4, "span", 61);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(list_r7.start_time);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(list_r7.end_time);
} }
function ViewAssignComponent_div_41_div_1_div_1_a_26_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_41_div_1_div_1_a_26_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r9); const list_r7 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewPage(list_r7, "resources", "student_preview")); });
    i0.ɵɵelement(1, "i", 63);
    i0.ɵɵtext(2, " Student view");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_41_div_1_div_1_a_27_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_41_div_1_div_1_a_27_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r10); const list_r7 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewText(list_r7, "resources", "student_preview")); });
    i0.ɵɵelement(1, "i", 63);
    i0.ɵɵtext(2, " Student view");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_41_div_1_div_1_a_28_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_41_div_1_div_1_a_28_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r11); const list_r7 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewText(list_r7, "resources", "teacher_preview")); });
    i0.ɵɵelement(1, "i", 64);
    i0.ɵɵtext(2, " Teacher View");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_41_div_1_div_1_a_29_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_41_div_1_div_1_a_29_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r12); const list_r7 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewPage(list_r7, "resources", "teacher_preview")); });
    i0.ɵɵelement(1, "i", 64);
    i0.ɵɵtext(2, " Teacher View");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_41_div_1_div_1_a_30_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_41_div_1_div_1_a_30_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r13 = i0.ɵɵnextContext(); const list_r7 = ctx_r13.$implicit; const i_r8 = ctx_r13.index; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.editAction(i_r8, list_r7)); });
    i0.ɵɵelement(1, "i", 65);
    i0.ɵɵtext(2, " Edit");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_41_div_1_div_1_a_31_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_41_div_1_div_1_a_31_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r15); const i_r8 = i0.ɵɵnextContext().index; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.deleteAction(i_r8)); });
    i0.ɵɵelement(1, "i", 66);
    i0.ɵɵtext(2, " Delete");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_41_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41)(1, "div", 42);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_41_div_1_div_1_Template_div_click_1_listener() { const list_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.navigateToStudentView(list_r7, "resources")); });
    i0.ɵɵelementStart(2, "div", 43)(3, "div", 44);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_41_div_1_div_1_Template_div_click_3_listener() { const i_r8 = i0.ɵɵrestoreView(_r6).index; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.detailPreview(i_r8)); });
    i0.ɵɵtemplate(4, ViewAssignComponent_div_41_div_1_div_1_img_4_Template, 1, 0, "img", 45)(5, ViewAssignComponent_div_41_div_1_div_1_img_5_Template, 1, 1, "img", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 47)(7, "h4", 48)(8, "span", 49);
    i0.ɵɵtext(9);
    i0.ɵɵtemplate(10, ViewAssignComponent_div_41_div_1_div_1_small_10_Template, 2, 0, "small", 50)(11, ViewAssignComponent_div_41_div_1_div_1_small_11_Template, 2, 0, "small", 50)(12, ViewAssignComponent_div_41_div_1_div_1_small_12_Template, 2, 0, "small", 50);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "p");
    i0.ɵɵtemplate(14, ViewAssignComponent_div_41_div_1_div_1_span_14_Template, 3, 3, "span", 51)(15, ViewAssignComponent_div_41_div_1_div_1_span_15_Template, 2, 0, "span", 31)(16, ViewAssignComponent_div_41_div_1_div_1_span_16_Template, 3, 3, "span", 51);
    i0.ɵɵtext(17, "\u00A0");
    i0.ɵɵelement(18, "br");
    i0.ɵɵtemplate(19, ViewAssignComponent_div_41_div_1_div_1_span_19_Template, 6, 2, "span", 31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 52)(21, "div", 53);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_41_div_1_div_1_Template_div_click_21_listener($event) { i0.ɵɵrestoreView(_r6); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(22, "button", 54);
    i0.ɵɵtext(23, "Action ");
    i0.ɵɵelement(24, "i", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 56);
    i0.ɵɵtemplate(26, ViewAssignComponent_div_41_div_1_div_1_a_26_Template, 3, 0, "a", 57)(27, ViewAssignComponent_div_41_div_1_div_1_a_27_Template, 3, 0, "a", 57)(28, ViewAssignComponent_div_41_div_1_div_1_a_28_Template, 3, 0, "a", 57)(29, ViewAssignComponent_div_41_div_1_div_1_a_29_Template, 3, 0, "a", 57)(30, ViewAssignComponent_div_41_div_1_div_1_a_30_Template, 3, 0, "a", 57)(31, ViewAssignComponent_div_41_div_1_div_1_a_31_Template, 3, 0, "a", 57);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const list_r7 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", list_r7.profile_url == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r7.profile_url != "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", list_r7.content_name, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r7.content_format == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r7.content_format == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r7.content_format == "3");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r7.start_date != "0000-00-00" && list_r7.start_date != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r7.start_date != "0000-00-00" && list_r7.end_date != "0000-00-00" && list_r7.start_date != "" && list_r7.end_date != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r7.end_date != "0000-00-00" && list_r7.end_date != "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r7.start_time != list_r7.end_time);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", list_r7.content_format == 1 && (ctx_r2.viewType == 1 || ctx_r2.viewType == 3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r7.content_format == 3 && (ctx_r2.viewType == 1 || ctx_r2.viewType == 3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r7.content_format == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r7.content_format == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.allowClass && ctx_r2.viewType != "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.allowClass);
} }
function ViewAssignComponent_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, ViewAssignComponent_div_41_div_1_div_1_Template, 32, 16, "div", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.resourceList);
} }
function ViewAssignComponent_div_41_div_2_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 58);
} }
function ViewAssignComponent_div_41_div_2_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 59);
} if (rf & 2) {
    const list_r17 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("src", ctx_r2.sanitizer.bypassSecurityTrustResourceUrl(ctx_r2.webhost + "/" + list_r17.profile_url), i0.ɵɵsanitizeUrl);
} }
function ViewAssignComponent_div_41_div_2_div_1_small_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 60);
    i0.ɵɵtext(1, "(PDF)");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_41_div_2_div_1_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 60);
    i0.ɵɵtext(1, "(LINK)");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_41_div_2_div_1_small_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 60);
    i0.ɵɵtext(1, "(TEXT)");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_41_div_2_div_1_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r17 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, list_r17.start_date));
} }
function ViewAssignComponent_div_41_div_2_div_1_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r17 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(list_r17.start_time);
} }
function ViewAssignComponent_div_41_div_2_div_1_span_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u00A0-\u00A0");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_41_div_2_div_1_span_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r17 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, list_r17.end_date));
} }
function ViewAssignComponent_div_41_div_2_div_1_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r17 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(list_r17.end_time);
} }
function ViewAssignComponent_div_41_div_2_div_1_a_26_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_41_div_2_div_1_a_26_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r19); const list_r17 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewPage(list_r17, "resources", "student_preview")); });
    i0.ɵɵelement(1, "i", 63);
    i0.ɵɵtext(2, " Student view");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_41_div_2_div_1_a_27_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_41_div_2_div_1_a_27_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r20); const list_r17 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewText(list_r17, "resources", "student_preview")); });
    i0.ɵɵelement(1, "i", 63);
    i0.ɵɵtext(2, " Student view");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_41_div_2_div_1_a_28_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_41_div_2_div_1_a_28_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r21); const list_r17 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewText(list_r17, "resources", "teacher_preview")); });
    i0.ɵɵelement(1, "i", 64);
    i0.ɵɵtext(2, " Teacher View");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_41_div_2_div_1_a_29_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_41_div_2_div_1_a_29_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r22); const list_r17 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewPage(list_r17, "resources", "teacher_preview")); });
    i0.ɵɵelement(1, "i", 64);
    i0.ɵɵtext(2, " Teacher View");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_41_div_2_div_1_a_30_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_41_div_2_div_1_a_30_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r23); const ctx_r23 = i0.ɵɵnextContext(); const list_r17 = ctx_r23.$implicit; const i_r18 = ctx_r23.index; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.editAction(i_r18, list_r17)); });
    i0.ɵɵelement(1, "i", 65);
    i0.ɵɵtext(2, " Edit");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_41_div_2_div_1_a_31_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_41_div_2_div_1_a_31_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r25); const i_r18 = i0.ɵɵnextContext().index; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.deleteAction(i_r18)); });
    i0.ɵɵelement(1, "i", 66);
    i0.ɵɵtext(2, " Delete");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_41_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_41_div_2_div_1_Template_div_click_0_listener() { const list_r17 = i0.ɵɵrestoreView(_r16).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.navigateToStudentView(list_r17, "resources")); });
    i0.ɵɵelementStart(1, "div", 43)(2, "div", 70);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_41_div_2_div_1_Template_div_click_2_listener() { const i_r18 = i0.ɵɵrestoreView(_r16).index; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.detailPreview(i_r18)); });
    i0.ɵɵtemplate(3, ViewAssignComponent_div_41_div_2_div_1_img_3_Template, 1, 0, "img", 45)(4, ViewAssignComponent_div_41_div_2_div_1_img_4_Template, 1, 1, "img", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 71)(6, "h4", 48)(7, "span", 49);
    i0.ɵɵtext(8);
    i0.ɵɵtemplate(9, ViewAssignComponent_div_41_div_2_div_1_small_9_Template, 2, 0, "small", 50)(10, ViewAssignComponent_div_41_div_2_div_1_small_10_Template, 2, 0, "small", 50)(11, ViewAssignComponent_div_41_div_2_div_1_small_11_Template, 2, 0, "small", 50);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "p", 72);
    i0.ɵɵtemplate(13, ViewAssignComponent_div_41_div_2_div_1_span_13_Template, 3, 3, "span", 51);
    i0.ɵɵtext(14, " \u00A0");
    i0.ɵɵtemplate(15, ViewAssignComponent_div_41_div_2_div_1_span_15_Template, 2, 1, "span", 51)(16, ViewAssignComponent_div_41_div_2_div_1_span_16_Template, 2, 0, "span", 31)(17, ViewAssignComponent_div_41_div_2_div_1_span_17_Template, 3, 3, "span", 51);
    i0.ɵɵtext(18, " \u00A0");
    i0.ɵɵtemplate(19, ViewAssignComponent_div_41_div_2_div_1_span_19_Template, 2, 1, "span", 51);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 73)(21, "div", 53);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_41_div_2_div_1_Template_div_click_21_listener($event) { i0.ɵɵrestoreView(_r16); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(22, "button", 54);
    i0.ɵɵtext(23, "Action ");
    i0.ɵɵelement(24, "i", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 56);
    i0.ɵɵtemplate(26, ViewAssignComponent_div_41_div_2_div_1_a_26_Template, 3, 0, "a", 57)(27, ViewAssignComponent_div_41_div_2_div_1_a_27_Template, 3, 0, "a", 57)(28, ViewAssignComponent_div_41_div_2_div_1_a_28_Template, 3, 0, "a", 57)(29, ViewAssignComponent_div_41_div_2_div_1_a_29_Template, 3, 0, "a", 57)(30, ViewAssignComponent_div_41_div_2_div_1_a_30_Template, 3, 0, "a", 57)(31, ViewAssignComponent_div_41_div_2_div_1_a_31_Template, 3, 0, "a", 57);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const list_r17 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r17.profile_url == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r17.profile_url != "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", list_r17.content_name, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r17.content_format == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r17.content_format == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r17.content_format == "3");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r17.start_date != "0000-00-00" && list_r17.start_date != "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r17.start_time != list_r17.end_time);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r17.start_date != "0000-00-00" && list_r17.end_date != "0000-00-00" && list_r17.start_date != "" && list_r17.end_date != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r17.end_date != "0000-00-00" && list_r17.end_date != "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r17.start_time != list_r17.end_time);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", list_r17.content_format == 1 && (ctx_r2.viewType == 1 || ctx_r2.viewType == 3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r17.content_format == 3 && (ctx_r2.viewType == 1 || ctx_r2.viewType == 3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r17.content_format == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r17.content_format == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.allowClass && ctx_r2.viewType != "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.allowClass);
} }
function ViewAssignComponent_div_41_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 67);
    i0.ɵɵtemplate(1, ViewAssignComponent_div_41_div_2_div_1_Template, 32, 17, "div", 68);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.resourceList);
} }
function ViewAssignComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ViewAssignComponent_div_41_div_1_Template, 2, 1, "div", 37)(2, ViewAssignComponent_div_41_div_2_Template, 2, 1, "div", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showGrid);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.showGrid);
} }
function ViewAssignComponent_div_42_section_1_div_2_img_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 79);
} }
function ViewAssignComponent_div_42_section_1_div_2_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 59);
} if (rf & 2) {
    const list_r28 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("src", ctx_r2.sanitizer.bypassSecurityTrustResourceUrl(ctx_r2.webhost + "/" + list_r28.profile_url), i0.ɵɵsanitizeUrl);
} }
function ViewAssignComponent_div_42_section_1_div_2_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 60);
    i0.ɵɵtext(1, "(PDF)");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_1_div_2_small_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 60);
    i0.ɵɵtext(1, "(LINK)");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_1_div_2_small_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 60);
    i0.ɵɵtext(1, "(TEXT)");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_1_div_2_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r28 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, list_r28.start_date));
} }
function ViewAssignComponent_div_42_section_1_div_2_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u00A0-\u00A0");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_1_div_2_span_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r28 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, list_r28.end_date));
} }
function ViewAssignComponent_div_42_section_1_div_2_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "span", 61);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, "\u00A0-\u00A0");
    i0.ɵɵelementStart(4, "span", 61);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r28 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(list_r28.start_time);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(list_r28.end_time);
} }
function ViewAssignComponent_div_42_section_1_div_2_a_26_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_42_section_1_div_2_a_26_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r29); const list_r28 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.correctionPage(list_r28, "assignments")); });
    i0.ɵɵelement(1, "i", 80);
    i0.ɵɵtext(2, " Grading");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_1_div_2_a_27_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_42_section_1_div_2_a_27_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r30); const list_r28 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewPage(list_r28, "assignments", "student_preview")); });
    i0.ɵɵelement(1, "i", 63);
    i0.ɵɵtext(2, " Student view");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_1_div_2_a_28_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_42_section_1_div_2_a_28_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r31); const list_r28 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewText(list_r28, "assignments", "student_preview")); });
    i0.ɵɵelement(1, "i", 63);
    i0.ɵɵtext(2, " Student view");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_1_div_2_a_29_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_42_section_1_div_2_a_29_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r32); const list_r28 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.openTeacherVersionPdf(list_r28)); });
    i0.ɵɵelement(1, "i", 81);
    i0.ɵɵtext(2, " Teacher Version PDF");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_1_div_2_a_30_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_42_section_1_div_2_a_30_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r33); const list_r28 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewText(list_r28, "assignments", "teacher_preview")); });
    i0.ɵɵelement(1, "i", 64);
    i0.ɵɵtext(2, " Teacher View");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_1_div_2_a_31_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_42_section_1_div_2_a_31_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r34); const list_r28 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewPage(list_r28, "assignments", "teacher_preview")); });
    i0.ɵɵelement(1, "i", 64);
    i0.ɵɵtext(2, " Teacher View");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_1_div_2_a_32_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_42_section_1_div_2_a_32_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r35); const list_r28 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.reportDetails("Assignment", list_r28)); });
    i0.ɵɵelement(1, "i", 82);
    i0.ɵɵtext(2, " Reports");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_1_div_2_a_33_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_42_section_1_div_2_a_33_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r36); const list_r28 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.itemsReportDetails(list_r28)); });
    i0.ɵɵelement(1, "i", 83);
    i0.ɵɵtext(2, " Itemized Reports");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_1_div_2_a_34_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_42_section_1_div_2_a_34_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r37); const ctx_r37 = i0.ɵɵnextContext(); const list_r28 = ctx_r37.$implicit; const i_r39 = ctx_r37.index; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.editAction(i_r39, list_r28)); });
    i0.ɵɵelement(1, "i", 65);
    i0.ɵɵtext(2, " Edit");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_1_div_2_a_35_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_42_section_1_div_2_a_35_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r40); const i_r39 = i0.ɵɵnextContext().index; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.deleteAction(i_r39)); });
    i0.ɵɵelement(1, "i", 66);
    i0.ɵɵtext(2, " Delete");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41)(1, "div", 76)(2, "div", 43)(3, "div", 77);
    i0.ɵɵtemplate(4, ViewAssignComponent_div_42_section_1_div_2_img_4_Template, 1, 0, "img", 78)(5, ViewAssignComponent_div_42_section_1_div_2_img_5_Template, 1, 1, "img", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 47)(7, "h4", 48)(8, "span", 49);
    i0.ɵɵtext(9);
    i0.ɵɵtemplate(10, ViewAssignComponent_div_42_section_1_div_2_small_10_Template, 2, 0, "small", 50)(11, ViewAssignComponent_div_42_section_1_div_2_small_11_Template, 2, 0, "small", 50)(12, ViewAssignComponent_div_42_section_1_div_2_small_12_Template, 2, 0, "small", 50);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "p");
    i0.ɵɵtemplate(14, ViewAssignComponent_div_42_section_1_div_2_span_14_Template, 3, 3, "span", 51)(15, ViewAssignComponent_div_42_section_1_div_2_span_15_Template, 2, 0, "span", 31)(16, ViewAssignComponent_div_42_section_1_div_2_span_16_Template, 3, 3, "span", 51);
    i0.ɵɵtext(17, "\u00A0");
    i0.ɵɵelement(18, "br");
    i0.ɵɵtemplate(19, ViewAssignComponent_div_42_section_1_div_2_span_19_Template, 6, 2, "span", 31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 52)(21, "div", 53);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_42_section_1_div_2_Template_div_click_21_listener($event) { i0.ɵɵrestoreView(_r27); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(22, "button", 54);
    i0.ɵɵtext(23, "Action ");
    i0.ɵɵelement(24, "i", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 56);
    i0.ɵɵtemplate(26, ViewAssignComponent_div_42_section_1_div_2_a_26_Template, 3, 0, "a", 57)(27, ViewAssignComponent_div_42_section_1_div_2_a_27_Template, 3, 0, "a", 57)(28, ViewAssignComponent_div_42_section_1_div_2_a_28_Template, 3, 0, "a", 57)(29, ViewAssignComponent_div_42_section_1_div_2_a_29_Template, 3, 0, "a", 57)(30, ViewAssignComponent_div_42_section_1_div_2_a_30_Template, 3, 0, "a", 57)(31, ViewAssignComponent_div_42_section_1_div_2_a_31_Template, 3, 0, "a", 57)(32, ViewAssignComponent_div_42_section_1_div_2_a_32_Template, 3, 0, "a", 57)(33, ViewAssignComponent_div_42_section_1_div_2_a_33_Template, 3, 0, "a", 57)(34, ViewAssignComponent_div_42_section_1_div_2_a_34_Template, 3, 0, "a", 57)(35, ViewAssignComponent_div_42_section_1_div_2_a_35_Template, 3, 0, "a", 57);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const list_r28 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", list_r28.profile_url == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r28.profile_url != "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", list_r28.content_name, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r28.content_format == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r28.content_format == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r28.content_format == "3");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r28.start_date != "0000-00-00" && list_r28.start_date != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r28.start_date != "0000-00-00" && list_r28.end_date != "0000-00-00" && list_r28.start_date != "" && list_r28.end_date != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r28.end_date != "0000-00-00" && list_r28.end_date != "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r28.start_time != list_r28.end_time);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r2.viewType == 1 || ctx_r2.viewType == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r28.content_format == 1 && (ctx_r2.viewType == 1 || ctx_r2.viewType == 3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r28.content_format == 3 && (ctx_r2.viewType == 1 || ctx_r2.viewType == 3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r28.teacher_version_path && list_r28.teacher_version_path.length != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r28.content_format == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r28.content_format == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewType == "1" || ctx_r2.viewType == 3 && ctx_r2.allowClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewType != "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.allowClass && ctx_r2.viewType != "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.allowClass);
} }
function ViewAssignComponent_div_42_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 39)(1, "div", 75);
    i0.ɵɵlistener("cdkDropListDropped", function ViewAssignComponent_div_42_section_1_Template_div_cdkDropListDropped_1_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.droppedCorrect($event)); });
    i0.ɵɵtemplate(2, ViewAssignComponent_div_42_section_1_div_2_Template, 36, 20, "div", 40);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.resourceList);
} }
function ViewAssignComponent_div_42_section_2_div_2_img_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 79);
} }
function ViewAssignComponent_div_42_section_2_div_2_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 59);
} if (rf & 2) {
    const list_r43 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("src", ctx_r2.sanitizer.bypassSecurityTrustResourceUrl(ctx_r2.webhost + "/" + list_r43.profile_url), i0.ɵɵsanitizeUrl);
} }
function ViewAssignComponent_div_42_section_2_div_2_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 60);
    i0.ɵɵtext(1, "(PDF)");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_2_div_2_small_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 60);
    i0.ɵɵtext(1, "(LINK)");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_2_div_2_small_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 60);
    i0.ɵɵtext(1, "(TEXT)");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_2_div_2_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r43 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, list_r43.start_date));
} }
function ViewAssignComponent_div_42_section_2_div_2_span_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r43 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(list_r43.start_time);
} }
function ViewAssignComponent_div_42_section_2_div_2_span_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u00A0-\u00A0");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_2_div_2_span_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r43 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, list_r43.end_date));
} }
function ViewAssignComponent_div_42_section_2_div_2_span_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r43 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(list_r43.end_time);
} }
function ViewAssignComponent_div_42_section_2_div_2_a_27_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_42_section_2_div_2_a_27_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r44); const list_r43 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.correctionPage(list_r43, "assignments")); });
    i0.ɵɵelement(1, "i", 80);
    i0.ɵɵtext(2, " Grading");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_2_div_2_a_28_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_42_section_2_div_2_a_28_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r45); const list_r43 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewPage(list_r43, "assignments", "student_preview")); });
    i0.ɵɵelement(1, "i", 63);
    i0.ɵɵtext(2, " Student view");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_2_div_2_a_29_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_42_section_2_div_2_a_29_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r46); const list_r43 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewText(list_r43, "assignments", "student_preview")); });
    i0.ɵɵelement(1, "i", 63);
    i0.ɵɵtext(2, " Student view");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_2_div_2_a_30_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_42_section_2_div_2_a_30_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r47); const list_r43 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.openTeacherVersionPdf(list_r43)); });
    i0.ɵɵelement(1, "i", 81);
    i0.ɵɵtext(2, " Teacher Version PDF");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_2_div_2_a_31_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_42_section_2_div_2_a_31_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r48); const list_r43 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewText(list_r43, "assignments", "teacher_preview")); });
    i0.ɵɵelement(1, "i", 64);
    i0.ɵɵtext(2, " Teacher View");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_2_div_2_a_32_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_42_section_2_div_2_a_32_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r49); const list_r43 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewPage(list_r43, "assignments", "teacher_preview")); });
    i0.ɵɵelement(1, "i", 64);
    i0.ɵɵtext(2, " Teacher View");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_2_div_2_a_33_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_42_section_2_div_2_a_33_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r50); const list_r43 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.reportDetails("Assignment", list_r43)); });
    i0.ɵɵelement(1, "i", 82);
    i0.ɵɵtext(2, " Reports");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_2_div_2_a_34_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_42_section_2_div_2_a_34_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r51); const list_r43 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.itemsReportDetails(list_r43)); });
    i0.ɵɵelement(1, "i", 83);
    i0.ɵɵtext(2, " Itemized Reports");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_2_div_2_a_35_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_42_section_2_div_2_a_35_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r52); const ctx_r52 = i0.ɵɵnextContext(); const list_r43 = ctx_r52.$implicit; const i_r54 = ctx_r52.index; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.editAction(i_r54, list_r43)); });
    i0.ɵɵelement(1, "i", 65);
    i0.ɵɵtext(2, " Edit");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_2_div_2_a_36_Template(rf, ctx) { if (rf & 1) {
    const _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_42_section_2_div_2_a_36_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r55); const i_r54 = i0.ɵɵnextContext().index; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.deleteAction(i_r54)); });
    i0.ɵɵelement(1, "i", 66);
    i0.ɵɵtext(2, " Delete");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_42_section_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 86)(1, "div", 87)(2, "div", 43)(3, "div", 88);
    i0.ɵɵtemplate(4, ViewAssignComponent_div_42_section_2_div_2_img_4_Template, 1, 0, "img", 78)(5, ViewAssignComponent_div_42_section_2_div_2_img_5_Template, 1, 1, "img", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 71)(7, "h4", 48)(8, "span", 49);
    i0.ɵɵtext(9);
    i0.ɵɵtemplate(10, ViewAssignComponent_div_42_section_2_div_2_small_10_Template, 2, 0, "small", 50)(11, ViewAssignComponent_div_42_section_2_div_2_small_11_Template, 2, 0, "small", 50)(12, ViewAssignComponent_div_42_section_2_div_2_small_12_Template, 2, 0, "small", 50);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "p", 72);
    i0.ɵɵtemplate(14, ViewAssignComponent_div_42_section_2_div_2_span_14_Template, 3, 3, "span", 51);
    i0.ɵɵtext(15, " \u00A0");
    i0.ɵɵtemplate(16, ViewAssignComponent_div_42_section_2_div_2_span_16_Template, 2, 1, "span", 51)(17, ViewAssignComponent_div_42_section_2_div_2_span_17_Template, 2, 0, "span", 31)(18, ViewAssignComponent_div_42_section_2_div_2_span_18_Template, 3, 3, "span", 51);
    i0.ɵɵtext(19, " \u00A0");
    i0.ɵɵtemplate(20, ViewAssignComponent_div_42_section_2_div_2_span_20_Template, 2, 1, "span", 51);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 73)(22, "div", 53);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_42_section_2_div_2_Template_div_click_22_listener($event) { i0.ɵɵrestoreView(_r42); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(23, "button", 54);
    i0.ɵɵtext(24, "Action ");
    i0.ɵɵelement(25, "i", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 56);
    i0.ɵɵtemplate(27, ViewAssignComponent_div_42_section_2_div_2_a_27_Template, 3, 0, "a", 57)(28, ViewAssignComponent_div_42_section_2_div_2_a_28_Template, 3, 0, "a", 57)(29, ViewAssignComponent_div_42_section_2_div_2_a_29_Template, 3, 0, "a", 57)(30, ViewAssignComponent_div_42_section_2_div_2_a_30_Template, 3, 0, "a", 57)(31, ViewAssignComponent_div_42_section_2_div_2_a_31_Template, 3, 0, "a", 57)(32, ViewAssignComponent_div_42_section_2_div_2_a_32_Template, 3, 0, "a", 57)(33, ViewAssignComponent_div_42_section_2_div_2_a_33_Template, 3, 0, "a", 57)(34, ViewAssignComponent_div_42_section_2_div_2_a_34_Template, 3, 0, "a", 57)(35, ViewAssignComponent_div_42_section_2_div_2_a_35_Template, 3, 0, "a", 57)(36, ViewAssignComponent_div_42_section_2_div_2_a_36_Template, 3, 0, "a", 57);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const list_r43 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", list_r43.profile_url == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r43.profile_url != "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", list_r43.content_name, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r43.content_format == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r43.content_format == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r43.content_format == "3");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r43.start_date != "0000-00-00" && list_r43.start_date != "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r43.start_time != list_r43.end_time);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r43.start_date != "0000-00-00" && list_r43.end_date != "0000-00-00" && list_r43.start_date != "" && list_r43.end_date != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r43.end_date != "0000-00-00" && list_r43.end_date != "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r43.start_time != list_r43.end_time);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r2.viewType == 1 || ctx_r2.viewType == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r43.content_format == 1 && (ctx_r2.viewType == 1 || ctx_r2.viewType == 3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r43.content_format == 3 && (ctx_r2.viewType == 1 || ctx_r2.viewType == 3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r43.teacher_version_path && list_r43.teacher_version_path.length != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r43.content_format == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r43.content_format == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewType == "1" || ctx_r2.viewType == 3 && ctx_r2.allowClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewType != "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.allowClass && ctx_r2.viewType != "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.allowClass);
} }
function ViewAssignComponent_div_42_section_2_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 84)(1, "div", 75);
    i0.ɵɵlistener("cdkDropListDropped", function ViewAssignComponent_div_42_section_2_Template_div_cdkDropListDropped_1_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.droppedCorrect($event)); });
    i0.ɵɵtemplate(2, ViewAssignComponent_div_42_section_2_div_2_Template, 37, 21, "div", 85);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.resourceList);
} }
function ViewAssignComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ViewAssignComponent_div_42_section_1_Template, 3, 1, "section", 37)(2, ViewAssignComponent_div_42_section_2_Template, 3, 1, "section", 74);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showGrid);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.showGrid);
} }
function ViewAssignComponent_div_43_div_1_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 93);
} }
function ViewAssignComponent_div_43_div_1_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 59);
} if (rf & 2) {
    const list_r57 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("src", ctx_r2.sanitizer.bypassSecurityTrustResourceUrl(ctx_r2.webhost + "/" + list_r57.profile_url), i0.ɵɵsanitizeUrl);
} }
function ViewAssignComponent_div_43_div_1_div_1_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 60);
    i0.ɵɵtext(1, "(PDF)");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_1_div_1_small_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 60);
    i0.ɵɵtext(1, "(LINK)");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_1_div_1_small_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 60);
    i0.ɵɵtext(1, "(TEXT)");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_1_div_1_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r57 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, list_r57.start_date));
} }
function ViewAssignComponent_div_43_div_1_div_1_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u00A0-\u00A0");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_1_div_1_span_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r57 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, list_r57.end_date));
} }
function ViewAssignComponent_div_43_div_1_div_1_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "span", 61);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, "\u00A0-\u00A0");
    i0.ɵɵelementStart(4, "span", 61);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r57 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(list_r57.start_time);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(list_r57.end_time);
} }
function ViewAssignComponent_div_43_div_1_div_1_a_26_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_1_div_1_a_26_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r59); const list_r57 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.correctionPage(list_r57, "assessments")); });
    i0.ɵɵelement(1, "i", 80);
    i0.ɵɵtext(2, " Grading");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_1_div_1_a_27_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_1_div_1_a_27_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r60); const list_r57 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewPage(list_r57, "assessments", "student_preview")); });
    i0.ɵɵelement(1, "i", 63);
    i0.ɵɵtext(2, " Student view");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_1_div_1_a_28_Template(rf, ctx) { if (rf & 1) {
    const _r61 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_1_div_1_a_28_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r61); const list_r57 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewText(list_r57, "assessments", "student_preview")); });
    i0.ɵɵelement(1, "i", 63);
    i0.ɵɵtext(2, " Student view");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_1_div_1_a_29_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_1_div_1_a_29_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r62); const list_r57 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.openTeacherVersionPdf(list_r57)); });
    i0.ɵɵelement(1, "i", 81);
    i0.ɵɵtext(2, " Teacher Version PDF");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_1_div_1_a_30_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_1_div_1_a_30_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r63); const list_r57 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewText(list_r57, "assessments", "teacher_preview")); });
    i0.ɵɵelement(1, "i", 64);
    i0.ɵɵtext(2, " Teacher View");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_1_div_1_a_31_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_1_div_1_a_31_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r64); const list_r57 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewPage(list_r57, "assessments", "teacher_preview")); });
    i0.ɵɵelement(1, "i", 64);
    i0.ɵɵtext(2, " Teacher View");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_1_div_1_a_32_Template(rf, ctx) { if (rf & 1) {
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_1_div_1_a_32_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r65); const list_r57 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.reportDetails("Assessment", list_r57)); });
    i0.ɵɵelement(1, "i", 82);
    i0.ɵɵtext(2, " Reports");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_1_div_1_a_33_Template(rf, ctx) { if (rf & 1) {
    const _r66 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_1_div_1_a_33_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r66); const list_r57 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.itemsReportDetails(list_r57)); });
    i0.ɵɵelement(1, "i", 83);
    i0.ɵɵtext(2, " Itemized Reports");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_1_div_1_a_34_Template(rf, ctx) { if (rf & 1) {
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_1_div_1_a_34_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r67); const ctx_r67 = i0.ɵɵnextContext(); const list_r57 = ctx_r67.$implicit; const i_r58 = ctx_r67.index; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.editAction(i_r58, list_r57)); });
    i0.ɵɵelement(1, "i", 65);
    i0.ɵɵtext(2, " Edit");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_1_div_1_a_35_Template(rf, ctx) { if (rf & 1) {
    const _r69 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_1_div_1_a_35_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r69); const i_r58 = i0.ɵɵnextContext().index; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.deleteAction(i_r58)); });
    i0.ɵɵelement(1, "i", 66);
    i0.ɵɵtext(2, " Delete");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 90);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_1_div_1_Template_div_click_0_listener() { const list_r57 = i0.ɵɵrestoreView(_r56).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.navigateToStudentView(list_r57, "assessments")); });
    i0.ɵɵelementStart(1, "div", 91)(2, "div", 43)(3, "div", 44);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_1_div_1_Template_div_click_3_listener() { const i_r58 = i0.ɵɵrestoreView(_r56).index; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.detailPreview(i_r58)); });
    i0.ɵɵtemplate(4, ViewAssignComponent_div_43_div_1_div_1_img_4_Template, 1, 0, "img", 92)(5, ViewAssignComponent_div_43_div_1_div_1_img_5_Template, 1, 1, "img", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 47)(7, "h4", 48)(8, "span", 49);
    i0.ɵɵtext(9);
    i0.ɵɵtemplate(10, ViewAssignComponent_div_43_div_1_div_1_small_10_Template, 2, 0, "small", 50)(11, ViewAssignComponent_div_43_div_1_div_1_small_11_Template, 2, 0, "small", 50)(12, ViewAssignComponent_div_43_div_1_div_1_small_12_Template, 2, 0, "small", 50);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "p");
    i0.ɵɵtemplate(14, ViewAssignComponent_div_43_div_1_div_1_span_14_Template, 3, 3, "span", 51)(15, ViewAssignComponent_div_43_div_1_div_1_span_15_Template, 2, 0, "span", 31)(16, ViewAssignComponent_div_43_div_1_div_1_span_16_Template, 3, 3, "span", 51);
    i0.ɵɵtext(17, "\u00A0");
    i0.ɵɵelement(18, "br");
    i0.ɵɵtemplate(19, ViewAssignComponent_div_43_div_1_div_1_span_19_Template, 6, 2, "span", 31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 52)(21, "div", 53);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_1_div_1_Template_div_click_21_listener($event) { i0.ɵɵrestoreView(_r56); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(22, "button", 54);
    i0.ɵɵtext(23, "Action ");
    i0.ɵɵelement(24, "i", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 56);
    i0.ɵɵtemplate(26, ViewAssignComponent_div_43_div_1_div_1_a_26_Template, 3, 0, "a", 57)(27, ViewAssignComponent_div_43_div_1_div_1_a_27_Template, 3, 0, "a", 57)(28, ViewAssignComponent_div_43_div_1_div_1_a_28_Template, 3, 0, "a", 57)(29, ViewAssignComponent_div_43_div_1_div_1_a_29_Template, 3, 0, "a", 57)(30, ViewAssignComponent_div_43_div_1_div_1_a_30_Template, 3, 0, "a", 57)(31, ViewAssignComponent_div_43_div_1_div_1_a_31_Template, 3, 0, "a", 57)(32, ViewAssignComponent_div_43_div_1_div_1_a_32_Template, 3, 0, "a", 57)(33, ViewAssignComponent_div_43_div_1_div_1_a_33_Template, 3, 0, "a", 57)(34, ViewAssignComponent_div_43_div_1_div_1_a_34_Template, 3, 0, "a", 57)(35, ViewAssignComponent_div_43_div_1_div_1_a_35_Template, 3, 0, "a", 57);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const list_r57 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", list_r57.profile_url == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r57.profile_url != "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", list_r57.content_name, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r57.content_format == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r57.content_format == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r57.content_format == "3");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r57.start_date != "0000-00-00" && list_r57.start_date != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r57.start_date != "0000-00-00" && list_r57.end_date != "0000-00-00" && list_r57.start_date != "" && list_r57.end_date != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r57.end_date != "0000-00-00" && list_r57.end_date != "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r57.start_time != list_r57.end_time);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r2.viewType == 1 || ctx_r2.viewType == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r57.content_format == 1 && (ctx_r2.viewType == 1 || ctx_r2.viewType == 3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r57.content_format == 3 && (ctx_r2.viewType == 1 || ctx_r2.viewType == 3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r57.teacher_version_path && list_r57.teacher_version_path.length != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r57.content_format == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r57.content_format == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewType == "1" || ctx_r2.viewType == 3 && ctx_r2.allowClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewType != "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.allowClass && ctx_r2.viewType != "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.allowClass);
} }
function ViewAssignComponent_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, ViewAssignComponent_div_43_div_1_div_1_Template, 36, 20, "div", 89);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.resourceList);
} }
function ViewAssignComponent_div_43_div_2_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 93);
} }
function ViewAssignComponent_div_43_div_2_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 59);
} if (rf & 2) {
    const list_r71 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("src", ctx_r2.sanitizer.bypassSecurityTrustResourceUrl(ctx_r2.webhost + "/" + list_r71.profile_url), i0.ɵɵsanitizeUrl);
} }
function ViewAssignComponent_div_43_div_2_div_1_small_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 60);
    i0.ɵɵtext(1, "(PDF)");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_2_div_1_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 60);
    i0.ɵɵtext(1, "(LINK)");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_2_div_1_small_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 60);
    i0.ɵɵtext(1, "(TEXT)");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_2_div_1_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r71 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, list_r71.start_date));
} }
function ViewAssignComponent_div_43_div_2_div_1_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r71 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(list_r71.start_time);
} }
function ViewAssignComponent_div_43_div_2_div_1_span_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u00A0-\u00A0");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_2_div_1_span_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r71 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, list_r71.end_date));
} }
function ViewAssignComponent_div_43_div_2_div_1_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r71 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(list_r71.end_time);
} }
function ViewAssignComponent_div_43_div_2_div_1_a_26_Template(rf, ctx) { if (rf & 1) {
    const _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_2_div_1_a_26_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r73); const list_r71 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.correctionPage(list_r71, "assessments")); });
    i0.ɵɵelement(1, "i", 80);
    i0.ɵɵtext(2, " Grading");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_2_div_1_a_27_Template(rf, ctx) { if (rf & 1) {
    const _r74 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_2_div_1_a_27_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r74); const list_r71 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewPage(list_r71, "assessments", "student_preview")); });
    i0.ɵɵelement(1, "i", 63);
    i0.ɵɵtext(2, " Student view");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_2_div_1_a_28_Template(rf, ctx) { if (rf & 1) {
    const _r75 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_2_div_1_a_28_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r75); const list_r71 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewText(list_r71, "assessments", "student_preview")); });
    i0.ɵɵelement(1, "i", 63);
    i0.ɵɵtext(2, " Student view");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_2_div_1_a_29_Template(rf, ctx) { if (rf & 1) {
    const _r76 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_2_div_1_a_29_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r76); const list_r71 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.openTeacherVersionPdf(list_r71)); });
    i0.ɵɵelement(1, "i", 81);
    i0.ɵɵtext(2, " Teacher Version PDF");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_2_div_1_a_30_Template(rf, ctx) { if (rf & 1) {
    const _r77 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_2_div_1_a_30_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r77); const list_r71 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewText(list_r71, "assessments", "teacher_preview")); });
    i0.ɵɵelement(1, "i", 64);
    i0.ɵɵtext(2, " Teacher View");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_2_div_1_a_31_Template(rf, ctx) { if (rf & 1) {
    const _r78 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_2_div_1_a_31_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r78); const list_r71 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.PreviewPage(list_r71, "assessments", "teacher_preview")); });
    i0.ɵɵelement(1, "i", 64);
    i0.ɵɵtext(2, " Teacher View");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_2_div_1_a_32_Template(rf, ctx) { if (rf & 1) {
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_2_div_1_a_32_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r79); const list_r71 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.reportDetails("Assessment", list_r71)); });
    i0.ɵɵelement(1, "i", 82);
    i0.ɵɵtext(2, " Reports");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_2_div_1_a_33_Template(rf, ctx) { if (rf & 1) {
    const _r80 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_2_div_1_a_33_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r80); const list_r71 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.itemsReportDetails(list_r71)); });
    i0.ɵɵelement(1, "i", 83);
    i0.ɵɵtext(2, " Itemized Reports");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_2_div_1_a_34_Template(rf, ctx) { if (rf & 1) {
    const _r81 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_2_div_1_a_34_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r81); const ctx_r81 = i0.ɵɵnextContext(); const list_r71 = ctx_r81.$implicit; const i_r72 = ctx_r81.index; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.editAction(i_r72, list_r71)); });
    i0.ɵɵelement(1, "i", 65);
    i0.ɵɵtext(2, " Edit");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_2_div_1_a_35_Template(rf, ctx) { if (rf & 1) {
    const _r83 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_2_div_1_a_35_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r83); const i_r72 = i0.ɵɵnextContext().index; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.deleteAction(i_r72)); });
    i0.ɵɵelement(1, "i", 66);
    i0.ɵɵtext(2, " Delete");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_div_43_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r70 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 95);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_2_div_1_Template_div_click_0_listener() { const list_r71 = i0.ɵɵrestoreView(_r70).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.navigateToStudentView(list_r71, "assessments")); });
    i0.ɵɵelementStart(1, "div", 43)(2, "div", 70);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_2_div_1_Template_div_click_2_listener() { const i_r72 = i0.ɵɵrestoreView(_r70).index; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.detailPreview(i_r72)); });
    i0.ɵɵtemplate(3, ViewAssignComponent_div_43_div_2_div_1_img_3_Template, 1, 0, "img", 92)(4, ViewAssignComponent_div_43_div_2_div_1_img_4_Template, 1, 1, "img", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 71)(6, "h4", 48)(7, "span", 49);
    i0.ɵɵtext(8);
    i0.ɵɵtemplate(9, ViewAssignComponent_div_43_div_2_div_1_small_9_Template, 2, 0, "small", 50)(10, ViewAssignComponent_div_43_div_2_div_1_small_10_Template, 2, 0, "small", 50)(11, ViewAssignComponent_div_43_div_2_div_1_small_11_Template, 2, 0, "small", 50);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "p", 72);
    i0.ɵɵtemplate(13, ViewAssignComponent_div_43_div_2_div_1_span_13_Template, 3, 3, "span", 51);
    i0.ɵɵtext(14, " \u00A0");
    i0.ɵɵtemplate(15, ViewAssignComponent_div_43_div_2_div_1_span_15_Template, 2, 1, "span", 51)(16, ViewAssignComponent_div_43_div_2_div_1_span_16_Template, 2, 0, "span", 31)(17, ViewAssignComponent_div_43_div_2_div_1_span_17_Template, 3, 3, "span", 51);
    i0.ɵɵtext(18, " \u00A0");
    i0.ɵɵtemplate(19, ViewAssignComponent_div_43_div_2_div_1_span_19_Template, 2, 1, "span", 51);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 73)(21, "div", 53);
    i0.ɵɵlistener("click", function ViewAssignComponent_div_43_div_2_div_1_Template_div_click_21_listener($event) { i0.ɵɵrestoreView(_r70); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(22, "button", 54);
    i0.ɵɵtext(23, "Action ");
    i0.ɵɵelement(24, "i", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 56);
    i0.ɵɵtemplate(26, ViewAssignComponent_div_43_div_2_div_1_a_26_Template, 3, 0, "a", 57)(27, ViewAssignComponent_div_43_div_2_div_1_a_27_Template, 3, 0, "a", 57)(28, ViewAssignComponent_div_43_div_2_div_1_a_28_Template, 3, 0, "a", 57)(29, ViewAssignComponent_div_43_div_2_div_1_a_29_Template, 3, 0, "a", 57)(30, ViewAssignComponent_div_43_div_2_div_1_a_30_Template, 3, 0, "a", 57)(31, ViewAssignComponent_div_43_div_2_div_1_a_31_Template, 3, 0, "a", 57)(32, ViewAssignComponent_div_43_div_2_div_1_a_32_Template, 3, 0, "a", 57)(33, ViewAssignComponent_div_43_div_2_div_1_a_33_Template, 3, 0, "a", 57)(34, ViewAssignComponent_div_43_div_2_div_1_a_34_Template, 3, 0, "a", 57)(35, ViewAssignComponent_div_43_div_2_div_1_a_35_Template, 3, 0, "a", 57);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const list_r71 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r71.profile_url == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r71.profile_url != "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", list_r71.content_name, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r71.content_format == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r71.content_format == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r71.content_format == "3");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r71.start_date != "0000-00-00" && list_r71.start_date != "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r71.start_time != list_r71.end_time);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r71.start_date != "0000-00-00" && list_r71.end_date != "0000-00-00" && list_r71.start_date != "" && list_r71.end_date != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r71.end_date != "0000-00-00" && list_r71.end_date != "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r71.start_time != list_r71.end_time);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r2.viewType == 1 || ctx_r2.viewType == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r71.content_format == 1 && (ctx_r2.viewType == 1 || ctx_r2.viewType == 3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r71.content_format == 3 && (ctx_r2.viewType == 1 || ctx_r2.viewType == 3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r71.teacher_version_path && list_r71.teacher_version_path.length != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r71.content_format == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r71.content_format == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewType == "1" || ctx_r2.viewType == 3 && ctx_r2.allowClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewType != "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.allowClass && ctx_r2.viewType != "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.allowClass);
} }
function ViewAssignComponent_div_43_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 67);
    i0.ɵɵtemplate(1, ViewAssignComponent_div_43_div_2_div_1_Template, 36, 21, "div", 94);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.resourceList);
} }
function ViewAssignComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ViewAssignComponent_div_43_div_1_Template, 2, 1, "div", 37)(2, ViewAssignComponent_div_43_div_2_Template, 2, 1, "div", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showGrid);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.showGrid);
} }
function ViewAssignComponent_ng_template_44_img_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 106);
} }
function ViewAssignComponent_ng_template_44_img_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 107);
} }
function ViewAssignComponent_ng_template_44_img_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 108);
} }
function ViewAssignComponent_ng_template_44_img_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 109);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r2.sanitizer.bypassSecurityTrustResourceUrl(ctx_r2.webhost + "/" + ctx_r2.profileurl), i0.ɵɵsanitizeUrl);
} }
function ViewAssignComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    const _r84 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 96)(1, "p")(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "i", 97);
    i0.ɵɵlistener("click", function ViewAssignComponent_ng_template_44_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r84); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 98)(6, "div", 9)(7, "div", 99)(8, "div", 100);
    i0.ɵɵtemplate(9, ViewAssignComponent_ng_template_44_img_9_Template, 1, 0, "img", 101)(10, ViewAssignComponent_ng_template_44_img_10_Template, 1, 0, "img", 102)(11, ViewAssignComponent_ng_template_44_img_11_Template, 1, 0, "img", 103)(12, ViewAssignComponent_ng_template_44_img_12_Template, 1, 1, "img", 104);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 99)(14, "div", 105)(15, "p");
    i0.ɵɵtext(16, "Created by ");
    i0.ɵɵelement(17, "br");
    i0.ɵɵelementStart(18, "b", 60);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "p");
    i0.ɵɵtext(21, "Grade ");
    i0.ɵɵelement(22, "br");
    i0.ɵɵelementStart(23, "b", 60);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "p");
    i0.ɵɵtext(26, "Subject ");
    i0.ɵɵelement(27, "br");
    i0.ɵɵelementStart(28, "b", 60);
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "p");
    i0.ɵɵtext(31, "Tags ");
    i0.ɵɵelement(32, "br");
    i0.ɵɵelementStart(33, "b", 60);
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(35, "div", 9)(36, "div", 99)(37, "p");
    i0.ɵɵtext(38, "No of Questions ");
    i0.ɵɵelement(39, "br");
    i0.ɵɵelementStart(40, "b", 60);
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(42, "div", 99)(43, "p");
    i0.ɵɵtext(44, "Status ");
    i0.ɵɵelement(45, "br");
    i0.ɵɵelementStart(46, "b", 60);
    i0.ɵɵtext(47);
    i0.ɵɵelementEnd()()()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.contentname);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r2.profileurl == "" && ctx_r2.contentType == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.profileurl == "" && ctx_r2.contentType == 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.profileurl == "" && ctx_r2.contentType == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.profileurl != "");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r2.createdby);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.gradename);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.subjectname);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.tags);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r2.noofquestions);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.details);
} }
function ViewAssignComponent_46_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r85 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 96)(1, "h4", 110);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 98)(4, "div", 8)(5, "div", 9)(6, "div", 111)(7, "h5", 112);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(9, "div", 113)(10, "button", 114);
    i0.ɵɵlistener("click", function ViewAssignComponent_46_ng_template_0_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r85); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.update(ctx_r2.del)); });
    i0.ɵɵtext(11, "Delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 114);
    i0.ɵɵlistener("click", function ViewAssignComponent_46_ng_template_0_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r85); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵtext(13, "Cancel");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Delete ", ctx_r2.type == "resources" ? "Resource" : ctx_r2.type == "assignments" ? "Assignment" : "Assessment", "");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Are you sure you want to delete this ", ctx_r2.type == "resources" ? "resource" : ctx_r2.type == "assignments" ? "assignment" : "assessment", "");
} }
function ViewAssignComponent_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ViewAssignComponent_46_ng_template_0_Template, 14, 2, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
} }
function ViewAssignComponent_ng_template_47_div_12_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 130);
    i0.ɵɵtext(1, "Release scores and correct answers after each question");
    i0.ɵɵelementEnd();
} }
function ViewAssignComponent_ng_template_47_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r87 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 124)(1, "div", 117)(2, "label");
    i0.ɵɵtext(3, "Release Score");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 117)(5, "select", 125);
    i0.ɵɵlistener("change", function ViewAssignComponent_ng_template_47_div_12_Template_select_change_5_listener($event) { i0.ɵɵrestoreView(_r87); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.releaseScoreFilter($event)); });
    i0.ɵɵelementStart(6, "option", 126);
    i0.ɵɵtext(7, "Select Response type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "option", 127);
    i0.ɵɵtext(9, "Do not release scores or response");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "option", 128);
    i0.ɵɵtext(11, "Release scores and correct answers after the test is complete");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, ViewAssignComponent_ng_template_47_div_12_option_12_Template, 2, 0, "option", 129);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngIf", ctx_r2.contentFormat == "3");
} }
function ViewAssignComponent_ng_template_47_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 131)(1, "p", 132);
    i0.ɵɵtext(2, "Auto score release is not applicable for this content");
    i0.ɵɵelementEnd()();
} }
function ViewAssignComponent_ng_template_47_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r88 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 116)(1, "div", 133)(2, "div", 134)(3, "label");
    i0.ɵɵtext(4, "Start Date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 134)(6, "input", 135, 6);
    i0.ɵɵlistener("dateChanged", function ViewAssignComponent_ng_template_47_div_14_Template_input_dateChanged_6_listener($event) { i0.ɵɵrestoreView(_r88); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onDateChanged($event)); })("click", function ViewAssignComponent_ng_template_47_div_14_Template_input_click_6_listener() { i0.ɵɵrestoreView(_r88); const dp_r89 = i0.ɵɵreference(7); return i0.ɵɵresetView(dp_r89.toggleCalendar()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 136)(9, "div", 134)(10, "label");
    i0.ɵɵtext(11, "Start Time");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 134)(13, "ngb-timepicker", 137);
    i0.ɵɵtwoWayListener("ngModelChange", function ViewAssignComponent_ng_template_47_div_14_Template_ngb_timepicker_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r88); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.fromTime, $event) || (ctx_r2.fromTime = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function ViewAssignComponent_ng_template_47_div_14_Template_ngb_timepicker_ngModelChange_13_listener() { i0.ɵɵrestoreView(_r88); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.checkTime()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 133)(15, "div", 134)(16, "label");
    i0.ɵɵtext(17, "End Date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 134)(19, "input", 138, 7);
    i0.ɵɵlistener("click", function ViewAssignComponent_ng_template_47_div_14_Template_input_click_19_listener() { i0.ɵɵrestoreView(_r88); const dp1_r90 = i0.ɵɵreference(20); return i0.ɵɵresetView(dp1_r90.toggleCalendar()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "div", 136)(22, "div", 134)(23, "label");
    i0.ɵɵtext(24, "End Time");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 134)(26, "ngb-timepicker", 137);
    i0.ɵɵtwoWayListener("ngModelChange", function ViewAssignComponent_ng_template_47_div_14_Template_ngb_timepicker_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r88); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.toTime, $event) || (ctx_r2.toTime = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function ViewAssignComponent_ng_template_47_div_14_Template_ngb_timepicker_ngModelChange_26_listener() { i0.ɵɵrestoreView(_r88); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.checkTime()); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("options", ctx_r2.myDpOptions1);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.fromTime);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(10, _c10))("meridian", ctx_r2.meridian)("spinners", ctx_r2.spinner);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("options", ctx_r2.myDpOptions2);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.toTime);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(11, _c10))("meridian", ctx_r2.meridian)("spinners", ctx_r2.spinner);
} }
function ViewAssignComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    const _r86 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 96)(1, "h4", 60);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 98)(4, "form", 115)(5, "div")(6, "div", 116)(7, "div", 117)(8, "label");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 117);
    i0.ɵɵelement(11, "input", 118);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(12, ViewAssignComponent_ng_template_47_div_12_Template, 13, 1, "div", 119)(13, ViewAssignComponent_ng_template_47_div_13_Template, 3, 0, "div", 120)(14, ViewAssignComponent_ng_template_47_div_14_Template, 27, 12, "div", 121);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 113)(16, "button", 122);
    i0.ɵɵlistener("click", function ViewAssignComponent_ng_template_47_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r86); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.contentClose()); });
    i0.ɵɵtext(17, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 123);
    i0.ɵɵlistener("click", function ViewAssignComponent_ng_template_47_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r86); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editContentDetails(ctx_r2.edit)); });
    i0.ɵɵtext(19, "Submit");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.contentname);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formGroup", ctx_r2.contentForm);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.viewType == "2" ? "Content Folder Name" : "Class Name");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("value", ctx_r2.className);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.allowScore);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.checkAutoRelease);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewType != "2");
} }
function ViewAssignComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    const _r91 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 96)(1, "h4", 139);
    i0.ɵɵtext(2, "Report");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 140);
    i0.ɵɵlistener("click", function ViewAssignComponent_ng_template_49_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r91); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 98);
    i0.ɵɵelement(5, "app-missed-work-report", 141);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("classShow", true)("showContent", ctx_r2.selectContent)("studentView", false)("timeView", false)("contentNameValue", ctx_r2.contentNameValue);
} }
function ViewAssignComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    const _r92 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 96)(1, "h4", 139);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "i", 140);
    i0.ɵɵlistener("click", function ViewAssignComponent_ng_template_51_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r92); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 98);
    i0.ɵɵelement(6, "app-items-report", 142);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(3, 4, ctx_r2.reportData.content_name), " - Report");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("showContent", "other")("studentView", false)("timeView", true);
} }
function ViewAssignComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    const _r93 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 96)(1, "h4", 139);
    i0.ɵɵtext(2, "Teacher Version");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 140);
    i0.ɵɵlistener("click", function ViewAssignComponent_ng_template_53_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r93); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 98);
    i0.ɵɵelement(5, "pdf-viewer", 143);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("src", ctx_r2.pdfTeacherVersion);
} }
export class ViewAssignComponent {
    constructor(auth, assessment, router, formBuilder, route, newSubject, sanitizer, config, modalService, classService, datePipe, toastr, common, commondata, creatorService) {
        this.auth = auth;
        this.assessment = assessment;
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.newSubject = newSubject;
        this.sanitizer = sanitizer;
        this.config = config;
        this.modalService = modalService;
        this.classService = classService;
        this.datePipe = datePipe;
        this.toastr = toastr;
        this.common = common;
        this.commondata = commondata;
        this.creatorService = creatorService;
        this.setDate = new Date().toLocaleString('en-US', { timeZone: timeZone.location });
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getMonth() + 1,
                day: new Date(this.setDate).getDate() != 1 ? new Date().getDate() - 1 : -1,
            },
        };
        this.myDpOptions2 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getMonth() + 1,
                day: new Date(this.setDate).getDate() != 1 ? new Date().getDate() - 1 : -1,
            },
        };
        this.teacherType = '1';
        this.pdfTeacherVersion = [];
        this.checkAutoRelease = true;
        this.content_id = '';
        this.contentFormat = '';
        this.roleId = this.auth.getRoleId();
        this.contentForm = this.formBuilder.group({
            startdate: [''],
            enddate: '',
            releaseScore: ['0']
        });
        this.webhost = this.config.getimgUrl();
        this.route.params.forEach((params) => {
            this.viewType = params.id;
        });
        this.meridian = true;
        this.spinner = false;
        this.allowSelect = true;
        this.newSubject.allowSchoolChange(this.allowSelect);
        if (this.viewType == '1' || this.viewType == '3') {
            this.choosedData = JSON.parse(this.auth.getSessionData('card-data'));
            this.className = this.choosedData[0].class_name;
            this.typeName = 'Class Name';
            this.classid = this.choosedData[0].class_id;
        }
        else if (this.viewType == '2') {
            this.choosedData = JSON.parse(this.auth.getSessionData('classbatch'));
            this.className = this.choosedData.batch_name;
            this.typeName = 'Content Folder Name';
        }
        if (this.auth.getSessionData('return')) {
            const typ = this.auth.getSessionData('return');
            if (typ == 'assessments') {
                this.classList(3);
            }
            else if (typ == 'assignments') {
                this.classList(2);
            }
            else if (typ == 'resources') {
                this.classList(1);
            }
            this.auth.removeSessionData('return');
        }
        else {
            this.classList(2);
        }
        this.schoolId = JSON.parse(this.auth.getSessionData('rista_data1'));
        if (this.auth.getRoleId() == '4' && this.schoolId.individual_teacher == '0') {
            this.allowClass = this.schoolId.permissions[6].permission[3].status == 1;
        }
        else {
            this.allowClass = true;
        }
    }
    ngOnInit() {
        this.commondata.showLoader(false);
        this.listView(2);
    }
    ngOnDestroy() {
        // this.auth.removeSessionData('class-curriculum');
    }
    droppedCorrect(event) {
        const control = this.resourceList;
        moveItemInArray(control, event.previousIndex, event.currentIndex);
    }
    classList(id) {
        this.viewtypehighlight = '2';
        this.dueButton = 'In Progress';
        if (id == '1') {
            this.type = 'resources';
            this.viewType == '1' || this.viewType == '3' ? this.viewResource() : this.viewBatchResource();
        }
        else if (id == '2') {
            this.type = 'assignments';
            this.viewType == '1' || this.viewType == '3' ? this.viewAssignment() : this.viewBatchAssignment();
        }
        else if (id == '3') {
            this.type = 'assessments';
            this.viewType == '1' || this.viewType == '3' ? this.viewAssessment() : this.viewBatchAssessment();
        }
    }
    typeSelection(id) {
        this.viewtypehighlight = id;
        if (id == '0') {
            this.dueButton = 'All';
        }
        else if (id == '1') {
            this.dueButton = 'Upcoming';
        }
        else if (id == '2') {
            this.dueButton = 'In Progress';
        }
        else {
            this.dueButton = 'Completed';
        }
        if (this.type == 'resources') {
            this.viewType == '1' || this.viewType == '3' ? this.viewResource() : this.viewBatchResource();
        }
        else if (this.type == 'assignments') {
            this.viewType == '1' || this.viewType == '3' ? this.viewAssignment() : this.viewBatchAssignment();
        }
        else if (this.type == 'assessments') {
            this.viewType == '1' || this.viewType == '3' ? this.viewAssessment() : this.viewBatchAssessment();
        }
    }
    onSave() {
        this.modalRef.close();
        this.auth.removeSessionData('Individual-Class-Report');
    }
    navigateToStudentView(list, type) {
        console.log(list, 'click happens');
        if (this.viewType == '1' || this.viewType == '3') {
            if (list.content_format == '1') {
                this.PreviewPage(list, type, 'student_preview');
            }
            else {
                this.PreviewText(list, type, 'student_preview');
            }
        }
    }
    upload(type) {
        this.auth.setSessionData('resourceAccess', true);
        this.auth.setSessionData('allowCurriculum', '1');
        this.auth.setSessionData('return', type);
        this.auth.setSessionData('batchassign', this.viewType);
        this.auth.setSessionData('assignedForm', this.viewType == '2' ? 'content-Folder' : 'class');
        if (type == 'resources') {
            this.viewType == '1' || this.viewType == '3' ? this.viewResource() : this.viewBatchResource();
            this.auth.setSessionData('contentType', 1);
        }
        else if (type == 'assignments') {
            this.viewType == '1' || this.viewType == '3' ? this.viewAssignment() : this.viewBatchAssignment();
            this.auth.setSessionData('contentType', 2);
        }
        else if (type == 'assessments') {
            this.viewType == '1' || this.viewType == '3' ? this.viewAssessment() : this.viewBatchAssessment();
            this.auth.setSessionData('contentType', 3);
        }
        let data = JSON.parse(this.auth.getSessionData(SessionConstants.non_directcontentSearch));
        data.forEach((items) => {
            if (items.school_id == this.auth.getSessionData('school_id')) {
                items.libary = this.auth.getSessionData('contentType');
            }
            else {
                const contentData = {
                    contentName: '',
                    extact_Search: false,
                    libary: this.auth.getSessionData('contentType'),
                    content_userid: '0',
                    sortFilter: '0',
                    type_id: 'list',
                    grade_id: [],
                    subject_id: [],
                    tag_id: [],
                    selectAuthored: '',
                    selectDraft: '',
                    school_id: this.auth.getSessionData('school_id')
                };
                data.push(contentData);
            }
            data = data.filter((test, index, array) => index === array.findIndex((findTest) => findTest.school_id === test.school_id));
            console.log(data, 'data');
            this.auth.setSessionData(SessionConstants.non_directcontentSearch, JSON.stringify(data));
        });
        this.router.navigate(['/repository/content-home']);
    }
    backAction() {
        if (this.viewType == '1') {
            this.enterList();
        }
        else if (this.viewType == '2') {
            this.router.navigate(['/classroom/list-classroom']);
        }
        else if (this.viewType == '3') {
            this.router.navigate(['/class/list-class']);
        }
    }
    enterList() {
        if (this.choosedData[0].grade == '') {
            this.grade = [];
        }
        else {
            this.grade = [this.choosedData[0].grade];
        }
        this.commondata.showLoader(true);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.choosedData[0].school_id,
            class_id: this.choosedData[0].class_id,
            grade: this.grade
        };
        this.classService.classDetails(data).subscribe((successData) => {
            this.enterListSuccess(successData);
        }, (error) => {
            this.enterListFailure(error);
        });
    }
    enterListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.detailData = successData.ResponseObject;
            this.auth.setSessionData('studentlist', JSON.stringify(this.detailData[0].students));
            this.auth.setSessionData('studentlist1', JSON.stringify(this.detailData[0].students));
            this.auth.setSessionData('card-data', JSON.stringify(this.detailData));
            if (this.roleId == '4') {
                this.teacherType = this.auth.getSessionData('teacher_type');
            }
            else {
                this.teacherType = '1';
            }
            let classReturn;
            classReturn = this.auth.getSessionData('class-curriculum');
            console.log(classReturn, 'classreturn');
            console.log(classReturn == 'true', 'classreturn');
            if (classReturn == 'true') {
                // this.router.navigate(['/class/create-class/edit']);
                if (this.detailData[0].classDate_status == '2' || this.detailData[0].classDate_status == '5') {
                    if (this.allowClass == false) {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        this.auth.setSessionData('readonly_data', 'true');
                    }
                    else {
                        this.auth.removeSessionData('readonly_startdate');
                        this.auth.removeSessionData('readonly_data');
                    }
                    if (this.detailData[0].class_status != '1') {
                        this.router.navigate(['/class/create-class/edit']);
                    }
                    else {
                        this.router.navigate(['/class/create-class/edit']);
                        this.auth.setSessionData('editclass', JSON.stringify(this.detailData));
                        this.auth.setSessionData('updatedStudent', 1);
                    }
                }
                else if (this.detailData[0].classDate_status == '4' && this.detailData[0].class_status == '0' && this.roleId != '2') {
                    this.router.navigate(['/class/list-class']);
                }
                else if (this.detailData[0].classDate_status == '4' && (this.detailData[0].class_status == '1' || this.roleId == '2')) {
                    console.log('1', 'enter logic');
                    if (this.allowClass == false) {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        this.auth.setSessionData('readonly_data', 'true');
                    }
                    else {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        this.auth.setSessionData('classView', false);
                        console.log('2', 'enter complete class');
                    }
                    this.router.navigate(['/class/create-class/addEdit']);
                    this.auth.setSessionData('editclass', JSON.stringify(this.detailData));
                    this.auth.setSessionData('updatedStudent', 1);
                }
                else if (this.detailData[0].classDate_status == '3') {
                    if (this.detailData[0].class_status == '1') {
                        this.auth.removeSessionData('readonly_startdate');
                        this.auth.removeSessionData('readonly_data');
                    }
                    else {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        if (this.auth.getRoleId() == '4' && this.teacherType == '0') {
                            this.auth.setSessionData('readonly_data', 'true');
                        }
                        else {
                            this.auth.removeSessionData('readonly_data');
                        }
                    }
                    this.router.navigate(['/class/create-class/edit']);
                }
            }
            else {
                this.auth.setSessionData('classView', true);
                this.router.navigate(['/class/list-class']);
            }
        }
    }
    enterListFailure(error) {
        console.log(error, 'error');
    }
    detailPreview(data) {
        this.modalRef = this.modalService.open(this.addDetails, { size: 'lg', backdrop: 'static' });
        this.detailpreviewlist(data);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    deleteAction(id) {
        this.del = id;
        this.modalRef = this.modalService.open(this.deleteContent, { size: 'md', backdrop: 'static' });
        if (this.type == 'resources') {
            this.auth.setSessionData('resourceReroute', 1);
        }
        else if (this.type == 'assignments') {
            this.auth.setSessionData('resourceReroute', 2);
        }
        else if (this.type == 'assessments') {
            this.auth.setSessionData('resourceReroute', 3);
        }
    }
    onDateChanged(event) {
        this.myDpOptions2 = {};
        this.myDpOptions2 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: event.singleDate.date.year,
                month: event.singleDate.date.month,
                day: event.singleDate.date.day - 1,
            },
        };
    }
    editAction(id, data) {
        console.log(data, 'data');
        this.edit = id;
        this.contentname = data.content_name;
        const stTime1 = data.start_time.replace(' ', ':').split(':');
        if (parseInt(stTime1[0]) < 12 && stTime1[2] != 'AM') {
            stTime1[0] = parseInt(stTime1[0]) + 12;
            const stObject1 = {
                hour: parseInt(stTime1[0]), minute: parseInt(stTime1[1]), second: 0
            };
            this.fromTime = stObject1;
        }
        else {
            let newstart = stTime1[0];
            if (stTime1[2] == 'AM') {
                if (newstart == 12) {
                    stTime1[0] = 0;
                }
                else {
                    newstart = stTime1[0];
                }
            }
            else if (stTime1[2] == 'PM') {
                if (newstart == 12) {
                    stTime1[0] = 12;
                }
                else {
                    newstart = stTime1[0];
                }
            }
            const stObject2 = {
                hour: parseInt(stTime1[0]), minute: parseInt(stTime1[1]), second: 0
            };
            this.fromTime = stObject2;
        }
        const etTime1 = data.end_time.replace(' ', ':').split(':');
        if (parseInt(etTime1[0]) < 12 && etTime1[2] != 'AM') {
            etTime1[0] = parseInt(etTime1[0]) + 12;
            const etObject1 = {
                hour: parseInt(etTime1[0]), minute: parseInt(etTime1[1]), second: 0
            };
            this.toTime = etObject1;
        }
        else {
            const etObject2 = {
                hour: parseInt(etTime1[0]), minute: parseInt(etTime1[1]), second: 0
            };
            this.toTime = etObject2;
        }
        if (data.start_date != '0000-00-00') {
            const sd = data.start_date.split('-');
            const sdObject = { isRange: false, singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) }, dateRange: null };
            this.contentForm.controls.startdate.patchValue(sdObject);
        }
        else {
            this.contentForm.controls.startdate.patchValue(null);
        }
        if (data.end_date != '0000-00-00') {
            const sd = data.end_date.split('-');
            const sdObject = { isRange: false, singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) }, dateRange: null };
            this.contentForm.controls.enddate.patchValue(sdObject);
        }
        else {
            this.contentForm.controls.enddate.patchValue(null);
        }
        // this.contentType = data.content_type;
        // this.releaseGrade = data.allow_autograde;
        // this.checkQuestion = data.without_question;
        this.contentForm.controls.releaseScore.patchValue(data.auto_review && data.auto_review != '' ? data.auto_review : '0');
        this.content_id = data.content_id;
        this.allowScore = data.allow_autograde == '1' && this.type != 'resources' && data.without_question != 1;
        this.modalRef = this.modalService.open(this.addAssign, { size: 'lg', backdrop: 'static' });
        if (this.type == 'resources') {
            this.auth.setSessionData('resourceReload', 1);
        }
        else if (this.type == 'assignments') {
            this.auth.setSessionData('resourceReload', 2);
        }
        else if (this.type == 'assessments') {
            this.auth.setSessionData('resourceReload', 3);
        }
    }
    releaseScoreFilter(event) {
        this.checkAutoRelease = true;
        if (event.target.value == '1') {
            this.releaseScoreCheck();
        }
    }
    releaseScoreCheck() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.content_id
        };
        this.creatorService.releaseScoreCheck(data).subscribe((successData) => {
            this.releaseCheckSuccess(successData);
        }, (error) => {
            console.error(error, 'error_studentList');
        });
    }
    releaseCheckSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(successData, 'check success');
        }
        else {
            this.checkAutoRelease = false;
            setTimeout(() => {
                this.contentForm.controls.releaseScore.patchValue('0');
                this.checkAutoRelease = true;
            }, 3000);
        }
    }
    checkTime() {
        if (this.fromTime == undefined || this.toTime == undefined) {
            this.timeErr = true;
        }
        else {
            const fromTime = this.fromTime.hour * 60;
            const fullFromTime = fromTime + this.fromTime.minute;
            const toTime = this.toTime.hour * 60;
            const fulltoTime = toTime + this.toTime.minute;
            if (fulltoTime > fullFromTime) {
                this.timeErr = false;
            }
            else {
                this.timeErr = true;
            }
        }
        return this.timeErr;
    }
    close() {
        this.modalRef.close();
    }
    contentClose() {
        this.fromTime = '';
        this.toTime = '';
        this.contentname = '';
        this.modalRef.close();
    }
    dateDifferent() {
        if (this.contentForm.controls.startdate.value != null && this.contentForm.controls.enddate.value != null) {
            const startdate = this.datePipe.transform(this.contentForm.controls.startdate.value.singleDate.jsDate, 'yyyy-MM-dd');
            const st = startdate.split('-');
            const endDate = this.datePipe.transform(this.contentForm.controls.enddate.value.singleDate.jsDate, 'yyyy-MM-dd');
            const et = endDate.split('-');
            if (st[0] == et[0]) {
                if (st[1] == et[1]) {
                    this.dateValidation = st[2] <= et[2];
                }
                else if (st[1] > et[1]) {
                    this.dateValidation = false;
                }
                else {
                    this.dateValidation = true;
                }
            }
            else {
                this.dateValidation = true;
            }
        }
        else {
            this.dateValidation = true;
        }
    }
    openTeacherVersionPdf(data) {
        let pdf = this.common.convertBase64(data.teacher_version_path);
        this.pdfTeacherVersion = this.webhost + '/' + pdf[0].original_image_url;
        this.modalRef = this.modalService.open(this.teacherVersion, { size: 'xl' });
    }
    editContentDetails(id) {
        this.dateDifferent();
        if (this.dateValidation == true) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                content_id: this.resourceList[id].content_id,
                class_id: this.classid,
                start_time: this.fromTime == null ? '' : this.fromTime,
                end_time: this.toTime == null ? '' : this.toTime,
                class_content_id: this.resourceList[id].class_content_id,
                auto_review: this.contentForm.controls.releaseScore.value,
                start_date: this.contentForm.controls.startdate.value == null ? '' : this.datePipe.transform(this.contentForm.controls.startdate.value.singleDate.jsDate, 'yyyy-MM-dd'),
                end_date: this.contentForm.controls.enddate.value == null ? '' : this.datePipe.transform(this.contentForm.controls.enddate.value.singleDate.jsDate, 'yyyy-MM-dd'),
            };
            this.classService.editContentDetail(data).subscribe((successData) => {
                this.editSuccess(successData);
            }, (error) => {
                this.editFailure(error);
            });
        }
        else {
            this.toastr.error('End Date Should be greater than Start Date ');
        }
    }
    editSuccess(successData) {
        if (successData.IsSuccess) {
            this.deleteDetail = successData.ResponseObject;
            this.fromTime = '';
            this.toTime = '';
            this.contentname = '';
            this.toastr.success(successData.ResponseObject);
            this.modalRef.close();
            if (this.auth.getSessionData('resourceReload') == '1') {
                this.viewResource();
            }
            else if (this.auth.getSessionData('resourceReload') == '2') {
                this.viewAssignment();
            }
            else if (this.auth.getSessionData('resourceReload') == '3') {
                this.viewAssessment();
            }
        }
    }
    editFailure(error) {
        console.log(error, 'error');
    }
    update(del) {
        if (this.viewType == '1' || this.viewType == '3') {
            this.deleteContentDetails(del);
        }
        else if (this.viewType == '2') {
            this.deleteBatchContentDetails(del);
        }
    }
    listView(id) {
        this.gridView = id;
        this.showGrid = id == 1;
    }
    reportDetails(type, value) {
        this.selectContent = type;
        this.contentNameValue = value.content_id;
        let data;
        data = JSON.parse(this.auth.getSessionData('card-data'));
        this.auth.setSessionData('Individual-Class-Report', JSON.stringify(data[0]));
        this.auth.setSessionData('Individual-student-Report', JSON.stringify(value));
        this.modalRef = this.modalService.open(this.reports, { size: 'xl' });
    }
    viewResource() {
        const data = {
            platform: 'web',
            type: this.viewtypehighlight,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.choosedData[0].class_id,
            school_id: this.auth.getSessionData('school_id')
        };
        this.classService.viewResources(data).subscribe((successData) => {
            this.viewResourceSuccess(successData);
        }, (error) => {
            this.viewResourceFailure(error);
        });
    }
    viewResourceSuccess(successData) {
        if (successData.IsSuccess) {
            this.resourceList = successData.ResponseObject;
        }
    }
    viewResourceFailure(error) {
        console.log(error, 'error');
    }
    deleteContentDetails(id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.resourceList[id].content_id,
            class_id: this.classid,
            class_content_id: this.resourceList[id].class_content_id
        };
        this.classService.deleteContentDetail(data).subscribe((successData) => {
            this.deleteSuccess(successData);
        }, (error) => {
            this.deleteFailure(error);
        });
    }
    deleteSuccess(successData) {
        if (successData.IsSuccess) {
            this.deleteDetail = successData.ResponseObject;
            this.modalRef.close();
            if (this.auth.getSessionData('resourceReroute') == '1') {
                this.viewResource();
            }
            else if (this.auth.getSessionData('resourceReroute') == '2') {
                this.viewAssignment();
            }
            else if (this.auth.getSessionData('resourceReroute') == '3') {
                this.viewAssessment();
            }
        }
    }
    deleteFailure(error) {
        console.log(error, 'error');
    }
    deleteBatchContentDetails(id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.resourceList[id].content_id,
            status: '2',
            batch_id: this.choosedData.batch_id
        };
        this.classService.deleteBatchContent(data).subscribe((successData) => {
            this.deleteBatchSuccess(successData);
        }, (error) => {
            this.deleteBatchFailure(error);
        });
    }
    deleteBatchSuccess(successData) {
        if (successData.IsSuccess) {
            this.deleteDetail = successData.ResponseObject;
            this.modalRef.close();
            if (this.auth.getSessionData('resourceReroute') == '1') {
                this.viewBatchResource();
            }
            else if (this.auth.getSessionData('resourceReroute') == '2') {
                this.viewBatchAssignment();
            }
            else if (this.auth.getSessionData('resourceReroute') == '3') {
                this.viewBatchAssessment();
            }
        }
    }
    deleteBatchFailure(error) {
        console.log(error, 'error');
    }
    viewAssignment() {
        const data = {
            platform: 'web',
            type: this.viewtypehighlight,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.choosedData[0].class_id,
            school_id: this.auth.getSessionData('school_id')
        };
        this.classService.viewAssignments(data).subscribe((successData) => {
            this.viewAssignmentSuccess(successData);
        }, (error) => {
            this.viewAssignmentFailure(error);
        });
    }
    viewAssignmentSuccess(successData) {
        if (successData.IsSuccess) {
            this.resourceList = successData.ResponseObject;
        }
    }
    viewAssignmentFailure(error) {
        console.log(error, 'error');
    }
    viewAssessment() {
        const data = {
            platform: 'web',
            type: this.viewtypehighlight,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.choosedData[0].class_id,
            school_id: this.auth.getSessionData('school_id')
        };
        this.classService.viewAssessments(data).subscribe((successData) => {
            this.viewAssessmentSuccess(successData);
        }, (error) => {
            this.viewAssessmentFailure(error);
        });
    }
    viewAssessmentSuccess(successData) {
        if (successData.IsSuccess) {
            this.resourceList = successData.ResponseObject;
        }
    }
    viewAssessmentFailure(error) {
        console.log(error, 'error');
    }
    viewBatchResource() {
        const data = {
            platform: 'web',
            type: '0',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            batch_id: this.choosedData.batch_id,
            school_id: this.auth.getSessionData('school_id')
        };
        this.classService.viewBatchResources(data).subscribe((successData) => {
            this.viewBatchResourceSuccess(successData);
        }, (error) => {
            this.viewBatchResourceFailure(error);
        });
    }
    viewBatchResourceSuccess(successData) {
        if (successData.IsSuccess) {
            this.resourceList = successData.ResponseObject;
        }
    }
    viewBatchResourceFailure(error) {
        console.log(error, 'error');
    }
    viewBatchAssignment() {
        const data = {
            platform: 'web',
            type: '0',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            batch_id: this.choosedData.batch_id,
            school_id: this.auth.getSessionData('school_id')
        };
        this.classService.viewBatchAssignment(data).subscribe((successData) => {
            this.viewBatchAssignmentSuccess(successData);
        }, (error) => {
            this.viewBatchAssignmentFailure(error);
        });
    }
    viewBatchAssignmentSuccess(successData) {
        if (successData.IsSuccess) {
            this.resourceList = successData.ResponseObject;
        }
    }
    viewBatchAssignmentFailure(error) {
        console.log(error, 'error');
    }
    viewBatchAssessment() {
        const data = {
            platform: 'web',
            type: '0',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            batch_id: this.choosedData.batch_id,
            school_id: this.auth.getSessionData('school_id')
        };
        this.classService.viewBatchAssessment(data).subscribe((successData) => {
            this.viewBatchAssessmentSuccess(successData);
        }, (error) => {
            this.viewBatchAssessmentFailure(error);
        });
    }
    viewBatchAssessmentSuccess(successData) {
        if (successData.IsSuccess) {
            this.resourceList = successData.ResponseObject;
        }
    }
    viewBatchAssessmentFailure(error) {
        console.log(error, 'error');
    }
    detailpreviewlist(id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.resourceList[id].content_id
        };
        this.creatorService.detaillist(data).subscribe((successData) => {
            this.contentDetailsSuccess(successData);
        }, (error) => {
            this.contentDetailsFailure(error);
        });
    }
    contentDetailsSuccess(successData) {
        if (successData.IsSuccess) {
            this.contentDetaildata = successData.ResponseObject;
            this.profileurl = this.contentDetaildata.profile_url;
            this.contentType = this.contentDetaildata.content_type;
            this.createdby = this.contentDetaildata.created_by;
            this.gradename = this.contentDetaildata.grade_name;
            this.subjectname = this.contentDetaildata.subject_name;
            this.tags = this.contentDetaildata.tags;
            this.noofquestions = this.contentDetaildata.no_of_questions;
            this.totalpoints = this.contentDetaildata.total_points;
            this.description = this.contentDetaildata.description;
            this.contentname = this.contentDetaildata.name;
            if (this.contentDetaildata.status == '1') {
                this.details = 'Published';
            }
            else if (this.contentDetaildata.status == '5') {
                this.details = 'Draft';
            }
        }
    }
    contentDetailsFailure(error) {
        console.log(error, 'error');
    }
    correctionPage(list, type) {
        this.auth.setSessionData('return', type);
        this.auth.setSessionData('correction-return', type);
        this.auth.setSessionData('classDetails', JSON.stringify(list));
        if (type == 'assessments') {
            this.router.navigate(['/assessment-correction/correction-page']);
        }
        else if (type == 'assignments') {
            this.router.navigate(['/assignment-correction/correction-page']);
        }
    }
    PreviewPage(event, type, view) {
        view == 'student_preview' ? this.auth.setSessionData('preview_type', 'yes') :
            this.auth.setSessionData('preview_type', 'no');
        this.auth.setSessionData('return', type);
        this.previewType = 'pdf';
        this.viewer = view;
        this.auth.setSessionData('editresources', JSON.stringify(event));
        this.listDetails(event, type);
    }
    PreviewText(event, type, view) {
        view == 'student_preview' ? this.auth.setSessionData('preview_type', 'yes') :
            this.auth.setSessionData('preview_type', 'no');
        this.auth.setSessionData('return', type);
        this.previewType = 'text';
        this.auth.setSessionData('editresources', JSON.stringify(event));
        this.listDetails(event, type);
        if (view == 'student_preview') {
            this.auth.setSessionData('showAnswer', 1);
        }
        else {
            this.auth.removeSessionData('showAnswer');
        }
    }
    listDetails(event, type) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: event.content_id,
            content_format: event.content_format,
            content_type: type == 'resources' ? '1' : type == 'assignments' ? '2' : '3',
            school_id: event.school_id,
            class_id: this.choosedData[0]?.class_id,
            teacher_id: this.choosedData[0]?.teacher_id
        };
        this.auth.setSessionData('editor', JSON.stringify(data));
        this.auth.setSessionData('backOption', 'available');
        this.viewType == '2' ? this.auth.setSessionData('redirect-toassign', '1') :
            this.auth.setSessionData('redirect-toassign', '2');
        this.viewer == 'student_preview' || this.viewer == 'teacher_preview' ? this.auth.setSessionData('preview', this.viewer)
            : this.auth.removeSessionData('preview');
        this.previewType == 'pdf' ? this.auth.setSessionData('preview_page', 'create_' + type) :
            this.auth.setSessionData('preview_page', 'text_' + type);
        this.router.navigate(['repository/preview']);
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
    itemsReportDetails(data) {
        this.auth.setSessionData('Individual-items-Report', JSON.stringify(data));
        this.reportData = JSON.parse(this.auth.getSessionData('Individual-items-Report'));
        this.modalRef = this.modalService.open(this.itemsReports, { size: 'xl' });
    }
    static { this.ɵfac = function ViewAssignComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ViewAssignComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.AssessmentService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.FormBuilder), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i5.NewsubjectService), i0.ɵɵdirectiveInject(i6.DomSanitizer), i0.ɵɵdirectiveInject(i7.ConfigurationService), i0.ɵɵdirectiveInject(i8.NgbModal), i0.ɵɵdirectiveInject(i9.ClassService), i0.ɵɵdirectiveInject(i10.DatePipe), i0.ɵɵdirectiveInject(i11.ToastrService), i0.ɵɵdirectiveInject(i12.CommonService), i0.ɵɵdirectiveInject(i13.CommonDataService), i0.ɵɵdirectiveInject(i14.CreatorService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ViewAssignComponent, selectors: [["app-create-assessment"]], viewQuery: function ViewAssignComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
            i0.ɵɵviewQuery(_c4, 5);
            i0.ɵɵviewQuery(_c5, 5);
            i0.ɵɵviewQuery(_c6, 5);
            i0.ɵɵviewQuery(_c7, 5);
            i0.ɵɵviewQuery(_c8, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addDetails = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addResources = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addAssignment = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addAssessment = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addAssign = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.reports = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.itemsReports = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.teacherVersion = _t.first);
        } }, decls: 55, vars: 27, consts: [["detailsTemplate", ""], ["assign", ""], ["reports", ""], ["itemsReports", ""], ["teacherVersion", ""], ["content", ""], ["dp", "angular-mydatepicker"], ["dp1", "angular-mydatepicker"], [1, "container-fluid"], [1, "row"], [1, "pdf-nav", "col-12", "col-md-6", "mt-2"], [1, "btn", "btn-outline-primary", "pull-left", 3, "click", "ngClass"], ["aria-pressed", "true", "type", "button", 1, "btn", "btn-outline-primary", "pull-left", 3, "click", "ngClass"], [1, "pdf-assign-btn", "col-12", "col-md-6", "mt-2"], ["class", "btn btn-primary pull-right ml-3", 3, "click", 4, "ngIf"], ["class", "btn btn-primary pull-right ml-3 ", 3, "click", 4, "ngIf"], [1, "btn", "btn-outline-primary", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-long-arrow-left", "fa-1x"], [1, "row", "group-btn", "mt-2"], [1, "col-6", "align-self-center"], [1, "viewname"], [1, "col-6", "col-lg-6", "d-flex", "justify-content-md-end"], [1, "btn-group", 3, "hidden"], ["data-toggle", "dropdown", 1, "btn", "btn-outline-primary", "dropdown-toggle"], [1, "dropdown-menu"], [1, "dropdown-item", "dropdown-link", 3, "click"], ["type", "button", 1, "btn-sm", "btn-outline-primary", "pull-right", 3, "click", "ngClass"], [1, "fa", "fa-bars"], ["type", "button", 1, "btn-sm", "btn-outline-primary", "pull-right", "ml-0", 3, "click", "ngClass"], [1, "fa", "fa-th-large"], ["class", "row mt-3 d-flex justify-content-center", 4, "ngIf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "pull-right", "ml-3", 3, "click"], [1, "row", "mt-3", "d-flex", "justify-content-center"], [1, "col-4"], [1, "nodataList"], ["class", "col-12 px-0 d-flex flex-wrap mt-3", 4, "ngIf"], ["class", "col-12 d-flex flex-column justify-content-center mt-3", 4, "ngIf"], [1, "col-12", "px-0", "d-flex", "flex-wrap", "mt-3"], ["class", "col-4 px-2", 4, "ngFor", "ngForOf"], [1, "col-4", "px-2"], [1, "card", "class-card", "class-hover", "cursor", 3, "click"], [1, "row", "p-2", "d-flex", "flex-wrap"], [1, "col-3", "school-img", "cursor", "mt-2", 3, "click"], ["alt", "", "src", "assets/images/ristaschool/resource.png", "style", "width: 50px;height: 50px;", "class", "cursor rounded-circle", 4, "ngIf"], ["style", "width: 50px;height: 50px;", "class", "cursor rounded-circle", "alt", "", 3, "src", 4, "ngIf"], [1, "col-9"], [1, "t-period"], [1, "font-weight-bold"], ["class", "contenttext", 4, "ngIf"], ["class", "contenttext font-weight-bold", 4, "ngIf"], [1, "col-12", "d-flex", "justify-content-end", "mt-2"], [1, "dropdown", 3, "click"], [1, "btn", "btn-outline-primary"], ["aria-hidden", "true", 1, "fa", "fa-sort-desc", "float-right", "ml-2"], [1, "dropdown-content", 2, "right", "1px"], [3, "click", 4, "ngIf"], ["alt", "", "src", "assets/images/ristaschool/resource.png", 1, "cursor", "rounded-circle", 2, "width", "50px", "height", "50px"], ["alt", "", 1, "cursor", "rounded-circle", 2, "width", "50px", "height", "50px", 3, "src"], [1, "contenttext"], [1, "contenttext", "font-weight-bold"], [3, "click"], ["aria-hidden", "true", 1, "fa", "fa-address-card"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["aria-hidden", "true", 1, "fa", "fa-pencil"], ["aria-hidden", "true", 1, "fa", "fa-trash"], [1, "col-12", "d-flex", "flex-column", "justify-content-center", "mt-3"], ["class", "col-12 flex-start card class-card class-hover cursor", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-12", "flex-start", "card", "class-card", "class-hover", "cursor", 3, "click"], [1, "col-1", "school-img", "cursor", 3, "click"], [1, "col-6"], [1, "mb-0"], [1, "col-5", "d-flex", "justify-content-end", "mt-2"], ["class", "col-12 d-flex flex-column justify-content-center mt-3 px-0", 4, "ngIf"], ["cdkDropList", "", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "card", "class-card", "class-hover", "cursor"], [1, "col-3", "school-img", "cursor", "mt-2"], ["src", "assets/images/ristaschool/option-writing-checkbox-concepts-survey.png", "style", "width: 50px;height: 50px;", "class", "cursor rounded-circle", "alt", "", 4, "ngIf"], ["src", "assets/images/ristaschool/option-writing-checkbox-concepts-survey.png", "alt", "", 1, "cursor", "rounded-circle", 2, "width", "50px", "height", "50px"], ["aria-hidden", "true", 1, "fa", "fa-users"], ["aria-hidden", "true", 1, "fa", "fa-id-badge"], ["aria-hidden", "true", 1, "fa", "fa-file-text-o"], ["aria-hidden", "true", 1, "fa", "fa-file-archive-o"], [1, "col-12", "d-flex", "flex-column", "justify-content-center", "mt-3", "px-0"], ["class", "col-12 flex-start cursor", 4, "ngFor", "ngForOf"], [1, "col-12", "flex-start", "cursor"], ["cdkDrag", "", 1, "col-12", "card", "class-card", "class-hover"], [1, "col-1", "school-img", "cursor"], ["class", "col-4 px-2", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-4", "px-2", 3, "click"], [1, "card", "class-card", "class-hover", "cursor"], ["src", "assets/images/ristaschool/assessment.png", "style", "width: 50px;height: 50px;", "class", "cursor rounded-circle", "alt", "", 4, "ngIf"], ["src", "assets/images/ristaschool/assessment.png", "alt", "", 1, "cursor", "rounded-circle", 2, "width", "50px", "height", "50px"], ["class", "col-12 card class-card class-hover cursor", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-12", "card", "class-card", "class-hover", "cursor", 3, "click"], [1, "modal-header"], ["title", "close", 1, "fa", "fa-times", "cursor", 3, "click"], [1, "modal-body"], [1, "col-md-6"], [1, "row-6"], ["src", "assets/images/ristaschool/resource.png", "style", "width: 370px; height: 270px", "alt", "", 4, "ngIf"], ["src", "assets/images/ristaschool/option-writing-checkbox-concepts-survey.png", "style", "width: 370px; height: 270px", "alt", "", 4, "ngIf"], ["src", "assets/images/ristaschool/assessment.png", "style", "width: 370px; height: 270px", "alt", "", 4, "ngIf"], ["style", "width: 370px; height: 270px", "alt", "", 3, "src", 4, "ngIf"], [1, "mt-2"], ["src", "assets/images/ristaschool/resource.png", "alt", "", 2, "width", "370px", "height", "270px"], ["src", "assets/images/ristaschool/option-writing-checkbox-concepts-survey.png", "alt", "", 2, "width", "370px", "height", "270px"], ["src", "assets/images/ristaschool/assessment.png", "alt", "", 2, "width", "370px", "height", "270px"], ["alt", "", 2, "width", "370px", "height", "270px", 3, "src"], ["id", "modal-basic-title", 1, "modal-title"], [1, "col-sm-12"], [1, "text-center", "mt-3"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [3, "formGroup"], [1, "row", "form-group"], [1, "col-md-12"], ["readonly", "", "type", "text", "placeholder", "Enter the Class Name", 1, "form-control", 3, "value"], ["class", "row form-group mb-3", 4, "ngIf"], ["class", "col-12 px-0", 4, "ngIf"], ["class", "row form-group", 4, "ngIf"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "row", "form-group", "mb-3"], ["formControlName", "releaseScore", 1, "form-control", 3, "change"], ["value", "n/a", "disabled", ""], ["value", "0"], ["value", "1"], ["value", "2", 4, "ngIf"], ["value", "2"], [1, "col-12", "px-0"], [1, "assign-error", "text-center"], [1, "col-md-2"], [1, "row-md-12"], ["placeholder", "Start Date", "formControlName", "startdate", "name", "dp", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "dateChanged", "click", "options"], [1, "col-md-4"], [3, "ngModelChange", "ngModel", "ngModelOptions", "meridian", "spinners"], ["placeholder", "End Date", "formControlName", "enddate", "name", "dp1", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "click", "options"], [1, "modal-title"], [1, "fa", "fa-close", "cursor", 3, "click"], [3, "classShow", "showContent", "studentView", "timeView", "contentNameValue"], [3, "showContent", "studentView", "timeView"], [2, "display", "block", "height", "100vh", 3, "src"]], template: function ViewAssignComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "button", 11);
            i0.ɵɵlistener("click", function ViewAssignComponent_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.classList(2)); });
            i0.ɵɵtext(4, "Assignment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "button", 11);
            i0.ɵɵlistener("click", function ViewAssignComponent_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.classList(3)); });
            i0.ɵɵtext(6, "Assessment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 12);
            i0.ɵɵlistener("click", function ViewAssignComponent_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.classList(1)); });
            i0.ɵɵtext(8, "Resources");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 13);
            i0.ɵɵtemplate(10, ViewAssignComponent_button_10_Template, 2, 0, "button", 14)(11, ViewAssignComponent_button_11_Template, 2, 0, "button", 15)(12, ViewAssignComponent_button_12_Template, 2, 0, "button", 14);
            i0.ɵɵelementStart(13, "button", 16);
            i0.ɵɵlistener("click", function ViewAssignComponent_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.backAction()); });
            i0.ɵɵelement(14, "i", 17);
            i0.ɵɵtext(15, " Back");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(16, "hr");
            i0.ɵɵelementStart(17, "div", 18)(18, "div", 19)(19, "h4", 20);
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "div", 21)(22, "div", 22)(23, "button", 23);
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div", 24)(26, "a", 25);
            i0.ɵɵlistener("click", function ViewAssignComponent_Template_a_click_26_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.typeSelection("1")); });
            i0.ɵɵtext(27, "Upcoming");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "a", 25);
            i0.ɵɵlistener("click", function ViewAssignComponent_Template_a_click_28_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.typeSelection("2")); });
            i0.ɵɵtext(29, "In Progress");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "a", 25);
            i0.ɵɵlistener("click", function ViewAssignComponent_Template_a_click_30_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.typeSelection("3")); });
            i0.ɵɵtext(31, "Completed");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "a", 25);
            i0.ɵɵlistener("click", function ViewAssignComponent_Template_a_click_32_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.typeSelection("0")); });
            i0.ɵɵtext(33, "All");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(34, "button", 26);
            i0.ɵɵlistener("click", function ViewAssignComponent_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.listView(2)); });
            i0.ɵɵelement(35, "i", 27);
            i0.ɵɵtext(36, " List");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "button", 28);
            i0.ɵɵlistener("click", function ViewAssignComponent_Template_button_click_37_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.listView(1)); });
            i0.ɵɵelement(38, "i", 29);
            i0.ɵɵtext(39, " Grid");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(40, ViewAssignComponent_div_40_Template, 4, 0, "div", 30)(41, ViewAssignComponent_div_41_Template, 3, 2, "div", 31)(42, ViewAssignComponent_div_42_Template, 3, 2, "div", 31)(43, ViewAssignComponent_div_43_Template, 3, 2, "div", 31);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(44, ViewAssignComponent_ng_template_44_Template, 48, 11, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(46, ViewAssignComponent_46_Template, 2, 0, null, 32)(47, ViewAssignComponent_ng_template_47_Template, 20, 7, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(49, ViewAssignComponent_ng_template_49_Template, 6, 5, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(51, ViewAssignComponent_ng_template_51_Template, 7, 6, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(53, ViewAssignComponent_ng_template_53_Template, 6, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(17, _c9, ctx.type == "assignments"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(19, _c9, ctx.type == "assessments"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(21, _c9, ctx.type == "resources"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.type == "resources" && ctx.allowClass);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "assignments" && ctx.allowClass);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "assessments" && ctx.allowClass);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate2("", ctx.typeName, " : ", ctx.className, "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("hidden", ctx.viewType == "2");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.dueButton, " ");
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(23, _c9, ctx.gridView == "2"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(25, _c9, ctx.gridView == "1"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.resourceList == "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "resources");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "assignments");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "assessments");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.resourceList);
        } }, dependencies: [i10.NgClass, i10.NgForOf, i10.NgIf, i8.NgbTimepicker, i4.ɵNgNoValidate, i4.NgSelectOption, i4.ɵNgSelectMultipleOption, i4.DefaultValueAccessor, i4.SelectControlValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.FormGroupDirective, i4.FormControlName, i4.NgModel, i15.AngularMyDatePickerDirective, i16.MissedWorkReportComponent, i17.ItemsReportComponent, i18.PdfViewerComponent, i19.CdkDropList, i19.CdkDrag, i10.TitleCasePipe, i20.CustomDateFormatPipe], styles: ["//svg[_ngcontent-%COMP%] {\n//  cursor: crosshair;\n//  border: 1px solid #000000;\n//}\n//\n//rect[_ngcontent-%COMP%] {\n//  fill: none;\n//  stroke: #000000;\n//  stroke-width: 10;\n//}\n\n.rectangle[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  &.move-to {\n    background-color: red;\n  }\n}\n\n\n\n.header[_ngcontent-%COMP%] {\n  h2 {\n    padding: 10px;\n    color: #37474f;\n  }\n  .link {\n    border-bottom: 1px solid black;\n    padding: 10px;\n    font-size: 11px;\n    a {\n      color: #673ab7;\n    }\n  }\n}\n\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  &-row {\n    padding: 10px;\n    border-bottom: 1px solid black;\n    cursor: pointer;\n    position: relative;\n    &:hover {\n      background-color: #d5d5d5;\n    }\n    .delete-btn {\n      position: absolute;\n      top: 0;\n      right: 0;\n      .icon {\n        font-size: 16px;\n      }\n    }\n    pre {\n      .pre-title {\n        text-align: left;\n      }\n    }\n    .page-number {\n      text-align: right;\n      font-size: 12px;\n    }\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ViewAssignComponent, [{
        type: Component,
        args: [{ selector: 'app-create-assessment', template: "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"pdf-nav col-12 col-md-6 mt-2\">\n            <button class=\"btn btn-outline-primary pull-left\" [ngClass]=\"{'active1': type == 'assignments'}\" (click)=\"classList(2)\">Assignment</button>\n            <button class=\"btn btn-outline-primary pull-left\" [ngClass]=\"{'active1': type == 'assessments'}\" (click)=\"classList(3)\">Assessment</button>\n            <button (click)=\"classList(1)\" [ngClass]=\"{'active1': type == 'resources'}\" aria-pressed=\"true\" class=\"btn btn-outline-primary pull-left\" type=\"button\">Resources</button>\n        </div>\n        <div class=\"pdf-assign-btn col-12 col-md-6 mt-2\">\n            <button *ngIf=\"type == 'resources' && allowClass\" class=\"btn btn-primary pull-right ml-3\" (click)=\"upload('resources')\">Add Resource</button>\n            <button *ngIf=\"type == 'assignments' && allowClass\" class=\"btn btn-primary pull-right ml-3 \" (click)=\"upload('assignments')\">Add Assignment</button>\n            <button *ngIf=\"type == 'assessments' && allowClass\" class=\"btn btn-primary pull-right ml-3\" (click)=\"upload('assessments')\">Add Assessment</button>\n            <button class=\"btn btn-outline-primary pull-right\" (click)=\"backAction()\"><i class=\"fa fa-long-arrow-left fa-1x\" aria-hidden=\"true\"></i> Back</button>\n        </div>\n    </div>\n    <hr>\n        <div class=\"row group-btn mt-2\">\n            <div class=\"col-6 align-self-center\">\n                <h4 class=\"viewname\">{{typeName}} : {{className}}</h4>\n            </div>\n            <div class=\"col-6 col-lg-6 d-flex justify-content-md-end\">\n<!--                <button class=\"btn btn-outline-primary mr-2\"> Add Topic <i class=\"fa fa-plus-circle ml-1\" aria-hidden=\"true\"></i></button>-->\n                <div [hidden]=\"this.viewType == '2'\" class=\"btn-group\">\n                    <button class=\"btn btn-outline-primary dropdown-toggle\" data-toggle=\"dropdown\"> {{dueButton}} </button>\n                    <div class=\"dropdown-menu\">\n                        <a class=\"dropdown-item dropdown-link\" (click)=\"typeSelection('1')\">Upcoming</a>\n                        <a class=\"dropdown-item dropdown-link\" (click)=\"typeSelection('2')\">In Progress</a>\n                        <a class=\"dropdown-item dropdown-link\" (click)=\"typeSelection('3')\">Completed</a>\n                        <a class=\"dropdown-item dropdown-link\" (click)=\"typeSelection('0')\">All</a>\n                    </div>\n                </div>\n                <button type=\"button\" (click)=\"listView(2)\" [ngClass]=\"{'active1': gridView == '2'}\" class=\"btn-sm btn-outline-primary pull-right\"><i class=\"fa fa-bars\"></i> List</button>\n                <button type=\"button\" (click)=\"listView(1)\" [ngClass]=\"{'active1': gridView == '1'}\" class=\"btn-sm btn-outline-primary pull-right ml-0\"><i class=\"fa fa-th-large\"></i> Grid</button>\n            </div>\n        </div>\n        <div class=\"row mt-3 d-flex justify-content-center\" *ngIf=\"resourceList == ''\">\n            <div class=\"col-4\">\n                <button class=\"nodataList\" >No Data Available!</button>\n            </div>\n        </div>\n        <div *ngIf=\"type == 'resources'\">\n            <div class=\"col-12 px-0 d-flex flex-wrap mt-3\" *ngIf=\"showGrid\">\n                <div  *ngFor=\"let list of resourceList; let i = index\" class=\"col-4 px-2\">\n                    <div class=\"card class-card class-hover cursor\" (click)=\"navigateToStudentView(list, 'resources')\">\n                        <div class=\"row p-2 d-flex flex-wrap\">\n                            <div class=\"col-3 school-img cursor mt-2\" (click)=\"detailPreview(i)\">\n                                <img *ngIf=\"list.profile_url == ''\" alt=\"\" src=\"assets/images/ristaschool/resource.png\" style=\"width: 50px;height: 50px;\" class=\"cursor rounded-circle\">\n                                <img *ngIf=\"list.profile_url != ''\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + list.profile_url)\" style=\"width: 50px;height: 50px;\" class=\"cursor rounded-circle\" alt=\"\">\n                            </div>\n                            <div class=\"col-9\">\n                                <h4 class=\"t-period\"><span class=\"font-weight-bold\">{{list.content_name}}\n                                    <small *ngIf=\"list.content_format == '1'\" class=\"contenttext\">(PDF)</small>\n                                    <small *ngIf=\"list.content_format == '2'\" class=\"contenttext\">(LINK)</small>\n                                    <small *ngIf=\"list.content_format == '3'\" class=\"contenttext\">(TEXT)</small>\n                                    </span></h4>\n                                <p>\n                                    <span *ngIf=\"list.start_date != '0000-00-00' && list.start_date != ''\" class=\"contenttext font-weight-bold\">{{list.start_date| customDateFormat}}</span>\n                                    <span *ngIf=\"list.start_date != '0000-00-00' && list.end_date != '0000-00-00' && list.start_date != '' && list.end_date != ''\">&nbsp;-&nbsp;</span>\n                                    <span *ngIf=\"list.end_date != '0000-00-00' && list.end_date != ''\" class=\"contenttext font-weight-bold\">{{list.end_date| customDateFormat}}</span>&nbsp;<br/>\n                                    <span *ngIf=\"list.start_time != list.end_time\">\n                                            <span class=\"contenttext font-weight-bold\">{{list.start_time}}</span>&nbsp;-&nbsp;<span class=\"contenttext font-weight-bold\">{{list.end_time}}</span>\n                                        </span>\n                                </p>\n                            </div>\n                            <div class=\"col-12 d-flex justify-content-end  mt-2\">\n                                <div class=\"dropdown\" (click)=\"$event.stopPropagation()\">\n                                    <button class=\"btn btn-outline-primary\">Action <i class=\"fa fa-sort-desc float-right ml-2\" aria-hidden=\"true\"></i></button>\n                                    <div class=\"dropdown-content\" style=\"right: 1px\">\n                                        <a (click)=\"PreviewPage(list, 'resources', 'student_preview')\" *ngIf=\"list.content_format == 1 && (viewType == 1 || viewType == 3)\"><i class=\"fa fa-address-card\" aria-hidden=\"true\"></i> Student view</a>\n                                        <a (click)=\"PreviewText(list, 'resources', 'student_preview')\" *ngIf=\"list.content_format == 3 && (viewType == 1 || viewType == 3)\"><i class=\"fa fa-address-card\" aria-hidden=\"true\"></i> Student view</a>\n                                        <a (click)=\"PreviewText(list, 'resources', 'teacher_preview')\" *ngIf=\"list.content_format == 3\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> Teacher View</a>\n                                        <a (click)=\"PreviewPage(list, 'resources', 'teacher_preview')\" *ngIf=\"list.content_format == 1\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> Teacher View</a>\n                                        <a (click)=\"editAction(i, list)\" *ngIf=\"allowClass&& viewType != '2'\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit</a>\n                                        <a (click)=\"deleteAction(i)\" *ngIf=\"allowClass\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</a>\n                                    </div>\n                                </div>\n                                <!--                            <button (click)=\"PreviewPage(list, 'resources', 'student_preview')\" *ngIf=\"list.content_format == 1 && (viewType == 1 || viewType == 3)\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Student view\"><i class=\"fa fa-address-card\" aria-hidden=\"true\"></i></button>-->\n                                <!--                            <button (click)=\"PreviewText(list, 'resources', 'student_preview')\" *ngIf=\"list.content_format == 3 && (viewType == 1 || viewType == 3)\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Student view\"><i aria-hidden=\"true\" class=\"fa fa-address-card\"></i></button>-->\n                                <!--                            <button (click)=\"PreviewText(list, 'resources', 'preview')\" *ngIf=\"list.content_format == 3\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Teacher View\"><i aria-hidden=\"true\" class=\"fa fa-eye\"></i></button>-->\n                                <!--                            <button (click)=\"PreviewPage(list, 'resources', 'preview')\" *ngIf=\"list.content_format == 1\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Teacher View\"><i aria-hidden=\"true\" class=\"fa fa-eye\"></i></button>-->\n                                <!--                            <button (click)=\"editAction(i, list)\" *ngIf=\"allowClass && viewType != '2'\" class=\"btn-sm-view btn-outline-primary mr-1\" title=\"Edit\"><i aria-hidden=\"true\" class=\"fa fa-pencil \"></i></button>-->\n                                <!--                            <button class=\"btn-sm-view btn-outline-primary\" (click)=\"deleteAction(i)\" *ngIf=\"allowClass\" title=\"Delete\"><i class=\"fa fa-trash \" aria-hidden=\"true\"></i></button>-->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 d-flex flex-column justify-content-center mt-3\" *ngIf=\"!showGrid\">\n                <div *ngFor=\"let list of resourceList; let i = index\" (click)=\"navigateToStudentView(list, 'resources')\" class=\"col-12 flex-start card class-card class-hover cursor\">\n                    <div class=\"row p-2 d-flex flex-wrap\">\n                        <div class=\"col-1 school-img cursor\" (click)=\"detailPreview(i)\">\n                            <img *ngIf=\"list.profile_url == ''\" alt=\"\" src=\"assets/images/ristaschool/resource.png\" style=\"width: 50px;height: 50px;\" class=\"cursor rounded-circle\">\n                            <img *ngIf=\"list.profile_url != ''\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + list.profile_url)\" style=\"width: 50px;height: 50px;\" class=\"cursor rounded-circle\" alt=\"\">\n                        </div>\n                        <div class=\"col-6\">\n                            <h4 class=\"t-period\"><span class=\"font-weight-bold\">{{list.content_name}}\n                                <small *ngIf=\"list.content_format == '1'\" class=\"contenttext\">(PDF)</small>\n                                    <small *ngIf=\"list.content_format == '2'\" class=\"contenttext\">(LINK)</small>\n                                    <small *ngIf=\"list.content_format == '3'\" class=\"contenttext\">(TEXT)</small>\n                                    </span></h4>\n                            <p class=\"mb-0\">\n                                <span *ngIf=\"list.start_date != '0000-00-00' && list.start_date != ''\" class=\"contenttext font-weight-bold\">{{list.start_date| customDateFormat}}</span>\n                                &nbsp;<span class=\"contenttext font-weight-bold\" *ngIf=\"list.start_time != list.end_time\">{{list.start_time}}</span>\n                                <span *ngIf=\"list.start_date != '0000-00-00' && list.end_date != '0000-00-00' && list.start_date != '' && list.end_date != ''\">&nbsp;-&nbsp;</span>\n                                <span *ngIf=\"list.end_date != '0000-00-00' && list.end_date != ''\" class=\"contenttext font-weight-bold\">{{list.end_date| customDateFormat}}</span>\n                                &nbsp;<span class=\"contenttext font-weight-bold\" *ngIf=\"list.start_time != list.end_time\">{{list.end_time}}</span>\n                            </p>\n                        </div>\n                        <div class=\"col-5 d-flex justify-content-end mt-2\">\n                            <div class=\"dropdown\" (click)=\"$event.stopPropagation()\">\n                                <button class=\"btn btn-outline-primary\">Action <i class=\"fa fa-sort-desc float-right ml-2\" aria-hidden=\"true\"></i></button>\n                                <div class=\"dropdown-content\" style=\"right: 1px\">\n                                    <a (click)=\"PreviewPage(list, 'resources', 'student_preview')\" *ngIf=\"list.content_format == 1 && (viewType == 1 || viewType == 3)\"><i class=\"fa fa-address-card\" aria-hidden=\"true\"></i> Student view</a>\n                                    <a (click)=\"PreviewText(list, 'resources', 'student_preview')\" *ngIf=\"list.content_format == 3 && (viewType == 1 || viewType == 3)\"><i class=\"fa fa-address-card\" aria-hidden=\"true\"></i> Student view</a>\n                                    <a (click)=\"PreviewText(list, 'resources', 'teacher_preview')\" *ngIf=\"list.content_format == 3\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> Teacher View</a>\n                                    <a (click)=\"PreviewPage(list, 'resources', 'teacher_preview')\" *ngIf=\"list.content_format == 1\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> Teacher View</a>\n                                    <a (click)=\"editAction(i, list)\" *ngIf=\"allowClass&& viewType != '2'\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit</a>\n                                    <a (click)=\"deleteAction(i)\" *ngIf=\"allowClass\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</a>\n                                </div>\n                            </div>\n<!--                            <button (click)=\"PreviewPage(list, 'resources', 'student_preview')\" *ngIf=\"list.content_format == 1 && (viewType == 1 || viewType == 3)\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Student view\"><i class=\"fa fa-address-card\" aria-hidden=\"true\"></i></button>-->\n<!--                            <button (click)=\"PreviewText(list, 'resources', 'student_preview')\" *ngIf=\"list.content_format == 3 && (viewType == 1 || viewType == 3)\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Student view\"><i aria-hidden=\"true\" class=\"fa fa-address-card\"></i></button>-->\n<!--                            <button (click)=\"PreviewText(list, 'resources', 'preview')\" *ngIf=\"list.content_format == 3\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Teacher View\"><i aria-hidden=\"true\" class=\"fa fa-eye\"></i></button>-->\n<!--                            <button (click)=\"PreviewPage(list, 'resources', 'preview')\" *ngIf=\"list.content_format == 1\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Teacher View\"><i aria-hidden=\"true\" class=\"fa fa-eye\"></i></button>-->\n<!--                            <button (click)=\"editAction(i, list)\" *ngIf=\"allowClass && viewType != '2'\" class=\"btn-sm-view btn-outline-primary mr-1\" title=\"Edit\"><i aria-hidden=\"true\" class=\"fa fa-pencil \"></i></button>-->\n<!--                            <button class=\"btn-sm-view btn-outline-primary\" (click)=\"deleteAction(i)\" *ngIf=\"allowClass\" title=\"Delete\"><i class=\"fa fa-trash \" aria-hidden=\"true\"></i></button>-->\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"type == 'assignments'\">\n            <section class=\"col-12 px-0 d-flex flex-wrap mt-3\" *ngIf=\"showGrid\">\n                <div (cdkDropListDropped)=\"droppedCorrect($event)\" cdkDropList>\n                    <div *ngFor=\"let list of resourceList; let i = index\" class=\"col-4 px-2\">\n                        <div class=\"card class-card class-hover cursor\" cdkDrag>\n                            <div class=\"row p-2 d-flex flex-wrap\">\n                                <div class=\"col-3 school-img cursor mt-2\">\n                                    <img *ngIf=\"list.profile_url == ''\" src=\"assets/images/ristaschool/option-writing-checkbox-concepts-survey.png\" style=\"width: 50px;height: 50px;\" class=\"cursor rounded-circle\" alt=\"\">\n                                    <img *ngIf=\"list.profile_url != ''\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + list.profile_url)\" style=\"width: 50px;height: 50px;\" class=\"cursor rounded-circle\" alt=\"\">\n                                </div>\n                                <div class=\"col-9\">\n                                    <h4 class=\"t-period\"><span class=\"font-weight-bold\">{{list.content_name}}\n                                        <small *ngIf=\"list.content_format == '1'\" class=\"contenttext\">(PDF)</small>\n                                    <small *ngIf=\"list.content_format == '2'\" class=\"contenttext\">(LINK)</small>\n                                    <small *ngIf=\"list.content_format == '3'\" class=\"contenttext\">(TEXT)</small>\n                                    </span></h4>\n                                    <p>\n                                        <span *ngIf=\"list.start_date != '0000-00-00' && list.start_date != ''\" class=\"contenttext font-weight-bold\">{{list.start_date| customDateFormat}}</span>\n                                        <span *ngIf=\"list.start_date != '0000-00-00' && list.end_date != '0000-00-00' && list.start_date != '' && list.end_date != ''\">&nbsp;-&nbsp;</span>\n                                        <span *ngIf=\"list.end_date != '0000-00-00' && list.end_date != ''\" class=\"contenttext font-weight-bold\">{{list.end_date| customDateFormat}}</span>&nbsp;<br/>\n                                        <span *ngIf=\"list.start_time != list.end_time\">\n                                            <span class=\"contenttext font-weight-bold\">{{list.start_time}}</span>&nbsp;-&nbsp;<span class=\"contenttext font-weight-bold\">{{list.end_time}}</span>\n                                        </span>\n                                    </p>\n                                </div>\n                                <div class=\"col-12 d-flex justify-content-end mt-2\">\n                                    <div class=\"dropdown\" (click)=\"$event.stopPropagation()\">\n                                        <button class=\"btn btn-outline-primary\">Action <i class=\"fa fa-sort-desc float-right ml-2\" aria-hidden=\"true\"></i></button>\n                                        <div class=\"dropdown-content\" style=\"right: 1px\">\n                                            <a (click)=\"correctionPage(list, 'assignments')\" *ngIf=\"viewType == 1 || viewType == 3\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i> Grading</a>\n                                            <a (click)=\"PreviewPage(list, 'assignments', 'student_preview')\" *ngIf=\"list.content_format == 1 && (viewType == 1 || viewType == 3)\"><i class=\"fa fa-address-card\" aria-hidden=\"true\"></i> Student view</a>\n                                            <a (click)=\"PreviewText(list, 'assignments', 'student_preview')\" *ngIf=\"list.content_format == 3 && (viewType == 1 || viewType == 3)\"><i class=\"fa fa-address-card\" aria-hidden=\"true\"></i> Student view</a>\n                                            <a (click)=\"openTeacherVersionPdf(list)\" *ngIf=\"list.teacher_version_path && list.teacher_version_path.length != ''\"><i class=\"fa fa-id-badge\" aria-hidden=\"true\"></i> Teacher Version PDF</a>\n                                            <a (click)=\"PreviewText(list, 'assignments', 'teacher_preview')\" *ngIf=\"list.content_format == 3\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> Teacher View</a>\n                                            <a (click)=\"PreviewPage(list, 'assignments', 'teacher_preview')\" *ngIf=\"list.content_format == 1\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> Teacher View</a>\n                                            <a (click)=\"reportDetails('Assignment', list)\" *ngIf=\"viewType == '1' || viewType == 3 && allowClass\"><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i> Reports</a>\n                                            <a (click)=\"itemsReportDetails(list)\" *ngIf=\"viewType != '2'\"><i class=\"fa fa-file-archive-o\" aria-hidden=\"true\"></i> Itemized Reports</a>\n                                            <a (click)=\"editAction(i, list)\" *ngIf=\"allowClass&& viewType != '2'\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit</a>\n                                            <a (click)=\"deleteAction(i)\" *ngIf=\"allowClass\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</a>\n                                        </div>\n                                    </div>\n                                    <!--                            <button (click)=\"correctionPage(list, 'assignments')\" *ngIf=\"viewType == 1 || viewType == 3\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Grading\"><i aria-hidden=\"true\" class=\"fa fa-users\"></i></button>-->\n                                    <!--                            <button (click)=\"PreviewPage(list, 'assignments', 'student_preview')\" *ngIf=\"list.content_format == 1 && (viewType == 1 || viewType == 3)\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Student view\"><i class=\"fa fa-address-card\" aria-hidden=\"true\"></i></button>-->\n                                    <!--                            <button (click)=\"PreviewText(list, 'assignments', 'student_preview')\" *ngIf=\"list.content_format == 3 && (viewType == 1 || viewType == 3)\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Student view\"><i aria-hidden=\"true\" class=\"fa fa-address-card\"></i></button>-->\n                                    <!--                            <button (click)=\"openTeacherVersionPdf(list)\" *ngIf=\"list.teacher_version_path && list.teacher_version_path.length != ''\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Teacher Version PDF\"><i class=\"fa fa-id-badge\"></i></button>-->\n                                    <!--                            <button (click)=\"PreviewText(list, 'assignments', 'preview')\" *ngIf=\"list.content_format == 3\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Teacher View\"><i aria-hidden=\"true\" class=\"fa fa-eye\"></i></button>-->\n                                    <!--                            <button (click)=\"PreviewPage(list, 'assignments', 'preview')\" *ngIf=\"list.content_format == 1\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Teacher View\"><i aria-hidden=\"true\" class=\"fa fa-eye\"></i></button>-->\n                                    <!--                            <button (click)=\"reportDetails('Assignment', list)\" *ngIf=\"viewType == '1' || viewType == 3 && allowClass\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Reports\"><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i></button>-->\n                                    <!--                            <button (click)=\"itemsReportDetails(list)\" *ngIf=\"viewType != '2'\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Itemized Reports\"><i aria-hidden=\"true\" class=\"fa fa-file-archive-o\"></i></button>-->\n                                    <!--                            <button (click)=\"editAction(i, list)\" *ngIf=\"allowClass&& viewType != '2'\" class=\"btn-sm-view btn-outline-primary mr-1\" title=\"Edit\"><i aria-hidden=\"true\" class=\"fa fa-pencil \"></i></button>-->\n                                    <!--                            <button class=\"btn-sm-view btn-outline-primary\" (click)=\"deleteAction(i)\" *ngIf=\"allowClass\" title=\"Delete\"><i class=\"fa fa-trash \" aria-hidden=\"true\"></i></button>-->\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n            <section class=\"col-12 d-flex flex-column justify-content-center mt-3 px-0\" *ngIf=\"!showGrid\">\n                <div (cdkDropListDropped)=\"droppedCorrect($event)\" cdkDropList>\n                    <div *ngFor=\"let list of resourceList; let i = index\" class=\"col-12 flex-start cursor\">\n                        <div class=\"col-12 card class-card class-hover\" cdkDrag>\n                            <div class=\"row p-2 d-flex flex-wrap\">\n\n                                <div class=\"col-1 school-img cursor\">\n                                    <img *ngIf=\"list.profile_url == ''\" src=\"assets/images/ristaschool/option-writing-checkbox-concepts-survey.png\" style=\"width: 50px;height: 50px;\" class=\"cursor rounded-circle\" alt=\"\">\n                                    <img *ngIf=\"list.profile_url != ''\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + list.profile_url)\" style=\"width: 50px;height: 50px;\" class=\"cursor rounded-circle\" alt=\"\">\n                                </div>\n                                <div class=\"col-6\">\n                                    <h4 class=\"t-period\"><span class=\"font-weight-bold\">{{list.content_name}}\n                                        <small *ngIf=\"list.content_format == '1'\" class=\"contenttext\">(PDF)</small>\n                                    <small *ngIf=\"list.content_format == '2'\" class=\"contenttext\">(LINK)</small>\n                                    <small *ngIf=\"list.content_format == '3'\" class=\"contenttext\">(TEXT)</small>\n                                    </span></h4>\n                                    <p class=\"mb-0\">\n                                        <span *ngIf=\"list.start_date != '0000-00-00' && list.start_date != ''\" class=\"contenttext font-weight-bold\">{{list.start_date| customDateFormat}}</span>\n                                        &nbsp;<span class=\"contenttext font-weight-bold\" *ngIf=\"list.start_time != list.end_time\">{{list.start_time}}</span>\n                                        <span *ngIf=\"list.start_date != '0000-00-00' && list.end_date != '0000-00-00' && list.start_date != '' && list.end_date != ''\">&nbsp;-&nbsp;</span>\n                                        <span *ngIf=\"list.end_date != '0000-00-00' && list.end_date != ''\" class=\"contenttext font-weight-bold\">{{list.end_date| customDateFormat}}</span>\n                                        &nbsp;<span class=\"contenttext font-weight-bold\" *ngIf=\"list.start_time != list.end_time\">{{list.end_time}}</span>\n                                    </p>\n                                </div>\n                                <div class=\"col-5 d-flex justify-content-end mt-2\">\n                                    <div class=\"dropdown\" (click)=\"$event.stopPropagation()\">\n                                        <button class=\"btn btn-outline-primary\">Action <i class=\"fa fa-sort-desc float-right ml-2\" aria-hidden=\"true\"></i></button>\n                                        <div class=\"dropdown-content\" style=\"right: 1px\">\n                                            <a (click)=\"correctionPage(list, 'assignments')\" *ngIf=\"viewType == 1 || viewType == 3\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i> Grading</a>\n                                            <a (click)=\"PreviewPage(list, 'assignments', 'student_preview')\" *ngIf=\"list.content_format == 1 && (viewType == 1 || viewType == 3)\"><i class=\"fa fa-address-card\" aria-hidden=\"true\"></i> Student view</a>\n                                            <a (click)=\"PreviewText(list, 'assignments', 'student_preview')\" *ngIf=\"list.content_format == 3 && (viewType == 1 || viewType == 3)\"><i class=\"fa fa-address-card\" aria-hidden=\"true\"></i> Student view</a>\n                                            <a (click)=\"openTeacherVersionPdf(list)\" *ngIf=\"list.teacher_version_path && list.teacher_version_path.length != ''\"><i class=\"fa fa-id-badge\" aria-hidden=\"true\"></i> Teacher Version PDF</a>\n                                            <a (click)=\"PreviewText(list, 'assignments', 'teacher_preview')\" *ngIf=\"list.content_format == 3\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> Teacher View</a>\n                                            <a (click)=\"PreviewPage(list, 'assignments', 'teacher_preview')\" *ngIf=\"list.content_format == 1\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> Teacher View</a>\n                                            <a (click)=\"reportDetails('Assignment', list)\" *ngIf=\"viewType == '1' || viewType == 3 && allowClass\"><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i> Reports</a>\n                                            <a (click)=\"itemsReportDetails(list)\" *ngIf=\"viewType != '2'\"><i class=\"fa fa-file-archive-o\" aria-hidden=\"true\"></i> Itemized Reports</a>\n                                            <a (click)=\"editAction(i, list)\" *ngIf=\"allowClass&& viewType != '2'\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit</a>\n                                            <a (click)=\"deleteAction(i)\" *ngIf=\"allowClass\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</a>\n                                        </div>\n                                    </div>\n                                    <!--                            <button (click)=\"correctionPage(list, 'assignments')\" *ngIf=\"viewType == 1 || viewType == 3\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Grading\"><i aria-hidden=\"true\" class=\"fa fa-users\"></i></button>-->\n                                    <!--                            <button (click)=\"PreviewPage(list, 'assignments', 'student_preview')\" *ngIf=\"list.content_format == 1 && (viewType == 1 || viewType == 3)\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Student view\"><i class=\"fa fa-address-card\" aria-hidden=\"true\"></i></button>-->\n                                    <!--                            <button (click)=\"PreviewText(list, 'assignments', 'student_preview')\" *ngIf=\"list.content_format == 3 && (viewType == 1 || viewType == 3)\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Student view\"><i aria-hidden=\"true\" class=\"fa fa-address-card\"></i></button>-->\n                                    <!--                            <button (click)=\"openTeacherVersionPdf(list)\" *ngIf=\"list.teacher_version_path && list.teacher_version_path.length != ''\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Teacher Version PDF\"><i class=\"fa fa-id-badge\"></i></button>-->\n                                    <!--                            <button (click)=\"PreviewText(list, 'assignments', 'preview')\" *ngIf=\"list.content_format == 3\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Teacher View\"><i aria-hidden=\"true\" class=\"fa fa-eye\"></i></button>-->\n                                    <!--                            <button (click)=\"PreviewPage(list, 'assignments', 'preview')\" *ngIf=\"list.content_format == 1\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Teacher View\"><i aria-hidden=\"true\" class=\"fa fa-eye\"></i></button>-->\n                                    <!--                            <button (click)=\"reportDetails('Assignment', list)\" *ngIf=\"viewType == '1' || viewType == 3 && allowClass\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Reports\"><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i></button>-->\n                                    <!--                            <button (click)=\"itemsReportDetails(list)\" *ngIf=\"viewType != '2'\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Itemized Reports\"><i aria-hidden=\"true\" class=\"fa fa-file-archive-o\"></i></button>-->\n                                    <!--                            <button (click)=\"editAction(i, list)\" *ngIf=\"allowClass && viewType != '2'\" class=\"btn-sm-view btn-outline-primary mr-1\" title=\"Edit\"><i aria-hidden=\"true\" class=\"fa fa-pencil \"></i></button>-->\n                                    <!--                            <button class=\"btn-sm-view btn-outline-primary\" (click)=\"deleteAction(i)\" *ngIf=\"allowClass\" title=\"Delete\"><i class=\"fa fa-trash \" aria-hidden=\"true\"></i></button>-->\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </section>\n        </div>\n        <div *ngIf=\"type == 'assessments'\">\n            <div class=\"col-12 px-0 d-flex flex-wrap mt-3\" *ngIf=\"showGrid\">\n                <div *ngFor=\"let list of resourceList; let i = index\" (click)=\"navigateToStudentView(list, 'assessments')\" class=\"col-4 px-2\">\n                    <div class=\"card class-card class-hover cursor\">\n                        <div class=\"row p-2 d-flex flex-wrap\">\n                            <div class=\"col-3 school-img cursor mt-2\" (click)=\"detailPreview(i)\">\n                                <img *ngIf=\"list.profile_url == ''\" src=\"assets/images/ristaschool/assessment.png\" style=\"width: 50px;height: 50px;\" class=\"cursor rounded-circle\" alt=\"\">\n                                <img *ngIf=\"list.profile_url != ''\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + list.profile_url)\" style=\"width: 50px;height: 50px;\" class=\"cursor rounded-circle\" alt=\"\">\n                            </div>\n                            <div class=\"col-9\">\n                                <h4 class=\"t-period\"><span class=\"font-weight-bold\">{{list.content_name}}\n                                    <small *ngIf=\"list.content_format == '1'\" class=\"contenttext\">(PDF)</small>\n                                    <small *ngIf=\"list.content_format == '2'\" class=\"contenttext\">(LINK)</small>\n                                    <small *ngIf=\"list.content_format == '3'\" class=\"contenttext\">(TEXT)</small>\n                                    </span></h4>\n                                <p>\n                                    <span *ngIf=\"list.start_date != '0000-00-00' && list.start_date != ''\" class=\"contenttext font-weight-bold\">{{list.start_date| customDateFormat}}</span>\n                                    <span *ngIf=\"list.start_date != '0000-00-00' && list.end_date != '0000-00-00' && list.start_date != '' && list.end_date != ''\">&nbsp;-&nbsp;</span>\n                                    <span *ngIf=\"list.end_date != '0000-00-00' && list.end_date != ''\" class=\"contenttext font-weight-bold\">{{list.end_date| customDateFormat}}</span>&nbsp;<br/>\n                                    <span *ngIf=\"list.start_time != list.end_time\">\n                                            <span class=\"contenttext font-weight-bold\">{{list.start_time}}</span>&nbsp;-&nbsp;<span class=\"contenttext font-weight-bold\">{{list.end_time}}</span>\n                                        </span>\n                                </p>\n                            </div>\n                            <div class=\"col-12 d-flex justify-content-end mt-2\">\n                                <div class=\"dropdown\" (click)=\"$event.stopPropagation()\">\n                                    <button class=\"btn btn-outline-primary\">Action <i class=\"fa fa-sort-desc float-right ml-2\" aria-hidden=\"true\"></i></button>\n                                    <div class=\"dropdown-content\" style=\"right: 1px\">\n                                        <a (click)=\"correctionPage(list, 'assessments')\" *ngIf=\"viewType == 1 || viewType == 3\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i> Grading</a>\n                                        <a (click)=\"PreviewPage(list, 'assessments', 'student_preview')\" *ngIf=\"list.content_format == 1 && (viewType == 1 || viewType == 3)\"><i class=\"fa fa-address-card\" aria-hidden=\"true\"></i> Student view</a>\n                                        <a (click)=\"PreviewText(list, 'assessments', 'student_preview')\" *ngIf=\"list.content_format == 3 && (viewType == 1 || viewType == 3)\"><i class=\"fa fa-address-card\" aria-hidden=\"true\"></i> Student view</a>\n                                        <a (click)=\"openTeacherVersionPdf(list)\" *ngIf=\"list.teacher_version_path && list.teacher_version_path.length != ''\"><i class=\"fa fa-id-badge\" aria-hidden=\"true\"></i> Teacher Version PDF</a>\n                                        <a (click)=\"PreviewText(list, 'assessments', 'teacher_preview')\" *ngIf=\"list.content_format == 3\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> Teacher View</a>\n                                        <a (click)=\"PreviewPage(list, 'assessments', 'teacher_preview')\" *ngIf=\"list.content_format == 1\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> Teacher View</a>\n                                        <a (click)=\"reportDetails('Assessment', list)\" *ngIf=\"viewType == '1' || viewType == 3 && allowClass\"><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i> Reports</a>\n                                        <a (click)=\"itemsReportDetails(list)\" *ngIf=\"viewType != '2'\"><i class=\"fa fa-file-archive-o\" aria-hidden=\"true\"></i> Itemized Reports</a>\n                                        <a (click)=\"editAction(i, list)\" *ngIf=\"allowClass&& viewType != '2'\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit</a>\n                                        <a (click)=\"deleteAction(i)\" *ngIf=\"allowClass\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</a>\n                                    </div>\n                                </div>\n                                <!--                            <button (click)=\"correctionPage(list, 'assessments')\" *ngIf=\"viewType == 1 || viewType == 3\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Grading\"><i aria-hidden=\"true\" class=\"fa fa-users\"></i></button>-->\n                                <!--                            <button (click)=\"PreviewPage(list, 'assessments', 'student_preview')\" *ngIf=\"list.content_format == 1 && (viewType == 1 || viewType == 3)\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Student view\"><i class=\"fa fa-address-card\" aria-hidden=\"true\"></i></button>-->\n                                <!--                            <button (click)=\"PreviewText(list, 'assessments', 'student_preview')\" *ngIf=\"list.content_format == 3 && (viewType == 1 || viewType == 3)\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Student view\"><i aria-hidden=\"true\" class=\"fa fa-address-card\"></i></button>-->\n                                <!--                            <button (click)=\"openTeacherVersionPdf(list)\" *ngIf=\"list.teacher_version_path && list.teacher_version_path.length != ''\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Teacher Version PDF\"><i class=\"fa fa-id-badge\"></i></button>-->\n                                <!--                            <button (click)=\"PreviewText(list, 'assessments', 'preview')\" *ngIf=\"list.content_format == 3\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Teacher View\"><i aria-hidden=\"true\" class=\"fa fa-eye\"></i></button>-->\n                                <!--                            <button (click)=\"PreviewPage(list, 'assessments', 'preview')\" *ngIf=\"list.content_format == 1\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Teacher View\"><i aria-hidden=\"true\" class=\"fa fa-eye\"></i></button>-->\n                                <!--                            <button (click)=\"reportDetails('Assessment', list)\" *ngIf=\"viewType == '1' || viewType == 3 && allowClass\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Reports\"><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i></button>-->\n                                <!--                            <button (click)=\"itemsReportDetails(list)\" *ngIf=\"viewType != '2'\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Itemized Reports\"><i aria-hidden=\"true\" class=\"fa fa-file-archive-o\"></i></button>-->\n                                <!--                            <button (click)=\"editAction(i, list)\" *ngIf=\"allowClass && viewType != '2'\" class=\"btn-sm-view btn-outline-primary mr-1\" title=\"Edit\"><i aria-hidden=\"true\" class=\"fa fa-pencil \"></i></button>-->\n                                <!--                            <button class=\"btn-sm-view btn-outline-primary\" (click)=\"deleteAction(i)\" *ngIf=\"allowClass\" title=\"Delete\"><i class=\"fa fa-trash \" aria-hidden=\"true\"></i></button>-->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 d-flex flex-column justify-content-center mt-3\" *ngIf=\"!showGrid\">\n                <div *ngFor=\"let list of resourceList; let i = index\" (click)=\"navigateToStudentView(list, 'assessments')\" class=\"col-12 card class-card class-hover cursor\">\n                    <div class=\"row p-2 d-flex flex-wrap\">\n                        <div class=\"col-1 school-img cursor\" (click)=\"detailPreview(i)\">\n                            <img *ngIf=\"list.profile_url == ''\" src=\"assets/images/ristaschool/assessment.png\" style=\"width: 50px;height: 50px;\" class=\"cursor rounded-circle\" alt=\"\">\n                            <img *ngIf=\"list.profile_url != ''\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + list.profile_url)\" style=\"width: 50px;height: 50px;\" class=\"cursor rounded-circle\" alt=\"\">\n                        </div>\n                        <div class=\"col-6\">\n                            <h4 class=\"t-period\"><span class=\"font-weight-bold\">{{list.content_name}}\n                                <small *ngIf=\"list.content_format == '1'\" class=\"contenttext\">(PDF)</small>\n                                    <small *ngIf=\"list.content_format == '2'\" class=\"contenttext\">(LINK)</small>\n                                    <small *ngIf=\"list.content_format == '3'\" class=\"contenttext\">(TEXT)</small>\n                                    </span></h4>\n                            <p class=\"mb-0\">\n                                <span *ngIf=\"list.start_date != '0000-00-00' && list.start_date != ''\" class=\"contenttext font-weight-bold\">{{list.start_date| customDateFormat}}</span>\n                                &nbsp;<span class=\"contenttext font-weight-bold\" *ngIf=\"list.start_time != list.end_time\">{{list.start_time}}</span>\n                                <span *ngIf=\"list.start_date != '0000-00-00' && list.end_date != '0000-00-00' && list.start_date != '' && list.end_date != ''\">&nbsp;-&nbsp;</span>\n                                <span *ngIf=\"list.end_date != '0000-00-00' && list.end_date != ''\" class=\"contenttext font-weight-bold\">{{list.end_date| customDateFormat}}</span>\n                                &nbsp;<span class=\"contenttext font-weight-bold\" *ngIf=\"list.start_time != list.end_time\">{{list.end_time}}</span>\n                            </p>\n                        </div>\n                        <div class=\"col-5 d-flex justify-content-end mt-2\">\n                            <div class=\"dropdown\" (click)=\"$event.stopPropagation()\">\n                                <button class=\"btn btn-outline-primary\">Action <i class=\"fa fa-sort-desc float-right ml-2\" aria-hidden=\"true\"></i></button>\n                                <div class=\"dropdown-content\" style=\"right: 1px\">\n                                    <a (click)=\"correctionPage(list, 'assessments')\" *ngIf=\"viewType == 1 || viewType == 3\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i> Grading</a>\n                                    <a (click)=\"PreviewPage(list, 'assessments', 'student_preview')\" *ngIf=\"list.content_format == 1 && (viewType == 1 || viewType == 3)\"><i class=\"fa fa-address-card\" aria-hidden=\"true\"></i> Student view</a>\n                                    <a (click)=\"PreviewText(list, 'assessments', 'student_preview')\" *ngIf=\"list.content_format == 3 && (viewType == 1 || viewType == 3)\"><i class=\"fa fa-address-card\" aria-hidden=\"true\"></i> Student view</a>\n                                    <a (click)=\"openTeacherVersionPdf(list)\" *ngIf=\"list.teacher_version_path && list.teacher_version_path.length != ''\"><i class=\"fa fa-id-badge\" aria-hidden=\"true\"></i> Teacher Version PDF</a>\n                                    <a (click)=\"PreviewText(list, 'assessments', 'teacher_preview')\" *ngIf=\"list.content_format == 3\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> Teacher View</a>\n                                    <a (click)=\"PreviewPage(list, 'assessments', 'teacher_preview')\" *ngIf=\"list.content_format == 1\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> Teacher View</a>\n                                    <a (click)=\"reportDetails('Assessment', list)\" *ngIf=\"viewType == '1' || viewType == 3 && allowClass\"><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i> Reports</a>\n                                    <a (click)=\"itemsReportDetails(list)\" *ngIf=\"viewType != '2'\"><i class=\"fa fa-file-archive-o\" aria-hidden=\"true\"></i> Itemized Reports</a>\n                                    <a (click)=\"editAction(i, list)\" *ngIf=\"allowClass&& viewType != '2'\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit</a>\n                                    <a (click)=\"deleteAction(i)\" *ngIf=\"allowClass\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</a>\n                                </div>\n                            </div>\n<!--                            <button (click)=\"correctionPage(list, 'assessments')\" *ngIf=\"viewType == 1 || viewType == 3\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Grading\"><i aria-hidden=\"true\" class=\"fa fa-users\"></i></button>-->\n<!--                            <button (click)=\"PreviewPage(list, 'assessments', 'student_preview')\" *ngIf=\"list.content_format == 1 && (viewType == 1 || viewType == 3)\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Student view\"><i class=\"fa fa-address-card\" aria-hidden=\"true\"></i></button>-->\n<!--                            <button (click)=\"PreviewText(list, 'assessments', 'student_preview')\" *ngIf=\"list.content_format == 3 && (viewType == 1 || viewType == 3)\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Student view\"><i aria-hidden=\"true\" class=\"fa fa-address-card\"></i></button>-->\n<!--                            <button (click)=\"openTeacherVersionPdf(list)\" *ngIf=\"list.teacher_version_path && list.teacher_version_path.length != ''\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Teacher Version PDF\"><i class=\"fa fa-id-badge\"></i></button>-->\n<!--                            <button (click)=\"PreviewText(list, 'assessments', 'preview')\" *ngIf=\"list.content_format == 3\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Teacher View\"><i aria-hidden=\"true\" class=\"fa fa-eye\"></i></button>-->\n<!--                            <button (click)=\"PreviewPage(list, 'assessments', 'preview')\" *ngIf=\"list.content_format == 1\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Teacher View\"><i aria-hidden=\"true\" class=\"fa fa-eye\"></i></button>-->\n<!--                            <button (click)=\"reportDetails('Assessment', list)\" *ngIf=\"viewType == '1' || viewType == 3 && allowClass\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Reports\"><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i></button>-->\n<!--                            <button (click)=\"itemsReportDetails(list)\" *ngIf=\"viewType != '2'\" class=\"btn-outline-primary btn-sm-view mr-1\" title=\"Itemized Reports\"><i aria-hidden=\"true\" class=\"fa fa-file-archive-o\"></i></button>-->\n<!--                            <button (click)=\"editAction(i, list)\" *ngIf=\"allowClass && viewType != '2'\" class=\"btn-sm-view btn-outline-primary mr-1\" title=\"Edit\"><i aria-hidden=\"true\" class=\"fa fa-pencil \"></i></button>-->\n<!--                            <button class=\"btn-sm-view btn-outline-primary\" (click)=\"deleteAction(i)\" *ngIf=\"allowClass\" title=\"Delete\"><i class=\"fa fa-trash \" aria-hidden=\"true\"></i></button>-->\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n</div>\n<ng-template #detailsTemplate let-c=\"close\" let-d=\"dismiss\">\n    <div  class=\"modal-header\">\n        <p><b>{{contentname}}</b></p>\n        <i class=\"fa fa-times cursor\" (click)=\"close()\" title=\"close\" ></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"row-6\">\n                    <img *ngIf=\"profileurl == '' && contentType == 1\" src=\"assets/images/ristaschool/resource.png\" style=\"width: 370px; height: 270px\" alt=\"\">\n                    <img *ngIf=\"profileurl == '' && contentType == 2\" src=\"assets/images/ristaschool/option-writing-checkbox-concepts-survey.png\" style=\"width: 370px; height: 270px\" alt=\"\">\n                    <img *ngIf=\"profileurl == '' && contentType == 3\" src=\"assets/images/ristaschool/assessment.png\" style=\"width: 370px; height: 270px\" alt=\"\">\n                    <img *ngIf=\"profileurl != ''\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + profileurl)\" style=\"width: 370px; height: 270px\" alt=\"\">\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"mt-2\">\n                    <p>Created by <br><b class=\"contenttext\">{{createdby}}</b></p>\n                    <p>Grade <br><b class=\"contenttext\">{{gradename}}</b></p>\n                    <p>Subject <br><b class=\"contenttext\">{{subjectname}}</b></p>\n                    <p>Tags <br><b class=\"contenttext\">{{tags}}</b></p>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <p>No of Questions <br><b class=\"contenttext\">{{noofquestions}}</b></p>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <p>Status <br><b class=\"contenttext\">{{details}}</b></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\" *ngFor=\"let list of resourceList\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Delete {{type == 'resources' ? 'Resource' : type == 'assignments' ? 'Assignment' : 'Assessment'}}</h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <h5 class=\"text-center mt-3\">Are you sure you want to delete this {{type == 'resources' ? 'resource' : type == 'assignments' ? 'assignment' : 'assessment'}}</h5>\n                </div>\n            </div>\n        </div>\n\n        <!-- Container-fluid Ends-->\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"update(del)\">Delete</button>\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"close()\">Cancel</button>\n    </div>\n</ng-template>\n<ng-template #assign let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"contenttext\">{{contentname}}</h4>\n    </div>\n    <div class=\"modal-body\">\n        <form [formGroup]=\"contentForm\">\n            <div>\n                <div class=\"row form-group\">\n                    <div class=\"col-md-12\">\n                        <label>{{viewType == '2' ? 'Content Folder Name' : 'Class Name'}}</label>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <input class=\"form-control\" readonly type=\"text\" placeholder=\"Enter the Class Name\" value=\"{{className}}\">\n                    </div>\n                </div>\n                </div>\n\n            <div class=\"row form-group mb-3\" *ngIf=\"allowScore\">\n                <!--        <div class=\"row form-group\">-->\n                <div class=\"col-md-12\">\n                    <label>Release Score</label>\n                </div>\n                <div class=\"col-md-12\">\n                    <!--                <select class=\"form-control\"  formControlName=\"releaseScore\" (change)=\"typeSelection()\">-->\n                    <select (change)=\"releaseScoreFilter($event)\"  class=\"form-control\" formControlName=\"releaseScore\">\n                        <option  value=\"n/a\" disabled>Select Response type</option>\n                        <option value=\"0\">Do not release scores or response</option>\n                        <option value=\"1\">Release scores and correct answers after the test is complete</option>\n                        <option value=\"2\" *ngIf=\"contentFormat == '3'\">Release scores and correct answers after each question</option>\n                    </select>\n                </div>\n            </div>\n            <div *ngIf=\"!checkAutoRelease\" class=\"col-12 px-0\">\n                <p class=\"assign-error text-center\">Auto score release is not applicable for this content</p>\n            </div>\n\n                <div *ngIf=\"viewType != '2'\" class=\"row form-group\">\n                    <div class=\"col-md-2\">\n                        <div class=\"row-md-12\">\n                            <label>Start Date</label>\n                        </div>\n                        <div class=\"row-md-12\">\n                            <input class=\"form-control\" placeholder=\"Start Date\" formControlName=\"startdate\"\n                                   name=\"dp\" angular-mydatepicker #dp=\"angular-mydatepicker\" autocomplete=\"off\"\n                                   [options]=\"myDpOptions1\" (dateChanged)=\"onDateChanged($event)\" (click)=\"dp.toggleCalendar()\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"row-md-12\">\n                            <label>Start Time</label>\n                        </div>\n                        <div class=\"row-md-12\">\n                            <ngb-timepicker [(ngModel)]=\"fromTime\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"checkTime()\"  [meridian]=\"meridian\" [spinners]=\"spinner\"></ngb-timepicker>\n                        </div>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <div class=\"row-md-12\">\n                            <label>End Date</label>\n                        </div>\n                        <div class=\"row-md-12\">\n                            <input class=\"form-control\" placeholder=\"End Date\" formControlName=\"enddate\"\n                                   name=\"dp1\" angular-mydatepicker #dp1=\"angular-mydatepicker\" autocomplete=\"off\"\n                                   [options]=\"myDpOptions2\" (click)=\"dp1.toggleCalendar()\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"row-md-12\">\n                            <label>End Time</label>\n                        </div>\n                        <div class=\"row-md-12\">\n                            <ngb-timepicker [(ngModel)]=\"toTime\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"checkTime()\"  [meridian]=\"meridian\" [spinners]=\"spinner\"></ngb-timepicker>\n                        </div>\n                    </div>\n                </div>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-outline-primary\" (click)=\"contentClose()\">Cancel</button>\n        <button class=\"btn btn-primary\" (click)=\"editContentDetails(edit)\">Submit</button>\n    </div>\n</ng-template>\n<ng-template #reports>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Report</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"onSave()\" ></i>\n    </div>\n    <div class=\"modal-body\">\n        <app-missed-work-report\n                [classShow] = \"true\"\n                [showContent]= \"selectContent\"\n                [studentView]= \"false\"\n                [timeView]= \"false\"\n                [contentNameValue]= \"contentNameValue\">\n        </app-missed-work-report>\n    </div>\n\n</ng-template>\n<ng-template #itemsReports>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">{{reportData.content_name | titlecase}} - Report</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"onSave()\" ></i>\n    </div>\n    <div class=\"modal-body\">\n        <app-items-report\n                [showContent]= \"'other'\"\n                [studentView]= \"false\"\n                [timeView]= \"true\">\n        </app-items-report>\n    </div>\n\n</ng-template>\n<ng-template #teacherVersion>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Teacher Version</h4>\n        <i (click)=\"onSave()\" class=\"fa fa-close cursor\" ></i>\n    </div>\n    <div class=\"modal-body\">\n        <pdf-viewer [src]=\"pdfTeacherVersion\" style=\"display: block;height: 100vh;\"></pdf-viewer>\n    </div>\n</ng-template>\n", styles: ["//svg {\n//  cursor: crosshair;\n//  border: 1px solid #000000;\n//}\n//\n//rect {\n//  fill: none;\n//  stroke: #000000;\n//  stroke-width: 10;\n//}\n\n.rectangle {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  &.move-to {\n    background-color: red;\n  }\n}\n\n\n\n.header {\n  h2 {\n    padding: 10px;\n    color: #37474f;\n  }\n  .link {\n    border-bottom: 1px solid black;\n    padding: 10px;\n    font-size: 11px;\n    a {\n      color: #673ab7;\n    }\n  }\n}\n\n.list {\n  display: flex;\n  flex-direction: column;\n  &-row {\n    padding: 10px;\n    border-bottom: 1px solid black;\n    cursor: pointer;\n    position: relative;\n    &:hover {\n      background-color: #d5d5d5;\n    }\n    .delete-btn {\n      position: absolute;\n      top: 0;\n      right: 0;\n      .icon {\n        font-size: 16px;\n      }\n    }\n    pre {\n      .pre-title {\n        text-align: left;\n      }\n    }\n    .page-number {\n      text-align: right;\n      font-size: 12px;\n    }\n  }\n}\n\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.AssessmentService }, { type: i3.Router }, { type: i4.FormBuilder }, { type: i3.ActivatedRoute }, { type: i5.NewsubjectService }, { type: i6.DomSanitizer }, { type: i7.ConfigurationService }, { type: i8.NgbModal }, { type: i9.ClassService }, { type: i10.DatePipe }, { type: i11.ToastrService }, { type: i12.CommonService }, { type: i13.CommonDataService }, { type: i14.CreatorService }], { addDetails: [{
            type: ViewChild,
            args: ['detailsTemplate']
        }], addResources: [{
            type: ViewChild,
            args: ['resources']
        }], addAssignment: [{
            type: ViewChild,
            args: ['assignment']
        }], addAssessment: [{
            type: ViewChild,
            args: ['assessment']
        }], deleteContent: [{
            type: ViewChild,
            args: ['content']
        }], addAssign: [{
            type: ViewChild,
            args: ['assign']
        }], reports: [{
            type: ViewChild,
            args: ['reports']
        }], itemsReports: [{
            type: ViewChild,
            args: ['itemsReports']
        }], teacherVersion: [{
            type: ViewChild,
            args: ['teacherVersion']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ViewAssignComponent, { className: "ViewAssignComponent" }); })();
//# sourceMappingURL=view-assign.component.js.map