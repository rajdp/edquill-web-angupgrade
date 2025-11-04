import { Component, HostListener, inject, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { EnvironmentService } from '../../../environment.service';
import { CreatorService } from '../../../shared/service/creator.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "../../../shared/service/nav.service";
import * as i3 from "@angular/forms";
import * as i4 from "../../../shared/service/auth.service";
import * as i5 from "../../../shared/service/common-data.service";
import * as i6 from "@angular/router";
import * as i7 from "ngx-toastr";
import * as i8 from "../../../shared/service/newsubject.service";
import * as i9 from "../../../shared/service/classroom.service";
import * as i10 from "../../../shared/service/validation.service";
import * as i11 from "@angular/common";
import * as i12 from "../../corporateschool/emptyschool/emptyschool.component";
import * as i13 from "../../auth/confirm-content-assign/confirm-content-assign.component";
import * as i14 from "../../repository/preview/preview.component";
import * as i15 from "@angular/material/tree";
import * as i16 from "@angular/material/button";
import * as i17 from "@angular/material/checkbox";
const _c0 = ["assignContent"];
const _c1 = ["deleteBatch"];
const _c2 = ["addBranch"];
const _c3 = ["viewContent"];
function ListClassroomComponent_div_0_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵlistener("click", function ListClassroomComponent_div_0_button_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.multiAssignContent()); });
    i0.ɵɵelement(1, "i", 36);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Assign Selected (", ctx_r1.multiContent.length, ") ");
} }
function ListClassroomComponent_div_0_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 37);
    i0.ɵɵlistener("click", function ListClassroomComponent_div_0_button_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addItem("0", "parent", "add")); });
    i0.ɵɵelement(1, "i", 38);
    i0.ɵɵtext(2, " Add Folder ");
    i0.ɵɵelementEnd();
} }
function ListClassroomComponent_div_0_mat_nested_tree_node_37_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 47);
    i0.ɵɵlistener("click", function ListClassroomComponent_div_0_mat_nested_tree_node_37_button_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r6); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelement(1, "i", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("aria-label", ctx_r1.treeControl.isExpanded(node_r7) ? "Collapse folder " + node_r7.text : "Expand folder " + node_r7.text);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.treeControl.isExpanded(node_r7) ? "fa-caret-down" : "fa-caret-right");
} }
function ListClassroomComponent_div_0_mat_nested_tree_node_37_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 49);
} }
function ListClassroomComponent_div_0_mat_nested_tree_node_37_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 50);
    i0.ɵɵlistener("click", function ListClassroomComponent_div_0_mat_nested_tree_node_37_button_8_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r8); const node_r7 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addItem(node_r7, "child", "add", $event)); });
    i0.ɵɵelement(1, "i", 51);
    i0.ɵɵelementEnd();
} }
function ListClassroomComponent_div_0_mat_nested_tree_node_37_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 50);
    i0.ɵɵlistener("click", function ListClassroomComponent_div_0_mat_nested_tree_node_37_button_9_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r9); const node_r7 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addItem(node_r7, "parent", "edit", $event)); });
    i0.ɵɵelement(1, "i", 52);
    i0.ɵɵelementEnd();
} }
function ListClassroomComponent_div_0_mat_nested_tree_node_37_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 50);
    i0.ɵɵlistener("click", function ListClassroomComponent_div_0_mat_nested_tree_node_37_button_10_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r10); const node_r7 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.batchDeletePopUp(node_r7, $event)); });
    i0.ɵɵelement(1, "i", 53);
    i0.ɵɵelementEnd();
} }
function ListClassroomComponent_div_0_mat_nested_tree_node_37_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54);
    i0.ɵɵelementContainer(1, 55);
    i0.ɵɵelementEnd();
} }
function ListClassroomComponent_div_0_mat_nested_tree_node_37_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-nested-tree-node")(1, "div", 39);
    i0.ɵɵtemplate(2, ListClassroomComponent_div_0_mat_nested_tree_node_37_button_2_Template, 2, 2, "button", 40)(3, ListClassroomComponent_div_0_mat_nested_tree_node_37_span_3_Template, 1, 0, "span", 41);
    i0.ɵɵelementStart(4, "mat-checkbox", 42);
    i0.ɵɵlistener("click", function ListClassroomComponent_div_0_mat_nested_tree_node_37_Template_mat_checkbox_click_4_listener($event) { i0.ɵɵrestoreView(_r5); return i0.ɵɵresetView($event.stopPropagation()); })("change", function ListClassroomComponent_div_0_mat_nested_tree_node_37_Template_mat_checkbox_change_4_listener($event) { const node_r7 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onFolderSelectionChange(node_r7, $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 43);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 44);
    i0.ɵɵtemplate(8, ListClassroomComponent_div_0_mat_nested_tree_node_37_button_8_Template, 2, 0, "button", 45)(9, ListClassroomComponent_div_0_mat_nested_tree_node_37_button_9_Template, 2, 0, "button", 45)(10, ListClassroomComponent_div_0_mat_nested_tree_node_37_button_10_Template, 2, 0, "button", 45);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, ListClassroomComponent_div_0_mat_nested_tree_node_37_div_11_Template, 2, 0, "div", 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r7 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.hasChildren(node_r7));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.hasChildren(node_r7));
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", node_r7.checked)("indeterminate", node_r7.indeterminate)("disabled", !ctx_r1.hasChildren(node_r7));
    i0.ɵɵadvance();
    i0.ɵɵproperty("title", node_r7.text);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(node_r7.text);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.manageContentFolder);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageContentFolder && node_r7.value.split("/")[3] == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", node_r7.value.split("/")[3] == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.treeControl.isExpanded(node_r7));
} }
function ListClassroomComponent_div_0_mat_tree_node_38_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 68);
} }
function ListClassroomComponent_div_0_mat_tree_node_38_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 69);
} }
function ListClassroomComponent_div_0_mat_tree_node_38_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 70);
} }
function ListClassroomComponent_div_0_mat_tree_node_38_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 71);
    i0.ɵɵtext(1, "PDF");
    i0.ɵɵelementEnd();
} }
function ListClassroomComponent_div_0_mat_tree_node_38_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 72);
    i0.ɵɵtext(1, "TEXT");
    i0.ɵɵelementEnd();
} }
function ListClassroomComponent_div_0_mat_tree_node_38_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function ListClassroomComponent_div_0_mat_tree_node_38_button_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const node_r12 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.previewOrEditContent(node_r12, "edit")); });
    i0.ɵɵelement(1, "i", 52);
    i0.ɵɵelementEnd();
} }
function ListClassroomComponent_div_0_mat_tree_node_38_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tree-node", 56)(1, "div", 57)(2, "mat-checkbox", 42);
    i0.ɵɵlistener("click", function ListClassroomComponent_div_0_mat_tree_node_38_Template_mat_checkbox_click_2_listener($event) { i0.ɵɵrestoreView(_r11); return i0.ɵɵresetView($event.stopPropagation()); })("change", function ListClassroomComponent_div_0_mat_tree_node_38_Template_mat_checkbox_change_2_listener($event) { const node_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onFileSelectionChange(node_r12, $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 58);
    i0.ɵɵtemplate(4, ListClassroomComponent_div_0_mat_tree_node_38_i_4_Template, 1, 0, "i", 59)(5, ListClassroomComponent_div_0_mat_tree_node_38_i_5_Template, 1, 0, "i", 60)(6, ListClassroomComponent_div_0_mat_tree_node_38_i_6_Template, 1, 0, "i", 61);
    i0.ɵɵelementStart(7, "button", 62);
    i0.ɵɵlistener("click", function ListClassroomComponent_div_0_mat_tree_node_38_Template_button_click_7_listener() { const node_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.previewOrEditContent(node_r12, "preview")); });
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, ListClassroomComponent_div_0_mat_tree_node_38_span_9_Template, 2, 0, "span", 63)(10, ListClassroomComponent_div_0_mat_tree_node_38_span_10_Template, 2, 0, "span", 64);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 44)(12, "button", 65);
    i0.ɵɵlistener("click", function ListClassroomComponent_div_0_mat_tree_node_38_Template_button_click_12_listener() { const node_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.previewOrEditContent(node_r12, "preview")); });
    i0.ɵɵelement(13, "i", 66);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, ListClassroomComponent_div_0_mat_tree_node_38_button_14_Template, 2, 0, "button", 67);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const node_r12 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", node_r12.checked)("indeterminate", node_r12.indeterminate)("disabled", node_r12.disabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("title", node_r12.text);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (node_r12.value == null ? null : node_r12.value.split("/")[2]) == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (node_r12.value == null ? null : node_r12.value.split("/")[2]) == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (node_r12.value == null ? null : node_r12.value.split("/")[2]) == "3");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", node_r12.text, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (node_r12.value == null ? null : node_r12.value.split("/")[3]) == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (node_r12.value == null ? null : node_r12.value.split("/")[3]) == "3");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.roleId == "4" && ctx_r1.manageContentFolder && node_r12.edit_status == "1" || ctx_r1.roleId == "6" && node_r12.edit_status != "0" || ctx_r1.roleId == "2" && !(ctx_r1.schoolId != node_r12.school_id && node_r12.access == "3") && node_r12.access != "4");
} }
function ListClassroomComponent_div_0_div_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 74)(1, "button", 75);
    i0.ɵɵtext(2, "No Data Available!");
    i0.ɵɵelementEnd()();
} }
function ListClassroomComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "ul", 9)(4, "li", 10)(5, "button", 11);
    i0.ɵɵlistener("click", function ListClassroomComponent_div_0_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.switchTab("library")); });
    i0.ɵɵelement(6, "i", 12);
    i0.ɵɵtext(7, " Content Library ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "li", 10)(9, "button", 13);
    i0.ɵɵlistener("click", function ListClassroomComponent_div_0_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.switchTab("folder")); });
    i0.ɵɵelement(10, "i", 14);
    i0.ɵɵtext(11, " Content Folder ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 15);
    i0.ɵɵtemplate(13, ListClassroomComponent_div_0_button_13_Template, 3, 1, "button", 16)(14, ListClassroomComponent_div_0_button_14_Template, 3, 0, "button", 17);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "div", 18)(16, "div", 19)(17, "div", 20)(18, "div", 21)(19, "input", 22);
    i0.ɵɵlistener("input", function ListClassroomComponent_div_0_Template_input_input_19_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSearch($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 23)(21, "i", 24);
    i0.ɵɵlistener("click", function ListClassroomComponent_div_0_Template_i_click_21_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.expandOrCollapseAll()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 25)(23, "button", 26);
    i0.ɵɵtext(24);
    i0.ɵɵelement(25, "i", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 28)(27, "a", 29);
    i0.ɵɵlistener("click", function ListClassroomComponent_div_0_Template_a_click_27_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.filterType = "Latest"; return i0.ɵɵresetView(ctx_r1.getBranchList()); });
    i0.ɵɵtext(28, "Latest");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "a", 29);
    i0.ɵɵlistener("click", function ListClassroomComponent_div_0_Template_a_click_29_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.filterType = "Oldest"; return i0.ɵɵresetView(ctx_r1.getBranchList()); });
    i0.ɵɵtext(30, "Oldest");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "a", 29);
    i0.ɵɵlistener("click", function ListClassroomComponent_div_0_Template_a_click_31_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.filterType = "A - Z"; return i0.ɵɵresetView(ctx_r1.getBranchList()); });
    i0.ɵɵtext(32, "A - Z");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "a", 29);
    i0.ɵɵlistener("click", function ListClassroomComponent_div_0_Template_a_click_33_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.filterType = "Z - A"; return i0.ɵɵresetView(ctx_r1.getBranchList()); });
    i0.ɵɵtext(34, "Z - A");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(35, "div", 30)(36, "mat-tree", 31);
    i0.ɵɵtemplate(37, ListClassroomComponent_div_0_mat_nested_tree_node_37_Template, 12, 11, "mat-nested-tree-node", 32)(38, ListClassroomComponent_div_0_mat_tree_node_38_Template, 15, 11, "mat-tree-node", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(39, ListClassroomComponent_div_0_div_39_Template, 3, 0, "div", 34);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("active", ctx_r1.activeTab === "library");
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("active", ctx_r1.activeTab === "folder");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.multiContent.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.manageContentFolder);
    i0.ɵɵadvance(7);
    i0.ɵɵclassMapInterpolate1("fas fa-", ctx_r1.expandAll ? "compress" : "expand", "-alt color-primary main_assign btn cursor mr-2");
    i0.ɵɵproperty("title", ctx_r1.expandAll ? "Collapse All" : "Expand All");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.filterType, " ");
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("dataSource", ctx_r1.dataSource)("treeControl", ctx_r1.treeControl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matTreeNodeDefWhen", ctx_r1.folderNodePredicate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matTreeNodeDefWhen", ctx_r1.fileNodePredicate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.branchListData.length === 0);
} }
function ListClassroomComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-emptyschool");
    i0.ɵɵelementEnd();
} }
function ListClassroomComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-confirm-content-assign", 76);
    i0.ɵɵlistener("closePopUp", function ListClassroomComponent_ng_template_2_Template_app_confirm_content_assign_closePopUp_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("contentDetails", ctx_r1.contentDetails)("classData", ctx_r1.classDetails)("multiContentId", ctx_r1.multiContent)("isEssay", ctx_r1.isEssay);
} }
function ListClassroomComponent_ng_template_4_em_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 90);
    i0.ɵɵtext(1, "Enter Content Folder Name");
    i0.ɵɵelementEnd();
} }
function ListClassroomComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 77)(1, "h4", 78);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 79)(4, "div", 20)(5, "div", 80)(6, "form", 81)(7, "div", 82)(8, "label", 83)(9, "span");
    i0.ɵɵtext(10, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, " Content Folder Name ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 84)(13, "input", 85);
    i0.ɵɵlistener("input", function ListClassroomComponent_ng_template_4_Template_input_input_13_listener() { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.formSubmitted = true); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, ListClassroomComponent_ng_template_4_em_14_Template, 2, 0, "em", 86);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(15, "div", 87)(16, "button", 88);
    i0.ɵɵlistener("click", function ListClassroomComponent_ng_template_4_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close("")); });
    i0.ɵɵtext(17, "Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 89);
    i0.ɵɵlistener("click", function ListClassroomComponent_ng_template_4_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addBranchDetails()); });
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
function ListClassroomComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 77)(1, "h4", 91);
    i0.ɵɵtext(2, "Delete Folder");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 79)(4, "div", 20)(5, "div", 92)(6, "h5");
    i0.ɵɵtext(7, "Are you sure want to delete the ");
    i0.ɵɵelementStart(8, "span", 93);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " folder ?");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(11, "div", 87)(12, "button", 88);
    i0.ɵɵlistener("click", function ListClassroomComponent_ng_template_6_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close("")); });
    i0.ɵɵtext(13, "No ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 94);
    i0.ɵɵlistener("click", function ListClassroomComponent_ng_template_6_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deleteBatchService()); });
    i0.ɵɵtext(15, "Yes ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.selectedBatchForDelete.text);
} }
function ListClassroomComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 95)(1, "h4", 96);
    i0.ɵɵtext(2, "Preview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 97);
    i0.ɵɵlistener("click", function ListClassroomComponent_ng_template_8_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePopUp()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 98)(5, "app-preview", 99);
    i0.ɵɵlistener("closePopUp", function ListClassroomComponent_ng_template_8_Template_app_preview_closePopUp_5_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePopUp()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("calledBy", "popUp")("contentData", ctx_r1.contentData);
} }
export class ListClassroomComponent {
    constructor(config, navService, formBuilder, auth, commondata, modalService, route, toastr, newSubject, classroom, validationService) {
        this.config = config;
        this.navService = navService;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.commondata = commondata;
        this.modalService = modalService;
        this.route = route;
        this.toastr = toastr;
        this.newSubject = newSubject;
        this.classroom = classroom;
        this.validationService = validationService;
        this.manageContentFolder = true;
        this.filterType = 'Latest';
        this.contentDetails = {};
        this.multiContent = [];
        this.isEssay = '0';
        this.formSubmitted = true;
        this.calledValue = '';
        this.treeControl = new NestedTreeControl((node) => node.children || []);
        this.dataSource = new MatTreeNestedDataSource();
        this.folderNodePredicate = (_, node) => this.getNodeType(node) !== 'file';
        this.fileNodePredicate = (_, node) => this.getNodeType(node) === 'file';
        this.expandAll = false;
        this.fullBranchListData = [];
        this.contentData = {};
        this.schoolId = '';
        this.roleId = '';
        // Tab management
        this.activeTab = 'folder';
        this.showLoader = true;
        this.branchListData = [];
        this.env = inject(EnvironmentService);
        this.creatorService = inject(CreatorService);
        this.classDetails = [];
        config.backdrop = 'static';
        config.keyboard = false;
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        this.classDetails = this.auth.getSessionData('content_assign') ? JSON.parse(this.auth.getSessionData('card-data')) : [];
        this.auth.setSessionData('resourceAccess', false);
        this.auth.removeSessionData('updatedStudent');
        this.auth.removeSessionData('readonly_startdate');
        if (this.schoolStatus.length != 0) {
            this.newSubject.schoolChange.subscribe(params => {
                if (params != '') {
                    if (this.route.url.includes('list-classroom')) {
                        this.init();
                    }
                }
                else {
                    this.init();
                }
            });
        }
        this.allowSelect = false;
        this.newSubject.allowSchoolChange(this.allowSelect);
        this.navService.MENUITEMS.forEach((items) => {
            if (items.title == 'Content Library') {
                this.newSubject.highListSideBarMenu(items);
            }
        });
    }
    ngOnInit() {
        this.auth.removeSessionData('backOption');
        this.getScreenHeight = window.innerHeight;
        this.resetForm();
    }
    switchTab(tab) {
        if (this.activeTab !== tab) {
            if (tab === 'library') {
                // Navigate to Content Library view
                this.route.navigate(['/repository/content-home']);
            }
            else {
                // Content Folder - stay on current page
                this.activeTab = tab;
            }
        }
    }
    onResize($event) {
        this.getScreenHeight = window.innerHeight;
    }
    init() {
        this.roleId = this.auth.getRoleId();
        if (this.auth.getRoleId() == '4') {
            this.teacherschool = JSON.parse(this.auth.getSessionData('rista_data1'));
            // this.addContentFolder = this.teacherschool.permissions[5].permission[0].status == 1;
            // this.classContentFolder = this.teacherschool.permissions[6].permission[0].status == 0;
            // this.editContentFolder = this.teacherschool.permissions[5].permission[2].status == 1;
            // this.editContent = this.teacherschool.permissions[4].permission[1].status == 1;
        }
        else {
            // this.addContentFolder = true;
            // this.classContentFolder = false;
            // this.editContentFolder = true;
            // this.editContent = true;
        }
        this.manageContentFolder = this.auth.manageOwnContent;
        this.schoolId = this.auth.getSessionData('school_id');
        this.getBranchList();
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
            corporate_id: this.auth.getRoleId() == '2' || this.auth.getRoleId() == '4' ? '0' : this.auth.getSessionData('corporate_id'),
            class_id: '',
        };
        this.classroom.batchList(data).subscribe((successData) => {
            this.branchListSuccess(successData);
        }, (error) => {
            console.error(error, 'error');
            this.commondata.showLoader(false);
        });
    }
    branchListSuccess(successData) {
        if (!successData.IsSuccess) {
            return;
        }
        this.commondata.showLoader(false);
        this.showLoader = false;
        const responseNodes = (successData.ResponseObject || []);
        this.fullBranchListData = this.cloneNodes(responseNodes);
        this.applyTreeData(this.cloneNodes(responseNodes));
    }
    resetForm() {
        this.branchForm = this.formBuilder.group({
            batchname: ['', Validators.required]
        });
    }
    addItem(item, type, typeOfFunction, event) {
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
        this.modalRef = this.modalService.open(this.addBranchTemp, { size: 'lg', backdrop: 'static' });
        if (event) {
            event.stopPropagation();
        }
    }
    applyTreeData(data) {
        this.branchListData = data || [];
        this.initializeNodes(this.branchListData, null);
        this.dataSource.data = this.branchListData;
        if (this.expandAll) {
            this.treeControl.expandAll();
        }
        else {
            this.treeControl.collapseAll();
        }
    }
    initializeNodes(nodes, parent) {
        nodes.forEach((node) => {
            node.parent = parent;
            node.checked = false;
            node.indeterminate = false;
            if (this.hasChildren(node)) {
                this.initializeNodes(node.children, node);
            }
        });
    }
    cloneNodes(nodes = []) {
        return nodes.map((node) => ({
            ...node,
            parent: null,
            children: node.children ? this.cloneNodes(node.children) : []
        }));
    }
    hasChildren(node) {
        return Array.isArray(node.children) && node.children.length > 0;
    }
    onFolderSelectionChange(node, change) {
        this.propagateSelectionToChildren(node, change.checked);
        this.updateParentSelection(node.parent ?? null);
    }
    onFileSelectionChange(node, change) {
        node.checked = change.checked;
        node.indeterminate = false;
        this.updateParentSelection(node.parent ?? null);
    }
    propagateSelectionToChildren(node, checked) {
        node.checked = checked;
        node.indeterminate = false;
        if (this.hasChildren(node)) {
            node.children.forEach((child) => this.propagateSelectionToChildren(child, checked));
        }
    }
    updateParentSelection(node) {
        if (!node) {
            return;
        }
        if (!this.hasChildren(node)) {
            node.indeterminate = false;
            this.updateParentSelection(node.parent ?? null);
            return;
        }
        const children = node.children;
        const allChecked = children.every((child) => child.checked);
        const someChecked = children.some((child) => child.checked || child.indeterminate);
        node.checked = allChecked;
        node.indeterminate = !allChecked && someChecked;
        this.updateParentSelection(node.parent ?? null);
    }
    collectSelectedContent(node) {
        if (this.getNodeType(node) === 'file' && node.checked) {
            const valueParts = node.value?.split('/') ?? [];
            this.multiContent.push({
                name: node.text,
                content_id: valueParts[0],
                content_type: node.content_type ?? valueParts[2],
                allow_autograde: node.allow_autograde ?? '',
                without_question: node.without_question ?? '',
                content_format: node.content_format ?? valueParts[3]
            });
        }
        if (this.hasChildren(node)) {
            node.children.forEach((child) => this.collectSelectedContent(child));
        }
    }
    checkSubjectWithTeacherSubject(totalValue) {
        const userDetails = JSON.parse(this.auth.getSessionData('userDetails'));
        const selectedSchool = JSON.parse(this.auth.getSessionData('rista_data1'));
        if (this.auth.getRoleId() == '4' && totalValue[1] == 'file' && selectedSchool?.individual_teacher == 0) {
            if (totalValue.length == 6) {
                const subject = totalValue[5].split(',');
                const assignedSubjects = selectedSchool.subject || [];
                return subject.some(folderSubject => assignedSubjects.includes(folderSubject));
            }
        }
        return true;
    }
    close(event) {
        this.auth.removeSessionData('assignedForm');
        this.modalRef.close();
        if (event) {
            this.multiContent = [];
            this.getBranchList();
        }
    }
    multiAssignContent() {
        this.multiContent = [];
        this.dataSource.data.forEach((node) => this.collectSelectedContent(node));
        this.multiContent = Array.from(new Map(this.multiContent.map((item) => [item.content_id, item])).values());
        if (this.multiContent.length != 0) {
            this.auth.setSessionData('assignedForm', this.auth.getSessionData('content_assign') ?? 'classRoom');
            this.modalRef = this.modalService.open(this.assignContent, { size: 'xl' });
        }
        else {
            this.toastr.error('Please select content to Assign');
        }
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
                this.classroom.classRoomAdd(data).subscribe((successData) => {
                    this.branchSuccess(successData);
                }, (error) => {
                    console.log(error, 'error');
                });
            }
            else {
                this.classroom.classRoomEdit(data).subscribe((successData) => {
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
            // this.totalBatchIds = [];
            // this.newBatchId = successData.batch_id;
            // this.batchDetails = successData.batch_detais[0].children;
            this.showLoader = true;
            // if (this.batchDetails.length != 0) {
            //     this.batchDetails.forEach((items) => {
            //         this.findOpenFolderId(items, successData.batch_detais[0]);
            //     });
            // } else {
            //     this.totalBatchIds = [this.newBatchId];
            // }
            if (this.calledValue == 'add') {
                this.toastr.success('Content Folder Added Successfully');
            }
            else {
                this.toastr.success('Content Folder Updated Successfully');
            }
            this.modalRef.close();
            // console.log(this.totalBatchIds, 'totalBatchIds');
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
    batchDeletePopUp(item, event) {
        this.selectedBatchForDelete = item;
        this.modalRef = this.modalService.open(this.deleteBatch, { size: 'md', backdrop: 'static' });
        if (event) {
            event.stopPropagation();
        }
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
        this.classroom.classRoomDelete(data).subscribe((successData) => {
            this.deleteBranchSuccess(successData);
        }, (error) => {
            console.log(error, 'error');
        });
    }
    deleteBranchSuccess(successData) {
        if (successData.IsSuccess) {
            this.modalRef.close();
            // this.totalBatchIds = [];
            // this.newBatchId = successData.batch_id;
            // this.batchDetails = successData.batch_detais.length != 0 ? successData.batch_detais[0].children : [];
            // this.showLoader = true;
            // if (this.batchDetails.length != 0) {
            //     this.batchDetails.forEach((items) => {
            //         this.findOpenFolderId(items, successData.batch_detais[0]);
            //     });
            // } else {
            //     this.totalBatchIds = [this.newBatchId];
            // }
            setTimeout(() => {
                this.getBranchList();
            }, 2000);
            this.toastr.success('Content Folder Deleted Successfully');
        }
    }
    // expandOrCollapseAll() {
    //     this.expandAll = !this.expandAll;
    //     this.branchListData.forEach((items) => {
    //         setTimeout(() => {
    //             console.log(this.expandAll)
    //             this.updateChildrenValue(items, 'collapsed', this.expandAll);
    //         }, 100);
    //     });
    // }
    // expandOrCollapseAll() {
    //     this.expandAll = !this.expandAll;
    //     let delay = 5; // Initial delay
    //     this.branchListData.forEach((items, index) => {
    //         setTimeout(() => {
    //             console.log(this.expandAll);
    //             this.updateChildrenValue(items, 'collapsed', this.expandAll, '', delay);
    //         }, delay * index); // Increase delay for each item
    //     });
    // }
    //
    //
    // updateChildrenValue(value, key, keyValue, calledFor = '', delay: number = 20) {
    //     setTimeout(() => {
    //         value[key] = key == 'collapsed' ? (calledFor != '' ? keyValue : !keyValue) : keyValue;
    //         if (value.children) {
    //             value.children.forEach((items, index) => {
    //                 const delayChildren: any = delay + 5 * index;
    //                 this.updateChildrenValue(items, key, keyValue, delayChildren);
    //             });
    //         }
    //     }, delay);
    // }
    expandOrCollapseAll() {
        this.expandAll = !this.expandAll;
        if (this.expandAll) {
            this.treeControl.expandAll();
        }
        else {
            this.treeControl.collapseAll();
        }
    }
    onSearch(event) {
        const term = event.target.value.trimStart();
        if (term) {
            const normalizedTerm = term.toLowerCase();
            const filtered = this.filterNestedArray(this.cloneNodes(this.fullBranchListData), normalizedTerm);
            this.applyTreeData(filtered);
        }
        else {
            this.applyTreeData(this.cloneNodes(this.fullBranchListData));
        }
    }
    filterNestedArray(data, searchTerm) {
        const results = [];
        data.forEach((item) => {
            const type = this.getNodeType(item);
            const childrenMatches = this.hasChildren(item) ? this.filterNestedArray(this.cloneNodes(item.children), searchTerm) : [];
            const labelMatches = type !== 'file' && item.text?.toLowerCase().includes(searchTerm);
            if (labelMatches) {
                results.push({
                    ...item,
                    children: item.children ? this.cloneNodes(item.children) : []
                });
            }
            else if (type !== 'file' && childrenMatches.length > 0) {
                results.push({
                    ...item,
                    children: childrenMatches
                });
            }
        });
        return results;
    }
    getNodeType(node) {
        if (!node?.value) {
            return '';
        }
        const segments = node.value.split('/');
        return segments[1] || '';
    }
    previewOrEditContent(event, type) {
        this.selectedContent = event;
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
        this.creatorService.repositoryDetail(data).subscribe((successData) => {
            this.detailsSuccess(successData, data, type);
        }, (error) => {
            console.error(error, 'error_lisDetails');
        });
    }
    detailsSuccess(successData, value, type) {
        this.contentData = successData;
        if (successData.IsSuccess) {
            this.auth.setSessionData('editresources', JSON.stringify(successData.ResponseObject));
            this.auth.setSessionData('assignedForm', 'classRoom');
            this.auth.setSessionData('editContentFromClassRoom', 'classRoom');
            if (type == 'edit') {
                if (value.content_type == '1') {
                    this.route.navigate([value.content_format != '3' ? 'repository/add-resources/edit' : 'content-text-resource/text-resource/edit']);
                }
                else if (value.content_type == '2') {
                    this.auth.setSessionData(value.content_format == 3 ? 'textType' : 'upload-type', 'assignment');
                    this.route.navigate([value.content_format != '3' ? 'repository/create-assessment/edit' : 'content-text-resource/text-assignment/edit']);
                }
                else if (value.content_type == '3') {
                    this.auth.setSessionData(value.content_format == 3 ? 'textType' : 'upload-type', 'assessment');
                    this.route.navigate([value.content_format != '3' ? 'repository/create-assessment/edit' : 'content-text-resource/text-assignment/edit']);
                }
            }
            else {
                if (value.content_type == '1') {
                    this.auth.setSessionData('preview_page', value.content_format != '3' ? 'create_resources' : 'text_resources');
                }
                else if (value.content_type == '2') {
                    this.auth.setSessionData('preview_page', value.content_format != '3' ? 'create_assignments' : 'text_assignments');
                }
                else if (value.content_type == '3') {
                    this.auth.setSessionData('preview_page', value.content_format != '3' ? 'create_assessments' : 'text_assessments');
                }
                this.auth.setSessionData('preview', 'content-folder');
                this.modalRef = this.modalService.open(this.viewContent, { size: 'xl', backdrop: 'static', windowClass: 'classRoom_popup' });
            }
        }
    }
    closePopUp() {
        this.modalRef?.close();
    }
    static { this.ɵfac = function ListClassroomComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListClassroomComponent)(i0.ɵɵdirectiveInject(i1.NgbModalConfig), i0.ɵɵdirectiveInject(i2.NavService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.AuthService), i0.ɵɵdirectiveInject(i5.CommonDataService), i0.ɵɵdirectiveInject(i1.NgbModal), i0.ɵɵdirectiveInject(i6.Router), i0.ɵɵdirectiveInject(i7.ToastrService), i0.ɵɵdirectiveInject(i8.NewsubjectService), i0.ɵɵdirectiveInject(i9.ClassroomService), i0.ɵɵdirectiveInject(i10.ValidationService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListClassroomComponent, selectors: [["app-list-classroom"]], viewQuery: function ListClassroomComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.assignContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteBatch = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addBranchTemp = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewContent = _t.first);
        } }, hostBindings: function ListClassroomComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function ListClassroomComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
        } }, decls: 10, vars: 2, consts: [["assignContent", ""], ["addBranch", ""], ["deleteBatch", ""], ["viewContent", ""], ["class", "container-fluid", 4, "ngIf"], [4, "ngIf"], [1, "container-fluid"], [1, "content-header", "mb-4"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-3"], ["role", "tablist", 1, "nav", "nav-tabs", "content-tabs"], ["role", "presentation", 1, "nav-item"], ["type", "button", "role", "tab", "aria-label", "Content Library view", 1, "nav-link", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-book", "me-2"], ["type", "button", "role", "tab", "aria-label", "Content Folder view", 1, "nav-link", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-folder", "me-2"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2"], ["class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-secondary", 3, "click", 4, "ngIf"], [1, "card"], [1, "card-body", "p-4"], [1, "row"], [1, "col-4"], ["placeholder", "Search Content Folder", 1, "form-control", "align-content-center", 3, "input"], [1, "col-8", "py-2", "d-flex", "justify-content-end"], ["aria-hidden", "true", 3, "click", "title"], [1, "dropdown", "px-2"], [1, "col-12", "float-right", "btn", "btn-outline-primary"], ["aria-hidden", "true", 1, "fa", "fa-sort-desc", "float-right", "pl-2"], [1, "dropdown-content", 2, "z-index", "2", "top", "38px"], [1, "cursor", 3, "click"], [1, "col-md-12", "my-3", "content-tree-container"], [1, "content-tree", 3, "dataSource", "treeControl"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["class", "content-tree__empty", 4, "ngIf"], [1, "btn", "btn-outline-primary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-users", "me-1"], [1, "btn", "btn-outline-secondary", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-folder-plus", "me-1"], ["matTreeNodePadding", "", 1, "content-tree__node", "content-tree__node--folder"], ["mat-icon-button", "", "matTreeNodeToggle", "", "class", "content-tree__toggle", 3, "click", 4, "ngIf"], ["class", "content-tree__toggle-spacer", 4, "ngIf"], [1, "content-tree__checkbox", 3, "click", "change", "checked", "indeterminate", "disabled"], [1, "content-tree__label", 3, "title"], [1, "content-tree__actions"], ["type", "button", "class", "btn btn-link btn-sm p-0", 3, "click", 4, "ngIf"], ["class", "content-tree__children", 4, "ngIf"], ["mat-icon-button", "", "matTreeNodeToggle", "", 1, "content-tree__toggle", 3, "click"], ["aria-hidden", "true", 1, "fa", 3, "ngClass"], [1, "content-tree__toggle-spacer"], ["type", "button", 1, "btn", "btn-link", "btn-sm", "p-0", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-folder-plus", "color-primary"], ["aria-hidden", "true", 1, "fa", "fa-pencil", "color-primary"], ["aria-hidden", "true", 1, "fa", "fa-trash", "color-red"], [1, "content-tree__children"], ["matTreeNodeOutlet", ""], ["matTreeNodePadding", ""], [1, "content-tree__node", "content-tree__node--file"], [1, "content-tree__file-meta", 3, "title"], ["class", "fa fa-book text-info", "aria-hidden", "true", 4, "ngIf"], ["class", "fas fa-tasks text-warning", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-file-text text-primary", "aria-hidden", "true", 4, "ngIf"], ["type", "button", 1, "btn", "btn-link", "p-0", "content-tree__file-link", 3, "click"], ["class", "badge badge-danger ml-2", 4, "ngIf"], ["class", "badge badge-secondary ml-2", 4, "ngIf"], ["type", "button", "title", "Preview Content", 1, "btn", "btn-link", "btn-sm", "p-0", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye", "color-primary"], ["type", "button", "class", "btn btn-link btn-sm p-0", "title", "Edit Content", 3, "click", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-book", "text-info"], ["aria-hidden", "true", 1, "fas", "fa-tasks", "text-warning"], ["aria-hidden", "true", 1, "fa", "fa-file-text", "text-primary"], [1, "badge", "badge-danger", "ml-2"], [1, "badge", "badge-secondary", "ml-2"], ["type", "button", "title", "Edit Content", 1, "btn", "btn-link", "btn-sm", "p-0", 3, "click"], [1, "content-tree__empty"], [1, "nodataList"], [3, "closePopUp", "contentDetails", "classData", "multiContentId", "isEssay"], [1, "modal-header"], [1, "col-md-11", "px-2", "py-1", "font-weight-bold", "mb-0"], [1, "modal-body"], [1, "col-md-12"], ["novalida", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], [1, "col-xl-8", "col-md-7"], ["formControlName", "batchname", "id", "validat1ionCustom1", "type", "text", "placeholder", "Enter Content Folder Name", "required", "", 1, "form-control", 3, "input"], ["class", "error", 4, "ngIf"], [1, "modal-footer", "pull-right"], ["type", "button", 1, "btn", "cancel", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "error"], [1, "col-md-11", "px-2", "font-weight-bold", "mb-0"], [1, "col-md-12", "px-4"], [1, "color-primary", "font-weight-bold"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "modal-header", "align-items-center"], [1, "modal-title"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "modal-body", 2, "background", "#f8f8f9"], [3, "closePopUp", "calledBy", "contentData"]], template: function ListClassroomComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ListClassroomComponent_div_0_Template, 40, 16, "div", 4)(1, ListClassroomComponent_div_1_Template, 2, 0, "div", 5)(2, ListClassroomComponent_ng_template_2_Template, 1, 4, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(4, ListClassroomComponent_ng_template_4_Template, 20, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(6, ListClassroomComponent_ng_template_6_Template, 16, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(8, ListClassroomComponent_ng_template_8_Template, 6, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length == 0);
        } }, dependencies: [i11.NgClass, i11.NgIf, i3.ɵNgNoValidate, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.RequiredValidator, i3.FormGroupDirective, i3.FormControlName, i12.EmptyschoolComponent, i13.ConfirmContentAssignComponent, i14.PreviewComponent, i15.MatNestedTreeNode, i15.MatTreeNodeDef, i15.MatTreeNodePadding, i15.MatTreeNodeToggle, i15.MatTree, i15.MatTreeNode, i15.MatTreeNodeOutlet, i16.MatIconButton, i17.MatCheckbox], styles: ["//[_ngcontent-%COMP%]   Tab[_ngcontent-%COMP%]   navigation[_ngcontent-%COMP%]   styles\n.content-header[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.5rem;\n  padding: 1rem;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12);\n  margin-bottom: 1.5rem;\n}\n\n.content-tabs[_ngcontent-%COMP%] {\n  border: none;\n  margin-bottom: 0;\n  \n  .nav-item {\n    margin-bottom: 0;\n  }\n  \n  .nav-link {\n    border: none;\n    color: #6c757d;\n    padding: 0.75rem 1.5rem;\n    font-weight: 500;\n    background: transparent;\n    border-bottom: 3px solid transparent;\n    transition: all 0.3s ease;\n    \n    i {\n      color: #6c757d;\n      transition: color 0.3s ease;\n    }\n    \n    &:hover {\n      color: #7F3486;\n      background: rgba(127, 52, 134, 0.05);\n      border-bottom-color: rgba(127, 52, 134, 0.3);\n      \n      i {\n        color: #7F3486;\n      }\n    }\n    \n    &.active {\n      color: #7F3486;\n      background: rgba(127, 52, 134, 0.1);\n      border-bottom-color: #7F3486;\n      font-weight: 600;\n      \n      i {\n        color: #7F3486;\n      }\n    }\n  }\n}\n\n.content-tree-container[_ngcontent-%COMP%] {\n  max-height: 65vh;\n  overflow-y: auto;\n  padding-right: 0.25rem;\n}\n\n.content-tree[_ngcontent-%COMP%] {\n  background: #fff;\n\n  .mat-tree-node,\n  .mat-nested-tree-node > .content-tree__node {\n    min-height: 44px;\n  }\n}\n\n.content-tree__node[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-2);\n  padding: 0.35rem 0.5rem;\n  border-radius: var(--radius-md);\n  transition: background var(--transition-fast) ease, color var(--transition-fast) ease;\n\n  &:hover {\n    background: rgba(143, 0, 138, 0.06);\n  }\n}\n\n.content-tree__node--file[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.content-tree__toggle[_ngcontent-%COMP%] {\n  color: var(--neutral-500);\n}\n\n.content-tree__toggle-spacer[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.content-tree__checkbox[_ngcontent-%COMP%] {\n  margin-right: var(--spacing-2);\n}\n\n.content-tree__label[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  font-weight: 600;\n  color: var(--neutral-800);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.content-tree__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-2);\n\n  .btn-link {\n    color: var(--neutral-500);\n    padding: 0;\n\n    &:hover {\n      color: var(--color-primary);\n    }\n  }\n}\n\n.content-tree__children[_ngcontent-%COMP%] {\n  margin-left: 1.75rem;\n  border-left: 1px dashed var(--neutral-200);\n  padding-left: 0.75rem;\n}\n\n.content-tree__file-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-2);\n  flex: 1 1 auto;\n  color: var(--neutral-700);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  .fa,\n  .fas {\n    font-size: 0.95rem;\n  }\n}\n\n.content-tree__file-link[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-primary);\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n  }\n}\n\n.content-tree__empty[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 2rem 0;\n}\n\n.btn[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\n.main_assign[_ngcontent-%COMP%] {\n  border: 1px solid #8f008a;\n  padding: 0.5rem;\n  font-size: 24px;\n}\n\n.cancel[_ngcontent-%COMP%]:hover {\n  i {\n    color: #ffffff !important;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListClassroomComponent, [{
        type: Component,
        args: [{ selector: 'app-list-classroom', template: "<!-- Container-fluid starts-->\n\n<div *ngIf=\"schoolStatus.length != 0\" class=\"container-fluid\">\n    <!-- Tab Navigation and Action Buttons -->\n    <div class=\"content-header mb-4\">\n        <div class=\"d-flex flex-wrap align-items-center justify-content-between gap-3\">\n            <!-- Tabs -->\n            <ul class=\"nav nav-tabs content-tabs\" role=\"tablist\">\n                <li class=\"nav-item\" role=\"presentation\">\n                    <button \n                        class=\"nav-link\" \n                        [class.active]=\"activeTab === 'library'\"\n                        type=\"button\"\n                        role=\"tab\"\n                        (click)=\"switchTab('library')\"\n                        aria-label=\"Content Library view\">\n                        <i class=\"fa fa-book me-2\" aria-hidden=\"true\"></i>\n                        Content Library\n                    </button>\n                </li>\n                <li class=\"nav-item\" role=\"presentation\">\n                    <button \n                        class=\"nav-link\" \n                        [class.active]=\"activeTab === 'folder'\"\n                        type=\"button\"\n                        role=\"tab\"\n                        (click)=\"switchTab('folder')\"\n                        aria-label=\"Content Folder view\">\n                        <i class=\"fa fa-folder me-2\" aria-hidden=\"true\"></i>\n                        Content Folder\n                    </button>\n                </li>\n            </ul>\n            \n            <!-- Action Buttons -->\n            <div class=\"d-flex flex-wrap align-items-center gap-2\">\n                <button class=\"btn btn-outline-primary\" (click)=\"multiAssignContent()\" *ngIf=\"multiContent.length > 0\">\n                    <i class=\"fa fa-users me-1\" aria-hidden=\"true\"></i>\n                    Assign Selected ({{multiContent.length}})\n                </button>\n                <button class=\"btn btn-outline-secondary\" *ngIf=\"manageContentFolder\" (click)=\"addItem('0', 'parent', 'add')\">\n                    <i class=\"fas fa-folder-plus me-1\" aria-hidden=\"true\"></i>\n                    Add Folder\n                </button>\n            </div>\n        </div>\n    </div>\n    \n    <div class=\"card\">\n        <div class=\"card-body p-4\">\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <input (input)=\"onSearch($event)\" class=\"form-control align-content-center\" placeholder=\"Search Content Folder\">\n                </div>\n                <div class=\"col-8 py-2 d-flex justify-content-end\">\n\n                    <i class=\"fas fa-{{expandAll ? 'compress' : 'expand'}}-alt color-primary main_assign btn cursor mr-2\" aria-hidden=\"true\"\n                       [title]=\"expandAll ? 'Collapse All' : 'Expand All'\" (click)=\"expandOrCollapseAll()\"></i>\n\n                    <div class=\"dropdown px-2\">\n\n                        <button class=\"col-12 float-right btn btn-outline-primary\">{{filterType}} <i class=\"fa fa-sort-desc float-right pl-2\" aria-hidden=\"true\"></i></button>\n\n                        <div class=\"dropdown-content\" style=\"z-index: 2; top: 38px;\">\n                            <a (click)=\"filterType = 'Latest';getBranchList()\" class=\"cursor\">Latest</a>\n                            <a (click)=\"filterType = 'Oldest';getBranchList()\" class=\"cursor\">Oldest</a>\n                            <a (click)=\"filterType = 'A - Z';getBranchList()\" class=\"cursor\">A - Z</a>\n                            <a (click)=\"filterType = 'Z - A';getBranchList()\" class=\"cursor\">Z - A</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12 my-3 content-tree-container\">\n                    <mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"content-tree\">\n                        <mat-nested-tree-node *matTreeNodeDef=\"let node; when: folderNodePredicate\">\n                            <div class=\"content-tree__node content-tree__node--folder\" matTreeNodePadding>\n                                <button mat-icon-button matTreeNodeToggle\n                                        *ngIf=\"hasChildren(node)\"\n                                        class=\"content-tree__toggle\"\n                                        (click)=\"$event.stopPropagation()\"\n                                        [attr.aria-label]=\"treeControl.isExpanded(node) ? 'Collapse folder ' + node.text : 'Expand folder ' + node.text\">\n                                    <i class=\"fa\" [ngClass]=\"treeControl.isExpanded(node) ? 'fa-caret-down' : 'fa-caret-right'\" aria-hidden=\"true\"></i>\n                                </button>\n                                <span class=\"content-tree__toggle-spacer\" *ngIf=\"!hasChildren(node)\"></span>\n                                <mat-checkbox\n                                    class=\"content-tree__checkbox\"\n                                    (click)=\"$event.stopPropagation()\"\n                                    (change)=\"onFolderSelectionChange(node, $event)\"\n                                    [checked]=\"node.checked\"\n                                    [indeterminate]=\"node.indeterminate\"\n                                    [disabled]=\"!hasChildren(node)\">\n                                </mat-checkbox>\n                                <span class=\"content-tree__label\" [title]=\"node.text\">{{ node.text }}</span>\n                                <div class=\"content-tree__actions\">\n                                    <button type=\"button\" class=\"btn btn-link btn-sm p-0\"\n                                            *ngIf=\"manageContentFolder\"\n                                            (click)=\"addItem(node, 'child', 'add', $event)\">\n                                        <i class=\"fas fa-folder-plus color-primary\" aria-hidden=\"true\"></i>\n                                    </button>\n                                    <button type=\"button\" class=\"btn btn-link btn-sm p-0\"\n                                            *ngIf=\"manageContentFolder && node.value.split('/')[3] == '1'\"\n                                            (click)=\"addItem(node, 'parent', 'edit', $event)\">\n                                        <i class=\"fa fa-pencil color-primary\" aria-hidden=\"true\"></i>\n                                    </button>\n                                    <button type=\"button\" class=\"btn btn-link btn-sm p-0\"\n                                            *ngIf=\"node.value.split('/')[3] == '1'\"\n                                            (click)=\"batchDeletePopUp(node, $event)\">\n                                        <i class=\"fa fa-trash color-red\" aria-hidden=\"true\"></i>\n                                    </button>\n                                </div>\n                            </div>\n                            <div class=\"content-tree__children\" *ngIf=\"treeControl.isExpanded(node)\">\n                                <ng-container matTreeNodeOutlet></ng-container>\n                            </div>\n                        </mat-nested-tree-node>\n\n                        <mat-tree-node *matTreeNodeDef=\"let node; when: fileNodePredicate\" matTreeNodePadding>\n                            <div class=\"content-tree__node content-tree__node--file\">\n                                <mat-checkbox\n                                    class=\"content-tree__checkbox\"\n                                    (click)=\"$event.stopPropagation()\"\n                                    (change)=\"onFileSelectionChange(node, $event)\"\n                                    [checked]=\"node.checked\"\n                                    [indeterminate]=\"node.indeterminate\"\n                                    [disabled]=\"node.disabled\">\n                                </mat-checkbox>\n                                <div class=\"content-tree__file-meta\" [title]=\"node.text\">\n                                    <i *ngIf=\"node.value?.split('/')[2] == '1'\" class=\"fa fa-book text-info\" aria-hidden=\"true\"></i>\n                                    <i *ngIf=\"node.value?.split('/')[2] == '2'\" class=\"fas fa-tasks text-warning\" aria-hidden=\"true\"></i>\n                                    <i *ngIf=\"node.value?.split('/')[2] == '3'\" class=\"fa fa-file-text text-primary\" aria-hidden=\"true\"></i>\n                                    <button type=\"button\"\n                                            class=\"btn btn-link p-0 content-tree__file-link\"\n                                            (click)=\"previewOrEditContent(node, 'preview')\">\n                                        {{ node.text }}\n                                    </button>\n                                    <span class=\"badge badge-danger ml-2\" *ngIf=\"node.value?.split('/')[3] == '1'\">PDF</span>\n                                    <span class=\"badge badge-secondary ml-2\" *ngIf=\"node.value?.split('/')[3] == '3'\">TEXT</span>\n                                </div>\n                                <div class=\"content-tree__actions\">\n                                    <button type=\"button\" class=\"btn btn-link btn-sm p-0\" title=\"Preview Content\"\n                                            (click)=\"previewOrEditContent(node, 'preview')\">\n                                        <i class=\"fa fa-eye color-primary\" aria-hidden=\"true\"></i>\n                                    </button>\n                                    <button type=\"button\" class=\"btn btn-link btn-sm p-0\"\n                                            *ngIf=\"(roleId == '4' && manageContentFolder && node.edit_status == '1') ||\n                                                (roleId == '6' && node.edit_status != '0') || (roleId == '2' && !(schoolId != node.school_id && node.access == '3') && node.access != '4')\"\n                                            title=\"Edit Content\"\n                                            (click)=\"previewOrEditContent(node, 'edit')\">\n                                        <i class=\"fa fa-pencil color-primary\" aria-hidden=\"true\"></i>\n                                    </button>\n                                </div>\n                            </div>\n                        </mat-tree-node>\n                    </mat-tree>\n\n                    <div *ngIf=\"branchListData.length === 0\" class=\"content-tree__empty\">\n                        <button class=\"nodataList\">No Data Available!</button>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n<div *ngIf=\"schoolStatus.length == 0\">\n    <app-emptyschool>\n    </app-emptyschool>\n</div>\n<!-- Container-fluid Ends-->\n\n<ng-template #assignContent>\n    <app-confirm-content-assign\n        [contentDetails]=\"contentDetails\"\n        [classData]=\"classDetails\"\n        [multiContentId]=\"multiContent\"\n        [isEssay]=\"isEssay\"\n        (closePopUp)=\"close($event)\"\n    >\n    </app-confirm-content-assign>\n</ng-template>\n\n<ng-template #addBranch let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"col-md-11 px-2 py-1 font-weight-bold mb-0\">{{calledValue == 'add' ? 'Add' : 'Rename'}} Folder</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <form [formGroup]=\"branchForm\" class=\"needs-validation user-add\" novalida>\n                    <div class=\"form-group row\">\n                        <label for=\"validationCustom1\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                            Content Folder Name </label>\n                        <div class=\"col-xl-8 col-md-7\">\n                            <input class=\"form-control\" formControlName=\"batchname\" id=\"validat1ionCustom1\"\n                                   type=\"text\" placeholder=\"Enter Content Folder Name\" required=\"\" (input)=\"formSubmitted = true\">\n                            <em *ngIf=\"!branchForm.get('batchname').valid && !formSubmitted\"\n                                class=\"error\">Enter Content Folder Name</em>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer pull-right\">\n        <button type=\"button\" (click)=\"close('')\" class=\"btn cancel\">Cancel\n        </button>\n        <button type=\"button\" (click)=\"addBranchDetails()\" class=\"btn btn-primary\">{{calledValue == 'add' ? 'Add' : 'Update'}}\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #deleteBatch let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"col-md-11 px-2 font-weight-bold mb-0\">Delete Folder</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12 px-4\">\n                <h5>Are you sure want to delete the <span class=\"color-primary font-weight-bold\">{{selectedBatchForDelete.text}}</span> folder ?</h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer pull-right\">\n        <button type=\"button\" (click)=\"close('')\" class=\"btn cancel\">No\n        </button>\n        <button type=\"button\" (click)=\"deleteBatchService()\" class=\"btn btn-danger\">Yes\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #viewContent>\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title\">Preview</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"closePopUp()\"></i>\n    </div>\n    <div class=\"modal-body\" style=\"background: #f8f8f9;\">\n        <app-preview (closePopUp)=\"closePopUp()\" [calledBy]=\"'popUp'\" [contentData]=\"contentData\"></app-preview>\n    </div>\n</ng-template>\n", styles: ["// Tab navigation styles\n.content-header {\n  background: white;\n  border-radius: 0.5rem;\n  padding: 1rem;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12);\n  margin-bottom: 1.5rem;\n}\n\n.content-tabs {\n  border: none;\n  margin-bottom: 0;\n  \n  .nav-item {\n    margin-bottom: 0;\n  }\n  \n  .nav-link {\n    border: none;\n    color: #6c757d;\n    padding: 0.75rem 1.5rem;\n    font-weight: 500;\n    background: transparent;\n    border-bottom: 3px solid transparent;\n    transition: all 0.3s ease;\n    \n    i {\n      color: #6c757d;\n      transition: color 0.3s ease;\n    }\n    \n    &:hover {\n      color: #7F3486;\n      background: rgba(127, 52, 134, 0.05);\n      border-bottom-color: rgba(127, 52, 134, 0.3);\n      \n      i {\n        color: #7F3486;\n      }\n    }\n    \n    &.active {\n      color: #7F3486;\n      background: rgba(127, 52, 134, 0.1);\n      border-bottom-color: #7F3486;\n      font-weight: 600;\n      \n      i {\n        color: #7F3486;\n      }\n    }\n  }\n}\n\n.content-tree-container {\n  max-height: 65vh;\n  overflow-y: auto;\n  padding-right: 0.25rem;\n}\n\n.content-tree {\n  background: #fff;\n\n  .mat-tree-node,\n  .mat-nested-tree-node > .content-tree__node {\n    min-height: 44px;\n  }\n}\n\n.content-tree__node {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-2);\n  padding: 0.35rem 0.5rem;\n  border-radius: var(--radius-md);\n  transition: background var(--transition-fast) ease, color var(--transition-fast) ease;\n\n  &:hover {\n    background: rgba(143, 0, 138, 0.06);\n  }\n}\n\n.content-tree__node--file {\n  justify-content: space-between;\n}\n\n.content-tree__toggle {\n  color: var(--neutral-500);\n}\n\n.content-tree__toggle-spacer {\n  width: 40px;\n}\n\n.content-tree__checkbox {\n  margin-right: var(--spacing-2);\n}\n\n.content-tree__label {\n  flex: 1 1 auto;\n  font-weight: 600;\n  color: var(--neutral-800);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.content-tree__actions {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-2);\n\n  .btn-link {\n    color: var(--neutral-500);\n    padding: 0;\n\n    &:hover {\n      color: var(--color-primary);\n    }\n  }\n}\n\n.content-tree__children {\n  margin-left: 1.75rem;\n  border-left: 1px dashed var(--neutral-200);\n  padding-left: 0.75rem;\n}\n\n.content-tree__file-meta {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-2);\n  flex: 1 1 auto;\n  color: var(--neutral-700);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  .fa,\n  .fas {\n    font-size: 0.95rem;\n  }\n}\n\n.content-tree__file-link {\n  font-weight: 600;\n  color: var(--color-primary);\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n  }\n}\n\n.content-tree__empty {\n  display: flex;\n  justify-content: center;\n  padding: 2rem 0;\n}\n\n.btn {\n  text-transform: none;\n}\n\n.main_assign {\n  border: 1px solid #8f008a;\n  padding: 0.5rem;\n  font-size: 24px;\n}\n\n.cancel:hover {\n  i {\n    color: #ffffff !important;\n  }\n}\n"] }]
    }], () => [{ type: i1.NgbModalConfig }, { type: i2.NavService }, { type: i3.FormBuilder }, { type: i4.AuthService }, { type: i5.CommonDataService }, { type: i1.NgbModal }, { type: i6.Router }, { type: i7.ToastrService }, { type: i8.NewsubjectService }, { type: i9.ClassroomService }, { type: i10.ValidationService }], { assignContent: [{
            type: ViewChild,
            args: ['assignContent']
        }], deleteBatch: [{
            type: ViewChild,
            args: ['deleteBatch']
        }], addBranchTemp: [{
            type: ViewChild,
            args: ['addBranch']
        }], viewContent: [{
            type: ViewChild,
            args: ['viewContent']
        }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListClassroomComponent, { className: "ListClassroomComponent" }); })();
//# sourceMappingURL=list-classroom.component.js.map