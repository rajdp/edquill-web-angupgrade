import { Component, ViewChild } from '@angular/core';
import { SessionConstants } from '../../../shared/data/sessionConstants';
import { dateOptions, timeZone } from '../../../shared/data/config';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { forkJoin } from 'rxjs';
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
import * as i15 from "../../../shared/service/nav.service";
import * as i16 from "@ng-select/ng-select";
import * as i17 from "@nodro7/angular-mydatepicker";
import * as i18 from "../../report/missed-work-report/missed-work-report.component";
import * as i19 from "../../report/items-report/items-report.component";
import * as i20 from "ng2-pdf-viewer";
import * as i21 from "../../auth/other-link/other-link.component";
import * as i22 from "../../auth/inbox-chat/inbox-chat.component";
import * as i23 from "@angular/cdk/drag-drop";
import * as i24 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["itemsReports"];
const _c1 = ["reports"];
const _c2 = ["assign"];
const _c3 = ["content"];
const _c4 = ["createTopicPopup"];
const _c5 = ["teacherVersion"];
const _c6 = ["curriculum"];
const _c7 = ["uploadFileInput"];
const _c8 = ["deleteDialog"];
const _c9 = a0 => ({ "color": a0 });
const _c10 = a0 => ({ "display": a0 });
const _c11 = (a0, a1, a2) => ({ "class-card-new": a0, "class-card-in-progress": a1, "class-card-completed": a2 });
const _c12 = () => ({ standalone: true });
const _c13 = () => [];
function TopicsCurriculumComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_button_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.showType = "inbox"); });
    i0.ɵɵelement(1, "i", 21);
    i0.ɵɵtext(2, "Inbox ");
    i0.ɵɵelementStart(3, "span", 44);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.messageCount);
} }
function TopicsCurriculumComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 45);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_button_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); ctx_r2.showOtherLinks = !ctx_r2.showOtherLinks; return i0.ɵɵresetView(ctx_r2.showType = ""); });
    i0.ɵɵelement(1, "i", 46);
    i0.ɵɵtext(2, "Other Links ");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_span_51_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 47);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_span_51_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.isCollapsed = !ctx_r2.isCollapsed); });
    i0.ɵɵelement(1, "i", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-expanded", !ctx_r2.isCollapsed);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("fa ", !ctx_r2.isCollapsed ? "fa-compress" : "fa-arrows-alt", "");
    i0.ɵɵproperty("title", !ctx_r2.isCollapsed ? "Collapse" : "Expand");
} }
function TopicsCurriculumComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 49)(1, "app-other-link", 50);
    i0.ɵɵlistener("saveLinks", function TopicsCurriculumComponent_div_53_Template_app_other_link_saveLinks_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.updateClass()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("calledFrom", "curriculum")("showLink", ctx_r2.manageClass)("arrayValue", ctx_r2.linkData);
} }
function TopicsCurriculumComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 51)(2, "app-inbox-chat", 52);
    i0.ɵɵlistener("updateCount", function TopicsCurriculumComponent_div_54_Template_app_inbox_chat_updateCount_2_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.messageCount = $event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("to_id", ctx_r2.toId)("choosedData", ctx_r2.choosedData)("arrayList", ctx_r2.messageList);
} }
function TopicsCurriculumComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 53)(1, "div", 54)(2, "button", 55);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function TopicsCurriculumComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56)(1, "span", 57)(2, "span");
    i0.ɵɵelement(3, "i", 58);
    i0.ɵɵtext(4, "\u00A0In-Progress");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 29);
    i0.ɵɵelement(6, "i", 59);
    i0.ɵɵtext(7, "\u00A0Completed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 29);
    i0.ɵɵelement(9, "i", 60);
    i0.ɵɵtext(10, "\u00A0Upcoming");
    i0.ɵɵelementEnd()()();
} }
function TopicsCurriculumComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 51)(2, "button", 61);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_div_57_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.deleteMultiContentOrTopic()); });
    i0.ɵɵelement(3, "i", 62);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Delete ", ctx_r2.multiTopicId.length == 0 && ctx_r2.multiContentId.length != 0 ? "Content" : ctx_r2.multiTopicId.length != 0 && ctx_r2.multiContentId.length == 0 ? "Topic" : "Topic / Content", "");
} }
function TopicsCurriculumComponent_div_58_div_3_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 78);
    i0.ɵɵlistener("change", function TopicsCurriculumComponent_div_58_div_3_input_5_Template_input_change_0_listener($event) { i0.ɵɵrestoreView(_r10); const item_r11 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.selectOrUnSelectContentList(item_r11, $event, "topic")); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("checked", item_r11.checked);
} }
function TopicsCurriculumComponent_div_58_div_3_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 79);
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_58_div_3_div_10_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 82);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("(", i0.ɵɵpipeBind1(2, 1, item_r11.start_date), "");
} }
function TopicsCurriculumComponent_div_58_div_3_div_10_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u00A0-\u00A0");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_58_div_3_div_10_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 82);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(2, 1, item_r11.end_date), ")");
} }
function TopicsCurriculumComponent_div_58_div_3_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 80);
    i0.ɵɵtemplate(1, TopicsCurriculumComponent_div_58_div_3_div_10_span_1_Template, 3, 3, "span", 81)(2, TopicsCurriculumComponent_div_58_div_3_div_10_span_2_Template, 2, 0, "span", 42)(3, TopicsCurriculumComponent_div_58_div_3_div_10_span_3_Template, 3, 3, "span", 81);
    i0.ɵɵtext(4, "\u00A0");
    i0.ɵɵelement(5, "br");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r11.start_date != "0000-00-00" && item_r11.start_date != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r11.start_date != "0000-00-00" && item_r11.end_date != "0000-00-00" && item_r11.start_date != "" && item_r11.end_date != "" && item_r11.end_date != null);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r11.end_date != "0000-00-00" && item_r11.end_date != "");
} }
function TopicsCurriculumComponent_div_58_div_3_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 83);
    i0.ɵɵelement(1, "i", 84);
    i0.ɵɵelementStart(2, "ul", 85)(3, "li", 86);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_div_58_div_3_div_12_Template_li_click_3_listener() { i0.ɵɵrestoreView(_r12); const item_r11 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.createTopic("edit", item_r11)); });
    i0.ɵɵelementStart(4, "a", 87);
    i0.ɵɵelement(5, "i", 88);
    i0.ɵɵtext(6, " Edit Topic");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "li", 86);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_div_58_div_3_div_12_Template_li_click_7_listener() { i0.ɵɵrestoreView(_r12); const item_r11 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.deleteAction("topic", item_r11)); });
    i0.ɵɵelementStart(8, "a", 87);
    i0.ɵɵelement(9, "i", 89);
    i0.ɵɵtext(10, " Delete Topic");
    i0.ɵɵelementEnd()()()();
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 78);
    i0.ɵɵlistener("change", function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_input_4_Template_input_change_0_listener($event) { i0.ɵɵrestoreView(_r14); const list_r15 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r2.selectOrUnSelectContentList(list_r15, $event, "content")); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("checked", list_r15.checked);
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 116);
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_img_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 117);
} if (rf & 2) {
    const list_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("src", ctx_r2.sanitizer.bypassSecurityTrustResourceUrl(ctx_r2.webhost + "/" + list_r15.profile_url), i0.ɵɵsanitizeUrl);
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_small_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 118);
    i0.ɵɵtext(1, "(PDF)");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_small_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 118);
    i0.ɵɵtext(1, "(LINK)");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_small_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 118);
    i0.ɵɵtext(1, "(TEXT)");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 119);
    i0.ɵɵelement(1, "i", 120);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("title", list_r15.content_date_status == "3" ? "In-Progress" : list_r15.content_date_status == "4" ? "Completed" : list_r15.content_date_status == "2" ? "Upcoming" : "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c9, list_r15.content_date_status == "3" ? "#F28500" : list_r15.content_date_status == "4" ? "#81ba00" : list_r15.content_date_status == "2" ? "#91048c" : "#8f008a"));
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_span_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 121);
    i0.ɵɵtext(1, "Resource");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_span_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 122);
    i0.ɵɵtext(1, "Assignment");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_span_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 123);
    i0.ɵɵtext(1, "Assessment");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_span_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 124);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, list_r15.start_date));
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_span_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u00A0-\u00A0");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_span_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 124);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, list_r15.end_date));
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_span_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "span", 124);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, "\u00A0-\u00A0");
    i0.ɵɵelementStart(4, "span", 124);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("(", list_r15.start_time, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", list_r15.end_time, ")");
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_a_33_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 86);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_a_33_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r16); const list_r15 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r2.correctionPage(list_r15, list_r15.content_type == "2" ? "assignments" : "assessments")); });
    i0.ɵɵelement(1, "i", 125);
    i0.ɵɵtext(2, "Grading");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_a_34_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 86);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_a_34_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r17); const list_r15 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(list_r15.content_format == 3 ? ctx_r2.PreviewText(list_r15, "assignments", "student_preview") : ctx_r2.PreviewPage(list_r15, "assignments", "student_preview")); });
    i0.ɵɵelement(1, "i", 126);
    i0.ɵɵtext(2, "Student View");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_a_35_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 86);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_a_35_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r18); const list_r15 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r2.openTeacherVersionPdf(list_r15)); });
    i0.ɵɵelement(1, "i", 127);
    i0.ɵɵtext(2, "Teacher Version PDF");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_a_39_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 86);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_a_39_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r19); const list_r15 = i0.ɵɵnextContext().$implicit; const topicIndex_r20 = i0.ɵɵnextContext(3).index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.editAction(topicIndex_r20, list_r15)); });
    i0.ɵɵelement(1, "i", 128);
    i0.ɵɵtext(2, "Edit content");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_a_40_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 86);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_a_40_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r21); const list_r15 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r2.deleteAction("content", list_r15)); });
    i0.ɵɵelement(1, "i", 62);
    i0.ɵɵtext(2, "Delete content");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_a_41_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 134);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_a_41_a_5_Template_a_click_0_listener() { const topicData_r23 = i0.ɵɵrestoreView(_r22).$implicit; const list_r15 = i0.ɵɵnextContext(2).$implicit; const topicIndex_r20 = i0.ɵɵnextContext(3).index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.moveToTopics(list_r15, topicIndex_r20, topicData_r23, "topicsList")); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const topicData_r23 = ctx.$implicit;
    const item_r11 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c10, item_r11.topic_id != topicData_r23.topic_id ? "block" : "none"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, topicData_r23.topic));
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_a_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 129);
    i0.ɵɵelement(1, "i", 130);
    i0.ɵɵtext(2, "Move to Topic ");
    i0.ɵɵelementStart(3, "div", 131)(4, "div", 132);
    i0.ɵɵtemplate(5, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_a_41_a_5_Template, 3, 6, "a", 133);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("child-dropdown-content-up", ctx_r2.topicListData.length >= 1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.topicListData);
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 92)(2, "div", 93)(3, "div");
    i0.ɵɵtemplate(4, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_input_4_Template, 1, 1, "input", 70)(5, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_img_5_Template, 1, 0, "img", 94)(6, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_img_6_Template, 1, 1, "img", 95);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 96)(8, "h4", 97)(9, "span", 98);
    i0.ɵɵtext(10);
    i0.ɵɵtemplate(11, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_small_11_Template, 2, 0, "small", 99)(12, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_small_12_Template, 2, 0, "small", 99)(13, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_small_13_Template, 2, 0, "small", 99);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_span_14_Template, 2, 4, "span", 100);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 101);
    i0.ɵɵtemplate(16, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_span_16_Template, 2, 0, "span", 102)(17, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_span_17_Template, 2, 0, "span", 103)(18, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_span_18_Template, 2, 0, "span", 104);
    i0.ɵɵelementStart(19, "div", 105)(20, "p", 106);
    i0.ɵɵtemplate(21, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_span_21_Template, 3, 3, "span", 107)(22, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_span_22_Template, 2, 0, "span", 42)(23, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_span_23_Template, 3, 3, "span", 107);
    i0.ɵɵtext(24, "\u00A0");
    i0.ɵɵelement(25, "br");
    i0.ɵɵtemplate(26, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_span_26_Template, 6, 2, "span", 42);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(27, "div", 108)(28, "div", 83)(29, "button", 109);
    i0.ɵɵtext(30, "Action ");
    i0.ɵɵelement(31, "i", 110);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "div", 111);
    i0.ɵɵtemplate(33, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_a_33_Template, 3, 0, "a", 112)(34, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_a_34_Template, 3, 0, "a", 112)(35, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_a_35_Template, 3, 0, "a", 112);
    i0.ɵɵelementStart(36, "a", 86);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_Template_a_click_36_listener() { const list_r15 = i0.ɵɵrestoreView(_r13).$implicit; const ctx_r2 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(list_r15.content_format == 1 ? ctx_r2.PreviewPage(list_r15, "assignments", "teacher_preview") : ctx_r2.PreviewText(list_r15, "assignments", "teacher_preview")); });
    i0.ɵɵelement(37, "i", 113);
    i0.ɵɵtext(38, "Teacher View");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(39, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_a_39_Template, 3, 0, "a", 112)(40, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_a_40_Template, 3, 0, "a", 112)(41, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_a_41_Template, 6, 3, "a", 114);
    i0.ɵɵelementStart(42, "a", 86);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_Template_a_click_42_listener() { const list_r15 = i0.ɵɵrestoreView(_r13).$implicit; const ctx_r2 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r2.allReports(list_r15)); });
    i0.ɵɵelement(43, "i", 115);
    i0.ɵɵtext(44, "Reports");
    i0.ɵɵelementEnd()()()()()()();
} if (rf & 2) {
    const list_r15 = ctx.$implicit;
    const topicIndex_r20 = i0.ɵɵnextContext(3).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMapInterpolate1("col-1 school-img ", ctx_r2.manageClass ? "pl-0" : "", " cursor mt-2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r15.profile_url == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r15.profile_url != "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", list_r15.content_name, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r15.content_format == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r15.content_format == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r15.content_format == "3");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.dueButton == "All");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r15.content_type == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r15.content_type == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r15.content_type == "3");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r15.start_date != "0000-00-00" && list_r15.start_date != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r15.start_date != "0000-00-00" && list_r15.end_date != "0000-00-00" && list_r15.start_date != "" && list_r15.end_date != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r15.end_date != "0000-00-00" && list_r15.end_date != "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r15.start_time != list_r15.end_time);
    i0.ɵɵadvance(6);
    i0.ɵɵclassProp("dropdown-content-up", (topicIndex_r20 + 2 == ctx_r2.topicListData.length || topicIndex_r20 + 1 == ctx_r2.topicListData.length) && ctx_r2.topicListData.length > 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewType == 1 || ctx_r2.viewType == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewType == 1 || ctx_r2.viewType == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r15.teacher_version_path && list_r15.teacher_version_path.length != "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r2.manageClass && ctx_r2.viewType != "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.topicListData.length > 1);
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_div_1_Template, 45, 26, "div", 91);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r11.topicArray);
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "label", 135);
    i0.ɵɵtext(2, "No Content Added");
    i0.ɵɵelementEnd()();
} }
function TopicsCurriculumComponent_div_58_div_3_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 90);
    i0.ɵɵtemplate(1, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_1_Template, 2, 1, "div", 42)(2, TopicsCurriculumComponent_div_58_div_3_ng_template_15_div_2_Template, 3, 0, "div", 42);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r11.topicArray.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r11.topicArray.length == 0);
} }
function TopicsCurriculumComponent_div_58_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 66)(1, "div", 67, 9)(3, "div", 68)(4, "button", 69);
    i0.ɵɵtemplate(5, TopicsCurriculumComponent_div_58_div_3_input_5_Template, 1, 1, "input", 70);
    i0.ɵɵelementStart(6, "h4", 71);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "titlecase");
    i0.ɵɵtemplate(9, TopicsCurriculumComponent_div_58_div_3_span_9_Template, 2, 0, "span", 72)(10, TopicsCurriculumComponent_div_58_div_3_div_10_Template, 6, 3, "div", 73);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 74);
    i0.ɵɵtemplate(12, TopicsCurriculumComponent_div_58_div_3_div_12_Template, 11, 0, "div", 75);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 76)(14, "div", 77);
    i0.ɵɵtemplate(15, TopicsCurriculumComponent_div_58_div_3_ng_template_15_Template, 3, 2, "ng-template");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const topicIndex_r20 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("closeOthers", true);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("ngbAccordionItem", topicIndex_r20);
    i0.ɵɵproperty("collapsed", ctx_r2.isCollapsed);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r2.manageClass);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(8, 8, item_r11.topic), "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r11.start_date != "0000-00-00" && item_r11.start_date != "" && item_r11.start_date != null);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r11.start_date != "0000-00-00" && item_r11.start_date != "" && item_r11.start_date != null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.manageClass);
} }
function TopicsCurriculumComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 63)(1, "div", 64, 8);
    i0.ɵɵlistener("cdkDropListDropped", function TopicsCurriculumComponent_div_58_Template_div_cdkDropListDropped_1_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.drop($event)); });
    i0.ɵɵtemplate(3, TopicsCurriculumComponent_div_58_div_3_Template, 16, 10, "div", 65);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("cdkDropListData", ctx_r2.topicListData);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.topicListData);
} }
function TopicsCurriculumComponent_hr_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr");
} }
function TopicsCurriculumComponent_div_60_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 137)(1, "h4", 138);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.topicListData.length > 0 ? "Other Curriculums" : "Curriculums");
} }
function TopicsCurriculumComponent_div_60_div_2_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 78);
    i0.ɵɵlistener("change", function TopicsCurriculumComponent_div_60_div_2_input_5_Template_input_change_0_listener($event) { i0.ɵɵrestoreView(_r25); const list_r26 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.selectOrUnSelectContentList(list_r26, $event, "content")); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r26 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("checked", list_r26.checked);
} }
function TopicsCurriculumComponent_div_60_div_2_img_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 116);
} }
function TopicsCurriculumComponent_div_60_div_2_img_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 117);
} if (rf & 2) {
    const list_r26 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r2.sanitizer.bypassSecurityTrustResourceUrl(ctx_r2.webhost + "/" + list_r26.profile_url), i0.ɵɵsanitizeUrl);
} }
function TopicsCurriculumComponent_div_60_div_2_small_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 118);
    i0.ɵɵtext(1, "(PDF)");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_60_div_2_small_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 118);
    i0.ɵɵtext(1, "(LINK)");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_60_div_2_small_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 118);
    i0.ɵɵtext(1, "(TEXT)");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_60_div_2_span_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 121);
    i0.ɵɵtext(1, "Resource");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_60_div_2_span_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 122);
    i0.ɵɵtext(1, "Assignment");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_60_div_2_span_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 123);
    i0.ɵɵtext(1, "Assessment");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_60_div_2_span_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 124);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r26 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, list_r26.start_date));
} }
function TopicsCurriculumComponent_div_60_div_2_span_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u00A0-\u00A0");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_60_div_2_span_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 124);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r26 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, list_r26.end_date));
} }
function TopicsCurriculumComponent_div_60_div_2_span_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "span", 124);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, "\u00A0-\u00A0");
    i0.ɵɵelementStart(4, "span", 124);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r26 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("(", list_r26.start_time, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", list_r26.end_time, ")");
} }
function TopicsCurriculumComponent_div_60_div_2_a_33_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 86);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_div_60_div_2_a_33_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r27); const list_r26 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.correctionPage(list_r26, list_r26.content_type == "2" ? "assignments" : "assessments")); });
    i0.ɵɵelement(1, "i", 125);
    i0.ɵɵtext(2, "Grading");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_60_div_2_a_34_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 86);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_div_60_div_2_a_34_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r28); const list_r26 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(list_r26.content_format == 3 ? ctx_r2.PreviewText(list_r26, "assignments", "student_preview") : ctx_r2.PreviewPage(list_r26, "assignments", "student_preview")); });
    i0.ɵɵelement(1, "i", 126);
    i0.ɵɵtext(2, "Student View");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_60_div_2_a_35_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 86);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_div_60_div_2_a_35_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r29); const list_r26 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openTeacherVersionPdf(list_r26)); });
    i0.ɵɵelement(1, "i", 127);
    i0.ɵɵtext(2, "Teacher Version PDF");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_60_div_2_a_39_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 86);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_div_60_div_2_a_39_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r30 = i0.ɵɵnextContext(); const list_r26 = ctx_r30.$implicit; const i_r32 = ctx_r30.index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.editAction(i_r32, list_r26)); });
    i0.ɵɵelement(1, "i", 128);
    i0.ɵɵtext(2, "Edit content");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_60_div_2_a_40_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 86);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_div_60_div_2_a_40_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r33); const list_r26 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.deleteAction("content", list_r26)); });
    i0.ɵɵelement(1, "i", 62);
    i0.ɵɵtext(2, "Delete content");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_div_60_div_2_a_41_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 86);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_div_60_div_2_a_41_a_5_Template_a_click_0_listener() { const item_r35 = i0.ɵɵrestoreView(_r34).$implicit; const ctx_r30 = i0.ɵɵnextContext(2); const list_r26 = ctx_r30.$implicit; const i_r32 = ctx_r30.index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.moveToTopics(list_r26, i_r32, item_r35, "curricullumList")); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, item_r35.topic));
} }
function TopicsCurriculumComponent_div_60_div_2_a_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 129);
    i0.ɵɵelement(1, "i", 130);
    i0.ɵɵtext(2, "Move to Topic ");
    i0.ɵɵelementStart(3, "div", 131)(4, "div", 132);
    i0.ɵɵtemplate(5, TopicsCurriculumComponent_div_60_div_2_a_41_a_5_Template, 3, 3, "a", 142);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("child-dropdown-content-up", ctx_r2.topicListData.length >= 1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.topicListData);
} }
function TopicsCurriculumComponent_div_60_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 139)(2, "div", 140)(3, "div", 93)(4, "div");
    i0.ɵɵtemplate(5, TopicsCurriculumComponent_div_60_div_2_input_5_Template, 1, 1, "input", 70)(6, TopicsCurriculumComponent_div_60_div_2_img_6_Template, 1, 0, "img", 94)(7, TopicsCurriculumComponent_div_60_div_2_img_7_Template, 1, 1, "img", 95);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 96)(9, "h4", 141)(10, "span", 98);
    i0.ɵɵtext(11);
    i0.ɵɵtemplate(12, TopicsCurriculumComponent_div_60_div_2_small_12_Template, 2, 0, "small", 99)(13, TopicsCurriculumComponent_div_60_div_2_small_13_Template, 2, 0, "small", 99)(14, TopicsCurriculumComponent_div_60_div_2_small_14_Template, 2, 0, "small", 99);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 101);
    i0.ɵɵtemplate(16, TopicsCurriculumComponent_div_60_div_2_span_16_Template, 2, 0, "span", 102)(17, TopicsCurriculumComponent_div_60_div_2_span_17_Template, 2, 0, "span", 103)(18, TopicsCurriculumComponent_div_60_div_2_span_18_Template, 2, 0, "span", 104);
    i0.ɵɵelementStart(19, "div", 105)(20, "p", 106);
    i0.ɵɵtemplate(21, TopicsCurriculumComponent_div_60_div_2_span_21_Template, 3, 3, "span", 107)(22, TopicsCurriculumComponent_div_60_div_2_span_22_Template, 2, 0, "span", 42)(23, TopicsCurriculumComponent_div_60_div_2_span_23_Template, 3, 3, "span", 107);
    i0.ɵɵtext(24, "\u00A0");
    i0.ɵɵelement(25, "br");
    i0.ɵɵtemplate(26, TopicsCurriculumComponent_div_60_div_2_span_26_Template, 6, 2, "span", 42);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(27, "div", 108)(28, "div", 83)(29, "button", 109);
    i0.ɵɵtext(30, "Action ");
    i0.ɵɵelement(31, "i", 110);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "div", 111);
    i0.ɵɵtemplate(33, TopicsCurriculumComponent_div_60_div_2_a_33_Template, 3, 0, "a", 112)(34, TopicsCurriculumComponent_div_60_div_2_a_34_Template, 3, 0, "a", 112)(35, TopicsCurriculumComponent_div_60_div_2_a_35_Template, 3, 0, "a", 112);
    i0.ɵɵelementStart(36, "a", 86);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_div_60_div_2_Template_a_click_36_listener() { const list_r26 = i0.ɵɵrestoreView(_r24).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(list_r26.content_format == 1 ? ctx_r2.PreviewPage(list_r26, "assignments", "teacher_preview") : ctx_r2.PreviewText(list_r26, "assignments", "teacher_preview")); });
    i0.ɵɵelement(37, "i", 113);
    i0.ɵɵtext(38, "Teacher View");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(39, TopicsCurriculumComponent_div_60_div_2_a_39_Template, 3, 0, "a", 112)(40, TopicsCurriculumComponent_div_60_div_2_a_40_Template, 3, 0, "a", 112)(41, TopicsCurriculumComponent_div_60_div_2_a_41_Template, 6, 3, "a", 114);
    i0.ɵɵelementStart(42, "a", 86);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_div_60_div_2_Template_a_click_42_listener() { const list_r26 = i0.ɵɵrestoreView(_r24).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.allReports(list_r26)); });
    i0.ɵɵelement(43, "i", 115);
    i0.ɵɵtext(44, "Reports");
    i0.ɵɵelementEnd()()()()()()()();
} if (rf & 2) {
    const list_r26 = ctx.$implicit;
    const i_r32 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(26, _c11, list_r26.content_date_status == "2", list_r26.content_date_status == "3", list_r26.content_date_status == "4"));
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("col-1 d-inline-flex ", ctx_r2.manageClass ? "pl-0" : "", " school-img cursor mt-2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r26.profile_url == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r26.profile_url != "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", list_r26.content_name, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r26.content_format == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r26.content_format == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r26.content_format == "3");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r26.content_type == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r26.content_type == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r26.content_type == "3");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r26.start_date != "0000-00-00" && list_r26.start_date != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r26.start_date != "0000-00-00" && list_r26.end_date != "0000-00-00" && list_r26.start_date != "" && list_r26.end_date != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r26.end_date != "0000-00-00" && list_r26.end_date != "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r26.start_time != list_r26.end_time);
    i0.ɵɵadvance(6);
    i0.ɵɵclassProp("dropdown-content-up", (i_r32 + 2 == ctx_r2.newCurriculumList.length || i_r32 + 1 == ctx_r2.newCurriculumList.length) && ctx_r2.newCurriculumList.length > 2 || ctx_r2.topicListData.length >= 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewType == 1 || ctx_r2.viewType == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewType == 1 || ctx_r2.viewType == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r26.teacher_version_path && list_r26.teacher_version_path.length != "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r2.manageClass && ctx_r2.viewType != "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.manageClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.topicListData.length > 0);
} }
function TopicsCurriculumComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, TopicsCurriculumComponent_div_60_div_1_Template, 3, 1, "div", 136)(2, TopicsCurriculumComponent_div_60_div_2_Template, 45, 30, "div", 91);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("mt-", ctx_r2.topicListData.length != 0 ? "2" : "4", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.newCurriculumList.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.newCurriculumList);
} }
function TopicsCurriculumComponent_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 143)(1, "h4", 144);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 145);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_61_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r36); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 146)(5, "div")(6, "div", 147)(7, "div", 148)(8, "label");
    i0.ɵɵtext(9, "Class Name");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 148);
    i0.ɵɵelement(11, "input", 149);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 150)(13, "div", 148)(14, "label");
    i0.ɵɵtext(15, "Topic Name");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 148)(17, "input", 151);
    i0.ɵɵtwoWayListener("ngModelChange", function TopicsCurriculumComponent_ng_template_61_Template_input_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.topicName, $event) || (ctx_r2.topicName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "div", 150)(19, "div", 152)(20, "div", 153)(21, "label");
    i0.ɵɵtext(22, "Start Date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 153)(24, "div", 154)(25, "input", 155, 10);
    i0.ɵɵtwoWayListener("ngModelChange", function TopicsCurriculumComponent_ng_template_61_Template_input_ngModelChange_25_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.topicStartdate, $event) || (ctx_r2.topicStartdate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("dateChanged", function TopicsCurriculumComponent_ng_template_61_Template_input_dateChanged_25_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onDateChanged($event)); })("click", function TopicsCurriculumComponent_ng_template_61_Template_input_click_25_listener() { i0.ɵɵrestoreView(_r36); const dp_r37 = i0.ɵɵreference(26); return i0.ɵɵresetView(dp_r37.toggleCalendar()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 156)(28, "button", 157);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_61_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r36); const dp_r37 = i0.ɵɵreference(26); return i0.ɵɵresetView(dp_r37.toggleCalendar()); });
    i0.ɵɵelement(29, "i", 158);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(30, "div", 152)(31, "div", 153)(32, "label");
    i0.ɵɵtext(33, "End Date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 153)(35, "div", 154)(36, "input", 159, 11);
    i0.ɵɵtwoWayListener("ngModelChange", function TopicsCurriculumComponent_ng_template_61_Template_input_ngModelChange_36_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.topicEnddate, $event) || (ctx_r2.topicEnddate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_61_Template_input_click_36_listener() { i0.ɵɵrestoreView(_r36); const dp1_r38 = i0.ɵɵreference(37); return i0.ɵɵresetView(dp1_r38.toggleCalendar()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "div", 156)(39, "button", 157);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_61_Template_button_click_39_listener() { i0.ɵɵrestoreView(_r36); const dp1_r38 = i0.ɵɵreference(37); return i0.ɵɵresetView(dp1_r38.toggleCalendar()); });
    i0.ɵɵelement(40, "i", 158);
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(41, "div", 160)(42, "button", 161);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_61_Template_button_click_42_listener() { i0.ɵɵrestoreView(_r36); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.modalRef.close()); });
    i0.ɵɵtext(43, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "button", 157);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_61_Template_button_click_44_listener() { i0.ɵɵrestoreView(_r36); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.addTopicService()); });
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r2.topicPopupType == "add" ? "Create" : "Update", " Topic");
    i0.ɵɵadvance(9);
    i0.ɵɵpropertyInterpolate("value", ctx_r2.className);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.topicName);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.topicStartdate);
    i0.ɵɵproperty("options", ctx_r2.myDpOptions1);
    i0.ɵɵadvance(11);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.topicEnddate);
    i0.ɵɵproperty("options", ctx_r2.myDpOptions2);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1("", ctx_r2.topicPopupType == "add" ? "Create" : "Update", " Topic ");
} }
function TopicsCurriculumComponent_ng_template_63_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 143)(1, "h4", 144);
    i0.ɵɵtext(2, "Report");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 145);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_63_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r39); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 146);
    i0.ɵɵelement(5, "app-missed-work-report", 162);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("classShow", true)("showContent", ctx_r2.selectContent)("studentView", false)("timeView", false)("contentNameValue", ctx_r2.contentNameValue);
} }
function TopicsCurriculumComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 143)(1, "h4", 144);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "i", 145);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_65_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r40); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 146);
    i0.ɵɵelement(6, "app-items-report", 163);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(3, 4, ctx_r2.reportData.content_name), " - Report");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("showContent", "other")("studentView", false)("timeView", true);
} }
function TopicsCurriculumComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 143)(1, "h4", 144);
    i0.ɵɵtext(2, "Teacher Version");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 145);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_67_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r41); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 146);
    i0.ɵɵelement(5, "pdf-viewer", 164);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("src", ctx_r2.pdfTeacherVersion);
} }
function TopicsCurriculumComponent_ng_template_69_div_11_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 178);
    i0.ɵɵtext(1, "Instructor Graded");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_ng_template_69_div_11_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 179);
    i0.ɵɵtext(1, "Auto Graded");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_ng_template_69_div_11_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 180);
    i0.ɵɵtext(1, "Real-Time Grading");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_ng_template_69_div_11_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 178);
    i0.ɵɵtext(1, "Teacher Review Only");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_ng_template_69_div_11_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 179);
    i0.ɵɵtext(1, "Automatic Feedback");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_ng_template_69_div_11_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Responses will be reviewed and graded manually. Scores will be released after the final submission");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_ng_template_69_div_11_span_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Responses will be graded automatically, but scores and feedback will only be released after the final submission");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_ng_template_69_div_11_span_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Responses will be graded automatically and scores will be available immediately after each submission");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_ng_template_69_div_11_span_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Essay will be manually reviewed by the teacher to provide feedback and scores. System generated feedback is not available");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_ng_template_69_div_11_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Student can request for Automatic system generated feedback and score. Teacher can provide final feedback and score after the final submission");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_ng_template_69_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 171)(1, "div", 148)(2, "label", 98);
    i0.ɵɵtext(3, "Release Score");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 148)(5, "select", 172);
    i0.ɵɵlistener("change", function TopicsCurriculumComponent_ng_template_69_div_11_Template_select_change_5_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.releaseScoreFilter($event)); });
    i0.ɵɵelementStart(6, "option", 173);
    i0.ɵɵtext(7, "Select Response type");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, TopicsCurriculumComponent_ng_template_69_div_11_option_8_Template, 2, 0, "option", 174)(9, TopicsCurriculumComponent_ng_template_69_div_11_option_9_Template, 2, 0, "option", 175)(10, TopicsCurriculumComponent_ng_template_69_div_11_option_10_Template, 2, 0, "option", 176)(11, TopicsCurriculumComponent_ng_template_69_div_11_option_11_Template, 2, 0, "option", 174)(12, TopicsCurriculumComponent_ng_template_69_div_11_option_12_Template, 2, 0, "option", 175);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span", 177);
    i0.ɵɵtext(14, "(Note: ");
    i0.ɵɵtemplate(15, TopicsCurriculumComponent_ng_template_69_div_11_span_15_Template, 2, 0, "span", 42)(16, TopicsCurriculumComponent_ng_template_69_div_11_span_16_Template, 2, 0, "span", 42)(17, TopicsCurriculumComponent_ng_template_69_div_11_span_17_Template, 2, 0, "span", 42)(18, TopicsCurriculumComponent_ng_template_69_div_11_span_18_Template, 2, 0, "span", 42)(19, TopicsCurriculumComponent_ng_template_69_div_11_span_19_Template, 2, 0, "span", 42);
    i0.ɵɵtext(20, ")");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r2.isEssay == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isEssay == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.contentFormat == "3" && ctx_r2.isEssay == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isEssay == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isEssay == "1");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r2.contentForm.controls.releaseScore.value == "0" && ctx_r2.isEssay == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.contentForm.controls.releaseScore.value == "1" && ctx_r2.isEssay == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.contentForm.controls.releaseScore.value == "2" && ctx_r2.isEssay == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.contentForm.controls.releaseScore.value == "0" && ctx_r2.isEssay == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.contentForm.controls.releaseScore.value == "1" && ctx_r2.isEssay == "1");
} }
function TopicsCurriculumComponent_ng_template_69_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49)(1, "p", 181);
    i0.ɵɵtext(2, "Auto score release is not applicable for this content");
    i0.ɵɵelementEnd()();
} }
function TopicsCurriculumComponent_ng_template_69_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 147)(1, "div", 182)(2, "div", 183);
    i0.ɵɵelement(3, "input", 184);
    i0.ɵɵelementStart(4, "label", 185);
    i0.ɵɵtext(5, "Workspace");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 182)(7, "div", 183);
    i0.ɵɵelement(8, "input", 186);
    i0.ɵɵelementStart(9, "label", 187);
    i0.ɵɵtext(10, "FeedBack");
    i0.ɵɵelementEnd()()()();
} }
function TopicsCurriculumComponent_ng_template_69_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 147)(1, "div", 182)(2, "div", 153)(3, "label", 98);
    i0.ɵɵtext(4, "Start Date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 153)(6, "input", 188, 10);
    i0.ɵɵlistener("dateChanged", function TopicsCurriculumComponent_ng_template_69_div_14_Template_input_dateChanged_6_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onDateChanged($event)); })("click", function TopicsCurriculumComponent_ng_template_69_div_14_Template_input_click_6_listener() { i0.ɵɵrestoreView(_r44); const dp_r45 = i0.ɵɵreference(7); return i0.ɵɵresetView(dp_r45.toggleCalendar()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 189)(9, "div", 153)(10, "label", 98);
    i0.ɵɵtext(11, "Start Time");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 153)(13, "ngb-timepicker", 190);
    i0.ɵɵtwoWayListener("ngModelChange", function TopicsCurriculumComponent_ng_template_69_div_14_Template_ngb_timepicker_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.fromTime, $event) || (ctx_r2.fromTime = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function TopicsCurriculumComponent_ng_template_69_div_14_Template_ngb_timepicker_ngModelChange_13_listener() { i0.ɵɵrestoreView(_r44); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.checkTime()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 182)(15, "div", 153)(16, "label", 98);
    i0.ɵɵtext(17, "End Date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 153)(19, "input", 191, 11);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_69_div_14_Template_input_click_19_listener() { i0.ɵɵrestoreView(_r44); const dp1_r46 = i0.ɵɵreference(20); return i0.ɵɵresetView(dp1_r46.toggleCalendar()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "div", 189)(22, "div", 153)(23, "label", 98);
    i0.ɵɵtext(24, "End Time");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 153)(26, "ngb-timepicker", 190);
    i0.ɵɵtwoWayListener("ngModelChange", function TopicsCurriculumComponent_ng_template_69_div_14_Template_ngb_timepicker_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.toTime, $event) || (ctx_r2.toTime = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function TopicsCurriculumComponent_ng_template_69_div_14_Template_ngb_timepicker_ngModelChange_26_listener() { i0.ɵɵrestoreView(_r44); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.checkTime()); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("options", ctx_r2.myDpOptions1);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.fromTime);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(10, _c12))("meridian", ctx_r2.meridian)("spinners", ctx_r2.spinner);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("options", ctx_r2.myDpOptions2);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.toTime);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(11, _c12))("meridian", ctx_r2.meridian)("spinners", ctx_r2.spinner);
} }
function TopicsCurriculumComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 165)(1, "h4", 166);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 146)(4, "form", 167)(5, "div", 147)(6, "div", 148)(7, "label", 98);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 148);
    i0.ɵɵelement(10, "input", 149);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, TopicsCurriculumComponent_ng_template_69_div_11_Template, 21, 10, "div", 168)(12, TopicsCurriculumComponent_ng_template_69_div_12_Template, 3, 0, "div", 37)(13, TopicsCurriculumComponent_ng_template_69_div_13_Template, 11, 0, "div", 169)(14, TopicsCurriculumComponent_ng_template_69_div_14_Template, 27, 12, "div", 169);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 160)(16, "button", 161);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_69_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r42); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.contentClose()); });
    i0.ɵɵtext(17, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 170);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_69_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r42); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editContentDetails()); });
    i0.ɵɵtext(19, "Submit");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.contentname);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formGroup", ctx_r2.contentForm);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.viewType == "2" ? "Content Folder Name" : "Class Name");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("value", ctx_r2.className);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.allowScore);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.checkAutoRelease);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewType != "2" && ctx_r2.editData.content_format == "3");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewType != "2");
} }
function TopicsCurriculumComponent_ng_template_71_h4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 197);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Delete ", ctx_r2.deleteType == "topic" ? "Topic" : "Content", "");
} }
function TopicsCurriculumComponent_ng_template_71_h4_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 198);
    i0.ɵɵtext(1, " Delete Confirmation");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_ng_template_71_h5_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 199);
    i0.ɵɵtext(1, "Are you sure you want to delete this ");
    i0.ɵɵelementStart(2, "span", 98);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " ? ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.deleteType == "topic" ? "topic" : "content");
} }
function TopicsCurriculumComponent_ng_template_71_div_9_h5_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5");
    i0.ɵɵtext(1, " Do you wish to delete the ");
    i0.ɵɵelementStart(2, "span", 98);
    i0.ɵɵtext(3, "topic and the associated content");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, "?");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_ng_template_71_div_9_h5_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5");
    i0.ɵɵtext(1, " Do you wish to delete the ");
    i0.ɵɵelementStart(2, "span", 98);
    i0.ɵɵtext(3, "selected content");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, "?");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_ng_template_71_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, TopicsCurriculumComponent_ng_template_71_div_9_h5_1_Template, 5, 0, "h5", 42)(2, TopicsCurriculumComponent_ng_template_71_div_9_h5_2_Template, 5, 0, "h5", 42);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.multiTopicId.length != 0 && ctx_r2.multiContentId.length != 0 || ctx_r2.multiTopicId.length != 0 && ctx_r2.multiContentId.length == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.multiTopicId.length == 0 && ctx_r2.multiContentId.length != 0);
} }
function TopicsCurriculumComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 143);
    i0.ɵɵtemplate(1, TopicsCurriculumComponent_ng_template_71_h4_1_Template, 2, 1, "h4", 192)(2, TopicsCurriculumComponent_ng_template_71_h4_2_Template, 2, 0, "h4", 193);
    i0.ɵɵelementStart(3, "i", 145);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_71_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r47); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 146)(5, "div", 12)(6, "div", 13)(7, "div", 194);
    i0.ɵɵtemplate(8, TopicsCurriculumComponent_ng_template_71_h5_8_Template, 5, 1, "h5", 195)(9, TopicsCurriculumComponent_ng_template_71_div_9_Template, 3, 2, "div", 42);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 160)(11, "button", 196);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_71_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r47); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.modalRef.close()); });
    i0.ɵɵtext(12, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 157);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_71_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r47); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.calledFrom != "multi" ? ctx_r2.update(ctx_r2.deleteType) : ctx_r2.forkJoinService()); });
    i0.ɵɵtext(14, "Delete ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.calledFrom != "multi");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.calledFrom == "multi");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r2.calledFrom != "multi");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.calledFrom == "multi");
} }
function TopicsCurriculumComponent_ng_template_73_div_26_div_11_div_12_small_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 257);
    i0.ɵɵtext(1, "Resource");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_ng_template_73_div_26_div_11_div_12_small_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 258);
    i0.ɵɵtext(1, "Assignment");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_ng_template_73_div_26_div_11_div_12_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 259);
    i0.ɵɵtext(1, "Assessment");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_ng_template_73_div_26_div_11_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 244)(1, "div", 245)(2, "div", 246)(3, "div", 247);
    i0.ɵɵtemplate(4, TopicsCurriculumComponent_ng_template_73_div_26_div_11_div_12_small_4_Template, 2, 0, "small", 248)(5, TopicsCurriculumComponent_ng_template_73_div_26_div_11_div_12_small_5_Template, 2, 0, "small", 249)(6, TopicsCurriculumComponent_ng_template_73_div_26_div_11_div_12_small_6_Template, 2, 0, "small", 250);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 251);
    i0.ɵɵelement(8, "i", 252);
    i0.ɵɵelementStart(9, "i", 253);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_73_div_26_div_11_div_12_Template_i_click_9_listener() { const ind_r52 = i0.ɵɵrestoreView(_r51).index; const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.openConfirmDialog(ind_r52, "pdf")); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 194)(11, "h5", 254);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 255)(14, "input", 256);
    i0.ɵɵtwoWayListener("ngModelChange", function TopicsCurriculumComponent_ng_template_73_div_26_div_11_div_12_Template_input_ngModelChange_14_listener($event) { const pdf_r53 = i0.ɵɵrestoreView(_r51).$implicit; i0.ɵɵtwoWayBindingSet(pdf_r53.image, $event) || (pdf_r53.image = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const pdf_r53 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("title", pdf_r53.image);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r2.selectContentType == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.selectContentType == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.selectContentType == "3");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(pdf_r53.image + ".pdf");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(7, _c12));
    i0.ɵɵtwoWayProperty("ngModel", pdf_r53.image);
} }
function TopicsCurriculumComponent_ng_template_73_div_26_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 214)(1, "div", 236)(2, "h6", 237);
    i0.ɵɵtext(3, "Select file to upload");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 238);
    i0.ɵɵlistener("change", function TopicsCurriculumComponent_ng_template_73_div_26_div_11_Template_input_change_4_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.encodePdfFileAsURL($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 239);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_73_div_26_div_11_Template_div_click_5_listener() { i0.ɵɵrestoreView(_r50); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.openFileExplorer()); });
    i0.ɵɵelement(6, "i", 240);
    i0.ɵɵtext(7, " Add Attachment(s) ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 241);
    i0.ɵɵtext(9, "Supported file formats is pdf");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 242)(11, "div", 13);
    i0.ɵɵtemplate(12, TopicsCurriculumComponent_ng_template_73_div_26_div_11_div_12_Template, 15, 8, "div", 243);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngForOf", ctx_r2.pdfpath);
} }
function TopicsCurriculumComponent_ng_template_73_div_26_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 260);
    i0.ɵɵelement(1, "ng-select", 261);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r2.choosedData[0] == null ? null : ctx_r2.choosedData[0].students);
} }
function TopicsCurriculumComponent_ng_template_73_div_26_div_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 214);
    i0.ɵɵelement(1, "app-other-link", 262);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("titleName", "Add Link As Content")("showLink", ctx_r2.manageClass)("arrayValue", i0.ɵɵpureFunction0(3, _c13));
} }
function TopicsCurriculumComponent_ng_template_73_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 214)(1, "div", 203)(2, "div", 204)(3, "div", 13)(4, "div", 215)(5, "div", 51)(6, "label", 98);
    i0.ɵɵtext(7, "Content Type");
    i0.ɵɵelementStart(8, "span", 216);
    i0.ɵɵtext(9, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "ng-select", 217);
    i0.ɵɵtwoWayListener("ngModelChange", function TopicsCurriculumComponent_ng_template_73_div_26_Template_ng_select_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.selectContentType, $event) || (ctx_r2.selectContentType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, TopicsCurriculumComponent_ng_template_73_div_26_div_11_Template, 13, 1, "div", 212);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 218)(13, "p", 219);
    i0.ɵɵtext(14, "Class Name: ");
    i0.ɵɵelementStart(15, "span", 220);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "p", 221);
    i0.ɵɵtext(18, "Class Code: ");
    i0.ɵɵelementStart(19, "span", 220);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 222)(22, "div", 148)(23, "p", 223);
    i0.ɵɵtext(24, "Selected Students:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 224)(26, "input", 225);
    i0.ɵɵlistener("change", function TopicsCurriculumComponent_ng_template_73_div_26_Template_input_change_26_listener() { i0.ɵɵrestoreView(_r49); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.showStudentList = false); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "label", 226);
    i0.ɵɵtext(28, "All Students in selected class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "input", 227);
    i0.ɵɵlistener("change", function TopicsCurriculumComponent_ng_template_73_div_26_Template_input_change_29_listener() { i0.ɵɵrestoreView(_r49); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.showStudentList = true); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "label", 228);
    i0.ɵɵtext(31, "Specific Students");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(32, TopicsCurriculumComponent_ng_template_73_div_26_div_32_Template, 2, 1, "div", 229);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div", 230)(34, "p", 231);
    i0.ɵɵtext(35, "Start Date & Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "div", 232)(37, "div", 154)(38, "input", 233, 10);
    i0.ɵɵtwoWayListener("ngModelChange", function TopicsCurriculumComponent_ng_template_73_div_26_Template_input_ngModelChange_38_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.curriculumStartDate, $event) || (ctx_r2.curriculumStartDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("dateChanged", function TopicsCurriculumComponent_ng_template_73_div_26_Template_input_dateChanged_38_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onDateChanged($event)); })("click", function TopicsCurriculumComponent_ng_template_73_div_26_Template_input_click_38_listener() { i0.ɵɵrestoreView(_r49); const dp_r54 = i0.ɵɵreference(39); return i0.ɵɵresetView(dp_r54.toggleCalendar()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "div", 156)(41, "button", 234);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_73_div_26_Template_button_click_41_listener() { i0.ɵɵrestoreView(_r49); const dp_r54 = i0.ɵɵreference(39); return i0.ɵɵresetView(dp_r54.toggleCalendar()); });
    i0.ɵɵelement(42, "i", 158);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(43, "div", 235)(44, "ngb-timepicker", 190);
    i0.ɵɵtwoWayListener("ngModelChange", function TopicsCurriculumComponent_ng_template_73_div_26_Template_ngb_timepicker_ngModelChange_44_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.curriculumStartTime, $event) || (ctx_r2.curriculumStartTime = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(45, "div", 230)(46, "p", 231);
    i0.ɵɵtext(47, "End Date & Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "div", 232)(49, "div", 154)(50, "input", 159, 11);
    i0.ɵɵtwoWayListener("ngModelChange", function TopicsCurriculumComponent_ng_template_73_div_26_Template_input_ngModelChange_50_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.curriculumEndDate, $event) || (ctx_r2.curriculumEndDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_73_div_26_Template_input_click_50_listener() { i0.ɵɵrestoreView(_r49); const dp1_r55 = i0.ɵɵreference(51); return i0.ɵɵresetView(dp1_r55.toggleCalendar()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "div", 156)(53, "button", 234);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_73_div_26_Template_button_click_53_listener() { i0.ɵɵrestoreView(_r49); const dp1_r55 = i0.ɵɵreference(51); return i0.ɵɵresetView(dp1_r55.toggleCalendar()); });
    i0.ɵɵelement(54, "i", 158);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(55, "div", 235)(56, "ngb-timepicker", 190);
    i0.ɵɵtwoWayListener("ngModelChange", function TopicsCurriculumComponent_ng_template_73_div_26_Template_ngb_timepicker_ngModelChange_56_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.curriculumEndTime, $event) || (ctx_r2.curriculumEndTime = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(57, TopicsCurriculumComponent_ng_template_73_div_26_div_57_Template, 2, 4, "div", 212);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("items", ctx_r2.contentTypleList);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.selectContentType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showContentCurriculumType == "upload");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.className);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.choosedData[0] == null ? null : ctx_r2.choosedData[0].class_code);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("checked", !ctx_r2.showStudentList);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", ctx_r2.showStudentList);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r2.showStudentList);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.curriculumStartDate);
    i0.ɵɵproperty("options", ctx_r2.myDpOptions1);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.curriculumStartTime);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(21, _c12))("meridian", ctx_r2.meridian)("spinners", ctx_r2.spinner);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.curriculumEndDate);
    i0.ɵɵproperty("options", ctx_r2.myDpOptions2);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.curriculumEndTime);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(22, _c12))("meridian", ctx_r2.meridian)("spinners", ctx_r2.spinner);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showContentCurriculumType == "link");
} }
function TopicsCurriculumComponent_ng_template_73_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 157);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_73_button_30_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r56); const ctx_r2 = i0.ɵɵnextContext(2); ctx_r2.showContentCurriculumType = ""; return i0.ɵɵresetView(ctx_r2.modalRef.close()); });
    i0.ɵɵtext(1, "Assign Content");
    i0.ɵɵelementEnd();
} }
function TopicsCurriculumComponent_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 143)(1, "h4", 200);
    i0.ɵɵtext(2, "Curriculum");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 145);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_73_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r48); const ctx_r2 = i0.ɵɵnextContext(); ctx_r2.showContentCurriculumType = ""; return i0.ɵɵresetView(ctx_r2.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 201)(5, "div", 12)(6, "div", 13)(7, "div", 202)(8, "div", 203)(9, "div", 204)(10, "div", 205)(11, "div", 206)(12, "i", 207);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_73_Template_i_click_12_listener() { i0.ɵɵrestoreView(_r48); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.showContentCurriculumType = "upload"); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p");
    i0.ɵɵtext(14, "Upload");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 206)(16, "i", 208);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_73_Template_i_click_16_listener() { i0.ɵɵrestoreView(_r48); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.showContentCurriculumType = "link"); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "p");
    i0.ɵɵtext(18, "Link");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 209)(20, "div", 51)(21, "i", 210);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_73_Template_i_click_21_listener() { i0.ɵɵrestoreView(_r48); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.showContentCurriculumType = "assign"); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span", 211);
    i0.ɵɵtext(23, "\u2714");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "p");
    i0.ɵɵtext(25, "Assign From Library");
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵtemplate(26, TopicsCurriculumComponent_ng_template_73_div_26_Template, 58, 23, "div", 212);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "div", 160)(28, "button", 196);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_73_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r48); const ctx_r2 = i0.ɵɵnextContext(); ctx_r2.showContentCurriculumType = ""; return i0.ɵɵresetView(ctx_r2.modalRef.close()); });
    i0.ɵɵtext(29, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(30, TopicsCurriculumComponent_ng_template_73_button_30_Template, 2, 0, "button", 213);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(26);
    i0.ɵɵproperty("ngIf", ctx_r2.showContentCurriculumType != "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r2.showContentCurriculumType != "");
} }
function TopicsCurriculumComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 146)(1, "div", 12)(2, "div", 13)(3, "div", 263)(4, "h5", 15);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(6, "div", 160)(7, "button", 264);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_75_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r57); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.modalRef.close("deleteDialog")); });
    i0.ɵɵtext(8, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 157);
    i0.ɵɵlistener("click", function TopicsCurriculumComponent_ng_template_75_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r57); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.isDeleteLink ? ctx_r2.deleteLink() : ctx_r2.deletePDf(ctx_r2.selectedDeletePdf.index)); });
    i0.ɵɵtext(10, "Confirm");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Are sure to delete this ", ctx_r2.isDeleteLink ? "Link" : "PDF", "?");
} }
export class TopicsCurriculumComponent {
    constructor(auth, assessment, router, formBuilder, route, newSubject, sanitizer, config, modalService, classService, datePipe, toastr, common, commondata, creatorService, navservice) {
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
        this.navservice = navservice;
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
        this.typeName = '';
        this.className = '';
        this.title = '';
        this.roleId = '';
        this.curriculumList = [];
        this.topicListData = [];
        this.topicName = '';
        this.newCurriculumList = [];
        this.topicPopupType = '';
        this.updateTopicId = '';
        this.manageClass = true;
        this.teacherType = '1';
        this.collapse = 'Collapse All';
        this.isCollapsed = false;
        this.checkAutoRelease = true;
        this.content_id = '';
        this.contentFormat = '';
        this.pdfTeacherVersion = [];
        this.showOtherLinks = false;
        this.linkData = [];
        this.allowZoomApi = false;
        this.showType = 'curriculum';
        this.messageList = [];
        this.toId = [];
        this.messageCount = 0;
        this.isEssay = '0';
        this.pdfpath = [];
        this.isDeleteLink = false;
        this.showStudentList = false;
        this.contentTypleList = [{ id: '1', value: 'Resource' }, { id: '2', value: 'Assignment' }, {
                id: '3',
                value: 'Assesment'
            }];
        this.showContentCurriculumType = '';
        this.multiContentId = [];
        this.multiTopicId = [];
        this.calledFrom = 'direct';
        this.roleId = this.auth.getRoleId();
        this.contentForm = this.formBuilder.group({
            startdate: [''],
            enddate: '',
            releaseScore: ['0'],
            feedback: false,
            workspace: false,
        });
        this.model = { isRange: false, singleDate: { jsDate: new Date() } };
        this.webhost = this.config.getimgUrl();
        this.route.params.forEach((params) => {
            this.viewType = params.id;
        });
        this.meridian = true;
        this.spinner = false;
        this.allowSelect = true;
        this.newSubject.allowSchoolChange(this.allowSelect);
        if (['1', '3', '4', '5'].includes(this.viewType)) {
            this.choosedData = JSON.parse(this.auth.getSessionData('card-data'));
            this.className = this.choosedData[0].class_name;
            this.typeName = 'Class Name';
            this.title = 'Topics';
            this.classid = this.choosedData[0].class_id;
            this.linkData = this.choosedData[0]?.video_link ? this.choosedData[0]?.video_link : [];
            console.log(this.choosedData[0], 'ssss');
            this.choosedData[0].students.forEach((items) => {
                items.name = items.first_name + items.last_name;
                items.id = items.student_id;
            });
            if (this.auth.getRoleId() != '2') {
                if (this.choosedData[0]?.teacher_ids) {
                    this.toId = this.choosedData[0]?.teacher_ids.filter((items) => {
                        return items != this.auth.getUserId();
                    });
                }
                else {
                    this.toId = [];
                }
            }
            console.log(this.toId, 'toId');
            ['4', '5'].includes(this.viewType) ? this.showType = 'inbox' : '';
        }
        else if (this.viewType == '2') {
            this.choosedData = JSON.parse(this.auth.getSessionData('classbatch'));
            this.className = this.choosedData.batch_name;
            this.typeName = 'Content Folder Name';
        }
        const searchValue = JSON.parse(this.auth.getSessionData(SessionConstants.classCurriculumSearch));
        console.log(searchValue, 'searchValue');
        this.curriculumService(searchValue ? searchValue[0]?.curriculum_type ?? '2' : '2');
        this.schoolId = JSON.parse(this.auth.getSessionData('rista_data1'));
        this.manageClass = this.auth.manageClass;
    }
    ngOnInit() {
        this.creatorService.changeViewList(true);
        this.navservice.collapseSidebar = true;
        if (this.auth.getRoleId() == '4') {
            this.listMessage();
        }
        if (this.choosedData[0]?.class_type == '1') {
            this.checkAllowZoomApi();
        }
    }
    ngOnDestroy() {
        this.creatorService.changeViewList(false);
        this.navservice.collapseSidebar = false;
        this.setSearch_Filter();
    }
    selectOrUnSelectContentList(item, event, type) {
        console.log(item);
        item.checked = event.target.checked;
        if (event.target.checked) {
            if (type == 'content') {
                if (item.topic_id == '0') {
                    this.multiContentId.push(item.class_content_id);
                }
                else if (item.topic_id != '0') {
                    const index = this.topicListData.findIndex(x => x.topic_id == item.topic_id);
                    this.topicListData[index].topicArray.forEach((content) => {
                        if (content.checked && !this.multiContentId.includes(content.class_content_id)) {
                            this.multiContentId.push(content.class_content_id);
                        }
                    });
                    this.topicListData[index].checked = !this.topicListData[index].topicArray.some((code) => !code.checked);
                    if (this.topicListData[index].checked) {
                        this.topicListData[index].topicArray.forEach((content) => {
                            const contentIndex = this.multiContentId.findIndex(x => x == content.class_content_id);
                            contentIndex != -1 ? this.multiContentId.splice(contentIndex, 1) : '';
                        });
                        this.multiTopicId.push(this.topicListData[index].topic_id);
                    }
                }
            }
            else {
                this.multiTopicId.push(item.topic_id);
                item.topicArray.forEach((content) => {
                    content.checked = true;
                    const contentIndex = this.multiContentId.findIndex(x => x == content.class_content_id);
                    contentIndex != -1 ? this.multiContentId.splice(contentIndex, 1) : '';
                });
            }
        }
        else {
            if (type == 'content') {
                if (item.topic_id == '0') {
                    const index = this.multiContentId.findIndex(x => x == item.class_content_id);
                    this.multiContentId.splice(index, 1);
                }
                else {
                    const topicIndex = this.topicListData.findIndex(x => x.topic_id == item.topic_id);
                    this.topicListData[topicIndex].checked = false;
                    this.topicListData[topicIndex].topicArray.forEach((content) => {
                        if (content.checked && !this.multiContentId.includes(content.class_content_id)) {
                            this.multiContentId.push(content.class_content_id);
                        }
                        else if (!content.checked && (item.class_content_id == content.class_content_id)) {
                            const contentIndex = this.multiContentId.findIndex(x => x == item.class_content_id);
                            contentIndex != -1 ? this.multiContentId.splice(contentIndex, 1) : '';
                        }
                    });
                    const multiTopicIndex = this.multiTopicId.findIndex(x => x == this.topicListData[topicIndex].topic_id);
                    this.multiTopicId.splice(multiTopicIndex, 1);
                    console.log(this.multiContentId, 'multiContentId');
                    console.log(this.multiTopicId, 'multiTopicId');
                }
            }
            else {
                item.topicArray.forEach(content => content.checked = false);
                const index = this.multiTopicId.findIndex(x => x == item.topic_id);
                this.multiTopicId.splice(index, 1);
                const classContentId = item.topicArray.map((data) => data.class_content_id);
                this.multiContentId.filter((value) => !classContentId.includes(value));
                // this.multiContentId = filterClassContentId;
            }
        }
        event.stopPropagation();
    }
    openCurriculumPopUp() {
        this.showType = '';
        this.curriculumStartDate = '';
        const startDate = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
        const dropped = startDate.split('-');
        this.curriculumStartDate = {
            isRange: false,
            singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
            dateRange: null
        };
        this.curriculumStartTime = { hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00') };
        this.curriculumEndTime = { hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00') };
        this.modalRef = this.modalService.open(this.curriculumPopUp, { size: 'xl' });
    }
    listMessage() {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.choosedData[0]?.class_id
        };
        this.auth.postService(payload, 'mailbox/listMessages').subscribe((successData) => {
            console.log(successData, 'successData');
            if (successData.IsSuccess) {
                successData.ResponseObject.forEach((item) => {
                    item.createdByMe = item.from_id == this.auth.getUserId();
                });
                this.messageList = successData.ResponseObject;
                this.messageCount = successData.NewMessage;
                console.log(this.messageList, 'messageList');
            }
        }, (error) => console.error(error, 'error_listMessage'));
    }
    setSearch_Filter() {
        let data = JSON.parse(this.auth.getSessionData(SessionConstants.classCurriculumSearch));
        if (data != null) {
            data.forEach((items) => {
                if (items.school_id == this.auth.getSessionData('school_id')) {
                    items.list_type = '';
                    items.curriculum_type = this.viewtypehighlight;
                }
                else {
                    const searchData = {
                        list_type: '',
                        curriculum_type: this.viewtypehighlight,
                        school_id: this.auth.getSessionData('school_id'),
                    };
                    data.push(searchData);
                }
            });
            data = data.filter((test, index, array) => index === array.findIndex((findTest) => findTest.school_id === test.school_id));
            this.auth.setSessionData(SessionConstants.classCurriculumSearch, JSON.stringify(data));
        }
    }
    typeSelection(id) {
        this.viewtypehighlight = id;
        console.log(this.viewtypehighlight, 'viewtypehighlight');
        if (id == '0') {
            this.dueButton = 'All';
            this.curriculumService(id);
        }
        else if (id == '1') {
            this.dueButton = 'Upcoming';
            this.curriculumService(id);
        }
        else if (id == '2') {
            this.dueButton = 'In Progress';
            this.curriculumService(id);
        }
        else {
            this.dueButton = 'Completed';
            this.curriculumService(id);
        }
        this.setSearch_Filter();
    }
    curriculumService(id) {
        this.viewtypehighlight = id;
        id == '2' ? this.dueButton = 'In Progress' : id == '0' ? this.dueButton = 'All' : id == '3' ? this.dueButton = 'Completed' : id == '1' ?
            this.dueButton = 'Upcoming' : '';
        const data = {
            platform: 'web',
            type: id,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.choosedData[0].class_id,
            school_id: this.choosedData[0].school_id,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        this.classService.viewCurriculumList(data).subscribe((successData) => {
            this.viewCurriculumListSuccess(successData);
        }, (error) => {
            console.log(error);
        });
    }
    viewCurriculumListSuccess(successData) {
        if (successData.IsSuccess) {
            this.curriculumList = successData.ResponseObject;
            this.resourceList = successData.ResponseObject;
            this.curriculumList.forEach((item, index) => {
                item.id = index + 1;
            });
            this.getTopicList();
        }
    }
    // Topic list service
    getTopicList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: [this.choosedData[0].class_id],
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        this.classService.topicList(data).subscribe((successData) => {
            this.viewTopicListSuccess(successData);
        }, (error) => {
            console.log(error);
        });
    }
    viewTopicListSuccess(successData) {
        if (successData.IsSuccess) {
            this.topicListData = successData.ResponseObject;
            this.topicListData.forEach((items) => {
                items.topicArray = [];
                this.curriculumList.forEach((curriculum) => {
                    if (curriculum.topic_id == items.topic_id) {
                        items.contentCollapse = true;
                        items.topicArray.push(curriculum);
                    }
                });
            });
            this.newCurriculumList = [];
            this.curriculumList.forEach((item) => {
                if (item.topic_id == '0' || item.topic_id == '') {
                    this.newCurriculumList.push(item);
                }
            });
            console.log(this.topicListData, 'topicList');
            console.log(this.curriculumList, 'curriList');
        }
    }
    // Add Topic service
    addTopicService() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.choosedData[0].class_id,
            topic: this.topicPopupType != 'topic' ? this.topicName : '',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            start_date: this.topicPopupType == 'topic' ? '' : this.topicStartdate == '' ? '' : this.datePipe.transform(this.topicStartdate?.singleDate?.jsDate, 'yyyy-MM-dd'),
            end_date: this.topicPopupType == 'topic' ? '' : this.contentForm.controls.enddate.value == null ? '' : this.datePipe.transform(this.topicEnddate?.singleDate?.jsDate, 'yyyy-MM-dd'),
            allow_workspace: this.topicPopupType == 'topic' ? '0' : this.contentForm.controls.workspace.value ? '1' : '0',
            allow_feedback: this.topicPopupType == 'topic' ? '0' : this.contentForm.controls.feedback.value ? '1' : '0',
        };
        if (this.topicPopupType == 'edit' || this.topicPopupType == 'topic') {
            data['topic_id'] = this.topicPopupType == 'edit' ? this.updateTopicId : this.calledFrom == 'direct' ?
                [this.delTopicId] : this.multiTopicId;
            data['type'] = this.topicPopupType == 'edit' ? '1' : '2';
            data['status'] = '1';
        }
        const url = this.topicPopupType == 'add' ? 'classes/addTopic' : 'classes/updateTopic';
        this.classService.addTopic(data, url).subscribe((successData) => {
            this.addTopicSuccess(successData);
        }, (error) => {
            console.log(error);
        });
    }
    addTopicSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.calledFrom != 'direct' ? this.multiTopicId = [] : '';
            this.modalRef.close();
            this.getTopicList();
            this.curriculumService(this.viewtypehighlight);
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    drop(event) {
        if (event.previousContainer !== event.container) {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            if (event.previousIndex != event.currentIndex) {
                moveItemInArray(this.topicListData, event.previousIndex, event.currentIndex);
                const topicIdArr = this.topicListData.map((item) => item.topic_id);
                this.updateTopicOrder(topicIdArr);
            }
        }
    }
    updateTopicOrder(topicIdArr) {
        // Intl.DateTimeFormat().resolvedOptions().timeZone
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.choosedData[0].class_id,
            topic_order: topicIdArr,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        this.classService.updateTopicOrder(data).subscribe((successData) => {
            this.updateTopicOrderSuccess(successData);
        }, (error) => {
            console.log(error);
        });
    }
    updateTopicOrderSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            // this.getTopicList();
        }
        else {
            this.toastr.error(successData.ResponseObject);
        }
    }
    createTopic(type, data) {
        console.log(data, 'dataa');
        this.topicPopupType = type;
        this.updateTopicId = data.topic_id;
        this.topicName = type == 'edit' ? data.topic : '';
        // Start Date Patch
        console.log(type, 'type');
        if (type == 'edit' && (data.start_date != null || data.end_date != null)) {
            if (data.start_date != '0000-00-00' && data.start_date) {
                const startDate = data.start_date.split('-');
                const sdObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(startDate[0]), parseInt(startDate[1]) - 1, parseInt(startDate[2])) },
                    dateRange: null
                };
                this.topicStartdate = sdObject;
            }
            else {
                this.topicStartdate = '';
            }
            // End Date Patch
            if (data.end_date != '0000-00-00' && data.end_date) {
                const endDate = data.end_date.split('-');
                const sdObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(endDate[0]), parseInt(endDate[1]) - 1, parseInt(endDate[2])) },
                    dateRange: null
                };
                this.topicEnddate = sdObject;
            }
            else {
                this.topicEnddate = '';
            }
        }
        else {
            this.topicStartdate = '';
            this.topicEnddate = '';
        }
        this.modalRef = this.modalService.open(this.createTopicPopup, { size: 'lg', backdrop: 'static' });
    }
    addContentResources(type) {
        this.auth.setSessionData('resourceAccess', true);
        this.auth.setSessionData('content_assign', 'class');
        this.auth.setSessionData('allowCurriculum', '1');
        this.auth.setSessionData('return', type);
        this.auth.setSessionData('batchassign', this.viewType);
        this.auth.setSessionData('assignedForm', this.viewType == '2' ? 'content-Folder' : 'class');
        if (type == 'resources') {
            ['1', '3', '4', '5'].includes(this.viewType) ? this.viewResource() : this.viewBatchResource();
            this.auth.setSessionData('contentType', 1);
        }
        else if (type == 'assignments') {
            ['1', '3', '4', '5'].includes(this.viewType) ? this.viewAssignment() : this.viewBatchAssignment();
            this.auth.setSessionData('contentType', 2);
        }
        else if (type == 'assessments') {
            ['1', '3', '4', '5'].includes(this.viewType) ? this.viewAssessment() : this.viewBatchAssessment();
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
            this.auth.setSessionData(SessionConstants.non_directcontentSearch, JSON.stringify(data));
        });
        this.router.navigate(['/repository/content-home']);
    }
    viewResource() {
        const data = {
            platform: 'web',
            type: this.viewtypehighlight,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.choosedData[0].class_id,
        };
        this.classService.viewResources(data).subscribe((successData) => {
            this.viewResourceSuccess(successData);
        }, (error) => {
            console.log(error);
        });
    }
    viewResourceSuccess(successData) {
        if (successData.IsSuccess) {
            this.resourceList = successData.ResponseObject;
        }
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
            console.log(error);
        });
    }
    viewBatchResourceSuccess(successData) {
        if (successData.IsSuccess) {
            this.resourceList = successData.ResponseObject;
        }
    }
    viewAssessment() {
        const data = {
            platform: 'web',
            type: this.viewtypehighlight,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.choosedData[0].class_id,
        };
        this.classService.viewAssessments(data).subscribe((successData) => {
            this.viewAssessmentSuccess(successData);
        }, (error) => {
            console.log(error);
        });
    }
    viewAssessmentSuccess(successData) {
        if (successData.IsSuccess) {
            this.resourceList = successData.ResponseObject;
        }
    }
    viewAssignment() {
        const data = {
            platform: 'web',
            type: this.viewtypehighlight,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.choosedData[0].class_id,
        };
        this.classService.viewAssignments(data).subscribe((successData) => {
            this.viewAssignmentSuccess(successData);
        }, (error) => {
            console.log(error);
        });
    }
    viewAssignmentSuccess(successData) {
        if (successData.IsSuccess) {
            this.resourceList = successData.ResponseObject;
        }
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
            console.log(error);
        });
    }
    viewBatchAssignmentSuccess(successData) {
        if (successData.IsSuccess) {
            this.resourceList = successData.ResponseObject;
        }
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
            console.log(error);
        });
    }
    viewBatchAssessmentSuccess(successData) {
        if (successData.IsSuccess) {
            this.resourceList = successData.ResponseObject;
        }
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
    openTeacherVersionPdf(data) {
        const pdf = this.common.convertBase64(data.teacher_version_path);
        this.pdfTeacherVersion = this.webhost + '/' + pdf[0].original_image_url;
        this.modalRef = this.modalService.open(this.teacherVersion, { size: 'xl' });
    }
    reportDetails(type, value) {
        this.selectContent = value.content_type == '2' ? 'Assignment' : value.content_type == '3' ? 'Assessment' : 'Resource';
        this.contentNameValue = value.content_id;
        let data;
        data = JSON.parse(this.auth.getSessionData('card-data'));
        this.auth.setSessionData('Individual-Class-Report', JSON.stringify(data[0]));
        this.auth.setSessionData('Individual-student-Report', JSON.stringify(value));
        this.modalRef = this.modalService.open(this.reports, { size: 'xl' });
    }
    itemsReportDetails(data) {
        this.auth.setSessionData('Individual-items-Report', JSON.stringify(data));
        this.reportData = JSON.parse(this.auth.getSessionData('Individual-items-Report'));
        this.modalRef = this.modalService.open(this.itemsReports, { size: 'xl' });
    }
    allReports(data, calledFrom = '') {
        if (calledFrom == '') {
            data['viewType'] = this.viewType;
            data['manageClass'] = this.manageClass;
        }
        else {
            data['content_format'] = '3';
            data['content_id'] = '0';
        }
        this.auth.setSessionData('report_type', calledFrom == '' ? 'all' : 'viewAnalytics');
        this.auth.setSessionData('All-Reports', JSON.stringify(data));
        this.auth.setSessionData('reportCalledFrom', 'class-detail');
        this.router.navigate(['/report/report']);
    }
    navigateToSATReport(calledFrom) {
        this.auth.setSessionData('report_type', 'viewAnalytics');
        const satReportDetails = {
            class_id: this.choosedData[0].class_id,
            class_name: this.choosedData[0]?.class_name,
            student_id: this.auth.getRoleId() == '5' ? this.auth.getUserId() : '0',
            content_id: calledFrom ? calledFrom.content_id : '0',
            student_content_id: '0',
            test_type_id: calledFrom ? calledFrom?.test_type_id : '0'
        };
        this.auth.setSessionData('satReportData', JSON.stringify(satReportDetails));
        this.auth.setSessionData('reportCalledFrom', 'class');
        this.router.navigate(['sat-report']);
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
    checkTime() {
        if (this.fromTime == undefined || this.toTime == undefined) {
            this.timeErr = true;
        }
        else {
            const fromTime = this.fromTime.hour * 60;
            const fullFromTime = fromTime + this.fromTime.minute;
            const toTime = this.toTime.hour * 60;
            const fulltoTime = toTime + this.toTime.minute;
            this.timeErr = fulltoTime <= fullFromTime;
        }
        return this.timeErr;
    }
    editAction(id, data) {
        this.editData = data;
        this.contentname = data.content_name;
        this.modalRef = this.modalService.open(this.addAssign, { size: 'lg', backdrop: 'static' });
        const stTime1 = data.start_time.replace(' ', ':').split(':');
        if (parseInt(stTime1[0]) < 12 && stTime1[2] != 'AM') {
            stTime1[0] = parseInt(stTime1[0]) + 12;
            this.fromTime = {
                hour: parseInt(stTime1[0]), minute: parseInt(stTime1[1]), second: 0
            };
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
            this.fromTime = {
                hour: parseInt(stTime1[0]), minute: parseInt(stTime1[1]), second: 0
            };
        }
        const etTime1 = data.end_time.replace(' ', ':').split(':');
        if (parseInt(etTime1[0]) < 12 && etTime1[2] != 'AM') {
            etTime1[0] = parseInt(etTime1[0]) + 12;
            this.toTime = {
                hour: parseInt(etTime1[0]), minute: parseInt(etTime1[1]), second: 0
            };
        }
        else {
            this.toTime = {
                hour: parseInt(etTime1[0]), minute: parseInt(etTime1[1]), second: 0
            };
        }
        if (data.start_date != '0000-00-00') {
            const sd = data.start_date.split('-');
            const sdObject = {
                isRange: false,
                singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) },
                dateRange: null
            };
            this.contentForm.controls.startdate.patchValue(sdObject);
        }
        else {
            this.contentForm.controls.startdate.patchValue(null);
        }
        if (data.end_date != '0000-00-00') {
            const sd = data.end_date.split('-');
            const sdObject = {
                isRange: false,
                singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) },
                dateRange: null
            };
            this.contentForm.controls.enddate.patchValue(sdObject);
        }
        else {
            this.contentForm.controls.enddate.patchValue(null);
        }
        this.contentForm.controls.workspace.patchValue(data.allow_workspace == '1');
        this.contentForm.controls.feedback.patchValue(data.allow_feedback == '1');
        this.allowScore = data.allow_autograde == '1' && data.content_type != '1' && data.without_question != 1;
        this.content_id = data.content_id;
        this.contentFormat = data.content_format;
        this.isEssay = data?.is_essay ?? '0';
        setTimeout(() => {
            this.contentForm.controls.releaseScore.patchValue(data.auto_review ?? '0');
        }, 0);
    }
    deleteAction(type, data) {
        this.deleteType = type;
        this.deleteData = data;
        this.delTopicId = data.topic_id;
        this.topicPopupType = type;
        this.calledFrom = 'direct';
        this.modalRef = this.modalService.open(this.deleteContent, { size: 'md', backdrop: 'static' });
    }
    deleteMultiContentOrTopic() {
        this.calledFrom = 'multi';
        this.modalRef = this.modalService.open(this.deleteContent, { size: 'md', backdrop: 'static' });
    }
    listView(id) {
        this.gridView = id;
        this.showGrid = id == 1;
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
    onSave() {
        this.modalRef.close();
        this.auth.removeSessionData('Individual-Class-Report');
    }
    moveToTopics(data, index, topicList, type) {
        if (type == 'curricullumList') {
            topicList.topicArray.push(data);
            this.newCurriculumList.splice(index, 1);
        }
        else {
            topicList.topicArray.push(data);
        }
        this.moveToTopicsService(data, topicList, 'add');
        console.log(this.topicListData, 'topicListData');
    }
    moveToTopicsService(curriculum, topic, type) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_content_id: curriculum.class_content_id,
            topic_id: type == 'add' ? topic.topic_id : '0',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        this.classService.moveTopic(data).subscribe((successData) => {
            this.moveTopicSuccess(successData);
        }, (error) => {
            console.log(error);
        });
    }
    moveTopicSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(successData.ResponseObject, 'success');
            this.curriculumService(this.viewtypehighlight);
            // this.getTopicList();
        }
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
                else
                    this.dateValidation = st[1] <= et[1];
            }
            else {
                this.dateValidation = true;
            }
        }
        else {
            this.dateValidation = true;
        }
    }
    contentClose() {
        this.fromTime = '';
        this.toTime = '';
        this.contentname = '';
        this.modalRef.close();
    }
    addCurriculum() {
        this.auth.setSessionData('resourceAccess', true);
        this.auth.setSessionData('allowCurriculum', '1');
        this.auth.setSessionData('batchassign', this.viewType);
        this.auth.setSessionData('assignedForm', this.viewType == '2' ? 'content-Folder' : 'class');
        this.curriculumService(this.viewtypehighlight);
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
            data = data.filter((test, index, array) => index == array.findIndex((findTest) => findTest.school_id === test.school_id));
            console.log(data, 'DATA');
            this.auth.setSessionData(SessionConstants.non_directcontentSearch, JSON.stringify(data));
        });
        this.router.navigate(['/repository/content-home']);
    }
    backAction() {
        this.navservice.collapseSidebar = false;
        if (this.viewType == '1') {
            this.enterList();
        }
        else if (this.viewType == '2') {
            this.router.navigate(['/classroom/list-classroom']);
        }
        else if (['3', '4'].includes(this.viewType)) {
            this.router.navigate(['/class/list-class']);
        }
        else if (this.viewType == '5') {
            this.router.navigate(['/schedule/schedule-page']);
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
            console.log(error);
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
            if (classReturn == 'true') {
                if (this.detailData[0].classDate_status == '2' || this.detailData[0].classDate_status == '5') {
                    if (!this.manageClass) {
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
                    if (!this.manageClass) {
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
    editContentDetails() {
        this.dateDifferent();
        if (this.dateValidation == true) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                content_id: this.editData.content_id,
                class_id: this.classid,
                start_time: this.fromTime == null ? '' : this.fromTime,
                end_time: this.toTime == null ? '' : this.toTime,
                class_content_id: this.editData.class_content_id,
                auto_review: this.contentForm.controls.releaseScore.value,
                allow_workspace: this.contentForm.controls.workspace.value ? '1' : '0',
                allow_feedback: this.contentForm.controls.feedback.value ? '1' : '0',
                start_date: this.contentForm.controls.startdate.value == null ? '' : this.datePipe.transform(this.contentForm.controls.startdate.value.singleDate.jsDate, 'yyyy-MM-dd'),
                end_date: this.contentForm.controls.enddate.value == null ? '' : this.datePipe.transform(this.contentForm.controls.enddate.value.singleDate.jsDate, 'yyyy-MM-dd'),
            };
            this.classService.editContentDetail(data).subscribe((successData) => {
                this.editSuccess(successData);
            }, (error) => {
                console.log(error);
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
            // if (this.auth.getSessionData('resourceReload') == '1'){
            //     this.viewResource();
            // }else if (this.auth.getSessionData('resourceReload') == '2'){
            //     this.viewAssignment();
            // }else if (this.auth.getSessionData('resourceReload') == '3'){
            //     this.viewAssessment();
            // }
            this.curriculumService(this.viewtypehighlight);
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
    update(type) {
        if (type == 'content') {
            if (['1', '3', '4', '5'].includes(this.viewType)) {
                this.deleteContentDetails();
            }
            else if (this.viewType == '2') {
                // this.deleteBatchContentDetails(del);
            }
        }
        else {
            this.addTopicService();
        }
    }
    deleteContentDetails() {
        console.log(this.resourceList, 'RESOURCE');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            // content_id: this.deleteData.content_id,
            // class_id: this.classid,
            class_content_id: this.calledFrom == 'direct' ? [this.deleteData.class_content_id] : this.multiContentId
        };
        this.classService.deleteContentDetail(data).subscribe((successData) => {
            this.deleteSuccess(successData);
        }, (error) => {
            console.log(error);
        });
    }
    deleteSuccess(successData) {
        if (successData.IsSuccess) {
            this.deleteDetail = successData.ResponseObject;
            this.calledFrom != 'direct' ? this.multiContentId = [] : '';
            this.calledFrom = 'direct';
            this.modalRef.close();
            // if (this.auth.getSessionData('resourceReroute') == '1') {
            //   this.viewResource();
            // } else if (this.auth.getSessionData('resourceReroute') == '2') {
            //   this.viewAssignment();
            // } else if (this.auth.getSessionData('resourceReroute') == '3') {
            //   this.viewAssessment();
            // }
            this.toastr.success(successData.ResponseObject);
            this.curriculumService(this.viewtypehighlight);
        }
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
            console.log(error);
        });
    }
    deleteBatchSuccess(successData) {
        if (successData.IsSuccess) {
            this.deleteDetail = successData.ResponseObject;
            this.modalRef.close();
            // if (this.auth.getSessionData('resourceReroute') == '1') {
            //   this.viewBatchResource();
            // } else if (this.auth.getSessionData('resourceReroute') == '2') {
            //   this.viewBatchAssignment();
            // } else if (this.auth.getSessionData('resourceReroute') == '3') {
            //   this.viewBatchAssessment();
            // }
            this.curriculumService(this.viewtypehighlight);
        }
    }
    checkAllowZoomApi() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.choosedData[0]?.school_id
        };
        this.classService.zoomPermission(data).subscribe((successData) => {
            if (successData.IsSuccess) {
                this.allowZoomApi = successData.ResponseObject[0].value == '0';
            }
        }, (error) => {
            console.error(error);
        });
    }
    updateClass() {
        const validResourceLinks = this.linkData.filter((item) => item.link && item.link.trim() !== '');
        const checkForValidResourceLink = validResourceLinks.some((item) => item.name == '');
        if (!checkForValidResourceLink) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.choosedData[0].school_id,
                name: this.choosedData[0]?.class_name,
                start_date: this.choosedData[0]?.start_date != '0000-00-00' && this.choosedData[0]?.start_date ? this.choosedData[0]?.start_date : '',
                end_date: this.choosedData[0]?.end_date != '0000-00-00' && this.choosedData[0]?.end_date ? this.choosedData[0]?.end_date : '',
                start_time: '',
                end_time: '',
                grade: this.choosedData[0]?.grade ? [this.choosedData[0]?.grade] : [],
                batch_id: this.choosedData[0]?.batch_id ? this.choosedData[0]?.batch_id : [],
                subject: this.choosedData[0]?.subject ? [this.choosedData[0]?.subject] : [],
                status: this.choosedData[0]?.status,
                tags: this.choosedData[0]?.tags,
                video_link: validResourceLinks,
                students: this.choosedData[0]?.students ? this.choosedData[0]?.students : [],
                teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0',
                meeting_link: this.choosedData[0]?.meeting_link,
                meeting_id: this.choosedData[0]?.meeting_id,
                passcode: this.choosedData[0]?.passcode,
                profile_url: this.choosedData[0]?.profile_url,
                profile_thumb_url: this.choosedData[0]?.profile_thumb_url,
                file_path: [],
                links: [],
                file_text: '',
                content_type: '1',
                content_id: [],
                content_format: '1',
                annotation: [],
                answers: [],
                allow_zoom_api: this.allowZoomApi ? '0' : '1',
                availabilityDate: this.choosedData[0]?.availabilityDate,
                individual_teacher: this.teacherType,
                telephone_number: this.choosedData[0]?.telephone_number,
                class_id: this.choosedData[0]?.class_id,
                class_status: this.choosedData[0]?.class_status,
                class_type: this.choosedData[0]?.class_type,
                notes: this.choosedData[0]?.notes,
                announcement_type: this.choosedData[0]?.announcement_type ? this.choosedData[0]?.announcement_type : '',
                class_code: this.choosedData[0]?.class_code
            };
            console.log(data, 'data serv');
            this.classService.editClasses(data).subscribe((successData) => {
                if (successData.IsSuccess) {
                    this.linkData = validResourceLinks;
                    this.choosedData[0].video_link = this.linkData;
                    this.auth.setSessionData('card-data', JSON.stringify(this.choosedData));
                    this.toastr.success('Resource Link updated successfully');
                }
            }, (error) => {
                console.error(error);
            });
        }
        else {
            this.linkData.forEach(item => item.error = item.name == '' && item.link != '');
            setTimeout(() => {
                const element = document.getElementById('otherLink');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
            this.toastr.error('Name is mandatory for each additional resource links');
        }
    }
    openFileExplorer() {
        document.getElementById('uploadFileInput').click();
    }
    encodePdfFileAsURL(event) {
        const images = [];
        const imageLength = event.target.files.length;
        for (let i = 0; i < event.target.files.length; i++) {
            const getUrlEdu = '';
            const pdfDetails = event.target.files[i];
            console.log(pdfDetails, 'IMGDETAILS');
            const reader = new FileReader();
            reader.onload = (event) => {
                const uploadTypeList = event.target.result.split(',');
                images.push({
                    image: uploadTypeList[1],
                    size: pdfDetails.size,
                    type: pdfDetails.type,
                    name: pdfDetails.name
                });
                const pic = pdfDetails.type.split('/');
                console.log(pic, 'Type');
                if (pic[1] == 'pdf') {
                    if (imageLength == images.length) {
                        this.onUploadKYCFinishedpdf(images);
                    }
                }
                else {
                    this.toastr.error('PDF are the required file format');
                }
            };
            reader.readAsDataURL(event.target.files[i]);
        }
    }
    onUploadKYCFinishedpdf(getUrlEdu) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            image_path: getUrlEdu,
            uploadtype: 'content'
        };
        console.log(data, 'dataaa');
        this.common.fileUpload(data).subscribe((successData) => {
            this.pdfuploadSuccess(successData);
            console.log(successData, 'successData');
        }, (error) => {
            console.error(error, 'wrongFormat');
        });
    }
    pdfuploadSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            console.log(this.pdfpath, 'This imagepath');
            const imagePath = successData.ResponseObject.imagepath;
            imagePath.forEach((item) => {
                item.image = item.image.split('.')[0];
                item.links = [];
            });
            this.pdfpath = [...this.pdfpath, ...imagePath];
            console.log(this.pdfpath, 'pdfPath');
        }
        else {
            this.toastr.error('Invalid File Format');
        }
    }
    openConfirmDialog(pIndex, type) {
        this.isDeleteLink = type == 'link';
        if (type != 'link') {
            this.selectedDeletePdf = {
                name: this.pdfpath[pIndex].image,
                index: pIndex
            };
        }
        else {
            this.selectedDeletePdf = pIndex;
        }
        this.modalRef = this.modalService.open(this.deleteDialog, { size: 's' });
    }
    deletePDf(index) {
        console.log(this.pdfpath);
        this.pdfpath.splice(index, 1);
        this.modalRef.close('deleteDialog');
        this.modalRef.close();
    }
    deleteLink() {
        this.pdfpath[this.selectedDeletePdf.pdfIndex].links.splice(this.selectedDeletePdf.linkIndex, 1);
        this.modalRef.close('deleteDialog');
    }
    forkJoinService() {
        const topicRequest = this.auth.postService({
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.choosedData[0].class_id,
            topic: '',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            start_date: '',
            end_date: '',
            topic_id: this.multiTopicId,
            type: '2',
            status: '1'
        }, 'classes/updateTopic');
        const contentRequest = this.auth.postService({
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_content_id: this.multiContentId
        }, 'content/deleteContent');
        const calledArray = this.multiTopicId.length != 0 && this.multiContentId.length != 0 ? [topicRequest, contentRequest] :
            this.multiTopicId.length != 0 && this.multiContentId.length == 0 ? [topicRequest] : [contentRequest];
        forkJoin(calledArray).subscribe(results => {
            if (results.every(result => result['IsSuccess'])) {
                console.log(results, 'resilts');
                this.calledFrom = 'direct';
                this.modalRef.close();
                this.toastr.success(this.multiTopicId.length != 0 && this.multiContentId.length != 0 ?
                    'Topic and Content Deleted Successfully' : this.multiTopicId.length != 0 ? 'Topic Deleted Successfully'
                    : 'Content Deleted Successfully');
                this.multiContentId = [];
                this.multiTopicId = [];
                this.curriculumService(this.viewtypehighlight);
            }
        });
    }
    static { this.ɵfac = function TopicsCurriculumComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TopicsCurriculumComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.AssessmentService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.FormBuilder), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i5.NewsubjectService), i0.ɵɵdirectiveInject(i6.DomSanitizer), i0.ɵɵdirectiveInject(i7.ConfigurationService), i0.ɵɵdirectiveInject(i8.NgbModal), i0.ɵɵdirectiveInject(i9.ClassService), i0.ɵɵdirectiveInject(i10.DatePipe), i0.ɵɵdirectiveInject(i11.ToastrService), i0.ɵɵdirectiveInject(i12.CommonService), i0.ɵɵdirectiveInject(i13.CommonDataService), i0.ɵɵdirectiveInject(i14.CreatorService), i0.ɵɵdirectiveInject(i15.NavService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TopicsCurriculumComponent, selectors: [["app-topics-curriculum"]], viewQuery: function TopicsCurriculumComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
            i0.ɵɵviewQuery(_c4, 5);
            i0.ɵɵviewQuery(_c5, 5);
            i0.ɵɵviewQuery(_c6, 5);
            i0.ɵɵviewQuery(_c7, 5);
            i0.ɵɵviewQuery(_c8, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.itemsReports = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.reports = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addAssign = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.createTopicPopup = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.teacherVersion = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.curriculumPopUp = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.uploadFileInput = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteDialog = _t.first);
        } }, decls: 77, vars: 14, consts: [["createTopicPopup", ""], ["reports", ""], ["itemsReports", ""], ["teacherVersion", ""], ["assign", ""], ["content", ""], ["curriculum", ""], ["deleteDialog", ""], ["topicsList", "cdkDropList"], ["accordion", "ngbAccordionItem"], ["dp", "angular-mydatepicker"], ["dp1", "angular-mydatepicker"], [1, "container-fluid"], [1, "row"], [1, "col-4", "align-self-center"], [1, "mb-0"], [1, "col-8", "col-lg-8", "d-flex", "justify-content-md-end", "align-items-center"], [1, "btn-group"], [1, "btn", "btn-outline-primary", "pull-right", "mr-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-long-arrow-left", "fa-1x"], [1, "btn", "btn-outline-primary", "mr-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-inbox", "mr-2"], ["class", "btn btn-outline-primary mr-2", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-primary mr-2", 3, "click", 4, "ngIf"], ["data-toggle", "dropdown", 1, "btn", "cancel", "pull-right", "dropdown-toggle", "mr-2", 3, "click"], ["_ngcontent-serverapp-c20", "", "aria-hidden", "true", 1, "fa", "fa-plus-circle"], [1, "custom-addcontent", "dropdown-menu"], [1, "dropdown-item-content", "dropdown-link", 3, "click"], [1, "fa", 2, "font-size", "14px"], [1, "ml-2"], [1, "fas", 2, "font-size", "14px"], [1, "btn", "btn-primary", "mr-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle"], [1, "btn-group", 3, "hidden"], ["data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle", 3, "click"], [1, "dropdown-menu", 2, "left", "-35px"], ["class", "ml-2 expand-icon cursor", "aria-controls", "collapseCard", 3, "click", 4, "ngIf"], ["class", "col-12 px-0", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "row d-flex justify-content-center", "style", "margin-top: 100px;", 4, "ngIf"], ["class", "col-12 d-flex justify-content-end pr-0", 4, "ngIf"], ["class", "custom-accordion mt-4", 4, "ngIf"], [4, "ngIf"], [3, "class", 4, "ngIf"], [1, "inbox-count", "color-primary"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-2", 3, "click"], [1, "fa", "fa-external-link", "mr-2"], ["aria-controls", "collapseCard", 1, "ml-2", "expand-icon", "cursor", 3, "click"], ["title", "Collapse", "aria-hidden", "true", 2, "font-size", "24px", "cursor", "pointer", "color", "#91048c", 3, "title"], [1, "col-12", "px-0"], [3, "saveLinks", "calledFrom", "showLink", "arrayValue"], [1, "col-12"], [3, "updateCount", "to_id", "choosedData", "arrayList"], [1, "row", "d-flex", "justify-content-center", 2, "margin-top", "100px"], [1, "col-4"], [1, "nodataList"], [1, "col-12", "d-flex", "justify-content-end", "pr-0"], [1, "mt-1"], [1, "fa", "fa-square", "ml-1", 2, "font-size", "14px", "color", "#ffbc58"], [1, "fa", "fa-square", "ml-1", 2, "font-size", "14px", "color", "#81ba00"], [1, "fa", "fa-square", "ml-1", 2, "font-size", "14px", "color", "#13c9ca"], [1, "btn", "btn-outline-primary", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash", "mr-1"], [1, "custom-accordion", "mt-4"], ["cdkDropList", "", 3, "cdkDropListDropped", "cdkDropListData"], ["ngbAccordion", "", "cdkDrag", "", 3, "closeOthers", 4, "ngFor", "ngForOf"], ["ngbAccordion", "", "cdkDrag", "", 3, "closeOthers"], [1, "mb-2", "topics_accordion_item", 3, "ngbAccordionItem", "collapsed"], ["ngbAccordionHeader", ""], [1, "col-12", "header_button", 2, "cursor", "move"], ["type", "checkbox", "class", "mr-2 cursor", 3, "checked", "change", 4, "ngIf"], ["ngbAccordionToggle", "", 1, "px-0", "viewTopicName", "d-flex", "justify-content-between", "cursor"], ["class", " viewTopicName ml-2", "style", "cursor: move;", 4, "ngIf"], ["class", "px-0 ml-2", 4, "ngIf"], [1, "custom-content"], ["class", "dropdown", 4, "ngIf"], ["ngbAccordionCollapse", ""], ["ngbAccordionBody", "", 2, "margin", "2px"], ["type", "checkbox", 1, "mr-2", "cursor", 3, "change", "checked"], [1, "viewTopicName", "ml-2", 2, "cursor", "move"], [1, "px-0", "ml-2"], ["class", "font-weight-bold viewTopicName", 4, "ngIf"], [1, "font-weight-bold", "viewTopicName"], [1, "dropdown"], ["aria-hidden", "true", "data-toggle", "dropdown", 1, "fa", "fa-ellipsis-v", 2, "font-size", "16px", "color", "#7F3486", "cursor", "pointer"], [1, "cursor", "dropdown-menu", "custom-drop"], [3, "click"], [1, "editIcon"], ["aria-hidden", "true", 1, "fa", "fa-pencil"], ["aria-hidden", "true", 1, "fa", "fa-trash"], [1, "col-md-12", "dropdotted"], [4, "ngFor", "ngForOf"], [1, "col-12", "card", "class-card", "class-hover", "mt-3"], [1, "row", "p-2", "d-flex", "flex-wrap"], ["src", "assets/images/ristaschool/option-writing-checkbox-concepts-survey.png", "style", "width: 50px;height: 50px;", "class", "cursor rounded-circle", "alt", "", 4, "ngIf"], ["style", "width: 50px;height: 50px;", "class", "cursor rounded-circle", "alt", "", 3, "src", 4, "ngIf"], [1, "col-5", "p-0", 2, "align-self", "center"], [1, "t-period", "m-0", "p-0"], [1, "font-weight-bold"], ["class", "contenttext", 4, "ngIf"], [3, "title", "ngStyle", 4, "ngIf"], [1, "col-12", "px-0", "d-flex", "justify-content-between"], ["class", "badge badge-green font-weight-bold align-self-center", 4, "ngIf"], ["class", "badge badge-warning font-weight-bold align-self-center", 4, "ngIf"], ["class", "badge badge-primary font-weight-bold align-self-center", 4, "ngIf"], [1, "col-10", "px-0"], [1, "d-flex", "mb-0"], ["class", "contenttext font-weight-bold", 4, "ngIf"], [1, "col-6", "d-flex", "justify-content-end", "mt-2"], [1, "btn", "btn-outline-primary"], ["aria-hidden", "true", 1, "fa", "fa-sort-desc", "float-right", "ml-2"], [1, "dropdown-content", "cursor", 2, "right", "2px"], [3, "click", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-eye", "mr-1"], ["class", "child-dropdown", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-bar-chart", "mr-1"], ["src", "assets/images/ristaschool/option-writing-checkbox-concepts-survey.png", "alt", "", 1, "cursor", "rounded-circle", 2, "width", "50px", "height", "50px"], ["alt", "", 1, "cursor", "rounded-circle", 2, "width", "50px", "height", "50px", 3, "src"], [1, "contenttext"], [3, "title", "ngStyle"], [1, "fa", "fa-clock", "ml-1", 2, "font-size", "17px"], [1, "badge", "badge-green", "font-weight-bold", "align-self-center"], [1, "badge", "badge-warning", "font-weight-bold", "align-self-center"], [1, "badge", "badge-primary", "font-weight-bold", "align-self-center"], [1, "contenttext", "font-weight-bold"], ["aria-hidden", "true", 1, "fa", "fa-users", "mr-1"], ["aria-hidden", "true", 1, "fa", "fa-address-card", "mr-1"], ["aria-hidden", "true", 1, "fa", "fa-id-badge", "mr-1"], ["aria-hidden", "true", 1, "fa", "fa-pencil", "mr-1"], [1, "child-dropdown"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left", "mr-1"], [1, "child-dropdown-content"], [1, "scrollClass"], [3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [3, "click", "ngStyle"], [1, "col-12", "custom-label"], ["class", "col-6 align-self-center pl-0", 4, "ngIf"], [1, "col-6", "align-self-center", "pl-0"], [1, "viewname"], [1, "example-container", "mt-2"], [1, "col-12", "card", "class-card", "class-hover", 3, "ngClass"], [1, "t-period", "p-0", "m-0"], [3, "click", 4, "ngFor", "ngForOf"], [1, "modal-header", "align-items-center"], [1, "modal-title"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "modal-body"], [1, "row", "form-group"], [1, "col-md-12"], ["readonly", "", "type", "text", "placeholder", "Enter the Class Name", 1, "form-control", 3, "value"], [1, "form-group", "row"], ["type", "text", "placeholder", "Enter Topic Name", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-6"], [1, "row-md-12"], [1, "d-flex", "align-items-baseline"], ["placeholder", "Start Date", "name", "dp", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "ngModelChange", "dateChanged", "click", "ngModel", "options"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-calendar-o"], ["placeholder", "End Date", "name", "dp1", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "ngModelChange", "click", "ngModel", "options"], [1, "modal-footer"], [1, "btn", "btn-outline-primary", 3, "click"], [3, "classShow", "showContent", "studentView", "timeView", "contentNameValue"], [3, "showContent", "studentView", "timeView"], [2, "display", "block", "height", "100vh", 3, "src"], [1, "modal-header"], [1, "contenttext", "mb-0"], [3, "formGroup"], ["class", "row form-group mb-3", 4, "ngIf"], ["class", "row form-group", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [1, "row", "form-group", "mb-3"], ["formControlName", "releaseScore", 1, "form-control", "mb-1", 3, "change"], ["value", "n/a", "disabled", ""], ["value", "0", 4, "ngIf"], ["value", "1", 4, "ngIf"], ["value", "2", 4, "ngIf"], [1, "notes_style"], ["value", "0"], ["value", "1"], ["value", "2"], [1, "assign-error", "text-center"], [1, "col-md-2"], [1, "col-12", 2, "position", "relative", "font-size", "15px", "left", "0.4rem"], ["type", "checkbox", "id", "workspace", "formControlName", "workspace", 1, "form-check-input", "cursor"], ["for", "workspace", 1, "cursor", "mb-0", "font-weight-bold", 2, "font-size", "14px"], ["type", "checkbox", "id", "feedback", "formControlName", "feedback", 1, "form-check-input", "cursor"], ["for", "feedback", 1, "cursor", "mb-0", "font-weight-bold", 2, "font-size", "14px"], ["placeholder", "Start Date", "formControlName", "startdate", "name", "dp", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "dateChanged", "click", "options"], [1, "col-md-4"], [3, "ngModelChange", "ngModel", "ngModelOptions", "meridian", "spinners"], ["placeholder", "End Date", "formControlName", "enddate", "name", "dp1", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "click", "options"], ["class", "modal-title font-weight-bold", "id", "modal-basic-title", 4, "ngIf"], ["class", "modal-title font-weight-bold", "id", "modal-basic1-title", 4, "ngIf"], [1, "col-sm-12", "px-0"], ["class", "text-center", 4, "ngIf"], ["type", "button", 1, "btn", "cancel", 3, "click"], ["id", "modal-basic-title", 1, "modal-title", "font-weight-bold"], ["id", "modal-basic1-title", 1, "modal-title", "font-weight-bold"], [1, "text-center"], [1, "modal-title", "font-weight-bold"], [1, "modal-body", "py-3", "px-1", 2, "background", "#f5f5f578"], [1, "col-sm-12"], [1, "card", "mb-0"], [1, "card-body"], [1, "row", "justify-content-center"], [1, "w-10", "text-center"], [1, "fa", "icon_circle", "fa-upload", "color-primary", "cursor", 3, "click"], [1, "fa", "icon_circle", "fa-link", "color-primary", "cursor", 3, "click"], [1, "w-10", "text-center", "row"], [1, "fa", "icon_circle", "fa-file-o", "color-primary", "cursor", 3, "click"], [1, "tickMark"], ["class", "col-12 mt-3", 4, "ngIf"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "col-12", "mt-3"], [1, "col-7"], [1, "error", "ml-1"], ["bindLabel", "value", "bindValue", "id", "placeholder", "Select Content", "typeToSearchText", "", 3, "ngModelChange", "items", "ngModel"], [1, "col-5"], [1, "mb-2", 2, "color", "#777777", ";font-size", "12px !important"], [1, "color-primary", "font-weight-bold", 2, "font-size", "14px"], [1, "my-2", 2, "color", "#777777", "font-size", "12px !important"], [1, "row", "form-group", "mt-2", "mb-3"], [1, "mb-0", 2, "color", "#777777", "font-size", "12px !important"], [1, "col-md-12", "d-flex", "align-items-center"], ["name", "studentSelection", "id", "allStudents", "type", "radio", "value", "1", 1, "mr-2", "cursor", 3, "change", "checked"], ["for", "allStudents", 1, "mr-4", "mb-0", "cursor"], ["name", "studentSelection", "id", "specificStudents", "type", "radio", "value", "0", 1, "mr-2", "cursor", 3, "change", "checked"], ["for", "specificStudents", 1, "mr-2", "mb-0", "cursor"], ["class", "col-md-8 mt-2", 4, "ngIf"], [1, "row", "my-2"], [1, "mb-0", "col-12", 2, "color", "#777777", "font-size", "12px !important"], [1, "col-6", "pr-0"], ["placeholder", "Start Date", "name", "dp", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 2, "border-top-right-radius", "0", "border-bottom-right-radius", "0", 3, "ngModelChange", "dateChanged", "click", "ngModel", "options"], ["type", "button", 1, "btn", "btn-primary", 2, "border-top-left-radius", "0", "border-bottom-left-radius", "0", "padding", "6.5px 8px !important", 3, "click"], [1, "col-6"], [1, "col-12", "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12", "py-2", "px-0"], [1, "text-caption"], ["type", "file", "id", "uploadFileInput", "multiple", "", "name", "uploadFileInput", "accept", ".pdf, application/pdf", "hidden", "", 3, "change"], ["for", "uploadFileInput", 1, "upload-file", "mt-0", 3, "click"], [1, "fa", "fa-upload", "mr-1"], [1, "f-12", 2, "color", "gray"], [1, "col-12", "mt-3", "px-0"], ["class", "fileItem-input col-4 mb-4", 3, "title", 4, "ngFor", "ngForOf"], [1, "fileItem-input", "col-4", "mb-4", 3, "title"], [1, "fileItem", 2, "width", "100%", "display", "block"], [1, "col-md-12", "px-0", "d-flex", "justify-content-between"], [1, "col-md-6", "px-0"], ["class", "badge mb-2", "style", "background-color: #3693b7; color: whitesmoke", 4, "ngIf"], ["class", "badge mb-2", "style", "background-color: #ca9be2; color: whitesmoke", 4, "ngIf"], ["class", "badge mb-2", "style", "background-color: cadetblue; color: whitesmoke", 4, "ngIf"], [1, "col-md-6", "px-0", "d-flex", "justify-content-end"], [1, "fa", "fa-link"], [1, "fa", "fa-trash-o", "ml-2", "error", 3, "click"], [1, "d-inline"], [1, "w-100", "mt-2"], ["type", "text", 1, "form-control", "mx-1", 3, "ngModelChange", "ngModelOptions", "ngModel"], [1, "badge", "mb-2", 2, "background-color", "#3693b7", "color", "whitesmoke"], [1, "badge", "mb-2", 2, "background-color", "#ca9be2", "color", "whitesmoke"], [1, "badge", "mb-2", 2, "background-color", "cadetblue", "color", "whitesmoke"], [1, "col-md-8", "mt-2"], ["bindValue", "id", "bindLabel", "name", "placeholder", "Select Student", "typeToSearchText", "", "multiple", "true", 3, "items"], ["id", "otherLink", 3, "titleName", "showLink", "arrayValue"], [1, "col-md-12", "my-3"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"]], template: function TopicsCurriculumComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "h4", 15);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div", 16)(6, "div", 17)(7, "button", 18);
            i0.ɵɵlistener("click", function TopicsCurriculumComponent_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.backAction()); });
            i0.ɵɵelement(8, "i", 19);
            i0.ɵɵtext(9, " Back ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "button", 20);
            i0.ɵɵlistener("click", function TopicsCurriculumComponent_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.allReports(ctx.choosedData[0], "viewAnalytics")); });
            i0.ɵɵelement(11, "i", 21);
            i0.ɵɵtext(12, "View Report ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(13, TopicsCurriculumComponent_button_13_Template, 5, 1, "button", 22)(14, TopicsCurriculumComponent_button_14_Template, 3, 0, "button", 23);
            i0.ɵɵelementStart(15, "div", 17)(16, "button", 24);
            i0.ɵɵlistener("click", function TopicsCurriculumComponent_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.showType = ""); });
            i0.ɵɵelement(17, "i", 25);
            i0.ɵɵtext(18, " Curriculum ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 26)(20, "a", 27);
            i0.ɵɵlistener("click", function TopicsCurriculumComponent_Template_a_click_20_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.addContentResources("resources")); });
            i0.ɵɵelementStart(21, "i", 28);
            i0.ɵɵtext(22, "\uF02D");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "span", 29);
            i0.ɵɵtext(24, "Resource");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "a", 27);
            i0.ɵɵlistener("click", function TopicsCurriculumComponent_Template_a_click_25_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.addContentResources("assignments")); });
            i0.ɵɵelementStart(26, "i", 30);
            i0.ɵɵtext(27, "\uF518");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "span", 29);
            i0.ɵɵtext(29, "Assignment");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "a", 27);
            i0.ɵɵlistener("click", function TopicsCurriculumComponent_Template_a_click_30_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.addContentResources("assessments")); });
            i0.ɵɵelementStart(31, "i", 28);
            i0.ɵɵtext(32, "\uF15C");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "span", 29);
            i0.ɵɵtext(34, "Assessment");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(35, "div", 17)(36, "button", 31);
            i0.ɵɵlistener("click", function TopicsCurriculumComponent_Template_button_click_36_listener() { i0.ɵɵrestoreView(_r1); ctx.showType = ""; return i0.ɵɵresetView(ctx.createTopic("add", "")); });
            i0.ɵɵelement(37, "i", 32);
            i0.ɵɵtext(38, " Topic ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(39, "div", 33)(40, "button", 34);
            i0.ɵɵlistener("click", function TopicsCurriculumComponent_Template_button_click_40_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.showType = ""); });
            i0.ɵɵtext(41);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "div", 35)(43, "a", 27);
            i0.ɵɵlistener("click", function TopicsCurriculumComponent_Template_a_click_43_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.typeSelection("1")); });
            i0.ɵɵtext(44, "Upcoming");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "a", 27);
            i0.ɵɵlistener("click", function TopicsCurriculumComponent_Template_a_click_45_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.typeSelection("2")); });
            i0.ɵɵtext(46, "In Progress");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "a", 27);
            i0.ɵɵlistener("click", function TopicsCurriculumComponent_Template_a_click_47_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.typeSelection("3")); });
            i0.ɵɵtext(48, "Completed");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "a", 27);
            i0.ɵɵlistener("click", function TopicsCurriculumComponent_Template_a_click_49_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.typeSelection("0")); });
            i0.ɵɵtext(50, "All");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(51, TopicsCurriculumComponent_span_51_Template, 2, 5, "span", 36);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(52, "hr");
            i0.ɵɵtemplate(53, TopicsCurriculumComponent_div_53_Template, 2, 3, "div", 37)(54, TopicsCurriculumComponent_div_54_Template, 3, 3, "div", 38)(55, TopicsCurriculumComponent_div_55_Template, 4, 0, "div", 39)(56, TopicsCurriculumComponent_div_56_Template, 11, 0, "div", 40)(57, TopicsCurriculumComponent_div_57_Template, 5, 1, "div", 38)(58, TopicsCurriculumComponent_div_58_Template, 4, 2, "div", 41)(59, TopicsCurriculumComponent_hr_59_Template, 1, 0, "hr", 42)(60, TopicsCurriculumComponent_div_60_Template, 3, 5, "div", 43)(61, TopicsCurriculumComponent_ng_template_61_Template, 46, 8, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(63, TopicsCurriculumComponent_ng_template_63_Template, 6, 5, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(65, TopicsCurriculumComponent_ng_template_65_Template, 7, 6, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(67, TopicsCurriculumComponent_ng_template_67_Template, 6, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(69, TopicsCurriculumComponent_ng_template_69_Template, 20, 8, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(71, TopicsCurriculumComponent_ng_template_71_Template, 15, 4, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(73, TopicsCurriculumComponent_ng_template_73_Template, 31, 2, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor)(75, TopicsCurriculumComponent_ng_template_75_Template, 11, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.className);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngIf", ctx.auth.getRoleId() != "2");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.viewType != "2");
            i0.ɵɵadvance(25);
            i0.ɵɵproperty("hidden", ctx.viewType == "2");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.dueButton);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("ngIf", ctx.topicListData.length != 0);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.showOtherLinks);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showType == "inbox");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.curriculumList.length == 0 && ctx.topicListData.length == 0 && ctx.showType != "inbox");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.curriculumList.length != 0 || ctx.topicListData.length != 0) && ctx.showType != "inbox" && ctx.dueButton == "All");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showType != "inbox" && (ctx.multiTopicId.length != 0 || ctx.multiContentId.length != 0));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.topicListData.length != 0 && ctx.showType != "inbox");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.topicListData.length != 0 && ctx.showType != "inbox");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showType != "inbox");
        } }, dependencies: [i10.NgClass, i10.NgForOf, i10.NgIf, i10.NgStyle, i8.NgbAccordionDirective, i8.NgbAccordionItem, i8.NgbAccordionHeader, i8.NgbAccordionToggle, i8.NgbAccordionBody, i8.NgbAccordionCollapse, i8.NgbTimepicker, i4.ɵNgNoValidate, i4.NgSelectOption, i4.ɵNgSelectMultipleOption, i4.DefaultValueAccessor, i4.CheckboxControlValueAccessor, i4.SelectControlValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.FormGroupDirective, i4.FormControlName, i16.NgSelectComponent, i4.NgModel, i17.AngularMyDatePickerDirective, i18.MissedWorkReportComponent, i19.ItemsReportComponent, i20.PdfViewerComponent, i21.OtherLinkComponent, i22.InboxChatComponent, i23.CdkDropList, i23.CdkDrag, i10.TitleCasePipe, i24.CustomDateFormatPipe], styles: [".viewTitle[_ngcontent-%COMP%] {\n  width: 100%;\n  font-weight: bolder;\n  font-size: 20px;\n  background: #f8f8f9;\n}\n\n.dropdotted[_ngcontent-%COMP%] {\n  position: relative;\n  margin-right: auto;\n  margin-left: auto;\n  display: inline-block;\n  border-radius: 15px;\n  min-height: 110px;\n  background-color: #fff;\n  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;\n}\n\n.custom-label[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 18px;\n  font-weight: 600;\n  color: #cacaca;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 40px;\n}\n\nexample-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-listCustom[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n  .custom-accordion .accordion > .card > .card-header {\n  border-bottom: 1px solid #e5e5e5;\n  background: #f8f8f8;\n  height: 55px;\n  cursor: move;\n\n  button {\n    padding: 0.5rem 1.5rem;\n    border-radius: 5px;\n    letter-spacing: 1px;\n    line-height: 20px;\n    font-size: 14px;\n    font-weight: 700;\n    transition: 0.3s ease-in-out;\n    text-decoration: none;\n    text-transform: capitalize;\n  }\n}\n\n  .custom-accordion .accordion > .card {\n  overflow: visible;\n  border: 1px solid #e5e5e5;\n  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;\n}\n\n  .custom-content .dropdown {\n  position: absolute;\n  display: inline-block;\n  cursor: pointer;\n  right: 2%;\n  top: 35%;\n}\n\n.icon_circle[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 12px;\n  border: 1px solid #f5f5f5 !important;\n  border-radius: 50%;\n}\n\n.tickMark[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: 400;\n  position: absolute;\n  top: 17px !important;\n  right: 52px;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.upload-file[_ngcontent-%COMP%] {\n  align-items: center;\n  border: 1px solid #8f008aad;\n  border-radius: .25rem;\n  display: inline-flex;\n  font-size: .875rem;\n  margin-bottom: 0.5rem;\n  padding: .5rem 1rem;\n  transition: transform .3s ease, box-shadow .3s ease;\n  cursor: pointer;\n  color: #8F008A;\n}\n\n.upload-file[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.5rem 1rem rgba(8, 8, 8, .15);\n}\n\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  font-family: Roboto, Arial, sans-serif;\n}\n\n.text-wrapper[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.centered[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 1.3em;\n  text-align: center;\n}\n\n.dropzone[_ngcontent-%COMP%] {\n  height: 200px;\n  display: table;\n  width: 100%;\n  background-color: #eee;\n  border: dotted 1px #aaa;\n}\n\ninput[type=\"file\"][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.textLink[_ngcontent-%COMP%] {\n  background-color: #8F008A;\n  color: #fff;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.text-wrapper[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.centered[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 1.3em;\n  text-align: center;\n}\n\n.fileItem-input[_ngcontent-%COMP%] {\n  width: calc(25% - 16px);\n}\n\n\n.fileItem[_ngcontent-%COMP%] {\n  width: calc(25% - 6px);\n  overflow: hidden;\n  min-height: 6rem;\n  height: fit-content;\n  margin: 3px;\n  padding: 10px;\n  display: flex;\n  align-content: center;\n  position: relative;\n  float: left;\n  border: 2px dashed #778899;\n  border-radius: 5px;\n  transition: .3s ease;\n  cursor: pointer;\n}\n\n.fileItem[_ngcontent-%COMP%]   .fa-trash-o[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  color: red;\n}\n\n.fileItem[_ngcontent-%COMP%]:hover   .fileItemIcon[_ngcontent-%COMP%]::before {\n  content: \"\\f00d\";\n  color: whitesmoke;\n}\n\n.fileItemIconDiv[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.fileItemIcon[_ngcontent-%COMP%]::before {\n  font-style: normal;\n  font-weight: 900;\n}\n\n.fileItemText[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  font-size: 8px;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TopicsCurriculumComponent, [{
        type: Component,
        args: [{ selector: 'app-topics-curriculum', template: "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-4 align-self-center\">\n            <h4 class=\"mb-0\">{{className}}</h4>\n        </div>\n        <div class=\"col-8 col-lg-8 d-flex justify-content-md-end align-items-center\">\n            <div class=\"btn-group\">\n                <button class=\"btn btn-outline-primary pull-right mr-2\" (click)=\"backAction()\"><i\n                        class=\"fa fa-long-arrow-left fa-1x\" aria-hidden=\"true\"></i> Back\n                </button>\n            </div>\n            <button class=\"btn btn-outline-primary mr-2\" (click)=\"allReports(choosedData[0], 'viewAnalytics')\">\n                <i class=\"fa fa-inbox mr-2\" aria-hidden=\"true\"></i>View Report\n            </button>\n            <button *ngIf=\"auth.getRoleId() != '2'\" class=\"btn btn-outline-primary mr-2\" (click)=\"showType = 'inbox'\">\n                <i class=\"fa fa-inbox mr-2\" aria-hidden=\"true\"></i>Inbox\n                <span class=\"inbox-count color-primary\">{{messageCount}}</span>\n            </button>\n\n            <button (click)=\"showOtherLinks = !showOtherLinks; showType = ''\" *ngIf=\"viewType != '2'\" type=\"button\"\n                    class=\"btn btn-outline-primary mr-2\">\n                <i class=\"fa fa-external-link mr-2\"></i>Other Links\n            </button>\n            <div class=\"btn-group\">\n                <button class=\"btn cancel pull-right dropdown-toggle mr-2\" data-toggle=\"dropdown\" (click)=\"showType = ''\">\n                    <i _ngcontent-serverapp-c20=\"\" aria-hidden=\"true\" class=\"fa fa-plus-circle\"></i>\n                    Curriculum\n                </button>\n                <div class=\"custom-addcontent dropdown-menu\">\n                    <a class=\"dropdown-item-content dropdown-link\" (click)=\"addContentResources('resources')\"><i\n                            style=\"font-size:14px\" class=\"fa\">&#xf02d;</i><span class=\"ml-2\">Resource</span></a>\n                    <a class=\"dropdown-item-content dropdown-link\" (click)=\"addContentResources('assignments')\"><i\n                            style='font-size:14px' class='fas'>&#xf518;</i><span class=\"ml-2\">Assignment</span></a>\n                    <a class=\"dropdown-item-content dropdown-link\" (click)=\"addContentResources('assessments')\"><i\n                            style=\"font-size:14px\" class=\"fa\">&#xf15c;</i><span class=\"ml-2\">Assessment</span></a>\n                </div>\n            </div>\n            <div class=\"btn-group\">\n                <button class=\"btn btn-primary mr-2\" (click)=\"showType = '';createTopic('add', '')\"><i\n                       aria-hidden=\"true\" class=\"fa fa-plus-circle\"></i>\n                    Topic\n                </button>\n            </div>\n            <div [hidden]=\"viewType == '2'\" class=\"btn-group\">\n                <button (click)=\"showType = ''\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">{{dueButton}}</button>\n                <div class=\"dropdown-menu\" style=\"left: -35px;\">\n                    <a class=\"dropdown-item-content dropdown-link\" (click)=\"typeSelection('1')\">Upcoming</a>\n                    <a class=\"dropdown-item-content dropdown-link\" (click)=\"typeSelection('2')\">In Progress</a>\n                    <a class=\"dropdown-item-content dropdown-link\" (click)=\"typeSelection('3')\">Completed</a>\n                    <a class=\"dropdown-item-content dropdown-link\" (click)=\"typeSelection('0')\">All</a>\n                </div>\n            </div>\n            <span class=\"ml-2 expand-icon cursor\" *ngIf=\"topicListData.length != 0\" (click)=\"isCollapsed = !isCollapsed;\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  aria-controls=\"collapseCard\">\n            <i [title]=\"!isCollapsed ? 'Collapse' : 'Expand'\" title=\"Collapse\"\n               class=\"fa {{!isCollapsed ? 'fa-compress' : 'fa-arrows-alt'}}\"\n               style=\"font-size: 24px; cursor: pointer; color: #91048c;\" aria-hidden=\"true\"></i>\n            </span>\n        </div>\n    </div>\n\n    <hr>\n\n    <div class=\"col-12 px-0\" *ngIf=\"showOtherLinks\">\n        <app-other-link (saveLinks)=\"updateClass()\" [calledFrom]=\"'curriculum'\" [showLink]=\"manageClass\"\n                        [arrayValue]=\"linkData\"></app-other-link>\n    </div>\n\n    <div class=\"row\" *ngIf=\"showType == 'inbox'\">\n        <div class=\"col-12\">\n            <app-inbox-chat [to_id]=\"toId\" (updateCount)=\"messageCount = $event\"\n                            [choosedData]=\"choosedData\" [arrayList]=\"messageList\"></app-inbox-chat>\n        </div>\n    </div>\n\n    <div class=\"row d-flex justify-content-center\" style=\"margin-top: 100px;\"\n         *ngIf=\"curriculumList.length == 0 && topicListData.length == 0 && showType != 'inbox'\">\n        <div class=\"col-4\">\n            <button class=\"nodataList\">No Data Available!</button>\n        </div>\n    </div>\n\n    <div class=\"col-12 d-flex justify-content-end pr-0\" *ngIf=\"(curriculumList.length != 0 || topicListData.length != 0) && showType != 'inbox' && dueButton == 'All'\">\n        <span class=\"mt-1\">\n            <span> <i class=\"fa fa-square ml-1\" style=\"font-size: 14px; color: #ffbc58;\"></i>&nbsp;In-Progress</span>\n            <span class=\"ml-2\"><i class=\"fa fa-square ml-1\" style=\"font-size: 14px; color: #81ba00;\"></i>&nbsp;Completed</span>\n            <span class=\"ml-2\"><i class=\"fa fa-square ml-1\" style=\"font-size: 14px; color: #13c9ca;\"></i>&nbsp;Upcoming</span>\n        </span>\n    </div>\n\n    <div class=\"row\" *ngIf=\"showType != 'inbox' && (multiTopicId.length != 0 || multiContentId.length != 0)\">\n        <div class=\"col-12\">\n            <button (click)=\"deleteMultiContentOrTopic()\" class=\"btn btn-outline-primary pull-right\"><i\n                    class=\"fa fa-trash mr-1\" aria-hidden=\"true\"></i>Delete {{multiTopicId.length == 0 && multiContentId.length != 0 ? 'Content' :\n                multiTopicId.length != 0 && multiContentId.length == 0 ? 'Topic' : 'Topic / Content'}}</button>\n        </div>\n    </div>\n\n    <div class=\"custom-accordion mt-4\" *ngIf=\"topicListData.length != 0 && showType != 'inbox'\">\n        <div cdkDropList [cdkDropListData]=\"topicListData\" #topicsList=\"cdkDropList\"\n            (cdkDropListDropped)=\"drop($event)\">\n            <div ngbAccordion *ngFor=\"let item of topicListData; let topicIndex = index\" cdkDrag\n                 [closeOthers]=\"true\">\n                <div class=\"mb-2 topics_accordion_item\" ngbAccordionItem=\"{{topicIndex}}\" #accordion=\"ngbAccordionItem\" [collapsed]=\"isCollapsed\">\n                    <div ngbAccordionHeader>\n                        <button class=\"col-12 header_button\" style=\"cursor: move\">\n                            <input *ngIf=\"manageClass\" [checked]=\"item.checked\" (change)=\"selectOrUnSelectContentList(item, $event, 'topic')\" type=\"checkbox\" class=\"mr-2 cursor\">\n                            <h4 ngbAccordionToggle class=\"px-0 viewTopicName d-flex justify-content-between cursor\">\n                                {{item.topic\n                                | titlecase}}<span\n                                    *ngIf=\"item.start_date != '0000-00-00' && item.start_date != '' && item.start_date != null\"\n                                    class=\" viewTopicName ml-2\" style=\"cursor: move;\" >-</span>\n                                <div class=\"px-0 ml-2\"\n                                     *ngIf=\"item.start_date != '0000-00-00' && item.start_date != '' && item.start_date != null\">\n                                    <span *ngIf=\"item.start_date != '0000-00-00' && item.start_date != ''\"\n                                          class=\"font-weight-bold viewTopicName\">({{item.start_date|\n                                        customDateFormat}}</span>\n                                    <span\n                                            *ngIf=\"item.start_date != '0000-00-00' && item.end_date != '0000-00-00' && item.start_date != '' && item.end_date != '' && item.end_date != null\">&nbsp;-&nbsp;</span>\n                                    <span *ngIf=\"item.end_date != '0000-00-00' && item.end_date != ''\"\n                                          class=\"font-weight-bold viewTopicName\">{{item.end_date|\n                                        customDateFormat}})</span>&nbsp;<br />\n                                </div>\n                            </h4>\n\n                            <div class=\"custom-content\">\n                                <div class=\"dropdown\" *ngIf=\"manageClass\">\n                                    <i style=\"font-size:16px; color: #7F3486; cursor: pointer;\" class=\"fa fa-ellipsis-v\"\n                                       aria-hidden=\"true\" data-toggle=\"dropdown\"></i>\n                                    <ul class=\"cursor dropdown-menu custom-drop\">\n                                        <li (click)=\"createTopic('edit', item)\"><a class=\"editIcon\"><i\n                                                class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit\n                                            Topic</a></li>\n                                        <li (click)=\"deleteAction('topic', item)\"><a class=\"editIcon\"><i\n                                                class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                            Delete Topic</a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </button>\n                    </div>\n\n                    <div ngbAccordionCollapse>\n                        <div ngbAccordionBody style=\"margin: 2px\">\n                            <ng-template>\n                                <div class=\"col-md-12 dropdotted\">\n                                    <div *ngIf=\"item.topicArray.length != 0\">\n                                        <div *ngFor=\"let list of item.topicArray; let j = index\">\n                                            <div class=\"col-12 card class-card class-hover mt-3\">\n                                                <div class=\"row p-2 d-flex flex-wrap\">\n                                                    <div class=\"col-1 school-img {{manageClass ? 'pl-0' : ''}} cursor mt-2\">\n                                                        <input *ngIf=\"manageClass\" [checked]=\"list.checked\" (change)=\"selectOrUnSelectContentList(list, $event, 'content')\"\n                                                               type=\"checkbox\" class=\"mr-2 cursor\">\n                                                        <img *ngIf=\"list.profile_url == ''\"\n                                                             src=\"assets/images/ristaschool/option-writing-checkbox-concepts-survey.png\"\n                                                             style=\"width: 50px;height: 50px;\" class=\"cursor rounded-circle\"\n                                                             alt=\"\">\n                                                        <img *ngIf=\"list.profile_url != ''\"\n                                                             [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + list.profile_url)\"\n                                                             style=\"width: 50px;height: 50px;\" class=\"cursor rounded-circle\"\n                                                             alt=\"\">\n                                                    </div>\n                                                    <div class=\"col-5 p-0\" style=\"align-self: center;\">\n                                                        <h4 class=\"t-period m-0 p-0\"><span\n                                                                class=\"font-weight-bold\">{{list.content_name}}\n                                                            <small *ngIf=\"list.content_format == '1'\"\n                                                                   class=\"contenttext\">(PDF)</small>\n                                                        <small *ngIf=\"list.content_format == '2'\"\n                                                               class=\"contenttext\">(LINK)</small>\n                                                        <small *ngIf=\"list.content_format == '3'\"\n                                                               class=\"contenttext\">(TEXT)</small>\n                                                    </span>\n                                                            <span *ngIf=\"dueButton == 'All'\"\n                                                                  title=\"{{list.content_date_status == '3' ? 'In-Progress' : list.content_date_status == '4' ? 'Completed' : list.content_date_status == '2' ? 'Upcoming' : ''}}\"\n                                                                  [ngStyle]=\"{'color': list.content_date_status == '3' ? '#F28500' : list.content_date_status == '4' ? '#81ba00' : list.content_date_status == '2' ? '#91048c' : '#8f008a' }\"><i\n                                                                    class=\"fa fa-clock ml-1\"\n                                                                    style=\"font-size: 17px;\"></i></span>\n                                                        </h4>\n                                                        <div class=\"col-12 px-0 d-flex justify-content-between\">\n                                                    <span *ngIf=\"list.content_type == '1'\"\n                                                          class=\"badge badge-green font-weight-bold align-self-center\">Resource</span>\n                                                            <span *ngIf=\"list.content_type == '2'\"\n                                                                  class=\"badge badge-warning font-weight-bold align-self-center\">Assignment</span>\n                                                            <span *ngIf=\"list.content_type == '3'\"\n                                                                  class=\"badge badge-primary font-weight-bold align-self-center\">Assessment</span>\n                                                            <div class=\"col-10 px-0\">\n                                                                <p class=\"d-flex mb-0\">\n                                                            <span\n                                                                    *ngIf=\"list.start_date != '0000-00-00' && list.start_date != ''\"\n                                                                    class=\"contenttext font-weight-bold\">{{list.start_date|\n                                                                customDateFormat}}</span>\n                                                                    <span\n                                                                            *ngIf=\"list.start_date != '0000-00-00' && list.end_date != '0000-00-00' && list.start_date != '' && list.end_date != ''\">&nbsp;-&nbsp;</span>\n                                                                    <span\n                                                                            *ngIf=\"list.end_date != '0000-00-00' && list.end_date != ''\"\n                                                                            class=\"contenttext font-weight-bold\">{{list.end_date|\n                                                                        customDateFormat}}</span>&nbsp;<br />\n                                                                    <span *ngIf=\"list.start_time != list.end_time\">\n                                                                <span\n                                                                        class=\"contenttext font-weight-bold\">({{list.start_time}}</span>&nbsp;-&nbsp;<span\n                                                                            class=\"contenttext font-weight-bold\">{{list.end_time}})</span>\n                                                            </span>\n                                                                </p>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-6 d-flex justify-content-end mt-2\">\n                                                        <div class=\"dropdown\">\n                                                            <button class=\"btn btn-outline-primary\">Action <i class=\"fa fa-sort-desc float-right ml-2\" aria-hidden=\"true\"></i></button>\n                                                            <div class=\"dropdown-content cursor\" style=\"right: 2px\"\n                                                                 [class.dropdown-content-up]=\"(topicIndex + 2 == topicListData.length || topicIndex + 1 == topicListData.length) && topicListData.length > 2\">\n\n                                                                <a (click)=\"correctionPage(list, list.content_type == '2' ? 'assignments' : 'assessments')\"\n                                                                   *ngIf=\"viewType == 1 || viewType == 3\"><i class=\"fa fa-users mr-1\" aria-hidden=\"true\"></i>Grading</a>\n\n                                                                <a (click)=\"list.content_format == 3 ? PreviewText(list, 'assignments', 'student_preview') : PreviewPage(list, 'assignments', 'student_preview')\"\n                                                                   *ngIf=\"viewType == 1 || viewType == 3\"><i class=\"fa fa-address-card mr-1\" aria-hidden=\"true\"></i>Student View</a>\n\n                                                                <a (click)=\"openTeacherVersionPdf(list)\" *ngIf=\"list.teacher_version_path && list.teacher_version_path.length != ''\"><i\n                                                                        class=\"fa fa-id-badge mr-1\" aria-hidden=\"true\"></i>Teacher Version PDF</a>\n\n                                                                <a (click)=\"list.content_format == 1 ? PreviewPage(list, 'assignments', 'teacher_preview') :\n                                                                    PreviewText(list, 'assignments', 'teacher_preview')\"><i class=\"fa fa-eye mr-1\" aria-hidden=\"true\"></i>Teacher View</a>\n\n<!--                                                                <a (click)=\"reportDetails('Assignment', list)\" *ngIf=\"viewType == '1' || viewType == 3 && manageClass\"><i-->\n<!--                                                                        class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>Reports</a>-->\n<!--&lt;!&ndash;                                                                <a (click)=\"itemsReportDetails(list)\" *ngIf=\"viewType != '2'\"><i class=\"fa fa-file-archive-o\" aria-hidden=\"true\"></i>&ndash;&gt;-->\n<!--&lt;!&ndash;                                                                    Itemized Reports</a>&ndash;&gt;-->\n\n                                                                <a (click)=\"editAction(topicIndex, list)\" *ngIf=\"manageClass && viewType != '2'\"><i class=\"fa fa-pencil mr-1\" aria-hidden=\"true\"></i>Edit content</a>\n\n                                                                <a (click)=\"deleteAction('content', list)\" *ngIf=\"manageClass\"><i class=\"fa fa-trash mr-1\" aria-hidden=\"true\"></i>Delete content</a>\n\n<!--                                                                <a (click)=\"navigateToSATReport(list)\" *ngIf=\"list.content_format == '3'\"><i class=\"fa fa-inbox\"></i>View Analytics</a>-->\n\n                                                                <a class=\"child-dropdown\" *ngIf=\"topicListData.length > 1\"><i class=\"fa fa-arrow-left mr-1\" aria-hidden=\"true\"></i>Move to Topic\n                                                                    <div class=\"child-dropdown-content\"\n                                                                         [class.child-dropdown-content-up]=\"topicListData.length >= 1\">\n                                                                        <div class=\"scrollClass\">\n                                                                            <a *ngFor=\"let topicData of topicListData\"\n                                                                               [ngStyle]=\"{'display': item.topic_id != topicData.topic_id ? 'block' : 'none' }\"\n                                                                               (click)=\"moveToTopics(list, topicIndex, topicData, 'topicsList')\">{{topicData.topic\n                                                                                | titlecase}}</a>\n                                                                        </div>\n                                                                    </div>\n                                                                </a>\n\n                                                                <a (click)=\"allReports(list)\"><i class=\"fa fa-bar-chart mr-1\" aria-hidden=\"true\"></i>Reports</a>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"item.topicArray.length == 0\">\n                                        <label class=\"col-12 custom-label\">No Content Added</label>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <hr *ngIf=\"topicListData.length != 0 && showType != 'inbox'\">\n\n    <div *ngIf=\"showType != 'inbox'\" class=\"mt-{{topicListData.length != 0 ? '2' : '4'}}\">\n        <div class=\"col-6 align-self-center pl-0\" *ngIf=\"newCurriculumList.length != 0\">\n            <h4 class=\"viewname\">{{topicListData.length > 0 ? 'Other Curriculums' : 'Curriculums'}}</h4>\n        </div>\n        <div *ngFor=\"let list of newCurriculumList; let i = index\">\n            <div class=\"example-container mt-2\">\n                <div [ngClass]=\"{'class-card-new' : list.content_date_status == '2', 'class-card-in-progress' : list.content_date_status == '3', 'class-card-completed' : list.content_date_status == '4'}\"\n                     class=\"col-12 card class-card class-hover\">\n                    <div class=\"row p-2 d-flex flex-wrap\">\n                        <div class=\"col-1 d-inline-flex {{manageClass ? 'pl-0' : ''}} school-img cursor mt-2\">\n                            <input *ngIf=\"manageClass\" [checked]=\"list.checked\" (change)=\"selectOrUnSelectContentList(list, $event, 'content')\" type=\"checkbox\" class=\"mr-2 cursor\">\n                            <img *ngIf=\"list.profile_url == ''\"\n                                 src=\"assets/images/ristaschool/option-writing-checkbox-concepts-survey.png\"\n                                 style=\"width: 50px;height: 50px;\" class=\"cursor rounded-circle\" alt=\"\">\n                            <img *ngIf=\"list.profile_url != ''\"\n                                 [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + list.profile_url)\"\n                                 style=\"width: 50px;height: 50px;\" class=\"cursor rounded-circle\" alt=\"\">\n                        </div>\n                        <div class=\"col-5 p-0\" style=\"align-self: center;\">\n                            <h4 class=\"t-period p-0 m-0\"><span\n                                    class=\"font-weight-bold\">{{list.content_name}}\n                                <small *ngIf=\"list.content_format == '1'\" class=\"contenttext\">(PDF)</small>\n                                    <small *ngIf=\"list.content_format == '2'\" class=\"contenttext\">(LINK)</small>\n                                    <small *ngIf=\"list.content_format == '3'\" class=\"contenttext\">(TEXT)</small>\n                                </span>\n                            </h4>\n                            <div class=\"col-12 px-0 d-flex justify-content-between\">\n                                <span *ngIf=\"list.content_type == '1'\"\n                                      class=\"badge badge-green font-weight-bold align-self-center\">Resource</span>\n                                <span *ngIf=\"list.content_type == '2'\"\n                                      class=\"badge badge-warning font-weight-bold align-self-center\">Assignment</span>\n                                <span *ngIf=\"list.content_type == '3'\"\n                                      class=\"badge badge-primary font-weight-bold align-self-center\">Assessment</span>\n                                <div class=\"col-10 px-0\">\n                                    <p class=\"d-flex mb-0\">\n                                        <span *ngIf=\"list.start_date != '0000-00-00' && list.start_date != ''\"\n                                              class=\"contenttext font-weight-bold\">{{list.start_date|\n                                            customDateFormat}}</span>\n                                        <span\n                                                *ngIf=\"list.start_date != '0000-00-00' && list.end_date != '0000-00-00' && list.start_date != '' && list.end_date != ''\">&nbsp;-&nbsp;</span>\n                                        <span *ngIf=\"list.end_date != '0000-00-00' && list.end_date != ''\"\n                                              class=\"contenttext font-weight-bold\">{{list.end_date|\n                                            customDateFormat}}</span>&nbsp;<br/>\n                                        <span *ngIf=\"list.start_time != list.end_time\">\n                                            <span class=\"contenttext font-weight-bold\">({{list.start_time}}</span>&nbsp;-&nbsp;<span\n                                                class=\"contenttext font-weight-bold\">{{list.end_time}})</span>\n                                        </span>\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-6 d-flex justify-content-end mt-2\">\n                            <div class=\"dropdown\">\n                                <button class=\"btn btn-outline-primary\">Action <i\n                                        class=\"fa fa-sort-desc float-right ml-2\" aria-hidden=\"true\"></i>\n                                </button>\n                                <div class=\"dropdown-content cursor\" style=\"right: 2px\"\n                                     [class.dropdown-content-up]=\"(i + 2 == newCurriculumList.length || i + 1 == newCurriculumList.length) && newCurriculumList.length > 2 || topicListData.length >= 1\">\n                                    <a (click)=\"correctionPage(list, list.content_type == '2' ? 'assignments' : 'assessments')\"\n                                       *ngIf=\"viewType == 1 || viewType == 3\"><i class=\"fa fa-users mr-1\" aria-hidden=\"true\"></i>Grading</a>\n\n                                    <a (click)=\"list.content_format == 3 ? PreviewText(list, 'assignments', 'student_preview') : PreviewPage(list, 'assignments', 'student_preview')\"\n                                       *ngIf=\"viewType == 1 || viewType == 3\"><i class=\"fa fa-address-card mr-1\" aria-hidden=\"true\"></i>Student View</a>\n\n                                    <a (click)=\"openTeacherVersionPdf(list)\" *ngIf=\"list.teacher_version_path && list.teacher_version_path.length != ''\">\n                                        <i class=\"fa fa-id-badge mr-1\" aria-hidden=\"true\"></i>Teacher Version PDF</a>\n\n                                    <a (click)=\"list.content_format == 1 ? PreviewPage(list, 'assignments', 'teacher_preview') :\n                                        PreviewText(list, 'assignments', 'teacher_preview')\"><i class=\"fa fa-eye mr-1\" aria-hidden=\"true\"></i>Teacher View</a>\n\n<!--                                    <a (click)=\"reportDetails('Assignment', list)\"-->\n<!--                                       *ngIf=\"viewType == '1' || viewType == 3 && manageClass\"><i-->\n<!--                                            class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>-->\n<!--                                        Reports</a>-->\n<!--                                    <a (click)=\"itemsReportDetails(list)\" *ngIf=\"viewType != '2'\"><i-->\n<!--                                            class=\"fa fa-file-archive-o\" aria-hidden=\"true\"></i> Itemized-->\n<!--                                        Reports</a>-->\n                                    <a (click)=\"editAction(i, list)\"\n                                       *ngIf=\"manageClass && viewType != '2'\"><i class=\"fa fa-pencil mr-1\" aria-hidden=\"true\"></i>Edit content</a>\n\n                                    <a (click)=\"deleteAction('content', list)\" *ngIf=\"manageClass\">\n                                        <i class=\"fa fa-trash mr-1\" aria-hidden=\"true\"></i>Delete content</a>\n\n<!--                                    <a (click)=\"navigateToSATReport(list)\" *ngIf=\"list.content_format == '3'\"><i class=\"fa fa-inbox\"></i> View Analytics</a>-->\n\n                                    <a class=\"child-dropdown\" *ngIf=\"topicListData.length > 0\"><i class=\"fa fa-arrow-left mr-1\" aria-hidden=\"true\"></i>Move to Topic\n                                        <div class=\"child-dropdown-content\"\n                                             [class.child-dropdown-content-up]=\"topicListData.length >= 1\">\n                                            <div class=\"scrollClass\">\n                                                <a *ngFor=\"let item of topicListData\"\n                                                   (click)=\"moveToTopics(list, i, item, 'curricullumList')\">{{item.topic\n                                                    |\n                                                    titlecase}}</a>\n                                            </div>\n                                        </div>\n                                    </a>\n\n                                    <a (click)=\"allReports(list)\"><i class=\"fa fa-bar-chart mr-1\" aria-hidden=\"true\"></i>Reports</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <ng-template #createTopicPopup>\n        <div class=\"modal-header align-items-center\">\n            <h4 class=\"modal-title\">{{topicPopupType == 'add' ? 'Create' : 'Update'}} Topic</h4>\n            <i class=\"fa fa-close cursor\" (click)=\"modalRef.close()\"></i>\n        </div>\n        <div class=\"modal-body\">\n            <div>\n                <div class=\"row form-group\">\n                    <div class=\"col-md-12\">\n                        <label>Class Name</label>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <input class=\"form-control\" readonly type=\"text\" placeholder=\"Enter the Class Name\"\n                               value=\"{{className}}\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <div class=\"col-md-12\">\n                    <label>Topic Name</label>\n                </div>\n                <div class=\"col-md-12\">\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Enter Topic Name\"\n                           [(ngModel)]=\"topicName\">\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <div class=\"col-md-6\">\n                    <div class=\"row-md-12\">\n                        <label>Start Date</label>\n                    </div>\n                    <div class=\"row-md-12\">\n                        <div class=\"d-flex align-items-baseline\">\n                            <input class=\"form-control\" placeholder=\"Start Date\"\n                                   [(ngModel)]=\"topicStartdate\" name=\"dp\"\n                                   angular-mydatepicker #dp=\"angular-mydatepicker\" autocomplete=\"off\"\n                                   [options]=\"myDpOptions1\" (dateChanged)=\"onDateChanged($event)\"\n                                   (click)=\"dp.toggleCalendar()\">\n                            <div class=\"input-group-append\">\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp.toggleCalendar()\">\n                                    <i class=\"fa fa-calendar-o\"></i></button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <div class=\"row-md-12\">\n                        <label>End Date</label>\n                    </div>\n                    <div class=\"row-md-12\">\n                        <div class=\"d-flex align-items-baseline\">\n                            <input class=\"form-control\" placeholder=\"End Date\" [(ngModel)]=\"topicEnddate\"\n                                   name=\"dp1\"\n                                   angular-mydatepicker #dp1=\"angular-mydatepicker\" autocomplete=\"off\"\n                                   [options]=\"myDpOptions2\" (click)=\"dp1.toggleCalendar()\">\n                            <div class=\"input-group-append\">\n                                <button (click)=\"dp1.toggleCalendar()\" class=\"btn btn-primary\"\n                                        type=\"button\">\n                                    <i class=\"fa fa-calendar-o\"></i></button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-outline-primary\" (click)=\"modalRef.close()\">Cancel</button>\n            <button type=\"button\" (click)=\"addTopicService()\"\n                    class=\"btn btn-primary\">{{topicPopupType == 'add' ?\n                'Create' : 'Update'}} Topic\n            </button>\n        </div>\n    </ng-template>\n\n    <!-- Reports -->\n    <ng-template #reports>\n        <div class=\"modal-header align-items-center\">\n            <h4 class=\"modal-title\">Report</h4>\n            <i class=\"fa fa-close cursor\" (click)=\"onSave()\"></i>\n        </div>\n        <div class=\"modal-body\">\n            <app-missed-work-report [classShow]=\"true\" [showContent]=\"selectContent\" [studentView]=\"false\"\n                                    [timeView]=\"false\" [contentNameValue]=\"contentNameValue\">\n            </app-missed-work-report>\n        </div>\n    </ng-template>\n\n    <ng-template #itemsReports>\n        <div class=\"modal-header align-items-center\">\n            <h4 class=\"modal-title\">{{reportData.content_name | titlecase}} - Report</h4>\n            <i class=\"fa fa-close cursor\" (click)=\"onSave()\"></i>\n        </div>\n        <div class=\"modal-body\">\n            <app-items-report [showContent]=\"'other'\" [studentView]=\"false\" [timeView]=\"true\">\n            </app-items-report>\n        </div>\n\n    </ng-template>\n\n    <ng-template #teacherVersion>\n        <div class=\"modal-header align-items-center\">\n            <h4 class=\"modal-title\">Teacher Version</h4>\n            <i (click)=\"onSave()\" class=\"fa fa-close cursor\"></i>\n        </div>\n        <div class=\"modal-body\">\n            <pdf-viewer [src]=\"pdfTeacherVersion\" style=\"display: block;height: 100vh;\"></pdf-viewer>\n        </div>\n    </ng-template>\n\n    <ng-template #assign let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4 class=\"contenttext mb-0\">{{contentname}}</h4>\n        </div>\n        <div class=\"modal-body\">\n            <form [formGroup]=\"contentForm\">\n\n                <div class=\"row form-group\">\n                    <div class=\"col-md-12\">\n                        <label class=\"font-weight-bold\">{{viewType == '2' ? 'Content Folder Name' : 'Class Name'}}</label>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <input class=\"form-control\" readonly type=\"text\"\n                               placeholder=\"Enter the Class Name\"\n                               value=\"{{className}}\">\n                    </div>\n                </div>\n\n                <div class=\"row form-group mb-3\" *ngIf=\"allowScore\">\n                    <div class=\"col-md-12\">\n                        <label class=\"font-weight-bold\">Release Score</label>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <select (change)=\"releaseScoreFilter($event)\" class=\"form-control mb-1\" formControlName=\"releaseScore\">\n                            <option value=\"n/a\" disabled>Select Response type</option>\n                            <option *ngIf=\"isEssay == '0'\" value=\"0\">Instructor Graded</option>\n                            <option *ngIf=\"isEssay == '0'\" value=\"1\">Auto Graded</option>\n                            <option value=\"2\" *ngIf=\"contentFormat == '3' && isEssay == '0'\">Real-Time Grading</option>\n                            <option *ngIf=\"isEssay == '1'\" value=\"0\">Teacher Review Only</option>\n                            <option *ngIf=\"isEssay == '1'\" value=\"1\">Automatic Feedback</option>\n                        </select>\n                        <span class=\"notes_style\">(Note:\n                                <span *ngIf=\"contentForm.controls.releaseScore.value == '0' && isEssay == '0'\">Responses will be reviewed and graded manually. Scores will be released after the final submission</span>\n                                <span *ngIf=\"contentForm.controls.releaseScore.value == '1' && isEssay == '0'\">Responses will be graded automatically, but scores and feedback will only be released after the final submission</span>\n                                <span *ngIf=\"contentForm.controls.releaseScore.value == '2' && isEssay == '0'\">Responses will be graded automatically and scores will be available immediately after each submission</span>\n                                <span *ngIf=\"contentForm.controls.releaseScore.value == '0' && isEssay == '1'\">Essay will be manually reviewed by the teacher to provide feedback and scores. System generated feedback is not available</span>\n                                <span *ngIf=\"contentForm.controls.releaseScore.value == '1' && isEssay == '1'\">Student can request for Automatic system generated feedback and score. Teacher can provide final feedback and score after the final submission</span>)</span>\n                    </div>\n                </div>\n                <div *ngIf=\"!checkAutoRelease\" class=\"col-12 px-0\">\n                    <p class=\"assign-error text-center\">Auto score release is not applicable for this\n                        content</p>\n                </div>\n\n                <div *ngIf=\"viewType != '2' && editData.content_format == '3'\" class=\"row form-group\">\n                    <div class=\"col-md-2\">\n                        <div class=\"col-12\" style=\"position: relative; font-size: 15px; left: 0.4rem\">\n                            <input type=\"checkbox\" class=\"form-check-input cursor\" id=\"workspace\" formControlName=\"workspace\">\n                            <label style=\"font-size: 14px\" class=\"cursor mb-0 font-weight-bold\" for=\"workspace\">Workspace</label>\n                        </div>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <div class=\"col-12\" style=\"position: relative; font-size: 15px; left: 0.4rem\">\n                            <input type=\"checkbox\" class=\"form-check-input cursor\" id=\"feedback\" formControlName=\"feedback\">\n                            <label style=\"font-size: 14px\" class=\"cursor mb-0 font-weight-bold\" for=\"feedback\">FeedBack</label>\n                        </div>\n                    </div>\n                </div>\n\n                <div *ngIf=\"viewType != '2'\" class=\"row form-group\">\n                    <div class=\"col-md-2\">\n                        <div class=\"row-md-12\">\n                            <label class=\"font-weight-bold\">Start Date</label>\n                        </div>\n                        <div class=\"row-md-12\">\n                            <input class=\"form-control\" placeholder=\"Start Date\" formControlName=\"startdate\"\n                                   name=\"dp\"\n                                   angular-mydatepicker #dp=\"angular-mydatepicker\" autocomplete=\"off\"\n                                   [options]=\"myDpOptions1\" (dateChanged)=\"onDateChanged($event)\"\n                                   (click)=\"dp.toggleCalendar()\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"row-md-12\">\n                            <label class=\"font-weight-bold\">Start Time</label>\n                        </div>\n                        <div class=\"row-md-12\">\n                            <ngb-timepicker [(ngModel)]=\"fromTime\" [ngModelOptions]=\"{standalone: true}\"\n                                            (ngModelChange)=\"checkTime()\" [meridian]=\"meridian\"\n                                            [spinners]=\"spinner\"></ngb-timepicker>\n                        </div>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <div class=\"row-md-12\">\n                            <label class=\"font-weight-bold\">End Date</label>\n                        </div>\n                        <div class=\"row-md-12\">\n                            <input class=\"form-control\" placeholder=\"End Date\" formControlName=\"enddate\"\n                                   name=\"dp1\"\n                                   angular-mydatepicker #dp1=\"angular-mydatepicker\" autocomplete=\"off\"\n                                   [options]=\"myDpOptions2\" (click)=\"dp1.toggleCalendar()\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"row-md-12\">\n                            <label class=\"font-weight-bold\">End Time</label>\n                        </div>\n                        <div class=\"row-md-12\">\n                            <ngb-timepicker [(ngModel)]=\"toTime\" [ngModelOptions]=\"{standalone: true}\"\n                                            (ngModelChange)=\"checkTime()\" [meridian]=\"meridian\"\n                                            [spinners]=\"spinner\"></ngb-timepicker>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-outline-primary\" (click)=\"contentClose()\">Cancel</button>\n            <button class=\"btn btn-primary\" (click)=\"editContentDetails()\">Submit</button>\n        </div>\n    </ng-template>\n\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header align-items-center\">\n            <h4 *ngIf=\"calledFrom != 'multi'\" class=\"modal-title font-weight-bold\" id=\"modal-basic-title\">\n                Delete {{deleteType == 'topic' ? 'Topic' : 'Content'}}</h4>\n            <h4 *ngIf=\"calledFrom == 'multi'\" class=\"modal-title font-weight-bold\" id=\"modal-basic1-title\">\n                Delete Confirmation</h4>\n            <i class=\"fa fa-close cursor\" (click)=\"modalRef.close()\"></i>\n        </div>\n        <div class=\"modal-body\">\n            <!-- Container-fluid starts-->\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 px-0\">\n                        <h5 *ngIf=\"calledFrom != 'multi'\" class=\"text-center\">Are you sure you want to delete this\n                             <span class=\"font-weight-bold\">{{deleteType == 'topic' ? 'topic' : 'content'}}</span> ? </h5>\n                        <div *ngIf=\"calledFrom == 'multi'\">\n                            <h5 *ngIf=\"multiTopicId.length != 0 && multiContentId.length != 0 || (multiTopicId.length != 0 && multiContentId.length == 0)\">\n                                Do you wish to delete the <span class=\"font-weight-bold\">topic and the associated content</span>?</h5>\n                            <h5 *ngIf=\"multiTopicId.length == 0 && multiContentId.length != 0\">\n                                Do you wish to delete the <span class=\"font-weight-bold\">selected content</span>?</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <!-- Container-fluid Ends-->\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn cancel\" (click)=\"modalRef.close()\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"calledFrom != 'multi' ? update(deleteType) : forkJoinService()\">Delete\n            </button>\n        </div>\n    </ng-template>\n\n<ng-template #curriculum let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header align-items-center\">\n            <h4 class=\"modal-title font-weight-bold\">Curriculum</h4>\n            <i class=\"fa fa-close cursor\" (click)=\"showContentCurriculumType= '';modalRef.close()\"></i>\n        </div>\n        <div class=\"modal-body py-3 px-1\" style=\"background: #f5f5f578\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"card mb-0\">\n                            <div class=\"card-body\">\n                                <div class=\"row justify-content-center\">\n                                    <div class=\"w-10 text-center\">\n                                        <i (click)=\"showContentCurriculumType = 'upload'\" class=\"fa icon_circle fa-upload color-primary cursor\"></i>\n                                        <p>Upload</p>\n                                    </div>\n                                    <div class=\"w-10 text-center\">\n                                        <i (click)=\"showContentCurriculumType = 'link'\" class=\"fa icon_circle fa-link color-primary cursor\"></i>\n                                        <p>Link</p>\n                                    </div>\n                                    <div class=\"w-10 text-center row\">\n                                        <div class=\"col-12\">\n                                            <i (click)=\"showContentCurriculumType = 'assign'\" class=\"fa icon_circle fa-file-o color-primary cursor\">\n                                            </i>\n                                            <span class=\"tickMark\">&#10004;</span>\n                                        </div>\n                                        <p>Assign From Library</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-12 mt-3\" *ngIf=\"showContentCurriculumType != ''\">\n                        <div class=\"card mb-0\">\n                            <div class=\"card-body\">\n                                <div class=\"row\">\n                                    <div class=\"col-7\">\n                                        <div class=\"col-12\">\n                                            <label class=\"font-weight-bold\">Content Type<span class=\"error ml-1\">*</span></label>\n                                            <ng-select [items]=\"contentTypleList\"\n                                                       bindLabel=\"value\"\n                                                       bindValue=\"id\"\n                                                       placeholder=\"Select Content\"\n                                                       typeToSearchText=\"\"\n                                                       [(ngModel)]=\"selectContentType\"\n                                            >\n                                            </ng-select>\n                                        </div>\n                                        <div class=\"col-12 mt-3\" *ngIf=\"showContentCurriculumType == 'upload'\">\n                                            <div class=\"col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 py-2 px-0\">\n                                                <h6 class=\"text-caption\">Select file to upload</h6>\n                                                <input (change)=\"encodePdfFileAsURL($event)\" type=\"file\" id=\"uploadFileInput\" multiple\n                                                       name=\"uploadFileInput\" accept=\".pdf, application/pdf\" hidden>\n                                                <div (click)=\"openFileExplorer()\" class=\"upload-file mt-0\" for=\"uploadFileInput\">\n                                                    <i class=\"fa fa-upload mr-1\"></i>\n                                                    Add Attachment(s)\n                                                </div>\n                                                <p style=\"color: gray\" class=\"f-12\">Supported file formats is pdf</p>\n                                            </div>\n\n                                            <div class=\"col-12 mt-3 px-0\">\n                                                <div class=\"row\">\n                                                    <div *ngFor=\"let pdf of pdfpath; let ind = index\" class=\"fileItem-input col-4 mb-4\" title=\"{{pdf.image}}\">\n                                                        <div class=\"fileItem\" style=\"width: 100%; display: block;\">\n                                                            <div class=\"col-md-12 px-0 d-flex justify-content-between\">\n                                                                <div class=\"col-md-6 px-0\">\n                                                                    <small *ngIf=\"selectContentType == '1'\" class=\"badge mb-2\" style=\"background-color: #3693b7; color: whitesmoke\">Resource</small>\n                                                                    <small *ngIf=\"selectContentType == '2'\" class=\"badge mb-2\" style=\"background-color: #ca9be2; color: whitesmoke\">Assignment</small>\n                                                                    <small *ngIf=\"selectContentType == '3'\" class=\"badge mb-2\" style=\"background-color: cadetblue; color: whitesmoke\">Assessment</small>\n                                                                </div>\n                                                                <div class=\"col-md-6 px-0 d-flex justify-content-end\">\n                                                                    <i class=\"fa fa-link\"></i>\n<!--                                                                    <i class=\"fa fa-link f-22px\" (click)=\"openLinkPage(f.resource_type, ind)\"></i>-->\n                                                                    <i (click)=\"openConfirmDialog(ind, 'pdf')\" class=\"fa fa-trash-o ml-2 error\"></i>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"col-sm-12 px-0\">\n                                                                <h5 class=\"d-inline\">{{pdf.image + '.pdf'}}</h5>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"w-100 mt-2\">\n                                                            <input type=\"text\" class=\"form-control mx-1\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"pdf.image\" />\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-5\">\n                                        <p style=\"color: #777777;;font-size: 12px !important;\" class=\"mb-2\">Class Name:\n                                            <span style=\"font-size: 14px\" class=\"color-primary font-weight-bold\">{{className}}</span>\n                                        </p>\n                                        <p style=\"color: #777777;font-size: 12px !important;\" class=\"my-2\">Class Code:\n                                            <span style=\"font-size: 14px\" class=\"color-primary font-weight-bold\">{{choosedData[0]?.class_code}}</span>\n                                        </p>\n                                        <div class=\"row form-group mt-2 mb-3\">\n                                            <div class=\"col-md-12\">\n                                                <p class=\"mb-0\" style=\"color: #777777;font-size: 12px !important\">Selected Students:</p>\n                                                <div class=\"col-md-12 d-flex align-items-center\">\n                                                    <input [checked]=\"!showStudentList\" name=\"studentSelection\" id=\"allStudents\" class=\"mr-2 cursor\" type=\"radio\" value=\"1\" (change)=\"showStudentList = false\">\n                                                    <label for=\"allStudents\" class=\"mr-4 mb-0 cursor\">All Students in selected class</label>\n                                                    <input [checked]=\"showStudentList\" name=\"studentSelection\" id=\"specificStudents\" class=\"mr-2 cursor\" type=\"radio\" value=\"0\" (change)=\"showStudentList = true\">\n                                                    <label class=\"mr-2 mb-0 cursor\" for=\"specificStudents\">Specific Students</label>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-8 mt-2\" *ngIf=\"showStudentList\">\n                                                <ng-select [items]=\"choosedData[0]?.students\"\n                                                           bindValue=\"id\"\n                                                           bindLabel=\"name\"\n                                                           placeholder=\"Select Student\"\n                                                           typeToSearchText=\"\"\n                                                           multiple=\"true\">\n                                                </ng-select>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row my-2\">\n                                            <p style=\"color: #777777;font-size: 12px !important;\" class=\"mb-0 col-12\">Start Date & Time</p>\n                                            <div class=\"col-6 pr-0\">\n                                                <div class=\"d-flex align-items-baseline\">\n                                                    <input style=\"border-top-right-radius: 0; border-bottom-right-radius: 0\" class=\"form-control\" placeholder=\"Start Date\"\n                                                           [(ngModel)]=\"curriculumStartDate\" name=\"dp\"\n                                                           angular-mydatepicker #dp=\"angular-mydatepicker\" autocomplete=\"off\"\n                                                           [options]=\"myDpOptions1\" (dateChanged)=\"onDateChanged($event)\"\n                                                           (click)=\"dp.toggleCalendar()\">\n                                                    <div class=\"input-group-append\">\n                                                        <button style=\"border-top-left-radius: 0;border-bottom-left-radius: 0;\n                                                         padding: 6.5px 8px !important;\" type=\"button\" class=\"btn btn-primary\" (click)=\"dp.toggleCalendar()\">\n                                                            <i class=\"fa fa-calendar-o\"></i></button>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-6\">\n                                                <ngb-timepicker [(ngModel)]=\"curriculumStartTime\" [ngModelOptions]=\"{standalone: true}\"\n                                                                [meridian]=\"meridian\"\n                                                                [spinners]=\"spinner\"></ngb-timepicker>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row my-2\">\n                                            <p style=\"color: #777777;font-size: 12px !important;\" class=\"mb-0 col-12\">End Date & Time</p>\n                                            <div class=\"col-6 pr-0\">\n                                                <div class=\"d-flex align-items-baseline\">\n                                                    <input class=\"form-control\" placeholder=\"End Date\" [(ngModel)]=\"curriculumEndDate\"\n                                                           name=\"dp1\"\n                                                           angular-mydatepicker #dp1=\"angular-mydatepicker\" autocomplete=\"off\"\n                                                           [options]=\"myDpOptions2\" (click)=\"dp1.toggleCalendar()\">\n                                                    <div class=\"input-group-append\">\n                                                        <button style=\"border-top-left-radius: 0;border-bottom-left-radius: 0;\n                                                         padding: 6.5px 8px !important;\" (click)=\"dp1.toggleCalendar()\" class=\"btn btn-primary\"\n                                                                type=\"button\">\n                                                            <i class=\"fa fa-calendar-o\"></i></button>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-6\">\n                                                <ngb-timepicker [(ngModel)]=\"curriculumEndTime\" [ngModelOptions]=\"{standalone: true}\"\n                                                                [meridian]=\"meridian\"\n                                                                [spinners]=\"spinner\"></ngb-timepicker>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-12 mt-3\" *ngIf=\"showContentCurriculumType == 'link'\">\n                                        <app-other-link  id=\"otherLink\" [titleName]=\"'Add Link As Content'\"\n                                                         [showLink]=\"manageClass\" [arrayValue]=\"[]\"></app-other-link>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn cancel\" (click)=\"showContentCurriculumType= '';modalRef.close()\">Cancel</button>\n            <button *ngIf=\"showContentCurriculumType != ''\" type=\"button\" class=\"btn btn-primary\" (click)=\"showContentCurriculumType= ''; modalRef.close()\">Assign Content</button>\n        </div>\n</ng-template>\n\n    <ng-template #deleteDialog let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-body\">\n            <!-- Container-fluid starts-->\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 my-3\">\n                        <h5 class=\"mb-0\">Are sure to delete this {{isDeleteLink ? 'Link' : 'PDF'}}?</h5>\n                    </div>\n                </div>\n            </div>\n            <!-- Container-fluid Ends-->\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"modalRef.close('deleteDialog')\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"isDeleteLink ? deleteLink() : deletePDf(this.selectedDeletePdf.index)\">Confirm</button>\n        </div>\n    </ng-template>\n", styles: [".viewTitle {\n  width: 100%;\n  font-weight: bolder;\n  font-size: 20px;\n  background: #f8f8f9;\n}\n\n.dropdotted {\n  position: relative;\n  margin-right: auto;\n  margin-left: auto;\n  display: inline-block;\n  border-radius: 15px;\n  min-height: 110px;\n  background-color: #fff;\n  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;\n}\n\n.custom-label {\n  position: absolute;\n  font-size: 18px;\n  font-weight: 600;\n  color: #cacaca;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 40px;\n}\n\nexample-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-listCustom {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n::ng-deep .custom-accordion .accordion > .card > .card-header {\n  border-bottom: 1px solid #e5e5e5;\n  background: #f8f8f8;\n  height: 55px;\n  cursor: move;\n\n  button {\n    padding: 0.5rem 1.5rem;\n    border-radius: 5px;\n    letter-spacing: 1px;\n    line-height: 20px;\n    font-size: 14px;\n    font-weight: 700;\n    transition: 0.3s ease-in-out;\n    text-decoration: none;\n    text-transform: capitalize;\n  }\n}\n\n::ng-deep .custom-accordion .accordion > .card {\n  overflow: visible;\n  border: 1px solid #e5e5e5;\n  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;\n}\n\n::ng-deep .custom-content .dropdown {\n  position: absolute;\n  display: inline-block;\n  cursor: pointer;\n  right: 2%;\n  top: 35%;\n}\n\n.icon_circle {\n  font-size: 20px;\n  padding: 12px;\n  border: 1px solid #f5f5f5 !important;\n  border-radius: 50%;\n}\n\n.tickMark {\n  font-size: 8px;\n  font-weight: 400;\n  position: absolute;\n  top: 17px !important;\n  right: 52px;\n}\n\n.error {\n  color: red;\n}\n\n.upload-file {\n  align-items: center;\n  border: 1px solid #8f008aad;\n  border-radius: .25rem;\n  display: inline-flex;\n  font-size: .875rem;\n  margin-bottom: 0.5rem;\n  padding: .5rem 1rem;\n  transition: transform .3s ease, box-shadow .3s ease;\n  cursor: pointer;\n  color: #8F008A;\n}\n\n.upload-file:hover {\n  box-shadow: 0 0.5rem 1rem rgba(8, 8, 8, .15);\n}\n\nh3, h4, p {\n  font-family: Roboto, Arial, sans-serif;\n}\n\n.text-wrapper {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.centered {\n  font-family: sans-serif;\n  font-size: 1.3em;\n  text-align: center;\n}\n\n.dropzone {\n  height: 200px;\n  display: table;\n  width: 100%;\n  background-color: #eee;\n  border: dotted 1px #aaa;\n}\n\ninput[type=\"file\"] {\n  display: none;\n}\n\n.textLink {\n  background-color: #8F008A;\n  color: #fff;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.text-wrapper {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.centered {\n  font-family: sans-serif;\n  font-size: 1.3em;\n  text-align: center;\n}\n\n.fileItem-input {\n  width: calc(25% - 16px);\n}\n\n\n.fileItem {\n  width: calc(25% - 6px);\n  overflow: hidden;\n  min-height: 6rem;\n  height: fit-content;\n  margin: 3px;\n  padding: 10px;\n  display: flex;\n  align-content: center;\n  position: relative;\n  float: left;\n  border: 2px dashed #778899;\n  border-radius: 5px;\n  transition: .3s ease;\n  cursor: pointer;\n}\n\n.fileItem .fa-trash-o:hover {\n  transform: scale(1.1);\n  color: red;\n}\n\n.fileItem:hover .fileItemIcon::before {\n  content: \"\\f00d\";\n  color: whitesmoke;\n}\n\n.fileItemIconDiv {\n  text-align: center;\n}\n\n.fileItemIcon::before {\n  font-style: normal;\n  font-weight: 900;\n}\n\n.fileItemText {\n  text-align: center;\n  margin-top: 10px;\n  font-size: 8px;\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.AssessmentService }, { type: i3.Router }, { type: i4.FormBuilder }, { type: i3.ActivatedRoute }, { type: i5.NewsubjectService }, { type: i6.DomSanitizer }, { type: i7.ConfigurationService }, { type: i8.NgbModal }, { type: i9.ClassService }, { type: i10.DatePipe }, { type: i11.ToastrService }, { type: i12.CommonService }, { type: i13.CommonDataService }, { type: i14.CreatorService }, { type: i15.NavService }], { itemsReports: [{
            type: ViewChild,
            args: ['itemsReports']
        }], reports: [{
            type: ViewChild,
            args: ['reports']
        }], addAssign: [{
            type: ViewChild,
            args: ['assign']
        }], deleteContent: [{
            type: ViewChild,
            args: ['content']
        }], createTopicPopup: [{
            type: ViewChild,
            args: ['createTopicPopup']
        }], teacherVersion: [{
            type: ViewChild,
            args: ['teacherVersion']
        }], curriculumPopUp: [{
            type: ViewChild,
            args: ['curriculum']
        }], uploadFileInput: [{
            type: ViewChild,
            args: ['uploadFileInput', { static: false }]
        }], deleteDialog: [{
            type: ViewChild,
            args: ['deleteDialog', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TopicsCurriculumComponent, { className: "TopicsCurriculumComponent" }); })();
//# sourceMappingURL=topics-curriculum.component.js.map