import { Component, ViewChild } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/student.service";
import * as i2 from "../../../shared/service/auth.service";
import * as i3 from "@angular/router";
import * as i4 from "../../../shared/service/configuration.service";
import * as i5 from "@ng-bootstrap/ng-bootstrap";
import * as i6 from "ngx-toastr";
import * as i7 from "../../../shared/service/common.service";
import * as i8 from "@angular/platform-browser";
import * as i9 from "@angular/common";
import * as i10 from "@angular/forms";
import * as i11 from "@ng-select/ng-select";
import * as i12 from "ng2-pdf-viewer";
import * as i13 from "@swimlane/ngx-datatable";
const _c0 = ["deleteTemplate"];
const _c1 = ["previewRepository"];
const _c2 = ["assignClass"];
const _c3 = ["confirmMove"];
function RepositoryComponent_div_16_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 33);
    i0.ɵɵlistener("click", function RepositoryComponent_div_16_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.showFolderDropdown()); });
    i0.ɵɵtext(1, "Move to folder");
    i0.ɵɵelementEnd();
} }
function RepositoryComponent_div_16_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 34);
    i0.ɵɵlistener("click", function RepositoryComponent_div_16_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.clearSelectedContent()); });
    i0.ɵɵtext(1, "Abort");
    i0.ɵɵelementEnd();
} }
function RepositoryComponent_div_16_ng_select_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ng-select", 35);
    i0.ɵɵlistener("change", function RepositoryComponent_div_16_ng_select_4_Template_ng_select_change_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.selectFolder($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("items", ctx_r3.folderList);
} }
function RepositoryComponent_div_16_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "h6", 36);
    i0.ɵɵlistener("click", function RepositoryComponent_div_16_ng_template_8_Template_h6_click_0_listener() { const row_r8 = i0.ɵɵrestoreView(_r7).row; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.previewContent(row_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r8 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r8.name);
} }
function RepositoryComponent_div_16_ng_template_10_div_0_h6_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "h6", 41);
    i0.ɵɵlistener("click", function RepositoryComponent_div_16_ng_template_10_div_0_h6_1_Template_h6_click_0_listener() { const i_r10 = i0.ɵɵrestoreView(_r9).index; const row_r11 = i0.ɵɵnextContext(2).row; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.viewAssignedContent(row_r11, i_r10)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const i_r10 = ctx.index;
    const row_r11 = i0.ɵɵnextContext(2).row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", item_r12, "", i_r10 + 1 != row_r11.category_name.length ? ", \u00A0" : "", "");
} }
function RepositoryComponent_div_16_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, RepositoryComponent_div_16_ng_template_10_div_0_h6_1_Template, 2, 2, "h6", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r11 = i0.ɵɵnextContext().row;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", row_r11.category_name);
} }
function RepositoryComponent_div_16_ng_template_10_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 42);
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function RepositoryComponent_div_16_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RepositoryComponent_div_16_ng_template_10_div_0_Template, 2, 1, "div", 37)(1, RepositoryComponent_div_16_ng_template_10_span_1_Template, 2, 0, "span", 38);
} if (rf & 2) {
    const row_r11 = ctx.row;
    i0.ɵɵproperty("ngIf", row_r11.category_name.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r11.category_name.length == 0);
} }
function RepositoryComponent_div_16_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1, "In-Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 43)(3, "input", 44);
    i0.ɵɵlistener("click", function RepositoryComponent_div_16_ng_template_12_Template_input_click_3_listener($event) { const row_r14 = i0.ɵɵrestoreView(_r13).row; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.statusChange($event, row_r14)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "span", 45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "label");
    i0.ɵɵtext(6, "Active");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r14 = ctx.row;
    i0.ɵɵclassMapInterpolate1("", row_r14.status == "2" ? "color-red" : "", " font-weight-bold mr-2");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", row_r14.status == "1");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("", row_r14.status == "1" ? "color-green" : "", " font-weight-bold ml-2");
} }
function RepositoryComponent_div_16_ng_template_14_i_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 52);
    i0.ɵɵlistener("click", function RepositoryComponent_div_16_ng_template_14_i_0_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r16); const row_r17 = i0.ɵɵnextContext().row; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.moveSingleFolder(row_r17)); });
    i0.ɵɵelementEnd();
} }
function RepositoryComponent_div_16_ng_template_14_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53)(1, "ng-select", 54);
    i0.ɵɵlistener("change", function RepositoryComponent_div_16_ng_template_14_div_5_Template_ng_select_change_1_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r3 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r3.shareRepository($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "i", 55);
    i0.ɵɵlistener("click", function RepositoryComponent_div_16_ng_template_14_div_5_Template_i_click_2_listener() { i0.ɵɵrestoreView(_r18); const row_r17 = i0.ɵɵnextContext().row; const ctx_r3 = i0.ɵɵnextContext(2); row_r17.isShowClassList = false; return i0.ɵɵresetView(ctx_r3.selectedClass = ""); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r3.classList);
} }
function RepositoryComponent_div_16_ng_template_14_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53)(1, "ng-select", 56);
    i0.ɵɵlistener("change", function RepositoryComponent_div_16_ng_template_14_div_6_Template_ng_select_change_1_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r3 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r3.selectFolder($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "i", 57);
    i0.ɵɵlistener("click", function RepositoryComponent_div_16_ng_template_14_div_6_Template_i_click_2_listener() { i0.ɵɵrestoreView(_r19); const ctx_r3 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r3.moveToFolder()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 55);
    i0.ɵɵlistener("click", function RepositoryComponent_div_16_ng_template_14_div_6_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r19); const row_r17 = i0.ɵɵnextContext().row; return i0.ɵɵresetView(row_r17.singleMove = false); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r3.folderList);
} }
function RepositoryComponent_div_16_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵtemplate(0, RepositoryComponent_div_16_ng_template_14_i_0_Template, 1, 0, "i", 46);
    i0.ɵɵelementStart(1, "i", 47);
    i0.ɵɵlistener("click", function RepositoryComponent_div_16_ng_template_14_Template_i_click_1_listener() { const row_r17 = i0.ɵɵrestoreView(_r15).row; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.showClassList(row_r17)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "i", 48);
    i0.ɵɵlistener("click", function RepositoryComponent_div_16_ng_template_14_Template_i_click_2_listener() { const row_r17 = i0.ɵɵrestoreView(_r15).row; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.previewContent(row_r17)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 49);
    i0.ɵɵlistener("click", function RepositoryComponent_div_16_ng_template_14_Template_i_click_3_listener() { const row_r17 = i0.ɵɵrestoreView(_r15).row; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.editContent(row_r17)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "i", 50);
    i0.ɵɵlistener("click", function RepositoryComponent_div_16_ng_template_14_Template_i_click_4_listener() { const row_r17 = i0.ɵɵrestoreView(_r15).row; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.openDeleteTemplate(row_r17)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RepositoryComponent_div_16_ng_template_14_div_5_Template, 3, 1, "div", 51)(6, RepositoryComponent_div_16_ng_template_14_div_6_Template, 4, 1, "div", 51);
} if (rf & 2) {
    const row_r17 = ctx.row;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r3.selectedContent.length < 2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", row_r17.isShowClassList == true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r17.singleMove == true);
} }
function RepositoryComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 21);
    i0.ɵɵtemplate(2, RepositoryComponent_div_16_button_2_Template, 2, 0, "button", 22)(3, RepositoryComponent_div_16_button_3_Template, 2, 0, "button", 23)(4, RepositoryComponent_div_16_ng_select_4_Template, 1, 1, "ng-select", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "ngx-datatable", 25);
    i0.ɵɵlistener("select", function RepositoryComponent_div_16_Template_ngx_datatable_select_5_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onSelect($event)); });
    i0.ɵɵelement(6, "ngx-datatable-column", 26);
    i0.ɵɵelementStart(7, "ngx-datatable-column", 27);
    i0.ɵɵtemplate(8, RepositoryComponent_div_16_ng_template_8_Template, 2, 1, "ng-template", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "ngx-datatable-column", 29);
    i0.ɵɵtemplate(10, RepositoryComponent_div_16_ng_template_10_Template, 2, 2, "ng-template", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "ngx-datatable-column", 30);
    i0.ɵɵtemplate(12, RepositoryComponent_div_16_ng_template_12_Template, 7, 7, "ng-template", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "ngx-datatable-column", 31);
    i0.ɵɵtemplate(14, RepositoryComponent_div_16_ng_template_14_Template, 7, 3, "ng-template", 32);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.selectedContent.length > 1 && !ctx_r3.isShowFolderDropdown);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.isShowFolderDropdown);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.isShowFolderDropdown);
    i0.ɵɵadvance();
    i0.ɵɵproperty("columnMode", ctx_r3.ColumnMode.force)("footerHeight", 50)("headerHeight", 50)("limit", 10)("rows", ctx_r3.contentList)("selectionType", ctx_r3.selectionType.checkbox)("selected", ctx_r3.selectedContent);
    i0.ɵɵadvance();
    i0.ɵɵproperty("canAutoResize", false)("checkboxable", true)("draggable", false)("resizeable", false)("sortable", false)("width", 30);
    i0.ɵɵadvance();
    i0.ɵɵproperty("canAutoResize", true)("draggable", false)("width", 40);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("canAutoResize", true)("draggable", false)("width", 30);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("canAutoResize", true)("draggable", false)("width", 20);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("canAutoResize", true)("draggable", false)("width", 30);
} }
function RepositoryComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 58)(1, "div", 59)(2, "button", 60);
    i0.ɵɵtext(3, "No Content Available!");
    i0.ɵɵelementEnd()()();
} }
function RepositoryComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 61)(1, "span", 62);
    i0.ɵɵtext(2, "Move to \u00A0\u00A0");
    i0.ɵɵelementStart(3, "h4", 63);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "i", 64);
    i0.ɵɵlistener("click", function RepositoryComponent_ng_template_18_Template_i_click_5_listener() { i0.ɵɵrestoreView(_r20); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 65)(7, "div", 4)(8, "div", 66)(9, "span", 67);
    i0.ɵɵtext(10, "Are you sure to move this Content to ");
    i0.ɵɵelementStart(11, "span", 63);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, "?");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 68)(15, "button", 69);
    i0.ɵɵlistener("click", function RepositoryComponent_ng_template_18_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r20); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.moveToFolder()); });
    i0.ɵɵtext(16, "Confirm");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 70);
    i0.ɵɵlistener("click", function RepositoryComponent_ng_template_18_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r20); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.modalRef.close()); });
    i0.ɵɵtext(18, "Cancel");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.folderName);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.folderName, "");
} }
function RepositoryComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 61)(1, "h4", 63);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 64);
    i0.ɵɵlistener("click", function RepositoryComponent_ng_template_20_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r21); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 65)(5, "div", 4)(6, "div", 66)(7, "span", 67);
    i0.ɵɵtext(8, "Are you sure to delete this Content?");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 68)(10, "button", 69);
    i0.ɵɵlistener("click", function RepositoryComponent_ng_template_20_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r21); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.deleteContent()); });
    i0.ɵɵtext(11, "Confirm");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 70);
    i0.ɵɵlistener("click", function RepositoryComponent_ng_template_20_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r21); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.modalRef.close()); });
    i0.ɵɵtext(13, "Cancel");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.deleteDetail.name);
} }
function RepositoryComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 61)(1, "h4", 63);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 64);
    i0.ɵɵlistener("click", function RepositoryComponent_ng_template_22_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r22); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 65)(5, "div", 4)(6, "div", 71);
    i0.ɵɵelement(7, "pdf-viewer", 72);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.previewDetail.name);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("src", ctx_r3.pdfTemplate);
} }
function RepositoryComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 61)(1, "span", 73);
    i0.ɵɵtext(2, "Share Content");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 64);
    i0.ɵɵlistener("click", function RepositoryComponent_ng_template_24_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r23); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 65)(5, "div", 4)(6, "div", 74)(7, "textarea", 75);
    i0.ɵɵtwoWayListener("ngModelChange", function RepositoryComponent_ng_template_24_Template_textarea_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.remarks, $event) || (ctx_r3.remarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(8, "div", 76)(9, "button", 69);
    i0.ɵɵlistener("click", function RepositoryComponent_ng_template_24_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r23); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.assignToContent()); });
    i0.ɵɵtext(10, "Assign");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.remarks);
} }
export class RepositoryComponent {
    constructor(student, auth, router, config, modalService, toastr, common, sanitizer) {
        this.student = student;
        this.auth = auth;
        this.router = router;
        this.config = config;
        this.modalService = modalService;
        this.toastr = toastr;
        this.common = common;
        this.sanitizer = sanitizer;
        this.contentList = [];
        this.contentListAlt = [];
        this.selectedContent = [];
        this.folderList = [];
        this.classList = [];
        this.searchRepositroy = '';
        this.deleteDetail = '';
        this.previewDetail = '';
        this.folderName = '';
        this.remarks = '';
        this.selectedClass = '';
        this.shareRepositoryDetail = '';
        this.selectedFolder = '';
        this.isShowFolderDropdown = false;
        this.selectionType = SelectionType;
        this.ColumnMode = ColumnMode;
        this.webhost = this.config.getimgUrl();
    }
    ngOnInit() {
        this.repositoryList();
        this.contentFolderList();
        this.studentClassList();
    }
    updateFilter() {
        this.contentList = this.contentListAlt.filter((val) => {
            return val.name.toLowerCase().indexOf(this.searchRepositroy.toLowerCase()) > -1;
        });
    }
    onSelect(event) {
        console.log(event);
        this.selectedContent = [...event.selected];
    }
    repositoryList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
        };
        this.student.contentList(data).subscribe((successData) => {
            this.contentListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_repositoryList');
        });
    }
    contentListSuccess(successData) {
        if (successData.IsSuccess) {
            successData.ResponseObject.forEach((val) => {
                val.selected = false;
                val.singleMove = false;
                val.isShowClassList = false;
            });
            this.contentList = successData.ResponseObject;
            this.contentListAlt = successData.ResponseObject;
            this.updateFilter();
        }
    }
    contentFolderList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            type: 'active'
        };
        this.student.folderList(data).subscribe((successData) => {
            this.folderListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_repositoryList');
        });
    }
    folderListSuccess(successData) {
        if (successData.IsSuccess) {
            this.folderList = successData.ResponseObject;
        }
    }
    clearSelected() {
        this.selectedContent = [];
        this.contentList.forEach((items) => {
            items.singleMove = false;
            items.selected = false;
            items.isShowClassList = false;
        });
    }
    moveSingleFolder(detail) {
        this.clearSelected();
        this.selectedContent[0] = detail;
        detail.singleMove = true;
    }
    showClassList(detail) {
        this.clearSelected();
        this.selectedContent[0] = detail;
        this.shareRepositoryDetail = detail;
        detail.isShowClassList = true;
    }
    shareRepository(event) {
        if (event != undefined) {
            this.selectedClass = event.class_id;
            this.modalRef = this.modalService.open(this.assignClass, { size: 'md' });
        }
        else {
            this.selectedClass = '';
        }
        // this.moveToFolder();
    }
    previewContent(detail) {
        this.previewDetail = detail;
        // this.common.downloadfilewithbytes(this.webhost + '/' + this.previewDetail.file_path[0]?.original_image_url)
        //     .subscribe((filebytes: ArrayBuffer) => {
        //       console.log(ArrayBuffer, 'ssss')
        //       this.pdfTemplate = filebytes;
        //     });
        this.pdfTemplate = this.webhost + '/' + this.previewDetail.file_path[0]?.original_image_url;
        console.log(this.pdfTemplate, 'pdfTemplate');
        this.modalRef = this.modalService.open(this.previewRepository, { size: 'xl' });
    }
    editContent(data) {
        this.auth.setSessionData('edit-student-content', JSON.stringify(data));
        this.router.navigate(['/studentlogin/repository/content/edit']);
    }
    openDeleteTemplate(detail) {
        this.deleteDetail = detail;
        this.modalRef = this.modalService.open(this.deleteTemplate, { size: 'md' });
    }
    viewAssignedContent(detail, index) {
        detail['index'] = index;
        this.auth.setSessionData('folder-detail', JSON.stringify(detail));
        this.router.navigate(['/studentlogin/content-details']);
    }
    selectFolder(event) {
        if (event != undefined) {
            this.folderName = event.category_name;
            this.selectedFolder = event.category_id;
            this.modalRef = this.modalService.open(this.confirmMove, { size: 'md' });
        }
        else {
            this.folderName = '';
            this.selectedFolder = '';
        }
    }
    deleteContent() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            repository_id: this.deleteDetail.repository_id,
            status: '3'
        };
        this.student.editContent(data).subscribe((successData) => {
            this.contentDeleteSuccess(successData);
        }, (error) => {
            console.error(error, 'error_repositoryList');
        });
    }
    contentDeleteSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.modalRef.close();
            this.repositoryList();
        }
    }
    clearSelectedContent() {
        this.selectedContent = [];
        this.isShowFolderDropdown = false;
    }
    showFolderDropdown() {
        this.isShowFolderDropdown = true;
    }
    moveToFolder() {
        if (this.selectedFolder != '') {
            const repositoryId = [];
            this.selectedContent.forEach((item) => {
                repositoryId.push(item.repository_id);
            });
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                student_id: this.auth.getUserId(),
                category_id: this.selectedFolder,
                repository_id: repositoryId
            };
            console.log(data, 'data');
            this.student.moveRepository(data).subscribe((successData) => {
                this.moveFolderSuccess(successData);
            }, (error) => {
                console.error(error, 'error_editFolder');
            });
        }
        else {
            this.toastr.error('Please Select Folder');
        }
    }
    moveFolderSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.selectedContent = [];
            this.selectedFolder = '';
            this.isShowFolderDropdown = false;
            this.modalRef.close();
            this.repositoryList();
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    statusChange(event, detail) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            repository_id: detail.repository_id,
            name: detail.name,
            description: detail.description,
            category_id: detail.category_id,
            status: event.target.checked ? '1' : '2',
            subject_name: detail.subject_name,
            grade_name: detail.grade_name,
            file_path: detail.file_path,
            link: detail.link,
            type: '1',
        };
        this.student.editContent(data).subscribe((successData) => {
            this.statusChangeSuccess(successData);
        }, (error) => {
            console.error(error, 'error_editFolder');
        });
    }
    statusChangeSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.repositoryList();
        }
    }
    studentClassList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            type: '1'
        };
        this.student.classList(data).subscribe((successData) => {
            this.classListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_classList');
        });
    }
    classListSuccess(successData) {
        if (successData.IsSuccess) {
            this.classList = successData.ResponseObject;
        }
    }
    assignToContent() {
        if (this.selectedClass != '') {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                student_id: this.auth.getUserId(),
                repository_id: this.shareRepositoryDetail.repository_id,
                class_id: this.selectedClass,
                // category_id: this.folderDetails.category_id,
                remarks: this.remarks
            };
            this.student.shareRepository(data).subscribe((successData) => {
                this.shareRepositorySuccess(successData);
            }, (error) => {
                console.error(error, 'error_classList');
                this.shareRepositoryFailure(error);
            });
        }
        else {
            this.toastr.error('Please Select Class');
        }
    }
    shareRepositorySuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.modalRef.close();
            this.remarks = '';
            this.selectedClass = '';
            this.contentList.forEach((items) => {
                items.isShowClassList = false;
            });
        }
        else {
            this.shareRepositoryFailure(successData);
        }
    }
    shareRepositoryFailure(error) {
        this.toastr.error(error.ErrorObject);
        this.modalRef.close();
        // this.contentList.forEach((items) => {
        //   items.isShowClassList = false;
        // });
    }
    static { this.ɵfac = function RepositoryComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RepositoryComponent)(i0.ɵɵdirectiveInject(i1.StudentService), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.ConfigurationService), i0.ɵɵdirectiveInject(i5.NgbModal), i0.ɵɵdirectiveInject(i6.ToastrService), i0.ɵɵdirectiveInject(i7.CommonService), i0.ɵɵdirectiveInject(i8.DomSanitizer)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RepositoryComponent, selectors: [["app-repository"]], viewQuery: function RepositoryComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.previewRepository = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.assignClass = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.confirmMove = _t.first);
        } }, decls: 26, vars: 4, consts: [["confirmMove", ""], ["deleteTemplate", ""], ["previewRepository", ""], ["assignClass", ""], [1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "row", "mt-2", "px-3"], [1, "col-6"], [1, "col-6", "d-flex", "justify-content-end"], [1, "input-group"], ["placeholder", "Search Content", "size", "50", "type", "text", 1, "form-control", 2, "height", "40px", 3, "input", "ngModelChange", "ngModel"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "btn-popup", "pull-right"], [1, "btn", "btn-primary", "ml-3", 3, "routerLink"], [1, "card-body"], ["class", "col-12 blogger-list", 4, "ngIf"], ["class", "row my-3 d-flex justify-content-center align-items-center", "style", "height: 50vh", 4, "ngIf"], [1, "col-12", "blogger-list"], [1, "col-md-12", "d-flex", "justify-content-end", "my-2", "px-0"], ["class", "btn btn-outline-primary mr-3", 3, "click", 4, "ngIf"], ["class", "btn btn-danger-gradien mr-3", 3, "click", 4, "ngIf"], ["bindLabel", "category_name", "bindValue", "category_id", "class", "col-md-2 px-0", "placeholder", "Select Folder *", 3, "items", "change", 4, "ngIf"], ["rowHeight", "auto", 1, "bootstrap", "repository-table", 3, "select", "columnMode", "footerHeight", "headerHeight", "limit", "rows", "selectionType", "selected"], [3, "canAutoResize", "checkboxable", "draggable", "resizeable", "sortable", "width"], ["name", "Content", "prop", "name", 1, "custom-table-column", 3, "canAutoResize", "draggable", "width"], ["ngx-datatable-cell-template", ""], ["name", "Folder", "prop", "category_name", 1, "custom-table-column", "contenttext", 3, "canAutoResize", "draggable", "width"], ["name", "Status", 1, "custom-table-column", "contenttext", 3, "canAutoResize", "draggable", "width"], ["name", "Action", 1, "custom-table-column", "contenttext", 3, "canAutoResize", "draggable", "width"], ["ngx-datatable-cell-template", "", 1, "justify-content-center", "flex-wrap"], [1, "btn", "btn-outline-primary", "mr-3", 3, "click"], [1, "btn", "btn-danger-gradien", "mr-3", 3, "click"], ["bindLabel", "category_name", "bindValue", "category_id", "placeholder", "Select Folder *", 1, "col-md-2", "px-0", 3, "change", "items"], [1, "text-center", "cursor", "name-hover", "mb-0", "font-weight-bold", 3, "click"], ["class", "d-flex flex-wrap justify-content-center", 4, "ngIf"], ["class", "font-weight-bold", 4, "ngIf"], [1, "d-flex", "flex-wrap", "justify-content-center"], ["class", "text-center name-hover mb-0 font-weight-bold cursor", "style", "color: black", 3, "click", 4, "ngFor", "ngForOf"], [1, "text-center", "name-hover", "mb-0", "font-weight-bold", "cursor", 2, "color", "black", 3, "click"], [1, "font-weight-bold"], [1, "toggle"], ["type", "checkbox", 3, "click", "checked"], [1, "slider", "round"], ["class", "fa fa-folder-o color-primary align-self-center cursor", "style", "font-size: 20px", "title", "Move to Folder", 3, "click", 4, "ngIf"], ["title", "Share to Class", 1, "fa", "fa-share-alt", "color-primary", "ml-3", "align-self-center", "cursor", 2, "font-size", "20px", 3, "click"], ["title", "Preview", 1, "fa", "fa-eye", "color-primary", "ml-3", "align-self-center", "cursor", 2, "font-size", "20px", 3, "click"], ["title", "Edit", 1, "fa", "fa-pencil-square", "color-primary", "ml-3", "align-self-center", "cursor", 2, "font-size", "20px", 3, "click"], ["title", "Delete", 1, "fa", "fa-trash", "color-primary", "ml-3", "align-self-center", "cursor", 2, "font-size", "20px", 3, "click"], ["class", "col-md-12 px-0 d-flex mt-2", 4, "ngIf"], ["title", "Move to Folder", 1, "fa", "fa-folder-o", "color-primary", "align-self-center", "cursor", 2, "font-size", "20px", 3, "click"], [1, "col-md-12", "px-0", "d-flex", "mt-2"], ["appendTo", "body", "bindLabel", "class_name", "bindValue", "class_id", "dropdownPosition", "bottom", "placeholder", "Select Class *", 1, "flex-fill", 3, "change", "items"], [1, "fa", "fa-times-circle", "color-red", "align-self-center", "ml-2", 2, "font-size", "x-large", 3, "click"], ["appendTo", "body", "bindLabel", "category_name", "bindValue", "category_id", "dropdownPosition", "bottom", "placeholder", "Select Folder *", 1, "flex-fill", 3, "change", "items"], [1, "fa", "fa-check-circle", "color-green", "align-self-center", "ml-2", 2, "font-size", "x-large", 3, "click"], [1, "row", "my-3", "d-flex", "justify-content-center", "align-items-center", 2, "height", "50vh"], [1, "col-4", "text-center"], [1, "nodataList"], [1, "modal-header", "d-flex", "justify-content-between"], [1, "d-flex", "flex-wrap", "font-weight-bold"], [1, "color-primary", "font-weight-bold"], [1, "fa", "fa-times-circle", "cursor", 2, "font-size", "1.2rem", 3, "click"], [1, "modal-body", 2, "border", "0"], [1, "col-md-12", "mt-2"], [1, "color-grey"], [1, "col-12", "mt-5", "px-0"], [1, "btn", "btn-primary", "pull-right", 3, "click"], [1, "btn", "btn-outline-primary", "mr-2", "pull-right", 3, "click"], [1, "col-md-12"], [2, "display", "block", "height", "100vh", 3, "src"], [1, "mb-0"], [1, "col-md-12", "mt-2", "px-0"], ["cols", "30", "placeholder", "Enter Remarks here", "rows", "7", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"]], template: function RepositoryComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7);
            i0.ɵɵelement(4, "div", 8);
            i0.ɵɵelementStart(5, "div", 9)(6, "div", 8)(7, "div", 10)(8, "input", 11);
            i0.ɵɵlistener("input", function RepositoryComponent_Template_input_input_8_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.updateFilter()); });
            i0.ɵɵtwoWayListener("ngModelChange", function RepositoryComponent_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.searchRepositroy, $event) || (ctx.searchRepositroy = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 12)(10, "button", 13);
            i0.ɵɵelement(11, "i", 14);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(12, "div", 15)(13, "a", 16);
            i0.ɵɵtext(14, "Add Content");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(15, "div", 17);
            i0.ɵɵtemplate(16, RepositoryComponent_div_16_Template, 15, 28, "div", 18)(17, RepositoryComponent_div_17_Template, 4, 0, "div", 19);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(18, RepositoryComponent_ng_template_18_Template, 19, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(20, RepositoryComponent_ng_template_20_Template, 14, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(22, RepositoryComponent_ng_template_22_Template, 8, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(24, RepositoryComponent_ng_template_24_Template, 11, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchRepositroy);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("routerLink", "/studentlogin/repository/content/add");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.contentList.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.contentList.length == 0);
        } }, dependencies: [i9.NgForOf, i9.NgIf, i10.DefaultValueAccessor, i10.NgControlStatus, i3.RouterLink, i11.NgSelectComponent, i10.NgModel, i12.PdfViewerComponent, i13.DatatableComponent, i13.DataTableColumnDirective, i13.DataTableColumnCellDirective] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RepositoryComponent, [{
        type: Component,
        args: [{ selector: 'app-repository', template: "<div class=\"container-fluid\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"row mt-2 px-3\">\n                <div class=\"col-6\">\n<!--                    <h5>Content Repository</h5>-->\n                </div>\n                <div class=\"col-6 d-flex justify-content-end\">\n                    <div class=\"col-6\">\n                        <div class=\"input-group\">\n                            <input (input)=\"updateFilter()\" [(ngModel)]=\"searchRepositroy\" class=\"form-control\" placeholder=\"Search Content\" size=\"50\" style=\"height:40px\" type=\"text\" >\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-primary\" type=\"submit\"><i aria-hidden=\"true\" class=\"fa fa-search\"></i></button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"btn-popup pull-right\">\n                        <a [routerLink]=\"'/studentlogin/repository/content/add'\" class=\"btn btn-primary ml-3\">Add Content</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div *ngIf=\"contentList.length != 0\" class=\"col-12 blogger-list\">\n                <div class=\"col-md-12 d-flex justify-content-end my-2 px-0\">\n                    <button (click)=\"showFolderDropdown()\" *ngIf=\"selectedContent.length > 1 && !isShowFolderDropdown\" class=\"btn btn-outline-primary mr-3\">Move to folder</button>\n                    <button (click)=\"clearSelectedContent()\" *ngIf=\"isShowFolderDropdown\" class=\"btn btn-danger-gradien mr-3\">Abort</button>\n                    <ng-select (change)=\"selectFolder($event)\"\n                               *ngIf=\"isShowFolderDropdown\"\n                               [items]=\"folderList\"\n                               bindLabel=\"category_name\"\n                               bindValue=\"category_id\"\n                               class=\"col-md-2 px-0\"\n                               placeholder=\"Select Folder *\"\n                    >\n                    </ng-select>\n                </div>\n                <ngx-datatable\n                        (select)=\"onSelect($event)\"\n                        [columnMode]=\"ColumnMode.force\"\n                        [footerHeight]=\"50\"\n                        [headerHeight]=\"50\"\n                        [limit]=\"10\"\n                        [rows]=\"contentList\"\n                        [selectionType]=\"selectionType.checkbox\"\n                        [selected]=\"selectedContent\"\n                        class=\"bootstrap repository-table\"\n                        rowHeight=\"auto\"\n                >\n                    <ngx-datatable-column\n                            [canAutoResize]=\"false\"\n                            [checkboxable]=\"true\"\n                            [draggable]=\"false\"\n                            [resizeable]=\"false\"\n                            [sortable]=\"false\"\n                            [width]=\"30\"\n                    >\n                    </ngx-datatable-column>\n                    <ngx-datatable-column [canAutoResize]=\"true\" [draggable]=\"false\" [width]=\"40\" class=\"custom-table-column\" name=\"Content\" prop=\"name\">\n                        <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" let-value=\"value\" ngx-datatable-cell-template>\n                            <h6 (click)=\"previewContent(row)\" class=\"text-center cursor name-hover mb-0 font-weight-bold\">{{row.name}}</h6>\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ngx-datatable-column [canAutoResize]=\"true\" [draggable]=\"false\" [width]=\"30\" class=\"custom-table-column contenttext\" name=\"Folder\" prop=\"category_name\">\n                        <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" let-value=\"value\" ngx-datatable-cell-template>\n                            <div *ngIf=\"row.category_name.length != 0\" class=\"d-flex flex-wrap justify-content-center\">\n                                <h6 (click)=\"viewAssignedContent(row, i)\" *ngFor=\"let item of row.category_name; let i = index\" class=\"text-center name-hover mb-0 font-weight-bold cursor\" style=\"color: black\">{{item}}{{(i + 1) != row.category_name.length ? ', &nbsp;' : ''}}</h6>\n                            </div>\n                            <span *ngIf=\"row.category_name.length == 0\" class=\"font-weight-bold\">-</span>\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ngx-datatable-column [canAutoResize]=\"true\" [draggable]=\"false\" [width]=\"20\" class=\"custom-table-column contenttext\" name=\"Status\">\n                        <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" let-value=\"value\" ngx-datatable-cell-template>\n                            <label class=\"{{row.status == '2' ? 'color-red' : ''}} font-weight-bold mr-2\">In-Active</label>\n                            <label class=\"toggle\">\n                                <input (click)=\"statusChange($event, row)\" [checked]=\"row.status == '1'\" type=\"checkbox\">\n                                <span class=\"slider round\"></span>\n                            </label>\n                            <label class=\"{{row.status == '1' ? 'color-green' : ''}} font-weight-bold ml-2\">Active</label>\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ngx-datatable-column [canAutoResize]=\"true\" [draggable]=\"false\" [width]=\"30\" class=\"custom-table-column contenttext\" name=\"Action\">\n                        <ng-template class=\"justify-content-center flex-wrap\" let-row=\"row\" let-rowIndex=\"rowIndex\" let-value=\"value\" ngx-datatable-cell-template>\n                            <i (click)=\"moveSingleFolder(row)\" *ngIf=\"selectedContent.length < 2\" class=\"fa fa-folder-o color-primary align-self-center cursor\" style=\"font-size: 20px\" title=\"Move to Folder\"></i>\n                            <i (click)=\"showClassList(row)\" class=\"fa fa-share-alt color-primary ml-3 align-self-center cursor\" style=\"font-size: 20px\" title=\"Share to Class\"></i>\n                            <i (click)=\"previewContent(row)\" class=\"fa fa-eye color-primary ml-3 align-self-center cursor\" style=\"font-size: 20px\" title=\"Preview\"></i>\n                            <i (click)=\"editContent(row)\" class=\"fa fa-pencil-square color-primary ml-3 align-self-center cursor\" style=\"font-size: 20px\" title=\"Edit\"></i>\n                            <i (click)=\"openDeleteTemplate(row)\" class=\"fa fa-trash color-primary ml-3 align-self-center cursor\" style=\"font-size: 20px\" title=\"Delete\"></i>\n<!--                            <i (click)=\"row.selected = true\" class=\"fa fa-archive color-primary ml-3 align-self-center cursor\" style=\"font-size: 20px\" title=\"Move to folder\"></i>-->\n                            <div *ngIf=\"row.isShowClassList == true\" class=\"col-md-12 px-0 d-flex mt-2\">\n                                <ng-select (change)=\"shareRepository($event)\"\n                                           [items]=\"classList\"\n                                           appendTo=\"body\"\n                                           bindLabel=\"class_name\"\n                                           bindValue=\"class_id\"\n                                           class=\"flex-fill\"\n                                           dropdownPosition=\"bottom\"\n                                           placeholder=\"Select Class *\"\n                                >\n                                </ng-select>\n                                <i (click)=\"row.isShowClassList = false; this.selectedClass = ''\" class=\"fa fa-times-circle color-red align-self-center ml-2\" style=\"font-size: x-large\"></i>\n                            </div>\n                            <div *ngIf=\"row.singleMove == true\" class=\"col-md-12 px-0 d-flex mt-2\">\n                                <ng-select (change)=\"selectFolder($event)\"\n                                           [items]=\"folderList\"\n                                           appendTo=\"body\"\n                                           bindLabel=\"category_name\"\n                                           bindValue=\"category_id\"\n                                           class=\"flex-fill\"\n                                           dropdownPosition=\"bottom\"\n                                           placeholder=\"Select Folder *\"\n                                >\n                                </ng-select>\n                                <i (click)=\"moveToFolder()\" class=\"fa fa-check-circle color-green align-self-center ml-2\" style=\"font-size: x-large\"></i>\n                                <i (click)=\"row.singleMove = false;\" class=\"fa fa-times-circle color-red align-self-center ml-2\" style=\"font-size: x-large\"></i>\n                            </div>\n                        </ng-template>\n                    </ngx-datatable-column>\n                </ngx-datatable>\n\n<!--                <div class=\"col-12\">-->\n<!--                    <pdf-viewer [src]=\"sanitizer.bypassSecurityTrustResourceUrl(pdfTemplate)\" style=\"display: block;\"></pdf-viewer>-->\n<!--                </div>-->\n\n            </div>\n            <div *ngIf=\"contentList.length == 0\" class=\"row my-3 d-flex justify-content-center align-items-center\" style=\"height: 50vh\">\n                <div class=\"col-4 text-center\">\n                    <button class=\"nodataList\">No Content Available!</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #confirmMove let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header d-flex justify-content-between\">\n        <span class=\"d-flex flex-wrap font-weight-bold\">Move to &nbsp;&nbsp;<h4 class=\"color-primary font-weight-bold\">{{folderName}}</h4></span><i (click)=\"this.modalRef.close()\" class=\"fa fa-times-circle cursor\" style=\"font-size: 1.2rem\"></i>\n    </div>\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div class=\"col-md-12 mt-2\">\n                <span class=\"color-grey\">Are you sure to move this Content to <span class=\"color-primary font-weight-bold\"> {{folderName}}</span>?</span>\n            </div>\n            <div class=\"col-12 mt-5 px-0\">\n                <button (click)=\"moveToFolder()\" class=\"btn btn-primary pull-right\">Confirm</button>\n                <button (click)=\"this.modalRef.close()\" class=\"btn btn-outline-primary mr-2 pull-right\">Cancel</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n<ng-template #deleteTemplate let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header d-flex justify-content-between\">\n        <h4 class=\"color-primary font-weight-bold\">{{deleteDetail.name}}</h4><i (click)=\"this.modalRef.close()\" class=\"fa fa-times-circle cursor\" style=\"font-size: 1.2rem\"></i>\n    </div>\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div class=\"col-md-12 mt-2\">\n                <span class=\"color-grey\">Are you sure to delete this Content?</span>\n            </div>\n            <div class=\"col-12 mt-5 px-0\">\n                <button (click)=\"deleteContent()\" class=\"btn btn-primary pull-right\">Confirm</button>\n                <button (click)=\"this.modalRef.close()\" class=\"btn btn-outline-primary mr-2 pull-right\">Cancel</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n<ng-template #previewRepository let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header d-flex justify-content-between\">\n        <h4 class=\"color-primary font-weight-bold\">{{previewDetail.name}}</h4><i (click)=\"modalRef.close()\" class=\"fa fa-times-circle cursor\" style=\"font-size: 1.2rem\"></i>\n    </div>\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div class=\"col-md-12\">\n                <pdf-viewer [src]=\"pdfTemplate\" style=\"display: block;height: 100vh;\"></pdf-viewer>\n\n<!--                <pdf-viewer [src]=\"pdfTemplate\" style=\"display: block;\"></pdf-viewer>-->\n            </div>\n        </div>\n    </div>\n</ng-template>\n<ng-template #assignClass let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header d-flex justify-content-between\">\n        <span class=\"mb-0\">Share Content</span><i (click)=\"this.modalRef.close()\" class=\"fa fa-times-circle cursor\" style=\"font-size: 1.2rem\"></i>\n    </div>\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div class=\"col-md-12 mt-2 px-0\">\n                <textarea [(ngModel)]=\"this.remarks\" class=\"form-control\" cols=\"30\" placeholder=\"Enter Remarks here\" rows=\"7\"></textarea>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"assignToContent()\" class=\"btn btn-primary pull-right\">Assign</button>\n    </div>\n</ng-template>\n" }]
    }], () => [{ type: i1.StudentService }, { type: i2.AuthService }, { type: i3.Router }, { type: i4.ConfigurationService }, { type: i5.NgbModal }, { type: i6.ToastrService }, { type: i7.CommonService }, { type: i8.DomSanitizer }], { deleteTemplate: [{
            type: ViewChild,
            args: ['deleteTemplate']
        }], previewRepository: [{
            type: ViewChild,
            args: ['previewRepository']
        }], assignClass: [{
            type: ViewChild,
            args: ['assignClass']
        }], confirmMove: [{
            type: ViewChild,
            args: ['confirmMove']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RepositoryComponent, { className: "RepositoryComponent" }); })();
//# sourceMappingURL=repository.component.js.map