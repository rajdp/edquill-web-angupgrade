import { Component, HostListener, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { TreeviewContentfolderComponent } from '../../auth/treeview-contentfolder/treeview-contentfolder.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
import * as i4 from "../../../shared/service/classroom.service";
import * as i5 from "../../../shared/service/common-data.service";
import * as i6 from "../../../shared/service/common.service";
import * as i7 from "ngx-toastr";
import * as i8 from "../../../shared/service/auth.service";
import * as i9 from "../../../shared/service/book.service";
import * as i10 from "../../../shared/service/School.service";
import * as i11 from "../../../shared/service/newsubject.service";
import * as i12 from "../../../shared/service/validation.service";
import * as i13 from "../../../shared/service/configuration.service";
import * as i14 from "../../../shared/service/creator.service";
import * as i15 from "@angular/common";
import * as i16 from "@ng-select/ng-select";
import * as i17 from "ng2-pdf-viewer";
import * as i18 from "../../../shared/directives/file-drag-n-drop.directive";
import * as i19 from "../../auth/confirm-content-assign/confirm-content-assign.component";
import * as i20 from "../../auth/treeview-contentfolder/treeview-contentfolder.component";
const _c0 = ["viewPdf"];
const _c1 = ["attachments"];
const _c2 = ["attachments1"];
const _c3 = ["deleteDialog"];
const _c4 = ["addBranch"];
const _c5 = ["assignContentToClass"];
const _c6 = ["assignTemplate"];
const _c7 = ["getLinkRedirection"];
const _c8 = a0 => ({ "visibility": a0 });
const _c9 = a0 => ({ "background-color": a0 });
const _c10 = () => ({ standalone: true });
function AddBooksComponent_div_0_form_13_div_78_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 70)(1, "div", 71)(2, "div", 72)(3, "div", 73)(4, "span", 74);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small", 75);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "i", 76);
    i0.ɵɵlistener("click", function AddBooksComponent_div_0_form_13_div_78_Template_i_click_8_listener() { const i_r4 = i0.ɵɵrestoreView(_r3).index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.deleteCommonLink(i_r4)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "span", 77);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 78);
    i0.ɵɵtwoWayListener("ngModelChange", function AddBooksComponent_div_0_form_13_div_78_Template_input_ngModelChange_11_listener($event) { const item_r5 = i0.ɵɵrestoreView(_r3).$implicit; i0.ɵɵtwoWayBindingSet(item_r5.name, $event) || (item_r5.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r5.type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(6, _c9, item_r5.resource_type == "2" ? "#ca9be2" : item_r5.resource_type == "3" ? "cadetblue" : "#3693b7"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r5.resource_type == "2" ? "Assignment" : item_r5.resource_type == "3" ? "Assessment" : "Resource", "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r5.link);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(8, _c10));
    i0.ɵɵtwoWayProperty("ngModel", item_r5.name);
} }
function AddBooksComponent_div_0_form_13_h3_80_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3");
    i0.ɵɵtext(1, "Files");
    i0.ɵɵelementEnd();
} }
function AddBooksComponent_div_0_form_13_div_82_small_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 94);
    i0.ɵɵtext(1, "Resource");
    i0.ɵɵelementEnd();
} }
function AddBooksComponent_div_0_form_13_div_82_small_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 95);
    i0.ɵɵtext(1, "Assignment");
    i0.ɵɵelementEnd();
} }
function AddBooksComponent_div_0_form_13_div_82_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 96);
    i0.ɵɵtext(1, "Assessment");
    i0.ɵɵelementEnd();
} }
function AddBooksComponent_div_0_form_13_div_82_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 99)(1, "label")(2, "a", 100);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "i", 101);
    i0.ɵɵlistener("click", function AddBooksComponent_div_0_form_13_div_82_div_13_div_1_Template_i_click_4_listener() { const ctx_r10 = i0.ɵɵrestoreView(_r10); const list_r12 = ctx_r10.$implicit; const j_r13 = ctx_r10.index; const ind_r9 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.editLink(ind_r9, j_r13, list_r12)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "i", 102);
    i0.ɵɵlistener("click", function AddBooksComponent_div_0_form_13_div_82_div_13_div_1_Template_i_click_5_listener() { const j_r13 = i0.ɵɵrestoreView(_r10).index; const ind_r9 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openConfirmDialog({ pdfIndex: ind_r9, linkIndex: j_r13 }, "link")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r12 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("href", list_r12.link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(list_r12.type);
} }
function AddBooksComponent_div_0_form_13_div_82_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 97);
    i0.ɵɵtemplate(1, AddBooksComponent_div_0_form_13_div_82_div_13_div_1_Template, 6, 2, "div", 98);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", f_r8.links);
} }
function AddBooksComponent_div_0_form_13_div_82_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 79)(1, "div", 80)(2, "div", 81)(3, "div", 82);
    i0.ɵɵtemplate(4, AddBooksComponent_div_0_form_13_div_82_small_4_Template, 2, 0, "small", 83)(5, AddBooksComponent_div_0_form_13_div_82_small_5_Template, 2, 0, "small", 84)(6, AddBooksComponent_div_0_form_13_div_82_small_6_Template, 2, 0, "small", 85);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 86)(8, "i", 87);
    i0.ɵɵlistener("click", function AddBooksComponent_div_0_form_13_div_82_Template_i_click_8_listener() { const ctx_r6 = i0.ɵɵrestoreView(_r6); const f_r8 = ctx_r6.$implicit; const ind_r9 = ctx_r6.index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openLinkPage(f_r8.resource_type, ind_r9)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "i", 88);
    i0.ɵɵlistener("click", function AddBooksComponent_div_0_form_13_div_82_Template_i_click_9_listener() { const ind_r9 = i0.ɵɵrestoreView(_r6).index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openConfirmDialog(ind_r9, "pdf")); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 89)(11, "h5", 90);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(13, AddBooksComponent_div_0_form_13_div_82_div_13_Template, 2, 1, "div", 91);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 92)(15, "input", 93);
    i0.ɵɵtwoWayListener("ngModelChange", function AddBooksComponent_div_0_form_13_div_82_Template_input_ngModelChange_15_listener($event) { const f_r8 = i0.ɵɵrestoreView(_r6).$implicit; i0.ɵɵtwoWayBindingSet(f_r8.image, $event) || (f_r8.image = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const f_r8 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("title", f_r8.image);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", f_r8.resource_type == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", f_r8.resource_type == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", f_r8.resource_type == "3");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(f_r8.image + ".pdf");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", f_r8.links.length != 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(8, _c10));
    i0.ɵɵtwoWayProperty("ngModel", f_r8.image);
} }
function AddBooksComponent_div_0_form_13_em_93_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 103);
    i0.ɵɵtext(1, "Subject is required");
    i0.ɵɵelementEnd();
} }
function AddBooksComponent_div_0_form_13_option_110_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 62);
    i0.ɵɵtext(1, "Access to all within Org");
    i0.ɵɵelementEnd();
} }
function AddBooksComponent_div_0_form_13_option_111_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 63);
    i0.ɵɵtext(1, "Access only for you");
    i0.ɵɵelementEnd();
} }
function AddBooksComponent_div_0_form_13_option_112_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 104);
    i0.ɵɵtext(1, "Access within corporate");
    i0.ɵɵelementEnd();
} }
function AddBooksComponent_div_0_form_13_option_134_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 104);
    i0.ɵɵtext(1, "Deleted");
    i0.ɵɵelementEnd();
} }
function AddBooksComponent_div_0_form_13_em_135_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 103);
    i0.ɵɵtext(1, "Status is required");
    i0.ɵɵelementEnd();
} }
function AddBooksComponent_div_0_form_13_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 16)(1, "div", 17)(2, "div", 18)(3, "div", 19)(4, "div", 20)(5, "div", 21)(6, "div", 22)(7, "h4", 23);
    i0.ɵɵtext(8, "Assignment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "label", 24);
    i0.ɵɵlistener("filesChangeEmiter", function AddBooksComponent_div_0_form_13_Template_label_filesChangeEmiter_9_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onFileChange($event, "2")); });
    i0.ɵɵelementStart(10, "div", 25)(11, "div", 26)(12, "input", 27);
    i0.ɵɵlistener("change", function AddBooksComponent_div_0_form_13_Template_input_change_12_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.uploadFile($event, "2")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "label", 28);
    i0.ɵɵtext(14, "Drag and drop");
    i0.ɵɵelement(15, "br");
    i0.ɵɵtext(16, " or ");
    i0.ɵɵelement(17, "br");
    i0.ɵɵtext(18, "browse your PDF");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(19, "label", 29);
    i0.ɵɵlistener("click", function AddBooksComponent_div_0_form_13_Template_label_click_19_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openLinkPage("4", "2")); });
    i0.ɵɵelementStart(20, "div", 25)(21, "div", 26)(22, "label");
    i0.ɵɵtext(23, "Click here to add Link");
    i0.ɵɵelement(24, "br");
    i0.ɵɵtext(25, " to create content");
    i0.ɵɵelement(26, "br");
    i0.ɵɵelementStart(27, "small");
    i0.ɵɵtext(28, "(PPT, Word, Audio, Video)");
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(29, "div", 21)(30, "div", 22)(31, "h4", 30);
    i0.ɵɵtext(32, "Assessment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "label", 31);
    i0.ɵɵlistener("filesChangeEmiter", function AddBooksComponent_div_0_form_13_Template_label_filesChangeEmiter_33_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onFileChange($event, "3")); });
    i0.ɵɵelementStart(34, "div", 25)(35, "div", 26)(36, "input", 32);
    i0.ɵɵlistener("change", function AddBooksComponent_div_0_form_13_Template_input_change_36_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.uploadFile($event, "3")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "label", 33);
    i0.ɵɵtext(38, "Drag and drop");
    i0.ɵɵelement(39, "br");
    i0.ɵɵtext(40, " or ");
    i0.ɵɵelement(41, "br");
    i0.ɵɵtext(42, "browse your PDF");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(43, "label", 29);
    i0.ɵɵlistener("click", function AddBooksComponent_div_0_form_13_Template_label_click_43_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openLinkPage("4", "3")); });
    i0.ɵɵelementStart(44, "div", 25)(45, "div", 26)(46, "label");
    i0.ɵɵtext(47, "Click here to add Link");
    i0.ɵɵelement(48, "br");
    i0.ɵɵtext(49, " to create content");
    i0.ɵɵelement(50, "br");
    i0.ɵɵelementStart(51, "small");
    i0.ɵɵtext(52, "(PPT, Word, Audio, Video)");
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(53, "div", 21)(54, "div", 22)(55, "h4", 34);
    i0.ɵɵtext(56, "Resource");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "label", 35);
    i0.ɵɵlistener("filesChangeEmiter", function AddBooksComponent_div_0_form_13_Template_label_filesChangeEmiter_57_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onFileChange($event, "1")); });
    i0.ɵɵelementStart(58, "div", 25)(59, "div", 26)(60, "input", 36);
    i0.ɵɵlistener("change", function AddBooksComponent_div_0_form_13_Template_input_change_60_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.uploadFile($event, "1")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "label", 37);
    i0.ɵɵtext(62, "Drag and drop");
    i0.ɵɵelement(63, "br");
    i0.ɵɵtext(64, " or ");
    i0.ɵɵelement(65, "br");
    i0.ɵɵtext(66, "browse your PDF");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(67, "label", 29);
    i0.ɵɵlistener("click", function AddBooksComponent_div_0_form_13_Template_label_click_67_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openLinkPage("4", "1")); });
    i0.ɵɵelementStart(68, "div", 25)(69, "div", 26)(70, "label");
    i0.ɵɵtext(71, "Click here to add Link");
    i0.ɵɵelement(72, "br");
    i0.ɵɵtext(73, " to create content");
    i0.ɵɵelement(74, "br");
    i0.ɵɵelementStart(75, "small");
    i0.ɵɵtext(76, "(PPT, Word, Audio, Video)");
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(77, "div", 38);
    i0.ɵɵtemplate(78, AddBooksComponent_div_0_form_13_div_78_Template, 12, 9, "div", 39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(79, "hr");
    i0.ɵɵtemplate(80, AddBooksComponent_div_0_form_13_h3_80_Template, 2, 0, "h3", 40);
    i0.ɵɵelementStart(81, "div", 41);
    i0.ɵɵtemplate(82, AddBooksComponent_div_0_form_13_div_82_Template, 16, 9, "div", 42);
    i0.ɵɵelement(83, "div");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(84, "div", 43)(85, "label", 44)(86, "span", 45);
    i0.ɵɵtext(87, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(88, " Subject Name");
    i0.ɵɵelementStart(89, "span", 46);
    i0.ɵɵtext(90, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(91, "div", 47);
    i0.ɵɵelement(92, "ng-select", 48);
    i0.ɵɵtemplate(93, AddBooksComponent_div_0_form_13_em_93_Template, 2, 0, "em", 49);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(94, "div", 43)(95, "label", 44)(96, "span", 45);
    i0.ɵɵtext(97, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(98, " Grade Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(99, "div", 47);
    i0.ɵɵelement(100, "ng-select", 50);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(101, "div", 43)(102, "label", 51)(103, "span", 45);
    i0.ɵɵtext(104, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(105, " Access Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(106, "div", 52)(107, "select", 53)(108, "option", 54);
    i0.ɵɵtext(109, "--Select--");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(110, AddBooksComponent_div_0_form_13_option_110_Template, 2, 0, "option", 55)(111, AddBooksComponent_div_0_form_13_option_111_Template, 2, 0, "option", 56)(112, AddBooksComponent_div_0_form_13_option_112_Template, 2, 0, "option", 57);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(113, "div", 43)(114, "label", 51)(115, "span", 45);
    i0.ɵɵtext(116, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(117, " Content Folder");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(118, "div", 52)(119, "div", 58);
    i0.ɵɵelement(120, "app-treeview-contentfolder", 59);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(121, "div", 43)(122, "label", 44)(123, "span");
    i0.ɵɵtext(124, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(125, " Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(126, "div", 47)(127, "select", 60)(128, "option", 61);
    i0.ɵɵtext(129, "--Select--");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(130, "option", 62);
    i0.ɵɵtext(131, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(132, "option", 63);
    i0.ɵɵtext(133, "Suspended");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(134, AddBooksComponent_div_0_form_13_option_134_Template, 2, 0, "option", 57);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(135, AddBooksComponent_div_0_form_13_em_135_Template, 2, 0, "em", 49);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(136, "div", 64)(137, "label", 44)(138, "span", 45);
    i0.ɵɵtext(139, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(140, " Download Content");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(141, "div", 47)(142, "div", 65);
    i0.ɵɵelement(143, "input", 66);
    i0.ɵɵelementStart(144, "label", 67);
    i0.ɵɵtext(145, "Allow");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(146, "div", 7)(147, "div", 68)(148, "button", 69);
    i0.ɵɵlistener("click", function AddBooksComponent_div_0_form_13_Template_button_click_148_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addbooks(ctx_r1.type)); });
    i0.ɵɵtext(149);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("formGroup", ctx_r1.booksform);
    i0.ɵɵadvance(78);
    i0.ɵɵproperty("ngForOf", ctx_r1.commonLinks);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.pdfpath.length > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.pdfpath);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(16, _c8, ctx_r1.roleid == "4" ? "none" : "hidden"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("items", ctx_r1.subjectData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.roleid == "4" && (!ctx_r1.booksform.get("subject").valid && (ctx_r1.booksform.get("subject").dirty || ctx_r1.booksform.get("subject").touched)));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("items", ctx_r1.gradeData);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngIf", ctx_r1.roleid != "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.roleid != "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.roleid == "6");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("type", ctx_r1.type)("selectedbatch", ctx_r1.batchid);
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("ngIf", ctx_r1.type == "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.booksform.get("status").valid && (ctx_r1.booksform.get("status").dirty || ctx_r1.booksform.get("status").touched));
    i0.ɵɵadvance(14);
    i0.ɵɵtextInterpolate(ctx_r1.type ? "Save" : "Update");
} }
function AddBooksComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "h5", 11);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "label", 12);
    i0.ɵɵtext(8, "All fields marked with ");
    i0.ɵɵelementStart(9, "span", 13);
    i0.ɵɵtext(10, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, " are required");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 14);
    i0.ɵɵtemplate(13, AddBooksComponent_div_0_form_13_Template, 150, 18, "form", 15);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", ctx_r1.type, " Content");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.uploadType == "multi");
} }
function AddBooksComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 105)(1, "div", 6)(2, "div", 7)(3, "div", 106)(4, "h4", 107);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 108)(7, "i", 109);
    i0.ɵɵlistener("click", function AddBooksComponent_ng_template_1_Template_i_click_7_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 110);
    i0.ɵɵelement(9, "pdf-viewer", 111);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.pdfName);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("src", ctx_r1.pdfTemplate);
} }
function AddBooksComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 105)(1, "div", 6)(2, "div", 7)(3, "div", 112)(4, "h5", 113);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(6, "div", 114)(7, "button", 115);
    i0.ɵɵlistener("click", function AddBooksComponent_ng_template_3_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(8, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 116);
    i0.ɵɵlistener("click", function AddBooksComponent_ng_template_3_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.isDeleteLink ? ctx_r1.deleteLink() : ctx_r1.deleteFromArray(ctx_r1.selectedDeletePdf.index)); });
    i0.ɵɵtext(10, "Confirm");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Are sure to delete this ", ctx_r1.isDeleteLink ? "Link" : "PDF", "?");
} }
function AddBooksComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 117)(1, "h5", 118);
    i0.ɵɵtext(2, "Assign Content");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 105)(4, "div", 7)(5, "div", 110)(6, "h5")(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(9, "?");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 114)(11, "button", 119);
    i0.ɵɵlistener("click", function AddBooksComponent_ng_template_5_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.dontAssign()); });
    i0.ɵɵtext(12, "No");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 120);
    i0.ɵɵlistener("click", function AddBooksComponent_ng_template_5_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.assignContent()); });
    i0.ɵɵtext(14, "Yes");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("Do you want to assign this content to the Class ", ctx_r1.contentCreatedForm != "class" ? "or Content Folder" : "", "");
} }
function AddBooksComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-confirm-content-assign", 121);
    i0.ɵɵlistener("closePopUp", function AddBooksComponent_ng_template_7_Template_app_confirm_content_assign_closePopUp_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeAssignPopUp()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("multiContentId", ctx_r1.multiContentId)("classData", ctx_r1.classDetails)("contentDetails", ctx_r1.assignData);
} }
function AddBooksComponent_ng_template_9_div_10_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 139);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r19 = ctx.$implicit;
    i0.ɵɵproperty("value", list_r19);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(list_r19 == "ppt" ? i0.ɵɵpipeBind1(2, 2, list_r19) : i0.ɵɵpipeBind1(3, 4, list_r19));
} }
function AddBooksComponent_ng_template_9_div_10_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 140);
    i0.ɵɵelement(1, "input", 141);
    i0.ɵɵelementEnd();
} }
function AddBooksComponent_ng_template_9_div_10_div_10_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 145);
    i0.ɵɵlistener("click", function AddBooksComponent_ng_template_9_div_10_div_10_i_1_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.addarray()); });
    i0.ɵɵelementEnd();
} }
function AddBooksComponent_ng_template_9_div_10_div_10_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 146);
    i0.ɵɵlistener("click", function AddBooksComponent_ng_template_9_div_10_div_10_i_2_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r21); const i_r22 = i0.ɵɵnextContext(2).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.removeArray(i_r22)); });
    i0.ɵɵelementEnd();
} }
function AddBooksComponent_ng_template_9_div_10_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 142);
    i0.ɵɵtemplate(1, AddBooksComponent_ng_template_9_div_10_div_10_i_1_Template, 1, 0, "i", 143)(2, AddBooksComponent_ng_template_9_div_10_div_10_i_2_Template, 1, 0, "i", 144);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const first_r23 = i0.ɵɵnextContext().first;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", first_r23);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !first_r23);
} }
function AddBooksComponent_ng_template_9_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 129)(1, "div", 130)(2, "div", 131)(3, "select", 132)(4, "option", 133);
    i0.ɵɵtext(5, "Select Link Type");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, AddBooksComponent_ng_template_9_div_10_option_6_Template, 4, 6, "option", 134);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, AddBooksComponent_ng_template_9_div_10_div_7_Template, 2, 0, "div", 135);
    i0.ɵɵelementStart(8, "div", 136);
    i0.ɵɵelement(9, "input", 137);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, AddBooksComponent_ng_template_9_div_10_div_10_Template, 3, 2, "div", 138);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const i_r22 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", i_r22);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.linksType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.resourceLinkList != "4");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.resourceLinkList != "4" && ctx_r1.isEditLink ? "col-md-6" : ctx_r1.resourceLinkList != "4" && !ctx_r1.isEditLink ? "col-md-5" : ctx_r1.isEditLink ? "col-md-9" : "col-md-8");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isEditLink);
} }
function AddBooksComponent_ng_template_9_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 116);
    i0.ɵɵlistener("click", function AddBooksComponent_ng_template_9_button_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getLinkDetails(ctx_r1.booksform.value)); });
    i0.ɵɵtext(1, "Confirm");
    i0.ɵɵelementEnd();
} }
function AddBooksComponent_ng_template_9_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 116);
    i0.ɵɵlistener("click", function AddBooksComponent_ng_template_9_button_15_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.updateLink(ctx_r1.booksform.value)); });
    i0.ɵɵtext(1, "Update");
    i0.ɵɵelementEnd();
} }
function AddBooksComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 122)(1, "h3", 123)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "p", 124);
    i0.ɵɵlistener("click", function AddBooksComponent_ng_template_9_Template_p_click_4_listener() { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelement(5, "i", 125);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 105)(7, "div", 6)(8, "div", 7)(9, "div", 126);
    i0.ɵɵtemplate(10, AddBooksComponent_ng_template_9_div_10_Template, 11, 6, "div", 127);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(11, "div", 114)(12, "button", 115);
    i0.ɵɵlistener("click", function AddBooksComponent_ng_template_9_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(13, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, AddBooksComponent_ng_template_9_button_14_Template, 2, 0, "button", 128)(15, AddBooksComponent_ng_template_9_button_15_Template, 2, 0, "button", 128);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.resourceLinkList == "1" ? "Resource" : ctx_r1.resourceLinkList == "2" ? "Assignment" : ctx_r1.resourceLinkList == "3" ? "Assessment" : "Add Link");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r1.booksform);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.booksform.get("resourceLink")["controls"]);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1.isEditLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isEditLink);
} }
export class AddBooksComponent {
    constructor(route, formBuilder, modalService, branchService, commondata, common, toastr, auth, book, brandservices, newSubject, router, validationService, confi, creatorService) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.branchService = branchService;
        this.commondata = commondata;
        this.common = common;
        this.toastr = toastr;
        this.auth = auth;
        this.book = book;
        this.brandservices = brandservices;
        this.newSubject = newSubject;
        this.router = router;
        this.validationService = validationService;
        this.confi = confi;
        this.creatorService = creatorService;
        this.uploadType = 'multi';
        this.resourceType = '1';
        this.getNewlinks = [];
        this.showPage = false;
        this.batchid = [];
        this.items = [];
        this.contentCreatedForm = '';
        this.isDeleteLink = false;
        this.isEditLink = false;
        this.commonLinks = [];
        this.files = [];
        this.linksType = ['video', 'audio', 'document', 'ppt', 'Others'];
        this.linkUploadIndex = 0;
        this.multiContentId = [];
        this.manageClass = true;
        this.webhost = this.confi.getimgUrl();
        this.pdfpath = [];
        this.answerpdfpath = [];
        this.branchForm = this.formBuilder.group({
            batchname: ['', Validators.required]
        });
        console.log(this.resourceData, 'resourceData');
        this.roleid = this.auth.getRoleId();
        this.schooldetails = JSON.parse(this.auth.getSessionData('rista_data1'));
        if (this.roleid == '2') {
            this.schoolid = this.auth.getSessionData('school_id');
            this.schoolName = this.auth.getSessionData('school_name');
        }
        else if (this.roleid == '4') {
            this.schoolid = this.schooldetails.school_id;
            this.schoolName = this.schooldetails.name;
        }
        else if (this.roleid == '6') {
            const schoolCorporate = JSON.parse(this.auth.getSessionData('school_details'));
            this.schoolid = schoolCorporate[0].school_id;
            this.schoolName = schoolCorporate[0].name;
        }
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.manageClass = this.auth.manageClass;
        this.booksform = this.formBuilder.group({
            publicationCode: '',
            name: this.uploadType == 'single' ? ['', Validators.required] : '',
            description: '',
            status: ['', Validators.required],
            schoolId: this.uploadType == 'single' ? ['', Validators.required] : '',
            grade: '',
            resourcesLink: '',
            subject: this.roleid == '4' ? ['', Validators.required] : '',
            bookType: this.uploadType == 'single' ? ['', Validators.required] : '',
            access: '1',
            downloadContent: '',
            resourceLink: this.formBuilder.array([this.addResLink()]),
        });
        this.newSubject.schoolChange.subscribe(params => {
            if (params != '') {
                if (this.router.url.includes('create-Books')) {
                    this.init(params);
                }
            }
            else {
                this.init(this.auth.getSessionData('school_id'));
            }
        });
        if (this.type == 'edit') {
            this.allowDropDown = true;
            this.showPage = true;
            this.newSubject.allowSchoolChange(this.allowDropDown);
            this.editData = JSON.parse(this.auth.getSessionData('editBook'));
            this.base64Books(this.editData.content_id);
            this.batchid = this.editData.batch_id;
            this.book_id = this.editData.book_id;
            this.booksform.controls.publicationCode.patchValue(this.editData.publication_code);
            this.booksform.controls.name.patchValue(this.editData.name);
            this.booksform.controls.grade.patchValue(this.editData.grade);
            this.booksform.controls.subject.patchValue(this.editData.subject);
            this.booksform.controls.description.patchValue(this.editData.description);
            if (this.editData.links != '') {
                const links = this.editData.links;
                for (let i = 0; i < links.length; i++) {
                    this.getNewlinks.push({ display: links[i], value: links[i] });
                }
            }
            this.booksform.controls.resourcesLink.patchValue(this.getNewlinks);
            this.booksform.controls.status.patchValue(this.editData.status == 'Active' ? 1 : this.editData.status == 'Suspended' ? 2 :
                this.editData.status == 'Disengaged' ? 3 : 4);
            this.booksform.controls.schoolId.patchValue(this.editData.school_name);
            this.showAnswerPdf = this.editData.content_type != '1';
            this.booksform.controls.bookType.patchValue(this.editData.content_type);
            this.booksform.controls.access.patchValue(this.editData.access == 'Access to all within Org' ? 1 :
                this.editData.access == 'Access only for you' ? 2 : this.editData.access == 'Public' ? 3 : 4);
            this.booksform.controls.downloadContent.patchValue(this.editData.download == '1');
        }
        else {
            this.showPage = true;
            this.allowDropDown = false;
            this.showAnswerPdf = false;
            this.newSubject.allowSchoolChange(this.allowDropDown);
            this.booksform.controls.publicationCode.patchValue('');
            this.batchid = [];
            this.booksform.controls.grade.patchValue(null);
            this.booksform.controls.subject.patchValue(null);
            this.booksform.controls.name.patchValue('');
            this.booksform.controls.description.patchValue('');
            this.booksform.controls.resourcesLink.patchValue('');
            this.booksform.controls.status.patchValue('1');
            this.booksform.controls.schoolId.patchValue(this.schoolName);
            this.booksform.controls.bookType.patchValue('1');
            this.booksform.controls.access.patchValue(this.auth.getRoleId() == '6' ? '4' : '1');
        }
        this.contentCreatedForm = this.auth.getSessionData('assignedForm');
    }
    ngOnInit() {
        this.allowDropDown = false;
    }
    onDragEnd(event) {
        event.preventDefault();
        console.log(event, 'event drag end');
    }
    init(id) {
        this.teacherType = this.auth.getSessionData('teacher_type');
        this.schoolName = this.auth.getSessionData('school_name');
        this.schooldetails = JSON.parse(this.auth.getSessionData('rista_data1'));
        this.schoolid = id;
        this.booksform.controls.schoolId.patchValue(this.auth.getSessionData('school_name'));
        this.booksform.controls.grade.patchValue(null);
        this.booksform.controls.subject.patchValue(null);
        this.subjectList();
        this.gradeList();
    }
    addResLink() {
        return this.formBuilder.group({
            link: '',
            type: null,
            name: ''
        });
    }
    addarray() {
        this.resourceLink = this.booksform.get('resourceLink');
        this.resourceLink.push(this.addResLink());
    }
    removeArray(index) {
        this.resourceLink = this.booksform.get('resourceLink');
        this.resourceLink.removeAt(index);
    }
    deleteCommonLink(index) {
        this.commonLinks.splice(index, 1);
    }
    backAction() {
        this.router.navigate(['/Books/list-Books']);
    }
    openLinkPage(type, index) {
        if (type == '4') {
            this.resourceLinkType = index;
        }
        else {
            this.linkUploadIndex = index;
        }
        this.resourceLinkList = [];
        this.resourceLinkList = type;
        this.modalRef = this.modalService.open(this.getLinkRedirection, { size: 'xl', backdrop: 'static' });
    }
    getLinkDetails(value) {
        let valArr = value.resourceLink.filter((items) => {
            return items.link != '' && items.link != null && items.type != '' && items.type != null;
        });
        if (this.resourceLinkList == '4') {
            valArr.forEach((items) => {
                items.link = items.link.includes('http') ? items.link : 'https://' + items.link;
                items.resource_type = this.resourceLinkType;
                items.name = '';
            });
            this.commonLinks = [...this.commonLinks, ...valArr];
        }
        else {
            valArr.forEach((items) => {
                items.link = items.link.includes('http') ? items.link : 'https://' + items.link;
            });
            this.pdfpath[this.linkUploadIndex].links = [...this.pdfpath[this.linkUploadIndex].links, ...valArr];
        }
        this.close();
    }
    editLink(id, index, detail) {
        this.isEditLink = true;
        this.booksform['controls'].resourceLink['controls'][0]['controls']['link'].patchValue(detail.link);
        this.booksform['controls'].resourceLink['controls'][0]['controls']['type'].patchValue(detail.type);
        this.editingIndex = { pdfIndex: id, linkIndex: index };
        this.modalRef = this.modalService.open(this.getLinkRedirection, { size: 'lg', backdrop: 'static' });
    }
    updateLink(value) {
        const editVal = value.resourceLink[0];
        editVal.link = editVal.link.includes('http') ? editVal.link : 'https://' + editVal.link;
        this.pdfpath[this.editingIndex.pdfIndex].links[this.editingIndex.linkIndex] = editVal;
        this.close();
    }
    validateLinks() {
        let valid = false;
        this.commonLinks.forEach((items) => {
            valid = items.name == '';
        });
        return !valid;
    }
    addbooks(valve) {
        const batchId = this.treeviewCompoent.batchid;
        if ((this.roleid == '4' && this.booksform.valid) || (this.roleid != '4' && (this.booksform.valid || this.uploadType == 'multi'))) {
            if ((this.pdfpath != undefined && this.pdfpath?.length != 0) || this.commonLinks.length != 0) {
                if (this.validateLinks()) {
                    if (this.type == 'add') {
                        if (this.roleid == '2') {
                            this.schoolid = this.auth.getSessionData('school_id');
                        }
                        else if (this.roleid == '4') {
                            this.schoolid = this.schooldetails.school_id;
                        }
                        this.pdfpath.forEach(item => item.image = item.image + '.pdf');
                    }
                    else if (this.type == 'edit') {
                        this.schoolid = this.editData.school_id;
                    }
                    if (this.booksform.controls.resourcesLink.value != '' && this.uploadType == 'single') {
                        this.videoArray = [];
                        const video = this.booksform.controls.resourcesLink.value;
                        for (let i = 0; i < video.length; i++) {
                            this.videoArray.push(video[i].value);
                        }
                    }
                    if (!this.showAnswerPdf) {
                        this.answerpdfpath = [];
                    }
                    this.commondata.showLoader(true);
                    const data = {
                        platform: 'web',
                        role_id: this.auth.getRoleId(),
                        user_id: this.auth.getUserId(),
                        publication_code: this.booksform.controls.publicationCode.value,
                        name: this.booksform.controls.name.value,
                        description: this.booksform.controls.description.value,
                        status: this.booksform.controls.status.value,
                        grade: this.booksform.controls.grade.value == null ? [] : this.booksform.controls.grade.value,
                        subject: this.booksform.controls.subject.value == null ? [] : this.booksform.controls.subject.value,
                        school_id: this.schoolid,
                        book_id: this.book_id ? this.book_id : '',
                        file_path: this.pdfpath,
                        answerkey_path: this.answerpdfpath,
                        content_type: this.uploadType == 'single' ? this.booksform.controls.bookType.value : undefined,
                        access: this.booksform.controls.access.value,
                        other_links: this.commonLinks,
                        download: this.booksform.controls.downloadContent.value == true ? '1' : '0',
                        type: this.uploadType == 'single' ? '1' : '2',
                        corporate_id: this.auth.getSessionData('corporate_id') == null ? '0' : this.auth.getSessionData('corporate_id'),
                        batch_id: batchId
                    };
                    if (valve == 'add') {
                        this.book.addBook(data).subscribe((successData) => {
                            this.addBookSuccess(successData);
                        }, (error) => {
                            this.pdfpath.map(file => file.image = file.image.split('.')[0]);
                            console.error(error, 'error');
                            this.toastr.error('Server error, Please contact admin');
                        });
                    }
                    else if (valve == 'edit') {
                        data['content_id'] = this.editData.content_id;
                        this.book.editBook(data).subscribe((successData) => {
                            this.addBookSuccess(successData);
                        }, (error) => {
                            console.error(error);
                        });
                    }
                }
                else {
                    this.toastr.error('Please Add Content Name to Links', 'Content');
                }
            }
            else {
                console.log(this.commonLinks, 'commonLinks');
                this.toastr.error('Please Upload Pdf or Links to add Content', 'Content');
            }
        }
        else {
            this.validationService.validateAllFormFields(this.booksform);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    addBookSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.toastr.success(successData.ResponseObject, 'Content');
            this.multiContentId = successData.content;
            this.modalRef = this.modalService.open(this.assignContentToClass, { size: 'md', backdrop: 'static' });
        }
        else {
            this.commondata.showLoader(false);
            this.pdfpath.map(file => file.image = file.image.split('.')[0]);
            this.toastr.error(successData.ErrorObject, 'Content');
        }
    }
    base64Books(id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: id
        };
        this.creatorService.detaillist(data).subscribe((successData) => {
            this.contentDetailsSuccess(successData);
        }, (error) => {
            console.log(error, 'error');
        });
    }
    contentDetailsSuccess(successData) {
        if (successData.IsSuccess) {
            this.bookBase64data = successData.ResponseObject;
            this.pdfpath = this.common.convertBase64(this.bookBase64data.file_path);
            this.answerpdfpath = this.common.convertBase64(this.bookBase64data.answerkey_path);
            this.pdfName = this.pdfpath[0]?.image;
            this.answerpdfName = this.answerpdfpath[0]?.image;
        }
    }
    gradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolid,
            type: 'active'
        };
        this.book.gradeList(data).subscribe((successData) => {
            this.gradeListSuccess(successData);
        }, (error) => {
            console.log(error, 'error');
        });
    }
    gradeListSuccess(successData) {
        if (successData.IsSuccess) {
            this.gradeData = successData.ResponseObject;
        }
    }
    subjectList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolid,
            type: 'active'
        };
        this.book.subjectList(data).subscribe((successData) => {
            this.subjectListSuccess(successData);
        }, (error) => {
            console.log(error, 'error');
        });
    }
    subjectListSuccess(successData) {
        if (successData.IsSuccess) {
            this.subjectData = successData.ResponseObject;
        }
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
                console.log(pic, 'picture');
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
            uploadtype: type == '1' ? 'content' : 'answerkey'
        };
        this.common.fileUpload(data).subscribe((successData) => {
            this.pdfuploadSuccess(successData, type);
        }, (error) => {
            this.toastr.error('Invalid File Format');
        });
    }
    pdfuploadSuccess(successData, type) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.response = successData.ResponseObject;
            console.log(this.response, 'response11');
            if (type == '1') {
                this.pdfpath = [];
                this.pdfpath.push(this.response.imagepath[0]);
                this.pdfName = this.response.imagepath[0].image;
            }
            else if (type == '2') {
                this.answerpdfpath = [];
                this.answerpdfpath.push(this.response.imagepath[0]);
                this.answerpdfName = this.response.imagepath[0].image;
            }
            else if (type == '3') {
                this.response.imagepath.forEach((item) => {
                    item.resource_type = this.resourceType;
                    const name = item.image.split('.');
                    name.pop();
                    item.image = name.join('.');
                    item.links = [];
                });
                this.pdfpath = [...this.pdfpath, ...this.response.imagepath];
                console.log(this.pdfpath, 'pdfPath');
            }
        }
        else {
            this.toastr.error('Invalid File Format');
        }
    }
    deletePdf(id, type) {
        if (type == 1) {
            this.attachment.nativeElement.value = '';
            this.pdfpath.splice(id, 1);
        }
        else {
            this.answerpdfpath = [];
            this.attachment1.nativeElement.value = '';
        }
    }
    numberPattern(event) {
        this.validationService.numberValidate1(event);
    }
    viewDetail(data) {
        this.pdfName = data.image;
        this.pdfTemplate = this.webhost + '/' + data.original_image_url;
        this.modalRef = this.modalService.open(this.viewPdf, { size: 'xl' });
    }
    close() {
        this.modalRef.close();
        this.isEditLink = false;
        const LinkArrayControl = this.booksform.controls['resourceLink'];
        LinkArrayControl.reset();
        for (let i = LinkArrayControl.length; i >= 1; i--) {
            LinkArrayControl.removeAt(i);
        }
    }
    uploadFile(event, type) {
        this.resourceType = type;
        this.encodePdfFileAsURL(event, '3');
    }
    onFileChange(pFileList, type) {
        console.log(pFileList, 'pFileList');
        this.resourceType = type;
        this.files = [...pFileList];
        this.files.forEach((val) => {
            const split = val.image.split(',');
            val.image = split[1];
        });
        console.log(this.files, 'files');
        this.onUploadKYCFinishedpdf(this.files, 3);
    }
    deleteLink() {
        this.pdfpath[this.selectedDeletePdf.pdfIndex].links.splice(this.selectedDeletePdf.linkIndex, 1);
        this.close();
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
    deleteFromArray(index) {
        console.log(this.pdfpath);
        this.pdfpath.splice(index, 1);
        this.modalRef.close();
    }
    assignContent() {
        this.modalRef.close();
        this.classDetails = JSON.parse(this.auth.getSessionData('card-data'));
        this.modalRef = this.modalService.open(this.assignTemplate, { size: 'xl', backdrop: 'static' });
    }
    closeAssignPopUp() {
        this.auth.removeSessionData('assignedForm');
        this.modalRef.close();
    }
    dontAssign() {
        if (this.auth.getSessionData('assignedForm') == 'class') {
            this.auth.removeSessionData('content_assign');
            this.router.navigate(['class/topicsAndCurriculum/1']);
        }
        else if (this.auth.getSessionData('assignedForm') == 'content-Folder') {
            this.router.navigate(['class/view-assign/2']);
        }
        else if (this.auth.getSessionData('assignedForm') == 'classRoom') {
            this.router.navigate(['classroom/list-classroom']);
        }
        else {
            this.router.navigate(['repository/content-home']);
        }
        this.auth.setSessionData('resourceAccess', false);
        this.modalRef?.close();
        this.auth.removeSessionData('assignedForm');
    }
    static { this.ɵfac = function AddBooksComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddBooksComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.NgbModal), i0.ɵɵdirectiveInject(i4.ClassroomService), i0.ɵɵdirectiveInject(i5.CommonDataService), i0.ɵɵdirectiveInject(i6.CommonService), i0.ɵɵdirectiveInject(i7.ToastrService), i0.ɵɵdirectiveInject(i8.AuthService), i0.ɵɵdirectiveInject(i9.BookService), i0.ɵɵdirectiveInject(i10.SchoolService), i0.ɵɵdirectiveInject(i11.NewsubjectService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i12.ValidationService), i0.ɵɵdirectiveInject(i13.ConfigurationService), i0.ɵɵdirectiveInject(i14.CreatorService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddBooksComponent, selectors: [["app-add-books"]], viewQuery: function AddBooksComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
            i0.ɵɵviewQuery(_c4, 5);
            i0.ɵɵviewQuery(TreeviewContentfolderComponent, 5);
            i0.ɵɵviewQuery(_c5, 5);
            i0.ɵɵviewQuery(_c6, 5);
            i0.ɵɵviewQuery(_c7, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewPdf = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.attachment = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.attachment1 = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteDialog = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addBranchTemp = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.treeviewCompoent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.assignContentToClass = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.assignTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.getLinkRedirection = _t.first);
        } }, hostBindings: function AddBooksComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("dragend", function AddBooksComponent_dragend_HostBindingHandler($event) { return ctx.onDragEnd($event); });
        } }, decls: 11, vars: 1, consts: [["viewPdf", ""], ["deleteDialog", ""], ["assignContentToClass", ""], ["assignTemplate", ""], ["getLinkRedirection", ""], ["class", "container-fluid", 4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "card", "tab2-card"], [1, "card-header", "pb-0"], [1, "text-capitalize"], [1, "text-muted"], [1, "text-danger"], [1, "card-body", "tab2-card"], ["class", "needs-validation user-add", 3, "formGroup", 4, "ngIf"], [1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "col-12", "flex-wrap", "d-flex", "justify-content-center", "my-3", "dragNDrop"], [1, "form-group", "col-md-12", "flex-wrap", "dragNDrop"], [2, "padding", "15px"], [1, "col-md-12", "row", "d-flex", "px-0"], [1, "col-md-4", "text-center"], [1, "col-md-12", "content-book-layout"], [2, "color", "#ca9be2"], ["for", "file1", "appFileDragNDrop", "", 1, "dropzone", "drop-layout", 3, "filesChangeEmiter"], [1, "text-wrapper"], [1, "centered"], ["type", "file", "name", "file1", "id", "file1", "accept", ".pdf", "multiple", "", 3, "change"], ["for", "file1"], [1, "dropzone", "link-layout", 3, "click"], [2, "color", "cadetblue"], ["for", "file2", "appFileDragNDrop", "", 1, "dropzone", "drop-layout", 3, "filesChangeEmiter"], ["type", "file", "name", "file2", "id", "file2", "accept", ".pdf", "multiple", "", 3, "change"], ["for", "file2"], [1, "text-center", 2, "color", "#3693b7"], ["for", "file", "appFileDragNDrop", "", 1, "dropzone", "drop-layout", 3, "filesChangeEmiter"], ["type", "file", "name", "file", "id", "file", "accept", ".pdf", "multiple", "", 3, "change"], ["for", "file"], [1, "col-12", "px-0", "d-flex", "flex-wrap"], ["class", "col-4", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "w-100", "d-flex", "flex-wrap"], ["class", "fileItem-input col-3 mb-4", 3, "title", 4, "ngFor", "ngForOf"], [1, "form-group", "row"], [1, "col-12", "col-md-4", "col-xl-3"], [2, "visibility", "hidden"], [1, "ml-1", 2, "color", "#dc3545 !important", 3, "ngStyle"], [1, "col-12", "col-md-7", "col-xl-8"], ["bindLabel", "subject_name", "bindValue", "subject_id", "formControlName", "subject", "multiple", "true", "placeholder", "Select Subject", "typeToSearchText", "", 3, "items"], ["class", "error", 4, "ngIf"], ["bindLabel", "grade_name", "bindValue", "grade_id", "formControlName", "grade", "multiple", "true", "placeholder", "Select Grade", "typeToSearchText", "", 3, "items"], [1, "col-xl-3", "col-md-4"], [1, "col-xl-8", "col-md-7"], ["formControlName", "access", 1, "form-control"], ["disabled", "", "selected", "", "value", ""], ["value", "1", 4, "ngIf"], ["value", "2", 4, "ngIf"], ["value", "4", 4, "ngIf"], [1, "row", "d-flex", "align-items-center"], [3, "type", "selectedbatch"], ["formControlName", "status", 1, "form-control"], ["disabled", "", "selected", ""], ["value", "1"], ["value", "2"], [1, "form-group", "row", "mb-0"], [1, "col-12", 2, "position", "relative", "font-size", "15px", "left", "0.4rem"], ["formControlName", "downloadContent", "type", "checkbox", 1, "form-check-input", "cursor"], ["for", "download"], [1, "col-11"], ["type", "button", 1, "btn", "btn-primary", "pull-right", "col-2", 3, "click"], [1, "col-4"], [1, "card", "link-card", "border-0", "p-2", "mb-3"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "d-flex"], [1, "badge", "badge-dark", "flex-center", "mr-2"], [1, "badge", "flex-center", 2, "color", "whitesmoke", 3, "ngStyle"], [1, "fa", "fa-trash-o", "f-20px", "ml-1", 3, "click"], [1, "color-primary", "text-left", "text-underline", "cursor", "my-2"], ["type", "text", "placeholder", "Enter Content Name", 1, "form-control", 3, "ngModelChange", "ngModelOptions", "ngModel"], [1, "fileItem-input", "col-3", "mb-4", 3, "title"], [1, "fileItem", 2, "width", "100%", "display", "block"], [1, "col-md-12", "px-0", "d-flex", "justify-content-between"], [1, "col-md-6", "px-0"], ["class", "badge mb-2", "style", "background-color: #3693b7; color: whitesmoke", 4, "ngIf"], ["class", "badge mb-2", "style", "background-color: #ca9be2; color: whitesmoke", 4, "ngIf"], ["class", "badge mb-2", "style", "background-color: cadetblue; color: whitesmoke", 4, "ngIf"], [1, "col-md-6", "px-0", "d-flex", "justify-content-end"], [1, "fa", "fa-link", "f-22px", 3, "click"], [1, "fa", "fa-trash-o", "f-22px", "ml-2", 3, "click"], [1, "col-sm-12", "px-0"], [1, "d-inline"], ["class", "col-sm-12  ml-1", 4, "ngIf"], [1, "w-100", "mt-2"], ["type", "text", 1, "form-control", "mx-1", 3, "ngModelChange", "ngModelOptions", "ngModel"], [1, "badge", "mb-2", 2, "background-color", "#3693b7", "color", "whitesmoke"], [1, "badge", "mb-2", 2, "background-color", "#ca9be2", "color", "whitesmoke"], [1, "badge", "mb-2", 2, "background-color", "cadetblue", "color", "whitesmoke"], [1, "col-sm-12", "ml-1"], ["class", "col-12 px-0", 4, "ngFor", "ngForOf"], [1, "col-12", "px-0"], ["target", "_blank", 3, "href"], [1, "fa", "fa-external-link", "fa-1x", "ml-2", 3, "click"], [1, "fa", "fa-trash-o", "fa-1x", "ml-1", 3, "click"], [1, "error"], ["value", "4"], [1, "modal-body"], [1, "col-md-12", "modal-header"], [1, "modal-title"], [1, "text-right"], ["aria-hidden", "true", 1, "fa", "fa-close", "fa-2x", 2, "cursor", "pointer", 3, "click"], [1, "col-md-12"], [2, "display", "block", 3, "src"], [1, "col-md-12", "my-3"], [1, "mb-0"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "modal-header"], [1, "contenttext", "text-center", "mb-0"], ["type", "button", 1, "btn", "cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [3, "closePopUp", "multiContentId", "classData", "contentDetails"], [1, "modal-header", "align-items-center"], [1, "modal-title", "font-weight-bold", 2, "font-size", "18px", "color", "black"], [1, "text-right", "mb-0", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-close", "cursor", 2, "font-size", "18px", "color", "black"], [1, "col-md-12", "my-3", "container-fluid", 3, "formGroup"], ["formArrayName", "resourceLink", 4, "ngFor", "ngForOf"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["formArrayName", "resourceLink"], [1, "row", "text-center", "mt-1", 3, "formGroupName"], [1, "w-100", "col-md-3"], ["formControlName", "type", 1, "form-control"], ["disabled", "", "selected", "", 3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-md-3 w-100", 4, "ngIf"], [1, "w-100", 3, "ngClass"], ["formControlName", "link", "type", "text", "placeholder", "Link", 1, "form-control"], ["class", "col-md-1 px-0 d-flex align-items-center w-100", 4, "ngIf"], [3, "value"], [1, "col-md-3", "w-100"], ["formControlName", "name", "type", "text", "placeholder", "Enter Link Name", 1, "form-control"], [1, "col-md-1", "px-0", "d-flex", "align-items-center", "w-100"], ["class", "fas fa-plus-circle color-primary fa-2x cursor", 3, "click", 4, "ngIf"], ["class", "fas fa-minus-circle color-primary fa-2x cursor", 3, "click", 4, "ngIf"], [1, "fas", "fa-plus-circle", "color-primary", "fa-2x", "cursor", 3, "click"], [1, "fas", "fa-minus-circle", "color-primary", "fa-2x", "cursor", 3, "click"]], template: function AddBooksComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AddBooksComponent_div_0_Template, 14, 2, "div", 5)(1, AddBooksComponent_ng_template_1_Template, 10, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, AddBooksComponent_ng_template_3_Template, 11, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(5, AddBooksComponent_ng_template_5_Template, 15, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(7, AddBooksComponent_ng_template_7_Template, 1, 3, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(9, AddBooksComponent_ng_template_9_Template, 16, 5, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showPage);
        } }, dependencies: [i15.NgClass, i15.NgForOf, i15.NgIf, i15.NgStyle, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i2.FormGroupName, i2.FormArrayName, i16.NgSelectComponent, i2.NgModel, i17.PdfViewerComponent, i18.FileDragNDropDirective, i19.ConfirmContentAssignComponent, i20.TreeviewContentfolderComponent, i15.UpperCasePipe, i15.TitleCasePipe], styles: [".custom-upload-input[_ngcontent-%COMP%] {\n  color: transparent;\n}\n.custom-upload-input[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n.custom-upload-input[_ngcontent-%COMP%]::before {\n  content: 'Choose files';\n  color: black;\n  display: inline-block;\n  background: #1d6aa5;\n  border-radius: 3px;\n  padding: 12px 15px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 11pt;\n  color: #fff;\n}\n\n///\n.custom-upload-input[_ngcontent-%COMP%]:hover::before {\n  border-color: black;\n}\n.custom-upload-input[_ngcontent-%COMP%]:active {\n  outline: 0;\n}\n.custom-upload-input[_ngcontent-%COMP%]:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n\n.form-group[_ngcontent-%COMP%] {\n  align-items: center;\n\n  label {\n    margin-bottom: 0;\n\n    span {\n      color: white !important;\n    }\n  }\n}\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 90px;\n  height: 34px;\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {display:none;}\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #8F008A;\n  -webkit-transition: .4s;\n  transition: .4s;\n  color: white;\n\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #2ab934;\n}\n\ninput[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  -webkit-transform: translateX(55px);\n  -ms-transform: translateX(55px);\n  transform: translateX(55px);\n}\n\n\n\n.on[_ngcontent-%COMP%]\n{\n  display: none;\n}\n\n.on[_ngcontent-%COMP%], .off[_ngcontent-%COMP%]\n{\n  color: white;\n  position: absolute;\n  transform: translate(-50%,-50%);\n  top: 50%;\n  left: 50%;\n  font-size: 10px;\n  font-family: Verdana, sans-serif;\n}\n\ninput[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]   .on[_ngcontent-%COMP%]\n{display: block;}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]   .off[_ngcontent-%COMP%]\n{display: none;}\n\n\n\n\n\n\n.slider.round[_ngcontent-%COMP%] {\n  border-radius: 34px;\n  //border: 1px solid #8F008A;\n}\n\n.slider.round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\n.link-card[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  box-shadow: 1px 2px 6px 0 #d5d5d5;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddBooksComponent, [{
        type: Component,
        args: [{ selector: 'app-add-books', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\" *ngIf=\"showPage\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-header pb-0\">\n                    <h5 class=\"text-capitalize\">{{type}} Content</h5>\n                    <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n                </div>\n                <div class=\"card-body tab2-card\">\n                    <form *ngIf=\"uploadType == 'multi'\" [formGroup]=\"booksform\" class=\"needs-validation user-add\">\n                        <div class=\"form-group col-12 flex-wrap d-flex justify-content-center my-3 dragNDrop\">\n                            <div class=\"form-group col-md-12 flex-wrap dragNDrop\">\n                                <div style=\"padding: 15px;\">\n                                    <div class=\"col-md-12 row d-flex px-0\">\n                                        <div class=\"col-md-4 text-center\">\n                                            <div class=\"col-md-12 content-book-layout\">\n                                                <h4 style=\"color: #ca9be2\">Assignment</h4>\n                                                <label for=\"file1\" (filesChangeEmiter)=\"onFileChange($event, '2')\" appFileDragNDrop class=\"dropzone drop-layout\">\n                                                    <div class=\"text-wrapper\">\n                                                        <div class=\"centered\">\n                                                            <input type=\"file\" name=\"file1\" id=\"file1\" accept=\".pdf\" (change)=\"uploadFile($event, '2')\" multiple><label for=\"file1\">Drag and drop<br> or <br>browse your PDF</label>\n                                                        </div>\n                                                    </div>\n                                                </label>\n                                                <label class=\"dropzone link-layout\" (click)=\"openLinkPage('4', '2')\">\n                                                    <div class=\"text-wrapper\">\n                                                        <div class=\"centered\">\n                                                            <label>Click here to add Link<br> to create content<br> <small>(PPT, Word, Audio, Video)</small></label>\n                                                        </div>\n                                                    </div>\n                                                </label>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-4 text-center\">\n                                            <div class=\"col-md-12 content-book-layout\">\n                                                <h4 style=\"color: cadetblue\">Assessment</h4>\n                                                <label for=\"file2\" (filesChangeEmiter)=\"onFileChange($event, '3')\" appFileDragNDrop class=\"dropzone drop-layout\">\n                                                    <div class=\"text-wrapper\">\n                                                        <div class=\"centered\">\n                                                            <input type=\"file\" name=\"file2\" id=\"file2\" accept=\".pdf\" (change)=\"uploadFile($event, '3')\" multiple>\n                                                            <label for=\"file2\">Drag and drop<br> or <br>browse your PDF</label>\n                                                        </div>\n                                                    </div>\n                                                </label>\n                                                <label class=\"dropzone link-layout\" (click)=\"openLinkPage('4', '3')\">\n                                                    <div class=\"text-wrapper\">\n                                                        <div class=\"centered\">\n                                                            <label>Click here to add Link<br> to create content<br> <small>(PPT, Word, Audio, Video)</small></label>\n                                                        </div>\n                                                    </div>\n                                                </label>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-4 text-center\">\n                                            <div class=\"col-md-12 content-book-layout\">\n                                                <h4 class=\"text-center\" style=\"color: #3693b7\">Resource</h4>\n                                                <label for=\"file\" (filesChangeEmiter)=\"onFileChange($event, '1')\" appFileDragNDrop class=\"dropzone drop-layout\">\n                                                    <div class=\"text-wrapper\">\n                                                        <div class=\"centered\">\n                                                            <input type=\"file\" name=\"file\" id=\"file\" accept=\".pdf\" (change)=\"uploadFile($event, '1')\" multiple>\n                                                            <label for=\"file\">Drag and drop<br> or <br>browse your PDF</label>\n                                                        </div>\n                                                    </div>\n                                                </label>\n                                                <label class=\"dropzone link-layout\" (click)=\"openLinkPage('4', '1')\">\n                                                    <div class=\"text-wrapper\">\n                                                        <div class=\"centered\">\n                                                            <label>Click here to add Link<br> to create content<br> <small>(PPT, Word, Audio, Video)</small></label>\n                                                        </div>\n                                                    </div>\n                                                </label>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-12 px-0 d-flex flex-wrap\">\n                                            <div class=\"col-4\" *ngFor=\"let item of commonLinks; let i = index\">\n                                                <div class=\"card link-card border-0 p-2 mb-3\">\n                                                    <div class=\"d-flex justify-content-between mb-2\">\n                                                        <div class=\"d-flex\">\n                                                            <span class=\"badge badge-dark flex-center mr-2\">{{item.type}}</span>\n                                                            <small [ngStyle]=\"{'background-color': item.resource_type == '2' ? '#ca9be2' : item.resource_type == '3' ?\n                                                             'cadetblue' : '#3693b7'}\" class=\"badge flex-center\" style=\"color: whitesmoke\">\n                                                                {{item.resource_type == '2' ? 'Assignment' : item.resource_type == '3' ? 'Assessment' : 'Resource'}}</small>\n                                                        </div>\n                                                        <i class=\"fa fa-trash-o f-20px ml-1\" (click)=\"deleteCommonLink(i)\"></i>\n                                                    </div>\n                                                    <span class=\"color-primary text-left text-underline cursor my-2\">{{item.link}}</span>\n                                                    <input type=\"text\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"item.name\" placeholder=\"Enter Content Name\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <hr>\n                                    <h3 *ngIf=\"pdfpath.length >0\">Files</h3>\n                                    <div class=\"w-100 d-flex flex-wrap\">\n                                        <div *ngFor=\"let f of pdfpath; let ind = index\" class=\"fileItem-input col-3 mb-4\" title=\"{{f.image}}\">\n                                            <div class=\"fileItem\" style=\"width: 100%; display: block;\">\n                                                <div class=\"col-md-12 px-0 d-flex justify-content-between\">\n                                                    <!-- <div class=\"col-md-2\">\n                                                        <i class=\"fa fa-file-pdf-o fa-1x\" aria-hidden=\"true\" style=\"cursor:pointer\" ></i>\n                                                    </div> -->\n                                                    <div class=\"col-md-6 px-0\">\n                                                        <small *ngIf=\"f.resource_type == '1'\" class=\"badge mb-2\" style=\"background-color: #3693b7; color: whitesmoke\">Resource</small>\n                                                        <small *ngIf=\"f.resource_type == '2'\" class=\"badge mb-2\" style=\"background-color: #ca9be2; color: whitesmoke\">Assignment</small>\n                                                        <small *ngIf=\"f.resource_type == '3'\" class=\"badge mb-2\" style=\"background-color: cadetblue; color: whitesmoke\">Assessment</small>\n                                                    </div>\n                                                    <div class=\"col-md-6 px-0 d-flex justify-content-end\">\n                                                        <i class=\"fa fa-link f-22px\" (click)=\"openLinkPage(f.resource_type, ind)\"></i>\n                                                        <i class=\"fa fa-trash-o f-22px ml-2\" (click)=\"openConfirmDialog(ind, 'pdf')\"></i>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-sm-12 px-0\">\n                                                    <h5 class=\"d-inline\">{{f.image + '.pdf'}}</h5>\n                                                </div>\n                                                <div class=\"col-sm-12  ml-1\" *ngIf=\"f.links.length != 0\">\n                                                    <div class=\"col-12 px-0\" *ngFor=\"let list of f.links; let j = index\">\n                                                        <label><a href=\"{{list.link}}\" target=\"_blank\">{{list.type}}</a></label>\n                                                        <i class=\"fa fa-external-link fa-1x ml-2\" (click)=\"editLink(ind, j, list)\"></i>\n                                                        <i class=\"fa fa-trash-o fa-1x ml-1\" (click)=\"openConfirmDialog({pdfIndex: ind, linkIndex: j}, 'link')\"></i>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"w-100 mt-2\">\n                                                <input type=\"text\" class=\"form-control mx-1\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"f.image\" />\n                                            </div>\n                                        </div>\n\n                                        <div>\n\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-12 col-md-4 col-xl-3\"><span style=\"visibility: hidden\">*</span>\n                                Subject Name<span class=\"ml-1\" style=\"color: #dc3545 !important\" [ngStyle]=\"{'visibility' : roleid == '4' ? 'none' : 'hidden'}\">*</span></label>\n                            <div class=\"col-12 col-md-7 col-xl-8\">\n                                <ng-select [items]=\"subjectData\"\n                                           bindLabel=\"subject_name\"\n                                           bindValue=\"subject_id\"\n                                           formControlName=\"subject\"\n                                           multiple=\"true\"\n                                           placeholder=\"Select Subject\"\n                                           typeToSearchText=\"\"\n                                >\n                                </ng-select>\n                                <em class=\"error\" *ngIf=\"roleid == '4' && (!booksform.get('subject').valid && (booksform.get('subject').dirty || booksform.get('subject').touched))\">Subject is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-12 col-md-4 col-xl-3\"><span style=\"visibility: hidden\">*</span>\n                                Grade Name</label>\n                            <div  class=\"col-12 col-md-7 col-xl-8\">\n                                <ng-select  [items]=\"gradeData\"\n                                            bindLabel=\"grade_name\"\n                                            bindValue=\"grade_id\"\n                                            formControlName=\"grade\"\n                                            multiple=\"true\"\n                                            placeholder=\"Select Grade\"\n                                            typeToSearchText=\"\">\n                                </ng-select>\n<!--                                <em class=\"error\" *ngIf=\"!booksform.get('grade').valid && (booksform.get('grade').dirty || booksform.get('grade').touched)\">Grade is required</em>-->\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                Access Type</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <select class=\"form-control\" formControlName=\"access\">\n                                    <option disabled selected value=\"\">&#45;&#45;Select&#45;&#45;</option>\n                                    <option *ngIf=\"roleid != '6'\" value=\"1\">Access to all within Org</option>\n                                    <option *ngIf=\"roleid != '6'\" value=\"2\">Access only for you</option>\n                                    <!-- <option *ngIf=\"roleid != '6'\" value=\"3\">Public</option> -->\n                                    <option *ngIf=\"roleid == '6'\" value=\"4\">Access within corporate</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                Content Folder</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <div class=\"row d-flex align-items-center\">\n                                    <app-treeview-contentfolder\n                                        [type]=\"type\" [selectedbatch]=\"batchid\"></app-treeview-contentfolder>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-12 col-md-4 col-xl-3\"><span>*</span>\n                                Status</label>\n                            <div class=\"col-12 col-md-7 col-xl-8\">\n                                <select class=\"form-control\" formControlName=\"status\">\n                                    <option disabled selected>&#45;&#45;Select&#45;&#45;</option>\n                                    <option value=\"1\">Active</option>\n                                    <option value=\"2\">Suspended</option>\n<!--                                    <option *ngIf=\"type =='edit'\" value=\"3\">Suspended</option>-->\n                                    <option *ngIf=\"type =='edit'\" value=\"4\">Deleted</option>\n                                </select>\n                                    <em *ngIf=\"!booksform.get('status').valid && (booksform.get('status').dirty || booksform.get('status').touched)\" class=\"error\">Status is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row mb-0\">\n                            <label class=\"col-12 col-md-4 col-xl-3\"><span style=\"visibility: hidden\">*</span>\n                                Download Content</label>\n                            <div class=\"col-12 col-md-7 col-xl-8\">\n                                <div class=\"col-12\" style=\"position: relative; font-size: 15px; left: 0.4rem\">\n                                    <input class=\"form-check-input cursor\" formControlName=\"downloadContent\" type=\"checkbox\"><label for=\"download\">Allow</label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-11\">\n                                <button type=\"button\" (click)=\"addbooks(type)\" class=\"btn btn-primary pull-right col-2\">{{type ? 'Save' : 'Update'}}</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n<!--    <div class=\"row mt-4\" *ngIf=\"!allowAdd\">-->\n<!--        <div class=\"col-md-12\">-->\n<!--            <button class=\"btn btn-outline-primary pull-right\" (click)=\"backAction()\"><i class=\"fa fa-long-arrow-left fa-1x\" aria-hidden=\"true\"></i> Back</button>-->\n<!--        </div>-->\n<!--    </div>-->\n<!--    <div class=\"row d-flex justify-content-center list-card mt-5\" *ngIf=\"!allowAdd\">-->\n<!--        <div class=\"col-8\">-->\n<!--            <button class=\"nodataList\">You Don't Have Permission to add Books for {{schoolName}}</button>-->\n<!--        </div>-->\n<!--    </div>-->\n</div>\n<ng-template #viewPdf let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-12 modal-header\">\n                    <h4 class=\"modal-title\">{{pdfName}}</h4>\n                    <p class=\"text-right\">\n                        <i class=\"fa fa-close fa-2x\" aria-hidden=\"true\" style=\"cursor:pointer\" (click)=\"close()\"></i>\n                    </p>\n                </div>\n                <div class=\"col-md-12\">\n                    <pdf-viewer  [src]=\"pdfTemplate\" style=\"display: block;\"></pdf-viewer>\n                </div>\n            </div>\n        </div>\n        <!-- Container-fluid Ends-->\n    </div>\n</ng-template>\n<!-- Container-fluid Ends-->\n<ng-template #deleteDialog let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-12 my-3\">\n                    <h5 class=\"mb-0\">Are sure to delete this {{isDeleteLink ? 'Link' : 'PDF'}}?</h5>\n                </div>\n            </div>\n        </div>\n        <!-- Container-fluid Ends-->\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"close()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"isDeleteLink ? this.deleteLink() : this.deleteFromArray(this.selectedDeletePdf.index)\">Confirm</button>\n    </div>\n</ng-template>\n\n\n<ng-template #assignContentToClass let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h5 class=\"contenttext text-center mb-0\">Assign Content</h5>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5>\n                    <span>Do you want to assign this content to the Class {{contentCreatedForm != 'class' ? 'or Content Folder' : ''}}</span>?</h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn cancel\" (click)=\"dontAssign()\">No</button>\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"assignContent()\"\n        >Yes</button>\n    </div>\n</ng-template>\n\n<ng-template #assignTemplate let-c=\"close\" let-d=\"dismiss\">\n    <app-confirm-content-assign\n            [multiContentId]=\"multiContentId\"\n            [classData]=\"classDetails\"\n            [contentDetails]=\"assignData\"\n            (closePopUp)=\"closeAssignPopUp()\"\n    >\n    </app-confirm-content-assign>\n</ng-template>\n\n<!--// link //-->\n\n<ng-template #getLinkRedirection let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h3 style=\"font-size: 18px; color: black\" class=\"modal-title font-weight-bold\">\n            <span>{{resourceLinkList == '1' ? 'Resource' : resourceLinkList == '2' ? 'Assignment' : resourceLinkList == '3' ? 'Assessment' : 'Add Link'}}</span>\n        </h3>\n        <p class=\"text-right mb-0\" (click)=\"close()\">\n            <i style=\"font-size: 18px; color: black\" class=\"fa fa-close cursor\" aria-hidden=\"true\"></i>\n        </p>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div  class=\"col-md-12 my-3 container-fluid\" [formGroup]=\"booksform\">\n                        <div  formArrayName=\"resourceLink\" *ngFor=\"let list of booksform.get('resourceLink')['controls']; let i=index; let first = first\">\n                            <div class=\"row text-center mt-1\" [formGroupName]=\"i\">\n                                <div class=\"w-100 col-md-3\">\n                                    <select class=\"form-control\" formControlName=\"type\">\n                                        <option [value]=\"null\" disabled selected>Select Link Type</option>\n                                        <option [value]=\"list\" *ngFor=\"let list of linksType\">{{list == 'ppt' ? (list | uppercase) : (list | titlecase)}}</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-md-3 w-100\" *ngIf=\"resourceLinkList != '4'\">\n                                    <input class=\"form-control\" formControlName=\"name\" type=\"text\" placeholder=\"Enter Link Name\">\n                                </div>\n                                <div class=\"w-100\" [ngClass]=\"resourceLinkList != '4' && isEditLink ? 'col-md-6' : (resourceLinkList != '4' && !isEditLink) ?  'col-md-5' : isEditLink ? 'col-md-9' : 'col-md-8'\">\n                                    <input class=\"form-control\" formControlName=\"link\"\n                                           type=\"text\" placeholder=\"Link\">\n                                </div>\n                                <div class=\"col-md-1 px-0 d-flex align-items-center w-100\" *ngIf=\"!isEditLink\">\n                                    <i  class=\"fas fa-plus-circle color-primary fa-2x cursor\" *ngIf=\"first\" (click)=\"addarray()\"></i>\n                                    <i  class=\"fas fa-minus-circle color-primary fa-2x cursor\" *ngIf=\"!first\" (click)=\"removeArray(i)\"></i>\n                                </div>\n                            </div>\n                        </div>\n                </div>\n\n            </div>\n        </div>\n        <!-- Container-fluid Ends-->\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"close()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!isEditLink\" (click)=\"getLinkDetails(booksform.value)\">Confirm</button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isEditLink\" (click)=\"updateLink(booksform.value)\">Update</button>\n    </div>\n</ng-template>\n\n", styles: ["\n.custom-upload-input {\n  color: transparent;\n}\n.custom-upload-input::-webkit-file-upload-button {\n  visibility: hidden;\n}\n.custom-upload-input::before {\n  content: 'Choose files';\n  color: black;\n  display: inline-block;\n  background: #1d6aa5;\n  border-radius: 3px;\n  padding: 12px 15px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 11pt;\n  color: #fff;\n}\n\n///\n.custom-upload-input:hover::before {\n  border-color: black;\n}\n.custom-upload-input:active {\n  outline: 0;\n}\n.custom-upload-input:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n\n.form-group {\n  align-items: center;\n\n  label {\n    margin-bottom: 0;\n\n    span {\n      color: white !important;\n    }\n  }\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 90px;\n  height: 34px;\n}\n\n.switch input {display:none;}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #8F008A;\n  -webkit-transition: .4s;\n  transition: .4s;\n  color: white;\n\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #2ab934;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(55px);\n  -ms-transform: translateX(55px);\n  transform: translateX(55px);\n}\n\n/*------ ADDED CSS ---------*/\n.on\n{\n  display: none;\n}\n\n.on, .off\n{\n  color: white;\n  position: absolute;\n  transform: translate(-50%,-50%);\n  top: 50%;\n  left: 50%;\n  font-size: 10px;\n  font-family: Verdana, sans-serif;\n}\n\ninput:checked+ .slider .on\n{display: block;}\n\ninput:checked + .slider .off\n{display: none;}\n\n/*--------- END --------*/\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n  //border: 1px solid #8F008A;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n.link-card {\n  border-radius: 6px;\n  box-shadow: 1px 2px 6px 0 #d5d5d5;\n}\n"] }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.FormBuilder }, { type: i3.NgbModal }, { type: i4.ClassroomService }, { type: i5.CommonDataService }, { type: i6.CommonService }, { type: i7.ToastrService }, { type: i8.AuthService }, { type: i9.BookService }, { type: i10.SchoolService }, { type: i11.NewsubjectService }, { type: i1.Router }, { type: i12.ValidationService }, { type: i13.ConfigurationService }, { type: i14.CreatorService }], { viewPdf: [{
            type: ViewChild,
            args: ['viewPdf']
        }], attachment: [{
            type: ViewChild,
            args: ['attachments']
        }], attachment1: [{
            type: ViewChild,
            args: ['attachments1']
        }], deleteDialog: [{
            type: ViewChild,
            args: ['deleteDialog']
        }], addBranchTemp: [{
            type: ViewChild,
            args: ['addBranch']
        }], treeviewCompoent: [{
            type: ViewChild,
            args: [TreeviewContentfolderComponent, { static: false }]
        }], assignContentToClass: [{
            type: ViewChild,
            args: ['assignContentToClass']
        }], assignTemplate: [{
            type: ViewChild,
            args: ['assignTemplate']
        }], getLinkRedirection: [{
            type: ViewChild,
            args: ['getLinkRedirection']
        }], onDragEnd: [{
            type: HostListener,
            args: ['dragend', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddBooksComponent, { className: "AddBooksComponent" }); })();
//# sourceMappingURL=add-Books.component.js.map