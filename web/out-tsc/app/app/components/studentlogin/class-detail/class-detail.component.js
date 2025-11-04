import { Component, inject, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dateOptions } from '../../../shared/data/config';
import { CreatorService } from '../../../shared/service/creator.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../../../shared/service/configuration.service";
import * as i4 from "../../../shared/service/student.service";
import * as i5 from "../../../shared/service/auth.service";
import * as i6 from "../../../shared/service/common-data.service";
import * as i7 from "@angular/platform-browser";
import * as i8 from "@angular/router";
import * as i9 from "@angular/common";
import * as i10 from "ngx-toastr";
import * as i11 from "../../../shared/service/newsubject.service";
import * as i12 from "../../../shared/service/common.service";
import * as i13 from "../../../shared/service/class.service";
import * as i14 from "../../../environment.service";
import * as i15 from "../../../shared/service/zoom-service.service";
const _c0 = ["throwError"];
const _c1 = ["content"];
const _c2 = ["notesDetail"];
const _c3 = ["zoomDialog"];
const _c4 = ["zoomDialog1"];
const _c5 = ["video"];
const _c6 = ["messageInput"];
const _c7 = ["messagerChat"];
const _c8 = ["submitPopUp"];
const _c9 = ["submitTestPopUp"];
const _c10 = ["startTimerDuration"];
const _c11 = ["feedbackStatus"];
const _c12 = () => [];
const _c13 = () => ["3", "4", "5", "6"];
const _c14 = (a0, a1, a2) => ({ "class-card-new": a0, "class-card-in-progress": a1, "class-card-completed": a2 });
function ClassDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "div", 26)(2, "button", 27);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function ClassDetailComponent_section_2_div_2_figure_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 49);
    i0.ɵɵelementEnd();
} }
function ClassDetailComponent_section_2_div_2_figure_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 50);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r3.sanitizer.bypassSecurityTrustResourceUrl(ctx_r3.webhost + "/" + list_r3.profile_url), i0.ɵɵsanitizeUrl);
} }
function ClassDetailComponent_section_2_div_2_p_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p")(1, "span", 37);
    i0.ɵɵtext(2, "Start: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " \u00A0 \u00A0 ");
    i0.ɵɵelementStart(4, "span", 37);
    i0.ɵɵtext(5, "End: ");
    i0.ɵɵelementEnd()();
} }
function ClassDetailComponent_section_2_div_2_p_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p")(1, "span", 37);
    i0.ɵɵtext(2, "Start: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 38);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, " \u00A0 \u00A0 ");
    i0.ɵɵelementStart(7, "span", 37);
    i0.ɵɵtext(8, "End: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 38);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind2(5, 4, list_r3.start_date, "MM/dd/yyyy"), " ", list_r3.start_time, "");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind2(11, 7, list_r3.end_date, "MM/dd/yyyy"), " ", list_r3.end_time, "");
} }
function ClassDetailComponent_section_2_div_2_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 51);
    i0.ɵɵtext(1, "Not Started");
    i0.ɵɵelementEnd();
} }
function ClassDetailComponent_section_2_div_2_span_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 52);
    i0.ɵɵtext(1, "In-Progress");
    i0.ɵɵelementEnd();
} }
function ClassDetailComponent_section_2_div_2_span_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 53);
    i0.ɵɵtext(1, "Completed");
    i0.ɵɵelementEnd();
} }
function ClassDetailComponent_section_2_div_2_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 54);
    i0.ɵɵlistener("click", function ClassDetailComponent_section_2_div_2_button_25_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const list_r3 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); ctx_r3.otherlink(list_r3.video_link); return i0.ɵɵresetView(ctx_r3.tabShow = "otherlinks"); });
    i0.ɵɵelement(1, "i", 55);
    i0.ɵɵtext(2, "Other Links");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("btn btn-outline-primary ml-2 ", ctx_r3.env.deviceType() ? "border-radius-5" : "", "");
} }
function ClassDetailComponent_section_2_div_2_a_29_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a")(1, "button", 54);
    i0.ɵɵlistener("click", function ClassDetailComponent_section_2_div_2_a_29_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r6); const list_r3 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.openZoomDialog(list_r3)); });
    i0.ɵɵelement(2, "i", 56);
    i0.ɵɵtext(3, "Enter Online Class");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx_r3.env.deviceType() ? "border-radius-5" : "", "");
} }
function ClassDetailComponent_section_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 32)(2, "div", 13)(3, "div", 33);
    i0.ɵɵtemplate(4, ClassDetailComponent_section_2_div_2_figure_4_Template, 2, 0, "figure", 34)(5, ClassDetailComponent_section_2_div_2_figure_5_Template, 2, 1, "figure", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 35)(7, "h4", 36)(8, "span", 37);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "p")(11, "span", 37);
    i0.ɵɵtext(12, "Subject: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span", 38);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(15, ClassDetailComponent_section_2_div_2_p_15_Template, 6, 0, "p", 34)(16, ClassDetailComponent_section_2_div_2_p_16_Template, 12, 10, "p", 34);
    i0.ɵɵelementStart(17, "div", 39)(18, "h4", 40);
    i0.ɵɵtemplate(19, ClassDetailComponent_section_2_div_2_span_19_Template, 2, 0, "span", 41)(20, ClassDetailComponent_section_2_div_2_span_20_Template, 2, 0, "span", 42)(21, ClassDetailComponent_section_2_div_2_span_21_Template, 2, 0, "span", 43);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "div", 35)(23, "div", 44)(24, "div", 45);
    i0.ɵɵtemplate(25, ClassDetailComponent_section_2_div_2_button_25_Template, 3, 3, "button", 46);
    i0.ɵɵelementStart(26, "button", 47);
    i0.ɵɵlistener("click", function ClassDetailComponent_section_2_div_2_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r2); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.navigateToSATReport()); });
    i0.ɵɵelement(27, "i", 48);
    i0.ɵɵtext(28, "View Report ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(29, ClassDetailComponent_section_2_div_2_a_29_Template, 4, 3, "a", 34);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const list_r3 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", list_r3.profile_url == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r3.profile_url != "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", list_r3 == null ? null : list_r3.class_name, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(list_r3.subject_name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r3.start_date == "0000-00-00" && list_r3.end_date == "0000-00-00");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r3.start_date != "0000-00-00" && list_r3.end_date != "0000-00-00");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r3.status == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r3.status == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r3.status == "3");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", (list_r3 == null ? null : list_r3.video_link) && (list_r3 == null ? null : list_r3.video_link == null ? null : list_r3.video_link.length) != "0");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", list_r3.class_type == "1" && list_r3.schedule_id != "");
} }
function ClassDetailComponent_section_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 28)(1, "div", 29);
    i0.ɵɵtemplate(2, ClassDetailComponent_section_2_div_2_Template, 30, 11, "div", 30);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.choosedData);
} }
function ClassDetailComponent_section_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 13)(1, "div", 57);
    i0.ɵɵelement(2, "app-inbox-chat", 58);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_10_0;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("to_id", (tmp_10_0 = ctx_r3.choosedData[0] == null ? null : ctx_r3.choosedData[0].teacher_id) !== null && tmp_10_0 !== undefined ? tmp_10_0 : i0.ɵɵpureFunction0(3, _c12))("choosedData", ctx_r3.choosedData)("arrayList", ctx_r3.messageList);
} }
function ClassDetailComponent_section_20_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 71);
    i0.ɵɵlistener("click", function ClassDetailComponent_section_20_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.isCollapsed = !ctx_r3.isCollapsed); });
    i0.ɵɵelement(1, "i", 72);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("aria-expanded", !ctx_r3.isCollapsed);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("fa ", !ctx_r3.isCollapsed ? "fa-compress" : "fa-arrows-alt", "");
    i0.ɵɵproperty("title", !ctx_r3.isCollapsed ? "Collapse" : "Expand");
} }
function ClassDetailComponent_section_20_div_16_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 84);
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function ClassDetailComponent_section_20_div_16_div_1_div_9_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 87);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("(", i0.ɵɵpipeBind1(2, 1, item_r9.start_date), "");
} }
function ClassDetailComponent_section_20_div_16_div_1_div_9_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u00A0-\u00A0");
    i0.ɵɵelementEnd();
} }
function ClassDetailComponent_section_20_div_16_div_1_div_9_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 87);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(2, 1, item_r9.end_date), ")");
} }
function ClassDetailComponent_section_20_div_16_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 85);
    i0.ɵɵtemplate(1, ClassDetailComponent_section_20_div_16_div_1_div_9_span_1_Template, 3, 3, "span", 86)(2, ClassDetailComponent_section_20_div_16_div_1_div_9_span_2_Template, 2, 0, "span", 34)(3, ClassDetailComponent_section_20_div_16_div_1_div_9_span_3_Template, 3, 3, "span", 86);
    i0.ɵɵtext(4, "\u00A0");
    i0.ɵɵelement(5, "br");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r9.start_date != "0000-00-00" && item_r9.start_date != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r9.start_date != "0000-00-00" && item_r9.end_date != "0000-00-00" && item_r9.start_date != "" && item_r9.end_date != "" && item_r9.end_date != null);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r9.end_date != "0000-00-00" && item_r9.end_date != "");
} }
function ClassDetailComponent_section_20_div_16_div_1_ng_template_12_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 106);
} if (rf & 2) {
    const list_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("src", ctx_r3.sanitizer.bypassSecurityTrustResourceUrl(ctx_r3.webhost + "/" + list_r11.profile_url), i0.ɵɵsanitizeUrl);
} }
function ClassDetailComponent_section_20_div_16_div_1_ng_template_12_div_1_img_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 107);
} }
function ClassDetailComponent_section_20_div_16_div_1_ng_template_12_div_1_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 108);
    i0.ɵɵtext(1, "Resource");
    i0.ɵɵelementEnd();
} }
function ClassDetailComponent_section_20_div_16_div_1_ng_template_12_div_1_span_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 109);
    i0.ɵɵtext(1, "Assignment");
    i0.ɵɵelementEnd();
} }
function ClassDetailComponent_section_20_div_16_div_1_ng_template_12_div_1_span_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 110);
    i0.ɵɵtext(1, "Assessment");
    i0.ɵɵelementEnd();
} }
function ClassDetailComponent_section_20_div_16_div_1_ng_template_12_div_1_span_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 38);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, list_r11.end_date, "MM/dd/yyyy"), "");
} }
function ClassDetailComponent_section_20_div_16_div_1_ng_template_12_div_1_i_31_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 111);
    i0.ɵɵlistener("click", function ClassDetailComponent_section_20_div_16_div_1_ng_template_12_div_1_i_31_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r12); const list_r11 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r3.navigateToSATReport(list_r11, $event)); });
    i0.ɵɵelementEnd();
} }
function ClassDetailComponent_section_20_div_16_div_1_ng_template_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 90)(1, "div", 91)(2, "div", 92);
    i0.ɵɵlistener("click", function ClassDetailComponent_section_20_div_16_div_1_ng_template_12_div_1_Template_div_click_2_listener() { const list_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r3 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r3.checkContentTime(list_r11)); });
    i0.ɵɵelementStart(3, "div", 13)(4, "div", 93);
    i0.ɵɵtemplate(5, ClassDetailComponent_section_20_div_16_div_1_ng_template_12_div_1_img_5_Template, 1, 1, "img", 94)(6, ClassDetailComponent_section_20_div_16_div_1_ng_template_12_div_1_img_6_Template, 1, 0, "img", 95);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 96)(8, "h4", 97)(9, "span", 37);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "b", 98)(12, "small");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "p");
    i0.ɵɵtemplate(15, ClassDetailComponent_section_20_div_16_div_1_ng_template_12_div_1_span_15_Template, 2, 0, "span", 99)(16, ClassDetailComponent_section_20_div_16_div_1_ng_template_12_div_1_span_16_Template, 2, 0, "span", 100)(17, ClassDetailComponent_section_20_div_16_div_1_ng_template_12_div_1_span_17_Template, 2, 0, "span", 101);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 102)(19, "p")(20, "span");
    i0.ɵɵtext(21, "Subject: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span", 38);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "div", 102)(25, "p", 103)(26, "span")(27, "span");
    i0.ɵɵtext(28, "End: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(29, ClassDetailComponent_section_20_div_16_div_1_ng_template_12_div_1_span_29_Template, 3, 4, "span", 104);
    i0.ɵɵtext(30, " \u00A0 \u00A0 ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(31, ClassDetailComponent_section_20_div_16_div_1_ng_template_12_div_1_i_31_Template, 1, 0, "i", 105);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const list_r11 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(12, _c14, list_r11.student_content_status == "1", list_r11.student_content_status == "2", i0.ɵɵpureFunction0(11, _c13).indexOf(list_r11.student_content_status) > -1));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", list_r11.profile_url != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r11.profile_url == "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", list_r11.content_name, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(list_r11.content_format == 3 ? "(TEXT)" : (list_r11 == null ? null : list_r11.is_pdf_content) != 1 ? "(LINK)" : "(PDF)");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r11.content_type == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r11.content_type == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r11.content_type == "3");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(list_r11.subject_name);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", list_r11.end_date != "0000-00-00");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r11.student_content_status == "3" && list_r11.content_format == "3");
} }
function ClassDetailComponent_section_20_div_16_div_1_ng_template_12_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 90)(1, "label", 112);
    i0.ɵɵtext(2, "No Content Available");
    i0.ɵɵelementEnd()();
} }
function ClassDetailComponent_section_20_div_16_div_1_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 88);
    i0.ɵɵtemplate(1, ClassDetailComponent_section_20_div_16_div_1_ng_template_12_div_1_Template, 32, 16, "div", 89)(2, ClassDetailComponent_section_20_div_16_div_1_ng_template_12_div_2_Template, 3, 0, "div", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r9.topicArray);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r9.topicArray.length == 0);
} }
function ClassDetailComponent_section_20_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 75)(1, "div", 76, 9)(3, "div", 77)(4, "button", 78)(5, "h4", 79);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "titlecase");
    i0.ɵɵtemplate(8, ClassDetailComponent_section_20_div_16_div_1_span_8_Template, 2, 0, "span", 80)(9, ClassDetailComponent_section_20_div_16_div_1_div_9_Template, 6, 3, "div", 81);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 82)(11, "div", 83);
    i0.ɵɵtemplate(12, ClassDetailComponent_section_20_div_16_div_1_ng_template_12_Template, 3, 2, "ng-template");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const topicIndex_r13 = ctx.index;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("closeOthers", true);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("ngbAccordionItem", topicIndex_r13);
    i0.ɵɵproperty("collapsed", ctx_r3.isCollapsed);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 6, item_r9.topic), "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r9.start_date != "0000-00-00" && item_r9.start_date != "" && item_r9.start_date != null);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r9.start_date != "0000-00-00" && item_r9.start_date != "" && item_r9.start_date != null);
} }
function ClassDetailComponent_section_20_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 73);
    i0.ɵɵtemplate(1, ClassDetailComponent_section_20_div_16_div_1_Template, 13, 8, "div", 74);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.topicListData);
} }
function ClassDetailComponent_section_20_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 113)(1, "div", 114)(2, "div", 115)(3, "p", 116);
    i0.ɵɵtext(4, "No Data Found!");
    i0.ɵɵelementEnd()()()();
} }
function ClassDetailComponent_section_20_div_24_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 106);
} if (rf & 2) {
    const curriculum_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r3.sanitizer.bypassSecurityTrustResourceUrl(ctx_r3.webhost + "/" + curriculum_r15.profile_url), i0.ɵɵsanitizeUrl);
} }
function ClassDetailComponent_section_20_div_24_img_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 107);
} }
function ClassDetailComponent_section_20_div_24_small_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "(PDF)");
    i0.ɵɵelementEnd();
} }
function ClassDetailComponent_section_20_div_24_small_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "(TEXT)");
    i0.ɵɵelementEnd();
} }
function ClassDetailComponent_section_20_div_24_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 108);
    i0.ɵɵtext(1, "Resource");
    i0.ɵɵelementEnd();
} }
function ClassDetailComponent_section_20_div_24_span_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 109);
    i0.ɵɵtext(1, "Assignment");
    i0.ɵɵelementEnd();
} }
function ClassDetailComponent_section_20_div_24_span_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 110);
    i0.ɵɵtext(1, "Assessment");
    i0.ɵɵelementEnd();
} }
function ClassDetailComponent_section_20_div_24_span_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 38);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const curriculum_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, curriculum_r15.end_date, "MM/dd/yyyy"), "");
} }
function ClassDetailComponent_section_20_div_24_i_31_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 120);
    i0.ɵɵlistener("click", function ClassDetailComponent_section_20_div_24_i_31_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r16); const curriculum_r15 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.navigateToSATReport(curriculum_r15, $event)); });
    i0.ɵɵelementEnd();
} }
function ClassDetailComponent_section_20_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 117)(1, "div", 118)(2, "div", 92);
    i0.ɵɵlistener("click", function ClassDetailComponent_section_20_div_24_Template_div_click_2_listener() { const curriculum_r15 = i0.ɵɵrestoreView(_r14).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.checkContentTime(curriculum_r15)); });
    i0.ɵɵelementStart(3, "div", 13)(4, "div", 93);
    i0.ɵɵtemplate(5, ClassDetailComponent_section_20_div_24_img_5_Template, 1, 1, "img", 94)(6, ClassDetailComponent_section_20_div_24_img_6_Template, 1, 0, "img", 95);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 96)(8, "h4", 97)(9, "span", 37);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "b", 98);
    i0.ɵɵtemplate(12, ClassDetailComponent_section_20_div_24_small_12_Template, 2, 0, "small", 34)(13, ClassDetailComponent_section_20_div_24_small_13_Template, 2, 0, "small", 34);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "p");
    i0.ɵɵtemplate(15, ClassDetailComponent_section_20_div_24_span_15_Template, 2, 0, "span", 99)(16, ClassDetailComponent_section_20_div_24_span_16_Template, 2, 0, "span", 100)(17, ClassDetailComponent_section_20_div_24_span_17_Template, 2, 0, "span", 101);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 102)(19, "p")(20, "span");
    i0.ɵɵtext(21, "Subject: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span", 38);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "div", 102)(25, "p", 103)(26, "span")(27, "span");
    i0.ɵɵtext(28, "End: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(29, ClassDetailComponent_section_20_div_24_span_29_Template, 3, 4, "span", 104);
    i0.ɵɵtext(30, " \u00A0 \u00A0 ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(31, ClassDetailComponent_section_20_div_24_i_31_Template, 1, 0, "i", 119);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const curriculum_r15 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(13, _c14, curriculum_r15.student_content_status == "1", curriculum_r15.student_content_status == "2", i0.ɵɵpureFunction0(12, _c13).indexOf(curriculum_r15.student_content_status) > -1));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", curriculum_r15.profile_url != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", curriculum_r15.profile_url == "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", curriculum_r15.content_name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", curriculum_r15.content_format == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", curriculum_r15.content_format == 3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", curriculum_r15.content_type == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", curriculum_r15.content_type == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", curriculum_r15.content_type == "3");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(curriculum_r15.subject_name);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", curriculum_r15.end_date != "0000-00-00");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", curriculum_r15.student_content_status == "3" && curriculum_r15.content_format == "3");
} }
function ClassDetailComponent_section_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 28)(1, "div", 59);
    i0.ɵɵtemplate(2, ClassDetailComponent_section_20_span_2_Template, 2, 5, "span", 60);
    i0.ɵɵelementStart(3, "div", 61)(4, "button");
    i0.ɵɵtext(5);
    i0.ɵɵelement(6, "i", 62);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 63)(8, "a", 64);
    i0.ɵɵlistener("click", function ClassDetailComponent_section_20_Template_a_click_8_listener() { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.classList("0")); });
    i0.ɵɵtext(9, "All");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "a", 64);
    i0.ɵɵlistener("click", function ClassDetailComponent_section_20_Template_a_click_10_listener() { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.classList("1")); });
    i0.ɵɵtext(11, "New");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "a", 64);
    i0.ɵɵlistener("click", function ClassDetailComponent_section_20_Template_a_click_12_listener() { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.classList("2")); });
    i0.ɵɵtext(13, "In Progress");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "a", 64);
    i0.ɵɵlistener("click", function ClassDetailComponent_section_20_Template_a_click_14_listener() { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.classList("3")); });
    i0.ɵɵtext(15, "Completed");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(16, ClassDetailComponent_section_20_div_16_Template, 2, 1, "div", 65);
    i0.ɵɵelementStart(17, "div")(18, "div", 13)(19, "div", 66)(20, "h4", 67);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(22, ClassDetailComponent_section_20_div_22_Template, 5, 0, "div", 68);
    i0.ɵɵelementStart(23, "div", 69);
    i0.ɵɵtemplate(24, ClassDetailComponent_section_20_div_24_Template, 32, 17, "div", 70);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.topicListData.length != 0);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx_r3.env.deviceType() ? "border-radius-5" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.contentFilterType == "1" ? "New" : ctx_r3.contentFilterType == "2" ? "In Progress" : ctx_r3.contentFilterType == "0" ? "All" : "Completed");
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngIf", ctx_r3.topicListData.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-md-12 mt-", ctx_r3.topicListData.length != 0 ? "5" : "3", "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.topicListData.length > 0 ? "Other Curriculum" : "Curriculum");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.curriculumListWithoutTopic.length == 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.curriculumListWithoutTopic);
} }
function ClassDetailComponent_section_21_div_8_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 38);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const source_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind2(2, 2, source_r18.recording_start, "MM/dd/yyyy"), " \u00A0", source_r18.recording_start, "");
} }
function ClassDetailComponent_section_21_div_8_span_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 38);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const source_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind2(2, 2, source_r18.recording_end, "MM/dd/yyyy hh:mm:ss a"), " \u00A0", source_r18.recording_end, "");
} }
function ClassDetailComponent_section_21_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 117)(1, "div", 125)(2, "div", 92);
    i0.ɵɵlistener("click", function ClassDetailComponent_section_21_div_8_Template_div_click_2_listener() { const source_r18 = i0.ɵɵrestoreView(_r17).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.navigateOutsideRecording(source_r18)); });
    i0.ɵɵelementStart(3, "div", 13)(4, "div", 96)(5, "p")(6, "span");
    i0.ɵɵtext(7, "Passcode: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 38);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " \u00A0 \u00A0 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 96)(12, "p")(13, "span");
    i0.ɵɵtext(14, "Start: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, ClassDetailComponent_section_21_div_8_span_15_Template, 3, 5, "span", 104);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 96)(17, "p")(18, "span");
    i0.ɵɵtext(19, "End: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(20, ClassDetailComponent_section_21_div_8_span_20_Template, 3, 5, "span", 104);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const source_r18 = ctx.$implicit;
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1("", source_r18.passcode, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", source_r18.recording_start != "0000-00-00");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", source_r18.recording_end != "0000-00-00");
} }
function ClassDetailComponent_section_21_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 114)(2, "div", 115)(3, "p", 116);
    i0.ɵɵtext(4, "No Recordings Found!");
    i0.ɵɵelementEnd()()()();
} }
function ClassDetailComponent_section_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 28)(1, "div", 121)(2, "div", 13)(3, "div", 66)(4, "h4", 67);
    i0.ɵɵtext(5, "Recordings");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 122)(7, "div", 123);
    i0.ɵɵtemplate(8, ClassDetailComponent_section_21_div_8_Template, 21, 3, "div", 70)(9, ClassDetailComponent_section_21_div_9_Template, 5, 0, "div", 124);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r3.videoSource);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.videoSource.length == 0);
} }
function ClassDetailComponent_section_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 90);
    i0.ɵɵelement(1, "app-other-link", 126);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("titleName", "Other Links")("showLink", false)("arrayValue", ctx_r3.linkdata);
} }
function ClassDetailComponent_section_23_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 135)(1, "div", 115)(2, "p", 116);
    i0.ɵɵtext(3, "No Announcement Found!");
    i0.ɵɵelementEnd()()();
} }
function ClassDetailComponent_section_23_div_1_div_9_div_1_div_4_small_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "By: ");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " - ");
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "br");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const announcement_r19 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", announcement_r19.created_by, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 2, announcement_r19.add_date, "medium"));
} }
function ClassDetailComponent_section_23_div_1_div_9_div_1_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 148)(1, "input", 149);
    i0.ɵɵtwoWayListener("ngModelChange", function ClassDetailComponent_section_23_div_1_div_9_div_1_div_4_div_6_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r20); const announcement_r19 = i0.ɵɵnextContext(2).$implicit; i0.ɵɵtwoWayBindingSet(announcement_r19.comment, $event) || (announcement_r19.comment = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup.enter", function ClassDetailComponent_section_23_div_1_div_9_div_1_div_4_div_6_Template_input_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r20); const announcement_r19 = i0.ɵɵnextContext(2).$implicit; const ctx_r3 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r3.announcementCommentDetails(announcement_r19)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 150)(3, "button", 151);
    i0.ɵɵlistener("click", function ClassDetailComponent_section_23_div_1_div_9_div_1_div_4_div_6_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r20); const announcement_r19 = i0.ɵɵnextContext(2).$implicit; const ctx_r3 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r3.announcementCommentDetails(announcement_r19)); });
    i0.ɵɵelementStart(4, "span", 152)(5, "span", 153);
    i0.ɵɵelement(6, "img", 154);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const announcement_r19 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", announcement_r19.comment);
} }
function ClassDetailComponent_section_23_div_1_div_9_div_1_div_4_small_8_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "s");
    i0.ɵɵelementEnd();
} }
function ClassDetailComponent_section_23_div_1_div_9_div_1_div_4_small_8_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "small", 155);
    i0.ɵɵlistener("click", function ClassDetailComponent_section_23_div_1_div_9_div_1_div_4_small_8_Template_small_click_0_listener() { i0.ɵɵrestoreView(_r21); const announcement_r19 = i0.ɵɵnextContext(2).$implicit; const ctx_r3 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(announcement_r19.id == ctx_r3.announcementSend ? ctx_r3.announcementSend = "" : ctx_r3.announcementView(announcement_r19)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, ClassDetailComponent_section_23_div_1_div_9_div_1_div_4_small_8_span_2_Template, 2, 0, "span", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const announcement_r19 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", announcement_r19.comment_count, " Comment");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", announcement_r19.comment_count > 1);
} }
function ClassDetailComponent_section_23_div_1_div_9_div_1_div_4_small_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 156);
    i0.ɵɵtext(1, "No Comment Available");
    i0.ɵɵelementEnd();
} }
function ClassDetailComponent_section_23_div_1_div_9_div_1_div_4_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 158)(1, "div", 13)(2, "div", 14)(3, "p", 159);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 160)(6, "small");
    i0.ɵɵtext(7, "By: ");
    i0.ɵɵelementStart(8, "strong");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "date");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const data_r22 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", ctx_r3.auth.getUserId() == data_r22.user_id ? "letter f-16" : "text-primary f-16");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(data_r22.comment);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r22.created_by);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" - ", i0.ɵɵpipeBind2(11, 4, data_r22.comment_date, "medium"), "");
} }
function ClassDetailComponent_section_23_div_1_div_9_div_1_div_4_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtemplate(1, ClassDetailComponent_section_23_div_1_div_9_div_1_div_4_div_10_div_1_Template, 12, 7, "div", 157);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.announcementCommentData);
} }
function ClassDetailComponent_section_23_div_1_div_9_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 140)(1, "div", 141);
    i0.ɵɵelement(2, "h5", 142);
    i0.ɵɵelementStart(3, "p", 143);
    i0.ɵɵtemplate(4, ClassDetailComponent_section_23_div_1_div_9_div_1_div_4_small_4_Template, 9, 5, "small", 34);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 144);
    i0.ɵɵtemplate(6, ClassDetailComponent_section_23_div_1_div_9_div_1_div_4_div_6_Template, 7, 1, "div", 145);
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtemplate(8, ClassDetailComponent_section_23_div_1_div_9_div_1_div_4_small_8_Template, 3, 2, "small", 146)(9, ClassDetailComponent_section_23_div_1_div_9_div_1_div_4_small_9_Template, 2, 0, "small", 147);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(10, ClassDetailComponent_section_23_div_1_div_9_div_1_div_4_div_10_Template, 2, 1, "div", 124);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const announcement_r19 = i0.ɵɵnextContext().$implicit;
    const classSeparation_r23 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r3.auth.getUserId() == announcement_r19.user_id ? "letter-primary" : "letter-info")("innerHTML", announcement_r19.note, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", announcement_r19.created_by != "" && announcement_r19.add_date != "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", classSeparation_r23.announcement_type == "3");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", announcement_r19.comment_count != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", announcement_r19.comment_count == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", announcement_r19.id == ctx_r3.announcementSend);
} }
function ClassDetailComponent_section_23_div_1_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 137)(1, "h5");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 138);
    i0.ɵɵtemplate(4, ClassDetailComponent_section_23_div_1_div_9_div_1_div_4_Template, 11, 7, "div", 139);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const announcement_r19 = ctx.$implicit;
    const announcementIndex_r24 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Announcement ", announcementIndex_r24 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", announcement_r19.add_date != "00-00-0000");
} }
function ClassDetailComponent_section_23_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, ClassDetailComponent_section_23_div_1_div_9_div_1_Template, 5, 2, "div", 136);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const classSeparation_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", classSeparation_r23.announcement_data);
} }
function ClassDetailComponent_section_23_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 129)(1, "div", 130)(2, "div", 131)(3, "div", 13)(4, "div", 132)(5, "h4", 133);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(7, "div", 32);
    i0.ɵɵtemplate(8, ClassDetailComponent_section_23_div_1_div_8_Template, 4, 0, "div", 134)(9, ClassDetailComponent_section_23_div_1_div_9_Template, 2, 1, "div", 22);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const classSeparation_r23 = ctx.$implicit;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(classSeparation_r23.class_name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", classSeparation_r23.announcement_data.length == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", classSeparation_r23.announcement_data.length != 0);
} }
function ClassDetailComponent_section_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 127);
    i0.ɵɵtemplate(1, ClassDetailComponent_section_23_div_1_Template, 10, 3, "div", 128);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.updatedAnnouncementList);
} }
function ClassDetailComponent_ng_template_24_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 29)(2, "a", 166)(3, "span", 167);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "hr");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("href", item_r26, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", item_r26);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r26);
} }
function ClassDetailComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 161)(1, "h4", 162);
    i0.ɵɵtext(2, "Other links");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 163)(4, "div", 10);
    i0.ɵɵtemplate(5, ClassDetailComponent_ng_template_24_div_5_Template, 6, 3, "div", 164);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 165)(7, "button", 54);
    i0.ɵɵlistener("click", function ClassDetailComponent_ng_template_24_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r25); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onSave()); });
    i0.ɵɵtext(8, "Cancel");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r3.linkdata);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx_r3.env.deviceType() ? "border-radius-5" : "", "");
} }
function ClassDetailComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 168)(1, "h5", 169);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 170);
    i0.ɵɵlistener("click", function ClassDetailComponent_ng_template_26_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r27); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 163)(5, "p", 40)(6, "b");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 165)(9, "div", 171)(10, "button", 172);
    i0.ɵɵlistener("click", function ClassDetailComponent_ng_template_26_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r27); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onSave()); });
    i0.ɵɵtext(11, "Ok");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.ErrorTitle);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r3.message);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMapInterpolate1("btn cancel ", ctx_r3.env.deviceType() ? "border-radius-5" : "", "");
} }
function ClassDetailComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 168)(1, "h4", 173);
    i0.ɵɵtext(2, "Zoom Meet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 170);
    i0.ɵɵlistener("click", function ClassDetailComponent_ng_template_28_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r28); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 174)(5, "div", 175)(6, "h5");
    i0.ɵɵtext(7, "Open zoom in ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 165)(9, "button", 172);
    i0.ɵɵlistener("click", function ClassDetailComponent_ng_template_28_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r28); const ctx_r3 = i0.ɵɵnextContext(); ctx_r3.modalRef.close(); return i0.ɵɵresetView(ctx_r3.zoomService.initZoomMeeting(ctx_r3.selectedClass)); });
    i0.ɵɵtext(10, "In App");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 54);
    i0.ɵɵlistener("click", function ClassDetailComponent_ng_template_28_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r28); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.navigateOutsideZoom(ctx_r3.zoomResponse)); });
    i0.ɵɵtext(12, "New Tab");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx_r3.env.deviceType() ? "border-radius-5" : "", "");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("btn btn-outline-primary ", ctx_r3.env.deviceType() ? "border-radius-5" : "", "");
} }
function ClassDetailComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 168)(1, "h4", 173);
    i0.ɵɵtext(2, "Zoom Meet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 170);
    i0.ɵɵlistener("click", function ClassDetailComponent_ng_template_30_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r29); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 174)(5, "div", 175)(6, "h5");
    i0.ɵɵtext(7, "No Zoom Meet Scheduled for this day");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 165)(9, "button", 172);
    i0.ɵɵlistener("click", function ClassDetailComponent_ng_template_30_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r29); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.modalRef.close()); });
    i0.ɵɵtext(10, "OK");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx_r3.env.deviceType() ? "border-radius-5" : "", "");
} }
function ClassDetailComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 168)(1, "h4", 173);
    i0.ɵɵtext(2, "Zoom Meet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 170);
    i0.ɵɵlistener("click", function ClassDetailComponent_ng_template_32_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r30); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 174)(5, "div", 175)(6, "video", 176);
    i0.ɵɵelement(7, "source", 177);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵpropertyInterpolate("src", ctx_r3.selectedRecording.play_video, i0.ɵɵsanitizeUrl);
} }
function ClassDetailComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 168)(1, "h5", 178);
    i0.ɵɵtext(2, "Duration Completed");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 163)(4, "div", 13)(5, "div", 29)(6, "h5", 40)(7, "span");
    i0.ɵɵtext(8, "Test time is now complete. All your answers will be saved and submitted\u00A0automatically");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(9, "div", 165)(10, "button", 179);
    i0.ɵɵlistener("click", function ClassDetailComponent_ng_template_34_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r31); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.submitAnswer(ctx_r3.contentData)); });
    i0.ɵɵtext(11, "Ok");
    i0.ɵɵelementEnd()();
} }
function ClassDetailComponent_ng_template_36_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " , submitted\u00A0 and moved to next content automatically.");
    i0.ɵɵelementEnd();
} }
function ClassDetailComponent_ng_template_36_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " and submitted\u00A0automatically.");
    i0.ɵɵelementEnd();
} }
function ClassDetailComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 168)(1, "h5", 178);
    i0.ɵɵtext(2, "Duration Completed");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 163)(4, "div", 13)(5, "div", 29)(6, "h5", 40)(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵtemplate(9, ClassDetailComponent_ng_template_36_span_9_Template, 2, 0, "span", 34)(10, ClassDetailComponent_ng_template_36_span_10_Template, 2, 0, "span", 34);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(11, "div", 165)(12, "button", 179);
    i0.ɵɵlistener("click", function ClassDetailComponent_ng_template_36_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r32); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.submitAnswer(ctx_r3.testContentData, "test")); });
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
function ClassDetailComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 168)(1, "h5", 178);
    i0.ɵɵtext(2, "Start Timer Duration");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 163)(4, "div", 13)(5, "div", 29)(6, "h5", 40);
    i0.ɵɵtext(7, " Click 'Ok' to start the assessment. Do not close the window once the assessment\u00A0is\u00A0started. ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(8, "div", 165)(9, "button", 180);
    i0.ɵɵlistener("click", function ClassDetailComponent_ng_template_38_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r33); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onSave()); });
    i0.ɵɵtext(10, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 179);
    i0.ɵɵlistener("click", function ClassDetailComponent_ng_template_38_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r33); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.updateContentStatus(ctx_r3.contentDetails)); });
    i0.ɵɵtext(12, "Ok");
    i0.ɵɵelementEnd()();
} }
function ClassDetailComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 163)(1, "div", 181);
    i0.ɵɵelement(2, "div", 182);
    i0.ɵɵelementStart(3, "span", 183);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.popUpMessage);
} }
export class ClassDetailComponent {
    constructor(formBuilder, config, confi, student, auth, commondata, modalService, sanitizer, route, firstcaps, toastr, newSubject, el, common, classes, env, datePipe, zoomService) {
        this.formBuilder = formBuilder;
        this.config = config;
        this.confi = confi;
        this.student = student;
        this.auth = auth;
        this.commondata = commondata;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.route = route;
        this.firstcaps = firstcaps;
        this.toastr = toastr;
        this.newSubject = newSubject;
        this.el = el;
        this.common = common;
        this.classes = classes;
        this.env = env;
        this.datePipe = datePipe;
        this.zoomService = zoomService;
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su'
        };
        this.choosedData = [];
        this.tabShow = 'curriculum';
        this.videoSource = [];
        this.settingList = [];
        this.settingValue = '0';
        this.assignData = [];
        this.linkdata = [];
        this.notesdata = [];
        this.topicListData = [];
        this.totalCurriculumList = [];
        this.curriculumListWithoutTopic = [];
        this.contentFilterType = '0';
        this.announcementCommentData = [];
        this.popUpMessage = '';
        this.isCollapsed = false;
        this.updatedAnnouncementList = [];
        this.announcementList = [];
        this.announcementSend = '';
        this.arrayValue = [];
        this.messageList = [];
        this.creator = inject(CreatorService);
        this.router = inject(ActivatedRoute);
        this.classList(this.contentFilterType);
        this.webhost = this.confi.getimgUrl();
        config.backdrop = 'static';
        config.keyboard = false;
        this.creator.changeViewList(true);
        this.listMessage();
    }
    ngOnInit() {
        this.allowSelect = true;
        this.newSubject.allowSchoolChange(this.allowSelect);
        this.auth.setClassDetailsRef(this);
        this.router.params.forEach((params) => {
            this.type = params.type;
            setTimeout(() => {
                if (this.type == 'announcement' && this.choosedData[0]?.notes != '') {
                    this.showNotes(this.choosedData[0]?.notes);
                    this.tabShow = 'notes';
                }
                else if (this.type == 'inbox') {
                    this.tabShow = 'inbox';
                }
            }, 1000);
        });
    }
    listMessage(calledFrom = '') {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.auth.getSessionData('class-id')
        };
        this.auth.postService(payload, 'mailbox/listMessages').subscribe((successData) => {
            console.log(successData, 'successData');
            if (successData.IsSuccess) {
                successData.ResponseObject.forEach((item) => {
                    item.createdByMe = item.from_id == this.auth.getUserId();
                });
                this.messageList = successData.ResponseObject;
                setTimeout(() => {
                    if (calledFrom) {
                        const element = document.getElementById('messagerChat');
                        if (element) {
                            element.scrollTo({ behavior: 'smooth', top: element.scrollHeight });
                        }
                    }
                }, 0);
                console.log(this.messageList, 'messageList');
            }
        }, (error) => console.error(error, 'error_listMessage'));
    }
    open(content) {
        this.modalService.open(content);
    }
    onSave() {
        this.modalRef.close();
    }
    close() {
        this.modalRef.close();
        this.schoolId = null;
        this.fileUploader = '';
        this.filetype = '';
    }
    inbox() {
        setTimeout(() => {
            this.messageInput.nativeElement.focus();
            this.listMessage('inbox');
        }, 0);
    }
    checkContentTime(selectedData) {
        if (selectedData.content_type == '1') {
            this.auth.setSessionData('classDetails', JSON.stringify(selectedData));
            this.route.navigate(['studentlogin/preview']);
        }
        else if (selectedData.content_type == '2') {
            this.auth.setSessionData('ContentType', selectedData.content_type == '2' ? 'Assignments' : 'Assessments');
            if (selectedData.student_content_status != 3) {
                if (selectedData.content_format == '3' && selectedData.content_started_at == null && (selectedData.student_content_status == '1' || selectedData.student_content_status == '2')) {
                    this.contentDetails = selectedData;
                    if (selectedData?.is_test == '1') {
                        this.modalRef = this.modalService.open(this.startTimerDuration);
                    }
                    else {
                        this.updateContentStatus(this.contentDetails);
                    }
                }
                else if (selectedData.content_format == '3' && selectedData.content_started_at != '' && selectedData.content_started_at && selectedData.content_duration != '0'
                    && (selectedData.student_content_status == '1' || selectedData.student_content_status == '2')) {
                    this.auth.getCurrentDateAndTime(selectedData, '', 'class-details').subscribe((isAllowed) => {
                        if (!isAllowed) {
                            console.log('Access denied');
                            this.contentData = selectedData;
                            this.modalRef = this.modalService.open(this.submitPopUp);
                        }
                    });
                }
                else {
                    selectedData.available_content_duration = selectedData.content_duration != '0' ? parseInt(selectedData.content_duration) * 60
                        : selectedData.content_time_taken != '0' ? parseInt(selectedData.content_time_taken) : 0;
                    if (selectedData?.is_test == '1') {
                        this.testDetails(selectedData);
                    }
                    else {
                        this.auth.setSessionData('classDetails', JSON.stringify(selectedData));
                        this.route.navigate(['/studentlogin/answering']);
                    }
                }
            }
            else {
                this.auth.setSessionData('student-card', JSON.stringify(selectedData));
                this.route.navigate(['/studentlogin/score-card']);
            }
        }
        else {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                class_id: selectedData.class_id,
                content_id: selectedData.content_id,
                school_id: this.auth.getSessionData('school_id'),
                class_content_id: selectedData.class_content_id
            };
            this.student.checkTime(data).subscribe((successData) => {
                this.checkContentTimeSuccess(successData, selectedData);
            }, (error) => {
                console.error(error, 'checkContentTimeError');
            });
        }
    }
    checkContentTimeSuccess(successData, selectedData) {
        if (successData.IsSuccess) {
            this.enterCurriculum(selectedData);
        }
        else {
            this.message = successData.ResponseObject;
            this.ErrorTitle = this.choosedData[0]?.class_name;
            this.modalRef = this.modalService.open(this.throwError, { size: 'md' });
        }
    }
    enterCurriculum(detail) {
        console.log(detail, 'detail');
        detail.class_id = this.auth.getSessionData('class-id');
        if (detail.status == 1 && detail.content_type != '2') {
            this.message = detail.content_name + ' ' + 'is' + ' ' + 'assessments not started';
            this.ErrorTitle = this.choosedData[0]?.class_name;
            this.modalRef = this.modalService.open(this.throwError, { size: 'md' });
        }
        else if (detail.status == 3 && (detail.student_content_status == 1 || detail.student_content_status == 2) && detail.content_type != '2') {
            console.log(detail, 'assessment321');
            this.message = detail.content_name + ' ' + 'is assessment End date is over';
            this.ErrorTitle = this.choosedData[0]?.class_name;
            this.modalRef = this.modalService.open(this.throwError, { size: 'md' });
        }
        else if (detail.student_content_status != 3) {
            this.auth.setSessionData('ContentType', detail.content_type == '2' ? 'Assignments' : 'Assessments');
            if (detail.content_format == '3' && detail.content_started_at == null &&
                (detail.student_content_status == '1' || detail.student_content_status == '2')) {
                this.contentDetails = detail;
                if (detail?.is_test == '1') {
                    this.modalRef = this.modalService.open(this.startTimerDuration);
                }
                else {
                    this.updateContentStatus(this.contentDetails);
                }
            }
            else if (detail.content_format == '3' && detail.content_started_at && detail.content_started_at != '' &&
                detail.content_duration != '0' && (detail.student_content_status == '1' || detail.student_content_status == '2')) {
                this.auth.getCurrentDateAndTime(detail, '', 'class-details').subscribe((isAllowed) => {
                    if (!isAllowed) {
                        console.log('Access denied');
                        this.contentData = detail;
                        this.modalRef = this.modalService.open(this.submitPopUp);
                    }
                });
            }
            else {
                this.auth.setSessionData('ContentType', detail.content_type == '2' ? 'Assignments' : 'Assessments');
                detail.available_content_duration = detail.content_duration != '0' ? parseInt(detail.content_duration) * 60 :
                    detail.content_time_taken != '0' ? parseInt(detail.content_time_taken) : 0;
                if (detail?.is_test == '1') {
                    this.testDetails(detail);
                }
                else {
                    this.auth.setSessionData('classDetails', JSON.stringify(detail));
                    this.route.navigate(['/studentlogin/answering']);
                }
            }
        }
        else {
            this.auth.setSessionData('student-card', JSON.stringify(detail));
            this.route.navigate(['/studentlogin/score-card']);
        }
    }
    updateContentStatus(data) {
        data.available_content_duration = data.content_duration != '0' ? parseInt(data.content_duration) * 60
            : data.content_time_taken != '0' ? parseInt(data.content_time_taken) : 0;
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
        this.creator.testDetail(data).subscribe((successData) => {
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
            if (calledFrom == 'submit') {
                this.modalRef?.close();
                this.popUpMessage = 'Please wait while we submitting all module...';
                this.modalRef = this.modalService.open(this.feedbackStatus, { backdrop: 'static' });
                this.submitAllTestAnswer(successData.ResponseObject);
            }
            else {
                this.modalRef?.close();
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
        await this.classList(this.contentFilterType);
        await this.modalRef.close();
    }
    submitTestFromAuthService(value) {
        console.log(value, 'value');
        this.testContentData = value;
        this.modalRef = this.modalService.open(this.submitTestPopUp);
    }
    async submitAnswer(contentData, calledFrom = '') {
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
                    await this.classList('1');
                }
            }
            catch (error) {
                console.error('Error during submitAnswer:', error);
                // Show user feedback if needed
            }
        }
    }
    classList(id) {
        this.contentFilterType = id;
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            class_id: this.auth.getSessionData('class-id'),
            schedule_id: this.auth.getSessionData('schedule_id'),
            type: id
        };
        this.classes.studentClassDetail(data).subscribe((successData) => {
            this.classListSuccess(successData);
        }, (error) => {
            console.error(error, 'error');
        });
    }
    classListSuccess(successData) {
        if (successData.IsSuccess) {
            this.choosedData = successData.ResponseObject.class_detail;
            console.log(this.choosedData, 'studentChoosed');
            this.settingValue = this.choosedData[0].student_zoom_view;
            this.totalCurriculumList = successData.ResponseObject.curriculum_detail;
            this.getClassRecording(this.choosedData[0]);
            this.getTopicList();
            this.curriculumListWithoutTopic = [];
            this.curriculumListWithoutTopic = this.totalCurriculumList.filter(value => value.topic_id == '0' || value.topic_id == '');
        }
    }
    getTopicList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: [this.choosedData[0].class_id],
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        this.classes.topicList(data).subscribe((successData) => {
            this.viewTopicListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_topic');
        });
    }
    viewTopicListSuccess(successData) {
        if (successData.IsSuccess) {
            this.topicListData = successData.ResponseObject;
            this.topicListData.forEach((items) => {
                items.topicArray = [];
                this.totalCurriculumList.forEach((curriculum) => {
                    if (curriculum.topic_id == items.topic_id) {
                        items.contentCollapse = true;
                        items.topicArray.push(curriculum);
                    }
                });
            });
            console.log(this.topicListData, 'topicList');
        }
    }
    showNotes(data) {
        this.announcementList = data;
        console.log(this.notesdata, 'daataa');
        this.updatedAnnouncementList = [];
        this.updatedAnnouncementList.push({
            class_id: this.choosedData[0].class_id,
            class_name: this.choosedData[0].class_name,
            announcement_type: this.choosedData[0].announcement_type,
            announcement_data: []
        });
        this.announcementList.forEach((items) => {
            const checkAnnouncementExistAlready = this.updatedAnnouncementList[0].announcement_data.some((announcement) => announcement.id == items.id);
            if (!checkAnnouncementExistAlready) {
                items.comment = '';
                this.updatedAnnouncementList[0].announcement_data.push(items);
            }
        });
    }
    otherlink(data) {
        // this.modalRef = this.modalService.open(this.link);
        this.linkdata = data;
        console.log(this.linkdata, 'daataa');
    }
    openZoomDialog(classData) {
        this.selectedClass = classData;
        if (classData.allow_zoom_api[0].value == '0') {
            this.navigateOutsideZoom(this.selectedClass);
        }
        else {
            this.getZoomMeeting(classData);
        }
    }
    getZoomMeeting(classData) {
        console.log(classData, 'classData');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            schedule_id: classData.schedule_id
        };
        this.student.zoomLink(data).subscribe((successData) => {
            this.commondata.showLoader(false);
            this.getZoomMeetingSuccess(successData);
        }, (error) => {
            this.commondata.showLoader(false);
            this.toastr.error(error.ErrorObject);
        });
    }
    getZoomMeetingSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(successData.ResponseObject, 'zoom link success');
            this.zoomResponse = successData.ResponseObject;
            if (this.selectedClass.allow_zoom_api[0].value == '0') {
                this.navigateOutsideZoom(successData.ResponseObject);
            }
            else if (this.selectedClass.allow_zoom_api[0].value == '1') {
                if (this.settingValue == '2') {
                    this.modalRef = this.modalService.open(this.zoomDialog, { size: 's' });
                }
                else if (this.settingValue == '1') {
                    this.navigateOutsideZoom(successData.ResponseObject);
                }
                else if (this.settingValue == '0') {
                    this.zoomService.initZoomMeeting(this.selectedClass);
                }
            }
        }
        else {
            this.toastr.error(successData.ResponseObject.message);
        }
    }
    getClassRecording(classData) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: classData.class_id,
            grade: [classData.grade],
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0'
        };
        this.classes.recording(data).subscribe((successData) => {
            this.commondata.showLoader(false);
            if (successData.IsSuccess) {
                console.log(successData, 'su');
                const recordings = [];
                successData.ResponseObject.forEach((item) => {
                    recordings.push(...item.meeting_recording);
                });
                this.videoSource = recordings;
                // this.videoSource = successData.ResponseObject;
            }
        }, (error) => {
            this.commondata.showLoader(false);
        });
    }
    navigateOutsideZoom(data) {
        console.log(data, 'datd');
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        if (this.selectedClass.allow_zoom_api[0].value == '0') {
            link.setAttribute('href', data.meeting_link);
        }
        else {
            link.setAttribute('href', data.student_link);
        }
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    navigateOutsideRecording(data) {
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        // link.setAttribute('href', data.meeting_recording);
        link.setAttribute('href', data.play_video);
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    announcementView(value) {
        console.log(value);
        this.announcementSend = value.id;
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            note_id: value.id
        };
        this.auth.postService(data, 'classes/getAnnouncementComments').subscribe((successData) => {
            if (successData.IsSuccess) {
                this.announcementCommentData = successData.ResponseObject;
                console.log(this.announcementCommentData, 'value111');
            }
            else {
                this.toastr.error(successData.ErrorObject);
            }
        }, (error) => {
            console.error(error, 'announcementView');
        });
    }
    announcementCommentDetails(value) {
        console.log(value);
        console.log(value.comment, 'comment');
        if (value.comment != '') {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                note_id: value.id,
                comment: value.comment,
                status: '1'
            };
            this.auth.postService(data, 'classes/addAnnouncementComments').subscribe((successData) => {
                if (successData.IsSuccess) {
                    this.announcementCommentData = successData.ResponseObject;
                    value.comment_count = this.announcementCommentData.length;
                    value.comment = '';
                    console.log(this.announcementCommentData, 'value111');
                }
                else {
                    this.toastr.error(successData.ErrorObject);
                }
            }, (error) => {
            });
        }
        else {
            this.toastr.error('Please enter the Comment');
        }
    }
    navigateToSATReport(calledFrom, event) {
        const satReportDetails = {
            class_id: this.auth.getSessionData('class-id'),
            class_name: this.choosedData[0]?.class_name,
            student_id: this.auth.getRoleId() == '5' ? this.auth.getUserId() : '0',
            content_id: calledFrom ? calledFrom.content_id : '0',
            student_content_id: calledFrom ? calledFrom.student_content_id : '0',
            test_type_id: calledFrom ? calledFrom.test_type_id : '0',
        };
        this.auth.setSessionData('satReportData', JSON.stringify(satReportDetails));
        this.auth.setSessionData('reportCalledFrom', 'class');
        this.route.navigate(['sat-report']);
        event ? event.stopPropagation() : '';
    }
    static { this.ɵfac = function ClassDetailComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ClassDetailComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.NgbModalConfig), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i4.StudentService), i0.ɵɵdirectiveInject(i5.AuthService), i0.ɵɵdirectiveInject(i6.CommonDataService), i0.ɵɵdirectiveInject(i2.NgbModal), i0.ɵɵdirectiveInject(i7.DomSanitizer), i0.ɵɵdirectiveInject(i8.Router), i0.ɵɵdirectiveInject(i9.TitleCasePipe), i0.ɵɵdirectiveInject(i10.ToastrService), i0.ɵɵdirectiveInject(i11.NewsubjectService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i12.CommonService), i0.ɵɵdirectiveInject(i13.ClassService), i0.ɵɵdirectiveInject(i14.EnvironmentService), i0.ɵɵdirectiveInject(i9.DatePipe), i0.ɵɵdirectiveInject(i15.ZoomServiceService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ClassDetailComponent, selectors: [["app-list-class-detail"]], viewQuery: function ClassDetailComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
            i0.ɵɵviewQuery(_c4, 5);
            i0.ɵɵviewQuery(_c5, 5);
            i0.ɵɵviewQuery(_c6, 5);
            i0.ɵɵviewQuery(_c7, 5);
            i0.ɵɵviewQuery(_c8, 5);
            i0.ɵɵviewQuery(_c9, 5);
            i0.ɵɵviewQuery(_c10, 5);
            i0.ɵɵviewQuery(_c11, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.throwError = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.link = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.notesDetail = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.zoomDialog = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.zoomDialog1 = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.video = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.messageInput = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.messagerChat = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.submitPopUp = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.submitTestPopUp = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.startTimerDuration = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.feedbackStatus = _t.first);
        } }, decls: 42, vars: 11, consts: [["content", ""], ["throwError", ""], ["zoomDialog", ""], ["zoomDialog1", ""], ["video", ""], ["submitPopUp", ""], ["submitTestPopUp", ""], ["startTimerDuration", ""], ["feedbackStatus", ""], ["accordion", "ngbAccordionItem"], [1, "container-fluid"], ["class", "row d-flex justify-content-center list-card mt-5", 4, "ngIf"], ["class", "row list-card", 4, "ngIf"], [1, "row"], [1, "col-12"], [1, "tab-view"], [1, "btn", "tab-button", "mr-2", 3, "click", "ngClass"], ["aria-hidden", "true", 1, "fa", "fa-book", "mr-2"], [1, "fa", "fa-file-text", "mr-2"], ["aria-hidden", "true", 1, "fa", "fa-inbox", "mr-2"], [1, "btn", "tab-button", 3, "click", "ngClass"], [1, "fa", "fa-microphone", "mr-2"], ["class", "row", 4, "ngIf"], ["class", "col-12 px-0", 4, "ngIf"], ["class", "row list-card mt-2", 4, "ngIf"], [1, "row", "d-flex", "justify-content-center", "list-card", "mt-5"], [1, "col-4"], [1, "nodataList"], [1, "row", "list-card"], [1, "col-md-12"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-body"], [1, "col-md-2"], [4, "ngIf"], [1, "col-md-5"], [1, "t-period"], [1, "font-weight-bold"], [1, "t-name", "font-weight-bold"], [1, "d-inline-flex", "align-items-center"], [1, "mb-0"], ["class", "badge badge-secondary", 4, "ngIf"], ["class", "badge badge-warning", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], [1, "row", "h-100", "d-flex", "align-items-end", "flex-column"], [1, "col-md-12", "d-flex", "align-items-end", "justify-content-end"], ["type", "button", 3, "class", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-bar-chart", "mr-2"], ["src", "assets/images/ristaschool/Mask Group 35.png", "alt", "", 1, "w-100", 2, "height", "135px"], ["alt", "", 1, "w-100", 3, "src"], [1, "badge", "badge-secondary"], [1, "badge", "badge-warning"], [1, "badge", "badge-danger"], ["type", "button", 3, "click"], [1, "fa", "fa-external-link", "mr-2"], [1, "fa", "fa-video-camera", "mr-2"], [1, "col-12", "mt-3"], [3, "to_id", "choosedData", "arrayList"], [1, "col-12", "d-flex", "align-items-center", "justify-content-end"], ["class", "ml-2 expand-icon", "aria-controls", "collapseCard", 3, "click", 4, "ngIf"], [1, "ml-2", "dropdown", "pull-right"], ["aria-hidden", "true", 1, "fa", "fa-sort-desc", "float-right", "ml-2"], [1, "dropdown-content", 2, "right", "3%"], [1, "dropdown-item", "dropdown-link", 3, "click"], ["class", "col-12 col-md-12 mt-3 custom-accordion", 4, "ngIf"], [1, "col-12", "mb-2", "align-self-center"], [1, "viewname"], ["class", "col-12 mt-5", 4, "ngIf"], [1, "home-sec-scroll", "col-12", "px-0"], ["class", "col-md-12 mt-1 cursor", 4, "ngFor", "ngForOf"], ["aria-controls", "collapseCard", 1, "ml-2", "expand-icon", 3, "click"], ["title", "Collapse", "aria-hidden", "true", 2, "font-size", "24px", "cursor", "pointer", "color", "#91048c", 3, "title"], [1, "col-12", "col-md-12", "mt-3", "custom-accordion"], ["ngbAccordion", "", 3, "closeOthers", 4, "ngFor", "ngForOf"], ["ngbAccordion", "", 3, "closeOthers"], [1, "mb-2", "topics_accordion_item", 3, "ngbAccordionItem", "collapsed"], ["ngbAccordionHeader", ""], [1, "header_button", "col-12", 2, "cursor", "default"], ["ngbAccordionToggle", "", 1, "px-0", "viewTopicName", "d-flex", "justify-content-between", "cursor"], ["class", "viewTopicName ml-2", 4, "ngIf"], ["class", "px-0 ml-2", 4, "ngIf"], ["ngbAccordionCollapse", ""], ["ngbAccordionBody", ""], [1, "viewTopicName", "ml-2"], [1, "px-0", "ml-2"], ["class", "font-weight-bold viewTopicName", 4, "ngIf"], [1, "font-weight-bold", "viewTopicName"], [1, "col-md-12", "dropdotted"], ["class", "col-12 px-0", 4, "ngFor", "ngForOf"], [1, "col-12", "px-0"], [1, "card", "class-card", "class-hover", "cursor", 3, "ngClass"], [1, "card-body", 3, "click"], [1, "col-2"], ["alt", "", "class", "rounded-circle", "style", "width: 50px;height: 50px;", 3, "src", 4, "ngIf"], ["alt", "", "class", "rounded-circle", "src", "assets/images/ristaschool/option-writing-checkbox-concepts-survey.png", "style", "width: 50px;height: 50px;", 4, "ngIf"], [1, "col-4", "align-self-center"], [1, "t-period", "mb-0"], [1, "contenttext"], ["class", "badge badge-green font-weight-bold align-self-center", 4, "ngIf"], ["class", "badge badge-warning font-weight-bold align-self-center", 4, "ngIf"], ["class", "badge badge-primary font-weight-bold align-self-center", 4, "ngIf"], [1, "col-3", "align-self-center"], [1, "d-flex", "justify-content-between", "align-items-center"], ["class", "t-name font-weight-bold", 4, "ngIf"], ["title", "View Analystics", "style", "font-size: 18px", "class", "fa fa-bar-chart mr-4 color-primary", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["alt", "", 1, "rounded-circle", 2, "width", "50px", "height", "50px", 3, "src"], ["alt", "", "src", "assets/images/ristaschool/option-writing-checkbox-concepts-survey.png", 1, "rounded-circle", 2, "width", "50px", "height", "50px"], [1, "badge", "badge-green", "font-weight-bold", "align-self-center"], [1, "badge", "badge-warning", "font-weight-bold", "align-self-center"], [1, "badge", "badge-primary", "font-weight-bold", "align-self-center"], ["title", "View Analystics", "aria-hidden", "true", 1, "fa", "fa-bar-chart", "mr-4", "color-primary", 2, "font-size", "18px", 3, "click"], [1, "col-12", "my-4", "custom-label"], [1, "col-12", "mt-5"], [1, "row", "d-flex", "align-items-center", "justify-content-center", "mt-1"], [1, "col-10", "mt-2", "card", "class-card1", "w-99"], [1, "m-0", "text-center", "p-3"], [1, "col-md-12", "mt-1", "cursor"], [1, "card", "class-card", "class-hover", 3, "ngClass"], ["style", "font-size: 18px", "class", "fa fa-bar-chart mr-4 color-primary cursor", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-bar-chart", "mr-4", "color-primary", "cursor", 2, "font-size", "18px", 3, "click"], [1, "col-12", "col-md-12", "mt-3"], [1, "col-md-12", "home-sec-scroll"], [1, "row", "py-3"], ["class", "col-12", 4, "ngIf"], [1, "card", "class-card", "class-hover"], [3, "titleName", "showLink", "arrayValue"], [1, "row", "list-card", "mt-2"], ["class", "col-12 my-4", 4, "ngFor", "ngForOf"], [1, "col-12", "my-4"], [1, "card", "announcement-page"], [1, "card-header"], [1, "col-12", "d-flex", "align-itmes-center", "justify-content-between"], [1, "m-0"], ["class", "row d-flex align-items-center justify-content-center", 4, "ngIf"], [1, "row", "d-flex", "align-items-center", "justify-content-center"], ["class", "col-12 my-2", 4, "ngFor", "ngForOf"], [1, "col-12", "my-2"], [1, "col-12", "mt-2", "card", "class-card1", "w-99"], ["class", "row pt-2", 4, "ngIf"], [1, "row", "pt-2"], [1, "col-9", 2, "word-wrap", "break-word"], [3, "ngClass", "innerHTML"], [1, "pb-2", "text-dark"], [1, "col-12", "mb-2"], ["class", "input-group", 4, "ngIf"], ["class", "text-primary cursor", 3, "click", 4, "ngIf"], ["class", "text-dark", 4, "ngIf"], [1, "input-group"], ["type", "text", "placeholder", "Comment", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-info", "d-flex", "align-items-center", 3, "click"], [1, "send-icon"], [1, "send-icon-content"], ["src", "assets/images/send.png", "alt", ""], [1, "text-primary", "cursor", 3, "click"], [1, "text-dark"], ["class", "col-12 p-2 mb-3 bg-light text-dark rounded shadow-sm", 4, "ngFor", "ngForOf"], [1, "col-12", "p-2", "mb-3", "bg-light", "text-dark", "rounded", "shadow-sm"], [3, "ngClass"], [1, "p-0", "text-dark"], [1, "modal-header", "color-primary"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-body"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["target", "_blank", 1, "cursor", 3, "href"], [2, "overflow", "scroll", "overflow-y", "hidden", 3, "title"], [1, "modal-header"], [1, "modal-title", "letter"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "pull-right"], [3, "click"], [1, "modal-title", "text-center"], [1, "modal-body", "d-flex", "justify-content-right"], [1, "col-12", "text-center"], ["controls", "", "height", "420", "width", "700"], ["type", "text/html", 3, "src"], [1, "contenttext", "text-center", "mb-0"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "btn", "cancel", "mr-1", 3, "click"], [1, "col-12", "px-0", "my-3", "d-flex", "flex-row", "align-items-center"], [1, "feedback_spinner"], [1, "ml-3", 2, "font-size", "16px"]], template: function ClassDetailComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 10);
            i0.ɵɵtemplate(1, ClassDetailComponent_div_1_Template, 4, 0, "div", 11)(2, ClassDetailComponent_section_2_Template, 3, 1, "section", 12);
            i0.ɵɵelementStart(3, "section")(4, "div", 13)(5, "div", 14)(6, "div", 15)(7, "button", 16);
            i0.ɵɵlistener("click", function ClassDetailComponent_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.tabShow = "curriculum"); });
            i0.ɵɵelement(8, "i", 17);
            i0.ɵɵtext(9, "Curriculum");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 16);
            i0.ɵɵlistener("click", function ClassDetailComponent_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r1); ctx.showNotes(ctx.choosedData[0].notes); return i0.ɵɵresetView(ctx.tabShow = "notes"); });
            i0.ɵɵelement(11, "i", 18);
            i0.ɵɵtext(12, "Announcements");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "button", 16);
            i0.ɵɵlistener("click", function ClassDetailComponent_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.tabShow = "inbox"); });
            i0.ɵɵelement(14, "i", 19);
            i0.ɵɵtext(15, "Inbox");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "button", 20);
            i0.ɵɵlistener("click", function ClassDetailComponent_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.tabShow = "recordings"); });
            i0.ɵɵelement(17, "i", 21);
            i0.ɵɵtext(18, "Recordings");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(19, ClassDetailComponent_section_19_Template, 3, 4, "section", 22)(20, ClassDetailComponent_section_20_Template, 25, 12, "section", 12)(21, ClassDetailComponent_section_21_Template, 10, 2, "section", 12)(22, ClassDetailComponent_section_22_Template, 2, 3, "section", 23)(23, ClassDetailComponent_section_23_Template, 2, 1, "section", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(24, ClassDetailComponent_ng_template_24_Template, 9, 4, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(26, ClassDetailComponent_ng_template_26_Template, 12, 5, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(28, ClassDetailComponent_ng_template_28_Template, 13, 6, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(30, ClassDetailComponent_ng_template_30_Template, 11, 3, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(32, ClassDetailComponent_ng_template_32_Template, 8, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(34, ClassDetailComponent_ng_template_34_Template, 12, 0, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(36, ClassDetailComponent_ng_template_36_Template, 14, 3, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor)(38, ClassDetailComponent_ng_template_38_Template, 13, 0, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor)(40, ClassDetailComponent_ng_template_40_Template, 5, 1, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.choosedData.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.choosedData.length != 0);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngClass", ctx.tabShow == "curriculum" ? "active" : "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", ctx.tabShow == "notes" ? "active" : "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", ctx.tabShow == "inbox" ? "active" : "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", ctx.tabShow == "recordings" ? "active" : "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.tabShow == "inbox");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.tabShow == "curriculum");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.tabShow == "recordings");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.tabShow == "otherlinks");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.tabShow == "notes");
        } }, styles: [".nodataList[_ngcontent-%COMP%] {\n  background: #f8f8f9;\n  border: 2px solid #7F3486;\n  padding: 15px 25px;\n  text-align: center;\n  border-radius: 7px;\n  color: #7F3486;\n  width: 100%;\n  font-weight: bolder;\n  font-size: large;\n}\n\n.dropdotted[_ngcontent-%COMP%] {\n  position: relative;\n  margin-right: auto;\n  margin-left: auto;\n  display: inline-block;\n  border-radius: 15px;\n  background-color: #fff;\n  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;\n}\n\n.custom-label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #cacaca;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n  .custom-accordion .accordion > .card > .card-header {\n  border-bottom: 1px solid #e5e5e5 !important;\n  background: #f8f8f8 !important;\n  height: 55px !important;\n\n  button {\n    padding: 0.5rem 1.5rem;\n    border-radius: 5px;\n    letter-spacing: 1px;\n    line-height: 20px;\n    font-size: 14px;\n    font-weight: 700;\n    transition: 0.3s ease-in-out;\n    text-decoration: none;\n    text-transform: capitalize;\n  }\n}\n\n  .custom-accordion .accordion > .card {\n  overflow: visible;\n  border: 1px solid #e5e5e5;\n  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClassDetailComponent, [{
        type: Component,
        args: [{ selector: 'app-list-class-detail', template: "<script src=\"class-detail.component.ts\"></script>\n<div class=\"container-fluid\">\n    <div class=\"row d-flex justify-content-center list-card mt-5\" *ngIf=\"choosedData.length == 0\">\n        <div class=\"col-4\">\n            <button class=\"nodataList\">No Data Available!</button>\n        </div>\n    </div>\n    <section class=\"row list-card\" *ngIf=\"choosedData.length != 0\">\n\n        <div class=\"col-md-12\">\n            <div class=\"card\" *ngFor=\"let list of choosedData; let i = index\">\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-2\">\n                            <figure *ngIf=\"list.profile_url == ''\">\n                                <img src=\"assets/images/ristaschool/Mask Group 35.png\" class=\"w-100\" style=\"height: 135px\" alt=\"\">\n                            </figure>\n                            <figure *ngIf=\"list.profile_url != ''\">\n                                <img [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + list.profile_url)\" class=\"w-100\" alt=\"\">\n                            </figure>\n                        </div>\n                        <div class=\"col-md-5\">\n                            <h4 class=\"t-period\"><span class=\"font-weight-bold\">{{list?.class_name}} </span>\n                            </h4>\n                            <p><span class=\"font-weight-bold\">Subject: </span> <span class=\"t-name font-weight-bold\">{{list.subject_name}}</span></p>\n                            <p *ngIf=\"list.start_date == '0000-00-00'&& list.end_date == '0000-00-00'\"><span class=\"font-weight-bold\">Start: </span>  &nbsp; &nbsp;\n                                <span class=\"font-weight-bold\">End: </span>\n                            </p>\n                            <p *ngIf=\"list.start_date != '0000-00-00'&& list.end_date != '0000-00-00'\"><span class=\"font-weight-bold\">Start: </span> <span class=\"t-name font-weight-bold\">{{list.start_date|date:'MM/dd/yyyy'}} {{list.start_time}}</span> &nbsp; &nbsp;\n                                <span class=\"font-weight-bold\">End: </span> <span class=\"t-name font-weight-bold\">{{list.end_date|date:'MM/dd/yyyy'}} {{list.end_time}}</span>\n                            </p>\n                            <div class=\"d-inline-flex align-items-center\">\n                                <h4 class=\"mb-0\"><span class=\"badge badge-secondary\" *ngIf=\"list.status == '1'\">Not Started</span>\n                                    <span class=\"badge badge-warning\" *ngIf=\"list.status == '2'\">In-Progress</span>\n                                    <span class=\"badge badge-danger\" *ngIf=\"list.status == '3'\">Completed</span>\n                                </h4>\n                            </div>\n                        </div>\n                        <div class=\"col-md-5\">\n                            <div class=\"row h-100 d-flex align-items-end flex-column\">\n                                <!-- <div class=\"col-md-12\"> -->\n                                    <!-- <div class=\"ml-2 dropdown pull-right\">\n                                        <button class=\"btn btn-primary {{env.deviceType() ? 'border-radius-5' : ''}}\">{{contentFilterType == '1' ? 'New' :\n                                            contentFilterType == '2' ? 'In Progress' : contentFilterType == '0' ? 'All' : 'Completed'}}<i class=\"fa fa-sort-desc float-right ml-2\" aria-hidden=\"true\"></i></button>\n                                        <div class=\"dropdown-content\" style=\"right: 3%\">\n                                            <a class=\"dropdown-item dropdown-link\" (click)=\"classList('0')\">All</a>\n                                            <a class=\"dropdown-item dropdown-link\" (click)=\"classList('1')\">New</a>\n                                            <a class=\"dropdown-item dropdown-link\" (click)=\"classList('2')\">In Progress</a>\n                                            <a class=\"dropdown-item dropdown-link\" (click)=\"classList('3')\">Completed</a>\n                                        </div>\n                                    </div> -->\n\n                                    <!-- <div class=\"dropdown pull-right\">\n                                        <button *ngIf=\"list.notes != ''\" type=\"button\" class=\"btn btn-outline-primary mr-2 {{env.deviceType() ? 'border-radius-5' : ''}}\"\n                                                (click)=\"showNotes(list.notes);tabShow = 'notes'\">\n                                            <i class=\"fa fa-file-text mr-2\"></i>Announcements</button>\n                                        <button class=\"btn btn-outline-primary mr-2 {{env.deviceType() ? 'border-radius-5' : ''}}\" (click)=\"tabShow = 'inbox'\">\n                                            <i class=\"fa fa-inbox mr-2\" aria-hidden=\"true\"></i>Inbox</button>\n                                        <button class=\"btn btn-outline-primary {{env.deviceType() ? 'border-radius-5' : ''}}\" (click)=\"tabShow = 'curriculum'\">\n                                            <i class=\"fa fa-book mr-2\" aria-hidden=\"true\"></i>Curriculum</button>\n                                    </div> -->\n                                <!-- </div> -->\n                                <div class=\"col-md-12 d-flex align-items-end justify-content-end\">\n                                    <button *ngIf=\"list?.video_link && list?.video_link?.length != '0'\" type=\"button\" class=\"btn btn-outline-primary ml-2 {{env.deviceType() ? 'border-radius-5' : ''}}\" (click)=\"otherlink(list.video_link);tabShow = 'otherlinks'\">\n                                        <i class=\"fa fa-external-link mr-2\"></i>Other Links</button>\n                                    <button (click)=\"navigateToSATReport()\" type=\"button\" class=\"btn btn-outline-primary mr-2\">\n                                        <i class=\"fa fa-bar-chart mr-2\" aria-hidden=\"true\"></i>View Report\n                                    </button>\n                                    <!-- <button *ngIf=\"videoSource.length != 0\" type=\"button\" class=\"btn btn-outline-primary mr-2 {{env.deviceType() ? 'border-radius-5' : ''}}\" (click)=\"tabShow = 'recordings'\">\n                                        <i class=\"fa fa-microphone mr-2\"></i>Recordings</button> -->\n                                    <a *ngIf=\"list.class_type == '1' && list.schedule_id != ''\">\n                                        <button (click)=\"openZoomDialog(list);\" class=\"btn btn-primary {{env.deviceType() ? 'border-radius-5' : ''}}\" type=\"button\">\n                                            <i class=\"fa fa-video-camera mr-2\"></i>Enter Online Class</button>\n                                    </a>\n                                    <!-- <span class=\"ml-2 expand-icon\" *ngIf=\"topicListData.length != 0\" (click)=\"isCollapsed = !isCollapsed;\" [attr.aria-expanded]=\"!isCollapsed\"\n                                          aria-controls=\"collapseCard\">\n                                        <i [title]=\"!isCollapsed ? 'Collapse' : 'Expand'\" title=\"Collapse\" class=\"fa {{!isCollapsed ? 'fa-compress' : 'fa-arrows-alt'}}\"\n                                           style=\"font-size: 24px; cursor: pointer; color: #91048c;\" aria-hidden=\"true\"></i>\n                                    </span> -->\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <section>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"tab-view\">\n                    <button class=\"btn tab-button mr-2\" [ngClass]=\"tabShow == 'curriculum' ? 'active' : ''\" (click)=\"tabShow = 'curriculum'\"><i class=\"fa fa-book mr-2\" aria-hidden=\"true\"></i>Curriculum</button>\n                    <button class=\"btn tab-button mr-2\" [ngClass]=\"tabShow == 'notes' ? 'active' : ''\" (click)=\"showNotes(choosedData[0].notes);tabShow = 'notes'\"><i class=\"fa fa-file-text mr-2\"></i>Announcements</button>\n                    <button class=\"btn tab-button mr-2\" [ngClass]=\"tabShow == 'inbox' ? 'active' : ''\" (click)=\"tabShow = 'inbox'\"><i class=\"fa fa-inbox mr-2\" aria-hidden=\"true\"></i>Inbox</button>\n                    <button class=\"btn tab-button\" [ngClass]=\"tabShow == 'recordings' ? 'active' : ''\" (click)=\"tabShow = 'recordings'\"><i class=\"fa fa-microphone mr-2\"></i>Recordings</button>\n                </div>\n            </div>\n        </div>\n    </section>\n    <section class=\"row\" *ngIf=\"tabShow == 'inbox'\">\n        <div class=\"col-12 mt-3\">\n            <app-inbox-chat [to_id]=\"choosedData[0]?.teacher_id ?? []\" [choosedData]=\"choosedData\" [arrayList]=\"messageList\"></app-inbox-chat>\n        </div>\n    </section>\n\n    <section class=\"row list-card\" *ngIf=\"tabShow == 'curriculum'\">\n        <div class=\"col-12  d-flex align-items-center justify-content-end\">\n            <span class=\"ml-2 expand-icon\" *ngIf=\"topicListData.length != 0\" (click)=\"isCollapsed = !isCollapsed;\" [attr.aria-expanded]=\"!isCollapsed\"\n                aria-controls=\"collapseCard\">\n                <i [title]=\"!isCollapsed ? 'Collapse' : 'Expand'\" title=\"Collapse\" class=\"fa {{!isCollapsed ? 'fa-compress' : 'fa-arrows-alt'}}\"\n                    style=\"font-size: 24px; cursor: pointer; color: #91048c;\" aria-hidden=\"true\"></i>\n            </span>\n            <div class=\"ml-2 dropdown pull-right\">\n                <button class=\"btn btn-primary {{env.deviceType() ? 'border-radius-5' : ''}}\">{{contentFilterType == '1' ? 'New' :\n                    contentFilterType == '2' ? 'In Progress' : contentFilterType == '0' ? 'All' : 'Completed'}}<i class=\"fa fa-sort-desc float-right ml-2\" aria-hidden=\"true\"></i></button>\n                <div class=\"dropdown-content\" style=\"right: 3%\">\n                    <a class=\"dropdown-item dropdown-link\" (click)=\"classList('0')\">All</a>\n                    <a class=\"dropdown-item dropdown-link\" (click)=\"classList('1')\">New</a>\n                    <a class=\"dropdown-item dropdown-link\" (click)=\"classList('2')\">In Progress</a>\n                    <a class=\"dropdown-item dropdown-link\" (click)=\"classList('3')\">Completed</a>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-12 col-md-12 mt-3 custom-accordion\" *ngIf=\"topicListData.length != 0\">\n            <div ngbAccordion [closeOthers]=\"true\" *ngFor=\"let item of topicListData; let topicIndex = index\">\n                <div class=\"mb-2 topics_accordion_item\" ngbAccordionItem=\"{{topicIndex}}\" #accordion=\"ngbAccordionItem\" [collapsed]=\"isCollapsed\">\n                    <div ngbAccordionHeader>\n                        <button style=\"cursor: default\" class=\"header_button col-12\">\n                            <h4 ngbAccordionToggle class=\"px-0 viewTopicName d-flex justify-content-between cursor\">\n                                {{item.topic | titlecase}}<span\n                                    *ngIf=\"item.start_date != '0000-00-00' && item.start_date != '' && item.start_date != null\"\n                                    class=\"viewTopicName ml-2\">-</span>\n                                <div class=\"px-0 ml-2\"\n                                     *ngIf=\"item.start_date != '0000-00-00' && item.start_date != '' && item.start_date != null\">\n                                    <span *ngIf=\"item.start_date != '0000-00-00' && item.start_date != ''\"\n                                          class=\"font-weight-bold viewTopicName\">({{item.start_date|customDateFormat}}</span>\n                                    <span\n                                            *ngIf=\"item.start_date != '0000-00-00' && item.end_date != '0000-00-00' && item.start_date != '' && item.end_date != '' && item.end_date != null\">&nbsp;-&nbsp;</span>\n                                    <span *ngIf=\"item.end_date != '0000-00-00' && item.end_date != ''\"\n                                          class=\"font-weight-bold viewTopicName\">{{item.end_date|customDateFormat}})</span>&nbsp;<br />\n                                </div>\n                            </h4>\n                        </button>\n                    </div>\n                    <div ngbAccordionCollapse>\n                        <div ngbAccordionBody>\n                            <ng-template>\n                                <div class=\"col-md-12 dropdotted\">\n                                    <div class=\"col-12 px-0\" *ngFor=\"let list of item.topicArray; let j = index\">\n                                        <div [ngClass]=\"{'class-card-new' : list.student_content_status == '1', 'class-card-in-progress' : list.student_content_status == '2', 'class-card-completed' : ['3', '4', '5', '6'].indexOf(list.student_content_status) > -1}\"\n                                             class=\"card class-card class-hover cursor\">\n                                            <div (click)=\"checkContentTime(list)\" class=\"card-body\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-2\">\n                                                        <img *ngIf=\"list.profile_url != ''\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + list.profile_url)\" alt=\"\" class=\"rounded-circle\" style=\"width: 50px;height: 50px;\">\n                                                        <img *ngIf=\"list.profile_url == ''\" alt=\"\" class=\"rounded-circle\" src=\"assets/images/ristaschool/option-writing-checkbox-concepts-survey.png\" style=\"width: 50px;height: 50px;\">\n                                                    </div>\n                                                    <div class=\"col-4 align-self-center\">\n                                                        <h4 class=\"t-period mb-0\"><span class=\"font-weight-bold\">{{list.content_name}} </span><b class=\"contenttext\">\n                                                            <small>{{list.content_format == 3 ? '(TEXT)' : list?.is_pdf_content != 1 ? '(LINK)' : '(PDF)'}}</small></b></h4>\n                                                        <p>\n                                                    <span *ngIf=\"list.content_type == '1'\"\n                                                          class=\"badge badge-green font-weight-bold align-self-center\">Resource</span>\n                                                            <span *ngIf=\"list.content_type == '2'\"\n                                                                  class=\"badge badge-warning font-weight-bold align-self-center\">Assignment</span>\n                                                            <span *ngIf=\"list.content_type == '3'\"\n                                                                  class=\"badge badge-primary font-weight-bold align-self-center\">Assessment</span>\n                                                        </p>\n                                                    </div>\n                                                    <div class=\"col-3 align-self-center\">\n                                                        <p><span>Subject: </span> <span class=\"t-name font-weight-bold\">{{list.subject_name}}</span></p>\n                                                    </div>\n                                                    <div class=\"col-3 align-self-center\">\n                                                        <p class=\"d-flex justify-content-between align-items-center\">\n                                                            <span>\n                                                               <span>End: </span> <span *ngIf=\"list.end_date != '0000-00-00'\" class=\"t-name font-weight-bold\"> {{list.end_date|date:'MM/dd/yyyy'}}</span> &nbsp; &nbsp;\n                                                            </span>\n                                                            <i (click)=\"navigateToSATReport(list, $event)\" title=\"View Analystics\" *ngIf=\"list.student_content_status == '3' && list.content_format == '3'\"\n                                                               style=\"font-size: 18px\" class=\"fa fa-bar-chart mr-4 color-primary\" aria-hidden=\"true\"></i>\n                                                        </p>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-12 px-0\" *ngIf=\"item.topicArray.length == 0\">\n                                        <label class=\"col-12 my-4 custom-label\">No Content Available</label>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-md-12 mt-{{topicListData.length != 0 ? '5' : '3'}}\">\n            <div class=\"row\">\n                <div class=\"col-12 mb-2 align-self-center\">\n                    <h4 class=\"viewname\">{{topicListData.length > 0 ? 'Other Curriculum' : 'Curriculum'}}</h4>\n                </div>\n                <div class=\"col-12 mt-5\"  *ngIf=\"curriculumListWithoutTopic.length == 0\">\n                    <div class=\"row d-flex align-items-center justify-content-center mt-1\">\n                        <div class=\"col-10 mt-2 card class-card1 w-99\">\n                            <p class=\"m-0 text-center p-3\">No Data Found!</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"home-sec-scroll col-12 px-0\">\n                    <div *ngFor=\"let curriculum of curriculumListWithoutTopic\" class=\"col-md-12 mt-1 cursor\">\n                        <div [ngClass]=\"{'class-card-new' : curriculum.student_content_status == '1', 'class-card-in-progress' : curriculum.student_content_status == '2', 'class-card-completed' : ['3', '4', '5', '6'].indexOf(curriculum.student_content_status) > -1}\"\n                             class=\"card class-card class-hover\">\n                            <div (click)=\"checkContentTime(curriculum)\" class=\"card-body\">\n                                <div class=\"row\">\n                                    <div class=\"col-2\">\n                                        <img *ngIf=\"curriculum.profile_url != ''\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + curriculum.profile_url)\" alt=\"\" class=\"rounded-circle\" style=\"width: 50px;height: 50px;\">\n                                        <img *ngIf=\"curriculum.profile_url == ''\" alt=\"\" class=\"rounded-circle\" src=\"assets/images/ristaschool/option-writing-checkbox-concepts-survey.png\" style=\"width: 50px;height: 50px;\">\n                                    </div>\n                                    <div class=\"col-4 align-self-center\">\n                                        <h4 class=\"t-period mb-0\"><span class=\"font-weight-bold\">{{curriculum.content_name}} </span><b class=\"contenttext\">\n                                            <small *ngIf=\"curriculum.content_format == 1\">(PDF)</small>\n                                            <small *ngIf=\"curriculum.content_format == 3\">(TEXT)</small></b></h4>\n                                        <p>\n                                    <span *ngIf=\"curriculum.content_type == '1'\"\n                                          class=\"badge badge-green font-weight-bold align-self-center\">Resource</span>\n                                            <span *ngIf=\"curriculum.content_type == '2'\"\n                                                  class=\"badge badge-warning font-weight-bold align-self-center\">Assignment</span>\n                                            <span *ngIf=\"curriculum.content_type == '3'\"\n                                                  class=\"badge badge-primary font-weight-bold align-self-center\">Assessment</span>\n                                        </p>\n                                    </div>\n                                    <div class=\"col-3 align-self-center\">\n                                        <p><span>Subject: </span> <span class=\"t-name font-weight-bold\">{{curriculum.subject_name}}</span></p>\n                                    </div>\n                                    <div class=\"col-3 align-self-center\">\n                                        <p class=\"d-flex justify-content-between align-items-center\">\n                                            <span>\n                                                <span>End: </span> <span *ngIf=\"curriculum.end_date != '0000-00-00'\" class=\"t-name font-weight-bold\"> {{curriculum.end_date|date:'MM/dd/yyyy'}}</span> &nbsp; &nbsp;\n                                            </span>\n                                            <i (click)=\"navigateToSATReport(curriculum, $event)\" *ngIf=\"curriculum.student_content_status == '3' && curriculum.content_format == '3'\"\n                                               style=\"font-size: 18px\" class=\"fa fa-bar-chart mr-4 color-primary cursor\" aria-hidden=\"true\"></i>\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n<!--        <div *ngIf=\"tabShow == 'assignment'\"  class=\"col-12 col-md-12 mt-3\">-->\n<!--            <ul class=\"nav nav-tabs color-primary\">-->\n<!--                <li class=\"nav-item cursor\">-->\n<!--                    <a (click)=\"filterAssignmentData('1', 'new')\" aria-current=\"page\" class=\"nav-link {{assignmentFilterType == 'new' ? 'active' : ''}}\"><b>New</b></a>-->\n<!--                </li>-->\n<!--                <li class=\"nav-item cursor\">-->\n<!--                    <a (click)=\"filterAssignmentData('2', 'pending')\" aria-current=\"page\" class=\"nav-link {{assignmentFilterType == 'pending' ? 'active' : ''}}\"><b>In-progress</b></a>-->\n<!--                </li>-->\n<!--                <li class=\"nav-item cursor\">-->\n<!--                    <a (click)=\"filterAssignmentData('3', 'completed')\" aria-current=\"page\" class=\"nav-link {{assignmentFilterType == 'completed' ? 'active' : ''}}\"><b>Completed</b></a>-->\n<!--                </li>-->\n<!--            </ul>-->\n<!--            <div class=\"row\">-->\n<!--                <div class=\"col-md-12 home-sec-scroll\">-->\n<!--                    <div class=\"row\">-->\n<!--                        <div class=\"col d-flex justify-content-center list-card mt-5\" *ngIf=\"assignmentFilteredData.length == 0\">-->\n<!--                            <div class=\"col-12\">-->\n<!--                                <button class=\"nodataList\">No Data Available!</button>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                        <div *ngFor=\"let assign of assignmentFilteredData\" class=\"col-md-12 mt-1 cursor\">-->\n<!--                            <div class=\"card class-card class-hover\">-->\n<!--                                <div (click)=\"assignmentPage(assign)\" class=\"card-body\">-->\n<!--                                    <div class=\"row\">-->\n<!--                                        <div class=\"col-2\">-->\n<!--                                            <img *ngIf=\"assign.profile_url != ''\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + assign.profile_url)\" alt=\"\" class=\"rounded-circle\" style=\"width: 50px;height: 50px;\">-->\n<!--                                            <img *ngIf=\"assign.profile_url == ''\" alt=\"\" class=\"rounded-circle\" src=\"assets/images/ristaschool/option-writing-checkbox-concepts-survey.png\" style=\"width: 50px;height: 50px;\">-->\n<!--                                        </div>-->\n<!--                                        <div class=\"col-4 align-self-center\">-->\n<!--                                            <h4 class=\"t-period mb-0\"><span class=\"font-weight-bold\">{{assign.content_name}} </span><b class=\"contenttext\">-->\n<!--                                                <small *ngIf=\"assign.content_format == 1\">(PDF)</small>-->\n<!--                                                <small *ngIf=\"assign.content_format == 3\">(TEXT)</small></b></h4>-->\n<!--                                        </div>-->\n<!--                                        <div class=\"col-3 align-self-center\">-->\n<!--                                            <p><span>Subject: </span> <span class=\"t-name font-weight-bold\">{{assign.subject_name}}</span></p>-->\n<!--                                        </div>-->\n<!--                                        <div class=\"col-3 align-self-center\">-->\n<!--                                            <p><span>End: </span> <span *ngIf=\"assign.end_date != '0000-00-00'\" class=\"t-name font-weight-bold\"> {{assign.end_date|date:'MM/dd/yyyy'}}</span> &nbsp; &nbsp;-->\n<!--                                            </p>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--        </div>-->\n<!--        <div *ngIf=\"tabShow == 'assessment'\"  class=\"col-12 col-md-12 mt-3\">-->\n<!--            <ul class=\"nav nav-tabs color-primary\">-->\n<!--                <li class=\"nav-item cursor\">-->\n<!--                    <a (click)=\"filterAssessmentData('1', 'new')\" aria-current=\"page\" class=\"nav-link {{assessmentFilterType == 'new' ? 'active' : ''}}\"><b>New</b></a>-->\n<!--                </li>-->\n<!--                <li class=\"nav-item cursor\">-->\n<!--                    <a (click)=\"filterAssessmentData('2', 'pending')\" aria-current=\"page\" class=\"nav-link {{assessmentFilterType == 'pending' ? 'active' : ''}}\"><b>In-progress</b></a>-->\n<!--                </li>-->\n<!--                <li class=\"nav-item cursor\">-->\n<!--                    <a (click)=\"filterAssessmentData('3', 'completed')\" aria-current=\"page\" class=\"nav-link {{assessmentFilterType == 'completed' ? 'active' : ''}}\"><b>Completed</b></a>-->\n<!--                </li>-->\n<!--            </ul>-->\n<!--            <div class=\"row\">-->\n<!--                <div class=\"col-md-12 home-sec-scroll\">-->\n<!--                    <div class=\"row\">-->\n<!--                        <div class=\"col d-flex justify-content-center list-card mt-5\" *ngIf=\"assessmentFilteredData.length ==0\">-->\n<!--                            <div class=\"col-12\">-->\n<!--                                <button class=\"nodataList\">No Data Available!</button>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                        <div *ngFor=\"let assess of assessmentFilteredData\" class=\"col-md-12 mt-1 cursor\">-->\n<!--                            <div class=\"card class-card class-hover\">-->\n<!--                                <div (click)=\"checkContentTime(assess, 'assess')\" class=\"card-body\">-->\n<!--                                    <div class=\"row\">-->\n<!--                                        <div class=\"col-1\">-->\n<!--                                            <img *ngIf=\"assess.profile_url == ''\" alt=\"\" class=\"rounded-circle\" src=\"assets/images/ristaschool/assessment.png\" style=\"width: 50px;height: 50px;\">-->\n<!--                                            <img *ngIf=\"assess.profile_url != ''\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + assess.profile_url)\" alt=\"\" class=\"rounded-circle\" style=\"width: 50px;height: 50px;\">-->\n<!--                                        </div>-->\n<!--                                        <div class=\"col-4 align-self-center\">-->\n<!--                                            <h4 class=\"t-period mb-0\"><span class=\"font-weight-bold\">{{assess.content_name}} </span><b class=\"contenttext\">-->\n<!--                                                <small *ngIf=\"assess.content_format == 1\">(PDF)</small>-->\n<!--                                                <small *ngIf=\"assess.content_format == 3\">(TEXT)</small></b></h4>-->\n<!--                                        </div>-->\n<!--                                        <div class=\"col-3 align-self-center\">-->\n<!--                                            <p><span>Subject: </span> <span class=\"t-name font-weight-bold\">{{assess.subject_name}}</span></p>-->\n<!--                                        </div>-->\n<!--                                        <div class=\"col-4 align-self-center\">-->\n<!--                                            <p><span>Start: </span> <span *ngIf=\"assess.start_date != '0000-00-00'\" class=\"t-name font-weight-bold\">{{assess.start_date|date:'MM/dd/yyyy'}}</span> &nbsp; &nbsp;-->\n<!--                                                <span>End: </span> <span *ngIf=\"assess.end_date != '0000-00-00'\" class=\"t-name font-weight-bold\">{{assess.end_date|date:'MM/dd/yyyy'}}</span>-->\n<!--                                            </p>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--        </div>-->\n    </section>\n\n    <section class=\"row list-card\" *ngIf=\"tabShow == 'recordings'\">\n        <div class=\"col-12 col-md-12 mt-3\">\n            <div class=\"row\">\n                <div class=\"col-12 mb-2 align-self-center\">\n                    <h4 class=\"viewname\">Recordings</h4>\n                </div>\n                <div class=\"col-md-12 home-sec-scroll\">\n                    <div class=\"row py-3\">\n                        <div *ngFor=\"let source of videoSource;let i=index\" class=\"col-md-12 mt-1 cursor\">\n                            <div class=\"card class-card class-hover\">\n                                <div (click)=\"navigateOutsideRecording(source)\" class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-4 align-self-center\">\n                                            <p><span>Passcode: </span>\n                                                <span class=\"t-name font-weight-bold\">{{source.passcode}}\n                                            </span> &nbsp; &nbsp;\n                                            </p>\n                                        </div>\n                                        <div class=\"col-4 align-self-center\">\n                                            <p><span>Start: </span> <span *ngIf=\"source.recording_start != '0000-00-00'\" class=\"t-name font-weight-bold\">{{source.recording_start|date:'MM/dd/yyyy'}} &nbsp;{{source.recording_start}}</span>\n                                            </p>\n                                        </div>\n                                        <div class=\"col-4 align-self-center\">\n                                            <p>\n                                                <span>End: </span> <span *ngIf=\"source.recording_end != '0000-00-00'\" class=\"t-name font-weight-bold\">{{source.recording_end|date:'MM/dd/yyyy hh:mm:ss a'}} &nbsp;{{source.recording_end}}</span>\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <!-- <div *ngIf=\"videoSource.length == 0\" class=\"col-md-12 mt-1 cursor\">\n                            <div class=\"card\">\n                                <div  class=\"card-body card-hover2\" style=\"align-self: center;\">\n                                    <div class=\"row\">\n                                        <span>No data found</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div> -->\n                        <div class=\"col-12\"  *ngIf=\"videoSource.length == 0\">\n                            <div class=\"row d-flex align-items-center justify-content-center mt-1\">\n                                <div class=\"col-10 mt-2 card class-card1 w-99\">\n                                    <p class=\"m-0 text-center p-3\">No Recordings Found!</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"col-12 px-0\" *ngIf=\"tabShow == 'otherlinks'\">\n        <app-other-link [titleName]=\"'Other Links'\" [showLink]=\"false\" [arrayValue]=\"linkdata\"></app-other-link>\n    </section>\n\n    <section class=\"row list-card mt-2\" *ngIf=\"tabShow == 'notes'\">\n\n        <div class=\"col-12 my-4\" *ngFor=\"let classSeparation of updatedAnnouncementList\">\n            <div class=\"card announcement-page\">\n                <div class=\"card-header\">\n                    <div class=\"row\">\n                        <div class=\"col-12 d-flex align-itmes-center justify-content-between\">\n                            <h4 class=\"m-0\">{{classSeparation.class_name}}</h4>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"row d-flex align-items-center justify-content-center\" *ngIf=\"classSeparation.announcement_data.length == 0\">\n                        <div class=\"col-10 mt-2 card class-card1 w-99\">\n                            <p class=\"m-0 text-center p-3\">No Announcement Found!</p>\n                        </div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"classSeparation.announcement_data.length != 0\">\n                        <div class=\"col-12 my-2\" *ngFor=\"let announcement of classSeparation.announcement_data; let announcementIndex = index\">\n                            <h5>Announcement {{announcementIndex + 1}}</h5>\n                            <div class=\"col-12 mt-2 card class-card1 w-99\">\n                                <div class=\"row pt-2\" *ngIf=\"announcement.add_date != '00-00-0000'\">\n                                    <div class=\"col-9\" style=\"word-wrap: break-word;\">\n                                        <h5 [ngClass]=\"auth.getUserId() == announcement.user_id ? 'letter-primary': 'letter-info'\" [innerHTML]=\"announcement.note\"></h5>\n                                        <p class=\"pb-2 text-dark\"><small  *ngIf=\"announcement.created_by != '' && announcement.add_date != ''\">By: <strong> {{announcement.created_by}}</strong> - <small>{{announcement.add_date | date:'medium'}}</small><br></small></p>\n                                    </div>\n                                    <div class=\"col-12 mb-2\">\n                                        <div class=\"input-group\" *ngIf=\"classSeparation.announcement_type == '3'\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Comment\" [(ngModel)]=\"announcement.comment\" (keyup.enter)=\"announcementCommentDetails(announcement)\">\n                                            <div class=\"input-group-append\">\n                                                <button class=\"btn btn-info d-flex align-items-center\" type=\"submit\" (click)=\"announcementCommentDetails(announcement)\"><span class=\"send-icon\"><span class=\"send-icon-content\"><img src=\"assets/images/send.png\" alt=\"\"></span></span></button>\n                                            </div>\n                                        </div>\n                                        <p><small class=\"text-primary cursor\" *ngIf=\"announcement.comment_count != 0\" (click)=\"announcement.id == announcementSend ? announcementSend = '' : announcementView(announcement)\">\n                                            {{announcement.comment_count}} Comment<span *ngIf=\"announcement.comment_count > 1\">s</span></small>\n                                            <small class=\"text-dark\" *ngIf=\"announcement.comment_count == 0\">No Comment Available</small></p>\n                                    </div>\n                                    <div class=\"col-12\" *ngIf=\"announcement.id == announcementSend\">\n                                        <div class=\"col-12 p-2 mb-3 bg-light text-dark rounded shadow-sm\" *ngFor=\"let data of announcementCommentData\">\n                                            <div class=\"row\">\n                                                <div class=\"col-12\">\n                                                    <p [ngClass]=\"auth.getUserId() == data.user_id ? 'letter f-16': 'text-primary f-16'\">{{data.comment}}</p>\n                                                    <p class=\"p-0 text-dark\"><small>By: <strong>{{data.created_by}}</strong> - {{data.comment_date | date:'medium'}}</small></p>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header color-primary\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Other links</h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\" *ngFor=\"let item of linkdata; let j = index\">\n                <div class=\"col-md-12\">\n                    <a class=\"cursor\" href=\"{{item}}\" target=\"_blank\">\n                        <span style=\"overflow: scroll; overflow-y: hidden\" title=\"{{item}}\">{{item}}</span>\n                    </a>\n                    <hr>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary {{env.deviceType() ? 'border-radius-5' : ''}}\" (click)=\"onSave()\">Cancel</button>\n    </div>\n</ng-template>\n\n<!-- Container-fluid Ends-->\n<ng-template #throwError>\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title letter\">{{ErrorTitle}}</h5>\n        <i class=\"fa fa-close cursor\" (click)=\"onSave()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <p class=\"mb-0\"><b>{{message}}</b></p>\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"pull-right\">\n            <button class=\"btn cancel {{env.deviceType() ? 'border-radius-5' : ''}}\" (click)=\"onSave()\">Ok</button>\n        </div>\n    </div>\n</ng-template>\n\n<!--//zoom confirmation pop-up-->\n\n<ng-template #zoomDialog let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title text-center\">Zoom Meet</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"modalRef.close()\" ></i>\n    </div>\n    <div class=\"modal-body d-flex justify-content-right\">\n        <div class=\"col-12 text-center\">\n            <h5>Open zoom in </h5>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-primary {{env.deviceType() ? 'border-radius-5' : ''}}\" (click)=\"modalRef.close();zoomService.initZoomMeeting(selectedClass)\">In App</button>\n        <button (click)=\"navigateOutsideZoom(zoomResponse)\" class=\"btn btn-outline-primary {{env.deviceType() ? 'border-radius-5' : ''}}\" type=\"button\">New Tab</button>\n    </div>\n</ng-template>\n<ng-template #zoomDialog1 let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title text-center\">Zoom Meet</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"modalRef.close()\" ></i>\n    </div>\n    <div class=\"modal-body d-flex justify-content-right\">\n        <div class=\"col-12 text-center\">\n            <h5>No Zoom Meet Scheduled for this day</h5>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button  class=\"btn btn-primary {{env.deviceType() ? 'border-radius-5' : ''}}\" (click)=\"modalRef.close();\">OK</button>\n    </div>\n</ng-template>\n<ng-template #video let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title text-center\">Zoom Meet</h4>\n        <i (click)=\"modalRef.close()\" class=\"fa fa-close cursor\" ></i>\n    </div>\n    <div class=\"modal-body d-flex justify-content-right\">\n        <div class=\"col-12 text-center\">\n            <!--            <vg-player>-->\n            <!--                <vg-controls>-->\n            <!--                    <vg-play-pause></vg-play-pause>-->\n            <!--                    <vg-playback-button></vg-playback-button>-->\n\n            <!--                    <vg-time-display vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>-->\n\n            <!--                    <vg-scrub-bar>-->\n            <!--                        <vg-scrub-bar-current-time></vg-scrub-bar-current-time>-->\n            <!--                        <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>-->\n            <!--                    </vg-scrub-bar>-->\n\n            <!--                    <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>-->\n\n            <!--                    <vg-mute></vg-mute>-->\n            <!--                    <vg-volume></vg-volume>-->\n\n            <!--                    <vg-fullscreen></vg-fullscreen>-->\n            <!--                </vg-controls>-->\n\n            <!--                <video #media id=\"singleVideo\" preload=\"auto\" crossorigin>-->\n            <!--                    <source src=\"http://static.videogular.com/assets/videos/videogular.mp4\" type=\"video/mp4\">-->\n            <!--                </video>-->\n            <!--            </vg-player>-->\n            <video controls height=\"420\" width=\"700\">\n                <!--                <source src=\"http://static.videogular.com/assets/videos/videogular.mp4\" type=\"video/mp4\">-->\n                <source src=\"{{selectedRecording.play_video}}\" type=\"text/html\">\n            </video>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #submitPopUp let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h5 class=\"contenttext text-center mb-0\">Duration Completed</h5>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5 class=\"mb-0\">\n                    <span>Test time is now complete. All your answers will be saved and submitted\u00A0automatically</span></h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"submitAnswer(contentData)\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #submitTestPopUp let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h5 class=\"contenttext text-center mb-0\">Duration Completed</h5>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5 class=\"mb-0\">\n                    <span>Test time is now complete for {{testContentData?.module_name}}. All your answers will be saved\n                        <span *ngIf=\"!testContentData?.lastQuestions\"> , submitted\u00A0 and moved to next content automatically.</span>\n                        <span *ngIf=\"testContentData?.lastQuestions\"> and submitted\u00A0automatically.</span>\n                    </span>\n                </h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"submitAnswer(testContentData, 'test')\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #startTimerDuration let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h5 class=\"contenttext text-center mb-0\">Start Timer Duration</h5>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5 class=\"mb-0\">\n                    Click 'Ok' to start the assessment. Do not close the window once the assessment\u00A0is\u00A0started.\n                </h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn cancel mr-1\" (click)=\"onSave()\">Cancel</button>\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"updateContentStatus(contentDetails)\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #feedbackStatus>\n    <div class=\"modal-body\">\n        <div class=\"col-12 px-0 my-3 d-flex flex-row align-items-center\">\n            <div class=\"feedback_spinner\"></div>\n            <span class=\"ml-3\" style=\"font-size: 16px\">{{popUpMessage}}</span>\n        </div>\n    </div>\n</ng-template>\n", styles: [".nodataList {\n  background: #f8f8f9;\n  border: 2px solid #7F3486;\n  padding: 15px 25px;\n  text-align: center;\n  border-radius: 7px;\n  color: #7F3486;\n  width: 100%;\n  font-weight: bolder;\n  font-size: large;\n}\n\n.dropdotted {\n  position: relative;\n  margin-right: auto;\n  margin-left: auto;\n  display: inline-block;\n  border-radius: 15px;\n  background-color: #fff;\n  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;\n}\n\n.custom-label {\n  font-size: 18px;\n  font-weight: 600;\n  color: #cacaca;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n::ng-deep .custom-accordion .accordion > .card > .card-header {\n  border-bottom: 1px solid #e5e5e5 !important;\n  background: #f8f8f8 !important;\n  height: 55px !important;\n\n  button {\n    padding: 0.5rem 1.5rem;\n    border-radius: 5px;\n    letter-spacing: 1px;\n    line-height: 20px;\n    font-size: 14px;\n    font-weight: 700;\n    transition: 0.3s ease-in-out;\n    text-decoration: none;\n    text-transform: capitalize;\n  }\n}\n\n::ng-deep .custom-accordion .accordion > .card {\n  overflow: visible;\n  border: 1px solid #e5e5e5;\n  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;\n}\n"] }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.NgbModalConfig }, { type: i3.ConfigurationService }, { type: i4.StudentService }, { type: i5.AuthService }, { type: i6.CommonDataService }, { type: i2.NgbModal }, { type: i7.DomSanitizer }, { type: i8.Router }, { type: i9.TitleCasePipe }, { type: i10.ToastrService }, { type: i11.NewsubjectService }, { type: i0.ElementRef }, { type: i12.CommonService }, { type: i13.ClassService }, { type: i14.EnvironmentService }, { type: i9.DatePipe }, { type: i15.ZoomServiceService }], { throwError: [{
            type: ViewChild,
            args: ['throwError']
        }], link: [{
            type: ViewChild,
            args: ['content']
        }], notesDetail: [{
            type: ViewChild,
            args: ['notesDetail']
        }], zoomDialog: [{
            type: ViewChild,
            args: ['zoomDialog']
        }], zoomDialog1: [{
            type: ViewChild,
            args: ['zoomDialog1']
        }], video: [{
            type: ViewChild,
            args: ['video']
        }], messageInput: [{
            type: ViewChild,
            args: ['messageInput']
        }], messagerChat: [{
            type: ViewChild,
            args: ['messagerChat', { static: false }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ClassDetailComponent, { className: "ClassDetailComponent" }); })();
//# sourceMappingURL=class-detail.component.js.map