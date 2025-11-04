import { Component, ViewChild } from '@angular/core';
import { Validators } from "@angular/forms";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
import * as i4 from "../../../shared/service/common-data.service";
import * as i5 from "../../../shared/service/common.service";
import * as i6 from "ngx-toastr";
import * as i7 from "../../../shared/service/auth.service";
import * as i8 from "../../../shared/service/configuration.service";
import * as i9 from "../../../shared/service/student.service";
import * as i10 from "@angular/common";
import * as i11 from "@ng-select/ng-select";
import * as i12 from "../../../shared/directives/file-drag-n-drop.directive";
import * as i13 from "ngx-chips";
const _c0 = ["attachments"];
const _c1 = () => ({ standalone: true });
function RepositoryAddComponent_h5_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 15);
    i0.ɵɵtext(1, "Add Content");
    i0.ɵɵelementEnd();
} }
function RepositoryAddComponent_h5_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 15);
    i0.ɵɵtext(1, "Edit Content");
    i0.ɵɵelementEnd();
} }
function RepositoryAddComponent_ul_12_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul", 16)(1, "li", 17)(2, "a", 18);
    i0.ɵɵlistener("click", function RepositoryAddComponent_ul_12_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.uploadType = "single"; return i0.ɵɵresetView(ctx_r1.resetForm()); });
    i0.ɵɵelementStart(3, "b");
    i0.ɵɵtext(4, "Single Upload");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(5, "li", 17)(6, "a", 19);
    i0.ɵɵlistener("click", function RepositoryAddComponent_ul_12_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.uploadType = "multi"; return i0.ɵɵresetView(ctx_r1.resetForm()); });
    i0.ɵɵelementStart(7, "b");
    i0.ɵɵtext(8, "Multi Upload");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("nav-link ", ctx_r1.uploadType == "single" ? "active" : "", "");
    i0.ɵɵadvance(4);
    i0.ɵɵclassMapInterpolate1("nav-link ", ctx_r1.uploadType == "multi" ? "active" : "", "");
} }
function RepositoryAddComponent_form_14_em_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 51);
    i0.ɵɵtext(1, "Name is required");
    i0.ɵɵelementEnd();
} }
function RepositoryAddComponent_form_14_em_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 51);
    i0.ɵɵtext(1, "Category is required");
    i0.ɵɵelementEnd();
} }
function RepositoryAddComponent_form_14_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52)(1, "i", 53);
    i0.ɵɵlistener("click", function RepositoryAddComponent_form_14_div_24_Template_i_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onSelectNewFolder()); });
    i0.ɵɵelementEnd()();
} }
function RepositoryAddComponent_form_14_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 54);
    i0.ɵɵelement(1, "input", 55);
    i0.ɵɵelementStart(2, "i", 56);
    i0.ɵɵlistener("click", function RepositoryAddComponent_form_14_div_25_Template_i_click_2_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.showCategoryInput = false); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 57);
    i0.ɵɵlistener("click", function RepositoryAddComponent_form_14_div_25_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addNewFolder(0)); });
    i0.ɵɵelementEnd()();
} }
function RepositoryAddComponent_form_14_em_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 51);
    i0.ɵɵtext(1, "Status is required");
    i0.ɵɵelementEnd();
} }
function RepositoryAddComponent_form_14_div_76_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 64);
    i0.ɵɵlistener("click", function RepositoryAddComponent_form_14_div_76_div_1_img_3_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r7); const i_r8 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deletePdf(i_r8, "single")); });
    i0.ɵɵelementEnd();
} }
function RepositoryAddComponent_form_14_div_76_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵelement(1, "img", 61)(2, "br");
    i0.ɵɵtemplate(3, RepositoryAddComponent_form_14_div_76_div_1_img_3_Template, 1, 0, "img", 62);
    i0.ɵɵelementStart(4, "h6", 63);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const file_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", file_r9.image);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.pdfpath.length != 0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(file_r9.image);
} }
function RepositoryAddComponent_form_14_div_76_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 58);
    i0.ɵɵtemplate(1, RepositoryAddComponent_form_14_div_76_div_1_Template, 6, 3, "div", 59);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdfpath.length > 0);
} }
function RepositoryAddComponent_form_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 20)(1, "div", 21)(2, "label", 22)(3, "span");
    i0.ɵɵtext(4, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, " Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 23);
    i0.ɵɵelement(7, "input", 24);
    i0.ɵɵtemplate(8, RepositoryAddComponent_form_14_em_8_Template, 2, 0, "em", 25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 26)(10, "label", 27)(11, "span", 28);
    i0.ɵɵtext(12, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, " Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 23);
    i0.ɵɵelement(15, "textarea", 29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 26)(17, "label", 30)(18, "span", 28);
    i0.ɵɵtext(19, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(20, " Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div");
    i0.ɵɵelement(22, "ng-select", 31);
    i0.ɵɵtemplate(23, RepositoryAddComponent_form_14_em_23_Template, 2, 0, "em", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(24, RepositoryAddComponent_form_14_div_24_Template, 2, 0, "div", 32)(25, RepositoryAddComponent_form_14_div_25_Template, 4, 0, "div", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 26)(27, "label", 34)(28, "span");
    i0.ɵɵtext(29, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(30, " Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "div", 23)(32, "select", 35)(33, "option", 36);
    i0.ɵɵtext(34, "--Select Status--");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "option", 37);
    i0.ɵɵtext(36, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "option", 38);
    i0.ɵɵtext(38, "In-Active");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(39, RepositoryAddComponent_form_14_em_39_Template, 2, 0, "em", 25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "div", 26)(41, "label", 39)(42, "span", 28);
    i0.ɵɵtext(43, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(44, " Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "div", 23);
    i0.ɵɵelement(46, "input", 40);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div", 26)(48, "label", 39)(49, "span", 28);
    i0.ɵɵtext(50, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(51, " Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "div", 23);
    i0.ɵɵelement(53, "input", 41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(54, "div", 26)(55, "label", 39)(56, "span", 28);
    i0.ɵɵtext(57, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(58, " Resources Link");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "div", 23);
    i0.ɵɵelement(60, "tag-input", 42);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(61, "div", 26)(62, "div", 43)(63, "label", 44)(64, "span");
    i0.ɵɵtext(65, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(66, " Upload Files");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "input", 45, 0);
    i0.ɵɵlistener("change", function RepositoryAddComponent_form_14_Template_input_change_67_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.encodePdfFileAsURL($event, "1")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "button", 46);
    i0.ɵɵlistener("click", function RepositoryAddComponent_form_14_Template_button_click_70_listener() { i0.ɵɵrestoreView(_r3); const hiddenfileinput_r6 = i0.ɵɵreference(69); return i0.ɵɵresetView(hiddenfileinput_r6.click()); });
    i0.ɵɵelement(71, "i", 47);
    i0.ɵɵtext(72, " Upload PDF");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(73, "div", 26)(74, "div", 48)(75, "div", 49);
    i0.ɵɵtemplate(76, RepositoryAddComponent_form_14_div_76_Template, 2, 1, "div", 50);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r1.contentForm);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r1.contentForm.get("name").valid && (ctx_r1.contentForm.get("name").dirty || ctx_r1.contentForm.get("name").touched));
    i0.ɵɵadvance(13);
    i0.ɵɵclassMapInterpolate2("col-md-", ctx_r1.showCategoryInput ? "3" : "6", " col-xl-", ctx_r1.showCategoryInput ? "4" : "7", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.categoryList);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.contentForm.get("category").valid && (ctx_r1.contentForm.get("category").dirty || ctx_r1.contentForm.get("category").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showCategoryInput);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showCategoryInput);
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("ngIf", !ctx_r1.contentForm.get("status").valid && (ctx_r1.contentForm.get("status").dirty || ctx_r1.contentForm.get("status").touched));
    i0.ɵɵadvance(21);
    i0.ɵɵproperty("addOnBlur", true)("addOnPaste", true)("clearOnBlur", true)("editable", true)("pasteSplitPattern", " ")("placeholder", "Add Resources")("secondaryPlaceholder", "Enter Resources");
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("ngForOf", ctx_r1.pdfpath);
} }
function RepositoryAddComponent_form_15_div_13_option_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 92);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", item_r14.category_id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r14.category_name);
} }
function RepositoryAddComponent_form_15_div_13_i_14_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 93);
    i0.ɵɵlistener("click", function RepositoryAddComponent_form_15_div_13_i_14_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r15); const ind_r12 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.showNewFolderInput(ind_r12)); });
    i0.ɵɵelementEnd();
} }
function RepositoryAddComponent_form_15_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 77)(1, "div", 78)(2, "div", 79)(3, "i", 80);
    i0.ɵɵlistener("click", function RepositoryAddComponent_form_15_div_13_Template_i_click_3_listener() { const ind_r12 = i0.ɵɵrestoreView(_r11).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deletePdf(ind_r12, "multi")); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 81)(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 82)(8, "input", 83);
    i0.ɵɵlistener("input", function RepositoryAddComponent_form_15_div_13_Template_input_input_8_listener($event) { const ind_r12 = i0.ɵɵrestoreView(_r11).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.patchName($event, ind_r12)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 68)(10, "select", 84);
    i0.ɵɵlistener("change", function RepositoryAddComponent_form_15_div_13_Template_select_change_10_listener($event) { const ind_r12 = i0.ɵɵrestoreView(_r11).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.multiCategorySelection($event, ind_r12)); });
    i0.ɵɵtwoWayListener("ngModelChange", function RepositoryAddComponent_form_15_div_13_Template_select_ngModelChange_10_listener($event) { const f_r13 = i0.ɵɵrestoreView(_r11).$implicit; i0.ɵɵtwoWayBindingSet(f_r13.category_id, $event) || (f_r13.category_id = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(11, "option", 85);
    i0.ɵɵtext(12, "--Select Category--");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, RepositoryAddComponent_form_15_div_13_option_13_Template, 2, 2, "option", 86);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, RepositoryAddComponent_form_15_div_13_i_14_Template, 1, 0, "i", 87);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 88);
    i0.ɵɵelement(16, "input", 89);
    i0.ɵɵelementStart(17, "i", 90);
    i0.ɵɵlistener("click", function RepositoryAddComponent_form_15_div_13_Template_i_click_17_listener() { const ind_r12 = i0.ɵɵrestoreView(_r11).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closeNewFolderInput(ind_r12)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "i", 91);
    i0.ɵɵlistener("click", function RepositoryAddComponent_form_15_div_13_Template_i_click_18_listener() { const ind_r12 = i0.ɵɵrestoreView(_r11).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addNewFolder(ind_r12)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const f_r13 = ctx.$implicit;
    const ind_r12 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", f_r13.file_path[0].image);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(f_r13.file_path[0].image);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", f_r13.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", f_r13.category_id);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(11, _c1));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.categoryList);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showCategoryInput);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("id", "multiFolder", ind_r12, "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("id", "folderInput", ind_r12, "");
} }
function RepositoryAddComponent_form_15_em_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 51);
    i0.ɵɵtext(1, "Status is required");
    i0.ɵɵelementEnd();
} }
function RepositoryAddComponent_form_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 20)(1, "div", 65)(2, "div", 66)(3, "div", 67)(4, "div", 68)(5, "div", 69)(6, "div", 70);
    i0.ɵɵlistener("filesChangeEmiter", function RepositoryAddComponent_form_15_Template_div_filesChangeEmiter_6_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onFileChange($event)); });
    i0.ɵɵelementStart(7, "div", 71)(8, "div", 72)(9, "label");
    i0.ɵɵtext(10, "Drop it here!");
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelement(11, "hr");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 73);
    i0.ɵɵtemplate(13, RepositoryAddComponent_form_15_div_13_Template, 19, 12, "div", 74);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 75)(15, "label", 39)(16, "span", 28);
    i0.ɵɵtext(17, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(18, " Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 23);
    i0.ɵɵelement(20, "input", 40);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 75)(22, "label", 39)(23, "span", 28);
    i0.ɵɵtext(24, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(25, " Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 23);
    i0.ɵɵelement(27, "input", 41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 75)(29, "label", 39)(30, "span");
    i0.ɵɵtext(31, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(32, " Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div", 23)(34, "select", 76)(35, "option", 36);
    i0.ɵɵtext(36, "--Select--");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "option", 37);
    i0.ɵɵtext(38, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "option", 38);
    i0.ɵɵtext(40, "In-Active");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(41, RepositoryAddComponent_form_15_em_41_Template, 2, 0, "em", 25);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r1.contentForm);
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngForOf", ctx_r1.multiPdf);
    i0.ɵɵadvance(28);
    i0.ɵɵproperty("ngIf", !ctx_r1.contentForm.get("status").valid && (ctx_r1.contentForm.get("status").dirty || ctx_r1.contentForm.get("status").touched));
} }
function RepositoryAddComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 94);
    i0.ɵɵlistener("click", function RepositoryAddComponent_button_18_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addContent("add")); });
    i0.ɵɵtext(1, "Save");
    i0.ɵɵelementEnd();
} }
function RepositoryAddComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 94);
    i0.ɵɵlistener("click", function RepositoryAddComponent_button_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addContent("edit")); });
    i0.ɵɵtext(1, "Update");
    i0.ɵɵelementEnd();
} }
export class RepositoryAddComponent {
    constructor(route, formBuilder, modalService, router, commondata, common, toastr, auth, config, student) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.router = router;
        this.commondata = commondata;
        this.common = common;
        this.toastr = toastr;
        this.auth = auth;
        this.config = config;
        this.student = student;
        this.editData = '';
        this.response = [];
        this.pdfpath = [];
        this.files = [];
        this.multiPdf = [];
        this.categoryList = [];
        this.showCategoryInput = false;
        this.uploadType = 'single';
        this.webhost = this.config.getimgUrl();
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.contentForm = this.formBuilder.group({
            name: this.uploadType == 'single' ? ['', Validators.required] : '',
            description: '',
            status: ['1', Validators.required],
            grade: '',
            subject: '',
            resourcesLink: '',
            category: '',
        });
        this.contentFolderList('init', 0);
    }
    ngOnInit() {
        if (this.type == 'edit') {
            this.editData = JSON.parse(this.auth.getSessionData('edit-student-content'));
            this.contentForm.controls.name.patchValue(this.editData.name);
            this.contentForm.controls.description.patchValue(this.editData.description);
            this.contentForm.controls.category.patchValue(this.editData.category_id);
            this.contentForm.controls.status.patchValue(this.editData.status);
            this.contentForm.controls.grade.patchValue(this.editData.grade_name);
            this.contentForm.controls.subject.patchValue(this.editData.subject_name);
            this.contentForm.controls.resourcesLink.patchValue(this.editData.links);
            this.pdfpath = this.editData.file_path;
        }
    }
    contentFolderList(type, index) {
        // index param only used for multi upload new folder creation //
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            type: 'active'
        };
        this.student.folderList(data).subscribe((successData) => {
            this.folderListSuccess(successData, type, index);
        }, (error) => {
            console.error(error, 'error_assignmentList');
        });
    }
    folderListSuccess(successData, type, index) {
        if (successData.IsSuccess) {
            this.categoryList = successData.ResponseObject;
            if (type == 'updateList') {
                if (this.uploadType == 'single') {
                    this.categoryList.forEach((val) => {
                        if (val.category_name == this.newCategoryAdd) {
                            if (this.contentForm.controls.category.value == '') {
                                this.contentForm.controls.category.patchValue([val.category_id]);
                            }
                            else {
                                const arr = [...this.contentForm.controls.category.value];
                                arr.push(val.category_id);
                                this.contentForm.controls.category.patchValue(arr);
                                console.log(arr, 'arr');
                            }
                            // this.contentForm.controls.category.patchValue(val.category_id);
                        }
                    });
                    $('#newFolder').val('');
                }
                else {
                    this.categoryList.forEach((val) => {
                        if (val.category_name == this.newCategoryAdd) {
                            this.multiPdf[index].category_id = val.category_id;
                            this.multiPdf.forEach((items) => {
                                if (items.category_id === '') {
                                    items.category_id = val.category_id;
                                }
                            });
                        }
                    });
                    $('#folderInput' + index).val('');
                    document.getElementById('multiFolder' + index).style.display = 'none';
                }
                this.showCategoryInput = false;
            }
        }
    }
    showNewFolderInput(index) {
        this.showCategoryInput = true;
        document.getElementById('multiFolder' + index).style.display = 'flex';
        console.log(document.getElementById('multiFolder' + index).style, 'set style');
    }
    closeNewFolderInput(index) {
        document.getElementById('multiFolder' + index).style.display = 'none';
        this.showCategoryInput = false;
    }
    addNewFolder(index) {
        if (this.uploadType == 'single') {
            this.newCategoryAdd = $('#newFolder').val();
        }
        else {
            this.newCategoryAdd = $('#folderInput' + index).val();
        }
        this.addFolder(index);
    }
    addFolder(index) {
        if (this.newCategoryAdd != '') {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                student_id: this.auth.getUserId(),
                category_name: this.newCategoryAdd,
                status: '1'
            };
            this.student.addFolder(data).subscribe((successData) => {
                this.addFolderSuccess(successData, index);
            }, (error) => {
                this.toastr.error(error.ErrorObject);
                console.error(error, 'error_assignmentList');
            });
        }
        else {
            this.toastr.error('Please Enter Folder Name');
        }
    }
    addFolderSuccess(successData, index) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.contentFolderList('updateList', index);
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    validateMultiPdf() {
        let validate = true;
        this.multiPdf.every((items) => {
            items.category_id = items.category_id === '' ? 0 : items.category_id;
            if (items.name == '') {
                validate = false;
            }
        });
        return validate;
    }
    addContent(type) {
        let allow = true;
        if (this.uploadType == 'multi') {
            allow = this.validateMultiPdf();
        }
        if (this.contentForm.valid && this.pdfpath.length != 0 && allow) {
            let data;
            if (this.uploadType == 'single') {
                data = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    school_id: this.auth.getSessionData('school_id'),
                    student_id: this.auth.getUserId(),
                    name: this.contentForm.controls.name.value,
                    description: this.contentForm.controls.description.value,
                    category_id: this.contentForm.controls.category.value == '' ? '' : this.contentForm.controls.category.value.toString(),
                    status: this.contentForm.controls.status.value,
                    subject_name: this.contentForm.controls.subject.value,
                    grade_name: this.contentForm.controls.grade.value,
                    file_path: this.pdfpath,
                    link: this.contentForm.controls.resourcesLink.value == '' ? '' : this.contentForm.controls.resourcesLink.value,
                    type: '1',
                };
                console.log(data, 'data single');
            }
            else {
                data = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    school_id: this.auth.getSessionData('school_id'),
                    student_id: this.auth.getUserId(),
                    // description: this.contentForm.controls.description.value,
                    status: this.contentForm.controls.status.value,
                    subject_name: this.contentForm.controls.subject.value,
                    grade_name: this.contentForm.controls.grade.value,
                    type: '2',
                    contents: this.multiPdf
                };
            }
            if (type == 'add') {
                this.student.addContent(data).subscribe((successData) => {
                    this.addContentSuccess(successData);
                }, (error) => {
                    console.error(error, 'error_addContent');
                    this.toastr.error(error.ErrorObject);
                });
            }
            else {
                data['repository_id'] = this.editData.repository_id;
                this.auth.removeSessionData('edit-student-content');
                this.student.editContent(data).subscribe((successData) => {
                    this.addContentSuccess(successData);
                }, (error) => {
                    this.toastr.error(error.ErrorObject);
                    console.error(error, 'error_editContent');
                });
            }
        }
        else {
            this.toastr.error('Please Enter all the Mandatory Fields');
        }
    }
    addContentSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.router.navigate(['/studentlogin/repository']);
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    onSelectNewFolder() {
        this.showCategoryInput = true;
        setTimeout(() => {
            document.getElementById('newFolder').focus();
        }, 200);
    }
    multiCategorySelection(event, index) {
        console.log(event, 'event change dropdown');
        this.multiPdf.forEach((item, i) => {
            if (index == i) {
                item.category_id = event.target.value;
            }
            else if (item.category_id === '') {
                item.category_id = event.target.value;
            }
        });
        // console.log(this.multiPdf, 'multiPdf');
    }
    patchName(event, index) {
        this.multiPdf[index].name = event.target.value;
    }
    resetForm() {
        this.contentForm.reset();
        this.pdfpath = [];
        this.attachment.nativeElement.value = '';
        this.contentForm.controls.status.patchValue('1');
        if (this.uploadType == 'multi') {
            this.contentForm.controls.name.setValidators([]);
            // this.contentForm.controls.category.setValidators([]);
        }
        else {
            this.contentForm.controls.name.setValidators([Validators.required]);
            // this.contentForm.controls.category.setValidators([Validators.required]);
        }
    }
    deletePdf(index, type) {
        if (type == 'multi') {
            this.multiPdf.splice(index, 1);
            this.pdfpath.splice(index, 1);
        }
        else {
            this.pdfpath.splice(index, 1);
            this.attachment.nativeElement.value = '';
        }
    }
    // Multi upload //
    onFileChange(pFileList) {
        console.log(pFileList, 'pFileList');
        this.files = [...pFileList];
        this.files.forEach((val) => {
            let split = val.image.split(',');
            val.image = split[1];
        });
        console.log(this.files, 'files');
        this.onUploadKYCFinishedpdf(this.files, 3);
    }
    // Single upload //
    encodePdfFileAsURL(event, type) {
        let images = [];
        let imageLength = event.target.files.length;
        for (let i = 0; i < event.target.files.length; i++) {
            const getUrlEdu = '';
            const pdfDetails = event.target.files[i];
            console.log(pdfDetails, 'pdfDetails');
            const reader = new FileReader();
            reader.onload = (event) => {
                let uploadTypeList = event.target.result.split(',');
                images.push({ image: uploadTypeList[1],
                    size: pdfDetails.size,
                    type: pdfDetails.type,
                    name: pdfDetails.name });
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
        // let pdftype: any;
        // if (type == '1'){
        //   pdftype = 'content';
        // }else {
        //   pdftype = 'answerkey';
        // }
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            image_path: getUrlEdu,
            uploadtype: 'studentrepository'
        };
        this.common.fileUpload(data).subscribe((successData) => {
            this.pdfuploadSuccess(successData, type);
        }, (error) => {
            this.pdfuploadFailure(error);
        });
    }
    pdfuploadSuccess(successData, type) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.response = successData.ResponseObject;
            console.log(this.response, 'response');
            if (type == '1') {
                this.pdfpath = [];
                this.pdfpath.push(this.response.imagepath[0]);
            }
            else if (type == '3') {
                // this.response.imagepath.forEach((item) => {
                //   item.resource_type = this.resourceType;
                // });
                this.pdfpath = [...this.pdfpath, ...this.response.imagepath];
                const length = this.multiPdf.length;
                this.pdfpath.forEach((items, index) => {
                    if (index >= length) {
                        const splitName = items.image.split('.');
                        const pdfName = splitName[0];
                        this.multiPdf.push({
                            name: pdfName,
                            category_id: '',
                            file_path: [items]
                        });
                    }
                });
            }
        }
        else {
            this.toastr.error('Invalid File Format');
        }
    }
    pdfuploadFailure(error) {
        this.toastr.error('Invalid File Format');
    }
    static { this.ɵfac = function RepositoryAddComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RepositoryAddComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.NgbModal), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i4.CommonDataService), i0.ɵɵdirectiveInject(i5.CommonService), i0.ɵɵdirectiveInject(i6.ToastrService), i0.ɵɵdirectiveInject(i7.AuthService), i0.ɵɵdirectiveInject(i8.ConfigurationService), i0.ɵɵdirectiveInject(i9.StudentService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RepositoryAddComponent, selectors: [["app-repository-add"]], viewQuery: function RepositoryAddComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.attachment = _t.first);
        } }, decls: 20, vars: 7, consts: [["attachments", "", "hiddenfileinput", ""], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "card", "tab2-card"], [1, "card-header", "pb-0"], ["class", "text-capitalize", 4, "ngIf"], [1, "text-muted"], [1, "text-danger"], ["class", "nav nav-tabs mb-0 color-primary", 4, "ngIf"], [1, "card-body", "tab2-card"], ["class", "needs-validation user-add", 3, "formGroup", 4, "ngIf"], [1, "card-footer", "px-4", "py-3"], [1, "pull-right"], ["class", "btn btn-primary", "type", "button", 3, "click", 4, "ngIf"], [1, "text-capitalize"], [1, "nav", "nav-tabs", "mb-0", "color-primary"], [1, "nav-item", "cursor"], ["aria-current", "page", 3, "click"], [3, "click"], [1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "col-12", "d-flex", "mt-4"], ["for", "validationCustom1", 1, "col-12", "col-md-4", "col-xl-3"], [1, "col-12", "col-md-7", "col-xl-8"], ["formControlName", "name", "id", "validationCustom1", "placeholder", "Name", "required", "", "type", "text", 1, "form-control"], ["class", "error", 4, "ngIf"], [1, "form-group", "col-12", "d-flex"], ["for", "validationCustom2", 1, "col-12", "col-md-4", "col-xl-3"], [2, "visibility", "hidden"], ["formControlName", "description", "id", "validationCustom2", "placeholder", "Description", "rows", "3", "type", "email", 1, "form-control"], ["for", "validationCustom5", 1, "col-md-4", "col-xl-3"], ["bindLabel", "category_name", "bindValue", "category_id", "formControlName", "category", "multiple", "true", "placeholder", "Select Category", 3, "items"], ["class", "col-md-1 col-xl-1 px-0 d-flex", 4, "ngIf"], ["class", "col-md-4 col-xl-4 d-flex", 4, "ngIf"], ["for", "validationCustom5", 1, "col-12", "col-md-4", "col-xl-3"], ["formControlName", "status", "id", "validationCustom5", 1, "form-control"], ["disabled", "", "selected", ""], ["value", "1"], ["value", "2"], [1, "col-12", "col-md-4", "col-xl-3"], ["formControlName", "subject", "placeholder", "Enter Subject", "type", "text", 1, "form-control"], ["formControlName", "grade", "placeholder", "Enter Grade", "type", "text", 1, "form-control"], ["formControlName", "resourcesLink", "theme", "bootstrap", 3, "addOnBlur", "addOnPaste", "clearOnBlur", "editable", "pasteSplitPattern", "placeholder", "secondaryPlaceholder"], [1, "col-md-6", "px-0"], [1, "col-12", "col-md-6", "col-xl-6"], ["accept", ".pdf", "type", "file", 2, "display", "none", 3, "change"], ["aria-describedby", "inputGroupFileAddon01", "type", "file", 1, "btn", "btn-primary", "mt-2", "ml-2", 3, "click"], [1, "fa", "fa-upload"], [1, "col-md-6"], [1, "col-12", "col-md-4", "col-xl-4"], ["class", "form-group card-resource ml-4", 4, "ngFor", "ngForOf"], [1, "error"], [1, "col-md-1", "col-xl-1", "px-0", "d-flex"], ["title", "Add New Folder", 1, "fa", "fa-plus-square", "color-primary", "cursor", 2, "font-size", "2.1rem", 3, "click"], [1, "col-md-4", "col-xl-4", "d-flex"], ["id", "newFolder", "placeholder", "Enter New Folder Name", "type", "text", 1, "form-control"], [1, "fa", "fa-times-circle", "color-red", "mx-2", "align-self-center", "cursor", 2, "font-size", "1.4rem", 3, "click"], [1, "fa", "fa-check-circle", "color-green", "align-self-center", "cursor", 2, "font-size", "1.4rem", 3, "click"], [1, "form-group", "card-resource", "ml-4"], ["class", "delete-icon w-100", 4, "ngIf"], [1, "delete-icon", "w-100"], ["alt", "", "src", "assets/images/ristaschool/books.png", 1, "cursor", "img-path", 3, "title"], ["alt", "", "class", "img-icon mt-2 float-right", "src", "assets/images/pdf-icons/Icon material-delete@2x.png", 3, "click", 4, "ngIf"], [1, "mt-2", "cursor", "classresource"], ["alt", "", "src", "assets/images/pdf-icons/Icon material-delete@2x.png", 1, "img-icon", "mt-2", "float-right", 3, "click"], [1, "form-group", "col-12", "flex-wrap", "d-flex", "justify-content-center", "my-3", "dragNDrop"], [1, "form-group", "col-md-12", "flex-wrap", "dragNDrop"], [2, "padding", "15px"], [1, "col-md-12", "d-flex", "px-0"], [1, "col-md-12", "text-center"], ["appFileDragNDrop", "", 1, "dropzone", 3, "filesChangeEmiter"], [1, "text-wrapper"], [1, "centered"], [1, "col-md-12", "d-flex", "flex-wrap", "px-0"], ["class", "col-md-4 d-flex flex-wrap align-self-baseline", 4, "ngFor", "ngForOf"], [1, "form-group", "col-12", "d-flex", "justify-content-center"], ["formControlName", "status", 1, "form-control"], [1, "col-md-4", "d-flex", "flex-wrap", "align-self-baseline"], [1, "col-md-12", "d-flex", "flex-wrap", "fileItem", 3, "title"], [1, "col-sm-12", "fileItemIconDiv"], [1, "fa", "fa-trash-o", 3, "click"], [1, "col-sm-12", "fileItemText"], [1, "col-md-12", "px-0", "my-2"], ["placeholder", "Enter Content Name", "type", "text", 1, "form-control", 3, "input", "value"], [1, "form-control", 3, "change", "ngModelChange", "ngModel", "ngModelOptions"], ["disabled", "", "selected", "", "value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "fa fa-plus-square color-primary cursor ml-2 align-self-center", "style", "font-size: 1.9rem", "title", "Add New Folder", 3, "click", 4, "ngIf"], [1, "col-md-12", "px-0", "mt-2", "display-none", 3, "id"], ["placeholder", "Enter New Folder Name", "type", "text", 1, "form-control", 3, "id"], [1, "fa", "fa-times-circle", "color-red", "mx-2", "align-self-center", 2, "font-size", "1.2rem", 3, "click"], [1, "fa", "fa-check-circle", "color-green", "align-self-center", 2, "font-size", "1.2rem", 3, "click"], [3, "value"], ["title", "Add New Folder", 1, "fa", "fa-plus-square", "color-primary", "cursor", "ml-2", "align-self-center", 2, "font-size", "1.9rem", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function RepositoryAddComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
            i0.ɵɵtemplate(5, RepositoryAddComponent_h5_5_Template, 2, 0, "h5", 6)(6, RepositoryAddComponent_h5_6_Template, 2, 0, "h5", 6);
            i0.ɵɵelementStart(7, "label", 7);
            i0.ɵɵtext(8, "All fields marked with ");
            i0.ɵɵelementStart(9, "span", 8);
            i0.ɵɵtext(10, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(11, " are required");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(12, RepositoryAddComponent_ul_12_Template, 9, 6, "ul", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 10);
            i0.ɵɵtemplate(14, RepositoryAddComponent_form_14_Template, 77, 19, "form", 11)(15, RepositoryAddComponent_form_15_Template, 42, 3, "form", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 12)(17, "div", 13);
            i0.ɵɵtemplate(18, RepositoryAddComponent_button_18_Template, 2, 0, "button", 14)(19, RepositoryAddComponent_button_19_Template, 2, 0, "button", 14);
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.type == "add");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "edit");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.type == "add");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.uploadType == "single");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.uploadType == "multi");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.type == "add");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "edit");
        } }, dependencies: [i10.NgForOf, i10.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.FormGroupDirective, i2.FormControlName, i11.NgSelectComponent, i2.NgModel, i12.FileDragNDropDirective, i13.TagInputComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RepositoryAddComponent, [{
        type: Component,
        args: [{ selector: 'app-repository-add', template: "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-header pb-0\">\n                    <h5 *ngIf=\"type == 'add'\" class=\"text-capitalize\">Add Content</h5>\n                    <h5 *ngIf=\"type == 'edit'\" class=\"text-capitalize\">Edit Content</h5>\n                    <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n                    <ul *ngIf=\"type == 'add'\" class=\"nav nav-tabs mb-0 color-primary\">\n                        <li class=\"nav-item cursor\">\n                            <a (click)=\"uploadType = 'single'; resetForm()\" aria-current=\"page\" class=\"nav-link {{uploadType == 'single' ? 'active' : ''}}\"><b>Single Upload</b></a>\n                        </li>\n                        <li class=\"nav-item cursor\">\n                            <a (click)=\"uploadType = 'multi'; resetForm()\" class=\"nav-link {{uploadType == 'multi' ? 'active' : ''}}\"><b>Multi Upload</b></a>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"card-body tab2-card\">\n                    <form *ngIf=\"uploadType == 'single'\" [formGroup]=\"contentForm\" class=\"needs-validation user-add\">\n                        <div class=\"form-group col-12 d-flex mt-4\">\n                            <label class=\"col-12 col-md-4 col-xl-3\" for=\"validationCustom1\"><span>*</span>\n                                Name</label>\n                            <div class=\"col-12 col-md-7 col-xl-8\">\n                                <input class=\"form-control \" formControlName=\"name\" id=\"validationCustom1\"\n                                       placeholder=\"Name\" required=\"\" type=\"text\">\n                                <em *ngIf=\"!contentForm.get('name').valid && (contentForm.get('name').dirty || contentForm.get('name').touched)\" class=\"error\">Name is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-12 d-flex\">\n                            <label class=\"col-12 col-md-4 col-xl-3\" for=\"validationCustom2\"><span style=\"visibility: hidden\">*</span>\n                                Description</label>\n                            <div class=\"col-12 col-md-7 col-xl-8\">\n                                <textarea class=\"form-control \" formControlName=\"description\" id=\"validationCustom2\" placeholder=\"Description\"\n                                          rows=\"3\" type=\"email\"></textarea>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-12 d-flex\">\n                            <label class=\"col-md-4 col-xl-3\" for=\"validationCustom5\"><span style=\"visibility: hidden\">*</span>\n                                Category</label>\n                            <div class=\"col-md-{{showCategoryInput ? '3' : '6'}} col-xl-{{showCategoryInput ? '4' : '7'}}\">\n                                <ng-select [items]=\"categoryList\"\n                                           bindLabel=\"category_name\"\n                                           bindValue=\"category_id\"\n                                           formControlName=\"category\"\n                                           multiple=\"true\"\n                                           placeholder=\"Select Category\">\n                                </ng-select>\n<!--                                <select class=\"form-control\" formControlName=\"category\">-->\n<!--                                    <option disabled selected value=\"\">&#45;&#45;Select Category&#45;&#45;</option>-->\n<!--                                    <option *ngFor=\"let item of categoryList\" value=\"{{item.category_id}}\">{{item.category_name}}</option>-->\n<!--                                </select>-->\n                                <em *ngIf=\"!contentForm.get('category').valid && (contentForm.get('category').dirty || contentForm.get('category').touched)\" class=\"error\">Category is required</em>\n                            </div>\n                            <div *ngIf=\"!showCategoryInput\" class=\"col-md-1 col-xl-1 px-0 d-flex\">\n                                <i (click)=\"onSelectNewFolder()\" class=\"fa fa-plus-square color-primary cursor\" style=\"font-size: 2.1rem\" title=\"Add New Folder\"></i>\n                            </div>\n                            <div *ngIf=\"showCategoryInput\" class=\"col-md-4 col-xl-4 d-flex\">\n                                <input class=\"form-control\" id=\"newFolder\"\n                                       placeholder=\"Enter New Folder Name\" type=\"text\">\n                                <i (click)=\"showCategoryInput = false\" class=\"fa fa-times-circle color-red mx-2 align-self-center cursor\" style=\"font-size: 1.4rem\"></i>\n                                <i (click)=\"addNewFolder(0)\" class=\"fa fa-check-circle color-green align-self-center cursor\" style=\"font-size: 1.4rem\"></i>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-12 d-flex\">\n                            <label class=\"col-12 col-md-4 col-xl-3\" for=\"validationCustom5\"><span>*</span>\n                                Status</label>\n                            <div class=\"col-12 col-md-7 col-xl-8\">\n                                <select class=\"form-control\" formControlName=\"status\" id=\"validationCustom5\">\n                                    <option disabled selected>&#45;&#45;Select Status&#45;&#45;</option>\n                                    <option value=\"1\">Active</option>\n                                    <option value=\"2\">In-Active</option>\n                                </select>\n                                <em *ngIf=\"!contentForm.get('status').valid && (contentForm.get('status').dirty || contentForm.get('status').touched)\" class=\"error\">Status is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-12 d-flex\">\n                            <label class=\"col-12 col-md-4 col-xl-3\"><span style=\"visibility: hidden\">*</span>\n                                Subject</label>\n                            <div class=\"col-12 col-md-7 col-xl-8\">\n                                <input class=\"form-control \" formControlName=\"subject\"\n                                       placeholder=\"Enter Subject\" type=\"text\">\n                            </div>\n                        </div>\n                        <div class=\"form-group col-12 d-flex\">\n                            <label class=\"col-12 col-md-4 col-xl-3\"><span style=\"visibility: hidden\">*</span>\n                                Grade</label>\n                            <div  class=\"col-12 col-md-7 col-xl-8\">\n                                <input class=\"form-control \" formControlName=\"grade\"\n                                       placeholder=\"Enter Grade\" type=\"text\">\n                            </div>\n                        </div>\n                        <div class=\"form-group col-12 d-flex\">\n                            <label class=\"col-12 col-md-4 col-xl-3\"><span style=\"visibility: hidden\">*</span>\n                                Resources Link</label>\n                            <div  class=\"col-12 col-md-7 col-xl-8\">\n                                <tag-input [addOnBlur]=\"true\"\n                                           [addOnPaste]=\"true\"\n                                           [clearOnBlur]=\"true\"\n                                           [editable]='true'\n                                           [pasteSplitPattern]=\"' '\"\n                                           [placeholder]=\"'Add Resources'\"\n                                           [secondaryPlaceholder]=\"'Enter Resources'\"\n                                           formControlName=\"resourcesLink\"\n                                           theme='bootstrap'>\n                                </tag-input>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-12 d-flex\">\n                            <div class=\"col-md-6 px-0\">\n                                <label class=\"col-12 col-md-6 col-xl-6\"><span>*</span>\n                                    Upload Files</label>\n                                <input #attachments #hiddenfileinput (change)=\"encodePdfFileAsURL($event, '1')\" accept=\".pdf\" style=\"display: none\" type=\"file\">\n                                <button (click)=\"hiddenfileinput.click()\" aria-describedby=\"inputGroupFileAddon01\" class=\"btn btn-primary mt-2 ml-2\"\n                                        type=\"file\"><i class=\"fa fa-upload\"></i> Upload PDF</button>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-12 d-flex\">\n                            <div class=\"col-md-6\">\n                                <div class=\"col-12 col-md-4 col-xl-4\">\n                                    <div *ngFor=\"let file of pdfpath; let i= index\" class=\"form-group card-resource ml-4\">\n                                        <div *ngIf=\"pdfpath.length > 0\" class=\"delete-icon w-100\">\n                                            <img alt=\"\" class=\"cursor img-path\" src=\"assets/images/ristaschool/books.png\" title=\"{{file.image}}\">\n                                            <br/>\n                                            <img (click)=\"deletePdf(i, 'single')\" *ngIf=\"pdfpath.length != 0\" alt=\"\" class=\"img-icon mt-2 float-right\"  src=\"assets/images/pdf-icons/Icon material-delete@2x.png\">\n                                            <h6 class=\"mt-2 cursor classresource\">{{file.image}}</h6>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                    <form *ngIf=\"uploadType == 'multi'\" [formGroup]=\"contentForm\" class=\"needs-validation user-add\">\n                        <div class=\"form-group col-12 flex-wrap d-flex justify-content-center my-3 dragNDrop\">\n                            <div class=\"form-group col-md-12 flex-wrap dragNDrop\">\n                                <div style=\"padding: 15px;\">\n                                    <div class=\"col-md-12 d-flex px-0\">\n                                        <div class=\"col-md-12 text-center\">\n                                            <div (filesChangeEmiter)=\"onFileChange($event)\" appFileDragNDrop class=\"dropzone\">\n                                                <div class=\"text-wrapper\">\n                                                    <div class=\"centered\">\n                                                        <label>Drop it here!</label>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <hr>\n                                </div>\n                                <div class=\"col-md-12 d-flex flex-wrap px-0\">\n<!--                                    <h3 *ngIf=\"pdfpath.length >0\">Files</h3>-->\n                                    <div *ngFor=\"let f of multiPdf; let ind = index\" class=\"col-md-4 d-flex flex-wrap align-self-baseline\">\n                                        <div class=\"col-md-12 d-flex flex-wrap fileItem\" title=\"{{f.file_path[0].image}}\">\n                                            <div class=\"col-sm-12 fileItemIconDiv\">\n                                                <i (click)=\"deletePdf(ind, 'multi')\" class=\"fa fa-trash-o\"></i>\n                                            </div>\n                                            <div class=\"col-sm-12 fileItemText\">\n                                                <span>{{f.file_path[0].image}}</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-12 px-0 my-2\">\n                                            <input (input)=\"patchName($event, ind)\" [value]=\"f.name\" class=\"form-control\" placeholder=\"Enter Content Name\" type=\"text\">\n                                        </div>\n                                        <div class=\"col-md-12 d-flex px-0\">\n                                            <select (change)=\"multiCategorySelection($event, ind)\" [(ngModel)]=\"f.category_id\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                                                <option disabled selected value=\"\">&#45;&#45;Select Category&#45;&#45;</option>\n                                                <option *ngFor=\"let item of categoryList\" value=\"{{item.category_id}}\">{{item.category_name}}</option>\n                                            </select>\n                                            <i (click)=\"showNewFolderInput(ind)\" *ngIf=\"!showCategoryInput\" class=\"fa fa-plus-square color-primary cursor ml-2 align-self-center\"\n                                               style=\"font-size: 1.9rem\" title=\"Add New Folder\"></i>\n                                        </div>\n                                        <div class=\"col-md-12 px-0 mt-2 display-none\" id=\"multiFolder{{ind}}\">\n                                            <input class=\"form-control\" id=\"folderInput{{ind}}\" placeholder=\"Enter New Folder Name\" type=\"text\">\n                                            <i (click)=\"closeNewFolderInput(ind)\" class=\"fa fa-times-circle color-red mx-2 align-self-center\" style=\"font-size: 1.2rem\"></i>\n                                            <i (click)=\"addNewFolder(ind)\" class=\"fa fa-check-circle color-green align-self-center\" style=\"font-size: 1.2rem\"></i>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!--                        <input #hiddenfileinput1 type=\"file\" accept=\".pdf\" style=\"display: none\" (change)=\"encodePdfFileAsURL($event, 3)\" multiple>-->\n                        <!--                        <div class=\"form-group row\">-->\n                        <!--                            <label class=\"col-xl-3 col-md-4\" for=\"validationCustom5\"><span>*</span>-->\n                        <!--                                Book Type</label>-->\n                        <!--                            <div class=\"col-xl-8 col-md-7\">-->\n                        <!--                                <select (change)=\"typeSelection($event)\" class=\"form-control\" formControlName=\"bookType\" >-->\n                        <!--                                    <option disabled selected>&#45;&#45;Select&#45;&#45;</option>-->\n                        <!--                                    <option value=\"1\">Resource</option>-->\n                        <!--                                    <option value=\"3\">Assessment</option>-->\n                        <!--                                    <option value=\"2\">Assignment</option>-->\n                        <!--                                </select>-->\n                        <!--                                <em *ngIf=\"!contentForm.get('bookType').valid && (contentForm.get('bookType').dirty || contentForm.get('bookType').touched)\" class=\"error\">Book type is required</em>-->\n                        <!--                            </div>-->\n                        <!--                        </div>-->\n                        <div class=\"form-group col-12 d-flex justify-content-center\">\n                            <label class=\"col-12 col-md-4 col-xl-3\"><span style=\"visibility: hidden\">*</span>\n                                Subject</label>\n                            <div class=\"col-12 col-md-7 col-xl-8\">\n                                <input class=\"form-control \" formControlName=\"subject\"\n                                       placeholder=\"Enter Subject\" type=\"text\">\n                            </div>\n                        </div>\n                        <div class=\"form-group col-12 d-flex justify-content-center\">\n                            <label class=\"col-12 col-md-4 col-xl-3\"><span style=\"visibility: hidden\">*</span>\n                                Grade</label>\n                            <div  class=\"col-12 col-md-7 col-xl-8\">\n                                <input class=\"form-control \" formControlName=\"grade\"\n                                       placeholder=\"Enter Grade\" type=\"text\">\n                            </div>\n                        </div>\n                        <div class=\"form-group col-12 d-flex justify-content-center\">\n                            <label class=\"col-12 col-md-4 col-xl-3\"><span>*</span>\n                                Status</label>\n                            <div class=\"col-12 col-md-7 col-xl-8\">\n                                <select class=\"form-control\" formControlName=\"status\">\n                                    <option disabled selected>&#45;&#45;Select&#45;&#45;</option>\n                                    <option value=\"1\">Active</option>\n                                    <option value=\"2\">In-Active</option>\n<!--                                    <option *ngIf=\"type =='edit'\" value=\"3\">Disengaged</option>-->\n<!--                                    <option *ngIf=\"type =='edit'\" value=\"4\">Deleted</option>-->\n                                </select>\n                                <em *ngIf=\"!contentForm.get('status').valid && (contentForm.get('status').dirty || contentForm.get('status').touched)\" class=\"error\">Status is required</em>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"card-footer px-4 py-3\">\n                    <div class=\"pull-right\">\n                        <button (click)=\"addContent('add')\" *ngIf=\"type == 'add'\" class=\"btn btn-primary\" type=\"button\">Save</button>\n                        <button (click)=\"addContent('edit')\" *ngIf=\"type == 'edit'\" class=\"btn btn-primary\" type=\"button\">Update</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.FormBuilder }, { type: i3.NgbModal }, { type: i1.Router }, { type: i4.CommonDataService }, { type: i5.CommonService }, { type: i6.ToastrService }, { type: i7.AuthService }, { type: i8.ConfigurationService }, { type: i9.StudentService }], { attachment: [{
            type: ViewChild,
            args: ['attachments']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RepositoryAddComponent, { className: "RepositoryAddComponent" }); })();
//# sourceMappingURL=repository-add.component.js.map