import { Component, ViewChild, HostListener } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { SessionConstants } from '../../../shared/data/sessionConstants';
import { dateOptions, timeZone } from '../../../shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/configuration.service";
import * as i3 from "../../../shared/service/assessment.service";
import * as i4 from "@angular/router";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/platform-browser";
import * as i7 from "@ng-bootstrap/ng-bootstrap";
import * as i8 from "../../../shared/service/class.service";
import * as i9 from "../../../shared/service/creator.service";
import * as i10 from "ngx-toastr";
import * as i11 from "../../../shared/service/common.service";
import * as i12 from "../../../shared/service/common-data.service";
import * as i13 from "../../../shared/service/nav.service";
import * as i14 from "@angular/common";
import * as i15 from "../../../shared/service/validation.service";
import * as i16 from "../../../shared/service/newsubject.service";
import * as i17 from "@ng-select/ng-select";
import * as i18 from "@nodro7/angular-mydatepicker";
import * as i19 from "ngx-infinite-scroll";
import * as i20 from "../../corporateschool/emptyschool/emptyschool.component";
import * as i21 from "../../auth/treeview-contentfolder/treeview-contentfolder.component";
import * as i22 from "@angular/material/icon";
import * as i23 from "@angular/material/form-field";
import * as i24 from "@angular/material/chips";
import * as i25 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["detailsTemplate"];
const _c1 = ["select"];
const _c2 = ["allCreateContent"];
const _c3 = ["createScratch"];
const _c4 = ["resources"];
const _c5 = ["assignment"];
const _c6 = ["assessment"];
const _c7 = ["assign"];
const _c8 = ["batchassign"];
const _c9 = ["delete"];
const _c10 = ["hiddenBtn"];
const _c11 = (a0, a1, a2) => ({ "content-card__type--resource": a0, "content-card__type--assignment": a1, "content-card__type--assessment": a2 });
const _c12 = (a0, a1, a2) => ({ "status-pill--success": a0, "status-pill--warning": a1, "status-pill--info": a2 });
const _c13 = () => [];
function ContentHomeComponent_div_0_div_1_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 68);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_div_1_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.multiAssignOfContent()); });
    i0.ɵɵelement(1, "i", 69);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Assign Selected (", ctx_r2.multiContentId.length, ") ");
} }
function ContentHomeComponent_div_0_div_1_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 70);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_div_1_button_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.showAdd()); });
    i0.ɵɵelement(1, "i", 71);
    i0.ɵɵtext(2, " Create Content ");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_div_0_div_1_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 72);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_div_1_button_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.enterList()); });
    i0.ɵɵelement(1, "i", 73);
    i0.ɵɵtext(2, " Back ");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 56)(1, "div", 57)(2, "ul", 58)(3, "li", 59)(4, "button", 60);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_div_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.switchTab("library")); });
    i0.ɵɵelement(5, "i", 61);
    i0.ɵɵtext(6, " Content Library ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "li", 59)(8, "button", 62);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_div_1_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.switchTab("folder")); });
    i0.ɵɵelement(9, "i", 63);
    i0.ɵɵtext(10, " Content Folder ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 64);
    i0.ɵɵtemplate(12, ContentHomeComponent_div_0_div_1_button_12_Template, 3, 1, "button", 65)(13, ContentHomeComponent_div_0_div_1_button_13_Template, 3, 0, "button", 66)(14, ContentHomeComponent_div_0_div_1_button_14_Template, 3, 0, "button", 67);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("active", ctx_r2.activeTab === "library");
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("active", ctx_r2.activeTab === "folder");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r2.multiContentId.length > 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.manageOwnContent);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.backContentIcon);
} }
function ContentHomeComponent_div_0_div_67_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 74)(1, "div", 75)(2, "span", 76);
    i0.ɵɵtext(3, "Loading...");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 77);
    i0.ɵɵtext(5, "Loading content");
    i0.ɵɵelementEnd()();
} }
function ContentHomeComponent_div_0_div_68_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 78)(1, "div", 79)(2, "div", 80);
    i0.ɵɵtext(3, "No content matches your filters.");
    i0.ɵɵelementEnd()()();
} }
function ContentHomeComponent_div_0_div_69_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 78)(1, "div", 79)(2, "div", 80);
    i0.ɵɵtext(3, "You don't have permission to access content. Please contact admin.");
    i0.ɵɵelementEnd()()();
} }
function ContentHomeComponent_div_0_div_70_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 105);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_div_70_div_1_div_5_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r10); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(1, "input", 106);
    i0.ɵɵlistener("change", function ContentHomeComponent_div_0_div_70_div_1_div_5_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r10); const list_r9 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.selectOrUnSelectContentList(list_r9, $event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", list_r9.checked)("disabled", list_r9.details == "Draft");
} }
function ContentHomeComponent_div_0_div_70_div_1_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 107);
    i0.ɵɵelement(1, "i", 108);
    i0.ɵɵelementStart(2, "span", 109);
    i0.ɵɵtext(3, "Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 110);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(list_r9.grade_name);
} }
function ContentHomeComponent_div_0_div_70_div_1_span_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 107);
    i0.ɵɵelement(1, "i", 111);
    i0.ɵɵelementStart(2, "span", 109);
    i0.ɵɵtext(3, "Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 110);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(list_r9.subject_name);
} }
function ContentHomeComponent_div_0_div_70_div_1_span_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 107);
    i0.ɵɵelement(1, "i", 112);
    i0.ɵɵelementStart(2, "span", 109);
    i0.ɵɵtext(3, "Created");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 110);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(list_r9.created_by);
} }
function ContentHomeComponent_div_0_div_70_div_1_span_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 107);
    i0.ɵɵelement(1, "i", 113);
    i0.ɵɵelementStart(2, "span", 109);
    i0.ɵɵtext(3, "Updated");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 110);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "customDateFormat");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(6, 1, list_r9.created_date));
} }
function ContentHomeComponent_div_0_div_70_div_1_ng_container_23_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 116);
    i0.ɵɵelement(1, "i", 117);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tag_r13 = ctx.$implicit;
    i0.ɵɵproperty("hidden", !tag_r13 || !tag_r13.trim());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", tag_r13.trim(), " ");
} }
function ContentHomeComponent_div_0_div_70_div_1_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 114);
    i0.ɵɵtemplate(2, ContentHomeComponent_div_0_div_70_div_1_ng_container_23_span_2_Template, 3, 2, "span", 115);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const list_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", (list_r9.tag_name || list_r9.tagname) == null ? null : (list_r9.tag_name || list_r9.tagname).split(","));
} }
function ContentHomeComponent_div_0_div_70_div_1_div_30_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 120);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_div_70_div_1_div_30_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r15 = i0.ɵɵnextContext(2); const list_r9 = ctx_r15.$implicit; const i_r11 = ctx_r15.index; const ctx_r2 = i0.ɵɵnextContext(3); ctx_r2.closeDropdown(i_r11); return i0.ɵɵresetView(ctx_r2.editAction(list_r9, list_r9.content_format == 3 ? "addText" : "addPdf", "0")); });
    i0.ɵɵelement(1, "i", 121);
    i0.ɵɵtext(2, " Edit ");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_div_0_div_70_div_1_div_30_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 120);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_div_70_div_1_div_30_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r15 = i0.ɵɵnextContext(2); const list_r9 = ctx_r15.$implicit; const i_r11 = ctx_r15.index; const ctx_r2 = i0.ɵɵnextContext(3); ctx_r2.closeDropdown(i_r11); return i0.ɵɵresetView(ctx_r2.editAction(list_r9, list_r9.content_format == 3 ? "addText" : "addPdf", "0")); });
    i0.ɵɵelement(1, "i", 121);
    i0.ɵɵtext(2, " Edit ");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_div_0_div_70_div_1_div_30_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 120);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_div_70_div_1_div_30_a_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r18); const i_r11 = i0.ɵɵnextContext(2).index; const ctx_r2 = i0.ɵɵnextContext(3); ctx_r2.closeDropdown(i_r11); return i0.ɵɵresetView(ctx_r2.assignResource(i_r11, "assign")); });
    i0.ɵɵelement(1, "i", 122);
    i0.ɵɵtext(2, " Assign ");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_div_0_div_70_div_1_div_30_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 120);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_div_70_div_1_div_30_a_4_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r19); const i_r11 = i0.ɵɵnextContext(2).index; const ctx_r2 = i0.ɵɵnextContext(3); ctx_r2.closeDropdown(i_r11); return i0.ɵɵresetView(ctx_r2.assignResource(i_r11, "notassign")); });
    i0.ɵɵelement(1, "i", 122);
    i0.ɵɵtext(2, " Assign ");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_div_0_div_70_div_1_div_30_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 120);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_div_70_div_1_div_30_a_5_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r20); const i_r11 = i0.ɵɵnextContext(2).index; const ctx_r2 = i0.ɵɵnextContext(3); ctx_r2.closeDropdown(i_r11); return i0.ɵɵresetView(ctx_r2.assignResource(i_r11, "browseAssign")); });
    i0.ɵɵelement(1, "i", 122);
    i0.ɵɵtext(2, " Assign ");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_div_0_div_70_div_1_div_30_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 120);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_div_70_div_1_div_30_a_6_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r15 = i0.ɵɵnextContext(2); const list_r9 = ctx_r15.$implicit; const i_r11 = ctx_r15.index; const ctx_r2 = i0.ɵɵnextContext(3); ctx_r2.closeDropdown(i_r11); return i0.ɵɵresetView(ctx_r2.PreviewPage(list_r9, list_r9.content_type)); });
    i0.ɵɵelement(1, "i", 123);
    i0.ɵɵtext(2, " Preview ");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_div_0_div_70_div_1_div_30_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 120);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_div_70_div_1_div_30_a_7_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r22); const ctx_r15 = i0.ɵɵnextContext(2); const list_r9 = ctx_r15.$implicit; const i_r11 = ctx_r15.index; const ctx_r2 = i0.ɵɵnextContext(3); ctx_r2.closeDropdown(i_r11); return i0.ɵɵresetView(ctx_r2.PreviewText(list_r9, list_r9.content_type)); });
    i0.ɵɵelement(1, "i", 123);
    i0.ɵɵtext(2, " Preview ");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_div_0_div_70_div_1_div_30_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 120);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_div_70_div_1_div_30_a_8_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r23); const i_r11 = i0.ɵɵnextContext(2).index; const ctx_r2 = i0.ɵɵnextContext(3); ctx_r2.closeDropdown(i_r11); return i0.ɵɵresetView(ctx_r2.detailPreview(i_r11, "details")); });
    i0.ɵɵelement(1, "i", 124);
    i0.ɵɵtext(2, " Details ");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_div_0_div_70_div_1_div_30_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 120);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_div_70_div_1_div_30_a_9_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r15 = i0.ɵɵnextContext(2); const list_r9 = ctx_r15.$implicit; const i_r11 = ctx_r15.index; const ctx_r2 = i0.ɵɵnextContext(3); ctx_r2.closeDropdown(i_r11); return i0.ɵɵresetView(ctx_r2.removeContent(list_r9)); });
    i0.ɵɵelement(1, "i", 125);
    i0.ɵɵtext(2, " Delete ");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_div_0_div_70_div_1_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 118);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_div_70_div_1_div_30_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r14); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵtemplate(1, ContentHomeComponent_div_0_div_70_div_1_div_30_a_1_Template, 3, 0, "a", 119)(2, ContentHomeComponent_div_0_div_70_div_1_div_30_a_2_Template, 3, 0, "a", 119)(3, ContentHomeComponent_div_0_div_70_div_1_div_30_a_3_Template, 3, 0, "a", 119)(4, ContentHomeComponent_div_0_div_70_div_1_div_30_a_4_Template, 3, 0, "a", 119)(5, ContentHomeComponent_div_0_div_70_div_1_div_30_a_5_Template, 3, 0, "a", 119)(6, ContentHomeComponent_div_0_div_70_div_1_div_30_a_6_Template, 3, 0, "a", 119)(7, ContentHomeComponent_div_0_div_70_div_1_div_30_a_7_Template, 3, 0, "a", 119)(8, ContentHomeComponent_div_0_div_70_div_1_div_30_a_8_Template, 3, 0, "a", 119)(9, ContentHomeComponent_div_0_div_70_div_1_div_30_a_9_Template, 3, 0, "a", 119);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.roleid == "4" && list_r9.edit_status == "1" || ctx_r2.roleid == "6" && list_r9.edit_status != "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.roleid == "2" && !(ctx_r2.auth.getSessionData("school_id") != list_r9.school_id && list_r9.access == "3") && list_r9.access != "4");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showIcon && ctx_r2.assignIcon);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.assignDirect);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.browseAllAssign == true && ctx_r2.assignDirect == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r9.content_format == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r9.content_format == 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.detailButtonPreview == true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.roleid == "2" && list_r9.access != "3" && list_r9.access != "4" || ctx_r2.roleid == "6" && list_r9.access == "4" || ctx_r2.roleid == "4" && list_r9.edit_status == "1");
} }
function ContentHomeComponent_div_0_div_70_div_1_section_31_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "dt");
    i0.ɵɵtext(2, "Created by");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const list_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(list_r9.created_by);
} }
function ContentHomeComponent_div_0_div_70_div_1_section_31_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "dt");
    i0.ɵɵtext(2, "Created on");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "customDateFormat");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const list_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 1, list_r9.created_date));
} }
function ContentHomeComponent_div_0_div_70_div_1_section_31_ng_container_8_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Access to all within Org");
    i0.ɵɵelementContainerEnd();
} }
function ContentHomeComponent_div_0_div_70_div_1_section_31_ng_container_8_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Access only for you");
    i0.ɵɵelementContainerEnd();
} }
function ContentHomeComponent_div_0_div_70_div_1_section_31_ng_container_8_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Public");
    i0.ɵɵelementContainerEnd();
} }
function ContentHomeComponent_div_0_div_70_div_1_section_31_ng_container_8_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Access within corporate");
    i0.ɵɵelementContainerEnd();
} }
function ContentHomeComponent_div_0_div_70_div_1_section_31_ng_container_8_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Access restricted");
    i0.ɵɵelementContainerEnd();
} }
function ContentHomeComponent_div_0_div_70_div_1_section_31_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "dt");
    i0.ɵɵtext(2, "Access");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵelementContainerStart(4, 128);
    i0.ɵɵtemplate(5, ContentHomeComponent_div_0_div_70_div_1_section_31_ng_container_8_ng_container_5_Template, 2, 0, "ng-container", 129)(6, ContentHomeComponent_div_0_div_70_div_1_section_31_ng_container_8_ng_container_6_Template, 2, 0, "ng-container", 129)(7, ContentHomeComponent_div_0_div_70_div_1_section_31_ng_container_8_ng_container_7_Template, 2, 0, "ng-container", 129)(8, ContentHomeComponent_div_0_div_70_div_1_section_31_ng_container_8_ng_container_8_Template, 2, 0, "ng-container", 129)(9, ContentHomeComponent_div_0_div_70_div_1_section_31_ng_container_8_ng_container_9_Template, 2, 0, "ng-container", 130);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const list_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngSwitch", list_r9.access);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "3");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "4");
} }
function ContentHomeComponent_div_0_div_70_div_1_section_31_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 126);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_div_70_div_1_section_31_Template_section_click_0_listener($event) { i0.ɵɵrestoreView(_r25); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(1, "dl", 127);
    i0.ɵɵtemplate(2, ContentHomeComponent_div_0_div_70_div_1_section_31_ng_container_2_Template, 5, 1, "ng-container", 11)(3, ContentHomeComponent_div_0_div_70_div_1_section_31_ng_container_3_Template, 6, 3, "ng-container", 11);
    i0.ɵɵelementStart(4, "dt");
    i0.ɵɵtext(5, "Content type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "dd");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, ContentHomeComponent_div_0_div_70_div_1_section_31_ng_container_8_Template, 10, 5, "ng-container", 11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r9.created_by);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r9.created_date);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2(" ", list_r9.content_type == 1 || list_r9.content_type == "1" ? "Resources" : list_r9.content_type == 2 || list_r9.content_type == "2" ? "Assignment" : "Assessment", " ", list_r9.content_format == 3 || list_r9.content_format == "3" ? "(Text)" : list_r9.is_pdf_content == 0 || list_r9.is_pdf_content == "0" ? "(Link)" : "(PDF)", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r9.access);
} }
function ContentHomeComponent_div_0_div_70_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 83)(1, "article", 84);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_div_70_div_1_Template_article_click_1_listener() { const list_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.navigateToPreview(list_r9)); });
    i0.ɵɵelementStart(2, "div", 16)(3, "div", 85)(4, "div", 86);
    i0.ɵɵtemplate(5, ContentHomeComponent_div_0_div_70_div_1_div_5_Template, 2, 2, "div", 87);
    i0.ɵɵelementStart(6, "button", 88);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_div_70_div_1_Template_button_click_6_listener($event) { const i_r11 = i0.ɵɵrestoreView(_r8).index; const ctx_r2 = i0.ɵɵnextContext(3); ctx_r2.detailPreview(i_r11, "details"); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelement(7, "img", 89);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 90)(9, "div", 91)(10, "span", 92);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span", 93);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span", 94);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 95);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_div_70_div_1_Template_button_click_16_listener($event) { const ctx_r11 = i0.ɵɵrestoreView(_r8); const list_r9 = ctx_r11.$implicit; const i_r11 = ctx_r11.index; const ctx_r2 = i0.ɵɵnextContext(3); ctx_r2.showInfo(list_r9, i_r11); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelement(17, "i", 96);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 97);
    i0.ɵɵtemplate(19, ContentHomeComponent_div_0_div_70_div_1_span_19_Template, 6, 1, "span", 98)(20, ContentHomeComponent_div_0_div_70_div_1_span_20_Template, 6, 1, "span", 98)(21, ContentHomeComponent_div_0_div_70_div_1_span_21_Template, 6, 1, "span", 98)(22, ContentHomeComponent_div_0_div_70_div_1_span_22_Template, 7, 3, "span", 98);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(23, ContentHomeComponent_div_0_div_70_div_1_ng_container_23_Template, 3, 1, "ng-container", 11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 99);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_div_70_div_1_Template_div_click_24_listener($event) { i0.ɵɵrestoreView(_r8); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(25, "span", 100);
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 101)(28, "button", 102);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_div_70_div_1_Template_button_click_28_listener($event) { const i_r11 = i0.ɵɵrestoreView(_r8).index; const ctx_r2 = i0.ɵɵnextContext(3); ctx_r2.toggleDropdown(i_r11); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵtext(29, " Action ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(30, ContentHomeComponent_div_0_div_70_div_1_div_30_Template, 10, 9, "div", 103);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(31, ContentHomeComponent_div_0_div_70_div_1_section_31_Template, 9, 5, "section", 104);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const list_r9 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("dropdown-open", list_r9.showDropdown);
    i0.ɵɵattribute("title", list_r9.name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r2.assignDirect || !ctx_r2.backContentIcon);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", "View details for " + list_r9.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r2.getContentThumbnail(list_r9), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵattribute("title", list_r9.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(list_r9.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(24, _c11, list_r9.content_type == 1 || list_r9.content_type == "1", list_r9.content_type == 2 || list_r9.content_type == "2", list_r9.content_type == 3 || list_r9.content_type == "3"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", list_r9.content_type == 1 || list_r9.content_type == "1" ? "Resource" : list_r9.content_type == 2 || list_r9.content_type == "2" ? "Assignment" : "Assessment", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", list_r9.content_format == 3 || list_r9.content_format == "3" ? "Text" : list_r9.is_pdf_content == 0 || list_r9.is_pdf_content == "0" ? "Link" : "PDF", " ");
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-expanded", list_r9.showDetails ? "true" : "false")("aria-label", "Toggle additional info for " + list_r9.name);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r9.grade_name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r9.subject_name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r9.created_by);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r9.created_date);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r9.tag_name || list_r9.tagname);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(28, _c12, list_r9.details === "Published", list_r9.details === "Draft", list_r9.details !== "Published" && list_r9.details !== "Draft"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", list_r9.details, " ");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("show", list_r9.showDropdown);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r9.showDropdown);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r9.showDetails);
} }
function ContentHomeComponent_div_0_div_70_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵlistener("scrolled", function ContentHomeComponent_div_0_div_70_Template_div_scrolled_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onScrollDown($event)); })("scrolledUp", function ContentHomeComponent_div_0_div_70_Template_div_scrolledUp_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onUp($event)); });
    i0.ɵɵtemplate(1, ContentHomeComponent_div_0_div_70_div_1_Template, 32, 32, "div", 82);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("infiniteScroll", !ctx_r2.showPagination)("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("infiniteScrollContainer", ctx_r2.selector)("fromRoot", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.contentdata);
} }
function ContentHomeComponent_div_0_nav_71_li_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 133)(1, "span", 145);
    i0.ɵɵtext(2, "...");
    i0.ɵɵelementEnd()();
} }
function ContentHomeComponent_div_0_nav_71_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 133)(1, "button", 146);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_nav_71_li_9_Template_button_click_1_listener() { const page_r28 = i0.ɵɵrestoreView(_r27).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.goToPage(page_r28)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const page_r28 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("active", page_r28 === ctx_r2.pageNo);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-current", page_r28 === ctx_r2.pageNo ? "page" : null);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", page_r28, " ");
} }
function ContentHomeComponent_div_0_nav_71_li_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 133)(1, "span", 145);
    i0.ɵɵtext(2, "...");
    i0.ɵɵelementEnd()();
} }
function ContentHomeComponent_div_0_nav_71_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nav", 131)(1, "ul", 132)(2, "li", 133)(3, "button", 134);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_nav_71_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r26); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.goToFirstPage()); });
    i0.ɵɵelement(4, "i", 135);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "li", 133)(6, "button", 136);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_nav_71_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r26); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.loadPreviousPage()); });
    i0.ɵɵelement(7, "i", 137);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(8, ContentHomeComponent_div_0_nav_71_li_8_Template, 3, 0, "li", 138)(9, ContentHomeComponent_div_0_nav_71_li_9_Template, 3, 4, "li", 139)(10, ContentHomeComponent_div_0_nav_71_li_10_Template, 3, 0, "li", 138);
    i0.ɵɵelementStart(11, "li", 133)(12, "button", 140);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_nav_71_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r26); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.loadNextPage()); });
    i0.ɵɵelement(13, "i", 141);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "li", 133)(15, "button", 142);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_nav_71_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r26); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.goToLastPage()); });
    i0.ɵɵelement(16, "i", 143);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "div", 144);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("disabled", ctx_r2.pageNo === 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r2.pageNo === 1);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("disabled", ctx_r2.pageNo === 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r2.pageNo === 1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.paginationPages[0] > 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.paginationPages);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.paginationPages[ctx_r2.paginationPages.length - 1] < ctx_r2.totalPages);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", ctx_r2.pageNo === ctx_r2.totalPages);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r2.pageNo === ctx_r2.totalPages);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("disabled", ctx_r2.pageNo === ctx_r2.totalPages);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r2.pageNo === ctx_r2.totalPages);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate3(" Page ", ctx_r2.pageNo, " of ", ctx_r2.totalPages, " (", ctx_r2.contentdata.length, " items on this page) ");
} }
function ContentHomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, ContentHomeComponent_div_0_div_1_Template, 15, 7, "div", 14);
    i0.ɵɵelementStart(2, "div", 15)(3, "div", 16)(4, "div", 17)(5, "button", 18);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.clearall()); });
    i0.ɵɵelement(6, "i", 19);
    i0.ɵɵtext(7, " Clear filters ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 20)(9, "input", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function ContentHomeComponent_div_0_Template_input_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.exactSearch, $event) || (ctx_r2.exactSearch = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ContentHomeComponent_div_0_Template_input_change_9_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.sortExact()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "label", 22);
    i0.ɵɵtext(11, "Exact search");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 23)(13, "div", 24)(14, "label", 25);
    i0.ɵɵtext(15, "Search");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 26)(17, "span", 27);
    i0.ɵɵelement(18, "i", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "input", 29);
    i0.ɵɵtwoWayListener("ngModelChange", function ContentHomeComponent_div_0_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.searchKey, $event) || (ctx_r2.searchKey = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("input", function ContentHomeComponent_div_0_Template_input_input_19_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.updateFilter(ctx_r2.searchKey)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "div", 30)(21, "label", 31);
    i0.ɵɵtext(22, "Library");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "select", 32);
    i0.ɵɵtwoWayListener("ngModelChange", function ContentHomeComponent_div_0_Template_select_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.libraryselection, $event) || (ctx_r2.libraryselection = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ContentHomeComponent_div_0_Template_select_change_23_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.library($event)); });
    i0.ɵɵelementStart(24, "option", 33);
    i0.ɵɵtext(25, "Entire Library");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "option", 34);
    i0.ɵɵtext(27, "Resource");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "option", 35);
    i0.ɵɵtext(29, "Assignment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "option", 36);
    i0.ɵɵtext(31, "Assessment");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(32, "div", 30)(33, "label", 37);
    i0.ɵɵtext(34, "Sort By");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "select", 38);
    i0.ɵɵtwoWayListener("ngModelChange", function ContentHomeComponent_div_0_Template_select_ngModelChange_35_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.sortfilter, $event) || (ctx_r2.sortfilter = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ContentHomeComponent_div_0_Template_select_change_35_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.sort($event)); });
    i0.ɵɵelementStart(36, "option", 33);
    i0.ɵɵtext(37, "Recent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "option", 39);
    i0.ɵɵtext(39, "A - Z");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "option", 40);
    i0.ɵɵtext(41, "Z - A");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "option", 41);
    i0.ɵɵtext(43, "Popularity");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(44, "div", 24)(45, "label", 42);
    i0.ɵɵtext(46, "Quick Filters");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "div", 43)(48, "button", 44);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_Template_button_click_48_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.callCurrentBtn("authored")); });
    i0.ɵɵelement(49, "i", 45);
    i0.ɵɵtext(50, " Authored by Me ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "button", 44);
    i0.ɵɵlistener("click", function ContentHomeComponent_div_0_Template_button_click_51_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.callCurrentBtn("mydraft")); });
    i0.ɵɵelement(52, "i", 46);
    i0.ɵɵtext(53, " My Drafts ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(54, "div", 47)(55, "label", 42);
    i0.ɵɵtext(56, "Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "ng-select", 48);
    i0.ɵɵtwoWayListener("ngModelChange", function ContentHomeComponent_div_0_Template_ng_select_ngModelChange_57_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.gradeid, $event) || (ctx_r2.gradeid = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ContentHomeComponent_div_0_Template_ng_select_change_57_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.selectedgrade($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "div", 47)(59, "label", 42);
    i0.ɵɵtext(60, "Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "ng-select", 49);
    i0.ɵɵtwoWayListener("ngModelChange", function ContentHomeComponent_div_0_Template_ng_select_ngModelChange_61_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.subjectid, $event) || (ctx_r2.subjectid = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ContentHomeComponent_div_0_Template_ng_select_change_61_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.selectedsubject($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(62, "div", 47)(63, "label", 42);
    i0.ɵɵtext(64, "Tags");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "ng-select", 50);
    i0.ɵɵtwoWayListener("ngModelChange", function ContentHomeComponent_div_0_Template_ng_select_ngModelChange_65_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.tagid, $event) || (ctx_r2.tagid = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ContentHomeComponent_div_0_Template_ng_select_change_65_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.selectedtag($event)); });
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(66, "div", 51);
    i0.ɵɵtemplate(67, ContentHomeComponent_div_0_div_67_Template, 6, 0, "div", 52)(68, ContentHomeComponent_div_0_div_68_Template, 4, 0, "div", 53)(69, ContentHomeComponent_div_0_div_69_Template, 4, 0, "div", 53)(70, ContentHomeComponent_div_0_div_70_Template, 2, 6, "div", 54)(71, ContentHomeComponent_div_0_nav_71_Template, 19, 18, "nav", 55);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.manageOwnContent || !ctx_r2.backContentIcon);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.exactSearch);
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.searchKey);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.libraryselection);
    i0.ɵɵadvance(12);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.sortfilter);
    i0.ɵɵadvance(13);
    i0.ɵɵclassProp("active", ctx_r2.selectAuthored === "active2");
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("active", ctx_r2.selectDraft === "active2");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("items", ctx_r2.gradeData);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.gradeid);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("items", ctx_r2.subjectData);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.subjectid);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("items", ctx_r2.tagData);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.tagid);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.isLoading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.isLoading && ctx_r2.contentdata.length == 0 && (ctx_r2.manageOwnContent || ctx_r2.manageInstitutionContent));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.manageOwnContent && !ctx_r2.manageInstitutionContent);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.contentdata.length != 0 && (ctx_r2.manageOwnContent || ctx_r2.manageInstitutionContent));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.contentdata.length > 0 && ctx_r2.showPagination && ctx_r2.totalPages > 1);
} }
function ContentHomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-emptyschool");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_2_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "dt");
    i0.ɵɵtext(2, "Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.description);
} }
function ContentHomeComponent_ng_template_2_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "dt");
    i0.ɵɵtext(2, "Created by");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.createdby);
} }
function ContentHomeComponent_ng_template_2_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "dt");
    i0.ɵɵtext(2, "Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.gradename);
} }
function ContentHomeComponent_ng_template_2_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "dt");
    i0.ɵɵtext(2, "Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.subjectname);
} }
function ContentHomeComponent_ng_template_2_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "dt");
    i0.ɵɵtext(2, "Tags");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.tags);
} }
function ContentHomeComponent_ng_template_2_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "dt");
    i0.ɵɵtext(2, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.noofquestions);
} }
function ContentHomeComponent_ng_template_2_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "dt");
    i0.ɵɵtext(2, "Points");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.totalpoints);
} }
function ContentHomeComponent_ng_template_2_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "dt");
    i0.ɵɵtext(2, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.details);
} }
function ContentHomeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 147)(1, "h4", 148);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 149);
    i0.ɵɵlistener("click", function ContentHomeComponent_ng_template_2_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r29); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵelement(4, "i", 150);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 151)(6, "div", 152)(7, "div", 153);
    i0.ɵɵelement(8, "img", 154);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 155)(10, "dl", 127);
    i0.ɵɵtemplate(11, ContentHomeComponent_ng_template_2_ng_container_11_Template, 5, 1, "ng-container", 11)(12, ContentHomeComponent_ng_template_2_ng_container_12_Template, 5, 1, "ng-container", 11)(13, ContentHomeComponent_ng_template_2_ng_container_13_Template, 5, 1, "ng-container", 11)(14, ContentHomeComponent_ng_template_2_ng_container_14_Template, 5, 1, "ng-container", 11)(15, ContentHomeComponent_ng_template_2_ng_container_15_Template, 5, 1, "ng-container", 11)(16, ContentHomeComponent_ng_template_2_ng_container_16_Template, 5, 1, "ng-container", 11)(17, ContentHomeComponent_ng_template_2_ng_container_17_Template, 5, 1, "ng-container", 11)(18, ContentHomeComponent_ng_template_2_ng_container_18_Template, 5, 1, "ng-container", 11);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.contentName);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("src", ctx_r2.getDetailThumbnail(), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r2.description);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.createdby);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.gradename);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.subjectname);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.tags);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.noofquestions);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.totalpoints);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.details);
} }
function ContentHomeComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 147)(1, "h4", 156)(2, "b");
    i0.ɵɵtext(3, "Select type of the content");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "i", 157);
    i0.ɵɵlistener("click", function ContentHomeComponent_ng_template_4_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r30); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 151)(6, "div", 158)(7, "div", 159);
    i0.ɵɵelement(8, "img", 160);
    i0.ɵɵelementStart(9, "button", 161);
    i0.ɵɵlistener("click", function ContentHomeComponent_ng_template_4_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r30); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.upload("resource")); });
    i0.ɵɵtext(10, "Add Resources");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 159);
    i0.ɵɵelement(12, "img", 162);
    i0.ɵɵelementStart(13, "button", 161);
    i0.ɵɵlistener("click", function ContentHomeComponent_ng_template_4_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r30); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.upload("assignment")); });
    i0.ɵɵtext(14, "Add Assignment");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 159);
    i0.ɵɵelement(16, "img", 163);
    i0.ɵɵelementStart(17, "button", 161);
    i0.ɵɵlistener("click", function ContentHomeComponent_ng_template_4_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r30); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.upload("assessment")); });
    i0.ɵɵtext(18, "Add Assessment");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("disabled", ctx_r2.neededButtonType != "resources" && ctx_r2.contentAssign == "class" && ctx_r2.neededButtonType != undefined);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r2.neededButtonType != "assignments" && ctx_r2.contentAssign == "class" && ctx_r2.neededButtonType != undefined);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r2.neededButtonType != "assessments" && ctx_r2.contentAssign == "class" && ctx_r2.neededButtonType != undefined);
} }
function ContentHomeComponent_ng_template_6_div_6_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 35);
    i0.ɵɵtext(1, "Content Folder");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_6_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 173)(1, "div", 174)(2, "label", 175);
    i0.ɵɵtext(3, "Assign Resource For");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 174)(5, "select", 176);
    i0.ɵɵlistener("change", function ContentHomeComponent_ng_template_6_div_6_Template_select_change_5_listener() { i0.ɵɵrestoreView(_r31); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.typeSelection()); });
    i0.ɵɵelementStart(6, "option", 177);
    i0.ɵɵtext(7, "Select type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "option", 34);
    i0.ɵɵtext(9, "Class");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, ContentHomeComponent_ng_template_6_div_6_option_10_Template, 2, 0, "option", 178);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngIf", ctx_r2.contentName);
} }
function ContentHomeComponent_ng_template_6_div_7_mat_chip_row_6_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 184);
    i0.ɵɵtext(1, "cancel");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_6_div_7_mat_chip_row_6_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip-row", 182);
    i0.ɵɵlistener("removed", function ContentHomeComponent_ng_template_6_div_7_mat_chip_row_6_Template_mat_chip_row_removed_0_listener() { const ctx_r32 = i0.ɵɵrestoreView(_r32); const item_r34 = ctx_r32.$implicit; const i_r35 = ctx_r32.index; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.removeSelectedMultiContent(item_r34, i_r35)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, ContentHomeComponent_ng_template_6_div_7_mat_chip_row_6_mat_icon_2_Template, 2, 0, "mat-icon", 183);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", item_r34.name, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.multiContentId.length > 1);
} }
function ContentHomeComponent_ng_template_6_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 173)(1, "label", 179);
    i0.ɵɵtext(2, "Selected Content");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-form-field", 83)(4, "mat-chip-grid", null, 7);
    i0.ɵɵtemplate(6, ContentHomeComponent_ng_template_6_div_7_mat_chip_row_6_Template, 3, 2, "mat-chip-row", 180);
    i0.ɵɵelement(7, "input", 181);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const chipList_r36 = i0.ɵɵreference(5);
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r2.multiContentId);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matChipInputFor", chipList_r36)("matChipInputAddOnBlur", true);
} }
function ContentHomeComponent_ng_template_6_div_9_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 174);
    i0.ɵɵelement(1, "input", 188);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("value", ctx_r2.className);
} }
function ContentHomeComponent_ng_template_6_div_9_div_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r38 = ctx.item;
    i0.ɵɵattribute("title", item_r38.class_name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r38.class_name);
} }
function ContentHomeComponent_ng_template_6_div_9_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 189)(1, "ng-select", 190);
    i0.ɵɵlistener("remove", function ContentHomeComponent_ng_template_6_div_9_div_5_Template_ng_select_remove_1_listener() { i0.ɵɵrestoreView(_r37); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.dummyStudent()); })("change", function ContentHomeComponent_ng_template_6_div_9_div_5_Template_ng_select_change_1_listener() { i0.ɵɵrestoreView(_r37); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.updateClassName()); })("close", function ContentHomeComponent_ng_template_6_div_9_div_5_Template_ng_select_close_1_listener() { i0.ɵɵrestoreView(_r37); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.dummyStudent()); })("clear", function ContentHomeComponent_ng_template_6_div_9_div_5_Template_ng_select_clear_1_listener() { i0.ɵɵrestoreView(_r37); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.clearFormArray()); });
    i0.ɵɵtemplate(2, ContentHomeComponent_ng_template_6_div_9_div_5_ng_template_2_Template, 2, 2, "ng-template", 191);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r2.classData)("multiple", true)("closeOnSelect", false);
    i0.ɵɵattribute("title", ctx_r2.selectedClassName);
} }
function ContentHomeComponent_ng_template_6_div_9_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 192)(1, "ng-select", 193);
    i0.ɵɵlistener("change", function ContentHomeComponent_ng_template_6_div_9_div_6_Template_ng_select_change_1_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.teacherFilter($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r2.teacherData);
} }
function ContentHomeComponent_ng_template_6_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 173)(1, "div", 174)(2, "label", 175);
    i0.ɵɵtext(3, "Class");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, ContentHomeComponent_ng_template_6_div_9_div_4_Template, 2, 1, "div", 185)(5, ContentHomeComponent_ng_template_6_div_9_div_5_Template, 3, 4, "div", 186)(6, ContentHomeComponent_ng_template_6_div_9_div_6_Template, 2, 1, "div", 187);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r2.classDropDown == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.classDropDown == true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.classDropDown == true);
} }
function ContentHomeComponent_ng_template_6_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 173)(1, "div", 174)(2, "label", 175);
    i0.ɵɵtext(3, "Topics");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 174);
    i0.ɵɵelement(5, "ng-select", 194);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("items", ctx_r2.topicsData);
} }
function ContentHomeComponent_ng_template_6_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 173)(1, "div", 174)(2, "label", 175);
    i0.ɵɵtext(3, "Content Folder");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 195);
    i0.ɵɵelement(5, "app-treeview-contentfolder", 196);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("type", "add")("calledForm", "contentLibrary")("treeviewHeight", 300)("selectedbatch", i0.ɵɵpureFunction0(4, _c13));
} }
function ContentHomeComponent_ng_template_6_div_12_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 203);
    i0.ɵɵelement(1, "ng-select", 204);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r2.studentData);
} }
function ContentHomeComponent_ng_template_6_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 173)(1, "div", 189)(2, "label", 175);
    i0.ɵɵtext(3, "Selected Students");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 197)(5, "input", 198);
    i0.ɵɵlistener("change", function ContentHomeComponent_ng_template_6_div_12_Template_input_change_5_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.checkValue1($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "label", 199);
    i0.ɵɵtext(7, " All Students in selected class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 200);
    i0.ɵɵlistener("change", function ContentHomeComponent_ng_template_6_div_12_Template_input_change_8_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.checkValue($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "label", 201);
    i0.ɵɵtext(10, " Specific Students");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(11, ContentHomeComponent_ng_template_6_div_12_div_11_Template, 2, 1, "div", 202);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngIf", ctx_r2.listStudent);
} }
function ContentHomeComponent_ng_template_6_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 173)(1, "div", 205)(2, "div", 206);
    i0.ɵɵelement(3, "input", 207);
    i0.ɵɵelementStart(4, "label", 208);
    i0.ɵɵtext(5, "Download Content");
    i0.ɵɵelementEnd()()()();
} }
function ContentHomeComponent_ng_template_6_div_14_select_5_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 35);
    i0.ɵɵtext(1, "Real-Time Grading");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_6_div_14_select_5_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 211);
    i0.ɵɵlistener("change", function ContentHomeComponent_ng_template_6_div_14_select_5_Template_select_change_0_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.releaseScoreFilter($event)); });
    i0.ɵɵelementStart(1, "option", 177);
    i0.ɵɵtext(2, "Select Response type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "option", 33);
    i0.ɵɵtext(4, "Instructor Graded");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "option", 34);
    i0.ɵɵtext(6, "Auto Graded");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, ContentHomeComponent_ng_template_6_div_14_select_5_option_7_Template, 2, 0, "option", 178);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r2.contentFormat == "3" || !ctx_r2.contentName);
} }
function ContentHomeComponent_ng_template_6_div_14_select_6_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 211);
    i0.ɵɵlistener("change", function ContentHomeComponent_ng_template_6_div_14_select_6_Template_select_change_0_listener($event) { i0.ɵɵrestoreView(_r42); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.releaseScoreFilter($event)); });
    i0.ɵɵelementStart(1, "option", 177);
    i0.ɵɵtext(2, "Select Response type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "option", 33);
    i0.ɵɵtext(4, "Teacher Review Only");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "option", 34);
    i0.ɵɵtext(6, "Automatic Feedback");
    i0.ɵɵelementEnd()();
} }
function ContentHomeComponent_ng_template_6_div_14_span_7_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Responses will be reviewed and graded manually. Scores will be released after the final submission");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_6_div_14_span_7_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Responses will be graded automatically, but scores and feedback will only be released after the final submission");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_6_div_14_span_7_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Responses will be graded automatically and scores will be available immediately after each submission");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_6_div_14_span_7_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Essay will be manually reviewed by the teacher to provide feedback and scores. System generated feedback is not available");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_6_div_14_span_7_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Student can request for Automatic system generated feedback and score. Teacher can provide final feedback and score after the final submission");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_6_div_14_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 212);
    i0.ɵɵtext(1, "(Note: ");
    i0.ɵɵtemplate(2, ContentHomeComponent_ng_template_6_div_14_span_7_span_2_Template, 2, 0, "span", 11)(3, ContentHomeComponent_ng_template_6_div_14_span_7_span_3_Template, 2, 0, "span", 11)(4, ContentHomeComponent_ng_template_6_div_14_span_7_span_4_Template, 2, 0, "span", 11)(5, ContentHomeComponent_ng_template_6_div_14_span_7_span_5_Template, 2, 0, "span", 11)(6, ContentHomeComponent_ng_template_6_div_14_span_7_span_6_Template, 2, 0, "span", 11);
    i0.ɵɵtext(7, ")");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.linkform.controls.releaseScore.value == "0" && ctx_r2.isEssay == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.linkform.controls.releaseScore.value == "1" && ctx_r2.isEssay == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.linkform.controls.releaseScore.value == "2" && ctx_r2.isEssay == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.linkform.controls.releaseScore.value == "0" && ctx_r2.isEssay == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.linkform.controls.releaseScore.value == "1" && ctx_r2.isEssay == "1");
} }
function ContentHomeComponent_ng_template_6_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 173)(1, "div", 174)(2, "label", 175);
    i0.ɵɵtext(3, "Release Score");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 174);
    i0.ɵɵtemplate(5, ContentHomeComponent_ng_template_6_div_14_select_5_Template, 8, 1, "select", 209)(6, ContentHomeComponent_ng_template_6_div_14_select_6_Template, 7, 0, "select", 209)(7, ContentHomeComponent_ng_template_6_div_14_span_7_Template, 8, 5, "span", 210);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r2.isEssay != "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isEssay == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.contentName || ctx_r2.contentName);
} }
function ContentHomeComponent_ng_template_6_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 213)(1, "p", 214);
    i0.ɵɵtext(2, "Auto score release is not applicable for this content");
    i0.ɵɵelementEnd()();
} }
function ContentHomeComponent_ng_template_6_div_16_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 215)(1, "div", 206);
    i0.ɵɵelement(2, "input", 221);
    i0.ɵɵelementStart(3, "label", 222);
    i0.ɵɵtext(4, "Show Timer");
    i0.ɵɵelementEnd()()();
} }
function ContentHomeComponent_ng_template_6_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 173)(1, "div", 215)(2, "div", 206);
    i0.ɵɵelement(3, "input", 216);
    i0.ɵɵelementStart(4, "label", 217);
    i0.ɵɵtext(5, "Workspace");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 215)(7, "div", 206);
    i0.ɵɵelement(8, "input", 218);
    i0.ɵɵelementStart(9, "label", 219);
    i0.ɵɵtext(10, "FeedBack");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(11, ContentHomeComponent_ng_template_6_div_16_div_11_Template, 5, 0, "div", 220);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngIf", ctx_r2.showTimer);
} }
function ContentHomeComponent_ng_template_6_div_17_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 244)(1, "button", 245);
    i0.ɵɵlistener("click", function ContentHomeComponent_ng_template_6_div_17_div_1_div_21_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r44); const list_r45 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.applyToAll(list_r45)); });
    i0.ɵɵtext(2, "Apply To All");
    i0.ɵɵelementEnd()();
} }
function ContentHomeComponent_ng_template_6_div_17_div_1_em_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 246);
    i0.ɵɵtext(1, " StartTime is invalid ");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_6_div_17_div_1_div_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 247);
    i0.ɵɵtext(1, " Select valid Time Period ");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_6_div_17_div_1_em_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 246);
    i0.ɵɵtext(1, " EndTime is invalid ");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_6_div_17_div_1_div_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 247);
    i0.ɵɵtext(1, " Select valid Time Period ");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_6_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 224)(1, "div", 225)(2, "div", 226)(3, "div", 227)(4, "div", 228)(5, "span", 229);
    i0.ɵɵtext(6, "Class Name: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 175);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 230)(10, "span", 229);
    i0.ɵɵtext(11, "Class Start Date: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span", 231);
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "customDateFormat");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 230)(16, "span", 229);
    i0.ɵɵtext(17, "Class End Date: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "span", 175);
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "customDateFormat");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(21, ContentHomeComponent_ng_template_6_div_17_div_1_div_21_Template, 3, 0, "div", 232);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 205)(23, "div", 233)(24, "label", 234);
    i0.ɵɵtext(25, "Start Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "input", 235, 8);
    i0.ɵɵlistener("dateChanged", function ContentHomeComponent_ng_template_6_div_17_div_1_Template_input_dateChanged_26_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.onDateChanged($event)); })("click", function ContentHomeComponent_ng_template_6_div_17_div_1_Template_input_click_26_listener() { i0.ɵɵrestoreView(_r43); const dp_r46 = i0.ɵɵreference(27); return i0.ɵɵresetView(dp_r46.toggleCalendar()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "div", 205)(29, "div", 233)(30, "label", 236);
    i0.ɵɵtext(31, "Start Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "div", 237);
    i0.ɵɵelement(33, "ngb-timepicker", 238);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(34, ContentHomeComponent_ng_template_6_div_17_div_1_em_34_Template, 2, 0, "em", 239)(35, ContentHomeComponent_ng_template_6_div_17_div_1_div_35_Template, 2, 0, "div", 240);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "div", 205)(37, "div", 233)(38, "label", 241);
    i0.ɵɵtext(39, "End Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "input", 242, 9);
    i0.ɵɵlistener("dateChanged", function ContentHomeComponent_ng_template_6_div_17_div_1_Template_input_dateChanged_40_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.onDateChanged1($event)); })("click", function ContentHomeComponent_ng_template_6_div_17_div_1_Template_input_click_40_listener() { i0.ɵɵrestoreView(_r43); const dp1_r47 = i0.ɵɵreference(41); return i0.ɵɵresetView(dp1_r47.toggleCalendar()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(42, "div", 205)(43, "div", 233)(44, "label", 236);
    i0.ɵɵtext(45, "End Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "div", 237);
    i0.ɵɵelement(47, "ngb-timepicker", 243);
    i0.ɵɵtemplate(48, ContentHomeComponent_ng_template_6_div_17_div_1_em_48_Template, 2, 0, "em", 239)(49, ContentHomeComponent_ng_template_6_div_17_div_1_div_49_Template, 2, 0, "div", 240);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const list_r45 = ctx.$implicit;
    const i_r48 = ctx.index;
    const first_r49 = ctx.first;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("col-md-12 mb-2 ", first_r49 ? "" : "mt-1", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", i_r48);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(list_r45["controls"].class_name.value);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(14, 18, list_r45.get("class_startDate").value));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(20, 20, list_r45.get("class_endDate").value));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", first_r49 && ctx_r2.linkform.get("dateRanges")["controls"].length > 1);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("options", ctx_r2.myDpOptions2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("meridian", ctx_r2.meridian)("spinners", ctx_r2.spinner);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.linkform.get("startTime").invalid && (ctx_r2.linkform.get("startTime").dirty || ctx_r2.linkform.get("startTime").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.checkTimeDifference(list_r45));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("options", ctx_r2.myDpOptions1);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("meridian", ctx_r2.meridian)("spinners", ctx_r2.spinner);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.linkform.get("endTime").invalid && (ctx_r2.linkform.get("endTime").dirty || ctx_r2.linkform.get("endTime").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.checkTimeDifference(list_r45));
} }
function ContentHomeComponent_ng_template_6_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 173);
    i0.ɵɵtemplate(1, ContentHomeComponent_ng_template_6_div_17_div_1_Template, 50, 22, "div", 223);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.linkform.get("dateRanges")["controls"]);
} }
function ContentHomeComponent_ng_template_6_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 245);
    i0.ɵɵlistener("click", function ContentHomeComponent_ng_template_6_button_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r50); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.close1()); });
    i0.ɵɵtext(1, "Cancel");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_6_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 245);
    i0.ɵɵlistener("click", function ContentHomeComponent_ng_template_6_button_20_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r51); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.cancel()); });
    i0.ɵɵtext(1, "Cancel");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_6_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 248);
    i0.ɵɵlistener("click", function ContentHomeComponent_ng_template_6_button_21_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r52); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.submitAssign("1")); });
    i0.ɵɵtext(1, "Submit");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r2.checkAutoRelease);
} }
function ContentHomeComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 164)(1, "div", 165)(2, "h4", 166);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 151)(5, "form", 167);
    i0.ɵɵtemplate(6, ContentHomeComponent_ng_template_6_div_6_Template, 11, 1, "div", 168)(7, ContentHomeComponent_ng_template_6_div_7_Template, 8, 3, "div", 168);
    i0.ɵɵelementStart(8, "div");
    i0.ɵɵtemplate(9, ContentHomeComponent_ng_template_6_div_9_Template, 7, 3, "div", 168)(10, ContentHomeComponent_ng_template_6_div_10_Template, 6, 1, "div", 168)(11, ContentHomeComponent_ng_template_6_div_11_Template, 6, 5, "div", 168)(12, ContentHomeComponent_ng_template_6_div_12_Template, 12, 1, "div", 168)(13, ContentHomeComponent_ng_template_6_div_13_Template, 6, 0, "div", 168)(14, ContentHomeComponent_ng_template_6_div_14_Template, 8, 3, "div", 168)(15, ContentHomeComponent_ng_template_6_div_15_Template, 3, 0, "div", 169)(16, ContentHomeComponent_ng_template_6_div_16_Template, 12, 1, "div", 168)(17, ContentHomeComponent_ng_template_6_div_17_Template, 2, 1, "div", 168);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "div", 170);
    i0.ɵɵtemplate(19, ContentHomeComponent_ng_template_6_button_19_Template, 2, 0, "button", 171)(20, ContentHomeComponent_ng_template_6_button_20_Template, 2, 0, "button", 171)(21, ContentHomeComponent_ng_template_6_button_21_Template, 2, 1, "button", 172);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.contentName ? ctx_r2.contentName : "Multi Content Assign");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formGroup", ctx_r2.linkform);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.firstAssign == true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.multiContentId.length != 0 && !ctx_r2.contentName);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.resourcetype == true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.resourcetype == true && ctx_r2.topicsData.length != 0 && ctx_r2.linkform.controls.classSelect.value.length <= 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showBatch);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.resourcetype == true && ctx_r2.linkform.controls.classSelect.value.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.resourcetype && (!ctx_r2.contentName && ctx_r2.downloadContentAvailable || ctx_r2.contentName && ctx_r2.contentDetaildata && (ctx_r2.contentDetaildata == null ? null : ctx_r2.contentDetaildata.download) != "0"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.resourcetype);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.checkAutoRelease);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.resourcetype && (ctx_r2.contentFormat == "3" && ctx_r2.contentName || !ctx_r2.contentName));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showBatch == false);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.firstAssign == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.firstAssign == true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.defaultShow == true);
} }
function ContentHomeComponent_ng_template_8_div_11_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 33);
    i0.ɵɵtext(1, "Instructor Graded");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_8_div_11_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 34);
    i0.ɵɵtext(1, "Auto Graded");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_8_div_11_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 33);
    i0.ɵɵtext(1, "Teacher Review Only");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_8_div_11_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 34);
    i0.ɵɵtext(1, "Automatic Feedback");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_8_div_11_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 35);
    i0.ɵɵtext(1, "Real-Time Grading");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_8_div_11_span_13_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Responses will be reviewed and graded manually. Scores will be released after the final submission");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_8_div_11_span_13_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Responses will be graded automatically, but scores and feedback will only be released after the final submission");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_8_div_11_span_13_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Responses will be graded automatically and scores will be available immediately after each submission");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_8_div_11_span_13_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Essay will be manually reviewed by the teacher to provide feedback and scores. System generated feedback is not available");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_8_div_11_span_13_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Student can request for Automatic system generated feedback and score. Teacher can provide final feedback and score after the final submission");
    i0.ɵɵelementEnd();
} }
function ContentHomeComponent_ng_template_8_div_11_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 256);
    i0.ɵɵtext(1, "Note: ");
    i0.ɵɵtemplate(2, ContentHomeComponent_ng_template_8_div_11_span_13_span_2_Template, 2, 0, "span", 11)(3, ContentHomeComponent_ng_template_8_div_11_span_13_span_3_Template, 2, 0, "span", 11)(4, ContentHomeComponent_ng_template_8_div_11_span_13_span_4_Template, 2, 0, "span", 11)(5, ContentHomeComponent_ng_template_8_div_11_span_13_span_5_Template, 2, 0, "span", 11)(6, ContentHomeComponent_ng_template_8_div_11_span_13_span_6_Template, 2, 0, "span", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.linkform.controls.releaseScore.value == "0" && ctx_r2.isEssay == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.linkform.controls.releaseScore.value == "1" && ctx_r2.isEssay == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.linkform.controls.releaseScore.value == "2" && ctx_r2.isEssay == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.linkform.controls.releaseScore.value == "0" && ctx_r2.isEssay == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.linkform.controls.releaseScore.value == "1" && ctx_r2.isEssay == "1");
} }
function ContentHomeComponent_ng_template_8_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 173)(1, "div", 174)(2, "label");
    i0.ɵɵtext(3, "Release Score");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 174)(5, "select", 252);
    i0.ɵɵlistener("change", function ContentHomeComponent_ng_template_8_div_11_Template_select_change_5_listener($event) { i0.ɵɵrestoreView(_r54); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.releaseScoreFilter($event)); });
    i0.ɵɵelementStart(6, "option", 177);
    i0.ɵɵtext(7, "Select Response type");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, ContentHomeComponent_ng_template_8_div_11_option_8_Template, 2, 0, "option", 253)(9, ContentHomeComponent_ng_template_8_div_11_option_9_Template, 2, 0, "option", 254)(10, ContentHomeComponent_ng_template_8_div_11_option_10_Template, 2, 0, "option", 253)(11, ContentHomeComponent_ng_template_8_div_11_option_11_Template, 2, 0, "option", 254)(12, ContentHomeComponent_ng_template_8_div_11_option_12_Template, 2, 0, "option", 178);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, ContentHomeComponent_ng_template_8_div_11_span_13_Template, 7, 5, "span", 255);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r2.isEssay == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isEssay == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isEssay == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isEssay == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isEssay == "0" && (ctx_r2.contentFormat == "3" || !ctx_r2.contentName));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.contentName || ctx_r2.contentName);
} }
function ContentHomeComponent_ng_template_8_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 213)(1, "p", 214);
    i0.ɵɵtext(2, "Auto score release is not applicable for this content");
    i0.ɵɵelementEnd()();
} }
function ContentHomeComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 165)(1, "h4", 249);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 151)(4, "form", 167)(5, "div", 173)(6, "div", 174)(7, "label");
    i0.ɵɵtext(8, "Content Folder");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 174);
    i0.ɵɵelement(10, "input", 250);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, ContentHomeComponent_ng_template_8_div_11_Template, 14, 6, "div", 168)(12, ContentHomeComponent_ng_template_8_div_12_Template, 3, 0, "div", 169);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 170)(14, "button", 245);
    i0.ɵɵlistener("click", function ContentHomeComponent_ng_template_8_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r53); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close1()); });
    i0.ɵɵtext(15, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 251);
    i0.ɵɵlistener("click", function ContentHomeComponent_ng_template_8_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r53); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submitAssign("2")); });
    i0.ɵɵtext(17, "Submit");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.contentName);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formGroup", ctx_r2.linkform);
    i0.ɵɵadvance(6);
    i0.ɵɵpropertyInterpolate("value", ctx_r2.className);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.resourcetype && !ctx_r2.showBatch && ctx_r2.allowScore);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.checkAutoRelease);
} }
function ContentHomeComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 165)(1, "h4", 257)(2, "b");
    i0.ɵɵtext(3, "Delete Content From Repository");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 151)(5, "div", 258)(6, "div", 158)(7, "div", 259)(8, "h5", 260);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(10, "div", 170)(11, "button", 261);
    i0.ɵɵlistener("click", function ContentHomeComponent_ng_template_10_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r55); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵtext(12, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 70);
    i0.ɵɵlistener("click", function ContentHomeComponent_ng_template_10_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r55); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.deleteContent(ctx_r2.deleteValue)); });
    i0.ɵɵtext(14, "Confirm");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" Are you sure you want to delete the \"", ctx_r2.deleteValue.name, "\"?");
} }
function ContentHomeComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 147)(1, "h4", 156)(2, "b");
    i0.ɵɵtext(3, "Add Content");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "i", 157);
    i0.ɵɵlistener("click", function ContentHomeComponent_ng_template_12_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r56); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 151)(6, "div", 158)(7, "div", 262)(8, "div", 263)(9, "div", 264);
    i0.ɵɵlistener("click", function ContentHomeComponent_ng_template_12_Template_div_click_9_listener() { i0.ɵɵrestoreView(_r56); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵelement(10, "img", 265);
    i0.ɵɵelementStart(11, "h4", 266);
    i0.ɵɵtext(12, "Create From PDF or Link");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "h5", 266);
    i0.ɵɵtext(14, "Upload Content as a PDF format or upload link and proceed to assign it to your students");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(15, "div", 262)(16, "div", 267)(17, "div", 268);
    i0.ɵɵlistener("click", function ContentHomeComponent_ng_template_12_Template_div_click_17_listener() { i0.ɵɵrestoreView(_r56); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.callCreateFrom()); });
    i0.ɵɵelement(18, "img", 269);
    i0.ɵɵelementStart(19, "h4", 266);
    i0.ɵɵtext(20, "Create From Scratch");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "h5", 266);
    i0.ɵɵtext(22, "Write your content and proceed to assign it to your student");
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("routerLink", "/Books/create-Books/add");
} }
function ContentHomeComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 147)(1, "h4", 156)(2, "b");
    i0.ɵɵtext(3, "Select type of the content");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "i", 157);
    i0.ɵɵlistener("click", function ContentHomeComponent_ng_template_14_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r57); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 151)(6, "div", 158)(7, "div", 159);
    i0.ɵɵelement(8, "img", 270);
    i0.ɵɵelementStart(9, "button", 271);
    i0.ɵɵlistener("click", function ContentHomeComponent_ng_template_14_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r57); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵtext(10, "Add Resources");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 159);
    i0.ɵɵelement(12, "img", 272);
    i0.ɵɵelementStart(13, "button", 161);
    i0.ɵɵlistener("click", function ContentHomeComponent_ng_template_14_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r57); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.scratchTypeQuestions("assignment")); });
    i0.ɵɵtext(14, "Add Assignment");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 159);
    i0.ɵɵelement(16, "img", 273);
    i0.ɵɵelementStart(17, "button", 161);
    i0.ɵɵlistener("click", function ContentHomeComponent_ng_template_14_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r57); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.scratchTypeQuestions("assessment")); });
    i0.ɵɵtext(18, "Add Assessment");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("disabled", ctx_r2.neededButtonType != "resources" && ctx_r2.contentAssign == "class" && ctx_r2.neededButtonType != undefined)("routerLink", "/content-text-resource/text-resource/add");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r2.neededButtonType != "assignments" && ctx_r2.contentAssign == "class" && ctx_r2.neededButtonType != undefined);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r2.neededButtonType != "assessments" && ctx_r2.contentAssign == "class" && ctx_r2.neededButtonType != undefined);
} }
export class ContentHomeComponent {
    constructor(auth, config, assessment, route, formBuilder, sanitizer, modalService, router, classService, creatorService, toastr, common, commondata, navServices, datePipe, validationService, cdr, newSubject) {
        this.auth = auth;
        this.config = config;
        this.assessment = assessment;
        this.route = route;
        this.formBuilder = formBuilder;
        this.sanitizer = sanitizer;
        this.modalService = modalService;
        this.router = router;
        this.classService = classService;
        this.creatorService = creatorService;
        this.toastr = toastr;
        this.common = common;
        this.commondata = commondata;
        this.navServices = navServices;
        this.datePipe = datePipe;
        this.validationService = validationService;
        this.cdr = cdr;
        this.newSubject = newSubject;
        this.suppressDocumentClick = false;
        this.thumbnailFallbacks = {
            '1': 'assets/images/ristaschool/resource.png',
            '2': 'assets/images/ristaschool/option-writing-checkbox-concepts-survey.png',
            '3': 'assets/images/ristaschool/assessment.png',
            default: 'assets/images/ristaschool/resource.png'
        };
        this.setDate = new Date().toLocaleString('en-US', { timeZone: timeZone.location });
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getMonth() + 1,
                day: new Date(this.setDate).getDate() != 1 ? new Date(this.setDate).getDate() - 1 : -1,
            },
        };
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: this.myDpOptions.disableUntil.year,
                month: this.myDpOptions.disableUntil.month,
                day: this.myDpOptions.disableUntil.day
            },
        };
        this.myDpOptions2 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: this.myDpOptions.disableUntil.year,
                month: this.myDpOptions.disableUntil.month,
                day: this.myDpOptions.disableUntil.day
            },
        };
        this.contentdata = [];
        this.checkAutoRelease = true;
        this.tagid = [];
        this.gradeid = [];
        this.subjectid = [];
        this.teacherData = [];
        this.description = '';
        this.exactSearch = false;
        this.pageNo = 1;
        // Pagination properties
        this.itemsPerPage = 10;
        this.totalPages = 0;
        this.paginationPages = [];
        this.showPagination = true;
        // Tab management
        this.activeTab = 'library';
        this.classData = [];
        this.classDataSample = [];
        this.topicsData = [];
        this.assignIcon = true;
        this.direction = '';
        // public contentIcon: boolean;
        this.manageOwnContent = true;
        this.manageInstitutionContent = true;
        this.selector = '.content-results-wrapper';
        this.searchKey = '';
        this.selectAuthored = '';
        this.selectDraft = '';
        this.backContentIcon = true;
        this.isLoading = false;
        this.clearSession = true;
        this.contentAssign = '';
        this.showInformation = true;
        this.selectedClassName = '';
        this.neededButtonType = '';
        this.showModal = false;
        this.multiContentId = [];
        this.downloadContentAvailable = false;
        this.settingList = [];
        this.isEssay = '';
        this.showTimer = false;
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.assessmentUpload = false;
        if (this.auth.getRoleId() != '3') {
            this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        }
        this.dateValidation = true;
        this.model = { isRange: false, singleDate: { jsDate: new Date() } };
        if (this.auth.getSessionData('batchassign') == '1' || this.auth.getSessionData('batchassign') == '3') {
            this.choosedData = JSON.parse(this.auth.getSessionData('card-data'));
        }
        else {
            this.choosedData = JSON.parse(this.auth.getSessionData('classbatch'));
        }
        this.contentAssign = this.auth.getSessionData('assignedForm');
        console.log(this.contentAssign, 'content');
        this.randomSize = true;
        this.pageNo = 1;
        this.sortdetails = false;
        this.listStudent = false;
        this.meridian = true;
        this.spinner = false;
        this.assignIcon = false;
        this.detailButtonPreview = false;
        this.webhost = this.config.getimgUrl();
        if (this.auth.getRoleId() == '3' || this.schoolStatus?.length != 0) {
            this.newSubject.schoolChange.subscribe((res) => {
                if (res != '') {
                    if (this.router.url.includes('content-home')) {
                        this.contentdata = [];
                        this.pageNo = 1;
                        this.init();
                    }
                }
                else {
                    this.init();
                }
            });
        }
        if (this.auth.getRoleId() == '2' || this.auth.getRoleId() == '6') {
            this.assignDirect = true;
            // this.allowCurriculum = true;
        }
        else if (this.auth.getRoleId() == '3') {
            this.assignIcon = true;
            this.showIcon = false;
            this.detailButtonPreview = true;
            // this.allowCurriculum = true;
        }
        else if (this.auth.getRoleId() == '4') {
            this.assignIcon = false;
            this.showIcon = true;
            this.assignDirect = true;
            this.schoolListDetails = JSON.parse(this.auth.getSessionData('rista_data1'));
            this.browseAllAssign = false;
        }
        if (this.auth.getSessionData('resourceAccess') == 'true') {
            console.log('resourceAccess');
            this.showIcon = true;
            this.assignIcon = true;
            this.assignDirect = false;
            this.backContentIcon = false;
            if (this.auth.getSessionData('batchassign') == '1' || this.auth.getSessionData('batchassign') == '3') {
                this.className = this.choosedData[0].class_name;
                this.classid = this.choosedData[0].class_id;
            }
            else if (this.auth.getSessionData('batchassign') == '2') {
                this.className = this.choosedData.batch_name;
                this.classid = this.choosedData.batch_id;
            }
            console.log(this.className, 'className');
            this.browseAllAssign = false;
        }
        else if (this.auth.getSessionData('browseAll') == 'true') {
            this.browseAllAssign = true;
            this.assignDirect = false;
        }
        else {
            this.auth.removeSessionData('assignedForm');
        }
        this.linkform = this.formBuilder.group({
            classname: [''],
            startDate: '',
            endDate: '',
            startTime: '',
            endTime: '',
            radio: ['1'],
            typeSelection: ['n/a'],
            batch: [null],
            specificstudent: [[]],
            classSelect: [[]],
            topicSelect: [null],
            teacherSelect: [],
            releaseScore: '0',
            notes: '',
            downloadcontent: '',
            feedback: false,
            showTimer: false,
            workspace: false,
            dateRanges: this.formBuilder.array([])
        });
        const stObject = { hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00') };
        this.linkform.controls.startTime.patchValue(stObject);
        const etObject = { hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00') };
        this.linkform.controls.endTime.patchValue(etObject);
        this.cclist = [];
        this.auth.removeSessionData('updatedStudent');
        this.auth.removeSessionData('readonly_data');
        this.auth.removeSessionData('readonly_startdate');
    }
    ngOnInit() {
        this.allowDropDown = false;
        this.newSubject.allowSchoolChange(this.allowDropDown);
        this.totalRecords = 0;
        this.threshhold = 0;
        this.contentdata = [];
        this.contentdatabackup = [];
        this.commondata.showLoader(false);
        this.auth.removeSessionData('backOption');
        if (this.auth.getRoleId() == '2' || this.auth.getRoleId() == '6') {
            this.classList();
            if (this.auth.getSessionData('batchassign') == '1' || this.auth.getSessionData('batchassign') == '3') {
                this.liststudent();
            }
        }
        else if (this.auth.getRoleId() == '4') {
            if (this.auth.getSessionData('resourceAccess') == 'true') {
                if (this.auth.getSessionData('batchassign') == '1' || this.auth.getSessionData('batchassign') == '3') {
                    this.classList();
                    this.liststudent();
                }
            }
        }
        this.teacherList();
        if (this.sortfilter == '0' || this.sortfilter == '-1' || this.sortfilter == 'AZ' || this.sortfilter == 'ZA') {
            this.contentUserid = '0';
        }
        else if (this.sortfilter != '0' && this.sortfilter != '-1' || this.sortfilter != 'AZ' || this.sortfilter != 'ZA') {
            this.contentUserid = this.sortfilter;
        }
        if (this.auth.getSessionData('resourceAccess') == 'true') {
            this.allowDropDown = true;
            this.newSubject.allowSchoolChange(this.allowDropDown);
        }
        this.neededButtonType = this.auth.getSessionData('return');
    }
    ngOnDestroy() {
        if (this.clearSession) {
            this.auth.setSessionData('resourceAccess', false);
        }
        this.auth.removeSessionData('allowCurriculum');
    }
    get dateRanges() {
        return this.linkform.get('dateRanges');
    }
    addDatePicker(classData = { class_id: '', class_name: '', start_date: '', end_date: '' }) {
        const stObject = { hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00') };
        const etObject = { hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00') };
        return this.formBuilder.group({
            startDate: [null],
            endDate: [null],
            startTime: [stObject],
            endTime: [etObject],
            class_startDate: [classData.start_date],
            class_endDate: [classData.end_date],
            class_id: [classData.class_id],
            class_name: [classData.class_name]
        });
    }
    addClassDate(classData = { class_id: '', class_name: '', start_date: '', end_date: '' }) {
        this.dateRanges.push(this.addDatePicker(classData));
    }
    removeDatePicker(index) {
        this.dateRanges.removeAt(index);
    }
    init() {
        this.roleid = this.auth.getRoleId();
        this.schoolListDetails = JSON.parse(this.auth.getSessionData('rista_data1'));
        this.manageOwnContent = this.auth.manageOwnContent;
        this.manageInstitutionContent = this.auth.manageInstitutionContent;
        // if (this.roleid == '4') {
        // if (this.schoolListDetails.permissions[4].permission[0].status == 1) {
        //     // this.contentIcon = true;
        // } else if (this.schoolListDetails.permissions[4].permission[0].status == 0) {
        //     // this.contentIcon = false;
        // }
        // if (this.schoolListDetails.permissions[4].permission[1].status == 1) {
        //     this.allowEdit = true;
        // } else if (this.schoolListDetails.permissions[4].permission[1].status == 0) {
        //     this.allowEdit = false;
        // }
        // if (this.schoolListDetails.individual_teacher != 0) {
        //     this.allowCurriculum = true;
        // } else {
        //     if (this.schoolListDetails.permissions[6].permission[3].status == 1) {
        //         this.allowCurriculum = true;
        //     } else if (this.schoolListDetails.permissions[6].permission[3].status == 0) {
        //         this.allowCurriculum = false;
        //     }
        // }
        // }
        if (this.auth.getSessionData('resourceAccess') == 'true') {
            this.libraryselection = this.auth.getSessionData('contentType');
        }
        this.settingList = JSON.parse(this.auth.getSessionData('settingList')) ?? [];
        console.log(this.settingList, 'settingList');
        this.getSearch_Filter();
        this.sortlist();
        this.subjectList();
        this.gradeList();
        this.tagList();
        this.classList();
    }
    onScrollDown(ev) {
        this.direction = 'down';
        this.pageNo++;
        this.sortlist();
    }
    onUp(ev) {
        this.direction = 'up';
    }
    loadNextPage() {
        this.pageNo++;
        this.sortlist();
        // Scroll to top of content list
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    loadPreviousPage() {
        if (this.pageNo > 1) {
            this.pageNo--;
            this.contentdata = []; // Clear current data
            this.sortlist();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    sortExact() {
        this.pageNo = 1;
        if (this.searchKey != '') {
            this.sortlist();
        }
        this.setSearch_Filter();
    }
    updateFilter(event) {
        this.searchKey = event;
        clearTimeout(this.searchTime);
        this.searchTime = setTimeout(() => {
            this.contentdata = []; // Clear existing data for new search
            this.pageNo = 1;
            this.sortlist();
            this.setSearch_Filter();
        }, 500); // Reduced from 1200ms to 500ms for better responsiveness
    }
    onDateChanged1(event) {
        this.myDpOptions.disableSince = event.date;
    }
    enterList() {
        if (this.auth.getSessionData('batchassign') == '2') {
            this.router.navigate(['class/view-assign/2']);
        }
        else {
            this.classDetailService();
        }
    }
    classDetailService() {
        this.commondata.showLoader(true);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.choosedData[0].class_id
        };
        this.classService.classDetails(data).subscribe((successData) => {
            this.enterListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_enter');
        });
    }
    enterListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.auth.setSessionData('classView', true);
            this.detailData = successData.ResponseObject;
            this.auth.removeSessionData('content_assign');
            this.auth.setSessionData('card-data', JSON.stringify(this.detailData));
            this.auth.setSessionData('studentlist', JSON.stringify(this.detailData[0].students));
            this.auth.setSessionData('studentlist1', JSON.stringify(this.detailData[0].students));
            if (this.auth.getSessionData('resourceAccess') == 'true') {
                if (this.auth.getSessionData('batchassign') == '1') {
                    this.router.navigate(['/class/topicsAndCurriculum/1']);
                }
                else if (this.auth.getSessionData('batchassign') == '3') {
                    this.router.navigate(['class/topicsAndCurriculum/3']);
                }
            }
            this.auth.removeSessionData('assignedForm');
        }
    }
    classList() {
        const data = {
            platform: 'web',
            type: '5',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0'
        };
        this.classService.classesList(data).subscribe((successData) => {
            this.classListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_classLst');
        });
    }
    classListSuccess(successData) {
        if (successData.IsSuccess) {
            this.classData = successData.ResponseObject;
            this.classDataSample = successData.ResponseObject;
        }
    }
    topicsList(classID) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: classID,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        this.classService.topicList(data).subscribe((successData) => {
            if (successData.IsSuccess) {
                successData.ResponseObject.forEach((items) => {
                    items.disabled = false;
                });
                this.topicsData = successData.ResponseObject;
            }
        }, (error) => {
            console.log(error, 'error_topicList');
        });
    }
    liststudent() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: [this.choosedData[0].class_id]
        };
        this.creatorService.classList(data).subscribe((successData) => {
            if (successData.IsSuccess) {
                this.studentData = successData.ResponseObject;
            }
        }, (error) => {
            console.error(error, 'error_studentList');
        });
    }
    disableTopicsByClass(selectedTopics) {
        const selectedClassIds = new Set(selectedTopics.map(topic => topic.class_id));
        const selectedTopicIds = new Set(selectedTopics.map(topic => topic.topic_id));
        this.topicsData = this.topicsData.map(topic => {
            return {
                ...topic,
                // Disable topics with matching `class_id` if they are not selected
                disabled: selectedClassIds.has(topic.class_id) && !selectedTopicIds.has(topic.topic_id)
            };
        });
    }
    clearFormArray() {
        this.dateRanges.clear();
    }
    updateClassName() {
        this.selectedClassName = '';
        const classID = this.linkform.controls.classSelect.value;
        this.classData.forEach((items) => {
            if (classID.some((data => data == items.class_id))) {
                this.selectedClassName = this.selectedClassName == '' ? items.class_name :
                    this.selectedClassName + ', ' + items.class_name;
            }
        });
    }
    dummyStudent() {
        const classID = this.linkform.controls.classSelect.value;
        const selectedClass = [];
        this.classData.forEach((items) => {
            if (classID.some((data => data == items.class_id))) {
                selectedClass.push(items);
            }
        });
        if (classID.length != 0) {
            this.topicsList(classID);
        }
        else {
            this.linkform.controls.batch.patchValue(null);
        }
        selectedClass.forEach((item) => {
            const classIds = this.linkform.get('dateRanges').value.map(control => control.class_id);
            if (!classIds.includes(item.class_id)) {
                this.addClassDate(item);
                this.linkform.controls.specificstudent.patchValue([]);
                this.classbatchid = selectedClass[0].batch_id;
            }
        });
        this.linkform.get('dateRanges').value.forEach((control, index) => {
            const classId = control.class_id;
            const existsInEvent = selectedClass.some(item => item.class_id === classId);
            const formControlName = this.linkform['controls'].dateRanges['controls'][index]['controls'];
            if (!existsInEvent) {
                this.removeDatePicker(index);
            }
            selectedClass.forEach((items) => {
                if (items.class_id == classId) {
                    if (items.start_date != '0000-00-00') {
                        const sd = items.end_date.split('-');
                        const sdObject = {
                            isRange: false,
                            singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) },
                            dateRange: null
                        };
                        const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
                        const dropped = dr1.split('-');
                        const droppedObject = {
                            isRange: false,
                            singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
                            dateRange: null
                        };
                        formControlName.startDate.patchValue(droppedObject);
                        this.myDpOptions2 = {};
                        this.myDpOptions2 = {
                            dateRange: false,
                            dateFormat: dateOptions.pickerFormat,
                            firstDayOfWeek: 'su',
                            disableUntil: {
                                year: this.myDpOptions.disableUntil.year,
                                month: this.myDpOptions.disableUntil.month,
                                day: this.myDpOptions.disableUntil.day
                            }
                        };
                        formControlName.class_startDate.patchValue(items.start_date);
                    }
                    else {
                        const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
                        const dropped = dr1.split('-');
                        const droppedObject = {
                            isRange: false,
                            singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
                            dateRange: null
                        };
                        formControlName.startDate.patchValue(droppedObject);
                    }
                    if (items.end_date != '0000-00-00') {
                        const sd = items.end_date.split('-');
                        const sdObject = {
                            isRange: false,
                            singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) },
                            dateRange: null
                        };
                        this.myDpOptions1 = {};
                        this.myDpOptions1 = {
                            dateRange: false,
                            dateFormat: dateOptions.pickerFormat,
                            firstDayOfWeek: 'su',
                            disableUntil: {
                                year: this.myDpOptions.disableUntil.year,
                                month: this.myDpOptions.disableUntil.month,
                                day: this.myDpOptions.disableUntil.day
                            }
                        };
                        formControlName.class_endDate.patchValue(items.end_date);
                    }
                    else {
                        formControlName.endDate.patchValue(null);
                    }
                }
            });
        });
        const classIds = selectedClass.map(control => control.class_id);
        if (classIds.length != 0) {
            this.liststudent1(classIds);
        }
    }
    applyToAll(data) {
        console.log(data, 'data');
        this.linkform.get('dateRanges').value.forEach((control, index) => {
            const formControlName = this.linkform['controls'].dateRanges['controls'][index]['controls'];
            if (index != 0) {
                console.log('function');
                formControlName.startDate.patchValue(data.value.startDate);
                formControlName.endDate.patchValue(data.value.endDate);
                formControlName.startTime.patchValue(data.value.startTime);
                formControlName.endTime.patchValue(data.value.endTime);
            }
        });
    }
    teacherFilter(event) {
        console.log(event);
        this.linkform.controls.classSelect.patchValue([]);
        this.linkform.controls.specificstudent.patchValue([]);
        this.linkform.controls.topicSelect.patchValue(null);
        this.topicsData = [];
        this.studentData = [];
        this.linkform.controls.endDate.patchValue(null);
        if (event != undefined) {
            this.classData = this.classDataSample.filter((val) => {
                const teacher_id = val.teacher_id.split(',');
                return teacher_id.includes(event.teacher_id);
            });
        }
        else {
            this.classData = this.classDataSample;
        }
        console.log(this.classData, 'classData');
        console.log(this.classDataSample, 'classDataSample');
    }
    releaseScoreFilter(event) {
        this.checkAutoRelease = true;
        if (event.target.value == '1' && (this.multiContentId.length <= 1 || this.contentName)) {
            this.releaseScoreCheck();
        }
    }
    releaseScoreCheck() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.multiContentId.length == 1 && !this.contentName ? this.multiContentId[0].content_id : this.contentid
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
                this.linkform.controls.releaseScore.patchValue(this.isEssay == '1' ? '1' : '0');
                this.checkAutoRelease = true;
                this.cdr.detectChanges();
            }, 3000);
        }
    }
    liststudent1(id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: id
        };
        this.creatorService.classList(data).subscribe((successData) => {
            if (successData.IsSuccess) {
                this.studentData = successData.ResponseObject;
                this.studentData = this.studentData.filter((value, index, self) => index === self.findIndex((t) => t.student_id === value.student_id));
            }
        }, (error) => {
            console.error(error, 'error_studentList');
        });
    }
    detailpreviewlist(id, type) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.contentdata[id].content_id,
            content_format: this.contentdata[id].content_format,
            school_id: this.auth.getSessionData('school_id')
        };
        this.creatorService.detaillist(data).subscribe((successData) => {
            this.contentDetailsSuccess(successData, type, data);
        }, (error) => {
            console.error(error, 'error_contentDetails');
        });
    }
    contentDetailsSuccess(successData, type, data) {
        if (successData.IsSuccess) {
            this.contentDetaildata = successData.ResponseObject;
            this.contentName = this.contentDetaildata.name;
            this.contentid = this.contentDetaildata.content_id;
            this.contentType = this.contentDetaildata.content_type;
            this.contentFormat = this.contentDetaildata.content_format;
            this.checkQuestion = this.contentDetaildata.without_question;
            this.profileurl = this.contentDetaildata.profile_url;
            this.createdby = this.contentDetaildata.created_by;
            this.gradename = this.contentDetaildata.grade_name;
            this.subjectname = this.contentDetaildata.subject_name;
            this.tags = this.contentDetaildata.tags;
            this.noofquestions = this.contentDetaildata.no_of_questions;
            this.totalpoints = this.contentDetaildata.total_points;
            this.description = this.contentDetaildata.description;
            this.releaseGrade = this.contentDetaildata.allow_autograde;
            this.assignType = type;
            if (this.contentDetaildata.status == '1') {
                this.details = 'Published';
            }
            else if (this.contentDetaildata.status == '5') {
                this.details = 'Draft';
            }
            if (type == 'assign') {
                if (this.details != 'Draft') {
                    if (this.contentType == this.auth.getSessionData('contentType')) {
                        if (this.auth.getSessionData('batchassign') == '1' || this.auth.getSessionData('batchassign') == '3') {
                            this.linkform.controls.downloadcontent.patchValue(this.contentDetaildata.download == '1');
                            this.linkform.controls.workspace.patchValue(false);
                            this.linkform.controls.feedback.patchValue(false);
                            this.linkform.controls.notes.patchValue('');
                            this.topicsList(this.classid);
                            this.linkform.controls.classname.patchValue(this.choosedData[0].class_name ? this.choosedData[0].class_name : '');
                            setTimeout(() => {
                                this.linkform.controls.releaseScore.patchValue(this.isEssay == '1' ? '1' : '0');
                            });
                            this.modalRef = this.modalService.open(this.addAssign, {
                                centered: false,
                                scrollable: false,
                                windowClass: 'assignPopUp',
                                size: 'xl',
                                backdrop: 'static'
                            });
                            this.classDropDown = false;
                            this.resourcetype = true;
                            this.addClassDate();
                            this.defaultShow = true;
                            this.firstAssign = false;
                            this.assign = '1';
                            this.showBatch = false;
                            this.allowScore = true;
                            this.linkform.controls.classSelect.patchValue(this.choosedData[0].class_name ? [this.choosedData[0].class_id] : []);
                            // setTimeout(() => {
                            this.linkform.get('dateRanges').value.forEach((control, index) => {
                                const formControlName = this.linkform['controls'].dateRanges['controls'][index]['controls'];
                                formControlName.class_name.patchValue(this.choosedData[0].class_name ? this.choosedData[0].class_name : '');
                                formControlName.class_id.patchValue(this.choosedData[0].class_id ? this.choosedData[0].class_id : '');
                                if (this.choosedData[0].start_date != '0000-00-00') {
                                    const sd = this.choosedData[0].start_date.split('-');
                                    const sdObject = {
                                        isRange: false,
                                        singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) },
                                        dateRange: null
                                    };
                                    const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
                                    const dropped = dr1.split('-');
                                    const droppedObject = {
                                        isRange: false,
                                        singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
                                        dateRange: null
                                    };
                                    formControlName.startDate.patchValue(droppedObject);
                                    this.myDpOptions1 = {};
                                    this.myDpOptions1 = {
                                        dateRange: false,
                                        dateFormat: dateOptions.pickerFormat,
                                        firstDayOfWeek: 'su',
                                        disableUntil: {
                                            year: parseInt(sd[0]),
                                            month: parseInt(sd[1]),
                                            day: parseInt(sd[2]) - 1
                                        },
                                    };
                                    formControlName.class_startDate.patchValue(this.choosedData[0].start_date);
                                }
                                else {
                                    const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
                                    const dropped = dr1.split('-');
                                    const droppedObject = {
                                        isRange: false,
                                        singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
                                        dateRange: null
                                    };
                                    formControlName.startDate.patchValue(droppedObject);
                                }
                                if (this.choosedData[0].end_date != '0000-00-00') {
                                    const sd = this.choosedData[0].end_date.split('-');
                                    const sdObject = {
                                        isRange: false,
                                        singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) },
                                        dateRange: null
                                    };
                                    this.myDpOptions1 = {};
                                    this.myDpOptions1 = {
                                        dateRange: false,
                                        dateFormat: dateOptions.pickerFormat,
                                        firstDayOfWeek: 'su',
                                        disableUntil: {
                                            year: this.myDpOptions.disableUntil.year,
                                            month: this.myDpOptions.disableUntil.month,
                                            day: this.myDpOptions.disableUntil.day
                                        },
                                    };
                                    formControlName.class_endDate.patchValue(this.choosedData[0].end_date);
                                }
                                else {
                                    formControlName.endDate.patchValue(null);
                                }
                            });
                            // }, 1000)
                            this.allowScore = this.contentName ? this.releaseGrade == '1' && this.contentType != '1' && this.checkQuestion != 1
                                : this.settingList[2]?.value == 1 ?? true;
                        }
                        else if (this.auth.getSessionData('batchassign') == '2') {
                            this.modalRef = this.modalService.open(this.adddirectAssign, {
                                size: 'lg',
                                backdrop: 'static'
                            });
                            this.assign = '2';
                            this.showBatch = true;
                            this.allowScore = this.contentName ? this.releaseGrade == '1' && this.contentType != '1' && this.checkQuestion != 1
                                : this.settingList[2]?.value == 1 ?? true;
                        }
                    }
                    else {
                        this.toastr.error('Please assign Correct content type form Content-Library');
                    }
                }
                else {
                    this.toastr.error('Draft Content can\'t be assigned for class');
                }
            }
            else if (type == 'notassign') {
                if (this.details != 'Draft') {
                    if ((this.auth.getRoleId() == '2') || this.auth.getRoleId() == '6' || (this.auth.getRoleId() == '4') && (this.auth.getSessionData('teacher_type') == '0')) {
                        this.batchDataList();
                        this.classDropDown = true;
                        this.firstAssign = true;
                        this.linkform.controls.downloadcontent.patchValue(this.contentDetaildata.download == '1');
                        this.linkform.controls.workspace.patchValue(false);
                        this.linkform.controls.feedback.patchValue(false);
                        this.linkform.controls.startDate.patchValue('');
                        this.linkform.controls.endDate.patchValue('');
                        setTimeout(() => {
                            this.linkform.controls.releaseScore.patchValue(this.isEssay == '1' ? '1' : '0');
                        });
                        this.cdr.detectChanges();
                        this.modalRef = this.modalService.open(this.addAssign, {
                            centered: false,
                            scrollable: false,
                            windowClass: 'assignPopUp',
                            size: 'xl',
                            backdrop: 'static'
                        });
                    }
                    else if ((this.auth.getRoleId() == '4') && (this.auth.getSessionData('teacher_type') == '1')) {
                        this.firstAssign = false;
                        this.classDropDown = true;
                        this.resourcetype = true;
                        this.defaultShow = true;
                        this.assign = '1';
                        this.startdate = '';
                        this.endDate = '';
                        this.linkform.controls.downloadcontent.patchValue(this.contentDetaildata.download == '1');
                        this.linkform.controls.workspace.patchValue(false);
                        this.linkform.controls.feedback.patchValue(false);
                        this.linkform.controls.classSelect.patchValue([]);
                        this.linkform.controls.notes.patchValue('');
                        setTimeout(() => {
                            this.linkform.controls.releaseScore.patchValue(this.isEssay == '1' ? '1' : '0');
                        });
                        this.cdr.detectChanges();
                        this.linkform.controls.radio.patchValue('1');
                        this.linkform.controls.startDate.patchValue('');
                        this.linkform.controls.endDate.patchValue('');
                        this.modalRef = this.modalService.open(this.addAssign, {
                            centered: false,
                            scrollable: false,
                            windowClass: 'assignPopUp',
                            size: 'xl',
                            backdrop: 'static'
                        });
                    }
                }
                else {
                    this.toastr.error('Draft Content can\'t be assigned for class');
                }
            }
            else if (type == 'browseAssign') {
                const classDetails = JSON.parse(this.auth.getSessionData('classData'));
                this.auth.setSessionData('browseContent_id', data.content_id);
                if (this.contentDetaildata.content_format == 1) {
                    classDetails.content_id.push({
                        type: 'pdf',
                        id: data.content_id,
                        name: this.contentDetaildata.file_path[0].image,
                        path: this.contentDetaildata.profile_url
                    });
                }
                else if (this.contentDetaildata.content_format == 2) {
                    classDetails.content_id.push({
                        id: data.content_id,
                        type: 'link',
                        name: this.contentDetaildata.links[0],
                        path: this.contentDetaildata.profile_url
                    });
                }
                else if (this.contentDetaildata.content_format == 3) {
                    classDetails.content_id.push({
                        id: data.content_id,
                        type: 'text',
                        name: this.contentDetaildata.file_text,
                        path: this.contentDetaildata.profile_url
                    });
                }
                this.auth.setSessionData('classData', JSON.stringify(classDetails));
                this.router.navigate(['/class/create-class/add']);
            }
        }
    }
    assignResource(index, type) {
        console.log(type, 'type');
        this.isEssay = this.contentdata[index].is_essay ?? '0';
        this.showTimer = this.isEssay == '1';
        this.detailpreviewlist(index, type);
        this.classList();
    }
    dateValidation1() {
        this.dateValidation = true;
        if (this.linkform.controls.dateRanges && this.linkform.controls.dateRanges.value) {
            this.dateValidation = !this.linkform.controls.dateRanges.value.some((control, index) => {
                const formControlName = this.linkform.controls.dateRanges['controls'][index]['controls'];
                const startDateControl = formControlName.startDate;
                const endDateControl = formControlName.endDate;
                if (startDateControl.value && endDateControl.value) {
                    const startdate = this.datePipe.transform(startDateControl.value.singleDate.jsDate, 'yyyy-MM-dd');
                    const st = startdate.split('-');
                    const endDate = this.datePipe.transform(endDateControl.value.singleDate.jsDate, 'yyyy-MM-dd');
                    const et = endDate.split('-');
                    if (st[0] === et[0]) {
                        if (st[1] === et[1]) {
                            return st[2] > et[2];
                        }
                        else {
                            return st[1] > et[1];
                        }
                    }
                    else {
                        return st[0] > et[0];
                    }
                }
                else {
                    return false;
                }
            });
        }
        else {
            this.dateValidation = true;
        }
    }
    submitAssign(type) {
        this.dateValidation1();
        const allstudent = this.linkform.controls.radio.value;
        if (this.auth.getSessionData('resourceAccess') == 'false') {
            this.classid = this.linkform.controls.classSelect.value;
            this.batchid = this.classbatchid;
        }
        const typeSelection = this.linkform.controls.typeSelection.value;
        if (allstudent == '1' || type == '2' || typeSelection == '2') {
            this.allStudent = '1';
            this.studentid = '';
        }
        else if (allstudent == '0') {
            this.allStudent = '0';
            this.studentid = this.linkform.controls.specificstudent.value;
        }
        if (this.auth.getSessionData('resourceAccess') == 'true') {
            if (this.auth.getSessionData('batchassign') == '1' || this.auth.getSessionData('batchassign') == '3') {
                this.batchid = this.choosedData[0].batch_id;
            }
            else if (this.auth.getSessionData('batchassign') == '2') {
                this.batchid = this.classid;
            }
        }
        else {
            const batchValue = JSON.parse(this.auth.getSessionData('selectedbatchId'));
            this.batchid = batchValue ? (batchValue.length == 0 ? null : batchValue) : null;
        }
        console.log(this.batchid, 'sadasda00');
        if (this.startdate == undefined) {
            this.start = '';
        }
        else {
            this.start = this.startdate;
        }
        if (this.endDate == undefined) {
            this.end = '';
        }
        else {
            this.end = this.endDate;
        }
        if (this.classid != null || this.batchid != null) {
            if ((this.allStudent == '0' && this.studentData.length != 0) || this.allStudent == '1') {
                if ((this.allStudent == '0' && this.studentid != '' && this.studentid != null) || this.allStudent == '1') {
                    if (this.dateValidation == true) {
                        let classDetails = [];
                        if (this.linkform.controls.typeSelection.value == '1' || this.resourcetype) {
                            this.linkform.get('dateRanges').value.forEach((control) => {
                                if (this.multiContentId.length > 1 && !this.contentName) {
                                    this.multiContentId.forEach((items) => {
                                        classDetails.push({
                                            content_id: items.content_id,
                                            class_id: control.class_id,
                                            start_date: control.startDate ? this.datePipe.transform(control.startDate.singleDate.jsDate, 'yyyy-MM-dd') : '',
                                            end_date: control.endDate ? this.datePipe.transform(control.endDate.singleDate.jsDate, 'yyyy-MM-dd') : '',
                                            start_time: control.startTime ? control.startTime : '',
                                            end_time: control.endTime ? control.endTime : '',
                                            all_student: this.allStudent,
                                            student_id: this.studentid,
                                            batch_id: this.batchid,
                                            auto_review: this.linkform.controls.releaseScore.value,
                                            notes: '',
                                            download: this.linkform.controls.downloadcontent.value ? '1' : '0',
                                            show_timer: this.showTimer ? this.linkform.controls.showTimer.value ? '1' : '0' : '1',
                                            allow_workspace: this.linkform.controls.workspace.value ? '1' : '0',
                                            allow_feedback: this.linkform.controls.feedback.value ? '1' : '0',
                                            topic_id: this.linkform.controls.topicSelect.value && this.linkform.controls.classSelect.value.length <= 1
                                                ? this.linkform.controls.topicSelect.value : ''
                                        });
                                    });
                                }
                                else {
                                    classDetails.push({
                                        content_id: this.contentid,
                                        class_id: control.class_id,
                                        start_date: control.startDate ? this.datePipe.transform(control.startDate.singleDate.jsDate, 'yyyy-MM-dd') : '',
                                        end_date: control.endDate ? this.datePipe.transform(control.endDate.singleDate.jsDate, 'yyyy-MM-dd') : '',
                                        start_time: control.startTime ? control.startTime : '',
                                        end_time: control.endTime ? control.endTime : '',
                                        all_student: this.allStudent,
                                        student_id: this.studentid,
                                        batch_id: this.batchid,
                                        auto_review: this.linkform.controls.releaseScore.value,
                                        notes: '',
                                        download: this.linkform.controls.downloadcontent.value ? '1' : '0',
                                        show_timer: this.showTimer ? this.linkform.controls.showTimer.value ? '1' : '0' : '1',
                                        allow_workspace: this.linkform.controls.workspace.value ? '1' : '0',
                                        allow_feedback: this.linkform.controls.feedback.value ? '1' : '0',
                                        topic_id: this.linkform.controls.topicSelect.value && this.linkform.controls.classSelect.value.length <= 1
                                            ? this.linkform.controls.topicSelect.value : ''
                                    });
                                }
                            });
                        }
                        else {
                            classDetails = [{
                                    content_id: this.contentid,
                                    class_id: this.classid,
                                    start_date: '',
                                    end_date: '',
                                    start_time: '',
                                    end_time: '',
                                    all_student: this.allStudent,
                                    student_id: this.studentid,
                                    batch_id: this.batchid,
                                    auto_review: this.linkform.controls.releaseScore.value,
                                    notes: '',
                                    download: this.linkform.controls.downloadcontent.value ? '1' : '0',
                                    workspace: this.linkform.controls.workspace.value ? '1' : '0',
                                    show_timer: this.showTimer ? this.linkform.controls.showTimer.value ? '1' : '0' : '1',
                                    feedback: this.linkform.controls.feedback.value ? '1' : '0',
                                    topic_id: this.linkform.controls.topicSelect.value && this.linkform.controls.classSelect.value.length <= 1
                                        ? this.linkform.controls.topicSelect.value : ''
                                }];
                        }
                        const data = {
                            platform: 'web',
                            role_id: this.auth.getRoleId(),
                            user_id: this.auth.getUserId(),
                            assign: this.assign,
                            school_id: this.auth.getSessionData('school_id'),
                            classdetails: classDetails,
                            classroomDetails: [{
                                    content_id: [this.contentid],
                                    batch_id: this.batchid,
                                    start_date: '',
                                    end_date: '',
                                    start_time: '',
                                    end_time: '',
                                    // start_date: this.linkform.controls.startDate.value == null || this.linkform.controls.startDate.value == '' || this.showBatch == true ? '' : this.datePipe.transform(this.linkform.controls.startDate.value.singleDate.jsDate, 'yyyy-MM-dd'),
                                    // end_date: this.linkform.controls.endDate.value == null || this.linkform.controls.endDate.value == '' || this.showBatch == true ? '' : this.datePipe.transform(this.linkform.controls.endDate.value.singleDate.jsDate, 'yyyy-MM-dd'),
                                    // start_time: this.linkform.controls.startTime.value == null || this.showBatch == true ? '' : this.linkform.controls.startTime.value,
                                    // end_time: this.linkform.controls.endTime.value == null || this.showBatch == true ? '' : this.linkform.controls.endTime.value,
                                }],
                            editor_type: ''
                        };
                        console.log(data, 'content_payload');
                        this.creatorService.addAssignResourse(data).subscribe((successData) => {
                            this.submitSuccess(successData);
                        }, (error) => {
                            console.error(error, 'error_submit');
                        });
                    }
                    else {
                        this.toastr.error('End Date Should be greater than Start Date');
                    }
                }
                else {
                    this.toastr.error('Select Atleast one Student');
                }
            }
            else {
                this.toastr.error('No Student Available in this class please select all student');
            }
        }
        else {
            this.toastr.error('Please fill the mandatory field');
        }
    }
    submitSuccess(successData) {
        if (successData.IsSuccess) {
            this.submitData = successData.ResponseObject;
            this.showTimer = false;
            this.toastr.success('Class Resource Updated Successfully');
            this.auth.setSessionData('contentType', '');
            this.downloadContentAvailable = false;
            this.contentdata.forEach(item => item.checked = false);
            if (this.auth.getSessionData('resourceAccess') == 'true') {
                if (this.auth.getSessionData('batchassign') == '1' || this.auth.getSessionData('batchassign') == '3') {
                    this.router.navigate(['/class/topicsAndCurriculum/1']);
                }
                else if (this.auth.getSessionData('batchassign') == '2') {
                    this.router.navigate(['class/view-assign/2']);
                }
            }
            this.linkform.reset();
            this.multiContentId = [];
            this.resourcetype = false;
            this.defaultShow = false;
            this.showBatch = false;
            this.clearFormArray();
            this.contentName = '';
            this.linkform.controls.classSelect.patchValue([]);
            this.linkform.controls.typeSelection.patchValue('n/a');
            this.linkform.controls.releaseScore.patchValue('0');
            this.linkform.controls.notes.patchValue('');
            this.linkform.controls.radio.patchValue('1');
            this.linkform.controls.batch.patchValue(null);
            this.linkform.controls.startDate.patchValue('');
            this.linkform.controls.endDate.patchValue('');
            const stObject = { hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00') };
            this.linkform.controls.startTime.patchValue(stObject);
            const etObject = { hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00') };
            this.linkform.controls.endTime.patchValue(etObject);
            this.modalRef.close();
            this.startdate = '';
            this.endDate = '';
            this.myDpOptions2 = {
                dateRange: false,
                dateFormat: dateOptions.pickerFormat,
                firstDayOfWeek: 'su'
            };
            this.myDpOptions1 = {
                dateRange: false,
                dateFormat: dateOptions.pickerFormat,
                firstDayOfWeek: 'su'
            };
            this.auth.setSessionData('resourceAccess', false);
        }
        else {
            this.toastr.error(successData.ErrorObject ? successData.ErrorObject : successData.ResponseObject);
            this.linkform.controls.startDate.patchValue(null);
            this.linkform.controls.endDate.patchValue(null);
            this.startdate = '';
            this.endDate = '';
            const stObject = { hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00') };
            this.linkform.controls.startTime.patchValue(stObject);
            const etObject = { hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00') };
            this.linkform.controls.endTime.patchValue(etObject);
            this.myDpOptions2 = {
                dateRange: false,
                dateFormat: dateOptions.pickerFormat,
                firstDayOfWeek: 'su',
            };
            this.myDpOptions1 = {
                dateRange: false,
                dateFormat: dateOptions.pickerFormat,
                firstDayOfWeek: 'su',
            };
        }
    }
    subjectList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.classService.subjectList(data).subscribe((successData) => {
            if (successData.IsSuccess) {
                this.subjectData = successData.ResponseObject;
            }
        }, (error) => {
            console.error(error, 'error_subjectList');
        });
    }
    gradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.classService.gradeList(data).subscribe((successData) => {
            if (successData.IsSuccess) {
                this.gradeData = successData.ResponseObject;
            }
        }, (error) => {
            console.error(error, 'error_gradeList');
        });
    }
    teacherList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.classService.individualTeacherList(data).subscribe((successData) => {
            if (successData.IsSuccess) {
                this.teacherData = successData.ResponseObject;
                console.log(this.teacherData, 'teacherData');
            }
        }, (error) => {
            console.log(error, 'error');
        });
    }
    tagList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.classService.tagsList(data).subscribe((successData) => {
            if (successData.IsSuccess) {
                this.tagData = successData.ResponseObject;
            }
        }, (error) => {
            console.error(error, 'error_tagList');
        });
    }
    sortlist() {
        // Show loading indicator
        this.isLoading = true;
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            sort_by: this.sortfilter,
            content_user_id: this.contentUserId,
            type: this.typeid,
            page_no: this.pageNo, // ✅ Fixed: was 'page', backend expects 'page_no'
            records_per_page: this.itemsPerPage, // ✅ Fixed: was 'record_per_page', backend expects 'records_per_page'
            library: this.libraryselection,
            filter: this.filterselection,
            tags: this.tagid,
            grade: this.gradeid,
            subject: this.subjectid,
            exact_search: this.exactSearch == true ? 1 : 0,
            search_name: this.searchKey
        };
        console.log('🔍 PAGINATION DEBUG - Request Parameters:', {
            pageNo: this.pageNo,
            page_no: data.page_no,
            records_per_page: data.records_per_page,
            itemsPerPage: this.itemsPerPage,
            fullData: data
        });
        // Cancel any pending requests
        if (this.sortListSubscription) {
            this.sortListSubscription.unsubscribe();
        }
        if (this.auth.getRoleId() == '6') {
            data['corporate_id'] = this.auth.getSessionData('corporate_id');
            this.sortListSubscription = this.creatorService.sortmasterlist(data).subscribe((successData) => {
                this.sortListSuccess(successData);
                this.isLoading = false;
            }, (error) => {
                console.error(error, 'error_slotList');
                this.isLoading = false;
            });
        }
        else {
            this.sortListSubscription = this.creatorService.sortmasterlist(data).subscribe((successData) => {
                this.sortListSuccess(successData);
                this.isLoading = false;
            }, (error) => {
                console.error(error, 'error_slotList');
                this.isLoading = false;
            });
        }
    }
    sortListSuccess(successData) {
        console.log('📦 PAGINATION DEBUG - Response received:', {
            IsSuccess: successData.IsSuccess,
            itemsReturned: successData.ResponseObject?.length || 0,
            currentPage: this.pageNo,
            currentContentDataLength: this.contentdata.length
        });
        if (successData.IsSuccess) {
            let temp = successData.ResponseObject;
            console.log('✅ PAGINATION DEBUG - Processing response:', {
                tempLength: temp.length,
                pageNo: this.pageNo,
                willReplace: this.pageNo == 1,
                willAppend: this.pageNo > 1 && temp.length > 0
            });
            // For pagination: replace data on page 1, append on subsequent pages (for infinite scroll)
            if (this.pageNo == 1) {
                this.contentdata = successData.ResponseObject;
                console.log('🔄 PAGINATION DEBUG - Replaced data, new length:', this.contentdata.length);
            }
            else if (this.pageNo > 1 && temp.length > 0) {
                // Only append if using infinite scroll
                for (let entry of temp) {
                    this.contentdata.push(entry);
                }
                console.log('➕ PAGINATION DEBUG - Appended data, new length:', this.contentdata.length);
            }
            // Process each item
            for (let i = 0; i < this.contentdata.length; i++) {
                this.contentdata[i].checked = this.contentdata[i].checked ? this.contentdata[i].checked : false;
                this.contentdata[i].showDropdown = false; // Initialize dropdown state
                if (this.contentdata[i].status == '1') {
                    this.contentdata[i].details = 'Published';
                }
                else if (this.contentdata[i].status == '5') {
                    this.contentdata[i].details = 'Draft';
                }
            }
            // Update pagination calculations
            // Note: Backend returns items per page, we estimate total pages based on whether we got a full page
            if (temp.length < this.itemsPerPage) {
                // This is the last page
                this.totalPages = this.pageNo;
                console.log('📄 PAGINATION DEBUG - Last page detected, totalPages:', this.totalPages);
            }
            else if (temp.length === this.itemsPerPage) {
                // There might be more pages
                this.totalPages = this.pageNo + 1; // At least one more
                console.log('📄 PAGINATION DEBUG - More pages likely, totalPages:', this.totalPages);
            }
            this.totalRecords = this.contentdata.length;
            this.threshhold = this.totalRecords - 2;
            this.contentdatabackup = this.contentdata;
            this.updatePaginationPages();
            console.log('🎯 PAGINATION DEBUG - Final state:', {
                totalRecords: this.totalRecords,
                totalPages: this.totalPages,
                currentPage: this.pageNo,
                paginationPages: this.paginationPages,
                showPagination: this.showPagination,
                itemsPerPage: this.itemsPerPage
            });
            this.cdr.detectChanges();
        }
        else {
            console.log('❌ PAGINATION DEBUG - Response not successful');
        }
        this.cdr.detectChanges();
    }
    updatePaginationPages() {
        // Generate array of page numbers for pagination controls
        const maxPagesToShow = 5;
        const pages = [];
        if (this.totalPages <= maxPagesToShow) {
            // Show all pages
            for (let i = 1; i <= this.totalPages; i++) {
                pages.push(i);
            }
        }
        else {
            // Show subset with current page in middle
            let startPage = Math.max(1, this.pageNo - 2);
            let endPage = Math.min(this.totalPages, startPage + maxPagesToShow - 1);
            // Adjust if we're near the end
            if (endPage - startPage < maxPagesToShow - 1) {
                startPage = Math.max(1, endPage - maxPagesToShow + 1);
            }
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
        }
        this.paginationPages = pages;
    }
    goToPage(page) {
        if (page >= 1 && page <= this.totalPages && page !== this.pageNo) {
            this.pageNo = page;
            this.contentdata = []; // Clear current data for clean page load
            this.sortlist();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    goToFirstPage() {
        this.goToPage(1);
    }
    goToLastPage() {
        this.goToPage(this.totalPages);
    }
    switchTab(tab) {
        if (this.activeTab !== tab) {
            console.log('📑 Switching to tab:', tab);
            if (tab === 'folder') {
                // Navigate to Content Folder view (classroom/folder organization)
                this.router.navigate(['/classroom/list-classroom']);
            }
            else {
                // Content Library - stay on current page and reload if needed
                this.activeTab = tab;
                if (this.contentdata.length === 0) {
                    this.contentdata = [];
                    this.pageNo = 1;
                    this.sortlist();
                }
            }
        }
    }
    toggleDropdown(index) {
        // Close all other dropdowns
        this.contentdata.forEach((item, i) => {
            if (i !== index) {
                item.showDropdown = false;
            }
        });
        // Toggle the clicked dropdown
        this.contentdata[index].showDropdown = !this.contentdata[index].showDropdown;
        // Prevent document click handler from immediately closing the dropdown
        this.suppressDocumentClick = true;
        setTimeout(() => {
            this.suppressDocumentClick = false;
        }, 100);
        this.cdr.detectChanges();
    }
    closeDropdown(index) {
        if (this.contentdata && this.contentdata[index]) {
            this.contentdata[index].showDropdown = false;
            this.cdr.detectChanges();
        }
    }
    onDocumentClick(event) {
        if (this.suppressDocumentClick) {
            return;
        }
        const target = event.target;
        // Don't close dropdown if clicking on the dropdown button or dropdown menu
        if (!target.closest('.content-card__dropdown-toggle') &&
            !target.closest('.dropdown-content') &&
            !target.closest('.dropdown')) {
            let shouldDetect = false;
            this.contentdata.forEach(item => {
                if (item.showDropdown) {
                    item.showDropdown = false;
                    shouldDetect = true;
                }
            });
            if (shouldDetect) {
                this.cdr.detectChanges();
            }
        }
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
        this.auth.setSessionData('editor', JSON.stringify(data));
        this.creatorService.repositoryDetail(data).subscribe((successData) => {
            this.detailsSuccess(successData, event, type);
        }, (error) => {
            console.error(error, 'error_lisDetails');
        });
    }
    detailsSuccess(successData, event, type) {
        if (successData.IsSuccess) {
            this.detailData = successData.ResponseObject;
            console.log('detailsSuccess - event:', event, 'type:', type, 'previewType:', this.previewType);
            console.log('detailsSuccess - content_type:', event.content_type, 'content_format:', event.content_format);
            console.log('detailsSuccess - API response content_type:', this.detailData.content_type);
            // Use content_type from API response if not available in event
            const contentType = event.content_type || this.detailData.content_type;
            if (this.previewType == 'edit') {
                // this.auth.setSessionData('save-Question', JSON.stringify(this.detailData));
                if (contentType == '1') {
                    if (type == 'addPdf') {
                        console.log('Navigating to repository/add-resources/edit');
                        this.router.navigate(['repository/add-resources/edit']);
                    }
                    else if (type == 'addText') {
                        console.log('Navigating to content-text-resource/text-resource/edit');
                        this.router.navigate(['content-text-resource/text-resource/edit']);
                    }
                }
                else if (contentType == '2') {
                    this.auth.setSessionData('upload-type', 'assignment');
                    if (type == 'addPdf') {
                        console.log('Navigating to repository/create-assessment/edit');
                        this.router.navigate(['repository/create-assessment/edit']);
                    }
                    else if (type == 'addText') {
                        this.auth.setSessionData('textType', 'assignment');
                        console.log('Navigating to content-text-resource/text-assignment/edit');
                        this.router.navigate(['content-text-resource/text-assignment/edit']);
                    }
                }
                else if (contentType == '3') {
                    this.auth.setSessionData('upload-type', 'assessment');
                    if (type == 'addPdf') {
                        console.log('Navigating to repository/create-assessment/edit');
                        this.router.navigate(['repository/create-assessment/edit']);
                    }
                    else if (type == 'addText') {
                        this.auth.setSessionData('textType', 'assessment');
                        console.log('Navigating to content-text-resource/text-assignment/edit');
                        this.router.navigate(['content-text-resource/text-assignment/edit']);
                    }
                }
            }
            else if (this.previewType == 'pdf') {
                this.auth.setSessionData('preview', 'repository');
                // Use content_type from API response if type is undefined
                const previewType = type || contentType;
                if (previewType == '1') {
                    this.auth.setSessionData('preview_page', 'create_resources');
                    this.router.navigate(['/repository/preview']);
                }
                else if (previewType == '2') {
                    this.auth.setSessionData('preview_page', 'create_assignments');
                    this.router.navigate(['/repository/preview']);
                }
                else if (previewType == '3') {
                    this.auth.setSessionData('preview_page', 'create_assessments');
                    this.router.navigate(['/repository/preview']);
                }
            }
            else if (this.previewType == 'text') {
                this.auth.setSessionData('preview', 'repository');
                // Use content_type from API response if type is undefined
                const previewType = type || contentType;
                if (previewType == '1') {
                    this.auth.setSessionData('preview_page', 'text_resources');
                    this.router.navigate(['/repository/preview']);
                }
                else if (previewType == '2') {
                    this.auth.setSessionData('preview_page', 'text_assignments');
                    this.router.navigate(['/repository/preview']);
                }
                else if (previewType == '3') {
                    this.auth.setSessionData('preview_page', 'text_assessments');
                    this.router.navigate(['/repository/preview']);
                }
            }
        }
    }
    testDtails(event) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: event.content_id,
            school_id: this.auth.getSessionData('school_id')
        };
        this.creatorService.testDetail(data).subscribe((successData) => {
            this.testSuccess(successData);
        }, (error) => {
            console.error(error, 'error_lisDetails');
        });
    }
    testSuccess(successData) {
        if (successData.IsSuccess) {
            this.auth.setSessionData('editTestDetails', JSON.stringify(successData.ResponseObject[0]));
            this.router.navigate(['repository/create-test/edit']);
        }
    }
    scratchTypeQuestions(value) {
        this.auth.setSessionData('textType', value);
        this.router.navigate(['content-text-resource/text-assignment/add']);
        this.close();
    }
    clearall() {
        this.clearSettedData();
        this.setSearch_Filter();
        this.sortlist();
    }
    clearSettedData() {
        this.libraryselection = '0';
        this.contentUserId = '0';
        this.sortfilter = '0';
        this.typeid = 'list';
        this.gradeid = [];
        this.subjectid = [];
        this.tagid = [];
        this.searchKey = '';
        this.exactSearch = false;
        this.selectAuthored = '';
        this.selectDraft = '';
    }
    callCurrentBtn(type) {
        this.contentdata = [];
        this.pageNo = 1;
        this.totalRecords = 0;
        this.threshhold = 0;
        if (type == 'authored') {
            if (this.selectAuthored == 'active2') {
                this.selectAuthored = '';
                this.contentUserId = '0';
            }
            else {
                this.selectAuthored = 'active2';
                this.contentUserId = this.auth.getUserId().toString();
            }
            // this.auth.setSessionData('ContentHome-AuthoredByMe', this.contentUserId);
            this.typeid = 'list';
            // this.auth.setSessionData('ContentHome-MyDraft', this.typeid);
            this.selectDraft = '';
        }
        else if (type == 'mydraft') {
            if (this.selectDraft == 'active2') {
                this.selectDraft = '';
                this.typeid = 'list';
            }
            else {
                this.selectDraft = 'active2';
                this.typeid = type;
            }
            this.contentUserId = '0';
            // this.auth.setSessionData('ContentHome-AuthoredByMe', this.contentUserId);
            // this.auth.setSessionData('ContentHome-MyDraft', this.typeid);
            this.selectAuthored = '';
        }
        this.setSearch_Filter();
        this.sortlist();
    }
    // mydraft(type) {
    //     this.contentdata = [];
    //     this.pageNo = 1;
    //     if (this.typeid == type) {
    //         this.typeid = 'list';
    //         this.auth.setSessionData('ContentHome-MyDraft', this.typeid);
    //     } else {
    //         this.typeid = type;
    //         this.auth.setSessionData('ContentHome-MyDraft', this.typeid);
    //     }
    //     // this.totalRecords = 0;
    //     // this.threshhold = 0;
    //     this.sortlist();
    // }
    selectedgrade(event) {
        this.contentdata = [];
        this.pageNo = 1;
        if (typeof event == 'undefined') {
            this.gradeid = [];
            // this.auth.setSessionData('ContentHome-Grade', JSON.stringify(this.gradeid));
        }
        else {
            this.gradeid = [];
            for (let i = 0; i < event.length; i++) {
                this.gradeid.push(event[i].grade_id);
            }
            // this.auth.setSessionData('ContentHome-Grade', JSON.stringify(this.gradeid));
        }
        this.setSearch_Filter();
        this.sortlist();
    }
    selectedsubject(event) {
        this.contentdata = [];
        this.pageNo = 1;
        if (typeof event == 'undefined') {
            this.subjectid = [];
            // this.auth.setSessionData('ContentHome-Subject', JSON.stringify(this.subjectid));
        }
        else {
            this.subjectid = [];
            for (let i = 0; i < event.length; i++) {
                this.subjectid.push(event[i].subject_id);
            }
            // this.auth.setSessionData('ContentHome-Subject', JSON.stringify(this.subjectid));
        }
        this.setSearch_Filter();
        this.sortlist();
    }
    selectedtag(event) {
        this.contentdata = [];
        this.pageNo = 1;
        if (typeof event == 'undefined') {
            this.tagid = [];
            // this.auth.setSessionData('ContentHome-Tag', JSON.stringify(this.tagid));
        }
        else {
            this.tagid = [];
            for (let i = 0; i < event.length; i++) {
                this.tagid.push(event[i].tag_name);
            }
            // this.auth.setSessionData('ContentHome-Tag', JSON.stringify(this.tagid));
        }
        this.setSearch_Filter();
        this.sortlist();
    }
    library(event) {
        this.libraryselection = event.target.value;
        this.setSearch_Filter();
        // this.auth.setSessionData('ContentHome-EntireLibrary', this.libraryselection);
        this.contentdata = [];
        this.pageNo = 1;
        this.sortlist();
    }
    sort(event) {
        if (event.target.value == '0' || event.target.value == '-1' || event.target.value == 'AZ' || event.target.value == 'ZA') {
            this.sortfilter = event.target.value;
            // this.auth.setSessionData('ContentHome-Sort', this.sortfilter);
            this.contentUserId = '0';
            // this.auth.setSessionData('ContentHome-AuthoredByMe', this.contentUserId);
        }
        else {
            this.sortfilter = event.target.value;
            this.contentUserId = event.target.value;
            // this.auth.setSessionData('ContentHome-Sort', this.contentUserId);
            // this.auth.setSessionData('ContentHome-AuthoredByMe', this.contentUserId);
        }
        this.highlight = '';
        this.contentdata = [];
        this.pageNo = 1;
        this.setSearch_Filter();
        this.sortlist();
    }
    detailPreview(data, type) {
        this.modalRef = this.modalService.open(this.addDetails, { size: 'lg', backdrop: 'static' });
        this.detailpreviewlist(data, 'details');
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    navigateToPreview(data) {
        if (data.content_format == '1') {
            this.PreviewPage(data, data.content_type);
        }
        else {
            this.PreviewText(data, data.content_type);
        }
    }
    showAdd() {
        this.modalRef = this.modalService.open(this.createContentTemp, { size: 'lg', backdrop: 'static' });
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    upload(type) {
        this.modalRef.close('addAsset');
        if (type == 'resource') {
            this.modalRef = this.modalService.open(this.addResources, { size: 'lg', backdrop: 'static' });
        }
        else if (type == 'assessment') {
            this.modalRef = this.modalService.open(this.addAssessment, { size: 'lg', backdrop: 'static' });
        }
        else if (type == 'assignment') {
            this.modalRef = this.modalService.open(this.addAssignment, { size: 'lg', backdrop: 'static' });
        }
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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
    close() {
        this.modalRef.close();
    }
    close1() {
        this.contentName = '';
        this.showTimer = false;
        this.modalRef.close();
        this.linkform.reset();
        this.downloadContentAvailable = false;
        this.linkform.controls.classSelect.patchValue([]);
        this.linkform.controls.workspace.patchValue(false);
        this.linkform.controls.feedback.patchValue(false);
        this.linkform.controls.startTime.patchValue('');
        this.linkform.controls.endTime.patchValue('');
        this.clearFormArray();
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getMonth() + 1,
                day: new Date(this.setDate).getDate() != 1 ? new Date().getDate() - 1 : -1,
            },
        };
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: this.myDpOptions.disableUntil.year,
                month: this.myDpOptions.disableUntil.month,
                day: this.myDpOptions.disableUntil.day
            },
        };
        const stObject = { hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00') };
        this.linkform.controls.startTime.patchValue(stObject);
        const etObject = { hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00') };
        this.linkform.controls.endTime.patchValue(etObject);
        this.linkform.controls.releaseScore.patchValue('0');
        this.linkform.controls.radio.patchValue('1');
    }
    cancel() {
        this.linkform.reset();
        this.showTimer = false;
        this.contentName = '';
        this.resourcetype = false;
        this.allowScore = false;
        this.defaultShow = false;
        this.showBatch = false;
        this.downloadContentAvailable = false;
        this.linkform.controls.classSelect.patchValue([]);
        this.linkform.controls.workspace.patchValue(false);
        this.linkform.controls.feedback.patchValue(false);
        this.linkform.controls.notes.patchValue('');
        this.linkform.controls.typeSelection.patchValue('n/a');
        this.linkform.controls.releaseScore.patchValue('0');
        this.linkform.controls.radio.patchValue('1');
        this.linkform.controls.batch.patchValue(null);
        this.clearFormArray();
        const stObject = { hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00') };
        this.linkform.controls.startTime.patchValue(stObject);
        const etObject = { hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00') };
        this.linkform.controls.endTime.patchValue(etObject);
        this.modalRef.close();
        this.startdate = '';
        this.endDate = '';
    }
    editAction(event, type, modelOpen) {
        console.log('editAction called with:', event, 'type:', type, 'modelOpen:', modelOpen);
        this.clearSession = false;
        if (modelOpen == '1') {
            this.modalRef.close('detailsTemplate');
        }
        this.previewType = 'edit';
        this.auth.setSessionData('editresources', JSON.stringify(event));
        if (event.is_test == 1) {
            this.testDtails(event);
        }
        else {
            this.listDetails(event, type);
        }
    }
    PreviewPage(event, type) {
        console.log('PreviewPage called with:', event, 'type:', type);
        this.clearSession = false;
        this.previewType = 'pdf';
        this.auth.setSessionData('editresources', JSON.stringify(event));
        this.listDetails(event, type);
    }
    PreviewText(event, type) {
        console.log('PreviewText called with:', event, 'type:', type);
        this.clearSession = false;
        this.previewType = 'text';
        this.auth.setSessionData('editresources', JSON.stringify(event));
        this.listDetails(event, type);
    }
    getContentThumbnail(content) {
        return this.buildThumbnail(content?.profile_url, content?.content_type);
    }
    getDetailThumbnail() {
        return this.buildThumbnail(this.profileurl, this.contentType);
    }
    buildThumbnail(path, type) {
        const fallbackKey = type !== undefined && type !== null ? type.toString() : 'default';
        const fallback = this.thumbnailFallbacks[fallbackKey] || this.thumbnailFallbacks.default;
        if (!path) {
            return fallback;
        }
        const absoluteUrl = this.normalizeAssetPath(path);
        return this.sanitizer.bypassSecurityTrustUrl(absoluteUrl);
    }
    normalizeAssetPath(path) {
        if (/^https?:\/\//i.test(path)) {
            return encodeURI(path);
        }
        const base = (this.webhost || '').replace(/\/+$/, '');
        const sanitizedPath = path.replace(/^\/+/, '');
        return encodeURI(`${base}/${sanitizedPath}`);
    }
    encodePdfFileAsURL(event, type) {
        let images = [];
        const imageLength = event.target.files.length;
        for (let i = 0; i < event.target.files.length; i++) {
            const pdfDetails = event.target.files[i];
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
                if (pic[1] == 'pdf') {
                    if (imageLength == images.length) {
                        this.onUploadKYCFinishedpdf(images, type);
                    }
                }
                else {
                    this.toastr.error('PDF are the required file format');
                }
            };
            reader.readAsDataURL(event.target.files[i]);
        }
    }
    onUploadKYCFinishedpdf(getUrlEdu, type) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            image_path: getUrlEdu,
            uploadtype: 'content'
        };
        this.common.fileUpload(data).subscribe((successData) => {
            this.pdfuploadSuccess(successData, type);
        }, (error) => {
            console.error(error, 'error_pdfUpload');
        });
    }
    pdfuploadSuccess(successData, type) {
        // this.settings.loadingSpinner = false;
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.pdfpath = [];
            this.pdfpaththumb = [];
            this.response = successData.ResponseObject;
            for (let i = 0; i < this.response.imagepath.length; i++) {
                this.pdfpath.push(this.response.imagepath[i]);
                this.pdfpaththumb.push(this.response.imagepath[i].resized_url);
            }
            this.auth.setSessionData('pdf', JSON.stringify(this.pdfpath));
            this.auth.setSessionData('pdf_thumb', JSON.stringify(this.pdfpaththumb));
            if (type == 'resource') {
                this.router.navigate(['repository/add-resources/add']);
            }
            else if (type == 'assessment') {
                this.router.navigate(['repository/create-assessment/add']);
                this.auth.setSessionData('upload-type', 'assessment');
            }
            else if (type == 'assignment') {
                this.router.navigate(['repository/create-assessment/add']);
                this.auth.setSessionData('upload-type', 'assignment');
            }
            this.modalRef.close();
        }
        else {
            this.toastr.error('Invalid File Format');
        }
    }
    checkValue(eve) {
        if (eve.target.checked == true) {
            this.listStudent = true;
        }
    }
    checkValue1(eve) {
        if (eve.target.checked == true) {
            this.listStudent = false;
        }
    }
    onDateChanged(event) {
        this.myDpOptions1 = {};
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: event.singleDate.date.year,
                month: event.singleDate.date.month,
                day: event.singleDate.date.day - 1
            },
        };
    }
    checkTimeDifference(formControl) {
        if (formControl.value.startDate && formControl.value.endDate) {
            if (formControl.value.startDate.singleDate.jsDate && formControl.value.endDate.singleDate.jsDate) {
                const startDate = this.datePipe.transform(formControl.value.startDate.singleDate.jsDate, 'yyyy-MM-dd');
                const endDate = this.datePipe.transform(formControl.value.endDate.singleDate.jsDate, 'yyyy-MM-dd');
                if (formControl.value.startTime && formControl.value.endTime) {
                    const startTime = parseInt(formControl.value.startTime.hour);
                    const startTimeHour = parseInt(formControl.value.startTime.minute);
                    const endTime = parseInt(formControl.value.endTime.hour);
                    const endTimeHour = parseInt(formControl.value.endTime.minute);
                    const totalStartTimeMins = (startTime * 60) + startTimeHour;
                    const totalendTimeHour = (endTime * 60) + endTimeHour;
                    if (startDate == endDate) {
                        return totalStartTimeMins >= totalendTimeHour;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    typeSelection() {
        const selectBox = document.getElementById('selectBox');
        const selectedValue = selectBox.options[selectBox.selectedIndex].value;
        console.log(selectedValue, 'selected');
        if (selectedValue == 1) {
            this.resourcetype = true;
            this.defaultShow = true;
            this.showBatch = false;
            this.assign = '1';
            this.linkform.controls.releaseScore.patchValue(this.isEssay == '1' ? '1' : '0');
        }
        else if (selectedValue == 2) {
            this.linkform.controls.radio.patchValue('1');
            this.clearFormArray();
            this.resourcetype = false;
            this.defaultShow = true;
            this.showBatch = true;
            this.assign = '2';
            this.startdate = '';
            this.endDate = '';
            this.linkform.controls.classSelect.patchValue([]);
            this.linkform.controls.notes.patchValue('');
            const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
            const dropped = dr1.split('-');
            const droppedObject = {
                isRange: false,
                singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
                dateRange: null
            };
            this.linkform.controls.startDate.patchValue(droppedObject);
        }
        this.linkform.controls.workspace.patchValue(false);
        this.linkform.controls.feedback.patchValue(false);
        this.allowScore = this.contentName ? this.releaseGrade == '1' && this.resourcetype && this.contentType != '1' && this.checkQuestion != 1
            : this.settingList[2]?.value == 1 ?? true;
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
            if (successData.IsSuccess) {
                this.batchData = successData.ResponseObject;
            }
        }, (error) => {
            console.error(error, 'error_batchData');
        });
    }
    removeSelectedMultiContent(data, index) {
        this.multiContentId.splice(index, 1);
        const contentIndex = this.contentdata.findIndex(x => x.content_id == data.content_id);
        this.isEssay = this.multiContentId.length == 1 && this.multiContentId.some(content => content.is_essay == '1') ? '1' : '0';
        this.showTimer = !(this.multiContentId.some(value => value.is_essay != '1'));
        this.contentdata[contentIndex].checked = false;
    }
    removeContent(value) {
        this.deleteValue = value;
        this.modalRef = this.modalService.open(this.deleteList, { size: 'md', backdrop: 'static' });
    }
    deleteContent(value) {
        console.log(value);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: value.content_id
        };
        this.creatorService.deleteContentRepository(data).subscribe((successData) => {
            this.deleteContentSuccess(successData, value);
        }, (error) => {
            console.error(error, 'delete_content');
        });
    }
    deleteContentSuccess(successData, value) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.close();
            this.contentdata = [];
            this.pageNo = 1;
            this.sortlist();
        }
        else {
            this.deleteAssignedContent(value);
        }
    }
    deleteAssignedContent(value) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: value.content_id
        };
        this.creatorService.deleteAssignedContent(data).subscribe((successData) => {
            this.deleteAssignedContentSuccess(successData);
        }, (error) => {
            console.error(error, 'error_deleteAssignedContent');
        });
    }
    deleteAssignedContentSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.close();
            this.contentdata = [];
            this.pageNo = 1;
            this.sortlist();
        }
    }
    showInfo(id, i) {
        this.contentdata.forEach((item, index) => {
            item.showDetails = index == i ? !item.showDetails : false;
        });
    }
    setSearch_Filter() {
        let data;
        if (this.auth.getSessionData('resourceAccess') == 'true') {
            data = JSON.parse(this.auth.getSessionData(SessionConstants.non_directcontentSearch));
        }
        else {
            data = JSON.parse(this.auth.getSessionData(SessionConstants.directcontentSearch));
        }
        if (data != null) {
            data.forEach((items) => {
                if (items.school_id == this.auth.getSessionData('school_id')) {
                    items.libary = this.libraryselection;
                    items.content_userid = this.contentUserId;
                    items.sortFilter = this.sortfilter;
                    items.type_id = this.typeid;
                    items.grade_id = this.gradeid;
                    items.subject_id = this.subjectid;
                    items.tag_id = this.tagid;
                    items.contentName = this.searchKey;
                    items.extact_Search = this.exactSearch;
                    items.selectAuthored = this.selectAuthored;
                    items.selectDraft = this.selectDraft;
                }
                else {
                    const searchData = {
                        contentName: this.searchKey,
                        libary: this.libraryselection,
                        content_userid: this.contentUserId,
                        sortFilter: this.sortfilter,
                        type_id: this.typeid,
                        grade_id: this.gradeid,
                        subject_id: this.subjectid,
                        tag_id: this.tagid,
                        extact_Search: this.exactSearch,
                        selectAuthored: this.selectAuthored,
                        selectDraft: this.selectDraft,
                        school_id: this.auth.getSessionData('school_id')
                    };
                    data.push(searchData);
                }
            });
            data = data.filter((test, index, array) => index === array.findIndex((findTest) => findTest.school_id === test.school_id));
            this.auth.getSessionData('resourceAccess') == 'true' ? this.auth.setSessionData(SessionConstants.non_directcontentSearch, JSON.stringify(data)) :
                this.auth.setSessionData(SessionConstants.directcontentSearch, JSON.stringify(data));
        }
    }
    getSearch_Filter() {
        let data;
        if (this.auth.getSessionData('resourceAccess') == 'true') {
            data = JSON.parse(this.auth.getSessionData(SessionConstants.non_directcontentSearch));
        }
        else {
            data = JSON.parse(this.auth.getSessionData(SessionConstants.directcontentSearch));
        }
        data.every((items) => {
            if (items.school_id == this.auth.getSessionData('school_id')) {
                this.libraryselection = items.libary;
                this.contentUserId = items.content_userid;
                this.sortfilter = items.sortFilter;
                this.typeid = items.type_id;
                this.gradeid = items.grade_id;
                this.subjectid = items.subject_id;
                this.tagid = items.tag_id;
                this.searchKey = items.contentName;
                this.exactSearch = items.extact_Search;
                this.selectAuthored = items.selectAuthored;
                this.selectDraft = items.selectDraft;
                return false;
            }
            else {
                this.clearSettedData();
            }
            return true;
        });
    }
    callCreateFrom() {
        this.modalRef.close('createContentTemp');
        this.modalRef = this.modalService.open(this.createScratchTemp, { size: 'lg', backdrop: 'static' });
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    selectOrUnSelectContentList(item, event) {
        console.log(item, event);
        if (event.target.checked) {
            item.checked = true;
            this.multiContentId.push({
                content_id: item.content_id,
                name: item.name,
                content_type: item.content_type,
                content_format: item.content_format,
                download: item?.download ? item.download : '0',
                is_essay: item?.is_essay ? item.is_essay : '0'
            });
        }
        else {
            item.checked = false;
            const index = this.multiContentId.findIndex(x => x.content_id == item.content_id);
            this.multiContentId.splice(index, 1);
        }
        const essayType = this.multiContentId.some(content => content.is_essay != '1');
        this.isEssay = !essayType ? '1' : '0';
        this.showTimer = !(this.multiContentId.some(value => value.is_essay != '1'));
        event.stopPropagation();
    }
    multiAssignOfContent() {
        this.downloadContentAvailable = this.multiContentId.some(code => code.download == '1');
        this.linkform.controls.downloadcontent.patchValue(this.downloadContentAvailable);
        const essayType = this.multiContentId.some(content => content.is_essay != '1');
        this.isEssay = !essayType ? '1' : '0';
        if (this.showIcon && this.assignIcon) {
            this.pathContentDetails('assign');
        }
        else if (this.assignDirect && this.manageOwnContent) {
            this.linkform.controls.typeSelection.patchValue('1');
            this.resourcetype = true;
            this.defaultShow = true;
            this.showBatch = false;
            this.assign = '1';
            this.pathContentDetails('notassign');
        }
    }
    pathContentDetails(type) {
        console.log(type);
        if (type == 'assign') {
            const contentType = this.auth.getSessionData('contentType');
            if (this.multiContentId.some((code) => code.content_type != contentType)) {
                this.toastr.error('Please assign Correct content type form Content-Library');
                return false;
            }
            if (this.auth.getSessionData('batchassign') == '1' || this.auth.getSessionData('batchassign') == '3') {
                this.linkform.controls.notes.patchValue('');
                this.topicsList(this.classid);
                this.linkform.controls.releaseScore.patchValue(this.isEssay == '1' ? '1' : '0');
                this.linkform.controls.classname.patchValue(this.choosedData[0].class_name ? this.choosedData[0].class_name : '');
                this.modalRef = this.modalService.open(this.addAssign, {
                    centered: false,
                    scrollable: false,
                    windowClass: 'assignPopUp',
                    size: 'xl',
                    backdrop: 'static'
                });
                this.classDropDown = false;
                this.resourcetype = true;
                this.addClassDate();
                this.defaultShow = true;
                this.firstAssign = false;
                this.assign = '1';
                this.showBatch = false;
                this.allowScore = true;
                this.linkform.controls.classSelect.patchValue(this.choosedData[0].class_name ? [this.choosedData[0].class_id] : []);
                // setTimeout(() => {
                this.linkform.get('dateRanges').value.forEach((control, index) => {
                    const formControlName = this.linkform['controls'].dateRanges['controls'][index]['controls'];
                    formControlName.class_name.patchValue(this.choosedData[0].class_name ? this.choosedData[0].class_name : '');
                    formControlName.class_id.patchValue(this.choosedData[0].class_id ? this.choosedData[0].class_id : '');
                    if (this.choosedData[0].start_date != '0000-00-00') {
                        const sd = this.choosedData[0].start_date.split('-');
                        const sdObject = {
                            isRange: false,
                            singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) },
                            dateRange: null
                        };
                        const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
                        const dropped = dr1.split('-');
                        const droppedObject = {
                            isRange: false,
                            singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
                            dateRange: null
                        };
                        formControlName.startDate.patchValue(droppedObject);
                        this.myDpOptions1 = {};
                        this.myDpOptions1 = {
                            dateRange: false,
                            dateFormat: dateOptions.pickerFormat,
                            firstDayOfWeek: 'su',
                            disableUntil: {
                                year: parseInt(sd[0]),
                                month: parseInt(sd[1]),
                                day: parseInt(sd[2]) - 1
                            },
                        };
                        formControlName.class_startDate.patchValue(this.choosedData[0].start_date);
                    }
                    else {
                        const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
                        const dropped = dr1.split('-');
                        const droppedObject = {
                            isRange: false,
                            singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
                            dateRange: null
                        };
                        formControlName.startDate.patchValue(droppedObject);
                    }
                    if (this.choosedData[0].end_date != '0000-00-00') {
                        const sd = this.choosedData[0].end_date.split('-');
                        const sdObject = {
                            isRange: false,
                            singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) },
                            dateRange: null
                        };
                        this.myDpOptions1 = {};
                        this.myDpOptions1 = {
                            dateRange: false,
                            dateFormat: dateOptions.pickerFormat,
                            firstDayOfWeek: 'su',
                            disableUntil: {
                                year: this.myDpOptions.disableUntil.year,
                                month: this.myDpOptions.disableUntil.month,
                                day: this.myDpOptions.disableUntil.day
                            },
                        };
                        formControlName.class_endDate.patchValue(this.choosedData[0].end_date);
                    }
                    else {
                        formControlName.endDate.patchValue(null);
                    }
                });
                // }, 1000)
                this.allowScore = this.contentName ? this.releaseGrade == '1' && this.resourcetype && this.contentType != '1' && this.checkQuestion != 1
                    : this.settingList[2]?.value == 1 ?? true;
            }
            else if (this.auth.getSessionData('batchassign') == '2') {
                this.modalRef = this.modalService.open(this.adddirectAssign, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.assign = '2';
                this.showBatch = true;
                this.allowScore = this.contentName ? this.releaseGrade == '1' && this.resourcetype && this.contentType != '1' && this.checkQuestion != 1
                    : this.settingList[2]?.value == 1 ?? true;
            }
        }
        else if (type == 'notassign') {
            if ((this.auth.getRoleId() == '2') || this.auth.getRoleId() == '6' || (this.auth.getRoleId() == '4') && (this.auth.getSessionData('teacher_type') == '0')) {
                this.batchDataList();
                this.classDropDown = true;
                this.firstAssign = true;
                this.linkform.controls.startDate.patchValue('');
                this.linkform.controls.endDate.patchValue('');
                this.linkform.controls.releaseScore.patchValue(this.isEssay == '1' ? '1' : '0');
                this.allowScore = this.contentName ? this.releaseGrade == '1' && this.resourcetype && this.contentType != '1' && this.checkQuestion != 1
                    : this.settingList[2]?.value == 1 ?? true;
                this.modalRef = this.modalService.open(this.addAssign, {
                    centered: false,
                    scrollable: false,
                    windowClass: 'assignPopUp',
                    size: 'xl',
                    backdrop: 'static'
                });
            }
            else if ((this.auth.getRoleId() == '4') && (this.auth.getSessionData('teacher_type') == '1')) {
                this.firstAssign = false;
                this.classDropDown = true;
                this.resourcetype = true;
                this.defaultShow = true;
                this.assign = '1';
                this.startdate = '';
                this.endDate = '';
                this.linkform.controls.classSelect.patchValue([]);
                this.linkform.controls.notes.patchValue('');
                setTimeout(() => {
                    this.linkform.controls.releaseScore.patchValue(this.isEssay == '1' ? '1' : '0');
                });
                this.linkform.controls.radio.patchValue('1');
                this.linkform.controls.startDate.patchValue('');
                this.linkform.controls.endDate.patchValue('');
                this.allowScore = this.contentName ? this.releaseGrade == '1' && this.resourcetype && this.contentType != '1' && this.checkQuestion != 1
                    : this.settingList[2]?.value == 1 ?? true;
                this.cdr.detectChanges();
                this.modalRef = this.modalService.open(this.addAssign, {
                    centered: false,
                    scrollable: false,
                    windowClass: 'assignPopUp',
                    size: 'xl',
                    backdrop: 'static'
                });
            }
        }
    }
    static { this.ɵfac = function ContentHomeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContentHomeComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.ConfigurationService), i0.ɵɵdirectiveInject(i3.AssessmentService), i0.ɵɵdirectiveInject(i4.ActivatedRoute), i0.ɵɵdirectiveInject(i5.FormBuilder), i0.ɵɵdirectiveInject(i6.DomSanitizer), i0.ɵɵdirectiveInject(i7.NgbModal), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i8.ClassService), i0.ɵɵdirectiveInject(i9.CreatorService), i0.ɵɵdirectiveInject(i10.ToastrService), i0.ɵɵdirectiveInject(i11.CommonService), i0.ɵɵdirectiveInject(i12.CommonDataService), i0.ɵɵdirectiveInject(i13.NavService), i0.ɵɵdirectiveInject(i14.DatePipe), i0.ɵɵdirectiveInject(i15.ValidationService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i16.NewsubjectService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContentHomeComponent, selectors: [["app-create-assessment"]], viewQuery: function ContentHomeComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(HeaderComponent, 5);
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
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.header = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addDetails = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addAsset = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.createContentTemp = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.createScratchTemp = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addResources = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addAssignment = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addAssessment = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addAssign = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.adddirectAssign = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteList = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myHiddenBtn = _t.first);
        } }, hostBindings: function ContentHomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ContentHomeComponent_click_HostBindingHandler($event) { return ctx.onDocumentClick($event); }, false, i0.ɵɵresolveDocument);
        } }, decls: 16, vars: 2, consts: [["detailsTemplate", ""], ["select", ""], ["assign", ""], ["batchassign", ""], ["delete", ""], ["allCreateContent", ""], ["createScratch", ""], ["chipList", ""], ["dp", "angular-mydatepicker"], ["dp1", "angular-mydatepicker"], ["class", "content-home container-fluid", 4, "ngIf"], [4, "ngIf"], ["id", "myModal11"], [1, "content-home", "container-fluid"], ["class", "content-header mb-4", 4, "ngIf"], [1, "card", "filter-card", "mb-4"], [1, "card-body"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-2", "mb-3"], ["type", "button", 1, "btn", "btn-link", "p-0", "text-decoration-none", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-rotate-left", "me-2"], [1, "form-check", "form-switch", "m-0"], ["type", "checkbox", "id", "exactSearchToggle", 1, "form-check-input", 3, "ngModelChange", "change", "ngModel"], ["for", "exactSearchToggle", 1, "form-check-label", "text-uppercase", "small"], [1, "row", "g-3"], [1, "col-12", "col-lg-4"], ["for", "myInput", 1, "form-label", "text-uppercase", "small", "mb-1"], [1, "input-group"], [1, "input-group-text", "bg-transparent", "border-end-0"], ["aria-hidden", "true", 1, "fa", "fa-search", "text-muted"], ["id", "myInput", "type", "text", "placeholder", "Search by subject, name, or grade", "aria-label", "Search content", 1, "form-control", "border-start-0", 3, "ngModelChange", "input", "ngModel"], [1, "col-12", "col-sm-6", "col-lg-2"], ["for", "libraryFilter", 1, "form-label", "text-uppercase", "small", "mb-1"], ["id", "libraryFilter", 1, "form-select", "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["for", "sortFilter", 1, "form-label", "text-uppercase", "small", "mb-1"], ["id", "sortFilter", 1, "form-select", "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", "AZ"], ["value", "ZA"], ["value", "-1"], [1, "form-label", "text-uppercase", "small", "mb-1"], [1, "filter-toggle-group", "d-flex", "flex-wrap", "gap-2"], ["type", "button", 1, "btn", "btn-outline-secondary", "flex-grow-1", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-user", "me-2"], ["aria-hidden", "true", 1, "fa", "fa-file-alt", "me-2"], [1, "col-12", "col-md-4"], ["bindLabel", "grade_name", "bindValue", "grade_id", "placeholder", "Select grade", "multiple", "true", "appendTo", "body", "dropdownPosition", "auto", 1, "filter-select", 3, "ngModelChange", "change", "items", "ngModel"], ["bindLabel", "subject_name", "bindValue", "subject_id", "placeholder", "Select subject", "multiple", "true", "appendTo", "body", "dropdownPosition", "auto", 1, "filter-select", 3, "ngModelChange", "change", "items", "ngModel"], ["bindLabel", "tag_name", "bindValue", "tag_id", "placeholder", "Select tags", "multiple", "true", "appendTo", "body", "dropdownPosition", "auto", 1, "filter-select", 3, "ngModelChange", "change", "items", "ngModel"], [1, "content-results-wrapper", "position-relative"], ["class", "loading-overlay", 4, "ngIf"], ["class", "row justify-content-center", 4, "ngIf"], ["class", "content-results row g-3", 3, "infiniteScroll", "infiniteScrollDistance", "infiniteScrollThrottle", "infiniteScrollContainer", "fromRoot", "scrolled", "scrolledUp", 4, "ngIf"], ["aria-label", "Content pagination", "class", "mt-4", 4, "ngIf"], [1, "content-header", "mb-4"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-3"], ["role", "tablist", 1, "nav", "nav-tabs", "content-tabs"], ["role", "presentation", 1, "nav-item"], ["type", "button", "role", "tab", "aria-label", "Content Library view", 1, "nav-link", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-book", "me-2"], ["type", "button", "role", "tab", "aria-label", "Content Folder view", 1, "nav-link", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-folder", "me-2"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2"], ["class", "btn btn-outline-primary", "type", "button", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", "type", "button", 3, "click", 4, "ngIf"], ["class", "btn btn-light", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-check-square", "me-1"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus", "me-1"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-long-arrow-left", "me-2"], [1, "loading-overlay"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2", "text-muted", "small", "fw-semibold"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-6"], [1, "nodataList"], [1, "content-results", "row", "g-3", 3, "scrolled", "scrolledUp", "infiniteScroll", "infiniteScrollDistance", "infiniteScrollThrottle", "infiniteScrollContainer", "fromRoot"], ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "content-card", "card", "h-100", 3, "click"], [1, "content-card__header"], [1, "content-card__primary"], ["class", "content-card__select", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "p-0", "border-0", "bg-transparent", 3, "click"], ["alt", "Content thumbnail", 1, "content-thumbnail", "rounded", 3, "src"], [1, "content-card__title"], [1, "content-card__name-row"], [1, "content-card__name", "text-truncate"], [1, "content-card__type", 3, "ngClass"], [1, "content-card__format"], ["type", "button", 1, "btn", "btn-link", "btn-sm", "p-0", "ms-1", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-circle-info"], [1, "content-card__meta"], ["class", "meta-item", 4, "ngIf"], [1, "content-card__actions", 3, "click"], [1, "status-pill", 3, "ngClass"], [1, "dropdown", "position-relative"], ["type", "button", 1, "btn", "btn-outline-secondary", "content-card__dropdown-toggle", 3, "click"], ["class", "dropdown-content", 3, "click", 4, "ngIf"], ["class", "content-card__details", 3, "click", 4, "ngIf"], [1, "content-card__select", 3, "click"], ["type", "checkbox", 1, "form-check-input", 3, "change", "checked", "disabled"], [1, "meta-item"], ["aria-hidden", "true", 1, "fa", "fa-layer-group"], [1, "meta-label"], [1, "meta-value"], ["aria-hidden", "true", 1, "fa", "fa-book"], ["aria-hidden", "true", 1, "fa", "fa-user"], ["aria-hidden", "true", 1, "fa", "fa-calendar"], [1, "content-card__tags"], ["class", "chip", 3, "hidden", 4, "ngFor", "ngForOf"], [1, "chip", 3, "hidden"], ["aria-hidden", "true", 1, "fa", "fa-tag"], [1, "dropdown-content", 3, "click"], [3, "click", 4, "ngIf"], [3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil"], ["aria-hidden", "true", 1, "fa", "fa-users"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["aria-hidden", "true", 1, "fa", "fa-address-card-o"], ["aria-hidden", "true", 1, "fa", "fa-trash"], [1, "content-card__details", 3, "click"], [1, "details-list"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["aria-label", "Content pagination", 1, "mt-4"], [1, "pagination", "justify-content-center"], [1, "page-item"], ["aria-label", "First page", 1, "page-link", 3, "click", "disabled"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-left"], ["aria-label", "Previous page", 1, "page-link", 3, "click", "disabled"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], ["class", "page-item", 4, "ngIf"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], ["aria-label", "Next page", 1, "page-link", 3, "click", "disabled"], ["aria-hidden", "true", 1, "fa", "fa-angle-right"], ["aria-label", "Last page", 1, "page-link", 3, "click", "disabled"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "text-center", "text-muted", "small", "mt-2"], [1, "page-link", "disabled"], [1, "page-link", 3, "click"], [1, "modal-header", "align-items-center"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn", "btn-link", "text-muted", "p-0", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-times"], [1, "modal-body"], [1, "row", "g-4"], [1, "col-md-5", "text-center", "text-md-start"], ["alt", "Content preview thumbnail", 1, "detail-thumbnail", 3, "src"], [1, "col-md-7"], [1, "modal-title", "w-100", "text-center"], [1, "fa", "fa-close", 2, "cursor", "pointer", 3, "click"], [1, "row"], [1, "col-md-4", "text-center"], ["alt", "Add Resources", "src", "assets/images/pdf-icons/books-stack-of-three.png"], ["type", "button", 1, "btn", "btn-primary", "w-100", "mt-4", "mb-2", 3, "click", "disabled"], ["alt", "Add Assignment", "src", "assets/images/pdf-icons/book.png"], ["alt", "Add Assessment", "src", "assets/images/pdf-icons/exam.png"], [1, "modal-dialog1"], [1, "modal-header"], [1, "contenttext", "mb-0"], [3, "formGroup"], ["class", "row form-group", 4, "ngIf"], ["class", "col-12 px-0", 4, "ngIf"], [1, "modal-footer"], ["class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], [1, "row", "form-group"], [1, "col-md-12"], [1, "font-weight-bold"], ["id", "selectBox", "formControlName", "typeSelection", 1, "form-control", 3, "change"], ["value", "n/a", "disabled", ""], ["value", "2", 4, "ngIf"], [1, "col-12", "font-weight-bold"], ["name", "chips", 3, "removed", 4, "ngFor", "ngForOf"], ["placeholder", "", "readonly", "", 3, "matChipInputFor", "matChipInputAddOnBlur"], ["name", "chips", 3, "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], ["class", "col-md-12", 4, "ngIf"], ["class", "col-md-8", 4, "ngIf"], ["class", "col-md-4", 4, "ngIf"], ["formControlName", "classname", "readonly", "", "type", "text", "placeholder", "Enter the Class Name", 1, "form-control", 3, "value"], [1, "col-md-8"], ["formControlName", "classSelect", "bindValue", "class_id", "bindLabel", "class_name", "placeholder", "Select Class *", "typeToSearchText", "", 3, "remove", "change", "close", "clear", "items", "multiple", "closeOnSelect"], ["ng-option-tmp", ""], [1, "col-md-4"], ["bindLabel", "teacher_name", "bindValue", "teacher_id", "formControlName", "teacherSelect", "placeholder", "Teacher Filter", "typeToSearchText", "", 3, "change", "items"], ["formControlName", "topicSelect", "bindValue", "topic_id", "bindLabel", "topic", "placeholder", "Select Topic", "typeToSearchText", "", 3, "items"], [1, "col-md-12", "px-0"], [3, "type", "calledForm", "treeviewHeight", "selectedbatch"], [1, "col-md-12", "d-flex", "align-items-center"], ["id", "allStudents", "type", "radio", "formControlName", "radio", "value", "1", 1, "mr-2", "cursor", 3, "change"], ["for", "allStudents", 1, "mr-4", "mb-0", "cursor"], ["id", "specificStudents", "type", "radio", "formControlName", "radio", "value", "0", 1, "mr-2", "cursor", 3, "change"], ["for", "specificStudents", 1, "mr-2", "mb-0", "cursor"], ["class", "col-md-8 mt-2", 4, "ngIf"], [1, "col-md-8", "mt-2"], ["formControlName", "specificstudent", "bindValue", "student_id", "bindLabel", "name", "placeholder", "Select Student", "typeToSearchText", "", "multiple", "true", 3, "items"], [1, "col-md-3"], [1, "col-12", 2, "position", "relative", "font-size", "15px", "left", "0.4rem"], ["type", "checkbox", "id", "download", "formControlName", "downloadcontent", 1, "form-check-input", "cursor"], ["for", "download", 1, "cursor", "mb-0", "font-weight-bold", 2, "font-size", "14px"], ["formControlName", "releaseScore", "class", "form-control mb-1", 3, "change", 4, "ngIf"], ["class", "notes_style", 4, "ngIf"], ["formControlName", "releaseScore", 1, "form-control", "mb-1", 3, "change"], [1, "notes_style"], [1, "col-12", "px-0"], [1, "assign-error", "text-center"], [1, "col-md-2"], ["type", "checkbox", "id", "workspace", "formControlName", "workspace", 1, "form-check-input", "cursor"], ["for", "workspace", 1, "cursor", "mb-0", "font-weight-bold", 2, "font-size", "14px"], ["type", "checkbox", "id", "feedback", "formControlName", "feedback", 1, "form-check-input", "cursor"], ["for", "feedback", 1, "cursor", "mb-0", "font-weight-bold", 2, "font-size", "14px"], ["class", "col-md-2", 4, "ngIf"], ["type", "checkbox", "id", "showTimer", "formControlName", "showTimer", 1, "form-check-input", "cursor"], ["for", "showTimer", 1, "cursor", "mb-0", "font-weight-bold", 2, "font-size", "14px"], ["formArrayName", "dateRanges", 3, "class", 4, "ngFor", "ngForOf"], ["formArrayName", "dateRanges"], [1, "row", 3, "formGroupName"], [1, "col-md-12", "mb-2"], [1, "row", "contenttext"], [1, "align-content-center", "col-md-4"], [1, "mb-0", 2, "color", "#777777"], [1, "align-content-center", "col-md-3", "pl-0"], [1, "t-name", "font-weight-bold"], ["class", "col-md-2 text-right", 4, "ngIf"], [1, "row", "align-items-center"], [1, "col-md-4", "mb-0", "pr-2", "font-weight-bold"], ["formControlName", "startDate", "placeholder", "Start Date", "name", "dp", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", "col-md-8", 3, "dateChanged", "click", "options"], [1, "mb-0", "ml-3", "mr-1", "font-weight-bold"], [1, "col-md-8", "px-0"], ["formControlName", "startTime", 3, "meridian", "spinners"], ["class", "error", 4, "ngIf"], ["class", "small form-text text-danger", 4, "ngIf"], [1, "col-md-4", "mb-0", "font-weight-bold"], ["formControlName", "endDate", "placeholder", "End Date", "name", "dp1", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", "col-md-8", 3, "dateChanged", "click", "options"], ["formControlName", "endTime", 3, "meridian", "spinners"], [1, "col-md-2", "text-right"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "error"], [1, "small", "form-text", "text-danger"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "contenttext"], ["formControlName", "batch", "readonly", "", "type", "text", "placeholder", "Enter the Class Name", 1, "form-control", 3, "value"], [1, "btn", "btn-primary", 3, "click"], ["formControlName", "releaseScore", 1, "form-control", 3, "change"], ["value", "0", 4, "ngIf"], ["value", "1", 4, "ngIf"], ["style", "color: #757070; font-size: 13px", 4, "ngIf"], [2, "color", "#757070", "font-size", "13px"], [1, "modal-title", "col-12"], [1, "container-fluid"], [1, "col-sm-12"], [1, "my-2"], ["type", "button", 1, "btn", "cancel", 3, "click"], [1, "col-md-6", 2, "min-height", "200px"], [1, "row", "d-flex", "align-items-center", "justify-content-center"], [1, "col-11", "text-center", "select-div", 3, "click", "routerLink"], ["src", "assets/images/pdf-icons/Icon ionic-md-cloud-upload.png"], [1, "mt-3"], [1, "row", "d-flex", "align-items-center", "justify-content-center", 2, "height", "100%"], [1, "col-11", "text-center", "select-div", 2, "height", "100%", 3, "click"], ["src", "assets/images/pdf-icons/Icon material-library-books.png"], ["src", "assets/images/pdf-icons/books-stack-of-three.png"], ["type", "button", 1, "btn", "btn-primary", "w-100", "mt-4", "mb-2", 3, "click", "disabled", "routerLink"], ["src", "assets/images/pdf-icons/book.png"], ["src", "assets/images/pdf-icons/exam.png"]], template: function ContentHomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ContentHomeComponent_div_0_Template, 72, 20, "div", 10)(1, ContentHomeComponent_div_1_Template, 2, 0, "div", 11)(2, ContentHomeComponent_ng_template_2_Template, 19, 10, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(4, ContentHomeComponent_ng_template_4_Template, 19, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(6, ContentHomeComponent_ng_template_6_Template, 22, 16, "ng-template", 12, 2, i0.ɵɵtemplateRefExtractor)(8, ContentHomeComponent_ng_template_8_Template, 18, 5, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(10, ContentHomeComponent_ng_template_10_Template, 15, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(12, ContentHomeComponent_ng_template_12_Template, 23, 1, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(14, ContentHomeComponent_ng_template_14_Template, 19, 4, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", (ctx.schoolStatus == null ? null : ctx.schoolStatus.length) != 0 || ctx.auth.getRoleId() == "3");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.schoolStatus == null ? null : ctx.schoolStatus.length) == 0);
        } }, dependencies: [i14.NgClass, i14.NgForOf, i14.NgIf, i14.NgSwitch, i14.NgSwitchCase, i14.NgSwitchDefault, i4.RouterLink, i17.NgSelectComponent, i17.NgOptionTemplateDirective, i5.ɵNgNoValidate, i5.NgSelectOption, i5.ɵNgSelectMultipleOption, i5.DefaultValueAccessor, i5.CheckboxControlValueAccessor, i5.SelectControlValueAccessor, i5.RadioControlValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.NgModel, i5.FormGroupDirective, i5.FormControlName, i5.FormGroupName, i5.FormArrayName, i7.NgbTimepicker, i18.AngularMyDatePickerDirective, i19.InfiniteScrollDirective, i20.EmptyschoolComponent, i21.TreeviewContentfolderComponent, i22.MatIcon, i23.MatFormField, i24.MatChipGrid, i24.MatChipInput, i24.MatChipRemove, i24.MatChipRow, i25.CustomDateFormatPipe], styles: [".vertical.selfScroll[_ngcontent-%COMP%] {\n  overflow-x: hidden !important;\n}\n\n.nodataList[_ngcontent-%COMP%] {\n  background: #f8f8f9;\n  border: 2px solid #7F3486;\n  padding: 15px 25px;\n  text-align: center;\n  border-radius: 7px;\n  color: #7F3486;\n  width: 100%;\n  font-weight: bolder;\n  font-size: large;\n}\n\n//[_ngcontent-%COMP%]   Pagination[_ngcontent-%COMP%]   styles\n.pagination[_ngcontent-%COMP%] {\n  .page-link {\n    color: #7F3486;\n    border-color: #dee2e6;\n    padding: 0.5rem 0.75rem;\n    \n    &:hover:not(:disabled) {\n      background-color: rgba(127, 52, 134, 0.1);\n      border-color: #7F3486;\n      color: #7F3486;\n    }\n    \n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(127, 52, 134, 0.25);\n    }\n  }\n  \n  .page-item.active .page-link {\n    background-color: #7F3486;\n    border-color: #7F3486;\n    color: white;\n  }\n  \n  .page-item.disabled .page-link {\n    color: #6c757d;\n    pointer-events: none;\n    cursor: not-allowed;\n    background-color: #fff;\n    border-color: #dee2e6;\n  }\n}\n\n.content-thumbnail[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  object-fit: cover;\n  border: 2px solid rgba(143, 0, 138, 0.15);\n  transition: transform var(--transition-base) ease;\n\n  &:hover {\n    transform: scale(1.05);\n  }\n}\n\n.detail-thumbnail[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 370px;\n  height: auto;\n  border-radius: var(--radius-lg);\n  object-fit: cover;\n  box-shadow: var(--shadow-base);\n}\n\n.content-home[_ngcontent-%COMP%] {\n  .content-header {\n    background: white;\n    border-radius: var(--radius-lg);\n    padding: 1rem;\n    box-shadow: var(--shadow-sm);\n    margin-bottom: 1.5rem;\n  }\n\n  .content-tabs {\n    border: none;\n    margin-bottom: 0;\n    \n    .nav-item {\n      margin-bottom: 0;\n    }\n    \n    .nav-link {\n      border: none;\n      color: #6c757d;\n      padding: 0.75rem 1.5rem;\n      font-weight: 500;\n      background: transparent;\n      border-bottom: 3px solid transparent;\n      transition: all 0.3s ease;\n      \n      i {\n        color: #6c757d;\n        transition: color 0.3s ease;\n      }\n      \n      &:hover {\n        color: #7F3486;\n        background: rgba(127, 52, 134, 0.05);\n        border-bottom-color: rgba(127, 52, 134, 0.3);\n        \n        i {\n          color: #7F3486;\n        }\n      }\n      \n      &.active {\n        color: #7F3486;\n        background: rgba(127, 52, 134, 0.1);\n        border-bottom-color: #7F3486;\n        font-weight: 600;\n        \n        i {\n          color: #7F3486;\n        }\n      }\n    }\n  }\n\n  .filter-card {\n    border-radius: var(--radius-lg);\n    border: none;\n    box-shadow: var(--shadow-base);\n    overflow: visible;\n\n    .card-body {\n      padding: var(--spacing-4);\n    }\n\n    .form-select,\n    .form-control {\n      min-height: 2.25rem;\n      font-size: 0.875rem;\n    }\n\n    .form-label {\n      margin-bottom: 0.25rem;\n      font-size: 0.8rem;\n      color: var(--neutral-600);\n    }\n  }\n\n  .filter-toggle-group {\n    .btn {\n      border-radius: var(--radius-md);\n      font-weight: 600;\n      transition: all var(--transition-base) ease;\n      color: var(--neutral-600);\n\n      &.active,\n      &:hover {\n        background: var(--color-primary);\n        border-color: var(--color-primary);\n        color: #fff;\n        box-shadow: var(--shadow-sm);\n      }\n    }\n  }\n\n  .content-results-wrapper {\n    position: relative;\n    padding: var(--spacing-4);\n    border-radius: var(--radius-lg);\n    background: #fff;\n\n    .loading-overlay {\n      position: absolute;\n      inset: 0;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      background: rgba(255, 255, 255, 0.92);\n      z-index: 5;\n    }\n  }\n\n  .content-results {\n    margin: 0;\n  }\n\n  .content-card {\n    border: 1px solid var(--neutral-200);\n    border-radius: var(--radius-lg);\n    box-shadow: var(--shadow-sm);\n    transition: transform var(--transition-base) ease, box-shadow var(--transition-base) ease;\n    position: relative;\n    z-index: 1;\n    overflow: visible;\n\n    &:hover:not(.dropdown-open) {\n      transform: translateY(-2px);\n      box-shadow: var(--shadow-md);\n      border-color: transparent;\n    }\n\n    .card-body {\n      display: flex;\n      flex-direction: column;\n      gap: var(--spacing-3);\n    }\n\n    &.dropdown-open {\n      z-index: 1200;\n      box-shadow: var(--shadow-lg);\n      transform: none !important;\n    }\n  }\n\n  .content-card__header {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: var(--spacing-3);\n  }\n\n  .content-card__primary {\n    display: flex;\n    align-items: flex-start;\n    gap: var(--spacing-3);\n    flex: 1 1 auto;\n  }\n\n  .content-card__select {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-2);\n\n    .form-check-input {\n      width: 1rem;\n      height: 1rem;\n      margin-top: 0;\n    }\n  }\n\n  .content-card__title {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-2);\n    min-width: 0;\n  }\n\n  .content-card__name-row {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    gap: var(--spacing-2);\n  }\n\n  .content-card__name {\n    font-weight: 600;\n    font-size: 1rem;\n    color: var(--neutral-900);\n    min-width: 0;\n  }\n\n  .content-card__type,\n  .content-card__format {\n    padding: 0.25rem 0.5rem;\n    border-radius: 999px;\n    font-size: 0.75rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n  }\n\n  .content-card__type {\n    &--resource {\n      background: rgba(143, 0, 138, 0.12);\n      color: var(--color-primary);\n    }\n\n    &--assignment {\n      background: rgba(19, 201, 202, 0.12);\n      color: var(--color-secondary);\n    }\n\n    &--assessment {\n      background: rgba(255, 188, 88, 0.18);\n      color: var(--color-warning);\n    }\n  }\n\n  .content-card__format {\n    background: var(--neutral-100);\n    color: var(--neutral-700);\n  }\n\n  .content-card__tags {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n  }\n\n  .chip {\n    display: inline-flex;\n    align-items: center;\n    gap: 0.35rem;\n    padding: 0.25rem 0.65rem;\n    border-radius: 999px;\n    background: var(--neutral-100);\n    border: 1px solid var(--neutral-200);\n    color: var(--neutral-700);\n    font-size: 0.75rem;\n    font-weight: 600;\n\n    i {\n      font-size: 0.85em;\n      color: inherit;\n    }\n  }\n\n  .content-card__actions {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-2);\n    flex-shrink: 0;\n    position: relative;\n  }\n\n  .content-card__dropdown-toggle {\n    min-width: auto;\n    height: 2rem;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: var(--radius-md);\n    padding: 0 0.75rem;\n    white-space: nowrap;\n  }\n\n  .dropdown-content {\n    position: absolute;\n    top: calc(100% + 0.5rem);\n    right: 0;\n    min-width: 180px;\n    border-radius: var(--radius-md);\n    box-shadow: var(--shadow-lg);\n    border: 1px solid var(--neutral-200);\n    padding: var(--spacing-2);\n    background: #fff;\n    z-index: 1500;\n    pointer-events: auto;\n    user-select: none;\n\n    a {\n      display: flex;\n      align-items: center;\n      gap: 0.5rem;\n      padding: 0.35rem 0.5rem;\n      font-size: 0.875rem;\n      color: var(--neutral-700);\n      border-radius: var(--radius-sm);\n      transition: background var(--transition-fast) ease;\n      cursor: pointer;\n      text-decoration: none;\n      user-select: none;\n\n      &:hover {\n        background: var(--neutral-100);\n      }\n      \n      i {\n        pointer-events: none;\n      }\n    }\n  }\n  \n  .dropdown {\n    position: relative;\n    \n    &.show {\n      z-index: 1500;\n      \n      .content-card__dropdown-toggle {\n        z-index: 1501;\n      }\n      \n      .dropdown-content {\n        z-index: 1502;\n      }\n    }\n  }\n\n  .status-pill {\n    display: inline-flex;\n    align-items: center;\n    padding: 0.25rem 0.6rem;\n    border-radius: 999px;\n    font-size: 0.75rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n    background: var(--neutral-100);\n    color: var(--neutral-700);\n\n    &--success {\n      background: rgba(129, 186, 0, 0.15);\n      color: var(--color-success);\n    }\n\n    &--warning {\n      background: rgba(255, 188, 88, 0.18);\n      color: var(--color-warning);\n    }\n\n    &--info {\n      background: rgba(19, 201, 202, 0.12);\n      color: var(--color-secondary);\n    }\n  }\n\n  .content-card__meta {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--spacing-3);\n    font-size: 0.8125rem;\n    color: var(--neutral-600);\n  }\n\n  .meta-item {\n    display: flex;\n    align-items: center;\n    gap: 0.35rem;\n\n    i {\n      color: var(--neutral-500);\n      font-size: 1rem;\n    }\n\n    .meta-label {\n      font-weight: 600;\n      color: var(--neutral-700);\n    }\n\n    .meta-value {\n      color: var(--neutral-800);\n      font-weight: 500;\n    }\n  }\n\n  .content-card__details {\n    margin-top: var(--spacing-3);\n    padding: var(--spacing-3);\n    border-radius: var(--radius-lg);\n    border: 1px solid var(--neutral-200);\n    background: var(--neutral-50);\n  }\n\n  .details-list {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n\n    dt {\n      margin: 0;\n      font-size: 0.75rem;\n      text-transform: uppercase;\n      letter-spacing: 0.04em;\n      color: var(--neutral-600);\n    }\n\n    dd {\n      margin: 0;\n      font-weight: 600;\n      color: var(--neutral-900);\n    }\n  }\n\n  @media (max-width: 767.98px) {\n    .content-card__header {\n      flex-direction: column;\n      align-items: flex-start;\n      gap: var(--spacing-2);\n    }\n\n    .content-card__primary {\n      flex-direction: column;\n      gap: var(--spacing-2);\n    }\n\n    .content-card__actions {\n      width: 100%;\n      justify-content: space-between;\n    }\n  }\n}\n\n[_nghost-%COMP%]     .content-home .ng-dropdown-panel {\n  z-index: 1050;\n}\n\n[_nghost-%COMP%]     .ng-dropdown-panel {\n  z-index: 2000 !important;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentHomeComponent, [{
        type: Component,
        args: [{ selector: 'app-create-assessment', template: "<div class=\"content-home container-fluid\" *ngIf=\"schoolStatus?.length != 0 || this.auth.getRoleId() == '3'\">\n    <!-- Tab Navigation and Action Buttons -->\n    <div class=\"content-header mb-4\" *ngIf=\"manageOwnContent || !backContentIcon\">\n        <div class=\"d-flex flex-wrap align-items-center justify-content-between gap-3\">\n            <!-- Tabs -->\n            <ul class=\"nav nav-tabs content-tabs\" role=\"tablist\">\n                <li class=\"nav-item\" role=\"presentation\">\n                    <button \n                        class=\"nav-link\" \n                        [class.active]=\"activeTab === 'library'\"\n                        type=\"button\"\n                        role=\"tab\"\n                        (click)=\"switchTab('library')\"\n                        aria-label=\"Content Library view\">\n                        <i class=\"fa fa-book me-2\" aria-hidden=\"true\"></i>\n                        Content Library\n                    </button>\n                </li>\n                <li class=\"nav-item\" role=\"presentation\">\n                    <button \n                        class=\"nav-link\" \n                        [class.active]=\"activeTab === 'folder'\"\n                        type=\"button\"\n                        role=\"tab\"\n                        (click)=\"switchTab('folder')\"\n                        aria-label=\"Content Folder view\">\n                        <i class=\"fa fa-folder me-2\" aria-hidden=\"true\"></i>\n                        Content Folder\n                    </button>\n                </li>\n            </ul>\n            \n            <!-- Action Buttons -->\n            <div class=\"d-flex flex-wrap align-items-center gap-2\">\n                <button class=\"btn btn-outline-primary\" type=\"button\" *ngIf=\"multiContentId.length > 1\" (click)=\"multiAssignOfContent()\">\n                    <i class=\"fa fa-check-square me-1\" aria-hidden=\"true\"></i>\n                    Assign Selected ({{multiContentId.length}})\n                </button>\n                <button class=\"btn btn-primary\" type=\"button\" *ngIf=\"manageOwnContent\" (click)=\"showAdd()\">\n                    <i class=\"fa fa-plus me-1\" aria-hidden=\"true\"></i>\n                    Create Content\n                </button>\n                <button class=\"btn btn-light\" type=\"button\" *ngIf=\"!backContentIcon\" (click)=\"enterList()\">\n                    <i class=\"fa fa-long-arrow-left me-2\" aria-hidden=\"true\"></i>\n                    Back\n                </button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"card filter-card mb-4\">\n        <div class=\"card-body\">\n            <div class=\"d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3\">\n                <button type=\"button\" class=\"btn btn-link p-0 text-decoration-none\" (click)=\"clearall()\">\n                    <i class=\"fa fa-rotate-left me-2\" aria-hidden=\"true\"></i>\n                    Clear filters\n                </button>\n                <div class=\"form-check form-switch m-0\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"exactSearchToggle\" [(ngModel)]=\"exactSearch\" (change)=\"sortExact()\">\n                    <label class=\"form-check-label text-uppercase small\" for=\"exactSearchToggle\">Exact search</label>\n                </div>\n            </div>\n            <div class=\"row g-3\">\n                <div class=\"col-12 col-lg-4\">\n                    <label class=\"form-label text-uppercase small mb-1\" for=\"myInput\">Search</label>\n                    <div class=\"input-group\">\n                        <span class=\"input-group-text bg-transparent border-end-0\"><i class=\"fa fa-search text-muted\" aria-hidden=\"true\"></i></span>\n                        <input id=\"myInput\" type=\"text\" class=\"form-control border-start-0\" placeholder=\"Search by subject, name, or grade\" [(ngModel)]=\"searchKey\" (input)=\"updateFilter(searchKey)\" aria-label=\"Search content\">\n                    </div>\n                </div>\n                <div class=\"col-12 col-sm-6 col-lg-2\">\n                    <label class=\"form-label text-uppercase small mb-1\" for=\"libraryFilter\">Library</label>\n                    <select id=\"libraryFilter\" class=\"form-select filter-select\" [(ngModel)]=\"libraryselection\" (change)=\"library($event)\">\n                        <option value=\"0\">Entire Library</option>\n                        <option value=\"1\">Resource</option>\n                        <option value=\"2\">Assignment</option>\n                        <option value=\"3\">Assessment</option>\n                    </select>\n                </div>\n                <div class=\"col-12 col-sm-6 col-lg-2\">\n                    <label class=\"form-label text-uppercase small mb-1\" for=\"sortFilter\">Sort By</label>\n                    <select id=\"sortFilter\" class=\"form-select filter-select\" [(ngModel)]=\"sortfilter\" (change)=\"sort($event)\">\n                        <option value=\"0\">Recent</option>\n                        <option value=\"AZ\">A - Z</option>\n                        <option value=\"ZA\">Z - A</option>\n                        <option value=\"-1\">Popularity</option>\n                    </select>\n                </div>\n                <div class=\"col-12 col-lg-4\">\n                    <label class=\"form-label text-uppercase small mb-1\">Quick Filters</label>\n                    <div class=\"filter-toggle-group d-flex flex-wrap gap-2\">\n                        <button type=\"button\" class=\"btn btn-outline-secondary flex-grow-1\" [class.active]=\"selectAuthored === 'active2'\" (click)=\"callCurrentBtn('authored')\">\n                            <i class=\"fa fa-user me-2\" aria-hidden=\"true\"></i>\n                            Authored by Me\n                        </button>\n                        <button type=\"button\" class=\"btn btn-outline-secondary flex-grow-1\" [class.active]=\"selectDraft === 'active2'\" (click)=\"callCurrentBtn('mydraft')\">\n                            <i class=\"fa fa-file-alt me-2\" aria-hidden=\"true\"></i>\n                            My Drafts\n                        </button>\n                    </div>\n                </div>\n                <div class=\"col-12 col-md-4\">\n                    <label class=\"form-label text-uppercase small mb-1\">Grade</label>\n                    <ng-select class=\"filter-select\"\n                               [items]=\"gradeData\"\n                               [(ngModel)]=\"gradeid\"\n                               bindLabel=\"grade_name\"\n                               bindValue=\"grade_id\"\n                               placeholder=\"Select grade\"\n                               multiple=\"true\"\n                               appendTo=\"body\"\n                               dropdownPosition=\"auto\"\n                               (change)=\"selectedgrade($event)\">\n                    </ng-select>\n                </div>\n                <div class=\"col-12 col-md-4\">\n                    <label class=\"form-label text-uppercase small mb-1\">Subject</label>\n                    <ng-select class=\"filter-select\"\n                               [items]=\"subjectData\"\n                               [(ngModel)]=\"subjectid\"\n                               bindLabel=\"subject_name\"\n                               bindValue=\"subject_id\"\n                               placeholder=\"Select subject\"\n                               multiple=\"true\"\n                               appendTo=\"body\"\n                               dropdownPosition=\"auto\"\n                               (change)=\"selectedsubject($event)\">\n                    </ng-select>\n                </div>\n                <div class=\"col-12 col-md-4\">\n                    <label class=\"form-label text-uppercase small mb-1\">Tags</label>\n                    <ng-select class=\"filter-select\"\n                               [items]=\"tagData\"\n                               [(ngModel)]=\"tagid\"\n                               bindLabel=\"tag_name\"\n                               bindValue=\"tag_id\"\n                               placeholder=\"Select tags\"\n                               multiple=\"true\"\n                               appendTo=\"body\"\n                               dropdownPosition=\"auto\"\n                               (change)=\"selectedtag($event)\">\n                    </ng-select>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"content-results-wrapper position-relative\">\n        <div class=\"loading-overlay\" *ngIf=\"isLoading\">\n            <div class=\"spinner-border text-primary\" role=\"status\">\n                <span class=\"visually-hidden\">Loading...</span>\n            </div>\n            <div class=\"mt-2 text-muted small fw-semibold\">Loading content</div>\n        </div>\n\n        <div class=\"row justify-content-center\" *ngIf=\"!isLoading && contentdata.length == 0 && (manageOwnContent || manageInstitutionContent)\">\n            <div class=\"col-12 col-md-6\">\n                <div class=\"nodataList\">No content matches your filters.</div>\n            </div>\n        </div>\n\n        <div class=\"row justify-content-center\" *ngIf=\"!manageOwnContent && !manageInstitutionContent\">\n            <div class=\"col-12 col-md-6\">\n                <div class=\"nodataList\">You don't have permission to access content. Please contact admin.</div>\n            </div>\n        </div>\n\n        <div class=\"content-results row g-3\"\n             *ngIf=\"contentdata.length != 0 && (manageOwnContent || manageInstitutionContent)\"\n             [infiniteScroll]=\"!showPagination\"\n             [infiniteScrollDistance]=\"2\"\n             [infiniteScrollThrottle]=\"50\"\n             [infiniteScrollContainer]=\"selector\"\n             [fromRoot]=\"true\"\n             (scrolled)=\"onScrollDown($event)\"\n             (scrolledUp)=\"onUp($event)\">\n            <div class=\"col-12\" *ngFor=\"let list of contentdata; let i = index\">\n                <article class=\"content-card card h-100\"\n                         (click)=\"navigateToPreview(list)\"\n                         [attr.title]=\"list.name\"\n                         [class.dropdown-open]=\"list.showDropdown\">\n                    <div class=\"card-body\">\n                        <div class=\"content-card__header\">\n                            <div class=\"content-card__primary\">\n                                <div class=\"content-card__select\" *ngIf=\"assignDirect || !backContentIcon\" (click)=\"$event.stopPropagation()\">\n                                    <input class=\"form-check-input\"\n                                           type=\"checkbox\"\n                                           [checked]=\"list.checked\"\n                                           [disabled]=\"list.details == 'Draft'\"\n                                           (change)=\"selectOrUnSelectContentList(list, $event)\">\n                                </div>\n                                <button type=\"button\"\n                                        class=\"btn p-0 border-0 bg-transparent\"\n                                        (click)=\"detailPreview(i, 'details'); $event.stopPropagation()\"\n                                        [attr.aria-label]=\"'View details for ' + list.name\">\n                                    <img class=\"content-thumbnail rounded\" [src]=\"getContentThumbnail(list)\" alt=\"Content thumbnail\">\n                                </button>\n                                <div class=\"content-card__title\">\n                                    <div class=\"content-card__name-row\">\n                                        <span class=\"content-card__name text-truncate\" [attr.title]=\"list.name\">{{ list.name }}</span>\n                                        <span class=\"content-card__type\"\n                                              [ngClass]=\"{\n                                                'content-card__type--resource': list.content_type == 1 || list.content_type == '1',\n                                                'content-card__type--assignment': list.content_type == 2 || list.content_type == '2',\n                                                'content-card__type--assessment': list.content_type == 3 || list.content_type == '3'\n                                              }\">\n                                            {{ list.content_type == 1 || list.content_type == '1' ? 'Resource' : list.content_type == 2 || list.content_type == '2' ? 'Assignment' : 'Assessment' }}\n                                        </span>\n                                        <span class=\"content-card__format\">\n                                            {{ list.content_format == 3 || list.content_format == '3' ? 'Text' : (list.is_pdf_content == 0 || list.is_pdf_content == '0') ? 'Link' : 'PDF' }}\n                                        </span>\n                                        <button type=\"button\"\n                                                class=\"btn btn-link btn-sm p-0 ms-1\"\n                                                (click)=\"showInfo(list, i); $event.stopPropagation()\"\n                                                [attr.aria-expanded]=\"list.showDetails ? 'true' : 'false'\"\n                                                [attr.aria-label]=\"'Toggle additional info for ' + list.name\">\n                                            <i class=\"fa fa-circle-info\" aria-hidden=\"true\"></i>\n                                        </button>\n                                    </div>\n                                    <div class=\"content-card__meta\">\n                                        <span class=\"meta-item\" *ngIf=\"list.grade_name\">\n                                            <i class=\"fa fa-layer-group\" aria-hidden=\"true\"></i>\n                                            <span class=\"meta-label\">Grade</span>\n                                            <span class=\"meta-value\">{{ list.grade_name }}</span>\n                                        </span>\n                                        <span class=\"meta-item\" *ngIf=\"list.subject_name\">\n                                            <i class=\"fa fa-book\" aria-hidden=\"true\"></i>\n                                            <span class=\"meta-label\">Subject</span>\n                                            <span class=\"meta-value\">{{ list.subject_name }}</span>\n                                        </span>\n                                        <span class=\"meta-item\" *ngIf=\"list.created_by\">\n                                            <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                                            <span class=\"meta-label\">Created</span>\n                                            <span class=\"meta-value\">{{ list.created_by }}</span>\n                                        </span>\n                                        <span class=\"meta-item\" *ngIf=\"list.created_date\">\n                                            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                            <span class=\"meta-label\">Updated</span>\n                                            <span class=\"meta-value\">{{ list.created_date | customDateFormat }}</span>\n                                        </span>\n                                    </div>\n                                    <ng-container *ngIf=\"(list.tag_name || list.tagname)\">\n                                        <div class=\"content-card__tags\">\n                                            <span class=\"chip\"\n                                                  *ngFor=\"let tag of (list.tag_name || list.tagname)?.split(',')\"\n                                                  [hidden]=\"!tag || !tag.trim()\">\n                                                <i class=\"fa fa-tag\" aria-hidden=\"true\"></i>\n                                                {{ tag.trim() }}\n                                            </span>\n                                        </div>\n                                    </ng-container>\n                                </div>\n                            </div>\n                            <div class=\"content-card__actions\" (click)=\"$event.stopPropagation()\">\n                                <span class=\"status-pill\"\n                                      [ngClass]=\"{\n                                        'status-pill--success': list.details === 'Published',\n                                        'status-pill--warning': list.details === 'Draft',\n                                        'status-pill--info': list.details !== 'Published' && list.details !== 'Draft'\n                                      }\">\n                                    {{ list.details }}\n                                </span>\n                                <div class=\"dropdown position-relative\" [class.show]=\"list.showDropdown\">\n                                    <button type=\"button\"\n                                            class=\"btn btn-outline-secondary content-card__dropdown-toggle\"\n                                            (click)=\"toggleDropdown(i); $event.stopPropagation()\">\n                                        Action\n                                    </button>\n                                    <div class=\"dropdown-content\" *ngIf=\"list.showDropdown\" (click)=\"$event.stopPropagation()\">\n                                        <a *ngIf=\"(roleid == '4' && list.edit_status == '1') || (roleid == '6' && list.edit_status != '0')\"\n                                           (click)=\"closeDropdown(i); editAction(list, list.content_format == 3 ? 'addText' : 'addPdf', '0')\">\n                                            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit\n                                        </a>\n                                        <a *ngIf=\"roleid == '2' && !(auth.getSessionData('school_id') != list.school_id && list.access == '3') && list.access != '4'\"\n                                           (click)=\"closeDropdown(i); editAction(list, list.content_format == 3 ? 'addText' : 'addPdf', '0')\">\n                                            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit\n                                        </a>\n                                        <a *ngIf=\"showIcon && assignIcon\" (click)=\"closeDropdown(i); assignResource(i, 'assign')\">\n                                            <i class=\"fa fa-users\" aria-hidden=\"true\"></i> Assign\n                                        </a>\n                                        <a *ngIf=\"assignDirect\" (click)=\"closeDropdown(i); assignResource(i, 'notassign')\">\n                                            <i class=\"fa fa-users\" aria-hidden=\"true\"></i> Assign\n                                        </a>\n                                        <a *ngIf=\"browseAllAssign == true && assignDirect == false\" (click)=\"closeDropdown(i); assignResource(i, 'browseAssign')\">\n                                            <i class=\"fa fa-users\" aria-hidden=\"true\"></i> Assign\n                                        </a>\n                                        <a *ngIf=\"list.content_format == 1\" (click)=\"closeDropdown(i); PreviewPage(list, list.content_type)\">\n                                            <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> Preview\n                                        </a>\n                                        <a *ngIf=\"list.content_format == 3\" (click)=\"closeDropdown(i); PreviewText(list, list.content_type)\">\n                                            <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> Preview\n                                        </a>\n                                        <a *ngIf=\"detailButtonPreview == true\" (click)=\"closeDropdown(i); detailPreview(i, 'details')\">\n                                            <i class=\"fa fa-address-card-o\" aria-hidden=\"true\"></i> Details\n                                        </a>\n                                        <a *ngIf=\"(roleid == '2' && list.access != '3' && list.access != '4') || (roleid == '6' && list.access == '4') || (roleid == '4' && list.edit_status == '1')\"\n                                           (click)=\"closeDropdown(i); removeContent(list)\">\n                                            <i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <section class=\"content-card__details\" *ngIf=\"list.showDetails\" (click)=\"$event.stopPropagation()\">\n                            <dl class=\"details-list\">\n                                <ng-container *ngIf=\"list.created_by\">\n                                    <dt>Created by</dt>\n                                    <dd>{{ list.created_by }}</dd>\n                                </ng-container>\n                                <ng-container *ngIf=\"list.created_date\">\n                                    <dt>Created on</dt>\n                                    <dd>{{ list.created_date | customDateFormat }}</dd>\n                                </ng-container>\n                                <dt>Content type</dt>\n                                <dd>\n                                    {{ list.content_type == 1 || list.content_type == '1' ? 'Resources' : list.content_type == 2 || list.content_type == '2' ? 'Assignment' : 'Assessment' }}\n                                    {{ list.content_format == 3 || list.content_format == '3' ? '(Text)' : (list.is_pdf_content == 0 || list.is_pdf_content == '0') ? '(Link)' : '(PDF)' }}\n                                </dd>\n                                <ng-container *ngIf=\"list.access\">\n                                    <dt>Access</dt>\n                                    <dd>\n                                        <ng-container [ngSwitch]=\"list.access\">\n                                            <ng-container *ngSwitchCase=\"'1'\">Access to all within Org</ng-container>\n                                            <ng-container *ngSwitchCase=\"'2'\">Access only for you</ng-container>\n                                            <ng-container *ngSwitchCase=\"'3'\">Public</ng-container>\n                                            <ng-container *ngSwitchCase=\"'4'\">Access within corporate</ng-container>\n                                            <ng-container *ngSwitchDefault>Access restricted</ng-container>\n                                        </ng-container>\n                                    </dd>\n                                </ng-container>\n                            </dl>\n                        </section>\n                    </div>\n                </article>\n            </div>\n        </div>\n\n        <!-- Pagination Controls -->\n        <nav aria-label=\"Content pagination\" *ngIf=\"contentdata.length > 0 && showPagination && totalPages > 1\" class=\"mt-4\">\n            <ul class=\"pagination justify-content-center\">\n                <li class=\"page-item\" [class.disabled]=\"pageNo === 1\">\n                    <button class=\"page-link\" (click)=\"goToFirstPage()\" [disabled]=\"pageNo === 1\" aria-label=\"First page\">\n                        <i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i>\n                    </button>\n                </li>\n                <li class=\"page-item\" [class.disabled]=\"pageNo === 1\">\n                    <button class=\"page-link\" (click)=\"loadPreviousPage()\" [disabled]=\"pageNo === 1\" aria-label=\"Previous page\">\n                        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                    </button>\n                </li>\n                \n                <li class=\"page-item\" *ngIf=\"paginationPages[0] > 1\">\n                    <span class=\"page-link disabled\">...</span>\n                </li>\n                \n                <li class=\"page-item\" *ngFor=\"let page of paginationPages\" [class.active]=\"page === pageNo\">\n                    <button class=\"page-link\" (click)=\"goToPage(page)\" [attr.aria-current]=\"page === pageNo ? 'page' : null\">\n                        {{ page }}\n                    </button>\n                </li>\n                \n                <li class=\"page-item\" *ngIf=\"paginationPages[paginationPages.length - 1] < totalPages\">\n                    <span class=\"page-link disabled\">...</span>\n                </li>\n                \n                <li class=\"page-item\" [class.disabled]=\"pageNo === totalPages\">\n                    <button class=\"page-link\" (click)=\"loadNextPage()\" [disabled]=\"pageNo === totalPages\" aria-label=\"Next page\">\n                        <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n                    </button>\n                </li>\n                <li class=\"page-item\" [class.disabled]=\"pageNo === totalPages\">\n                    <button class=\"page-link\" (click)=\"goToLastPage()\" [disabled]=\"pageNo === totalPages\" aria-label=\"Last page\">\n                        <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n                    </button>\n                </li>\n            </ul>\n            <div class=\"text-center text-muted small mt-2\">\n                Page {{ pageNo }} of {{ totalPages }} ({{ contentdata.length }} items on this page)\n            </div>\n        </nav>\n    </div>\n</div>\n\n<div *ngIf=\"schoolStatus?.length == 0\">\n    <app-emptyschool></app-emptyschool>\n</div>\n\n<ng-template #detailsTemplate let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title\">{{contentName}}</h4>\n        <button type=\"button\" class=\"btn btn-link text-muted p-0\" (click)=\"close()\" aria-label=\"Close\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row g-4\">\n            <div class=\"col-md-5 text-center text-md-start\">\n                <img class=\"detail-thumbnail\" [src]=\"getDetailThumbnail()\" alt=\"Content preview thumbnail\">\n            </div>\n            <div class=\"col-md-7\">\n                <dl class=\"details-list\">\n                    <ng-container *ngIf=\"description\">\n                        <dt>Description</dt>\n                        <dd>{{ description }}</dd>\n                    </ng-container>\n                    <ng-container *ngIf=\"createdby\">\n                        <dt>Created by</dt>\n                        <dd>{{ createdby }}</dd>\n                    </ng-container>\n                    <ng-container *ngIf=\"gradename\">\n                        <dt>Grade</dt>\n                        <dd>{{ gradename }}</dd>\n                    </ng-container>\n                    <ng-container *ngIf=\"subjectname\">\n                        <dt>Subject</dt>\n                        <dd>{{ subjectname }}</dd>\n                    </ng-container>\n                    <ng-container *ngIf=\"tags\">\n                        <dt>Tags</dt>\n                        <dd>{{ tags }}</dd>\n                    </ng-container>\n                    <ng-container *ngIf=\"noofquestions\">\n                        <dt>Questions</dt>\n                        <dd>{{ noofquestions }}</dd>\n                    </ng-container>\n                    <ng-container *ngIf=\"totalpoints\">\n                        <dt>Points</dt>\n                        <dd>{{ totalpoints }}</dd>\n                    </ng-container>\n                    <ng-container *ngIf=\"details\">\n                        <dt>Status</dt>\n                        <dd>{{ details }}</dd>\n                    </ng-container>\n                </dl>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #select let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title w-100 text-center\"><b>Select type of the content</b></h4>\n        <i class=\"fa fa-close\" style=\"cursor: pointer\" (click)=\"close()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-4 text-center\">\n                <img alt=\"Add Resources\" src=\"assets/images/pdf-icons/books-stack-of-three.png\">\n                <button type=\"button\" class=\"btn btn-primary w-100 mt-4 mb-2\" [disabled]=\"neededButtonType != 'resources' && contentAssign == 'class' && neededButtonType != undefined\"\n                        (click)=\"upload('resource')\">Add Resources</button>\n            </div>\n            <div class=\"col-md-4 text-center\">\n                <img alt=\"Add Assignment\" src=\"assets/images/pdf-icons/book.png\">\n                <button type=\"button\"  class=\"btn btn-primary w-100 mt-4 mb-2\" [disabled]=\"neededButtonType != 'assignments' && contentAssign == 'class' && neededButtonType != undefined\"\n                        (click)=\"upload('assignment')\">Add Assignment</button>\n            </div>\n            <div class=\"col-md-4 text-center\">\n                <img alt=\"Add Assessment\" src=\"assets/images/pdf-icons/exam.png\">\n                <button type=\"button\"  class=\"btn btn-primary w-100 mt-4 mb-2\" [disabled]=\"neededButtonType != 'assessments' && contentAssign == 'class' && neededButtonType != undefined\"\n                        (click)=\"upload('assessment')\">Add Assessment</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n<!--<ng-template #resources let-c=\"close\" let-d=\"dismiss\">-->\n<!--    <div class=\"modal-header align-items-center\">-->\n<!--        <h4 class=\"modal-title w-100 text-center\"><b>Add Resources</b></h4>-->\n<!--        <i class=\"fa fa-close\" style=\"cursor: pointer\" (click)=\"close()\"></i>-->\n<!--    </div>-->\n<!--    <div class=\"modal-body\">-->\n<!--        <div class=\"row\">-->\n<!--            <div class=\"col-md-6 text-center\" style=\"border-right: 1px solid #c4c4c4;\">-->\n<!--                <img src=\"assets/images/pdf-icons/Icon ionic-md-cloud-upload.png\">-->\n<!--                <h4 class=\"mt-3\">Create From PDF</h4>-->\n<!--                <h5 class=\"mt-3\">Upload Resource as a PDF format and proceed to assign it to your students</h5>-->\n<!--                <div class=\"d-flex align-items-baseline\">-->\n<!--                    <input accept=\".pdf\" style=\"display: none\" type=\"file\" (change)=\"encodePdfFileAsURL($event, 'resource')\" #hiddenfileinput>-->\n<!--                    <button class=\"btn btn-primary mt-3 mb-2 w-100\" type=\"file\" aria-describedby=\"inputGroupFileAddon01\"-->\n<!--                            (click)=\"hiddenfileinput.click()\">Browse</button>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--            <div class=\"col-md-6 text-center\">-->\n<!--                <img src=\"assets/images/pdf-icons/Icon material-library-books.png\">-->\n<!--                <h4 class=\"mt-3\">Create From Scratch</h4>-->\n<!--                <h5 class=\"mt-3\">Write your resource content and proceed to assign it to your student</h5>-->\n<!--                <div class=\"d-flex align-items-baseline\">-->\n<!--                    <button type=\"button\"  class=\"btn btn-primary w-100 mt-3 mb-2\" [routerLink]=\"'/content-text-resource/text-resource/add'\" (click)=\"close()\">Create Content</button>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--        </div>-->\n<!--    </div>-->\n<!--</ng-template>-->\n<!--<ng-template #assignment let-c=\"close\" let-d=\"dismiss\">-->\n<!--    <div class=\"modal-header align-items-center\">-->\n<!--        <h4 class=\"modal-title w-100 text-center\"><b>Add Assignment</b></h4>-->\n<!--        <i class=\"fa fa-close\" style=\"cursor: pointer\" (click)=\"close()\"></i>-->\n<!--    </div>-->\n<!--    <div class=\"modal-body\">-->\n<!--        <div class=\"row\">-->\n<!--            <div class=\"col-md-6 text-center\" style=\"border-right: 1px solid #c4c4c4;\">-->\n<!--                <img src=\"assets/images/pdf-icons/Icon ionic-md-cloud-upload.png\">-->\n<!--                <h4 class=\"mt-3\">Create From PDF</h4>-->\n<!--                <h5 class=\"mt-3\">Upload Assignment as a PDF format and proceed to assign it to your students</h5>-->\n<!--                <div class=\"d-flex align-items-baseline\">-->\n<!--                    <input accept=\".pdf\" style=\"display: none\" type=\"file\" (change)=\"encodePdfFileAsURL($event, 'assignment')\" #hiddenfileinput>-->\n<!--                    <button class=\"btn btn-primary mt-3 mb-2 w-100\" type=\"file\" aria-describedby=\"inputGroupFileAddon01\"-->\n<!--                            (click)=\"hiddenfileinput.click()\">Browse</button>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--            <div class=\"col-md-6 text-center\">-->\n<!--                <img src=\"assets/images/pdf-icons/Icon material-library-books.png\">-->\n<!--                <h4 class=\"mt-3\">Create From Scratch</h4>-->\n<!--                <h5 class=\"mt-3\">Write your assignment content and proceed to assign it to your student</h5>-->\n<!--                <div class=\"d-flex align-items-baseline\">-->\n<!--                    <button type=\"button\" class=\"btn btn-primary w-100 mb-2 mt-3\" (click)=\"openText('assignment')\">Create Content</button>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--        </div>-->\n<!--    </div>-->\n<!--</ng-template>-->\n<!--<ng-template #assessment let-c=\"close\" let-d=\"dismiss\">-->\n<!--    <div class=\"modal-header align-items-center\">-->\n<!--        <h4 class=\"modal-title w-100 text-center\"><b>Add Assessment</b></h4>-->\n<!--        <i class=\"fa fa-close\" style=\"cursor: pointer\" (click)=\"close()\"></i>-->\n<!--    </div>-->\n<!--    <div class=\"modal-body\">-->\n<!--        <div class=\"row\">-->\n<!--            <div class=\"col-md-6 text-center\" style=\"border-right: 1px solid #c4c4c4;\">-->\n<!--                <img src=\"assets/images/pdf-icons/Icon ionic-md-cloud-upload.png\">-->\n<!--                <h4 class=\"mt-3\">Create From PDF</h4>-->\n<!--                <h5 class=\"mt-3\">Upload Assessment as a PDF format and proceed to assign it to your students</h5>-->\n<!--                <div class=\"d-flex align-items-baseline\">-->\n<!--                    <input accept=\".pdf\" style=\"display: none\" type=\"file\" (change)=\"encodePdfFileAsURL($event, 'assessment')\" #hiddenfileinput>-->\n<!--                    <button class=\"btn btn-primary mt-3 mb-2 w-100\"  type=\"file\" aria-describedby=\"inputGroupFileAddon01\"-->\n<!--                            (click)=\"hiddenfileinput.click()\">Browse</button>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--            <div class=\"col-md-6 text-center\">-->\n<!--                <img src=\"assets/images/pdf-icons/Icon material-library-books.png\">-->\n<!--                <h4 class=\"mt-3\">Create From Scratch</h4>-->\n<!--                <h5 class=\"mt-3\">Write your assessment content and proceed to assign it to your student</h5>-->\n<!--                <div class=\"d-flex align-items-baseline\">-->\n<!--                    <button type=\"button\" class=\"btn btn-primary w-100 mb-2 mt-3\" (click)=\"openText('assessment')\">Create Content</button>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--        </div>-->\n<!--    </div>-->\n<!--</ng-template>-->\n\n<ng-template id=\"myModal11\" #assign let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-dialog1\">\n        <div class=\"modal-header\">\n            <h4 class=\"contenttext mb-0\">{{contentName ? contentName : 'Multi Content Assign'}}</h4>\n        </div>\n        <div class=\"modal-body\">\n            <form [formGroup]=\"linkform\">\n                <div class=\"row form-group\" *ngIf=\"firstAssign == true\">\n                    <div class=\"col-md-12\">\n                        <label class=\"font-weight-bold\">Assign Resource For</label>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <select id=\"selectBox\" class=\"form-control\"  formControlName=\"typeSelection\" (change)=\"typeSelection()\">\n                            <option value=\"n/a\" disabled>Select type</option>\n                            <option value=\"1\">Class</option>\n                            <option *ngIf=\"contentName\" value=\"2\">Content Folder</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"row form-group\" *ngIf=\"multiContentId.length != 0 && !contentName\">\n                    <label class=\"col-12 font-weight-bold\">Selected Content</label>\n                    <mat-form-field class=\"col-12\">\n                        <mat-chip-grid #chipList>\n                            <mat-chip-row\n                                          *ngFor=\"let item of multiContentId; let i=index\"\n                                          (removed)=\"removeSelectedMultiContent(item, i)\" name=\"chips\">{{item.name}}\n                                <mat-icon *ngIf=\"multiContentId.length > 1\" matChipRemove>cancel</mat-icon>\n                            </mat-chip-row>\n                            <input placeholder=\"\" readonly [matChipInputFor]=\"chipList\"\n                                   [matChipInputAddOnBlur]=\"true\"\n                                   />\n                        </mat-chip-grid>\n                    </mat-form-field>\n                </div>\n                <div>\n                    <div class=\"row form-group\" *ngIf=\"resourcetype == true\">\n                        <div class=\"col-md-12\">\n                            <label class=\"font-weight-bold\">Class</label>\n                        </div>\n                        <div class=\"col-md-12\" *ngIf=\"classDropDown == false\">\n                            <input class=\"form-control\" formControlName=\"classname\" readonly type=\"text\" placeholder=\"Enter the Class Name\" value=\"{{className}}\">\n                        </div>\n                        <div *ngIf=\"classDropDown == true\" class=\"col-md-8\">\n                            <ng-select [items]=\"classData\"\n                                       formControlName=\"classSelect\"\n                                       bindValue=\"class_id\"\n                                       bindLabel=\"class_name\"\n                                       placeholder=\"Select Class *\"\n                                       typeToSearchText=\"\"\n                                       [multiple]=\"true\"\n                                       (remove)=\"dummyStudent()\"\n                                       [closeOnSelect]=\"false\"\n                                       [attr.title]=\"selectedClassName\"\n                                       (change)=\"updateClassName()\"\n                                       (close)=\"dummyStudent()\"\n                                       (clear)=\"clearFormArray()\"\n                            >\n                                <ng-template ng-option-tmp let-item=\"item\">\n                                    <div [attr.title]=\"item.class_name\">{{ item.class_name }}</div>\n                                </ng-template>\n                            </ng-select>\n                        </div>\n                        <div *ngIf=\"classDropDown == true\" class=\"col-md-4\">\n                            <ng-select (change)=\"teacherFilter($event)\"\n                                       [items]=\"teacherData\"\n                                       bindLabel=\"teacher_name\"\n                                       bindValue=\"teacher_id\"\n                                       formControlName=\"teacherSelect\"\n                                       placeholder=\"Teacher Filter\"\n                                       typeToSearchText=\"\"\n                            >\n                            </ng-select>\n                        </div>  \n                    </div>\n                    <div class=\"row form-group\" *ngIf=\"resourcetype == true && topicsData.length != 0 && linkform.controls.classSelect.value.length <= 1\">\n                        <div class=\"col-md-12\">\n                            <label class=\"font-weight-bold\">Topics</label>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <ng-select [items]=\"topicsData\"\n                                       formControlName=\"topicSelect\"\n                                       bindValue=\"topic_id\"\n                                       bindLabel=\"topic\"\n                                       placeholder=\"Select Topic\"\n                                       typeToSearchText=\"\"\n                            >\n                            </ng-select>\n                        </div>\n                    </div>\n                    <div class=\"row form-group\" *ngIf=\"showBatch\">\n                        <div class=\"col-md-12\">\n                            <label class=\"font-weight-bold\">Content Folder</label>\n                        </div>\n                        <div class=\"col-md-12 px-0\">\n                            <app-treeview-contentfolder [type]=\"'add'\" [calledForm]=\"'contentLibrary'\"\n                                                        [treeviewHeight]=\"300\" [selectedbatch]=\"[]\"></app-treeview-contentfolder>\n                        </div>\n                    </div>\n                    <div class=\"row form-group\" *ngIf=\"resourcetype == true && linkform.controls.classSelect.value.length != 0\">\n                        <div class=\"col-md-8\">\n                            <label class=\"font-weight-bold\">Selected Students</label>\n                            <div class=\"col-md-12 d-flex align-items-center\">\n                                <input id=\"allStudents\" class=\"mr-2 cursor\" type=\"radio\" formControlName=\"radio\" value=\"1\" (change)=\"checkValue1($event)\">\n                                    <label for=\"allStudents\" class=\"mr-4 mb-0 cursor\"> All Students in selected class</label>\n                                <input id=\"specificStudents\" class=\"mr-2 cursor\" type=\"radio\" formControlName=\"radio\" value=\"0\" (change)=\"checkValue($event)\">\n                                    <label class=\"mr-2 mb-0 cursor\" for=\"specificStudents\"> Specific Students</label>\n                            </div>\n                        </div>\n                        <div class=\"col-md-8 mt-2\" *ngIf=\"listStudent\">\n                            <ng-select [items]=\"studentData\"\n                                       formControlName=\"specificstudent\"\n                                       bindValue=\"student_id\"\n                                       bindLabel=\"name\"\n                                       placeholder=\"Select Student\"\n                                       typeToSearchText=\"\"\n                                       multiple=\"true\">\n                            </ng-select>\n                        </div>\n                    </div>\n                    <div class=\"row form-group\" *ngIf=\"resourcetype && ((!contentName && downloadContentAvailable) || (contentName && contentDetaildata && contentDetaildata?.download != '0'))\">\n                        <div class=\"col-md-3\">\n                            <div class=\"col-12\" style=\"position: relative; font-size: 15px; left: 0.4rem\">\n                                <input type=\"checkbox\" class=\"form-check-input cursor\" id=\"download\" formControlName=\"downloadcontent\">\n                                <label style=\"font-size: 14px\" class=\"cursor mb-0 font-weight-bold\" for=\"download\">Download Content</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row form-group\" *ngIf=\"resourcetype\">\n                        <div class=\"col-md-12\">\n                            <label class=\"font-weight-bold\">Release Score</label>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <select (change)=\"releaseScoreFilter($event)\" *ngIf=\"isEssay != '1'\" formControlName=\"releaseScore\" class=\"form-control mb-1\">\n                                <option value=\"n/a\" disabled>Select Response type</option>\n                                <option value=\"0\">Instructor Graded</option>\n                                <option value=\"1\">Auto Graded</option>\n                                <option value=\"2\" *ngIf=\"contentFormat == '3' || !contentName\">Real-Time Grading</option>\n                            </select>\n\n                            <select (change)=\"releaseScoreFilter($event)\" *ngIf=\"isEssay == '1'\" formControlName=\"releaseScore\" class=\"form-control mb-1\">\n                                <option value=\"n/a\" disabled>Select Response type</option>\n                                <option value=\"0\">Teacher Review Only</option>\n                                <option value=\"1\">Automatic Feedback</option>\n                            </select>\n                            <span class=\"notes_style\" *ngIf=\"!contentName || (contentName)\">(Note:\n                                <span *ngIf=\"linkform.controls.releaseScore.value == '0' && isEssay == '0'\">Responses will be reviewed and graded manually. Scores will be released after the final submission</span>\n                                <span *ngIf=\"linkform.controls.releaseScore.value == '1' && isEssay == '0'\">Responses will be graded automatically, but scores and feedback will only be released after the final submission</span>\n                                <span *ngIf=\"linkform.controls.releaseScore.value == '2' && isEssay == '0'\">Responses will be graded automatically and scores will be available immediately after each submission</span>\n                                <span *ngIf=\"linkform.controls.releaseScore.value == '0' && isEssay == '1'\">Essay will be manually reviewed by the teacher to provide feedback and scores. System generated feedback is not available</span>\n                                <span *ngIf=\"linkform.controls.releaseScore.value == '1' && isEssay == '1'\">Student can request for Automatic system generated feedback and score. Teacher can provide final feedback and score after the final submission</span>)</span>\n                        </div>\n                    </div>\n                    <div *ngIf=\"!checkAutoRelease\" class=\"col-12 px-0\">\n                        <p class=\"assign-error text-center\">Auto score release is not applicable for this content</p>\n                    </div>\n\n                    <div class=\"row form-group\" *ngIf=\"resourcetype && ((contentFormat == '3' && contentName) || !contentName)\">\n                        <div class=\"col-md-2\">\n                            <div class=\"col-12\" style=\"position: relative; font-size: 15px; left: 0.4rem\">\n                                <input type=\"checkbox\" class=\"form-check-input cursor\" id=\"workspace\" formControlName=\"workspace\">\n                                <label style=\"font-size: 14px\" class=\"cursor mb-0 font-weight-bold\" for=\"workspace\">Workspace</label>\n                            </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                            <div class=\"col-12\" style=\"position: relative; font-size: 15px; left: 0.4rem\">\n                                <input type=\"checkbox\" class=\"form-check-input cursor\" id=\"feedback\" formControlName=\"feedback\">\n                                <label style=\"font-size: 14px\" class=\"cursor mb-0 font-weight-bold\" for=\"feedback\">FeedBack</label>\n                            </div>\n                        </div>\n                        <div class=\"col-md-2\" *ngIf=\"showTimer\">\n                            <div class=\"col-12\" style=\"position: relative; font-size: 15px; left: 0.4rem\">\n                                <input type=\"checkbox\" class=\"form-check-input cursor\" id=\"showTimer\" formControlName=\"showTimer\">\n                                <label style=\"font-size: 14px\" class=\"cursor mb-0 font-weight-bold\" for=\"showTimer\">Show Timer</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"showBatch == false\" class=\"row form-group\">\n                        <div class=\"col-md-12 mb-2 {{first ? '' : 'mt-1'}}\" *ngFor=\"let list of linkform.get('dateRanges')['controls']; let i=index; let first = first\" formArrayName=\"dateRanges\">\n                            <div class=\"row\" [formGroupName]=\"i\">\n                                <div class=\"col-md-12 mb-2\">\n                                    <div class=\"row contenttext\">\n                                        <div class=\"align-content-center col-md-4\">\n                                            <span style=\"color:#777777;\" class=\"mb-0\">Class Name: </span><span class=\"font-weight-bold\">{{list['controls'].class_name.value}}</span>\n                                        </div>\n                                        <div class=\"align-content-center col-md-3 pl-0\">\n                                            <span style=\"color:#777777;\" class=\"mb-0\">Class Start Date: </span><span class=\"t-name font-weight-bold\">{{list.get('class_startDate').value | customDateFormat}}</span>\n                                        </div>\n                                        <div class=\"align-content-center col-md-3 pl-0\">\n                                            <span style=\"color:#777777;\" class=\"mb-0\">Class End Date: </span><span class=\"font-weight-bold\">{{list.get('class_endDate').value | customDateFormat}}</span>\n                                        </div>\n                                        <div class=\"col-md-2 text-right\" *ngIf=\"first && linkform.get('dateRanges')['controls'].length > 1\">\n                                            <button (click)=\"applyToAll(list)\" class=\"btn btn-outline-primary\">Apply To All</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <div class=\"row align-items-center\">\n                                        <label class=\"col-md-4 mb-0 pr-2 font-weight-bold\">Start Date</label>\n                                        <input class=\"form-control col-md-8\" formControlName=\"startDate\" placeholder=\"Start Date\"\n                                               name=\"dp\" angular-mydatepicker #dp=\"angular-mydatepicker\" autocomplete=\"off\"\n                                               [options]=\"myDpOptions2\" (dateChanged)=\"onDateChanged($event)\" (click)=\"dp.toggleCalendar()\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <div class=\"row align-items-center\">\n                                        <label class=\"mb-0 ml-3 mr-1 font-weight-bold\">Start Time</label>\n                                        <div class=\"col-md-8 px-0\">\n                                            <ngb-timepicker formControlName=\"startTime\" [meridian]=\"meridian\" [spinners]=\"spinner\"></ngb-timepicker>\n                                        </div>\n                                        <em class=\"error\" *ngIf=\"linkform.get('startTime').invalid && (linkform.get('startTime').dirty || linkform.get('startTime').touched)\">\n                                            StartTime is invalid\n                                        </em>\n                                        <div class=\"small form-text text-danger\" *ngIf=\"checkTimeDifference(list)\">\n                                            Select valid Time Period\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <div class=\"row align-items-center\">\n                                        <label class=\"col-md-4 mb-0 font-weight-bold\">End Date</label>\n                                        <input class=\"form-control col-md-8\" formControlName=\"endDate\" placeholder=\"End Date\"\n                                               name=\"dp1\" angular-mydatepicker #dp1=\"angular-mydatepicker\" autocomplete=\"off\"\n                                               [options]=\"myDpOptions1\" (dateChanged)=\"onDateChanged1($event)\" (click)=\"dp1.toggleCalendar()\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <div class=\"row align-items-center\">\n                                        <label class=\"mb-0 ml-3 mr-1 font-weight-bold\">End Time</label>\n                                        <div class=\"col-md-8 px-0\">\n                                            <ngb-timepicker [meridian]=\"meridian\" formControlName=\"endTime\" [spinners]=\"spinner\"></ngb-timepicker>\n                                            <em class=\"error\" *ngIf=\"linkform.get('endTime').invalid && (linkform.get('endTime').dirty || linkform.get('endTime').touched)\">\n                                                EndTime is invalid\n                                            </em>\n\n                                            <div class=\"small form-text text-danger\" *ngIf=\"checkTimeDifference(list)\">\n                                                Select valid Time Period\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n<!--                    <div *ngIf=\"showBatch == false\" class=\"row form-group\">-->\n<!--                        <div class=\"col-md-2\">-->\n<!--                            <div class=\"row-md-12\">-->\n<!--                                <label>Start Date</label>-->\n<!--                            </div>-->\n<!--                            <div class=\"row-md-12\">-->\n<!--                                <input class=\"form-control\" formControlName=\"startDate\" placeholder=\"Start Date\"-->\n<!--                                       name=\"dp\" angular-mydatepicker #dp=\"angular-mydatepicker\" autocomplete=\"off\"-->\n<!--                                       [options]=\"myDpOptions2\" (dateChanged)=\"onDateChanged($event)\" (click)=\"dp.toggleCalendar()\">-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                        <div class=\"col-md-4\">-->\n<!--                            <div class=\"row-md-12\">-->\n<!--                                <label>Start Time</label>-->\n<!--                            </div>-->\n<!--                            <div class=\"row-md-12\">-->\n<!--                                <ngb-timepicker (keypress)=\"changeStartTime()\" formControlName=\"startTime\" [meridian]=\"meridian\" [spinners]=\"spinner\"></ngb-timepicker>-->\n<!--                            </div>-->\n<!--                            <em class=\"error\" *ngIf=\"linkform.get('startTime').invalid && (linkform.get('startTime').dirty || linkform.get('startTime').touched)\">-->\n<!--                                StartTime is invalid-->\n<!--                            </em>-->\n<!--                            <div class=\"small form-text text-danger\" *ngIf=\"timeErr\">-->\n<!--                                <div *ngIf=\"timeErr\">Select valid Time Period</div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                        <div class=\"col-md-2\">-->\n<!--                            <div class=\"row-md-12\">-->\n<!--                                <label>End Date</label>-->\n<!--                            </div>-->\n<!--                            <div class=\"row-md-12\">-->\n<!--                                <input class=\"form-control\" formControlName=\"endDate\" placeholder=\"End Date\"-->\n<!--                                       name=\"dp1\" angular-mydatepicker #dp1=\"angular-mydatepicker\" autocomplete=\"off\"-->\n<!--                                       [options]=\"myDpOptions1\" (dateChanged)=\"onDateChanged1($event)\" (click)=\"dp1.toggleCalendar()\">-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                        <div class=\"col-md-4\">-->\n<!--                            <div class=\"row-md-12\">-->\n<!--                                <label>End Time</label>-->\n<!--                            </div>-->\n<!--                            <div class=\"row-md-12\">-->\n<!--                                <ngb-timepicker (keypress)=\"changeStartTime()\" [meridian]=\"meridian\" formControlName=\"endTime\" [spinners]=\"spinner\"></ngb-timepicker>-->\n<!--                            </div>-->\n<!--                            <em class=\"error\" *ngIf=\"linkform.get('endTime').invalid && (linkform.get('endTime').dirty || linkform.get('endTime').touched)\">-->\n<!--                                EndTime is invalid-->\n<!--                            </em>-->\n<!--                            <div class=\"small form-text text-danger\" *ngIf=\"timeErr\">-->\n<!--                                <div *ngIf=\"timeErr\">Select valid Time Period</div>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </div>-->\n                    <!--            <div class=\"row form-group\" *ngIf=\"resourcetype\">-->\n                    <!--                <div class=\"col-md-12\">-->\n                    <!--                    <label>Notes </label>-->\n                    <!--                </div>-->\n                    <!--                <div class=\"col-md-12\">-->\n                    <!--                    <textarea  type=\"text\" class=\"form-control\" placeholder=\"Enter Notes\" formControlName=\"notes\"></textarea>-->\n                    <!--                </div>-->\n                    <!--            </div>-->\n                </div>\n            </form>\n        </div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-outline-primary\" *ngIf=\"firstAssign == false\" (click)=\"close1()\">Cancel</button>\n            <button class=\"btn btn-outline-primary\" *ngIf=\"firstAssign == true\" (click)=\"cancel()\">Cancel</button>\n            <button (click)=\"submitAssign('1')\" *ngIf=\"defaultShow == true\" [disabled]=\"!checkAutoRelease\" class=\"btn btn-primary\">Submit</button>\n        </div>\n    </div>\n</ng-template>\n<ng-template #batchassign let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"contenttext\">{{contentName}}</h4>\n    </div>\n    <div class=\"modal-body\">\n        <form [formGroup]=\"linkform\">\n        <div class=\"row form-group\">\n        <div class=\"col-md-12\">\n            <label>Content Folder</label>\n        </div>\n            <div class=\"col-md-12\">\n                <input class=\"form-control\" formControlName=\"batch\" readonly type=\"text\" placeholder=\"Enter the Class Name\" value=\"{{className}}\">\n            </div>\n        </div>\n            <div *ngIf=\"resourcetype && !showBatch && allowScore\" class=\"row form-group\">\n                <div class=\"col-md-12\">\n                    <label>Release Score</label>\n                </div>\n                <div class=\"col-md-12\">\n                    <select (change)=\"releaseScoreFilter($event)\"  class=\"form-control\" formControlName=\"releaseScore\">\n                        <option value=\"n/a\" disabled>Select Response type</option>\n                        <option *ngIf=\"isEssay == '0'\" value=\"0\">Instructor Graded</option>\n                        <option *ngIf=\"isEssay == '0'\" value=\"1\">Auto Graded</option>\n                        <option *ngIf=\"isEssay == '1'\" value=\"0\">Teacher Review Only</option>\n                        <option *ngIf=\"isEssay == '1'\" value=\"1\">Automatic Feedback</option>\n                        <option value=\"2\" *ngIf=\"isEssay == '0' && (contentFormat == '3' || !contentName)\">Real-Time Grading</option>\n                    </select>\n                    <span *ngIf=\"!contentName || (contentName)\" style=\"color: #757070; font-size: 13px\">Note:\n                                <span *ngIf=\"linkform.controls.releaseScore.value == '0' && isEssay == '0'\">Responses will be reviewed and graded manually. Scores will be released after the final submission</span>\n                                <span *ngIf=\"linkform.controls.releaseScore.value == '1' && isEssay == '0'\">Responses will be graded automatically, but scores and feedback will only be released after the final submission</span>\n                                <span *ngIf=\"linkform.controls.releaseScore.value == '2' && isEssay == '0'\">Responses will be graded automatically and scores will be available immediately after each submission</span>\n                                <span *ngIf=\"linkform.controls.releaseScore.value == '0' && isEssay == '1'\">Essay will be manually reviewed by the teacher to provide feedback and scores. System generated feedback is not available</span>\n                                <span *ngIf=\"linkform.controls.releaseScore.value == '1' && isEssay == '1'\">Student can request for Automatic system generated feedback and score. Teacher can provide final feedback and score after the final submission</span>\n                            </span>\n                </div>\n            </div>\n            <div *ngIf=\"!checkAutoRelease\" class=\"col-12 px-0\">\n                <p class=\"assign-error text-center\">Auto score release is not applicable for this content</p>\n            </div>\n<!--        <div class=\"row form-group\">-->\n<!--            <div class=\"col-md-2\">-->\n<!--                <div class=\"row-md-12\">-->\n<!--                    <label>Start Date</label>-->\n<!--                </div>-->\n<!--                <div class=\"row-md-12\">-->\n<!--                    <input class=\"form-control\" formControlName=\"startDate\" placeholder=\"Start Date\"-->\n<!--                           name=\"dp\" angular-mydatepicker #dp=\"angular-mydatepicker\" autocomplete=\"off\"-->\n<!--                           [options]=\"myDpOptions\" (dateChanged)=\"onDateChanged($event)\" (click)=\"dp.toggleCalendar()\"/>-->\n<!--                </div>-->\n<!--                <em class=\"error\" *ngIf=\"linkform.get('startDate').invalid && (linkform.get('startDate').dirty || linkform.get('startDate').touched)\">-->\n<!--                    StartDate is invalid-->\n<!--                </em>-->\n<!--            </div>-->\n<!--            <div class=\"col-md-4\">-->\n<!--                <div class=\"row-md-12\">-->\n<!--                    <label>Start Time</label>-->\n<!--                </div>-->\n<!--                <div class=\"row-md-12\">-->\n<!--                    <ngb-timepicker (keypress)=\"changeStartTime()\" formControlName=\"startTime\" [meridian]=\"meridian\" [spinners]=\"spinner\"></ngb-timepicker>-->\n<!--                </div>-->\n<!--                <em class=\"error\" *ngIf=\"linkform.get('startTime').invalid && (linkform.get('startTime').dirty || linkform.get('startTime').touched)\">-->\n<!--                    StartTime is invalid-->\n<!--                </em>-->\n<!--                <div class=\"small form-text text-danger\" *ngIf=\"timeErr\">-->\n<!--                    <div *ngIf=\"timeErr\">Select valid Time Period</div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--            <div class=\"col-md-2\">-->\n<!--                <div class=\"row-md-12\">-->\n<!--                    <label>End Date</label>-->\n<!--                </div>-->\n<!--                <div class=\"row-md-12\">-->\n<!--                    <input class=\"form-control\" formControlName=\"endDate\" placeholder=\"End Date\"-->\n<!--                           name=\"dp1\" angular-mydatepicker #dp1=\"angular-mydatepicker\" autocomplete=\"off\"-->\n<!--                           [options]=\"myDpOptions1\" (dateChanged)=\"onDateChanged1($event)\" (click)=\"dp1.toggleCalendar()\"/>-->\n<!--                </div>-->\n<!--                <em class=\"error\" *ngIf=\"linkform.get('endDate').invalid && (linkform.get('endDate').dirty || linkform.get('endDate').touched)\">-->\n<!--                    EndDate is invalid-->\n<!--                </em>-->\n<!--            </div>-->\n<!--            <div class=\"col-md-4\">-->\n<!--                <div class=\"row-md-12\">-->\n<!--                    <label>End Time</label>-->\n<!--                </div>-->\n<!--                <div class=\"row-md-12\">-->\n<!--                    <ngb-timepicker (keypress)=\"changeStartTime()\" [meridian]=\"meridian\" formControlName=\"endTime\" [spinners]=\"spinner\"></ngb-timepicker>-->\n<!--                </div>-->\n<!--                <em class=\"error\" *ngIf=\"linkform.get('endTime').invalid && (linkform.get('endTime').dirty || linkform.get('endTime').touched)\">-->\n<!--                    EndTime is invalid-->\n<!--                </em>-->\n<!--                <div class=\"small form-text text-danger\" *ngIf=\"timeErr\">-->\n<!--                    <div *ngIf=\"timeErr\">Select valid Time Period</div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--        </div>-->\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-outline-primary\" (click)=\"close1()\">Cancel</button>\n        <button (click)=\"submitAssign('2')\" class=\"btn btn-primary\">Submit</button>\n    </div>\n</ng-template>\n<ng-template #delete let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title col-12\"><b>Delete Content From Repository</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <h5 class=\"my-2\"> Are you sure you want to delete the \"{{deleteValue.name}}\"?</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn cancel\" (click)=\"close()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteContent(deleteValue)\">Confirm</button>\n    </div>\n</ng-template>\n<ng-template #allCreateContent let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title w-100 text-center\"><b>Add Content</b></h4>\n        <i class=\"fa fa-close\" style=\"cursor: pointer\" (click)=\"close()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-6\" style=\"min-height: 200px\">\n                <div class=\"row d-flex align-items-center justify-content-center\">\n                    <div class=\"col-11 text-center select-div\" [routerLink]=\"'/Books/create-Books/add'\" (click)=\"close()\">\n                        <img src=\"assets/images/pdf-icons/Icon ionic-md-cloud-upload.png\">\n                        <h4 class=\"mt-3\">Create From PDF or Link</h4>\n                        <h5 class=\"mt-3\">Upload Content as a PDF format or upload link and proceed to assign it to your students</h5>\n                        <!-- <div class=\"d-flex align-items-baseline\">\n                                <input accept=\".pdf\" style=\"display: none\" type=\"file\" (change)=\"encodePdfFileAsURL($event, 'assessment')\" #hiddenfileinput>\n                                <button class=\"btn btn-primary mt-3 mb-2 w-100\"  type=\"file\" aria-describedby=\"inputGroupFileAddon01\"\n                                (click)=\"hiddenfileinput.click()\">Browse</button>\n                            </div> -->\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\" style=\"min-height: 200px\">\n                <div class=\"row d-flex align-items-center justify-content-center\" style=\"height: 100%\">\n                    <div class=\"col-11 text-center select-div\" (click)=\"callCreateFrom()\" style=\"height: 100%\">\n                        <img src=\"assets/images/pdf-icons/Icon material-library-books.png\">\n                        <h4 class=\"mt-3\">Create From Scratch</h4>\n                        <h5 class=\"mt-3\">Write your content and proceed to assign it to your student</h5>\n                        <!-- <div class=\"d-flex align-items-baseline\">\n                                <button type=\"button\" class=\"btn btn-primary w-100 mb-2 mt-3\" (click)=\"openText('assessment')\">Create Content</button>\n                            </div> -->\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #createScratch let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title w-100 text-center\"><b>Select type of the content</b></h4>\n        <i class=\"fa fa-close\" style=\"cursor: pointer\" (click)=\"close()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-4 text-center\">\n                <img src=\"assets/images/pdf-icons/books-stack-of-three.png\">\n<!--                <h4 class=\"mt-3\">Upload from Local</h4>-->\n                <button type=\"button\" class=\"btn btn-primary w-100 mt-4 mb-2\" [disabled]=\"neededButtonType != 'resources' && contentAssign == 'class' && neededButtonType != undefined\"\n                [routerLink]=\"'/content-text-resource/text-resource/add'\" (click)=\"close()\">Add Resources</button>\n            </div>\n            <div class=\"col-md-4 text-center\">\n                <img src=\"assets/images/pdf-icons/book.png\">\n<!--                <h4 class=\"mt-3\">Upload from Library</h4>-->\n                <button type=\"button\"  class=\"btn btn-primary w-100 mt-4 mb-2\" [disabled]=\"neededButtonType != 'assignments' && contentAssign == 'class' && neededButtonType != undefined\"\n                    (click)=\"scratchTypeQuestions('assignment')\">Add Assignment</button>\n            </div>\n            <div class=\"col-md-4 text-center\">\n                <img src=\"assets/images/pdf-icons/exam.png\">\n<!--                <h4 class=\"mt-3\">Upload from Link</h4>-->\n                <button type=\"button\"  class=\"btn btn-primary w-100 mt-4 mb-2\" [disabled]=\"neededButtonType != 'assessments' && contentAssign == 'class' && neededButtonType != undefined\"\n                    (click)=\"scratchTypeQuestions('assessment')\">Add Assessment</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n", styles: [".vertical.selfScroll {\n  overflow-x: hidden !important;\n}\n\n.nodataList {\n  background: #f8f8f9;\n  border: 2px solid #7F3486;\n  padding: 15px 25px;\n  text-align: center;\n  border-radius: 7px;\n  color: #7F3486;\n  width: 100%;\n  font-weight: bolder;\n  font-size: large;\n}\n\n// Pagination styles\n.pagination {\n  .page-link {\n    color: #7F3486;\n    border-color: #dee2e6;\n    padding: 0.5rem 0.75rem;\n    \n    &:hover:not(:disabled) {\n      background-color: rgba(127, 52, 134, 0.1);\n      border-color: #7F3486;\n      color: #7F3486;\n    }\n    \n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(127, 52, 134, 0.25);\n    }\n  }\n  \n  .page-item.active .page-link {\n    background-color: #7F3486;\n    border-color: #7F3486;\n    color: white;\n  }\n  \n  .page-item.disabled .page-link {\n    color: #6c757d;\n    pointer-events: none;\n    cursor: not-allowed;\n    background-color: #fff;\n    border-color: #dee2e6;\n  }\n}\n\n.content-thumbnail {\n  width: 50px;\n  height: 50px;\n  object-fit: cover;\n  border: 2px solid rgba(143, 0, 138, 0.15);\n  transition: transform var(--transition-base) ease;\n\n  &:hover {\n    transform: scale(1.05);\n  }\n}\n\n.detail-thumbnail {\n  width: 100%;\n  max-width: 370px;\n  height: auto;\n  border-radius: var(--radius-lg);\n  object-fit: cover;\n  box-shadow: var(--shadow-base);\n}\n\n.content-home {\n  .content-header {\n    background: white;\n    border-radius: var(--radius-lg);\n    padding: 1rem;\n    box-shadow: var(--shadow-sm);\n    margin-bottom: 1.5rem;\n  }\n\n  .content-tabs {\n    border: none;\n    margin-bottom: 0;\n    \n    .nav-item {\n      margin-bottom: 0;\n    }\n    \n    .nav-link {\n      border: none;\n      color: #6c757d;\n      padding: 0.75rem 1.5rem;\n      font-weight: 500;\n      background: transparent;\n      border-bottom: 3px solid transparent;\n      transition: all 0.3s ease;\n      \n      i {\n        color: #6c757d;\n        transition: color 0.3s ease;\n      }\n      \n      &:hover {\n        color: #7F3486;\n        background: rgba(127, 52, 134, 0.05);\n        border-bottom-color: rgba(127, 52, 134, 0.3);\n        \n        i {\n          color: #7F3486;\n        }\n      }\n      \n      &.active {\n        color: #7F3486;\n        background: rgba(127, 52, 134, 0.1);\n        border-bottom-color: #7F3486;\n        font-weight: 600;\n        \n        i {\n          color: #7F3486;\n        }\n      }\n    }\n  }\n\n  .filter-card {\n    border-radius: var(--radius-lg);\n    border: none;\n    box-shadow: var(--shadow-base);\n    overflow: visible;\n\n    .card-body {\n      padding: var(--spacing-4);\n    }\n\n    .form-select,\n    .form-control {\n      min-height: 2.25rem;\n      font-size: 0.875rem;\n    }\n\n    .form-label {\n      margin-bottom: 0.25rem;\n      font-size: 0.8rem;\n      color: var(--neutral-600);\n    }\n  }\n\n  .filter-toggle-group {\n    .btn {\n      border-radius: var(--radius-md);\n      font-weight: 600;\n      transition: all var(--transition-base) ease;\n      color: var(--neutral-600);\n\n      &.active,\n      &:hover {\n        background: var(--color-primary);\n        border-color: var(--color-primary);\n        color: #fff;\n        box-shadow: var(--shadow-sm);\n      }\n    }\n  }\n\n  .content-results-wrapper {\n    position: relative;\n    padding: var(--spacing-4);\n    border-radius: var(--radius-lg);\n    background: #fff;\n\n    .loading-overlay {\n      position: absolute;\n      inset: 0;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      background: rgba(255, 255, 255, 0.92);\n      z-index: 5;\n    }\n  }\n\n  .content-results {\n    margin: 0;\n  }\n\n  .content-card {\n    border: 1px solid var(--neutral-200);\n    border-radius: var(--radius-lg);\n    box-shadow: var(--shadow-sm);\n    transition: transform var(--transition-base) ease, box-shadow var(--transition-base) ease;\n    position: relative;\n    z-index: 1;\n    overflow: visible;\n\n    &:hover:not(.dropdown-open) {\n      transform: translateY(-2px);\n      box-shadow: var(--shadow-md);\n      border-color: transparent;\n    }\n\n    .card-body {\n      display: flex;\n      flex-direction: column;\n      gap: var(--spacing-3);\n    }\n\n    &.dropdown-open {\n      z-index: 1200;\n      box-shadow: var(--shadow-lg);\n      transform: none !important;\n    }\n  }\n\n  .content-card__header {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: var(--spacing-3);\n  }\n\n  .content-card__primary {\n    display: flex;\n    align-items: flex-start;\n    gap: var(--spacing-3);\n    flex: 1 1 auto;\n  }\n\n  .content-card__select {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-2);\n\n    .form-check-input {\n      width: 1rem;\n      height: 1rem;\n      margin-top: 0;\n    }\n  }\n\n  .content-card__title {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-2);\n    min-width: 0;\n  }\n\n  .content-card__name-row {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    gap: var(--spacing-2);\n  }\n\n  .content-card__name {\n    font-weight: 600;\n    font-size: 1rem;\n    color: var(--neutral-900);\n    min-width: 0;\n  }\n\n  .content-card__type,\n  .content-card__format {\n    padding: 0.25rem 0.5rem;\n    border-radius: 999px;\n    font-size: 0.75rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n  }\n\n  .content-card__type {\n    &--resource {\n      background: rgba(143, 0, 138, 0.12);\n      color: var(--color-primary);\n    }\n\n    &--assignment {\n      background: rgba(19, 201, 202, 0.12);\n      color: var(--color-secondary);\n    }\n\n    &--assessment {\n      background: rgba(255, 188, 88, 0.18);\n      color: var(--color-warning);\n    }\n  }\n\n  .content-card__format {\n    background: var(--neutral-100);\n    color: var(--neutral-700);\n  }\n\n  .content-card__tags {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n  }\n\n  .chip {\n    display: inline-flex;\n    align-items: center;\n    gap: 0.35rem;\n    padding: 0.25rem 0.65rem;\n    border-radius: 999px;\n    background: var(--neutral-100);\n    border: 1px solid var(--neutral-200);\n    color: var(--neutral-700);\n    font-size: 0.75rem;\n    font-weight: 600;\n\n    i {\n      font-size: 0.85em;\n      color: inherit;\n    }\n  }\n\n  .content-card__actions {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-2);\n    flex-shrink: 0;\n    position: relative;\n  }\n\n  .content-card__dropdown-toggle {\n    min-width: auto;\n    height: 2rem;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: var(--radius-md);\n    padding: 0 0.75rem;\n    white-space: nowrap;\n  }\n\n  .dropdown-content {\n    position: absolute;\n    top: calc(100% + 0.5rem);\n    right: 0;\n    min-width: 180px;\n    border-radius: var(--radius-md);\n    box-shadow: var(--shadow-lg);\n    border: 1px solid var(--neutral-200);\n    padding: var(--spacing-2);\n    background: #fff;\n    z-index: 1500;\n    pointer-events: auto;\n    user-select: none;\n\n    a {\n      display: flex;\n      align-items: center;\n      gap: 0.5rem;\n      padding: 0.35rem 0.5rem;\n      font-size: 0.875rem;\n      color: var(--neutral-700);\n      border-radius: var(--radius-sm);\n      transition: background var(--transition-fast) ease;\n      cursor: pointer;\n      text-decoration: none;\n      user-select: none;\n\n      &:hover {\n        background: var(--neutral-100);\n      }\n      \n      i {\n        pointer-events: none;\n      }\n    }\n  }\n  \n  .dropdown {\n    position: relative;\n    \n    &.show {\n      z-index: 1500;\n      \n      .content-card__dropdown-toggle {\n        z-index: 1501;\n      }\n      \n      .dropdown-content {\n        z-index: 1502;\n      }\n    }\n  }\n\n  .status-pill {\n    display: inline-flex;\n    align-items: center;\n    padding: 0.25rem 0.6rem;\n    border-radius: 999px;\n    font-size: 0.75rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n    background: var(--neutral-100);\n    color: var(--neutral-700);\n\n    &--success {\n      background: rgba(129, 186, 0, 0.15);\n      color: var(--color-success);\n    }\n\n    &--warning {\n      background: rgba(255, 188, 88, 0.18);\n      color: var(--color-warning);\n    }\n\n    &--info {\n      background: rgba(19, 201, 202, 0.12);\n      color: var(--color-secondary);\n    }\n  }\n\n  .content-card__meta {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--spacing-3);\n    font-size: 0.8125rem;\n    color: var(--neutral-600);\n  }\n\n  .meta-item {\n    display: flex;\n    align-items: center;\n    gap: 0.35rem;\n\n    i {\n      color: var(--neutral-500);\n      font-size: 1rem;\n    }\n\n    .meta-label {\n      font-weight: 600;\n      color: var(--neutral-700);\n    }\n\n    .meta-value {\n      color: var(--neutral-800);\n      font-weight: 500;\n    }\n  }\n\n  .content-card__details {\n    margin-top: var(--spacing-3);\n    padding: var(--spacing-3);\n    border-radius: var(--radius-lg);\n    border: 1px solid var(--neutral-200);\n    background: var(--neutral-50);\n  }\n\n  .details-list {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n\n    dt {\n      margin: 0;\n      font-size: 0.75rem;\n      text-transform: uppercase;\n      letter-spacing: 0.04em;\n      color: var(--neutral-600);\n    }\n\n    dd {\n      margin: 0;\n      font-weight: 600;\n      color: var(--neutral-900);\n    }\n  }\n\n  @media (max-width: 767.98px) {\n    .content-card__header {\n      flex-direction: column;\n      align-items: flex-start;\n      gap: var(--spacing-2);\n    }\n\n    .content-card__primary {\n      flex-direction: column;\n      gap: var(--spacing-2);\n    }\n\n    .content-card__actions {\n      width: 100%;\n      justify-content: space-between;\n    }\n  }\n}\n\n:host ::ng-deep .content-home .ng-dropdown-panel {\n  z-index: 1050;\n}\n\n:host ::ng-deep .ng-dropdown-panel {\n  z-index: 2000 !important;\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.ConfigurationService }, { type: i3.AssessmentService }, { type: i4.ActivatedRoute }, { type: i5.FormBuilder }, { type: i6.DomSanitizer }, { type: i7.NgbModal }, { type: i4.Router }, { type: i8.ClassService }, { type: i9.CreatorService }, { type: i10.ToastrService }, { type: i11.CommonService }, { type: i12.CommonDataService }, { type: i13.NavService }, { type: i14.DatePipe }, { type: i15.ValidationService }, { type: i0.ChangeDetectorRef }, { type: i16.NewsubjectService }], { header: [{
            type: ViewChild,
            args: [HeaderComponent]
        }], addDetails: [{
            type: ViewChild,
            args: ['detailsTemplate']
        }], addAsset: [{
            type: ViewChild,
            args: ['select']
        }], createContentTemp: [{
            type: ViewChild,
            args: ['allCreateContent']
        }], createScratchTemp: [{
            type: ViewChild,
            args: ['createScratch']
        }], addResources: [{
            type: ViewChild,
            args: ['resources']
        }], addAssignment: [{
            type: ViewChild,
            args: ['assignment']
        }], addAssessment: [{
            type: ViewChild,
            args: ['assessment']
        }], addAssign: [{
            type: ViewChild,
            args: ['assign']
        }], adddirectAssign: [{
            type: ViewChild,
            args: ['batchassign']
        }], deleteList: [{
            type: ViewChild,
            args: ['delete']
        }], myHiddenBtn: [{
            type: ViewChild,
            args: ['hiddenBtn', { static: false }]
        }], onDocumentClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContentHomeComponent, { className: "ContentHomeComponent" }); })();
//# sourceMappingURL=content-home.component.js.map