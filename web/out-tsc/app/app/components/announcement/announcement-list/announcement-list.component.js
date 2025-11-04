import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "ngx-toastr";
import * as i3 from "@angular/common";
import * as i4 from "@ng-bootstrap/ng-bootstrap";
import * as i5 from "../../../shared/service/common-data.service";
import * as i6 from "@angular/router";
import * as i7 from "@angular/forms";
import * as i8 from "@ng-select/ng-select";
import * as i9 from "../../auth/tiny-mice/tiny-mice.component";
const _c0 = ["deleteAnnouncement"];
const _c1 = a0 => ({ type: a0, data: "" });
const _c2 = a0 => ({ $implicit: a0 });
const _c3 = a0 => ({ type: "Add", data: a0 });
const _c4 = (a0, a1) => ({ type: "Edit", data: a0, index: a1 });
function AnnouncementListComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function AnnouncementListComponent_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.announcementType()); });
    i0.ɵɵelement(1, "i", 16);
    i0.ɵɵtext(2, " Add Annonncement");
    i0.ɵɵelementEnd();
} }
function AnnouncementListComponent_div_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function AnnouncementListComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtemplate(1, AnnouncementListComponent_div_14_ng_container_1_Template, 1, 0, "ng-container", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const editorAnnouncement_r4 = i0.ɵɵreference(18);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", editorAnnouncement_r4)("ngTemplateOutletContext", i0.ɵɵpureFunction1(4, _c2, i0.ɵɵpureFunction1(2, _c1, ctx_r2.announcementPage)));
} }
function AnnouncementListComponent_div_15_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function AnnouncementListComponent_div_15_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtemplate(1, AnnouncementListComponent_div_15_div_10_ng_container_1_Template, 1, 0, "ng-container", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const classSeparation_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵnextContext();
    const editorAnnouncement_r4 = i0.ɵɵreference(18);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", editorAnnouncement_r4)("ngTemplateOutletContext", i0.ɵɵpureFunction1(4, _c2, i0.ɵɵpureFunction1(2, _c3, classSeparation_r6)));
} }
function AnnouncementListComponent_div_15_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26)(1, "div", 27)(2, "p", 28);
    i0.ɵɵtext(3, "No Announcement Found!");
    i0.ɵɵelementEnd()()();
} }
function AnnouncementListComponent_div_15_div_12_div_1_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function AnnouncementListComponent_div_15_div_12_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtemplate(1, AnnouncementListComponent_div_15_div_12_div_1_div_2_ng_container_1_Template, 1, 0, "ng-container", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    const announcement_r8 = ctx_r6.$implicit;
    const announcementIndex_r9 = ctx_r6.index;
    i0.ɵɵnextContext(3);
    const editorAnnouncement_r4 = i0.ɵɵreference(18);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", editorAnnouncement_r4)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c2, i0.ɵɵpureFunction2(2, _c4, announcement_r8, announcementIndex_r9)));
} }
function AnnouncementListComponent_div_15_div_12_div_1_div_4_small_4_Template(rf, ctx) { if (rf & 1) {
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
    const announcement_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", announcement_r8.created_by, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 2, announcement_r8.add_date, "medium"));
} }
function AnnouncementListComponent_div_15_div_12_div_1_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 44)(1, "i", 45);
    i0.ɵɵlistener("click", function AnnouncementListComponent_div_15_div_12_div_1_div_4_div_5_Template_i_click_1_listener() { i0.ɵɵrestoreView(_r10); const announcement_r8 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.announcementEdit(announcement_r8, "Edit")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "i", 46);
    i0.ɵɵlistener("click", function AnnouncementListComponent_div_15_div_12_div_1_div_4_div_5_Template_i_click_2_listener() { i0.ɵɵrestoreView(_r10); const announcement_r8 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.confirmItBeforeDeleteing(announcement_r8)); });
    i0.ɵɵelementEnd()();
} }
function AnnouncementListComponent_div_15_div_12_div_1_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 47)(1, "input", 48);
    i0.ɵɵtwoWayListener("ngModelChange", function AnnouncementListComponent_div_15_div_12_div_1_div_4_div_7_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r11); const announcement_r8 = i0.ɵɵnextContext(2).$implicit; i0.ɵɵtwoWayBindingSet(announcement_r8.comment, $event) || (announcement_r8.comment = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup.enter", function AnnouncementListComponent_div_15_div_12_div_1_div_4_div_7_Template_input_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r11); const announcement_r8 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.announcementCommentDetails(announcement_r8)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 49)(3, "button", 50);
    i0.ɵɵlistener("click", function AnnouncementListComponent_div_15_div_12_div_1_div_4_div_7_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r11); const announcement_r8 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.announcementCommentDetails(announcement_r8)); });
    i0.ɵɵelementStart(4, "span", 51)(5, "span", 52);
    i0.ɵɵelement(6, "img", 53);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const announcement_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", announcement_r8.comment);
} }
function AnnouncementListComponent_div_15_div_12_div_1_div_4_small_9_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "s");
    i0.ɵɵelementEnd();
} }
function AnnouncementListComponent_div_15_div_12_div_1_div_4_small_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "small", 54);
    i0.ɵɵlistener("click", function AnnouncementListComponent_div_15_div_12_div_1_div_4_small_9_Template_small_click_0_listener() { i0.ɵɵrestoreView(_r12); const announcement_r8 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(announcement_r8.id == ctx_r2.announcementSend ? ctx_r2.announcementSend = "" : ctx_r2.announcementView(announcement_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, AnnouncementListComponent_div_15_div_12_div_1_div_4_small_9_span_2_Template, 2, 0, "span", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const announcement_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", announcement_r8.comment_count, " Comment");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", announcement_r8.comment_count > 1);
} }
function AnnouncementListComponent_div_15_div_12_div_1_div_4_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 55);
    i0.ɵɵtext(1, "No Comment Available");
    i0.ɵɵelementEnd();
} }
function AnnouncementListComponent_div_15_div_12_div_1_div_4_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57)(1, "div", 5)(2, "div", 9)(3, "p", 58);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 59)(6, "small");
    i0.ɵɵtext(7, "By: ");
    i0.ɵɵelementStart(8, "strong");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "date");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const data_r13 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", ctx_r2.auth.getUserId() == data_r13.user_id ? "letter f-16" : "text-primary f-16");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(data_r13.comment);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r13.created_by);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" - ", i0.ɵɵpipeBind2(11, 4, data_r13.comment_date, "medium"), "");
} }
function AnnouncementListComponent_div_15_div_12_div_1_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, AnnouncementListComponent_div_15_div_12_div_1_div_4_div_11_div_1_Template, 12, 7, "div", 56);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.announcementCommentData);
} }
function AnnouncementListComponent_div_15_div_12_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "div", 34);
    i0.ɵɵelement(2, "h5", 35);
    i0.ɵɵelementStart(3, "p", 36);
    i0.ɵɵtemplate(4, AnnouncementListComponent_div_15_div_12_div_1_div_4_small_4_Template, 9, 5, "small", 37);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, AnnouncementListComponent_div_15_div_12_div_1_div_4_div_5_Template, 3, 0, "div", 38);
    i0.ɵɵelementStart(6, "div", 39);
    i0.ɵɵtemplate(7, AnnouncementListComponent_div_15_div_12_div_1_div_4_div_7_Template, 7, 1, "div", 40);
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtemplate(9, AnnouncementListComponent_div_15_div_12_div_1_div_4_small_9_Template, 3, 2, "small", 41)(10, AnnouncementListComponent_div_15_div_12_div_1_div_4_small_10_Template, 2, 0, "small", 42);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, AnnouncementListComponent_div_15_div_12_div_1_div_4_div_11_Template, 2, 1, "div", 43);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const announcement_r8 = i0.ɵɵnextContext().$implicit;
    const classSeparation_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r2.auth.getUserId() == announcement_r8.user_id ? "letter-primary" : "letter-info")("innerHTML", announcement_r8.note, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", announcement_r8.created_by != "" && announcement_r8.add_date != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.auth.getRoleId() == "4" && ctx_r2.auth.getUserId() == announcement_r8.user_id || ctx_r2.auth.getRoleId() == "2");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", classSeparation_r6.announcement_type == "3");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", announcement_r8.comment_count != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", announcement_r8.comment_count == 0 && classSeparation_r6.announcement_type == "3");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", announcement_r8.id == ctx_r2.announcementSend);
} }
function AnnouncementListComponent_div_15_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "div", 5);
    i0.ɵɵtemplate(2, AnnouncementListComponent_div_15_div_12_div_1_div_2_Template, 2, 7, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 31);
    i0.ɵɵtemplate(4, AnnouncementListComponent_div_15_div_12_div_1_div_4_Template, 12, 8, "div", 32);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const announcement_r8 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", announcement_r8.id == ctx_r2.announcementPage);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", announcement_r8.add_date != "00-00-0000");
} }
function AnnouncementListComponent_div_15_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, AnnouncementListComponent_div_15_div_12_div_1_Template, 5, 2, "div", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const classSeparation_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", classSeparation_r6.announcement_data);
} }
function AnnouncementListComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 19)(2, "div", 4)(3, "div", 5)(4, "div", 20)(5, "h4", 21);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "i", 22);
    i0.ɵɵlistener("click", function AnnouncementListComponent_div_15_Template_i_click_7_listener() { const classSeparation_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.announcementEdit(classSeparation_r6, "Add")); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(8, "div", 23)(9, "div", 5);
    i0.ɵɵtemplate(10, AnnouncementListComponent_div_15_div_10_Template, 2, 6, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, AnnouncementListComponent_div_15_div_11_Template, 4, 0, "div", 24)(12, AnnouncementListComponent_div_15_div_12_Template, 2, 1, "div", 25);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const classSeparation_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(classSeparation_r6.class_name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", classSeparation_r6.class_id == ctx_r2.announcementPage);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", classSeparation_r6.announcement_data.length == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", classSeparation_r6.announcement_data.length != 0);
} }
function AnnouncementListComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60)(1, "div", 61)(2, "div", 62)(3, "button", 63);
    i0.ɵɵtext(4, "No class is selected");
    i0.ɵɵelementEnd()()()();
} }
function AnnouncementListComponent_ng_template_17_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r15.index + 1);
} }
function AnnouncementListComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 64)(2, "h4", 21);
    i0.ɵɵtext(3);
    i0.ɵɵtemplate(4, AnnouncementListComponent_ng_template_17_span_4_Template, 2, 1, "span", 37);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 65)(6, "app-tiny-mice", 66);
    i0.ɵɵlistener("emitEditorValue", function AnnouncementListComponent_ng_template_17_Template_app_tiny_mice_emitEditorValue_6_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.getEditorValue($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 67)(8, "button", 68);
    i0.ɵɵlistener("click", function AnnouncementListComponent_ng_template_17_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r14); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onClose()); });
    i0.ɵɵtext(9, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 69);
    i0.ɵɵlistener("click", function AnnouncementListComponent_ng_template_17_Template_button_click_10_listener() { const row_r15 = i0.ɵɵrestoreView(_r14).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.announcementDetails(row_r15.data, row_r15.type)); });
    i0.ɵɵtext(11, "Save");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const row_r15 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", row_r15.type, " Announcement ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r15.type == "Edit");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("editorPatchValue", row_r15.type == "Edit" ? ctx_r2.addAnnouncement : false)("height", 300)("id", ctx_r2.announcementPage == "Add" ? "addAnnouncement" : "EditAnnouncement" + row_r15.index)("showDropBtn", false)("showInputBtn", false);
} }
function AnnouncementListComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 70)(1, "h4", 71);
    i0.ɵɵtext(2, "Delete Announcement");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 72);
    i0.ɵɵlistener("click", function AnnouncementListComponent_ng_template_19_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r16); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 73)(5, "div", 74)(6, "h5", 10);
    i0.ɵɵtext(7, "Are you sure to delete the Announcement ?");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 75)(9, "button", 76);
    i0.ɵɵlistener("click", function AnnouncementListComponent_ng_template_19_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r16); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.modalRef.close()); });
    i0.ɵɵtext(10, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 77);
    i0.ɵɵlistener("click", function AnnouncementListComponent_ng_template_19_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r16); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.announcementDetails(ctx_r2.deleteData, "delete")); });
    i0.ɵɵtext(12, "Ok ");
    i0.ɵɵelementEnd()();
} }
export class AnnouncementListComponent {
    constructor(auth, toastr, datePipe, modalService, commondata, route) {
        this.auth = auth;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.modalService = modalService;
        this.commondata = commondata;
        this.route = route;
        this.classListData = [];
        this.announcementList = [];
        this.selectedClass = [];
        this.updatedAnnouncementList = [];
        this.editorValue = '';
        this.announcementPage = 'cancel';
        this.announcementSend = '';
        this.announcementCommentData = [];
        this.type = '';
        this.currentDate = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
        this.route.params.forEach((params) => {
            this.type = params.type;
            this.classPatch = params.type ? [this.auth.getSessionData('announcement-class')] : [];
            console.log(this.classPatch, 'classPathch');
            console.log(this.type, 'type');
        });
    }
    ngOnInit() {
        this.getclassList();
    }
    ngOnDestroy() {
        if (this.auth.getSessionData('announcement-class')) {
            this.auth.removeSessionData('announcement-class');
        }
    }
    getEditorValue(event) {
        console.log(event.content, 'CONTENT');
        this.editorValue = event.editor;
        console.log(this.editorValue, 'this.editorValue');
        this.addAnnouncement = event.content;
    }
    onClose() {
        this.announcementPage = 'cancel';
    }
    announcementType() {
        this.commondata.showLoader(false);
        this.announcementPage = 'Add';
        this.addAnnouncement = '';
        setTimeout(function () {
            this.commondata ? this.commondata.showLoader(false) : '';
        }, 1000);
    }
    getclassList() {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: '1',
            list_type: 'announcement',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        this.auth.postService(payload, 'classes/list').subscribe((successData) => {
            this.classListData = successData.IsSuccess ? successData.ResponseObject : [];
            let class_id = [];
            if (this.auth.getSessionData('announcement-class')) {
                this.classListData.forEach((code) => {
                    if (code.class_id == this.auth.getSessionData('announcement-class')) {
                        class_id.push(code);
                    }
                });
                console.log(class_id, 'class_id');
                this.getclassAnnouncementList(class_id);
            }
            else {
                this.getclassAnnouncementList([]);
            }
        }, (error) => {
            console.error(error, 'erroR_clas');
        });
    }
    getclassAnnouncementList(event) {
        console.log(event, 'dasdas');
        this.selectedClass = event;
        const class_id = event.map((value) => {
            return value.class_id;
        });
        if (class_id.length != 0) {
            const payload = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                class_id
            };
            this.auth.postService(payload, 'classes/getClassNotes').subscribe((successData) => {
                this.updatedAnnouncementList = [];
                this.announcementList = successData.IsSuccess ? successData.ResponseObject : [];
                event.forEach((item) => {
                    const checkClassIdExistOrNot = this.updatedAnnouncementList.some((code => code.class_id == item.class_id));
                    if (!checkClassIdExistOrNot) {
                        this.updatedAnnouncementList.push({
                            class_id: item.class_id,
                            class_name: item.class_name,
                            announcement_type: item.announcement_type,
                            announcement_data: []
                        });
                    }
                });
                this.announcementList.forEach((items) => {
                    const getIndex = this.updatedAnnouncementList.map(announcement => announcement.class_id).indexOf(items.class_id);
                    const checkAnnouncementExistAlready = this.updatedAnnouncementList[getIndex].announcement_data.some((announcement) => announcement.id == items.id);
                    if (!checkAnnouncementExistAlready) {
                        items['comment'] = '';
                        this.updatedAnnouncementList[getIndex].announcement_data.push(items);
                    }
                });
                console.log(this.updatedAnnouncementList, 'updateA');
            }, (error) => {
                console.error(error, 'erroR_clas');
            });
        }
        else {
            this.announcementList = [];
            this.updatedAnnouncementList = [];
        }
    }
    checkValue(value, type) {
        console.log(value);
    }
    confirmItBeforeDeleteing(value) {
        this.deleteData = value;
        console.log(this.deleteData, 'deleteData');
        this.modalRef = this.modalService.open(this.deleteAnnouncement);
    }
    announcementDetails(value, type) {
        if (type == 'Add' || type == 'Edit') {
            if (this.addAnnouncement == '') {
                this.toastr.error('Announcement should not be empty');
                return false;
            }
        }
        const class_id = this.selectedClass.map((code) => {
            return code.class_id;
        });
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            type: type == 'Add' ? 'add' : 'edit',
            status: type == 'delete' ? '2' : '1',
            add_date: type == 'Add' ? this.currentDate : value.add_date,
            class_id: type == 'Add' ? class_id : [value.class_id],
            note: type == 'delete' ? value.note : this.addAnnouncement.replace(/\r?\n/g, '<br />')
        };
        if (type == 'Edit') {
            data['id'] = value.id;
        }
        else if (type == 'delete') {
            data['id'] = value.id;
        }
        this.auth.postService(data, 'classes/classAddNotes').subscribe((successData) => {
            if (successData.IsSuccess) {
                console.log(value, 'value111');
                this.getclassAnnouncementList(this.selectedClass);
                this.editorValue != '' ? this.editorValue.setContent('') : '';
                this.addAnnouncement = '';
                if (type == 'Edit' || type == 'Add') {
                    this.announcementPage = 'cancel';
                }
                else if (type == 'delete') {
                    this.modalRef.close();
                }
            }
            else {
                this.toastr.error(successData.ErrorObject);
            }
        }, (error) => {
        });
    }
    announcementEdit(data, type) {
        console.log(data, type);
        if (type == 'Edit') {
            this.commondata.showLoader(true);
            this.announcementPage = data.id;
            this.addAnnouncement = data.note;
            setTimeout(() => {
                this.commondata.showLoader(false);
            }, 2000);
        }
        else {
            this.commondata.showLoader(true);
            this.announcementPage = data.class_id;
            this.addAnnouncement != '' ? this.addAnnouncement.setContent('') : '';
            setTimeout(() => {
                this.commondata.showLoader(false);
            }, 2000);
        }
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
                this.updateViewComment(value);
                console.log(this.announcementCommentData, 'value111');
            }
            else {
                this.toastr.error(successData.ErrorObject);
            }
        }, (error) => {
        });
    }
    updateViewComment(value) {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            note_id: value.id
        };
        this.auth.postService(payload, 'classes/updateComments').subscribe((successData) => {
            console.log(successData, 'dsdasad');
        }, (error) => {
            console.error(error, 'error');
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
                    this.auth.getRoleId() == '4' ? this.getclassAnnouncementList(this.selectedClass) : '';
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
    static { this.ɵfac = function AnnouncementListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AnnouncementListComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.ToastrService), i0.ɵɵdirectiveInject(i3.DatePipe), i0.ɵɵdirectiveInject(i4.NgbModal), i0.ɵɵdirectiveInject(i5.CommonDataService), i0.ɵɵdirectiveInject(i6.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AnnouncementListComponent, selectors: [["app-announcement-list"]], viewQuery: function AnnouncementListComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteAnnouncement = _t.first);
        } }, inputs: { addAnnouncement: "addAnnouncement" }, decls: 21, vars: 6, consts: [["editorAnnouncement", ""], ["deleteAnnouncement", ""], [1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "row"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between"], ["class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], [1, "card-body", "my-3"], [1, "col-12"], [1, "font-weight-bold"], ["bindLabel", "class_name", "bindValue", "class_id", "placeholder", "Select Class", "typeToSearchText", "", "multiple", "true", 3, "ngModelChange", "change", "items", "ngModel"], ["class", "col-12 my-4", 4, "ngIf"], ["class", "col-12 my-4", 4, "ngFor", "ngForOf"], ["class", "col-12 my-5", 4, "ngIf"], [1, "btn", "btn-outline-primary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus"], [1, "col-12", "my-4"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "card", "announcement-page"], [1, "col-12", "d-flex", "align-itmes-center", "justify-content-between"], [1, "m-0"], ["aria-hidden", "true", 1, "fa", "fa-plus", "fa-1x", "title", "cursor", "pr-3", 3, "click"], [1, "card-body"], ["class", "row d-flex align-items-center justify-content-center", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row", "d-flex", "align-items-center", "justify-content-center"], [1, "col-10", "mt-2", "card", "class-card1", "w-99"], [1, "m-0", "text-center", "p-3"], ["class", "col-12 my-2", 4, "ngFor", "ngForOf"], [1, "col-12", "my-2"], [1, "col-12", "mt-2", "card", "class-card1", "w-99"], ["class", "row pt-2", 4, "ngIf"], [1, "row", "pt-2"], [1, "col-9", 2, "word-wrap", "break-word"], [3, "ngClass", "innerHTML"], [1, "pb-2", "text-dark"], [4, "ngIf"], ["class", "col-3 d-flex align-items-center justify-content-end", 4, "ngIf"], [1, "col-12", "mb-2"], ["class", "input-group", 4, "ngIf"], ["class", "text-primary cursor", 3, "click", 4, "ngIf"], ["class", "text-dark", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], [1, "col-3", "d-flex", "align-items-center", "justify-content-end"], ["aria-hidden", "true", "title", "Edit Announcement", 1, "fa", "fa-pencil", "fa-size", "text-primary", "cursor", "mr-2", 3, "click"], ["aria-hidden", "true", "title", "Delete Announcement", 1, "fa", "fa-trash", "fa-size", "text-danger", "cursor", 3, "click"], [1, "input-group"], ["type", "text", "placeholder", "Comment", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-info", "d-flex", "align-items-center", 3, "click"], [1, "send-icon"], [1, "send-icon-content"], ["src", "assets/images/send.png", "alt", ""], [1, "text-primary", "cursor", 3, "click"], [1, "text-dark"], ["class", "col-12 p-2 mb-3 bg-light text-dark rounded shadow-sm", 4, "ngFor", "ngForOf"], [1, "col-12", "p-2", "mb-3", "bg-light", "text-dark", "rounded", "shadow-sm"], [3, "ngClass"], [1, "p-0", "text-dark"], [1, "col-12", "my-5"], [1, "row", "d-flex", "justify-content-center", "list-card"], [1, "col-4"], [1, "nodataList"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between", "my-3"], [1, "col-12", "my-3"], [3, "emitEditorValue", "editorPatchValue", "height", "id", "showDropBtn", "showInputBtn"], [1, "col-12", "text-right", "my-3"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "modal-header", "align-items-center"], [1, "modal-title", "text-center"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "modal-body"], [1, "col-md-12"], [1, "modal-footer"], ["type", "button", 1, "btn", "cancel", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function AnnouncementListComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "h5");
            i0.ɵɵtext(6, "Announcement Details");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, AnnouncementListComponent_button_7_Template, 3, 0, "button", 7);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "div", 8)(9, "div", 5)(10, "div", 9)(11, "label", 10);
            i0.ɵɵtext(12, "Class List");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "ng-select", 11);
            i0.ɵɵtwoWayListener("ngModelChange", function AnnouncementListComponent_Template_ng_select_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.classPatch, $event) || (ctx.classPatch = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("change", function AnnouncementListComponent_Template_ng_select_change_13_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.getclassAnnouncementList($event)); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(14, AnnouncementListComponent_div_14_Template, 2, 6, "div", 12)(15, AnnouncementListComponent_div_15_Template, 13, 4, "div", 13)(16, AnnouncementListComponent_div_16_Template, 5, 0, "div", 14);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(17, AnnouncementListComponent_ng_template_17_Template, 12, 7, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(19, AnnouncementListComponent_ng_template_19_Template, 13, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.selectedClass.length != 0);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("items", ctx.classListData);
            i0.ɵɵtwoWayProperty("ngModel", ctx.classPatch);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.announcementPage == "Add");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.updatedAnnouncementList);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.selectedClass.length == 0);
        } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i3.NgTemplateOutlet, i7.DefaultValueAccessor, i7.NgControlStatus, i7.NgModel, i8.NgSelectComponent, i9.TinyMiceComponent, i3.DatePipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnnouncementListComponent, [{
        type: Component,
        args: [{ selector: 'app-announcement-list', template: "<div class=\"container-fluid\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"row\">\n                <div class=\"col-12 d-flex align-items-center justify-content-between\">\n                    <h5>Announcement Details</h5>\n                    <button class=\"btn btn-outline-primary\" *ngIf=\"selectedClass.length != 0\" (click)=\"announcementType()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Add Annonncement</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-body my-3\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <label class=\"font-weight-bold\">Class List</label>\n                    <ng-select [items]=\"classListData\"\n                               bindLabel=\"class_name\"\n                               bindValue=\"class_id\"\n                               placeholder=\"Select Class\"\n                               typeToSearchText=\"\"\n                               [(ngModel)]=\"classPatch\"\n                               (change)=\"getclassAnnouncementList($event)\"\n                                multiple=\"true\"></ng-select>\n                </div>\n            </div>\n            <div class=\"col-12 my-4\" *ngIf=\"announcementPage == 'Add'\">\n                <ng-container *ngTemplateOutlet=\"editorAnnouncement; context: { $implicit: {type: announcementPage , data: ''}}\">\n                </ng-container>\n            </div>\n            <div class=\"col-12 my-4\" *ngFor=\"let classSeparation of updatedAnnouncementList;\">\n                <div class=\"card announcement-page\">\n                    <div class=\"card-header\">\n                        <div class=\"row\">\n                            <div class=\"col-12 d-flex align-itmes-center justify-content-between\">\n                                <h4 class=\"m-0\">{{classSeparation.class_name}}</h4>\n                                <i class=\"fa fa-plus fa-1x title cursor pr-3\" aria-hidden=\"true\" (click)=\"announcementEdit(classSeparation, 'Add')\"></i>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-12 my-4\" *ngIf=\"classSeparation.class_id == announcementPage\">\n                                <ng-container *ngTemplateOutlet=\"editorAnnouncement; context: { $implicit: {type: 'Add' , data: classSeparation}}\">\n                                </ng-container>\n                            </div>\n                        </div>\n                        <div class=\"row d-flex align-items-center justify-content-center\" *ngIf=\"classSeparation.announcement_data.length == 0\">\n                            <div class=\"col-10 mt-2 card class-card1 w-99\">\n                                <p class=\"m-0 text-center p-3\">No Announcement Found!</p>\n                            </div>\n                        </div>\n                        <div class=\"row\" *ngIf=\"classSeparation.announcement_data.length != 0\">\n                            <div class=\"col-12 my-2\" *ngFor=\"let announcement of classSeparation.announcement_data; let announcementIndex = index\">\n                                <div class=\"row\">\n                                    <div class=\"col-12 my-4\" *ngIf=\"announcement.id == announcementPage\">\n                                        <ng-container *ngTemplateOutlet=\"editorAnnouncement; context: { $implicit: {type: 'Edit' , data: announcement, index: announcementIndex}}\">\n                                        </ng-container>\n                                    </div>\n                                </div>\n                                <div class=\"col-12 mt-2 card class-card1 w-99\">\n                                    <div class=\"row pt-2\" *ngIf=\"announcement.add_date != '00-00-0000'\">\n                                        <div class=\"col-9\" style=\"word-wrap: break-word;\">\n                                            <h5 [ngClass]=\"auth.getUserId() == announcement.user_id ? 'letter-primary': 'letter-info'\" [innerHTML]=\"announcement.note\"></h5>\n                                            <p class=\"pb-2 text-dark\"><small  *ngIf=\"announcement.created_by != '' && announcement.add_date != ''\">By: <strong> {{announcement.created_by}}</strong> - <small>{{announcement.add_date | date:'medium'}}</small><br></small></p>\n                                        </div>\n                                        <div *ngIf=\"(auth.getRoleId() == '4' && auth.getUserId() == announcement.user_id) ||\n                                                auth.getRoleId() == '2'\" class=\"col-3 d-flex align-items-center justify-content-end\">\n                                            <i class=\"fa fa-pencil fa-size text-primary cursor mr-2\" aria-hidden=\"true\" title=\"Edit Announcement\" (click)=\"announcementEdit(announcement, 'Edit')\"></i>\n                                            <i class=\"fa fa-trash fa-size text-danger cursor\" aria-hidden=\"true\" title=\"Delete Announcement\" (click)=\"confirmItBeforeDeleteing(announcement)\"></i>\n                                        </div>\n                                        <div class=\"col-12 mb-2\">\n                                            <div class=\"input-group\" *ngIf=\"classSeparation.announcement_type == '3'\">\n                                                <input type=\"text\" class=\"form-control\" placeholder=\"Comment\" [(ngModel)]=\"announcement.comment\" (keyup.enter)=\"announcementCommentDetails(announcement)\">\n                                                <div class=\"input-group-append\">\n                                                  <button class=\"btn btn-info d-flex align-items-center\" type=\"submit\" (click)=\"announcementCommentDetails(announcement)\"><span class=\"send-icon\"><span class=\"send-icon-content\"><img src=\"assets/images/send.png\" alt=\"\"></span></span></button>\n                                                </div>\n                                            </div>\n                                            <p><small class=\"text-primary cursor\" *ngIf=\"announcement.comment_count != 0\" (click)=\"announcement.id == announcementSend ? announcementSend = '' : announcementView(announcement)\">\n                                                {{announcement.comment_count}} Comment<span *ngIf=\"announcement.comment_count > 1\">s</span></small>\n                                                <small class=\"text-dark\" *ngIf=\"announcement.comment_count == 0 && classSeparation.announcement_type == '3'\">No Comment Available</small></p>\n                                        </div>\n                                        <div class=\"col-12\" *ngIf=\"announcement.id == announcementSend\">\n                                            <div class=\"col-12 p-2 mb-3 bg-light text-dark rounded shadow-sm\" *ngFor=\"let data of announcementCommentData\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-12\">\n                                                        <p [ngClass]=\"auth.getUserId() == data.user_id ? 'letter f-16': 'text-primary f-16'\">{{data.comment}}</p>\n                                                        <p class=\"p-0 text-dark\"><small>By: <strong>{{data.created_by}}</strong> - {{data.comment_date | date:'medium'}}</small></p>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 my-5\" *ngIf=\"selectedClass.length == 0\">\n                <div class=\"row d-flex justify-content-center list-card\">\n                    <div class=\"col-4\">\n                        <button class=\"nodataList\">No class is selected</button>\n                    </div>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #editorAnnouncement let-row>\n    <div class=\"row\">\n        <div class=\"col-12 d-flex align-items-center justify-content-between my-3\">\n            <h4 class=\"m-0\">{{row.type}} Announcement <span *ngIf=\"row.type == 'Edit'\">{{row.index + 1}}</span></h4>\n        </div>\n        <div class=\"col-12 my-3\">\n            <app-tiny-mice (emitEditorValue)=\"getEditorValue($event)\"\n                [editorPatchValue]=\"row.type == 'Edit' ? addAnnouncement : false\"\n                [height]=\"300\"\n                [id]=\"announcementPage == 'Add' ? 'addAnnouncement' : 'EditAnnouncement' + row.index\"\n                [showDropBtn]=\"false\"\n                [showInputBtn]=\"false\">  \n            </app-tiny-mice>\n        </div>\n        <div class=\"col-12 text-right my-3\">\n            <button type=\"button\" (click)=\"onClose()\" class=\"btn btn-outline-primary mr-2\">Cancel</button>\n            <button type=\"button\" (click)=\"announcementDetails(row.data, row.type)\" class=\"btn btn-primary\">Save</button>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #deleteAnnouncement let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title text-center\">Delete Announcement</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"modalRef.close()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-md-12\">\n            <h5 class=\"font-weight-bold\">Are you sure to delete the Announcement ?</h5>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn cancel\" type=\"button\" (click)=\"modalRef.close()\">Close</button>\n        <button class=\"btn btn-danger\" type=\"button\" (click)=\"announcementDetails(deleteData, 'delete')\">Ok\n        </button>\n    </div>\n</ng-template>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.ToastrService }, { type: i3.DatePipe }, { type: i4.NgbModal }, { type: i5.CommonDataService }, { type: i6.ActivatedRoute }], { deleteAnnouncement: [{
            type: ViewChild,
            args: ['deleteAnnouncement', { static: true }]
        }], addAnnouncement: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AnnouncementListComponent, { className: "AnnouncementListComponent" }); })();
//# sourceMappingURL=announcement-list.component.js.map