import { Component, Input, ViewChild } from '@angular/core';
import { DefaultTreeviewI18n, DropdownTreeviewComponent, OrderDownlineTreeviewEventParser, TreeviewConfig, TreeviewEventParser, TreeviewI18n, TreeviewItem } from '@soy-andrey-semyonov/ngx-treeview';
import { ProductTreeviewConfig } from '../../repository/add-resources/add-resources.component';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/classroom.service";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "ngx-toastr";
import * as i4 from "../../../shared/service/auth.service";
import * as i5 from "../../../shared/service/common-data.service";
import * as i6 from "../../../shared/service/validation.service";
import * as i7 from "@angular/forms";
import * as i8 from "@angular/router";
import * as i9 from "@angular/common";
import * as i10 from "@soy-andrey-semyonov/ngx-treeview";
const _c0 = ["addBranch"];
const _c1 = ["preview"];
const _c2 = ["deleteBatch"];
const _c3 = a0 => ({ "margin-left": a0 });
const _c4 = a0 => ({ "color": a0 });
function TreeviewContentfolderComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "i", 9);
    i0.ɵɵlistener("click", function TreeviewContentfolderComponent_div_0_div_3_Template_i_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addItem("0", "parent", "add")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("col-", ctx_r1.calledForm == "class" || ctx_r1.calledForm == "contentLibrary" || ctx_r1.calledForm == "confirmPopUp" ? "1" : "2", " pl-1");
} }
function TreeviewContentfolderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "ngx-dropdown-treeview", 7);
    i0.ɵɵlistener("selectedChange", function TreeviewContentfolderComponent_div_0_Template_ngx_dropdown_treeview_selectedChange_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSelectedChange($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(3, TreeviewContentfolderComponent_div_0_div_3_Template, 2, 3, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const itemTemplate_r4 = i0.ɵɵreference(8);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("", ctx_r1.manageContentFolder ? "col-lg-10 col-sm-10" : "col-lg-12 col-sm-12", " form-group mb-0");
    i0.ɵɵproperty("title", ctx_r1.selectedBacthName.toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.items)("config", ctx_r1.configTree)("itemTemplate", itemTemplate_r4)("buttonClass", ctx_r1.buttonClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.calledForm != "class" && ctx_r1.manageContentFolder || ctx_r1.calledForm == "class" && ctx_r1.manageContentFolder && !ctx_r1.classContentFolder);
} }
function TreeviewContentfolderComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelement(1, "img", 15);
    i0.ɵɵelementEnd();
} }
function TreeviewContentfolderComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "button", 19);
    i0.ɵɵtext(4, "No Data Available!");
    i0.ɵɵelementEnd()()()();
} }
function TreeviewContentfolderComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "ngx-treeview", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    const itemTemplate_r4 = i0.ɵɵreference(8);
    i0.ɵɵclassMapInterpolate1("", ctx_r1.manageContentFolder ? "col-lg-11 col-sm-11" : "col-lg-12 col-sm-12", " d-inline-block form-group mb-0 contentFolder");
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.items)("config", ctx_r1.ContentFolderConfigTree)("itemTemplate", itemTemplate_r4);
} }
function TreeviewContentfolderComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "i", 9);
    i0.ɵɵlistener("click", function TreeviewContentfolderComponent_div_1_div_5_Template_i_click_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addItem("0", "parent", "add")); });
    i0.ɵɵelementEnd()();
} }
function TreeviewContentfolderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, TreeviewContentfolderComponent_div_1_div_1_Template, 2, 0, "div", 10)(2, TreeviewContentfolderComponent_div_1_div_2_Template, 5, 0, "div", 11);
    i0.ɵɵelementStart(3, "div", 12);
    i0.ɵɵtemplate(4, TreeviewContentfolderComponent_div_1_div_4_Template, 2, 6, "div", 8)(5, TreeviewContentfolderComponent_div_1_div_5_Template, 2, 0, "div", 13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showLoader);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showLoader);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.showLoader);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageContentFolder && !ctx_r1.showLoader);
} }
function TreeviewContentfolderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 22)(2, "ngx-dropdown-treeview", 7);
    i0.ɵɵlistener("selectedChange", function TreeviewContentfolderComponent_div_2_Template_ngx_dropdown_treeview_selectedChange_2_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSelectedChange($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const itemTemplate_r4 = i0.ɵɵreference(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("title", ctx_r1.selectedBacthName.toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.items)("config", ctx_r1.classConfigTree)("itemTemplate", itemTemplate_r4)("buttonClass", ctx_r1.buttonClass);
} }
function TreeviewContentfolderComponent_ng_template_3_em_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 37);
    i0.ɵɵtext(1, "Enter Content Folder Name");
    i0.ɵɵelementEnd();
} }
function TreeviewContentfolderComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "h4", 24);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 25)(4, "div", 26)(5, "div", 27)(6, "form", 28)(7, "div", 29)(8, "label", 30)(9, "span");
    i0.ɵɵtext(10, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, " Content Folder Name ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 31)(13, "input", 32);
    i0.ɵɵlistener("input", function TreeviewContentfolderComponent_ng_template_3_Template_input_input_13_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.formSubmitted = true); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, TreeviewContentfolderComponent_ng_template_3_em_14_Template, 2, 0, "em", 33);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(15, "div", 34)(16, "button", 35);
    i0.ɵɵlistener("click", function TreeviewContentfolderComponent_ng_template_3_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(17, "Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 36);
    i0.ɵɵlistener("click", function TreeviewContentfolderComponent_ng_template_3_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addBranchDetails()); });
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.calledValue == "add" ? "Add" : "Rename", " Folder");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r1.branchForm);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r1.branchForm.get("batchname").valid && !ctx_r1.formSubmitted);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", ctx_r1.calledValue == "add" ? "Add" : "Update", " ");
} }
function TreeviewContentfolderComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "h4", 38);
    i0.ɵɵtext(2, "Delete Folder");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 25)(4, "div", 26)(5, "div", 39)(6, "h5");
    i0.ɵɵtext(7, "Are you sure want to delete the ");
    i0.ɵɵelementStart(8, "span", 40);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " folder ?");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(11, "div", 34)(12, "button", 35);
    i0.ɵɵlistener("click", function TreeviewContentfolderComponent_ng_template_5_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(13, "No ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 41);
    i0.ɵɵlistener("click", function TreeviewContentfolderComponent_ng_template_5_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deleteBatchService()); });
    i0.ɵɵtext(15, "Yes ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.selectedBatchForDelete.text);
} }
function TreeviewContentfolderComponent_ng_template_7_div_0_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 49);
    i0.ɵɵlistener("change", function TreeviewContentfolderComponent_ng_template_7_div_0_input_3_Template_input_change_0_listener($event) { i0.ɵɵrestoreView(_r11); const item_r12 = i0.ɵɵnextContext(2).item; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectCheckBox(item_r12, $event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function TreeviewContentfolderComponent_ng_template_7_div_0_input_3_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r11); const item_r12 = i0.ɵɵnextContext(2).item; i0.ɵɵtwoWayBindingSet(item_r12.checked, $event) || (item_r12.checked = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function TreeviewContentfolderComponent_ng_template_7_div_0_input_3_Template_input_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r11); const onCheckedChange_r13 = i0.ɵɵnextContext(2).onCheckedChange; return i0.ɵɵresetView(onCheckedChange_r13()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = i0.ɵɵnextContext(2).item;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r1.classContentFolder);
    i0.ɵɵtwoWayProperty("ngModel", item_r12.checked);
    i0.ɵɵproperty("disabled", item_r12.disabled)("indeterminate", item_r12.indeterminate)("checked", item_r12.checked);
} }
function TreeviewContentfolderComponent_ng_template_7_div_0_label_6_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 54);
    i0.ɵɵlistener("click", function TreeviewContentfolderComponent_ng_template_7_div_0_label_6_i_1_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r14); const item_r12 = i0.ɵɵnextContext(3).item; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addItem(item_r12, "child", "add")); });
    i0.ɵɵelementEnd();
} }
function TreeviewContentfolderComponent_ng_template_7_div_0_label_6_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 55);
    i0.ɵɵlistener("click", function TreeviewContentfolderComponent_ng_template_7_div_0_label_6_i_2_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r15); const item_r12 = i0.ɵɵnextContext(3).item; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addItem(item_r12, "parent", "edit")); });
    i0.ɵɵelementEnd();
} }
function TreeviewContentfolderComponent_ng_template_7_div_0_label_6_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 56);
    i0.ɵɵlistener("click", function TreeviewContentfolderComponent_ng_template_7_div_0_label_6_i_3_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r16); const item_r12 = i0.ɵɵnextContext(3).item; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.batchDeletePopUp(item_r12)); });
    i0.ɵɵelementEnd();
} }
function TreeviewContentfolderComponent_ng_template_7_div_0_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 50);
    i0.ɵɵtemplate(1, TreeviewContentfolderComponent_ng_template_7_div_0_label_6_i_1_Template, 1, 0, "i", 51)(2, TreeviewContentfolderComponent_ng_template_7_div_0_label_6_i_2_Template, 1, 0, "i", 52)(3, TreeviewContentfolderComponent_ng_template_7_div_0_label_6_i_3_Template, 1, 0, "i", 53);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = i0.ɵɵnextContext(2).item;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageContentFolder);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageContentFolder && item_r12.value.split("/")[3] == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r12.value.split("/")[3] == "1" && ctx_r1.calledForm == "contentFolder");
} }
function TreeviewContentfolderComponent_ng_template_7_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 43)(1, "i", 44);
    i0.ɵɵlistener("click", function TreeviewContentfolderComponent_ng_template_7_div_0_Template_i_click_1_listener() { i0.ɵɵrestoreView(_r9); const onCollapseExpand_r10 = i0.ɵɵnextContext().onCollapseExpand; return i0.ɵɵresetView(onCollapseExpand_r10()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 45);
    i0.ɵɵtemplate(3, TreeviewContentfolderComponent_ng_template_7_div_0_input_3_Template, 1, 5, "input", 46);
    i0.ɵɵelementStart(4, "label", 47);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, TreeviewContentfolderComponent_ng_template_7_div_0_label_6_Template, 4, 3, "label", 48);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r12 = i0.ɵɵnextContext().item;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("title", item_r12.text);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("fa-caret-right", item_r12.collapsed)("fa-caret-down", !item_r12.collapsed);
    i0.ɵɵproperty("hidden", ctx_r1.checkForFolderType(item_r12));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(11, _c3, !item_r12.children ? "14px" : "0"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.calledForm != "contentFolder");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(13, _c4, ctx_r1.calledForm == "contentFolder" ? "#8F008A" : ctx_r1.calledForm == "contentFolderCheck" ? "#8F008A" : ""));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r12.text);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.calledForm != "contentFolderCheck");
} }
function TreeviewContentfolderComponent_ng_template_7_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 65);
    i0.ɵɵtext(1, "Resource");
    i0.ɵɵelementEnd();
} }
function TreeviewContentfolderComponent_ng_template_7_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 66);
    i0.ɵɵtext(1, "Assignment");
    i0.ɵɵelementEnd();
} }
function TreeviewContentfolderComponent_ng_template_7_div_1_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 67);
    i0.ɵɵtext(1, "Assessment");
    i0.ɵɵelementEnd();
} }
function TreeviewContentfolderComponent_ng_template_7_div_1_i_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 68);
} if (rf & 2) {
    const item_r12 = i0.ɵɵnextContext(2).item;
    i0.ɵɵpropertyInterpolate1("title", "", item_r12.value.split("/")[2] == "1" ? "Resource" : item_r12.value.split("/")[2] == "2" ? "Assignment" : "Assesment", " PDF");
} }
function TreeviewContentfolderComponent_ng_template_7_div_1_i_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 69);
} if (rf & 2) {
    const item_r12 = i0.ɵɵnextContext(2).item;
    i0.ɵɵpropertyInterpolate1("title", "", item_r12.value.split("/")[2] == "1" ? "Resource" : item_r12.value.split("/")[2] == "2" ? "Assignment" : "Assesment", " Text");
} }
function TreeviewContentfolderComponent_ng_template_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 43)(1, "i", 44);
    i0.ɵɵlistener("click", function TreeviewContentfolderComponent_ng_template_7_div_1_Template_i_click_1_listener() { i0.ɵɵrestoreView(_r17); const onCollapseExpand_r10 = i0.ɵɵnextContext().onCollapseExpand; return i0.ɵɵresetView(onCollapseExpand_r10()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 57)(3, "label", 58);
    i0.ɵɵlistener("click", function TreeviewContentfolderComponent_ng_template_7_div_1_Template_label_click_3_listener() { i0.ɵɵrestoreView(_r17); const item_r12 = i0.ɵɵnextContext().item; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.listDetails(item_r12)); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, TreeviewContentfolderComponent_ng_template_7_div_1_span_5_Template, 2, 0, "span", 59)(6, TreeviewContentfolderComponent_ng_template_7_div_1_span_6_Template, 2, 0, "span", 60)(7, TreeviewContentfolderComponent_ng_template_7_div_1_span_7_Template, 2, 0, "span", 61);
    i0.ɵɵelementStart(8, "label", 62);
    i0.ɵɵtemplate(9, TreeviewContentfolderComponent_ng_template_7_div_1_i_9_Template, 1, 2, "i", 63)(10, TreeviewContentfolderComponent_ng_template_7_div_1_i_10_Template, 1, 2, "i", 64);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r12 = i0.ɵɵnextContext().item;
    i0.ɵɵproperty("title", item_r12.text);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("fa-caret-right", item_r12.collapsed)("fa-caret-down", !item_r12.collapsed);
    i0.ɵɵproperty("hidden", !item_r12.children);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(13, _c3, !item_r12.children ? "14px" : "0"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r12.text);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r12.value.split("/")[2] == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r12.value.split("/")[2] == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r12.value.split("/")[2] == "3");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r12.value.split("/")[3] == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r12.value.split("/")[3] == "3");
} }
function TreeviewContentfolderComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeviewContentfolderComponent_ng_template_7_div_0_Template, 7, 15, "div", 42)(1, TreeviewContentfolderComponent_ng_template_7_div_1_Template, 11, 15, "div", 42);
} if (rf & 2) {
    const item_r12 = ctx.item;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", item_r12.value.split("/")[1] == "folder");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r12.value.split("/")[1] == "file" && ctx_r1.checkSubjectWithTeacherSubject(item_r12.value.split("/")) && (ctx_r1.calledForm == "contentFolder" || ctx_r1.calledForm == "class"));
} }
export class TreeviewContentfolderComponent {
    constructor(branchService, modalService, toastr, auth, commondata, validationService, formBuilder, router) {
        this.branchService = branchService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.auth = auth;
        this.commondata = commondata;
        this.validationService = validationService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.branchListData = [];
        this.batchid = [];
        this.calledValue = '';
        this.formSubmitted = true;
        this.previousFilterType = 'Latest';
        this.newBatchId = '';
        this.batchDetails = [];
        this.selectedBacthName = [];
        this.configTree = TreeviewConfig.create({
            hasAllCheckBox: false,
            hasFilter: true,
            hasCollapseExpand: false,
            decoupleChildFromParent: true,
            maxHeight: 370
        });
        this.ContentFolderConfigTree = TreeviewConfig.create({
            hasAllCheckBox: false,
            hasFilter: true,
            hasCollapseExpand: true,
            decoupleChildFromParent: true,
            maxHeight: 370
        });
        this.classConfigTree = TreeviewConfig.create({
            hasAllCheckBox: false,
            hasFilter: true,
            hasCollapseExpand: false,
            decoupleChildFromParent: true,
            maxHeight: 370
        });
        this.buttonClass = 'treeview-button';
        this.manageContentFolder = true;
        this.classContentFolder = false;
        // public contentEdit = true;
        this.showLoader = true;
        this.selectedbatch = [];
        this.filterType = 'Latest';
        this.calledForm = '';
        this.treeviewHeight = 200;
        this.schoolId = '';
        this.class_id = '';
        this.content_id = '';
        this.valueCheckArray = [];
        this.totalBatchIds = [];
        this.schoolStoredInitially = '';
        this.teacherschool = JSON.parse(this.auth.getSessionData('rista_data1'));
        this.schoolStoredInitially = this.auth.getSessionData('school_id');
        if (this.auth.getRoleId() == '4') {
            this.manageContentFolder = this.auth.manageOwnContent;
            this.classContentFolder = this.auth.manageClass;
            // this.contentEdit = this.teacherschool.permissions[5].permission[2].status == 1;
        }
        else {
            this.manageContentFolder = true;
            this.classContentFolder = false;
        }
        this.resetForm();
    }
    ngOnInit() {
        this.batchid = this.selectedbatch;
        this.getBranchList();
    }
    resetForm() {
        this.branchForm = this.formBuilder.group({
            batchname: ['', Validators.required]
        });
    }
    ngOnChanges(changes) {
        if (this.calledForm == 'contentFolder') {
            this.showLoader = true;
            this.totalBatchIds = [];
            if (this.previousFilterType != this.filterType) {
                this.previousFilterType = this.filterType;
                this.getBranchList();
            }
            else if (this.schoolId != this.schoolStoredInitially) {
                this.getBranchList();
                this.schoolStoredInitially = this.schoolId;
            }
            else {
                this.showLoader = false;
            }
            this.configTree.maxHeight = this.treeviewHeight - 250;
        }
        else {
            this.configTree.maxHeight = this.treeviewHeight;
        }
    }
    ngOnDestroy() {
        sessionStorage.removeItem('selectedbatchId');
        this.selectedbatch = [];
        this.batchid = [];
    }
    close() {
        this.formSubmitted = true;
        this.modalRef.close();
    }
    addItem(item, type, typeOfFunction) {
        this.calledValue = typeOfFunction;
        this.formSubmitted = true;
        this.resetForm();
        if (typeOfFunction == 'add') {
            if (type == 'parent') {
                this.addItemsData = { parent_batch_id: '0', batch_id: item.value };
            }
            else {
                this.addItemsData = { parent_batch_id: item.value.split('/')[0], batch_id: item.value.split('/')[1] };
            }
        }
        else {
            this.addItemsData = item;
            this.branchForm.controls.batchname.patchValue(item.text);
        }
        console.log(this.addItemsData, 'addIte');
        console.log(item, 'hh');
        this.modalRef = this.modalService.open(this.addBranchTemp, { size: 'lg', backdrop: 'static' });
    }
    addBranchDetails() {
        if (this.branchForm.valid) {
            this.formSubmitted = true;
            this.commondata.showLoader(false);
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                batch_name: this.branchForm.controls.batchname.value,
                status: '1',
                school_id: this.auth.getSessionData('school_id'),
                batch_id: this.calledValue == 'add' ? this.addItemsData.batch_id : this.addItemsData.value.split('/')[0]
            };
            if (this.auth.getRoleId() == '6') {
                data['corporate_id'] = this.auth.getSessionData('corporate_id');
            }
            if (this.calledValue == 'add') {
                data['parent_batch_id'] = this.addItemsData.parent_batch_id;
                this.branchService.classRoomAdd(data).subscribe((successData) => {
                    this.branchSuccess(successData);
                }, (error) => {
                    console.log(error, 'error');
                });
            }
            else {
                this.branchService.classRoomEdit(data).subscribe((successData) => {
                    this.branchSuccess(successData, data);
                }, (error) => {
                    console.log(error, 'error');
                });
            }
        }
        else {
            this.validationService.validateAllFormFields(this.branchForm);
            this.formSubmitted = false;
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    branchSuccess(successData, data) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.totalBatchIds = [];
            this.newBatchId = successData.batch_id;
            this.batchDetails = successData.batch_detais[0].children;
            this.showLoader = true;
            if (this.batchDetails.length != 0) {
                this.batchDetails.forEach((items) => {
                    this.findOpenFolderId(items, successData.batch_detais[0]);
                });
            }
            else {
                this.totalBatchIds = [this.newBatchId];
            }
            if (this.calledValue == 'add') {
                this.toastr.success('Content Folder Added Successfully');
            }
            else {
                this.toastr.success('Content Folder Updated Successfully');
            }
            this.modalRef.close();
            console.log(this.totalBatchIds, 'totalBatchIds');
            this.branchForm.controls.batchname.patchValue('');
            setTimeout(() => {
                this.getBranchList();
            }, 2000);
        }
        else {
            this.commondata.showLoader(false);
            this.toastr.error(successData.ErrorObject, 'Content Folder');
        }
    }
    findOpenFolderId(value, parentValue) {
        if (value.batch_id == this.newBatchId) {
            this.totalBatchIds = (parentValue.batch_id + '/' + value.batch_id).split('/');
        }
        else {
            value.appendedBatchValue = parentValue.batch_id + '/' + value.batch_id;
            if (value.children) {
                value.children.forEach((items) => {
                    if (items.batch_id == this.newBatchId) {
                        this.totalBatchIds = (value.appendedBatchValue + '/' + items.batch_id).split('/');
                    }
                    else {
                        items.appendedBatchValue = value.appendedBatchValue + '/' + items.batch_id;
                        if (items.children) {
                            if (items.children.length != 0) {
                                this.findSecondOpenFolder(items);
                            }
                        }
                    }
                });
            }
        }
    }
    findSecondOpenFolder(secondFolderValue) {
        if (secondFolderValue.batch_id == this.newBatchId) {
            this.totalBatchIds = (secondFolderValue.appendedBatchValue + '/' + secondFolderValue.batch_id).split('/');
        }
        else {
            if (secondFolderValue.children) {
                secondFolderValue.children.forEach((items1) => {
                    if (items1.batch_id == this.newBatchId) {
                        this.totalBatchIds = (secondFolderValue.appendedBatchValue + '/' + items1.batch_id).split('/');
                    }
                    else {
                        items1.appendedBatchValue = secondFolderValue.appendedBatchValue + '/' + items1.batch_id;
                        if (items1.children) {
                            if (items1.children.length != 0) {
                                this.findSecondOpenFolder(items1);
                            }
                        }
                    }
                });
            }
        }
    }
    batchDeletePopUp(item) {
        this.selectedBatchForDelete = item;
        this.modalRef = this.modalService.open(this.deleteBatch, { size: 'md', backdrop: 'static' });
    }
    deleteBatchService() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            batch_id: this.selectedBatchForDelete.value.split('/')[0],
            parent_batch_id: this.selectedBatchForDelete.value.split('/')[2]
        };
        this.branchService.classRoomDelete(data).subscribe((successData) => {
            this.deleteBranchSuccess(successData);
        }, (error) => {
            console.log(error, 'error');
        });
    }
    deleteBranchSuccess(successData) {
        if (successData.IsSuccess) {
            this.modalRef.close();
            this.totalBatchIds = [];
            this.newBatchId = successData.batch_id;
            this.batchDetails = successData.batch_detais.length != 0 ? successData.batch_detais[0].children : [];
            this.showLoader = true;
            if (this.batchDetails.length != 0) {
                this.batchDetails.forEach((items) => {
                    this.findOpenFolderId(items, successData.batch_detais[0]);
                });
            }
            else {
                this.totalBatchIds = [this.newBatchId];
            }
            setTimeout(() => {
                this.getBranchList();
            }, 2000);
            this.toastr.success('Content Folder Deleted Successfully');
        }
    }
    getBranchList() {
        this.commondata.showLoader(true);
        const data = {
            platform: 'web',
            type: '1',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            sort_type: this.filterType == 'Latest' ? '1' : this.filterType == 'Oldest' ? '2' : this.filterType == 'A - Z' ? '3' : '4',
            corporate_id: this.auth.getRoleId() == '2' || this.auth.getRoleId() == '4' ? '0' : this.auth.getSessionData('corporate_id')
        };
        this.calledForm == 'class' ? data['class_id'] = this.class_id : '';
        this.calledForm == '' && this.content_id != '' ? data['content_id'] = this.content_id ?? '' : '';
        this.branchService.batchList(data).subscribe((successData) => {
            this.branchListSuccess(successData);
        }, (error) => {
            this.commondata.showLoader(false);
        });
    }
    branchListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.branchListData = successData.ResponseObject;
            this.items = [];
            this.branchListData.forEach((item) => {
                this.items.push(new TreeviewItem(item));
                this.valueCheckArray.push(new TreeviewItem(item));
            });
            this.items.forEach((item) => {
                this.selectChildren(item, item);
            });
            this.showLoader = false;
        }
    }
    checkForFolderType(items) {
        let returnValue = true;
        if (items.children && this.calledForm == 'class') {
            returnValue = false;
        }
        else if (items.children && this.calledForm != 'contentFolder') {
            items.children.every((children) => {
                const value = children.value.split('/');
                if (value[1] == 'folder') {
                    returnValue = false;
                    return false;
                }
                return true;
            });
        }
        else if (!items.children) {
            returnValue = true;
        }
        else if (items.children && this.calledForm == 'contentFolder') {
            returnValue = false;
        }
        return returnValue;
    }
    onSelectedChange(event) {
        if (!this.batchid || this.batchid.length == 0) {
            this.child.buttonLabel = 'Select Content Folder';
        }
        else {
            this.child.buttonLabel = this.batchid.length + ' ' + 'Content Folder Selected';
        }
    }
    checkSubjectWithTeacherSubject(totalValue) {
        const userDetails = JSON.parse(this.auth.getSessionData('userDetails'));
        const selectedSchool = JSON.parse(this.auth.getSessionData('rista_data1'));
        if (this.auth.getRoleId() == '4' && totalValue[1] == 'file' && selectedSchool?.individual_teacher == 0) {
            if (totalValue.length == 6) {
                const subject = totalValue[5].split(',');
                const assignedSubjects = userDetails.subject || [];
                return subject.some(folderSubject => assignedSubjects.includes(folderSubject));
            }
        }
        return true;
    }
    selectCheckBox(value, event) {
        if (this.calledForm == 'class') {
            this.selectChildren(value, 'classCheck', value, event.target.checked);
        }
        else {
            this.items.forEach(item => {
                this.selectChildren(item, 'check', value, event.target.checked);
            });
        }
    }
    selectChildren(i, selectedForm, value, checked) {
        if (selectedForm == 'check') {
            i.checked = value.value == i.value ? checked : i.checked;
            if (checked && value.value == i.value) {
                const batchValue = value.value.split('/');
                this.batchid.push(batchValue[0]);
                this.selectedBacthName.push(' ' + ' ' + value.text + ' ' + ' ');
                if (this.calledForm == 'contentLibrary' || this.calledForm == 'confirmPopUp') {
                    this.auth.setSessionData('selectedbatchId', JSON.stringify(this.batchid));
                }
            }
            else if (!checked && value.value == i.value) {
                this.batchid.forEach((batch, index) => {
                    const batchValue = value.value.split('/');
                    if (batch == batchValue[0]) {
                        this.batchid.splice(index, 1);
                        this.selectedBacthName.splice(index, 1);
                        if (this.calledForm == 'contentLibrary' || this.calledForm == 'confirmPopUp') {
                            this.auth.setSessionData('selectedbatchId', JSON.stringify(this.batchid));
                        }
                    }
                });
            }
        }
        else if (selectedForm == 'classCheck') {
            i.checked = checked;
            const batchValue = value.value.split('/');
            if (checked && batchValue[1] == 'folder') {
                this.batchid.push(batchValue[0]);
                this.selectedBacthName.push(' ' + ' ' + value.text + ' ' + ' ');
            }
            else if (!checked && batchValue[1] == 'folder') {
                this.batchid.forEach((batch, index) => {
                    if (batch == batchValue[0]) {
                        this.batchid.splice(index, 1);
                        this.selectedBacthName.splice(index, 1);
                    }
                });
            }
        }
        else {
            i.checked = false;
            if (this.calledForm == 'contentFolder' && this.totalBatchIds.length == 0) {
                i.collapsed = true;
            }
            else if (this.calledForm == 'contentFolder' && this.totalBatchIds.length != 0) {
                const batchValue = i.value.split('/');
                const valueAvailableOrNot = this.totalBatchIds.some((code) => code === batchValue[0]);
                i.collapsed = !valueAvailableOrNot;
            }
            if (this.type == 'edit') {
                this.selectCheckBoxFromList(i);
            }
        }
        if (i.children) {
            this.selectInsideChildren(i, selectedForm, value, checked);
        }
    }
    selectInsideChildren(item, selectedForm, value, checked) {
        item.children.forEach((i) => {
            if (selectedForm == 'check') {
                i.checked = value.value == i.value ? checked : i.checked;
                if (checked && value.value == i.value) {
                    const batchValue = value.value.split('/');
                    if (batchValue[0] != '' && batchValue[0] != '0') {
                        this.batchid.push(batchValue[0]);
                        this.selectedBacthName.push(' ' + ' ' + i.text + ' ' + ' ');
                        if (this.calledForm == 'contentLibrary' || this.calledForm == 'confirmPopUp') {
                            this.auth.setSessionData('selectedbatchId', JSON.stringify(this.batchid));
                        }
                    }
                }
                else if (!checked && value.value == i.value) {
                    this.batchid.forEach((batch, index) => {
                        const batchValue = value.value.split('/');
                        if (batch == batchValue[0]) {
                            this.batchid.splice(index, 1);
                            this.selectedBacthName.splice(index, 1);
                            if (this.calledForm == 'contentLibrary' || this.calledForm == 'confirmPopUp') {
                                this.auth.setSessionData('selectedbatchId', JSON.stringify(this.batchid));
                            }
                        }
                    });
                }
            }
            else if (selectedForm == 'classCheck') {
                i.checked = checked;
                const batchValue = i.value.split('/');
                if (checked && batchValue[1] == 'folder') {
                    this.batchid.push(batchValue[0]);
                    this.selectedBacthName.push(' ' + ' ' + i.text + ' ' + ' ');
                }
                else if (!checked && batchValue[1] == 'folder') {
                    this.batchid.forEach((batch, index) => {
                        if (batch == batchValue[0]) {
                            this.batchid.splice(index, 1);
                            this.selectedBacthName.splice(index, 1);
                        }
                    });
                }
            }
            else {
                i.collapsed = this.calledForm != 'contentFolder';
                if (this.calledForm == 'contentFolder' && this.totalBatchIds.length == 0) {
                    i.collapsed = true;
                }
                else if (this.calledForm == 'contentFolder' && this.totalBatchIds.length != 0) {
                    const batchValue = i.value.split('/');
                    const valueAvailableOrNot = this.totalBatchIds.some((code) => code === batchValue[0]);
                    i.collapsed = !valueAvailableOrNot;
                }
                i.checked = false;
                if (this.type == 'edit') {
                    this.selectCheckBoxFromList(i);
                }
            }
            if (i.children) {
                this.selectInsideChildren(i, selectedForm, value, checked);
            }
        });
    }
    selectCheckBoxFromList(value) {
        const batchValue = value.value.split('/');
        if (this.batchid && Array.isArray(this.batchid)) {
            this.batchid.every((items) => {
                if (items == batchValue[0]) {
                    value.checked = true;
                    this.selectedBacthName.push(' ' + ' ' + value.text + ' ' + ' ');
                    return false;
                }
                return true;
            });
        }
    }
    listDetails(event) {
        if (this.calledForm != 'class') {
            const contentValue = event.value.split('/');
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                content_id: contentValue[0],
                content_type: contentValue[2],
                content_format: contentValue[3],
                school_id: this.auth.getSessionData('school_id'),
            };
            this.auth.setSessionData('editor', JSON.stringify(data));
            if (contentValue[2] == '1') {
                this.auth.setSessionData('preview_page', contentValue[3] == '1' ? 'create_resources' : 'text_resources');
            }
            else if (contentValue[2] == '2') {
                this.auth.setSessionData('preview_page', contentValue[3] == '1' ? 'create_assignments' : 'text_assignments');
            }
            else if (contentValue[2] == '3') {
                this.auth.setSessionData('preview_page', contentValue[3] == '1' ? 'create_assessments' : 'text_assessments');
            }
            this.auth.setSessionData('preview', 'content-folder');
            this.router.navigate(['repository/preview']);
        }
    }
    static { this.ɵfac = function TreeviewContentfolderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TreeviewContentfolderComponent)(i0.ɵɵdirectiveInject(i1.ClassroomService), i0.ɵɵdirectiveInject(i2.NgbModal), i0.ɵɵdirectiveInject(i3.ToastrService), i0.ɵɵdirectiveInject(i4.AuthService), i0.ɵɵdirectiveInject(i5.CommonDataService), i0.ɵɵdirectiveInject(i6.ValidationService), i0.ɵɵdirectiveInject(i7.FormBuilder), i0.ɵɵdirectiveInject(i8.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeviewContentfolderComponent, selectors: [["app-treeview-contentfolder"]], viewQuery: function TreeviewContentfolderComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(DropdownTreeviewComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addBranchTemp = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.previewContentFolder = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteBatch = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.child = _t.first);
        } }, inputs: { type: "type", selectedbatch: "selectedbatch", filterType: "filterType", calledForm: "calledForm", treeviewHeight: "treeviewHeight", schoolId: "schoolId", class_id: "class_id", content_id: "content_id" }, features: [i0.ɵɵProvidersFeature([
                { provide: TreeviewEventParser, useClass: OrderDownlineTreeviewEventParser },
                { provide: TreeviewConfig, useClass: ProductTreeviewConfig },
                {
                    provide: TreeviewI18n, useValue: Object.assign(new DefaultTreeviewI18n(), {
                        getFilterPlaceholder() {
                            return 'Search Content Folder';
                        }
                    })
                }
            ]), i0.ɵɵNgOnChangesFeature], decls: 9, vars: 3, consts: [["addBranch", ""], ["deleteBatch", ""], ["itemTemplate", ""], ["class", "d-flex align-items-center", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "align-items-center"], [3, "title"], [3, "selectedChange", "items", "config", "itemTemplate", "buttonClass"], [3, "class", 4, "ngIf"], ["aria-hidden", "true", "title", "Add Parent Folder", 1, "fas", "fa-folder-plus", "color-primary", "fa-2x", "cursor", "treeview", 3, "click"], ["id", "custom-pdf-loader-editor mb-5", "class", "d-flex justify-content-center", 4, "ngIf"], ["class", "mt-5 w-100", 4, "ngIf"], [1, "row", "pl-4", "pr-0"], ["class", "pl-4 pt-3 col-1", 4, "ngIf"], ["id", "custom-pdf-loader-editor mb-5", 1, "d-flex", "justify-content-center"], ["src", "assets/images/pre-loader/loader-01.svg", "alt", ""], [1, "mt-5", "w-100"], [1, "row", "d-flex", "justify-content-center", "list-card", "mt-5"], [1, "col-4"], [1, "nodataList"], [3, "items", "config", "itemTemplate"], [1, "pl-4", "pt-3", "col-1"], [1, "col-lg-12", "col-sm-12", "form-group", "mb-0", 3, "title"], [1, "modal-header"], [1, "col-md-11", "px-2", "py-1", "font-weight-bold", "mb-0"], [1, "modal-body"], [1, "row"], [1, "col-md-12"], ["novalida", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], [1, "col-xl-8", "col-md-7"], ["formControlName", "batchname", "id", "validat1ionCustom1", "type", "text", "placeholder", "Enter Content Folder Name", "required", "", 1, "form-control", 3, "input"], ["class", "error", 4, "ngIf"], [1, "modal-footer", "pull-right"], ["type", "button", 1, "btn", "cancel", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "error"], [1, "col-md-11", "px-2", "font-weight-bold", "mb-0"], [1, "col-md-12", "px-4"], [1, "color-primary", "font-weight-bold"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["class", "form-inline row-item py-1", 3, "title", 4, "ngIf"], [1, "form-inline", "row-item", "py-1", 3, "title"], ["aria-hidden", "true", 1, "fa", "mr-2", "cursor", 3, "click", "hidden"], [1, "form-check", 3, "ngStyle"], ["type", "checkbox", "class", "form-check-input cursor", 3, "disabled", "ngModel", "indeterminate", "checked", "change", "ngModelChange", 4, "ngIf"], [1, "form-check-label", 3, "ngStyle"], ["class", "form-check-label ml-2 cursor", 4, "ngIf"], ["type", "checkbox", 1, "form-check-input", "cursor", 3, "change", "ngModelChange", "disabled", "ngModel", "indeterminate", "checked"], [1, "form-check-label", "ml-2", "cursor"], ["class", "fas fa-folder-plus color-primary color-primary", "aria-hidden", "true", "title", "Add", 3, "click", 4, "ngIf"], ["class", "fa fa-pencil ml-2 color-primary", "aria-hidden", "true", "title", "Rename Content Folder Name", 3, "click", 4, "ngIf"], ["class", "fa fa-trash ml-2 color-red", "aria-hidden", "true", "title", "Delete Content Folder", 3, "click", 4, "ngIf"], ["aria-hidden", "true", "title", "Add", 1, "fas", "fa-folder-plus", "color-primary", "color-primary", 3, "click"], ["aria-hidden", "true", "title", "Rename Content Folder Name", 1, "fa", "fa-pencil", "ml-2", "color-primary", 3, "click"], ["aria-hidden", "true", "title", "Delete Content Folder", 1, "fa", "fa-trash", "ml-2", "color-red", 3, "click"], [1, "form-check", "hoverText", 3, "ngStyle"], [1, "form-check-label", "cursor", "mr-2", "hover-underline-animation", 2, "font-size", "14px", "font-style", "italic", 3, "click"], ["style", "font-size: 8px", "class", "badge badge-green font-weight-bold align-self-center", 4, "ngIf"], ["style", "font-size: 8px", "class", "badge badge-warning font-weight-bold align-self-center", 4, "ngIf"], ["style", "font-size: 8px", "class", "badge badge-primary font-weight-bold align-self-center", 4, "ngIf"], [1, "form-check-label", "ml-2"], ["class", "fa fa-file-pdf-o color-primary", "aria-hidden", "true", 3, "title", 4, "ngIf"], ["class", "fa fa-lightbulb-o color-primary", "aria-hidden", "true", 3, "title", 4, "ngIf"], [1, "badge", "badge-green", "font-weight-bold", "align-self-center", 2, "font-size", "8px"], [1, "badge", "badge-warning", "font-weight-bold", "align-self-center", 2, "font-size", "8px"], [1, "badge", "badge-primary", "font-weight-bold", "align-self-center", 2, "font-size", "8px"], ["aria-hidden", "true", 1, "fa", "fa-file-pdf-o", "color-primary", 3, "title"], ["aria-hidden", "true", 1, "fa", "fa-lightbulb-o", "color-primary", 3, "title"]], template: function TreeviewContentfolderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TreeviewContentfolderComponent_div_0_Template, 4, 9, "div", 3)(1, TreeviewContentfolderComponent_div_1_Template, 6, 4, "div", 4)(2, TreeviewContentfolderComponent_div_2_Template, 3, 5, "div", 3)(3, TreeviewContentfolderComponent_ng_template_3_Template, 20, 4, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(5, TreeviewContentfolderComponent_ng_template_5_Template, 16, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(7, TreeviewContentfolderComponent_ng_template_7_Template, 2, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.calledForm != "contentFolder" && ctx.calledForm != "class");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.calledForm == "contentFolder");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.calledForm == "class");
        } }, dependencies: [i9.NgIf, i9.NgStyle, i7.ɵNgNoValidate, i7.DefaultValueAccessor, i7.CheckboxControlValueAccessor, i7.NgControlStatus, i7.NgControlStatusGroup, i7.RequiredValidator, i7.FormGroupDirective, i7.FormControlName, i7.NgModel, i10.TreeviewComponent, i10.DropdownTreeviewComponent], styles: [".contentFolder[_ngcontent-%COMP%] {\n  position: relative;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: block;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 1rem;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  border: 2px solid #8F008A;\n  //border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n\ndiv.ngx-treeview[_ngcontent-%COMP%] {\n  height: 1em;\n}\ndiv.ngx-treeview[_ngcontent-%COMP%] {\n  position: absolute;\n  //max-height: calc(100% - 6px);\n  //text-overflow: ellipsis;\n}\n\n//.hoverText[_ngcontent-%COMP%]{\n//  label:hover{\n//    transform: scaleX(1);\n//    transform-origin: bottom left;\n//    border-bottom: 2px solid #8F008A;\n//  }\n//}\n\n.hover-underline-animation[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  //color: #0087ca;\n}\n\n.hover-underline-animation[_ngcontent-%COMP%]:after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  transform: scaleX(0);\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: #0087ca;\n  transform-origin: bottom right;\n  transition: transform 0.25s ease-out;\n}\n\n.hover-underline-animation[_ngcontent-%COMP%]:hover {\n  //padding-left: 3px;\n  //color: #8F008A;\n  //transform: transform 0.5s ease-out;\n  //transform-origin: bottom left;\n}\n//.form-check[_ngcontent-%COMP%] {\n//  align-items: start !important;\n//  justify-content: start !important;\n//}\n//.form-inline[_ngcontent-%COMP%] {\n//  align-items: start !important;\n//}\n//.card[_ngcontent-%COMP%]{\n//  flex-direction: unset !important;\n//}\n//.bg_color[_ngcontent-%COMP%] {\n//  background-color: rgba(173, 165, 165, 0.85);\n//}\n//.fa-caret-right[_ngcontent-%COMP%]:before {\n//  padding-left: 8px !important;\n//}\n//.fa-caret-down[_ngcontent-%COMP%]:before{\n//  padding-left: 8px !important;\n//}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeviewContentfolderComponent, [{
        type: Component,
        args: [{ selector: 'app-treeview-contentfolder', providers: [
                    { provide: TreeviewEventParser, useClass: OrderDownlineTreeviewEventParser },
                    { provide: TreeviewConfig, useClass: ProductTreeviewConfig },
                    {
                        provide: TreeviewI18n, useValue: Object.assign(new DefaultTreeviewI18n(), {
                            getFilterPlaceholder() {
                                return 'Search Content Folder';
                            }
                        })
                    }
                ], template: "<div class=\"d-flex align-items-center\" *ngIf=\"calledForm != 'contentFolder' && calledForm != 'class'\">\n    <div class=\"{{manageContentFolder ? 'col-lg-10 col-sm-10' : 'col-lg-12 col-sm-12'}} form-group mb-0\"\n         [title]=\"selectedBacthName.toString()\">\n        <ngx-dropdown-treeview [items]=\"items\" [config]=\"configTree\" [itemTemplate]=\"itemTemplate\"\n                               (selectedChange)=\"onSelectedChange($event)\" [buttonClass]=\"buttonClass\">\n        </ngx-dropdown-treeview>\n    </div>\n    <div class=\"col-{{calledForm == 'class' || calledForm == 'contentLibrary' || calledForm == 'confirmPopUp'\n        ? '1' : '2'}} pl-1\" *ngIf=\"(calledForm != 'class' && manageContentFolder) || (calledForm == 'class' && manageContentFolder && !classContentFolder)\">\n        <i class=\"fas fa-folder-plus color-primary fa-2x cursor treeview\" aria-hidden=\"true\" title=\"Add Parent Folder\"\n           (click)=\"addItem('0', 'parent', 'add')\"></i>\n    </div>\n</div>\n\n<div *ngIf=\"calledForm == 'contentFolder'\">\n    <div id=\"custom-pdf-loader-editor mb-5\" *ngIf=\"showLoader\" class=\"d-flex justify-content-center\">\n        <img src=\"assets/images/pre-loader/loader-01.svg\" alt=\"\">\n    </div>\n\n    <div class=\"mt-5 w-100\" *ngIf=\"showLoader\">\n        <div class=\"row d-flex justify-content-center list-card mt-5\">\n            <div class=\"col-4\">\n                <button class=\"nodataList\">No Data Available!</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row pl-4 pr-0\">\n        <div *ngIf=\"!showLoader\" class=\"{{manageContentFolder ? 'col-lg-11 col-sm-11' : 'col-lg-12 col-sm-12'}} d-inline-block form-group mb-0 contentFolder\">\n            <ngx-treeview [items]=\"items\" [config]=\"ContentFolderConfigTree\" [itemTemplate]=\"itemTemplate\">\n            </ngx-treeview>\n        </div>\n        <div class=\"pl-4 pt-3 col-1\" *ngIf=\"manageContentFolder && !showLoader\">\n            <i class=\"fas fa-folder-plus color-primary fa-2x cursor treeview\" aria-hidden=\"true\" title=\"Add Parent Folder\"\n               (click)=\"addItem('0', 'parent', 'add')\"></i>\n        </div>\n    </div>\n</div>\n\n<div class=\"d-flex align-items-center\" *ngIf=\"calledForm == 'class'\">\n    <div class=\"col-lg-12 col-sm-12 form-group mb-0\" [title]=\"selectedBacthName.toString()\">\n        <ngx-dropdown-treeview [items]=\"items\" [config]=\"classConfigTree\" [itemTemplate]=\"itemTemplate\"\n                               (selectedChange)=\"onSelectedChange($event)\" [buttonClass]=\"buttonClass\">\n        </ngx-dropdown-treeview>\n    </div>\n</div>\n\n<ng-template #addBranch let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"col-md-11 px-2 py-1 font-weight-bold mb-0\">{{calledValue == 'add' ? 'Add' : 'Rename'}} Folder</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <form [formGroup]=\"branchForm\" class=\"needs-validation user-add\" novalida>\n                    <div class=\"form-group row\">\n                        <label for=\"validationCustom1\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                            Content Folder Name </label>\n                        <div class=\"col-xl-8 col-md-7\">\n                            <input class=\"form-control\" formControlName=\"batchname\" id=\"validat1ionCustom1\"\n                                   type=\"text\" placeholder=\"Enter Content Folder Name\" required=\"\" (input)=\"formSubmitted = true\">\n                            <em *ngIf=\"!branchForm.get('batchname').valid && !formSubmitted\"\n                                class=\"error\">Enter Content Folder Name</em>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer pull-right\">\n        <button type=\"button\" (click)=\"close()\" class=\"btn cancel\">Cancel\n        </button>\n        <button type=\"button\" (click)=\"addBranchDetails()\" class=\"btn btn-primary\">{{calledValue == 'add' ? 'Add' : 'Update'}}\n        </button>\n    </div>\n</ng-template>\n\n\n<ng-template #deleteBatch let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"col-md-11 px-2 font-weight-bold mb-0\">Delete Folder</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12 px-4\">\n                <h5>Are you sure want to delete the <span class=\"color-primary font-weight-bold\">{{selectedBatchForDelete.text}}</span> folder ?</h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer pull-right\">\n        <button type=\"button\" (click)=\"close()\" class=\"btn cancel\">No\n        </button>\n        <button type=\"button\" (click)=\"deleteBatchService()\" class=\"btn btn-danger\">Yes\n        </button>\n    </div>\n</ng-template>\n\n\n<ng-template #itemTemplate let-item=\"item\" let-onCollapseExpand=\"onCollapseExpand\"\n             let-onCheckedChange=\"onCheckedChange\">\n    <div class=\"form-inline row-item py-1\" [title]=\"item.text\" *ngIf=\"item.value.split('/')[1] == 'folder'\">\n        <i [hidden]=\"checkForFolderType(item)\" (click)=\"onCollapseExpand()\" aria-hidden=\"true\" class=\"fa mr-2 cursor\"\n           [class.fa-caret-right]=\"item.collapsed\" [class.fa-caret-down]=\"!item.collapsed\"></i>\n        <div class=\"form-check\" [ngStyle]=\"{'margin-left': !item.children ? '14px' : '0'}\">\n            <input *ngIf=\"calledForm != 'contentFolder'\" [disabled]=\"classContentFolder\"\n                    type=\"checkbox\" class=\"form-check-input cursor\" (change)=\"selectCheckBox(item, $event)\"\n                   [(ngModel)]=\"item.checked\" (ngModelChange)=\"onCheckedChange()\"\n                   [disabled]=\"item.disabled\" [indeterminate]=\"item.indeterminate\" [checked]=\"item.checked\"/>\n            <label class=\"form-check-label\"\n                   [ngStyle]=\"{'color' : calledForm == 'contentFolder' ? '#8F008A' : (calledForm == 'contentFolderCheck' ? '#8F008A' : '')}\">{{item.text}}</label>\n            <label class=\"form-check-label ml-2 cursor\" *ngIf=\"calledForm != 'contentFolderCheck'\">\n                <i class=\"fas fa-folder-plus color-primary color-primary\" aria-hidden=\"true\" title=\"Add\" *ngIf=\"manageContentFolder\"\n                   (click)=\"addItem(item, 'child', 'add')\"></i>\n                <i class=\"fa fa-pencil ml-2 color-primary\" aria-hidden=\"true\" title=\"Rename Content Folder Name\" *ngIf=\"manageContentFolder && item.value.split('/')[3] == '1'\"\n                   (click)=\"addItem(item, 'parent', 'edit')\"></i>\n                <i class=\"fa fa-trash ml-2 color-red\" aria-hidden=\"true\" title=\"Delete Content Folder\" *ngIf=\"item.value.split('/')[3] == '1' && calledForm == 'contentFolder'\"\n                   (click)=\"batchDeletePopUp(item)\"></i>\n            </label>\n        </div>\n    </div>\n\n    <div class=\"form-inline row-item py-1\" [title]=\"item.text\" *ngIf=\"(item.value.split('/')[1] == 'file' && checkSubjectWithTeacherSubject(item.value.split('/')) && (calledForm == 'contentFolder' || calledForm == 'class'))\">\n        <i [hidden]=\"!item.children\" (click)=\"onCollapseExpand()\" aria-hidden=\"true\" class=\"fa mr-2 cursor\"\n           [class.fa-caret-right]=\"item.collapsed\" [class.fa-caret-down]=\"!item.collapsed\"></i>\n        <div class=\"form-check hoverText\" [ngStyle]=\"{'margin-left': !item.children ? '14px' : '0'}\">\n            <label class=\"form-check-label cursor mr-2 hover-underline-animation\" style=\"font-size: 14px; font-style: italic\"\n                   (click)=\"listDetails(item)\">{{item.text}}</label>\n\n            <span style=\"font-size: 8px\"  *ngIf=\"item.value.split('/')[2] == '1'\" class=\"badge badge-green font-weight-bold align-self-center\">Resource</span>\n            <span style=\"font-size: 8px\" *ngIf=\"item.value.split('/')[2] == '2'\" class=\"badge badge-warning font-weight-bold align-self-center\">Assignment</span>\n            <span style=\"font-size: 8px\" *ngIf=\"item.value.split('/')[2] == '3'\" class=\"badge badge-primary font-weight-bold align-self-center\">Assessment</span>\n            <label class=\"form-check-label ml-2\">\n                <i *ngIf=\"item.value.split('/')[3] == '1'\" class=\"fa fa-file-pdf-o color-primary\" aria-hidden=\"true\"\n                    title=\"{{item.value.split('/')[2] == '1' ? 'Resource' : item.value.split('/')[2] == '2' ? 'Assignment' : 'Assesment'}} PDF\"></i>\n                <i *ngIf=\"item.value.split('/')[3] == '3'\" class=\"fa fa-lightbulb-o color-primary\" aria-hidden=\"true\"\n                   title=\"{{item.value.split('/')[2] == '1' ? 'Resource' : item.value.split('/')[2] == '2' ? 'Assignment' : 'Assesment'}} Text\"></i>\n            </label>\n        </div>\n    </div>\n</ng-template>\n", styles: ["\n.contentFolder {\n  position: relative;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: block;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 1rem;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  border: 2px solid #8F008A;\n  //border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n\ndiv.ngx-treeview {\n  height: 1em;\n}\ndiv.ngx-treeview {\n  position: absolute;\n  //max-height: calc(100% - 6px);\n  //text-overflow: ellipsis;\n}\n\n//.hoverText{\n//  label:hover{\n//    transform: scaleX(1);\n//    transform-origin: bottom left;\n//    border-bottom: 2px solid #8F008A;\n//  }\n//}\n\n.hover-underline-animation {\n  display: inline-block;\n  position: relative;\n  //color: #0087ca;\n}\n\n.hover-underline-animation:after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  transform: scaleX(0);\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: #0087ca;\n  transform-origin: bottom right;\n  transition: transform 0.25s ease-out;\n}\n\n.hover-underline-animation:hover {\n  //padding-left: 3px;\n  //color: #8F008A;\n  //transform: transform 0.5s ease-out;\n  //transform-origin: bottom left;\n}\n//.form-check {\n//  align-items: start !important;\n//  justify-content: start !important;\n//}\n//.form-inline {\n//  align-items: start !important;\n//}\n//.card{\n//  flex-direction: unset !important;\n//}\n//.bg_color {\n//  background-color: rgba(173, 165, 165, 0.85);\n//}\n//.fa-caret-right:before {\n//  padding-left: 8px !important;\n//}\n//.fa-caret-down:before{\n//  padding-left: 8px !important;\n//}\n\n"] }]
    }], () => [{ type: i1.ClassroomService }, { type: i2.NgbModal }, { type: i3.ToastrService }, { type: i4.AuthService }, { type: i5.CommonDataService }, { type: i6.ValidationService }, { type: i7.FormBuilder }, { type: i8.Router }], { type: [{
            type: Input
        }], selectedbatch: [{
            type: Input
        }], filterType: [{
            type: Input
        }], calledForm: [{
            type: Input
        }], treeviewHeight: [{
            type: Input
        }], schoolId: [{
            type: Input
        }], class_id: [{
            type: Input
        }], content_id: [{
            type: Input
        }], addBranchTemp: [{
            type: ViewChild,
            args: ['addBranch']
        }], previewContentFolder: [{
            type: ViewChild,
            args: ['preview']
        }], deleteBatch: [{
            type: ViewChild,
            args: ['deleteBatch']
        }], child: [{
            type: ViewChild,
            args: [DropdownTreeviewComponent, { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TreeviewContentfolderComponent, { className: "TreeviewContentfolderComponent" }); })();
//# sourceMappingURL=treeview-contentfolder.component.js.map